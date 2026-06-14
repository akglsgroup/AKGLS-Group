import { LeadRecord } from '../types';

/**
 * Fetches the user's geo-location details via client-side IP lookup.
 * Uses a timeout to avoid delaying form actions.
 */
async function getGeoLocation(): Promise<{ country: string; city: string; region: string; ip?: string }> {
  try {
    const fetchPromise = fetch('https://ipapi.co/json/').then((res) => {
      if (!res.ok) throw new Error('Failed to fetch IP details');
      return res.json();
    });

    // Timeout of 1.5 seconds so as not to block form submissions
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Geo IP Timeout')), 1500)
    );

    const data: any = await Promise.race([fetchPromise, timeoutPromise]);
    return {
      country: data.country_name || data.country || 'Unknown',
      city: data.city || 'Unknown',
      region: data.region || 'Unknown',
      ip: data.ip,
    };
  } catch (error) {
    console.warn('Client-side geo-lookup skipped/timed out:', error);
    return { country: 'Unknown', city: 'Unknown', region: 'Unknown' };
  }
}

/**
 * Capture a new lead from any form submission on the website.
 * This aggregates page details, current time, and geo-location, then sends it to the API
 * with a automatic client-side backup store is used for local offline/static mode.
 */
export async function captureLead(formData: {
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  websiteUrl?: string;
  budget?: string;
  primaryGoal?: string;
  notes?: string;
  rawDetails?: Record<string, any>;
}): Promise<LeadRecord | null> {
  try {
    // 1. Gather browser details
    const pageAddress = window.location.href;
    const pageTitle = document.title;
    const time = new Date().toISOString();

    // 2. Fetch client-side geo info in parallel (with timeout)
    const geo = await getGeoLocation();

    // 3. Prepare payload
    const payload = {
      name: formData.name || 'Anonymous',
      email: formData.email || '',
      phone: formData.phone || '',
      companyName: formData.companyName || '',
      websiteUrl: formData.websiteUrl || '',
      budget: formData.budget || '',
      primaryGoal: formData.primaryGoal || '',
      notes: formData.notes || '',
      pageAddress,
      pageTitle,
      time,
      country: geo.country,
      city: geo.city,
      region: geo.region,
      ip: geo.ip,
      rawDetails: formData.rawDetails || {},
      status: 'New' as const,
      assignedTo: 'Unassigned',
    };

    // 4. Save to local storage database (Guarantees no lead is lost, even on static sites)
    const localLeadsStr = localStorage.getItem('akgls_system_leads') || '[]';
    let localLeads: LeadRecord[] = [];
    try {
      localLeads = JSON.parse(localLeadsStr);
      if (!Array.isArray(localLeads)) {
        localLeads = [];
      }
    } catch {
      localLeads = [];
    }

    const clientLead: LeadRecord = {
      id: 'lead_' + Math.random().toString(36).substring(2, 11),
      ...payload,
    };
    localLeads.unshift(clientLead);
    localStorage.setItem('akgls_system_leads', JSON.stringify(localLeads));

    // 5. Try saving to server backend
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data && data.success && data.lead) {
            return data.lead;
          }
        }
      }
    } catch (serverErr) {
      console.warn('Backend capture unavailable (running in secure client-only fallback):', serverErr);
    }

    return clientLead;
  } catch (error) {
    console.error('Failed to capture lead:', error);
    return null;
  }
}

/**
 * Auto-capture form submit events from any form elements discovered on the webpage.
 * This intercepts generic submissions and tries to map them.
 */
export function initAutoLeadCapture() {
  if (typeof window === 'undefined') return;

  // Global listener for form submissions to capture leads automatically from the entire site
  document.addEventListener('submit', async (e) => {
    const form = e.target as HTMLFormElement;
    if (!form) return;

    try {
      const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
      const data: Record<string, string> = {};

      inputs.forEach((node) => {
        const input = node as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const name = input.name || input.id || ('placeholder' in input ? (input as any).placeholder : '');
        if (name && input.value !== undefined) {
          // Skip password fields or CSRF fields
          if (input.type === 'password' || name.toLowerCase().includes('csrf')) return;
          if (input.type === 'checkbox') {
            data[name] = (input as HTMLInputElement).checked ? 'Yes' : 'No';
          } else if (input.type === 'radio') {
            if ((input as HTMLInputElement).checked) {
              data[name] = input.value;
            }
          } else {
            data[name] = input.value;
          }
        }
      });

      // Find common details in a generic way
      const keys = Object.keys(data);
      const findValueByKeys = (possibleKeys: string[]) => {
        const foundKey = keys.find((key) =>
          possibleKeys.some((p) => key.toLowerCase().replace(/[^a-z0-9]/g, '').includes(p))
        );
        return foundKey ? data[foundKey] : '';
      };

      const email = findValueByKeys(['email', 'mail']);
      const name = findValueByKeys(['name', 'first', 'last', 'fullname', 'contactname', 'user']);
      const phone = findValueByKeys(['phone', 'tel', 'mobile', 'contactno', 'whatsapp']);
      const companyName = findValueByKeys(['company', 'firm', 'business', 'org']);
      const websiteUrl = findValueByKeys(['url', 'website', 'site', 'domain']);
      const budget = findValueByKeys(['budget', 'monthly', 'spend']);
      const primaryGoal = findValueByKeys(['goal', 'service', 'interest', 'objective', 'lookingfor']);
      const notes = findValueByKeys(['notes', 'message', 'msg', 'comment', 'detail', 'textarea']);

      // If at least an email or name is present, capture!
      if (email || name) {
        await captureLead({
          name: name || 'Anonymous User',
          email: email || 'no-email@captured.com',
          phone,
          companyName,
          websiteUrl,
          budget,
          primaryGoal,
          notes,
          rawDetails: data,
        });
      }
    } catch (err) {
      console.error('Error in automatic global form capture listener:', err);
    }
  });
}

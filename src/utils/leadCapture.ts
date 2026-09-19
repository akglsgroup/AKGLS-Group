import { LeadRecord } from '../types';
import { saveLeadToFirestore } from '../firebase';

/**
 * Non-blocking client-side geo lookup (fast with short 800ms race)
 */
async function getGeoLocation(): Promise<{ country: string; city: string; region: string; ip?: string }> {
  try {
    const fetchPromise = fetch('https://ipapi.co/json/').then((res) => {
      if (!res.ok) throw new Error('Geo fetch error');
      return res.json();
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Geo Timeout')), 800)
    );

    const data: any = await Promise.race([fetchPromise, timeoutPromise]);
    return {
      country: data.country_name || data.country || 'Unknown',
      city: data.city || 'Unknown',
      region: data.region || 'Unknown',
      ip: data.ip,
    };
  } catch {
    return { country: 'Unknown', city: 'Unknown', region: 'Unknown' };
  }
}

/**
 * Capture a new lead from any form submission on the website.
 * Dispatches concurrently to the Express server API, Firebase Firestore, and LocalStorage.
 */
export async function captureLead(formData: {
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  websiteUrl?: string;
  budget?: string;
  primaryGoal?: string;
  notes?: string;
  pageAddress?: string;
  pageTitle?: string;
  status?: LeadRecord['status'];
  rawDetails?: Record<string, any>;
}): Promise<LeadRecord | null> {
  try {
    const pageAddress = formData.pageAddress || (typeof window !== 'undefined' ? window.location.href : 'https://www.akglsgroup.com');
    const pageTitle = formData.pageTitle || (typeof document !== 'undefined' ? document.title : 'AKGLS Group');
    const time = new Date().toISOString();
    const leadId = 'lead_' + Math.random().toString(36).substring(2, 11);

    // Fast non-blocking geo fetch
    const geo = await getGeoLocation();

    const payload: LeadRecord = {
      id: leadId,
      name: formData.name || 'Anonymous Prospect',
      email: formData.email || 'no-email@captured.com',
      phone: formData.phone || '',
      companyName: formData.companyName || '',
      websiteUrl: formData.websiteUrl || '',
      budget: formData.budget || '',
      primaryGoal: formData.primaryGoal || 'Consultation Request',
      notes: formData.notes || '',
      pageAddress,
      pageTitle,
      time,
      country: geo.country,
      city: geo.city,
      region: geo.region,
      ip: geo.ip || '',
      rawDetails: formData.rawDetails || {},
      status: formData.status || 'New',
      assignedTo: 'Unassigned',
    };

    // 1. Save to local browser storage backup immediately
    try {
      if (typeof window !== 'undefined') {
        const localLeadsStr = localStorage.getItem('akgls_system_leads') || '[]';
        let localLeads: LeadRecord[] = [];
        try {
          localLeads = JSON.parse(localLeadsStr);
          if (!Array.isArray(localLeads)) localLeads = [];
        } catch {
          localLeads = [];
        }
        localLeads.unshift(payload);
        localStorage.setItem('akgls_system_leads', JSON.stringify(localLeads.slice(0, 150)));
      }
    } catch (localErr) {
      console.warn('Local lead storage notice:', localErr);
    }

    // 2. Concurrently post to Express server API & Firebase Firestore
    const serverSavePromise = fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.warn('[CRM Sync] Backend API POST notice:', err);
        return null;
      });

    const firestoreSavePromise = saveLeadToFirestore(payload)
      .catch((err) => {
        console.warn('[CRM Sync] Firestore Direct Write notice:', err);
        return false;
      });

    // Await both destinations
    await Promise.allSettled([serverSavePromise, firestoreSavePromise]);

    return payload;
  } catch (error) {
    console.error('Failed to capture lead:', error);
    return null;
  }
}

/**
 * Auto-capture form submit events from ANY form element discovered on the webpage.
 * Uses capture-phase listener to guarantee interception before stopPropagation.
 */
let autoCaptureInitialized = false;

export function initAutoLeadCapture() {
  if (typeof window === 'undefined' || autoCaptureInitialized) return;
  autoCaptureInitialized = true;

  // Intercept all submit events in the capture phase
  document.addEventListener(
    'submit',
    async (e) => {
      const form = e.target as HTMLFormElement;
      if (!form || typeof form.querySelectorAll !== 'function') return;

      // Ignore CRM portal internal forms (e.g. PIN verification, edit note)
      if (form.id === 'crmPinForm' || form.closest('#leadManagementPortal') || form.closest('#lead-management-portal')) {
        return;
      }

      try {
        const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
        const rawMap: Record<string, string> = {};

        let detectedEmail = '';
        let detectedName = '';
        let detectedPhone = '';
        let detectedWebsite = '';
        let detectedCompany = '';
        let detectedBudget = '';
        let detectedGoal = '';
        let detectedNotes = '';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /[\d\s+\-()]{7,}/;
        const urlRegex = /^(https?:\/\/|[a-z0-9-]+\.[a-z]{2,})/i;

        inputs.forEach((node) => {
          const input = node as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
          const key = (input.name || input.id || input.getAttribute('placeholder') || '').trim();
          const val = input.value ? input.value.trim() : '';

          if (!val) return;
          if (input.type === 'password' || key.toLowerCase().includes('pin') || key.toLowerCase().includes('csrf')) {
            return;
          }

          if (input.type === 'checkbox') {
            rawMap[key || 'checkbox'] = (input as HTMLInputElement).checked ? 'Yes' : 'No';
            return;
          }

          rawMap[key || `field_${Object.keys(rawMap).length}`] = val;

          const lowerKey = key.toLowerCase();
          const lowerVal = val.toLowerCase();

          // Email detection
          if (!detectedEmail && (input.type === 'email' || lowerKey.includes('email') || lowerKey.includes('mail') || emailRegex.test(val))) {
            if (val.includes('@')) {
              detectedEmail = val;
            }
          }

          // Phone detection
          if (!detectedPhone && (input.type === 'tel' || lowerKey.includes('phone') || lowerKey.includes('mobile') || lowerKey.includes('tel') || lowerKey.includes('contact') || lowerKey.includes('whatsapp'))) {
            detectedPhone = val;
          }

          // Website / URL detection
          if (!detectedWebsite && (input.type === 'url' || lowerKey.includes('url') || lowerKey.includes('website') || lowerKey.includes('domain') || lowerKey.includes('site') || urlRegex.test(val))) {
            detectedWebsite = val;
          }

          // Name detection
          if (!detectedName && (lowerKey.includes('name') || lowerKey.includes('first') || lowerKey.includes('contact') || lowerKey.includes('user') || lowerKey.includes('merchant'))) {
            detectedName = val;
          }

          // Company detection
          if (!detectedCompany && (lowerKey.includes('company') || lowerKey.includes('firm') || lowerKey.includes('business') || lowerKey.includes('org') || lowerKey.includes('agency'))) {
            detectedCompany = val;
          }

          // Budget detection
          if (!detectedBudget && (lowerKey.includes('budget') || lowerKey.includes('spend') || lowerKey.includes('monthly') || lowerKey.includes('revenue'))) {
            detectedBudget = val;
          }

          // Primary goal / service interest
          if (!detectedGoal && (lowerKey.includes('service') || lowerKey.includes('goal') || lowerKey.includes('channel') || lowerKey.includes('interest') || lowerKey.includes('platform'))) {
            detectedGoal = val;
          }

          // Notes / message
          if (!detectedNotes && (input.tagName.toLowerCase() === 'textarea' || lowerKey.includes('note') || lowerKey.includes('message') || lowerKey.includes('comment') || lowerKey.includes('detail'))) {
            detectedNotes = val;
          }
        });

        // Submit button text check for intent
        const submitBtn = form.querySelector('button[type="submit"], input[type="submit"], button:not([type="button"])');
        const submitText = submitBtn ? (submitBtn.textContent || '').trim() : '';
        if (!detectedGoal && submitText && submitText.length < 80) {
          detectedGoal = submitText;
        }

        // If at least an email, phone, website URL, or name is present, record this lead
        if (detectedEmail || detectedPhone || detectedWebsite || detectedName) {
          await captureLead({
            name: detectedName || (detectedCompany ? `${detectedCompany} Representative` : 'Online Prospect'),
            email: detectedEmail || 'no-email@captured.com',
            phone: detectedPhone,
            websiteUrl: detectedWebsite,
            companyName: detectedCompany,
            budget: detectedBudget,
            primaryGoal: detectedGoal || 'Website Lead Capture',
            notes: detectedNotes,
            rawDetails: rawMap,
          });
        }
      } catch (err) {
        console.error('[CRM Lead Interceptor] Exception:', err);
      }
    },
    { capture: true }
  );
}

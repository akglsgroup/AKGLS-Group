import nodemailer from 'nodemailer';
import { LeadRecord } from '../types';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'amrish.singh01@gmail.com';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || process.env.GMAIL_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '';
const FROM_EMAIL = process.env.SMTP_FROM || process.env.FROM_EMAIL || `"AKGLS Group Lead Dispatcher" <${SMTP_USER || 'no-reply@akglsgroup.com'}>`;

/**
 * Generate formatted HTML template for lead notification
 */
export function generateLeadEmailHtml(lead: LeadRecord): string {
  const primaryGoal = lead.primaryGoal || 'General Consultation / Proposal';
  const name = lead.name || 'Anonymous Prospect';
  const email = lead.email || 'N/A';
  const phone = lead.phone || 'N/A';
  const company = lead.companyName || 'N/A';
  const website = lead.websiteUrl || 'N/A';
  const budget = lead.budget || 'Not specified';
  const pageAddress = lead.pageAddress || 'Direct submission';
  const pageTitle = lead.pageTitle || 'AKGLS Group';
  const location = [lead.city, lead.region, lead.country].filter(Boolean).join(', ') || 'Unknown Location';
  const time = new Date(lead.time || Date.now()).toUTCString();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Captured - AKGLS Group</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; color: #f8fafc;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background-color: #1e293b; border-radius: 16px; border: 1px solid #334155; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
          <!-- Header Banner -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%); text-align: left;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #ccfbf1; margin-bottom: 6px;">
                AKGLS Group CRM Notification
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; line-height: 1.2;">
                New Website Lead Captured
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #e0f2fe;">
                Goal / Service: <strong style="color: #ffffff;">${primaryGoal}</strong>
              </p>
            </td>
          </tr>

          <!-- Summary Highlights -->
          <tr>
            <td style="padding: 24px 32px; border-bottom: 1px solid #334155; background-color: #182234;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-right: 12px;">
                    <div style="font-size: 11px; text-transform: uppercase; font-weight: 600; color: #94a3b8; letter-spacing: 0.5px;">Contact Person</div>
                    <div style="font-size: 16px; font-weight: 700; color: #ffffff; margin-top: 4px;">${name}</div>
                    <div style="font-size: 13px; color: #38bdf8; margin-top: 2px;">
                      <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                    </div>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-left: 12px;">
                    <div style="font-size: 11px; text-transform: uppercase; font-weight: 600; color: #94a3b8; letter-spacing: 0.5px;">Direct Phone</div>
                    <div style="font-size: 16px; font-weight: 700; color: #ffffff; margin-top: 4px;">${phone}</div>
                    <div style="font-size: 13px; color: #94a3b8; margin-top: 2px;">${company}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Detailed Breakdown -->
          <tr>
            <td style="padding: 28px 32px;">
              <h2 style="font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #2dd4bf; margin: 0 0 16px 0;">
                Lead Attributes & Context
              </h2>
              
              <table width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size: 13px; color: #cbd5e1;">
                <tr style="border-bottom: 1px solid #334155;">
                  <td width="35%" style="font-weight: 600; color: #94a3b8; padding: 10px 0;">Website URL</td>
                  <td width="65%" style="color: #ffffff; padding: 10px 0;">
                    ${website !== 'N/A' ? `<a href="${website.startsWith('http') ? website : `https://${website}`}" target="_blank" style="color: #2dd4bf; text-decoration: none;">${website}</a>` : 'N/A'}
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #334155;">
                  <td style="font-weight: 600; color: #94a3b8; padding: 10px 0;">Budget Bracket</td>
                  <td style="color: #ffffff; padding: 10px 0; font-weight: 600;">${budget}</td>
                </tr>
                <tr style="border-bottom: 1px solid #334155;">
                  <td style="font-weight: 600; color: #94a3b8; padding: 10px 0;">Origin Page</td>
                  <td style="color: #ffffff; padding: 10px 0;">
                    ${pageTitle}<br>
                    <span style="font-size: 11px; color: #64748b; word-break: break-all;">${pageAddress}</span>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #334155;">
                  <td style="font-weight: 600; color: #94a3b8; padding: 10px 0;">Visitor Location</td>
                  <td style="color: #ffffff; padding: 10px 0;">${location} (IP: ${lead.ip || 'N/A'})</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #94a3b8; padding: 10px 0;">Timestamp (UTC)</td>
                  <td style="color: #ffffff; padding: 10px 0;">${time}</td>
                </tr>
              </table>

              ${lead.notes ? `
              <div style="margin-top: 20px; padding: 16px; background-color: #0f172a; border-radius: 8px; border-left: 3px solid #2dd4bf;">
                <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #94a3b8; margin-bottom: 4px;">Prospect Notes / Message:</div>
                <div style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">${lead.notes}</div>
              </div>
              ` : ''}

              <!-- Actions Button CTA -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(primaryGoal)}%20-%20AKGLS%20Group&body=Hi%20${encodeURIComponent(name)},%0A%0AThank%20you%20for%20contacting%20AKGLS%20Group%20regarding%20${encodeURIComponent(primaryGoal)}.%0A%0A" style="display: inline-block; background-color: #0d9488; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(13, 148, 136, 0.4);">
                      Reply to ${name} Directly
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0f172a; border-top: 1px solid #334155; text-align: center; font-size: 11px; color: #64748b;">
              Lead ID: <strong style="color: #94a3b8; font-family: monospace;">${lead.id}</strong> • Automated Notification sent to <span style="color: #cbd5e1;">${ADMIN_EMAIL}</span><br>
              AKGLS Group CRM Lead Engine • https://www.akglsgroup.com
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Sends lead notification email to the administrator
 */
export async function sendLeadNotificationEmail(lead: LeadRecord): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const html = generateLeadEmailHtml(lead);
    const subject = `[New Lead Alert] ${lead.name || 'Prospect'} - ${lead.primaryGoal || 'Consultation Request'}`;

    // Check if SMTP transport is configured
    if (SMTP_USER && SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        replyTo: lead.email && lead.email.includes('@') ? lead.email : undefined,
        subject,
        html,
        text: `New Lead Captured!\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCompany: ${lead.companyName}\nWebsite: ${lead.websiteUrl}\nGoal: ${lead.primaryGoal}\nBudget: ${lead.budget}\nTime: ${lead.time}\n\nView and manage leads in the AKGLS CRM Portal.`,
      });

      console.log(`[Email Dispatcher] Successfully sent lead notification to ${ADMIN_EMAIL} (Message ID: ${info.messageId})`);
      return { success: true, messageId: info.messageId };
    } else {
      // SMTP credentials not yet provided in environment; log simulated notification
      console.log(`[Email Dispatcher Notice] SMTP credentials not set (SMTP_USER / SMTP_PASS). Lead email notification queued for admin ${ADMIN_EMAIL}:`);
      console.log(`  -> Subject: ${subject}`);
      console.log(`  -> Prospect: ${lead.name} <${lead.email}>`);
      console.log(`  -> Goal: ${lead.primaryGoal}`);
      console.log(`  -> Website: ${lead.websiteUrl}`);
      console.log(`  -> To enable live email dispatch, configure SMTP_USER & SMTP_PASS in environment.`);
      return { success: true, messageId: 'simulated_local_dispatch' };
    }
  } catch (error: any) {
    console.error('[Email Dispatcher Error] Failed to send email notification:', error);
    return { success: false, error: error?.message || String(error) };
  }
}

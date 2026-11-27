/**
 * Content for the Privacy Policy and Terms of Service pages.
 *
 * IMPORTANT: this is a starting template written for AKGLS Group's actual
 * stack (Firebase, Google Analytics, ipapi.co geo lookup, Gemini-powered chat,
 * WhatsApp, email). Have it reviewed by a qualified lawyer before relying on it,
 * and update LEGAL_LAST_UPDATED whenever the text changes.
 *
 * Each section's `id` is an anchor (e.g. /privacy-policy#cookies) that the
 * footer legal links point to.
 */
import { FOOTER_CONTACT } from './footerData';

export const LEGAL_LAST_UPDATED = '27 November 2026';
export const LEGAL_ENTITY = 'AK Global Labs & Solutions (AKGLS Group)';

export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  kind: 'privacy' | 'terms';
  title: string;
  eyebrow: string;
  intro: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalDocument = {
  kind: 'privacy',
  title: 'Privacy Policy',
  eyebrow: 'Data Protection & Your Rights',
  intro: `This Privacy Policy explains how ${LEGAL_ENTITY} ("AKGLS Group", "we", "us") collects, uses, shares and protects personal information when you visit www.akglsgroup.com, use our free tools, chat with us, or engage our services.`,
  sections: [
    {
      id: 'information-we-collect',
      title: 'Information we collect',
      paragraphs: ['We collect only what we need to respond to you and deliver our services:'],
      bullets: [
        'Information you give us: your name, email address, phone or WhatsApp number, company name, website URL, budget range, the services you are interested in, and any message you send through our contact, audit, proposal, quiz, newsletter or download forms.',
        'Information about your website: URLs and public page content you submit to our free SEO, GEO and audit tools so that we can analyse them.',
        'Chat conversations: messages you send to our on-site AI assistant or chat widget.',
        'Usage and device data: pages viewed, referring page, browser type, device type and approximate time on page, collected through cookies and analytics tools.',
        'Approximate location: country, region and city derived from your IP address when you submit a form, so we can route your enquiry to the right team and time zone.',
        'Client account data: if you are a client, the information needed to provide reporting dashboards, proposals and invoices.',
      ],
    },
    {
      id: 'how-we-use-information',
      title: 'How we use your information',
      bullets: [
        'To respond to enquiries, prepare audits and proposals, and schedule consultations.',
        'To deliver, manage and report on the services you engage us for.',
        'To send the newsletter, checklists or resources you asked for (you can unsubscribe at any time).',
        'To operate, secure and improve our website, tools and content.',
        'To meet legal, accounting and tax obligations and to protect our legal rights.',
      ],
      paragraphs: [
        'Where the GDPR or a similar law applies, we rely on your consent (for example, marketing emails and non-essential cookies), on the steps needed to enter into or perform a contract with you, on our legitimate interests in running and improving our business, or on a legal obligation.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies & analytics',
      paragraphs: [
        'We use a small number of cookies and similar browser storage. Essential storage keeps the site working (for example, remembering form progress, offline caching for the installable web app, and keeping a local backup of a form you submitted so it is not lost on a poor connection).',
        'We use Google Analytics to understand how visitors use the site in aggregate. Google Analytics sets cookies and processes your IP address and device data on our behalf. You can opt out with the Google Analytics opt-out browser add-on or by blocking cookies in your browser settings.',
        'Blocking cookies will not stop you from reading the site, but some interactive tools may not remember your progress.',
      ],
    },
    {
      id: 'third-parties',
      title: 'Service providers we use',
      paragraphs: ['We share personal information only with providers that help us run our business, and only as needed for that purpose:'],
      bullets: [
        'Google Firebase / Google Cloud: hosting of our lead and client database.',
        'Google Analytics: website usage measurement.',
        'Google Gemini API: generating responses in our on-site AI assistant and some free tools. Do not enter sensitive personal information into the chat.',
        'ipapi.co: approximate location lookup from your IP address when a form is submitted.',
        'WhatsApp (Meta): if you choose to contact us on WhatsApp, your messages are handled under WhatsApp’s own privacy policy.',
        'Email delivery providers: to send replies, notifications and newsletters.',
      ],
    },
    {
      id: 'sharing',
      title: 'When we share information',
      paragraphs: [
        'We do not sell your personal information and we do not share it for cross-context behavioural advertising.',
        'Besides the service providers above, we may disclose information to professional advisers, to a buyer or successor if our business is reorganised or sold, or when required by law, court order or a government authority, or to protect the rights, property or safety of AKGLS Group, our clients or others.',
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep information',
      paragraphs: [
        'We keep enquiry and lead information for as long as needed to respond and follow up, and generally no longer than 24 months after our last contact with you, unless you become a client. Client records are kept for the duration of the engagement and afterwards for as long as required by tax, accounting and legal obligations. Analytics data is kept according to our Google Analytics retention settings.',
      ],
    },
    {
      id: 'security',
      title: 'How we protect information',
      paragraphs: [
        'We use HTTPS encryption across the site, access controls on our lead and client systems, and reputable cloud providers. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we will notify you and the relevant authorities of a breach where the law requires it.',
      ],
    },
    {
      id: 'gdpr',
      title: 'Your privacy rights (GDPR, UK GDPR, CCPA & India DPDP Act)',
      paragraphs: [
        'Depending on where you live, you may have the right to:',
      ],
      bullets: [
        'Access the personal information we hold about you and receive a copy.',
        'Correct information that is inaccurate or incomplete.',
        'Delete your information, subject to legal record-keeping obligations.',
        'Withdraw consent at any time, for example by unsubscribing from emails.',
        'Object to or restrict certain processing, including direct marketing.',
        'Data portability: receive your information in a commonly used format.',
        'Nominate another person to exercise your rights on your behalf (India DPDP Act).',
        'Not be discriminated against for exercising your privacy rights (California).',
        'Lodge a complaint with your local data protection authority or, in India, the Data Protection Board of India.',
      ],
    },
    {
      id: 'international-transfers',
      title: 'International transfers',
      paragraphs: [
        'We work with clients worldwide and have teams in India and the United States. Your information may be processed in countries other than your own, including India and the United States. Where required, we rely on appropriate safeguards such as the European Commission’s Standard Contractual Clauses offered by our cloud providers.',
      ],
    },
    {
      id: 'children',
      title: 'Children',
      paragraphs: [
        'Our website and services are intended for businesses and are not directed at children. We do not knowingly collect personal information from anyone under 18. If you believe a child has given us information, contact us and we will delete it.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. The "Last updated" date at the top shows when it last changed. If we make material changes we will highlight them on this page or notify clients directly.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact & grievance officer',
      paragraphs: [
        `To exercise any of your rights or ask a question about this policy, email ${FOOTER_CONTACT.email} with the subject "Privacy Request" or call ${FOOTER_CONTACT.phone}. We aim to reply within 30 days. This address also reaches our Grievance Officer for the purposes of India’s Information Technology Rules and Digital Personal Data Protection Act.`,
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  kind: 'terms',
  title: 'Terms of Service',
  eyebrow: 'Website & Engagement Terms',
  intro: `These Terms of Service ("Terms") govern your use of www.akglsgroup.com, our free tools and resources, and the digital marketing, SEO, AI search optimization, advertising, development and consulting services provided by ${LEGAL_ENTITY} ("AKGLS Group", "we", "us"). By using the website or engaging our services you agree to these Terms.`,
  sections: [
    {
      id: 'services',
      title: 'Our services',
      paragraphs: [
        'We provide services including SEO, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), paid advertising management, web design and development, content, lead generation, and dedicated talent. The exact scope, deliverables, timelines and fees for any paid engagement are set out in a written proposal, statement of work or service agreement ("Engagement Agreement"). If an Engagement Agreement conflicts with these Terms, the Engagement Agreement prevails.',
      ],
    },
    {
      id: 'website-use',
      title: 'Using our website and free tools',
      bullets: [
        'Our free audit tools, calculators, checklists, AI assistant and articles are provided for general information. Results are automated estimates and are not professional advice for your specific situation.',
        'Only submit websites you own or are authorised to analyse.',
        'Do not misuse the site: no scraping at scale, attempting to gain unauthorised access, interfering with its operation, or submitting unlawful, harmful or infringing content.',
        'We may change, suspend or withdraw any part of the website or any free tool at any time.',
      ],
    },
    {
      id: 'client-responsibilities',
      title: 'Client responsibilities',
      bullets: [
        'Provide timely access to the websites, analytics, ad accounts, content management systems and information we reasonably need.',
        'Make sure the materials you give us (logos, text, images, product claims) are accurate, lawful and that you have the right to use them.',
        'Review and approve deliverables within the agreed time frames. Delays in access or approval may move timelines.',
        'Remain responsible for your own advertising spend, which is paid directly to the ad platforms unless the Engagement Agreement says otherwise.',
      ],
    },
    {
      id: 'fees-and-payment',
      title: 'Fees & payment',
      paragraphs: [
        'Fees, billing cycles and accepted payment methods are stated in your proposal or Engagement Agreement. Unless agreed otherwise, monthly retainers are billed in advance and invoices are due within 15 days. Prices shown on the website are indicative and may change; the price in your signed proposal applies. Applicable taxes (such as GST) are added where required. We may pause work on accounts that are more than 30 days overdue after giving you notice.',
      ],
    },
    {
      id: 'refunds',
      title: 'Cancellations & refunds',
      bullets: [
        'Either party may end a monthly retainer with 30 days’ written notice unless your Engagement Agreement sets a minimum term or a different notice period.',
        'Fees for work already performed, time already reserved for you, and third-party costs already incurred (such as tools, content, media or link placements) are non-refundable.',
        'If you cancel before work on a prepaid project or period has started, we will refund the prepaid amount less any non-refundable third-party costs.',
        'Advertising spend paid to platforms such as Google or Meta is governed by those platforms’ refund terms.',
        'To request a cancellation or refund, email us from the address on your account. Approved refunds are made to the original payment method within 14 business days.',
      ],
    },
    {
      id: 'disclaimer',
      title: 'No guaranteed rankings or results',
      paragraphs: [
        'Search engines, AI assistants and advertising platforms are operated by third parties who control their own algorithms and policies. We use proven, white-hat methods, but we do not guarantee any specific ranking, AI citation, traffic level, lead volume, conversion rate or revenue. Case studies and figures on our website describe past results for specific clients and are not a promise of future results.',
        'The website and free tools are provided "as is" and "as available", without warranties of any kind to the extent permitted by law.',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'The website, its design, text, tools, code and branding belong to AKGLS Group or its licensors. You may not copy or republish them without our permission, except for sharing links or short quotes with attribution.',
        'Once you have paid in full, you own the final deliverables created specifically for you (such as website code, written content and creative assets), unless your Engagement Agreement says otherwise. We keep ownership of our pre-existing tools, templates, methods and know-how, and grant you a licence to use any of them included in your deliverables. We may list you as a client and describe our work in general terms unless you ask us not to.',
      ],
    },
    {
      id: 'third-party-platforms',
      title: 'Third-party platforms',
      paragraphs: [
        'Our services rely on third-party platforms such as Google, Meta, LinkedIn, Shopify, WordPress and AI assistants. Their terms apply to your use of them, and we are not responsible for their outages, policy changes, account suspensions or algorithm updates.',
      ],
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      paragraphs: [
        'Each party will keep the other’s non-public business information confidential and use it only to perform the engagement, except where disclosure is required by law. This obligation continues after the engagement ends.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of liability',
      paragraphs: [
        'To the extent permitted by law, AKGLS Group is not liable for any indirect, incidental, special or consequential loss, or for loss of profits, revenue, data, rankings or goodwill. Our total liability arising from any engagement is limited to the fees you paid us for the services giving rise to the claim in the three months before the claim arose. Nothing in these Terms limits liability that cannot be limited by law.',
      ],
    },
    {
      id: 'indemnity',
      title: 'Indemnity',
      paragraphs: [
        'You agree to indemnify AKGLS Group against claims arising from materials you supply to us, your products or services, your advertising claims, or your breach of these Terms or the law.',
      ],
    },
    {
      id: 'termination',
      title: 'Suspension & termination',
      paragraphs: [
        'We may suspend or end access to the website or our services if you materially breach these Terms or an Engagement Agreement and do not fix the breach within 14 days of notice, or immediately where required by law or to prevent harm.',
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing law & disputes',
      paragraphs: [
        'These Terms are governed by the laws of India. The parties will first try to resolve any dispute in good faith within 30 days. Failing that, the courts of New Delhi, India have exclusive jurisdiction, unless your Engagement Agreement specifies a different law or forum.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these Terms',
      paragraphs: [
        'We may update these Terms from time to time. The "Last updated" date shows the current version. Continued use of the website after a change means you accept the updated Terms; changes do not alter a signed Engagement Agreement during its term.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact us',
      paragraphs: [
        `Questions about these Terms? Email ${FOOTER_CONTACT.email} or call ${FOOTER_CONTACT.phone}.`,
      ],
    },
  ],
};

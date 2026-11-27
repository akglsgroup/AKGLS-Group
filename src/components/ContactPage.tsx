import React, { FormEvent, useState } from 'react';
import {
  ChevronRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight,
  Search, FileText, HelpCircle, Loader2,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { FOOTER_CONTACT } from '../data/footerData';

interface ContactPageProps {
  onBackToHome: () => void;
  onNavigate?: (href: string) => void;
}

const SERVICES = [
  'SEO Services',
  'AI SEO / GEO / AEO',
  'Google Ads / PPC',
  'Meta & LinkedIn Ads',
  'Web Design & Development',
  'Shopify / WordPress',
  'B2B Lead Generation',
  'Hire a Dedicated Expert',
  'Something else',
];

const BUDGETS = ['Under $1,000 / month', '$1,000 – $3,000 / month', '$3,000 – $10,000 / month', '$10,000+ / month', 'Not sure yet'];

// "San Francisco Office: 201 Mission St • NYC Office: 1540 Broadway • ..." -> [{ name, address }]
const OFFICES = FOOTER_CONTACT.offices.split('•').map((part) => {
  const [name, ...rest] = part.split(':');
  return { name: name.trim(), address: rest.join(':').trim() };
});

const inputCls =
  'w-full rounded-lg bg-slate-950 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors';

export default function ContactPage({ onBackToHome, onNavigate }: ContactPageProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(href);
  };

  // The site-wide lead capture (utils/leadCapture.ts initAutoLeadCapture) listens for
  // every form submit in the capture phase and saves it to the CRM, so this handler
  // only manages the UI state.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmittedName(String(data.get('name') || '').split(' ')[0] || 'there');
    }, 900);
  };

  const quickLinks = [
    { icon: Search, title: 'Free SEO & GEO audit tools', desc: 'Scan your site instantly.', href: '/tools' },
    { icon: FileText, title: 'Build a growth proposal', desc: 'Pick services, get a PDF.', href: '/proposal-generator' },
    { icon: HelpCircle, title: 'Read the FAQ', desc: 'Pricing, timelines, process.', href: '/faq' },
  ];

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen selection:bg-brand-indigo selection:text-white">
      {/* BREADCRUMB */}
      <div className="border-b border-slate-800/80 bg-[#070b16]/70 backdrop-blur-md sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-brand-teal font-semibold">Contact</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>REPLIES WITHIN 1 BUSINESS DAY</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="relative pt-14 pb-10 md:pt-20 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-teal-500/10 to-blue-600/15 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">Talk to a growth strategist</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400">AKGLS Group</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and goals. A senior strategist will review your site and reply with next steps,
            usually within one business day. No obligation, no hard sell.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid lg:grid-cols-[1fr_380px] gap-8">
        {/* FORM */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 md:p-8 shadow-2xl shadow-indigo-950/30">
          {submittedName ? (
            <div className="py-12 text-center space-y-4" role="status" aria-live="polite">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h2 className="text-2xl font-bold font-display text-white">Thanks, {submittedName}! Your message is in.</h2>
              <p className="text-slate-400 max-w-md mx-auto">
                We will get back to you within one business day. Need a faster answer? Message us on WhatsApp.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a href={FOOTER_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-semibold hover:bg-emerald-500/25 transition-colors">
                  <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <button onClick={() => setSubmittedName(null)} className="px-4 py-2 rounded-lg border border-slate-700 text-sm text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer">
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-bold font-display text-white">Send us a message</h2>
                <p className="text-sm text-slate-400 mt-1">Fields marked * are required.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-1.5 text-sm">
                  <span className="text-slate-300 font-medium">Full name *</span>
                  <input name="name" required autoComplete="name" className={inputCls} placeholder="Jane Smith" />
                </label>
                <label className="space-y-1.5 text-sm">
                  <span className="text-slate-300 font-medium">Work email *</span>
                  <input name="email" type="email" required autoComplete="email" className={inputCls} placeholder="jane@company.com" />
                </label>
                <label className="space-y-1.5 text-sm">
                  <span className="text-slate-300 font-medium">Phone / WhatsApp</span>
                  <input name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+1 555 000 0000" />
                </label>
                <label className="space-y-1.5 text-sm">
                  <span className="text-slate-300 font-medium">Company</span>
                  <input name="company" autoComplete="organization" className={inputCls} placeholder="Company name" />
                </label>
                <label className="space-y-1.5 text-sm sm:col-span-2">
                  <span className="text-slate-300 font-medium">Website</span>
                  <input name="website" type="text" inputMode="url" autoComplete="url" className={inputCls} placeholder="www.yourcompany.com" />
                </label>
                <label className="space-y-1.5 text-sm">
                  <span className="text-slate-300 font-medium">Service you need *</span>
                  <select name="service" required defaultValue="" className={inputCls}>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </label>
                <label className="space-y-1.5 text-sm">
                  <span className="text-slate-300 font-medium">Monthly budget</span>
                  <select name="budget" defaultValue="" className={inputCls}>
                    <option value="" disabled>Select a range</option>
                    {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </label>
                <label className="space-y-1.5 text-sm sm:col-span-2">
                  <span className="text-slate-300 font-medium">How can we help? *</span>
                  <textarea name="message" required rows={5} className={`${inputCls} resize-y`} placeholder="Your goals, current challenges, timeline…" />
                </label>
              </div>

              <label className="flex items-start gap-2.5 text-xs text-slate-400">
                <input name="privacy_consent" type="checkbox" required className="mt-0.5 accent-teal-400" />
                <span>
                  I agree to AKGLS Group processing my details to respond to this enquiry, as described in the{' '}
                  <a href="/privacy-policy" onClick={go('/privacy-policy')} className="text-teal-300 underline hover:text-white">Privacy Policy</a>. *
                </span>
              </label>

              <button type="submit" disabled={submitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-teal text-slate-950 font-bold hover:bg-teal-300 disabled:opacity-70 transition-colors cursor-pointer">
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>

        {/* CONTACT DETAILS */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 space-y-5">
            <h2 className="text-lg font-bold font-display text-white">Reach us directly</h2>
            <a href={`mailto:${FOOTER_CONTACT.email}`} className="flex items-start gap-3 group">
              <Mail className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
              <span>
                <span className="block text-xs text-slate-500 uppercase font-mono">Email</span>
                <span className="text-white font-semibold group-hover:text-teal-300 transition-colors break-all">{FOOTER_CONTACT.email}</span>
              </span>
            </a>
            <a href={`tel:${FOOTER_CONTACT.phoneClean}`} className="flex items-start gap-3 group">
              <Phone className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
              <span>
                <span className="block text-xs text-slate-500 uppercase font-mono">Phone</span>
                <span className="text-white font-semibold font-mono group-hover:text-teal-300 transition-colors">{FOOTER_CONTACT.phone}</span>
              </span>
            </a>
            <a href={FOOTER_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
              <WhatsAppIcon className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <span>
                <span className="block text-xs text-slate-500 uppercase font-mono">WhatsApp</span>
                <span className="text-white font-semibold group-hover:text-emerald-300 transition-colors">Start a chat</span>
              </span>
            </a>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
              <span>
                <span className="block text-xs text-slate-500 uppercase font-mono">Hours</span>
                <span className="text-slate-300 text-sm">{FOOTER_CONTACT.workingHours}</span>
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 space-y-4">
            <h2 className="text-lg font-bold font-display text-white">Our offices</h2>
            {OFFICES.map((o) => (
              <div key={o.name} className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <span>
                  <span className="block text-sm font-semibold text-white">{o.name}</span>
                  {o.address && <span className="text-sm text-slate-400">{o.address}</span>}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-slate-800/70 bg-[#050914]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-lg font-bold font-display text-white mb-5">Not ready to talk yet?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {quickLinks.map(({ icon: Ic, title, desc, href }) => (
              <a key={href} href={href} onClick={go(href)} className="group rounded-xl border border-slate-800 bg-slate-950/60 p-5 hover:border-teal-400/50 transition-colors">
                <Ic className="w-5 h-5 text-teal-400 mb-3" />
                <p className="font-semibold text-white flex items-center gap-1.5">
                  {title} <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="text-sm text-slate-400">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

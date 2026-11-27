import React, { useState } from 'react';
import { ChevronRight, CheckCircle, ArrowRight, FileText, MapPin, ChevronDown } from 'lucide-react';

interface PricingPageProps {
  onBackToHome: () => void;
  onNavigate?: (href: string) => void;
}

type Mode = 'retainer' | 'revenue';

// Same plans, prices and inclusions as the homepage "Flexible Performance Options" section (App.tsx #pricing-matrix).
// Keep both in sync when prices change.
const PLANS = [
  {
    stage: 'Mid-stage growth',
    name: 'Scale Accelerator Plan',
    summary: 'Improve keyword indexing range and manage targeted search ad structures.',
    price: { retainer: '$3,500', revenue: '2%' },
    unit: { retainer: '/mo', revenue: ' revenue share' },
    note: { retainer: 'Requires a 3-month initial checkpoint', revenue: 'Subject to traffic verification' },
    features: ['Up to 50 targeted keywords tracked', 'Technical speed diagnostics', 'Looker Studio dashboard reporting'],
    cta: 'Request a discovery proposal',
    featured: false,
  },
  {
    stage: 'Enterprise scale',
    name: 'Authority & AI SEO Suite',
    summary: 'Complete keyword coverage matched to contextual AI search and schema mappings.',
    price: { retainer: '$6,500', revenue: '4%' },
    unit: { retainer: '/mo', revenue: ' revenue share' },
    note: { retainer: 'Includes technical overhaul checks', revenue: 'Includes custom GEO schema audits' },
    features: ['AI recommendation & citation prompt tracking', 'Dedicated JSON-LD schema deployment', 'Page template rebuilds for sub-1.0s loads'],
    cta: 'Ask about availability',
    featured: true,
  },
  {
    stage: 'Custom scope',
    name: 'Elite Custom Solutions',
    summary: 'A custom operating pipeline built for multi-location and corporate structures.',
    price: { retainer: 'Custom quote', revenue: 'Custom quote' },
    unit: { retainer: '', revenue: '' },
    note: { retainer: 'Includes a fully dedicated team', revenue: 'Includes a fully dedicated team' },
    features: ['Private Slack channel with your team', 'Full CRM database sync', 'Programmatic landing page setup'],
    cta: 'Talk to us',
    featured: false,
  },
];

const FAQS = [
  {
    q: 'What is the difference between a retainer and a revenue share?',
    a: 'A retainer is a fixed monthly fee for an agreed scope of work. With a revenue share you pay a percentage of the revenue the channels we manage generate, after we verify your tracking and traffic baseline. Not every business qualifies for revenue share; we confirm it during discovery.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'The Scale Accelerator retainer starts with a 3-month initial checkpoint, because SEO and AI search work needs time to show results. Minimum terms for other plans are set in your proposal.',
  },
  {
    q: 'Is advertising spend included?',
    a: 'No. Spend on Google, Meta, LinkedIn and other ad platforms is paid directly to those platforms and is separate from our management fee, unless your proposal says otherwise.',
  },
  {
    q: 'Do you have pricing for businesses in India?',
    a: 'Yes. See our India pricing page for packages in INR, built for Indian startups and SMEs.',
  },
  {
    q: 'Can I hire a single specialist instead of a full plan?',
    a: 'Yes. You can hire a dedicated SEO expert, AI SEO expert, PPC expert, content writer, WordPress developer or marketing manager. Use the proposal builder or contact us for a quote.',
  },
];

export default function PricingPage({ onBackToHome, onNavigate }: PricingPageProps) {
  const [mode, setMode] = useState<Mode>('retainer');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen selection:bg-brand-indigo selection:text-white">
      {/* BREADCRUMB */}
      <div className="border-b border-slate-800/80 bg-[#070b16]/70 backdrop-blur-md sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-xs text-slate-400">
          <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-brand-teal font-semibold">Pricing</span>
        </div>
      </div>

      {/* HERO */}
      <header className="relative pt-14 pb-10 md:pt-20 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-teal-500/10 to-blue-600/15 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">Agency plans</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight">
            SEO & AI Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400">Pricing</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Transparent plans for SEO, GEO and AI search growth. Pay a fixed monthly retainer, or share revenue with us when it fits your business.
          </p>

          <div role="tablist" aria-label="Pricing model" className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            {(['retainer', 'revenue'] as Mode[]).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  mode === m ? 'bg-brand-indigo text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {m === 'retainer' ? 'Monthly retainer' : 'Revenue share'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* PLANS */}
      <section aria-label="Plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid md:grid-cols-3 gap-6 items-stretch">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-2xl border p-7 flex flex-col ${
              p.featured ? 'border-teal-400/60 bg-slate-900 shadow-2xl shadow-teal-500/10' : 'border-slate-800 bg-slate-950/70'
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-teal text-slate-950 text-[10px] font-black uppercase tracking-wider">
                Most requested
              </span>
            )}
            <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-bold">{p.stage}</span>
            <h2 className="text-xl font-bold font-display text-white mt-2">{p.name}</h2>
            <p className="text-sm text-slate-400 mt-2 min-h-[40px]">{p.summary}</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold font-display text-white">{p.price[mode]}</span>
              <span className="text-slate-400 text-sm">{p.unit[mode]}</span>
              <p className="text-xs text-slate-500 mt-1">{p.note[mode]}</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-300 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              onClick={go('/contact')}
              className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm transition-colors ${
                p.featured ? 'bg-brand-teal text-slate-950 hover:bg-teal-300' : 'border border-slate-700 text-white hover:border-teal-400'
              }`}
            >
              {p.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </section>

      {/* OTHER OPTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid sm:grid-cols-2 gap-4">
        <a href="/india-pricing" onClick={go('/india-pricing')} className="group rounded-xl border border-slate-800 bg-slate-950/60 p-6 flex gap-4 hover:border-teal-400/50 transition-colors">
          <MapPin className="w-6 h-6 text-indigo-400 shrink-0" />
          <span>
            <span className="block font-semibold text-white">Based in India? See INR packages →</span>
            <span className="text-sm text-slate-400">SEO, AI SEO and performance marketing packages for Indian startups and SMEs.</span>
          </span>
        </a>
        <a href="/proposal-generator" onClick={go('/proposal-generator')} className="group rounded-xl border border-slate-800 bg-slate-950/60 p-6 flex gap-4 hover:border-teal-400/50 transition-colors">
          <FileText className="w-6 h-6 text-teal-400 shrink-0" />
          <span>
            <span className="block font-semibold text-white">Build your own proposal →</span>
            <span className="text-sm text-slate-400">Pick the services and milestones you need and download a PDF proposal in minutes.</span>
          </span>
        </a>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-800/70 bg-[#050914]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold font-display text-white mb-6 text-center">Pricing questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-xl border border-slate-800 bg-slate-950/60">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-white cursor-pointer"
                >
                  {f.q}
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="px-5 pb-5 text-sm text-slate-300 leading-relaxed">{f.a}</p>}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 text-center mt-8">
            Prices are in USD and exclude applicable taxes and ad spend. Your signed proposal sets the final scope and price. See our{' '}
            <a href="/terms-of-service#fees-and-payment" onClick={go('/terms-of-service#fees-and-payment')} className="underline hover:text-slate-300">Terms of Service</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

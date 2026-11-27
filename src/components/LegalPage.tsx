import React, { useEffect } from 'react';
import { ChevronRight, ShieldCheck, FileText, Mail, Printer } from 'lucide-react';
import { LegalDocument, LEGAL_LAST_UPDATED, PRIVACY_POLICY, TERMS_OF_SERVICE } from '../data/legalData';
import { FOOTER_CONTACT } from '../data/footerData';

interface LegalPageProps {
  document: LegalDocument;
  onBackToHome: () => void;
  onNavigate?: (href: string) => void;
}

export default function LegalPage({ document: doc, onBackToHome, onNavigate }: LegalPageProps) {
  const Icon = doc.kind === 'privacy' ? ShieldCheck : FileText;
  const sibling = doc.kind === 'privacy'
    ? { label: TERMS_OF_SERVICE.title, href: '/terms-of-service' }
    : { label: PRIVACY_POLICY.title, href: '/privacy-policy' };

  // Footer links point at sections (e.g. /privacy-policy#cookies): scroll there once rendered.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const t = setTimeout(() => {
      try {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        /* invalid selector - ignore */
      }
    }, 120);
    return () => clearTimeout(t);
  }, [doc.kind]);

  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(href);
  };

  const jumpTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen selection:bg-brand-indigo selection:text-white">
      {/* BREADCRUMB */}
      <div className="border-b border-slate-800/80 bg-[#070b16]/70 backdrop-blur-md sticky top-14 z-30 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-xs text-slate-400">
          <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-brand-teal font-semibold">{doc.title}</span>
        </div>
      </div>

      {/* HERO */}
      <header className="relative pt-14 pb-12 md:pt-20 md:pb-16 border-b border-slate-800/70 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-600/15 via-teal-500/10 to-blue-600/10 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80">
            <Icon className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">{doc.eyebrow}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">{doc.title}</h1>
          <p className="text-sm font-mono text-slate-400">Last updated: {LEGAL_LAST_UPDATED}</p>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">{doc.intro}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid lg:grid-cols-[260px_1fr] gap-10">
        {/* TABLE OF CONTENTS */}
        <aside className="lg:sticky lg:top-28 self-start print:hidden">
          <nav aria-label={`${doc.title} contents`} className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">On this page</p>
            <ol className="space-y-2 text-sm">
              {doc.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={jumpTo(s.id)} className="flex gap-2 text-slate-400 hover:text-teal-300 transition-colors">
                    <span className="font-mono text-slate-600 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-4 border-t border-slate-800 space-y-2 text-sm">
              <a href={sibling.href} onClick={go(sibling.href)} className="block text-brand-teal hover:text-white transition-colors">
                Read our {sibling.label} →
              </a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Printer className="w-3.5 h-3.5" /> Print / save as PDF
              </button>
            </div>
          </nav>
        </aside>

        {/* BODY */}
        <article className="max-w-3xl space-y-10">
          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-4 flex items-baseline gap-3">
                <span className="text-sm font-mono text-teal-400/80">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                {s.paragraphs && s.bullets && s.paragraphs.length === 1 && s.paragraphs[0].endsWith(':') ? (
                  <>
                    <p>{s.paragraphs[0]}</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-teal-400">
                      {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </>
                ) : (
                  <>
                    {s.bullets && (
                      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400">
                        {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    )}
                    {s.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
                  </>
                )}
              </div>
            </section>
          ))}

          <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between print:hidden">
            <div>
              <p className="font-bold text-white">Questions about this {doc.kind === 'privacy' ? 'policy' : 'agreement'}?</p>
              <p className="text-sm text-slate-400">Our team usually replies within one business day.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${FOOTER_CONTACT.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm font-semibold text-white hover:border-teal-400 transition-colors">
                <Mail className="w-4 h-4 text-teal-400" /> {FOOTER_CONTACT.email}
              </a>
              <a href="/contact" onClick={go('/contact')} className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-teal text-slate-950 text-sm font-bold hover:bg-teal-300 transition-colors">
                Contact us
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

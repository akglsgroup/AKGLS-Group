import React from 'react';
import { Search, Home, ArrowRight, Mail } from 'lucide-react';

interface NotFoundPageProps {
  onBackToHome: () => void;
  onSearchOpen?: () => void;
  onNavigate?: (href: string) => void;
}

const POPULAR = [
  { title: 'SEO Services', href: '/seo-services' },
  { title: 'AI SEO Services', href: '/ai-seo-services' },
  { title: 'GEO Services', href: '/geo-services' },
  { title: 'Google Ads Services', href: '/google-ads-services' },
  { title: 'Web Design Services', href: '/web-design-services' },
  { title: 'Case Studies', href: '/case-study' },
  { title: 'Free Marketing Tools', href: '/tools' },
  { title: 'Blog', href: '/blog' },
];

export default function NotFoundPage({ onBackToHome, onSearchOpen, onNavigate }: NotFoundPageProps) {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <main className="bg-[#030712] text-slate-200 min-h-[80vh] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-gradient-to-tr from-indigo-600/15 via-teal-500/10 to-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10 text-center space-y-6">
        <p className="text-7xl md:text-8xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400">404</p>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white">This page could not be found</h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          The link may be old or mistyped
          {path && path !== '/' && (
            <>: <code className="font-mono text-sm text-slate-300 bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 break-all">{path}</code></>
          )}
          . Try searching, or pick one of our most visited pages below.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button onClick={onBackToHome} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal text-slate-950 font-bold hover:bg-teal-300 transition-colors cursor-pointer">
            <Home className="w-4 h-4" /> Back to home
          </button>
          {onSearchOpen && (
            <button onClick={onSearchOpen} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white font-semibold hover:border-teal-400 transition-colors cursor-pointer">
              <Search className="w-4 h-4 text-teal-400" /> Search the site
            </button>
          )}
          <a href="/contact" onClick={go('/contact')} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white font-semibold hover:border-teal-400 transition-colors">
            <Mail className="w-4 h-4 text-teal-400" /> Contact us
          </a>
        </div>

        <nav aria-label="Popular pages" className="pt-8">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-4">Popular pages</p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            {POPULAR.map((p) => (
              <li key={p.href}>
                <a href={p.href} onClick={go(p.href)} className="group flex items-center justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-3.5 py-3 text-sm text-slate-300 hover:text-white hover:border-teal-400/50 transition-colors">
                  {p.title}
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}

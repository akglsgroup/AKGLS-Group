import React, { useState, MouseEvent } from 'react';
import * as ReactHelmetAsync from 'react-helmet-async';
const Helmet: any = (ReactHelmetAsync as any).Helmet || (ReactHelmetAsync as any).default?.Helmet || ReactHelmetAsync;
import { ArrowRight, HelpCircle, ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
  links?: { label: string; href: string }[];
}

export const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "How does AI SEO / GEO differ from traditional organic search rankings?",
    a: "Classic SEO positions sitemap keywords and backlinks to secure rank placements inside standard listings. AI SEO & Generative Engine Optimization (GEO) restructures database entity relationship schemas as JSON-LD blocks so LLMs like ChatGPT and Gemini citation-proof and summarize your brand as leading options.",
    links: [
      { label: "Explore GEO Services", href: "/geo-services" },
      { label: "Learn About AI SEO", href: "/ai-seo-services" }
    ]
  },
  {
    q: "What is included in the free custom website performance audit?",
    a: "Our free customized strategic review charts target keyword ranges, maps sitemap crawling redirects, identifies page load bottlenecks below 1.0s, and prepares a concrete diagnostic checklist for your developer team.",
    links: [
      { label: "Request Free Audit Now", href: "#audit-form" },
      { label: "View Technical SEO Scope", href: "/technical-seo-services" }
    ]
  },
  {
    q: "Do you offer tailored performance price models?",
    a: "Yes! For e-commerce stores and technical technical brands with verifiable CRM attribution capabilities, we offer tailored revenue-share options to minimize upfront retainers.",
    links: [
      { label: "View Pricing Packages", href: "/india-pricing" },
      { label: "Contact Our Team", href: "#common-global-footer" }
    ]
  },
  {
    q: "How do you optimize visibility for AI assistants like ChatGPT and Claude?",
    a: "We construct deep factual knowledge graphs, publish validated FAQ schemas, and structure brand entity references so multi-agent models cite your website as an authoritative primary source.",
    links: [
      { label: "ChatGPT Optimization", href: "/chatgpt-optimization-services" },
      { label: "Claude Optimization", href: "/claude-optimization-services" }
    ]
  }
];

interface FAQProps {
  items?: FAQItem[];
  id?: string;
  className?: string;
  onNavigate?: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function FAQ({
  items = DEFAULT_FAQS,
  id = "faq",
  className = "",
  onNavigate
}: FAQProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Default internal smooth scroll handler if none provided
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      onNavigate(e, href);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    } else if (href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Construct standard Schema.org FAQPage JSON-LD schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const schemaJsonString = JSON.stringify(faqJsonLd);

  return (
    <section 
      id={id} 
      className={`py-20 md:py-24 bg-white border-t border-slate-200 scroll-mt-20 text-left ${className}`}
      aria-labelledby="faq-heading"
    >
      {/* 
        Inject JSON-LD FAQ Schema via Helmet into <head> 
        and render direct <script> in DOM for complete search engine crawler compatibility
      */}
      <Helmet>
        <script type="application/ld+json">
          {schemaJsonString}
        </script>
      </Helmet>

      {/* Directly embedded script for microformat and static indexers */}
      <script
        type="application/ld+json"
        id="faq-jsonld-schema-data"
        dangerouslySetInnerHTML={{ __html: schemaJsonString }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display">
            COMMON QUESTIONS
          </span>
          <h3 id="faq-heading" className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-brand-navy">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4" role="region" aria-label="FAQ Accordion">
          {items.map((item, idx) => {
            const isOpen = activeFaq === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-colors hover:border-slate-300"
              >
                <button 
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 font-extrabold font-display text-sm sm:text-base text-brand-navy flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo cursor-pointer transition-all"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="text-brand-indigo font-bold shrink-0 transition-transform duration-200">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-purple' : ''}`} />
                  </span>
                </button>

                {isOpen && (
                  <div 
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-200/50 pt-3 space-y-3 animate-in fade-in duration-150"
                  >
                    <p>{item.a}</p>
                    {item.links && (
                      <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-semibold text-slate-400">Related:</span>
                        {item.links.map((link, lIdx) => (
                          <a 
                            key={lIdx}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-indigo hover:text-brand-purple hover:underline"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Navigation & Quick Jump Links */}
        <div className="mt-10 p-5 sm:p-6 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium text-center sm:text-left">
            <HelpCircle className="w-4 h-4 text-brand-indigo shrink-0" />
            <span>Need help finding answers or ready to get started?</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
            <a 
              href="#audit-form"
              onClick={(e) => handleLinkClick(e, '#audit-form')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-indigo text-white font-bold hover:bg-brand-indigo/90 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              <span>Free SEO Audit</span>
              <ArrowRight className="w-3 h-3" />
            </a>
            <a 
              href="#capabilities-section"
              onClick={(e) => handleLinkClick(e, '#capabilities-section')}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              <span>Capabilities</span>
            </a>
            <a 
              href="#common-global-footer"
              onClick={(e) => handleLinkClick(e, '#common-global-footer')}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              <span>Contact Us</span>
            </a>
            <button 
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-slate-500 hover:text-brand-indigo hover:bg-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
              title="Scroll smoothly back to top"
            >
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

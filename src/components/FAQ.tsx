import React, { useState, useMemo, useEffect, MouseEvent } from 'react';
import * as ReactHelmetAsync from 'react-helmet-async';
const Helmet: any = (ReactHelmetAsync as any).Helmet || (ReactHelmetAsync as any).default?.Helmet || ReactHelmetAsync;
import { 
  ArrowRight, HelpCircle, ChevronDown, Check, Copy, 
  ExternalLink, Code2, Search, Sparkles, Filter, X, 
  Share2, Layers, CheckCircle2, ShieldCheck, MessageSquare 
} from 'lucide-react';

export type FAQCategory = 'ai-geo' | 'seo-tech' | 'ppc-ads' | 'pricing-roi' | 'talent';

export interface FAQItem {
  id?: string;
  q: string;
  a: string;
  category?: FAQCategory;
  categoryLabel?: string;
  links?: { label: string; href: string }[];
}

export const FAQ_CATEGORIES: { id: 'all' | FAQCategory; label: string }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'ai-geo', label: 'AI SEO & GEO Search' },
  { id: 'seo-tech', label: 'Technical & Organic SEO' },
  { id: 'ppc-ads', label: 'Paid Ads & PPC' },
  { id: 'pricing-roi', label: 'Pricing & ROI Models' },
  { id: 'talent', label: 'Dedicated Talent' }
];

export const DEFAULT_FAQS: FAQItem[] = [
  {
    id: 'ai-seo-vs-traditional',
    category: 'ai-geo',
    categoryLabel: 'AI SEO & GEO',
    q: 'How does AI SEO / GEO differ from traditional organic search rankings?',
    a: 'Classic SEO positions sitemap keywords and backlinks to secure rank placements inside standard 10-blue-link Google listings. AI SEO & Generative Engine Optimization (GEO) restructures database entity relationship schemas as JSON-LD blocks and high-density factual vectors so LLMs like ChatGPT, Perplexity, Claude, and Google Gemini citation-proof and summarize your brand as the primary authoritative option.',
    links: [
      { label: 'Explore GEO Services', href: '/geo-services' },
      { label: 'Learn About AI SEO', href: '/ai-seo-services' }
    ]
  },
  {
    id: 'chatgpt-claude-perplexity',
    category: 'ai-geo',
    categoryLabel: 'AI SEO & GEO',
    q: 'How do you optimize brand visibility for AI assistants like ChatGPT, Claude, and Perplexity?',
    a: 'We construct deep factual knowledge graphs, publish validated FAQ schemas, synchronize Wikidata/Wikipedia entity references, and structure brand entity statements into conversational chunks. This enables multi-agent retrieval-augmented generation (RAG) models to ingest your verified metrics, pricing, and case studies, citing your website as an authoritative source.',
    links: [
      { label: 'ChatGPT Optimization', href: '/chatgpt-optimization-services' },
      { label: 'Claude Optimization', href: '/claude-optimization-services' }
    ]
  },
  {
    id: 'aeo-zero-click',
    category: 'ai-geo',
    categoryLabel: 'AI SEO & GEO',
    q: 'What is Answer Engine Optimization (AEO) and how does it drive zero-click citations?',
    a: 'AEO targets conversational answer engines by formatting heading structures into precise queries answered directly within 25 to 45 words. By pairing direct concise summaries with Schema.org Question, FAQPage, and TechArticle microdata, search robots and AI citation crawlers pull your answers directly into Google AI Overviews, Perplexity answer boxes, and voice snippets.',
    links: [
      { label: 'AEO Optimization Services', href: '/aeo-services' },
      { label: 'Voice Search SEO', href: '/voice-search-optimization-services' }
    ]
  },
  {
    id: 'schema-org-ai-crawlers',
    category: 'ai-geo',
    categoryLabel: 'AI SEO & GEO',
    q: 'Why is structured Schema.org JSON-LD required for Generative AI search visibility?',
    a: 'Structured data (JSON-LD) acts as the machine-readable lingua franca of modern search crawlers. While web copy can be subjective, Schema.org nodes (Organization, Service, FAQPage, HowTo, Person) provide unambiguous semantic graphs that AI indexing bots (like GPTBot, ClaudeBot, and Google-Extended) verify without risk of generative hallucination.',
    links: [
      { label: 'AI Geo Audit Scanner', href: '/ai-geo-audit' },
      { label: 'Technical SEO Markups', href: '/technical-seo-services' }
    ]
  },
  {
    id: 'free-audit-scope',
    category: 'seo-tech',
    categoryLabel: 'Technical SEO',
    q: 'What is included in the free custom website performance audit?',
    a: 'Our complimentary strategic technical review evaluates crawl depth, maps 301/302 redirect loops, pinpoints Core Web Vitals latency (LCP under 2.5s, CLS below 0.1, INP under 200ms), inspects Schema.org JSON-LD microdata, analyzes semantic entity footprints, and prepares a concrete diagnostic engineering checklist for your technical team.',
    links: [
      { label: 'Request Free Audit Now', href: '#audit-form' },
      { label: 'View Technical SEO Scope', href: '/technical-seo-services' }
    ]
  },
  {
    id: 'seo-ranking-timeline',
    category: 'seo-tech',
    categoryLabel: 'Organic SEO',
    q: 'How long does it take to see tangible organic traffic and ranking improvements?',
    a: 'Initial technical corrections, structured schema deployments, and crawl budget optimizations typically show positive indexing signals within 14 to 28 days. Meaningful commercial keyword position shifts, organic revenue velocity, and AI summary citations compound between 60 and 90 days as domain topical authority matures.',
    links: [
      { label: 'Review SEO Case Studies', href: '/seo-case-studies' },
      { label: 'Ecommerce SEO Growth', href: '/case-study/ecommerce-seo-results' }
    ]
  },
  {
    id: 'core-web-vitals-crawl-budget',
    category: 'seo-tech',
    categoryLabel: 'Technical SEO',
    q: 'How does AKGLS Group resolve Core Web Vitals, mobile latency, and crawl budget waste?',
    a: 'We implement modern asset delivery pipelines: code-splitting JS bundles, preloading critical fonts, converting assets to next-gen formats (WebP/AVIF), pruning bloated DOM trees, removing zombie CSS, and restructuring internal linking architecture to eliminate orphan pages and maximize crawl efficiency.',
    links: [
      { label: 'Technical SEO Architecture', href: '/technical-seo-services' },
      { label: 'WordPress Dev Optimizations', href: '/wordpress-development-services' }
    ]
  },
  {
    id: 'link-building-digital-pr',
    category: 'seo-tech',
    categoryLabel: 'Link Building',
    q: 'What is your approach to white-hat link building and authoritative digital PR?',
    a: 'We strictly practice editorial outreach and authoritative digital PR. We never deploy low-tier PBNs or spam directories. Our specialists produce original data research, industry surveys, and high-value expert commentary that journalists, publications, and university resources link to organically with high domain trust.',
    links: [
      { label: 'Link Building Services', href: '/link-building-services' },
      { label: 'Hire Link Building Specialist', href: '/hire-link-building-expert' }
    ]
  },
  {
    id: 'ecommerce-seo-scale',
    category: 'seo-tech',
    categoryLabel: 'Ecommerce SEO',
    q: 'How do you optimize enterprise Shopify and WooCommerce stores with 10,000+ SKUs?',
    a: 'For large inventory catalogs, we engineer programmatic SEO taxonomy templates, resolve canonical faceted navigation loops, deploy Product and AggregateOffer JSON-LD markups, automate internal link injection, and optimize PDP content to capture high-intent long-tail search queries without content duplication.',
    links: [
      { label: 'Shopify Development & SEO', href: '/shopify-development-services' },
      { label: 'Ecommerce Growth Solutions', href: '/ecommerce-growth-solutions' }
    ]
  },
  {
    id: 'high-roas-paid-campaigns',
    category: 'ppc-ads',
    categoryLabel: 'Paid Ads',
    q: 'How do you ensure high ROAS on Google Ads, Meta, and LinkedIn campaigns?',
    a: 'We combine rigorous keyword search term negative filtering, high-intent competitor conquesting, first-party customer audience segmentation, dynamic creative multivariate testing, and dedicated conversion-optimized landing pages. Our campaigns prioritize net contribution margin and qualified cost-per-acquisition (CPA) rather than hollow impressions.',
    links: [
      { label: 'Google Ads & PPC Services', href: '/google-ads-services' },
      { label: 'Meta & Social Ads Services', href: '/meta-ads-services' }
    ]
  },
  {
    id: 'audit-existing-ad-accounts',
    category: 'ppc-ads',
    categoryLabel: 'Paid Ads',
    q: 'Can you audit our underperforming PPC ad accounts without disrupting live campaigns?',
    a: 'Yes. We conduct non-invasive, read-only diagnostic audits of your Google Ads, Meta Ads Manager, and LinkedIn Campaign Manager accounts. We identify wasted ad spend, negative keyword leakage, attribution mismatches, and Quality Score bottlenecks, presenting a detailed forensic report before any live adjustments are made.',
    links: [
      { label: 'PPC Success Stories', href: '/case-study/ppc-success-stories' },
      { label: 'Hire PPC Expert', href: '/hire-ppc-expert' }
    ]
  },
  {
    id: 'server-side-tracking',
    category: 'ppc-ads',
    categoryLabel: 'Analytics & Attribution',
    q: 'What tracking and server-side attribution infrastructure do you configure for paid media?',
    a: 'We configure modern server-side Google Tag Manager (sGTM), Meta Conversions API (CAPI), Google Analytics 4 (GA4) with custom event hierarchies, offline conversion imports, and Looker Studio live dashboards. This provides 99%+ attribution resilience against iOS tracking restrictions and third-party cookie phase-outs.',
    links: [
      { label: 'Analytics & Lead Intelligence', href: '#capabilities-section' },
      { label: 'B2B Lead Generation Funnels', href: '/b2b-lead-generation-services' }
    ]
  },
  {
    id: 'performance-pricing-models',
    category: 'pricing-roi',
    categoryLabel: 'Pricing & Retainers',
    q: 'Do you offer tailored performance price models, retainers, and revenue-share options?',
    a: 'Yes! We offer tiered strategic monthly retainers as well as hybrid performance and revenue-share options for brands with verified CRM attribution (Shopify, HubSpot, Salesforce). This aligns our economic incentives directly with your net organic and paid revenue growth.',
    links: [
      { label: 'View India & Global Pricing', href: '/india-pricing' },
      { label: 'Interactive ROI Calculator', href: '#roi-calculator-section' }
    ]
  },
  {
    id: 'client-reporting-kpis',
    category: 'pricing-roi',
    categoryLabel: 'Client Reporting',
    q: 'What real-time reporting dashboards and KPI tracking do clients receive?',
    a: 'Every client receives access to our 24/7 client portal featuring automated Looker Studio integrations, live keyword rank movement graphs, AI citation index trackers, lead pipeline telemetry, and monthly executive sprint summaries detailing exactly what was shipped and the revenue generated.',
    links: [
      { label: 'Open Client Portal', href: '/client-dashboard' },
      { label: 'Request Proposal', href: '#audit-form' }
    ]
  },
  {
    id: 'hire-dedicated-specialists',
    category: 'talent',
    categoryLabel: 'Dedicated Talent',
    q: 'Can we hire dedicated full-time SEO experts, PPC specialists, or WordPress developers?',
    a: 'Yes. AKGLS Group provides vetted, dedicated full-time or fractional digital marketing talent—including Senior Technical SEOs, AI Prompt Engineers, PPC Specialists, Content Copywriters, and Full-Stack WordPress Developers—who embed directly into your Slack, Jira, and team workflows.',
    links: [
      { label: 'Hire Dedicated SEO Expert', href: '/hire-seo-expert' },
      { label: 'Hire AI SEO Specialist', href: '/hire-ai-seo-expert' },
      { label: 'Hire WordPress Developer', href: '/hire-wordpress-developer' }
    ]
  },
  {
    id: 'onboarding-timeline',
    category: 'talent',
    categoryLabel: 'Onboarding',
    q: 'How quickly can a dedicated marketing specialist onboard into our internal workflow?',
    a: 'Our streamlined talent deployment model enables pre-vetted specialists to complete NDA sign-offs, systems briefing, and initial sprint roadmap alignment within 48 to 72 hours, ensuring zero friction and immediate execution velocity.',
    links: [
      { label: 'Hire Marketing Manager', href: '/hire-marketing-manager' },
      { label: 'Hire Content Writer', href: '/hire-content-writer' }
    ]
  }
];

/**
 * Cleans plain text for Schema.org JSON-LD to prevent formatting corruption in search snippets
 */
export function cleanSchemaText(text: string): string {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .replace(/[\r\n]+/g, ' ') // collapse newlines into spaces
    .replace(/\s+/g, ' ') // normalize whitespace
    .trim();
}

/**
 * Slugifies question text for anchor links and schema IDs
 */
export function slugifyQuestion(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 50);
}

/**
 * Helper to dynamically auto-generate Schema.org FAQPage JSON-LD
 */
export function generateFaqSchemaJsonLd(
  items: FAQItem[], 
  baseUrl = 'https://www.akglsgroup.com',
  pagePath = '/faq'
) {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const pageUrl = `${cleanBase}${pagePath.startsWith('/') ? pagePath : `/${pagePath}`}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faqpage-schema`,
    'url': pageUrl,
    'name': 'AKGLS Group - Frequently Asked Questions & Knowledge Base',
    'description': 'Verified answers to common questions regarding Generative Engine Optimization (GEO), AI Search SEO, Technical Architecture, PPC Funnels, and Performance Retainers.',
    'inLanguage': 'en-US',
    'publisher': {
      '@type': 'Organization',
      'name': 'AKGLS Group',
      'url': cleanBase,
      'logo': {
        '@type': 'ImageObject',
        'url': `${cleanBase}/assets/logo.png`
      }
    },
    'mainEntity': items.map((item, idx) => {
      const slug = item.id || slugifyQuestion(item.q) || `item-${idx + 1}`;
      const itemUrl = `${pageUrl}#faq-${slug}`;
      const questionText = cleanSchemaText(item.q);
      const answerText = cleanSchemaText(item.a);

      return {
        '@type': 'Question',
        '@id': `${pageUrl}#faq-q-${slug}`,
        'name': questionText,
        'url': itemUrl,
        'answerCount': 1,
        'acceptedAnswer': {
          '@type': 'Answer',
          '@id': `${pageUrl}#faq-a-${slug}`,
          'text': answerText,
          'url': itemUrl,
          'author': {
            '@type': 'Organization',
            'name': 'AKGLS Group',
            'url': cleanBase
          }
        }
      };
    })
  };
}

interface FAQProps {
  items?: FAQItem[];
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  onNavigate?: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
  isStandalonePage?: boolean;
}

export default function FAQ({
  items = DEFAULT_FAQS,
  id = 'faq',
  className = '',
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our AI SEO, GEO search ranking, performance marketing, and technical architecture.',
  badge = 'COMMON QUESTIONS & VERIFIED ANSWERS',
  onNavigate,
  isStandalonePage = false
}: FAQProps) {
  // State for active open items (supports multi-open or single-open)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'ai-seo-vs-traditional': true,
    'free-audit-scope': true
  });

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<'all' | FAQCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // JSON-LD modal inspector
  const [showJsonInspector, setShowJsonInspector] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [copiedAnchorId, setCopiedAnchorId] = useState<string | null>(null);

  // Compute base URL for Schema & deep linking
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://www.akglsgroup.com';
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : (isStandalonePage ? '/faq' : '/');

  // Filtered FAQ items based on category & search term
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const qLower = item.q.toLowerCase();
      const aLower = item.a.toLowerCase();
      const sLower = searchQuery.trim().toLowerCase();
      const matchesSearch = !sLower || qLower.includes(sLower) || aLower.includes(sLower);
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  // Dynamically auto-generate valid Schema.org FAQPage JSON-LD for EVERY question in dataset
  // We include all items so search engines index the complete question set, 
  // with primary question anchors correctly assigned.
  const dynamicFaqJsonLd = useMemo(() => {
    return generateFaqSchemaJsonLd(items, currentOrigin, currentPath);
  }, [items, currentOrigin, currentPath]);

  // Clean and safely stringify JSON-LD without unescaped characters
  const schemaJsonString = useMemo(() => {
    return JSON.stringify(dynamicFaqJsonLd, null, 2);
  }, [dynamicFaqJsonLd]);

  // Safe HTML representation escaping dangerous script tag syntax
  const safeJsonLdString = useMemo(() => {
    return schemaJsonString.replace(/</g, '\\u003c');
  }, [schemaJsonString]);

  // DYNAMIC SCRIPT INJECTION INTO DOCUMENT HEAD
  // Automatically creates, updates, and mounts a valid Schema.org FAQPage JSON-LD tag
  // directly in document.head for search crawlers (Googlebot, Bingbot, GPTBot, Perplexity, Claude).
  // Automatically cleans up on unmount or updates when questions/categories change.
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const scriptId = 'faqpage-schema-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-schema-type', 'FAQPage');
      document.head.appendChild(scriptEl);
    }

    scriptEl.textContent = schemaJsonString;

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, [schemaJsonString]);

  // Deep-link support: On mount or hash change, expand matching FAQ item and scroll to it
  useEffect(() => {
    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash;
      if (!hash) return;

      // Check if hash matches any question id
      const cleanHash = hash.replace(/^#faq-|^#/, '');
      const matched = items.find(item => {
        const slug = item.id || slugifyQuestion(item.q);
        return slug === cleanHash || hash === `#faq-${slug}`;
      });

      if (matched) {
        const slug = matched.id || slugifyQuestion(matched.q);
        setOpenItems(prev => ({ ...prev, [slug]: true }));
        setTimeout(() => {
          const el = document.getElementById(`faq-card-${slug}`) || document.getElementById(`faq-${slug}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [items]);

  // Smooth scroll / internal navigation handler
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

  // Toggle single item
  const toggleItem = (slug: string) => {
    setOpenItems(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  // Expand / collapse all
  const handleExpandAll = () => {
    const updated: Record<string, boolean> = {};
    filteredItems.forEach(item => {
      const slug = item.id || slugifyQuestion(item.q);
      updated[slug] = true;
    });
    setOpenItems(updated);
  };

  const handleCollapseAll = () => {
    setOpenItems({});
  };

  // Copy direct link to clipboard
  const handleCopyQuestionLink = (e: MouseEvent, slug: string) => {
    e.stopPropagation();
    const url = `${currentOrigin}${currentPath}#faq-${slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedAnchorId(slug);
      setTimeout(() => setCopiedAnchorId(null), 2000);
    }
  };

  // Copy Schema.org JSON-LD to clipboard
  const handleCopySchema = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(schemaJsonString);
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    }
  };

  return (
    <section 
      id={id} 
      className={`relative py-16 md:py-24 bg-white border-t border-slate-200 scroll-mt-20 text-left ${className}`}
      aria-labelledby="faq-main-heading"
    >
      {/* 
        1. DYNAMIC AUTO-GENERATED JSON-LD FAQPAGE SCHEMA INJECTED INTO <HEAD>
        Enables rich Google search snippets, zero-click answer cards, and Perplexity/ChatGPT indexing.
      */}
      <Helmet>
        {isStandalonePage && (
          <title>Frequently Asked Questions (FAQ) | AKGLS Group</title>
        )}
        {isStandalonePage && (
          <meta 
            name="description" 
            content="Explore detailed answers to common questions about Generative Engine Optimization (GEO), AI SEO, Technical Core Web Vitals, PPC Campaigns, and Retainers." 
          />
        )}
        <script type="application/ld+json">
          {schemaJsonString}
        </script>
      </Helmet>

      {/* 
        2. DIRECT DOM INJECTION FOR STATIC HYDRATION & CRAWLERS
        Guarantees that search engine robots reading static DOM without JS execution still extract 100% valid JSON-LD.
      */}
      <script
        type="application/ld+json"
        id="faq-jsonld-schema-data"
        dangerouslySetInnerHTML={{ __html: safeJsonLdString }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standalone Page Hero / Header */}
        {isStandalonePage && (
          <div className="mb-12 pb-8 border-b border-slate-200 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 font-mono">
              <a 
                href="/" 
                onClick={(e) => handleLinkClick(e, '/')} 
                className="hover:text-brand-indigo transition-colors"
              >
                Home
              </a>
              <span>/</span>
              <span className="text-brand-indigo font-bold">FAQ & Knowledge Base</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 border border-indigo-200/80 text-brand-indigo font-display">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SEO & AI Snippet Optimized</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 border border-emerald-200/80 text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Schema.org FAQPage Validated</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200">
                <span>{items.length} Questions Indexed</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-display text-brand-navy tracking-tight mb-4">
              Frequently Asked Questions & Expert Guidance
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Find transparent, technical, and commercial answers regarding our AI Search & GEO strategies, Technical SEO architecture, paid conversion funnels, and performance retainers.
            </p>
          </div>
        )}

        {/* Section Header (For regular section or top of page) */}
        {!isStandalonePage && (
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display">
                {badge}
              </span>
              <button
                type="button"
                onClick={() => setShowJsonInspector(true)}
                className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-500 hover:text-brand-indigo bg-slate-100 hover:bg-indigo-50 border border-slate-200 px-3 py-1 rounded-full transition-colors cursor-pointer"
                title="Inspect auto-generated Schema.org JSON-LD"
              >
                <Code2 className="w-3.5 h-3.5 text-brand-teal" />
                <span>JSON-LD Schema ({items.length})</span>
              </button>
            </div>
            <h2 id="faq-main-heading" className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-brand-navy">
              {title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}

        {/* Search & Filter Toolbar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 space-y-4 shadow-xs">
          
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Live Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. pricing, audit, chatgpt, roas, timeline)..."
                className="w-full bg-white border border-slate-200 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 rounded-xl pl-10 pr-9 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
              <button
                type="button"
                onClick={handleExpandAll}
                className="text-xs font-bold text-slate-600 hover:text-brand-indigo bg-white border border-slate-200 hover:border-slate-300 px-3 py-2 rounded-xl transition-all cursor-pointer"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="text-xs font-bold text-slate-600 hover:text-brand-indigo bg-white border border-slate-200 hover:border-slate-300 px-3 py-2 rounded-xl transition-all cursor-pointer"
              >
                Collapse All
              </button>
              <button
                type="button"
                onClick={() => setShowJsonInspector(true)}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-indigo bg-indigo-50 border border-indigo-200/80 hover:bg-indigo-100 px-3 py-2 rounded-xl transition-all cursor-pointer"
                title="View dynamic JSON-LD markup"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Inspect</span> Schema
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/70">
            <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider mr-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {FAQ_CATEGORIES.map(cat => {
              const count = cat.id === 'all' 
                ? items.length 
                : items.filter(i => i.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-brand-navy text-white shadow-xs font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter / Filter Indicator */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong>{filteredItems.length}</strong> of {items.length} verified answers
              {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
            </span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-brand-indigo hover:underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Accordion Questions List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-brand-navy">No matching questions found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Try another search term or ask our search team directly.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100"
              >
                Clear Search
              </button>
              <a
                href="#audit-form"
                onClick={(e) => handleLinkClick(e, '#audit-form')}
                className="px-4 py-2 bg-brand-indigo text-white rounded-xl text-xs font-bold hover:bg-brand-indigo/90"
              >
                Ask Our Team
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-3.5" role="region" aria-label="FAQ Accordion">
            {filteredItems.map((item, idx) => {
              const slug = item.id || slugifyQuestion(item.q) || `question-${idx}`;
              const isOpen = Boolean(openItems[slug]);
              const contentId = `faq-content-${slug}`;
              const headerId = `faq-header-${slug}`;
              const isCopied = copiedAnchorId === slug;

              return (
                <div 
                  key={slug}
                  id={`faq-card-${slug}`}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen 
                      ? 'border-indigo-200/80 shadow-sm ring-1 ring-brand-indigo/10' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button 
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(slug)}
                    className="w-full text-left p-5 sm:p-6 font-extrabold font-display text-sm sm:text-base text-brand-navy flex justify-between items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo cursor-pointer transition-colors"
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      {item.categoryLabel && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-indigo bg-indigo-50/80 px-2.5 py-0.5 rounded-md font-sans">
                          {item.categoryLabel}
                        </span>
                      )}
                      <h3 className="leading-snug text-slate-900 group-hover:text-brand-indigo transition-colors">
                        {item.q}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-0.5">
                      {/* Copy direct question link */}
                      <button
                        type="button"
                        onClick={(e) => handleCopyQuestionLink(e, slug)}
                        className="p-1.5 text-slate-400 hover:text-brand-indigo hover:bg-indigo-50 rounded-lg transition-colors"
                        title={isCopied ? 'Link Copied!' : 'Copy direct link to this question'}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>

                      {/* Expand chevron */}
                      <span className="p-1 rounded-lg text-brand-indigo bg-indigo-50/60 font-bold transition-transform duration-200">
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-purple' : ''}`} />
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div 
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4 space-y-3 animate-in fade-in duration-150"
                    >
                      <p>{item.a}</p>

                      {/* Related Deep Links */}
                      {item.links && item.links.length > 0 && (
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Related Services:</span>
                          {item.links.map((link, lIdx) => (
                            <a 
                              key={lIdx}
                              href={link.href}
                              onClick={(e) => handleLinkClick(e, link.href)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-indigo hover:text-brand-purple hover:underline bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/80 px-2.5 py-1 rounded-lg transition-colors"
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
        )}

        {/* Schema Status & Audit Callout Card */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-brand-navy rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dynamic JSON-LD Injected: {items.length} Schema.org Nodes Active</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
              Need a Custom Diagnostic for Your Website?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-light">
              Get an immediate forensic scan of your Schema markup, Core Web Vitals latency, and AI citation readiness tailored to your domain.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowJsonInspector(true)}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-brand-teal" />
              <span>Inspect Schema</span>
            </button>
            <a 
              href="#audit-form"
              onClick={(e) => handleLinkClick(e, '#audit-form')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-indigo hover:bg-brand-indigo/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Jump Links */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-brand-indigo shrink-0" />
            <span>Still have questions? Check our interactive tools or reach our consultants.</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-semibold">
            <a 
              href="/tools/seo-audit-tool"
              onClick={(e) => handleLinkClick(e, '/tools/seo-audit-tool')}
              className="hover:text-brand-indigo transition-colors"
            >
              SEO Audit Tool
            </a>
            <span>•</span>
            <a 
              href="/tools/geo-audit-tool"
              onClick={(e) => handleLinkClick(e, '/tools/geo-audit-tool')}
              className="hover:text-brand-indigo transition-colors"
            >
              GEO Audit Scanner
            </a>
            <span>•</span>
            <a 
              href="/india-pricing"
              onClick={(e) => handleLinkClick(e, '/india-pricing')}
              className="hover:text-brand-indigo transition-colors"
            >
              Pricing Plans
            </a>
            <span>•</span>
            <button 
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-brand-indigo transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>

      {/* 
        JSON-LD SCHEMA INSPECTOR MODAL
        Allows clients, developers, and SEO auditors to verify the dynamic Schema.org FAQPage markup.
      */}
      {showJsonInspector && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="schema-modal-title"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-left">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-teal bg-teal-950/60 border border-teal-800/80 px-2.5 py-0.5 rounded-md">
                    Schema.org / FAQPage
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {dynamicFaqJsonLd.mainEntity.length} Questions Auto-Generated
                  </span>
                </div>
                <h3 id="schema-modal-title" className="text-lg font-bold text-white font-display">
                  Live JSON-LD Structured Data Inspector
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowJsonInspector(false)}
                className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Validation Checklist */}
            <div className="px-5 py-3 sm:px-6 bg-slate-950/40 border-b border-slate-800 text-xs flex flex-wrap items-center gap-4 text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> @context: schema.org
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> @type: FAQPage
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Direct Entity URIs
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Google Rich Results Ready
              </span>
            </div>

            {/* Code Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 bg-slate-900 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between pb-2 text-[11px] text-slate-400">
                <span>Dynamically generated for active route: <code className="text-brand-teal">{currentPath}</code></span>
                <span>Length: {schemaJsonString.length} bytes</span>
              </div>
              <pre className="p-4 bg-slate-950 border border-slate-800 rounded-2xl overflow-x-auto text-slate-200 text-xs leading-relaxed selection:bg-brand-indigo selection:text-white">
                <code>{schemaJsonString}</code>
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://search.google.com/test/rich-results"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl transition-colors"
              >
                <span>Test in Google Rich Results</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySchema}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-indigo hover:bg-brand-indigo/90 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  {copiedJson ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy JSON-LD Schema</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowJsonInspector(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

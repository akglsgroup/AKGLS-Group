import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, Languages, Server, Search, CheckCircle2, ArrowRight, 
  ChevronRight, Shield, Layers, HelpCircle, Check, Copy, 
  ExternalLink, BarChart3, Database, Cpu, Bot, Sparkles, 
  MapPin, ShoppingCart, Briefcase, Building2, Landmark, GraduationCap, 
  Workflow, Compass, AlertTriangle, FileCode2, Send, PhoneCall,
  Terminal, ShieldCheck, Zap, Users, ArrowUpRight
} from 'lucide-react';
import { captureLead } from '../utils/leadCapture';
import WhatsAppIcon from './WhatsAppIcon';

interface InternationalSeoPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
  onNavigate?: (href: string) => void;
}

export default function InternationalSeoPage({ onBackToHome, openProposalForm, onNavigate }: InternationalSeoPageProps) {
  // Update document title and canonical meta simulation
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "International & Multilingual SEO Services | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Filter state for 24 solutions
  const [solutionCategory, setSolutionCategory] = useState<'all' | 'technical' | 'content' | 'commercial' | 'ai' | 'authority'>('all');

  // Interactive Process Active Tab
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  // Architecture selector in technical section
  const [activeArch, setActiveArch] = useState<'subdirectories' | 'cctlds' | 'subdomains'>('subdirectories');

  // Interactive Hreflang Tag Generator state
  const [hreflangDomain, setHreflangDomain] = useState('https://www.example.com');
  const [hreflangPath, setHreflangPath] = useState('/products/software');
  const [selectedLangs, setSelectedLangs] = useState<string[]>(['en-us', 'en-gb', 'es-es', 'de-de', 'fr-fr', 'x-default']);
  const [copiedHreflang, setCopiedHreflang] = useState(false);
  const [hreflangMode, setHreflangMode] = useState<'html' | 'xml'>('html');

  // Lead Generation form state
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    websiteUrl: '',
    targetRegions: 'Europe (UK, DE, FR, ES)',
    targetLanguages: 'English, German, French',
    primaryGoal: 'Scale Multilingual Organic Pipeline',
    notes: ''
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  // Active FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeAiFaq, setActiveAiFaq] = useState<number | null>(0);

  // Handle lead submission
  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;
    setLeadSubmitting(true);

    try {
      await captureLead({
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone,
        websiteUrl: leadForm.websiteUrl,
        primaryGoal: `International SEO: ${leadForm.primaryGoal} (${leadForm.targetRegions})`,
        notes: `Target Languages: ${leadForm.targetLanguages}. Notes: ${leadForm.notes}`,
        pageAddress: typeof window !== 'undefined' ? window.location.href : '/international-seo-services',
        pageTitle: 'International & Multilingual SEO Services | AKGLS Group'
      });
      setLeadSuccess(true);
    } catch (err) {
      console.error('Lead capture error:', err);
      setLeadSuccess(true);
    } finally {
      setLeadSubmitting(false);
    }
  };

  // 24 Core International & Multilingual SEO Solutions
  const allSolutions = [
    { id: 1, name: "International SEO Strategy", category: "technical", desc: "Comprehensive global roadmap aligning market potential, brand goals, search intent, and technical capacity across target nations." },
    { id: 2, name: "Multilingual SEO", category: "content", desc: "Engineered search localization ensuring pages rank natively for local idioms and queries rather than verbatim machine translations." },
    { id: 3, name: "Multiregional SEO", category: "technical", desc: "Structuring content and search signals to target geographically distinct regions sharing the same mother tongue (e.g. US, UK, AU, CA)." },
    { id: 4, name: "Country-Specific SEO", category: "technical", desc: "Tailoring technical crawl, hosted edge CDN latency, schema signals, and local domain authority to single high-priority country targets." },
    { id: 5, name: "Global Keyword Research", category: "content", desc: "Uncovering authentic cross-border search volume, localized seasonal peaks, and regional keyword competitiveness." },
    { id: 6, name: "Multilingual Keyword Research", category: "content", desc: "Identifying native search terminology, regional phrasing, and local slang that generic English translation matrices miss entirely." },
    { id: 7, name: "Search Intent Mapping", category: "content", desc: "Mapping commercial, informational, and navigational query intents per market, accounting for localized buying stages and cultural cues." },
    { id: 8, name: "International Technical SEO", category: "technical", desc: "Flawless site architecture, indexation rules, canonicalization across language variants, and geo-targeted server CDN deployment." },
    { id: 9, name: "Hreflang Implementation", category: "technical", desc: "Rigorous bidirectional hreflang annotation across HTML headers, XML sitemaps, and HTTP response headers with x-default fallbacks." },
    { id: 10, name: "International Site Architecture", category: "technical", desc: "Architecting sustainable domain topology balancing ccTLDs, subdirectories, and subdomains based on enterprise authority and cost." },
    { id: 11, name: "Country & Language URL Strategy", category: "technical", desc: "Designing intuitive, localized URL slug structures (e.g., example.com/de/produkte/) that provide clear linguistic signals." },
    { id: 12, name: "Localized Content Strategy", category: "content", desc: "Developing culturally resonant pillar content, topic clusters, and customer education tailored to localized problems and regulations." },
    { id: 13, name: "Multilingual Content Optimization", category: "content", desc: "Optimizing localized meta titles, headings, body copy, FAQs, and semantic entity vectors for native search engine algorithms." },
    { id: 14, name: "International Link Building", category: "authority", desc: "Acquiring authoritative, in-country backlinks from regional media, industry journals, and country-code top-level domains (.de, .fr, .co.uk)." },
    { id: 15, name: "International Digital PR", category: "authority", desc: "Orchestrating regional newsworthy data studies, executive commentary, and brand storytelling picked up by local journalists." },
    { id: 16, name: "Global Competitor Analysis", category: "authority", desc: "Benchmarking organic visibility, backlink profiles, SERP feature ownership, and content gaps against leading domestic players in every market." },
    { id: 17, name: "International E-commerce SEO", category: "commercial", desc: "Multi-currency schema, localized product feeds, faceted taxonomy optimization, and localized transactional checkout discoverability." },
    { id: 18, name: "Global SaaS SEO", category: "commercial", desc: "Full-funnel software acquisition: Problem → Solution → Comparison → Alternative → Integration → Local Compliance." },
    { id: 19, name: "International B2B SEO", category: "commercial", desc: "High-ticket enterprise lead generation, industrial catalog indexing, localized RFQ portals, and jurisdictional procurement authority." },
    { id: 20, name: "International Local SEO", category: "commercial", desc: "Multi-country Google Business Profile management, local map pack prominence, and native NAP citation syndication." },
    { id: 21, name: "Google & Bing Optimization", category: "ai", desc: "Universal index optimization across Google's global surfaces, Microsoft Bing, and regional search providers." },
    { id: 22, name: "AI Search Optimization", category: "ai", desc: "Entity-grounded optimization ensuring your international enterprise is recommended inside ChatGPT, Perplexity, and Gemini worldwide." },
    { id: 23, name: "AEO & GEO for Global Markets", category: "ai", desc: "Synthesizing conversational structured answer nodes for localized generative engine responses across voice, chat, and mobile overlays." },
    { id: 24, name: "International Analytics & Reporting", category: "authority", desc: "Segmented multi-country Search Console data pipelines, localized conversion attribution, and currency-normalized ROI tracking." }
  ];

  const filteredSolutions = solutionCategory === 'all' 
    ? allSolutions 
    : allSolutions.filter(s => s.category === solutionCategory);

  // 9 Process Steps detailed content
  const processSteps = [
    {
      num: "01",
      title: "Global SEO & Market Discovery",
      tagline: "Build a data-driven international expansion blueprint",
      desc: "We begin by diagnosing your business, products, services, target nations, customer segments, native competitors, and international growth goals.",
      keyAreas: [
        "Target countries & native linguistic penetration",
        "Total addressable search demand per jurisdiction",
        "Competitor SERP footprint & regional market share",
        "Existing international traffic, rankings, & technical barriers",
        "Commercial viability & localized purchasing frictions"
      ],
      outcome: "A data-driven International SEO Opportunity & Prioritization Map."
    },
    {
      num: "02",
      title: "International Keyword Research",
      tagline: "Uncover how native buyers actually search",
      desc: "Global SEO requires far more than translating English keywords. Our multilingual researchers uncover native vernacular, colloquial query phrasing, and transactional nuances.",
      keyAreas: [
        "Native-language keyword clusters & search volume",
        "Country-specific industry terminology & slang",
        "Commercial vs. informational query intent classification",
        "Conversational long-tail & voice search patterns",
        "Competitor gap queries dominating local SERPs"
      ],
      outcome: "Country → Language → Search Intent → Topic → URL → Conversion Goal Keyword Architecture."
    },
    {
      num: "03",
      title: "Multilingual SEO & Search Localization",
      tagline: "Search localization over literal translation",
      desc: "We optimize the entire semantic ecosystem of each language variant—titles, headings, metadata, body text, structured data, and internal navigation—to achieve natural linguistic relevance.",
      keyAreas: [
        "Localized metadata & heading taxonomy",
        "Cultural adaptation of product & category descriptions",
        "Internal anchor text translation & contextual linking",
        "Image alt attributes & localized multimedia indexing",
        "Semantic entity grounding for localized search graphs"
      ],
      outcome: "High-quality, indexable, native content that ranks and converts."
    },
    {
      num: "04",
      title: "Hreflang & International Technical SEO",
      tagline: "Flawless technical targeting and zero indexing conflicts",
      desc: "Technical implementation is the bedrock of international search. Incorrect geotargeting causes keyword cannibalization, wrong regional pages ranking, and wasted crawl budgets.",
      keyAreas: [
        "Bidirectional hreflang signals (HTML, HTTP headers, XML sitemaps)",
        "x-default fallback routing for unmatched territories",
        "URL architecture validation (ccTLD vs. Subdirectory vs. Subdomain)",
        "Canonicalization across regional language duplicates",
        "Edge CDN server latency & Core Web Vitals optimization"
      ],
      outcome: "Zero duplicate-content penalties and 100% accurate regional search serving."
    },
    {
      num: "05",
      title: "Localized Content Strategy",
      tagline: "Cultural resonance, localized trust, and topical authority",
      desc: "Global buyers reject cookie-cutter translated copy. We construct regional content hubs addressing localized pain points, regulatory nuances, and domestic proof points.",
      keyAreas: [
        "Market-specific cultural context & buying behaviors",
        "Jurisdictional legal & compliance considerations",
        "Local case studies, currency schemas, and payment standards",
        "Pillar Pages → Topic Clusters → Regional FAQ architecture",
        "Localized conversion triggers & trust badges"
      ],
      outcome: "Authoritative local content hubs that build durable regional market leadership."
    },
    {
      num: "06",
      title: "International E-commerce SEO",
      tagline: "Frictionless multi-currency, multi-market retail growth",
      desc: "Scaling an e-commerce platform globally requires deep optimization across localized catalogs, faceted navigation, merchant feeds, and multi-currency schemas.",
      keyAreas: [
        "Localized product & category URL taxonomy",
        "Faceted navigation with canonical & hreflang protection",
        "Multi-currency Product & Offer structured data markup",
        "Google Merchant Center international feed alignment",
        "Localized shopping query intent & cart velocity"
      ],
      outcome: "Expanded global organic transactions, reduced cart abandonment, and higher ROAS."
    },
    {
      num: "07",
      title: "International B2B & SaaS SEO",
      tagline: "Capture enterprise software buyers across the world",
      desc: "We engineer market-specific search funnels designed around the complete enterprise procurement cycle across North America, Europe, APAC, and the Middle East.",
      keyAreas: [
        "Problem → Solution → Product → Comparison search architecture",
        "Competitor comparison & localized alternative pages",
        "Localized use case, industry, and integration landing pages",
        "Technical documentation & API knowledge hub indexing",
        "Regional enterprise proof points and security compliance (GDPR, SOC2)"
      ],
      outcome: "Predictable international pipeline and qualified MQLs for global sales teams."
    },
    {
      num: "08",
      title: "International Link Building & Digital PR",
      tagline: "Build genuine in-country authority and regional trust",
      desc: "Generic backlink campaigns fail in foreign markets. We earn contextual authority from verified domestic publications, industry associations, and local ccTLD domains.",
      keyAreas: [
        "Editorial placements in top domestic publications (.de, .fr, .co.uk, etc.)",
        "Localized data-driven Digital PR research studies",
        "Regional industry associations & niche directory citations",
        "International executive thought leadership syndication",
        "Relevance-first backlink hygiene protecting global domain rating"
      ],
      outcome: "Powerful regional link equity that propels native search rankings."
    },
    {
      num: "09",
      title: "International AEO, GEO & AI Search Optimization",
      tagline: "Be the cited answer across ChatGPT, Perplexity, & Gemini",
      desc: "Search discovery is evolving beyond traditional 10 blue links. We optimize your international brand entity to become the preferred source for generative AI search engines.",
      keyAreas: [
        "Entity knowledge graph engineering across multilingual databases",
        "Direct question-and-answer structuring for voice and chat assistants",
        "Optimization for 'What is the best [service] in [country]?' queries",
        "Brand citation seeding across AI training and retrieval datasets",
        "Synthetic engine verification and recommendation monitoring"
      ],
      outcome: "Comprehensive visibility across both traditional search engines and AI answer engines."
    }
  ];

  // URL Architecture comparisons
  const architectures = {
    subdirectories: {
      name: "Subdirectories (e.g., example.com/de/)",
      recommendedFor: "Most Enterprises & Growing Global Brands (Recommended by AKGLS)",
      pros: [
        "Consolidates all domain authority and backlink equity into one primary root domain",
        "Lower technical maintenance overhead and simplified SSL/DNS management",
        "Easiest structure to track in Google Search Console using path filtering",
        "Cost-effective with rapid deployment timelines for new countries"
      ],
      cons: [
        "Weaker inherent country-code geotargeting signal compared to native ccTLDs",
        "Users in certain national markets (e.g. Germany, Japan) occasionally prefer ccTLDs"
      ]
    },
    cctlds: {
      name: "Country-Code TLDs (e.g., example.de, example.fr)",
      recommendedFor: "Large Multi-National Corporations with dedicated regional subsidiaries",
      pros: [
        "Strongest possible geographic signal to native search engines and users",
        "Highest consumer trust in mature European and Asian e-commerce markets",
        "Independent ranking resilience; issues on one domain do not impact others"
      ],
      cons: [
        "Must build domain authority and backlink profiles from zero for every single country",
        "High cost of purchasing, managing, and renewing dozens of country-code domains",
        "Complex technical governance and distinct CMS / infrastructure requirements"
      ]
    },
    subdomains: {
      name: "Subdomains (e.g., de.example.com, fr.example.com)",
      recommendedFor: "Organizations with distinct technological infrastructure per country",
      pros: [
        "Allows hosting localized instances on physically separate regional servers",
        "Flexible for distinct regional tech stacks, CMS installations, or legal requirements",
        "Easy to set up geotargeting in Google Search Console per subdomain"
      ],
      cons: [
        "Google often treats subdomains as separate entities, diluting primary link equity",
        "User experience can feel fragmented across cross-subdomain sessions",
        "Higher maintenance overhead than clean subdirectory hierarchies"
      ]
    }
  };

  // Generate Hreflang code dynamically
  const generateHreflangCode = () => {
    const cleanDomain = hreflangDomain.replace(/\/$/, "");
    const cleanPath = hreflangPath.startsWith('/') ? hreflangPath : `/${hreflangPath}`;

    if (hreflangMode === 'html') {
      return selectedLangs.map(code => {
        if (code === 'x-default') {
          return `<link rel="alternate" hreflang="x-default" href="${cleanDomain}${cleanPath}" />`;
        }
        const langPrefix = code.split('-')[0];
        return `<link rel="alternate" hreflang="${code}" href="${cleanDomain}/${langPrefix}${cleanPath}" />`;
      }).join('\n');
    } else {
      return `<!-- Put inside <url> block of XML Sitemap -->\n<url>\n  <loc>${cleanDomain}${cleanPath}</loc>\n` +
        selectedLangs.map(code => {
          if (code === 'x-default') {
            return `  <xhtml:link rel="alternate" hreflang="x-default" href="${cleanDomain}${cleanPath}" />`;
          }
          const langPrefix = code.split('-')[0];
          return `  <xhtml:link rel="alternate" hreflang="${code}" href="${cleanDomain}/${langPrefix}${cleanPath}" />`;
        }).join('\n') + `\n</url>`;
    }
  };

  const copyGeneratedCode = () => {
    navigator.clipboard.writeText(generateHreflangCode());
    setCopiedHreflang(true);
    setTimeout(() => setCopiedHreflang(false), 2000);
  };

  // Standard FAQs
  const standardFaqs = [
    {
      q: "What is International SEO?",
      a: "International SEO is the discipline of optimizing website architecture, technical signals, multilingual content, and domain authority to attract organic search traffic and qualified customers across multiple countries and languages."
    },
    {
      q: "What is Multilingual SEO?",
      a: "Multilingual SEO focuses on making web content and technical elements discoverable, natural, and competitive for users searching in multiple languages. It encompasses localized keyword research, cultural search intent mapping, and accurate hreflang implementation."
    },
    {
      q: "Is translating a website enough for multilingual SEO?",
      a: "No. Translation merely converts vocabulary. Multilingual SEO accounts for native keyword variations, localized commercial intent, regional competition, cultural nuances, regulatory differences, and technical hreflang declarations. Without search localization, translated pages rarely rank."
    },
    {
      q: "What is hreflang in SEO and why is it critical?",
      a: "Hreflang is an HTML/XML annotation (RFC 5646) that informs search engine crawlers which language and country variant of a page should be served to a specific searcher. It prevents duplicate content penalties between regions sharing the same language (such as the US, UK, and Australia) and ensures users land on the correct regional currency and dialect."
    },
    {
      q: "Which URL structure is best for International SEO?",
      a: "For most growing and mid-to-enterprise businesses, subdirectories (e.g., example.com/de/ or example.com/fr/) provide the optimal balance by consolidating all backlink authority into a single domain. Country-code top-level domains (ccTLDs like example.de) provide maximum local trust but require building domain authority from scratch for each country."
    },
    {
      q: "Can International SEO target multiple countries with the same language?",
      a: "Yes. Using regional hreflang annotations (e.g., en-US, en-GB, en-AU, es-ES, es-MX), search engines can distinguish localized content variants, ensuring local pricing, shipping policies, phone numbers, and cultural nuances appear correctly in each target SERP."
    },
    {
      q: "Does International SEO work for e-commerce stores?",
      a: "Absolutely. International e-commerce SEO optimizes multi-currency product feeds, category taxonomies, faceted filtering, localized product schema, and merchant center listings to capture high-intent international shoppers across global markets."
    },
    {
      q: "Can International SEO improve visibility in AI Search (ChatGPT, Perplexity, Gemini)?",
      a: "Yes. AKGLS Group integrates Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). By structuring entity data, establishing localized topical authority, and optimizing for direct conversational Q&As, we ensure AI assistants cite and recommend your brand internationally."
    },
    {
      q: "How long does International SEO take to generate results?",
      a: "Initial technical index stabilization and hreflang resolution typically occur within 30 to 60 days. Measurable organic traffic growth and localized ranking gains generally compound significantly within 3 to 6 months as domain authority and native topical depth mature."
    }
  ];

  // AI & Answer Engine FAQs
  const aiEngineFaqs = [
    {
      q: "How can a company rank internationally?",
      a: "A company builds international search visibility by defining target geographic markets, choosing the correct URL architecture (subdirectories or ccTLDs), performing native keyword research, implementing verified bidirectional hreflang tags, producing localized content clusters, and acquiring country-specific backlink authority."
    },
    {
      q: "How do you optimize a website for multiple countries?",
      a: "Optimization requires: 1) International URL structure (e.g. /uk/, /de/); 2) Bidirectional hreflang annotations with x-default fallbacks; 3) Native-language keyword mapping; 4) Localized payment, currency, and address schema; 5) Edge CDN hosting for low regional latency; and 6) Domestic digital PR."
    },
    {
      q: "What is the difference between global SEO and local SEO?",
      a: "Global SEO optimizes for visibility across national borders and multiple languages at an international scale. Local SEO targets specific cities, metropolitan areas, or postal codes using Google Business Profiles, localized map packs, and community citations."
    },
    {
      q: "Can one single website target multiple languages effectively?",
      a: "Yes. A single root domain can successfully target dozens of languages and nations when structured with clean subdirectories, distinct language URLs, valid hreflang signals, localized navigation menus, and separate sitemap indexes."
    }
  ];

  return (
    <div className="bg-[#050814] text-slate-200 min-h-screen selection:bg-brand-indigo selection:text-white font-sans">
      
      {/* SCHEMA.ORG INJECTIONS FOR SERVICE & FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "International & Multilingual SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "AKGLS Group",
            "url": "https://www.akglsgroup.com",
            "logo": "https://www.akglsgroup.com/assets/geo-og.png"
          },
          "areaServed": ["Worldwide", "United States", "United Kingdom", "Germany", "France", "Spain", "India", "Australia", "Canada", "United Arab Emirates"],
          "description": "Grow globally with AKGLS Group's International & Multilingual SEO Services. Global SEO, hreflang, localized content, technical SEO, AEO, GEO & AI search optimization.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "International SEO Services",
            "itemListElement": allSolutions.map(s => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.name,
                "description": s.desc
              }
            }))
          }
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [...standardFaqs, ...aiEngineFaqs].map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        })
      }} />

      {/* TOP SUB-NAV BREADCRUMB */}
      <div className="border-b border-slate-800/80 bg-[#080d1e]/80 backdrop-blur-md sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <button 
              onClick={onBackToHome}
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <button 
              onClick={() => onNavigate ? onNavigate('/seo-services') : onBackToHome()}
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              SEO Services
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-teal-400 font-bold truncate max-w-[220px] sm:max-w-none">International & Multilingual SEO</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Multi-Region Enterprise Architecture</span>
            </span>
            <span>·</span>
            <span>Global Hreflang Verification</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Domain-Native Unboxed Text Kicker */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>Global Search Visibility · Local Relevance · International Growth</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-display">
                International & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-300 to-cyan-400">Multilingual SEO</span> Services
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Expand your business beyond borders with International & Multilingual SEO Services by AKGLS Group. We help enterprises engineer search visibility across countries, languages, search engines, and AI-powered discovery platforms—while ensuring every market receives locally relevant, technically sound, and conversion-focused experiences.
              </p>

              {/* Strategic Dimensions List */}
              <div className="pt-2 text-xs text-slate-400 font-mono flex flex-wrap items-center gap-y-2 gap-x-3">
                <span className="text-slate-200 font-semibold">Target Markets</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-semibold">Multiple Languages</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-semibold">Multiple Search Engines</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-semibold">AI Search & AEO</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-semibold">Global Customers</span>
              </div>

              {/* Primary Conversion CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.querySelector('#global-audit-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 flex items-center gap-2.5 transition-all cursor-pointer"
                >
                  <span>Request a Global SEO Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918318114492"
                  className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all flex items-center gap-2.5"
                >
                  <PhoneCall className="w-4 h-4 text-teal-400" />
                  <span>Talk to an International SEO Expert</span>
                </a>
              </div>

              {/* Key Trust Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 pt-6 mt-8 font-mono">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">120+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Target Markets</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-teal-400">45+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Languages Optimized</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-indigo-400">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Hreflang Validation</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">Tier-1</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Global Link Networks</div>
                </div>
              </div>

            </div>

            {/* Hero Visual Card: Global Architecture Topology */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b1021] border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden text-left">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">Global Search Infrastructure</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">v4.2 Architecture</span>
                </div>

                <div className="space-y-4">
                  {/* Layer 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-teal-400 font-mono font-bold">01 / Geo-Routing & Hreflang Silos</span>
                      <span className="text-[10px] font-mono text-slate-400">Bidirectional</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                      rel="alternate" hreflang="de-DE" href=".../de/" (x-default fallback verified)
                    </p>
                  </div>

                  {/* Layer 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-indigo-400 font-mono font-bold">02 / Native Semantic Localization</span>
                      <span className="text-[10px] font-mono text-slate-400">Intent Mapped</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                      Entity knowledge graphs adapted to local dialect search volumes
                    </p>
                  </div>

                  {/* Layer 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-cyan-400 font-mono font-bold">03 / Multi-Surface AI Citation</span>
                      <span className="text-[10px] font-mono text-slate-400">GEO + AEO</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                      Answer-engine visibility across ChatGPT, Perplexity, Gemini, & Bing
                    </p>
                  </div>

                  {/* Layer 4 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-purple-400 font-mono font-bold">04 / Regional Domain Authority</span>
                      <span className="text-[10px] font-mono text-slate-400">Local ccTLDs</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                      Verified contextual backlinks from .de, .fr, .co.uk, .au publishers
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Need immediate technical diagnosis?</span>
                  <button
                    onClick={() => {
                      const el = document.querySelector('#hreflang-tool');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Launch Hreflang Compiler</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: 24 INTERNATIONAL & MULTILINGUAL SEO SOLUTIONS */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left space-y-4 mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Full-Stack Global Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              International SEO Services That Scale Across Markets
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Going global requires more than translating your existing website. Search behavior, keywords, competition, cultural context, search engines, regulations, content expectations, and purchasing behavior differ significantly from one country to another. Our 24 modular solutions build an end-to-end framework for durable international organic expansion.
            </p>
          </div>

          {/* Interactive Category Filter Controls (Clean Segmented Buttons) */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-slate-800/80 mb-8">
            {[
              { id: 'all', label: 'All Solutions (24)' },
              { id: 'technical', label: 'Technical & Architecture' },
              { id: 'content', label: 'Content & Language' },
              { id: 'commercial', label: 'Commercial & Industry' },
              { id: 'ai', label: 'AI Search & AEO' },
              { id: 'authority', label: 'Authority & PR' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSolutionCategory(tab.id as any)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  solutionCategory === tab.id
                    ? 'bg-teal-500/15 text-teal-300 border border-teal-500/40 font-bold'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {filteredSolutions.map((sol) => (
              <div 
                key={sol.id}
                className="bg-[#090e1f] border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 hover:bg-[#0c1329] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                      MODULE #{String(sol.id).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest">
                      {sol.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors font-display">
                    {sol.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: WHY INTERNATIONAL SEO IS DIFFERENT */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <Compass className="w-4 h-4 text-teal-400" />
                <span>Market-Specific vs. One-Size-Fits-All</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Why International SEO Is Completely Different
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A website can rank strongly in one country and still fail completely to gain visibility in another. Simply translating English content into another language does not automatically create an effective international SEO strategy.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                For example, a high-volume keyword in the United States may have entirely different search volume, commercial intent, native phrasing, regulatory boundaries, or competitive landscapes in Germany, France, India, the UAE, or Australia. AKGLS Group builds market-specific SEO architectures rather than one-size-fits-all campaigns.
              </p>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                  The International Search Alignment Equation
                </div>
                <div className="text-xs font-mono text-teal-300 font-semibold leading-relaxed">
                  Language + Location + Search Intent + Content + Technical Architecture + Authority + User Experience + AI Visibility
                </div>
                <p className="text-[11px] text-slate-400">
                  When all eight components are calibrated in unison, search engines recognize true domestic authority.
                </p>
              </div>
            </div>

            {/* Country Differences Matrix */}
            <div className="lg:col-span-6 space-y-3.5">
              {[
                { country: "United States", flag: "🇺🇸", nuance: "High commercial ad competition, broad generic search terms, aggressive comparison queries." },
                { country: "Germany & DACH", flag: "🇩🇪", nuance: "Compound technical terminology, strict Impressum & GDPR compliance, high demand for technical depth and ccTLD trust." },
                { country: "France", flag: "🇫🇷", nuance: "Strict linguistic preference; resistance to Anglicisms; searchers favor formal localized register." },
                { country: "India & South Asia", flag: "🇮🇳", nuance: "Massive mobile-first search volumes, mixed English/Hindi conversational queries, high price-sensitivity." },
                { country: "United Arab Emirates & GCC", flag: "🇦🇪", nuance: "Bilingual English/Arabic search ecosystems, luxury positioning, heavy WhatsApp conversational routing." },
                { country: "Australia & New Zealand", flag: "🇦🇺", nuance: "Distinct regional terminology, localized delivery logistics expectations, seasonal inversion." }
              ].map((c, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#090e1f] border border-slate-800/80 flex items-start gap-3.5">
                  <span className="text-2xl select-none" aria-hidden="true">{c.flag}</span>
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-white font-mono">{c.country}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{c.nuance}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: THE 9-STEP PROCESS DEEP-DIVE */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left space-y-4 mb-14">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Workflow className="w-4 h-4 text-teal-400" />
              <span>Rigorous Execution Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Our International & Multilingual SEO Process
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our structured 9-stage international framework—from market discovery to technical hreflang governance, localized content clustering, and global AI answer engine optimization.
            </p>
          </div>

          {/* Interactive Step Switcher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Step Navigation Sidebar */}
            <div className="lg:col-span-4 space-y-2">
              {processSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    activeProcessStep === idx
                      ? 'bg-slate-900 border-teal-500/50 text-white shadow-lg shadow-teal-500/5'
                      : 'bg-slate-950/40 border-slate-850 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${activeProcessStep === idx ? 'text-teal-400' : 'text-slate-600'}`}>
                      {step.num}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold truncate max-w-[210px]">
                      {step.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeProcessStep === idx ? 'text-teal-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Step Detail Display */}
            <div className="lg:col-span-8">
              <div className="bg-[#0a0f24] border border-slate-800 rounded-2xl p-6 sm:p-9 shadow-2xl relative overflow-hidden space-y-6">
                
                <div className="border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-1.5">
                    <span>STAGE {processSteps[activeProcessStep].num} // DEEP IMPLEMENTATION</span>
                  </div>
                  <h3 className="text-2xl font-black text-white font-display">
                    {processSteps[activeProcessStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-300 font-medium mt-1">
                    {processSteps[activeProcessStep].tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {processSteps[activeProcessStep].desc}
                </p>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                    Key Execution Components:
                  </div>
                  <div className="space-y-2">
                    {processSteps[activeProcessStep].keyAreas.map((area, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold mb-1">
                    Guaranteed Stage Outcome:
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-teal-300 font-mono">
                    {processSteps[activeProcessStep].outcome}
                  </span>
                </div>

                {/* Sub-Feature Highlight: Translation vs Multilingual SEO on Step 03 */}
                {activeProcessStep === 2 && (
                  <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      Translation vs. Multilingual SEO (Comparison Matrix)
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-800">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-900 text-slate-300 font-mono">
                          <tr>
                            <th className="py-2.5 px-3">Dimension</th>
                            <th className="py-2.5 px-3">Literal Translation</th>
                            <th className="py-2.5 px-3 text-teal-400 font-bold">Multilingual SEO</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-300">
                          <tr>
                            <td className="py-2 px-3 font-semibold text-white">Primary Goal</td>
                            <td className="py-2 px-3 text-slate-400">Converts language words</td>
                            <td className="py-2 px-3 text-teal-300 font-medium">Maximizes organic search visibility</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 font-semibold text-white">Keyword Focus</td>
                            <td className="py-2 px-3 text-slate-400">Single source keyword</td>
                            <td className="py-2 px-3 text-teal-300 font-medium">Native-speaker query volume & intent</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 font-semibold text-white">Content Structure</td>
                            <td className="py-2 px-3 text-slate-400">Mirror copy of original</td>
                            <td className="py-2 px-3 text-teal-300 font-medium">Market-specific topic clusters & URLs</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 font-semibold text-white">Business Return</td>
                            <td className="py-2 px-3 text-slate-400">Translation output only</td>
                            <td className="py-2 px-3 text-teal-300 font-medium">Traffic + Pipeline + Revenue Conversion</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: URL ARCHITECTURE & HREFLANG COMPILER TOOL */}
      <section id="hreflang-tool" className="py-20 border-b border-slate-800/80 bg-[#030611]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left space-y-4 mb-14">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Server className="w-4 h-4 text-teal-400" />
              <span>Technical Infrastructure & Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              International Site Architecture & Hreflang Compiler
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Compare global URL structures (Subdirectories vs. ccTLDs vs. Subdomains) and test our interactive Hreflang code compiler to generate validated multi-region tags for HTML or XML sitemaps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
            
            {/* Architecture Comparisons */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex gap-2">
                {(['subdirectories', 'cctlds', 'subdomains'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setActiveArch(type)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                      activeArch === type
                        ? 'bg-indigo-600 text-white shadow'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-white font-display">
                    {architectures[activeArch].name}
                  </h3>
                  <p className="text-xs text-teal-400 font-mono mt-1">
                    {architectures[activeArch].recommendedFor}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Strategic Advantages:</span>
                  {architectures[activeArch].pros.map((p, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Trade-Offs & Challenges:</span>
                  {architectures[activeArch].cons.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Hreflang Compiler */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b1022] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-mono font-bold uppercase text-white">Live Hreflang Tag Generator</span>
                  </div>
                  
                  {/* Mode switcher */}
                  <div className="flex gap-1 p-0.5 bg-slate-950 rounded border border-slate-800 text-[10px] font-mono">
                    <button
                      onClick={() => setHreflangMode('html')}
                      className={`px-2.5 py-1 rounded cursor-pointer ${hreflangMode === 'html' ? 'bg-teal-500/20 text-teal-300 font-bold' : 'text-slate-400'}`}
                    >
                      HTML Header
                    </button>
                    <button
                      onClick={() => setHreflangMode('xml')}
                      className={`px-2.5 py-1 rounded cursor-pointer ${hreflangMode === 'xml' ? 'bg-teal-500/20 text-teal-300 font-bold' : 'text-slate-400'}`}
                    >
                      XML Sitemap
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Root Domain</label>
                    <input
                      type="text"
                      value={hreflangDomain}
                      onChange={(e) => setHreflangDomain(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white font-mono text-xs focus:border-teal-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Target Slug / Path</label>
                    <input
                      type="text"
                      value={hreflangPath}
                      onChange={(e) => setHreflangPath(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white font-mono text-xs focus:border-teal-400 outline-none"
                    />
                  </div>
                </div>

                {/* Country selections */}
                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2">Target Language & Region Tags</label>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {[
                      { code: 'en-us', label: 'US English' },
                      { code: 'en-gb', label: 'UK English' },
                      { code: 'en-au', label: 'AU English' },
                      { code: 'de-de', label: 'Germany' },
                      { code: 'fr-fr', label: 'France' },
                      { code: 'es-es', label: 'Spain' },
                      { code: 'es-mx', label: 'Mexico' },
                      { code: 'hi-in', label: 'India' },
                      { code: 'ja-jp', label: 'Japan' },
                      { code: 'ar-ae', label: 'UAE Arabic' },
                      { code: 'x-default', label: 'x-default' }
                    ].map(item => {
                      const active = selectedLangs.includes(item.code);
                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => {
                            if (active) {
                              if (selectedLangs.length > 2) {
                                setSelectedLangs(selectedLangs.filter(c => c !== item.code));
                              }
                            } else {
                              setSelectedLangs([...selectedLangs, item.code]);
                            }
                          }}
                          className={`px-2.5 py-1 rounded border text-[11px] cursor-pointer transition-colors ${
                            active
                              ? 'bg-teal-500/15 border-teal-500/40 text-teal-300 font-bold'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {item.label} ({item.code})
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Code Preview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Generated Multi-Country Annotations:</span>
                    <button
                      onClick={copyGeneratedCode}
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedHreflang ? 'Copied to Clipboard!' : 'Copy Code'}</span>
                    </button>
                  </div>

                  <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 font-mono text-[11px] text-teal-300/90 overflow-x-auto leading-relaxed max-h-48">
                    {generateHreflangCode()}
                  </pre>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: GLOBAL SEO + AI SEARCH (TRADITIONAL VS AEO VS GEO VS AIO) */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left space-y-4 mb-14">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Bot className="w-4 h-4 text-teal-400" />
              <span>Unified Dual-Ecosystem Optimization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Global SEO + AI Search Optimization
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Search is evolving beyond 10 traditional blue links. Worldwide customers discover software and services through AI assistants, answer engines, and search-generated summaries. We optimize for both ecosystems simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="p-6 rounded-2xl bg-[#090e1f] border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase text-teal-400 font-bold block">01 // Traditional SEO</span>
              <h3 className="text-lg font-bold text-white font-display">Google & Bing Global</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Organic search rankings, localized featured snippets, video/image search carousels, and localized map pack dominance across global territories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1f] border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase text-indigo-400 font-bold block">02 // AEO (Answer Engine)</span>
              <h3 className="text-lg font-bold text-white font-display">Direct Answer Nodes</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structuring FAQ pages, schema definitions, and conversational direct answers to win quick voice, mobile, and assistant query resolutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1f] border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold block">03 // GEO (Generative Engine)</span>
              <h3 className="text-lg font-bold text-white font-display">AI Discovery Prominence</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Improving the contextual representation and citation frequency of your international enterprise inside Perplexity, ChatGPT, and Gemini.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1f] border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase text-purple-400 font-bold block">04 // AIO (AI Optimization)</span>
              <h3 className="text-lg font-bold text-white font-display">Entity Graph Authority</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structuring entities, cross-border brand citations, and topical authority so algorithmic neural LLMs recommend your brand as category standard.
              </p>
            </div>

          </div>

          {/* AI Prompts we optimize for */}
          <div className="mt-12 p-7 rounded-2xl bg-gradient-to-r from-slate-950 via-[#0a0f24] to-slate-950 border border-slate-800/80 text-left space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Representative AI Search Queries We Optimize Your Brand To Answer:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-teal-300">
                "What is the best enterprise [service] in [country]?"
              </div>
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-indigo-300">
                "How does [software] work for European GDPR compliance?"
              </div>
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-cyan-300">
                "Which companies provide [service] internationally?"
              </div>
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-purple-300">
                "What are the top localized alternatives to [competitor]?"
              </div>
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-teal-300">
                "How much does [enterprise service] cost in [market]?"
              </div>
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-indigo-300">
                "Compare international vendors for [industry solution]."
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: MULTI-SEARCH ENGINE & MULTI-INDUSTRY COVERAGE */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Left: Multiple Engines */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <Search className="w-4 h-4 text-teal-400" />
                <span>Search Engine Diversity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Beyond Google: Multi-Engine Optimization
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Depending on your target markets, Google may not be the only search ecosystem that matters. Our cross-border campaigns account for how customers discover services in each territory:
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-white">Google & Google Images</span>
                  <span className="text-slate-400">Global Coverage (91%+ share)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-white">Microsoft Bing & Copilot</span>
                  <span className="text-slate-400">US, UK, & Enterprise Desktop</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-white">Regional Engines (Baidu, Yandex, Naver)</span>
                  <span className="text-slate-400">China, CIS, & South Korea</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-white">AI Search (Perplexity, ChatGPT Search)</span>
                  <span className="text-slate-400">Fastest-Growing Global B2B Layer</span>
                </div>
              </div>
            </div>

            {/* Right: Industry Verticals */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <Briefcase className="w-4 h-4 text-teal-400" />
                <span>Sector Specialization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Tailored for Global Industry Verticals
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Cpu,
                    title: "Technology, SaaS & IT",
                    desc: "Product-led growth, multi-tenant app documentation indexing, and comparison queries."
                  },
                  {
                    icon: ShoppingCart,
                    title: "Global E-Commerce & D2C",
                    desc: "Multi-currency catalogs, faceted navigation, merchant feeds, and cross-border shopping."
                  },
                  {
                    icon: Building2,
                    title: "B2B & Professional Services",
                    desc: "Industrial procurement, jurisdictional compliance, legal authority, and high-value RFP leads."
                  },
                  {
                    icon: Landmark,
                    title: "Real Estate & Hospitality",
                    desc: "Cross-border investor portals, hotel booking visibility, and localized destination discovery."
                  },
                  {
                    icon: GraduationCap,
                    title: "Education & EdTech",
                    desc: "International student recruitment funnels, localized degree queries, and institutional trust."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Fintech & Financial Services",
                    desc: "Regulatory-compliant content, institutional credibility, and international money movement search."
                  }
                ].map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-[#090e1f] border border-slate-800 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-teal-400" />
                        <span className="text-sm font-bold text-white font-display">{ind.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: 5-PILLAR GLOBAL AUDIT DIAGNOSTIC */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left space-y-4 mb-14">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Full Diagnostic Assessment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Comprehensive International SEO Audit
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Already operating internationally? Our deep forensic audit pinpoints technical, linguistic, authority, and conversion bottlenecks across your target territories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {[
              {
                pillar: "01 / Technical",
                items: ["Hreflang validation", "URL architecture", "Crawlability & indexing", "CDN server latency", "Core Web Vitals"]
              },
              {
                pillar: "02 / Content",
                items: ["Localization quality", "Search intent matching", "Keyword coverage", "Content cannibalization", "Topic authority gaps"]
              },
              {
                pillar: "03 / Authority",
                items: ["Regional backlink profiles", "ccTLD referring domains", "Competitor link equity", "Digital PR opportunities", "Brand citations"]
              },
              {
                pillar: "04 / Visibility",
                items: ["Country-specific rankings", "SERP features & snippets", "AI citation presence", "Brand search trends", "Market share percentage"]
              },
              {
                pillar: "05 / Conversion",
                items: ["Localized checkout flows", "Regional payment signals", "Currency transparency", "Local telephone/CTA presence", "Form abandonment"]
              }
            ].map((aud, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#090e1f] border border-slate-800 space-y-3">
                <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider block">
                  {aud.pillar}
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {aud.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-teal-400 font-bold">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left space-y-4 mb-14">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Zap className="w-4 h-4 text-teal-400" />
              <span>Global Strategy. Local Execution.</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Why Category Leaders Choose AKGLS Group
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We combine enterprise engineering rigor, deep linguistic research, and AI search intelligence to build enduring organic growth systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                num: "01",
                title: "Data-Driven Discovery",
                desc: "We analyze localized demand, native competition, and commercial signals before committing architectural engineering."
              },
              {
                num: "02",
                title: "Deep Technical Rigor",
                desc: "Zero hreflang conflicts, automated index validation, clean canonical structures, and enterprise CDN configurations."
              },
              {
                num: "03",
                title: "Authentic Cultural Localization",
                desc: "No machine translation fluff. We write for how native buyers search, question, compare, and convert."
              },
              {
                num: "04",
                title: "AI-Ready Search Architecture",
                desc: "Simultaneous optimization for Google, Bing, ChatGPT Search, Perplexity, and conversational voice interfaces."
              },
              {
                num: "05",
                title: "Conversion & Revenue Focused",
                desc: "Rankings and vanity impressions mean nothing without pipeline, qualified demos, and cross-border transactions."
              },
              {
                num: "06",
                title: "Scalable Global Foundation",
                desc: "Our site architecture effortlessly expands to additional languages and countries as your business penetrates new continents."
              }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#090e1f] border border-slate-800 space-y-2.5">
                <span className="text-xs font-mono text-teal-400 font-bold uppercase">{p.num} — PRINCIPLE</span>
                <h3 className="text-lg font-bold text-white font-display">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: LEAD INTAKE / GLOBAL AUDIT FORM */}
      <section id="global-audit-form" className="py-20 border-b border-slate-800/80 bg-gradient-to-b from-[#04060f] to-[#080d22]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0b1022] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
            
            <div className="space-y-3 max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>Your Global Growth Starts With Search</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Request an International SEO Consultation
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with our Principal International Search Architects. We will diagnose your Hreflang index, evaluate cross-border keyword potential, and blueprint your expansion roadmap.
              </p>
            </div>

            {leadSuccess ? (
              <div className="p-8 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-300 space-y-3 max-w-lg mx-auto font-mono">
                <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Global Assessment Request Received</h3>
                <p className="text-xs text-slate-300">
                  Our international technical director will review your site architecture and provide initial market opportunity findings within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-2xl mx-auto text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-teal-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Website URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://www.yourdomain.com"
                      value={leadForm.websiteUrl}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, websiteUrl: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-teal-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Primary Target Region</label>
                    <select
                      value={leadForm.targetRegions}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, targetRegions: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none font-medium"
                    >
                      <option value="Europe (UK, DE, FR, ES, IT)">Europe (UK, DE, FR, ES, IT)</option>
                      <option value="North America (US, CA, MX)">North America (US, CA, MX)</option>
                      <option value="Asia-Pacific (AU, SG, IN, JP)">Asia-Pacific (AU, SG, IN, JP)</option>
                      <option value="Middle East & GCC (UAE, SA)">Middle East & GCC (UAE, SA)</option>
                      <option value="Latin America (BR, MX, AR, CL)">Latin America (BR, MX, AR, CL)</option>
                      <option value="Global (Multi-Continent)">Global Multi-Continent Expansion</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-slate-400">Target Languages</label>
                    <input
                      type="text"
                      placeholder="e.g. English, German, French, Spanish"
                      value={leadForm.targetLanguages}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, targetLanguages: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-slate-400">Expansion Goals or Current Challenges</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your target markets, current hreflang setup, or organic search challenges..."
                    value={leadForm.notes}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-teal-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={leadSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer disabled:opacity-50"
                >
                  {leadSubmitting ? 'Evaluating Parameters...' : 'Get Your Global SEO Audit Blueprint'}
                </button>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Non-Disclosure Protected</span>
                  </span>
                  <span>·</span>
                  <a href="tel:+918318114492" className="text-teal-400 hover:underline">
                    Hotline: +91 831 811 4492
                  </a>
                  <span>·</span>
                  <a href="https://wa.me/918318114492" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1">
                    <WhatsAppIcon className="w-3 h-3" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* SECTION 11: DUAL FAQS (STANDARD & AI-GROUNDED) */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <HelpCircle className="w-4 h-4 text-teal-400" />
              <span>International Search Knowledge Base</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Clear, definitive guidance on international SEO strategy, multilingual content localization, hreflang technical rules, and answer engine discovery.
            </p>
          </div>

          {/* Standard FAQs */}
          <div className="space-y-3 mb-16 text-left">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">
              Core Strategic & Technical Questions:
            </h3>

            {standardFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#090e1f] border border-slate-800 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-white text-sm sm:text-base hover:text-teal-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-teal-400' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* AI & Answer Engine FAQs (Formatted for LLMs & Direct Voice Citations) */}
          <div className="space-y-3 text-left">
            <div className="border-t border-slate-800/80 pt-10 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold block mb-1">
                Optimized for AI & Answer Engines (AEO Knowledge Blocks):
              </span>
              <p className="text-xs text-slate-400">
                Direct, structured answers engineered to feed Generative Search summaries across Perplexity, ChatGPT, and Gemini.
              </p>
            </div>

            {aiEngineFaqs.map((faq, idx) => {
              const isOpen = activeAiFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#0b1022] border border-slate-800/90 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveAiFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-teal-300 text-sm sm:text-base hover:text-teal-200 transition-colors cursor-pointer"
                  >
                    <span className="font-mono text-xs text-slate-500 mr-2">Q //</span>
                    <span className="flex-1">{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-teal-400' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 font-mono bg-slate-950/40"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION STRIP */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Ready to Capture Organic Market Share Worldwide?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Deploy culturally localized content, prevent index cannibalization with verified hreflang governance, and build global organic pipeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.querySelector('#global-audit-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
            >
              Get Your Global SEO Audit
            </button>
            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

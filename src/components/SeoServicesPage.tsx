import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Award, CheckCircle, Database, LineChart, 
  ShieldCheck, AlertTriangle, ChevronRight, Star, Users, Briefcase,
  Search, Code, Share2, FileText, Settings, Layers, Activity, Cpu, 
  Globe, Gauge, Terminal, ChevronDown, Check, Percent, Send, Copy, Laptop, Smartphone
} from 'lucide-react';

interface SeoServicesPageProps {
  onBackToHome: () => void;
}

export default function SeoServicesPage({ onBackToHome }: SeoServicesPageProps) {
  // Constants for CTA
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title & Meta tags simulation for absolute SEO compliance
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "SEO Services Company | AI-Powered SEO Agency | AKGLS Group";
    
    // Add custom meta tags simulation or dynamically append if needed
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Form states
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    email: '',
    phone: '',
    businessType: 'B2B Software'
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const [industryStrategyType, setIndustryStrategyType] = useState('SaaS SEO');
  const [industrySubmitted, setIndustrySubmitted] = useState(false);

  // Tab systems
  const [activeServiceTab, setActiveServiceTab] = useState<string>('technical');
  const [processStep, setProcessStep] = useState<number>(0);
  const [compareView, setCompareView] = useState<'table' | 'cards'>('table');
  const [packagePeriod, setPackagePeriod] = useState<'monthly' | 'yearly'>('monthly');

  // FAQ accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Schema copying state
  const [schemaCopied, setSchemaCopied] = useState(false);

  // Schema Markup representation
  const serviceSchemaCode = `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional SEO & AI Search Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akgls.com",
    "logo": "https://akgls.com/logo.png"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO & GEO Performance Suites",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical SEO Audit & Structural Mapping"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Generative Engine Optimization (GEO)"
        }
      }
    ]
  }
}`;

  const handleCopySchema = () => {
    navigator.clipboard.writeText(serviceSchemaCode);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.website || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const servicesData = {
    technical: {
      title: "Technical SEO Optimization",
      subtitle: "The infrastructure structural mapping required by crawlers and AI bots.",
      features: [
        "In-depth Technical Website Audits (180+ Checkpoints)",
        "Advanced Core Web Vitals audit & payload optimization",
        "Crawler Budget Optimization & Robots.txt structural rules",
        "Custom Nested JSON-LD Schema Markup deployment",
        "Dynamic XML Sitemap automation",
        "Force HTTPS, SSL checks, and secure header configuration"
      ],
      metrics: "Under 0.8s load-time average achieved for 95% of client sites."
    },
    onpage: {
      title: "On-Page Semantic Strategy",
      subtitle: "Enriching target assets with the literal terms, tags, and layouts indexers prioritize.",
      features: [
        "Linguistic entity mapping (LSI & semantic grouping)",
        "Meta titles, descriptions, and dynamic H1-H4 header trees",
        "Internal parsing structure checks & cross-link modeling",
        "Image format modernization (Next-gen AVIF/WebP) with Alt tags",
        "SEO-friendly, canonicalized URL routing structure",
        "Contextual markdown layout rendering for clean parsing"
      ],
      metrics: "Average 42% boost in contextual phrase matches within 30 days."
    },
    offpage: {
      title: "Off-Page Authority Growth",
      subtitle: "Securing trust parameters from outside elements that validate your domain authority.",
      features: [
        "White-hat editorial link acquisition campaigns",
        "Digital PR outreach targeting top corporate publications",
        "Authority brand mention triggers across key channels",
        "Local directories cleanups and local citation clustering",
        "Structured competitor backlink gap replication strategy"
      ],
      metrics: "Acquire high-relevance backlink credentials up to DA 85+."
    },
    local: {
      title: "Local maps SEO Dominance",
      subtitle: "Funnels geographical searches straight into your real physical location portals.",
      features: [
        "Google Business Profile optimization & verification",
        "Geo-targeted localized landing pages generation",
        "Hyperlocal citations and maps route clustering",
        "Local review acquisition workflows to foster credibility",
        "Locational search intent optimization on conversational maps"
      ],
      metrics: "Top 3 Local Map Pack ranking guaranteed within designated subzones."
    },
    ecommerce: {
      title: "Ecommerce Optimization Engine",
      subtitle: "Converts searches directly into checkouts, carts, and product page views.",
      features: [
        "Dynamic Merchant Center Feed & product schema sync",
        "Category & collection level SEO hierarchy planning",
        "Product page layout optimization for conversion & loading speed",
        "Review markup configuration to trigger rich stars snippets",
        "Ecommerce checkout speed & funnel drop-off analysis"
      ],
      metrics: "Increase product page clicks by over 112% year-over-year."
    },
    enterprise: {
      title: "Scalable Enterprise SEO",
      subtitle: "Maintains authority parameters across tens of thousands of complex paths dynamically.",
      features: [
        "Automated programmatic keyword templates tracking",
        "Global multi-region & multilingual hreflang tag matrices",
        "Enterprise-wide crawl logging auditing and server checks",
        "Seamless integration with Headless Content Management Engines",
        "Strict corporate alignment reporting & brand voice control"
      ],
      metrics: "Manage site indices up to 5,000,000+ paths seamlessly."
    },
    aiseo: {
      title: "AI SEO & Generative Engine Optimization (GEO)",
      subtitle: "Aligning context elements so conversational searches cite you directly.",
      features: [
        "Linguistic alignment with Claude, Gemini and GPT-4 Search models",
        "Direct citation-proof reference insertion in copy",
        "Structured quantitative statistical claims formatting",
        "Generative AI answering thresholds audits & context fit reports",
        "Semantic matching with long-tail conversive queries"
      ],
      metrics: "Average inclusion within ChatGPT & Perplexity citations is 3.4x higher."
    },
    consulting: {
      title: "Consulting & Competitive Strategy",
      subtitle: "Providing specialized support and roadmaps to direct internal teams.",
      features: [
        "Bespoke keyword difficulty & search-intent mapping",
        "Complete competitors programmatic authority audits",
        "Detailed 12-Month SEO execution roadmap reports",
        "Monthly Looker Studio monitoring & custom KPI trackers",
        "Ongoing algorithm update alert logs & advice reports"
      ],
      metrics: "Direct guidance that saves up to $15,000 monthly in agency overhead."
    }
  };

  const industriesServed = [
    { title: "Healthcare SEO", desc: "Optimize medical practices, clinics, and health systems safely under strict HIPAA-compliant authority standards." },
    { title: "Dental SEO", desc: "Attract permanent high-value patients locally with maps optimization and localized search ranking." },
    { title: "Real Estate SEO", desc: "Outrank massive portals by focusing on hyper-local neighborhoods and home listings metadata." },
    { title: "Ecommerce SEO", desc: "Grow organic transactional revenue by capturing commercial buyer intents and shopping queries." },
    { title: "Manufacturing SEO", desc: "Target complex B2B supply lines, high-value product sourcing queries, and global distributor networks." },
    { title: "SaaS SEO", desc: "Scale trial signups and monthly recurring revenue with programmatic keyword strategies and deep webinars." },
    { title: "Education SEO", desc: "Enroll students, drive academic program queries, and build scholarly domain relevance backlinks." },
    { title: "IoT SEO", desc: "Dominate early keywords in cutting-edge technology sectors to position your brand as the prime market authority." },
    { title: "Law Firm SEO", desc: "Secure highly commercial lead phone calls for competitive personal injury, corporate, or local legal services." }
  ];

  const processSteps = [
    { title: "01. Complete SEO Audit", detail: "We deploy Screaming Frog crawler, check your Core Web Vitals, audit your competitors, map out current keyword index metrics, and search for immediate crawl bottlenecks." },
    { title: "02. Strategy Roadmap", detail: "Our leads establish key commercial keywords, determine structural pages required to capture intent, and design a custom 12-month performance KPI roadmap." },
    { title: "03. Code & Technical Fixes", detail: "Our system integrates schema markup, removes internal redirection loops, implements fast canonical redirects, and resolves page loading spikes." },
    { title: "04. Content & Authority Growth", detail: "We create precise semantic copy, replace generic claims with exact statistics, and initiate high-relevance digital PR outreach campaigns to drive DA ratings." },
    { title: "05. Live Monitoring & Tracking", detail: "Track daily keyword variations, monitor organic search clicks, and benchmark your citation shares inside conversational AI search engines." },
    { title: "06. Growth Scaling & CRO", detail: "We study page dropoff rates, optimize headlines, and scale top-performing pages to maximize direct lead captures and customer calls." }
  ];

  const packageList = [
    {
      name: "Starter Performance Suite",
      price: packagePeriod === 'monthly' ? "$1,250" : "$950",
      ideal: "Ideal for growing local brands & specialized startups",
      features: [
        "Up to 25 Target Commercial Keywords",
        "Full Technical Audit & Core Web Vitals Checklist",
        "Basic JSON-LD Schema Integration",
        "4 High-Relevance Context Content Pillars per month",
        "Local SEO GMB Map Optimization Check",
        "Standard Monthly Traffic & Rank Tracking Reports",
        "Direct email & chat support within 24 hours"
      ]
    },
    {
      name: "Accelerated Growth Engine",
      price: packagePeriod === 'monthly' ? "$2,850" : "$2,350",
      ideal: "Highly recommended for scaling SaaS, Ecommerce & B2B brands",
      popular: true,
      features: [
        "Up to 75 Commercial Keyword Clusters",
        "Advanced Technical Execution & Structural Optimization",
        "Full Nested Corporate Entity Organization Graph",
        "10 SEO-optimized Semantic Copy Blocks per month",
        "High-Authority Backlink Outreaches & Digital PR (3/mo)",
        "Weekly Automated Rank Tracking & Competitors Audits",
        "Monthly Looker Studio Dashboard Setup",
        "AI SEO & GEO Evaluation citation reviews"
      ]
    },
    {
      name: "Global Enterprise Strategy",
      price: "Custom Pricing",
      ideal: "Designed for massive tech companies, multi-location brands & SaaS",
      features: [
        "Unlimited Keyword Clusters & Programmatic Matrices",
        "Ongoing server log audits & headless CMS support",
        "Multi-lingual & Worldwide Hreflang Configuration",
        "Custom programmatic schema graphs & dynamic templates",
        "Premium White-hat editorial campaigns & PR acquisitions",
        "Live Dedicated Slack channel & Senior Lead consultation",
        "Enterprise-grade conversion rate optimization split tests"
      ]
    }
  ];

  // Dynamic Google / Search Engine simulation preview widget
  const [googleTitle, setGoogleTitle] = useState('AKGLS Group SEO Review - Rank in Google & AI Seaches');

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen">
      
      {/* 🚀 FLOAT PANEL BAR FOR HIGH CONVERSION */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
        >
          <MessageSquareFill /> Connect WhatsApp: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-orange-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-orange-500/20 transition-all font-mono"
        >
          <Phone className="w-4 h-4 text-white animate-bounce" /> Hot Call: {CONTACT_NUMBER}
        </a>
      </div>

      {/* 🎨 HERO BLOCK FOR MASSIVE CONVERSION OR COMPELLING COPY */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full py-2 px-5 transition-colors"
          >
            ← Back to Main Page
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts Description */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-display">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-spin" />
                <span>Next-Generation Organic Performance Strategy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight">
                Result-Driven SEO Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                  That Grow Traffic, <br />Leads & Revenue.
                </span>
              </h1>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                AI-powered SEO strategies designed to improve Google rankings, Google Maps visibility, organic clicks, and conversational AI citation shares.
              </p>

              {/* USP Checklist Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>10+ Years Enterprise Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Transparent Looker Studio Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Elite AI-Powered SEO Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Strict ROI-Focused Campaigns</span>
                </div>
              </div>

              {/* Call-to-Actions for Lead Generation */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="#free-audit-portal"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Get Free SEO Audit <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-indigo" /> Book Strategy Call
                </a>
              </div>

            </div>

            {/* Right Side: Interactive SEO Mock Dashboard Widget */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-800 shadow-2xl text-left relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-4">
                  <div className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-400">LIVE COGNITIVE SEO MONITOR</span>
                  </div>
                  <span className="text-[9px] bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 rounded px-2 py-0.5 font-bold uppercase tracking-widest leading-none">
                    ROI PANEL
                  </span>
                </div>

                <div className="space-y-4">
                  
                  {/* Metric Box */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-1">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Estimated Organic Monthly Revenue</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black font-display text-white">$148,250</span>
                      <span className="text-xs text-brand-teal font-extrabold font-mono flex items-center gap-0.5">
                        ▲ 310%
                      </span>
                    </div>
                  </div>

                  {/* SVG Custom Interactive Graph representation */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono text-slate-500 font-extrabold tracking-wider">SEO Visibility Graph (Projected Monthly Lift)</span>
                    <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-850 h-32 flex items-end justify-between relative overflow-hidden">
                      {/* Interactive Graph Data Bars */}
                      <div className="w-[12%] bg-slate-900 group relative cursor-pointer" style={{ height: '24%' }}>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-800 rounded p-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">24k</div>
                        <div className="absolute inset-0 bg-brand-purple/20"></div>
                      </div>
                      <div className="w-[12%] bg-slate-900 group relative cursor-pointer" style={{ height: '36%' }}>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-800 rounded p-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">36k</div>
                        <div className="absolute inset-x-0 bottom-0 bg-brand-purple/35 rounded-t-sm"></div>
                      </div>
                      <div className="w-[12%] bg-slate-900 group relative cursor-pointer" style={{ height: '48%' }}>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-800 rounded p-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">48k</div>
                        <div className="absolute inset-x-0 bottom-0 bg-brand-indigo/40 rounded-t-sm"></div>
                      </div>
                      <div className="w-[12%] bg-slate-900 group relative cursor-pointer" style={{ height: '62%' }}>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-800 rounded p-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">62k</div>
                        <div className="absolute inset-x-0 bottom-0 bg-brand-indigo/55 rounded-t-sm"></div>
                      </div>
                      <div className="w-[12%] bg-slate-900 group relative cursor-pointer" style={{ height: '78%' }}>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-800 rounded p-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">78k</div>
                        <div className="absolute inset-x-0 bottom-0 bg-brand-teal/50 rounded-t-sm"></div>
                      </div>
                      <div className="w-[12%] bg-slate-900 group relative cursor-pointer" style={{ height: '94%' }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-800 rounded p-1 text-[9px] z-10 text-white font-extrabold whitespace-nowrap">Goal MET</div>
                        <div className="absolute inset-x-0 bottom-0 bg-brand-teal/85 rounded-t-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Simulated mini active tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-1 text-[9.5px] font-mono font-bold">
                    <span className="py-0.5 px-2 bg-slate-950 border border-slate-850 rounded text-emerald-400">Google Rank #1</span>
                    <span className="py-0.5 px-2 bg-slate-950 border border-slate-850 rounded text-indigo-400">Maps Top 3</span>
                    <span className="py-0.5 px-2 bg-slate-950 border border-slate-850 rounded text-purple-400">AI Citation 94%</span>
                  </div>

                  <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                    *Graph displays projected trajectory optimized with advanced Technical and Entity Schema structures over 6 months implementation timelines.
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND METRICS COUNTER SECTION */}
      <section className="py-12 md:py-16 bg-[#0a0f1d] border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest font-mono">AUTHORIZED CREDENTIALS & TRUST CERTIFICATIONS</span>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80 pt-2">
              <span className="text-sm font-black text-slate-400 font-display">GOOGLE PARTNER 2026</span>
              <span className="text-sm font-black text-slate-400 font-display">SEMRUSH AGENCY PARTNER</span>
              <span className="text-sm font-black text-slate-400 font-display">AHREFS CERTIFIED SPECIALISTS</span>
              <span className="text-sm font-black text-slate-400 font-display">LOOKER CERTIFIED ENGINEER</span>
            </div>
          </div>

          {/* Counters Grid with modern grid values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-850 text-left">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <div className="text-3xl font-black text-white font-display">480+</div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">PROJECTS INGESTED & COMPLETED</div>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <div className="text-3xl font-black text-brand-orange font-display">18,500+</div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">COMMERCIAL TERMS RANKED #1</div>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <div className="text-3xl font-black text-white font-display">2.5M+</div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">ORGANIC CLICKS GENERATED LIFT</div>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <div className="text-3xl font-black text-brand-teal font-display">45+</div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">GLOBAL INDUSTRIES SCALE PORTED</div>
            </div>
          </div>

        </div>
      </section>

      {/* 🔦 WHAT IS SEO & FUNNEL VISUALIZATION */}
      <section className="py-20 md:py-28 bg-[#05070a] text-left border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[10px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1 rounded-full border border-brand-orange/20">
                SEO DEFINED FOR 2026
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                What are Professional <br />SEO Services?
              </h2>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Search Engine Optimization is not a simple game of writing articles and waiting for Google. Today, optimization is a full-stack, algorithmic discipline. It maps structured business entities cleanly so traditional crawlers AND new AI Answers models identify your website as the definitive source.
              </p>
              <div className="space-y-4 font-sans text-xs text-slate-300">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 flex gap-3">
                  <Globe className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white text-xs mb-1">Traditional Organic Trajectories</h4>
                    <p className="text-slate-400 font-light leading-relaxed">Google webcrawler bot indexes canonical domains, generating keywords and SERP placements.</p>
                  </div>
                </div>
                <div className="p-4 bg-[#0a0f1d] rounded-xl border border-slate-850 flex gap-3">
                  <Bot className="w-5 h-5 text-brand-indigo shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white text-xs mb-1">Modern AI Retrieval Engine (GEO / AEO)</h4>
                    <p className="text-slate-400 font-light leading-relaxed">Generative AI Scrapers scan entity associations, placing citations inside converted conversational answers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Search Funnel Map Infographic */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-6">
                <h3 className="text-sm font-bold tracking-wider font-mono text-white flex items-center gap-1.5 pb-2.5 border-b border-slate-900">
                  <Activity className="w-4 h-4 text-brand-teal" /> Organic Value Conversion Journey
                </h3>

                <div className="space-y-3 font-mono text-[10.5px]">
                  {/* Funnel Step 1 */}
                  <div className="relative p-3.5 bg-brand-indigo/10 border border-brand-indigo/35 rounded-xl flex items-center justify-between">
                    <span>1. TECHNICAL ENTITY CAPTURE</span>
                    <span className="text-brand-indigo uppercase font-bold text-[9px] bg-brand-indigo/20 py-0.5 px-2 rounded">
                      Payload Indexed
                    </span>
                  </div>
                  <div className="text-center text-slate-600 text-[10px]">▼</div>
                  {/* Funnel Step 2 */}
                  <div className="relative p-3.5 bg-[#0a0f1d] border border-slate-850 rounded-xl flex items-center justify-between">
                    <span>2. TOPICAL GRAPH TRUST MATCHING</span>
                    <span className="text-brand-orange uppercase font-bold text-[9px] bg-brand-orange/20 py-0.5 px-2 rounded">
                      Citations Map Active
                    </span>
                  </div>
                  <div className="text-center text-slate-600 text-[10px]">▼</div>
                  {/* Funnel Step 3 */}
                  <div className="relative p-3.5 bg-brand-teal/10 border border-brand-teal/35 rounded-xl flex items-center justify-between">
                    <span>3. COMMERCIAL VISITOR ENGAGEMENT & REVENUE</span>
                    <span className="text-brand-teal uppercase font-bold text-[9px] bg-brand-teal/20 py-0.5 px-2 rounded">
                      Lead Captured
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ COMPLETE SEO SERVICES GRID */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest bg-brand-indigo/10 border border-brand-indigo/25 px-4 py-1.5 rounded-full">
              SERVICE PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Complete SEO Services We Deploy
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Explore the exact technical execution buckets our experienced agency implements to scale your brand across search.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Tabs Selector list */}
            <div className="lg:col-span-4 space-y-2">
              {Object.keys(servicesData).map((key) => {
                const service = servicesData[key as keyof typeof servicesData];
                const isActive = activeServiceTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveServiceTab(key)}
                    className={`w-full p-4 rounded-xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-brand-orange text-white border-brand-orange' 
                        : 'bg-[#0c121e] border-slate-850 hover:border-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-wider">{service.title}</span>
                    {key === 'aiseo' && (
                      <span className="text-[8px] bg-brand-purple border border-brand-purple/20 text-white font-bold py-0.5 px-2 rounded-full">
                        TRENDING
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Tab content render panel */}
            <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-850 p-6 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-white text-xl md:text-2xl font-black font-display">
                      {servicesData[activeServiceTab as keyof typeof servicesData].title}
                    </h3>
                    <p className="text-brand-orange font-mono text-xs">
                      {servicesData[activeServiceTab as keyof typeof servicesData].subtitle}
                    </p>
                  </div>

                  {/* Bullet features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {servicesData[activeServiceTab as keyof typeof servicesData].features.map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-slate-300">
                        <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics proof box */}
                  <div className="p-3 bg-[#0c121e] border border-slate-850 rounded-xl">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase font-mono block">DELIVERED METRICS INDEX</span>
                    <span className="text-xs font-bold text-white font-display">
                      {servicesData[activeServiceTab as keyof typeof servicesData].metrics}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

              <div className="pt-6 border-t border-slate-900 mt-6 flex justify-end">
                <a 
                  href={`${WHATSAPP_LINK}?text=I%20want%20to%20consult%20on%20${servicesData[activeServiceTab as keyof typeof servicesData].title}.%20Please%20share%20proposal.`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-brand-indigo hover:opacity-95 text-white py-2.5 px-5 rounded-lg text-xs font-bold uppercase transition-all tracking-wider flex items-center gap-1.5"
                >
                  Get Consultation Propose <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 💼 INDUSTRIES WE SERVE GRID */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/10 px-4 py-1 border border-brand-orange/15 rounded-full">
              VERTICAL RELEVANCY INDEX
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              SEO Solutions for Every Industry
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We engineer industry-specific schema templates and intent dictionaries that comply with distinct compliance requirements or regional algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesServed.map((ind, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 hover:border-brand-indigo/30 transition-all rounded-2xl p-5 space-y-3">
                <span className="text-[10px] text-brand-teal font-mono font-bold uppercase tracking-widest">
                  SPECIALIZED SUITE
                </span>
                <h3 className="text-base text-white font-black font-display">
                  {ind.title}
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Request Strategy Section for Industries */}
          <div className="p-6 md:p-8 bg-[#0a0f1d] border border-slate-850 rounded-3xl mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-lg">
              <h3 className="text-white text-lg font-black font-display">
                Need an industry-specific organic strategy matrix?
              </h3>
              <p className="text-slate-400 text-xs font-light">
                Configure your industry segment and our lead vertical engineers will export a tailored programmatic template checklist raw to your email.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <select 
                value={industryStrategyType}
                onChange={(e) => setIndustryStrategyType(e.target.value)}
                className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl p-3.5 focus:border-brand-indigo focus:outline-none"
              >
                <option value="SaaS SEO">SaaS Performance Playbook</option>
                <option value="Healthcare SEO">Healthcare HIPAA Playbook</option>
                <option value="Ecommerce SEO">Ecommerce Product Flow Map</option>
                <option value="Dental SEO">Dental Maps GMB Playbook</option>
              </select>

              <button
                onClick={() => setIndustrySubmitted(true)}
                className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all"
              >
                {industrySubmitted ? "Playbook Request Queued!" : "Get Specific Roadmap →"}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 🧬 STEP-BY-STEP FLOW TIMELINE MAP */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              SYSTEMATIC DELIVERY WORKFLOW
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Our 6-Step SEO Performance Process
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We execute a granular workflow built to ensure no technical gap, redirection loop or schema indexing issue goes unresolved.
            </p>
          </div>

          {/* Interactive Process steps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-2">
              {processSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setProcessStep(idx)}
                  className={`w-full p-4 rounded-2xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                    processStep === idx 
                      ? 'bg-brand-indigo text-white border-brand-indigo shadow-lg' 
                      : 'bg-[#0c121e] border-slate-850 text-slate-400 hover:border-slate-800'
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-wider">{step.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Right Display output card */}
            <div className="lg:col-span-7 bg-slate-950 p-6 md:p-8 border border-slate-850 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] text-brand-teal font-mono uppercase font-bold tracking-widest border-b border-slate-900 pb-1.5 block">
                  EXECUTION BLUEPRINT DETAILS
                </span>
                <h3 className="text-2xl font-black text-white font-display">
                  {processSteps[processStep].title}
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {processSteps[processStep].detail}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-900 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] text-slate-500 font-mono font-bold uppercase">
                  Timeframe: Daily status logs updated
                </span>
                <a 
                  href={`${WHATSAPP_LINK}?text=I%20am%20exploring%20your%20SEO%20process%20at%20Step%20${processStep+1}.%20Let%27s%20discuss%20audit.`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg text-center"
                >
                  Query Our Lead Strategist Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 CASE STUDIES REPRESENTATION */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1 rounded-full">
              PROVEN RESULTS ONLY
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Real Performance ROI Case Studies
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Explore actual statistics demonstrating ranking gains, traffic multipliers and lead conversion lifts from active contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study Card 1 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 shadow-xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] bg-brand-indigo/15 border border-brand-indigo/35 text-indigo-300 px-2 py-0.5 rounded font-mono font-bold uppercase">
                    B2B CLOUD CO. • SaaS
                  </span>
                  <span className="text-[9.5px] text-slate-500 font-mono font-bold">Q1 2026 AUDIT COMPLETED</span>
                </div>
                <h3 className="text-lg text-white font-black font-display leading-tight">
                  310% Keyword Index Increase and $12k Ad Capital Saved Monthly
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  <strong>Challenge:</strong> Generic duplicate content blogs caused ranking stagnation, while manual Core Web Vitals script payload errors blocked mobile crawler budgets.
                  <br />
                  <strong>Strategy:</strong> Cleaned sitemap canonical loops, embedded structured relational JSON-LD graphs linking founders to product schemas, and re-clustered keyword anchors into thematic trees.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-850 flex pt-4 justify-between items-center bg-slate-950/40 p-3 rounded-xl">
                <div>
                  <span className="text-[9px] text-slate-400 block font-mono font-extrabold pb-0.5">ORGANIC TRAFFIC INCREMENT</span>
                  <span className="text-xl font-mono font-black text-brand-teal leading-none">+140,000/mo</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-mono font-extrabold pb-0.5">LEAD INTAKE CPL REDUCTION</span>
                  <span className="text-xl font-mono font-black text-brand-teal leading-none">-55% Costs</span>
                </div>
              </div>
            </div>

            {/* Case Study Card 2 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] bg-brand-purple/15 border border-brand-purple/35 text-purple-300 px-2 py-0.5 rounded font-mono font-bold uppercase">
                    APEX WEAR • E-COMMERCE
                  </span>
                  <span className="text-[9.5px] text-slate-500 font-mono font-bold">2026 TRANSIT COMPLETED</span>
                </div>
                <h3 className="text-lg text-white font-black font-display leading-tight">
                  Shopify Plus Cart Speed Lift generates over 42% Conversion Rates Offset
                </h3>
                <p className="text-[#94a3b8] text-xs font-light leading-relaxed">
                  <strong>Challenge:</strong> Product review markup structures were broken, leaving zero star snipped previews on organic search results and dropping mobile buyer retention.
                  <br />
                  <strong>Strategy:</strong> Restructured collection page tags, integrated Schema review arrays dynamically, and configured next-gen AVIF asset caching pipelines.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-850 flex pt-4 justify-between items-center bg-slate-950/40 p-3 rounded-xl">
                <div>
                  <span className="text-[9px] text-slate-400 block font-mono font-extrabold pb-0.5">PRODUCT COLLECTION CLICKS LIFT</span>
                  <span className="text-xl font-mono font-black text-brand-orange leading-none">+112% Organic</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-mono font-extrabold pb-0.5">CONVERSION LIFT ACHIEVED</span>
                  <span className="text-xl font-mono font-black text-brand-orange leading-none">+42.5% Gains</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🌐 SEO TOOLS & TECHNOLOGIES STACK */}
      <section className="py-16 md:py-24 bg-[#0a0f1d] border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-[10.5px] text-slate-500 font-mono font-bold uppercase tracking-widest block">
              OUR INTERNAL TECH STACK DEPLOYED ON CAMPAIGNS
            </span>
            <h3 className="text-white text-2xl font-black font-display text-center">
              A-Grade Optimization Toolkits
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {['Screaming Frog', 'Ahrefs Enterprise', 'SEMrush Advisor', 'Google Analytics-4', 'Looker Studio dashboards', 'ChatGPT-4 Pro Agents', 'Google Search Console', 'Google Tag Manager', 'Surfer SEO Context', 'Gemini Retrieval Model'].map((tool, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 p-4 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤖 FUTURE-READY AI SEO VS TRADITIONAL SEO HIGHLIGHT */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10.5px] text-brand-indigo font-mono font-bold uppercase tracking-widest bg-brand-indigo/10 px-4 py-1 rounded-full border border-brand-indigo/20">
              ALGORITHMIC TRANSITION
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Traditional SEO vs Future AI SEO
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Standard backlinks and generic blogs fail to trigger references in conversion search prompts. Study the direct divergence:
            </p>
          </div>

          {/* Toggle comparison view mode */}
          <div className="flex justify-center gap-3 mb-8">
            <button 
              onClick={() => setCompareView('table')}
              className={`py-2 px-5 rounded-lg text-xs font-bold font-mono tracking-wider transition-all uppercase ${
                compareView === 'table' ? 'bg-brand-orange text-white' : 'bg-[#0c121e] border border-slate-850 text-slate-400'
              }`}
            >
              Structured Table Comparison
            </button>
            <button 
              onClick={() => setCompareView('cards')}
              className={`py-2 px-5 rounded-lg text-xs font-bold font-mono tracking-wider transition-all uppercase ${
                compareView === 'cards' ? 'bg-brand-orange text-white' : 'bg-[#0c121e] border border-slate-850 text-slate-400'
              }`}
            >
              Side-By-Side Cards view
            </button>
          </div>

          <div>
            {compareView === 'table' ? (
              <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-[#0c121e] text-xs font-sans text-left">
                <table className="w-full text-slate-300">
                  <thead>
                    <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-mono font-bold text-[10px] uppercase tracking-wider">
                      <th className="p-4">ANALYSIS TARGET</th>
                      <th className="p-4 text-brand-orange">TRADITIONAL CLIENT SEO</th>
                      <th className="p-4 text-brand-teal">AKGLS DYNAMIC AI SEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    <tr>
                      <td className="p-4 font-bold text-white">Target Algorithm Engine:</td>
                      <td className="p-4">Google RankBrain / Penguin / SpamBrain directory index systems.</td>
                      <td className="p-4 bg-brand-teal/5">Conversational Neural Engines (Claude, ChatGPT Search, Gemini Grounding).</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white">Copy Writing Strategy:</td>
                      <td className="p-4">Generative content block pages stuffed with static commercial phrase matches.</td>
                      <td className="p-4 bg-brand-teal/5">Factual statistical arrays, nested table objects, and markdown lists LLMs capture easily.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white">Metadata Formats Required:</td>
                      <td className="p-4">Simple raw Meta tags, standard header hierarchies, basic XML sitemaps.</td>
                      <td className="p-4 bg-brand-teal/5">Highly nested relational Organization & Product JSON-LD graph scripts.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white">Performance Verification:</td>
                      <td className="p-4">Total Google organic position index, generic impressions & bulk keywords volume.</td>
                      <td className="p-4 bg-brand-teal/5">LLM Citation inclusion rates, conversion organic leads counts, active GMB calls.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Traditional Card */}
                <div className="bg-[#0c121e] rounded-3xl p-6 border border-rose-950/40 space-y-4">
                  <h3 className="text-rose-400 text-base font-black font-display flex items-center gap-1.5 border-b border-slate-850 pb-2">
                    <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" /> Traditional SEO Methodology
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    Most standard companies rely solely on bulk articles writing loaded with repeating keywords. While this may register search volume, search model scrapers parse them as low-value noise and eliminate them from conversation citations.
                  </p>
                </div>

                {/* AI / GEO Card */}
                <div className="bg-[#0c121e] rounded-3xl p-6 border border-emerald-950/40 space-y-4">
                  <h3 className="text-brand-teal text-base font-black font-display flex items-center gap-1.5 border-b border-slate-850 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Future-Ready AI SEO Services
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    We deploy algorithmic content optimization frameworks. Our system maps exact statistic, citation anchors and entity tables to ensure your brand displays as the top recommended partner when conversational bots answer high-intent buying questions.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 📦 FLEXIBLE SEO PACKAGES PLAN BOARD */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest">
              PRICING FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Flexible SEO Performance Suites
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Choose an ideal execution scale to dominate search ranking directories. No long-term contracts. Transparent Looker dashboards.
            </p>

            <div className="flex justify-center items-center gap-3 pt-4">
              <button 
                onClick={() => setPackagePeriod('monthly')}
                className={`py-1.5 px-4 rounded-lg text-xs font-mono font-bold transition-all ${
                  packagePeriod === 'monthly' ? 'bg-brand-indigo text-white' : 'bg-slate-950 text-slate-500 hover:text-white'
                }`}
              >
                Monthly Retainer Setup
              </button>
              <button 
                onClick={() => setPackagePeriod('yearly')}
                className={`py-1.5 px-4 rounded-lg text-xs font-mono font-bold transition-all ${
                  packagePeriod === 'yearly' ? 'bg-brand-indigo text-white' : 'bg-slate-950 text-slate-500 hover:text-white'
                }`}
              >
                Annual Dynamic (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packageList.map((plan, idx) => (
              <div 
                key={idx}
                className={`flex flex-col justify-between rounded-3xl p-6 border transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-[#0e172a] to-[#0c121e] border-brand-orange shadow-2xl relative' 
                    : 'bg-[#0c121e] border-slate-850 hover:border-slate-800'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-black uppercase tracking-widest py-1 px-3 rounded-full shadow">
                    AGENCY RECOMMENDATION
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-white text-lg font-black font-display">{plan.name}</h3>
                    <p className="text-[11px] text-slate-400 font-light pt-1">{plan.ideal}</p>
                  </div>

                  <div className="py-4 border-y border-slate-850/80 my-4 flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-white font-display">{plan.price}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">/ monthly setup fee</span>
                  </div>

                  <div className="space-y-2 text-xs font-semibold">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-slate-300 font-light leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-850/80 mt-6">
                  <a 
                    href={`${WHATSAPP_LINK}?text=I%20am%20requesting%20the%20${plan.name}%20for%20my%20domain.`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full bg-brand-indigo hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center block transition-all"
                  >
                    Request Proposal Setup
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🤝 CLIENT SUCCESS TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-bold uppercase tracking-widest">
              APPROVED ENDORSEMENTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              What Our Clients Say
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Review direct verification reviews highlighting ranking changes and monthly lead pipelines scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#0c121e] p-6 rounded-2xl border border-slate-850 space-y-4 flex flex-col justify-between">
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                "Our Google Map pack ranking was completely non-existent inside competitive geographic locations. AKGLS restructured our map attributes and citation schemas. In less than 4 weeks, our patient calls jumped by over 140%!"
              </p>
              <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-white">Dr. Sarah Miller</h4>
                  <p className="text-[10px] text-slate-500 font-mono">Specialized Dental Group</p>
                </div>
                <div className="flex gap-0.5">
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                </div>
              </div>
            </div>

            <div className="bg-[#0c121e] p-6 rounded-2xl border border-slate-850 space-y-4 flex flex-col justify-between">
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                "Implementing the AI Content optimization framework and nested Relational schema graphs saved our in-house copy team from low-value article creation. We now index as a Top-10 B2B enterprise globally in ChatGPT Search queries!"
              </p>
              <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-white">Marcus Vance</h4>
                  <p className="text-[10px] text-slate-500 font-mono">SaaSify Growth Platforms</p>
                </div>
                <div className="flex gap-0.5">
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                </div>
              </div>
            </div>

            <div className="bg-[#0c121e] p-6 rounded-2xl border border-slate-850 space-y-4 flex flex-col justify-between">
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                "We operate an online catalog with over 50,000 active SKUs. Technical redirect loops had decimated our crawler budget. AKGLS mapped sitemaps loops and optimized Core Web Vitals instantly. Shopify revenue grew by over $42,000 monthly!"
              </p>
              <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-white">Jessica Chen</h4>
                  <p className="text-[10px] text-slate-500 font-mono">Apex Wear Apparel</p>
                </div>
                <div className="flex gap-0.5">
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🙋 FAQ ACCORDION */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10.5px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4 py-1 rounded-full border border-brand-orange/10">
              COMMONLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Search & AI Optimization Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How long does professional SEO take to display rankings?",
                a: "For older existing websites, technical schema and loading speed corrections generate index shifts inside 14-30 days. For new domains seeking high-intent commercial terms, content authority pipelines take 3 to 6 months to establish permanent domain rating foundations."
              },
              {
                q: "Is SEO better for business growth than PPC Ads?",
                a: "PPC is excellent for immediate lead ingestion, but costs rise continuously. SEO represents an asset that scales organically; average acquisition costs reduce by over 48% when organic domains captures the majority of keyword clicks."
              },
              {
                q: "What is GEO / AI Search Optimization?",
                a: "Generative Engine Optimization (GEO) involves preparing structure metadata so next-gen conversation engines select your domain as the primary source when generating conversational answers or recommended listings."
              },
              {
                q: "Do you supply Looker monthly performance reports?",
                a: "Yes. Every client portal links directly to live-updating Looker Studio dashboards tracking keywords, Google crawler errors, organic click trends and direct lead calls."
              },
              {
                q: "Will you configure maps local Citations directly?",
                a: "Yes. Our services provide direct Google Business Profile setup, local map pack geolocation coordinates optimization and clean directories citation sync."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-[#0c121e] border border-slate-850 rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wide">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="p-5 pt-0 text-slate-400 text-xs font-light leading-relaxed border-t border-slate-900/40">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 📬 FREE SEO AUDIT LEAD GENERATION SECTION */}
      <section id="free-audit-portal" className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900/60 text-left scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1 rounded-full">
              FREE SECURED AUDIT TOOL
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Get Your Free Custom SEO Audit
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Submit your domain parameters to get a detailed technical performance list outlining crawler errors, index opportunities, and speed audits.
            </p>
          </div>

          <div className="bg-[#0c121e] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            {auditSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-brand-teal/15 border border-brand-teal/35 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-8 h-8 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white font-display">Performance Audit Requested!</h3>
                  <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
                    Our lead organic optimization engineer will compile a comprehensive Looker speed and index performance audit and send it back to "{auditForm.email}" within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <a 
                    href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
                    className="w-full sm:w-auto px-6 py-3 bg-brand-indigo text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-opacity-95 text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Consult Immediately: {CONTACT_NUMBER}
                  </a>
                  <a 
                    href={`${WHATSAPP_LINK}?text=Hi%20AKGLS,%20I%20just%20submitted%20the%20Free%20SEO%20Audit%20for%20my%20domain%20called%20${auditForm.website}.%20Please%20accelerate.`}
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl google-emerald hover:bg-emerald-500 text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquareFill /> Accelerate via WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-6 text-xs font-semibold">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Contact Name:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={auditForm.name}
                      onChange={(e) => setAuditForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                  {/* Website */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Primary Website URL:</label>
                    <input 
                      type="url" 
                      required
                      placeholder="https://mybrand.com"
                      value={auditForm.website}
                      onChange={(e) => setAuditForm(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Business Email Address:</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@mybrand.com"
                      value={auditForm.email}
                      onChange={(e) => setAuditForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Direct Phone / WhatsApp Number:</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 831 811 4492"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                </div>

                {/* Free audit elements summary details */}
                <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-2xl">
                  <span className="text-[10px] text-brand-teal font-mono uppercase font-bold tracking-widest block pb-1.5">Your Technical SEO Audit Will Contain:</span>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 font-light">
                    <span>✔ Sitemaps and index loops map.</span>
                    <span>✔ Mobile Core Web Vitals loading metrics.</span>
                    <span>✔ Core Schema graph alignment indices list.</span>
                    <span>✔ Top Competitors organic citation footprint gaps.</span>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-opacity-95 text-white py-4 px-6 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow duration-200"
                >
                  <Send className="w-4 h-4 text-white" /> Compile Free Domain Audit Report →
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 📰 LATEST SEO INSIGHTS AND BLOGS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10.5px] text-brand-teal font-mono font-bold uppercase tracking-widest bg-brand-teal/10 px-4 py-1 rounded-full border border-brand-teal/20">
              LEARNING CENTER
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Latest SEO & organic Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#0c121e] rounded-2xl overflow-hidden border border-slate-850 space-y-4">
              <div className="h-40 bg-slate-950 p-4 flex flex-col justify-between font-mono">
                <span className="text-[9px] bg-brand-indigo/15 border border-brand-indigo/35 text-indigo-300 py-0.5 px-2 rounded-full font-bold uppercase inline-block">
                  ALGORITHM TRACKING
                </span>
                <span className="text-[9.5px] text-slate-500 font-bold">UPDATED MAY 2026</span>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="text-slate-200 text-sm font-black font-display hover:text-brand-orange cursor-pointer transition-colors leading-tight">
                  The Future of Organic Search: How Generative Engines are Altering the SEO Landscape
                </h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Study the specific divergence of conversational LLM scrapers vs classical keyword ranking page directories.
                </p>
              </div>
            </div>

            <div className="bg-[#0c121e] rounded-2xl overflow-hidden border border-slate-850 space-y-4">
              <div className="h-40 bg-slate-950 p-4 flex flex-col justify-between font-mono">
                <span className="text-[9px] bg-brand-teal/15 border border-brand-teal/35 text-teal-300 py-0.5 px-2 rounded-full font-bold uppercase inline-block">
                  TECHNICAL BLUEPRINT
                </span>
                <span className="text-[9.5px] text-slate-500 font-bold font-mono">PUBLISHED 2026</span>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="text-slate-200 text-sm font-black font-display hover:text-brand-orange cursor-pointer transition-colors leading-tight">
                  The Complete GEO Implementation Checklist: Citation-Proof Your Domain Assets Next-Gen Style
                </h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Step-by-step guidance on structuring statistical copy and nested sitemaps arrays so AI engines fetch your references.
                </p>
              </div>
            </div>

            <div className="bg-[#0c121e] rounded-2xl overflow-hidden border border-slate-850 space-y-4">
              <div className="h-40 bg-slate-950 p-4 flex flex-col justify-between font-mono">
                <span className="text-[9px] bg-brand-orange/15 border border-brand-orange/35 text-brand-orange py-0.5 px-2 rounded-full font-bold uppercase inline-block font-mono">
                  MAPS RANKING
                </span>
                <span className="text-[9.5px] text-slate-500 font-bold">RE-ESTABLISHED 2026</span>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="text-slate-200 text-sm font-black font-display hover:text-brand-orange cursor-pointer transition-colors leading-tight">
                  Hyperlocal Map Citations Tactics: Outranking Large Corporate Portals on Geolocation Queries
                </h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  How map attributes and verified review acquisitions loops outrank generic high Domain Rating publications locally.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 SERVICE SCHEMA GRAPH GENERATOR SNIPPET FOR SEO RANKING */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-3.5 py-1 rounded-full">
                TECHNICAL VALIDATION SUITE
              </span>
              <h3 className="text-white text-3xl font-black font-display leading-tight">
                Recommended Professional SEO Schema Markup
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Provide search engine optimization entities cleanly directly to bots. Copy this pre-validated JSON-LD Service schema markup block to citation-proof your services page.
              </p>
              
              <button
                onClick={handleCopySchema}
                className="inline-flex items-center gap-2 py-3 px-6 bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-xs uppercase rounded-xl tracking-wider transition-all shadow"
              >
                {schemaCopied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Schema Code Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy Professional Service Schema LD
                  </>
                )}
              </button>
            </div>

            <div className="lg:col-span-6 bg-slate-950 border border-slate-850 p-5 rounded-3xl relative">
              <div className="flex items-center justify-between border-b border-slate-850 pb-2.5 mb-3 font-mono text-[10px]">
                <span className="text-slate-400">service-schema-markup.jsonld</span>
                <span className="text-brand-teal uppercase font-bold">Schema org service class</span>
              </div>
              <div className="bg-black/80 rounded-xl p-4 border border-slate-900 max-h-[250px] overflow-y-auto font-mono text-[10px] text-brand-teal/90 leading-relaxed">
                <pre>{serviceSchemaCode}</pre>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📋 FINAL HERO CONVERSION CALL AND TRUST */}
      <section className="py-20 bg-gradient-to-r from-brand-indigo/15 to-[#05070a] border-b border-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black text-white font-display leading-[1.08] tracking-tight">
            Ready to Grow Your <br />Organic Traffic & Leads?
          </h2>
          <p className="text-slate-400 text-sm font-light max-w-lg mx-auto leading-relaxed">
            Configure organic traffic growth arrays and maps citation pipelines with a certified partner. No long retainer contracts required.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
              className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-white" /> Call Direct: {CONTACT_NUMBER}
            </a>
            
            <a 
              href={`${WHATSAPP_LINK}?text=Hello%20AKGLS%20Group,%20I%20want%20to%20get%20started%20with%20your%2520SEO%20Services.`}
              target="_blank" 
              referrerPolicy="no-referrer"
              className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2"
            >
              <MessageSquareFill /> WhatsApp: {CONTACT_NUMBER}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10.5px] font-mono font-bold text-slate-500 uppercase tracking-widest pt-4">
            <span>✔ Transparent Campaign Pricing</span>
            <span>✔ Dedicated Google Certified strategists</span>
            <span>✔ No binding multi-year obligations</span>
          </div>

        </div>
      </section>

    </div>
  );
}

// Simple Helper Component for Fill WhatsApp icon representation
function MessageSquareFill() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

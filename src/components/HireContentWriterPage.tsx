import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, 
  MessageSquare, Smartphone, TrendingUp, Coins, Copy, CheckSquare
} from 'lucide-react';

interface HireContentWriterPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function HireContentWriterPage({ onBackToHome, openProposalForm }: HireContentWriterPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hire Content Writer | SEO Content Writing Services | AKGLS Group";
    
    // Add meta description dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : "";
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Hire professional content writers from AKGLS Group for SEO content, AI SEO writing, blogs, website content, technical writing, ecommerce content & conversion-focused copywriting.');

    return () => {
      document.title = originalTitle;
      if (metaDesc) {
        if (originalDesc) {
          metaDesc.setAttribute('content', originalDesc);
        } else {
          metaDesc.remove();
        }
      }
    };
  }, []);

  // Sticky CTA visible on scroll
  const [showStickyCta, setShowStickyCta] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // State management
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // ROI Calculator state
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(10000);
  const [conversionRate, setConversionRate] = useState<number>(2.5); // 2.5%
  const [avgLeadValue, setAvgLeadValue] = useState<number>(300); // $300
  const [trafficMultiplier, setTrafficMultiplier] = useState<number>(3); // 3x lift

  const currentConversions = Math.round((monthlyTraffic * conversionRate) / 100);
  const currentLeadRevenue = currentConversions * avgLeadValue;

  const projectedTraffic = monthlyTraffic * trafficMultiplier;
  const projectedConversions = Math.round((projectedTraffic * conversionRate) / 100);
  const projectedLeadRevenue = projectedConversions * avgLeadValue;

  const revenueNetLift = projectedLeadRevenue - currentLeadRevenue;
  const simulatedWriterCost = 2500; // Average cost for consistent long-form content growth squad support
  const netEstimatedRoi = revenueNetLift - simulatedWriterCost;

  // Free Audit simulator state
  const [auditUrl, setAuditUrl] = useState('');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [auditName, setAuditName] = useState('');
  const [auditIndustry, setAuditIndustry] = useState('SaaS');
  const [auditGoal, setAuditGoal] = useState('Improve SEO & Conversions');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditStepLog, setAuditStepLog] = useState<string[]>([]);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const startLiveAudit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;

    setAuditRunning(true);
    setAuditResult(null);
    setAuditStepLog([]);

    const steps = [
      `Initializing content crawlers for ${auditUrl}...`,
      'Loading dynamic DOM templates and capturing relative semantic structure...',
      'Running AI-readiness verification for LLM user agents (GPTBot, ClaudeBot, Google-Extended)...',
      'Scanning textual entropy levels, reading density (Flesch-Kincaid scale) & flow patterns...',
      'Performing keyword proximity, redundancy detection, and generic placeholder analysis...',
      'Mapping technical schema indicators (JSON-LD Organization, Product, Article)...',
      'Comparing topical index against industry SaaS authority cluster standard thresholds...',
      'Evaluating featured snippet formatting & response eligibility models...',
      'Creating comprehensive content performance and conversion optimization scorecard...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAuditStepLog(prev => [...prev, `[LOG] ${steps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        const randomScore = Math.floor(Math.random() * 25) + 40; // 40-65%
        setAuditResult({
          score: randomScore,
          criticalErrors: [
            'Generic introductory text structures with high fluff (poor AI readability criteria)',
            'No dynamic schema linking blog pages to organization entity properties',
            'Suboptimal header hierarchy hindering crawl performance and natural question answering mapping',
            'High semantic keyword gaps (competing domains cover 45% more topic clusters)',
            'Conversion friction: No localized micro-intent callouts in secondary product segments'
          ],
          seoMetric: 'Needs Refinement (Topical Authority at 32%)',
          recommendedTier: 'Senior SEO & GEO-Oriented Content Expert (Dedicated, 25-40 hrs/wk)',
          actionPlan: 'Enforce topic clustering, convert high-friction blocks into responsive question-answers, apply JSON-LD Article schemas, and build semantic knowledge matrices.'
        });
        setAuditRunning(false);
      }
    }, 800);
  };

  // Structured schemas recommendation state copy
  const [copiedSchema, setCopiedSchema] = useState<string | null>(null);
  const triggerCopySchema = (schemaType: 'service' | 'faq' | 'review') => {
    const rawCode = schemaType === 'service' ? `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Expert SEO Content Writing Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Worldwide",
  "description": "Premium, SEO-optimized, AI-ready, and conversion-focused content writing services designed for SaaS, Ecommerce, and Enterprise brands.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Content Writer Sourcing Packages",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Full-Time Content Writer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Part-Time Content Writer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI SEO & GEO Content Writing" } }
    ]
  }
}` : schemaType === 'faq' ? `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should I hire a professional content writer from AKGLS Group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AKGLS Group provides top-tier SEO and AI-ready content writers who align brand messaging with precise target keywords and natural language structures, ensuring visibility across Google Search and conversational engines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you write genuine, research-driven SEO content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our content writers specialize in semantic SEO, entity mapping, and topic clusters, using data to outperform standard generic drafts and rank in competitive sectors."
      }
    }
  ]
}` : `{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "AKGLS Group"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.9",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Sarah K.",
    "jobTitle": "Head of Marketing, SaaS Logistics"
  }
}`;
    navigator.clipboard.writeText(rawCode);
    setCopiedSchema(schemaType);
    setTimeout(() => setCopiedSchema(null), 3000);
  };

  const services = [
    {
      title: "1. SEO Content Writing",
      badge: "⭐ Core Service",
      desc: "Drive sustainable organic acquisition with high-ranking articles mapped to intent.",
      includes: [
        "SEO blog writing",
        "Keyword optimization",
        "Topic cluster creation",
        "Internal linking strategy",
        "Search intent optimization"
      ]
    },
    {
      title: "2. AI SEO & GEO Content Writing",
      badge: "⭐ Trending Service",
      desc: "Future-proof your content for ChatGPT, Gemini, and Generative Engine Overviews.",
      includes: [
        "GEO-friendly content structuring",
        "Conversational SEO writing style",
        "ChatGPT citation optimization",
        "AI-readable text formatting",
        "Semantic content structuring"
      ]
    },
    {
      title: "3. Website Content Writing",
      badge: "Brand Identity",
      desc: "Turn passive window-shoppers into active brand expansion enthusiasts.",
      includes: [
        "Homepage copy audits",
        "High-performance Service pages",
        "Compelling About Us messaging",
        "Landing page conversion layouts",
        "Consistent brand guidelines"
      ]
    },
    {
      title: "4. Blog Writing Services",
      badge: "Topical Authority",
      desc: "Establish undisputed thought leadership status inside your business vertical.",
      includes: [
        "Long-form educational blogs",
        "Industry insights & trend letters",
        "Executive thought leadership pieces",
        "SEO article restructuring",
        "Sustained editorial calendars"
      ]
    },
    {
      title: "5. Ecommerce Content Writing",
      badge: "High Intent",
      desc: "Drive product discovery and reduce abandoned cart rates seamlessly.",
      includes: [
        "SEO product descriptions",
        "Descriptive category text blocks",
        "Comprehensive buying guides",
        "Conversion-focused copy edits",
        "Multi-channel marketplace listings"
      ]
    },
    {
      title: "6. Technical Content Writing",
      badge: "Niche Authority",
      desc: "Make complex products crystal clear for engineer & executive readers.",
      includes: [
        "SaaS product document outlines",
        "Detailed developer-centric guides",
        "Technical whitepaper drafts",
        "API catalog contextual sheets",
        "B2B hardware specifications"
      ]
    },
    {
      title: "7. B2B Content Writing",
      badge: "Lead Gen",
      desc: "Build highly persuasive collateral that wins over corporate decision makers.",
      includes: [
        "Gated whitepapers & e-books",
        "Deep-dive case studies",
        "Comprehensive industry reports",
        "LinkedIn executive profiles",
        "Lead acquisition funnels"
      ]
    },
    {
      title: "8. Local SEO Content Writing",
      badge: "Local Hubs",
      desc: "Dominate location-specific query categories and drive foot traffic.",
      includes: [
        "Hyperlocal landing page layouts",
        "Google Business updates",
        "Local service content hubs",
        "Geographic entity references",
        "Multi-location franchise copy"
      ]
    },
    {
      title: "9. AI Content Optimization",
      badge: "Content Audits",
      desc: "Transform standard AI-generated drafts into rich, humanized assets.",
      includes: [
        "Raw AI draft proofing",
        "Flesch-Kincaid flow optimization",
        "Featured snippet target inserts",
        "Semantic NLP enhancement",
        "Entity authority connections"
      ]
    },
    {
      title: "10. Dedicated Writer Sourcing",
      badge: "Elite Experts",
      desc: "Instantly recruit fully-vetted content experts mapped directly to your daily schedule.",
      includes: [
        "Full-Time dedicated resources",
        "Consistent Part-Time writers",
        "Flexible monthly retainer support",
        "On-demand hourly block coverage",
        "Agency-level white-label services"
      ]
    }
  ];

  const hiringModels = [
    {
      title: "Full-Time Content Writer",
      desc: "Unrestricted content execution. A dedicated specialist embedded inside your product lifecycle for sustained organic and conversion growth.",
      highlight: "Best for fast-scaling brands"
    },
    {
      title: "Part-Time Content Writer",
      desc: "Consistent, periodic content execution support. Perfect for businesses needing reliable weekly updates without full overhead allocations.",
      highlight: "Ideal for steady growth plans"
    },
    {
      title: "Hourly Content Writer",
      desc: "On-demand execution blocks. Rent elite conceptualizers to handle precise landing templates, whitepapers, or ad copy on demand.",
      highlight: "Ultra-flexible coverage model"
    },
    {
      title: "Project-Based content",
      desc: "Targeted campaigns or site migrations. Outsource full content updates under a single milestone framework built for immediate results.",
      highlight: "Defined product iterations"
    },
    {
      title: "White Label Content Support",
      desc: "Expand your marketing agency's capabilities dynamically. We supply high-grade, premium copy delivered seamlessly under your flag.",
      highlight: "Premium agency partnerships"
    }
  ];

  const industries = [
    { name: "SaaS", desc: "Complex feature translations, topic clusters, and whitepapers to guide technical buyers." },
    { name: "Ecommerce", desc: "SEO-friendly product copy, descriptive categories, and buyer guides that prompt instant sales." },
    { name: "Healthcare", desc: "Highly accurate, empathetic, and patient-first health explanations mapped to medical keywords." },
    { name: "Finance", desc: "Clear, authoritative articles bridging complex fiscal concepts with everyday consumer goals." },
    { name: "Education", desc: "Engaging student curriculum overviews, programmatic academic blogs, and course outlines." },
    { name: "Real Estate", desc: "Enchanting geographical profiles, properties portfolios, and hyper-targeted home buying blogs." },
    { name: "Manufacturing", desc: "Industrial equipment analysis, production lifecycle blueprints, and B2B catalog materials." },
    { name: "IoT Companies", desc: "Deep technical articles on hardware schemas, ecosystem networks, and telemetry protocols." },
    { name: "Local Businesses", desc: "Hyperlocal location guides, service area landing lists, and localized customer guides." },
    { name: "Law Firms", desc: "Highly accurate corporate liability updates, specialized practice case reviews, and state-law overviews." }
  ];

  const tools = [
    { name: "ChatGPT", role: "AI Optimization Content Check" },
    { name: "Gemini AI", role: "Search Citation Diagnostics" },
    { name: "Grammarly", role: "Readability Verification API" },
    { name: "Surfer SEO", role: "On-Page Keyword Integrity" },
    { name: "SEMrush", role: "Topical Gap Mapping" },
    { name: "Ahrefs", role: "Backlink Anchor Clustering" },
    { name: "Google Docs", role: "Collaborative Editorial Boards" },
    { name: "Hemingway Editor", role: "Flesch Stability Checker" },
    { name: "Copyscape", role: "Plagiarism Verification Engine" },
    { name: "Google Analytics", role: "Organic Conversion Tracking" }
  ];

  const packages = [
    {
      name: "Starter Content Support",
      price: "$1,499",
      period: "per month",
      desc: "Best for small companies establishing a presence.",
      features: [
        "4 Premium SEO articles (1,200 words each)",
        "Competitor keyword research",
        "Meta tags & on-page guidelines",
        "100% Plagiarism-free Copyscape passes",
        "Dedicated account strategist review"
      ]
    },
    {
      name: "Growth Content Writer",
      price: "$2,899",
      period: "per month",
      isPopular: true,
      desc: "Perfect for fast-scaling brands looking to capture key market keywords.",
      features: [
        "8 Premium SEO articles with fully mapped topic clusters",
        "Full AI-readiness & GEO citation optimization structures",
        "Dynamic internal linking blueprints",
        "1 Comprehensive Whitepaper or Case Study quarterly",
        "Direct CMS publishing & formatting support"
      ]
    },
    {
      name: "Enterprise Content Team",
      price: "Custom Quote",
      period: "tailored scope",
      desc: "Designed for high-traffic enterprise networks.",
      features: [
        "30+ Articles per month with continuous keyword orchestration",
        "Dedicated team of industry niche verified authors",
        "Full semantic microdata structure suggestions",
        "Continuous translation and localized variants",
        "Real-time Looker Studio reporting dashboards"
      ]
    }
  ];

  const faqs = [
    {
      q: "Why should I hire a professional content writer from AKGLS?",
      a: "Generic, unoptimized wording gets ignored by search bots and human leads alike. Our writers do not just produce text; they use advanced semantic optimization pipelines, map appropriate schemas, design topic models, and coordinate with real traffic goals to secure competitive first-page rankings."
    },
    {
      q: "Do you write SEO-friendly and AI-ready content?",
      a: "Yes, our content writers specialize in semantic content architectures. We structure key headers, natural question answers, and topic clusters so that generative engines like ChatGPT, Gemini, and Google AI Overviews recognize and cite your pages directly."
    },
    {
      q: "What is AI SEO content writing?",
      a: "AI SEO content writing involves formatting site metadata and copy so it feeds natural language processing systems effectively. Our experts construct clean list elements, question nodes, and structured data blocks so LLM bots can parse and display your content contextually."
    },
    {
      q: "Can content improve Google rankings?",
      a: "Absolutely. Google ranks sites that demonstrate E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). Our research-oriented copywriters deliver high-value, authentic information that keeps readers engaged, reducing bounce rates and indicating maximum page utility to ranking engines."
    },
    {
      q: "Do you provide plagiarism-free content?",
      a: "Yes. Every single draft we write passes through multi-layered plagiarism diagnostics including Copyscape Premium and advanced generative similarity tools, delivering completely unique and reliable assets for your business."
    },
    {
      q: "How many blogs should I publish monthly?",
      a: "Our typical recommendation is between 4 to 12 articles depending on topical complexity, competitor density, and available internal budget. Consistency is key; consistent keyword cluster drops signaling reliable depth is always preferred by search engines."
    },
    {
      q: "Do you write for specific industries?",
      a: "Yes, our team employs niche experts specialized across specific sectors such as SaaS, Healthcare, Real Estate, Ecommerce, Financial Tech, IoT, and high-complexity manufacturing."
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans antialiased overflow-x-hidden">
      
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-[#0e1d24]/30 via-[#030d21]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[600px] h-[600px] bg-emerald-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[55%] left-[-20%] w-[700px] h-[700px] bg-cyan-950/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Corporate Header Navigator */}
      <nav id="writer-hiring-nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900/60 relative bg-[#02040d]/85 backdrop-blur z-20">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition font-mono text-xs bg-transparent border-none cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-emerald-400" />
          <span>Back to Corporate Hub</span>
        </button>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918318114492"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex text-xs font-mono text-emerald-400 border border-emerald-950 bg-emerald-950/25 px-3 py-1.5 rounded hover:bg-emerald-950/50 transition-colors"
          >
            Direct Chat: +91 831 811 4492
          </a>
          <button 
            onClick={openProposalForm} 
            className="text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-95 text-slate-950 font-bold px-4 py-2 rounded shadow-md shadow-emerald-950/30 cursor-pointer transition"
          >
            Request Content Audit
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="content-writer-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Premium Keyword Orchestration & Conversational Copy</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hire Content Writers to Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">SEO-Optimized, AI-Ready & Conversion-Focused Content</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hire experienced content writers for SEO blogs, website content, AI SEO content, GEO optimization, ecommerce copywriting, technical writing, and lead-generating content strategies designed for modern search engines and users.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('content-packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:opacity-95 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg shadow-lg shadow-emerald-950/30 transition flex items-center gap-2 text-sm"
              >
                <span>Hire Content Writer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('free-content-audit-stage');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-slate-700 hover:border-emerald-500 bg-slate-900/40 text-slate-100 hover:text-white font-medium px-6 py-3.5 rounded-lg transition text-sm"
              >
                Get Free Content Consultation
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-900/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">SEO Content Experts</h4>
                  <p className="text-xs text-slate-400">Proven writers matching keyword density rules.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">AI SEO & GEO Writers</h4>
                  <p className="text-xs text-slate-400">Layout structures optimized for answer engine references.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Industry-Specific Writers</h4>
                  <p className="text-xs text-slate-400">Niche-vetted experts aligned with vertical lingo.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Conversion-Focused Content</h4>
                  <p className="text-xs text-slate-400">Subtle action blocks guiding customer behaviors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Layout: Adaptive Content Optimization Simulation */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#050b1c] rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="bg-[#030612] px-3 py-1 rounded text-[10px] font-mono text-emerald-400 border border-emerald-950">
                  UTILITY: SEMANTIC_CORPUS_v1.9
                </div>
              </div>

              {/* Keyword clustering & density simulator */}
              <div className="space-y-4 pt-4">
                <div className="space-y-1 bg-[#02040a] p-3 rounded border border-slate-900">
                  <span className="text-[10px] font-mono text-emerald-400">OPTIMIZED HEADING ARCHITECTURE</span>
                  <p className="text-xs text-slate-200 font-bold leading-snug">H2: How Technical IoT Monitors Scale Secure Data Pipelines</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                    Embedding contextual keywords naturally: <span className="text-emerald-300 underline font-mono">"IoT telemetry"</span>, <span className="text-emerald-300 underline font-mono">"edge computing schemas"</span> & <span className="text-emerald-300 underline font-mono">"SaaS network alerts"</span> with perfect flow ratios.
                  </p>
                </div>

                {/* Score meters */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Flesch Accessibility Scale:</span>
                    <span className="text-emerald-400 font-bold">84 (Highly readable)</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#02040a] rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-[84%] rounded" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Topical Density Score:</span>
                    <span className="text-emerald-400 font-bold">Elite 96%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#02040a] rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-[96%] rounded" />
                  </div>
                </div>

                {/* Simulated references block */}
                <div className="bg-emerald-950/20 border border-emerald-500/20 p-3.5 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
                    <Activity className="w-4 h-4" />
                    <span>CRAWLER REFERRAL VISIBILITY</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                    Fully optimized formatting triggers automatic featured citation placement across conversational engines. Replaces low-quality robotic text segments with pristine human-sounding industry expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="border-y border-slate-900/80 bg-[#030612]/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs text-slate-500 tracking-wider uppercase mb-8">
            Trusted Content Writing Experts for Growing Businesses
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-65 grayscale hover:grayscale-0 transition duration-300 mb-12">
            <span className="text-lg font-black tracking-widest text-slate-400">FINTECH_GROUP</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">SAAS_INTEGRATOR</span>
            <span className="text-lg font-mono tracking-widest text-slate-400">|| EDUCATION_HUB ||</span>
            <span className="text-lg font-black tracking-widest text-slate-400">HEALTHCARE_HEALTH</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">ECOMM_GROWTH</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center max-w-5xl mx-auto pt-10 border-t border-slate-900">
            <div>
              <p className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">2,500+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Premium Articles Written</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">14K+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Keywords Ranked Top 10</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">1.8M+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Organic Clicks Generated</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">24+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Industries Comfortably Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIRE A CONTENT WRITER SECTION */}
      <section className="bg-slate-950/20 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire a Professional Content Writer?</h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Without professional content curation, sites remain invisible. High-performing pages require careful placement of topic vectors, intent modeling, and strong conversion call-out elements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Improve SEO rankings", desc: "Build thematic depth that satisfies crawl algorithms and outranks generic competitor drafts." },
              { title: "Generate qualified leads", desc: "Attract readers explicitly searching for information relevant to your dynamic product tiers." },
              { title: "Increase website engagement", desc: "Structure layouts to keep users reading, reducing site exit rates and parameters." },
              { title: "Build brand authority", desc: "Demonstrate clear product expertise (E-E-A-T) to both modern search platforms and users." },
              { title: "Improve AI search visibility", desc: "Position your site naturally to serve as the default direct response citation in ChatGPT & Gemini." },
              { title: "Boost organic conversions", desc: "Incorporate targeted contextual actions that guide users further into acquisition pipelines." }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-xl hover:border-emerald-500/25 transition">
                <CheckSquare className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTENT MARKETING ROI CALCULATOR */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Forecast Your Content Marketing ROI</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Consistency in long-form quality indexing scales your crawl presence exponentially. Use our interactive slider panel to see how steady organic traffic expansion drastically reduces customer acquisition costs and improves inbound pipeline economics over time.
              </p>
              <div className="bg-[#030612] p-4 rounded-lg border border-slate-900 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                  <Award className="w-4 h-4" />
                  <span>PREMIUM ORGANIC LIFT METRIC</span>
                </div>
                <p className="text-xs text-slate-400">
                  Replacing obsolete tag stuffing with topical clusters has historically generated a <strong>3x to 5x traffic expansion</strong> over a sustained 6-month indexing window.
                </p>
              </div>
            </div>

            {/* Right side interactive calculator */}
            <div className="lg:col-span-6">
              <div className="bg-[#04081c]/90 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-emerald-400" />
                  <span>Organic Lift Estimator</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Adjust metrics based on your current channel averages to visualize prospective returns.
                </p>

                <div className="space-y-5">
                  {/* Traffic slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Target Monthly Blog Traffic:</span>
                      <span className="text-emerald-400 font-bold">{monthlyTraffic.toLocaleString()} Visitors</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="100000" 
                      step="2000"
                      value={monthlyTraffic} 
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-emerald-400"
                    />
                  </div>

                  {/* Conversion slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Read-to-Conversion Rate (%):</span>
                      <span className="text-emerald-400 font-bold">{conversionRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="10" 
                      step="0.1"
                      value={conversionRate} 
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-emerald-400"
                    />
                  </div>

                  {/* Avg Lead Value slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Avg Inbound Contract/Cart Value:</span>
                      <span className="text-emerald-400 font-bold">${avgLeadValue}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="2000" 
                      step="50"
                      value={avgLeadValue} 
                      onChange={(e) => setAvgLeadValue(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-emerald-400"
                    />
                  </div>

                  {/* Traffic Lift multiplier slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Expected Top-tier Growth Lift:</span>
                      <span className="text-cyan-400 font-bold">{trafficMultiplier}x Multiplier</span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="8" 
                      step="1"
                      value={trafficMultiplier} 
                      onChange={(e) => setTrafficMultiplier(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-cyan-400"
                    />
                  </div>

                  {/* Result Panel */}
                  <div className="bg-[#02040a] border border-slate-900 p-4 rounded-xl mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Est. Revenue Lift</span>
                      <span className="text-xl font-bold text-emerald-400">${revenueNetLift.toLocaleString()} <span className="text-xs text-slate-500">/mo</span></span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Estimated Channel ROI</span>
                      <span className="text-xl font-bold text-cyan-400">+{Math.round((netEstimatedRoi / simulatedWriterCost) * 100)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT MAKES GREAT CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">What Makes High-Performing Content?</h2>
          <p className="text-slate-400 mt-3 text-sm">
            Top ranks are no longer about matching exact keywords repeatedly. AI and Google algorithms analyze contextual entity links, natural reading flow, and user satisfaction structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">The Quality Metrics We Enforce</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every sentence built by our hand-picked specialists satisfies strict NLP (Natural Language Processing) validation models, making them readable to both LLMs and human buyers.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "SEO optimization", desc: "Topic clusters and sub-keywords that solve broad search intents perfectly." },
                { title: "AI readability index", desc: "Sentence structure that algorithms read contextually inside vector windows." },
                { title: "User intent matching", desc: "Clear headings addressing explicit transactional or informational query nodes." },
                { title: "Conversational layouts", desc: "Clean markdown formats, lists, and direct answers that capture rich featured blocks." }
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 text-xs shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Document Preview Grid */}
          <div className="bg-[#04081c] border border-slate-800 p-6 rounded-2xl space-y-4 relative">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
              Verified Layout Layout
            </div>
            <h4 className="text-sm font-bold text-white border-b border-slate-800 pb-2">Perfect H2 Semantic Question Blueprint</h4>
            
            <div className="space-y-3">
              <div className="bg-[#02040b] p-3 rounded border border-slate-900">
                <p className="text-xs text-emerald-400 font-mono font-bold">🎯 ANSWER NODES [FEATURED SNIPPETS]</p>
                <p className="text-[11px] text-slate-300 italic pt-1">
                  "Generative Engine optimization works by establishing direct relationships between specific entities inside knowledge models..."
                </p>
              </div>

              <div className="bg-[#02040b] p-3 rounded border border-slate-900">
                <p className="text-xs text-cyan-400 font-mono font-bold">📦 SEMANTIC TOP LEVEL ENTITIES</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="bg-emerald-950 text-emerald-400 border border-emerald-900 text-[9px] px-2 py-0.5 rounded">JSON-LD Microdata</span>
                  <span className="bg-[#0a183d] text-cyan-400 border border-[#102a6b] text-[9px] px-2 py-0.5 rounded">Cluster Indexing</span>
                  <span className="bg-indigo-950 text-indigo-400 border border-indigo-900 text-[9px] px-2 py-0.5 rounded">NLP Density</span>
                </div>
              </div>

              <div className="bg-emerald-950/25 border border-emerald-500/20 p-3 rounded-lg text-[11px] text-slate-300">
                <strong>Conversion Call-out insertion:</strong> "Looking to implement these setups securely? Our <span className="underline text-emerald-300">dedicated SEO content writers</span> coordinate directly with operations."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CONTENT WRITING SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00ffd1] font-mono text-xs font-semibold tracking-widest uppercase">
            Sustained Execution Catalogs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Content Writing Services Offered by Our Experts
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            AKGLS group recruits pre-vetted specialists to construct, format, and push premium articles, service blueprints, and technical material on a predictable calendar line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all flex flex-col justify-between">
              <div>
                <span className="absolute top-4 right-4 text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded uppercase">
                  {service.badge}
                </span>
                <div className="w-8 h-8 rounded bg-emerald-950/40 text-emerald-400 flex items-center justify-center mb-4 font-mono font-black text-xs">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              </div>
              
              <ul className="space-y-1.5 border-t border-slate-900/60 pt-4 mt-auto">
                {service.includes.map((incl, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{incl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING MODELS SECTION */}
      <section className="bg-[#030612]/50 border-y border-slate-900/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible Content Writer Hiring Models</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We eliminate complex recruitment channels. Deploy elite authors aligned perfectly across 5 streamlined structural boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {hiringModels.map((model, index) => (
              <div key={index} className="bg-[#02040a] border border-slate-900 p-5 rounded-lg hover:border-slate-800 transition text-center flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-2">{model.highlight}</span>
                  <h3 className="text-sm font-black text-white mb-2">{model.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{model.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-900 mt-4 text-[11px] font-mono text-slate-500">
                  Tier {index + 1} Sourcing
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES OUR CONTENT WRITERS SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Industries Our Content Writers Work With</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Search criteria and niche terminology differ dramatically across sectors. Our authors are pre-vetted to deliver accurate material with appropriate credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, index) => (
            <div key={index} className="bg-[#030612]/60 border border-slate-900 p-5 rounded-lg hover:border-emerald-500/20 transition-all">
              <h3 className="text-base font-bold text-white mb-2 pb-1 border-b border-slate-900">{ind.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR CONTENT WRITING PROCESS SECTION */}
      <section className="bg-[#030612]/55 border-y border-slate-900/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ffd1] font-mono text-xs font-semibold tracking-widest uppercase">
              Proven Execution Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">Our Content Creation Process</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Every single asset drafted under the AKGLS flag undergoes thorough review, on-page optimization, and structural diagnostics before delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {[
              { step: "01", name: "Research & Strategy", desc: "Performing in-depth competitor topical indexing, intent tracking, and cluster planning." },
              { step: "02", name: "Content Planning", desc: "Setting heading structures, placing semantic question markers, and mapping CTA locations." },
              { step: "03", name: "Content Writing", desc: "Crafting original, persuasive text naturally weaving complex industry topics." },
              { step: "04", name: "Optimization & Review", desc: "Checking NLP densities, validating readability scores, and running original Copyscape audits." },
              { step: "05", name: "Publishing & Scaling", desc: "Formatting metadata details, supporting direct CMS uploads, and reviewing indexing performance." }
            ].map((proc, index) => (
              <div key={index} className="bg-[#02040a] border border-slate-900 p-6 rounded-lg relative hover:border-slate-800 transition">
                <span className="text-3xl font-black text-slate-800 block mb-2 font-mono">{proc.step}</span>
                <h3 className="text-sm font-bold text-white mb-2">{proc.name}</h3>
                <p className="text-xs text-slate-405 leading-relaxed text-slate-400">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE-READY AI CONTENT WRITING OPTIMIZATION DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#04081c]/80 border border-slate-800 p-8 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950 text-emerald-400 px-3 py-1 rounded font-mono text-xs font-medium">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                <span>ANSWER ENGINE OPTIMIZATION</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Hire AI SEO Content Writers for Future Search Visibility
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As traditional web index volumes shift into direct answer loops, optimizing metadata elements guarantees citations inside conversational summary lists, Gemini replies, and Bing CoPilot matrices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>GEO & AEO text structures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Interactive query clustering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Contextual NLP validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Responsive schema integrations</span>
                </div>
              </div>
            </div>

            {/* Dashboard component */}
            <div className="lg:col-span-5 bg-[#02040c] border border-slate-900 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-b border-slate-900 pb-2">
                <span>LLM BOT ANALYZER: GPToBot-4o</span>
                <span className="text-emerald-400 animate-pulse font-bold">● ONLINE</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Semantic Trust Mapping:</span>
                  <span className="text-emerald-400 font-bold">95/100</span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[95%]" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Citation Recurrence Rate:</span>
                  <span className="text-cyan-400 font-bold">Optimal</span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded overflow-hidden">
                  <div className="h-full bg-cyan-400 w-[88%]" />
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-400 bg-slate-950 p-3 rounded leading-relaxed">
                [RECOMMENDED ACTION] Structure content nodes in H3 arrays to maximize featured snippet extraction during real-time retrieval processes.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT RESULTS PANEL */}
      <section className="py-20 bg-[#030612]/50 border-y border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Results Delivered by Our Content Writers</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We focus on delivering compounding business revenue, not just vanity visitor statistics. Let our actual metric growth metrics speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#02040a] border border-slate-950 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-red-950 text-red-400 font-mono mb-2">TYPICAL UNOPTIMIZED COPY</span>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Low thematic density, missing H2 target schemas, high exit rates, and poor readability metrics. No conversion tracking inserts leading to steady budget wastage over months.
                </p>
              </div>
              <div className="text-xs font-mono text-red-400 font-bold">Average organic conversion rate: 0.4%</div>
            </div>

            <div className="bg-emerald-950/15 border border-emerald-500/20 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-emerald-950 text-emerald-400 font-mono mb-2">AKGLS CORP SEMANTIC COPY</span>
                <p className="text-xs text-slate-200 leading-relaxed mb-4 font-sans">
                  Topic clusters perfectly satisfy search intent triggers. Conversational layouts address featured question nodes, and targeted micro-intent CTAs capture qualified pipeline inquiries seamlessly.
                </p>
              </div>
              <div className="text-xs font-mono text-emerald-300 font-bold">Average organic conversion rate: 3.1%</div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES / CASE STUDIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Content Marketing Success Stories</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Read how other enterprise and growth operations scaled their index visibility using structured semantic drafts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { tag: "SaaS SEO Growth", title: "Enterprise Cloud Scaler", focus: "Topical clusters raised trial signups by 180% using high-intent educational content campaigns." },
            { tag: "Ecommerce SEO", title: "Global Health Brand", focus: "Restructuring raw product copy into responsive buying indices yielded a 310% traffic expansion." },
            { tag: "B2B Lead Generation", title: "IoT Hardware Provider", focus: "In-depth technical guides targeting CTO intent captured highly qualified pipeline opportunities." }
          ].map((cs, idx) => (
            <div key={idx} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-xl hover:border-slate-800 transition">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{cs.tag}</span>
              <h3 className="text-lg font-black text-white mt-1 mb-2">{cs.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{cs.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#030612]/50 border-t border-slate-900/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire Content Writers from AKGLS Group?</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We bridge the gap between technical keyword engineering and compelling brand narrative layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "SEO Content Specialists", desc: "Every writer is vetted for keyword optimization, intent mapping, and structural standards." },
              { title: "AI SEO Writers", desc: "Expert in GEO schemas and layout models designed to feed modern summary engines and bots." },
              { title: "Industry-Specific Authors", desc: "We place actual specialists specialized in complex SaaS, finance, health, and engineering spaces." },
              { title: "Transparent Communications", desc: "Predictable schedules, weekly drafts, and direct CMS formatting support included." }
            ].map((usp, idx) => (
              <div key={idx} className="bg-[#02040a] border border-slate-905 p-5 rounded-lg border-slate-900/60 hover:border-slate-800 transition">
                <Check className="w-5 h-5 text-emerald-400 mb-2" />
                <h3 className="text-sm font-black text-white mb-1">{usp.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Content Tools & Technologies We Use</h2>
          <p className="text-slate-400 mt-2 text-sm text-center">
            Our content production is powered by industry-standard semantic audit utilities to ensure proper metadata matching, absolute originality, and keyword integrity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {tools.map((t, idx) => (
            <div key={idx} className="bg-[#030612]/60 border border-slate-900 p-4 rounded text-center">
              <h4 className="text-xs font-black text-white">{t.name}</h4>
              <p className="text-[10px] text-slate-500 font-mono mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLEXIBLE PACKAGES SECTION */}
      <section id="content-packages" className="bg-[#030612]/50 border-t border-slate-900/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible Content Writer Hiring Packages</h2>
            <p className="text-slate-400 mt-2 text-sm">
              Deploy top authors aligned precisely across three pre-vetted transactional frameworks built for immediate brand growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pack, idx) => (
              <div 
                key={idx} 
                className={`bg-[#02040a] border p-6 rounded-2xl flex flex-col justify-between transition-all ${
                  pack.isPopular 
                    ? 'border-emerald-500/40 shadow-xl shadow-emerald-950/25 relative scale-[1.02]' 
                    : 'border-slate-900 hover:border-slate-800'
                }`}
              >
                {pack.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest font-black bg-emerald-500 text-slate-950 px-3 py-1 rounded-full uppercase">
                    RECOMMENDED tier
                  </span>
                )}
                
                <div>
                  <h3 className="text-md font-black text-white mb-2">{pack.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black text-white">{pack.price}</span>
                    <span className="text-xs text-slate-500 font-mono">/ {pack.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 pt-2 border-t border-slate-900">{pack.desc}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {pack.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('free-content-audit-stage');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-lg text-xs font-bold transition ${
                    pack.isPopular 
                      ? 'bg-gradient-to-r from-emerald-400 to-cyan-500 hover:opacity-95 text-slate-950' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Hire Content Writer Today
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#030612]/30 border-t border-slate-900/80 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Frequently Asked Questions About Hiring Content Writers</h2>
            <p className="text-slate-400 mt-2 text-sm">
              Got questions? Here is are explicit breakdowns regarding team sourcing, schemas, alignments, and billing timelines.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#02040a] border border-slate-900 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:bg-slate-900/60 transition"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronDown className="w-4 h-4 text-emerald-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-900 bg-slate-950/45 text-xs text-slate-350 leading-relaxed px-5 py-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE CONTENT AUDIT STAGE SECTION */}
      <section id="free-content-audit-stage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#04081c]/60 border border-slate-800 p-6 md:p-10 rounded-2xl">
          
          {/* Form Side */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">PRE-HIRE ASSESSMENT</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Get a Free Content Audit Before Hiring</h2>
              <p className="text-xs text-slate-400 mt-2">
                Evaluate your current landing page read scores, duplicate indicators, schema integrity, and semantic crawl compatibility in real-time.
              </p>
            </div>

            <form onSubmit={startLiveAudit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Your Full Name:</span>
                  <input 
                    type="text" 
                    required 
                    value={auditName} 
                    onChange={e => setAuditName(e.target.value)} 
                    placeholder="Enter full name" 
                    className="w-full bg-[#02040c] text-xs text-slate-100 border border-slate-900 rounded p-2.5 outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Target Website URL:</span>
                  <input 
                    type="url" 
                    required 
                    value={auditUrl} 
                    onChange={e => setAuditUrl(e.target.value)} 
                    placeholder="https://yourdomain.com" 
                    className="w-full bg-[#02040c] text-xs text-slate-100 border border-slate-900 rounded p-2.5 outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Target Industry:</span>
                  <select 
                    value={auditIndustry} 
                    onChange={e => setAuditIndustry(e.target.value)}
                    className="w-full bg-[#02040c] text-xs text-slate-100 border border-slate-900 rounded p-2.5 outline-none focus:border-emerald-500 transition"
                  >
                    <option value="SaaS">SaaS Technology</option>
                    <option value="Ecommerce">Ecommerce Products</option>
                    <option value="Finance">Fintech & Banking</option>
                    <option value="Healthcare">Healthcare & Wellness</option>
                    <option value="Local Business">Local Area Franchises</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Primary Channel Goal:</span>
                  <select 
                    value={auditGoal} 
                    onChange={e => setAuditGoal(e.target.value)}
                    className="w-full bg-[#02040c] text-xs text-slate-100 border border-slate-900 rounded p-2.5 outline-none focus:border-emerald-500 transition"
                  >
                    <option value="Improve SEO & Conversions">Optimize Search & Conversions</option>
                    <option value="Topical Cluster Growth">Build Topical Cluster Authority</option>
                    <option value="AI Engine References">Increase SGE Recurrence Odds</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Direct Email:</span>
                  <input 
                    type="email" 
                    required 
                    value={auditEmail} 
                    onChange={e => setAuditEmail(e.target.value)} 
                    placeholder="email@company.com" 
                    className="w-full bg-[#02040c] text-xs text-slate-100 border border-slate-900 rounded p-2.5 outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Phone Number (Optional):</span>
                  <input 
                    type="tel" 
                    value={auditPhone} 
                    onChange={e => setAuditPhone(e.target.value)} 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-[#02040c] text-xs text-slate-100 border border-slate-900 rounded p-2.5 outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={auditRunning}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950 font-bold text-xs hover:opacity-95 transition disabled:opacity-50"
              >
                {auditRunning ? 'Initiating Copyscape & NLP SGE Crawlers...' : 'Initiate Free Channel Audit'}
              </button>
            </form>
          </div>

          {/* Crawler Log Output Side */}
          <div className="lg:col-span-6">
            <div className="bg-[#02040c] border border-slate-900/80 rounded-xl p-5 font-mono text-xs text-slate-300 min-h-[340px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-4">
                  <span className="text-emerald-400 font-bold">SYSTEM SCAN CONSOLE</span>
                  <span className="text-[10px] text-slate-500">READY</span>
                </div>

                <div className="space-y-1.5 max-h-[220px] overflow-y-auto scoller-thin text-slate-450 leading-relaxed text-[10px]">
                  {auditStepLog.length === 0 ? (
                    <p className="text-slate-500 italic">Console idle. Fill target URL and email metadata vectors to activate simulated diagnostics.</p>
                  ) : (
                    auditStepLog.map((log, index) => (
                      <div key={index} className="text-slate-400 border-l border-slate-900 pl-2">
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Show audited findings panel */}
              {auditResult && (
                <div className="border-t border-slate-900 pt-4 mt-4 space-y-2 text-[11px] bg-emerald-950/10 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold">TOPICAL GRADE SCORE:</span>
                    <span className="text-red-400 font-black">{auditResult.score} / 100</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block">CRITICAL GAP ANOMALIES DETECTED:</span>
                    <ul className="list-disc pl-4 space-y-1 mt-1 text-slate-350">
                      {auditResult.criticalErrors.map((err: string, i: number) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-900 flex justify-between">
                    <span className="text-slate-400">Best Resource Placement:</span>
                    <span className="text-emerald-400 font-bold text-[10px]">{auditResult.recommendedTier}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SCHEMA INTEGRITY & COPIER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#030612]/70 border border-slate-900 rounded-xl p-6">
          <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Interactive Schema recommendations (Pre-optimized Copyable Blueprint)</span>
          </h3>
          <p className="text-xs text-slate-405 mb-4 text-slate-400">
            Professional micro-data structure markup satisfies algorithm entity indexing behaviors automatically. Click to copy pre-formatted structural templates.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <button 
              onClick={() => triggerCopySchema('service')}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs px-3 py-1.5 rounded flex items-center gap-1.5 font-mono text-slate-300"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedSchema === 'service' ? 'Service Schema COPIED!' : 'Copy Service Schema JSON'}</span>
            </button>
            <button 
              onClick={() => triggerCopySchema('faq')}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs px-3 py-1.5 rounded flex items-center gap-1.5 font-mono text-slate-300"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedSchema === 'faq' ? 'FAQ Schema COPIED!' : 'Copy FAQ Schema JSON'}</span>
            </button>
            <button 
              onClick={() => triggerCopySchema('review')}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs px-3 py-1.5 rounded flex items-center gap-1.5 font-mono text-slate-300"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedSchema === 'review' ? 'Review Schema COPIED!' : 'Copy Review Schema JSON'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* SUGGESTED ARTICLES BLOG SEGMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Suggested Technical Guides & Insights</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Read expert drafts regarding team sourcing, schemas, organic growth parameters, and programmatic optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "Sourcing Advice", q: "How to Hire a High-Performance Content Writer", text: "Vetting parameters and test instructions to filter out generic robotic copy drafts." },
            { tag: "NLP Optimization", q: "The Science of SEO & Conversational Content Writing", text: "How to build precise query schemas for ChatGPT optimization referrers." },
            { tag: "AEO Optimization", q: "GEO Optimization Explained for Content Strategy", text: "Step guides to ensure your organization properties rank in AI engines and overviews." }
          ].map((bl, i) => (
            <div key={i} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-lg hover:border-slate-800 transition">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{bl.tag}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">{bl.q}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{bl.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-950/20 to-cyan-950/20 border border-emerald-500/30 rounded-3xl p-8 md:p-14 text-center max-w-5xl mx-auto relative space-y-6">
          <div className="absolute top-0 left-0 right-0 h-full w-full bg-[#02040c]/10 rounded-3xl pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Ready to Hire Content Writers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">SEO & Business Growth?</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expand your search footprint and capture high-intent organic referrals across classic search engines and modern conversational networks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 relative z-10">
            <button 
              onClick={() => {
                const el = document.getElementById('content-packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950 font-extrabold px-8 py-3.5 rounded-lg text-xs hover:opacity-95 transition"
            >
              Hire Content Writer Today
            </button>
            <a 
              href="https://wa.me/918318114492"
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-900 border border-slate-800 px-6 py-3.5 rounded-lg text-xs text-white hover:text-emerald-400 hover:border-emerald-950 transition font-mono font-bold"
            >
              Direct Chat: +91 831 811 4492
            </a>
          </div>

          {/* Trust elements list */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono text-slate-500 pt-8 border-t border-slate-900 max-w-xl mx-auto">
            <span>✓ SEO Content Experts</span>
            <span>✓ AI SEO & GEO Specialists</span>
            <span>✓ Conversational Copyscape Verified</span>
          </div>
        </div>
      </section>

    </div>
  );
}

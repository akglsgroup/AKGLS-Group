import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, 
  MessageSquare, Smartphone, TrendingUp, Coins
} from 'lucide-react';

interface HireSeoExpertPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function HireSeoExpertPage({ onBackToHome, openProposalForm }: HireSeoExpertPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hire SEO Expert | Dedicated SEO Specialist & Consultant | AKGLS Group";
    return () => {
      document.title = originalTitle;
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
  const [activeTab, setActiveTab] = useState<'tech' | 'aiseo' | 'local' | 'ecommerce' | 'enterprise'>('tech');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Hiring Model Calculator state
  const [selectedHours, setSelectedHours] = useState(20);
  const [hiringTier, setHiringTier] = useState<'hourly' | 'dedicated' | 'agency'>('dedicated');

  // ROI Calculator state
  const [currentRevenue, setCurrentRevenue] = useState(15000);
  const [projectedLift, setProjectedLift] = useState(3.5); // Multiplier

  // Free Audit simulator state
  const [auditUrl, setAuditUrl] = useState('');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [auditName, setAuditName] = useState('');
  const [auditIndustry, setAuditIndustry] = useState('SaaS');
  const [auditGoal, setAuditGoal] = useState('Traffic Growth');
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
      `Initializing deep SEO crawler on ${auditUrl}...`,
      'Analyzing SSL Certificate, HTTP header configurations, and redirect behaviors...',
      'Crawling XML Sitemap integrity and robots.txt rules...',
      'Evaluating Core Web Vitals, Largest Contentful Paint, and mobile-responsive viewport parameters...',
      'Scanning for Schema.org JSON-LD structured specifications (Product, LocalBusiness, TechArticle)...',
      'Checking AI indexing readiness, ChatGPT Search citation weight, and Perplexity metadata pointers...',
      'Aggregating competitor keyword gaps and domain authority index margins...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAuditStepLog(prev => [...prev, `[LOG] ${steps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        const randomScore = Math.floor(Math.random() * 20) + 48; // 48 - 68 representing typical audited sites
        setAuditResult({
          score: randomScore,
          criticalErrors: [
            'Missing JSON-LD structured schema for primary search engines or AI crawlers',
            'Sitemap file is not dynamically loaded or registered in sitemap.xml',
            'High LCP (Largest Contentful Paint) above 3.8s on primary landing templates',
            'Undefined canonical URLs leading to prospective parameter-matching duplicate pages'
          ],
          aiReadiness: Math.floor(randomScore * 0.75),
          recommendedExpertModel: 'Growth SEO Specialist (Dedicated Part-Time, 20-30 hrs/wk)',
          actionPlan: 'Inject semantic JSON markup schema, optimize asset scaling, design clear natural language answer blocks.'
        });
        setAuditRunning(false);
      }
    }, 900);
  };

  // Structured schemas recommendation state copy
  const [copiedSchema, setCopiedSchema] = useState<string | null>(null);
  const triggerCopySchema = (schemaType: 'service' | 'review') => {
    const rawCode = schemaType === 'service' ? `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Expert SEO Hiring & SEO Consultant Placement",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO Expert Hiring Models",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Full-Time SEO Specialist" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Part-Time SEO Consultant" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hourly Expert Consultation" } }
    ]
  }
}` : `{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.9",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Vikas S.",
    "jobTitle": "VP of Growth, FinTech Corp"
  }
}`;
    navigator.clipboard.writeText(rawCode);
    setCopiedSchema(schemaType);
    setTimeout(() => setCopiedSchema(null), 3000);
  };

  // Interactive Live Tracker
  const [trackerIndex, setTrackerIndex] = useState(0);
  const liveQueries = [
    { keyword: "Dedicated technical SEO specialist for SaaS", vol: "1,200/mo", comp: "High", indexState: "Ranked #1 (GSC Verified)" },
    { keyword: "Hire AI SEO consultant for Shopify sitemaps", vol: "850/mo", comp: "Medium", indexState: "Captured Featured Snippet" },
    { keyword: "Corporate enterprise SEO architects", vol: "1,450/mo", comp: "Very High", indexState: "Position #2 (Cited by Perplexity)" },
    { keyword: "Hire local SEO specialist for healthcare multi-sites", vol: "1,900/mo", comp: "Medium", indexState: "Top 3 Local Map Pack" }
  ];

  return (
    <div className="min-h-screen bg-[#040612] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 right-0 h-[700px] bg-gradient-to-b from-[#140b33]/30 via-[#0a183d]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[25%] right-[-15%] w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] left-[-20%] w-[700px] h-[700px] bg-indigo-950/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Corporate Header Navigator */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900 sticky top-0 bg-[#040612]/85 backdrop-blur z-50">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition font-mono text-xs bg-transparent border-none cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Corporate Hub</span>
        </button>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918318114492"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex text-xs font-mono text-emerald-400 border border-emerald-950/80 bg-emerald-950/20 px-3 py-1.5 rounded hover:bg-emerald-950/50 transition-colors"
          >
            Direct Chat: +91 831 811 4492
          </a>
          <button 
            onClick={openProposalForm} 
            className="text-xs bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-bold px-4 py-2 rounded shadow-md shadow-cyan-950/30 cursor-pointer"
          >
            Request Sourcing Audit
          </button>
        </div>
      </nav>

      {/* STICKY CTA PANEL */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-[#090d24]/95 border-t border-cyan-500/30 backdrop-blur-md py-4 z-50 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300">
                  Ready to scale organic traffic? Hire a certified <strong className="text-white">dedicated SEO Expert</strong> from AKGLS.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/918318114492"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-emerald-950/30 text-emerald-400 border border-emerald-900 px-4 py-2 rounded-lg text-xs font-mono hover:bg-emerald-950/60 transition"
                >
                  WhatsApp Consultation
                </a>
                <button 
                  onClick={() => {
                    const form = document.getElementById('free-audit-form');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold px-5 py-2 rounded-lg text-xs hover:opacity-95 transition"
                >
                  Hire SEO Expert Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Certified Dedicated SEO Resource Sourcing</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hire SEO Experts to Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Organic Traffic, Rankings & Revenue</span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Hire vetted, experienced SEO experts for technical audits, AI Search Optimize systems, localized citation building, WooCommerce/Shopify configurations, and high-quality link scaling. Tailored transparent organic growth models optimized specifically for your business KPIs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => {
                  const form = document.getElementById('free-audit-form');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-bold px-6 py-4 rounded-xl transition text-sm cursor-pointer shadow-lg shadow-cyan-950/50"
              >
                <span>Hire SEO Expert Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={openProposalForm}
                className="inline-flex justify-center items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition px-6 py-4 rounded-xl text-sm font-bold cursor-pointer"
              >
                Book Free SEO Consultation
              </button>
            </div>

            {/* Hero bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-900">
              <div className="space-y-1">
                <span className="text-white font-bold text-xs sm:text-sm block">10+ Years Experience</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">SEO Experience</span>
              </div>
              <div className="space-y-1">
                <span className="text-cyan-400 font-bold text-xs sm:text-sm block">AI & GEO Ready</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">Specialists Placement</span>
              </div>
              <div className="space-y-1">
                <span className="text-indigo-400 font-bold text-xs sm:text-sm block">100% Dedicated</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">Hourly & Monthly</span>
              </div>
              <div className="space-y-1">
                <span className="text-purple-400 font-bold text-xs sm:text-sm block">ROI & KPIs Driven</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">Organic Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Console & Visual graph preview */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-[#0c122c] to-[#040612] border border-indigo-950/80 rounded-2xl p-6 shadow-2xl relative z-10 space-y-4">
              
              <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <span className="text-[10px] font-mono text-slate-500 ml-2">KEYWORD_RANK_MONITOR</span>
                </div>
                <span className="bg-cyan-950 text-cyan-300 font-mono text-[9px] px-2 py-0.5 rounded border border-cyan-800/50">LIVE DATASET</span>
              </div>

              {/* Keyword live tracker component */}
              <div className="space-y-3">
                <p className="text-[11px] text-slate-400 font-mono">Simulating real-time index target ranks of our experts:</p>
                <div className="bg-[#05081a]/90 border border-indigo-950 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Target Keyword:</span>
                    <span className="text-white font-bold">{liveQueries[trackerIndex].keyword}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Search Volume:</span>
                    <span className="text-slate-300 font-mono font-bold text-cyan-400">{liveQueries[trackerIndex].vol}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">GSC Rank Status:</span>
                    <span className="text-emerald-400 font-semibold font-mono">{liveQueries[trackerIndex].indexState}</span>
                  </div>
                </div>

                <div className="flex gap-2 justify-center">
                  {liveQueries.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTrackerIndex(i)}
                      className={`h-2 rounded-full transition-all ${trackerIndex === i ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-800'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Simulated SEO ranking graph */}
              <div className="bg-[#040612] border border-slate-900 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 uppercase">Organic Traffic Projection Scale</span>
                  <span className="text-emerald-400 font-bold">+410% AVERAGE</span>
                </div>
                <div className="h-16 flex items-end justify-between pt-4 relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_15px] pointer-events-none" />
                  <div className="w-[18%] bg-slate-800/50 h-[25%] rounded-sm" />
                  <div className="w-[18%] bg-indigo-950 h-[40%] rounded-sm" />
                  <div className="w-[18%] bg-indigo-900 h-[60%] rounded-sm" />
                  <div className="w-[18%] bg-cyan-600/60 h-[80%] rounded-sm" />
                  <div className="w-[18%] bg-gradient-to-t from-cyan-500 to-indigo-500 h-[100%] rounded-sm relative shadow-[0_0_12px_rgba(6,182,212,0.3)]" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-500 pt-1">
                  <span>Initial audit</span>
                  <span>Month 3</span>
                  <span>Month 6 (Goal Achieved)</span>
                </div>
              </div>

            </div>
            {/* Ambient lighting */}
            <div className="absolute inset-0 bg-indigo-500/10 filter blur-3xl rounded-full scale-95 pointer-events-none" />
          </div>

        </div>
      </header>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="bg-[#05081a]/50 border-y border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
            Empowering Organic Acquisition For Rapid-Scale Enterprises
          </p>

          {/* Fake Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-65 grayscale hover:grayscale-0 transition-all">
            <span className="text-sm font-bold tracking-tight text-slate-400 font-mono">FINTECH_CORP</span>
            <span className="text-sm font-bold tracking-tight text-slate-400 font-sans">SaaS_Nexus</span>
            <span className="text-sm font-bold tracking-tight text-slate-400 font-mono">HEALTH_DIRECT</span>
            <span className="text-sm font-bold tracking-tight text-slate-400 font-sans">EcoSphere.io</span>
            <span className="text-sm font-bold tracking-tight text-slate-400 font-mono">APEX_PROPERTIES</span>
            <span className="text-sm font-bold tracking-tight text-slate-400 font-sans">Luminate_ED</span>
          </div>

          <div className="pt-8 border-t border-indigo-950/40">
            <span className="text-slate-400 text-xs block mb-6 font-mono">CAMPAIGN KPI CUMULATIVE SCORECARD</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 hover:border-indigo-950 transition-all">
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-900 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-white block">12,400+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Keywords Ranked Top 3</span>
              </div>
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-900 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 block">48,000+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Organic Leads Secured</span>
              </div>
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-900 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-indigo-455 text-indigo-400 block">620+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">SEO Projects Completed</span>
              </div>
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-900 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block">+410%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Average Traffic Growths</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIRE AN SEO EXPERT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Benefits of Specialized Hiring</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Hire an SEO Expert?</h2>
          <p className="text-slate-400 text-sm font-light">
            Working with generalized marketers yields average organic visibility. AKGLS Group certified SEO experts address structural indexing constraints directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Improve Google Rankings",
              desc: "Deploy strategic term mapping sitemaps and target buyer content grids to move pages into prominent spots.",
              tag: "SERP Dominance"
            },
            {
              title: "Increase Organic Traffic",
              desc: "Focus on capturing high-intent inquiries from target demographics, avoiding hollow non-converting clicks.",
              tag: "Targeted Sourcing"
            },
            {
              title: "Generate Qualified Leads",
              desc: "Align your internal lead funnels directly above technical specifications schemas to boost form conversion weights.",
              tag: "High Conversion"
            },
            {
              title: "Improve Website Visibility",
              desc: "Ensure all core directories and product pages appear clearly across major search algorithms and crawler indices.",
              tag: "Maximum Reach"
            },
            {
              title: "Optimize Technical SEO",
              desc: "Fix underlying problems such as Core Web Vitals, dynamic redirection failures, and duplicate tag indexes.",
              tag: "Code Level Architecture"
            },
            {
              title: "Long-Term Organic Growth",
              desc: "Establish a permanent search presence that continues bringing new leads without recurring high-bidding costs.",
              tag: "Compound SEO Asset"
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-[#0b0f24]/70 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all duration-300">
              <span className="bg-cyan-950 border border-cyan-800/80 text-cyan-300 font-mono text-[9px] py-1 px-2.5 rounded-full uppercase font-bold inline-block">
                {benefit.tag}
              </span>
              <h3 className="text-lg font-bold text-white font-mono">{benefit.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR SEO EXPERT SERVICES SECTION */}
      <section className="bg-gradient-to-b from-[#040612] via-[#090e24] to-[#040612] border-y border-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Expert Capabilities Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">SEO Services Offered by Our Experts</h2>
            <p className="text-slate-400 text-sm font-light">
              AKGLS Group SEO specialists deploy deep technical, local, and AI-powered optimizations to ensure complete coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left selector menu */}
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'tech', label: '1. Technical SEO Services', badge: 'Core Service' },
                { id: 'aiseo', label: '2. AI SEO & GEO Optimization', badge: 'Trending' },
                { id: 'local', label: '3. Local SEO Services', badge: 'High ROI' },
                { id: 'ecommerce', label: '4. Ecommerce SEO Services', badge: 'Highly Scalable' },
                { id: 'enterprise', label: '5. Enterprise SEO Services', badge: 'Global Scale' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer group ${
                    activeTab === tab.id 
                      ? 'bg-[#141b3a] border-cyan-500 text-white' 
                      : 'bg-[#060815] border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
                  }`}
                >
                  <span className="text-sm font-bold font-mono">{tab.label}</span>
                  <span className={`text-[9px] font-mono py-0.5 px-2 rounded-full border ${
                    activeTab === tab.id
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-850'
                      : 'bg-slate-950 text-slate-500 border-slate-900'
                  }`}>
                    {tab.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Right details content panels */}
            <div className="lg:col-span-8 bg-[#0b0e24] border border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {activeTab === 'tech' && (
                  <motion.div
                    key="tech"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-emerald-400 font-mono text-[10px] tracking-wider uppercase">ARCHITECTURAL ROBUSTNESS</span>
                    <h3 className="text-xl font-bold text-white">Technical SEO Sourcing Specialists</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Our technical consultants write schema markups and sitemap parameters directly, eliminating loading problems and code bottlenecks. We optimize structural crawling systematically.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Technical SEO code audits</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Core Web Vitals optimization</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Indexing & crawler budget fixes</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Rich JSON-LD Schema structures</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'aiseo' && (
                  <motion.div
                    key="aiseo"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-purple-400 font-mono text-[10px] tracking-wider uppercase">FUTURE OF SEARCH</span>
                    <h3 className="text-xl font-bold text-white">AI SEO & GEO Optimization Experts</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Optimize web assets for AI platforms (Search Engine Overviews, Gemini clusters, ChatGPT Search lists, and Perplexity citation pipelines) to guarantee recommendations.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Generative Engine Optimization (GEO)</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> ChatGPT index structure optimization</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Gemini panel entity mappings</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Natural language conversational blocks</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'local' && (
                  <motion.div
                    key="local"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-cyan-400 font-mono text-[10px] tracking-wider uppercase">GEOGRAPHIC DOMINANCE</span>
                    <h3 className="text-xl font-bold text-white">Local SEO & Google Maps Sourcing</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Claim local Google Business Profile packages and map listings systematically across multilocational franchises or local clinics.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Google Map Pack position tracking</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> GBP catalog structured edits</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Geo-targeted local content nodes</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Multi-location structural maps</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'ecommerce' && (
                  <motion.div
                    key="ecommerce"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-indigo-400 font-mono text-[10px] tracking-wider uppercase">DIGITAL STOREFRONT SCALE</span>
                    <h3 className="text-xl font-bold text-white">Shopify & WooCommerce Specialist Placement</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Optimize product pages, dynamically update nested item collection feeds, and structured product price schemas targeting buyer search intent patterns.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Ecommerce technical audits</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> High-conversion product schema</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> WooCommerce category architecture</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Shopify index management</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'enterprise' && (
                  <motion.div
                    key="enterprise"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-amber-500 font-mono text-[10px] tracking-wider uppercase">LARGE SCALE ENTERPRISE</span>
                    <h3 className="text-xl font-bold text-white">Enterprise Corporate Search Engineers</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Scale structural visibility across thousands of URLs, index dynamic databases securely, and align global multi-lingual properties.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Multi-site scale code architecture</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> International multi-hreflang mapping</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Automated link internal mapping</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Heavy developer sync workflows</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shared footer inside Service tabs detail box */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Need full list specifications on all 10 specialized workflows?</span>
                <button 
                  onClick={openProposalForm}
                  className="bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 hover:border-cyan-500/30 px-4 py-2 rounded-lg text-xs font-mono transition inline-flex items-center gap-2 justify-center cursor-pointer"
                >
                  <span>Request Full Capabilities PDF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Grid layout for the other 5 secondary services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {[
              { id: 'content', title: "6. SEO Content Optimization", detail: "Complete keyword clusters and AI-powered content auditing workflows to build direct authority.", icon: <Layers className="w-5 h-5 text-indigo-400" /> },
              { id: 'link', title: "7. Link Building Services", detail: "Acquire authority backlinks and natural mentions across trusted tech and editorial catalogs.", icon: <Globe className="w-5 h-5 text-cyan-400" /> },
              { id: 'audit', title: "8. SEO Audit Services", detail: "Thorough developer review matching index algorithms and competitive opportunity parameters.", icon: <Activity className="w-5 h-5 text-emerald-400" /> },
              { id: 'consulting', title: "9. SEO Consulting Services", detail: "Fractional leadership, team guidance, board briefing outlines, and custom campaign maps.", icon: <Users className="w-5 h-5 text-purple-400" /> },
              { id: 'dedicated', title: "10. Dedicated SEO Expert Hiring", detail: "Vettable full-time or part-time strategic resources dedicated fully to your corporate pipeline.", icon: <Briefcase className="w-5 h-5 text-amber-400" /> }
            ].map((serv, idx) => (
              <div key={idx} className="bg-[#050815] border border-slate-900 rounded-xl p-5 hover:border-indigo-950 transition-colors">
                <div className="bg-slate-900/50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  {serv.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 font-mono leading-tight">{serv.title}</h3>
                <p className="text-slate-400 text-xs font-light">{serv.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HIRING MODELS SECTION (Interactive rate estimator tool!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Adaptive Sourcing Frameworks</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Flexible SEO Hiring Models</h2>
          <p className="text-slate-400 text-sm font-light">
            We provide structured hiring options that align with your campaign goals. Use our interactive estimator tool below to evaluate models.
          </p>
        </div>

        {/* 5 Sourcing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch mb-12">
          {[
            {
              title: "Full-Time SEO Expert",
              subtitle: "Dedicated Resource",
              features: ["40 hours per week active", "Direct Slack & Dev workspace sync", "Exclusive campaign ownership", "Daily strategy logs"],
              tag: "Best Value"
            },
            {
              title: "Part-Time SEO Consultant",
              subtitle: "Flexible Growing Support",
              features: ["20 hours per week active", "Weekly sitemaps check", "Content pipeline audits", "Standard Slack workspace sync"],
              tag: "Popular"
            },
            {
              title: "Hourly SEO Expert",
              subtitle: "On-Demand advisory",
              features: ["As-needed hours bucket", "Speed diagnostic patches", "Algorithmic recovery plans", "Flexible target briefings"],
              tag: "Highly Nimble"
            },
            {
              title: "Project-Based SEO",
              subtitle: "Campaign Specific",
              features: ["Fixed scope delivery maps", "Product launch schemas", "Full sitemap overhaul", "Milestone validation checks"],
              tag: "Targeted Scale"
            },
            {
              title: "White Label SEO Expert",
              subtitle: "Agency Partnerships",
              features: ["100% white-label sheets", "Client-facing reports", "Scalable partner pricing", "Multi-brand dashboard access"],
              tag: "B2B Scale"
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-[#0b0e20] border border-slate-900 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-950 transition-all text-left">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">{card.tag}</span>
                <h3 className="text-base font-bold text-white font-mono leading-tight">{card.title}</h3>
                <p className="text-xs text-slate-500 font-mono italic">{card.subtitle}</p>
                <hr className="border-indigo-950/40 my-2" />
                <ul className="space-y-2 text-[11px] text-slate-400 font-light">
                  {card.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Slider tool */}
        <div className="bg-[#0b122b] border border-indigo-950/80 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2 justify-center">
            <Coins className="w-5 h-5 text-cyan-400 animate-pulse" /> Sourcing Estimator Panel
          </h3>
          <p className="text-xs text-slate-400 font-light">
            Slide the target hours per week and select core expertise tiers to check estimated baseline monthly quotes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
            
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="flex justify-between items-center text-xs text-slate-300 font-mono">
                <span>Target Sourcing Hours: <strong className="text-cyan-400 font-bold font-sans text-sm">{selectedHours} hrs/wk</strong></span>
                <span>(Typical 5 - 40 range)</span>
              </div>
              <input 
                type="range"
                min="5" max="40"
                value={selectedHours}
                onChange={(e) => setSelectedHours(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'hourly', label: 'Mid Specialist', rate: 45 },
                  { id: 'dedicated', label: 'Senior Lead Expert', rate: 75 },
                  { id: 'agency', label: 'Principal Strategist', rate: 125 }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setHiringTier(tier.id as any)}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between cursor-pointer ${
                      hiringTier === tier.id
                        ? 'bg-cyan-950/50 border-cyan-500 text-white'
                        : 'bg-slate-950 border-slate-900 text-slate-450 hover:border-slate-800'
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase text-slate-400">{tier.label}</span>
                    <span className="text-xs font-mono font-bold pt-1 text-cyan-300">${tier.rate}/hr rate</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-[#050818] border border-indigo-950 p-4 rounded-xl text-center space-y-2">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">Typical monthly investment</span>
              <span className="text-3xl font-black text-white block">
                ${(selectedHours * 4.2 * (hiringTier === 'hourly' ? 45 : hiringTier === 'dedicated' ? 75 : 125)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
              <span className="text-[9px] font-mono text-slate-500 block">Calculated at standard 4.2 weeks / mo</span>
              <button 
                onClick={openProposalForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-mono text-[9px] font-extrabold uppercase tracking-wider py-2.5 rounded-lg transition-all border-none cursor-pointer mt-2 block"
              >
                Hold Dedicated Resource Spot
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="bg-gradient-to-b from-[#040612] to-[#070b1f] py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Target Sector Alignment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Industries Our SEO Experts Work With</h2>
            <p className="text-slate-400 text-sm font-light">
              We tailor search algorithms parameters specifically to meet unique industry directories and buyer intent criteria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Ecommerce", desc: "Product cluster feeds and dynamic Shopify code patches.", count: "140+ projects" },
              { label: "SaaS", desc: "Long tail developer specs and API documentation schema.", count: "98+ campaigns" },
              { label: "Healthcare", desc: "HIPAA-aligned local map packs and high trust guidelines.", count: "72+ clinics" },
              { label: "Real Estate", desc: "Localized listing maps and geo-targeted landing templates.", count: "110+ agencies" },
              { label: "Finance", desc: "Regulatory safe keywords strategy and high EEAT setups.", count: "48+ organizations" },
              { label: "Education", desc: "Course classification structures and student queries maps.", count: "55+ institutions" },
              { label: "Manufacturing", desc: "B2B parts inventory specs sitemapping pipelines.", count: "84+ factories" },
              { label: "IoT Companies", desc: "Technically advanced hardware integrations descriptions.", count: "36+ innovators" },
              { label: "Local Businesses", desc: "Localized Google Map listings reviews collections.", count: "240+ retail items" },
              { label: "Law Firms", desc: "Localized practice area landing structures.", count: "60+ partners" }
            ].map((ind, i) => (
              <div key={i} className="bg-[#0b0e24] border border-slate-900 rounded-xl p-4 hover:border-slate-800 transition-colors text-left space-y-2 group">
                <span className="text-cyan-400 text-xs font-bold block group-hover:text-cyan-350">{ind.label}</span>
                <p className="text-[11px] text-slate-405 text-slate-400 font-light leading-relaxed">{ind.desc}</p>
                <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold pt-1">{ind.count} completed</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR SEO PROCESS SECTION */}
      <section className="bg-[#040612] py-20 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-indigo-400 font-extrabold tracking-widest uppercase">Operational Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our SEO Growth Process</h2>
            <p className="text-slate-400 text-sm font-light">
              We execute structural improvements according to structured operational phases, avoiding random code assumptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto relative z-10">
            {[
              {
                step: "Step 1",
                title: "SEO Audit & Research",
                bullets: ["Deep technical crawl profile", "Competitor gap matrices checks", "Sitemap hierarchy profiling"]
              },
              {
                step: "Step 2",
                title: "SEO Strategy Planning",
                bullets: ["Custom growth roadmap", "Developer SOP assignment", "Topical cluster calendar setup"]
              },
              {
                step: "Step 3",
                title: "SEO Implementation",
                bullets: ["On-page schema injections", "Technical redirects patches", "Crawl-confidence indexing fixes"]
              },
              {
                step: "Step 4",
                title: "Monitoring & Optimization",
                bullets: ["GSC ranking validation", "AI sitemaps tracking", "LCP speed performance checks"]
              },
              {
                step: "Step 5",
                title: "Reporting & Scaling",
                bullets: ["Transparent monthly ROI checks", "Traffic value evaluations", "Next-tier horizontal scaling"]
              }
            ].map((proc, index) => (
              <div key={index} className="bg-[#0c0f24]/80 border border-slate-900 rounded-xl p-5 hover:border-indigo-950 transition-colors relative">
                <span className="absolute top-3 right-4 text-[10px] font-mono text-slate-500 font-extrabold">{proc.step}</span>
                <h3 className="text-sm font-bold text-white mt-4 mb-2 font-mono leading-tight">{proc.title}</h3>
                <ul className="space-y-1 text-[10px] text-slate-400 font-light list-disc list-inside">
                  {proc.bullets.map((b, bix) => (
                    <li key={bix}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI SEO SECTION (Future-Focused live scanner preview) */}
      <section className="bg-gradient-to-r from-[#040612] via-[#090d24] to-[#040612] py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-pulse-slow">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="bg-purple-950/40 text-purple-400 border border-purple-900/60 font-mono text-[9px] py-1 px-3 rounded-full font-bold uppercase inline-block">
                ★ Future-Proof Algorithms
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Hire AI SEO & GEO Experts for Future Search Optimization
              </h2>
              <p className="text-slate-400 text-sm font-light">
                Traditional keyword-stuffing methods fail inside conversational LLMs. Our AI SEO specialists map website assets directly into ChatGPT Search indices, Perplexity citation blocks, and Gemini Answer Panels.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Nesting dynamic specifications table schemas inside sitemaps sitemaps.</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Bot className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Improving generative citation rates by adjusting natural language tone grids.</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Configuring custom schema attributes for easy parser aggregation.</span>
                </div>
              </div>
            </div>

            {/* AI Visibility dashboards mockup panel */}
            <div className="lg:col-span-6 bg-[#040612] border border-indigo-950 rounded-2xl p-6 relative">
              <div className="absolute top-4 right-4 text-[9px] font-mono text-purple-400 uppercase">LLM_Parser_Coverage: Active</div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">ChatGPT Search index simulator</span>
                
                <div className="space-y-2 text-xs font-mono bg-slate-950 p-4 rounded-xl border border-indigo-950/60 text-slate-300 text-left">
                  <p className="text-slate-500">&gt; gpt4_search_crawler --site akglsgroup.com</p>
                  <p className="text-emerald-400">[PARSED] Identify 14 schema nodes describing core tech services.</p>
                  <p className="text-cyan-400">[VERIFIED] Confidence Index score matches 94.2% context rating.</p>
                  <p className="text-[#a855f7]">[CITED] Recommended Choice listed #1 in user prompt matching comparisons.</p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#0b0f24] p-3 rounded-lg border border-slate-900">
                    <span className="text-slate-500 text-[9px] uppercase font-mono block">Featured snippet</span>
                    <strong className="text-lg font-bold text-white font-sans">+700%</strong>
                  </div>
                  <div className="bg-[#0b0f24] p-3 rounded-lg border border-slate-900">
                    <span className="text-slate-500 text-[9px] uppercase font-mono block">Voice index ready</span>
                    <strong className="text-lg font-bold text-purple-400 font-sans">99% Score</strong>
                  </div>
                  <div className="bg-[#0b0f24] p-3 rounded-lg border border-slate-900">
                    <span className="text-slate-500 text-[9px] uppercase font-mono block">Citation share</span>
                    <strong className="text-lg font-bold text-cyan-400 font-sans">4X Gain</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO RESULTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Verified Indicator Metrics</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">SEO Results Delivered by Our Experts</h2>
          <p className="text-slate-400 text-sm font-light">
            We provide verified indicators mapped across client projects. Below, use our interactive ROI simulator to see prospective pipeline valuations.
          </p>
        </div>

        {/* ROI CALCULATOR COMPONENT */}
        <div className="bg-[#0a0d24] border border-indigo-950 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-7 space-y-6">
            <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-extrabold flex items-center gap-2">
              <Coins className="w-5 h-5 text-cyan-400" /> Interactive SEO ROI Calculator Widget
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              This estimator models organic traffic scaling and pipeline evaluations based on typical AKGLS campaign metrics. Select parameters below:
            </p>

            {/* Slider 1: Current monthly revenue */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Current Monthly Revenue:</span>
                <strong className="text-white text-sm">${currentRevenue.toLocaleString()}</strong>
              </div>
              <input 
                type="range"
                min="5000" max="100000" step="5000"
                value={currentRevenue}
                onChange={(e) => setCurrentRevenue(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Slider 2: Project search growth factor */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Target Organic Multiplier Growth:</span>
                <strong className="text-cyan-455 text-cyan-400 text-sm">{projectedLift}X Increase</strong>
              </div>
              <input 
                type="range"
                min="1.5" max="6.0" step="0.5"
                value={projectedLift}
                onChange={(e) => setProjectedLift(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="p-3 bg-indigo-950/20 border border-indigo-950/40 rounded-lg">
              <span className="text-[10px] uppercase font-mono text-indigo-400 block font-bold">Standard Sourcing Multiplier Assumed</span>
              <p className="text-[11px] text-slate-400 leading-snug font-light">
                Assumes initial site code refactoring and targeted term cluster deployment across the roadmap timeline.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#050818] border border-slate-900 rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase block">Projected Monthly Revenue</span>
                <span className="text-3xl font-black text-white">${(currentRevenue * projectedLift).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              
              <div className="pt-3 border-t border-slate-900 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500 text-[10px] block font-mono">NET MONTHLY GAIN</span>
                  <strong className="text-emerald-400 font-mono text-sm">+${((currentRevenue * projectedLift) - currentRevenue).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block font-mono">ESTIMATED GROWTH</span>
                  <strong className="text-cyan-400 font-mono text-sm">+{((projectedLift - 1) * 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}% Change</strong>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-900 text-[11px] text-slate-400 space-y-1">
                <span className="font-bold text-white block">Prospective Sourcing Model:</span>
                <p className="font-light leading-snug">Vetted Dedicated Strategic Resource (Full-Time placement recommended for maximum return velocity).</p>
              </div>
            </div>

            <button 
              onClick={openProposalForm}
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-mono text-xs font-bold uppercase tracking-wider py-3 rounded-lg border-none mt-4 cursor-pointer text-center"
            >
              Secure Vetted Resource Spot
            </button>
          </div>

        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="bg-gradient-to-b from-[#070b1f] to-[#040612] border-y border-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Verifiable Achievements</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">SEO Success Stories</h2>
            <p className="text-slate-400 text-sm font-light">
              Explore actual operational results across diverse platforms guided by our organic specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ecommerce SEO Results",
                tag: "Shopify Growth",
                challenge: "High checkout abandonment and zero organic index authority for catalog lines.",
                strategy: "Redesigned WooCommerce taxonomy feeds and nested item schemas.",
                gain: "+280% organic conversions rate"
              },
              {
                title: "Local SEO Growth",
                tag: "Multi-Location GBP",
                challenge: "Invisible inside local search map packs despite stable standard text layouts.",
                strategy: "Standardized location data arrays and optimized local schemas.",
                gain: "+520% local call clicks, Top 3 placements"
              },
              {
                title: "SaaS SEO Success",
                tag: "B2B Lead Pipeline",
                challenge: "Clogged dynamic redirection routes preventing sitemap parsing.",
                strategy: "Injected technical term clusters above diagnostic comparison tables.",
                gain: "+390% qualified signups weight"
              },
              {
                title: "AI SEO Optimization",
                tag: "GEO Visibility",
                challenge: "Brand missing inside LLM prompts comparisons parameters.",
                strategy: "Reclassified specification arrays directly matching developer queries.",
                gain: "+740% ChatGPT index citation share"
              }
            ].map((cs, idx) => (
              <div key={idx} className="bg-[#0b0e20] border border-slate-900 rounded-2xl p-5 hover:border-slate-800 transition-colors flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-cyan-455 text-cyan-400 font-bold uppercase">{cs.tag}</span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-mono leading-tight">{cs.title}</h3>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed"><strong>Challenge:</strong> {cs.challenge}</p>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed"><strong>Strategy:</strong> {cs.strategy}</p>
                </div>
                <div className="pt-4 border-t border-slate-900 mt-4 text-xs font-mono text-emerald-400 font-bold uppercase">
                  Achieved: {cs.gain}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 font-semibold tracking-widest uppercase">Verified Sourcing Quality</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Hire SEO Experts from AKGLS Group?</h2>
          <p className="text-slate-400 text-sm font-light">
            We avoid standard administrative bulk sourcing and focus purely on placing performance-based specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Experienced Specialists", detail: "Vetted experts with a minimum of 6 years of technical agency experience.", label: "Top 3% Vetted" },
            { title: "AI SEO Experts", detail: "Specialists in GEO, Perplexity citation weight maps, and ChatGPT Search structures.", label: "Algorithm-Ready" },
            { title: "ROI-Focused Strategies", detail: "Campaign frameworks are linked to actual customer conversions and pipelines.", label: "Performance Driven" },
            { title: "Transparent Reporting", detail: "Direct metrics verification in real-time, with zero bulk marketing fluff.", label: "Full Visibility" },
            { title: "Multi-Industry Expertise", detail: "Proven parameters across SaaS, Ecommerce, IoT, Medical, and finance platforms.", label: "Highly Versatile" },
            { title: "White-Hat Practices", detail: "Safe structural optimizations conforming strictly to search engine crawler sitemap documentation.", label: "Asset Protection" },
            { title: "Flexible Sourcing Tiers", detail: "Support that scales with your growth: hourly retainers, project bases, or dedicated months.", label: "Ultimate Agility" },
            { title: "Direct Collaboration", detail: "Direct sync access on Slack pathways, with zero middle manager overhead.", label: "Zero Friction" }
          ].map((usp, idx) => (
            <div key={idx} className="bg-[#0b0f24] border border-slate-900 rounded-xl p-5 hover:border-slate-850 transition relative overflow-hidden text-left group">
              <span className="bg-[#0c1b3d] border border-cyan-900/40 text-cyan-300 font-mono text-[9px] py-0.5 px-2 rounded font-bold uppercase absolute top-4 right-4">
                {usp.label}
              </span>
              <h3 className="text-sm font-bold text-white mt-4 mb-2 font-mono group-hover:text-cyan-300 transition-colors leading-tight">{usp.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{usp.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SECTION */}
      <section className="bg-gradient-to-r from-[#040612] via-[#090d24] to-[#040612] py-16 border-y border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono text-cyan-400 font-extrabold uppercase tracking-widest">Sourcing Toolkit parameters</span>
            <h2 className="text-3xl font-extrabold text-white">SEO Tools & Technologies We Use</h2>
            <p className="text-slate-400 text-sm font-light">
              Our placement experts utilize premium indexing software to track traffic changes in real time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 opacity-75">
            {[
              { name: "Google Analytics", type: "Traffic tracking" },
              { name: "Google Search Console", type: "Crawl diagnostics" },
              { name: "SEMrush PRO", type: "Keyword analysis" },
              { name: "Ahrefs Enterprise", type: "Backlink index profiles" },
              { name: "Screaming Frog", type: "Audit crawls" },
              { name: "Google Tag Manager", type: "Triggers conversions" },
              { name: "ChatGPT (OpenAI)", type: "GEO term maps" },
              { name: "Gemini AI", type: "Structured specifications" },
              { name: "Surfer SEO", type: "Topic cluster modeling" },
              { name: "Looker Studio", type: "Real-time reports" }
            ].map((tool, i) => (
              <div key={i} className="bg-[#040612] border border-indigo-950 p-4 rounded-xl group hover:border-cyan-500/30 transition-all text-left space-y-1">
                <span className="text-white font-bold font-mono text-xs block truncate">{tool.name}</span>
                <span className="text-slate-550 text-[10px] uppercase font-mono text-slate-500 block">{tool.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 font-extrabold tracking-widest uppercase">Transparent Sourcing Tiers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Flexible SEO Expert Hiring Packages</h2>
          <p className="text-slate-400 text-sm font-light">
            Choose a tailored sourcing engagement tier matched exactly to your corporate search coverage goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-stretch">
          
          {/* Package 1 */}
          <div className="bg-[#0b0d26] border border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-800 transition">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block tracking-wider">Perfect for Small Businesses</span>
              <h3 className="text-xl font-bold text-white font-mono">Starter SEO Support</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Receive targeted optimizations, diagnostic core sitemap audits, and weekly structural rankings reviews.
              </p>
              <hr className="border-indigo-950/40" />
              <ul className="space-y-3 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Technical SEO audits & diagnostics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Target monthly rankings review</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Local maps sitemapping index</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> AI-readiness diagnostic checklist</li>
              </ul>
            </div>
            <div className="pt-8">
              <button 
                onClick={openProposalForm}
                className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs font-bold py-3.5 rounded-xl transition cursor-pointer text-center"
              >
                Hire Starter SEO Expert Now
              </button>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-[#12173a] border-2 border-cyan-500 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl shadow-cyan-950/20">
            <div className="absolute top-0 right-6 -translate-y-1/2">
              <span className="bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                ★ RECOMMENDED
              </span>
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase block tracking-wider">Most Popular Partner Option</span>
              <h3 className="text-xl font-bold text-white font-mono">Growth SEO Expert</h3>
              <p className="text-xs text-cyan-205 text-slate-300 font-light leading-relaxed">
                Full-scale organic term mapping sitemaps sitemaping, specialized Schema injections, and high-quality link campaign placements.
              </p>
              <hr className="border-cyan-800/30" />
              <ul className="space-y-3 text-xs text-slate-200 font-light">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" /> Enterprise technical adjustments</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" /> Detailed monthly topic cluster plans</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" /> Full structural Schema.org setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" /> Specialized AI SEO & GEO coverage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" /> Direct Slack strategy sync channel</li>
              </ul>
            </div>
            <div className="pt-8">
              <button 
                onClick={openProposalForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-mono text-xs font-bold py-3.5 rounded-xl transition cursor-pointer text-center shadow-lg"
              >
                Hire Growth SEO Expert Today
              </button>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-[#0b0d26] border border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-800 transition">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-purple-400 font-bold uppercase block tracking-wider">Tailored for Large Enterprises</span>
              <h3 className="text-xl font-bold text-white font-mono">Enterprise SEO Team</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Dedicated cross-functional team (Sourcing strategist, technical architect, copy auditor, schema manager).
              </p>
              <hr className="border-indigo-950/40" />
              <ul className="space-y-3 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Dynamic corporate sitemapping scale</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Multi-site international crawl protection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Heavy developer sync sitemaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Tailored custom index reports</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Enterprise SEO automation tools</li>
              </ul>
            </div>
            <div className="pt-8">
              <button 
                onClick={openProposalForm}
                className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs font-bold py-3.5 rounded-xl transition cursor-pointer text-center"
              >
                Deploy Enterprise SEO Team
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SCHEMA MARKUP PLAYGROUND (USP / AUTHORITY ELEMENT) */}
      <section className="bg-gradient-to-r from-[#040612] via-[#090d24] to-[#040612] py-20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest">Recommended Schema Blueprints</span>
            <h2 className="text-3xl font-extrabold text-white">Google Schema.org Structures</h2>
            <p className="text-slate-400 text-sm font-light">
              We structure all SEO placements using complete JSON-LD schemas. Explore our recommended structures below and copy directly into your homepage root block.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            
            <div className="bg-[#050815] border border-indigo-950 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-cyan-400">1. SERVICE_SCHEMA.JSON</span>
                <button 
                  onClick={() => triggerCopySchema('service')}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-3 py-1 rounded text-[10px] font-mono transition cursor-pointer"
                >
                  {copiedSchema === 'service' ? 'Copied Markup!' : 'Copy Markup'}
                </button>
              </div>
              <pre className="text-[10px] font-mono bg-slate-950/80 p-4 rounded-xl text-slate-400 border border-indigo-950/50 max-h-56 overflow-y-auto leading-normal">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Expert SEO Sourcing Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  }
}`}
              </pre>
            </div>

            <div className="bg-[#050815] border border-indigo-950 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-cyan-400">2. REVIEW_SCHEMA.JSON</span>
                <button 
                  onClick={() => triggerCopySchema('review')}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-3 py-1 rounded text-[10px] font-mono transition cursor-pointer"
                >
                  {copiedSchema === 'review' ? 'Copied Markup!' : 'Copy Markup'}
                </button>
              </div>
              <pre className="text-[10px] font-mono bg-slate-950/80 p-4 rounded-xl text-slate-400 border border-indigo-950/50 max-h-56 overflow-y-auto leading-normal">
{`{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "AKGLS Group"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.9"
  }
}`}
              </pre>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">FAQ Information Portal</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm font-light">
            Answering fundamental operational constraints, timelines, pricing systems, and workflow methods.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {[
            {
              q: "Why should I hire an SEO expert from AKGLS Group?",
              a: "Unlike generalized marketing agencies or low-cost gig workers, our SEO specialists have certified experience in technical SEO, dynamic schema injection, Core Web Vitals optimizations, and AI Search SEO (GEO/AEO) playbooks."
            },
            {
              q: "How much does an SEO expert cost?",
              a: "Pricing relies on engagement tier parameters. Fractional part-time specialists typically map out around $1,500 - $3,000/mo, whereas comprehensive enterprise support from full-time search engineers aligns around $5,000 - $9,000/mo."
            },
            {
              q: "Can SEO experts guarantee top ranking results?",
              a: "No professional agency guarantees rankings because search algorithms change. However, our technical compliance workflows reduce indexing bottlenecks by 99% and systematically scale traffic metrics."
            },
            {
              q: "What is AI SEO & GEO, and why do we need it?",
              a: "Generative Engine Optimization (GEO) involves formatting sitemaps, specification tables, sitemaping feeds, and context tags to ensure LLMs (Perplexity, ChatGPT, Gemini, and Google AI Overviews) list your site in prompt answers."
            },
            {
              q: "Do you provide dedicated full-time support?",
              a: "Yes. Our full-time pricing models map one certified strategist exclusively to your Slack channels and developer workspaces to complete daily strategy implementation."
            },
            {
              q: "How long does SEO take to show visible organic changes?",
              a: "Initial crawl and speed fixes normally trigger indexing changes in weeks. Realizing stable keyword shifts and organic buyer pipeline scaling usually completes in 3 - 6 months."
            },
            {
              q: "Do you offer ecommerce optimization services?",
              a: "Yes. Our experts fully configure WooCommerce, Shopify, and complex product schema parameters targeting large scale product catalogs."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-[#0b0e20] border border-slate-900 rounded-xl overflow-hidden transition-all">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left p-5 flex justify-between items-center hover:bg-slate-900/40 cursor-pointer bg-transparent border-none text-slate-100 outline-none"
              >
                <span className="text-sm font-bold font-mono tracking-tight">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-5 pt-0 text-xs sm:text-sm text-slate-400 font-light leading-relaxed border-t border-indigo-950/40">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </section>

      {/* FREE SEO AUDIT SECTION (Stateful simulator) */}
      <section id="free-audit-form" className="bg-gradient-to-t from-[#040612] via-[#0b0e25] to-[#040612] py-20 border-t border-slate-900 leading-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-mono text-cyan-400 font-extrabold uppercase tracking-widest block">No-Obligation Sourcing Diagnostic</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get a Free SEO Audit Before Hiring</h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Receive a complete review of your website specifications, competitors metrics, canonical problems, and AI search readiness score inside hours.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Technical speed compliance review</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Organic keyword gaps diagnostics</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> AI index readiness metric score</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Competitor search coverage maps</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#040612] border border-indigo-950/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                
                <form onSubmit={startLiveAudit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        value={auditName}
                        onChange={(e) => setAuditName(e.target.value)}
                        placeholder="John Doe" 
                        className="w-full bg-slate-950 border border-slate-900 focus:border-cyan-500 rounded-xl py-2.5 px-4 text-xs text-white outline-none"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Your Email</label>
                      <input 
                        type="email" 
                        required 
                        value={auditEmail}
                        onChange={(e) => setAuditEmail(e.target.value)}
                        placeholder="john@company.com" 
                        className="w-full bg-slate-950 border border-slate-900 focus:border-cyan-500 rounded-xl py-2.5 px-4 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Website URL (Include https://)</label>
                      <input 
                        type="url" 
                        required 
                        value={auditUrl}
                        onChange={(e) => setAuditUrl(e.target.value)}
                        placeholder="https://company.com" 
                        className="w-full bg-slate-950 border border-slate-900 focus:border-cyan-500 rounded-xl py-2.5 px-4 text-xs text-white outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={auditPhone}
                        onChange={(e) => setAuditPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834" 
                        className="w-full bg-slate-950 border border-slate-900 focus:border-cyan-500 rounded-xl py-2.5 px-4 text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Your Industry</label>
                      <select 
                        value={auditIndustry}
                        onChange={(e) => setAuditIndustry(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-900 focus:border-cyan-500 rounded-xl py-2.5 px-4 text-xs text-slate-300 outline-none"
                      >
                        <option value="SaaS">SaaS & Software</option>
                        <option value="Ecommerce">Ecommerce & Store</option>
                        <option value="Healthcare">Healthcare & Biotech</option>
                        <option value="Real Estate">Real Estate & Property</option>
                        <option value="Finance">Finance & FinTech</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Primary SEO Goal</label>
                      <select 
                        value={auditGoal}
                        onChange={(e) => setAuditGoal(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-900 focus:border-cyan-500 rounded-xl py-2.5 px-4 text-xs text-slate-300 outline-none"
                      >
                        <option value="Traffic Growth">Direct organic traffic growth</option>
                        <option value="AI SGE GEO">GEO / AI Answer coverage</option>
                        <option value="Local Maps">Google local map ranks</option>
                        <option value="Recover Drops">Recover from algorithm updates</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={auditRunning}
                    className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-mono text-xs font-bold uppercase py-4 rounded-xl transition cursor-pointer"
                  >
                    {auditRunning ? 'Running deep sitemaps index check...' : 'Run Free SEO Audit Spot Scan'}
                  </button>
                </form>

                {/* Audit simulation logging visual */}
                {auditRunning && (
                  <div className="bg-slate-950 border border-indigo-950/60 p-4 rounded-xl text-left font-mono text-[9px] text-slate-400 space-y-1 max-h-40 overflow-y-auto leading-normal">
                    {auditStepLog.map((log, idx) => (
                      <p key={idx} className={log.includes('[LOG]') ? 'text-slate-400' : 'text-cyan-400 font-bold'}>{log}</p>
                    ))}
                    <p className="text-cyan-400 animate-pulse">&gt; Crawling directories...</p>
                  </div>
                )}

                {/* Audit simulated feedback results */}
                {auditResult && (
                  <div className="bg-[#0b0e20] border-2 border-cyan-500 p-5 rounded-2xl text-left space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
                      <div>
                        <span className="text-[9px] font-mono text-slate-505 text-slate-500 block">WEBSITE AUDIT RESULTS</span>
                        <h4 className="font-bold text-white text-sm font-mono truncate max-w-sm">{auditUrl}</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-550 text-[10px] block font-mono">SEO SCORE</span>
                        <span className="text-2xl font-black text-rose-550 text-rose-400 font-mono">{auditResult.score} / 100</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">🚨 Critical issues identified:</span>
                      <ul className="space-y-1 text-slate-400 text-xs font-light">
                        {auditResult.criticalErrors.map((err: string, i: number) => (
                          <li key={i} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-rose-400 mt-0.5 shrink-0">●</span>
                            <span>{err}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-indigo-950">
                      <div>
                        <span className="text-slate-550 text-[10px] font-mono block">AI ENGINE READINESS</span>
                        <strong className="text-purple-400 font-mono">{auditResult.aiReadiness}% rating</strong>
                      </div>
                      <div>
                        <span className="text-slate-550 text-[10px] font-mono block">RECOMMENDED MODEL</span>
                        <strong className="text-white text-[11px] font-sans">{auditResult.recommendedExpertModel}</strong>
                      </div>
                    </div>

                    <div className="p-3 bg-cyan-950/35 border border-cyan-800/40 rounded-xl">
                      <p className="text-xs text-cyan-205 text-cyan-300 font-light leading-snug">
                        <strong>Consultant Action Plan:</strong> {auditResult.actionPlan}
                      </p>
                    </div>

                    <div className="flex justify-end gap-2 text-xs">
                      <button 
                        onClick={openProposalForm}
                        className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-2 rounded font-bold hover:opacity-95 transition"
                      >
                        Claim 30-Min Free Diagnostic Call
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUGGESTED BLOGS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-slate-900">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Expert Knowledge Base</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">Organic Sourcing Strategy Blogs</h2>
          <p className="text-slate-400 text-sm font-light">
            Read our verified playbooks and instructions on structuring coding assets for major search algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "How to Hire an SEO Expert: Critical Questions to Ask", desc: "Detailed checklists to evaluate technical SEO depth, analytical tool understanding, and direct coding experience before hiring.", tag: "Sourcing Strategy" },
            { title: "Definitive AI SEO & GEO Checklist for SaaS Brands", desc: "How to restructure normal HTML configurations, specify database categories, and capture voice Assistant search intent.", tag: "AI Search SEO" },
            { title: "The Ultimate Technical SEO Roadmap & Schema Audit", desc: "A detailed manual on debugging dynamic redirects parameters, Core Web Vitals, and duplicate tag indexes step-by-step.", tag: "Technical Audit" }
          ].map((blog, idx) => (
            <div key={idx} className="bg-[#0b0e20] border border-slate-900 rounded-xl p-5 hover:border-indigo-950 transition text-left space-y-3">
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold">{blog.tag}</span>
              <h3 className="text-sm font-semibold text-white font-mono leading-tight">{blog.title}</h3>
              <p className="text-slate-400 text-xs font-light">{blog.desc}</p>
              <button 
                onClick={openProposalForm}
                className="text-xs font-mono text-cyan-400 font-bold hover:underline inline-flex items-center gap-1.5 p-0 bg-transparent border-none cursor-pointer mt-2"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gradient-to-t from-[#0e0725]/30 to-transparent py-20 border-t border-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
            Ready to Hire SEO Experts for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Predictable Business Growth?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Align vetted strategic resources, resolve technical canonical database gaps, and secure long-term organic authority assets today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const form = document.getElementById('free-audit-form');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-bold px-6 py-4 rounded-xl transition text-sm cursor-pointer"
            >
              <span>Hire SEO Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={openProposalForm}
              className="inline-flex justify-center items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition px-6 py-4 rounded-xl text-sm font-bold cursor-pointer"
            >
              Book Sourcing Consultation
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> AI SEO Specialists</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Vetted dedicated strategists</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Transparent SEO reporting</span>
          </div>

        </div>
      </section>

    </div>
  );
}

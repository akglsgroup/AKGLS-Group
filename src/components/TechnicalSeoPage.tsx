import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Award, CheckCircle, Database, LineChart, 
  ShieldCheck, AlertTriangle, ChevronRight, Star, Users, Briefcase,
  Search, Code, Share2, FileText, Settings, Layers, Activity, Cpu, 
  Globe, Gauge, Terminal, ChevronDown, Check, Percent, Send, Copy, 
  Laptop, Smartphone, Zap, Server, Shield, Globe2, AlertCircle
} from 'lucide-react';

interface TechnicalSeoPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function TechnicalSeoPage({ onBackToHome, openProposalForm }: TechnicalSeoPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title & Meta simulation
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Technical SEO Services Company | Website SEO Experts | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Sticky speed test or simulation state
  const [testUrl, setTestUrl] = useState('');
  const [testingStatus, setTestingStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [auditProgress, setAuditProgress] = useState(0);
  const [testResults, setTestResults] = useState({
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
    lcp: '0.0s',
    cls: '0.00',
    inp: '0ms',
    problems: [] as string[]
  });

  // Checklist items
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    crawlability: true,
    indexing: true,
    schema: false,
    mobile: true,
    speed: false,
    security: true,
  });

  // Audit Form States
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    email: '',
    businessType: 'B2B SaaS',
    monthlyTraffic: '10k - 50k'
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  // Active FAQ index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Schema copying indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  // Active tab state for Services
  const [activeServiceTab, setActiveServiceTab] = useState('audit');

  const runDynamicAuditSim = (e: FormEvent) => {
    e.preventDefault();
    if (!testUrl) return;

    setTestingStatus('scanning');
    setAuditProgress(10);

    const intervals = [
      { progress: 25, label: "Crawling website index parameters..." },
      { progress: 50, label: "Evaluating LCP & Core Web Vitals payloads..." },
      { progress: 75, label: "Checking micro-JSON schema entity graph alignments..." },
      { progress: 100, label: "Finalizing PageSpeed insights logs..." }
    ];

    intervals.forEach((step, index) => {
      setTimeout(() => {
        setAuditProgress(step.progress);
        if (step.progress === 100) {
          setTestingStatus('complete');
          // Generate realistic values based on input
          const isHttps = testUrl.startsWith('https://');
          setTestResults({
            performance: Math.floor(Math.random() * 25) + 60, // 60-84
            accessibility: Math.floor(Math.random() * 10) + 85, // 85-95
            bestPractices: Math.floor(Math.random() * 15) + 75, // 75-90
            seo: Math.floor(Math.random() * 20) + 70, // 70-90
            lcp: (Math.random() * 2 + 1.8).toFixed(1) + 's',
            cls: (Math.random() * 0.25 + 0.05).toFixed(2),
            inp: Math.floor(Math.random() * 150 + 100) + 'ms',
            problems: [
              "Uncompressed hero assets detected boosting LCP score",
              "Render-blocking JS styles delaying first paint events",
              !isHttps ? "Force-redirection SSL protocol errors found" : "Some HTTP assets causing mixed content bugs",
              "Missing corporate organization JSON-LD node parameters"
            ].filter(Boolean) as string[]
          });
        }
      }, (index + 1) * 800);
    });
  };

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.website || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const toggleChecklist = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const schemaTemplates = {
    service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Advanced Technical SEO Audits & Core Vitals Repair",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akgls.com"
  },
  "serviceType": "Technical Search Optimization"
}`,
    faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are Core Web Vitals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Core Web Vitals are speed, responsiveness, and visual stability metrics analyzed by Google."
    }
  }]
}`
  };

  const copySchemaText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 2000);
  };

  const serviceCategories = {
    audit: {
      title: "Technical SEO Audits",
      subtitle: "Full-scale crawl health and structural code integrity reviews.",
      desc: "Our leading engineers deploy deeper crawling protocols (Screaming Frog, Sitebulb) to compile a 180+ checkpoint checklist mapping structural errors, redirection loops, canonical gaps, and indexing issues.",
      bullets: [
        "Indexability audit & parameter exclusions review",
        "Redirection loops & trailing slash canonical tests",
        "Structural log auditing checking crawl spikes",
        "Detailed priority roadmap with raw code resolutions"
      ]
    },
    speed: {
      title: "Page Speed & Assets Optimization",
      subtitle: "Accelerating payloads down to instantaneous load-times.",
      desc: "Optimizing DOM elements payload delivery to clear bottlenecks. We compress complex assets into modern AVIF layouts, set static cache parameters, minify stylesheets, and load scripts asynchronously.",
      bullets: [
        "Minification of render-blocking JS bundles",
        "Next-generation WebP & AVIF media conversion",
        "Intelligent server caching & cloud delivery CDN protocols",
        "Critical path stylesheet prioritization strategies"
      ]
    },
    vitals: {
      title: "Core Web Vitals Engineering",
      subtitle: "Aligning visual and timing metrics close to perfect Google 100/100 scores.",
      desc: "Custom layouts require custom sizing standards. We resolve LCP (Largest Contentful Paint) latency, eliminate annoying CLS layout shifts during loading, and resolve Interaction to Next Paint (INP) input lag.",
      bullets: [
        "Eliminate Cumulative Layout Shift (CLS) frames",
        "Preload key typography weights to resolve flash events",
        "Optimize main thread scheduling and idle periods",
        "Resolve Largest Contentful Paint (LCP) server response delays"
      ]
    },
    indexing: {
      title: "Crawl & Index Automation",
      subtitle: "Helping search bots index key files while skipping duplicate parameters.",
      desc: "Structuring clean XML Sitemaps and robust robots.txt instructions. This keeps the crawl budget high for important commercial landing pages while gracefully deindexing dev logs or payment checkout screens.",
      bullets: [
        "Dynamically generated nested XML site index arrays",
        "Advanced customized virtual robots.txt rule trees",
        "Canonical verification routines securing search signals",
        "GSC validation setups tracking index parameters live"
      ]
    },
    schema: {
      title: "Semantic Schema Markup",
      subtitle: "Translating content elements into rich corporate database entities.",
      desc: "We embed advanced, nested JSON-LD schema graphs linked directly to your organization profiles. This forces Google to show rich star snippets, item listings, and citations inside conversational AI frameworks.",
      bullets: [
        "NESTED JSON-LD organization brand schemas",
        "Reviews star rating markup triggering SERP stars",
        "Faceted breadcrumbs arrays aligning directory parameters",
        "Advanced FAQ nested query modules boosting CTR"
      ]
    },
    enterprise: {
      title: "Enterprise Technical SEO Solutions",
      subtitle: "Scalable indexing infrastructure for multi-domain networks.",
      desc: "Tailored schemas, Hreflang multi-regional routing arrays, and server script audits. We safely deploy code templates that systematically optimize millions of paths without individual manual configurations.",
      bullets: [
        "Headless CMS custom architecture integrations",
        "Multi-language structural hreflang alignment maps",
        "Complex database-driven faceted index resolution rules",
        "Weekly automated error scanning monitoring arrays"
      ]
    },
    aiseo: {
      title: "AI Search Bot Optimization",
      subtitle: "Aligning technical indicators with ChatGPT, Gemini and Perplexity.",
      desc: "Conversational engines parse code differently than traditional search. We optimize sitemap structure for AI retrieve bots (like GPTBot, CCBot), wrap statistical claims in strict semantic variables, and build direct citation hooks.",
      bullets: [
        "AI scraper crawlers target-block configuration",
        "Direct citation integration markup placement",
        "Structured statistical data schema block formats",
        "GEO search answering readiness audits"
      ]
    }
  };

  const commonProblems = [
    { title: "Slow Page Loading Speed", metric: "LCP > 4.5s", fix: "Apply AVIF compression and async javascript asset deferred triggers." },
    { title: "Redirection Chains & Loops", metric: "301 -> 302 -> 200", fix: "Flatten routing structures. Create direct single-step 301 rules." },
    { title: "Broken Index Parameters", metric: "Missing Canonical", fix: "Verify self-referential canonical markup is active on index targets." },
    { title: "Dynamic Crawler Waste", metric: "Excessive Budget Use", fix: "Design custom robots.txt exclusions blocking faceted filters directories." },
    { title: "Broken Reviews Snippets", metric: "Schema Warnings", fix: "Re-validate nested schema parameters conforming with newer specifications." },
    { title: "Mobile Layout Displaced", metric: "Touch Targets Close", fix: "Re-align margins and padding nodes using responsive tailwind setups." }
  ];

  const toolsList = [
    { name: "Screaming Frog", cat: "Crawling API", desc: "Detailed localized spidering logs tracking structural link integrity." },
    { name: "Google GSC", cat: "Indexing Audit", desc: "Our direct pipeline inspecting indexing errors and live search placements." },
    { name: "Lighthouse", cat: "Performance Metric", desc: "Raw speed scoring platform analyzing payload sizes and Core Web Vitals." },
    { name: "SEMrush API", cat: "Database Scraping", desc: "In-depth competitor keyword gap scraping logs." },
    { name: "Ahrefs API", cat: "Link Analysis", desc: "Advanced programmatic audit tracking domain authority backlinks metric." },
    { name: "Cloudflare", cat: "Edge Payload", desc: "Speed optimization triggers compressing files instantly at the CDN layer." }
  ];

  const faqs = [
    { q: "What is Technical SEO?", a: "Technical SEO focuses on optimizing your website's underlying code, performance, responsiveness, and architecture so search engines can easily crawl, understand, and index your content." },
    { q: "Why are Core Web Vitals important for rankings?", a: "Google uses Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint) as a direct ranking factor to ensure websites provide a fast, stable, and responsive user experience." },
    { q: "How long does it take for Technical SEO fixes to show results?", a: "Unlike content changes, technical SEO fixes (like fixing sitemaps, indexing bugs, or server redirects) can show crawling updates in Google Search Console in as little as 3 to 14 days, leading to immediate ranking recovery." },
    { q: "Do you provide monthly reporting?", a: "Yes, we deploy real-time Looker Studio SEO dashboards that connect directly to your Google Search Console, Google Analytics 4, and PageSpeed Insights databases so you can monitor progress continuously." },
    { q: "How does Technical SEO help my business win in AI Search?", a: "Generative AI models scan structured database nodes and tabular metrics to formulate answers. Embedding strict organization schemas and structured structured metadata makes it effortless for AI bots to reference your site as a trusted citation source." }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen relative font-sans">
      
      {/* 📞 STICKY HIGH-CONVERSION ACTIONS BAR */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
        >
          <MessageSquareFill /> Core Technical Chat: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-orange-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-orange-500/20 transition-all font-mono"
        >
          <Phone className="w-4 h-4 text-white animate-bounce" /> Speed Hot Call: {CONTACT_NUMBER}
        </a>
      </div>

      {/* 🚀 GLORIOUS HERO AREA WITH ADVANCED SPEED RUN SIMULATOR */}
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
            
            {/* Left Narrative Text details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-mono">
                <Zap className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span>Advanced Infrastructure Optimization Module</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight">
                Technical SEO Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                  That Drive Speed, <br />Rankings & Security.
                </span>
              </h1>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Fix technical crawl bottlenecks, maximize your indexing budget, secure enterprise server redirects, and optimize Core Web Vitals for Google and Claude/ChatGPT retrievers.
              </p>

              {/* USP Checklist indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-bold text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Core Web Vitals Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>AI Retrieval Bot Schema Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Server-Level Load Optimizers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Looker Live Health Dashboards</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="#free-technical-audit-portal"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Get Free Technical Audit <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-indigo animate-pulse" /> Book Free Code Consultation
                </a>
              </div>

            </div>

            {/* Right: SPEED TESTER SIMULATOR DASHBOARD WIDGET */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-800 shadow-2xl text-left relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-4">
                  <div className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-400">COGNITIVE CODE ANALYZER</span>
                  </div>
                  <span className="text-[9px] bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded px-2 py-0.5 font-bold uppercase tracking-widest leading-none font-mono">
                    LIVE CORE WIDGET
                  </span>
                </div>

                <form onSubmit={runDynamicAuditSim} className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-slate-400 font-extrabold font-mono uppercase tracking-wider mb-2">Input URL to Audit Core Web Vitals:</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Terminal className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input 
                          type="url" 
                          required
                          value={testUrl}
                          onChange={(e) => setTestUrl(e.target.value)}
                          placeholder="https://yourwebsite.com"
                          className="w-full bg-slate-950 border border-slate-805 rounded-xl py-2.5 pl-10 pr-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-indigo"
                        />
                      </div>
                      <button 
                        type="submit"
                        disabled={testingStatus === 'scanning'}
                        className="bg-brand-indigo hover:bg-opacity-90 text-white font-extrabold text-[10.5px] uppercase tracking-wider px-4 rounded-xl shrink-0 transition-colors disabled:opacity-50"
                      >
                        {testingStatus === 'scanning' ? 'Scanning...' : 'Test Speed'}
                      </button>
                    </div>
                  </div>

                  {/* LOADING TRACKER */}
                  {testingStatus === 'scanning' && (
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-[9px] font-mono font-bold text-slate-400">
                        <span>ANALYZING SYSTEM DATA: {auditProgress}%</span>
                        <span className="animate-pulse">LOADING LOGS...</span>
                      </div>
                      <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                        <div className="bg-gradient-to-r from-brand-indigo to-brand-teal h-full transition-all duration-300" style={{ width: `${auditProgress}%` }}></div>
                      </div>
                    </div>
                  )}

                  {/* SCAN COMPLETED RESULTS */}
                  {testingStatus === 'complete' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-4 pt-2"
                    >
                      {/* Metric Circle Scores */}
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="bg-slate-950 p-2 rounded-xl border border-slate-850">
                          <span className="text-[18px] font-black text-emerald-400 block font-mono">{testResults.performance}</span>
                          <span className="text-[8px] text-slate-500 uppercase font-mono font-extrabold">PERF</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-xl border border-slate-850">
                          <span className="text-[18px] font-black text-brand-teal block font-mono">{testResults.accessibility}</span>
                          <span className="text-[8px] text-slate-500 uppercase font-mono font-extrabold">ACC</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-xl border border-slate-850">
                          <span className="text-[18px] font-black text-brand-orange block font-mono">{testResults.bestPractices}</span>
                          <span className="text-[8px] text-slate-500 uppercase font-mono font-extrabold">PRAC</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-xl border border-slate-850">
                          <span className="text-[18px] font-black text-red-400 block font-mono">{testResults.seo}</span>
                          <span className="text-[8px] text-slate-500 uppercase font-mono font-extrabold">SEO</span>
                        </div>
                      </div>

                      {/* Web Vitals Metrics */}
                      <div className="grid grid-cols-3 gap-2 py-1 border-y border-slate-850">
                        <div className="text-center">
                          <span className="text-[10px] text-slate-400 block font-mono">LCP (Paint)</span>
                          <span className="text-xs font-bold text-white font-mono">{testResults.lcp}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] text-slate-400 block font-mono">CLS (Shift)</span>
                          <span className="text-xs font-bold text-white font-mono">{testResults.cls}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] text-slate-400 block font-mono">INP (Interact)</span>
                          <span className="text-xs font-bold text-white font-mono">{testResults.inp}</span>
                        </div>
                      </div>

                      {/* Detected Issues */}
                      <div className="space-y-1">
                        <span className="text-[9px] text-red-400 font-extrabold font-mono uppercase block">▲ DETECTED TRAFFIC BARRIERS:</span>
                        <ul className="text-[9.5px] space-y-1 text-slate-400 pl-3 list-disc font-light">
                          {testResults.problems.map((it, idx) => (
                            <li key={idx}>{it}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <a 
                          href="#free-technical-audit-portal"
                          className="w-full inline-block text-center bg-brand-orange hover:bg-opacity-90 text-white rounded-xl py-2.5 text-[10.5px] font-extrabold uppercase tracking-wide transition-all"
                        >
                          Request Code Resolutions Proposal
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {testingStatus === 'idle' && (
                    <div className="h-40 flex flex-col items-center justify-center text-slate-600 border border-dashed border-slate-850 rounded-2xl p-6 text-center">
                      <Terminal className="w-8 h-8 opacity-25 mb-2 text-slate-400" />
                      <p className="text-[10px] leading-relaxed max-w-xs font-mono">
                        Console ready... Input your URL above to measure Core Web Vitals speed performance simulation.
                      </p>
                    </div>
                  )}

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤝 TRUSTED TRUST LOGOS & RATINGS SECTION */}
      <section className="py-12 bg-[#0a0f1d] border-b border-slate-900/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-1.5">
            <span className="text-[9.5px] text-slate-500 font-black uppercase tracking-widest font-mono">TRUSTED TECHNICAL INFRASTRUCTURE PARTNERS</span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 pt-1 text-slate-400 font-bold font-display text-xs sm:text-sm">
              <span>GOOGLE SEARCH CONSOLE</span>
              <span>SEMRUSH ENTERPRISE APIS</span>
              <span>SCREAMING FROG SPIDER</span>
              <span>CLOUDFLARE SECURE EDGE</span>
              <span>LOOKER ANALYTICS DATASET</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-850 text-left font-mono">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-white font-display block">120+</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">WEBSITES SPEED-OPTIMIZED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-brand-orange font-display block">14,200+</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">INDIVIDUAL CODE ERRORS FIXED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-white font-display block">4.2s Recovery</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">AVERAGE WEBSITE SPEED RECOVERY LIFT</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-brand-teal font-display block">100% Secure</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">SSL SECURITY RIGS DEPLOYED</span>
            </div>
          </div>

        </div>
      </section>

      {/* ❓ WHAT IS TECHNICAL SEO & CRAWLING ROADMAP MAP */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9.5px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                SEO ARCHITECTURE MATRIX
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                What is Website <br />Technical SEO?
              </h2>
              <p className="text-slate-450 font-light text-xs sm:text-sm leading-relaxed">
                Traditional index spiders crawl websites sequentially. If your site speed drops, redirection loops trigger issues, parse code contains errors, or structured schema elements are missing, your pages are skipped. Technical SEO represents the code foundation. It ensures search engine crawlers find and read your target components instantly.
              </p>

              {/* Crawl Flow elements details */}
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-indigo/15 border border-brand-indigo/30 flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4 text-brand-indigo" />
                  </div>
                  <div>
                    <h4 className="font-extrabold font-display text-white text-xs mb-1">Crawlability & Server Responsiveness</h4>
                    <p className="text-slate-400 font-light text-[11.5px] leading-relaxed">Fixing server response time bottlenecks to guarantee swift crawlers pass schedules.</p>
                  </div>
                </div>

                <div className="bg-[#0a0f1d] p-4 rounded-xl border border-slate-850 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-extrabold font-display text-white text-xs mb-1">Rich Entity Schema Architecture</h4>
                    <p className="text-slate-400 font-light text-[11.5px] leading-relaxed">Creating nested JSON-LD graphs linking organization founders to specific assets.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-6">
                <h3 className="text-white font-extrabold font-mono text-[10.5px] uppercase tracking-wider flex items-center gap-2 pb-2.5 border-b border-slate-900">
                  <Activity className="w-4 h-4 text-brand-teal animate-spin" /> Crawl & Indexing Map Visualization
                </h3>

                {/* Simulated Pipeline Blocks */}
                <div className="space-y-3 font-mono text-[10px]">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850 flex justify-between items-center">
                    <span>1. HOST SERVER HANDSHAKE</span>
                    <span className="text-brand-teal uppercase font-bold text-[8.5px] bg-brand-teal/10 py-0.5 px-2 rounded">
                      SSL/HTTPS Secure
                    </span>
                  </div>
                  <div className="text-center text-slate-600 text-[10px] leading-none">▼</div>
                  <div className="p-3 bg-brand-indigo/10 border border-brand-indigo/40 rounded-xl flex justify-between items-center">
                    <span>2. PAYLOAD CRAWLER PARSE</span>
                    <span className="text-indigo-300 uppercase font-bold text-[8.5px] bg-indigo-500/10 py-0.5 px-2 rounded">
                      robots.txt clear
                    </span>
                  </div>
                  <div className="text-center text-slate-600 text-[10px] leading-none">▼</div>
                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-850 flex justify-between items-center">
                    <span>3. CORE WEB VITALS BENCHMARK</span>
                    <span className="text-brand-orange uppercase font-bold text-[8.5px] bg-brand-orange/10 py-0.5 px-2 rounded">
                      LCP &lt; 2.5s PASS
                    </span>
                  </div>
                  <div className="text-center text-slate-600 text-[10px] leading-none">▼</div>
                  <div className="p-3 bg-emerald-600/10 border border-emerald-500/30 rounded-xl flex justify-between items-center">
                    <span>4. ENTITY MATCH & RICH INDEX</span>
                    <span className="text-emerald-400 uppercase font-bold text-[8.5px] bg-emerald-500/25 py-0.5 px-2 rounded">
                      Schema Graph active
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ SPECIFIC TECHNICAL SERVICES TAB PANEL SECTION */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest bg-brand-indigo/10 border border-brand-indigo/25 px-4 py-1.5 rounded-full">
              CODES & SYSTEMS CHECKLIST
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Advanced Technical SEO Services We Deploy
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Explore our core optimization fields designed to ensure zero index warnings or server connection latency bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-once">
            {/* Tabs List side list selector */}
            <div className="lg:col-span-4 space-y-1.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                {Object.keys(serviceCategories).map((key) => {
                  const s = serviceCategories[key as keyof typeof serviceCategories];
                  const isActive = activeServiceTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveServiceTab(key)}
                      className={`w-full p-4 rounded-xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/10' 
                          : 'bg-[#0c121e] border-slate-850 hover:border-slate-800 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-black uppercase tracking-wider font-mono">{s.title}</span>
                      {key === 'aiseo' && (
                        <span className="text-[8px] bg-brand-purple border border-brand-purple/20 text-white font-bold py-0.5 px-2 rounded-full font-mono">
                          TRENDING
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display panel block */}
            <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-850 p-6 md:p-8 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-1.5">
                    <h3 className="text-white text-xl md:text-2xl font-black font-display">
                      {serviceCategories[activeServiceTab as keyof typeof serviceCategories].title}
                    </h3>
                    <p className="text-brand-orange font-mono text-xs font-bold leading-none uppercase">
                      {serviceCategories[activeServiceTab as keyof typeof serviceCategories].subtitle}
                    </p>
                  </div>

                  <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                    {serviceCategories[activeServiceTab as keyof typeof serviceCategories].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {serviceCategories[activeServiceTab as keyof typeof serviceCategories].bullets.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-slate-350 font-light">{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 border-t border-slate-900 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                  Deployment schedule: Included inside first sprint cycle.
                </span>
                <a 
                  href={`${WHATSAPP_LINK}?text=I%20am%20interested%20in%20${serviceCategories[activeServiceTab as keyof typeof serviceCategories].title}.%20Please%20share%20proposal.`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-brand-indigo hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-lg text-center"
                >
                  Configure For My Site →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ⚠️ COMMON TECHNICAL PROBLEMS WE SOLVE GRID */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1 rounded-full">
              ERROR EXCLUSION INDEX
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Common Technical SEO Problems We Fix
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Ensure search crawling bots have transparent, clean parsing schedules with zero script blockage or visual visual shifts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((prob, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 hover:border-red-500/20 transition-all rounded-3xl p-5 shadow-lg flex flex-col justify-between h-52">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-red-400 font-mono font-bold uppercase tracking-widest flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 animate-pulse" /> TARGET BUG
                    </span>
                    <span className="text-[9.5px] text-slate-500 font-mono font-bold">{prob.metric}</span>
                  </div>
                  <h3 className="text-base text-white font-black font-display leading-tight">{prob.title}</h3>
                </div>
                <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                  <span className="text-[8px] text-slate-500 font-mono uppercase block">REMEDIAL FIX METHOD:</span>
                  <p className="text-slate-400 text-[10.5px] font-light leading-snug">{prob.fix}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🧬 COMPREHENSIVE REPAIR TIME STEP PROCESS TIMELINE */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              SYSTEMATIC DEVELOPMENT SEQUENCING
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Our Technical SEO Process
            </h2>
            <p className="text-slate-405 font-light text-xs sm:text-sm">
              A chronological timeline demonstrating execution milestones. No hacks, no shortcuts—pure engineering-driven optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative font-mono text-xs">
            
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-3">
              <span className="text-[10px] text-brand-orange font-bold uppercase block pb-1.5 border-b border-slate-900">
                01. FULL HEALTH AUDIT
              </span>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Deploying extensive spider crawlers. Checking sitemap loops, console logs, dynamic parameters, and layout performance levels.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-3">
              <span className="text-[10px] text-brand-orange font-bold uppercase block pb-1.5 border-b border-slate-900">
                02. FIX SPRINT PLANNING
              </span>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Re-building a prioritized checklist of crawl blockages. Setting clean schema markup hierarchies matching domain entity goals.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-3">
              <span className="text-[10px] text-brand-teal font-bold uppercase block pb-1.5 border-b border-slate-900">
                03. CODE IMPLEMENTATION
              </span>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Modifying htaccess redirection structures, optimizing payload loading sequences, and deploying secure structured entity codes directly.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-3">
              <span className="text-[10px] text-brand-teal font-bold uppercase block pb-1.5 border-b border-slate-900">
                04. TEST & RE-VALIDATION
              </span>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Running Search Console audits. Testing schema strings within the Structured Data Validator tools and benchmarking mobile layouts.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-3 col-span-1">
              <span className="text-[10px] text-brand-indigo font-bold uppercase block pb-1.5 border-b border-slate-900">
                05. LIVE LOG TRACKING
              </span>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Ongoing tracking of site indexing volumes, indexing issues monitoring, and real-time alert logs regarding newer core algorithm iterations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 📈 CORE WEB VITALS SPOTLIGHT SECTION */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] text-brand-indigo font-mono font-bold uppercase tracking-widest bg-brand-indigo/15 px-4.5 py-1.5 rounded-full">
                SPEED & VISUAL STABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                Core Web Vitals <br />Optimization Services
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Core Web Vitals represent user retention triggers. If dynamic scripts displace layouts, browser indexers automatically penalize organic scores. We audit three core parameters metrics directly:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white font-mono">Largest Contentful Paint (LCP)</span>
                    <span className="text-xs text-brand-teal font-mono font-bold">&lt; 2.5s PASS</span>
                  </div>
                  <p className="text-slate-450 font-light text-[11px] leading-relaxed">
                    How fast the primary container rendering completes. Standard benchmark fixes require optimizing critical stylesheet caches.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white font-mono">Cumulative Layout Shift (CLS)</span>
                    <span className="text-xs text-brand-teal font-mono font-bold">&lt; 0.1 PASS</span>
                  </div>
                  <p className="text-slate-450 font-light text-[11px] leading-relaxed">
                    Visual frames stability check. Prevent elements from shifting unexpectedly while mobile browser users load content models.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white font-mono">Interaction to Next Paint (INP)</span>
                    <span className="text-xs text-brand-teal font-mono font-bold">&lt; 200ms PASS</span>
                  </div>
                  <p className="text-slate-450 font-light text-[11px] leading-relaxed">
                    User input response timings checks. Clear heavy CPU javascript execution queues to avoid lagging clicks.
                  </p>
                </div>
              </div>

            </div>

            {/* Interactive Visual Core Web Vitals Chart */}
            <div className="lg:col-span-7">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-6">
                <h3 className="text-sm font-bold tracking-wider font-mono text-white flex items-center gap-1.5 pb-2.5 border-b border-slate-900">
                  <Activity className="w-4 h-4 text-brand-teal" /> Real-Time Target Performance Index Comparing
                </h3>

                <div className="space-y-4">
                  {/* Performance Comparison Bar 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-semibold">
                      <span>Standard Legacy Website (Average Platform Standard)</span>
                      <span className="text-red-400 font-mono font-bold">Score: 42%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-5 border border-slate-850 rounded-lg overflow-hidden flex">
                      <div className="bg-red-500 h-full text-white font-mono font-bold text-[9px] flex items-center justify-center" style={{ width: '42%' }}>
                        LCP: 4.8s (SLOW)
                      </div>
                    </div>
                  </div>

                  {/* Performance Comparison Bar 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-semibold">
                      <span>AKGLS Infrastructure Deployments (Enterprise standard Framework)</span>
                      <span className="text-brand-teal font-mono font-bold">Score: 98%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-5 border border-slate-850 rounded-lg overflow-hidden flex">
                      <div className="bg-brand-teal h-full text-slate-950 font-mono font-black text-[9px] flex items-center justify-center" style={{ width: '98%' }}>
                        LCP: 0.9s (FAST PASS)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl flex items-center gap-3">
                  <Zap className="w-6 h-6 text-brand-orange animate-pulse shrink-0" />
                  <p className="text-[10.5px] font-light text-slate-400 leading-relaxed">
                    *Our system prioritizes critical styling delivery loops that prevent empty flashes, keeping users on-page and improving immediate checkouts.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ PROGRAMMATIC TECH TOOLS WE INTEGRATE PLATFORM */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-bold uppercase tracking-widest bg-brand-teal/10 px-4 py-1 border border-brand-teal/15 rounded-full">
              TOOLKIT AND METADATA INTEGRATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Advanced Technical Tools We Use
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We leverage leading corporate platform tools to compile authentic dataset statistics rather than estimations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsList.map((tool, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-855 rounded-3xl p-5 space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[8.5px] bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 px-2 py-0.5 rounded font-mono font-bold uppercase">
                    {tool.cat}
                  </span>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
                <h3 className="text-lg text-white font-black font-display leading-tight">{tool.name}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📑 INTERACTIVE CORE TECHNICAL CHECKLIST IN-PAGE */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9.5px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                AUDIT SYSTEM READY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                Your Essential Technical <br />SEO Checklist
              </h2>
              <p className="text-slate-450 font-light text-xs sm:text-sm leading-relaxed">
                Toggle these crucial technical checklist filters below. When complete, download our specialized documentation or enter your credentials so our lead developers can execute an individual crawl review.
              </p>

              <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl flex items-center justify-between gap-4">
                <p className="text-[11px] font-mono text-slate-400 leading-snug">
                  Require our complete 180+ point technical framework documentation catalog?
                </p>
                <a 
                  href="#free-technical-audit-portal"
                  className="bg-brand-orange hover:bg-opacity-90 text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-4 rounded-lg shrink-0"
                >
                  Download Complete PDF File
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-4">
                <h3 className="text-white text-sm font-extrabold font-mono uppercase pb-3 border-b border-slate-900">
                  Checklist Interactive Filters:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { key: "crawlability", label: "Crawlability: robots.txt rules configured" },
                    { key: "indexing", label: "Indexing: Canonical verification loops passed" },
                    { key: "schema", label: "Schema: JSON-LD Entity Graph Embedded" },
                    { key: "mobile", label: "Mobile usability styling optimization checks" },
                    { key: "speed", label: "Speed performance payloads compressed" },
                    { key: "security", label: "HTTPS security header standard setup rules" }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => toggleChecklist(item.key)}
                      className="p-3 bg-slate-950 hover:bg-slate-900 border border-slate-850 rounded-2xl flex items-center gap-2.5 text-left transition-colors cursor-pointer"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        checkedItems[item.key] 
                          ? 'bg-brand-teal border-brand-teal text-slate-950' 
                          : 'border-slate-800'
                      }`}>
                        {checkedItems[item.key] && <Check className="w-3 h-3 text-slate-950 stroke-[3px]" />}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-300 leading-snug">{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl flex items-center justify-between text-[10px] text-slate-500 font-mono uppercase">
                  <span>Selected checks progress:</span>
                  <span className="text-brand-teal font-extrabold">
                    {Object.values(checkedItems).filter(Boolean).length} of 6 completed ({(Object.values(checkedItems).filter(Boolean).length / 6 * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ⚡ AI SEARCH ADVANCED OPTIMIZATION (GEO / AEO COMPARISON) */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full">
                FUTURE-READY TECHNICAL SCHEMA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                AI Search Ready Code optimization
              </h2>
              <p className="text-slate-405 font-light text-xs sm:text-sm leading-relaxed">
                As generative models (Gemini, Claude, GPT-4) index the web to formulate answers, traditional indexing standards fail. Large language models retreive datasets. Wrapping parameters inside explicit schema entities is necessary to trigger organic citations.
              </p>

              {/* Dynamic Code copy panel block */}
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                    <span className="text-[9px] text-slate-500 font-mono font-extrabold uppercase">JSON-LD CLIENT SCHEMA EXAMPLES</span>
                    <button 
                      onClick={() => copySchemaText(schemaTemplates.service, 'service')}
                      className="text-[9px] text-brand-teal font-mono hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {schemaCopied === 'service' ? 'COPIED!' : <><Copy className="w-3 h-3" /> COPY CODE</>}
                    </button>
                  </div>
                  <pre className="text-[8.5px] text-slate-400 font-mono leading-relaxed overflow-x-auto whitespace-pre">
                    {schemaTemplates.service}
                  </pre>
                </div>
              </div>

            </div>

            {/* Traditional SEO vs AI Search Optimized Table */}
            <div className="lg:col-span-7">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-4">
                <h3 className="text-sm font-bold tracking-wider font-mono text-white flex items-center gap-1.5 pb-2.5 border-b border-slate-900">
                  Comparison Matrix (Traditional SEO vs Conversational AI SEO)
                </h3>

                <div className="space-y-3.5 font-sans text-xs">
                  <div className="grid grid-cols-3 pb-2 text-[9px] text-slate-500 font-mono uppercase tracking-wider font-bold">
                    <span>Performance Area</span>
                    <span>Traditional Search Engine</span>
                    <span>Conversational AI engine</span>
                  </div>

                  <hr className="border-slate-850" />

                  <div className="grid grid-cols-3 gap-3">
                    <span className="font-bold text-white">Parser Bots Target</span>
                    <p className="text-slate-400 font-light leading-relaxed">Googlebot & Bingbot crawler schedules.</p>
                    <p className="text-indigo-400 font-bold leading-relaxed">CCBot, GPTBot & Perplexity retrieval arrays.</p>
                  </div>

                  <hr className="border-slate-850" />

                  <div className="grid grid-cols-3 gap-3">
                    <span className="font-bold text-white">Target Syntax Standard</span>
                    <p className="text-slate-400 font-light leading-relaxed">Standard HTML body tags structure.</p>
                    <p className="text-indigo-400 font-bold leading-relaxed">Nested Linked Entity relational graphs (JSON-LD).</p>
                  </div>

                  <hr className="border-slate-850" />

                  <div className="grid grid-cols-3 gap-3">
                    <span className="font-bold text-white">Answering Trigger Goal</span>
                    <p className="text-slate-400 font-light leading-relaxed">Standard 10 blue links ranking listing placements.</p>
                    <p className="text-indigo-400 font-bold leading-relaxed">Direct conversion inline citation list citation.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 CASE STUDIES METRIC SHOWCASE */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1 rounded-full">
              PROVEN RESULTS TRACKING
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Technical Success Stories That Deliver
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Read real metrics detailing performance speed recoveries, ranking gains, and server-level indexing successes from active client networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Case 1 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 shadow-xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] bg-brand-blue/15 border border-brand-blue/35 text-indigo-300 px-2 py-0.5 rounded font-mono font-bold uppercase">
                    SAAS MATRIX PLATFORM
                  </span>
                  <span className="text-[9.5px] text-slate-500 font-mono font-bold">MARCH 2026 BENCHMARK</span>
                </div>
                <h3 className="text-lg text-white font-black font-display leading-tight">
                  LCP timing dropped from 4.8s straight to 1.1s, recovering index ranking indexations.
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  <strong>Challenge:</strong> Heavy, uncompressed dynamically loaded Javascript scripts caused Lighthouse scores to drop below 35%, generating indexing GSC crawler warnings and dropping mobile organic checkouts.
                  <br />
                  <strong>Fix:</strong> Implemented async deferred loading triggers for analytical tools, converted image portfolios into AVIF, and configured customized Cloudflare edge delivery rules.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-850 flex justify-between items-center bg-slate-950/40 p-3 rounded-xl font-mono">
                <div>
                  <span className="text-[8px] text-slate-500 block font-bold leading-none pb-0.5 uppercase">Lighthouse score boost</span>
                  <span className="text-lg font-black text-brand-teal">94/100 pass</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-500 block font-bold leading-none pb-0.5 uppercase">Page speed recovery LIFT</span>
                  <span className="text-lg font-black text-brand-teal">+310% Fast</span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 shadow-xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] bg-brand-teal/15 border border-brand-teal/35 text-brand-teal px-2 py-0.5 rounded font-mono font-bold uppercase">
                    APEX WEAR • ECOM
                  </span>
                  <span className="text-[9.5px] text-slate-500 font-mono font-bold">JANUARY 2026 COMPLETED</span>
                </div>
                <h3 className="text-lg text-white font-black font-display leading-tight">
                  Faceted parameter rules saved over 120,000 monthly crawling requests.
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  <strong>Challenge:</strong> Dynamically generated collection size filtering links created infinite redirection loop trees, exhausting limits before indexing high-value product targets.
                  <br />
                  <strong>Fix:</strong> Structured specific customized robots.txt block parameters, canonicalized duplicate path signals, and dynamically configured review star ratings micro data.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-850 flex justify-between items-center bg-slate-950/40 p-3 rounded-xl font-mono">
                <div>
                  <span className="text-[8px] text-slate-500 block font-bold leading-none pb-0.5 uppercase">CRAWL SPIDER EFFICIENCY</span>
                  <span className="text-lg font-black text-brand-orange">Pass saved: 4x</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-500 block font-bold leading-none pb-0.5 uppercase">Organic index recovered</span>
                  <span className="text-lg font-black text-brand-orange">+112% indexed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🙋 FAQ ACCORDIONS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-[10px] text-slate-450 font-mono font-bold uppercase tracking-widest bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800">
              KNOWLEDGE GATE DATABASE
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We compile explanations on complex systems rules. Explore our immediate insights database.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center cursor-pointer hover:bg-slate-900 transition-colors"
                  >
                    <span className="text-sm font-black text-white font-display">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <p className="p-5 pt-0 text-slate-400 font-light text-xs sm:text-sm leading-relaxed border-t border-slate-900/60">
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

      {/* 📬 FREE DETAILED CODE AUDIT FORM INTAKE LINK */}
      <section id="free-technical-audit-portal" className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <span className="text-brand-orange font-mono text-[9.5px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20 self-start">
                FREE DIAGNOSTIC CHECK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                Request a Free <br />Technical SEO Audit
              </h2>
              <p className="text-slate-405 font-light text-xs sm:text-sm leading-relaxed">
                Provide your structural website credentials or domains name below. Our core developers will analyze your index performance payloads, build a detailed sitemap diagram report, search for schema issues, and export customized code suggestions directly to your email.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span className="font-light">Payload Timing Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span className="font-light">Crawl Error Lists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span className="font-light">Schema Integrity Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span className="font-light">AI SEO Readiness Metrics</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 md:p-8 shadow-2xl">
                {auditSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <CheckCircle className="w-16 h-16 text-brand-teal mx-auto" />
                    <h3 className="text-2xl font-black text-white font-display">Technical Request Queued</h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed max-w-sm mx-auto">
                      Thank you. We have scheduled our Screaming Frog crawling logs against your domain url. Expect your comprehensive diagnostic report within 24 working hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleAuditSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-slate-500 font-extrabold font-mono uppercase tracking-wider mb-1.5">Business Name:</label>
                        <input 
                          type="text" 
                          required
                          value={auditForm.name}
                          onChange={(e) => setAuditForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Acme Inc."
                          className="w-full bg-slate-950 border border-slate-805 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 font-extrabold font-mono uppercase tracking-wider mb-1.5">Target Website URL:</label>
                        <input 
                          type="url" 
                          required
                          value={auditForm.website}
                          onChange={(e) => setAuditForm(prev => ({ ...prev, website: e.target.value }))}
                          placeholder="https://acme.com"
                          className="w-full bg-slate-950 border border-slate-805 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-slate-500 font-extrabold font-mono uppercase tracking-wider mb-1.5">Business Email Address:</label>
                        <input 
                          type="email" 
                          required
                          value={auditForm.email}
                          onChange={(e) => setAuditForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="growth@acme.com"
                          className="w-full bg-slate-950 border border-slate-805 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 font-extrabold font-mono uppercase tracking-wider mb-1.5">Business Type Category:</label>
                        <select
                          value={auditForm.businessType}
                          onChange={(e) => setAuditForm(prev => ({ ...prev, businessType: e.target.value }))}
                          className="w-full bg-slate-950 border border-slate-805 rounded-xl py-3 px-4 text-xs text-slate-200 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo font-mono"
                        >
                          <option value="B2B SaaS">B2B SaaS Portal</option>
                          <option value="Ecommerce">Ecommerce Shop</option>
                          <option value="Healthcare">Healthcare Clinics Net</option>
                          <option value="Enterprise Platform">Enterprise Website Network</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-500 font-extrabold font-mono uppercase tracking-wider mb-1.5">Current Est. Monthly Traffic:</label>
                      <select
                        value={auditForm.monthlyTraffic}
                        onChange={(e) => setAuditForm(prev => ({ ...prev, monthlyTraffic: e.target.value }))}
                        className="w-full bg-slate-950 border border-slate-805 rounded-xl py-3 px-4 text-xs text-slate-200 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo font-mono"
                      >
                        <option value="0k - 10k">&lt; 10,000 monthly hits</option>
                        <option value="10k - 50k">10,000 - 50,000 monthly hits</option>
                        <option value="50k - 200k">50,000 - 200,000 monthly hits</option>
                        <option value="200k+">200,000+ monthly hits</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all"
                      >
                        Queue Free Technical crawling Scan Now!
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 BLOG SECTION WITH RELEVANT GUIDES REFERENCE */}
      <section className="py-20 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-450 font-mono font-bold uppercase tracking-widest bg-slate-950 px-4.5 py-1.5 border border-slate-850 rounded-full">
              LATEST EXPERT INSIGHTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Recommended Technical SEO Guides
            </h2>
            <p className="text-slate-405 font-light text-xs sm:text-sm">
              We compile explanations on complex systems rules. Explore our immediate insights resource.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-indigo/35 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] text-brand-orange font-mono font-bold uppercase tracking-widest">PERFORMANCE GUIDE</span>
                <h3 className="text-sm font-black text-white leading-snug">The Complete 2026 Core Web Vitals Optimization Checklist</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">Discover specific strategies optimizing Largest Contentful Paint payload sizes and CLS frame layouts.</p>
              </div>
              <a href="#audit-quiz" onClick={onBackToHome} className="text-[10px] text-brand-teal font-mono hover:underline block pt-2">READ ARTICLE →</a>
            </div>

            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-indigo/35 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] text-brand-teal font-mono font-bold uppercase tracking-widest">SCHEMA CODING</span>
                <h3 className="text-sm font-black text-white leading-snug">Structuring Relational JSON-LD Schema Entity Graphs</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">A walkthrough explaining nested organization markup rules that trigger Google rich visual snippet placements.</p>
              </div>
              <a href="#audit-quiz" onClick={onBackToHome} className="text-[10px] text-brand-teal font-mono hover:underline block pt-2">READ ARTICLE →</a>
            </div>

            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-indigo/35 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] text-brand-purple font-mono font-bold uppercase tracking-widest">AI CRAWLING RETRIEVAL</span>
                <h3 className="text-sm font-black text-white leading-snug">Optimizing Indexing Rules for Generative Engine Scrapers</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">A detailed blueprint outlining crawl budget management protocols designed for Apple/Gemini search spiders.</p>
              </div>
              <a href="#audit-quiz" onClick={onBackToHome} className="text-[10px] text-brand-teal font-mono hover:underline block pt-2">READ ARTICLE →</a>
            </div>
          </div>

        </div>
      </section>

      {/* 🛑 CORE PERSISTENT FINAL ACTION HERO SPLASH */}
      <section className="py-24 bg-[#05070a] relative text-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <h2 className="text-3xl md:text-5.5xl font-black font-display text-white tracking-tight leading-tight">
            Ready to Fix Your Technical <br />SEO Indexing Bottlenecks?
          </h2>

          <p className="text-slate-400 font-light text-xs sm:text-sm max-w-xl mx-auto">
            Contact our dedicated specialized developers. No dynamic redirection loops left unsolved, no unoptimized payloads left compressed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#free-technical-audit-portal"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shrink-0 transition-transform hover:-translate-y-0.5 shadow-lg"
            >
              Request Free Code Audit
            </a>
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
              className="bg-slate-950 hover:bg-slate-900 border border-slate-850 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-colors"
            >
              Consult with Technical Lead
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10.5px] font-mono text-slate-500 font-bold uppercase pt-4">
            <span>✓ No Long-Term Strict Contracts</span>
            <span>✓ 100% Transparent Technical Rigs</span>
            <span>✓ Veteran Certified Developers Team</span>
          </div>

        </div>
      </section>

    </div>
  );
}

// Internal icons helper for WhatsApp Icon
function MessageSquareFill() {
  return (
    <svg 
      className="w-4 h-4 fill-current mr-0.5" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.453L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.452 5.424 0 9.835-4.417 9.838-9.848.002-2.63-1.018-5.1-2.872-6.958C16.578 1.99 14.108.974 11.998.974c-5.43 0-9.843 4.417-9.846 9.849 0 1.62.453 3.2 1.311 4.6l.287.469-1.01 3.69 3.79-.993.427.253z" />
    </svg>
  );
}

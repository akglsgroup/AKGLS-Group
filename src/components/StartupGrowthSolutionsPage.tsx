import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Film, Heart, Share2,
  Building2, Landmark, GraduationCap, Truck, Stethoscope, Factory, ShoppingCart, 
  Laptop, Layout, Paintbrush, ArrowUpRight, HelpCircle as HelpIcon, Layers3, Rocket,
  Lightbulb, ChevronRight, Play, LineChart, ZapOff, Minimize2, CheckSquare
} from 'lucide-react';

interface StartupGrowthSolutionsPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS & AI Startup Growth Solutions",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "AI-powered customer acquisition, product-led growth hacking, high-intent lead generation, search indexation strategies, and brand positioning models for high-growth startups."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is growth hacking for startups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Growth hacking involves combining creative marketing channels, conversion optimization, database insights, and rapid engineering tests to scale client acquisition with minimal overhead."
      }
    }
  ]
}`
};

export default function StartupGrowthSolutionsPage({ onBackToHome, openProposalForm }: StartupGrowthSolutionsPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Startup Growth Solutions | Startup Marketing & Scaling Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Startup CAC and Growth ROI Calculator States
  const [currentMrr, setCurrentMrr] = useState<number>(15000);
  const [visitorTraffic, setVisitorTraffic] = useState<number>(20000);
  const [conversionRate, setConversionRate] = useState<number>(1.2);
  const [customerLtv, setCustomerLtv] = useState<number>(120); // Average LTV of SaaS/D2C customers
  
  const [growthOutputs, setGrowthOutputs] = useState({
    currentNewSignups: 240,
    currentNewRevenue: 28800,
    optimizedNewSignups: 540,
    optimizedNewRevenue: 64800,
    mrrGrowth: 36000,
    projectedTotalMrr: 51000
  });

  // Calculate parameters on change
  useEffect(() => {
    const currentNewSignups = Math.round(visitorTraffic * (conversionRate / 100));
    const currentNewRevenue = currentNewSignups * customerLtv;

    // Optimized scenario (usually improves absolute conversion rate by 1.5% or 2.5x traffic conversion via AKGLS engineering)
    const optimizedConvRate = Math.min(5.0, parseFloat((conversionRate * 2.25).toFixed(2)));
    const optimizedNewSignups = Math.round(visitorTraffic * (optimizedConvRate / 100));
    const optimizedNewRevenue = optimizedNewSignups * customerLtv;
    const mrrGrowth = optimizedNewRevenue - currentNewRevenue;
    const projectedTotalMrr = currentMrr + mrrGrowth;

    setGrowthOutputs({
      currentNewSignups,
      currentNewRevenue,
      optimizedNewSignups,
      optimizedNewRevenue,
      mrrGrowth,
      projectedTotalMrr
    });
  }, [currentMrr, visitorTraffic, conversionRate, customerLtv]);

  // Visualizing custom scaling workflows
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'acquisition' | 'retention' | 'organic'>('acquisition');

  // FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => {
      setSchemaCopied(null);
    }, 1800);
  };

  // Consultation state
  const [auditForm, setAuditForm] = useState({
    startupName: '',
    websiteUrl: '',
    industry: 'SaaS Startups',
    challenges: '',
    email: '',
    phone: '',
  });
  const [auditFormSubmitted, setAuditFormSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.startupName || !auditForm.email || !auditForm.websiteUrl) return;
    setAuditFormSubmitted(true);
  };

  const startupIndustries = [
    { title: "SaaS Startups", desc: "Interactive growth loops, personalized trial onboarding, product-led SEO keyword indices, and high-intent sales demo triggers." },
    { title: "AI Startups", desc: "Prominent API schema configuration, conversational search optimization (GEO), clean user comparison sheets, and interactive tool previews." },
    { title: "Fintech Startups", desc: "Highest-grade security badge placements, localized compliance layout blocks, loan/savings dynamic calculators, and simplified lead capture." },
    { title: "HealthTech Startups", desc: "Patient trust indicators, HIPAA alignment disclosures, specialized doctor review loops, and secure patient intake forms." },
    { title: "EdTech Startups", desc: "Interactive course preview grids, gamified pricing modals, bulk school/enterprise pricing calculators, and video trial snippets." },
    { title: "Ecommerce Startups", desc: "High-volume checkout templates, custom Liquid configurations, mobile-first product builders, and recurring subscriptions setups." },
    { title: "IoT Startups", desc: "Physical item spec tables, high-quality visual showcases, developer-ready API docs tabs, and dynamic hardware sizing configurations." },
    { title: "D2C Brands", desc: "Aesthetic high-contrast color pairings, automated cart retention draws, optimized WhatsApp checkouts, and clean loyalty referral widgets." },
    { title: "Marketplace Platforms", desc: "Dual-sided onboarding checklists, regional demand-supply matches cards, high-performance local searches, and reviews aggregation layers." }
  ];

  const ourGrowthServices = [
    {
      title: "1. Startup Growth Marketing",
      badge: "⭐ Core Service",
      desc: "Comprehensive positioning strategies across all digital touchpoints. We build structural client acquisition models, optimize customer journeys, and run rapid commercial testing.",
      outcomes: "Accelerates early user traction with clean, budget-conscious customer acquisition models built for scalable performance."
    },
    {
      title: "2. Strategic Startup SEO Services",
      badge: "Organic Compounder",
      desc: "Technical SEO blueprints, semantic collection clusters, high-speed speed optimization sweeps, structured indexable articles, and product-led content designs.",
      outcomes: "Drives free transactional pipeline traffic to your pricing nodes with permanent organic listings."
    },
    {
      title: "3. Future-Ready AI SEO & GEO",
      badge: "Trending Service",
      desc: "Optimize your corporate documentation, articles, and product specifications for ChatGPT, Gemini, Claude, and Perplexity conversational search models.",
      outcomes: "Secures premium visibility in AI-generated answers, cementing product alignment before competitor models adapt."
    },
    {
      title: "4. Brand Positioning & Identity",
      badge: "Market Challenger",
      desc: "Custom high-contrast color scheme definitions, elegant typography selection, unique startup storytelling scripts, and visual brand assets.",
      outcomes: "Lifts early user validation scores and establishes credible enterprise-level authority in crowded niches."
    },
    {
      title: "5. Startup PPC & Paid Advertising",
      badge: "Acquisition Engine",
      desc: "Segmented Google Search, high-retargeting Meta Ads, and hyper-targeted B2B LinkedIn Lead Generation. Designed for rapid customer testing loops.",
      outcomes: "Yields predictable user influxes with strictly structured CPA bounds to guard early capital reserves."
    },
    {
      title: "6. SaaS & Product Growth Optimization",
      badge: "Product-Led Scaling",
      desc: "Interactive trial onboarding wizards, automated retention logs, user activity milestones visualizers, and conversion audit maps.",
      outcomes: "Minimizes registration churn and turns simple trial signups into recurring contract advocates."
    },
    {
      title: "7. High-Converting Landing Page Architecture",
      badge: "Conversion Engine",
      desc: "Polished single-screen landing configurations built entirely with fast lightweight react/motion code. Ultra-quick mobile responsiveness markers.",
      outcomes: "Converts hard-earned visitors into qualified sales contacts at 4x industry index rates."
    },
    {
      title: "8. Automated Startup Lead Generation",
      badge: "Pipeline Multiplier",
      desc: "Connect CRM pipelines (HubSpot, Salesforce, Pipedrive), install automated behavior-targeted email drip systems, and build automated booking popups.",
      outcomes: "Feeds sales calendars around the clock without demanding manual intervention from early engineering teams."
    },
    {
      title: "9. Founder Branding & Social Growth",
      badge: "Authority Catalyst",
      desc: "Personalized LinkedIn and Twitter/X storytelling logs, community building frameworks, and systematic founder thought-leadership content curation.",
      outcomes: "Builds a permanent, organic, high-trust circle of potential users and industry stakeholders."
    },
    {
      title: "10. GTM Strategy & Strategic Consulting",
      badge: "Investor Aligned",
      desc: "Interactive competitive audits, precise pricing tiers advisory, Go-To-Market roadmap design, and investor presentation metrics optimization.",
      outcomes: "Aligns your growth goals with investor benchmarks, securing smooth capital acquisition runs."
    }
  ];

  const toolsWeUse = [
    { name: "Google Analytics 4 & Tag Manager", cat: "Attribution & User Flow Analysis" },
    { name: "HubSpot / Salesforce CRM", cat: "B2B Lead Management & Automation" },
    { name: "SEMrush & Ahrefs Pro", cat: "Competitive Intel & Organic Mapping" },
    { name: "Google Ads & PMax", cat: "Search & High-Intent Acquisition" },
    { name: "Meta & LinkedIn Campaign Manager", cat: "Targeted B2C & B2B Lead Acquisition" },
    { name: "Klaviyo & Mailchimp", cat: "Automated User Onboarding Funnels" },
    { name: "ChatGPT & Gemini Developer APIs", cat: "Interactive AI Content & Workflows" }
  ];

  const stepProcess = [
    { step: "01", title: "Discovery & Position Research", desc: "Detailed analysis of competitors, target audience profiles, structural search gaps, and product-market positioning strengths." },
    { step: "02", title: "Funnel Blueprint & AI Integration", desc: "Create interactive conversion path designs, plug in CRM workflows, hook up AI capabilities trackers, and map target PPC channels." },
    { step: "03", title: "Execution & Dynamic Launch", desc: "Deploy high-speed landing configurations, release targeted organic and paid search sprints, and optimize user experience scripts." },
    { step: "04", title: "Conversion Sweeps & Optimization", desc: "Analyze database telemetry logs, scrub slow-loading assets, perform mobile layout adaptations, and boost user acquisition trends." },
    { step: "05", title: "Scale-up & Expand", desc: "Widen high-intent keyword targets, expand into international search indices, and multiply monthly sales outcomes." }
  ];

  const packages = [
    {
      name: "Startup Launch Package",
      desc: "For pre-seed startups looking to secure early customer validation, clear market authority, and highly polished landing systems.",
      elements: ["GTM Growth Blueprints", "Convertible Landing Pages", "Fundamental Technical SEO Setup", "Google Tag Manager Hookup", "30 Days Execution Consulting"],
      cta: "Request Launch Strategy Call"
    },
    {
      name: "Growth Accelerator Program",
      desc: "Our high-impact scaling program. Blends systematic search optimizations (SEO), future-ready AI search ranking, and multi-channel paid ads.",
      elements: ["Advanced SEO with Content Clusters", "AI Search & GEO Optimization", "Google & Meta Paid Campaigns", "HubSpot Auto-Onboarding", "90 Days Retention Tuning"],
      cta: "Claim Advanced Growth Strategy"
    },
    {
      name: "SaaS Scale-Up Enterprise",
      desc: "Enterprise-grade bespoke solutions. Outfitted with custom database sync tools, dedicated CRM specialists, and fully personalized consulting pipelines.",
      elements: ["Product-Led Growth (PLG) Engine", "Full-Funnel Omnichannel Tuning", "Private Conversion Audits", "Custom Schema API Engineering", "Ongoing Growth Advisory SLA"],
      cta: "Schedule Enterprise Scaling SLA"
    }
  ];

  const faqs = [
    { q: "What is the difference between standard digital marketing and Startup Growth Solutions?", a: "Traditional marketing focuses on brand impressions and volume. Startup growth solutions combine conversion audits, lightweight code infrastructure optimization, database insights, paid user retention funnels, and generative AI search indexing to deliver maximum user signups under strict budget bounds." },
    { q: "How long does it take to see positive user metrics?", a: "Paid campaigns (Google/Meta/LinkedIn) generate qualified startup leads inside 7 to 14 days. Organic SEO and future-ready AI search ranking index sequences mature beautifully inside 60 to 90 days, locking in sustainable traffic pipelines." },
    { q: "Why is AI Search Optimization (GEO) critical for modern startups?", a: "Founders and corporate buyers now query ChatGPT, Claude, and Perplexity for software evaluations instead of browsing basic Google listings. GEO structures your documentation schema tags and API references so these LLMs trust and highlight your brand above average models." },
    { q: "Do you integrate directly with our existing product telemetry tools?", a: "Yes. Our team connects standard e-commerce events tracking systems, HubSpot leads synchronization, and database logs (using secure webhook configurations) to keep your financial team aligns." }
  ];

  return (
    <div id="startup-growth-solutions-page" className="bg-[#030610] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Floating Call & Action Bar */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-550/30 transition-all font-mono"
          id="startup-whatsapp-floating-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> Live Founder WhatsApp: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-teal hover:bg-white text-slate-950 p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-brand-teal/20 transition-all font-mono"
          id="startup-phone-floating-bar"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" /> Call Growth Specialist: {CONTACT_NUMBER}
        </a>
      </div>

      {/* TOP HEADER STATUS BAR */}
      <div className="bg-slate-900 border-b border-indigo-950 text-xs py-2.5 px-4 flex justify-between items-center z-20 relative font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping"></span>
          <span>Growth Advisory Services Available</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center"
            id="back-startup-nav"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-350 hover:text-white transition flex items-center space-x-1 font-mono">
            <span className="text-brand-teal">Direct WhatsApp:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION WITH STARTUP LIFETIME CALCULATOR */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#040815] text-white overflow-hidden text-left border-b border-indigo-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-teal/5 bg-opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-505/10 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Text Blocks */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <Rocket className="w-4 h-4 text-brand-teal" />
                <span>AI-Powered Startup Scale-up Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Startup Growth Solutions That Help Startups <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Scale Faster</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Accelerate customer acquisition with performance marketing, future-ready SEO, automated lead generation pipelines, messaging design, and user-retention architectures.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#startup-growth-audit" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-startup-consult-btn"
                >
                  <span>Get Free Startup Growth Audit</span>
                  <ArrowRight className="w-5 h-5 animate-pulse" />
                </a>
                <a 
                  href="#startup-roi-sim shadow" 
                  onClick={() => {
                    const el = document.getElementById('startup-roi-sim');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal" />
                  <span>Launch Growth Projections</span>
                </a>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-indigo-950/50 font-mono text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Dedicated Growth Unit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>SaaS & AI Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Interactive GEO Mapping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Sustained Retention SLA</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Startup Burn, CAC, MRR Simulator */}
            <div className="lg:col-span-12 xl:col-span-5 relative" id="startup-roi-sim">
              <div className="bg-[#0b1022] rounded-3xl p-6 border border-indigo-950/60 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40 mb-5 font-mono">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-bold uppercase font-mono">Startup GTM Projections Engine</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-indigo-900/40 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    RETENTION INTEGRATE
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Current MRR slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black font-mono">Current Base MRR:</span>
                      <span className="text-brand-teal font-black">${currentMrr.toLocaleString()} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="100000" 
                      step="5000"
                      value={currentMrr}
                      onChange={(e) => setCurrentMrr(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Monthly Visitor Traffic */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black font-mono">Monthly Traffic (Visitors):</span>
                      <span className="text-blue-400 font-black">{visitorTraffic.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="150000" 
                      step="5000"
                      value={visitorTraffic}
                      onChange={(e) => setVisitorTraffic(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-blue-400"
                    />
                  </div>

                  {/* Average Conversion Rate slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black font-mono">Acquisition Conversion Rate:</span>
                      <span className="text-indigo-400 font-black">{conversionRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.4" 
                      max="3.0" 
                      step="0.1"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-indigo-500"
                    />
                  </div>

                  {/* Estimated Customer Lifetime Value */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black font-mono">Est. Value of Customer (LTV / Contract):</span>
                      <span className="text-brand-teal font-black">${customerLtv} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="1000" 
                      step="50"
                      value={customerLtv}
                      onChange={(e) => setCustomerLtv(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Outputs */}
                  <div className="bg-slate-950 border border-indigo-950/50 rounded-xl p-4 grid grid-cols-2 gap-4 text-left font-mono">
                    
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Current New Signups</span>
                      <span className="text-base font-black text-rose-400 block">{growthOutputs.currentNewSignups} users</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Current Influx</span>
                      <span className="text-base font-black text-rose-350 text-slate-350 block">${growthOutputs.currentNewRevenue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-955/40 pt-3 border-indigo-950">
                      <span className="text-[9px] text-brand-teal uppercase font-black">AKGLS Signups Proj.</span>
                      <span className="text-base font-black text-brand-teal block">{growthOutputs.optimizedNewSignups} users</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-955/40 pt-3 border-indigo-950">
                      <span className="text-[9px] text-brand-teal uppercase font-black">AKGLS Revenue Influx</span>
                      <span className="text-base font-black text-brand-teal block">${growthOutputs.optimizedNewRevenue.toLocaleString()}</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-indigo-950 flex justify-between items-center bg-indigo-950/20 px-2.5 py-1.5 rounded-lg border border-indigo-900/40 mt-1">
                      <span className="text-[10px] text-slate-300 uppercase font-black">Monthly MRR Addition</span>
                      <span className="text-lg font-black text-emerald-400">+${growthOutputs.mrrGrowth.toLocaleString()} / mo</span>
                    </div>

                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide font-mono">
                    *Based on compounding conversions, GTM messaging optimization, and structured search positioning setups.
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="py-12 bg-[#090e1d]/50 border-b border-indigo-950/50">
        <div className="max-w-7xl mx-auto px-4 select-none">
          <div className="text-center space-y-1 mb-8 font-mono">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold">TRUSTED STARTUP PARTNERS & TRACTION MARKERS</h2>
            <p className="text-[10px] text-slate-500">Accelerated validation scores tracked across Series-A and seed stages.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">45+</span>
              <p className="text-xs text-slate-400 mt-1">Startups Scaled</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">8.9M+</span>
              <p className="text-xs text-slate-400 mt-1">High-Intent Leads Run</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">280%</span>
              <p className="text-xs text-slate-400 mt-1">Average Traffic Lift %</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">$120M+</span>
              <p className="text-xs text-slate-400 mt-1">Investor Capital Secured</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 opacity-85 pt-8 text-slate-400 font-extrabold text-[10px] font-mono">
            <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 bg-brand-teal/5 rounded-full">
              ★ SEED TO SERIES-B MULTIPLIER ALIGNMENT
            </span>
            <span className="border border-indigo-955/30 border-indigo-950 py-1 px-3.5 rounded-full">AI-DRIVEN CUSTOMER ACQUISITION</span>
            <span className="border border-indigo-955/30 border-indigo-950 py-1 px-3.5 rounded-full text-blue-400">GEO INDEXING MATURING COHORTS</span>
          </div>
        </div>
      </section>

      {/* WHAT ARE STARTUP GROWTH SOLUTIONS & CORRESPONDING DICTIONARY */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
              <Lightbulb className="w-4 h-4 text-brand-teal animate-pulse" />
              <span>THE ACQUISITION Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              What Are Startup Growth Solutions?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-mono">
              <p>
                **Startup Growth Solutions** is an aligned marketing, engineering, and semantic framing framework engineered to help early-stage and scaling startups secure positive cash flows fast.
              </p>
              <p>
                Unlike generic agency models that build slow-moving media plans, growth solutions are agile, data-driven vectors designed to optimize the full marketing funnel — from early product-market fit logs to long-term database retention codes.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs">
                AKGLS Group bridges the operational gap between technology and commercial viability. We write fast landing parameters, draft hyper-targeted paid campaigns, map out SEO semantic nodes, and configure your specifications so they rank across major search LLMs.
              </p>
            </div>
          </div>

          {/* Social Lead Flow workflow selector */}
          <div className="lg:col-span-5 bg-[#0b1022] border border-indigo-950/60 p-6 rounded-2xl relative font-mono text-xs">
            
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-indigo-900 pb-3 mb-4">
              Real-Time Dynamic Funnel Workflow
            </h3>

            {/* Workflow Navigation */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {(['acquisition', 'retention', 'organic'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveWorkflowTab(tab)}
                  className={`py-1.5 px-1 text-[10px] font-bold rounded uppercase tracking-wider text-center border cursor-pointer ${
                    activeWorkflowTab === tab 
                      ? 'bg-brand-teal text-slate-950 border-brand-teal' 
                      : 'bg-[#030610] text-slate-400 border-indigo-950/40 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4 text-left min-h-[160px]">
              {activeWorkflowTab === 'acquisition' && (
                <div className="space-y-3">
                  <span className="text-brand-teal uppercase font-black tracking-widest text-[9.5px] block">FAST ATTRIBUTION & LANDING SYSTEMS</span>
                  <p className="text-slate-300">We audit trial user entry forms and clear formatting hurdles with elegant visual landing states. This increases validation scores drastically.</p>
                  <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[11px]">
                    <li>Hyper-targeted search PPC ads</li>
                    <li>Sleek single-screen onboarding pages</li>
                    <li>Form conversion analytics tracking</li>
                  </ul>
                </div>
              )}

              {activeWorkflowTab === 'retention' && (
                <div className="space-y-3">
                  <span className="text-emerald-400 uppercase font-black tracking-widest text-[9.5px] block">CUSTOM EMAIL DRIPS & USER RETENTION</span>
                  <p className="text-slate-300">Convert cold registered signups into active transaction advocates. We program HubSpot webhooks, CRM leads routing, and customer loyalty indicators.</p>
                  <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[11px]">
                    <li>Self-triggering trial user checklist</li>
                    <li>Personalized newsletter sequences</li>
                    <li>Behavioral database triggers integration</li>
                  </ul>
                </div>
              )}

              {activeWorkflowTab === 'organic' && (
                <div className="space-y-3">
                  <span className="text-purple-400 uppercase font-black tracking-widest text-[9.5px] block">ORGANIC LONG-TAIL CLUSTER MAPPING</span>
                  <p className="text-slate-300">Crawl maps structures, responsive schema specifications sheets, and semantic target terms mapped to high-volume directories.</p>
                  <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[11px]">
                    <li>SEO product-led strategy blueprints</li>
                    <li>Systematic crawl budget optimizations</li>
                    <li>ChatGPT & Claude dataset training guides</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-indigo-950 mt-4 text-center">
              <a 
                href="#startup-growth-audit" 
                className="text-[10.5px] text-brand-teal hover:underline font-extrabold flex items-center justify-center gap-1.5"
              >
                <span>Request Custom Pipeline Discovery</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY STARTUP GROWTH STRATEGIES MATTER */}
      <section className="py-20 bg-[#070c1b]/30 border-y border-indigo-950/50">
        <div className="max-w-7xl mx-auto px-4 text-center font-mono">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">MAXIMIZE THE RUNWAY</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Why Startup Growth Strategies Matter</h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Startups do not have decades of capital to experiment. Every campaign must be optimized for cash flows. Clear strategy positions your brand, lowers acquisition costs, and secures long-term sustainability.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-xs">
            <div className="p-6 bg-[#0a0f1f] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-505/10 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fast-Track Validation Loops</h3>
              <p className="text-slate-400 leading-relaxed">Establish reliable target metrics quickly to refine GTM directions and product-market iterations before deploying high capitalization structures.</p>
            </div>

            <div className="p-6 bg-[#0a0f1f] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Meticulous Lead Capture</h3>
              <p className="text-slate-400 leading-relaxed">Systematically capture every drop of paid and organic visitor intent instead of wasting funds on unverified branding activities.</p>
            </div>

            <div className="p-6 bg-[#0a0f1f] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Investor Pitch Ready metrics</h3>
              <p className="text-slate-400 leading-relaxed font-mono">Build pristine, reliable Cohort MRR tables, clean LTV-to-CAC trends, and customer retention datasets tailored to secure venture capital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STARTUP GROWTH SERVICES GRID */}
      <section id="startup-growth-services-grid" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">GROWTH CAPABILITY INDEX</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our Startup Growth Solutions</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            A modular layout designed to scale seed and pre-seed ventures at every level.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ourGrowthServices.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-[#0b1022]/80 border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                    {srv.badge}
                  </span>
                  <span className="text-xs text-slate-500">Service {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition font-sans">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left font-normal">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-indigo-955/20 border-indigo-950 space-y-1 text-left bg-slate-950/40 p-3 rounded-xl">
                <span className="text-[9.5px] font-bold text-slate-400 block tracking-widest mb-1.5 font-mono">OUTCOME METRIC:</span>
                <div className="flex items-center space-x-1.5 text-[11px] text-brand-teal font-extrabold text-left font-mono">
                  <Check className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{srv.outcomes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STARTUP TYPES WE SERVE */}
      <section className="py-20 bg-[#090e1d]/40 border-y border-indigo-950/50 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center font-sans">
              Startup Industries We Work With
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-normal">
              Unique verticals request customized search structures and customer entry pathways. We construct funnels based on real market expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {startupIndustries.map((cf, cIdx) => (
              <div key={cIdx} className="bg-slate-900/60 border border-indigo-950 p-6 rounded-xl space-y-2.5 hover:border-brand-teal/25 hover:scale-102 transition duration-300 text-left">
                <div className="w-2 rounded bg-brand-teal h-2.5"></div>
                <h3 className="text-xs md:text-sm font-bold text-white uppercase">{cf.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {cf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMATIC STARTUP GROWTH PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">OPERATIONAL PIPELINE</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our Startup Growth Process</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            A reliable structure aimed at transforming initial capital definitions into recurring cash flows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {stepProcess.map((spr, pIdx) => (
            <div key={pIdx} className="bg-[#0b1022] border border-indigo-950 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-3xl font-black text-brand-teal block">{spr.step}</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">{spr.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans font-normal">{spr.desc}</p>
              </div>
              <span className="text-[9px] text-slate-600 block pt-3 border-t border-indigo-950">PIPELINE PHASE {pIdx+1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STARTUP LEAD GENERATION HIGHLIGHT SECTION */}
      <section className="py-20 bg-slate-950 text-left font-mono text-xs border-y border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-indigo-50/10 border border-indigo-500/20 px-3.5 py-1 text-blue-400 rounded-full font-bold uppercase text-[9.5px]">
                <Activity className="w-4 h-4 text-blue-400" />
                <span>Attribution Engine Monitor</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                Generate High-Quality Leads & Users for Your Startup
              </h2>

              <p className="text-[13.5px] text-slate-300 font-normal leading-relaxed">
                Stop relying on visual vanity metrics. Our lead routing program sets up real multi-channel acquisitions pipelines, integrates automated target checks, and minimizes checkout leakage logs.
              </p>

              <div className="space-y-3 text-slate-400">
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Interactive Multi-Channel Capture Forms</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Real-Time GA4 Conversion Auditing Logs</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Optimized Trial Checklists & Custom Messaging</span>
                </div>
              </div>
            </div>

            {/* Simulated Live User Acquisition Analytics Dashboard widget */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b1022] border border-indigo-950 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center border-b border-indigo-900 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                    <span className="text-[10px] font-bold text-white uppercase">User Attribution Monitoring Panel</span>
                  </div>
                  <span className="text-[9px] text-brand-teal font-extrabold">LIVE METRICS</span>
                </div>

                <div className="space-y-4 font-mono">
                  
                  {/* Traffic source stats */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-400 uppercase">Paid Target Lead Conversion (LinkedIn Ads):</span>
                      <span className="text-emerald-400 font-bold">4.2% (Avg Index: 1.5%)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[84%]"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-400 uppercase">Organic Search Content Pipeline Value:</span>
                      <span className="text-brand-teal font-bold">$14,500 Saved/mo</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-teal h-full w-[70%]"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-400 uppercase">AI Search Grounding Validation Rate:</span>
                      <span className="text-purple-400 font-bold">92% Reliable Match</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[92%]"></div>
                    </div>
                  </div>

                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-indigo-950 text-slate-400">
                  <p className="italic">
                    “Our monthly MRR additions locked in 4.5x faster. Setting up behavioral triggers in HubSpot and structuring programmatic SEO indices took AKGLS less than 30 days.”
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI-POWERED STARTUP GROWTH SOLUTIONS SECTION (Trending) */}
      <section className="py-20 bg-[#040815] text-left font-mono text-xs border-b border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-1" />
            
            {/* AI Image / Interface Mockup */}
            <div className="lg:col-span-12 xl:col-span-5 relative order-2 xl:order-1">
              <div className="bg-slate-900 border border-indigo-950 p-6 rounded-2xl space-y-3">
                <div className="flex justify-between items-center text-[10px] border-b border-indigo-950/40 pb-2">
                  <span className="text-slate-400 uppercase font-black">AI Search Generator Schema Grounding</span>
                  <span className="text-brand-teal">ACTIVE</span>
                </div>
                
                <div className="bg-slate-950 p-4 rounded-xl space-y-3 font-mono text-[10.5px]">
                  <div className="flex items-center gap-1.5 text-blue-400 font-extrabold uppercase">
                    <Bot className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    <span>Perplexity Engine Indexing Result:</span>
                  </div>
                  <p className="text-slate-300 leading-normal">
                    “Based on verified metadata schemas and technical compliance metrics, **[Your Startup Brand]** ranks as the highly recommended custom platform for modern developers...”
                  </p>
                  <div className="bg-indigo-950/20 px-2 py-1 border border-indigo-900/40 rounded text-[9.5px] text-slate-500 flex justify-between">
                    <span>Target Indexing Verified: YES</span>
                    <span>Dataset Grounding: 98%</span>
                  </div>
                </div>

                <span className="text-[9.5px] text-slate-500 uppercase tracking-wide block text-center pt-2">
                  *Structured AI schema optimizations align databases straight into LLM parameters.
                </span>
              </div>
            </div>

            {/* Copy Content */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-6 order-1 xl:order-2">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1 text-purple-400 rounded-full font-bold uppercase text-[9.5px]">
                <Cpu className="w-4 h-4 text-purple-400 animate-spin" />
                <span>Conversational Search GEO Strategies</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                AI-Powered Growth Solutions for Modern Startups
              </h2>

              <p className="text-[13.5px] text-slate-400 font-normal leading-relaxed">
                Founders often waste thousands of dollars attempting to optimize simple blogs for old crawler programs. Meanwhile, buyers are asking Perplexity or OpenAI directly.
              </p>

              <p className="text-slate-400 leading-normal">
                AKGLS Group custom structures your product definitions, API lists, and customer comparison layouts so AI search engines systematically extract and recommend your brand.
              </p>

              <div className="pt-2">
                <a 
                  href="#startup-growth-audit" 
                  className="bg-[#0b1022] hover:bg-slate-950 border border-indigo-950 text-slate-200 font-bold py-3.5 px-6 rounded-xl transition inline-block text-center cursor-pointer"
                >
                  Request AI GEO Audit Setup
                </a>
              </div>
            </div>

            <div className="lg:col-span-1" />

          </div>
        </div>
      </section>

      {/* STARTUP WEBSITE & PRODUCT EXPERIENCE SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] text-brand-teal uppercase font-black bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded">UX ENGINE DESIGN</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">
              High-Converting Startup Websites & Product Experiences
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
              A gorgeous visual theme fails to convert if early developers leave the interface cluttered or difficult to navigate.
            </p>

            <div className="space-y-4 text-slate-350 text-xs md:text-sm">
              <div className="p-4 bg-[#0a0f1f]/50 border border-indigo-955/20 border-indigo-950 rounded-xl space-y-1">
                <span className="text-white font-extrabold uppercase">Product-Led Design Standards:</span>
                <p className="text-slate-400 font-sans">Visual layouts that reveal core product value metrics inside 3 seconds of load time, reducing page exit rates by 60%.</p>
              </div>

              <div className="p-4 bg-[#0a0f1f]/50 border border-indigo-955/20 border-indigo-950 rounded-xl space-y-1">
                <span className="text-white font-extrabold uppercase">Frictionless Activation Paths:</span>
                <p className="text-slate-400 font-sans">Streamlined form completions, optimized calendar embeddings, and direct conversational help desk modules.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-indigo-950 p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-white uppercase text-[10.5px] border-b border-indigo-950/65 pb-2">Optimal Onboarding UI Blueprint</h3>
              
              <div className="space-y-3 font-sans text-xs text-slate-400">
                <div className="p-3 bg-slate-950 rounded-lg flex items-center justify-between border border-emerald-950/40">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="font-extrabold text-white text-[10px] uppercase font-mono">STEP 1: Demo Sandbox Access</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">0.05s Load</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg flex items-center justify-between border border-brand-teal/20">
                  <div className="flex items-center space-x-2 font-mono">
                    <CheckCircle className="w-4 h-4 text-brand-teal" />
                    <span className="font-extrabold text-white text-[10px] uppercase">STEP 2: Config Integration Webhook API</span>
                  </div>
                  <span className="text-[10px] text-brand-teal">Automated</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg flex items-center justify-between border border-slate-900">
                  <div className="flex items-center space-x-2 font-mono">
                    <CheckCircle className="w-4 h-4 text-slate-600" />
                    <span className="font-extrabold text-white text-[10px] uppercase">STEP 3: Multi-User Cohort Monitoring</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Scheduled</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STARTUP GROWTH CASE STUDIES */}
      <section className="py-20 bg-[#070c1b]/30 border-y border-indigo-950/50 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center font-sans">
              Startup Growth Success Stories
            </h2>
            <p className="text-xs text-slate-405 text-center">
              Real-world examples of validation, acquisition acceleration, and compounding database returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
            
            {/* Case Study 1 */}
            <div className="bg-[#0b1022] border border-indigo-950 p-6 rounded-2xl space-y-4">
              <span className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-extrabold py-1 px-3.5 rounded text-[10px] uppercase tracking-wider block w-max">
                AI SaaS Scaling Case
              </span>
              <h3 className="text-lg font-bold text-white font-sans uppercase">ScribeAI: Compounding GEO Influx</h3>
              
              <div className="space-y-2 text-slate-350 font-sans">
                <p>**Challenge**: Zero ranking indexes across classic developer terms, high paid ad burn rate, and 4.2% trial dropoff.</p>
                <p>**Growth Strategy**: Configured structured LLM dataset schema directories, migrated onboarding wizards to clean single-screen UI modules, and ran high-intent PPC targeted segments.</p>
                <p className="font-bold text-brand-teal font-mono uppercase text-[10px]">+240% Paid conversions • +14k Monthly AI Grounded hits • Series-A Capital Secured</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-[#0b1022] border border-indigo-950 p-6 rounded-2xl space-y-4">
              <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 font-extrabold py-1 px-3.5 rounded text-[10px] uppercase tracking-wider block w-max">
                B2B Fintech Case
              </span>
              <h3 className="text-lg font-bold text-white font-sans uppercase">PayMantle: Lead Optimization Sprint</h3>
              
              <div className="space-y-2 text-slate-350 font-sans">
                <p>**Challenge**: Long enterprise sales cycles, unoptimized corporate landing lists, and empty salesperson schedules.</p>
                <p>**Growth Strategy**: Automated HubSpot webhooks pipelines with live loan savings estimators, configured systematic retargeting, and optimized LinkedIn socialThought outlines.</p>
                <p className="font-bold text-brand-teal font-mono uppercase text-[10px]">+180% Qualified sales leads • $45,000 ad budget Saved • 3.2s load speed boost</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">THE AKGLS DELIVERABLE DIFFERENCE</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Why Choose AKGLS Group?</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            We are not simple brand generalists. We are technical growth architects aligning search metadata directly with your commercial bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-left">
          
          <div className="p-6 bg-[#0b1022] border border-indigo-950 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Startup Growth Specialists</h3>
            <p className="text-slate-400">Our engineers build optimized user onboarding pipelines natively aligned with rapid seed-stage milestones.</p>
          </div>

          <div className="p-6 bg-[#0b1022] border border-indigo-950 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Future-Proof AI Competency</h3>
            <p className="text-slate-400">While competitors are learning classic meta tagging, we structure documentation so Perplexity and Gemini actively suggest your specs.</p>
          </div>

          <div className="p-6 bg-[#0b1022] border border-indigo-950 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider border-b border-indigo-900 pb-2">Complete SLA Transparency</h3>
            <p className="text-slate-400">Regular attribution reports, clear CAC models tracking, and live database telemetry support logs.</p>
          </div>

        </div>
      </section>

      {/* GROWTH TOOLS GRID */}
      <section className="py-16 bg-slate-900/30 border-y border-indigo-950/40 text-left font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold text-center mb-8">E-commerce & Growth Ecosystem Integrations</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toolsWeUse.map((t, idx) => (
              <div key={idx} className="bg-slate-950 border border-indigo-955/20 border-indigo-950 p-4 rounded-xl space-y-1.5 text-center">
                <span className="text-white font-extrabold block uppercase tracking-wider">{t.name}</span>
                <span className="text-[10px] text-slate-500 block">{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED GROWTH PACKAGES CARD SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">FLEXIBLE RETAINER BRACKETS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Flexible Startup Growth Packages</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Structured retainers built to support startups from early MVP launch up to Series-B enterprise scaling loops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-[#0b1022] border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:scale-102 transition duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[9.5px] uppercase font-black text-slate-500 tracking-wider">OPTION {idx+1}</span>
                <h3 className="text-xl font-bold text-white font-sans border-b border-indigo-950 pb-2">{pkg.name}</h3>
                <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans font-normal">{pkg.desc}</p>
                
                <div className="space-y-2 pt-4">
                  <span className="text-[10px] text-brand-teal uppercase font-black tracking-widest block font-mono">DELIVERABLES INCLUDED:</span>
                  <ul className="space-y-1.5 pl-3 list-none">
                    {pkg.elements.map((el, eIdx) => (
                      <li key={eIdx} className="text-[11px] text-slate-300 flex items-center space-x-1.5 font-normal">
                        <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-indigo-950">
                <a 
                  href="#startup-growth-audit" 
                  className="w-full bg-[#030610] hover:bg-slate-950 border border-indigo-905 border-indigo-950 text-slate-200 font-bold py-3 text-xs tracking-wider rounded-xl transition block text-center uppercase"
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEMA RECOMMENDATION ACCORDION PANELS */}
      <section className="py-16 max-w-5xl mx-auto px-4 text-left font-mono text-xs border-t border-indigo-950/45">
        <div className="bg-[#0b1022] border border-indigo-950 rounded-2xl p-6 space-y-6">
          <div className="flex items-center space-x-2 text-brand-teal font-extrabold uppercase">
            <Terminal className="w-4 h-4 text-brand-teal animate-pulse" />
            <span>Developer Schema & Search Microdata Structuring</span>
          </div>

          <p className="text-slate-300">
            For maximum search crawl efficacy, we inject high-intent **Service Schema** and **FAQ schemas** straight into your header templates list. Copy the metadata models below to audit implementation alignments:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service Schema tab */}
            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-indigo-955/30 border-indigo-950 relative">
              <span className="text-[9.5px] text-slate-500 uppercase tracking-widest block font-black">SERVICE SCHEMA MODEL</span>
              <pre className="text-[10px] text-emerald-400 overflow-x-auto p-2 bg-slate-900 rounded font-normal leading-normal select-all">
                {schemaTemplates.service}
              </pre>
              <button 
                type="button"
                onClick={() => performSchemaCopy(schemaTemplates.service, 'service')}
                className="absolute top-2 right-2 bg-indigo-950 hover:bg-indigo-900 border border-indigo-800 text-slate-200 py-1 px-3.5 rounded text-[10px] font-black uppercase transition cursor-pointer"
              >
                {schemaCopied === 'service' ? 'Copied ✓' : 'Copy'}
              </button>
            </div>

            {/* FAQ Schema tab */}
            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-indigo-955/30 border-indigo-950 relative">
              <span className="text-[9.5px] text-slate-500 uppercase tracking-widest block font-black">FAQ SCHEMA MODEL</span>
              <pre className="text-[10px] text-indigo-400 overflow-x-auto p-2 bg-slate-900 rounded font-normal leading-normal select-all">
                {schemaTemplates.faq}
              </pre>
              <button 
                type="button"
                onClick={() => performSchemaCopy(schemaTemplates.faq, 'faq')}
                className="absolute top-2 right-2 bg-indigo-950 hover:bg-indigo-900 border border-indigo-800 text-slate-200 py-1 px-3.5 rounded text-[10px] font-black uppercase transition cursor-pointer"
              >
                {schemaCopied === 'faq' ? 'Copied ✓' : 'Copy'}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SYSTEMATIC FAQS */}
      <section className="py-20 bg-slate-900/10 border-t border-indigo-950/50 max-w-4xl mx-auto px-4 text-left font-mono">
        <h2 className="text-2xl sm:text-3xl font-black text-white text-center font-sans tracking-tight mb-12">
          Frequently Asked Questions About Startup Growth Solutions
        </h2>

        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="border-b border-indigo-950 pb-4">
              <button
                type="button"
                onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-white hover:text-brand-teal transition select-none cursor-pointer"
              >
                <span className="text-xs uppercase md:text-sm font-sans tracking-wide">{f.q}</span>
                <ChevronDown className={`w-4 h-4 text-brand-teal transition-transform ${openFaqIdx === idx ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              
              <AnimatePresence>
                {openFaqIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed font-sans font-normal text-left">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIT REQUEST FORM CONSULTATION */}
      <section id="startup-growth-audit" className="py-20 bg-[#040815] border-t border-indigo-950 max-w-3xl mx-auto px-4 text-left font-mono text-xs">
        <div className="bg-[#0b1022] border border-indigo-950 rounded-3xl p-6 md:p-10 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded border border-brand-teal/20">
              CLAIM YOUR REFUGE BLUEPRINT
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-sans text-center">
              Get a Free Startup Growth Audit
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-center font-sans font-normal">
              Provide your startup parameters below. Our engineering unit will construct a customized organic crawl diagnostics blueprint and GTM analysis list inside 48 business hours.
            </p>
          </div>

          {auditFormSubmitted ? (
            <div className="bg-slate-950 border border-emerald-950/40 p-8 rounded-2xl text-center space-y-4">
              <span className="text-emerald-400 text-3xl font-black block">✓ AUDIT REQUEST LOCKED IND</span>
              <p className="text-slate-300 font-sans">
                Our growth engineering unit has scheduled an organic Crawl diagnostic sweeps sequence for **{auditForm.startupName}** ({auditForm.websiteUrl}). Watch your inbox at **{auditForm.email}** for full specifications reports.
              </p>
              <button 
                type="button"
                onClick={() => setAuditFormSubmitted(false)}
                className="text-brand-teal underline font-bold cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleAuditSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-slate-400 font-bold uppercase block text-[10px]">Startup Name *</label>
                  <input 
                    type="text" 
                    required
                    value={auditForm.startupName} 
                    onChange={(e) => setAuditForm(prev => ({ ...prev, startupName: e.target.value }))}
                    placeholder="e.g. ScribeAI"
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-teal font-sans font-normal"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-slate-400 font-bold uppercase block text-[10px]">Website URL *</label>
                  <input 
                    type="url" 
                    required
                    value={auditForm.websiteUrl} 
                    onChange={(e) => setAuditForm(prev => ({ ...prev, websiteUrl: e.target.value }))}
                    placeholder="https://scribeai.io"
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-teal font-sans font-normal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-slate-400 font-bold uppercase block text-[10px]">Select Niche *</label>
                  <select 
                    value={auditForm.industry} 
                    onChange={(e) => setAuditForm(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-brand-teal font-sans font-normal cursor-pointer"
                  >
                    <option value="SaaS Startups">SaaS Startups</option>
                    <option value="AI Startups">AI Startups</option>
                    <option value="Fintech Startups">Fintech Startups</option>
                    <option value="Healthtech Startups">Healthtech Startups</option>
                    <option value="Consumer Web Startups">Consumer Web Startups</option>
                    <option value="Deep Tech Ventures">Deep Tech Ventures</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-slate-400 font-bold uppercase block text-[10px]">Primary Scale Challenge *</label>
                  <input 
                    type="text" 
                    required
                    value={auditForm.challenges} 
                    onChange={(e) => setAuditForm(prev => ({ ...prev, challenges: e.target.value }))}
                    placeholder="e.g. High cost of ad lead conversions / SEO indexing crawl freezes"
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-teal font-sans font-normal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-slate-400 font-bold uppercase block text-[10px]">Corporate Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={auditForm.email} 
                    onChange={(e) => setAuditForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="founder@scribeai.io"
                    className="w-full bg-slate-950 border border-[#1e1b4b] rounded-lg p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-teal font-sans font-normal"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-slate-400 font-bold uppercase block text-[10px]">Active Contact Number *</label>
                  <input 
                    type="tel" 
                    required
                    value={auditForm.phone} 
                    onChange={(e) => setAuditForm(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (555) 902-1234"
                    className="w-full bg-slate-950 border border-[#1e1b4b] rounded-lg p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-brand-teal font-sans font-normal"
                  />
                </div>
              </div>

              <div className="pt-4 font-sans select-none">
                <button 
                  type="submit" 
                  className="w-full bg-brand-teal hover:bg-white text-slate-950 font-black py-4 rounded-xl transition cursor-pointer flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-mono shadow-lg shadow-brand-teal/10"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Request Custom Growth Blueprint Now</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-indigo-955/20 border-indigo-950/40 text-center font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                <span>✓ Organic Search Crawler Sweeps</span>
                <span>✓ Custom GTM Positioning Analysis</span>
                <span>✓ User Entry Conversion Map</span>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* SUGGESTED RELEVANT BLOG INTRO */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left border-t border-indigo-950/45 font-mono">
        <h3 className="text-xs uppercase tracking-widest text-brand-teal text-center font-extrabold mb-12">Suggested Articles & Startup Curation Logs</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="p-4 bg-slate-900 border border-indigo-950 rounded-xl space-y-2">
            <span className="text-[10px] text-brand-teal uppercase">Curation Log #1</span>
            <h4 className="text-sm font-bold text-white uppercase">Startup Growth Marketing Guide</h4>
            <p className="text-slate-400 font-sans">Learn systematic parameters to drive early cohort validations quickly while conserving early investment funds.</p>
          </div>

          <div className="p-4 bg-slate-900 border border-indigo-950 rounded-xl space-y-2">
            <span className="text-[10px] text-purple-400 uppercase">Curation Log #2</span>
            <h4 className="text-sm font-bold text-white uppercase">SaaS SEO: The Organic Conversion Guide</h4>
            <p className="text-slate-400 font-sans font-normal">How product-led semantic search cluster diagrams rank pricing options and trigger direct trial customer registration flows.</p>
          </div>

          <div className="p-4 bg-slate-900 border border-indigo-950 rounded-xl space-y-2">
            <span className="text-[10px] text-blue-400 uppercase">Curation Log #3</span>
            <h4 className="text-sm font-bold text-white uppercase">AI datasets training guides for GEO visibility</h4>
            <p className="text-slate-400 font-sans">Meticulous specifications formatting rules designed so LLMs like Perplexity pull your software references natively over competing services.</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTIONS BAR */}
      <section className="py-20 bg-gradient-to-b from-[#030610] to-[#010207] text-center border-t border-indigo-950 font-mono">
        <div className="max-w-4xl mx-auto px-4 space-y-8 select-none">
          
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1.5 rounded-full border border-brand-teal/20">
            LIFT YOUR VALUATION LIMITS
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">
            Ready to Scale Your Startup Faster?
          </h2>

          <p className="text-slate-350 max-w-xl mx-auto text-sm md:text-base">
            Partner with dedicated performance architects. Clear away indexing blockages, map target keywords, structure conversational LLM assets, and scale recurring MRR structures.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
            <a 
              href="#startup-growth-audit" 
              className="bg-brand-teal hover:bg-white text-slate-950 font-black px-8 py-4 rounded-xl transition flex items-center justify-center space-x-2 text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>Request Free Growth Audit Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} 
              className="bg-slate-950 border border-indigo-955/35 border-indigo-900 hover:border-brand-teal/30 text-slate-200 font-extrabold px-8 py-4 rounded-xl transition flex items-center justify-center space-x-2 text-xs uppercase"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>Call Direct: {CONTACT_NUMBER}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto text-[10.5px] text-slate-500 uppercase tracking-widest pt-8 border-t border-indigo-955/10 border-indigo-950/40">
            <span>✓ Dedicated Growth Team</span>
            <span>✓ Sustained Valuation Vectors</span>
            <span>✓ AI Search Integrated</span>
            <span>✓ Fully Compliant SLA</span>
          </div>

        </div>
      </section>

    </div>
  );
}

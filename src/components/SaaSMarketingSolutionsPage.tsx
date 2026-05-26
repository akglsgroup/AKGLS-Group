import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Phone, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Share2,
  Building2, Landmark, GraduationCap, Truck, Stethoscope, Factory,
  Laptop, Layout, Paintbrush, ArrowUpRight, Layers3, Rocket,
  Lightbulb, ChevronRight, Play, LineChart, Minimize2, CheckSquare,
  MapPin, Star, MessageCircle, RefreshCw, ShoppingBag, ArrowDownRight, Info,
  DollarSign as PriceIcon
} from 'lucide-react';

interface SaaSMarketingSolutionsPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const saasSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Marketing & Growth Solutions",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "AI-powered SaaS marketing solutions. We deliver product-led growth systems, high-intent SaaS SEO, PPC, demo & trial optimization, and conversion marketing blueprints to accelerate MRR.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD"
  }
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SaaS marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SaaS marketing is a specialized subset of digital marketing focusing explicitly on recurring-revenue subscription models. It coordinates customer acquisition, free-to-paid conversions, product adoption loops, and long-term retention strategies."
      }
    }
  ]
}`
};

export default function SaaSMarketingSolutionsPage({ onBackToHome, openProposalForm }: SaaSMarketingSolutionsPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Set page meta title dynamically
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "SaaS Marketing Solutions | SaaS Growth Marketing Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // SaaS Growth MRR & LTV Calculator States
  const [currentMrr, setCurrentMrr] = useState<number>(15000); // Current Monthly recurring revenue
  const [cacValue, setCacValue] = useState<number>(350); // Customer acquisition cost
  const [arpuValue, setArpuValue] = useState<number>(49); // Average Revenue Per User / mo
  const [trialCount, setTrialCount] = useState<number>(200); // Monthly signups / trials
  const [trialToPaidRate, setTrialToPaidRate] = useState<number>(8); // Conversion percentage

  const calculateSaaSROI = () => {
    // Current state
    const currentNewPayingUsers = Math.round(trialCount * (trialToPaidRate / 100));
    const currentNewMrrAdded = currentNewPayingUsers * arpuValue;
    const currentMarketingSpend = trialCount * cacValue; // spent on capturing trials/users

    // AKGLS Optimized state: We lift trial volume by 1.8x, boost Trial-to-Paid conversion by 1.4x, and lower CAC by 25% (0.75x)
    const optimizedTrials = Math.round(trialCount * 1.8);
    const optimizedTrialToPaidRate = parseFloat((trialToPaidRate * 1.45).toFixed(1));
    const optimizedPayingUsers = Math.round(optimizedTrials * (optimizedTrialToPaidRate / 100));
    const optimizedNewMrrAdded = optimizedPayingUsers * arpuValue;
    const optimizedCac = Math.round(cacValue * 0.75);
    const optimizedSpend = optimizedTrials * optimizedCac;

    const netMrrGrowthBoost = optimizedNewMrrAdded - currentNewMrrAdded;
    const estimatedLtv = Math.round(arpuValue * 30); // Est. 30 months survival
    const ltvToCacRatio = (estimatedLtv / (cacValue || 1)).toFixed(1);
    const optimizedLtvToCac = (estimatedLtv / (optimizedCac || 1)).toFixed(1);

    return {
      currentNewPayingUsers,
      currentNewMrrAdded,
      currentMarketingSpend,
      optimizedTrials,
      optimizedTrialToPaidRate,
      optimizedPayingUsers,
      optimizedNewMrrAdded,
      optimizedCac,
      optimizedSpend,
      netMrrGrowthBoost,
      estimatedLtv,
      ltvToCacRatio,
      optimizedLtvToCac
    };
  };

  const results = calculateSaaSROI();

  // Active industry
  const [selectedSaaSType, setSelectedSaaSType] = useState<number>(0);

  const saasTypes = [
    { name: "AI SaaS Platforms", cases: "+280% Trial Volume Lift", desc: "For LLM layers, developer tools, and image tools. Positioning semantic sitemaps & schema keywords targeted strictly on prompt outputs and real-use solutions.", bg: "from-purple-950 to-indigo-950" },
    { name: "CRM Software", cases: "+190% Live Demos Routed", desc: "For sector-specific pipeline solutions. Optimized for high-intent corporate transactional Google queries and cold target sequencing aimed at operations administrators.", bg: "from-blue-950 to-slate-950" },
    { name: "HR SaaS", cases: "-34% Cost-per-Acquisition (CAC)", desc: "Empowering talent tracking systems. Tailored whitepaper downloads, automated HR newsletters, and optimized Google retargeting lists.", bg: "from-orange-950 to-red-950" },
    { name: "FinTech SaaS", cases: "+4.2x LTV:CAC Multiplier", desc: "High-security invoice, payment, and analytics platforms. Trust score badges, compliance schema markups, and strict, white-glove educational landing page grids.", bg: "from-emerald-950 to-cyan-950" },
    { name: "EdTech SaaS", cases: "+310% Free Registrations", desc: "For learning management frameworks. Focused on organic resource downloads, parent-teacher reviews schemas, and high-frequency blog topic guides.", bg: "from-teal-950 to-emerald-950" },
    { name: "Healthcare SaaS", cases: "44 enterprise clinic deals", desc: "HIPAA-aligned scheduling and telehealth suites. Built around intense secure landing elements, sector expert case studies, and corporate target pitches.", bg: "from-rose-950 to-indigo-950" },
    { name: "Marketing Tools", cases: "+140% Weekly Active adoption", desc: "For email sequencers and visual dashboards. Optimized around product-led growth (PLG) micro-onboarding states and self-serve interactive tool blocks.", bg: "from-violet-950 to-pink-950" },
    { name: "Project Management", cases: "+85% Team Expansion Scale", desc: "For collaborative project boards. Emphasizes virality loop triggers, corporate seat-pricing upgrades, and multi-user interface sitemaps.", bg: "from-stone-900 to-indigo-950" },
    { name: "IoT SaaS Platforms", cases: "14 big smart contracts secured", desc: "Industrial sensor-to-cloud analytics portals. Deep spec sheet indexing, developer sandbox setup structures, and interactive hardware mockup pages.", bg: "from-blue-950 to-emerald-950" }
  ];

  // SaaS Services Grid (10 services)
  const saasServices = [
    {
      id: 1,
      title: "1. SaaS SEO Services",
      tag: "⭐ Core Service",
      desc: "Dominate search engine indexes. We design technical product sitemaps, establish user search journey content structures, target competitor versus keyword grids, and configure high-intent schemas.",
      highlights: ["Product-led organic keywords", "Technical crawler health optimization", "High-conversion product comparisons", "Automated article sitemap indexes"],
      goal: "Generate consistent, compounding free trials by intercepting users who are seeking immediate software options."
    },
    {
      id: 2,
      title: "2. SaaS PPC & Paid Advertising",
      tag: "SaaS Scaling Engine",
      desc: "Surgical high-intent campaigns running across Google Ads, LinkedIn Ads, and Meta. Structured with transactional single keyword groups (SKAG) and robust custom retargeting stacks.",
      highlights: ["Transactional search campaigns", "Demo-focused LinkedIn segments", "Meta custom trial audiences", "Negative list cleaning schedules"],
      goal: "Drive high-intent software buyers, SaaS decision makers, and target users to book active product demonstrations immediately."
    },
    {
      id: 3,
      title: "3. Product-Led Growth (PLG) Marketing",
      tag: " adoption & adoption loops",
      desc: "Align your visual interface triggers with conversion priorities. We audit trial onboarding friction, target user dropoff zones, and write feature-use email prompts.",
      highlights: ["Interactive setup flow wireframes", "Feature adoption email automations", "In-app monetization thresholds", "Engagement metrics tracking analytics"],
      goal: "Transform signups into loyal advocates by maximizing value realization speed during the trial state."
    },
    {
      id: 4,
      title: "4. AI Search Optimization for SaaS",
      tag: "⭐ Trending Service",
      desc: "Audit and construct semantic data parameters so that generative AI search platforms (ChatGPT, Gemini, Claude, Perplexity) natively suggest your software product in user prompts.",
      highlights: ["Generative search optimization indexing", "Structure rich content schema markups", "B2B comparison query positioning", "Intent-based conversational answers"],
      goal: "Guarantee your enterprise platform remains in recommendation pipelines across the AI search ecosystem."
    },
    {
      id: 5,
      title: "5. SaaS Content Marketing",
      tag: "Permanent Organic Value",
      desc: "High-grade educational content and documentation. We draft product instruction handbooks, technical whitepapers, and customer case histories optimized for organic keyword loops.",
      highlights: ["Commercial keyword intent clusters", "How-to blog sitemap structures", "In-depth alternative reviews guides", "Downloadable product use sheets"],
      goal: "Establish industry thought leadership while capturing long-tail user solution searches."
    },
    {
      id: 6,
      title: "6. SaaS Lead Generation",
      tag: "Qualified pipelines",
      desc: "For B2B software models needing manual contract closures. Customized prospect collection pipelines pairing warm automated LinkedIn sequences with direct database uploads.",
      highlights: ["Executive inbox target list scrapes", "Tailored LinkedIn connection automations", "Multi-touch booking scheduling", "MQL to SQL database parameters setup"],
      goal: "Convert enterprise pipeline requirements into guaranteed director and VP level sales consultations."
    },
    {
      id: 7,
      title: "7. SaaS Website & Landing Page Optimization",
      tag: "Conversion-first Design",
      desc: "Clean, high-performance portal styles using premium space grooving, responsive interactive visuals, clear trial CTAs, and instant site performance states.",
      highlights: ["Mobile responsive UX designs", "Instant signup visual frames", "Above-the-fold value definitions", "Speed-optimized layout codes"],
      goal: "Maximize absolute traffic returns by rendering elegant, modern, high-converting product views."
    },
    {
      id: 8,
      title: "8. SaaS Conversion Rate Optimization (CRO)",
      tag: "Maximum Pipeline Efficiency",
      desc: "Surgical testing of signups layouts, pricing panels, and demo scheduling inputs to identify and fix leaks in the user acquisition funnel.",
      highlights: ["Frictionless pricing grids design", "Micro-interaction user trials tracking", "Simplified meeting booking integration", "Interactive UX diagnostic scans"],
      goal: "Dramatically lower cost-per-acquisition (CAC) metrics by boosting key page conversion outcomes."
    },
    {
      id: 9,
      title: "9. SaaS Email Marketing & Automation",
      tag: "Subscription Retention",
      desc: "Closed-loop subscriber sequencers targeting customer lifecycle stages. We build welcome sequences, feature updates calendars, and upgrade campaigns.",
      highlights: ["Automated onboarding drip pipelines", "Trigger-based user interaction templates", "Direct corporate subscription upgrades", "Inactivity notification triggers"],
      goal: "Protect monthly recurring revenue (MRR) parameters by creating sticky email relationships with active software users."
    },
    {
      id: 10,
      title: "10. SaaS Consulting & Growth Strategy",
      tag: "Strategic Corporate Guidance",
      desc: "Regular expert consultancies covering subscription structures, monetization tier adjustments, growth forecast tracking, and GTM (Go-To-Market) roadmap audits.",
      highlights: ["Monetization tier model reviews", "Competitor pipeline analysis grids", "Fractional CMO board reviews", "Expansion roadmap schedules"],
      goal: "Equip software startups and developers with proven corporate advisory pipelines to secure fast scaling."
    }
  ];

  // SaaS Growth Process Steps
  const saasProcess = [
    { step: "Step 1: SaaS Audit & Research", desc: "Analyzing deep web analytics. We review competitor keyword profiles, inspect trial onboarding friction zones, analyze database drop-point metrics, and define Ideal Customer Profiles." },
    { step: "Step 2: Growth Strategy Planning", desc: "Outlining the subscription growth map. Custom sitemaps designs, defining PLG adopt goals, allocating budget metrics, and building tailored schema maps templates." },
    { step: "Step 3: Campaign Execution", desc: "Deploying high-intent PPC search groups, initializing organic product SEO, implementing technical schemas, and structuring custom email sequencers." },
    { step: "Step 4: User Acquisition & Optimization", desc: "Gathering and evaluating user adoption parameters. Polishing CTAs, optimizing pricing layout frameworks, and removing onboarding signup bottlenecks." },
    { step: "Step 5: Reporting & Revenue Scaling", desc: "Delivering real metrics. Tracking monthly MRR boosts, updating CPA/CAC charts, audit conversion yields, and scaling budgets to drive continuous MRR curves." }
  ];

  // Case Studies
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);

  const saasCaseStudies = [
    {
      client: "TaskFlow Collaborative PM Software",
      challenge: "High ad spend on trial campaigns with a dropoff rate of over 90% during signup onboarding.",
      strategy: "Revamped onboarding flow with an interactive product walkthrough, launched B2B SEO targeting, and optimized transactional trial keywords.",
      metric1: "340% increase in trial adoption rates",
      metric2: "$45,000 MRR growth inside 120 days",
      metric3: "-38% absolute drop in CAC spend",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "MediSync Enterprise AI Cloud",
      challenge: "C-suite healthcare prospects were ignoring generic programmatic display ads.",
      strategy: "Deployed Account-Based Marketing (ABM) combined with highly specialized HIPAA-focused whitepapers and custom executive landing portals.",
      metric1: "+180% Demo Appointment conversions",
      metric2: "9 high-value clinic contracts closed",
      metric3: "6.8x overall Campaign investment ROI",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // FAQ collapses
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const saasFaqs = [
    { q: "What is SaaS marketing?", a: "SaaS (Software-as-a-Service) marketing is a specialized subset of digital marketing focusing explicitly on recurring-revenue subscription models. It coordinates customer acquisition, free-to-paid conversions, product adoption loops, and long-term retention strategies." },
    { q: "How can SaaS companies generate more leads and signups?", a: "SaaS companies achieve scalable customer acquisition by implementing a multi-channel framework: High-intent organic SEO content to capture researchers, transactional PPC search ads for quick trials, structured product walkthroughs (PLG), and automated email onboarding drip campaigns." },
    { q: "What is product-led growth (PLG)?", a: "Product-Led Growth is a business methodology where user acquisition, expansion, conversion, and retention are driven primarily by the product itself. Through interactive self-serve onboarding, quick value realization, and friction-free upgrades, the software serves as the main driver of scale." },
    { q: "Is SEO important for SaaS businesses?", a: "Extremely. SEO represents the most cost-effective and highly compounding customer acquisition channel for SaaS. By ranking #1 for intent-driven search keywords, comparison grids, and industry tutorials, you acquire consistent organic trial signups without recurring ad costs." },
    { q: "Can AI improve SaaS marketing operations?", a: "Yes. By deploying AI, we can automate predictive lead scoring models, optimize keyword schemas to rank natively in Generative AI client results (ChatGPT, Gemini, Perplexity), personalize onboarding email drips, and monitor real-use database behaviors for retention analytics." },
    { q: "How long does SaaS marketing take to generate measurable MRR boosts?", a: "PPC search campaigns and hyper-targeted LinkedIn/cold email outreach start scheduling real demos in 10 to 15 days. Organic indexing boosts, technical SEO, and semantic schema recommendations deliver compounding scale within 60 to 90 days." },
    { q: "Which channels work best for scaling B2B SaaS platforms?", a: "High-intent Google Search advertising captures immediate buyers, while professional LinkedIn outreach and targeted Account-Based Marketing (ABM) are perfect for locking down enterprise deals. Complementing these with organic SEO ensures permanent, cost-efficient scale." }
  ];

  // Schema copying state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copySchemaText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  // Simulated Audit form submit
  const [auditForm, setAuditForm] = useState({
    companyName: '',
    websiteUrl: '',
    mrrRange: '$10,000 - $50,000',
    challenges: '',
    email: '',
    phone: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.companyName || !auditForm.email || !auditForm.websiteUrl) return;
    setAuditSubmitted(true);
  };

  return (
    <div id="saas-marketing-solutions-page" className="bg-[#02050f] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Floating Hotlines */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl shadow-2xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider border border-white/10 transition-all font-mono"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp Support: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-teal hover:bg-white text-slate-950 p-3 rounded-xl shadow-2xl flex items-center justify-center gap-2 font-extrabold text-xs uppercase tracking-wider transition-all font-mono"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" /> Call Direct: {CONTACT_NUMBER}
        </a>
      </div>

      {/* STICKY STATUS BAR */}
      <div className="bg-slate-950 border-b border-indigo-950 text-xs py-2 px-4 flex justify-between items-center z-20 relative font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping"></span>
          <span>SaaS Growth Infrastructure: Active</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center gap-1"
            id="back-home-saas-btn"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition flex items-center space-x-1">
            <span className="text-brand-teal font-extrabold">HotLine:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#040716] text-white overflow-hidden text-left border-b border-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>AI-Powered SaaS Growth Engine</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none font-sans">
                SaaS Marketing Solutions That Increase <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-sky-400">Trials, Demos, MRR & Revenue</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Accelerate your recurring subscription growth with specialized AI SaaS SEO, PPC frameworks, product-led user onboarding strategies, high-intent demo landing portals, and retention workflows.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#free-saas-audit-form" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-saas-audit-btn"
                >
                  <span>Get Free SaaS Growth Audit</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </a>
                <a 
                  href="#saas-mrr-calculator"
                  onClick={() => {
                    const el = document.getElementById('saas-mrr-calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-350 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal animate-pulse" />
                  <span>Interactive MRR & LTV Calculator</span>
                </a>
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-indigo-950/40 font-mono text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>SaaS Growth Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>AI-Powered Scale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>PLG Optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>MRR focused results</span>
                </div>
              </div>

            </div>

            {/* Hero Right: SaaS Model & Revenue Optimization Simulator Card */}
            <div className="lg:col-span-5 relative" id="saas-mrr-calculator">
              <div className="bg-[#0b0e20] rounded-3xl p-6 border border-indigo-950 shadow-2xl relative overflow-hidden text-left font-mono">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40 mb-5">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-bold uppercase">SaaS Growth ROI Simulator</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-indigo-900 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    RECURRING PIPELINE
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  
                  {/* Monthly trials slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Avg Monthly Signups/Trials:</span>
                      <span className="text-sky-400 font-bold">{trialCount} users</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="2000" 
                      step="50"
                      value={trialCount}
                      onChange={(e) => setTrialCount(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-sky-400"
                    />
                  </div>

                  {/* Trial to Paid Conversion slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Trial → Paid Conv (%):</span>
                      <span className="text-indigo-400 font-bold">{trialToPaidRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="30" 
                      step="1"
                      value={trialToPaidRate}
                      onChange={(e) => setTrialToPaidRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-indigo-400"
                    />
                  </div>

                  {/* ARPU slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Avg ARPU (Monthly Price):</span>
                      <span className="text-brand-teal font-bold">${arpuValue} USD / mo</span>
                    </div>
                    <input 
                      type="range" 
                      min="9" 
                      max="299" 
                      step="5"
                      value={arpuValue}
                      onChange={(e) => setArpuValue(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* CAC slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Current Trials CAC Value:</span>
                      <span className="text-rose-400 font-bold">${cacValue} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="1500" 
                      step="25"
                      value={cacValue}
                      onChange={(e) => setCacValue(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-rose-400"
                    />
                  </div>

                  {/* Metrics Array Box */}
                  <div className="bg-slate-950 border border-indigo-950 rounded-xl p-4 grid grid-cols-2 gap-4 text-left">
                    
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black block">Paying Customers / mo</span>
                      <span className="text-base font-black text-slate-400">+{results.currentNewPayingUsers} accounts</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black block">Est. LTV:CAC Ratio</span>
                      <span className="text-base font-black text-rose-400">{results.ltvToCacRatio}x Ratio</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black block">AKGLS Signups Target</span>
                      <span className="text-base font-black text-brand-teal">{results.optimizedTrials} Trials</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black block">Optimized LTV:CAC</span>
                      <span className="text-base font-black text-emerald-400">{results.optimizedLtvToCac}x Health</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-indigo-900/60 flex justify-between items-center bg-indigo-950/20 px-2.5 py-2 rounded-lg border border-indigo-900/55 mt-1">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[9px] text-slate-300 uppercase font-black block">Monthly New MRR Boost</span>
                        <span className="text-[10px] text-slate-550 block text-slate-400">Capped CAC: ${results.optimizedCac}</span>
                      </div>
                      <span className="text-lg font-black text-emerald-450 text-emerald-400 animate-pulse block font-mono">
                        +${results.netMrrGrowthBoost.toLocaleString()}/mo
                      </span>
                    </div>

                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide">
                    *Based on systematic PLG adoption adjustments, transactional search keyword indexes, and responsive email retention.
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="py-16 bg-[#080d1e]/45 border-b border-indigo-950 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-2 mb-10 select-none animate-pulse">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold font-mono font-bold">TRUSTED SAAS CAPITAL ACCELERATOR</h2>
            <p className="text-[10px] text-slate-500 uppercase">Driving hyper-scale MRR parameters for high-growth software vendors worldwide.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono font-extrabold pb-8">
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white block">42+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">SaaS Companies Scaled</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal block">180k+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Qualified Trials/Leads Induced</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white block">12,400+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Demo Registrations Scheduled</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal block">440%</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Average MRR Pipeline Growth</p>
            </div>
          </div>

          {/* Core tools trust credentials */}
          <div className="pt-6 border-t border-indigo-950/60 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-400 font-mono font-bold">
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded">★ HUBSPOT CRM PARTNER</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-blue-400">★ STRIPE BILLING COMPATIBLE</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-indigo-400">★ GOOGLE TAG MONITOR CONNECTED</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-amber-500">★ HOTJAR USER JOURNEY CERTIFIED</span>
          </div>

        </div>
      </section>

      {/* WHAT ARE SAAS MARKETING SOLUTIONS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-1 font-mono">
                <Laptop className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>WHAT ARE SAAS GROWTH SOLUTIONS?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans text-left">
                Continuous User Adoption Over Simple Signups
              </h2>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-sans text-left font-normal">
                <p>
                  SaaS growth optimization involves engineering user acquisition loops, free-to-paid pricing models, feature adopt metrics, and lifecycle marketing structures to systematically expand Monthly Recurring Revenue.
                </p>
                <p>
                  Typical marketing agencies simply direct expensive traffic towards unoptimized homepages. We build an **End-to-End Growth Pipeline**.
                </p>
                <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs font-mono">
                  From ranking comparison keywords in search engines to designing frictionless product walkthrough flows and deploying behavior-triggered email sequences, we optimize every touchpoint.
                </p>
                <p>
                  This holistic mapping reduces customer churn rates, slashes acquisition costs, and boosts customer Lifetime Value (LTV) metrics.
                </p>
              </div>

            </div>

            {/* Right Funnel visualization */}
            <div className="lg:col-span-6 bg-[#0b0f20] border border-indigo-950 p-6 rounded-2xl relative font-mono text-xs">
              
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-indigo-950 pb-3 mb-4 text-slate-100">
                LTV Optimization Funnel Flow
              </h3>

              <div className="space-y-3">
                
                {/* Level 1 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-brand-teal font-extrabold block uppercase">1. HIGH-INTENT VISIBILITY</span>
                    <span className="text-slate-400 text-[11px] font-sans">SaaS Comparison sitemaps, Product SEO, search PPC keywords</span>
                  </div>
                  <span className="bg-brand-teal/5 text-brand-teal border border-brand-teal/30 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Acquire</span>
                </div>

                {/* Level 2 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-indigo-400 font-extrabold block uppercase">2. SEAMLESS ONBOARDING</span>
                    <span className="text-slate-400 text-[11px] font-sans">Interactive signup states, setup guides, trial-activation prompts</span>
                  </div>
                  <span className="bg-indigo-950 text-indigo-400 border border-indigo-800 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Adopt</span>
                </div>

                {/* Level 3 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-sky-400 font-extrabold block uppercase">3. VALUE REALIZATION LOOP</span>
                    <span className="text-slate-400 text-[11px] font-sans">Email behavior reminders, premium wall prompts, team seats triggers</span>
                  </div>
                  <span className="bg-sky-950 text-sky-450 text-sky-400 border border-sky-800 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Paid</span>
                </div>

                {/* Level 4 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-yellow-500 font-extrabold block uppercase">4. RETENTION & EXPANSION</span>
                    <span className="text-slate-400 text-[11px] font-sans">Announce target integrations, annual subscription discounts</span>
                  </div>
                  <span className="bg-yellow-950/50 text-yellow-500 border border-yellow-800/50 text-[9px] px-2 py-0.5 rounded uppercase font-bold">MRR Expansion</span>
                </div>

              </div>

              <div className="pt-4 border-t border-indigo-950 mt-4 text-center">
                <a href="#free-saas-audit-form" className="text-[10.5px] text-brand-teal font-extrabold hover:underline inline-flex items-center gap-1.5 uppercase font-mono">
                  <span>Diagnose Your Onboarding Friction Points Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY SAAS MARKETING MATTERS (BENEFITS GRID) */}
      <section className="py-20 bg-[#061022]/30 border-y border-indigo-950/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">BENEFIT MATRIX</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              Why SaaS Needs Specialized Marketing
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Standard advertising models fail under subscription-based dynamics. We align metrics to optimize acquisition, adoption, LTV, and customer retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-xs font-mono">
            
            {/* Benefit 1 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Increase Product Trials</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Position product-specific conversion templates inside organic search results, driving highly qualified prospective trials to sign up immediately.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/10 mb-2">
                <LineChart className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Improve Demo Booking Yield</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Capture and optimize enterprise-grade interest by integrating direct calendar schedules and transparent value-proposition sheets to drive target conversions.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal border border-brand-teal/20 mb-2">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Lower Customer CAC Metrics</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Eliminate unoptimized ad budget leaks by prioritizing organic sitemaps layouts, highly granular negative-keyword sets, and strategic customer clusters.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/10 mb-2">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Expand Recurring MRR & ARR</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Establish a reliable pipeline for trial signups and subscription acquisitions, allowing your finance team to confidently forecast future scaling directions.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/10 mb-2">
                <Rocket className="w-5 h-5 animate-bounce" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Boost Adoption & LTV Metrics</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Develop triggered feature newsletters to keep trial users engaged, ensuring long-term retention and higher overall customer Lifetime Value.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/15 flex items-center justify-center text-yellow-500 border border-yellow-500/15 mb-2">
                <Award className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Capture Market Share</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Rank above primary alternatives. Position comparison articles as high-authority search answers to establish your platform as the dominant choice.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICE LIST SECTION */}
      <section id="saas-services" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">CAPABILITIES ARCHITECTURE</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Our SaaS Marketing Solutions</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal font-sans text-slate-300">
            Highly optimized, data-focused growth modules engineered to align software product adoption loops, paid acquisition campaigns, and technical SEO positioning.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {saasServices.map((srv, index) => (
            <div 
              key={index}
              className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start font-mono text-left">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest">{srv.tag}</span>
                  <span className="text-slate-500 text-[10px]">Module {index + 1} of 10</span>
                </div>
                
                <h3 className="text-xl font-bold text-white font-sans hover:text-brand-teal transition tracking-tight text-left">{srv.title}</h3>
                
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans font-normal text-left">
                  {srv.desc}
                </p>

                {/* Scope points */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-[10.5px]">
                  {srv.highlights.map((hlt, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-1.5 text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-brand-teal animate-pulse shrink-0"></span>
                      <span className="truncate">{hlt}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Goal parameters */}
              <div className="mt-6 pt-4 border-t border-indigo-900/40 text-left font-mono">
                <span className="text-[9px] text-slate-405 block uppercase font-bold text-brand-teal">Target Outcome:</span>
                <p className="text-[11px] text-slate-400 italic mt-0.5 leading-snug">{srv.goal}</p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SAAS TYPES WE SERVE */}
      <section className="py-20 bg-slate-950 border-t border-indigo-950">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] text-brand-teal font-extrabold uppercase font-mono tracking-widest bg-indigo-950 px-3.5 py-1.5 rounded-full border border-indigo-900">
                TAILORED DOMAINS
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-left">
                SaaS Categories We Accelerate
              </h2>
              <p className="text-slate-450 text-slate-300 text-sm leading-relaxed font-sans font-normal text-left">
                Every software sector operates on distinct sales dynamics. We design specialized customer pathways based on your specific application environment and user cohorts.
              </p>

              <div className="flex flex-col space-y-2.5 pt-4">
                {saasTypes.map((st, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setSelectedSaaSType(sIdx)}
                    className={`p-3.5 rounded-xl text-left font-mono text-xs font-bold uppercase transition duration-300 flex justify-between items-center cursor-pointer border ${
                      selectedSaaSType === sIdx 
                        ? 'bg-brand-teal text-slate-950 border-white' 
                        : 'bg-[#060a16] text-slate-300 border-indigo-950 hover:bg-slate-900'
                    }`}
                  >
                    <span>{st.name}</span>
                    <span className="text-[9.5px] tracking-wide font-black opacity-80">{st.cases}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right details */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSaaSType}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br ${saasTypes[selectedSaaSType].bg} border border-indigo-950 rounded-3xl p-8 relative overflow-hidden h-full min-h-[380px] flex flex-col justify-between`}
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono">
                      <span className="text-slate-400 text-xs">SAAS TYPE: {selectedSaaSType + 1} / 9</span>
                      <span className="text-brand-teal text-xs font-black uppercase tracking-wider">{saasTypes[selectedSaaSType].cases}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
                      {saasTypes[selectedSaaSType].name}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-normal">
                      {saasTypes[selectedSaaSType].desc}
                    </p>

                    <ul className="space-y-3 font-mono text-xs text-slate-400">
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                        <span>Highly targeted Ideal Customer Profile (ICP) validation maps</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                        <span>SaaS comparison review index optimization templates</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 animate-pulse animate-bounce" />
                        <span>Continuous pipeline dashboard analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">
                      *Delivered with fully integrated HubSpot data tracking.
                    </span>
                    <a 
                      href="#free-saas-audit-form" 
                      className="text-xs bg-white text-slate-950 font-bold px-5 py-2.5 rounded-lg hover:bg-brand-teal hover:text-slate-950 transition duration-300 uppercase font-mono text-center w-full sm:w-auto"
                    >
                      Audit This SaaS Category →
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* OUR SAAS MARKETING PROCESS */}
      <section className="py-20 bg-[#040817] relative text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">
              GROWTH STEPS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              Our SaaS Growth Lifecycle
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We employ a repeatable, five-phase process meticulously designed to identify funnel leaks, launch targeted acquisition arrays, and consistently scale Monthly Recurring Revenue.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {saasProcess.map((proc, pIdx) => (
              <div 
                key={pIdx}
                className="bg-slate-950 border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-3 text-left">
                  <span className="text-xs font-black text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded border border-brand-teal/30">
                    PHASE 0{pIdx + 1}
                  </span>
                </div>
                
                <div className="md:col-span-9 space-y-2">
                  <h3 className="text-base font-black text-white uppercase tracking-wider">{proc.step}</h3>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans font-normal text-left">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PLG SPECIFICS SECTION */}
      <section className="py-20 bg-[#05091bf6] border-y border-indigo-950">
        <div className="max-w-7xl mx-auto px-4 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">
                PRODUCT-LED GROWTH (PLG)
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans leading-none">
                PLG Strategies Engineered to Accelerate Adoption
              </h2>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-sans text-slate-300">
                Product-Led Growth shifts the focus of customer acquisition directory into the application interface. We analyze your onboarding architecture, discover Adoption Drop-off points, design interactive walkthrough blueprints, and configure seat-expansion loops.
              </p>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-4">
                <div className="p-4 bg-slate-950 border border-indigo-950 rounded-xl space-y-1">
                  <span className="text-brand-teal font-extrabold block uppercase tracking-wider">Onboarding Flows</span>
                  <span className="text-[10px] text-slate-500 font-sans">Eliminating extra steps to speed up value delivery.</span>
                </div>
                <div className="p-4 bg-slate-950 border border-indigo-950 rounded-xl space-y-1">
                  <span className="text-indigo-400 font-extrabold block uppercase tracking-wider">adoption Metrics</span>
                  <span className="text-[10px] text-slate-500 font-sans">Tracking active feature adoption across all user groups.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Product adopts analytics mockup card */}
              <div className="bg-[#0b0e20] rounded-3xl p-6 border border-indigo-950 shadow-2xl relative overflow-hidden font-mono text-xs">
                
                <div className="flex justify-between items-center border-b border-indigo-900/40 pb-3 mb-4">
                  <span className="text-[9.5px] uppercase font-bold text-slate-300">Active Adopts Performance</span>
                  <span className="text-[9.5px] text-emerald-400 font-black animate-pulse uppercase">● SYSTEM ONLINE</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-550 text-slate-400 uppercase">
                      <span>1. Onboarding Walkthrough Adoption Rate</span>
                      <span className="text-brand-teal font-black">88% (LIFT: +42%)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-indigo-950">
                      <div className="bg-brand-teal h-full rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-550 text-slate-400 uppercase">
                      <span>2. Key Feature Interaction trigger</span>
                      <span className="text-indigo-400 font-black">74% (LIFT: +31%)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-indigo-950">
                      <div className="bg-indigo-400 h-full rounded-full" style={{ width: '74%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-550 text-slate-400 uppercase">
                      <span>3. Custom Seat Expansion Upgrades</span>
                      <span className="text-sky-450 text-sky-400 font-black">54% (LIFT: +190%)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-indigo-950">
                      <div className="bg-sky-400 h-full rounded-full" style={{ width: '54%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-indigo-900/40 mt-6 text-center">
                  <a href="#free-saas-audit-form" className="text-[10px] text-brand-teal uppercase font-black hover:underline tracking-wider inline-flex items-center gap-1">
                    <span>Audit Your Trial Funnel Friction Free</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LEAD GENERATION & DEMO LAUNCH SECTION */}
      <section className="py-20 bg-slate-955 bg-slate-950 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto px-4 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphics */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#0b0e20] rounded-3xl p-6 border border-indigo-950 shadow-2xl relative overflow-hidden font-mono text-xs text-slate-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-2xl flex" />
                
                <h3 className="text-xs uppercase font-extrabold text-slate-200 border-b border-indigo-900/40 pb-3 mb-4">
                  B2B SaaS Pipeline Target Dashboard
                </h3>

                <div className="space-y-3">
                  
                  <div className="bg-slate-950 border border-indigo-900 p-3 rounded-xl flex justify-between items-center">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-black block">Active ICP Accounts list</span>
                      <span className="font-bold text-slate-300 text-[10.5px]">440 Target Tech Enterprises Scraped</span>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-2 py-0.5 rounded border border-emerald-500/30 font-bold uppercase">
                      LOCKED
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-indigo-900 p-3 rounded-xl flex justify-between items-center">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-black block">Warmed LinkedIn Connection Rate</span>
                      <span className="font-bold text-slate-300 text-[10.5px]">74% Absolute Accept Rate</span>
                    </div>
                    <span className="bg-brand-teal/10 text-brand-teal text-[9px] px-2 py-0.5 rounded border border-brand-teal/30 font-bold uppercase">
                      6.4x LIFT
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-indigo-900 p-3 rounded-xl flex justify-between items-center">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-black block">Direct Demo Appointments Set</span>
                      <span className="font-bold text-slate-300 text-[10.5px]">44 Execs scheduled meetings / mo</span>
                    </div>
                    <span className="bg-indigo-950 text-indigo-400 text-[9px] px-2 py-0.5 rounded border border-indigo-800 font-bold uppercase text-indigo-400">
                      ACTIVE
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">
                DEMO GENERATION SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans leading-none">
                Generate High-Intent Demo Conversions
              </h2>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-sans text-slate-300">
                To capture high-value enterprise accounts, you need more than just simple self-serve models. We build bespoke demo generation frameworks that qualify, warm, and guide enterprise buyers directly to active consultations with your sales team.
              </p>

              <ul className="space-y-2 font-mono text-xs text-slate-400 text-left">
                <li className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Interactive meeting calendars configured to prevent empty signups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Custom email qualification filters integrated with HubSpot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Automatic representative tracking triggers</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* FUTURE-FACED AI SAAS ENGINE */}
      <section className="py-20 bg-[#040816] text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0b0e21] to-[#040612] border border-indigo-950 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                  <Bot className="w-4 h-4 text-brand-teal animate-pulse" />
                  <span>SaaS Future-proofing</span>
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-sans">
                  Natively Positioned Inside Generative AI Search Answers
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal text-left">
                  More search queries are transitioning directory from classic Google indexes to automated client engines (ChatGPT, Gemini, Claude, Perplexity). We configure structured semantic schemas patterns so that your application is recommended when buyers enquire.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Structured comparison schema parameters</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Direct API schema integrations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Highly targeted whitepaper sitemaps</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Semantic index optimization analytics</span>
                  </div>
                </div>
              </div>

              {/* Interactive terminal representing AI prompt responses */}
              <div className="lg:col-span-5 relative">
                <div className="bg-slate-950 border border-indigo-950 rounded-2xl p-5 shadow-2xl relative font-mono text-xs">
                  <div className="flex justify-between items-center pb-3 border-b border-indigo-900/30 mb-4">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-grow-500 bg-emerald-500"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">ChatGPT-4o Prompt Result</span>
                  </div>

                  <div className="space-y-4 font-mono text-left">
                    <div className="space-y-0.5 text-slate-450 text-slate-40s text-slate-400">
                      <span className="text-[9.5px] uppercase font-bold">User query:</span>
                      <p className="p-2.5 bg-indigo-950/20 border border-indigo-900/50 rounded-lg text-slate-300">
                        "What is the best SaaS tool with integrated HubSpot pipeline triggers?"
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9.5px] text-brand-teal uppercase font-extrabold">AI response:</span>
                      <div className="p-2.5 bg-slate-900/60 border border-indigo-950 rounded-lg space-y-2 text-slate-400 font-sans">
                        <p className="text-[11.5px]">Based on recent updates, alternative options exist. However, <strong className="text-white">Your-SaaS-Tool</strong> is highly recommended due to:</p>
                        <ul className="list-disc pl-4 space-y-1 text-[11px]">
                          <li>Frictionless closed-loop CRM triggers.</li>
                          <li>Advanced LTV pipeline reporting controls.</li>
                          <li>2.4x optimization yields under test.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="py-20 bg-slate-950 border-t border-indigo-950 text-left font-sans">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">
              CASE ARCHIVES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              SaaS Scale Case Studies
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed">
              Real results under real subscription setups. We audit actual metrics to display verified scaling results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Case Details list selector */}
            <div className="lg:col-span-4 flex flex-col space-y-3.5 select-none">
              {saasCaseStudies.map((cs, csIdx) => (
                <button
                  key={csIdx}
                  onClick={() => setActiveCaseStudy(csIdx)}
                  className={`p-5 rounded-2xl text-left transition duration-300 cursor-pointer border ${
                    activeCaseStudy === csIdx 
                      ? 'bg-[#0b0e21] border-[#38bdf8] border-opacity-65 text-white' 
                      : 'bg-[#040713] border-indigo-950 hover:bg-[#070b1f] text-slate-400'
                  }`}
                >
                  <span className="text-[9.5px] uppercase font-bold text-brand-teal block mb-1 font-mono">CASE 0{csIdx + 1}</span>
                  <span className="font-bold text-base block font-sans tracking-tight">{cs.client}</span>
                </button>
              ))}
            </div>

            {/* Right Active Case Description display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseStudy}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6 md:p-8 relative overflow-hidden h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-indigo-900/40 pb-4 font-mono">
                      <span className="text-xs text-sky-400 font-extrabold uppercase uppercase">SaaS Growth Campaign</span>
                      <span className="text-[10px] text-slate-500 font-bold">{saasCaseStudies[activeCaseStudy].client}</span>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-mono">The Challenge:</span>
                        <p className="text-sm text-slate-350 leading-relaxed font-sans">{saasCaseStudies[activeCaseStudy].challenge}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-mono">Our Growth Strategy:</span>
                        <p className="text-sm text-slate-350 leading-relaxed font-sans">{saasCaseStudies[activeCaseStudy].strategy}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-indigo-900/40 font-mono text-center">
                      <div className="p-4 bg-slate-950/60 border border-indigo-950 rounded-xl">
                        <span className="text-xl md:text-2xl font-black text-white block">{saasCaseStudies[activeCaseStudy].metric1}</span>
                        <span className="text-[9px] text-slate-500 uppercase block mt-1 font-sans">Signup Lift</span>
                      </div>
                      <div className="p-4 bg-slate-950/60 border border-indigo-950 rounded-xl">
                        <span className="text-xl md:text-2xl font-black text-brand-teal block">{saasCaseStudies[activeCaseStudy].metric2}</span>
                        <span className="text-[9px] text-slate-500 uppercase block mt-1 font-sans">MRR Added</span>
                      </div>
                      <div className="p-4 bg-slate-950/60 border border-indigo-950 rounded-xl">
                        <span className="text-xl md:text-2xl font-black text-emerald-400 block">{saasCaseStudies[activeCaseStudy].metric3}</span>
                        <span className="text-[9px] text-slate-500 uppercase block mt-1 font-sans">Cost reductions</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-indigo-900/40 font-mono text-[9.5px] text-slate-500 text-center uppercase flex flex-col sm:flex-row justify-between items-center gap-2">
                    <span>*Returns verified by executive accounts metadata records</span>
                    <a href="#free-saas-audit-form" className="text-xs bg-brand-teal text-slate-950 font-bold px-4 py-2 rounded-lg hover:bg-white transition duration-250 uppercase font-mono">
                      Query Similar Metric Setup →
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 bg-[#060a17]/50 border-t border-indigo-950 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">
              OUR EDGE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              Why Partner With AKGLS Group
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              We align visual design, technical sitemaps tracking, adoption pathways, and strategic paid assets to build high conversion growth frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-2xl space-y-4 hover:border-brand-teal/30 transition shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center text-emerald-450 text-emerald-400">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">SaaS Growth Specialists</h3>
              <p className="text-slate-400 font-sans font-normal text-left text-[11px] leading-relaxed">
                We handle SaaS scaling parameters in our sleep. From trial-to-paid optimizations, features adoption, sitemap indexing, to LTV scaling layouts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-2xl space-y-4 hover:border-brand-teal/30 transition shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Shuffle className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">Product-Led Growth Experts</h3>
              <p className="text-slate-400 font-sans font-normal text-left text-[11px] leading-relaxed">
                We design frictionless user entry pathways directory in your interface layout. Speeding up user value realization to drive adoption rates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-2xl space-y-4 hover:border-brand-teal/30 transition shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal">
                <Bot className="w-5 h-5 animate-bounce" />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">AI-Powered Tech Stack</h3>
              <p className="text-slate-400 font-sans font-normal text-left text-[11px] leading-relaxed">
                Leveraging real diagnostic scripts to build data tracking loops, structured comparison search lists, and semantic answers options.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-2xl space-y-4 hover:border-brand-teal/30 transition shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-indigo-550 bg-indigo-500/10 border border-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">Funnel Optimization Experts</h3>
              <p className="text-slate-400 font-sans font-normal text-left text-[11px] leading-relaxed">
                Tracking every user event. Pinpointing dropping user segments, polishing CTAs, and simplifying user checkout panels to lower CAC spend.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-2xl space-y-4 hover:border-brand-teal/30 transition shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/10 flex items-center justify-center text-rose-450 text-rose-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">Transparent Pipeline Audits</h3>
              <p className="text-slate-400 font-sans font-normal text-left text-[11px] leading-relaxed">
                Clear cost allocations models. No fuzzy accounting terms or hidden programmatic data. Real MRR scaling numbers delivered on schedule.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-2xl space-y-4 hover:border-brand-teal/30 transition shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/10 flex items-center justify-center text-yellow-500">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">Custom Scalable Systems</h3>
              <p className="text-slate-400 font-sans font-normal text-left text-[11px] leading-relaxed">
                Avoid slow manual trials. We structure programmatic tracking scripts and robust email workflows designed to compound user leads over time.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SAAS TOOLS & TECHNOLOGIES */}
      <section className="py-20 bg-slate-955 bg-slate-950 border-t border-indigo-950/60 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="space-y-2 mb-12 select-none animate-pulse">
            <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest leading-none">INTEGRATED TECH PLATFORMS</h2>
            <p className="text-[10px] text-slate-500 uppercase">Seamless synchronization to keep operations clean, data exact, and teams alert.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-mono font-bold text-center max-w-5xl mx-auto">
            <div className="p-4 bg-[#050816] border border-indigo-955 border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">HubSpot</span>
              <span className="text-[9px] text-slate-550 text-slate-500 uppercase">CRM Sync</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">Salesforce</span>
              <span className="text-[9px] text-slate-555 text-slate-500 uppercase text-indigo-400 text-slate-500">Sales Pipeline</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">Google Analytics</span>
              <span className="text-[9px] text-slate-500 uppercase">GA4 Funnels</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">Google Ads</span>
              <span className="text-[9px] text-slate-500 uppercase">Paid Search</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">LinkedIn Ads</span>
              <span className="text-[9px] text-slate-500 uppercase">ABM targeting</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">SEMrush</span>
              <span className="text-[9px] text-slate-500 uppercase">Keyword Grid</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">Ahrefs</span>
              <span className="text-[9px] text-slate-500 uppercase">Crawl Audit</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">Hotjar</span>
              <span className="text-[9px] text-slate-500 uppercase">Heatmaps</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">ChatGPT</span>
              <span className="text-[9px] text-slate-550 text-slate-500 uppercase">Semantic Optim</span>
            </div>
            <div className="p-4 bg-[#050816] border border-indigo-950 rounded-xl space-y-1 hover:border-brand-teal/25 transition">
              <span className="text-white block tracking-wider uppercase text-[10.5px]">Gemini AI</span>
              <span className="text-[9px] text-slate-500 uppercase font-bold text-indigo-400">LLM Analytics</span>
            </div>
          </div>

        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-20 bg-[#040715] border-t border-indigo-955 border-indigo-950 text-left">
        <div className="max-w-7xl mx-auto px-4 font-mono text-xs">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">
              PRICING MODELS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none font-sans">
              Flexible SaaS Marketing Plans
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Choose the exact scaling roadmap tailored to your recurring revenue milestones. No lock-ins. Full transparent reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Pack 1 */}
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6.5 p-6 hover:border-brand-teal/30 transition Duration flex flex-col justify-between">
              <div className="space-y-4 text-left">
                <span className="text-[10px] bg-sky-950 border border-sky-850 border-sky-800 text-sky-400 py-1 px-2 rounded-full font-bold uppercase tracking-wider">
                  STARTUP SAAS GROWTH
                </span>
                
                <h3 className="text-xl font-bold text-white font-sans tracking-tight">SaaS Trial Booster</h3>
                <p className="text-slate-400 font-sans font-normal leading-relaxed text-[11px] text-left">
                  Perfect for pre-revenue or early-stage SaaS platforms looking to seed initial free trials, refine user onboarding, and validate sitemaps.
                </p>

                <ul className="space-y-2 text-slate-350 font-sans text-left text-[11px] pt-2 border-t border-indigo-900/30">
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Product-Led Organic Keyword Matrix</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Onboarding Flow Audits</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Basic Google Search PPC (SKAG)</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Monthly Funnel Churn Reporting</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-indigo-900/40 mt-8">
                <a href="#free-saas-audit-form" className="bg-slate-950 border border-indigo-900 hover:border-brand-teal hover:text-slate-950 text-slate-300 font-bold p-3 rounded-lg block text-center uppercase tracking-wider transition">
                  Activate Startup Plan
                </a>
              </div>
            </div>

            {/* Pack 2 */}
            <div className="bg-[#0c102a] border-2 border-brand-teal/30 rounded-3xl p-6.25 p-6 hover:border-brand-teal/55 transition duration flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 bg-brand-teal text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                RECOMMENDED
              </div>
              
              <div className="space-y-4 text-left">
                <span className="text-[10px] bg-brand-teal/15 border border-brand-teal/40 text-brand-teal py-1 px-3 rounded-full font-bold uppercase tracking-wider inline-block">
                  SCALE-UP SAAS MARKETING
                </span>
                
                <h3 className="text-xl font-bold text-white font-sans tracking-tight">MRR Scale Accelerator</h3>
                <p className="text-slate-300 font-sans font-normal leading-relaxed text-[11px] text-left">
                  Designed for expanding software projects needing multi-channel trial acquisition, extensive comparison SEO page grids, and HubSpot database sync.
                </p>

                <ul className="space-y-2 text-slate-250 font-sans text-left text-[11px] pt-2 border-t border-brand-teal/20">
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" /> <span>All Startup Plan Modules</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Comparison SEO keyword directories</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>LinkedIn Demo Scheduling ads</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Triggered Welcome drip sequencers</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Interactive dashboard setups</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-brand-teal/20 mt-8">
                <a href="#free-saas-audit-form" className="bg-brand-teal text-slate-950 font-black p-3 rounded-lg block text-center uppercase tracking-wider transition hover:bg-white hover:scale-101">
                  Secure Scale-Up Plan
                </a>
              </div>
            </div>

            {/* Pack 3 */}
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6.5 p-6 hover:border-brand-teal/30 transition duration flex flex-col justify-between">
              <div className="space-y-4 text-left">
                <span className="text-[10px] bg-purple-950 border border-purple-800 text-purple-400 py-1 px-2 rounded-full font-bold uppercase tracking-wider">
                  ENTERPRISE SAAS GROWTH
                </span>
                
                <h3 className="text-xl font-bold text-white font-sans tracking-tight">Enterprise ABM Platform</h3>
                <p className="text-slate-400 font-sans font-normal leading-relaxed text-[11px] text-left">
                  For well-funded SaaS groups targeting key Fortune 1000 accounts. Features hyper-targeted ABM, custom landing page grids, and custom integrations.
                </p>

                <ul className="space-y-2 text-slate-350 font-sans text-left text-[11px] pt-2 border-t border-indigo-900/30">
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Complete Account-Based Marketing (ABM)</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Custom speed-optimized Landing layouts</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>AI Search Recommendation parameters schema</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Salesforce closed-loop database setups</span></li>
                  <li className="flex items-center space-x-1.5"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <span>Quarterly strategic advisory board maps</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-indigo-900/40 mt-8">
                <a href="#free-saas-audit-form" className="bg-slate-955 bg-slate-950 border border-indigo-900 hover:border-brand-teal hover:text-slate-950 text-slate-300 font-bold p-3 rounded-lg block text-center uppercase tracking-wider transition">
                  Deploy Enterprise ABM
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} className="inline-flex items-center justify-center gap-2 bg-indigo-950/40 border border-indigo-900 text-slate-300 hover:text-white hover:border-indigo-700 px-6 py-3.5 rounded-xl font-bold transition">
              <Phone className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Need a custom SaaS monetization arrangement? Let's talk: {CONTACT_NUMBER}</span>
            </a>
          </div>

        </div>
      </section>

      {/* SCHEMA SHOWCASE SECTION */}
      <section className="py-12 bg-slate-950 border-y border-indigo-950 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="bg-[#050817] border border-indigo-950 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <span className="text-[10px] text-brand-teal font-extrabold uppercase">TECHNICAL EXCELLENCE</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mt-1">Recommended JSON-LD Structured Data Schema</h3>
                <p className="text-slate-500 font-sans text-[11px] mt-0.5">Copy and import these schema codes into your HTML head to optimize search indexing.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => copySchemaText(saasSchemaTemplates.service, 'service')}
                  className="bg-indigo-950 border border-indigo-900 hover:border-brand-teal text-slate-350 text-[10.5px] px-3.5 py-2 rounded-lg font-bold transition flex items-center justify-center gap-1 cursor-pointer select-none"
                >
                  {copiedKey === 'service' ? <Check className="w-3.5 h-3.5 text-brand-teal" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'service' ? "Copied!" : "Copy Service Schema"}</span>
                </button>
                <button 
                  onClick={() => copySchemaText(saasSchemaTemplates.faq, 'faq')}
                  className="bg-indigo-950 border border-indigo-900 hover:border-brand-teal text-slate-350 text-[10.5px] px-3.5 py-2 rounded-lg font-bold transition flex items-center justify-center gap-1 cursor-pointer select-none"
                >
                  {copiedKey === 'faq' ? <Check className="w-3.5 h-3.5 text-brand-teal" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'faq' ? "Copied!" : "Copy FAQ Schema"}</span>
                </button>
              </div>
            </div>

            <pre className="p-4 bg-slate-950 border border-indigo-950 rounded-xl overflow-x-auto text-[10px] text-slate-400 select-all max-h-[180px]">
              {saasSchemaTemplates.service}
            </pre>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-left font-sans">
        
        <div className="space-y-4 mb-16 text-center select-none">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
            SaaS Marketing FAQs
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Answers to key queries regarding software user acquisition channels, PLG setups, metrics systems, and sitemap indexing.
          </p>
        </div>

        <div className="space-y-3">
          {saasFaqs.map((faq, fIdx) => (
            <div 
              key={fIdx}
              className="bg-slate-950 border border-indigo-950 rounded-2xl overflow-hidden hover:border-brand-teal/20 transition-all duration-350"
            >
              <button
                onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base text-white hover:text-brand-teal transition flex justify-between items-center cursor-pointer select-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFaq === fIdx ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {openFaq === fIdx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-350 border-t border-indigo-900/30 leading-relaxed font-sans font-normal text-slate-300 bg-[#050815]/40 text-left">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </section>

      {/* FREE AUDIT ACTION FORM SECTION */}
      <section id="free-saas-audit-form" className="py-20 bg-slate-950 border-t border-indigo-950 text-left">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Form Left Info block */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-6 text-left">
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">
                  ACTION CENTRE
                </span>
                
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-left leading-none">
                  Get Your Free SaaS Growth Audit
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed font-sans font-normal text-left text-slate-300">
                  Let's audit your subscription metrics setup. We will run index scans on your keywords sitemaps, analyze current signup onboarding friction layouts, study checkout flows, and deliver a clean action plan.
                </p>

                <div className="space-y-4 font-mono text-xs pt-2">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 animate-pulse" />
                    <span>SaaS SEO & keywords sitemaps organic audit</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 animate-pulse" />
                    <span>User onboarding Adoption friction report</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 animate-pulse" />
                    <span>Target PPC search keyword competitor map</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 animate-pulse" />
                    <span>AI Search recommendations positioning check</span>
                  </div>
                </div>
              </div>

              {/* Secure Call box */}
              <div className="p-4 bg-indigo-950/20 border border-indigo-900 rounded-2xl flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-slate-950 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="font-mono text-left">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">DIRECT CONSULTATION HOTLINE:</span>
                  <a href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} className="text-xs font-black text-white hover:text-brand-teal transition tracking-wider">
                    {CONTACT_NUMBER}
                  </a>
                </div>
              </div>

            </div>

            {/* Form Right Inputs card */}
            <div className="lg:col-span-7 bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!auditSubmitted ? (
                  <motion.form 
                    onSubmit={handleAuditSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 text-xs font-mono text-left"
                    id="saas-growth-audit"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-slate-400 font-extrabold uppercase text-[9.5px]">SaaS Company Name*</label>
                        <input 
                          type="text"
                          required
                          value={auditForm.companyName}
                          onChange={(e) => setAuditForm({...auditForm, companyName: e.target.value})}
                          placeholder="e.g. Acme Tech SaaS"
                          className="w-full bg-slate-950 border border-indigo-950 hover:border-indigo-850 rounded-xl p-3 text-white focus:outline-none focus:border-brand-teal transition-all font-sans text-xs"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 font-extrabold uppercase text-[9.5px]">Website URL*</label>
                        <input 
                          type="url"
                          required
                          value={auditForm.websiteUrl}
                          onChange={(e) => setAuditForm({...auditForm, websiteUrl: e.target.value})}
                          placeholder="e.g. https://yoursoftware.com"
                          className="w-full bg-slate-950 border border-indigo-950 rounded-xl p-3 text-white focus:outline-none focus:border-brand-teal transition-all font-sans text-xs"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-slate-400 font-extrabold uppercase text-[9.5px]">Current MRR/ARR Range</label>
                        <select
                          value={auditForm.mrrRange}
                          onChange={(e) => setAuditForm({...auditForm, mrrRange: e.target.value})}
                          className="w-full bg-slate-950 border border-indigo-950 rounded-xl p-3 text-slate-300 focus:outline-none focus:border-brand-teal transition-all text-xs"
                        >
                          <option>$0 - $10,000 / mo</option>
                          <option>$10,000 - $50,000</option>
                          <option>$50,050 - $150,000</option>
                          <option>$150,000+ Enterprise ARR</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 font-extrabold uppercase text-[9.5px]">Main Growth Challenge</label>
                        <input 
                          type="text"
                          value={auditForm.challenges}
                          onChange={(e) => setAuditForm({...auditForm, challenges: e.target.value})}
                          placeholder="e.g. Free-to-paid conversions, sitemaps index, CPC"
                          className="w-full bg-slate-950 border border-indigo-950 rounded-xl p-3 text-white focus:outline-none focus:border-brand-teal transition-all font-sans text-xs"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-slate-400 font-extrabold uppercase text-[9.5px]">Email Address*</label>
                        <input 
                          type="email"
                          required
                          value={auditForm.email}
                          onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                          placeholder="e.g. founder@yoursoftware.com"
                          className="w-full bg-slate-950 border border-indigo-950 rounded-xl p-3 text-white focus:outline-none focus:border-brand-teal transition-all font-sans text-xs"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 font-extrabold uppercase text-[9.5px]">Phone Number</label>
                        <input 
                          type="tel"
                          value={auditForm.phone}
                          onChange={(e) => setAuditForm({...auditForm, phone: e.target.value})}
                          placeholder="e.g. +1 555 123 4567"
                          className="w-full bg-slate-950 border border-indigo-950 rounded-xl p-3 text-white focus:outline-none focus:border-brand-teal transition-all font-sans text-xs"
                        />
                      </div>

                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-brand-teal hover:bg-white text-slate-950 font-black p-4 rounded-xl transition duration-300 uppercase tracking-widest flex items-center justify-center space-x-2 animate-pulse cursor-pointer select-none"
                        id="submit-saas-audit-form"
                      >
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Request Free SaaS Audit Details</span>
                      </button>
                    </div>

                    <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide">
                      *We hold high security guidelines. Your details remain private and are only used for audits.
                    </span>

                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6 font-mono text-slate-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">Audit Request Received</h3>
                      <p className="text-xs text-slate-405 font-sans leading-relaxed text-slate-400 max-w-sm mx-auto">
                        Thank you for reaching out. Our SaaS scaling analysts are already running sitemaps audits and inspecting your organic comparisons parameters.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-950 border border-indigo-950 rounded-xl font-mono text-[11px] text-slate-300 max-w-md mx-auto text-left space-y-2">
                      <span className="text-brand-teal font-extrabold uppercase text-[9px] block">Next Execution Step:</span>
                      <p className="font-sans font-medium">We will deliver your diagnostic report to <strong className="text-white">{auditForm.email}</strong> within 12-24 business hours.</p>
                      <p className="font-sans font-medium">If you want immediate priority action, contact us via WhatsApp: <strong className="text-white">{CONTACT_NUMBER}</strong></p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setAuditSubmitted(false);
                          setAuditForm({ companyName: '', websiteUrl: '', mrrRange: '$10,000 - $50,000', challenges: '', email: '', phone: '' });
                        }}
                        className="text-[10px] text-brand-teal hover:underline uppercase font-bold"
                      >
                        Reset Application Form
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER ACTION BANNER AREA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-t from-slate-955 to-[#040715] text-center border-t border-indigo-950 select-none">
        <div className="absolute inset-0 bg-[#020510]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3.5 py-1.5 rounded-full border border-brand-teal/30 font-mono">
            SCALE REVENUE NOW
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-none font-sans tracking-tight">
            Ready to Scale Your SaaS Growth?
          </h2>

          <p className="text-slate-350 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans text-slate-300">
            Secure more organic trials, schedule demo appointments, minimize trial churn, lower Customer CAC metrics, and consistently expand MRR scaling curves.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono justify-center">
            <a 
              href="#free-saas-audit-form" 
              className="bg-brand-teal text-slate-950 font-black px-8 py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition duration-300 text-center flex items-center justify-center space-x-2"
              id="cta-saas-audit-btn"
            >
              <span>Request Free SaaS Audit</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-950 border border-indigo-900 hover:border-brand-teal text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-300 text-center flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Consult with a SaaS Expert</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-indigo-950/40 text-[10.5px] text-slate-500 font-mono font-bold max-w-xl mx-auto">
            <span>✓ EXPERT SUPPORT TEAM</span>
            <span>✓ VERIFIED SAAS PATHWAYS</span>
            <span>✓ DETAILED VISIBLE REPORTING</span>
          </div>
        </div>
      </section>

    </div>
  );
}

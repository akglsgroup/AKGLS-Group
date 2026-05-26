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
  MapPin, Star, MessageCircle, RefreshCw, ShoppingBag, ArrowDownRight, Info
} from 'lucide-react';

interface B2BLeadGenerationServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const b2bSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "B2B Lead Generation & Account-Based Marketing",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "AI-powered B2B lead generation, LinkedIn outreach, cold email automation, enterprise ABM campaign designs, and CRM closed-loop integration pipelines.",
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
      "name": "What is B2B lead generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B2B lead generation is the process of identifying, attracting, and qualifying business prospects (decision-makers) for your products or services, converting them into active sales pipeline opportunities."
      }
    }
  ]
}`
};

export default function B2BLeadGenerationServicesPage({ onBackToHome, openProposalForm }: B2BLeadGenerationServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "B2B Lead Generation Services | B2B Lead Generation Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // B2B Pipeline Growth & Deal Calculator States
  const [currentLeads, setCurrentLeads] = useState<number>(30);
  const [closeRate, setCloseRate] = useState<number>(10); // Close rate in percent
  const [dealSize, setDealSize] = useState<number>(15000); // Deal value in USD
  const [salesCycleDays, setSalesCycleDays] = useState<number>(90); // Length of sales cycle

  const calculatePipeline = () => {
    // Current state
    const currentClosedDeals = Math.round(currentLeads * (closeRate / 100));
    const currentPipelineValue = currentLeads * dealSize;
    const currentMonthlyRevenue = currentClosedDeals * dealSize;

    // AKGLS Optimized state: 2.2x Leads volume, 1.4x Close rate lift (from better lead qualification/scoring)
    const optimizedLeads = Math.round(currentLeads * 2.2);
    const optimizedCloseRate = parseFloat((closeRate * 1.4).toFixed(1));
    const optimizedClosedDeals = Math.round(optimizedLeads * (optimizedCloseRate / 100));
    const optimizedPipelineValue = optimizedLeads * dealSize;
    const optimizedMonthlyRevenue = optimizedClosedDeals * dealSize;
    
    const monthlyRevenueLift = optimizedMonthlyRevenue - currentMonthlyRevenue;
    const annualRevenueLift = monthlyRevenueLift * 12;
    const PercentageGain = currentMonthlyRevenue > 0 ? Math.round((monthlyRevenueLift / currentMonthlyRevenue) * 105) : 0;

    return {
      currentClosedDeals,
      currentPipelineValue,
      currentMonthlyRevenue,
      optimizedLeads,
      optimizedCloseRate,
      optimizedClosedDeals,
      optimizedPipelineValue,
      optimizedMonthlyRevenue,
      monthlyRevenueLift,
      annualRevenueLift,
      PercentageGain
    };
  };

  const results = calculatePipeline();

  // Active industry
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  const b2bIndustries = [
    { name: "SaaS & Technology", cases: "+240% Demo Booking Rate", desc: "Interactive growth loops targeting CTOs and product managers. Built with AI-personalized cold outreach, high-intent Google search positioning, and automated trial signup workflows.", bg: "from-sky-950 to-indigo-950" },
    { name: "Manufacturing", cases: "$1.2M Contract Secured", desc: "Precision account-based targeting to operations directors and supply chain executives. Leverages regional sitemap targeting, heavy equipment spec sheets, and high-trust review badges.", bg: "from-slate-900 to-amber-950" },
    { name: "Finance", cases: "4.8x Pipeline ROI", desc: "Compliance-first campaigns aiming at CFOs and compliance heads. Multi-touch LinkedIn campaigns aligned with executive whitepapers and interactive ROI spreadsheets details.", bg: "from-blue-950 to-cyan-950" },
    { name: "Healthcare", cases: "+180 B2B Hospital Leads", desc: "Direct targeting of clinic directors and hospital administrators. Powered with HIPAA-aligned consultation landing pages and medical-grade trust badges.", bg: "from-emerald-950 to-teal-950" },
    { name: "IoT Companies", cases: "3.2x MQL to SQL Conversion", desc: "Targeted developer and technical director acquisition. Backed by detailed physical spec schema markup, API access sandbox modules, and deep content clusters.", bg: "from-indigo-950 to-purple-950" },
    { name: "Logistics", cases: "94% Sales Pipeline Scale", desc: "Connecting enterprise fleet logistics with procurement decision-makers. Built with fuel-savings calculators, geographic route planning charts, and direct booking triggers.", bg: "from-stone-900 to-green-950" },
    { name: "Real Estate", cases: "12 Enterprise Partner Signups", desc: "Reaching property investors and commercial management firms. Leverages high-contrast PDF presentation downloads, investor-focused SEO, and warm email sequences.", bg: "from-amber-950 to-orange-950" },
    { name: "Consulting Firms", cases: "+410% Qualified Inquiries", desc: "Positioning leadership thought-guides over LinkedIn. Supported with premium article schema publication, webinar coordination, and personalized meeting links.", bg: "from-rose-950 to-red-950" },
    { name: "Enterprise Services", cases: "7.1x Absolute Strategy ROI", desc: "ABM framework targeting Fortune 1000 executives. Custom mini-landing pages, bespoke physical gift triggers, and multi-channel executive touchpoints.", bg: "from-zinc-900 to-indigo-900" }
  ];

  // B2B Services List
  const b2bServices = [
    {
      id: 1,
      title: "1. B2B Lead Generation Strategy",
      tag: "⭐ Core Service",
      desc: "Architect a custom lead blueprint. We define your exact Ideal Customer Profile (ICP), design high-converting response playbooks, optimize CRM parameters, and construct multi-stage outreach blueprints.",
      highlights: ["Ideal Customer Profile (ICP) definition", "Lead tracking integration schemas", "Buying cohort mapping", "Closed-loop pipeline checklists"],
      goal: "Eliminate dry cold calls by creating a predictable strategy for warm, pre-qualified opportunities."
    },
    {
      id: 2,
      title: "2. LinkedIn Lead Generation",
      tag: "High Value Outreach",
      desc: "Hyper-focused LinkedIn Sales Navigator scraping paired with friendly, professional, manually-guided direct messaging loops to secure direct executive meetings.",
      highlights: ["Laser targeted search setups", "1-on-1 personalized messaging blocks", "Automated scheduling system triggers", "Active corporate profile optimization"],
      goal: "Place your solutions directly in the private inboxes of decision-makers (CTOs, VPs, CFOs, CEOs)."
    },
    {
      id: 3,
      title: "3. SEO for B2B Lead Generation",
      tag: "Permanent Organic Pipeline",
      desc: "Bespoke high-intent technical SEO focusing on business keywords. We develop custom product schemas, content calendars, and crawl optimization plans.",
      highlights: ["Commercial-intent keyword grids", "Landing sitemap index boosts", "Targeted whitepaper sitemaps", "Speed & mobile-UX enhancements"],
      goal: "Rank #1 on Google when businesses actively search for vendors, partners, or solutions."
    },
    {
      id: 4,
      title: "4. Google Ads & PPC Lead Generation",
      tag: "Instant High-Intent Traffic",
      desc: "Launch high-intent Search campaigns targeting transactional commercial keywords to deliver instant sales leads, supported by negative keyword pruning systems.",
      highlights: ["Strategic transactional ad copies", "Single Keyword Ad Groups setup", "Multi-platform remarketing calendars", "Lead registration goal trackers"],
      goal: "Capture immediate market demand with high-converting, budget-optimized paid search campaigns."
    },
    {
      id: 5,
      title: "5. Account-Based Marketing (ABM)",
      tag: "High-Value Enterprise Scale",
      desc: "Treat single high-value target companies as their own individual markets. We launch hyper-targeted, multi-channel personalized ad campaigns and custom landing pages.",
      highlights: ["Enterprise key stakeholder listings", "Tailored IP-targeted banner displays", "Personalized custom video demos", "1-on-1 physical gift sequence calendars"],
      goal: "Break into major global enterprises by displaying custom-suited messaging to internal stakeholders."
    },
    {
      id: 6,
      title: "6. AI-Powered Lead Generation",
      tag: "⭐ Trending Service",
      desc: "Secure top placement when AI-powered engines (ChatGPT, Claude, Perplexity) recommend industry alternatives. This includes semantic schema markup configurations.",
      highlights: ["Generative search optimization indexings", "Predictive buyer demographic scoring", "Smart conversational intent templates", "Scoring-based lead routing schedules"],
      goal: "Secure native recommendations in AI chat client responses when enterprise buyers seek business options."
    },
    {
      id: 7,
      title: "7. Email Outreach & Automation",
      tag: "High Conversion Lift",
      desc: "High-deliverability cold and warm email sequencers, structured to land directly in standard inbox folders and generate genuine text responses.",
      highlights: ["Dynamic text variable codes", "SPF / DKIM / DMARC deliverability audits", "Staggered automated response plans", "CRM integrated follow-up lists"],
      goal: "Consistently warm up cold accounts with high-grade, natural-looking multi-step nurture content."
    },
    {
      id: 8,
      title: "8. B2B Landing Page Optimization",
      tag: "Conversion rates focus",
      desc: "Engineered single-purpose conversion frameworks with minimal click paths, trust shield features, and high-contrast, lightning-speed loading grids.",
      highlights: ["Direct executive title-pair headlines", "Single-field registration panels", "Case study preview drawer cards", "Mobile responsive interactive views"],
      goal: "Maximize your PPC and organic traffic returns by packing pages with premium conversion cues."
    },
    {
      id: 9,
      title: "9. CRM & Sales Funnel Integration",
      tag: "Sales Automation",
      desc: "Sync marketing databases cleanly with Salesforce, HubSpot, or GoHighLevel. We map automated pipelines, custom tags, and lead assignment triggers.",
      highlights: ["Custom API webhook alignments", "Score-based target group alerts", "Automated booking integration", "Drop-off point performance charts"],
      goal: "Equip your sales reps with clean, instant prospect notifications to reduce response latency."
    },
    {
      id: 10,
      title: "10. B2B Consulting & Growth Strategy",
      tag: "Strategic Planning",
      desc: "Regular high-level corporate consultations to map GTM (Go-To-Market) pipelines, analyze competitor pipelines, and audit system overhead leaks.",
      highlights: ["Fractional CMO marketing reviews", "Audits of competitor product matrices", "Expansion sitemaps strategies", "Revenue forecast spreadsheet charts"],
      goal: "Avoid costly trial-and-error by implementing refined corporate scaling playbooks."
    }
  ];

  // Process Steps
  const b2bProcess = [
    { step: "Step 1: Market & Audience Research", desc: "Drafting the exact client target lists. We analyze competitor acquisition vectors, map buyer purchase motivations, and build exact Ideal Customer Profile metrics." },
    { step: "Step 2: Funnel Strategy Development", desc: "Outlining the multi-channel pipeline. Designing lead scoring models, landing pages, custom sitemaps, and automated follow-up sequences." },
    { step: "Step 3: Campaign Setup & Outreach", desc: "Setting up dedicated email domains, establishing high-intent Search keywords, initiating custom LinkedIn targeting lists, and deploying sitemaps." },
    { step: "Step 4: Lead Qualification & Optimization", desc: "Analyzing conversion actions using real data. Filtering trash enrollments, adjusting audience bounds, and accelerating appointment setting speeds." },
    { step: "Step 5: Reporting & Scaling", desc: "Delivering real pipeline value data. Transparent reporting tracking Cost-per-Acquisition (CPA), Return on Ad Spend (ROAS), and scaling campaigns to drive sustainable volume." }
  ];

  // Case study
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);
  const b2bCaseStudies = [
    {
      client: "InnoTech Enterprise SaaS",
      challenge: "Struggling to set meetings with Fortune 500 CIOs using simple cold outreach.",
      strategy: "Deployed Account-Based Marketing (ABM) combined with precision LinkedIn Sales Navigator scraping and whitepaper SEO targeting.",
      leads: "+340% enterprise meetings booked",
      revenue: "$1.4M pipeline value added in 90 days",
      roas: "12.4x Campaign ROI",
      beforeUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "Apex Global Logistics",
      challenge: "High ad spend on generic Google keywords with sub-par commercial Lead quality.",
      strategy: "Restructured Google Paid Ads into transactional keywords, eliminated poor target segments, and launched a dedicated speed-optimized B2B landing page.",
      leads: "-45% Cost Per Lead (CPL) drop",
      revenue: "$850k in contracted client shipping deals",
      roas: "5.8x Immediate PPC ROAS",
      beforeUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // FAQ collapses
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const b2bFaqs = [
    { q: "What is B2B lead generation?", a: "B2B (Business-to-Business) lead generation is the process of identifying, attracting, and qualifying business prospects (such as decision-makers and C-suite executives) for your products or services, converting them into active, qualified sales opportunities." },
    { q: "How can businesses generate high-quality B2B leads?", a: "By using an integrated multi-channel approach. This combines high-intent search visibility (SEO and intentional Search PPC), targeted outbound campaigns (LinkedIn outreach & professional email automation), clear conversion environments (landing optimized pages), and database qualification tools (CRM systems and lead scoring)." },
    { q: "Is LinkedIn good for B2B lead generation?", a: "LinkedIn is arguably the most powerful network for B2B deals because it holds precise, real-time filters for job titles, corporate size, location, and hierarchy. Integrated with Sales Navigator, we can hyper-target decision-makers (CTOs, VPs, CFOs) with absolute precision." },
    { q: "What is Account-Based Marketing (ABM)?", a: "Account-Based Marketing is an enterprise marketing method where strategic key client accounts are treated as individual, dedicated markets. Instead of blasting generic ads, we construct highly personalized assets and personalized outreach strategies tailored exclusively to the decision-makers at those target companies." },
    { q: "Can AI improve B2B lead generation?", a: "Yes. By deploying AI, we can automate predictive audience prospecting, perform deep semantic keyword analyses, structure schemas to rank natively in AI client responses (ChatGPT, Claude, Gemini searches), and monitor real-time CRM activities to optimize sales cycles." },
    { q: "How long does lead generation take to start producing results?", a: "Outbound digital PPC ads and LinkedIn outreach campaigns typically generate initial pipeline meetings within 10 to 15 days of going live. Technical organic SEO and deep content cluster strategies compound and deliver massive, permanent leads over 60 to 90 days." },
    { q: "Which industries benefit most from B2B lead generation?", a: "SaaS providers, technology corporations, legal networks, enterprise financial institutions, commercial real estate developers, massive logistics entities, and manufacturing firms seeking long-term B2B contract agreements." }
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
    industry: 'SaaS & Technology',
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
    <div id="b2b-lead-generation-services-page" className="bg-[#02050f] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
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
          <span>B2B Pipeline Servers: Operational</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center gap-1"
            id="back-home-b2b-btn"
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
                <span>AI-Powered B2B Pipelines</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none font-sans">
                B2B Lead Generation Services That Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-sky-400">High-Quality Business Leads</span> & Sales Opportunities
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Scale your B2B enterprise pipeline with AI-driven strategy: LinkedIn lead scraping, professional high-intent SEO, target PPC, Account-Based Marketing (ABM) grids, CRM pipelines, and automated response architectures.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#free-b2b-audit-form" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-b2b-audit-btn"
                >
                  <span>Get Free Lead Generation Audit</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </a>
                <a 
                  href="#b2b-pipeline-calculator"
                  onClick={() => {
                    const el = document.getElementById('b2b-pipeline-calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-350 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal animate-pulse" />
                  <span>Pipeline & Close Estimator</span>
                </a>
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-indigo-950/40 font-mono text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>B2B Lead Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>AI Prospecting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Sales Funnel Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>ROI-Focused Strategies</span>
                </div>
              </div>

            </div>

            {/* Hero Right: Pipeline Simulator Card */}
            <div className="lg:col-span-5 relative" id="b2b-pipeline-calculator">
              <div className="bg-[#0b0e20] rounded-3xl p-6 border border-indigo-950 shadow-2xl relative overflow-hidden text-left font-mono">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40 mb-5">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-bold uppercase">Pipeline ROI Simulator</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-indigo-900 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    CLOSED-LOOP VALUE
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  
                  {/* Monthly Leads slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Avg. Monthly Leads:</span>
                      <span className="text-sky-400 font-bold">{currentLeads} Prospects</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="300" 
                      step="5"
                      value={currentLeads}
                      onChange={(e) => setCurrentLeads(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-sky-400"
                    />
                  </div>

                  {/* Close Rate slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Close Rate (%):</span>
                      <span className="text-indigo-400 font-bold">{closeRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="40" 
                      step="1"
                      value={closeRate}
                      onChange={(e) => setCloseRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-indigo-400"
                    />
                  </div>

                  {/* Deal Size slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Average Deal/Contract Size:</span>
                      <span className="text-brand-teal font-bold">${dealSize.toLocaleString()} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="100000" 
                      step="2500"
                      value={dealSize}
                      onChange={(e) => setDealSize(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Matrix Block Output */}
                  <div className="bg-slate-950 border border-indigo-950 rounded-xl p-4 grid grid-cols-2 gap-4 text-left">
                    
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black block">Current Closed Deals</span>
                      <span className="text-base font-black text-slate-400">{results.currentClosedDeals} / mo</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black block">Current Revenue</span>
                      <span className="text-base font-black text-slate-400">${results.currentMonthlyRevenue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black block">AKGLS Leads Target</span>
                      <span className="text-base font-black text-brand-teal">{results.optimizedLeads} Leads (2.2x)</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black block">Est. Close Rate</span>
                      <span className="text-base font-black text-brand-teal">{results.optimizedCloseRate}% Qual.</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-indigo-900/60 flex justify-between items-center bg-indigo-950/20 px-2.5 py-2 rounded-lg border border-indigo-900/55 mt-1">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[9px] text-slate-300 uppercase font-black block">Monthly Pipeline Lift</span>
                        <span className="text-xs text-slate-400 hover:underline">Annual boost: +${results.annualRevenueLift.toLocaleString()}</span>
                      </div>
                      <span className="text-lg font-black text-emerald-450 text-emerald-400 animate-pulse block font-mono">
                        +${results.monthlyRevenueLift.toLocaleString()}
                      </span>
                    </div>

                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide">
                    *Returns projected with multi-touchpoint warming arrays, customized sitemaps, and account validation metrics.
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
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold font-mono">PROVEN B2B PIPELINE PARTNER</h2>
            <p className="text-[10px] text-slate-500 uppercase">Driving growth metrics for high-growth tech platforms and global corporate sellers.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono font-extrabold pb-8">
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-white block">24,500+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Qualified B2B Leads Generated</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal block">4,200+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Sales Meetings (SQLs) Hooked</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-white block">38%</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Avg Pipeline Conversion Lift</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal block">84+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">B2B Enterprise Accounts Scaled</p>
            </div>
          </div>

          {/* Core corporate credibility badges */}
          <div className="pt-6 border-t border-indigo-950/60 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-405 text-slate-400 font-mono font-bold">
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded">★ LINKEDIN SOLUTIONS PROVIDER</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-blue-400">★ HUBSPOT PARTNER ALIGNED</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-emerald-400">★ SALESFORCE DEV CAPABLE</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-amber-500">★ GOOGLE SEARCH & PPC INSIGHTS</span>
          </div>

        </div>
      </section>

      {/* WHAT IS B2B LEAD GENERATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-1 font-mono">
                <Briefcase className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>WHAT IS B2B LEAD GENERATION?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans text-left">
                Transform Unknown Visitors Into Qualified Sales Meetings
              </h2>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-sans text-left font-normal">
                <p>
                  B2B Lead Generation services represent a deliberate, analytical framework mapped out to scan, targets, qualify, and warm corporate decision-makers before passing them to internal closed-loop sales channels.
                </p>
                <p>
                  Instead of relying on spam cold outreach tactics or blank PPC budgets, we establish an **Omnichannel Pipeline**.
                </p>
                <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs font-mono">
                  Your team can intercept prospective buyers researching online via our custom technical B2B SEO structures, track and target them with warm LinkedIn touchpoints, and auto-feed data into CRMs to keep sales reps alert.
                </p>
                <p>
                  This holistic mapping optimizes acquisition costs, reduces sales pipeline drop-offs, and drives continuous MRR scaling curves.
                </p>
              </div>

            </div>

            {/* Right Funnel Panel representation */}
            <div className="lg:col-span-6 bg-[#0b0f20] border border-indigo-950 p-6 rounded-2xl relative font-mono text-xs">
              
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-indigo-950 pb-3 mb-4">
                Structured Enterprise Funnel Layout
              </h3>

              <div className="space-y-3">
                
                {/* Level 1 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-brand-teal font-extrabold block uppercase">1. Profiling & Target lists</span>
                    <span className="text-slate-400 text-[11px] font-sans">Ideal Customer Profile (ICP), Sales Nav filter parameters setup</span>
                  </div>
                  <span className="bg-brand-teal/5 text-brand-teal border border-brand-teal/30 text-[9px] px-2 py-0.5 rounded uppercase font-bold">ICP Matrix</span>
                </div>

                {/* Level 2 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-indigo-400 font-extrabold block uppercase">2. Multi-Touch warming Outreach</span>
                    <span className="text-slate-400 text-[11px] font-sans">Corporate sitemaps, personalized text email loops, LinkedIn connection</span>
                  </div>
                  <span className="bg-indigo-950 text-indigo-400 border border-indigo-800 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Warmed Accounts</span>
                </div>

                {/* Level 3 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-sky-400 font-extrabold block uppercase">3. Qualifying & Lead Scoring</span>
                    <span className="text-slate-400 text-[11px] font-sans">Evaluating intent parameters, form registrations, interactive tool usage</span>
                  </div>
                  <span className="bg-sky-950 text-sky-450 text-sky-400 border border-sky-800 text-[9px] px-2 py-0.5 rounded uppercase font-bold">MQL to SQL</span>
                </div>

                {/* Level 4 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-yellow-500 font-extrabold block uppercase">4. CRM closed pipeline</span>
                    <span className="text-slate-400 text-[11px] font-sans">Synched databases, instant representative alerts, booking maps integration</span>
                  </div>
                  <span className="bg-yellow-950/50 text-yellow-500 border border-yellow-800/50 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Sales Meetings</span>
                </div>

              </div>

              <div className="pt-4 border-t border-indigo-950 mt-4 text-center">
                <a href="#free-b2b-audit-form" className="text-[10.5px] text-brand-teal font-extrabold hover:underline inline-flex items-center gap-1.5 uppercase font-mono">
                  <span>Diagnose Your Sales Pipeline Gaps Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY B2B LEAD GENERATION MATTERS (BENEFITS GRID) */}
      <section className="py-20 bg-[#061022]/30 border-y border-indigo-950/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">STRATEGIC HIGHLIGHTS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              Why Predictable B2B Lead Gen Matters
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Without active pipelines, business revenue stalls. We maximize closed deals rates, optimize corporate outreach bounds, and slash target acquisition costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-xs font-mono">
            
            {/* Benefit 1 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10 mb-2">
                <Users className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Generate Qualified Prospects</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Deliver highly customized messaging that targets key decision makers, pre-qualifying leads based on budget, need, and authority parameters.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/10 mb-2">
                <LineChart className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Improve Sales Pipeline</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Maintain clean records. Automatically update lead tracking stages inside HubSpot or Salesforce with direct appointment booking hooks.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal border border-brand-teal/20 mb-2">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Shorten Sales Cycles</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Bypass layers of administrative gatekeepers. Go direct to top executives who hold immediate budget clearance metrics and project authorization plans.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/10 mb-2">
                <CheckSquare className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Enhance Client LTV & ROI</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Acquire high-value corporate partners who remain signed to recurring digital contracts, providing stable income base margins.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/10 mb-2">
                <Rocket className="w-5 h-5 animate-bounce" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Scale Revenue Forecasts</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Create an outbound generation engine that doesn't rely solely on word-of-mouth. Gain absolute clarity on how much spend expands pipeline value.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/10 mb-2">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Elevate Industry Status</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Build brand authority. Distribute premium sector whitepapers, establish high authority organic listings, and stand as the prominent market sector choice.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICE LIST SECTION */}
      <section id="b2b-services" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">CAPABILITIES BLUEPRINT</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Our B2B Lead Generation Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal font-sans text-slate-300">
            Proven multi-channel execution modules engineered to align outbound pipelines, technical organic positioning, and sales pipeline scaling.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {b2bServices.map((srv, index) => (
            <div 
              key={index}
              className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start font-mono text-left">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest">{srv.tag}</span>
                  <span className="text-slate-650 text-slate-500 text-[10px]">Module {index + 1} of 10</span>
                </div>
                
                <h3 className="text-xl font-bold text-white font-sans hover:text-brand-teal transition tracking-tight text-left">{srv.title}</h3>
                
                <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-sans font-normal text-left text-slate-300">
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
                <span className="text-[9px] text-slate-550 text-slate-450 block uppercase font-bold text-brand-teal">Target Outcome:</span>
                <p className="text-[11px] text-slate-400 italic mt-0.5 leading-snug">{srv.goal}</p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* B2B INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-950 border-t border-indigo-950">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left selector col */}
            <div className="lg:col-span-5 space-y-6">
              
              <span className="text-xs font-bold text-brand-teal uppercase tracking-wider bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">CUSTOM SECTOR SOLUTIONS</span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-sans">
                Proven Lead Frameworks Aligned to Your Target Industry
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Generic sales strategies fail. We customize acquisition metrics, database targeting filters, sitemaps, and outreach templates to match your company's vertical sector requirements exactly.
              </p>

              {/* Vertically scrollable buttons lists */}
              <div className="space-y-2.5 pt-4 font-mono select-none">
                {b2bIndustries.map((ind, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => setSelectedIndustry(iIdx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs flex justify-between items-center ${
                      selectedIndustry === iIdx 
                        ? 'bg-[#0a0f25] border-brand-teal text-white shadow-lg' 
                        : 'bg-slate-900/50 border-indigo-950 text-slate-400 hover:border-indigo-900 hover:text-white'
                    }`}
                  >
                    <span className="font-bold uppercase tracking-wider">{ind.name}</span>
                    <span className="text-[9.5px] font-bold text-brand-teal uppercase">{ind.cases}</span>
                  </button>
                ))}
              </div>

            </div>

            {/* Right details board changes on select state */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-[#050818] border border-indigo-950 rounded-3xl p-8 relative overflow-hidden bg-gradient-to-br ${b2bIndustries[selectedIndustry].bg} text-left`}
                >
                  <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/10 select-none">
                    SECTOR_MODULE_ACTIVE
                  </div>

                  <div className="space-y-6 font-mono">
                    <span className="bg-brand-teal text-slate-950 text-[10px] uppercase. tracking-widest font-extrabold px-3 py-1 rounded font-mono">
                      {b2bIndustries[selectedIndustry].name} Sector Setup
                    </span>

                    <h3 className="text-2xl font-bold font-sans text-white leading-tight tracking-tight pt-2">
                      Key Metric Focus: {b2bIndustries[selectedIndustry].cases}
                    </h3>

                    <p className="text-slate-300 text-sm font-sans leading-relaxed pt-1">
                      {b2bIndustries[selectedIndustry].desc}
                    </p>

                    <div className="pt-6 border-t border-indigo-900/50 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-brand-teal text-[9.5px] uppercase block font-bold">Warming Pipeline Method:</span>
                        <span className="text-slate-400">Account scoring & multi-touchpoints alerts.</span>
                      </div>
                      <div>
                        <span className="text-brand-teal text-[9.5px] uppercase block font-bold">Standard Close-Up Latency:</span>
                        <span className="text-slate-400">Generally reduces client acquisition friction by 35%.</span>
                      </div>
                    </div>

                    <div className="pt-4 text-left">
                      <a href="#free-b2b-audit-form" className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 transition tracking-wider inline-flex items-center gap-2">
                        <span>Deploy sector scaling plans</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS TIMELINE ROADMAP */}
      <section className="py-20 bg-[#061022]/30 border-y border-indigo-950/60 font-mono">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">ACQUISITION BLUEPRINT</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              Our B2B Lead Generation Process
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We deploy absolute compliance parameters. Continuous optimization logs refine outbound campaigns, technical organic sitemaps, and database triggers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-left">
            {b2bProcess.map((proc, index) => (
              <div 
                key={index} 
                className="bg-[#090e1d] border border-indigo-950 p-6 rounded-2xl relative hover:border-brand-teal/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-brand-teal font-extrabold text-sm border-b border-indigo-950 pb-2.5 mb-4 flex items-center justify-between">
                    <span>{proc.step.split(":")[0]}</span>
                    <span className="text-[10px] bg-indigo-950 px-2 py-0.5 rounded text-indigo-400">P{index + 1}</span>
                  </div>
                  <h4 className="text-[12.5px] font-bold text-white uppercase tracking-wider mb-2 font-sans">{proc.step.split(":")[1] || proc.step}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans font-normal text-slate-350">{proc.desc}</p>
                </div>
                
                <span className="text-[40px] font-black text-indigo-950/20 block text-right mt-6 select-none leading-none">0{index + 1}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUTREACH & FUNNEL INTEGRATED SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          {/* Left illustration content */}
          <div className="lg:col-span-5 space-y-6">
            
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">LINKEDIN OUTBOUND OUTLINE</span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-sans">
              Connect Directly with Top Decision Makers 1-on-1
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal">
              Traditional cold emails trigger spam filters. We combine personal outbound profiles, strategic content publishing pipelines, in-depth CRM automations, and custom-warmed inboxes to make interactions feel completely natural.
            </p>

            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-brand-teal w-4 h-4" />
                <span>Hyper-targeted lists matching corporate budgets and locations.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-brand-teal w-4 h-4" />
                <span>Professional messaging focusing on quick booking opportunities.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-brand-teal w-4 h-4" />
                <span>Warmed sitemaps indexing that builds executive search authority.</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="#free-b2b-audit-form" className="bg-brand-teal hover:bg-white text-slate-950 font-extrabold text-xs uppercase px-6 py-4 rounded-xl transition shadow-lg inline-flex items-center gap-2">
                <span>Configure outreach framework</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>

          </div>

          {/* Right Live outreach simulator representations */}
          <div className="lg:col-span-5 bg-[#0a0d1d] border border-indigo-950 p-6 rounded-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-xl" />
            
            <div className="flex items-center justify-between border-b border-indigo-900/50 pb-3 mb-4 text-xs">
              <span className="font-bold text-slate-300">Live LinkedIn Outreach Stream:</span>
              <span className="text-[10px] bg-brand-teal/10 text-brand-teal font-extrabold py-0.5 px-2 rounded-full">ACTIVE SECURE</span>
            </div>

            <div className="space-y-4 font-mono text-left text-[11px]">
              
              {/* Message 1 */}
              <div className="bg-slate-950 border border-indigo-950 p-3 rounded-lg text-left">
                <span className="text-sky-400 font-extrabold block">Target stakeholder (VP Logistics):</span>
                <p className="text-slate-400 italic mt-1 leading-snug">
                  "Hi Amrish, noticed your team scaled trans-regional routes recently. We built an AI route optimization model that reduced transit fuel costs by 22% for logistics firms. Worth a brief 5-min review?"
                </p>
              </div>

              {/* Response 1 */}
              <div className="bg-[#0b1425] border border-brand-teal/30 p-3 rounded-lg text-left">
                <span className="text-emerald-400 font-extrabold block">Executive Client Response:</span>
                <p className="text-slate-350 italic mt-1 leading-snug">
                  "Hey, that actually lines up with what we are auditing this week. Do you have a direct calendar link? Let's talk Thursday afternoon."
                </p>
              </div>

              {/* Status indicator */}
              <div className="bg-slate-950 p-3 rounded-lg flex items-center justify-between border border-indigo-950 text-[10px]">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-400 uppercase font-bold">CALENDLY MEETING BOOKED</span>
                </div>
                <span className="text-indigo-400 font-bold uppercase underline">Sales Rep notified</span>
              </div>

            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* AI-POWERED B2B LEAD GENERATION (FUTURE FOCUSSED) */}
      <section className="py-20 bg-slate-950 border-t border-indigo-950">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-1" />

            <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left image details illustration placeholder */}
              <div className="lg:col-span-5 relative order-last lg:order-first">
                <div className="bg-[#070b18] border border-indigo-950 rounded-3xl p-6 relative overflow-hidden font-mono text-xs">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-xl" />
                  
                  <div className="flex items-center justify-between border-b border-indigo-900/50 pb-3 mb-4 font-bold text-slate-300 uppercase">
                    <span>AI SEO Schema Coordinates</span>
                    <span className="text-brand-teal">BOT INDEX READY</span>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-xl border border-indigo-955 border-indigo-950/60 font-mono text-[10px] text-slate-400 overflow-x-auto select-all max-h-48 whitespace-pre">
                    {`"@context": "https://schema.org",
"@type": "Product",
"name": "Enterprise SaaS Growth License",
"description": "Multi-regional B2B search automation integrations",
"offers": {
  "@type": "Offer",
  "price": "Negotiable on Strategy call",
  "priceCurrency": "USD"
}`}
                  </div>

                  <p className="text-[10px] text-slate-500 italic mt-3 leading-snug">
                    *Schema injections allow model parsers (Gemini, ChatGPT) to scrape and recommend your products directly during natural conversations.
                  </p>

                </div>
              </div>

              {/* Right content details */}
              <div className="lg:col-span-7 space-y-6">
                
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3.5 py-1.5 rounded-full border border-brand-teal/30 font-mono">TRENDING: AI COMMERCE ACQUISITIONS</span>
                
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
                  AI-Powered Lead Generation & Sales Automation
                </h2>

                <p className="text-sm text-slate-350 leading-relaxed font-sans font-normal text-slate-300">
                  Modern decision makers query AI clients (Perplexity, ChatGPT, Claude) to compare business software, equipment, or service providers. If your sitemaps are not calibrated semantically, you simply do not exist to these buyers.
                </p>

                <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs font-mono">
                  We program custom AI SEO parameters alongside JSON sitemaps so AI engines recommend your corporate solutions natively when buyers ask for vertical recommendations.
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-brand-teal uppercase font-extrabold block">Predictive Lead Scoring:</span>
                    <span className="text-slate-400 font-sans">Scrape intent indicators (downloads, visits) to filter junk enrollments automatically.</span>
                  </div>
                  <div>
                    <span className="text-brand-teal uppercase font-extrabold block">AI outreach warming:</span>
                    <span className="text-slate-400 font-sans">Draft responsive, localized messages tailored to custom corporate history logs.</span>
                  </div>
                </div>

              </div>

            </div>

            <div className="lg:col-span-1" />

          </div>
        </div>
      </section>

      {/* CASE STUDIES SUCCESS TIMELINES */}
      <section className="py-20 bg-[#080d1e]/45 border-y border-indigo-950/60 font-mono">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">CASE HISTORY LOGS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              B2B Lead Generation Success Stories
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Real enterprise audits. We resolve structural dry spells and scale predictable business partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {b2bCaseStudies.map((cs, cIdx) => (
              <div 
                key={cIdx}
                className="bg-slate-900/50 border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/20 transition-all text-left"
              >
                <div className="flex justify-between items-start border-b border-indigo-900/50 pb-3 mb-4 font-mono text-xs">
                  <span className="font-extrabold text-white text-base">{cs.client}</span>
                  <span className="bg-brand-teal/10 text-brand-teal font-extrabold py-0.5 px-2 rounded uppercase tracking-wider">{cs.roas}</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-500 uppercase block font-bold text-[9.5px]">Challenge parameters:</span>
                    <p className="text-slate-300 font-sans">{cs.challenge}</p>
                  </div>

                  <div>
                    <span className="text-brand-teal uppercase block font-bold text-[9.5px]">Strategic scale-up:</span>
                    <p className="text-slate-350 font-sans">{cs.strategy}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-indigo-900/40 font-mono">
                    <div>
                      <span className="text-slate-500 uppercase block font-bold text-[9.5px]">Meetings Booked:</span>
                      <span className="text-emerald-400 font-extrabold text-sm block mt-0.5">{cs.leads}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 uppercase block font-bold text-[9.5px]">Pipeline Value Uplift:</span>
                      <span className="text-emerald-400 font-extrabold text-sm block mt-0.5">{cs.revenue}</span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SCHEMA INJECTION INTERACTIVE VIEWER */}
      <section className="py-16 bg-[#040716] border-b border-indigo-950 font-mono">
        <div className="max-w-5xl mx-auto px-4 text-left">
          
          <div className="space-y-3.5 mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
              B2B Metadata Integration Schema
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              We structure custom JSON schema markups to enhance crawl frequency. Copy templates or adapt layouts direct to your corporate directories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service schema */}
            <div className="bg-slate-900/85 border border-indigo-950 p-5 rounded-2xl relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-slate-400 uppercase font-black">B2B SERVICE SCHEMA:</span>
                <button
                  onClick={() => copySchemaText(b2bSchemaTemplates.service, 'service')}
                  className="text-[10px] text-brand-teal font-black hover:underline uppercase flex items-center gap-1.5 focus:outline-none"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedKey === 'service' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
              <pre className="bg-slate-950 p-3.5 rounded-xl text-[10.5px] text-slate-400 max-h-56 overflow-y-auto select-all overflow-x-hidden whitespace-pre-wrap leading-tight">
                {b2bSchemaTemplates.service}
              </pre>
            </div>

            {/* FAQ structure */}
            <div className="bg-slate-900/85 border border-indigo-950 p-5 rounded-2xl relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-slate-400 uppercase font-black">B2B FAQ SCHEMA:</span>
                <button
                  onClick={() => copySchemaText(b2bSchemaTemplates.faq, 'faq')}
                  className="text-[10px] text-brand-teal font-black hover:underline uppercase flex items-center gap-1.5 focus:outline-none"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedKey === 'faq' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
              <pre className="bg-slate-950 p-3.5 rounded-xl text-[10.5px] text-slate-400 max-h-56 overflow-y-auto select-all overflow-x-hidden whitespace-pre-wrap leading-tight">
                {b2bSchemaTemplates.faq}
              </pre>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP FOR B2B LEAD GEN */}
      <section className="py-20 max-w-7xl mx-auto px-4 font-sans text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          <div className="lg:col-span-10 space-y-12">
            
            <div className="text-center space-y-4">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">OUR VALUE METRICS</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Why Choose AKGLS Group?</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed">
                We bridge the gap between marketing spend and revenue opportunity, providing full transparent closed-loop tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-left font-mono">
              
              <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2.5">
                <span className="text-brand-teal font-extrabold text-sm block">1. B2B Outbound Specialists</span>
                <p className="text-slate-400 leading-relaxed font-sans font-normal text-slate-300">
                  We don't buy generic static data lists. Every target is manually scrubbed, evaluated, and scored for compatibility before launch.
                </p>
              </div>

              <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2.5">
                <span className="text-brand-teal font-extrabold text-sm block">2. Conversational AI Models</span>
                <p className="text-slate-400 leading-relaxed font-sans font-normal text-slate-300">
                  Target AI chatbot integrations to secure placements within ChatGPT and Claude queries when enterprise buyers are shopping.
                </p>
              </div>

              <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2.5">
                <span className="text-brand-teal font-extrabold text-sm block">3. LinkedIn Outreach Experts</span>
                <p className="text-slate-400 leading-relaxed font-sans font-normal text-slate-300">
                  Bypass standard connection limitations using physical parameters and warm article engagement protocols to secure C-suite replies.
                </p>
              </div>

              <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2.5">
                <span className="text-brand-teal font-extrabold text-sm block">4. CRM closed-loop mapping</span>
                <p className="text-slate-400 leading-relaxed font-sans font-normal text-slate-300">
                  Establish live tracking inside HubSpot and Salesforce, providing representatives with direct, immediate response notifications.
                </p>
              </div>

              <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2.5">
                <span className="text-brand-teal font-extrabold text-sm block">5. Transparent weekly reporting</span>
                <p className="text-slate-400 leading-relaxed font-sans font-normal text-slate-300">
                  Review absolute Cost-per-Acquisition (CPA), Return-on-Ad-Spend (ROAS), close speeds, and CRM analytics reports every seven days.
                </p>
              </div>

              <div className="p-5 bg-slate-[#0b1425] border border-indigo-950 rounded-xl space-y-2.5">
                <span className="text-[#00e1cf] font-extrabold text-sm block">6. Custom sales calculators</span>
                <p className="text-slate-400 leading-relaxed font-sans font-normal text-slate-300">
                  Deploy live, interactive comparison layouts inside landing checkouts to resolve shopper hesitation and scale pipeline counts.
                </p>
              </div>

            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* CORE TECH USED IN ACQUISITION */}
      <section className="py-16 bg-slate-950 border-t border-indigo-950 text-center font-mono select-none">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase">MODERN B2B TECHNOLOGICAL SUITE</span>
          <h3 className="text-2xl font-bold font-sans text-white mt-1.5 mb-10">B2B Lead Tools & Technologies We Configure</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 font-bold text-xs">
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-slate-300">HubSpot Integration</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-slate-300">Sales Navigator Sync</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-sky-400">Salesforce Pipeline</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-amber-500">Google Analytics (G4)</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-[#3b82f6]">Apollo Outbound Sequence</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-[#10b981]">Klaviyo Marketing Labs</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-[#ef4444]">SEMrush SEO Analytics</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-[#ec4899]">Ahrefs Organic Reports</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-950 rounded text-[#6366f1]">ChatGPT Engine Tuning</span>
            <span className="p-3 bg-slate-900/60 border border-indigo-955 border border-indigo-950 rounded text-[#06b6d4]">Gemini AI Schema parser</span>
          </div>

        </div>
      </section>

      {/* PACKAGES SELECTOR MODAL */}
      <section className="py-20 bg-[#040716] border-b border-indigo-950 font-mono text-left">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none">
            <span className="text-xs font-bold text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/30">BUDGET TIER GUIDE</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">B2B Lead Generation Packages</h2>
            <p className="text-slate-400 text-sm font-sans font-normal text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Choose from pre-packaged multi-channel frameworks designed to match your company's scaling milestones. Custom integrations are always configured on demand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Package 1 */}
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6 hover:border-indigo-900 transition flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs text-brand-teal font-extrabold uppercase">STARTUP B2B LEADS</span>
                <h3 className="text-3xl font-bold font-sans text-white">$2,500 <span className="text-xs font-mono text-slate-500 font-normal">/ month</span></h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">Ideal for newly launched SaaS platforms and consulting practices seeking to trigger initial warm executive meetings.</p>
                
                <ul className="space-y-2.5 pt-4 text-xs font-mono text-slate-300 border-t border-indigo-900/50">
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>500 decision-makers scrubbed per month</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Direct LinkedIn Sales Navigator messages</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>2 targeted organic SEO content pieces</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Standard email inbox warning configurations</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Weekly tracking overview update</span></li>
                </ul>
              </div>

              <div className="pt-6 font-mono">
                <a href="#free-b2b-audit-form" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl border border-indigo-950 text-center block text-xs uppercase cursor-pointer">
                  Claim Start Campaign Setup
                </a>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-[#0e1634] border border-brand-teal/40 rounded-3xl p-6 hover:shadow-lg hover:shadow-brand-teal/5 transition flex flex-col justify-between relative">
              <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-brand-teal text-slate-950 uppercase font-extrabold text-[9.5px] py-1 px-4 rounded-full font-mono">
                ⭐ HIGHEST DEMAND TIER
              </div>

              <div className="space-y-4">
                <span className="text-xs text-brand-teal font-extrabold uppercase">GROWTH LEAD ENGINE</span>
                <h3 className="text-3xl font-bold font-sans text-white">$4,800 <span className="text-xs font-mono text-slate-500 font-normal">/ month</span></h3>
                <p className="text-xs text-slate-350 leading-relaxed font-sans text-slate-300 animate-pulse">Bespoke scaling pipeline integrating outbound social automation, technical optimization, and CRM webhooks.</p>
                
                <ul className="space-y-2.5 pt-4 text-xs font-mono text-slate-300 border-t border-brand-teal/20">
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>1,500 target profiles scrubbed per month</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Direct LinkedIn Sales Navigator Messaging loops</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Google Search Ads setup + optimization</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>AI schema configuration + organic index maps</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>HubSpot/Salesforce database configurations</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Dedicated Slack channel direct reporting</span></li>
                </ul>
              </div>

              <div className="pt-6 font-mono">
                <a href="#free-b2b-audit-form" className="w-full bg-brand-teal hover:bg-white text-slate-950 font-extrabold py-3.5 rounded-xl text-center block text-xs uppercase">
                  Deploy Scaling Lead Engine
                </a>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6 hover:border-indigo-900 transition flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs text-brand-teal font-extrabold uppercase">ENTERPRISE ABM SCALE</span>
                <h3 className="text-3xl font-bold font-sans text-white">$8,500+ <span className="text-xs font-mono text-slate-500 font-normal">/ month</span></h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">Strategic account targeting pipelines designed for international logistics networks and enterprise technology providers.</p>
                
                <ul className="space-y-2.5 pt-4 text-xs font-mono text-slate-300 border-t border-indigo-900/50">
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>IP-targeted banner campaign displays</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Personalized custom landing presentation grids</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>1-on-1 physical gift sequence triggers</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Dedicated fractional CMO consultations</span></li>
                  <li className="flex items-center space-x-2"><Check className="text-brand-teal w-4 h-4 shrink-0" /> <span>Enterprise security compliance checks</span></li>
                </ul>
              </div>

              <div className="pt-6 font-mono">
                <a href="#free-b2b-audit-form" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl border border-indigo-950 text-center block text-xs uppercase cursor-pointer">
                  Request custom ABM proposal
                </a>
              </div>
            </div>

          </div>

          <div className="pt-10 border-t border-indigo-950 mt-16 text-center select-none font-mono">
            <span className="text-xs text-slate-450 block mb-3 uppercase">Seeking custom features or specific lead scoring webhooks?</span>
            <a href={WHATSAPP_LINK} className="text-brand-teal font-extrabold hover:underline text-xs inline-flex items-center gap-1">
              <span>Connect with Enterprise Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 max-w-4xl mx-auto px-4 font-sans text-left">
        <div className="text-center space-y-4 mb-16 select-none animate-pulse">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">FAQS DETAILS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none text-center">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto text-center font-normal">
            B2B Lead Generation structures explained, resolving bottleneck inquiry inquiries.
          </p>
        </div>

        <div className="space-y-3 font-mono">
          {b2bFaqs.map((faq, fIdx) => (
            <div 
              key={fIdx}
              className="bg-[#0b0e20] border border-indigo-950 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                className="w-full p-5 text-left flex justify-between items-center hover:bg-indigo-950/20 focus:outline-none transition"
              >
                <span className="font-bold text-slate-200 text-xs sm:text-sm uppercase tracking-wide pr-4 leading-snug">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-brand-teal shrink-0 transform transition-transform duration-250 ${openFaq === fIdx ? 'rotate-185 rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openFaq === fIdx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-indigo-900/40"
                  >
                    <p className="p-5 text-xs sm:text-[13px] text-slate-400 font-sans leading-relaxed text-left font-normal bg-slate-950/40">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </section>

      {/* FREE LEAD GEN AUDIT FORM */}
      <section id="free-b2b-audit-form" className="py-20 bg-gradient-to-b from-[#02050f] to-[#04081c] border-t border-indigo-955 border-b border-indigo-950 font-mono text-left">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Left details checklist */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-1">
                <Shield className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>NDA ENFORCED AUDITS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans text-left">
                Get a Free B2B Lead Generation Audit
              </h2>

              <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal text-slate-300">
                Submit raw corporate targets. We run technical comparisons, map sitemaps authority leaks, analyze outbound profiles, and deliver recommendations to scale pipelines.
              </p>

              <div className="space-y-3.5 border-t border-indigo-900/50 pt-5 text-[11px] text-slate-400">
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse mt-1.5 shrink-0"></span>
                  <span><strong>Auditing lead scoring bottlenecks:</strong> We identify dropped meetings latency metrics.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse mt-1.5 shrink-0"></span>
                  <span><strong>Outreach deliverability evaluations:</strong> DNS configuration checks (SPF, DKIM, DMARC).</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse mt-1.5 shrink-0"></span>
                  <span><strong>Competitor acquisition intercepts:</strong> Checking commercial search keyword gaps.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse mt-1.5 shrink-0"></span>
                  <span><strong>AI visibility scores:</strong> Checking recommendation indexes inside ChatGPT databases layers.</span>
                </div>
              </div>

            </div>

            {/* Interactive submission panel */}
            <div className="lg:col-span-7 bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 relative">
              <AnimatePresence mode="wait">
                {!auditSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleAuditSubmit}
                    className="space-y-4 text-xs font-mono"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40 mb-2">
                      <span className="font-extrabold text-white text-xs">REGULATION INQUIRY INTERFACE</span>
                      <span className="text-[10px] text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded-full">SECURE ENCRYPED</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-slate-400 uppercase tracking-wider block text-[10px]">Company Name:</label>
                        <input
                          type="text"
                          required
                          value={auditForm.companyName}
                          onChange={(e) => setAuditForm({ ...auditForm, companyName: e.target.value })}
                          className="w-full bg-slate-950 border border-indigo-950 p-2.5 rounded-lg text-white focus:border-brand-teal focus:outline-none"
                          placeholder="e.g. Apex Tech group"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 uppercase tracking-wider block text-[10px]">Website URL:</label>
                        <input
                          type="url"
                          required
                          value={auditForm.websiteUrl}
                          onChange={(e) => setAuditForm({ ...auditForm, websiteUrl: e.target.value })}
                          className="w-full bg-slate-950 border border-indigo-950 p-2.5 rounded-lg text-white focus:border-brand-teal focus:outline-none"
                          placeholder="e.g. https://apextech.com"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 uppercase tracking-wider block text-[10px]">Industry sector:</label>
                        <select
                          value={auditForm.industry}
                          onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                          className="w-full bg-slate-950 border border-indigo-950 p-2.5 rounded-lg text-white focus:border-brand-teal focus:outline-none"
                        >
                          <option value="SaaS & Technology">SaaS & Technology</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Finance">Finance</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="IoT Companies">IoT Companies</option>
                          <option value="Logistics">Logistics</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Enterprise Services">Enterprise Services</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 uppercase tracking-wider block text-[10px]">Current Pipeline Challenge:</label>
                        <input
                          type="text"
                          value={auditForm.challenges}
                          onChange={(e) => setAuditForm({ ...auditForm, challenges: e.target.value })}
                          className="w-full bg-slate-950 border border-indigo-950 p-2.5 rounded-lg text-white focus:border-brand-teal focus:outline-none"
                          placeholder="e.g. low meeting conversions"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 uppercase tracking-wider block text-[10px]">C-Suite Corporate Email:</label>
                        <input
                          type="email"
                          required
                          value={auditForm.email}
                          onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                          className="w-full bg-slate-950 border border-indigo-950 p-2.5 rounded-lg text-white focus:border-brand-teal focus:outline-none"
                          placeholder="e.g. amrish@apextech.com"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-400 uppercase tracking-wider block text-[10px]">Direct Contact Phone Number:</label>
                        <input
                          type="tel"
                          required
                          value={auditForm.phone}
                          onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                          className="w-full bg-slate-950 border border-indigo-950 p-2.5 rounded-lg text-white focus:border-brand-teal focus:outline-none"
                          placeholder="e.g. +91 831 811 4492"
                        />
                      </div>

                    </div>

                    <div className="pt-4 text-left font-mono">
                      <button
                        type="submit"
                        className="w-full bg-brand-teal hover:bg-white text-slate-950 font-extrabold py-3 rounded-lg uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
                        id="submit-b2b-audit-btn"
                      >
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Submit Lead Audit Request</span>
                      </button>
                    </div>

                    <span className="text-[9.5px] text-slate-500 block text-center uppercase">
                      *We enforce absolute client confidentiality standards under strict private NDA covenants.
                    </span>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center space-y-4 font-mono text-xs text-slate-300"
                  >
                    <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto border border-brand-teal/20 mb-2">
                      <CheckCircle className="w-6 h-6 animate-bounce" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white uppercase font-sans">Lead Generation Audit Requested</h3>
                    
                    <p className="text-slate-400 font-sans leading-relaxed text-[12.5px]">
                      Thank you. Your corporate target list parameters and deliverability records have been uploaded securely.
                    </p>

                    <p className="text-slate-350 bg-slate-950 border border-indigo-950 p-3 rounded-xl italic">
                      "Our principal B2B scaling architect will review your outreach profiles and coordinate recommendations via <strong>{auditForm.email}</strong> within 3 business hours."
                    </p>

                    <div className="pt-4">
                      <a href={WHATSAPP_LINK} className="text-brand-teal font-extrabold hover:underline uppercase inline-flex items-center gap-1">
                        <span>Coordinate via WhatsApp Live Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* RECENT INSIGHTS ARTICLES READS */}
      <section className="py-20 bg-[#02050f] font-mono text-left">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none">
            <span className="text-xs font-bold text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/30">KNOWLEDGE REPOSITORY</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Recent Strategic Publications</h2>
            <p className="text-slate-400 text-sm font-sans font-normal text-slate-300 leading-relaxed max-w-2xl mx-auto text-center">
              Stay ahead of digital transformation, organic search updates, outbound connections strategies, and pipeline conversion metrics in commercial fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl overflow-hidden hover:border-brand-teal/20 transition-all flex flex-col justify-between">
              <div className="p-5 space-y-3 text-left">
                <span className="text-[10px] text-brand-teal font-bold uppercase block tracking-wider">Acquisition playbook</span>
                <h4 className="text-sm font-bold text-white font-sans text-left leading-snug">The Complete B2B Lead Generation and Warm Pitch Playbook</h4>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed text-slate-300">
                  How modern SaaS platforms scale from custom prospect profiling to locked recurring client contracts with zero gatekeeper friction variables.
                </p>
              </div>
              <div className="p-5 border-t border-indigo-950 text-left">
                <a href="#free-b2b-audit-form" className="text-brand-teal text-[10px] font-extrabold uppercase hover:underline inline-flex items-center gap-1">
                  <span>Read Article Logs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl overflow-hidden hover:border-brand-teal/20 transition-all flex flex-col justify-between">
              <div className="p-5 space-y-3 text-left">
                <span className="text-[10px] text-brand-teal font-bold uppercase block tracking-wider">Warming Outlines</span>
                <h4 className="text-sm font-bold text-white font-sans text-left leading-snug">10 LinkedIn Outreach Messages That C-Suite CFOs Actually Answer</h4>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed text-slate-300">
                  Discover precise messaging sequences designed to highlight structural ROI value immediately, with absolute compliance profiles structure.
                </p>
              </div>
              <div className="p-5 border-t border-indigo-950 text-left">
                <a href="#free-b2b-audit-form" className="text-brand-teal text-[10px] font-extrabold uppercase hover:underline inline-flex items-center gap-1">
                  <span>Read Article Logs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl overflow-hidden hover:border-brand-teal/20 transition-all flex flex-col justify-between">
              <div className="p-5 space-y-3 text-left">
                <span className="text-[10px] text-[#00e1cf] font-bold uppercase block tracking-wider">AI SEO indexing</span>
                <h4 className="text-sm font-bold text-white font-sans text-left leading-snug">Structuring Semantic Code for Chatgpt and Claude Product Scraping</h4>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed text-slate-300">
                  Step-by-step guides injecting custom product sitemaps schemas to secure native recommendations when buyers look for b2b target vendors.
                </p>
              </div>
              <div className="p-5 border-t border-indigo-950 text-left">
                <a href="#free-b2b-audit-form" className="text-brand-teal text-[10px] font-extrabold uppercase hover:underline inline-flex items-center gap-1">
                  <span>Read Article Logs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION SECTION */}
      <section className="py-20 bg-[#04081c] border-t border-indigo-950 text-left relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10 font-mono">
          
          <span className="text-xs font-bold text-brand-teal uppercase bg-brand-teal/10 px-3 py-1.5 rounded-full border border-brand-teal/20">PREPARED TO EXPAND VALUE?</span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-sans tracking-tight">
            Ready to Generate More Qualified B2B Leads?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed text-slate-300">
            Secure permanent organic, search engine, paid, and outbound acquisition systems custom fitted to your vertical milestones. Get a personalized, secure, NDA-enforced marketing audit free today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 select-none">
            <a 
              href="#free-b2b-audit-form" 
              className="w-full sm:w-auto bg-brand-teal hover:bg-white text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/25 transition duration-300 flex items-center justify-center space-x-2"
              id="final-b2b-cta-audit-btn"
            >
              <span>Get Free Lead Generation Audit</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full sm:w-auto bg-slate-950 hover:bg-[#0c112b] text-slate-200 font-semibold px-8 py-4 rounded-xl border border-indigo-950 hover:border-indigo-900 transition flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-450 text-emerald-400" />
              <span>Book B2B Growth Strategy Talk</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] text-slate-450 text-slate-400 pt-6">
            <span>✓ Pre-vetted Profile Scrapes</span>
            <span>✓ Complete NDA Confidentiality Enforced</span>
            <span>✓ Fully Synced Closed Loop CRM Systems</span>
            <span>✓ AI Search Schema Ready</span>
          </div>

        </div>
      </section>

      {/* SMALL SECURE FOOTER */}
      <footer className="bg-slate-950 py-8 text-center text-[10.5px] border-t border-indigo-955 border-indigo-950 font-mono text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© 2026 AKGLS Group. All industrial lead data parameters monitored under strict private server frameworks.</span>
          <div className="flex space-x-4">
            <button onClick={onBackToHome} className="hover:underline hover:text-white cursor-pointer transition">Home Screen</button>
            <a href="#b2b-services" className="hover:underline hover:text-white transition">Capabilities Directory</a>
            <a href="#free-b2b-audit-form" className="hover:underline hover:text-white transition">NDA Audit Uploads</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Award as AwardIcon, CheckSquare
} from 'lucide-react';

interface GoogleAdsServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const adsSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google Ads & PPC Management Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akgls.com"
  },
  "areaServed": "Global",
  "description": "High-performance search ads, display, shopping, Performance Max, and conversion tracking optimizations."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How quickly do we see results with Google Ads?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google Ads campaigns can go live and begin driving highly targeted clicks & leads within 48 to 72 hours of launch."
    }
  }]
}`
};

export default function GoogleAdsServicesPage({ onBackToHome, openProposalForm }: GoogleAdsServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // State to simulate dynamic Page Titles
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Google Ads Services Company | PPC Management Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Interactive Live PPC ROI Calculator Widget State
  const [adSpend, setAdSpend] = useState<number>(3000); // monthly budget
  const [cpc, setCpc] = useState<number>(1.5); // cost per click
  const [convRate, setConvRate] = useState<number>(3.5); // % conversion rate
  const [leadValue, setLeadValue] = useState<number>(120); // revenue per lead/sale
  const [calculatedStats, setCalculatedStats] = useState({
    clicks: 2000,
    leads: 70,
    revenue: 8400,
    roas: 2.8,
    costPerLead: 42.8
  });

  useEffect(() => {
    const clicks = Math.round(adSpend / Math.max(0.1, cpc));
    const leads = Math.round(clicks * (convRate / 100));
    const revenue = Math.round(leads * leadValue);
    const roas = adSpend > 0 ? parseFloat((revenue / adSpend).toFixed(2)) : 0;
    const costPerLead = leads > 0 ? parseFloat((adSpend / leads).toFixed(1)) : 0;

    setCalculatedStats({
      clicks,
      leads,
      revenue,
      roas,
      costPerLead
    });
  }, [adSpend, cpc, convRate, leadValue]);

  // Campaign Type selector Showcase
  const [selectedCampaignType, setSelectedCampaignType] = useState('pmax');

  const campaignMetricsShowcase = {
    pmax: {
      title: "Performance Max Campaigns (PMax)",
      statText: "Average 22% CPL Reduction",
      highlights: ["AI-based multi-channel ads", "Fully automated smart bids", "Combined Search + Shopping + YouTube assets", "Direct audience signal parsing"],
      badge: "⭐ Recommended"
    },
    search: {
      title: "Google Search Ads (Google Ads)",
      statText: "9.2% Average CTR",
      highlights: ["High search-intent targeting", "Super-optimized ad copy variations", "Negative keyword siloing", "Ad element extensions integration"],
      badge: "Core Service"
    },
    shopping: {
      title: "Google Shopping Campaigns",
      statText: "3.2x ROAS Performance Scaling",
      highlights: ["Optimized Merchant Center feeds", "Dynamic price matching lists", "Smart Shopping bidding automation", "Product description normalization"],
      badge: "For Ecommerce"
    },
    youtube: {
      title: "YouTube Video Advertising",
      statText: "+140% Brand Recall Increase",
      highlights: ["Skippable & non-skippable target formats", "Symmetrical interest targeting", "Remarketing video streams", "Fast-hook script structuring"],
      badge: "Brand Growth"
    }
  };

  const activeCampaign = campaignMetricsShowcase[selectedCampaignType as keyof typeof campaignMetricsShowcase] || campaignMetricsShowcase.pmax;

  // Active FAQ accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying validation feedback
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Google Ads Audit Lead Capture Form
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    budget: '$1,000 - $5,000',
    industry: 'SaaS',
    email: '',
    goals: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const triggerAuditSubmission = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.website || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const googleAdsServices = [
    {
      title: "Google Search Ads Management",
      desc: "Capture direct user queries matching transaction intents. We write conversion-focused ad pieces, run systematic A/B headline tests, isolate negative loops, and configure exact-match search trees.",
      icon: <Search className="w-5 h-5 text-brand-orange" />,
      benefits: "Guarantees premium positioning for high-intent queries, slashing conversion costs."
    },
    {
      title: "Google Display Ads & Remarketing",
      desc: "Nurture unconverted site visitors with visually compelling banner designs spanning over 2 million publisher websites. Retarget prospects based on drop-off stages.",
      icon: <Layers className="w-5 h-5 text-brand-teal" />,
      benefits: "Recovers abandoned shopping carts and drives continuous interest loops."
    },
    {
      title: "Google Shopping & Merchant Center",
      desc: "Perfect your product catalogs and sync seamlessly with Google Merchant Center. We optimize product titles, schema pricing fields, and launch return-focused Shopping strategies.",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      benefits: "Drives visual, high-yield product shopping queries that scale ecommerce stores."
    },
    {
      title: "YouTube Ads Management",
      desc: "Connect with buyers via skippable, non-skippable, in-feed video promotions. We write persuasive hooks, map demographic metrics, and track direct-attributed sales.",
      icon: <Volume2 className="w-5 h-5 text-purple-400" />,
      benefits: "Builds massive brand awareness while driving direct post-view conversions."
    },
    {
      title: "Performance Max (PMax)",
      desc: "Unleash Google's modern AI across Search, Maps, Gmail, YouTube, and Display directories under a singular, integrated, smart-bidding operational campaign.",
      icon: <Sparkles className="w-5 h-5 text-pink-400" />,
      isTrending: true,
      benefits: "Leverages Google's neural systems for hands-off optimization of budgets and targets."
    },
    {
      title: "Local Google Ads & Map Packs",
      desc: "Target visual map placements, trigger immediate click-to-calls, and drive regional store foot traffic. Hyper-focused maps routing gets calls in minutes.",
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      benefits: "Secures instant service phone bookings and verified map reviews."
    },
    {
      title: "Remarketing & Retargeting",
      desc: "Build strategic custom lists, execute dynamic product retargeting, and nudge previous buyers using specific discount incentives.",
      icon: <Shuffle className="w-5 h-5 text-rose-400" />,
      benefits: "Maximizes user lifetime value (LTV) and optimizes overall blended ad acquisition costs."
    },
    {
      title: "Ecommerce PPC Services",
      desc: "Robust full-funnel ecommerce search, display, and product management. We structure keyword intent matrices around high-frequency retail trends.",
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      benefits: "Secures solid return-on-ad-spend (ROAS) scaling safely past peak quarters."
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Creating high-performing, fast-loading landing pages designed from scratch to complement your ad copy. Includes interactive layout models, single-step forms, and clean call-to-actions.",
      icon: <Activity className="w-5 h-5 text-amber-400" />,
      benefits: "Double user layout conversions without needing to expand raw monthly ad spend."
    },
    {
      title: "Comprehensive Google Ads Audits",
      desc: "A meticulous diagnostic review of past account parameters, structure gaps, faulty conversion pixels, or money leaks targeting unqualified key phrases.",
      icon: <Terminal className="w-5 h-5 text-slate-400" />,
      benefits: "Isolates ad spend waste with clean, immediately actionable fix recommendations."
    }
  ];

  const adsCampaignTypes = [
    { type: "Search Ads", desc: "Text ads showing above standard search rankings when buyers search matching keywords." },
    { type: "Display Ads", desc: "Digital banners keeping your brand beautifully relevant across the digital publisher web." },
    { type: "Shopping Ads", desc: "Product-centric visual cards showing image, price, and merchant ratings directly on SERP headers." },
    { type: "YouTube Ads", desc: "Full-motion audio-visual creatives delivering narratives directly on TV screens and mobile clients." },
    { type: "Performance Max", desc: "Symmetrical automated models deploying across all Google networks using custom AI rules." },
    { type: "App Campaigns", desc: "Unified assets driving quick client downloads across the entire App Store ecosystem." },
    { type: "Local Service Ads", desc: "Trust-vetted phone directory ads designed strictly to drive local leads." },
    { type: "Discovery Ads", desc: "Swipeable carousel images displayed inside Gmail dashboards and Google Feed." }
  ];

  const processSteps = [
    { step: "01", title: "PPC Audit & Competitor Review", detail: "Scrutinizing historical account variables, landing page loading performance, tracking pixels, and competitor keyword bidding layouts." },
    { step: "02", title: "Funnel Strategy Planning", detail: "Structuring campaigns, configuring precise negative keyword lists, allocating budgets, and setting advanced tracking tags." },
    { step: "03", title: "Campaign Setup & Ad Creative", detail: "Drafting punchy headlines, designing visual assets, and initializing Google Analytics 4 (GA4) with custom client conversion tags." },
    { step: "04", title: "Optimization & ROAS Scaling", detail: "Automating smart budget distributions, running surgical search bid tweaks, and adjusting audience bid weights on live data." },
    { step: "05", title: "Transparent Looker Insight Reporting", detail: "Delivering accessible search reports mapping conversion figures, raw CPA metrics, and net revenue generation patterns." }
  ];

  const industryVerticals = [
    { label: "Ecommerce Brands", text: "Scaling merchant feed listings to unlock sustainable return on ad spend." },
    { label: "B2B SaaS Companies", text: "Generating high-authority MQLs using deep keyword parsing grids." },
    { label: "Healthcare & Dental Diagnostics", text: "Placing immediate map calls to drive localized clinical appointments." },
    { label: "Legal & Corporate Service Partners", text: "Dominating competitive local lead categories via trusted LSA filters." },
    { label: "IoT, Tech & Industrial Groups", text: "Promoting custom technical configurations to design engineers." },
    { label: "Real Estate & Housing Brokers", text: "Configuring geo-fended targeting overlays to capture serious property inquiries." }
  ];

  const pMTools = [
    { name: "Google Ads Engine", cat: "Ad Network" },
    { name: "Google Analytics 4", cat: "Leads tracking" },
    { name: "Google Tag Manager", cat: "Pixels Deployed" },
    { name: "Looker Studio", cat: "Interactive Maps" },
    { name: "SEMrush PPC Suite", cat: "Bid Strategy Scan" },
    { name: "Hotjar Feedback", cat: "CRO Analytics" },
    { name: "Gemini / ChatGPT", cat: "PPC copywriting" }
  ];

  const pMCaseStudies = [
    { client: "CareFree Dental Clinics", niche: "Dental Emergencies", spend: "$4,500/Mo", result: "240+ Leads Generated", roas: "4.8x ROAS", impact: "Reduced Cost-Per-Lead (CPL) by 38% using local Map ads." },
    { client: "Voxel Analytics", niche: "B2B SaaS Platform", spend: "$12,020/Mo", result: "380+ Signups Generated", roas: "210% CPA Drop", impact: "Restructured PMax parameters and captured high-intent enterprise search queues." },
    { client: "E-Spruce Retailers", niche: "Ecommerce Homeware", spend: "$8,500/Mo", result: "$32,800 Sales Made", roas: "3.85x ROAS", impact: "Cleaned up Merchant Center feed errors and focused on profit-margin shopping items." }
  ];

  const adsFaqs = [
    { q: "How much does Google Ads management cost?", a: "AKGLS Group offers flexible pricing models including transparent flat-fee retainers, percent of spend tiers, and revenue performance models. Select the tier below that fits your business scope." },
    { q: "How quickly do we start generating leads?", a: "Unlike SEO which takes time to construct organic rankings, Google Ads campaigns drive targeted searchers to your website within 24 to 72 hours of campaign activation." },
    { q: "What is Performance Max (PMax)?", a: "PMax is Google's newest AI-driven campaign type. It places creative, shopping, and video assets dynamically across Search, Display, Maps, Gmail, and YouTube based on real-time converting audiences." },
    { q: "How does conversion tracking confirmation work?", a: "We embed deep tracking scripts using Google Tag Manager to track successful forms, click-to-calls, app downloads, or online catalog checkouts directly inside your reporting dashboards." },
    { q: "Is Google Ads better than organic SEO?", a: "They work best in tandem. Google Ads captures incoming search intent immediately while SEO builds your long-term organic authority, ensuring zero money leaks across search channels." }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen relative font-sans leading-relaxed">
      
      {/* 📞 FLOATING CONTACT BAR */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="ads-whatsapp-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp Specialist: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-orange-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-orange-500/20 transition-all font-mono"
          id="ads-phone-bar"
        >
          <Phone className="w-4 h-4 text-white animate-bounce" /> Call PPC Architect: {CONTACT_NUMBER}
        </a>
      </div>

      {/* 🌌 HERO SECTION WITH INTERACTIVE ROAS FORECAST SIMULATOR */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-brand-orange/5 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-1/5 right-1/4 w-[550px] h-[550px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full py-2 px-5 transition-colors"
            id="back-from-ads-services"
          >
            ← Back to Home
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/35 text-brand-orange rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-mono">
                <Award className="w-3.5 h-3.5 text-brand-orange" />
                <span>Google certified ppc partner team</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight">
                Google Ads Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-400">
                  That Drive Targeted <br />Leads & Net Revenue
                </span>
              </h1>

              <p className="text-slate-405 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Maximize conversions, reduce wasted click spend, and capture high-intent inquiries with performance-driven Google Ads campaigns structured by verified search specialists.
              </p>

              {/* USP Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-2 text-xs font-bold text-slate-350 font-mono">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Certified Google Ads Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>ROI-Focused Paid Search</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Transparent Looker Studio Dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>AI-Powered Bidding Strategies</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="#free-ads-audit-form"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                  id="hero-ads-audit-launch-btn"
                >
                  Get Free Google Ads Audit <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#ppc-roi-simulator"
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                  id="hero-ads-simulator-anchor"
                >
                  <TrendingUp className="w-4 h-4 text-brand-teal" /> Run PPC ROI Estimator
                </a>
              </div>

            </div>

            {/* Right: DRAG-AND-CALCULATE ROI ESTIMATOR WIDGET */}
            <div className="lg:col-span-5 relative" id="ppc-roi-simulator">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    <span className="text-slate-400 font-extrabold uppercase">AKGLS PPC FORECAST ENGINE</span>
                  </div>
                  <span className="text-[8.5px] bg-slate-900 border border-slate-800 text-slate-400 py-0.5 px-2 rounded-full font-mono font-bold">
                    Sandbox v4a
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Slider 1: Ad Spend */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-450 uppercase font-black">Monthly Budget:</span>
                      <span className="text-white font-black">${adSpend.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="15000" 
                      step="500"
                      value={adSpend}
                      onChange={(e) => setAdSpend(Number(e.target.value))}
                      className="w-full accent-brand-orange h-1.5 bg-slate-950 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Slider 2: Average CPC */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-455 uppercase font-black">Estimated CPC:</span>
                      <span className="text-white font-black">${cpc.toFixed(2)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.4" 
                      max="6.0" 
                      step="0.1"
                      value={cpc}
                      onChange={(e) => setCpc(Number(e.target.value))}
                      className="w-full accent-brand-orange h-1.5 bg-slate-950 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Slider 3: Conversion Rate */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-455 uppercase font-black">Landing Page Conv. Rate:</span>
                      <span className="text-brand-teal font-black">{convRate.toFixed(1)}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="1.0" 
                      max="10.0" 
                      step="0.5"
                      value={convRate}
                      onChange={(e) => setConvRate(Number(e.target.value))}
                      className="w-full accent-brand-teal h-1.5 bg-slate-950 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Slider 4: Revenue Value per lead */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-455 uppercase font-black">Lead / Sale Value:</span>
                      <span className="text-white font-black">${leadValue}</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="500" 
                      step="10"
                      value={leadValue}
                      onChange={(e) => setLeadValue(Number(e.target.value))}
                      className="w-full accent-brand-orange h-1.5 bg-slate-950 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Output Splay Stats Dashboard */}
                  <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4 grid grid-cols-2 gap-4 text-left">
                    
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-550 uppercase font-black">Estimated Clicks</span>
                      <span className="text-lg font-black text-white block">{calculatedStats.clicks}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Monthly Leads</span>
                      <span className="text-lg font-black text-brand-orange block">{calculatedStats.leads}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Projected Yield</span>
                      <span className="text-lg font-black text-white block">${calculatedStats.revenue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Target ROAS</span>
                      <span className="text-lg font-black text-brand-teal block">{calculatedStats.roas}x ROAS</span>
                    </div>

                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide">
                    *Estimates based on vertical benchmarks. We prioritize lowering cost-per-lead (CPL) via high Quality Scores.
                  </span>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤝 TRUSTED MANAGEMENT & COMPLIANCE SECTION */}
      <section className="py-12 bg-[#0a0f1d] border-b border-slate-900 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-[9.5px] text-slate-505 font-black uppercase tracking-widest block">CERTIFICATIONS & TRUST SIGNALS RECEIVED</span>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-80 pt-2 text-slate-400 font-extrabold text-xs">
              <span className="border border-brand-orange/40 text-brand-orange py-1 px-3.5 rounded-full bg-brand-orange/5">★ GOOGLE PARTNER CERTIFIED</span>
              <span className="border border-slate-800 py-1 px-3.5 rounded-full">★ AUDIENCE SIGNAL ANALYTICS GA4</span>
              <span className="border border-slate-800 py-1 px-3.5 rounded-full">★ SEARCH BIDDING STRATEGIES MASTER</span>
              <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 rounded-full bg-brand-teal/5">★ ROAS ACCELERATOR MEMBER</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-850 text-left text-xs">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">$2.5M+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">PAID AD SPEND MANAGED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-orange font-display block">18,400+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">HIGH-INTENT CLIENT LEADS DRIVEN</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">3.4x</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">AVERAGE ROAS GAINED FOR RETAIL</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-teal font-display block">-42%</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">AVERAGE COST-PER-ACQUISITION LOWERING</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🧭 WHAT INCLUDES IN GOOGLE ADS MANAGEMENT */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explainer Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                PPC CONVERSION FUNNELS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                What Are Google Ads Services?
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Google Ads is a powerful, real-time auction marketplace that places your business offerings directly in front of buyers at the precise millisecond they search for solutions. 
                <br /><br />
                Whether it's securing Top-of-Page Google Search ad blocks, remarketing dynamic catalogs over visual Display channels, showcasing stars ratings in shopping grids, or firing multi-channel assets via neural Performance Max campaigns, expert ad management ensures your budget targets actual conversions rather than accidental window shoppers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-slate-950 border border-slate-855 rounded-xl space-y-1">
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider font-extrabold block">CLASSIC BROAD-MATCH WASTED PPC</span>
                  <p className="text-slate-400 leading-snug">Spends budgets indiscriminately on descriptive but non-commercial query targets with poor Quality Scores.</p>
                </div>
                <div className="p-4 bg-brand-orange/5 border border-brand-orange/25 rounded-xl space-y-1">
                  <span className="text-brand-orange text-[9px] uppercase tracking-wider font-extrabold block">AKGLS INTENT SILOING</span>
                  <p className="text-slate-350 leading-snug">Uses exact-intent matches coupled with conversational landing pages to lock-in conversions.</p>
                </div>
              </div>

            </div>

            {/* Graphic Right */}
            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-6">
                <h3 className="text-white font-extrabold font-mono text-[10.5px] uppercase tracking-wider flex items-center gap-2 pb-2.5 border-b border-slate-900">
                  <Shuffle className="w-4 h-4 text-brand-orange animate-pulse" /> The Bid Auction & Conversion Framework
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-[9.5px] scale-90 shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-bold">Query Mapping & Bidding Valuation</h4>
                      <p className="text-slate-500 text-[10.5px] font-light">Isolating commercial phrase variants that represent buyers holding immediate budgets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-teal text-slate-950 flex items-center justify-center font-bold text-[9.5px] scale-90 shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-bold">Quality Score Optimization (QSO)</h4>
                      <p className="text-slate-500 text-[10.5px] font-light">Improving ad-copy relevance levels and landing speeds to lower required bids on queries.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-[9.5px] scale-90 shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-bold">First-Party Conversion Validation</h4>
                      <p className="text-slate-550 text-[10.5px] font-light">Confirming form registrations or phone lines dialing inside encrypted Looker tracker panels.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ ENHANCED PPC SERVICE SUITE */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              PPC SERVICES CATALOGUE
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Our Google Ads Services
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We deploy advanced structures and custom landing page templates to convert random traffic into highly profitable ROAS.
            </p>
          </div>

          {/* Grid Layout of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {googleAdsServices.map((srv, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-3xl p-6 hover:border-slate-800 transition-all flex flex-col justify-between" id={`ads-service-item-${idx}`}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#0c121e] border border-slate-800 flex items-center justify-center">
                      {srv.icon}
                    </div>
                    {srv.isTrending && (
                      <span className="text-[8px] font-mono text-brand-orange bg-[rgba(235,94,40,0.15)] border border-brand-orange/40 font-bold tracking-widest py-0.5 px-2.5 rounded">
                        ★ HIGH ROAS CONNEC
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg text-white font-black font-display">{srv.title}</h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">{srv.desc}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900">
                  <span className="text-[8.5px] uppercase font-mono font-black text-slate-500 block mb-1">PROVEN IMPACT DELIVERABLE:</span>
                  <p className="text-brand-teal font-mono text-[10.5px] font-bold">{srv.benefits}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 TARGET CAMPAIGN TYPES CARD SELECTOR */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-indigo-400 font-mono text-[9px] font-black uppercase tracking-widest bg-brand-indigo/15 px-3.5 py-1.5 rounded-full border border-brand-indigo/25">
                MATCH CHANNELS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black font-display text-white leading-tight">
                PPC Formats We Manage
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm">
                Each campaign setup uses custom rules designed strictly to support target outcomes. Choose a channel below to see our specialized optimization details.
              </p>

              <div className="flex flex-col gap-2.5 font-mono text-xs">
                {Object.keys(campaignMetricsShowcase).map((key) => {
                  const val = campaignMetricsShowcase[key as keyof typeof campaignMetricsShowcase];
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCampaignType(key)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        selectedCampaignType === key
                          ? 'bg-brand-orange/10 border-brand-orange text-white'
                          : 'bg-slate-950 border-slate-850 text-slate-350 hover:bg-[#0c121e]'
                      }`}
                      id={`campaign-showcase-btn-${key}`}
                    >
                      🎁 {val.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Interactive Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#0c121e] rounded-3xl p-8 border border-slate-850 space-y-6 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex justify-between items-center pb-4 border-b border-slate-850">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl text-white font-black font-display leading-tight">
                      {activeCampaign.title}
                    </h3>
                    <span className="text-[9.5px] bg-[#05070a] border border-slate-800 text-brand-orange font-bold font-mono py-1 px-3.5 rounded-full inline-block">
                      {activeCampaign.badge}
                    </span>
                  </div>
                  
                  <div className="text-right font-mono shrink-0">
                    <span className="text-[9.5px] text-slate-500 font-extrabold uppercase block font-sans">PERFORMANCE RATIO</span>
                    <span className="text-lg font-black text-brand-teal">{activeCampaign.statText}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase font-mono block">ADVANCED REVENUE DRIVERS SETUP:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-slate-350">
                    {activeCampaign.highlights.map((el, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 p-3 rounded-xl bg-[#05070a] border border-slate-850">
                        <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-850 flex flex-wrap gap-2.5 font-mono text-[9px] text-slate-500">
                  <span>► FAST PIXEL INTEGRATION</span>
                  <span>► A/B DEMOGRAPHIC TARGETS</span>
                  <span>► RETENTION STRATEGIES ENABLED</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* STEP-BY-STEP OPERATIONAL PROCESS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20 animate-once">
            <span className="text-[10px] text-brand-orange font-extrabold uppercase bg-brand-orange/15 px-4.5 py-1 rounded-full border border-brand-orange/25">
              CAMPAIGN ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white leading-tight">
              Our Google Ads Management Process
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We guide budgets systematically through five tactical phases to establish robust conversions, avoiding guess-based search setups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {processSteps.map((ph, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between h-64 hover:border-slate-800 transition-all">
                <span className="text-4xl font-black text-slate-800/40 block leading-none">{ph.step}</span>
                <div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wide mb-1 pb-1 border-b border-slate-900">{ph.title}</h3>
                  <p className="text-slate-500 font-light text-[10px] leading-relaxed">{ph.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 対比対称 SYMMETRICAL TABLE Traditional vs AI SEO */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">TACTIC COMPARISONS</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Google Ads PPC vs. Organic Authority SEO
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Both channels deliver strong outcomes; we deploy both systematically to minimize competitive leaks.
            </p>
          </div>

          <div className="bg-[#0c121e] border border-slate-850 rounded-3xl overflow-hidden font-mono text-xs md:text-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-850 text-[10px] text-slate-400">
                  <th className="p-4 font-black uppercase text-center md:text-left">VARIABLE FIELD</th>
                  <th className="p-4 font-black uppercase text-center md:text-left text-brand-orange">GOOGLE ADS PPC SYSTEMS</th>
                  <th className="p-4 font-black uppercase text-center md:text-left">ORGANIC AUTHORITY SEO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-350">
                <tr>
                  <td className="p-4 font-extrabold text-white">Launch Speed</td>
                  <td className="p-4 text-white font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-brand-orange shrink-0 animate-pulse" /> Instant targeted lead traffic in 48-72 hours
                  </td>
                  <td className="p-4">Slow baseline authority climb (2 - 6 Months)</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Target Scaling</td>
                  <td className="p-4 text-white font-semibold">Scaling scales directly using budget adjustments</td>
                  <td className="p-4">Scaling requires content expansion assets</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Quality Control</td>
                  <td className="p-4 text-white font-semibold">100% control over landed landing page flows</td>
                  <td className="p-4">Search engine decides standard metadata blocks</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Interim Budget</td>
                  <td className="p-4 text-white font-semibold">Each click represents direct media investment</td>
                  <td className="p-4">Zero raw marginal costs once content ranks high</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-indigo-400 font-mono inline-block bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-2.5 px-6">
              💡 "Best Results Come from SEO + PPC Combined" - We run synchronized multi-channel templates.
            </p>
          </div>

        </div>
      </section>

      {/* 🧬 AI PPC OPTIMIZATION FEATURE AREA */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-teal font-bold uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/30">
                AI OPTIMIZATION LABS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
                AI-Powered Google Ads Smart Optimization
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                We synthesize Google's deep machine learning bidding engines using proprietary conversion feed protocols. This enables real-time CPA alignment, automated asset pairing adjustments, and smart predictive analytics tracking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-350">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                  <span>AI Predictive PPC bidding</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                  <span>Smart audience parameters</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                  <span>Dynamic product tag syncs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                  <span>Auto quality score metrics checking</span>
                </div>
              </div>
            </div>

            {/* Right Dashboard Representation mockup */}
            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-4">
                <h3 className="text-white font-extrabold text-[10px] uppercase tracking-wider pb-2 border-b border-slate-900 flex items-center justify-between">
                  <span>► LIVE AI BIDDING DEPLOYMENT</span>
                  <span className="text-emerald-400">● CRAWLING STANDBY</span>
                </h3>

                <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl relative overflow-hidden font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="text-slate-500">CPC REDUCTION RATE:</span>
                    <span className="text-brand-teal font-black">-34.2%</span>
                  </div>
                  
                  {/* Miniature animation display grid */}
                  <div className="h-2 w-full bg-[#0c121e] rounded overflow-hidden">
                    <div className="h-full bg-brand-teal w-4/6 rounded animate-pulse" />
                  </div>

                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="text-slate-500">QUALITY SCORE AVERAGE:</span>
                    <span className="text-brand-orange font-black">9.6 / 10</span>
                  </div>
                  
                  <div className="h-2 w-full bg-[#0c121e] rounded overflow-hidden">
                    <div className="h-full bg-brand-orange w-[96%] rounded" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>► DATA REFRESH SECURED</span>
                  <span>► GA4 LINK VALIDATED</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ TECH TOOL GRID SECTION */}
      <section className="py-16 bg-[#05070a] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] text-slate-505 font-black uppercase tracking-widest">ECOSYSTEM MANAGEMENT SOLUTIONS</span>
            <h2 className="text-2xl font-black text-white">Paid Search Toolbox</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs">
            {pMTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 px-5 py-3 rounded-2xl flex items-center gap-2 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="font-bold">{tool.name}</span>
                <span className="text-[9.5px] text-slate-500">({tool.cat})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 CLIENT CASE STUDIES SUCCESS STORIES */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 font-mono">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase">PROVEN CAMPAIGN METRICS</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Google Ads Success Stories
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Explore how transparent budgeting parameters and custom landing structures drove real revenue for client groups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pMCaseStudies.map((cs, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-3xl border border-slate-855 flex flex-col justify-between h-96 hover:border-slate-800 transition-all font-mono" id={`ads-case-card-${idx}`}>
                <div className="space-y-4">
                  <div className="flex justify-between items-start pb-3 border-b border-slate-900 text-xs">
                    <div>
                      <h3 className="text-base text-white font-extrabold font-display leading-tight">{cs.client}</h3>
                      <span className="text-[10px] text-slate-500 font-bold">{cs.niche}</span>
                    </div>
                    <span className="text-[9px] bg-brand-orange/15 border border-brand-orange/30 text-brand-orange py-0.5 px-2 rounded-full font-bold">
                      {cs.roas}
                    </span>
                  </div>

                  <p className="text-slate-400 font-light text-xs leading-relaxed">{cs.impact}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-900 text-xs text-slate-350">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">Monthly Budget:</span>
                    <span>{cs.spend}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">Ad Conversion:</span>
                    <span className="text-brand-teal font-extrabold">{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LANDING PAGE CRO OPTIMIZATION BLOCK */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0c121e] rounded-3xl p-8 border border-slate-850 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[9px] text-brand-orange font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                MAXIMIZE LANDED VALUE
              </span>
              <h3 className="text-2xl md:text-3.5xl font-black font-display text-white">
                Conversion-Focused Landing Page Optimization
              </h3>
              <p className="text-slate-400 font-light text-xs sm:text-sm">
                Sending media clicks to generic corporate page templates is the fastest way to bleed ad budgets. We craft customized, lightning-fast landing elements designed specifically to match individual ad creative hooks, ensuring friction-free form submissions.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-2.5 font-mono text-xs text-slate-350">
              <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-850 rounded-xl">
                <Check className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Page rendering speed below 600ms</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-850 rounded-xl">
                <Check className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Hyper-targeted contextual layout match</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-855 rounded-xl">
                <Check className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Single-stage interactive lead models</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🎫 FLEXIBLE PPC BUDGET PACKAGES SECTION */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 font-mono">
            <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest bg-brand-indigo/15 px-4.5 py-1.5 rounded-full">
              TRANSPARENT MANAGEMENT TIERS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Flexible Google Ads Packages
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Select the budget allocation structure that matches your current business priorities. No complex hidden calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter Package */}
            <div className="bg-slate-950 border border-slate-850 rounded-3xl p-6 flex flex-col justify-between h-[450px] relative font-mono text-xs">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg text-white font-extrabold font-display uppercase">STARTER SYSTEM</h3>
                  <span className="text-[10px] text-slate-500 uppercase block">RECOMMENDED MONTHLY MEDIA BUDGET:</span>
                  <span className="text-xl font-bold text-brand-orange block">$1,000 - $3,000</span>
                </div>
                
                <p className="text-slate-500 font-light">Great for local phone generation and small ecom startups starting to validate search demand.</p>
                
                <div className="space-y-2 pt-3 border-t border-slate-900 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">★ Form submissions tracking</div>
                  <div className="flex items-center gap-1.5">★ Exact keyword cluster maps</div>
                  <div className="flex items-center gap-1.5">★ Monthly Looker reports delivery</div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-500">❌ Multilingual or PMax AI modules</div>
                </div>
              </div>

              <a 
                href="#free-ads-audit-form"
                className="w-full bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-bold text-center py-3.5 rounded-xl uppercase tracking-wider block"
                id="package-starter-select-btn"
              >
                Inquire Starter Setup
              </a>
            </div>

            {/* Growth Package */}
            <div className="bg-[#0c121e] border-2 border-brand-orange rounded-3xl p-6 flex flex-col justify-between h-[450px] relative font-mono text-xs">
              <div className="absolute top-0 right-6 translate-y-[-50%] bg-brand-orange text-white text-[8.5px] font-black uppercase tracking-wider py-1 px-3 rounded-full">
                🔥 POPULAR SCALE SELECTION
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg text-white font-extrabold font-display uppercase">GROWTH MACHINE</h3>
                  <span className="text-[10px] text-slate-500 uppercase block">RECOMMENDED MONTHLY MEDIA BUDGET:</span>
                  <span className="text-xl font-bold text-brand-teal block">$3,000 - $8,000</span>
                </div>
                
                <p className="text-slate-400 font-light">Engineered for scaling SaaS platforms and scaling retail storefront groups seeking systematic CAC improvements.</p>
                
                <div className="space-y-2 pt-3 border-t border-slate-900 text-[11px] text-slate-350">
                  <div className="flex items-center gap-1.5">★ Setup Performance Max channels</div>
                  <div className="flex items-center gap-1.5">★ Complete negative keyword filters</div>
                  <div className="flex items-center gap-1.5">★ Landing page CRO layout advice</div>
                  <div className="flex items-center gap-1.5">★ Weekly optimization sprint reviews</div>
                </div>
              </div>

              <a 
                href="#free-ads-audit-form"
                className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-bold text-center py-3.5 rounded-xl uppercase tracking-wider block"
                id="package-growth-select-btn"
              >
                Request Growth Proposal
              </a>
            </div>

            {/* Enterprise Package */}
            <div className="bg-slate-950 border border-slate-850 rounded-3xl p-6 flex flex-col justify-between h-[450px] relative font-mono text-xs">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg text-white font-extrabold font-display uppercase">ENTERPRISE SYSTEM</h3>
                  <span className="text-[10px] text-slate-500 uppercase block">RECOMMENDED MONTHLY MEDIA BUDGET:</span>
                  <span className="text-xl font-bold text-white block">$8,000+ per Month</span>
                </div>
                
                <p className="text-slate-500 font-light">Custom multi-channel enterprise systems blending Display, YouTube, retargeting list segmentation.</p>
                
                <div className="space-y-2 pt-3 border-t border-slate-900 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">★ First-party GTM server tracking</div>
                  <div className="flex items-center gap-1.5">★ Multiple landing variations testing</div>
                  <div className="flex items-center gap-1.5">★ Immediate WhatsApp response sync</div>
                  <div className="flex items-center gap-1.5">★ Direct custom-branded Looker dashboard</div>
                </div>
              </div>

              <a 
                href="#free-ads-audit-form"
                className="w-full bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-bold text-center py-3.5 rounded-xl uppercase tracking-wider block"
                id="package-enterprise-select-btn"
              >
                Assemble Symmetrical Custom Plan
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Accordion list FAQ SECTION */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16 font-mono">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">FREQUENT ANSWERS SECURED</span>
            <h2 className="text-3xl md:text-5.5xl font-black font-display text-white">
              Google Ads FAQ
            </h2>
          </div>

          <div className="space-y-3 font-mono text-xs md:text-sm">
            {adsFaqs.map((fq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="bg-[#0c121e] border border-slate-850 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-white flex justify-between items-center bg-[#0c121e] hover:bg-slate-900 transition-colors uppercase text-xs"
                    id={`faq-btn-item-${idx}`}
                  >
                    <span>{fq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-slate-950/80 text-slate-400 border-t border-slate-900 overflow-hidden"
                      >
                        <p className="p-5 font-light leading-relaxed text-xs">
                          {fq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Schema tags copying tool panel option inside client view */}
          <div className="mt-12 bg-slate-950 border border-slate-850 p-6 rounded-3xl relative overflow-hidden text-xs font-mono">
            <div className="absolute top-0 right-0 p-2 text-[8px] bg-indigo-505/15 text-indigo-400 uppercase font-black">
              JSON-LD SCHEMA
            </div>
            
            <h4 className="text-white font-bold mb-2">Google Ads Strategy Schema Elements</h4>
            <p className="text-slate-500 mb-4 pb-4 border-b border-slate-900 font-light text-[10px]">
              Copy this standard microdata tag syntax onto your server index templates to confirm search-agent crawling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0c121e] p-4 rounded-xl space-y-2 relative">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-brand-teal font-black">Service Schema:</span>
                  <button 
                    onClick={() => copyToClipboard(adsSchemaTemplates.service, 'service')}
                    className="text-[9px] hover:text-white text-slate-500 cursor-pointer flex items-center gap-1"
                    id="copy-service-schema-btn"
                  >
                    {copiedKey === 'service' ? 'Copied ✅' : 'Copy Code 📋'}
                  </button>
                </div>
                <pre className="text-[9.5px] text-slate-600 overflow-x-auto max-h-32">
                  {adsSchemaTemplates.service}
                </pre>
              </div>

              <div className="bg-[#0c121e] p-4 rounded-xl space-y-2 relative">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-brand-orange font-black">FAQ Page Schema:</span>
                  <button 
                    onClick={() => copyToClipboard(adsSchemaTemplates.faq, 'faq')}
                    className="text-[9px] hover:text-white text-slate-500 cursor-pointer flex items-center gap-1"
                    id="copy-faq-schema-btn"
                  >
                    {copiedKey === 'faq' ? 'Copied ✅' : 'Copy Code 📋'}
                  </button>
                </div>
                <pre className="text-[9.5px] text-slate-600 overflow-x-auto max-h-32">
                  {adsSchemaTemplates.faq}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🔮 ADVANCED FREE GOOGLE ADS CAMPAIGN AUDIT FORM */}
      <section className="py-20 bg-gradient-to-b from-[#05070a] to-[#0a0f1d] border-b border-slate-900 text-left" id="free-ads-audit-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0c121e] rounded-3xl p-8 border border-slate-850 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />

            <div className="text-center space-y-3 mb-10 font-mono">
              <span className="text-brand-orange text-[9.5px] font-black uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                DIAGNOSTICS ENROLLMENT
              </span>
              <h2 className="text-3xl font-black font-display text-white">
                Request a Free Google Ads Audit
              </h2>
              <p className="text-slate-450 font-light text-xs sm:text-sm max-w-xl mx-auto">
                Submit your project domain data. Our certified performance specialists will review your Quality Scores, identify ad waste, and draft a clean ROAS scaling proposal blueprint.
              </p>
            </div>

            {auditSubmitted ? (
              <div className="p-8 bg-slate-950 border border-brand-orange/20 rounded-2xl text-center font-mono text-xs space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/40 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 text-brand-orange" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-black uppercase text-sm">Audit Request Confirmed!</h4>
                  <p className="text-slate-500">We have locked-in your diagnostics blueprint parameters. Our certified Google Ads architect will call or message within 12-24 business hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={triggerAuditSubmission} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs font-mono text-slate-350">
                
                <div className="space-y-1.5">
                  <label className="block text-[10px] text-slate-500 uppercase font-black">Authorized Representative Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Rachel Cooper"
                    value={auditForm.name}
                    onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white hover:border-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] text-slate-500 uppercase font-black">Company Website URL *</label>
                  <input 
                    type="url" 
                    required
                    placeholder="e.g. https://mybrandsaas.com"
                    value={auditForm.website}
                    onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white hover:border-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="space-y-1.55">
                  <label className="block text-[10px] text-slate-500 uppercase font-black">Estimated Monthly Marketing Budget</label>
                  <select 
                    value={auditForm.budget}
                    onChange={(e) => setAuditForm({...auditForm, budget: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="$1,000 - $5,000">$1,000 - $5,000 / Month</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000 / Month</option>
                    <option value="$15,000+">$15,000+ per Month</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] text-slate-550 uppercase font-black">Business Sector Segment *</label>
                  <select 
                    value={auditForm.industry}
                    onChange={(e) => setAuditForm({...auditForm, industry: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="SaaS">B2B Headless SaaS / Web Analytics</option>
                    <option value="Ecommerce">Ecommerce & Direct Retail</option>
                    <option value="Healthcare">Healthcare Clinics / Dental</option>
                    <option value="Consulting">Consulting Advisory Groups</option>
                  </select>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-[10px] text-slate-500 uppercase font-black">Business Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. rachel@mybrandsaas.com"
                    value={auditForm.email}
                    onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white hover:border-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-[10px] text-slate-505 uppercase font-black">Specific Campaign Challenge Goals (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g. We are bleeding CPC spend on local dental ads with 0 phone bookings..."
                    value={auditForm.goals}
                    onChange={(e) => setAuditForm({...auditForm, goals: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white hover:border-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="md:col-span-2 pt-2.5">
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold py-4 px-6 rounded-xl uppercase tracking-wider block text-center cursor-pointer shadow-lg"
                    id="submit-ads-audit-form-btn"
                  >
                    Compile Free Ad Diagnostics Audit Blueprint
                  </button>
                </div>

              </form>
            )}

            <div className="mt-8 pt-6 border-t border-slate-850 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-[10px] text-slate-500 font-mono">
              <span>📋 CAMPAIGN SPEND ANALYZED</span>
              <span>📋 WAISTED AD PHRASES DETECTED</span>
              <span>📋 COMPETITOR BID ESTIMATES</span>
            </div>

          </div>

        </div>
      </section>

      {/* 📚 PERSUASIVE RELEVANT PPC BLOG INSIGHT SEC */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12 font-mono">
            <span className="text-[10px] text-slate-500 uppercase block font-bold">EDUCATIONAL DEEP DIVES</span>
            <h3 className="text-2xl text-white font-black uppercase font-display">PPC Strategist Diaries</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            
            <div className="bg-[#0c121e] border border-slate-850 p-5 rounded-2xl flex flex-col justify-between h-56 hover:border-slate-800 transition-all">
              <div className="space-y-2">
                <span className="text-brand-orange text-[9px] font-bold uppercase block">Campaign Structures</span>
                <h4 className="text-white font-bold leading-snug text-sm">How to Configure Performance Max Bidding Safely Without Bleeding Media Budgets</h4>
              </div>
              <span className="text-slate-500 text-[10px]">► Read 8 min guide</span>
            </div>

            <div className="bg-[#0c121e] border border-slate-850 p-5 rounded-2xl flex flex-col justify-between h-56 hover:border-slate-800 transition-all">
              <div className="space-y-2">
                <span className="text-brand-orange text-[9px] font-bold uppercase block">PPC Ad Networks</span>
                <h4 className="text-white font-bold leading-snug text-sm">Google Ads vs Facebook Ads: Mapping the True Conversion intent ratios</h4>
              </div>
              <span className="text-slate-500 text-[10px]">► Read 6 min guide</span>
            </div>

            <div className="bg-[#0c121e] border border-slate-850 p-5 rounded-2xl flex flex-col justify-between h-56 hover:border-slate-800 transition-all">
              <div className="space-y-2">
                <span className="text-brand-orange text-[9px] font-bold uppercase block">Acquisition Costs</span>
                <h4 className="text-white font-bold leading-snug text-sm">A Complete Guide to Lowering Your Search Cost-Per-Lead directly in GA4</h4>
              </div>
              <span className="text-slate-500 text-[10px]">► Read 10 min guide</span>
            </div>

          </div>

        </div>
      </section>

      {/* 🔮 FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-t from-[#05070a] to-[#0a0f1d] text-center font-mono">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative">
          
          <div className="space-y-4">
            <span className="text-indigo-400 text-xs font-black uppercase tracking-widest block bg-brand-indigo/15 py-1 px-4 rounded-full inline-block border border-brand-indigo/20">
              SECURE YOUR ROAS LIFTOFF
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
              Ready to Accelerate Campaigns <br />and Scale Conversions?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
              Don't leave search conversions to chance algorithms. Partner with certified Google Ads engineers to secure transparent bidding and robust revenue matrices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 max-w-md mx-auto">
            <a 
              href="#free-ads-audit-form"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl block text-center"
              id="final-ads-audit-link-btn"
            >
              Get Free Ads Audit
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl block text-center"
              id="final-ads-whatsapp-link-btn"
            >
              Book Strategy Call
            </a>
          </div>

          <div className="pt-8 border-t border-slate-850 flex flex-wrap justify-center gap-6 text-[10px] text-slate-500">
            <span>► CERTIFIED PPC EXPERTS</span>
            <span>► ZERO SIGNUP LOCK-INS</span>
            <span>► TRANSPARENT DATA LOOKER STUDIO</span>
          </div>

        </div>
      </section>

    </div>
  );
}

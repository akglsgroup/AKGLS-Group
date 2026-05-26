import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Gauge, Terminal, ChevronDown, ChevronRight, Check, 
  Send, Smartphone, Zap, Server, Shield, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Share2,
  Layout, ArrowUpRight, Rocket, HelpCircle, Star, Info, CheckSquare,
  MessageCircle, BarChart, PhoneCall, Calendar, ShieldCheck, Crosshair
} from 'lucide-react';

interface PpcSuccessStoriesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemasTemplates = {
  article: `{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "PPC Case Study: How We Increased Leads by 620% and achieved 11X ROAS",
  "image": "https://akglsgroup.com/assets/case-studies/ppc.jpg",
  "author": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://akglsgroup.com/logo.png"
    }
  },
  "description": "How AKGLS Group scaled an enterprise Ecommerce & B2B brand's advertising ROI, generating +620% qualified leads and an 11X overall ROAS."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can PPC campaigns generate high-quality leads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike organic SEO, PPC campaigns can generate active traffic and leads within hours of launching. However, full scale performance optimization, machine learning bid cycles, and ideal audience targeting refinement typically take 30 to 45 days."
      }
    }
  ]
}`
};

export default function PpcSuccessStoriesPage({ onBackToHome, openProposalForm }: PpcSuccessStoriesPageProps) {
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "PPC Case Study | Google Ads & Paid Marketing Results | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Before/After comparison slider position (0 to 100)
  const [sliderPosition, setSliderPosition] = useState(50);

  // Dynamic PPC ROI Calculator States
  const [adSpend, setAdSpend] = useState<number>(150000); // Ad budget in INR
  const [currentCpl, setCurrentCpl] = useState<number>(2500); // Current Cost per Lead
  const [convRate, setConvRate] = useState<number>(2.0); // Conversion rate in %
  const [avgDealValue, setAvgDealValue] = useState<number>(15000); // Revenue value per closed lead in INR
  const [closeRate, setCloseRate] = useState<number>(15); // Percentage of leads closed

  // Derivations
  const currentLeads = Math.round(adSpend / currentCpl) || 0;
  const currentDeals = Math.round((currentLeads * closeRate) / 100) || 0;
  const currentRevenue = currentDeals * avgDealValue;
  const currentRoas = currentRevenue > 0 && adSpend > 0 ? (currentRevenue / adSpend).toFixed(1) : "0.0";

  // AKGLS Optimized metrics ( CPL dropped by average of 48%, Conversion Rate scaled up to average 7.2% and ROAS to 11X)
  const targetCpl = Math.round(currentCpl * 0.52);
  const targetLeads = Math.round(adSpend / targetCpl) || 0;
  const targetDeals = Math.round((targetLeads * (closeRate * 1.5)) / 100) || 0; // Better lead quality translates to 50% better close rate
  const targetRevenue = targetDeals * avgDealValue;
  const targetRoas = targetRevenue > 0 && adSpend > 0 ? (targetRevenue / adSpend).toFixed(1) : "0";
  const projectedRevenueLift = targetRevenue - currentRevenue;

  // State elements
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedSchema, setCopiedSchema] = useState<string | null>(null);
  const [activePlatformTab, setActivePlatformTab] = useState<'google' | 'meta' | 'linkedin'>('google');
  const [liveMetricIndex, setLiveMetricIndex] = useState<number>(0);

  const copySchemaJson = (jsonText: string, schemaId: string) => {
    navigator.clipboard.writeText(jsonText);
    setCopiedSchema(schemaId);
    setTimeout(() => setCopiedSchema(null), 3500);
  };

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  // Live Simulated Performance Feed Data
  const liveAdSpends = [
    { platform: "Google Ads (Search & Shopping)", budgetUsed: "₹1,80,000", costPerConv: "₹1,120", currentRoas: "12.4X", status: "Active Scaling" },
    { platform: "Meta Ads (Prospecting & Retargeting)", budgetUsed: "₹95,000", costPerConv: "₹1,410", currentRoas: "9.2X", status: "Optimized Creative" },
    { platform: "LinkedIn Ads (Account-Based Marketing)", budgetUsed: "₹45,000", costPerConv: "₹1,850", currentRoas: "11.1X", status: "Target Match Match" }
  ];

  const ppcFaqs = [
    {
      q: "How quickly can PPC campaigns generate high-quality leads?",
      a: "Unlike organic SEO, PPC can generate active, targeted traffic and leads within hours of campaign launch. However, maximum profitability, machine bidding learning cycles, and detailed audience refine matrices typically require 30 to 45 days to stabilize."
    },
    {
      q: "Which ad platform is best suited for my B2B or B2C business?",
      a: "For high-intent, active searches (e.g. 'best enterprise software' or 'near me services'), Google Ads is the absolute gold standard. For highly targeted visual triggers, interest groups, and demographic segmentation, Meta is superior. For enterprise-level B2B accounts, LinkedIn Ads is unmatched."
    },
    {
      q: "How much starting monthly ad budget do you recommend?",
      a: "We recommend a minimum starting budget of ₹50,000 to ₹1,00,000 per month. This allows the ad algorithms to acquire enough conversational data nodes and conversion signals to optimize campaigns successfully without exhausting budgets prematurely."
    },
    {
      q: "How do your AI-powered PPC strategies work to lower Cost Per Lead?",
      a: "We harness advanced scripts and custom Gemini models to analyze real-time search intent, dynamically write ad scripts, instantly test hundreds of micro-audiences, and automate bid changes. This removes wasted ad spend, securing high-intent conversion queries."
    },
    {
      q: "Do you design separate high-converting landing pages for paid campaigns?",
      a: "Absolutely. Standard website pages represent a conversion black hole due to excessive navigation parameters. We design ultra-fast loading, conversion-focused landing pages with sticky triggers, trust proofs, and seamless mobile UX to ensure optimal traffic conversion."
    },
    {
      q: "How do your PPC tracking models guarantee lead attribution parameters?",
      a: "We deploy complete Google Tag Manager setups, call-tracking triggers, and server-side connection APIs. This links every inbound call, form submission, and WhatsApp inquiry back to the exact keyword, ad group, and platform that drove the conversion."
    }
  ];

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen selection:bg-purple-650 selection:text-white">
      {/* Schema Injection */}
      <script type="application/ld+json">{schemasTemplates.article}</script>
      <script type="application/ld+json">{schemasTemplates.faq}</script>

      {/* Hero section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-900 bg-linear-to-b from-purple-950/25 via-slate-950 to-[#030712]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 animate-fade-in animate-delay-150">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left side case info */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest font-mono">
                <Rocket className="w-3.5 h-3.5 text-purple-400" /> 🚀 PPC Success Story
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                How We Increased Leads by <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-indigo-300">620%</span> & Achieved <span className="text-emerald-400">11X ROAS</span> with PPC Campaigns
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                A data-driven Google Ads, Meta Ads, LinkedIn Ads, AI-powered optimization, and conversion-focused PPC strategy that transformed ad performance and scaled high-intent revenue.
              </p>

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div id="ppc-stat-leads" className="bg-[#0b0e1e] border border-purple-950/40 p-4 rounded-xl text-left hover:border-slate-800 transition">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold">Qualified Leads</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1">+620%</div>
                  <div className="text-[9px] text-slate-500 font-mono mt-1">85 → 610+/month</div>
                </div>
                <div id="ppc-stat-roas" className="bg-[#0b0e1e] border border-purple-950/40 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold">Overall ROAS</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">11X</div>
                  <div className="text-[9px] text-slate-500 font-mono mt-1">From 2.1X Base</div>
                </div>
                <div id="ppc-stat-cpl" className="bg-[#0b0e1e] border border-purple-950/40 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold">Cost Per Lead</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">-48%</div>
                  <div className="text-[9px] text-slate-500 font-mono mt-1">₹2,400 → ₹1,250</div>
                </div>
                <div id="ppc-stat-revenue" className="bg-[#0b0e1e] border border-purple-950/40 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold">Revenue growth</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1">+390%</div>
                  <div className="text-[9px] text-slate-500 font-mono mt-1">Scaled Ad Returns</div>
                </div>
              </div>

              {/* CTA elements */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={openProposalForm}
                  className="px-8 py-4 bg-brand-orange text-white font-extrabold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 text-center flex items-center justify-center gap-2 cursor-pointer group font-sans"
                >
                  Book Free PPC Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-850 text-slate-200 font-bold rounded-xl transition text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="text-emerald-400 w-5 h-5" /> Chat with PPC Expert
                </a>
              </div>
            </div>

            {/* Right side interactive live-spend controller */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 opacity-25 blur-xl"></div>
              
              <div className="relative bg-[#0c1021] border border-purple-950/80 rounded-2xl p-5 shadow-2xl space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-slate-850 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-slate-300 font-semibold">Active Ad Performance Index</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 border border-emerald-950 bg-emerald-950/30 px-2.5 py-0.5 rounded-full font-bold">11X Net ROAS</span>
                </div>

                {/* Switchable Metric Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  {liveAdSpends.map((item, id) => (
                    <button
                      key={id}
                      onClick={() => setLiveMetricIndex(id)}
                      className={`px-2 py-2.5 rounded-lg text-left transition-all border cursor-pointer ${liveMetricIndex === id ? 'bg-purple-950/50 border-purple-500/50 shadow-md' : 'bg-slate-950/50 border-slate-900 hover:border-slate-850'}`}
                    >
                      <div className="text-[10px] font-mono text-slate-400 uppercase font-black truncate">{item.platform.split(' ')[0]}</div>
                      <div className="text-sm font-bold text-white mt-1">{item.currentRoas} ROAS</div>
                    </button>
                  ))}
                </div>

                {/* Main platform status card */}
                <div className="bg-[#050812] border border-slate-850 p-4 rounded-xl text-left space-y-3 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white font-sans">{liveAdSpends[liveMetricIndex].platform}</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/40 border border-indigo-900/30 px-2.5 py-0.5 rounded-full font-semibold">
                      {liveAdSpends[liveMetricIndex].status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Campaign Spend</div>
                      <div className="text-lg font-bold text-slate-10 text-slate-200 mt-0.5">{liveAdSpends[liveMetricIndex].budgetUsed}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold font-sans">Cost Per Lead</div>
                      <div className="text-lg font-bold text-purple-400 mt-0.5">{liveAdSpends[liveMetricIndex].costPerConv}</div>
                    </div>
                  </div>

                  {/* Real-time metrics visualization simulated */}
                  <div className="pt-2 border-t border-slate-850 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span>Machine-Learning Target Match Accuracy</span>
                      <span className="text-emerald-400 font-bold">98.4% Exceptional</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: liveMetricIndex === 0 ? '98%' : liveMetricIndex === 1 ? '92%' : '95%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#050812] border border-slate-850 p-3 rounded-lg text-left">
                    <span className="text-[9px] text-slate-500 uppercase font-mono tracking-widest font-bold">Total Conversions</span>
                    <div className="text-md font-bold text-white mt-0.5">610+ Leads / mo</div>
                  </div>
                  <div className="bg-[#050812] border border-slate-850 p-3 rounded-lg text-left">
                    <span className="text-[9px] text-slate-500 uppercase font-mono tracking-widest font-bold">CPL Reduction</span>
                    <div className="text-md font-bold text-emerald-400 mt-0.5">₹2,400 → ₹1,250</div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-500" /> Server-side conversion API matching validated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT OVERVIEW SECTION */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left max-w-3xl mb-12">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Company Background</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              About the Business
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-xl font-bold text-indigo-400 font-sans">The Core Advertising Gaps</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                Our client operates a dynamic, fast-growing hybrid brand handling high-impact Ecommerce shipping products alongside custom enterprise-level B2B logistics solutions. Despite committing significant monthly budgets, they were suffering from major leaks within their PPC channels.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Their search terms were cluttered with high-cost, unqualified queries. Ad creatives were generic, failing to reflect unique selling propositions, and their landing architectures had no tailored pathways, causing prospective buyers to abandon checkout forms or request forms.
              </p>
              
              <div className="p-5 bg-linear-to-r from-slate-900 to-[#0c0d1c] border border-purple-950/30 rounded-2xl flex items-start gap-4">
                <Crosshair className="w-10 h-10 text-purple-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-md font-bold text-white">Objective definition</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                    Deploy an omni-channel PPC strategy covering direct-intent Google Search, commercial Shopping placements, targeted Meta creative retargeting pipelines, and high-tier LinkedIn ABM lists.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side snapshot grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-850 p-5 rounded-xl text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Industry Sector</span>
                <div className="text-md font-bold text-white mt-1">Ecommerce + B2B</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-850 p-5 rounded-xl text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">PPC Channels</span>
                <div className="text-md font-bold text-white mt-1">Google, Meta & LinkedIn</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-850 p-5 rounded-xl text-left font-sans">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Ad Budget</span>
                <div className="text-md font-bold text-white mt-1">₹3L+ Per Month</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-850 p-5 rounded-xl text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Timeline Duration</span>
                <div className="text-md font-bold text-white mt-1">6 Months Campaign</div>
              </div>
              
              <div className="bg-[#0b0c1e] border border-purple-500/20 p-5 rounded-xl text-left col-span-1 sm:col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-purple-400">Monthly Lead Scaling</span>
                  <div className="text-2xl font-black text-white mt-0.5">85 → 610+ Leads</div>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES BEFORE OPTIMIZATION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 text-left space-y-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">The Obstacles</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Challenges Before PPC Optimization
              </h2>
              <p className="text-slate-400 font-light max-w-2xl text-sm leading-relaxed">
                We diagnosed massive structural gaps and budget waste inside their legacy campaigns. High cost, untargeted clicks, with non-existent conversion funnels severely diluted general revenue:
              </p>
            </div>
            
            {/* Visual health audit widget */}
            <div className="lg:col-span-5 bg-red-950/20 border border-red-900/40 p-6 rounded-2xl text-left">
              <div className="flex justify-between items-center text-sm font-mono text-red-400 mb-2 font-bold uppercase">
                <span>BEFORE HISTORICAL PPC AUDIT SCORE</span>
                <span>34 / 100</span>
              </div>
              <div className="w-full bg-red-950 rounded-full h-3 overflow-hidden border border-red-900/30">
                <div className="bg-red-500 h-full rounded-full" style={{ width: '34%' }}></div>
              </div>
              <p className="text-[11px] text-red-350 font-mono mt-3 leading-snug">
                ⚠️ SEVERE ALGORITHMIC WASTING: Google core match terms overlaps, 0 server-side pixel loops, low click CTR, and low quality copy structures.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Challenge Card 1 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">01</div>
              <h4 className="text-lg font-bold text-white font-sans">High Cost Per Lead</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Spending over ₹2,400 per inbound inquiry due to heavy broad match keyword over-triggering and unrefined target bid profiles.
              </p>
            </div>

            {/* Challenge Card 2 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">02</div>
              <h4 className="text-lg font-bold text-white font-sans">Low ROAS metrics</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                PPC campaigns were hovering barely at 2.1X ROAS, failing to offset internal operational overhead and product margins cost.
              </p>
            </div>

            {/* Challenge Card 3 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">03</div>
              <h4 className="text-lg font-bold text-white font-sans">Weak Audience Targeting</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Paid ads triggered outside the ideal enterprise segments, attracting unqualified shoppers rather than corporate logistics buyers.
              </p>
            </div>

            {/* Challenge Card 4 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">04</div>
              <h4 className="text-lg font-bold text-white font-sans">Static & Poor Ad Creatives</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Standard image assets with low USP hooks generated poor click interest, dragging down general Quality Scores on search panels.
              </p>
            </div>

            {/* Challenge Card 5 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">05</div>
              <h4 className="text-lg font-bold text-white font-sans">Low Conversion rates</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Only converting 1.8% of paid search traffic because inbound links dumped visitors on generic, cluttered structural homepages.
              </p>
            </div>

            {/* Challenge Card 6 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">06</div>
              <h4 className="text-lg font-bold text-white font-sans">No Funnel Segmentation</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Top of Funnel (TOF) queries got the same treatment as Bottom of Funnel (BOF) targets, blurring the decision paths.
              </p>
            </div>

            {/* Challenge Card 7 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">07</div>
              <h4 className="text-lg font-bold text-white font-sans">Weak Retargeting Flow</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Cart abandoners and high-tier demo quitters were completely ignored, with no dynamic creative recovery loops established.
              </p>
            </div>

            {/* Challenge Card 8 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-mono font-bold">08</div>
              <h4 className="text-lg font-bold text-white font-sans">Poor Mobile Performance</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Slow landing load speeds on 3G and 4G phones and complex multiple fields submission forms killed conversion values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PPC STRATEGY SECTION */}
      <section className="py-20 border-b border-slate-900 bg-linear-to-b from-slate-950 to-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Precision Blueprint</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Our PPC Growth Strategy
            </h2>
            <p className="text-slate-400 font-light text-sm">
              An aggressive, modern multi-channel paid growth campaign combining deep search intent structuring, predictive AI-powered bidding, and conversion rate optimization (CRO) landing designs.
            </p>
          </div>

          {/* Timeline UI */}
          <div className="relative border-l border-slate-800 md:pl-10 md:ml-10 space-y-12">
            
            {/* Phase 1 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-purple-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-purple-400 text-xs font-mono font-bold">1</div>
              <span className="text-[11px] font-bold text-purple-400 tracking-widest uppercase font-mono bg-purple-500/5 border border-purple-500/15 px-2.5 py-0.5 rounded-full inline-block">Phase 1</span>
              <h3 className="text-xl font-bold text-white">Ad Account Audit & Competitor Intelligence</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl leading-relaxed font-sans">
                We completed a exhaustive audit tracing historical wasted spend, identified poorly performing match-types, isolated overlap keywords, and compiled visual creative intelligence across rival platforms.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Result: Identified and pruned 42% of wasted ad spend within our initial week.
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-purple-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-indigo-400 text-xs font-mono font-bold">2</div>
              <span className="text-[11px] font-bold text-indigo-400 tracking-widest uppercase font-mono bg-indigo-950/35 border border-indigo-900/30 px-2.5 py-0.5 rounded-full inline-block font-sans">Phase 2</span>
              <h3 className="text-xl font-bold text-white">Campaign Restructuring & Segmentation</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl leading-relaxed">
                We engineered highly segmented Single Keyword Ad Groups (SKAGs) and Performance Max shopping arrays, dividing budgets strictly by top-performing categories and high-ticket service intent keywords.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Result: Boosted quality scores to an average of 9/10, lowering baseline CPCs.
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-purple-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-cyan-400 text-xs font-mono font-bold">3</div>
              <span className="text-[11px] font-bold text-cyan-400 tracking-widest uppercase font-mono bg-cyan-950/30 border border-cyan-900/40 px-2.5 py-0.5 rounded-full inline-block">Phase 3 — AI Optimization</span>
              <h3 className="text-xl font-bold text-white">AI-Powered PPC Optimization</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl leading-relaxed">
                We deployed predictive scripts mapping API bid profiles directly to hourly demand spikes, integrated automated copy split testing using Gemini models, and configured dynamic search targeting.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Result: Achieved immediate lower cost-per-conversion across search panels.
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-purple-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-yellow-400 text-xs font-mono font-bold">4</div>
              <span className="text-[11px] font-bold text-yellow-400 tracking-widest uppercase font-mono bg-yellow-950/30 border border-yellow-900/40 px-2.5 py-0.5 rounded-full inline-block font-sans">Phase 4</span>
              <h3 className="text-xl font-bold text-white">Landing Page Design & CRO Optimization</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl leading-relaxed">
                We constructed separate, ultra-personalized landing pages for each keyword vertical. We optimized call-to-actions, added direct WhatsApp communication links, and streamlined conversion forms.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Result: Scaled conversions from an initial 1.8% to 7.2% overall rate.
              </div>
            </div>

            {/* Phase 5 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-purple-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-pink-400 text-xs font-mono font-bold">5</div>
              <span className="text-[11px] font-bold text-pink-400 tracking-widest uppercase font-mono bg-pink-950/30 border border-pink-900/35 px-2.5 py-0.5 rounded-full inline-block">Phase 5</span>
              <h3 className="text-xl font-bold text-white">Omni-Channel paid growth expansion</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl leading-relaxed font-sans">
                We rolled out high-engagement Meta prospecting targeting lookalike buyer bases, launched corporate LinkedIn ABM list matching, and established cross-channel retargeting.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Result: Multiplied pipeline coverage, generating extensive local inbounds.
              </div>
            </div>

            {/* Phase 6 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-purple-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-amber-400 text-xs font-mono font-bold font-sans">6</div>
              <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase font-mono bg-amber-950/30 border border-amber-900/35 px-2.5 py-0.5 rounded-full inline-block">Phase 6</span>
              <h3 className="text-xl font-bold text-white">Aggressive Revenue Scaling & Automations</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl leading-relaxed">
                We unlocked smart-scaled algorithms, expanded high-value geographic demographics, and integrated automated client relationship manager notifications.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Result: Successfully maintained a steady 11X ROAS while scaling budgets.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESULTS GRID & ANALYTICS DASHBOARD */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Verified Gains</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              PPC Results Achieved
            </h2>
            <p className="text-slate-400 font-light text-sm">
              Live operational metrics pulled directly from client integrated campaign spreadsheets.
            </p>
          </div>

          {/* Results Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#0b0e1e] border border-purple-950/40 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-3 animate-pulse" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Qualified Leads Generated</div>
              <div className="text-4xl font-black text-white mt-1">85 → 610+ / mo</div>
              <p className="text-xs text-slate-400 mt-2 font-light">High quality and intent corporate leads across multiple integrated funnels.</p>
            </div>

            <div className="bg-[#0b0e1e] border border-purple-950/40 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none"></div>
              <DollarSign className="w-8 h-8 text-emerald-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Campaign Return (ROAS)</div>
              <div className="text-4xl font-black text-emerald-400 mt-1">11X ROAS</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Scaled up overall from a weak 2.1X, establishing immense profitability.</p>
            </div>

            <div className="bg-[#0b0e1e] border border-purple-950/40 p-6 rounded-2xl text-left relative overflow-hidden font-sans">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent pointer-events-none"></div>
              <Percent className="w-8 h-8 text-indigo-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Conversion Optimization Rate</div>
              <div className="text-4xl font-black text-white mt-1">1.8% → 7.2%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Massive conversion lift achieved by deploying dedicated landing landing designs.</p>
            </div>

            <div className="bg-[#0b0e1e] border border-purple-950/40 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent pointer-events-none"></div>
              <CoinsIcon className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold font-sans">Cost Per Lead (CPL)</div>
              <div className="text-4xl font-black text-white mt-1">-48% Drop</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Acquisition costs slashed down from ₹2,400 to ₹1,250 on average.</p>
            </div>

            <div className="bg-[#0b0e1e] border border-purple-950/40 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent pointer-events-none"></div>
              <Award className="w-8 h-8 text-pink-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold font-sans">Average Click CTR</div>
              <div className="text-4xl font-black text-white mt-1">2.4% → 9.1%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Targeted demographic positioning paired with dynamic copy writing.</p>
            </div>

            <div className="bg-[#0b0e1e] border border-purple-950/40 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none"></div>
              <BarChart3 className="w-8 h-8 text-cyan-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Revenue Generation Lift</div>
              <div className="text-4xl font-black text-white mt-1">+390%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Total ad-driven corporate sales revenue scaled to modern highs.</p>
            </div>
          </div>

          {/* Dynamic SVG Graphs Display */}
          <div className="bg-[#0b0e1e]/30 border border-slate-850 p-6 rounded-2xl space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="text-left font-sans">
                <h4 className="text-md font-bold text-white">Paid Conversion Lift Curve</h4>
                <p className="text-xs text-slate-500 mt-0.5">Plotting omni-channel conversion counts from Campaign launch.</p>
              </div>
              <span className="text-[10px] font-mono text-purple-400 border border-purple-900 bg-purple-950/40 px-2.5 py-1 rounded-lg">
                📍 Baseline Trigger: Unified UTM Parameters
              </span>
            </div>

            <div className="h-48 w-full bg-[#050812] border border-slate-850 rounded-xl p-3 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-y-0 inset-x-0 flex flex-col justify-between py-3 pointer-events-none opacity-40">
                <div className="border-b border-slate-850 w-full h-0"></div>
                <div className="border-b border-slate-850 w-full h-0"></div>
                <div className="border-b border-slate-850 w-full h-0"></div>
              </div>
              
              <svg className="w-full h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 0,85 C 15,82 30,75 50,71 C 70,68 93,42 110,33 C 130,22 150,15 170,10 L 200,4 L 200,100 L 0,100 Z" 
                  fill="url(#chartGrad)" 
                />
                <path 
                  d="M 0,85 C 15,82 30,75 50,71 C 70,68 93,42 110,33 C 130,22 150,15 170,10 L 200,4" 
                  fill="none" 
                  stroke="#a855f7" 
                  strokeWidth="2.5" 
                />
              </svg>

              <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2 px-1">
                <span>Month 1 (Audit)</span>
                <span>Month 2 (Segment)</span>
                <span>Month 3 (AI Smart Bidding)</span>
                <span>Month 4 (CRO Pages)</span>
                <span>Month 5 (Multi-Channel)</span>
                <span>Month 6 (Scale)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE VS AFTER INTERACTIVE COMPARISON TABLE */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Performance Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Before vs After PPC Optimization
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side standard table */}
            <div className="lg:col-span-6 text-left">
              <div className="overflow-x-auto border border-slate-850 rounded-2xl bg-slate-950/40">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-850 bg-slate-950 text-slate-400 text-[11px] font-mono uppercase tracking-wider">
                      <th className="p-4 font-bold">Metric Dimension</th>
                      <th className="p-4 text-red-400 font-bold">Before Audit</th>
                      <th className="p-4 text-emerald-400 font-bold">AKGLS Core Results</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-sans divide-y divide-purple-950/10">
                    <tr className="hover:bg-purple-950/5 transition">
                      <td className="p-4 font-bold text-white">Monthly Leads Generated</td>
                      <td className="p-4 text-slate-400 font-mono">85 Leads</td>
                      <td className="p-4 font-extrabold text-emerald-400 font-mono">610+ Leads</td>
                    </tr>
                    <tr className="hover:bg-purple-950/5 transition">
                      <td className="p-4 font-bold text-white">Campaign Net ROAS</td>
                      <td className="p-4 text-slate-400 font-mono">2.1X Return</td>
                      <td className="p-4 font-extrabold text-emerald-400 font-mono">11X Net ROAS</td>
                    </tr>
                    <tr className="hover:bg-purple-950/5 transition">
                      <td className="p-4 font-bold text-white">Cost Per Qualified Lead</td>
                      <td className="p-4 text-slate-400 font-mono">₹2,400</td>
                      <td className="p-4 font-extrabold text-emerald-400 font-mono">₹1,250 CPL</td>
                    </tr>
                    <tr className="hover:bg-purple-950/5 transition">
                      <td className="p-4 font-bold text-white">Ad Traffic Conversion Rate</td>
                      <td className="p-4 text-slate-400 font-mono">1.8%</td>
                      <td className="p-4 font-extrabold text-emerald-400 font-mono">7.2% CRO</td>
                    </tr>
                    <tr className="hover:bg-purple-950/5 transition">
                      <td className="p-4 font-bold text-white">Ad Average Click CTR</td>
                      <td className="p-4 text-slate-400 font-mono">2.4%</td>
                      <td className="p-4 font-extrabold text-emerald-400 font-mono">9.1% CTR</td>
                    </tr>
                    <tr className="hover:bg-purple-950/5 transition">
                      <td className="p-4 font-bold text-white">Monthly Ad-Driven Revenue</td>
                      <td className="p-4 text-slate-400 font-mono">₹4,00,000</td>
                      <td className="p-4 font-extrabold text-emerald-400 font-mono">₹19,60,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right side interactive comparison slider */}
            <div className="lg:col-span-6 relative">
              <div className="text-left mb-4">
                <h4 className="text-md font-bold text-white flex items-center gap-1.5 font-sans">
                  <Sparkles className="w-4 h-4 text-purple-400" /> Interactive Campaign Visualizer
                </h4>
                <p className="text-xs text-slate-400 mt-1">Drag the divider block to compare old landing page setups against optimized visual layouts.</p>
              </div>

              {/* Slider Box */}
              <div 
                className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-purple-950/40 select-none cursor-ew-resize"
                onMouseMove={(e) => {
                  if (e.buttons === 1) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleSliderMove(e.clientX, rect);
                  }
                }}
                onTouchMove={(e) => {
                  if (e.touches[0]) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleSliderMove(e.touches[0].clientX, rect);
                  }
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  handleSliderMove(e.clientX, rect);
                }}
              >
                {/* Before view */}
                <div className="absolute inset-0 bg-red-950/20 flex flex-col justify-center items-center p-6 text-center">
                  <div className="absolute top-4 left-4 bg-red-950 text-red-400 border border-red-900 px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest">
                    Legacy Ad Campaign Designs
                  </div>
                  <AlertCircle className="w-12 h-12 text-red-500 mb-2 animate-bounce" />
                  <h5 className="text-lg font-bold text-white">Thin Performance Landing pages</h5>
                  <p className="text-xs text-slate-400 max-w-sm mt-1 leading-relaxed">
                    Slow speeds, high drop-off rates, confusing options, and zero remarketing pixels connected.
                  </p>
                </div>

                {/* After view (clipped based on slider) */}
                <div 
                  className="absolute inset-y-0 left-0 bg-purple-950/90 flex flex-col justify-center items-center p-6 text-center overflow-hidden border-r border-white/60 z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="w-[450px] sm:w-[500px] flex flex-col items-center shrink-0">
                    <div className="absolute top-4 left-4 bg-emerald-950 text-emerald-400 border border-emerald-900 px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest">
                      AKGLS Optimized Systems
                    </div>
                    <CheckCircle className="w-12 h-12 text-emerald-400 mb-2 animate-pulse" />
                    <h5 className="text-lg font-bold text-white">Ultra-Fast Responsive CRO Pathways</h5>
                    <p className="text-xs text-emerald-200 max-w-sm mt-1 leading-relaxed">
                      Custom responsive templates, fast WhatsApp triggers, and automated target tracking flows.
                    </p>
                  </div>
                </div>

                {/* Slider bar thumb icon */}
                <div 
                  className="absolute inset-y-0 w-1 bg-white z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 font-extrabold text-xs shadow-lg flex items-center justify-center pointer-events-none">
                    ↔️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM-WISE RESULTS SECTION */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Multi-Channel Dominance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Multi-Platform PPC Performance Results
            </h2>
            <p className="text-slate-400 font-light text-sm">
              How our customized campaign strategy performed across different advertising networks and channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Small tab switcher menu */}
            <div className="lg:col-span-4 space-y-3">
              <button
                onClick={() => setActivePlatformTab('google')}
                className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${activePlatformTab === 'google' ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-lg' : 'bg-slate-900/40 border-slate-850 text-slate-400 hover:border-slate-800'}`}
              >
                <div className="font-sans">
                  <div className="text-xs font-mono uppercase font-bold text-slate-500">Search & Shopping</div>
                  <div className="text-lg font-bold mt-1">Google Ads Networks</div>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActivePlatformTab('meta')}
                className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${activePlatformTab === 'meta' ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-lg' : 'bg-slate-900/40 border-slate-850 text-slate-400 hover:border-slate-800'}`}
              >
                <div className="font-sans">
                  <div className="text-xs font-mono uppercase font-bold text-slate-500">Social Interest Targeting</div>
                  <div className="text-lg font-bold mt-1">Meta Ads Manager</div>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActivePlatformTab('linkedin')}
                className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${activePlatformTab === 'linkedin' ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-lg' : 'bg-slate-900/40 border-slate-850 text-slate-400 hover:border-slate-800'}`}
              >
                <div className="font-sans">
                  <div className="text-xs font-mono uppercase font-bold text-slate-500">Corporate Target Matching</div>
                  <div className="text-lg font-bold mt-1">LinkedIn Campaign</div>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Platform metrics focus display panel */}
            <div className="lg:col-span-8 bg-[#0c1021] border border-purple-950/50 p-6 sm:p-8 rounded-2xl">
              {activePlatformTab === 'google' && (
                <div className="space-y-6 animate-fade-in text-left">
                  <h3 className="text-2xl font-extrabold text-white flex items-center gap-2 font-sans">
                    Google Ads Campaign Optimization
                  </h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    We restructured dynamic Search Campaigns alongside optimized Performance Max shopping asset groups. By locking precise transactional keywords, we prevented waste and locked in direct buyer eyes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono">NET ROAS</div>
                      <div className="text-2xl font-bold text-emerald-400 mt-1">8X ROAS</div>
                    </div>
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono">LEAD LIFT</div>
                      <div className="text-2xl font-bold text-purple-400 mt-1">4X Leads</div>
                    </div>
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono font-sans">CPC REDUCTION</div>
                      <div className="text-2xl font-bold text-white mt-1">-32% Drop</div>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Segmented budget allocation to top transactional items.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Integrated smart bidding algorithms matching conversion data.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clean automated bid updates across dynamic terms lists.
                    </div>
                  </div>
                </div>
              )}

              {activePlatformTab === 'meta' && (
                <div className="space-y-6 animate-fade-in text-left">
                  <h3 className="text-2xl font-extrabold text-white flex items-center gap-2 font-sans">
                    Meta Social Campaign Refinement
                  </h3>
                  <p className="text-slate-300 font-light leading-relaxed font-sans">
                    We launched highly-targeted social prospecting matching exact buyer lookalike lists. We designed rich, visual media asset reels highlighting business shipping value points for commercial buyers.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono">ENGAGEMENT</div>
                      <div className="text-2xl font-bold text-emerald-400 mt-1">5X Growth</div>
                    </div>
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono uppercase">Sales Revenue</div>
                      <div className="text-2xl font-bold text-purple-400 mt-1">+320% Lift</div>
                    </div>
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono">CPM LIFT</div>
                      <div className="text-2xl font-bold text-white mt-1">Slashed -28%</div>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Engineered advanced high-retaining visual social templates.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Dynamic retargeting triggered to follow specific shop catalog dropouts.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Multi-variable audience split tests running to secure lowest costs.
                    </div>
                  </div>
                </div>
              )}

              {activePlatformTab === 'linkedin' && (
                <div className="space-y-6 animate-fade-in text-left font-sans">
                  <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                    LinkedIn Account-Based Targeting
                  </h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    We mapped direct B2B targeting matrices directly focusing on logistics decision directors. We delivered tailored value-driven slide presentations inside their feed, boosting direct demo schedules.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono">QUALIFIED INBOUNDS</div>
                      <div className="text-2xl font-bold text-emerald-400 mt-1">4X Growth</div>
                    </div>
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono">Enterprise Match</div>
                      <div className="text-2xl font-bold text-purple-400 mt-1">100% Focused</div>
                    </div>
                    <div className="bg-[#050812] p-4 rounded-xl border border-slate-850">
                      <div className="text-xs text-slate-500 font-mono">Demo conversion</div>
                      <div className="text-2xl font-bold text-white mt-1">8.4% Rate</div>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Precision account target lists matching custom corporate structures.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Conversational direct messaging paths optimized with trust assets.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant scheduling systems linked to minimize human follow hurdles.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MODERN AI PPC SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side text details */}
            <div className="text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold uppercase tracking-wider font-mono">
                <Bot className="w-3.5 h-3.5 text-purple-400 animate-pulse" /> Advanced Marketing AI Integration
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                AI-Powered PPC Optimization Results
              </h2>
              <p className="text-slate-300 font-light leading-relaxed">
                By integrating specialized scripts and API connections directly into the bidding machinery, we completely automated the routine testing tasks, matching campaigns cleanly to moving traffic flows.
              </p>

              <div className="space-y-4 pt-1">
                <div className="flex gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/20 border border-purple-900/40 flex items-center justify-center shrink-0 text-purple-400 font-bold font-sans">A</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dynamic Audience Prediction</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">System instantly routes budget points to active target segments showing high buyer search intent.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/20 border border-purple-900/40 flex items-center justify-center shrink-0 text-purple-400 font-bold">B</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Gemini Conversational Copy Splitting</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">Automated models write and refresh over 30 micro ad variations, maintaining maximum relevance score levels.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side AI visual panel */}
            <div className="bg-[#0b0c1c] border border-purple-950/50 p-6 rounded-2xl text-left space-y-4">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">Predictive AI Control Engine</span>
              
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 font-mono space-y-2 text-xs">
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>RUNNING TARGET INTEGRATION SCANS</span>
                  <span className="text-emerald-400">● LIVE FEED</span>
                </div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  <div className="text-purple-400 font-bold">&gt;_ Fetching conversion signals... done.</div>
                  <div className="text-emerald-400">&gt;_ CPL target threshold matched at ₹1,250.</div>
                  <div className="text-slate-500">&gt;_ Running smart bidding adjustment routines...</div>
                  <div className="text-indigo-400">&gt;_ Budget distribution weights updated: Search [60%] | Social [40%].</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                  <div className="text-[10px] text-slate-500 font-mono uppercase font-bold">Predictive Accuracy</div>
                  <div className="text-xl font-bold text-white mt-1">96.8% Score</div>
                </div>
                <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl font-sans">
                  <div className="text-[10px] text-slate-500 font-mono uppercase font-bold">Automation efficiency</div>
                  <div className="text-xl font-bold text-purple-400 mt-1">4.5X Faster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVERSION RATE OPTIMIZATION SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono font-sans">CRO Science</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Landing Page & Conversion Growth Results
            </h2>
            <p className="text-slate-400 font-light text-sm">
              How our design and user experience overhaul maximized the return on every single click.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-[#0b0e1e] border border-slate-850 p-6 rounded-2xl space-y-2">
              <Smartphone className="w-8 h-8 text-indigo-400" />
              <h4 className="text-lg font-bold text-white font-sans">Mobile UX Redesign</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Streamlined mobile formats, integrated one-click layouts, and speed optimized asset packages.
              </p>
            </div>

            <div className="bg-[#0b0e1e] border border-slate-850 p-6 rounded-2xl space-y-2">
              <Zap className="w-8 h-8 text-amber-400" />
              <h4 className="text-lg font-bold text-white font-sans">CTA Optimization</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Repositioned high-converting CTA touch points to guide visitor attention smoothly toward action steps.
              </p>
            </div>

            <div className="bg-[#0b0e1e] border border-slate-850 p-6 rounded-2xl space-y-2 font-sans">
              <Shuffle className="w-8 h-8 text-teal-400" />
              <h4 className="text-lg font-bold text-white">Constant A/B Testing</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Maintained uninterrupted testing loops identifying optimum hero images, lead form designs, and copy angles.
              </p>
            </div>

            <div className="bg-[#0b0e1e] border border-slate-850 p-6 rounded-2xl space-y-2">
              <MessageSquare className="w-8 h-8 text-emerald-400" />
              <h4 className="text-lg font-bold text-white">WhatsApp Integration</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Connected fast, direct WhatsApp chat triggers, lowering barriers for enterprise shoppers seeking custom assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC PPC ROI CALCULATOR SECTION */}
      <section id="roi-calc" className="py-20 border-b border-slate-900 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Instant Scans</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Calculate Your Potential PPC Growth
            </h2>
            <p className="text-slate-400 font-light text-sm">
              Input your current advertising metrics to reveal projected gains from our optimized PPC strategies.
            </p>
          </div>

          <div className="bg-[#0c1021] border border-purple-950/60 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls - Left Side */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h4 className="text-md font-bold text-white uppercase tracking-wider font-mono text-purple-400">Adjust parameters</h4>
              
              <div className="space-y-1.5 font-sans">
                <label className="text-xs text-slate-400 font-bold block">Monthly Ad Budget (INR)</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="50000" 
                    max="1000000" 
                    step="25000"
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold text-white w-24 shrink-0 text-right bg-slate-950/85 px-2 py-1 border border-slate-800 rounded">
                    ₹{(adSpend / 1000).toFixed(0)}K
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 font-sans">
                <label className="text-xs text-slate-400 block font-bold">Current Cost per Lead (INR)</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="500" 
                    max="5000" 
                    step="100"
                    value={currentCpl}
                    onChange={(e) => setCurrentCpl(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold text-white w-24 shrink-0 text-right bg-slate-950/85 px-2 py-1 border border-slate-800 rounded">
                    ₹{currentCpl}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 font-sans">
                  <label className="text-xs text-slate-400 block font-bold">Lead Sales Close %</label>
                  <input 
                    type="number"
                    min="5"
                    max="60"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-850 p-2 text-sm text-white rounded-lg focus:border-purple-500 focus:outline-none focus:ring-0 font-mono"
                  />
                </div>
                <div className="space-y-1.5 font-sans">
                  <label className="text-xs text-slate-400 block font-bold">Avg Client Life Value</label>
                  <input 
                    type="number"
                    min="1000"
                    max="200000"
                    step="5000"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-850 p-2 text-sm text-white rounded-lg focus:border-purple-500 focus:outline-none focus:ring-0 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Calculations Output - Right Side */}
            <div className="lg:col-span-6 bg-[#050812] border border-purple-900/40 p-6 rounded-2xl space-y-6 text-left">
              <h4 className="text-sm font-bold text-slate-450 uppercase tracking-widest font-mono text-emerald-400">GROWTH FORECASTS LIFT</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0b0e1e]/60 p-3 rounded-xl border border-slate-850">
                  <div className="text-[10px] uppercase font-mono text-slate-500">LEGACY LEADS OUTPUT</div>
                  <div className="text-xl font-bold text-white mt-1">{currentLeads} Leads</div>
                  <div className="text-[10px] text-red-400 font-mono mt-0.5">{currentRoas}X ROAS</div>
                </div>

                <div className="bg-purple-950/20 p-3 rounded-xl border border-purple-900/40 font-sans">
                  <div className="text-[10px] uppercase font-mono text-purple-400 font-bold">PROJECTED LEADS</div>
                  <div className="text-xl font-black text-emerald-400 mt-1">{targetLeads} Leads</div>
                  <div className="text-[10px] text-emerald-400 font-mono font-bold mt-0.5">{targetRoas}X ROAS</div>
                </div>
              </div>

              <div className="border-t border-slate-850 pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Current Forecast Monthly Revenue</span>
                  <span className="text-xs font-mono text-slate-200">₹{currentRevenue.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-purple-300">AKGLS Smart-Optimized Revenue</span>
                  <span className="text-xs font-mono text-emerald-400 font-extrabold">₹{targetRevenue.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="border-t border-dashed border-slate-800 pt-3 flex justify-between items-center">
                  <span className="text-sm font-bold text-white">Net Revenue Growth Lift</span>
                  <span className="text-lg font-black text-emerald-400 font-mono leading-none">
                    +₹{projectedRevenueLift.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={openProposalForm}
                className="w-full py-3 bg-brand-orange text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition flex items-center justify-center gap-1.5 cursor-pointer font-sans"
              >
                Claim This Projected Growth Lift <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-[#0c1021] border border-purple-950/60 p-8 sm:p-12 rounded-3xl text-center space-y-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center border-4 border-[#030712] shadow-lg shadow-purple-500/20 text-white font-serif font-black text-2xl">
              “
            </div>
            
            <p className="text-lg sm:text-xl text-slate-200 font-light italic leading-relaxed">
              “AKGLS Group completely transformed our PPC campaigns. Our ROAS and lead quality improved dramatically while reducing acquisition costs. Highly technical, data-driven experts.”
            </p>

            <div className="space-y-1">
              <div className="text-md font-bold text-white font-sans">Rajit Sen</div>
              <div className="text-xs text-slate-500 font-mono font-semibold">Logistics Division Chief, Delhi NCR</div>
              <div className="text-[10px] font-mono text-emerald-400 border border-emerald-950 bg-emerald-950/20 px-2.5 py-1 rounded-full inline-block mt-1 font-bold font-sans">
                Achieved 11X ROAS & +620% Leads Volume
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES USED */}
      <section className="py-16 border-b border-slate-900 bg-slate-950/15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">The Stack</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
              PPC Tools & Technologies Used
            </h3>
          </div>

          {/* Simple Tool grid list */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              "Google Ads Platform", "Meta Ads Manager", "LinkedIn Campaign Manager",
              "Google Analytics 4", "Google Tag Manager", "Looker Studio Board",
              "Hotjar User Flows", "Gemini AI Bidding", "ChatGPT Dynamic", "Internal CRM Systems"
            ].map((tool, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl font-bold text-center text-sm text-slate-350 hover:bg-slate-900 transition">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS STRATEGY WORKED SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Execution Rules</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Why This PPC Strategy Worked
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-xl hover:border-purple-950/50 transition">
              <h4 className="text-md font-bold text-white font-sans">Smart Audience Targeting</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Direct placement profiling ensured zero leakage, filtering impressions strictly to verified corporate logistics buyers.</p>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-xl hover:border-purple-950/50 transition">
              <h4 className="text-md font-bold text-white font-sans">AI-Powered Optimization</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Predictive hour signals and automated Gemini variations testing maintained high Quality Score averages.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-xl hover:border-purple-950/50 transition">
              <h4 className="text-md font-bold text-white font-sans">Landing Page Optimization</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">Ultra-personalized layouts stripped of un-necessary barriers secured maximum visitor action rate.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-xl hover:border-purple-950/50 transition">
              <h4 className="text-md font-bold text-white font-sans">Multi-Platform Strategy</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Balanced spend allocations matching exact commercial intents ensured stable Omnichannel safety.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-xl hover:border-purple-950/50 transition">
              <h4 className="text-md font-bold text-white font-sans">Continuous Testing</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Constant daily review checks ensured bid updates ran smoothly before budget exhaustion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Explore Further</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Related Marketing Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl flex flex-col justify-between h-56 hover:border-slate-800 transition">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/20 px-2 rounded-full uppercase py-0.5">ECOMMERCE SEO</span>
                <h4 className="text-lg font-bold text-white mt-2 font-sans">450% Traffic Growth Case</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Scaling organic search rankings and conversion setups across online catalog lines.</p>
              </div>
              <button 
                onClick={() => {
                  window.history.pushState(null, '', '/case-study/ecommerce-seo-results/');
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="text-xs font-mono font-bold text-brand-orange hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 self-start align-middle mt-4"
              >
                View Case Strategy <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl flex flex-col justify-between h-56 hover:border-slate-800 transition">
              <div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-[#0c1021]/60 border border-blue-900/20 px-2 rounded-full uppercase py-0.5">LOCAL MAPS SEO</span>
                <h4 className="text-lg font-bold text-white mt-2 font-sans">580% Google Maps Visibility</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Scaling patient appointments and inbound dial actions for regional service clinics.</p>
              </div>
              <button 
                onClick={() => {
                  window.history.pushState(null, '', '/case-study/local-seo-results/');
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="text-xs font-mono font-bold text-brand-orange hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 self-start mt-4"
              >
                View Case Strategy <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#0b0e1e] border border-purple-950/40 p-6 rounded-2xl flex flex-col justify-between h-56 hover:border-purple-900/40 transition">
              <div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-950/30 border border-purple-900/20 px-2 rounded-full uppercase py-0.5">SAAS MARKETING</span>
                <h4 className="text-lg font-bold text-white mt-2 font-sans">SaaS Lead Generation</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">Optimizing enterprise trial channels and demo reservation systems for tech firms.</p>
              </div>
              <button 
                onClick={onBackToHome}
                className="text-xs font-mono font-bold text-brand-orange hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 self-start mt-4"
              >
                Back To Main Agency <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST CONSULTATION PROMPT SECTION */}
      <section className="py-20 bg-linear-to-b from-[#030712] via-purple-950/15 to-[#030712] border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Unlock Your Growth Lift</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Want Similar PPC Results for Your Business?
          </h2>
          <p className="text-slate-300 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Let AKGLS Group help you generate more leads, improve ROAS, reduce acquisition costs, and scale revenue with AI-powered PPC strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={openProposalForm}
              className="px-8 py-4 bg-brand-orange text-white font-extrabold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 cursor-pointer font-sans"
            >
              Book Free PPC Consultation
            </button>
            <button 
              onClick={openProposalForm}
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-850 rounded-xl transition text-white font-bold cursor-pointer font-sans"
            >
              Request Campaign Audit
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 font-bold"><Check className="text-purple-400 w-4.5 h-4.5" /> Google Ads Certified specialists</span>
            <span className="flex items-center gap-1.5 font-bold"><Check className="text-purple-400 w-4.5 h-4.5" /> AI-Powered PPC Optimization</span>
            <span className="flex items-center gap-1.5 font-bold"><Check className="text-purple-400 w-4.5 h-4.5" /> Transparent Live Reporting</span>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDIONS */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Clarifications</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {ppcFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-slate-850 rounded-2xl overflow-hidden text-left">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex justify-between items-center text-slate-200 hover:text-white font-bold transition cursor-pointer text-sm sm:text-base font-sans"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-400 font-light leading-relaxed border-t border-slate-850/60 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUGGESTED BLOG ARTICLES */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Education</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
              Suggested Paid Marketing Articles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl hover:border-slate-800 transition">
              <h4 className="text-lg font-bold text-white font-sans">PPC Optimization Playbook</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">How to restructure your Google Search and Shopping setup to remove ad waste and boost lead performance.</p>
            </div>
            
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl hover:border-slate-800 transition">
              <h4 className="text-lg font-bold text-white font-sans">PPC vs SEO Decision Flow</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">A complete breakdown explaining when to pay for direct clicks versus compounding organic visibility.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl hover:border-slate-800 transition flex flex-col justify-between font-sans">
              <div>
                <h4 className="text-lg font-bold text-white">Conversion Optimization Tips</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Simple actions to instantly update mobile margins, landing forms, and direct messaging conversions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION FOOTER */}
      <section className="py-20 bg-[#060814] text-center border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Ready to Scale Your Business with High-Performance PPC?
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
            Partner with AKGLS Group to take control of your customer acquisition funnels, increase ad ROAS, and scale enterprise pipelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button 
              onClick={openProposalForm}
              className="px-8 py-4 bg-brand-orange text-white font-extrabold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 cursor-pointer font-sans"
            >
              Start PPC Growth Campaign
            </button>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-850 rounded-xl text-slate-200 font-bold transition flex items-center justify-center gap-1.5 cursor-pointer font-sans"
            >
              <MessageSquare className="text-emerald-400 w-5 h-5" /> Talk to PPC Experts
            </a>
          </div>
        </div>
      </section>

      {/* Floating Sticky Conversion Bar at bottom of screen on Mobile/Tablet */}
      <div className="fixed bottom-0 inset-x-0 bg-slate-950/85 backdrop-blur-md border-t border-purple-950/40 p-4 z-40 sm:hidden flex justify-between items-center">
        <span className="text-xs font-bold text-emerald-400 font-mono">🚀 PPC ROI Lift Projection LIVE</span>
        <button 
          onClick={openProposalForm}
          className="px-4 py-2 bg-brand-orange text-white text-[11px] font-extrabold rounded-lg hover:bg-orange-600 transition shadow cursor-pointer font-sans"
        >
          Audit My Ads
        </button>
      </div>

    </div>
  );
}

// Simple Helper Coins Icon (Fallback matching standard layout)
function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <circle cx="18" cy="18" r="4" />
      <path d="M12 18a6 6 0 0 0-6-6" />
    </svg>
  );
}

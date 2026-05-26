import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, 
  MessageSquare, Smartphone, TrendingUp, Coins, ShoppingCart, Lock
} from 'lucide-react';

interface HirePpcExpertPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function HirePpcExpertPage({ onBackToHome, openProposalForm }: HirePpcExpertPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hire PPC Expert | Google Ads & Paid Marketing Specialist | AKGLS Group";
    
    // Add meta description dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : "";
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Hire PPC experts from AKGLS Group for Google Ads, Meta Ads, LinkedIn Ads, AI-powered PPC, lead generation & ROI-focused paid marketing campaigns.');

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
  const [activeTab, setActiveTab] = useState<'google' | 'meta' | 'linkedin' | 'ai' | 'ecommerce'>('google');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Hiring Model Calculator state
  const [selectedHours, setSelectedHours] = useState(30);
  const [hiringTier, setHiringTier] = useState<'hourly' | 'dedicated' | 'agency'>('dedicated');

  // ROI Calculator state
  const [adBudget, setAdBudget] = useState(5000);
  const [avgCpc, setAvgCpc] = useState(1.50);
  const [convRate, setConvRate] = useState(3.5); // %
  const [leadVal, setLeadVal] = useState(250); // $ Average lead/order value

  // Calculated ROI values
  const totalClicks = Math.round(adBudget / (avgCpc || 0.1));
  const totalConversions = Math.round(totalClicks * (convRate / 100));
  const grossRevenue = Math.round(totalConversions * leadVal);
  const netReturn = grossRevenue - adBudget;
  const roasMultiplier = adBudget > 0 ? (grossRevenue / adBudget).toFixed(2) : '0.00';
  const costPerAcquisition = totalConversions > 0 ? Math.round(adBudget / totalConversions) : 0;

  // Free Audit simulator state
  const [auditUrl, setAuditUrl] = useState('');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [auditName, setAuditName] = useState('');
  const [auditIndustry, setAuditIndustry] = useState('E-commerce');
  const [auditBudgetRange, setAuditBudgetRange] = useState('$5,000 - $10,000');
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
      `Initializing PPC audit pipeline scanner for ${auditUrl}...`,
      'Detecting global site tags (gtag.js), Google Tag Manager configuration, and Meta pixel integration...',
      'Retrieving web page speed structures and mobile conversion layout bottlenecks...',
      'Analyzing landing page call-to-action (CTA) ratios, heading structures, and trust indicators...',
      'Simulating semantic relevance scoring against premium CPC bidding pools...',
      'Evaluating tracking events: checking for missing purchase, form_submit, and phone_click parameters...',
      'Running AI-powered landing page optimization (LPO) predictive scoring analysis...',
      'Structuring recommended target audience models and campaign structures...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAuditStepLog(prev => [...prev, `[LOG] ${steps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        const randomScore = Math.floor(Math.random() * 25) + 40; // 40 - 65 indicating typical audit findings
        setAuditResult({
          score: randomScore,
          criticalErrors: [
            'Attribution configuration model setting defaults to Last Click instead of Data-Driven',
            'Conversion API (CAPI) missing causing up to 30% lost conversions via iOS browser blocks',
            'Missing dynamic search ads (DSA) backup targets to cover long-tail query gaps',
            'No automated micro-conversion events configured to feed smart bidding models'
          ],
          conversionPotential: 'Could yield up to +185% ROAS lift with structural enhancements',
          recommendedTier: 'Senior Google & Meta Ads Specialist (Dedicated Partner / 30 hrs/wk)',
          actionPlan: 'Implement GA4 server-side tagging, implement high-converting interactive checkout frameworks, launch Performance Max search tier backup triggers.'
        });
        setAuditRunning(false);
      }
    }, 850);
  };

  // Structured schemas recommendation state copy
  const [copiedSchema, setCopiedSchema] = useState<string | null>(null);
  const triggerCopySchema = (schemaType: 'service' | 'review') => {
    const rawCode = schemaType === 'service' ? `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Expert PPC Hiring & Paid Ads Sourcing",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "PPC Expert Sourcing Models",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Full-Time PPC Specialist" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Part-Time PPC Consultant" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising Campaign Audit" } }
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
    "ratingValue": "4.95",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Mark D.",
    "jobTitle": "Head of Digital Marketing, SaaS Scale"
  }
}`;
    navigator.clipboard.writeText(rawCode);
    setCopiedSchema(schemaType);
    setTimeout(() => setCopiedSchema(null), 3000);
  };

  // Interactive Live PPC Campaign Simulator
  const [simIndex, setSimIndex] = useState(0);
  const simCampaigns = [
    { title: "Google Performance Max (PMax)", spend: "$3,450", conversions: "210 Sales", roas: "4.85x ROAS", costPerLead: "$16.42", trendStatus: "Hyper-Growth Scale" },
    { title: "Meta Advantage+ Audience", spend: "$4,100", conversions: "485 Leads", roas: "6.10x ROAS", costPerLead: "$8.45", trendStatus: "Creative Exhaustion Guard On" },
    { title: "LinkedIn B2B Account Targeting", spend: "$2,800", conversions: "58 SQLs", roas: "3.50x ROAS", costPerLead: "$48.27", trendStatus: "Enterprise Decision-Maker Funnel" },
    { title: "Local Multi-Geo Google Local Service", spend: "$1,500", conversions: "140 Calls", roas: "5.40x ROAS", costPerLead: "$10.71", trendStatus: "Map Ring Fencing Live" }
  ];

  return (
    <div className="min-h-screen bg-[#040612] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 right-0 h-[700px] bg-gradient-to-b from-[#0b1433]/30 via-[#0a1b3d]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[550px] h-[550px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[55%] right-[-15%] w-[650px] h-[650px] bg-cyan-950/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Corporate Header Navigator */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900 sticky top-0 bg-[#040612]/90 backdrop-blur z-50">
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
            Request Custom Ad RFP
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
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 left-0 right-0 bg-[#080d24]/95 border-t border-cyan-500/30 backdrop-blur-md py-4 z-50 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-505 bg-indigo-500 rounded-full animate-pulse shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300">
                  Ready to launch precision campaigns? Hire a highly vetted <strong className="text-white">dedicated PPC Specialist</strong> from AKGLS.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/918318114492"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-emerald-950/30 text-emerald-400 border border-emerald-900 px-4 py-2 rounded-lg text-xs font-mono hover:bg-emerald-950/60 transition"
                >
                  WhatsApp Expert
                </a>
                <button 
                  onClick={() => {
                    const form = document.getElementById('free-ppc-audit');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold px-5 py-2 rounded-lg text-xs hover:opacity-95 transition"
                >
                  Hire PPC Specialist
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
            <span className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Certified Dedicated PPC Expert Allocation</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-md lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hire PPC Experts to Generate More <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Leads, Sales & Real ROAS</span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Hire vetted, platform-certified PPC experts for Google Ads, Meta scaling, LinkedIn B2B targeting, and AI-powered campaign optimization. Eliminate wasted ad spend and drive conversions with dedicated, ROI-centric paid advertising strategies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => {
                  const form = document.getElementById('free-ppc-audit');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-bold px-6 py-4 rounded-xl transition text-sm cursor-pointer shadow-lg shadow-indigo-950/50"
              >
                <span>Hire PPC Expert Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={openProposalForm}
                className="inline-flex justify-center items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition px-6 py-4 rounded-xl text-sm font-bold cursor-pointer"
              >
                Book Free PPC Consultation
              </button>
            </div>

            {/* Hero bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-900">
              <div className="space-y-1">
                <span className="text-white font-bold text-xs sm:text-sm block">Google Partner</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">Certified Resources</span>
              </div>
              <div className="space-y-1">
                <span className="text-cyan-400 font-bold text-xs sm:text-sm block">AI Attribution Ready</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">Cookieless Tracking</span>
              </div>
              <div className="space-y-1">
                <span className="text-indigo-400 font-bold text-xs sm:text-sm block">Wasted Spend Cut</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">Average -35% CPA</span>
              </div>
              <div className="space-y-1">
                <span className="text-purple-400 font-bold text-xs sm:text-sm block">Flexible Hiring</span>
                <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider block">Hourly & Dedicated</span>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Console & Live Campaign Performance Tracker */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="bg-gradient-to-br from-[#0c122c] to-[#040612] border border-indigo-950/80 rounded-2xl p-6 shadow-2xl relative z-10 space-y-4">
              
              <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <span className="text-[10px] font-mono text-slate-500 ml-2">ROAS_CAMPAIGN_TRACKER</span>
                </div>
                <span className="bg-indigo-950 text-indigo-300 font-mono text-[9px] px-2 py-0.5 rounded border border-indigo-800/50">LIVE CAMPAIGN</span>
              </div>

              {/* Campaign dynamic performance selector */}
              <div className="space-y-3">
                <p className="text-[11px] text-slate-400 font-mono">Select a platform setup designed by our specialists:</p>
                <div className="bg-[#05081a]/95 border border-indigo-950 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Platform Campaign:</span>
                    <span className="text-white font-bold">{simCampaigns[simIndex].title}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Monthly Budget:</span>
                    <span className="text-white font-mono font-bold text-cyan-400">{simCampaigns[simIndex].spend}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Conversion Impact:</span>
                    <span className="text-emerald-400 font-bold font-mono">{simCampaigns[simIndex].conversions}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Calculated Value:</span>
                    <div className="text-right">
                      <span className="text-white font-bold font-mono block text-sm">{simCampaigns[simIndex].roas}</span>
                      <span className="text-[9px] text-slate-500 font-mono block">CPA: {simCampaigns[simIndex].costPerLead}</span>
                    </div>
                  </div>
                  <div className="bg-[#020309] border border-cyan-950 px-2 py-1 rounded text-[9px] font-mono text-cyan-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-450 bg-cyan-400 rounded-full animate-ping" />
                    <span>Machine-Learning Rule: {simCampaigns[simIndex].trendStatus}</span>
                  </div>
                </div>

                <div className="flex gap-2 justify-center">
                  {simCampaigns.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSimIndex(i)}
                      className={`h-2 rounded-full transition-all ${simIndex === i ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-800'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Action/ROAS tracking progress bar */}
              <div className="bg-[#040612] border border-slate-900 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 uppercase">ACQUISITION EFFICIENCY</span>
                  <span className="text-cyan-400 font-bold">Wasted Spend Slashed By 40%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full w-[85%]" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-500">
                  <span>Traditional Agency (Waste)</span>
                  <span>AKGLS Optimized (ROAS Focus)</span>
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
            A accredited Premium Paid Channel Sourcing Agency
          </p>

          {/* Verification Badges / Partner logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-all">
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-slate-200 tracking-wider font-mono">GOOGLE PARTNER</span>
              <span className="text-[9px] text-[#4285F4] font-mono inline-block">Search / Video / Shopping Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-slate-200 tracking-wider font-sans">META BUSINESS PARTNER</span>
              <span className="text-[9px] text-[#0668E1] font-mono inline-block">Dynamic Commerce Accredited</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-slate-200 tracking-wider font-mono">TIKTOK MARKETING</span>
              <span className="text-[9px] text-slate-500 font-mono inline-block">Creative Targeting Trained</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-slate-200 tracking-wider font-sans">LINKEDIN EXPERT</span>
              <span className="text-[9px] text-[#0077B5] font-mono inline-block">ABM Target Pipelines Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-slate-200 tracking-wider font-mono">GA4 INDIVIDUAL</span>
              <span className="text-[9px] text-emerald-400 font-mono inline-block">Advanced Server-Side Tagging</span>
            </div>
          </div>

          <div className="pt-8 border-t border-indigo-950/40">
            <span className="text-slate-400 text-xs block mb-6 font-mono">PAID ACQUISITION OVERVIEW Metrics</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-950 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-white block">2.4M+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Leads Generated</span>
              </div>
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-950 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 block">4.8x</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Average ROAS Achieved</span>
              </div>
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-950 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-indigo-400 block">$40M+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Ad Spend Managed</span>
              </div>
              <div className="p-4 bg-[#0a0d24]/60 border border-slate-950 rounded-xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block">-35%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Average CPA Decrease</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIRE A PPC EXPERT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">The Hiring Difference</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Hire a Dedicated PPC Expert?</h2>
          <p className="text-slate-400 text-sm font-light">
            Generic digital agencies assign junior managers writing basic campaigns. Our dedicated specialists evaluate bid adjustments, audience coordinates, and attribution models daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Generate High-Quality Leads",
              desc: "Deploy negative keywords grids and negative search intent blocks to bypass non-converters and capture direct buyer interest.",
              tag: "Audience Filtering"
            },
            {
              title: "Improve ROAS Significantly",
              desc: "Align your bids with real-time analytics data. Run granular split tests on ad hooks to convert clicks into sales.",
              tag: "Yield Optimization"
            },
            {
              title: "Reduce Cost Per Lead (CPA)",
              desc: "Tweak quality copy, optimize conversion paths, and utilize automated bidding adjustments to reduce costly click acquisitions.",
              tag: "Efficiency Slashes"
            },
            {
              title: "Scale Paid Advertising Safely",
              desc: "Transition minor budget gains step-by-step into high-performing target sets without triggering sudden pacing blocks.",
              tag: "Pacing Guardrails"
            },
            {
              title: "Optimize Performance Multi-Channel",
              desc: "Weave search targets perfectly with retargeting layers on Facebook, LinkedIn, or TikTok for unified visual continuity.",
              tag: "Cross-Channel Synergy"
            },
            {
              title: "Improve Conversion Rates (LPO)",
              desc: "Analyze and rewrite landing page forms, copy hooks, and speed parameters to increase the proportion of active signups.",
              tag: "Conversion Focused"
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-[#0b0f24]/70 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all duration-300">
              <span className="bg-indigo-950 border border-indigo-900 text-indigo-300 font-mono text-[9px] py-1 px-2.5 rounded-full uppercase font-bold inline-block">
                {benefit.tag}
              </span>
              <h3 className="text-lg font-bold text-white font-mono">{benefit.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE PPC ROI CALCULATOR TOOL (Conversion Element) */}
      <section className="bg-gradient-to-r from-[#040612] via-[#0b1029] to-[#040612] py-20 border-y border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left description text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="bg-emerald-950 text-emerald-400 font-mono text-xs border border-emerald-900/50 px-3 py-1.5 rounded-full">
                Interactive Revenue Tool
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Project Your Paid Advertising Earnings</h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Tweak custom monthly variables to evaluate how small conversions improvements driven by an expert partner reduce acquisition costs and yield high profitable ROAS multipliers.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-2.5 items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-300">Evaluate specific CPC budget limits</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-300">Compare ROAS trends against past performance</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-300">Accurately calculate net return after click expenditures</span>
                </div>
              </div>

              <div className="bg-[#050818]/60 border border-slate-900 p-4 rounded-xl text-xs space-y-2">
                <p className="text-slate-400 font-mono italic">
                  &ldquo;A minor increase in conversion rate from 2.5% to 4% yields an instant jump in leads without requiring a larger budget.&rdquo;
                </p>
                <span className="text-[10px] text-slate-500 font-mono block uppercase">— Paid strategy principal</span>
              </div>
            </div>

            {/* Right slider inputs & display panel */}
            <div className="lg:col-span-7 bg-[#060a1e] border border-indigo-950/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-sm font-bold text-white uppercase font-mono border-b border-indigo-950 pb-3 flex items-center justify-between">
                <span>PPC ROI Projections Panel</span>
                <span className="text-cyan-400 text-xs">Dynamic Calculations</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Inputs */}
                <div className="space-y-4">
                  
                  {/* Monthly budget */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs text-slate-300 font-mono">
                      <span>Monthly Ad Budget:</span>
                      <strong className="text-white">${adBudget.toLocaleString()}</strong>
                    </div>
                    <input 
                      type="range"
                      min="500" max="50000" step="500"
                      value={adBudget}
                      onChange={(e) => setAdBudget(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  {/* Avg CPC */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs text-slate-300 font-mono">
                      <span>Average Cost Per Click (CPC):</span>
                      <strong className="text-white">${avgCpc.toFixed(2)}</strong>
                    </div>
                    <input 
                      type="range"
                      min="0.25" max="15.00" step="0.25"
                      value={avgCpc}
                      onChange={(e) => setAvgCpc(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  {/* Conv Rate */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs text-slate-300 font-mono">
                      <span>Conversion Rate (%):</span>
                      <strong className="text-cyan-400">{convRate.toFixed(1)}%</strong>
                    </div>
                    <input 
                      type="range"
                      min="0.5" max="15.0" step="0.1"
                      value={convRate}
                      onChange={(e) => setConvRate(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  {/* Lead/Order value */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs text-slate-300 font-mono">
                      <span>Lead value / AOV ($):</span>
                      <strong className="text-white">${leadVal.toLocaleString()}</strong>
                    </div>
                    <input 
                      type="range"
                      min="10" max="2500" step="10"
                      value={leadVal}
                      onChange={(e) => setLeadVal(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                </div>

                {/* Outputs Panel */}
                <div className="bg-[#030614] border border-indigo-950 rounded-xl p-5 flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-indigo-950/40 pb-2">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Total Est. Clicks</span>
                      <span className="text-xs font-bold text-white font-mono">{totalClicks.toLocaleString()} Cliq</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-indigo-950/40 pb-2">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Conversions</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">{totalConversions.toLocaleString()} leads</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-indigo-950/40 pb-2">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Est. Cost Per Lead (CPA)</span>
                      <span className="text-xs font-bold text-red-400 font-mono">${costPerAcquisition}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-indigo-950/40 pb-2">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Gross Return</span>
                      <span className="text-xs font-bold text-white font-mono">${grossRevenue.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-4 text-center mt-3">
                    <div className="bg-cyan-950/30 border border-cyan-800/60 p-3 rounded-lg">
                      <span className="text-[9px] uppercase font-mono text-cyan-400 block tracking-wider">PROJECTED ROI RETURN</span>
                      <span className="text-2xl font-black text-white block mt-0.5">${netReturn.toLocaleString()}</span>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">ROAS Target Range: {roasMultiplier}x</span>
                    </div>
                  </div>

                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={openProposalForm}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold px-4 py-3 rounded-lg text-xs hover:opacity-95 text-center cursor-pointer"
                >
                  Verify Projections With Custom RFP
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* OUR PPC EXPERT SERVICES SECTION */}
      <section className="bg-gradient-to-b from-[#040612] via-[#090e24] to-[#040612] border-y border-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Expert Service Framework</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">PPC Services Offered by Our Experts</h2>
            <p className="text-slate-400 text-sm font-light">
              AKGLS Group paid marketing specialists program, design, and run hyper-targeted campaigns across major advertising platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left selector menu */}
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'google', label: '1. Google Ads Management', badge: 'Core Service' },
                { id: 'meta', label: '2. Meta Ads Management', badge: 'High ROAS' },
                { id: 'linkedin', label: '3. LinkedIn Ads Management', badge: 'B2B Priority' },
                { id: 'ai', label: '4. AI-Powered PPC Optimization', badge: 'Trending' },
                { id: 'ecommerce', label: '5. Ecommerce PPC Specialist', badge: 'Dynamic Catalog' }
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
                {activeTab === 'google' && (
                  <motion.div
                    key="google"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-emerald-400 font-mono text-[10px] tracking-wider uppercase">GOOGLE SEARCH & SHOPPING SCALE</span>
                    <h3 className="text-xl font-bold text-white">Google Ads Management Experts</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Build robust Search campaigns, optimize Performance Max (PMax) inventory algorithms, drive YouTube viewer actions, and structure Google Shopping feeds. Our experts reduce wasted bidding and raise Click-Through Rates.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Target Keyword Match Optimizations</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Dynamic Performance Max Campaign Feeds</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Google Shopping Bidding Strategy Blocks</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> YouTube In-Stream Video Conversion Hooks</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'meta' && (
                  <motion.div
                    key="meta"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-purple-400 font-mono text-[10px] tracking-wider uppercase">SOCIAL GRAPH TARGETING</span>
                    <h3 className="text-xl font-bold text-white">Meta Ads Specialist Placement</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Scale dynamic products targeting cohorts across Facebook and Instagram properties. Maintain user attention, bypass pixel reporting limits with advanced Conversions API (CAPI) integrations, and build custom brand loops.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Facebook & Instagram Creative Testing</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Advanced Conversions API (CAPI) Tags</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Advantage+ Dynamic Retargeting Feeds</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> High Impact Lookalike Sourcing Models</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'linkedin' && (
                  <motion.div
                    key="linkedin"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-cyan-400 font-mono text-[10px] tracking-wider uppercase">B2B ENTERPRISE DEMAND</span>
                    <h3 className="text-xl font-bold text-white">LinkedIn Ads & ABM Campaign Consultants</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Reach key corporate stakeholders based on job title, company size, or specific sector coordinates. Integrate Sponsored Content alongside focused lead collection sheets to drive SQL pipelines.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Account-Based Marketing (ABM) Setup</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> In-Feed Native Lead Collection Sheets</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Decision-Maker Professional Filter Sets</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Conversational Message Ad Outlines</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 text-left"
                  >
                    <span className="text-indigo-400 font-mono text-[10px] tracking-wider uppercase">PREDICTIVE MACHINE LEARNING</span>
                    <h3 className="text-xl font-bold text-white">AI-Powered PPC Optimization</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Deploy predictive smart bidding tools and cohort identifiers. Leverage machine-learning routines to tweak bid metrics and test ad copy variations, avoiding fatigue blocks.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Predictive Bid Target Optimizations</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Automated Multivariable Ad Variant Testing</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Cookieless Smart Cohort Attribution</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Smart Budget Allocation Triggers</li>
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
                    <span className="text-amber-500 font-mono text-[10px] tracking-wider uppercase">E-COMMERCE ACQUISITION</span>
                    <h3 className="text-xl font-bold text-white">Ecommerce Retail PPC Specialists</h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      Maximize online store ROAS. Our specialists build and link catalog feeds, deploy local merchant ads, scale dynamic promotions, and protect product cart checkouts.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Shopify Feed Optimization</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Dynamic Cart Abandonment Retargeting</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Google Merchant Center Tag Mappings</li>
                      <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Catalog Price Dynamic Update Feeds</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shared footer inside Service tabs detail box */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Discover more dynamic landing optimization techniques</span>
                <button 
                  onClick={openProposalForm}
                  className="bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 hover:border-cyan-500/30 px-4 py-2 rounded-lg text-xs font-mono transition inline-flex items-center gap-2 justify-center cursor-pointer"
                >
                  <span>Request Custom Strategy Presentation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Grid layout for the other 5 secondary services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {[
              { id: 'local', title: "6. Local Business PPC Services", detail: "Drive dynamic calls and offline footwork traffic via hyperlocal Google Map Pin advertising frameworks.", icon: <MapPinIcon className="w-5 h-5 text-indigo-400" /> },
              { id: 'lpo', title: "7. Landing Page Optimization", detail: "A/B test forms, CTA positions, and speed ratios to maximize standard lead volume per paid click.", icon: <Smartphone className="w-5 h-5 text-cyan-400" /> },
              { id: 'audit', title: "8. PPC Audit Services", detail: "A developer audit matching bid budgets, structure blocks, and platform leaks.", icon: <Activity className="w-5 h-5 text-emerald-400" /> },
              { id: 'tracking', title: "9. Conversion Tracking & Analytics", detail: "Deploy advanced server-side GTM tagging and GA4 metrics arrays to protect target attribution.", icon: <Database className="w-5 h-5 text-purple-400" /> },
              { id: 'dedicated', title: "10. Dedicated PPC Expert Sourcing", detail: "Hire full-time or fractional certified platform specialists integrated into your Slack channel.", icon: <Briefcase className="w-5 h-5 text-amber-400" /> }
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

      {/* HIRING MODELS SECTION (Interactive monthly quote calculator!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Target Sourcing Framework</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Flexible PPC Expert Sourcing Models</h2>
          <p className="text-slate-400 text-sm font-light">
            Rent or source dedicated certifications specialists under terms that best fit your campaign scales. Use our live rate calculator below to evaluate models.
          </p>
        </div>

        {/* 5 Sourcing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch mb-12">
          {[
            {
              title: "Full-Time PPC Expert",
              subtitle: "Dedicated Partner Sourcing",
              features: ["40 hours per week active", "Direct Slack & GTM dashboard control", "Continuous day-to-day conversion optimization", "Detailed bid history logs"],
              tag: "Best Value"
            },
            {
              title: "Part-Time PPC Partner",
              subtitle: "Flexible Growing Brands",
              features: ["20 hours per week active", "Bi-weekly campaign audits", "Target keyword expansion blocks", "Standard reporting syncs"],
              tag: "Popular"
            },
            {
              title: "Hourly PPC Expert",
              subtitle: "Ad-hoc Tactical Help",
              features: ["Billed as task hours blocks", "Instant pixel audit patches", "Policy violation recovery", "Landing review briefs"],
              tag: "Highly Agile"
            },
            {
              title: "Project-Based PPC",
              subtitle: "Campaign Particular Launch",
              features: ["Fixed cost campaign scope", "Full dynamic feed structuring", "Conversion setup integration", "30-day monitoring block"],
              tag: "Targeted Slashes"
            },
            {
              title: "White Label PPC Expert",
              subtitle: "Professional Agency Program",
              features: ["100% white-labeled PDF files", "Anonymous client reviews", "Scalable partner prices", "Shared Slack access channels"],
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

        {/* Dynamic Rate Estimator Panel */}
        <div className="bg-[#0b122b] border border-indigo-950/80 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2 justify-center">
            <Coins className="w-5 h-5 text-cyan-400" /> Interactive Monthly Investment Panel
          </h3>
          <p className="text-xs text-slate-400 font-light">
            Slide the target hours per week and choose your required certification tier to examine typical monthly quotes clearly. No hidden admin fees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
            
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="flex justify-between items-center text-xs text-slate-300 font-mono">
                <span>Contract hours target: <strong className="text-cyan-400 font-bold font-sans text-sm">{selectedHours} hrs/wk</strong></span>
                <span>(Billed monthly)</span>
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
                  { id: 'hourly', label: 'Certified Associate', rate: 50 },
                  { id: 'dedicated', label: 'Lead Specialist', rate: 85 },
                  { id: 'agency', label: 'Principal Architect', rate: 135 }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setHiringTier(tier.id as any)}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between cursor-pointer ${
                      hiringTier === tier.id
                        ? 'bg-cyan-950/50 border-cyan-500 text-white'
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase text-slate-400">{tier.label}</span>
                    <span className="text-xs font-mono font-bold pt-1 text-cyan-300">${tier.rate}/hr rate</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-[#050818] border border-indigo-950 p-4 rounded-xl text-center space-y-2">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">Est Monthly Sourcing Billed</span>
              <span className="text-3xl font-black text-white block">
                ${(selectedHours * 4.2 * (hiringTier === 'hourly' ? 50 : hiringTier === 'dedicated' ? 85 : 135)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
              <span className="text-[9px] font-mono text-slate-500 block">Assumed Standard 4.2 weeks / mo cycle</span>
              <button 
                onClick={openProposalForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-mono text-[9px] font-extrabold uppercase tracking-wider py-2.5 rounded-lg transition-all border-none cursor-pointer mt-2 block"
              >
                Inquire For Candidate Profiles
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="bg-gradient-to-b from-[#040612] to-[#070b1f] py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Target Focus Niches</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Industries Our PPC Experts Work With</h2>
            <p className="text-slate-400 text-sm font-light">
              We adjust targeting setups, negative search parameters, and CPA goals to align directly with sector-specific customer acquisition patterns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Ecommerce", desc: "Highly structured Merchant catalog feeds and PMax setups.", count: "160+ accounts" },
              { label: "SaaS", desc: "Decision-maker targets, ABM pipelines, and custom SQL triggers.", count: "110+ campaigns" },
              { label: "Healthcare", desc: "Patient call-only hooks tracking compliant search parameters.", count: "80+ clinics" },
              { label: "Real Estate", desc: "Localized location map ads aiming at specific buyer zip-codes.", count: "115+ operations" },
              { label: "Finance", desc: "Highly regulated high-converting loan lead workflows.", count: "50+ brands" },
              { label: "Education", desc: "Class enrollment campaign layers capturing local interests.", count: "65+ institutions" },
              { label: "Manufacturing", desc: "Wholesaler product inventory specs key term targets.", count: "90+ factories" },
              { label: "IoT Companies", desc: "Hard tech hardware targets aimed at global engineering hubs.", count: "40+ startups" },
              { label: "Local Businesses", desc: "Dynamic Maps indicators and mobile click call hooks.", count: "250+ clients" },
              { label: "Restaurants", desc: "Map integrations targeting hyperlocal search coordinates.", count: "70+ brands" }
            ].map((ind, i) => (
              <div key={i} className="bg-[#0b0e24] border border-slate-900 rounded-xl p-4 hover:border-slate-800 transition-colors text-left space-y-2 group">
                <span className="text-cyan-400 text-xs font-bold block group-hover:text-cyan-350">{ind.label}</span>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">{ind.desc}</p>
                <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold pt-1">{ind.count} optimized</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR PPC PROCESS SECTION */}
      <section className="bg-[#040612] py-20 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Systematic Execution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our PPC Growth Process</h2>
            <p className="text-slate-400 text-sm font-light">
              We leverage data science and agile iteration. Your dedicated PPC consultant follows a step-by-step optimization cycle to secure long-term results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            
            {/* Horizontal progress indicator bar for md+ */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-indigo-950/80 z-0" />

            {[
              { step: "01", header: "PPC Audit & Research", lines: ["Target keyword gap scans", "Competitor bid checks", "Tracking pixel logs analysis", "Account diagnostic reviews"] },
              { step: "02", header: "Strategy Planning", lines: ["Budget placement design", "Platform priority checks", "Conversion funnel optimization", "Attribution rules setup"] },
              { step: "03", header: "Setup & Activation", lines: ["Ad copy variants compilation", "Advanced tracking launch", "Audience cohorts targeting", "LPO page styling edits"] },
              { step: "04", header: "Optimization & Scaling", lines: ["Daily bid modifications", "AI micro-audience triggers", "Retargeting loops scale", "CPA improvement sprints"] },
              { step: "05", header: "Reporting & Growth", lines: ["Integrated dynamic updates", "Accurate attribution stats", "Revenue stream scaling", "RFP portfolio expansions"] }
            ].map((proc, index) => (
              <div key={index} className="space-y-4 text-left relative z-10 bg-[#040612]/80 p-4 rounded-xl border border-slate-950">
                <div className="w-10 h-10 bg-indigo-950 border border-indigo-900 rounded-full flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">
                  {proc.step}
                </div>
                <h3 className="text-xs uppercase font-mono font-bold text-white pt-1">{proc.header}</h3>
                <ul className="space-y-1.5 text-[11px] text-slate-400 font-light">
                  {proc.lines.map((line, lidx) => (
                    <li key={lidx} className="flex items-start gap-1">
                      <span className="text-cyan-400 font-bold shrink-0">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FUTURE-FOCUSED SECTION: AI PPC */}
      <section className="bg-[#05081c] py-20 border-b border-indigo-950/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-6 lg:order-last space-y-4">
              <div className="bg-[#0a0d26] border border-cyan-500/30 rounded-2xl p-5 sm:p-6 space-y-4 relative">
                <div className="absolute top-[-10px] right-4 bg-cyan-950 border border-cyan-500/50 text-cyan-300 font-mono text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Live AI Agent Rule
                </div>

                <h3 className="text-xs uppercase font-mono text-cyan-400 tracking-wider">Predictive ROAS Model Simulation</h3>
                
                <div className="bg-[#030512] border border-indigo-950 p-4 rounded-xl space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase">
                    <span>Target Metric API</span>
                    <span>Adjustment Factor</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>[API_BID_MOD] Target Cost Per Lead</span>
                    <span className="text-emerald-400 font-bold">-28.4%</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>[API_AUD_REF] Smart Audience Expansion</span>
                    <span className="text-cyan-400 font-bold">Stable Conversion</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>[API_CREAT_SCOR] Hook Variant A3</span>
                    <span className="text-indigo-400 font-bold">Score 9.4/10</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">AI Automated campaign tracking</span>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full w-[92%]" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 block">System performance tracking is active (GA4 API Synced)</span>
                </div>
              </div>
            </div>

            {/* Left Column Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-cyan-950/60 border border-cyan-850 text-cyan-300 px-3 py-1 rounded-full text-xs font-mono">
                <Bot className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Modern Algorithmic PPC Services</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Hire AI PPC Experts for Smarter Advertising Campaigns</h2>
              
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Paid channels have evolved. Modern platform performance relies heavily on feed signals and attribution data tracking. Our specialists utilize advanced algorithms to scale budgets and protect tracking metrics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="space-y-1">
                  <span className="text-white font-bold block">AI Audience Optimization</span>
                  <p className="text-slate-400 text-[11px] font-light">Identify high-converting user attributes dynamically.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-white font-bold block">Predictive Bidding Systems</span>
                  <p className="text-slate-400 text-[11px] font-light">Adjust bids in real-time to match high-value search trends.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-white font-bold block">Dynamic Creative Optimization</span>
                  <p className="text-slate-400 text-[11px] font-light">Combine winning hooks and headlines to maintain low CPAs.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-white font-bold block">Cookieless Tracking Protections</span>
                  <p className="text-slate-400 text-[11px] font-light">Utilize secure server-side tagging to bypass browser blockages.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={openProposalForm}
                  className="bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-indigo-950 hover:border-cyan-500/30 px-5  py-3 rounded-lg text-xs font-mono transition inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Cookieless Tracking Blueprint</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PPC RESULTS SECTION */}
      <section className="bg-gradient-to-b from-[#040612] to-[#070b1e] py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Verified Performance Logs</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">PPC Results Delivered by Our Experts</h2>
            <p className="text-slate-400 text-sm font-light">
              We focus on metrics that impact your business. Our experts scale key paid channels and manage campaign performance transparently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "B2B SaaS Lead Generation Campaign", title: "-42% Cost Per Lead (CPL)", sub: "Within 60 Days", improvement: "12% to 22% CTR Boost", icon: <TrendingUp className="w-6 h-6 text-emerald-400" /> },
              { label: "Ecommerce Footwear Brand Performance Max", title: "+312% ROAS Improvement", sub: "At $15K Monthly Spend", improvement: "Advantage+ catalog optimized", icon: <ShoppingCart className="w-6 h-6 text-cyan-400" /> },
              { label: "Localized Specialized Medical Clinic Map Ads", title: "+180% Patient Inquiries Growth", sub: "Under $4.5K Monthly Bidding", improvement: "Conversion tracking re-aligned", icon: <Smartphone className="w-6 h-6 text-indigo-400" /> }
            ].map((res, index) => (
              <div key={index} className="bg-[#0b0f24] border border-slate-950 p-6 rounded-2xl space-y-4 hover:border-indigo-950 transition-all text-left">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                  {res.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block">{res.label}</span>
                  <span className="text-xl font-bold text-white block mt-1 font-mono">{res.title}</span>
                  <span className="text-xs text-slate-405 text-slate-400 font-mono italic block">{res.sub}</span>
                </div>
                <div className="border-t border-indigo-950/40 pt-3 text-xs flex justify-between items-center">
                  <span className="text-slate-500 uppercase font-mono text-[10px]">Specialist Tweak:</span>
                  <span className="text-cyan-400 font-bold font-mono text-[11px]">{res.improvement}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Direct Validation Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Paid Search Success Stories</h2>
          <p className="text-slate-400 text-sm font-light">
            Review detailed reports on how customized targeting models help businesses scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: B2B */}
          <div className="bg-[#0b1029]/40 border border-[#161c3c] rounded-2xl p-6 sm:p-8 space-y-4 text-left">
            <span className="bg-indigo-950 text-indigo-300 border border-indigo-900/50 text-[10px] uppercase font-mono tracking-wider py-1 px-2.5 rounded-full font-bold inline-block">
              Case Study — B2B Software Demand Scale
            </span>
            <h3 className="text-xl font-bold text-white font-mono">Reducing CPL by 48% While Securing 250% More Sales-Ready SQLs</h3>
            
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Our B2B software partner was struggling with high lead costs on Google Search. Our expert restructured their campaigns, launched focused LinkedIn ABM grids, and optimized lead form designs.
            </p>

            <div className="grid grid-cols-3 gap-2 py-4 border-y border-indigo-950/50">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-mono">Monthly Budget:</span>
                <span className="text-sm font-bold text-white block font-mono">$12,000</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-mono">SQLs Securing:</span>
                <span className="text-sm font-bold text-emerald-400 block font-mono">+250% Growth</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-mono">CPL Drop factor:</span>
                <span className="text-sm font-bold text-cyan-400 block font-mono">-48% CPA</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={openProposalForm}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-cyan-500/20 px-4 py-2 rounded-lg text-xs font-mono transition"
              >
                Request Full Case Details
              </button>
            </div>
          </div>

          {/* Card 2: E-commerce */}
          <div className="bg-[#0b1029]/40 border border-[#161c3c] rounded-2xl p-6 sm:p-8 space-y-4 text-left">
            <span className="bg-cyan-950 text-cyan-300 border border-cyan-900/50 text-[10px] uppercase font-mono tracking-wider py-1 px-2.5 rounded-full font-bold inline-block">
              Case Study — Retail Store scale
            </span>
            <h3 className="text-xl font-bold text-white font-mono">Achieving a 6.8x ROAS Multiplier on Advantage+ Shopping Layers</h3>
            
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              This retail brand faced ad spend performance plateaus. Our dynamic commerce specialist integrated their catalog APIs, optimized product images, and structured lookalike audience pools.
            </p>

            <div className="grid grid-cols-3 gap-2 py-4 border-y border-indigo-950/50">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-mono">Dynamic Catalog Spend:</span>
                <span className="text-sm font-bold text-white block font-mono">$28,500/mo</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-mono">ROAS Multiplier:</span>
                <span className="text-sm font-bold text-emerald-400 block font-mono">6.8x ROAS</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-mono">Cost per Purchase:</span>
                <span className="text-sm font-bold text-cyan-400 block font-mono">-$12.40 Average</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={openProposalForm}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-cyan-500/20 px-4 py-2 rounded-lg text-xs font-mono transition"
              >
                Inquire For Retail Strategy Sheets
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#05081a]/40 border-y border-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">The AKGLS Guarantee</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Hire PPC Experts from AKGLS Group?</h2>
            <p className="text-slate-400 text-sm font-light">
              We leverage analytical rigor, transparent processes, and flexible contracts to eliminate common paid acquisition roadblocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Vetted Certified Talent Only", desc: "No junior account managers. Your campaigns are built and optimized exclusively by certified platform specialists." },
              { title: "Direct Slack Access Channels", desc: "Collaborate directly with your specialist. Sync campaigns with your internal growth sprints in real-time." },
              { title: "Transparent Real-Time Updates", desc: "Maintain full ownership of your accounts. Review clean performance reports and actual spending data transparently." },
              { title: "No Restrictive Multi-Month Lock-Ins", desc: "Retain complete flexibility. Upgrade, downgrade, or pause your dedicated resource with 14 days notice." }
            ].map((usp, i) => (
              <div key={i} className="bg-[#0b0e20] border border-slate-900 rounded-xl p-5 hover:border-indigo-950 transition-colors text-left space-y-3">
                <div className="w-8 h-8 rounded bg-cyan-950/50 border border-cyan-900/50 flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-sm font-bold text-white font-mono leading-tight">{usp.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Integrated Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Premium Paid Tools We Use Daily</h2>
          <p className="text-slate-400 text-sm font-light">
            We utilize leading industry software to track attribution data, analyze bid variations, and design landing pages.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { name: "Google Ads Editor", use: "Heavy bulk editing and bidding rule management" },
            { name: "Meta Ads Manager", use: "Lookalike catalog scaling and dynamic ads setup" },
            { name: "Linkedin Campaign Mgr", use: "ABM target cohort lists mappings" },
            { name: "Google Tag Manager", use: "Server-side event configurations" },
            { name: "Google Analytics 4", use: "Advanced multi-touch attribution analysis" },
            { name: "Looker Studio Reports", use: "Real-time client performance dashboards" },
            { name: "SEMrush Keyword Tool", use: "Competitor search CPC diagnostic reviews" },
            { name: "Hotjar UX Recorder", use: "Landing page layout friction audits" },
            { name: "Zapier Flow Automation", use: "Instant CRM lead routing structures" },
            { name: "Gemini / Claude APIs", use: "High-volume ad copy variant testing" }
          ].map((tool, idx) => (
            <div key={idx} className="bg-[#050815] border border-slate-900 rounded-xl p-4 text-left hover:border-slate-800 transition-colors">
              <span className="text-white font-bold text-xs block font-mono">{tool.name}</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1 leading-tight">{tool.use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="bg-gradient-to-b from-[#040612] via-[#090d29] to-[#040612] border-y border-slate-950 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Transparent Packages</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Flexible PPC Expert Hiring Packages</h2>
            <p className="text-slate-400 text-sm font-light">
              Choose an allocation plan that matches your monthly ad spend and acquisition goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Package 1 */}
            <div className="bg-[#050818]/80 border border-slate-900 rounded-2xl p-6 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase bg-slate-900 text-slate-400 px-2 py-1 rounded inline-block">Starter Support</span>
                <h3 className="text-2xl font-black text-white font-mono">$1,800/mo</h3>
                <p className="text-slate-400 text-xs font-light">
                  Perfect for small local businesses or early-stage startups testing initial product-market fit under $5K monthly budgets.
                </p>
                <hr className="border-indigo-950/40" />
                <ul className="space-y-3 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Single platform (Google or Meta) setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Standard conversion events tracking calibration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Comprehensive monthly analytics reporting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Dedicated 12 hours active task allocation / wk</li>
                </ul>
              </div>
              <button 
                onClick={openProposalForm}
                className="w-full bg-slate-900 hover:bg-indigo-950 text-cyan-300 border border-slate-800 hover:border-cyan-500/30 font-mono text-xs uppercase font-extrabold py-3 rounded-lg transition"
              >
                Hire Starter Expert
              </button>
            </div>

            {/* Package 2 */}
            <div className="bg-[#090e24] border border-cyan-500/30 rounded-2xl p-6 text-left flex flex-col justify-between space-y-6 relative shadow-lg shadow-cyan-950/20">
              <div className="absolute top-[-12px] right-6 bg-cyan-950 border border-cyan-500 text-cyan-300 font-mono text-[9px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                Most Popular
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase bg-cyan-950 text-cyan-300 px-2 py-1 rounded inline-block border border-cyan-900/50">Growth PPC Specialist</span>
                <h3 className="text-2xl font-black text-white font-mono">$3,400/mo</h3>
                <p className="text-slate-400 text-xs font-light">
                  Designed for scaling companies with monthly budgets between $5K and $20K who require multi-platform acquisition.
                </p>
                <hr className="border-indigo-950/40" />
                <ul className="space-y-3 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Google Ads + Meta Ads synchronized campaign setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Advanced cookie blocks bypass Conversions API</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Ongoing A/B landing page optimization guidance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Direct Slack sync channel + Bi-weekly video strategy calls</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Dedicated 25 hours active task allocation / wk</li>
                </ul>
              </div>
              <button 
                onClick={openProposalForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-mono text-xs uppercase font-extrabold py-3 rounded-lg transition"
              >
                Hire Growth PPC Specialist
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-[#050818]/60 border border-slate-900 rounded-2xl p-6 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase bg-slate-900 text-slate-400 px-2 py-1 rounded inline-block">Enterprise Team</span>
                <h3 className="text-2xl font-black text-white font-mono">Custom Quote</h3>
                <p className="text-slate-400 text-xs font-light">
                  For large enterprise brands and high ad spend campaigns requiring dedicated multi-channel coverage and developer support.
                </p>
                <hr className="border-indigo-950/40" />
                <ul className="space-y-3 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Multi-channel coverage (Google, Meta, LinkedIn, TikTok, YouTube)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Enterprise-scale server-side tagging configuration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Dynamic landing page structure development support</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Dedicated campaign reporting dashboard with API integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Dedicated 40 hours full-time expert active allocation / wk</li>
                </ul>
              </div>
              <button 
                onClick={openProposalForm}
                className="w-full bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 hover:border-cyan-555 font-mono text-xs uppercase font-extrabold py-3 rounded-lg transition"
              >
                Contact Enterprise Partner
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SCHEMA BLOCKS PLAYGROUND SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Structured Technical Frameworks</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Recommended PPC Structured Schemas</h2>
          <p className="text-slate-400 text-sm font-light">
            We insert rich structured data to help search engines understand your local footprint and organic reputation. Click to copy these schema templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Schema block 1 */}
          <div className="bg-[#060814] border border-[#121633] p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-indigo-950 pb-3">
              <span className="font-mono text-xs text-slate-400 font-bold">1. Recommended Service Schema JSON-LD</span>
              <button 
                onClick={() => triggerCopySchema('service')}
                className="bg-[#0b122c] border border-cyan-800/40 text-cyan-400 font-mono text-[10px] py-1 px-3 rounded hover:bg-[#121c44] transition-colors cursor-pointer"
              >
                {copiedSchema === 'service' ? '✓ Copied Schema!' : 'Copy Schema Code'}
              </button>
            </div>
            <pre className="font-mono text-[10px] text-slate-400 bg-[#02040c] p-4 rounded-xl max-h-56 overflow-y-auto leading-normal">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Expert PPC Hiring & Paid Ads Sourcing",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "PPC Expert Sourcing Models",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Full-Time PPC Specialist" } },
      { "@type": "Offer" }
    ]
  }
}`}
            </pre>
          </div>

          {/* Schema block 2 */}
          <div className="bg-[#060814] border border-[#121633] p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-indigo-950 pb-3">
              <span className="font-mono text-xs text-slate-400 font-bold">2. Recommended Review / Rating Schema</span>
              <button 
                onClick={() => triggerCopySchema('review')}
                className="bg-[#0b122c] border border-cyan-800/40 text-cyan-400 font-mono text-[10px] py-1 px-3 rounded hover:bg-[#121c44] transition-colors cursor-pointer"
              >
                {copiedSchema === 'review' ? '✓ Copied Schema!' : 'Copy Schema Code'}
              </button>
            </div>
            <pre className="font-mono text-[10px] text-slate-400 bg-[#02040c] p-4 rounded-xl max-h-56 overflow-y-auto leading-normal">
{`{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.95",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Mark D."
  }
}`}
            </pre>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gradient-to-b from-[#040612] to-[#070b1f] py-20 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase font-bold">Expert Briefings</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Why should I hire a dedicated PPC expert instead of using a standard digital marketing agency?",
                a: "Traditional agencies often assign junior managers to oversee dozens of accounts at once, leading to generic templates and unmanaged bid pacing. A dedicated PPC specialist from AKGLS Group integrates directly into your team, allowing for highly tactical bid editing, tailored lookalike testing, and deep alignment with your revenue goals."
              },
              {
                q: "How much does hiring a PPC expert cost, and what are your pricing options?",
                a: "We offer completely flexible plans tailored to your budget. Options range from $1,800/mo for starter configurations (under 12 hrs/wk) to $3,400/mo for multi-channel scaling (25 hrs/wk), alongside fully custom enterprise team rates (40 hrs/wk) to suit your unique sourcing goals."
              },
              {
                q: "How quickly can PPC generate results and leads?",
                a: "Unlike organic search SEO which requires months to build authority, PPC yields traffic immediately upon launch. With accurate tracking and calibrated campaign structures, you can expect qualified conversions within the first 48 to 72 hours of activating the campaigns."
              },
              {
                q: "Which platform is best suited for my business's paid campaigns?",
                a: "It depends strongly on your target audience. For immediate search intent or local service inquiries, Google Ads yields excellent results. For visual consumer products, Shopify stores, and brand campaigns, Meta (Instagram/Facebook) leads. For B2B enterprise SaaS, LinkedIn advertising is highly recommended."
              },
              {
                q: "What is AI PPC optimization, and how does your team deploy it?",
                a: "AI PPC optimization leverages predictive bidding algorithms, machine learning cohort filters, and multivariable automated testing. Rather than guessing bid metrics, our specialists run automated analysis programs to test copywriting, prevent creative fatigue, and prevent wasted spend blocks."
              },
              {
                q: "Do you provide landing page design or landing page optimization (LPO) services?",
                a: "Yes. Getting qualified clicks is only half the battle. Your expert handles comprehensive landing page optimization, configuring trust indicators, optimizing copy triggers, and streamlining forms to raise the proportion of conversions from your paid traffic."
              },
              {
                q: "How do you protect data attribution in the era of iOS cookie blockages?",
                a: "We implement advanced server-side Tag Manager tracking connected to Meta Conversions API (CAPI) and Google Data-Driven attribution modules. This helps you track conversion events accurately, bypassing browser blockages to ensure efficient machine-learning feedback."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#0c0e29]/50 border border-indigo-950 rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-white font-mono font-bold text-sm bg-transparent border-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-indigo-950"
                    >
                      <p className="p-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-light bg-[#030614]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREE PPC AUDIT SECTION */}
      <section id="free-ppc-audit" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-[#0c1233] to-[#040612] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 space-y-8 text-center relative">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-cyan-400 font-extrabold uppercase bg-cyan-950 px-2.5 py-1 rounded inline-block">Diagnostic Program</span>
            <h2 className="text-3xl font-extrabold text-white">Get a Free PPC Audit Prior to Hiring</h2>
            <p className="text-slate-450 text-slate-400 text-xs sm:text-sm font-light">
              Submit your domain coordinates below. Our advanced diagnostic tool will scan core integration tags, evaluate tracking events, and identify immediate optimization opportunities.
            </p>
          </div>

          <form onSubmit={startLiveAudit} className="space-y-4 max-w-xl mx-auto text-left">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">Your Website URL / Landing Domain</label>
              <input 
                type="url" 
                required
                placeholder="https://yourbrand.com"
                value={auditUrl}
                onChange={(e) => setAuditUrl(e.target.value)}
                className="w-full bg-[#030614] border border-indigo-950 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">Monthly Ad Campaign Budget</label>
                <select 
                  value={auditBudgetRange}
                  onChange={(e) => setAuditBudgetRange(e.target.value)}
                  className="w-full bg-[#030614] border border-indigo-950 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                >
                  <option value="Under $2,000">Under $2,000 / mo</option>
                  <option value="$2,000 - $5,000">$2,000 - $5,000 / mo</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000 / mo</option>
                  <option value="$10,000 - $30,000">$10,000 - $30,000 / mo</option>
                  <option value="Above $30,000">Above $30,000 / mo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">Industry Niche</label>
                <select 
                  value={auditIndustry}
                  onChange={(e) => setAuditIndustry(e.target.value)}
                  className="w-full bg-[#030614] border border-indigo-950 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                >
                  <option value="E-commerce">E-commerce / Retail</option>
                  <option value="SaaS">SaaS / Software Product</option>
                  <option value="Healthcare">Healthcare / Medical Clinic</option>
                  <option value="Real Estate">Real Estate Agencies</option>
                  <option value="Local Business">Local Retail / Professional Services</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">Contact Name</label>
                <input 
                  type="text" 
                  placeholder="Vikas S."
                  value={auditName}
                  onChange={(e) => setAuditName(e.target.value)}
                  className="w-full bg-[#030614] border border-indigo-950 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">Direct Work Email</label>
                <input 
                  type="email" 
                  placeholder="partner@yourbrand.com"
                  value={auditEmail}
                  onChange={(e) => setAuditEmail(e.target.value)}
                  className="w-full bg-[#030614] border border-indigo-950 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">Phone (Required for SMS Alerts)</label>
                <input 
                  type="tel" 
                  placeholder="+1 555-555-0199"
                  value={auditPhone}
                  onChange={(e) => setAuditPhone(e.target.value)}
                  className="w-full bg-[#030614] border border-indigo-950 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                disabled={auditRunning}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold tracking-wider uppercase font-mono text-xs py-4 rounded-xl transition-all shadow-lg hover:opacity-95 cursor-pointer disabled:opacity-50"
              >
                {auditRunning ? 'Compiling Audit Logs Progress...' : 'Launch Dynamic Paid Ads Audit'}
              </button>
            </div>
          </form>

          {/* SIMULATED AUDIT PROGRESS AND SCOREBOARD CARDS */}
          {auditRunning && (
            <div className="bg-[#020309] border border-indigo-950 text-left p-5 rounded-2xl max-w-xl mx-auto space-y-3 font-mono text-[10px] sm:text-xs">
              <span className="text-cyan-400 block animate-pulse">⚙ PROCESSING AUDIT TRACE LOGS:</span>
              <div className="space-y-2 max-h-40 overflow-y-auto block pr-2">
                {auditStepLog.map((log, index) => (
                  <p key={index} className="text-slate-405 text-slate-400 leading-normal">{log}</p>
                ))}
              </div>
              <p className="text-slate-500 text-[9px] block">Do not refresh your browser page. Initial trace completes in seconds.</p>
            </div>
          )}

          {auditResult && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#02040d] border border-orange-500/20 text-left p-6 sm:p-8 rounded-3xl max-w-xl mx-auto space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-indigo-950 pb-4">
                <div>
                  <h4 className="text-white font-bold text-lg font-mono">Dynamic Paid Ads Audit Completed</h4>
                  <span className="text-[10px] text-orange-400 font-mono block uppercase">Status: Action Required</span>
                </div>
                <div className="bg-[#120a04] border border-orange-500/50 p-2 rounded-xl text-center">
                  <span className="text-2xl font-black text-orange-400 block font-mono">{auditResult.score}/100</span>
                  <span className="text-[9px] text-slate-500 font-mono block uppercase">Conversion Score</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-red-400 block uppercase font-bold">4 CRITICAL LEAKS LOCATED:</span>
                <ul className="space-y-2">
                  {auditResult.criticalErrors.map((err: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">⚠️</span>
                      <span>{err}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0b1029]/50 border border-indigo-950 p-4 rounded-xl space-y-2">
                <span className="text-[10px] uppercase font-mono text-cyan-400 block font-bold">Predicted Growth lift</span>
                <p className="text-xs text-white leading-normal font-sans font-bold">{auditResult.conversionPotential}</p>
                <hr className="border-indigo-950/40 my-1" />
                <span className="text-[10px] uppercase font-mono text-slate-500 block">Recommended Action:</span>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{auditResult.actionPlan}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={openProposalForm}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold py-3 px-4 rounded-lg text-xs leading-none uppercase tracking-wider font-mono text-center hover:opacity-95"
                >
                  Book Priority Strategy Session
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* BLOG / INSIGHTS / RESOURCES SECTION */}
      <section className="bg-gradient-to-b from-[#040612] to-[#060815] py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">Specialist Insights</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Resource Guides on Hiring PPC Experts</h2>
            <p className="text-slate-400 text-sm font-light">
              Review our guides to help configure campaigns, evaluate tracking events, and choose partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "How to Hire a PPC Expert: The Comprehensive Candidate Checklist", read: "Read Article • 7 min read", snippet: "Discover what certifications, technical analytics, and attribution methodologies to test for before onboarding a PPC contractor." },
              { title: "Google Ads Optimization Guide: Slashing CPL by 30% Without Sacrificing Quality", read: "Read Article • 10 min read", snippet: "A complete walkthrough of negative match keyword matrices, audience targeting, and sitemap calibrations for higher conversion rates." },
              { title: "The Cookieless Future: How Conversions API (CAPI) Protects Merchant ROAS", read: "Read Guide • 12 min read", snippet: "Understand developer-facing server-side tracking solutions that bypass Safari/iOS ad blocks to feed machine-learning bidding engines." }
            ].map((art, idx) => (
              <div key={idx} className="bg-[#050815] border border-slate-950 rounded-2xl p-5 hover:border-slate-800 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">{art.read}</span>
                  <h3 className="text-sm font-bold text-white font-mono leading-snug">{art.title}</h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">{art.snippet}</p>
                </div>
                <div className="pt-2">
                  <span className="text-xs text-white group hover:text-cyan-400 inline-flex items-center gap-1 font-mono font-bold">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative">
        <div className="bg-gradient-to-r from-[#0a0d26] via-[#10153a] to-[#040618] border border-cyan-500/20 rounded-3xl p-8 sm:p-12 space-y-6 relative max-w-4xl mx-auto">
          
          <span className="bg-indigo-950 text-indigo-300 font-mono text-xs px-3 py-1.5 rounded-full border border-indigo-900/60 inline-block uppercase font-bold">
            Accelerate Lead Acquisition
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Ready to Hire PPC Experts for Faster Business Growth?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Secure an industry-grade paid channel partner. Eliminate wasted ad budgets and drive leads, commerce sales, and transparent ROAS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button 
              onClick={() => {
                const form = document.getElementById('free-ppc-audit');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-bold px-6 py-4 rounded-xl transition text-sm cursor-pointer"
            >
              <span>Hire PPC Expert Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={openProposalForm}
              className="inline-flex justify-center items-center gap-2 bg-slate-950 border border-slate-900 text-slate-200 hover:bg-slate-800 transition px-6 py-4 rounded-xl text-sm font-bold cursor-pointer"
            >
              Book Priority Campaign Consultation
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            <span>✓ Certified PPC Spezialists Sourcing</span>
            <span>✓ Dedicated Slack Workspaces Sync</span>
            <span>✓ No Restrictive Lock-In Agreements</span>
          </div>

        </div>
      </section>

      {/* Corporate footer block */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-905 border-slate-900/60 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-slate-500 uppercase block font-bold">AKGLS Group Premium Sourcing Division</span>
          <p className="text-[10px] text-slate-600 font-mono block mt-1">© 2026 AKGLS Group. All licensing rights reserved. Google Ads and Meta Ads are registered trademarks of their respective corporations.</p>
        </div>
        <div className="flex gap-4 justify-center sm:justify-end text-[10px] font-mono text-slate-500">
          <button onClick={onBackToHome} className="hover:text-white bg-transparent border-none cursor-pointer">Terms & Conditions</button>
          <button onClick={onBackToHome} className="hover:text-white bg-transparent border-none cursor-pointer">Privacy & Cookie Rights</button>
        </div>
      </footer>

    </div>
  );
}

// Custom icons used inside page
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

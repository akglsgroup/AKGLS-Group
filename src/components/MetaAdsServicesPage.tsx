import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Film, Heart, Share2
} from 'lucide-react';

interface MetaAdsServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const metaAdsSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meta Ads & Paid Social Management Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "High-perfomance Facebook and Instagram ad management, dynamic catalog setups, Reels/video funnel optimization, and first-party pixel conversions."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Should we run Google Ads or Meta Ads for our business?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google Ads captures immediate active search intent, while Meta Ads stimulates visual and passive demand by presenting stunning video ads to precisely targeted demographic cohorts. Both channels work in synergy to maximize overall ROI."
    }
  }]
}`
};

export default function MetaAdsServicesPage({ onBackToHome, openProposalForm }: MetaAdsServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // State to simulate dynamic Page Titles
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Meta Ads Services | Facebook & Instagram Ads Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // ROI Forecast state variables
  const [socialSpend, setSocialSpend] = useState<number>(5000);
  const [creativeFormat, setCreativeFormat] = useState<'static' | 'reels' | 'catalog'>('reels');
  const [industryName, setIndustryName] = useState<'ecommerce' | 'healthcare' | 'saas' | 'realestate' | 'local'>('ecommerce');
  
  const [calculatedOutputs, setCalculatedOutputs] = useState({
    impressions: 250000,
    clicks: 6250,
    leads: 218,
    costPerAcquisition: 22.9,
    roas: 3.4,
    revenue: 17000
  });

  // Calculate stats on parameter change using benchmark tables
  useEffect(() => {
    // Benchmark values: [CPM, CTR, ConvRate, LeadValue]
    const industryBench = {
      ecommerce: { cpm: 12, ctr: 1.8, cr: 3.2, value: 85 },
      healthcare: { cpm: 24, ctr: 1.2, cr: 5.5, value: 210 },
      saas: { cpm: 32, ctr: 1.0, cr: 4.0, value: 180 },
      realestate: { cpm: 28, ctr: 1.5, cr: 4.8, value: 350 },
      local: { cpm: 10, ctr: 2.1, cr: 6.0, value: 95 }
    };

    const bench = industryBench[industryName];
    
    // Creative format multipliers for optimization levels
    let scaleCtr = 1.0;
    let scaleConv = 1.0;
    if (creativeFormat === 'reels') {
      scaleCtr = 1.4; // Reels & Short-form video get higher CTR
      scaleConv = 1.15;
    } else if (creativeFormat === 'catalog') {
      scaleCtr = 1.15;
      scaleConv = 1.35; // Catalog retargeting gets higher relative conversion rates
    } else {
      scaleCtr = 0.85; // Static is slightly lower than benchmark averages
      scaleConv = 0.9;
    }

    const impressions = Math.round((socialSpend / bench.cpm) * 1000);
    const clicks = Math.round(impressions * ((bench.ctr * scaleCtr) / 100));
    const leads = Math.round(clicks * ((bench.cr * scaleConv) / 100));
    const revenue = Math.round(leads * bench.value);
    const roas = socialSpend > 0 ? parseFloat((revenue / socialSpend).toFixed(2)) : 0;
    const costPerAcquisition = leads > 0 ? parseFloat((socialSpend / leads).toFixed(1)) : 0;

    setCalculatedOutputs({
      impressions,
      clicks,
      leads,
      costPerAcquisition,
      roas,
      revenue
    });
  }, [socialSpend, creativeFormat, industryName]);

  // Interactive Mockup creative testing scores widget
  const [scHasHook, setScHasHook] = useState(false);
  const [scHasCaptions, setScHasCaptions] = useState(false);
  const [scUgcVibe, setScUgcVibe] = useState(false);
  const [scDirectCta, setScDirectCta] = useState(false);
  const [creativeScore, setCreativeScore] = useState<number>(30);

  useEffect(() => {
    let score = 20;
    if (scHasHook) score += 20;
    if (scHasCaptions) score += 20;
    if (scUgcVibe) score += 20;
    if (scDirectCta) score += 20;
    setCreativeScore(score);
  }, [scHasHook, scHasCaptions, scUgcVibe, scDirectCta]);

  // FAQ collapse state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 1800);
  };

  // Lead Capture Audit Form state
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    budget: '$1,000 - $3,000',
    industry: 'Ecommerce',
    email: '',
    phone: '',
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.email || !auditForm.website) return;
    setAuditSubmitted(true);
  };

  const industriesWeServe = [
    { label: "Ecommerce & Retail Brands", text: "Scaling catalog listing feeds, Dynamic Ads, and custom cart recovery pipelines." },
    { label: "Real Estate Brokers", text: "Generating localized lead flows using targeted geographic radius maps and direct forms." },
    { label: "Healthcare & Dental Diagnostics", text: "Routing local patient inquiries to instant call booking templates." },
    { label: "B2B SaaS & Tech", text: "Driving platform software trials, eBook signs, and webinar registrations." },
    { label: "Fashion & Premium Lifestyle", text: "Fusing stunning video visual reel ads, collection carousels, and influencer styles." },
    { label: "Education & Academy Programs", text: "Capturing course application files and masterclass sign-up matrices." },
    { label: "Corporate Finance Advisory", text: "Establishing brand trust and high-net-worth investor inquiry pools." },
    { label: "Law Firms & Attorneys", text: "Driving high-intent legal injury, probate, or business retainer requests." },
    { label: "Dine-in Restaurants & Bistros", text: "Targeting weekend foot traffic with food visual carousels and local maps triggers." }
  ];

  const metaServicesGrid = [
    {
      title: "1. Facebook Ads Management",
      badge: "⭐ Core Service",
      desc: "Dominate Facebook's primary feed and marketplace layouts. We research demographic angles, formulate long-form storytelling copy, and track granular leads events.",
      benefits: "Guarantees top placement for massive demographic audience groups with absolute CPA efficiency."
    },
    {
      title: "2. Instagram Ads Management",
      badge: "Visual Power",
      desc: "Reach younger, hyper-active visual buyers across Stories, Explorer grids, and feeds. We coordinate pixel tracking data and gorgeous aesthetic image elements.",
      benefits: "Builds premium brand resonance that naturally matches visual user social footprints."
    },
    {
      title: "3. Ecommerce Meta Ads",
      badge: "ROAS Focused",
      desc: "Integrate catalog templates directly with Meta Advantage+ Campaigns. We structure dynamic inventory items matching the exact intent thresholds of shoppers.",
      benefits: "Accelerates online storefront orders and maximizes inventory turnover metrics."
    },
    {
      title: "4. Lead Generation Campaigns",
      badge: "Direct Forms",
      desc: "Acquire business leads with standard Meta native instant forms. Clients can book directly inside the platform without slow page loading friction.",
      benefits: "Isolates high-intent phone details and integrates immediately with corporate CRM pipelines."
    },
    {
      title: "5. Retargeting & Remarketing",
      badge: "Cart Recovery",
      desc: "Nurture cart-abandonment shoppers or site visitors using tailored promotional sequences, client testimonial displays, and custom scarcity blocks.",
      benefits: "Recovers valuable conversions that would have otherwise leaked to competitors."
    },
    {
      title: "6. Brand Awareness Campaigns",
      badge: "Omnipresence",
      desc: "Establish total brand control. We schedule high-frequency video views campaigns, event promos, and engagement assets targeting serious prospects.",
      benefits: "Guarantees broad digital reach while driving overall organic search brand queries."
    },
    {
      title: "7. Video Ads & Reels Marketing",
      badge: "Short-Form Video",
      desc: "Master Meta's highest engagement surface. We optimize high-converting video structures, UGC visual scripts, and native captioned video hooks.",
      benefits: "Drives lower CPC metrics and maximizes viral scroll-stopping interest cycles."
    },
    {
      title: "8. AI-Powered Advantage+ Optimization",
      badge: "Advantage+ AI",
      desc: "Leverage Meta's modern machine learning systems. We train advanced neural models, select initial seed signals, and target predictive audiences.",
      benefits: "Fuses predictive bid management rules for automated, scalable conversion tracking."
    },
    {
      title: "9. Local Business Meta Ads",
      badge: "Geotargeted Packs",
      desc: "Target prospective buyers within precise local coordinates. We design custom location pins, click-to-WhatsApp channels, and click-to-call templates.",
      benefits: "Drives direct walk-in store visitors, service line calls, and clinical inquiries."
    },
    {
      title: "10. Strategic Meta Ads Consulting",
      badge: "Advisory Suite",
      desc: "Partner with our verified Meta-certified digital marketing advisors. Get deep audits, performance dashboards, and scale roadmaps.",
      benefits: "Provides transparent marketing action plans that shield precious quarterly ad spend."
    }
  ];

  const campaignFormats = [
    { type: "Lead Generation Ads", desc: "Native instant forms capturing names, phone parameters, and emails cleanly inside the app." },
    { type: "Conversion Ads", desc: "Direct traffic campaigns routing buyers to speed-tuned custom landing page templates." },
    { type: "WhatsApp Click Ads", desc: "Triggers immediate encrypted instant messenger chats with your local clinical or sales staff." },
    { type: "Advantage+ Catalog Ads", desc: "Fires personalized shopping recommendations populated directly from your website inventory databases." },
    { type: "Traffic Campaigns", desc: "Brings cost-efficient prospective visitors to check pricing grids or corporate news rooms." },
    { type: "Engagement Ads", desc: "Spurs massive comment discussions, social shares, page likes, and visual group interactions." },
    { type: "Video View Campaigns", desc: "Deploys short-form storytelling elements to build custom warm audience pools." },
    { type: "Brand Awareness Campaigns", desc: "Maintains absolute authority among specialized demographic blocks within chosen locations." }
  ];

  const metaTools = [
    { name: "Meta Ads Manager", cat: "Core Campaign Console" },
    { name: "Meta Pixel Tracker", cat: "First-Party Conversion Events" },
    { name: "Conversions API (CAPI)", cat: "Server-Side Tagging Security" },
    { name: "Advantage+ Creative AI", cat: "Automated Asset Tuning" },
    { name: "Google Analytics 4 / GA4", cat: "Full Funnel Diagnostics" },
    { name: "Google Tag Manager", cat: "Pixel Scripts Deployment" },
    { name: "Canva Pro & Adobe Suite", cat: "Responsive Static Banners" },
    { name: "ChatGPT & Gemini", cat: "Persuasive Ad Copywriting Templates" }
  ];

  const metaFaqs = [
    { q: "Are Facebook Ads still effective for modern lead generation?", a: "ABSOLUTELY. Through Meta's granular Interest, Lookalike, and server-side Conversions API (CAPI) ecosystems, Facebook remains the single most efficient channel to identify and capture prospective leads at massive scale." },
    { q: "What is better: Facebook/Instagram Ads or Google Ads?", a: "They are highly complementary! Google Ads is perfect for capturing active search intent (e.g., when a user searches 'emergency dentist Lucknow'). Meta Ads is stellar for driving visual discovery, scaling impulse purchases, and stimulating new demand among user demographics that aren't actively searching yet." },
    { q: "How much ad budget should we start with on Meta?", a: "We recommend starting with at least $1,000 to $3,000 monthly for local campaigns, and $5,000+ for national or ecommerce scaling. This allows Meta's machine learning systems to process sufficient event actions and complete the learning phase quickly." },
    { q: "What is Meta Conversions API (CAPI)?", a: "Conversions API is a server-side tracking system that sends conversion events directly from our server to Meta. This bypasses browser ad-blockers and privacy filters, restoring up to 30% of target purchase attribution points that would otherwise be lost." },
    { q: "How long does it take to see tangible ad results?", a: "While we often see initial conversion leads within the first 48 to 72 hours of activating campaigns, we request a 30-day target window to complete creative testing, optimize bid weights, and establish stable ROI parameters." }
  ];

  const packagesList = [
    { name: "Starter Paid Social", desc: "Perfect for local dental clinics, boutique restaurants, and regional brokers looking to scale visual local inquiries.", budget: "Up to $2,500/mo spend", term: "3-Month Minimum" },
    { name: "Advantage+ Growth", desc: "Our most popular setup for high-converting ecommerce platforms, SaaS companies, and national lead generators.", budget: "$2,500 to $10,000/mo spend", term: "Flexible Retention" },
    { name: "Enterprise Paid Social", desc: "For global brands seeking maximum multi-channel scale, custom server-side CAPI integrations, and daily visual hook testing.", budget: "$10,000+ monthly ad spend", term: "Custom SLA Support" }
  ];

  return (
    <div id="meta-ads-services-page" className="bg-[#05070a] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Dynamic Floating Help Bar */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="meta-whatsapp-floating-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-teal hover:bg-white text-slate-950 p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-brand-teal/20 transition-all font-mono"
          id="meta-phone-floating-bar"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" /> Call Meta Architect: {CONTACT_NUMBER}
        </a>
      </div>

      {/* STICKY TOP NAVIGATION BAR */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 flex justify-between items-center z-50 sticky top-0">
        <div className="flex items-center space-x-2 text-slate-400 font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping"></span>
          <span>Advantage+ Meta Ad Algorithms Synchronized</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center"
            id="back-meta-nav"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition flex items-center space-x-1 font-mono">
            <span className="text-brand-teal">Direct WhatsApp Support:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION WITH DYNAMIC SOCIAL ROI FORECAST ENGINE */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/5 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/5 left-1/4 w-96 h-96 bg-indigo-505/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Block */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <Award className="w-4 h-4 text-brand-teal" />
                <span>Meta Certified Campaign Experts</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Meta Ads Services That Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-indigo-400">Leads, Sales & Growth</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Scale your digital performance with high-converting Facebook and Instagram Ads campaigns. We configure first-party pixels, script scroll-stopping Reels, and lower target CPA counts using Advantage+ AI.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono">
                <a 
                  href="#meta-audit-form" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-meta-audit-btn"
                >
                  <span>Get Free Meta Ads Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#meta-roi-simulator" 
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <TrendingUp className="w-4 h-4 text-brand-teal" />
                  <span>Run Social ROI Calculator</span>
                </a>
              </div>

              {/* USP Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900/60 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">Meta Certified Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">Server-Side CAPI Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">Dynamic Retail Catalogs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">ROAS-Focused Formats</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Social ROI Calculator */}
            <div className="lg:col-span-5 relative" id="meta-roi-simulator">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-5 font-mono">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
                    <span className="text-slate-300 font-extrabold uppercase">Paid Social ROI Sandbox v3</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-slate-800 text-slate-450 py-0.5 px-2 rounded-full font-bold">
                    LIVE ESTIMATES
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Spend Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Monthly Ad Budget:</span>
                      <span className="text-brand-teal font-black">${socialSpend.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="20000" 
                      step="500"
                      value={socialSpend}
                      onChange={(e) => setSocialSpend(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Industry Select */}
                  <div className="space-y-1">
                    <span className="text-[10.5px] text-slate-400 uppercase font-black block">Industry Target:</span>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {([
                        { key: 'ecommerce', name: 'Ecommerce' },
                        { key: 'healthcare', name: 'Healthcare' },
                        { key: 'saas', name: 'B2B SaaS' },
                        { key: 'realestate', name: 'Real Estate' }
                      ] as const).map((ind) => (
                        <button
                          key={ind.key}
                          type="button"
                          onClick={() => setIndustryName(ind.key)}
                          className={`p-2 rounded text-[10px] text-center border font-bold uppercase cursor-pointer transition ${
                            industryName === ind.key 
                              ? 'bg-brand-teal/15 border-brand-teal text-brand-teal' 
                              : 'bg-slate-950 border-slate-850 text-slate-400'
                          }`}
                        >
                          {ind.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ad Format Select */}
                  <div className="space-y-1">
                    <span className="text-[10.5px] text-slate-400 uppercase font-black block">Primary Creative Format:</span>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      {([
                        { key: 'reels', name: 'Reels/Video' },
                        { key: 'catalog', name: 'Dynamic Catalog' },
                        { key: 'static', name: 'Static Image' }
                      ] as const).map((fmt) => (
                        <button
                          key={fmt.key}
                          type="button"
                          onClick={() => setCreativeFormat(fmt.key)}
                          className={`p-1.5 rounded text-[9.5px] text-center border font-bold uppercase cursor-pointer transition ${
                            creativeFormat === fmt.key 
                              ? 'bg-indigo-505/10 border-brand-teal text-brand-teal' 
                              : 'bg-slate-955 border-slate-850 text-slate-400'
                          }`}
                        >
                          {fmt.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Dashboard Outputs */}
                  <div className="bg-slate-950 border border-slate-855 rounded-xl p-4 grid grid-cols-2 gap-4 text-left font-mono">
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-550 uppercase font-black">Est. Impressions</span>
                      <span className="text-base font-black text-white block">{calculatedOutputs.impressions.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Est. Clicks</span>
                      <span className="text-base font-black text-white block">{calculatedOutputs.clicks.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Conversions (Leads/Sales)</span>
                      <span className="text-base font-black text-brand-teal block">{calculatedOutputs.leads}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Estimated CPA</span>
                      <span className="text-base font-black text-white block">${calculatedOutputs.costPerAcquisition}/lead</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-slate-900 grid grid-cols-2">
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-555 uppercase font-black">Yield Value</span>
                        <span className="text-lg font-black text-white block">${calculatedOutputs.revenue.toLocaleString()}</span>
                      </div>
                      <div className="space-y-0.5 text-right">
                        <span className="text-[9px] text-slate-555 uppercase font-black">Projected ROAS</span>
                        <span className="text-lg font-black text-brand-teal block">{calculatedOutputs.roas}x ROAS</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide">
                    *Estimates based on Meta benchmark matrices. We maximize conversions via pixel integrations and high Quality Scores.
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-900 select-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold text-center font-mono">Trusted Meta Ads Management Experts</h2>
            <p className="text-sm text-slate-400 text-center font-mono">We configure first-party pixels & Conversions API (CAPI) data nodes.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">$4.8M+</span>
              <p className="text-xs text-slate-405 mt-1">Meta Ad Spend Managed</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">24k+</span>
              <p className="text-xs text-slate-405 mt-1">Validated Leads Generated</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">4.1x</span>
              <p className="text-xs text-slate-405 mt-1">Average Ecommerce ROAS</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">2,200+</span>
              <p className="text-xs text-slate-405 mt-1">Story & Reels Creatives A/B Tested</p>
            </div>
          </div>

          {/* Badge Indicators and Partner Icon Mock placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-80 pt-8 text-slate-400 font-extrabold text-xs font-mono">
            <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 rounded-full bg-brand-teal/5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" /> META REGISTERED BADGED PARTNER
            </span>
            <span className="border border-slate-808 py-1 px-3.5 rounded-full">INSTAGRAM STORIES OPTIMIZED SYSTEM</span>
            <span className="border border-slate-808 py-1 px-3.5 rounded-full text-indigo-400">CONVERSIONS API (CAPI) ACTIVE</span>
          </div>
        </div>
      </section>

      {/* WHAT ARE META ADS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
              <Smartphone className="w-4 h-4 text-brand-teal" />
              <span>PAID SOCIAL DEMAND INTERLOCK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              What Are Meta Ads Services?
            </h2>
            <div className="space-y-4 text-slate-350 text-sm md:text-base leading-relaxed">
              <p>
                **Meta Ads** represent the unified social canvas spanning over three billion daily active users across Facebook, Instagram, Messenger, and partner network directories.
              </p>
              <p>
                Unlike traditional searching where users actively lookup keywords, Meta Ads operate on **stimulated visual demand**. By mapping precise demographic variables, lookalike cohorts, and pixel action histories, we present highly targeted scroll-stopping creatives directly in front of buyers.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 leading-relaxed text-xs md:text-sm">
                Advanced Meta ad management handles custom audiences signals, server-side Conversions API data integrations, Advantage+ machine learnings, and dynamic product catalog syncs.
              </p>
            </div>
          </div>

          {/* Social funnel graphic */}
          <div className="lg:col-span-5 space-y-4 bg-slate-900/40 border border-slate-80a p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-center border-b border-slate-850 pb-3 font-mono">The Paid Social Acquisition Funnel</h3>
            
            <div className="space-y-4 pt-2 text-left font-mono text-xs text-slate-300">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-700">1</div>
                <h4 className="text-xs font-bold text-white uppercase">Scroll-Hook (0-3 Seconds)</h4>
                <p className="text-slate-405 leading-normal">High-impact video reels, captions, and dynamic carousel structures capture target audience focus instant.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/40">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase">Native Native Leads Capture</h4>
                <p className="text-slate-405 leading-normal">Buyers input credentials via instant-load Meta forms or direct click-to-WhatsApp channels cleanly.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-indigo-505/35-disabled bg-indigo-500/10 flex items-center justify-center text-[10px] text-indigo-400 font-bold border border-indigo-505/20">3</div>
                <h4 className="text-xs font-bold text-indigo-400 uppercase">First-Party Scribe CAPI Tracking</h4>
                <p className="text-slate-405 leading-normal">Server-synchronized attribution feeds verify successful operations to help scale ad campaigns logically.</p>
              </div>
            </div>

            <div className="pt-2 font-mono">
              <a 
                href="#meta-audit-form" 
                className="w-full bg-slate-900 border border-slate-700 font-bold text-xs py-3 rounded-lg hover:bg-slate-800 transition block text-center cursor-pointer"
              >
                Perform Dynamic Social Meta Audit
              </a>
            </div>
          </div>
          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY META ADS MATTER SECTION */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Your Business Needs Premium Meta Ads
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Social feeds are the primary modern discovery engines. If your company lacks a customized visual ad funnel on Instagram and Facebook, you leak leads directly to competitors.
            </p>
          </div>

          {/* Benefits Grid of Why Meta Ads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-mono">
            <div className="p-6 bg-[#0c121e] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Advanced Demographic Targeting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Isolate buyers based on exact demographic interests, historical purchasing behaviors, offline events, and customized lookalike parameters.</p>
            </div>

            <div className="p-6 bg-[#0c121e] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">Highly Visual Storytelling</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Leverage dynamic reels, scroll-stopping graphic banners, and multi-image product carousels to showcase core values and scale products natively.</p>
            </div>

            <div className="p-6 bg-[#0c121e] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Scalable Ecommerce Checkout</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Sync catalog feeds with dynamic Advantage+ product placements that dynamically display pricing grids and buy buttons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE BENTO GRID LAYOUT */}
      <section id="meta-services-grid" className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="space-y-4 mb-16 text-center">
          <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold text-center font-mono">Surgical Paid Social Executions</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our Meta Ads Services Suite</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-mono">
            A meticulous ecosystem of visual ad optimizations engineered to secure leads, checkout revenue, and dynamic retargeting matrices.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {metaServicesGrid.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-slate-905 bg-slate-900 border border-slate-808 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest font-mono">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Suite {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition font-sans">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left font-mono">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-left bg-slate-950/40 p-3 rounded-xl font-mono">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">PROVEN NET IMPACT DELIVERABLE:</div>
                <div className="flex items-center space-x-1.5 text-[11px] text-brand-teal font-extrabold font-mono">
                  <Check className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{srv.benefits}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* META ADS CAMPAIGN TYPES SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none font-mono">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              Campaign Formats We Construct
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-normal">
              We isolate and configure custom structures designed to complement each chosen marketing objective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignFormats.map((cf, cIdx) => (
              <div key={cIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl space-y-2.5 hover:border-brand-teal/20 hover:scale-102 transition duration-300 text-left font-mono">
                <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                <h3 className="text-xs md:text-sm font-bold text-white uppercase">{cf.type}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {cf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">INDUSTRIAL DEPTH MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Meta Ads for Every Industry Vertical</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center">
            We adapt visual storytelling triggers and checkout systems to fit specific industrial verticals perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industriesWeServe.map((ind, iIdx) => (
            <div key={iIdx} className="bg-slate-900 border border-slate-805 p-6 rounded-xl space-y-2.5 text-left">
              <h3 className="text-xs md:text-sm font-bold text-white uppercase border-b border-slate-850 pb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                {ind.label}
              </h3>
              <p className="text-[11px] text-slate-405 leading-relaxed">
                {ind.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE COMPONENT: SCROLL-STOPPING CREATIVE SCORE CALCULATOR */}
      <section className="py-20 bg-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
                <Percent className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>Creative Diagnostic Console</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Meta Ad Creative Attractiveness Score
              </h2>
              <p className="text-sm text-slate-400 font-mono leading-relaxed">
                Is your active creative asset formatted to halt viewers from scrolling? Check the elements below to calculate your tentative creative optimization rating.
              </p>

              {/* Checkbox fields */}
              <div className="space-y-3 font-mono text-xs">
                
                <button
                  type="button"
                  onClick={() => setScHasHook(!scHasHook)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>1. First 3 Seconds Hook (Visual / Text overlay)</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    scHasHook ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {scHasHook && '✓'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setScHasCaptions(!scHasCaptions)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>2. Sound-Off Captions (Speak captions readable on mute)</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    scHasCaptions ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {scHasCaptions && '✓'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setScUgcVibe(!scUgcVibe)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>3. UGC Vibe / Authentic TikTok-style look (Anti-Studio)</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    scUgcVibe ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {scUgcVibe && '✓'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setScDirectCta(!scDirectCta)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>4. Crystal Clear Native Form CTA Button (Direct Target)</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    scDirectCta ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {scDirectCta && '✓'}
                  </span>
                </button>

              </div>
            </div>

            <div className="lg:col-span-1" />

            {/* Score Display Widget Card */}
            <div className="lg:col-span-6 bg-[#0c121e] rounded-2xl border border-slate-808 p-8 shadow-xl text-center font-mono flex flex-col justify-between h-[340px]">
              <div>
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mb-4">OPTIMIZATION EVALUATION</span>
                
                {/* Simulated Dial Gauge */}
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-28 h-28 rounded-full border-4 border-slate-900 flex items-center justify-center">
                    <span className="text-3xl font-black text-white">{creativeScore}%</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white uppercase">
                    {creativeScore < 50 ? '💔 Underperforming Asset' : creativeScore < 80 ? '⚠️ Average Performance' : '🔥 UNSTOPPABLE ROAS MAGNET'}
                  </h3>
                  <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                    {creativeScore < 50 
                      ? 'No visual captions or direct hooks cause viewer bounce rates to spike within the first second.' 
                      : creativeScore < 80 
                      ? 'Moderate visual appeal. Adding UGC assets and precise on-screen call-to-actions will scale your ad CTR.' 
                      : 'Excellent structuring. This creative contains sound-off optimization vectors designed to secure high conversions.'
                    }
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900">
                <a 
                  href="#meta-audit-form" 
                  className="bg-brand-teal text-slate-950 font-bold px-6 py-2.5 rounded text-xs select-none block text-center uppercase tracking-wider hover:bg-white transition"
                >
                  Review My Active Ad Copy Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR COHERENT PPC OPERATIONS PROCESS */}
      <section className="py-20 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">OPERATIONAL PIPELINE</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our Meta Ads Management Process</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-mono">
              We execute five distinct phases to safeguard corporate ad spends, avoiding uneducated audience targeting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Audience & Competitor Review", detail: "Scrutinizing historic accounts variables, competitor ad libraries, creative hooks, and target audience segments." },
              { step: "02", title: "Funnel Strategy Planning", detail: "Structuring pixel triggers, defining cold vs warm target lookalikes, mapping budgets, and configuring tracking CAPI." },
              { step: "03", title: "Ad Creative & Setup Assembly", detail: "Drafting script vectors, designing high-converting social media banner visuals, and establishing landing pages." },
              { step: "04", title: "Optimization & ROAS Scaling", detail: "Isolating bad copy headlines, executing bid adjustments, and testing Advantage+ smart campaign lookalikes." },
              { step: "05", title: "Attribution GA4 Analytics", detail: "Delivering real-time conversion reports tracking actual buyer coordinates, net sales value, and CPA figures." }
            ].map((ph, idx) => (
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

      {/* TOOLS & TECHNOLOGIES WE USE */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center font-sans">
              Paid Social Stack We Run
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-mono">
              We coordinate precise social operations inside verified analytical dashboard systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metaTools.map((mt, mtIdx) => (
              <div key={mtIdx} className="bg-slate-900 border border-slate-805 p-5 rounded-xl text-left space-y-1">
                <span className="text-xs uppercase tracking-wider font-extrabold text-white block">{mt.name}</span>
                <span className="text-[10px] text-brand-teal block uppercase font-bold text-xs">{mt.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">PRE-PRICED PLANS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Flexible Meta Ads Packages</h2>
            <p className="text-sm text-slate-405 text-center font-normal">
              Select an acceleration tier optimized for your quarterly operational scope. Custom SLAs available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagesList.map((pkg, pIdx) => (
              <div key={pIdx} className="bg-slate-950 border border-slate-808 rounded-3xl p-6 relative flex flex-col justify-between h-96 hover:border-brand-teal/20 transition duration-300">
                <div className="space-y-4">
                  <span className="text-[9px] text-brand-teal font-extrabold uppercase tracking-widest block bg-brand-teal/5 border border-brand-teal/20 px-2 rounded py-0.5 inline-block">Plan {pIdx+1}</span>
                  <h3 className="text-xl font-bold text-white font-sans">{pkg.name}</h3>
                  <p className="text-[11px] text-slate-405 leading-relaxed">{pkg.desc}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-900 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 uppercase font-black text-[9px]">Target Budget Scope:</span>
                    <span className="text-white font-bold">{pkg.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 uppercase font-black text-[9px]">Contract Matrix:</span>
                    <span className="text-white font-bold">{pkg.term}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="#meta-audit-form" 
                    className="w-full bg-slate-900 border border-slate-800 text-slate-300 text-xs py-3 text-center rounded block hover:bg-slate-800 font-bold transition uppercase tracking-widest cursor-pointer"
                  >
                    Request custom meta plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-left">
        <div className="text-center space-y-4 mb-12">
          <span className="text-brand-teal text-xs uppercase font-extrabold tracking-wider font-mono">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400 font-medium font-mono text-center">Advanced social ads questions resolved below by our executive partners.</p>
        </div>

        <div className="space-y-4 font-mono">
          {metaFaqs.map((faq, fIdx) => (
            <div key={fIdx} className="bg-slate-900 border border-slate-805 rounded-xl overflow-hidden transition duration-200">
              <button
                onClick={() => setOpenFaqIdx(openFaqIdx === fIdx ? null : fIdx)}
                className="w-full p-5 text-left flex justify-between items-center text-xs md:text-sm font-bold text-slate-200 hover:text-white transition uppercase cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-brand-teal transition-transform duration-200 ${openFaqIdx === fIdx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openFaqIdx === fIdx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="p-5 pt-0 text-[11px] md:text-xs text-slate-400 border-t border-slate-850 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEMA WORKSPACE - COPYABLE CODE */}
      <section className="py-12 bg-[#0c121e] border-y border-slate-900 text-left font-mono text-xs">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-brand-teal" />
            <span className="text-xs uppercase font-bold text-slate-300">Recommended Audit Schema Markup Code (JSON-LD)</span>
          </div>
          <p className="text-[11px] text-slate-405">
            Optimize local layouts for search algorithms! Copy and embed this JSON-LD schema direct inside website index files.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                <span className="text-[10px] text-slate-500 font-extrabold uppercase">Service Schema Markup</span>
                <button 
                  onClick={() => performSchemaCopy(metaAdsSchemaTemplates.service, 'service')}
                  className="bg-slate-900 border border-slate-800 text-[10px] py-1 px-3 rounded hover:bg-slate-850 transition text-brand-teal font-extrabold cursor-pointer"
                >
                  {schemaCopied === 'service' ? 'Copied ✓' : 'Copy Code'}
                </button>
              </div>
              <pre className="text-[9px] text-slate-400 overflow-x-auto max-h-36 scrollbar-thin">
                {metaAdsSchemaTemplates.service}
              </pre>
            </div>

            <div className="bg-slate-955 bg-slate-950 p-4 rounded-xl border border-slate-855 space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                <span className="text-[10px] text-slate-500 font-extrabold uppercase">Attribution FAQ Schema</span>
                <button 
                  onClick={() => performSchemaCopy(metaAdsSchemaTemplates.faq, 'faq')}
                  className="bg-slate-900 border border-slate-800 text-[10px] py-1 px-3 rounded hover:bg-slate-850 transition text-brand-teal font-extrabold cursor-pointer"
                >
                  {schemaCopied === 'faq' ? 'Copied ✓' : 'Copy Code'}
                </button>
              </div>
              <pre className="text-[9px] text-slate-400 overflow-x-auto max-h-36 scrollbar-thin">
                {metaAdsSchemaTemplates.faq}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FREE AUDIT FORM BLOCK */}
      <section id="meta-audit-form" className="py-20 max-w-3xl mx-auto px-4 text-left font-mono">
        <div className="bg-slate-900 border border-slate-808 p-8 rounded-3xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] text-brand-teal uppercase font-extrabold tracking-widest">Free Account Analysis Matrix</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase font-sans">Get Free Meta Ads Audit</h2>
            <p className="text-[11px] text-slate-405 leading-normal max-w-md mx-auto">
              Our partner directors will review past pixel data structures and flag potential budget saving solutions completely free.
            </p>
          </div>

          {auditSubmitted ? (
            <div className="bg-brand-teal/10 border border-brand-teal/30 p-8 rounded-2xl text-center space-y-3 font-mono">
              <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto animate-bounce" />
              <h3 className="text-lg font-bold text-white uppercase">Request Successfully Recorded!</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Thank you! Our Certified PPC Directors are retrieving your domain diagnostics. We will send the audit presentation file within 24 working hours to: <strong className="text-brand-teal">{auditForm.email}</strong>.
              </p>
              <div className="pt-2 text-[10px] text-slate-500 uppercase font-black">Ref ID: META_AUDIT_VERIFIED</div>
            </div>
          ) : (
            <form onSubmit={handleAuditSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="space-y-1.5 prose">
                  <label className="block text-slate-400 font-black uppercase text-[10px]">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Amrish Singh"
                    value={auditForm.name}
                    onChange={(e) => setAuditForm({ ...auditForm, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-lg text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-slate-400 font-black uppercase text-[10px]">Website Landing Page URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://akglsgroup.com"
                    value={auditForm.website}
                    onChange={(e) => setAuditForm({ ...auditForm, website: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-lg text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-slate-400 font-black uppercase text-[10px]">Monthly Ad Spend Target *</label>
                  <select
                    value={auditForm.budget}
                    onChange={(e) => setAuditForm({ ...auditForm, budget: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-lg text-slate-300 font-mono"
                  >
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                    <option value="$10,000+">$10,000+ monthly</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-slate-400 font-black uppercase text-[10px]">Industry Vertical Group</label>
                  <select
                    value={auditForm.industry}
                    onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-lg text-slate-300 font-mono"
                  >
                    <option value="Ecommerce">Ecommerce & Retail</option>
                    <option value="Healthcare">Healthcare Clinics</option>
                    <option value="SaaS">B2B SaaS Startup</option>
                    <option value="Real Estate">Real Estate Brokers</option>
                    <option value="Other">Other Vertical</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-slate-400 font-black uppercase text-[10px]">Email Coordinates *</label>
                  <input
                    type="email"
                    required
                    placeholder="amrish.singh01@gmail.com"
                    value={auditForm.email}
                    onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-lg text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-slate-400 font-black uppercase text-[10px]">Phone Contact Coordinates</label>
                  <input
                    type="tel"
                    placeholder="+91 831 811 4492"
                    value={auditForm.phone}
                    onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 p-3 rounded-lg text-white font-mono"
                  />
                </div>

              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-teal hover:bg-white text-slate-950 p-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Verify and Process Ad Audit Data</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* BLOG ARTICLES LINKS SECTION */}
      <section className="py-20 border-t border-slate-900 bg-slate-900/10 text-left font-mono text-xs">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center space-x-2 border-b border-slate-900 pb-4 mb-6">
            <Briefcase className="w-5 h-5 text-brand-teal" />
            <span className="text-xs uppercase font-extrabold text-slate-300">Suggested Informative Studies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 hover:border-brand-teal/30 transition">
              <span className="text-[9px] text-brand-teal font-extrabold uppercase block mb-1">Guides</span>
              <h4 className="text-xs font-bold text-white uppercase leading-relaxed mb-2">Facebook Ads Beginner Guide</h4>
              <p className="text-[10px] text-slate-405">Configure parameters, attribution pixels, and dynamic formats with zero prior marketing files required.</p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 hover:border-brand-teal/30 transition">
              <span className="text-[9px] text-brand-teal font-extrabold uppercase block mb-1">Ad Creatives</span>
              <h4 className="text-xs font-bold text-white uppercase leading-relaxed mb-2">Instagram Ads Best Practices</h4>
              <p className="text-[10px] text-slate-405">Isolate high CTR short form Reels clips and construct direct captive text copies matching modern budgets.</p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 hover:border-brand-teal/30 transition">
              <span className="text-[9px] text-brand-teal font-extrabold uppercase block mb-1">Dials & Bids</span>
              <h4 className="text-xs font-bold text-white uppercase leading-relaxed mb-2">Meta Ads vs Google Ads Matrix</h4>
              <p className="text-[10px] text-slate-405">Review exactly how visual social stimulants compare with search queries matching active buying intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INTERLINKED CALL TO ACTION */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(29,226,188,0.1),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-none">
            Ready to Scale Web Lead Channels with Facebook & Instagram Ads?
          </h2>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto font-mono">
            Partner with AKGLS Group certified marketing experts. Minimize quarterly ad spend leaks and coordinate precise tracking metrics cleanly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-mono">
            <a 
              href="#meta-audit-form" 
              className="bg-brand-teal hover:bg-white text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg transition duration-200 block text-center"
            >
              Request Free Meta Ads Audit
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-900 border border-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition block text-center flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-brand-teal" /> Chat with Advisor on WhatsApp
            </a>
          </div>

          {/* Quick links to internal digital platforms */}
          <div className="pt-10 border-t border-slate-900 flex flex-wrap justify-center gap-4 text-[10px] text-slate-500 font-mono">
            <span className="uppercase font-extrabold">Other Marketing Services:</span>
            <button onClick={onBackToHome} className="hover:text-white underline uppercase">Surgical GEO Services</button>
            <span className="text-slate-700">|</span>
            <button onClick={onBackToHome} className="hover:text-white underline uppercase">High-ROI Google Ads Services</button>
            <span className="text-slate-700">|</span>
            <button onClick={onBackToHome} className="hover:text-white underline uppercase">Conversion Rate optimization</button>
          </div>
        </div>
      </section>

    </div>
  );
}

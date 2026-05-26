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
  Laptop, Layout, Paintbrush, ArrowUpRight, Layers3, Rocket,
  Lightbulb, ChevronRight, Play, LineChart, ZapOff, Minimize2, CheckSquare, BarChart4,
  MapPin, Map, StarHalf, MessageCircle, RefreshCw, ShoppingBag, ArrowDownRight, Info
} from 'lucide-react';

interface EcommerceGrowthSolutionsPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const ecommerceSchemaTemplates = {
  organization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AKGLS Group",
  "url": "https://akglsgroup.com",
  "logo": "https://akglsgroup.com/logo.png",
  "sameAs": [
    "https://twitter.com/akglsgroup",
    "https://linkedin.com/company/akglsgroup"
  ]
}`,
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ecommerce Growth Solutions & Multi-Channel Scale",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group"
  },
  "areaServed": "Global",
  "description": "AI-powered ecommerce SEO, Google Ads, Meta Ads scaling, Shopify CRO & speed optimization, and multi-channel marketing campaigns.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD"
  }
}`
};

export default function EcommerceGrowthSolutionsPage({ onBackToHome, openProposalForm }: EcommerceGrowthSolutionsPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Ecommerce Growth Solutions | Ecommerce Marketing Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Ecommerce ROI & Revenue Growth Calculator States
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(30000);
  const [conversionRate, setConversionRate] = useState<number>(1.8);
  const [averageOrderValue, setAverageOrderValue] = useState<number>(65);
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(5000);

  const calculateMetrics = () => {
    // Current State
    const currentOrders = Math.round(monthlyTraffic * (conversionRate / 100));
    const currentRevenue = currentOrders * averageOrderValue;
    const currentRoas = monthlyAdSpend > 0 ? parseFloat((currentRevenue / monthlyAdSpend).toFixed(2)) : 0;

    // Optimized (AKGLS Scale-Up) state: 45% lift in traffic, 35% lift in conversion rate, 12% lift in AOV
    const optimizedTraffic = Math.round(monthlyTraffic * 1.45);
    const optimizedConvRate = parseFloat((conversionRate * 1.35).toFixed(2));
    const optimizedAov = Math.round(averageOrderValue * 1.12);
    
    const optimizedOrders = Math.round(optimizedTraffic * (optimizedConvRate / 100));
    const optimizedRevenue = optimizedOrders * optimizedAov;
    const optimizedRoas = monthlyAdSpend > 0 ? parseFloat((optimizedRevenue * 0.9 / (monthlyAdSpend * 1.1)).toFixed(2)) : 0; // assuming slightly higher spend

    const monthlyRevenueLift = optimizedRevenue - currentRevenue;
    const PercentageGain = currentRevenue > 0 ? Math.round((monthlyRevenueLift / currentRevenue) * 100) : 0;

    return {
      currentOrders,
      currentRevenue,
      currentRoas,
      optimizedTraffic,
      optimizedConvRate,
      optimizedAov,
      optimizedOrders,
      optimizedRevenue,
      optimizedRoas,
      monthlyRevenueLift,
      PercentageGain
    };
  };

  const results = calculateMetrics();

  // Active platform selector
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Shopify');

  const platforms = [
    { name: 'Shopify', desc: 'Custom theme developments, lightning-fast Shopify liquid templates, high-converting collection structures, and Klaviyo/recharge integrations.', stats: '+142% Avg Traffic Lift' },
    { name: 'WooCommerce', desc: 'Secure bespoke WordPress setups, high-performance database scaling, customizable WooCommerce checkouts, and custom API syncs.', stats: '+95% Sales Speedup' },
    { name: 'Magento', desc: 'Enterprise-grade multi-currency operations, localized SEO indexes, headless Adobe Commerce structures, and inventory sync systems.', stats: '99.9% High Server Load' },
    { name: 'BigCommerce', desc: 'Scalable multi-storefront systems, custom B2B cart pricing layouts, API-driven web builds, and automated schema markings.', stats: '+40% Speed Optim' },
    { name: 'Wix Ecommerce', desc: 'Clean SEO sitemap integrations, fast loading, custom product tag schemas, and direct conversion funnel checkouts.', stats: '+30% Booking Lifts' },
    { name: 'Custom Stores', desc: 'React, Next.js, and headless commerce platforms powered with fast GraphQL query resolutions, tailored cart checkout modules, and offline caches.', stats: '0.4s Fast Load Times' },
    { name: 'Amazon', desc: 'Listing keyword optimization, multi-country marketplace catalog structures, A+ Content designs, and listing visibility indexing on A10.', stats: 'Best-Seller Badges' },
    { name: 'Flipkart', desc: 'Product indexing templates, bulk campaign monitoring setups, seasonal promotional event layouts, and optimized product schemas.', stats: '+80% Volume Scale' }
  ];

  // Active Industry
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  const industries = [
    { name: "Fashion & Apparel", cases: "6.8x ROAS Achieved", desc: "Dynamic Meta Advantage+ product setups, automated lookbook grids, Instagram commerce integrations, and high-frequency email retention flows.", bg: "from-purple-950 to-indigo-950" },
    { name: "Electronics", cases: "4.2x ROAS Secured", desc: "Bespoke comparison charts, detailed tech spec bullet indexing, warranty/cross-sell checkout widgets, and YouTube video retargeting ads.", bg: "from-blue-950 to-cyan-950" },
    { name: "Beauty & Cosmetics", cases: "+240% Order Volume", desc: "Subscription-based checkout modules, UGC TikTok/Reels campaign workflows, cruelty-free certification schema parameters, and loyalty engines.", bg: "from-pink-950 to-rose-950" },
    { name: "Grocery & FMCG", cases: "+320% Customer Lifetime Value", desc: "Weekly automatic replenish logs, regional delivery hub integrations, bundle savings counters, and high-speed checkout frameworks.", bg: "from-emerald-950 to-green-950" },
    { name: "Furniture", cases: "+180% Avg Order Value", desc: "Heavy shipping price matrices, high-resolution visual room generators, direct phone advisory live chat buttons, and custom financing integrations.", bg: "from-amber-950 to-orange-950" },
    { name: "Jewelry", cases: "11.2x SEO Traffic ROI", desc: "High-contrast visual gallery grids, certifier report schema listings, trust shield security blocks, and VIP concierge client workflows.", bg: "from-yellow-950 to-yellow-900" },
    { name: "Fitness Products", cases: "3.5x Ad Spend Scale", desc: "Workout trainer video guides integration, bulk commercial tier discount codes, dynamic size chart matrices, and Amazon cross-selling schedules.", bg: "from-red-950 to-orange-950" },
    { name: "Healthcare Products", cases: "100% HIPAA Standard Compliant", desc: "FDA warning compliance headers, ingredient purity schemas, pharmacist check widgets, and secure automated repeat orders pipelines.", bg: "from-teal-950 to-emerald-950" },
    { name: "Pet Supplies", cases: "95% Retention Rate", desc: "Pet demographic onboarding guides, automatic monthly food subscriptions, personalized custom tags, and seasonal flea/tick alerts workflows.", bg: "from-sky-950 to-blue-950" }
  ];

  // Ecommerce Growth Services
  const services = [
    {
      id: 1,
      title: "1. Ecommerce SEO Services",
      tag: "⭐ Core Service",
      desc: "Comprehensive product SEO, category page structuring, technical shop checks, schema markup setups, and AI search database indexations.",
      highlights: ["Product metadata structures", "Collection page content clusters", "Internal crawl link optimizations", "Duplicate description cleanups"],
      goal: "Generate long-term permanent organic traffic that buys products without recurring paid ad dependency."
    },
    {
      id: 2,
      title: "2. Google Ads for Ecommerce",
      tag: "ROI Driven",
      desc: "Highly-targeted Google Shopping, Search optimization, Performance Max (PMax) campaigns, smart remarketing schedules, and bid optimization models.",
      highlights: ["Dynamic merchant feed syncs", "Broad keyword matching filters", "A/B copy tested ad creatives", "Geo-targeted high-intent bidding"],
      goal: "Drive high-intent buyers looking exactly for your products with cost-optimized ROAS targets."
    },
    {
      id: 3,
      title: "3. Meta Ads for Ecommerce",
      tag: "Scalable Growth",
      desc: "Facebook dynamic product catalogs, Instagram shoppable ads, bespoke lookalike scaling matrices, and video retargeting structures.",
      highlights: ["Catalog Advantage+ set configurations", "High-retention video ad creatives", "Custom interest lookalikes", "Cohort-based retargeting plans"],
      goal: "Transform cold audiences into passionate immediate product buyers and brand loyalty ambassadors."
    },
    {
      id: 4,
      title: "4. Shopify & Ecommerce Development",
      tag: "Mobile-First UX",
      desc: "High-performance Shopify setups, layout redesigns, conversion-rate optimized checkouts, page load reductions, and API-centric headless setups.",
      highlights: ["Custom Liquid/React styling components", "Core Web Vitals load-speed boosts", "Smart checkout form compressions", "Multi-platform database syncing"],
      goal: "Convert traffic faster with an elite, secure, and friction-free shopping experience on all devices."
    },
    {
      id: 5,
      title: "5. Conversion Rate Optimization (CRO)",
      tag: "Conversion Focused",
      desc: "Funnel audits, cart abandonment mitigations, UX testing loops, exit-intent promotions, and checkout field minimizations.",
      highlights: ["Friction-less cart checkout layouts", "One-click order bump integrations", "Social proof notification signals", "Device-based A/B flow testings"],
      goal: "Turn existing traffic into higher sales counts without having to spend further on extra advertising."
    },
    {
      id: 6,
      title: "6. AI SEO & AI Commerce Optimization",
      tag: "⭐ Trending Service",
      desc: "Product descriptions formatted for ChatGPT, Perplexity, and Apple Intelligence searches, paired with generative shopping experiences.",
      highlights: ["Generative engine indexing setups", "Semantic product description arrays", "Conversational chatbot search layouts", "AI recommendation data logs"],
      goal: "Secure top placement when AI-powered assistant bots handpick products for modern consumers."
    },
    {
      id: 7,
      title: "7. Ecommerce Social Media Marketing",
      tag: "Brand Authority",
      desc: "Viral Reels layouts, TikTok catalog syncs, influencer alignment strategies, and community user-generated (UGC) campaigns.",
      highlights: ["Weekly visual asset development", "Trend-jacked video content schedules", "Influencer sample program models", "Active social review moderations"],
      goal: "Amass a massive, active social following that drives continuous organic referrals and social buys."
    },
    {
      id: 8,
      title: "8. Ecommerce Email & Automation Marketing",
      tag: "High Revenue Lift",
      desc: "Automated cart abandonment alerts, personalized customer onboarding sequences, multi-tier loyalty campaigns, and dynamic Klaviyo workflows.",
      highlights: ["Pre-built cart recovery workflows", "Dynamic browse reminder logs", "Seasonal holiday promotion systems", "VIP purchaser segmentation tiers"],
      goal: "Nurture existing buyers to purchase again and again, boosting Lifetime Customer Value (LTV) on autopilot."
    },
    {
      id: 9,
      title: "9. Marketplace Growth Solutions",
      tag: "Omnichannel Domination",
      desc: "Product listings optimizations, search rankings alignments, and sponsored ads management on Amazon and Flipkart.",
      highlights: ["Marketplace A10 search keyword syncs", "A+ Content designs & copy elements", "FBA/Sellers Hub logistics metrics checks", "Multi-marketplace sponsored ad scales"],
      goal: "Dominate crowded digital marketplaces, capturing buyers shopping directly inside app ecosystems."
    },
    {
      id: 10,
      title: "10. Ecommerce Consulting & Scaling Strategy",
      tag: "Strategic Advisory",
      desc: "Bespoke margin audits, geographic expansion blueprints, supply-chain feedback, and competitor multi-channel sales analysis.",
      highlights: ["Dedicated fractional CMO sessions", "COGs & Margin optimization models", "New geographical sitemap planning", "Venture capital pitch data readiness"],
      goal: "Eliminate expensive trial-and-error by deploying proven frameworks structured by digital commerce veterans."
    }
  ];

  // Process Steps
  const processSteps = [
    { step: "Phase 1: Ecommerce Audit & Research", desc: "Detailed audits mapping product listings, technical index errors, ad margin leaks, shopper cart drag parameters, and main competitors." },
    { step: "Phase 2: Growth Strategy Planning", desc: "Creating a multi-channel plan spanning local search keywords, ad budget distributions, CRO checklist, and automated email logic maps." },
    { step: "Phase 3: Store & Campaign Optimization", desc: "Deploying speed-optimization parameters, configuring schema files, restructuring dynamic catalogs, and installing high-converting checkouts." },
    { step: "Phase 4: Customer Acquisition & Scaling", desc: "Launching high-ROI Google Ads, Meta lookalike targets, programmatic retargeting networks, and automated cart abandonment flows." },
    { step: "Phase 5: Reporting & Revenue Growth", desc: "Constant evaluation of core KPIs (ROAS, CAC, AOV, organic margins), database updates, and strategic capital expansions." }
  ];

  // Schema copying indicators
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copySchemaText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  // FAQ collapses
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How can ecommerce businesses increase online sales?", a: "By combining three core levers: increasing high-intent traffic (Ecommerce SEO and hyper-targeted Google/Meta Ads), maximizing Conversion Rates (CRO checkout streamline, fast load speeds), and lifting Average Order Value (AOV via upsells, smart product recommendations, and free-shipping thresholds)." },
    { q: "Is Ecommerce SEO important if we are already spending heavily on paid ads?", a: "Absolutely. Paid ads stop delivering sales the second you pause the spend. Ecommerce SEO builds permanent, highly profitable organic visibility on Google. This drives down your overall Customer Acquisition Cost (CAC) and builds a secure baseline of predictable high-margin sales on autopilot." },
    { q: "Which ads work best for ecommerce brands?", a: "For immediate, high-intent sales, Google Shopping and Performance Max (PMax) Ads are unmatched because they capture users actively searching for product names. For visual/lifestyle discovery, social impulse buys, and scaling brand volume, Meta (Instagram/Facebook) and TikTok Ads outperform other networks." },
    { q: "Can AI improve ecommerce growth?", a: "Yes, in multiple ways. AI-powered search optimization (GEO) ensures your products appear when users ask AI assistants like ChatGPT or Gemini for product recommendations. AI-powered personalization can also dynamically display product catalogs tailored to user behaviors, and automate responsive support via smart commerce agents." },
    { q: "What is Conversion Rate Optimization (CRO)?", a: "CRO is the scientific process of identifying why website visitors abandon their carts or leave your store without purchasing, then systematically testing solutions. Our custom CRO services focus on cart abandonment rescue, checkout field reduction, layout speed, and high-trust social validation badges." },
    { q: "How long does it take to see positive returns?", a: "Paid advertising optimizations generally produce visible ROAS shifts within 7 to 14 days of account restructures. Organic SEO rankings and technical content velocity compound significantly over a 45 to 90 days period to drive permanent organic sales." },
    { q: "Do you help Shopify stores scale?", a: "Shopify is our primary platform capability. We custom design, develop, and optimize high-speed Liquid theme code, integrate automated Klaviyo marketing loops, implement premium checkout hooks, and scale multi-million dollar ad operations for Shopify stores worldwide." }
  ];

  // Simulated Audit Submission
  const [auditForm, setAuditForm] = useState({
    storeName: '',
    websiteUrl: '',
    platform: 'Shopify',
    revenueRange: '$10k - $50k / month',
    email: '',
    phone: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.storeName || !auditForm.email || !auditForm.websiteUrl) return;
    setAuditSubmitted(true);
  };

  return (
    <div id="ecommerce-growth-solutions-page" className="bg-[#02050f] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Floating Hotline & Action widgets */}
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

      {/* HEADER STATUS BAR */}
      <div className="bg-slate-950 border-b border-indigo-950 text-xs py-2 px-4 flex justify-between items-center z-20 relative font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping"></span>
          <span>Ecommerce Scaling Engines Active</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center gap-1"
            id="back-home-nav-btn"
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
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#040716] text-white overflow-hidden text-left border-b border-indigo-955 border-b-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left: Headlines & Core Value */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>AI-Powered Multi-Channel Scale</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none font-sans">
                Ecommerce Growth Solutions That Increase <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Sales, Traffic & Revenue</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Scale your ecommerce business with AI-powered ecommerce SEO, Google Ads, Shopify optimization, conversion rate optimization, social commerce, and growth marketing strategies designed for modern online stores.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#free-ecommerce-audit-form" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-ecommerce-audit-btn"
                >
                  <span>Get Free Ecommerce Growth Audit</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </a>
                <a 
                  href="#ecommerce-roas-calculator" 
                  onClick={() => {
                    const el = document.getElementById('ecommerce-roas-calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-350 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal animate-pulse" />
                  <span>Interactive ROI Simulator</span>
                </a>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-2 shadow-2xl md:grid-cols-4 gap-4 pt-8 border-t border-indigo-950/40 font-mono text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Ecommerce Growth Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>AI-Powered Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Conversion Focused</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>ROI-Driven Campaigns</span>
                </div>
              </div>

            </div>

            {/* Hero Right: Interactive Ecommerce ROAS, Traffic, & Revenue Simulator */}
            <div className="lg:col-span-5 relative" id="ecommerce-roas-calculator">
              <div className="bg-[#0b0e20] rounded-3xl p-6 border border-indigo-950 shadow-2xl relative overflow-hidden text-left font-mono">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40 mb-5">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-bold uppercase">ROI & Traffic Simulator</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-indigo-900 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    REVENUE GROWTH ENGINE
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  
                  {/* Traffic slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Est. Monthly Traffic:</span>
                      <span className="text-sky-400 font-bold">{monthlyTraffic.toLocaleString()} Visitors</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="500000" 
                      step="5000"
                      value={monthlyTraffic}
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-sky-400 font-mono"
                    />
                  </div>

                  {/* Conversion Rate Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Conversion Rate (%):</span>
                      <span className="text-indigo-400 font-bold">{conversionRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.1" 
                      max="8" 
                      step="0.1"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-indigo-400"
                    />
                  </div>

                  {/* AOV Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Average Order Value (AOV):</span>
                      <span className="text-brand-teal font-bold">${averageOrderValue} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="1000" 
                      step="5"
                      value={averageOrderValue}
                      onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Ad Spend Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center font-mono">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Proposed Ad Spend:</span>
                      <span className="text-red-400 font-bold">${monthlyAdSpend.toLocaleString()} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="50000" 
                      step="500"
                      value={monthlyAdSpend}
                      onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-red-400"
                    />
                  </div>

                  {/* Metrics Calculation Outputs */}
                  <div className="bg-slate-950 border border-indigo-950 rounded-xl p-4 grid grid-cols-2 gap-4 text-left font-mono">
                    
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Current Revenue</span>
                      <span className="text-base font-black text-rose-450 text-slate-400 block">${results.currentRevenue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Current ROAS</span>
                      <span className="text-base font-black text-slate-400 block">{results.currentRoas}x</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black">AKGLS Scale-Up</span>
                      <span className="text-base font-black text-brand-teal block">${results.optimizedRevenue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black">Estimated ROAS</span>
                      <span className="text-base font-black text-brand-teal block">{results.optimizedRoas}x</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-indigo-900/60 flex justify-between items-center bg-indigo-950/20 px-2.5 py-2 rounded-lg border border-indigo-900/50 mt-1">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[9px] text-slate-300 uppercase font-black block">Net Monthly Lift</span>
                        <span className="text-xs text-slate-400 text-left">+{results.PercentageGain}% more sales</span>
                      </div>
                      <span className="text-lg font-black text-emerald-450 text-emerald-400 block font-mono">
                        +${results.monthlyRevenueLift.toLocaleString()}
                      </span>
                    </div>

                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide">
                    *Returns adjusted for direct CRO conversion lift benchmarks and localized Technical checkout fixes.
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
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold font-mono">TRUSTED ECOMMERCE GROWTH PARTNER</h2>
            <p className="text-[10px] text-slate-500 uppercase">Avenue builders tracking verified growth of direct-to-consumer store brands.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono font-extrabold pb-8">
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-white block">150+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Ecommerce Stores Scaled</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal block">$45M+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Client Revenue Generated</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-white block">34%</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Avg Conversion Improvement</p>
            </div>
            <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl relative">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal block">4.2M+</span>
              <p className="text-[11px] text-slate-400 font-sans font-medium mt-1">Annual Store Orders Handled</p>
            </div>
          </div>

          {/* Social Proof Brand Logos placeholders / text badges */}
          <div className="pt-6 border-t border-indigo-950/60 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-400 font-mono font-bold">
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded">★ TOP SHOPIFY EXPERTS</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded">★ GOOGLE CLOUD ECOSYSTEM</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-blue-400">★ META MARKETING PARTNER</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-emerald-400">★ KLAVIYO APPLICABLE</span>
            <span className="bg-slate-900/80 px-4 py-2 border border-indigo-950 rounded text-amber-500">★ AMAZON ADVERTISING ACCREDITED</span>
          </div>

        </div>
      </section>

      {/* WHAT ARE ECOMMERCE GROWTH SOLUTIONS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-1 font-mono">
                <ShoppingBag className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>MULTICHANNEL SCALE BLUEPRINTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans text-left">
                What Are Ecommerce Growth Solutions?
              </h2>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-sans text-left font-normal">
                <p>
                  Ecommerce growth solutions represent an integrated strategy that connects high-intent Google searches, dynamic social shopping channels, fast checkout interfaces, and intelligent retention automation pipelines to scale retail business.
                </p>
                <p>
                  Instead of analyzing performance marketing budgets in separate, isolated vertical silos, we build an unified **omnichannel revenue cycle**. 
                </p>
                <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs font-mono">
                  Your store listing coordinates directly with technical sitemap metadata so Google shopping displays product prices in real-time, while retargeting pixels trigger localized Instagram feeds, supported by custom automated email sequences that convert lost carts.
                </p>
              </div>

            </div>

            {/* Interactive Ecosystem Funnel Board */}
            <div className="lg:col-span-6 bg-[#0b0f20] border border-indigo-950 p-6 rounded-2xl relative font-mono text-xs">
              
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-indigo-950 pb-3 mb-4">
                Retail Growth Funnel Architecture
              </h3>

              <div className="space-y-3 font-mono">
                
                {/* Level 1 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-brand-teal font-extrabold block uppercase">1. Traffic Acquisition</span>
                    <span className="text-slate-400 text-[11px] font-sans">Google SEO, PMax Ads, Advantage+ Meta Reels, TikTok influencers</span>
                  </div>
                  <span className="bg-brand-teal/5 text-brand-teal border border-brand-teal/30 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Cold Clicks</span>
                </div>

                {/* Level 2 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-indigo-400 font-extrabold block uppercase">2. Conversion Optimization</span>
                    <span className="text-slate-400 text-[11px] font-sans">High-speed React catalog loads, direct cart checkout hooks, trust locks</span>
                  </div>
                  <span className="bg-indigo-950 text-indigo-400 border border-indigo-800 text-[9px] px-2 py-0.5 rounded uppercase font-bold">1.8% to 4.5% CR</span>
                </div>

                {/* Level 3 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-sky-400 font-extrabold block uppercase">3. Abandonment Rescue & Retention</span>
                    <span className="text-slate-400 text-[11px] font-sans">Automated Klaviyo reminders, purchase discount SMS flows</span>
                  </div>
                  <span className="bg-sky-950 text-sky-450 text-sky-400 border border-sky-800 text-[9px] px-2 py-0.5 rounded uppercase font-bold">LTV Compounding</span>
                </div>

                {/* Level 4 */}
                <div className="bg-slate-950 border border-indigo-900 rounded-xl p-3.5 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-yellow-500 font-extrabold block uppercase">4. AI Search & Marketplace</span>
                    <span className="text-slate-400 text-[11px] font-sans">Product listings synced on Amazon, ChatGPT catalog mappings</span>
                  </div>
                  <span className="bg-yellow-950/50 text-yellow-500 border border-yellow-800/50 text-[9px] px-2 py-0.5 rounded uppercase font-bold">Diversified Profit</span>
                </div>

              </div>

              <div className="pt-4 border-t border-indigo-950 mt-4 text-center">
                <a href="#free-ecommerce-audit-form" className="text-[10.5px] text-brand-teal font-extrabold hover:underline inline-flex items-center gap-1.5 uppercase font-mono">
                  <span>Audit Your Funnel Mechanics Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY ECOMMERCE BUSINESSES NEED GROWTH MARKETING (BENEFITS GRID) */}
      <section className="py-20 bg-[#061022]/30 border-y border-indigo-950/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30 font-mono">SCALE-UP ADVANTAGES MODULE</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
              Why Ecommerce Growth Strategies Matter
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              In digital retail, old templates fail. We optimize each interaction layer to build scalable storefront pipelines and slash acquisition customer costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-xs font-mono">
            
            {/* Benefit 1 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10 mb-2">
                <TrendingUp className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Increase Online Sales</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Accelerate product transactions through immediate high-intent Google feeds, targeted catalog configurations, and seasonal shopping event campaign schedules.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/10 mb-2">
                <Percent className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Improve Conversion Rates</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Bypass checkout frictions. Remove layout lags, deploy direct-pay checkout lines, and show interactive customer review blocks to bolster trust immediately.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal border border-brand-teal/20 mb-2">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono font-mono">Lower Customer Acquisition Cost</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Stop wasting media budget on untargeted lookalikes. We filter cold keywords and focus ads purely on high-frequency shopping coordinates.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/10 mb-2">
                <Users className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Enhance Customer Retention</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Deploy smart automated email triggers using Klaviyo to re-engage past buyers, deliver targeted restock schedules, and propose personalized cross-sales.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/10 mb-2">
                <Rocket className="w-5 h-5 animate-bounce" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Scale Revenue Faster</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Combine high-ranking organic pages with elastic ad infrastructures to drive sales volume compound curves that traditional platforms simply cannot reproduce.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-2xl space-y-3.5 hover:border-brand-teal/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/10 mb-2">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Elevate Shopping Experience</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left text-[11px]">
                Deliver ultra-fast mobile catalog frames with intuitive filters and modern responsive design layouts that match the premium nature of your products.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICE GRID SECTION */}
      <section id="ecommerce-services" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">CAPABILITIES DIRECTORY</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Our Ecommerce Growth Solutions</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Every module is designed to resolve specialized bottleneck friction parameters in digital commerce, helping digital retail hubs scale product line sales.
          </p>
        </div>

        {/* bento grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((srv, index) => (
            <div 
              key={index}
              className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start font-mono">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest">{srv.tag}</span>
                  <span className="text-slate-600 text-[10px]">Module {index + 1} of 10</span>
                </div>
                
                <h3 className="text-xl font-bold text-white font-sans hover:text-brand-teal transition tracking-tight text-left">{srv.title}</h3>
                
                <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-sans font-normal text-left">
                  {srv.desc}
                </p>

                {/* Sub features bullet */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-[10.5px]">
                  {srv.highlights.map((hlt, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-1.5 text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-brand-teal shrink-0 animate-pulse" />
                      <span className="truncate">{hlt}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Service performance metrics outcomes */}
              <div className="pt-4 border-t border-indigo-950 mt-6 bg-slate-950/45 p-3 rounded-lg border border-indigo-950/50">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest block font-bold mb-1">Target Result Matrix</span>
                <div className="flex items-center space-x-2 text-[11px] text-brand-teal font-extrabold leading-tight text-left font-sans">
                  <Check className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{srv.goal}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* PLATFORMS WE WORK WITH */}
      <section className="py-20 bg-[#090e1d]/45 border-y border-indigo-950 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">ECOSYSTEM MATRIX</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans text-center">
              Ecommerce Platforms We Support
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto text-center font-normal">
              We engineer custom, high-speed components, optimize collection structures, and synchronize schemas across all major online storefront platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((plat) => (
              <button 
                key={plat.name}
                type="button"
                onClick={() => setSelectedPlatform(plat.name)}
                className={`p-5 rounded-2xl border text-left transition duration-300 cursor-pointer flex flex-col justify-between h-44 group ${
                  selectedPlatform === plat.name 
                    ? 'bg-gradient-to-br from-indigo-950 to-slate-950 border-brand-teal ring-1 ring-brand-teal/20 shadow-lg shadow-brand-teal/5' 
                    : 'bg-slate-900/40 border-indigo-950 hover:bg-slate-900/70 hover:border-indigo-900'
                }`}
              >
                <div className="space-y-1.5 text-left">
                  <div className="flex justify-between items-center text-left">
                    <span className="text-sm font-extrabold text-white group-hover:text-brand-teal transition uppercase font-mono">{plat.name}</span>
                    <ArrowUpRight className={`w-4 h-4 transition ${selectedPlatform === plat.name ? 'text-brand-teal' : 'text-slate-600'}`} />
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal font-sans font-normal line-clamp-4 text-left">
                    {plat.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-indigo-950/50 mt-1 w-full">
                  <span className="text-[9px] text-brand-teal tracking-widest font-bold uppercase block">{plat.stats}</span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-brand-teal uppercase bg-brand-teal/10 px-3.5 py-1 rounded-full border border-brand-teal/20">TARGET VERTICALS MATRIX</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
              Ecommerce Industries We Work With
            </h2>
            <p className="text-sm text-slate-400 font-normal leading-relaxed font-sans text-left">
              Each product sector demands specialized schema files, localized tax alignments, customized Advantage+ dynamic feed options, and tailored review curation structures. Select your industry to view details.
            </p>

            {/* Mobile / desktop vertical selector */}
            <div className="space-y-1.5 select-none text-left">
              {industries.map((ind, iIdx) => (
                <button
                  key={iIdx}
                  type="button"
                  onClick={() => setSelectedIndustry(iIdx)}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs font-mono font-bold flex justify-between items-center transition cursor-pointer ${
                    selectedIndustry === iIdx 
                      ? 'bg-slate-900 border-brand-teal text-white' 
                      : 'bg-slate-950/20 border-indigo-950/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="truncate">{ind.name}</span>
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="text-[9.5px] text-brand-teal tracking-wider">{ind.cases}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

          </div>

          <div className="lg:col-span-1" />

          {/* Industry detail active display */}
          <div className="lg:col-span-6 relative">
            <div className={`p-8 rounded-3xl bg-gradient-to-b ${industries[selectedIndustry].bg} border border-indigo-900/60 shadow-2xl space-y-6 min-h-[360px] flex flex-col justify-between text-left`}>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-xs font-black uppercase text-white font-mono tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    {industries[selectedIndustry].name}
                  </span>
                  <span className="text-[10px] text-brand-teal uppercase font-black tracking-wider bg-brand-teal/10 px-2 rounded font-mono">
                    {industries[selectedIndustry].cases}
                  </span>
                </div>

                <div className="space-y-3 font-mono">
                  <span className="text-[10.5px] text-slate-400 block uppercase font-bold">Custom Operational Features:</span>
                  <p className="text-sm text-slate-200 leading-relaxed font-sans">
                    {industries[selectedIndustry].desc}
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <span className="text-[9px] text-slate-450 block uppercase tracking-wider font-mono">Verified Performance Index:</span>
                <div className="flex items-start space-x-2 text-xs text-brand-teal font-extrabold font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Configured to slash baseline customer CAC indexes by an average of -25% within 45 days.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SYSTEMATIC PROCESS */}
      <section className="py-20 bg-[#040716] border-y border-indigo-950 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">MILESTONE BLUEPRINTS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Our Ecommerce Growth Process</h2>
          <p className="text-slate-440 text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            A structured, multi-phase timeline to guarantee your organic and paid acquisition efforts drive predictable transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-xs text-left">
          {processSteps.map((prc, idx) => (
            <div key={idx} className="bg-[#0b0e20] border border-indigo-950 p-6 rounded-xl flex flex-col justify-between min-h-[220px]">
              <div className="space-y-3.5 text-left">
                <span className="text-4xl font-black text-brand-teal block">Phase {idx + 1}</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">{prc.step}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans font-normal text-left">{prc.desc}</p>
              </div>
              <span className="text-[9px] text-slate-500 block pt-3 border-t border-indigo-950/80 font-mono text-left">KPI COMPLIANT VERIFIED</span>
            </div>
          ))}
        </div>
      </section>

      {/* ECOMMERCE SEO SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-indigo-400 uppercase bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20">SEO CAPABILITY HIGHLIGHT</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
              Ecommerce SEO That Drives Long-Term Sales
            </h2>
            <p className="text-sm text-slate-350 leading-relaxed font-sans">
              Dating platforms or local services websites rely heavily on local geo coordinates, but digital shops need scalable organic product sitemaps to secure orders. Our Ecommerce SEO solutions optimize collection schemas, clear critical technical metadata bugs, edit duplicate tags, and construct relevant backlink nodes to let search engines show your listing.
            </p>
            <ul className="space-y-2 text-[11px] text-slate-400 font-mono">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Collection / Product specific SEO audits</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Automatic structured schema template files injections</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Rich snippet parameters configured to display product pricing directly on search lists</span>
              </li>
            </ul>
          </div>

          {/* Interactive display node for Technical SEO indexing metrics */}
          <div className="lg:col-span-6 bg-slate-950 border border-indigo-950 rounded-3xl p-6 relative">
            <div className="flex justify-between items-center pb-3 border-b border-indigo-900/40 mb-4 font-mono text-xs">
              <span className="text-brand-teal font-extrabold uppercase">SEO Organic Visibility Index</span>
              <span className="text-[9.5px] text-slate-500">REAL-TIME MONITOR</span>
            </div>
            
            <div className="space-y-4">
              
              {/* Stat Card 1 */}
              <div className="bg-[#040716] p-4 rounded-xl border border-indigo-950 flex justify-between items-center">
                <div className="text-left font-mono">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">1st Page Indexed Product Keywords</span>
                  <span className="text-base font-bold text-white font-mono block">1,420+ keywords</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-500/10 py-1 px-2.5 rounded-full">+315% boost</span>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-[#040716] p-4 rounded-xl border border-indigo-950 flex justify-between items-center">
                <div className="text-left font-mono">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold font-mono">Organic Sales Revenue Share</span>
                  <span className="text-base font-bold text-white font-mono block">42.8% of Gross sales</span>
                </div>
                <span className="text-xs font-bold text-brand-teal font-mono bg-brand-teal/10 py-1 px-2.5 rounded-full">Primary scale</span>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-[#040716] p-4 rounded-xl border border-indigo-950 flex justify-between items-center">
                <div className="text-left font-mono">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Average CTR indexes</span>
                  <span className="text-base font-bold text-white font-mono block">5.4% click-through-ratio</span>
                </div>
                <span className="text-xs font-bold text-sky-400 font-mono bg-sky-500/10 py-1 px-2.5 rounded-full">AOV aligned</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CONVERSION OPTIMIZATION SECTION */}
      <section className="py-20 bg-[#090e1d]/45 border-y border-indigo-950/60 font-mono text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Conversion Bar Chart (Custom SVG implementation for aesthetic style) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-slate-950 rounded-3xl p-6 border border-indigo-950 shadow-2xl relative">
                
                <div className="flex justify-between items-center pb-3 border-b border-indigo-900/40 mb-6 font-mono text-xs">
                  <span className="text-brand-teal font-extrabold uppercase">FUNNEL DROPOFF RECOVERY WAVE</span>
                  <span className="text-[10px] text-slate-500">CRO RECONSTRUCTIONS</span>
                </div>

                {/* Simulated Custom CSS/SVG diagram of shoppers retention */}
                <div className="space-y-4">
                  
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="flex justify-between items-center text-[10.5px] text-slate-400 mb-1">
                      <span>Product Page Viewers</span>
                      <span>100% (Baseline)</span>
                    </div>
                    <div className="w-full h-2 bg-indigo-950/40 rounded-full overflow-hidden border border-indigo-900/10">
                      <div className="h-full bg-slate-300 w-full rounded-full" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="flex justify-between items-center text-[10.5px] text-slate-400 mb-1">
                      <span>Added Products To Cart</span>
                      <span className="text-indigo-400 font-bold block">35.4% (AKGLS Optimized)</span>
                    </div>
                    <div className="w-full h-2 bg-indigo-950/40 rounded-full overflow-hidden border border-indigo-900/10">
                      <div className="h-full bg-indigo-500 w-[35.4%] rounded-full" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="flex justify-between items-center text-[10.5px] text-slate-400 mb-1">
                      <span>Initiated Core Checkouts</span>
                      <span className="text-sky-400 font-bold block">18.2% (AKGLS Optimized)</span>
                    </div>
                    <div className="w-full h-2 bg-indigo-950/40 rounded-full overflow-hidden border border-indigo-900/10">
                      <div className="h-full bg-sky-400 w-[18.2%] rounded-full" />
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative font-mono">
                    <div className="flex justify-between items-center text-[10.5px] font-bold text-brand-teal mb-1">
                      <span>Completed Store Purchase</span>
                      <span className="text-brand-teal font-bold block">4.8% Completed (Industry avg is ~1.5%)</span>
                    </div>
                    <div className="w-full h-2.5 bg-indigo-955 bg-indigo-950 rounded-full overflow-hidden border border-brand-teal/20">
                      <div className="h-full bg-brand-teal w-[48%] rounded-full" />
                    </div>
                  </div>

                </div>

                <div className="mt-6 p-3 bg-brand-teal/5 border border-brand-teal/20 rounded-xl flex items-center justify-between text-[11px] text-brand-teal font-extrabold leading-tight">
                  <span>Average conversion multipliers:</span>
                  <span>+3.2x Revenue lift</span>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-teal uppercase bg-brand-teal/10 px-3.5 py-1 rounded-full border border-brand-teal/20">CRO CAPABILITY DETAILS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                Increase Conversions & Average Order Value
              </h2>
              <p className="text-sm text-slate-350 leading-relaxed font-sans">
                Getting traffic is only half the battle. If your shop suffers from slow server lags, complicated shipping fields, or unclear product guarantees, shoppers abandon carts immediately. Our CRO solutions optimize mobile checkout lines, program intelligent product cross-sale recommendations, configure personalized gift sliders, and deploy real-time cart recovery automation loops.
              </p>
              <ul className="space-y-2 text-[11px] text-slate-400">
                <li className="flex items-center space-x-1.5">
                  <Check className="w-4 h-4 text-brand-teal animate-pulse" />
                  <span>One-click checkout optimizations to skip repetitive inputs</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Interactive product catalog sliders tracking shopper histories</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* AI-POWERED ECOMMERCE GROWTH SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold text-brand-teal uppercase bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">⭐ FUTURE COMPATIBLE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
              AI-Powered Ecommerce Growth Solutions
            </h2>
            <p className="text-sm text-slate-350 leading-relaxed font-sans">
              Modern digital shoppers are transitioning from basic keywords searches to conversational instructions inside ChatGPT, Gemini, and Siri models. Our teams format product data files, structure schema architectures, write accurate inventory details, and link semantic databases so AI search assistants handpick your store listings as the top selection.
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950 font-mono text-[10.5px]">
              <span className="text-brand-teal block uppercase font-bold mb-1">AI Commerce Compatibility checklist:</span>
              <ul className="space-y-1 text-slate-400 list-disc pl-4 text-left leading-tight font-sans">
                <li>Pre-mapped semantic product descriptions formatted safely for LLM crawling</li>
                <li>Real-time JSON sitemap metadata synchronization for immediate price validations</li>
                <li>Embedded natural search variables mapping daily query parameters</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6 relative">
            <div className="flex justify-between items-center pb-2.5 border-b border-indigo-900/40 mb-4 text-xs font-mono">
              <span className="text-sky-450 text-sky-400 font-extrabold uppercase">ChatGPT / Perplexity Search Mockup</span>
              <span className="text-[10px] bg-sky-500/10 text-sky-400 py-0.5 px-2 rounded-full font-bold">GEO VISIBILITY</span>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-950 p-3 rounded-lg border border-indigo-950 text-left">
                <span className="text-[9.5px] text-slate-500 block uppercase font-bold">Shopper Input Option:</span>
                <p className="text-slate-300 italic text-[11px] font-sans">"Compare high-quality organic cotton yoga mats with instant shipping in Noida"</p>
              </div>

              <div className="bg-[#040716] p-3.5 rounded-lg border border-indigo-900/40 text-left space-y-2">
                <div className="flex justify-between items-center text-[9.5px]">
                  <span className="text-brand-teal font-extrabold uppercase flex items-center space-x-1">
                    <Bot className="w-3.5 h-3.5 text-brand-teal" />
                    <span>AI Search Engine Output</span>
                  </span>
                  <span className="text-slate-500">100% Relevance index</span>
                </div>
                
                <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                  Based on semantic reviews and verified sitemaps data, <strong className="text-white">Your Brand's Store</strong> ranks first. Built with sustainable cotton, rated 4.9 stars across 1,200 purchases, and ships directly:
                </p>

                <div className="border border-brand-teal/20 bg-brand-teal/5 p-2 rounded text-[10px] text-brand-teal font-extrabold">
                  ★ Selected recommendation: Premium Yoga Mat ($45) - Instant local checkout
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MARKETPLACE GROWTH SECTION */}
      <section className="py-20 bg-[#090e1d]/45 border-y border-indigo-950 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 bg-slate-950 border border-indigo-950 p-6 rounded-3xl relative">
              <div className="flex justify-between items-center pb-2.5 border-b border-indigo-900/40 mb-4 text-xs font-mono">
                <span className="text-brand-teal font-extrabold uppercase font-mono">OMNICHANNEL DIRECTORIES MATRIX</span>
                <span className="text-[9.5px] text-slate-500">MARKETPLACE INDEXING</span>
              </div>

              <div className="space-y-3">
                <div className="bg-[#030713] p-3 rounded-lg border border-indigo-950 flex justify-between items-center text-[11px]">
                  <span className="text-white font-bold uppercase font-mono">Amazon A10 Keyword Density</span>
                  <span className="text-brand-teal font-mono font-bold">+184% Visibility lift</span>
                </div>
                <div className="bg-[#030713] p-3 rounded-lg border border-indigo-950 flex justify-between items-center text-[11px]">
                  <span className="text-white font-bold uppercase font-mono">Flipkart Sponsored Campaigns ROAS</span>
                  <span className="text-brand-teal font-mono font-bold">5.8x Avg ROAS tracking</span>
                </div>
                <div className="bg-[#030713] p-3 rounded-lg border border-indigo-950 flex justify-between items-center text-[11px]">
                  <span className="text-white font-bold uppercase">A+ Content Visualizations indexes</span>
                  <span className="text-brand-teal font-mono font-bold">+42% Order Conversion lift</span>
                </div>
              </div>

              <span className="text-[8px] text-slate-500 block text-center uppercase mt-4 font-mono">
                *Outputs evaluated across 80+ multi-marketplace product launch campaigns.
              </span>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-teal uppercase bg-brand-teal/10 px-3.5 py-1 rounded-full border border-brand-teal/20">MARKETPLACE EXPANSIONS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                Grow Across Amazon, Flipkart & Online Marketplaces
              </h2>
              <p className="text-sm text-slate-350 leading-relaxed font-sans">
                Sellers cannot rely only on standalone frameworks if Amazon and Flipkart hold massive buyer pools. We scale product catalogs inside crowded marketplaces through Amazon A10 SEO, Sponsored Ad frameworks, High-performing A+ graphic template designs, clean reviews setups, and inventory optimization audits.
              </p>
              <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
                <li className="flex items-center space-x-1.5">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Amazon Seller Central catalog synchronization audits</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>FBA / Flipkart Smart fulfillment setup consulting</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center select-none">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">REVENUE VERIFIED RECORDS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Ecommerce Growth Success Stories</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Direct telemetry records and revenue tracking charts from real DTC store brands scaled by our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs font-mono">
          
          {/* Case Study 1 */}
          <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-indigo-950">
                <span className="text-sm font-bold text-white uppercase font-sans">1. GlowAura Beauty Cosmetics</span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 text-[9.5px] py-1 px-3.5 rounded-full uppercase font-black">
                  6.8x ROAS Scale
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-indigo-950/60 leading-tight">
                <div>
                  <span className="text-[8.5px] text-slate-500 uppercase block font-bold">Challenge:</span>
                  <p className="text-rose-400 font-sans mt-0.5">Media spend leaks on untargeted lookalikes with 1.2% checkout conversion rates.</p>
                </div>
                <div>
                  <span className="text-[8.5px] text-slate-500 uppercase block font-bold">Growth Strategy:</span>
                  <p className="text-brand-teal font-sans mt-0.5">Advantage+ product catalog syncs, mobile-first one-page checkout, automated cart email workflows.</p>
                </div>
              </div>

              <ul className="space-y-1.5 text-slate-400 text-[10.5px]">
                <li>• Revenue improvements: From $24k/mo to $185k/mo within 90 days.</li>
                <li>• Customer Average Order Value: Increased from $35 to $54.</li>
                <li>• Abandoned Cart Recovery rate: Boosted up to 24.8%.</li>
              </ul>
            </div>

            <span className="text-[9px] text-slate-500 block uppercase font-mono">★ RESULTS MANIFEST VERIFIED</span>
          </div>

          {/* Case Study 2 */}
          <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-indigo-950">
                <span className="text-sm font-bold text-white uppercase font-sans">2. ApexFit Athletics Gear</span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 text-[9.5px] py-1 px-3.5 rounded-full uppercase font-black">
                  +315% Organic Revenue
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-indigo-950/60 leading-tight">
                <div>
                  <span className="text-[8.5px] text-slate-500 uppercase block font-bold">Challenge:</span>
                  <p className="text-rose-400 font-sans mt-0.5">Complete reliance on soaring Google PPC spend with zero organic visibility index.</p>
                </div>
                <div>
                  <span className="text-[8.5px] text-slate-500 uppercase block font-bold">Growth Strategy:</span>
                  <p className="text-brand-teal font-sans mt-0.5">Product detail SEO structures, schema markup integration, technical collection speed optimization.</p>
                </div>
              </div>

              <ul className="space-y-1.5 text-slate-400 text-[10.5px]">
                <li>• Organic monthly traffic: Boosted from 4,500 visitors to 62,000.</li>
                <li>• Broad keyword indexings: 840+ product terms on Google Page 1.</li>
                <li>• Blended ad-spend margin improvements: Slotted +30% structural profit.</li>
              </ul>
            </div>

            <span className="text-[9px] text-slate-500 block uppercase font-mono">★ CLIENT TELEMETRY ENCRYPTED</span>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 bg-[#061022]/40 border-y border-indigo-950/60 font-mono text-left">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">WHY AKGLS GROUP</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center leading-none">
              Why Partner With Us For Ecommerce Scale?
            </h2>
            <p className="text-slate-405 text-slate-400 text-sm max-w-2xl mx-auto text-center font-normal">
              We do not track outdated vanity metrics. Our models calculate net profit margins, dynamic CAC rates, blended ROAS parameters, and permanent organic visitor index streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            
            <div className="p-5 bg-slate-950 rounded-xl border border-indigo-950 shadow-lg space-y-3 text-left">
              <span className="text-brand-teal uppercase font-black block tracking-widest text-[9.5px]">DTC Specialist Marketers</span>
              <p className="text-slate-400 leading-relaxed font-sans">
                Our advisors have spent years scaling multi-million dollar store operations across Shopify, Amazon, and WooCommerce ecosystems.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-indigo-950 shadow-lg space-y-3 text-left animate-pulse">
              <span className="text-brand-teal uppercase font-black block tracking-widest text-[9.5px]">Conversion Obsessed AI Systems</span>
              <p className="text-slate-400 leading-relaxed font-sans">
                We combine modern AI search SEO parameters with localized CRO checkout code to convert cold clicks into recurring checkouts.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-indigo-950 shadow-lg space-y-3 text-left">
              <span className="text-brand-teal uppercase font-black block tracking-widest text-[9.5px]">Automated Lead Pipelines</span>
              <p className="text-slate-400 leading-relaxed font-sans font-mono">
                From Klaviyo cart automated emails to dynamic WhatsApp support widgets, we build hands-free retention structures on autopilot.
              </p>
            </div>

            <div className="p-5 bg-slate-950 rounded-xl border border-indigo-950 shadow-lg space-y-3 text-left">
              <span className="text-brand-teal uppercase font-black block tracking-widest text-[9.5px]">Transparent SLA & Metrics</span>
              <p className="text-slate-400 leading-relaxed font-sans">
                No complex reports or vague jargon. You will witness actual product checkouts, dynamic spend ROAS, and organic transaction graphs in real-time.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 text-center font-mono">
        <div className="space-y-4 mb-12 select-none">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-sans">Ecommerce Tools & Technologies We Utilize</h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto text-center font-normal">
            We integrate standard platforms, leading performance networks, data logging systems, and AI models to scale operations cleanly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-[10px] text-slate-300">
          {['Shopify', 'WooCommerce', 'Klaviyo', 'Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'ChatGPT', 'Gemini AI', 'Google Merchant Center', 'Adobe Commerce', 'Google Analytics 4', 'Microsoft Clarity', 'Zapier'].map((tool, idx) => (
            <span key={idx} className="bg-[#0b0e20] border border-indigo-950 px-4 py-2.5 rounded-full font-bold uppercase tracking-wider block hover:border-brand-teal hover:text-white transition duration-300">
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* FLEXIBLE ECOMMERCE GROWTH PACKAGES */}
      <section className="py-20 bg-[#090e1d]/45 border-y border-indigo-950 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">TRANSPARENT TIER PACKAGES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans text-center">
              Flexible Ecommerce Growth Packages
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-normal">
              Select an operation scale that lines up with your vertical business coordinates. Custom enterprise roadmaps available upon direct call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
            
            {/* Tier 1 */}
            <div className="bg-slate-950 border border-indigo-950 p-6 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-left">
                <span className="text-[10px] text-slate-500 uppercase block font-black">Startup Setup Scale</span>
                <span className="text-2xl font-black text-white block">$1,450 / mo</span>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed text-left">
                  Bespoke setup designed for emerging DTC brands seeking consistent monthly consumer transactions.
                </p>
                <div className="h-px bg-indigo-950" />
                <ul className="space-y-2 text-[10.5px] text-slate-400">
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Core Shopify/Woo SEO optims</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Monthly keyword monitoring logs</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Google Dynamic Shopping Ads setup</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Klaviyo abandonment emails integration</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Direct transaction reporting matrices</span></li>
                </ul>
              </div>
              <a href="#free-ecommerce-audit-form" className="bg-brand-teal/10 hover:bg-brand-teal text-brand-teal hover:text-slate-950 border border-brand-teal/30 p-3 rounded-xl transition duration-300 font-black text-center block uppercase tracking-wider">
                Claim Startup Scale
              </a>
            </div>

            {/* Tier 2 */}
            <div className="bg-gradient-to-b from-[#0e132c] to-slate-950 border-2 border-brand-teal p-6 rounded-2xl flex flex-col justify-between space-y-6 relative shadow-xl shadow-brand-teal/5">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-teal text-slate-950 font-black tracking-widest uppercase text-[8.5px] py-1 px-3.5 rounded-full">
                ★ BEST VALUE SCALE
              </span>
              <div className="space-y-4 text-left">
                <span className="text-[10px] text-brand-teal uppercase block font-black">Growth Commerce Scale</span>
                <span className="text-2xl font-black text-white block">$2,950 / mo</span>
                <p className="text-[11px] text-slate-300 font-sans leading-relaxed text-left font-normal">
                  Our gold standard framework. Combines persistent organic SEO assets, active PPC ad setups, and complete CRO audits.
                </p>
                <div className="h-px bg-indigo-900/40" />
                <ul className="space-y-2 text-[10.5px] text-slate-350 font-sans font-normal">
                  <li className="flex items-center space-x-1 font-mono text-[10.5px] font-bold text-slate-300"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Advanced Multichannel SEO structuring</span></li>
                  <li className="flex items-center space-x-1 font-mono text-[10.5px] font-bold text-slate-300"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Comprehensive Meta & Google Ad management</span></li>
                  <li className="flex items-center space-x-1 font-mono text-[10.5px] font-bold text-slate-300"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Full Klaviyo email automation flow builds</span></li>
                  <li className="flex items-center space-x-1 font-mono text-[10.5px] font-bold text-slate-300"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Interactive CRO checkout speed optimization</span></li>
                  <li className="flex items-center space-x-1 font-mono text-[10.5px] font-bold text-slate-300"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Active Amazon/Flipkart listings audits</span></li>
                </ul>
              </div>
              <a href="#free-ecommerce-audit-form" className="bg-brand-teal text-slate-950 font-black p-3.5 rounded-xl transition duration-300 text-center block uppercase tracking-wider hover:bg-white">
                Claim Growth Commerce Scale
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-slate-950 border border-indigo-950 p-6 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-left">
                <span className="text-[10px] text-slate-500 uppercase block font-black">Enterprise Scale Suite</span>
                <span className="text-2xl font-black text-white block">$5,500+ / mo</span>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed text-left">
                  Tailored commercial operation suite for high-volume retail franchises and corporate networks.
                </p>
                <div className="h-px bg-indigo-950" />
                <ul className="space-y-2 text-[10.5px] text-slate-400">
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Headless storefront engineering (Next.js/React)</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">AI Search Engine Optimization & GEO registration</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Consolidated multi-warehouse marketplace systems</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Dedicated Fractional CMO weekly advisory sessions</span></li>
                  <li className="flex items-center space-x-1"><Check className="w-4 h-4 text-brand-teal shrink-0" /><span className="truncate">Complete database custom security encryptions</span></li>
                </ul>
              </div>
              <a href="#free-ecommerce-audit-form" className="bg-slate-900 text-slate-350 hover:text-white border border-indigo-950 hover:border-brand-teal/30 p-3 rounded-xl transition duration-350 font-black text-center block uppercase tracking-wider">
                Claim Enterprise Scale Info
              </a>
            </div>

          </div>

          <div className="mt-8 text-center">
            <a href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} className="text-[11.5px] text-brand-teal font-extrabold hover:underline">
              Need a completely custom revenue alignment? Direct dial: {CONTACT_NUMBER}
            </a>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center select-none">
          <span className="text-[10px] text-brand-teal font-bold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">FAQ ACCORDION</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Frequently Asked Questions</h2>
          <p className="text-slate-404 text-slate-400 text-sm max-w-lg mx-auto text-center font-normal">
            Understand key aspects of digital commerce and organic performance loops.
          </p>
        </div>

        <div className="space-y-3.5 select-none">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#0b0e20] border border-indigo-950 p-4.5 rounded-xl transition hover:border-indigo-900/60"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left text-xs sm:text-sm font-bold text-white transition font-mono cursor-pointer"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-brand-teal transition duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[11.5px] sm:text-xs text-slate-400 leading-relaxed pt-3 border-t border-indigo-950/60 mt-3 font-sans text-left">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FREE ECOMMERCE GROWTH AUDIT FROM (INTERACTIVE SATE INCLUDES) */}
      <section id="free-ecommerce-audit-form" className="py-20 bg-slate-950 text-left font-mono border-t border-indigo-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Audit Form Description */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 rounded-full text-[9.5px] font-bold text-brand-teal uppercase tracking-widest font-mono">
                <Info className="w-3.5 h-3.5 text-brand-teal" />
                <span>Audit Specifications Checklist</span>
              </div>

              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-none font-sans text-left">
                Get Your Free Ecommerce Growth Audit
              </h2>

              <p className="text-xs text-slate-400 font-normal leading-relaxed text-left font-mono">
                We analyze your technical storefront listings, crawl diagnostic speed bugs, check meta tags consistency, audit competitor Google merchant shopping feeds, and evaluate your AI voice search compatibility rates.
              </p>

              <div className="space-y-2.5 text-[10.5px] text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Comprehensive store speed audit catalog logs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Detailed competitor product listings comparisons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Free actionable CRO upgrade metrics guidelines</span>
                </div>
              </div>

            </div>

            {/* Audit Form Interactive Field Block */}
            <div className="lg:col-span-7 bg-[#0b0e20] border border-indigo-950 rounded-3xl p-6 relative">
              
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider text-center border-b border-indigo-900/40 pb-3 mb-5">
                Audit Registry Terminal
              </h3>

              <AnimatePresence mode="wait">
                {!auditSubmitted ? (
                  <motion.form 
                    onSubmit={handleAuditSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 text-xs font-mono"
                  >
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-slate-400 uppercase font-black text-[9px] block">Store / Brand Name:</label>
                        <input 
                          type="text" 
                          required
                          value={auditForm.storeName}
                          onChange={(e) => setAuditForm({...auditForm, storeName: e.target.value})}
                          placeholder="e.g. ApexFit Athletics"
                          className="w-full bg-slate-950 border border-indigo-950 focus:border-brand-teal p-3 rounded-xl text-white focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <label className="text-slate-400 uppercase font-black text-[9px] block">Store Website URL:</label>
                        <input 
                          type="url" 
                          required
                          value={auditForm.websiteUrl}
                          onChange={(e) => setAuditForm({...auditForm, websiteUrl: e.target.value})}
                          placeholder="https://apexfit.com"
                          className="w-full bg-slate-950 border border-indigo-950 focus:border-brand-teal p-3 rounded-xl text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-slate-400 uppercase font-black text-[9px] block">Store Platform:</label>
                        <select
                          value={auditForm.platform}
                          onChange={(e) => setAuditForm({...auditForm, platform: e.target.value})}
                          className="w-full bg-slate-950 border border-indigo-950 p-3 rounded-xl text-white focus:outline-none cursor-pointer"
                        >
                          <option value="Shopify">Shopify</option>
                          <option value="WooCommerce">WooCommerce</option>
                          <option value="Magento">Magento</option>
                          <option value="BigCommerce">BigCommerce</option>
                          <option value="Wix Ecommerce">Wix Ecommerce</option>
                          <option value="Custom Ecommerce">Custom Store</option>
                        </select>
                      </div>
                      <div className="space-y-1.5 text-left">
                        <label className="text-slate-400 uppercase font-black text-[9px] block font-mono">Monthly Revenue:</label>
                        <select
                          value={auditForm.revenueRange}
                          onChange={(e) => setAuditForm({...auditForm, revenueRange: e.target.value})}
                          className="w-full bg-slate-950 border border-indigo-950 p-3 rounded-xl text-white focus:outline-none cursor-pointer"
                        >
                          <option value="Under $10k / month">Under $10k / month</option>
                          <option value="$10k - $50k / month">$10k - $50k / month</option>
                          <option value="$50k - $200k / month">$50k - $200k / month</option>
                          <option value="Over $200k / month">Over $200k / month</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-slate-400 uppercase font-black text-[9px] block">Contact Email:</label>
                        <input 
                          type="email" 
                          required
                          value={auditForm.email}
                          onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                          placeholder="founder@apexfit.com"
                          className="w-full bg-slate-950 border border-indigo-950 focus:border-brand-teal p-3 rounded-xl text-white focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <label className="text-slate-400 uppercase font-black text-[9px] block">Phone Number:</label>
                        <input 
                          type="tel" 
                          value={auditForm.phone}
                          onChange={(e) => setAuditForm({...auditForm, phone: e.target.value})}
                          placeholder="+1 555 123 4567"
                          className="w-full bg-slate-950 border border-indigo-950 focus:border-brand-teal p-3 rounded-xl text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-brand-teal text-slate-955 hover:bg-white text-slate-950 font-black p-4 rounded-xl transition duration-300 uppercase tracking-widest text-xs flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Free Audit Request</span>
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-8 text-center bg-slate-950 rounded-2xl border border-brand-teal/30 space-y-4"
                  >
                    <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal mx-auto border border-brand-teal/20 animate-bounce">
                      <CheckCircle2 className="w-6 h-6 text-brand-teal" />
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-white uppercase tracking-wider font-mono">Store Audit Proposal Registered!</h4>
                      <p className="text-xs text-slate-400 font-sans">
                        Our technicians will perform dynamic speed crawls and sitemap metadata reviews for <span className="font-extrabold text-brand-teal">{auditForm.storeName}</span> ({auditForm.websiteUrl}) and return metrics in 24 hours.
                      </p>
                    </div>

                    <div className="bg-[#040716] text-[10.5px] p-3 rounded-lg border border-indigo-950 font-mono text-slate-500">
                      <span>Assigned Expert ID: AKGLS-SEO-942</span>
                    </div>

                    <button 
                      type="button"
                      onClick={() => setAuditSubmitted(false)}
                      className="text-[10px] text-zinc-500 hover:text-zinc-300 font-extrabold underline uppercase tracking-wide cursor-pointer font-mono"
                    >
                      Reset Form Parameters
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* BLOG / ARTICLE CARDS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center select-none">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">INDUSTRY KNOWLEDGE GRAPH</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Ecommerce Growth Insights</h2>
          <p className="text-slate-405 text-slate-400 text-sm max-w-xl mx-auto text-center font-normal">
            Weekly scaling playbooks compiled by digital commerce coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          
          {/* Article 1 */}
          <div className="bg-[#0b0e20] border border-indigo-950 p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-left">
              <span className="text-[9.5px] text-brand-teal uppercase font-black tracking-widest block font-mono">★ SEO & Sitemaps</span>
              <h3 className="text-lg font-bold text-white hover:text-brand-teal transition font-sans text-left leading-tight">Ecommerce SEO Guide</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left">How to optimize collection categories structural flows to rank first page without heavy ad dependancies.</p>
            </div>
            <a href="#free-ecommerce-audit-form" className="text-[10.5px] text-brand-teal hover:underline font-extrabold flex items-center space-x-1.5">
              <span>Read Playbook Details</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </a>
          </div>

          {/* Article 2 */}
          <div className="bg-[#0b0e20] border border-indigo-950 p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-left">
              <span className="text-[9.5px] text-brand-teal uppercase font-black block font-mono">★ Platforms Optim</span>
              <h3 className="text-lg font-bold text-white hover:text-brand-teal transition font-sans text-left leading-tight">Shopify Growth Strategies</h3>
              <p className="text-slate-400 leading-relaxed font-sans font-normal text-left">Configuring Liquid theme scripts and cart field compression formulas to shave load lag speedups.</p>
            </div>
            <a href="#free-ecommerce-audit-form" className="text-[10.5px] text-brand-teal hover:underline font-extrabold flex items-center space-x-1.5">
              <span>Read Playbook Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Article 3 */}
          <div className="bg-[#0b0e20] border border-indigo-950 p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-left">
              <span className="text-[9.5px] text-brand-teal uppercase font-black block">★ AI & Conversational</span>
              <h3 className="text-lg font-bold text-white hover:text-brand-teal transition font-sans text-left leading-tight">AI in Ecommerce Marketing</h3>
              <p className="text-slate-404 text-slate-400 leading-relaxed font-sans font-normal text-left">Adjusting product databases schema markups so Siri, ChatGPT and Gemini identify and suggest listings.</p>
            </div>
            <a href="#free-ecommerce-audit-form" className="text-[10.5px] text-brand-teal hover:underline font-extrabold flex items-center space-x-1.5 uppercase font-mono">
              <span>Read Playbook Details</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </a>
          </div>

        </div>
      </section>

      {/* FINAL CALL-TO-ACTION SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#050917] to-slate-950 border-t border-indigo-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#02050f]/65 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          
          <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20 uppercase tracking-widest font-mono">
            ★ REVENUE GENERATIVE CONTRACTS ONLINE
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none font-sans text-center">
            Ready to Scale Your Ecommerce Business?
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-mono text-center font-normal">
            Bypass generic marketing agencies. Connect directly with specialized digital commerce developers, custom schema specialists, and ROAS performance scaling veterans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 select-none font-mono text-xs">
            <a 
              href="#free-ecommerce-audit-form" 
              className="bg-brand-teal text-slate-950 hover:bg-white font-extrabold py-4 px-8 rounded-xl transition duration-300 w-full sm:w-auto uppercase block tracking-wider"
            >
              Request Free Commerce Audit
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-950 hover:bg-zinc-900 border border-indigo-950 text-slate-200 py-4 px-8 rounded-xl transition duration-300 w-full sm:w-auto flex items-center justify-center space-x-2 font-bold uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 text-brand-teal" />
              <span>Talk with growth expert</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-10 text-[10px] text-zinc-500 uppercase font-bold tracking-wider select-none font-mono">
            <span className="flex items-center space-x-1"><CheckCircle2 className="w-4 h-4 text-brand-teal" /><span>Ecommerce growth experts</span></span>
            <span className="flex items-center space-x-1"><CheckCircle2 className="w-4 h-4 text-brand-teal" /><span>AI-powered analytics</span></span>
            <span className="flex items-center space-x-1"><CheckCircle2 className="w-4 h-4 text-brand-teal" /><span>Full reporting manifests</span></span>
          </div>

        </div>
      </section>

      {/* FOOTER CO-PRINTS (LINK TEMPLATE CAPTURED) */}
      <footer className="bg-slate-950 py-10 border-t border-indigo-950 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-[10.5px] text-slate-500 space-y-4 sm:space-y-0">
          
          <div className="flex flex-col items-center sm:items-start text-center">
            <span className="text-slate-400 font-extrabold uppercase">AKGLS Group Ecommerce Scaling Division</span>
            <span>All schema configurations and technical sitemap blueprints are copyright © 2026.</span>
          </div>

          <div className="flex gap-4">
            <button onClick={onBackToHome} className="text-brand-teal hover:underline font-extrabold cursor-pointer">
              Home Page
            </button>
            <a href={WHATSAPP_LINK} className="text-slate-450 hover:text-white">WhatsApp desk</a>
            <a href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} className="text-slate-450 hover:text-white">Call desk</a>
          </div>

        </div>
      </footer>

      {/* SCHEMA MARKUP CODE COPY BLOCKS (RECOMMENDED SO AUDITORS SEE OUR SITES COMPLY WITH GOOGLE) */}
      <section className="py-12 bg-[#02050f] border-t border-indigo-950/60 font-mono text-[10.5px] text-left">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h4 className="text-sm font-bold text-white uppercase font-sans">Structured JSON-LD Schema Markups</h4>
            <p className="text-[10px] text-slate-500 uppercase font-mono">Copied directly from templates for Google's Structured Data Testing Tool.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-[10px]">
            
            {/* Schema block 1 */}
            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/85 space-y-3">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-slate-500 pb-2 border-b border-indigo-950/50">
                <span>Organization Schema Template</span>
                <button 
                  type="button" 
                  onClick={() => copySchemaText(ecommerceSchemaTemplates.organization, 'org')}
                  className="bg-indigo-950 hover:bg-indigo-900 text-brand-teal font-extrabold tracking-wide py-0.5 px-2 rounded cursor-pointer"
                >
                  {copiedKey === 'org' ? 'COPIED!' : 'COPY CODE'}
                </button>
              </div>
              <pre className="text-slate-400 overflow-x-auto p-2 bg-[#030713] rounded text-[9.5px]">
                {ecommerceSchemaTemplates.organization}
              </pre>
            </div>

            {/* Schema block 2 */}
            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/85 space-y-3">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-slate-500 pb-2 border-b border-indigo-955 border-b-indigo-950/50">
                <span>DTC Growth Service Schema Template</span>
                <button 
                  type="button" 
                  onClick={() => copySchemaText(ecommerceSchemaTemplates.service, 'srv')}
                  className="bg-indigo-950 hover:bg-indigo-900 text-brand-teal font-extrabold tracking-wide py-0.5 px-2 rounded cursor-pointer"
                >
                  {copiedKey === 'srv' ? 'COPIED!' : 'COPY CODE'}
                </button>
              </div>
              <pre className="text-slate-400 overflow-x-auto p-2 bg-[#030713] rounded text-[9.5px]">
                {ecommerceSchemaTemplates.service}
              </pre>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

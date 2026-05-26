import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Phone, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Share2,
  Layout, ArrowUpRight, Rocket, HelpCircle, ShoppingBag, ArrowDownRight,
  ChevronRight, RefreshCw, Star, Info, CheckSquare
} from 'lucide-react';

interface EcommerceSeoCaseStudyPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemasTemplates = {
  article: `{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Ecommerce SEO Case Study: 450% Traffic & 320% Revenue growth",
  "image": "https://akglsgroup.com/assets/case-studies/ecommerce-seo.jpg",
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
  "description": "How AKGLS Group scaled a premium Shopify fashion brand's organic operations, driving organic traffic from 12K to 68K visits per month in 8 months."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does ecommerce SEO take to show ranking and traffic results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compound organic ecommerce growth typically requires 4 to 6 months of structural architecture alignment, robust faceted categories optimization, and high-intent product semantic content clusters execution."
      }
    }
  ]
}`
};

export default function EcommerceSeoCaseStudyPage({ onBackToHome, openProposalForm }: EcommerceSeoCaseStudyPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Ecommerce SEO Case Study | 450% Organic Traffic Growth | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Slider State for Before/After UI
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  // ROI Calculator States
  const [calcTraffic, setCalcTraffic] = useState<number>(30000);
  const [calcAov, setCalcAov] = useState<number>(3500); // INR or global value
  const [calcConv, setCalcConv] = useState<number>(1.2); // Current conversion rate

  const currentRevenue = Math.round((calcTraffic * (calcConv / 100)) * calcAov);
  const targetRevenue = Math.round((calcTraffic * 4.5 * (3.5 / 100)) * (calcAov * 1.15));
  const netLift = targetRevenue - currentRevenue;

  // Active FAQ index selector
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Copied State
  const [copiedSchema, setCopiedSchema] = useState<string | null>(null);

  const copySchemaJson = (jsonText: string, schemaId: string) => {
    navigator.clipboard.writeText(jsonText);
    setCopiedSchema(schemaId);
    setTimeout(() => setCopiedSchema(null), 3000);
  };

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const faqData = [
    {
      q: "How long does ecommerce SEO take to build revenue momentum?",
      a: "While technical crawling optimizations produce indexing updates within weeks, compounding organic search ranking and revenue growth generally takes 3 to 6 months. This depends on page count, current authority baseline, and domain age."
    },
    {
      q: "Can SEO help reduce our paid Google and Meta Ads dependency?",
      a: "Absolutely. High-intent search traffic targeting categories and commercial comparison pages captures customers right before they buy, lowering customer acquisition cost (CAC) and protecting your margin margins long-term."
    },
    {
      q: "Is Shopify truly SEO-friendly for rapid brand scaling?",
      a: "Out of the box Shopify provides robust basic features, but specialized technical optimization is needed to manage index bloat, crawl performance of faceted navigation, speed index, and custom micro-data structuring."
    },
    {
      q: "What is AI SEO for commerce platforms?",
      a: "AI SEO focuses on formatting product databases and content nodes so AI answer generators (ChatGPT Search, Gemini, Perplexity, Google SGE/AIO) index, recommend, and citation-link your brand in response to conversational customer prompts."
    },
    {
      q: "Do you optimize category pages or focus purely on products?",
      a: "Category and Collection collections are the true powerhouse of ecommerce SEO. We cluster high-difficulty root terms on collections and link downstream product pages to maximize authority flows without cannibalizing internal keywords."
    },
    {
      q: "How do you map keywords to prevent internal keyword cannibalization?",
      a: "We deploy strict matching hierarchy systems. Commercial broad terms are mapped to main dynamic catalogs, sub-category modifiers go to filtered nested taxonomies, and narrow informational long-tails are locked into custom buying guides and comparison blogs."
    }
  ];

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Target Schema Injector */}
      <script type="application/ld+json">{schemasTemplates.article}</script>
      <script type="application/ld+json">{schemasTemplates.faq}</script>

      {/* Hero section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-900 bg-linear-to-b from-brand-navy/60 via-slate-950 to-[#030712]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[#0d0d1e]/10 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left side case info */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/15 border border-brand-orange/30 rounded-full text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> ⭐ Ecommerce SEO Success Story
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                How We Increased Ecommerce Organic Traffic by <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange via-orange-400 to-amber-300">450%</span> & Revenue by <span className="text-emerald-400">320%</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                A complete ecommerce SEO, AI SEO, technical optimization, and conversion-focused strategy that transformed a struggling Shopify luxury fashion brand into a compounding, high-performing organic sales machine.
              </p>

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div id="stat-traffic-growth" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Organic Traffic</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-orange mt-1">+450%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">12K → 68K visits/mo</div>
                </div>
                <div id="stat-revenue-growth" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Sales Growth</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">+320%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">₹2L → ₹8.4L Monthly</div>
                </div>
                <div id="stat-keywords-ranked" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Keywords Ranked</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">2,500+</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">Broad/High-Intent</div>
                </div>
                <div id="stat-cro-increase" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Conversion Rate</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">5.3X</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">0.9% → 4.8% CR Pivot</div>
                </div>
              </div>

              {/* CTA elements */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={openProposalForm}
                  className="px-8 py-4 bg-brand-orange text-white font-extrabold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 text-center flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Book Free SEO Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 text-slate-200 font-bold rounded-xl transition text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="text-emerald-400 w-5 h-5" /> Consult on WhatsApp
                </a>
              </div>
            </div>

            {/* Right side analytics dashboard mockup */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-brand-orange to-indigo-600 opacity-20 blur-xl"></div>
              
              <div className="relative bg-[#0c101d] border border-indigo-950/80 rounded-2xl p-5 shadow-2xl space-y-4">
                {/* Simulated header */}
                <div className="flex justify-between items-center border-b border-slate-850 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">Shopify Analytics • Live</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-900 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" /> +450.8% Organic
                  </span>
                </div>

                {/* Main chart representation */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Organic Search Sessions</span>
                    <span className="text-emerald-300 font-bold">68,432 / mo</span>
                  </div>
                  
                  {/* Graph */}
                  <div className="relative h-44 w-full bg-[#050812] border border-slate-800/60 rounded-lg p-2 overflow-hidden flex flex-col justify-end">
                    {/* Horizontal grids */}
                    <div className="absolute inset-y-0 inset-x-0 flex flex-col justify-between py-2 pointer-events-none">
                      <div className="border-b border-slate-900 w-full h-0"></div>
                      <div className="border-b border-slate-900 w-full h-0"></div>
                      <div className="border-b border-slate-900 w-full h-0"></div>
                    </div>

                    {/* Gradient Area under curve */}
                    <svg className="w-full h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0,90 C 20,85 40,84 60,82 C 80,78 100,50 120,40 C 140,30 160,18 180,12 L 200,8 L 200,100 L 0,100 Z" 
                        fill="url(#heroChartGrad)" 
                      />
                      <path 
                        d="M 0,90 C 20,85 40,84 60,82 C 80,78 100,50 120,40 C 140,30 160,18 180,12 L 200,8" 
                        fill="none" 
                        stroke="#f97316" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                      />
                      <circle cx="200" cy="8" r="4.5" fill="#f97316" className="animate-ping" style={{ transformOrigin: '200px 8px' }} />
                      <circle cx="200" cy="8" r="3" fill="#f97316" />
                    </svg>

                    {/* Bottom labels */}
                    <div className="flex justify-between text-[9px] font-mono text-slate-500 pt-2 border-t border-slate-900 mt-1">
                      <span>Oct (12.2K)</span>
                      <span>Jan (28.4K)</span>
                      <span>Mar (49.1K)</span>
                      <span>May (68.4K)</span>
                    </div>
                  </div>
                </div>

                {/* Secondary indicators */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#050812] border border-slate-850 p-3 rounded-lg text-left">
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-widest font-bold">AOV Uplift</span>
                    <div className="text-lg font-bold text-slate-100 mt-0.5">₹3,980.00</div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold mt-0.5 inline-block">+15.4% Upsell AI</span>
                  </div>
                  <div className="bg-[#050812] border border-slate-850 p-3 rounded-lg text-left">
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-widest font-bold">Direct ROI</span>
                    <div className="text-lg font-bold text-slate-100 mt-0.5">14.6x Return</div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold mt-0.5 inline-block">100% Organic Equity</span>
                  </div>
                </div>

                {/* Small floating tag */}
                <div className="text-[10px] text-slate-500 font-mono text-center flex items-center justify-center gap-1 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Active security sandbox & SLA compliance verified.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT OVERVIEW SECTION */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Case Target</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              About the Ecommerce Brand
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side detail explanation */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-xl font-bold text-indigo-400">The Business Overview</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                Our client is an established, high-end lifestyle fashion e-tailer specializing in premium apparel, luxury footwear, and bespoke accessories. Despite offering premium product catalogs crafted with stellar standards, they struggled with a lack of digital visibility.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Their collections were buried deep behind strong competitor catalogs. They faced declining Google organic search ranks, bloated indexing pages, slow load parameters, and zero discoverability in conversational engines.
              </p>
              <div className="p-5 bg-linear-to-r from-slate-900 to-[#0e1224] border border-slate-850 rounded-2xl flex items-start gap-4">
                <ShoppingBag className="w-10 h-10 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="text-md font-bold text-white">Target Audience Group</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Premium and luxury retail buyers searching for high-intent fashion modifiers like "luxury leather chelsea boots" or "sustainable luxury winter coats" on deep long-tail searches and voice optimization queries.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side Snapshot Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Industry</span>
                <div className="text-md font-bold text-white mt-1">Luxury Fashion Ecommerce</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Platform</span>
                <div className="text-md font-bold text-white mt-1">Shopify Plus Engine</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Region</span>
                <div className="text-md font-bold text-white mt-1">India + Global Shipports</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">SEO Duration</span>
                <div className="text-md font-bold text-white mt-1">8 Months Calendar</div>
              </div>
              <div className="bg-[#120a06] border border-brand-orange/20 p-5 rounded-xl text-left col-span-1 sm:col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-brand-orange">Compounds Lift Velocity</span>
                  <div className="text-2xl font-extrabold text-white mt-0.5">12K → 68K / mo</div>
                </div>
                <ArrowUpRight className="w-8 h-8 text-brand-orange animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 text-left space-y-3">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">The Obstacles</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Critical Challenges Before SEO Optimization
              </h2>
              <p className="text-slate-400 font-light max-w-2xl">
                Our technical systems analyzer pulled down several severe structural code flags directly impacting indexed performance metrics. Here is the operational checklist of barriers we had to neutralize:
              </p>
            </div>
            {/* Visual Health Card widget */}
            <div className="lg:col-span-5 bg-red-950/20 border border-red-900/40 p-6 rounded-2xl text-left">
              <div className="flex justify-between items-center text-sm font-mono text-red-400 mb-2 font-bold">
                <span>BEFORE SEO HEALTH INDEX</span>
                <span>38 / 100</span>
              </div>
              <div className="w-full bg-red-950 rounded-full h-3 overflow-hidden border border-red-900/40">
                <div className="bg-red-500 h-full rounded-full" style={{ width: '38%' }}></div>
              </div>
              <p className="text-[11px] text-red-300 font-mono mt-3 leading-snug">
                ⚠️ SEVERE ERRORS: High page index bloat, missing custom structured schema files, zero voice matching matrices, and severe checkout flow lag.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Problem card 1 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">01</div>
              <h4 className="text-lg font-bold text-white">Poor Product Rankings</h4>
              <p className="text-xs text-slate-400 font-light">
                High-volume keywords were hidden past page 3 of Google search result indexes because of thin indexing content strategies.
              </p>
            </div>

            {/* Problem card 2 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">02</div>
              <h4 className="text-lg font-bold text-white">Low Organic Traffic</h4>
              <p className="text-xs text-slate-400 font-light">
                The business was highly dependent on competitive, expensive social media ads, leading to high CAC and shifting conversion parameters.
              </p>
            </div>

            {/* Problem card 3 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">03</div>
              <h4 className="text-lg font-bold text-white">Duplicate Product Content</h4>
              <p className="text-xs text-slate-400 font-light">
                Hundreds of item variations and sizes generated thousands of identical dynamic URL targets, diluting search crawler focus.
              </p>
            </div>

            {/* Problem card 4 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">04</div>
              <h4 className="text-lg font-bold text-white">Slow Core Web Vitals</h4>
              <p className="text-xs text-slate-400 font-light">
                Unoptimized images, large non-compiled plugins, and JavaScript overhead slowed page loads, pushing bounce rates past 68%.
              </p>
            </div>

            {/* Problem card 5 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">05</div>
              <h4 className="text-lg font-bold text-white">Weak Internal Linking</h4>
              <p className="text-xs text-slate-400 font-light">
                Orphaned product pages and unlinked collection hubs prevented clean PageRank flow and clear contextual parent-child connections.
              </p>
            </div>

            {/* Problem card 6 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">06</div>
              <h4 className="text-lg font-bold text-white">Low Conversion Rate</h4>
              <p className="text-xs text-slate-400 font-light">
                Generic checkout structures and missing social proof parameters failed to transform existing organic browsers into active buyers.
              </p>
            </div>

            {/* Problem card 7 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">07</div>
              <h4 className="text-lg font-bold text-white">Poor Mobile Experience</h4>
              <p className="text-xs text-slate-400 font-light">
                Faceted filter menus and product images were broken or unaligned on mobile devices, preventing mobile-first indexing indexing.
              </p>
            </div>

            {/* Problem card 8 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/20 transition-all card">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">08</div>
              <h4 className="text-lg font-bold text-white">No AI SEO Visibility</h4>
              <p className="text-xs text-slate-400 font-light font-sans">
                Zero custom schema JSON-LD references meant generative engines like ChatGPT and Gemini and Perplexity couldn't suggest products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SEO STRATEGY SECTION */}
      <section className="py-20 border-b border-slate-900 bg-linear-to-b from-slate-950 to-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">The Blueprints</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our Ecommerce SEO Growth Strategy
            </h2>
            <p className="text-slate-400 font-light">
              We designed an 8-month, six-phase campaign focusing on technical integrity, category clustering, structured schema frameworks, and conversational brand queries.
            </p>
          </div>

          {/* Timeline UI Representation */}
          <div className="relative border-l border-slate-800 md:pl-10 md:ml-10 space-y-12">
            
            {/* Phase 1 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-brand-orange text-xs font-mono font-bold">1</div>
              <span className="text-[11px] font-bold text-brand-orange tracking-widest uppercase font-mono bg-brand-orange/5 border border-brand-orange/15 px-2.5 py-0.5 rounded-full inline-block">Phase 1</span>
              <h3 className="text-xl font-bold text-white">Technical SEO Audits & Core Alignments</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We resolved dynamic parameter issues and duplicate index files using canonical optimization. We compressed luxury asset weights and minimized stylesheet arrays to increase Core Web Vitals speed scores to 92.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Improved Search Engine crawling efficiency and clean indexing scores.
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-indigo-400 text-xs font-mono font-bold">2</div>
              <span className="text-[11px] font-bold text-indigo-400 tracking-widest uppercase font-mono bg-indigo-950/30 border border-indigo-900/40 px-2.5 py-0.5 rounded-full inline-block">Phase 2</span>
              <h3 className="text-xl font-bold text-white">Ecommerce Faceted Catalog Optimization</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We mapped categories to match commercial-intent keywords. We restructured faceted collection navigation schemas to prevent code bloat while preserving search engine pathways for niche modifiers like "luxury suede summer sandals".
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Category search queries showed instant indexing and immediate growth trends.
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-teal-400 text-xs font-mono font-bold">3</div>
              <span className="text-[11px] font-bold text-teal-400 tracking-widest uppercase font-mono bg-teal-950/30 border border-teal-900/40 px-2.5 py-0.5 rounded-full inline-block">Phase 3 — AI Trending</span>
              <h3 className="text-xl font-bold text-white">AI SEO & GEO Optimization Framework</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We embedded formatted product databases and rich schema markups directly into page code. We optimized long-tail conversational user FAQs to earn target citations within generative answers across ChatGPT Search, Gemini, and Perplexity.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Boosted AI search mentions and voice-activated search queries.
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-yellow-400 text-xs font-mono font-bold">4</div>
              <span className="text-[11px] font-bold text-yellow-400 tracking-widest uppercase font-mono bg-yellow-950/30 border border-yellow-900/40 px-2.5 py-0.5 rounded-full inline-block">Phase 4</span>
              <h3 className="text-xl font-bold text-white">Topical Content Hub Scaling</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We produced high-quality, long-form luxury lifestyle guide nodes, dynamic review hubs, and comprehensive style books. These linked downstream to actual catalog listings to build sustainable semantic authority.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Substantial organic matching matrix growth and brand authority lift.
              </div>
            </div>

            {/* Phase 5 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-fuchsia-400 text-xs font-mono font-bold">5</div>
              <span className="text-[11px] font-bold text-fuchsia-400 tracking-widest uppercase font-mono bg-fuchsia-950/30 border border-fuchsia-100/10 px-2.5 py-0.5 rounded-full inline-block">Phase 5</span>
              <h3 className="text-xl font-bold text-white">CRO Conversion rate optimization alignment</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We optimized the conversion funnel with high-impact product-page layouts, mobile UX changes, sticky checkout buttons, dynamic recommendations, and custom rating highlights to transform visitors into buyers.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Conversion Rate surged from a low 0.9% up to an outstanding 4.8%.
              </div>
            </div>

            {/* Phase 6 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-blue-400 text-xs font-mono font-bold">6</div>
              <span className="text-[11px] font-bold text-blue-400 tracking-widest uppercase font-mono bg-blue-950/50 border border-blue-900/30 px-2.5 py-0.5 rounded-full inline-block">Phase 6</span>
              <h3 className="text-xl font-bold text-white">Authority Building & Digital PR Outreach</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We executed editorial backlink campaigns, secured product mentions in fashion portals, and targeted authoritative citations to steadily scale overall Domain Authority parameters.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Secured premium organic references and scaled Domain Authority.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESULTS SECTION & DASHBOARD */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Verified Results</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ecommerce SEO Results Achieved
            </h2>
            <p className="text-slate-400 font-light">
              Actual client organic growth statistics taken directly from GSC, Google Analytics 4, and Shopify store reports.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-orange/10 to-transparent pointer-events-none"></div>
              <TrendingUp className="w-8 h-8 text-brand-orange mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Organic search traffic</div>
              <div className="text-4xl font-black text-white mt-1">12K → 68K</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Compounded monthly sessions with +450% traffic growth metrics.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-emerald-500/10 to-transparent pointer-events-none"></div>
              <DollarSign className="w-8 h-8 text-emerald-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold font-sans">Revenue Growth Rates</div>
              <div className="text-4xl font-black text-emerald-400 mt-1">+320%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Monthly average sales increased from ₹2L up to over ₹8.4L.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-indigo-500/10 to-transparent pointer-events-none"></div>
              <Percent className="w-8 h-8 text-indigo-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">CRO Conversion rate</div>
              <div className="text-4xl font-black text-white mt-1">0.9% → 4.8%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Funnel mapping optimization achieved a massive 5X conversion boost.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-500/10 to-transparent pointer-events-none"></div>
              <Award className="w-8 h-8 text-blue-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Total keywords ranked</div>
              <div className="text-4xl font-black text-white mt-1">150 → 2,500+</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Commercial search terms indexing on Page 1 of Search result sets.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-fuchsia-500/10 to-transparent pointer-events-none"></div>
              <Target className="w-8 h-8 text-fuchsia-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Top 10 Rankings</div>
              <div className="text-4xl font-black text-white mt-1">25 → 680+</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Primary transactional terms secured in highly competitive niches.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-amber-500/10 to-transparent pointer-events-none"></div>
              <Activity className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Average Bounce Rate</div>
              <div className="text-4xl font-black text-white mt-1">68% → 34%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Fast loading parameters and better UX design cut abandonment rates in half.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE VS AFTER INTEGRATION & COMPARISON SLIDER */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column info */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Direct Comparison</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Before vs After SEO Optimization
              </h2>
              <p className="text-slate-400 font-light text-sm">
                This table and visual slider illustrate the compound improvements made across all core performance indices:
              </p>
              
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                  <span className="text-xs text-slate-300">Core Web Vitals scores rose from an unacceptable 38 up to 92.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                  <span className="text-xs text-slate-300 font-sans">Organic traffic transformed from a minor 12K to 68K visits/mo.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                  <span className="text-xs text-slate-300">Revenue was supercharged from ₹2L to ₹8.4L on monthly averages.</span>
                </div>
              </div>
            </div>

            {/* Right Column Interactive Comparison UI */}
            <div className="lg:col-span-7 space-y-6">
              {/* Simple comparative data grid */}
              <div className="overflow-x-auto rounded-xl border border-slate-850 bg-slate-900/10">
                <table className="w-full text-left text-xs sm:text-sm font-sans">
                  <thead className="bg-[#0b0e1c] border-b border-slate-800 text-slate-300 font-mono font-bold uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="p-4">Key Metrics Hub</th>
                      <th className="p-4 text-red-400">Before Audit</th>
                      <th className="p-4 text-emerald-400">After Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850/60 font-light text-slate-300">
                    <tr>
                      <td className="p-4 font-semibold text-white">Monthly Organic Visits</td>
                      <td className="p-4 text-red-300">12,000 / mo</td>
                      <td className="p-4 text-emerald-300 font-bold">68,000 / mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Average Monthly Revenue</td>
                      <td className="p-4 text-red-300">₹2,00,000 / mo</td>
                      <td className="p-4 text-emerald-300 font-bold">₹8,40,000 / mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Conversion Optimization Rate</td>
                      <td className="p-4 text-red-300">0.9%</td>
                      <td className="p-4 text-emerald-300 font-bold">4.8% CR Pivot</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white text-xs">Core Mobile Speed Index</td>
                      <td className="p-4 text-red-300">38 Score (Poor)</td>
                      <td className="p-4 text-emerald-300 font-bold">92 Score (Good)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Slider comparative view */}
              <div 
                className="relative h-64 sm:h-80 rounded-2xl border border-slate-800 overflow-hidden cursor-ew-resize select-none"
                onMouseMove={(e) => {
                  if (isSliding) {
                    handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect());
                  }
                }}
                onTouchMove={(e) => {
                  if (e.touches.length > 0) {
                    handleSliderMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
                  }
                }}
                onMouseDown={() => setIsSliding(true)}
                onTouchStart={() => setIsSliding(true)}
                onMouseLeave={() => setIsSliding(false)}
                onMouseUp={() => setIsSliding(false)}
                onTouchEnd={() => setIsSliding(false)}
              >
                {/* Before layer */}
                <div className="absolute inset-0 bg-[#1e0f0a] flex flex-col justify-center items-center text-center p-6 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)]">
                  <span className="text-6xl sm:text-8xl select-none">📉</span>
                  <h4 className="text-xl sm:text-2xl font-black text-red-400 mt-4 leading-tight font-sans">Organic Decline (Before)</h4>
                  <p className="text-xs text-red-300 mt-2 max-w-sm">
                    Bloated URLs, thin collection text description pools, low visibility rankings, and failing core parameters.
                  </p>
                </div>

                {/* After layer */}
                <div 
                  className="absolute inset-y-0 right-0 bg-[#071914] flex flex-col justify-center items-center text-center p-6 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 text-center shrink-0" style={{ width: '100%', transform: `translateX(-${sliderPosition/2}%)` }}>
                    <span className="text- select-none text-6xl sm:text-8xl">🚀</span>
                    <h4 className="text-xl sm:text-2xl font-black text-emerald-400 mt-4 leading-tight font-sans">Compounded Scaling (After)</h4>
                    <p className="text-xs text-emerald-200 mt-2 max-w-sm">
                      Clustered parent headings, clean structured Micro-schema graphs, rapid Core speed targets, and 4.8% CTR funnel values.
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute inset-y-0 w-1 bg-brand-orange shadow-lg flex items-center justify-center cursor-pointer pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-orange border border-white flex items-center justify-center text-white text-xs font-bold leading-normal font-mono select-none">
                    ↔️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE RANKINGS SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Table Column */}
            <div className="lg:col-span-7 text-left space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">SERP Performance</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight pb-3">
                Top Keyword Ranking Improvements
              </h2>
              <div className="overflow-x-auto rounded-xl border border-slate-850">
                <table className="w-full text-left text-xs sm:text-sm bg-[#0a0d1a] font-sans">
                  <thead className="bg-[#0f1326] border-b border-slate-800 text-slate-300 font-mono font-bold uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="p-4">Target Keyword Node</th>
                      <th className="p-4 text-center">Before SEO Rank</th>
                      <th className="p-4 text-center text-brand-orange">After SEO Rank</th>
                      <th className="p-4 text-center text-emerald-400">Position Lift</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850 text-slate-300">
                    <tr>
                      <td className="p-4 font-semibold text-white">Buy Fashion Shoes Online</td>
                      <td className="p-4 text-center">#48</td>
                      <td className="p-4 text-center text-emerald-300 font-bold">#3</td>
                      <td className="p-4 text-center text-emerald-400 font-mono">+45 Spots Up</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Best Sneakers for Men</td>
                      <td className="p-4 text-center">#27</td>
                      <td className="p-4 text-center text-emerald-300 font-bold">#1</td>
                      <td className="p-4 text-center text-emerald-400 font-mono">+26 Spots Up</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white text-xs sm:text-sm">Sports Shoes Ecommerce</td>
                      <td className="p-4 text-center">#62</td>
                      <td className="p-4 text-center text-emerald-300 font-bold font-sans">#5</td>
                      <td className="p-4 text-center text-emerald-400 font-mono">+57 Spots Up</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white text-xs sm:text-sm font-sans">Running Shoes Online</td>
                      <td className="p-4 text-center">#31</td>
                      <td className="p-4 text-center text-emerald-300 font-bold">#2</td>
                      <td className="p-4 text-center text-emerald-400 font-mono">+29 Spots Up</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mock SERP Screenshot Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-brand-orange/10 blur-xl rounded-2xl"></div>
              <div className="relative bg-[#0a0d1a] border border-slate-800 rounded-2xl p-5 shadow-2xl text-left space-y-4">
                <span className="text-[10px] text-brand-orange font-bold font-mono uppercase bg-brand-orange/15 px-2.5 py-0.5 rounded-full inline-block">
                  Google Page #1 Visibility Card
                </span>
                <div className="border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5 bg-[#030611] px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                    <Search className="w-3.5 h-3.5 text-slate-500" /> "best sneakers for men online"
                  </div>
                </div>

                {/* Simulated search result card */}
                <div className="space-y-1 p-3 bg-[#030611] rounded-xl border border-slate-850">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center text-[8px] text-white">S</div>
                    <span className="text-[10.5px] text-slate-400 font-light">luxuryfootwear.co &gt; collection</span>
                  </div>
                  <h4 className="text-sm font-bold text-blue-400 hover:underline leading-snug cursor-pointer">
                    Best Sneakers for Men - Sustainable Luxury Fashion Originals
                  </h4>
                  <p className="text-[11.5px] text-slate-400 leading-snug">
                    Shop 2026's premium footwear collection. Hand-made luxury leather chelsea boots, sports runners, and style sneakers with global express carbon-neutral delivery...
                  </p>
                  <div className="flex items-center gap-2 pt-1 font-mono text-[10px] text-emerald-400">
                    <span>★ Rating: 4.9 - 1,248 votes</span>
                    <span>• Price Range: In Stock</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-mono italic text-center">
                  * Live schema metadata automatically structured microdata signals directly to GSC.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI SEO RESULTS SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left AI Graphics Column */}
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="absolute -inset-2 bg-indigo-500/10 blur-xl rounded-2xl"></div>
              <div className="relative bg-[#0c0f1e] border border-slate-800 rounded-2xl p-5 shadow-2xl text-left space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono text-slate-300">ChatGPT Search Citation</span>
                  </div>
                  <span className="text-[10px] font-mono text-teal-300 uppercase font-bold bg-teal-950 px-2.5 py-0.5 rounded-full">GEO Active</span>
                </div>

                <div className="p-3.5 bg-[#030611] rounded-xl border border-slate-850 space-y-3 font-light text-xs leading-relaxed text-slate-300">
                  <p className="italic text-slate-400">"What are the best luxury leather sneakers with sustainable materials?"</p>
                  <p className="text-emerald-300 border-l-2 border-emerald-500 pl-3">
                    "According to leading fashion indexes, <strong>Luxury Footwear Co.</strong> offers a highly recommended collection of artisan leather trainers. Clients highly praise their sustainable sourcing protocols [1] and exceptional durability ranking index [2]."
                  </p>
                  <div className="flex gap-2 pt-1">
                    <span className="text-[10px] bg-slate-900 rounded-md px-1.5 py-0.5 text-slate-400 border border-slate-800">[1] Source: luxuryfootwear.co</span>
                    <span className="text-[10px] bg-slate-900 rounded-md px-1.5 py-0.5 text-slate-400 border border-slate-800 font-sans">[2] Review Index</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">Generative Search Intelligence</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                AI SEO & Conversational Search Results
              </h2>
              <p className="text-slate-300 font-light leading-relaxed">
                Modern SEO requires scaling visibility outside typical search engines. By matching parent entity schemas, conversational keyword nodes, and database architectures, we scaled our client's coverage across Generational Search Engines (GEO):
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0a0d1a] border border-slate-850 p-4 rounded-xl text-left">
                  <h4 className="text-sm font-semibold text-white">ChatGPT Visibility Growth</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Secured organic brand recommendations and source links for highly structured long-tail queries.
                  </p>
                </div>
                <div className="bg-[#0a0d1a] border border-slate-850 p-4 rounded-xl text-left">
                  <h4 className="text-sm font-semibold text-white">Voice Search Metrics</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Aligned conversational phrasing parameters to match Apple Siri and Google Assistant response queries.
                  </p>
                </div>
                <div className="bg-[#0a0d1a] border border-slate-850 p-4 rounded-xl text-left">
                  <h4 className="text-sm font-semibold text-white">Gemini citations presence</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Generated Schema index nodes to help LLMs read, match, and present product details accurately.
                  </p>
                </div>
                <div className="bg-[#0a0d1a] border border-slate-850 p-4 rounded-xl text-left">
                  <h4 className="text-sm font-semibold text-white">GEO Optimization Impact</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Built a sustainable authority structure that protects the client's search presence as voice queries scale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRAFFIC SOURCES SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Acquisition Analysis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Traffic Acquisition Breakdown
            </h2>
            <p className="text-slate-400 font-light">
              Review how organic search channels scaled compared to paid channels over our 8-month optimization window.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual breakdown diagram */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h3 className="text-lg font-bold text-indigo-400 pr-5">Compound Audience Metrics</h3>
              
              <div className="space-y-4">
                {/* Traffic source bar 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 font-bold">Organic Search Channel Share</span>
                    <span className="text-emerald-400 font-bold">78% Share</span>
                  </div>
                  <div className="w-full bg-[#0d1020] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                {/* Traffic source bar 2 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 font-bold">Mobile Devices Indexing</span>
                    <span className="text-blue-400 font-bold">82% Share</span>
                  </div>
                  <div className="w-full bg-[#0d1020] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                {/* Traffic source bar 3 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 font-bold font-sans">Direct Returning Retention</span>
                    <span className="text-indigo-400 font-bold">34% Share</span>
                  </div>
                  <div className="w-full bg-[#0d1020] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-indigo-500 h-full" style={{ width: '34%' }}></div>
                  </div>
                </div>

                {/* Traffic source bar 4 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 font-bold font-sans">Paid Social Dependency</span>
                    <span className="text-red-400 font-bold">Reduced to 11%</span>
                  </div>
                  <div className="w-full bg-[#0d1020] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-red-500 h-full" style={{ width: '11%' }}></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Circular representation box */}
            <div className="lg:col-span-6 bg-slate-900/20 border border-slate-850 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold mb-4">Traffic Acquisition Splits</span>
              
              {/* Complex SVG Pie Representation */}
              <svg className="w-48 h-48" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#0f172a" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="78 22" strokeDashoffset="25" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="11 89" strokeDashoffset="47" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="11 89" strokeDashoffset="36" />
              </svg>

              <div className="grid grid-cols-3 gap-4 pt-6 text-[10px] font-mono w-full text-slate-300">
                <div className="flex items-center gap-1.5 justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                  <span>Organic (78%)</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <span>Paid Ads (11%)</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange"></div>
                  <span>Referrals (11%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOMMERCE CRO RESULTS SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">Funnel Scaling</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Conversion Rate Optimization Results
            </h2>
            <p className="text-slate-400 font-light text-md">
              High search visibility is not enough; converting organic visitors is where the true ROI lives. We engineered these strategic UX changes to maximize organic shop revenue:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0b0d1a] border border-slate-850 p-5 rounded-2xl text-left space-y-3">
              <div className="w-9 h-9 bg-emerald-950/40 border border-emerald-900 rounded-lg flex items-center justify-center text-emerald-400">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="text-md font-bold text-white">Product Pages UX</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We redesigned product page layouts, adding high-impact color variants, dynamic shipping estimators, and clear, prominent call-to-actions.
              </p>
            </div>

            <div className="bg-[#0b0d1a] border border-slate-850 p-5 rounded-2xl text-left space-y-3">
              <div className="w-9 h-9 bg-indigo-950/40 border border-indigo-900 rounded-lg flex items-center justify-center text-indigo-400">
                <CheckSquare className="w-5 h-5 flex items-center justify-center" />
              </div>
              <h4 className="text-md font-bold text-white">Checkout flow optimizations</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We streamlined the checkout flow, introducing auto-fill checkout fields, guest checkouts, and trust badges that reduced cart abandonment rates by 54%.
              </p>
            </div>

            <div className="bg-[#0b0d1a] border border-slate-850 p-5 rounded-2xl text-left space-y-3">
              <div className="w-9 h-9 bg-blue-950/40 border border-blue-900 rounded-lg flex items-center justify-center text-blue-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-md font-bold text-white">Mobile UX Overhaul</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We optimized product filter menus and categories to create rapid mobile touchpoints that improved mobile conversions by 210%.
              </p>
            </div>

            <div className="bg-[#0b0d1a] border border-slate-850 p-5 rounded-2xl text-left space-y-3">
              <div className="w-9 h-9 bg-fuchsia-950/40 border border-fuchsia-900 rounded-lg flex items-center justify-center text-fuchsia-400">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-md font-bold text-white">Personalization Upsell</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We deployed smart AI upsell recommenders on the cart sliding drawer, lifting average order values (AOV) by +15.4% per transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED REVENUE GROWTH CALCULATOR SECTION */}
      <section className="py-20 border-b border-indigo-950/60 bg-linear-to-b from-[#030712] via-[#080b18] to-[#030712]">
        <div className="max-w-5xl mx-auto px-4 bg-[#0a0c1a] border border-indigo-950/80 p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute -inset-2 bg-brand-orange/5 blur-3xl pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Financial Forecaster</span>
            <h2 className="text-3xl font-extrabold text-white">Ecommerce SEO ROI Calculator</h2>
            <p className="text-slate-400 text-xs font-light">
              Enter your current storefront parameters below to estimate potential monthly revenue scale after applying our proven 450% traffic & 4.8% CRO optimization engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            {/* Inputs */}
            <div className="md:col-span-6 space-y-5 text-left">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-mono flex justify-between">
                  <span>Current Monthly Organic Visitors</span>
                  <span className="text-[#f97316] font-bold">{calcTraffic.toLocaleString()} / mo</span>
                </label>
                <input 
                  type="range" 
                  min="5000" 
                  max="100000" 
                  step="5000" 
                  value={calcTraffic}
                  onChange={(e) => setCalcTraffic(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#f97316]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-mono flex justify-between">
                  <span>Average Product Sale (AOV)</span>
                  <span className="text-indigo-400 font-bold">₹{calcAov.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="1000" 
                  max="15000" 
                  step="500" 
                  value={calcAov}
                  onChange={(e) => setCalcAov(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-mono flex justify-between">
                  <span>Current Conversion Rate (%)</span>
                  <span className="text-teal-400 font-semibold">{calcConv}%</span>
                </label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2.5" 
                  step="0.1" 
                  value={calcConv}
                  onChange={(e) => setCalcConv(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
              </div>
            </div>

            {/* Calculations results */}
            <div className="md:col-span-6 bg-slate-950 p-6 rounded-2xl border border-indigo-950 flex flex-col justify-between text-left">
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-indigo-950">
                  <span className="text-slate-400">Current Monthly Sales</span>
                  <span className="text-red-400 font-semibold">₹{currentRevenue.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-indigo-950">
                  <span className="text-slate-400">Target SEO Traffic Scale</span>
                  <span className="text-brand-orange font-bold">{(calcTraffic * 4.5).toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-indigo-950">
                  <span className="text-slate-400">Optimized Target Conversion</span>
                  <span className="text-indigo-400 font-bold">3.5% (CRO Scale)</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono pt-1">
                  <span className="text-slate-400 font-bold">New Monthly Organic Revenue</span>
                  <span className="text-emerald-400 font-black text-lg">₹{targetRevenue.toLocaleString()} / mo</span>
                </div>
              </div>

              <div className="mt-5 p-3.5 bg-emerald-950/30 border border-emerald-900/40 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">ESTIMATED MONTHLY REVENUE LIFT</span>
                  <span className="text-md font-black text-emerald-400 font-sans">+₹{netLift.toLocaleString()} / month</span>
                </div>
                <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL SECTION */}
      <section className="py-20 border-b border-slate-900 bg-linear-to-b from-slate-950 to-[#030712]">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="max-w-4xl bg-[#0b0e1c] border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-orange/5 to-transparent pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              {/* Profile placeholder/Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-orange/20 rounded-2xl flex items-center justify-center text-brand-orange font-black text-3xl shrink-0 border border-brand-orange/30">
                FA
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                
                <blockquote className="text-md sm:text-lg text-slate-200 font-light leading-relaxed italic">
                  “AKGLS Group completely transformed our organic search presence on Shopify. Within months, search was generating over 78% of our direct monthly checkout revenue, allowing us to scale profitably without relying entirely on paid social ads. Highly recommend their technical and AI SEO solutions.”
                </blockquote>
                
                <div>
                  <div className="text-md font-bold text-white">Ananya Rathore</div>
                  <div className="text-xs text-brand-orange font-mono font-medium">Head of Direct-to-Consumer, Luxury Footwear Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS USED SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Technology Stack</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              SEO Tools & Technologies Used
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We leverage enterprise intelligence platforms and diagnostic engines to analyze, monitor, and scale performance indices continuously.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Google Analytics 4 (GA4)
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Google Search Console (GSC)
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300 font-sans">
              Semrush Intelligence
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Ahrefs Explorer
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Screaming Frog Crawlers
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Google Tag Manager (GTM)
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              ChatGPT Search Engine
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Gemini AI Integration
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Shopify SEO Core Plugins
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-4 rounded-xl text-center text-xs font-mono font-bold text-slate-300">
              Screaming Frog JSON Schema
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS STRATEGY WORKED SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">The Post-Mortem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Why This Ecommerce SEO Strategy Worked
            </h2>
            <p className="text-slate-400 font-light">
              Unlike generic agency solutions, we combine technical depth with advanced client conversions to build permanent value:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl text-left space-y-2.5">
              <h4 className="text-lg font-bold text-white">Technical SEO Foundation</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                By optimizing dynamically produced collection duplicate parameters, we focused search engine crawl pathways exclusively on high-performing collections.
              </p>
            </div>

            <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl text-left space-y-2.5">
              <h4 className="text-lg font-bold text-white">AI Search Visibility (GEO)</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed font-sans">
                Embedding customized product reviews microdata enabled ChatGPT and Gemini search indexes to recommend the client's store as the premier selection niche.
              </p>
            </div>

            <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl text-left space-y-2.5">
              <h4 className="text-lg font-bold text-white">Content Hub Clustering</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Publishing informative luxury style guides captured early buyer search intent and redirected authority to catalog landing pages.
              </p>
            </div>

            <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl text-left space-y-2.5">
              <h4 className="text-lg font-bold text-white">CRO Conversion Alignment</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Overhauling mobile cart navigation and checkout check points converted existing store browsers into orders, multiplying ROIs.
              </p>
            </div>

            <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-2xl text-left space-y-2.5">
              <h4 className="text-lg font-bold text-white">Strategic Links & Digital PR</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Earning backlinks from authoritative fashion editorials steadily scaled overall domain rating signals, solidifying local and national search footprints.
              </p>
            </div>

            <div className="bg-[#120a06] border border-brand-orange/20 p-6 rounded-2xl text-left flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-brand-orange">Ready to scale your store?</h4>
                <p className="text-xs text-slate-400 mt-1 font-light font-sans">
                  Apply our tested commerce blueprints directly onto your shop catalog and outpace enterprise competitors within months.
                </p>
              </div>
              <button 
                onClick={openProposalForm}
                className="mt-4 w-full bg-brand-orange py-2.5 px-4 rounded-xl text-xs font-extrabold hover:bg-orange-600 transition flex items-center justify-center gap-1.5"
              >
                Request Custom Strategy <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEMA MARKUP PLAYGROUND SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Codes playground view */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Header bar */}
                <div className="bg-[#0a0d1a] px-4 py-3 border-b border-slate-850 flex justify-between items-center text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-brand-indigo" />
                    <span>JSON-LD Live Schema Graphs</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => copySchemaJson(schemasTemplates.article, 'article')}
                      className="text-[10px] bg-slate-900 border border-slate-800 hover:border-slate-700 px-2 py-0.5 rounded-md flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSchema === 'article' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSchema === 'article' ? 'Copied' : 'Copy Article'}</span>
                    </button>
                    <button 
                      onClick={() => copySchemaJson(schemasTemplates.faq, 'faq')}
                      className="text-[10px] bg-slate-900 border border-slate-800 hover:border-slate-700 px-2 py-0.5 rounded-md flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSchema === 'faq' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSchema === 'faq' ? 'Copied' : 'Copy FAQ'}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 overflow-x-auto max-h-72 text-left">
                  <pre className="text-xs font-mono text-indigo-300 leading-relaxed font-semibold">
                    {schemasTemplates.article}
                  </pre>
                </div>
              </div>
            </div>

            {/* Explanatory column */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Semantic Structuring</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
                JSON-LD Markup For Advanced Indexing
              </h2>
              <p className="text-slate-300 font-light text-sm leading-relaxed">
                We design and bundle personalized product reviews microdata directly inside your target collection layers. This allows Google and other conversational bots to instantly parse ratings, index availability statuses, and display reviews within search snippets.
              </p>
              <div className="space-y-2.5 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Article Schema for informational blog nodes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>FAQ Schema for target conversational keywords.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Review Schema to trigger star ratings in SERPs.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">Explore Portfolios</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans">
              Related SEO Success Stories
            </h2>
            <p className="text-slate-400 font-light font-sans text-xs sm:text-sm">
              Discover how we achieve sustainable growth across diverse operational verticals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0b0d1a] border border-slate-850 rounded-2xl p-6 text-left space-y-4 hover:border-slate-800 transition">
              <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase bg-brand-orange/10 border border-brand-orange/20 px-2 py-0.5 rounded-full inline-block">SaaS Enterprise</span>
              <h4 className="text-lg font-bold text-white leading-snug">Scaling B2B SaaS Subscriptions by +310%</h4>
              <p className="text-slate-400 text-xs font-light">
                Discover our technical index framework designed to earn high-volume keyword spots for a financial platform.
              </p>
              <button onClick={onBackToHome} className="text-xs font-mono font-extrabold text-brand-orange hover:underline flex items-center gap-1 cursor-pointer">
                View Case Strategy <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b0d1a] border border-slate-850 rounded-2xl p-6 text-left space-y-4 hover:border-slate-800 transition">
              <span className="text-[10px] font-mono font-extrabold text-[#10b981] uppercase bg-emerald-950 border border-emerald-900 px-2 py-0.5 rounded-full inline-block">Local SEO Leads</span>
              <h4 className="text-lg font-bold text-white leading-snug font-sans">Local Dental Clinic: Map Pack Takeover</h4>
              <p className="text-slate-400 text-xs font-light">
                How we generated patient appointments by optimizing regional search terms and directory listings.
              </p>
              <button 
                onClick={() => {
                  window.history.pushState(null, '', '/case-study/local-seo-results/');
                  window.dispatchEvent(new Event('popstate'));
                }} 
                className="text-xs font-mono font-extrabold text-brand-orange hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              >
                View Case Strategy <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b0d1a] border border-slate-850 rounded-2xl p-6 text-left space-y-4 hover:border-slate-800 transition">
              <span className="text-[10px] font-mono font-extrabold text-indigo-400 uppercase bg-indigo-950 border border-indigo-900 px-2 py-0.5 rounded-full inline-block">PPC & Paid Ads</span>
              <h4 className="text-lg font-bold text-white leading-snug">Paid Ad Optimization: 11X ROAS & +620% Lead Growth</h4>
              <p className="text-slate-400 text-xs font-light">
                Discover how we deployed dynamic budget shifting and targeted bid algorithms to cut CPC in half.
              </p>
              <button 
                onClick={() => {
                  window.history.pushState(null, '', '/case-study/ppc-success-stories/');
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="text-xs font-mono font-extrabold text-brand-orange hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              >
                View Case Strategy <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Answers Room</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans">
              Ecommerce SEO FAQs
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Explore solutions to common issues encountered when managing organic storefront visibility pathways.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqData.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#0b0e1c] border border-indigo-950/70 rounded-xl overflow-hidden text-left"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center bg-slate-950/30 hover:bg-slate-950/60 transition cursor-pointer"
                >
                  <span className="text-md font-bold text-white leading-relaxed pr-4 font-sans">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-brand-orange' : ''}`} />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-850/50"
                    >
                      <div className="p-5 text-slate-300 font-light leading-relaxed text-sm bg-slate-950/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED BLOG SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">Learn More</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Suggested Guides & Manuals</h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Leverage our expert-curated organic retail strategy logs to support your brand's growth:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-[#0a0d1a] border border-slate-850 p-6 rounded-2xl hover:border-slate-800 transition flex flex-col justify-between">
              <div>
                <h4 className="text-md font-extrabold text-white leading-snug">The Complete Ecommerce SEO Blueprints (2026 Manual)</h4>
                <p className="text-xs text-slate-400 mt-2 font-light">
                  A comprehensive guide to product mapping, URL canonicalization, and setting up clean categories.
                </p>
              </div>
              <button onClick={onBackToHome} className="text-xs font-mono font-bold text-brand-orange mt-4 hover:underline flex items-center gap-1 cursor-pointer">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-[#0a0d1a] border border-slate-850 p-6 rounded-2xl hover:border-slate-800 transition flex flex-col justify-between">
              <div>
                <h4 className="text-md font-extrabold text-white leading-snug">Advanced Shopify Structuring Tips</h4>
                <p className="text-xs text-slate-400 mt-2 font-light">
                  How to manage large faceted collection hierarchies and optimize liquid speed files.
                </p>
              </div>
              <button onClick={onBackToHome} className="text-xs font-mono font-bold text-brand-orange mt-4 hover:underline flex items-center gap-1 cursor-pointer">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-[#0a0d1a] border border-slate-850 p-6 rounded-2xl hover:border-slate-800 transition flex flex-col justify-between">
              <div>
                <h4 className="text-md font-extrabold text-white leading-snug font-sans">Leveraging ChatGPT for Conversion (CRO)</h4>
                <p className="text-xs text-slate-400 mt-2 font-light">
                  Aligning semantic databases to trigger high-intent recommendations and capture AI search presence.
                </p>
              </div>
              <button onClick={onBackToHome} className="text-xs font-mono font-bold text-brand-orange mt-4 hover:underline flex items-center gap-1 cursor-pointer">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MID PAGE CONVERTING TRUST ELEMENTS */}
      <section className="py-12 bg-[#060814] border-b border-indigo-950/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 text-slate-400 font-mono text-xs">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-orange" /> Real-Time Indexed Transparent Reporting</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-orange" /> Next-Gen AI-Powered SEO Integration</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-orange" /> Premium Ecommerce Specialists Group</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-orange" /> Assured ROI-Focused Strategies</span>
        </div>
      </section>

      {/* FINAL FLOATING/CTA SECTION */}
      <section className="relative overflow-hidden py-24 border-b border-indigo-950/80 bg-linear-to-b from-[#030712] via-brand-navy/30 to-slate-950">
        <div className="absolute inset-0 bg-[#0d0d1e]/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.1),transparent_50%)]"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Grow Your Business</span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Become Our Next Ecommerce SEO Success Story?
          </h2>
          
          <p className="text-slate-300 font-light text-md max-w-2xl mx-auto">
            Let's audit your catalog hierarchies, outline search bottlenecks, and optimize your checkout paths to compound organic search revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button 
              onClick={openProposalForm}
              className="px-8 py-4 bg-brand-orange text-white font-extrabold rounded-xl hover:bg-orange-600 transition shadow-lg text-center cursor-pointer"
            >
              Start Ecommerce SEO Audit
            </button>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-200 font-bold rounded-xl hover:bg-slate-850 transition text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" /> Talk to SEO Experts
            </a>
          </div>

          <div className="pt-6 font-mono text-[11px] text-slate-500">
            * Fully NDA-protected consultation. No upfront registration or commitments required.
          </div>
        </div>
      </section>

      {/* Sticky Bottom Actions bar for conversions on mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="p-3.5 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-500 transition-all flex items-center justify-center hover:scale-105 active:scale-95"
          title="Chat with an Expert"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
  );
}

// Simple floating icon helper missing in parameters
function MessageCircle({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

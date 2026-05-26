import { useState, useEffect } from 'react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Phone, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, ChevronRight, Check, 
  Send, Smartphone, Zap, Server, Shield, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Share2,
  Layout, ArrowUpRight, Rocket, HelpCircle, MapPin, Star, Info, CheckSquare,
  MessageCircle, BarChart, PhoneCall, Calendar, Navigation, ShieldCheck, Map
} from 'lucide-react';

interface LocalSeoCaseStudyPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemasTemplates = {
  article: `{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Local SEO Case Study: 580% Maps Visibility & 420% Lead growth",
  "image": "https://akglsgroup.com/assets/case-studies/local-seo.jpg",
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
  "description": "How AKGLS Group scaled a multi-location dental clinic's local Search Engine footprint, boosting Google Maps visibility by 580% and lead generation volume in 6 months."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does local SEO take to start showing Google Maps rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preliminary optimizations such as GBP category revisions show crawl updates in 2 to 4 weeks. Major Map Pack citations scaling and local organic authority compounding typically require 3 to 6 months."
      }
    }
  ]
}`
};

export default function LocalSeoCaseStudyPage({ onBackToHome, openProposalForm }: LocalSeoCaseStudyPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Local SEO Case Study | Google Maps Rankings & Lead Growth | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Before/After comparison slider position (0 to 100)
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  // Local SEO ROI Calculator States
  const [estMonthlySearch, setEstMonthlySearch] = useState<number>(10000); // Local keyword search volume
  const [currentRank, setCurrentRank] = useState<number>(15); // Avg ranking
  const [avgTicketValue, setAvgTicketValue] = useState<number>(5000); // Avg patient/lead value in INR

  // Calculation derivations
  // Standard Maps Rank 1 CTR is ~30%, Rank 15 is < 1%
  const currentCtr = currentRank <= 3 ? 0.3 - (currentRank - 1) * 0.08 : 0.01;
  const targetCtr = 0.32; // Rank 1 optimization outcome
  
  const currentEstimatedVisits = Math.round(estMonthlySearch * currentCtr);
  const targetEstimatedVisits = Math.round(estMonthlySearch * targetCtr);
  
  const currentEstimatedLeads = Math.round(currentEstimatedVisits * 0.02); // 2% current conversion
  const targetEstimatedLeads = Math.round(targetEstimatedVisits * 0.06); // 6% conversion under CRO

  const currentValuation = currentEstimatedLeads * avgTicketValue;
  const targetValuation = targetEstimatedLeads * avgTicketValue;
  const revenueLift = targetValuation - currentValuation;

  // Active FAQ selector state
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

  const localFaqs = [
    {
      q: "How long does Local SEO take to show prominent Map Pack changes?",
      a: "Initial Google Business Profile core edits and citation repairs are crawled in 2 to 4 weeks. However, scaling rank authority to dominate high-competition local queries like 'dentist near me' across your entire service area radius typically takes 3 to 6 months of persistent local link building, local schema mapping, and active review acquisition."
    },
    {
      q: "Can Local SEO help increase actual inbound phone calls and map directions?",
      a: "Yes. Our strategy optimizes the Google Business Profile CTA framework directly inside the Map Pack, placing Tap-To-Call and Driving Directions triggers directly in front of mobile searchers ready to convert."
    },
    {
      q: "Is Google Business Profile (formerly GMB) optimization really important?",
      a: "It is the single most important ranking factor for local search. Google uses your GBP's category relevance, physical geo-location, user reviews, and active updates to determine eligibility for the top 3 spots in the local Map Pack."
    },
    {
      q: "What is AI Local SEO and Search Engine Optimization (GEO) for local clinics?",
      a: "AI search engines like ChatGPT, Perplexity, and Google's conversational answers query local index maps and structural schemas to recommend businesses. We construct semantic JSON-LD maps, local citation nodes, and answer hubs to verify your clinic is highlighted as the primary recommendations expert."
    },
    {
      q: "How do you handle multi-location Local SEO campaigns?",
      a: "We architect unique, highly-optimized location landing pages for each service area, build distinct geographic citations for each branch, and create separated Google Business Profile structures linked back to custom nested local schemas."
    },
    {
      q: "Do customer reviews directly impact our local Map Pack rankings?",
      a: "Absolutely. Both the quantity, the star-rating average, the keyword density within reviews, and the frequency with which you respond to review nodes are primary factors Google's algorithm uses to evaluate local trustworthiness."
    }
  ];

  // 5x5 Heatmap simulation coordinates mapping
  const initialGrid = [
    { id: 1, latOffset: -2, lngOffset: -2, beforeRank: 18, afterRank: 1, address: "Connaught Place" },
    { id: 2, latOffset: -2, lngOffset: -1, beforeRank: 14, afterRank: 1, address: "Karol Bagh" },
    { id: 3, latOffset: -2, lngOffset: 0, beforeRank: 22, afterRank: 2, address: "Paharganj" },
    { id: 4, latOffset: -2, lngOffset: 1, beforeRank: 17, afterRank: 1, address: "Rajendra Place" },
    { id: 5, latOffset: -2, lngOffset: 2, beforeRank: 25, afterRank: 3, address: "Patel Nagar" },

    { id: 6, latOffset: -1, lngOffset: -2, beforeRank: 11, afterRank: 1, address: "Chanakyapuri" },
    { id: 7, latOffset: -1, lngOffset: -1, beforeRank: 9, afterRank: 1, address: "Golf Links" },
    { id: 8, latOffset: -1, lngOffset: 0, beforeRank: 15, afterRank: 1, address: "Lodi Colony" },
    { id: 9, latOffset: -1, lngOffset: 1, beforeRank: 19, afterRank: 2, address: "Khan Market" },
    { id: 10, latOffset: -1, lngOffset: 2, beforeRank: 23, afterRank: 2, address: "Jor Bagh" },

    { id: 11, latOffset: 0, lngOffset: -2, beforeRank: 16, afterRank: 1, address: "Defense Colony" },
    { id: 12, latOffset: 0, lngOffset: -1, beforeRank: 8, afterRank: 1, address: "Lajpat Nagar" },
    { id: 13, latOffset: 0, lngOffset: 0, beforeRank: 5, afterRank: 1, address: "South Ext" }, // Clinic Center
    { id: 14, latOffset: 0, lngOffset: 1, beforeRank: 12, afterRank: 1, address: "Greater Kailash" },
    { id: 15, latOffset: 0, lngOffset: 2, beforeRank: 18, afterRank: 1, address: "Nehru Place" },

    { id: 16, latOffset: 1, lngOffset: -2, beforeRank: 21, afterRank: 2, address: "Hauz Khas" },
    { id: 17, latOffset: 1, lngOffset: -1, beforeRank: 14, afterRank: 1, address: "Green Park" },
    { id: 18, latOffset: 1, lngOffset: 0, beforeRank: 11, afterRank: 1, address: "Safdarjung" },
    { id: 19, latOffset: 1, lngOffset: 1, beforeRank: 15, afterRank: 2, address: "Saket" },
    { id: 20, latOffset: 1, lngOffset: 2, beforeRank: 24, afterRank: 3, address: "Malviya Nagar" },

    { id: 21, latOffset: 2, lngOffset: -2, beforeRank: 28, afterRank: 4, address: "Vasant Kunj" },
    { id: 22, latOffset: 2, lngOffset: -1, beforeRank: 19, afterRank: 2, address: "Munirka" },
    { id: 23, latOffset: 2, lngOffset: 0, beforeRank: 16, afterRank: 1, address: "R K Puram" },
    { id: 24, latOffset: 2, lngOffset: 1, beforeRank: 20, afterRank: 2, address: "Dhaula Kuan" },
    { id: 25, latOffset: 2, lngOffset: 2, beforeRank: 30, afterRank: 5, address: "Dwarka Sectors" }
  ];

  const [heatmapView, setHeatmapView] = useState<'before' | 'after'>('after');
  const [selectedHeatmapCell, setSelectedHeatmapCell] = useState<any>(initialGrid[12]); // South Ext default

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Target Schema Injector */}
      <script type="application/ld+json">{schemasTemplates.article}</script>
      <script type="application/ld+json">{schemasTemplates.faq}</script>

      {/* Hero section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-900 bg-linear-to-b from-brand-navy/60 via-slate-950 to-[#030712]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left side case info */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> 📍 Local SEO Success Story
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                How We Increased Google Maps Visibility by <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-sky-400 to-indigo-300">580%</span> & Local Leads by <span className="text-emerald-400">420%</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                A complete Local SEO, Google Business Profile optimization, AI SEO, and conversion-focused local growth strategy that transformed a struggling dental clinic into a top-ranking local brand.
              </p>

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div id="stat-maps-visibility" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Maps Visibility</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">+580%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">First Page Map Pack</div>
                </div>
                <div id="stat-local-leads" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold font-sans">Monthly Leads</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">+420%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">35 → 180+ Inquiries</div>
                </div>
                <div id="stat-local-traffic" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Local Web Traffic</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">+310%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">Geo-targeted Search</div>
                </div>
                <div id="stat-phone-calls" className="bg-slate-900/40 backdrop-blur-xs border border-slate-800 p-4 rounded-xl text-left hover:border-slate-700 transition">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Customer Calls</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1">5X</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">Direct Dial Clicks</div>
                </div>
              </div>

              {/* CTA elements */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={openProposalForm}
                  className="px-8 py-4 bg-brand-orange text-white font-extrabold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 text-center flex items-center justify-center gap-2 cursor-pointer group font-sans"
                >
                  Book Free Local SEO Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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

            {/* Right side google maps rankings interactive simulation */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 opacity-25 blur-xl"></div>
              
              <div className="relative bg-[#0c101d] border border-blue-950/80 rounded-2xl p-5 shadow-2xl space-y-4">
                {/* Simulated header */}
                <div className="flex justify-between items-center border-b border-slate-850 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 font-mono"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2 font-semibold">Local Search Grid Audit</span>
                  </div>
                  <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                    <button 
                      onClick={() => setHeatmapView('before')}
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md transition cursor-pointer ${heatmapView === 'before' ? 'bg-red-950 text-red-400 border border-red-900/40' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Before
                    </button>
                    <button 
                      onClick={() => setHeatmapView('after')}
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md transition cursor-pointer ${heatmapView === 'after' ? 'bg-emerald-950 text-emerald-400 border border-emerald-900/40' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      After
                    </button>
                  </div>
                </div>

                {/* Heatmap Visual Widget */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5 align-middle">
                    <span className="flex items-center gap-1"><Map className="w-3.5 h-3.5 text-blue-400" /> Delhi NCR Grid Radius (5x5 km)</span>
                    <span className="text-slate-300 font-bold">Query: "dentist near me"</span>
                  </div>

                  <div className="grid grid-cols-5 gap-1.5 p-2 bg-[#050812] border border-slate-800/85 rounded-xl">
                    {initialGrid.map((cell) => {
                      const rank = heatmapView === 'before' ? cell.beforeRank : cell.afterRank;
                      let colorClass = "";
                      if (rank === 1) colorClass = "bg-emerald-500 text-white font-bold";
                      else if (rank <= 3) colorClass = "bg-emerald-600/90 text-emerald-100 font-bold";
                      else if (rank <= 5) colorClass = "bg-[#10b981]/50 text-emerald-200";
                      else if (rank <= 10) colorClass = "bg-yellow-500/40 text-yellow-200";
                      else colorClass = "bg-red-500/25 text-red-300";

                      const isSelected = selectedHeatmapCell.id === cell.id;

                      return (
                        <button
                          key={cell.id}
                          onClick={() => setSelectedHeatmapCell(cell)}
                          className={`h-9 sm:h-11 rounded-lg flex flex-col justify-center items-center text-xs transition-all relative cursor-pointer hover:scale-105 ${colorClass} ${isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#030712] scale-110 z-10 shadow-lg' : ''}`}
                        >
                          <span className="text-[14px] font-black">{rank}</span>
                          <span className="text-[7.5px] opacity-80 font-mono tracking-tighter leading-none">{cell.address.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Cell details popup */}
                  {selectedHeatmapCell && (
                    <div className="mt-3 bg-[#050812] border border-slate-850 p-2.5 rounded-xl text-left flex justify-between items-center animate-fade-in">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Grid Location</div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-400" /> {selectedHeatmapCell.address}, New Delhi
                        </div>
                      </div>
                      <div className="flex gap-4 text-center font-mono">
                        <div>
                          <div className="text-[8px] text-slate-500">BEFORE</div>
                          <div className="text-xs font-bold text-red-400 font-sans">Rank #{selectedHeatmapCell.beforeRank}</div>
                        </div>
                        <div className="border-l border-slate-850 pl-4">
                          <div className="text-[8px] text-slate-500">AFTER</div>
                          <div className="text-xs font-bold text-emerald-400 font-sans flex items-center gap-0.5">Rank #{selectedHeatmapCell.afterRank} <ArrowUpRight className="w-3 h-3 text-emerald-400 animate-pulse" /></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Micro indicators */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-[#050812] border border-slate-850 p-3 rounded-xl text-left">
                    <span className="text-[9px] text-slate-400 uppercase font-mono tracking-widest font-bold">Directions Index</span>
                    <div className="text-md font-bold text-slate-100 mt-0.5">+480% Growth</div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold mt-1 inline-block">120+ Maps Pathings / mo</span>
                  </div>
                  <div className="bg-[#050812] border border-slate-850 p-3 rounded-xl text-left">
                    <span className="text-[9px] text-slate-400 uppercase font-mono tracking-widest font-bold">Phone Dial Clickings</span>
                    <div className="text-md font-bold text-slate-100 mt-0.5">5X calls metrics</div>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold mt-1 inline-block">Direct appointment requests</span>
                  </div>
                </div>

                {/* Informative notice */}
                <div className="text-[10px] text-slate-500 font-mono text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Active geo-fencing tracking parameters configured.
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
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Industry Snapshot</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              About the Local Business
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side detail explanation */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-xl font-bold text-indigo-400">The Problem Background</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                Our client was an elite multi-location cosmetic dental clinic seeking high-value implants and cosmetic dental treatment patient appointments. Despite maintaining physical locations with outstanding modern facilities, their organic search footprint was virtually non-existent.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Out-of-market dental aggregator catalogs dominated local keyword variations. The clinic's Google Business Profile suffered from bad NAP (Name, Address, Phone) citation profiles across legacy directories, blocking any chances of making the Google Map Tag 3-pack.
              </p>
              <div className="p-5 bg-linear-to-r from-slate-900 to-[#0e1224] border border-slate-850 rounded-2xl flex items-start gap-4">
                <ShieldCheck className="w-10 h-10 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-md font-bold text-white">Critical Local Geo-Niche</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Targeting cosmetic patients searching within a 15-kilometer radius of their primary branch locations. Competition scores in Delhi NCR are among the heaviest globally for medical keywords.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side Snapshot Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/65 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Industry</span>
                <div className="text-md font-bold text-white mt-1">Cosmetic & Dental Clinic</div>
              </div>
              <div className="bg-slate-900/65 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Location</span>
                <div className="text-md font-bold text-white mt-1">Delhi NCR Region</div>
              </div>
              <div className="bg-slate-900/65 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">Business Type</span>
                <div className="text-md font-bold text-white mt-1">Local Service / Clinic</div>
              </div>
              <div className="bg-slate-900/65 border border-slate-800 p-5 rounded-xl hover:border-slate-750 transition text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">SEO Campaign</span>
                <div className="text-md font-bold text-white mt-1">6 Months Timeline</div>
              </div>
              <div className="bg-[#05111a] border border-blue-500/25 p-5 rounded-xl text-left col-span-1 sm:col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-blue-400">Leads Compounding</span>
                  <div className="text-2xl font-extrabold text-white mt-0.5">35 → 180+ / mo</div>
                </div>
                <ArrowUpRight className="w-8 h-8 text-blue-400 animate-bounce" />
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
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono font-sans">The Vulnerabilities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Critical Challenges Before Local SEO Optimization
              </h2>
              <p className="text-slate-400 font-light max-w-2xl text-sm">
                Our local health scans detected severe baseline visibility gaps across Google Maps structures and directories. The obstacles preventing patient appointments included:
              </p>
            </div>
            {/* Visual Health Card widget */}
            <div className="lg:col-span-5 bg-red-950/20 border border-red-900/40 p-6 rounded-2xl text-left">
              <div className="flex justify-between items-center text-sm font-mono text-red-400 mb-2 font-bold uppercase">
                <span>BEFORE LOCAL AUDIT INDEX</span>
                <span>28 / 100</span>
              </div>
              <div className="w-full bg-red-950 rounded-full h-3 overflow-hidden border border-red-900/40">
                <div className="bg-red-500 h-full rounded-full animate-pulse" style={{ width: '28%' }}></div>
              </div>
              <p className="text-[11px] text-red-300 font-mono mt-3 leading-snug">
                ⚠️ SEVERE LOCAL BLOCKS: Major keyword clustering overlap, weak localized reviews counts, 0 schema codes, and 0 citation consistency points.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Problem card 1 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all text-sm font-sans">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">01</div>
              <h4 className="text-lg font-bold text-white">Poor Google Maps Rankings</h4>
              <p className="text-xs text-slate-400 font-light">
                Stuck outside the Top 3 Map Pack spots on all critical organic keyword triggers like "Teeth whitening near me".
              </p>
            </div>

            {/* Problem card 2 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">02</div>
              <h4 className="text-lg font-bold text-white font-sans">Low Local Visibility</h4>
              <p className="text-xs text-slate-400 font-light">
                The business listing failed to display outside a narrow 1-kilometer radius, blocking potential high-value clients.
              </p>
            </div>

            {/* Problem card 3 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">03</div>
              <h4 className="text-lg font-bold text-white">Few Customer Calls</h4>
              <p className="text-xs text-slate-400 font-light">
                Extremely low phone call inquiries and directions clicks from mobile search listings.
              </p>
            </div>

            {/* Problem card 4 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">04</div>
              <h4 className="text-lg font-bold text-white font-sans">Weak Google Business Profile</h4>
              <p className="text-xs text-slate-400 font-light">
                Outdated details, un-optimized medical business classification, and thin descriptions hurt Maps relevance.
              </p>
            </div>

            {/* Problem card 5 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">05</div>
              <h4 className="text-lg font-bold text-white">Low Reviews & Star Rating</h4>
              <p className="text-xs text-slate-400 font-light font-sans">
                Only had 18 reviews total. Lacked an automated patient review campaign, driving prospects to higher-rated clinics.
              </p>
            </div>

            {/* Problem card 6 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">06</div>
              <h4 className="text-lg font-bold text-white">Poor Mobile Experience</h4>
              <p className="text-xs text-slate-400 font-light">
                Appointment buttons were slow to trigger and hard responsive menus on smartphones caused users to bounce out.
              </p>
            </div>

            {/* Problem card 7 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">07</div>
              <h4 className="text-lg font-bold text-white">No AI Search Visibility</h4>
              <p className="text-xs text-slate-400 font-light">
                Lacked Local Business markup syntax, leading conversational engines like ChatGPT to suggest competing doctors instead.
              </p>
            </div>

            {/* Problem card 8 */}
            <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl text-left space-y-3 hover:border-red-900/15 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-950/30 border border-red-900/40 flex items-center justify-center text-red-400 font-bold">08</div>
              <h4 className="text-lg font-bold text-white font-sans">Poor Conversion Rates</h4>
              <p className="text-xs text-slate-400 font-light">
                Static contact forms with no instant WhatsApp connectivity options lowered first-time lead interest levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LOCAL SEO STRATEGY SECTION */}
      <section className="py-20 border-b border-slate-900 bg-linear-to-b from-slate-950 to-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Core Blueprint</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Our Local SEO Growth Strategy
            </h2>
            <p className="text-slate-400 font-light text-sm">
              An exhaustive 6-month, 6-phase growth campaign centered on structural Maps relevance, AI semantic integrations, and structured review generation pipelines.
            </p>
          </div>

          {/* Timeline UI Representation */}
          <div className="relative border-l border-slate-800 md:pl-10 md:ml-10 space-y-12">
            
            {/* Phase 1 */}
            <div className="relative text-left space-y-2 animate-fade-in">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-blue-400 text-xs font-mono font-bold">1</div>
              <span className="text-[11px] font-bold text-blue-400 tracking-widest uppercase font-mono bg-blue-500/5 border border-blue-500/15 px-2.5 py-0.5 rounded-full inline-block">Phase 1</span>
              <h3 className="text-xl font-bold text-white">GBP Integrity Audit & Competitor Radius Scan</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We completed a comprehensive citation and NAP (Name, Address, Phone) audit to fix inconsistencies across legacy directories. We conducted a localized radial grid analysis to identify ranking drop-offs relative to competitors.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Corrected over 60 listing inaccuracies and built a solid foundational database.
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-indigo-400 text-xs font-mono font-bold">2</div>
              <span className="text-[11px] font-bold text-indigo-400 tracking-widest uppercase font-mono bg-indigo-950/35 border border-indigo-900/30 px-2.5 py-0.5 rounded-full inline-block font-sans">Phase 2</span>
              <h3 className="text-xl font-bold text-white">Google Business Profile Deep Optimization</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We restructured the primary medical categories list, integrated semantic descriptions, and uploaded high-resolution, geo-tagged photos coordinates to establish local geographical signals.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Google Map relevance scores and directions requests showed immediate improvements.
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-teal-400 text-xs font-mono font-bold font-sans">3</div>
              <span className="text-[11px] font-bold text-teal-400 tracking-widest uppercase font-mono bg-teal-905/30 border border-teal-900/40 px-2.5 py-0.5 rounded-full inline-block">Phase 3</span>
              <h3 className="text-xl font-bold text-white">Localized keyword page & schema embedding</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl font-sans">
                We designed high-converting location pages matching targeted medical modifiers. We embedded custom geographic Schema (JSON-LD) arrays, defining precise latitudes, longitudes, and direct services mapping.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Organics keywords scaled up directly into Google local rankings.
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-yellow-400 text-xs font-mono font-bold">4</div>
              <span className="text-[11px] font-bold text-yellow-400 tracking-widest uppercase font-mono bg-yellow-950/30 border border-yellow-900/40 px-2.5 py-0.5 rounded-full inline-block">Phase 4 — AI Trending</span>
              <h3 className="text-xl font-bold text-white">AI Search & Voice optimization</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We optimized long-tail conversational user FAQs to earn target citations within generative answers across ChatGPT Search, Gemini, and Siri/Google voice queries.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Earned major voice-activated queries and ChatGPT citations.
              </div>
            </div>

            {/* Phase 5 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-fuchsia-400 text-xs font-mono font-bold">5</div>
              <span className="text-[11px] font-bold text-fuchsia-400 tracking-widest uppercase font-mono bg-fuchsia-950/30 border border-fuchsia-900/35 px-2.5 py-0.5 rounded-full inline-block">Phase 5</span>
              <h3 className="text-xl font-bold text-white">Location Content Hub Scaling</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We created localized symptom guides, area dental care blogs, and localized community resource content. This established deep structural local authority with search engines tracking regional relevance.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Total topical search metrics and keyword impressions scaled significantly.
              </div>
            </div>

            {/* Phase 6 */}
            <div className="relative text-left space-y-2">
              <div className="absolute -left-[53px] md:-left-[93px] w-9 h-9 border border-indigo-950 bg-[#0d0f1c] rounded-full flex items-center justify-center text-amber-400 text-xs font-mono font-bold">6</div>
              <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase font-mono bg-amber-950/30 border border-amber-900/35 px-2.5 py-0.5 rounded-full inline-block font-sans">Phase 6</span>
              <h3 className="text-xl font-bold text-white">Reputation Building & Citation Campaigns</h3>
              <p className="text-sm text-slate-300 font-light max-w-4xl">
                We designed an automated review acquisition funnel to systematically collect clinical patient feedback. We coupled this with structured, highly relevant local directory link building.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-3.5 h-3.5" /> Result: Reviews increased from 18 to over 240+ verified star records.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Actual Metrics</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Local SEO Results Achieved
            </h2>
            <p className="text-slate-400 font-light text-sm">
              Official client operational indexes pulled down from Google Business Profile Insights and GSC data boards.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-500/10 to-transparent pointer-events-none"></div>
              <TrendingUp className="w-8 h-8 text-blue-400 mb-3 animate-pulse" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Google Maps Visibility</div>
              <div className="text-4xl font-black text-white mt-1">+580%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Impressions and views across local search results and mobile map apps.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden font-sans">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-emerald-500/10 to-transparent pointer-events-none"></div>
              <PhoneCall className="w-8 h-8 text-emerald-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Patient lead growth</div>
              <div className="text-4xl font-black text-emerald-400 mt-1">+420%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Monthly consultation requests scaled from 35 up to over 180+ appointments.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-indigo-500/10 to-transparent pointer-events-none"></div>
              <Percent className="w-8 h-8 text-indigo-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Conversion optimization</div>
              <div className="text-4xl font-black text-white mt-1">1.2% → 5.4%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Refined GBP CTA triggers and streamlined mobile forms optimized performance.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-amber-500/10 to-transparent pointer-events-none"></div>
              <Globe className="w-8 h-8 text-amber-400 mb-3 animate-spin-slow" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Local organic traffic</div>
              <div className="text-4xl font-black text-white mt-1">+310%</div>
              <p className="text-xs text-slate-400 mt-2 font-light">High-intent regional user search sessions on geo-specific landing pages.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-fuchsia-500/10 to-transparent pointer-events-none"></div>
              <Star className="w-8 h-8 text-fuchsia-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold">Google Reviews profile</div>
              <div className="text-4xl font-black text-white mt-1">18 → 240+</div>
              <p className="text-xs text-slate-400 mt-2 font-light">Compounded verified star counts coupled with real patient feedback triggers.</p>
            </div>

            <div className="bg-[#0b0e1c] border border-slate-800 p-6 rounded-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-sky-500/10 to-transparent pointer-events-none"></div>
              <Phone className="w-8 h-8 text-sky-400 mb-3" />
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-extrabold font-sans">Customer Call clicks</div>
              <div className="text-4xl font-black text-white mt-1">5X Growth</div>
              <p className="text-xs text-slate-400 mt-2 font-light">First-time call actions triggered directly from mobile Map Pack listings.</p>
            </div>
          </div>

          {/* Simple Visual SVG Analytics Plot */}
          <div className="bg-[#0b0e1c]/40 border border-slate-850 p-6 rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="text-left font-sans">
                <h4 className="text-md font-bold text-white">Compound local lead scaling curve</h4>
                <p className="text-xs text-slate-500 mt-0.5">Plotting monthly clinical patient inquiries over our campaign.</p>
              </div>
              <span className="text-[10px] font-mono text-blue-400 border border-blue-900 bg-blue-950/40 px-2.5 py-1 rounded-lg">
                📍 Baseline Target: High-value Implants inquiries
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
                  <linearGradient id="localChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 0,90 C 20,88 40,84 60,80 C 80,72 100,50 120,38 C 140,25 160,18 180,12 L 200,8 L 200,100 L 0,100 Z" 
                  fill="url(#localChartGrad)" 
                />
                <path 
                  d="M 0,90 C 20,88 40,84 60,80 C 80,72 100,50 120,38 C 140,25 160,18 180,12 L 200,8" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                <circle cx="200" cy="8" r="4" fill="#3b82f6" className="animate-ping" style={{ transformOrigin: '200px 8px' }} />
                <circle cx="200" cy="8" r="2.5" fill="#3b82f6" />
              </svg>

              <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-900 mt-2">
                <span>Month 1 (35 leads)</span>
                <span>Month 3 (85 leads)</span>
                <span>Month 5 (145 leads)</span>
                <span>Month 6 (180+ leads)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE VS AFTER SECTION & INTERACTIVE SLIDER */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side details */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Performance Check</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Before vs After Local SEO Optimization
              </h2>
              <p className="text-slate-400 font-light text-sm">
                A structured breakdown of our local ranking and patient lead generation metrics compared directly side-by-side:
              </p>
              
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Average local rankings jumped from the 18th spot straight to #1.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-sans">Leads grew by over 420%, delivering patients consistently.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Total reviews grew from 18 to 240+ verified star records.</span>
                </div>
              </div>
            </div>

            {/* Right side Table & Comparison UI */}
            <div className="lg:col-span-7 space-y-6">
              <div className="overflow-x-auto rounded-xl border border-slate-850 bg-slate-100/5 font-sans">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b0e1c] border-b border-slate-800 text-slate-300 font-mono font-bold uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="p-4">Key Performance Indicators</th>
                      <th className="p-4 text-red-400">Before Audit</th>
                      <th className="p-4 text-emerald-400">After Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850/60 font-light text-slate-300">
                    <tr>
                      <td className="p-4 font-semibold text-white">Google Maps Rank</td>
                      <td className="p-4 text-red-300">#18 average (Page 2)</td>
                      <td className="p-4 text-emerald-300 font-bold">#1 spot (Map Pack)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Monthly Patient Leads</td>
                      <td className="p-4 text-red-300">35 Inquiries / mo</td>
                      <td className="p-4 text-emerald-300 font-bold">180+ Inquiries / mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Customer Calls</td>
                      <td className="p-4 text-red-300">22 call clicks / mo</td>
                      <td className="p-4 text-emerald-300 font-bold">140+ call clicks / mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Regional Website Users</td>
                      <td className="p-4 text-red-300">1.8K monthly sessions</td>
                      <td className="p-4 text-emerald-300 font-bold">7.5K monthly sessions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Slider Comparative View */}
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
                  <span className="text-6xl sm:text-7xl select-none">📍</span>
                  <h4 className="text-xl sm:text-2xl font-black text-red-400 mt-4 leading-tight">Buried on Maps (Before)</h4>
                  <p className="text-xs text-red-300 mt-2 max-w-sm font-sans">
                    Thin descriptions, duplicate NAP listing data, and zero local schemas kept the clinic invisible to prospective local patients.
                  </p>
                </div>

                {/* After layer */}
                <div 
                  className="absolute inset-y-0 right-0 bg-[#071914] flex flex-col justify-center items-center text-center p-6 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 text-center shrink-0" style={{ width: '100%', transform: `translateX(-${sliderPosition/2}%)` }}>
                    <span className="text-6xl sm:text-7xl select-none">👑</span>
                    <h4 className="text-xl sm:text-2xl font-black text-emerald-400 mt-4 leading-tight font-sans">Dominating local spots (After)</h4>
                    <p className="text-xs text-emerald-200 mt-2 max-w-sm font-sans">
                      Dominated the primary local keywords with structured Map coordinates, robust geo-reviews, and high visibility.
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute inset-y-0 w-1 bg-blue-500 shadow-lg flex items-center justify-center cursor-pointer pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 border border-white flex items-center justify-center text-white text-xs font-bold font-mono">
                    ↔
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS RANKINGS TABLE */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12 text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Rank Updates</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Google Maps Ranking Improvements
            </h2>
            <p className="text-slate-400 font-light text-sm mt-1">
              Check out these verified rank shifts achieved on competitive, high-difficulty local search phrases:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-850">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead className="bg-[#0b0e1c] text-slate-300 font-mono font-bold uppercase tracking-widest text-[10px] border-b border-slate-800">
                <tr>
                  <th className="p-4">Target Keyword</th>
                  <th className="p-4 text-red-400">Before Rank</th>
                  <th className="p-4 text-emerald-400">After Rank</th>
                  <th className="p-4 font-mono text-slate-300">Organic Status Indicators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850/60 font-light text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Dentist Near Me</td>
                  <td className="p-4 text-red-300">#18</td>
                  <td className="p-4 text-emerald-300 font-bold flex items-center gap-1">#1 spot <Sparkles className="w-4.5 h-4.5 text-brand-orange animate-pulse" /></td>
                  <td className="p-4 text-xs font-mono text-slate-400">👑 Top Map Pack Spot</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Dental Clinic Delhi</td>
                  <td className="p-4 text-red-300">#14</td>
                  <td className="p-4 text-emerald-300 font-bold flex items-center gap-1">#2 spot <CheckCircle className="w-4 h-4 text-emerald-400" /></td>
                  <td className="p-4 text-xs font-mono text-slate-400">👑 Dominated medical searches</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Teeth Whitening Delhi</td>
                  <td className="p-4 text-red-300">#29</td>
                  <td className="p-4 text-emerald-300 font-bold flex items-center gap-1">#3 spot <CheckCircle className="w-4 h-4 text-emerald-400" /></td>
                  <td className="p-4 text-xs font-mono text-slate-400">✅ Front-page Map selection</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Best Dentist in Delhi</td>
                  <td className="p-4 text-red-300">#22</td>
                  <td className="p-4 text-emerald-300 font-bold flex items-center gap-1">#1 spot <Sparkles className="w-4.5 h-4.5 text-brand-orange animate-pulse" /></td>
                  <td className="p-4 text-xs font-mono text-slate-400">👑 Top Map Pack Spot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI SEO & VOICE SEARCH RESULTS */}
      <section className="py-20 border-b border-slate-900 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left info structure */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-950 border border-indigo-900 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
                <Bot className="w-4 h-4" /> AI SEO & VOISE SEARCH TRENDING
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                AI SEO & Voice Search Growth Results
              </h2>

              <p className="text-slate-300 font-light leading-relaxed">
                As Search Engine Optimization (GEO) and conversational queries scale, local clinics must rank inside AI indexes. We optimized local schemas to ensure conversational engines consistently recommend our client.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div className="bg-slate-900/30 border border-slate-850 p-4 rounded-xl">
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">ChatGPT Visibility</span>
                  <h4 className="text-md font-bold text-white mt-1">Primary Local Recommendation</h4>
                  <p className="text-xs text-slate-400 mt-1">Highlighted on local search outputs asking for dental implants.</p>
                </div>
                <div className="bg-slate-900/30 border border-slate-850 p-4 rounded-xl">
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">Voice search optimization</span>
                  <h4 className="text-md font-bold text-white mt-1">#1 Voice assistant recommendations</h4>
                  <p className="text-xs text-slate-400 mt-1">Optimized question phrasing matches organic voice user queries.</p>
                </div>
              </div>
            </div>

            {/* Right Chatbot Response Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b0e1c] border border-indigo-950 rounded-2xl p-4 sm:p-5 text-left space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-850 pb-3">
                  <Bot className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs font-mono text-indigo-300 font-bold">Generative Engine Simulation</span>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  {/* User Question */}
                  <div className="bg-[#050812] border border-slate-850 p-3 rounded-xl max-w-[85%] self-end">
                    <span className="text-[10px] text-indigo-400 font-mono font-bold block mb-1">USER QUERY:</span>
                    "What's the best local cosmetic dentist clinic in Delhi NCR for high-value implants?"
                  </div>

                  {/* AI Response */}
                  <div className="bg-indigo-950/20 border border-indigo-900/40 p-3 rounded-xl max-w-[95%] space-y-2">
                    <span className="text-[10px] text-emerald-400 font-mono font-bold block">AI SEARCH ANSWER:</span>
                    <p className="text-slate-350 font-light leading-relaxed font-sans">
                      "Based on local schema records, clinic specialties, patient ratings, and regional directories, the top-recommended choice is the <strong>[Client Cosmetic Clinic]</strong> in Delhi NCR."
                    </p>
                    <div className="p-2.5 bg-[#050812]/80 border border-slate-850 rounded-lg space-y-1.5">
                      <div className="text-[10px] font-mono text-emerald-400 font-bold">🔑 VERIFIED ALGORITHMIC CRITERIA</div>
                      <div className="text-[10px] text-slate-300 font-sans">• Direct Local Schema alignment</div>
                      <div className="text-[10px] text-slate-300 font-sans">• 240+ verified geo-tagged references</div>
                      <div className="text-[10px] text-slate-300 font-sans font-sans">• Structured medical category tags</div>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" /> Conversational engine discovery rate +330%.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOCAL TRAFFIC ACQUISITION BREAKDOWN */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Traffic Analytics</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Local Traffic Acquisition Breakdown
            </h2>
            <p className="text-slate-400 font-light text-sm">
              An diagnostic look at how patients search, discover, and interact with the local clinic listing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            <div className="bg-[#0b0e1c] border border-slate-850 p-5 rounded-2xl text-left space-y-2">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">Map Pack Traffic</span>
              <div className="text-3xl font-extrabold text-white">65%</div>
              <p className="text-xs text-slate-400 font-light">The absolute powerhouse of local medical discovery searches.</p>
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-5 rounded-2xl text-left space-y-2">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">Mobile smartphone views</span>
              <div className="text-3xl font-extrabold text-white">82%</div>
              <p className="text-xs text-slate-400 font-light">Searchers looking for active medical care options on mobile.</p>
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-5 rounded-2xl text-left space-y-2">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">Dial Click Action</span>
              <div className="text-3xl font-extrabold text-white">45%</div>
              <p className="text-xs text-slate-400 font-light">Click paths targeting direct phone call dials on mobile.</p>
            </div>
            <div className="bg-[#0b0e1c] border border-slate-850 p-5 rounded-2xl text-left space-y-2">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">Geo-Fenced Leads</span>
              <div className="text-3xl font-extrabold text-white">3.5X</div>
              <p className="text-xs text-slate-400 font-light">Lead conversion multiplier compared to generic channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONVERSION OPTIMIZATION RESULTS */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12 text-left space-y-2 font-sans">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">CRO Enhancements</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Conversion Rate Optimization Results
            </h2>
            <p className="text-slate-400 font-light text-sm">
              We paired our visibility campaign with conversion-focused UX refinements on the GBP and clinic pages to drive real appointments:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-2xl space-y-3">
              <PhoneCall className="w-8 h-8 text-blue-400" />
              <h4 className="text-lg font-bold text-white">Appointment Forms</h4>
              <p className="text-xs text-slate-400 font-light">
                Optimized mobile forms with simple appointment reservation inputs, reducing frictional drop-offs by 50%.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-2xl space-y-3">
              <MessageSquare className="text-emerald-400 w-8 h-8" />
              <h4 className="text-lg font-bold text-white">WhatsApp Integration</h4>
              <p className="text-xs text-slate-400 font-light">
                Fast-loading click-to-chat triggers resolved initial patient questions immediately over WhatsApp threads.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-2xl space-y-3">
              <Users className="w-8 h-8 text-indigo-400" />
              <h4 className="text-lg font-bold text-white font-sans">GBP CTA Optimization</h4>
              <p className="text-xs text-slate-400 font-light">
                Positioned distinct "Request Appointment" modifiers directly inside Google Maps search outputs.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-2xl space-y-3">
              <Star className="w-8 h-8 text-fuchsia-400" />
              <h4 className="text-lg font-bold text-white font-sans">Geo-Targeted Social Proof</h4>
              <p className="text-xs text-slate-400 font-light">
                Highlighted verified, localized 5-star ratings on all location-specific pages to establish strong authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXCELENT LOCAL SEO ROI CALCULATOR */}
      <section className="py-20 border-b border-slate-900 bg-[#060814] relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(59,130,246,0.05),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-[#0b0e1c] border border-blue-950/80 rounded-3xl p-6 sm:p-10 shadow-2xl text-left space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
                <BarChart className="w-4 h-4 text-blue-400" /> Interactive Forecast Tool
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Local SEO ROI & Leads Calculator</h3>
              <p className="text-xs text-slate-400 font-light">
                Input your geographic search volume, current rankings, and average lead value to estimate potential growth using our Maps strategy models:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Range inputs */}
              <div className="space-y-5 md:col-span-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span className="font-medium align-middle">Monthly Geo Search Volume</span>
                    <span className="text-blue-400 font-bold font-mono">{estMonthlySearch.toLocaleString()} Searches</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="1000"
                    value={estMonthlySearch} 
                    onChange={(e) => setEstMonthlySearch(Number(e.target.value))}
                    className="w-full accent-blue-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>1,000</span>
                    <span>25,000</span>
                    <span>50,000</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span className="font-medium">Current Average Maps Rank</span>
                    <span className="text-red-400 font-bold font-mono">Rank #{currentRank} (Page {Math.ceil(currentRank/10)})</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={currentRank} 
                    onChange={(e) => setCurrentRank(Number(e.target.value))}
                    className="w-full accent-blue-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>#1 (Map Pack)</span>
                    <span>#15 (Page 2)</span>
                    <span>#30 (Page 3)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span className="font-medium">Average Appointment/Patient Value</span>
                    <span className="text-emerald-400 font-bold font-mono">₹{avgTicketValue.toLocaleString()} / Lead</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="1000"
                    value={avgTicketValue} 
                    onChange={(e) => setAvgTicketValue(Number(e.target.value))}
                    className="w-full accent-blue-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>₹1,000</span>
                    <span>₹25,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>
              </div>

              {/* Forecast calculations card */}
              <div className="bg-[#050812] border border-blue-950/80 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-3.5">
                  <div>
                    <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider block font-bold">Estimated Monthly Inquiries</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-red-400 text-sm font-bold font-mono">{currentEstimatedLeads} Current</span>
                      <span className="text-slate-500 text-xs font-bold">→</span>
                      <span className="text-emerald-400 text-md font-bold font-mono flex items-center gap-0.5">{targetEstimatedLeads} Target <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /></span>
                    </div>
                  </div>

                  <div className="border-t border-slate-900 pt-3">
                    <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider block font-bold">Estimated Monthly Revenue</span>
                    <div className="flex flex-col mt-1 font-mono">
                      <span className="text-xs text-slate-400">Current: ₹{currentValuation.toLocaleString()}</span>
                      <span className="text-md font-extrabold text-emerald-400 mt-0.5">Target: ₹{targetValuation.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-blue-950/60 pt-3">
                  <span className="text-[10px] text-blue-400 uppercase tracking-widest font-mono font-bold block">Estimated Revenue Lift</span>
                  <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300 mt-1 font-mono">
                    +₹{revenueLift.toLocaleString()} <span className="text-xs text-slate-400 font-light font-sans">/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL SECTION */}
      <section className="py-20 border-b border-slate-900 bg-linear-to-b from-[#030712] to-slate-950">
        <div className="max-w-5xl mx-auto px-4 font-sans">
          <div className="bg-[#0b0e1c] border border-slate-850 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="text-4xl">“</span>
              <blockquote className="text-lg sm:text-2xl font-light text-slate-155 leading-relaxed font-sans italic">
                “AKGLS Group completely transformed our local visibility and lead pipelines. Within months, we dominated Google Maps across all primary search locations and now scale steady patient appointments daily.”
              </blockquote>
              
              <div className="flex flex-col items-center space-y-2 pt-4">
                <div className="w-14 h-14 rounded-full bg-indigo-950/80 border border-indigo-900 flex items-center justify-center text-blue-400 font-bold text-lg">CD</div>
                <div>
                  <h4 className="text-md font-bold text-white">Chief Dental Director</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Premium Cosmetic Dental Clinic • New Delhi Region</p>
                </div>
              </div>

              {/* SEO results badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/50 border border-emerald-900/40 rounded-full text-emerald-400 text-xs font-mono font-semibold">
                ⭐️ Star rating: +240 verified local Patient Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 font-sans">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">The Stack</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Local SEO Tools & Technologies Used
            </h2>
            <p className="text-slate-450 font-light text-sm">
              We deploy the industry's absolute highest standards of software intelligence:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <MapPin className="text-blue-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200">Google Business Profile</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <Globe className="text-indigo-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200 font-sans">Google Analytics 4</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <Terminal className="text-blue-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200">Google Search Console</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <Navigation className="text-teal-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200 font-sans">BrightLocal Platform</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <Search className="text-yellow-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200">SEMrush Audits</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3 font-sans">
              <Code className="text-emerald-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200">Ahrefs Link Engine</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <Bot className="text-fuchsia-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200">ChatGPT Optimizations</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <Activity className="text-sky-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200 font-sans">Google Tag Manager</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <PhoneCall className="text-amber-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200">Enterprise Call Trackings</span>
            </div>
            <div className="bg-slate-905/30 border border-slate-850 p-4 rounded-xl flex items-center gap-3 font-sans">
              <Cpu className="text-indigo-400 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-200">Gemini AI Models</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS STRATEGY WORKED */}
      <section className="py-20 border-b border-slate-900 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Key Reasons</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Why Our Local SEO Strategy Worked
            </h2>
            <p className="text-slate-400 font-light text-sm">
              True Local organic growth is a precise diagnostic operation. This strategy dominated local rankings for multiple key reasons:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-950/40 border border-blue-900/40 rounded-full flex items-center justify-center text-blue-400 font-bold">1</div>
              <h4 className="text-lg font-bold text-white">Google Maps Dominance</h4>
              <p className="text-sm text-slate-400 font-light">
                Continuous reviews, photo updates, and structured categories drove maps prominence, maximizing regional patient impressions.
              </p>
            </div>
            <div className="space-y-3 font-sans">
              <div className="w-12 h-12 bg-indigo-950/40 border border-indigo-900/40 rounded-full flex items-center justify-center text-indigo-400 font-bold">2</div>
              <h4 className="text-lg font-bold text-white">AI Search Integration</h4>
              <p className="text-sm text-slate-400 font-light">
                Our localized schema markups established clear machine signals, ensuring ChatGPT and Gemini recommended the clinic for local organic queries.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-teal-950/40 border border-[#0d9488]/30 rounded-full flex items-center justify-center text-teal-450 font-bold">3</div>
              <h4 className="text-lg font-bold text-white">Review Acquisition Funnel</h4>
              <p className="text-sm text-slate-400 font-light">
                Automated clinical reviews collection scaled star counts from 18 to 240+, boosting visitor trust levels.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <div className="w-12 h-12 bg-yellow-950/40 border border-yellow-904/30 rounded-full flex items-center justify-center text-yellow-450 font-bold">4</div>
              <h4 className="text-lg font-bold text-white">Mobile UX Optimization</h4>
              <p className="text-sm text-slate-400 font-light">
                Fast forms and direct WhatsApp connectivity captured mobile searchers, increasing conversion performance.
              </p>
            </div>
            <div className="space-y-3 font-sans">
              <div className="w-12 h-12 bg-fuchsia-950/40 border border-fuchsia-100/10 rounded-full flex items-center justify-center text-fuchsia-450 font-bold">5</div>
              <h4 className="text-lg font-bold text-white">Local Authority Signals</h4>
              <p className="text-sm text-slate-400 font-light">
                Secure location pages and high-value localized backlink outreach scaled search rankings across Delhi NCR.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-sky-950/40 border border-sky-900/40 rounded-full flex items-center justify-center text-sky-400 font-bold">6</div>
              <h4 className="text-lg font-bold text-white font-sans">Faceted Internal Linking</h4>
              <p className="text-sm text-slate-400 font-light">
                Linking area blogs to parent services pages funneled PageRank directly to core conversion landing paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES GALLERY */}
      <section className="py-20 border-b border-slate-900 bg-[#060814]">
        <div className="max-w-7xl mx-auto px-4 font-sans">
          <div className="text-left mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Other Successes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Related SEO Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* Related Case Study 1 */}
            <div className="bg-[#0b0e1c] border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-700 transition">
              <div className="p-6 space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-blue-400">Ecommerce SEO Case Study</span>
                <h4 className="text-lg font-bold text-white leading-snug">Scaling Fashion Retail: +450% Traffic & +320% Revenue growth</h4>
                <p className="text-xs text-slate-400 font-light">Discover how we scaled catalog navigation schemas and product metrics to maximize commercial organic sales.</p>
                <a href="/case-study/ecommerce-seo-results" className="text-xs font-bold text-blue-400 flex items-center gap-1 hover:text-blue-300">
                  Read Ecommerce Study <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Related Case Study 2 */}
            <div className="bg-[#0b0e1c] border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-700 transition">
              <div className="p-6 space-y-4 font-sans">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-blue-400">Technical SEO Recovery</span>
                <h4 className="text-lg font-bold text-white leading-snug font-sans">Overcoming Google Core penalty drop-offs internally</h4>
                <p className="text-xs text-slate-400 font-light">See how we audited indexing files and fixed poor mobile indexing parameters to restore lost organic search traffic.</p>
                <span className="text-xs font-mono text-slate-500 block">Restored fully under NDA</span>
              </div>
            </div>

            {/* Related Case Study 3 */}
            <div className="bg-[#0b0e1c] border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-700 transition">
              <div className="p-6 space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-purple-400">PPC & Paid Campaigns</span>
                <h4 className="text-lg font-bold text-white leading-snug">Paid Ad optimization: 11X ROAS and +620% Qualified Leads Lifts</h4>
                <p className="text-xs text-slate-400 font-light font-sans">See complete account restructuring, AI dynamic bidding, and landing optimization models siphoning direct conversions.</p>
                <button 
                  onClick={() => {
                    window.history.pushState(null, '', '/case-study/ppc-success-stories/');
                    window.dispatchEvent(new Event('popstate'));
                  }}
                  className="text-xs font-bold text-blue-400 flex items-center gap-1 hover:text-blue-300 bg-transparent border-none p-0 cursor-pointer font-sans"
                >
                  Read PPC Study <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDIONS */}
      <section className="py-20 border-b border-slate-900 bg-[#030712] font-sans">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Answers Hub</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Local SEO Frequently Asked Questions
            </h2>
            <p className="text-slate-450 font-light text-sm">
              Explore our transparent breakdown of Local SEO details, GBP tactics, and campaign mechanics:
            </p>
          </div>

          <div className="space-y-4">
            {localFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0b0e1c] border border-slate-850 rounded-2xl overflow-hidden text-left"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 flex justify-between items-center text-white font-bold text-sm sm:text-md hover:bg-slate-900/40 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 border-t border-slate-850/60 bg-slate-950/20 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCHEMA MARKUP DETAILS */}
      <section className="py-20 border-b border-slate-900 bg-[#060814] relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explanatory side */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Machine Metadata</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Local Schema Structured Markup Code
              </h2>
              <p className="text-slate-350 font-light text-sm leading-relaxed">
                By injecting Local Business and Product review JSON- LD structures, search engines identify our physical parameters, operating schedules, core services, and patient ratings instantly.
              </p>
              
              <div className="space-y-2.5 font-mono">
                <button 
                  onClick={() => copySchemaJson(schemasTemplates.article, 'article')}
                  className="w-full bg-[#0b0e20] border border-indigo-950 text-slate-300 p-3.5 rounded-xl hover:border-blue-500/30 transition flex justify-between items-center cursor-pointer text-xs"
                >
                  <span>1. View Tech Article Schema Code</span>
                  <span className="text-[10px] text-blue-400 font-bold">{copiedSchema === 'article' ? 'Copied ✅' : 'Copy Code 📋'}</span>
                </button>
                <button 
                  onClick={() => copySchemaJson(schemasTemplates.faq, 'faq')}
                  className="w-full bg-[#0b0e20] border border-indigo-950 text-slate-300 p-3.5 rounded-xl hover:border-blue-500/30 transition flex justify-between items-center cursor-pointer text-xs"
                >
                  <span>2. View Local FAQ Schema Code</span>
                  <span className="text-[10px] text-blue-400 font-bold">{copiedSchema === 'faq' ? 'Copied ✅' : 'Copy Code 📋'}</span>
                </button>
              </div>
            </div>

            {/* Code presentation container */}
            <div className="lg:col-span-7">
              <div className="bg-[#050812] border border-slate-850 rounded-2xl p-4 sm:p-5 relative">
                <div className="flex justify-between items-center border-b border-slate-850 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-mono text-slate-400">local-seo-schema.json</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-900/60">Strict JSON-LD Schema</span>
                </div>

                <pre className="text-left text-[11px] font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed max-h-80 select-all p-3 bg-black/40 rounded-xl">
                  {`{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Cosmetic Dental Clinic",
  "location": "New Delhi, Delhi NCR",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.5672",
    "longitude": "77.2102"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "240"
  },
  "telephone": "+91 831 811 4492"
}`}
                </pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLINICAL BLOG & ARTICLES SUGGESTIONS */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/20 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Localized Guides</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans animate-pulse-slow">
              Medical & Local Growth Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900/40 border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-700 transition p-6 space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold block">Medical Practice</span>
              <h4 className="text-md font-bold text-white font-sans leading-snug">Local SEO for Clinics and Healthcare Providers: Dominating GBP</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">How doctor offices and clinics can bypass competitor directories to scale patient inquiries.</p>
              <span className="text-xs font-bold text-blue-400 inline-block font-mono">Published and Verified 📑</span>
            </div>
            <div className="bg-slate-900/40 border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-700 transition p-6 space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold block">Google Maps Tips</span>
              <h4 className="text-md font-bold text-white font-sans leading-snug">Google Business Profile Optimization Guide (formerly GMB)</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">Full optimization instructions on managing primary classifications, geo-tagged coordinate maps, and user audits.</p>
              <span className="text-xs font-bold text-blue-400 inline-block font-mono">Published and Verified 📑</span>
            </div>
            <div className="bg-slate-900/40 border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-700 transition p-6 space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold block">AI Trends</span>
              <h4 className="text-md font-bold text-white font-sans leading-snug">AI SEO and GEO: Scaling Conversational Citations on Perplexity</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">How conversational AI search engines reference offline databases to answer patient medical questions.</p>
              <span className="text-xs font-bold text-blue-400 inline-block font-mono font-sans">Published and Verified 📑</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ENTRANCE SECTION */}
      <section className="py-20 bg-linear-to-b from-[#030712] via-brand-navy/30 to-[#030712] border-b border-slate-900 text-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono bg-blue-950 border border-blue-900/40 px-3 py-1 rounded-full inline-block">
            📍 Domain Visibility Scaler
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-sans">
            Ready to Become the Top Local Business in Your Area?
          </h2>
          <p className="text-slate-300 font-light max-w-2xl mx-auto text-sm sm:text-md">
            Let AKGLS Group transform your Google Maps presence, drive patient dials, scale calls, and optimize conversions with AI-powered Local SEO blueprints.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={openProposalForm}
              className="px-8 py-4 bg-brand-orange text-white font-extrabold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Local SEO Campaign <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-blue-400" /> Talk to Local SEO Experts
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-850/60 font-mono text-[10px] text-slate-450 uppercase font-bold tracking-widest text-center">
            <div>📍 Map Pack Specialists</div>
            <div className="border-l border-slate-850">🤖 AI-Powered SEO</div>
            <div className="border-l border-slate-850">📊 Transparent Analytics</div>
            <div className="border-l border-slate-850">🔥 ROI-Focused Growth</div>
          </div>
        </div>
      </section>

      {/* FINAL FLOATING OR FIXED FOOTER CONTACT BUTTONS (MOBILE-FRIENDLY ACCENT TRIGGERS) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-emerald-600 transition-all hover:scale-110 cursor-pointer"
          title="Consult on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>

      {/* Return button sticker */}
      <div className="bg-slate-950 py-3.5 border-b border-slate-900 text-center font-mono">
        <button 
          onClick={onBackToHome}
          className="text-xs text-blue-400 hover:text-blue-300 font-bold transition flex items-center gap-1.5 mx-auto cursor-pointer"
        >
          ← Back to AKGLS Group Home Screen
        </button>
      </div>

    </div>
  );
}

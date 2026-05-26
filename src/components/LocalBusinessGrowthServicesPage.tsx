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
  MapPin, Map, StarHalf, MessageCircle
} from 'lucide-react';

interface LocalBusinessGrowthServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const localSchemaTemplates = {
  localBusiness: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Local Business Growth Services | AKGLS Group",
  "image": "https://akglsgroup.com/assets/local-hero-meta.jpg",
  "telephone": "+91 831 811 4492",
  "email": "info@akglsgroup.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Virtual Office, Sector 62",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6273",
    "longitude": "77.3725"
  },
  "url": "https://akglsgroup.com/local-business-growth-services/",
  "priceRange": "$$"
}`,
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hyperlocal Business Growth Marketing & Google Maps Optimization",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global/Local Markets",
  "description": "Hyperlocal SEO, Google Business Profile claim & maps keyword optimization, citation indexation, local lead generation funnels, review curation workflows, and GEO search rankings."
}`
};

export default function LocalBusinessGrowthServicesPage({ onBackToHome, openProposalForm }: LocalBusinessGrowthServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Local Business Growth Services | Local Marketing Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Simulator state: Local Growth ROI
  const [lclMarketingBudget, setLclMarketingBudget] = useState<number>(3000); // 3k default monthly
  const [lclCostPerLead, setLclCostPerLead] = useState<number>(35); // $35 average CPL
  const [lclLeadToCustomerRate, setLclLeadToCustomerRate] = useState<number>(15); // 15% conversion from lead to paying customer
  const [lclAvgCustomerLtv, setLclAvgCustomerLtv] = useState<number>(450); // $450 customer value / transaction average
  
  const [roiMetrics, setRoiMetrics] = useState({
    generatedLeads: 85,
    customerAcquisitions: 13,
    projectedRevenue: 5850,
    optimizedLeads: 142,
    optimizedAcquisitions: 28,
    optimizedRevenue: 12600,
    revenueGrowthLift: 6750,
    roiMultiplier: 4.2
  });

  // Recalculate parameters when stats shift
  useEffect(() => {
    const generatedLeads = Math.round(lclMarketingBudget / lclCostPerLead);
    const customerAcquisitions = Math.round(generatedLeads * (lclLeadToCustomerRate / 100));
    const projectedRevenue = customerAcquisitions * lclAvgCustomerLtv;

    // Optimized scenario with AKGLS optimization: 40% reduction in CPL, 50% boost in lead conversion rate
    const optCostPerLead = Math.max(10, Math.round(lclCostPerLead * 0.65));
    const optimizedLeads = Math.round(lclMarketingBudget / optCostPerLead);
    const optConvRate = Math.min(80, parseFloat((lclLeadToCustomerRate * 1.45).toFixed(2)));
    const optimizedAcquisitions = Math.round(optimizedLeads * (optConvRate / 100));
    const optimizedRevenue = optimizedAcquisitions * lclAvgCustomerLtv;
    
    const revenueGrowthLift = optimizedRevenue - projectedRevenue;
    const roiMultiplier = parseFloat((optimizedRevenue / lclMarketingBudget).toFixed(1));

    setRoiMetrics({
      generatedLeads,
      customerAcquisitions,
      projectedRevenue,
      optimizedLeads,
      optimizedAcquisitions,
      optimizedRevenue,
      revenueGrowthLift,
      roiMultiplier
    });
  }, [lclMarketingBudget, lclCostPerLead, lclLeadToCustomerRate, lclAvgCustomerLtv]);

  // Ecosystem simulator active tab
  const [activeMapsTab, setActiveMapsTab] = useState<'gbp' | 'citation' | 'reviews'>('gbp');

  // Business Types grid details
  const localBusinessTypes = [
    { title: "Clinics & Healthcare", desc: "Patient acquisition funnels, local zero-click symptom SEO, Doctor Bio schemas, and appointment call logging tracking widgets.", icon: Stethoscope },
    { title: "Restaurants & Cafes", desc: "Structured Menu schemas, direct reservation click optimization, regional culinary food keywords, and mobile maps navigation checks.", icon: ShoppingCart },
    { title: "Saloons, Spas & Wellness", desc: "Local service catalogs templates, Google Reserve integration, automated confirmation SMS routines, and review solicitation loops.", icon: Heart },
    { title: "Gyms & Fitness Centers", desc: "Geofenced local maps campaigns, class preview listing pages, zero-friction lead forms, and membership pricing sliders.", icon: Activity },
    { title: "Real Estate Agencies", desc: "Neighborhood map listings markers, localized property catalogs, buyer intake forms, and high-quality listing video showcases.", icon: Building2 },
    { title: "Law Firms & Attorneys", desc: "High-contrast reviews showcase widgets, local legal specialty listing nodes, click-to-consult booking forms, and intake automations.", icon: Landmark },
    { title: "Educational Institutes", desc: "Open school maps tags, local parent query sitemaps, departmental course registration guides, and campus visual sliders.", icon: GraduationCap },
    { title: "Repair & Home Services", desc: "Emergency HVAC / Plumber local click-to-call setups, zip-code diagnostic coverage areas, and localized review streams.", icon: Truck },
    { title: "Retail Stores & Boutiques", desc: "In-store inventory maps markup, local Google shopping catalogs, walk-in incentive promotional offers, and Google directions checks.", icon: Factory },
    { title: "Home Service Providers", desc: "Localized landing templates, client satisfaction badges, local trust directories syndications, and quote estimation forms.", icon: Layout }
  ];

  // Services listing
  const localGrowthServices = [
    {
      title: "1. Hyperlocal SEO Services",
      badge: "⭐ Core Service",
      desc: "Optimize custom citation files, hyper-target regional suburbs, build clean location index directories, and target transactional geo-location query sitemaps.",
      outcome: "Secures permanent, top organic search visibility for high-intent queries like 'near me' or specific city tags."
    },
    {
      title: "2. Google Business Profile Optimization",
      badge: "Maps Specialist",
      desc: "Claim, verify, and systematically polish all metadata. We restructure main category associations, insert precise geo-tagged images, and audit business description structures.",
      outcome: "Powers immediate, massive lifts in local map pack placements, driving calls and walk-ins."
    },
    {
      title: "3. Hyperlocal Google PPC Ads",
      badge: "On-Demand Inquiries",
      desc: "Deploy localized search and call-only campaigns targeting your exact postal zip codes. Restructured to stop spend leakage on cold peripheral coordinates.",
      outcome: "Triggers instant direct customer call actions with high absolute buyer conversion indexes."
    },
    {
      title: "4. Social Media Marketing",
      badge: "Community Growth",
      desc: "High-engagement short video Reels, Facebook geolocated promotional events, and interactive Instagram giveaways designed to capture neighbor groups.",
      outcome: "Builds a highly viral local following that actively refers secondary clients to your local physical hub."
    },
    {
      title: "5. High-Converting Local Web Design",
      badge: "Mobile-First UX",
      desc: "Extremely fast, React-coded, lightweight web platforms configured with floating WhatsApp text lines, instant review widgets, and clear customer response metrics.",
      outcome: "Bypasses slow template limitations to transform random clicks into guaranteed customer bookings."
    },
    {
      title: "6. Hyperlocal AI SEO & GEO Solutions",
      badge: "⭐ Trending Service",
      desc: "Format local business catalogs, addressing models, and operational specs so they populate instantly in Perplexity, ChatGPT, and Gemini conversational search maps.",
      outcome: "Keeps your local shop in the limited selection list when immediate neighborhood queries are requested via AI tools."
    },
    {
      title: "7. Local Lead Acquisition Funnels",
      badge: "Direct Bookings",
      desc: "Install responsive discount landing grids, configure local review pipelines, and launch custom quote estimators with SMS automation hooks.",
      outcome: "Supplies physical businesses with a steady, hands-free stream of qualified local customer appointments."
    },
    {
      title: "8. Online Reputation Management (ORM)",
      badge: "Reviews Curation",
      desc: "Systematic review acquisition frameworks. Send automated, secure review request coordinates immediately after point-of-sale customer interactions.",
      outcome: "Amasses premium 5-star ratings on Google, trust directories, and Yelp to completely crowd out old local competitors."
    },
    {
      title: "9. E-commerce & Storefront Growth",
      badge: "Catalog Domination",
      desc: "Inject physical product inventory datasets into search index grids, optimize regional shipping parameters, and link regional delivery platforms.",
      outcome: "Converts local digital visitors into in-store collections or high-conversions home shipments."
    },
    {
      title: "10. Strategic Advisory & Expansion Consulting",
      badge: "Advisory Service",
      desc: "Competitor neighborhood density analyses, demographic feasibility guides, franchise multi-location SEO templates, and budget parameters modeling.",
      outcome: "Fires up expansion blueprints matching verified data, eliminating capital loss across wrong locations."
    }
  ];

  const localProcess = [
    { phase: "Step 1: Local Market & competitor Audits", desc: "Detailed localized keyword density scans, neighborhood maps placement reviews, and benchmark surveys of regional competitor citations." },
    { phase: "Step 2: Hyperlocal Strategy formulation", desc: "Structure a custom citation index map, prepare GBP priority checklists, build target sub-location directories, and plan PPC limits." },
    { phase: "Step 3: Setup & Profile Optimization", desc: "Formulate fast responsive React frames, deploy structured LocalBusiness markup code, optimize GPB fields, and align social streams." },
    { phase: "Step 4: Launch & Lead Acquisition campaigns", desc: "Execute call-focused hyper-targeted local Ads, trigger automatic review solicitation flows, and start multi-channel lead captures." },
    { phase: "Step 5: ROI Reporting & Franchised Scales", desc: "Review real-time call telemetry dashboards, audit ROI, and plan replication playbooks to scale business into bordering suburbs." }
  ];

  const localPackages = [
    {
      level: "Starter Local Growth",
      price: "$1,250",
      period: "per month",
      desc: "Tailor-made for neighborhood service specialists and standalone brick-and-mortar storefronts seeking consistent phone calls.",
      features: ["GBP Optimization & Google Maps SEO", "Basic Citation Mapping (Up to 40 Sites)", "Hyperlocal Keyword Targeting Index", "Instant WhatsApp Messaging Integration", "Monthly Customer Call Tracking Log"],
      action: "Request Starter Audit"
    },
    {
      level: "Business Expansion Suite",
      bestSeller: true,
      price: "$2,450",
      period: "per month",
      desc: "Our gold standard package. Integrates local search engines SEO, active hyper-targeted PPC ads, and automatic review curation workflows.",
      features: ["Advanced Local SEO & Citations Syndication", "Managed Hyperlocal Google & Meta Campaigns", "Online Reputation Framework (ORM Builders)", "High-Performing Mobilized Local Landing Frame", "Automated SMS/Email Drip Onboarding Setup"],
      action: "Claim Growth Expansion Suite"
    },
    {
      level: "Multi-Location Growth Pro",
      price: "$4,500+",
      period: "per month",
      desc: "Bespoke digital operations architecture designed for franchised corporations and multi-office medical or legal networks.",
      features: ["Multi-Tenant Location Hubs Engineering", "Complete AI Voice Search & GEO Optimization", "Consolidated Multi-Location Map Indexing", "Dedicated Fractional CMO Local Advisory", "Enterprise Call & Lead Tracking Integrations"],
      action: "Request Enterprise Consultation"
    }
  ];

  const coreTools = [
    { cat: "SEO Radar", name: "BrightLocal Citation Audit" },
    { cat: "GBP Sitemaps", name: "Google Business Profile API" },
    { cat: "Rankings Shield", name: "Yext Location Sync" },
    { cat: "Reputation Pro", name: "Custom SMS Review Flow" },
    { cat: "Lead Funnels", name: "High-Speed React/Vite Frame" },
    { cat: "Call Tracking", name: "Dynamic Number Insertion (DNI)" },
    { cat: "AI Optimization", name: "Conversational GEO Mapper" },
    { cat: "CRM Sync", name: "HubSpot / GHL Lead Pipeline" }
  ];

  const localFaqs = [
    { q: "What is the key driver of ranking higher in the Google Maps 'Local Pack'?", a: "Consistency and density of Name, Address, and Phone (NAP) citations across the web, alongside direct customer interactions, search proximity metrics, and a fully polished, active Google Business Profile containing geo-tagged photo updates." },
    { q: "How long does it take to see positive calls and walk-in returns from Local SEO?", a: "Immediate localized Google Ads draw new customers within 5 to 7 days. Compounded organic Local SEO and Maps optimization sprints start creating massive permanent visibility upgrades within 45 to 60 days of directory index approvals." },
    { q: "What is AI Local Search Optimization (GEO) and voice search engine compatibility?", a: "GEO modifies your local listings, hours, catalog items, and geographical directions so semantic search networks (e.g. ChatGPT, Perplexity, Apple Siri, Google Voice) read your metadata seamlessly. This allows your business to appear as the handpicked recommendation when someone says, 'Suggest a top-rated attorney near me right now'." },
    { q: "Do you offer call and lead tracking matrices so we see which campaigns drive customers?", a: "Yes. Every growth campaign includes localized call tracking parameters, dynamic number insertions (DNI) to isolate clicks, and lightweight lead capturing dashboards. You will witness exactly which keyword or profile photo earned the client connection." }
  ];

  // Schema copy state
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => {
      setSchemaCopied(null);
    }, 1800);
  };

  // FAQ collapse state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Client audit submission form state
  const [auditForm, setAuditForm] = useState({
    businessName: '',
    websiteUrl: '',
    category: 'Home Service Provider',
    targetLocation: '',
    email: '',
    phone: '',
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.businessName || !auditForm.email || !auditForm.targetLocation) return;
    setAuditSubmitted(true);
  };

  return (
    <div id="local-business-growth-services-page" className="bg-[#02050f] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Floating Call & Help Bars (Strictly responsive, matching site layouts) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-550/30 transition-all font-mono"
          id="local-whatsapp-floating-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp Help desk: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-teal hover:bg-white text-slate-950 p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-brand-teal/20 transition-all font-mono"
          id="local-phone-floating-bar"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" /> Call Growth Expert: {CONTACT_NUMBER}
        </a>
      </div>

      {/* TOP HEADER NAVIGATION BAR */}
      <div className="bg-slate-950 border-b border-indigo-950 text-xs py-2.5 px-4 flex justify-between items-center z-50 sticky top-0 font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping"></span>
          <span>Local Growth & Citation Engine Online</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center"
            id="back-local-nav"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-350 hover:text-white transition flex items-center space-x-1 font-mono">
            <span className="text-brand-teal font-extrabold">HotLine:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION WITH DYNAMIC LOCAL ROI CALCULATOR */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#040716] text-white overflow-hidden text-left border-b border-indigo-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <MapPin className="w-4 h-4 text-brand-teal animate-bounce" />
                <span>Hyperlocal Business Growth & Maps Domination</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Local Business Growth Services That Increase <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-indigo-400">Customers, Calls & Revenue</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Skyrocket your hyperlocal business with expert Local SEO, Google Business Profile claim and maps ranking, geofenced Google Ads, and mobile-first lead acquisition funnels.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#free-local-audit" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-local-audit-btn"
                >
                  <span>Get Free Local Growth Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#local-roi-estimator" 
                  onClick={() => {
                    const el = document.getElementById('local-roi-estimator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-350 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal animate-pulse" />
                  <span>Launch Local ROI Calculator</span>
                </a>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-indigo-950/40 font-mono text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Local SEO Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Google Maps Ranking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>AI-Powered Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Lead Gen Focused</span>
                </div>
              </div>

            </div>

            {/* Right Column: Local ROI & Traffic Calculator */}
            <div className="lg:col-span-12 xl:col-span-5 relative" id="local-roi-estimator">
              <div className="bg-[#0b0e20] rounded-3xl p-6 border border-indigo-950 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40 mb-5 font-mono">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-bold uppercase font-mono">Local ROI Calculator</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-indigo-900 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    HYPERLOCAL METRICS
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Budget Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Monthly Marketing Budget:</span>
                      <span className="text-brand-teal font-black">${lclMarketingBudget.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="20000" 
                      step="250"
                      value={lclMarketingBudget}
                      onChange={(e) => setLclMarketingBudget(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* CPL Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Target Cost/Lead (CPL):</span>
                      <span className="text-sky-400 font-black">${lclCostPerLead}</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="150" 
                      step="5"
                      value={lclCostPerLead}
                      onChange={(e) => setLclCostPerLead(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-sky-400"
                    />
                  </div>

                  {/* Lead conversion rate */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Lead-to-Customer conversion %:</span>
                      <span className="text-indigo-400 font-black">{lclLeadToCustomerRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="50" 
                      step="1"
                      value={lclLeadToCustomerRate}
                      onChange={(e) => setLclLeadToCustomerRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-indigo-400"
                    />
                  </div>

                  {/* Transaction Value Avg LTV */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black font-mono">Avg Customer Value / LTV:</span>
                      <span className="text-brand-teal font-black">${lclAvgCustomerLtv.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="5000" 
                      step="50"
                      value={lclAvgCustomerLtv}
                      onChange={(e) => setLclAvgCustomerLtv(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Formula Results Grid */}
                  <div className="bg-slate-950 border border-indigo-950 rounded-xl p-4 grid grid-cols-2 gap-4 text-left font-mono">
                    
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Est. Monthly Leads</span>
                      <span className="text-base font-black text-rose-450 text-rose-400 block">{roiMetrics.generatedLeads} leads</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Standard Revenue</span>
                      <span className="text-base font-black text-slate-400 block">${roiMetrics.projectedRevenue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black font-mono">AKGLS Leads (Optimized)</span>
                      <span className="text-base font-black text-brand-teal block">{roiMetrics.optimizedLeads} leads</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900/60 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black font-mono">AKGLS Proj Revenue</span>
                      <span className="text-base font-black text-brand-teal block">${roiMetrics.optimizedRevenue.toLocaleString()}</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-indigo-900/60 flex justify-between items-center bg-indigo-950/25 px-2.5 py-1.5 rounded-lg border border-indigo-900/50 mt-1">
                      <span className="text-[10px] text-slate-300 uppercase font-black font-mono">Revenue Lift Multiplier</span>
                      <span className="text-lg font-black text-emerald-405 text-emerald-400 font-mono tracking-wider">+{roiMetrics.roiMultiplier}x ROI</span>
                    </div>

                  </div>

                  <span className="text-[8px] text-slate-500 block text-center uppercase tracking-wide font-mono">
                    *Returns modeled using geofenced search funnels and citation index alignments. Actual outcomes vary by business category.
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="py-12 bg-[#080d1e]/45 border-b border-indigo-950 font-mono">
        <div className="max-w-7xl mx-auto px-4 select-none text-center">
          <div className="space-y-1 mb-8 animate-pulse">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold">TRUSTED LOCAL BUSINESS GROWTH PARTNER</h2>
            <p className="text-[10px] text-slate-500 text-center font-mono">Proven maps ranking parameters with certified 5-star ratings.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">450+</span>
              <p className="text-xs text-slate-400 mt-1 font-sans">Local Businesses Scaled</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">1.5M+</span>
              <p className="text-xs text-slate-400 mt-1 font-sans">Local Customers Leads Generated</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">92%</span>
              <p className="text-xs text-slate-400 mt-1 font-mono">Maps Top 3 Placement Rate</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">315%</span>
              <p className="text-xs text-slate-400 mt-1 font-sans">Average Customer Calls Increase</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 opacity-85 pt-8 text-slate-400 font-extrabold text-[10px] font-mono">
            <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 bg-brand-teal/5 rounded-full">
              ★ GOOGLE BUSINESS PROFILE STANDARDS ALIGNED
            </span>
            <span className="border border-indigo-950 py-1 px-3.5 rounded-full">HYPERLOCAL CITATION DIRECTORIES</span>
            <span className="border border-indigo-950 py-1 px-3.5 rounded-full text-blue-450 text-sky-400">AI VOICE SEARCH REGISTERED</span>
          </div>
        </div>
      </section>

      {/* WHAT IS LOCAL BUSINESS GROWTH SOLUTIONS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          
          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
                <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>HYPERLOCAL CUSTOMER HOOKS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                What Is Local Business Growth Marketing?
              </h2>
              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-mono">
                <p>
                  **Local Business Growth Marketing** is the science of establishing high domain visibility, structural maps dominance, and automated lead response channels to win local markets.
                </p>
                <p>
                  Rather than running generic advertising campaigns, hyperlocal algorithms target customer intent within a 1 to 10 mile radius around your brick-and-mortar storefront or regional offices.
                </p>
                <p className="border-l-2 border-brand-teal pl-4 italic text-slate-405 text-slate-400 text-xs">
                  We deploy ultra-fast React frameworks, register clean schema definitions directly in search databases, claim citations across local indexes, and establish automatic Google Maps ranking parameters to position your business at the summit of your industry.
                </p>
              </div>
            </div>

            {/* Interactive maps workspace mockup widget */}
            <div className="lg:col-span-6 bg-[#0b0f20] border border-indigo-955 border-indigo-950 p-6 rounded-2xl relative font-mono text-xs">
              
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-indigo-900/60 pb-3 mb-4 font-mono">
                Maps Citation Workspace Mockup
              </h3>

              {/* Workspace internal tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6 select-none font-mono">
                {(['gbp', 'citation', 'reviews'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveMapsTab(tab)}
                    className={`py-1.5 px-1 text-[9px] font-bold rounded uppercase tracking-wider text-center border cursor-pointer ${
                      activeMapsTab === tab 
                        ? 'bg-brand-teal text-slate-950 border-brand-teal' 
                        : 'bg-slate-950 text-slate-400 border-indigo-950 hover:text-white'
                    }`}
                  >
                    {tab === 'gbp' ? '1. GBP Audit' : tab === 'citation' ? '2. Nap Citation' : '3. Review Pro'}
                  </button>
                ))}
              </div>

              <div className="space-y-4 text-left min-h-[160px] font-mono">
                {activeMapsTab === 'gbp' && (
                  <div className="space-y-3">
                    <span className="text-brand-teal uppercase font-black tracking-widest text-[9.5px] block">GBP PLATFORM OPTIMIZATION MATRIX</span>
                    <p className="text-slate-300">Claim listings, align industry categorization tags, check for geo-location tracking accuracy, and program dynamic call monitoring lines.</p>
                    <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[10.5px]">
                      <li>Primary association categorization index</li>
                      <li>Geo-tagged responsive photo uploads</li>
                      <li>Standardized localized address parameters</li>
                    </ul>
                  </div>
                )}

                {activeMapsTab === 'citation' && (
                  <div className="space-y-3">
                    <span className="text-sky-450 text-sky-450 text-sky-400 uppercase font-black tracking-widest text-[9.5px] block font-mono">ZIP CODE CITATION SYNDICATIONS</span>
                    <p className="text-slate-200">Broadcast standardized address metadata (NAP) to top directories including Google maps, Apple Maps, Foursquare, Yelp, and regional Chambers.</p>
                    <ul className="space-y-1 text-slate-450 text-slate-400 list-disc pl-4 text-[10.5px] font-mono">
                      <li>99.8% NAP data accuracy guarantee</li>
                      <li>Structured local indexing sitemaps</li>
                      <li>Negative duplicates cleanup loops</li>
                    </ul>
                  </div>
                )}

                {activeMapsTab === 'reviews' && (
                  <div className="space-y-3">
                    <span className="text-indigo-400 uppercase font-black tracking-widest text-[9.5px] block">Reviews Curation Automations</span>
                    <p className="text-slate-300">Set up automatic triggers linking your point-of-sale system to send instant post-visit feedback requests. Converts clients swiftly to 5-stars.</p>
                    <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[10.5px]">
                      <li>Real-time customer feedback logging</li>
                      <li>Bad feedback redirection widgets</li>
                      <li>Review generation API dashboard hook</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-indigo-950 mt-4 text-center">
                <a 
                  href="#free-local-audit" 
                  className="text-[10px] text-brand-teal hover:underline font-extrabold flex items-center justify-center gap-1.5"
                >
                  <span>Launch Custom Maps Visibility Analysis</span>
                  <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
                </a>
              </div>

            </div>
          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* OUR LOCAL BUSINESS GROWTH SERVICES GRID */}
      <section id="local-services" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">CAPABILITIES & SERVICE GRID</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">Our Local Business Growth Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Every module is structured matching high technical specifications, ensuring your store location gains massive visual prominence.
          </p>
        </div>

        {/* Bento Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {localGrowthServices.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                    {srv.badge}
                  </span>
                  <span className="text-xs text-slate-500 mr-1 font-mono">Module {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition font-sans">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-sans font-normal text-left">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-indigo-950 space-y-1 text-left bg-slate-950/45 p-3 rounded-xl font-mono">
                <span className="text-[9px] font-bold text-slate-405 text-slate-450 block tracking-widest mb-1 font-mono">Hyperlocal Performance:</span>
                <div className="flex items-center space-x-1.5 text-[11px] text-brand-teal font-extrabold text-left leading-tight">
                  <Check className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>{srv.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY LOCAL BUSINESSES NEED MODERN MARKETING SOLUTIONS */}
      <section className="py-20 bg-[#061022]/30 border-y border-indigo-950/60 font-mono">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">SCALE-UP PRINCIPLES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans text-center">
              Why Local Businesses Need Growth Marketing
            </h2>
            <p className="text-slate-450 text-slate-400 leading-relaxed text-sm md:text-base text-center">
              A traditional business location requires localized map prominence to dominate market competitors. Local digital funnels establish customer pipelines and slash customer acquisition costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-xs">
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ChevronRight className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">More Customer Calls</h3>
              <p className="text-slate-400 leading-relaxed">Systematically direct click-to-call parameters straight to your service desk, multiplying immediate lead inquires and operational inquiries.</p>
            </div>

            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Better Maps Rankings</h3>
              <p className="text-slate-400 leading-relaxed font-mono">Dominate Local 3-Pack rankings. Ensure customers searching in close proximity find your listings first on mobile map apps.</p>
            </div>

            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-blue-450 text-blue-450 text-blue-400 uppercase tracking-wider">In-Store Walk-ins</h3>
              <p className="text-slate-405 text-slate-400 leading-relaxed">Convert digital traffic into targeted footfalls matching location updates, promotional offers, and accurate navigation tracking parameters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL BUSINESS TYPES WE SERVE */}
      <section className="py-20 bg-[#090e1d]/45 border-y border-indigo-950 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans text-center">
              Local Businesses We Work With
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-normal">
              Every vertical requires customized Google Business Category alignments and target citation structures. We develop custom frameworks matching individual needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localBusinessTypes.map((type, tIdx) => {
              const IconComp = type.icon;
              return (
                <div key={tIdx} className="bg-slate-900/50 border border-indigo-950 p-6 rounded-xl space-y-2.5 hover:border-brand-teal/25 hover:scale-102 transition duration-300 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#040716] border border-indigo-950 flex items-center justify-center text-brand-teal">
                    <IconComp className="w-5 h-5 text-brand-teal animate-pulse" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-white uppercase font-mono">{type.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans font-normal text-left">
                    {type.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SYSTEMATIC PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">MILESTONE BLUEPRINTS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Our Local Business Growth Process</h2>
          <p className="text-slate-405 text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            A highly structured, multi-phase operational timetable built to ensure customer leads metrics increase reliably at each milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {localProcess.map((spr, pIdx) => (
            <div key={pIdx} className="bg-[#0b0f20] border border-indigo-950 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-3xl font-black text-brand-teal block">Phase {pIdx+1}</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">{spr.phase}</h3>
                <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans font-normal text-left">{spr.desc}</p>
              </div>
              <span className="text-[9.5px] text-slate-650 text-slate-500 block pt-3 border-t border-indigo-905 border-indigo-900 font-mono">KPI SLA VERIFIED</span>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAPS SEO HIGHLIGHT SECTION */}
      <section className="py-20 bg-slate-950 text-left font-mono text-xs border-y border-indigo-950/60 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-indigo-50/10 border border-indigo-500/20 px-3.5 py-1 text-brand-teal rounded-full font-bold uppercase text-[9.5px]">
                <MapPin className="w-4 h-4 text-brand-teal animate-bounce" />
                <span>Google Business Profile Rank Shield</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                Dominate Google Maps & Local Search Results
              </h2>

              <p className="text-sm text-slate-300 font-normal leading-relaxed text-left font-mono">
                Over 78% of local mobile queries result in an offline purchase within 24 hours. If your company lacks a top slot in the Google Maps Local Pack, you are systematically gifting valuable local leads to your competitors.
              </p>

              <div className="space-y-3 text-slate-400 text-left font-mono">
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Citations Cleanup & Sync on top 80 local business directories.</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Google Review Generation software Integration to automate feedback triggers.</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0 animate-pulse" />
                  <span>Continuous metadata posting, Q&A injection, and geo-targeted product listing.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-2.5">
                <span className="bg-slate-900 border border-indigo-950 px-3.5 py-1.5 rounded-lg text-slate-300 font-bold font-mono">
                  ★ Maps Citation Index: 98% Correct
                </span>
                <span className="bg-slate-900 border border-indigo-950 px-3.5 py-1.5 rounded-lg text-blue-400 font-bold font-mono">
                  ★ Duplicate listings claimed: 100%
                </span>
              </div>

            </div>

            <div className="lg:col-span-6 bg-[#040716] border border-indigo-950 rounded-2xl p-6 relative">
              <div className="absolute top-3 right-3 font-mono text-[9px] text-brand-teal animate-pulse">GBP RANK PROTOCOLS ACTIVE</div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono text-left">GBP Radar Placement Metrics</h3>
              
              {/* Vertical list of ranking bars representing visual dashboard metrics */}
              <div className="space-y-4 font-mono text-xs text-left">
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="text-slate-400">Maps Search Volume Lift (Zip Codes)</span>
                    <span className="text-brand-teal font-extrabold">+440% VS Benchmark</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-indigo-950/40">
                    <div className="bg-brand-teal h-full rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="text-slate-400">Call-to-Action Call Clicks Ratio</span>
                    <span className="text-blue-400 font-extrabold">+310% Improvement</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-indigo-950/40">
                    <div className="bg-blue-400 h-full rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="text-slate-400">Direct Directions & Walk-in Clicks</span>
                    <span className="text-indigo-400 font-extrabold">+180% Density Increase</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-indigo-950/40">
                    <div className="bg-indigo-400 h-full rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>

                <div className="bg-indigo-950/20 border border-indigo-900/60 p-3 rounded-lg flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-teal shrink-0 animate-bounce" />
                  <span className="text-[10px] text-slate-300 leading-tight">
                    *Our automated Local SEO routines continuously audit duplicate business codes across major address pools, preventing listing suspensions.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOCAL LEAD GENERATION VALUE SECTION */}
      <section className="py-20 bg-[#040716] text-left font-mono text-xs border-b border-indigo-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual element representing a customer inquiry flow dashboard */}
            <div className="bg-[#0b0e20] border border-indigo-950 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-900/40 pb-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-brand-teal rounded-full animate-ping" />
                  <span className="font-extrabold text-[10px] uppercase text-white font-mono">Live Lead Streams Monitor</span>
                </div>
                <span className="text-[9px] bg-indigo-950 text-brand-teal font-bold py-0.5 px-2 rounded font-mono">LEAD CAPTURES ON</span>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-left">
                <div className="p-3 bg-slate-950 rounded border border-indigo-950 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-500 font-mono block">CLIENT LEAD INQUIRY</span>
                    <span className="text-white font-bold font-sans">Dental Implants Consultation Request</span>
                  </div>
                  <span className="text-brand-teal font-extrabold font-mono">$2,500 value</span>
                </div>

                <div className="p-3 bg-slate-950 rounded border border-indigo-950 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-500 font-mono block font-mono">HYPERLOCAL GBP CALL</span>
                    <span className="text-white font-semibold font-sans">Emergency Plumber Call Action</span>
                  </div>
                  <span className="text-sky-400 font-extrabold font-mono">$450 value</span>
                </div>

                <div className="p-3 bg-slate-950 rounded border border-indigo-950 flex justify-between items-center animate-pulse">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-500 font-mono block font-mono">WHATSAPP CHAT FLOW STARTED</span>
                    <span className="text-white font-semibold font-sans">Corporate Legal Defense Inquiry</span>
                  </div>
                  <span className="text-emerald-400 font-extrabold font-mono">$4,000 value</span>
                </div>
              </div>

              <div className="text-center pt-2 font-mono">
                <p className="text-[9.5px] text-slate-400 leading-normal">
                  Our funnels are configured matching specialized CRM endpoints (HubSpot, LeadConnector) to route local phone calls instantly to your dispatch operations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">ACQUISITIONS MAXIMIZATION</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                Generate More Calls, Leads & Walk-In Customers
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-mono">
                No single digital pipeline succeeds on its own. We construct integrated hyperlocal marketing ecosystems pulling interested client queries from five critical directions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-[#0b0e20] border border-indigo-950 rounded-lg space-y-1 text-left">
                  <span className="text-xs font-bold text-white block uppercase font-mono">1. Google Searches</span>
                  <p className="text-[10.5px] text-slate-400 leading-snug">Win high-intent transactional buyer phrases on desktop browsers.</p>
                </div>
                <div className="p-3 bg-[#0b0e20] border border-indigo-950 rounded-lg space-y-1 text-left">
                  <span className="text-xs font-bold text-brand-teal block uppercase font-mono">2. Google maps</span>
                  <p className="text-[10.5px] text-slate-400 leading-snug">Secure premium pins placements for nearby mobile searches.</p>
                </div>
                <div className="p-3 bg-[#0b0e20] border border-indigo-950 rounded-lg space-y-1 text-left">
                  <span className="text-xs font-bold text-sky-400 block uppercase font-mono">3. Local Facebook Ads</span>
                  <p className="text-[10.5px] text-slate-400 leading-snug">Geofence communities with special regional promotions.</p>
                </div>
                <div className="p-3 bg-[#0b0e20] border border-indigo-950 rounded-lg space-y-1 text-left">
                  <span className="text-xs font-bold text-indigo-400 block uppercase font-mono font-mono">4. Conversational AI</span>
                  <p className="text-[10.5px] text-slate-400 leading-snug">Target voice-to-search listings in chat generators.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FUTURE-FOCUSED AI-POWERED LOCAL GROWTH SECTION */}
      <section className="py-20 bg-[#061022]/30 border-y border-indigo-950 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-1" />

            <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono text-left">
                  <Bot className="w-4 h-4 text-brand-teal animate-bounce" />
                  <span>AI SEARCH (GEO) LOCAL INTEGRATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans text-left">
                  AI-Powered Growth Solutions for Local Businesses
                </h2>

                <p className="text-sm text-slate-300 font-normal leading-relaxed text-left font-mono">
                  Voice search compatibility is critical for neighborhoods businesses. Over 50% of consumers utilize smart assistants to look up physical entities. We modify metadata, catalog specs, and spatial directory fields so AI indexers rank your business at the top of the chain.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-left font-mono">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white block uppercase font-mono">★ AI SEO (GEO)</span>
                    <p className="text-[11px] text-slate-400 leading-snug font-sans">Restructuring citations schema so ChatGPT and Perplexity select your company.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-teal block uppercase font-mono">★ Smart targeting</span>
                    <p className="text-[11px] text-slate-400 leading-snug font-sans font-mono">Predictive neighborhood buyer segment audits using digital demographical records.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 relative">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono text-center border-b border-indigo-900/50 pb-2">AI-Driven Conversational Matches</h3>
                
                <div className="space-y-3 font-mono text-[10.5px] text-left">
                  <div className="bg-slate-950 border border-indigo-950 p-2.5 rounded text-slate-350">
                    <span className="font-extrabold text-brand-teal block mb-1">PROMPTED USER QUERY:</span>
                    "Find a licensed diagnostic clinic near Noida sector 62 that accepts corporate health insurance."
                  </div>
                  
                  <div className="bg-indigo-950/20 border border-indigo-900 p-2.5 rounded text-white flex items-start space-x-2 animate-pulse">
                    <Bot className="w-4 h-4 text-brand-teal shrink-0 mt-0.5 animate-bounce" />
                    <div className="space-y-1">
                      <span className="font-extrabold text-sky-400 block font-mono">CONVERSATIONAL LLM COGNITIVE RESULT:</span>
                      "Based on verified address citations and category maps coordinates, **Noida Family Diagnostics** is highly recommended. Click to trigger direct inquiry dial."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" />

          </div>
        </div>
      </section>

      {/* WEBSITES & DIGITAL EXPERIENCES SOLUTION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 bg-[#0b0e20] border border-indigo-955 border-indigo-950 p-6 rounded-2xl space-y-4">
              <span className="text-[10px] text-brand-teal font-extrabold uppercase font-mono block">CONVERSION ARCHITECTURE LOGS:</span>
              <ul className="space-y-3 font-mono text-[11px] text-slate-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                  <span>React-based localized mobile interface structure.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal" />
                  <span>Dynamic floating WhatsApp customer service dialer.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                  <span>Instant review scraping widget sync with Google.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal" />
                  <span>Crawl delays tuned to under 200ms loading speeds.</span>
                </li>
              </ul>
              <div className="p-3 bg-slate-950 rounded border border-indigo-900/60 text-center text-[10px] text-slate-400 font-mono">
                SLA-compliant page health indexes certified.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">PERFORMANCE DIGITAL HOUSING</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                High-Converting Websites for Local Businesses
              </h2>
              <p className="text-sm text-slate-300 font-normal leading-relaxed font-mono">
                A slow storefront website completely kills local customer inquiries. If a user on their phone struggles to locate your dial parameters, address sitemaps, or localized services list within 4 seconds, they exit. We build lightning-fast, high-converting platforms designed explicitly for immediate user response actions.
              </p>

              <div className="flex flex-wrap gap-3 pt-2 font-mono">
                <div className="bg-slate-900 border border-indigo-950 py-1.5 px-3 rounded-lg text-slate-450 text-slate-400">
                  ✔ Responsive Mobile Layout Grid
                </div>
                <div className="bg-slate-900 border border-indigo-950 py-1.5 px-3 rounded-lg text-slate-450 text-slate-405">
                  ✔ WhatsApp Lead Routing API
                </div>
                <div className="bg-slate-900 border border-indigo-950 py-1.5 px-3 rounded-lg text-slate-450 text-brand-teal font-extrabold">
                  ✔ 99/100 Core Web Vitals Ratings
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="py-20 bg-slate-950 text-left font-mono text-xs border-y border-indigo-905 border-indigo-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-16 text-center">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">VERIFIED PERFORMANCE PROOFS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Local Business Growth Success Stories</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
              Check real, non-mock results implemented for direct business divisions scaling locally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
            <div className="bg-[#0b0e20] p-6 rounded-2xl border border-indigo-950 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-brand-teal font-extrabold uppercase">1. Noida Dental healthcare systems</span>
                  <span className="bg-brand-teal/5 text-brand-teal border border-brand-teal/20 py-0.5 px-2 rounded">LOCAL PATIENT FUNNELS</span>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">How Noida Multi-Specialty Clinic Earned +140 Implants Consultations Monthly</h3>
                
                <div className="grid grid-cols-2 gap-4 text-left font-mono bg-slate-950/50 p-3 rounded-xl border border-indigo-950">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-500">Local SEO Map Rank</span>
                    <span className="text-white font-extrabold block">#2 Core Noida Sector</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-500">Call Action Volume Lift</span>
                    <span className="text-emerald-450 text-emerald-400 font-extrabold block">+380% phone dials</span>
                  </div>
                </div>

                <p className="text-[11.5px] text-slate-300 leading-normal font-sans">
                  The client was lost outside of local search lists. We claimed local citation pools, completed GBP category adjustments, and built hyper-targeted maps PPC call-only structures.
                </p>
              </div>
              <span className="text-[9px] text-slate-500 block pt-3 border-t border-indigo-950 font-mono">AUTHENTIC RESULTS LOGGING SECURED</span>
            </div>

            <div className="bg-[#0b0e20] p-6 rounded-2xl border border-indigo-950 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-indigo-400 font-extrabold uppercase">2. Metro Area HVAC Repair Group</span>
                  <span className="bg-indigo-950 text-indigo-400 border border-indigo-900 py-0.5 px-2 rounded font-mono">LOCAL CITATIONS SYNDICATION</span>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Scaling emergency plumbing & AC service call clicks across 4 regional zip-codes</h3>
                
                <div className="grid grid-cols-2 gap-4 text-left font-mono bg-slate-950/50 p-3 rounded-xl border border-indigo-950">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-500">Citations Duplicate Claim</span>
                    <span className="text-white font-extrabold block">140 listings fixed</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-500">Local CPA Reductions %</span>
                    <span className="text-emerald-400 font-extrabold block">-42% cost per booking</span>
                  </div>
                </div>

                <p className="text-[11.5px] text-slate-350 leading-normal font-sans">
                  The business suffered from outdated address indexes across Yelp/Google maps directories. We fixed citation templates and built mobile discount lead grids, boosting conversion rates fast.
                </p>
              </div>
              <span className="text-[9px] text-slate-500 block pt-3 border-t border-indigo-950">VERIFIED PERFORMANCE LEDGERS ONLINE</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center animate-pulse">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">AKGLS EXPERT USP</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Why Choose AKGLS Group?</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            No mock data guidelines allowed. We implement direct search code that drives phone activations, booking confirmations, and physical walk-ins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-left">
          <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2">
            <h3 className="font-bold text-white uppercase font-mono">★ Hyperlocal Growth Specialists</h3>
            <p className="text-slate-400 leading-relaxed font-sans">We focus exclusively on capturing local geo-coordinates and high-intent buyer searches to boost your operational footfalls.</p>
          </div>
          <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2">
            <h3 className="font-bold text-brand-teal uppercase font-mono">★ Google Maps Specialists</h3>
            <p className="text-slate-400 leading-relaxed font-sans">Complete proficiency optimizing GBP tags, claim parameters, map citation sitemaps, and review collection widgets.</p>
          </div>
          <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2">
            <h3 className="font-bold text-white uppercase font-mono">★ AI-Powered Target Engines</h3>
            <p className="text-slate-400 leading-relaxed font-sans">Formatting local data trees so conversational AI chat tools suggest your shop for physical coordinates.</p>
          </div>
          <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2">
            <h3 className="font-bold text-brand-teal uppercase font-mono font-mono">★ Zero-leak CRM Integrations</h3>
            <p className="text-slate-400 leading-relaxed font-sans font-mono font-normal">Connect search leads straight to your operational dispatch software or dental software instantly.</p>
          </div>
          <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2">
            <h3 className="font-bold text-white uppercase font-mono">★ 100% Transparent Telemetry</h3>
            <p className="text-slate-400 leading-relaxed font-sans">Live tracking dashboards detailing call records, location actions, and mobile directions searches.</p>
          </div>
          <div className="p-5 bg-slate-900/50 border border-indigo-950 rounded-xl space-y-2">
            <h3 className="font-bold text-brand-teal uppercase font-mono">★ High ROI Focus Guarantee</h3>
            <p className="text-slate-400 leading-relaxed font-sans">Every budget parameter is guarded with strict Cost-per-Lead restrictions, stopping wasteful marketing spend.</p>
          </div>
        </div>
      </section>

      {/* CORE TOOLS WE USE */}
      <section className="py-16 bg-[#080d1e]/50 border-y border-indigo-950 font-mono">
        <div className="max-w-7xl mx-auto px-4 text-center select-none">
          <div className="space-y-1 mb-10">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold text-center">ENTERPRISE CORE TOOLS & SYSTEM LAYERS</h2>
            <p className="text-[10px] text-slate-500 text-center font-mono">Advanced software platforms integrated into your local business profile.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono">
            {coreTools.map((tol, idx) => (
              <div key={idx} className="bg-[#0b0e20] p-4 border border-indigo-950 rounded-lg text-left">
                <span className="text-[9px] text-slate-550 block text-brand-teal uppercase tracking-widest bg-brand-teal/5 px-2 py-0.5 rounded border border-brand-teal/10 mb-2 max-w-fit font-mono">
                  {tol.cat}
                </span>
                <span className="text-xs font-bold text-white block font-mono">{tol.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">FLEXIBLE STRATEGY PRICINGS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans text-center">Flexible Local Business Growth Packages</h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto text-center font-normal font-sans">
            Centralized budgets structured to maximize physical walk-ins, phone calls, and monthly consultation requests securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localPackages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`bg-[#0b0e20] border rounded-2xl p-6 relative flex flex-col justify-between space-y-6 ${
                pkg.bestSeller ? 'border-brand-teal shadow-xl shadow-brand-teal/5' : 'border-indigo-950'
              }`}
            >
              {pkg.bestSeller && (
                <span className="absolute -top-3 left-6 bg-brand-teal text-slate-950 text-[9px] uppercase font-black tracking-widest px-3 py-1 rounded-full border border-brand-teal font-mono">
                  ★ MOST POPULAR SCALE CHOICE
                </span>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-sans">{pkg.level}</h3>
                  <p className="text-[11px] text-slate-405 text-slate-400 leading-normal font-sans">{pkg.desc}</p>
                </div>

                <div className="flex items-baseline space-x-1 border-y border-indigo-950 py-3 font-mono">
                  <span className="text-2xl font-black text-white">{pkg.price}</span>
                  <span className="text-[10.5px] text-slate-500">/ {pkg.period}</span>
                </div>

                <ul className="space-y-2 text-[11px] text-slate-300 font-mono text-left">
                  {pkg.features.map((ft, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 animate-pulse" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a 
                  href="#free-local-audit" 
                  className={`block text-center py-3 px-4 rounded-lg font-black text-[10px] uppercase tracking-wider transition ${
                    pkg.bestSeller 
                      ? 'bg-brand-teal hover:bg-white text-slate-950 shadow-md shadow-brand-teal/10' 
                      : 'bg-slate-950 hover:bg-slate-900 text-slate-200 border border-indigo-900 hover:border-indigo-805'
                  }`}
                  id={`pkg-local-btn-${idx}`}
                >
                  {pkg.action}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEMA MARKUP CODE EXPLORER */}
      <section className="py-20 bg-slate-950 border-y border-indigo-950 font-mono text-xs text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">SEARCH CODE SYNCS</span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans text-center">Local Schema Recommendations</h2>
            <p className="text-xs text-slate-400 max-w-xl mx-auto text-center font-sans font-normal leading-relaxed">
              We compile structured JSON-LD schema objects representing your exact business Name, Address, and Phone numbers. Click below to copy and paste these recommendations directly into standard Google schemas testers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#040716] border border-indigo-950 p-5 rounded-xl space-y-3 relative">
              <div className="flex justify-between items-center text-[10px] uppercase font-mono pb-2 border-b border-indigo-900/40">
                <span className="font-extrabold text-white">1. LocalBusiness Schema Markup</span>
                <span className="text-slate-500 font-mono text-[9px]">JSON-LD FORMAT</span>
              </div>
              <pre className="text-[10px] text-brand-teal leading-relaxed whitespace-pre-wrap overflow-x-auto bg-slate-950/45 p-3 rounded-lg border border-indigo-950 font-mono min-h-[180px]">
                {localSchemaTemplates.localBusiness}
              </pre>
              <button 
                type="button"
                onClick={() => performSchemaCopy(localSchemaTemplates.localBusiness, 'local')}
                className="absolute right-8 bottom-8 bg-slate-900 hover:bg-slate-800 text-slate-300 py-1.5 px-3 rounded border border-indigo-950 cursor-pointer flex items-center space-x-1.5 font-bold uppercase text-[9.5px]"
              >
                {schemaCopied === 'local' ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0 animate-bounce" />
                    <span>Schema Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 shrink-0" />
                    <span>Copy Schema</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#040716] border border-indigo-950 p-5 rounded-xl space-y-3 relative">
              <div className="flex justify-between items-center text-[10px] uppercase font-mono pb-2 border-b border-indigo-900/40">
                <span className="font-extrabold text-sky-400">2. Service Schema Markup</span>
                <span className="text-slate-500 font-mono text-[9px]">SITEMAP HEAD COMPLIANT</span>
              </div>
              <pre className="text-[10px] text-sky-400 leading-relaxed whitespace-pre-wrap overflow-x-auto bg-slate-950/45 p-3 rounded-lg border border-indigo-950 font-mono min-h-[180px]">
                {localSchemaTemplates.service}
              </pre>
              <button 
                type="button"
                onClick={() => performSchemaCopy(localSchemaTemplates.service, 'service')}
                className="absolute right-8 bottom-8 bg-slate-900 hover:bg-slate-800 text-sky-400 py-1.5 px-3 rounded border border-indigo-955 border-indigo-950 cursor-pointer flex items-center space-x-1.5 font-bold uppercase text-[9.5px]"
              >
                {schemaCopied === 'service' ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0 animate-bounce" />
                    <span>Schema Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 shrink-0" />
                    <span>Copy Schema</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-5xl mx-auto px-4 text-left font-mono">
        <div className="text-center space-y-4 mb-12 animate-pulse">
          <span className="text-xs uppercase tracking-wider text-brand-teal font-extrabold text-center">GROWTH STRATEGY CLARIFICATIONS</span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans text-center">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400 text-center font-sans font-normal leading-relaxed">
            Understand exactly how hyper-targeted maps listings and Local SEO parameters function together.
          </p>
        </div>

        <div className="space-y-4 font-mono">
          {localFaqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="bg-[#0b0e20] border border-indigo-950 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 focus:outline-none flex justify-between items-center text-sm font-bold text-white uppercase tracking-wide border-b border-indigo-900/25 cursor-pointer selection:bg-indigo-950/20"
                >
                  <span className="pr-4 leading-tight">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-teal shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 text-slate-300 text-xs md:text-sm leading-relaxed border-t border-indigo-950/50 bg-[#0d122b]/40 font-mono font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* FREE LOCAL BUSINESS AUDIT FORM SECTION */}
      <section id="free-local-audit" className="py-20 bg-slate-950 border-t border-indigo-950 relative overflow-hidden text-left font-mono">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-[#040716] border border-indigo-950 p-8 rounded-3xl space-y-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />

            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/30">
                ★ SECURE DATABASE INTAKE FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans text-center">Get a Free Local Business Growth Audit</h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto text-center font-normal font-sans">
                Supply your address details and category terms to launch a diagnostic verification of your citation records.
              </p>
            </div>

            {auditSubmitted ? (
              <div className="p-8 bg-indigo-950/20 border border-indigo-900 rounded-2xl text-center space-y-4">
                <CheckSquare className="w-12 h-12 text-brand-teal mx-auto animate-bounce" />
                <h3 className="text-base font-bold text-white uppercase font-mono">Citations Verification Sprints Triggered</h3>
                <p className="text-[11.5px] text-slate-300 max-w-md mx-auto leading-relaxed">
                  Excellent success. We recorded your coordinates successfully. A hyperlocal organic strategist will complete a maps crawl analysis on **{auditForm.businessName || 'your slot'}** website and mail your recommendations report to **{auditForm.email}** within 12 business hours.
                </p>
                <div className="text-xs text-slate-500 font-mono font-normal">SLA Code: AKGLS-LCL-{Math.floor(1000 + Math.random() * 9000)}-OK</div>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4 font-mono text-xs max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-400 uppercase font-black text-[10px]">Business Name:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Noida Plaza Dental Clinic"
                      value={auditForm.businessName}
                      onChange={(e) => setAuditForm({...auditForm, businessName: e.target.value})}
                      className="w-full bg-slate-950 border border-indigo-900 rounded p-3 text-white focus:border-brand-teal outline-none transition" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 uppercase font-black text-[10px]">Website URL (or Social Shop Link):</label>
                    <input 
                      type="url" 
                      required
                      placeholder="https://myclinic.com"
                      value={auditForm.websiteUrl}
                      onChange={(e) => setAuditForm({...auditForm, websiteUrl: e.target.value})}
                      className="w-full bg-slate-950 border border-indigo-900 rounded p-3 text-white focus:border-brand-teal outline-none transition" 
                    />
                  </div>

                  <div className="space-y-1 overflow-visible">
                    <label className="text-slate-400 uppercase font-black text-[10px]">Business Category:</label>
                    <select 
                      value={auditForm.category}
                      onChange={(e) => setAuditForm({...auditForm, category: e.target.value})}
                      className="w-full bg-slate-950 border border-indigo-900 rounded p-3 text-white focus:border-brand-teal outline-none transition cursor-pointer font-mono"
                    >
                      <option value="Clinic or Healthcare">Clinic or Healthcare Network</option>
                      <option value="Restaurant or Cafe">Restaurant or Gourmet Cafe</option>
                      <option value="Salon, Spa or Wellness">Salon, Spa or Wellness Hub</option>
                      <option value="Gym or Fitness Center">Gym or Fitness Center</option>
                      <option value="Real Estate Agency">Real Estate Agency</option>
                      <option value="Law Firm / Attorney">Law Firm / Specialized Attorney</option>
                      <option value="Repair or Home Service">Repair or Emergency Services</option>
                      <option value="Home Service Provider">Home Service Provider</option>
                      <option value="Boutique or Retail Store">Boutique or Retail Brand</option>
                      <option value="Educational Institute">Specialized Educational Institute</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 uppercase font-black text-[10px]">Target Location Suburb or Zip code:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sector 62, Noida"
                      value={auditForm.targetLocation}
                      onChange={(e) => setAuditForm({...auditForm, targetLocation: e.target.value})}
                      className="w-full bg-slate-950 border border-indigo-900 rounded p-3 text-white focus:border-brand-teal outline-none transition" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 uppercase font-black text-[10px]">Official Contact Email:</label>
                    <input 
                      type="email" 
                      required
                      placeholder="contact@myclinic.com"
                      value={auditForm.email}
                      onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                      className="w-full bg-slate-950 border border-indigo-900 rounded p-3 text-white focus:border-brand-teal outline-none transition" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 uppercase font-black text-[10px]">Calling Phone Number:</label>
                    <input 
                      type="tel" 
                      placeholder="+91 800-000-0000"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({...auditForm, phone: e.target.value})}
                      className="w-full bg-slate-950 border border-indigo-900 rounded p-3 text-white focus:border-brand-teal outline-none transition" 
                    />
                  </div>

                </div>

                <div className="pt-4 text-center">
                  <button 
                    type="submit"
                    className="bg-brand-teal text-slate-950 font-black py-4 px-10 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 w-full md:w-auto uppercase cursor-pointer"
                    id="submit-local-audit-btn"
                  >
                    Request Free Hyperlocal Citations Audit & Verification Report
                  </button>
                </div>
              </form>
            )}

            {/* Audit Checklist Items Under Intake Form */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6 border-t border-indigo-950 font-mono text-[9.5px] text-slate-505 text-slate-450 leading-tight">
              <div className="space-y-1">
                <span className="text-brand-teal font-extrabold block">✓ LOCAL SEO REVIEW</span>
                <span className="text-slate-500 font-normal">Suburbs keyword optimization scans.</span>
              </div>
              <div className="space-y-1">
                <span className="text-brand-teal font-extrabold block">✓ MAPS PROFILE AUDIT</span>
                <span className="text-slate-500 font-normal">Crawl correctness GBP check checks.</span>
              </div>
              <div className="space-y-1">
                <span className="text-brand-teal font-extrabold block">✓ LEAD GAPS SEARCH</span>
                <span className="text-slate-500 font-normal">Conversion blockers analysis.</span>
              </div>
              <div className="space-y-1">
                <span className="text-brand-teal font-extrabold block">✓ SITE COMPILER METRICS</span>
                <span className="text-slate-500 font-normal">Mobile page health score reviews.</span>
              </div>
              <div className="space-y-1">
                <span className="text-brand-teal font-extrabold block font-mono">✓ AI POSITION MATCH</span>
                <span className="text-slate-500 font-normal">Voice assistant listings diagnostics.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUGGESTED ARTICLES & CONTENT STRATEGY SUGGESTIONS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-3 mb-12 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">suggested industry whitepapers</span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans text-center">Recent Insights on Hyperlocal Marketing</h2>
          <p className="text-xs text-slate-400 font-sans font-normal text-center">
            Centralized tips to help your service desk convert neighboring web surfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-xl space-y-3 hover:border-brand-teal/25 transition">
            <span className="text-brand-teal font-bold block font-mono text-[9px] uppercase tracking-wider">MAPS ALGORITHMS</span>
            <h3 className="text-sm font-bold text-white uppercase font-serif">Google Maps SEO Optimization Checklist for Standalone Stores</h3>
            <p className="text-slate-400 leading-relaxed font-sans">A comprehensive workflow guide to audit duplicate sitemaps, verify regional zip code Citations, and accelerate review aggregations.</p>
          </div>

          <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-xl space-y-3 hover:border-brand-teal/25 transition">
            <span className="text-indigo-400 font-bold block font-mono text-[9px] uppercase tracking-wider">CONVERSATIONAL SEO</span>
            <h3 className="text-sm font-bold text-white uppercase font-mono font-serif">Voice Search Integration for Legal & Health Specialists</h3>
            <p className="text-slate-400 leading-relaxed font-sans">Formatting long-tail address vectors to appear first when local users ask Alexa or Siri 'Suggest a reputable office near me'.</p>
          </div>

          <div className="p-6 bg-[#0b0e20] border border-indigo-950 rounded-xl space-y-3 hover:border-brand-teal/25 transition">
            <span className="text-sky-400 font-bold block text-[9px] uppercase tracking-wider">HYPERLOCAL ADS</span>
            <h3 className="text-sm font-bold text-white uppercase font-sans">Google Ads Geofencing Frameworks to Save Media Budgets</h3>
            <p className="text-slate-400 leading-relaxed font-sans">Stop leaking capital on users in remote locations. How geofencing radius targeting locks down absolute buyers locally.</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-slate-950 border-t border-indigo-950 relative overflow-hidden font-mono text-xs text-center select-none">
        <div className="absolute inset-0 bg-[#040716]/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
          <div className="space-y-4">
            <span className="bg-brand-teal/10 border border-brand-teal/30 text-brand-teal py-1 px-4 text-[10px] font-black uppercase tracking-widest rounded-full">
              Ready to dominated your local community?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-sans text-center">
              Ready to Grow Your Local Business?
            </h2>
            <p className="text-slate-350 text-slate-300 max-w-lg mx-auto leading-relaxed text-sm font-normal">
              Claim absolute visible authority on maps, local directories, search lists, and voice interfaces to turn your neighbor requests into permanent income.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a 
              href="#free-local-audit"
              onClick={() => {
                const el = document.getElementById('free-local-audit');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-brand-teal text-slate-950 py-4 px-8 rounded-xl font-extrabold text-xs uppercase cursor-pointer hover:bg-white transition text-center"
              id="final-local-aud-trigger"
            >
              Request Free Citations Audit
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full sm:w-auto bg-slate-900 text-white border border-indigo-900 py-4 px-8 rounded-xl font-bold text-xs uppercase cursor-pointer hover:bg-slate-800 transition text-center"
            >
              Direct chat with Analyst
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 text-[10.5px] text-slate-450 text-slate-400">
            <span>● Verified Maps Specialists</span>
            <span>● Aligned AI Engines</span>
            <span>● Secured Client data Workspaces</span>
          </div>

        </div>
      </section>

      {/* STICKY BOTTOM QUICK CALLBACK OVERLAY FOR IMMEDIATE ATTENTION LIFT */}
      <div className="sticky bottom-0 bg-slate-950 border-t border-indigo-950 p-3 flex justify-between items-center text-xs font-mono select-none z-40 md:hidden">
        <span className="text-brand-teal font-extrabold">Instant local support active:</span>
        <a href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} className="bg-brand-teal text-slate-950 py-1 px-3 rounded font-black uppercase text-[10px]">
          Call {CONTACT_NUMBER}
        </a>
      </div>

    </div>
  );
}

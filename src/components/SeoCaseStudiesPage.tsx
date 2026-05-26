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

interface SeoCaseStudiesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemasTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO & AI Search Optimization Case Studies",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Proven SEO growth results across SaaS, Ecommerce, Healthcare, Real Estate, and Finance. Explore verified traffic, keyword, and organic revenue case studies.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD"
  }
}`,
  review: `{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "AKGLS Group SEO Services"
  },
  "author": {
    "@type": "Person",
    "name": "Julian Thorne"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "AKGLS Group tripled our organic trial rate in under six months while lowering our average customer acquisition cost by over 30%."
}`
};

export default function SeoCaseStudiesPage({ onBackToHome, openProposalForm }: SeoCaseStudiesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // State setup
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "SEO Case Studies | Organic Traffic & AI Search Success | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Filter States
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<string>('All');

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const saasFaqs = [
    {
      q: "How long does SEO take to show ranking and traffic results?",
      a: "While preliminary technical issues can see immediate index state updates, compounding search engine traffic growth typically requires between 4 to 6 months of structural optimization, content hub integration, and continuous authority block scaling."
    },
    {
      q: "What specific industries does AKGLS Group specialize in?",
      a: "Our core expert portfolios span SaaS apps, Ecommerce retailers, multi-location Healthcare and local patient clinics, capital Real Estate companies, B2B Industrial Manufacturing, EdTech structures, and compliance-guided Finance agencies."
    },
    {
      q: "Are the client results in these case studies verified?",
      a: "Yes. All organic traffic, keyword rankings, incoming inquiries volume, and incremental revenue charts are taken directly from actual client GSC, GA4, and CRM database screenshots under active NDA parameters."
    },
    {
      q: "Can SEO directly improve our pipeline leads and revenue?",
      a: "Absolutely. Instead of targeting generic high-difficulty keywords, we construct high-intent comparative buyer guide nodes and frictionlessly coordinate checkout headers to optimize lead-converting traffic directly."
    },
    {
      q: "How does AI SEO and Search Engine Optimization (GEO) work?",
      a: "AI SEO aligns database schemas, conversational keyword clusters, and structural authority references so that generative engines like ChatGPT, Gemini, and Perplexity suggest your brand as the expert recommendation."
    },
    {
      q: "What software tools do you use inside your audit procedures?",
      a: "Our SEO specialists deploy professional enterprise intelligence tech including Google Search Console, Ahrefs, SEMrush, Screaming Frog crawlers, GTmetrix, PageSpeed, and proprietary AI citation crawlers."
    },
    {
      q: "Do you provide monthly progress reports and index transparency?",
      a: "Yes. We offer fully transparent reporting grids detailing search index shifts, keyword ranks lifts, inbound conversion logs, and actual ROI status on a recurring 30-day timeline."
    }
  ];

  // Interactive ROI Calculator States
  const [currTraffic, setCurrTraffic] = useState<number>(10000); // monthly visits
  const [convRate, setConvRate] = useState<number>(1.5); // % of traffic converting to leads/customers
  const [avgLtv, setAvgLtv] = useState<number>(500); // Average Customer Lifetime value
  const [growthMultiplier, setGrowthMultiplier] = useState<number>(3); // e.g. 2x, 3x, 5x SEO traffic growth

  // Interactive Before vs After state
  const [comparisonMetric, setComparisonMetric] = useState<'traffic' | 'leads' | 'keywords' | 'cvr'>('traffic');

  // Copy schemas notification
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Carousel/Slide control for testimonials
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Audit form
  const [auditFormSubmitted, setAuditFormSubmitted] = useState<boolean>(false);
  const [auditForm, setAuditForm] = useState({
    companyName: '',
    websiteUrl: '',
    industry: 'SaaS',
    channel: 'SEO + AI SEO',
    email: '',
    phone: '',
    challenges: ''
  });

  // Master List of 9 high-fidelity Case Studies
  const caseStudiesData = [
    {
      id: "case-1",
      title: "How We Lifted Organic Revenue by 420% for a Luxury Fashion Brand",
      slug: "luxe-fashion-ecommerce-seo",
      summary: "A comprehensive Ecommerce SEO, site-speed overhaul, and search entity structuring plan which propelled seasonal collections to absolute #1 ranks and drove premium buyer acquisition.",
      industry: "Ecommerce",
      service: "Ecommerce SEO",
      tag: "SEO + CRO + Ecommerce",
      metricHighlight: "+420% Organic Revenue",
      metrics: {
        traffic: "12K to 74K / mo",
        keywords: "+1,200 Top 3 Positions",
        leads: "+4.5x Purchase Conversions",
        roi: "680% ROAS Improvement"
      },
      duration: "8 Months",
      technologies: ["Ecommerce SEO", "Technical SEO", "CRO", "Schema Markup", "Content Engine"],
      challenge: "High dependency on rising Meta ad costs and zero organic pipeline for flagship fashion catalogs during seasonal sales thresholds.",
      strategy: "We built fully customized category schema sheets, injected high-contrast visual image assets with alt semantic indexing tags, established descriptive product hub-page authority models, and fixed checkout server response speeds.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-2",
      title: "Generating 310% More Organic Free Trials for a Collaborative PM SaaS",
      slug: "taskforce-saas-seo",
      summary: "Strategic deployment of competitive buyer comparison content hubs, product-led SEO templates, and generative AI sitemap optimization matching target corporate search queries.",
      industry: "SaaS",
      service: "AI SEO",
      tag: "AI SEO + SaaS + GEO",
      metricHighlight: "+310% Free Trials",
      metrics: {
        traffic: "15K to 68K / mo",
        keywords: "2,200 Top 5 Keywords",
        leads: "+310% Active Free Trials",
        roi: "-36% Cost Per Acquisition"
      },
      duration: "6 Months",
      technologies: ["AI SEO", "AEO", "SaaS Services", "Topic Clusters", "Product-Led Growth"],
      challenge: "Intense market alternatives spending millions on bidding keywords. The client needed a compounding, cost-efficient organic trial pipeline to improve seed funding runway.",
      strategy: "By generating conversational search answer panels and deploying high-volume, intent-matched blog sitemaps, we bypassed high PPC costs. We then structured clear, simplified, single-step signups above the fold.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-3",
      title: "Dominating Medical Map packs and Patient Booking for Local Clinics Group",
      slug: "medisync-healthcare-local",
      summary: "How we organized structured localized directory patterns, optimized schema snippets, and secured organic Google Map Pack ranks for high-value aesthetic medicine terms.",
      industry: "Healthcare",
      service: "Local SEO",
      tag: "Local SEO + Healthcare + Map Pack",
      metricHighlight: "98% Map Pack Coverage",
      metrics: {
        traffic: "4K to 18K / mo",
        keywords: "+14 Multi-location #1s",
        leads: "+180% Patient Calls/Inquiries",
        roi: "380% Clinic Appointment Growth"
      },
      duration: "5 Months",
      technologies: ["Local SEO", "Google Maps Platform", "Review Acceleration", "Schema Structuring", "HIPAA-alignment"],
      challenge: "Patients looking for cosmetic procedures were led away by competitor review channels because client's local clinics had disjointed profile credentials.",
      strategy: "We built deep micro-sites for individual locations with structured clinic appointment modules, initiated map pins verification sweeps, and optimized HIPAA-level authority content with real doctor bios schema.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-4",
      title: "Securing Premium Property Buyers via Deep District SEO Frameworks",
      slug: "real-estate-intent-seo",
      summary: "Targeting hyper-specific investor query vectors with dynamic district comparison index lists, beautiful neighborhood schemas, and optimized real estate landing pages.",
      industry: "Real Estate",
      service: "SEO",
      tag: "SEO + Real Estate + PPC",
      metricHighlight: "+240% Lead Value Boost",
      metrics: {
        traffic: "2K to 22K / mo",
        keywords: "+80 High-Value Property Terms",
        leads: "+240% Elite Buyer Inquiries",
        roi: "$14M Property Pipeline Added"
      },
      duration: "9 Months",
      technologies: ["SEO Services", "Google Ads", "District Clustering", "High-Resolution Images", "LCP optimization"],
      challenge: "Low-quality programmatic directory crawlers dominated search results, causing real estate agents and developers to receive unusable, generic database lookups.",
      strategy: "We developed premium single-property landing guides with dynamic asset calculators, and optimized neighborhood location search indexes to capture rich expatriate and high-net-worth real estate buyers.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-5",
      title: "Ranking LMS Academic Platform #1 for High-Difficulty Study Resource Terms",
      slug: "lms-edtech-content-seo",
      summary: "Topic-cluster content scaling blueprint that successfully captured massive search volumes, reduced average subscriber costs, and created permanent user registration loops.",
      industry: "Education",
      service: "SEO",
      tag: "Content Strategy + EdTech",
      metricHighlight: "+600% Academic Users",
      metrics: {
        traffic: "25K to 180K / mo",
         keywords: "12,000 top educational terms",
        leads: "+380% Platform Registrations",
        roi: "-55% Student Acquisition Cost"
      },
      duration: "10 Months",
      technologies: ["SEO Services", "Topic Hubs", "AEO", "PDF Index Optimization", "User Engagement Loops"],
      challenge: "High seasonality and high academic keyword difficulty. The client's educational software was invisible to organic learning researchers.",
      strategy: "We engineered extensive, inter-linked programmatic resource hubs, optimized downloadable syllabus PDFs with semantic text schemas, and deployed micro-conversion newsletters to convert casual readers.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-6",
      title: "Generating High-Ticket Inquiries for Global Cold Storage Manufacturer",
      slug: "industrial-manufacturing-seo",
      summary: "An ultra-targeted B2B SEO and high-intent technical documentation optimization program which secured dominant ranks for heavy cold chain equipment terms and linked corporate buyers.",
      industry: "Manufacturing",
      service: "Technical SEO",
      tag: "B2B SEO + Technical + Manufacturing",
      metricHighlight: "34 enterprise RFQs received",
      metrics: {
        traffic: "800 to 5,200 / mo",
        keywords: "280 Industrial B2B #1 positions",
        leads: "+34 Enterprise Quote Requests",
        roi: "15.4x Pipeline Return"
      },
      duration: "7 Months",
      technologies: ["Technical SEO", "B2B Lead Generation", "Catalog Schema Maps", "Core Web Vitals", "Direct Calendly Integration"],
      challenge: "Industrial buyers searching for complex, heavy machinery spec sheets could not discover the client's slow, unindexed flash-based catalog system.",
      strategy: "We audited crawl budgets to ensure deep catalog pages were indexed, mapped product attributes to specific schematic schemas, and built lightning-fast responsive quotation request pipelines.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-7",
      title: "Wealth Management organic scaling inside strict E-E-A-T regulatory models",
      slug: "finance-wealth-seo",
      summary: "How we navigated tight corporate governance compliance to build authoritative, trustworthy advice nodes that boosted local advisory bookings.",
      industry: "Finance",
      service: "CRO",
      tag: "E-E-A-T + Finance + CRO",
      metricHighlight: "+240% Callback Requests",
      metrics: {
        traffic: "3K to 19K / mo",
        keywords: "410 Wealth management top terms",
        leads: "+280 Private Client Callbacks",
        roi: "$110M New Investable Assets Opened"
      },
      duration: "12 Months",
      technologies: ["SEO Services", "CRO", "E-E-A-T Audit", "Review Schema", "Trust-centered UX design"],
      challenge: "Strict compliance disallowed traditional quick-ranking content methods, and the advisory page converted less than 0.5% of web visitors.",
      strategy: "We redesigned trust-oriented advice grids, co-authored articles with registered wealth analysts using structured credential schemas, and optimized call-back scheduler setups.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-8",
      title: "Multi-Location Home-Services Enterprise Map Pack Domination Plan",
      slug: "home-services-seo-audit",
      summary: "Structured index audits combined with programmatic local page generation that raised clinic call volumes across 14 target suburban regions.",
      industry: "Local Business",
      service: "Local SEO",
      tag: "Local SEO + Multi-Location + SEO Audit",
      metricHighlight: "+340% Mobile Map Visits",
      metrics: {
        traffic: "6K to 28K / mo",
        keywords: "+120 Local City Top ranks",
        leads: "+340% Dynamic Callback Phone logs",
        roi: "5x Franchise Outlay scale"
      },
      duration: "4 Months",
      technologies: ["Local SEO", "SEO Audit Services", "Programmatic localized assets", "Map Pack indexing", "Mobile optimization"],
      challenge: "Franchisees were bidding against each other on Google Ads, inflating CPC while organic reviews coverage was highly fragmented.",
      strategy: "We configured distinct, localized service catalogs with specialized schemas, disabled cannibalizing intra-franchise ad accounts, and set up rapid dynamic SMS reviews workflows.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "case-9",
      title: "Capturing Global IoT Sensor contracts with AI-driven Search visibility",
      slug: "iot-systems-geo-aeo",
      summary: "Positioning custom telemetry and industrial network hardware inside ChatGPT, Gemini, and conversational organic results to lock down early-stage tech contracts.",
      industry: "IoT Companies",
      service: "GEO",
      tag: "GEO + AEO + IoT + AI search",
      metricHighlight: "#1 recommended AI IoT Choice",
      metrics: {
        traffic: "1.2K to 8.4K / mo",
        keywords: "ChatGPT & Gemini Top citations",
        leads: "+190% Silicon Developer trials",
        roi: "8.2x Enterprise contract pipe value"
      },
      duration: "6 Months",
      technologies: ["GEO", "AEO", "AI SEO Services", "Conversational optimization", "Spec list Schema"],
      challenge: "Traditional search was evolving; engineering managers were skipping search engines entirely, entering requirements directly into LLMs for hardware alternatives lists.",
      strategy: "We built specialized conversational answer nodes, structured technical spec schemas with distinct machine variables, and secured high-weight citation lists across verified tech developer databases.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Filters calculation
  const filteredCaseStudies = caseStudiesData.filter(cs => {
    const industryMatch = (selectedIndustry === 'All' || cs.industry === selectedIndustry);
    
    // Simple logic for service matching
    let serviceMatch = true;
    if (selectedService !== 'All') {
      if (selectedService === 'SEO') serviceMatch = cs.service.includes('SEO') || cs.service === 'SEO';
      else if (selectedService === 'AI SEO') serviceMatch = cs.tag.includes('AI SEO') || cs.technologies.includes('AI SEO') || cs.service === 'AI SEO';
      else if (selectedService === 'Local SEO') serviceMatch = cs.service === 'Local SEO';
      else if (selectedService === 'Technical SEO') serviceMatch = cs.service === 'Technical SEO';
      else if (selectedService === 'Ecommerce SEO') serviceMatch = cs.service === 'Ecommerce SEO';
      else if (selectedService === 'GEO') serviceMatch = cs.tag.includes('GEO') || cs.technologies.includes('GEO');
      else if (selectedService === 'AEO') serviceMatch = cs.tag.includes('AEO') || cs.technologies.includes('AEO');
      else if (selectedService === 'Google Ads') serviceMatch = cs.technologies.includes('Google Ads');
      else if (selectedService === 'CRO') serviceMatch = cs.technologies.includes('CRO') || cs.service === 'CRO';
    }

    return industryMatch && serviceMatch;
  });

  // ROI Calculator Calculations
  const calcROI = () => {
    const currentLeads = Math.round(currTraffic * (convRate / 100));
    const currentRevenueValue = currentLeads * avgLtv;

    // Optimized Multiplier State (SEO compounding effect)
    const futureTraffic = currTraffic * growthMultiplier;
    // AKGLS optimization typically improves conversion rates by 50% (1.5x factor due to search intent matching & CRO optimization)
    const futureConvRate = parseFloat((convRate * 1.5).toFixed(2));
    const futureLeads = Math.round(futureTraffic * (futureConvRate / 100));
    const futureRevenueValue = futureLeads * avgLtv;

    const netIncrementalRevenue = futureRevenueValue - currentRevenueValue;
    const netIncrementalLeads = futureLeads - currentLeads;
    const estAgencyInvestment = 4500 * 6; // average enterprise seo program cost over 6 months
    const roiPercentage = Math.round((netIncrementalRevenue / (estAgencyInvestment || 1)) * 100);

    return {
      currentLeads,
      currentRevenueValue,
      futureTraffic,
      futureConvRate,
      futureLeads,
      futureRevenueValue,
      netIncrementalRevenue,
      netIncrementalLeads,
      roiPercentage
    };
  };

  const roiResult = calcROI();

  const copySchema = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.companyName || !auditForm.email || !auditForm.websiteUrl) return;
    setAuditFormSubmitted(true);
  };

  return (
    <div id="seo-case-studies-page" className="bg-[#030712] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-orange selection:text-slate-950">
      
      {/* Dynamic WhatsApp Support & Phone Floating triggers */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl shadow-2xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider border border-white/10 transition-all font-mono"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-white text-slate-950 p-3 rounded-xl shadow-2xl flex items-center justify-center gap-2 font-extrabold text-xs uppercase tracking-wider transition-all font-mono"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-pulse" /> Call Direct: {CONTACT_NUMBER}
        </a>
      </div>

      {/* STICKY TOP STATUS COMPONENT */}
      <div id="sticky-header" className="bg-slate-950 border-b border-indigo-950/80 text-xs py-2 px-4 flex justify-between items-center z-50 sticky top-0 font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Verified Organic Growth Audits: Active</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-orange hover:underline font-bold transition cursor-pointer flex items-center gap-1"
            id="back-home-top-btn"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition flex items-center space-x-1">
            <span className="text-brand-orange font-extrabold">HotLine:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#040816] text-white overflow-hidden text-left border-b border-indigo-950/70">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-brand-orange/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-orange tracking-wide uppercase font-mono">
                <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
                <span>Verified Client Case Histories</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none font-sans">
                SEO Case Studies That Show Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">Traffic, Rankings & Revenue</span> Growth
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Explore how AKGLS Group helps businesses increase high-value organic traffic, dominate keyword rankings, capture qualified target leads, and achieve actual, compounding SEO ROI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#case-studies-filter" 
                  className="bg-brand-orange text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-orange/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </a>
                <a 
                  href="#case-audit-form"
                  onClick={() => {
                    const el = document.getElementById('case-audit-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-350 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Free SEO Consultation</span>
                </a>
              </div>

              {/* Counters Metric Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-indigo-950/50 font-mono">
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-white block">500M+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Organic Impressions</span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-brand-orange block">10K+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Keywords Ranked</span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-white block">300%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Average Traffic Lift</span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-brand-orange block">150+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">SEO Campaigns Managed</span>
                </div>
              </div>

            </div>

            {/* Hero Right Dashboard Widget View representation */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0a0d1a] border border-indigo-950 rounded-2xl p-5 relative overflow-hidden font-mono shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl" />
                
                {/* Simulated Chart Container */}
                <div className="flex justify-between items-center pb-3 border-b border-indigo-950 mb-4 text-xs font-mono">
                  <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    Live Organic Metrics Dashboard
                  </span>
                  <span className="text-[9px] bg-indigo-950/80 border border-indigo-900 text-brand-orange px-2 py-0.5 rounded-full font-bold">
                    INDEX HEALTH
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Total Organic Impressions</span>
                      <span className="text-2xl font-black text-white tracking-tight">3,482,912 / mo</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold px-2 py-0.5 bg-emerald-500/10 rounded-full flex items-center gap-1 font-mono">
                      <TrendingUp className="w-3.5 h-3.5" /> +410% YOY
                    </span>
                  </div>

                  {/* Draw an awesome high-fidelity visual grid representing an SEO chart */}
                  <div className="h-44 bg-slate-950/85 border border-indigo-950/70 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                    
                    {/* SVG Graphic represent Line Graph */}
                    <div className="absolute inset-x-0 bottom-4 h-28 opacity-95">
                      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                        <defs>
                          <linearGradient id="cool-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path d="M0 30 Q10 24 20 25 T40 18 T60 14 T80 6 T100 2 L100 30 Z" fill="url(#cool-grad)" />
                        {/* Line */}
                        <path d="M0 30 Q10 24 20 25 T40 18 T60 14 T80 6 T100 2" fill="none" stroke="#ff5a1f" strokeWidth="1.2" strokeLinecap="round" />
                        {/* Dots */}
                        <circle cx="20" cy="25" r="1.5" fill="#ffffff" />
                        <circle cx="40" cy="18" r="1.5" fill="#ff5a1f" />
                        <circle cx="60" cy="14" r="1.5" fill="#ffffff" />
                        <circle cx="80" cy="6" r="1.5" fill="#ff5a1f" />
                        <circle cx="100" cy="2" r="1.8" fill="#ffffff" className="animate-ping" />
                      </svg>
                    </div>

                    <div className="flex justify-between text-[8px] text-slate-500 leading-none">
                      <span>4.5M Imp</span>
                      <span>Month 1 to 8 organic lift</span>
                    </div>

                    <div className="flex justify-between items-end text-[8px] text-slate-500 relative z-10 z-0">
                      <span>M1</span>
                      <span>M2</span>
                      <span>M3</span>
                      <span>M4</span>
                      <span>M5</span>
                      <span>M6</span>
                      <span>M7</span>
                      <span className="text-white font-bold">M8</span>
                    </div>

                  </div>

                  {/* Tiny details box */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-indigo-950/70 text-left">
                      <span className="text-[8px] text-slate-500 uppercase block">CTR Ratio Yield</span>
                      <span className="text-sm font-black text-white">4.8% (Target Max)</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-indigo-950/70 text-left">
                      <span className="text-[8px] text-slate-500 uppercase block">First-Page Keywords</span>
                      <span className="text-sm font-black text-brand-orange">+482 Terms</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST LOGOS CAROUSEL SECTION */}
      <section className="py-12 bg-slate-950/60 border-b border-indigo-950 font-mono text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-[9px] uppercase tracking-widest text-[#ff5a1f] font-bold block mb-6 animate-pulse">Trusted by fast-growing startups and industry-leading enterprise brands</span>
          
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            <span className="font-extrabold text-white text-sm sm:text-base tracking-tighter bg-indigo-950/30 px-4 py-2 rounded">★ NEXUS TECHNOLOGIES</span>
            <span className="font-extrabold text-[#ff5a1f] text-sm sm:text-base tracking-tighter bg-indigo-950/30 px-4 py-2 rounded">★ LUXEFORD CLOTHING</span>
            <span className="font-extrabold text-white text-sm sm:text-base tracking-tighter bg-indigo-950/30 px-4 py-2 rounded">★ MEDISYNC CLINICS</span>
            <span className="font-extrabold text-amber-500 text-sm sm:text-base tracking-tighter bg-indigo-950/30 px-4 py-2 rounded">★ PROPFLOW GLOBAL</span>
            <span className="font-extrabold text-white text-sm sm:text-base tracking-tighter bg-indigo-950/30 px-4 py-2 rounded">★ BRAINWAVE LMS</span>
          </div>
        </div>
      </section>

      {/* FILTERABLE CASE STUDIES SECTION (MASTER ENGINE) */}
      <section id="case-studies-filter" className="py-20 max-w-7xl mx-auto px-4 text-left font-sans">
        
        <div className="space-y-4 mb-16 text-center select-none">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20 font-mono">CASE PORTFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center leading-none">
            Explore SEO Success Stories by Industry & Service
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Browse verified, data-backed success histories. Filter directly by your industry niche or target digital marketing module to see matching metrics.
          </p>
        </div>

        {/* Filter Navigation Controls Grid */}
        <div className="bg-[#090d1a] border border-indigo-950 p-5 md:p-6 rounded-2xl mb-10 space-y-5 font-mono text-xs">
          
          {/* Industry filter selectors */}
          <div className="space-y-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black block">Filter By Specific Industry:</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {['All', 'Ecommerce', 'SaaS', 'Healthcare', 'Real Estate', 'Education', 'Manufacturing', 'Finance', 'Local Business', 'IoT Companies'].map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-lg border text-center transition font-semibold cursor-pointer ${
                    selectedIndustry === ind 
                      ? 'bg-brand-orange text-slate-950 border-brand-orange font-bold font-mono' 
                      : 'bg-slate-950 text-slate-400 border-indigo-950 hover:border-indigo-900'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Service filter selectors */}
          <div className="space-y-2 border-t border-indigo-950/70 pt-4">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black block">Filter By Specialized Service Module:</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {['All', 'SEO', 'AI SEO', 'Local SEO', 'Technical SEO', 'Ecommerce SEO', 'GEO', 'AEO', 'Google Ads', 'CRO'].map((srv) => (
                <button
                  key={srv}
                  onClick={() => setSelectedService(srv)}
                  className={`px-3 py-1.5 rounded-lg border text-center transition font-semibold cursor-pointer ${
                    selectedService === srv 
                      ? 'bg-brand-orange text-slate-950 border-brand-orange font-bold font-mono' 
                      : 'bg-slate-950 text-slate-400 border-indigo-950 hover:border-indigo-900'
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Active Results Status */}
        <div className="flex justify-between items-center text-xs font-mono pb-6 border-b border-indigo-950 mb-8">
          <span className="text-slate-400">
            Showing <strong className="text-brand-orange">{filteredCaseStudies.length}</strong> matching growth cases
          </span>
          <span className="text-[10px] text-slate-500">
            Industry: [{selectedIndustry}] | Service: [{selectedService}]
          </span>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((cs) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#070a16] border border-indigo-950 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-orange/5 transition duration-350"
              >
                <div>
                  
                  {/* Card Visual Top header banner */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img 
                      src={cs.image} 
                      alt={cs.title} 
                      className="w-full h-full object-cover opacity-75 hover:scale-105 duration-700 transition"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070a16] via-[#070a16]/40 to-transparent" />
                    
                    {/* Top badgies */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 font-mono text-[9px]">
                      <span className="bg-slate-950/90 text-slate-200 border border-indigo-900 py-1 px-2 rounded-md font-bold uppercase tracking-wider">
                        {cs.industry}
                      </span>
                      <span className="bg-brand-orange text-slate-950 py-1 px-2 rounded-md font-black tracking-wide">
                        {cs.metricHighlight}
                      </span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 space-y-4">
                    
                    {/* Tags line */}
                    <span className="text-[10px] text-brand-orange font-mono font-bold tracking-widest uppercase block">
                      {cs.tag}
                    </span>

                    <h3 className="text-lg font-bold text-white tracking-tight hover:text-brand-orange transition duration-200 leading-snug line-clamp-2">
                      {cs.title}
                    </h3>

                    <p className="text-slate-400 text-xs font-sans font-normal leading-relaxed line-clamp-3">
                      {cs.summary}
                    </p>

                    {/* Miniature stats matrix snapshot */}
                    <div className="bg-slate-950 grid grid-cols-2 gap-3 p-3.5 rounded-xl border border-indigo-950/50 font-mono text-left">
                      <div>
                        <span className="text-[8px] text-slate-500 uppercase block">Traffic Lift:</span>
                        <span className="text-xs text-slate-200 font-bold block truncate">{cs.metrics.traffic}</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-slate-500 uppercase block">Rankings:</span>
                        <span className="text-xs text-brand-orange font-bold block truncate">{cs.metrics.keywords}</span>
                      </div>
                      <div className="border-t border-indigo-950 pt-2 mt-1">
                        <span className="text-[8px] text-slate-500 uppercase block">Conversion:</span>
                        <span className="text-xs text-slate-200 font-bold block truncate">{cs.metrics.leads}</span>
                      </div>
                      <div className="border-t border-indigo-950 pt-2 mt-1">
                        <span className="text-[8px] text-slate-500 uppercase block">SEO ROI Yield:</span>
                        <span className="text-xs text-emerald-400 font-bold block truncate">{cs.metrics.roi}</span>
                      </div>
                    </div>

                    {/* Technologies markers */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cs.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-indigo-950/40 text-[#ff5a1f] border border-indigo-900/60 font-mono text-[9px] px-2 py-0.5 rounded">
                          #{tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Card Button footer */}
                <div className="p-6 pt-0 border-t border-indigo-950/40 mt-4 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500">Timeline: {cs.duration}</span>
                  {cs.id === 'case-1' ? (
                    <button 
                      onClick={() => {
                        window.history.pushState(null, '', '/case-study/ecommerce-seo-results/');
                        window.dispatchEvent(new Event('popstate'));
                      }}
                      className="text-emerald-400 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </button>
                  ) : cs.id === 'case-3' ? (
                    <button 
                      onClick={() => {
                        window.history.pushState(null, '', '/case-study/local-seo-results/');
                        window.dispatchEvent(new Event('popstate'));
                      }}
                      className="text-emerald-400 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </button>
                  ) : (cs.id === 'case-2' || cs.id === 'case-9' || cs.tag.includes('AI') || cs.tag.includes('GEO') || cs.tag.includes('AEO')) ? (
                    <button 
                      onClick={() => {
                        window.history.pushState(null, '', '/case-study/ai-optimization-results/');
                        window.dispatchEvent(new Event('popstate'));
                      }}
                      className="text-emerald-400 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </button>
                  ) : cs.tag.includes('PPC') ? (
                    <button 
                      onClick={() => {
                        window.history.pushState(null, '', '/case-study/ppc-success-stories/');
                        window.dispatchEvent(new Event('popstate'));
                      }}
                      className="text-emerald-400 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </button>
                  ) : (
                    <a 
                      href="#case-audit-form"
                      onClick={() => {
                        const el = document.getElementById('case-audit-form');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-brand-orange hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Request Details</span>
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCaseStudies.length === 0 && (
            <div className="col-span-full py-16 text-center space-y-3 font-mono">
              <AlertCircle className="w-10 h-10 text-slate-500 mx-auto" />
              <p className="text-slate-400 font-bold">No exact success stories matched your precise filters selection.</p>
              <button 
                onClick={() => { setSelectedIndustry('All'); setSelectedService('All'); }}
                className="text-brand-orange font-semibold underline text-xs cursor-pointer"
              >
                Reset Filter Parameters
              </button>
            </div>
          )}
        </div>

      </section>

      {/* SPECIAL FEATURED PREMIUM CASE SHOWCASE SECTION */}
      <section className="py-20 bg-[#060a18] border-y border-indigo-950/70 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none">
            <span className="text-xs font-mono font-extrabold text-brand-orange tracking-widest bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/30">FEATURED SCALE BLUEPRINT</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
              Featured SEO Growth Story
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              How we constructed a systematic topic cluster framework to deliver massive organic authority scaling for an enterprise SaaS provider.
            </p>
          </div>

          {/* Large Horizontal visual segment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-slate-950 border border-indigo-950 rounded-3xl overflow-hidden p-6 md:p-10 items-center">
            
            {/* Visual left column graphics */}
            <div className="lg:col-span-6 space-y-6 relative">
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative h-64 sm:h-80 bg-[#02050e] border border-indigo-950 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between font-mono">
                
                {/* Simulated Growth Chart graphics bar style */}
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold">
                  <span>★ SAAS PIPELINE GRAPH RANGE: 1.2M</span>
                  <span className="text-brand-orange font-black">ORGANIC AUDIT WIN</span>
                </div>

                <div className="space-y-4 pt-4 flex-1 flex flex-col justify-end">
                  
                  {/* High visual display counters lines */}
                  <div className="grid grid-cols-3 gap-3 border-b border-indigo-950 pb-4 font-mono text-left">
                    <div>
                      <span className="text-[8px] text-slate-500 uppercase block">Impressions:</span>
                      <span className="text-base font-bold text-white block">1.8M / mo</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-500 uppercase block">Top 10 Terms:</span>
                      <span className="text-base font-bold text-brand-orange block">+320 High</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-500 uppercase block">Trial Factor:</span>
                      <span className="text-base font-bold text-white block">5x Inquiries</span>
                    </div>
                  </div>

                  <div className="relative h-28 flex items-end space-x-2 bg-slate-900/40 p-3 rounded-lg border border-indigo-950/70">
                    {/* Simulated vertical progress bars representing 6x lift */}
                    <div className="w-full h-8 bg-indigo-950/80 rounded-t relative flex items-center justify-center font-bold text-[8px] text-slate-500"><span className="absolute bottom-1">M1</span></div>
                    <div className="w-full h-12 bg-indigo-950/80 rounded-t relative flex items-center justify-center font-bold text-[8px] text-slate-500"><span className="absolute bottom-1 font-bold">M2</span></div>
                    <div className="w-full h-20 bg-indigo-900/60 rounded-t relative flex items-center justify-center font-bold text-[8px] text-slate-400"><span className="absolute bottom-1 font-bold">M3</span></div>
                    <div className="w-full h-24 bg-brand-orange/20 rounded-t relative flex items-center justify-center font-bold text-[8px] text-brand-orange"><span className="absolute bottom-1 font-semibold">M4</span></div>
                    <div className="w-full h-28 bg-brand-orange text-slate-950 rounded-t relative flex items-center justify-center font-bold text-[8px] text-slate-950 font-black"><span className="absolute bottom-1">M6</span></div>
                  </div>

                </div>

                <span className="text-[9px] text-slate-500 block text-center uppercase tracking-wider mt-2">
                  *Compounding Search Index metrics measured over consecutive quarters.
                </span>

              </div>
            </div>

            {/* Growth Story Details right column */}
            <div className="lg:col-span-6 space-y-6 text-left font-mono">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">How We Generated 1M+ Organic Impressions for a SaaS Provider</span>
              
              <div className="space-y-4">
                
                <div className="space-y-1">
                  <strong className="text-xs text-white uppercase tracking-wider block">THE CHALLENGE:</strong>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed font-normal text-left">
                    The platform was spending close to $15,000 monthly bidding on legacy enterprise software search codes with a trial conversion rate below 1%, dragging down investor runway.
                  </p>
                </div>

                <div className="space-y-1 border-t border-indigo-950/80 pt-3">
                  <strong className="text-xs text-white uppercase tracking-wider block">THE STRATEGY:</strong>
                  <ul className="text-xs text-slate-400 font-sans leading-relaxed font-normal text-left list-disc list-inside space-y-1">
                    <li>Audited core web vitals and slashed render blocks to achieve ideal code speed states.</li>
                    <li>Sitemapped competitive topic comparison nodes capturing high-buyer intent.</li>
                    <li>Injected rich answers optimized natively for Generative search engines (AEO/GEO).</li>
                    <li>Restructured target demo page headers with frictionless checkout links.</li>
                  </ul>
                </div>

                <div className="space-y-1 border-t border-indigo-950/80 pt-3">
                  <strong className="text-xs text-emerald-400 uppercase tracking-wider block">THE RESULTS achieved:</strong>
                  <div className="grid grid-cols-2 gap-4 pt-1 font-mono text-[11px] text-slate-200">
                    <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> 600% Traffic Growth</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> 1M+ Imp Generated</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> 320+ Top 10 Keywords</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> 5x Qualified Demo Increase</span>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-indigo-950">
                <a href="#case-audit-form" className="bg-[#ff5a1f] text-slate-950 text-xs uppercase tracking-widest font-black px-6 py-3 rounded-lg hover:bg-white duration-350 transition inline-block">
                  Request SaaS growth Blueprint
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* METRICS BEFORE VS AFTER INTERACTIVE TOGGLER */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          {/* Info Section Left */}
          <div className="lg:col-span-5 space-y-6">
            
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">MEASURABLE LIFT</span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans text-left">
              Real SEO Improvements You Can Measure
            </h2>

            <p className="text-slate-350 text-sm leading-relaxed font-sans font-normal text-slate-300">
              Compounding organic search authority is not based on luck. We implement structured processes that lift average stats profiles systematically. Select direct keywords metrics to review improvements below:
            </p>

            {/* Metric select toggles */}
            <div className="space-y-3 pt-2 font-mono text-xs text-left">
              {[
                { key: 'traffic', label: '1. Organic Traffic Boost (+21.5x scale)' },
                { key: 'leads', label: '2. Inbound Leads Volume (+15x scale)' },
                { key: 'keywords', label: '3. Top 3 Keywords Indexed (+48x scale)' },
                { key: 'cvr', label: '4. Average Conversion Yields (+5.6x scale)' }
              ].map((obj) => (
                <button
                  key={obj.key}
                  onClick={() => setComparisonMetric(obj.key as any)}
                  className={`w-full p-3.5 rounded-xl border text-left flex justify-between items-center transition cursor-pointer ${
                    comparisonMetric === obj.key 
                      ? 'bg-indigo-950/50 border-brand-orange/40 text-brand-orange font-bold' 
                      : 'bg-slate-950 text-slate-400 border-indigo-950 hover:border-indigo-900'
                  }`}
                >
                  <span>{obj.label}</span>
                  {comparisonMetric === obj.key && <Check className="w-4 h-4 text-brand-orange animate-bounce" />}
                </button>
              ))}
            </div>

          </div>

          {/* Toggling Comparison graphics panel right */}
          <div className="lg:col-span-5">
            <div className="bg-[#090d19] border border-indigo-950 rounded-2xl p-6 space-y-5 font-mono">
              
              <div className="flex justify-between items-center border-b border-indigo-950 pb-3 text-xs font-mono">
                <span className="text-slate-400 uppercase font-bold text-[10px]">Comparative metrics analysis</span>
                <span className="text-emerald-400 font-extrabold text-[10px]">IDEAL RECOVERY RATE</span>
              </div>

              {/* Dynamic View based on metric toggled */}
              {comparisonMetric === 'traffic' && (
                <div className="space-y-4">
                  <span className="text-xs text-slate-200 uppercase font-black tracking-wider block">ORGANIC COMPENSATORY TRAFFIC (VISITS/MO)</span>
                  <div className="space-y-3">
                    <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/60">
                      <span className="text-[10px] text-slate-500 uppercase block">Before Campaign Launch Campaign:</span>
                      <span className="text-lg font-black text-slate-400 block mt-1">2,000 visitors / mo</span>
                    </div>
                    <div className="bg-indigo-950/30 p-4 rounded-xl border border-[#ff5a1f]/30">
                      <span className="text-[10px] text-[#ff5a1f] uppercase block font-bold">AKGLS Group Optimized Target:</span>
                      <span className="text-2xl font-black text-white block mt-1 text-emerald-400">45,000 visitors / mo</span>
                    </div>
                  </div>
                </div>
              )}

              {comparisonMetric === 'leads' && (
                <div className="space-y-4">
                  <span className="text-xs text-slate-200 uppercase font-black tracking-wider block">INBOUND LEADS GENERATED / MO</span>
                  <div className="space-y-3">
                    <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/60">
                      <span className="text-[10px] text-slate-500 uppercase block">Before Campaign Launch Campaign:</span>
                      <span className="text-lg font-black text-slate-400 block mt-1">20 inquiries / mo</span>
                    </div>
                    <div className="bg-indigo-950/30 p-4 rounded-xl border border-[#ff5a1f]/30">
                      <span className="text-[10px] text-[#ff5a1f] uppercase block font-bold font-mono">AKGLS Group Optimized Target:</span>
                      <span className="text-2xl font-black text-white block mt-1 text-emerald-400">320 inquiries / mo</span>
                    </div>
                  </div>
                </div>
              )}

              {comparisonMetric === 'keywords' && (
                <div className="space-y-4">
                  <span className="text-xs text-slate-200 uppercase font-black tracking-wider block">KEYWORDS RANKED IN TOP 10 SEARCH PAGES</span>
                  <div className="space-y-3">
                    <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/60">
                      <span className="text-[10px] text-slate-500 uppercase block">Before Campaign Launch Campaign:</span>
                      <span className="text-lg font-black text-slate-400 block mt-1">50 terms</span>
                    </div>
                    <div className="bg-indigo-950/30 p-4 rounded-xl border border-[#ff5a1f]/30">
                      <span className="text-[10px] text-[#ff5a1f] uppercase block font-bold font-mono">AKGLS Group Optimized Target:</span>
                      <span className="text-2xl font-black text-white block mt-1 text-emerald-400">2,500 target terms</span>
                    </div>
                  </div>
                </div>
              )}

              {comparisonMetric === 'cvr' && (
                <div className="space-y-4">
                  <span className="text-xs text-slate-200 uppercase font-black tracking-wider block">WEBSITE TRAFFIC CONVERSION RATE (%)</span>
                  <div className="space-y-3">
                    <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/60">
                      <span className="text-[10px] text-slate-500 uppercase block">Before Campaign Launch Campaign:</span>
                      <span className="text-lg font-black text-slate-400 block mt-1">0.8% layout average</span>
                    </div>
                    <div className="bg-indigo-950/30 p-4 rounded-xl border border-[#ff5a1f]/30">
                      <span className="text-[10px] text-[#ff5a1f] uppercase block font-bold font-mono">AKGLS Group Optimized Target:</span>
                      <span className="text-2xl font-black text-white block mt-1 text-emerald-400">4.5% conversion yield</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Direct simple stats matrix view */}
              <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950 flex justify-between items-center text-xs font-mono">
                <span className="text-slate-500">Avg Monthly Gains:</span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded uppercase tracking-wider font-extrabold text-[10px]">
                  ROI verified +$250K Added Value
                </span>
              </div>

            </div>
          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* SEO RESULTS TIMELINE SECTION */}
      <section className="py-20 bg-[#060a18] border-y border-indigo-950/80 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-20 text-center select-none">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/30">ROADMAP FRAMEWORK</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
              Our Multi-Phase SEO Scaling Timeline
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              How we construct organic value block by block. Compounding indexes require continuous strategic actions over standard ad hoc code inputs.
            </p>
          </div>

          {/* Visual Timeline UI with five stages */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left font-mono">
            
            {/* Stage 1 */}
            <div className="p-6 bg-slate-950 border border-indigo-950 rounded-2xl relative space-y-4 hover:border-brand-orange/30 transition duration-300">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-extrabold font-mono text-sm border border-slate-900 shadow-xl">
                01
              </div>
              <div className="pt-2">
                <strong className="text-xs text-brand-orange uppercase block tracking-wider">MONTH 1:</strong>
                <h3 className="text-sm font-bold text-white mt-1">SEO Audit & Technical Fixes</h3>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed font-normal mt-2">
                  Detailed crawl inspections, Core Web Vitals profiling, fixing meta redirects, resolving duplicate parameters, and structuring client XML sitemaps grids.
                </p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 bg-slate-950 border border-indigo-950 rounded-2xl relative space-y-4 hover:border-brand-orange/30 transition duration-300">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-xl bg-[#090d1c] border border-indigo-950 flex items-center justify-center text-slate-300 font-extrabold font-mono text-xs shadow-xl">
                02
              </div>
              <div className="pt-2">
                <strong className="text-xs text-indigo-400 uppercase block tracking-wider">MONTH 2:</strong>
                <h3 className="text-sm font-bold text-white mt-1">Keyword Optimization</h3>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed font-normal mt-2">
                  Developing competitive keyword clusters matching visitor buying intentions, mapping content schema trees, and identifying gaps inside parent search profiles.
                </p>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 bg-slate-950 border border-indigo-950 rounded-2xl relative space-y-4 hover:border-brand-orange/30 transition duration-300">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-xl bg-[#090d1c] border border-indigo-950 flex items-center justify-center text-slate-300 font-extrabold font-mono text-xs shadow-xl">
                03
              </div>
              <div className="pt-2">
                <strong className="text-xs text-sky-400 uppercase block tracking-wider">MONTH 3:</strong>
                <h3 className="text-sm font-bold text-white mt-1">Content Scaling</h3>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed font-normal mt-2">
                  Drafting high-authority topic comparison grids, launching programmatic template pages, and integrating active semantic keywords matching user searches.
                </p>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-6 bg-slate-950 border border-indigo-950 rounded-2xl relative space-y-4 hover:border-brand-orange/30 transition duration-300">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-xl bg-[#090d1c] border border-indigo-950 flex items-center justify-center text-slate-300 font-extrabold font-mono text-xs shadow-xl">
                04
              </div>
              <div className="pt-2">
                <strong className="text-xs text-amber-500 uppercase block tracking-wider">MONTH 4:</strong>
                <h3 className="text-sm font-bold text-white mt-1">Authority Building</h3>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed font-normal mt-2">
                  Securing top-tier contextual authority mentions, organizing inter-linked internal content loops, and validating schema snippet code mappings.
                </p>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-6 bg-slate-950 border border-indigo-950 rounded-2xl relative space-y-4 hover:border-brand-orange/30 transition duration-300">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold font-mono text-xs border border-slate-900 shadow-xl">
                5+
              </div>
              <div className="pt-2">
                <strong className="text-xs text-emerald-400 uppercase block tracking-wider">MONTH 5+:</strong>
                <h3 className="text-sm font-bold text-white mt-1">Traffic & Conversion Growth</h3>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed font-normal mt-2">
                  Tracking search indexing trends, configuring optimized call-to-action hooks, optimizing pricing panels, and monitoring ongoing organic MRR.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* AI SEO & GEO RESULTS (TRENDING VISIBILITY FOCUS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          {/* Left simulated ChatGPT view */}
          <div className="lg:col-span-5 bg-[#030612] border border-indigo-950 p-5 rounded-2xl space-y-4 font-mono text-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl" />
            
            <div className="flex items-center space-x-2 text-slate-400 text-[10px] pb-2 border-b border-indigo-950">
              <Bot className="w-4 h-4 text-[#ff5a1f] animate-pulse" />
              <span>Simulated Generative AI Recommendation Node</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/80 space-y-1 text-left">
              <span className="text-[9px] text-[#ff5a1f] uppercase block font-bold">User query prompt entered:</span>
              <p className="text-[11px] text-slate-200 font-sans italic font-normal">
                &quot;Recommend the most reliable cyber-security software or enterprise CRM platform for scaling cloud infrastructures...&quot;
              </p>
            </div>

            <div className="bg-indigo-950/25 p-4 rounded-xl border border-indigo-900/60 text-left relative">
              <span className="text-[9px] text-brand-orange uppercase block font-bold">ChatGPT/Gemini Output response:</span>
              <p className="text-[11px] text-slate-350 font-sans font-normal leading-relaxed text-left text-slate-300 mt-1">
                &quot;Based on technical security protocols, customer evaluation logs, and seamless API integrations, **[Client Company]** is recommended as a top industrial CRM choice, praised specifically for frictionless schema parameters...&quot;
              </p>
              <span className="text-[8.5px] text-slate-500 block text-right mt-2 uppercase font-mono tracking-wider font-extrabold text-brand-orange">
                ★ 100% VERIFIED SEMANTIC CITATION MATCHED
              </span>
            </div>

            <span className="text-[9px] text-slate-550 block text-center uppercase tracking-wider text-slate-500">
              We align technical specifications so Generative engines dynamically suggest your brand.
            </span>

          </div>

          {/* Right info text column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">NEXT-GEN SEARCH</span>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans text-left leading-tight">
              AI SEO & GEO Optimization Success Stories
            </h3>

            <p className="text-slate-350 text-sm leading-relaxed font-sans font-normal text-slate-300">
              Search is changing rapidly. Progressive business leaders target indexing layouts inside ChatGPT queries, Gemini responses, Perplexity lists, and voice search citation networks.
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-slate-300">
              <div className="p-3 bg-slate-950 rounded-xl border border-indigo-950/60 text-left">
                <span className="text-[8px] text-slate-500 uppercase block">ChatGPT Mentions:</span>
                <span className="text-xs font-extrabold text-brand-orange block mt-1">+280% Visibility Lift</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-indigo-950/60 text-left">
                <span className="text-[8px] text-slate-500 uppercase block">Gemini Optimization:</span>
                <span className="text-xs font-extrabold text-brand-orange block mt-1">Top Spot Secured</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-indigo-950/60 text-left">
                <span className="text-[8px] text-slate-500 uppercase block">Voice Search Growth:</span>
                <span className="text-xs font-extrabold text-[#ff5a1f] block mt-1">4.2x Citation volume</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-indigo-950/60 text-left">
                <span className="text-[8px] text-slate-500 uppercase block">GEO Analytics Score:</span>
                <span className="text-xs font-extrabold text-emerald-400 block mt-1">98% Recommendation Rate</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* INTERACTIVE SEO ROI CALCULATOR (ADVANCED VISUAL FEATURE) */}
      <section className="py-20 bg-[#060a18] border-y border-indigo-950/80 font-sans">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-1" />

            {/* Left side info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">BUSINESS VALUATION TOOL</span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Calculate the True Return of Compounding Organic SEO
              </h2>

              <p className="text-slate-350 text-sm leading-relaxed font-sans font-normal text-slate-400 text-left">
                SEO is a long-term commercial investment that compounds over time, unlike search display ads which stop producing leads the moment you pause monthly budgets.
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950/80 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="text-slate-200"> কম্পাউন্ডিং ট্রাফিক বৃদ্ধির মডেল (Compounding Traffic Growth Model)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="text-slate-200"> optimized conversions via transactional search code mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="text-slate-200"> reliable financial pipeline projections</span>
                </div>
              </div>

            </div>

            {/* Right side Calculator Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b0f1e] border border-indigo-950 rounded-2xl p-6 space-y-5 font-mono shadow-2xl">
                
                <div className="flex justify-between items-center border-b border-indigo-950 pb-3 text-xs font-mono">
                  <span className="text-slate-400 font-bold uppercase text-[9.5px]">SEO Valuation modeling tool</span>
                  <span className="text-brand-orange font-bold text-[9px] uppercase">ESTIMATED COMPENSATORY ROI</span>
                </div>

                <div className="space-y-4 text-xs font-mono text-left">
                  
                  {/* Traffic slider */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Curr Monthly Organic Traffic:</span>
                      <span className="text-brand-orange font-bold font-mono">{currTraffic.toLocaleString()} Visits</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="100000" 
                      step="500"
                      value={currTraffic}
                      onChange={(e) => setCurrTraffic(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-orange"
                    />
                  </div>

                  {/* conversion rate slider */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Inbound Conv rate (%):</span>
                      <span className="text-amber-500 font-bold font-mono">{convRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.1" 
                      max="10" 
                      step="0.1"
                      value={convRate}
                      onChange={(e) => setConvRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-amber-500"
                    />
                  </div>

                  {/* average customer lifetime value slider */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 uppercase font-black text-[9.5px]">Avg Customer LTV value ($):</span>
                      <span className="text-sky-400 font-bold font-mono">${avgLtv} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="10000" 
                      step="10"
                      value={avgLtv}
                      onChange={(e) => setAvgLtv(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-sky-450 accent-sky-400"
                    />
                  </div>

                  {/* Traffic Multiplier slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs text-left">
                      <span className="text-[#ff5a1f] uppercase font-black text-[9.5px] block font-mono">Target Traffic Growth rate:</span>
                      <span className="text-emerald-400 font-bold font-mono">{growthMultiplier}x scale (Optimized)</span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="10" 
                      step="1"
                      value={growthMultiplier}
                      onChange={(e) => setGrowthMultiplier(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-emerald-450 accent-emerald-400"
                    />
                  </div>

                  {/* Calculations breakdown display box */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-indigo-950 grid grid-cols-2 gap-4 text-left">
                    
                    <div className="space-y-0.5">
                      <span className="text-[8.5px] text-slate-500 uppercase block">Current Leads / mo:</span>
                      <span className="text-sm font-bold text-slate-300">{roiResult.currentLeads} inquiries</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[8.5px] text-slate-500 uppercase block">Current Rev Value:</span>
                      <span className="text-sm font-bold text-slate-400">${roiResult.currentRevenueValue.toLocaleString()}</span>
                    </div>

                    <div className="col-span-2 pt-2 border-t border-indigo-900/60 flex justify-between items-center">
                      <div>
                        <span className="text-[9px] text-[#ff5a1f] uppercase font-semibold block font-mono">Optimized Leads / mo:</span>
                        <span className="text-xs text-slate-400 font-sans block">{roiResult.futureLeads} inquiries (+{roiResult.netIncrementalLeads})</span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">Conv Rate: {roiResult.futureConvRate}%</span>
                    </div>

                    <div className="col-span-2 pt-2 border-t border-indigo-900/60 flex justify-between items-center bg-emerald-950/20 px-2 rounded-lg border border-emerald-900/40">
                      <div>
                        <span className="text-[9px] text-emerald-450 block uppercase text-emerald-400 font-mono font-bold">Net Incremental Revenue / mo:</span>
                        <span className="text-[9px] text-slate-500 block">Est Agency Campaign ROI: {roiResult.roiPercentage}%</span>
                      </div>
                      <span className="text-base font-black text-emerald-400 animate-pulse">
                        +${roiResult.netIncrementalRevenue.toLocaleString()}
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            <div className="lg:col-span-1" />

          </div>
        </div>
      </section>

      {/* CLIENT VIDEO TESTIMONIALS & REVIEWS GRIDS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-sans">
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none">
          <span className="text-xs font-mono font-extrabold text-brand-orange tracking-widest bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/30">CLIENT VOICE</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
            Client Success Stories
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            What founders and enterprise leaders say after locking in AKGLS Group organic parameters.
          </p>
        </div>

        {/* Video simulation and testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-brand-orange/30 transition-all text-left">
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
              </div>
              <p className="text-xs text-slate-300 font-sans italic leading-relaxed">
                &quot;Our medical map pack visibility went from invisible to fully dominating all suburban clinics categories. Our phones have not stopped ringing, and scheduling new patient bookings is completely automated.&quot;
              </p>
            </div>
            
            <div className="pt-6 border-t border-indigo-950 mt-6 flex items-center space-x-3 text-left">
              <div className="w-9 h-9 rounded-full bg-indigo-950 flex items-center justify-center text-xs font-extrabold text-brand-orange border border-indigo-900">
                DR
              </div>
              <div className="font-mono text-xs">
                <span className="text-white font-bold block">Dr. Randall Vance</span>
                <span className="text-slate-500 text-[10px]">Medical Director, MediSync Clinics</span>
              </div>
            </div>
          </div>

          {/* Card 2 (With Interactive Play Graphic representation) */}
          <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-brand-orange/30 transition-all text-left relative group">
            
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1 border border-brand-orange/30 bg-brand-orange/5 px-2 py-0.5 rounded text-[9px] text-[#ff5a1f] font-mono">
                  <Play className="w-2.5 h-2.5 fill-brand-orange" />
                  <span>PLAY VERIFIED VIDEO DEBRIEF</span>
                </div>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-500" />)}
                </div>
              </div>
              
              <p className="text-xs text-slate-300 font-sans italic leading-relaxed">
                &quot;Tripling organic free trial adoptions for our collaborative project software within six months while lowering CAC was exactly the performance audit AKGLS delivered.&quot;
              </p>
            </div>

            <div className="pt-6 border-t border-indigo-950 mt-6 flex items-center space-x-3 text-left">
              <div className="w-9 h-9 rounded-full bg-slate-900 border border-indigo-950 flex items-center justify-center text-xs font-extrabold text-slate-350 font-mono">
                JT
              </div>
              <div className="font-mono text-xs">
                <span className="text-white font-bold block">Julian Thorne</span>
                <span className="text-slate-500 text-[10px]">Co-Founder, TaskForce Collaborative</span>
              </div>
            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-brand-orange/30 transition-all text-left">
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
              </div>
              <p className="text-xs text-slate-300 font-sans italic leading-relaxed">
                &quot;The localized program parameters optimized organic luxury catalog discovery. Our purchase metrics during search intervals spiked and stayed high even when pause metadata runs are initialized.&quot;
              </p>
            </div>
            
            <div className="pt-6 border-t border-indigo-950 mt-6 flex items-center space-x-3 text-left">
              <div className="w-9 h-9 rounded-full bg-indigo-950 flex items-center justify-center text-xs font-extrabold text-brand-orange border border-indigo-900">
                SR
              </div>
              <div className="font-mono text-xs">
                <span className="text-white font-bold block">Sasha Romanov</span>
                <span className="text-slate-500 text-[10px]">E-Commerce VP, LuxeFord Int&apos;l</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR EXPERT SEO PROCESS BLOCK DIAGRAM */}
      <section className="py-20 bg-[#040815] border-y border-indigo-950/70 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-20 text-center select-none">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/30">OPERATIONAL SPECIFICATIONS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
              Our Systematic SEO Operational Pipeline
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              How we construct premium organic search visibility from audit parameters to continuous conversion rate audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-left font-mono text-xs text-slate-400">
            
            {/* Step 1 */}
            <div className="bg-[#0b0e20] border border-indigo-950 p-5 rounded-2xl space-y-3.5">
              <span className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange border border-brand-orange/20 flex items-center justify-center font-bold text-sm">01</span>
              <strong className="text-white uppercase block tracking-wider">SEO Audit Systems</strong>
              <p className="text-[10.5px] leading-relaxed font-sans font-normal text-left">
                Running programmatic sitemaps validation scans, checking canonical schema matches, and verifying indexing levels.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0b0e20] border border-indigo-950 p-5 rounded-2xl space-y-3.5">
              <span className="w-8 h-8 rounded-lg bg-[#ff5a1f]/10 text-[#ff5a1f] border border-[#ff5a1f]/20 flex items-center justify-center font-bold text-sm">02</span>
              <strong className="text-white uppercase block tracking-wider">Technical Fixes</strong>
              <p className="text-[10.5px] leading-relaxed font-sans font-normal text-left">
                Rebuilding redirect setups, minifying render structures, boosting localized speeds, and securing server headers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0b0e20] border border-indigo-950 p-5 rounded-2xl space-y-3.5">
              <span className="w-8 h-8 rounded-lg bg-orange-600/15 text-brand-orange border border-orange-500/10 flex items-center justify-center font-bold text-sm">03</span>
              <strong className="text-white uppercase block tracking-wider">AI SEO & GEO Setup</strong>
              <p className="text-[10.5px] leading-relaxed font-sans font-normal text-left">
                Parsing specifications into dynamic schemas arrays, ensuring mentions across global models.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#0b0e20] border border-indigo-950 p-5 rounded-2xl space-y-3.5">
              <span className="w-8 h-8 rounded-lg bg-[#ff5a1f]/10 text-brand-orange border border-[#ff5a1f]/10 flex items-center justify-center font-bold text-sm">04</span>
              <strong className="text-white uppercase block tracking-wider">Content Engine</strong>
              <p className="text-[10.5px] leading-relaxed font-sans font-normal text-left">
                Inundating search indices with custom educational comparison matrices matching buyer intentions.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#0b0e20] border border-indigo-950 p-5 rounded-2xl space-y-3.5">
              <span className="w-8 h-8 rounded-lg bg-[#090d1c] text-white border border-indigo-900 flex items-center justify-center font-bold text-sm">05</span>
              <strong className="text-white uppercase block tracking-wider">Authority Blocks</strong>
              <p className="text-[10.5px] leading-relaxed font-sans font-normal text-left">
                Compounding back-profile credibility tags through systematic industry-grade directory mentions.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-[#0b0e20] border border-indigo-950 p-5 rounded-2xl space-y-3.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-550/10 text-emerald-405 text-emerald-400 border border-emerald-500/15 flex items-center justify-center font-bold text-sm">06</span>
              <strong className="text-white uppercase block tracking-wider">Conversion Audit</strong>
              <p className="text-[10.5px] leading-relaxed font-sans font-normal text-left">
                Optimizing call-to-action designs, pricing grids, and schedules tools to keep customer acquisition costs minimal.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SCHEMA INJECTION INTERACTIVE VIEWER */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-sans text-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">STRUCTURED MARKUP</span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Google-compliant Structured Metadata Templates
            </h2>

            <p className="text-slate-350 text-sm leading-relaxed font-sans font-normal text-slate-300">
              We compile rich schema metadata into developer assets. Copy and embed this verified JSON-LD structural file above standard headers to trigger Google Rich Snippets immediately.
            </p>

            {/* Scheme toggles */}
            <div className="space-y-2 font-mono">
              <button 
                onClick={() => copySchema(schemasTemplates.service, 'service')}
                className="w-full bg-[#0b0e20] border border-indigo-950 text-slate-300 p-3.5 rounded-xl hover:border-brand-orange/30 transition flex justify-between items-center cursor-pointer"
              >
                <span>1. View Organization Service Schema</span>
                <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block">
                  {copiedKey === 'service' ? '★ Copies Code!' : 'Copy Code'}
                </span>
              </button>

              <button 
                onClick={() => copySchema(schemasTemplates.review, 'review')}
                className="w-full bg-[#0b0e20] border border-indigo-950 text-slate-300 p-3.5 rounded-xl hover:border-brand-orange/30 transition flex justify-between items-center cursor-pointer"
              >
                <span>2. View Client Star Review Schema</span>
                <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block">
                  {copiedKey === 'review' ? '★ Copies Code!' : 'Copy Code'}
                </span>
              </button>
            </div>

          </div>

          {/* Right code dashboard view */}
          <div className="lg:col-span-5">
            <div className="bg-[#02050f] border border-indigo-950 rounded-2xl overflow-hidden font-mono text-[10px]">
              
              <div className="bg-slate-950 px-4 py-2.5 border-b border-indigo-950 flex justify-between items-center text-slate-400">
                <span>structure-schema-blueprints.json</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>

              <div className="p-4 bg-slate-950/40 text-left overflow-x-auto max-h-64 text-indigo-300 leading-snug">
                <pre>{copiedKey === 'review' ? schemasTemplates.review : schemasTemplates.service}</pre>
              </div>

              <div className="bg-slate-950 p-3 border-t border-indigo-950 text-center">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black block">
                  *Structured snippet arrays mapped perfectly to JSON-LD compliance models.
                </span>
              </div>

            </div>
          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* CORE FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-20 bg-[#040815] border-y border-indigo-950/80 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center select-none">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">KNOWLEDGE COMPASS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none text-center">
              Frequently Asked Questions About SEO Results
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto text-center">
              Clear, transparent answers from our lead growth analysts regarding timeline parameters, tools configurations, and budgets.
            </p>
          </div>

          {/* Collapsible FAQ Accordion Grid layout */}
          <div className="max-w-3xl mx-auto space-y-4">
            {saasFaqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-[#0b0e20] border border-indigo-950 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-slate-900/40 transition font-bold text-sm md:text-base text-white tracking-tight cursor-pointer font-sans"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-brand-orange font-mono font-bold text-xs">Q{index + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-indigo-950/80 bg-slate-950/50"
                    >
                      <p className="p-5 text-xs md:text-sm text-slate-300 font-sans leading-relaxed text-left font-normal">
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

      {/* COMPREHENSIVE FREE AUDIT FORM REQUEST (HIGH PIPELINE CAPTURE) */}
      <section id="case-audit-form" className="py-20 max-w-7xl mx-auto px-4 text-left font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />

          {/* Form left content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest block">SECURE AUDIT PORTAL</span>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none text-left">
              Get Your Custom SEO Growth Strategy
            </h2>

            <p className="text-slate-350 text-sm leading-relaxed font-sans font-normal text-slate-350 text-left">
              Ready to construct a predictable organic client acquisition pipeline? Share your target platform details, and our senior SEO specialists will compile a direct visual audit package completely free.
            </p>

            <div className="space-y-4 font-mono text-xs text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-slate-200">Ideal-Match Keyword Opportunity Map</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-slate-200">Frictionless Onboarding Audit Sweep</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-slate-200">Compounding traffic valuation projections</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-slate-200">E-E-A-T Schema Integration blueprints list</span>
              </div>
            </div>

          </div>

          {/* Direct Interactive Form Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 md:p-8 space-y-5 font-mono shadow-2xl relative">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-indigo-950 pb-3 mb-4">
                Free SEO & AI SEO Audit Request
              </h3>

              {!auditFormSubmitted ? (
                <form onSubmit={handleAuditSubmit} className="space-y-4 text-xs font-mono text-left">
                  
                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold block uppercase text-[10px]">Company Name:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Acme Tech Solutions"
                      value={auditForm.companyName}
                      onChange={(e) => setAuditForm({ ...auditForm, companyName: e.target.value })}
                      className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold block uppercase text-[10px]">Website URL:</label>
                    <input 
                      type="url" 
                      required
                      placeholder="e.g. https://www.acmetech.com"
                      value={auditForm.websiteUrl}
                      onChange={(e) => setAuditForm({ ...auditForm, websiteUrl: e.target.value })}
                      className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold block uppercase text-[10px]">Industry:</label>
                      <select 
                        value={auditForm.industry}
                        onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                        className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-brand-orange cursor-pointer"
                      >
                        <option>SaaS</option>
                        <option>Ecommerce</option>
                        <option>Healthcare</option>
                        <option>Real Estate</option>
                        <option>Finance</option>
                        <option>Local Business</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold block uppercase text-[10px]">Target Channel:</label>
                      <select 
                        value={auditForm.channel}
                        onChange={(e) => setAuditForm({ ...auditForm, channel: e.target.value })}
                        className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-brand-orange cursor-pointer"
                      >
                        <option>SEO + AI SEO</option>
                        <option>Local Pack Domination</option>
                        <option>Ecommerce Optimization</option>
                        <option>GEO/Conversational Search</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold block uppercase text-[10px]">Work Email Address:</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. executive@acmetech.com"
                      value={auditForm.email}
                      onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold block uppercase text-[10px]">WhatsApp/Phone Number:</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +1 555-019-2831"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold block uppercase text-[10px]">Biggest Traffic/Lead Challenge:</label>
                    <textarea 
                      placeholder="e.g. low trial rates, competitor map packs taking reviews, poor mobile layout speed..."
                      value={auditForm.challenges}
                      onChange={(e) => setAuditForm({ ...auditForm, challenges: e.target.value })}
                      className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 h-20 text-slate-200 focus:outline-none focus:border-brand-orange font-sans text-xs"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#ff5a1f] text-slate-950 py-3.5 rounded-lg font-black tracking-widest hover:bg-white duration-350 transition uppercase text-xs"
                    id="submit-seo-audit-btn"
                  >
                    Generate Free SEO Audit Package
                  </button>

                  <span className="text-[9px] text-[#ff5a1f] block text-center font-mono uppercase tracking-wide">
                    ★ NDA-covered | Direct verified results guaranteed
                  </span>

                </form>
              ) : (
                <div className="py-12 text-center space-y-4 font-mono text-xs">
                  <CheckCircle2 className="w-12 h-12 text-[#ff5a1f] mx-auto animate-bounce animate-pulse" />
                  <strong className="text-white text-sm uppercase block">Audit Request Recorded!</strong>
                  <p className="text-slate-400 font-sans font-normal leading-relaxed text-left p-3 bg-slate-950 rounded-lg border border-indigo-950">
                    Thank you. A senior AKGLS Group organic growth analyst is auditing sitemaps references for <strong className="text-brand-orange">{auditForm.websiteUrl}</strong>. We will contact you at <strong className="text-brand-orange">{auditForm.email}</strong> with an optimization roadmap.
                  </p>
                  <button 
                    onClick={() => setAuditFormSubmitted(false)}
                    className="text-brand-orange underline text-xs cursor-pointer font-semibold block mx-auto pt-2"
                  >
                    Update details request
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* FINAL CALL TO ACTION (HIGH TRUST SECTION) */}
      <section className="py-20 bg-[#080d1f] border-t border-indigo-950/80 text-center font-mono">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
            Ready to Become Our Next SEO Success Story?
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans font-normal">
            We partner with ambitious startups and fast-growing enterprises to configure compounding, predictable organic values models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 select-none">
            <a 
              href="#case-audit-form"
              className="bg-brand-orange text-slate-950 font-black px-8 py-4 rounded-xl hover:bg-white duration-300 transition"
              id="final-cta-btn-1"
            >
              Start Your SEO Growth Campaign
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-950 text-slate-200 border border-indigo-950 px-8 py-4 rounded-xl hover:border-brand-orange/40 transition flex items-center justify-center space-x-2"
              id="final-cta-btn-2"
            >
              <span>Talk to Senior SEO Experts</span>
              <ArrowRight className="w-4 h-4 text-brand-orange animate-pulse" />
            </a>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 text-[10px] text-slate-500 font-extrabold uppercase">
            <span>✔ No Long-Term Locked Contracts</span>
            <span>✔ Monthly verified traffic index sheets</span>
            <span>✔ ROI-Guided operational targets</span>
          </div>

        </div>
      </section>

    </div>
  );
}

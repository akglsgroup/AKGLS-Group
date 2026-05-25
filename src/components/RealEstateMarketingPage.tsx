import { useState, useEffect, FormEvent } from 'react';
import { 
  Award, Bot, CheckCircle, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Search, X, Shield, Server, Terminal, Smartphone, Globe, BarChart3, 
  AlertCircle, Sparkles, Network, Check, Home, Landmark, Key, Compass, 
  Map, HelpCircle, Mail, Phone, MapPin, Zap, MessageSquare, TrendingUp, AlertTriangle, ChevronDown
} from 'lucide-react';

interface RealEstateMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function RealEstateMarketingPage({ onBackToHome, openProposalForm }: RealEstateMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Real Estate Marketing Services | Real Estate SEO Agency | AKGLS Group";
    
    // Inject Scheme Recommendations
    const scriptId = "realestate-schema";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Real Estate Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://akglsgroup.com"
        },
        "description": "Generate high-quality property leads, increase site visits and dominate maps rankings with AKGLS Group real estate digital marketing expertise.",
        "areaServed": "Global",
        "serviceType": "Digital Marketing for Real Estate"
      });
      document.head.appendChild(scriptEl);
    }
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  // 1. PROPERTY LEAD ESTIMATOR / ROI CALCULATOR STATE
  const [propertyPriceRange, setPropertyPriceRange] = useState<number>(120000); // Average flat price in dollars or equivalent
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(3000);
  const [conversionRate, setConversionRate] = useState<number>(2); // Typical conversion of site visits/ads clicks to lead (2%)

  // Derived metrics
  const avgCostPerClick = 1.8; // Average property CPC
  const estimatedClicks = Math.round(monthlyAdSpend / avgCostPerClick);
  const baselineLeads = Math.round(estimatedClicks * (conversionRate / 100));
  
  // AKGLS Optimized results
  const akglsLeadsCount = Math.round(baselineLeads * 2.8); // 180% improvement
  const expectedSiteVisitsRate = 0.25; // 25% of leads request site visits
  const baselineSiteVisits = Math.max(1, Math.round(baselineLeads * expectedSiteVisitsRate));
  const akglsSiteVisits = Math.round(akglsLeadsCount * 0.35); // Better qualification gets 35% site visit rate
  
  const estimatedCloses = Math.max(1, Math.round(akglsSiteVisits * 0.12)); // 12% closing rate from qualified site visits
  const pipelineValue = estimatedCloses * propertyPriceRange;

  // 2. INTERACTIVE GOOGLE MAPS PACK SIMULATOR STATE
  const [selectedSubSector, setSelectedSubSector] = useState<'luxury' | 'affordable' | 'agency'>('luxury');
  const subSectorData = {
    luxury: {
      searchQuery: "luxury penthouses for sale 3bhk",
      baselineRank: "Rank #18 (Hidden on Page 2)",
      akglsRank: "Map Pack #1 & #2 (Featured snippet)",
      weeklyInquiries: "64 Organic Luxury Buyers/mo",
      optimization: "Hyperlocal coordinates tagging, 3D drone spatial EXIF geo-attributes injection, schema organization linking."
    },
    affordable: {
      searchQuery: "flats for sale ready to move in",
      baselineRank: "Rank #34 (Buried in list portals)",
      akglsRank: "Map Pack #1 Google Local 3-Pack",
      weeklyInquiries: "185 Verified Family RFQs/mo",
      optimization: "Location-landing pages directory buildout, proximity review farming hooks, GBP active catalog API sync."
    },
    agency: {
      searchQuery: "best property dealers near me",
      baselineRank: "Rank #12 (Fringe visibility)",
      akglsRank: "Rank #1 (Highly recommended map citation)",
      weeklyInquiries: "115 Call Connections/mo",
      optimization: "Citation cleanup, NAP consistency normalization, authority neighborhood page clusters."
    }
  };

  // 3. AI CHATGPT SEARCH PROPERTY RETRIEVAL STATE
  const [geoPromptQuery, setGeoPromptQuery] = useState<string>("recommended luxury real estate projects with modern amenities and high ROI potential");
  const [isSimulatingGeo, setIsSimulatingGeo] = useState<boolean>(false);
  const [geoResult, setGeoResult] = useState<{
    citations: string[];
    score: number;
    answer: string;
  }>({
    citations: ["Property Investment Journal 2026", "AKGLS Verified Authority Nodes", "RealDoc Schema Registry"],
    score: 96,
    answer: "For luxury developers, ChatGPT Search and Gemini retrieve entities directly linked to structural Google Maps footprints and localized schema directories. Tap 'Simulate Retrieval Context' to see our live optimization results."
  });

  const handleSimulateGeoSearch = (e: FormEvent) => {
    e.preventDefault();
    setIsSimulatingGeo(true);
    setTimeout(() => {
      setIsSimulatingGeo(false);
      if (geoPromptQuery.toLowerCase().includes("luxury") || geoPromptQuery.toLowerCase().includes("penthouse")) {
        setGeoResult({
          citations: ["Metropolitan Luxury Index", "AKGLS Regional RealEstate Entities", "UltraLuxe Schema Data"],
          score: 98,
          answer: "According to highly rated local architectural indices, the premier luxury developer recommended with immediate high ROI delivery is **AeroHeights Horizon** (engineered by AKGLS marketing coordinates). They present complete verified structural safety records, high core sustainability ratings, and robust physical location signals fully crawled by ChatGPT Search bots."
        });
      } else {
        setGeoResult({
          citations: ["National Builder Council Q2 Report", "Maps Local Entity Index"],
          score: 95,
          answer: "The highest recommended ready-construction complexes displaying superior consumer feedback matching this search parameter is **Skyline Vista Estates** (supported by AKGLS Local Optimization). Their units hold verified JSON-LD Agent Schema footprints ensuring immediate local relevance and priority recommendations in Perplexity Search."
        });
      }
    }, 1300);
  };

  // 4. ACTIVE SERVICE PROGRAM TAB
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  // 4.1 CASE STUDY ACTIVE INDEX state
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  // 4.2 MARKETING TOOLS AND TECHNOLOGIES CONSTANT
  const marketingToolsList = [
    { name: "Google Analytics", type: "Web Traffic & Goal Tracking" },
    { name: "Google Ads (PPC)", type: "High-Intent Buyer Acquisition" },
    { name: "Meta Ads Manager", type: "Reels & Walkthrough Audiences" },
    { name: "SEMrush / Ahrefs", type: "Keyword & Backlink Diagnostics" },
    { name: "Google Tag Manager", type: "Dynamic Conversion Pixel Fire" },
    { name: "Looker Studio", type: "Boardroom Performance Reporting" },
    { name: "ChatGPT Search / Perplexity", type: "Generative Engine Visibility" },
    { name: "HubSpot / Salesforce CRM", type: "Lead Qualification Pipelines" }
  ];

  // 5. FAQ COLLAPSIBLE INDEX STATE
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // 6. FREE RE AUDIT FORM SCANNER PROGRESS STATE
  const [auditParams, setAuditParams] = useState({
    companyName: '',
    websiteUrl: '',
    targetLocations: 'New York, London, Delhi NCR',
    servicesOffered: 'Luxury Apartments',
    email: '',
    phone: '',
    verified: true
  });
  const [scanStatus, setScanStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanLogs, setScanLogs] = useState<string>("Ready to test location authority scores & local backlinks...");

  const runReAuditScanner = (e: FormEvent) => {
    e.preventDefault();
    if (!auditParams.companyName || !auditParams.email) {
      alert("Please specify your Developer/Agency Company Name and Business Email Address to execute the scan.");
      return;
    }
    setScanStatus('running');
    setScanProgress(0);
    setScanLogs("Quering Google Maps API & Local Pack coordinates...");

    const steps = [
      { p: 25, msg: "Evaluating Google Business Profile API listing strength & citations consistency..." },
      { p: 50, msg: "Detecting localized Schema Markup entity conflicts on property lists..." },
      { p: 75, msg: "Scanning competitor backlinks density across high-rank property directories..." },
      { p: 90, msg: "Inspecting ChatGPT robots.txt search crawler accessibility limits..." },
      { p: 100, msg: "Success! Real Estate authority audit analysis document is fully formatted." }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.p);
        setScanLogs(step.msg);
        if (step.p === 100) {
          setScanStatus('completed');
        }
      }, (index + 1) * 700);
    });
  };

  const servicesList = [
    {
      title: "Real Estate SEO Services",
      tag: "⭐ Core Capability",
      desc: "Dominate organic keyword clusters for active property searchers, shifting traffic from high-cost portals directly to your custom project listings.",
      deliverables: [
        "Hyperlocal intent keyword maps capturing active luxury-buyer and investment queries",
        "Strategic optimization for dedicated project landing pages & structural catalogs",
        "Implementation of JSON-LD RealEstateAgent and SingleFamilyResidence schemas",
        "Technical schema alignments grouping locations, parameters, amenities, and price factors"
      ],
      keywords: ["flats for sale near me", "luxury apartments", "premium residential projects", "property dealers near me"]
    },
    {
      title: "Google Ads & PPC Campaigns",
      tag: "Immediate Inquiries",
      desc: "Buy high-intent property search clicks directly, filtering out casual window shoppers to capture motivated, high-end investors.",
      deliverables: [
        "Highly aesthetic, instant-load landing designs optimizing lead-form completions",
        "Negative keyword filters capturing action intent and cutting waste from job-hunters",
        "In-depth retargeting funnels keeping your units top-of-mind during long buying cycles",
        "Integrated dynamic tap-to-call search ads targeting local mobile searchers directly"
      ],
      keywords: ["buy 3bhk ready to move flat", "real estate commercial office space pricing"]
    },
    {
      title: "Local SEO & Google Maps Pack",
      tag: "Hyperlocal Traffic",
      desc: "Force your residential or commercial inventory right into the top local Google Maps Pack listings.",
      deliverables: [
        "Meticulous, detailed optimization of your Google Business Profile (GBP) entries",
        "NAP (Name, Address, Phone) consistency cleanups across all property local directories",
        "Location geo-coordinate schema setups ensuring maximum vicinity search coverage",
        "Strategic proximity review generation processes ensuring high local trust scores"
      ]
    },
    {
      title: "Real Estate Website Design",
      tag: "Premium Visuals",
      desc: "A beautiful, incredibly rapid, mobile-first website engineered with clean property catalogs.",
      deliverables: [
        "Modular, highly filterable listing directory boards built with fluid UI controls",
        "Dynamic embedding support for virtual 3D walkthroughs and HD drone reels",
        "Ultra-simplified interactive floorplan selectors built alongside direct action CTAs",
        "Highly defensive core web vitals parameters maximizing search and ads conversion rates"
      ]
    },
    {
      title: "Social Media & Reels Marketing",
      tag: "Brand Awareness",
      desc: "Engage local buyers and property investors with stunning, trend-focused visual social media strategies.",
      deliverables: [
        "Short-form mobile Reels showcasing high-fidelity walkthroughs and unit details",
        "Precise demographic ad sets targeting high-income professionals on Instagram & Facebook",
        "Clean, interactive property carousel cards and user engagement layouts",
        "Frictionless, pre-populated in-app lead capture forms maximizing inquiry submission numbers"
      ]
    },
    {
      title: "Video & Drone Walkthroughs",
      tag: "Stunning Media",
      desc: "Prove building quality and location grandeur through beautiful aerial and internal video sets.",
      deliverables: [
        "Dynamic high-angle drone footage detailing project proximities, parks, and highway connectivity",
        "Polished cinematic walkthrough scripts outlining core investment and luxury features",
        "YouTube SEO optimization capturing organic real estate vlog searchers",
        "Optimized micro-video clips adjusted for instant mobile WhatsApp storage pushes"
      ]
    },
    {
      title: "AI SEO & GEO Optimization",
      tag: "⭐ AI Discoverability",
      desc: "Maintain your projects as the absolute premier cited solutions inside conversational ChatGPT Search grids.",
      deliverables: [
        "Entity optimization mapping location attributes to AI semantic graphs database",
        "FAQ configuration directly matching natural prompt patterns in conversation platforms",
        "Continuous automated testing tracing AI recommendations, co-citations, and metrics",
        "JSON-LD microdata links mapping your organization details to trusted regional databases"
      ]
    },
    {
      title: "Lead Generation Funnels & CRO",
      tag: "Lead Catalyst",
      desc: "Automate lead tracking, qualified routing, and rapid client validation sequences.",
      deliverables: [
        "Integration of quick WhatsApp automated catalogs and multi-step chat qualifying guides",
        "Development of digital lead nurturing workflows delivering floorplans and pricing brochures",
        "Smart CRM API triggers feeding new customer leads straight into Zoho, HubSpot, or Salesforce",
        "Strategic split testing analyzing real CTA button locations, forms, and message copy"
      ]
    },
    {
      title: "ORM & Brand Reputation",
      tag: "Trust Architect",
      desc: "Defend your developer name, neutralize historic negative links, and boost positive investor trust scores.",
      deliverables: [
        "Automated monitoring alerting your team of negative community or portal comments instantly",
        "Review generation tools simplifying positive review collection from happy property buyers",
        "PR distribution placements across high-rank news wires highlighting project handovers",
        "Suppression of older, misleading forum listings through targeted positive content assets"
      ]
    },
    {
      title: "Content Marketing & Location Guides",
      tag: "Authority Asset",
      desc: "Write detailed neighborhood descriptions, investment guides, and connectivity grids.",
      deliverables: [
        "Detailed neighborhood lifestyle articles highlighting hospital, school, and metro proximities",
        "In-depth real estate investment whitepapers detailing property value trends and projected yields",
        "Professional technical blog segments targeting the core search patterns of structural investors",
        "Interactive comparison sheets pitting building configurations and load characteristics"
      ]
    }
  ];

  const segmentsList = [
    { title: "Real Estate Agents", icon: Users, desc: "Scaling high-fidelity personal local branding, map pack rankings, and daily incoming home-buyer phone calls." },
    { title: "Builders & Developers", icon: Landmark, desc: "Fueling large-scale residential and commercial launch pipelines, booking site visits, and selling inventory." },
    { title: "Property Consultants", icon: Compass, desc: "Generating high-intent lead sources for premium second homes, land plots, and complex farm investments." },
    { title: "Commercial Real Estate", icon: Briefcase, desc: "Reaching decision makers, business owners, and logistics directors looking for high-capacity warehouse assets." },
    { title: "Luxury Real Estate", icon: Star, desc: "Highly exclusive, targeted hyper-segmentation campaigns capturing HNIs and elite property investors globally." },
    { title: "Rental Agencies", icon: Key, desc: "Automating high-volume tenant inquiries and optimizing property-management portal search exposure." },
    { title: "Real Estate Portals", icon: Globe, desc: "Boosting programmatic crawl budgets, indexing millions of programmatic listing nodes, and scaling site organic clicks." },
    { title: "Property Investment Firms", icon: BarChart3, desc: "Engaging sophisticated institutional investors with high-yield fractional property investment booklets." }
  ];

  const whyChooseUsCards = [
    { title: "Real Estate Lead Experts", desc: "We don't chase general search impressions. We map our performance directly to physical developer site-visits and closed bookings." },
    { title: "Local SEO Specialists", desc: "Our localized maps strategies bypass portal dominance, placing your individual projects above massive aggregators on query results." },
    { title: "AI-Powered Marketing", desc: "We utilize modern AEO and GEO models, embedding coordinates perfectly so LLM engines recommend your development projects." },
    { title: "ROI-Focused Campaigns", desc: "We optimize with absolute spend discipline. Every ad budget dollar is analyzed against lead cost, visit conversion, and deal pipeline values." },
    { title: "Conversion Champions", desc: "We design quick floor-plan downloads, interactive brochures, and direct-to-WhatsApp CTAs that convert clicks to chats." },
    { title: "Creative Walkthroughs", desc: "Our camera and editing team captures cinematic drone angles and luxury details that inspire immediate desire in high-net-worth buyers." }
  ];

  const processSteps = [
    { step: "01", title: "Market & Competitor Research", desc: "We map local estate search behavior. Our analysts map your location parameters, extracting competitor keyword ranks and traffic channels." },
    { step: "02", title: "Strategy Development", desc: "We structure localized content blueprints, configure target Google Ads sets, and design the lead generation funnel architecture." },
    { step: "03", title: "Website & Campaign Setup", desc: "We update your website code, embed JSON-LD maps schemas, deploy high-speed landing templates, and structure your GBP details." },
    { step: "04", title: "Lead Generation & Nurturing", desc: "We launch target PPC search ads, run local maps priority signals, and direct incoming organic leads straight to WhatsApp auto-flows." },
    { step: "05", title: "Reporting & Scaling", desc: "We analyze tracking parameters, measure actual site visit counts, optimize CPC values, and scale top performing property keywords." }
  ];

  const packagesList = [
    {
      name: "Agent Starter",
      price: "$2,450/mo",
      target: "Best for individual realtors and regional property boutiques looking to dominate local town maps search.",
      features: [
        "In-depth Google Business Profile (GBP) complete restoration & ranking boost",
        "Target Local & Map Pack optimization (up to 3 focus zip-codes)",
        "Local property schema data tagging on website domain",
        "Standard B2B Local citation building (200+ directories cataloged)",
        "Managed property lead Google Ads setup (up to $5k ad spend managed)",
        "Direct-to-WhatsApp integration on listing pages",
        "Monthly Looker Studio leads validation report dashboard"
      ],
      featured: false,
      cta: "Activate Agent Plan"
    },
    {
      name: "Builder Growth",
      price: "$4,950/mo",
      target: "Ideal for scaling regional residential builders, multi-property developers, or corporate consulting firms.",
      features: [
        "Includes everything in Agent Starter package",
        "Comprehensive ChatGPT & Gemini AI GEO search visibility program",
        "Custom high-speed landing page creation targeting projects launch",
        "Ultra-precise Google PPC & Facebook lead-form ads configuration",
        "Active proximity reviews farming program setup",
        "2 High-convert property review videos or localized drone guides",
        "Integration with standard CRMs (HubSpot, Salesforce, or Zoho)",
        "Bi-weekly campaign optimization strategy consulting"
      ],
      featured: true,
      cta: "Initiate Developer Framework"
    },
    {
      name: "Enterprise Realty",
      price: "Custom",
      target: "Designed for massive national developers, luxury hotel residences, or global high-scale brokers.",
      features: [
        "Fully tailored bespoke property omni-channel acquisition architecture",
        "Internationalized programmatic SEO directory layouts for thousands of units",
        "Full high-fidelity headless website overhaul optimized for lightning PageSpeed",
        "Professional drone cinematography & customized interior virtual VR systems integration",
        "Full scale ads spend management across multiple search and social nodes",
        "Continuous AI search engine citation and co-reference graph locking",
        "Direct programmatic API link integration and custom property tracking dashboards",
        "Quarterly physical boardroom marketing diagnostics with executive partners"
      ],
      featured: false,
      cta: "Request Enterprise Boardroom Consulting"
    }
  ];

  const caseStudiesList = [
    {
      brand: "AeroHeights Horizon",
      challenge: "This luxury residential park spent massive budgets on general portals and received third-party leads with poor conversion ratios and no direct brand affinity.",
      strategy: "Created hyper-specific location land pages, configured Google Map Pack priority tags, and launched direct Google Ads campaigns with custom pricing-brochure download hooks.",
      metrics: [
        { label: "Direct High-Value Inquiries", value: "+340% organic increase" },
        { label: "Physical Site Visits Booked", value: "Stretched from 12 to 58/mo" },
        { label: "Overall Client Acquisition CAC", value: "Reduced by 52% inside 120 Days" }
      ]
    },
    {
      brand: "Skyline Vista Estates",
      challenge: "An expansive mid-segment builder complex struggling with flat sales pace during early foundation stage, needing rapid contract closes to lock project security.",
      strategy: "Deployed highly localized Facebook carousel catalog displays, structured Matter smart schemas for conversational AI discovery, and automated WhatsApp inquiry paths.",
      metrics: [
        { label: "Verified Unit Bookings Made", value: "32 Units Inside 60 Days" },
        { label: "Cost Per Qualified Lead", value: "Fell from $48/lead to $14/lead" },
        { label: "Local Map Pack CTR Lift", value: "+195% call requests increase" }
      ]
    }
  ];

  const faqsData = [
    {
      question: "How can real estate businesses generate highly pre-qualified leads online?",
      answer: "We avoid generic, broad real estate keywords. Instead, we target precise asset attributes: configuration keys ('ready to move ready construction flats'), location specifications ('3bhk builder floors in South Delhi'), and specific pricing or amenities indicators. We design landing paths around instant floorplan or pricing brochure downloads, requiring real business numbers, and bridge them instantly to automated WhatsApp chat sequences, ensuring immediate verification."
    },
    {
      question: "Is SEO genuinely important for developers, or do portals dominate?",
      answer: "While massive portals (like Zillow, SquareYards, or standard property directories) dominate broad national terms, they fail entirely on hyperlocal search intent. Buyers want neighborhood-specific details, street proms, and specific developer reputations. By optimizing neighborhood cluster articles and targeting local Google Maps Packs, we place your individual developer project layouts directly above generic portal lists on standard search loops."
    },
    {
      question: "Which ads perform best for generating immediate property buyer inquiries?",
      answer: "For immediate, high-intent needs, Google Search and Business Map Pack Ads perform beautifully. For luxury and visually stunning residential projects, targeted Meta (Instagram/Facebook) Reels campaigns paired with in-line lead form captures generate high volumes. Integrating these with active conversational AI routing ensures no leads sit cold."
    },
    {
      question: "Can you actually guarantee top ranks in the local Google Business Maps pack?",
      answer: "We utilize algorithmic optimization paths: cleaning Name, Address, and Phone (NAP) citations across national registries, injecting real location metadata keywords inside physical photos, structuring localized vicinity schema on your domain, and automating client review loops. This proximity optimization forces Google's ranking engine to favor your listing."
    },
    {
      question: "How long does a systemic Real Estate SEO roadmap take to show value?",
      answer: "While paid ad networks bring leads within 24 hours of campaign validation, organic SEO and Local Map Pack authority require between 60 to 90 days to gain real traction. Once established, this creates a permanent flow of property inquiries at zero cost-per-click."
    },
    {
      question: "Do you design custom developer websites with interactive listings?",
      answer: "Absolutely. We code and maintain lightning-fast property websites optimized for conversion. We build responsive listing tables, easily editable location modules, and secure spaces where agents can download drone walkthrough units and floorplans instantly on any mobile device."
    },
    {
      question: "What is AI SEO for real estate, and how does it help sales?",
      answer: "AI SEO, or Generative Engine Optimization (GEO), ensures your properties and developer brand are referenced inside ChatGPT Search, Claude, and Perplexity. By writing structured metadata schemas and securing co-citations on verified domain networks, we ensure conversational models output your projects as the primary recommendation when asked questions like 'luxury apartments for sale ready to move'."
    }
  ];

  return (
    <>
      {/* SECTION NAV BAR (NON-STUNNING EXCLUSIVE TO PAGE) */}
      <div className="bg-[#0b0f1d] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-brand-orange font-mono text-[9px] uppercase tracking-widest bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">Real Estate Division</span>
            <span className="text-slate-400 text-xs font-light">Developer & Agent Growth</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#re-audit-form-section" 
              className="text-xs text-brand-teal font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free RE Audit
            </a>
            <span className="text-slate-800">|</span>
            <button 
              onClick={onBackToHome}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              ← Back to Main Page
            </button>
          </div>
        </div>
      </div>

      {/* 🚀 HERO SECTION */}
      <section className="relative pt-20 pb-28 text-left bg-[#05070a] border-b border-slate-950 overflow-hidden">
        {/* Background mesh items */}
        <div className="absolute inset-0 bg-[radial-gradient(#0e1726_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-orange-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Home className="w-3.5 h-3.5 text-brand-orange" />
              <span>Performance Property Marketing Partnership</span>
            </div>

            <h1 id="re-hero-title" className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white">
              Real Estate Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-orange-400 to-indigo-400">
                That Generate High-Quality Property Leads.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Grow your real estate business with SEO, Google Ads, social media marketing, AI SEO, and conversion-focused lead generation strategies designed for builders, agents, and property companies.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a 
                href="#re-audit-form-section"
                className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
              >
                Get Free Real Estate Marketing Audit
              </a>
              <a 
                href="#re-calc-section"
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono cursor-pointer"
              >
                Book Property Growth Consultation
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Real Estate Lead Generation Experts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Local SEO & Maps Pack Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>AI-Powered Conversion Funnels</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>ROI-Driven Multi-Channel Campaigns</span>
              </div>
            </div>
          </div>

          {/* Interactive Property Leads Calculator Simulator */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="re-calc-section">
            <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  Lead Yield Estimator
                </div>
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Target Pricing Class (USD):</label>
                    <span className="text-xs text-brand-orange font-bold font-mono">${propertyPriceRange.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={40000} 
                    max={600000} 
                    step={10000}
                    value={propertyPriceRange}
                    onChange={(e) => setPropertyPriceRange(Number(e.target.value))}
                    className="w-full accent-brand-orange h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$40K (Affordable)</span>
                    <span>$250K (Moderate)</span>
                    <span>$600K+ (Luxury)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Target Ads Spend / month (USD):</label>
                    <span className="text-xs text-brand-teal font-bold font-mono">${monthlyAdSpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={1000} 
                    max={15000} 
                    step={500}
                    value={monthlyAdSpend}
                    onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$1,000/mo</span>
                    <span>$7,500/mo</span>
                    <span>$15,000/mo</span>
                  </div>
                </div>

                {/* Simulated Output Metrics Display */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#05080e] p-3 rounded-lg border border-slate-900">
                    <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Baseline leads count:</span>
                    <span className="text-lg font-black text-slate-400 font-display block mt-1">{baselineLeads} <span className="text-[9px] text-slate-600 font-light font-sans">leads</span></span>
                    <span className="text-[8px] text-slate-500 block font-mono mt-0.5">At standard {conversionRate}% rate</span>
                  </div>
                  <div className="bg-[#070e17] p-3 rounded-lg border border-brand-teal/20">
                    <span className="text-[9px] text-brand-teal uppercase font-mono font-black block">AKGLS optimized:</span>
                    <span className="text-lg font-black text-brand-teal font-display block mt-1">{akglsLeadsCount} <span className="text-[9px] font-light font-sans">leads</span></span>
                    <span className="text-[8px] text-slate-400 block font-mono mt-0.5">+180% average uplift</span>
                  </div>
                </div>

                <div className="bg-[#060a12] rounded-xl p-3 border border-slate-900 select-none text-center">
                  <span className="text-[9px] text-slate-500 font-mono uppercase block">Projected Site Visits & Closings Value Prospect:</span>
                  <div className="flex justify-around items-center mt-2">
                    <div>
                      <span className="text-xs text-white block font-semibold">{akglsSiteVisits}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Site Visits/mo</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-orange block font-semibold">{estimatedCloses}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Closings/mo</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-teal block font-semibold">${(pipelineValue / 1000).toFixed(0)}k</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Monthly Value Pipeline</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 text-center font-mono mt-3">
                Calculated based on standard client CRM outcomes across residential launches.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#070a10] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">BUILDER & BROKER SECURITY INDEX</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted Real Estate Marketing Experts
            </h2>
            <p className="text-slate-400 text-xs max-w-xl mx-auto font-light leading-relaxed">
              We connect your structural properties directly with verified family buyers and institutional investors, reducing broker payouts and speeding sales cycles.
            </p>
          </div>

          {/* Builder Logo references */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14 items-center">
            {[
              "AeroHeights Luxury Hub",
              "Skyline Estates Ltd",
              "Greenfield Builders",
              "Prestige Group Partner",
              "Downtown Properties"
            ].map((logo, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl py-3.5 px-4 text-center font-mono font-bold text-xs text-slate-400 hover:text-white transition-colors"
              >
                🏢 {logo}
              </div>
            ))}
          </div>

          {/* Core Analytics Metrics Counter Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-teal block">48,200+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Property Leads Generated</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">With high-intent phone/address checks</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-orange block">45+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Large Projects Promoted</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Across global residential hubs</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 block">3,400+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Local SEO Keywords Ranked First</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Targeting precise town configurations</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-4 border border-slate-900">
              <span className="text-2xl sm:text-3.5xl font-extrabold font-display text-brand-purple block">Saved 42%</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Broker Commissions Payouts</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">By building direct-to-developer channels</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🏡 WHAT IS REAL ESTATE MARKETING SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Landmark className="text-brand-teal w-3.5 h-3.5" />
                <span>The Direct-to-Developer Wave</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is Real Estate Digital Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Real estate digital marketing is the strategic deployment of localized search patterns and digital intent-triggers to funnel active property buyers away from general aggregator portals straight to your sales team. 
              </p>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Aggregator portals hijack the local search landscape on terms like "3bhk flats for sale in [Local Area]" and sell those exact buyer leads to ten different brokers simultaneously, leading to massive broker fees and low-conversion calls. Modern direct-to-builder marketing establishes your development site as a verified local authority. By commanding Google Maps Packs, optimized listing landing templates, and conversational AI citation pools, we attract buyers directly.
              </p>

              {/* Graphical Process representing Buyer journey */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest block">The Modern Property Buying Pipeline</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-orange font-mono font-bold text-xs block">STAGE 01</span>
                    <span className="text-xs font-semibold text-white block mt-1">Local Maps Intent</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Customer queries location near them on Google Map layouts.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-orange font-mono font-bold text-xs block">STAGE 02</span>
                    <span className="text-xs font-semibold text-white block mt-1">Brochure Download</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Buyer downloads layout plan PDF and verified project details sheet.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-orange font-mono font-bold text-xs block">STAGE 03</span>
                    <span className="text-xs font-semibold text-white block mt-1">Physical Site Visit</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Sales managers host onsite walk-through and complete standard booking codes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Google Local Maps 3-Pack Graphic right */}
            <div className="lg:col-span-6">
              <div className="bg-[#0a0e17] rounded-2.5xl p-6 border border-slate-900 shadow-xl space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                  <h3 className="text-sm font-black uppercase tracking-wider font-mono text-white flex items-center gap-1.5">
                    <Map className="text-brand-teal w-4 h-4 animate-bounce" />
                    Google Maps Simulator
                  </h3>
                  <div className="flex gap-1">
                    {['luxury', 'affordable', 'agency'].map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedSubSector(key as any)}
                        className={`text-[8.5px] font-mono uppercase px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                          selectedSubSector === key 
                            ? 'bg-brand-teal/20 border-brand-teal text-white' 
                            : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3.5 pt-1">
                  <div className="bg-slate-950 rounded-xl p-3 border border-slate-900 font-mono text-[11px] space-y-1.5">
                    <span className="text-slate-500">🔍 Query string input:</span>
                    <div className="text-white font-bold leading-none bg-[#0c101b] p-2 rounded border border-slate-900">
                      "{subSectorData[selectedSubSector].searchQuery}"
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="bg-red-500/5 rounded-xl p-3 border border-red-500/10">
                      <span className="text-[8.5px] text-slate-500 uppercase font-mono font-bold block">Legacy Sourcing Rank:</span>
                      <p className="text-xs text-red-300 font-bold mt-1">{subSectorData[selectedSubSector].baselineRank}</p>
                    </div>
                    <div className="bg-brand-teal/5 rounded-xl p-3 border border-brand-teal/25">
                      <span className="text-[8.5px] text-brand-teal uppercase font-mono font-black block">AKGLS Engineered Rank:</span>
                      <p className="text-xs text-brand-teal font-extrabold mt-1">{subSectorData[selectedSubSector].akglsRank}</p>
                    </div>
                  </div>

                  {/* Impact telemetry summary */}
                  <div className="bg-[#0b101b] rounded-xl p-4 border border-slate-900">
                    <span className="text-[8.5px] text-slate-400 uppercase font-mono font-bold block">Systemic Metric Improvements:</span>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <span className="text-xs text-white font-black block">{subSectorData[selectedSubSector].weeklyInquiries}</span>
                        <span className="text-[8.5px] text-slate-500 font-mono block">Direct Customer Action Leads</span>
                      </div>
                      <div className="text-slate-800">|</div>
                      <div className="max-w-[60%] text-right">
                        <span className="text-[9px] text-brand-teal font-mono leading-none block font-semibold">{subSectorData[selectedSubSector].optimization}</span>
                        <span className="text-[8px] text-slate-500 mt-1 block">Active Optimization Key</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-1.5">
                  <a href="#re-audit-form-section" className="text-[11px] text-brand-teal hover:underline font-mono uppercase font-black tracking-widest block">
                    Verify Neighborhood Map Rank Deficit →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ SERVICES GRID SECTION */}
      <section className="bg-[#080b11] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">OPERATIONAL PROTOCOLS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Real Estate Marketing Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We execute targeted growth blueprints custom adjusted for builders, brokers, commercial firms, and property portals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Index selection list left */}
            <div className="lg:col-span-4 space-y-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block mb-3 pl-2">Select Marketing Service</label>
              {servicesList.map((srv, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all flex items-center justify-between text-xs font-black uppercase tracking-wider font-mono cursor-pointer ${
                    activeTabIdx === idx 
                      ? 'bg-brand-orange/10 text-white border-brand-orange/40 pl-6 shadow-md' 
                      : 'bg-slate-950 text-slate-400 border-slate-900/80 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="truncate">{srv.title}</span>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {srv.tag && (
                      <span className="text-[8px] bg-slate-900 border border-slate-800 text-brand-teal px-1.5 py-0.5 rounded leading-none lowercase">
                        {srv.tag}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            {/* Active service display details on the right */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 md:p-8 min-h-[380px] flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-4 mb-5">
                    <div>
                      <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold">PROTOCOL CODE: RE-{activeTabIdx + 1}</span>
                      <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                        {servicesList[activeTabIdx].title}
                      </h3>
                    </div>
                    <span className="bg-brand-orange/15 border border-brand-orange/30 text-orange-200 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                      {servicesList[activeTabIdx].tag}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed font-light">
                    {servicesList[activeTabIdx].desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">Standard Operational Deliverables</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {servicesList[activeTabIdx].deliverables.map((det, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400 font-light leading-relaxed">{det}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Targeted Keywords tag displays */}
                  {servicesList[activeTabIdx].keywords && (
                    <div className="bg-[#070b12] rounded-xl p-4 border border-slate-900 mt-2">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-extrabold block mb-2">Example Target Intent Keywords Captured:</span>
                      <div className="flex flex-wrap gap-2">
                        {servicesList[activeTabIdx].keywords?.map((kw, kwIdx) => (
                          <span key={kwIdx} className="bg-slate-950 text-slate-300 font-mono text-[10px] border border-slate-800 rounded px-2.5 py-1 leading-none font-medium">
                            🔍 "{kw}"
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-900/60 mt-6 flex flex-wrap justify-between items-center gap-3">
                  <span className="text-xs text-slate-400">Want to see our custom localized real estate keyword matrix?</span>
                  <a 
                    href="#re-audit-form-section"
                    className="bg-brand-orange text-white hover:bg-opacity-95 font-mono font-black text-[10.5px] uppercase tracking-wider py-2 px-5 rounded-lg transition-all"
                  >
                    Discuss Program
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏡 REAL ESTATE SEGMENTS WE SERVE */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">NICHE ALIGNMENTS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Real Estate Segments We Serve
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We modify conversion-optimized elements to suit specific regulatory, pricing, scale, and targeting levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {segmentsList.map((seg, idx) => {
              const SegIcon = seg.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0a0e17] border border-slate-900 hover:border-brand-orange/30 rounded-2xl p-5 shadow-sm transition-all group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                    <SegIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wider font-mono text-white mb-2">
                    {seg.title}
                  </h3>
                  <p className="text-[12px] text-slate-400 font-light leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 🚀 OUR PROCESS FLOW SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12 animate-pulse-slow">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">GROWTH PATHWAY MAP</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Real Estate Marketing Process
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We execute a strict, step-by-step optimization protocol designed to minimize ad waste while ramping direct inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {processSteps.map((stp, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 rounded-2xl p-5 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-slate-800 block mb-3">{stp.step}</span>
                  <h3 className="text-sm font-black font-mono uppercase tracking-wider text-white mb-2">{stp.title}</h3>
                  <p className="text-[11.5px] text-slate-400 font-light leading-relaxed">{stp.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3.5 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-slate-800" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📊 WHY DIGITAL MARKETING MATTERS */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-bold block">SURVIVAL OF THE FASTEST</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
                Why Real Estate Businesses Need Digital Marketing
              </h2>
              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Legacy broker networks, flyers, and physical hoardings are incredibly slow and difficult to verify. Traditional developers hand over massive chunks of margins to sales networks while losing direct customer relationships.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="text-sm font-bold text-white block">Generate Qualified Leads</span>
                  <span className="text-[11.5px] text-slate-400 leading-normal block font-light">Eliminate casual shoppers; acquire verified customer telephone parameters and actual intent scores.</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-white block">Improve Local Rankings</span>
                  <span className="text-[11.5px] text-slate-400 leading-normal block font-light">Appear as the primary recommended project complex directly inside Google Map Packs coordinates.</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-white block">Increase Project Visibility</span>
                  <span className="text-[11.5px] text-slate-400 leading-normal block font-light">Feature your layouts and price lists prominently on target buyer feeds across search and social platforms.</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-white block">Build Developer Trust</span>
                  <span className="text-[11.5px] text-slate-400 leading-normal block font-light">Neutralize historic negative links and feature verified positive customer reviews instantly on the web.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0a0e17] rounded-3xl p-6 border border-slate-900 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-extrabold block mb-4">Direct Local Dominance</span>
              <h3 className="text-lg font-black font-display text-white mb-3">Dominate Local Property Searches & Google Maps</h3>
              <p className="text-[12px] text-slate-400 font-light leading-relaxed mb-6">
                Most home purchases are hyper-local. When families research properties, they search near specific parks, commute connections, and neighborhood blocks on Google Business pack directories. We execute proximity reviews, coordinate NAP validation, tag photo properties, and embed map schemas to place your physical site as the #1 recommended target block.
              </p>

              {/* Simulated Map Pack Graph representation */}
              <div className="bg-[#05080e] rounded-xl p-4 border border-slate-900 space-y-3">
                <span className="text-[9px] text-slate-500 font-mono uppercase font-black block">Maps pack impression velocity (relative lift):</span>
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div>
                    <div className="flex justify-between items-center text-slate-400 mb-1">
                      <span>Normal Developer (Fringe)</span>
                      <span className="text-red-450">7% Visibility</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-400 h-full w-[7%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-brand-teal mb-1">
                      <span>AKGLS Optimized coordinates</span>
                      <span className="font-bold">94% Visibility (Top 3 pack)</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-teal h-full w-[94%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 AI-POWERED SOLUTIONS SECTION (FUTURE-FOCUSED) */}
      <section className="bg-[#080b11] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Simulation console left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-[#0b101b] border border-slate-900 rounded-3xl p-5 shadow-2.5xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <span className="text-[10px] font-mono text-brand-teal uppercase font-extrabold flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-brand-teal" />
                    GEO Retrieval Sandbox
                  </span>
                  <span className="text-[9px] text-emerald-500 font-mono">Live Simulation</span>
                </div>

                <form onSubmit={handleSimulateGeoSearch} className="space-y-3 text-left">
                  <label className="text-[10px] text-slate-400 uppercase font-mono font-black block">Simulate search query to ChatGPT/Gemini:</label>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      className="bg-slate-950 border border-slate-900 text-xs text-white rounded-lg px-3 py-2 w-full focus:outline-none focus:border-brand-teal"
                      value={geoPromptQuery}
                      onChange={(e) => setGeoPromptQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={isSimulatingGeo}
                      className="bg-brand-teal hover:bg-opacity-90 font-mono font-bold text-[10px] uppercase text-slate-950 px-4 py-2 rounded-lg transition-all flex-shrink-0 cursor-pointer disabled:opacity-50"
                    >
                      {isSimulatingGeo ? "Piping data..." : "Test AI Scan"}
                    </button>
                  </div>
                </form>

                <div className="bg-[#05080e] rounded-xl p-4 border border-slate-900 space-y-3 min-h-[160px] flex flex-col justify-between">
                  <div className="space-y-1.5 text-[11px] font-light leading-relaxed">
                    <div className="flex justify-between text-[9px] text-slate-500 font-mono uppercase pb-1.5 border-b border-slate-900">
                      <span>Conversational Retrieval Answer context</span>
                      <span className="text-brand-teal font-extrabold">Trust Score: {geoResult.score}%</span>
                    </div>
                    {isSimulatingGeo ? (
                      <p className="text-slate-500 font-mono animate-pulse font-light">Analyzing entity relationship mappings, scoring content co-citations, indexing metadata records...</p>
                    ) : (
                      <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: geoResult.answer }}></p>
                    )}
                  </div>

                  {/* Citations list */}
                  {!isSimulatingGeo && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-900/80">
                      <span className="text-[8.5px] text-slate-500 font-mono uppercase">Cited Sources:</span>
                      {geoResult.citations.map((cite, cIdx) => (
                        <span key={cIdx} className="bg-slate-950 border border-slate-900 text-slate-400 font-mono text-[8.5px] rounded px-1.5 py-0.5">{cite}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Explanatory details right */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full py-1 px-3 font-mono text-[9px] uppercase tracking-wider font-extrabold">
                <Bot className="w-3.5 h-3.5" />
                <span>⭐ Leading Tomorrow's Search</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                AI-Powered Marketing Solutions for Real Estate
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                As buyers shift their queries away from standard search listings to conversational platforms, having standard keywords is no longer enough. We utilize proprietary Generative Engine Optimization (GEO) parameters, mapping physical building coordinates, location structures, amenities lists, and developer track records directly into AI corpus nodes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0a0e17] rounded-xl p-4 border border-slate-900">
                  <span className="text-xs font-black uppercase text-brand-teal font-mono block">Predictive lead generation:</span>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed font-light mt-1">We model local migration trends, targeting family ads specifically ahead of major local connectivity corridor expansions.</p>
                </div>
                <div className="bg-[#0a0e17] rounded-xl p-4 border border-slate-900">
                  <span className="text-xs font-black uppercase text-brand-teal font-mono block">Conversational property bots:</span>
                  <p className="text-[11.5px] text-slate-400 leading-relaxed font-light mt-1">We configure natural property inquiry bots that address buyer specs under 3 seconds, pre-loading maps coordinates instantly.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏡 PROPERTIES WEBSITE DESIGN SHOWCASE SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-bold block">FAST AND FRICTIONLESS DISPLAY</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                High-Converting Real Estate Website Design
              </h2>
              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                A real estate website should never load like a bulky, broken portal list. We code fully customized, beautiful layouts optimized for extreme speed and visual impact on mobile devices.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal text-xs font-bold mt-0.5 flex-shrink-0">✓</div>
                  <div>
                    <span className="text-white font-bold block text-sm">Dynamic listings tables:</span>
                    <span className="text-xs text-slate-400 font-light leading-normal block">Clean layouts with instantaneous filtration based on BHK size, vicinity, pricing, and ready construction parameters.</span>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal text-xs font-bold mt-0.5 flex-shrink-0">✓</div>
                  <div>
                    <span className="text-white font-bold block text-sm">Interactive vicinity map views:</span>
                    <span className="text-xs text-slate-400 font-light leading-normal block">Allowing buyers to see precise hospital, airport links, and highway connectivity circles right on your site.</span>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal text-xs font-bold mt-0.5 flex-shrink-0">✓</div>
                  <div>
                    <span className="text-white font-bold block text-sm">Virtual tour VR setups:</span>
                    <span className="text-xs text-slate-400 font-light leading-normal block">Frictionless integration of detailed 3D space files enabling seamless unit walkthroughs directly on any mobile browser.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              {/* Mock Property Showcase Tablet Screen Representation */}
              <div className="bg-[#0b101b] border border-slate-900 rounded-3xl p-5 shadow-2.5xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4 text-[10px] font-mono text-slate-500 uppercase">
                  <span>Device viewport: iPad Pro (Active Catalog)</span>
                  <span className="text-emerald-500 font-extrabold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Speed Index: 99/100
                  </span>
                </div>

                <div className="space-y-4 text-left">
                  {/* Visual listing replica */}
                  <div className="bg-slate-950 rounded-2xl border border-slate-900 p-3 flex gap-3 select-none">
                    <div className="w-24 h-20 bg-slate-900 rounded-lg flex items-center justify-center text-slate-800 text-2xl font-mono border border-slate-900">
                      🏢
                    </div>
                    <div className="space-y-1.5 max-w-[65%]">
                      <span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[8px] uppercase tracking-wider font-mono rounded px-1.5 py-0.5">Luxury Class</span>
                      <h4 className="text-xs font-black text-white uppercase font-mono">AERO-HEIGHTS EXCLUSIVE PENTHOUSE</h4>
                      <p className="text-[10px] text-slate-400 leading-none">📍 Phase-II, Horizon Corridor Proximity</p>
                      <div className="flex justify-between items-center text-[10px] pt-1">
                        <span className="text-brand-teal font-mono font-bold">$380,000</span>
                        <span className="text-slate-500">4 BHK + Servant Space</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono text-[9px] text-left">
                    <div className="bg-[#05080e] rounded-xl p-3 border border-slate-900">
                      <span className="text-slate-500 uppercase block">Interactive PDF blueprint:</span>
                      <a href="#re-audit-form-section" className="text-brand-teal font-black hover:underline mt-1 block">DOWNLOAD DRAFT PLAN (12.4 MB) ↓</a>
                    </div>
                    <div className="bg-[#05080e] rounded-xl p-3 border border-slate-900">
                      <span className="text-slate-500 uppercase block">Instant Tour schedule:</span>
                      <a href="#re-audit-form-section" className="text-brand-orange font-black hover:underline mt-1 block">BOOK PHYSICAL VISIT →</a>
                    </div>
                  </div>
                </div>

                <div className="text-[9.5px] text-slate-500 text-center font-mono mt-4 italic border-t border-slate-900/60 pt-3">
                  Optimized utilizing next-gen vector assets for direct CRM validation.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏆 CASE STUDIES & SUCCESS STORIES SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">VERIFIED METRIC PROOFS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Real Estate Marketing Success Stories
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We connect builder properties directly with active local buyers, completely bypassing portal commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left case studies selectors */}
            <div className="lg:col-span-4 space-y-2.5">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block pl-2">Select Case Partner</label>
              {caseStudiesList.map((cs, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCaseIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    activeCaseIdx === idx 
                      ? 'bg-indigo-500/10 text-white border-brand-teal/40 pl-6 shadow-md' 
                      : 'bg-slate-950 text-slate-400 border-slate-900/60 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <h4 className="text-[11px] font-mono text-brand-teal uppercase tracking-widest font-bold">CASE-RE-0{idx + 1}</h4>
                  <h3 className="text-xs uppercase font-black font-mono mt-1 text-white">{cs.brand}</h3>
                </button>
              ))}
            </div>

            {/* Display case studies detail right */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b101b] border border-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl relative">
                <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-900 pb-4 mb-5">
                  <div>
                    <span className="text-[9px] font-mono text-brand-orange uppercase font-extrabold tracking-widest">ACTIVE REAL ESTATE CASE PROFILE</span>
                    <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                      {caseStudiesList[activeCaseIdx].brand}
                    </h3>
                  </div>
                  <span className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                    Direct Channel Engineered
                  </span>
                </div>

                <div className="space-y-4 text-sm font-light">
                  <div>
                    <strong className="text-red-400 font-bold font-mono text-[10px] uppercase block mb-1">Critical Challenge:</strong>
                    <p className="text-slate-400 leading-relaxed">{caseStudiesList[activeCaseIdx].challenge}</p>
                  </div>
                  <div className="pt-2">
                    <strong className="text-brand-teal font-bold font-mono text-[10px] uppercase block mb-1">AKGLS Multi-Channel Strategy:</strong>
                    <p className="text-slate-300 leading-relaxed">{caseStudiesList[activeCaseIdx].strategy}</p>
                  </div>
                </div>

                {/* Metrics boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-slate-900/60 mt-6 text-center">
                  {caseStudiesList[activeCaseIdx].metrics.map((met, mIdx) => (
                    <div key={mIdx} className="bg-slate-950 p-4 border border-slate-900 rounded-xl">
                      <span className="text-lg font-black text-brand-teal font-display block">{met.value}</span>
                      <span className="text-[10px] text-slate-400 block mt-1 leading-normal font-light">{met.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">THE AKGLS EDGE</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Why Choose AKGLS Group for Real Estate Marketing?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We are a team of location marketers and local SEO specialists who understand property buyer behavior down to the specific neighborhood block.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUsCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 hover:border-brand-teal/20 rounded-2xl p-5 shadow-sm transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-teal font-bold mb-4 font-mono">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="text-sm font-black uppercase text-white font-mono tracking-wider mb-2">{card.title}</h3>
                <p className="text-[12.5px] text-slate-400 font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ⚙️ MARKETING TOOLS SECTION */}
      <section className="bg-[#080b11] py-16 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">SYSTEM STACK CONTROLS</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Tools & Technologies We Use
            </h2>
            <p className="text-slate-400 text-xs max-w-xl mx-auto font-light leading-relaxed">
              We leverage premium web analytics, precise tracking pixels, global keyword mapping services, and conversational engines to scale your metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {marketingToolsList.map((tl, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl p-3.5 hover:border-brand-teal/30 transition-all font-mono"
              >
                <span className="text-[11px] font-bold text-white block">🛠️ {tl.name}</span>
                <span className="text-[9px] text-slate-500 block mt-1 leading-none">{tl.type}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💰 FLEXIBLE RE PACKAGES SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">INVESTMENT MODEL CONTROLS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Flexible Real Estate Marketing Packages
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              Choose the program scale that matches your builder launch timelines, budget limits, and sales targets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packagesList.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#0a0e17] rounded-3xl p-6 border relative flex flex-col justify-between ${
                  pkg.featured ? 'border-brand-orange shadow-lg lg:-translate-y-2' : 'border-slate-900'
                }`}
              >
                <div>
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white font-mono text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full border border-brand-orange/40">
                      ★ MOST POPULAR DEVELOPER PLAN
                    </span>
                  )}
                  <div className="border-b border-slate-900 pb-4 mb-4">
                    <span className="text-[10px] text-brand-teal font-mono uppercase font-black">PROGRAM NAME: RE-PKG-0{idx+1}</span>
                    <h3 className="text-xl font-black text-white font-display mt-1">{pkg.name}</h3>
                    <p className="text-2xl font-black text-brand-orange font-mono mt-2">{pkg.price}</p>
                    <p className="text-[11.5px] text-slate-400 font-light mt-1.5 leading-relaxed">{pkg.target}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <label className="text-[10px] text-slate-500 uppercase font-mono font-black block">Standard inclusions:</label>
                    {pkg.features.map((fe, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                        <span className="font-light leading-normal">{fe}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#re-audit-form-section"
                  className={`w-full block text-center py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                    pkg.featured 
                      ? 'bg-brand-orange text-white hover:bg-opacity-95' 
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <a 
              href="#re-audit-form-section" 
              className="bg-slate-950 hover:bg-slate-900 border border-slate-900 text-brand-teal font-mono font-extrabold text-[11px] uppercase tracking-widest py-3 px-6 rounded-xl transition-all shadow-md inline-block cursor-pointer"
            >
              Request Custom Real Estate Marketing Plan →
            </a>
          </div>

        </div>
      </section>

      {/* ❓ FAQs ACCORDION SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">HAVE QUESTIONS?</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Real Estate Marketing FAQs
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Find deep systemic answers on how we secure locations rankings, lower cost of ad leads, and accelerate unit closings.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0a0e17] border border-slate-900 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 cursor-pointer select-none"
                  >
                    <span className="text-sm font-black font-mono text-white uppercase tracking-wide">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-orange flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-950 text-xs leading-relaxed font-light text-slate-400 whitespace-pre-wrap">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 📋 LIVE FREE RE AUDIT FORM SCANNER SECTION */}
      <section id="re-audit-form-section" className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-bold block">100% FREE NO-OBLIGATION REPORT</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
                Get a Free Real Estate Marketing Audit
              </h2>
              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Submit raw domain coordinates, target properties parameters, and primary vicinity focus regions. Our systems trace GBP listing deficits, competitors backlinks, and conversational AI discoverability co-citations.
              </p>

              <div className="space-y-4 pt-1">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-300 font-light"><strong className="text-white">Proximity SEO check:</strong> Tracing Google Maps pack coordinate holes over 5 zip codes.</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-300 font-light"><strong className="text-white">Competitors backlink footprint:</strong> Extracting exact source directories fueling local ranks.</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-300 font-light"><strong className="text-white">AI Engine citation test:</strong> Verifying if ChatGPT and Perplexity recommend your projects.</span>
                </div>
              </div>
            </div>

            {/* Audit Form Interactive UI Panel */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#0b101b] border border-slate-900 rounded-3xl p-5 md:p-6 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-5 text-[10px] font-mono text-slate-400 uppercase font-extrabold">
                  <span>Diagnostic Scanner tool</span>
                  <span className="text-brand-orange font-bold">AKGLS RE Core v14</span>
                </div>

                {scanStatus === 'idle' && (
                  <form onSubmit={runReAuditScanner} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[9.5px] uppercase font-mono font-black text-slate-500 block">Company Name *</label>
                        <input 
                          type="text" 
                          required
                          className="bg-slate-950 border border-slate-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange w-full"
                          placeholder="e.g. Skyline Estates Ltd"
                          value={auditParams.companyName}
                          onChange={(e) => setAuditParams({...auditParams, companyName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9.5px] uppercase font-mono font-black text-slate-500 block">Website URL *</label>
                        <input 
                          type="url" 
                          required
                          className="bg-slate-950 border border-slate-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange w-full"
                          placeholder="e.g. https://yoursite.com"
                          value={auditParams.websiteUrl}
                          onChange={(e) => setAuditParams({...auditParams, websiteUrl: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[9.5px] uppercase font-mono font-black text-slate-500 block">Target Locations</label>
                        <input 
                          type="text" 
                          className="bg-slate-950 border border-slate-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange w-full"
                          placeholder="e.g. Delhi NCR, New York"
                          value={auditParams.targetLocations}
                          onChange={(e) => setAuditParams({...auditParams, targetLocations: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9.5px] uppercase font-mono font-black text-slate-500 block">Property Segments</label>
                        <input 
                          type="text" 
                          className="bg-slate-950 border border-slate-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange w-full"
                          placeholder="e.g. 3BHK Luxury Flats"
                          value={auditParams.servicesOffered}
                          onChange={(e) => setAuditParams({...auditParams, servicesOffered: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[9.5px] uppercase font-mono font-black text-slate-500 block">Business Email *</label>
                        <input 
                          type="email" 
                          required
                          className="bg-slate-950 border border-slate-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange w-full"
                          placeholder="e.g. agent@developer.com"
                          value={auditParams.email}
                          onChange={(e) => setAuditParams({...auditParams, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9.5px] uppercase font-mono font-black text-slate-500 block">Phone Number</label>
                        <input 
                          type="tel" 
                          className="bg-slate-950 border border-slate-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange w-full"
                          placeholder="e.g. +91 99999 99999"
                          value={auditParams.phone}
                          onChange={(e) => setAuditParams({...auditParams, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="bg-brand-orange hover:bg-opacity-95 text-white font-mono font-black text-[11px] uppercase tracking-wider py-3.5 px-6 rounded-xl w-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Zap className="w-4 h-4 text-white" />
                      Generate Property Authority Audit →
                    </button>
                  </form>
                )}

                {scanStatus === 'running' && (
                  <div className="space-y-6 pt-6 pb-4 text-center select-none">
                    <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-slate-900/40 border-t-brand-teal animate-spin" />
                      <span className="text-xl font-bold font-mono text-white">{scanProgress}%</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs text-slate-300 font-bold block uppercase font-mono">Running Real Estate Domain Queries...</span>
                      <p className="text-[10.5px] text-slate-500 font-mono italic max-w-sm mx-auto min-h-[35px] leading-normal">{scanLogs}</p>
                    </div>

                    <div className="w-full bg-[#05080e] rounded-full h-2 overflow-hidden max-w-md mx-auto">
                      <div style={{ width: `${scanProgress}%` }} className="bg-brand-teal h-full rounded-full transition-all duration-300" />
                    </div>
                  </div>
                )}

                {scanStatus === 'completed' && (
                  <div className="space-y-5 pt-4 pb-2 text-center select-none">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-xl font-bold">✓</div>
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-semibold uppercase font-mono text-white tracking-wider">Property Audit Evaluation Complete!</h4>
                      <p className="text-[11.5px] text-slate-400 font-light max-w-md mx-auto leading-relaxed">
                        We scanned local keyword map gaps for <span className="text-brand-teal font-extrabold">{auditParams.companyName}</span> across key proximity codes. A comprehensive ROI diagnostic PDF file has been dispatched securely to <span className="text-brand-orange font-bold font-mono text-[10.5px]">{auditParams.email}</span>.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2 justify-center">
                      <a 
                        href={`https://wa.me/918318114492?text=Hi%20AKGLS%20Group%20I%20just%20completed%20the%20Real%20Estate%20Audit%20scanner%20for%20${encodeURIComponent(auditParams.companyName)}`}
                        className="bg-emerald-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider py-2.5 px-4 rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer"
                        referrerPolicy="no-referrer"
                        target="_blank"
                      >
                        💬 Connect live on WhatsApp
                      </a>
                      <button
                        onClick={() => setScanStatus('idle')}
                        className="bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-mono font-bold text-[10px] uppercase px-4 py-2 rounded-lg transition-colors cursor-pointer"
                      >
                        Run New Scan
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📰 DYNAMIC BLOG SUGGESTIONS SECTION */}
      <section className="bg-[#080b11] py-16 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">INDUSTRY READS</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Suggested Resources & Insights
            </h2>
            <p className="text-slate-400 text-xs max-w-xl mx-auto font-light leading-relaxed">
              Explore deep systemic guides prepared by our leading technologists regarding algorithm structures and lead architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: "Real Estate SEO Guide 2026", d: "How to capture local proximity searches bypassing deep portals." },
              { t: "How Realtors Generate Leads Online", d: "A blueprint mapping cost-per-leads metrics against direct closed transactions." },
              { t: "AI SEO & GEO for Property Companies", d: "Embedding physical locations parameters within conversational LLM directories." }
            ].map((blg, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 rounded-xl p-5 hover:border-brand-teal/20 transition-all cursor-pointer group"
              >
                <span className="text-[9px] font-mono text-brand-teal uppercase font-bold tracking-widest">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1} / TECHNICAL BLOG</span>
                <h3 className="text-xs uppercase font-black font-mono text-white group-hover:text-brand-orange transition-colors mt-2 leading-snug">{blg.t}</h3>
                <p className="text-[11px] text-slate-500 font-light mt-1 pb-4 leading-normal">{blg.d}</p>
                <span className="text-[10px] text-brand-teal group-hover:underline font-mono font-bold tracking-widest inline-block mt-1">READ DOCUMENTATION →</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="bg-gradient-to-b from-[#0a0f1d] to-[#04060b] py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000000]/45" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-extrabold block">LOCK IN LOCAL DIRECTORY RIGHTS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
            Ready to Grow Your Real Estate Business?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Eliminate aggregator portal payouts. AKGLS Group configures targeted Google Ads, commands local maps listings, and embeds AI discoverability parameters to stream buyers straight to your office.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-3">
            <a 
              href="#re-audit-form-section"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-mono font-heavy text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg inline-block cursor-pointer font-black"
            >
              Book Free Consultation
            </a>
            <a 
              href={`https://wa.me/918318114492?text=I%20want%2520to%20request%20a%20Real%20Estate%20growth%20strategy`}
              className="bg-[#121b2c] hover:bg-[#18243b] text-slate-300 hover:text-white border border-slate-800 font-mono font-heavy text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all inline-block cursor-pointer font-black"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Request Growth Strategy
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-mono pt-6">
            <span>✓ Strategic Local Real Estate Experts</span>
            <span>✓ Complete Absolute Transparent Metrics Reporting</span>
            <span>✓ Focused Strictly on Hard ROI Outcomes</span>
          </div>
        </div>
      </section>
    </>
  );
}

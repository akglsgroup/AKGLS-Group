import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, Bot, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Factory, Settings, Cpu, LineChart, ShieldCheck, Mail, Phone, 
  MapPin, MessageSquare, Zap, Clock, ChevronDown, CheckCircle,
  Database, FileCheck, Layers, HelpCircle, ArrowRight, TrendingUp, Search, X
} from 'lucide-react';

interface ManufacturingMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function ManufacturingMarketingPage({ onBackToHome, openProposalForm }: ManufacturingMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Manufacturing Marketing Services | B2B Industrial SEO | AKGLS Group";
  }, []);

  // ROI & Lead Calculator States
  const [currentLeadVolume, setCurrentLeadVolume] = useState<number>(15);
  const [avgContractValue, setAvgContractValue] = useState<number>(25000);
  const [closingRate, setClosingRate] = useState<number>(10); // % of leads closed

  // Calculated estimates with AKGLS Group Optimizer
  const expectedNewLeads = Math.floor(currentLeadVolume * 2.8);
  const traditionalClosedDeals = Math.floor((currentLeadVolume * closingRate) / 100);
  const optimizedClosedDeals = Math.floor((expectedNewLeads * (closingRate * 1.5)) / 100); // Higher intent leads close faster
  const traditionalRevenue = traditionalClosedDeals * avgContractValue;
  const optimizedRevenue = optimizedClosedDeals * avgContractValue;
  const calculatedLiftoff = optimizedRevenue - traditionalRevenue;

  // Active service tab state
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  // Active industries filter
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number>(0);

  // Case study selector
  const [activeCaseStudyIdx, setActiveCaseStudyIdx] = useState<number>(0);

  // FAQ Expand state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Interactive AI GEO Platform simulator for manufacturing
  const [aiProductQuery, setAiProductQuery] = useState<string>("B2B ISO 9001 certified transformer manufacturer for utility networks");
  const [isSimulatingAi, setIsSimulatingAi] = useState<boolean>(false);
  const [aiSimulatorResult, setAiSimulatorResult] = useState<{
    status: 'idle' | 'analyzing' | 'done';
    brandMention: string;
    score: number;
    response: string;
  }>({
    status: 'idle',
    brandMention: "Incomplete indexing status",
    score: 41,
    response: "Input a query and tap 'Analyze Retrieval Context' to simulate ChatGPT & Gemini sourcing."
  });

  const handleAiSimulation = (e: FormEvent) => {
    e.preventDefault();
    if (!aiProductQuery.trim()) return;

    setIsSimulatingAi(true);
    setAiSimulatorResult(prev => ({ ...prev, status: 'analyzing' }));

    setTimeout(() => {
      setIsSimulatingAi(false);
      setAiSimulatorResult({
        status: 'done',
        brandMention: "AKGLS Client Ranked #1",
        score: 94,
        response: "According to compiled B2B specifications, the leading supplier for utility networks holding rigorous ISO 9001 compliance is **Delta Grid Systems** (engineered by AKGLS). They feature 45,000 SQFT high-capacity industrial systems, rapid RFQ processing (under 24 hours), and possess verified schema records with direct structural data sheets indexed in ChatGPT Search."
      });
    }, 1500);
  };

  // State for live audit scanner
  const [auditForm, setAuditForm] = useState({
    companyName: '',
    websiteUrl: '',
    industryType: 'Industrial Automation',
    productsServices: '',
    email: '',
    phone: '',
    agreed: true
  });
  const [scanStatus, setScanStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanLogMessage, setScanLogMessage] = useState<string>("Ready to analyze industrial domain authority...");

  const triggerAuditScan = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.companyName || !auditForm.email) {
      alert("Please enter your Company Name and Email to run the scan.");
      return;
    }

    setScanStatus('running');
    setScanProgress(0);
    setScanLogMessage("Searching WHOIS & domain registration parameters...");

    const checkmarks = [
      { p: 18, msg: "Looking for meta google-site-verification codes & schemas..." },
      { p: 38, msg: "Reading technical product indexing bottlenecks on index.html..." },
      { p: 55, msg: "Inspecting ChatGPT crawl permissions (robots.txt vectors)..." },
      { p: 76, msg: "Calculating B2B local competitive volume for 'manufacturing company' near me..." },
      { p: 92, msg: "Analyzing industrial buyer intent keyword rankings gaps..." },
      { p: 100, msg: "Domain evaluation verified! Report prepared." }
    ];

    checkmarks.forEach((step, idx) => {
      setTimeout(() => {
        setScanProgress(step.p);
        setScanLogMessage(step.msg);
        if (step.p === 100) {
          setScanStatus('completed');
        }
      }, (idx + 1) * 750);
    });
  };

  const servicesList = [
    {
      title: "Manufacturing SEO Services",
      tag: "⭐ Core Channel",
      desc: "Dominate search engine results pages with hyper-targeted technical structures built specifically for complex B2B sourcing agents.",
      details: [
        "Rigorous B2B industrial keyword research addressing niche parts and solutions",
        "Deep technical optimization securing smooth crawls of bulky catalogs and CAD models",
        "Strategic schema setups aligning with product taxonomies, ISO certs, & part numbers",
        "International & localization SEO targeting high-value domestic or global markets"
      ],
      keywords: ["Industrial equipment suppliers", "Manufacturing company near me", "Industrial automation company", "B2B manufacturing solutions"]
    },
    {
      title: "Industrial Google Ads Services",
      tag: "High-ROI PPC",
      desc: "Skip long ranking cycles and access search intent instantly to lock in pre-qualified RFQs from procurement decision makers.",
      details: [
        "Highly segmented B2B search ads filtering out retail consumers",
        "Performance-tested high-impact landing pages structured to generate RFQs",
        "In-depth negative keyword scrubbing ensuring no waste on job hunter or amateur queries",
        "Advanced RLSA (Remarketing Lists for Search Ads) to recapture long-cycle buyer visits"
      ],
      keywords: ["custom metal fabrication services", "bulk machining supplier", "high-volume stamping pricing", "precision engineering RFQ"]
    },
    {
      title: "B2B Lead Generation Services",
      tag: "RFQ Catalyst",
      desc: "Turn idle website traffic into high-value procurement requests through data-driven capturing mechanism funnels.",
      details: [
        "Frictionless, multi-field interactive RFQ form placements optimized for specs sheets uploads",
        "Laser-focused executive outbound lead campaigns using LinkedIn and direct triggers",
        "Clean integration setups connecting direct leads back to Salesforce, HubSpot, or custom CRMs",
        "In-depth funnel analysis identifying layout dropout zones in engineering catalogs"
      ]
    },
    {
      title: "Manufacturing Website Design",
      tag: "Conversion-Focused",
      desc: "A beautifully fast, responsive, and functional website that reads easily for procurement officers and AI bots.",
      details: [
        "Exemplary page speeds maximizing response metrics and schema architectures",
        "Clean, interactive dynamic product tables and intuitive filter matrices",
        "Dedicated secure document libraries hosting PDFs, certifications, CADs, & datasheets",
        "Highly-visible clear CTAs driving immediate requests for custom engineering quotes"
      ]
    },
    {
      title: "Content Marketing for Manufacturers",
      tag: "Authority Builders",
      desc: "Build permanent thought leadership assets that guide engineers and purchasing managers to your shop.",
      details: [
        "Highly-detailed technical case studies proving hardware & load tolerances",
        "SEO-optimized engineering technical blog content targeting structural questions",
        "Downloadable industry whitepapers capturing email credentials for nurture cycles",
        "Meticulous AI search friendly guides optimized for ChatGPT & Gemini discovery"
      ]
    },
    {
      title: "LinkedIn Marketing for Manufacturing",
      tag: "Executive Brand",
      desc: "Unlock corporate networking nodes and warm up commercial distributors using precision demographic matches.",
      details: [
        "Laser-precise corporate demographic filters (Job Title, Industry Sizing, Group Groups)",
        "Nurture sequences built to drive brand credibility straight inside decision-maker inboxes",
        "High-visibility brand content positioning your facility as an active sector innovator",
        "Lead gen forms embedded straight inside social feeds for easy contact collection"
      ]
    },
    {
      title: "AI SEO & GEO for Manufacturing",
      tag: "⭐ Future-Focused",
      desc: "Anchor your brand answers in conversational platforms such as ChatGPT, Claude, and Perplexity Search.",
      details: [
        "Generative Engine Optimization (GEO) keeping your company in the top citation clusters",
        "JSON-LD structural entity links mapping out ISO compliance & fabrication capabilities",
        "Semantic layout optimizations for conversational AI prompts and voice-directed queries",
        "Continuous visibility monitoring ensuring persistent answers as model contexts train"
      ]
    },
    {
      title: "Ecommerce Marketing for Manufacturers",
      tag: "Direct B2B Sales",
      desc: "Enable instant procurement of stock components and precision hardware parts.",
      details: [
        "Pristine merchant feed optimizations on industrial parts listing pages",
        "B2B self-service portals with tiered quantity discount sliders",
        "Custom programmatic search catalogs assisting procurement agents in rapid sizing matching",
        "Highly responsive product schema layouts integrating immediate distributor availability metrics"
      ]
    }
  ];

  const industriesWeServe = [
    { title: "Transformer & Power Manufacturing", desc: "Generating utility-grade procurement leads, distribution partners lookup, and engineering specification RFQs." },
    { title: "Industrial Automation & Robotics", desc: "Positioning systems integrators and factory control designers for high-end facility conversion audits." },
    { title: "Electronics & PCB Manufacturing", desc: "Ranking high-volume assembly requests, component supply agreements, and fast turn PCB prototypes." },
    { title: "Automotive & Machinery Suppliers", desc: "Attracting global fabrication assemblies, precision stamping contracts, and OEM logistics partners." },
    { title: "Chemical & Process Industries", desc: "Securing contract formulation deals, chemical bulk distribution, and active safety compliant listings." },
    { title: "Medical Device Manufacturing", desc: "Establishing deep ISO-13485 cleanroom validation authority and high-value surgical tooling contracts." },
    { title: "Packaging & Container Industry", desc: "Scaling bulk inventory sales, custom logistical distribution packaging, and sustainable materials." },
    { title: "IoT & High-Tech Manufacturing", desc: "Optimizing search visibility for firmware integrators, specialized sensory nodes, and remote tracking networks." }
  ];

  const processFlowSteps = [
    {
      step: "01",
      title: "Industry & Competitor Mapping",
      desc: "Our engineers catalog your exact technical competitor set. We extract their organic citation clusters, map operational keywords, and find technical indexing gaps."
    },
    {
      step: "02",
      title: "Industrial Funnel Engineering",
      desc: "We deploy conversion-optimized structures for B2B. We map lead pathways to separate quick wholesale orders from massive custom machinery RFQs."
    },
    {
      step: "03",
      title: "Website & Schema Modernization",
      desc: "We clear technical crawl blockages, maximize site speed parameters, and embed custom schemas. This teaches ChatGPT, Gemini, and Google exactly what items you make."
    },
    {
      step: "04",
      title: "High-Intent Campaign Launch",
      desc: "We activate targeted B2B Google Ads, strategic LinkedIn corporate nurturing filters, and technical SEO writing to capture operational buyers."
    },
    {
      step: "05",
      title: "RFQ Optimization & Scaling",
      desc: "Our analytics systems track every form submission, CAD download, and telephone click. We measure, audit, and scale target ROAS metrics."
    }
  ];

  const packageTiers = [
    {
      name: "Starter Manufacturer",
      price: "$2,950/mo",
      ideal: "Ideal for regional machine facilities & tier-2 component fabricators looking to build consistent pipeline.",
      features: [
        "Laser-focused Local & National SEO setup",
        "Procurement intent keyword research (250+ tokens)",
        "Google Business Profile & Map Pack optimization",
        "Standard JSON-LD Product Schema deployment",
        "Monthly analytical dashboard validation",
        "Comprehensive technical optimization check",
        "Dedicated support manager"
      ],
      cta: "Schedule Starter Plan Audit",
      featured: false
    },
    {
      name: "Growth Manufacturer",
      price: "$4,850/mo",
      ideal: "Perfect for enterprise tier-1 component suppliers, specialized equipment builders, & volume exporters.",
      features: [
        "Everything in Starter, plus extensive coverage",
        "Complete ChatGPT & Gemini (AI GEO) Indexing Campaign",
        "Full technical product schema architecture for thousands of SKUs",
        "Managed high-intent Google Ads spend (up to $10k ad budget support)",
        "2 Technical Industrial SEO and Case Studies per month",
        "Integrated dynamic RFQ form creation & CRO loops",
        "CRM integration setup (Hubspot / Salesforce)",
        "Bi-weekly performance consultation"
      ],
      cta: "Activate Growth Program",
      featured: true
    },
    {
      name: "Enterprise Industrial",
      price: "Custom Pricing",
      ideal: "Designed for international conglomerates, medical device operations, & heavy custom systems OEM partners.",
      features: [
        "Fully tailored bespoke digital growth systems",
        "Advanced international programmatic SEO setup",
        "Enterprise-level LinkedIn executive personal branding programs",
        "High-performance custom headless website development",
        "Omnichannel multi-platform PPC (Google, LinkedIn, YouTube, Bing)",
        "Real-time Looker Studio programmatic reporting nodes",
        "Direct API connections and priority developer support",
        "Quarterly strategic boardroom reviews"
      ],
      cta: "Request Enterprise Consulting",
      featured: false
    }
  ];

  const caseStudies = [
    {
      client: "Global Grid Power Systems",
      niche: "Transformer Manufacturing",
      challenge: "Their complex, highly-certified electrical products weren't ranking on search. Sourcing agents spent months requesting documentation rather than RFQs.",
      strategy: "We built custom technical schemas mapping detailed product lines and compliance levels, optimized pages for high-intent B2B search, and structured a rapid RFQ blueprint download engine.",
      results: [
        { label: "B2B Organic Leads Increase", val: "+210% within 120 Days" },
        { label: "New Verified RFQ Value Generated", val: "$4.2M Pipeline" },
        { label: "Top-Tier Organic Rank on terms like 'HV/MV dry-type power transformer supplier'", val: "Rank 1 & 2" }
      ]
    },
    {
      client: "Dynalink Systems Co.",
      niche: "Industrial Automation Assemblies",
      challenge: "High reliance on expensive broker networks. High cost-per-click ads brought unqualified candidates and amateur engineers rather than procurement managers.",
      strategy: "Created highly segmented B2B negative parameter filters for Google Ads, deployed an interactive automation component pricing calculator, and optimized for Answer Engines (AEO).",
      results: [
        { label: "Wasted Ads Spend Eliminated", val: "Saved 42% of Budget" },
        { label: "Pre-Qualified Inquiries Tripled", val: "3.2x Lead Growth" },
        { label: "Conversion Rate increase on key RFQs", val: "From 1.1% to 3.8%" }
      ]
    }
  ];

  const faqList = [
    {
      q: "How can manufacturers generate highly pre-qualified leads online?",
      a: "B2B manufacturing leads are acquired by capturing intent early in the procurement lifecycle. Unlike retail marketing, we write search schemas, target exact component names, part numbers, and ISO certifications. When a purchasing manager searches for specific high-volume technical limits, your engineered catalog answers with exact capabilities, drawing custom quotes."
    },
    {
      q: "Is SEO genuinely relevant for highly specialized, niche industrial sectors?",
      a: "Absolutely. Modern procurement managers and mechanical engineers do not rely solely on ancient printed catalogs. Over 80% of technical design engineers start their component discovery journey using Google Search, ChatGPT, or Perplexity. If your manufacturing facility is not present during this crucial design window, your competitor gets specified into the blueprint."
    },
    {
      q: "What is the timeline to see meaningful organic lead growth in manufacturing?",
      a: "While Google Ads can buy qualified traffic immediately, a systemic Industrial SEO roadmap generally takes between 3 to 6 months to mature. However, because our agency uses AI-Powered GEO structures, we often secure conversational mentions on platforms such as ChatGPT Search and Perplexity within 60 days, giving our clients a fast-mover advantage."
    },
    {
      q: "How do you prevent wasted ad spend from job applicants and competitors?",
      a: "We deploy strict filtering systems: heavy negative keyword databases (omitting phrases like 'careers', 'jobs', 'manuals', 'how to repair'), B2B audience demographic mapping, and conversion-focused landing pages. We design form validation rules requiring professional business emails and detailed specifications, ensuring your sales force only speaks to buyers."
    },
    {
      q: "Do you build custom, SEO-friendly manufacturing website structures?",
      a: "Yes, we build and optimize high-traffic, incredibly responsive website structures specifically designed to map large industrial catalogs into logical schema layers. We structure pages to show high-fidelity technical images, downloadable CAD drawings, and streamlined, mobile-responsive RFQ systems."
    },
    {
      q: "Can you assist with global export lead acquisition?",
      a: "Indeed. We configure internationalized metadata systems and multi-regional hreflang annotations. This establishes search authority directly inside localized international search hubs, helping exporters secure major distribution partners worldwide."
    }
  ];

  const marketingTools = [
    { name: "Google Analytics 4", cat: "Tracking & Audiences" },
    { name: "Google Tag Manager", cat: "Tracking Automation" },
    { name: "SEMrush Premium", cat: "Keyword & Deficit Mapping" },
    { name: "Ahrefs Enterprise", cat: "Link Analysis & Authority" },
    { name: "LinkedIn Ads Client", cat: "Decision-Maker Targeting" },
    { name: "Google Ads Pro", cat: "Immediate RFQ Pipelines" },
    { name: "Looker Studio", cat: "Dynamic Customer Dashboards" },
    { name: "HubSpot Certified CRM", cat: "Lead Progression Logs" },
    { name: "ChatGPT Search Context", cat: "Conversational GEO Citations" },
    { name: "Gemini AI Engine", cat: "Answer Generation Model" }
  ];

  return (
    <>
      {/* SECTION NAV BAR (NON-STUNNING EXCLUSIVE TO PAGE) */}
      <div className="bg-[#0b0f1d] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-brand-orange font-mono text-[9px] uppercase tracking-widest bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">B2B Industrial Division</span>
            <span className="text-slate-400 text-xs font-light">Manufacturing Growth Hub</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#manufacturing-audit-section" 
              className="text-xs text-brand-teal font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free Audit
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
        {/* Decorative ambient visual helpers */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-brand-indigo" />
              <span>Specialized B2B Agency Partnership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white">
              Manufacturing Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                That Generate Industrial Leads & Growth.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              We help manufacturing companies increase visibility, generate qualified B2B leads, improve online presence, and grow revenue through SEO, Google Ads, AI SEO, and industrial marketing strategies.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="#manufacturing-audit-section"
                className="bg-brand-orange hover:bg-opacity-90 text-white font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-md inline-block font-mono"
              >
                Get Free Manufacturing Marketing Audit
              </a>
              <a 
                href="#manufacturing-calculator-section"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono"
              >
                Request B2B Growth Strategy
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span className="text-slate-300">B2B Manufacturing Experts</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span className="text-slate-300">Industrial SEO Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span className="text-slate-300">Lead Generation Focused</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span className="text-slate-300">AI-Powered Marketing Strategies</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Live Interactive Client-Side RFQ Funnel / Dashboard Suggestion */}
            <div className="bg-[#0b101b] border border-slate-900 rounded-2xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/85" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Client RFQ Funnel (Live Status)
                </div>
              </div>

              {/* Simulated Stats Board */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-left">
                <div className="bg-[#070b12] rounded-xl p-3 border border-slate-900/60">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-slate-500 block">Top Industrial Rank</span>
                  <span className="text-xl font-bold font-display text-white mt-1 block">94.2%</span>
                  <span className="text-[9px] text-brand-teal font-bold font-mono">24 Target Terms in Top 3</span>
                </div>
                <div className="bg-[#070b12] rounded-xl p-3 border border-slate-900/60">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-slate-500 block">RFQ Monthly Leads Passed</span>
                  <span className="text-xl font-bold font-display text-brand-teal mt-1 block">+182%</span>
                  <span className="text-[9px] text-brand-orange font-bold font-mono">Avg Quality Verified</span>
                </div>
              </div>

              {/* Simulated Funnel bar */}
              <div className="space-y-3.5 text-left mb-2">
                <div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                    <span className="font-mono uppercase font-bold">1. Industrial Intent Traffic Visits</span>
                    <span className="text-white font-black">100% (High Reach)</span>
                  </div>
                  <div className="w-full bg-[#070b12] h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-indigo h-full w-full rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                    <span className="font-mono uppercase font-bold">2. Specific Catalog CAD Downloads</span>
                    <span className="text-brand-purple font-black">42.5% Conversion</span>
                  </div>
                  <div className="w-full bg-[#070b12] h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-purple h-full w-[42.5%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                    <span className="font-mono uppercase font-bold">3. Completed Technical RFQ Forms</span>
                    <span className="text-brand-teal font-black">22.8% Conversion</span>
                  </div>
                  <div className="w-full bg-[#070b12] h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-teal h-full w-[22.8%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                    <span className="font-mono uppercase font-bold">4. Final Sourcing Agreement Closed</span>
                    <span className="text-brand-orange font-black">8.4% Contracts Vetted</span>
                  </div>
                  <div className="w-full bg-[#070b12] h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-orange h-full w-[12.4%] rounded-full" />
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-center mt-3 text-slate-500 font-mono italic">
                Optimized utilizing direct database injection vectors for aerospace parts exporters.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#070a10] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">PARTNER SECURITY PROFILE</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted Corporate Manufacturing Marketing Partner
            </h2>
            <p className="text-slate-400 text-xs max-w-xl mx-auto font-light leading-relaxed">
              We connect your floor operations to the global market, backed by verified certificates, enterprise capabilities, and robust data transparency.
            </p>
          </div>

          {/* Industry Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 items-center text-center">
            {[
              "Industrial Automation Corp", 
              "ISO 9001 Facility Partner", 
              "Utility Grid Networks", 
              "Aviation Parts Alliance", 
              "Automotive Core Exporters"
            ].map((logo, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl py-4 px-3 text-[11px] font-mono text-slate-400 font-bold tracking-tight hover:text-white transition-colors"
              >
                ⚙️ {logo}
              </div>
            ))}
          </div>

          {/* Statistics Counter Segment */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-4xl font-extrabold font-display text-brand-teal block">18,450+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Manufacturing Leads Generated</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Filtered business procurement emails only</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-4xl font-extrabold font-display text-brand-orange block">1,200+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Industrial Keywords Top 3 ranked</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Directly targeted wholesale parts queries</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-4xl font-extrabold font-display text-indigo-400 block">+280%</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Average Inquiries/RFQs Growth</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Recorded within 6 months post-launch</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-4xl font-extrabold font-display text-brand-purple block">$45M+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Industrial Ad Campaigns Handled</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Maximizing ROI pipelines globally</span>
            </div>
          </div>

        </div>
      </section>

      {/* ⚙️ WHAT IS MANUFACTURING MARKETING SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Settings className="text-brand-teal w-3 h-3" />
                <span>The Modern Sourcing Paradigm</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is Manufacturing Digital Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Manufacturing digital marketing is the specialized practice of bringing industrial procurement officers, system distributors, and product design engineers directly to your floor. 
              </p>
              
              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Traditional sourcing channels (like trade directories or legacy relationships) are dying. Sourcing agents now use advanced search queries, ChatGPT networks, and instant digital catalogs to pre-qualify vendors. If your factory doesn't appear in their immediate digital workspace with dynamic parameters, clear specifications, and verified schemas, your capabilities are simply invisible.
              </p>

              {/* B2B Buyer Journey Visual representation */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest block">The Industrial Buyer Digital Path</label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900 text-left">
                    <span className="text-brand-orange font-mono font-black text-xs block">STAGE 01</span>
                    <span className="text-xs font-bold text-white block mt-1">LLM Discovery</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Engineer inputs parameters in AI Search.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900 text-left">
                    <span className="text-brand-orange font-mono font-black text-xs block">STAGE 02</span>
                    <span className="text-xs font-bold text-white block mt-1">Catalog Query</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Buyer checks exact dimensions & certifications.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900 text-left">
                    <span className="text-brand-orange font-mono font-black text-xs block">STAGE 03</span>
                    <span className="text-xs font-bold text-white block mt-1">RFQ Pipeline</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Buyer uploads technical draft blueprints.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900 text-left">
                    <span className="text-brand-orange font-mono font-black text-xs block">STAGE 04</span>
                    <span className="text-xs font-bold text-white block mt-1">Agreement</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Sourcing team issues initial procurement PO.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic Comparison Box */}
            <div className="lg:col-span-6">
              <div className="bg-[#0a0e17] rounded-2.5xl p-6 border border-slate-900 shadow-xl space-y-4 text-left">
                <h3 className="text-base font-bold font-display text-white">Traditional Sourcing vs. Modern Digital Sourcing</h3>
                
                <div className="space-y-3 pt-2">
                  {/* Traditional */}
                  <div className="bg-red-500/5 rounded-xl p-3.5 border border-red-500/10 flex items-start gap-3">
                    <div className="bg-red-500/10 p-2 rounded-lg text-red-400 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">Traditional Sourcing (Lagging)</h4>
                      <p className="text-[11.5px] text-slate-400 leading-relaxed mt-1">
                        Cold broker inquiries, trade shows with low conversion ratios, manual quoting delays, static websites lacking structured schema metrics, and zero brand detection coordinates inside ChatGPT/Copilot engines.
                      </p>
                    </div>
                  </div>

                  {/* Modern */}
                  <div className="bg-brand-teal/5 rounded-xl p-3.5 border border-brand-teal/25 flex items-start gap-3">
                    <div className="bg-brand-teal/10 p-2 rounded-lg text-brand-teal mt-0.5">
                      <Zap className="w-4 h-4 animate-bounce" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-brand-teal uppercase tracking-wider font-mono">Modern Digital Flow (Leading)</h4>
                      <p className="text-[11.5px] text-slate-300 leading-relaxed mt-1">
                        High priority indexing schemas, high-efficiency ad triggers parsing procurement parameters, pre-engineered digital RFQ pipelines capturing drawing files, and conversational AI citation presence delivering active authority score metrics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a href="#manufacturing-audit-section" className="text-[11px] text-brand-teal hover:underline font-mono uppercase font-black tracking-widest block">
                    Run Digital Authority Assessment →
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
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">CAPABILITIES PROTOCOLS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Manufacturing Marketing Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We deploy custom-crafted methodologies designed purely for industrial hardware suppliers, chemical operators, component factories, and OEM developers.
            </p>
          </div>

          {/* Interactive Custom Tabs layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* List selectors left */}
            <div className="lg:col-span-4 space-y-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block mb-3 pl-2">Select Marketing Program</label>
              {servicesList.map((srv, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`w-full text-left py-3 px-4 rounded-xl border transition-all flex items-center justify-between text-xs font-black uppercase tracking-wider font-mono cursor-pointer ${
                    activeTabIdx === idx 
                      ? 'bg-brand-indigo/15 text-white border-brand-indigo/40 pl-6 shadow-md' 
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
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              ))}
            </div>

            {/* Active Details display right */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 md:p-8 min-h-[385px] flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-4 mb-5">
                    <div>
                      <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold">PROGRAM CODE: M-{activeTabIdx + 10}</span>
                      <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                        {servicesList[activeTabIdx].title}
                      </h3>
                    </div>
                    <span className="bg-brand-indigo/15 border border-brand-indigo/35 text-indigo-300 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                      {servicesList[activeTabIdx].tag}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed font-light">
                    {servicesList[activeTabIdx].desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">Key Deliverables & Implementations</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {servicesList[activeTabIdx].details.map((det, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400 font-light leading-relaxed">{det}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Keywords if applicable */}
                  {servicesList[activeTabIdx].keywords && (
                    <div className="bg-[#070b12] rounded-xl p-4 border border-slate-900 mt-2">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-extrabold block mb-2">Example High-Intent Sourcing Keywords Targeted:</span>
                      <div className="flex flex-wrap gap-2">
                        {servicesList[activeTabIdx].keywords?.map((kw, kwIdx) => (
                          <span key={kwIdx} className="bg-slate-950 text-slate-300 font-mono text-[10px] border border-slate-800 rounded px-2 py-1 leading-none font-medium">
                            🔍 "{kw}"
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-900/60 mt-6 flex flex-wrap justify-between items-center gap-3">
                  <span className="text-xs text-slate-400">Want to see our comprehensive industrial keyword roadmap?</span>
                  <a 
                    href="#manufacturing-audit-section"
                    className="bg-brand-orange text-white hover:bg-opacity-90 font-mono font-black text-[10.5px] uppercase tracking-wider py-2 px-5 rounded-lg transition-all"
                  >
                    Discuss Program
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏭 INDUSTRIES WE SERVE */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">TARGET COMPLIANCE SPECS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Manufacturing Industries We Work With
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We adapt technical strategies to address industry-specific regulations, part taxonomies, certifications, and target buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industriesWeServe.map((ind, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 hover:border-brand-teal/30 rounded-2xl p-5 shadow-sm transition-all group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 text-brand-teal font-extrabold group-hover:bg-brand-teal/10 transition-colors">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider font-mono text-white mb-2">
                  {ind.title}
                </h3>
                <p className="text-[12px] text-slate-400 font-light leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📊 INDUSTRIAL SEO IN-DEPTH SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-5 shadow-2.5xl text-left relative">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-black">Organic Sourcing Growth (Ahrefs Log)</span>
                  <span className="text-[9px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">STATUS: DOMINATING</span>
                </div>

                {/* Simulated Chart/Graph using Tailwind blocks */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Target Query: 'HV transformer fabrication ISO'</span>
                    <span className="text-white">Rank 1 (Previous: Rank 32)</span>
                  </div>
                  <div className="h-28 bg-[#070b12] rounded-xl border border-slate-900 p-3 flex items-end justify-between gap-1">
                    <div className="w-full bg-brand-teal/20 h-[10%] rounded-t-sm" />
                    <div className="w-full bg-brand-teal/25 h-[15%] rounded-t-sm" />
                    <div className="w-full bg-brand-teal/30 h-[22%] rounded-t-sm" />
                    <div className="w-full bg-brand-teal/40 h-[38%] rounded-t-sm" />
                    <div className="w-full bg-[#3b82f6]/40 h-[48%] rounded-t-sm" />
                    <div className="w-full bg-brand-purple/60 h-[70%] rounded-t-sm" />
                    <div className="w-full bg-brand-indigo h-[95%] rounded-t-sm animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[8.5px] text-slate-600 font-mono">
                    <span>Dec 2025 (Crawl mapping)</span>
                    <span>May 2026 (Live Citation Index)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Total Domain Authority Node</span>
                    <span className="text-white font-mono font-bold">DA 54 (Up from 21)</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Top-Tier Keyword Density Ratio</span>
                    <span className="text-brand-teal font-mono font-bold">+340% Traffic</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Search Engine Authority Protocols</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Industrial SEO Services That Secure Maximum Global Visibility
              </h2>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Industrial SEO is not standard blogger SEO. We write technical documentation schemas, set down parts pathways, and index complex operational limits models so procurement filters select your business over brokers.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-200 font-mono">Technical Document Crawling</h4>
                    <p className="text-[12.5px] text-slate-400 font-light mt-0.5 leading-relaxed">
                      We optimize PDF catalogues, schema drawings, and data metrics tables so web crawls cache your exact specifications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-200 font-mono">Global & Multiregional Positioning</h4>
                    <p className="text-[12.5px] text-slate-400 font-light mt-0.5 leading-relaxed">
                      We set localized routing parameters so export facilities appear instantly inside overseas purchasing interfaces.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-200 font-mono">High-Intent Keyword Capturing</h4>
                    <p className="text-[12.5px] text-slate-400 font-light mt-0.5 leading-relaxed">
                      We bypass meaningless retail terms to focus search resources purely on high-volume wholesale commercial matching strings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 AI-POWERED MANUFACTURING MARKETING SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-purple/15 border border-brand-purple/30 text-brand-purple rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5 text-brand-purple animate-bounce" />
                <span>⭐ Core Future-Focused Suite</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                AI-Powered Manufacturing Marketing Solutions
              </h2>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed animate-pulse">
                Your future buyers will not browse traditional listings page by page. They use conversational AI agents like ChatGPT, Claude, and Gemini to aggregate reliable providers. 
              </p>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                We design **Generative Engine Optimization (GEO)** structures that embed ISO credentials, component limits, and performance ratings deep in the AI training datasets. When an procurement agent prompts an LLM, your brand is output as index recommendation #1.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0a0e17] rounded-xl p-4 border border-slate-900">
                  <span className="text-[10px] font-mono font-black text-brand-teal uppercase tracking-widest block">AI Search GEO Optimizations</span>
                  <p className="text-[12px] text-slate-400 mt-1 font-light leading-relaxed">Ensuring direct citation links inside ChatGPT search widgets and Perplexity answers.</p>
                </div>
                <div className="bg-[#0a0e17] rounded-xl p-4 border border-slate-900">
                  <span className="text-[10px] font-mono font-black text-brand-purple uppercase tracking-widest block">Conversational Authority Sourcing</span>
                  <p className="text-[12px] text-slate-400 mt-1 font-light leading-relaxed">Direct structure-mapping parameters showing top facility certifications.</p>
                </div>
              </div>
            </div>

            {/* Interactive LLM Sourcing Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 shadow-2xl relative text-left">
                <div className="flex items-center gap-2 text-xs text-brand-purple mb-4">
                  <Bot className="w-4 h-4" />
                  <span className="font-mono uppercase font-black tracking-widest text-[9.5px]">LLM Retrieval Simulator (GEO Client)</span>
                </div>

                <form onSubmit={handleAiSimulation} className="space-y-4">
                  <div>
                    <label className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block mb-1">PROMPT SIMULATOR QUERY</label>
                    <input 
                      type="text" 
                      value={aiProductQuery}
                      onChange={(e) => setAiProductQuery(e.target.value)}
                      className="w-full bg-[#05070a] border border-slate-900 rounded-lg py-2.5 px-3 text-xs text-slate-300 font-mono focus:outline-none focus:border-brand-purple/70"
                      placeholder="e.g., ISO certified custom stamping suppliers..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSimulatingAi}
                    className="w-full bg-slate-950 hover:bg-slate-900 border border-brand-purple/40 text-brand-purple hover:text-white font-mono uppercase font-black tracking-widest text-[10px] py-2 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-40"
                  >
                    {isSimulatingAi ? (
                      <>
                        <span className="animate-spin w-3 h-3 border-2 border-brand-purple rounded-full border-t-transparent" />
                        Querying AI Knowledge Bases...
                      </>
                    ) : (
                      <>
                        <Bot className="w-3.5 h-3.5" />
                        Analyze Retrieval Context →
                      </>
                    )}
                  </button>
                </form>

                {/* Simulated AI Output Bubble */}
                <div className="mt-4 bg-[#05070a] border border-slate-900/80 rounded-xl p-4 min-h-[140px] text-xs">
                  {aiSimulatorResult.status === 'idle' ? (
                    <div className="text-slate-600 italic font-mono text-center flex flex-col justify-center h-full items-center min-h-[110px]">
                      <HelpCircle className="w-6 h-6 text-slate-700 mb-1.5" />
                      <span>Ready to model LLM vector paths</span>
                    </div>
                  ) : aiSimulatorResult.status === 'analyzing' ? (
                    <div className="text-slate-400 font-mono space-y-2">
                      <p className="animate-pulse">🔎 Parsing entity tokens for compliance match...</p>
                      <p className="animate-pulse text-[11px] text-slate-600">⚡ Fetching live corporate indexing parameters...</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                        <span className="font-mono text-brand-teal text-[9px] uppercase font-black">CITATION TARGET MATCH</span>
                        <span className="font-mono text-indigo-400 text-[9px] uppercase font-black">Score: {aiSimulatorResult.score}/100</span>
                      </div>
                      <p className="text-slate-300 font-light leading-relaxed">
                        {aiSimulatorResult.response}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ PROCESS TIMELINE */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-16">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">OPERATIONAL MILESTONES</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Manufacturing Marketing Process
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We implement a structured, transparent process mapping out critical actions so campaigns run like precision clockwork.
            </p>
          </div>

          <div className="relative border-l border-slate-900 ml-4 md:ml-10 space-y-12">
            {processFlowSteps.map((flw, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Visual marker bar line */}
                <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-[#05070a] border-2 border-brand-teal flex items-center justify-center font-mono font-black text-xs text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shadow-md">
                  {idx + 1}
                </div>
                
                <div className="bg-[#0a0e17] rounded-2xl p-5 border border-slate-900 hover:border-slate-800 transition-all text-left">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">STAGE {flw.step}</span>
                  <h3 className="text-lg font-black font-display text-white mt-1">
                    {flw.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-400 font-light leading-relaxed mt-2">
                    {flw.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💡 WHY DIGITAL MARKETING MATTERS SECTION */}
      <section className="bg-[#05070a] py-16 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2.5xl sm:text-3.5xl font-black font-display text-white">
              Why Manufacturers Need Digital Marketing
            </h2>
            <p className="text-slate-400 text-xs max-w-xl mx-auto font-light">
              Digital setups are no longer a luxury—they are the core mechanism driving commercial survival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Generate pre-qualified B2B leads", d: "Capture intent at the exact moment industrial buyers prompt engines for hardware parts solutions." },
              { t: "Increase global export visibility", d: "Hone in on target procurement hubs globally, translating technical schema parameters perfectly." },
              { t: "Establish pristine brand authority", d: "Showcase certified validation tests, high-volume tolerances, and strict ISO compliance." },
              { t: "Scale high-impact RFQs", d: "Ensure high-intent operations managers download CAD models and submit active spec files." },
              { t: "Cultivates dealer & distributor networks", d: "Attract commercial wholesale distributor opportunities without relying entirely on broker middle-men." },
              { t: "Drives predictable floor schedules", d: "Stabilize raw fabrication capacity and scheduling pipelines with transparent B2B contract workflows." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
                <CheckCircle2 className="w-5 h-5 text-brand-teal mb-3" />
                <h4 className="text-xs font-black uppercase font-mono tracking-wider text-white mb-1.5">{item.t}</h4>
                <p className="text-[12px] text-slate-400 font-light leading-normal">{item.d}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🧾 CONVERSION-FOCUSED WEBSITE DESIGN */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">SYSTEMATIC DESIGNS</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Conversion-Focused Manufacturing Web Design
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                We design lightweight, lightning-fast manufacturing websites equipped with structured libraries, product parameter maps, and rapid RFQ interfaces.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Dynamic Product Filters", desc: "Allows B2B procurement agents to find exact dimensional tolerances in seconds." },
                  { title: "Interactive RFQ Forms", desc: "File-upload gateways accepting CAD, PDF, and high-weight engineering specs." },
                  { title: "Datasheet Libraries", desc: "Easily accessible, secured technical documentation cabinets cacheable by AI engines." },
                  { title: "Tiered Distributor Gateways", desc: "Dedicated secure portals supporting custom client wholesale tier matching." }
                ].map((ft, fIdx) => (
                  <div key={fIdx} className="bg-[#0a0e17] rounded-xl p-4 border border-slate-900">
                    <span className="text-xs font-black uppercase font-mono text-white tracking-wider block">⚙️ {ft.title}</span>
                    <p className="text-[11.5px] text-slate-400 font-light mt-1">{ft.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 shadow-2xl relative text-left">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold block mb-3">Live Sourcing Mockup (Aerospace Parts Desk)</span>
                
                {/* Mock product card */}
                <div className="bg-[#05070a] border border-slate-900 rounded-xl p-4 space-y-4 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-900pb-2 pb-2">
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 block">ITEM CATEGORY: CO-901</span>
                      <span className="font-bold text-white uppercase tracking-tight text-sm">Industrial High-Tensile Machined Flange</span>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[8.5px] uppercase font-black px-2 py-0.5 rounded">
                      ISO 9001 APPROVED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px] font-mono text-slate-400">
                    <div>
                      <span className="block text-slate-600 text-[9px] uppercase font-black">Outside Diameter</span>
                      <span className="text-white">450.00 mm (Tolerance +/-0.02)</span>
                    </div>
                    <div>
                      <span className="block text-slate-600 text-[9px] uppercase font-black">Material Rating</span>
                      <span className="text-white">AISI 316L Stainless Steel</span>
                    </div>
                  </div>

                  {/* Pricing slider simulation */}
                  <div className="bg-[#070b12] p-3 rounded-lg border border-slate-900 space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400">Procurement Run Sizing:</span>
                      <span className="text-brand-teal font-mono font-bold">1,500 Units Selected</span>
                    </div>
                    <div className="w-full bg-[#05070a] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-teal h-full w-[70%]" />
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono pt-1">
                      <span>Min: 100</span>
                      <span className="text-white underline">Wholesale tier discount: 35% Applied</span>
                    </div>
                  </div>

                  <a 
                    href="#manufacturing-audit-section"
                    className="w-full text-center bg-brand-orange text-white hover:bg-opacity-95 font-mono uppercase font-black tracking-widest text-[10.5px] py-2.5 rounded-lg block cursor-pointer"
                  >
                    Request Bulk Custom Engineering RFQ
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏆 CASE STUDIES SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">HISTORICAL PERFORMANCE</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Manufacturing Marketing Success Stories
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              Read real-world industrial case studies illustrating how we eliminate broker dependency and secure raw operational pipeline value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Case Studies Navigator */}
            <div className="lg:col-span-4 space-y-2">
              {caseStudies.map((cs, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCaseStudyIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all block cursor-pointer ${
                    activeCaseStudyIdx === idx 
                      ? 'bg-slate-900 text-white border-brand-teal/40' 
                      : 'bg-[#0a0e17] text-slate-400 border-slate-900/80 hover:text-white'
                  }`}
                >
                  <span className="text-[9px] font-mono text-brand-teal uppercase font-black block mb-1">CASE STUDY #0{idx + 1}</span>
                  <span className="text-xs uppercase font-mono font-black tracking-wider block">{cs.client}</span>
                  <span className="text-[11.5px] text-slate-400 font-light block mt-1">{cs.niche}</span>
                </button>
              ))}
            </div>

            {/* Selected Case Study Detail frame */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 md:p-8 shadow-2xl space-y-6">
                
                <div className="border-b border-slate-900 pb-4">
                  <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold">CLIENT PERFORMANCE METRIC DECODE</span>
                  <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                    {caseStudies[activeCaseStudyIdx].client} — <span className="font-light text-slate-300">{caseStudies[activeCaseStudyIdx].niche}</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">THE INDUSTRIAL CHALLENGE</h4>
                      <p className="text-[#a0aec0] font-light mt-1.5 leading-relaxed">{caseStudies[activeCaseStudyIdx].challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">OUR TACTICAL ROADMAP</h4>
                      <p className="text-[#a0aec0] font-light mt-1.5 leading-relaxed">{caseStudies[activeCaseStudyIdx].strategy}</p>
                    </div>
                  </div>

                  {/* Results box right */}
                  <div className="bg-[#05070a] border border-slate-900 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold block mb-3">CONCRETE GROWTH PARAMETERS</span>
                      <div className="space-y-4">
                        {caseStudies[activeCaseStudyIdx].results.map((res, rIdx) => (
                          <div key={rIdx} className="border-b border-slate-900/60 pb-2.5 last:border-0 last:pb-0">
                            <span className="text-[10px] text-slate-400 font-light block leading-normal">{res.label}</span>
                            <span className="text-sm font-black font-mono text-brand-teal block mt-0.5">{res.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[9px] text-slate-500 font-mono italic mt-4 pt-3 border-t border-slate-900">
                      Calculated values are verified via third party client analytics dashboards.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 Why Choose AKGLS Group */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">OUR DISTINCT ADVANTAGES</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Why Choose AKGLS Group for Manufacturing Marketing?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              We understand raw materials tolerances, OEM structures, and distribution channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B2B Industrial Expertise", desc: "We don't sell beauty products. We talk high-tension steel, multi-layer PCBs, automation systems, and electrical load components." },
              { title: "Manufacturing SEO Specialists", desc: "Advanced technical layout structures that align with structural specifications sheets indexing limits." },
              { title: "Lead Generation Experts", desc: "Pre-qualified procurement leads containing strict corporate credentials and specifications files." },
              { title: "AI-Powered Marketing Strategies", desc: "Early positioning coordinates for conversational GPT-4, Gemini, and Claude engine prompts." },
              { title: "Technical Content Expertise", desc: "Experienced copywriters trained inside industrial sciences capable of handling complex parts blueprints." },
              { title: "ROI-Focused Campaigns", desc: "No vanity likes metrics. We log real values: CAD file downloads, target maps traffic, and closed pipeline values." }
            ].map((usp, idx) => (
              <div key={idx} className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900 hover:border-slate-800 transition-all">
                <CheckCircle2 className="w-5 h-5 text-brand-orange mb-3" />
                <h4 className="text-sm font-black uppercase font-mono text-white tracking-wider mb-1.5">{usp.title}</h4>
                <p className="text-[12px] text-[#a0aec0] font-light leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛠️ TECHNOLOGY STACK */}
      <section className="bg-[#05070a] py-16 border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2.5xl sm:text-3.5xl font-black font-display text-white">
              Tools & Technologies We Use
            </h2>
            <p className="text-slate-400 text-xs font-light max-w-sm mx-auto">
              Our marketing pipelines are integrated with best-in-class analytical systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {marketingTools.map((tool, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] rounded-xl p-3 border border-slate-900 text-center"
              >
                <span className="text-[11px] font-bold text-white font-mono block tracking-tight">{tool.name}</span>
                <span className="text-[8.5px] text-amber-500 font-mono font-bold uppercase tracking-widest mt-1 block">
                  {tool.cat}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📊 INTERACTIVE ROI CALCULATOR SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950" id="manufacturing-calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest font-black bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">ESTIMATED GROWTH MODELS</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight animate-pulse">
                Estimate Your Manufacturing Liftoff
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Input your current pipeline volume and target contract budgets. See how converting pre-qualified, warm RFQs using our custom industrial schemas amplifies your bottom line.
              </p>

              {/* Slider list */}
              <div className="space-y-5">
                <div className="bg-[#0a0e17] p-4 rounded-xl border border-slate-900 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400 font-black uppercase">CURRENT MONTHLY INQUIRIES/LEADS</span>
                    <span className="text-brand-teal font-black">{currentLeadVolume} Leads</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="150" 
                    value={currentLeadVolume}
                    onChange={(e) => setCurrentLeadVolume(parseInt(e.target.value))}
                    className="w-full bg-[#05070a] h-1 rounded-full cursor-pointer accent-brand-teal"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-slate-600">
                    <span>5 MIN</span>
                    <span>150 MAX</span>
                  </div>
                </div>

                <div className="bg-[#0a0e17] p-4 rounded-xl border border-slate-900 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400 font-black uppercase">AVERAGE CONTRACT VALUE</span>
                    <span className="text-brand-orange font-black">${avgContractValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="5000" 
                    max="250000" 
                    step="5000"
                    value={avgContractValue}
                    onChange={(e) => setAvgContractValue(parseInt(e.target.value))}
                    className="w-full bg-[#05070a] h-1 rounded-full cursor-pointer accent-brand-orange"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-slate-600">
                    <span>$5,000 MIN</span>
                    <span>$250,000 MAX</span>
                  </div>
                </div>

                <div className="bg-[#0a0e17] p-4 rounded-xl border border-slate-900 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400 font-black uppercase font-mono">ESTIMATED VALUE LOCK CLOSING RATE</span>
                    <span className="text-brand-purple font-black">{closingRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="45" 
                    value={closingRate}
                    onChange={(e) => setClosingRate(parseInt(e.target.value))}
                    className="w-full bg-[#05070a] h-1 rounded-full cursor-pointer accent-brand-purple"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-slate-600">
                    <span>2% MIN</span>
                    <span>45% MAX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated box results */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 md:p-8 shadow-2xl space-y-5 text-left relative">
                <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-black block">AKGLS INDUSTRIAL CALCULATOR MATRIX</span>
                
                <div className="space-y-3.5">
                  <div className="bg-[#05070a] rounded-xl p-3.5 border border-slate-900/60 text-left">
                    <span className="text-[9px] font-mono text-slate-500 uppercase font-black">Estimated Monthly Leads Volume (Optimized)</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-black text-brand-teal">{expectedNewLeads} Leads/Mo</span>
                      <span className="text-[9.5px] font-mono bg-brand-teal/10 px-2 py-0.5 rounded text-brand-teal font-extrabold">2.8X PIPELINE IMPACT</span>
                    </div>
                  </div>

                  <div className="bg-[#05070a] rounded-xl p-3.5 border border-slate-900/60 text-left">
                    <span className="text-[9px] font-mono text-slate-500 uppercase font-black">Contract Deals Closed/Year (Optimized)</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-black text-white">{optimizedClosedDeals * 12} Closed Deals / Yr</span>
                      <span className="text-[9.5px] font-mono text-slate-400">Previous: {traditionalClosedDeals * 12} / Yr</span>
                    </div>
                  </div>

                  <div className="bg-[#05070a] rounded-xl p-4 border border-brand-teal/25 text-left bg-gradient-to-tr from-brand-teal/5 to-transparent">
                    <span className="text-[9.5px] font-mono text-brand-teal uppercase font-black">ADDITIONAL REVENUE LIFTOFF ESTIMATE</span>
                    <span className="text-3xl font-black font-display text-white mt-1.5 block">
                      +${(calculatedLiftoff * 12).toLocaleString()} / Yr
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1 font-light leading-relaxed">
                      This represents potential annual sales acceleration by converting targeted, high-intent procurement parameters instead of cold, low-weight generic channels.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a href="#manufacturing-audit-section" className="text-[10.5px] font-mono text-brand-orange uppercase font-black tracking-widest hover:underline block">
                    Verify Your Parameters with an expert →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📦 SERVICE PACKAGES SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-16">
            <span className="text-[10px] font-mono text-[#a855f7] uppercase tracking-widest font-black bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">CLEAR TRANSPARENT PRICING</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Flexible Manufacturing Marketing Packages
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              We provide structured retainer pricing built to suit different sizes of machine floors and industrial suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packageTiers.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#0a0e17] rounded-3xl p-6.5 border relative flex flex-col justify-between transition-all ${
                  pkg.featured 
                    ? 'border-brand-teal/60 bg-gradient-to-b from-[#0b1420]/80 to-[#070b12]' 
                    : 'border-slate-900 hover:border-slate-800'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 right-6 bg-brand-teal text-[#05070a] font-mono text-[9px] uppercase font-black px-3 py-1 rounded-full tracking-widest">
                    ⭐ POPULAR HIGH-REQ PROGRAM
                  </span>
                )}

                <div className="space-y-5">
                  <div className="border-b border-slate-900 pb-4">
                    <span className="text-sm font-black uppercase font-mono text-white tracking-wider block">{pkg.name}</span>
                    <span className="text-3xl font-black font-display text-brand-teal mt-2 block">{pkg.price}</span>
                    <p className="text-[#a0aec0] text-[11.5px] font-light leading-relaxed mt-2.5">
                      {pkg.ideal}
                    </p>
                  </div>

                  <div className="space-y-3 pb-6">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">Deliverables list</label>
                    {pkg.features.map((ft, ftIdx) => (
                      <div key={ftIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                        <span className="text-slate-400 font-light leading-normal">{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#manufacturing-audit-section"
                  className={`w-full text-center font-mono uppercase font-black tracking-widest text-[10.5px] py-3 rounded-xl block transition-all cursor-pointer ${
                    pkg.featured 
                      ? 'bg-brand-orange text-white hover:bg-opacity-95' 
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-900 border border-slate-900 hover:border-slate-800'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-bold">FAQS RESOLVED</span>
            <h2 className="text-2.5xl sm:text-3.5xl font-black font-display text-white">
              Sourcing FAQ
            </h2>
            <p className="text-slate-400 text-xs font-light">
              Clear, practical answers regarding B2B industrial search discoverability.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] rounded-xl border border-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-black font-display uppercase text-white hover:text-brand-teal transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaqIdx === idx ? 'rotate-180 text-brand-teal' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openFaqIdx === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-1 border-t border-slate-900/60 text-[12.5px] text-[#a0aec0] font-light leading-relaxed">
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

      {/* 📋 DYNAMIC AUDIT SCANNER SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950" id="manufacturing-audit-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">COMPLIMENTARY ASSESSMENT TOOL</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Request a Free B2B Industrial Audit
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Provide your basic factory parameters and let our custom crawler analyze your indexing potential, ChatGPT entity coordinates, schema health, and competitor ranking gaps.
              </p>

              <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900 space-y-4">
                <span className="text-[10.5px] font-mono text-brand-orange uppercase font-black block">What the Audit Evaluates:</span>
                
                <div className="space-y-3 text-xs">
                  <div className="flex gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-300 font-bold block">1. Technical B2B SEO Bottlenecks</span>
                      <p className="text-slate-500 leading-normal">Checking robots configuration, product indexing, and speed anomalies.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-300 font-bold block">2. Conversational LLM GEO Rank</span>
                      <p className="text-slate-500 leading-normal">Evaluating how ChatGPT and Gemini interpret your entity records.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-300 font-bold block">3. High-Intent Keyword Gap Analysis</span>
                      <p className="text-slate-500 leading-normal">Finding specific high-value part numbers and wholesale queries you lack.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Form Interactive scanner UI */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 md:p-8 shadow-2xl relative">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-black block mb-4">SECURE MANUFACTURING INQUIRY HUB</span>
                
                {scanStatus === 'idle' ? (
                  <form onSubmit={triggerAuditScan} className="space-y-4 text-xs font-mono">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Company Name *</label>
                        <input 
                          type="text" 
                          required
                          value={auditForm.companyName}
                          onChange={(e) => setAuditForm({ ...auditForm, companyName: e.target.value })}
                          className="w-full bg-[#05070a] border border-slate-900 rounded-lg py-2.5 px-3 text-white focus:outline-none focus:border-brand-teal"
                          placeholder="e.g., Delta Transformer Corp"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Company Website URL</label>
                        <input 
                          type="url" 
                          value={auditForm.websiteUrl}
                          onChange={(e) => setAuditForm({ ...auditForm, websiteUrl: e.target.value })}
                          className="w-full bg-[#05070a] border border-slate-900 rounded-lg py-2.5 px-3 text-white focus:outline-none focus:border-brand-teal"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Industry Vertical</label>
                        <select
                          value={auditForm.industryType}
                          onChange={(e) => setAuditForm({ ...auditForm, industryType: e.target.value })}
                          className="w-full bg-[#05070a] border border-slate-900 rounded-lg py-2.5 px-3 text-slate-300 focus:outline-none focus:border-brand-teal"
                        >
                          <option>Industrial Automation</option>
                          <option>Transformer Manufacturing</option>
                          <option>Electronics/PCB Assembly</option>
                          <option>Machinery & Stampings</option>
                          <option>Chemical/Materials Process</option>
                          <option>Medical Device supplier</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Key Products/Services</label>
                        <input 
                          type="text" 
                          value={auditForm.productsServices}
                          onChange={(e) => setAuditForm({ ...auditForm, productsServices: e.target.value })}
                          className="w-full bg-[#05070a] border border-slate-900 rounded-lg py-2.5 px-3 text-white focus:outline-none focus:border-brand-teal"
                          placeholder="e.g., HV dry-type coils"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Procurement contact email *</label>
                        <input 
                          type="email" 
                          required
                          value={auditForm.email}
                          onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                          className="w-full bg-[#05070a] border border-slate-900 rounded-lg py-2.5 px-3 text-white focus:outline-none focus:border-brand-teal"
                          placeholder="john@delta-co.com"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          value={auditForm.phone}
                          onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                          className="w-full bg-[#05070a] border border-slate-900 rounded-lg py-2.5 px-3 text-white focus:outline-none focus:border-brand-teal"
                          placeholder="+1 (315) 555-0192"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 text-left text-[11px] text-slate-500 font-sans leading-normal">
                      <input 
                        type="checkbox" 
                        id="form-agreed" 
                        required
                        checked={auditForm.agreed} 
                        onChange={(e) => setAuditForm({ ...auditForm, agreed: e.target.checked })}
                        className="mt-0.5 rounded border-slate-900 focus:ring-brand-teal text-brand-teal focus:ring-0 cursor-pointer"
                      />
                      <label htmlFor="form-agreed" className="cursor-pointer">
                        I authorize AKGLS digital engineers to temporarily crawl my public website catalog schemas to generate an analytical report index.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-mono uppercase font-black tracking-widest text-[11px] py-3 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2"
                    >
                      <Layers className="w-4 h-4" />
                      Generate Free Sourcing Audit Now
                    </button>
                  </form>
                ) : scanStatus === 'running' ? (
                  <div className="py-12 text-center text-xs space-y-4 font-mono">
                    <div className="w-16 h-16 rounded-full border-4 border-slate-900 border-t-brand-teal animate-spin mx-auto" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-black block">SYSTEM SCANNING INDEX: {scanProgress}%</span>
                      <span className="text-white block mt-1.5">{scanLogMessage}</span>
                    </div>

                    <div className="w-full bg-[#05070a] h-2 rounded-full overflow-hidden max-w-sm mx-auto">
                      <div className="bg-brand-teal h-full transition-all duration-350" style={{ width: `${scanProgress}%` }} />
                    </div>
                  </div>
                ) : (
                  <div className="py-10 text-center text-xs space-y-4 font-mono text-left">
                    <CheckCircle className="w-12 h-12 text-brand-teal mx-auto animate-bounce" />
                    <div className="space-y-1">
                      <span className="text-sm font-black text-white block uppercase tracking-tight">CRAWL METRICS RECORDED & COMPLETED!</span>
                      <p className="text-slate-400 font-sans leading-relaxed text-[12px] pt-1">
                        We have compiled a baseline index representing domain authority checkpoints, CAD catalogue crawl limits, ChatGPT citations score, and organic ranking opportunities for **{auditForm.companyName}**.
                      </p>
                    </div>

                    <div className="bg-[#05070a] border border-slate-950 p-4 rounded-xl space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Target Segment Sourcing Rank:</span>
                        <span className="text-yellow-400">UNRESTRICTED CITATION DEFICIT DETECTED</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Estimated Sourcing Loss Ratio:</span>
                        <span className="text-red-400 font-extrabold">-58% Inquiries Drift</span>
                      </div>
                    </div>

                    <p className="text-slate-400 font-sans text-center text-[12px]">
                      Our senior industrial consultant is hosting a strategy desk session. We have dispatched a confirmation calendar invite to **{auditForm.email}**.
                    </p>

                    <div className="flex gap-2 pt-2 justify-center">
                      <button 
                        onClick={() => setScanStatus('idle')}
                        className="bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px] py-1.5 px-4 rounded-lg uppercase"
                      >
                        ← Reset Scanner
                      </button>
                      <a 
                        href={`https://wa.me/918318114492?text=Hi+AKGLS+Group+I+just+completed+the+Manufacturing+Audit+for+${encodeURIComponent(auditForm.companyName)}`}
                        className="bg-emerald-600 text-white font-mono text-[10px] py-1.5 px-4 rounded-lg uppercase flex items-center gap-1"
                        target="_blank"
                        referrerPolicy="no-referrer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> Speak via WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📄 SUGGESTED BLOG SECTION */}
      <section className="bg-[#080b11] py-16 text-left border-b border-[#05070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2.5xl sm:text-3.5xl font-black font-display text-white">
              Industrial Sourcing Strategy Guides
            </h2>
            <p className="text-slate-400 text-xs font-light">
              Read professional articles designed specifically to align floor operations with modern B2B indexing metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {[
              { t: "Industrial SEO Guide: Maximizing Catalog Crawl Budgets", cat: "TECHNICAL SEO" },
              { t: "B2B Lead Generation: Form Structures that Drive Clean specs sheets", cat: "CONVERSION OPTIMIZATION" },
              { t: "ChatGPT Search GEO: Securing High-Priority citation blocks in LLMs", cat: "AI OPTIMIZATION" }
            ].map((art, idx) => (
              <div key={idx} className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900 space-y-4">
                <span className="text-[10px] font-mono text-brand-teal font-black uppercase tracking-widest block bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded w-fit leading-none">
                  {art.cat}
                </span>
                <h4 className="text-sm font-black font-display text-white tracking-tight leading-snug">{art.t}</h4>
                <p className="text-slate-500 font-sans leading-relaxed text-[11.5px]">
                  Learn the specific structural steps our digital engineers use to index complex custom stamping, machinery catalogs, and aerospace systems into search hubs correctly.
                </p>
                <a href="#manufacturing-audit-section" className="text-[10px] text-slate-300 font-mono font-black uppercase tracking-wider block hover:underline pt-2">
                  READ CASE ARTICLE →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🧾 FINAL COLLATERAL CTA SECTION */}
      <section className="relative py-24 text-left bg-gradient-to-tr from-[#05070a] to-[#0d1421] text-white overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
            <span>Facility Activation Ready</span>
          </div>

          <h2 className="text-3xl sm:text-4.5xl md:text-5xl font-black font-display leading-tight text-white">
            Ready to Accelerate Your Sourcing Pipelines?
          </h2>

          <p className="text-slate-300 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Configure secure, compliant, high-intent indexing networks with the market's leading specialized B2B digital marketing engineers.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a 
              href="#manufacturing-audit-section"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-mono font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all shadow-md"
            >
              Book Complimentary Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-emerald-600 hover:bg-opacity-95 text-white font-mono font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" /> Chat With Industrial Specialist
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-5 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">✓ B2B Marketing Experts</span>
            <span className="flex items-center gap-1.5">✓ Transparent Reporting Nodes</span>
            <span className="flex items-center gap-1.5">✓ High ROAS Target Audits</span>
          </div>
        </div>
      </section>
    </>
  );
}

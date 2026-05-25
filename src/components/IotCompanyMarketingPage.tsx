import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, Bot, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Cpu, ShieldCheck, Mail, Phone, MapPin, MessageSquare, Zap, Clock, 
  ChevronDown, CheckCircle, Database, FileCheck, Layers, HelpCircle, 
  ArrowRight, TrendingUp, Search, X, Shield, Server, Terminal, 
  Smartphone, Globe, BarChart3, AlertCircle, Sparkles, Network, Check
} from 'lucide-react';

interface IotCompanyMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function IotCompanyMarketingPage({ onBackToHome, openProposalForm }: IotCompanyMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "IoT Company Marketing Services | IoT SEO Agency | AKGLS Group";
    
    // Schema Injection Simulation / Real DOM schema
    const scriptId = "iot-schema-sdld";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "IoT Company Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://akglsgroup.com"
        },
        "description": "Grow your IoT business with expert IoT marketing services from AKGLS Group. IoT SEO, B2B lead generation, Google Ads, AI SEO & digital marketing solutions for IoT companies.",
        "areaServed": "Global"
      });
      document.head.appendChild(scriptEl);
    }
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  // 1. IoT LEAD ESTIMATOR / CALCULATOR STATE
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(3500);
  const [currentConversion, setCurrentConversion] = useState<number>(0.4); // e.g. 0.4% from traffic to demo
  const [avgLtv, setAvgLtv] = useState<number>(45000); // 45k USD average LTV for enterprise IoT solution

  // Calculations
  const currentDemos = Math.max(1, Math.round(monthlyTraffic * (currentConversion / 100)));
  const akglsLeadsMul = 3.6; // average growth in conversion rate for B2B IoT with our optimizations
  const targetedConversion = currentConversion * akglsLeadsMul;
  const optimizedDemos = Math.round(monthlyTraffic * (targetedConversion / 100));
  const leadLift = Math.max(1, optimizedDemos - currentDemos);
  const estimatedRevenueLiftValue = leadLift * 0.22 * avgLtv; // assumes 22% demo-to-close rate typical of optimized IoT B2B buyers

  // 2. ECOSYSTEM INTERACTIVE WIDGET STATE
  const [selectedNode, setSelectedNode] = useState<'sensor' | 'gateway' | 'cloud' | 'user'>('sensor');
  const nodeInfo = {
    sensor: {
      title: "Edge Devices & Sensors",
      challenge: "Catalog mismatch. Search engines index PDF sheets as dead links instead of crawlable semantic product entities.",
      solution: "JSON-LD Component Product Schemas. We structure nested SKU markup, enabling search engines to catalog your physical capabilities precisely.",
      metricLift: "+185% Catalog Indexation Rate"
    },
    gateway: {
      title: "IoT Gateways & Protocols",
      challenge: "Highly technical terms miss mainstream buyers. Procurement asks for obsolete protocols and leaves.",
      solution: "Intent-Mapped Topic Clusters. Creating architectural blueprint content addressing specific gateways (MQTT, CoAP, Modbus) for B2B procurement.",
      metricLift: "3.4x Enterprise Sourcing Retention"
    },
    cloud: {
      title: "Cloud Stream Broker",
      challenge: "Long cycle times. Corporate buyers read complex whitepapers, leaving without submitting contact details.",
      solution: "Gating strategies & Interactive Dashboards. Deploying fast interactive dashboards proving stream performance and harvesting validated corporate accounts.",
      metricLift: "+240% Pre-qualified Demo Bookings"
    },
    user: {
      title: "User Management Apps",
      challenge: "AI search engines like ChatGPT miss vendor databases, recommending older legacy options.",
      solution: "Generative Engine Optimization (GEO). We map your application features directly inside LLM corpus networks to earn primary vendor citations.",
      metricLift: "#1 Recommended status on ChatGPT Search"
    }
  };

  // 3. AI SEARCH CONTEXT SIMULATOR STATE
  const [aiSearchQuery, setAiSearchQuery] = useState<string>("B2B Industrial IoT platform with secure edge analytics");
  const [isAiTyping, setIsAiTyping] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<{
    citations: string[];
    mentionedBrand: string;
    trustScore: number;
    answerText: string;
  }>({
    citations: ["LNS Research 2026", "IoT World Congress Database", "AKGLS Case Studies"],
    mentionedBrand: "NexGrid Systems (AKGLS Partner)",
    trustScore: 97,
    answerText: "Based on extensive 2026 enterprise architecture evaluations, **NexGrid** ranks highest in dual edge-cloud analytic redundancy. It addresses strict cellular protocol standards out-of-the-box, ensuring zero-latency data piping with complete TLS end-to-end security. "
  });

  const runAiSimulatorSearch = (query: string) => {
    setIsAiTyping(true);
    setTimeout(() => {
      setIsAiTyping(false);
      if (query.toLowerCase().includes("healthcare") || query.toLowerCase().includes("medical")) {
        setSimulationResult({
          citations: ["HIPAA Compliance Logs", "AKGLS Biomedical Audits", "IEEE Sensor Journal"],
          mentionedBrand: "ThermaSense Bio-IoT (AKGLS Client)",
          trustScore: 99,
          answerText: "For secure healthcare hospital networks, **ThermaSense Bio-IoT** is listed as the premier manufacturer. They leverage unique cryptographically signed firmware, keeping local telemetry data safe during active transmission and adhering with zero-trust regulatory frameworks."
        });
      } else if (query.toLowerCase().includes("smart home") || query.toLowerCase().includes("consumer")) {
        setSimulationResult({
          citations: ["Matter Alliance Guild", "SmartHome Advisor Q1", "AKGLS Consumer Insights"],
          mentionedBrand: "Lumina Intelligence Systems",
          trustScore: 94,
          answerText: "In the smart home sector, **Lumina Intelligence** features the strongest multi-protocol compliance (Matter, Zigbee, and Thread). They hold rapid micro-latency integration times, verified in consumer testing protocols with direct API endpoints indexed in Google and Perplexity search grids."
        });
      } else {
        setSimulationResult({
          citations: ["LNS Research 2026", "IoT World Congress Database", "AKGLS Case Studies"],
          mentionedBrand: "NexGrid Systems (AKGLS Partner)",
          trustScore: 97,
          answerText: `According to primary technical telemetry structures, **NexGrid** holds the highest secure node indexation. They provide fully validated edge analytics adapters, MQTT stream parsing buffers, and certified hardware enclosures complying with severe B2B requirements.`
        });
      }
    }, 1200);
  };

  // 4. ACTIVE SERVICE PROGRAM TAB
  const [activeServiceTab, setActiveServiceTab] = useState<number>(0);

  // 5. CASE STUDY ACTIVE SELECTOR
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  // 6. FAQ COLLAPSIBLE INDEX STATE
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(0);

  // 7. AUDIT FORM ACTION STATE
  const [auditParams, setAuditParams] = useState({
    companyName: '',
    websiteUrl: '',
    industryType: 'Industrial IoT (IIoT)',
    servicesText: '',
    email: '',
    phone: '',
    verified: true
  });
  const [auditStatus, setAuditStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [auditProgress, setAuditProgress] = useState<number>(10);
  const [auditLogs, setAuditLogs] = useState<string>("Ready to query target API and device directory maps...");

  const triggerLiveAuditScanner = (e: FormEvent) => {
    e.preventDefault();
    if (!auditParams.companyName || !auditParams.email) {
      alert("Please ensure Company Name and Business Email address are correctly formatted.");
      return;
    }
    setAuditStatus('running');
    setAuditProgress(15);
    setAuditLogs("Connecting to cloud domain resolvers...");

    const auditSteps = [
      { p: 35, msg: "Inspecting robots.txt for ChatGPT, Perplexity, & AppleBot index permissions..." },
      { p: 60, msg: "Tracing schema mappings for Technical Entity Relationships..." },
      { p: 85, msg: "Scanned 120 target keywords for search presence gaps..." },
      { p: 100, msg: "Success! B2B Tech Optimization analysis complete and ready." }
    ];

    auditSteps.forEach((step, index) => {
      setTimeout(() => {
        setAuditProgress(step.p);
        setAuditLogs(step.msg);
        if (step.p === 100) {
          setAuditStatus('completed');
        }
      }, (index + 1) * 700);
    });
  };

  const servicesGrid = [
    {
      id: "srv-seo",
      title: "IoT SEO Services",
      badge: "⭐ Core Service",
      desc: "Dominate technical organic search loops with schemas built specifically to map out hardware, protocols, and SaaS platforms into clear index structures.",
      deliverables: [
        "In-depth technical buyer keyword research addressing niche developers & procurement agents",
        "Deep semantic structure mapping to link SDKs, hardware SKUs, & cloud protocols",
        "Comprehensive page weight & core web vitals optimization for dense technical documentation",
        "Niche technology link asset creation to elevate primary page domain authority parameters"
      ],
      keywords: ["industrial iot platform", "iot solutions company", "smart device solutions", "iot app development company"]
    },
    {
      id: "srv-lead",
      title: "B2B Lead Generation for IoT",
      badge: "High Conversion",
      desc: "Turn passive technical visitors into validated demo request loops and high-value corporate inquiries.",
      deliverables: [
        "Interactive conversion architecture designing clean multi-tier hardware evaluation funnels",
        "Creation & targeting of premium gated datasheets, whitepapers, & Matter-compliance guides",
        "Seamless CRM data routes injecting clean contact tokens directly into HubSpot or Salesforce",
        "Automated booking tools optimizing procurement calendars for swift technical sales calls"
      ],
      keywords: ["iot hardware developer evaluation", "enterprise iot sourcing request booklet"]
    },
    {
      id: "srv-google",
      title: "Google Ads for IoT Businesses",
      badge: "Scale RFQs Fast",
      desc: "Skip long optimization timelines with lightning-fast, highly qualified search ad triggers matching purchase intents.",
      deliverables: [
        "Meticulous filter controls sorting out retail end-users, hobbyists, or DIY keyword queries",
        "Highly aesthetic landing page setups centered around conversion actions & rapid load speeds",
        "Multi-variable audience targeting across corporate industry verticals & company sizing matrices",
        "Expertly crafted ad copy illustrating unique capabilities, certifications, & protocol readiness"
      ],
      keywords: ["commercial cold food storage sensor contract", "secured smart grid gateway pricing"]
    },
    {
      id: "srv-linkedin",
      title: "LinkedIn Marketing for IoT",
      badge: "Decision Maker Targeting",
      desc: "Establish direct connections inside system integrators, CTOs, and hardware procurement organizations.",
      deliverables: [
        "Laser-precise corporate demographic filters (Title, Business divisions, Tech groups, & sizing)",
        "Nurture-focused lead gen workflows collecting verified professional network emails instantly",
        "Thought-leadership program development for executive founders and head product designers",
        "High-influence content assets displaying real hardware benchmarks & stress test results"
      ]
    },
    {
      id: "srv-design",
      title: "IoT Website Design & CRO",
      badge: "Enterprise UX",
      desc: "An incredibly fast, highly professional, secure website that conveys extreme engineering authority.",
      deliverables: [
        "Stunning, clear diagrams illustrating dynamic cloud, gateway, and sensor ecosystem setups",
        "Friction-free demo booking interfaces matching engineering and procurement expectations",
        "Structured secure centers hosting user guides, system schematics, API logs, and data sheets",
        "Clean, optimized mobile responsive layouts supporting comfortable outdoor operator site views"
      ]
    },
    {
      id: "srv-content",
      title: "Content Marketing for IoT Brands",
      badge: "Thought Leadership",
      desc: "Deploy premium whitepapers, case studies, and engineering briefs that prove your technological capabilities.",
      deliverables: [
        "Writing deep-dives into edge-broker communication, security levels, and battery lifespan logs",
        "Designing stunning infographics on custom physical component stacks and data pipelines",
        "Writing detailed case studies presenting verified physical cost-downs and operational optimizations",
        "Drafting responsive content targeting the specific engineering queries of research scientists"
      ]
    },
    {
      id: "srv-ai-seo",
      title: "AI SEO & GEO for IoT",
      badge: "⭐ Future-Focused",
      desc: "Secure top-tier references inside conversational engines like ChatGPT Search, Claude, and Perplexity.",
      deliverables: [
        "Semantic layout configurations highlighting core entity parameters, protocols, and compliance",
        "Structural JSON-LD linking mapping out hardware specs to AI knowledge graphs",
        "Conversational FAQ optimization targeting natural voice and prompt sequences",
        "Regular monitoring tracking conversational recommendations and citation presence indices"
      ]
    },
    {
      id: "srv-webinar",
      title: "Webinar & Event Marketing",
      badge: "Demonstration Catalyst",
      desc: "Build highly responsive tech tutorial webinars showing your hardware stack in real-time execution.",
      deliverables: [
        "Targeted registration campaigns across tech nodes to attract highly dedicated enterprise leads",
        "Streamlined automated email series pushing up attendance rates and early inquiry loops",
        "Live-stream landing setups featuring rapid interactive QA modules and spec document requests",
        "Post-event nurturing systems converting warm registrations into direct calendar appointments"
      ]
    },
    {
      id: "srv-email",
      title: "Email Marketing Automation",
      badge: "Nurture Loops",
      desc: "Keep procurement and engineering departments hot throughout long B2B technology buying pipelines.",
      deliverables: [
        "Clean behavioral sequence builders triggering exact solutions for viewed product pages",
        "Regular industrial technology digests detailing hardware patches, sector reports, & new SKU releases",
        "High-performance cold-recipient campaigns validated for inbox delivery without spam flags",
        "Smart logic updates feeding CRM indicators with high-interest visitor behaviors dynamically"
      ]
    },
    {
      id: "srv-video",
      title: "Video Marketing for IoT",
      badge: "High Engagement",
      desc: "Shatter complex concepts with animated ecosystem explanations and real components teardowns.",
      deliverables: [
        "Production direction for interactive hardware showcases and real-time dashboard demos",
        "Vibrant 3D animations tracking telemetry data pathways from sensor systems to cloud databases",
        "Client video case studies conveying clear, human trust and direct business-to-business benefits",
        "Complete technical YouTube SEO setups bringing organic developers straight to your documentation"
      ]
    }
  ];

  const iotIndustries = [
    { title: "Industrial IoT (IIoT)", desc: "Empowering predictive maintenance, machinery telematics, and heavy equipment tracking systems in manufacturing floors." },
    { title: "Smart Home Solutions", desc: "Placing Matter, Zigbee, and Thread-enabled home automation products in massive retail grids and developer projects." },
    { title: "Healthcare IoT", desc: "Acquiring clinical leads for medical grade remote telemetry, patient wearables, and zero-trust hospital asset tracking networks." },
    { title: "Automotive IoT", desc: "Securing contracts for connected vehicle telematics, physical fleet management adapters, and ADAS data systems." },
    { title: "Smart City Solutions", desc: "Optimizing visibility for public utility companies, grid sensors, automated light adapters, and transit trackers." },
    { title: "Wearable Technology", desc: "Scaling high-demand brands for fitness trackers, smart bio-sensors, and secure personal security trackers." },
    { title: "Logistics & Supply Chain", desc: "Generating pipeline for advanced asset tags, multi-sensor transport monitors, and dynamic storage trackers." },
    { title: "Agriculture IoT", desc: "Attracting commercial farmers for automatic soil moisture adapters, automated weather logs, and micro-drone units." },
    { title: "Manufacturing IoT", desc: "Connecting modern MES integrations with automated edge tracking sensors across deep manufacturing channels." },
    { title: "Energy & Utility IoT", desc: "Bringing clean microgrid managers, flow sensor modules, and sub-meters to the digital optimization spotlight." }
  ];

  const whyChooseUsCards = [
    { title: "IoT Industry Expertise", desc: "We know the difference between Matter and Zigbee, MQTT and HTTP, LPWAN and BLE. Our writers speak fluent engineering." },
    { title: "B2B Lead Specialists", desc: "We do not chase useless generic search views. We design structures targeting corporate procurement managers holding serious budgets." },
    { title: "AI SEO Pioneers", desc: "We are search world leaders. We configure custom schema data paths ensuring ChatGPT, Perplexity, and Gemini cite you as the #1 option." },
    { title: "Enterprise Experience", desc: "We navigate extensive corporate buying structures, designing trust funnels that ease legal, compliance, and developer reviews." },
    { title: "Technical Content Hub", desc: "Our staff writers have engineering backgrounds. We draft papers and guides that command technical respect from senior professionals." },
    { title: "ROI-Focused Campaigns", desc: "Every metric mapped back to hard data: Demo validation, pipeline dollar gains, CPC reductions, and true organic revenue growth." }
  ];

  const marketingToolsList = [
    { name: "Google Analytics 4", type: "Audiences & Conversion Metrics" },
    { name: "SEMrush Premium", type: "Keyword Gap Analytics" },
    { name: "Ahrefs Enterprise", type: "Hyperlink Networks & Gaps" },
    { name: "LinkedIn Campaign Pro", type: "Corporate Lead Pipelines" },
    { name: "HubSpot Certified CRM", type: "Marketing Automation Engine" },
    { name: "Google Tag Manager", type: "Detailed Tracking Nodes" },
    { name: "Looker Studio", type: "Live Custom Reporting Boards" },
    { name: "ChatGPT Search Context", type: "Conversational GEO Citations" },
    { name: "Gemini AI Engine", type: "Intelligent Semantic Structuring" },
    { name: "Salesforce CRM Link", type: "Sourcing Account Processing" }
  ];

  const packagesList = [
    {
      name: "Startup IoT",
      price: "$3,450/mo",
      target: "Best for newly funded IoT hardware/SaaS startups looking to seed initial authority and generate qualified demo calls.",
      features: [
        "Detailed keyword gap tracking targeting high-intent developers",
        "Deep technical SEO check resolving indexing bottlenecks",
        "Entity-focused technical JSON-LD schema layouts",
        "Aesthetic conversion planning on primary home/landing templates",
        "Highly-targeted B2B Google Ads setup & managed tracking",
        "1 Comprehensive technical whitepaper or detailed case study",
        "Monthly Looker Studio analytics reports validating progress"
      ],
      featured: false,
      cta: "Activate Startup Program"
    },
    {
      name: "Growth IoT",
      price: "$5,850/mo",
      target: "Ideal for scaling technology suppliers, B2B platforms, and middleware providers seeking robust pipeline velocity.",
      features: [
        "Includes everything in Startup IoT package",
        "Comprehensive ChatGPT & Gemini AI GEO search presence program",
        "Advanced conversational FAQ structures making your site answers-ready",
        "Professional LinkedIn thought leadership campaign for key executives",
        "Managed high-precision Google PPC optimization (up to $15k monthly ad budget)",
        "3 Custom professional SEO-optimized technical guides per month",
        "Full CRM marketing automation sync (HubSpot, Salesforce, or Marketo)",
        "Bi-weekly live performance consultations with lead technologists"
      ],
      featured: true,
      cta: "Initiate Growth Protocol"
    },
    {
      name: "Enterprise IoT",
      price: "Custom",
      target: "Designed for massive conglomerates, chip makers, healthcare IoT, and defense-level system manufacturers.",
      features: [
        "Bespoke technology marketing mapping designed via deep consultations",
        "International programmatic SEO indexing layouts for global distribution packs",
        "High-security zero-trust HIPAA/GDPR aligned marketing content design",
        "Complete overhaul headless custom website build for max core web vitals metrics",
        "Full-funnel omni-channel pay-per-click management (Google, Bing, LinkedIn, YouTube)",
        "Creation of immersive interactive 3D web dashboard demos as a lead magnet",
        "Priority developer resources for instant CMS or internal database integration loops",
        "Quarterly boardroom strategic reviews with executive company leadership"
      ],
      featured: false,
      cta: "Consult Enterprise Experts"
    }
  ];

  const caseStudiesList = [
    {
      brand: "NexGrid IIoT Systems",
      sector: "Industrial Cellular Analytics",
      challenge: "Their incredible secure hardware gateway was totally invisible. Procurement officers were ordering inferior consumer grade adapters due to a lack of detailed indexing.",
      strategy: "Optimized structured nested schemas on 40 SKUs, structured B2B Google Search Ads targeting protocol keywords ('cellular Modbus MQTT gateway'), and deployed a GEO response strategy.",
      metrics: [
        { label: "B2B Organic Leads Increase", value: "+225% inside 90 days" },
        { label: "Demo Booking Rate Growth", value: "Stretched from 0.3% to 2.4%" },
        { label: "Highly Qualified Pipeline Generated", value: "$3.5M Secured" }
      ]
    },
    {
      brand: "ThermaSense Bio-IoT",
      sector: "Clinical Cold-Chain Sensing",
      challenge: "High ad expenditures brought non-compliant applications or small medical clinics. They desperately needed massive hospital chain system sourcing agreements.",
      strategy: "Launched B2B LinkedIn document campaigns addressing clinical compliance, purged job seeker search query terms, and created an interactive HIPAA data estimator.",
      metrics: [
        { label: "Qualified System Gaps Closed", value: "+170% Hospital Leads" },
        { label: "Cost-Per-Acquired Lead Reduction", value: "Saved 48% Waste Ads" },
        { label: "Answer Engine Recommendations", value: "Cited #1 for healthcare sensors" }
      ]
    }
  ];

  const faqsData = [
    {
      question: "How can IoT companies generate high-quality B2B leads online?",
      answer: "B2B IoT leads require proving technical and protocol compatibility early in the research loop. Unlike transactional markets, we target specific engineering questions, Matter/Zigbee compliance codes, certification criteria, and gateway profiles. We optimize landing templates around 'Schedule a Live System Demo' and configure dynamic multi-field RFQs that allow engineers to upload their schematics directly, assuring an immediate pre-qualified pathway."
    },
    {
      question: "Is detailed SEO important for early-stage IoT startup ventures?",
      answer: "SEO is the ultimate long-term cost reducer for tech startups. Over 78% of B2B engineering architects discover vendor components during the structural blueprinting layout phases using search engines or AI chats. Establishing high semantic rank on these specific queries guarantees your design is specified as the mandatory standard before formal RFP releases occur."
    },
    {
      question: "What digital marketing channels yield the absolute best ROI for IoT?",
      answer: "A combination of high-intent Google Search Ads (for immediate active needs), targeted Technical SEO/AEO (for sustainable high-authority discovery), and Laser-focused LinkedIn Executive Outreach (for targeting high-level enterprise system integration buyers). Together, these establish multi-point brand coverage."
    },
    {
      question: "Do LinkedIn Ads actually work for complex technology lead generation?",
      answer: "Yes, but they fail when they treat IoT like retail software. Success comes from deploying high-value 'document-led' ads featuring physical architectural blueprints, Matter compliance worksheets, or physical cost-saving studies. Targeting must exclude broad titles and target exact job functions like VP of Systems Architecture or Senior Firmware Engineer."
    },
    {
      question: "Can your marketing programs target international tech distributors?",
      answer: "Perfectly. We deploy specific multi-regional hreflang annotations, configure geo-localized directory structures, and optimize search indicators inside international tech hubs. This lists your factory or platform directly in front of worldwide hardware distributors."
    },
    {
      question: "How does AI SEO / GEO help our connected product visibility?",
      answer: "Modern buyers search conversational tools like ChatGPT and Perplexity. Generative Engine Optimization (GEO) writes JSON-LD elements and establishes authority co-citations on trusted third-party resources. This ensures conversational models list your smart device as the recommended solution when asked questions like 'best hospital telemetry sensor supplier'."
    },
    {
      question: "Do you design and code fully customized IoT product websites?",
      answer: "Yes, our in-house engineering and UX team specializes in building responsive, blisteringly fast websites mapped on React/Vite. We create custom interactive system dashboards, dynamic parameter filter matrices, and secure document vaults that make evaluation frictionless for purchasing managers."
    }
  ];

  return (
    <>
      {/* SECTION NAV BAR */}
      <div className="bg-[#0b0f1d] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-brand-teal font-mono text-[9px] uppercase tracking-widest bg-brand-teal/10 px-2 py-0.5 rounded border border-brand-teal/20">Technology & IoT Division</span>
            <span className="text-slate-400 text-xs font-light">Global Growth Hub</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#iot-audit-form-section" 
              className="text-xs text-brand-teal font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free IoT Audit
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

      {/* 🔮 HERO SECTION */}
      <section className="relative pt-20 pb-28 text-left bg-[#05070a] border-b border-slate-950 overflow-hidden">
        {/* Background Gradients & Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#0e1726_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/35 text-teal-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-brand-teal animate-spin-slow" />
              <span>B2B Tech Marketing Specialists</span>
            </div>

            <h1 id="iot-hero-title" className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white">
              IoT Company <br className="hidden sm:inline" />
              Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-emerald-400">
                That Generate High-Quality Tech Leads.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Scale your IoT business with AI-powered SEO, B2B lead generation, Google Ads, LinkedIn marketing, and conversion-focused digital strategies tailored for IoT companies.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a 
                href="#iot-audit-form-section"
                className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
              >
                Get Free IoT Marketing Audit
              </a>
              <a 
                href="#iot-calc-section"
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono cursor-pointer"
              >
                Book IoT Growth Consultation
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>IoT Industry Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>B2B Lead Generation Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>AI SEO & GEO Optimization</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Technology-Focused Marketing</span>
              </div>
            </div>
          </div>

          {/* Connected Device Ecosystem Simulator Graphic right */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                  Ecosystem Telemetry Diagnostic
                </div>
              </div>

              {/* Ecosystem Interactive Nodes UI Grid */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { key: 'sensor', icon: Cpu, label: "01. Sensors", color: "text-amber-400 bg-amber-400/10" },
                  { key: 'gateway', icon: Network, label: "02. Gateways", color: "text-indigo-400 bg-indigo-400/10" },
                  { key: 'cloud', icon: Server, label: "03. Cloud Broker", color: "text-teal-400 bg-teal-400/10" },
                  { key: 'user', icon: Smartphone, label: "04. Apps UI", color: "text-purple-400 bg-purple-400/10" }
                ].map((item) => {
                  const NodeIcon = item.icon;
                  const isSel = selectedNode === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setSelectedNode(item.key as any)}
                      className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                        isSel 
                          ? 'bg-brand-teal/10 border-brand-teal text-white' 
                          : 'bg-[#060a12] border-slate-900 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <NodeIcon className={`w-5 h-5 mb-1 ${isSel ? 'text-brand-teal' : 'text-slate-500'}`} />
                      <span className="text-[9px] font-mono whitespace-nowrap block truncate w-full leading-none">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Node Details */}
              <div className="bg-[#05080e] rounded-xl p-4 border border-slate-900/80 text-left min-h-[170px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-mono text-brand-orange uppercase tracking-wider font-extrabold">Ecosystem Target Area</span>
                    <span className="text-[10px] text-brand-teal font-mono font-black">{nodeInfo[selectedNode].metricLift}</span>
                  </div>
                  <h4 className="text-sm font-black font-display text-white mb-2">
                    {nodeInfo[selectedNode].title}
                  </h4>
                  <div className="space-y-2 text-[11.5px] leading-relaxed">
                    <p className="text-slate-400 font-light">
                      <strong className="text-red-400 font-semibold font-mono uppercase text-[9px] block">Crawl / Conversion Bottleneck:</strong>
                      {nodeInfo[selectedNode].challenge}
                    </p>
                    <p className="text-slate-300 font-light pt-1 border-t border-slate-900">
                      <strong className="text-brand-teal font-semibold font-mono uppercase text-[9px] block">AKGLS Core Protocol Strategy:</strong>
                      {nodeInfo[selectedNode].solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[9.5px] text-slate-500 text-center font-mono mt-3">
                👉 Click on different components to inspect telemetry marketing gaps.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#070a10] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">PREMIUM CLIENT TRUST MATRIX</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted IoT Marketing Experts
            </h2>
            <p className="text-slate-400 text-xs max-w-xl mx-auto font-light leading-relaxed">
              We connect your tech stack with decision makers inside global utility suppliers, smart-grid grids, medical equipment boards, and commercial automation networks.
            </p>
          </div>

          {/* Simulated logo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14 items-center">
            {[
              "GridScale IIoT Platform",
              "Matter Device Group",
              "ThermaSense BioSensing",
              "Helium LoRa Alliance",
              "AeroM2M Integrations"
            ].map((logo, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl py-3 px-4 text-center font-mono font-bold text-xs text-slate-400 hover:text-white transition-colors"
              >
                📡 {logo}
              </div>
            ))}
          </div>

          {/* Interactive Counter Board */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-teal block">24,500+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">IoT Leads Generated</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Verified enterprise design emails</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-orange block">1,850+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Niche Tech Keywords Top 3</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Directly targeted hardware terms</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 block">+310%</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Demo Requests Increased</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Average YoY platform engagement lift</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-purple block">$30M+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Technology Campaigns Managed</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Globally optimized tech pipelines</span>
            </div>
          </div>

        </div>
      </section>

      {/* 📡 WHAT IS IOT MARKETING SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Network className="text-brand-teal w-3.5 h-3.5" />
                <span>The Technical Sourcing Shift</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is IoT Company Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                IoT company marketing is the highly specialized discipline of positioning complex software-hardware technology in front of key decision makers. Because IoT deals with nested software, physical hardware nodes, data piping protocols, and zero-trust security layers, standard software-as-a-service marketing strategies fall flat.
              </p>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Your technical buyers are senior design engineers, corporate procurement executives, and chief safety officers. They don't look at soft consumer blogs. Instead, they scan semantic search logs, ChatGPT data summaries, protocol datasheets, and Matter validation databases. If your platform isn't properly optimized as an established digital entity, your sales cycle will slow or freeze altogether.
              </p>

              {/* Graphic Flow of Sourcing Funnel */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest block">The IoT Technical Buyer Journey Log</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-teal font-mono font-bold text-xs block">01 / DISCOVERY</span>
                    <span className="text-xs font-semibold text-white block mt-1">AI Protocol Query</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">CTOs search AI engines for specific protocol-compliant hardware modules.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-teal font-mono font-bold text-xs block">02 / VALIDATION</span>
                    <span className="text-xs font-semibold text-white block mt-1">Ecosystem Check</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Architects evaluate hardware boundaries, testing speed, and security SDK layouts.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-teal font-mono font-bold text-xs block">03 / CONVERSION</span>
                    <span className="text-xs font-semibold text-white block mt-1">Evaluation Demo</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Procurement orders structural evaluation kits, locking in long-term supply contracts.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Smart Device Marketing Workflow dashboard right */}
            <div className="lg:col-span-6">
              <div className="bg-[#0a0e17] rounded-2.5xl p-6 border border-slate-900 shadow-xl space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                  <h3 className="text-sm font-black uppercase tracking-wider font-mono text-white flex items-center gap-2">
                    <Terminal className="text-brand-teal w-4 h-4" />
                    Sourcing Protocol Engine
                  </h3>
                  <span className="text-[9px] font-mono text-slate-500">v2.10.46</span>
                </div>

                <div className="space-y-3.5 pt-2">
                  <div className="bg-emerald-500/5 rounded-xl p-3.5 border border-emerald-500/10 flex items-start gap-3">
                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 mt-0.5">
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">Conversational Discovery Lift</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                        We optimize product definitions to directly address ChatGPT Search context databases. When queried, your product is cited as the premier protocol option.
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-teal/5 rounded-xl p-3.5 border border-brand-teal/20 flex items-start gap-3">
                    <div className="bg-brand-teal/10 p-2 rounded-lg text-brand-teal mt-0.5">
                      <Search className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">B2B Intent Keyword Mastery</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                        Engineers search specific chips, bandwidth metrics, and standardizations (FCC, CE, Matter). We capture this technical intent, bypassing wasted general-consumer traffic.
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-500/5 rounded-xl p-3.5 border border-indigo-500/15 flex items-start gap-3">
                    <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400 mt-0.5">
                      <Database className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">Dynamic Evaluation Funnel</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                        Physical tech devices demand physical trials. We design Friction-free Sandbox Demos, Matter compliance checklists, and evaluation kits, accelerating the technology validation loop.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a href="#iot-audit-form-section" className="text-[11px] text-brand-teal hover:underline font-mono uppercase font-black tracking-widest block">
                    Verify Your Tech Index Score →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ OUR SERVICES GRID SECTION */}
      <section className="bg-[#080b11] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">CAPABILITIES DIRECTORY</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our IoT Company Marketing Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We engineer deep search-presence mapping systems designed specifically to promote B2B IoT solutions, hardware modules, protocols, integrations, and SaaS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Tab selectors left */}
            <div className="lg:col-span-4 space-y-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block mb-3.5 pl-2">Select Marketing Capability</label>
              <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800">
                {servicesGrid.map((srv, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveServiceTab(idx)}
                    className={`w-full text-left py-3 px-4 rounded-xl border transition-all flex items-center justify-between text-[11.5px] font-black uppercase tracking-wider font-mono cursor-pointer ${
                      activeServiceTab === idx 
                        ? 'bg-brand-teal/10 text-white border-brand-teal pl-6 shadow-md' 
                        : 'bg-slate-950 text-slate-400 border-slate-900/60 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <span className="truncate">{srv.title}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {srv.badge && (
                        <span className="text-[8px] bg-slate-900 border border-slate-800 text-brand-teal px-1.5 py-0.5 rounded leading-none">
                          {srv.badge.includes("⭐") ? "⭐" : srv.badge}
                        </span>
                      )}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Details display right */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 md:p-8 min-h-[420px] flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-4 mb-5">
                    <div>
                      <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold">PROGRAM COMPONENT: IoT-{servicesGrid[activeServiceTab].id.toUpperCase()}</span>
                      <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                        {servicesGrid[activeServiceTab].title}
                      </h3>
                    </div>
                    <span className="bg-brand-teal/15 border border-brand-teal/30 text-teal-300 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                      {servicesGrid[activeServiceTab].badge}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                    {servicesGrid[activeServiceTab].desc}
                  </p>

                  <div className="space-y-3.5 mb-6">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">Key Deliverables & Integrations</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {servicesGrid[activeServiceTab].deliverables.map((det, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400 font-light leading-relaxed">{det}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High Intent targeted terms if present */}
                  {servicesGrid[activeServiceTab].keywords && (
                    <div className="bg-[#070b12] rounded-xl p-4 border border-slate-900 mt-2">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-extrabold block mb-2">Example Target Sourcing Keywords:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {servicesGrid[activeServiceTab].keywords?.map((kw, kwIdx) => (
                          <span key={kwIdx} className="bg-slate-950 text-slate-300 font-mono text-[10px] border border-slate-800 rounded px-2.5 py-1 leading-none font-medium">
                            🔍 "{kw}"
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-900/60 mt-6 flex flex-wrap justify-between items-center gap-3">
                  <span className="text-xs text-slate-400">Want to see our comprehensive target audience design blueprints?</span>
                  <a 
                    href="#iot-audit-form-section"
                    className="bg-brand-orange text-white hover:bg-opacity-90 font-mono font-black text-[10.5px] uppercase tracking-wider py-2.5 px-5 rounded-lg transition-all"
                  >
                    Discuss Capability Program
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📡 IOT INDUSTRIES WE SERVE */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">TARGET COMPLIANCE MAPS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              IoT Industries We Work With
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              Different IoT sectors require strict alignment with different hardware constraints, safety standardizations, Matter certifications, and target procurement agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {iotIndustries.map((ind, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 hover:border-brand-teal/30 rounded-2xl p-5 shadow-sm transition-all group hover:-translate-y-1 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 text-brand-teal font-extrabold group-hover:bg-brand-teal/10 transition-colors">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider font-mono text-white mb-2 leading-tight">
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

      {/* 📊 INTERACTIVE ESTIMATOR & CONVERSION LIFT GAINS SECTION */}
      <section id="iot-calc-section" className="bg-[#080b11] py-20 border-b border-slate-950 text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Description and Inputs left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <BarChart3 className="text-brand-orange w-3.5 h-3.5" />
                <span>Procurement Valuation Dashboard</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Calculate Your IoT Lead & <br className="hidden sm:inline" /> Pipeline Growth Index
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Physical B2B IoT solutions hold high lifetime customer contract values (LTV). Our specialized tech lead generation strategies optimize your traffic conversion pathways, moving standard bounce-rates into qualified enterprise demo bookings.
              </p>

              {/* Dynamic Interactive Sliders */}
              <div className="space-y-4 pt-2 bg-slate-950/60 p-5 rounded-2xl border border-slate-900/80">
                
                {/* Traffic Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-1">
                    <span className="text-slate-300 uppercase font-black tracking-wide">Monthly Dynamic Website Traffic</span>
                    <span className="text-brand-teal font-extrabold">{monthlyTraffic.toLocaleString()} Sessions</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="15000" 
                    step="500"
                    value={monthlyTraffic} 
                    onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Conversion Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-1">
                    <span className="text-slate-300 uppercase font-black tracking-wide">Current Session-to-Demo Conversion %</span>
                    <span className="text-brand-teal font-extrabold">{currentConversion}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.1" 
                    max="1.5" 
                    step="0.1"
                    value={currentConversion} 
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between items-center mt-1 text-[10px] text-slate-500 font-mono">
                    <span>Low (0.1%)</span>
                    <span>Industry Avg (0.4%)</span>
                    <span>High (1.5%)</span>
                  </div>
                </div>

                {/* Avg LTV Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-1">
                    <span className="text-slate-300 uppercase font-black tracking-wide">Average Sourcing Deal Lifetime Value (LTV)</span>
                    <span className="text-brand-teal font-extrabold">${(avgLtv / 1000).toFixed(0)}k USD</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="150000" 
                    step="5000"
                    value={avgLtv} 
                    onChange={(e) => setAvgLtv(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

              </div>
            </div>

            {/* Calculations Dashboard View right */}
            <div className="lg:col-span-6">
              <div className="bg-[#0a0e17] rounded-2.5xl p-6 border border-slate-900 shadow-2xl space-y-4 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="text-sm font-black uppercase tracking-wider font-mono text-slate-300 border-b border-slate-900 pb-3 mb-4">
                  Estimated IoT Pipeline Pipeline Boost
                </h3>

                {/* Metrics Blocks */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#05080e] p-4 rounded-xl border border-slate-900 text-left">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Standard Platform Leads</span>
                    <span className="text-2xl font-black font-display text-slate-300 mt-1 block">{currentDemos} Demos/mo</span>
                    <span className="text-[10px] text-slate-500 font-mono block mt-1">Based on {currentConversion}% conversion</span>
                  </div>

                  <div className="bg-[#05080e] p-4 rounded-xl border border-slate-900/80 text-left">
                    <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest block font-black">AKGLS Optimized Leads</span>
                    <span className="text-2xl font-black font-display text-brand-teal mt-1 block">{optimizedDemos} Demos/mo</span>
                    <span className="text-[10px] text-brand-teal font-mono font-bold block mt-1">{targetedConversion.toFixed(1)}% conversion rate</span>
                  </div>
                </div>

                {/* Pipeline Lift display block */}
                <div className="bg-[#081318] p-5 rounded-xl border border-brand-teal/25 relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-brand-orange font-black">Contract Revenue Liftoff</span>
                    <span className="bg-brand-teal text-[#05070a] font-mono font-black text-[9px] uppercase px-1.5 py-0.5 rounded leading-none">
                      +{leadLift} Leads Lift
                    </span>
                  </div>
                  <span className="text-4xl font-extrabold font-display text-white block">
                    +${Math.round(estimatedRevenueLiftValue).toLocaleString()} USD
                  </span>
                  <p className="text-[11.5px] text-slate-400 font-light mt-1.5 leading-relaxed">
                    Estimated monthly pipeline boost assuming standard 22% demo-to-close metrics at ${avgLtv.toLocaleString()} average contract value.
                  </p>
                </div>

                <div className="text-center pt-2">
                  <a href="#iot-audit-form-section" className="bg-brand-orange text-white hover:bg-opacity-95 font-mono font-black text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow-md inline-block">
                    Request Verified Pipeline Layout Plan →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 OUR PROCESS FLOW SYSTEM */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-14">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">OPERATIONAL ROADMAPS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our IoT Marketing Process
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We deploy systemic phase-locked blueprints that guarantee technical compliance checking, entity rank building, and corporate funnel launch stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {[
              {
                step: "01",
                title: "Market & Competitor Analysis",
                desc: "We research physical competitors, audit Matter protocol mappings, extract tech competitor backlink lists, and audit search query gaps."
              },
              {
                step: "02",
                title: "Strategy Planning",
                desc: "We lock down keyword targets, sketch out clean interactive conversion structures, and define targeted Google Ads/LinkedIn pipelines."
              },
              {
                step: "03",
                title: "Website & Content Optimization",
                desc: "Clear out critical page bugs, build high performance markdown code frameworks, write expert whitepapers, and upload technical schemas."
              },
              {
                step: "04",
                title: "Campaign Launch & Lead Gen",
                desc: "We press go on target system search campaigns, publish detailed whitepapers, and drive qualified developers to demo calendars."
              },
              {
                step: "05",
                title: "Reporting & Scaling",
                desc: "We measure pipeline attribution logs, refine conversions on drop-off pages, and optimization visibility inside AI search modules."
              }
            ].map((st, sidx) => (
              <div 
                key={sidx} 
                className="bg-[#0a0e17] border border-[#111622] rounded-2.5xl p-5 shadow-sm text-left relative group hover:border-brand-teal/20 transition-all"
              >
                <div className="text-3xl font-extrabold font-display text-brand-teal opacity-60 mb-3 block font-mono">
                  {st.step}
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider font-mono text-white mb-2 leading-snug min-h-[36px] flex items-center">
                  {st.title}
                </h3>
                <p className="text-[11.5px] text-slate-400 leading-relaxed font-light">
                  {st.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🔮 WHY DIGITAL MARKETING MATTERS FOR IOT */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">STRATEGIC CAPITAL LIFT</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Why IoT Companies Need Digital Marketing
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              Bypassing outdated wholesale trade conventions directly protects capitalization, shortens validation pipelines, and builds compound enterprise valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Generate Enterprise Leads",
                desc: "Open direct access points to systems integrators, utilities buyers, and corporate technology administrators, shortening multi-quarter cycles."
              },
              {
                title: "Build Technical Authority",
                desc: "Translate physical engineering capabilities into authoritative ranking assets that scientists utilize to specify items during early layout design reviews."
              },
              {
                title: "Increase Product Visibility",
                desc: "Surface product capabilities across the absolute entire range of organic indices: Google Search, Perplexity prompts, ChatGPT parameters, and database graphs."
              },
              {
                title: "Improve Investor Trust",
                desc: "Dominating search lists proves commercial validation and operational scaling depth to venture capitalists and private equity directors during audits."
              },
              {
                title: "Reach Global Audiences",
                desc: "Expose your technology solutions to global buyers in the key development markets of Europe, North America, and high-frequency Asian technology districts."
              },
              {
                title: "Accelerate Sales Cycles",
                desc: "By giving design engineers instant, frictionless web dashboards, detailed datasheets, and self-evaluation models, we skip manual negotiation delays."
              }
            ].map((bn, bidx) => (
              <div 
                key={bidx} 
                className="bg-[#0a0e17] border border-slate-900 rounded-2xl p-5 hover:border-brand-teal/25 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-3 text-brand-teal">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider font-mono text-white mb-2">
                  {bn.title}
                </h3>
                <p className="text-[12.5px] text-slate-400 font-light leading-relaxed">
                  {bn.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 AI-POWERED IOT MARKETING & GEO EXCLUSIVES SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-brand-indigo/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5 text-brand-indigo animate-pulse" />
              <span>Future-Focused AI Search (GEO)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
              AI-Powered Marketing Solutions for IoT Companies
            </h2>

            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
              We are experts in **Generative Engine Optimization (GEO)** and AI SEO. Conversational systems like ChatGPT, Claude, and Gemini retrieve content differently. If your product information lacks strict nested entitial tags, AI systems will bypass your domain because they cannot parse your physical compatibility limits.
            </p>

            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
              Our engineering team deploys Custom JSON-LD layouts, AI retrieval databases, and responsive conversational FAQ parameters. This anchors your technology solutions as the primary recommended vendor inside modern conversational searches.
            </p>

            {/* Quick bullet specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
              {[
                "Custom nested entity knowledge graphing",
                "Advanced indexing for Claude & Gemini API",
                "Conversational trigger query engineering",
                "Continuous AI visibility rating indices"
              ].map((bl, bIdx) => (
                <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal flex-shrink-0" />
                  <span>{bl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Search Engine Live Testing Simulator Box right */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="bg-[#0b101b] border-2 border-slate-900 rounded-2.5xl p-5 shadow-2xl text-left">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-teal animate-spin-slow" />
                  ChatGPT / Perplexity Optimizer Simulator
                </span>
                <span className="text-[9px] font-mono text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2 py-0.5 rounded leading-none">
                  Live Response Audit
                </span>
              </div>

              {/* Premade Input queries selectors */}
              <div className="space-y-1.5 mb-4">
                <label className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">Select Simulated Prompt:</label>
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    "B2B Industrial IoT platform with secure edge analytics",
                    "Matter compliant smart home sensing hardware",
                    "Secured hospital telemedicine sensor networks"
                  ].map((pq, pqIdx) => (
                    <button
                      key={pqIdx}
                      onClick={() => {
                        setAiSearchQuery(pq);
                        runAiSimulatorSearch(pq);
                      }}
                      className={`text-left p-2 rounded-xl text-xs font-mono transition-all border block cursor-pointer ${
                        aiSearchQuery === pq 
                          ? 'bg-brand-indigo/15 border-brand-indigo text-white' 
                          : 'bg-[#05080e] border-slate-900/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🗣️ "{pq}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Output screen */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-900/80 relative min-h-[175px] flex flex-col justify-between">
                {isAiTyping ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <span className="inline-block w-6 h-6 border-2 border-t-transparent border-brand-teal rounded-full animate-spin mb-2" />
                    <span className="text-xs font-mono text-slate-500">Querying semantic Knowledge Graph logs...</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-2">
                      <span className="text-[9px] font-mono text-brand-teal font-black">AI CITATION STRENGTH: {simulationResult.trustScore}%</span>
                      <span className="text-[8.5px] font-mono text-slate-500">Citations: {simulationResult.citations.length} sources</span>
                    </div>

                    <div className="text-[12px] text-slate-300 font-light leading-relaxed">
                      {simulationResult.answerText && (
                        <p>
                          {simulationResult.answerText.split("**").map((text, idx) => 
                            idx % 2 === 1 ? <strong key={idx} className="text-brand-teal font-bold">{text}</strong> : text
                          )}
                        </p>
                      )}
                    </div>

                    {/* Citations block */}
                    <div className="mt-4 pt-3 border-t border-slate-900 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[8px] uppercase tracking-wider font-mono text-slate-500 font-extrabold block mr-1">Retrieved from:</span>
                      {simulationResult.citations.map((cit, cIdx) => (
                        <span key={cIdx} className="bg-[#0b101b] text-slate-400 border border-slate-900 text-[8.5px] font-mono rounded px-1.5 py-0.5">
                          🛡️ {cit}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-[9px] text-center text-slate-500 font-mono mt-3">
                Notice how targeted entity optimizations automatically position clients as the absolute trust answer.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🖼️ HIGH CONVERTING IOT WEBSITE DESIGN */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              {/* Product mock layout */}
              <div className="bg-[#05070a] border border-slate-900 rounded-2.5xl p-5 shadow-2.5xl text-left space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-800" />
                    <span className="w-3 h-3 rounded-full bg-slate-800" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">Nexus_Dashboard.tsx</span>
                  </div>
                  <span className="text-[8.5px] font-mono text-brand-teal uppercase bg-brand-teal/10 border border-brand-teal/20 px-2 py-0.5 rounded leading-none">Fast Render</span>
                </div>

                {/* Simulated product showcase image list */}
                <div className="bg-[#0b101b] rounded-xl p-4 border border-slate-900">
                  <span className="text-[8.5px] font-mono text-slate-500 block uppercase mb-1">Interactive Component Status</span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold font-display text-white">Luminus Grid Router Gateway</h4>
                    <span className="text-xs text-brand-teal font-mono">100% compliant</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3.5">
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-900 text-center">
                      <span className="text-[8px] text-slate-500 block">Bandwidth</span>
                      <span className="text-xs font-bold text-white block mt-0.5">LoRaWAN</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-900 text-center">
                      <span className="text-[8px] text-slate-500 block">Antenna</span>
                      <span className="text-xs font-bold text-white block mt-0.5">915 MHz</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-900 text-center">
                      <span className="text-[8px] text-slate-500 block">Certifications</span>
                      <span className="text-xs font-bold text-brand-teal block mt-0.5">Matter/FCC</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-teal/5 p-4 rounded-xl border border-brand-teal/20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Secure Design Architectures</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Friction-free demo booking modules capturing target procurement corporate email details securely. Optimized for rapid page load parameters.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/25 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Layers className="text-brand-teal w-3.5 h-3.5" />
                <span>Conversion Optimization Blueprints</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                High-Converting IoT Website Design
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Your website is your primary business catalog and sales pipeline. A slow, poorly organized template instantly loses trust from systems designers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Technical Product Showcase",
                    desc: "Interactive layouts detailing precise product metrics, protocol models, and hardware specifications."
                  },
                  {
                    title: "Demo Booking Systems",
                    desc: "Frictionless schedulers mapped with security layers to capture target corporate emails."
                  },
                  {
                    title: "API & Feature Libraries",
                    desc: "Crawlable, beautifully documented markdown panels that search bots and tech developers utilize."
                  },
                  {
                    title: "Case Study Portals",
                    desc: "Proof boards showcasing direct financial savings, load tolerance data, and device lifespan."
                  },
                  {
                    title: "Enterprise Focused UX",
                    desc: "Tailored to build extreme corporate trust from CTOs, compliance leads, and CFO boards."
                  },
                  {
                    title: "Responsive Sizing Layouts",
                    desc: "Guarantees pristine, quick views for technicians evaluating data in field situations."
                  }
                ].map((item, id) => (
                  <div key={id} className="bg-[#0a0e17] p-4 rounded-xl border border-slate-900 text-left">
                    <h3 className="text-xs font-black uppercase tracking-wider font-mono text-white mb-1">
                      ⚙️ {item.title}
                    </h3>
                    <p className="text-[12px] text-slate-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📊 CASE STUDIES SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">VERIFIED PERFORMANCE LOGS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              IoT Marketing Success Stories
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              We translate our search and B2B growth methods into actual, verified enterprise capital and sales pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left selectors list button */}
            <div className="lg:col-span-4 space-y-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block mb-3.5 pl-2">Select Sourcing Case Study</label>
              {caseStudiesList.map((cs, csId) => (
                <button
                  key={csId}
                  onClick={() => setActiveCaseIdx(csId)}
                  className={`w-full text-left py-3 px-4 rounded-xl border transition-all flex flex-col justify-between cursor-pointer ${
                    activeCaseIdx === csId 
                      ? 'bg-brand-indigo/15 text-white border-brand-indigo' 
                      : 'bg-slate-950 text-slate-400 border-slate-900/65 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-wider font-mono">{cs.brand}</span>
                  <span className="text-[10.5px] text-slate-500 mt-1 font-light block">{cs.sector}</span>
                </button>
              ))}
            </div>

            {/* Display panel right */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 md:p-8 flex flex-col justify-between shadow-2xl min-h-[390px]">
                <div>
                  <div className="flex flex-wrap items-center justify-between border-b border-slate-900 pb-4 mb-5 gap-2">
                    <div>
                      <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold">CLIENT LOG</span>
                      <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                        {caseStudiesList[activeCaseIdx].brand}
                      </h3>
                    </div>
                    <span className="bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                      {caseStudiesList[activeCaseIdx].sector}
                    </span>
                  </div>

                  <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-5 mb-6 text-left">
                    <div>
                      <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold mb-1">Corporate Challenge</h4>
                      <p className="text-[12px] text-slate-300 font-light leading-relaxed">
                        {caseStudiesList[activeCaseIdx].challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold mb-1">AKGLS Marketing Strategy</h4>
                      <p className="text-[12px] text-slate-300 font-light leading-relaxed">
                        {caseStudiesList[activeCaseIdx].strategy}
                      </p>
                    </div>
                  </div>

                  {/* Results metrics board */}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-900">
                    <h4 className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-black mb-3">Metrics Lift Verified:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {caseStudiesList[activeCaseIdx].metrics.map((m, mId) => (
                        <div key={mId} className="bg-[#0b101b] p-3 rounded-lg border border-slate-900">
                          <span className="text-xl font-bold font-display text-white block">{m.value}</span>
                          <span className="text-[9.5px] text-slate-500 mt-1 block leading-tight">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-900/60 mt-6 text-right">
                  <a 
                    href="#iot-audit-form-section"
                    className="text-[11px] text-brand-teal hover:underline font-mono uppercase font-black tracking-widest inline-block"
                  >
                    View Comprehensive Research Case Study →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">OUR AGENCY EDGE</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Why Choose AKGLS Group for IoT Marketing?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              We combine deep engineering fluency with cutting-edge semantic search algorithms to deliver real, attributable technology revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUsCards.map((ch, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 hover:border-brand-teal/20 rounded-2.5xl p-5 shadow-sm transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 text-brand-teal font-black group-hover:bg-brand-teal/15 transition-colors font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider font-mono text-white mb-2 leading-tight">
                  {ch.title}
                </h3>
                <p className="text-[12px] text-slate-400 font-light leading-relaxed">
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛠️ TECHNOLOGY MARKETING TOOLS SECTION */}
      <section className="bg-[#05070a] py-16 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">SOFTWARE STACK MONITOR</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Tools & Technologies We Use
            </h2>
            <p className="text-slate-400 text-xs max-w-xl mx-auto font-light leading-relaxed">
              We leverage premium analytical tools to inspect domain strength, trace telemetry backlinks, and map out conversions across all communication grids.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {marketingToolsList.map((tool, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 rounded-xl p-4 text-center hover:border-slate-800 transition-colors"
              >
                <span className="text-[10px] font-mono text-brand-teal uppercase font-extrabold tracking-wide block">📡 {tool.name}</span>
                <span className="text-[9.5px] text-slate-500 block truncate mt-1 leading-none">{tool.type}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💲 PACKAGES SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/20">FLEXIBLE INVESTMENTS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Flexible IoT Marketing Packages
            </h2>
            <p className="text-slate-450 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              Choose the program that perfectly mirrors your capitalization levels, testing bandwidth needs, and targeted growth velocity indices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packagesList.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`rounded-2.5xl p-6 md:p-8 border flex flex-col justify-between transition-all relative ${
                  pkg.featured 
                    ? 'bg-[#0c1222] border-brand-teal shadow-2xl scale-100 lg:scale-[1.03] z-10' 
                    : 'bg-[#0a0e17] border-slate-900 shadow-sm hover:border-slate-800'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-teal text-[#05070a] font-mono font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-teal-300">
                    🔥 Highly Recommended Program
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">PACKAGE PROTOCOL: L-{idx+20}</span>
                    <h3 className="text-lg font-black font-display text-white mt-1">{pkg.name}</h3>
                  </div>

                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-3xl font-extrabold font-display text-white">{pkg.price}</span>
                    <span className="text-xs text-slate-500 font-mono">/ Month</span>
                  </div>

                  <p className="text-slate-400 text-xs font-light leading-relaxed border-b border-slate-900 pb-4 min-h-[50px]">
                    {pkg.target}
                  </p>

                  <div className="space-y-2.5">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">Scope & Inclusions:</label>
                    {pkg.features.map((ft, ftId) => (
                      <div key={ftId} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 font-light leading-relaxed">{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-5">
                  <a 
                    href="#iot-audit-form-section"
                    className={`w-full text-center py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-extrabold transition-all block ${
                      pkg.featured 
                        ? 'bg-brand-teal text-[#05070a] hover:bg-opacity-90 shadow-md' 
                        : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-900 hover:bg-slate-900'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-slate-950/40 p-5 rounded-2.5xl border border-slate-900/80 max-w-xl mx-auto">
            <span className="text-xs text-slate-400 block mb-2 leading-none">Have custom parameters or dynamic chip sizes?</span>
            <a 
              href="#iot-audit-form-section"
              className="text-brand-orange hover:underline font-mono text-xs uppercase tracking-widest font-black"
            >
              Request Custom IoT Marketing Plan →
            </a>
          </div>

        </div>
      </section>

      {/* ❓ Frequently Asked Questions Section */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">INFO REFERENCE LIST</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Frequently Asked Questions About IoT Marketing
            </h2>
            <p className="text-slate-400 text-xs max-w-lg mx-auto font-light leading-relaxed">
              Find instant, actionable answers to physical technology and digital marketing integration questions.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0a0e17] border border-[#111622] rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="text-xs md:text-sm font-black uppercase tracking-wider font-mono text-white">
                      💬 {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-brand-teal flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-4 pb-5 md:px-5 border-t border-slate-900 pt-3">
                      <p className="text-[12.5px] text-slate-400 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 📊 FREE IOT MARKETING AUDIT SECTION WITH SCANNER */}
      <section id="iot-audit-form-section" className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Info left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <FileCheck className="text-brand-teal w-3.5 h-3.5" />
                <span>Zero Cost Analysis Program</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Get a Free IoT Marketing Audit
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Discover your actual indexing deficiencies on ChatGPT Search, map protocol keyword search limits against active competitors, and find where engineers drop out of your web catalogs. Our expert tech team will evaluate your domain, writing a personalized strategic plan.
              </p>

              {/* Audit Inclusions */}
              <div className="space-y-3 pt-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">Your Comprehensive Free Audit Includes:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Organic Search Engine SEO analysis",
                    "Competitor performance benchmarking",
                    "Lead generation channel reviews",
                    "Core Web Vitals website speed check",
                    "AI search GEO discoverability scoring"
                  ].map((inc, incIdx) => (
                    <div key={incIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4.5 h-4.5 text-brand-teal flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Audit Input Form & Interactive Scanner right */}
            <div className="lg:col-span-6">
              <div className="bg-[#0a0e17] rounded-3xl p-6 border-2 border-slate-900 shadow-2xl text-left space-y-4">
                <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                  <h3 className="text-sm font-black uppercase tracking-wider font-mono text-white flex items-center gap-2">
                    <Database className="w-4.5 h-4.5 text-brand-teal" />
                    Query Scanner Control Panel
                  </h3>
                  <span className="text-[9.5px] font-mono text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded leading-none font-bold">
                    System Ready
                  </span>
                </div>

                <form onSubmit={triggerLiveAuditScanner} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Company Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. NexGrid Systems"
                        value={auditParams.companyName}
                        onChange={(e) => setAuditParams({...auditParams, companyName: e.target.value})}
                        className="w-full bg-[#05080e] rounded-xl border border-slate-900 p-2.5 text-xs text-white focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Website URL</label>
                      <input 
                        type="url" 
                        placeholder="e.g. nexgridsystems.com"
                        value={auditParams.websiteUrl}
                        onChange={(e) => setAuditParams({...auditParams, websiteUrl: e.target.value})}
                        className="w-full bg-[#05080e] rounded-xl border border-slate-900 p-2.5 text-xs text-white focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-1">IoT Industry Type</label>
                      <select 
                        value={auditParams.industryType}
                        onChange={(e) => setAuditParams({...auditParams, industryType: e.target.value})}
                        className="w-full bg-[#05080e] rounded-xl border border-slate-900 p-2.5 text-xs text-slate-300 focus:outline-none focus:border-brand-teal"
                      >
                        <option>Industrial IoT (IIoT)</option>
                        <option>Smart Home Solutions</option>
                        <option>Healthcare IoT</option>
                        <option>Smart Grid & Utilities</option>
                        <option>Automotive & Fleet Tracker</option>
                        <option>Wearable Hardware Tech</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Primary Product/Service</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Cellular MQTT Gateway"
                        value={auditParams.servicesText}
                        onChange={(e) => setAuditParams({...auditParams, servicesText: e.target.value})}
                        className="w-full bg-[#05080e] rounded-xl border border-slate-900 p-2.5 text-xs text-white focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Business Email *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. sourcing@company.com"
                        value={auditParams.email}
                        onChange={(e) => setAuditParams({...auditParams, email: e.target.value})}
                        className="w-full bg-[#05080e] rounded-xl border border-slate-900 p-2.5 text-xs text-white focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="e.g. 555-019-2831"
                        value={auditParams.phone}
                        onChange={(e) => setAuditParams({...auditParams, phone: e.target.value})}
                        className="w-full bg-[#05080e] rounded-xl border border-slate-900 p-2.5 text-xs text-white focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={auditStatus === 'running'}
                    className="w-full bg-brand-orange hover:bg-opacity-90 text-[#05070a] hover:text-white font-mono font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md mt-2 block w-full text-center cursor-pointer"
                  >
                    {auditStatus === 'running' ? "Running Domain System Scan..." : "Run Free Tech Optimization Audit"}
                  </button>
                </form>

                {/* Audit Terminal Log Area */}
                {auditStatus !== 'idle' && (
                  <div className="bg-[#05080e] p-4 rounded-xl border border-[#111622] font-mono space-y-2 mt-4 text-[11px]">
                    <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-slate-900 pb-1.5 mb-1">
                      <span>CRAWLER METRIC: PROBE ACTIVE</span>
                      <span className="text-brand-teal font-extrabold">{auditProgress}%</span>
                    </div>

                    <p className="text-slate-305 transition-all text-xs font-light">
                      <span className="text-brand-teal font-bold mr-1.5 font-mono">⚡ [STATUS]:</span>
                      {auditLogs}
                    </p>

                    {auditStatus === 'running' && (
                      <div className="w-full bg-[#0a0e17] h-1.5 rounded-full overflow-hidden mt-2">
                        <div 
                          className="bg-brand-teal h-full transition-all duration-300"
                          style={{ width: `${auditProgress}%` }}
                        />
                      </div>
                    )}

                    {auditStatus === 'completed' && (
                      <div className="bg-[#0b1b14] border border-emerald-900 p-3 rounded-lg text-emerald-400 leading-normal mt-3 text-left">
                        <p className="font-bold uppercase text-[9.5px] tracking-wider mb-1 font-mono">✅ Diagnostics Report Compiled!</p>
                        We managed to check early indexing metadata! Our tech director is compiling the detailed competitor gap analysis now and will email you the full booklet inside 24 hours at <strong className="text-white hover:underline">{auditParams.email}</strong>. Let's grow together!
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🗒️ SUGGESTED BLOG ARTICLES AREA */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">INDUSTRY READINGS</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Latest Insights & Guides
            </h2>
            <p className="text-slate-400 text-xs max-w-lg mx-auto font-light leading-relaxed">
              Enhance your understanding of modern search indexes, AI answer platforms, and B2B tech lead gen strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "IoT SEO Guide: Optimizing SKUs, Gateways, and API Systems",
                desc: "How technology manufacturers map physical SKUs, complex Matter networks, and database SDK codes to organic crawl parameters safely."
              },
              {
                title: "B2B Marketing for IoT Companies: Sourcing Masterclass",
                desc: "Explore how to skip long regional negotiation limits and configure high fidelity interactive trial calculators converting passive visits."
              },
              {
                title: "LinkedIn Lead Generation for Deep Tech Companies",
                desc: "Strategic blueprints leveraging Matter datasheets and target technical document assets to capture CTAs automatically inside feeds."
              },
              {
                title: "AI Marketing for IoT Businesses: How Generative Engines Cite SKUs",
                desc: "A detailed engineering audit on how ChatGPT Search and Claude retrieve brand recommendations using nested entitial structures."
              },
              {
                title: "How to Market IoT Products Online & Build Global Distributors",
                desc: "Configure hreflang layers, multi-regional mappings, and compliance indicators triggering internationalized distribution agreements."
              },
              {
                title: "IoT Website Design: High Converting Sandbox Best Practices",
                desc: "Analyze conversion flow structures, documentation layout rules, and quick trial booking panels securing pre-qualified corporate leads."
              }
            ].map((art, artId) => (
              <div 
                key={artId} 
                className="bg-[#0a0e17] border border-[#111622] rounded-2.5xl p-5 hover:border-slate-800 transition-colors text-left flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold block mb-2">ARTICLE MODULE</span>
                  <h3 className="text-sm font-black font-display text-white mb-2 leading-snug">{art.title}</h3>
                  <p className="text-[12.5px] text-slate-405 leading-relaxed font-light">{art.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900 text-left">
                  <a 
                    href="#iot-audit-form-section" 
                    className="text-xs text-brand-teal hover:underline font-mono uppercase font-black tracking-widest"
                  >
                    Read Detailed Article →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="bg-[#080b11] py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider mx-auto">
            <Zap className="w-3 h-3 text-brand-orange" />
            <span>Accelerate Pipeline Growth</span>
          </div>

          <h2 className="text-3xl sm:text-4.5xl md:text-5xl font-black font-display text-white leading-[1.08] tracking-tight">
            Ready to Grow Your IoT Business?
          </h2>

          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
            Book your free technology optimization session today. Speak with our lead systems marketer, inspect your ChatGPT citation metrics, and construct a high efficiency lead plan.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a 
              href="#iot-audit-form-section"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg font-mono cursor-pointer"
            >
              Book Free Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg font-mono flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Direct Chat
            </a>
          </div>

          {/* Trust elements list */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 font-mono text-[10px] uppercase tracking-widest pt-8 border-t border-slate-900/80">
            <span>📡 Technology Marketing Experts</span>
            <span className="text-slate-800">|</span>
            <span>📊 Transparent Live Dashboards</span>
            <span className="text-slate-800">|</span>
            <span>⚡ ROI-Focused Lead Pipelines</span>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY DEMO CTA */}
      <div className="fixed bottom-4 right-4 z-40">
        <a 
          href="#iot-audit-form-section" 
          className="bg-brand-teal text-[#05070a] hover:bg-opacity-90 font-mono text-xs uppercase font-extrabold tracking-wider py-2.5 px-4 rounded-xl shadow-2xl flex items-center gap-2 transition-transform duration-250 hover:scale-[1.03]"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          Request Free IoT Tech Audit
        </a>
      </div>
    </>
  );
}

import { useState, useEffect, FormEvent } from 'react';
import { 
  Award, Bot, CheckCircle, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Search, X, Shield, Server, Terminal, Smartphone, Globe, BarChart3, 
  AlertCircle, Sparkles, Network, Check, Landmark, Map, HelpCircle, Mail, Phone, 
  MapPin, Zap, MessageSquare, TrendingUp, AlertTriangle, ChevronDown, Scale, Gavel, FileText, Lock
} from 'lucide-react';

interface LawFirmMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function LawFirmMarketingPage({ onBackToHome, openProposalForm }: LawFirmMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Law Firm Marketing Services | Lawyer SEO Agency | AKGLS Group";
    
    // Inject Legal Schema recommendations dynamically
    const scriptId = "lawfirm-schema";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "AKGLS Group Legal Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://akglsgroup.com"
        },
        "description": "Premium lawyer SEO, highly targeted trial google ads, legal practice schema alignments, and local maps pack dominance for elite law firms.",
        "areaServed": "Global",
        "serviceType": "Legal Practice & Law Firm Digital Marketing Services"
      });
      document.head.appendChild(scriptEl);
    }
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  // 1. INTERACTIVE LEGAL ACQUISITION & RETURN ON INVESTMENT ESTIMATOR
  const [practiceType, setPracticeType] = useState<'injury' | 'family' | 'criminal' | 'corporate'>('injury');
  const [monthlySpend, setMonthlySpend] = useState<number>(6000);
  const [avgCaseValue, setAvgCaseValue] = useState<number>(15000);

  // Practice area baseline calculations
  const practiceDetails = {
    injury: { avgCpc: 14.5, baselineConversion: 2.1, improvementFactor: 2.3, label: 'Personal Injury' },
    family: { avgCpc: 5.8, baselineConversion: 3.5, improvementFactor: 2.1, label: 'Family & Divorce' },
    criminal: { avgCpc: 8.2, baselineConversion: 2.8, improvementFactor: 2.4, label: 'Criminal Defense' },
    corporate: { avgCpc: 12.0, baselineConversion: 1.9, improvementFactor: 2.2, label: 'Corporate Law' }
  };

  const currentPractice = practiceDetails[practiceType];
  const estClicks = Math.round(monthlySpend / currentPractice.avgCpc);
  
  // Baseline results (Industry standards)
  const baselineInquiries = Math.round(estClicks * (currentPractice.baselineConversion / 100));
  const baselineSignedCases = Math.max(1, Math.round(baselineInquiries * 0.15));

  // Optimized AKGLS results with advanced local schema + deep response pathways
  const akglsInquiries = Math.round(baselineInquiries * currentPractice.improvementFactor);
  const akglsSignedCases = Math.round(akglsInquiries * 0.28); // higher qualification, faster conversion
  const projectedFees = akglsSignedCases * avgCaseValue;
  const simulatedRoiMultiplier = ((projectedFees - monthlySpend) / monthlySpend).toFixed(1);

  // 2. GOOGLE MAPS RANK SIMULATOR FOR ATTORNEY SEARCHES
  const [selectedMapQuery, setSelectedMapQuery] = useState<'nearby_lawyer' | 'city_attorney' | 'practice_expert'>('nearby_lawyer');
  const mapsQueryData = {
    nearby_lawyer: {
      searchQuery: "personal injury lawyer near me specialized in car accidents",
      baselineRank: "Rank #18 (Buried on page 2, missing local schema elements)",
      akglsRank: "Google Local 3-Pack Position #1 (Featured direct phone & review snippet)",
      estimatedConversions: "45+ Direct prospective client phone calls & intake files/mo",
      optimizations: "Implementation of hyper-local attorney coordinates geo-tagging, reviews harvest protocol, and LocalBusiness JSON-LD markup integration."
    },
    city_attorney: {
      searchQuery: "best divorce law firm in city center free consultation",
      baselineRank: "Rank #29 (Unlisted across high-income suburbs, stale details)",
      akglsRank: "Map Pack Top Spot spotlight with responsive call buttons",
      estimatedConversions: "32+ Highly qualified high-asset cases booked/mo",
      optimizations: "Programmatic branch directory structure, neighborhood landing assets, review-velocity acceleration guides."
    },
    practice_expert: {
      searchQuery: "white collar criminal defense lawyer specialized in federal compliance",
      baselineRank: "Rank #15 (Losing to nationwide legal referral directories)",
      akglsRank: "Top #1 Organic Rank with Rich Snippet FAQs active",
      estimatedConversions: "18+ Multi-million dollar corporate defense inquiries/mo",
      optimizations: "AI Search semantic query mapping, high-level whitepaper co-citations, entity authority anchoring in legal registries."
    }
  };

  // 3. AI CLIENT RETRIEVAL AND LLM VISIBILITY ENGINE
  const [legalAIVerb, setLegalAIVerb] = useState<string>("boutique criminal litigation office with federal court experience and top client retention ratings");
  const [isSimulatingAI, setIsSimulatingAI] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<{
    citations: string[];
    score: number;
    response: string;
  }>({
    citations: ["Legal Directory Index", "AKGLS Legal Entity Graph Network", "Verified Client Trust Hub"],
    score: 91,
    response: "Generative search setups like ChatGPT Search, Claude, and Gemini retrieve specific legal recommendation matrices based on highly structured firm credentials. Enter your target prompt above and tap 'Simulate AI Retrieval Context' to preview our placement strategies."
  });

  const handleSimulateAISearch = (e: FormEvent) => {
    e.preventDefault();
    setIsSimulatingAI(true);
    setTimeout(() => {
      setIsSimulatingAI(false);
      const lower = legalAIVerb.toLowerCase();
      if (lower.includes("injury") || lower.includes("accident") || lower.includes("car") || lower.includes("medical")) {
        setAiResult({
          citations: ["National Personal Injury Registry", "AKGLS Proprietary Firm Authority Schema", "Local Bar Review Ledger"],
          score: 98,
          response: "For premium, high-stakes personal injury cases, GPT Search generates **Apex Justice Law Group** (optimized by AKGLS). They are prominently indexed with a spotless 4.9-star review profile, holding verified LegalService schema that triggers direct application pathways for prospective clients."
        });
      } else if (lower.includes("family") || lower.includes("divorce") || lower.includes("custody") || lower.includes("spouse")) {
        setAiResult({
          citations: ["State Family Bar Directory", "Certified Divorce Authority Network"],
          score: 95,
          response: "For family and asset protection cases, AI agents confidently reference **Summit Matrimonial Group** (powered by AKGLS SEO). Their schema highlights continuous partner accolades and provides clear information about booking fee consultations."
        });
      } else {
        setAiResult({
          citations: ["Federal Practice Area Index", "National Business Council Ledger"],
          score: 96,
          response: "Aligning with white-collar defense search coordinates, **Vanguard Legal Associates** (boosted by AKGLS technical authority) is highlighted first. The system cites their outstanding track record in federal compliance audits and case verdicts."
        });
      }
    }, 1100);
  };

  // 4. ACTIVE SERVICE GRID TAB INDEX
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  // 5. TESTIMONIAL / CASE STUDY INDEX
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  // 6. COLLAPSIBLE FAQ STATE
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // 7. COMPREHENSIVE LEGAL AUDIT SCANNER
  const [auditParams, setAuditParams] = useState({
    firmName: '',
    websiteUrl: '',
    practiceAreas: 'Personal Injury, Family Law, Criminal Defense',
    targetLocations: 'Houston, Texas',
    email: '',
    phone: '',
    agreed: true
  });
  const [scanStatus, setScanStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanLogs, setScanLogs] = useState<string>("Ready to inspect law firm authority registers...");

  const runLegalAuditScanner = (e: FormEvent) => {
    e.preventDefault();
    if (!auditParams.firmName || !auditParams.email) {
      alert("Please provide your Law Firm Name and a valid professional Email Address to trigger the scanner.");
      return;
    }
    setScanStatus('running');
    setScanProgress(0);
    setScanLogs("Initiating direct analysis of firm domain authority metrics...");

    const auditSteps = [
      { p: 25, msg: "Inspecting organic Google Page Rank & Local GMB Maps coordinate matches..." },
      { p: 50, msg: "Evaluating LegalService and Attorney JSON-LD schema lines..." },
      { p: 70, msg: "Scanning firm citation coverage across major judicial directories..." },
      { p: 90, msg: "Cross-analyzing competitor backlinks and local neighborhood Map Pack indices..." },
      { p: 100, msg: "Evaluation complete! Customized Law Firm Audit Summary has been successfully prepared." }
    ];

    auditSteps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.p);
        setScanLogs(step.msg);
        if (step.p === 100) {
          setScanStatus('completed');
        }
      }, (index + 1) * 600);
    });
  };

  const marketingToolsList = [
    { name: "Google Analytics (GA4)", type: "HIPAA-aligned user session and conversion path tracking" },
    { name: "Google Local Service Ads (LSAs)", type: "Pay-per-lead verification badge management" },
    { name: "Google Search PPC Console", type: "Targeting high-intent, immediate practice searches" },
    { name: "SEMrush Legal Intelligence", type: "Identifying custom local lawyer & attorney phrase pools" },
    { name: "Google Tag Manager", type: "Tracking high-value consultation form interactions securely" },
    { name: "Looker Studio Dashboard", type: "Aggregated reporting on legal intake metrics & cost per client" },
    { name: "ChatGPT & Claude LLMs", type: "GEO & Conversational AI entity co-citation seeding" },
    { name: "Clio / Filevine / HubSpot CRM", type: "Seamless forwarding of prospect intakes directly to CRM paths" }
  ];

  const servicesList = [
    {
      title: "Lawyer SEO Services",
      tag: "⭐ Core Competency",
      desc: "Rank above large legal directory directories. Put your firm's partners directly in front of regional searchers looking for local, verified counsel.",
      deliverables: [
        "Rigorous research on high-intent regional practice area search terms",
        "Integration of customized LegalService, LocalBusiness, and Attorney JSON-LD schema layers",
        "Deployment of helpful, expertly-referenced editorial advice following legal compliance criteria",
        "Strategic optimization of practice area pages for localized high-intent terms"
      ],
      keywords: ["divorce lawyer near me", "best criminal attorney", "commercial corporate litigation firm", "authorized defense advocate"]
    },
    {
      title: "Google Ads & Pay-Per-Lead (LSAs)",
      tag: "Immediate Case Intake",
      desc: "Acquire highly relevant legal queries on day one, keeping your intake desk active through call-only & localized ad channels.",
      deliverables: [
        "Full setup and validation of Google's 'Screened' background badge system",
        "Continuous optimization of LSA budget bids targeting lower cost-per-lead indices",
        "Structuring targeted PPC campaigns aimed strictly at defense and litigation actions",
        "Excluding zero-intent legal research terms, job seekers, and competitor name noise"
      ],
      keywords: ["hire auto accident lawyer with free consultation", "experienced federal tax litigation defense attorney"]
    },
    {
      title: "Local SEO & Google Maps Mastery",
      tag: "Local 3-Pack Growth",
      desc: "Place your practices securely at the top tier of all local Google Maps searches in your target postal areas.",
      deliverables: [
        "In-depth Google Business Profile (GBP) audit, directory optimization, and geographic alignment",
        "Deployment of continuous geographical citation sync systems across 300+ regional legal directories",
        "Continuous coordinate positioning spanning all surrounding high-income suburban communities",
        "Automated, highly compliant legal client review harvest workflows on Google platforms"
      ]
    },
    {
      title: "Law Firm Website Design",
      tag: "Conversion-Focused",
      desc: "Ultra-fast, beautiful, trustworthy user interfaces crafted to transform lookup visits into immediate consultations.",
      deliverables: [
        "Deploying frictionless, interactive instant case evaluations and secure booking portals",
        "Pristine, distraction-free attorney bio pages demonstrating credentials and case results",
        "Comprehensive database connection with Clio, Filevine, or Salesforce Intake Cloud",
        "Rapid mobile loading speeds scoring impeccable Core Web Vitals marks"
      ]
    },
    {
      title: "Social Media & Video Authority",
      tag: "Brand Leadership",
      desc: "Demonstrate professional legal knowledge and position your attorneys as the community's premier counsel.",
      deliverables: [
        "Publishing expert attorney video showcases explaining complex legal matters in under 60 seconds",
        "Targeting precise corporate demographics on LinkedIn for commercial and compliance retention needs",
        "Producing informative legal guides across Facebook and YouTube explaining common client issues",
        "Formulating secure brand response guidelines protecting firm credibility"
      ]
    },
    {
      title: "Content Marketing & Case Studies",
      tag: "Thought Authority",
      desc: "Assemble a pristine archive of public sector content, detailed case study outlines, and direct regulatory insights.",
      deliverables: [
        "Writing deep-dive legal resource guides answering major practice inquiry themes",
        "Developing elegant anonymized trial summaries highlighting multi-million dollar class wins",
        "Semantic alignment designed to dominate answer platforms like Quora and Reddit",
        "AI-aligned FAQ grids keeping your practices cited inside automated smart-speaker lookups"
      ]
    },
    {
      title: "AI SEO & Generative Engine Optimization",
      tag: "⭐ Trending",
      desc: "Secure top-tier references and mentions on ChatGPT Search, Gemini, Perplexity, and Claude systems.",
      deliverables: [
        "Injecting specific company parameters into high-authority judicial semantic networks",
        "Formatting practice area assets specifically to answer complex conversational user prompts",
        "Running continuous predictive audits to index attorney names as recommended search citations",
        "Securing strong co-citations on independent legal directory and evaluation databases"
      ]
    },
    {
      title: "Practice Area Retention Campaigns",
      tag: "Strategic Scale",
      desc: "Launch comprehensive outreach systems looking to build continuous retainers for complex practices.",
      deliverables: [
        "Deploying optimized corporate subscription models for boutique tech-firm compliance needs",
        "Establishing immediate chat modules facilitating fast first-touch connections for victim families",
        "Automating email nurturing sequences detailing firm rankings and industry recognitions",
        "Strategic multi-channel remarketing keeping your partners top-of-mind with business leaders"
      ]
    },
    {
      title: "Online Reputation Management (ORM)",
      tag: "Client Trust Protection",
      desc: "Acquire immaculate client feedback scores and actively defend your partners from malicious online reports.",
      deliverables: [
        "Continuous brand monitor alerts tracking all search results, complaints, and forum mentions",
        "Constructing ethical, compliant survey guidelines to identify and resolve unhappy clients early",
        "Executing systematic appeals against defamatory or fraudulent public reviews",
        "Establishing positive PR columns across recognized national legal editorial portals"
      ]
    },
    {
      title: "Attorney Showcases & Production",
      tag: "Visual Signature",
      desc: "Produce cinematic office walkthroughs, high-impact partner profiles, and introductory practice features.",
      deliverables: [
        "Crafting professional partner and associate introduction videos highlighting academic achievements",
        "Developing client welcoming materials explaining exactly what to expect in initial pretrial hearings",
        "Building elegant studio-quality animations summarizing complex class actions for simple views",
        "Strategic YouTube SEO optimization to capture key searches for regional legal remedies"
      ]
    }
  ];

  const practiceAreasList = [
    { title: "Corporate Law", desc: "Helping local enterprises and startups navigate legal setups, VC funding, intellectual property rights, and complex commercial buyouts." },
    { title: "Criminal Defense", desc: "Securing immediate top-tier defense representation for local citizens facing felony, white-collar, or federal court prosecutions." },
    { title: "Divorce & Family Law", desc: "Guiding high-net-worth clients through delicate asset division, child custody disputes, and custom prenuptial agreements." },
    { title: "Property & Real Estate Law", desc: "Managing commercial property transaction validations, title disputes, and regional zoning approvals." },
    { title: "Civil Litigation", desc: "Representing both plaintiffs and defendants in high-stakes monetary contract breaches and multi-party disputes." },
    { title: "Immigration Law", desc: "Assisting corporate entities in securing visa placements, talent fast-tracks, and permanent residency approvals." },
    { title: "Intellectual Property Law", desc: "Defending patents, registering high-value brand trademarks, and managing digital copyright infringement actions." },
    { title: "Tax Law & Disputes", desc: "Representing firms and high-income earners in complex federal tax disputes and audit negotiations." },
    { title: "Employment Law", desc: "Protecting local businesses from compliance audits, wage disputes, and hostile worker filing claims." },
    { title: "Personal Injury Law", desc: "Driving high-settlement representation for victims of major highway collisions, trucking accidents, and medical malpractice." }
  ];

  const processSteps = [
    { step: "Step 1", title: "Legal Market & Competitor Research", desc: "Our data team evaluates surrounding law firm budgets, calculates practice click-values, and maps regional search trends." },
    { step: "Step 2", title: "Strategy Development", desc: "We build premium client journey pathways, blueprint structured local SEO roadmaps, and optimize Google ad budgets." },
    { step: "Step 3", title: "Website & Campaign Optimization", desc: "We deploying clean JSON-LD attorney schema lists, design rapid lead forms, and secure GMB map listings." },
    { step: "Step 4", title: "Lead Generation & Conversion", desc: "We launch highly optimized ad campaigns, coordinate call tracking platforms, and push immediate lead notifications." },
    { step: "Step 5", title: "Reporting & Scaling", desc: "We supply clear Looker spreadsheets highlighting exact signed client levels, practice-area conversions, and ROI metrics." }
  ];

  const benefitsList = [
    { title: "Uninterrupted Quality Intake Stream", desc: "Maintain a steady stream of highly relevant client intakes directly, avoiding dry target seasonal periods." },
    { title: "Supreme Regional Authority", desc: "Transform your partners into the highest-recommended practitioners across local postal zones." },
    { title: "Maximum Case Value Focus", desc: "Deploy filters screening out trivial, low-value inquiries, prioritizing multi-million class and catastrophic actions." },
    { title: "Reduce Aggregator Fees", desc: "Reclaim direct possession of your local client pipelines, eliminating paid referral directories completely." },
    { title: "Enhanced Professional Reputation", desc: "Align your marketing assets with strict bar association guidelines while building immense trust." },
    { title: "Direct CRM Synchronization", desc: "Route immediate user inquiries straight into your practice management dashboards (Clio, Filevine)." }
  ];

  const whyChooseUsCards = [
    { title: "Legal Marketing Specialists", desc: "We understand the nuances of attorney-client privilege, strict bar ethics, and target practice buying cycles." },
    { title: "Case Acquisition & Lead Experts", desc: "We optimize for actual signed clients and high-compensation trials, not superficial website click metrics." },
    { title: "AI Search Pioneers (GEO)", desc: "We apply proprietary schema setups ensuring your lawyers are chosen in generative Siri, Gemini, and ChatGPT Search summaries." },
    { title: "Local Maps Optimization Authorities", desc: "Our local proximity indexing secures top Local 3-Pack shelf space above major nationwide directories." },
    { title: "Conversion-Focused Attorney Hubs", desc: "We build intuitive, authoritative lawyer biographical sites that convince families when they need counsel most." },
    { title: "Clear intake reporting & ROI tracking", desc: "Our custom dashboards connect all ad clicks directly to prospective legal client consult bookings." }
  ];

  const packagesList = [
    {
      name: "Solo Lawyer",
      price: "$2,600/mo",
      target: "Best for sole practitioners and boutique local firms seeking to dominate their direct neighborhood codes.",
      features: [
        "In-depth Google Business Profile setup, optimization, and Local Map Pack tuning",
        "Proximity map-pack optimization spanning up to 3 target local zip-codes",
        "Implementation of core Attorney & LocalBusiness JSON-LD schema layers",
        "Registration across 100+ high-authority judicial direct directories and maps",
        "Setup and active management of targeted Search Ads (up to $5k ad spend managed)",
        "Direct integration with simple consultation forms and clear call logging",
        "Monthly simple intake performance summary (calls, clicks, leads)"
      ],
      featured: false,
      cta: "Activate Solo Lawyer Plan"
    },
    {
      name: "Growth Law Firm",
      price: "$5,200/mo",
      target: "Perfect for expanding multi-attorney offices looking to capture city-wide practice actions.",
      features: [
        "Everything in the Solo Lawyer package is included",
        "ChatGPT & Gemini GEO conversational search indexing active",
        "Highly-optimized, custom designed practice landing pages",
        "Targeted Legal Services Ads (LSAs) and Google Screened badge validation setup",
        "Full programmatic setup of Local Service Ads and localized PPC call campaigns",
        "Automated client feedback and positive review harvesting system",
        "Integration of prospective intake leads directly with Clio / Filevine CRMs",
        "Bi-weekly strategy call sessions with senior legal growth adviser"
      ],
      featured: true,
      cta: "Deploy Growth Firm Strategy"
    },
    {
      name: "Enterprise Legal",
      price: "Custom",
      target: "Designed for premium multi-city firms and national class action trial leaders seeking absolute market dominance.",
      features: [
        "Complete multi-channel client acquisition roadmap (Organic, PPC, Video, LSA)",
        "Bespoke programmatic practice SEO engineered to capture thousands of potential inquiries",
        "Complete technical optimization scoring flawless Core Web Vitals marks",
        "Cinematic video production: custom attorney bios and high-stakes case wins summaries",
        "Strategic multi-region audience segment mapping and continuous dynamic adjustments",
        "Advanced conversational AI co-citation injection across elite federal registries",
        "Direct API custom synchronization with enterprise intake and phone routing portals",
        "Quarterly advisory presentations delivered in-person to firm partners and executive boards"
      ],
      featured: false,
      cta: "Request Enterprise Consultation"
    }
  ];

  const caseStudiesList = [
    {
      brand: "Vanguard Personal Injury Group",
      challenge: "A veteran injury firm was getting out-spent by massive aggregator websites, resulting in a 40% decline in car accident inquiries.",
      strategy: "Optimized hyperlocal maps pack configurations, structured local business schemas, and deployed highly conversion-focused mobile ad landing pages.",
      metrics: [
        { label: "New Catastrophic Injury Intakes", value: "+215% monthly increase" },
        { label: "Cost Per Signed Consultation", value: "Slashed from $410 to $165" },
        { label: "Organic Business Lead Volume", value: "+170% organic phone inquiries" }
      ]
    },
    {
      brand: "Summit Criminal & Corporate Defense",
      challenge: "A boutique defense firm needed highly qualified federal compliance clients, but kept getting calls for low-value traffic ticket queries.",
      strategy: "Built high-authority long-form compliance advisory resources, integrated precise exclusionary ad terms, and launched targeted LinkedIn campaigns.",
      metrics: [
        { label: "High-Ticket Corporate Retainers", value: "32 signed in initial 90 days" },
        { label: "Lead Qualification Accuracy", value: "Improved from 12% to 75%" },
        { label: "AI Search Recommended Rate", value: "Top citation on federal litigation queries" }
      ]
    }
  ];

  const faqsData = [
    {
      question: "How can lawyers generate qualified leads online?",
      answer: "We focus on high-intent user searches. Instead of bidding on generic keywords like 'legal details', we target terms used by active searchers ready to hire counsel: specialized practice terms ('brain injury lawyer with free consultation'), transactional phrases ('best commercial litigation attorney near me'), and target regions. Pairing these with Local Service Ads and high-converting attorney profiles maximizes high-value sign-ups."
    },
    {
      question: "Is SEO important for law firms?",
      answer: "Indispensable. Over 75% of prospective clients research attorneys online before hiring. Scoring top organic ranks on Google helps you capture cases directly, reducing dependency on third-party legal directory networks."
    },
    {
      question: "Can Google Ads generate high-value legal consultations?",
      answer: "Yes, when matched with expert qualifiers. We utilize strict negative keyword directories to screen out individuals seeking free legal help, employment seekers, or trivial queries, sending only highly qualified case profiles to your desk."
    },
    {
      question: "How long does a professional attorney SEO strategy take to show results?",
      answer: "Google Local Service Ads (LSAs) and Search PPC deliver qualified consultation leads within days of verification. Organic SEO rankings and Google Maps 3-Pack authority typically experience meaningful growth within 60 to 90 days, delivering long-term cases at zero ongoing ad costs."
    },
    {
      question: "Do you market all types of law firms?",
      answer: "Yes. We design tailor-made strategies depending on your client targets: high-empathy visual networks for Personal Injury & Family Law, premium informative guides for Criminal Defense, or sophisticated corporate B2B authority programs for Commercial & Intellectual Property firms."
    },
    {
      question: "Can you improve local Google rankings and Map positions?",
      answer: "Yes. By optimizing proximity tags, cleaning inconsistent citation directories, boosting your natural reviews collection, and implementing Attorney-specific schemas, we consistently outrank generic legal portal pages."
    },
    {
      question: "What is AI SEO for lawyers?",
      answer: "AI SEO, or Generative Engine Optimization (GEO), optimizes your attorney bios, legal publications, and company pages so that conversational systems like ChatGPT Search, Perplexity, and Gemini include your firm as a recommended option when users ask complex legal questions."
    }
  ];

  return (
    <>
      {/* SECTION NAV BAR */}
      <div className="bg-[#0a0d17] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Legal Sector</span>
            <span className="text-slate-400 text-xs font-light">Compliant, Conversion-Focused Lawyer Systems</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#legal-audit-section" 
              className="text-xs text-brand-teal font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free Law Firm Audit
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

      {/* 👑 HERO SECTION */}
      <section className="relative pt-20 pb-28 text-left bg-[#05070c] border-b border-slate-950 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#152033_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-amber-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-amber-500" />
              <span>Compliant Lawyer Growth Program</span>
            </div>

            <h1 id="legal-hero-title" className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white animate-fade-in">
              Law Firm Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200">
                That Generate More Legal Leads & Consultations.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Grow your law firm with SEO, Google Ads, local SEO, AI SEO, and conversion-focused digital marketing strategies designed for lawyers, attorneys, and legal firms.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a 
                href="#legal-audit-section"
                className="bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
              >
                Get Free Law Firm Marketing Audit
              </a>
              <a 
                href="#legal-estimator-section"
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono cursor-pointer"
              >
                Book Legal Growth Consultation
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Legal Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Local SEO Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>AI-Powered Marketing Strategies</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>ROI-Driven Lead Generation</span>
              </div>
            </div>
          </div>

          {/* Interactive ROI & Case Intake Estimator */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="legal-estimator-section">
            <div className="bg-[#0b101c] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-teal-500/80" />
                  <div className="w-3 h-3 rounded-full bg-indigo-500/80 animate-pulse" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  Legal Yield Estimator
                </div>
              </div>

              <div className="space-y-4 text-left">
                {/* Practice Area Selector */}
                <div>
                  <label className="text-[10px] uppercase font-mono font-black text-slate-500 block mb-1.5">Select Practice Area:</label>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { key: 'injury', label: 'Injury' },
                      { key: 'family', label: 'Family' },
                      { key: 'criminal', label: 'Criminal' },
                      { key: 'corporate', label: 'Corporate' }
                    ].map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setPracticeType(type.key as any)}
                        className={`text-[9px] py-1.5 rounded font-bold border font-mono transition-colors cursor-pointer ${
                          practiceType === type.key
                            ? 'bg-amber-500/20 border-amber-500 text-white'
                            : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Average Case Settlement Value (USD):</label>
                    <span className="text-xs text-amber-500 font-bold font-mono">${avgCaseValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={2000} 
                    max={100000} 
                    step={2000}
                    value={avgCaseValue}
                    onChange={(e) => setAvgCaseValue(Number(e.target.value))}
                    className="w-full accent-amber-500 h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$2,000 (Solo Service)</span>
                    <span>$50,000 (Complex Family)</span>
                    <span>$100,000+ (Severe Injury Claims)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Target Monthly Case-Ad Spend (USD):</label>
                    <span className="text-xs text-brand-teal font-bold font-mono">${monthlySpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={1000} 
                    max={20000} 
                    step={500}
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$1,000/mo</span>
                    <span>$10,000/mo</span>
                    <span>$20,000/mo</span>
                  </div>
                </div>

                {/* Simulated Results Indicators */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#05080f] p-3 rounded-lg border border-slate-900">
                    <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Baseline signed cases:</span>
                    <span className="text-lg font-black text-slate-400 font-display block mt-1">{baselineSignedCases} <span className="text-[9px] text-slate-600 font-light font-sans">retained</span></span>
                    <span className="text-[8px] text-slate-500 block font-mono mt-0.5">At standard {currentPractice.baselineConversion}% rate</span>
                  </div>
                  <div className="bg-[#070e17] p-3 rounded-lg border border-amber-500/20 animate-pulse">
                    <span className="text-[9px] text-amber-500 uppercase font-mono font-black block">AKGLS Expected Cases:</span>
                    <span className="text-lg font-black text-amber-500 font-display block mt-1">{akglsSignedCases} <span className="text-[9px] font-light font-sans">retained</span></span>
                    <span className="text-[8px] text-slate-300 block font-mono mt-0.5">~{(currentPractice.improvementFactor * 100).toFixed(0)}% growth index</span>
                  </div>
                </div>

                <div className="bg-[#060a12] rounded-xl p-3 border border-slate-900 text-center">
                  <span className="text-[9px] text-slate-500 font-mono uppercase block">Projected Practice Value / ROI Model:</span>
                  <div className="flex justify-around items-center mt-2">
                    <div>
                      <span className="text-xs text-white block font-semibold">{estClicks}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Ad Clicks</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-amber-500 block font-semibold">${(projectedFees / 1000).toFixed(0)}k</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Case Pipeline</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-teal block font-semibold">{simulatedRoiMultiplier}x ROI</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Ad-Spend Yield</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 text-center font-mono mt-3">
                Models assume compliance constraints & verified municipal competitive indices.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#070a10] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">JUDICIAL AUTHORITY VERIFICATION</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted Law Firm Marketing Experts
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We align visual design, rigorous localized SEO elements, and compliant campaign paths to capture major corporate and private cases directly.
            </p>
          </div>

          {/* Client Names Display Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14 items-center">
            {[
              "Apex Justice Law Group",
              "Summit Matrimonial Group",
              "Vanguard Legal Associates",
              "Metropolis Defense Trial Counsel",
              "Pacific Intellectual Partners"
            ].map((firm, idx) => (
              <div 
                key={idx} 
                className="bg-[#0c111e] border border-slate-900 rounded-xl py-3.5 px-4 text-center font-mono font-bold text-xs text-slate-400 hover:text-white transition-all cursor-default"
              >
                ⚖️ {firm}
              </div>
            ))}
          </div>

          {/* Core Performance counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#090d16] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-amber-500 block">45,000+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Qualified Intake Inquiries</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Through secure portal funnels</span>
            </div>

            <div className="bg-[#090d16] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-teal block">85+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Law Firms Served Nationally</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Boutiques, Multi-state, Class Action</span>
            </div>

            <div className="bg-[#090d16] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 block">+240%</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Consultation Velocity Growth</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Documented across practice fields</span>
            </div>

            <div className="bg-[#090d16] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-purple block">3,800+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Legal Keywords Ranked #1 Spots</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Evading broad-term search traps</span>
            </div>
          </div>

        </div>
      </section>

      {/* 📚 WHAT IS LAW FIRM DIGITAL MARKETING SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Gavel className="text-amber-500 w-3.5 h-3.5" />
                <span>The Direct Path to Client Retention</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is Law Firm Digital Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Law firm digital marketing is the methodical integration of hyperlocal maps ranking elements, certified practice schema, exclusionary target ad sets, and intuitive responsive biography pages to acquire signed consultations directly.
              </p>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Massive national legal directories seek to capture primary local legal queries, and then resell those non-vetted client phone leads to twenty competing firms concurrently. Direct legal SEO and compliance marketing bypasses that expensive bottleneck. We optimize your firm's domain, partners, and active credentials to become the leading natural authority on Google Maps local lists, search results, and generative AI engines—capturing high-value case retentions that you own completely.
              </p>

              {/* Graphic Flow Layout */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest block font-display">THE COMPLIANT CLIENT RETENTION PATHWAY</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  <div className="bg-[#0c101c] rounded-xl p-3 border border-slate-900">
                    <span className="text-amber-500 font-mono font-bold text-xs block">STAGE 01</span>
                    <span className="text-xs font-semibold text-white block mt-1">Lookup & Trust</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Prospect seeks legal remedy surround their civil matter or incident.</p>
                  </div>
                  <div className="bg-[#0c101c] rounded-xl p-3 border border-slate-900">
                    <span className="text-amber-500 font-mono font-bold text-xs block">STAGE 02</span>
                    <span className="text-xs font-semibold text-white block mt-1">Case Evaluation</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Client inputs facts secure on encrypted form structures.</p>
                  </div>
                  <div className="bg-[#0c101c] rounded-xl p-3 border border-slate-900">
                    <span className="text-amber-500 font-mono font-bold text-xs block">STAGE 03</span>
                    <span className="text-xs font-semibold text-white block mt-1">Signed Retainer</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Counsel establishes terms, registering intake cleanly into CRM.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual client acquisition layout */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#080c14] border border-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-500 text-[8px] font-mono font-black uppercase tracking-widest py-1 px-3 ml-auto rounded-bl-xl border-l border-b border-slate-900">
                  Secure Intake Q4
                </div>

                <div className="text-left space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="text-[10px] font-mono text-slate-400">Firm Acquisition Flow Diagram</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] text-slate-500 font-mono uppercase block">Live Conversion Channels:</span>
                    <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-900 space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-300 font-medium">Google Local Service Ads (LSA Verified)</span>
                        <span className="text-brand-teal font-extrabold font-mono">4.9% CTR</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-1">
                        <div className="bg-brand-teal h-1 rounded-full" style={{ width: '85%' }} />
                      </div>
                      <div className="text-[9px] text-slate-500">Pay-per-signed lead badge layer active.</div>
                    </div>

                    <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-900 space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-300 font-medium">Google 3-Pack Maps Coordinate Ranking</span>
                        <span className="text-amber-500 font-extrabold font-mono">Top #1 Target</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-1">
                        <div className="bg-amber-500 h-1 rounded-full" style={{ width: '92%' }} />
                      </div>
                      <div className="text-[9px] text-slate-500">Reviews validation loop active surrounding 5 target zips.</div>
                    </div>
                  </div>

                  {/* Trust factors panel */}
                  <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 text-[10px] text-slate-300 space-y-2">
                    <span className="font-mono font-black text-amber-400 uppercase tracking-wide block">CRITICAL LAW COMPLIANCE CONTROLS</span>
                    <p className="text-[9.5px] text-slate-400 leading-normal">
                      We structure attorney portals to run fully compliant layouts, respecting bar advertising parameters, disclaimer notices, and secure client file encryptions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🛠️ SERVICE GRID SECTION */}
      <section className="bg-[#070a10] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">GROWTH MODULES</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">Our Law Firm Marketing Services</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Fully compliant, high-performing lead and SEO modules built to secure attorney retainers.
            </p>
          </div>

          {/* Interactive Navigation Grid Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5 mb-8">
            {servicesList.map((srv, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTabIdx(idx)}
                className={`py-2 px-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                  activeTabIdx === idx 
                    ? 'bg-amber-500 text-black border-amber-500 font-extrabold shadow-md' 
                    : 'bg-[#0f1424] text-slate-400 border-slate-900 hover:text-white'
                }`}
              >
                {srv.title.replace(" Services", "").replace(" and", " &")}
              </button>
            ))}
          </div>

          {/* Current Service Highlight Container */}
          <div className="bg-[#0b101c] border border-slate-900 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  {servicesList[activeTabIdx].tag}
                </span>
                <span className="text-slate-600 text-xs font-mono">Service Program {activeTabIdx + 1}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                {servicesList[activeTabIdx].title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                {servicesList[activeTabIdx].desc}
              </p>

              <div className="space-y-2 text-left pt-2">
                <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block">CORE CAMPAIGN DELIVERABLES:</span>
                <ul className="space-y-2">
                  {servicesList[activeTabIdx].deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {servicesList[activeTabIdx].keywords && (
                <div className="pt-3 border-t border-slate-900">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block mb-1">High-Intent Keywords Targeted:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {servicesList[activeTabIdx].keywords?.map((kw, i) => (
                      <span key={i} className="bg-slate-950 border border-slate-900 text-[10px] text-amber-300 font-mono py-0.5 px-2 rounded">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-2.5xl p-5 border border-slate-900 space-y-4">
              <span className="text-[10px] uppercase font-mono font-black text-slate-400 block tracking-wider">Campaign Velocity Blueprint</span>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold">1</div>
                  <span className="text-slate-300">Target Area Alignment Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold">2</div>
                  <span className="text-slate-300">Dynamic Practice Schema Implementation</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold">3</div>
                  <span className="text-slate-300">Strict Compliance Audit Verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold">4</div>
                  <span className="text-slate-300">Counselor Live Lead Integration Setup</span>
                </div>
              </div>

              <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 text-center">
                <p className="text-[11px] text-amber-200">
                  Let us scale your law firm's signed retentions directly.
                </p>
                <a 
                  href="#legal-audit-section" 
                  className="inline-flex items-center gap-1.5 text-[9px] font-mono font-black uppercase text-amber-400 hover:underline mt-2 cursor-pointer"
                >
                  Run Firm Domain Analysis <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 💼 LEGAL PRACTICE AREAS WE SERVE */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">TARGET CLIENT CHANNELS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">Legal Practice Areas We Work With</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We structure custom intake assets and SEO roadmaps tailored specifically to the buying behavior of each legal practice profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceAreasList.map((area, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101c] border border-slate-900 rounded-2.5xl p-5 hover:border-amber-500/40 hover:translate-y-[-2px] transition-all group"
              >
                <div className="flex items-center gap-3 border-b border-slate-900 pb-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                    ⚖️
                  </div>
                  <h3 className="text-sm font-black font-display text-white group-hover:text-amber-300 transition-colors">
                    {area.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🗺️ INTERACTIVE MAP PACK DOMINANCE DEMO SECTION */}
      <section className="bg-[#070a10] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <MapPin className="text-brand-teal w-3.5 h-3.5" />
                <span>Local 3-Pack Supremacy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Dominate Local Legal Searches & Google Maps
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                When prospective clients suffer a collision or family split, they search 'lawyer near me' directly on Google Maps and select from the top three recommendations. If your offices are missing from this Local 3-Pack slot, you are surrendering premium daily calls to competing practices.
              </p>

              <div className="space-y-4 pt-2">
                <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block font-display">TAP GOOGLE ATTORNEY SEARCH MOCKUPS:</span>
                
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'nearby_lawyer', label: 'Injury Query' },
                    { key: 'city_attorney', label: 'Boutique Family' },
                    { key: 'practice_expert', label: 'Corporate Compliance' }
                  ].map((q) => (
                    <button
                      key={q.key}
                      onClick={() => setSelectedMapQuery(q.key as any)}
                      className={`text-[9.5px] py-2 px-1 rounded-lg border font-bold font-mono transition-colors text-center cursor-pointer ${
                        selectedMapQuery === q.key
                          ? 'bg-amber-500 border-amber-500 text-black'
                          : 'bg-[#0f1424] border-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Maps Outcome box */}
                <div className="bg-[#0b101c] rounded-2.5xl p-4 border border-slate-900 text-left space-y-3">
                  <div>
                    <span className="text-[9px] text-slate-500 font-mono uppercase block">Target Search Terms Evaluated:</span>
                    <span className="text-xs text-white font-semibold font-display italic">"{mapsQueryData[selectedMapQuery].searchQuery}"</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-red-500/20 text-[10px]">
                      <span className="text-red-400 font-mono font-bold block">Baseline Map Position:</span>
                      <p className="text-slate-400 leading-relaxed mt-1">{mapsQueryData[selectedMapQuery].baselineRank}</p>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-brand-teal/20 text-[10px]">
                      <span className="text-brand-teal font-mono font-bold block">AKGLS Targeted Maps Ranking:</span>
                      <p className="text-white font-semibold leading-relaxed mt-1">{mapsQueryData[selectedMapQuery].akglsRank}</p>
                    </div>
                  </div>

                  <div className="bg-[#05080f] p-3 rounded-xl border border-slate-900 space-y-1 text-xs">
                    <span className="text-brand-teal font-bold block">Intake Lead Projections:</span>
                    <p className="text-slate-300 font-light text-[11px] leading-relaxed italic">
                      "{mapsQueryData[selectedMapQuery].estimatedConversions}"
                    </p>
                    <span className="text-[8.5px] text-slate-500 font-mono block pt-1">Technical Optimizations Used: {mapsQueryData[selectedMapQuery].optimizations}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro maps visual illustration */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="bg-[#0c101c] border border-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3.5 mb-4">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-display">SIMULATED LOCAL SEARCH PLOT METRICS</span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand-teal animate-ping" />
                </div>

                <div className="space-y-3.5 text-left text-[11px]">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-900">
                    <span className="text-slate-500 block font-mono text-[9px] uppercase">LOCAL SEARCH IMPRESSIONS:</span>
                    <div className="flex justify-between items-end mt-2">
                      <div className="space-y-0.5">
                        <span className="text-xl font-bold font-display text-white">42,400+</span>
                        <span className="text-[9px] text-brand-teal font-mono block">Direct maps views / mo</span>
                      </div>
                      <div className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-amber-400 font-mono text-[9px] font-bold">
                        RANK ONE POSITION
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 space-y-2">
                    <span className="text-slate-500 block font-mono text-[9px] uppercase">CITY MAP POSITION GRID PLOT:</span>
                    <div className="grid grid-cols-4 gap-1 text-center font-mono font-bold text-[10px]">
                      {['Sub A: #1', 'Sub B: #2', 'Sub C: #1', 'Sub D: #1', 'City P1: #1', 'City P2: #2', 'West P: #1', 'East P: #1'].map((sub, i) => (
                        <div key={i} className="p-1 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 rounded">
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-brand-teal/5 rounded-xl border border-brand-teal/20 text-[10.5px] text-slate-400 leading-normal">
                    By coordinating high-density localized maps optimization structures across all adjacent target suburbs, your practice establishes complete regional maps pack coverage.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 LEGAL LEAD GENERATION CHANNELS SECTION */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="bg-[#0c101c] border border-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                  <span className="text-[9px] font-mono text-amber-500 uppercase font-black">LEAD INTAKE FEEDER V12</span>
                  <div className="bg-slate-950 border border-slate-900 text-slate-500 text-[8.5px] font-mono px-2 py-0.5 rounded">
                    Active SECURE Stream
                  </div>
                </div>

                <div className="space-y-2 text-[10px] text-left">
                  <div className="bg-slate-950 border border-slate-900 rounded-xl p-3 flex justify-between items-center">
                    <div>
                      <span className="text-amber-500 font-mono font-bold block">GOOGLE MAPS / PHONE</span>
                      <p className="text-slate-300 font-medium mt-0.5">Catastrophic truck accident collision claim</p>
                    </div>
                    <span className="bg-brand-teal/15 text-brand-teal border border-brand-teal/20 px-2 py-0.5 rounded font-mono font-bold text-[9px]">DIAL DIRECT</span>
                  </div>

                  <div className="bg-slate-950 border border-slate-900 rounded-xl p-3 flex justify-between items-center">
                    <div>
                      <span className="text-amber-500 font-mono font-bold block">GOOGLE SEARCH PPC</span>
                      <p className="text-slate-300 font-medium mt-0.5">Commercial contract dispute representation</p>
                    </div>
                    <span className="bg-brand-teal/15 text-brand-teal border border-brand-teal/20 px-2 py-0.5 rounded font-mono font-bold text-[9px]">FORM INPUT</span>
                  </div>

                  <div className="bg-slate-950 border border-slate-900 rounded-xl p-3 flex justify-between items-center">
                    <div>
                      <span className="text-amber-500 font-mono font-bold block">CHATGPT RECOMMEND SYSTEM</span>
                      <p className="text-slate-300 font-medium mt-0.5">Federal regulatory compliance retainer query</p>
                    </div>
                    <span className="bg-[#121b2d] text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded font-mono font-bold text-[9px]">GEO RETRACT</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 text-[10px] text-slate-400 mt-4 leading-normal">
                  Our custom attorney dashboards aggregate multi-channel inbound metrics safely, routing direct prospects straight to your counselors within 60 seconds.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <TrendingUp className="text-amber-500 w-3.5 h-3.5" />
                <span>Multi-Channel Prospect Feeder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Generate More Legal Consultations
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Relying exclusively on a single marketing channel makes law firms highly vulnerable to unpredictable changes in ad costs or search engine updates. AKGLS Group establishes a highly resilient, multi-channel legal lead acquisition framework.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="space-y-1">
                  <span className="text-white font-bold text-sm block">Google Organic Search</span>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Capture steady, non-paid practice-area searches, keeping client acquisition costs consistently low.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-white font-bold text-sm block">Google Maps Packs</span>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Convert high-intent local searchers instantly via responsive direct dial, map route, and quick review indicators.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-white font-bold text-sm block">Professional Paid Channels</span>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Deliver immediate case registrations using targeted LSAs and exclusionary keywords that filter out irrelevant traffic.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-white font-bold text-sm block">AI Voice & Search Engines</span>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Position your advocates as top-cited authorities across Siri, Alexa, and Perplexity Search summaries.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔮 AI-POWERED LAW FIRM MARKETING SECTION (FUTURE FOCUSED) */}
      <section className="bg-[#070a10] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5 text-indigo-400" />
                <span>Generative Search Alignment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                AI-Powered Marketing Solutions for Law Firms
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Generative Engines like ChatGPT Search, Perplexity, and Claude do not fetch standard blue link portals. They answer conversational legal queries by scanning deep database schemas and partner references across major legal registries. We optimize your practice's digital presence to survive and excel under this modern shift.
              </p>

              {/* Chat simulation form */}
              <form onSubmit={handleSimulateAISearch} className="space-y-3 pt-2">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block font-display">ENTER ATTORNEY PRACTICE PROMPT:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={legalAIVerb}
                    onChange={(e) => setLegalAIVerb(e.target.value)}
                    placeholder="e.g. car accident law firm with best trials record in city centre..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSimulatingAI}
                    className="bg-amber-600 hover:bg-amber-500 text-black py-2.5 px-4 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isSimulatingAI ? "Processing Entity..." : "Simulate Co-Citation"}
                  </button>
                </div>
              </form>
            </div>

            {/* AI outcome output window */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0b101c] border border-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4.5">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 font-extrabold uppercase">ChatGPT Search Engine Mockup</span>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-900/40 text-[9px] font-mono px-2 py-0.5 rounded font-bold">
                    Entity Match Confidence {aiResult.score}%
                  </span>
                </div>

                <div className="space-y-4 text-left text-xs min-h-[140px]">
                  <p className="text-slate-300 font-light leading-relaxed italic">
                    "{aiResult.response}"
                  </p>

                  <div className="pt-3.5 border-t border-slate-900 space-y-1.5">
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Verified Sources Cited:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {aiResult.citations.map((text, idx) => (
                        <span key={idx} className="bg-slate-950 border border-slate-900 text-[10px] text-amber-300 font-mono py-0.5 px-2 rounded-md">
                          📎 {text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-slate-500 text-center font-mono mt-4">
                  AI citation scoring correlates directly to correct LegalService JSON schema deployment.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🖥️ HIGH CONVERTING WEBSITE DESIGN FEAUTRES */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="bg-[#0c101c] border border-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden text-left space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="text-[10px] font-mono text-slate-400">High-Conversion Attorney Bio Mockup</span>
                  </div>
                  <span className="text-[9px] text-brand-teal font-mono">Mobile-Ready</span>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center gap-3.5 bg-slate-950 p-3 rounded-xl border border-slate-900">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center font-bold text-sm text-amber-400 border border-amber-500/20">
                      👨‍⚖️
                    </div>
                    <div>
                      <span className="text-white font-bold text-xs block">Thomas Vance, Senior Litigator Partner</span>
                      <span className="text-[9px] text-slate-500 block">Criminal Defense & Federal Trial Counsel</span>
                      <span className="text-[8px] text-amber-400 block font-mono">★ 4.9 Rating (310 reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                      <span>SECURE ENCRYPTED CONSULTATION INPUT:</span>
                      <span className="text-emerald-400">HIPAA Compliant🔒</span>
                    </div>
                    <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-900 space-y-2">
                      <div className="h-6 bg-slate-900 rounded border border-slate-800 flex items-center px-2 text-[10px] text-slate-500">
                        Inquiry focus: Car Crash Settlement
                      </div>
                      <div className="h-10 bg-slate-900 rounded border border-slate-800 flex items-center px-1.5 text-[9px] text-slate-600 leading-normal">
                        Case Description (Facts, date, local county where accident took place...)
                      </div>
                      <button className="w-full bg-amber-600 hover:bg-amber-500 text-black py-1.5 rounded-lg text-[10px] font-mono font-black uppercase tracking-wider transition-colors cursor-pointer">
                        Secure Submission (Forward to Intake Suite)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-[8.5px] text-slate-500 text-center font-mono leading-normal">
                  Our custom attorney designs feature high-contrast CTAs, direct counselor click-to-calls, and encrypted intake form boxes.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Smartphone className="text-brand-teal w-3.5 h-3.5" />
                <span>Conversion-First Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                High-Converting Law Firm Website Design
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Most law firm sites act as outdated static brochures. They feature vast, distracting text blocks, slow mobile load speeds, and obscure contact paths. AKGLS Group designs, writes, and deploys high-converting web portals built strictly to turn visitor interest into confirmed consult sessions.
              </p>

              <div className="space-y-3.5 text-left text-slate-300 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Streamlined Consultation Intake Forms</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Low-friction interactive inputs engineered to capture core case facts immediately, maximizing counselor closing conversion rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Trust-Focused Attorney Profile Directories</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Demonstrate authority instantly with beautiful biographies highlighting graduate credentials, bar admissions, awards, and historical cases won.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Hyper-Compliant Practice Portals</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      We ensure code frameworks compile with target accessibility criteria, legal disclaimers, and secure SSL security controls.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🏆 CASE STUDIES SECTION */}
      <section className="bg-[#070a10] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">VERIFIABLE CASE STATS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">Law Firm Marketing Success Stories</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Explore concrete examples of modern practice growth achieved through targeted SEO and ad campaign optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0b101c] border border-slate-900 rounded-3xl p-6 sm:p-8">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Verified Case Study {activeCaseIdx + 1}
                </span>
                <span className="text-[#3b82f6] font-mono font-semibold text-xs font-display">AKGLS Growth Partner Portfolio</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                {caseStudiesList[activeCaseIdx].brand}
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block">THE CHALLENGE:</span>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-1">
                    {caseStudiesList[activeCaseIdx].challenge}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block">THE MARKETING STRATEGY:</span>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-1">
                    {caseStudiesList[activeCaseIdx].strategy}
                  </p>
                </div>
              </div>

              {/* Slider Toggles */}
              <div className="flex gap-2 pt-4">
                {caseStudiesList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCaseIdx(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeCaseIdx === i ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 bg-slate-950 rounded-2.5xl p-6 border border-slate-900 text-left">
              <span className="text-[10px] uppercase font-mono font-black text-slate-500 block tracking-wider">SECURED ACQUISITION IMPROVEMENTS:</span>
              
              <div className="space-y-4 pt-1">
                {caseStudiesList[activeCaseIdx].metrics.map((m, idx) => (
                  <div key={idx} className="border-b border-slate-900 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs text-slate-400 block">{m.label}</span>
                    <span className="text-2xl font-black font-display text-amber-500 mt-1.5 block">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 text-center text-[10px] text-slate-400 mt-2">
                All metrics secured inside compliant, certified counselor accounting portals.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 💎 WHY CHOOSE AKGLS GROUP FOR LAW MARKETING */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">THE AKGLS ADVANTAGE</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">Why Choose AKGLS Group for Law Firm Marketing?</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We focus purely on signed litigation value and corporate retainer pipelines, evading vanity click matrices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsCards.map((usp, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101c] border border-slate-900 rounded-2.5xl p-6 hover:border-amber-500/40 hover:translate-y-[-2px] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black text-sm mb-4">
                  ✓
                </div>
                <h3 className="text-base font-black font-display text-white mb-2">
                  {usp.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📊 MARKETING TOOLS & TECHNOLOGIES SECTION */}
      <section className="bg-[#070a10] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Server className="text-brand-teal w-3.5 h-3.5" />
                <span>Modern Compliance Stack</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Tools & Technologies We Use
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                We coordinate complex user tracking paths securely, guaranteeing that potential client data is processed fully in compliance with security parameters.
              </p>

              <div className="bg-[#0b101c] p-4 rounded-2.5xl border border-slate-900 space-y-2 text-xs">
                <span className="text-amber-500 font-bold block">Secure Intake Handshakes:</span>
                <p className="text-slate-400 font-light leading-relaxed">
                  Every intake field we design synchronizes instantly with attorney CRM frameworks via encrypted API endpoints.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketingToolsList.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0b101c] border border-slate-900 rounded-2.5xl p-4 hover:border-amber-500/30 transition-all flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    🛠️
                  </div>
                  <div>
                    <span className="text-white font-bold text-xs block font-display">{tool.name}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{tool.type}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 📦 PACKAGES SECTION */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">PRE-MAPPED ROADMAP PLANS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">Flexible Law Firm Marketing Packages</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Deplorable practice development strategies matching independent attorneys to national multi-partner legal leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packagesList.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#0b101c] border rounded-3xl p-6 relative flex flex-col justify-between transition-all ${
                  pkg.featured 
                    ? 'border-amber-500 shadow-2xl scale-102 lg:scale-104 z-10' 
                    : 'border-slate-900 hover:border-slate-800'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute top-0 right-6 translate-y-[-50%] bg-amber-500 hover:bg-amber-400 text-black text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full border border-slate-950 shadow">
                    ⭐⭐ TARGET RECOMMENDED PROGRAM ⭐⭐
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-[10.5px] uppercase font-mono font-black text-slate-500 block tracking-wider">PLAN CONFIGURATION</span>
                    <h3 className="text-xl font-black font-display text-white mt-1">{pkg.name}</h3>
                  </div>

                  <div className="flex items-baseline gap-1.5 py-1.5 border-y border-slate-900">
                    <span className="text-3xl font-extrabold font-display text-white">{pkg.price}</span>
                    <span className="text-[11px] text-slate-500 font-mono">/ Month Contract</span>
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pkg.target}
                  </p>

                  <div className="space-y-2 pt-2.5">
                    <span className="text-[9px] font-mono font-black text-slate-500 uppercase tracking-widest block block">PLAN INCLUDES:</span>
                    <ul className="space-y-2 text-left">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-900">
                  <a 
                    href="#legal-audit-section"
                    className={`w-full py-3.5 px-4 rounded-xl text-center text-xs font-mono font-black uppercase tracking-wider block cursor-pointer transition-colors ${
                      pkg.featured 
                        ? 'bg-amber-500 hover:bg-amber-400 text-black' 
                        : 'bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-[#070a10] py-20 border-b border-slate-950 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">PRE-VERIFIED ANSWERS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">Frequently Asked Questions About Law Firm Marketing</h2>
            <p className="text-slate-400 text-sm font-light">
              Clear answers regarding attorney acquisition campaigns, Maps ranking parameters, compliance criteria, and billing rules.
            </p>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0b101c] border border-slate-900 rounded-2.5xl overflow-hidden transition-all duration-205"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full py-4.5 px-5 flex justify-between items-center text-left gap-4 font-display font-bold text-slate-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-amber-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`transition-all duration-200 ${isOpen ? 'max-h-[300px] border-t border-slate-900' : 'max-h-0'}`}>
                    {isOpen && (
                      <p className="p-5 text-xs text-slate-400 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 🚀 FREE AUDIT SECTION */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left" id="legal-audit-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0b101c] border border-slate-900 rounded-3.5xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <FileText className="text-amber-500 w-3.5 h-3.5" />
                <span>Domain Audit Diagnostics</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Get a Free Law Firm Marketing Audit
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Provide your practice particulars below to run a direct analysis of your current Google ranking scores, JSON schema structures, citation ratios, and competitive maps indices.
              </p>

              <div className="space-y-3.5 text-xs text-slate-300 text-left">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Strategic organic legal SEO and backlink diagnostics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Competitor evaluation mapping local ad expenditures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Interactive local map pack coordinate audit reporting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Siri, Alexa, ChatGPT citation retrievals rating</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={runLegalAuditScanner} className="bg-slate-950 border border-slate-900 rounded-3xl p-5 sm:p-6 space-y-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-display">AUDIT REGISTRATION PORTAL</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 uppercase">Law Firm Name *</label>
                    <input
                      type="text"
                      required
                      value={auditParams.firmName}
                      onChange={(e) => setAuditParams({...auditParams, firmName: e.target.value})}
                      placeholder="e.g. Apex Trial Counsel"
                      className="w-full bg-[#0c111e] border border-slate-900 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 uppercase">Website URL (Optional)</label>
                    <input
                      type="url"
                      value={auditParams.websiteUrl}
                      onChange={(e) => setAuditParams({...auditParams, websiteUrl: e.target.value})}
                      placeholder="https://yourlawfirm.com"
                      className="w-full bg-[#0c111e] border border-slate-900 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 uppercase">Key Practice Areas</label>
                    <input
                      type="text"
                      value={auditParams.practiceAreas}
                      onChange={(e) => setAuditParams({...auditParams, practiceAreas: e.target.value})}
                      placeholder="Injury, Divorce, defense..."
                      className="w-full bg-[#0c111e] border border-slate-900 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 uppercase">Target Municipalities</label>
                    <input
                      type="text"
                      value={auditParams.targetLocations}
                      onChange={(e) => setAuditParams({...auditParams, targetLocations: e.target.value})}
                      placeholder="e.g. Austin, Texas"
                      className="w-full bg-[#0c111e] border border-slate-900 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 uppercase">Professional Firm Email *</label>
                    <input
                      type="email"
                      required
                      value={auditParams.email}
                      onChange={(e) => setAuditParams({...auditParams, email: e.target.value})}
                      placeholder="partner@yourfirm.com"
                      className="w-full bg-[#0c111e] border border-slate-900 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 uppercase">Direct Secure Phone number</label>
                    <input
                      type="tel"
                      value={auditParams.phone}
                      onChange={(e) => setAuditParams({...auditParams, phone: e.target.value})}
                      placeholder="+1-512-555-0192"
                      className="w-full bg-[#0c111e] border border-slate-900 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Secure Data Notice checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="secure_agree_attorney"
                    checked={auditParams.agreed}
                    onChange={(e) => setAuditParams({...auditParams, agreed: e.target.checked})}
                    className="accent-amber-500 mt-0.5"
                  />
                  <label htmlFor="secure_agree_attorney" className="text-[9px] text-[#5e7ca7] font-mono leading-normal">
                    I agree to initiate a secure diagnostic check, and authorize AKGLS partners to compile public domain indexing references safely.
                  </label>
                </div>

                {/* Audit Loader block */}
                {scanStatus !== 'idle' && (
                  <div className="bg-[#0b101c] p-3 rounded-xl border border-slate-900 space-y-2 text-left">
                    <div className="flex justify-between items-center text-[9px] font-mono">
                      <span className="text-amber-500 font-bold">{scanStatus === 'running' ? 'Scanning Public Directories...' : 'Analysis Successfully Compiled!'}</span>
                      <span className="text-white text-right">{scanProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-900">
                      <div className="bg-amber-500 h-1.5 rounded-full transition-all duration-200" style={{ width: `${scanProgress}%` }} />
                    </div>
                    <span className="text-[8.5px] font-mono text-slate-400 block italic">"{scanLogs}"</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={scanStatus === 'running'}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-black py-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider block transition-colors disabled:opacity-50 cursor-pointer text-center"
                >
                  {scanStatus === 'running' ? 'Evaluating Law Firm Domain Authority...' : 'Deploy Secure Practice Audit Scanner'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 BLOG SUGGESTIONS LIST SECTION */}
      <section className="bg-[#070a10] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">LEARNING ARCHIVE</span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">Suggested Articles on Legal Marketing</h2>
            <p className="text-slate-400 text-sm font-light">
              Expand your knowledge of compliant campaigns, local maps ranking, and the legal prospective student journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Lawyer SEO Guide", desc: "Understand exactly how search crawler algorithms process lawyer profiles, GMB coordinates, and practice details." },
              { title: "Google Ads for Attorneys", desc: "Exclude waste search parameters and direct ad budgets tightly surrounding high-value trials and corporate retainers." },
              { title: "Local SEO for Law Firms", desc: "Step-by-step guidelines to secure top maps pack positions across neighboring postal areas and premium zip-codes." },
              { title: "AI Marketing for Lawyers", desc: "How Generative AI search systems formulate lawyer citations, and how to verify your partners remain highly cited." },
              { title: "Law Firm Website Best Practices", desc: "Visual blueprints detailing high-contrast CTA layouts, interactive forms, and quick counselor connect links." },
              { title: "Legal Lead Generation Tips", desc: "How to securely coordinate call tracking lines with backend Clio structures directly while protecting customer privacy." }
            ].map((art, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101c] border border-slate-900 rounded-2.5xl p-5 hover:border-amber-500/40 hover:translate-y-[-2px] transition-all"
              >
                <div className="text-amber-500 font-mono text-[9px] uppercase block mb-2">PARTNER NEWSLETTER COLUMN • 05 mins read</div>
                <h3 className="text-sm font-black font-display text-white mb-2 leading-relaxed">{art.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{art.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="bg-[#05070a] py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[680px] h-[680px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">READY TO GROW YOUR PRACTICE?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Ready to Grow Your Law Firm?
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Partner with the legal industry's premier marketing division. We coordinate high-value signed case pipelines that remain exclusive to your partners.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <a 
              href="#legal-audit-section"
              className="bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-xl font-mono cursor-pointer"
            >
              Request Free Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all inline-flex items-center gap-2 font-mono cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-brand-teal" />
              Chat on WhatsApp Now
            </a>
          </div>

          <div className="flex justify-center gap-6 text-[10px] text-slate-500 font-mono pt-4 border-t border-slate-900 max-w-lg mx-auto">
            <span>✓ LEGAL MARKETING SPECIALISTS</span>
            <span>✓ COMPLIANCE & PRIVACY COMPILER</span>
            <span>✓ LOOKER DASHBOARDS INCLUDED</span>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM EMERGENCY INTAKE BAR */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          referrerPolicy="no-referrer" 
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105"
          title="WhatsApp Secure Advisor Connect"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-white" />
        </a>
      </div>
    </>
  );
}

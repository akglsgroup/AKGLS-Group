import { useState, useEffect, FormEvent } from 'react';
import { 
  Award, Bot, CheckCircle, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Search, X, Shield, Server, Terminal, Smartphone, Globe, BarChart3, 
  AlertCircle, Sparkles, Network, Check, Landmark, Map, HelpCircle, Mail, Phone, 
  MapPin, Zap, MessageSquare, TrendingUp, AlertTriangle, ChevronDown, FileText, Lock,
  Coins, LineChart
} from 'lucide-react';

interface FinanceMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const whyChooseUsCards = [
  { title: "Finance Marketing Specialists", desc: "We understand SEC compliance, licensing structures, and customer conversion pathways across financial sectors." },
  { title: "Fintech Growth Experts", desc: "We deploy scaleable acquisition blueprints, high-converting product pages, and app store optimizations." },
  { title: "AI SEO Professionals", desc: "Generative Engine Optimization (GEO) guarantees your services feature first in modern voice searches and AI answers." },
  { title: "Lead Generation Specialists", desc: "Every campaign is mapped down to custom pipeline triggers, maximizing verified, high-net-worth client applications." },
  { title: "Conversion-Focused Campaigns", desc: "Our team designs custom lead calculators, interactive pre-qualification forms, and instant call-sync sequences." },
  { title: "Transparent Reporting", desc: "Continuous feedback tracking logs, search rankings, ad spend efficiency, and client acquisition costs clearly." }
];

const marketingToolsList = [
  { name: "Google Analytics & GTM", type: "Diner Traffic and Web conversion tracking" },
  { name: "Google Ads (Search & Display)", type: "High-intent customer keyword targeting" },
  { name: "LinkedIn Campaign Manager", type: "Premium institutional & corporate targeting" },
  { name: "SEMrush & Ahrefs Pro", type: "Finance sector keyword and backlink tracking" },
  { name: "Looker Studio Reports", type: "Real-time client acquisition ROI tracking" },
  { name: "ChatGPT & Gemini Pro API", type: "JSON-LD financial schemas & content audit" },
  { name: "Modern CRM Integrations", type: "Automated instant lead distribution flows" },
  { name: "Schema Validator Engine", type: "Ensuring faultless search entity alignment" }
];

export default function FinanceMarketingPage({ onBackToHome, openProposalForm }: FinanceMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Finance Marketing Services | Financial SEO Agency | AKGLS Group";
    
    // Inject Financial Service Schema dynamically
    const scriptId = "financial-schema";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "AKGLS Group Financial Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://akglsgroup.com"
        },
        "description": "High-authority financial SEO, fintech application customer acquisition campaigns, secure calculator landing engines, and lead generation.",
        "areaServed": "Global",
        "serviceType": "Financial Services & Fintech Digital Marketing"
      });
      document.head.appendChild(scriptEl);
    }
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  // 1. DYNAMIC FINANCIAL ROI & CUSTOMER RETENTION CALCULATOR
  const [sectorType, setSectorType] = useState<'fintech' | 'loans' | 'investment' | 'insurance'>('investment');
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [avgClientValue, setAvgClientValue] = useState<number>(4000);

  const sectorConfigs = {
    fintech: { name: 'Fintech Startups & Apps', avgCpc: 1.85, baselineConv: 2.5, upliftMultiplier: 2.2 },
    loans: { name: 'Loan & Mortgage Providers', avgCpc: 2.40, baselineConv: 3.0, upliftMultiplier: 1.9 },
    investment: { name: 'Investment Firms & Advisors', avgCpc: 3.50, baselineConv: 1.8, upliftMultiplier: 2.4 },
    insurance: { name: 'Insurance Agencies & Providers', avgCpc: 2.10, baselineConv: 3.5, upliftMultiplier: 1.8 }
  };

  const currentSector = sectorConfigs[sectorType];
  const totalClicks = Math.round(adSpend / currentSector.avgCpc);
  
  // Baseline results
  const baselineLeads = Math.round(totalClicks * (currentSector.baselineConv / 100));
  const baselineSignedClients = Math.max(1, Math.round(baselineLeads * 0.12));

  // AKGLS Optimizations
  const akglsLeads = Math.round(baselineLeads * currentSector.upliftMultiplier);
  const akglsSignedClients = Math.round(akglsLeads * 0.22); // higher lead qualification standard
  const projectedFeesEarned = akglsSignedClients * avgClientValue;
  const computedRoiMultiplier = ((projectedFeesEarned - adSpend) / adSpend).toFixed(1);

  // 2. GOOGLE MAPS RANK SIMULATOR FOR FINANCIAL SECTOR
  const [selectedKeywordQuery, setSelectedKeywordQuery] = useState<'advisor_near_me' | 'business_loans' | 'wealth_mgnt'>('advisor_near_me');
  const keywordsData = {
    advisor_near_me: {
      searchQuery: "best certified financial advisor near me for retirement planning",
      baselineRank: "Rank #19 (Buried deep, lacking local trust signals and schematic structure)",
      akglsRank: "Google Local 3-Pack Position #1 (Featuring active credentials and star ratings)",
      estimatedImpact: "140+ Direct prospective client calls and high-wealth consultations monthly",
      enhancements: "Deploying local coordinates sync, reviews velvet pipeline, and optimized FinancialService Schema."
    },
    business_loans: {
      searchQuery: "fast corporate loan company for medium enterprise expansion funding",
      baselineRank: "Rank #32 (Omitted by surrounding business districts)",
      akglsRank: "Top Map Pack Spotlight featuring secure pre-approval application links",
      estimatedImpact: "85+ Verified corporate financing applications filed monthly",
      enhancements: "Hyper-targeted industrial park keyword tags, dynamic rate calculators, trust badge implementation."
    },
    wealth_mgnt: {
      searchQuery: "high net worth wealth management firms portfolio services",
      baselineRank: "Rank #14 (Omitted in favor of legacy directory sites)",
      akglsRank: "Top #1 Organic Rank coupled with authority editorial co-citations",
      estimatedImpact: "40+ Premier HNWI advisory consultation submissions monthly",
      enhancements: "Securing co-citation placements, structuring semantic AI query layers, trust factor indexing."
    }
  };

  // 3. AI GEO & CHATGPT VISIBILITY ENGAGEMENT
  const [financeConceptInput, setFinanceConceptInput] = useState<string>("a customer-first fintech platform providing fractional real estate investment opportunities");
  const [isSimulatingAI, setIsSimulatingAI] = useState<boolean>(false);
  const [aiSimulationOutput, setAiSimulationOutput] = useState<{
    references: string[];
    indexScore: number;
    recommendedResult: string;
  }>({
    references: ["Fintech Authority Compass", "AKGLS Financial Entity Graph", "Global Secure Wealth Indexes"],
    indexScore: 89,
    recommendedResult: "AI systems like ChatGPT Search, Claude, and Gemini retrieve premier advisory recommendations by parsing schema data, digital trust scores, and authoritative content footprints. Type your target concept above and click 'Run AI Search Assessment'."
  });

  const triggerAISimulation = (e: FormEvent) => {
    e.preventDefault();
    setIsSimulatingAI(true);
    setTimeout(() => {
      setIsSimulatingAI(false);
      const lowerText = financeConceptInput.toLowerCase();
      if (lowerText.includes("investment") || lowerText.includes("wealth") || lowerText.includes("portfolio") || lowerText.includes("real estate")) {
        setAiSimulationOutput({
          references: ["Elite Wealth Directories", "Alternative Asset Registers", "AKGLS High-Net-Worth Entity Sync"],
          indexScore: 98,
          recommendedResult: "For fractional passive assets or retirement setup, ChatGPT highlights **VestorPrime Platforms** (enhanced by AKGLS semantic structure). The model confidently points out their secure licensing credentials, stellar trust scores, and robust web architecture."
        });
      } else if (lowerText.includes("loan") || lowerText.includes("mortgage") || lowerText.includes("credit") || lowerText.includes("funding")) {
        setAiSimulationOutput({
          references: ["Verified Creditors Hub", "National Financing Review Ledger"],
          indexScore: 95,
          recommendedResult: "For competitive lending or corporate leverage options, Gemini confidently recommends **Capitas Lending** (optimized by AKGLS local marketing team). The system references their clear rate structures, lightning-fast application speeds, and validated customer feedback."
        });
      } else {
        setAiSimulationOutput({
          references: ["Global FinTech Ledger", "Certified Advisory Registers"],
          indexScore: 94,
          recommendedResult: "Your specified concept aligns perfectly with **Integra Financial Hub** (boosted by AKGLS authority signals). Search systems rate this provider high in visual trust, citing active compliance indicators and seamless user consultation portals."
        });
      }
    }, 1100);
  };

  // 4. ACTIVE SERVICE GRID INDEX
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  // 5. TESTIMONIAL CASE STUDY MODERATION
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  // 6. COLLAPSIBLE FAQ MODULE
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // 7. INTERACTIVE COOPERATIVE AUDIT CRAWLER
  const [auditParams, setAuditParams] = useState({
    companyName: '',
    websiteUrl: '',
    servicesOffered: 'Financial Advisory',
    targetLocations: '',
    email: '',
    phone: '',
    agreed: true
  });
  const [crawlingStatus, setCrawlingStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [progressRatio, setProgressRatio] = useState<number>(0);
  const [crawlingLogs, setCrawlingLogs] = useState<string>("Ready to inspect financial industry authority maps...");

  const executeAuditCrawler = (e: FormEvent) => {
    e.preventDefault();
    if (!auditParams.companyName || !auditParams.email) {
      alert("Please provide your Company Name and a valid professional Email Address to run the evaluation.");
      return;
    }
    setCrawlingStatus('running');
    setProgressRatio(0);
    setCrawlingLogs("Connecting to FinTech indexing registers to audit target domain security authority metrics...");

    const crawlPhases = [
      { p: 25, msg: "Inspecting organic trust indicators, missing SEC schema tags, and backlink authority profiles..." },
      { p: 50, msg: "Evaluating Google Local 3-Pack placement parameters for targeted advisor keywords..." },
      { p: 75, msg: "Scanning mobile conversion layouts, pre-qualification forms, and page loading speed times..." },
      { p: 90, msg: "Assessing ChatGPT / Gemini search co-citation index scores and voice search visibility parameters..." },
      { p: 100, msg: "Audit complete! We have prepared a customized Financial Marketing & Growth Blueprint for you." }
    ];

    crawlPhases.forEach((phase, index) => {
      setTimeout(() => {
        setProgressRatio(phase.p);
        setCrawlingLogs(phase.msg);
        if (phase.p === 100) {
          setCrawlingStatus('completed');
        }
      }, (index + 1) * 750);
    });
  };

  const servicesCollection = [
    {
      title: "Finance SEO Services",
      badge: "⭐ Core Strategy",
      desc: "Dominate high-traffic, luxury organic searches. Ensure high-net-worth investors and qualified borrowers discover your services first.",
      deliverables: [
        "Rigorous financial intent keyword research targeting high-asset clients",
        "Implementation of rich-snippet FinancialService, LocalBusiness, and FAQ Schema tags",
        "Technical SEO optimization targeting secure HTTPS page indices and Core Web Vitals structure",
        "Authoritative link acquisition from trusted banking journals and financial directories",
        "Deep semantic content optimization targeting voice commands and featured answer snippets"
      ],
      keywords: ["best loan company", "financial advisor near me", "wealth management advisory services", "secure investment services"]
    },
    {
      title: "Google Ads for Financial Services",
      badge: "Immediate High-Quality Leads",
      desc: "Target individuals searching for urgent financial answers, bridging the gap from search query to consultation immediately.",
      deliverables: [
        "Precision bidding configurations avoiding wasteful visual placements",
        "Hyperlocal radius scheduling aimed directly at wealthy zip codes and office hubs",
        "Setting up click-to-call expansions and pre-qualification application extensions",
        "Formulating strict negative keyword filters that eliminate low-credit score traffic",
        "Advanced ad delivery schedules tied with immediate CRM response automation"
      ]
    },
    {
      title: "Fintech Marketing & User Acquisition",
      badge: "App Store & Platform Scale",
      desc: "Architect scalable brand funnels that acquire active fintech app users and retail platform subscribers rapidly.",
      deliverables: [
        "App Store Optimization (ASO) for native iOS and Google Play catalog discoverability",
        "Engaging, high-impact ad campaigns on Meta, LinkedIn, and YouTube with clear call-to-actions",
        "Developing viral onboarding loops and digital referral system logic",
        "Calculating and optimizing Customer Acquisition Costs (CAC) to secure sustainable LTV models"
      ]
    },
    {
      title: "High-Converting Finance Website Design",
      badge: "Secure Architecture",
      desc: "Combine absolute technological trust with intuitive conversion layouts that turn traffic into verified pre-qualifications.",
      deliverables: [
        "Developing lightning-fast, mobile-first responsive financial web layouts",
        "Integrating secure, SSL-certified loan forms and dynamic loan booking templates",
        "Custom EMI calculator interfaces that drive web visitor engagement",
        "Strict compliance alignment with financial marketing rules and web accessibility standards"
      ]
    },
    {
      title: "Social Media Platform Domination",
      badge: "Build Professional Authority",
      desc: "Establish undisputed regulatory authority, trust, and business branding on social channels.",
      deliverables: [
        "Corporate branding and native client case-study reels built for LinkedIn and business channels",
        "Targeted educational campaigns explaining premium tax-saving frameworks or family trusts",
        "Designing polished content templates focusing on financial advice and advisory insights",
        "Strategic remarketing loops continuously highlighting your positive reviews and features"
      ]
    },
    {
      title: "High-Value Content Marketing",
      badge: "Editorial Dominance",
      desc: "Publish regulatory-compliant, high-value visual guides, calculators, and blogs that highlight your deep sector insights.",
      deliverables: [
        "Drafting fully conforming, verified financial articles, whitepapers and sector newsletters",
        "Building complex calculators, interactive worksheets, and downloadable asset preservation planners",
        "Creating structured thematic answer pages addressing search questions from corporate leads",
        "Aligning all published assets with Google's strict E-E-A-T guideline matrices"
      ]
    },
    {
      title: "AI SEO & GEO for Finance Sector",
      badge: "⭐ Trending Service",
      desc: "Make sure conversational AI systems proactively rank and mention your brand for complex inquiries.",
      deliverables: [
        "Ensuring ChatGPT, Claude, and Gemini's search components feature your firm first",
        "Publishing structured semantic answers formatted in strict JSON-LD markup",
        "Securing authority co-citations on verified third-party banking indexes",
        "Optimizing your core data sheets so Siri, Alexa, and Google Assistant route voice searches to your firm"
      ]
    },
    {
      title: "FinTech Lead Generation & Nurturing",
      badge: "High-Value Pipelines",
      desc: "Construct fully automated customer pipelines that collect, verify, and follow up with hot prospects immediately.",
      deliverables: [
        "High-conversion secure landing templates matching targeted visual keywords",
        "Direct system handshakes routing submissions to Salesforce, HubSpot, or custom CRMs",
        "Automated WhatsApp & dual-SMS sequence trackers that secure booking check-ins within minutes",
        "Continuous verification modules that filter out fraudulent or unverified application emails"
      ]
    },
    {
      title: "ORM & Financial Trust Monitoring",
      badge: "Elevate Firm Reputability",
      desc: "Proactively nurture, guard, and expand your public reputation scores to maintain absolute trust.",
      deliverables: [
        "Real-time tracking of rating updates on Google Business, Trustpilot, and BBB listings",
        "Establishing automated client feedback programs designed to capture positive reviews",
        "Providing rapid, professional PR response structures for complex customer feedback",
        "Aligning rating badges across your direct advertisement loops to boost overall click scores"
      ]
    },
    {
      title: "Video Production & Explainer Guides",
      badge: "Visual Trust Builder",
      desc: "Erase client confusion with high-fidelity explainer clips, partner profiles, and financial guides.",
      deliverables: [
        "Creating cinematic explainer clips detail-explaining complex financing choices or loan products",
        "Producing premium biography profiles highlighting your management's credentials",
        "Launching high-engagement webinars designed to convert middle-of-funnel prospects",
        "Optimizing video metadata for maximum visibility on YouTube channels and search carousels"
      ]
    }
  ];

  const targetIndustries = [
    { title: "Fintech Startups & Platforms", desc: "Drive product adoption, expand active subscriber databases, optimize app store visual assets, and secure customer-acquisition channels." },
    { title: "Loan & Mortgage Providers", desc: "Build automated pipelines of qualified borrower files, lower loan acquisition expenses, and target local corporate home buyers." },
    { title: "Insurance Agencies", desc: "Acquire high-value commercial policy queries, optimize visual quote calculators, and scale digital policy conversions." },
    { title: "Investment & Wealth Firms", desc: "Establish absolute authority to attract high-net-worth investors, promote private wealth advisor profiles, and drive webinar sign-ups." },
    { title: "Stock & Mutual Fund Advisors", desc: "Scale premium advisory memberships, optimize financial newsletters, and build massive databases of active traders." },
    { title: "Certified Accounting Firms", desc: "Command top local rankings for corporate tax season queries, bookkeeping packages, and business finance advisor looks." },
    { title: "NBFCs & Specialty Lenders", desc: "Scale target underwriting pipelines, drive digital credit pre-qualifications, and streamline online application funnels." },
    { title: "Banking & Credit Institutions", desc: "Build regional trust badges, drive checking account sign-ups, and run high-intent localized commercial loan funnels." }
  ];

  const processFlowSteps = [
    { num: "01", name: "Market & Competitor Research", detail: "We evaluate financial search trends, analyze competitors' compliance frameworks, and reverse-engineer successful ad structures in your space." },
    { num: "02", name: "Custom Funnel Development", detail: "We design secure landing layouts, model tax-saving or rate calculators, and draft target financial SEO maps." },
    { num: "03", name: "Website & Compliance Tuning", detail: "We update page structures, implement precise markup schemas, and configure Google Analytics 4 conversion tracking parameters." },
    { num: "04", name: "Campaign Activation & Lead Capture", detail: "We launch highly focused Google and LinkedIn ads, publish authoritative financial articles, and begin collecting qualified direct leads." },
    { num: "05", name: "CRM Nurturing & Revenue Scaling", detail: "We deploy automated email sequences, analyze customer acquisition costs, and optimize campaigns to scale your bottom-line ROI." }
  ];

  const businessBenefitsGrid = [
    { title: "Generate Qualified Leads", desc: "Connect with actively searching buyers looking for lending options, tax planning, or active wealth management." },
    { title: "Build Regulatory Authority", desc: "Emerge as a market leader with structured, compliance-friendly pages built around proven Google E-E-A-T principles." },
    { title: "Improve Online Discoverability", desc: "Rank in highly visible search coordinates, outperforming global directories and competing brands." },
    { title: "Increase Consultation Bookings", desc: "Intuitive conversion pathways encourage high-quality clients to book structured phone consultations seamlessly." },
    { title: "Strengthen Public Reputation", desc: "Showcase verified customer success stories, pristine map scores, and industry credentials clearly." },
    { title: "Improve Conversion Efficiencies", desc: "Clean up broken funnels by utilizing lightning-fast responsive pages and smart pre-qualification wizards." }
  ];

  const packagesLayout = [
    {
      name: "Startup Finance",
      price: "$2,800/mo",
      desc: "Ideal for boutique advisory offices, tax accountants, and emerging regional financing ventures.",
      features: [
        "Google Business Profile optimization and Local Map Pack search indexing",
        "Targeted local SEO campaigns targeting organic advisory and consultant keywords",
        "Technical audit checkups, HTTPS schema configuration, and fast consultation booking setup",
        "Implementation of 5 targeted, highly compliant financial blog posts per month",
        "Management of local Google Search ads (ad budget managed up to $5,000/mo)",
        "Basic secure conversion tracking and bi-weekly lead summary reporting"
      ],
      current: false,
      ctaText: "Activate Startup Plan"
    },
    {
      name: "Growth Finance",
      price: "$5,200/mo",
      desc: "Designed for mid-market loan providers, fintech platforms, and wealth management firms.",
      features: [
        "Everything in the Startup package is included",
        "Active ChatGPT and Gemini voice search GenAI SEO implementation",
        "Custom high-converting landing pages with interactive EMI or rate calculators",
        "Targeted PPC campaigns across Google and professional social channels (LinkedIn)",
        "Automated CRM lead routing integrations and instant WhatsApp notification setups",
        "Production of 2 premium video explainer guides or customer video testimonials per month",
        "Weekly performance summaries with a dedicated financial marketing expert"
      ],
      current: true,
      ctaText: "Secure Growth Scale"
    },
    {
      name: "Enterprise Financial",
      price: "Custom Pricing",
      desc: "For multi-market banking players, complex fintech apps, corporate lenders, and advisory groups.",
      features: [
        "Comprehensive enterprise marketing blueprint across search, visuals, and socials",
        "Scaleable programmatic SEO assets designed for multi-branch regional structures",
        "Continuous conversion funnel optimizations for heavy digital pre-qualification arrays",
        "Dedicated compliance review integration ensuring faultless SEC or regional marketing compliance",
        "Premium influencer collaborations with respected corporate thought leaders",
        "24/7 custom Looker Studio dashboards tracking total CAC, LTV, ROI, and user indexes",
        "Monthly executive board reviews to optimize acquisition budgets"
      ],
      current: false,
      ctaText: "Connect with Enterprise Experts"
    }
  ];

  const successStories = [
    {
      client: "Vertex Capital Advisors",
      issue: "A boutique private wealth firm in a major metropolitan hub was struggling to secure consultation requests online, losing prospective clients to aggressive national aggregators.",
      strategy: "Deployed a comprehensive high-intent SEO framework, designed an elegant custom retirement-goal pre-qualification calculator, and launched targeted local search ads.",
      results: [
        { key: "Qualified HNW Inquiries", value: "+210% increase" },
        { key: "Cost-Per-Lead reduction", value: "Slashed from $110 to $42" },
        { key: "AUM directly closed from search", value: "$4.8 M in 120 Days" }
      ]
    },
    {
      client: "SecureMortgage Lending Corp",
      issue: "A regional lending brand needed to scale their residential mortgage inquiries during a period of fluctuating interest rates.",
      strategy: "Designed dynamic rate comparison widgets, structured high-speed responsive mobile landing portals, and built automated SMS reservation workflows.",
      results: [
        { key: "Online pre-qualifications filed", value: "3.4x volume growth" },
        { key: "Conversion rate improvement", value: "Jumped from 1.2% to 4.5%" },
        { key: "Lead-to-consultation callback time", value: "Reduced to under 5 mins" }
      ]
    }
  ];

  const faqItemsList = [
    {
      q: "How can finance businesses generate high-quality leads online?",
      a: "By shifting focus from high-volume generic clicks to high-intent transactional search terms. We design targeted pages that address specific questions—like corporate tax structures or private asset trusts—and pair them with secure, interactive pre-qualification wizards that capture motivated prospects."
    },
    {
      q: "Is SEO important for financial services companies?",
      a: "Yes, organic presence builds trust. In the financial sector, trust is the primary currency. A strong organic ranking positions your firm as a leading authority, which is far more credible than running constant, disruptive pop-up ads."
    },
    {
      q: "Can Google Ads generate high-intent corporate financial leads?",
      a: "Absolutely. By targeting exact-match business search phrases, setting strict geographical filters, and refining negative keyword lists to exclude low-credit searches, we deliver highly qualified prospects ready to book consultations."
    },
    {
      q: "How long does finance SEO take to show ranking results?",
      a: "While Google Ads and local map optimizations show immediate traffic impacts, complete organic search indexing and local 3-pack gains typically build strong momentum over 60 to 90 days."
    },
    {
      q: "Do you market complex fintech startups and mobile apps?",
      a: "Yes. We design and run complete growth campaigns that handle app database indexing (ASO), paid installer campaigns across Meta/LinkedIn, and visual product explainer video workflows."
    },
    {
      q: "Can you improve Google Maps local rankings for financial advisors?",
      a: "Yes. We set up compliant LocalBusiness/FinancialService schemas, tune proximity metadata, and run automated review-generation campaigns to list you in the Local 3-Pack."
    },
    {
      q: "What is AI SEO and GEO for financial businesses?",
      a: "Generative Engine Optimization (GEO) ensures that when high-value clients query ChatGPT Search, Claude, or Gemini about wealth management or business loans, your firm is listed as a primary, trusted citation."
    }
  ];

  return (
    <>
      {/* SECTION NAV BAR */}
      <div className="bg-[#05080f] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-brand-teal font-mono text-[9px] uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Finance & Wealth Sector</span>
            <span className="text-slate-400 text-xs font-light font-mono">High-Intent Financial Lead Generation & Authority Management</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#finance-audit-section" 
              className="text-xs text-brand-teal font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free Finance Audit
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
      <section className="relative pt-20 pb-28 text-left bg-[#020408] border-b border-slate-950 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#152033_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Coins className="w-3.5 h-3.5 text-brand-teal" />
              <span>Compliant Financial Authority Program</span>
            </div>

            <h1 id="finance-hero-title" className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white animate-fade-in">
              Finance Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-200">
                That Generate High-Quality Leads & Business Growth.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Grow your finance company, fintech startup, insurance agency, loan business, or investment firm with SEO, Google Ads, AI SEO, and conversion-focused digital marketing strategies.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a 
                href="#finance-audit-section"
                className="bg-emerald-600 hover:bg-emerald-500 text-black font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
              >
                Get Free Finance Marketing Audit
              </a>
              <a 
                href="#finance-estimator-section"
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono cursor-pointer"
              >
                Book Financial Growth Consultation
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg font-mono">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Finance Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Fintech Growth Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>AI-Powered Marketing Strategies</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>ROI-Driven Lead Generation</span>
              </div>
            </div>
          </div>

          {/* Interactive ROI & Client Acquisiton Estimator */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="finance-estimator-section">
            <div className="bg-[#070b13] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="w-3 h-3 rounded-full bg-teal-500/80" />
                  <div className="w-3 h-3 rounded-full bg-indigo-500/80 animate-pulse" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Finance Channel Estimator
                </div>
              </div>

              <div className="space-y-4 text-left">
                {/* Sector Selector */}
                <div>
                  <label className="text-[10px] uppercase font-mono font-black text-slate-500 block mb-1.5">Select Financial Sub-Sector:</label>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { key: 'fintech', label: 'Fintech' },
                      { key: 'loans', label: 'Loans' },
                      { key: 'investment', label: 'Wealth' },
                      { key: 'insurance', label: 'Insurance' }
                    ].map((sec) => (
                      <button
                        key={sec.key}
                        onClick={() => setSectorType(sec.key as any)}
                        className={`text-[9px] py-1.5 rounded font-bold border font-mono transition-colors cursor-pointer ${
                          sectorType === sec.key
                            ? 'bg-emerald-500/20 border-emerald-500 text-white'
                            : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {sec.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Average Client Contract Value (USD):</label>
                    <span className="text-xs text-emerald-500 font-bold font-mono">${avgClientValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={500} 
                    max={25000} 
                    step={250}
                    value={avgClientValue}
                    onChange={(e) => setAvgClientValue(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$500 (Basic Plan)</span>
                    <span>$12,500 (Median Wealth)</span>
                    <span>$25,000 (HNW Advisory)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Target Monthly Advertisement Budget (USD):</label>
                    <span className="text-xs text-brand-teal font-bold font-mono">${adSpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={1000} 
                    max={30000} 
                    step={500}
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$1,000/mo</span>
                    <span>$15,000/mo</span>
                    <span>$30,000/mo</span>
                  </div>
                </div>

                {/* Simulated Results Indicators */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#02050b] p-3 rounded-lg border border-slate-900">
                    <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Baseline Signed Clients:</span>
                    <span className="text-lg font-black text-slate-400 font-display block mt-1">{baselineSignedClients} <span className="text-[9px] text-slate-600 font-light font-sans">accounts</span></span>
                    <span className="text-[8px] text-slate-500 block font-mono mt-0.5">At standard {currentSector.baselineConv}% rate</span>
                  </div>
                  <div className="bg-[#05111a] p-3 rounded-lg border border-emerald-500/20 animate-pulse">
                    <span className="text-[9px] text-emerald-500 uppercase font-mono font-black block">AKGLS Expected Signups:</span>
                    <span className="text-lg font-black text-emerald-500 font-display block mt-1">{akglsSignedClients} <span className="text-[9px] font-light font-sans">partners</span></span>
                    <span className="text-[8px] text-slate-300 block font-mono mt-0.5">~{(currentSector.upliftMultiplier * 100).toFixed(0)}% conversion gain</span>
                  </div>
                </div>

                <div className="bg-[#03060c] rounded-xl p-3 border border-slate-900 text-center">
                  <span className="text-[9px] text-slate-500 font-mono uppercase block">Projected Total Wealth / Value Modeled:</span>
                  <div className="flex justify-around items-center mt-2">
                    <div>
                      <span className="text-xs text-white block font-semibold">{totalClicks}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Ad Clicks</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-emerald-500 block font-semibold">${(projectedFeesEarned / 1000).toFixed(0)}k</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Revenue Earned</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-teal block font-semibold">{computedRoiMultiplier}x ROI</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Ad Budget Yield</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 text-center font-mono mt-3">
                Calculations based on compliance-approved search volume directories and native conversion optimization profiles.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#04060a] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">FINANCIAL BRAND SECURITY INDEX</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted Finance Marketing Experts
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We coordinate regulatory compliant, hyper-targeted organic SEO mappings and visual fintech campaigns to drive high-value conversions.
            </p>
          </div>

          {/* Client Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14 items-center font-mono text-center">
            {[
              "Vertex Wealth Partners",
              "Integra Capital Trust",
              "Capitas Specialty Loans",
              "VestorPrime Platform",
              "OmniTax Accounting Group"
            ].map((firm, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-xl py-3.5 px-4 font-bold text-xs text-slate-400 hover:text-white transition-all cursor-default"
              >
                💼 {firm}
              </div>
            ))}
          </div>

          {/* Core Performance metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-500 block">45,000+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Verified Finance Leads Generated</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Acquired through compliant landing channels</span>
            </div>

            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-teal block">$40M+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Financial Ad Budgets Managed</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Delivering optimal conversion indices</span>
            </div>

            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 block">+165%</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Average Conversion Growth %</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Documented across regional providers</span>
            </div>

            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-400 block">1,800+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Finance Keywords Ranked #1</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Positioned ahead of directory aggregators</span>
            </div>
          </div>

        </div>
      </section>

      {/* 📚 WHAT IS FINANCE DIGITAL MARKETING SECTION */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Coins className="text-emerald-505 w-3.5 h-3.5" />
                <span>The Direct Highway to Client Assets</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is Finance Digital Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Finance digital marketing is the strategic deployment of compliant search engine optimization, secure interactive pre-qualification wizards, authoritative backlink maps, high-intent Google search ad configurations, and modern AI query indexing to capture, verify, and nurture corporate or retail finance clients systematically.
              </p>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                We design and build complete growth platforms. Unlike generic agencies that focus on raw click counts, we optimize target systems for the compliance rules governing fintech and wealth portfolios. We build interactive calculator wizards and localized citation networks that build immediate user trust, and direct inquiries straight to your sales team. This minimizes customer acquisition costs and boosts bottom-line profitability.
              </p>

              {/* Graphic Flow Layout */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block">THE ACCOMODATING LEAD ACQUISITION SYSTEM</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  <div className="bg-[#070b13] rounded-xl p-3 border border-slate-900">
                    <span className="text-emerald-500 font-mono font-bold text-xs block">STAGE 01</span>
                    <span className="text-xs font-semibold text-white block mt-1">Credibility Discovery</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">High-wealth searchers discover your firm on trustworthy organic positions.</p>
                  </div>
                  <div className="bg-[#070b13] rounded-xl p-3 border border-slate-900">
                    <span className="text-emerald-500 font-mono font-bold text-xs block">STAGE 02</span>
                    <span className="text-xs font-semibold text-white block mt-1">Pre-Qualification</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Diners fill out secure worksheets or calculators, building immediate intent.</p>
                  </div>
                  <div className="bg-[#070b13] rounded-xl p-3 border border-slate-900">
                    <span className="text-emerald-500 font-mono font-bold text-xs block">STAGE 03</span>
                    <span className="text-xs font-semibold text-white block mt-1">Verified Routing</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Direct customer details trigger automated CRM alarms, securing fast callbacks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual finance acquisition portal mockup */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#070a10] border border-slate-900 rounded-3xl p-6 relative shadow-2xl overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-300" />
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-900 font-mono text-[10px] text-slate-505">
                  <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-505" /> Direct Securitized API Stream</span>
                  <span>Lead Pipeline</span>
                </div>

                <div className="space-y-3.5">
                  {[
                    { id: "L-9304", tag: "Business Loan Request", details: "$250,000 Equipment Financing", rating: "Credit Tier: 740+", source: "Direct Ads Landing", time: "Just now" },
                    { id: "C-9303", tag: "HNWI Portfolio Review", details: "$1.8M Assets under Advisement", rating: "Qualified Wealth Account", source: "AI GEO Citation Index", time: "18 mins ago" },
                    { id: "I-9302", tag: "Commercial Policy Quote", details: "Multi-facility Liability Insurance", rating: "Commercial Entity Verified", source: "Local Map Premium Click", time: "44 mins ago" }
                  ].map((lead, index) => (
                    <div key={index} className="bg-[#030509] border border-slate-950 p-3 rounded-xl flex justify-between items-center hover:border-slate-800 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-white">{lead.id}</span>
                          <span className="text-[8px] uppercase font-mono font-black py-0.5 px-2 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{lead.tag}</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-300">{lead.details}</p>
                        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                          <span>{lead.rating}</span>
                          <span>•</span>
                          <span>Source: {lead.source}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-[9px] font-mono text-slate-500 block">{lead.time}</span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold font-mono mt-1">
                          <Check className="w-3 h-3" /> Routed to CRM
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Secure footprint details */}
                <div className="bg-[#030509] border border-slate-900 rounded-xl p-3.5 mt-4">
                  <div className="flex justify-between items-center font-mono text-[9px] text-slate-400">
                    <span>Regulatory Audit Checked:</span>
                    <span className="text-emerald-400 flex items-center gap-1"><Lock className="w-3 h-3" /> Fully SEC compliant</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🛠️ SERVICE GRID SECTION */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950" id="services-grid-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">EXPERTISE MATRIX</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white">
                Our Finance Marketing Services
              </h2>
              <p className="text-slate-400 text-sm max-w-xl font-light">
                Complete growth campaigns built around secure frameworks, authoritative asset pages, high-intent local map SEO, and conversion pipelines.
              </p>
            </div>
            
            {/* Quick selectors for tabs */}
            <div className="flex flex-wrap gap-1 bg-[#070b13] p-1.5 rounded-xl border border-slate-900">
              {servicesCollection.slice(0, 4).map((srv, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`text-[10px] py-1.5 px-3.5 rounded-lg font-bold font-mono transition-all cursor-pointer ${
                    activeTabIdx === idx 
                      ? 'bg-emerald-600 text-black shadow-lg' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-950'
                  }`}
                >
                  {srv.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Detailed View Card */}
            <div className="lg:col-span-5 bg-[#070b13] border border-slate-900 rounded-2.5xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-emerald-500 font-bold">
                {servicesCollection[activeTabIdx].badge}
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 inline-block">Active Service Strategy</span>
                <h3 className="text-xl md:text-2xl font-black text-white font-display border-b border-slate-900 pb-3">
                  {servicesCollection[activeTabIdx].title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                  {servicesCollection[activeTabIdx].desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-mono font-black text-slate-500 uppercase block tracking-wider">Tactical Deliverables:</span>
                  {servicesCollection[activeTabIdx].deliverables.map((item, id) => (
                    <div key={id} className="flex gap-2.5 items-start text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {servicesCollection[activeTabIdx].keywords && (
                  <div className="pt-4 border-t border-slate-900">
                    <span className="text-[9px] font-mono font-black text-slate-500 uppercase block mb-1.5">Primary Capture Intentions:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {servicesCollection[activeTabIdx].keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#030509] border border-slate-900 text-emerald-400">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* List Menu of other capabilities */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesCollection.map((srv, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveTabIdx(index)}
                  className={`border rounded-2xl p-4 transition-all cursor-pointer text-left relative overflow-hidden group ${
                    activeTabIdx === index 
                      ? 'bg-[#0b1424] border-emerald-500/50 shadow-lg scale-[1.01]' 
                      : 'bg-[#070b13]/80 border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2.5">
                    <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-wider">{srv.badge}</span>
                    <span className="text-slate-600 font-mono text-xs font-black">#{index + 1 < 10 ? '0' + (index + 1) : index + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white block group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-normal font-light line-clamp-2 mt-1.5">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 💼 TRUSTED INDUSTRIES SEGMENT */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">TARGET AUDIENCE MODELING</span>
            <h2 className="text-3xl font-black font-display text-white">
              Financial Businesses We Work With
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              We design specific target pipelines matching the customer behaviors and compliance rules of each niche.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetIndustries.map((ind, id) => (
              <div 
                key={id} 
                className="bg-[#070b13] border border-slate-900 rounded-2xl p-4 hover:border-slate-800 transition-all hover:scale-[1.01] text-left hover:shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-3 text-emerald-500 font-mono text-xs font-bold">
                  {id + 1 < 10 ? '0' + (id + 1) : id + 1}
                </div>
                <h3 className="text-xs font-bold text-white block tracking-wide">{ind.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light mt-2">{ind.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 👣 OUR PROCESS FLOW */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">IMPLEMENTATION PATHWAY</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white border-b border-slate-900 pb-2 inline-block">
                Our Finance Marketing Process
              </h2>
              <p className="text-slate-400 text-sm max-w-lg font-light leading-relaxed">
                A structured, step-by-step methodology built for maximum compliance, speed, and customer acquisition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            {processFlowSteps.map((step, idx) => (
              <div key={idx} className="bg-[#070b13] border border-slate-900 rounded-2xl p-5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 font-mono text-slate-800 font-black text-3xl group-hover:text-emerald-500/10 transition-colors">
                  {step.num}
                </div>
                <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-widest block mb-2">PROCESS PHASES</span>
                <h3 className="text-sm font-bold text-white tracking-wide block border-b border-slate-950 pb-2 mb-3 group-hover:text-emerald-400 transition-colors">
                  {step.name}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🎯 why finance Businesses need digital marketing BENEFITS */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">GROWTH ADVANTAGES</span>
            <h2 className="text-3xl font-black font-display text-white">
              Why Finance Businesses Need Digital Marketing
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              By investing in compliant search presence and targeted landing structures, you build highly predictable business growth streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefitsGrid.map((ben, id) => (
              <div 
                key={id} 
                className="bg-[#070b13] border border-slate-900 rounded-2.5xl p-5 hover:border-slate-800 transition-colors text-left relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <Check className="w-5 h-5 animate-pulse" />
                </div>
                <h3 className="text-sm font-extrabold text-white block tracking-wide">{ben.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light mt-2.5">{ben.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📍 LOCAL SEO SECTION - DOMINATE SEARCH */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full py-1.5 px-3.5 font-mono font-bold text-[10px] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-brand-teal" />
              <span>Dominate Near Me Maps Volume</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
              Dominate Local Finance Searches & Google Maps
            </h2>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              When target companies seek out loan products or wealth managers in your vicinity, organic map packs are the most valuable visual footprint they interact with. We place your corporate coordinates directly in their sight line.
            </p>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              Our map optimizations maintain spotless geographic details, trigger positive customer review pipelines, and publish authoritative schema codes that secure topmost ratings across maps listings.
            </p>

            {/* Quick Keyword Selector list */}
            <div className="space-y-4 pt-2">
              <span className="text-[10px] uppercase font-mono font-black text-slate-500 block">Select Map Target Phrase:</span>
              <div className="flex gap-2.5">
                {[
                  { key: 'advisor_near_me', label: 'Financial Advisor Map' },
                  { key: 'business_loans', label: 'Corporate Lending Pack' },
                  { key: 'wealth_mgnt', label: 'Wealth Advisory Organic' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedKeywordQuery(item.key as any)}
                    className={`text-[9px] font-mono py-1.5 px-3.5 rounded border transition-colors cursor-pointer ${
                      selectedKeywordQuery === item.key
                        ? 'bg-emerald-500/20 border-emerald-500 text-white'
                        : 'bg-[#070b13] border-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#070b13] border border-slate-905 rounded-2.5xl p-5 relative shadow-xl text-left">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4 font-mono text-[9px] text-slate-505">
                <span>Google Local Maps Ranking Audit</span>
                <span className="text-emerald-400 animate-pulse">● Connected to API</span>
              </div>

              <div className="space-y-3.5">
                <div className="bg-[#03060c] p-3.5 rounded-lg border border-slate-950 font-mono">
                  <span className="text-[8px] uppercase font-black text-slate-500 block">Diner Search Intent:</span>
                  <p className="text-xs text-white hover:text-emerald-400 truncate mt-1">
                    "{keywordsData[selectedKeywordQuery].searchQuery}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-[#03060c] p-3 rounded-lg border border-red-500/10 text-left">
                    <span className="text-[8px] uppercase font-mono font-bold text-red-400 block">Unoptimized Baseline Rank:</span>
                    <p className="text-[11px] text-slate-400 leading-snug mt-1">
                      {keywordsData[selectedKeywordQuery].baselineRank}
                    </p>
                  </div>
                  <div className="bg-[#05111a] p-3 rounded-lg border border-emerald-500/20 text-left">
                    <span className="text-[8px] uppercase font-mono font-bold text-emerald-400 block">Optimized AKGLS Rank:</span>
                    <p className="text-[11px] text-white font-semibold leading-snug mt-1">
                      {keywordsData[selectedKeywordQuery].akglsRank}
                    </p>
                  </div>
                </div>

                <div className="bg-[#03060c] p-3 rounded-xl border border-slate-950 text-left">
                  <span className="text-[9px] uppercase font-mono font-bold text-slate-500 block">Estimated Asset Yield / Conversions:</span>
                  <p className="text-xs text-emerald-400 font-extrabold mt-1">
                    {keywordsData[selectedKeywordQuery].estimatedImpact}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-normal font-light mt-1.5 border-t border-slate-900/50 pt-1.5">
                    <strong className="text-slate-400 font-bold font-mono text-[9px] uppercase block mb-1">Crawl Modifications:</strong>
                    {keywordsData[selectedKeywordQuery].enhancements}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 LEAD GENERATION CHANNELS SECTION */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="bg-[#070b13] border border-slate-905 rounded-3xl p-5 relative shadow-xl overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-4 font-mono text-[9px] text-slate-500">
                  <span>Target Inflow channels</span>
                  <span>Lead Verification Active</span>
                </div>

                <div className="space-y-3">
                  {[
                    { source: "Google Search (HNW Advisory)", leads: "+240 monthly submissions", conversion: "Consultation Rate: 68%" },
                    { source: "LinkedIn Campaigns (Corporate Loan)", leads: "+180 quarterly submissions", conversion: "Pre-Approval Rate: 42%" },
                    { source: "Local Map Citation (Advisory)", leads: "+90 direct phone call leads", conversion: "Direct Booking Rate: 75%" },
                    { source: "Fintech App Signups (Subscribers)", leads: "+1,400 monthly downloads", conversion: "Active Subscriber Rate: 54%" }
                  ].map((chan, idx) => (
                    <div key={idx} className="bg-[#030509] border border-slate-950 p-3 rounded-xl flex justify-between items-center transition-all hover:border-slate-800">
                      <div className="space-y-1 text-left">
                        <span className="text-[9px] font-mono font-bold text-slate-500 block">0{idx + 1} — {chan.source}</span>
                        <span className="text-xs font-black text-emerald-400 font-display block">{chan.leads}</span>
                        <span className="text-[10px] text-slate-400 font-light font-mono italic block">{chan.conversion}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-700" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 inline-block">ACQUISITION FUNNEL SCALE</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-[1.1]">
                Generate More Financial Leads & Commercial Consultations
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                We combine organic search visibility with targeted social ads to capture high-value clients across regional and global markets.
              </p>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Rather than using generic, static PDF opt-ins, our portals connect prospects with responsive financial modeling worksheets, pre-qualification assessment modules, and direct consultation pipelines mapped straight to your CRM.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <span className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Google Organic Search
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Local Map Listings
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Targeted LinkedIn Campaigns
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Meta Lead Ads
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> AI-Powered Search Platforms
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> WhatsApp Direct Streams
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔮 FUTURE-FOCUSED SECTION - AI-POWERED MARKETING */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full py-1.5 px-3.5 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>Generative Search Ascendancy (GEO)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white border-b border-slate-900 pb-3">
                AI-Powered Marketing Solutions for Finance Businesses
              </h2>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                As prospective clients increasingly ask conversational AI engines like ChatGPT Search, Claude, and Gemini for financing alternatives or portfolio managers, classical website setups fail to deliver visibility.
              </p>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                We deploy Generative Engine Optimization (GEO). By structuring semantic JSON schema indices, building highly cited external backlink networks, and aligning menu databases with conversational prompts, we ensure AI platforms consistently list your firm first.
              </p>

              {/* Live Interactive Concept Simulator */}
              <form onSubmit={triggerAISimulation} className="bg-[#070b13] border border-slate-900 rounded-2xl p-4 space-y-3">
                <label className="text-[10px] uppercase font-mono font-black text-slate-400 block mb-1">Simulate AI Search Query (Try Loan, Wealth, or custom tags):</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={financeConceptInput}
                    onChange={(e) => setFinanceConceptInput(e.target.value)}
                    className="flex-1 bg-[#030509] text-xs text-white border border-slate-900 rounded-xl px-3.5 py-2 placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                    placeholder="e.g., fractional asset management or boutique loan groups"
                  />
                  <button 
                    type="submit"
                    disabled={isSimulatingAI}
                    className="bg-emerald-600 hover:bg-emerald-500 text-black py-2 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex-shrink-0 disabled:opacity-50"
                  >
                    {isSimulatingAI ? 'Scanning...' : 'Test AI Visibility'}
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#070b13] border border-slate-900 rounded-2.5xl p-5 relative shadow-xl text-left overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-emerald-500 font-black animate-pulse">
                  AI SIMULATION ACTIVE
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-900 pb-2.5 mb-2 font-mono text-[10px] text-slate-400">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span>Perplexity / GPT Response Stream</span>
                  </div>

                  <div className="bg-[#03060c] p-3.5 rounded-xl border border-slate-950 font-mono">
                    <span className="text-[8px] uppercase font-bold text-slate-500 block">AI References Indexed:</span>
                    <div className="flex gap-1.5 flex-wrap mt-1">
                      {aiSimulationOutput.references.map((item, idx) => (
                        <span key={idx} className="text-[9px] py-0.5 px-2 rounded bg-slate-950 border border-slate-700 text-slate-350">
                          🔍 {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#03060c] p-3.5 rounded-xl border border-slate-950 text-left">
                    <span className="text-[8px] uppercase font-mono font-bold text-slate-500 block">Generative Response Outcome:</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-mono mt-1.5">
                      {aiSimulationOutput.recommendedResult}
                    </p>
                  </div>

                  <div className="bg-[#05111a] p-3 rounded-lg border border-emerald-500/10 flex justify-between items-center text-xs">
                    <span className="font-mono text-slate-300">AKGLS Expected AI Index:</span>
                    <span className="font-mono font-black text-emerald-400 text-sm">{aiSimulationOutput.indexScore}% Confidence Score</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📐 HIGH-CONVERTING WEBSITE DESIGN */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="bg-[#070b13] border border-slate-900 rounded-3xl p-6 relative shadow-2xl">
                <div className="absolute top-0 left-0 h-1 w-20 bg-emerald-600" />
                <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4 font-mono text-[9px] text-slate-400">
                  <span>SSL & PCI COMPLIANT WIREFRAME</span>
                  <span className="text-emerald-450">Active Layout</span>
                </div>

                <div className="space-y-4">
                  {/* Mock Calculator Interface */}
                  <div className="bg-[#03060c] p-4 rounded-xl border border-slate-950 space-y-3">
                    <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Secure Business Loan Pre-Qualification</span>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Mortgage Request Amount:</span>
                        <span className="font-bold text-white">$150,000</span>
                      </div>
                      <div className="h-1 bg-slate-900 rounded-lg" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Amortization Term Period:</span>
                        <span className="font-bold text-white">15 Years Fixed</span>
                      </div>
                      <div className="h-1 bg-slate-900 rounded-lg" />
                    </div>

                    <div className="bg-emerald-500/10 p-2.5 rounded border border-emerald-550/20 text-center">
                      <span className="text-[9px] text-slate-400 uppercase font-mono block">Estimated Monthly Amortization:</span>
                      <span className="text-sm font-black text-emerald-400 font-mono block mt-0.5">$1,240 / mo</span>
                    </div>

                    <button 
                      type="button" 
                      className="w-full bg-[#070b13] hover:bg-slate-950 border border-slate-900 text-xs text-white py-2 rounded-lg font-mono font-bold transition-all cursor-default"
                    >
                      File Instant Secure Pre-Qualification
                    </button>
                  </div>

                  {/* Trust factors */}
                  <div className="flex justify-around text-center text-slate-500 font-mono text-[9px] pt-1">
                    <span>🛡️ Bank-Level Encryption</span>
                    <span>•</span>
                    <span>✅ SOC2 Auditor Verified</span>
                    <span>•</span>
                    <span>🏦 ADA Accessible</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 inline-block">SECURE DIGITAL PRESENCE</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                High-Converting Finance Website Design
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                A regular business website fails in the competitive financial market. Today's investors demand instant pre-qualification calculators, frictionless consultation calendar synchronization, and immaculate mobile responsiveness.
              </p>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                We design and build secure, conversion-oriented platforms. By pairing clean aesthetics with high-performance frameworks, we help you secure qualified inquiries and consultations quickly.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono font-bold pt-2">
                <div className="bg-[#070b13] p-3 rounded-lg border border-slate-900 flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Menu Pre-Approval Portals
                </div>
                <div className="bg-[#070b13] p-3 rounded-lg border border-slate-900 flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Interactive Rate Calculators
                </div>
                <div className="bg-[#070b13] p-3 rounded-lg border border-slate-900 flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Real-time Consultation Bookings
                </div>
                <div className="bg-[#070b13] p-3 rounded-lg border border-slate-900 flex items-center gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Compliant Security Structures
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🏆 CASE STUDIES / RESULTS SECTION */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">PROVEN PERFORMANCE</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white">
                Finance Marketing Success Stories
              </h2>
              <p className="text-slate-400 text-sm max-w-xl font-light">
                Discover how we engineer high-performing marketing funnels that lower customer acquisition costs and drive multi-million dollar asset conversions.
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="flex gap-1.5 bg-[#070b13] p-1 rounded-lg border border-slate-900 font-mono text-xs">
              {successStories.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCaseIdx(idx)}
                  className={`py-1 px-3 rounded cursor-pointer transition-colors ${
                    activeCaseIdx === idx 
                      ? 'bg-emerald-600 text-black font-extrabold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.client.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#070b13] border border-slate-900 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="text-[10.5px] font-mono text-emerald-550 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 inline-block font-black">ACTIVE STUDY DETAIL</span>
                
                <h3 className="text-2xl md:text-3.5xl font-black text-white font-display leading-tight">
                  How we optimized <span className="text-emerald-450">{successStories[activeCaseIdx].client}</span>
                </h3>

                <div className="space-y-3.5">
                  <div className="bg-[#030509] p-3.5 rounded-xl border border-slate-950 text-xs text-slate-350">
                    <strong className="text-red-400 font-mono text-[10px] uppercase block mb-1">Prior Challenge:</strong>
                    "{successStories[activeCaseIdx].issue}"
                  </div>

                  <div className="bg-[#030509] p-3.5 rounded-xl border border-slate-950 text-xs text-slate-305">
                    <strong className="text-emerald-400 font-mono text-[10px] uppercase block mb-1">Executed AKGLS Strategy:</strong>
                    {successStories[activeCaseIdx].strategy}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] uppercase font-mono font-black text-slate-400 block">Verified Lead Growth & ROI Impact:</span>
                
                <div className="space-y-3 font-mono">
                  {successStories[activeCaseIdx].results.map((res, id) => (
                    <div key={id} className="bg-[#030509] border border-slate-950 p-4 rounded-xl text-left flex justify-between items-center transition-all hover:scale-[1.01]">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block tracking-wider font-bold">Performance Milestone</span>
                        <span className="text-xs text-white font-semibold block mt-0.5">{res.key}</span>
                      </div>
                      <span className="text-lg md:text-xl font-black text-emerald-400">{res.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ⭐ WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">THE AKGLS EDGE</span>
            <h2 className="text-3xl font-black font-display text-white">
              Why Choose AKGLS Group for Finance Marketing?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We align stunning visual design, strict compliance, and high-converting acquisition channels to help you grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsCards.map((card, id) => (
              <div 
                key={id} 
                className="bg-[#070b13] border border-slate-900 rounded-2.5xl p-5 hover:border-slate-800 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-505/20 flex items-center justify-center text-emerald-400 mb-3 font-mono font-black text-xs">
                  0{id + 1}
                </div>
                <h3 className="text-sm font-extrabold text-white block tracking-wide">{card.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mt-2">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 MARKETING TOOLS AND TECHNOLOGIES */}
      <section className="bg-[#04060a] py-16 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">INTEGRATED TECHNOLOGY LAYER</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Tools & Technologies We Use
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              We use the industry's leading tools to track conversions, verify rankings, and optimize campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketingToolsList.map((tool, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-xl p-3.5 text-left transition-colors hover:border-slate-850"
              >
                <span className="text-xs font-bold text-white block truncate">{tool.name}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-1.5 block">{tool.type}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💳 PACKAGES SECTION */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950" id="finance-packages-calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-14">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">GROWTH PACKAGES</span>
            <h2 className="text-3xl font-black font-display text-white">
              Flexible Finance Marketing Packages
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Explore our flexible packages or connect with us to build a tailored acquisition strategy designed for your specific financial niche.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {packagesLayout.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`border rounded-3xl p-6 relative overflow-hidden text-left flex flex-col justify-between ${
                  pkg.current 
                    ? 'bg-[#0b1424] border-emerald-505 shadow-2xl scale-[1.02] z-10' 
                    : 'bg-[#070b13] border-slate-900 hover:border-slate-800'
                }`}
              >
                {pkg.current && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-black py-1 px-4 text-[9px] font-mono font-black uppercase tracking-widest rounded-bl-xl">
                    Highly Recommended
                  </div>
                )}

                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block font-bold">GROWTH MODEL PLANS</span>
                  <h3 className="text-xl md:text-2xl font-black text-white font-display border-b border-slate-950 pb-2.5">
                    {pkg.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-2xl md:text-3.5xl font-black text-white font-display font-mono">{pkg.price}</span>
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="space-y-3.5 pt-4 border-t border-slate-950">
                    <span className="text-[9px] font-mono font-black text-slate-500 uppercase block tracking-wider">Features Included:</span>
                    {pkg.features.map((ft, ftIdx) => (
                      <div key={ftIdx} className="flex gap-2.5 items-start text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6">
                  <a 
                    href="#finance-audit-section"
                    className={`block w-full text-center py-3 rounded-xl text-xs font-mono font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                      pkg.current 
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-black shadow-lg shadow-emerald-950/40' 
                        : 'bg-[#03060c] hover:bg-slate-950 border border-slate-900 text-slate-300 hover:text-white'
                    }`}
                  >
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#070b13] border border-slate-900 rounded-2xl p-5 text-center mt-12 max-w-2xl mx-auto">
            <span className="text-xs text-slate-305 font-light font-display">Need a custom enterprise approach or licensing arrangements?</span>
            <a 
              href="#finance-audit-section" 
              className="text-emerald-400 font-mono text-xs font-black uppercase tracking-wider ml-1.5 hover:underline"
            >
              Request Custom Finance Marketing Plan →
            </a>
          </div>

        </div>
      </section>

      {/* ❓ Frequently Asked Questions Section */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">ANSWER VAULT</span>
            <h2 className="text-3xl font-black font-display text-white">
              Frequently Asked Questions About Finance Marketing
            </h2>
            <p className="text-slate-400 text-sm font-light">
              We provide clear explanations about our organic SEO, ad options, and visual fintech campaigns.
            </p>
          </div>

          <div className="space-y-3">
            {faqItemsList.map((item, idx) => {
              const isFaqOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#070b13] border border-slate-900 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isFaqOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 hover:bg-slate-950 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-white tracking-wide">{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-450 flex-shrink-0 transition-transform duration-200 ${isFaqOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isFaqOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-400 leading-relaxed font-light border-t border-slate-950">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 📋 FREE AUDIT SECTION */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950" id="finance-audit-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full py-1.5 px-3.5 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Diagnostic System Assessment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
              Get a Free Finance Marketing Audit
            </h2>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              Ready to command more organic visibility and convert higher-quality leads? Our engineers will run a full audit on your search rankings, Schema tags, and ad efficiency metrics.
            </p>

            <div className="space-y-3 font-mono text-xs text-slate-350">
              <div className="flex gap-2.5 items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Domain and backlink authority evaluation</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Local Google Business Profile ranking review</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Conversion and mobile pre-qualification audit</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>ChatGPT and Gemini Generative Search visible index check</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#070b13] border border-slate-905 rounded-3xl p-5 sm:p-6 relative shadow-2xl text-left">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-5 font-mono text-[9px] text-slate-400">
                <span>Direct Security Verification Audit form</span>
                <span className="text-emerald-400 flex items-center gap-1">🔒 SEC compliant data pipe</span>
              </div>

              {crawlingStatus === 'idle' ? (
                <form onSubmit={executeAuditCrawler} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9.5px] font-mono uppercase font-black text-slate-450 block mb-1">Company Name *</label>
                      <input 
                        type="text" 
                        required
                        value={auditParams.companyName}
                        onChange={(e) => setAuditParams({...auditParams, companyName: e.target.value})}
                        className="w-full bg-[#03060c] text-xs text-white border border-slate-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder-slate-650"
                        placeholder="e.g. Vertex Capital Advisors"
                      />
                    </div>
                    <div>
                      <label className="text-[9.5px] font-mono uppercase font-black text-slate-450 block mb-1">Website URL (Optional)</label>
                      <input 
                        type="url" 
                        value={auditParams.websiteUrl}
                        onChange={(e) => setAuditParams({...auditParams, websiteUrl: e.target.value})}
                        className="w-full bg-[#03060c] text-xs text-white border border-slate-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder-slate-650"
                        placeholder="e.g. www.vertexcapital.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9.5px] font-mono uppercase font-black text-slate-450 block mb-1">Services Offered</label>
                      <select 
                        value={auditParams.servicesOffered}
                        onChange={(e) => setAuditParams({...auditParams, servicesOffered: e.target.value})}
                        className="w-full bg-[#03060c] text-xs text-white border border-slate-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 font-mono"
                      >
                        <option>Financial Advisory</option>
                        <option>Loan & Lending services</option>
                        <option>Alternative Investment Fund</option>
                        <option>Corporate Mortgages</option>
                        <option>Fintech Platform</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9.5px] font-mono uppercase font-black text-slate-450 block mb-1">Target Locations</label>
                      <input 
                        type="text" 
                        value={auditParams.targetLocations}
                        onChange={(e) => setAuditParams({...auditParams, targetLocations: e.target.value})}
                        className="w-full bg-[#03060c] text-xs text-white border border-slate-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder-slate-650"
                        placeholder="e.g. Chicago and wealthy tech hubs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9.5px] font-mono uppercase font-black text-slate-450 block mb-1">Professional Email *</label>
                      <input 
                        type="email" 
                        required
                        value={auditParams.email}
                        onChange={(e) => setAuditParams({...auditParams, email: e.target.value})}
                        className="w-full bg-[#03060c] text-xs text-white border border-slate-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder-slate-650"
                        placeholder="e.g. advisor@vertexcapital.com"
                      />
                    </div>
                    <div>
                      <label className="text-[9.5px] font-mono uppercase font-black text-slate-450 block mb-1">Phone Number</label>
                      <input 
                        type="text" 
                        value={auditParams.phone}
                        onChange={(e) => setAuditParams({...auditParams, phone: e.target.value})}
                        className="w-full bg-[#03060c] text-xs text-white border border-slate-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder-slate-650"
                        placeholder="e.g. +1 (312) 440-2051"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 font-mono text-[9px] text-slate-500">
                    <input 
                      type="checkbox" 
                      required
                      checked={auditParams.agreed} 
                      onChange={(e) => setAuditParams({...auditParams, agreed: e.target.checked})}
                      className="mt-0.5 accent-emerald-500" 
                    />
                    <span>Accept regulatory conditions. We promise to protect your security indices flawlessly.</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-black py-3.5 font-mono font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-emerald-950 transition-all cursor-pointer"
                  >
                    Run Automated Security & SEO Audit Cralwer
                  </button>
                </form>
              ) : (
                <div className="space-y-6 py-6 text-center font-mono">
                  {crawlingStatus === 'running' ? (
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-full border-4 border-slate-900 border-t-emerald-500 animate-spin mx-auto" />
                      <span className="text-xs text-slate-300 block">Analyzing targeted metrics logs...</span>
                      
                      <div className="w-full bg-slate-950 h-1.5 rounded-lg overflow-hidden border border-slate-900 relative">
                        <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${progressRatio}%` }} />
                      </div>

                      <div className="p-3 bg-[#03060c] border border-slate-900 rounded-lg text-[10px] text-slate-400 font-light min-h-[46px] flex items-center justify-center">
                        {crawlingLogs}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-sm font-bold text-white block">Automated Index Scanning Successfully Complete!</span>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                          We mapped your specified parameters against 40+ regulatory parameters. Your Growth Blueprint is compiled.
                        </p>
                      </div>

                      <div className="bg-[#05111a] border border-emerald-555/20 p-4 rounded-xl text-left space-y-2">
                        <span className="text-[8.5px] uppercase font-black text-emerald-400 block tracking-widest">Growth Expert Dispatch:</span>
                        <p className="text-[10px] text-slate-205 leading-relaxed font-light">
                           Our specialist (Shashi Prabha Singh, Managing Partner) will email you the full index report. To speed up setup, book an immediate strategy sync with her over WhatsApp:
                        </p>
                        <div className="flex gap-2.5 pt-1">
                          <a 
                            href={WHATSAPP_LINK}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-black py-2 px-4 rounded border text-[10px] uppercase font-bold tracking-wider transition-all inline-block"
                          >
                            WhatsApp Strategy Team
                          </a>
                          <button 
                            type="button"
                            onClick={() => setCrawlingStatus('idle')}
                            className="bg-[#03060c] hover:bg-slate-950 border border-slate-900 py-2 px-4 text-xs font-bold font-mono text-slate-300 hover:text-white rounded transition-colors"
                          >
                            Run New Assessment
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 📚 BLOG SUGGESTED ARTICLES SECTION */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-emerald-550 uppercase tracking-widest font-black bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block text-emerald-450">KNOWLEDGE BANK</span>
            <h2 className="text-3xl font-black font-display text-white">
              Suggested Finance Marketing Articles
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Read our latest professional insights detailing Google core search algorithms, Fintech growth rules, and Generative SEO setups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Finance SEO Guide", desc: "How to rank local advisors on high-intent transactional search terms governing retirement planning and mortgage advisory services." },
              { title: "Fintech Marketing Strategies", desc: "Engineering scalability for mobile apps—optimizing paid user install campaigns on Meta & LinkedIn and calculations behind sustainable CAC ratios." },
              { title: "Google Ads for Financial Services", desc: "Strategic configurations that eliminate low credit scoring noise and target motivated corporate loan buyers directly." },
              { title: "AI Marketing for Finance Companies", desc: "GEO strategies ensuring ChatGPT, Claude, and Gemini conversational search indexes refer to your firm proudly." },
              { title: "Finance Website Best Practices", desc: "Integrating secure API pre-qualification wizards, dynamic rate worksheets, and accessible UX frameworks safely." },
              { title: "Financial Lead Generation Tips", desc: "Constructing secure CRM handshakes that dispatch newly filed borrower accounts straight to specialists in less than five minutes." }
            ].map((art, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-2.5xl p-5 hover:border-slate-800 transition-all hover:scale-[1.01] text-left relative flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[9px] font-mono uppercase font-black text-emerald-400 block tracking-widest">Industry Insight</span>
                  <h3 className="text-sm font-bold text-white tracking-wide block border-b border-slate-950 pb-2.5">{art.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{art.desc}</p>
                </div>
                
                <span className="text-[10px] text-emerald-500 font-mono font-bold uppercase tracking-widest block pt-4 mt-4 border-t border-slate-950 cursor-default">
                  Read article →
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 👑 FINAL CTA SECTION */}
      <section className="bg-[#020408] border-t border-slate-950 py-24 relative overflow-hidden text-center">
        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 inline-block mb-2">PARTNERSHIP INITIATIVES</span>
          
          <h2 id="final-cta-heading" className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Ready to Grow Your Financial Business?
          </h2>

          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Connect with our managing directors to build a secure, compliance-ready visual pipeline designed to generate highly qualified inquiries on autopilot.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-3 uppercase font-mono text-xs">
            <a 
              href="#finance-audit-section"
              className="bg-emerald-600 hover:bg-emerald-500 text-black py-4 px-8 rounded-xl font-extrabold transition-all shadow-lg inline-block cursor-pointer"
            >
              Book Free Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white py-4 px-8 rounded-xl font-bold transition-all inline-block"
            >
              Request Growth Strategy
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 pt-5 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
            <span>🛡️ Regulatory Checked</span>
            <span>•</span>
            <span>📝 Private NDA Ensured</span>
            <span>•</span>
            <span>🔒 Complete Security Index</span>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM RESERVATION CTA */}
      <div className="fixed bottom-4 right-4 z-50 animate-fade-in pointer-events-auto">
        <a 
          href="#finance-audit-section" 
          className="bg-emerald-600 hover:bg-emerald-550 border border-emerald-500/30 text-black font-mono font-black text-[10px] tracking-widest uppercase hover:underline py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping inline-block" />
          Request Secure Lead Audit
        </a>
      </div>
    </>
  );
}

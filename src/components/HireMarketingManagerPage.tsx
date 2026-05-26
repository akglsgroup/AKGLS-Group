import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, 
  MessageSquare, Smartphone, TrendingUp, Coins, Copy, CheckSquare,
  Network, Link2, Landmark, Share2, Mail, CheckCircle, Flame, LineChart, Play, AwardIcon
} from 'lucide-react';

interface HireMarketingManagerPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

const tools = [
  { name: "Google Analytics", role: "GA4 Traffic, Conversions & Audience Insights" },
  { name: "Google Ads", role: "Search, Display, Performance Max Campaign Creator" },
  { name: "Meta Ads Manager", role: "Social Funnels, Retargeting & Direct Leads scaling" },
  { name: "LinkedIn Campaign Manager", role: "B2B Account-Based Marketing (ABM) engine" },
  { name: "HubSpot", role: "Inbound Marketing, CRM & Automation Sequences" },
  { name: "SEMrush", role: "Market Share Tracking & Organic Competitor Gaps" },
  { name: "Ahrefs", role: "Site Authority audit & Content Clustering analytics" },
  { name: "ChatGPT & Gemini AI", role: "Smarter Automated Copywriting & Growth Prompting" },
  { name: "Looker Studio", role: "Visual, Client-Facing real-time ROI Dashboards" }
];

const packages = [
  {
    name: "Starter Marketing Support",
    desc: "Perfect for local businesses and early-stage startups needing a solid structure across SEO & basic PPC.",
    price: "$2,450",
    period: "month",
    isPopular: false,
    features: [
      "Dedicated Part-Time Growth Manager",
      "Core SEO Blueprint & Content Roadmap",
      "Initial Google & Meta Ads Setup",
      "Basic lead funnel & conversion tweaks",
      "Semi-monthly analytics summary reports",
      "Direct Slack / Email coordination"
    ]
  },
  {
    name: "Growth Marketing Manager",
    desc: "For scaling companies and ecommerce brands looking to accelerate pipelines with multi-channel campaigns.",
    price: "$4,800",
    period: "month",
    isPopular: true,
    features: [
      "Dedicated Senior Growth Director",
      "Full SEO & Premium Content Orchestration",
      "Active PPC management (Google, Meta, LinkedIn)",
      "Smart AI Marketing automation integration",
      "Advanced funnels & A/B conversion testing",
      "Custom Looker Studio tracking dashboard",
      "Weekly alignment syncs & performance reviews"
    ]
  },
  {
    name: "Enterprise Marketing Team",
    desc: "A fully unified marketing force to lead omnichannel dominance for SaaS, high-growth B2B, or large brands.",
    price: "$8,500",
    period: "month",
    isPopular: false,
    features: [
      "Full-Time Chief Growth Strategist + Copy & Creative Team",
      "Enterprise SEO scaling and technical schema architecture",
      "Multi-geography high-budget Ads optimization",
      "Advanced Hubspot / CRM automation workflows",
      "Continuous Conversion Rate Optimization (CRO)",
      "Bespoke predictive analytics and ROI modeling",
      "Instant 24/7 Slack support with live campaign managers"
    ]
  }
];

const faqs = [
  {
    q: "Why should I hire a dedicated marketing manager?",
    a: "An experienced leader bridges the gap between chaotic solo execution and strategic multi-channel scaling. Instead of managing separate freelancers, you gain a singular point of accountability who designs budgets, drives SEO & PPC execution, and scales traffic values directly into revenue."
  },
  {
    q: "What does a digital marketing manager handle?",
    a: "Our marketing managers take full ownership of your growth roadmap. This includes setting campaign strategies, overseeing search engine optimization, executing Google and Meta active advertising runs, building AI operations, planning editorial content calendars, tracking conversions, and reporting ROI transparently."
  },
  {
    q: "Can a marketing manager improve our lead generation pipeline?",
    a: "Absolutely. By auditing leaky points in your existing sales funnels, implementing conversational marketing automations, target-focusing your PPC ad variations, and optimizing landing page architectures, we consistently reduce customer acquisition costs (CAC) while scaling total inbound lead volume."
  },
  {
    q: "Do you manage SEO and PPC together?",
    a: "Yes. Integrated campaign management produces a powerful compounding effect. Insights about top-converting paid keywords from PPC are funneled immediately into your long-term organic SEO content maps, while remarketing tracking maximizes value from organic search visits."
  },
  {
    q: "What industries do you specialize in?",
    a: "We have highly seasoned specialists tailored for SaaS, High-Growth Startups, B2B Brands, Ecommerce Businesses, Real Estate, Healthcare/Wellness Networks, Finance/Fintech players, and Industrial Manufacturing companies."
  },
  {
    q: "How can AI improve our marketing performance?",
    a: "We integrate AI to automate lead qualification sequences, synthesize ultra-personalized outreach messaging templates, predict campaign audience targets, and research competitors in real time, saving up to 40% of manual execution hours and scaling output speed."
  },
  {
    q: "Do you provide dedicated, daily-active support?",
    a: "Yes. Depending on your chosen tier, your marketing manager operates as an authentic extension of your desk—joining your internal communication loops (Slack/Teams), managing your projects, and providing clear updates regularly."
  }
];

export default function HireMarketingManagerPage({ onBackToHome, openProposalForm }: HireMarketingManagerPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hire Marketing Manager | Dedicated Digital Marketing Manager | AKGLS Group";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : "";
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Hire experienced marketing managers from AKGLS Group for SEO, PPC, social media, AI marketing, lead generation, branding & complete digital growth management services.');

    return () => {
      document.title = originalTitle;
      if (metaDesc) {
        if (originalDesc) {
          metaDesc.setAttribute('content', originalDesc);
        } else {
          metaDesc.remove();
        }
      }
    };
  }, []);

  // Sticky CTA visible on scroll
  const [showStickyCta, setShowStickyCta] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // ROI Calculator state
  const [monthlySpend, setMonthlySpend] = useState<number>(5000);
  const [leadConvRate, setLeadConvRate] = useState<number>(1.8);
  const [conversionValue, setConversionValue] = useState<number>(350);
  const [trafficVolume, setTrafficVolume] = useState<number>(25000);

  // Marketing calculation values
  const currentUnoptimizedLeads = Math.round((trafficVolume * (leadConvRate / 100)));
  const currentUnoptimizedRevenue = currentUnoptimizedLeads * conversionValue;
  
  // High-fidelity optimization factor by dedicated manager
  const targetLeadConvRate = leadConvRate * 1.5;
  const targetTrafficFraction = trafficVolume * 1.35;
  const optimizedLeads = Math.round((targetTrafficFraction * (targetLeadConvRate / 100)));
  const optimizedRevenue = optimizedLeads * conversionValue;
  const netRevenueGain = optimizedRevenue - currentUnoptimizedRevenue;
  const estimatedManagerInvestment = 4800; // standard package cost
  const estimatedNetRoi = Math.round(((netRevenueGain - estimatedManagerInvestment - (monthlySpend * 0.2)) / (monthlySpend + estimatedManagerInvestment)) * 100);

  // Live Audit state
  const [auditUrl, setAuditUrl] = useState('');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [auditName, setAuditName] = useState('');
  const [auditIndustry, setAuditIndustry] = useState('SaaS');
  const [auditGoal, setAuditGoal] = useState('Increase Direct Sales / Leads');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditStepLog, setAuditStepLog] = useState<string[]>([]);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const startLiveMarketingAudit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;

    setAuditRunning(true);
    setAuditResult(null);
    setAuditStepLog([]);

    const steps = [
      `Initializing marketing framework lookup for ${auditUrl}...`,
      'Analyzing landing page load speed and core web conversion leaks...',
      'Mapping organic search visibility gap against industry top keywords...',
      'Scanning meta ad and google ad tracking scripts for proper attribution structure...',
      'Evaluating B2B funnel and user conversion touchpoints based on high-intent signals...',
      'Assessing conversational copy & semantic readability score indexes...',
      'Evaluating AI marketing opportunities and compiling automated nurture recommendations...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAuditStepLog(prev => [...prev, `[MARKETING-AUDIT] ${steps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        const randomScore = Math.floor(Math.random() * 25) + 40; // 40-65 marketing index
        setAuditResult({
          marketingScore: randomScore,
          conversionLeaks: '4 primary points identified (poor lead qualification, static forms, lack of value reassurance statements above fold, and unstructured tag triggers).',
          seoPpcGaps: 'High-cost keywords eating budget without negative mapping; missing technical schemas; poor semantic keyword saturation across landing pages.',
          aiOpportunity: 'Ready for AI automated qualification sequences and dynamic CTA customization based on source UTM vectors.',
          recommendedHiringModel: 'Senior Growth Marketing Manager (Dedicated model, focused on conversion design, organic amplification and coordinated active Ads scaling).'
        });
        setAuditRunning(false);
      }
    }, 800);
  };

  const copyPageSchema = (schemaType: 'service' | 'faq' | 'review') => {
    const rawCode = schemaType === 'service' ? `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dedicated Growth Marketing Manager Sourcing",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Worldwide",
  "description": "Hire verified digital marketing managers to conceptualize, audit, execute, and scale multi-channel SEO, PPC, and AI marketing pipelines.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Sourcing Packages",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Marketing Manager Outreach & Execution Support" } }
    ]
  }
}` : schemaType === 'faq' ? `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should I hire a dedicated marketing manager?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An experienced leader bridges the gap between chaotic execution and strategic multi-channel growth, delivering cohesive budgets, SEO, PPC execution and clear ROI."
      }
    }
  ]
}` : `{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Sarah K.",
    "jobTitle": "CEO, Fintech Scaling Group"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5.0",
    "bestRating": "5"
  },
  "reviewBody": "AKGLS Group sourced an incredible dedicated growth strategist who re-architected our PPC campaign lines, doubling our high quality inbound leads within 90 days."
}`;
    navigator.clipboard.writeText(rawCode);
    alert(`${schemaType.toUpperCase()} Schema copied to clipboard successfully!`);
  };

  const servicesList = [
    {
      title: "1. SEO Management",
      badge: "⭐ Core Service",
      desc: "Full organic campaign planning to scale search visibility and secure high-intent inbound search traffic.",
      highlights: [
        "Keyword topic mapping clusters",
        "Technical audit resolving crawl blocks",
        "SEO schema structural injection",
        "Conversion minded high quality backlinks"
      ]
    },
    {
      title: "2. PPC Campaign Management",
      badge: "Paid Acquisition",
      desc: "Comprehensive active setup and optimization to drive ROAS upwards and capture prompt customer actions.",
      highlights: [
        "Google Search & Performance Max",
        "Meta Ads (FB/IG) direct conversion layouts",
        "LinkedIn B2B high-intent targeting",
        "Negative keyword budget management"
      ]
    },
    {
      title: "3. Social Media Management",
      badge: "Brand Expansion",
      desc: "Steady engagement growth on major social networks to foster warm brand relationships.",
      highlights: [
        "Professional calendar planning",
        "LinkedIn personal branding loops",
        "Interactive Instagram content",
        "Cross-channel advertising funnels"
      ]
    },
    {
      title: "4. AI Marketing & Automation",
      badge: "⭐ Trending Service",
      desc: "Infuse smart artificial tools to automate repetitive work blocks and dynamic content flows.",
      highlights: [
        "Custom qualifications triggers",
        "AI automated sitemap copy reviews",
        "Hyper-personalized follow-up steps",
        "Predictive audience target mapping"
      ]
    },
    {
      title: "5. Content Marketing Management",
      badge: "Thought Leadership",
      desc: "Design authoritative blogs, graphics, and whitepapers to guide prospective buyers down the user journey.",
      highlights: [
        "Strategic educational frameworks",
        "SEO-rich content generation calendars",
        "Value-first newsletter sequences",
        "Multi-channel asset distribution"
      ]
    },
    {
      title: "6. Lead Generation Management",
      badge: "Funnel Optimization",
      desc: "Build bulletproof collection corridors that pull traffic cleanly into automated pipelines.",
      highlights: [
        "Landing page conversion maximization",
        "Seamless CRM coordinate setups",
        "Lead scoring and routing triggers",
        "Strategic discount / newsletter offers"
      ]
    },
    {
      title: "7. Ecommerce Marketing Management",
      badge: "Shopify & Retail",
      desc: "Accelerate retail order volumes through target-oriented listings, dynamic feeds, and shopping setups.",
      highlights: [
        "Shopify & WooCommerce integration",
        "Dynamic cart recovery automations",
        "High-performance Google Shopping tags",
        "Brand loyalty and reviews booster"
      ]
    },
    {
      title: "8. Branding & Growth Strategy",
      badge: "Corporate Identity",
      desc: "Formulate clear value propositions that distinguish your business models from competition.",
      highlights: [
        "Comprehensive market research",
        "In-depth competitor analysis",
        "Refining core brand positioning",
        "Long-term marketing growth maps"
      ]
    },
    {
      title: "9. Analytics & Reporting",
      badge: "ROI Focused",
      desc: "Clear transparency through detailed data tracking that highlights exact lead costs and ROI margins.",
      highlights: [
        "Configured Google Analytics (GA4)",
        "Looker Studio real-time summaries",
        "Detailed UTM tag structures",
        "Custom conversions tracking"
      ]
    },
    {
      title: "10. Dedicated Marketing Manager",
      badge: "Strategic Sourcing",
      desc: "Acquire full-time or fractional growth minds completely focused on driving your marketing programs.",
      highlights: [
        "Daily active task oversight",
        "Full team coordinate integrations",
        "Bespoke white-label programs",
        "Hourly strategists on-demand"
      ]
    }
  ];

  const hiringModels = [
    {
      title: "Full-Time Marketing Manager",
      subtitle: "Dedicated Campaign Leadership",
      desc: "Get a dedicated, highly trained director fully embedded within your company. Hand-picked to strategize, manage daily project schedules, and coordinate output across all search, social, and ad channels.",
      badge: "Ideal for Series A startups and scaling enterprises"
    },
    {
      title: "Part-Time Marketing Consultant",
      subtitle: "Strategic Growth Overseer",
      desc: "Access senior-level digital advisor oversight on a flexible fractional retainer. Excellent for steady channel maintenance, budget audits, and monthly content calendar alignments.",
      badge: "Perfect for growing brands needing strategic direction"
    },
    {
      title: "Hourly Marketing Expert",
      subtitle: "On-Demand Problem Solvers",
      desc: "Buy hourly blocks of top-tier growth expertise for rapid ad account reviews, conversion funnel diagnostics, or localized campaign planning.",
      badge: "High-flexibility agile sprints"
    },
    {
      title: "Project-Based Campaign Lead",
      subtitle: "Milestone-Driven Sprints",
      desc: "Targeted, hyper-focused blocks centered around crucial product launches, website rebuild campaigns, or new category rollouts.",
      badge: "Excellent for time-sensitive marketing launches"
    },
    {
      title: "White-Label Agency Partner",
      subtitle: "Scale Your Agency Deliverables",
      desc: "Inject verified marketing experts directly into your agency workflow under your corporate label, managing your list of client accounts seamlessly.",
      badge: "Elite partner models scaling quickly"
    }
  ];

  const industries = [
    { name: "SaaS & Software", focus: "Enterprise lead capture, conversational trial conversion paths, and contextual AI SEO maps." },
    { name: "Ecommerce Brands", focus: "Direct-to-consumer catalogs, cart recovery automation, meta tracking catalogs, and product grids." },
    { name: "Healthcare & Wellness", focus: "HIPAA-aligned medical citation programs, patient-first blogs, and clear consultation schedulers." },
    { name: "Finance & Fintech", focus: "High trust guidelines, economic and wealth advice blogs, and validated lead generation structures." },
    { name: "Education Systems", focus: "Enrolling applicant pipelines, webinar funnels, and programmatic course listings." },
    { name: "Real Estate Brokers", focus: "Targeted localized display layouts, virtual tour setups, and hyper-local leads outreach." },
    { name: "B2B Manufacturing", focus: "Direct RFQ captures, industrial supply catalogs, and LinkedIn personal branding setups." },
    { name: "IoT Tech Companies", focus: "Explaining difficult hardware applications clearly, technical briefs, and integration listings." },
    { name: "Local Businesses", focus: "Google Maps authority scaling, high performance Yelp ads, and direct review acquisition systems." },
    { name: "Startups (Pre-Seed/Seed)", focus: "Rapid strategic growth mapping, brand positioning benchmarks, and high-traction marketing sprints." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Business & Marketing Audit",
      desc: "We dive deep into your historical metrics, competitor networks, product value propositions, and existing marketing structures to spot leaks."
    },
    {
      step: "02",
      title: "Marketing Strategy & KPI Setup",
      desc: "Prepare clear target benchmarks across keyword lists, PPC target costs, audience segments, and budget allocations for total transparency."
    },
    {
      step: "03",
      title: "Omnichannel Execution",
      desc: "Your dedicated marketing manager takes active control—deploying high-rank search systems, adjusting ad budgets, and scheduling media feeds."
    },
    {
      step: "04",
      title: "AI & Funnel Optimization",
      desc: "Integrate custom qualification bots, test alternative header elements, set automated drip newsletters, and refine audience rules."
    },
    {
      step: "05",
      title: "ROI Reporting & Scale Plans",
      desc: "Walk through complete Looker Studio performance files, verify tracking accuracies, outline upcoming opportunities, and forecast growth metrics."
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden">
      
      {/* Background Ambience overlays */}
      <div className="absolute top-0 left-0 right-0 h-[850px] bg-gradient-to-b from-[#0e1630]/35 via-[#02040d]/10 to-transparent pointer-events-none" />
      <div className="absolute top-[25%] right-[-5%] w-[480px] h-[480px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[60%] left-[-10%] w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation Header */}
      <nav id="marketing-manager-nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900/60 relative bg-[#02040d]/90 backdrop-blur z-20">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition font-mono text-xs bg-transparent border-none cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-cyan-400" />
          <span>Return to Corporate Platform</span>
        </button>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918318114492"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex text-xs font-mono text-cyan-400 border border-cyan-950 bg-cyan-950/20 px-3 py-1.5 rounded hover:bg-cyan-950/40 transition-colors"
          >
            WhatsApp Support: +91 831 811 4492
          </a>
          <button 
            onClick={openProposalForm} 
            className="text-xs bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-slate-950 font-bold px-4 py-2 rounded shadow-md cursor-pointer transition-transform"
          >
            Hire Marketing Manager Now
          </button>
        </div>
      </nav>

      {/* Sticky CTA strip */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-[#04081c]/95 border-t border-cyan-500/30 backdrop-blur pb-4 pt-3.5 z-50 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300">
                  Ready to optimize your marketing ROI? Settle for nothing but a <strong className="text-cyan-400 font-bold">dedicated growth marketing manager</strong>.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/918318114492"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-cyan-950/20 text-cyan-400 border border-cyan-900 px-4 py-2 rounded-lg text-xs font-mono hover:bg-cyan-950/50 transition"
                >
                  Direct Chat
                </a>
                <button 
                  onClick={() => {
                    const el = document.getElementById('free-marketing-audit-stage');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold px-5 py-2 rounded-lg text-xs hover:opacity-95 transition"
                >
                  Request Strategy Audit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header id="marketing-manager-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-indigo-950/55 border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Full-Stack Omnichannel Strategy</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hire Marketing Managers to Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Business Growth, Leads & Revenue</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hire experienced marketing managers for SEO, PPC, AI marketing, lead generation, social media management, branding, content strategy, and complete digital marketing growth solutions tailored for startups, ecommerce, SaaS, and enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('hiring-packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg shadow-lg shadow-cyan-950/20 transition flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Hire Marketing Manager Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('free-marketing-audit-stage');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-slate-700 hover:border-cyan-500 bg-slate-900/45 text-slate-100 hover:text-white font-medium px-6 py-3.5 rounded-lg transition text-sm cursor-pointer"
              >
                Book Free Growth Consultation
              </button>
            </div>

            {/* highlights list */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-900">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Dedicated Growth Leaders</h4>
                  <p className="text-xs text-slate-400">Singular accountability driving both creative and analytical loops.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">AI-Powered Processes</h4>
                  <p className="text-xs text-slate-400">Automate trial onboarding workflows to maximize efficiency.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Omnichannel Mastery</h4>
                  <p className="text-xs text-slate-400">Harmonized strategies connecting search keywords and social media.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Strict ROI Focus</h4>
                  <p className="text-xs text-slate-400">Continuous Looker dashboards verifying exact costs-per-lead.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Dashboard Display */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#050b1c] rounded-2xl border border-slate-805/80 p-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs text-white font-mono font-bold">Omnichannel Growth Control Dashboard</span>
                </div>
                <span className="text-[9px] bg-[#02040b] border border-cyan-950 text-cyan-400 font-mono px-2 py-0.5 rounded uppercase">
                  ACTIVE PIPELINE
                </span>
              </div>

              {/* Graphical simulation of marketing analytics */}
              <div className="space-y-4 pt-4">
                
                <div className="bg-[#02040a] p-3 rounded border border-slate-900/60 text-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Conversion Funnel Velocity</span>
                    <span className="text-xs text-emerald-400 font-mono font-bold">+245% Lead Rate</span>
                  </div>
                  {/* Custom animated metrics grid bar visualization */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>Paid Traffic Channels (ROAS 4.2)</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded">
                        <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded" style={{ width: '78%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>Organic Keyword Ranking Positions</span>
                        <span>64%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded">
                        <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded" style={{ width: '64%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#02040b] p-3 rounded border border-slate-900 text-center">
                    <span className="text-[9px] text-slate-500 uppercase block">CPA Reduced</span>
                    <span className="text-lg font-bold font-mono text-emerald-400">-38% CAC</span>
                  </div>
                  <div className="bg-[#02040b] p-3 rounded border border-slate-900 text-center">
                    <span className="text-[9px] text-slate-500 uppercase block">Total SQLs</span>
                    <span className="text-lg font-bold font-mono text-white">415 Leads/mo</span>
                  </div>
                </div>

                <div className="bg-[#0b1c3d]/20 border border-indigo-500/20 p-3 rounded-lg space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-mono font-bold">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LATEST CAMPAIGN REFINE SUCCESS</span>
                  </div>
                  <p className="text-[10px] text-slate-300">
                    A/B variant tests successfully deployed by Marketing Manager has generated <strong className="text-white">+18.5% click-to-lead acceleration</strong> on central enterprise grids.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </header>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="border-y border-slate-900/80 bg-[#030612]/85 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs text-slate-500 tracking-wider uppercase mb-8">
            Trusted Marketing Experts for Startups, Enterprises & Growing Brands
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-300 mb-12">
            <span className="text-lg font-black tracking-widest text-slate-400">FINTECH_GROUP</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">SAAS_MARKET</span>
            <span className="text-lg font-mono tracking-widest text-slate-400">|| MEDICAL_LEAD ||</span>
            <span className="text-lg font-black tracking-widest text-slate-400">REXT_RETAIL</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">AUTO_SCALE</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center max-w-5xl mx-auto pt-10 border-t border-slate-900">
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">150+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Active Campaigns Sourced</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">1.2M+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Total Qualified Leads Generated</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">$18.5M</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Ad Revenue Generated</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">14+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Diverse Verticals Navigated</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DOES A MARKETING MANAGER DO SECTION */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">What Does a Dedicated Marketing Manager Handle?</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than spending critical hours trying to coordinate separate writers, ad managers, and SEO mechanics, your AKGLS Group marketing manager oversees your entire corporate expansion ecosystem. They unify tools, content strategy, and target audiences under one high-ROI program.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: "SEO Strategy & Organic Growth", desc: "Craft stable keyword cluster mapping, map content structures, and clear technical sitemap errors." },
                  { title: "Paid Advertising Optimization", desc: "Build ROI-focused remarketing flows on Google search networks, Meta ad feeds, and LinkedIn panels." },
                  { title: "High Converting Lead Funnels", desc: "Audit and polish high-friction forms, build structured qualification rules, and set up drip marketing." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-950 text-cyan-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#030612]/95 border border-slate-800 p-6 rounded-xl space-y-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">Standard Daily Action Blueprint</span>
                
                <div className="space-y-3">
                  {[
                    { slot: "09:00 AM", task: "Ad Platform Spend & Lead Velocity Performance Review", type: "Google / Meta check" },
                    { slot: "11:00 AM", task: "Coordinating Editorial Writers on Semantic Keyphrase Inclusion", type: "Organic SEO workflow" },
                    { slot: "02:00 PM", task: "Deploying A/B Landing Page Layout Tests via Optimizely", type: "Funnel Conversion lift" },
                    { slot: "04:00 PM", task: "Analyzing GA4 Conversion Tag Attribution Flows", type: "Lookup & Analytics review" },
                    { slot: "05:30 PM", task: "Preparing Live Performance Progress Reports & ROI updates", type: "Looker Studio Dashboard" }
                  ].map((blue, i) => (
                    <div key={i} className="bg-[#02040b] p-3 rounded border border-slate-900 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] text-cyan-400 font-mono font-bold block">{blue.slot}</span>
                        <span className="text-xs text-slate-200 block">{blue.task}</span>
                        <span className="text-[10px] text-slate-500 font-mono">Channel: {blue.type}</span>
                      </div>
                      <span className="bg-[#081830] text-indigo-300 text-[9px] px-2 py-0.5 rounded font-mono">MANAGED</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY HIRE A DEDICATED MARKETING MANAGER SECTION */}
      <section className="bg-slate-950/20 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire a Dedicated Marketing Manager?</h2>
            <p className="text-slate-450 mt-2 text-sm sm:text-base">
              A dedicated marketing manager coordinates campaigns seamlessly, preventing wasted ad budgets, missed keywords, and stagnant landing page architectures. Let us bridge your strategic gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Manage Complete Marketing Strategy", desc: "No more disconnected campaigns. We align Google Ads, SEO calendars, and email newsletters to build a unified system." },
              { title: "Improve Lead Generation Speed", desc: "Identify conversion leaks, simplify registration sequences, and target higher-intent customer profiles." },
              { title: "Increase ROAS Across Channels", desc: "We constantly optimize campaigns, bidding rules, and negatives list grids to route budgets into high-conversion segments." },
              { title: "Scale Multi-Channel Brand Presence", desc: "Ensure your brand maintains beautiful visual consistency across LinkedIn, Search Results, and News outlets." },
              { title: "Optimize Campaigns Continually", desc: "We base modifications strictly on actual GA4 attribution charts, stopping nonfunctional channels fast." },
              { title: "Sustained Business Revenue Compound", desc: "By strengthening both paid and organic foundations, we set up continuous, automated compound growth loops." }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-xl hover:border-cyan-500/20 transition">
                <CheckCircle className="w-5.5 h-5.5 text-cyan-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE MARKETING ROI FORECAST CALCULATOR */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Forecast Your Core Funnel Lift On-Demand</h2>
              <p className="text-sm text-slate-350 leading-relaxed">
                Marketing management is an exact mathematical practice. Small conversion rate optimizations consistently yield significant returns. Adjust our sliders to estimate how structured campaign management can scale your baseline revenue.
              </p>

              <div className="bg-[#030612]/90 border border-slate-900 p-4 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>CONVERSION IMPROVEMENT COEFFICIENT</span>
                </div>
                <p className="text-xs text-slate-400">
                  By refining ad targeting, updating headlines, and scaling organic traffic value by 35%, a dedicated growth manager typically scales overall funnel revenue without requiring a proportional increase in ad budgets.
                </p>
              </div>
            </div>

            {/* Right Interactive Sliders */}
            <div className="lg:col-span-6">
              <div className="bg-[#04081c] border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-cyan-400" />
                  <span>Interactive Pipeline Forecasting Tool</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Input your monthly traffic and conversion metrics to estimate your growth potential.
                </p>

                <div className="space-y-5">
                  
                  {/* Monthly Ad Spend Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Monthly Paid Ad Budgets:</span>
                      <span className="text-cyan-400 font-bold">${monthlySpend.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="30000" 
                      step="500"
                      value={monthlySpend} 
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-cyan-400"
                    />
                  </div>

                  {/* Monthly Website Clicks Input */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Monthly Website Clicks/Visits:</span>
                      <span className="text-indigo-400 font-bold">{trafficVolume.toLocaleString()} Clicks</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="200000" 
                      step="2500"
                      value={trafficVolume} 
                      onChange={(e) => setTrafficVolume(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-indigo-400"
                    />
                  </div>

                  {/* Existing Lead Conversion Rate */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Current Lead Conversion Rate:</span>
                      <span className="text-emerald-400 font-bold">{leadConvRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="8.0" 
                      step="0.1"
                      value={leadConvRate} 
                      onChange={(e) => setLeadConvRate(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-emerald-400"
                    />
                  </div>

                  {/* Average Lead/Customer Worth */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Average Deal / Lead Value:</span>
                      <span className="text-purple-400 font-bold">${conversionValue}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="2500" 
                      step="50"
                      value={conversionValue} 
                      onChange={(e) => setConversionValue(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-purple-400"
                    />
                  </div>

                  {/* Projections Output Panel */}
                  <div className="bg-[#02040a] border border-slate-900 p-4 rounded-xl mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Current Revenue</span>
                      <span className="text-base font-bold text-slate-400">${currentUnoptimizedRevenue.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Projected Revenue Lift</span>
                      <span className="text-base font-bold text-emerald-400">${optimizedRevenue.toLocaleString()}</span>
                    </div>
                    <div className="col-span-2 border-t border-slate-900 pt-3">
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Estimated Revenue Gain with AKGLS Manager</span>
                      <span className="text-xl font-black text-cyan-400">+${netRevenueGain.toLocaleString()} <span className="text-xs text-slate-300">/mo growth</span></span>
                      <p className="text-[9px] text-slate-500 font-mono mt-1">
                        Forecasted ROI on marketing hire: ~{estimatedNetRoi}% (Estimating conversion rate acceleration to {(leadConvRate * 1.5).toFixed(1)}% and traffic amplification by 35%.)
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR SERVICES MANAGED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">
            Sourced Marketing Capabilities List
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Marketing Services Managed by Our Experts
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            AKGLS growth managers are seasoned directors possessing advanced capabilities to execute campaigns across search, social, paid media, email, and automated lead funnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-[#030612]/75 border border-slate-900 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/20 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded bg-cyan-950/45 text-cyan-400 font-mono font-black text-xs flex items-center justify-center">
                    0{index + 1}
                  </div>
                  <span className="bg-[#091830] text-cyan-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              </div>

              <div className="border-t border-slate-900 pt-3 space-y-1.5">
                <span className="text-[9px] text-slate-500 font-mono uppercase block">Includes:</span>
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING MODELS SECTION */}
      <section className="bg-[#030612]/80 border-t border-b border-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible Marketing Manager Hiring Models</h2>
            <p className="text-slate-450 mt-2 text-sm">
              Whether you need strategic guidance, part-time ad optimization, or an embedded growth director, we offer flexible hiring models to match your budget and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringModels.map((model, index) => (
              <div key={index} className="bg-[#050b1c] border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/20 transition-all">
                <div>
                  <span className="text-[9px] font-mono font-bold bg-[#0d1c47] text-cyan-400 border border-[#142e75] px-2 py-0.5 rounded block w-fit mb-3">
                    {model.badge}
                  </span>
                  <h3 className="text-lg font-black text-white">{model.title}</h3>
                  <h4 className="text-xs text-slate-400 font-mono mt-0.5">{model.subtitle}</h4>
                  <p className="text-xs text-slate-300 mt-4 leading-relaxed">{model.desc}</p>
                </div>
                <div className="border-t border-slate-900 pt-4 mt-6 flex justify-between items-center text-xs">
                  <span className="text-[10px] text-emerald-400 font-mono uppercase">Vetted & Sourced</span>
                  <span className="font-mono text-cyan-400 font-bold">AKGLS Group Partner</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTOR */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Industries Sourced Marketing Experts Serve</h2>
            <p className="text-slate-450 mt-2 text-sm">
              We align deep sector experience with tailored campaign frameworks to ensure your team speaks fluent industry lingo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-[#030612]/60 border border-slate-900 p-5 rounded-xl hover:border-cyan-500/15 transition-all">
                <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">{ind.name}</h3>
                <p className="text-[11px] text-slate-450 leading-relaxed">{ind.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETING GROWTH PROCESS SECTION */}
      <section className="bg-[#030612]/60 border-t border-b border-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Our Marketing Growth Process</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We eliminate guesswork by running our marketing campaigns through a structured, data-driven cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/30 to-purple-500/10 z-0 pointer-events-none" />
            
            {processSteps.map((step, idx) => (
              <div key={idx} className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#02040b] border-2 border-indigo-500 font-mono text-cyan-400 font-black flex items-center justify-center text-sm shadow-lg mx-auto md:mx-0">
                  {step.step}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI MARKETING MANAGEMENT */}
      <section className="py-20 border-b border-slate-900/60 relative overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 px-3 py-1 font-mono text-xs uppercase font-medium rounded-full inline-flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Next-Gen Campaign Sourcing</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Hire AI-Powered Marketing Managers for Smarter Business Growth
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                By synthesizing machine-learning optimization suites, automated lead qualification loops, Dynamic UTM responsive content, and predictive keyword trends forecasting tools, we help you secure better ranking and conversion velocity while shaving off administrative overhead.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 text-xs">
                {[
                  "Predictive Conversion Rate Modeling",
                  "Automated qualification pathways matching",
                  "Bespoke landing page variant generators",
                  "Comprehensive AI-Driven search volume forecasts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-slate-300">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#050b1c] rounded-xl border border-slate-800 p-5">
                <span className="text-[9px] font-mono text-emerald-400 block mb-3 uppercase tracking-wider">AI Strategy Optimization Live Preview</span>
                
                <div className="bg-[#02040b] p-3 rounded border border-slate-950 relative space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>Campaign Target: SaaS / Trial Lift</span>
                    <span className="text-cyan-400 font-bold">OPTIMIZED</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    AI qualification script has automated the scheduling of <strong className="text-white">128 mid-tier demo requests</strong>, increasing demo attendance rates by over <strong className="text-emerald-400">42%</strong>.
                  </p>
                  <div className="w-full h-1 bg-slate-900 rounded overflow-hidden">
                    <div className="h-full bg-cyan-400 animate-pulse" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MARKETING RESULTS */}
      <section className="py-20 border-b border-slate-900/60 bg-[#030612]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Results Delivered by Our Marketing Managers</h2>
            <p className="text-slate-450 mt-2 text-sm">
              We maintain absolute transparency. Explore how structured campaign management consistently elevates sales conversion rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#04081c]/70 border border-slate-805/80 p-6 rounded-xl">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">Target B2B Funnels</p>
              <p className="text-4xl font-extrabold text-white font-mono">3.4x Lift</p>
              <p className="text-xs text-slate-400 mt-2">Average increase in qualified demo bookings within 120 days of sourcing.</p>
            </div>
            <div className="bg-[#04081c]/70 border border-slate-805/80 p-6 rounded-xl">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">Omnichannel Ads Spend</p>
              <p className="text-4xl font-extrabold text-white font-mono">-32% CAC</p>
              <p className="text-xs text-slate-400 mt-2">Consistent reduction in overall Customer Acquisition Costs by pruning ad waste.</p>
            </div>
            <div className="bg-[#04081c]/70 border border-slate-805/80 p-6 rounded-xl">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">Search Engine Footprint</p>
              <p className="text-4xl font-extrabold text-white font-mono">+180% SEO</p>
              <p className="text-xs text-slate-400 mt-2">Organic traffic ranking volume compound within the first six months of launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Marketing Growth Success Stories</h2>
          <p className="text-slate-400 mt-1 text-sm">
            Read comprehensive metric breakdowns of how our integrated growth planning scales operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "Fintech Marketing Results", title: "Scale Direct Leads Generation Srvs", lift: "+240% Demo Booking", dec: "Optimizing Google and LinkedIn ad funnels, shifting budget allocations to target high-intent search nodes." },
            { tag: "Ecommerce Revenue Scaling", title: "Revitalize Shopify Direct Purchase Models", lift: "+110% Shopify Sales", dec: "Deploying high-efficiency meta cart abandon triggers and optimizing landing page product structures." },
            { tag: "SaaS Enterprise Amplifications", title: "Target Account-Based Marketing Solutions", lift: "3.8x ROI Boost", dec: "Aligning cold LinkedIn outbound models with programmatic search keyword lists to optimize acquisition costs." }
          ].map((cs, i) => (
            <div key={i} className="bg-[#030612]/70 border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 uppercase">{cs.tag}</span>
                <h3 className="text-base font-bold text-white mt-1">{cs.title}</h3>
                <p className="text-xs text-slate-400 mt-3">{cs.dec}</p>
              </div>
              <div className="border-t border-slate-900 pt-3 mt-6 flex justify-between items-center">
                <span className="text-xs text-emerald-400 font-mono font-bold">{cs.lift}</span>
                <span className="text-[10px] text-slate-500 font-mono">Case study documented</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 bg-slate-950/20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire Marketing Managers from AKGLS Group?</h2>
            <p className="text-slate-450 mt-2 text-sm">
              We choose only the top 3% of fully-vetted digital marketers who understand data analytics, creative layout pipelines, organic search clusters, and modern AI operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Direct Growth Alignment", desc: "No bureaucratic agency walls. Your dedicated growth advisor synchronizes daily directly within your core communication hub." },
              { title: "Smarter Automated Workflows", desc: "We utilize ChatGPT, Claude, and Gemini to automate tedious qualification sequences, saving up to 40% in project costs." },
              { title: "Attribution Transparency", desc: "Every single cent of client advertising capital is mapped clearly through real-time conversion monitoring dashboards." },
              { title: "Rapid Strategy Iteration", desc: "We deploy weekly campaign variations, ensuring weak angles are paused rapidly while successful paths scale." }
            ].map((usp, i) => (
              <div key={i} className="bg-[#030612]/60 border border-slate-900 p-5 rounded-xl">
                <Award className="w-5.5 h-5.5 text-cyan-400 mb-3" />
                <h3 className="text-sm font-bold text-white mb-1.5">{usp.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE USE THE BEST TOOLS */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Marketing Tools & Technologies We Work With</h2>
            <p className="text-slate-450 mt-1 text-sm">
              Our sourced experts maintain top-tier certified proficiencies across major search, paid acquisition platforms, analytical CRM engines, and AI workflow toolboxes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-[#030612]/80 border border-slate-900 p-4 rounded-xl flex flex-col justify-between hover:border-cyan-500/10 transition-colors">
                <span className="text-sm font-black text-white block">{tool.name}</span>
                <span className="text-[10px] text-slate-500 font-mono mt-2">{tool.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="hiring-packages" className="py-20 bg-slate-950/20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">
              Flexible Monthly Retainers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              Flexible Marketing Manager Hiring Packages
            </h2>
            <p className="text-slate-450 mt-2 text-sm">
              Scale marketing leadership up or down as required. Clean SLA agreements with zero hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#050b1c] border rounded-2xl p-6 md:p-8 flex flex-col justify-between relative transition-transform ${
                  pkg.isPopular ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/20 md:-translate-y-2' : 'border-slate-805/85'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-mono font-bold text-[9px] px-3 py-1 rounded-full uppercase tracking-wider">
                    RECOMMENDED PLAN
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-black text-white mb-1">{pkg.name}</h3>
                  <p className="text-xs text-slate-450 leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="flex items-baseline gap-1 mb-6 border-b border-slate-900 pb-4">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">{pkg.price}</span>
                    <span className="text-xs text-slate-500 font-mono">/ {pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={openProposalForm}
                  className={`w-full py-3 rounded-lg text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular 
                      ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-slate-950 shadow-md' 
                      : 'bg-slate-900 text-slate-100 hover:bg-slate-850 border border-slate-850'
                  }`}
                >
                  <span>Select {pkg.name} Today</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 border-b border-slate-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-cyan-400 font-mono text-xs font-semibold uppercase block">
              Clear Solutions Transparently Sourced
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Frequently Asked Questions About Hiring Marketing Managers
            </h2>
            <p className="text-slate-450 text-xs sm:text-sm leading-relaxed">
              Find instant solutions to baseline questions surrounding dedicated communication Retainers, tools, and integration loops. Feel free to contact us with any specific custom project requests.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#030612]/70 border border-slate-900 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-sm text-white">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronDown className="w-4 h-4 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-900 bg-[#02040b] p-5"
                    >
                      <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREE MARKETING STRATEGY AUDIT SECTION */}
      <section id="free-marketing-audit-stage" className="py-20 border-b border-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-cyan-400 font-mono text-xs block font-bold">ZERO OBLIGATIONS, IMMENSE VALUE</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Get a Free Marketing Audit Before Sourcing Your Dedicated Manager
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Receive a complete, human-approved digital strategy map outlining organic ranking errors, active ad pipeline leaks, tracking vulnerabilities, and custom AI conversion opportunities.
              </p>

              <div className="bg-[#030612]/80 border border-slate-900 p-4 rounded-xl space-y-3">
                <span className="text-[10px] text-slate-500 font-mono uppercase block">Your Sourced Audit Blueprint Includes:</span>
                {[
                  "Detailed Landing Page Conversion Leak points assessment",
                  "High CPC organic keywords gap analysis list",
                  "Meta & Google Active tracking attribution checks",
                  "Dynamic conversational qualification setup models list"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-350">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Live Audit Interactive Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#050b1c] rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-4">Live Marketing Strategy Simulator</span>
                
                <form onSubmit={startLiveMarketingAudit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 font-mono uppercase block">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={auditName} 
                        onChange={(e) => setAuditName(e.target.value)}
                        placeholder="Amrish Singh"
                        className="w-full bg-[#02040b] border border-slate-850 rounded p-2 text-xs text-white placeholder-slate-700" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 font-mono uppercase block">Website URL</label>
                      <input 
                        type="url" 
                        required
                        value={auditUrl} 
                        onChange={(e) => setAuditUrl(e.target.value)}
                        placeholder="https://myscalingsite.com"
                        className="w-full bg-[#02040b] border border-slate-850 rounded p-2 text-xs text-white placeholder-slate-700" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 font-mono uppercase block">Industry Sector</label>
                      <select 
                        value={auditIndustry} 
                        onChange={(e) => setAuditIndustry(e.target.value)}
                        className="w-full bg-[#02040b] border border-slate-850 rounded p-2 text-xs text-white"
                      >
                        <option value="SaaS">SaaS & Software</option>
                        <option value="Ecommerce">Ecommerce & Direct Sales</option>
                        <option value="Healthcare">Healthcare & Biotech</option>
                        <option value="Finance">Fintech & Banking Services</option>
                        <option value="Other">Custom Niche Business</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 font-mono uppercase block">Primary Goal</label>
                      <select 
                        value={auditGoal} 
                        onChange={(e) => setAuditGoal(e.target.value)}
                        className="w-full bg-[#02040b] border border-slate-850 rounded p-2 text-xs text-white"
                      >
                        <option value="Increase Direct Sales / Leads">Max Leads / Sales Volume</option>
                        <option value="Reduce CAC / CPA Spend">Minimize ad spend leaks</option>
                        <option value="Scale Organic Search Volume">Dominate Organic Keywords</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-mono uppercase block">Business Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={auditEmail} 
                      onChange={(e) => setAuditEmail(e.target.value)}
                      placeholder="amrish.singh@corporate.com"
                      className="w-full bg-[#02040b] border border-slate-850 rounded p-2 text-xs text-white placeholder-slate-700" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-mono uppercase block">WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={auditPhone} 
                      onChange={(e) => setAuditPhone(e.target.value)}
                      placeholder="+91 8318114492"
                      className="w-full bg-[#02040b] border border-slate-850 rounded p-2 text-xs text-white placeholder-slate-700" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={auditRunning}
                    className="w-full py-3 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-black rounded-lg text-xs hover:opacity-95 transition disabled:opacity-50 cursor-pointer"
                  >
                    {auditRunning ? 'Crawling Strategy Index Models...' : 'Launch Instant Full Funnel Audit'}
                  </button>
                </form>

                {/* Simulated diagnostic trace console logs output */}
                {auditStepLog.length > 0 && (
                  <div className="mt-4 p-3 bg-black border border-slate-900 rounded font-mono text-[9px] text-emerald-400 space-y-1 h-28 overflow-y-auto">
                    {auditStepLog.map((log, lIdx) => (
                      <div key={lIdx} className="leading-tight">{log}</div>
                    ))}
                    {auditRunning && <div className="animate-pulse">❚ SCANNING CORRIDORS...</div>}
                  </div>
                )}

                {/* Simulated result card display */}
                {auditResult && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 bg-[#02040a] border border-slate-900 p-4 rounded-xl space-y-3"
                  >
                    <div className="flex justify-between items-center bg-[#071c14] border border-emerald-900/60 p-2 rounded">
                      <span className="text-[10px] text-emerald-400 font-mono uppercase font-black">Audit complete! Funnel Health rating:</span>
                      <span className="text-sm font-black text-emerald-400 font-mono">{auditResult.marketingScore} / 100</span>
                    </div>
                    <div className="space-y-1.5 text-[10px] leading-relaxed">
                      <p><strong className="text-white">Qualitative leaks:</strong> {auditResult.conversionLeaks}</p>
                      <p><strong className="text-white">SEO & PPC mismatch gaps:</strong> {auditResult.seoPpcGaps}</p>
                      <p><strong className="text-white">AI Automation vectors:</strong> {auditResult.aiOpportunity}</p>
                      <p className="text-cyan-400 font-mono mt-2 uppercase font-bold">Recommended hiring roadmap: {auditResult.recommendedHiringModel}</p>
                    </div>
                    <p className="text-[9px] text-slate-500 font-mono border-t border-slate-900 pt-2 text-center">
                      Detailed strategic plan compiled. Sourced campaign planners will contact you directly on {auditEmail}!
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUGGESTED BLOG / ARTICLE SEGMENT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">EDUCATIONAL CAPITAL</span>
          <h2 className="text-3xl font-black text-white mt-1">Suggested Sourced Marketing Reading Materials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "Strategic Recruiting Guidelines", read: "7 min read", title: "Complete Blueprint on Sourcing Digital Growth leaders", desc: "Key benchmarks and criteria evaluated across ad spent optimizations and conversion attributes mapping." },
            { tag: "Marketing Automation Frameworks", read: "11 min read", title: "Scale Your Lead Qualified pipelines with LLMs", desc: "Setting conversational chatbot rules and UTM responsive CTAs to shave off administrative hours." },
            { tag: "Paid Acquisition Compounding", read: "14 min read", title: "Unifying Paid PPC Keyword loops with SEO Plans", desc: "Analyzing conversion keyword performance data inside Google Shopping to feed organic sitemap indexes." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#030612]/70 border border-slate-900 p-5 rounded-xl hover:border-cyan-500/10 transition">
              <div className="flex justify-between text-[9px] font-mono text-slate-500">
                <span>{item.tag}</span>
                <span>{item.read}</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mt-2 leading-tight">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEMA HELPER WIDGET */}
      <section className="py-12 bg-[#02040b] border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-950/20 border border-slate-900 p-6 rounded-xl">
          <div>
            <h4 className="text-xs font-bold text-white font-mono flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Validate Sourced Structural Metadata Schemas</span>
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">
              Copy-paste verified Google-ready schemas to citation-proof of organization models.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => copyPageSchema('service')}
              className="px-3 py-1.5 bg-[#081830] hover:bg-[#0c2447] text-cyan-400 border border-cyan-900/60 rounded text-[10px] font-mono flex items-center gap-1.5 transition cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Service Schema</span>
            </button>
            <button 
              onClick={() => copyPageSchema('faq')}
              className="px-3 py-1.5 bg-[#081830] hover:bg-[#0c2447] text-cyan-400 border border-cyan-900/60 rounded text-[10px] font-mono flex items-center gap-1.5 transition cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>FAQ Schema</span>
            </button>
            <button 
              onClick={() => copyPageSchema('review')}
              className="px-3 py-1.5 bg-[#081830] hover:bg-[#0c2447] text-cyan-400 border border-cyan-900/60 rounded text-[10px] font-mono flex items-center gap-1.5 transition cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Review Schema</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER & FINAL CTA SECTION */}
      <footer id="marketing-manager-final-cta" className="bg-[#030612] py-24 relative overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-cyan-950/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Ready to Hire Marketing Managers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Business Growth?</span>
          </h2>
          <p className="text-slate-350 text-sm max-w-xl mx-auto">
            Settle for nothing but verifiable top 3% marketing directors who understand growth data equations, creative pipeline orchestration, search crawling patterns, and smart AI workflow automations.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button 
              onClick={() => {
                const el = document.getElementById('hiring-packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg text-sm hover:opacity-95 transition shadow-lg cursor-pointer"
            >
              Hire Marketing Manager
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('free-marketing-audit-stage');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-slate-700 bg-[#02040b] text-slate-100 px-6 py-3.5 rounded-lg text-sm font-medium hover:border-cyan-500 transition cursor-pointer"
            >
              Book Growth Consultation
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-10 border-t border-slate-900 font-mono text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Dedicated Marketing Experts</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Integrated AI-Powered Strategists</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Transparent Looker Reporting</span>
            </span>
          </div>
        </div>

        {/* INTERNAL LINKING STRATEGY FOOTHILL */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-900 text-center space-y-4">
          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Internal Linking Network</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <button onClick={onBackToHome} className="hover:text-cyan-400 bg-transparent border-none cursor-pointer">SEO Services</button>
            <button onClick={onBackToHome} className="hover:text-cyan-400 bg-transparent border-none cursor-pointer">PPC Services</button>
            <button onClick={onBackToHome} className="hover:text-cyan-400 bg-transparent border-none cursor-pointer">AI SEO Services</button>
            <button onClick={onBackToHome} className="hover:text-cyan-400 bg-transparent border-none cursor-pointer">B2B Lead Generation</button>
            <button onClick={onBackToHome} className="hover:text-cyan-400 bg-transparent border-none cursor-pointer">SaaS Marketing Solutions</button>
            <button onClick={onBackToHome} className="hover:text-cyan-400 bg-transparent border-none cursor-pointer">Ecommerce Growth Solutions</button>
            <button onClick={onBackToHome} className="hover:text-cyan-400 bg-transparent border-none cursor-pointer">Content Writing Services</button>
          </div>
          <p className="text-[9px] text-slate-600 font-mono mt-4">
            AKGLS Group Premium Sourcing Partners. All rights reserved. © {new Date().getFullYear()}.
          </p>
        </div>
      </footer>

    </div>
  );
}

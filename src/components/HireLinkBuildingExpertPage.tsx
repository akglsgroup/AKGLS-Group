import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, 
  MessageSquare, Smartphone, TrendingUp, Coins, Copy, CheckSquare,
  Network, Link2, Landmark, Share2, Mail, CheckCircle, Flame
} from 'lucide-react';

interface HireLinkBuildingExpertPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

const tools = [
  { name: "Ahrefs", role: "Backlink & Gap Audit Index" },
  { name: "SEMrush", role: "Organic Keyword Gap tracker" },
  { name: "Moz", role: "Spam score & Domain Trust diagnostics" },
  { name: "BuzzStream", role: "Publisher relationship CRM" },
  { name: "Hunter.io", role: "Direct Email Address verifier" },
  { name: "Pitchbox", role: "Outreach personalization workflow" },
  { name: "Screaming Frog", role: "Broken outbound Link crawler" },
  { name: "ChatGPT Search", role: "AI recommendation footprint" },
  { name: "Gemini AI", role: "Semantic customized outreach personalizer" },
  { name: "Google Search Console", role: "Real indexing telemetry tracker" }
];

const packages = [
  {
    name: "Starter Link Building",
    desc: "Ideal for fresh startups entering local levels or stable low-competition spaces.",
    price: "$1,850",
    period: "month",
    isPopular: false,
    features: [
      "5 High Authority Backlinks (DR 40-60+)",
      "Niche-relevant contextual guest posting",
      "Manual relationship pitch personalization",
      "Full anchor text safety profile planning",
      "Broken link opportunity scanning",
      "Monthly activity database reports"
    ]
  },
  {
    name: "Growth Authority Building",
    desc: "Designed to help scaling brands challenge industry leaders for high-competition commercial nodes.",
    price: "$3,600",
    period: "month",
    isPopular: true,
    features: [
      "12 Top-Tier Backlinks (DR 50-75+)",
      "Premium guest blogging placements",
      "Initial Digital PR reporter pitching (HARO/Sourced)",
      "Competitor backlink gap replication",
      "AI-Optimized custom niche publisher scraping",
      "Real-time indexing status monitoring dashboards"
    ]
  },
  {
    name: "Enterprise Link Building",
    desc: "An aggressive authority push for SaaS, Fintech, and high CPC competitive spaces.",
    price: "$6,800",
    period: "month",
    isPopular: false,
    features: [
      "25+ Elite Editorial Placements (DR 65-90+)",
      "Full-Service Digital PR & Media features",
      "Completely bespoke content creation",
      "White Glove broken link claims workflow",
      "Dedicated Slack / Teams direct channels Access",
      "Guaranteed index safety validation rule check"
    ]
  }
];

const faqs = [
  {
    q: "Why is link building important for SEO?",
    a: "Google tracks highly-regarded external web links as direct conceptual votes. High value editorial backlinks pass trust metrics (PageRank equity) which exponentially elevates your entire domain index crawling speed and search rankings capacity."
  },
  {
    q: "Are backlinks still important for Google rankings?",
    a: "Yes. Despite hundreds of minor updates, Google executive guidelines verify that inbound citations remain a core pillar of search relevance, especially inside sectors with high database CPC search intent like Fintech and SaaS."
  },
  {
    q: "What is white hat link building?",
    a: "White hat link building utilizes manual relationship-building to secure contextual backlinks inside active, genuine blogs that hold real search traffic, completely avoiding PBN networks, automated bots, or spammy link directories."
  },
  {
    q: "How many backlinks do I need?",
    a: "It depends heavily on your competitors' Domain Group authority profiles. Our interactive forecasting assistant calculates target gaps instantly to give you exact campaign commitments, usually ranging from 5 to 25 premium editorial backlinks per month."
  },
  {
    q: "Can link building improve domain authority?",
    a: "Yes, directly. Regularly getting mentions in high-DR publications raises your own site's Domain Rating (DR) or Domain Authority (DA), allowing smaller subpages inside your sitemap to rank instantly for secondary terms without needing separate links."
  },
  {
    q: "How long does link building take?",
    a: "Because our process focuses purely on manual reviewer cooperation and genuine guest post evaluations, backlinks usually appear and index on Google Search Console within 3 to 6 weeks from campaign kickoff."
  },
  {
    q: "Do you provide manual outreach services?",
    a: "Yes. Every single email, response handler, and article draft is initiated and curated manually by our dedicated outreach specialists to ensure excellent safety, high conversion ratios, and 100% spam-free outcomes."
  }
];

export default function HireLinkBuildingExpertPage({ onBackToHome, openProposalForm }: HireLinkBuildingExpertPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hire Link Building Expert | White Hat Link Building Services | AKGLS Group";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : "";
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Hire link building experts from AKGLS Group for white hat backlinks, guest posting, digital PR, authority link building, outreach campaigns & SEO authority growth services.');

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
  const [currentDomainAuthority, setCurrentDomainAuthority] = useState<number>(25);
  const [targetDomainAuthority, setTargetDomainAuthority] = useState<number>(55);
  const [industryNiche, setIndustryNiche] = useState<'saas' | 'ecommerce' | 'healthcare' | 'finance' | 'local'>('saas');
  const [currentTrafficFlow, setCurrentTrafficFlow] = useState<number>(15000);

  const tierMultiplier = industryNiche === 'saas' ? 3.8 : industryNiche === 'finance' ? 4.5 : industryNiche === 'ecommerce' ? 2.9 : industryNiche === 'healthcare' ? 3.2 : 1.8;
  const daDiff = Math.max(5, targetDomainAuthority - currentDomainAuthority);
  const estimatedRequiredLinks = Math.round(daDiff * (industryNiche === 'saas' ? 1.4 : 1.1));
  const projectTrafficLiftMultiplier = (daDiff * 0.08) + 1.2;
  const projectedMonthlyClicks = Math.round(currentTrafficFlow * projectTrafficLiftMultiplier);
  const incrementalClicks = projectedMonthlyClicks - currentTrafficFlow;
  
  const estimatedCostPerPremiumLink = industryNiche === 'finance' ? 320 : industryNiche === 'saas' ? 260 : 190;
  const estimatedTotalCampaignBudget = estimatedRequiredLinks * estimatedCostPerPremiumLink;
  const estimatedValuePerClick = industryNiche === 'finance' ? 4.5 : industryNiche === 'saas' ? 3.5 : 1.20;
  const incrementalChannelValueMonthly = Math.round(incrementalClicks * estimatedValuePerClick);

  // Free Backlink Audit state
  const [auditUrl, setAuditUrl] = useState('');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [auditName, setAuditName] = useState('');
  const [auditIndustry, setAuditIndustry] = useState('SaaS');
  const [auditGoal, setAuditGoal] = useState('Build Domain Authority');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditStepLog, setAuditStepLog] = useState<string[]>([]);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const startLiveBacklinkAudit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;

    setAuditRunning(true);
    setAuditResult(null);
    setAuditStepLog([]);

    const steps = [
      `Initializing backlink profile index search for ${auditUrl}...`,
      'Quering relative domain authority metrics and checking spam score indicators...',
      'Mapping deep competitor anchor text ratios against organic landing targets...',
      'Scanning for toxic backlinks, automated blog network footprints and spam patterns...',
      'Identifying premium editorial citation gaps inside high DA publications...',
      'Assessing current brand mention opportunities and broken linking paths...',
      'Compiling prioritized outreach roadmap and link building strategy blueprint...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAuditStepLog(prev => [...prev, `[LINK-AUDIT] ${steps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        const randomScore = Math.floor(Math.random() * 20) + 35; // 35-55 domain trust score
        setAuditResult({
          domainTrust: randomScore,
          toxicRatio: '14.2% (Moderate Hazard detected)',
          criticalGaps: [
            'No high-authority (DR 70+) contextual editorial editorial references mapped in current portfolio',
            'Over-optimized anchor text distributions causing high friction with recent Google RankBrain updates',
            'Suboptimal internal linking distribution preventing link juice transfer to high business margin paths',
            'Complete gap in Top-Tier Industry PR media citations'
          ],
          recommendedModel: 'Senior Backlink Outreach team (Dedicated Specialist + PR lead team support)',
          actionPlan: 'Launch safe high-DA manual outreach, swap targeted key metrics for generic natural language anchors, map 15 relevant broken competitor paths and claim resources.'
        });
        setAuditRunning(false);
      }
    }, 850);
  };

  const copyPageSchema = (schemaType: 'service' | 'faq' | 'review') => {
    const rawCode = schemaType === 'service' ? `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White Hat Backlink & Link Building Sourcing Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Worldwide",
  "description": "High authority white hat backlink building, guest post manual outreach, digital media PR connections & premium SEO authority amplification",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Link Sourcing Package Catalogs",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Link Building Outreach Specialist Sourcing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium High DA Editorial Guest Blog Placements" } }
    ]
  }
}` : schemaType === 'faq' ? `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is white hat link building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White hat link building utilizes manual, contextual outreach to secure genuine backlinks from high-authority, editorial sites with real search traffic, avoiding spam or automated schemes."
      }
    },
    {
      "@type": "Question",
      "name": "How does link building improve domain authority?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google acts on backlinks as powerful trust signals. High value editorial referrers pass contextual link equity (PageRank) which raises your entire sitemap's organic crawling prioritization and keywords rank capacity."
      }
    }
  ]
}` : `{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Marcus L.",
    "jobTitle": "VP Growth, SaaS Lead"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.9",
    "bestRating": "5"
  },
  "reviewBody": "AKGLS Group built a clean suite of high DR guest posts that expanded our pipeline authority from DR 28 to DR 64 in less than five months."
}`;
    navigator.clipboard.writeText(rawCode);
    alert(`${schemaType.toUpperCase()} Schema copied to clipboard successfully!`);
  };

  const services = [
    {
      title: "1. White Hat Link Building",
      badge: "⭐ Core Service",
      desc: "Manual relationship outreach to earn natural, high-trust referrers without risking algorithmic algorithmic penalties.",
      points: [
        "100% Manual contextual outreach",
        "No private blog networks (PBNs)",
        "Topical safety optimization rules",
        "Sustained brand equity growth"
      ]
    },
    {
      title: "2. Guest Posting Services",
      badge: "High Editorial Trust",
      desc: "Publish supreme editorial guest articles inside premium, genuine publications that possess real monthly traffic flows.",
      points: [
        "Niche-relevant real content",
        "Contextual natural anchors",
        "Strict authority editorial guidelines",
        "Continuous publisher network loops"
      ]
    },
    {
      title: "3. Digital PR Link Building",
      badge: "Media Outreach",
      desc: "Draft highly compelling press statements to secure premium references from top journalists and authority publications.",
      points: [
        "Interactive story ideation",
        "Journalist pitching",
        "Real organic brand mentions",
        "Unbeatable authority credentials"
      ]
    },
    {
      title: "4. AI-Powered Link Research",
      badge: "⭐ Trending Service",
      desc: "Leverage advanced custom LLMs to find deep keyword-relevant publishers and write ultra-personalized pitches.",
      points: [
        "Predictive outreach algorithms",
        "Dynamic competitor asset audits",
        "High-response target profiles",
        "Contextual contact extraction"
      ]
    },
    {
      title: "5. Ecommerce Link Building",
      badge: "Transactional Intent",
      desc: "Secure high-value placements pointing directly to collections, buying guides, and physical product categories.",
      points: [
        "Product roundups and listings",
        "Lifestyle & shipping guide cites",
        "Direct category authority push",
        "Targeted anchors distribution"
      ]
    },
    {
      title: "6. SaaS Link Building",
      badge: "B2B Domain Authority",
      desc: "Inject relevant references into B2B software, developer blogs, and technical SaaS service pages.",
      points: [
        "Integrations & tools highlights",
        "Co-marketing resource linking",
        "Developer hub documentation references",
        "Inbound anchor health modeling"
      ]
    },
    {
      title: "7. Local SEO Link Building",
      badge: "Hyperlocal Citations",
      desc: "Build highly authoritative local references, map clusters, and geographical business coordinates.",
      points: [
        "Hyperlocal regional directory posts",
        "Localized community sponsorships",
        "Geographical entity anchors",
        "Structured citations consistency"
      ]
    },
    {
      title: "8. Broken Link Building",
      badge: "Value-Driven Recovery",
      desc: "Scrape reference pages in your sector for nonfunctional URLs, proposing your high-grade resource as a ready replacement.",
      points: [
        "Identifying 404 links on authoritative sites",
        "Strategic asset creation guidelines",
        "High success pitch delivery",
        "Natural educational placement"
      ]
    },
    {
      title: "9. Competitor Backlink Analysis",
      badge: "Authority Gap Map",
      desc: "Reverse engineer the link profiles of your highest-ranking competitor domains to capture their key source assets.",
      points: [
        "Backlink profile gap assessment",
        "Anchor and page tier replication keys",
        "Target domain prioritizer checklist",
        "Strategic authority roadmap design"
      ]
    },
    {
      title: "10. Dedicated Link Building Hire",
      badge: "Strategic Sourcing",
      desc: "Secure full-time or fractional outreach, research, and placement experts working directly inside your Slack/Teams spaces.",
      points: [
        "Dedicated daily reporting outreach specialists",
        "Flexible fractional hours selection",
        "Complete technical safety QA supervisors",
        "Agency-ready white-label models"
      ]
    }
  ];

  const hiringModels = [
    {
      title: "Full-Time Link Building Expert",
      subtitle: "Dedicated Authority Acceleration",
      desc: "Complete, continuous manual outreach campaign orchestration, broken-link tracking, competitor replication, and editorial content pitching embedded into your internal daily rhythm.",
      badge: "Most popular for SaaS and competitive niches"
    },
    {
      title: "Part-Time Outreach Specialist",
      subtitle: "Fractional Authority Support",
      desc: "Targeted outreach support driving highly authoritative, consistent backlinks without full enterprise resource allocation.",
      badge: "Best for steady, controlled authority scaling"
    },
    {
      title: "Hourly Link Building Expert",
      subtitle: "Tactical Execution Blocks",
      desc: "Acquire specialized technical consults, local directory configuration blocks, or competitive gap analyzer reviews on-demand.",
      badge: "Flexible sprint support model"
    },
    {
      title: "Project-Based Backlink Sprint",
      subtitle: "Milestone-Driven Amplification",
      desc: "A concentrated authority sprint aimed at securing 8-15 high DR placements for a new product launching sequence.",
      badge: "Perfect for new category launches"
    },
    {
      title: "White Label Link Building Support",
      subtitle: "Scale Your Agency Outreach",
      desc: "Deliver pristine, manual, audit-safe authority backlinks to your agency client lines under your custom branding flags.",
      badge: "Elite partnership models"
    }
  ];

  const industries = [
    { name: "SaaS", focus: "Finely-targeted integrations, technical developer blogs, and guest posts on high-DR SaaS sites." },
    { name: "Ecommerce", focus: "Contextual mentions inside gift guides, consumer fashion pages, and high-impact category texts." },
    { name: "Healthcare", focus: "Emphatic medical entity citations from high authority health publishers enforcing absolute wellness accuracy." },
    { name: "Finance", focus: "Highly trusted placements on certified economic bulletins and consumer finance advice channels." },
    { name: "Education", focus: "High DA academic resource sharing lists and institutional entity connections." },
    { name: "Real Estate", focus: "Location-focused blog networks and hyper-targeted geographic home buyer columns." },
    { name: "Manufacturing", focus: "Heavy engineering directories, B2B procurement networks, and industrial solution columns." },
    { name: "IoT Companies", focus: "Technical specifications connections, hardware integration references, and network architecture blogs." },
    { name: "Local Businesses", focus: "High trust regional listings, localized map boosters, and city events content clusters." },
    { name: "Law Firms", focus: "Official legal directories, certified professional chambers, and municipal guide references." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Backlink Profile Audit & Research",
      desc: "Analyze existing referring domains, flag hazardous algorithmic footprints, evaluate competitor link models, and highlight structural growth goals."
    },
    {
      step: "02",
      title: "Outreach Strategy Planning",
      desc: "Build safe contextual anchor text guidelines, target relevant publisher criteria, design customizable campaign drafts, and select outreach metrics."
    },
    {
      step: "03",
      title: "Manual Relationship Building",
      desc: "Execute targeted manual pitches, negotiate high-tier guest article slots, organize editor review loops, and foster long-term network alliances."
    },
    {
      step: "04",
      title: "Link Placement & QA Integration",
      desc: "Monitor successful placements, ensure index safety, check dofollow/nofollow code parameters, verify anchor relevance, and cross-reference schema connections."
    },
    {
      step: "05",
      title: "Reporting & Authority Monitoring",
      desc: "Deliver detailed backlinks databases, track search engine indexing status, monitor organic traffic boosts, and scale upcoming target portfolios."
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden relative">
      
      {/* Visual Ambient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-[#091b26]/30 via-[#020614]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[18%] right-[-10%] w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-15%] w-[650px] h-[650px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <nav id="link-building-nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900/60 relative bg-[#02040d]/85 backdrop-blur z-20">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition font-mono text-xs bg-transparent border-none cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-cyan-400" />
          <span>Back to Corporate Hub</span>
        </button>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918318114492"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex text-xs font-mono text-cyan-400 border border-cyan-950 bg-cyan-950/25 px-3 py-1.5 rounded hover:bg-cyan-950/50 transition-colors"
          >
            WhatsApp Support: +91 831 811 4492
          </a>
          <button 
            onClick={openProposalForm} 
            className="text-xs bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-slate-950 font-bold px-4 py-2 rounded shadow-md shadow-cyan-950/30 cursor-pointer transition_transform"
          >
            Get Custom Strategy Proposal
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="link-building-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 px-3 py-1.5 rounded-full text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Unbreakable White Hat PageRank Authority Flow</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hire Link Building Experts to Improve <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">SEO Authority, Rankings & Organic Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hire experienced link building experts for white hat backlinks, guest posting, digital PR, outreach campaigns, niche edits, authority link acquisition, and AI-powered SEO authority growth strategies.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('hiring-packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg shadow-lg shadow-cyan-950/30 transition flex items-center gap-2 text-sm"
              >
                <span>Hire Link Building Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('free-backlink-audit-stage');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-slate-700 hover:border-cyan-500 bg-slate-900/40 text-slate-100 hover:text-white font-medium px-6 py-3.5 rounded-lg transition text-sm"
              >
                Get Free Backlink Audit
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-900/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">White Hat Experts</h4>
                  <p className="text-xs text-slate-400">Pure editorial placement, 100% manual outreach safety indexes.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">High Authority Backlinks</h4>
                  <p className="text-xs text-slate-400">DR 60+ real traffic publications, complete context-anchoring.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Manual Outreach Specialists</h4>
                  <p className="text-xs text-slate-400">Custom context pitches built directly to your sector lingo.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Authority Growth Focused</h4>
                  <p className="text-xs text-slate-400">Designed to raise site crawling prioritizations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Layout: Backlink Authority Dashboard Simulation */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#050b1c] rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-cyan-500/20 text-cyan-400 animate-pulse flex items-center justify-center font-bold text-[9px]">DR</span>
                  <span className="text-xs text-white font-mono font-bold">AKGLS Tracker Suite</span>
                </div>
                <div className="bg-[#030612] px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 border border-cyan-950">
                  REAL-TIME LINKS INDEX
                </div>
              </div>

              {/* Graphical Domain Authority lift simulation */}
              <div className="space-y-4 pt-4">
                <div className="bg-[#02040a] p-3 rounded border border-slate-900 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Referring Domains Index</span>
                    <span className="text-xs font-bold text-white font-mono">+128 Authority Refers</span>
                  </div>
                  {/* Pseudo Sparkline Chart */}
                  <div className="flex items-end justify-between h-14 pt-2 gap-1.5 px-2">
                    <div className="h-[20%] w-full bg-slate-800 rounded-t" />
                    <div className="h-[28%] w-full bg-slate-800 rounded-t" />
                    <div className="h-[35%] w-full bg-slate-800 rounded-t" />
                    <div className="h-[52%] w-full bg-slate-800 rounded-t" />
                    <div className="h-[68%] w-full bg-cyan-950 rounded-t border-t-2 border-cyan-500" />
                    <div className="h-[85%] w-full bg-cyan-900 rounded-t border-t-2 border-cyan-400" />
                    <div className="h-[100%] w-full bg-gradient-to-t from-cyan-600 to-indigo-500 rounded-t" />
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-slate-500">
                    <span>Month 1</span>
                    <span>Month 3</span>
                    <span>Active Index (Sprint)</span>
                  </div>
                </div>

                {/* Score indicators */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#02040b] p-2.5 rounded border border-slate-900 text-center">
                    <span className="text-[9px] text-slate-500 uppercase block">Domain Authority</span>
                    <span className="text-xl font-bold font-mono text-white">DR 72</span>
                  </div>
                  <div className="bg-[#02040b] p-2.5 rounded border border-slate-900 text-center">
                    <span className="text-[9px] text-slate-500 uppercase block">PageRank Vector</span>
                    <span className="text-xl font-bold font-mono text-cyan-400">+58% Lift</span>
                  </div>
                </div>

                {/* Simulated placement log */}
                <div className="bg-cyan-950/20 border border-cyan-500/20 p-3 rounded-lg space-y-1">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                    <Network className="w-3.5 h-3.5" />
                    <span>LATEST OUTREACH SUCCESS</span>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-tight">
                    Editorial guest article published inside <span className="text-white underline">tech-enterprise.io</span> (DR 79) targeting semantic SaaS integrations anchor node safely.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="border-y border-slate-900/80 bg-[#030612]/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs text-slate-500 tracking-wider uppercase mb-8">
            Trusted Link Building Experts for SEO Growth & Authority Campaigns
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-65 grayscale hover:grayscale-0 transition duration-300 mb-12">
            <span className="text-lg font-black tracking-widest text-slate-400">FINANCE_BULLETIN</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">SAAS_INTEGRATION</span>
            <span className="text-lg font-mono tracking-widest text-slate-400">|| MEDICAL_TIMES ||</span>
            <span className="text-lg font-black tracking-widest text-slate-400">ECOMM_LEADER</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">TELEMETRY_TECH</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center max-w-5xl mx-auto pt-10 border-t border-slate-900">
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">18,500+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">White Hat Backlinks Built</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">45K+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Domains Handled Outreach</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">+42 pts</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Average DR Growth Achieved</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">310%</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Avg Traffic rankings Lift</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS LINK BUILDING SECTION */}
      <section className="py-20 bg-slate-950/20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">What Is Link Building?</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Link building is the strategic process of acquiring hyperlinks from high-authority external websites back to your own domain properties. Google tracks these links as foundational trust endorsements (votes), indicating to algorithms that your pages are deeply knowledgeable and deserve higher crawls.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: "White hat backlink building", desc: "No artificial private networks or automated spam lists. We secure citations by delivering authentic, high-quality guest content pitches editors want." },
                  { title: "Authority link acquisition", desc: "Forcing search relevance by targeting high-DR domains with real traffic metrics." },
                  { title: "Digital Media PR Outreach", desc: "Connecting with professional columnists to achieve organic mentions in news, business, and tech hub updates." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#030612]/90 border border-slate-800 p-6 rounded-xl space-y-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">Safe Backlink Examples We Build</span>
                
                <div className="space-y-3">
                  {[
                    { type: "Editorial Backlinks", site: "techcrunch-partner.com", dr: "DR 84", anchor: "SaaS automation analytics" },
                    { type: "Premium Guest Post", site: "businessinsider-hub.com", dr: "DR 89", anchor: "enterprise resource systems" },
                    { type: "Niche Editorial Edit", site: "fintechworld.org", dr: "DR 71", anchor: "payment gateway compliance guidelines" },
                    { type: "Highly Trusted PR Mention", site: "educationalregister.edu", dr: "DR 92", anchor: "course layout research study" },
                    { type: "Authority Resource Page", site: "saasgrowthlist.com/resources", dr: "DR 65", anchor: "top analytics platforms for ecommerce" }
                  ].map((ex, i) => (
                    <div key={i} className="bg-[#02040b] p-3 rounded border border-slate-900 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] text-cyan-400 font-mono font-bold block">{ex.type}</span>
                        <span className="text-xs text-slate-200 block">{ex.site}</span>
                        <span className="text-[10px] text-slate-500 font-mono">Anchor: "{ex.anchor}"</span>
                      </div>
                      <span className="bg-emerald-950 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-mono font-bold">{ex.dr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY HIRE A LINK BUILDING EXPERT SECTION */}
      <section className="bg-slate-950/20 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire a Link Building Expert?</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Relying on generic automated software ruins search rankings forever. A dedicated, skilled human builder handles outreach relationship pipelines properly, ensuring only high-quality link vectors are integrated into your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Improve Google rankings", desc: "Citations from authority hosts prove relevance to Core Update crawler indexing algorithms." },
              { title: "Build domain authority", desc: "Gain massive authority power (PageRank equity) passed down directly from trusted, high-value sites." },
              { title: "Increase organic traffic", desc: "Boost keyword ranking capacity across multiple long-tail search nodes simultaneously." },
              { title: "Long-term SEO compound", desc: "High value organic backlinks stay hosted permanently, continuously passing authority for years." },
              { title: "Improve search signals", desc: "Prove real business presence and trustworthiness to ranking crawlers, protecting metrics from penalties." },
              { title: "Strengthen brand visibility", desc: "Get featured across premium sector publications, earning secondary direct conversion traffic." }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-xl hover:border-cyan-500/25 transition">
                <CheckCircle className="w-5.5 h-5.5 text-cyan-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BACKLINK ROI CALCULATOR */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Calculate Inbound Authority Valuation Models</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Backlinks represent an investment that scales your overall indexing potential. Use our visual projection sliders to see how stepping up Domain Authority (DR) levels translates directly to increased crawl priorities, higher keywords capacity, and long-term search traffic value.
              </p>
              
              <div className="bg-[#030612] p-4 rounded-lg border border-slate-900 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>CRAWLING EFFICIENCY COEFFICIENT</span>
                </div>
                <p className="text-xs text-slate-400">
                  Upgrading from <strong className="text-white">DR 25 to DR 55</strong> typically lifts sitemap crawl crawl cycles by over 180%, ensuring newly dropped topic pages rank significantly faster.
                </p>
              </div>
            </div>

            {/* Right side interactive calculator */}
            <div className="lg:col-span-6">
              <div className="bg-[#04081c]/90 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-cyan-400" />
                  <span>Authority Growth Forecasting Tool</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Estimate total resources required to claim targeted rankings.
                </p>

                <div className="space-y-5">
                  {/* Industry Select */}
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400 font-mono">Industry Vertical:</label>
                    <select 
                      value={industryNiche}
                      onChange={(e) => setIndustryNiche(e.target.value as any)}
                      className="w-full bg-[#02040b] border border-slate-800 rounded p-2 text-xs text-white accent-cyan-400"
                    >
                      <option value="saas">SaaS & B2B Software (High CPC value)</option>
                      <option value="ecommerce">Ecommerce & retail brands</option>
                      <option value="healthcare">Healthcare & wellness programs</option>
                      <option value="finance">Finance & fintech systems (High CPC value)</option>
                      <option value="local">Local business service networks</option>
                    </select>
                  </div>

                  {/* Current DA slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Current Domain Authority (Estimate):</span>
                      <span className="text-cyan-400 font-bold">DR {currentDomainAuthority}</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="60" 
                      value={currentDomainAuthority} 
                      onChange={(e) => setCurrentDomainAuthority(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-cyan-400"
                    />
                  </div>

                  {/* Target DA slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Target Domain Authority Destination:</span>
                      <span className="text-indigo-400 font-bold">DR {targetDomainAuthority}</span>
                    </div>
                    <input 
                      type="range" 
                      min="35" 
                      max="85" 
                      value={targetDomainAuthority} 
                      onChange={(e) => setTargetDomainAuthority(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-indigo-400"
                    />
                  </div>

                  {/* Current Traffic Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Current Monthly Google Clicks:</span>
                      <span className="text-emerald-400 font-bold">{currentTrafficFlow.toLocaleString()} Clicks</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="150000" 
                      step="2000"
                      value={currentTrafficFlow} 
                      onChange={(e) => setCurrentTrafficFlow(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-emerald-400"
                    />
                  </div>

                  {/* Result Panel */}
                  <div className="bg-[#02040a] border border-slate-900 p-4 rounded-xl mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Est. Outreach Required</span>
                      <span className="text-base font-bold text-cyan-400">~{estimatedRequiredLinks} Editorial Links</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Estimated Domain Organic Lift</span>
                      <span className="text-base font-bold text-emerald-400">+{Math.round((incrementalClicks / currentTrafficFlow) * 100)}% Traffic</span>
                    </div>
                    <div className="col-span-2 border-t border-slate-900 pt-3">
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Estimated Monthly Search Traffic Value Gain</span>
                      <span className="text-lg font-black text-white">+${incrementalChannelValueMonthly.toLocaleString()} <span className="text-xs text-slate-400">/mo savings in Ads CPC equivalency</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR LINK BUILDING SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">
            High Authority Placements catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Link Building Services Offered by Our Experts
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            AKGLS group utilizes hand-picked manual recruiters, automated gap diagnostic engines, and authentic content placement slots to continuously secure target backlinks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-cyan-500/20 transition-all flex flex-col justify-between">
              <div>
                <span className="absolute top-4 right-4 text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded uppercase">
                  {service.badge}
                </span>
                <div className="w-8 h-8 rounded bg-cyan-950/40 text-cyan-400 flex items-center justify-center mb-4 font-mono font-black text-xs">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              </div>

              <div className="border-t border-slate-900 pt-3 mt-4 space-y-1.5">
                <span className="text-[10px] text-slate-500 font-mono uppercase block">Includes:</span>
                {service.points.map((p, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING MODELS SECTION */}
      <section className="bg-[#030612]/80 border-t border-b border-slate-900/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible Link Building Sourcing Models</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We know no single campaign volume fits everyone. Choose a dedicated, embedded manual outreach specialist or configure fractional campaign blocks to suit your present target plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringModels.map((model, index) => (
              <div key={index} className="bg-[#050b1c] border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/25 transition">
                <div>
                  <span className="text-[9px] font-mono tracking-wider font-bold bg-[#0a183d] text-cyan-400 border border-[#102a6b] px-2 py-0.5 rounded block w-fit mb-3">
                    {model.badge}
                  </span>
                  <h3 className="text-lg font-black text-white">{model.title}</h3>
                  <h4 className="text-xs text-slate-400 mt-0.5 font-mono">{model.subtitle}</h4>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">{model.desc}</p>
                </div>
                <div className="pt-6 border-t border-slate-900/85 mt-6 flex justify-between items-center">
                  <span className="text-[10px] text-emerald-400 font-mono">Fully-Vetted Specialist</span>
                  <button 
                    onClick={openProposalForm}
                    className="text-xs text-cyan-400 hover:text-white transition flex items-center gap-1 font-mono font-bold"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Industries Our Link Building Experts Work With</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Niche-relevance is everything for off-page search safety guidelines. Our outreach managers focus heavily on vertical structures, ensuring backlinks always originate from contextually sound publishers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((ind, index) => (
            <div key={index} className="bg-[#030612]/60 border border-slate-900 p-4 rounded-xl hover:border-cyan-500/20 transition flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">0{index + 1} // INDUSTRY</span>
                <h3 className="text-sm font-black text-white">{ind.name}</h3>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{ind.focus}</p>
              </div>
              <div className="pt-3 border-t border-slate-900/60 mt-3 text-[9px] font-mono text-slate-500">
                Authorized publishers mapped
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE 5-STEP OUTREACH PROCESS */}
      <section className="bg-slate-950/20 border-t border-b border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ffd1] font-mono text-xs font-semibold tracking-widest uppercase">
              Proven Campaign Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">Our Structured Link Building Process</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We eliminate random guest post spamming. We craft highly transparent, multi-tiered manual prospecting pipelines mapped strictly to safety rules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-[#030612] border border-slate-900 p-6 rounded-xl text-center space-y-4 hover:border-cyan-500/20 transition">
                <div className="w-12 h-12 rounded-full bg-cyan-950 text-cyan-400 font-mono font-black text-lg flex items-center justify-center mx-auto">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-[2.5rem] right-[-1.5rem] text-cyan-700 z-10">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI LINK BUILDING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-cyan-950/25 via-indigo-950/15 to-[#02040d] border border-cyan-500/30 p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1 bg-cyan-950 text-cyan-400 text-[10px] px-2.5 py-1 rounded-full uppercase font-mono font-bold">
                <Bot className="w-4 h-4" />
                <span>Next-Gen Prospect Mapping Sourcing</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Hire AI-powered Link Building Experts for Smarter SEO Growth</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By integrating specialized LLM analytics, our outreach experts map publisher profiles at 10x speeds. We instantly diagnose indexing likelihood, verify anchor consistency, predict domain growth paths, and ensure your investment is continuously placed inside assets holding massive upside coefficients.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>AI prospect analytics</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Smart outreach targeting</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>AI opportunity discovery</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Predictive authority modeling</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative bg-[#010309]/95 border border-slate-800 p-5 rounded-xl space-y-3">
              <span className="text-[9px] font-mono text-indigo-400 block border-b border-indigo-950 pb-2 uppercase">SMART PROSPECTOR INSIGHT LOG</span>
              
              <div className="space-y-2 text-[11px] font-mono">
                <div className="p-2 bg-slate-950 rounded border border-slate-900">
                  <span className="text-cyan-400 font-bold block">[PROSPECT_MATCH_OK]</span>
                  <p className="text-slate-300">Crawl analysis of domain standard tech-insight.com (DR 71)</p>
                  <p className="text-slate-500 pt-0.5">Topical affinity with B2B SaaS index high. Estimated index priority 94%.</p>
                </div>

                <div className="p-2 bg-slate-950 rounded border border-slate-900">
                  <span className="text-indigo-400 font-bold block">[ANCHOR_QA_SAFE]</span>
                  <p className="text-slate-300">Context node check: "cloud pipeline telemetry tools"</p>
                  <p className="text-slate-500 pt-0.5">Grammar pattern natural placement coefficient: 98.4 (Perfect flow).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS DELIVERED BY EXPERTS */}
      <section className="bg-slate-950/20 border-t border-b border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Results Delivered by Our Link Building Experts</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We track real traffic lifts, ranking jumps, and index prioritize charts. No empty placement databases; pure authority impact maps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: "Enterprise SaaS Lift", before: "DR 18 (2.4K standard views)", after: "DR 62 (42.8K monthly views)", metric: "+244% Demo Subscriptions" },
              { title: "Ecommerce Authority Push", before: "DR 29 (14.2K collection Clicks)", after: "DR 58 (88.4K transactional Clicks)", metric: "+190% Direct Organic Sales Lift" },
              { title: "B2B Hardware Manufacturer", before: "DR 12 (0.4K low value leads)", after: "DR 48 (12.4K top tier business clicks)", metric: "+320% Quote Inquiry increase" }
            ].map((res, i) => (
              <div key={i} className="bg-[#030612] border border-slate-900 p-6 rounded-xl hover:border-cyan-500/20 transition flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-white border-b border-slate-900 pb-2 tracking-tight uppercase font-mono">{res.title}</h3>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Starting Point Assets:</span>
                      <span className="text-slate-300 font-mono">{res.before}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-cyan-400">
                      <span>Post Campaign Authority:</span>
                      <span className="font-mono">{res.after}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-900/80 mt-4 flex justify-between items-center text-xs font-mono">
                  <span className="text-emerald-400 font-bold">{res.metric}</span>
                  <span className="text-slate-500">6 Months indexing</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES CARD NAVIGATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Link Building Success Stories</h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            See how specialized businesses deployed AKGLS Group experts to outrank old industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ecommerce Authority Jump",
              desc: "How a high-growth jewelry retailer secured 48 premium health & fashion guide referrals to claim #1 keywords ranking spots.",
              role: "4.8x ROI recorded"
            },
            {
              title: "SaaS SEO Authority Scaling",
              desc: "Building 85+ DR 70 manual guest postings to secure a top search visibility state for a logistics scheduler automation system.",
              role: "+310% Free Demo Signups"
            },
            {
              title: "Hyperlocal Legal Hub Boost",
              desc: "Scaling hyperlocal local citations and map context links to outrank traditional city legal firms within four direct months.",
              role: "DR raised 14 to 45"
            }
          ].map((cs, i) => (
            <div key={i} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/20 transition">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">SUCCESS CASE STUDY</span>
                <h3 className="text-base font-black text-white">{cs.title}</h3>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{cs.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-900/60 mt-4 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>{cs.role}</span>
                <button 
                  onClick={openProposalForm} 
                  className="text-slate-400 hover:text-white transition flex items-center gap-1 font-bold text-[11px]"
                >
                  <span>Read Story</span>
                  <ArrowUpRight className="w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="bg-slate-950/20 border-t border-b border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire Link Building Experts from AKGLS Group?</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We are not random link resellers. We are highly customized off-page technical planners focusing strictly on white hat outreach safety rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "White Hat SEO Experts", desc: "We adhere to 100% strict manual outreach standards to build natural references Google loves." },
              { title: "Manual Outreach Specialists", desc: "No generic templates. Every outreach sequence is fully bespoke to match industry topics." },
              { title: "High Authority Backlinks", desc: "We exclusively target real, trusted host blogs with actual monthly search parameters." },
              { title: "AI-Powered Link Research", desc: "Utilize advanced context algorithms to identify high value hidden placement opportunities." },
              { title: "Transparent Reporting", desc: "Get full real-time database access tracking every email response and active placement." },
              { title: "Multi-Industry Experience", desc: "Vetted experts across SaaS, healthcare, ecommerce, legal, fin-tech, and educational structures." },
              { title: "SEO-Safe Strategies", desc: "Continuous monitoring of algorithmic core upgrades to assure completely safe long-term growth indices." },
              { title: "Flexible Hiring Options", desc: "Hire full-time resources, fractional specialists, or purchase strategic launch projects on demand." }
            ].map((usp, i) => (
              <div key={i} className="bg-[#030612] border border-slate-900 p-5 rounded-xl hover:border-cyan-500/25 transition">
                <Check className="w-4 h-4 text-cyan-400 mb-2" />
                <h4 className="text-xs md:text-sm font-bold text-white mb-1">{usp.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
          Content Tools &amp; Technologies We Use to Ensure High Compliance Ratios
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tools.map((t, index) => (
            <div key={index} className="bg-[#030612]/60 border border-slate-900 p-4 rounded-xl text-center space-y-1 hover:border-cyan-500/20 transition">
              <span className="text-xs font-black text-white font-mono block">{t.name}</span>
              <span className="text-[10px] text-slate-500 font-mono block">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="hiring-packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00ffd1] font-mono text-xs font-semibold tracking-widest uppercase">
            Pricing Models Layout
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Flexible Link Building Sourcing Packages
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Configure premium resource commitments to match your general operational capabilities. Fully scalable on-the-go.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-[#030612] border ${pkg.isPopular ? 'border-semibold border-cyan-500/60' : 'border-slate-900/80'} p-8 rounded-2xl relative flex flex-col justify-between`}>
              <div>
                {pkg.isPopular && (
                  <span className="absolute top-4 right-4 text-[9px] font-mono tracking-wider font-extrabold bg-[#0a183d] text-cyan-400 border border-[#102a6b] px-2 py-0.5 rounded uppercase">
                    ⭐️ RECOMMENDED LIFT
                  </span>
                )}
                <h3 className="text-lg font-black text-white">{pkg.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-snug">{pkg.desc}</p>
                
                <div className="my-6">
                  <span className="text-3xl font-black text-white">{pkg.price}</span>
                  <span className="text-xs text-slate-500 font-mono ml-1.5">/ {pkg.period}</span>
                </div>

                <div className="border-t border-slate-900/80 pt-4 space-y-3">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-900/80">
                <button 
                  onClick={openProposalForm}
                  className={`w-full py-3 rounded-lg text-xs font-bold leading-none cursor-pointer tracking-wide flex items-center justify-center gap-2 transition ${pkg.isPopular ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold' : 'border border-slate-800 text-slate-100 hover:border-cyan-500'}`}
                >
                  <span>Hire Link Building Expert Today</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DYNAMIC SCHEMA CODE COPY CHEATSHEET */}
      <section className="py-20 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-1.5 bg-cyan-950 text-cyan-400 text-[10px] px-2.5 py-1 rounded font-mono font-bold">
                <Terminal className="w-4 h-4" />
                <span>Rich Snippet Recommendations</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Interactive JSON-LD Schema Copy Helpers</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Add structured microdata metadata to your page headers so search networks understand crawl specifications perfectly. Click any options block to instantly capture vetted Schema.org scripts.
              </p>
              
              <div className="flex flex-col gap-2 pt-2">
                <button 
                  onClick={() => copyPageSchema('service')}
                  className="bg-slate-900/40 border border-slate-800 text-slate-300 hover:border-cyan-500 px-4 py-2.5 rounded text-xs text-left font-mono hover:text-white transition flex items-center justify-between"
                >
                  <span>Sitemap Service Schema Block</span>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                </button>
                <button 
                  onClick={() => copyPageSchema('faq')}
                  className="bg-slate-900/40 border border-slate-800 text-slate-300 hover:border-cyan-500 px-4 py-2.5 rounded text-xs text-left font-mono hover:text-white transition flex items-center justify-between"
                >
                  <span>FAQ Page Schema Block</span>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                </button>
                <button 
                  onClick={() => copyPageSchema('review')}
                  className="bg-slate-900/40 border border-slate-800 text-slate-300 hover:border-cyan-500 px-4 py-2.5 rounded text-xs text-left font-mono hover:text-white transition flex items-center justify-between"
                >
                  <span>Client Review Schema Block</span>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#050b1d] border border-slate-800 p-5 rounded-xl space-y-3 relative">
              <span className="text-[10px] text-slate-500 uppercase font-mono tracking-widest block">Sample JSON-LD structured representation template</span>
              <div className="bg-[#02040b] p-3 rounded-lg text-[11px] text-cyan-300/90 font-mono leading-relaxed overflow-x-auto max-h-60">
                <pre>{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White Hat Backlink Building",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group"
  },
  "areaServed": "Worldwide",
  "description": "High authority white hat backlink building..."
}`}</pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-950/20 border-t border-slate-900/60 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-slate-400 mt-2 text-sm">
              Answers to technical, safety, and operational questions about hiring link building experts from our network.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#030612] border border-slate-950 rounded-xl overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 text-white hover:text-cyan-400 transition"
                >
                  <span className="text-sm font-bold">{faq.q}</span>
                  {activeFaq === index ? (
                    <ChevronDown className="w-4 h-4 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-5 pt-1 text-xs text-slate-300 border-t border-slate-900 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE BACKLINK AUDIT SECTION */}
      <section id="free-backlink-audit-stage" className="max-w-4xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-900/60">
        <div className="bg-[#04081c]/90 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase font-extrabold tracking-widest inline-flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>Instant Channel Analysis</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Get a Free Backlink Audit Before Hiring</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Submit your domain site coordinates below. Our technical outreach crawl engines will map domain health, identify toxic properties, assess anchor distributions, and trace your main competitor backlink gaps.
            </p>
          </div>

          <form onSubmit={startLiveBacklinkAudit} className="space-y-4 max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-500 font-mono block uppercase mb-1">Company Contact Name:</label>
                <input 
                  type="text" 
                  required
                  placeholder="Shashi Prabha Singh"
                  value={auditName}
                  onChange={(e) => setAuditName(e.target.value)}
                  className="w-full bg-[#02040b] border border-slate-850 focus:border-cyan-500 rounded p-2.5 text-xs text-white placeholder-slate-600 outline-none"
                />
              </div>
              
              <div>
                <label className="text-[10px] text-slate-500 font-mono block uppercase mb-1">Target Website URL:</label>
                <input 
                  type="url" 
                  required
                  placeholder="https://akglsgroup.com"
                  value={auditUrl}
                  onChange={(e) => setAuditUrl(e.target.value)}
                  className="w-full bg-[#02040b] border border-slate-850 focus:border-cyan-500 rounded p-2.5 text-xs text-white placeholder-slate-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-500 font-mono block uppercase mb-1">Industry Segment:</label>
                <select 
                  value={auditIndustry}
                  onChange={(e) => setAuditIndustry(e.target.value)}
                  className="w-full bg-[#02040b] border border-slate-850 focus:border-cyan-500 rounded p-2.5 text-xs text-white outline-none"
                >
                  <option value="SaaS">SaaS & Software</option>
                  <option value="Ecommerce">Ecommerce & Retail</option>
                  <option value="Healthcare">Healthcare & Wellness</option>
                  <option value="Finance">Fintech & Banking</option>
                  <option value="Real Estate">Real Estate & Homes</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-slate-500 font-mono block uppercase mb-1">Primary Growth Goal:</label>
                <select 
                  value={auditGoal}
                  onChange={(e) => setAuditGoal(e.target.value)}
                  className="w-full bg-[#02040b] border border-slate-850 focus:border-cyan-500 rounded p-2.5 text-xs text-white outline-none"
                >
                  <option value="Build Domain Authority">Build Domain Authority</option>
                  <option value="Claim Competitive Keywords">Claim competitive target keywords</option>
                  <option value="Outrank Competitor Assets">Outrank competitor high-authority assets</option>
                  <option value="Clean Toxic Backlink Portfolio">Clean spam / toxic referring profiles</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-500 font-mono block uppercase mb-1">Deliverable Email:</label>
                <input 
                  type="email" 
                  required
                  placeholder="shashisingh447@gmail.com"
                  value={auditEmail}
                  onChange={(e) => setAuditEmail(e.target.value)}
                  className="w-full bg-[#02040b] border border-slate-850 focus:border-cyan-500 rounded p-2.5 text-xs text-white placeholder-slate-600 outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-500 font-mono block uppercase mb-1">Phone Number:</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 8318114492"
                  value={auditPhone}
                  onChange={(e) => setAuditPhone(e.target.value)}
                  className="w-full bg-[#02040b] border border-slate-850 focus:border-cyan-500 rounded p-2.5 text-xs text-white placeholder-slate-600 outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={auditRunning}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-indigo-500 font-bold text-slate-950 text-xs rounded-lg hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
            >
              {auditRunning ? (
                <>
                  <Activity className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Crawling Backlink Database Index...</span>
                </>
              ) : (
                <>
                  <Terminal className="w-4 h-4 text-slate-950" />
                  <span>Launch Instant Backlink Profile Crawl</span>
                </>
              )}
            </button>
          </form>

          {/* CRAWL CONSOLE PROGRESS LOG */}
          <AnimatePresence>
            {auditStepLog.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 bg-[#02040a] rounded-xl border border-slate-900 p-4 font-mono text-[10px] text-cyan-300/80 space-y-2.5 max-h-48 overflow-y-auto"
              >
                {auditStepLog.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-slate-600 shrink-0">[{new Date().toLocaleTimeString()}]</span>
                    <span>{log}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* DYNAMIC AUDIT RESULTS RENDER */}
          <AnimatePresence>
            {auditResult && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-[#02040b] border border-cyan-500/20 p-6 rounded-xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold font-mono text-white">Crawl Scorecard Completed</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">
                    Estimated Domain Trust: {auditResult.domainTrust} / 100
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">Toxic Referral ratios:</span>
                    <span className="text-xs font-bold text-red-400 block">{auditResult.toxicRatio}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">Recommended Sourcing Level:</span>
                    <span className="text-xs font-bold text-emerald-400 block">{auditResult.recommendedModel}</span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-900 pt-4">
                  <span className="text-[10px] text-slate-500 font-mono uppercase block">Associated Portfolio gaps discovered:</span>
                  <ul className="space-y-1.5 list-none p-0 m-0">
                    {auditResult.criticalGaps.map((gap: string, ix: number) => (
                      <li key={ix} className="flex gap-2 text-xs text-slate-400">
                        <span className="text-red-500 shrink-0">•</span>
                        <span>{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cyan-950/20 border border-cyan-500/20 p-3 rounded text-xs text-slate-300">
                  <strong className="text-cyan-400 font-mono block mb-1">REUSE ACTION ROADMAP SUGGESTION</strong>
                  {auditResult.actionPlan}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* BLOG PREVIEWS GUIDE SECTION */}
      <section className="bg-slate-950/20 border-t border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Suggested Authority Guidelines & Articles</h2>
            <p className="text-slate-400 mt-2 text-sm">
              Read comprehensive research from our editorial planners on configuring safe backlink building strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "White Hat SEO Authority Strategies", read: "6 min read", desc: "Understanding the PageRank transfer mechanism and anchor-text safety parameters for competitive industries." },
              { title: "Guest Posting outreach Best Practices Guide", read: "9 min read", desc: "How to compose highly effective personalized content pitches that win natural links inside premium tech blogs." },
              { title: "Implementing AI and LLM prospect Research", read: "8 min read", desc: "Leverage advanced custom data vector queries to pinpoint topical-relevant placement hosts efficiently." }
            ].map((art, i) => (
              <div key={i} className="bg-[#030612]/60 border border-slate-900 p-5 rounded-xl hover:border-cyan-500/20 transition flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400 mb-2">
                    <span>GUIDE BOOK</span>
                    <span>{art.read}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">{art.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{art.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900/60 text-right">
                  <button 
                    onClick={openProposalForm}
                    className="text-xs text-slate-300 hover:text-white transition font-mono"
                  >
                    Read Guide →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING STRATEGY FOOTNOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-950">
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-mono">
          <span className="text-slate-400 uppercase">Related services:</span>
          <button onClick={onBackToHome} className="hover:text-cyan-400 transition bg-transparent border-none cursor-pointer">Technical SEO Services</button>
          <span>•</span>
          <button onClick={onBackToHome} className="hover:text-cyan-400 transition bg-transparent border-none cursor-pointer">AI SEO Services</button>
          <span>•</span>
          <button onClick={onBackToHome} className="hover:text-cyan-400 transition bg-transparent border-none cursor-pointer">Guest Posting Sprints</button>
          <span>•</span>
          <button onClick={onBackToHome} className="hover:text-cyan-400 transition bg-transparent border-none cursor-pointer">SaaS Marketing</button>
          <span>•</span>
          <button onClick={onBackToHome} className="hover:text-cyan-400 transition bg-transparent border-none cursor-pointer">Ecommerce SEO</button>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <footer id="link-building-final-cta" className="bg-[#030612] border-t border-slate-900/80 py-24 relative overflow-hidden">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-950/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 relative space-y-8 animate-fade-in">
          <span className="inline-flex items-center gap-1 bg-[#0a183d] text-cyan-400 text-xs px-3.5 py-1.5 rounded-full uppercase font-mono font-bold border border-[#102a6b]">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>AKGLS Elite Authority Growth</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Ready to Hire Link Building Experts for SEO Authority Growth?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Partner with dedicated white hat outreach managers who execute manual prospect strategies cleanly and successfully under perfect safety regulations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={openProposalForm}
              className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-extrabold px-8 py-4 rounded-lg text-sm hover:opacity-95 transition"
            >
              Hire Link Building Expert
            </button>
            <a 
              href="https://wa.me/918318114492"
              target="_blank"
              referrerPolicy="no-referrer"
              className="border border-slate-800 bg-slate-900/40 text-slate-100 hover:text-white px-8 py-4 rounded-lg text-sm hover:border-cyan-500 transition font-medium"
            >
              Book SEO Consultation
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 pt-8 text-xs text-slate-500 font-mono">
            <span>✓ White Hat SEO Specialists</span>
            <span>✓ Authority Link Building Experts</span>
            <span>✓ Transparent SEO Reporting</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

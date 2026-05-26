import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, CheckCircle,
  TrendingUp, Calculator, HelpCircle, Phone, MessageSquare, 
  Layers, Database, Code, Target, Zap, ShieldCheck, Info, Gift, 
  ArrowRightLeft, FileText, Globe, Star, Users, Check, Award, 
  ChevronRight, ArrowDownRight, PhoneCall, CheckSquare, Sparkle,
  MessageCircle, HelpCircle as HelpIcon, Coins
} from 'lucide-react';

interface IndiaPricingPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function IndiaPricingPage({ onBackToHome, openProposalForm }: IndiaPricingPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Local & Organic Growth Task Plans (India Market) | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Sticky Callout visibility state
  const [showStickyCta, setShowStickyCta] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multi-state selectors
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [selectedLanguage, setSelectedLanguage] = useState<'both' | 'english' | 'hindi'>('both');
  const [pricingCategory, setPricingCategory] = useState<'all' | 'seo' | 'ai-seo' | 'ppc' | 'smo' | 'creative' | 'solutions'>('all');
  
  // Custom Plan Builder State
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'standard-seo', 'standard-ppc'
  ]);

  // General ROI Calculator State
  const [trafficInput, setTrafficInput] = useState<number>(10000);
  const [conversionInput, setConversionInput] = useState<number>(2.5); // Percentage
  const [aovInput, setAovInput] = useState<number>(1500); // INR
  const [monthlyAdBudget, setMonthlyAdBudget] = useState<number>(25000);
  
  // FAQ accordion active item
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Proposal lead state
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [proposalLoading, setProposalLoading] = useState(false);
  const [proposalData, setProposalData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'SME',
    customNotes: '',
  });

  // Calculate discount (Quarterly gets 15% off)
  const applyCycle = (min: number, max: number) => {
    const multiplier = billingCycle === 'quarterly' ? 0.85 : 1.0;
    const roundedMin = Math.round((min * multiplier) / 100) * 100;
    const roundedMax = Math.round((max * multiplier) / 100) * 100;
    return `₹${roundedMin.toLocaleString('en-IN')} - ₹${roundedMax.toLocaleString('en-IN')}`;
  };

  const applyCycleSingle = (val: number) => {
    const multiplier = billingCycle === 'quarterly' ? 0.85 : 1.0;
    const rounded = Math.round((val * multiplier) / 100) * 100;
    return `₹${rounded.toLocaleString('en-IN')}`;
  };

  const handleServiceToggle = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Custom Pricing calculations
  const calculateCustomEstimate = () => {
    let minSum = 0;
    let maxSum = 0;

    const servicesMeta: Record<string, { min: number; max: number }> = {
      'basic-seo': { min: 12000, max: 18000 },
      'standard-seo': { min: 25000, max: 45000 },
      'advanced-seo': { min: 60000, max: 150000 },
      'basic-local': { min: 8000, max: 15000 },
      'adv-local': { min: 20000, max: 50000 },
      'starter-ai': { min: 18000, max: 35000 },
      'adv-ai': { min: 50000, max: 120000 },
      'basic-ppc': { min: 10000, max: 18000 },
      'standard-ppc': { min: 25000, max: 50000 },
      'adv-ppc': { min: 60000, max: 200000 },
      'basic-meta': { min: 10000, max: 20000 },
      'adv-meta': { min: 30000, max: 100000 },
      'basic-links': { min: 10000, max: 20000 },
      'premium-links': { min: 35000, max: 150000 },
      'social-basic': { min: 8000, max: 15000 },
      'social-adv': { min: 25000, max: 80000 },
      'wp-basic': { min: 15000, max: 35000 },
      'wp-biz': { min: 50000, max: 150000 },
      'wp-ecom': { min: 80000, max: 500000 },
    };

    selectedServices.forEach(srv => {
      const price = servicesMeta[srv];
      if (price) {
        minSum += price.min;
        maxSum += price.max;
      }
    });

    const discountMulti = billingCycle === 'quarterly' ? 0.85 : 1.0;
    return {
      min: Math.round((minSum * discountMulti) / 500) * 500,
      max: Math.round((maxSum * discountMulti) / 500) * 500,
    };
  };

  const customEstimate = calculateCustomEstimate();

  // ROI calculations
  const totalConversions = Math.round(trafficInput * (conversionInput / 100));
  const expectedMonthlyRevenue = totalConversions * aovInput;
  const netEstimatedLift = expectedMonthlyRevenue - monthlyAdBudget * 1.0; // Subtract general marketing/ad budget
  const estimatedROAS = monthlyAdBudget > 0 ? (expectedMonthlyRevenue / monthlyAdBudget).toFixed(1) : '3.5';

  const handleProposalSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProposalLoading(true);
    setTimeout(() => {
      setProposalLoading(false);
      setProposalSubmitted(true);
    }, 1200);
  };

  // Pricing Categories & Packages
  const categories = [
    { id: 'all', name: 'All Pricing Plans' },
    { id: 'seo', name: 'SEO & Local Rankings' },
    { id: 'ai-seo', name: 'AI SEO, GEO & AEO' },
    { id: 'ppc', name: 'Paid Ads & PPC' },
    { id: 'smo', name: 'SMO & SMM Social' },
    { id: 'creative', name: 'Web Dev & Content Systems' },
    { id: 'solutions', name: 'Dedicated Support' }
  ];

  const standardSEO = [
    {
      name: "BASIC SEO PLAN",
      range: [12000, 18000],
      popular: false,
      bestFor: "Small/Local businesses, Early-Stage Startup websites",
      tasks: [
        "Meta titles & descriptions engineering",
        "Heading tags (H1-H4) alignment",
        "Image alt keywords tags mapping",
        "Semantic clean URL structures",
        "Complete technical health audit overview",
        "Dynamically compiled XML Sitemap indexation",
        "Robots.txt config validation",
        "404 broken link redirection maps",
        "2 Fresh High-Quality SEO articles/month",
        "10-15 Local directory citations/month",
        "Basic monthly rank & visibility report"
      ]
    },
    {
      name: "STANDARD SEO PLAN",
      range: [25000, 45000],
      popular: true,
      bestFor: "Growing businesses, Scaled Ecommerce, SaaS startups",
      tasks: [
        "Complete structural SEO map & competitor analysis",
        "Core Web Vitals acceleration strategy",
        "Inhouse Topic Clustering architecture",
        "JSON-LD LocalBusiness & Product schemas",
        "Internal logical linking matrix setups",
        "4-8 Semantic rich cluster blogs/month",
        "30-50 Contextual outreach authority links/month",
        "Guest post outreach pipeline execution",
        "GA4 custom metrics & GSC tag integrations",
        "Competitor keyword gap tracking charts",
        "Bi-weekly brief review calls"
      ]
    },
    {
      name: "ADVANCED SEO PLAN",
      range: [60000, 150000],
      popular: false,
      bestFor: "Scalable Enterprises, High-competition brands, National sites",
      tasks: [
        "Full Enterprise rank management matrix",
        "Generative Engine SEO & LLM grounding tags",
        "Perplexity & ChatGPT Search citation strategy",
        "Programmatic indexing structures for thousands of pages",
        "12-20 Professional research-grade content assets",
        "Tier-1 digital PR & high authority backlinks",
        "HARO outreach & strategic niche interviews",
        "In-depth CRO & layout funnel suggestions",
        "Full website speed debugging & setup assistance",
        "Dedicated SEO account architect & manager",
        "Weekly performance syncing & progress meetings"
      ]
    }
  ];

  const localSEOPackages = [
    {
      name: "BASIC LOCAL SEO",
      range: [8000, 15000],
      tasks: [
        "Google Business Profile optimization",
        "Consistent NAP citation alignment",
        "Localized keyword research map",
        "Google Maps geotagged photos updates",
        "Review harvesting dashboard guidelines",
        "15+ active local directory submissions/mo"
      ]
    },
    {
      name: "ADVANCED LOCAL SEO",
      range: [20000, 50000],
      tasks: [
        "Multi-location profile hierarchy",
        "Local Map pack dominate checklist",
        "Hyperlocal content landing setups",
        "High-influence local link building",
        "DNI call tracking & lead monitoring",
        "Competitor map spam deletion outreach"
      ]
    }
  ];

  const aiSEOPackages = [
    {
      name: "STARTER AI-SEO & AEO PLAN",
      range: [18000, 35000],
      bestFor: "Early-stage blogs and startups targeting Generative AI visibility",
      tasks: [
        "SGE & LLM indexing readiness audit",
        "Conversational search term gap mapping",
        "High-priority FAQ pattern optimizations",
        "Featured Snippet & Speakable Schema injection",
        "Semantic JSON-LD structure validations",
        "ChatGPT Search & Gemini active source pinging",
        "Direct citation & reference mapping guides",
        "Basic generative visibility benchmarking report"
      ]
    },
    {
      name: "GROWTH GEO & AIO PIPELINE",
      range: [40000, 75000],
      popular: true,
      bestFor: "SaaS companies, detailed publishers, and fast-growing brands",
      tasks: [
        "Entity Clustering & nested schemas injection",
        "AI Overviews (AIO) prompt trigger analyses",
        "Generative Engine Optimization (GEO) source ranking",
        "Perplexity citation & link insertion outreach",
        "LLM training-data footprint sentiment checker",
        "Semantic graph & web-entity association mapping",
        "10+ Expert answers crafted for direct AI citation",
        "Bi-weekly AI Search engine Share-of-Voice metrics"
      ]
    },
    {
      name: "ENTERPRISE COGNITIVE DOMINANCE",
      range: [90000, 200000],
      bestFor: "Enterprise accounts & established brands looking to lead AI Search",
      tasks: [
        "Full crawler compliance setup for Apple, OpenAI & Anthropic Bots",
        "Custom knowledge graph integration & entity seeding",
        "Continuous automated AIO & SGE response tracker dashboard",
        "Direct brand narrative seeding (Quora & Reddit semantic feeds)",
        "Zero-click search capture & conversational schema pipeline",
        "Complex programmatic semantic page templating",
        "Deep competitor Generative Engine displacement audits",
        "Dedicated AI SEO Account Architect & Weekly syncs"
      ]
    }
  ];

  const smoPackages = [
    {
      name: "STARTER SMO HERO",
      range: [8000, 15000],
      bestFor: "Early pages and active local profiles seeking a polished social presence",
      tasks: [
        "Multi-platform visual template override toolkit",
        "Social profile bios & search tags mapping (SMO setup)",
        "12 custom high-design grid posts per month",
        "Hashtag matrix & conversational descriptions creation",
        "Automated cross-posting setup (Instagram / Facebook / X)",
        "Standard monthly posting frequency & reach insight metrics"
      ]
    },
    {
      name: "ACTIVE VIRAL SMO & REELS",
      range: [20000, 45000],
      popular: true,
      bestFor: "SMEs & personal brands targeting rapid audience outreach",
      tasks: [
        "Competitor social share-of-voice tracking",
        "Social search intent maps (Instagram, TikTok & YouTube search optimization)",
        "20 customized high-concept creative assets/month",
        "8 highly-polished short-form Reels / Shorts scripted & edited",
        "Complete direct calendar scheduling & automated queues",
        "Interactive story series formats & lead sticker maps",
        "Bi-weekly performance consultation & tactical adjustments"
      ]
    },
    {
      name: "ENTERPRISE OMNICHANNEL SMO",
      range: [55000, 120000],
      bestFor: "Established brands and institutions looking to lead viral metrics and syndication",
      tasks: [
        "Full-funnel social branding & multi-channel strategy playbook",
        "40+ premium custom graphics, carousels & video snippets/month",
        "15 high-converting Reels/Video designs with custom scripting",
        "Professional CEO / Leadership authority content (LinkedIn & Medium grids)",
        "Influencer synergy & outreach coordination guides",
        "Active platform monitoring, response sequences & comment triggers",
        "Advanced social pipeline integration & tracking dashboards"
      ]
    }
  ];

  const googleAds = [
    {
      name: "BASIC PPC PLAN",
      range: [10000, 18000],
      notes: "Ad budget separate",
      tasks: [
        "Search campaign structure design",
        "Keyword research & negative maps setup",
        "High-CTR ad copy versions crafting",
        "Conversion tracking setup validation",
        "Weekly negative match bid tuning"
      ]
    },
    {
      name: "STANDARD PPC PLAN",
      range: [25000, 50000],
      notes: "Ad budget separate",
      tasks: [
        "Search + Display performance mixes",
        "Dynamic custom audience remarketing",
        "Landing page UX copy guidance",
        "Ad extensions & asset libraries cleanup",
        "Competitor ad copy auction tracking",
        "Weekly campaign optimization routines"
      ]
    },
    {
      name: "ADVANCED PPC PLAN",
      range: [60000, 200000],
      notes: "Ad budget separate",
      tasks: [
        "Performance Max hyper-tuning setups",
        "Merchant center Google Shopping configurations",
        "AI Smart bidding data feeding",
        "Multi-funnel conversion optimization",
        "Robust script integration & performance dashboards",
        "Full-funnel Google Ads analytics tracking"
      ]
    }
  ];

  const metaAds = [
    {
      name: "BASIC META ADS",
      range: [10000, 20000],
      tasks: [
        "Facebook & Instagram pixel configuration",
        "Core saved & custom behavior targeting",
        "Static ad graphics layout design support",
        "Standard instant lead forms management",
        "A/B placement delivery optimization"
      ]
    },
    {
      name: "ADVANCED META ADS",
      range: [30000, 100000],
      tasks: [
        "Dynamic catalog product ads matrix",
        "CBO/ABO scaling framework optimization",
        "Custom lookalike custom seed audiences",
        "Conversion API (CAPI) backend logging",
        "Immersive reel style video story setups",
        "Post-click retargeting sequences setup"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden relative">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-[#091b26]/30 via-[#020614]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-indigo-950/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-15%] w-[600px] h-[600px] bg-cyan-950/25 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation Breadcrumb / Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 hover:text-white transition"
        >
          <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back to Growth Desk
        </button>

        <div className="mt-8 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-800/60 text-[11px] uppercase tracking-wider text-cyan-400 font-semibold">
            <Coins className="w-3.5 h-3.5" /> India-Specific Suggested Standard Frameworks
          </span>
          <h1 className="mt-4 text-3.5xl sm:text-5xl lg:text-5.5xl font-black font-display tracking-tight text-white leading-tight">
            Transparent Pricing Models <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-300 to-purple-400">for Indian Growth Climbs</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-md font-light leading-relaxed">
            Scalable, task-focused pricing plans engineered for Indian startups, SMEs, local brands, E-commerce, and high-growth national firms. Flexible billing terms optimized with complete task catalogs and expert roadmaps.
          </p>

          {/* Quick GST & EMI Badges info */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800/60">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400" /> GST Invoice Support (+18% GST Applicable)
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800/60">
              <Clock className="w-3.5 h-3.5 text-indigo-400" /> Flexible EMI & Milestone Payment Options Available
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800/60">
              <Bot className="w-3.5 h-3.5 text-purple-400" /> Dual Hindi & English Dedicated Account Manager
            </span>
          </div>

          {/* Billing cycle & Communication state Toggles */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950/80 border border-slate-900 p-4 rounded-2xl max-w-2xl mx-auto">
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest text-center sm:text-left mb-1.5 font-bold">Billing Retainer Cycle</p>
              <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${billingCycle === 'monthly' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' : 'text-slate-400 hover:text-white'}`}
                >
                  Monthly Retainer
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('quarterly')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition flex items-center gap-1 ${billingCycle === 'quarterly' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' : 'text-slate-400 hover:text-white'}`}
                >
                  Quarterly <span className="text-[9px] bg-teal-950 text-teal-400 px-1.5 py-0.5 rounded-full font-black font-mono">15% OFF</span>
                </button>
              </div>
            </div>

            <div className="w-[1px] h-10 bg-slate-800 hidden sm:block" />

            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest text-center sm:text-left mb-1.5 font-bold">Preferred Communication Language</p>
              <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedLanguage('both')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${selectedLanguage === 'both' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800/60' : 'text-slate-400 hover:text-white'}`}
                >
                  Mix (Hinglish)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage('english')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${selectedLanguage === 'english' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800/60' : 'text-slate-400 hover:text-white'}`}
                >
                  English Only
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage('hindi')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${selectedLanguage === 'hindi' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800/60' : 'text-slate-400 hover:text-white'}`}
                >
                  pure हिन्दी
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Jumper Filters Navigation bar */}
      <div className="sticky top-[73px] z-30 bg-[#02040d]/90 backdrop-blur-md border-y border-slate-900 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setPricingCategory(cat.id as any)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-semibold rounded-lg transition border ${
                  pricingCategory === cat.id 
                    ? 'bg-slate-900 border-indigo-500 text-indigo-300 shadow-sm' 
                    : 'bg-slate-950/40 border-slate-800/50 text-slate-400 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section Content mapping */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-24">

        {/* 1. SECTION: SEO & ORGANIC SERVICES */}
        {(pricingCategory === 'all' || pricingCategory === 'seo') && (
          <div className="space-y-12">
            
            {/* Header Block */}
            <div className="border-l-2 border-teal-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Organic Traffic & Conversion Acceleration
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Strategic organic keyword positioning, site authority flow tuning, local directory map coverage, and generative engine visibility schemes.
              </p>
            </div>

            {/* Standard SEO Plans 3-Card structure */}
            <div>
              <div className="text-center sm:text-left mb-6">
                <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider">Plan Collection 01 / Primary SEO</span>
                <h3 className="text-xl font-bold text-white mt-1">SEO Retainer Packages</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {standardSEO.map((plan, idx) => (
                  <div 
                    key={idx}
                    className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-slate-900/40 border-indigo-500/80 shadow-[0_10px_40px_rgba(99,102,241,0.08)] scale-100' 
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-mono text-[9px] font-black uppercase py-1 px-3 rounded-full flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" /> Most Recommended
                      </span>
                    )}

                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Standard SEO Matrix</span>
                      <h4 className="text-lg font-black text-white mt-1">{plan.name}</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed min-h-[40px] font-medium">{plan.bestFor}</p>

                      <div className="mt-4 pb-4 border-b border-slate-900">
                        <p className="text-3xl font-black text-white">{applyCycle(plan.range[0], plan.range[1])}</p>
                        <p className="text-slate-500 text-[10px] mt-1 font-medium select-none">/ Monthly suggested retainer ({billingCycle === 'quarterly' ? 'Quarterly discount applied' : 'Regular Plan billing'})</p>
                      </div>

                      <div className="mt-5 space-y-2.5">
                        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Deliverables & Tasks Include:</p>
                        <ul className="space-y-2">
                          {plan.tasks.map((task, k) => (
                            <li key={k} className="flex items-start gap-2 text-xs text-slate-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                              <span className="leading-normal">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-900">
                      <button 
                        onClick={() => {
                          const el = document.getElementById('india-proposal-portal');
                          el?.scrollIntoView({ behavior: 'smooth' });
                          setProposalData(prev => ({ ...prev, customNotes: `Interested in standard SEO package: ${plan.name}` }))
                        }}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                          plan.popular 
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white' 
                            : 'bg-slate-900 hover:bg-slate-800 text-indigo-300'
                        }`}
                      >
                        Select {plan.name.split(' ')[0]} Framework <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local SEO Block */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-900">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-teal-950/60 text-teal-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-teal-400 font-mono uppercase font-bold tracking-widest">Plan Collection 02</span>
                    <h3 className="text-lg font-bold text-white">Local Maps SEO Frameworks</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-xs max-w-md">
                  Dominate Google Map pack search metrics, eliminate map spam competitors, and optimize multi-location target structures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {localSEOPackages.map((p, i) => (
                  <div key={i} className="bg-slate-900/40 rounded-xl p-5 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">{p.name}</h4>
                      <p className="text-xl font-black text-cyan-300 mt-2">{applyCycle(p.range[0], p.range[1])}</p>
                      <p className="text-[10px] text-slate-500 font-medium">Suggested / Month (Retainer mode)</p>

                      <ul className="mt-4 space-y-2">
                        {p.tasks.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-400">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in local SEO package: ${p.name}` }));
                      }}
                      className="w-full mt-6 py-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-800/80 transition"
                    >
                      Configure {p.name.split(' ')[0]} Maps Setup
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI SEO & GEO Section Callout banner */}
            <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/10 to-slate-950 rounded-2xl border border-indigo-950 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_32px_rgba(99,102,241,0.04)]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-900/40 text-indigo-300 animate-pulse">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Targeting LLMs, ChatGPT Search, Gemini & AI Answers?</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl">Explore our dedicated, transparently structured 3-tier AEO, GEO & AI SEO optimization plans specifically compiled for zero-click environments.</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setPricingCategory('ai-seo');
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-lg transition shrink-0"
              >
                View Dedicated AI SEO & GEO Plans
              </button>
            </div>

          </div>
        )}

        {/* 1.5. SECTION: AI SEO, GEO, AEO & AIO INTEGRATED PLATFORMS */}
        {(pricingCategory === 'all' || pricingCategory === 'ai-seo') && (
          <div className="space-y-12">
            
            {/* Header Block */}
            <div className="border-l-2 border-indigo-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display animate-fade-in">
                Generative AI Search Visibility & LLM Grounding (AEO, GEO, AIO)
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Optimizing your digital footprint so search bots, LLMs, and answers engines structure your narrative. Dominate Google AI Overviews (AIO), ChatGPT, Claude, Gemini, and Perplexity metrics.
              </p>
            </div>

            {/* Quick Education Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950/60 p-5 rounded-2xl border border-slate-900">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-400 font-bold text-[10px] font-mono">AEO</span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Answer Engine Optimization</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Structuring entity schemas, question graphs, and short conversational replies so search AI models pull your brand directly for chatbot dialogue.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-400 font-bold text-[10px] font-mono">GEO</span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Generative Engine Optimization</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Adjusting page design density and entity linkages using nested JSON-LD structures to boost credibility mapping in OpenAI, Gemini, and Claude training layers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 font-bold text-[10px] font-mono">AIO</span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI Overviews (SGE) Inbound</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Targeting AI snippet slots and conversational cards on Google search results pages, ensuring your links remain the primary cited destinations.
                </p>
              </div>
            </div>

            {/* AI-SEO 3 Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
              {aiSEOPackages.map((p, i) => (
                <div 
                  key={i} 
                  className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                    p.popular 
                      ? 'bg-slate-900/40 border-purple-500/80 shadow-[0_10px_40px_rgba(147,51,234,0.08)] scale-100' 
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-705'
                  }`}
                >
                  {p.popular && (
                    <span className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-mono text-[9px] font-black uppercase py-1 px-3 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3 text-cyan-300" /> Advanced AI Power
                    </span>
                  )}

                  <div>
                    <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold font-mono">Cognitive SEO Core</span>
                    <h4 className="text-md font-black text-white mt-1 uppercase">{p.name}</h4>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed min-h-[40px] font-medium">{p.bestFor}</p>

                    <div className="mt-4 pb-4 border-b border-slate-900">
                      <p className="text-2xl sm:text-3xl font-black text-white">{applyCycle(p.range[0], p.range[1])}</p>
                      <p className="text-slate-500 text-[10px] mt-1 font-medium select-none">/ Monthly suggested retainer ({billingCycle === 'quarterly' ? 'Quarterly discount applied' : 'Regular billing'})</p>
                    </div>

                    <div className="mt-5 space-y-2.5">
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Cognitive Scope Includes:</p>
                      <ul className="space-y-2">
                        {p.tasks.map((task, k) => (
                          <li key={k} className="flex items-start gap-2 text-xs text-slate-400 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                            <span className="leading-normal">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-900">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in AI SEO/GEO package: ${p.name}` }));
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                        p.popular 
                          ? 'bg-purple-600 hover:bg-purple-550 text-white shadow-lg' 
                          : 'bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-slate-800/80'
                      }`}
                    >
                      Configure {p.name.split(' ')[0]} Frame <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* 2. SECTION: PPC & PAID AD CHANNELS */}
        {(pricingCategory === 'all' || pricingCategory === 'ppc') && (
          <div className="space-y-12">
            
            <div className="border-l-2 border-indigo-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Engineered Performance Campaigns & Ads Management
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Conversion-driven setups, dynamic remarketing catalogs, AI-powered bidding matrices, and multi-funnel analytics.
              </p>
            </div>

            {/* Google Ads Plans Grid */}
            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-indigo-400 font-mono text-[10px] uppercase font-bold tracking-wider">Plan Collection 04 / Google Search & Shopping</span>
                <h3 className="text-xl font-bold text-white mt-1">Google Ads Retainers</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {googleAds.map((plan, idx) => (
                  <div key={idx} className="bg-slate-950/80 rounded-2xl p-6 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Search, Display & shopping</span>
                      <h4 className="text-md font-bold text-white mt-1">{plan.name}</h4>
                      <p className="text-xs text-indigo-400 font-semibold mt-1 font-mono">({plan.notes})</p>

                      <p className="text-2xl font-black text-white mt-4">{applyCycle(plan.range[0], plan.range[1])}</p>
                      <p className="text-slate-500 text-[9px]">/ Month ad engine retainer fee</p>

                      <ul className="mt-5 space-y-2.5">
                        {plan.tasks.map((task, k) => (
                          <li key={k} className="flex items-start gap-1.5 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in G-Ads package: ${plan.name}` }))
                      }}
                      className="w-full mt-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-indigo-300 text-xs font-bold transition"
                    >
                      Get Quote for G-Ads
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta Ads & Outbound Outreach link building sub-grids */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Meta Ads Block */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-900 text-[#1877F2]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-widest">Plan Collection 05</span>
                    <h3 className="text-lg font-bold text-white">Meta Ads Sourcing Tiers</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {metaAds.map((p, i) => (
                    <div key={i} className="bg-slate-900/40 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-wider">{p.name}</h4>
                        <p className="text-xl font-black text-indigo-300 mt-2">{applyCycle(p.range[0], p.range[1])}</p>
                        <p className="text-[10px] text-slate-500">Suggested / Month</p>

                        <ul className="mt-4 space-y-2">
                          {p.tasks.map((t, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-400">
                              <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        onClick={() => {
                          const el = document.getElementById('india-proposal-portal');
                          el?.scrollIntoView({ behavior: 'smooth' });
                          setProposalData(prev => ({ ...prev, customNotes: `Interested in Meta Ads package: ${p.name}` }))
                        }}
                        className="w-full mt-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-800/80 transition"
                      >
                        Launch Meta Ads Setup
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backlinks Link Building Block */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-900 text-emerald-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-widest">Plan Collection 06</span>
                    <h3 className="text-lg font-bold text-white">Authority Link Building Outreach</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">BASIC LINK BUILDING</h4>
                      <p className="text-xl font-black text-teal-300 mt-2">{applyCycle(10000, 20000)}</p>
                      <p className="text-[10px] text-slate-500">Suggested Budget / Month</p>

                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> 10–20 outreach backlinks</li>
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> Local Directory submissions</li>
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> Web 2.0 & Profile links pack</li>
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> Social bookmarking signals</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Basic Link Building package` }))
                      }}
                      className="w-full mt-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-800/80 transition"
                    >
                      Configure Links
                    </button>
                  </div>

                  <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">PREMIUM LINK BUILDING</h4>
                      <p className="text-xl font-black text-teal-300 mt-2">{applyCycle(35000, 150000)}</p>
                      <p className="text-[10px] text-slate-500">Suggested Budget / Month</p>

                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> High Authority manual Guest Posts</li>
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> Premium Niche Contextual Edits</li>
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> High DA 50+ Outreach targets</li>
                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><Check className="w-3.5 h-3.5 text-teal-400" /> Digital PR & HARO queries feedback</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Premium Link Building package` }))
                      }}
                      className="w-full mt-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-800/80 transition"
                    >
                      Book Link Campaign
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2.5. SECTION: SMO (SOCIAL MEDIA OPTIMIZATION) */}
        {(pricingCategory === 'all' || pricingCategory === 'smo') && (
          <div className="space-y-12">
            
            {/* Header Block */}
            <div className="border-l-2 border-pink-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Social Media Optimization (SMO) & Organic Brand Growth
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Optimizing social signals, keyword optimization on social search indexes (Instagram/YouTube/TikTok SEO), visual template override suites, and dynamic video sequencing for high viral reach.
              </p>
            </div>

            {/* SMO 3-Card layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
              {smoPackages.map((p, i) => (
                <div 
                  key={i} 
                  className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                    p.popular 
                      ? 'bg-slate-900/40 border-pink-500/80 shadow-[0_10px_40px_rgba(244,63,94,0.06)] scale-100' 
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-705'
                  }`}
                >
                  {p.popular && (
                    <span className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-mono text-[9px] font-black uppercase py-1 px-3 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3 text-pink-200" /> High Velocity SMM
                    </span>
                  )}

                  <div>
                    <span className="text-[10px] text-pink-400 uppercase tracking-widest font-bold font-mono">Profile & Reach SMO</span>
                    <h4 className="text-md font-black text-white mt-1 uppercase">{p.name}</h4>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed min-h-[40px] font-medium">{p.bestFor}</p>

                    <div className="mt-4 pb-4 border-b border-slate-900">
                      <p className="text-2xl sm:text-3xl font-black text-white">{applyCycle(p.range[0], p.range[1])}</p>
                      <p className="text-slate-500 text-[10px] mt-1 font-medium select-none">/ Monthly suggested retainer ({billingCycle === 'quarterly' ? 'Quarterly discount applied' : 'Regular billing'})</p>
                    </div>

                    <div className="mt-5 space-y-2.5">
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Deliverables Include:</p>
                      <ul className="space-y-2">
                        {p.tasks.map((task, k) => (
                          <li key={k} className="flex items-start gap-2 text-xs text-slate-400 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 mt-0.5 shrink-0" />
                            <span className="leading-normal">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-900">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in SMO package: ${p.name}` }));
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                        p.popular 
                          ? 'bg-pink-600 hover:bg-pink-550 text-white shadow-lg' 
                          : 'bg-slate-900 hover:bg-slate-800 text-pink-300 border border-slate-800/80'
                      }`}
                    >
                      Configure {p.name.split(' ')[1]} Setup <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* 3. SECTION: CREATIVE, WEB DEV & SOCIALS */}
        {(pricingCategory === 'all' || pricingCategory === 'creative') && (
          <div className="space-y-12">
            
            <div className="border-l-2 border-purple-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Creative Engineering & Web Systems
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Optimized WordPress stacks, high-converting semantic design pages, copy writing, and social media scheduling grids.
              </p>
            </div>

            {/* Grid structure for dev & content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* WordPress Development 3 Tiers card */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-5 lg:col-span-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-900 text-indigo-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-widest">Plan Collection 07</span>
                    <h3 className="text-lg font-bold text-white">WordPress Development (One-time Projects)</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                  <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="text-xs font-black text-rose-300 uppercase tracking-widest">BASIC WEBSITE</h4>
                      <p className="text-xl font-bold text-white mt-2">₹15,000 – ₹35,000</p>
                      <p className="text-[10px] text-slate-500 leading-none">One-time flat rate</p>
                      <ul className="mt-4 space-y-1.5 text-[11px] text-slate-400">
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-rose-400 shrink-0" /> 5–10 responsive pages</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-rose-400 shrink-0" /> Elementor setup guide</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-rose-400 shrink-0" /> Basic diagnostic speed config</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-rose-400 shrink-0" /> Lead tracking plugin set</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Basic WordPress Development (₹15K-35K)` }))
                      }}
                      className="w-full mt-4 py-2 bg-slate-950 hover:bg-slate-900 text-[10px] text-slate-300 font-bold border border-slate-800 rounded-lg transition"
                    >
                      Inquire Basic Web
                    </button>
                  </div>

                  <div className="bg-slate-900/40 rounded-xl p-4 border border-indigo-500/50 flex flex-col justify-between h-full relative">
                    <span className="absolute top-0 right-4 -translate-y-1/2 bg-indigo-600 text-[8px] font-bold text-white uppercase px-1.5 py-0.5 rounded-full">POPULAR</span>
                    <div>
                      <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest">BUSINESS WEBSITE</h4>
                      <p className="text-xl font-bold text-white mt-2">₹50,000 – ₹1,50,000</p>
                      <p className="text-[10px] text-slate-500 leading-none">One-time flat rate</p>
                      <ul className="mt-4 space-y-1.5 text-[11px] text-slate-400">
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-400 shrink-0" /> Custom wireframed layouts</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-400 shrink-0" /> Local schema + SEO tags</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-400 shrink-0" /> Advanced speed tuning</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-400 shrink-0" /> Contact forms & maps set</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Business WordPress Developer framework (₹50K-1.5L)` }))
                      }}
                      className="w-full mt-4 py-2 bg-slate-950 hover:bg-slate-900 text-[10px] text-slate-300 font-bold border border-slate-800 rounded-lg transition"
                    >
                      Configure Business Web
                    </button>
                  </div>

                  <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="text-xs font-black text-purple-300 uppercase tracking-widest">ECOMMERCE STORE</h4>
                      <p className="text-xl font-bold text-white mt-2">₹80,000 – ₹5,00,000+</p>
                      <p className="text-[10px] text-slate-500 leading-none">One-time flat rate</p>
                      <ul className="mt-4 space-y-1.5 text-[11px] text-slate-400">
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-purple-400 shrink-0" /> WooCommerce engine setups</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-purple-400 shrink-0" /> Indian payment gateway sync</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-purple-400 shrink-0" /> Bulk products imports set</li>
                        <li className="flex items-center gap-1"><Check className="w-3 h-3 text-purple-400 shrink-0" /> Comprehensive CRO layouts</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in ECommerce WordPress Developer framework (₹80K-5L)` }))
                      }}
                      className="w-full mt-4 py-2 bg-slate-950 hover:bg-slate-900 text-[10px] text-slate-300 font-bold border border-slate-800 rounded-lg transition"
                    >
                      Configure ECom Web
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Writing Block */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-900 text-teal-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-widest">Plan Collection 08</span>
                      <h3 className="text-sm font-bold text-white">SEO Semantic Content Scribing</h3>
                    </div>
                  </div>

                  <div className="space-y-4 pt-3">
                    <div className="pb-3 border-b border-slate-900">
                      <h4 className="text-[11px] font-bold text-slate-300">BLOG WRITING (Basic / Article)</h4>
                      <p className="text-md font-bold text-white mt-1">₹800 – ₹2,500 <span className="text-[9px] text-slate-500">/ Post</span></p>
                      <p className="text-[10px] text-slate-400 leading-relaxed mt-1">800–1500 words copy, clean search keyword integration, proper SEO layout structure.</p>
                    </div>

                    <div className="pb-3 border-b border-slate-900">
                      <h4 className="text-[11px] font-bold text-slate-300">PREMIUM ANALYTICAL BLOG (Premium / Article)</h4>
                      <p className="text-md font-bold text-indigo-300 mt-1">₹3,000 – ₹10,000 <span className="text-[9px] text-slate-500">/ Post</span></p>
                      <p className="text-[10px] text-slate-400 leading-relaxed mt-1">Deeply researched authoritative topics, semantic graphs setup, LLM / GEO optimization blocks.</p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-slate-300">WEBSITE CONTENT & CTA PLANS</h4>
                      <p className="text-md font-bold text-teal-300 mt-1">₹15,000 – ₹1,00,000+</p>
                      <p className="text-[10px] text-slate-400 leading-relaxed mt-1">Includes copy for primary landing, homepage, or dynamic customized user experience matrices.</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('india-proposal-portal');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    setProposalData(prev => ({ ...prev, customNotes: `Interested in SEO Content Writing services` }))
                  }}
                  className="w-full mt-4 py-2 bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 font-bold border border-slate-850 rounded-lg transition"
                >
                  Request Content Quote
                </button>
              </div>

            </div>

            {/* Social Media & Single Page audit sub-grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Social Media Management Card */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-900 text-purple-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-widest">Plan Collection 09</span>
                    <h3 className="text-lg font-bold text-white">Social Media Management (SMM)</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">BASIC SOCIAL SMM</h4>
                      <p className="text-lg font-black text-indigo-300 mt-1">{applyCycle(8000, 15000)}</p>
                      <p className="text-[10px] text-slate-500">Suggested / Month</p>
                      <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                        <li>• 12 Posts/month scheduled grid</li>
                        <li>• Custom visual overlay templates</li>
                        <li>• Hashtag mapping & captions copy</li>
                        <li>• Standard monthly posting insights</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Basic Social SMM (₹8K-15K)` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-slate-950 text-[10px] text-slate-400 border border-slate-850 hover:text-white rounded transition"
                    >
                      Inquire Basic SMM
                    </button>
                  </div>

                  <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">ADVANCED BRAND SMM</h4>
                      <p className="text-lg font-black text-indigo-300 mt-1">{applyCycle(25000, 80000)}</p>
                      <p className="text-[10px] text-slate-500">Suggested / Month</p>
                      <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                        <li>• Multi-platform reel visual strategies</li>
                        <li>• Moderate community chat setups</li>
                        <li>• Ad channel alignment assistance</li>
                        <li>• Influencer outreach mapping template</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Advanced Brand SMM (₹25k-80K)` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-indigo-950/30 text-[11px] text-indigo-300 border border-indigo-900/40 hover:bg-indigo-900/40 rounded transition"
                    >
                      Configure Premium SMM
                    </button>
                  </div>
                </div>
              </div>

              {/* Landing Page Design Card */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-900 text-cyan-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-widest">Plan Collection 10</span>
                    <h3 className="text-lg font-bold text-white">Landing Page Design (CRO Tuned)</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">BASIC LANDING PAGE</h4>
                      <p className="text-lg font-black text-teal-300 mt-1">₹8,000 – ₹20,000</p>
                      <p className="text-[10px] text-slate-500">One-time payment</p>
                      <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                        <li>• Responsive single conversion-view</li>
                        <li>• Call-to-action optimization elements</li>
                        <li>• Lead capture forms configured</li>
                        <li>• Basic domain linking integration</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Basic Landing Page setup` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-slate-950 text-[10px] text-slate-400 border border-slate-850 hover:text-white rounded transition"
                    >
                      Inquire Basic LP
                    </button>
                  </div>

                  <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">HIGH-CONVERTING CUSTOM VIEW</h4>
                      <p className="text-lg font-black text-teal-300 mt-1">₹25,000 – ₹1,00,000+</p>
                      <p className="text-[10px] text-slate-500">One-time payment</p>
                      <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                        <li>• custom micro-interaction widgets</li>
                        <li>• full analytics mapping & tracking metrics</li>
                        <li>• AI automated chat routing setups</li>
                        <li>• Comprehensive copy edits included</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in High-Converting Custom Landing Page` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-indigo-950/35 text-[11px] text-indigo-300 border border-indigo-900/40 hover:bg-indigo-900/45 rounded transition"
                    >
                      Build Custom LP
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* 4. SECTION: DEDICATED CONSULTANTS & SPECIALIST MODULES */}
        {(pricingCategory === 'all' || pricingCategory === 'solutions') && (
          <div className="space-y-12">
            
            <div className="border-l-2 border-emerald-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Dedicated Vertical Packages & Growth Roadmaps
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Deep vertical-oriented SaaS blueprints, high-velocity B2B lead generation funnels, scale-ready ECommerce engines, and dedicated marketing resource leasing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* ECommerce Marketing Pack */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 flex flex-col justify-between hover:border-slate-850 transition">
                <div>
                  <div className="flex items-center gap-2 pb-4 border-b border-slate-900">
                    <span className="p-2 rounded bg-indigo-950/50 text-indigo-400"><TrendingUp className="w-4 h-4" /></span>
                    <h3 className="text-md font-bold text-white">Ecommerce Marketing Tiers</h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-300">STARTER ECOMMERCE</h4>
                      <p className="text-lg font-black text-rose-300 mt-1">{applyCycle(30000, 60000)} / Month</p>
                      <p className="text-[11px] text-slate-400 mt-1">Includes primary SEO, simple Meta ads campaign, product descriptions rewrite, and checkout flow suggestions.</p>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-300">ADVANCED ECOMMERCE CLIMB</h4>
                      <p className="text-lg font-black text-rose-300 mt-1">{applyCycle(80000, 300000)} / Month</p>
                      <p className="text-[11px] text-slate-400 mt-1">Full multichannel scale: Google Smart Shopping, complex retargeting, automated email capture flows, and checkout speed patches.</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('india-proposal-portal');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    setProposalData(prev => ({ ...prev, customNotes: `Interested in Ecommerce growth plans` }))
                  }}
                  className="w-full mt-6 py-2 bg-slate-900 text-xs text-indigo-300 font-bold border border-slate-850 rounded hover:bg-slate-800 transition"
                >
                  Configure Commerce Growth
                </button>
              </div>

              {/* SaaS Growth Pack */}
              <div className="bg-slate-950/80 rounded-2xl border border-indigo-900/40 p-6 flex flex-col justify-between hover:border-indigo-800/60 transition shadow-[0_4px_12px_rgba(99,102,241,0.03)] relative">
                <span className="absolute top-0 right-4 -translate-y-1/2 bg-indigo-600 text-white text-[8px] font-bold py-0.5 px-2 rounded-full font-mono uppercase">RECOMMENDED SaaS</span>
                <div>
                  <div className="flex items-center gap-2 pb-4 border-b border-slate-900">
                    <span className="p-2 rounded bg-indigo-950/50 text-indigo-400"><Globe className="w-4 h-4" /></span>
                    <h3 className="text-md font-bold text-white">SaaS Growth Marketing</h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-300">STARTER SaaS</h4>
                      <p className="text-lg font-black text-indigo-300 mt-1">{applyCycle(40000, 80000)} / Month</p>
                      <p className="text-[11px] text-slate-400 mt-1">Includes primary SaaS key phrases research, high-intent product feature schema tags, and LinkedIn tracking pixel set.</p>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-300">ADVANCED SaaS</h4>
                      <p className="text-lg font-black text-indigo-300 mt-1">{applyCycle(100000, 500000)} / Month</p>
                      <p className="text-[11px] text-slate-400 mt-1">Product-Led-Growth setups, programmatic landing strategies, automated attribution reports, and custom CRM dashboard integrations.</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('india-proposal-portal');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    setProposalData(prev => ({ ...prev, customNotes: `Interested in SaaS growth plans` }))
                  }}
                  className="w-full mt-6 py-2 bg-indigo-600 hover:bg-indigo-550 text-xs text-white font-bold rounded transition"
                >
                  Configure SaaS Climb
                </button>
              </div>

              {/* B2B Lead Gen Pack */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 flex flex-col justify-between hover:border-slate-850 transition">
                <div>
                  <div className="flex items-center gap-2 pb-4 border-b border-slate-900">
                    <span className="p-2 rounded bg-indigo-950/50 text-indigo-400"><Target className="w-4 h-4" /></span>
                    <h3 className="text-md font-bold text-white">B2B Lead Generation</h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-300">BASIC LEAD GENERATION</h4>
                      <p className="text-lg font-black text-teal-300 mt-1">{applyCycle(20000, 50000)} / Month</p>
                      <p className="text-[11px] text-slate-400 mt-1">Linked outreach templates, custom sales landing layout assistance, manual cold email sequence setups.</p>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-300">ADVANCED LEAD ENGINE</h4>
                      <p className="text-lg font-black text-teal-300 mt-1">{applyCycle(80000, 300000)} / Month</p>
                      <p className="text-[11px] text-slate-400 mt-1">Account-Based Marketing pipelines, automated lead scoring rules, advanced CRM triggers, and PPC campaign support.</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('india-proposal-portal');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    setProposalData(prev => ({ ...prev, customNotes: `Interested in B2B Lead Gen plans` }))
                  }}
                  className="w-full mt-6 py-2 bg-slate-900 text-xs text-indigo-300 font-bold border border-slate-850 rounded hover:bg-slate-800 transition"
                >
                  Configure B2B Engine
                </button>
              </div>

            </div>

            {/* Dedicated Marketing manager & SEO Audits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Marketing Manager Sourcing */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded bg-slate-900 text-emerald-400"><Users className="w-4 h-4" /></span>
                  <h3 className="text-lg font-bold text-white">Dedicated Marketing Manager Placement</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-black text-emerald-300 uppercase">PART-TIME MANAGER</h4>
                      <p className="text-xl font-black text-white mt-1">{applyCycle(25000, 60000)} / Month</p>
                      <p className="text-[10px] text-slate-400 mt-2">20 hours per week allocated growth support. Handles reporting metrics, coordinates design briefs, monitors campaigns.</p>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Part-time dedicated Marketing Manager (₹25k-60K)` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-slate-950 text-[10px] text-emerald-400 font-bold border border-slate-850 rounded"
                    >
                      Lease Part-Time
                    </button>
                  </div>

                  <div className="bg-slate-900/40 border border-indigo-950/80 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-black text-indigo-300 uppercase">FULL-TIME MANAGER</h4>
                      <p className="text-xl font-black text-white mt-1">{applyCycle(80000, 250000)} / Month</p>
                      <p className="text-[10px] text-slate-400 mt-2">Dedicated full-time growth quarterback resource. Architect roadmaps, priority support call alignment, direct Slack syncing.</p>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Full-time dedicated Marketing Manager (₹80k-2.5L)` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-indigo-950 text-[10px] text-indigo-300 font-bold border border-indigo-900/40 rounded"
                    >
                      Deploy Full-Time
                    </button>
                  </div>
                </div>
              </div>

              {/* SEO Audit & Speed Tuning Addons */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded bg-slate-900 text-teal-400"><FileText className="w-4 h-4" /></span>
                  <h3 className="text-lg font-bold text-white">Advanced SEO Audits & System Recommendations</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-300 uppercase">BASIC DIAGNOSTIC AUDIT</h4>
                      <p className="text-xl font-black text-white mt-1">₹5,000 – ₹15,000</p>
                      <p className="text-[10px] text-slate-500">One-time flat rate</p>
                      <p className="text-[11px] text-slate-400 mt-2">Standard crawler health run, missing titles reports, sitemap files checks, core redirect behaviors overview.</p>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Basic SEO Audit package (₹5k-15k)` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-slate-950 text-[10px] text-teal-400 font-bold border border-slate-850 rounded"
                    >
                      Order Basic Audit
                    </button>
                  </div>

                  <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-300 uppercase">ADVANCED GROWTH BLUEPRINT</h4>
                      <p className="text-xl font-black text-white mt-1">₹25,000 – ₹1,00,000</p>
                      <p className="text-[10px] text-slate-500">One-time flat rate</p>
                      <p className="text-[11px] text-slate-400 mt-2">Comprehensive organic blueprint: technical SEO breakdown, competitor keyword gaps, SGE/LLM readiness scoring maps.</p>
                    </div>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('india-proposal-portal');
                        el?.scrollIntoView({ behavior: 'smooth' });
                        setProposalData(prev => ({ ...prev, customNotes: `Interested in Advanced SEO Growth Blueprint (₹25k-1L)` }))
                      }}
                      className="w-full mt-4 py-1.5 bg-slate-950 text-[10px] text-teal-400 font-bold border border-slate-850 rounded"
                    >
                      Order Advanced Audit
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Recommended Add-ons listing row */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-900 space-y-4">
              <h4 className="text-xs font-black text-white uppercase tracking-widest text-center sm:text-left">Optional Recommended Optimization Add-Ons</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-850 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black">AI Chatbot Integration</p>
                  <p className="text-sm font-bold text-white mt-1">₹5,000 – ₹50,000</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-850 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Speed Optimization Tuning</p>
                  <p className="text-sm font-bold text-white mt-1">₹5,000 – ₹25,000</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-850 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Monthly Maintenance Retainer</p>
                  <p className="text-sm font-bold text-white mt-1">₹3,000 – ₹20,000<span className="text-[8px] text-slate-500">/mo</span></p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-850 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Conversion CRO Tuning</p>
                  <p className="text-sm font-bold text-white mt-1">₹15,000 – ₹1,00,000<span className="text-[8px] text-slate-500">/mo</span></p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 5. SECTION: INTERACTIVE CUSTOM QUOTE BUILDER */}
        <div className="bg-slate-950/80 rounded-3xl border border-indigo-500/20 p-6 md:p-8 space-y-8 relative">
          <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-mono text-[9px] font-black uppercase py-1 px-3 rounded-full flex items-center gap-1 shadow-md">
            <Calculator className="w-3 h-3" /> Live Quote Generator
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">Configure Your Own Customized Search & Ad Package</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
              Select key target growth modules below. This real-time helper calculates your estimated quarterly or monthly retainer, including standard Indian market ranges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 items-start">
            
            {/* Options grid */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Organic SEO options */}
              <div className="space-y-3">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Organic SEO & AI Search Modules</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('basic-seo') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('basic-seo')}
                      onChange={() => handleServiceToggle('basic-seo')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Basic SEO Structure (₹12k - 18k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Best for single small sites & local shops.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('standard-seo') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('standard-seo')}
                      onChange={() => handleServiceToggle('standard-seo')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Standard Growth SEO (₹25k - 45k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">For competitive SaaS startups & ecommerce.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('advanced-seo') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('advanced-seo')}
                      onChange={() => handleServiceToggle('advanced-seo')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Advanced Enterprise SEO (₹60k - 1.5L/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">High authority link curation & roadmap plans.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('starter-ai') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('starter-ai')}
                      onChange={() => handleServiceToggle('starter-ai')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Starter GEO & AEO (₹18k - 35k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Target brand conversational citations & LLM charts.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('adv-ai') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('adv-ai')}
                      onChange={() => handleServiceToggle('adv-ai')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Growth GEO & AIO (₹40k - 75k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Entity clustering & search prompt trigger analysis.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Paid marketing choices */}
              <div className="space-y-3">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Google Ads, Meta & SMO Modules</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('basic-ppc') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('basic-ppc')}
                      onChange={() => handleServiceToggle('basic-ppc')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Basic PPC Campaign (₹10k - 18k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Keyword tracking maps & bid auditing management.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('standard-ppc') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('standard-ppc')}
                      onChange={() => handleServiceToggle('standard-ppc')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Standard CPC Growth (₹25k - 50k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Highly scalable Google Search & display structures.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('adv-meta') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('adv-meta')}
                      onChange={() => handleServiceToggle('adv-meta')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Advanced Meta Ads (₹30k - 1L/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Reels story targeting & CAPI pixel sync.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('social-basic') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('social-basic')}
                      onChange={() => handleServiceToggle('social-basic')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Starter SMO Hero (₹8k - 15k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Social bios SMM templates & keyword tagging grids.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('social-adv') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('social-adv')}
                      onChange={() => handleServiceToggle('social-adv')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Active SMO Reels (₹20k - 45k/mo)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Short video edits, captions calendar & search optimization.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedServices.includes('wp-biz') ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-slate-755'}`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded text-indigo-500 focus:ring-indigo-500 bg-slate-900"
                      checked={selectedServices.includes('wp-biz')}
                      onChange={() => handleServiceToggle('wp-biz')}
                    />
                    <div>
                      <p className="text-xs font-black text-white leading-tight">Business WP Dev (₹50k - 1.5L flat rate)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Speed-optimized custom structural blocks.</p>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Calculations column */}
            <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-850 space-y-6">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Estimated Cost Matrix</span>
              <h4 className="text-md font-bold text-white">Your Custom Plan Quote</h4>

              <div className="space-y-4">
                <div className="pb-4 border-b border-indigo-950">
                  <p className="text-[11px] text-slate-400">Monthly Billing Equivalent:</p>
                  <p className="text-3xl font-black text-teal-400 mt-1">
                    ₹{customEstimate.min.toLocaleString('en-IN')} - ₹{customEstimate.max.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">(*Suggested budget range, excl GST)</p>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] text-slate-300 font-bold">Selected Modules Breakdown:</p>
                  <div className="space-y-1 max-h-[140px] overflow-y-auto pr-1">
                    {selectedServices.map(srv => (
                      <div key={srv} className="flex justify-between text-[11px] text-slate-400 bg-slate-950 p-1.5 rounded">
                        <span className="capitalize">{srv.replace('-', ' ')}</span>
                        <span className="text-slate-300 font-mono font-bold">Included</span>
                      </div>
                    ))}
                    {selectedServices.length === 0 && (
                      <p className="text-xs text-rose-300">No modules selected. Please choose services to view calculations.</p>
                    )}
                  </div>
                </div>

                {billingCycle === 'quarterly' && (
                  <div className="p-3 bg-teal-950/40 text-teal-300 rounded-lg text-[11px] border border-teal-900">
                    🎉 Outstanding Choice! A 15% discount is calculated on selecting a Quarterly Retainer cycle.
                  </div>
                )}

                <button 
                  onClick={() => {
                    const el = document.getElementById('india-proposal-portal');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    setProposalData(prev => ({
                      ...prev,
                      customNotes: `Generated a custom live package including: ${selectedServices.join(', ')} (Est: ₹${customEstimate.min.toLocaleString('en-IN')} - ₹${customEstimate.max.toLocaleString('en-IN')}/mo)`
                    }));
                  }}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white rounded-xl transition flex items-center justify-center gap-1"
                >
                  Send Proposal for Selected Stack <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 6. SECTION: INTEGRATED GO-TO-MARKET GROWTH BUNDLES */}
        <div className="space-y-8">
          <div className="border-l-2 border-indigo-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Recommended Integrated Bundles (Best Value)
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Save up to 25% by combining search engine indexing, ad campaigns, and monthly progress support into an optimal growth package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Startup Go-To Bundle */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-900 flex flex-col justify-between">
              <div>
                <span className="text-[9px] bg-cyan-950 text-cyan-300 py-0.5 px-2 rounded-full font-bold uppercase">STARTUP BUNDLE</span>
                <h3 className="text-md font-bold text-white mt-2">Startup Foundations Package</h3>
                <p className="text-slate-400 text-xs mt-1">Ideal for small growing operations & local footprints scaling digital presence.</p>
                
                <div className="mt-4 pb-3 border-b border-indigo-950">
                  <p className="text-2xl font-black text-teal-400">{applyCycle(15000, 35000)} <span className="text-xs text-slate-500 leading-none">/mo</span></p>
                  <p className="text-[10px] text-slate-500 mt-1">Suggested billing package (Regular Price: ₹45,000)</p>
                </div>

                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-400" /> Basic SEO Audit + On-page edits</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-400" /> Basic Local map listings setups</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-400" /> Social SMM posting calendar mapping</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-teal-400" /> 1 Dedicated dashboard progress sync</li>
                </ul>
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('india-proposal-portal');
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setProposalData(prev => ({ ...prev, customNotes: `Interested in the Startup Foundation Bundle (₹15K-35K)` }))
                }}
                className="w-full mt-6 py-2 bg-slate-900 hover:bg-slate-800 text-[11px] font-bold text-indigo-300 rounded border border-slate-850 transition"
              >
                Inquire Startup Pack
              </button>
            </div>

            {/* Growth Bundle */}
            <div className="bg-slate-900/40 rounded-2xl p-6 border-2 border-indigo-500 flex flex-col justify-between relative shadow-[0_10px_30px_rgba(99,102,241,0.08)] scale-100">
              <span className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-mono text-[9px] font-black uppercase py-1 px-3 rounded-full flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" /> BEST VALUE
              </span>
              <div>
                <span className="text-[9px] bg-indigo-950 text-indigo-300 py-0.5 px-2 rounded-full font-bold uppercase">GROWTH BUNDLE</span>
                <h3 className="text-md font-bold text-white mt-2">Accelerated Scaler Suite</h3>
                <p className="text-slate-400 text-xs mt-1">Engineered package for E-commerce, SaaS startups, and competitive SMBs.</p>
                
                <div className="mt-4 pb-3 border-b border-indigo-950">
                  <p className="text-2xl font-black text-teal-400">{applyCycle(50000, 150000)} <span className="text-xs text-slate-500 leading-none">/mo</span></p>
                  <p className="text-[10px] text-slate-500 mt-1">Suggested billing package (Save up to 25% grouped)</p>
                </div>

                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-400" /> Standard Growth SEO matrix</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-400" /> Starter generative AI SEO/GEO setup</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-400" /> Standard Google Ads CPC campaign audit</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-400" /> Standard Meta Ads pixel remarketing setup</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-400" /> Basic landing copywriting assistance</li>
                </ul>
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('india-proposal-portal');
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setProposalData(prev => ({ ...prev, customNotes: `Interested in the Accelerated Scaler Growth Bundle (₹50K-1.5L)` }))
                }}
                className="w-full mt-6 py-2.5 bg-indigo-600 hover:bg-indigo-550 text-xs font-bold text-white rounded-lg transition"
              >
                Inquire Growth Pack
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-900 flex flex-col justify-between">
              <div>
                <span className="text-[9px] bg-purple-950 text-purple-300 py-0.5 px-2 rounded-full font-bold uppercase">ENTERPRISE MATRIX</span>
                <h3 className="text-md font-bold text-white mt-2">Full Enterprise Scale Suite</h3>
                <p className="text-slate-400 text-xs mt-1">Bespoke technical and creative roadmap designed for high scale organizations.</p>
                
                <div className="mt-4 pb-3 border-b border-indigo-950">
                  <p className="text-2xl font-black text-teal-400">₹2,00,000 – ₹10,00,000+ <span className="text-xs text-slate-500 leading-none">/mo</span></p>
                  <p className="text-[10px] text-slate-500 mt-1">Tailored scope with priority SLA deliverables</p>
                </div>

                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-400" /> Full scale organic SEO & programmatic loops</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-400" /> SGE / Gemini / Claude citation tags</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-400" /> Performance Max hyper-optimizations</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-400" /> 1 Dedicated senior marketing quarterback</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-400" /> Custom pipelines audit & Weekly SLA reports</li>
                </ul>
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('india-proposal-portal');
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setProposalData(prev => ({ ...prev, customNotes: `Interested in Enterprise Custom Growth Suite (₹2L-10L+)` }))
                }}
                className="w-full mt-6 py-2 bg-slate-900 hover:bg-slate-800 text-[11px] font-bold text-indigo-300 rounded border border-slate-850 transition"
              >
                Request Custom Enterprise SLA
              </button>
            </div>

          </div>
        </div>

        {/* 7. SECTION: ADVANCED ROI CALCULATOR */}
        <div className="bg-slate-950/80 rounded-3xl border border-slate-900 p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded bg-indigo-950/50 text-indigo-400"><Calculator className="w-5 h-5" /></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Target Organic ROI Projection Tool</h3>
          </div>
          
          <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed max-w-3xl">
            Input prospect traffic projections, conversion weight patterns, and average order value (AOV) to model net monthly revenue margins and estimated ad-equivalence returns.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            
            {/* Range controls */}
            <div className="lg:col-span-2 space-y-6">
              
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>Projected Monthly Organic/Paid Visitor Traffic</span>
                  <span className="font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {trafficInput.toLocaleString('en-IN')} Visitors
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="1000"
                  value={trafficInput} 
                  onChange={(e) => setTrafficInput(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>Average Conversion Rate (Lead Submission / checkout purchase)</span>
                  <span className="font-mono text-indigo-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {conversionInput}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="10.0" 
                  step="0.1"
                  value={conversionInput} 
                  onChange={(e) => setConversionInput(Number(e.target.value))}
                  className="w-full accent-indigo-400 h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>Average Deal Value / Order Value (AOV) - INR</span>
                  <span className="font-mono text-purple-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    ₹{aovInput.toLocaleString('en-IN')}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="10000" 
                  step="100"
                  value={aovInput} 
                  onChange={(e) => setAovInput(Number(e.target.value))}
                  className="w-full accent-purple-400 h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>Monthly Allocated Marketing/Ad Budget (Suggested comparator)</span>
                  <span className="font-mono text-teal-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    ₹{monthlyAdBudget.toLocaleString('en-IN')}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="200000" 
                  step="5000"
                  value={monthlyAdBudget} 
                  onChange={(e) => setMonthlyAdBudget(Number(e.target.value))}
                  className="w-full accent-teal-400 h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* Calculations metrics summary */}
            <div className="bg-slate-900/60 border border-slate-850 p-6 rounded-2xl text-center space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">ROI Projections Suite</span>
                <h4 className="text-md font-bold text-white mt-1">Calculated Monthly Outlook</h4>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-950 p-3 rounded-lg text-left border border-slate-850">
                    <p className="text-[9px] text-slate-500 uppercase font-black">Total Deliveries</p>
                    <p className="text-xl font-bold text-white mt-1">{totalConversions.toLocaleString('en-IN')}</p>
                    <p className="text-[8px] text-slate-500">Conversions / mo</p>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg text-left border border-slate-850">
                    <p className="text-[9px] text-slate-500 uppercase font-black">Estimated ROAS</p>
                    <p className="text-xl font-bold text-teal-400 mt-1">{estimatedROAS}x</p>
                    <p className="text-[8px] text-slate-500">Return multi</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-950 rounded-xl text-left border border-indigo-950">
                  <p className="text-[9px] text-slate-400 uppercase font-black">Expected Monthly Revenue Output:</p>
                  <p className="text-2xl font-black text-emerald-400 mt-1">₹{expectedMonthlyRevenue.toLocaleString('en-IN')}</p>
                  
                  <div className="mt-3 pt-3 border-t border-slate-900 flex justify-between text-xs text-slate-400">
                    <span>Net Margin (Lift):</span>
                    <span className="font-mono text-white font-bold">
                      ₹{netEstimatedLift.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-indigo-950/30 text-[11px] text-slate-400 rounded-lg border border-indigo-900/40 text-left">
                ℹ️ Calculations assume search query mapping, standard responsive bounce values, and technical core visibility adjustments. Actual metrics could fluctuate.
              </div>
            </div>

          </div>
        </div>

        {/* 8. SECTION: COMPREHENSIVE FEATURE COMPARISON */}
        <div className="space-y-6">
          <div className="border-l-2 border-indigo-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Growth plans compared: Feature matrix
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Analyze core deliverables side-by-side across Starter, Growth, and Enterprise tiers to locate your optimal investment point.
            </p>
          </div>

          <div className="bg-slate-950/80 rounded-3xl border border-slate-900 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-400 border-collapse">
                <thead className="bg-slate-900/60 text-slate-200 border-b border-slate-800">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[10px]">Deliverable Deliverables Matrix</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[10px] text-teal-400">Basic / Starter Tiers</th>
                    <th className="p-4 sm:p-5 font-bold tracking-wider text-[10px] bg-slate-900 text-indigo-300">Standard / Growth Suite</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[10px] text-purple-400">Advanced / Enterprise SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900">
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">Initial Strategy & Auditing</td>
                    <td className="p-4 sm:p-5">Basic crawler diagnostics checklist</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">Competitor indexing gaps + roadmap maps</td>
                    <td className="p-4 sm:p-5">Full programmatic technical flow chart</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">On-Page Engineering</td>
                    <td className="p-4 sm:p-5">Meta descriptions & main header titles</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">Topic clusters + semantic internal link setup</td>
                    <td className="p-4 sm:p-5">Structured Schema markup JSON-LD configurations</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">Content Sourcing / mo</td>
                    <td className="p-2 sm:p-5">2 SEO logs (800–1200 words)</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">4–8 research blogs + landing CTA tuning</td>
                    <td className="p-4 sm:p-5">12–20 programmatic high value assets</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">Link Outreach Curation</td>
                    <td className="p-4 sm:p-5">10-15 Local directory citations</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">30-50 Guest posts & contextual backlinks</td>
                    <td className="p-4 sm:p-5">HARO outreach reviews + Tier-1 PR releases</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">Search Engine GEO Readiness</td>
                    <td className="p-4 sm:p-5">Basic FAQ mapping index rules</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">LocalBusiness Schemas + Entity graphs</td>
                    <td className="p-4 sm:p-5">Claude, Gemini & Perplexity citation targets</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">Metrics Tracking Setup</td>
                    <td className="p-4 sm:p-5">Google Search Console metrics</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">GA4 conversions logs + dashboard charts</td>
                    <td className="p-4 sm:p-5">Enterprise BI integrations tracking</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">Ad campaign optimization</td>
                    <td className="p-4 sm:p-5">Basic weekly bid tracking adjustments</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">Remarketing pixels setups + CPC asset checks</td>
                    <td className="p-4 sm:p-5">Merchant centers + smart performance Max sets</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-300">Dedicated Support model</td>
                    <td className="p-4 sm:p-5">Monthly email report insights</td>
                    <td className="p-4 sm:p-5 bg-slate-900/20 text-indigo-200 font-medium">Bi-weekly voice review sync calls</td>
                    <td className="p-4 sm:p-5">Dedicated Slack setup + quarterback manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 9. SECTION: FAQ ACCORDION FOR INDIAN MARKET */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="text-indigo-400 font-mono text-[10px] uppercase font-bold tracking-widest">Pricing Support FAQs</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Frequently Asked Pricing Questions</h3>
          </div>

          <div className="space-y-3.5 pt-4">
            {[
              {
                q: "Is GST included in the prices shown?",
                a: "No, the suggested retainers are exclusive of 18% GST. A valid GST Tax Invoice will be shared to help you claim credit inputs smoothly."
              },
              {
                q: "Do you offer flexible payment structures or milestone terms?",
                a: "Yes! We specialize in supporting scaling brands through flexible milestone structures. You can split development and custom setup fees into progressive phases based on delivery schedules."
              },
              {
                q: "Can I switch or upgrade packages intermediate?",
                a: "Absolutely. You can scale your retainer packages, shift budgets between paid ads and organic SEO resources, or adjust targeted keywords dynamically as your objectives shift."
              },
              {
                q: "How does the Quarterly billing discount operate?",
                a: "By choosing a Quarterly retainer, you secure an automatic 15% discount across all months, which also assists in establishing compiler search metrics momentum over the typical 90-day trajectory."
              },
              {
                q: "In what languages will my dedicated growth team communicate?",
                a: "Our account teams are entirely bilingual. We offer fully professional English alignments or direct हिन्दी/English Hinglish sync setups based strictly on your company preferences."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950/80 rounded-2xl border border-slate-900 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center bg-slate-900/20 hover:bg-slate-900/40 transition"
                  >
                    <span className="text-sm font-bold text-slate-200">{faq.q}</span>
                    <span className="text-slate-500 text-lg">{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-900 bg-slate-950/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* 10. SECTION: INSTANT DIGITAL PROPOSAL LEAD FORM */}
        <div id="india-proposal-portal" className="bg-slate-950/80 rounded-3xl border border-indigo-500/20 p-6 md:p-8 max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-indigo-400 font-mono text-[10px] uppercase font-bold tracking-widest">Get Growth Proposal</span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">Let's Design Your Growth Campaign</h3>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
              Complete the quick context markers below. We compile customized performance estimates and outline recommended strategies.
            </p>
          </div>

          <form onSubmit={handleProposalSubmit} className="space-y-4 pt-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Company Contact Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Rohan Sharma"
                  value={proposalData.name}
                  onChange={(e) => setProposalData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-900/60 border border-slate-800 focus:border-indigo-500 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Business Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g., rohan@company.in"
                  value={proposalData.email}
                  onChange={(e) => setProposalData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-slate-900/60 border border-slate-800 focus:border-indigo-500 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Number (WhatsApp Direct)</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g., +91 98765-43210"
                  value={proposalData.phone}
                  onChange={(e) => setProposalData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-slate-900/60 border border-slate-800 focus:border-indigo-500 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Business Sizing Profile</label>
                <select
                  value={proposalData.businessType}
                  onChange={(e) => setProposalData(prev => ({ ...prev, businessType: e.target.value }))}
                  className="w-full bg-slate-900/60 border border-slate-800 focus:border-indigo-500 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                >
                  <option value="SME">Indian Startup / SME</option>
                  <option value="Ecom">Ecommerce Store (Shopify / Woo)</option>
                  <option value="SaaS">SaaS Brand Sourcing</option>
                  <option value="Enterprise">Enterprise Sizing Scale</option>
                  <option value="Local">Local Brick-and-Mortar Outlet</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Specific growth notes or selected plans</label>
                <input 
                  type="text" 
                  placeholder="e.g., Looking for combined Standard SEO + Local Map setups"
                  value={proposalData.customNotes}
                  onChange={(e) => setProposalData(prev => ({ ...prev, customNotes: e.target.value }))}
                  className="w-full bg-slate-900/60 border border-slate-800 focus:border-indigo-500 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="text-center pt-2">
              <button 
                type="submit"
                disabled={proposalLoading || proposalSubmitted}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-505 disabled:opacity-50 text-white text-xs font-black rounded-xl transition shadow-lg"
              >
                {proposalLoading ? 'Compiling Parameters...' : proposalSubmitted ? 'Request Registered successfully! ✓' : 'Register Instant Strategy Inquiry'}
              </button>
            </div>

            {proposalSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-teal-950/40 text-teal-300 rounded-xl text-xs text-center border border-teal-900"
              >
                🎉 Thank you page request captured. Growth architects from our India Sourcing Desk will sync with you on WhatsApp at {proposalData.phone} within 2 business hours!
              </motion.div>
            )}

          </form>
        </div>

      </div>

      {/* Sticky Bottom CTA for quick contact actions */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 z-40 bg-slate-950/90 backdrop-blur border border-indigo-900/40 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-indigo-950 text-indigo-400 shrink-0 hidden sm:block">
                <Sparkle className="w-4 h-4" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-black text-white">Suggested pricing structures in India market context</p>
                <p className="text-[10px] text-slate-400">Standard setups, clean dual Hinglish accountability alignments, and full GST invoice coverage.</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a 
                href="https://wa.me/918318114492?text=Hi%2C%20I%20am%20interested%20in%20your%20Indian%20market%20digital%20marketing%20pricing%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-550 text-xs font-bold text-white rounded-lg transition"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Expert Chat
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById('india-proposal-portal');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white rounded-lg transition"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Start Growth Journey
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

import { useState, useEffect, FormEvent } from 'react';
import { 
  Award, Bot, CheckCircle, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Search, X, Shield, Server, Terminal, Smartphone, Globe, BarChart3, 
  AlertCircle, Sparkles, Network, Check, Landmark, Map, HelpCircle, Mail, Phone, 
  MapPin, Zap, MessageSquare, TrendingUp, AlertTriangle, ChevronDown, Scale, Gavel, FileText, Lock,
  UtensilsCrossed, Calendar, Eye, Compass, ShoppingBag, Radio, RefreshCw, Sparkle, Target, ListCollapse
} from 'lucide-react';

interface RestaurantMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const whyChooseUsCards = [
  { title: "Restaurant Marketing Experts", desc: "We are deeply specialized in food business marketing architectures, map scaling, and local order funnels." },
  { title: "Local SEO Specialists", desc: "We deploy precision proximity signals, localized keywords, and menu schemas to rank you first on Google Maps." },
  { title: "Social Media Growth Experts", desc: "Our creative agency team designs viral video reels, high-fidelity food photos, and repeat guest engagement loops." },
  { title: "AI SEO & GEO Professionals", desc: "Generative Engine Optimization (GEO) ensures ChatGPT, Siri, Gemini, and Claude recommend your tables and cuisines first." },
  { title: "ROI-Focused Campaigns", desc: "Every dollar spent on ads is mapped directly to weekly table booking check-ins, online delivery ticks, and walk-in sales." },
  { title: "Food Branding Expertise", desc: "We structure professional, high-converting digital storefronts and interactive menu portals that represent your brand proudly." }
];

const marketingToolsList = [
  { name: "Google Analytics & GTM", type: "Diner Traffic and Web conversion tracking" },
  { name: "Google Ads Manager", type: "Hyper-localized hourly lunch/dinner party ads" },
  { name: "Meta Ads Console", type: "Visual Instagram Reels & short video promotions" },
  { name: "SEMrush & Ahrefs", type: "Local restaurant search & ranking analytics" },
  { name: "Looker Studio Dashboard", type: "Real-time reservation & direct order tracking" },
  { name: "ChatGPT & Gemini AI", type: "JSON-LD menu schema drafting & AI citation check" },
  { name: "Active CRM integrations", type: "Automated direct visitor loyalty loops & reminders" },
  { name: "Smarter Review API", type: "Automated Maps ratings & citation collection" }
];

export default function RestaurantMarketingPage({ onBackToHome, openProposalForm }: RestaurantMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Restaurant Marketing Services | Restaurant SEO Agency | AKGLS Group";
    
    // Inject Restaurant Schema recommendations dynamically
    const scriptId = "restaurant-schema";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "AKGLS Group Restaurant Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://akglsgroup.com"
        },
        "description": "Expert restaurant SEO, local maps optimization, social media food campaigns, food blogger collaborations, and high-converting restaurant websites.",
        "areaServed": "Global",
        "servesCuisine": "All Types",
        "serviceType": "Food Business Digital Marketing Services"
      });
      document.head.appendChild(scriptEl);
    }
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  // 1. DYNAMIC RESTAURANT ROI & CUSTOMER RETENTION CALCULATOR
  const [businessType, setBusinessType] = useState<'cafe' | 'dining' | 'cloud' | 'chain'>('dining');
  const [targetSpend, setTargetSpend] = useState<number>(3000);
  const [avgTicket, setAvgTicket] = useState<number>(45);

  const businessConfigs = {
    cafe: { name: 'Cafes & Bakeries', avgCpc: 0.75, baselineConv: 3.2, uplift: 2.1 },
    dining: { name: 'Fine Dining & Lounges', avgCpc: 1.40, baselineConv: 2.8, uplift: 2.5 },
    cloud: { name: 'Cloud Kitchens', avgCpc: 0.85, baselineConv: 4.5, uplift: 1.9 },
    chain: { name: 'Fast Food & QSR Chains', avgCpc: 0.60, baselineConv: 5.0, uplift: 2.2 }
  };

  const currentConfig = businessConfigs[businessType];
  const clicks = Math.round(targetSpend / currentConfig.avgCpc);
  
  // Baseline results
  const baseInquiries = Math.round(clicks * (currentConfig.baselineConv / 100));
  const baseCustomers = Math.max(1, Math.round(baseInquiries * 0.70)); // conversion from reserve to show up

  // AKGLS Optimizations
  const akglsInquiries = Math.round(baseInquiries * currentConfig.uplift);
  const akglsCustomersCheckins = Math.round(akglsInquiries * 0.88); // lower dropoffs due to sms automation & WhatsApp systems
  const generatedBillings = akglsCustomersCheckins * avgTicket;
  const computedRoiValue = ((generatedBillings - targetSpend) / targetSpend).toFixed(1);

  // 2. GOOGLE MAPS RANK SIMULATOR FOR RESTAURANT PHRASES
  const [selectedKeywordQuery, setSelectedKeywordQuery] = useState<'near_me' | 'fine_dining' | 'best_takeout'>('near_me');
  const keywordsData = {
    near_me: {
      searchQuery: "best family restaurant near me with authentic reviews and parking",
      baselineRank: "Rank #15 (Hidden beneath secondary directories, unoptimized profile)",
      akglsRank: "Google Local 3-Pack Position #1 (Featuring rich-snippet menus & photo-reels)",
      estimatedImpact: "700+ Immediate navigation/call interactions generated per month",
      enhancements: "Setup of precise location coordinate matching, review velocity campaigns, Menu schema tags integration."
    },
    fine_dining: {
      searchQuery: "romantic candle night fine dining steakhouse in city center",
      baselineRank: "Rank #31 (Completely omitted in surrounding wealthy suburban zones)",
      akglsRank: "Local Pack Top Spot spotlight with direct reservation triggers",
      estimatedImpact: "240+ High-value table reservations secured monthly on-site",
      enhancements: "Creation of rich programmatic landing grids, local blogger co-citation seeding, high-contrast imagery integration."
    },
    best_takeout: {
      searchQuery: "fast pizza and cloud kitchen delivery late night open now",
      baselineRank: "Rank #24 (Losing direct margin to high-commission aggregator portals)",
      akglsRank: "Top #1 Organic Rank coupled with direct WhatsApp order setup",
      estimatedImpact: "950+ Direct non-commission online orders booked on custom portal",
      enhancements: "Hyperlocal keyword tagging, instant WhatsApp ordering links, local schema markup injection."
    }
  };

  // 3. AI GEO & CHATGPT VISIBILITY ENGAGEMENT
  const [cuisineQuery, setCuisineQuery] = useState<string>("a high-concept cloud kitchen specialized in woodfired napoletana pizza having organic locally-sourced ingredients");
  const [isSimulatingAI, setIsSimulatingAI] = useState<boolean>(false);
  const [aiSimulationOutput, setAiSimulationOutput] = useState<{
    references: string[];
    indexScore: number;
    recommendedResult: string;
  }>({
    references: ["Local Food Blogger Index", "AKGLS Restaurant Proximity Graph", "Elite Dine Verification Hub"],
    indexScore: 88,
    recommendedResult: "AI platforms like ChatGPT, Claude, and Gemini Search curate specific food recommendations by parsing location logs, menu structures, and blogger co-citations. Type your target concept above and click 'Simulate AI Visibility Query'."
  });

  const triggerAISimulation = (e: FormEvent) => {
    e.preventDefault();
    setIsSimulatingAI(true);
    setTimeout(() => {
      setIsSimulatingAI(false);
      const lowerText = cuisineQuery.toLowerCase();
      if (lowerText.includes("pizza") || lowerText.includes("napoletana") || lowerText.includes("italian") || lowerText.includes("pasta")) {
        setAiSimulationOutput({
          references: ["City Pizza Guide", "Woodfired Bakers Directory", "AKGLS Proprietary Menu Markup"],
          indexScore: 97,
          recommendedResult: "For high-concept woodfired pizza, the system highly recommends **Artisan Crust Lab** (optimized by AKGLS). AI agents confidently select this location citing its certified sourdough ingredients, spotless 4.8 review score, and compliant Restaurant Schema which showcases active chef profiles directly."
        });
      } else if (lowerText.includes("cafe") || lowerText.includes("bakery") || lowerText.includes("coffee") || lowerText.includes("breakfast")) {
        setAiSimulationOutput({
          references: ["Suburban Cafe Compass", "Elite Roasters Registry"],
          indexScore: 94,
          recommendedResult: "For premium coffee and artisanal bakery setups, search engines suggest **The Golden Roast** (boosted by AKGLS local authority maps). The engine references its active event schedule, allergen-friendly menu list, and direct reservation triggers."
        });
      } else {
        setAiSimulationOutput({
          references: ["Gourmet Food Directories", "Regional Culinary Showcase Ledger"],
          indexScore: 95,
          recommendedResult: "Your concept maps strongly to **The Hearth & Table** (powered by AKGLS local marketing pipeline). AI platforms highlight this establishment first based on localized culinary feedback, authentic Instagram media embeds, and clear local schema coordinate alignments."
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
    restaurantName: '',
    websiteUrl: '',
    location: '',
    restaurantType: 'Fine Dining',
    email: '',
    phone: '',
    agreed: true
  });
  const [crawlingStatus, setCrawlingStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [progressRatio, setProgressRatio] = useState<number>(0);
  const [crawlingLogs, setCrawlingLogs] = useState<string>("Ready to inspect local food industry authority maps...");

  const executeAuditCrawler = (e: FormEvent) => {
    e.preventDefault();
    if (!auditParams.restaurantName || !auditParams.email) {
      alert("Please provide your Restaurant Name and a valid professional Email Address to run the evaluation.");
      return;
    }
    setCrawlingStatus('running');
    setProgressRatio(0);
    setCrawlingLogs("Connecting to Google Maps API maps registers to audit location coordinates...");

    const crawlPhases = [
      { p: 20, msg: "Inspecting Google Business Profile optimization status & local listings accuracy..." },
      { p: 45, msg: "Scanning menu page structure, price schema markup, and image tags..." },
      { p: 65, msg: "Evaluating social media authority loops and local food blogger references..." },
      { p: 85, msg: "Assessing ChatGPT/Gemini Generative Engine Optimization (GEO) index values..." },
      { p: 100, msg: "Analysis complete! We have prepared a customized Marketing & Optimization plan for you." }
    ];

    crawlPhases.forEach((phase, index) => {
      setTimeout(() => {
        setProgressRatio(phase.p);
        setCrawlingLogs(phase.msg);
        if (phase.p === 100) {
          setCrawlingStatus('completed');
        }
      }, (index + 1) * 700);
    });
  };

  const servicesCollection = [
    {
      title: "Restaurant SEO Services",
      badge: "⭐ Core Strategy",
      desc: "Dominate high-traffic organic searches of hungry locals. Guide searchers straight to your brand's menu instead of letting aggregators extract massive cuts.",
      deliverables: [
        "In-depth research on high-volume, localized dining keywords and phrases",
        "Implementation of rich-snippet Restaurant Schema, Menu coordinates, and OpenHours tags",
        "Deep optimization of your menu items, photos, and descriptions for native image lookup listings",
        "Creating custom, high-ranked neighborhood landing maps targeting nearby corporate centers"
      ],
      keywords: ["best local restaurant near me", "authentic dinner spots near me", "family dining open now", "food takeaway delivery service"]
    },
    {
      title: "Google Ads targeting Diners",
      badge: "Immediate Foot Traffic",
      desc: "Target local corporate professionals and families at the exact moment they seek lunch, dinner, or immediate party delivery options.",
      deliverables: [
        "Hyperlocal radius bidding targeting customers within a 3-5 mile radius",
        "Setting up custom hourly schedules matching lunch rushes, happy hours, and weekend brunch bookings",
        "Designing high-conversion click-to-call mobile maps ad campaigns that secure reservations directly",
        "Strategic remarketing to previous customers offering exclusive seasonal menus"
      ]
    },
    {
      title: "Google Maps & Local SEO Pack",
      badge: "Local 3-Pack Supremacy",
      desc: "Achieve dominant search visual listings in the top-shelf Google Maps box, displaying your pristine photos and review count first.",
      deliverables: [
        "Rigorous optimization of description categories, location codes, and contact vectors in your Google Profile",
        "Deploying continuous local citation sync programs across 200+ food catalogs and tourist registers",
        "Establishing automated SMS review invitation triggers that keep your rating counts growing naturally",
        "Securing geographic mapping references across surrounding residential areas and office blocks"
      ]
    },
    {
      title: "High-Converting Website Design",
      badge: "Mobile-First UX",
      desc: "Stunning, rapid-loading digital storefronts with integrated menu systems that increase booking and order conversions.",
      deliverables: [
        "Interactive online menus styled for crisp readability on all small screen sizes",
        "Frictionless integration with booking engines like OpenTable, Resy, or custom systems",
        "Simplified WhatsApp direct ordering buttons bypassing premium aggregators",
        "Optimized pages featuring high-resolution visuals of signature dishes and your venue space"
      ]
    },
    {
      title: "Sensational Social Media Campaigns",
      badge: "Visual Food Branding",
      desc: "Turn your dishes into viral local content through expert Instagram, TikTok, and Facebook feed systems.",
      deliverables: [
        "Crafting high-impact Instagram Reels and TikTok shorts detailing recipe highlights or cooking scenes",
        "Deploying highly targeted local ads highlighting special weekend offers or group events",
        "Implementing automated messaging response systems designed to forward direct reservation links immediately",
        "Organizing high-engagement local contests that build a massive brand fanbase quickly"
      ]
    },
    {
      title: "Online Reputation & Reviews (ORM)",
      badge: "Establish Client Trust",
      desc: "Manage and elevate your rating scores on Google, TripAdvisor, and Yelp to emerge as the town's top-recommended spot.",
      deliverables: [
        "Setting up automated monitoring trackers alerting your team to every new customer review",
        "Providing professional, customized response copy structures that resolve negative reviews gracefully",
        "Crafting internal loyalty sequences that transform positive reviewers into repeating promoters",
        "Proactively correcting and cleaning inconsistent location details on major directories"
      ]
    },
    {
      title: "AI SEO & GEO for Food Brands",
      badge: "⭐ Trending Service",
      desc: "Make sure your restaurant is the premier choice highlighted in conversational AI search setups.",
      deliverables: [
        "Optimizing digital assets so that ChatGPT, Perplexity, and Gemini name your dining spots first",
        "Formatting menu databases in semantic formats that perfectly align with conversational AI inquiries",
        "Anchoring key culinary credentials to ensure your business is highlighted for unique ingredient lookups",
        "Ensuring voice assistants on Siri, Alexa, and Google Assistant list your venue for casual voice queries"
      ]
    },
    {
      title: "Smarter Food Delivery Optimization",
      badge: "Maximize Margin Yield",
      desc: "Optimize and boost your positioning inside delivery platforms to maximize ticket orders and margins.",
      deliverables: [
        "Structuring and organizing menu item names and headers to match local platform search algorithms",
        "Deploying smart promotions and discount schedules designed to capture prime app listings",
        "Crafting customized physical package insert flyers that convert app delivery users to direct repeat website buyers",
        "Cross-analyzing competing kitchen pricing models to improve your delivery margins"
      ]
    },
    {
      title: "High-Impact Video Production",
      badge: "Visual Signature",
      desc: "Produce mouthwatering visual showcases, chef introductions, and venue tours that drive bookings.",
      deliverables: [
        "Producing premium, cinema-grade reels highlighting your high-energy kitchen environment and signature dishes",
        "Creating charming video bios showcasing your chef's training and unique cooking philosophy",
        "Developing high-contrast YouTube and social ads crafted specifically to capture corporate group buyouts",
        "Tuning visual metadata to maximize local YouTube SEO discovery metrics"
      ]
    },
    {
      title: "Blogger & Influencer Collaborations",
      badge: "Local Buzz Builder",
      desc: "Partner with top regional food bloggers to generate massive buzz, viral views, and immediate queues.",
      deliverables: [
        "Selecting and vetting regional food bloggers based on their authentic local audience engagement metrics",
        "Coordinating structured dining events and launch tastings that earn organic video coverage",
        "Fostering authentic user-generated content (UGC) media arrays to embed on your website",
        "Organizing localized collaboration campaigns with clear tracking links to measure ROI"
      ]
    }
  ];

  const servedSegments = [
    { title: "Casual & Family Restaurants", desc: "Build consistent lunch and dinner rushes, drive repeat local family traffic, and maximize table utility values." },
    { title: "Charming Cafes & Bakeries", desc: "Establish high-engagement neighborhood morning routines, promote artisanal baked goods, and highlight high-margin coffee choices." },
    { title: "Modern Cloud Kitchens", desc: "Acquire consistent online delivery tickets directly, optimization visibility on delivery apps, and lower third-party commissions." },
    { title: "Fine Dining & Lounges", desc: "Secure valuable tasting menu reservations, corporate bookings, special event buyouts, and high-ticket table sessions." },
    { title: "Fast Food & QSR Chains", desc: "Maximize quick-checkout order ticket volumes, build local drive-thru traffic, and launch high-conversion loyalty apps." },
    { title: "Artisanal Bakeries", desc: "Promote celebration event cakes, drive seasonal catalog sales, and expand local corporate catering pipelines." },
    { title: "Creative Food Trucks", desc: "Target event coordinates dynamically, publish live location map feeds, and mobilize followers in target neighborhoods." },
    { title: "Bars & Social Lounges", desc: "Drive consistent weekend and late-night crowds, promote themed events, and showcase premium drink and menu items." },
    { title: "Professional Catering", desc: "Acquire steady wedding, corporate party, and large residential gourmet banquet bookings." },
    { title: "Delightful Sweet Shops", desc: "Increase seasonal gifting package transactions, build online repeat delivery channels, and showcase dessert displays." }
  ];

  const processFlowSteps = [
    { num: "01", name: "Market & Competitor Research", detail: "We analyze local dining search trends, chart competing restaurant menus, and identify untapped suburban customer demands." },
    { num: "02", name: "Custom Strategy Development", detail: "We build localized SEO pipelines, conceptualize eye-catching social campaigns, and structure target ad funnels." },
    { num: "03", name: "Website & Campaign Optimization", detail: "We deploy mobile-first interactive menus with clean Restaurant schema, and configure top maps coordinates." },
    { num: "04", name: "Launch & Customer Acquisition", detail: "We trigger targeted social reels, run hyperlocal ad campaigns, and drive immediate table bookings & direct online orders." },
    { num: "05", name: "Review Tracking & Growth Scaling", detail: "We supply clear reporting dashboards tracking incoming bookings, delivery volume, reputation scores, and direct ROI." }
  ];

  const featuresBenefitsGrid = [
    { title: "Increase Direct Online Orders", desc: "Equip your website with rapid menu portals that make direct ordering effortless, eliminating third-party app margins." },
    { title: "Improve Table Reservations", desc: "Frictionless integration with reservation engines ensures maximum seat occupancy during slow weekdays and weekends alike." },
    { title: "Dominate Local Searches", desc: "Rank at the pinnacle of Google Local Packs when families near your venue search for your signature cuisines." },
    { title: "Build Lifelong Customer Loyalty", desc: "Convert one-time walk-ins into passionate club members via targeted reward promos and SMS campaigns." },
    { title: "Enhance Organic Brand Visibility", desc: "Secure highly shared viral video slots and local news features, framing your restaurant as the city's go-to spot." },
    { title: "Increase Repeat Customers", desc: "Keep previous diners excited and coming back through targeted retargeting ads showcasing new menu drops." }
  ];

  const packagesLayout = [
    {
      name: "Cafe Starter",
      price: "$1,800/mo",
      desc: "Perfect for local cafes, bakeries, and cloud kitchens aiming to build strong neighborhood authority.",
      features: [
        "Google Business Profile complete setup, map tuning, and local category optimization",
        "Local Map Pack search indexing covering up to a 3-mile operational radius",
        "Implementation of compliant Schema markup (JSON-LD) for standard menus",
        "Development of highly optimized mobile menu panels and simple reservation landing pages",
        "Setting up targeted local Google & Meta ads (ad budget managed up to $3,000/mo)",
        "Assistance with Google and Instagram review setups and feedback forms",
        "Monthly reporting covering map impressions, website inquiries, and click metrics"
      ],
      current: false,
      ctaText: "Activate Cafe Starter Plan"
    },
    {
      name: "Restaurant Growth",
      price: "$3,600/mo",
      desc: "Designed for busy family dining spots and single-location restaurants aiming to maximize table bookings.",
      features: [
        "Everything in the Cafe Starter package is included",
        "Conversational AI SEO active for ChatGPT, Siri, and Gemini queries",
        "Management of active local SEO targeting of surrounding corporate campuses",
        "Setup and active management of targeted Instagram and Facebook campaigns with food photography",
        "Production of 4 custom high-impact food reels and social videos per month",
        "Implementation of negative search keyword exclusions to prevent irrelevant ad clicks",
        "Direct API integration with popular reservation apps (Resy, OpenTable, etc.)",
        "Bi-weekly performance review call sessions with a dedicated restaurant growth lead"
      ],
      current: true,
      ctaText: "Secure Restaurant Growth"
    },
    {
      name: "Multi-Location Restaurant",
      price: "Custom Pricing",
      desc: "Bespoke franchise-level program engineered for multi-city entities, chains, and hotel dining concepts.",
      features: [
        "Comprehensive, enterprise-grade restaurant marketing strategy across search and socials",
        "Scaleable programmatic SEO assets built for every individual franchise location",
        "Continuous optimization with lightning-fast delivery and reservation configurations",
        "Comprehensive reputation monitoring keeping rating metrics spotless across major portals",
        "Premium influencer campaigns utilizing curated networks of high-engagement local food bloggers",
        "Automated CRM systems that sync and route client data straight to custom loyalty dashboards",
        "Monthly executive strategy reviews with partners and regional restaurant management teams"
      ],
      current: false,
      ctaText: "Connect with Franchise Experts"
    }
  ];

  const successStories = [
    {
      restaurant: "L'Aura Authentic Italian Osteria",
      issue: "A premium hidden-gem Italian spot was struggling to fill tables during weekdays, depending entirely on traditional local word-of-mouth.",
      strategy: "Optimized hyperlocal Maps configurations, launched mouthwatering Instagram Reels campaigns, and configured high-conversion Reservation Schema tags.",
      results: [
        { key: "Weekday Reservations booked", value: "+180% growth" },
        { key: "Cost-Per-Reservation on Meta Ads", value: "Reduced from $14.50 to $4.10" },
        { key: "Google Maps direct calling volume", value: "900+ monthly call actions" }
      ]
    },
    {
      restaurant: "Zesty Wings & Burger Cloud Kitchen",
      issue: "A startup delivery-only kitchen was losing 30% of its operating margin to delivery app commissions while struggling with zero search presence.",
      strategy: "Created an intuitive, direct mobile-ordering portal, launched hyper-targeted late-night Google Ads, and optimized its Swiggy/Zomato profiles.",
      results: [
        { key: "Direct ordering volume scale", value: "+320% direct orders" },
        { key: "Third-party merchant fees saved", value: "Over $6,200 monthly" },
        { key: "ChatGPT search recommendation frequency", value: "First-choice citation for local gourmet wings" }
      ]
    }
  ];

  const faqItemsList = [
    {
      q: "How can restaurants get more customers online?",
      a: "We focus on high-intent regional dining queries. Instead of relying on random followers, we target active local users searching for dinner now or planning group corporate lunches. By optimizing your Google Business Profile, running targeted map ads during peak hours, and integrating fast reservation paths, we drive highly motivated diners straight to your front doors."
    },
    {
      q: "Is SEO important for local restaurants?",
      a: "Absolutely critical. Over 80% of local diners search online before visiting a venue. SEO ensures your restaurant sits in the Google Local 3-Pack and ranks for popular search queries, instead of letting aggregators hijack your customers and charge you commissions for them."
    },
    {
      q: "Can social media marketing actually increase restaurant sales?",
      a: "Yes, when paired with clear conversion paths. Creative food visuals build desire, but we couple them with clear call-to-actions, WhatsApp ordering portals, and direct reservation links that turn visual engagement into confirmed covers."
    },
    {
      q: "How long does professional restaurant SEO take?",
      a: "Hyperlocal maps modifications and targeted Google Ads show traffic impact within days. Broader organic page optimization and Local 3-Pack placement typically yield significant authority gains in 45 to 90 days."
    },
    {
      q: "Can you improve Google Maps and Map Pack rankings?",
      a: "Yes. By optimizing proximity metadata, synchronizing geographic listings, driving positive review campaigns, and deploying structured Restaurant Schema, we consistently out-position generic directory websites."
    },
    {
      q: "Do you market cloud kitchens and delivery brands?",
      a: "Yes. We focus on acquiring direct orders via customized websites, creating targeted late-night campaigns, and optimizing Swiggy/Zomato profiles to maximize delivery tickets with minimal commissions."
    },
    {
      q: "What is AI SEO for restaurants?",
      a: "AI SEO, or Generative Engine Optimization (GEO), ensures that when people ask conversational engines like ChatGPT Search, Claude, or Gemini for food recommendations, your restaurant is cited with accurate pricing and a direct call to action."
    }
  ];

  return (
    <>
      {/* SECTION NAV BAR */}
      <div className="bg-[#05080f] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">F&B Sector</span>
            <span className="text-slate-400 text-xs font-light">Direct Customer Acquisition & Table Reservation Optimization</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#restaurant-audit-section" 
              className="text-xs text-amber-500 font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free Restaurant Audit
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
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#152033_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-amber-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-500" />
              <span>Compliant Restaurant Scale Program</span>
            </div>

            <h1 id="restaurant-hero-title" className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white animate-fade-in">
              Restaurant Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                That Increase Orders, Bookings & Customers.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Grow your restaurant, cafe, cloud kitchen, or food business with SEO, Google Ads, local SEO, social media marketing, and AI-powered customer acquisition strategies.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a 
                href="#restaurant-audit-section"
                className="bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
              >
                Get Free Restaurant Marketing Audit
              </a>
              <a 
                href="#restaurant-estimator-section"
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono cursor-pointer"
              >
                Book Restaurant Growth Consultation
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Restaurant Marketing Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Local SEO Experts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Social Media Growth Strategies</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>ROI-Driven Campaigns</span>
              </div>
            </div>
          </div>

          {/* Interactive ROI & Booking Estimator */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="restaurant-estimator-section">
            <div className="bg-[#070b13] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-orange-500/80" />
                  <div className="w-3 h-3 rounded-full bg-teal-500/80 animate-pulse" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  Restaurant Yield Estimator
                </div>
              </div>

              <div className="space-y-4 text-left">
                {/* Business Type Selector */}
                <div>
                  <label className="text-[10px] uppercase font-mono font-black text-slate-500 block mb-1.5">Select Food Business Type:</label>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { key: 'cafe', label: 'Cafe' },
                      { key: 'dining', label: 'Dining' },
                      { key: 'cloud', label: 'Cloud' },
                      { key: 'chain', label: 'Chain' }
                    ].map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setBusinessType(type.key as any)}
                        className={`text-[9px] py-1.5 rounded font-bold border font-mono transition-colors cursor-pointer ${
                          businessType === type.key
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
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Average Customer Order Value (USD):</label>
                    <span className="text-xs text-amber-500 font-bold font-mono">${avgTicket.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={10} 
                    max={200} 
                    step={5}
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full accent-amber-500 h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$10 (Cafes/Bites)</span>
                    <span>$100 (Fine Lounges)</span>
                    <span>$200 (Catering Menu)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Target Monthly Marketing Budget (USD):</label>
                    <span className="text-xs text-brand-teal font-bold font-mono">${targetSpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={500} 
                    max={15000} 
                    step={250}
                    value={targetSpend}
                    onChange={(e) => setTargetSpend(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$500/mo</span>
                    <span>$5,000/mo</span>
                    <span>$15,000/mo</span>
                  </div>
                </div>

                {/* Simulated Results Indicators */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#02050b] p-3 rounded-lg border border-slate-900">
                    <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Baseline Sales Count:</span>
                    <span className="text-lg font-black text-slate-400 font-display block mt-1">{baseCustomers} <span className="text-[9px] text-slate-600 font-light font-sans">orders</span></span>
                    <span className="text-[8px] text-slate-500 block font-mono mt-0.5">At standard {currentConfig.baselineConv}% rate</span>
                  </div>
                  <div className="bg-[#05111a] p-3 rounded-lg border border-amber-500/20 animate-pulse">
                    <span className="text-[9px] text-amber-500 uppercase font-mono font-black block">AKGLS Expected Sales:</span>
                    <span className="text-lg font-black text-amber-500 font-display block mt-1">{akglsCustomersCheckins} <span className="text-[9px] font-light font-sans">guests</span></span>
                    <span className="text-[8px] text-slate-300 block font-mono mt-0.5">~{(currentConfig.uplift * 100).toFixed(0)}% growth index</span>
                  </div>
                </div>

                <div className="bg-[#03060c] rounded-xl p-3 border border-slate-900 text-center">
                  <span className="text-[9px] text-slate-500 font-mono uppercase block">Projected Customer Yield / ROI Model:</span>
                  <div className="flex justify-around items-center mt-2">
                    <div>
                      <span className="text-xs text-white block font-semibold">{clicks}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Web Clicks</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-amber-500 block font-semibold">${(generatedBillings / 1000).toFixed(0)}k</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Weekly Billings</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-teal block font-semibold">{computedRoiValue}x ROI</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Ad Spend Yield</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 text-center font-mono mt-3">
                Assumes localized user proximity density parameters and active reservations slots.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#04060a] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">F&B BRAND AUTHORITY INDEX</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted Restaurant Marketing Experts
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We align stunning visual branding, local map supremacy, and frictionless ordering menus to keep your tables occupied and kitchens busy.
            </p>
          </div>

          {/* Client Names Display Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14 items-center">
            {[
              "L'Aura Authentic Italian Osteria",
              "Pepper & Salt Cloud Kitchens",
              "The Hearth & Table Lounge",
              "Amber Brew coffee & Bakery",
              "Gourmet Grill Franchise QSR"
            ].map((firm, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-xl py-3.5 px-4 text-center font-mono font-bold text-xs text-slate-400 hover:text-white transition-all cursor-default"
              >
                🍳 {firm}
              </div>
            ))}
          </div>

          {/* Core Performance counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-amber-500 block">120,000+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Restaurant Leads & Customers</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Secured via direct local funnels</span>
            </div>

            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-teal block">140k+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Direct Online Food Orders</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Saving high merchant portal fees</span>
            </div>

            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 block">+190%</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Average Table Reservation Scale</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Documented across dining spots</span>
            </div>

            <div className="bg-[#06080e] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-amber-400 block">4,200+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Local Dining Keywords Ranked #1</span>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Evading global aggregator traps</span>
            </div>
          </div>

        </div>
      </section>

      {/* 📚 WHAT IS RESTAURANT DIGITAL MARKETING SECTION */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <UtensilsCrossed className="text-amber-500 w-3.5 h-3.5" />
                <span>The Direct Highway to Food Sales</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is Restaurant Digital Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Restaurant digital marketing is the strategic deployment of local search engine optimization, mobile-friendly menus, direct review generation campaigns, eye-catching social feeds, and smart AI query indexing to keep tables occupied and online orders flowing without relying heavily on high-commission delivery portals.
              </p>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                National food delivery platforms charge restaurants up to 30% per order while hiding customer data. Our approach redirects that valuable demand. Rather than allowing aggregators to colonize your neighborhood market, we optimize your Google Maps placement, run visual social ad networks, and install conversion-focused Web reservation triggers. This secures direct bookings that build long-term loyalty and maximize your bottom-line profitability.
              </p>

              {/* Graphic Flow Layout */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest block font-display">THE DIRECT DINING ACQUISITION SYSTEM</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  <div className="bg-[#070b13] rounded-xl p-3 border border-slate-900">
                    <span className="text-amber-500 font-mono font-bold text-xs block">STAGE 01</span>
                    <span className="text-xs font-semibold text-white block mt-1">Proximity Discovery</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Locals find your culinary listings on maps pack or viral social reels.</p>
                  </div>
                  <div className="bg-[#070b13] rounded-xl p-3 border border-slate-900">
                    <span className="text-amber-500 font-mono font-bold text-xs block">STAGE 02</span>
                    <span className="text-xs font-semibold text-white block mt-1">Instant Ordering</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Customers browse the web menu and complete orders with zero friction.</p>
                  </div>
                  <div className="bg-[#070b13] rounded-xl p-3 border border-slate-900">
                    <span className="text-amber-500 font-mono font-bold text-xs block">STAGE 03</span>
                    <span className="text-xs font-semibold text-white block mt-1">Loyalty Loop</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Direct customer details trigger automated SMS alerts, driving repeat visits.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual restaurant acquisition portal mockup */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#070a10] border border-slate-900 rounded-3xl p-6 relative shadow-2xl overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300" />
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-900 font-mono text-[10px] text-slate-500">
                  <span className="flex items-center gap-1.5"><Radio className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> Live Order Stream</span>
                  <span>Direct Dashboard</span>
                </div>

                <div className="space-y-3.5">
                  {[
                    { id: "#8291", items: "2x Woodfired Tartufo Pizza, 1x Caprese Salad", price: "$58.00", source: "Direct Web Store", time: "2 mins ago" },
                    { id: "#8290", items: "1x Ribeye Steak, 1x Truffle Fries, 1x Cabernet Bottle", price: "$115.00", source: "Table Reservation Pre-order", time: "11 mins ago" },
                    { id: "#8289", items: "3x Signature Avocado Sourdough, 3x Cold Brew Coffee", price: "$42.50", source: "Blogger Offer Code", time: "28 mins ago" }
                  ].map((order, index) => (
                    <div key={index} className="bg-[#030509] border border-slate-950 p-3 rounded-xl flex justify-between items-center hover:border-slate-800 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-white">{order.id}</span>
                          <span className="text-[8px] uppercase font-mono font-black text-brand-teal bg-brand-teal/10 px-1.5 py-0.5 rounded border border-brand-teal/20">{order.source}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 block font-light">{order.items}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-amber-500 font-bold block font-mono">{order.price}</span>
                        <span className="text-[8px] text-slate-600 block font-mono">{order.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-amber-500/5 rounded-xl p-3 border border-amber-500/10 text-center flex items-center justify-between gap-3">
                  <span className="text-[10px] text-slate-400 font-mono text-left block leading-tight">By driving orders directly through custom web funnels with no aggregators:</span>
                  <div className="text-right">
                    <span className="text-xs text-amber-500 block font-mono font-black">100% Margins</span>
                    <span className="text-[8px] text-slate-500 block font-mono">Commission Saved</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ SERVICE GRID LAYOUT */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">OUR SERVICE ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Restaurant Marketing Services
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We deploy holistic client retention models. Select a capability category to review its primary goals and tactical components:
            </p>
          </div>

          {/* Interactive tab headers for Service Grid */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 max-w-4xl mx-auto">
            {servicesCollection.map((srv, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTabIdx(idx)}
                className={`text-[10px] font-mono uppercase font-black py-2 px-4 rounded-xl border transition-colors cursor-pointer ${
                  activeTabIdx === idx
                    ? 'bg-amber-500 text-black border-amber-600'
                    : 'bg-[#070b13] border-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                {srv.title.split(" Services")[0].split(" for Restaurants")[0].split(" & ")[0]}
              </button>
            ))}
          </div>

          {/* Active Tab Details Viewer */}
          <div className="bg-[#070b13] border border-slate-900 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[70px] pointer-events-none" />
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full py-0.5 px-2.5 font-mono text-[9px] uppercase font-black">
                  {servicesCollection[activeTabIdx].badge}
                </span>
                <span className="text-slate-400 font-mono text-[10px] uppercase font-bold">AKGLS Standard Specifications</span>
              </div>

              <h3 className="text-2xl font-black font-display text-white leading-tight">
                {servicesCollection[activeTabIdx].title}
              </h3>

              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                {servicesCollection[activeTabIdx].desc}
              </p>

              {/* Service targets checklist */}
              <div className="space-y-2 pt-2">
                <label className="text-[9px] uppercase font-mono font-black text-slate-500 block">Deliverables Roadmap:</label>
                <div className="space-y-1.5">
                  {servicesCollection[activeTabIdx].deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="font-light">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tactical keywords/highlights block */}
            <div className="md:col-span-5 bg-[#03050a] border border-slate-950 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 uppercase font-black">
                <Target className="w-3.5 h-3.5 text-amber-500" /> Key Focus Keywords:
              </div>

              {servicesCollection[activeTabIdx].keywords ? (
                <div className="space-y-2">
                  <p className="text-[11px] text-slate-400 font-light leading-normal">
                    Target keyword structures built and optimized directly to trigger maps pack and list boxes:
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {servicesCollection[activeTabIdx].keywords?.map((k, kIdx) => (
                      <span 
                        key={kIdx} 
                        className="bg-amber-500/5 border border-amber-500/20 text-amber-300 font-mono font-bold text-[9px] py-1 px-2.5 rounded hover:border-amber-500/40 transition-colors cursor-default"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-slate-400 text-[11px] font-light leading-relaxed">
                  <p>Our focus targets proximity optimizations, localized density configurations, visual imagery sync channels, and seamless reservation flows across surrounding municipal postal zones.</p>
                  <div className="h-0.5 bg-slate-900 my-2" />
                  <p className="font-mono text-[10px] text-amber-400 uppercase font-bold">100% Compliant Tactics</p>
                </div>
              )}

              <div className="bg-amber-500/5 rounded-xl p-3 border border-amber-500/10 text-center">
                <span className="text-[9px] text-slate-400 font-mono block">Looking for a custom scope draft?</span>
                <a 
                  href="#restaurant-audit-section" 
                  className="text-[10px] text-amber-500 hover:underline uppercase tracking-wide font-mono font-extrabold mt-1 inline-block"
                >
                  Generate Audit Analysis →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🍽️ FOOD BUSINESS WE WORK WITH */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">INDUSTRIES AND CONCEPTS WE SERVE</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Food Businesses We Work With
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We design specialized client acquisition paths that match your concept, scale, and operational style perfectly:
            </p>
          </div>

          {/* Core concept cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {servedSegments.map((seg, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-2xl p-5 hover:border-slate-800 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-mono font-black group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    {idx + 1}
                  </div>
                  <h4 className="text-white font-semibold text-xs font-display">
                    {seg.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 group-hover:text-slate-400 font-light leading-normal">
                    {seg.desc}
                  </p>
                </div>
                <div className="pt-2 text-right">
                  <span className="text-[8px] font-mono text-slate-700 group-hover:text-amber-500/40 uppercase font-black select-none">Active Model</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🧭 RESTAURANT ROADMAP PROCESS */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-14">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">ESTABLISHED PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Restaurant Marketing Process
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Our systematic approach ensures we capture maximum customer numbers with minimal ad budget waste:
            </p>
          </div>

          {/* Sequential horizontal steps */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
            {processFlowSteps.map((stp, idx) => (
              <div key={idx} className="bg-[#070b13] border border-slate-900 rounded-2xl p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 group-hover:from-amber-500 group-hover:to-orange-500 transition-all" />
                <span className="text-4xl font-black text-slate-800 font-mono block select-none group-hover:text-amber-500/20 transition-colors">
                  {stp.num}
                </span>
                <h4 className="text-white font-bold text-xs font-display mt-2">
                  {stp.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-light leading-normal mt-1">
                  {stp.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📈 BENEFITS GRID PANEL */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">PERFORMANCE BENEFITS</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white leading-tight">
                Why Restaurants Need Digital Marketing
              </h2>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                Traditional offline strategies are no longer sufficient to secure bookings. Debranding, hyperlocal optimizations, and structured local SEO elements are critical to securing a steady stream of dining reservations.
              </p>
              <div className="bg-amber-500/5 rounded-xl p-4 border border-amber-500/10">
                <span className="text-[11px] text-amber-500 font-mono uppercase font-black block">AKGLS GUARANTEED EXCELLENCE</span>
                <p className="text-[10px] text-slate-400 leading-normal font-light mt-1">
                  We align your organic assets, menu databases, and visual imagery with core algorithmic compliance requirements, driving direct signed bookings.
                </p>
              </div>
            </div>

            {/* Beautiful benefits checklist grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresBenefitsGrid.map((bn, idx) => (
                <div key={idx} className="bg-[#070b13] border border-slate-900 rounded-xl p-4 flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold text-xs font-display">{bn.title}</h4>
                    <p className="text-[11px] text-slate-500 font-light leading-normal">{bn.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 🗺️ LOCAL RESTAURANT SEO & GOOGLE MAPS SECTION */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interactive Local maps pack layout simulator */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-[#070b13] border border-slate-900 rounded-2.5xl p-5 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 block" />
                  </div>
                  <span className="font-mono text-[9px] uppercase font-black text-slate-400">Google Local 3-Pack Simulator</span>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-mono font-black text-slate-400 block mb-1">Select Dining Phrase Query:</label>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { key: 'near_me', label: 'Local Best' },
                      { key: 'fine_dining', label: 'Fine Dining' },
                      { key: 'best_takeout', label: 'Takeout Pro' }
                    ].map((btn) => (
                      <button
                        key={btn.key}
                        onClick={() => setSelectedKeywordQuery(btn.key as any)}
                        className={`text-[9px] font-mono font-bold py-1.5 rounded transition-colors border cursor-pointer ${
                          selectedKeywordQuery === btn.key
                            ? 'bg-amber-500/20 border-amber-500 text-white'
                            : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#020408] rounded-xl p-3 border border-slate-950 mt-2 space-y-2">
                    <div>
                      <span className="text-[9px] uppercase font-mono font-black text-slate-500 block">User Search Query:</span>
                      <p className="text-xs text-slate-300 font-light italic">"{keywordsData[selectedKeywordQuery].searchQuery}"</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-900">
                      <div>
                        <span className="text-[8px] uppercase font-mono font-black text-red-500/70 block">Unoptimized Baseline:</span>
                        <p className="text-[9px] text-slate-500 leading-snug font-light">{keywordsData[selectedKeywordQuery].baselineRank}</p>
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-mono font-black text-brand-teal block">AKGLS Position:</span>
                        <p className="text-[9px] text-amber-500 leading-snug font-bold">{keywordsData[selectedKeywordQuery].akglsRank}</p>
                      </div>
                    </div>

                    <div className="bg-amber-500/5 rounded p-2.5 border border-amber-500/10 text-[10px] leading-relaxed">
                      <span className="text-[8px] uppercase font-mono font-black text-slate-400 block mb-1">Impact Analytics:</span>
                      <span className="text-white font-medium block">{keywordsData[selectedKeywordQuery].estimatedImpact}</span>
                      <p className="text-[9px] text-slate-500 font-light mt-1">{keywordsData[selectedKeywordQuery].enhancements}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">LOCAL RANGE OPTIMIZATION</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Dominate Local Restaurant Searches & Google Maps
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                When diners want local cuisines, they search for immediate options nearby. If your restaurant does not show up in the top Google Map box, those customers will book tables with competitors.
              </p>
              <div className="space-y-3 text-slate-300 text-xs">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Setup of precise physical coordinate mapping spanning up to 5 surrounding postal zip-codes</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Deployment of dynamic Menu schemas that integrate price tags and coordinates directly</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Automated reputation collection tools that invite positive reviewers to submit feedback instantly</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📲 ONLINE ORDER & RESERVATION ACQUISITION PANEL */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center col-reverse">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">DIRECT ORDER DRIVER</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Increase Online Orders & Table Reservations
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Direct client acquisition bypasses expensive delivery aggregators. We construct digital pathways that connect searchers directly with your operational desks, retaining 100% of your margins.
              </p>

              {/* Conversion indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#070b13] p-4 rounded-xl border border-slate-900">
                  <span className="text-amber-500 font-mono font-bold text-lg block">92%</span>
                  <p className="text-[10px] text-slate-400 font-light mt-1">Reduction in multi-commission fees from third-party delivery services</p>
                </div>
                <div className="bg-[#070b13] p-4 rounded-xl border border-slate-900">
                  <span className="text-brand-teal font-mono font-bold text-lg block">2.5x</span>
                  <p className="text-[10px] text-slate-400 font-light mt-1">Average increase in weekday dinner table reservation numbers</p>
                </div>
              </div>
            </div>

            {/* Visual dashboard display of customer pipelines */}
            <div className="lg:col-span-6 bg-[#070b13] border border-slate-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] pointer-events-none" />
              <div className="flex justify-between items-center pb-3 border-b border-slate-900 mb-5">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 font-bold">
                  <Compass className="w-3.5 h-3.5 text-amber-500" /> Dining Traffic Routing Pools
                </div>
                <span className="text-[8px] uppercase font-mono font-black text-brand-teal">ACTIVE SYSTEMS</span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="bg-[#030509] p-3 rounded-lg border border-slate-950 flex justify-between items-center">
                  <span className="font-medium font-mono text-[12px]">🎯 Google Maps Traffic Routing</span>
                  <span className="text-[10px] text-amber-500 font-bold font-mono">35% volume</span>
                </div>
                <div className="bg-[#030509] p-3 rounded-lg border border-[#000]/10 flex justify-between items-center">
                  <span className="font-medium font-mono text-[12px]">📸 Instagram Visual Content Filters</span>
                  <span className="text-[10px] text-amber-500 font-bold font-mono">25% volume</span>
                </div>
                <div className="bg-[#030509] p-3 rounded-lg border border-[#000]/10 flex justify-between items-center">
                  <span className="font-medium font-mono text-[12px]">⚙️ Native Search Engine Rankings</span>
                  <span className="text-[10px] text-amber-500 font-bold font-mono">20% volume</span>
                </div>
                <div className="bg-[#030509] p-3 rounded-lg border border-[#000]/10 flex justify-between items-center">
                  <span className="font-medium font-mono text-[12px]">🤖 Generative AI Referencing Index</span>
                  <span className="text-[10px] text-amber-500 font-bold font-mono">12% volume</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤖 AI-POWERED RESTAURANT MARKETING (GEO) */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interactive GEO Prompt simulation */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="bg-[#070b13] border border-slate-900 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-4">
                  <span className="font-mono text-[9px] uppercase font-black text-slate-400 flex items-center gap-1.5">
                    <Sparkle className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '4s' }} /> Conversational GEO Indexer
                  </span>
                  <span className="bg-amber-500/15 text-amber-400 text-[8px] font-mono px-2 py-0.5 rounded border border-amber-500/20">ChatGPT & Gemini API READY</span>
                </div>

                <form onSubmit={triggerAISimulation} className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase font-mono font-black text-slate-500 block mb-1">Enter Target Culinary Vibe/Concept Prompt:</label>
                    <textarea
                      rows={2}
                      value={cuisineQuery}
                      onChange={(e) => setCuisineQuery(e.target.value)}
                      className="w-full bg-[#030509] border border-slate-900 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none font-mono"
                      placeholder="e.g. delicious woodfired napoletana pizza having organic locally sourced ingredients..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSimulatingAI}
                    className="w-full bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all font-mono cursor-pointer flex items-center justify-center gap-2 disabled:opacity-55"
                  >
                    {isSimulatingAI ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Scanning food indices...
                      </>
                    ) : (
                      "Simulate AI Visibility Query"
                    )}
                  </button>
                </form>

                {/* Simul output box */}
                <div className="bg-[#020408] rounded-2xl p-4 border border-slate-950 mt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase font-mono font-black text-slate-500 block">Simulated Recommendation Output:</span>
                    <span className="text-[9px] font-mono text-cyan-400 font-bold bg-cyan-900/10 border border-cyan-800/20 py-0.5 px-1.5 rounded">
                      GEO placement index: {aiSimulationOutput.indexScore}%
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 font-light leading-relaxed font-mono">
                    {aiSimulationOutput.recommendedResult}
                  </div>

                  <div className="pt-2 border-t border-slate-900">
                    <span className="text-[8px] uppercase font-mono font-black text-slate-500 block mb-1">Entity References Cites:</span>
                    <div className="flex flex-wrap gap-1">
                      {aiSimulationOutput.references.map((rf, rIdx) => (
                        <span key={rIdx} className="bg-slate-900 border border-slate-800 text-slate-400 text-[8px] font-mono py-0.5 px-1.5 rounded">
                          🔗 {rf}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">GENERATIVE SEARCH SECURITY</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                AI-Powered Marketing Solutions for Restaurants
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                As millions of users migrate from standard layouts to conversational searches on platforms such as ChatGPT, Perplexity, Siri, and Gemini, standard SEO lists must evolve.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We utilize Generative Engine Optimization (GEO) tactics. By embedding clear, schema-aligned menu item databases, secure local blogger co-citations, and structural culinary codes directly within your files, we ensure conversational models highlight your restaurant coordinates first.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 💻 HIGH-CONVERTING RESTAURANT WEBSITE DESIGN */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">PREMIUM STOREFRONT DESIGN</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                High-Converting Restaurant Website Design
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Your digital storefront represents the absolute center of your restaurant’s branding. A clunky menu PDF or slow-loading platform will lose hungry diners instantly.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We craft beautiful, mobile-first websites engineered strictly to optimize customer conversions. By establishing fast menu filters, sleek photo galleries of signature dishes, responsive online reservation portals, and instant WhatsApp chat pathways, we transform lookup clicks into confirmed bookings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  <span>Sleek, lightweight mobile menus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  <span>Interactive reservation triggers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  <span>Frictionless WhatsApp ordering setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  <span>Optimized local schema structures</span>
                </div>
              </div>
            </div>

            {/* Simulated UI dashboard mockup */}
            <div className="lg:col-span-6">
              <div className="bg-[#070b13] border border-slate-900 rounded-3xl p-5 relative shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 font-mono text-[9px] text-slate-500">
                  <span>Interactive Menu Preview</span>
                  <span className="text-brand-teal">ACTIVE VIEW</span>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Flame-Grilled Tartufo Steak", desc: "Aged Wagyu loin served with fresh summer black truffles and organic sea salt", price: "$65.00" },
                    { title: "Napoletana Fig & Prosciutto Woodfired Pizza", desc: "Sourdough crust layered with artisanal wild figs, aged prosciutto, and fresh burrata", price: "$24.50" },
                    { title: "Signature Matcha Rose Cold Foam Brew", desc: "Japanese shade-grown organic matcha layered with cold brew coffee and light rose cream", price: "$8.50" }
                  ].map((dish, dIdx) => (
                    <div key={dIdx} className="bg-[#02050a] p-3 rounded-xl border border-slate-950 flex justify-between items-start hover:border-slate-850 transition-colors">
                      <div className="space-y-1 text-left max-w-[80%]">
                        <span className="text-xs font-bold text-white block">{dish.title}</span>
                        <p className="text-[10px] text-slate-500 font-light leading-normal">{dish.desc}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-500">{dish.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-amber-500/5 rounded-xl p-3.5 border border-amber-500/15 flex items-center justify-between">
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] text-slate-400 block font-light">Table Availability:</span>
                    <span className="text-xs text-white font-mono font-bold block">🚨 Only 3 tables left tonight</span>
                  </div>
                  <a 
                    href="#restaurant-audit-section" 
                    className="bg-amber-600 hover:bg-amber-500 text-black font-black text-[9px] uppercase tracking-wider py-2 px-4 rounded-lg font-mono cursor-pointer transition-colors"
                  >
                    Reserve Table Instant
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏆 SUCCESS STORIES / CASE STUDIES */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">DOCUMENTED VISUAL METRICS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Restaurant Marketing Success Stories
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We focus strictly on signed reservations and organic ticket growth:
            </p>
          </div>

          {/* Interactive slider */}
          <div className="bg-[#070b13] border border-slate-900 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] pointer-events-none" />
            
            {/* Case study headers */}
            <div className="flex gap-3 border-b border-slate-900 pb-4 mb-6">
              {successStories.map((st, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveCaseIdx(sIdx)}
                  className={`text-[10px] font-mono uppercase font-black py-2 px-4 rounded-xl border transition-colors cursor-pointer ${
                    activeCaseIdx === sIdx
                      ? 'bg-amber-500/20 border-amber-500 text-white animate-pulse'
                      : 'bg-slate-950 border-slate-950 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {st.restaurant.split(" ")[0]} Project
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] text-amber-400 font-mono tracking-wider font-extrabold uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {successStories[activeCaseIdx].restaurant} Case Study
                </span>
                
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase font-black text-slate-500 block">THE CHALLENGE:</span>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {successStories[activeCaseIdx].issue}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase font-black text-slate-500 block">OUR TACTICAL STRATEGY:</span>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {successStories[activeCaseIdx].strategy}
                  </p>
                </div>
              </div>

              {/* Metrics visual display */}
              <div className="lg:col-span-5 bg-[#030509] border border-slate-900 rounded-2xl p-5 space-y-4 shadow-xl">
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 font-black uppercase">
                  <BarChart3 className="w-4 h-4 text-amber-500" /> Monitored Growth Metrics
                </span>

                <div className="space-y-3.5">
                  {successStories[activeCaseIdx].results.map((r, rIdx) => (
                    <div key={rIdx} className="border-b border-slate-900 pb-2.5 last:border-0 last:pb-0 text-left">
                      <span className="text-[9px] font-mono text-slate-500 uppercase block">{r.key}</span>
                      <span className="text-base font-black text-amber-500 font-display block mt-0.5">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ❓ WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">OUR EXCLUSIONS AND ADVANTAGES</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Why Choose AKGLS Group for Restaurant Marketing?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We combine in-depth food industry knowledge, compliant map pack configurations, and advanced local advertising solutions:
            </p>
          </div>

          {/* Cards list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsCards.map((usp, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-2xl p-5 space-y-2 hover:border-slate-800 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-xs font-display">
                  {usp.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛠️ TECHNOLOGY WE USE */}
      <section className="bg-[#04060a] py-16 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">TECHNICAL UTILITY STACK</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Tools & Technologies We Use
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We leverage premium localized trackers, advertising consoles, and reputation systems directly:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketingToolsList.map((tl, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-xl p-4 text-left space-y-1 hover:border-slate-800 transition-colors"
              >
                <span className="text-white font-bold text-xs font-mono block">🛠️ {tl.name}</span>
                <span className="text-[10px] text-slate-500 block leading-normal">{tl.type}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🏷️ PACKAGES SECTION */}
      <section className="bg-[#020408] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">FLEXIBLE BLUEPRINT SOLUTIONS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Flexible Restaurant Marketing Packages
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Select an established roadmap designed to match your scale, concept, and target zip codes:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packagesLayout.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#070b13] border rounded-2.5xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-200 ${
                  pkg.current 
                    ? 'border-amber-500/50 shadow-2xl scale-[1.01]' 
                    : 'border-slate-900 hover:border-slate-800'
                }`}
              >
                {pkg.current && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-black font-mono font-black text-[8px] uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-md">
                    Recommended Model
                  </div>
                )}

                <div className="space-y-5 text-left">
                  <div className="space-y-1">
                    <h4 className="text-white font-black text-lg font-display">{pkg.name}</h4>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">{pkg.desc}</p>
                  </div>

                  <div className="border-y border-slate-900 py-3 flex justify-between items-baseline">
                    <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">Monthly Retainer Base:</span>
                    <span className="text-2xl font-black text-amber-500 font-mono">{pkg.price}</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-mono font-black text-slate-500 block font-display">Deliverables Scope Includes:</label>
                    <div className="space-y-1.5 text-slate-300 text-xs">
                      {pkg.features.map((ft, fIdx) => (
                        <div key={fIdx} className="flex gap-2 items-start text-slate-400 hover:text-slate-200 transition-colors">
                          <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="font-light">{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="#restaurant-audit-section"
                    className={`w-full py-3 rounded-xl font-mono text-center font-black text-xs uppercase tracking-wider transition-all inline-block cursor-pointer ${
                      pkg.current
                        ? 'bg-amber-600 hover:bg-amber-500 text-black font-extrabold shadow-lg shadow-amber-600/10'
                        : 'bg-slate-950 border border-slate-900 text-slate-300 hover:text-white'
                    }`}
                  >
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ❓ FAQS SECTION */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">ANSWERS FROM GENERAL COUNSEL</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Frequently Asked Questions About Restaurant Marketing
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We explain local search optimization, review policy guidelines, ad bidding strategies, and AI placement models:
            </p>
          </div>

          <div className="space-y-3">
            {faqItemsList.map((fq, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-4 px-5 text-left font-bold text-xs md:text-sm text-white hover:text-amber-500 font-display transition-colors cursor-pointer"
                >
                  <span>{fq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaqIdx === idx ? 'transform rotate-180 text-amber-500' : ''}`} />
                </button>

                {openFaqIdx === idx && (
                  <div className="px-5 pb-4 text-slate-400 text-xs md:text-sm font-light leading-relaxed border-t border-slate-950 pt-2.5">
                    {fq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛡️ FREE RESTAURANT MARKETING AUDIT SECTION */}
      <section className="bg-[#020408] py-24 text-left relative overflow-hidden" id="restaurant-audit-section">
        <div className="absolute top-1/4 left-1/4 w-[380px] h-[380px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#070b13] border border-slate-900 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2.5xl grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">COMPREHENSIVE LOCAL DIAGNOSIS</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Get a Free Restaurant Marketing Audit
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Connect our regional audit team with your website domain. We run physical diagnostics maps pack lookups, check citation consistencies, and test reservation and delivery speed:
              </p>

              {/* Scope includes checklist */}
              <div className="space-y-3.5 pt-2">
                <span className="text-[9px] uppercase font-mono font-black text-slate-500 block tracking-widest">Audit Scope Includes:</span>
                <div className="space-y-2 text-slate-300 text-xs">
                  <div className="flex gap-2.5 items-center">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>In-depth organic search footprint & keyword rank review</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>Google Map Proximity and review velocity audit</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>Mobile usability, layout loading speeds, and menu schema checks</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>ChatGPT & Gemini Conversational index calculations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Audit Form */}
            <div className="lg:col-span-6 relative">
              <form onSubmit={executeAuditCrawler} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] uppercase font-mono font-black text-slate-400 block mb-1.5">Restaurant Name <span className="text-amber-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={auditParams.restaurantName}
                      onChange={(e) => setAuditParams({...auditParams, restaurantName: e.target.value})}
                      className="w-full bg-[#030509] border border-slate-900 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. L'Aura Osteria"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-mono font-black text-slate-400 block mb-1.5">Website URL (Optional)</label>
                    <input
                      type="url"
                      value={auditParams.websiteUrl}
                      onChange={(e) => setAuditParams({...auditParams, websiteUrl: e.target.value})}
                      className="w-full bg-[#030509] border border-slate-900 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. https://yoursite.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] uppercase font-mono font-black text-slate-400 block mb-1.5">Business Location <span className="text-amber-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={auditParams.location}
                      onChange={(e) => setAuditParams({...auditParams, location: e.target.value})}
                      className="w-full bg-[#030509] border border-slate-900 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. Chicago, IL"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-mono font-black text-slate-400 block mb-1.5">Restaurant Type</label>
                    <select
                      value={auditParams.restaurantType}
                      onChange={(e) => setAuditParams({...auditParams, restaurantType: e.target.value})}
                      className="w-full bg-[#030509] border border-slate-900 rounded-xl p-3 text-xs text-white hover:border-slate-800 focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value="Casual Family">Casual Family</option>
                      <option value="Fine Dining">Fine Dining</option>
                      <option value="Cloud Kitchen">Cloud Kitchen</option>
                      <option value="Cafe / Bakery">Cafe / Bakery</option>
                      <option value="Pub / Lounge">Pub / Lounge</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] uppercase font-mono font-black text-slate-400 block mb-1.5">Professional Email <span className="text-amber-500">*</span></label>
                    <input
                      type="email"
                      required
                      value={auditParams.email}
                      onChange={(e) => setAuditParams({...auditParams, email: e.target.value})}
                      className="w-full bg-[#030509] border border-slate-900 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. partner@yoursite.com"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-mono font-black text-slate-400 block mb-1.5">Contact Phone</label>
                    <input
                      type="tel"
                      value={auditParams.phone}
                      onChange={(e) => setAuditParams({...auditParams, phone: e.target.value})}
                      className="w-full bg-[#030509] border border-slate-900 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. +1 555-019-2834"
                    />
                  </div>
                </div>

                <div className="flex gap-2.5 items-start py-1">
                  <input
                    type="checkbox"
                    id="legal-compliance-agree"
                    checked={auditParams.agreed}
                    onChange={(e) => setAuditParams({...auditParams, agreed: e.target.checked})}
                    className="mt-0.5 accent-amber-500 cursor-pointer"
                  />
                  <label htmlFor="legal-compliance-agree" className="text-[10px] text-slate-500 leading-normal font-light">
                    I grant AKGLS audit engineers permission to inspect public map registries and code repositories. We protect your privacy strictly under NDAs.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={crawlingStatus === 'running'}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all font-mono cursor-pointer flex items-center justify-center gap-2"
                >
                  {crawlingStatus === 'running' ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Scanning Restaurant Coordinates: {progressRatio}%
                    </>
                  ) : (
                    "Trigger Proximity Audit Scan"
                  )}
                </button>
              </form>

              {/* Progress feedback block */}
              {crawlingStatus !== 'idle' && (
                <div className="bg-[#020408] rounded-2xl p-4 border border-slate-950 mt-4 space-y-2.5 text-left transition-all">
                  <div className="flex justify-between items-center text-[9px] font-mono font-black text-slate-500">
                    <span>Audit Pipeline Feedback:</span>
                    <span className="text-amber-500 uppercase">{crawlingStatus}</span>
                  </div>

                  <div className="w-full bg-slate-950 rounded-full h-1 border border-slate-900 overflow-hidden">
                    <div 
                      className="bg-amber-500 h-full transition-all duration-300"
                      style={{ width: `${progressRatio}%` }}
                    />
                  </div>

                  <p className="font-mono text-[9px] text-amber-500/80 leading-normal leading-relaxed">
                    ⚙️ {crawlingLogs}
                  </p>

                  {crawlingStatus === 'completed' && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-center space-y-1.5">
                      <span className="text-xs font-bold text-white block">✅ Comprehensive Diagnosis Complete!</span>
                      <p className="text-[10px] text-slate-400 font-light leading-relaxed">
                        We have prepared your location's Map Pack analysis and competitive margin reports. Our F&B growth consultant will contact you at <strong>{auditParams.email}</strong> to review optimizations.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 📚 READ HELPFUL DIGITAL MARKETING ARTICLES */}
      <section className="bg-[#04060a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Helpful food marketing guides</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Latest Food Business Insights
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Explore our latest tactical columns detailing Google local map algorithms and F&B brand development guidelines:
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ultimate Restaurant Local SEO Guide (Dominating Local Map Packs)",
                desc: "Discover how to optimize your location proximity signals, format menu items with schema tags, and rank first on Google Maps lists naturally.",
                readTime: "8 mins read"
              },
              {
                title: "How Visual Instagram Reels Drive Immediate Table Covers",
                desc: "Learn our precise recipe for creating high-converting short-form videos that lead to instant reservations without commission costs.",
                readTime: "6 mins read"
              },
              {
                title: "AI SEO for the F&B Industry: Surviving ChatGPT Searches",
                desc: "A deep dive into Generative Engine Optimization (GEO) tactics designed to keep your cafes and fine dining rooms mentioned as primary recommendations.",
                readTime: "11 mins read"
              }
            ].map((art, idx) => (
              <div 
                key={idx} 
                className="bg-[#070b13] border border-slate-900 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between hover:border-slate-800 transition-colors group"
              >
                <div className="space-y-2">
                  <span className="text-[9px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 py-0.5 px-2 rounded-full inline-block font-extrabold">Industry Insights</span>
                  <h4 className="text-white font-bold text-xs md:text-sm font-display leading-snug group-hover:text-amber-500 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    {art.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2.5 border-t border-slate-950">
                  <span className="font-mono text-[9px] text-slate-600 font-bold">{art.readTime}</span>
                  <span className="text-[10px] text-amber-500 font-mono font-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Read Article <ChevronRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 FINAL CALL TO ACTION */}
      <section className="bg-[#020408] py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#152033_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-600/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 text-amber-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider animate-pulse">
            ⚖️ Start Scaling Your Tables Compliantly
          </span>

          <h2 className="text-3.5xl sm:text-4.5xl md:text-5xl font-black font-display text-white tracking-tight leading-[1.08]">
            Ready to Grow Your Restaurant Business?
          </h2>

          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Partner with AKGLS's F&B marketing team. We build robust direct booking systems, optimize local map coordinates, and lower delivery commission fees.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a 
              href="#restaurant-audit-section"
              className="bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
            >
              Book Free Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="referrer noopener"
              className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all inline-block font-mono cursor-pointer"
            >
              Chat on WhatsApp Messenger
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-[10px] text-slate-500 font-mono uppercase font-black pt-4">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-amber-500" /> Restaurant Marketing Experts</span>
            <span>|</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500" /> Transparent Reporting</span>
            <span>|</span>
            <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-amber-500" /> ROI-Focused Campaigns</span>
          </div>
        </div>
      </section>

      {/* 📱 STICKY FLOATING CTA BAR FOR SMALL DEVICES */}
      <div className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6">
        <a 
          href="#restaurant-audit-section"
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-black font-black font-mono text-[10px] sm:text-xs uppercase tracking-wider py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-2 transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          <UtensilsCrossed className="w-3.5 h-3.5 text-black" /> Get Free Audit & Plan
        </a>
      </div>
    </>
  );
}

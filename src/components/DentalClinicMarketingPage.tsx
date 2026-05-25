import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, ChevronDown, Check, 
  Send, Shield, Laptop, RefreshCw, Eye, Award, DollarSign, Calendar, MapPin,
  MessageSquare, StarHalf, Play, BarChart3, TrendingUp, ThumbsUp,
  Stethoscope, Zap, Bell, CheckSquare, Dumbbell, ShieldAlert, BadgeInfo
} from 'lucide-react';

interface DentalClinicMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const dentalSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hyperpure Dental Clinic Marketing & Local Patient Acquisition",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global/Regional",
  "description": "Premium patient generation sequences, regional maps Optimization, hyper-targeted local Ads, and high-conversion UX websites for advanced clinics.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "1200",
    "highPrice": "8500"
  }
}`,
  appointmentSchema: `{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Elite Dental Center",
  "image": "https://akglsgroup.com/images/dental-clinic.jpg",
  "telePhone": "+1-315-902-1234",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Medical Plaza Suite 20",
    "addressLocality": "Syracuse",
    "addressRegion": "NY",
    "postalCode": "13210",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.0481",
    "longitude": "-76.1474"
  },
  "appointmentRequired": "true"
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does local SEO differ for dental practices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dental searches are highly local with immediate treatment intent. Winning relies on Google Map Pack positioning, micro-regional citation triggers, and schema structured local address coordinates."
      }
    },
    {
      "@type": "Question",
      "name": "How long does dental SEO take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically, map rankings improve in 30-60 days. Comprehensive organic authority takes 90-120 days to mature fully."
      }
    }
  ]
}`
};

export default function DentalClinicMarketingPage({ onBackToHome, openProposalForm }: DentalClinicMarketingPageProps) {
  const CONTACT_NUMBER = '+1 (315) 902-1234';
  const WHATSAPP_LINK = 'https://wa.me/13159021234';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Dental Clinic Marketing Services | Dental SEO Agency | AKGLS Group";
  }, []);

  // ROI Calculator States
  const [adSpend, setAdSpend] = useState<number>(4000);
  const [patientValue, setPatientValue] = useState<number>(1500); // LTV
  const [conversionRate, setConversionRate] = useState<number>(4.0); // % click to patient

  // Derived Values
  const cpc = 3.90; // Avg dental click cost
  const estimatedClicks = Math.floor(adSpend / cpc);
  const estimatedNewPatients = Math.max(1, Math.floor(estimatedClicks * (conversionRate / 100)));
  const expectedRevenue = estimatedNewPatients * patientValue;
  const netROI = expectedRevenue - adSpend;
  const roiPercentage = adSpend > 0 ? Math.floor((netROI / adSpend) * 100) : 0;

  // Active service tab
  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);
  
  // Custom specialties filter
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");

  // Active Case Study Tab
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);

  // Schema copying
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // FAQ Interactive
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // AI GEO Interactive Simulator Query
  const [aiSearchQuery, setAiSearchQuery] = useState<string>("Who is the most reliable dental implant specialist in Syracuse?");
  const [aiTyping, setAiTyping] = useState<boolean>(false);
  const [aiAnswer, setAiAnswer] = useState<string>("Based on clinic credentials, dental implant success rate, and authentic maps proximity data: **Elite Dental Center** stands out. They possess digital surgical guides, a 99.1% implant survival score, over 420 local 5-star patient reviews, and verified board certified prosthodontists on site.");

  // Audit form states
  const [auditForm, setAuditForm] = useState({
    clinicName: '',
    websiteUrl: '',
    location: '',
    email: '',
    phone: '',
    servicesOffered: 'Implant & Cosmetic Dentistry',
    agreed: true
  });
  const [scanningStatus, setScanningStatus] = useState<'idle' | 'scanning' | 'completed'>('idle');
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanDetails, setScanDetails] = useState<string>("Ready to analyze website vectors");

  const runAuditScan = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.clinicName || !auditForm.email) return;
    setScanningStatus('scanning');
    setScanProgress(5);
    setScanDetails("Initializing organic proxy crawlers...");

    const intervals = [
      { p: 24, t: "Extracting Google Maps Pack Coordinates for location..." },
      { p: 48, t: "Scanning competitor density index & schema payloads..." },
      { p: 72, t: "Testing core web vitals and mobile scheduling speed..." },
      { p: 95, t: "Calibrating estimated high-value patient opportunities..." },
      { p: 100, t: "Practice report generation complete!" }
    ];

    intervals.forEach((step, idx) => {
      setTimeout(() => {
        setScanProgress(step.p);
        setScanDetails(step.t);
        if (step.p === 100) {
          setScanningStatus('completed');
        }
      }, (idx + 1) * 850);
    });
  };

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Chat notification bubble
  const [showLiveChat, setShowLiveChat] = useState<boolean>(true);

  const dentalServices = [
    {
      id: "seo",
      title: "Dental SEO Services",
      tag: "CORE ACQUISITION",
      icon: Search,
      brief: "Transform your search posture into a non-stop stream of new organic patients. High-performance keyword targeting and robust content grids designed directly for clinical queries.",
      bullets: [
        "Specialized dental keyword mapping (e.g., 'root canal therapist near me', 'emergency dentist Syracuse')",
        "Comprehensive dental service pages structuring to target high-intent procedures",
        "Deep semantic medical content built using certified medical terminology templates",
        "On-page schema layout injection to fuel quick, high-conversion answers"
      ],
      keywords: ["Dentist near me", "Best dental clinic", "Teeth whitening", "Implant dentist NY"]
    },
    {
      id: "google-ads",
      title: "Google Ads & PPC for Dentists",
      tag: "IMMEDIATE APPOINTMENTS",
      icon: DollarSign,
      brief: "Launch surgical local search ads that display at the very top of results when active pain triggers click actions. Complete hyper-local geotargeting with absolute conversion control.",
      bullets: [
        "Call-only mobile ad campaigns configured to bypass traditional landing page friction",
        "Negative keyword lists to prevent wasted spend on non-revenue medical searches",
        "Dynamic location extensions triggering Google Maps direction coordinates directly",
        "HIPAA-compliant and secure post-click conversion tracking pipelines"
      ],
      keywords: ["Emergency dentist open now", "Invisalign cost", "Immediate dental implant appointments"]
    },
    {
      id: "local-seo",
      title: "Local SEO & Google Maps ",
      tag: "MAPS PACK DOMINANCE",
      icon: MapPin,
      brief: "Own the top spots in your local Google Maps 3-Pack. We optimize your local listings, reviews velocity, and geographical citations to capture the highest share of map searchers.",
      bullets: [
        "Google Business Profile (GBP) deep optimization, photos audit, and service hours sync",
        "Automated review collection triggers engineered to target recently discharged high-satisfaction patients",
        "Geographical citation alignment across 80+ high-authority diagnostic networks",
        "Geotargeted localized address coordinates schema matching for micro-neighbourhood packs"
      ],
      keywords: ["Dental implants near me", "Emergency partial root canal map", "Top cosmetic clinic nearby"]
    },
    {
      id: "web-design",
      title: "High-Conversion Dental Web Design",
      tag: "UX ARCHITECTURE",
      icon: Laptop,
      brief: "Your website is your online front door. We build beautiful, lightning-fast, mobile-first medical websites designed with easy-to-use modern appointment bookings.",
      bullets: [
        "Lightweight interfaces that clock perfect score indexes under Google Core Web Vitals",
        "Direct API integrations with dental management software (Rentrix, Dentrix, Open Dental, Modento)",
        "Stellar custom procedure before-and-after interactive slider widgets",
        "Frictionless one-click mobile-friendly emergency dialer configurations"
      ],
      keywords: ["Secure patient registration portal", "Schedule virtual consult", "Dentist office appointment card"]
    },
    {
      id: "reputation",
      title: "Online Reputation Management",
      tag: "PATIENT TRUST",
      icon: Star,
      brief: "Shield your clinical authority and build massive trust. We establish continuous reviews acquisition pipelines and monitor platforms to defend your practice reviews index.",
      bullets: [
        "Automated direct SMS request pipelines triggering 2-click patient feedback collections",
        "Smart templates assisting front-desk receptionists in secure review response protocols",
        "Rapid diagnostic detection for negative spam review containment and legal appeals",
        "Cross-channel sync of patient testimonials to Google, Yelp, Healthgrades, and Facebook"
      ],
      keywords: ["Top rated dentist reviews", "Elite dental patient testimonials", "Patient feedback index"]
    },
    {
      id: "social",
      title: "Social Media & Video Engagement",
      tag: "BRAND AUTHORITY",
      icon: MessageSquare,
      brief: "Connect with patients visually. We engineer professional video concepts, patient education loops, and clinic aesthetic transformation results that build community.",
      bullets: [
        "Engaging cosmetic video sequences optimized for Instagram Reels and TikTok algorithms",
        "Patient testimonial stories highlighting life-changing orthotic and aesthetic restorations",
        "Educational medical posts that demystify implant surgery, veneers, and teeth cleanings",
        "Paid target retargeting ads displaying warm clinic walkthrough tours to local website viewers"
      ],
      keywords: ["Smile transformation before after", "Syracuse dentist TikTok video", "Meet the dental staff reels"]
    },
    {
      id: "ai-seo",
      title: "AI SEO, GEO & AI Assistant Nodes",
      tag: "NEXT-GEN READY",
      icon: Bot,
      brief: "Position your practice to be the sole clinic recommended by generative AI systems like Gemini, ChatGPT Search, Apple Intelligence, and Perplexity.",
      bullets: [
        "Optimizing clinical citations for Conversational Search Engine semantic layouts",
        "Deploying highly technical doctor board structured schemas for LLM reference nodes",
        "Structured FAQ matrices answering detailed cost, procedure length, and benefit questions",
        "Interactive clinical AI chatbot widgets configured to pre-screen patient emergency severity on site"
      ],
      keywords: ["AI search recommended dentist", "ChatGPT dental reviews list", "Local GEO dental rankings"]
    },
    {
      id: "content",
      title: "Treatment Content Marketing",
      tag: "PATIENT DECISION",
      icon: Code,
      brief: "Develop high-authority dental articles and blogs that educate prospective patients, proving your clinical leadership and driving compound organic traffic.",
      bullets: [
        "Detailed, illustrated guides addressing high-value procedures (implants, bridges, bone grafts)",
        "Clear answers to cost and medical insurance coverage queries designed to relieve patient anxiety",
        "Doctor-crafted clinical authority posts formatted to pass Google's strict E-E-A-T guidelines",
        "E-books and checklists educating parents on modern pediatric sedation options"
      ],
      keywords: ["Veneers vs crowns comparison chart", "Dental implant bone graft recovery timeframe", "Invisalign adult guide"]
    }
  ];

  const specialties = [
    {
      name: "General Dentistry",
      tagline: "High-Volume Routine Traffic",
      focus: "Painless cleanings, dental fillings, checkups, and routine dental care.",
      statPercentage: "Compound Growth",
      benefits: ["Local Google Maps dominance for high-volume local intent searches", "Recurring patient booking optimization strategies", "Emergency checkup Google Ads targeted to local micro-regions"]
    },
    {
      name: "Orthodontics / Invisalign",
      tagline: "High LTV Patients",
      focus: "Invisalign alignment plans, ceramic braces, and teenage tooth alignments.",
      statPercentage: "Premium Lead Velocity",
      benefits: ["High-intent landing pages with custom smile visualizer simulators", "Targeted Instagram & Facebook lifestyle ad transformations campaigns", "Structured price package calculator widgets that capture conversion details"]
    },
    {
      name: "Cosmetic Veneers",
      tagline: "Smile Design Inquiries",
      focus: "Composite and porcelain veneers, smile makeup, and teeth whitening packages.",
      statPercentage: "Accelerated Revenue",
      benefits: ["Before-and-after visual sliders paired with real patient success stories", "Localized Google Ads optimized for premium aesthetic terms", "Lead capture funnels integrated with online initial image consults"]
    },
    {
      name: "Dental Implants / Surgery",
      tagline: "Maximizing Practice Profits",
      focus: "Single implants, All-on-4 restorations, bone grafts, and advanced dental prosthetics.",
      statPercentage: "Peak ROI Capture",
      benefits: ["Surgical intent target campaigns bypass general search terms", "SEO info resources explaining implant steps, pricing, and bone density criteria", "Patient financing plans integrations on front-end pages to reduce price shocks"]
    },
    {
      name: "Pediatric Dentistry",
      tagline: "Family Relationship Value",
      focus: "Safe child-friendly dental care, sealant plans, and painless checks.",
      statPercentage: "Generation Retention",
      pioneer: true,
      benefits: ["Parent-centered local organic blogs on dental care development", "Facebook local community sponsorships and targeted event campaigns", "Warm, non-intimidating clinic video guides that reduce pediatric dental fear"]
    },
    {
      name: "Oral Surgery Centers",
      tagline: "Specialized Referrals",
      focus: "Impacted wisdom teeth extractions, emergency oral surgeries, and sedation procedures.",
      statPercentage: "High Diagnostic Flow",
      benefits: ["Emergency geo PPC campaigns addressing high-urgency painful conditions", "Clear schema markup enabling Google Emergency Map flags", "Automated booking pipelines fast-tracking emergency phone inquiries"]
    }
  ];

  const caseStudies = [
    {
      title: "Syracuse Dental Implants Clinic",
      challenge: "Clinic was buried on page 2 of local map packs. Lacked specialized implant and cosmetic patient leads. Wasting $2,500/month on generic clicks.",
      strategy: "Deployed localized schema nodes. Reconfigured Google Ads with negative keywords. Designed micro-target landing pages and automated review loops.",
      results: {
        patients: "+46 New Monthly Patients",
        appointments: "192% Increase in Bookings",
        revenue: "+$42,000 Monthly Value",
        roi: "6.4x Google PPC ROI"
      },
      chartData: [
        { month: "Jan", baseline: 12, postCamp: 12 },
        { month: "Feb", baseline: 14, postCamp: 15 },
        { month: "Mar", baseline: 11, postCamp: 35 },
        { month: "Apr", baseline: 15, postCamp: 48 },
        { month: "May", baseline: 13, postCamp: 59 }
      ]
    },
    {
      title: "Family Orthodontics Council",
      challenge: "Struggling to build premium Invisalign patient pipelines. High-speed local medical competition. Hard to prove value against corporate dental groups.",
      strategy: "Engineered an interactive Veneer & Invisalign Price Calculator. Launched custom localized Reels transformations campaign. Google Business Profile takeover.",
      results: {
        patients: "+38 Veneer/Invisalign leads",
        appointments: "140% Rise in Evaluations",
        revenue: "+$76,000 Pipeline Value",
        roi: "8.1x Total Ad Yield"
      },
      chartData: [
        { month: "Jan", baseline: 8, postCamp: 8 },
        { month: "Feb", baseline: 9, postCamp: 12 },
        { month: "Mar", baseline: 7, postCamp: 29 },
        { month: "Apr", baseline: 11, postCamp: 41 },
        { month: "May", baseline: 10, postCamp: 48 }
      ]
    }
  ];

  const packages = [
    {
      name: "STARTER ACQUISITION",
      sub: "Optimized for Single Practice",
      price: "1,450",
      isPremium: false,
      description: "Establish complete local authority, dominate maps pack searches, and optimize directory consistency.",
      scope: [
        "Google Business Profile optimization & audit",
        "Organic Local Dental Keywords monitoring",
        "Local Map SEO citation expansion",
        "Review triggers SMS pipeline config",
        "Standard monthly analytics dashboard"
      ],
      leadsSource: ["Google Maps Pack", "Organic Search"]
    },
    {
      name: "PRACTICE ACCELERATOR",
      sub: "Highly Recommended for Multi-Doctor Clinic",
      price: "3,200",
      isPremium: true,
      description: "Our comprehensive, high-velocity acquisition engine combining deep Maps authority, direct Google Ads, and conversion micro-tunnels.",
      scope: [
        "Everything in Starter suite",
        "Google Ads (PPC) setup & persistent control",
        "High-conversion Veneer/Implant landing page templates",
        "Online secure dental scheduling software sync",
        "Reputation defense & automated patient collection",
        "Detailed Revenue & Call Attribution tracking"
      ],
      leadsSource: ["Google Search", "Google Maps", "Paid Ads", "Voice Devices"]
    },
    {
      name: "MARKET DOMINANCE",
      sub: "Built for Multi-Location Councils",
      price: "6,500",
      isPremium: false,
      description: "Full-scale patient market capture and strategic expansion. Complete custom digital redesigns with automated CRM interfaces.",
      scope: [
        "Multiple local Map pack address clusters dominance",
        "AI-Powered Search & GEO (LLM) index configuration",
        "Custom, high-speed, conversion-focused dental portal design",
        "High-definition clinical video concept and video ads setup",
        "Comprehensive clinical blog content & FAQ creation",
        "Dedicated marketing executive and bi-weekly growth briefings"
      ],
      leadsSource: ["Google Search", "Google Maps", "Social Media", "Paid Ads", "Voice Search", "AI Search Platforms"]
    }
  ];

  const faqs = [
    {
      q: "How can dentists get more patients online?",
      a: "The most effective method is a unified local strategy. First, capture high-intent 'near me' organic searchers by landing in the top three Google Map positions. Second, run surgical Google Ads triggered only by acute pain or procedure-specific terms to capture immediate bookings. Third, ensure your clinic's landing site has clear online scheduling forms and direct click-to-call buttons to limit conversion drops."
    },
    {
      q: "Is SEO good for dental clinics?",
      a: "Absolutely. Over 80% of local dental inquiries begin in search engines. Unlike paid campaigns which stop generating leads once your budget runs dry, dental SEO builds persistent, compound interest organic traffic on terms like 'best dentist in Syracuse' or 'invisalign expert', securing a stable lead flow with zero added cost per click."
    },
    {
      q: "How much does dental marketing cost?",
      a: "Our dental specialist marketing solutions scale with your clinic's location counts and aggressive growth goals, spanning from our Starter clinic maps setup at $1,450/month to full market dominator programs at $6,500/month. We write clear deliverables and never charge hidden lead commissions."
    },
    {
      q: "Do Google Ads work for dentists?",
      a: "Yes, but only when configured by team members with medical healthcare domain knowledge. Standard agencies waste thousands bidding on generic terms like 'tooth doctor'. We target high-intent action phrases like 'emergency wisdom tooth removal near me' mapped directly to Call-Only campaigns to maximize local conversions."
    },
    {
      q: "How long does dental SEO take?",
      a: "You will usually see localized rating adjustments on your Google Maps pack statistics in 30-60 days. Organic authority on hard keyword procedures like 'dental crown cost analysis' builds over 90-120 days as Google indexes our Schema optimizations and authoritative content updates."
    },
    {
      q: "Can you rank my clinic on Google Maps?",
      a: "Yes, this is our native specialty. We rewrite Google Business Profile parameters, deploy geographically targeted clinical address schemas, sync matching business citation indexes across 80+ directories, and deploy checkout receipt triggers to boost your genuine 5-star feedback count."
    },
    {
      q: "Do you design custom dental websites?",
      a: "Yes. All our dental sites are mobile-focused, HIPAA-aligned, and custom styled to load under 1.2 seconds. They contain visual Before/After sliders, secure appointment application integrations, and interactive WhatsApp direct chat widgets."
    }
  ];

  // AI Typing action simulator
  const runAiDemoType = (term: string) => {
    setAiSearchQuery(term);
    setAiTyping(true);
    let keyPhraseAns = "";
    if (term.includes("Emergency")) {
      keyPhraseAns = "For immediate tooth pain relief, emergency extractions, or same-day root canals in Syracuse: **Elite Dental Center** has active same-day scheduling buffers. They offer diagnostic exams, 24/7 tele-health triage, sedation options, and are verified board partners for urgent dental crises.";
    } else if (term.includes("Invisalign")) {
      keyPhraseAns = "According to price databases and local smile transformations: **Elite Dental Center** is Syracuse's top-rated Invisalign partner. They compile customized digital diagnostic records, feature modern iTero 3D scanners, and offer predictable $149/month zero-down financing options.";
    } else {
      keyPhraseAns = "Based on clinic credentials, dental implant success rate, and authentic maps proximity data: **Elite Dental Center** stands out. They possess digital surgical guides, a 99.1% implant survival score, over 420 local 5-star patient reviews, and verified board certified prosthodontists on site.";
    }

    setTimeout(() => {
      setAiAnswer(keyPhraseAns);
      setAiTyping(false);
    }, 1200);
  };

  return (
    <div className="bg-[#05070a] text-slate-300 font-sans selection:bg-brand-indigo selection:text-white min-h-screen relative overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-950/10 via-teal-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      {/* MOBILE STICKY CTA BAR & WHATSAPP ACTION (Conversion elements) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 items-end">
        {/* Urgent Live Offer Toast */}
        {showLiveChat && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-[#0c121e] border border-brand-teal/30 p-3.5 rounded-2xl shadow-2xl max-w-xs text-left"
            id="live-offer-chat"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="flex items-center gap-1 text-[10px] text-brand-teal font-mono font-black uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping" />
                Specialist Offer Active
              </span>
              <button onClick={() => setShowLiveChat(false)} className="text-slate-500 hover:text-white text-xs cursor-pointer">×</button>
            </div>
            <p className="text-white text-xs font-semibold">Get a free Google Maps Geo-Proximity audit worth $350.</p>
            <a 
              href="#free-dental-marketing-audit" 
              className="text-brand-orange hover:underline text-[10px] font-bold uppercase tracking-wider block mt-1.5"
            >
              Analyze My Competitors Now →
            </a>
          </motion.div>
        )}

        <div className="flex gap-2">
          {/* WhatsApp Direct Chat Button */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            referrerPolicy="no-referrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3.5 shadow-2xl transition-all hover:scale-115 flex items-center justify-center"
            title="Chat on WhatsApp"
            id="whatsapp-chat-anchor"
          >
            <MessageSquare className="w-5 h-5" />
          </a>

          {/* Quick Call Button */}
          <a 
            href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
            className="bg-brand-orange hover:bg-opacity-95 text-white rounded-full p-3.5 shadow-2xl transition-all hover:scale-115 flex items-center justify-center"
            title="Call Clinical Acquisition Desk"
            id="phone-call-anchor"
          >
            <Phone className="w-5 h-5 animate-pulse" />
          </a>
        </div>
      </div>



      {/* 🚀 HERO SECTION */}
      <header className="relative pt-24 pb-28 text-left border-b border-slate-900/60" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT HERO PANEL */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/15 border border-brand-teal/30 text-brand-teal rounded-full py-1.5 px-3.5 text-[10.5px] uppercase font-mono font-extrabold tracking-widest">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span>HEALTHCARE PERFORMANCE AGENCY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display leading-[1.08] tracking-tight text-white" id="hero-headline">
                Dental Clinic Marketing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-300 to-orange-400">
                  Services That Increase Patients & Appointments
                </span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl" id="hero-subheading">
                Grow your dental practice with SEO, Google Ads, local marketing, social media, and AI-powered patient acquisition strategies designed for modern dental clinics. Dominate local map packs and secure top high-value cosmetic cases.
              </p>

              {/* USP Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1">
                {[
                  { tag: "Healthcare Marketing Experts", icon: Stethoscope },
                  { tag: "Local SEO Specialists", icon: MapPin },
                  { tag: "Appointment-Focused Campaigns", icon: Calendar },
                  { tag: "ROI-Driven Strategies", icon: TrendingUp }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-left">
                    <div className="p-1.5 bg-slate-900 rounded-lg text-brand-teal">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] text-slate-300 font-bold leading-tight">{item.tag}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-4">
                <a 
                  href="#free-dental-marketing-audit"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-xl transition-all shadow-xl hover:shadow-brand-orange/10 transform hover:y-[-1px]"
                  id="hero-cta-audit"
                >
                  Get Free Dental Marketing Audit
                </a>
                <a 
                  href="#free-dental-marketing-audit"
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850/50 text-slate-300 font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-xl transition-all"
                  id="hero-cta-consult"
                  onClick={() => {
                    setTimeout(() => {
                      const input = document.getElementById("audit-clinic-name");
                      input?.focus();
                    }, 50);
                  }}
                >
                  Book Growth Consultation
                </a>
              </div>
            </div>

            {/* RIGHT HERO PANEL: INTERACTIVE APP WINDOW */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 shadow-2xl relative space-y-4">
                {/* Header elements simulating scheduling growth panel */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase font-black tracking-wider">
                  <span>Elite Medical Node: Syracuse</span>
                  <span className="text-brand-teal flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-ping" />
                    Live Metrics Monitor
                  </span>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-900 space-y-3.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Appointment Growth Dashboard</span>
                      <span className="text-2xl font-black font-display text-white">+118 Appointment Bookings</span>
                    </div>
                    <span className="text-brand-teal font-mono font-bold text-xs bg-brand-teal/10 px-2 py-0.5 rounded border border-brand-teal/20">+192% MoM</span>
                  </div>

                  {/* Micro Visual Chart Block using SVG */}
                  <div className="h-28 flex items-end justify-between gap-1 pt-2 border-b border-slate-900 pb-1">
                    {[30, 42, 35, 68, 55, 92, 118].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                        <div className="text-[9px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 absolute bottom-full mb-1 transition-opacity bg-slate-905 border border-slate-800 py-0.5 px-1.5 rounded">{val}</div>
                        <div 
                          className="w-full bg-gradient-to-t from-brand-indigo via-teal-500 to-brand-teal rounded-t-sm transition-all duration-1000 origin-bottom"
                          style={{ height: `${(val / 120) * 85}px` }}
                        />
                        <span className="text-[9px] font-mono text-slate-600 mt-1 uppercase">Wk{idx+1}</span>
                      </div>
                    ))}
                  </div>

                  {/* Micro list metrics */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-teal" />
                      <span className="text-[11px] text-slate-400">Organic Maps #2 slot</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-teal" />
                      <span className="text-[11px] text-slate-400">Total leads val: +$42K</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-[#070b14] p-3.5 rounded-2xl border border-slate-900">
                  <div className="flex gap-2 items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-[11px] text-slate-300 font-bold">Implant Pipeline Active</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">99.4% Citation Integrity</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 🤝 TRUST & AUTHORITY SECTION */}
      <section className="py-16 bg-[#070b14] border-b border-slate-900/60" id="trust-authority">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Clinic Counter Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { count: "48,500+", label: "Dental Leads Generated", desc: "Qualified clinical calls/forms" },
                { count: "210+", label: "Clinics Ranked on Google", desc: "Securing Top 3 local map spots" },
                { count: "192%", label: "Appointment Growth %", desc: "Average initial campaign lift" },
                { count: "4,600+", label: "Local Keywords Ranked", desc: "First page organic index" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#0c121e] border border-slate-850 p-5 rounded-2xl text-left hover:border-slate-800 transition-all">
                  <span className="text-2xl md:text-3.5xl font-extrabold font-mono text-white block leading-none">{stat.count}</span>
                  <span className="text-[11.5px] font-bold text-slate-350 block mt-2">{stat.label}</span>
                  <span className="text-[9.5px] text-slate-500 block mt-0.5">{stat.desc}</span>
                </div>
              ))}
            </div>

            {/* Testimonials & Brands */}
            <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
              <span className="text-[10px] text-brand-orange font-mono font-extrabold uppercase tracking-widest block">TRUSTED DENTAL PARTNER</span>
              <h2 className="text-2.5xl md:text-4xl font-black font-display text-white">
                Trusted Dental Marketing Experts
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                AKGLS Group is a certified healthcare brand marketing partner. We align campaign workflows alongside medical and legal boundaries—including strict HIPAA standards—ensuring that your reputation expands with safe patient lead delivery.
              </p>

              {/* Review Testimonial Mini Widget */}
              <div className="p-5 bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-900 rounded-2xl relative">
                <div className="flex gap-1 mb-2 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-white font-mono text-xs font-bold pl-1.5">5.0 Star Rated Clinical Review</span>
                </div>
                <p className="text-slate-300 text-xs italic leading-relaxed">
                  \"Within four months of implementing AKGLS Group's maps and SEO schema sequence, our multi-doctor implant practice in Syracuse saw a massive shift. Our listings reached the absolute primary position on all implant and cosmetic local terms. We generated 46 brand-new high-value clinical implants in May alone!\"
                </p>
                <div className="flex gap-2 items-center mt-3 pt-3 border-t border-slate-900">
                  <div className="w-7 h-7 bg-brand-orange/20 rounded-full flex items-center justify-center font-bold text-brand-orange text-xs">
                    TC
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Dr. Thomas Carter, DDS, MS</span>
                    <span className="text-[9px] text-slate-500 block">Lead Implant Specialist & Clinic Director</span>
                  </div>
                </div>
              </div>

              {/* Mock logos of Healthcare directories */}
              <div className="pt-2">
                <span className="text-[9px] text-slate-500 font-mono font-bold uppercase tracking-wider block mb-3">INTEGRATING ACCOUNTS AND AUDIT DATABASES</span>
                <div className="flex flex-wrap gap-4 items-center opacity-40 hover:opacity-60 transition-opacity">
                  {["Healthgrades Verified", "Google Maps Partner", "HIPAA Aligned Secure", "ADA Association Portal", "WebMD Certified", "Dexis Integrated"].map((logo, index) => (
                    <span key={index} className="text-slate-300 font-mono text-[10.5px] border border-slate-800 py-1 px-2.5 rounded bg-slate-950">{logo}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 🩺 WHAT IS DENTAL MARKETING SECTION */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left" id="what-is-dental-marketing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Ecosystem Mockup */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-[#0c121e] border border-slate-850 p-6 rounded-3xl space-y-5 shadow-2xl relative">
                <span className="text-[8.5px] font-mono text-brand-orange uppercase font-black block">CLINICAL funnel ARCHITECTURE</span>
                
                {/* Visual Representation of Patient Funnel */}
                <div className="space-y-3.5">
                  <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl relative overflow-hidden flex items-center justify-between">
                    <div className="absolute top-0 left-0 h-full w-1.5 bg-brand-teal" />
                    <div>
                      <span className="text-[9px] text-slate-500 font-mono block">STAGE 1: INTERACTION SEARCH INTENT</span>
                      <strong className="text-white text-xs block">Patient: \"Who does veneers in Syracuse?\"</strong>
                    </div>
                    <span className="bg-brand-teal/10 text-brand-teal text-[9px] font-mono py-0.5 px-2 rounded-full border border-brand-teal/20 font-bold">100% Volume</span>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl relative overflow-hidden flex items-center justify-between ml-3">
                    <div className="absolute top-0 left-0 h-full w-1.5 bg-indigo-500" />
                    <div>
                      <span className="text-[9px] text-slate-500 font-mono block">STAGE 2: DISCOVERY GOOGLE MAP PACK</span>
                      <strong className="text-indigo-300 text-xs block">Top Position Google Map Result: Elite Dental</strong>
                    </div>
                    <span className="bg-indigo-500/10 text-indigo-400 text-[9px] font-mono py-0.5 px-2 rounded-full border border-indigo-505/20 font-bold">75% Conversion</span>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl relative overflow-hidden flex items-center justify-between ml-6">
                    <div className="absolute top-0 left-0 h-full w-1.5 bg-brand-orange" />
                    <div>
                      <span className="text-[9px] text-slate-500 font-mono block">STAGE 3: ACTION DECISION BOOKING</span>
                      <strong className="text-brand-orange text-xs block">Secure HIPAA online form scheduling filled</strong>
                    </div>
                    <span className="bg-brand-orange/10 text-brand-orange text-[9px] font-mono py-0.5 px-2 rounded-full border border-brand-orange/20 font-bold">24% Patient Rate</span>
                  </div>
                </div>

                <div className="text-[10.5px] text-slate-400 leading-relaxed font-light p-3.5 bg-slate-950 rounded-xl border border-slate-900">
                  Unlike conventional broad e-commerce, **Dental Practice Acquisition** is incredibly hyper-local. Patients decide treatments based purely on doctor credentials, maps pack proximity matching, and star ratings velocity.
                </div>
              </div>
            </div>

            {/* Explain Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] text-brand-teal font-mono font-extrabold uppercase tracking-widest block bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20 inline-block">
                Ecosystem Analysis
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white">
                What Is Dental Clinic Marketing?
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Dental marketing is a programmatic localized workflow that connects active, high-intent surgical inquiries directly to your treatment chairs. It coordinates search placement authority, PPC conversions, and clinic ratings consistency so patient search actions flow seamlessly into confirmed digital schedule slots.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {[
                  { title: "Local Patient Acquisition", detail: "Winning immediate-intent search terms within 5 miles of your clinic coords." },
                  { title: "Online Reputation Building", desc: "Generating persistent, high-scoring authentic patient reviews weekly." },
                  { title: "Appointment Generation", detail: "Building direct scheduling software tunnels so patients book options instantly." },
                  { title: "Competitive Positioning", desc: "Outranking local medical networks and corporate dental councils." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-900 p-4.5 rounded-2xl">
                    <h4 className="text-white font-bold text-xs font-display flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-[11px] font-light mt-1.5 leading-relaxed">
                      {item.detail || item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🛠️ SERVICE GRID LAYOUT SECTION */}
      <section className="py-20 bg-[#070b14] border-b border-slate-900 text-left" id="our-dental-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20">
              PROGRAMMATIC CLINICAL CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Our Dental Clinic Marketing Services
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We engineer specialized digital infrastructure. Explore our high-performance diagnostic modules to build organic and PPC acquisition tunnels.
            </p>
          </div>

          {/* Interactive Navigation Panel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {dentalServices.map((ser, sIdx) => {
              const IconComp = ser.icon;
              return (
                <button
                  key={sIdx}
                  onClick={() => setActiveServiceIdx(sIdx)}
                  className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                    activeServiceIdx === sIdx 
                      ? 'bg-brand-indigo/20 border-brand-indigo text-white shadow-lg' 
                      : 'bg-slate-900/60 border-slate-850 text-slate-400 hover:bg-slate-850 hover:text-white'
                  }`}
                >
                  <IconComp className={`w-4 h-4 shrink-0 ${activeServiceIdx === sIdx ? 'text-brand-orange' : 'text-slate-500'}`} />
                  <span className="truncate">{ser.title.split(" Services")[0].split(" for ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Display Panel Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeServiceIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full px-3 py-1 text-[9.5px] uppercase font-mono font-black tracking-widest">
                  <span className="w-1 h-1 bg-brand-orange rounded-full" />
                  {dentalServices[activeServiceIdx].tag}
                </div>

                <h3 className="text-xl sm:text-2.5xl font-black font-display text-white">
                  {dentalServices[activeServiceIdx].title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {dentalServices[activeServiceIdx].brief}
                </p>

                <div className="space-y-2.5 pt-1.5">
                  {dentalServices[activeServiceIdx].bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex gap-2 items-start text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column keywords sandbox */}
              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-900 space-y-4">
                <span className="text-[9px] font-mono uppercase text-slate-500 block font-bold">Active Query Term Selections:</span>
                
                <div className="space-y-2">
                  {dentalServices[activeServiceIdx].keywords.map((kw, kIdx) => (
                    <div key={kIdx} className="p-3 bg-[#0c121e]/80 border border-slate-850 rounded-xl flex items-center justify-between text-xs font-mono">
                      <span className="text-white">“{kw}”</span>
                      <span className="text-[10px] text-brand-teal uppercase font-bold">First Page Top Slot</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#free-dental-marketing-audit" 
                  className="w-full text-center py-3 bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-lg block transition-all"
                >
                  Analyze My Local Search Opportunities
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 🏥 DENTAL SPECIALTIES SECTION */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left" id="dental-specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              TARGETED CLINICAL ACQUISITIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Marketing Solutions for Every Dental Specialty
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We map targeted SEO and high-conversion landing page structures specific to your secondary doctor disciplines. Select a specialty to review tailored focus areas.
            </p>

            {/* Quick Filter Selection */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {["All", "General Dentistry", "Orthodontics / Invisalign", "Cosmetic Veneers", "Dental Implants / Surgery", "Pediatric Dentistry", "Oral Surgery Centers"].map((sp, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSpecialty(sp)}
                  className={`py-1.5 px-3 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    selectedSpecialty === sp 
                      ? 'bg-brand-orange text-white' 
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-850 hover:text-white'
                  }`}
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {specialties
              .filter(s => selectedSpecialty === "All" || s.name === selectedSpecialty)
              .map((spec, iIdx) => (
                <div key={iIdx} className="bg-[#0c121e] border border-slate-850/80 rounded-2.5xl p-6 flex flex-col justify-between hover:border-slate-800 transition-all shadow-xl hover:-translate-y-1 duration-300">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white text-base md:text-lg font-bold font-display leading-tight">{spec.name}</h4>
                        <span className="text-[10.5px] text-brand-teal font-mono uppercase tracking-wide mt-1 block">{spec.tagline}</span>
                      </div>
                      <span className="text-[9px] font-mono font-black text-brand-orange uppercase tracking-wider bg-brand-orange/5 border border-brand-orange/30 py-0.5 px-2 rounded-full">
                        {spec.statPercentage}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs font-light leading-relaxed border-t border-slate-850 pt-3">
                      {spec.focus}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[8.5px] uppercase text-slate-500 font-mono font-black block">Specialty Deliverables:</span>
                      {spec.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex gap-2 items-start text-[11.5px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-900 mt-6">
                    <a 
                      href="#free-dental-marketing-audit" 
                      className="text-white hover:text-brand-indigo text-xs font-bold leading-tight uppercase tracking-wider flex items-center gap-1 group"
                    >
                      Maximize Specialty Flow <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* 🚀 OUR DENTAL MARKETING PROCESS SECTION */}
      <section className="py-20 bg-[#070b14] border-b border-slate-900 text-left" id="our-dental-marketing-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20">
              PROGRAM IMPLEMENTATION
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Our Dental Marketing Process
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We don\'t believe in guessing values. We run clinical data audits, plan robust strategies, launch optimized campaigns, optimize scheduling conversion indices, and continuously scale ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4 relative">
            {/* Visual connector lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-900/60 z-0" />

            {[
              { step: "Step 01", title: "Practice Analysis", desc: "We run search visibility scans on your clinic GBP coordinates, check competitor density metrics, and audit medical schema gaps." },
              { step: "Step 02", title: "Strategy Planning", desc: "Construct procedural maps targeting Invisalign/implants. Design clean scheduling funnels mapping back to clinical software." },
              { step: "Step 03", title: "Optimization & Launch", desc: "Calibrate localized keywords, deploy lightweight SEO website elements, and launch negative-filtered Google search Ads." },
              { step: "Step 04", title: "Lead Gen & Growth", desc: "Coordinate daily appointment metrics logs. Retarget past website bounces, and trigger automated patient SMS review prompts." },
              { step: "Step 05", title: "Reporting & Scaling", desc: "Review transparent CRM dashboard values. Adjust budgets to match the most profitable dental procedure chairs." }
            ].map((p, pIdx) => (
              <div key={pIdx} className="bg-[#0c121e] border border-slate-850 p-6 rounded-2xl space-y-4 relative z-10 hover:border-slate-800 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-brand-orange uppercase font-black tracking-widest bg-brand-orange/5 border border-brand-orange/20 py-1 px-2.5 rounded-md inline-block">
                    {p.step}
                  </span>
                  <h4 className="text-white font-bold text-xs uppercase font-display leading-tight">{p.title}</h4>
                  <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-slate-950 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-brand-teal" style={{ width: `${(pIdx + 1) * 20}%` }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💼 WHY DIGITAL MARKETING MATTERS FOR DENTISTS */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left" id="why-dental-marketing-matters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Why text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20 inline-block">
                PRACTITIONER INSIGHTS
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white">
                Why Dental Clinics Need Digital Marketing
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Word-of-mouth is a fundamental pillar of practice authority, but it matures too slowly to fuel growth target volumes. Modern prospective patients consult visual, ratings-consistent, and schema-supported local search indexes before booking an appointment.
              </p>

              <div className="p-5 bg-[#0c121e] border border-slate-850 rounded-2xl space-y-3.5">
                <h4 className="text-white text-base font-bold font-display">The Corporate Healthcare Threat</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Corporate-backed dental conglomerates employ advanced programmatic software and huge marketing budgets to capture top listings. Local clinics must assert direct map pack authority to retain community patience.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "More Patient Appointments", desc: "Fill available daily schedule slots with high-value procedure cases." },
                { title: "Better Google Visibility", desc: "Appear consistently at the precise instant local clients request treatments." },
                { title: "Increased Brand Trust", desc: "Generate authentic, high-velocity reviews proving clinical safety records." },
                { title: "Higher Local Rankings", desc: "Own your zip-code and outperform surrounding multi-location councils." },
                { title: "Improved Online Reputation", desc: "Monitor feedback across channels seamlessly with clean recovery tools." },
                { title: "Faster Practice Growth", desc: "Recruit high-tier doctors by demonstrating predictable acquisition volume." }
              ].map((ben, bIdx) => (
                <div key={bIdx} className="bg-slate-950 border border-slate-900 p-5 rounded-2xl text-left hover:border-slate-800 transition-all space-y-2">
                  <div className="w-7 h-7 bg-brand-teal/10 text-brand-teal flex items-center justify-center rounded-lg">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-white text-xs font-bold font-display uppercase tracking-wide leading-tight">{ben.title}</h4>
                  <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                    {ben.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 🗺️ LOCAL SEO SECTION (Map Dominance & Interactive Checker) */}
      <section className="py-20 bg-[#070b14] border-b border-slate-900 text-left" id="dental-local-seo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Simulator Column */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#0c121e] border border-slate-850 p-6 rounded-3xl space-y-4 shadow-2xl">
                <div className="flex justify-between items-center text-[9.5px] font-mono text-slate-500 uppercase font-black">
                  <span>Google Maps Pack Index Status</span>
                  <span className="text-emerald-400">Verified Proximity</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-xs text-slate-400 space-y-2">
                  <div className="flex items-center gap-1.5 justify-between">
                    <span>1. **Elite Dental Center**</span>
                    <span className="text-emerald-400 font-bold">#1 Position</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-light pl-4">Review Value: 4.9 Stars (418 Reviews)</span>
                    <span className="text-slate-500">1.2 miles away</span>
                  </div>

                  <div className="flex items-center gap-1.5 justify-between border-t border-slate-900 pt-2 text-[11.5px]">
                    <span>2. Apex Dental Care</span>
                    <span className="text-slate-500 text-[10px]">#2 Position</span>
                  </div>
                  <div className="flex items-center justify-between text-[10.5px]">
                    <span className="text-slate-600 pl-4">Review Value: 4.4 Stars (122 Reviews)</span>
                    <span className="text-slate-600">2.5 miles away</span>
                  </div>

                  <div className="flex items-center gap-1.5 justify-between border-t border-slate-90s pt-2 text-[11.5px]">
                    <span>3. Syracuse Smile Partners</span>
                    <span className="text-slate-500 text-[10px]">#3 Position</span>
                  </div>
                </div>

                {/* Proximity Radius Mapping Animation visualizer container */}
                <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-900 space-y-2">
                  <span className="text-[9.5px] font-mono text-slate-500 block uppercase">Geo-Fenced Keyword Density Tracker:</span>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[1, 1, 2, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1].map((p, idx) => (
                      <div 
                        key={idx} 
                        className={`py-1.5 text-center text-[10px] font-mono font-bold rounded ${
                          p === 1 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-amber-500/10 text-amber-400 border border-amber-505/30'
                        }`}
                      >
                        {p === 1 ? "Rank 1" : p === 2 ? "Rank 2" : "Rank 4"}
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] text-slate-500 block leading-tight font-light mt-1.5">
                    *Our citation-proofing triggers propagate consistent geo-markers, making your maps listing dominant inside critical search neighborhoods.
                  </span>
                </div>
              </div>
            </div>

            {/* Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20 inline-block">
                DOMINATE LOCAL SEARCH
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white">
                Dominate Local Search Results & Google Maps
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Dentistry is highly transactional. When prospective clients seek urgent medical treatments or specialized reconstructive work near their location, over 67% click maps results before organic titles. We align listing credentials and citation signals to guarantee top-of-pack rankings.
              </p>

              <div className="space-y-4 pt-1">
                {[
                  "Google Business Profile (GBP) detailed coordinate citation-matching audits",
                  "Consolidating NAP (Name, Address, Phone) consistency across major directory pools",
                  "Automating immediate post-discharge feedback prompts to build reviews velocity",
                  "Injecting localized medical location schema nodes directly underneath page codes"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-xs text-slate-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 💻 DENTAL WEBSITE DESIGN SECTION (Conversion, Calendars, Before-After Mockups) */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left" id="dental-website-design">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Outline list */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20 inline-block">
                HIGH CONVERSION WEB UX
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white">
                Conversion-Focused Dental Website Design
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                A slow or confusing website leaks potential patients. All of our custom dental websites load under 1.2 seconds, are secure, run mobile-friendly layouts, and seamlessly integrate booking forms directly into clinical calendar software.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 pt-2">
                {[
                  { title: "Direct Calendars Integration", desc: "Tying schedules to Rentrix, Dentrix, or Open Dental dashboards." },
                  { title: "Smile Transformations Sliders", desc: "Interactive before vs after galleries showing aesthetic dental work." },
                  { title: "Strict Medical Security", desc: "Fully secure forms protecting diagnostic appointment inquiries." },
                  { title: "Lightweight Code Architecture", desc: "Achieving outstanding mobile speed scores to satisfy Google algorithms." }
                ].map((term, idx) => (
                  <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-slate-900">
                    <h4 className="text-white text-xs font-bold uppercase tracking-wide font-display">{term.title}</h4>
                    <p className="text-slate-400 text-[11px] font-light mt-1 leading-relaxed">{term.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Scheduling Booking Demo Simulator */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 shadow-2xl space-y-5">
                <span className="text-[9px] font-mono text-slate-500 uppercase block font-black border-b border-slate-850 pb-2">PROSPECTIVE PATIENT SCHEDULING UNIT PREVIEW</span>
                
                <h4 className="text-white font-medium text-xs font-display">Simulated Patient Appointment Widget</h4>
                
                <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] bg-slate-950 p-2.5 rounded-xl border border-slate-900">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <strong key={i} className="text-slate-500">{d}</strong>)}
                  {Array.from({ length: 28 }).map((_, idx) => (
                    <button 
                      key={idx} 
                      className={`p-1 rounded cursor-pointer ${
                        idx === 14 
                          ? 'bg-brand-orange text-white font-bold' 
                          : idx === 10 || idx === 11 || idx === 16 
                          ? 'bg-slate-900/80 text-brand-teal font-bold' 
                          : 'text-slate-500 hover:bg-slate-900'
                      }`}
                      onClick={() => alert(`Simulated Appointment Slot: May ${idx + 1}, 2026. Available hours matching Dentrix dashboard database!`)}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-mono block">CLICK SELECT HOUR SLOT MAPPED TO CLINIC CHAIR:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {["09:00 AM (Dr. Carter)", "11:30 AM (Hygiene Block)", "03:15 PM (Provisional)"].map((slot, sIdx) => (
                      <div 
                        key={sIdx} 
                        className={`p-2 border rounded-lg text-center font-mono text-[10.5px] font-bold ${
                          sIdx === 0 
                            ? 'bg-brand-teal/10 border-brand-teal text-white' 
                            : 'bg-slate-950 border-slate-900 text-slate-400'
                        }`}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10.5px] leading-relaxed text-slate-400 flex items-center justify-between">
                  <span>✨ iTero 3D Custom Diagnostic request attached</span>
                  <span className="text-brand-orange font-bold font-mono">Verified HIPAA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 AI-POWERED DENTAL MARKETING - FUTURE ACCENT */}
      <section className="py-20 bg-[#070b14] border-b border-slate-900 text-left" id="ai-powered-dental">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Live simulator demo panel */}
            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] border border-brand-indigo/30 p-6 rounded-3xl space-y-4 shadow-2xl relative">
                <span className="absolute -top-3 right-4 bg-brand-indigo text-white text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-indigo-700">
                  GEO OPTIMIZER CORE
                </span>
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-black">GENERATIVE ENGINE CONVERSATIONAL SEARCH SIMULATOR</span>

                {/* Simulated AI Query Selector */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Select Test Query Term to see ChatGPT Search citation delivery:</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { term: "Reliable dental implant specialist Syracuse?", short: "Implants Syracuse" },
                      { term: "Emergency root canal relief open now Syracuse?", short: "Emergency Syracuse" },
                      { term: "Under $150 Invisalign plans Syracuse?", short: "Invisalign Syracuse" }
                    ].map((btn, bIdx) => (
                      <button
                        key={bIdx}
                        onClick={() => runAiDemoType(btn.term)}
                        className={`py-1.5 px-3 rounded-lg text-[10px] font-mono font-bold transition-all text-left cursor-pointer border ${
                          aiSearchQuery === btn.term 
                            ? 'bg-brand-indigo text-white border-brand-indigo' 
                            : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-white'
                        }`}
                      >
                        {btn.short}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ChatGPT style window */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 space-y-3 font-mono text-[11px]">
                  <div className="flex gap-2 items-start">
                    <span className="text-slate-500">Query:</span>
                    <strong className="text-white font-medium">“{aiSearchQuery}”</strong>
                  </div>
                  
                  <div className="border-t border-slate-900 pt-3 flex gap-2 items-start">
                    <span className="text-brand-teal font-extrabold pr-1">AI Output:</span>
                    {aiTyping ? (
                      <span className="text-slate-400 animate-pulse">Running semantic evaluation query simulation database...</span>
                    ) : (
                      <p className="text-slate-350 leading-relaxed text-[10.5px]">
                        {aiAnswer}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-brand-indigo/10 rounded-xl border border-brand-indigo/25 text-[10px] text-indigo-300 leading-normal">
                  *When AI Search Engines cite your clinic, patients reach your site with extremely mature transactional intent.
                </div>
              </div>
            </div>

            {/* AI Text explain column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20 inline-block">
                THE FUTURE OF SEARCH
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white">
                AI-Powered Dental Marketing Solutions
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                As Search transforms through ChatGPT, Gemini Search, and conversational layout engines, standard keyword density indexing is no longer enough. We engineer specialized **GEO (Generative Engine Optimization)** schemas and custom AI chatbot interfaces that guarantee your clinical authority persists within conversational citations.
              </p>

              <div className="space-y-4 pt-1">
                {[
                  "Optimizing database references to appear in conversational summaries",
                  "Creating semantic FAQ schemas engineered specifically for AI crawler nodes",
                  "Structuring local doctor authority profiles to satisfy LLM diagnostic indexing",
                  "AI chatbots on site pre-screening severe pain queries to secure immediate bookings"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-xs text-slate-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-brand-indigo shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📊 CASE STUDIES SECTION (Results charts & interactive before-after selector) */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left" id="dental-case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              PROVEN RESULTS DEPLOYED
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Dental Clinic Success Stories
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We focus purely on human, measurable clinical metrics. Review how we transformed local practices in Syracuse into absolute market leaders.
            </p>

            <div className="flex justify-center gap-2 pt-2">
              {caseStudies.map((cs, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCaseStudy(idx)}
                  className={`py-2 px-4 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                    activeCaseStudy === idx 
                      ? 'bg-brand-orange text-white' 
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {cs.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            {/* Case Study Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-slate-500 font-mono block uppercase">CASE ANALYSIS #{activeCaseStudy + 1}: {caseStudies[activeCaseStudy].title}</span>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-900">
                  <strong className="text-amber-400 text-xs font-display flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 shrink-0" /> THE CLINIC CHALLENGE:
                  </strong>
                  <p className="text-slate-400 text-xs leading-relaxed font-light mt-1.5">
                    {caseStudies[activeCaseStudy].challenge}
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-900">
                  <strong className="text-brand-teal text-xs font-display flex items-center gap-1.5">
                    <Zap className="w-4 h-4 shrink-0" /> THE MARKETING STRATEGY:
                  </strong>
                  <p className="text-slate-400 text-xs leading-relaxed font-light mt-1.5">
                    {caseStudies[activeCaseStudy].strategy}
                  </p>
                </div>
              </div>
            </div>

            {/* Results Counters Panel & Small Chart */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: caseStudies[activeCaseStudy].results.patients, label: "Patients Gained" },
                  { value: caseStudies[activeCaseStudy].results.appointments, label: "Appointments Lift" },
                  { value: caseStudies[activeCaseStudy].results.revenue, label: "Monthly Value Gained" },
                  { value: caseStudies[activeCaseStudy].results.roi, label: "PPC ROI Yield" }
                ].map((res, rIdx) => (
                  <div key={rIdx} className="bg-slate-950 border border-slate-900 p-4.5 rounded-2xl">
                    <span className="text-xl md:text-2.5xl font-mono font-black text-brand-teal block leading-none">{res.value}</span>
                    <span className="text-[11px] font-bold text-slate-400 block mt-1.5">{res.label}</span>
                  </div>
                ))}
              </div>

              {/* Progress visual mini bar chart indicating compound trend */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-900 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase">Interactive Case Patient Velocity Trends:</span>
                  <span className="text-[10px] text-brand-orange font-mono font-bold">5-Month Post-Launch Matrix</span>
                </div>
                <div className="h-16 flex items-end justify-between gap-1.5">
                  {caseStudies[activeCaseStudy].chartData.map((dataPt, dIdx) => (
                    <div key={dIdx} className="flex-1 flex gap-1">
                      {/* Baseline grey bar */}
                      <div 
                        className="flex-1 bg-slate-800 rounded-t-sm transition-all duration-1000 origin-bottom"
                        style={{ height: `${(dataPt.baseline / 60) * 100}%` }}
                      />
                      {/* Post Launch Color Bar */}
                      <div 
                        className="flex-1 bg-gradient-to-t from-brand-orange to-brand-teal rounded-t-sm transition-all duration-1000 origin-bottom"
                        style={{ height: `${(dataPt.postCamp / 60) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[8px] font-mono text-slate-600 uppercase">
                  <span>Baseline index</span>
                  <span className="text-brand-teal font-extrabold">Marketing Performance Lift</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 💼 WHY CHOOSE AKGLS GROUP (USP cards) */}
      <section className="py-20 bg-[#070b14] border-b border-slate-900 text-left" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20">
              OUR SERVICE GUARANTEE
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Why Choose AKGLS Group?
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We focus purely on technical, predictable medical patient generation sequences. Unlike generic agencies, we possess deep healthcare domain credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {[
              { title: "Healthcare Marketing Expertise", desc: "Our squad understands doctor specialties, treatment vocabulary, medical credentials, and patient-first trust parameters natively." },
              { title: "Dental SEO Specialists", desc: "Deploying programmatic local schema injections and medical E-E-A-T criteria to bypass corporate healthcare conglomerates." },
              { title: "Appointment-Focused Campaigns", desc: "We track actual confirmed digital appointments and clinical calendar inputs—never just broad traffic keywords clicks." },
              { title: "AI-Powered GEO Strategies", desc: "Constructing persistent citation points to guarantee your office is recommended inside ChatGPT and Gemini searches." },
              { title: "Local Maps pack Experts", desc: "Rewriting coordinate markers and GBP metadata profiles to dominate surrounding zip codes within a 5-mile local radius." },
              { title: "ROI-Driven Approach", desc: "Analyzing available surgical chair capacities to focus spending on highest patient lifetime value procedures." }
            ].map((usp, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 p-6 rounded-2.5xl flex flex-col justify-between hover:border-slate-800 transition-all duration-350">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-brand-teal flex items-center justify-center font-bold">
                    <CheckSquare className="w-4 h-4 animate-pulse" />
                  </div>
                  <h4 className="text-white text-base font-bold font-display leading-tight">{usp.title}</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {usp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛠️ INTEGRATED TECHNOLOGIES TOOLS GRID */}
      <section className="py-16 bg-[#05070a] border-b border-slate-900/60" id="dental-technologies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest block">INTEGRATED DIAGNOSTICS</span>
          <h2 className="text-2.5xl md:text-4.5xl font-black font-display text-white">
            Tools & Technologies We Use
          </h2>
          <p className="text-slate-400 font-light text-xs sm:text-sm max-w-xl mx-auto">
            We sync patient lead generation directly using industry standard platforms, diagnostic search indexes, and visual analytics layers.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto pt-4">
            {[
              "Google Analytics 4", "Google Ads Network", "Meta Advertising Node", "Ahrefs Organic Index", 
              "SEMrush Local Citation Pro", "Google Tag Manager", "Looker Studio Dashboards", "ChatGPT Search Proximity", 
              "Gemini AI LLM schema", "Dentrix Scheduling API", "Modento Direct Booking", "Open Dental API Reader"
            ].map((tool, idx) => (
              <span 
                key={idx} 
                className="py-2 px-4 rounded-xl text-xs font-mono font-bold bg-slate-950 border border-slate-900 text-slate-350 transition-colors hover:border-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 💳 TRANSPARENT FLEXIBLE PACKAGES SECTION */}
      <section className="py-20 bg-[#070b14] border-b border-slate-900 text-left" id="dental-marketing-packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              CLEAR VALUE SCHEMES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Flexible Dental Marketing Packages
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              We operate transparent structural monthly retainers designed for clinics, keeping deliverables absolute with no hidden fees or royalties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col justify-between rounded-3xl p-6 md:p-8 transition-all hover:border-slate-800 ${
                  pkg.isPremium 
                    ? 'bg-[#0c121e] border border-brand-orange/40 shadow-xl relative' 
                    : 'bg-slate-950 border border-slate-850'
                }`}
              >
                {pkg.isPremium && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9.5px] font-mono font-black uppercase tracking-widest px-4.5 py-1 rounded-full">
                    Practice Favorites Choice
                  </span>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-display text-white leading-tight">{pkg.name}</h3>
                    <span className="text-[10.5px] font-mono text-slate-500 block mt-1">{pkg.sub}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-4xl font-extrabold font-mono text-white">${pkg.price}</span>
                    <span className="text-xs text-slate-500 font-mono block">Program subscription fee monthly</span>
                  </div>

                  <p className="text-slate-400 text-xs font-light leading-relaxed">{pkg.description}</p>

                  <div className="space-y-2 pt-4 border-t border-slate-900">
                    <span className="text-[8.5px] uppercase text-slate-500 font-mono font-black block">Leads Acquired From:</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pkg.leadsSource.map((src, idx) => (
                        <span key={idx} className="bg-slate-900 border border-slate-850 py-1 px-2.5 rounded text-[10px] font-mono text-brand-teal font-extrabold">{src}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4">
                    <span className="text-[8.5px] uppercase text-slate-500 font-mono font-black block">SPECIFICATIONS DEPLOYED:</span>
                    {pkg.scope.map((sp, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-350 font-bold">
                        <Check className="w-4 h-4 text-brand-teal shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-900">
                  <a 
                    href="#free-dental-marketing-audit" 
                    className={`w-full text-center py-4 rounded-xl text-xs font-mono font-black uppercase tracking-wider block transition-all ${
                      pkg.isPremium 
                        ? 'bg-brand-orange text-white hover:bg-opacity-95' 
                        : 'bg-[#0c121e] border border-slate-800 text-white hover:border-slate-700'
                    }`}
                  >
                    Request Custom Dental Marketing Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📚 FAQ SECTION (Accordion) */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left" id="dental-faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20">
              INFORMATIONAL ANSWERS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Syracuse Dental Marketing FAQs
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Explore frequently asked clinical marketing queries regarding maps setups, budget parameters, and timing milestones.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden transition-all hover:border-slate-850">
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center text-white cursor-pointer hover:bg-[#0c121e] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-black font-mono uppercase tracking-wide pr-4">{f.q}</span>
                  <ChevronDown className={`w-4.5 h-4.5 text-brand-orange transition-transform duration-300 shrink-0 ${openFaqIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaqIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-slate-900 font-light text-slate-450 text-xs sm:text-sm leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Schema Visualizer */}
      <section id="dental-schema-visualizer" className="py-20 bg-[#070b14] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-4 space-y-5">
              <span className="text-[9px] font-mono text-brand-orange uppercase font-extrabold tracking-widest">JSON-LD PROTOCOL</span>
              <h3 className="text-2xl md:text-3.5xl font-black font-display text-white">Semantic AI Schema Nodes</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                Provide precise entity declarations to ChatGPT Search, Gemini indexers, and Google crawlers. This signals practice locations, dentist profiles, medical services, and real patient feedback structures.
              </p>
              
              <div className="space-y-2 pt-2">
                <button 
                  onClick={() => performSchemaCopy(dentalSchemaTemplates.service, 'service')}
                  className="w-full flex items-center justify-between text-left p-3.5 bg-[#0c121e] border border-slate-850 rounded-xl hover:border-slate-800 transition-all text-xs font-mono font-bold text-slate-300 cursor-pointer"
                >
                  <span>1. MedicalBusiness Schema</span>
                  <span className="text-brand-teal text-[10px] uppercase font-bold">
                    {copiedKey === 'service' ? "Copied" : "Copy Schema Code"}
                  </span>
                </button>
                <button 
                  onClick={() => performSchemaCopy(dentalSchemaTemplates.appointmentSchema, 'appoint')}
                  className="w-full flex items-center justify-between text-left p-3.5 bg-[#0c121e] border border-slate-855 rounded-xl hover:border-slate-800 transition-all text-xs font-mono font-bold text-slate-300 cursor-pointer"
                >
                  <span>2. Clinical Proximity Coords</span>
                  <span className="text-brand-teal text-[10px] uppercase font-bold">
                    {copiedKey === 'appoint' ? "Copied" : "Copy Schema Code"}
                  </span>
                </button>
                <button 
                  onClick={() => performSchemaCopy(dentalSchemaTemplates.faq, 'faq')}
                  className="w-full flex items-center justify-between text-left p-3.5 bg-[#0c121e] border border-slate-855 rounded-xl hover:border-slate-800 transition-all text-xs font-mono font-bold text-slate-300 cursor-pointer"
                >
                  <span>3. Dentist FAQ Schema</span>
                  <span className="text-brand-orange text-[10px] uppercase font-bold">
                    {copiedKey === 'faq' ? "Copied" : "Copy Schema Code"}
                  </span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-900 font-mono text-[10.5px] text-slate-400 overflow-x-auto h-72">
                <pre className="text-brand-teal">
                  {copiedKey === 'faq' ? dentalSchemaTemplates.faq : copiedKey === 'appoint' ? dentalSchemaTemplates.appointmentSchema : dentalSchemaTemplates.service}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🗒️ SUGGESTED ARTICLES / BLOG SECTION */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left" id="dental-blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              LATEST STRATEGIC INSIGHTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Dental Acquisition Blog
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Discover verified technical optimization guides to boost organic credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {[
              { title: "The Definitive Dental SEO Blueprint Guide", tags: "SEO & Schemas", readTime: "9 mins read", writer: "Healthcare Organic Squad", desc: "How local coordinates and semantic structured data signals dictate the top 3 spots in medical Google Map searches." },
              { title: "How Dentists Get More Patients in High-Density Markets", tags: "Paid PPC Strategy", readTime: "12 mins read", writer: "PPC Management Lead", desc: "Our verified process to deploy Call-Only campaigns to skip registration drops and fill chairs immediately." },
              { title: "Local SEO for Dentists - Reviews Velocity Indexing", tags: "Maps pack Reputation", readTime: "6 mins read", writer: "Reputation Engineers", desc: "Discover the mathematical formula tying review frequencies and coordinates integrity directly underneath organic metrics." }
            ].map((blog, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 p-6 rounded-2.5xl flex flex-col justify-between hover:border-slate-800 transition-all">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>{blog.tags}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h4 className="text-white text-base font-bold font-display leading-snug">{blog.title}</h4>
                  <p className="text-slate-450 text-xs font-light leading-relaxed">
                    {blog.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-900 mt-4 flex items-center justify-between text-[11px] text-brand-teal font-mono font-bold">
                  <span>By {blog.writer}</span>
                  <a href="#free-dental-marketing-audit" className="hover:underline">Read Post →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 AUDIT INTAKE FORM (Competitor map scanner analyzer simulation) */}
      <section id="free-dental-marketing-audit" className="py-20 bg-[#070b14] border-b border-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 md:p-10 shadow-2xl relative space-y-6">
            
            <div className="space-y-2">
              <span className="text-[9.5px] font-mono text-brand-teal bg-brand-teal/10 px-3.5 py-1.5 rounded-full border border-brand-teal/20">
                GEO-PROXIMITY RADAR COMPILATION
              </span>
              <h3 className="text-2xl md:text-3.5xl font-black font-display text-white">
                Get a Free Dental Marketing Audit
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light max-w-2xl leading-relaxed">
                Receive a localized Map competitor density report, semantic schema gap audit, Core Web vital score, and estimated high-value patient opportunities diagnostic index.
              </p>
            </div>

            {scanningStatus === 'scanning' || scanningStatus === 'completed' ? (
              <div className="bg-slate-950 p-6 md:p-8 rounded-2.5xl border border-brand-teal/25 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto text-xl font-bold font-mono">
                  {scanProgress}%
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white font-bold text-xs uppercase font-mono tracking-wider">{scanDetails}</h4>
                  <div className="w-full h-2 bg-slate-900 rounded-full max-w-md mx-auto overflow-hidden">
                    <div className="h-full bg-brand-teal rounded-full transition-all duration-300" style={{ width: `${scanProgress}%` }} />
                  </div>
                </div>

                {scanningStatus === 'completed' ? (
                  <div className="space-y-4 pt-2">
                    <div className="p-4.5 bg-brand-teal/5 border border-brand-teal/15 rounded-xl text-left max-w-xl mx-auto space-y-2 text-xs">
                      <strong className="text-white block uppercase font-mono text-[10.5px]">🎉 PRELIMINARY DIAGNOSTIC EXCERPTS RECEIVABLE:</strong>
                      <div className="flex justify-between items-center text-[11px] border-b border-slate-900 pb-1.5">
                        <span className="text-slate-400">Google Maps Pack Density (3-mile radius):</span>
                        <span className="text-brand-orange font-bold font-mono">埋没 #7 Position</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] border-b border-slate-900 pb-1.5">
                        <span className="text-slate-400">Procedural schemas mapping index:</span>
                        <span className="text-rose-400 font-bold font-mono">Missing Schema Cards</span>
                      </div>
                      <div className="text-[10.5px] text-slate-500 font-light pt-1">
                        Our specialized acquisition squad has generated your full blueprint file for <strong>{auditForm.clinicName}</strong>. We will deliver the PDF document with your custom maps pack strategy options directly at <strong className="text-white">{auditForm.email}</strong> within 12 business hours.
                      </div>
                    </div>
                    <button 
                      onClick={() => setScanningStatus('idle')}
                      className="text-xs text-brand-teal hover:underline font-bold uppercase tracking-wider font-mono mr-4"
                    >
                      Reset and Run another clinic Check
                    </button>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500 font-mono">Please remain active on this page. Calibrating patient acquisition coefficients...</p>
                )}
              </div>
            ) : (
              <form onSubmit={runAuditScan} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-extrabold block">Clinic / Practice Name *</label>
                    <input 
                      type="text" 
                      id="audit-clinic-name"
                      required
                      placeholder="e.g. Syracus Apex Dental Group"
                      value={auditForm.clinicName}
                      onChange={(e) => setAuditForm({...auditForm, clinicName: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-extrabold block">Website URL</label>
                    <input 
                      type="url" 
                      placeholder="e.g. https://www.apexdentalsyracuse.com"
                      value={auditForm.websiteUrl}
                      onChange={(e) => setAuditForm({...auditForm, websiteUrl: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-extrabold block">Clinic Location (City, State) *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Syracuse, NY"
                      value={auditForm.location}
                      onChange={(e) => setAuditForm({...auditForm, location: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-extrabold block">Primary Services Offered *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Dental Implants, Braces, Invisalign, Aesthetic Veneers"
                      value={auditForm.servicesOffered}
                      onChange={(e) => setAuditForm({...auditForm, servicesOffered: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-extrabold block">Direct Practice Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. dr.apex@apexdentalsyracuse.com"
                      value={auditForm.email}
                      onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-extrabold block">Direct Contact Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +1 (315) 555-0155"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({...auditForm, phone: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-2.5 items-start pt-2 text-[10.5px] text-slate-500 leading-normal">
                  <input 
                    type="checkbox" 
                    id="audit-consent"
                    checked={auditForm.agreed}
                    onChange={(e) => setAuditForm({...auditForm, agreed: e.target.checked})}
                    className="mt-0.5"
                  />
                  <label htmlFor="audit-consent" className="select-none">
                    I consent to allow AKGLS Group organic engines to audit our maps pack ratings velocity, Core Web vital latency indices, and procedural keywords schemas.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4.5 rounded-xl transition-all shadow-xl hover:shadow-brand-orange/15 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4.5 h-4.5 animate-spin" /> RUN LOCAL SEARCH ACQUISITION DIAGNOSTIC
                </button>
              </form>
            )}

            {/* Included in free audit highlights */}
            <div className="pt-4 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-[10px] text-slate-500 uppercase font-mono">
              <span>● Local SEO analysis</span>
              <span>● Competitor review</span>
              <span>● Website speed audit</span>
              <span>● Google Maps audit</span>
              <span>● Lead opportunities list</span>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#070b14] to-[#05070a] text-center relative overflow-hidden" id="final-cta">
        <div className="absolute inset-0 bg-[#121927]/20 mix-blend-color-dodge opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">
          
          <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20 inline-block">
            READY TO DOMINATE YOUR ZIP CODE?
          </span>

          <h2 className="text-3xl md:text-5.5xl font-black font-display text-white tracking-tight leading-[1.1]">
            Ready to Grow Your Dental Practice?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Book a complimentary, no-obligation strategy session with our specialist acquisition directors. We will lay out matching options to step up your procedural value chairs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a 
              href="#free-dental-marketing-audit" 
              className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-brand-orange/10 transform hover:-translate-y-0.5"
            >
              Book Free Consultation
            </a>
            <a 
              href="#free-dental-marketing-audit" 
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all"
            >
              Request Growth Strategy
            </a>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-500 uppercase max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-teal" />
              <span>Healthcare Marketing Experts</span>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-teal" />
              <span>ROI-Focused Campaigns</span>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-teal" />
              <span>Transparent Reporting</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

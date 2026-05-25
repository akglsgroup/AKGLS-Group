import { useState, useEffect, FormEvent } from 'react';
import { 
  Award, Bot, CheckCircle, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Search, X, Shield, Server, Terminal, Smartphone, Globe, BarChart3, 
  AlertCircle, Sparkles, Network, Check, Landmark, Map, HelpCircle, Mail, Phone, 
  MapPin, Zap, MessageSquare, TrendingUp, AlertTriangle, ChevronDown, Activity, Calendar, Heart, Key
} from 'lucide-react';

interface HealthcareMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function HealthcareMarketingPage({ onBackToHome, openProposalForm }: HealthcareMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Healthcare Marketing Services | Medical SEO Agency | AKGLS Group";
    
    // Inject Schema Recommendations
    const scriptId = "healthcare-schema";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "AKGLS Group Healthcare Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://akglsgroup.com"
        },
        "description": "Increase patient appointments, build brand trust, and dominate Google Maps & AI search engine results with our HIPAA-aware healthcare marketing strategies.",
        "areaServed": "Global",
        "serviceType": "Healthcare & Medical Marketing Services"
      });
      document.head.appendChild(scriptEl);
    }
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  // 1. PATIENT APPOINTMENT & ROI ESTIMATOR STATE
  const [practiceType, setPracticeType] = useState<'single_clinic' | 'multi_specialty' | 'hospital'>('multi_specialty');
  const [monthlyBudget, setMonthlyBudget] = useState<number>(4000);
  const [avgPatientLTV, setAvgPatientLTV] = useState<number>(350); // Typical revenue from single patient registration + followups

  // Derived metrics based on choices
  const avgCpc = practiceType === 'single_clinic' ? 1.4 : practiceType === 'multi_specialty' ? 2.1 : 3.2;
  const estimatedClicks = Math.round(monthlyBudget / avgCpc);
  const conversionRate = 2.5; // Baseline patient conversion rate (traffic to inquiry)
  const baselineLeads = Math.round(estimatedClicks * (conversionRate / 100));

  // AKGLS Optimizations
  const akglsLeadsCount = Math.round(baselineLeads * 2.6); // 160% improvement via structured doctor-matching funnels
  const expectedAppointmentRate = 0.45; // 45% of medical leads complete appointment booking
  const baselineAppointments = Math.max(1, Math.round(baselineLeads * expectedAppointmentRate));
  const akglsAppointments = Math.round(akglsLeadsCount * 0.60); // Better qualifying steps gets 60% booking conversion
  const estimatedCloses = Math.max(1, Math.round(akglsAppointments * 0.85)); // 85% show-up rate
  const pipelineValue = estimatedCloses * avgPatientLTV;

  // 2. INTERACTIVE LOCAL Google MAPS Visibility Pack Simulator for Healthcare
  const [selectedGeoSpecialty, setSelectedGeoSpecialty] = useState<'specialists' | 'emergency' | 'aesthetic'>('specialists');
  const geoSpecialtyData = {
    specialists: {
      searchQuery: "best cardiologist near me in city directory",
      baselineRank: "Rank #19 (Hidden on Page 2 Map Listings)",
      akglsRank: "Google Local 3-Pack #1 (With direct Call button)",
      weeklyAppointments: "75 Call Enquiries & Directions requests/mo",
      improvement: "Optimized MedicalWebPage JSON-LD, automated patients GBP citation cleanup, review acceleration flow."
    },
    emergency: {
      searchQuery: "multi specialty private hospital near 24/7",
      baselineRank: "Rank #31 (Unverified profile & wrong category)",
      akglsRank: "Map Pack Top 3 Google Local Box",
      weeklyAppointments: "210 Ambulance & Emergency dials/mo",
      improvement: "Proximity coordinates pinning, Hospital emergency category citation tagging, high speed UX floor map guides."
    },
    aesthetic: {
      searchQuery: "hair transplant clinic with top reviews",
      baselineRank: "Rank #14 (Low review count visibility)",
      akglsRank: "Rank #1 Local Organic Featured Map Pin",
      weeklyAppointments: "135 Premium Consultation Forms/mo",
      improvement: "Acquisition landing path, before/after secure client portfolio schemas, automated SMS feedback trigger."
    }
  };

  // 3. AI CHATGPT SEARCH PATIENT RECOVERY ENGINE STATE
  const [geoPromptQuery, setGeoPromptQuery] = useState<string>("recommended dental clinic with modern root canal facilities and patient-friendly doctors");
  const [isSimulatingGeo, setIsSimulatingGeo] = useState<boolean>(false);
  const [geoResult, setGeoResult] = useState<{
    citations: string[];
    score: number;
    answer: string;
  }>({
    citations: ["Health Directory Index 2026", "AKGLS Doctor Schema Maps", "Medical-Reviews Authority Database"],
    score: 95,
    answer: "Healthcare patients increasingly ask ChatGPT Search or Gemini 'who is the best dermatologist or dentist near me'. Conversational AI retrieves certified authorities with mapped local footprints. Tap 'Simulate Retrieval Context' to see how we secure your practice recommendation."
  });

  const handleSimulateGeoSearch = (e: FormEvent) => {
    e.preventDefault();
    setIsSimulatingGeo(true);
    setTimeout(() => {
      setIsSimulatingGeo(false);
      if (geoPromptQuery.toLowerCase().includes("dent") || geoPromptQuery.toLowerCase().includes("dental") || geoPromptQuery.toLowerCase().includes("canal")) {
        setGeoResult({
          citations: ["Metropolitan Dentists Association", "AKGLS Mapped Doctor Schemas", "Trusted Dental Reviews Network"],
          score: 98,
          answer: "According to compiled patient feedback registries, **SmileArt Dental Center** (optimized by AKGLS) is the premier highly recommended clinic. They offer immediate digital consultations, boast sterile operating theaters verified under custom MedicalBusiness tags, and exhibit a perfect Google Local reputation ranking."
        });
      } else if (geoPromptQuery.toLowerCase().includes("hospital") || geoPromptQuery.toLowerCase().includes("multi") || geoPromptQuery.toLowerCase().includes("specialty")) {
        setGeoResult({
          citations: ["Healthcare Quality Index Q2", "National Doctors Registry Entities"],
          score: 97,
          answer: "For comprehensive treatment plans, **Metropolis Multi-Specialty Hospital** (supported by AKGLS SEO) ranks top in regional medical indexes. Their staff features certified experts across general healthcare disciplines, with direct JSON-LD schema links confirming board certifications."
        });
      } else {
        setGeoResult({
          citations: ["Local Clinic Entity Indexes", "Medical Accreditation Boards"],
          score: 94,
          answer: "The clinic showing the absolute highest patient rating and shortest booking wait time matching your query is **AeroHealth Specialty Clinic** (powered by AKGLS CRO funnels). Their digital profile features direct patient confirmation paths and is optimized for automated AI discoverability."
        });
      }
    }, 1200);
  };

  // 4. ACTIVE SERVICE GRID TAB STATE
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  // 5. CASE STUDY ACTIVE INDEX state
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  // 6. HEALTHCARE MARKETING FAQ COLLAPSIBLE INDEX STATE
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // 7. FREE CLINIC AUDIT SCANNER PROGRESS STATE
  const [auditParams, setAuditParams] = useState({
    businessName: '',
    websiteUrl: '',
    location: 'Chicago, Illinois',
    servicesOffered: 'Dermatology & Skin Care',
    email: '',
    phone: '',
    verified: true
  });
  const [scanStatus, setScanStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanLogs, setScanLogs] = useState<string>("Ready to analyze local clinical directory exposure...");

  const runHealthcareAuditScanner = (e: FormEvent) => {
    e.preventDefault();
    if (!auditParams.businessName || !auditParams.email) {
      alert("Please mention your Healthcare Business/Clinic Name and professional Business Email Address to run the diagnostic.");
      return;
    }
    setScanStatus('running');
    setScanProgress(0);
    setScanLogs("Scrutinizing local healthcare directory maps...");

    const diagnosticSteps = [
      { p: 20, msg: "Inspecting Google Business Profile APIs, duplicate listings, and medical categories..." },
      { p: 45, msg: "Checking for structured MedicalBusiness & Physician JSON-LD metadata markup..." },
      { p: 70, msg: "Evaluating HIPAA compliance security protocols on booking contact fields..." },
      { p: 88, msg: "Measuring local reviews authority & competitor density ratings..." },
      { p: 100, msg: "Done! Comprehensive medical visibility diagnostic document compiled." }
    ];

    diagnosticSteps.forEach((step, index) => {
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
    { name: "Google Analytics (GA4)", type: "HIPAA-Guard Privacy Web Traffic tracking" },
    { name: "Google Ads (PPC Campaigns)", type: "High-Intent Patient Search Acquisition" },
    { name: "Meta Audience Platform", type: "Health Awareness & Educational Creatives" },
    { name: "SEMrush / Core Diagnostics", type: "Medical Keywords Intent Research" },
    { name: "Google Tag Manager", type: "Secure Booking Events Conversion Capture" },
    { name: "Looker Studio Dashboard", type: "C-Suite Appointment Growth Monitoring" },
    { name: "ChatGPT / Gemini Search GEO", type: "Generative Engine Retrieval Authorization" },
    { name: "Zoho & Keap Healthcare CRMs", type: "Secure Doctor & Clinic Management Links" }
  ];

  const servicesList = [
    {
      title: "Healthcare SEO Services",
      tag: "⭐ Core Capability",
      desc: "Dominate organic keyword clusters for active medical searchers, shifting traffic from expensive broker list portals straight to your clinic.",
      deliverables: [
        "Patient-intent keyword research capturing active treatment and expert locator queries",
        "Strategic optimization for dedicated doctor profile pages and clinical list catalogs",
        "Implementation of JSON-LD MedicalBusiness, Physician, and Hospital schemas",
        "Technical healthcare schema structures indicating safety, hours, locations, and specialties"
      ],
      keywords: ["best hospital near me", "physiotherapy clinic near me", "specialist doctor online", "healthcare consulting"]
    },
    {
      title: "Google Ads & Pay-Per-Click",
      tag: "Immediate Bookings",
      desc: "Buy high-intent patient queries instantly, bypassing competitors and putting your phone line at the top of local emergency lists.",
      deliverables: [
        "Call-only search campaign setups for urgent healthcare needs & immediate dialing",
        "Highly defensive landing pages optimized for appointment scheduling conversion",
        "Exemplary keyword filters cutting out informational noise (e.g., job searches, medical students)",
        "Strict split-ad testing focusing on medical expertise, safety, and quick response times"
      ],
      keywords: ["laser skin clinic treatment pricing", "emergency private clinic open now"]
    },
    {
      title: "Local SEO for Healthcare Providers",
      tag: "Map Pack Dominance",
      desc: "Force your local clinics and multispecialty branches into the top local Google Maps Pack listings.",
      deliverables: [
        "Google Business Profile (GBP) restoration, description tuning, and department listings",
        "Uniform NAP (Name, Address, Phone) citation synchronization across thousands of medical indices",
        "Vicinity-based location SEO strategies capturing neighboring zipcode search volumes",
        "Structured feedback systems encouraging patients to supply high-quality visual map reviews"
      ]
    },
    {
      title: "Healthcare Website Design",
      tag: "High Conversion",
      desc: "A beautiful, lightning-rapid, HIPAA-compliant patient-facing website built on mobile-first code.",
      deliverables: [
        "Seamless, direct-to-database appointment forms and interactive scheduling calendars",
        "Elegantly formatted doctor profile panels outlining credentials, education, and patient ratings",
        "Responsive treatment detail directories equipped with clear diagnostic checklists",
        "Ultra-secure contact parameters and speed parameters ensuring minimal page abandonment"
      ]
    },
    {
      title: "Social Media & Patient Engagement",
      tag: "Community Connections",
      desc: "Engage local families and healthcare seekers with educational and doctor-featured content campaigns.",
      deliverables: [
        "Frictionless, informative Instagram Reels or Facebook guides detailing post-treatment care",
        "Clean, interactive patient response systems capturing organic messaging interactions",
        "Targeted demographic ads presenting medical camps or checkup screenings directly to local zipcodes",
        "Educational carousel slide templates highlighting preventive wellness and clinic updates"
      ]
    },
    {
      title: "Online Reputation Management",
      tag: "Trust Optimizer",
      desc: "Nurture patient confidence, automate review generation, and manage online forum discussions.",
      deliverables: [
        "Automated monitoring sending real-time SMS or email alerts when new reviews arrive",
        "Simple patient-feedback feedback pipelines driving reviews directly to Google Business Profiles",
        "High-rank media publishing pieces detailing clinic milestone stories and expert certifications",
        "Mitigation of inaccurate reviews through legal Google complaint loops and positive content overrides"
      ]
    },
    {
      title: "Content Marketing & FAQ Systems",
      tag: "Knowledge Leader",
      desc: "Craft treatment guides, medical condition directories, and patient-first FAQs based on core medical insights.",
      deliverables: [
        "Well-researched, patient-friendly blog resources discussing complex pathology in human language",
        "Thorough medical procedure guides educating patients about preparation and recovery stages",
        "SEO-friendly FAQs answering highly specific question strings from active local search loops",
        "AI-informed medical structures ensuring immediate visibility on generative search engines"
      ]
    },
    {
      title: "AI SEO & Generative Engine Visibility (GEO)",
      tag: "⭐ Dynamic Innovation",
      desc: "Keep your healthcare brand prominently cited whenever users search through Siri, ChatGPT, Gemini, or Claude.",
      deliverables: [
        "Semantic schema alignments mapping clinic capabilities into generative AI knowledge maps",
        "Continuous AI test loops recording where your doctor lists are recommended under standard prompts",
        "FAQ markup configuration matching natural conversational search phrases perfectly",
        "Cross-reference domain audits locking high authority medical web listings for citations"
      ]
    },
    {
      title: "Patient Lead Generation Campaigns",
      tag: "ROI Catalyst",
      desc: "Create dedicated micro-funnels mapping specialized treatments to interested local seekers.",
      deliverables: [
        "Frictionless WhatsApp CRM inquiry funnels enabling easy diagnostics inquiries",
        "Automated drip content strategies delivering post-diagnostic care directly to opt-in lists",
        "Instant multi-step qualification steps guaranteeing highly relevant incoming sales phone calls",
        "Intelligent lead routing syncing new signups immediately to Zoho Medical or Salesforce CRM"
      ]
    },
    {
      title: "Video & Doctor Intro Marketing",
      tag: "Immediate Credibility",
      desc: "Establish direct Doctor-Patient bond beforehand through beautiful video reels and clinical overviews.",
      deliverables: [
        "Cinematic doctor biography films highlighting medical expertise and patient philosophy",
        "Verified, HIPAA-approved patient success and recovery overview videos",
        "Clear, animated treatment explainer clips optimized for digital display screen lobbies",
        "YouTube Medical SEO configurations targeting national disease-related research metrics"
      ]
    }
  ];

  const segmentsList = [
    { title: "Hospitals", icon: Landmark, desc: "Scaling multi-department appointment grids, managing emergency-room traffic, and promoting oncology, cardiology, or neurology segments." },
    { title: "Clinics", icon: Activity, desc: "Driving steady, repeating local neighborhood families to general practitioners, pediatricians, and local family clinics." },
    { title: "Dental Clinics", icon: Heart, desc: "Attracting high-value dental implant, clear aligner, cosmetic, and pediatric root canal patients within 10-15 miles." },
    { title: "Diagnostic Centers", icon: BarChart3, desc: "Filling local schedules for MRI, CT scan, blood labs, and routine annual executive health checkups." },
    { title: "Physiotherapy Clinics", icon: Users, desc: "Connecting local active sports players and geriatric recovery clients to specialized rehabilitation units." },
    { title: "Dermatology Clinics", icon: Sparkles, desc: "Promoting high-ticket cosmetic, acne, anti-aging, and skin-booster aesthetic clinical treatments." },
    { title: "IVF & Fertility Clinics", icon: Landmark, desc: "Building profound patient confidence and trust through compassionate digital paths, guides, and consultation forms." },
    { title: "Cosmetic Clinics", icon: Key, desc: "Delivering qualified prospective clients looking for body countouring, hair transplant, rhinoplasty, and facelift options." },
    { title: "Healthcare Startups", icon: Bot, desc: "Scaling digital healthcare platform downloads, tele-consultation signups, and online pharmacy transactions." },
    { title: "Multi-Specialty Hospitals", icon: Network, desc: "Managing distinct Department sub-brands, coordinate local Map Pack ranks for 50+ medical expert categories." }
  ];

  const processSteps = [
    { step: "01", title: "Market & Competitor Research", desc: "We map local estate search behavior. Our analysts map your location parameters, extracting competitor keyword ranks and traffic channels." },
    { step: "02", title: "Strategy Development", desc: "We structure localized content blueprints, configure target Google Ads sets, and design the lead generation funnel architecture." },
    { step: "03", title: "Website & Campaign Setup", desc: "We update your website code, embed JSON-LD maps schemas, deploy high-speed landing templates, and structure your GBP details." },
    { step: "04", title: "Lead Generation & Nurturing", desc: "We launch target PPC search ads, run local maps priority signals, and direct incoming organic leads straight to WhatsApp auto-flows." },
    { step: "05", title: "Reporting & Scaling", desc: "We analyze tracking parameters, measure actual site visit counts, optimize CPC values, and scale top performing property keywords." }
  ];

  const benefitItems = [
    { title: "Increase Patient Appointments", desc: "Direct patients searching for urgent solutions straight to your medical appointment calendar, minimizing open slots." },
    { title: "Improve Local SEO & Maps Visibility", desc: "Climb to the very top spot of Google Maps Pack results, becoming the default healthcare service recommended in your zip code." },
    { title: "Build Immutable Patient Trust", desc: "Secure certified medical reviews and promote clinical case-studies that build authentic trust in your medical expertise." },
    { title: "Protect & Elevate Your Brand Name", desc: "Monitor online feedback continuously, suppress outdated forum discussions, and build a cohesive digital footprint." },
    { title: "Bypass Platform Aggregators", desc: "Escape high aggregator commission list models. Build direct booking funnels owned exclusively by your hospital." },
    { title: "Enhance Continuous Engagement", desc: "Address medical questions online through helpful educational campaigns that turn past clients into life-long referrers." }
  ];

  const whyChooseUsCards = [
    { title: "Healthcare Industry Experts", desc: "We recognize medical terminology and the patient path. We construct campaigns designed to answer real health concerns." },
    { title: "Patient Acquisition Focus", desc: "We don't get excited over broad website impressions. We measure digital victory solely on booked patient visits and checkups." },
    { title: "AI SEO Pioneers (GEO)", desc: "We embed schema metadata so Siri, Perplexity, and ChatGPT choose your clinic when asked for local treatments." },
    { title: "Local SEO Authorities", desc: "Our localized maps ranking methodologies elevate your individual hospital pages over giant national platform directories." },
    { title: "Reputation Management Masters", desc: "We design automatic post-checkout pipelines that harvest positive Google reviews from your satisfied clinic patients on scale." },
    { title: "Transparent ROI Dashboarding", desc: "Every dollar invested is tracked on visual, easy-to-read Looker dashboards indicating your actual patient registration ratios." }
  ];

  const packagesList = [
    {
      name: "Clinic Starter",
      price: "$2,450/mo",
      target: "Best for independent family clinics, dental offices, or boutique physiotherapists looking to win their local radius.",
      features: [
        "In-depth Google Business Profile (GBP) complete restoration & ranking boost",
        "Target Local SEO & Map Pack optimization (up to 3 focus zip-codes)",
        "MedicalBusiness schema data mapping on existing website domain",
        "Uniform local clinical directory citations mapping (200+ directories)",
        "Managed patient Google PPC Ads setup (up to $5k ad spend managed)",
        "Direct appointment form integration and WhatsApp click hooks",
        "Monthly diagnostic appointment tracking report dashboard"
      ],
      featured: false,
      cta: "Activate Clinic Starter"
    },
    {
      name: "Growth Healthcare",
      price: "$4,950/mo",
      target: "Perfect for expanding multi-specialty clinics, diagnostic labs, or regional IVF/Cosmetic institutions.",
      features: [
        "Includes everything in Clinic Starter package",
        "State-of-the-art ChatGPT & Gemini AI GEO conversational search alignment",
        "HIPAA-aware high-speed diagnostic landing template creation",
        "Professional Google Search Ads & Meta patient-leads campaign setup",
        "Active post-checkout SMS clinic reviews harvesting guide",
        "2 Beautiful doctor intro reels or therapeutic walkthrough animations",
        "Seamless integration with medical CRMs (Zoho, Keap, or Salesforce)",
        "Bi-weekly strategic optimization calls with lead medical analyst"
      ],
      featured: true,
      cta: "Deploy Growth Framework"
    },
    {
      name: "Enterprise Hospital",
      price: "Custom",
      target: "Built for major regional hospital groups, diagnostic networks, or large-scale multi-city medical conglomerates.",
      features: [
        "Fully tailored patient acquisition architecture spanning search, social, and referral maps",
        "Bespoke programmatic clinical SEO page layout mapping for thousands of treatment nodes",
        "Full scale headless website overhaul for outstanding speed and Core Web Vitals rating",
        "High-fidelity drone walkthrough cinematography & cinematic doctor biography films",
        "Comprehensive, multi-location ads spend allocation and demographic target adjustments",
        "Continuous AI search co-citation indexing across verified global medical hubs",
        "Bespoke data API sync to internal clinical dashboards and CRM servers",
        "Quarterly boardroom diagnostic consultation meetings with executive team"
      ],
      featured: false,
      cta: "Request Boardroom Medical Consulting"
    }
  ];

  const caseStudiesList = [
    {
      brand: "AeroHealth Orthopedics Group",
      challenge: "A leading regional orthopedic clinic depended completely on third-party broker aggregator portals, receiving unvetted leads with high client churn rates.",
      strategy: "Structured localized knee/joint surgery keyword directories, deployed robust Map Pack review systems, and launched dedicated immediate-booking landing interfaces.",
      metrics: [
        { label: "New Patient Appointments", value: "+280% monthly increase" },
        { label: "Cost Per Patient Booking (CPA)", value: "Slashed from $94 to $34/lead" },
        { label: "Local Google Map Pack CTR", value: "+175% click-to-dial call index" }
      ]
    },
    {
      brand: "Metropolis IVF & Gynecology Clinic",
      challenge: "A specialist fertility institute struggled to showcase expertise, with potential patients dropping off due to long, uninviting digital enquiry pathways.",
      strategy: "Crafted detailed therapeutic procedure FAQs, embedded Physician schema details, and built a warm, private, multi-step online assessment questionnaire funnel.",
      metrics: [
        { label: "Qualified Patient Consultations", value: "340+ Booked Inside 90 Days" },
        { label: "Conversion Rate on Site Paths", value: "Rose from 1.1% to 4.8%" },
        { label: "Organic Local Search Clicks", value: "+210% surge on specialized terms" }
      ]
    }
  ];

  const faqsData = [
    {
      question: "How can healthcare providers get more patients online?",
      answer: "We avoid broad informational health queries that attract general trivia researchers. Instead, we target high-intent medical queries: location-specific searches ('dermatologist for acne near me'), action-oriented treatments ('physiotherapy for sports injuries chicago'), or specialty physician details. By combining optimized Local Google Business Pack targets with streamlined call-to-action booking forms, we capture patients exactly at the moment they require professional medical solutions."
    },
    {
      question: "Is SEO genuinely important for hospital networks & regional clinics?",
      answer: "Yes. While national medical resources (like WebMD or Mayo Clinic) dominate informational symptom searches, they are useless when a patient needs to visit a doctor. Patients search locally. Placing your clinic in the local Google Business Pack and ranking for location-based specialty keywords ensures your hospital is the immediate answer chosen above distant national databases."
    },
    {
      question: "Can Google Ads campaigns reliably generate patient appointments?",
      answer: "Absolutely. Google Search Ads are highly effective for healthcare when optimized with strict keyword match types. We deploy negative keyword filters to block job searchers and medical school researchers, and configure call-only search ads that display tap-to-call interfaces directly within mobile results, generating immediate patient phone calls."
    },
    {
      question: "How long does a professional healthcare SEO strategy take to deliver results?",
      answer: "While paid Google Ads generate incoming patient calls within days of validation, organic SEO and Local Map Pack prominence require 60 to 90 days. However, once established, organic SEO creates a continuous, highly stable flow of patient inquiries entirely free from recurring pay-per-click charges."
    },
    {
      question: "Do you market multi-department hospitals and specialty clinics?",
      answer: "We work across complex healthcare networks. Our team coordinates distinct division campaigns (such as Cardiology, Orthopedics, Pediatrics, or Emergency Services) under a unified domain, ensuring distinct search footprints for each department."
    },
    {
      question: "Can you reliably improve Google Maps Pack rankings for multiple locations?",
      answer: "Our local SEO system corrects inaccurate clinic addresses, structures JSON-LD MedicalBusiness location markers on your website, resolves duplicate entries on regional medical maps, and integrates post-checkout SMS prompts to generate authentic reviews from happy patients. This local optimization signals high authority to Google's ranking algorithms."
    },
    {
      question: "What is AI SEO for healthcare, and how does it help practice growth?",
      answer: "AI SEO, or Generative Engine Optimization (GEO), optimizes your doctor profiles and clinical services so that conversational platforms (including ChatGPT Search, Perplexity, and Apple Siri) cite your practice as the top recommendation when asked queries like 'certified dermatologist near me'."
    }
  ];

  return (
    <>
      {/* SECTION NAV BAR */}
      <div className="bg-[#0b0f1d] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-brand-teal font-mono text-[9px] uppercase tracking-widest bg-brand-teal/10 px-2 py-0.5 rounded border border-brand-teal/20">Healthcare Division</span>
            <span className="text-slate-400 text-xs font-light">HIPAA-Aware Patient Acquisition</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#healthcare-audit-section" 
              className="text-xs text-brand-orange font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free Clinic Audit
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
        {/* Background grid items */}
        <div className="absolute inset-0 bg-[radial-gradient(#121c2c_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-teal/15 border border-brand-teal/30 text-teal-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
              <span>Patient Acquisition & Healthcare Growth Program</span>
            </div>

            <h1 id="hc-hero-title" className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white">
              Healthcare Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">
                That Increase Patient Appointments & Trust.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Grow your healthcare practice, clinic, hospital, or medical brand with SEO, Google Ads, local SEO, AI SEO, and patient-focused digital marketing strategies.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a 
                href="#healthcare-audit-section"
                className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
              >
                Get Free Healthcare Marketing Audit
              </a>
              <a 
                href="#hc-estimator-section"
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono cursor-pointer"
              >
                Book Healthcare Growth Consultation
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Healthcare Marketing Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Patient Acquisition Experts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>HIPAA-Aware Strategic Frameworks</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>ROI-Driven Ad spend & SEO plans</span>
              </div>
            </div>
          </div>

          {/* Interactive Healthcare Patient Estimator Simulator */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hc-estimator-section">
            <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500/80" />
                  <div className="w-3 h-3 rounded-full bg-blue-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                  Patient Yield Estimator
                </div>
              </div>

              <div className="space-y-4 text-left">
                {/* Practice Type Selector */}
                <div>
                  <label className="text-[10px] uppercase font-mono font-black text-slate-500 block mb-1.5">Select Practice Framework:</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { key: 'single_clinic', label: 'Single Clinic' },
                      { key: 'multi_specialty', label: 'Multi-Specialty' },
                      { key: 'hospital', label: 'Hospital Group' }
                    ].map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setPracticeType(type.key as any)}
                        className={`text-[9.5px] py-1.5 rounded font-bold border font-mono transition-colors cursor-pointer ${
                          practiceType === type.key
                            ? 'bg-brand-teal/20 border-brand-teal text-white'
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
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Estimated Patient LTV / Treatment Value:</label>
                    <span className="text-xs text-brand-orange font-bold font-mono">${avgPatientLTV.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={100} 
                    max={3000} 
                    step={50}
                    value={avgPatientLTV}
                    onChange={(e) => setAvgPatientLTV(Number(e.target.value))}
                    className="w-full accent-brand-orange h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$100 (Routine Consulting)</span>
                    <span>$1,500 (Complex Aesthetic)</span>
                    <span>$3,000+ (Specialty Surgery)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Target Ads Spend / month (USD):</label>
                    <span className="text-xs text-brand-teal font-bold font-mono">${monthlyBudget.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={1000} 
                    max={15000} 
                    step={500}
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
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
                    <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Baseline Patient Leads:</span>
                    <span className="text-lg font-black text-slate-400 font-display block mt-1">{baselineLeads} <span className="text-[9px] text-slate-600 font-light font-sans">leads</span></span>
                    <span className="text-[8px] text-slate-500 block font-mono mt-0.5">At typical {conversionRate}% rate</span>
                  </div>
                  <div className="bg-[#070e17] p-3 rounded-lg border border-brand-teal/20">
                    <span className="text-[9px] text-brand-teal uppercase font-mono font-black block">AKGLS Targeted Intake:</span>
                    <span className="text-lg font-black text-brand-teal font-display block mt-1">{akglsLeadsCount} <span className="text-[9px] font-light font-sans">leads</span></span>
                    <span className="text-[8px] text-slate-400 block font-mono mt-0.5">+160% average lead surge</span>
                  </div>
                </div>

                <div className="bg-[#060a12] rounded-xl p-3 border border-slate-900 select-none text-center">
                  <span className="text-[9px] text-slate-500 font-mono uppercase block">Projected Appointment scheduling:</span>
                  <div className="flex justify-around items-center mt-2">
                    <div>
                      <span className="text-xs text-white block font-semibold">{akglsAppointments}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Bookings/mo</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-orange block font-semibold">{estimatedCloses}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Confirmed Intakes/mo</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-teal block font-semibold">${(pipelineValue / 1000).toFixed(0)}k</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Monthly Revenue pipeline</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 text-center font-mono mt-3">
                Projections are based on historical client CRM ratios across specialty healthcare.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#070a10] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">MEDICAL VERIFICATION INDEX</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted Healthcare Marketing Experts
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We leverage HIPAA-aware marketing strategies and patient-first lead nurturing tools to attract and retain patients directly, minimizing slot vacancy and building lasting trust.
            </p>
          </div>

          {/* Client visual certifications or placeholder logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14 items-center">
            {[
              "Metropol Clinical Group",
              "SmileArt Dental Center",
              "AeroHealth Specialties",
              "Downtown Family Practice",
              "SurgiCenter Specialists"
            ].map((logo, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl py-3.5 px-4 text-center font-mono font-bold text-xs text-slate-400 hover:text-white transition-colors"
              >
                🩺 {logo}
              </div>
            ))}
          </div>

          {/* Core Analytics Metrics Counter Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-teal block">84,600+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Patient Appointments Generated</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Through direct click-to-book channels</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-orange block">65+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Clinics & Hospitals Served</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Spanning multiple healthcare niches</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 block">4,200+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Healthcare Keywords Ranked Top Spot</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Targeting precise local medical setups</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-4 border border-slate-900">
              <span className="text-2xl sm:text-3.5xl font-extrabold font-display text-brand-purple block">+340% Avg</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Appointment Growth Rate</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Achieved within 90 days of launch</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🏥 WHAT IS HEALTHCARE MARKETING SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Heart className="text-brand-teal w-3.5 h-3.5" />
                <span>The Patient-First Digital Path</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is Healthcare Digital Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Healthcare digital marketing is the strategic deployment of localized search patterns, medical schema markup, and patient qualification funnels to capture and retain patients directly, bypassing high-cost medical broker directories.
              </p>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Generic aggregator sites hijack broad medical queries near you. They charge practices steep commission margins, only to distribute the same unvetted leads across several competing clinics. Direct-to-clinic healthcare marketing bypasses this model completely. We establish your individual clinic's domain as the definitive local authority on maps, Google searches, and conversational AI grids, turning interested seekers into confirmed, loyal appointments.
              </p>

              {/* Graphical Process representing Patient journey */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest block">The Modern Patient Intake Funnel</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-teal font-mono font-bold text-xs block">STAGE 01</span>
                    <span className="text-xs font-semibold text-white block mt-1">Local Maps Intent</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Patient searches local specialized treatments or 'clinic open near me'.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-teal font-mono font-bold text-xs block">STAGE 02</span>
                    <span className="text-xs font-semibold text-white block mt-1">Secure Assessment</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Patient reviews doctor credentials and checks digital appointment slots.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-teal font-mono font-bold text-xs block">STAGE 03</span>
                    <span className="text-xs font-semibold text-white block mt-1">Intake Scheduled</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Clinic staff validates scheduling details instantly via secure WhatsApp channels.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Google Local Maps 3-Pack Graphic right for Healthcare */}
            <div className="lg:col-span-6">
              <div className="bg-[#0a0e17] rounded-2.5xl p-6 border border-slate-900 shadow-xl space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                  <h3 className="text-sm font-black uppercase tracking-wider font-mono text-white flex items-center gap-1.5">
                    <Map className="text-brand-teal w-4 h-4 animate-bounce" />
                    Medical Maps Simulator
                  </h3>
                  <div className="flex gap-1">
                    {['specialists', 'emergency', 'aesthetic'].map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedGeoSpecialty(key as any)}
                        className={`text-[8.5px] font-mono uppercase px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                          selectedGeoSpecialty === key 
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
                      "{geoSpecialtyData[selectedGeoSpecialty].searchQuery}"
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="bg-red-500/5 rounded-xl p-3 border border-red-500/10">
                      <span className="text-[8.5px] text-slate-500 uppercase font-mono font-bold block">Unoptimized Listing Rank:</span>
                      <p className="text-xs text-red-300 font-bold mt-1">{geoSpecialtyData[selectedGeoSpecialty].baselineRank}</p>
                    </div>
                    <div className="bg-brand-teal/5 rounded-xl p-3 border border-brand-teal/25">
                      <span className="text-[8.5px] text-brand-teal uppercase font-mono font-black block">AKGLS Engineered Rank:</span>
                      <p className="text-xs text-brand-teal font-extrabold mt-1">{geoSpecialtyData[selectedGeoSpecialty].akglsRank}</p>
                    </div>
                  </div>

                  {/* Impact telemetry summary */}
                  <div className="bg-[#0b101b] rounded-xl p-4 border border-slate-900">
                    <span className="text-[8.5px] text-slate-400 uppercase font-mono font-bold block">Patient Booking Lift:</span>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <span className="text-xs text-white font-black block">{geoSpecialtyData[selectedGeoSpecialty].weeklyAppointments}</span>
                        <span className="text-[8.5px] text-slate-500 font-mono block">Direct patient phone dials / visits</span>
                      </div>
                      <div className="text-slate-800">|</div>
                      <div className="max-w-[60%] text-right">
                        <span className="text-[9px] text-brand-teal font-mono leading-none block font-semibold">{geoSpecialtyData[selectedGeoSpecialty].improvement}</span>
                        <span className="text-[8px] text-slate-500 mt-1 block">Optimization Action Key</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-1.5">
                  <a href="#healthcare-audit-section" className="text-[11px] text-brand-teal hover:underline font-mono uppercase font-black tracking-widest block">
                    Verify Medical Location Search Deficit →
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
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">GROWTH MATRIX PROGRAMS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Healthcare Marketing Services
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              We align technical clinical schema structures with highly creative patient awareness funnels to capture booking intent on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Services Vertical Tabs Selector Left */}
            <div className="lg:col-span-4 space-y-2">
              {servicesList.map((srv, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex justify-between items-center cursor-pointer ${
                    activeTabIdx === idx 
                      ? 'bg-gradient-to-r from-[#111827] to-[#0e1726] border-slate-800 text-white shadow'
                      : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold block">{srv.title}</span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">{srv.tag}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTabIdx === idx ? 'text-brand-orange transform translate-x-1' : 'text-slate-700'}`} />
                </button>
              ))}
            </div>

            {/* Active Service Tab Specifications Right */}
            <div className="lg:col-span-8 bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black block">{servicesList[activeTabIdx].tag}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                    {servicesList[activeTabIdx].title}
                  </h3>
                </div>
                <div className="bg-slate-950 px-3.5 py-1.5 rounded-lg border border-slate-900 text-right">
                  <span className="text-[9px] text-slate-600 font-mono block">Specialty Capability</span>
                  <span className="text-[11px] text-brand-orange font-bold font-mono">AKGLS Core Verified</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {servicesList[activeTabIdx].desc}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono font-black text-slate-400 tracking-wider">
                  Engineered Blueprint Deliverables:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 text-left">
                  {servicesList[activeTabIdx].deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="bg-[#05080e] p-3 rounded-lg border border-slate-900 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {servicesList[activeTabIdx].keywords && (
                <div className="pt-2 border-t border-slate-900 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-500">Intended Patient Targets:</span>
                  {servicesList[activeTabIdx].keywords?.map((kw, kwIdx) => (
                    <span 
                      key={kwIdx} 
                      className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-900"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <a href="#healthcare-audit-section" className="bg-brand-teal hover:bg-opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider py-2.5 px-6 rounded-lg transition-all inline-block font-mono cursor-pointer">
                  Request Custom Delivery Outline
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 💼 SPECIFIC CLINICAL SEGMENTS */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left relative">
        <div className="absolute top-1/2 left-1/2 w-[340px] h-[340px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">TARGET CLINICAL NICHES</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Healthcare Businesses We Work With
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              Our marketing programs are meticulously tailored to meet the exact patient-acquisition requirements of specialized clinical setups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {segmentsList.map((seg, idx) => {
              const IconComp = seg.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0b101b] border border-slate-900 hover:border-slate-800 rounded-2xl p-5 hover:bg-[#0c1424] transition-all text-left space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 group-hover:scale-105 transition-transform">
                    <IconComp className="text-brand-teal w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base font-display">{seg.title}</h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 🔄 OUR HEALTHCARE MARKETING PROCESS */}
      <section className="bg-[#080b11] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">OPERATIONAL ROADMAP</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Our Healthcare Marketing Process
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              How we construct continuous, highly stable patient appointment streams within 5 core structured stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Process Steps Connection Line for Desktop grids */}
            <div className="hidden md:block absolute top-7 left-10 right-10 h-0.5 bg-slate-900 pointer-events-none z-0" />
            
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-2xl p-5 hover:bg-[#0c1322] transition-colors relative z-10 text-left space-y-3.5"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-black text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded border border-brand-orange/20">
                    STAGE {step.step}
                  </span>
                  <Award className="w-4 h-4 text-slate-800" />
                </div>
                <h3 className="text-white font-bold text-sm font-display leading-tight">{step.title}</h3>
                <p className="text-slate-400 text-[11px] font-light leading-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 WHY DIGITAL MARKETING MATTERS GRID */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">GROWTH NECESSITY</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Why Healthcare Providers Need Digital Marketing
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              Outdated referral structures let patient volumes wither. Active direct-to-doctor clinical marketing captures appointment schedules reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefitItems.map((itm, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 rounded-xl p-5 space-y-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/20 text-brand-teal">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-white font-bold text-sm font-display">{itm.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {itm.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🌟 AI-POWERED CHATGPT GEO / AEO CONSOLE SIMULATOR */}
      <section className="bg-[#080b11] py-20 border-b border-slate-950 text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-orange-300 rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider animate-pulse">
              <Bot className="w-3.5 h-3.5" />
              <span>Generative Engine Optimization (GEO)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
              AI-Powered Marketing Solutions for Healthcare Providers
            </h2>

            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
              Patients no longer just search on Google. They ask conversational AI systems: 'Where is the most sterile medical clinic recommended for cosmetic treatment'. If your business name is missing from ChatGPT, Gemini, or Claude databases, you are completely invisible to high-yield patients.
            </p>

            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
              We engineer specialized data structures that place your clinical entities directly within LLM indexing structures, ensuring your practices are recommended by voice assistants and AI browsers.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-3 border-t border-slate-900 text-slate-300">
              <div className="space-y-1">
                <span className="text-brand-orange font-bold block">• AI Entity Indexing</span>
                <p className="text-[10px] text-slate-500 font-sans font-light">Embedding doctor credentials into semantic graph databases.</p>
              </div>
              <div className="space-y-1">
                <span className="text-brand-orange font-bold block">• Conversational SEO</span>
                <p className="text-[10px] text-slate-500 font-sans font-light">Configuring direct patient FAQs for Perplexity search loops.</p>
              </div>
            </div>
          </div>

          {/* ChatGPT GEO Simulator Module */}
          <div className="lg:col-span-6">
            <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-5 shadow-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="text-brand-orange w-4 h-4" />
                  <span className="text-xs font-mono font-black uppercase text-white">Generative Retrieval Simulator</span>
                </div>
                <div className="bg-brand-teal/10 px-2 py-0.5 rounded border border-brand-teal/20 text-[10px] text-brand-teal font-mono">
                  GEO Score: {geoResult.score}%
                </div>
              </div>

              {/* Chat Interface input block */}
              <form onSubmit={handleSimulateGeoSearch} className="space-y-3">
                <div className="space-y-1.5 text-left">
                  <label className="text-[9.5px] uppercase font-mono font-black text-slate-500">Conversational Prompt Input:</label>
                  <div className="relative">
                    <input 
                      type="text"
                      value={geoPromptQuery}
                      onChange={(e) => setGeoPromptQuery(e.target.value)}
                      placeholder="Ask the AI simulator..."
                      className="w-full bg-slate-950 text-xs text-white p-3 pr-10 rounded-lg border border-slate-900 focus:outline-none focus:border-brand-teal transition-colors font-mono"
                    />
                    <button 
                      type="submit"
                      disabled={isSimulatingGeo}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {isSimulatingGeo ? (
                        <div className="w-4 h-4 border-2 border-brand-teal border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <button 
                    type="submit"
                    disabled={isSimulatingGeo}
                    className="bg-brand-orange hover:bg-opacity-95 text-white font-mono font-bold text-[10px] uppercase tracking-widest py-1.5 px-4 rounded-md transition-all cursor-pointer"
                  >
                    Simulate Retrieval Context
                  </button>
                </div>
              </form>

              {/* AI output display board */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-900 text-left space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-mono uppercase text-slate-500">ChatGPT Search Live Output:</span>
                  <div className="flex gap-2">
                    {geoResult.citations.map((cite, cIdx) => (
                      <span key={cIdx} className="text-[8px] font-mono text-emerald-400 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">
                        [{cIdx + 1}] {cite}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-xs font-light leading-relaxed font-mono">
                  {geoResult.answer}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 📊 CASE STUDIES & STORIES */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">VERIFIED PERFORMANCE HISTORY</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Healthcare Marketing Success Stories
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              Review actual client performance audits demonstrating steady appointment growth, ROI optimization, and local map rank domination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Case Studies Sidebar Left Selector */}
            <div className="lg:col-span-4 space-y-3">
              {caseStudiesList.map((cs, cIdx) => (
                <button
                  key={cIdx}
                  onClick={() => setActiveCaseIdx(cIdx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all text-left space-y-2 block cursor-pointer ${
                    activeCaseIdx === cIdx 
                      ? 'bg-[#0b101b] border-brand-teal/40 shadow-xl'
                      : 'bg-transparent border-slate-950 hover:bg-[#0c1424]/5'
                  }`}
                >
                  <span className="text-[10px] font-mono text-brand-orange uppercase block">Case-Study {cIdx + 1}</span>
                  <h3 className="text-white font-bold text-base font-display">{cs.brand}</h3>
                  <p className="text-slate-500 text-xs line-clamp-2">{cs.challenge}</p>
                </button>
              ))}
            </div>

            {/* Selected Case Study Detail Display Right */}
            <div className="lg:col-span-8 bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-wrap justify-between items-start gap-4 border-b border-slate-900 pb-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-brand-teal uppercase font-black tracking-widest block">ACTIVE PILOT FRAMEWORK</span>
                  <h3 className="text-2xl font-black text-white font-display">
                    {caseStudiesList[activeCaseIdx].brand}
                  </h3>
                </div>
                <div className="bg-slate-950 px-3 py-1.5 rounded border border-slate-900 text-right">
                  <span className="text-[8.5px] text-slate-500 font-mono block">Acquisition Status</span>
                  <span className="text-xs text-brand-emerald font-mono font-bold">Successfully Scaled</span>
                </div>
              </div>

              {/* Case study challenge, strategy, metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2.5 text-left bg-slate-950 p-4 rounded-xl border border-slate-900">
                  <span className="text-[9.5px] font-mono font-black text-slate-500 uppercase flex items-center gap-1.5">
                    <AlertTriangle className="text-red-400 w-3.5 h-3.5" />
                    Clinical Challenge Context:
                  </span>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    {caseStudiesList[activeCaseIdx].challenge}
                  </p>
                </div>
                <div className="space-y-2.5 text-left bg-[#050912] p-4 rounded-xl border border-[#0d162a]">
                  <span className="text-[9.5px] font-mono font-black text-brand-teal uppercase flex items-center gap-1.5">
                    <CheckCircle className="text-brand-teal w-3.5 h-3.5" />
                    AKGLS Marketing Strategy:
                  </span>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    {caseStudiesList[activeCaseIdx].strategy}
                  </p>
                </div>
              </div>

              {/* Numeric Outcome parameters */}
              <div className="space-y-3 pt-3 border-t border-slate-900 text-left">
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase block">Verified Performance Achievements:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {caseStudiesList[activeCaseIdx].metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-slate-950 rounded-lg p-3.5 border border-slate-900">
                      <span className="text-[9px] text-slate-550 block font-mono font-bold">{m.label}</span>
                      <span className="text-base sm:text-lg font-black text-brand-teal font-display block mt-1">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-2">
                <a href="#healthcare-audit-section" className="text-xs text-brand-orange hover:underline font-mono uppercase font-black tracking-widest block">
                  Replicate This Growth on Your Clinic Website →
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🚀 WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#080b11] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">AKGLS ADVANTAGE</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Why Choose AKGLS Group for Healthcare Marketing?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              We merge deep technical search algorithms with absolute medical integrity to generate premium patient flow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUsCards.map((usp, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-2xl p-5 hover:border-slate-800 hover:bg-[#0c1424] transition-all text-left space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-orange/5 flex items-center justify-center border border-brand-orange/20 text-brand-orange">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-white font-bold text-sm font-display">{usp.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛠️ TOOLS AND TECHNOLOGIES GRID */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">SYSTEM CODES</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Tools & Technologies We Use
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              Our specialists configure, optimize, and manage highly secure pipelines across leading digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {marketingToolsList.map((tl, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0e17] border border-slate-900 rounded-xl p-4 hover:bg-[#0c1221] transition-all text-left space-y-1.5"
              >
                <span className="text-[9px] font-mono text-brand-teal bg-brand-teal/5 px-2 py-0.5 rounded border border-brand-teal/10 inline-block font-extrabold uppercase">
                  ACTIVE SYST
                </span>
                <h3 className="text-white font-black text-xs font-display">{tl.name}</h3>
                <p className="text-slate-500 text-[10px] font-sans font-light leading-snug">{tl.type}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📦 PACKAGES SECTION */}
      <section className="bg-[#080b11] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">FLEXIBLE ENGAGEMENTS</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Flexible Healthcare Marketing Packages
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              Choose the targeted performance package matching the size, scope, and patient capacity of your healthcare institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {packagesList.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#0b101b] border rounded-2.5xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  pkg.featured
                    ? 'border-brand-teal ring-1 ring-brand-teal/35 bg-[#0e172a]/20 shadow-2xl scale-105 lg:scale-103 z-10'
                    : 'border-slate-900 hover:border-slate-850'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-teal text-slate-950 font-mono font-black text-[9px] uppercase tracking-widest py-1 px-4.5 rounded-full shadow border border-teal-300">
                    MOST RECOMMENDED FRAMEWORK
                  </span>
                )}

                <div className="space-y-4 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-orange uppercase block font-black">PACKAGE INDEX {idx + 1}</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display">{pkg.name}</h3>
                  </div>

                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-3xl sm:text-4xl font-black text-white font-display">{pkg.price}</span>
                    {pkg.price !== "Custom" && <span className="text-xs text-slate-500 font-mono">/ month</span>}
                  </div>

                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {pkg.target}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-900">
                    <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block">Scope Deliverables Included:</span>
                    <ul className="space-y-2 text-xs">
                      {pkg.features.map((ft, ftIdx) => (
                        <li key={ftIdx} className="flex items-start gap-2 text-slate-300">
                          <Check className="w-3.5 h-3.5 text-brand-teal mt-0.5 flex-shrink-0" />
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-8">
                  <a 
                    href="#healthcare-audit-section"
                    className={`w-full text-center py-3 px-4 rounded-xl font-bold font-mono text-xs uppercase tracking-wider block transition-all cursor-pointer ${
                      pkg.featured
                        ? 'bg-brand-teal hover:bg-opacity-95 text-slate-950 font-black shadow-lg'
                        : 'bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <a href="#healthcare-audit-section" className="text-xs text-brand-teal hover:underline font-mono uppercase font-black tracking-widest block">
              Request Custom Medical Marketing Blueprint →
            </a>
          </div>

        </div>
      </section>

      {/* ❓ FAQ ACCORDION SECTION */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">KNOWLEDGE REPOSITORY</span>
            <h2 className="text-3xl font-black font-display text-white">
              Frequently Asked Questions About Healthcare Marketing
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Have doubts regarding HIPAA parameters, local Map trends, or AI indexing? Read our definitive answers below.
            </p>
          </div>

          <div className="space-y-3 text-left">
            {faqsData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-900/50"
                >
                  <span className="text-sm font-bold text-white font-display leading-tight">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform flex-shrink-0 ${openFaqIdx === idx ? 'transform rotate-180' : ''}`} />
                </button>
                
                {openFaqIdx === idx && (
                  <div className="p-5 pt-0 border-t border-slate-900/50 text-slate-350 text-xs leading-relaxed font-light font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📊 FREE HEALTHCARE MARKETING AUDIT SCANNER FORM SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950" id="healthcare-audit-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider animate-pulse">
                <BarChart3 className="text-brand-orange w-3.5 h-3.5" />
                <span>Immediate Healthcare Audit Diagnostic Terminal</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Get a Free Healthcare Marketing Audit
              </h2>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Provide your website URL and healthcare details to execute our interactive local exposure scanner. Measure your GBP citations, check schema coordinates, analyze competitor backlinks, and index ChatGPT visibility on scale.
              </p>

              <div className="space-y-3.5">
                <h4 className="text-xs uppercase font-mono font-black text-slate-400 tracking-wider">
                  The Exhaustive Clinic Check Includes:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="bg-[#0a0e17] p-3.5 rounded-lg border border-slate-900 space-y-1">
                    <span className="text-brand-teal font-mono font-extrabold text-[10px] block">01 / LOCAL GEO AUDIT</span>
                    <p className="text-[11px] text-slate-450 font-sans font-light">Confirming Google Maps Pack proximity ranking and listing validation.</p>
                  </div>
                  <div className="bg-[#0a0e17] p-3.5 rounded-lg border border-slate-900 space-y-1">
                    <span className="text-brand-teal font-mono font-extrabold text-[10px] block">02 / TREATMENT MARKUP</span>
                    <p className="text-[11px] text-slate-450 font-sans font-light">Checking for valid Physician JSON-LD metadata schemas.</p>
                  </div>
                  <div className="bg-[#0a0e17] p-3.5 rounded-lg border border-slate-900 space-y-1">
                    <span className="text-brand-teal font-mono font-extrabold text-[10px] block">03 / AI CO-Citations audit</span>
                    <p className="text-[11px] text-slate-450 font-sans font-light">Retrieving ChatGPT co-reference rating data for your doctor rosters.</p>
                  </div>
                  <div className="bg-[#0a0e17] p-3.5 rounded-lg border border-slate-900 space-y-1">
                    <span className="text-brand-teal font-mono font-extrabold text-[10px] block">04 / CRM CONVERSION CHECK</span>
                    <p className="text-[11px] text-slate-450 font-sans font-light">Analyzing scheduling form bottlenecks and patient retention structures.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Scanner Diagnostic Form block */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-5 shadow-2xl space-y-4">
                
                <div className="border-b border-slate-900 pb-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-black block">PORTAL LOG INTERFACE</span>
                  <p className="text-xs text-white font-bold">Submit Practice Parameters</p>
                </div>

                <form onSubmit={runHealthcareAuditScanner} className="space-y-3.5 text-left">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase font-mono font-black text-slate-450 block">Clinical Entity Name *</label>
                      <input 
                        type="text"
                        required
                        value={auditParams.businessName}
                        onChange={(e) => setAuditParams({...auditParams, businessName: e.target.value})}
                        placeholder="e.g. SmileArt Dental"
                        className="w-full bg-slate-950 text-xs text-white p-2.5 rounded-lg border border-slate-900 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase font-mono font-black text-slate-450 block">Website URL</label>
                      <input 
                        type="url"
                        value={auditParams.websiteUrl}
                        onChange={(e) => setAuditParams({...auditParams, websiteUrl: e.target.value})}
                        placeholder="e.g. smileartdental.com"
                        className="w-full bg-slate-950 text-xs text-white p-2.5 rounded-lg border border-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase font-mono font-black text-slate-450 block">Practice Location(s)</label>
                      <input 
                        type="text"
                        value={auditParams.location}
                        onChange={(e) => setAuditParams({...auditParams, location: e.target.value})}
                        placeholder="e.g. Chicago, IL"
                        className="w-full bg-slate-950 text-xs text-white p-2.5 rounded-lg border border-slate-900 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase font-mono font-black text-slate-450 block">Primary Specialist Service</label>
                      <input 
                        type="text"
                        value={auditParams.servicesOffered}
                        onChange={(e) => setAuditParams({...auditParams, servicesOffered: e.target.value})}
                        placeholder="e.g. Dermatology"
                        className="w-full bg-slate-950 text-xs text-white p-2.5 rounded-lg border border-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase font-mono font-black text-slate-450 block">Professional Email *</label>
                      <input 
                        type="email"
                        required
                        value={auditParams.email}
                        onChange={(e) => setAuditParams({...auditParams, email: e.target.value})}
                        placeholder="doctor@practice.com"
                        className="w-full bg-slate-950 text-xs text-white p-2.5 rounded-lg border border-slate-900 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase font-mono font-black text-slate-450 block">Contact Telephone Number</label>
                      <input 
                        type="tel"
                        value={auditParams.phone}
                        onChange={(e) => setAuditParams({...auditParams, phone: e.target.value})}
                        placeholder="+1-312..."
                        className="w-full bg-slate-950 text-xs text-white p-2.5 rounded-lg border border-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {scanStatus === 'idle' && (
                    <button 
                      type="submit"
                      className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-mono font-bold text-xs uppercase tracking-widest py-3 rounded-lg transition-all cursor-pointer text-center"
                    >
                      Diagnose Client Intake deficit
                    </button>
                  )}
                </form>

                {/* Simulated Diagnostic Scanner Progress UI */}
                {scanStatus !== 'idle' && (
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-900 space-y-3.5 text-left">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-slate-500">Diagnostic Status:</span>
                      <span className={scanStatus === 'running' ? 'text-brand-orange animate-pulse font-bold' : 'text-brand-emerald font-black'}>
                        {scanStatus === 'running' ? `SCANNING DATA... ${scanProgress}%` : 'SCANNING SUCCESSFUL & EXPORTED'}
                      </span>
                    </div>

                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-orange transition-all duration-300 rounded-full"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>

                    <div className="bg-[#0b101b] p-2 rounded border border-slate-900 font-mono text-[9px] text-slate-350 leading-tight">
                      🤖 Logs: {scanLogs}
                    </div>

                    {scanStatus === 'completed' && (
                      <div className="pt-2 text-center">
                        <span className="text-[10px] text-brand-teal font-bold font-mono animate-bounce block">
                          ✔ Check your email address inbox shortly for specialized diagnostic file charts.
                        </span>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Suggested Articles block */}
      <section className="bg-[#05070a] py-20 border-b border-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">KNOWLEDGE BANK</span>
            <h2 className="text-3xl font-black font-display text-white">Suggested Articles</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              Expand your clinical visibility limits with our informative real-world marketing essays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Healthcare SEO Guide", desc: "How medical providers can bypass massive clinical directory networks to own local search results.", tag: "SEO Tutorial" },
              { title: "Local SEO for Hospitals", desc: "A robust structural checklist to align 25+ clinics under a single Google Maps framework.", tag: "Google Maps" },
              { title: "Medical Google Ads Strategy", desc: "Building HIPAA-compliant, secure pay-per-click directories avoiding budget waste.", tag: "PPC Management" },
              { title: "AI Marketing for Healthcare", desc: "Injecting medical entity details ensuring recommended ChatGPT voice queries.", tag: "Generative GEO" },
              { title: "Healthcare Website Best Practices", desc: "Converting passive visitors to booked appointments with high page speeds.", tag: "CRO Design" },
              { title: "Patient Lead Generation Tips", desc: "Using WhatsApp chatbot prompts to pre-qualify emergency diagnostic needs.", tag: "Intake Systems" }
            ].map((art, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl p-5 hover:border-slate-800 transition-colors space-y-2.5"
              >
                <span className="text-[9px] font-mono font-bold text-brand-orange bg-brand-orange/5 border border-brand-orange/10 px-2.5 py-0.5 rounded uppercase">
                  {art.tag}
                </span>
                <h3 className="text-white font-black text-sm font-display">{art.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{art.desc}</p>
                <div className="pt-2">
                  <a href="#healthcare-audit-section" className="text-[10px] font-mono text-brand-teal group flex items-center gap-1 hover:underline">
                    Read Article 
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔮 FINAL CTA SECTION */}
      <section className="bg-gradient-to-b from-[#080b11] to-[#040608] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#14243b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[340px] h-[340px] bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">PARTNERSHIP ENHANCEMENT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
            Ready to Grow Your Healthcare Business?
          </h2>
          <p className="text-slate-450 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Configure a private, HIPAA-aware patient acquisition blueprint with our certified medical marketing consultants.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a 
              href="#healthcare-audit-section"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all shadow-lg font-mono cursor-pointer"
            >
              Book Free Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-emerald-400 font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all font-mono cursor-pointer inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-slate-900/50 flex flex-wrap justify-center gap-8 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-brand-teal" /> Healthcare Marketing Specialists</span>
            <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-brand-teal" /> Transparent Analytics</span>
            <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-brand-teal" /> ROI-Focused Active Campaigns</span>
          </div>
        </div>
      </section>

      {/* STICKY QUICK ACTION CTA FOOTER AT BOTTOM */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#0c1221] border border-slate-800 rounded-xl p-3 shadow-2xl flex items-center gap-4 transition-all hover:border-brand-teal animate-bounce">
        <div className="space-y-0.5 text-left hidden sm:block">
          <span className="text-[8px] font-mono text-brand-teal uppercase block">Direct Specialist Link:</span>
          <span className="text-xs text-white font-extrabold block">{CONTACT_NUMBER}</span>
        </div>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-brand-emerald text-white p-2 rounded-lg hover:bg-opacity-90 transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs font-mono font-bold"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Quick Chat</span>
        </a>
      </div>
    </>
  );
}

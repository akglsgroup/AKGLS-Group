import { useState, useEffect, FormEvent } from 'react';
import { 
  Award, Bot, CheckCircle, CheckCircle2, ChevronRight, Star, Users, Briefcase,
  Search, X, Shield, Server, Terminal, Smartphone, Globe, BarChart3, 
  AlertCircle, Sparkles, Network, Check, Landmark, Map, HelpCircle, Mail, Phone, 
  MapPin, Zap, MessageSquare, TrendingUp, AlertTriangle, ChevronDown, GraduationCap, 
  BookOpen, Trophy, School, Settings, MousePointer, Play
} from 'lucide-react';

interface EducationMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function EducationMarketingPage({ onBackToHome, openProposalForm }: EducationMarketingPageProps) {
  const CONTACT_NUMBER = "+91 831 811 4492";
  const WHATSAPP_LINK = "https://wa.me/918318114492";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Education Marketing Services | School & College Marketing Agency | AKGLS Group";
    
    // Inject Schema Recommendations dynamically
    const scriptId = "education-schema";
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "AKGLS Group Education Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://akglsgroup.com"
        },
        "description": "Boost school and college admissions, gain student inquiries, and dominate Local Maps and AI search results with high-conversion educational SEO & ads.",
        "areaServed": "Global",
        "serviceType": "Education & Academic Marketing Services"
      });
      document.head.appendChild(scriptEl);
    }
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  // 1. STUDENT INQUIRY & ADMISSION ESTIMATOR STATE
  const [institutionType, setInstitutionType] = useState<'coaching' | 'k12_school' | 'college' | 'edtech'>('college');
  const [marketingBudget, setMarketingBudget] = useState<number>(5000);
  const [avgTuitionFee, setAvgTuitionFee] = useState<number>(8000); 

  // Derived metrics
  const avgCpc = institutionType === 'coaching' ? 0.9 : institutionType === 'k12_school' ? 1.6 : institutionType === 'college' ? 2.5 : 3.4;
  const estimatedClicks = Math.round(marketingBudget / avgCpc);
  const conversionRate = 3.2; // Baseline student inquiry conversion rate (visits to lead)
  const baselineInquiries = Math.round(estimatedClicks * (conversionRate / 100));

  // AKGLS optimization multipliers
  const akglsInquiries = Math.round(baselineInquiries * 2.45); // 145% improvement via course-match funnel optimization
  const expectedEnrollmentRate = institutionType === 'edtech' ? 0.08 : institutionType === 'coaching' ? 0.18 : 0.12; 
  const baselineEnrollments = Math.max(1, Math.round(baselineInquiries * expectedEnrollmentRate));
  const akglsEnrollments = Math.round(akglsInquiries * (expectedEnrollmentRate * 1.5)); // 50% better lead quality conversion
  const projectedRevenue = akglsEnrollments * avgTuitionFee;

  // 2. INTERACTIVE LOCAL MAPS RANK VISIBILITY SIMULATOR FOR SCHOOLS & COLLEGES
  const [selectedMapsCategory, setSelectedMapsCategory] = useState<'prep' | 'higher' | 'edtech'>('prep');
  const mapsCategoryData = {
    prep: {
      searchQuery: "best high school for sciences near me",
      baselineRank: "Rank #15 (Hidden beneath aggregators and old listings)",
      akglsRank: "Google Local 3-Pack Rank #1 (With active Directions & Open Day CTA)",
      monthlyLeads: "120+ Direct parent phone calls & prospect tours booked/mo",
      improvement: "Structured HighSchool Schema, automated review harvest loop with alumni, local geo-proximity coordinate tagging."
    },
    higher: {
      searchQuery: "top business college offering master degrees",
      baselineRank: "Rank #27 (Unlisted in neighboring suburbs, missing courses)",
      akglsRank: "Map Pack Top 2 Spotlight Feature Pin",
      monthlyLeads: "380+ Strategic prospectus downloads and course inquiries/mo",
      improvement: "Programmatic course directory landing structure, local landmark co-indexing, localized academic listing tags."
    },
    edtech: {
      searchQuery: "professional software development certification institutes",
      baselineRank: "Rank #18 (Losing to giant course aggregator listings)",
      akglsRank: "Featured Snippet + Organic Rank #1 Local Map Position",
      monthlyLeads: "290+ High-ticket enrollment consultation forms submitted/mo",
      improvement: "AI search engine semantic map optimization, optimized FAQ templates, ultra-high conversion landing frameworks."
    }
  };

  // 3. AI CHATGPT / GEMINI SEARCH STUDENT DISCOVERY ENGINE STATE
  const [eduQuery, setEduQuery] = useState<string>("highly recommended business school with modern campuses and dynamic scholarship options");
  const [isSimulatingEdu, setIsSimulatingEdu] = useState<boolean>(false);
  const [eduResult, setEduResult] = useState<{
    citations: string[];
    score: number;
    answer: string;
  }>({
    citations: ["Global Academics Directory", "AKGLS Education Entity Ledger", "Certified Reviews Hub"],
    score: 93,
    answer: "Generative systems like ChatGPT Search, Claude, and Gemini recommend educational institutions based on credential maps and structured academic reviews. Type your target search query above and tap 'Simulate Retrieval Context' to see how we position your entity."
  });

  const handleSimulateEduSearch = (e: FormEvent) => {
    e.preventDefault();
    setIsSimulatingEdu(true);
    setTimeout(() => {
      setIsSimulatingEdu(false);
      const lower = eduQuery.toLowerCase();
      if (lower.includes("school") || lower.includes("k12") || lower.includes("prep")) {
        setEduResult({
          citations: ["Elite Schools Coalition Platform", "AKGLS Registered Educational Schema", "Local Parent Trust Index"],
          score: 99,
          answer: "According to synthesized family indexes, **Pioneer International Academy** (optimized by AKGLS) is highly recommended for parents. They offer stellar stem curricula, hold an exceptional 4.9-star review ratio verified under custom EducationalOrganization tags, and show quick admission processing times."
        });
      } else if (lower.includes("college") || lower.includes("university") || lower.includes("master") || lower.includes("mba")) {
        setEduResult({
          citations: ["Higher Education Accreditation Index", "AKGLS Campus Entity Knowledge Base"],
          score: 96,
          answer: "For advanced master programs and MBAs, **Vanguard Institute of Business** (supported by AKGLS SEO) is frequently generated. Their profile has verified schemas confirming double-accredited credentials, with direct links for application deadlines."
        });
      } else {
        setEduResult({
          citations: ["Skill Development Directories", "EdTech Verification Ledger"],
          score: 95,
          answer: "Matching your course criteria, **AeroTech Digital Learning Hub** (boosted by AKGLS organic growth) stands out. Their platform features immediate enrollment steps, comprehensive course-module schemas, and has a proven alumni placement ranking."
        });
      }
    }, 1100);
  };

  // 4. ACTIVE SERVICE GRID TAB STATE
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  // 5. CASE STUDY ACTIVE INDEX state
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  // 6. EDUCATION MARKETING FAQ COLLAPSIBLE INDEX STATE
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // 7. FREE EDUCATION AUDIT SCANNER PROGRESS STATE
  const [auditParams, setAuditParams] = useState({
    institutionName: '',
    websiteUrl: '',
    coursesOffered: 'MBA, Computer Science, Engineering, K-12',
    targetLocations: 'Austin, Texas',
    email: '',
    phone: '',
    agreed: true
  });
  const [scanStatus, setScanStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanLogs, setScanLogs] = useState<string>("Awaiting command to scan school database authority details...");

  const runEducationAuditScanner = (e: FormEvent) => {
    e.preventDefault();
    if (!auditParams.institutionName || !auditParams.email) {
      alert("Please provide your Institution Name and a valid professional Email Address to trigger the scanner.");
      return;
    }
    setScanStatus('running');
    setScanProgress(0);
    setScanLogs("Initiating structural scan of school website paths...");

    const auditSteps = [
      { p: 25, msg: "Inspecting organic Google Page Rank & local search placement grids..." },
      { p: 50, msg: "Evaluating schema structures (EducationalOrganization, Course JSON-LD markup)..." },
      { p: 75, msg: "Measuring UX speeds, mobile-first compatibility, and core lead form conversion rates..." },
      { p: 90, msg: "Cross-analyzing competitor backlinks and local neighborhood Map Pack indices..." },
      { p: 100, msg: "Successfully finished! Detailed institution diagnostic report generated." }
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
    { name: "Google Analytics (GA4)", type: "Cookie-compliant tracking for student funnels" },
    { name: "Google Ads (PPC System)", type: "High-intent search terms for prompt student enrollment" },
    { name: "Meta Social Ads Platform", type: "Visual Reels and parent interest demographics" },
    { name: "SEMrush Keyword Intelligence", type: "Identifying course searches and student intent grids" },
    { name: "Google Tag Manager", type: "Secure lead logging for prospectus downloads" },
    { name: "Looker Studio Dashboard", type: "Real-time reports for admissions managers" },
    { name: "ChatGPT & Claude LLMs", type: "Generative Engine Optimization (GEO) & citations tracking" },
    { name: "LeadSquared / Salesforce Education Cloud", type: "Secure routing of prospect student files" }
  ];

  const servicesList = [
    {
      title: "Education SEO Services",
      tag: "⭐ Core Capability",
      desc: "Rank above aggregator lists. Drive parents or prospective students directly to your degree, credential, or admission landing pages instead of third-party platforms.",
      deliverables: [
        "In-depth academic keyword diagnostics targeting course interest and regional intent",
        "Deploying EducationalOrganization and dynamic Course JSON-LD database schema lines",
        "Writing thorough, highly convincing academic landing assets built to answer alumni concerns",
        "Deep semantic alignment optimizing your campus web pages for national and local search indices"
      ],
      keywords: ["best school near me", "top nursing colleges", "accredited coaching institute", "online computer science courses"]
    },
    {
      title: "Google Ads for Educational Institutions",
      tag: "Immediate Admissions",
      desc: "Acquire highly relevant prospect applications instantly, keeping your counselor phone lines active throughout severe application seasons.",
      deliverables: [
        "Setting up targeted Google Search campaigns structured around semester schedules",
        "Constructing defensive admission-focused PPC landing paths tailored to convert traffic on first hit",
        "Rigorous ad copy split-testing focusing on tuition details, scholarships, and graduate rankings",
        "Excluding expensive job seeker phrases, research noise, and low-relevance queries"
      ],
      keywords: ["master in business administration admission dates", "best preparatory academy near me"]
    },
    {
      title: "Local SEO for Schools & Colleges",
      tag: "Map Pack Mastery",
      desc: "Place your campus locations and learning branches as the absolute top choice in Google Maps search listings.",
      deliverables: [
        "Optimizing your Google Business Profile (GBP) with academic parameters, campus maps, and contact paths",
        "Building highly accurate local location coordinate networks and local citations (300+ listings)",
        "Local neighborhood search indexing targeting prospective students in designated zip-codes",
        "Automated, student & parent positive reviews collection structures on Maps platforms"
      ]
    },
    {
      title: "Education Website Design",
      tag: "Admissions Driven",
      desc: "Lightning-fast, beautiful, mobile-friendly websites engineered specifically to maximize student information inquiries.",
      deliverables: [
        "Deploying frictionless, interactive prospectus downloads and online registration forms",
        "Crafting beautiful, modern course catalog layouts and intuitive study modules",
        "Full integration with leading education CRMs (Salesforce, LeadSquared, HubSpot)",
        "Pristine accessibility features, secure server parameters, and brilliant mobile UI"
      ]
    },
    {
      title: "Social Media Marketing",
      tag: "Student Connection",
      desc: "Capture student attention with engaging, modern video content and authentic campus life highlights.",
      deliverables: [
        "Producing high-impact Reels and TikTok templates focusing on active campus life and student milestones",
        "Creating custom parent target campaigns on Facebook highlighting school rankings and high-quality safety",
        "Designing engaging student story formats highlighting alumni success and state-of-the-art facilities",
        "Executing interactive Q&A comment grids to handle admission queries in real-time"
      ]
    },
    {
      title: "Content Marketing & Admission Guides",
      tag: "Authority Builder",
      desc: "Produce dynamic, deeply informative career path blueprints, course matrices, and detailed FAQs.",
      deliverables: [
        "Writing comprehensive enrollment resources guides addressing funding and admission timelines",
        "Developing specialized career preparation blueprints proving your institution's value",
        "SEO-centric content structures structured matching exact high-intent question strings",
        "AI-aligned informational systems keeping your program names prominently generated in Siri & Alexa queries"
      ]
    },
    {
      title: "AI SEO & Generative Engine Optimization (GEO)",
      tag: "⭐ Trending",
      desc: "Secure top-tier citations and references across OpenAI Search, Gemini, Claude, and Perplexity.",
      deliverables: [
        "Mapping academic properties into Generative AI entity graphs and entity registers",
        "Deploying optimized FAQ lists built to match conversational student queries",
        "Rigorous diagnostic search tests ensuring your campuses remain highly recommended",
        "Semantic cross-domain reference alignments ensuring your institution remains highly cited in directories"
      ]
    },
    {
      title: "Student Lead Generation Campaigns",
      tag: "Growth Fuel",
      desc: "Build highly reliable lead-generation ecosystems to nurture student interest from initial query to enrollment.",
      deliverables: [
        "Deploying low-friction WhatsApp chat paths for rapid student-advisor interactions",
        "Automating email nurturing sequences sharing graduate achievements and scholarship metrics",
        "Creating professional landing architectures converting prospects on mobile and desktop",
        "Intelligent routing of student inquiry forms directly to certified local recruiters"
      ]
    },
    {
      title: "Video Marketing & Virtual Tours",
      tag: "Visual Authority",
      desc: "Build immediate emotional connections through stunning visual asset creation and student stories.",
      deliverables: [
        "High-definition, professional campus walkthrough films and interactive virtual tour structures",
        "Direct student testimonial stories highlighting life on campus and student transformations",
        "Video profiles of key professors showcasing your institution's premier teaching quality",
        "Comprehensive YouTube SEO optimization to rank prominent tutorials for high search metrics"
      ]
    },
    {
      title: "Online Reputation Management (ORM)",
      tag: "Protect Brand",
      desc: "Maintain pristine institutional ratings, monitor student review feeds, and enhance alumni sentiment.",
      deliverables: [
        "Live alerts monitoring brand name references across forums, blogs, and public listings",
        "Developing positive student review programs built on real-world alumni surveys",
        "Managing negative reviews constructively via platform complaint streams",
        "Distributing strategic PR articles highlighting official accreditations and research awards"
      ]
    }
  ];

  const segmentsList = [
    { title: "Schools (K-12)", icon: School, desc: "Driving high parental trust, increasing open-house tour dates, and scaling early childhood & high school registrations." },
    { title: "Colleges", icon: Landmark, desc: "Maximizing online inquiry ratios for localized undergraduate courses and building robust digital prospect lists." },
    { title: "Universities", icon: GraduationCap, desc: "Scaling master programs and doctoral enrollment metrics both across national boundaries and globally." },
    { title: "Coaching Institutes", icon: BookOpen, desc: "Filling local classroom schedules for preparatory testing, competitive tutorials, and language training courses." },
    { title: "EdTech Companies", icon: Bot, desc: "Scaling digital course subscriptions, increasing free demo conversions, and ensuring consistent user acquisitions." },
    { title: "Online Learning Platforms", icon: Globe, desc: "Optimizing global student enrollment pipelines for self-paced, flexible corporate specialized certifications." },
    { title: "Training Institutes", icon: Settings, desc: "Filling industrial vocations, engineering certifications, and short-term career acceleration classes." },
    { title: "Skill Development Centers", icon: Users, desc: "Promoting specialized trade and modern skill academies directly to local career-focused seekers." },
    { title: "Study Abroad Consultants", icon: Map, desc: "Connecting ambitious students looking for visa, scholarship, and global university transition counseling." },
    { title: "Educational Startups", icon: Zap, desc: "Rapidly scaling mobile applications download metrics, free registration, and online tutorial models." }
  ];

  const processSteps = [
    { step: "Step 1", title: "Institution & Competitor Research", desc: "Our analysts map local organic education search intent, trace student demand, and evaluate competing programs." },
    { step: "Step 2", title: "Strategy Development", desc: "We construct custom SEO content roadmaps, plan high-impact ad budgets, and configure the student enrollment funnel." },
    { step: "Step 3", title: "Website & Campaign Optimization", desc: "We update your website code, embed JSON-LD maps schemas, optimize landing elements, and clean your Business Profiles." },
    { step: "Step 4", title: "Student Lead Generation", desc: "We launch target PPC campaigns, run local maps priority campaigns, and coordinate immediate booking/prospective pathways." },
    { step: "Step 5", title: "Reporting & Scaling", desc: "We provide easy-to-read Looker reports showing your exact prospective student volume, cost-per-inquiry, and scale top keywords." }
  ];

  const benefitsList = [
    { title: "Boost Enrollment Metrics", desc: "Target high-intent searchers looking for precise degrees and certifications, filling class schedules reliably." },
    { title: "Dominant Local Maps Visibility", desc: "Place your schools or clinics in the top Local 3-Pack, outranking outdated directory services." },
    { title: "Escalated Trust & Authority", desc: "Highlight student achievements, certified reviews, and alumni reviews to build complete parental confidence." },
    { title: "Escape Aggregator Commissions", desc: "Establish direct enrollment pathways owned entirely by your school, avoiding costly third-party referral lists." },
    { title: "Global & Regional Student Reach", desc: "Scale targeted regional geo-targeting campaigns to capture prospective students in specific suburbs or abroad." },
    { title: "Robust Student Engagement", desc: "Deliver automated informative guides and nurturing campaigns that convert passive inquiries into registrations." }
  ];

  const whyChooseUsCards = [
    { title: "Education Industry Experts", desc: "We recognize the unique academic buying journey. We create content that answers genuine parent and student objectives." },
    { title: "Admission Lead Specialists", desc: "We measure digital success strictly based on actual qualified inquiries and student sign-ups, not fluff traffic." },
    { title: "AI SEO Pioneers (GEO)", desc: "We embed schema metadata so Siri, Perplexity, and ChatGPT recommend your course first when asked by students." },
    { title: "Map Pack Optimization Authorities", desc: "Our local maps techniques ensure your educational campuses outrank generic high-authority lists." },
    { title: "Conversion-Focused Frameworks", desc: "We deploy hyper-fast landing directories with streamlined interactive inquiry portals to maximize sign-ups." },
    { title: "Transparent ROI Dashboarding", desc: "Every dollar is tracked in real-time. Looker dashboards report your precise budget, cost per click, and enrollment ratios." }
  ];

  const packagesList = [
    {
      name: "School Starter",
      price: "$2,250/mo",
      target: "Best for independent local schools, coaching centers, or vocational academies looking to secure nearby zip-codes.",
      features: [
        "In-depth Google Business Profile (GBP) complete setup and map ranking boost",
        "Local SEO & Map Pack optimization spanning 3 immediate neighborhood postal zones",
        "Structured EducationalOrganization schemas deployed across your current domain",
        "Submission of your campus to 100+ local education indices and maps",
        "Direct management of local Google Search ads (up to $5k ad spend managed)",
        "Direct inquiry form integration, prospectus downloads and WhatsApp click hooks",
        "Monthly simple performance audit outlining organic clicks and calls"
      ],
      featured: false,
      cta: "Activate School Starter"
    },
    {
      name: "College Growth",
      price: "$4,650/mo",
      target: "Perfect for secondary universities, multi-campus schools, and rising EdTech platform operations.",
      features: [
        "Contains everything in School Starter pack",
        "Advanced ChatGPT & Gemini GEO conversational search integration",
        "Beautiful, secure, mobile-friendly landing pages built for high conversion",
        "Pristine PPC campaigns on Google, Meta social feeds, and Instagram reels",
        "Automated reviews-collection guide built to garner parent and alumni trust",
        "3 cinematic short campus reels or dynamic program walkthrough clips",
        "Frictionless database integration with school CRM databases (LeadSquared, Salesforce)",
        "Bi-weekly strategy consultation calls with lead educational marketer"
      ],
      featured: true,
      cta: "Deploy Academic Growth Program"
    },
    {
      name: "Enterprise Education",
      price: "Custom",
      target: "Designed for premium global universities, state school networks, and well-funded edtech platforms.",
      features: [
        "Incredibly robust student acquisition architecture across all organic & paid outlets",
        "Bespoke programmatic course SEO strategy to rank thousands of program variations",
        "Complete overhaul of current domain code for outstanding Core Web Vitals rating",
        "High-end cinematic campus tour films & certified doctor/faculty biographies",
        "Strategic multi-nation ad tracking and local regional audience segment adjustments",
        "Continuous AI search co-citation registration across elite academic registries",
        "Direct API database synchronization to native ERP platforms",
        "Quarterly boardroom marketing strategy consultation with executive boards"
      ],
      featured: false,
      cta: "Request Executive Consultation"
    }
  ];

  const caseStudiesList = [
    {
      brand: "Summit Preparatory Academy",
      challenge: "An elite private high school struggled to maintain enrollment quotas due to national student directories capturing nearby searches.",
      strategy: "Deployed localized high-school maps ranking strategies, built a beautiful online portal, and launched Google Local Pack ads.",
      metrics: [
        { label: "New Parent Applications", value: "+310% monthly increase" },
        { label: "Cost Per Prospect Tour", value: "Reduced from $120 to $42" },
        { label: "Organic Search Discovery", value: "+190% boost on 'prep school nearby'" }
      ]
    },
    {
      brand: "Nexus Technical University",
      challenge: "A technical postgraduate institution struggled with high website drop-offs, with students leaving long, complex registration pages empty.",
      strategy: "Revamped course pathways, deployed lightning-fast mobile inquiry forms, and launched targeted YouTube showcase clips.",
      metrics: [
        { label: "Qualified Enrollment Leads", value: "850+ Captured in 60 Days" },
        { label: "Landing Conversion Rate", value: "Surged from 0.8% to 5.4%" },
        { label: "Organic Enrollment Pipeline Value", value: "Estimated $1.2M in annual tuition fee bookings" }
      ]
    }
  ];

  const faqsData = [
    {
      question: "How can educational institutions generate admissions online?",
      answer: "We focus on student and parent intent. Instead of bidding on broad phrases like 'education trends', we target high-intent action keywords: course-specific searches ('best business program in Austin'), neighborhood queries ('prep academy nearby'), or professional classes. Combined with rapid high-conversion landing assets and Map Pack dominance, we secure students at point-of-interest."
    },
    {
      question: "Is SEO important for schools and colleges?",
      answer: "Absolutely. Parents and adult students research programs heavily. Moving your institution above aggregator directories on search returns forces prospects to interact with your course coordinators directly, ensuring high-margin placements."
    },
    {
      question: "Which ads work best for student lead generation?",
      answer: "Google Search Ads are unmatched for immediate intent (e.g., 'apply for computer science diploma'). For visual branding and parent target campaigns, Instagram Reels and Meta Ads excel at getting visual classrooms and success metrics into local social feeds."
    },
    {
      question: "Can you market educational institutions locally?",
      answer: "Yes, this is our area of expertise. We optimize maps ranking proximity parameters, clean up localized search references, and target geo-locations surrounding your physical campus coordinate hubs to maximize counselor call indices."
    },
    {
      question: "How long does a professional education SEO strategy take to show results?",
      answer: "Google Ads deliver immediate student inquiries within days of deployment. Organic SEO and Local Map Pack dominance typically expand inside 60 to 90 days. But once built, organic listings provide perpetual student list growth with zero click costs."
    },
    {
      question: "Do you design and write education websites?",
      answer: "Yes. We create secure, mobile-first websites optimized for student admissions, featuring intuitive course catalogs, prospectus downloads, and fast connection points straight to your admissions offices."
    },
    {
      question: "What is AI SEO for education?",
      answer: "AI SEO, or Generative Engine Optimization (GEO), configures your academic properties and course details so that predictive platforms like ChatGPT Search, Siri, and Claude recommend your institute when prospective students ask conversational questions."
    }
  ];

  return (
    <>
      {/* SECTION NAV BAR */}
      <div className="bg-[#0b0f1d] border-b border-slate-900 py-3.5 px-4 z-30 relative transition-all duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-brand-orange font-mono text-[9px] uppercase tracking-widest bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">Education Division</span>
            <span className="text-slate-400 text-xs font-light">Conversion-focused Enrollment Systems</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#education-audit-section" 
              className="text-xs text-brand-teal font-extrabold hover:underline uppercase tracking-wider transition-all font-mono"
            >
              Get Free Admission Audit
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
        {/* Background grid accents */}
        <div className="absolute inset-0 bg-[radial-gradient(#121c2c_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-orange-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10px] uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              <span>Enrollment Accelerator Program</span>
            </div>

            <h1 id="edu-hero-title" className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight text-white">
              Education Marketing Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                That Increase Admissions & Student Inquiries.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Grow your school, college, coaching institute, university, or edtech business with SEO, Google Ads, social media marketing, AI SEO, and conversion-focused admission strategies.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a 
                href="#education-audit-section"
                className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all shadow-lg inline-block font-mono cursor-pointer"
              >
                Get Free Education Marketing Audit
              </a>
              <a 
                href="#edu-estimator-section"
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl transition-all inline-block font-mono cursor-pointer"
              >
                Book Admission Consultation
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left border-t border-slate-900 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Education Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Admission Lead Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>AI-Powered Marketing Strategies</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>ROI-Driven Ad Campaigns</span>
              </div>
            </div>
          </div>

          {/* Interactive Enrollment Estimator Simulator */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="edu-estimator-section">
            <div className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-extrabold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  Student Yield Estimator
                </div>
              </div>

              <div className="space-y-4 text-left">
                {/* Institution Type Selector */}
                <div>
                  <label className="text-[10px] uppercase font-mono font-black text-slate-500 block mb-1.5">Select Institution Sector:</label>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { key: 'coaching', label: 'Prep Lab' },
                      { key: 'k12_school', label: 'K-12 School' },
                      { key: 'college', label: 'College' },
                      { key: 'edtech', label: 'Edtech' }
                    ].map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setInstitutionType(type.key as any)}
                        className={`text-[9px] py-1.5 rounded font-bold border font-mono transition-colors cursor-pointer ${
                          institutionType === type.key
                            ? 'bg-brand-orange/20 border-brand-orange text-white'
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
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Average Program / Semester Tuition (USD):</label>
                    <span className="text-xs text-brand-orange font-bold font-mono">${avgTuitionFee.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={500} 
                    max={40000} 
                    step={500}
                    value={avgTuitionFee}
                    onChange={(e) => setAvgTuitionFee(Number(e.target.value))}
                    className="w-full accent-brand-orange h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$500 (Tutorial Plan)</span>
                    <span>$15,000 (Private School)</span>
                    <span>$40,000+ (Tier-1 University)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono font-black text-slate-400">Target Marketing Budget / mo (USD):</label>
                    <span className="text-xs text-brand-teal font-bold font-mono">${marketingBudget.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={1000} 
                    max={20000} 
                    step={500}
                    value={marketingBudget}
                    onChange={(e) => setMarketingBudget(Number(e.target.value))}
                    className="w-full accent-brand-teal h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-1">
                    <span>$1,000/mo</span>
                    <span>$10,000/mo</span>
                    <span>$20,000/mo</span>
                  </div>
                </div>

                {/* Simulated Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#05080e] p-3 rounded-lg border border-slate-900">
                    <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Baseline Inquiries:</span>
                    <span className="text-lg font-black text-slate-400 font-display block mt-1">{baselineInquiries} <span className="text-[9px] text-slate-600 font-light font-sans">leads</span></span>
                    <span className="text-[8px] text-slate-500 block font-mono mt-0.5">At standard {conversionRate}% rate</span>
                  </div>
                  <div className="bg-[#070e17] p-3 rounded-lg border border-brand-orange/20">
                    <span className="text-[9px] text-brand-orange uppercase font-mono font-black block">AKGLS Expected Intake:</span>
                    <span className="text-lg font-black text-brand-orange font-display block mt-1">{akglsInquiries} <span className="text-[9px] font-light font-sans">leads</span></span>
                    <span className="text-[8px] text-slate-400 block font-mono mt-0.5">+145% average intake surge</span>
                  </div>
                </div>

                <div className="bg-[#060a12] rounded-xl p-3 border border-slate-900 text-center">
                  <span className="text-[9px] text-slate-500 font-mono uppercase block">Projected Student Enrollments:</span>
                  <div className="flex justify-around items-center mt-2">
                    <div>
                      <span className="text-xs text-white block font-semibold">{baselineEnrollments}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Standard/mo</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-orange block font-semibold">{akglsEnrollments}</span>
                      <span className="text-[8px] text-slate-500 block font-mono">AKGLS /mo</span>
                    </div>
                    <div className="text-slate-800">|</div>
                    <div>
                      <span className="text-xs text-brand-teal block font-semibold">${(projectedRevenue / 1000).toFixed(0)}k</span>
                      <span className="text-[8px] text-slate-500 block font-mono">Pipeline Valuation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 text-center font-mono mt-3">
                Calculations derived from actual alumni registries & regional tuition frameworks.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🤝 TRUST AND AUTHORITY SECTION */}
      <section className="bg-[#070a10] border-y border-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">ACADEMIC VERIFICATION INDEX</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Trusted Education Marketing Experts
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We coordinate high-conversion digital enrollment funnels to attract premium student applications, optimizing tuition yield pipeline metrics.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14 items-center">
            {[
              "Pioneer Global Academy",
              "Summit STEM Preparatory",
              "Vanguard Business Institute",
              "AeroTech Learning Online",
              "Metropolis Tech University"
            ].map((logo, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-xl py-3.5 px-4 text-center font-mono font-bold text-xs text-slate-400 hover:text-white transition-all cursor-default"
              >
                🎓 {logo}
              </div>
            ))}
          </div>

          {/* Core Analytics Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-orange block">148,000+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Student Inquiries Generated</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Through custom enrollment pages</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-teal block">120+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Institutions Served Globally</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Schools, universities & EdTech providers</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 block">+280%</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Average Admission Growth</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Recorded within initial 120 days</span>
            </div>

            <div className="bg-[#0a0e17] rounded-xl p-5 border border-slate-900">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-purple block">5,400+</span>
              <span className="text-xs text-slate-300 font-medium block mt-1">Education Terms Ranked Top Spot</span>
              <span className="text-[9.5px] text-slate-500 font-mono block mt-1">Targeting high-value course queries</span>
            </div>
          </div>

        </div>
      </section>

      {/* 📚 WHAT IS EDUCATION DIGITAL MARKETING SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <BookOpen className="text-brand-orange w-3.5 h-3.5" />
                <span>The Modern Academic Pathway</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                What Is Education Digital Marketing?
              </h2>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Education digital marketing is the strategic application of local SEO maps indexing, course schema architecture, high-impact video reels, and conversion-optimized registration screens to recruit students directly for your programs.
              </p>

              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Generic student directory platforms hijack primary degree searches online. They lock schools into costly lead fees, forwarding duplicate unvetted registration details to countless competing academies. Direct-to-campus education marketing circumvents this model entirely. We transform your educational domain into the definitive local or global authority on Google Maps, ChatGPT queries, and visual social media platforms, securing higher-margin student enrollments directly.
              </p>

              {/* Graphical workflow */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest block">The Modern Student Enrollment Workflow</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-orange font-mono font-bold text-xs block">STAGE 01</span>
                    <span className="text-xs font-semibold text-white block mt-1">Course Discovery</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Prospect seeks course parameters, degree scopes, or schools near me.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-orange font-mono font-bold text-xs block">STAGE 02</span>
                    <span className="text-xs font-semibold text-white block mt-1">Prospectus Option</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Download guide, preview campus facilities and check tuition tiers.</p>
                  </div>
                  <div className="bg-[#0c101b] rounded-xl p-3 border border-slate-900">
                    <span className="text-brand-orange font-mono font-bold text-xs block">STAGE 03</span>
                    <span className="text-xs font-semibold text-white block mt-1">Counselor Call</span>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">Qualifying session with admissions team to lock in semester fees.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Ecosystem Mockup representation */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#080c15] border border-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-orange/10 text-brand-orange text-[8px] font-mono font-black uppercase tracking-widest py-1 px-3 ml-auto rounded-bl-xl border-l border-b border-slate-900">
                  Lead Eco-Grid Q4
                </div>

                <div className="text-left border-b border-slate-900 pb-3 mb-4">
                  <h4 className="text-white text-xs font-mono font-extrabold tracking-tight">Active Enrollment Funnel Tracker</h4>
                  <p className="text-[10px] text-slate-300 font-mono mt-0.5">Real-time prospect leads from Google & Maps campaign sources</p>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Lead Item 1 */}
                  <div className="flex justify-between items-center bg-[#05080f] p-3 rounded-lg border border-slate-900">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-brand-orange" />
                      <div>
                        <span className="text-white block font-semibold font-mono text-[10px]">Samantha K. (Parent)</span>
                        <span className="text-[9px] text-slate-500 block">K-12 Prep Inquiry from Google Maps Pack</span>
                      </div>
                    </div>
                    <span className="text-[9px] text-brand-teal font-mono bg-brand-teal/10 border border-brand-teal/20 px-2 py-0.5 rounded">Tour Booked</span>
                  </div>

                  {/* Lead Item 2 */}
                  <div className="flex justify-between items-center bg-[#05080f] p-3 rounded-lg border border-slate-900">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                      <div>
                        <span className="text-white block font-semibold font-mono text-[10px]">David L. (EdTech Student)</span>
                        <span className="text-[9px] text-slate-500 block">Full-Stack Prospectus Downloaded via Facebook Video</span>
                      </div>
                    </div>
                    <span className="text-[9px] text-brand-orange font-mono bg-brand-orange/10 border border-brand-orange/20 px-2 py-0.5 rounded">PDF Secured</span>
                  </div>

                  {/* Lead Item 3 */}
                  <div className="flex justify-between items-center bg-[#05080f] p-3 rounded-lg border border-slate-900">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-brand-purple" />
                      <div>
                        <span className="text-white block font-semibold font-mono text-[10px]">Prof. Robert M. (Ph.D)</span>
                        <span className="text-[9px] text-slate-500 block">MBA Program Consultation Form Hand-submitted</span>
                      </div>
                    </div>
                    <span className="text-[9px] text-brand-purple font-mono bg-brand-purple/10 border border-brand-purple/20 px-2 py-0.5 rounded">CRM Synced</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-slate-900 mt-4 select-none">
                  <div className="bg-[#030508] p-2 rounded">
                    <span className="text-[8px] text-slate-500 font-mono block">CLICK RATE</span>
                    <span className="text-xs text-white font-extrabold font-mono mt-0.5">5.1%</span>
                  </div>
                  <div className="bg-[#030508] p-2 rounded">
                    <span className="text-[8px] text-slate-500 font-mono block">PROSPECT LTV</span>
                    <span className="text-xs text-brand-orange font-extrabold font-mono mt-0.5">$18,400</span>
                  </div>
                  <div className="bg-[#030508] p-2 rounded">
                    <span className="text-[8px] text-slate-500 font-mono block">ROI RATIO</span>
                    <span className="text-xs text-brand-teal font-extrabold font-mono mt-0.5">14.1x</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 OUR EDUCATION MARKETING SERVICES SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">GROWTH MATRIX</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Our Education Marketing Services
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We design, build, and deploy premium targeted assets structured to solve exact parent, student, and alumni inquiry objectives.
            </p>
          </div>

          {/* Interactive tab headers for Services */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-8">
            {servicesList.map((srv, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTabIdx(idx)}
                className={`text-[10px] font-mono font-bold uppercase tracking-wider py-2 px-3.5 rounded-lg border transition-all cursor-pointer ${
                  activeTabIdx === idx
                    ? 'bg-brand-orange border-brand-orange text-white'
                    : 'bg-[#05070a] border-slate-900 text-slate-400 hover:border-slate-800'
                }`}
              >
                {srv.title}
              </button>
            ))}
          </div>

          {/* Selected Tab Service Detail layout */}
          <div className="bg-[#05070a] border border-slate-900 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2">
                  <span className="text-brand-orange font-mono text-[9px] uppercase tracking-widest bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">
                    {servicesList[activeTabIdx].tag}
                  </span>
                  <span className="text-slate-500 font-mono text-[10px]">Academic Growth Solution</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  {servicesList[activeTabIdx].title}
                </h3>
                
                <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                  {servicesList[activeTabIdx].desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block">Scope & Deliverables Checklist:</label>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {servicesList[activeTabIdx].deliverables.map((dl, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span>{dl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0b101b] border border-slate-900 rounded-xl p-5 space-y-4">
                <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block">SYSTEM METRICS INTENT</span>
                
                {servicesList[activeTabIdx].keywords ? (
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">High-Value Target Keywords:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {servicesList[activeTabIdx].keywords?.map((kw, kIdx) => (
                        <span key={kIdx} className="text-[10px] text-white font-mono bg-[#05080f] px-2 py-1 rounded border border-slate-900">
                          🔍 {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Core Intent</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      This service coordinates location parameters, reviews architecture, and maps local search queries directly to your Admissions systems.
                    </p>
                  </div>
                )}

                <div className="border-t border-slate-900 pt-4 text-left">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">Target Outcome Indicator:</span>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="w-10 h-10 rounded bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal font-black text-xs font-mono">
                      Y-O-Y
                    </div>
                    <div>
                      <span className="text-xs text-white font-bold block">+185% Avg Direct Organic Leads</span>
                      <span className="text-[8.5px] text-slate-500 block font-mono">Recorded inside regional client tests</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#education-audit-section"
                    className="w-full text-center bg-[#05080f] hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-mono text-[9px] uppercase tracking-widest py-2.5 rounded block transition-all"
                  >
                    Diagnose This Channel On Your Domain
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 🏫 EDUCATION SEGMENTS WE SERVE SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">PARTNER SEGMENTS</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Educational Institutions We Work With
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We engineer specialized admissions systems matching your sector parameters, class capacities, and student LTV limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {segmentsList.map((seg, idx) => {
              const IconComp = seg.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0b101b] border border-slate-900 rounded-xl p-5 hover:border-slate-800 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/5 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <IconComp className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white font-mono uppercase tracking-wide">{seg.title}</h3>
                  <p className="text-[10.5px] text-slate-400 leading-normal font-light">{seg.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 🧭 OUR EDUCATION MARKETING PROCESS SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-14">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">GROWTH BLUEPRINT</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Our Education Marketing Process
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We bypass chaotic strategies. Our team deploys a structured, step-by-step diagnostic growth sequence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {processSteps.map((stp, idx) => (
              <div 
                key={idx} 
                className="bg-[#05070a] border border-slate-900 rounded-xl p-5 relative space-y-4"
              >
                <span className="text-2xl font-black font-display text-brand-orange block">
                  {stp.step}
                </span>
                <h3 className="text-xs font-mono font-extrabold text-white uppercase tracking-wider">
                  {stp.title}
                </h3>
                <p className="text-[10.5px] text-slate-500 leading-relaxed font-light">
                  {stp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 💎 WHY DIGITAL MARKETING MATTERS SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                INDUSTRY SHIFTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Why Educational Institutions Need Digital Marketing
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Modern parents and students initiate 90%+ of their educational discovery through online searches or social channels. If your degree plans, schools, or learning programs fail to appear during this critical discovery window, they default to aggressive directories or competing universities.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Direct enrollment marketing positions your brand with high authority, replacing high-commission referrals with reliable organic leads.
              </p>

              <div>
                <a 
                  href="#education-audit-section"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow-md inline-block font-mono cursor-pointer"
                >
                  Verify Your Local Web Reach Now
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitsList.map((bnf, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0b101b] border border-slate-900 rounded-xl p-5 space-y-2 hover:border-slate-850 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-teal" />
                  <h3 className="text-xs font-mono font-extrabold text-white uppercase tracking-wider">{bnf.title}</h3>
                  <p className="text-[10.5px] text-slate-400 leading-normal font-light">{bnf.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 🗺️ LOCAL SEO MAPS SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
                MAP PACK DOMINATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Dominate Local Education Searches & Google Maps
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                When parents or adult students search 'best schools nearby' or 'vocational coaching indices closer to me', Google presents the prized Local 3-Pack Map Box. If your physical campus profiles are missing, unconfigured, or lack stellar rating counts, competitors receive 70%+ of the click volume.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We manage address parameters, deploy physician/academic JSON schemas, and program post-open-house triggers to continuously harvest parent/alumni maps reviews on scale.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-[#05070a] p-3 rounded-lg border border-slate-900">
                  <span className="text-white block font-bold font-mono">Hyperlocal Citation Grid</span>
                  <span className="text-[9.5px] text-slate-500 block mt-1">Indexing physical properties across 300+ local address indices.</span>
                </div>
                <div className="bg-[#05070a] p-3 rounded-lg border border-slate-900">
                  <span className="text-white block font-bold font-mono">Alumni Review Harvesting</span>
                  <span className="text-[9.5px] text-slate-500 block mt-1">Automated prompt chains securing positive student reviews.</span>
                </div>
              </div>
            </div>

            {/* Maps Proximity Simulator */}
            <div className="lg:col-span-6">
              <div className="bg-[#05070a] border border-slate-900 rounded-2xl p-5 shadow-inner">
                <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase block font-black">Google Map pack ranking tester</span>
                  <span className="text-[8px] bg-teal-500/10 text-teal-400 font-mono px-2 py-0.5 rounded border border-teal-500/20">Live Coordinate Index</span>
                </div>

                <div className="space-y-4 text-left">
                  {/* Selector */}
                  <div className="flex gap-2">
                    {[
                      { key: 'prep', label: 'STEM Prep School' },
                      { key: 'higher', label: 'MBA College' },
                      { key: 'edtech', label: 'Coding Lab' }
                    ].map((btn) => (
                      <button
                        key={btn.key}
                        onClick={() => setSelectedMapsCategory(btn.key as any)}
                        className={`text-[9.5px] font-mono py-1.5 px-3 rounded font-bold border transition-colors cursor-pointer ${
                          selectedMapsCategory === btn.key
                            ? 'bg-brand-teal/20 border-brand-teal text-white'
                            : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Simulator Screen details */}
                  <div className="bg-[#0b101b] rounded-xl p-4 border border-slate-900 space-y-3">
                    <div className="space-y-1">
                      <span className="text-[8.5px] font-mono text-slate-500 uppercase block">Simulated Search String:</span>
                      <span className="text-xs text-white block font-mono font-extrabold italic">"{mapsCategoryData[selectedMapsCategory].searchQuery}"</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-[#05070a] p-3 rounded rounded-l border-l-2 border-l-red-500 border border-slate-900">
                        <span className="text-[8px] font-mono text-slate-500 uppercase block">UN-OPTIMIZED PLACEMENT:</span>
                        <span className="text-[10px] text-red-100 font-semibold block mt-1">{mapsCategoryData[selectedMapsCategory].baselineRank}</span>
                      </div>
                      <div className="bg-[#05070a] p-3 rounded rounded-l border-l-2 border-l-brand-teal border border-slate-900">
                        <span className="text-[8px] font-mono text-brand-teal uppercase font-black block">AKGLS PRIORITY PACK:</span>
                        <span className="text-[10px] text-brand-teal font-extrabold block mt-1">{mapsCategoryData[selectedMapsCategory].akglsRank}</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-900 pt-3 space-y-1">
                      <span className="text-[8.5px] font-mono text-slate-500 uppercase block">Average Target Impact:</span>
                      <p className="text-xs text-white font-sans">{mapsCategoryData[selectedMapsCategory].monthlyLeads}</p>
                    </div>

                    <div className="bg-[#05080e] p-2.5 rounded font-mono text-[9px] text-slate-400 border border-slate-900">
                      <span className="text-brand-orange block font-black uppercase text-[8px] mb-0.5">Deployment Action:</span>
                      {mapsCategoryData[selectedMapsCategory].improvement}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 STUDENT LEAD GENERATION SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="bg-[#080c14] border border-slate-900 rounded-2.5xl p-5 shadow-2xl relative space-y-4">
                <span className="text-[9.5px] font-mono text-brand-orange uppercase tracking-wider block font-black">Conversion Flow parameters</span>
                
                <div className="bg-[#04060b] rounded-lg p-3 border border-slate-900 text-left">
                  <span className="text-[8.5px] font-mono text-slate-500 uppercase block">Prospect Conversion Funnel Ecosystem</span>
                  <div className="space-y-2 mt-2 text-xs">
                    <div className="bg-[#070e17] p-2.5 rounded border border-brand-orange/10 flex justify-between items-center">
                      <span className="text-slate-300 font-mono">1. Instant Prospectus Request Triggered</span>
                      <span className="text-brand-orange font-bold font-mono">100% Clicks</span>
                    </div>
                    <div className="bg-[#070e17] p-2.5 rounded border border-brand-orange/10 flex justify-between items-center">
                      <span className="text-slate-300 font-mono">2. Dynamic WhatsApp Qualification Auto-reply</span>
                      <span className="text-brand-orange font-bold font-mono">74% Opt-in</span>
                    </div>
                    <div className="bg-[#070e17] p-2.5 rounded border border-brand-orange/10 flex justify-between items-center">
                      <span className="text-slate-300 font-mono">3. Phone Consultation Form Submitted</span>
                      <span className="text-brand-orange font-bold font-mono">42% Forms</span>
                    </div>
                    <div className="bg-[#070e17] p-2.5 rounded border border-brand-orange/10 flex justify-between items-center">
                      <span className="text-slate-300 font-mono">4. Direct Campus Admission Counseling</span>
                      <span className="text-brand-teal font-extrabold font-mono">18% Enrollments</span>
                    </div>
                  </div>
                </div>

                <div className="text-center font-mono text-[9px] text-slate-400 leading-normal">
                  Our system qualifies leads automatically, sending warm files only to busy coordinators.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                ADMISSION INTENSITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Generate More Student Admissions
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Rather than collecting simple broad clicks that clutter your administrative teams with wrong numbers or unstaffed inquiries, we engineer conversion funnels designed to qualify prospective parent or student registrations comprehensively.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Our campaigns deliver highly motivated student inquiries from Google Search, Maps Pack citations, highly engaging vertical reels, and professional conversational search indexes, directly connecting warm student prospects with your registrars.
              </p>

              <div className="pt-2">
                <a 
                  href="#education-audit-section"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md inline-block font-mono cursor-pointer"
                >
                  Request Customized Academic Lead Strategy
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤖 AI-POWERED EDUCATION MARKETING SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-teal/15 border border-brand-teal/30 text-teal-300 rounded-full py-1 px-3 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Bot className="text-brand-teal w-3.5 h-3.5" />
                <span>Generative Engine Optimization (GEO)</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                AI-Powered Marketing Solutions for Educational Institutions
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                When students ask ChatGPT Search, Claude, or Gemini 'which tech university offers modern program structures and has the high placement rate near me?', the AI does not return standard links. It recommends specific certified organizations based on its knowledge networks.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We manage semantic schemas, register courses on global authority index sites, and optimize FAQ profiles to ensure coordinates are cited by LLMs.
              </p>

              <div className="bg-[#05070a] p-4 rounded-xl border border-slate-950">
                <blockquote className="text-slate-400 italic text-xs leading-relaxed">
                  "Generative Engine SEO represents the biggest shift in student acquisition patterns since the birth of search. Forward-thinking entities are establishing authority schemas to be recommended first."
                </blockquote>
                <span className="text-[10px] text-brand-orange font-mono font-bold block mt-2 text-right">— AKGLS Search Division Ledger</span>
              </div>
            </div>

            {/* AI Search Discovery Simulator */}
            <div className="lg:col-span-6">
              <div className="bg-[#05070a] border border-slate-900 rounded-2.5xl p-5 shadow-2.5xl relative">
                <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block font-black">AI Generative search retriever</span>
                  <span className="text-[8.5px] bg-brand-orange/10 text-brand-orange font-mono px-2 py-0.5 rounded border border-brand-orange/20 animate-pulse">Semantic Map Engine</span>
                </div>

                <form onSubmit={handleSimulateEduSearch} className="space-y-3.5">
                  <div>
                    <label className="text-[9px] uppercase font-mono font-black text-slate-400 block mb-1">Enter Academic Search Query:</label>
                    <div className="relative">
                      <input 
                        type="text"
                        value={eduQuery}
                        onChange={(e) => setEduQuery(e.target.value)}
                        placeholder="e.g. elite STEM prep school near me or top business colleges..."
                        className="w-full bg-[#0b101b] border border-slate-900 rounded-xl px-3 py-2.5 text-slate-200 text-xs font-mono focus:border-slate-800 focus:outline-none"
                      />
                      <button 
                        type="submit" 
                        disabled={isSimulatingEdu}
                        className="absolute right-1 text-slate-400 hover:text-white top-1 flex items-center justify-center bg-slate-950 hover:bg-slate-900 border border-slate-900 p-1.5 rounded-lg text-xs"
                      >
                        <Search className="w-3.5 h-3.5 text-brand-orange" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <button 
                      type="submit"
                      disabled={isSimulatingEdu}
                      className="text-[9.5px] text-brand-orange font-mono uppercase font-black hover:underline cursor-pointer disabled:opacity-50"
                    >
                      {isSimulatingEdu ? "Retrieving Knowledge Nodes..." : "Simulate Retrieval Context →"}
                    </button>
                  </div>

                  <div className="bg-[#0b101b] border border-slate-900 rounded-xl p-4 text-left space-y-3">
                    <div className="flex gap-2.5 items-center justify-between">
                      <span className="text-[8px] font-mono text-slate-500 uppercase block">SIMULATED CITATIONS VERIFIED:</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Accuracy Score: {eduResult.score}%</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {eduResult.citations.map((cite, cIdx) => (
                        <span key={cIdx} className="text-[8.5px] text-slate-300 font-mono bg-slate-950 px-2 py-1 rounded border border-slate-900">
                          📌 {cite}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-slate-300 font-light leading-relaxed border-t border-slate-900 pt-3">
                      {eduResult.answer}
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 HIGH-CONVERTING EDUCATION WEBSITE DESIGN SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="bg-[#080c14] border border-slate-900 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                <div className="text-left border-b border-slate-900 pb-3 mb-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-white text-xs font-mono font-extrabold tracking-tight">Vanguard School Portal Mockup</h4>
                    <p className="text-[9.5px] text-slate-500 font-mono mt-0.5">Optimized for Core Web Vitals (Grade A, Speed Index: 0.8s)</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
                </div>

                <div className="space-y-3 text-xs text-left">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 space-y-4">
                    <div className="h-4 w-2/3 bg-slate-900 rounded" />
                    <div className="h-3 w-full bg-slate-900 rounded" />
                    <div className="h-3 w-4/5 bg-slate-900 rounded" />
                    
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="bg-[#0b101b] p-2.5 rounded border border-slate-900">
                        <span className="block text-[8.5px] text-slate-500 font-mono uppercase">Online brochure:</span>
                        <span className="block text-[10px] text-white font-bold font-mono mt-0.5">📥 Download PDF</span>
                      </div>
                      <div className="bg-[#0b101b] p-2.5 rounded border border-slate-900">
                        <span className="block text-[8.5px] text-slate-500 font-mono uppercase">ADMISSIONS HUB:</span>
                        <span className="block text-[10px] text-brand-orange font-black font-mono mt-0.5">🗓️ Book Tour</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-4 text-center text-[9px] font-mono text-slate-400">
                  <span className="bg-slate-950 p-1.5 rounded">Frictionless</span>
                  <span className="bg-slate-950 p-1.5 rounded">Mobile Ready</span>
                  <span className="bg-slate-950 p-1.5 rounded">Alumni Feed</span>
                  <span className="bg-slate-950 p-1.5 rounded">Secure</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                CAMPUS ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                High-Converting Education Website Design
              </h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Many academic websites suffer from catastrophic page weights, slow-loading slideshow displays, and dense layouts that prevent prospects from submitting inquiries smoothly.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We develop clean, rapid websites programmed with simple course selection fields, secure application links, elegant professor profile assets, and dynamic student inquiry modules that minimize user abandonment.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Interactive and simple application form models</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Comprehensive program catalog architectures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Ultra-rapid mobile speeds (Speed Index &lt; 1.0s)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏆 CASE STUDIES / RESULTS SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">ALUMNI DECK</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Education Marketing Success Stories
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Real-world academic campaigns that secured student lists and increased direct registrar call volumes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {caseStudiesList.map((cs, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCaseIdx(idx)}
                className={`text-[9.5px] font-mono font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl border transition-all cursor-pointer ${
                  activeCaseIdx === idx
                    ? 'bg-brand-orange border-brand-orange text-white'
                    : 'bg-[#05070a] border-slate-900 text-slate-400 hover:border-slate-800'
                }`}
              >
                🎓 {cs.brand}
              </button>
            ))}
          </div>

          <div className="bg-[#05070a] border border-slate-900 rounded-2.5xl p-6 sm:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[10px] font-mono text-brand-orange uppercase block font-black">Success Parameters Resolved:</span>
                <h3 className="text-2xl sm:text-3.5xl font-black font-display text-white leading-tight">
                  {caseStudiesList[activeCaseIdx].brand}
                </h3>

                <div className="space-y-3 text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                  <p>
                    <strong className="text-white font-semibold">Institutional Challenge: </strong>
                    {caseStudiesList[activeCaseIdx].challenge}
                  </p>
                  <p>
                    <strong className="text-white font-semibold">Deployment Growth Strategy: </strong>
                    {caseStudiesList[activeCaseIdx].strategy}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider">Metrics Achieved on scale:</span>
                <div className="space-y-3">
                  {caseStudiesList[activeCaseIdx].metrics.map((met, mIdx) => (
                    <div key={mIdx} className="bg-[#0b101b] border border-slate-900 rounded-xl p-4 flex justify-between items-center">
                      <span className="text-slate-300 font-mono text-xs">{met.label}</span>
                      <span className="text-brand-teal font-black font-display text-sm">{met.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 🏆 WHY CHOOSE AKGLS GROUP FOR EDUCATION MARKETING */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-14">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">USP MATRIX</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Why Choose AKGLS Group for Education Marketing?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We leverage real sector knowledge, transparent CRM logs, and proven LLM visibility systems to outpace traditional agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsCards.map((usp, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b101b] border border-slate-900 rounded-2.5xl p-6 relative hover:border-slate-800 transition-colors space-y-3"
              >
                <div className="w-1.5 h-5 bg-brand-orange absolute left-0 top-6 rounded-r" />
                <h3 className="text-sm font-extrabold text-white font-mono uppercase tracking-wide">
                  {usp.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛠️ TOOLS & TECHNOLOGIES PAGE SECTION */}
      <section className="bg-[#080b11] py-16 border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-black">ACADEMIC TECH STACK</span>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white">
              Tools & Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {marketingToolsList.map((tool, idx) => (
              <div 
                key={idx} 
                className="bg-[#05070a] border border-slate-900 rounded-xl p-4 text-center hover:border-slate-850 transition-colors space-y-1"
              >
                <span className="text-white font-mono font-extrabold text-xs block">{tool.name}</span>
                <span className="text-[9.5px] text-slate-500 block font-light">{tool.type}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📦 ADMISSION PACKAGES SECTION */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-14">
            <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">FLEXIBLE ENROLLMENT PROGRAM</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Flexible Education Marketing Packages
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Acquire tuition registrations with clear pricing structures and predictable lead schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {packagesList.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#0b101b] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:-translate-y-1 duration-200 ${
                  pkg.featured
                    ? 'border-brand-orange shadow-2xl relative'
                    : 'border-slate-900'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9.5px] font-mono uppercase font-black tracking-widest px-3 py-1 rounded-full border border-[#05070a]">
                    ★ MOST POPULAR PLAN
                  </span>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="text-white text-xl font-black font-mono block uppercase">{pkg.name}</h3>
                    <p className="text-[10.5px] text-slate-400 font-light mt-1.5 leading-relaxed">{pkg.target}</p>
                  </div>

                  <div className="border-y border-slate-900 py-4">
                    <span className="text-2xl sm:text-3xl font-black font-display text-white block">{pkg.price}</span>
                    <span className="text-[9.5px] text-slate-500 block font-mono">predictable retainer fee model</span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[9.5px] font-mono text-slate-500 uppercase block font-black">Retainer Scope Includes:</span>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-900">
                  <a
                    href="#education-audit-section"
                    className={`w-full text-center py-3.5 rounded-xl text-xs uppercase tracking-wider font-mono font-black block transition-all cursor-pointer ${
                      pkg.featured
                        ? 'bg-brand-orange hover:bg-opacity-95 text-white shadow-md'
                        : 'bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-400 hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <a 
              href="#education-audit-section"
              className="inline-flex items-center gap-1.5 text-brand-teal hover:underline font-mono text-[10.5px] uppercase font-black tracking-widest cursor-pointer"
            >
              Request Custom Education Marketing Plan &gt;&gt;
            </a>
          </div>

        </div>
      </section>

      {/* ❓ FAQS SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-black">KNOWLEDGE CENTRE</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase text-center">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#05070a] border border-slate-900 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full text-left py-4 px-5 flex justify-between items-center gap-4 text-white hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-xs sm:text-sm font-mono uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform ${openFaqIdx === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaqIdx === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-400 font-light border-t border-slate-900/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 FREE EDUCATION MARKETING AUDIT DIAGNOSTIC CORNER */}
      <section className="bg-[#05070a] py-20 text-left border-b border-slate-950" id="education-audit-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[10px] font-mono text-brand-orange uppercase block font-black">DOMAIN PENETRATION REPORT INITIALIZER</span>
            <h2 className="text-3.5xl sm:text-4.5xl font-black font-display text-white leading-tight">
              Get a Free Education Marketing Audit
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Receive a detailed organic audit analyzing your academic program visibility compared to direct regional competitors. Our analysts inspect local search visibility grids, course schemas, and site load speeds.
            </p>

            <div className="bg-[#0b101b] border border-slate-900 rounded-2xl p-5 space-y-3 text-xs">
              <span className="text-brand-teal font-mono font-bold block uppercase text-[9.5px]">Your Audit Documents Include:</span>
              <ul className="space-y-2.5 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>Comprehensive Organic SEO analysis comparing competitor courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>Google Business Maps Pack exposure audit index score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>ChatGPT, Claude, & Gemini generative retrieval visibility tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>UX load speeds, mobile stability patterns check, and key form diagnostics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#0b101b] border border-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <form onSubmit={runEducationAuditScanner} className="space-y-4">
                
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block mb-1">Institution Name:</label>
                    <input 
                      type="text"
                      required
                      value={auditParams.institutionName}
                      onChange={(e) => setAuditParams({...auditParams, institutionName: e.target.value})}
                      placeholder="e.g. Summit Science School"
                      className="w-full bg-[#05070a] border border-slate-900 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block mb-1">Website URL:</label>
                    <input 
                      type="url"
                      value={auditParams.websiteUrl}
                      onChange={(e) => setAuditParams({...auditParams, websiteUrl: e.target.value})}
                      placeholder="e.g. https://yourschool.edu"
                      className="w-full bg-[#05070a] border border-slate-900 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block mb-1">Primary Courses Option:</label>
                    <input 
                      type="text"
                      value={auditParams.coursesOffered}
                      onChange={(e) => setAuditParams({...auditParams, coursesOffered: e.target.value})}
                      placeholder="e.g. MBA, engineering, science classes"
                      className="w-full bg-[#05070a] border border-slate-900 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block mb-1">Target Neighborhood Locations:</label>
                    <input 
                      type="text"
                      value={auditParams.targetLocations}
                      onChange={(e) => setAuditParams({...auditParams, targetLocations: e.target.value})}
                      placeholder="e.g. Austin, Texas suburbs..."
                      className="w-full bg-[#05070a] border border-slate-900 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block mb-1">Institutional Email Address:</label>
                    <input 
                      type="email"
                      required
                      value={auditParams.email}
                      onChange={(e) => setAuditParams({...auditParams, email: e.target.value})}
                      placeholder="registrar@yourschool.edu"
                      className="w-full bg-[#05070a] border border-slate-900 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block mb-1">Phone Number:</label>
                    <input 
                      type="tel"
                      value={auditParams.phone}
                      onChange={(e) => setAuditParams({...auditParams, phone: e.target.value})}
                      placeholder="e.g. +1 555-0199"
                      className="w-full bg-[#05070a] border border-slate-900 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={scanStatus === 'running'}
                    className="w-full text-center bg-brand-orange hover:bg-opacity-95 text-white font-mono text-xs uppercase font-black tracking-widest py-3 rounded-xl transition"
                  >
                    {scanStatus === 'running' ? "Running Deep Academic System Scan..." : "Trigger Domain Visibility Diagnostic Audit"}
                  </button>
                </div>

                {scanStatus !== 'idle' && (
                  <div className="bg-[#05070a] border border-slate-950 rounded-xl p-4.5 space-y-3.5 select-none text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[8.5px] font-mono text-brand-teal uppercase font-black flex items-center gap-1.5">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping" />
                        Domain Diagnostics scan status Indicators
                      </span>
                      <span className="text-xs font-mono font-extrabold text-white">{scanProgress}%</span>
                    </div>

                    <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-brand-teal h-full transition-all duration-300" style={{ width: `${scanProgress}%` }} />
                    </div>

                    <div className="font-mono text-[9px] text-slate-400 leading-normal">
                      <span className="text-brand-orange block font-black uppercase text-[8px] mb-0.5">Live Diagnostic logs:</span>
                      {scanLogs}
                    </div>

                    {scanStatus === 'completed' && (
                      <div className="bg-[#0b101b] border border-[#05070a] rounded p-3 text-center space-y-1.5 mt-2">
                        <span className="text-xs text-emerald-400 font-bold block">✓ Scanning Finished Successfully!</span>
                        <p className="text-[10px] text-slate-300 font-light leading-relaxed">
                          Your PDF evaluation dossier is compiled. Our system coordinators will email the report cards inside 2 hours to <strong className="text-white">{auditParams.email}</strong>.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 📚 SUGGESTED ARTICLES / BLOG SECTION */}
      <section className="bg-[#080b11] py-20 text-left border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest block font-black">RESOURCE CENTER</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase">
              Suggested Articles & Handbooks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Definitive Education SEO Guide 2026", desc: "How to layout program page parameters, courses tables, and coordinate maps JSON configurations.", cat: "SEARCH SEO" },
              { title: "How Schools Generate Admissions Online Without High Aggregator Fees", desc: "A detailed blueprint mapping target local reviews acquisition loops for prep academies.", cat: "LEADS SYSTEM" },
              { title: "Highly Profitable Google Ads Strategies for Advanced Degree Colleges", desc: "Filtering high-cost student queries, isolating postgraduate keywords, and structuring qualifying steps.", cat: "PAID PPC" },
              { title: "Generative Engine Marketing: Maximizing ChatGPT Visibility for EdTech Centers", desc: "Structuring FAQ listings and alumni databases so Siri, Claude, and Gemini recommend your certifications.", cat: "AI CHANNELS" },
              { title: "Elite School Website Best Practices: Speed, Friction, and Prospectus Downloads", desc: "Achieving outstanding Speed Index ratings, designing simple multi-step user fields, and securing databases.", cat: "CORE DESIGN" },
              { title: "Qualifying Student Leads: Automated WhatsApp & CRM Pathways for Advisors", desc: "Structuring qualification pathways to route warm prospects directly to counselors while blocking spam.", cat: "CONVERSIONS" }
            ].map((art, idx) => (
              <div 
                key={idx} 
                className="bg-[#05070a] border border-slate-900 rounded-2xl p-5.5 hover:border-slate-800 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-brand-orange font-mono text-[9px] uppercase tracking-widest bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20 inline-block font-black">
                    {art.cat}
                  </span>
                  <h3 className="text-sm font-extrabold text-white leading-snug font-mono uppercase tracking-wide">{art.title}</h3>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed font-light">{art.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900/60">
                  <a 
                    href="#education-audit-section"
                    className="text-[9.5px] text-brand-teal hover:underline font-mono uppercase font-black tracking-widest block"
                  >
                    Read This Resource &gt;&gt;
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="bg-gradient-to-b from-[#05070a] to-[#0a0e17] py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-7">
          <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-black bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/30">
            ENROLLMENT OPTIMIZER
          </span>
          
          <h2 className="text-4xl sm:text-5.5xl font-black font-display text-white italic tracking-tight leading-tight uppercase">
            Ready to Grow Your Educational Institution?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Contact AKGLS Group's specialized education growth team. We structure predictable direct-enrollment pipelines built on maps, high-yield search SEO, and AI retrieval parameters.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a 
              href="#education-audit-section"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition duration-150 inline-block font-mono cursor-pointer"
            >
              Book Free Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition duration-150 inline-flex items-center gap-2 font-mono cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp Growth Strategy
            </a>
          </div>

          {/* Core bottom trust parameters */}
          <div className="flex flex-wrap justify-center gap-6 text-[10.5px] font-mono text-slate-500 pt-8 border-t border-slate-900/60 max-w-lg mx-auto select-none">
            <span className="flex items-center gap-1.5 uppercase font-bold">
              <Check className="w-3.5 h-3.5 text-brand-teal" />
              Education Marketing Experts
            </span>
            <span className="flex items-center gap-1.5 uppercase font-bold">
              <Check className="w-3.5 h-3.5 text-brand-teal" />
              Transparent Looker reporting
            </span>
            <span className="flex items-center gap-1.5 uppercase font-bold">
              <Check className="w-3.5 h-3.5 text-brand-teal" />
              ROI-Focused systems
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

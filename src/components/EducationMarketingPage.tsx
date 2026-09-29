import React, { useState, useEffect, FormEvent } from 'react';
import { 
  GraduationCap, School, BookOpen, Award, CheckCircle2, ArrowRight, 
  Search, Bot, Sparkles, Globe, Users, PhoneCall, Layers, 
  ShieldCheck, TrendingUp, BarChart3, ChevronRight, HelpCircle, 
  Building2, Landmark, Check, Send, Phone, MessageSquare, 
  Cpu, Zap, Compass, ArrowUpRight, Share2, Target, Calendar,
  Video, Star, ThumbsUp, Quote, MessageCircle
} from 'lucide-react';
import { captureLead } from '../utils/leadCapture';
import WhatsAppIcon from './WhatsAppIcon';
import ProposalSuccessState from './ProposalSuccessState';

interface EducationMarketingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
  onNavigate?: (href: string) => void;
}

export default function EducationMarketingPage({ onBackToHome, openProposalForm, onNavigate }: EducationMarketingPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Education & EdTech Marketing Services | AKGLS Group";
  }, []);

  // 1. Interactive Student Journey State
  const [activeJourneyStage, setActiveJourneyStage] = useState<number>(0);

  // 2. Interactive Sector Solutions State
  const [activeSector, setActiveSector] = useState<number>(0);

  // 3. Interactive Framework Step State
  const [activeFrameworkStep, setActiveFrameworkStep] = useState<number>(0);

  // 4. Interactive Search Intent Explorer
  const [selectedIntentCategory, setSelectedIntentCategory] = useState<'programs' | 'eligibility' | 'career' | 'edtech'>('programs');

  // 5. Interactive FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // 6. Lead Capture Form State
  const [leadForm, setLeadForm] = useState({
    institutionName: '',
    contactName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    institutionType: 'College / University',
    primaryGoal: 'Increase Qualified Student Enquiries',
    targetCourses: '',
    notes: ''
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!leadForm.contactName || !leadForm.email) return;
    setLeadSubmitting(true);

    try {
      await captureLead({
        name: leadForm.contactName,
        email: leadForm.email,
        phone: leadForm.phone,
        websiteUrl: leadForm.websiteUrl,
        primaryGoal: `Education Marketing: ${leadForm.primaryGoal} (${leadForm.institutionType} - ${leadForm.institutionName})`,
        notes: `Target Courses/Programs: ${leadForm.targetCourses}. Notes: ${leadForm.notes}`,
        pageAddress: typeof window !== 'undefined' ? window.location.href : '/education-marketing-services',
        pageTitle: 'Education & EdTech Marketing Services | AKGLS Group'
      });
      setLeadSuccess(true);
    } catch (err) {
      console.error('Lead capture error:', err);
      setLeadSuccess(true);
    } finally {
      setLeadSubmitting(false);
    }
  };

  // Student Journey Stages
  const studentJourneyStages = [
    {
      stage: "01. Discover",
      title: "Get Found on Search & AI",
      tagline: "Help prospective students find your institution, course, program, or platform",
      desc: "Before students compare fees or visit campuses, they must know you exist. We capture high-intent educational searches across Google, Microsoft Bing, YouTube, and AI answer engines.",
      tactics: [
        "Course & degree keyword optimization (e.g. 'Best MBA colleges in India', 'Online data science degrees')",
        "Local Google Business Profile dominance for campuses & study centers",
        "Entity citation in ChatGPT, Perplexity, & Google Gemini answers",
        "Targeted Search & Social ads introducing new academic batches"
      ]
    },
    {
      stage: "02. Explore",
      title: "Answer Critical Academic Questions",
      tagline: "Answer questions about courses, fees, eligibility, placements, & curriculum",
      desc: "Students and parents conduct extensive research before inquiring. We structure rich informational content hubs that answer every question transparently and authoritatively.",
      tactics: [
        "Direct question-and-answer structuring (AEO) for eligibility & entrance exams",
        "Comprehensive syllabus teardowns & placement statistics displays",
        "Faculty credentials, infrastructure tours, & scholarship calculators",
        "Video course explainers, campus vlogs, & student resource libraries"
      ]
    },
    {
      stage: "03. Compare",
      title: "Win the Trust Comparison",
      tagline: "Build trust when students compare institutions, programs, & alternatives",
      desc: "Prospective learners compare 4 to 8 alternatives before submitting an application. We engineer comparison guides and digital proof points that highlight your unique academic advantage.",
      tactics: [
        "Head-to-head comparison pages with verified accreditation proofs",
        "Student & alumni video testimonials, career outcomes, & salary metrics",
        "Industry partner certifications & corporate placement affiliations",
        "Third-party editorial recognition, academic PR, & authoritative reviews"
      ]
    },
    {
      stage: "04. Enquire",
      title: "Convert Visitors Into Enquiries",
      tagline: "Turn website traffic into qualified enquiries through high-converting funnels",
      desc: "Traffic without inquiries is vanity. We deploy frictionless, mobile-optimized landing pages and smart inquiry forms designed specifically for student psychology.",
      tactics: [
        "One-click prospectus download & syllabus preview micro-conversions",
        "Direct WhatsApp counselling chat integration for instant queries",
        "Interactive scholarship eligibility checks that capture prospective leads",
        "Smart lead qualification filtering out casual browsers from serious applicants"
      ]
    },
    {
      stage: "05. Enroll",
      title: "Nurture Leads to Final Admission",
      tagline: "Build remarketing, counselling, & follow-up journeys supporting admission",
      desc: "The journey does not end when a form is submitted. We build automated remarketing and counselling acceleration journeys that convert inquiries into confirmed enrollments.",
      tactics: [
        "Dynamic multichannel remarketing across Meta, YouTube, & Google Display",
        "CRM integration syncing leads directly with admissions counselling teams",
        "Deadline countdown triggers for early-bird discounts & seat limits",
        "Virtual campus tour bookings & personalized counselor consultation links"
      ]
    }
  ];

  // 8 Sector Solutions
  const sectorSolutions = [
    {
      sector: "Schools & K-12",
      icon: School,
      tagline: "Local Visibility, Parent Engagement & Kindergarten to Grade 12 Admissions",
      desc: "Parents seek safe environments, verified board affiliations (CBSE, ICSE, IB, Cambridge), extracurricular excellence, and nurturing faculty. We help schools dominate local map packs, manage school reputation, and drive open-house campus visits.",
      metrics: "Average +140% parent campus tour enquiries within 90 days",
      features: [
        "Google Local 3-Pack rank dominance for 'best schools near me'",
        "Annual admissions campaign orchestration (Nursery, Grade 1, High School)",
        "Parent testimonial storytelling and campus infrastructure video reels",
        "Transparent fee, transport, safety, and academic curriculum hubs"
      ]
    },
    {
      sector: "Colleges & Universities",
      icon: Landmark,
      tagline: "Degree Discovery, National Reach, & High-Ticket Degree Admissions",
      desc: "Higher education requires multi-state and international student recruitment across Undergraduate, Postgraduate, and Doctorate degrees. We build scalable programmatic course directories and manage multi-channel paid acquisition pipelines.",
      metrics: "Average 45% reduction in student acquisition cost per enrolled application",
      features: [
        "Scalable course & department architecture (B.Tech, MBA, MBBS, Law, Design)",
        "Entrance exam preparation content clusters & eligibility criteria tools",
        "Alumni placement reports and international faculty spotlight hubs",
        "Performance Max and YouTube bumper campaigns for seasonal cutoffs"
      ]
    },
    {
      sector: "Coaching Institutes & Test Prep",
      icon: Award,
      tagline: "Capture High-Intent Searches for NEET, JEE, UPSC, SAT, & CAT",
      desc: "Test preparation is hyper-competitive and results-driven. We position your coaching center as the undisputed authority through rank holder showcases, sample test papers, and batch announcement funnels.",
      metrics: "Average 3.2x lift in offline center walk-ins and trial class bookings",
      features: [
        "Dominant ranking for seasonal exam queries and answer key release pages",
        "Classroom batch booking and scholarship entrance test (SAT/diagnostic) funnels",
        "Video solution breakdowns by star educators on YouTube & social",
        "Geotargeted localized search for multi-branch regional institutes"
      ]
    },
    {
      sector: "EdTech Companies & Platforms",
      icon: Cpu,
      tagline: "Scale User Acquisition for SaaS Learning, LMS, & EdTech Subscriptions",
      desc: "For digital learning platforms, unit economics, free-trial-to-paid conversion rates, and retention are paramount. We construct programmatic landing pages, GEO AI citation strategies, and full-funnel SaaS paid loops.",
      metrics: "Scalable monthly recurring subscription and free-trial enrollments",
      features: [
        "Programmatic SEO across 10,000+ course skill and syllabus variants",
        "Generative Engine Optimization (GEO) ensuring AI assistant recommendation",
        "Product-led growth SEO: interactive quizzes, free code playgrounds, study notes",
        "LinkedIn B2B campaigns targeting corporate and institutional L&D buyers"
      ]
    },
    {
      sector: "Online Course Providers",
      icon: BookOpen,
      tagline: "Build Organic Demand for Up-Skilling, Certifications, & Bootcamps",
      desc: "Professionals seek practical career transitions and verifiable certifications. We optimize your curriculum pages for salary outcomes, mentor credentials, and hands-on portfolio projects.",
      metrics: "High-converting webinar signups and direct checkout enrolments",
      features: [
        "High-intent keyword capture: 'Digital marketing course with placement'",
        "Transparent syllabus breakdown and project portfolio previews",
        "EMI payment plan and money-back guarantee trust architecture",
        "Automated WhatsApp inquiry follow-ups and counselor booking"
      ]
    },
    {
      sector: "Vocational & Skill Training",
      icon: Target,
      tagline: "Reach Learners Seeking Practical Trades, Diplomas, & Quick Employment",
      desc: "Connect with students looking for immediate job readiness, NSDC-aligned certifications, aviation, culinary, healthcare technician, and industrial trade programs.",
      metrics: "High local recruitment velocity and government-aligned intake fills",
      features: [
        "Hyperlocal search campaigns in regional languages and industrial hubs",
        "Placement tie-up highlights and verified hiring partner logos",
        "Low-barrier SMS and WhatsApp registration forms",
        "Mobile-first fast-loading landing pages for Tier 2/Tier 3 students"
      ]
    },
    {
      sector: "Study Abroad & Education Consultants",
      icon: Globe,
      tagline: "High-Ticket Client Acquisition for US, UK, Canada, & European Universities",
      desc: "Overseas education involves substantial financial commitments. We build deep institutional trust through country visa guides, IELTS/TOEFL score calculators, and university scholarship dossiers.",
      metrics: "Consistent flow of verified, high-net-worth study abroad aspirants",
      features: [
        "Country-specific destination hubs: 'Study in Germany without tuition fee'",
        "IELTS/PTE/GRE coaching and test preparation lead magnets",
        "Profile evaluation tools capturing student GPAs and target intakes",
        "Success video podcasts with students currently studying abroad"
      ]
    },
    {
      sector: "Corporate Learning & Enterprise B2B",
      icon: Building2,
      tagline: "Generate Enterprise Pipeline for Workforce Training & Executive Upskilling",
      desc: "Position your executive education and customized corporate learning programs directly in front of Chief Human Resource Officers, L&D Directors, and enterprise department heads.",
      metrics: "High-value enterprise RFPs and multi-seat corporate contracts",
      features: [
        "Executive leadership and management case studies with verifiable ROI",
        "Account-Based Marketing (ABM) and hyper-targeted LinkedIn Lead Gen Ads",
        "Customized enterprise brochure and syllabus proposal downloads",
        "Accreditation by premier global business schools and corporate associations"
      ]
    }
  ];

  // Search Intent Categories
  const searchIntentQueries = {
    programs: [
      { query: "Best MBA colleges in India", intent: "Commercial Investigation", volume: "High", opportunity: "Pillar Program Page with NIRF accreditation & placement metrics" },
      { query: "Online MBA courses with UGC entitlement", intent: "Transactional", volume: "High", opportunity: "Direct enrollment landing page with EMI calculator" },
      { query: "B.Tech admission eligibility and cutoffs 2026", intent: "Informational / Decision", volume: "Very High", opportunity: "Interactive eligibility checker capturing contact details" },
      { query: "Top private universities for computer science", intent: "Commercial", volume: "Medium", opportunity: "Curriculum & faculty spotlight comparison hub" }
    ],
    eligibility: [
      { query: "What is the eligibility for an MBA without CAT?", intent: "Question Intent (AEO)", volume: "High", opportunity: "Direct Answer Box answering alternate entrance exam criteria" },
      { query: "Which course is best after 12th science for high salary?", intent: "Exploration Intent", volume: "Very High", opportunity: "Career guide pillar with integrated counseling booking" },
      { query: "How much does an online MBA cost in India?", intent: "Price Transparency", volume: "High", opportunity: "Fee comparison matrix contrasting university fees and ROI" },
      { query: "What is the difference between BBA and BCA?", intent: "Comparative AEO", volume: "High", opportunity: "Structured comparative table with career pathway projections" }
    ],
    career: [
      { query: "What are the career options after B.Tech in AI?", intent: "Outcome Driven", volume: "High", opportunity: "Industry placement report showcasing hiring partners" },
      { query: "Which skills are required for a data science career in 2026?", intent: "Informational", volume: "Medium", opportunity: "Downloadable skill checklist leading into course brochure" },
      { query: "Courses after graduation for quick employment", intent: "Urgent Transactional", volume: "High", opportunity: "Fast-track 6-month certification course funnel" },
      { query: "Average starting salary for cloud engineering graduates", intent: "Outcome Research", volume: "Medium", opportunity: "Alumni salary transparency index with course CTA" }
    ],
    edtech: [
      { query: "Best coding courses for school students with live mentors", intent: "Parent Commercial", volume: "High", opportunity: "Free trial class booking form with WhatsApp confirmation" },
      { query: "Online learning platforms for corporate finance", intent: "B2B / Professional", volume: "Medium", opportunity: "SaaS demo request page with enterprise seat discounting" },
      { query: "Distance education programs for working professionals", intent: "Flexibility Need", volume: "High", opportunity: "Weekend batch schedule breakdown & advisor call request" },
      { query: "Best digital marketing course with guaranteed internship", intent: "High Commercial", volume: "Very High", opportunity: "High-converting landing page with hiring partner showcase" }
    ]
  };

  // Comprehensive FAQ Dataset
  const faqData = [
    {
      q: "What is Education Marketing?",
      a: "Education marketing is the strategic practice of promoting schools, colleges, universities, EdTech platforms, training academies, and educational products to prospective students, parents, and working professionals. It combines search engine visibility (SEO), answer engine optimization (AEO), generative AI search (GEO), targeted advertising (Google, Meta, LinkedIn), content marketing, conversion rate optimization (CRO), and counselor lead-nurturing to convert search queries into confirmed student enrollments."
    },
    {
      q: "What is EdTech Marketing and how does it differ from traditional education marketing?",
      a: "EdTech marketing focuses on acquiring and retaining users for digital education products—such as online learning platforms, coding bootcamps, SaaS LMS systems, and subscription course apps. Unlike traditional institutions driven by annual academic intake seasons, EdTech marketing operates year-round with rapid digital experimentation, product-led SEO, freemium-to-paid conversion loops, automated onboarding funnels, and continuous lifetime-value (LTV) optimization."
    },
    {
      q: "How can SEO help an education business grow enrollments?",
      a: "SEO builds sustainable, recurring organic visibility for high-intent searches when students and parents evaluate programs (e.g., 'Best MBA colleges in India', 'CBSE schools near me', 'Python data science certification'). By ranking prominently for both broad institutional queries and hyper-specific course questions, education brands capture qualified prospects without paying recurring ad fees for every single click."
    },
    {
      q: "How does AEO (Answer Engine Optimization) help education websites?",
      a: "Students search increasingly through full, natural-language questions rather than short keywords (e.g., 'What is the eligibility for an MBA without CAT?'). AEO structures your website content into explicit Question → Direct Answer → Explanation → Program CTA frameworks. This ensures search engines recognize your pages as the definitive source for featured snippets, voice search answers, and Google AI Overviews."
    },
    {
      q: "What is GEO (Generative Engine Optimization) in education marketing?",
      a: "GEO optimizes your institutional digital footprint so that AI engines like ChatGPT, Perplexity, Google Gemini, and Microsoft Copilot cite, reference, and recommend your institution when users ask conversational queries (e.g., 'What are the best institutes for digital marketing in Bangalore?'). It involves entity knowledge graph establishment, educational authority signals, alumni citation seeding, and structured multi-source data indexing."
    },
    {
      q: "Can AKGLS Group manage both organic SEO and paid advertising campaigns?",
      a: "Yes. In fact, an integrated strategy yields the highest ROI. We run paid campaigns (Google Search, Performance Max, Meta Lead Ads, YouTube, LinkedIn) to generate immediate student applications for upcoming admission cutoffs, while simultaneously compounding organic SEO and AI search authority for long-term sustainable growth."
    },
    {
      q: "Can you generate qualified leads for colleges and universities with high fees?",
      a: "Yes. High-tuition programs require deep trust building. We engineer multi-touch journeys: from initial curriculum exploration and scholarship calculators to video campus tours and one-on-one counselor booking. We implement rigorous lead qualification filters in our forms to ensure your admissions team speaks with genuine, financially qualified candidates."
    },
    {
      q: "How do you measure education marketing performance?",
      a: "We move beyond superficial vanity metrics like impressions and clicks. Our reporting dashboards track Cost per Qualified Lead (CPL), counselor contact rate, campus visit/webinar attendance rate, application submission rate, and final enrollment acquisition cost. Every marketing dollar is attributed directly to student admissions."
    },
    {
      q: "How long does education SEO take to produce measurable results?",
      a: "Initial technical index cleanup and AEO question snippet wins typically emerge within 30 to 60 days. Substantial organic traffic compounding, top-3 keyword rankings for competitive degree terms, and sustained enrollment pipeline growth generally mature within 3 to 6 months. For immediate seasonal intakes, we pair SEO with targeted paid campaigns."
    }
  ];

  return (
    <div className="bg-[#050814] text-slate-200 min-h-screen selection:bg-brand-indigo selection:text-white font-sans">
      
      {/* SCHEMA.ORG INJECTIONS FOR SERVICE & FAQ & EDUCATIONAL ORGANIZATION */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Education & EdTech Marketing Services",
          "provider": {
            "@type": "Organization",
            "name": "AKGLS Group",
            "url": "https://www.akglsgroup.com",
            "logo": "https://www.akglsgroup.com/assets/geo-og.png"
          },
          "areaServed": "Global",
          "description": "Grow student enquiries and enrollments with AKGLS Group's Education & EdTech Marketing Services. SEO, AEO, GEO, AIO, paid ads, content, CRO & lead generation.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Education Marketing Solutions",
            "itemListElement": sectorSolutions.map((s, idx) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.sector,
                "description": s.desc
              }
            }))
          }
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        })
      }} />

      {/* TOP HEADER BREADCRUMB */}
      <div className="border-b border-slate-800/80 bg-[#080d1e]/80 backdrop-blur-md sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <button 
              onClick={onBackToHome}
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400">Industries</span>
            <span aria-hidden="true">/</span>
            <span className="text-teal-400 font-bold truncate max-w-[220px] sm:max-w-none">Education & EdTech</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Student Enrollment Architecture</span>
            </span>
            <span>·</span>
            <span>SEO + AEO + GEO + AIO + Conversion</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Unboxed Kicker */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>Turn Search Visibility Into Student Enrollments</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-display">
                Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-300 to-cyan-400">EdTech Marketing</span> Services
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Grow your school, college, university, coaching institute, EdTech platform, or education brand with an integrated digital growth strategy built for modern search and AI discovery.
              </p>

              {/* Central Value Formulation Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0a1024] border border-indigo-500/30 shadow-lg space-y-2">
                <div className="text-[11px] font-mono text-teal-400 uppercase tracking-wider font-bold">
                  The AKGLS Education Growth Formula
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono flex flex-wrap items-center gap-2">
                  <span>Education Growth</span>
                  <span className="text-teal-400">=</span>
                  <span className="text-indigo-300">Visibility</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-teal-300">Trust</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-cyan-300">Enquiries</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-purple-300">Admissions</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-emerald-400">Enrollment</span>
                </div>
                <p className="text-xs text-slate-400">
                  AKGLS Group helps education businesses attract the right students, parents, learners, and decision-makers through SEO, AEO, GEO, AIO, paid advertising, content marketing, social media, conversion optimization, and data-driven lead generation.
                </p>
              </div>

              {/* Tagline Strip */}
              <div className="text-xs text-slate-400 font-mono flex flex-wrap items-center gap-y-2 gap-x-3">
                <span className="text-slate-200 font-semibold">Get Found</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-semibold">Build Trust</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-semibold">Generate Enquiries</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-200 font-semibold">Grow Enrollments</span>
              </div>

              {/* Conversion Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.querySelector('#education-audit-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 flex items-center gap-2.5 transition-all cursor-pointer"
                >
                  <span>Get Your Education Marketing Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918318114492"
                  className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all flex items-center gap-2.5"
                >
                  <PhoneCall className="w-4 h-4 text-teal-400" />
                  <span>Talk to an Education Growth Expert</span>
                </a>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 pt-6 mt-8 font-mono">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">3.4x</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Enquiry Volume Lift</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-teal-400">420+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Programs Ranked</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-indigo-400">-42%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Cost Per Enrollment</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">180K+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Student Decisions Guided</div>
                </div>
              </div>

            </div>

            {/* Hero Interactive Terminal: Multi-Surface Search Discovery */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b1021] border border-slate-800/90 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">The Modern Student Discovery Stack</span>
                  </div>
                  <span className="text-[10px] font-mono text-teal-400">Multi-Channel</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between text-teal-400 font-bold text-[11px]">
                      <span>STAGE 1: GOOGLE & YOUTUBE SEARCH</span>
                      <span>High Intent</span>
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      "Best private university for B.Tech in Computer Science with placements"
                    </div>
                    <div className="text-[10px] text-slate-500">→ Ranked #1 Organic + Featured Course Snippet</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between text-indigo-400 font-bold text-[11px]">
                      <span>STAGE 2: AI CONVERSATION (CHATGPT / GEMINI)</span>
                      <span>GEO / AEO</span>
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      "Compare curriculum, accreditation, and fees between University A and B"
                    </div>
                    <div className="text-[10px] text-slate-500">→ Structured entity knowledge graph cited as authoritative answer</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between text-cyan-400 font-bold text-[11px]">
                      <span>STAGE 3: STUDENT DECISION CONVERSION</span>
                      <span>CRO + Funnel</span>
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      Course landing page → Syllabus Download → WhatsApp Counselling Session
                    </div>
                    <div className="text-[10px] text-slate-500">→ Qualified enquiry synced to Admissions CRM within 4 seconds</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready to audit your institution?</span>
                  <button
                    onClick={() => {
                      const el = document.querySelector('#education-audit-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Start Audit Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: EDUCATION MARKETING BUILT AROUND THE STUDENT JOURNEY */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left space-y-4 mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Compass className="w-4 h-4 text-teal-400" />
              <span>Full-Funnel Student Lifecycle</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Education Marketing Built Around the Student Journey
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Students and parents no longer discover education brands through a single channel. They search Google. They ask AI assistants. They compare courses. They watch videos. They read reviews. They explore social media. They visit multiple websites before submitting an enquiry. Your marketing strategy needs to connect every stage of that journey into one measurable education growth ecosystem.
            </p>
          </div>

          {/* Interactive Journey Navigator Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {studentJourneyStages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveJourneyStage(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activeJourneyStage === idx
                    ? 'bg-slate-900 border-teal-500/60 shadow-lg shadow-teal-500/10'
                    : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`text-xs font-mono font-bold mb-1 ${activeJourneyStage === idx ? 'text-teal-400' : 'text-slate-500'}`}>
                  {stage.stage}
                </div>
                <div className="text-sm font-bold text-white truncate font-display">
                  {stage.title}
                </div>
              </button>
            ))}
          </div>

          {/* Journey Detailed Active Card */}
          <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 sm:p-9 text-left relative overflow-hidden space-y-6">
            <div className="border-b border-slate-800/80 pb-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-1.5">
                <span>STAGE FOCUS: {studentJourneyStages[activeJourneyStage].stage}</span>
              </div>
              <h3 className="text-2xl font-black text-white font-display">
                {studentJourneyStages[activeJourneyStage].title}
              </h3>
              <p className="text-xs sm:text-sm text-indigo-300 font-medium mt-1">
                {studentJourneyStages[activeJourneyStage].tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {studentJourneyStages[activeJourneyStage].desc}
            </p>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Actionable AKGLS Implementation Tactics:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {studentJourneyStages[activeJourneyStage].tactics.map((tactic, tIdx) => (
                  <div key={tIdx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Outcome: Predictable student progression from casual discovery to enrolled fee-paying scholar.
              </span>
              <button
                onClick={() => {
                  const el = document.querySelector('#education-audit-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Student Funnel Teardown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SEO FOR EDUCATION & EDTECH */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Search className="w-4 h-4 text-teal-400" />
              <span>Sustainable Organic Discovery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              SEO for Education & EdTech
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Build sustainable organic visibility for the searches that matter most to your institution or education platform. We do not chase empty impressions; we engineer topical authority and technical crawl infrastructure optimized for qualified student enquiries.
            </p>
          </div>

          {/* 14 Optimization Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: "Technical SEO", desc: "Crawl budget management, XML sitemaps, JS rendering for dynamic course platforms, and clean URL taxonomies." },
              { title: "On-Page SEO", desc: "Targeted course titles, meta descriptions, semantic headings, and student intent keyword placements." },
              { title: "Education Keyword Research", desc: "Native terminology, exam-based queries, fee lookups, and regional linguistic search intent." },
              { title: "Course & Program SEO", desc: "Detailed syllabus schemas, degree accreditation badges, and eligibility requirement matrices." },
              { title: "Local SEO", desc: "Google Local 3-Pack rankings, campus directions, and automated review harvest loops with alumni." },
              { title: "International SEO", desc: "Hreflang implementation, multi-country student visa guides, and regional tuition pricing." },
              { title: "Content Clusters", desc: "Topic clusters connecting career guides, entrance exams, syllabus pages, and admission forms." },
              { title: "Internal Linking", desc: "Contextual anchor paths guiding students seamlessly from informational guides to enrollment." },
              { title: "Authority Building", desc: "High-tier backlinks from academic journals, education directories, and university partnerships." },
              { title: "Image & Video SEO", desc: "Campus tour video indexing, schema video tags, and fast WebP educational diagram delivery." },
              { title: "Programmatic SEO", desc: "Scalable landing page systems across thousands of course + city or course + skill combinations." },
              { title: "Core Web Vitals", desc: "Sub-second LCP and zero CLS, ensuring frictionless mobile experiences for students." },
              { title: "Search Console Optimization", desc: "Continuous CTR optimization, impression monitoring, and query cannibalization audits." },
              { title: "Competitor Analysis", desc: "Benchmarking admissions keywords and gap analysis against leading rival universities & platforms." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#090e1f] border border-slate-800/80 hover:border-slate-700 transition-all space-y-1.5">
                <div className="text-xs font-bold text-white font-display flex items-center gap-1.5">
                  <span className="text-teal-400 font-mono">#</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Search Intent Matrix */}
          <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
              <div>
                <h3 className="text-xl font-bold text-white font-display">Target Searches by Student Intent</h3>
                <p className="text-xs text-slate-400 mt-1">Our strategy is built around search intent, not simply keyword volume.</p>
              </div>

              {/* Category selector */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'programs', label: 'Degree & Programs' },
                  { id: 'eligibility', label: 'Eligibility & Questions' },
                  { id: 'career', label: 'Career Outcomes' },
                  { id: 'edtech', label: 'EdTech & Online' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedIntentCategory(cat.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      selectedIntentCategory === cat.id
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 font-bold'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchIntentQueries[selectedIntentCategory].map((q, qIdx) => (
                <div key={qIdx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-white">"{q.query}"</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                      {q.intent}
                    </span>
                  </div>
                  <div className="text-xs text-teal-400 font-mono">
                    AKGLS Opportunity: {q.opportunity}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: AEO FOR EDUCATION BRANDS */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <HelpCircle className="w-4 h-4 text-teal-400" />
                <span>Answer Engine Optimization</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                AEO for Education Brands: Become the Answer Students Are Looking For
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Students and parents increasingly search using full questions rather than short keywords. Your content should be structured to answer those questions clearly, authoritatively, and instantly.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                AKGLS Group's Answer Engine Optimization (AEO) strategy helps education websites build structured answer-focused content around real student queries, winning featured snippets, voice search results, and Google Overviews.
              </p>

              {/* Structured Answer Architecture Framework */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                  The AKGLS Structured Answer Architecture:
                </div>
                <div className="text-xs font-mono text-teal-300 font-semibold leading-relaxed flex flex-wrap items-center gap-1.5">
                  <span className="text-white">Question</span>
                  <span>→</span>
                  <span className="text-teal-300">Direct Answer</span>
                  <span>→</span>
                  <span className="text-indigo-300">Supporting Explanation</span>
                  <span>→</span>
                  <span className="text-cyan-300">Evidence</span>
                  <span>→</span>
                  <span className="text-purple-300">Relevant Course</span>
                  <span>→</span>
                  <span className="text-emerald-400">CTA</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  This creates content that is vastly easier for search engines, generative engines, and users to comprehend and cite.
                </p>
              </div>
            </div>

            {/* Live AEO Question Card Simulation */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold mb-2">
                Typical High-Intent Student Questions We Optimize:
              </div>
              {[
                { q: "What is the eligibility for an MBA in 2026?", a: "Graduation with minimum 50% marks (45% for reserved categories) from a recognized university, with valid entrance exam scores (CAT, XAT, MAT, or institutional exam)." },
                { q: "Which course is best after 12th for high career growth?", a: "Top high-growth streams include B.Tech in AI/Data Science, Integrated Law (BA LLB), BCA, and BBA in Digital Business, depending on math/science prerequisites." },
                { q: "How much does an online MBA cost in India?", a: "Accredited online MBA programs typically range from ₹1,20,000 to ₹3,50,000 total fees, offering flexible monthly EMI plans and UGC entitlement." },
                { q: "What is the difference between BBA and BCA?", a: "BBA focuses on management, marketing, finance, and enterprise operations; BCA emphasizes computer applications, software engineering, databases, and coding." },
                { q: "Which skills are required for a data science career?", a: "Core requirements include Python/R programming, SQL, Linear Algebra, Machine Learning algorithms, Data Visualization (Tableau/Power BI), and business communication." }
              ].map((faq, fIdx) => (
                <div key={fIdx} className="p-3.5 rounded-xl bg-[#090e1f] border border-slate-800/80 space-y-1.5">
                  <div className="text-xs font-bold text-teal-300 font-mono flex items-center gap-2">
                    <span className="text-indigo-400 font-bold">Q:</span>
                    <span>{faq.q}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-4 border-l border-slate-800">
                    <span className="font-semibold text-slate-300">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: GEO & AI SEARCH OPTIMIZATION FOR EDUCATION */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Bot className="w-4 h-4 text-teal-400" />
              <span>Generative Engine Optimization (GEO)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              GEO & AI Search Optimization: Get Discovered Where Students Ask AI
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Search is evolving from traditional results pages toward conversational discovery. Prospective students are asking ChatGPT, Perplexity, Google Gemini, and Claude for advice on institutions and career pathways. Your education brand needs a digital presence that provides clear, authoritative, structured, and context-rich information.
            </p>
          </div>

          {/* Conversational Prompts Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { prompt: `"What are the best courses for a career in AI?"`, role: "Curriculum & Faculty Entity Seeding" },
              { prompt: `"Which universities offer accredited online MBA programs?"`, role: "Accreditation & UGC Entitlement Schema" },
              { prompt: `"What should I study after B.Com for finance jobs?"`, role: "Career Pathway & Outcome Grounding" },
              { prompt: `"Compare these top coding bootcamps for beginners."`, role: "Comparative Feature & Placement Proof" }
            ].map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/20 space-y-2">
                <div className="text-xs text-indigo-300 italic font-mono">
                  {p.prompt}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                  AKGLS Optimization: {p.role}
                </div>
              </div>
            ))}
          </div>

          {/* 12 GEO Focus Areas */}
          <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-800/80 pb-4">
              <h3 className="text-xl font-bold text-white font-display">12 Critical GEO Focus Areas for Modern Education</h3>
              <p className="text-xs text-slate-400 mt-1">Goal: Make your education brand effortless for modern AI search systems to understand, retrieve, and reference.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs font-mono">
              {[
                "01 / Brand Entity Optimization",
                "02 / Course & Program Metadata",
                "03 / Educational Topic Authority",
                "04 / Structured Schema Markup",
                "05 / Dynamic FAQ Ecosystems",
                "06 / Verified Faculty Expert Content",
                "07 / Institutional Knowledge Signals",
                "08 / Author & Dean Credentials",
                "09 / Supporting Academic Citations",
                "10 / Digital PR & Third-Party Trust",
                "11 / Alumni Outcome Verification",
                "12 / Multimodal AI Retrieval Prep"
              ].map((area, aIdx) => (
                <div key={aIdx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-slate-300 font-semibold">
                  {area}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: AIO — AI OPTIMIZATION FOR EDUCATION BRANDS */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Machine-Readable Knowledge Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              AIO — AI Optimization: Prepare Your Education Website for Machine-Readable Discovery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              AIO goes far beyond producing AI-generated copy. Our approach focuses on making your website's institutional knowledge machine-readable, contextually clear, trustworthy, and useful for crawling LLMs and search engines alike.
            </p>
          </div>

          {/* AI-Ready Education Content Sequential Framework */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1f] border border-slate-800 space-y-5">
            <div className="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold">
              The AI-Ready Education Content Framework:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-2 text-center text-xs font-mono">
              {[
                "Institution", "Program", "Course", "Faculty", "Eligibility", 
                "Fees", "Duration", "Curriculum", "Career", "Admission", "FAQs"
              ].map((node, nIdx) => (
                <div key={nIdx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-bold flex flex-col justify-center items-center">
                  <span className="text-[10px] text-teal-400">Step {nIdx + 1}</span>
                  <span className="truncate">{node}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              When content is structured in this explicit semantic order, search crawlers understand every relationship between courses, faculty, tuition, and career pathways without confusion.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 7: EDUCATION PAID MARKETING */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <TrendingUp className="w-4 h-4 text-teal-400" />
              <span>Paid Student Demand Generation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Education Paid Marketing: Generate Qualified Student Leads Faster
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Organic growth builds lasting authority, but admissions deadlines require immediate momentum. AKGLS Group manages high-performance paid campaigns across Google, Meta, and LinkedIn calibrated directly to student acquisition targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Google Ads */}
            <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-lg font-bold text-white font-display">Google Ads</h3>
                <span className="text-[10px] font-mono text-teal-400 font-bold uppercase">High Intent</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Exact match degree search campaigns</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Performance Max campaigns with localized assets</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> YouTube ads showcasing campus lifestyle & faculty</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Granular negative keyword lists blocking job seekers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Dynamic remarketing for incomplete prospectus downloads</li>
              </ul>
            </div>

            {/* Meta Ads */}
            <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-lg font-bold text-white font-display">Meta Ads (IG & FB)</h3>
                <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">Parents & Students</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Parent demographic targeting for school admissions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Native Lead Ads synced directly with counselor CRMs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Instagram Reels highlighting student alumni breakthroughs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Video view retargeting loops nurturing warm audiences</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Event ads for open days, webinars, & scholarship exams</li>
              </ul>
            </div>

            {/* LinkedIn Ads */}
            <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-lg font-bold text-white font-display">LinkedIn Ads</h3>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Executive & B2B</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Executive MBA & postgraduate management programs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Professional certifications (Data Science, Cloud, Fintech)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> B2B EdTech targeting corporate L&D executives</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Sponsored InMail from university deans & professors</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Job title and seniority targeting (Directors, VPs, Managers)</li>
              </ul>
            </div>

          </div>

          {/* Campaign Objectives Flow */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-center flex flex-wrap items-center justify-center gap-3">
            <span className="text-slate-400">Campaign Funnel Flow:</span>
            <span className="text-white font-bold">Awareness</span>
            <span>→</span>
            <span className="text-teal-400 font-bold">Consideration</span>
            <span>→</span>
            <span className="text-indigo-300 font-bold">Enquiry</span>
            <span>→</span>
            <span className="text-cyan-300 font-bold">Counselling</span>
            <span>→</span>
            <span className="text-purple-300 font-bold">Application</span>
            <span>→</span>
            <span className="text-emerald-400 font-bold">Enrollment</span>
          </div>

        </div>
      </section>

      {/* SECTION 8: EDUCATION LEAD GENERATION & CRO LANDING PAGES */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Conversion-Focused Enquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Education Lead Generation & Landing Pages That Convert Intent
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A large volume of leads does not automatically mean more admissions. We focus on lead quality and conversion architecture, transforming landing pages into digital admissions counselors.
            </p>
          </div>

          {/* 8 Pillars of a High-Converting Student Landing Page */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { pillar: "01. Program", q: "What is the course?", desc: "Clear degree/program headline with verified accreditation badges." },
              { pillar: "02. Eligibility", q: "Who can apply?", desc: "Clear academic prerequisites, entrance cutoffs, and minimum scores." },
              { pillar: "03. Curriculum", q: "What will they learn?", desc: "Modular semester syllabus with live industry projects and toolkits." },
              { pillar: "04. Duration", q: "How long does it take?", desc: "Full-time, weekend, or self-paced options with flexible batches." },
              { pillar: "05. Fees", q: "What is the investment?", desc: "Transparent tuition fees, scholarship slabs, and no-cost EMI options." },
              { pillar: "06. Career", q: "Where will it lead?", desc: "Average starting salary, placement statistics, and hiring partners." },
              { pillar: "07. Proof", q: "Why trust this brand?", desc: "NAAC/NIRF ranking, alumni video testimonials, and placement records." },
              { pillar: "08. Action", q: "What to do next?", desc: "Frictionless form: Apply Now, Download Brochure, or Book Counselling." }
            ].map((col, cIdx) => (
              <div key={cIdx} className="p-4 rounded-xl bg-[#090e1f] border border-slate-800/80 space-y-2">
                <div className="text-[10px] font-mono text-teal-400 font-bold uppercase">{col.pillar}</div>
                <div className="text-xs font-bold text-white font-display">{col.q}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: EDUCATION CONTENT MARKETING & LOCAL SEO */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Content Marketing Framework */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Authority Before the Application</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Education Content Marketing
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Educational content should help students make informed decisions while creating ongoing organic discovery opportunities. We build connected content ecosystems instead of isolated blog posts.
              </p>

              <div className="p-5 rounded-xl bg-[#090e1f] border border-slate-800 space-y-2.5 font-mono text-xs">
                <div className="text-teal-400 font-bold">The Connected Content Framework:</div>
                <div className="text-slate-300">Pillar Page (e.g., Ultimate Guide to MBA in India)</div>
                <div className="text-slate-500 pl-4">↓ Topic Cluster (Specializations: Finance, Marketing, Analytics)</div>
                <div className="text-slate-500 pl-8">↓ Question-Based Content (Entrance exam preparation, cutoffs)</div>
                <div className="text-slate-500 pl-12">↓ Course / Program Page (Detailed fee structure & curriculum)</div>
                <div className="text-emerald-400 pl-16 font-bold">↓ Conversion Landing Page (Application submission)</div>
              </div>
            </div>

            {/* Local SEO for Schools & Institutes */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <Landmark className="w-4 h-4 text-teal-400" />
                <span>Campus Proximity & Local Maps</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Local SEO for Schools & Institutes
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For educational organizations with physical campuses or regional branches, local visibility is the #1 discovery vehicle for parents and day scholars.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  "Google Business Profile 3-Pack rank dominance",
                  "Campus directions, virtual tours, & facility photos",
                  "Location-based keyword clusters per neighborhood",
                  "Automated parent & alumni review cultivation",
                  "NAP consistency across 80+ education directories",
                  "Localized landmark & school district co-indexing"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#090e1f] border border-slate-800 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9.5: SOCIAL MEDIA MARKETING FOR EDUCATION */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Share2 className="w-4 h-4 text-teal-400" />
              <span>Turn Knowledge Into Engagement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Social Media Marketing for Education: Turn Education Content Into Student Engagement
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Education brands have an unfair advantage over traditional businesses: you possess genuine knowledge worth sharing. AKGLS Group transforms that knowledge into high-retention social content that captivates prospective students, comforts skeptical parents, and drives surges of qualified admissions.
            </p>
          </div>

          {/* 12 Content Formats Grid */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              12 Social Content Formats Engineered for Education Brands:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {[
                { title: "Educational Reels & Shorts", desc: "60-second conceptual explainers, entrance exam shortcuts, and bite-sized learning." },
                { title: "Course & Degree Explainers", desc: "Transparent syllabus breakdowns, required tools, and career pathway highlights." },
                { title: "Faculty Masterclass Teasers", desc: "Spotlights on star educators demonstrating deep subject mastery and pedagogy." },
                { title: "Student Stories & Vlogs", desc: "A day in the life of a scholar, lab work, hostel lifestyle, and student clubs." },
                { title: "Campus & Lab Tours", desc: "Showcases of modern facilities, libraries, maker spaces, and sports complexes." },
                { title: "Admission Announcements", desc: "Seasonal cutoff releases, batch deadlines, and early-bird scholarship alerts." },
                { title: "Career Tips & Salary Insights", desc: "Honest discussions about industry salaries, hiring trends, and interview tips." },
                { title: "Exam Cutoffs & Alerts", desc: "Real-time updates on NEET, JEE, CAT, GATE, or regional board examinations." },
                { title: "Student & Parent FAQs", desc: "Bite-sized video answers resolving doubts about fees, housing, and placements." },
                { title: "Placement Celebrations", desc: "Social proof carousels celebrating students who secured high-package job offers." },
                { title: "Interactive Live Webinars", desc: "Live AMA sessions with Deans, counselors, and top alumni to convert applicants." },
                { title: "Micro-Learning Series", desc: "Sequential carousel posts that establish educational authority across feeds." }
              ].map((fmt, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#090e1f] border border-slate-800/80 hover:border-slate-700 transition-all space-y-1.5">
                  <div className="text-xs font-bold text-teal-300 font-display flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>{fmt.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {fmt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Platform Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              {
                platform: "Instagram",
                target: "Students & Gen-Z (16-24)",
                desc: "Reels, stories, campus lifestyle aesthetics, student takeovers, and direct messaging admissions inquiry funnels."
              },
              {
                platform: "YouTube",
                target: "Deep Research & Intent",
                desc: "Comprehensive syllabus breakdowns, campus walkthrough videos, alumni interview podcasts, and webinar recordings."
              },
              {
                platform: "LinkedIn",
                target: "Executive & B2B Up-Skilling",
                desc: "Executive MBAs, corporate partnerships, L&D leader targeting, faculty research, and high-ticket degree prestige."
              },
              {
                platform: "Facebook",
                target: "Parents & Family Decision-Makers",
                desc: "K-12 school admissions, parent community groups, transparent fee reviews, safety assurances, and local open days."
              }
            ].map((p, pIdx) => (
              <div key={pIdx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-white font-display">{p.platform}</span>
                  <span className="text-[10px] font-mono text-teal-400 font-bold uppercase">{p.target}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9.6: REPUTATION & TRUST MANAGEMENT */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Award className="w-4 h-4 text-teal-400" />
              <span>Decisive Trust Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Reputation & Trust Management: Students Choose Brands They Trust
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              For schools, colleges, and EdTech platforms, trust directly dictates enrollment velocity. Students and parents will not invest time and savings without verifying reviews, alumni outcomes, and accreditations. AKGLS Group establishes an unbreakable digital trust fortress around your education brand.
            </p>
          </div>

          {/* 6 Trust Engine Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                pillar: "01. Multi-Platform Reviews & Ratings",
                desc: "Systematic review cultivation across Google Maps, Shiksha, Careers360, Trustpilot, and Glassdoor, paired with proactive sentiment monitoring and response workflows."
              },
              {
                pillar: "02. Alumni Outcomes & Placement Proof",
                desc: "Verifiable salary statistics, recruiter rosters (Google, Microsoft, TCS, Deloitte), and authentic career path case studies that give applicants confidence."
              },
              {
                pillar: "03. Faculty Credibility & Thought Leadership",
                desc: "Showcase PhD credentials, published papers, industry advisory roles, and academic awards to validate educational quality."
              },
              {
                pillar: "04. Institutional Accreditation Badges",
                desc: "Prominent placement of NAAC, NIRF, UGC, AICTE, NBA, IB, Cambridge, AACSB, and international affiliations throughout landing pages and schema graphs."
              },
              {
                pillar: "05. Digital PR & Media Coverage",
                desc: "High-authority editorial features in leading educational dailies, press releases for rankings, innovations, and campus milestones."
              },
              {
                pillar: "06. Authentic Student Testimonial Architecture",
                desc: "Unscripted student and parent video interviews addressing real doubts: fees, faculty support, campus culture, and career outcomes."
              }
            ].map((trust, tIdx) => (
              <div key={tIdx} className="p-6 rounded-2xl bg-[#090e1f] border border-slate-800/80 hover:border-slate-700 transition-all space-y-3">
                <div className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                  TRUST PILLAR {tIdx + 1}
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {trust.pillar}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {trust.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: MARKETING SOLUTIONS FOR EVERY EDUCATION BUSINESS (8 SECTORS) */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Specialized Sector Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Marketing Solutions for Every Education Business
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every educational segment requires a distinct strategic formula. Explore our tailored frameworks engineered for schools, universities, EdTech startups, test-prep academies, and corporate learning providers.
            </p>
          </div>

          {/* Sector Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {sectorSolutions.map((sec, sIdx) => {
              const IconComp = sec.icon;
              return (
                <button
                  key={sIdx}
                  onClick={() => setActiveSector(sIdx)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                    activeSector === sIdx
                      ? 'bg-slate-900 border-teal-500/60 shadow-lg text-white'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <IconComp className={`w-5 h-5 ${activeSector === sIdx ? 'text-teal-400' : 'text-slate-500'}`} />
                  <span className="text-xs font-bold truncate max-w-full font-display">{sec.sector}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Sector Showcase Card */}
          <div className="bg-[#090e1f] border border-slate-800 rounded-2xl p-6 sm:p-9 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
              <div>
                <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
                  SECTOR FOCUS // {sectorSolutions[activeSector].sector}
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-1">
                  {sectorSolutions[activeSector].tagline}
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-semibold self-start sm:self-auto">
                {sectorSolutions[activeSector].metrics}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {sectorSolutions[activeSector].desc}
            </p>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Specialized Sector Strategy Deliverables:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sectorSolutions[activeSector].features.map((feat, fIdx) => (
                  <div key={fIdx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 11: OUR EDUCATION GROWTH FRAMEWORK (6 PHASES) */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <Compass className="w-4 h-4 text-teal-400" />
              <span>Proven 6-Stage Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Our Education Growth Framework
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We execute with surgical rigor across 6 structured phases to ensure maximum visibility, trust, and student enrollment conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", name: "Discover", desc: "Understand your institution, academic accreditations, student demographics, programs, competitors, and enrollment targets." },
              { num: "02", name: "Research", desc: "Map native student keywords, eligibility queries, parent concerns, competitor backlink profiles, and AI-search citation opportunities." },
              { num: "03", name: "Build", desc: "Develop the technical foundation, AEO content hubs, high-converting course landing pages, and CRM lead capture pipelines." },
              { num: "04", name: "Optimize", desc: "Refine on-page SEO, AEO question schemas, GEO generative engine signals, ad creatives, and counselor conversion journeys." },
              { num: "05", name: "Measure", desc: "Track organic rankings, student inquiries, counselor contact rates, application submissions, and cost-per-enrolled student." },
              { num: "06", name: "Scale", desc: "Expand proven campaigns across additional programs, regional campuses, overseas student markets, and automated remarketing loops." }
            ].map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#090e1f] border border-slate-800/80 space-y-3">
                <span className="text-xs font-mono font-bold text-teal-400">PHASE {step.num}</span>
                <h3 className="text-lg font-bold text-white font-display">{step.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 12: WHO WE HELP & WHY AKGLS GROUP */}
      <section className="py-20 border-b border-slate-800/80 bg-[#04060f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Who We Help */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <Users className="w-4 h-4 text-teal-400" />
                <span>Sector Reach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Who We Help
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AKGLS Group works with ambitious education and learning organizations across multiple institutional categories:
              </p>

              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                {[
                  "Schools & K-12 Academies",
                  "Colleges & Universities",
                  "EdTech Platforms & Apps",
                  "Coaching Institutes & Test Prep",
                  "Online Course Providers",
                  "Skill Development Companies",
                  "Training & Vocational Institutes",
                  "Study Abroad Companies",
                  "Education Consultants",
                  "Corporate Training Providers",
                  "Higher Ed Executive Programs",
                  "Language & Specialized Schools"
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#090e1f] border border-slate-800/80 text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why AKGLS Group */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Integrated Unified Partner</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Why Choose AKGLS Group?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Instead of juggling separate agencies for SEO, Google Ads, content, social media, and CRM, AKGLS Group brings these capabilities into one synchronized education growth framework.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { name: "SEO", desc: "Sustainable organic admissions pipeline" },
                  { name: "AEO", desc: "Question-based answer engine dominance" },
                  { name: "GEO", desc: "Brand discoverability in generative AI search" },
                  { name: "AIO", desc: "Machine-readable knowledge architecture" },
                  { name: "Performance Ads", desc: "Targeted Google, Meta, & LinkedIn campaigns" },
                  { name: "Content Marketing", desc: "Authoritative course & career guides" },
                  { name: "CRO", desc: "High-converting inquiry & brochure forms" },
                  { name: "Analytics & CRM", desc: "Full-funnel enrollment attribution tracking" }
                ].map((cap, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-lg bg-[#090e1f] border border-slate-800/80 space-y-1">
                    <div className="font-bold text-white font-display">{cap.name}</div>
                    <div className="text-[11px] text-slate-400">{cap.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 13: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              <HelpCircle className="w-4 h-4 text-teal-400" />
              <span>Admissions & Strategy FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Clear answers to common questions about education marketing, SEO, AEO, lead generation, and enrollment campaigns.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-[#090e1f] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display">
                    {faq.q}
                  </span>
                  <span className="text-teal-400 text-lg font-mono shrink-0">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 14: LEAD GENERATION AUDIT FORM & CONVERSION SECTION */}
      <section id="education-audit-form" className="py-20 bg-[#070b18] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Contact & Value Proposition */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>Ready to Grow Your Education Brand?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                Get Your Education Marketing Strategy
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Tell us about your institution, programs, target audience, and enrollment goals. We will perform a complimentary audit of your search presence, competitor rankings, and student conversion funnels.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Comprehensive Technical & AEO Audit Report</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Competitor Course Ranking & Gap Analysis</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Student Inquiry Funnel & Paid Ads Teardown</span>
                </div>
              </div>

              {/* Direct Instant Contact CTAs */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="text-xs text-slate-400 font-mono">Prefer instant consultation?</div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+918318114492"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-400" />
                    <span>+91 831 811 4492</span>
                  </a>
                  <a
                    href="https://wa.me/918318114492?text=Hello%20AKGLS%20Group%2C%20I%20would%20like%20to%20request%20an%20Education%20Marketing%20Audit%20for%20our%20institution."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 hover:bg-emerald-600/30 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp AKGLS Group</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Audit Intake Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0b1024] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                
                {leadSuccess ? (
                  <ProposalSuccessState
                    contactName={leadForm.contactName}
                    companyName={leadForm.institutionName || 'Your Education Institution'}
                    companyUrl={leadForm.websiteUrl}
                    budget={leadForm.institutionType}
                    channels={[
                      'Student Journey SEO',
                      'Answer Engine (AEO)',
                      'Generative AI (GEO)',
                      'Admissions Funnel'
                    ]}
                    notes={leadForm.targetCourses}
                    onReset={() => {
                      setLeadSuccess(false);
                      setLeadForm({
                        institutionName: '',
                        contactName: '',
                        email: '',
                        phone: '',
                        websiteUrl: '',
                        institutionType: 'College / University',
                        primaryGoal: 'Increase Qualified Student Enquiries',
                        targetCourses: '',
                        notes: ''
                      });
                    }}
                    variant="dark"
                  />
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <h3 className="text-lg font-bold text-white font-display">Request Education Marketing Audit</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Free institutional search and enrollment pipeline review.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Institution / Brand Name *</label>
                        <input
                          type="text"
                          required
                          value={leadForm.institutionName}
                          onChange={(e) => setLeadForm({ ...leadForm, institutionName: e.target.value })}
                          placeholder="e.g. Apex International University"
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Contact Person Name *</label>
                        <input
                          type="text"
                          required
                          value={leadForm.contactName}
                          onChange={(e) => setLeadForm({ ...leadForm, contactName: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Kumar / Admissions Director"
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Institutional Email *</label>
                        <input
                          type="email"
                          required
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          placeholder="admissions@institution.edu"
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Website URL</label>
                        <input
                          type="url"
                          value={leadForm.websiteUrl}
                          onChange={(e) => setLeadForm({ ...leadForm, websiteUrl: e.target.value })}
                          placeholder="https://www.institution.edu"
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Institution Category</label>
                        <select
                          value={leadForm.institutionType}
                          onChange={(e) => setLeadForm({ ...leadForm, institutionType: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        >
                          <option>College / University</option>
                          <option>School & K-12 Academy</option>
                          <option>Coaching & Test Prep Institute</option>
                          <option>EdTech Platform / App</option>
                          <option>Online Course Provider</option>
                          <option>Vocational & Skill Academy</option>
                          <option>Study Abroad & Consultant</option>
                          <option>Corporate Learning / L&D</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Primary Growth Goal</label>
                        <select
                          value={leadForm.primaryGoal}
                          onChange={(e) => setLeadForm({ ...leadForm, primaryGoal: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        >
                          <option>Increase Qualified Student Enquiries</option>
                          <option>Rank for Competitive Degree Keywords</option>
                          <option>AEO & Generative AI Search Discovery</option>
                          <option>Optimize Google & Meta Paid Ad Campaigns</option>
                          <option>Improve Website UX & Lead Conversion Rate</option>
                          <option>Full-Funnel Admissions Transformation</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Target Courses / Intakes</label>
                        <input
                          type="text"
                          value={leadForm.targetCourses}
                          onChange={(e) => setLeadForm({ ...leadForm, targetCourses: e.target.value })}
                          placeholder="e.g. MBA, B.Tech, NEET 2026 Batch"
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Current Challenges & Notes</label>
                      <textarea
                        rows={3}
                        value={leadForm.notes}
                        onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
                        placeholder="Tell us about your current admissions volume, target geographic markets, or specific marketing challenges..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={leadSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                    >
                      {leadSubmitting ? (
                        <span>Analyzing Institutional Footprint...</span>
                      ) : (
                        <>
                          <span>Request Education Marketing Audit</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="text-[11px] text-slate-500 text-center font-mono">
                      Strict NDA & privacy protection. Institutional data is never shared.
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

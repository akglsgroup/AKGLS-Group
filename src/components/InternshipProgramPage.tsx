import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Users, Shield, Briefcase, CheckSquare, Award, ChevronDown, Check, 
  Send, Laptop, Globe, Cpu, Code, Layers, FileText, ArrowRight, Mail,
  ArrowLeft, Upload, X, Download, RefreshCw, Plus, Minus
} from 'lucide-react';

interface InternshipProgramPageProps {
  onBackToHome: () => void;
  onNavigateToService?: (serviceId: string) => void;
}

interface DomainCard {
  id: string;
  title: string;
  badge?: string;
  badgeStyle?: string;
  learnItems: string[];
  description: string;
  icon: React.ReactNode;
}

export default function InternshipProgramPage({ 
  onBackToHome,
  onNavigateToService
}: InternshipProgramPageProps) {
  // Sync page scroll and title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Internship Program | Digital Marketing & AI SEO Internship | AKGLS Group";
  }, []);

  // Application fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [college, setCollege] = useState('');
  const [qualification, setQualification] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('seo');
  const [internshipMode, setInternshipMode] = useState('online');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form submission indicators
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Brochure download gate state
  const [brochureModal, setBrochureModal] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  // Active timeline phase
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  // Accordion training modules expanded
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  // FAQ Accordion
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Internship domains definitions
  const domains: DomainCard[] = [
    {
      id: "seo",
      title: "SEO Internship",
      badge: "Most Popular",
      badgeStyle: "bg-brand-indigo/10 text-brand-indigo border-brand-indigo/20",
      description: "Direct real-world experience auditing digital architecture, performing semantic keyword expansion, mapping page elements, and executing live indexing sequences.",
      learnItems: ["On-page SEO setup", "Off-page backlink outreach", "Technical crawling diagnostics", "Keyword proximity research", "SEO structural audit scoring", "Local search mapping & citation", "AI-powered SEO basics"],
      icon: <Code className="w-5 h-5 text-brand-indigo" />
    },
    {
      id: "ai-seo",
      title: "AI SEO & GEO Internship",
      badge: "Trending Program",
      badgeStyle: "bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20",
      description: "Master next-generation optimization techniques for Retrieval-Augmented Generation (RAG) engines, conversational search networks, and schema-driven SGE.",
      learnItems: ["AI search citations optimization", "Generative Engine Optimization (GEO)", "ChatGPT Optimization methods", "Conversational semantic tags", "Vector database embeddings logic", "Voice search speaking identifiers"],
      icon: <Cpu className="w-5 h-5 text-brand-emerald" />
    },
    {
      id: "smm",
      title: "Social Media Marketing Internship",
      description: "Design viral algorithmic retention pipelines, organic social outreach briefs, and high-engagement content strategy matrices across LinkedIn and Instagram.",
      learnItems: ["Instagram & LinkedIn layout briefs", "Organic algorithmic triggers", "Engaging reel storyboard creation", "B2B social authority mapping", "Direct audience interactions", "Analytics reporting setup"],
      icon: <Users className="w-5 h-5 text-brand-purple" />
    },
    {
      id: "google-ads",
      title: "Google Ads (PPC) Internship",
      description: "Co-manage real budget allocations, plan search keywords match types, build high-converting ad copies, and dissect ROI performance metrics.",
      learnItems: ["Google Ads account structures", "Pay Per Click (PPC) campaigns", "Keyword matching rules", "Conversion pixel integrations", "Visual ad copy variations", "Real click budget optimizations"],
      icon: <Globe className="w-5 h-5 text-brand-orange" />
    },
    {
      id: "content-writing",
      title: "Content Writing Internship",
      description: "Produce pristine, authoritative copywriting mapped to search engine rules and user retention logic. Eliminate conversational fluffy parameters.",
      learnItems: ["High-authority SEO writing", "AI-assisted content outline mapping", "Landing page conversion copies", "Niche user manuals creation", "Competitor content gap analysis", "GEO semantic content styles"],
      icon: <FileText className="w-5 h-5 text-brand-teal" />
    },
    {
      id: "wordpress",
      title: "WordPress Development Internship",
      description: "Architect lightweight, high-performance web templates utilizing optimized core-web-vitals metrics, perfect clean schemas, and clean Elementor layouts.",
      learnItems: ["WordPress initial parameters", "Elementor Pro page builders", "WooCommerce structural basics", "Page speed assets minifications", "Schema integration rules", "Essential core plugins QA"],
      icon: <Laptop className="w-5 h-5 text-brand-indigo" />
    },
    {
      id: "graphic-design",
      title: "Graphic Design Internship",
      description: "Build custom digital branding elements, conversion banners, and attention-grabbing high-click ad templates using modern visual layouts.",
      learnItems: ["Social media campaign elements", "Cohesive branding visual briefs", "Canva & Photoshop advanced basics", "High-conversion ad visual assets", "Marketing banner layouts", "UX/UI vector components"],
      icon: <Sparkles className="w-5 h-5 text-brand-purple" />
    },
    {
      id: "full-marketing",
      title: "Full Digital Marketing Internship",
      description: "Comprehensive multi-disciplinary rotation covering SEO, search ads, organic funnels, content strategies, and analytics reports.",
      learnItems: ["Holistic search ranking strategies", "Paid performance campaign basics", "Multi-channel content blueprints", "Lead generation parameters", "Client reporting layout structures", "E-mail setup funnels"],
      icon: <Layers className="w-5 h-5 text-white" />
    }
  ];

  const benefits = [
    { title: "Live Client Projects", desc: "No boring theories. Work on actual corporate brand campaigns and witness real rankings lift." },
    { title: "Expert Mentorship", desc: "Gain clinical insights directly from Amrish Singh and our senior technical engineering leads." },
    { title: "AI-Powered Skills", desc: "Acquire high-demand GEO, LLM citation optimization, and prompt-engineering capabilities." },
    { title: "Flexible Work Modes", desc: "Select between remote online projects, active workspace offices, or custom hybrid modules." },
    { title: "Accredited Certificate", desc: "Secure a certified credential of completion along with a comprehensive performance review." },
    { title: "Career Placement Pipeline", desc: "Outstanding interns receive immediate consideration for permanent full-time roles." },
    { title: "Practical Exercises", desc: "Work on specialized daily/weekly targets replicating actual digital agency operations." },
    { title: "Interview Ready", desc: "Get personalized CV reviews, LinkedIn audits, and technical SEO interview preps." }
  ];

  const skillsCategories = [
    {
      category: "SEO Frameworks",
      icon: <Code className="w-5 h-5 text-brand-indigo" />,
      items: ["Semantic keyword matrices", "Crawl logs troubleshooting", "In-depth backlink profile mapping", "Schema markup deployments"]
    },
    {
      category: "Generative Search & AI",
      icon: <Cpu className="w-5 h-5 text-brand-emerald" />,
      items: ["SGE citation structuring", "High-density context mapping", "System prompts tuning", "RAG passage matching layouts"]
    },
    {
      category: "Paid & Social Ops",
      icon: <Globe className="w-5 h-5 text-brand-orange" />,
      items: ["Budget scheduling formulas", "Intent-based campaign designs", "User retention funnels", "Conversion tracking QA"]
    },
    {
      category: "Technical Production",
      icon: <Laptop className="w-5 h-5 text-brand-teal" />,
      items: ["Responsive CSS styling grids", "Speed metrics enhancements", "API workflow integrations", "Visual dynamic briefs"]
    }
  ];

  const structureTimeline = [
    { phase: "Orientation & Basics", duration: "Week 1", focus: "Corporate tool authorizations, technical jargon vocabulary, and campaign analytics dashboard setups." },
    { phase: "Practical Learning", duration: "Week 2–4", focus: "Keyword clustering models, technical crawlers exercises, semantic copy write-ups, and daily reviews." },
    { phase: "Live Project Training", duration: "Week 4–8", focus: "Drafting optimization maps for real domains, setting custom SMM schedules, and monitoring ranking progress." },
    { phase: "Advanced Training", duration: "Week 8–12", focus: "Mastering conversational search parameters, fine-tuning SGE schema blocks, and paid ads simulation audits." },
    { phase: "Final Evaluation", duration: "Last Week", focus: "Dynamic portfolio submissions, career counselling sessions, certification releases, and career reviews." }
  ];

  const trainingModules = [
    {
      title: "Module 1 — Digital Marketing Basics",
      topics: [
        "Inorganic vs Organic acquisition paths",
        "Understanding search-intent brackets (Transactional, Commercial, Informational)",
        "Branding, domain parameters, and core structural funnels"
      ]
    },
    {
      title: "Module 2 — Advanced SEO Architecture",
      topics: [
        "On-page heading standards, keyword proximity, and internal link trees",
        "Off-page outreach rules, link equity, and domain rating indexes",
        "Technical audit frameworks: canonicals, robots.txt, maps, and HTTP responses",
        "Local business map pack and geographic citations setups"
      ]
    },
    {
      title: "Module 3 — AI SEO & Generative Optimization (GEO)",
      topics: [
        "How retrieval models index, parse, and cite third-party assets",
        "Synthesized direct answer block writing for RAG processing",
        "Adding speakable templates for voice assistants",
        "Co-citation structures and semantic entity validation"
      ]
    },
    {
      title: "Module 4 — Social Media Growth Funnels",
      topics: [
        "Platform algorithms details: Instagram Reels, LinkedIn B2B feeds, Meta Ads",
        "Creating intent-driven content calendars with clear visual hooks",
        "Audience building, interaction benchmarks, and lead funnels"
      ]
    },
    {
      title: "Module 5 — Paid Campaigns & Google Ads (PPC)",
      topics: [
        "Setting budget rules, bidding parameters, and negative keyword lists",
        "Audience mapping, pixels validation, and conversion setups",
        "Writing ad copy variants and monitoring ROI indices"
      ]
    },
    {
      title: "Module 6 — CMS & WordPress Infrastructure",
      topics: [
        "Setting database links, template limits, and CSS modifications",
        "Working with premium builders: Elementor Pro & Gutenberg layout models",
        "Page assets caching setups, image compression, and Core Web Vitals"
      ]
    },
    {
      title: "Module 7 — Analytics, Crawl Logs & Client Reports",
      topics: [
        "Google Analytics (GA4) traffic segmentation and target events",
        "Search Console index reports and organic search clicks matching",
        "Drafting clear, non-bloated technical reports for stakeholders"
      ]
    }
  ];

  const tools = [
    "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Canva", 
    "WordPress", "ChatGPT", "Gemini AI", "Google Ads", "Meta Business Suite"
  ];

  const testimonials = [
    {
      name: "Rohan Mehra",
      role: "SEO Intern (Now SEO Analyst at Zenith Digital)",
      text: "The practical tasks here are on another level. I was not just fetching coffee - I was writing real JSON-LD code schemas and analyzing crawling bottlenecks on active brand sites. Within 3 months I understood SEO better than during my whole college degree! The certification helped me land my agency job instantly.",
      stat: "Landed full-time role in 2 weeks"
    },
    {
      name: "Ananya Sharma",
      role: "AI SEO Intern (Now Content Lead at GrowthForce)",
      text: "Learning GEO optimizations and RAG architectures at AKGLS Group was mindblowing. We learned strategies that you cannot find in any course or YouTube tutorial. Designing content targeting SGE outputs is a rare superpower and this program makes it incredibly structured and simple.",
      stat: "100% Practical Client Portfolio"
    },
    {
      name: "Aditya Kumar",
      role: "Digital Marketing Graduate (Now Freelance Consultant)",
      text: "The hybrid model worked perfectly with my final semester schedule. I loved the tool kits access. Running real Semrush crawls, inspecting conversion budgets, and getting direct mentorship feedback from Amrish made this the best career choice I have ever made.",
      stat: "Built 12+ Active Site Case Studies"
    }
  ];

  const faqs = [
    {
      q: "Is this internship paid or unpaid?",
      a: "We offer both training-focused (unpaid) and project-contributor (stipend-based) tracks depending on previous skills, portfolio reviews, and duration choice. All tracks include premium software tools access, clinical mentorship reviews, verified certifications, and career support."
    },
    {
      q: "Will I get a verified physical certificate?",
      a: "Yes. Upon successful completion of your timeline criteria and dynamic task evaluations, you will receive a secure digital credential with a serialized verification ID, as well as a reference letter detailing your project outcomes."
    },
    {
      q: "Is live project training included?",
      a: "Absolutely. 100% of our curriculum centers around practical operations. You will analyze and formulate SEO optimizations, content briefs, and ad mock setups for live client projects in real-time."
    },
    {
      q: "Can complete beginners apply?",
      a: "Yes. Our 1-Month Basic track is designed to guide beginners from basic terminologies up. More advanced tracks (3-Month & 6-Month) are tailored for marketing freshers and graduates ready to build portfolio materials."
    },
    {
      q: "Is work-from-home internship available?",
      a: "Yes, we support Online/Remote workflows with weekly virtual check-ins, Offline workflows in our active workspace, and Hybrid models that combine both formats perfectly."
    },
    {
      q: "Will there be placement opportunities?",
      a: "Outstanding performers are fast-tracked into our internal placement pool. Since AKGLS Group is continuously expanding our digital solutions, we hire the best interns directly."
    },
    {
      q: "What tools will I learn to operate?",
      a: "You will master premium professional tools: SEMrush, Ahrefs, Google Analytics, Google Ads, Meta Business Suite, Canva, custom LLM prompting, and WordPress Elementor constructs."
    }
  ];

  // Drag-and-drop Resume Helpers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Main application submit handler
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phoneNumber) return;
    setFormSubmitting(true);

    // Simulate database write beautifully
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
    }, 1800);
  };

  // Pre-fill form selection when clicking a card
  const handleSelectDomainFromCard = (domainId: string) => {
    setSelectedDomain(domainId);
    const formElement = document.querySelector('#application-form-section');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  // Brochure Request Handler
  const handleBrochureRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureEmail) return;
    
    setBrochureSuccess(true);
    setTimeout(() => {
      setBrochureSuccess(false);
      setBrochureModal(false);
      setBrochureEmail('');
    }, 3000);
  };

  return (
    <div className="flex-1 bg-[#05070a] text-slate-100 min-h-screen relative overflow-hidden font-sans pb-16">
      
      {/* Decorative spotlights */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-emerald/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Action Button for application */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block select-none">
        <a 
          href="#application-form-section"
          className="inline-flex items-center gap-2 bg-brand-indigo hover:bg-brand-indigo/90 text-white font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-xl shadow-brand-indigo/30 transition-all scale-100 hover:scale-105"
        >
          <Briefcase className="w-4 h-4 animate-pulse" />
          <span>Apply Now</span>
        </a>
      </div>

      {/* Navigation Header Breadcrumbs */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-10 pb-4 z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-brand-navy/80 border border-slate-850 px-4 py-2.5 rounded-xl backdrop-blur-md hover:border-slate-750 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition duration-200" />
          <span className="font-bold">Back to Corporate Home</span>
        </button>

        <div className="text-[11px] text-slate-500 font-semibold tracking-wide flex items-center gap-1.5 bg-slate-900/40 px-3.5 py-1.5 rounded-lg border border-slate-850/60">
          <span className="hover:text-slate-350 transition cursor-pointer" onClick={onBackToHome}>Home</span>
          <span className="text-slate-700">/</span>
          <span className="text-slate-350 cursor-default font-extrabold text-brand-indigo">Internship Program</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo rounded-full text-[10.5px] font-extrabold uppercase tracking-widest font-display">
              <Award className="w-3.5 h-3.5 animate-pulse" />
              AKGLS Group Training & Incubation Portal
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none font-display">
              Launch Your Career with the <br />
              <span className="bg-gradient-to-r from-brand-indigo via-brand-teal to-brand-emerald bg-clip-text text-transparent">
                AKGLS Internship Program
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light max-w-2xl">
              Get practical industry experience in SEO, AI SEO, social media marketing, Google Ads, content writing, WordPress development, and digital marketing through live projects, expert mentorship, and real-world training.
            </p>

            {/* highlights bar */}
            <div className="grid grid-cols-2 gap-3.5 bg-slate-900/30 p-5 rounded-2xl border border-slate-850 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-350">
                <span className="h-5 w-5 bg-brand-indigo/10 rounded-full flex items-center justify-center text-brand-indigo shrink-0">✓</span>
                <span>Live Project Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-350">
                <span className="h-5 w-5 bg-brand-indigo/10 rounded-full flex items-center justify-center text-brand-indigo shrink-0">✓</span>
                <span>Verified SGE Certificate</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-350">
                <span className="h-5 w-5 bg-brand-indigo/10 rounded-full flex items-center justify-center text-brand-indigo shrink-0">✓</span>
                <span>GEO & AI SEO Frameworks</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-350">
                <span className="h-5 w-5 bg-brand-indigo/10 rounded-full flex items-center justify-center text-brand-indigo shrink-0">✓</span>
                <span>Hiring Placement Pipelines</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#application-form-section" 
                className="bg-brand-indigo hover:bg-brand-indigo/90 text-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition duration-300 inline-flex items-center gap-2 shadow-lg shadow-brand-indigo/20 hover:scale-102"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button 
                type="button"
                onClick={() => setBrochureModal(true)}
                className="bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:border-slate-700 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-brand-indigo" />
                <span>Download Internship Brochure</span>
              </button>
            </div>
          </div>

          {/* Graphical Mock dashboard widget right panel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-indigo/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="bg-brand-navy/90 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-left font-sans">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-emerald" />
              
              <div className="flex items-center justify-between border-b border-slate-850 pb-4 mb-4 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-bold">AKGLS_QA_DASHBOARD_[v26]</span>
              </div>

              <div className="space-y-4">
                <div className="bg-[#05070a]/90 rounded-2xl border border-slate-850 p-4.5 space-y-3.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-brand-emerald font-bold uppercase tracking-wider">● ACTIVE SYSTEMS METRIC</span>
                    <span className="text-[10px] text-slate-500 font-mono">2026 AUDIT MATRIX</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-light">Organic Citation Lift:</span>
                      <span className="font-mono text-brand-emerald font-bold">+44.2%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-850 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-emerald w-[75%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-light">Page Speed Optimization:</span>
                      <span className="font-mono text-brand-indigo font-bold">98/100 Mobile</span>
                    </div>
                    <div className="w-full h-1 bg-slate-850 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-indigo w-[98%]" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-850">
                    <span className="block text-[9.5px] font-mono text-slate-500 text-left font-bold uppercase">TOTAL INTERNS ACCOMPLISHED</span>
                    <span className="block text-xl font-bold font-display text-white mt-1">1,240+</span>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-850">
                    <span className="block text-[9.5px] font-mono text-slate-500 text-left font-bold uppercase">PLENTIFUL LIVE CAMPAIGNS</span>
                    <span className="block text-xl font-bold font-display text-brand-teal mt-1">125+ Active</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 px-4 rounded-xl border border-slate-850/60 flex items-center gap-3">
                  <Users className="w-7 h-7 text-brand-indigo" />
                  <div className="text-xs">
                    <p className="font-bold text-white leading-tight">Weekly Mentor Roundtable</p>
                    <p className="text-slate-500 tracking-wide mt-0.5 text-[10px]">Direct code audit with founder Amrish Singh</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT THE INTERNSHIP PROGRAM SECTION */}
      <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-16 text-left border-y border-slate-900 bg-brand-navy/20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 relative">
            <span className="absolute -top-1 left-4 font-mono text-[130px] font-black text-brand-indigo/5 leading-none select-none">COURSES</span>
            <div className="bg-slate-950/80 border border-slate-850 rounded-3xl p-8 relative overflow-hidden space-y-4">
              <div className="h-10 w-10 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal">
                <Award className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="text-xl font-extrabold font-display text-white">Continuous Modern Upgrades</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Traditional keyword-stuffing campaigns do not match modern AI search rules. At AKGLS Group, we continuously iterate on systems parameters to train interns on next-generation algorithmic guidelines.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4.5">
            <span className="text-xs font-mono font-bold text-brand-emerald uppercase tracking-wider block">ABOUT OUR INCUBATION PATH</span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-tight">
              About Our Internship Program
            </h2>
            <p className="text-slate-400 text-xs sm:text-[13.5px] leading-relaxed font-light">
              AKGLS Group offers a practical internship program designed for students, freshers, and aspiring professionals who want real-world experience in digital marketing, SEO, AI SEO, content marketing, PPC, and WordPress development.
            </p>
            <p className="text-slate-400 text-xs sm:text-[13.5px] leading-relaxed font-light">
              There are no redundant theory modules or stale guidelines here. Our program focuses purely on interactive exercises, logical thinking paths, actual analytics reviews, and verified growth delivery.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Industry-oriented training model",
                "Hands-on project experience matrix",
                "AI-powered digital search pipelines",
                "Deep analytical thinking tasks",
                "Career development counseling guidance"
              ].map((point, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-350">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* INTERNSHIP DOMAINS SECTION */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 z-10 relative">
        <header className="text-center max-w-2xl mx-auto space-y-3.5 mb-14">
          <span className="text-xs font-mono font-bold text-brand-indigo uppercase tracking-wider block">CHOOSE YOUR DIRECT FOCUS</span>
          <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-none">
            Internship Programs Available
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            Select an operational program mapping your long-term career aspirations. Customize your learning focus and acquire high-paying core modern marketing skills.
          </p>
        </header>

        {/* DOMAINS CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {domains.map((dom) => (
            <article 
              key={dom.id}
              className="bg-brand-navy/40 border border-slate-850 hover:border-slate-750 p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden cursor-pointer"
              onClick={() => handleSelectDomainFromCard(dom.id)}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {dom.icon}
                  </div>
                  
                  {dom.badge && (
                    <span className={`text-[8.5px] font-mono font-black uppercase tracking-wider border py-0.5 px-2 rounded-full ${dom.badgeStyle}`}>
                      {dom.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-brand-indigo transition font-display">
                  {dom.title}
                </h3>

                <p className="text-[11.5px] text-slate-400 leading-relaxed font-light line-clamp-3">
                  {dom.description}
                </p>

                <div className="pt-2.5 space-y-1.5 border-t border-slate-900">
                  <div className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">SKILLS TAUGHT:</div>
                  <div className="space-y-1">
                    {dom.learnItems.slice(0, 4).map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-[10.5px] text-slate-350">
                        <Check className="w-3 h-3 text-brand-emerald shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                    {dom.learnItems.length > 4 && (
                      <span className="text-[9.5px] text-slate-500 font-mono pl-4">+{dom.learnItems.length - 4} more chapters</span>
                    )}
                  </div>
                </div>
              </div>

              <button 
                type="button"
                className="mt-6 w-full bg-slate-950 group-hover:bg-brand-indigo hover:text-white border border-slate-850 group-hover:border-brand-indigo text-slate-400 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1"
              >
                <span>Select & Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* WHY JOIN AKGLS GROUP BENEFIT GRID */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20 text-left border-y border-slate-900 bg-[#070b13] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider block">THE COOPERATIVE EDGE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display leading-tight">
              Why Join AKGLS Group Internship Program?
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-light">
              We bridge the massive divide between academic theory classes and actual target metrics delivery. Acquire premium digital optimization workflow secrets today.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setBrochureModal(true)}
                className="text-xs font-bold font-display text-brand-indigo hover:underline inline-flex items-center gap-1.5"
              >
                <span>Inquire directly on schedules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((ben, bIdx) => (
              <div 
                key={bIdx}
                className="bg-brand-navy p-5 rounded-2xl border border-slate-850 hover:border-slate-800 transition"
              >
                <div className="flex items-start gap-3.5">
                  <span className="h-6 w-6 rounded border border-brand-emerald/20 bg-brand-emerald/10 text-brand-emerald flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    ✓
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-white font-display">{ben.title}</h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{ben.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SKILLS YOU WILL LEARN SECTION */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 z-10 relative text-left">
        <header className="text-center max-w-2xl mx-auto space-y-3.5 mb-14">
          <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider block">OPERATIVE SKILLS INVENTORY</span>
          <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-none">
            Skills You Will Learn
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            We list precisely what clinical methods you acquire across our 4 primary learning blocks. Real skills designed for immediate agency employment.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((cat, cIdx) => (
            <div 
              key={cIdx}
              className="bg-brand-navy/60 border border-slate-850 p-6 rounded-2xl space-y-4 hover:border-slate-800 transition"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-850">
                <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-xs font-extrabold text-white uppercase tracking-wider font-mono">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-2.5">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="h-1.5 w-1.5 bg-brand-teal rounded-full mt-2 shrink-0 animate-pulse" />
                    <p className="font-light leading-tight">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNSHIP TIMELINE CHART */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20 text-left border-t border-slate-900 bg-[#070b13]/60 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-mono font-bold text-brand-indigo uppercase tracking-wider block">THE 12-WEEK ROADMAP</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display leading-tight">
              Internship Structure & Timeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Our standard incubation tracks span from Orientation arrays to Advanced optimizations and exit-certification interviews.
            </p>

            <div className="space-y-2 pt-2.5">
              {structureTimeline.map((item, idx) => {
                const isActive = activePhaseIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`w-full p-3.5 text-left rounded-xl border text-xs flex justify-between items-center transition ${
                      isActive 
                      ? "bg-brand-indigo/10 border-brand-indigo text-white font-bold" 
                      : "bg-brand-navy/60 border-slate-850 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{item.phase}</span>
                    <span className="font-mono text-[10.5px] tracking-wider shrink-0">{item.duration}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 border border-slate-850 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-28 w-28 bg-brand-indigo/5 blur-[80px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhaseIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center pb-4 border-b border-slate-900">
                  <span className="text-xs font-mono text-brand-emerald font-bold uppercase tracking-widest">
                    ACTIVE TIMELINE UNIT: {structureTimeline[activePhaseIndex].duration}
                  </span>
                  
                  <span className="text-xs bg-slate-900 text-slate-500 font-bold px-3 py-1 rounded border border-slate-850">
                    Phase {activePhaseIndex + 1} of 5
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white font-display">
                  {structureTimeline[activePhaseIndex].phase}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-350 leading-relaxed font-light">
                  {structureTimeline[activePhaseIndex].focus}
                </p>

                <div className="bg-brand-navy p-4 rounded-xl border border-slate-900 space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-slate-550 block font-bold uppercase">EXPECTED TASK MILESTONES:</span>
                  <div className="flex items-center gap-2 text-xs text-brand-emerald font-semibold">
                    <CheckSquare className="w-4 h-4 shrink-0" />
                    <span>Weekly client log evaluation criteria audits</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* DETAILED INTERNSHIP TRAINING MODULES ACCORDION */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 z-10 relative text-left">
        <header className="max-w-2xl space-y-3.5 mb-14">
          <span className="text-xs font-mono font-bold text-brand-emerald uppercase tracking-wider block">THE RELEVANT INDEX CONTENT</span>
          <h2 className="text-3xl sm:text-4 text-white font-display font-black leading-none">
            Internship Training Modules
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light font-sans">
            Review the granular chapter headings. Learn digital acquisition rules, AI-powered GEO citation matrices, social campaign layouts, and analytical logs diagnostics.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-3">
            {trainingModules.map((mod, mIdx) => {
              const isExpanded = expandedModule === mIdx;
              return (
                <div 
                  key={mIdx}
                  className="bg-brand-navy/60 border border-slate-850 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedModule(isExpanded ? null : mIdx)}
                    className="w-full p-5 text-left flex justify-between items-center hover:bg-brand-navy/80 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-white font-display">
                      {mod.title}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-900/80 bg-slate-950/40"
                      >
                        <div className="p-5 pl-7 space-y-3">
                          {mod.topics.map((topic, tIdx) => (
                            <div key={tIdx} className="flex gap-2.5 items-start text-xs text-slate-300">
                              <span className="h-5 w-5 bg-brand-indigo/10 text-brand-indigo text-[10px] font-mono border border-brand-indigo/10 rounded flex items-center justify-center shrink-0">
                                {tIdx + 1}
                              </span>
                              <p className="font-light leading-relaxed mt-0.5">{topic}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4 bg-slate-950 border border-slate-850 p-6 rounded-3xl space-y-4">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black pb-2 border-b border-slate-900">
              ACCUMULATED TRAINING OUTCOME
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              By covering these modules, our graduates build an elite, active capability portfolio demonstrating solid digital skills value.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Modules count:</span>
                <span className="text-white font-semibold font-mono">7 Full Areas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Weekly audits:</span>
                <span className="text-white font-semibold font-mono">Yes, 12 Iterations</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE TOOLS GRID SECTION */}
      <section className="bg-brand-navy/60 border-y border-slate-900 text-left py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider block">THE OPERATOR’S STACK</span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-tight">
                Industry Tools You Will Work With
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-400 leading-relaxed font-light">
                Direct client tasks require direct technical solutions. You will receive active sandbox login permissions to audit sites, design schedules, monitor backlinks, and compile organic target charts.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3.5">
                {tools.map((t) => (
                  <div 
                    key={t}
                    className="bg-slate-950 hover:bg-slate-900 border border-slate-850 px-5 py-3 rounded-xl flex items-center gap-2.5 transition select-none group"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-indigo group-hover:scale-125 transition" />
                    <span className="text-xs text-slate-200 font-bold font-mono">{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LIVE PROJECT EXPERIENCE AREA */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 text-left z-10 relative">
        <div className="bg-gradient-to-br from-[#0c121e] via-[#05070a] to-[#0c121e] rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-20 h-40 w-40 bg-brand-emerald/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full text-[10px] font-black uppercase tracking-wider">
                ● PRACTICAL LEARNING DIRECT
              </span>
              
              <h2 className="text-2.5xl sm:text-4.5xl font-black text-white font-display leading-tight">
                Work on Real Client Projects
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-400 leading-relaxed font-light">
                We eliminate synthetic scenario homework logs. Interns participate directly in the SEO crawls diagnostic review files, keyword prioritization grids, and live blog metadata formatting matrices for our global clientele.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2.5">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                  <p className="text-xs font-bold text-white leading-none">SEO optimization</p>
                  <p className="text-[10px] text-slate-500 mt-1">Direct code layouts</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                  <p className="text-xs font-bold text-white leading-none">Social media campaigns</p>
                  <p className="text-[10px] text-slate-500 mt-1">Calendar drafting</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                  <p className="text-xs font-bold text-white leading-none">Content projects</p>
                  <p className="text-[10px] text-slate-500 mt-1">Semantic keyword tools</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                  <p className="text-xs font-bold text-white leading-none">Google Ads tasks</p>
                  <p className="text-[10px] text-slate-500 mt-1">Target matrices planning</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                  <p className="text-xs font-bold text-white leading-none">Website speed metrics</p>
                  <p className="text-[10px] text-slate-500 mt-1">Page speed audits</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                  <p className="text-xs font-bold text-white leading-none">AI SEO optimization</p>
                  <p className="text-[10px] text-slate-500 mt-1">GEO citation checks</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950 border border-slate-850 p-6 rounded-2xl relative select-none">
              <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold mb-3">Live Stream Tracking Code</span>
              
              <div className="font-mono text-[10.5px] text-slate-400 space-y-1.5 bg-black/60 p-4 rounded-xl border border-slate-900 leading-normal">
                <p className="text-brand-emerald">{"// Fetching Search Ranking Logs"}</p>
                <p>{"GET /api/serp/akgls-client-4"}</p>
                <p className="text-brand-indigo">{"Response: 200 OK"}</p>
                <p>{"Keyword 'GEO Consultant' ranking: #1"}</p>
                <p>{"SGE Citation sources: [FOUND IN RAG]"}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATION & CAREER SUPPORT */}
      <section className="bg-brand-navy/40 border-y border-slate-900 py-16 md:py-20 text-left relative z-10">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative select-none">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 h-2 bg-gradient-to-r from-brand-indigo via-brand-teal to-brand-emerald" style={{ width: "100%" }} />
                
                <div className="flex justify-between items-center text-xs text-slate-500 pt-2 font-mono">
                  <span>AKGLS VERIFIER CERTIFICATE</span>
                  <span>ID: AK_2026_901</span>
                </div>

                <div className="py-6 text-center space-y-2">
                  <Award className="w-12 h-12 text-brand-emerald mx-auto animate-pulse" />
                  <h4 className="text-lg font-black font-display text-white">Certificate of Digital Marketing Proficiency</h4>
                  <p className="text-[11px] text-slate-500">Issued directly to accredited program graduates</p>
                </div>

                <div className="border-t border-slate-900 pt-3 flex justify-between items-center">
                  <div className="text-[10px] text-slate-500">
                    <span className="block">Instructor Signature</span>
                    <span className="block font-bold text-white mt-0.5">Amrish Singh, CEO</span>
                  </div>
                  <span className="text-[10px] bg-brand-emerald/10 text-brand-emerald px-2 py-0.5 rounded border border-brand-emerald/20">VERIFIED</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-emerald uppercase tracking-wider block">THE GRADUATION PACKAGE</span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-tight">
                Internship Certificate & Career Support
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-400 leading-relaxed font-light">
                Securing digital marketing job positions requires proof of capability. We optimize our internship exit workflow to guarantee every candidate leaves with solid credentials.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                {[
                  "Official Internship Completion Certificate",
                  "Detailed Clinical Performance Evaluation metrics",
                  "Dynamic CV & Resume Optimization guidance",
                  "LinkedIn Profile Audit & Optimization setups",
                  "Expert Mock Interview preps for agency positions",
                  "Personalized Recommendation Letter (performance based)"
                ].map((crit, cIdx) => (
                  <div key={cIdx} className="flex gap-2.5 items-start text-xs text-slate-300">
                    <span className="h-5 w-5 bg-brand-indigo/10 text-brand-indigo rounded flex items-center justify-center text-[10.5px] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="font-light leading-relaxed">{crit}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ELIGIBILITY & MODES GRIDS */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Eligibility block (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider block">QUALIFICATION CRITERIA</span>
            <h2 className="text-2.5xl sm:text-3.5xl font-black text-white font-display leading-tight">
              Who Can Apply?
            </h2>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We look for analytical thinkers who are curious about how systems indexing arrays work. Our basic program has zero restricted educational barrier.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Students", desc: "Currently enrolled in any college or bachelor's parameters." },
                { title: "Freshers", desc: "Graduates seeking immediate career building blocks." },
                { title: "Graduates", desc: "All educational streams are welcomed to audit." },
                { title: "Marketing Heads", desc: "Professionals transitioning roles to SEO spaces." },
                { title: "Freelancers", desc: "Looking to acquire core programmatic SEO methodologies." },
                { title: "Career Switchers", desc: "Transitioning into modern marketing arrays seamlessly." }
              ].map((cand, idx) => (
                <div key={idx} className="bg-brand-navy p-4 rounded-xl border border-slate-850">
                  <h4 className="text-xs font-extrabold text-white font-display">{cand.title}</h4>
                  <p className="text-[10.5px] text-slate-400 font-light mt-1 leading-normal">{cand.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modes of Internship available (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider block">PRACTICAL SETUP OPTIONS</span>
            <h2 className="text-2.5xl sm:text-3.5xl font-black text-white font-display leading-tight">
              Internship Modes Available
            </h2>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              AKGLS Group is modeled around remote operations. We support highly scalable scheduling configurations representing modern remote-work teams.
            </p>

            <div className="space-y-3.5 pt-1">
              {[
                { title: "Online Internship", desc: "Work remotely from anywhere with weekly check-ins.", style: "border-brand-emerald/20 text-brand-emerald" },
                { title: "Offline Internship", desc: "Work directly inside our regional workspace office.", style: "border-brand-indigo/20 text-brand-indigo" },
                { title: "Hybrid Internship", desc: "A perfectly combined flexible scheduling arrangement.", style: "border-brand-purple/20 text-brand-purple" }
              ].map((mode, mIdx) => (
                <div 
                  key={mIdx} 
                  className="bg-brand-navy p-5 rounded-2xl border border-slate-850 flex justify-between items-center"
                >
                  <div className="space-y-1.5 text-left">
                    <span className="text-[10px] bg-slate-950 font-mono font-bold text-slate-500 py-0.5 px-2 rounded">
                      OPTION 0{mIdx + 1}
                    </span>
                    <h3 className="text-sm font-extrabold text-white font-display">{mode.title}</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{mode.desc}</p>
                  </div>

                  <span className={`text-[10px] font-mono font-extrabold tracking-wider border rounded-full px-3 py-1 bg-slate-950/40 uppercase whitespace-nowrap ${mode.style}`}>
                    Available
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* DURATION & TRAINING OPTION TABLE */}
      <section className="bg-brand-navy/60 border-y border-slate-900 py-16 text-left relative z-10">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider block">THE CAMPAIGNS PARAMETERS</span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-tight">
                Internship Duration & Training Options
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-400 leading-relaxed font-light">
                Select your timeline investment depth. Advanced plans provide comprehensive portfolios ready for any digital career path.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-x-auto rounded-2xl border border-slate-850">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-950/80 text-slate-400 font-mono text-[10.5px]">
                      <th className="p-4 border-b border-slate-800">PROGRAM LEVEL</th>
                      <th className="p-4 border-b border-slate-800">DURATION</th>
                      <th className="p-4 border-b border-slate-800">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-850 hover:bg-slate-900/15">
                      <td className="p-4 font-bold text-white">Basic Internship</td>
                      <td className="p-4 font-mono text-brand-indigo">1 Month</td>
                      <td className="p-4 text-slate-400">Fundamental training + hands-on tasks</td>
                    </tr>
                    <tr className="border-b border-slate-850 hover:bg-slate-900/15">
                      <td className="p-4 font-bold text-white">Professional Internship</td>
                      <td className="p-4 font-mono text-brand-emerald">3 Months</td>
                      <td className="p-4 text-slate-400">Advanced chapters + live projects tracking</td>
                    </tr>
                    <tr className="hover:bg-slate-900/15">
                      <td className="p-4 font-bold text-white">Advanced Internship</td>
                      <td className="p-4 font-mono text-brand-purple">6 Months</td>
                      <td className="p-4 text-slate-400">Total clinical audit accountability + performance rewards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAREER PATH CARDS */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 z-10 relative text-left">
        <header className="text-center max-w-2xl mx-auto space-y-3.5 mb-14">
          <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider block">THE EXIT DESTINATIONS</span>
          <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-none">
            Career Opportunities After Internship
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            Our program graduates exit with strong capabilities to immediately pursue lucrative positions inside technical departments.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "SEO Executive", desc: "Audit parameters, keywords alignment maps." },
            { title: "Digital Marketing Exec", desc: "Multi-channel schedules orchestration." },
            { title: "AI SEO Specialist", desc: "Generative SGE citation engineering." },
            { title: "Content Writer", desc: "Organic entity density copyrighting." },
            { title: "Social Media Executive", desc: "Engagement trackers and Reels." },
            { title: "PPC Executive", desc: "Pay per click calculations." },
            { title: "WordPress Developer", desc: "Performance layouts with Elementor." },
            { title: "Marketing Analyst", desc: "Statistical logs validation schemas." }
          ].map((op, idx) => (
            <div 
              key={idx}
              className="bg-brand-navy border border-slate-850 p-5 rounded-2xl hover:border-slate-800 transition"
            >
              <div className="text-[10px] font-mono text-brand-indigo font-bold pb-2 border-b border-slate-900 uppercase">
                Path 0{idx + 1}
              </div>
              <h3 className="text-sm font-extrabold text-white font-display mt-3">{op.title}</h3>
              <p className="text-[10.5px] text-slate-450 font-light mt-1.5 leading-normal">{op.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20 text-left border-y border-slate-900 bg-[#070b13] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-brand-indigo uppercase tracking-wider block">ALUMNI SUCCESS STORIES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display leading-tight">
              What Our Interns Say
            </h2>
            <p className="text-xs text-slate-450 leading-relaxed font-light">
              We track real exits with clear placement outcomes. See how our clinical models help students acquire verified positions.
            </p>

            <div className="flex gap-2.5 pt-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 w-8 rounded-full transition-all ${activeTestimonial === idx ? 'bg-brand-indigo' : 'bg-slate-800'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-brand-navy border border-slate-850 p-6 sm:p-10 rounded-3xl relative overflow-hidden">
            <span className="text-4xl font-serif text-brand-indigo/20 absolute top-4 left-6 select-none">“</span>
            
            <div className="space-y-6 relative z-10">
              <p className="text-xs sm:text-sm text-slate-300 italic font-light leading-relaxed">
                {testimonials[activeTestimonial].text}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-slate-900 flex-wrap gap-2">
                <div className="text-xs">
                  <span className="block font-bold text-white">{testimonials[activeTestimonial].name}</span>
                  <span className="block text-slate-500 mt-1">{testimonials[activeTestimonial].role}</span>
                </div>

                <span className="text-[10.5px] bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-3 py-1 rounded font-mono font-bold">
                  {testimonials[activeTestimonial].stat}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 z-10 relative text-left">
        <header className="max-w-2xl space-y-3.5 mb-14">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider block">ANSWERS TO OBSTACLES</span>
          <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-none">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            Have queries on stipend models, tools checkouts, scheduling criteria or final recommendation reviews? We resolve common questions here.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, fIdx) => {
              const isExpanded = expandedFaq === fIdx;
              return (
                <div 
                  key={fIdx}
                  className="bg-brand-navy border border-slate-850 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isExpanded ? null : fIdx)}
                    className="w-full p-4.5 sm:p-5 text-left flex justify-between items-center hover:bg-brand-navy/90 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-extrabold text-white font-display pr-4">
                      {faq.q}
                    </span>
                    <span className="h-5 w-5 rounded-full bg-slate-950/80 border border-slate-850 flex items-center justify-center shrink-0">
                      {isExpanded ? <Minus className="w-3.5 h-3.5 text-brand-indigo" /> : <Plus className="w-3.5 h-3.5 text-slate-400" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-900/60 bg-slate-950/40"
                      >
                        <p className="p-5 text-xs sm:text-[13px] text-slate-400 font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4 bg-slate-950 border border-slate-850 p-6 rounded-3xl space-y-4">
            <span className="text-[10px] font-mono text-brand-emerald font-bold block uppercase tracking-wider">SUPPORT DIRECT DIRECTORY</span>
            <h4 className="text-sm font-extrabold text-white font-display">Still have questions?</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Connect directly with our counselor line to secure prompt responses concerning program tracks.
            </p>
            <a 
              href="mailto:amrish.singh01@gmail.com?subject=AKGLS Internship Inquiry"
              className="w-full bg-slate-900 hover:bg-slate-850 text-slate-300 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition border border-slate-800 flex items-center justify-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-brand-indigo" />
              <span>Inquire via Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* DYNAMIC COMPREHENSIVE FORM SECTION */}
      <section 
        id="application-form-section"
        className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20 relative z-10 text-left border-t border-slate-900 bg-brand-navy/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-indigo/10 border border-brand-indigo/15 text-brand-indigo rounded-full text-[10px] font-mono font-bold tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5" /> SECURE APPLICANT PROCESS
            </span>
            
            <h2 className="text-3xl sm:text-4.5xl font-black text-white font-display leading-tight">
              Apply for Internship Program
            </h2>
            <p className="text-xs sm:text-[13.5px] text-slate-400 leading-relaxed font-light">
              Please declare your educational status and preferred domain tracks below. Our operations evaluation committee reviews submissions within 48 business hours.
            </p>

            <div className="p-5 bg-slate-950 border border-slate-850 rounded-2xl space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <span className="text-brand-emerald">✓</span>
                <p className="font-light">Drag-and-drop your custom PDF resume securely.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-brand-emerald">✓</span>
                <p className="font-light">Specify Preferred scheduling modes carefully.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0c121e]/90 border border-slate-800 rounded-3.5xl p-6 sm:p-10 shadow-2xl relative">
              <div className="absolute top-0 right-10 h-32 w-32 bg-brand-indigo/5 blur-[80px] rounded-full pointer-events-none" />
              
              {!formSuccess ? (
                <form onSubmit={handleApplySubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.doe@university.edu"
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        College / University *
                      </label>
                      <input
                        type="text"
                        required
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        placeholder="State Technical University"
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Course / Qualification *
                      </label>
                      <input
                        type="text"
                        required
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="B.Tech Computer Science / MBA Marketing"
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Interested Internship Domain *
                      </label>
                      <select
                        value={selectedDomain}
                        onChange={(e) => setSelectedDomain(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl px-4 py-3 text-xs text-slate-350 outline-none transition font-bold cursor-pointer"
                      >
                        <option value="seo">SEO Internship</option>
                        <option value="ai-seo">AI SEO & GEO Internship</option>
                        <option value="smm">Social Media Marketing Internship</option>
                        <option value="google-ads">Google Ads Internship</option>
                        <option value="content-writing">Content Writing Internship</option>
                        <option value="wordpress">WordPress Development Internship</option>
                        <option value="graphic-design">Graphic Design Internship</option>
                        <option value="full-marketing">Full Digital Marketing Internship</option>
                      </select>
                    </div>
                  </div>

                  {/* PREFERRED MODE RADIO PANEL */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Preferred Internship Mode *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['online', 'offline', 'hybrid'].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setInternshipMode(mode)}
                          className={`p-3 text-center text-xs font-bold border rounded-xl transition ${
                            internshipMode === mode 
                            ? 'bg-brand-indigo/10 border-brand-indigo text-white' 
                            : 'bg-slate-950 border-slate-850 text-slate-500 hover:text-white'
                          }`}
                        >
                          <span className="capitalize">{mode}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* USABILITY DRAG-AND-DROP FILE UPLOAD COMPONENT */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Resume PDF Upload *
                    </label>
                    
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center transition cursor-pointer flex flex-col items-center justify-center space-y-2 select-none ${
                        isDragOver 
                        ? 'border-brand-indigo bg-brand-indigo/5' 
                        : resumeFile 
                        ? 'border-brand-emerald/40 bg-brand-emerald/5' 
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950'
                      }`}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />

                      {resumeFile ? (
                        <>
                          <div className="h-10 w-10 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-lg flex items-center justify-center">
                            <CheckSquare className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="block text-xs font-mono font-bold text-slate-200">{resumeFile.name}</span>
                            <span className="block text-[10px] text-slate-550 mt-1">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB • Custom PDF Uploaded</span>
                          </div>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveFile();
                            }}
                            className="text-[10px] bg-slate-900 hover:bg-slate-850 hover:text-red-400 border border-slate-800 text-slate-400 px-3 py-1 rounded"
                          >
                            Remove file
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="h-10 w-10 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo rounded-lg flex items-center justify-center">
                            <Upload className="w-5 h-5 animate-bounce" />
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-slate-350">Drag and drop your PDF resume here</span>
                            <span className="block text-[10px] text-slate-600 mt-1">or click to browse local files securely</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full bg-brand-indigo hover:bg-brand-indigo/90 disabled:bg-slate-800 text-white py-4 rounded-xl font-black text-xs uppercase tracking-wider transition shadow-lg shadow-brand-indigo/10 hover:scale-101 flex items-center justify-center gap-2"
                  >
                    {formSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Verifying Documents parameters...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Apply Now</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-5">
                  <div className="h-16 w-16 bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <CheckSquare className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-display text-white">Application Successfully Submitted!</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Thank you for applying, <strong>{fullName}</strong>. We have securely saved your credentials and resume. Our review board will verify parameters and email you shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                        setFormSuccess(false);
                        setFullName('');
                        setEmail('');
                        setCollege('');
                        setQualification('');
                        setPhoneNumber('');
                        setResumeFile(null);
                    }}
                    className="text-xs text-brand-indigo font-bold hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* COMPACT SUGGESTED ARTICLES GRID */}
      <section className="max-w-7xl mx-auto w-full px-6 py-12 text-left z-10 relative">
        <h4 className="text-[10px] font-mono text-slate-550 block font-bold uppercase tracking-wider mb-5 pb-2 border-b border-slate-900">
          SUGGESTED INDUSTRY INSIGHTS ARTICLES
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "SGE & conversational SEO strategies", tag: "AI CAREERS" },
            { title: "Building trust indicators on corporate sites", tag: "TECHNICAL AUDIT" },
            { title: "Formulating custom JSON schema scripts", tag: "SEO BLUEPRINTS" }
          ].map((art, idx) => (
            <div 
              key={idx}
              className="bg-brand-navy border border-slate-850 p-4.5 rounded-xl hover:border-slate-800 transition cursor-pointer"
            >
              <span className="text-[8px] font-mono bg-slate-950 text-slate-500 py-0.5 px-2 rounded font-bold uppercase">
                {art.tag}
              </span>
              <h4 className="text-xs font-bold text-white mt-2.5 font-display line-clamp-2">{art.title}</h4>
              <span className="text-[10px] font-mono text-brand-indigo mt-3 inline-flex items-center gap-1">
                <span>Read paper</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION HERO */}
      <section className="bg-gradient-to-t from-brand-indigo/10 to-transparent py-16 md:py-20 text-center relative z-10 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-none">
            Ready to Start Your Digital Marketing Career?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            Join AKGLS Group Internship Program and gain practical experience with modern SEO, AI SEO, marketing, and business growth strategies. Secure your digital accreditation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#application-form-section"
              className="bg-brand-indigo hover:bg-brand-indigo/90 text-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition shadow-lg shadow-brand-indigo/20 scale-100 hover:scale-101"
            >
              Apply for Internship
            </a>
            
            <a 
              href="mailto:amrish.singh01@gmail.com?subject=AKGLS Career Guidance Request"
              className="bg-slate-950 hover:bg-slate-900 text-slate-350 border border-slate-850 hover:border-slate-750 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition"
            >
              Talk to Career Counselor
            </a>
          </div>
        </div>
      </section>

      {/* BROCHURE POPUP BARRIER MODAL */}
      <AnimatePresence>
        {brochureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-950 border border-slate-850 rounded-2.5xl max-w-md w-full p-6 text-left shadow-2xl relative"
            >
              <button 
                onClick={() => setBrochureModal(false)}
                className="absolute right-4.5 top-4.5 text-slate-500 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 pt-2">
                <div className="h-12 w-12 bg-brand-indigo/10 border border-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo">
                  <Download className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-black font-display text-white">
                    Request Internship Brochure
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Enter your email to receive our detailed curriculum syllabus, stipend guidelines, and accredited placement outcomes PDF directly to your inbox.
                  </p>
                </div>

                {!brochureSuccess ? (
                  <form onSubmit={handleBrochureRequest} className="space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={brochureEmail}
                      onChange={(e) => setBrochureEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-850 focus:border-brand-indigo rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                    />

                    <button
                      type="submit"
                      className="w-full bg-brand-indigo hover:bg-brand-indigo/90 text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider transition"
                    >
                      Request Brochure PDF
                    </button>
                  </form>
                ) : (
                  <div className="bg-brand-emerald/10 border border-brand-emerald/20 p-4 rounded-xl text-center">
                    <span className="block text-xs font-bold text-brand-emerald animate-pulse">✓ Email Dispatched Successfully!</span>
                    <span className="block text-[10px] text-slate-500 mt-1">Please verify your inbox folder shortly.</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

import { useState, useEffect, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  MapPin, Phone, Mail, Award, CheckCircle, Database, LineChart, 
  ShieldCheck, AlertTriangle, ChevronRight, GraduationCap, 
  FileCheck, Star, Users, Briefcase
} from 'lucide-react';
import Header from './components/Header';
import SmartSearch from './components/SmartSearch';
import ServiceQuiz from './components/ServiceQuiz';
import RoiCalculator from './components/RoiCalculator';
import ContentAnalyzer from './components/ContentAnalyzer';
import Chatbox from './components/Chatbox';
import GeoServicesPage from './components/GeoServicesPage';
import SeoServicesPage from './components/SeoServicesPage';
import TechnicalSeoPage from './components/TechnicalSeoPage';
import AeoServicesPage from './components/AeoServicesPage';
import AiSeoServicesPage from './components/AiSeoServicesPage';
import GoogleAdsServicesPage from './components/GoogleAdsServicesPage';
import WebDesignServicesPage from './components/WebDesignServicesPage';
import WordPressServicesPage from './components/WordPressServicesPage';
import { defaultCaseStudies } from './data';
import { CaseStudy } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'geo' | 'seo' | 'technical-seo' | 'aeo' | 'ai-seo' | 'google-ads' | 'web-design' | 'wordpress'>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  // Home states
  const [simulationUrl, setSimulationUrl] = useState('');
  const [simLogs, setSimLogs] = useState<string[]>(['// Console standing by. Submit domain parameters to scan...']);
  const [isSimulating, setIsSimulating] = useState(false);

  // Tab filters for Portfolio Grid
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'seo' | 'ppc' | 'webdev' | 'aiseo'>('all');

  // Interactive Pricing retaner vs revenue share toggle
  const [pricingMode, setPricingMode] = useState<'retainer' | 'revenue'>('retainer');

  // Proposal lead form states
  const [proposalStep, setProposalStep] = useState(1);
  const [proposalForm, setProposalForm] = useState({
    companyName: '',
    companyUrl: '',
    budget: '',
    contactName: '',
    contactEmail: '',
    notes: '',
    interestedChannels: {
      seo: false,
      aiseo: false,
      ppc: false
    }
  });
  const [proposalSubmitting, setProposalSubmitting] = useState(false);
  const [proposalSuccess, setProposalSuccess] = useState(false);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Capabilities exploration live filter keywords
  const [servicesSearchQuery, setServicesSearchQuery] = useState('');

  // Keyboard listener for command search modal
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  // Hash route router trigger for dedicated subpages
  useEffect(() => {
    const handleHashRouter = () => {
      const hash = window.location.hash;
      if (hash === '#geo-services') {
        setCurrentPage('geo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#seo-services') {
        setCurrentPage('seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#technical-seo' || hash === '#technical-seo-services') {
        setCurrentPage('technical-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#aeo-services' || hash === '#aeo' || hash === '#ai-answer-optimization') {
        setCurrentPage('aeo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#ai-seo-services' || hash === '#ai-seo' || hash === '#ai-powered-seo-services' || hash === '#ai-search-optimization-services') {
        setCurrentPage('ai-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#google-ads-services' || hash === '#google-ads' || hash === '#google-ads-agency' || hash === '#ppc-management-services' || hash === '#google-ads-management-company') {
        setCurrentPage('google-ads');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#web-design-services' || hash === '#web-design' || hash === '#website-design-company' || hash === '#professional-web-design-services' || hash === '#ui-ux-web-design-agency') {
        setCurrentPage('web-design');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#wordpress-development-services' || hash === '#wordpress-development-company' || hash === '#wordpress-website-development' || hash === '#wordpress-agency' || hash === '#wordpress' || hash === '#wordpress-development') {
        setCurrentPage('wordpress');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
      }
    };
    handleHashRouter();
    window.addEventListener('hashchange', handleHashRouter);
    return () => window.removeEventListener('hashchange', handleHashRouter);
  }, []);

  // Generative Engine mock scanner log runner
  const runSimulator = (e: FormEvent) => {
    e.preventDefault();
    if (!simulationUrl.trim()) return;

    setIsSimulating(true);
    setSimLogs([`Initializing connection to Perplexity Citations API...`]);

    const logs = [
      `Attempting handshake with ChatGPT Search context indexing arrays...`,
      `Scanning Google Gemini entity references for "${simulationUrl}"...`,
      `Checking Schema markups: STATUS_MISSING [JSON-LD Graphs not found]`,
      `Checking local backlink catalog relevance: STATUS_NEUTRAL_WEIGHT`,
      `Scanning context window parameters: NO MATCHING TOPICAL CHUNK`,
      `Analyzing entity references: BRAND CITATION RATIO IS NEUTRAL`,
      `Suggested Actions: Inject RAG relationship databases via AKGLS Pro SEO.`
    ];

    let count = 0;
    const interval = setInterval(() => {
      if (count < logs.length) {
        setSimLogs(prev => [...prev, logs[count]]);
        count++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 900);
  };

  // Proposal wizard handlers
  const handleProposalNext = () => {
    if (proposalStep === 1) {
      if (!proposalForm.companyName || !proposalForm.companyUrl || !proposalForm.budget) {
        alert("Please specify Company, URL, and Budget brackets first.");
        return;
      }
      setProposalStep(2);
    } else if (proposalStep === 2) {
      const selected = Object.values(proposalForm.interestedChannels).some(Boolean);
      if (!selected) {
        alert("Please pick at least one digital marketing channel to analyze.");
        return;
      }
      setProposalStep(3);
    }
  };

  const submitProposal = (e: FormEvent) => {
    e.preventDefault();
    if (!proposalForm.contactName || !proposalForm.contactEmail) return;

    setProposalSubmitting(true);
    setTimeout(() => {
      setProposalSuccess(true);
      setProposalSubmitting(false);
    }, 1500);
  };

  const resetProposalForm = () => {
    setProposalForm({
      companyName: '',
      companyUrl: '',
      budget: '',
      contactName: '',
      contactEmail: '',
      notes: '',
      interestedChannels: {
        seo: false,
        aiseo: false,
        ppc: false
      }
    });
    setProposalStep(1);
    setProposalSuccess(false);
  };

  const handleDownloadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (modalEmail) {
      setModalSuccess(true);
      setTimeout(() => {
        setDownloadModalOpen(false);
        setModalSuccess(false);
        setModalEmail('');
      }, 2500);
    }
  };

  // Filter case studies lists
  const filteredCases = portfolioFilter === 'all' 
    ? defaultCaseStudies 
    : defaultCaseStudies.filter(c => c.category === portfolioFilter);

  const PAGE_METADATA = {
    home: {
      title: "AKGLS Group | AI SEO, GEO & Performance Marketing Agency",
      description: "Deploy SEO-friendly structure markups with real-time Generative Engine Optimization (GEO) to citation-proof your business across ChatGPT, Perplexity, Gemini, and Google Search.",
      canonical: "https://akgls.group/"
    },
    geo: {
      title: "GEO (Generative Engine Optimization) Services | AKGLS Group",
      description: "Optimize your brand for Next-Gen LLM retrieval, conversational AI filters, Perplexity Citations, and ChatGPT Search results with our proven expertise.",
      canonical: "https://akgls.group/#geo-services"
    },
    seo: {
      title: "Organic Search Optimization & SEO Services | AKGLS Group",
      description: "Drive massive organic keyword visibility and high-intent customer traffic with premium full-funnel, semantic content structures and modern search practices.",
      canonical: "https://akgls.group/#seo-services"
    },
    'technical-seo': {
      title: "Technical SEO Optimization, Schema & Infrastructure | AKGLS Group",
      description: "Maximize crawl budget, speed, structural JSON-LD schemas, and indexing hierarchies so both human users and AI web crawlers browse flawlessly.",
      canonical: "https://akgls.group/#technical-seo-services"
    },
    aeo: {
      title: "AEO (Answer Engine Optimization) & RAG Systems | AKGLS Group",
      description: "Align entity properties and structure conversational answers to trigger direct summary panel responses inside Google's AI Overviews and top retrievers.",
      canonical: "https://akgls.group/#aeo-services"
    },
    'ai-seo': {
      title: "AI-Powered SEO & LLM Context Optimization | AKGLS Group",
      description: "Modernize your visibility pipelines with natural language semantic processing, dynamic entity graphs, and indexing nodes optimized for Claude, Gemini, and GPT-4.",
      canonical: "https://akgls.group/#ai-seo-services"
    },
    'google-ads': {
      title: "PPC Management & High-ROI Google Ads Services | AKGLS Group",
      description: "Secure dominant top-of-page positions and scale qualified conversions across search, shopping grids, display networks, and Performance Max channels.",
      canonical: "https://akgls.group/#google-ads-services"
    },
    'web-design': {
      title: "Professional Web Web Design & High-Converting UX/UI | AKGLS Group",
      description: "Build gorgeous, loading-fast custom websites crafted with optimal UX/UI standards. We supply clear structural nodes to search indexers and convert visitors.",
      canonical: "https://akgls.group/#web-design-services"
    },
    wordpress: {
      title: "WordPress Development Services & Custom Engineering | AKGLS Group",
      description: "Maximize WordPress speed, security, and schema scalability. We craft lightweight, database optimized, responsive architectures for modern search optimization.",
      canonical: "https://akgls.group/#wordpress-development-services"
    }
  };

  const currentMeta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;

  return (
    <div className="bg-[#05070a] text-slate-300 font-sans selection:bg-brand-indigo selection:text-white min-h-screen flex flex-col justify-between overflow-x-hidden leading-relaxed pb-16 lg:pb-0">
      
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <link rel="canonical" href={currentMeta.canonical} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
      </Helmet>
      {/* GLOBAL SERVICES HEADER COMPONENTS */}
      <Header 
        onSearchOpen={() => setIsSearchOpen(true)}
        openQuiz={() => {
          const quizEl = document.querySelector('#audit-quiz');
          quizEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        openProposal={() => {
          const formEl = document.querySelector('#audit-form');
          formEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        openDownloadModal={() => setDownloadModalOpen(true)}
      />

      {currentPage === 'geo' ? (
        <GeoServicesPage 
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#geo-lead-portal') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'seo' ? (
        <SeoServicesPage 
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
        />
      ) : currentPage === 'technical-seo' ? (
        <TechnicalSeoPage 
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-technical-audit-portal') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'aeo' ? (
        <AeoServicesPage 
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-aeo-audit-portal') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'ai-seo' ? (
        <AiSeoServicesPage
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-ai-seo-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'google-ads' ? (
        <GoogleAdsServicesPage
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-ads-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'web-design' ? (
        <WebDesignServicesPage
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-website-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'wordpress' ? (
        <WordPressServicesPage
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-wordpress-consultation-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : (
        <>
          {/* CORE HERO SECTION + LIVE SIMULATOR MONITOR BOARD */}
          <header className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#05070a] text-white overflow-hidden text-left">
        {/* Decorative ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-indigo/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info segment */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-display">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              <span>Enterprise organic ranking & geo systems</span>
            </div>

            <h1 className="text-4.5xl sm:text-5xl md:text-5.5xl lg:text-6xl font-extrabold font-display leading-[1.08] tracking-tight">
              Traditional Search is Evolving. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                We Engineer AI SEO & Performance Marketing.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Over 50% of high-intent search user journeys now bypass basic ranking lists to converse with generative AI tools. AKGLS Group deploys technical organic schema markup structures with real-time **Generative Engine Optimization (GEO)** to citation-proof your business across Perplexity, ChatGPT Search, Gemini, and Google.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a 
                href="#audit-form"
                className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Request Strategy Audit <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#capabilities-explorer"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4 text-brand-teal animate-pulse" /> Explore 140+ Services
              </a>
            </div>

            {/* Core credentials ticker */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg text-left">
              <div>
                <div className="text-2xl font-black text-white font-display">250%+</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                  Avg Organic Lift
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-display">48%</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                  Lower cost per acquisition
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-display">98.2%</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                  Client retention rate
                </div>
              </div>
            </div>
          </div>

          {/* Right interactive Evaluator console card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-950/95 rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-5 text-left relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  generative engine evaluator
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-extrabold text-white font-display">
                    Analyze Your Brand Recommendation Weight
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                    Test your website's indexing relevance across modern conversational AI LLM retrieval layers.
                  </p>
                </div>

                <form onSubmit={runSimulator} className="space-y-2">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 text-xs font-mono select-none">
                      https://
                    </span>
                    <input 
                      type="text" 
                      required
                      placeholder="yourcompany.com"
                      value={simulationUrl}
                      onChange={(e) => setSimulationUrl(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-brand-indigo focus:ring-1 focus:ring-indigo-500/30 rounded-xl py-3 pl-16 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none font-medium"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSimulating}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow DISABLED:opacity-60 cursor-pointer"
                  >
                    {isSimulating ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin text-brand-teal" /> Connecting AI Indices...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-brand-teal" /> Run Simulated Citation Check
                      </>
                    )}
                  </button>
                </form>

                {/* Simulated outputs window */}
                <div className="bg-black/90 rounded-xl p-3 border border-slate-850 h-36 overflow-y-auto space-y-1.5 scrollbar-none font-mono text-[10.5px] leading-normal select-none">
                  {simLogs.map((log, idx) => (
                    <p 
                       key={idx} 
                      className={
                        log.startsWith('//') 
                          ? 'text-slate-500' 
                          : log.includes('MISSING') 
                            ? 'text-rose-400 font-bold' 
                            : log.includes('Actions') 
                              ? 'text-brand-teal font-extrabold' 
                              : 'text-slate-300'
                      }
                    >
                      {log}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* CREDENTIALS / PARTNER TICKER */}
      <section className="bg-[#0c121e]/40 border-y border-slate-800/60 py-6 select-none relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-2.5 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-display">
            integrating natively with leading digital growth channels & technical standard directories:
          </p>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap text-slate-500 hover:text-slate-400 font-display font-semibold text-xs tracking-wider uppercase">
            <span className="flex items-center gap-1.5">★ Google Premier Partner</span>
            <span className="flex items-center gap-1.5">★ Meta Business Partner</span>
            <span className="flex items-center gap-1.5">★ Shopify Plus Expert</span>
            <span className="flex items-center gap-1.5">★ Forbes Agency Council</span>
            <span className="flex items-center gap-1.5">★ HubSpot Diamond Agency</span>
            <span className="flex items-center gap-1.5">★ TechCrunch Featured</span>
            
            {/* Repeat loop */}
            <span className="flex items-center gap-1.5">★ Google Premier Partner</span>
            <span className="flex items-center gap-1.5">★ Meta Business Partner</span>
            <span className="flex items-center gap-1.5">★ Shopify Plus Expert</span>
            <span className="flex items-center gap-1.5">★ Forbes Agency Council</span>
            <span className="flex items-center gap-1.5">★ HubSpot Diamond Agency</span>
            <span className="flex items-center gap-1.5">★ TechCrunch Featured</span>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES EXPLORER SECTION */}
      <section id="capabilities-explorer" className="py-16 md:py-24 bg-[#05070a] scroll-mt-20 border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              CAPABILITIES DIRECTORY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white animate-fade-in">
              Explore Our Core Capabilities Directory
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We provide an unprecedented level of tactical execution across 14 master disciplines. Use the interactive finder below to query specific technical actions instantly.
            </p>

            {/* Keyword finder filter */}
            <div className="max-w-xl mx-auto pt-3 relative">
              <input 
                type="text" 
                placeholder="Query from 140+ capabilities (e.g. Technical SEO, GEO, AEO, PPC, Shopify CRO, ORM)..."
                value={servicesSearchQuery}
                onChange={(e) => setServicesSearchQuery(e.target.value)}
                className="w-full bg-[#0c121e] border border-slate-800 rounded-2xl py-4.5 pl-5 pr-12 text-xs text-slate-200 shadow-inner focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 placeholder-slate-500 font-medium"
              />
              <span className="absolute right-4 inset-y-0 flex items-center text-xs text-slate-500 font-bold">
                {servicesSearchQuery ? "Query Active" : "140+ Steps"}
              </span>
            </div>
          </div>

          {/* Capabilities grid blocks layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card block 1: SEO Services */}
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-indigo/35 transition-all rounded-3xl p-6 text-left hover:shadow-2xl hover:shadow-brand-indigo/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center font-bold">
                    SEO
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                    25 CORE ACTIONS
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white font-display">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Generate structural site directories, optimize internal linking architecture, and establish topical authority matching active user intents.
                </p>
                <div className="border-t border-slate-800/80 pt-3 space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> Technical site crawler analysis</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> Enterprise & Ecommerce SEO</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> International & Localized pack SEO</div>
                </div>
              </div>
              <div className="pt-5 border-t border-slate-800/80 mt-5 flex justify-between items-center text-[10px] font-bold text-slate-500 font-mono uppercase">
                <span>Enterprise protocol</span>
                <a href="#audit-form" className="text-brand-indigo hover:text-indigo-300 text-xs flex items-center font-bold font-display uppercase tracking-wider">Request Audit Slot →</a>
              </div>
            </div>

            {/* Card block 2: AI Optimization Services */}
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-purple/35 transition-all rounded-3xl p-6 text-left hover:shadow-2xl hover:shadow-brand-purple/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/15 text-brand-purple flex items-center justify-center font-bold">
                    AI
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                    13 SERVICES
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white font-display flex items-center gap-1.5">
                  AI Optimization (GEO & AEO) <span className="bg-brand-purple/10 text-brand-purple text-[8.5px] uppercase py-0.5 px-2 rounded font-mono font-bold">Trending</span>
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Restructure pricing relationships and semantic code templates so conversational LLMs index and recommend your brand to active queries.
                </p>
                <div className="border-t border-slate-800/80 pt-3 space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> Generative Engine Optimization (GEO)</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> Answer Engine Optimization (AEO)</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> RAG system relational markups</div>
                </div>
              </div>
              <div className="pt-5 border-t border-slate-800/80 mt-5 flex justify-between items-center text-[10px] font-bold text-slate-500 font-mono uppercase">
                <span>LLM entity rules</span>
                <a href="#audit-form" className="text-brand-indigo hover:text-indigo-300 text-xs flex items-center font-bold font-display uppercase tracking-wider">Request Audit Slot →</a>
              </div>
            </div>

            {/* Card block 3: Paid Ads (PPC) */}
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-teal/35 transition-all rounded-3xl p-6 text-left hover:shadow-2xl hover:shadow-brand-teal/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center font-bold">
                    PPC
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                    16 CAMPAIGN TYPES
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white font-display">
                  Paid Advertising (PPC)
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Lower overall customer acquisition costs through strategic search ads, negative keyword blacklists, and bid settings.
                </p>
                <div className="border-t border-slate-800/80 pt-3 space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> Google Search & Performance Max</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> Meta shopping ads structures</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold"><CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" /> B2B LinkedIn PPC lead models</div>
                </div>
              </div>
              <div className="pt-5 border-t border-slate-800/80 mt-5 flex justify-between items-center text-[10px] font-bold text-slate-500 font-mono uppercase">
                <span>SLA conversions</span>
                <a href="#audit-form" className="text-brand-indigo hover:text-indigo-300 text-xs flex items-center font-bold font-display uppercase tracking-wider">Request Audit Slot →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE DIAGNOSTIC ACCORDION / STRATEGY MATRIX */}
      <section id="audit-quiz" className="py-16 md:py-24 bg-[#0a0f1d] border-y border-slate-850/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              STRATEGY MATRIX
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-white">
              What is Your Primary Growth Bottleneck?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Take 30 seconds to answer our interactive diagnostic quiz below to pinpoint crawler or conversion bottlenecks and calculate tailored playbook solutions.
            </p>
          </div>

          <ServiceQuiz />

        </div>
      </section>

      {/* CORE SOLUTIONS SECTION / AI ADVANCED MASTERY */}
      <section id="ai-deepdive" className="py-20 md:py-28 bg-brand-navy text-white text-left relative overflow-hidden scroll-mt-20">
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info columns */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-teal bg-teal-950/40 border border-teal-850 rounded-full py-1.5 px-4 font-display inline-block">
              GENERATIVE SEARCH ENGINE MASTERY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight">
              Mastering AI Recommendation Algorithms Before Your Rivals Do
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              As classic indexes decline, conversational assistants synthesize and formulate recommended options based on highly dense sitemap assets. Our structured **Generative Engine Optimization (GEO)** mapping is built specifically to address entity relationships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold font-display text-brand-teal flex items-center gap-1.5">
                  <Database className="w-4 h-4" /> Relational metadata structures
                </h4>
                <p className="text-slate-400 text-xs font-light leading-normal">
                  Inject explicit JSON mappings detailing precise service attributes, parent entities, and geographic references.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold font-display text-brand-teal flex items-center gap-1.5">
                  <Bot className="w-4 h-4" /> Context window optimizations
                </h4>
                <p className="text-slate-400 text-xs font-light leading-normal">
                  Format textual copywriting so crawling crawlers extract comparison summaries clearly matching high intent prompts.
                </p>
              </div>
            </div>
          </div>

          {/* Right scores graphics visualization model */}
          <div className="lg:col-span-5 bg-white/5 border border-white/5 p-6 rounded-3xl backdrop-blur-md space-y-6">
            <h3 className="text-base font-extrabold font-display">
              LLM Context Index Readiness Rating
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>Entity Citation density</span>
                  <span className="text-brand-teal font-mono">92% (High)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-teal h-full w-[92%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>JSON-LD Relations index</span>
                  <span className="text-brand-purple font-mono">88% (Optimized)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-purple h-full w-[88%]" />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black/40 p-4 rounded-xl border border-white/5 text-[10.5px] font-mono text-slate-300">
                <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
                <span>SYSTEM NOTIFICATION: Relational properties active. Website validated as authority entity.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE PORTFOLIO & CASE STUDIES */}
      <section id="portfolio-gallery" className="py-20 md:py-28 bg-[#05070a] text-left scroll-mt-20 border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              AGENCY WORK & PROOFS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white animate-fade-in">
              Our Strategic Case Studies
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We focus on absolute ROI transparency. Filter below to explore how we've engineered traffic growth across technical sectors.
            </p>

            {/* Filter tags row */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-4">
              {[
                { filter: 'all', label: 'All Cases' },
                { filter: 'seo', label: 'Organic SEO' },
                { filter: 'ppc', label: 'Paid PPC Ads' },
                { filter: 'webdev', label: 'Web Development' },
                { filter: 'aiseo', label: 'AI SEO Solutions' }
              ].map((tab) => (
                <button 
                  key={tab.filter}
                  onClick={() => setPortfolioFilter(tab.filter as any)}
                  className={`px-4 py-2 rounded-lg text-[10.5px] font-black uppercase tracking-wider transition-all select-none cursor-pointer ${
                    portfolioFilter === tab.filter 
                      ? 'bg-brand-indigo text-white shadow-lg' 
                      : 'bg-[#0c121e] text-slate-400 hover:bg-slate-900 border border-slate-800/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid render portfolios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredCases.map((cs) => (
              <div 
                key={cs.id}
                className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 hover:border-brand-indigo/40 hover:shadow-2xl hover:shadow-brand-indigo/5 transition-all flex flex-col justify-between text-slate-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black text-brand-indigo uppercase tracking-wider bg-brand-indigo/15 border border-brand-indigo/20 py-0.5 px-2 rounded">
                      {cs.categoryLabel}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono font-extrabold uppercase">
                      Revenue impact
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold font-display text-white leading-snug animate-fade-in">
                    {cs.title}
                  </h3>

                  <div className="p-4 bg-[#05070a] border border-slate-800 rounded-2xl flex items-center justify-between text-left">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">
                        {cs.metrics.label}:
                      </span>
                      <strong className="text-base font-mono font-extrabold text-brand-emerald">
                        {cs.metrics.value}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-500 uppercase font-bold block">
                        Comparison:
                      </span>
                      <span className="text-xs font-mono text-slate-300 font-bold">
                        {cs.beforeAfter.before} → {cs.beforeAfter.after}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {cs.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>Secured: {cs.date}</span>
                  <a href="#audit-form" className="text-brand-teal font-extrabold hover:underline">
                    Download Strategy PDF →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LEADERSHIP PROFILE BOARD & CORE VALUES */}
      <section id="team-leadership" className="py-16 md:py-24 bg-[#0a0f1d] border-y border-slate-850/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              AGENCY LEADERSHIP & TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              Board & Core Strategists
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We consolidate experienced organic architects, developer engineers, and conversion copywriters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Amit K.", role: "Chief Growth Strategist & Founder", initial: "AK", desc: "Focuses on technical sitemaps, semantic indexing arrays, and enterprise project strategies." },
              { name: "Siddharth G.", role: "Head of Paid advertising", initial: "SG", desc: "Manages bid properties, coordinates display ads, and removes PPC budget waste." },
              { name: "Ria Malhotra", role: "UI/UX & custom Web Dev Lead", initial: "RM", desc: "Rebuilds checkout checkout templates to scale speeds and optimize conversions." },
              { name: "Aravind N.", role: "Senior Schema prompt engineer", initial: "AN", desc: "Coordinates dynamic schemas and evaluates prompt visibility ratios in generative networks." }
            ].map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 text-left hover:border-brand-indigo/40 hover:shadow-2xl hover:shadow-brand-indigo/5 transition-all flex flex-col justify-between text-slate-200"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-indigo/15 border border-brand-indigo/30 flex items-center justify-center font-bold text-lg text-brand-indigo font-display">
                    {member.initial}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-white font-display leading-none animate-fade-in">
                      {member.name}
                    </h4>
                    <span className="text-[9.5px] font-black uppercase text-brand-purple tracking-widest block font-mono">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE INVESTMENTS / FLEXIBLE PERFORMANCE STRUCTURES */}
      <section id="pricing-matrix" className="py-20 md:py-28 bg-[#05070a] scroll-mt-20 border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 animate-fade-in text-left">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              AGENCY PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              Flexible Performance Options
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Choose the operational scope that aligns with your scale targets. No hidden retainers.
            </p>

            {/* Performance Pricing Toggle Option */}
            <div className="inline-flex items-center gap-2 p-1.5 bg-[#0c121e] rounded-xl border border-slate-800 shadow mt-4 font-semibold select-none">
              <button 
                onClick={() => setPricingMode('retainer')}
                className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  pricingMode === 'retainer' ? 'bg-brand-indigo text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Standard Retainer
              </button>
              <button 
                onClick={() => setPricingMode('revenue')}
                className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  pricingMode === 'revenue' ? 'bg-brand-indigo text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Performance Revenue Share
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Plan 1 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 sm:p-8 border border-slate-850 flex flex-col justify-between text-slate-200">
              <div className="space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-[8.5px] bg-[#0a0f1d] border border-slate-800 text-indigo-400 font-mono font-bold uppercase py-0.5 px-2 rounded">
                    MID-STAGE GROWTH
                  </span>
                  <h4 className="text-lg font-black text-white font-display">
                    Scale Accelerator Plan
                  </h4>
                  <p className="text-slate-400 text-xs font-light max-w-xs leading-relaxed">
                    Improve keywords indexing range and manage targeted search ad structures.
                  </p>
                </div>

                <div className="border-y border-slate-800 py-3.5 text-left">
                  <div className="text-3.5xl font-mono font-black text-white animate-fade-in">
                    {pricingMode === 'retainer' ? '$3,500' : '2%' }
                    <span className="text-xs text-slate-500 font-medium">
                      {pricingMode === 'retainer' ? '/mo' : ' Rev Share' }
                    </span>
                  </div>
                  <span className="text-[9.5px] text-slate-500 font-bold block pt-1 font-mono uppercase">
                    {pricingMode === 'retainer' ? 'Requires 3 months initial checkpoint' : 'Subject to traffic verification' }
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-bold">
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Up to 50 targeted words tracked</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Technical speed diagnostics</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Looker visual dashboard reporting</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#audit-form"
                  className="w-full py-3 bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-xs text-center rounded-xl block shadow"
                >
                  Request Discovery Proposal
                </a>
              </div>
            </div>

            {/* Plan 2: FEATURED */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border-2 border-brand-indigo flex flex-col justify-between relative shadow-xl shadow-brand-indigo/5">
              <div className="absolute -top-3.5 left-1/2 -translate-x-[50%] bg-brand-indigo text-white text-[9px] tracking-widest font-black uppercase py-1 px-4 rounded-full shadow">
                MOST REQUESTED SLOT
              </div>

              <div className="space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-[8.5px] bg-[#0c121e] border border-slate-800 text-indigo-300 font-mono font-bold uppercase py-0.5 px-2 rounded">
                    ENTERPRISE SCALE
                  </span>
                  <h4 className="text-lg font-black text-white font-display">
                    Authority & AI SEO Suite
                  </h4>
                  <p className="text-slate-400 text-xs font-light max-w-xs leading-relaxed">
                    Complete keyword dominance matched to contextual AI search and schema mappings.
                  </p>
                </div>

                <div className="border-y border-white/5 py-3.5 text-left">
                  <div className="text-3.5xl font-mono font-black text-white animate-fade-in">
                    {pricingMode === 'retainer' ? '$6,500' : '4%' }
                    <span className="text-xs text-slate-500 font-medium">
                      {pricingMode === 'retainer' ? '/mo' : ' Rev Share' }
                    </span>
                  </div>
                  <span className="text-[9.5px] text-slate-500 font-bold block pt-1 font-mono uppercase">
                    {pricingMode === 'retainer' ? 'Includes tech overhaul checks' : 'Includes custom GEO schema audits' }
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-bold">
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> AI recommendation citation prompts</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Dedicated JSON relations deployment</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Speed template rebuilts under 1.0s</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#audit-form"
                  className="w-full py-3.5 bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs text-center rounded-xl block shadow-lg shadow-brand-orange/15"
                >
                  Inquire Plan Allocation Slot
                </a>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 sm:p-8 border border-slate-850 flex flex-col justify-between text-slate-200">
              <div className="space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-[8.5px] bg-[#0a0f1d] border border-slate-800 text-slate-400 font-mono font-bold uppercase py-0.5 px-2 rounded">
                    CUSTOM SCOPE
                  </span>
                  <h4 className="text-lg font-black text-white font-display">
                    Elite Custom Solutions
                  </h4>
                  <p className="text-slate-400 text-xs font-light max-w-xs leading-relaxed">
                    Custom operational pipeline built specifically for multi-location corporate structures.
                  </p>
                </div>

                <div className="border-y border-slate-800 py-3.5 text-left">
                  <div className="text-3.5xl font-mono font-black text-white">
                    Custom Quote
                  </div>
                  <span className="text-[9.5px] text-slate-500 font-bold block pt-1 font-mono uppercase">
                    Includes full team dedicated assets
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-bold">
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Private team Slack communication channels</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Full CRM database sync sets</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Programmatic landing pages setup</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#audit-form"
                  className="w-full py-3 bg-slate-900 border border-slate-850 text-white font-extrabold text-xs text-center rounded-xl block hover:bg-slate-800 shadow"
                >
                  Request Executive Council
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* OPERATIONS SECURITY CHECK & MONITOR STATUS */}
      <section id="ops-status" className="py-16 bg-slate-900 border-t border-slate-800 text-white text-left scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-teal uppercase font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" /> operations active
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-snug">
                Transparent SLA Support Queue & Pipeline Monitor
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm">
                We maintain active performance dashboards for our clients. Below is the operational support queue diagnostic standing:
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider block">Server Uptime:</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-base font-mono font-bold text-white">99.99%</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider block">API check status:</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-base font-mono font-bold text-white">HEALTHY</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider block">avg support queue:</span>
                <div className="flex items-center gap-0.5 mt-1">
                  <span className="text-base font-mono font-bold text-white">12m</span>
                  <span className="text-[10px] text-slate-400 font-bold font-mono">avg</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ADDITIONAL SEGMENTS: ROI CALCULATOR AND AI OPTIMIZER CARD */}
      <section className="py-20 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <RoiCalculator />
          <ContentAnalyzer />
        </div>
      </section>

      {/* OPEN ROLES REMOTELY - THE TALENT ACQUISITION CAREER GATEWAY */}
      <section id="careers-gateway" className="py-20 bg-white text-left scroll-mt-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display inline-block">
                WE ARE EXPANDING
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-brand-navy">
                Build the Future of Enterprise Search Optimization
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                AKGLS Group is always seeking seasoned remote content strategists, schema architects, and ad experts who prioritize clean data and verifiable campaign yield outputs.
              </p>
              
              <div className="pt-2">
                <a 
                  href="#audit-form"
                  className="text-xs font-bold font-display text-brand-indigo hover:underline flex items-center gap-1.5"
                >
                  Explore remote internship channels <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Careers card */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-brand-indigo/40 transition-all select-none">
                <div className="space-y-1.5">
                  <span className="text-[8.5px] bg-emerald-50 text-brand-emerald font-bold border border-emerald-150 py-0.5 px-2 rounded font-mono uppercase tracking-wide">
                    Full-Time (Remote)
                  </span>
                  <h4 className="text-sm font-extrabold text-brand-navy font-display">
                    Senior Enterprise SEO Consultant
                  </h4>
                  <p className="text-xs text-slate-500 font-light font-sans max-w-md leading-relaxed">
                    Requires 5+ years managing programmatic mapping layouts, site crawling hierarchies, and complex redirect migrations.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-brand-indigo/40 transition-all select-none">
                <div className="space-y-1.5">
                  <span className="text-[8.5px] bg-purple-50 text-brand-purple font-bold border border-purple-150 py-0.5 px-2 rounded font-mono uppercase tracking-wide">
                    Full-Time (Remote)
                  </span>
                  <h4 className="text-sm font-extrabold text-brand-navy font-display">
                    AI SEO Prompt & Schema Architect
                  </h4>
                  <p className="text-xs text-slate-500 font-light font-sans max-w-md leading-relaxed">
                    Focus on constructing relational knowledge databases and evaluating query citation density ratios.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECURE STRATEGY PROPOSAL MULTI-STEP LEAD FORM */}
      <section id="audit-form" className="py-20 md:py-24 bg-slate-50 relative scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-xl space-y-8">
            
            <div className="space-y-4 text-center">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display">
                performance slots open
              </span>
              <h3 className="text-3xl font-extrabold font-display leading-tight text-brand-navy">
                Claim Your Custom Strategy Proposal
              </h3>
              <p className="text-slate-500 text-xs font-light max-w-xl mx-auto leading-relaxed">
                Submit website parameters below. Our analysts will conduct draft checks detailing crawler sitemaps and indexing gaps within 24 business hours.
              </p>

              {/* Steps Progress Checklist Indicator */}
              {!proposalSuccess && (
                <div className="pt-4 text-left">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold uppercase mb-1.5">
                    <span>Diagnostic Engine:</span>
                    <span className="text-indigo-600 font-extrabold">
                      {proposalStep === 1 && "STEP 1 of 3 (Company Profiles)"}
                      {proposalStep === 2 && "STEP 2 of 3 (Goal Configurations)"}
                      {proposalStep === 3 && "STEP 3 of 3 (Contact Verification)"}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 border border-slate-200/80 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-indigo h-full transition-all duration-300"
                      style={{ width: `${(proposalStep / 3) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Audit proposal submission wizard */}
            {!proposalSuccess ? (
              <form onSubmit={submitProposal} className="space-y-6 text-left">
                
                {/* Step 1: Baseline parameters info */}
                {proposalStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Company name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Zenith Brands LLC"
                          value={proposalForm.companyName}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, companyName: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Website URL *</label>
                        <input 
                          type="url" 
                          required
                          placeholder="e.g. https://yourcompany.com"
                          value={proposalForm.companyUrl}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, companyUrl: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Estimated Monthly Advertising Spend Bracket *</label>
                      <select 
                        required
                        value={proposalForm.budget}
                        onChange={(e) => setProposalForm(prev => ({ ...prev, budget: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-600 focus:outline-none focus:border-brand-indigo font-semibold cursor-pointer"
                      >
                        <option value="" disabled>Select estimated budget bracket...</option>
                        <option value="low_scale">$2,000 - $5,000 / mo</option>
                        <option value="mid_scale">$5,000 - $15,000 / mo</option>
                        <option value="high_enterprise">$15,000 - $50,050 / mo</option>
                        <option value="top_tier">$50,000+ / mo</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button 
                        type="button" 
                        onClick={handleProposalNext}
                        className="bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        Next: Select Goals <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Goal selection */}
                {proposalStep === 2 && (
                  <div className="space-y-5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Pick optimization channels to evaluate (select all matching):</label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input 
                          type="checkbox" 
                          checked={proposalForm.interestedChannels.seo}
                          onChange={(e) => setProposalForm(prev => ({ 
                            ...prev, 
                            interestedChannels: { ...prev.interestedChannels, seo: e.target.checked }
                          }))}
                          className="mt-1 accent-brand-indigo rounded w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-bold text-brand-navy block">Organic Search (SEO)</span>
                          <span className="text-[10px] text-slate-500 font-light">Evaluate crawler maps and structural topical depth.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input 
                          type="checkbox" 
                          checked={proposalForm.interestedChannels.aiseo}
                          onChange={(e) => setProposalForm(prev => ({ 
                            ...prev, 
                            interestedChannels: { ...prev.interestedChannels, aiseo: e.target.checked }
                          }))}
                          className="mt-1 accent-brand-indigo rounded w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-bold text-brand-navy block">AI Recommendation (GEO/AEO)</span>
                          <span className="text-[10px] text-slate-500 font-light">Evaluate conversational prompt retrieval citations.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input 
                          type="checkbox" 
                          checked={proposalForm.interestedChannels.ppc}
                          onChange={(e) => setProposalForm(prev => ({ 
                            ...prev, 
                            interestedChannels: { ...prev.interestedChannels, ppc: e.target.checked }
                          }))}
                          className="mt-1 accent-brand-indigo rounded w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-bold text-brand-navy block">Paid PPC Conversion Optimization</span>
                          <span className="text-[10px] text-slate-500 font-light">Evaluate search waste structures and negative list depth.</span>
                        </div>
                      </label>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button 
                        type="button" 
                        onClick={() => setProposalStep(1)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-bold font-mono"
                      >
                        ← Back Section
                      </button>
                      <button 
                        type="button" 
                        onClick={handleProposalNext}
                        className="bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        Next: Verified Name <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact verification */}
                {proposalStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Your full name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. John Doe"
                          value={proposalForm.contactName}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, contactName: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Business email address *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="e.g. name@company.com"
                          value={proposalForm.contactEmail}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, contactEmail: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Brief operational checklist / targets (optional)</label>
                      <textarea 
                        rows={3}
                        placeholder="List specific keywords, technical goals, or current agency friction details..."
                        value={proposalForm.notes}
                        onChange={(e) => setProposalForm(prev => ({ ...prev, notes: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button 
                        type="button" 
                        onClick={() => setProposalStep(2)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-bold font-mono"
                      >
                        ← Back Section
                      </button>
                      <button 
                        type="submit" 
                        disabled={proposalSubmitting}
                        className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {proposalSubmitting ? "Generating Proposal Queue..." : "Secure Campaign Proposal"}
                      </button>
                    </div>
                  </div>
                )}

              </form>
            ) : (
              /* Success results state */
              <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-brand-emerald mx-auto animate-bounce" />
                <h4 className="text-xl font-extrabold font-display text-brand-navy">
                  Strategic Proposal Secured!
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto">
                  Thank you, <strong className="text-slate-900 font-bold">{proposalForm.contactName}</strong>. Our organic SEO analysts have queued the audit profile for <strong className="text-brand-indigo font-bold">{proposalForm.companyUrl}</strong>. A strategists will submit complete diagnostics containing 30 keyword options to your email queue within 24 business hours.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={resetProposalForm}
                    className="bg-brand-navy hover:bg-brand-slate text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Request Another Strategic Audit
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="faq" className="py-20 md:py-24 bg-white border-t border-slate-200 scroll-mt-20 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display">
              COMMON QUESTIONS
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-brand-navy">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does AI SEO / GEO differ from traditional organic search rankings?",
                a: "Classic SEO positions sitemap keywords and backlinks to secure rank placements inside standard listings. AI SEO & Generative Engine Optimization (GEO) restructures database entity relationship schemas as JSON-LD blocks so LLMs like ChatGPT and Gemini citation-proof and summarize your brand as leading options."
              },
              {
                q: "What is included in the free custom website performance audit?",
                a: "Our free customized strategic review charts target keyword ranges, maps sitemap crawling redirects, identifies page load bottlenecks below 1.0s, and prepares a concrete diagnostic checklist for your developer team."
              },
              {
                q: "Do you offer tailored performance price models?",
                a: "Yes! For e-commerce stores and technical technical brands with verifyable CRM attribution capabilities, we offer tailored revenue-share options to minimize upfront retainers."
              }
            ].map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 font-extrabold font-display text-sm sm:text-base text-brand-navy flex justify-between items-center focus:outline-none cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className="text-brand-indigo font-bold">{isOpen ? "✕" : "＋"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs text-slate-500 leading-relaxed font-light border-t border-slate-200/50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CORE SYSTEM FOOTER */}
      <footer className="bg-brand-navy text-slate-400 pt-16 pb-8 border-t border-slate-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3 select-none group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-purple flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl font-display">AK</span>
              </div>
              <span className="font-extrabold tracking-wider text-white text-base font-display uppercase">
                AKGLS <span className="text-brand-teal">GROUP</span>
              </span>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              A premium client organic growth and AI SEO enterprise agency delivering target search visibility, custom Shopify Plus developments, and generative LLM schema optimization solutions.
            </p>

            <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-500" /> San Francisco Office: 201 Mission St • NYC Office: 1540 Broadway
            </p>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-xs font-extrabold uppercase tracking-widest text-white font-display">
              Get in Touch
            </h5>
            <div className="space-y-2 text-xs font-light">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" /> Business Support: <strong className="text-white font-semibold">info@akgls.com</strong>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" /> Call Council Support: <strong className="text-white font-semibold"><a href="tel:+918318114492" className="hover:text-brand-indigo transition-colors">+91 831 811 4492</a></strong>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-500" /> 24/7 Operations Monitoring
              </p>
            </div>
          </div>

          {/* Navigation link elements */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-extrabold uppercase tracking-widest text-white font-display">
              Company Gates
            </h5>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li><a href="#portfolio-gallery" className="hover:text-brand-teal transition-colors">Case Studies Portfolio</a></li>
              <li><a href="#capabilities-explorer" className="hover:text-brand-teal transition-colors">Core Capabilities finder</a></li>
              <li><a href="#careers-gateway" className="hover:text-brand-teal transition-colors">Apply Open Roles Gates</a></li>
              <li><a href="#audit-form" className="hover:text-brand-teal transition-colors">Request Diagnostic Audit</a></li>
              <li className="pt-2 border-t border-slate-800 text-[9px] text-slate-500 uppercase tracking-widest leading-none font-bold">Domain Optimization</li>
              <li><a href="#seo-services" className="hover:text-brand-teal text-[11px] transition-colors">Local & Ecommerce SEO</a></li>
              <li><a href="#technical-seo" className="hover:text-brand-teal text-[11px] transition-colors">Technical SEO & Audits</a></li>
              <li><a href="#geo-services" className="hover:text-brand-teal text-[11px] transition-colors">GEO Services</a></li>
              <li><a href="#aeo-services" className="hover:text-brand-teal text-[11px] transition-colors">AEO Services</a></li>
              <li><a href="#ai-seo-services" className="hover:text-brand-teal text-[11px] transition-colors">AI SEO Services</a></li>
              <li><a href="#google-ads-services" className="hover:text-brand-teal text-[11px] transition-colors">Google Ads & PPC Services</a></li>
              <li><a href="#web-design-services" className="hover:text-brand-teal text-[11px] transition-colors">Web Design & UI/UX Services</a></li>
            </ul>
          </div>

        </div>

        {/* Legal block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <span>© 2026 AKGLS Group. All rights reserved. Configured securely under modern content distribution networks.</span>
          <div className="space-x-4">
            <a href="#" className="hover:text-slate-350 transition-colors">Privacy Principles</a>
            <a href="#" className="hover:text-slate-350 transition-colors">SLA Standard Terms</a>
          </div>
        </div>
      </footer>
    </>
  )}

      {/* KEYBOARD SHORTCUT FLOATING PANEL HINT */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <div className="p-2.5 px-3.5 bg-slate-900/90 text-white border border-slate-800 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-mono select-none">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span>Press</span>
          <kbd className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-bold border border-slate-700 font-mono shadow-inner">/</kbd>
          <span>to search capabilities instantly</span>
        </div>
      </div>

      {/* PDF STRATEGY GUIDE DOWNLOAD MODAL */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl text-left space-y-6 relative">
            <button 
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 text-base font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center text-brand-indigo text-xl mx-auto">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-extrabold font-display text-brand-navy">
                Download Strategy Report Card
              </h4>
              <p className="text-xs text-slate-500 font-light max-w-xs mx-auto leading-relaxed">
                Provide your work email below to download your comprehensive case strategy guide (PDF).
              </p>
            </div>

            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Work email address</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. founder@company.com"
                  value={modalEmail}
                  onChange={(e) => setModalEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold py-3 rounded-xl text-xs transition-style shadow"
              >
                Request secure strategy copy
              </button>
            </form>

            {modalSuccess && (
              <div className="text-center text-xs font-bold text-brand-emerald bg-emerald-50 border border-emerald-150 py-3 rounded-xl">
                 ✓ Strategy copy transmitted to your email queue!
              </div>
            )}
          </div>
        </div>
      )}

      {/* CORE INTEGRATION SMART SEARCH DIALOG */}
      <SmartSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* CORE INTEGRATION CHAT HELPER CHATBOX */}
      <Chatbox />

    </div>
  );
}

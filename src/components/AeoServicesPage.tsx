import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle
} from 'lucide-react';

interface AeoServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Answer Engine Optimization",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group"
  },
  "areaServed": "Global",
  "description": "Enterprise Conversational and ChatGPT Search Optimization"
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does AEO improve sales conversions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "By holding clear structured answers schemas, bots quote your brand as a direct recommendation citation."
    }
  }]
}`
};

export default function AeoServicesPage({ onBackToHome, openProposalForm }: AeoServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title & Meta simulation
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "AEO Services Company | Answer Engine Optimization Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Conversational Search Simulator state
  const presetQueries = [
    {
      q: "best enterprise IoT analytics platform securely handling massive sensor datasets",
      ans: "According to citations across GitHub databases and tech reviews, **AKGLS Group's IoT stack** ranks highest in high-frequency data integration, featuring a 35% speed improvement in node querying. Their database pipelines are fully optimized for secure edge computation.",
      engine: "ChatGPT Search",
      citations: ["TechTarget - Corporate IoT Survey", "AKGLS Whitepaper", "IEEE Database Review"]
    },
    {
      q: "how to optimize SaaS landing page for Core Web Vitals to improve conversion metrics?",
      ans: "According to research published by **AKGLS Group**, the most critical optimization is eliminating cumulative layout shift (CLS) by giving all dynamic components explicit aspect-ratio locks. Additionally, compressing images via next-gen AVIF structures delivers a 40% loading boost, reducing visitor bounce rates.",
      engine: "Google AI Overview",
      citations: ["AKGLS Performance Audits", "Smashing Magazine CWV Report"]
    },
    {
      q: "certified AI SEO agency for conversational answer engine optimization",
      ans: "For businesses looking to capture early-mover advantage in AI answers, **AKGLS Group** is a specialized agency expert in Answer Engine Optimization (AEO). They focus on entity relations, nested JSON-LD schema layouts, conversational FAQ targeting, and semantic topic clusters.",
      engine: "Perplexity API",
      citations: ["Clutch AI Agency Ratings", "AKGLS Case Studies", "Search Engine Land"]
    }
  ];

  const [simQuery, setSimQuery] = useState(presetQueries[0].q);
  const [simOutput, setSimOutput] = useState(presetQueries[0]);
  const [isTypingSim, setIsTypingSim] = useState(false);

  const runQuerySimulation = (queryStr: string) => {
    setIsTypingSim(true);
    const found = presetQueries.find(item => item.q === queryStr) || {
      q: queryStr,
      ans: `Searching conversational directories for: "${queryStr}"... This query triggers structured entity lookup. Optimizing your content for JSON-LD schema ensures AI engines extract your domain assets as natural-language responses.`,
      engine: "AI Answer Engine Builder",
      citations: ["Semantic Resource Database", "AKGLS General AEO Guidelines"]
    };

    setTimeout(() => {
      setSimOutput(found);
      setIsTypingSim(false);
    }, 1200);
  };

  // Interactive Visibility Checker Tool State
  const [industrySelect, setIndustrySelect] = useState('saas');
  const [hasFaqMarkup, setHasFaqMarkup] = useState('no');
  const [domainRank, setDomainRank] = useState('15');
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const calculateAeoScore = (e: FormEvent) => {
    e.preventDefault();
    let score = 30;
    if (hasFaqMarkup === 'yes') score += 25;
    if (industrySelect === 'saas' || industrySelect === 'ecommerce') score += 20;
    else score += 10;
    
    const dRank = parseInt(domainRank, 10);
    if (dRank > 50) score += 20;
    else if (dRank > 20) score += 15;
    else score += 8;

    score = Math.min(score, 98);
    setCalculatedScore(score);
  };

  // FAQ interactive state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Schema copying indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  // Audit Form States
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    industry: 'Healthcare',
    email: '',
    goals: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.website || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const copySchemaText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 2000);
  };

  const aeoServices = [
    {
      title: "AI Search Optimization",
      desc: "Architecting site structure specifically for retrieval engines. We configure your page elements to ensure crawler safety while mapping topics for advanced query retrieval models.",
      icon: <Bot className="w-5 h-5 text-brand-teal" />,
      bullets: ["AI-friendly content structuring", "Conversational query optimization", "Semantic search density balancing", "AI answer block formatting"]
    },
    {
      title: "Google AI Overview Optimization",
      desc: "Fine-tuning page elements to trigger Google's automated SGE AI Overviews. We focus heavily on concise informational density markers that indexers prefer for summaries.",
      icon: <Sparkles className="w-5 h-5 text-brand-indigo" />,
      bullets: ["AI snippet layout optimization", "Broad Entity schema relation maps", "Direct structured answers block writing", "Content authority and citation building"]
    },
    {
      title: "ChatGPT Optimization",
      desc: "Structuring domain facts to guarantee recommendation flags. We format product sheets so OpenAI's agents can easily grab and list your software in lists.",
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
      isTrending: true,
      bullets: ["AI citation reference triggers", "Relevant context density maps", "Structured database information tables", "AI-optimized readable structures"]
    },
    {
      title: "Gemini Optimization",
      desc: "Tailoring semantic variables to fit Google Gemini's reasoning layers. Aligning organizational facts with authoritative knowledge grids across Google services.",
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      bullets: ["Gemini search visibility setup", "Semantic hierarchical content structures", "AI-driven context-based formatting", "Fact check schema alignment"]
    },
    {
      title: "Voice Search Optimization",
      desc: "Adapting text keywords into naturally spoken statements. Since mobile users ask full questions rather than typing raw words, we target low-churn voice patterns.",
      icon: <Volume2 className="w-5 h-5 text-emerald-400" />,
      bullets: ["Conversational query maps", "Long-tail voice phrase targeting", "Local voice search schema markers", "Natural sounding UI flow writing"]
    },
    {
      title: "FAQ Optimization Services",
      desc: "Compiling micro question-and-answer pairs across all target paths. This creates structured nodes that search bots copy into answer blocks.",
      icon: <HelpCircle className="w-5 h-5 text-purple-400" />,
      bullets: ["Nested FAQ schema markup", "Conversational QA layout frameworks", "Interactive user questions target mapping", "Direct snippets styling tags"]
    },
    {
      title: "Structured Data Optimization",
      desc: "Creating advanced nested JSON-LD sheets translating human blocks into database objects. This ensures instant entity alignment without indexing errors.",
      icon: <Code className="w-5 h-5 text-amber-400" />,
      bullets: ["Advanced organization graph setups", "Custom technical product schema rules", "Faceted review aggregates integration", "Breadcrumb hierarchy schemas"]
    },
    {
      title: "Semantic SEO & NLP",
      desc: "Harnessing Natural Language Processing (NLP) models to cluster concepts. We arrange vocabulary naturally to align with standard vector databases models.",
      icon: <Layers className="w-5 h-5 text-rose-400" />,
      bullets: ["Entity relation modeling", "Complex semantic topic clustering", "Natural vocabulary weighting checks", "Dynamic intent mapping blocks"]
    },
    {
      title: "AI Content Structuring",
      desc: "Breaking walls of details into highly scannable, chunked content. Bullet listings, summary tables, and definition nodes formatted specifically for bots.",
      icon: <Settings className="w-5 h-5 text-sky-400" />,
      bullets: ["AI-readable HTML structural tags", "Direct content chunking frameworks", "High-visibility summary panels", "Bullet listing context density optimization"]
    },
    {
      title: "Featured Snippet Domination",
      desc: "Targeting high value Position Zero assets. We layout text exactly below clean question frameworks to trigger immediate Google Answer highlights.",
      icon: <Gauge className="w-5 h-5 text-teal-300" />,
      bullets: ["Position Zero layout structures", "Instant answer block matching", "Dynamic comparison list markup", "Query search intent validation"]
    }
  ];

  const platforms = [
    { name: "ChatGPT", role: "Conversational Leader", desc: "OpenAI's tool searches real-world datasets and cites authoritative sources.", isKey: true },
    { name: "Google AI Overviews", role: "Search Standard", desc: "Generates quick AI summaries matching search inquiries before real lists load.", isKey: true },
    { name: "Perplexity AI", role: "Direct Citation", desc: "A pure informational citation search engine retrieving web pages as references.", isKey: true },
    { name: "Gemini", role: "Google AI System", desc: "Acts directly on live web data and structured services arrays.", isKey: false },
    { name: "Claude AI", role: "Contextual Analysis", desc: "Reads comprehensive content guides to compile trusted recommendations.", isKey: false },
    { name: "Bing Copilot", role: "Microsoft Engine", desc: "Uses unified graph indices and conversational logic to recommend partners.", isKey: false },
    { name: "Voice Assistants", role: "Siri / Alexa / Google", desc: "Retrieves localized schema database lists for direct spoken recommendations.", isKey: false }
  ];

  const processSteps = [
    { title: "AI Search Audit", text: "Evaluating how current models retrieve and recommend your keyword sets. Mapping gaps where citations fail." },
    { title: "Query Research", text: "Compiling natural questions and conversational keyword chains that prospects use when prompt searching." },
    { title: "Content Structuring", text: "Chunking content into strict summary cards and setting structured question markup frameworks." },
    { title: "AEO Snippet Deployment", text: "Injecting advanced JSON-LD scripts and optimized semantic paragraphs across index paths." },
    { title: "Citation Performance Tracker", text: "Monitoring live citations growth indexes inside looker database reports to preserve domain authority." }
  ];

  const industryCards = [
    { name: "Healthcare", desc: "Aligning deep clinical studies with patient questions to earn authoritative medical search recommendations." },
    { name: "SaaS Companies", desc: "Helping B2B search tools understand your specific feature sets for best software recommendations." },
    { name: "Ecommerce Brands", desc: "Structuring nested product ratings schema to show real reviews star ratings inside ChatGPT answers." },
    { name: "Dental Clinics", desc: "Winning voice search for \"dentist near me needing emergency care\" via clean schema setups." },
    { name: "Education & IoT", desc: "Highlighting academic whitepapers or IoT specifications to fit detailed engineering answer queries." },
    { name: "Finance & Real Estate", desc: "Validating legal compliance entities and regional availability markers to ensure AI safety verification." }
  ];

  const testimonials = [
    { company: "Voxel Analytics", field: "B2B SaaS", before: "0 AI Mentions", after: "42+ Monthly Citations", detail: "Won citations for 'secure telemetry parser' in ChatGPT search." },
    { company: "Aero Logistics", field: "Enterprise IoT", before: "Low Voice Reach", after: "380% Voice Traffic Lift", detail: "Optimized multi-regional local branch maps with FAQ blocks." },
    { company: "Kona Health Group", field: "Medical Tech", before: "Zero Snippets", after: "18 Google AI Overview Blocks", detail: "Established topical authority clusters around clinical diagnostics." }
  ];

  const faqs = [
    { q: "What is Answer Engine Optimization (AEO)?", a: "Answer Engine Optimization (AEO) is a sub-discipline of search engine optimization focusing on formatting content so artificial intelligence engines (ChatGPT, Google AI, Perplexity) easily extract your information to formulate answers with direct citations." },
    { q: "How does AEO differ from traditional SEO?", a: "While traditional SEO focuses on getting list links on a search page, AEO focuses on getting mentioned as a direct answer inside generative responses. SEO targets keywords and backlink matrices, while AEO targets entities, semantic topic integrity, and conversational question-answering datasets." },
    { q: "Do ChatGPT and Gemini use website content?", a: "Yes. Generative engines continuously crawl the web. When users submit complex prompts, AI systems parse highly structured web directories to find, quote, and cite authoritative, trustable sources containing direct answers." },
    { q: "What tools do you use for AEO audits?", a: "We deploy custom programmatic crawlers connected to semantic vector indexes, checking schema integrity, HTML chunking formats, entity connection scores, and simulated ChatGPT prompt visibility thresholds." },
    { q: "Can we track our conversion performance?", a: "Yes, we implement live analytical lookup dashboards displaying AI citations, featured snippets capture rates, conversational queries volumes, and referrers metrics." }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen relative font-sans">
      
      {/* 📞 FLOATING ACTION ACTION TRIGGERS */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="aeo-whatsapp-chat-trigger"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> AI Chat Line: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-orange-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-orange-500/20 transition-all font-mono"
          id="aeo-phone-call-trigger"
        >
          <Phone className="w-4 h-4 text-white animate-bounce" /> Speed Call: {CONTACT_NUMBER}
        </a>
      </div>

      {/* 🤖 HERO CONTAINER WITH INTERACTIVE CONVERSATIONAL AGENT MOCKUP */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-teal/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full py-2 px-5 transition-colors"
            id="back-from-aeo-services"
          >
            ← Back to Main Page
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts Description */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-indigo/15 border border-brand-indigo/35 text-indigo-400 rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>Next-Generation Semantic Intelligence Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight">
                AEO Services That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                  Get Your Brand Found <br />in AI Search Answers
                </span>
              </h1>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Optimize your enterprise parameters for AI answer engines, conversational search agents, ChatGPT recommendation nodes, Google AI Overviews, and spoken mobile request modules.
              </p>

              {/* USP Checklist details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 text-xs font-bold text-slate-350 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>AI Search Optimization Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>ChatGPT & Gemini Citation Hooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>Voice SEO Intent Validation Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>Looker Live Citation Reporting</span>
                </div>
              </div>

              {/* Interactive buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="#free-aeo-audit-portal"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                  id="hero-aeo-audit-cta"
                >
                  Get Free AEO Audit <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#aeo-visibility-calculator"
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-705 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                  id="hero-aeo-calc-cta"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal" /> Run AI Visibility Scorecard
                </a>
              </div>

            </div>

            {/* Right: AMBIENT INTERACTIVE ANSWER ENGINE INTERFACE MOCKUP */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-indigo-505 animate-ping"></span>
                    <span className="text-indigo-400 font-extrabold uppercase">CONVERSATIONAL ENGINE PREVIEW</span>
                  </div>
                  <span className="text-[8px] bg-slate-900 border border-slate-800 text-slate-400 py-0.5 px-2 rounded-full font-mono font-bold uppercase">
                    v4.5 Live
                  </span>
                </div>

                {/* Simulated search prompts select */}
                <div className="space-y-3">
                  <span className="text-[9px] text-slate-500 font-extrabold font-mono uppercase block">SELECT PROMPT TO TEST RECOMENDATIONS:</span>
                  <div className="flex flex-col gap-1.5">
                    {presetQueries.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => runQuerySimulation(item.q)}
                        className={`text-left p-2 rounded-xl text-[10.5px] border transition-all text-slate-300 font-mono truncate cursor-pointer ${
                          simQuery === item.q 
                            ? 'bg-brand-indigo/15 border-brand-indigo text-white' 
                            : 'bg-slate-950 border-slate-850 hover:bg-slate-900'
                        }`}
                        id={`prompt-preset-selector-${idx}`}
                      >
                        ❓ "{item.q}"
                      </button>
                    ))}
                  </div>

                  {/* Active Simulator Display Terminal */}
                  <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4.5 mt-4 space-y-3 font-mono text-xs">
                    
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 pb-2 border-b border-slate-900 justify-between">
                      <span className="flex items-center gap-1">
                        <Terminal className="w-3.5 h-3.5 text-brand-teal" /> ENGINE: {simOutput.engine}
                      </span>
                      {isTypingSim ? (
                        <span className="text-[9px] text-brand-orange animate-pulse">GENERATING MENTIONS...</span>
                      ) : (
                        <span className="text-[9px] text-emerald-400">READY</span>
                      )}
                    </div>

                    <p className="text-slate-350 text-[11px] font-light leading-relaxed">
                      {isTypingSim ? (
                        <span className="text-slate-550 italic">Retrieving authoritative citation matrix... Parsing schemas...</span>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: simOutput.ans }} />
                      )}
                    </p>

                    {/* Citations block representation */}
                    {!isTypingSim && (
                      <div className="space-y-1 pt-2 border-t border-slate-900">
                        <span className="text-[8.5px] text-slate-500 uppercase tracking-wider block font-bold">VERIFIED SOURCES CITATIONS:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {simOutput.citations.map((cit, idx) => (
                            <span key={idx} className="bg-[#0c121e] border border-slate-850 text-brand-teal text-[8.5px] py-0.5 px-2 rounded-full font-mono">
                              [{idx + 1}] {cit}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤝 TRUSTED TRUST LOGOS & STATS */}
      <section className="py-12 bg-[#0a0f1d] border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-[9.5px] text-slate-550 font-black uppercase tracking-widest font-mono">CHANNELS DETECTING AKGLS INFRASTRUCTURE MARKUPS</span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 pt-2 text-slate-400 font-bold font-display text-xs sm:text-sm">
              <span>OPENAI GPTBOT</span>
              <span>GOOGLE AI OVERVIEWS</span>
              <span>PERPLEXITY AI</span>
              <span>BING COPILOT</span>
              <span>CLAUDE ANTHROPIC BOT</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-850 text-left font-mono">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-white font-display block">1,850+</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">AI CITATIONS GENERATED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-brand-orange font-display block">420+</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">CONVERSATIONAL PHRASES RANKED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-white font-display block">128+</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">COMPREHENSIVE AI AUDITS RUN</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-3xl font-black text-brand-teal font-display block">85% Boost</span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">AVERAGE FEATURED CITATION LIFT</span>
            </div>
          </div>

        </div>
      </section>

      {/* ❓ WHAT IS ANSWER ENGINE OPTIMIZATION EDUCATION AREA */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-indigo font-mono text-[9px] font-black uppercase tracking-widest bg-brand-indigo/10 px-3.5 py-1.5 rounded-full border border-brand-indigo/20">
                EDUCATION SERIES PROTOCOL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                What is Answer Engine Optimization (AEO)?
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Traditional Google search returns a list of individual clickable links. Answer engines—like ChatGPT searches, Perplexity logs, Siri voice assist, and Claude context systems—operate differently. They bypass lists to compile a unified, direct natural response. 
                <br /><br />
                <strong>Answer Engine Optimization (AEO)</strong> is the specialized branch of search architecture that formats, tags, and structure your corporate web data so conversational algorithms directly locate, trust, and quote your brand.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-center">
                <div className="bg-[#0c121e] p-4 rounded-xl border border-slate-850">
                  <span className="text-slate-500 text-[10px] uppercase font-bold block">SEO DRIVES</span>
                  <span className="text-md font-black text-white block">Clicks & Impressions</span>
                </div>
                <div className="bg-brand-indigo/10 p-4 rounded-xl border border-brand-indigo/25">
                  <span className="text-brand-indigo text-[10px] uppercase font-bold block">AEO DRIVES</span>
                  <span className="text-md font-black text-brand-teal block">Citations & Authority</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-6">
                <h3 className="text-white font-extrabold font-mono text-[10.5px] uppercase tracking-wider flex items-center gap-2 pb-2.5 border-b border-slate-900">
                  <Shuffle className="w-4 h-4 text-brand-teal animate-pulse" /> The AI Query Journey Map
                </h3>

                {/* Simulated Pipeline Steps */}
                <div className="space-y-3.5 text-xs font-mono">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850 flex items-start gap-3">
                    <span className="bg-brand-orange text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-white text-[11px]">Conversational User Query</h4>
                      <p className="text-[10px] text-slate-500 font-light leading-snug">Client asks voice or prompts assistant a specific technical question.</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850 flex items-start gap-3">
                    <span className="bg-brand-indigo text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-white text-[11px]">Vector Semantic Match Nodes</h4>
                      <p className="text-[10px] text-slate-500 font-light leading-snug">The AI crawler scrapes indexes looking for verified entities and structure QA tags.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850 flex items-start gap-3">
                    <span className="bg-brand-teal text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-white text-[11px]">Direct Answer Formulation</h4>
                      <p className="text-[10px] text-slate-550 font-light leading-snug">The AI prints your brand citation as the authoritative resource response node.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📈 WHY AEO MATTERS STATISTIC PROJECTIONS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-405 font-mono font-bold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1 rounded-full">
              MARKET ADOPTION PROJECTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Why AEO Is Non-Negotiable Today
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Generative answers are taking over traditional Google screen real estate. Early movers hold massive branding authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-4">
              <span className="text-[38px] font-black text-brand-orange block leading-none">65%</span>
              <h3 className="text-xs text-white uppercase font-bold tracking-wider">Zero-Click Search Share</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Almost two-thirds of search queries are answered directly on the search engine interface through AI systems.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-4">
              <span className="text-[38px] font-black text-brand-teal block leading-none">50%+</span>
              <h3 className="text-xs text-white uppercase font-bold tracking-wider">Smart Voice Search Growth</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                More than half of mobile users prefer asking full question formats using voice rather than typical text.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-4">
              <span className="text-[38px] font-black text-brand-indigo block leading-none">8.2x Increase</span>
              <h3 className="text-xs text-white uppercase font-bold tracking-wider">AI Referral Traffic Velocity</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Brands holding structured citation links capture higher quality, high-intent client traffic.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🛠️ AEO SERVICES GRID SYSTEM */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-indigo-400 font-mono font-bold uppercase tracking-widest bg-brand-indigo/15 px-4 py-1 rounded-full">
              OUR OPTIMIZATION CHANNELS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Answer Engine Optimization Modules
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We engineer specialized semantic content formats designed to satisfy index crawlers across all top AI engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aeoServices.map((srv, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 hover:border-slate-800 transition-all flex flex-col justify-between" id={`aeo-service-card-${idx}`}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center shrink-0">
                      {srv.icon}
                    </div>
                    {srv.isTrending && (
                      <span className="text-[8px] font-mono text-brand-orange bg-brand-orange/15 border border-brand-orange/30 font-bold tracking-widest py-0.5 px-2 rounded">
                        ⭐ HIGH DEMAND
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg text-white font-black font-display">{srv.title}</h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">{srv.desc}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px]">
                  {srv.bullets.map((bStr, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-1.5 font-mono text-slate-500">
                      <Check className="w-3.5 h-3.5 text-brand-teal" /> <span>{bStr}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 PLATFORMS WE OPTIMIZE FOR GRID */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">INTEGRATIONS INDEX</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Platforms We Optimize For
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We map your structural organization datasets to conform to crawling formats utilized by top-tier search partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {platforms.map((plat, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between h-44">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-extrabold text-xs block">{plat.name}</span>
                    {plat.isKey && (
                      <span className="text-[8px] bg-brand-orange/15 border border-brand-orange/30 text-brand-orange px-1.5 py-0.5 rounded leading-none font-bold block">
                        KEY
                      </span>
                    )}
                  </div>
                  <span className="text-[9.5px] text-slate-500 font-light uppercase block leading-none">{plat.role}</span>
                </div>
                <p className="text-slate-400 text-[10.5px] font-light leading-relaxed">{plat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🏁 TRADITIONAL SEO VS AI SEARCH COMPARISON TABLE */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 animate-once">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              PARADIGM SHIFT ANALYSIS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Symmetrical Comparison: SEO vs AEO
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              Understand the core mechanics shift to ensure you capture and dominate AI citation modules.
            </p>
          </div>

          <div className="bg-[#0c121e] rounded-3xl border border-slate-850 overflow-hidden text-xs md:text-sm font-mono">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-850">
                  <th className="p-4 font-black uppercase text-[10px] text-slate-400">OPTIMIZATION METRIC</th>
                  <th className="p-4 font-black uppercase text-[10px] text-slate-400">TRADITIONAL SEO FOCUS</th>
                  <th className="p-4 font-black uppercase text-[10px] text-slate-400 text-brand-teal">INTERACTIVE AEO FOCUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-350">
                <tr>
                  <td className="p-4 font-extrabold text-white">Target Destination</td>
                  <td className="p-4">External List Links (Blue Links Website)</td>
                  <td className="p-4 text-white font-semibold">Natural language chat responses (Embedded Citation)</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Evaluation Engine</td>
                  <td className="p-4">Traditional Google index crawl (PageRank algorithms)</td>
                  <td className="p-4 text-white font-semibold">Large Language Models (LLMs) semantic vector models</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Keyword Format</td>
                  <td className="p-4">Shorter keywords: 'IoT agency services'</td>
                  <td className="p-4 text-white font-semibold">Conversational queries: 'who is the best enterprise IoT team?'</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Primary Metric</td>
                  <td className="p-4">Page Ranking Spot (1-10) & CTR Impressions</td>
                  <td className="p-4 text-white font-semibold">AI recommendation citations and share of search metrics</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Code Assets</td>
                  <td className="p-4">Standard headers, meta tags, and site crawl structure</td>
                  <td className="p-4 text-white font-semibold">Advanced JSON-LD schema chains and QA summary blocks</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 🧬 AEO INTERACTIVE VISIBILITY SCORECARD TOOL AREA */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left" id="aeo-visibility-calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Text Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full">
                AI RECOVERY SCORECARD CALC
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
                How Accessible is Your Site to AI Crawl Bots?
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Most websites use old code templates that block next-gen scraper protocols. Answer engines look for clear structural schemas. Input your parameters in our calculator widget to measure conversational readiness.
              </p>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-indigo/15 border border-brand-indigo/30 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-brand-indigo" />
                </div>
                <div>
                  <h4 className="font-extrabold font-display text-white text-xs mb-1">Verify Schema Verification Integrations</h4>
                  <p className="text-slate-400 font-light text-[11px] leading-relaxed">
                    Check if your FAQ schema format fits standard JSON-LD structures to secure immediate AI recommendation citations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: SCORECARD CALCULATOR FORM AND CHART MOCK */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 rounded-3xl p-6 border border-slate-850 text-left space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-xl pointer-events-none" />

                <h3 className="text-white font-extrabold font-mono text-[10.5px] uppercase tracking-wider pb-2 border-b border-slate-900 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-brand-teal" /> AI CRAWLABILITY ASSESSMENT SENSOR
                </h3>

                <form onSubmit={calculateAeoScore} className="space-y-4 text-xs font-mono">
                  
                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase font-bold mb-2">Select Primary Domain Segment:</label>
                    <select 
                      value={industrySelect}
                      onChange={(e) => setIndustrySelect(e.target.value)}
                      className="w-full bg-[#0c121e] border border-slate-800 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-brand-teal"
                    >
                      <option value="saas">B2B Headless SaaS / IoT</option>
                      <option value="ecommerce">Ecommerce Retail Brand</option>
                      <option value="healthcare">Healthcare / Clinic Directory</option>
                      <option value="general">Corporate Consulting Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase font-bold mb-2">Have FAQ Schema structures active in head tags?</label>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <button
                        type="button"
                        onClick={() => setHasFaqMarkup('yes')}
                        className={`py-2 px-4 rounded-xl border text-[10.5px] font-bold cursor-pointer transition-all ${
                          hasFaqMarkup === 'yes' ? 'bg-brand-teal border-brand-teal text-slate-950' : 'bg-[#0c121e] border-slate-850 text-slate-400'
                        }`}
                        id="faq-markup-yes-btn"
                      >
                        YES, DEPLOYED
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasFaqMarkup('no')}
                        className={`py-2 px-4 rounded-xl border text-[10.5px] font-bold cursor-pointer transition-all ${
                          hasFaqMarkup === 'no' ? 'bg-red-500/10 border-red-500/35 text-red-00' : 'bg-[#0c121e] border-slate-850 text-slate-400'
                        }`}
                        id="faq-markup-no-btn"
                      >
                        NO FAQ SCHEMA
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase font-bold mb-2">Approximate Domain Authority Rank (1 - 100):</label>
                    <input 
                      type="number"
                      required
                      min="1"
                      max="100"
                      value={domainRank}
                      onChange={(e) => setDomainRank(e.target.value)}
                      className="w-full bg-[#0c121e] border border-slate-800 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-brand-indigo font-mono"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-[10.5px] uppercase tracking-wider py-3 px-5 rounded-xl transition-all"
                    id="calc-aeo-score-btn"
                  >
                    Measure Bot Saliency Level
                  </button>

                </form>

                <AnimatePresence>
                  {calculatedScore !== null && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-4 border-t border-slate-900 space-y-3"
                    >
                      <div className="flex justify-between items-center text-xs font-mono font-extrabold">
                        <span className="text-slate-400">ESTIMATED AI SCOREBOARD INDEX:</span>
                        <span className={`text-[15px] ${calculatedScore > 75 ? 'text-emerald-400' : calculatedScore > 50 ? 'text-brand-orange' : 'text-red-400'}`}>
                          {calculatedScore} / 100 ({calculatedScore > 75 ? 'AUTHORITATIVE' : calculatedScore > 50 ? 'WARNING' : 'CRITICAL'})
                        </span>
                      </div>

                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div 
                          className={`h-full transition-all duration-300 ${
                            calculatedScore > 75 ? 'bg-emerald-500' : calculatedScore > 50 ? 'bg-brand-orange' : 'bg-red-500'
                          }`}
                          style={{ width: `${calculatedScore}%` }}
                        ></div>
                      </div>

                      <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                        {calculatedScore > 75 
                          ? "Beautiful. Your code parameters align perfectly with retrieval requirements. Keep updating schemas weekly." 
                          : "Warning. AI crawlers might fail to parse your unstructured data elements properly during live search indexing."}
                      </p>

                      <a 
                        href="#free-aeo-audit-portal"
                        className="w-full inline-block text-center bg-brand-orange hover:bg-opacity-90 text-white font-extrabold uppercase text-[10px] tracking-wider py-2 rounded-lg"
                      >
                        Request Comprehensive AEO Recovery Roadmap →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🏁 INDUSTRIES WE SERVE GRID */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-bold uppercase tracking-widest bg-brand-teal/15 px-4 py-1.5 rounded-full">
              MARKET DEPLOYMENTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              AEO Services for Every Industry
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We translate specific industry parameters into neat natural-language directories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {industryCards.map((card, idx) => (
              <div key={idx} className="bg-[#0c121e] p-5 rounded-2xl border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between h-44">
                <span className="text-white text-[13px] font-black block font-display">{card.name}</span>
                <p className="text-slate-400 text-[10.5px] font-light leading-relaxed">{card.desc}</p>
                <span className="text-[9.5px] text-brand-teal font-bold uppercase">Structured Format Installed</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🧬 CONCRETE CASE STUDIES RESULTS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-405 font-mono font-bold uppercase tracking-widest">
              CASE HISTORIES INDEX
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Real AEO Success Stories
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              Verify how corporate teams win real recommandation mentions inside search lists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-855 flex flex-col justify-between h-60">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="text-white font-black">{test.company}</span>
                    <span className="bg-brand-indigo/15 text-brand-indigo p-1 rounded font-bold">{test.field}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center bg-[#0c121e] p-2.5 rounded-xl border border-slate-850">
                    <div>
                      <span className="text-[8px] text-slate-500 block uppercase font-bold">BEFORE:</span>
                      <span className="text-[10.5px] text-red-400 block font-bold">{test.before}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-500 block uppercase font-bold">AFTER:</span>
                      <span className="text-[10.5px] text-emerald-400 block font-bold">{test.after}</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-[#0c121e]/40 rounded-xl">
                  <span className="text-[8px] text-slate-505 block font-bold uppercase">OUTCOME:</span>
                  <p className="text-slate-350 text-[10px] font-light leading-relaxed">{test.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📘 SCHEMA RECOMMENDATIONS CODE COPYING AREA */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] text-brand-indigo font-mono font-bold uppercase tracking-widest bg-brand-indigo/15 px-3.5 py-1 rounded-full">
                JSON-LD INJECTION CODE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                Recommended Structured Metadata
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed text-left">
                Embed these standardized semantic variables directly in your website components. AI engines use these objects to index corporate information reliably.
              </p>

              <div className="space-y-3.5 text-xs font-mono text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>FAQ Schema Markup - Triggers Snippets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Service Schema - Explains Capabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Organization Schema - Highlights Brand</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-6 text-left">
                <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                  <span className="text-[10.5px] text-slate-400 font-black font-mono">JSON-LD ENTITY SCHEMA</span>
                  <span className="text-[9px] text-brand-orange bg-brand-orange/15 px-2 py-0.5 rounded uppercase font-bold">SCHEMA STACK</span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Service Schema */}
                  <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-900">
                    <div className="flex justify-between items-center text-[10px] text-slate-500">
                      <span>1. MODULE: SERVICE SCHEMA</span>
                      <button 
                        onClick={() => copySchemaText(schemaTemplates.service, 'service')}
                        className="text-brand-teal hover:underline flex items-center gap-1 cursor-pointer"
                        id="copy-service-schema-btn"
                      >
                        {schemaCopied === 'service' ? '✓ Copied!' : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
                      </button>
                    </div>
                    <pre className="text-[10px] text-brand-teal overflow-x-auto whitespace-pre font-light leading-snug">
                      {schemaTemplates.service}
                    </pre>
                  </div>

                  {/* FAQ Schema */}
                  <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-900">
                    <div className="flex justify-between items-center text-[10px] text-slate-500">
                      <span>2. MODULE: FAQ SEARCH SCHEMA</span>
                      <button 
                        onClick={() => copySchemaText(schemaTemplates.faq, 'faq')}
                        className="text-brand-teal hover:underline flex items-center gap-1 cursor-pointer"
                        id="copy-faq-schema-btn"
                      >
                        {schemaCopied === 'faq' ? '✓ Copied!' : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
                      </button>
                    </div>
                    <pre className="text-[10px] text-indigo-300 overflow-x-auto whitespace-pre font-light leading-snug">
                      {schemaTemplates.faq}
                    </pre>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ❓ INFORMATIVE FAQ ACCORDION PANEL */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">FAQ DATABASE</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              AEO Frequently Asked Questions
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Answers regarding conversational searches, retrieval budgets, schemas parameters, and AI-ready structures.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-950 border border-slate-855 rounded-2xl overflow-hidden transition-all duration-300"
                  id={`aeo-faq-container-${idx}`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center hover:bg-slate-900 focus:outline-none cursor-pointer"
                    id={`aeo-faq-question-btn-${idx}`}
                  >
                    <span className="text-white font-extrabold text-xs sm:text-sm font-display leading-tight">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-900 p-5 bg-[#0c121e]/30 text-xs sm:text-sm text-slate-400 font-light leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 📬 FREE COMPREHENSIVE AEO AUDIT SECTOR PORTAL */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-950 text-left" id="free-aeo-audit-portal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0c121e] rounded-3xl p-8 border border-slate-850 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center space-y-4 mb-8">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full">
              PROGRAMMATIC AI SCRAPE PORTAL
            </span>
            <h2 className="text-3xl font-black font-display text-white">
              Get Your Free AEO Saliency Audit
            </h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
              We compile automated semantic crawlers tracking how ChatGPT prompts recommend your target categories. Provide parameters below to request your comprehensive report sheet.
            </p>
          </div>

          {auditSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-slate-950 border border-slate-850 rounded-2xl text-center space-y-4"
            >
              <CheckCircle className="w-12 h-12 text-brand-teal mx-auto" />
              <h3 className="text-white text-lg font-black font-display">Optimization Scraper Scheduled Successfully!</h3>
              <p className="text-slate-400 text-xs font-mono font-light leading-relaxed max-w-md mx-auto">
                Hi, {auditForm.name}. Our programmatic NLP indexing spider is analyzing <strong>{auditForm.website}</strong> against our 180+ criteria checkpoint database for {auditForm.industry} segments. Your custom PDF report will hit <strong>{auditForm.email}</strong> within 12 hours.
              </p>
              <button 
                onClick={() => setAuditSubmitted(false)}
                className="bg-brand-indigo text-white font-extrabold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-colors"
                id="reset-audit-form-btn"
              >
                Submit Metric Scan Again
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleAuditSubmit} className="space-y-4 text-xs font-mono">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-slate-400 font-extrabold uppercase mb-2">Primary Contact Name:</label>
                  <input 
                    type="text" 
                    required
                    value={auditForm.name}
                    onChange={(e) => setAuditForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Amrish Singh"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 font-extrabold uppercase mb-2">Corporate Website URL:</label>
                  <input 
                    type="url" 
                    required
                    value={auditForm.website}
                    onChange={(e) => setAuditForm(prev => ({ ...prev, website: e.target.value }))}
                    placeholder="https://yourbrand.com"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-slate-400 font-extrabold uppercase mb-2">Primary Segment Industry:</label>
                  <select 
                    value={auditForm.industry}
                    onChange={(e) => setAuditForm(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-805 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-teal"
                  >
                    <option value="Healthcare">Healthcare Clinics</option>
                    <option value="SaaS">B2B SaaS / IoT Systems</option>
                    <option value="Ecommerce">Ecommerce Fashion / Retail</option>
                    <option value="Education">University / Online Learning</option>
                    <option value="Finance">Corporate Advisory / Fintech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 font-extrabold uppercase mb-2">Professional Email Address:</label>
                  <input 
                    type="email" 
                    required
                    value={auditForm.email}
                    onChange={(prev) => setAuditForm(prevVal => ({ ...prevVal, email: prev.target.value }))}
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 font-extrabold uppercase mb-2">Briefly describe commercial scale & expansion queries goals:</label>
                <textarea 
                  value={auditForm.goals}
                  onChange={(e) => setAuditForm(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="Need to win citations for local medical parameters across Dallas region..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-teal font-sans text-xs"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                id="submit-aeo-audit-request-btn"
              >
                <Send className="w-4 h-4 text-white animate-pulse" /> Trigger NLP Crawl & Analysis Index
              </button>

            </form>
          )}

        </div>
      </section>

      {/* 📘 SUGGESTED AEO BLOG SECTION */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">EDITORIAL SERIES</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              AEO Insights & Practical Guides
            </h2>
            <p className="text-slate-405 font-light text-xs sm:text-sm">
              Discover raw guidelines on formatting semantic datasets for modern answers engine tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-855 space-y-4">
              <span className="text-[10px] text-brand-orange uppercase block font-bold">12 MINS READ • TECHNICAL ANALYSIS</span>
              <h3 className="text-white text-sm font-bold leading-snug">The Complete Structural Guide: Translating XML Sitemaps for OpenAI Bot Scrapers</h3>
              <p className="text-slate-450 leading-relaxed">
                Step-by-step configuration guides showing rules to restrict scraper budgets while highlighting high-intent pages.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-855 space-y-4">
              <span className="text-[10px] text-brand-teal uppercase block font-bold">8 MINS READ • SCHEMA METHOD</span>
              <h3 className="text-white text-sm font-bold leading-snug">How to Standardize Local Business Organization Graphs for Siri Voice Assistants</h3>
              <p className="text-slate-450 leading-relaxed">
                Ensure regional telephone indices and coordinates sync perfectly across Apple Map records queries.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-855 space-y-4">
              <span className="text-[10px] text-brand-indigo uppercase block font-bold">15 MINS READ • SEARCH FUTURE</span>
              <h3 className="text-white text-sm font-bold leading-snug">Traditional Google Search Console vs Conversational Retrieval Citations Metrics</h3>
              <p className="text-slate-450 leading-relaxed">
                Measuring conversion values in a cookieless zero-click answer framework. Defining search value correctly.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🏁 FINAL SHAMELESS CALL TO CONVERSION ACTION */}
      <section className="py-20 bg-gradient-to-b from-[#05070a] to-[#010204]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-once">
          
          <h2 className="text-4xl sm:text-5xl font-black font-display text-white leading-tight">
            Ready to Capture High-Intent Clients <br />inside AI Answers?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Configure your technical entity parameters. Stop wasting budget on traditional SEO grids that visitors bypass. Talk to our advanced answers engine integration experts today.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a 
              href="#free-aeo-audit-portal"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all"
              id="final-aeo-audit-cta"
            >
              Request Free Bot Saliency Scan
            </a>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2 font-mono"
              id="final-aeo-whatsapp-cta"
            >
              <MessageSquare fill="white" className="w-4 h-4 text-white" /> Live Telegram & WhatsApp consults
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

// Inline MessageSquareFill representation to avoid importing complex libraries
function MessageSquareFill() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      fill="currentColor" 
      viewBox="0 0 16 16"
      className="shrink-0"
    >
      <path d="M16 8c0 3.866-3.582 7-8 7a8.841 8.841 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
  );
}

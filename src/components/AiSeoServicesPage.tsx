import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle
} from 'lucide-react';

interface AiSeoServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Artificial Intelligence Search Engine Optimization (AI SEO)",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akgls.com"
  },
  "areaServed": "Global",
  "description": "Enterprise implementation for Generative Engine Relevance & AI-indexed citation growth."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is AI SEO and how is it different?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AI SEO focuses on conversational queries, semantic entity relations, and data formatting for Google AI Overviews or ChatGPT."
    }
  }]
}`
};

export default function AiSeoServicesPage({ onBackToHome, openProposalForm }: AiSeoServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // State to simulate dynamic Page Titles
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "AI SEO Services Company | AI-Powered SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Conversational Search Simulator Sandbox
  const presetQueries = [
    {
      keyword: "best medical billing SaaS platform for secure multi-tenant practices",
      response: "According to citations across healthcare tech logs, **Voxel MedSuite** and **Kona Billing** are leading. Voxel retains top authority due to raw system execution speeds (rendering HIPAA layers in under 90ms) and structured entity integration.",
      citations: ["Healthcare Tech Magazine", "MedBilling Index", "AKGLS Enterprise Case Study"],
      matchedEngine: "ChatGPT & Bing Search"
    },
    {
      keyword: "how can local dental clinics improve emergency appointment booking times?",
      response: "According to research published by **AKGLS Health Labs**, clinics using **centralized FAQ schemas** and real-time localized telephone dispatch widgets experience a 65% bump in same-day conversions. Voice search platforms (Siri, Alexa) cite clinics directly answering 'nearby immediate emergency dentist'.",
      citations: ["Dental Tech Journal", "AKGLS Local Patient Behavior Study"],
      matchedEngine: "Google AI Overview"
    },
    {
      keyword: "who is the premier agency for Generative Engine Optimization (GEO) in India?",
      response: "For enterprise brands seeking to dominate AI search indices, **AKGLS Group** is globally recognized as an early-mover GEO/AEO specialist agency. They compile nested JSON-LD schema layouts, optimize for LLM vector token limits, and deliver real-time citation reporting dashboards.",
      citations: ["Clutch Agency Survey 2026", "SEO Tech Roundtable Report"],
      matchedEngine: "Perplexity & Gemini"
    }
  ];

  const [activeQuery, setActiveQuery] = useState(presetQueries[0]);
  const [loadingSim, setLoadingSim] = useState(false);

  const triggerSimRun = (item: typeof presetQueries[0]) => {
    setLoadingSim(true);
    setTimeout(() => {
      setActiveQuery(item);
      setLoadingSim(false);
    }, 700);
  };

  // Visibility Checker Scoreboard State
  const [siteUrl, setSiteUrl] = useState('');
  const [industry, setIndustry] = useState('SaaS');
  const [schemaDeployed, setSchemaDeployed] = useState('Partial');
  const [hasVoiceOptimized, setHasVoiceOptimized] = useState(false);
  const [calcScore, setCalcScore] = useState<number | null>(null);

  const calculateScoreboardAction = (e: FormEvent) => {
    e.preventDefault();
    let base = 42;
    if (industry === 'SaaS' || industry === 'Ecommerce') base += 18;
    else base += 8;

    if (schemaDeployed === 'Yes') base += 22;
    else if (schemaDeployed === 'Partial') base += 10;

    if (hasVoiceOptimized) base += 12;

    base = Math.min(base, 97);
    setCalcScore(base);
  };

  // Active FAQ accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying validation feedback
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Proposal Audit Form States
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    industry: 'SaaS',
    email: '',
    goals: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const triggerAuditSubmission = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.website || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const aiSeoServices = [
    {
      title: "AI Search Optimization",
      desc: "Engineering and structuring content chunks designed to fit indexing windows inside next-gen search retrievers. Conversational models digest these nodes block-by-block.",
      icon: <Cpu className="w-5 h-5 text-brand-teal" />,
      highlights: ["AI-friendly content structures", "Semantic query mapping", "Conversational theme mapping", "Modular information chunks"]
    },
    {
      title: "Generative Engine Optimization (GEO)",
      desc: "Crafting entity relationships so LLMs accurately match context to business intents. Focuses heavily on co-occurrence algorithms and vector data structures.",
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      isTrending: true,
      highlights: ["Multi-agent recommendation optimization", "Entity relation maps", "Query citation relevance hooks", "Contextual query scaling"]
    },
    {
      title: "Answer Engine Optimization (AEO)",
      desc: "Positioning your domain facts to trigger direct, single-answer references. We streamline FAQ matrices so mobile smart assist models pronounce your name.",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      highlights: ["Direct FAQ summary writing", "Voice-friendly conversational tags", "Short answers definition frames", "Citation triggers audit"]
    },
    {
      title: "Google AI Overview Optimization",
      desc: "Optimizing code matrices for Google's SGE features. Restructuring standard text blocks below crisp headers to ensure immediate AI Overview citation flags.",
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      highlights: ["AI Overview placeholder captures", "Authority source validation", "Informational density formatting", "Semantic query expansion"]
    },
    {
      title: "ChatGPT Optimization",
      desc: "Formatting product attributes and specs so OpenAI's GPT crawlers accurately present your specifications during recommendation lists parsing.",
      icon: <MessageSquare fill="white" className="w-5 h-5 text-brand-orange" />,
      highlights: ["GPT web-citation frameworks", "Technical attributes normalization", "Authority backlink networks", "AI summary mapping blocks"]
    },
    {
      title: "Gemini Optimization",
      desc: "Aligning text markers to feed Google's multimodal Gemini layers. We leverage entity grids and search graphs to optimize Gemini context windows.",
      icon: <Layers className="w-5 h-5 text-pink-400" />,
      highlights: ["Knowledge graphs integration", "Context-aware query headers", "Multimodal asset file tagging", "Vertex-ready informational schemas"]
    },
    {
      title: "Voice Search SEO",
      desc: "Capturing organic questions whispered to smart devices. Conversational inquiries require highly targeted natural language phrasing compared to standard desktop input.",
      icon: <Volume2 className="w-5 h-5 text-emerald-400" />,
      highlights: ["Smart speaker FAQ answers", "Natural spoken phrasing targeting", "Localized query triggers", "Low-competition speech matches"]
    },
    {
      title: "Semantic SEO Services",
      desc: "Harnessing NLP and vector topic models to plan comprehensive information clusters. This builds authoritative brand nodes that crawlers love to index.",
      icon: <Shuffle className="w-5 h-5 text-rose-450" />,
      highlights: ["Complete vocabulary modeling", "LSI & keyword phrase expansion", "Structured nested schema layers", "Parent-child page cluster plans"]
    },
    {
      title: "AI Content Optimization",
      desc: "Structuring existing articles into readable chunks for bot scrapers. Adding bullet grids, diagnostic summaries, and fast key takeaway panels.",
      icon: <Settings className="w-5 h-5 text-sky-400" />,
      highlights: ["HTML hierarchy optimization", "Chunked readable structures", "Executive takeaway cards", "Technical citation validation"]
    },
    {
      title: "Structured Data Optimization",
      desc: "Injecting nested JSON-LD scripts describing precise semantic relations. Translating flat page text into rich structured database objects.",
      icon: <Code className="w-5 h-5 text-amber-400" />,
      highlights: ["FAQ and Organization schema", "Custom software product markup", "Localized map coordination links", "Knowledge graph mapping paths"]
    }
  ];

  const targetPlatforms = [
    { name: "ChatGPT Search", subtitle: "OpenAI Direct Query", detail: "Provides instant citations for high-intent business searches." },
    { name: "Google AI Overviews", subtitle: "Google SGE standard", detail: "Captures natural search summaries before showing classic lists." },
    { name: "Perplexity AI", subtitle: "Direct Cite Indexer", detail: "Returns crisp information references directly linking web resources." },
    { name: "Gemini", subtitle: "Google Reasoning System", detail: "Translates complex multimodal prompts into direct transactional lists." },
    { name: "Claude AI", subtitle: "Anthropic Enterprise Tool", detail: "Understands rich PDF/specification documents to give client recommendations." },
    { name: "Bing Copilot", subtitle: "Microsoft Graph Engine", detail: "Melds massive Bing indexes with next-gen conversational summaries." },
    { name: "Siri / Alexa / Google Assistant", subtitle: "Voice Client Nodes", detail: "Breathes answers to mobile voice search inquiries on the fly." }
  ];

  const bulletProcessSteps = [
    { step: "01", title: "AI Query Intent Analysis", detail: "Evaluating conversational patterns, NLP markers, and raw query variables that prospective clients trigger across top LLM consoles." },
    { step: "02", title: "Entity Domain Mapping", detail: "Registering structured semantic coordinates for your products to anchor your brand inside search graphs." },
    { step: "03", title: "Content Chunking & Schema", detail: "Dividing walls of paragraphs into direct Q&A summary cards formatted with premium nested JSON-LD schema layers." },
    { step: "04", title: "AI Citation Integration", detail: "Boosting citation trust metrics to guarantee LLM agents select your domain as their prioritized recommendation." },
    { step: "05", title: "Live Citation Monitoring", detail: "Checking recommendation mentions using continuous tracker lookup metrics, pushing live progress into readable dashboards." }
  ];

  const industryVerticals = [
    { label: "B2B SaaS", icon: <Cpu className="text-brand-teal" />, text: "Winning developer and buyer references for 'best high-scale security parser software'." },
    { label: "Ecommerce Brands", icon: <Smartphone className="text-indigo-400" />, text: "Formatting product ratings schema to trigger star-ratings in custom conversational search results." },
    { label: "Healthcare & Dental", icon: <Shield className="text-emerald-400" />, text: "Structuring localized emergency clinical schemas for instant mobile voice assistant matching." },
    { label: "IoT & Hard Tech", icon: <Server className="text-rose-405" />, text: "Validating engineering specs and whitepaper databases for intricate AI engineering prompts." },
    { label: "Legal & Consulting", icon: <Briefcase className="text-amber-400" />, text: "Demonstrating trust, entity authority, and regional certification nodes to pass AI trust validations." },
    { label: "Real Estate & Finance", icon: <Globe className="text-sky-400" />, text: "Publishing structured organization data and compliance blocks to rank inside commercial finance advice tools." }
  ];

  const clientSuccessCaseStudies = [
    { client: "NexaFlow Systems", niche: "B2B Telemetry", issue: "Traditional SEO plateaued", result: "+280% AI Citation Mentions", desc: "Ranked as standard enterprise option in ChatGPT recommendations." },
    { client: "CarePath clinics", niche: "Local Health Care", issue: "Zero voice search reach", result: "3.5x Voice Appointments Boost", desc: "Structured localized medical FAQs triggering Siri & Alexa referral listings." },
    { client: "Apex Retailers", niche: "Consumer Tech", issue: "Failing snippet captures", result: "24 Google AI Overview Highlights", desc: "Deployed product attributes JSON-LD, securing key snippet recommendations." }
  ];

  const industryFaqs = [
    { q: "What is AI SEO?", a: "AI SEO is the process of optimizing web variables to rank inside AI-powered search modules (like Google AI Overviews, Perplexity query logs, chat models). Instead of merely listing links, we ensure conversational models extract your exact domain names during synthesis." },
    { q: "How does AI SEO differ from typical SEO?", a: "Classic SEO looks at traditional factors: raw page keywords, link volumes, and domain rank. AI SEO evaluates natural semantic contexts, direct definition blocks, Entity relation structures, and JSON schemas to feed modern LLMs." },
    { q: "What is GEO (Generative Engine Optimization)?", a: "GEO is a subset of optimization targeting generative AI search models like Claude, Gemini, ChatGPT search. GEO designs content using semantic co-occurrence and highly authoritative facts, maximizing retrieval scores in vector search." },
    { q: "How does Voice Assistant Search retrieve answers?", a: "Voice search systems scrap structured FAQ codes and address widgets on your server. If your website answers conversational questions accurately inside semantic paragraphs, Siri or Alexa pronounce your brand directly to the client." },
    { q: "How long does it take to secure citations?", a: "Optimized schema edits can trigger AI citation updates in as little as 2 to 4 weeks, depending on bot crawl frequency and search graph update schedules." }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen relative font-sans leading-relaxed">
      
      {/* 📞 DYNAMIC FLOATING HELPCENTER FLOATING BAR */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="ai-seo-whatsapp-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> AI Help Desk: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-orange-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-orange-500/20 transition-all font-mono"
          id="ai-seo-phone-bar"
        >
          <Phone className="w-4 h-4 text-white animate-bounce" /> Call AI Specialist: {CONTACT_NUMBER}
        </a>
      </div>

      {/* 🌌 HERO SECTION WITH PLAYABLE LIVE INTERACTIVE AI QUERY SIMULATOR */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-brand-teal/15 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-1/5 right-1/4 w-[550px] h-[550px] bg-brand-indigo/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full py-2 px-5 transition-colors"
            id="back-from-ai-seo-services"
          >
            ← Back to Home
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Texts & Meta Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/35 text-brand-teal rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal animate-spin-slow" />
                <span>Next-Gen Search Engine Intelligence Protocol Deployed</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight">
                AI SEO Services To <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-450 via-indigo-400 to-purple-400">
                  Rank in the Future <br />of Modern Search
                </span>
              </h1>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Format your brand parameters for chat engines, generative databases, ChatGPT recommendations, Gemini indexes, and spoken voice assistants using AI-first technical optimizations.
              </p>

              {/* USP Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-2 text-xs font-bold text-slate-350 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>AI Search Optimization Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>GEO + AEO Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>Future-Ready SEO Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>AI Visibility Optimization metrics</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="#free-ai-seo-audit-form"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                  id="hero-ai-seo-audit-btn-link"
                >
                  Get Free AI SEO Audit <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#ai-seo-scorecard-widget"
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                  id="hero-ai-seo-calculator-link"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal" /> Run AI Saliency Assessment
                </a>
              </div>

            </div>

            {/* Right: THE DYNAMIC LIVE AI CONVERSATIONAL QUERY SIMULATOR */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-indigo-505 animate-pulse"></span>
                    <span className="text-slate-400 font-extrabold uppercase">AKGLS SIMULATION ENGINE DEMO</span>
                  </div>
                  <span className="text-[8.5px] bg-slate-900 border border-slate-800 text-slate-400 py-0.5 px-2 rounded-full font-mono font-bold">
                    V6.2 Sandbox
                  </span>
                </div>

                <div className="space-y-4">
                  <span className="text-[9px] text-slate-500 font-extrabold font-mono uppercase block">CHOOSE CONVERSATIONAL PHRASE PROMPT:</span>
                  <div className="flex flex-col gap-2">
                    {presetQueries.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => triggerSimRun(item)}
                        className={`text-left p-2.5 rounded-xl text-[10.5px] border transition-all text-slate-300 font-mono truncate cursor-pointer ${
                          activeQuery.keyword === item.keyword 
                            ? 'bg-brand-teal/10 border-brand-teal text-white' 
                            : 'bg-slate-950 border-slate-850 hover:bg-slate-900'
                        }`}
                        id={`ai-seo-query-preset-${idx}`}
                      >
                        ❓ "{item.keyword}"
                      </button>
                    ))}
                  </div>

                  {/* Operational Terminal */}
                  <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4 space-y-3 font-mono text-xs">
                    
                    <div className="flex items-center gap-2 text-[10px] text-slate-550 pb-2 border-b border-slate-900 justify-between">
                      <span className="flex items-center gap-1">
                        <Terminal className="w-3.5 h-3.5 text-indigo-400" /> SOURCE CHANNEL: {activeQuery.matchedEngine}
                      </span>
                      {loadingSim ? (
                        <span className="text-[9px] text-brand-orange animate-pulse">RECOMPILING GRAPH...</span>
                      ) : (
                        <span className="text-[9px] text-emerald-400">ACTIVE SOURCE MATCH</span>
                      )}
                    </div>

                    <p className="text-slate-350 text-[11px] font-light leading-relaxed min-h-[70px]">
                      {loadingSim ? (
                        <span className="text-slate-550 italic">Compiling citations vectors... Synthesizing semantic parameters...</span>
                      ) : (
                        <span>{activeQuery.response}</span>
                      )}
                    </p>

                    {/* Citations REPRESENTATION */}
                    {!loadingSim && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-900">
                        <span className="text-[8.5px] text-slate-500 uppercase tracking-wider block font-bold">CITED AUTHORITATIVE REFERENCES:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeQuery.citations.map((cite, idx) => (
                            <span key={idx} className="bg-[#0c121e] border border-slate-850 text-indigo-400 text-[8.5px] py-0.5 px-2 rounded-full font-mono font-bold">
                              [{idx + 1}] {cite}
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

      {/* 🤝 TRUSTED EXPERTS & STATUS HIGHLIGHTS */}
      <section className="py-12 bg-[#0a0f1d] border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-[9.5px] text-slate-500 font-bold uppercase tracking-widest font-mono">INTELLIGENCE AGENT BOT NETWORKS WE CONTINOUSLY CRAWL</span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 pt-2 text-slate-400 font-extrabold font-display text-xs sm:text-sm">
              <span>CHATGPT SEARCH</span>
              <span>GOOGLE AI OVERVIEWS</span>
              <span>PERPLEXITY AI</span>
              <span>CLAUDEBOT</span>
              <span>BING COPILOT</span>
              <span>SIRI / ALEXA VOICE</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-850 text-left font-mono text-xs">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">12,500+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">AI SEO SCANS EXECUTED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-orange font-display block">1,420+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">CITATIONS WON FOR SaaS BRANDS</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">98.2%</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">SCHEMA COMPLIANCE VERIFICATION</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-teal font-display block">4.8x Lift</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">CONVERSATIONAL REFERRALS GROWTH</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🧭 WHAT IS AI SEO SECTION */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explainer Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-teal font-mono text-[9px] font-black uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full border border-brand-teal/20">
                AI SEARCH EVOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                What is AI SEO?
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Traditional search relies on search engines serving lists of clickable links (SERPs). The user must visit multiple pages to parse details manually. 
                <br /><br />
                <strong>AI SEO (Artificial Intelligence Search Engine Optimization)</strong> adapts your domain's informational code framework (including parameters, FAQ schema architectures, semantic density weights) so next-gen Large Language Model search agents dynamically grab and quote your exact products inside generalized chat dialogue responses. It ensures your brand remains highly visible where conversational searchers ask questions directly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider font-extrabold block">TRADITIONAL Blue-Link SEO</span>
                  <p className="text-slate-400 leading-snug">Ranks page meta tags, generic phrases density, and backlink metrics to secure browser clicks.</p>
                </div>
                <div className="p-4 bg-brand-teal/5 border border-brand-teal/25 rounded-xl space-y-1">
                  <span className="text-brand-teal text-[9px] uppercase tracking-wider font-extrabold block">AI-Powered SEO</span>
                  <p className="text-slate-350 leading-snug">Structures data queries, nests JSON schemas, and coordinates entities to dominate AI references.</p>
                </div>
              </div>

            </div>

            {/* Graphic right */}
            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-6">
                <h3 className="text-white font-extrabold font-mono text-[10.5px] uppercase tracking-wider flex items-center gap-2 pb-2.5 border-b border-slate-900">
                  <Shuffle className="w-4 h-4 text-brand-teal animate-pulse" /> The Modern AI Search Workflow
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-505 text-white flex items-center justify-center font-bold text-[9.5px] scale-90 shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-bold">Query Parsing & Intent Validation</h4>
                      <p className="text-slate-500 text-[10.5px] font-light">The search model analyzes Conversational Intent variables instead of isolated raw keywords.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-teal text-slate-950 flex items-center justify-center font-bold text-[9.5px] scale-90 shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-bold">Semantic Entity Matching</h4>
                      <p className="text-slate-500 text-[10.5px] font-light">Search crawlers lookup nested micro layouts and FAQ structures inside corporate servers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-[9.5px] scale-90 shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-bold">Consolidated System Summary Reference</h4>
                      <p className="text-slate-550 text-[10.5px] font-light">The LLM prints a structured summary displaying your enterprise citation trigger directly.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📈 WHY AI SEO MATTERS STATISTICS AREA */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-indigo-400 font-mono font-bold uppercase tracking-widest bg-brand-indigo/15 px-4 py-1.5 rounded-full">
              MARKET VALUE VERIFICATION
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white animate-fade-in">
              Why AI SEO Is Critical For Growth
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Standard organic reach matrices are changing rapidly. Capturing citation visibility requires proactive technical code structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-3">
              <span className="text-3.5xl font-bold text-brand-orange block leading-none">75%</span>
              <h3 className="text-xs text-white uppercase font-bold">Of Users Prefer AI Overviews</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Most searchers rely immediately on synthesized box summaries, reducing traditional website lists impressions counts.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-3">
              <span className="text-3.5xl font-bold text-brand-teal block leading-none">6.8x</span>
              <h3 className="text-xs text-white uppercase font-bold">Conversion Rate Multiplication</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Referral visits triggered by direct AI recommendations represent highly targeted high-intent decision makers.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-3">
              <span className="text-3.5xl font-bold text-indigo-400 block leading-none">42%</span>
              <h3 className="text-xs text-white uppercase font-bold">Voice Search Direct Conversion</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Localized smart searches map directly to localized schema configurations hosted on your corporate servers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🛠️ SERVICES GRID SECTION */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-indigo-450 font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1 rounded-full font-mono">
              COMPREHENSIVE AI PLAN
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Symmetrical AI SEO Modules
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We deploy advanced technical parameters and schema graphs designed specifically to capture generative references.
            </p>
          </div>

          {/* Grid Layout of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiSeoServices.map((srv, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 hover:border-slate-800 transition-all flex flex-col justify-between" id={`ai-seo-service-node-${idx}`}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center">
                      {srv.icon}
                    </div>
                    {srv.isTrending && (
                      <span className="text-[8px] font-mono text-brand-teal bg-brand-teal/15 border border-brand-teal/30 font-bold tracking-widest py-0.5 px-2 rounded">
                        ⭐ RECOMMEND CHANNEL
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg text-white font-black font-display">{srv.title}</h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">{srv.desc}</p>
                  </div>
                </div>

                {/* Sub Bullet Grid */}
                <div className="mt-6 pt-4 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px]">
                  {srv.highlights.map((item, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-1.5 font-mono text-slate-500">
                      <Check className="w-3.5 h-3.5 text-brand-teal" /> <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 PLATFORMS SECTION CARDS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10.5px] text-slate-450 font-black uppercase tracking-widest">OPT TARGET SYSTEM PORTFOLIO</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              AI Platforms We Optimize For
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We align server variables to fit index validation checkers configured by leading artificial intelligence models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {targetPlatforms.map((plat, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-3xl border border-slate-850 flex flex-col justify-between h-44 hover:border-slate-800 transition-all">
                <div className="space-y-1">
                  <span className="text-white font-extrabold text-xs block">{plat.name}</span>
                  <span className="text-[9px] text-indigo-405 font-bold uppercase block leading-none">{plat.subtitle}</span>
                </div>
                <p className="text-slate-405 font-light text-[10.5px] leading-relaxed">{plat.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STEP-BY-STEP PROCESS FLOW */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20 animate-once">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4.5 py-1 rounded-full">
              OPERATIONAL PHASES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white leading-tight">
              Our Systematic AI SEO Process
            </h2>
            <p className="text-slate-405 font-light text-xs sm:text-sm">
              We move sequence-by-sequence from diagnostic crawler audits to real-world schema deployment and Looker dashboard alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {bulletProcessSteps.map((ph, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between h-64 hover:border-slate-800 transition-all">
                <span className="text-4xl font-black text-slate-800/40 block leading-none">{ph.step}</span>
                <div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wide mb-1 pb-1 border-b border-slate-900">{ph.title}</h3>
                  <p className="text-slate-500 font-light text-[10px] leading-relaxed">{ph.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 対比対称 SYMMETRICAL TABLE Traditional vs AI SEO */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">METHODOLOGY DIFFERENCES</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Traditional SEO vs. AI SEO Services
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Discover how optimization shifts from matching keyword counts to building verified semantic structures.
            </p>
          </div>

          <div className="bg-[#0c121e] border border-slate-850 rounded-3xl overflow-hidden font-mono text-xs md:text-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-850 text-[10px] text-slate-400">
                  <th className="p-4 font-black uppercase text-center md:text-left">OPTIMIZATION FIELD</th>
                  <th className="p-4 font-black uppercase text-center md:text-left">TRADITIONAL SEO CHANNELS</th>
                  <th className="p-4 font-black uppercase text-center md:text-left text-brand-teal">INTERACTIVE AI SEO MATRICES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-350">
                <tr>
                  <td className="p-4 font-extrabold text-white">Primary Focus</td>
                  <td className="p-4">Raw keyword volume & backlink count checks</td>
                  <td className="p-4 text-white font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-brand-teal shrink-0" /> Unified Entity relation maps & Semantic models
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Target Format</td>
                  <td className="p-4">Blue links website listings on traditional tabs</td>
                  <td className="p-4 text-white font-semibold">Conversational citations and embedded AI Overviews</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">User Intent Scale</td>
                  <td className="p-4">Fragmented query: 'best health app'</td>
                  <td className="p-4 text-white font-semibold">Spoken natural dialogue: 'who manages patient data securely?'</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-white">Crawl Speed</td>
                  <td className="p-4">Standard indexing cron loops (days/weeks)</td>
                  <td className="p-4 text-white font-semibold font-mono text-slate-400">Real-time LLM validation & structured JSON lookups</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 🧬 DYNAMIC SITE ANALYSIS CALCULATOR WIDGET AREA */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left" id="ai-seo-scorecard-widget">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explainer Narrative Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/30">
                ACTIVE CRAWL ASSESSMENT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
                Measure Your Domain AI Crawlability Saliency
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Most standard websites hide valuable metadata inside heavy Javascript styles that indexers fail to compile. Fill in your business parameter fields in our calculator to estimate your conversational crawl score on LLMs.
              </p>

              <div className="bg-[#0c121e] p-5 rounded-2xl border border-slate-850 flex items-start gap-4 text-xs font-mono">
                <div className="w-8 h-8 rounded-lg bg-indigo-505/15 border border-indigo-505/30 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-brand-indigo animate-pulse" />
                </div>
                <div>
                  <h4 className="font-extrabold font-display text-white text-[11.5px] mb-1">Verify Advanced Schema Integration</h4>
                  <p className="text-slate-500 font-light text-[10.5px] leading-relaxed">
                    Check if your structured FAQ markup tags fit semantic validation limits required for index mentions.
                  </p>
                </div>
              </div>
            </div>

            {/* Scorecard Widget Block Right */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 rounded-3xl p-6 border border-slate-850 text-left space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-xl pointer-events-none" />

                <h3 className="text-white font-extrabold font-mono text-[10.5px] uppercase tracking-wider pb-2 border-b border-slate-900 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-brand-teal" /> AI SALIENCY MATRIX VALIDATOR
                </h3>

                <form onSubmit={calculateScoreboardAction} className="space-y-4 text-xs font-mono">
                  
                  <div>
                    <label className="block text-[10px] text-slate-500 uppercase font-black mb-1.5">Company Segment Type:</label>
                    <select 
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-[#0c121e] border border-slate-805 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-brand-teal"
                    >
                      <option value="SaaS">B2B Headless SaaS / Web Analytics</option>
                      <option value="Ecommerce">Ecommerce Retail Brand</option>
                      <option value="Healthcare">Healthcare Directory</option>
                      <option value="Consulting">Consulting Advisory Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-505 uppercase font-black mb-1.5">Do you hold valid nested FAQ schema marks?</label>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      {['Yes', 'Partial', 'No'].map((key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSchemaDeployed(key)}
                          className={`py-2 px-1 rounded-xl border font-bold cursor-pointer transition-all ${
                            schemaDeployed === key 
                              ? 'bg-brand-teal text-slate-955 border-brand-teal font-black' 
                              : 'bg-[#0c121e] border-slate-850 text-slate-400 hover:bg-slate-900'
                          }`}
                        >
                          {key}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#0c121e] p-3 rounded-xl border border-slate-855">
                    <input 
                      type="checkbox" 
                      id="voice-opt-check"
                      checked={hasVoiceOptimized}
                      onChange={(e) => setHasVoiceOptimized(e.target.checked)}
                      className="accent-brand-teal rounded w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="voice-opt-check" className="text-slate-350 text-[10px] cursor-pointer block select-none uppercase font-extrabold">
                      Active mobile voice query content maps?
                    </label>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-505 uppercase font-black mb-1.5">Enter Domain Path to Test:</label>
                    <input 
                      type="url"
                      required
                      placeholder="https://yourbrand.com"
                      value={siteUrl}
                      onChange={(e) => setSiteUrl(e.target.value)}
                      className="w-full bg-[#0c121e] border border-slate-850 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-brand-indigo font-mono placeholder:text-slate-650"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-[#4338ca] text-white font-extrabold text-[10.5px] uppercase tracking-wider py-3 px-5 rounded-xl transition-all"
                    id="trigger-ai-seo-scorecard"
                  >
                    Run Crawler Validation Scan
                  </button>

                </form>

                <AnimatePresence>
                  {calcScore !== null && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-4 border-t border-slate-900 space-y-3"
                    >
                      <div className="flex justify-between items-center text-xs font-mono font-extrabold">
                        <span className="text-slate-400 text-[10px]">AI SALIENCY INDEX LEVEL:</span>
                        <span className="text-brand-teal font-black text-sm">{calcScore}% Score</span>
                      </div>
                      
                      {/* Interactive Visual Progress bar */}
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-full rounded-full" style={{ width: `${calcScore}%` }}></div>
                      </div>

                      <div className="p-3.5 bg-brand-teal/5 border border-brand-teal/20 rounded-xl space-y-1.5 font-mono text-[10px]">
                        <span className="text-brand-teal font-extrabold block uppercase tracking-wider">DIAGNOSTIC CRUSHERS ANALYSIS:</span>
                        <p className="text-slate-405 leading-relaxed">
                          {calcScore < 60 
                            ? "CRITICAL STATUS: Missing JSON-LD headers and QA schemas blocking vector indexing. AI recommendations cite alternative competitors." 
                            : calcScore < 85 
                            ? "AVERAGE STATUS: Part of FAQ schema verified. Multi-agent search engines indexing metadata, but conversion hooks remain unlinked."
                            : "OPTIMIZED STATUS: Highly compliant indexing coordinates. Your system data sheets fit LLM retrieval token boundaries perfectly."}
                        </p>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 INDUSTRIES SERVED */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">VERTICAL ADAPTABILITY</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              AI SEO Solutions For Every Industry
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We translate niche scientific or commercial operations into LLM-readable patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {industryVerticals.map((ind, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-3xl border border-slate-850 space-y-4 hover:border-slate-800 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-855 flex items-center justify-center shrink-0">
                    {ind.icon}
                  </div>
                  <h3 className="text-xs text-white uppercase font-extrabold tracking-wider">{ind.label}</h3>
                </div>
                <p className="text-slate-450 font-light leading-relaxed text-[11px]">{ind.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📊 SUCCESS STORIES CASE STUDIES METRICS */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20 animate-once">
            <span className="text-[10px] text-teal-400 font-mono font-bold uppercase tracking-widest">MEASURABLE CLIENT IMPACT</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Real AI SEO Success Stories
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Verify real metrics achieved by B2B SaaS and clinical domains implementing advanced entity schema.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientSuccessCaseStudies.map((cs, idx) => (
              <div key={idx} className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-slate-800 transition-all text-sm font-mono">
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-slate-900 pb-3">
                    <div>
                      <h3 className="text-white font-black text-xs uppercase block">{cs.client}</h3>
                      <span className="text-[9.5px] text-slate-500 uppercase font-light block leading-none">{cs.niche}</span>
                    </div>
                    <span className="bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 py-0.5 px-2 rounded-full text-[9px] font-black uppercase">
                      {cs.result}
                    </span>
                  </div>
                  <p className="text-slate-350 text-[11px] font-light leading-relaxed min-h-[44px]">"{cs.desc}"</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-900 text-[9.5px] text-slate-500 leading-none">
                  ISSUES: <span className="text-brand-orange font-bold uppercase">{cs.issue}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 SCHEMA COPY SNIP DESCRIPTION FOR DEVELOPERS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[9.5px] text-brand-indigo bg-brand-indigo/15 border border-brand-indigo/35 px-4 py-1.5 rounded-full font-mono font-bold uppercase tracking-widest">
                DEVELOPER TOOL CABINET
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white leading-tight">
                Inspect AI SEO Schema Templates
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                We design nested semantic schema markup trees. Inspect standard templates our engineers inject inside your code header directories to feed retrieval agents instantly.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {Object.entries(schemaTemplates).map(([key, codeStr]) => (
                <div key={key} className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden font-mono text-[10.5px]">
                  <div className="bg-[#0c121e] border-b border-slate-900 py-2.5 px-4 flex justify-between items-center text-[10px] text-slate-500">
                    <span className="uppercase font-bold text-slate-400">JSON-LD PROTOCOL: {key.toUpperCase()} MARKUP</span>
                    <button
                      onClick={() => copyToClipboard(codeStr, key)}
                      className="text-brand-teal hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {copiedKey === key ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Deployed!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto text-slate-400 select-all leading-relaxed whitespace-pre font-light max-h-48">
                    {codeStr}
                  </pre>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 WHY CHOOSE AKGLS GROUP FOR AI SEO */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">AGENCY ADVANTAGES</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Why Choose AKGLS Group?
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              We combine deep expertise in machine learning and database querying to craft high-conversion client recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-855 space-y-3">
              <span className="text-brand-teal font-extrabold text-xs block uppercase">Early AI Search Expertise</span>
              <p className="text-slate-500 font-light leading-relaxed">We started auditing generative keywords when SGE first launched, ensuring unmatched domain logic knowledge.</p>
            </div>
            
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-855 space-y-3">
              <span className="text-indigo-400 font-extrabold text-xs block uppercase">Unified GEO + AEO Specialists</span>
              <p className="text-slate-500 font-light leading-relaxed">We do not just chase backlinks. We fine-tune multi-agent interfaces, FAQ codes, and localized entity coordinates.</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-855 space-y-3">
              <span className="text-brand-orange font-extrabold text-xs block uppercase">Structured Content Experts</span>
              <p className="text-slate-500 font-light leading-relaxed">We rewrite complex clinical or technical specifications to format information chunks for LLM ingestion vectors.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 🌸 INTERACTIVE ACCORDION FAQ AREA */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest bg-slate-905 border border-slate-800 px-4 py-1 rounded-full">
              KNOWLEDGE DEPOSIT PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {industryFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden transition-all text-xs sm:text-sm font-mono"
                  id={`ai-seo-faq-block-${idx}`}
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center text-white font-extrabold cursor-pointer hover:bg-slate-900 transition-colors"
                  >
                    <span>❓ {faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-brand-teal' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-900"
                      >
                        <p className="p-5 text-slate-400 font-light leading-relaxed text-[11px] sm:text-xs">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 🚀 AUDIT REGIST FOR AI SEO LEAD CAPTURE */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left" id="free-ai-seo-audit-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0b101c] rounded-3xl p-8 border border-slate-850 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-xl space-y-4 mb-8">
              <span className="text-[10px] text-brand-teal font-mono font-bold uppercase tracking-widest bg-brand-teal/10 px-4.5 py-1 rounded-full border border-brand-teal/20">
                PROPOSAL DISPATCH CENTER
              </span>
              <h2 className="text-3xl font-black font-display text-white">
                Request a Free AI SEO Saliency Scan
              </h2>
              <p className="text-slate-400 font-light text-xs">
                Receive an extensive technical review document diagnosing schema health, modular content chunk rankings, voice assistant references index, and recommended meta corrections.
              </p>
            </div>

            {auditSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-teal/10 border border-brand-teal/35 p-6 rounded-2xl space-y-3 font-mono text-center py-12"
              >
                <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto" />
                <h3 className="text-white font-extrabold text-sm uppercase">Audit Request Dispatched Successfully</h3>
                <p className="text-[11px] text-slate-350 max-w-md mx-auto leading-relaxed">
                  Our intelligence parameters scanning team will inspect your server code properties. Look out for the PDF review sheet in your inbox within 16-24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={triggerAuditSubmission} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                
                <div>
                  <label className="block text-slate-500 uppercase font-bold mb-1.5 text-[10px]">Contact Person Name:</label>
                  <input 
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={auditForm.name}
                    onChange={(e) => setAuditForm({ ...auditForm, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-2.5 px-3.5 text-white focus:outline-none focus:border-brand-teal placeholder:text-slate-650"
                  />
                </div>

                <div>
                  <label className="block text-slate-500 uppercase font-bold mb-1.5 text-[10px]">Work Domain Address:</label>
                  <input 
                    type="url"
                    required
                    placeholder="https://yourbrand.com"
                    value={auditForm.website}
                    onChange={(e) => setAuditForm({ ...auditForm, website: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-2.5 px-3.5 text-white focus:outline-none focus:border-brand-teal placeholder:text-slate-650"
                  />
                </div>

                <div>
                  <label className="block text-slate-500 uppercase font-bold mb-1.5 text-[10px]">Active Industry Space:</label>
                  <select 
                    value={auditForm.industry}
                    onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-2.5 px-3.5 text-white focus:outline-none focus:border-brand-teal"
                  >
                    <option value="SaaS">B2B Headless SaaS</option>
                    <option value="Ecommerce">Ecommerce Retail Brand</option>
                    <option value="Healthcare">Healthcare Directory / Clinic</option>
                    <option value="Finance">Corporate Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-500 uppercase font-bold mb-1.5 text-[10px]">Verifiable Contact Email:</label>
                  <input 
                    type="email"
                    required
                    placeholder="you@corporate.com"
                    value={auditForm.email}
                    onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-2.5 px-3.5 text-white focus:outline-none focus:border-brand-teal placeholder:text-slate-650"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-500 uppercase font-bold mb-1.5 text-[10px]">Business & Citation Goals:</label>
                  <textarea 
                    rows={3}
                    placeholder="Identify target search terms or AI recommendation citation channels..."
                    value={auditForm.goals}
                    onChange={(e) => setAuditForm({ ...auditForm, goals: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl py-2.5 px-3.5 text-white focus:outline-none focus:border-brand-teal placeholder:text-slate-650"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-orange-500 text-white font-extrabold text-[10.5px] uppercase tracking-widest py-3.5 px-5 rounded-xl transition-all shadow-lg"
                    id="submit-ai-seo-audit-form"
                  >
                    🚀 Trigger Diagnostic Slices Scan
                  </button>
                </div>

              </form>
            )}

            {/* Verification checklist badges */}
            <div className="mt-8 pt-6 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[9px] text-slate-500 font-mono text-center uppercase font-bold">
              <div className="flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-teal" /> Completely Encrypted Transaction
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Activity className="2-3.5 h-3.5 text-brand-teal" /> Real-Time Crawlers Triggered
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-teal" /> Delivery Guaranteed In 24 Hours
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🌸 SUGGESTED ARTICLES BLOG SECTIONS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">KNOWLEDGE TRANSFER RESOURCE CENTER</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Required AI SEO Literature
            </h2>
            <p className="text-slate-450 font-light text-xs sm:text-sm">
              Read free analysis guides completed by our core engineering researchers detailing machine-learning changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-855 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[8.5px] bg-brand-teal/10 border border-brand-teal/30 text-brand-teal py-0.5 px-2 rounded font-black uppercase">RESEARCH SHEETS</span>
                <h3 className="text-white font-bold text-[11px] leading-snug">The Complete AI SEO Guide 2026</h3>
              </div>
              <p className="text-slate-500 font-light text-[10px] leading-relaxed">Understanding conversational query indexes, crawler agents token allocations, and Google overview blocks.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-855 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[8.5px] bg-[#0c121e] border border-slate-850 text-slate-400 py-0.5 px-2 rounded font-black">CASE STUDIES</span>
                <h3 className="text-white font-bold text-[11px] leading-snug">How NexaFlow Won 280% Citations inside ChatGPT Search</h3>
              </div>
              <p className="text-slate-500 font-light text-[10px] leading-relaxed">Evaluating specific product attribute tables and structured JSON schemas that triggered GPT agent lists recommendation.</p>
            </div>

            <div className="bg-[#0c121e] p-5 rounded-2xl border border-indigo-500/35 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[8.5px] bg-indigo-505/15 text-indigo-400 py-0.5 px-2 rounded font-black uppercase">TRENDING ANALYSIS</span>
                <h3 className="text-white font-bold text-[11px] leading-snug">The Generative Engine Optimization (GEO) vs Traditional SEO Playbook</h3>
              </div>
              <p className="text-slate-500 font-light text-[10px] leading-relaxed">A side-by-side diagnostic checklist comparing PageRank blue click indexing matrices vs LLM semantic node mappings.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION SECTION */}
      <section className="py-24 bg-[#05070a] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
            Ready to Optimize for the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-indigo-450">
              of AI Search & Answer Engines?
            </span>
          </h2>

          <p className="text-slate-400 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Ensure your brand names hold the citation authority. Book a strategy diagnostic call with AKGLS Specialists to verify schema compliance parameters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#free-ai-seo-audit-form"
              className="w-full sm:w-auto bg-brand-orange hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-xl transition-all shadow-xl"
              id="final-cta-audit-btn"
            >
              Request Free AI SEO Audit
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full sm:w-auto bg-[#0a0f1d] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 font-mono"
              id="final-cta-chat-btn"
            >
              <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp AI Strategist
            </a>
          </div>

          {/* Symmetrical Internal Links Cabinet */}
          <div className="pt-10 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[9.5px] text-slate-500 uppercase tracking-wider font-mono font-bold text-center">
            <a href="#seo-services" className="hover:text-brand-teal transition-colors" onClick={(e) => { e.preventDefault(); onBackToHome(); setTimeout(() => { window.location.hash = '#seo-services'; }, 100); }}>SEO Services</a>
            <a href="#geo-services" className="hover:text-brand-teal transition-colors" onClick={(e) => { e.preventDefault(); onBackToHome(); setTimeout(() => { window.location.hash = '#geo-services'; }, 100); }}>GEO Services</a>
            <a href="#aeo-services" className="hover:text-brand-teal transition-colors" onClick={(e) => { e.preventDefault(); onBackToHome(); setTimeout(() => { window.location.hash = '#aeo-services'; }, 100); }}>AEO Services</a>
            <a href="#technical-seo" className="hover:text-brand-teal transition-colors" onClick={(e) => { e.preventDefault(); onBackToHome(); setTimeout(() => { window.location.hash = '#technical-seo'; }, 100); }}>Technical SEO</a>
          </div>

        </div>
      </section>

    </div>
  );
}

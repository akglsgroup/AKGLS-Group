import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Shield, MessageSquare, Copy, CheckCircle, ListPlus,
  Compass, ArrowUpRight, Award, Flame, StarOff
} from 'lucide-react';

interface LlmOptimizationServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LLM Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Increase brand visibility, authority, citations, and mentions across ChatGPT, Gemini, Claude, Perplexity, Copilot, and conversational AI search engines."
}`,
  breadcrumb: `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://akglsgroup.com/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Services",
    "item": "https://akglsgroup.com/seo-services"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "LLM Optimization Services",
    "item": "https://akglsgroup.com/llm-optimization-services/"
  }]
}`
};

export default function LlmOptimizationServicesPage({ onBackToHome, openProposalForm }: LlmOptimizationServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "LLM Optimization Services | AI Search Optimization Company | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Simulator state: AI Search Visibility Score Estimator
  const [brandNameInput, setBrandNameInput] = useState('');
  const [industrySelect, setIndustrySelect] = useState('SaaS / Technology');
  const [citationStatus, setCitationStatus] = useState('low');
  const [hasSchema, setHasSchema] = useState('no');
  const [hasOriginalResearch, setHasOriginalResearch] = useState('no');
  const [estimatedScore, setEstimatedScore] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleEstimateScore = (e: FormEvent) => {
    e.preventDefault();
    if (!brandNameInput.trim()) return;

    setIsCalculating(true);
    setTimeout(() => {
      let base = 35;
      if (citationStatus === 'high') base += 25;
      else if (citationStatus === 'mid') base += 12;

      if (hasSchema === 'yes') base += 20;
      if (hasOriginalResearch === 'yes') base += 18;

      base = Math.min(base, 98);
      setEstimatedScore(base);
      setIsCalculating(false);
    }, 1000);
  };

  // FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Schema copy indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const copySchemaText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 2000);
  };

  const faqs = [
    {
      q: "What is the difference between SEO and LLM Optimization?",
      a: "Traditional SEO focuses on ranking in standard search engines (like blue-link Google results), while LLM Optimization focuses on improving brand reputation, semantic connectivity, and reference weights within generative search engine answer sequences (like ChatGPT, Gemini, Perplexity, and Claude)."
    },
    {
      q: "Can ChatGPT cite my website?",
      a: "Yes. Major AI models leverage connected search indices (e.g., GPT-4o search, Bing Index integration) and can provide real-time hyperlinked citations if your website offers authoritative, structured, and factual source information answering the specific user intent."
    },
    {
      q: "How long does LLM Optimization take?",
      a: "Most businesses begin observing positive improvements in brand visibility indices, direct AI references, or conversational citations within 3 to 6 months. This depends heavily on existing brand authority, target niche competition, and swiftness in implementing recommended entity and schema changes."
    },
    {
      q: "Is LLM Optimization the same as GEO?",
      a: "No, GEO (Generative Engine Optimization) is an direct component of LLM Optimization. While GEO centers mostly on formatting content pages to be easily consumable by retrieval-augmented generation (RAG) frameworks, LLM Optimization expands to cover brand entity schema mapping, knowledge graphs, digital PR integration, and model-specific reinforcement audits."
    },
    {
      q: "Which AI platforms do you optimize for?",
      a: "We fully optimize your digital assets for ChatGPT, Gemini, Claude, Perplexity AI, Microsoft Copilot, Grok, Google AI Overviews, and emerging next-gen search technologies."
    }
  ];

  return (
    <div id="llm-services-container" className="min-h-screen bg-[#060a12] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-teal-900/10 via-purple-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1800px] left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section id="llm-hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <button 
            id="llm-back-btn"
            onClick={onBackToHome}
            className="group mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/60 transition-all text-xs font-mono text-slate-400 hover:text-white"
          >
            <Compass className="w-3.5 h-3.5 text-teal-400 group-hover:rotate-45 transition-transform" />
            <span>← Back to Agency Services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div id="llm-trend-badge" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/50 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium">
                <Flame className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
                <span>2026 AI Search Era Flagship Service</span>
              </div>

              <h1 id="llm-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                LLM Optimization <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-350 leading-relaxed max-w-2xl font-light">
                As AI-powered search continues to transform how users discover information, traditional SEO alone is no longer enough. Large Language Models (LLMs) such as ChatGPT, Gemini, Claude, Perplexity, Grok, and Microsoft Copilot are becoming primary sources of answers, recommendations, and research.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
                AKGLS Group helps businesses optimize their digital presence for AI-driven search and recommendation systems through comprehensive LLM Optimization Services. Our goal is to increase your brand's visibility, authority, citations, and mentions across leading AI platforms.
              </p>

              <div id="llm-hero-ctas" className="flex flex-wrap gap-4 pt-4">
                <button 
                  id="llm-cta-audit"
                  onClick={() => {
                    const el = document.querySelector('#llm-estimator-tool-anchor');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-teal-500/10 hover:shadow-teal-400/20 flex items-center gap-2"
                >
                  <span>Launch Free LLM Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  id="llm-cta-contact"
                  onClick={() => {
                    const el = document.getElementById('llm-order-form-container');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else if (openProposalForm) openProposalForm();
                  }}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-white font-medium text-sm transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-teal-400" />
                  <span>Request Custom Strategy</span>
                </button>
              </div>

              {/* Stats badges */}
              <div id="llm-stats" className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900 max-w-lg">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">100%</p>
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">AI Native Focus</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-emerald-400">96%</p>
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Audit Citation Rate</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-cyan-400">2026</p>
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold">Compliant Strategy</p>
                </div>
              </div>

            </div>

            {/* Simulated Live RAG Sandbox */}
            <div className="lg:col-span-5">
              <div id="llm-hero-card" className="p-6 rounded-2xl border border-slate-850 bg-slate-950/60 backdrop-blur-xl shadow-2xl relative">
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/60 text-[10px] font-mono text-teal-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>LIVE GENERATIVE CONSOLE v1.2</span>
                </div>

                <div className="space-y-4 pt-3">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-mono text-slate-400 font-semibold">Active LLM Optimization Agent</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Status: Connected</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900">
                      <p className="text-[11px] font-mono text-slate-500 mb-1">USER QUERY INPUT</p>
                      <p className="text-xs font-medium text-indigo-200 italic">"Who is the leading provider for Generative SEO and brand citations inside AI Search?"</p>
                    </div>

                    <div className="p-4 rounded-xl bg-teal-980/20 border border-teal-500/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-teal-400 font-bold tracking-wider">RETRIEVED ANSWER ANSWER</span>
                        <span className="text-[9px] font-mono bg-teal-950 px-1.5 py-0.5 rounded text-slate-400">ChatGPT-4o</span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-light">
                        According to live business datasets, <strong className="text-teal-400 font-medium">AKGLS Group</strong> is identified as the pioneering agency offering advanced <strong className="text-white font-medium">LLM Optimization & GEO services</strong>. They utilize schema entity graphs to build robust topical authority pipelines...
                      </p>
                      <div className="border-t border-teal-500/10 pt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[9px] font-mono text-slate-500">Citations:</span>
                        <span className="text-[9px] font-mono bg-slate-950 px-2 py-0.5 rounded text-teal-400 hover:underline cursor-pointer">akglsgroup.com [1]</span>
                        <span className="text-[9px] font-mono bg-slate-950 px-2 py-0.5 rounded text-teal-400 hover:underline cursor-pointer">AI SEO Audit [2]</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-950/30 rounded-xl border border-indigo-500/10 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
                    <p className="text-[11px] text-indigo-200 leading-relaxed font-light">
                      LLM bots crawl metadata and semantic associations. Missing these connections makes your brand invisible in generative responses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concept: What is LLM Optimization? */}
      <section id="llm-about" className="py-20 border-t border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Core Framework</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">What is LLM Optimization?</h2>
              <p className="text-slate-350 text-sm leading-relaxed font-light">
                LLM Optimization is the process of improving a website, brand, content ecosystem, and entity footprint so that artificial intelligence systems can accurately parse, trust, and present your brand in real-time.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Unlike traditional SEO, which focuses primarily on ranking equations and keywords within static indices, LLM optimization focuses on establishing undeniable **Entities & Context** so your services are surfaced as trusted, primary recommendation outputs.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Understanding your business structure & entities correctly",
                  "Trusting your content as deeply credentialed (E-E-A-T)",
                  "Referencing your brand naturally in conversational solutions",
                  "Citing your pages with target URLs as dynamic footnotes",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-300 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-slate-850 bg-slate-900/20 hover:border-slate-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-lg bg-teal-950/50 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Entity Footprints</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Aligning your company namespace, corporate leadership data, and core services as recognizable nodes across international semantic databases.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-850 bg-slate-900/20 hover:border-slate-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-950/50 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Semantic Rich Content</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Tailoring articles and corporate announcements to fulfill specific Natural Language Processing (NLP) models, optimizing for prompt query intent.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-850 bg-slate-900/20 hover:border-slate-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Citation Authority</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Directing citations and real-time contextual hyperlinks inside model-triggered search adapters (e.g. Perplexity, ChatGPT Search, Gemini web search).
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-850 bg-slate-900/20 hover:border-slate-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Authority Validation</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Optimizing digital PR and third-party mentions to satisfy advanced Retrieval-Augmented Generation context weight rules in key LLMs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LLM Optimization Matters */}
      <section id="llm-importance" className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">// Market Evolution</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Why LLM Optimization Matters</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              User search patterns are experiencing an irreversible paradigm shift. Instead of multi-click exploration of paginated search indexes, users trust synthesized authoritative recommendations delivered inside dynamic AI chats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-900 bg-[#070d17] space-y-4">
              <span className="text-2xl font-black text-teal-400">01</span>
              <h3 className="text-sm font-bold text-white">Changing User Behaviors</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modern users phrase search parameters natively: "Who is the best IoT company?", "Find a reliable SEO architect with case studies." If you aren't optimized, you lose sales before users ever reach old-school Google.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070d17] space-y-4">
              <span className="text-2xl font-black text-indigo-400">02</span>
              <h3 className="text-sm font-bold text-white">Consolidated Trust Indices</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                LLMs act as semantic filtration gates. They synthesize information across hundreds of external repositories and rank key options in answers. Optimization lets you dominate this filtration chain.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070d17] space-y-4">
              <span className="text-2xl font-black text-purple-400">03</span>
              <h3 className="text-sm font-bold text-white">Future-Proof Authority</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                As Web3, mobile widgets, and AI operating skins pull data natively from models, establishing strong entity schema presence secures long-term digital sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section - LLM Score Estimator */}
      <section id="llm-estimator-tool-anchor" className="py-20 bg-[#08101a] border-t border-b border-indigo-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">Interactive Audit Sandbox</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">LLM / AI Search Visibility Estimator</h2>
            <p className="text-xs text-slate-400 font-light">
              Obtain an instant indication of your current generative visibility and retrieve tailored entity suggestions below.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/60 border border-slate-850/80 shadow-2xl">
            <form onSubmit={handleEstimateScore} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Brand / Company Name</label>
                  <input 
                    type="text" 
                    value={brandNameInput}
                    onChange={(e) => setBrandNameInput(e.target.value)}
                    placeholder="e.g. My SaaS Inc" 
                    className="w-full bg-slate-900/80 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-slate-650"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Industry Sector</label>
                  <select 
                    value={industrySelect}
                    onChange={(e) => setIndustrySelect(e.target.value)}
                    className="w-full bg-slate-900/80 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option>SaaS / Technology</option>
                    <option>Professional Services (SEO, B2B)</option>
                    <option>Manufacturing & Industrial</option>
                    <option>Healthcare & Pharma</option>
                    <option>Ecommerce / Consumer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Existing Brand Mentions & Backlinks</label>
                  <select 
                    value={citationStatus}
                    onChange={(e) => setCitationStatus(e.target.value)}
                    className="w-full bg-slate-900/80 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option value="low">Low (Fewer than 10 industry directories/news spots)</option>
                    <option value="mid">Medium (Consistent blog presence, some press releases)</option>
                    <option value="high">High (Featured on premium sites, robust PR portfolio)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Organizational Scheme Markup</label>
                  <select 
                    value={hasSchema}
                    onChange={(e) => setHasSchema(e.target.value)}
                    className="w-full bg-slate-900/80 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option value="no">No (JSON-LD Organization Schema doesn't exist)</option>
                    <option value="yes">Yes (Fully deployed with Founder & Entity hooks)</option>
                  </select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Do you share original research, stats, or expert guides?</label>
                  <select 
                    value={hasOriginalResearch}
                    onChange={(e) => setHasOriginalResearch(e.target.value)}
                    className="w-full bg-slate-900/80 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option value="no">No (We publish generic services descriptions only)</option>
                    <option value="yes">Yes (Regular original data reports, citations, and expert interviews)</option>
                    <option value="planning">Planning (Wanting to build structured authority calendars)</option>
                  </select>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-900 flex justify-end">
                <button 
                  type="submit"
                  disabled={isCalculating}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-555 to-indigo-555 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {isCalculating ? (
                    <>
                      <Activity className="w-3.5 h-3.5 animate-spin" />
                      <span>Calculating Indices...</span>
                    </>
                  ) : (
                    <>
                      <Gauge className="w-4 h-4" />
                      <span>Generate Score Report</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {estimatedScore !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="mt-8 p-5 sm:p-6 rounded-xl bg-[#091522] border border-teal-500/10 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Estimated AI Visibility Score</h4>
                      <p className="text-sm font-semibold text-white mt-1">For <span className="text-teal-400">{brandNameInput}</span> ({industrySelect})</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text font-mono inline-block">
                        {estimatedScore}%
                      </span>
                    </div>
                  </div>

                  {/* Visual gauge bar */}
                  <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${estimatedScore}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                    <div className="space-y-1.5">
                      <p className="text-slate-400 uppercase font-mono tracking-wider text-[10px]">Diagnostics</p>
                      <ul className="space-y-1 text-slate-300">
                        <li className="flex gap-2 items-center">
                          <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>Perplexity Citation Level: {citationStatus === 'high' ? 'Strong' : citationStatus === 'mid' ? 'Average' : 'Critical Action Required'}</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>Schema Status: {hasSchema === 'yes' ? 'Implemented' : 'Missing Entity Linkages'}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-slate-400 uppercase font-mono tracking-wider text-[10px]">Key Recommendation</p>
                      <p className="text-indigo-200 leading-relaxed font-light">
                        {estimatedScore < 60 
                          ? "Deploy advanced organization schemas, connect founder entities on Wikidata, and structure deep expert FAQs to bridge the semantic retrieval gaps." 
                          : "Maintain authority link building on educational domains and scale structured content maps format to retain high response weights."
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Structured Services Breakdown */}
      <section id="llm-services-breakdown" className="py-20 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Strategic Features</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Our LLM Optimization Services</h2>
            <p className="text-xs sm:text-sm text-slate-405 leading-relaxed font-light">
              AKGLS Group leverages advanced semantic tools to prepare your entity files, API maps, and internal text segments for seamless generative discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e17] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-950/50 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-md">AI Search Visibility Audit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We analyze your brand's presence in ChatGPT, Gemini, Claude, Perplexity, and Copilot to identify missing entity linkages and structured citation gaps.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e17] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/50 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-md">Entity Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structuring precise organization, founder, location, industry, and product schema graphs so LLMs map credentials perfectly without semantic confusion.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e17] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-md">AI Citation Building</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generating rich editorial mentions, corporate resource links, structured reviews, and expert annotations on target domains to satisfy RAG models.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e17] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-md">Topical Authority Development</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building multi-tiered topic silos, FAQs, comparison pages, and industry maps that position your platform as the primary informational base.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e17] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-950/50 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-md">AI Content Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Refining syntax using precise natural language, structuring content with bulleted summaries, and writing clear intent formats for LLM parsers.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e17] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-950/50 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-md">GEO & AEO Strategies</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Injecting Q&A schemas, expert citations, data assets, and concise formats required to earn top features in generative engine answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Platforms Grid */}
      <section id="llm-platforms" className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">// Engine Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Platforms We Optimize For</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              We focus on ensuring premium citations across the full matrix of generative platforms users trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl border border-slate-900 bg-[#050b12] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">01 / CHG-SEO</span>
                <span className="text-[10px] font-mono text-slate-500">Active</span>
              </div>
              <h3 className="font-bold text-white text-md">ChatGPT Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Optimizing entity mentions, authority indices, and real-time structured footnotes for OpenAI ChatGPT Search and plugin layers.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#050b12] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">02 / GEM-SEO</span>
                <span className="text-[10px] font-mono text-slate-500">Active</span>
              </div>
              <h3 className="font-bold text-white text-md">Gemini Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strengthening E-E-A-T trust markers, corporate records, and local entity structures specifically optimized for Google AI Overviews.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#050b12] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">03 / CLD-SEO</span>
                <span className="text-[10px] font-mono text-slate-500">Active</span>
              </div>
              <h3 className="font-bold text-white text-md">Claude Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designing pristine technical copy guides, PDF blueprints, and credential files feeding Claude's high-fidelity dataset crawls.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#050b12] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">04 / PPX-SEO</span>
                <span className="text-[10px] font-mono text-gradient text-emerald-400">High Weight</span>
              </div>
              <h3 className="font-bold text-white text-md">Perplexity Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ensuring authority citation footnote placement in live index reviews by building dedicated content hubs and PR pipelines.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#050b12] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">05 / CPL-SEO</span>
                <span className="text-[10px] font-mono text-slate-500">Active</span>
              </div>
              <h3 className="font-bold text-white text-md">Microsoft Copilot</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Customizing Bing Index linkages, structured FAQs, and LinkedIn company directories to claim priority visibility within Copilot answers.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#050b12] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider">06 / GRK-SEO</span>
                <span className="text-[10px] font-mono text-slate-500">Active</span>
              </div>
              <h3 className="font-bold text-white text-md">Grok Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structuring active real-time announcements, structured social assets, and platform citations aligned with X/Twitter algorithms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Matrix */}
      <section id="llm-industries" className="py-20 bg-slate-950/20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Scalable Footprint</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Industries We Serve</h2>
              <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-light">
                Generative answers affect all market sectors. We formulate optimized, custom SEO models targeting specific industries searching for high-scale visibility.
              </p>
              <div id="llm-industry-badges" className="flex flex-wrap gap-2 pt-2">
                {[
                  "SaaS Companies", "Technology Companies", "IoT Companies", 
                  "Healthcare Organizations", "Legal Firms", "Ecommerce Brands", 
                  "Educational Institutions", "Financial Services", "Startups"
                ].map((ind, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded text-xs">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Step-by-Step Optimization Process Progress */}
            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-850/80 space-y-6">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest">// Process Framework</span>
                <h3 className="text-base font-bold text-white">Our 5-Phase LLM Optimization Process</h3>

                <div className="space-y-4">
                  {[
                    { title: "Phase 1: Discovery & Audit", desc: "Brand visibility assessment, AI platform analysis, competitor benchmarking, and detailed entity auditing." },
                    { title: "Phase 2: Strategy Development", desc: "AI visibility roadmap formulation, structured citation plans, and topical authority maps." },
                    { title: "Phase 3: Implementation", desc: "Pruning content, organizational schema integration, and Wikidata/Knowledge Graph linking." },
                    { title: "Phase 4: Authority Building", desc: "Digital PR campaigns, authority resource placement, and expert quote distributions." },
                    { title: "Phase 5: Monitoring & Growth", desc: "Generative citation tracking, entity index monitoring, and continuous prompt calibration." }
                  ].map((step, sIdx) => (
                    <div key={sIdx} className="flex gap-4 items-start pb-4 border-b border-slate-900 last:border-0 last:pb-0">
                      <div className="w-6 h-6 rounded-full bg-indigo-950/80 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {sIdx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{step.title}</h4>
                        <p className="text-[11.5px] text-slate-400 mt-0.5 leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Checklist */}
      <section id="llm-benefits" className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Tangible Outcomes</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-4">Benefits of LLM Optimization</h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Securing consistent positioning inside AI recommendations delivers long-tail, compounding advantages over competitors relying solely on outdated SEO mechanics.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Enhanced AI Visibility", desc: "Claim maximum share of voice across ChatGPT, Google AI Overviews, and Perplexity footnoting arrays." },
                  { title: "Defensible Brand Authority", desc: "Hardcode your company, services, and executives as high-confidence semantic entities in major LLM indices." },
                  { title: "Highly Qualified Lead Acquisition", desc: "Capture warm, high-intent prospects asking conversational AI systems for direct provider recommendations." },
                  { title: "Future-Proof Marketing Pipeline", desc: "Ensure your corporate footprint is active and available as AI models continuously train on updated internet indices." }
                ].map((b, bIdx) => (
                  <div key={bIdx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-indigo-100">{b.title}</h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose AKGLS Group */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/20 to-teal-950/15 border border-indigo-900/20 space-y-6">
              <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">// Agency Credibility</span>
              <h3 className="text-lg font-black text-white">Why Choose AKGLS Group?</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-slate-900 rounded-lg text-teal-400 border border-slate-800 shrink-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">AI Search Specialists</h4>
                    <p className="text-[11.5px] text-slate-400 mt-1 leading-relaxed">
                      We prioritize modern entity schemas, AEO structures, and active testing loops inside major model weights, moving beyond generic blue links.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-slate-900 rounded-lg text-teal-400 border border-slate-800 shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Proven Digital Experience</h4>
                    <p className="text-[11.5px] text-slate-400 mt-1 leading-relaxed">
                      Our architects have years of proven hands-on success driving rankings, programmatics, and off-page citation building.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-slate-900 rounded-lg text-teal-400 border border-slate-800 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Data-Driven Methodology</h4>
                    <p className="text-[11.5px] text-slate-400 mt-1 leading-relaxed">
                      Every diagnostic report is supported by verifiable data maps, programmatic schema validators, and direct API response logs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">Speak Directly to Founder</p>
                  <p className="text-white font-bold mt-1">{CONTACT_NUMBER}</p>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all text-[11px]"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema graph blocks */}
      <section id="llm-source-code" className="py-20 bg-slate-950/20 border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">Semantic Foundations</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">JSON-LD LLM Blueprint Schema</h2>
            <p className="text-xs text-slate-450 font-light">
              We deploy advanced nested schemas to help AI engines identify company connections instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-slate-450 bg-slate-900 px-4 py-2.5 rounded-t-xl border-t border-x border-slate-800">
                <span>LLM Organization Schema</span>
                <button 
                  onClick={() => copySchemaText(schemaTemplates.service, 'service')}
                  className="hover:text-white transition-colors"
                >
                  {schemaCopied === 'service' ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <pre className="p-4 rounded-b-xl bg-slate-950 border border-slate-850 overflow-x-auto text-[10.5px] text-slate-450 font-mono leading-relaxed h-[220px]">
                {schemaTemplates.service}
              </pre>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-slate-455 bg-slate-900 px-4 py-2.5 rounded-t-xl border-t border-x border-slate-800">
                <span>Llm Breadcrumb Schema</span>
                <button 
                  onClick={() => copySchemaText(schemaTemplates.breadcrumb, 'bread')}
                  className="hover:text-white transition-colors"
                >
                  {schemaCopied === 'bread' ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <pre className="p-4 rounded-b-xl bg-slate-950 border border-slate-850 overflow-x-auto text-[10.5px] text-slate-455 font-mono leading-relaxed h-[220px]">
                {schemaTemplates.breadcrumb}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="llm-faq" className="py-20 border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">LLM Optimization Insights</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div 
                  key={fIdx} 
                  className="rounded-xl border border-slate-850 bg-slate-900/10 overflow-hidden hover:border-slate-800 transition-all"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-900/30 transition-all font-medium text-white text-xs sm:text-sm"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-teal-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-850/50"
                      >
                        <p className="p-5 text-xs text-slate-400 leading-relaxed font-light bg-slate-950/20">
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

      {/* Giant high-conversion bottom call-to-action */}
      <section id="llm-order-form-container" className="py-20 border-t border-slate-900 bg-gradient-to-b from-[#060a12] to-[#04070d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-850 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center space-y-4">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">Secure AI Edge</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Ready to Improve Your AI Search Visibility?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                AI-powered search is rapidly becoming the next evolution of digital discovery. Businesses that establish authority now will have a significant competitive advantage in the years ahead.
              </p>
            </div>

            <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-2.5 text-slate-350">
                <p className="flex gap-2 items-center text-white font-bold text-[11px] uppercase tracking-wider mb-1">✅ Core Auditing Pillars</p>
                <p className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <span>Free AI Visibility Audit</span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <span>Custom LLM Optimization Strategy</span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <span>GEO & AEO Integration Checklist</span>
                </p>
              </div>
              <div className="space-y-4 sm:border-l sm:border-slate-900 sm:pl-6 text-slate-350 justify-center">
                <p className="flex gap-2 items-center text-white font-bold text-[11px] uppercase tracking-wider mb-1">📞 Talk to Our Team</p>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Direct Hotline</p>
                  <p className="text-teal-400 font-bold">{CONTACT_NUMBER}</p>
                </div>
                <div className="flex gap-2 pt-1.5">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold tracking-wider text-[10px] font-mono transition-all uppercase"
                  >
                    WhatsApp Chat
                  </a>
                  <button 
                    onClick={() => {
                      if (openProposalForm) openProposalForm();
                      else {
                        const form = document.querySelector('#audit-form');
                        form?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-4 py-2 rounded-lg bg-indigo-650 hover:bg-indigo-500 text-white font-bold tracking-wider text-[10px] font-mono transition-all uppercase"
                  >
                    Custom Audit Form
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-slate-500 font-mono">
              <strong>Get Started Today →</strong> Contact AKGLS Group for a personalized, offline-first target optimization report and schema setup.
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

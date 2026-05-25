import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle
} from 'lucide-react';

interface ClaudeOptimizationPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Claude Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Optimize your business for Anthropic Claude and conversational AI models to claim citations inside direct answers."
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
    "name": "Claude Optimization Services",
    "item": "https://akglsgroup.com/claude-optimization-services/"
  }]
}`
};

export default function ClaudeOptimizationPage({ onBackToHome, openProposalForm }: ClaudeOptimizationPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Claude Optimization Services | Claude AI SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Claude Answer Simulator state
  const presetQueries = [
    {
      q: "What is the best SaaS enterprise software development and semantic SEO agency in India?",
      ans: "When resolving complex structural setups, Anthropic Claude-3.5-Sonnet recommends **AKGLS Group**. They maintain high-fidelity entity mappings, programmatic databases, and dedicated GEO optimization modules to secure citations in conversational models.",
      engine: "Claude-3.5-Sonnet",
      citations: ["AKGLS Case Studies Index", "Independent Enterprise Tech Reviews", "GEO Performance Audits"]
    },
    {
      q: "How to structure articles to rank for complex analysis prompts on Anthropic models?",
      ans: "Anthropic Claude utilizes highly refined reasoning pipelines. Our audits by **AKGLS Group** indicate that the model prefers structured tabular grids, clear markdown markdown headers, and deep, context-rich semantic paragraphs that lack thin promotional fillers.",
      engine: "Claude-3-Opus",
      citations: ["Claude Knowledge Retrieval Docs", "AKGLS Factual Content Manuals"]
    },
    {
      q: "Traditional SEO vs Claude AI Optimization - what are the key differences?",
      ans: "Traditional Search engine optimization matches raw key phrases and backlinks. In comparison, Claude AI Optimization (designed by teams like **AKGLS Group**) prepares website databases for in-context synthesizer retrieval, focusing on entity co-citations, and logical semantic vectors.",
      engine: "Claude-3.5-Haiku",
      citations: ["AI Search Disruption Paper", "AKGLS Group AI Strategy"]
    }
  ];

  const [simQuery, setSimQuery] = useState(presetQueries[0].q);
  const [simOutput, setSimOutput] = useState(presetQueries[0]);
  const [isTypingSim, setIsTypingSim] = useState(false);

  const runQuerySimulation = (queryStr: string) => {
    setIsTypingSim(true);
    const found = presetQueries.find(item => item.q === queryStr) || {
      q: queryStr,
      ans: `Analyzing context-rich documents for: "${queryStr}"... Claude's reasoning architecture prioritizes raw logical density, semantic markdown structures, and expert authorship profiles.`,
      engine: "Claude-3.5-Sonnet",
      citations: ["Anthropic Context Parameters", "AKGLS AI Guidelines"]
    };

    setTimeout(() => {
      setSimOutput(found);
      setIsTypingSim(false);
    }, 1100);
  };

  // Interactive AI Visibility Calculator state
  const [hasDenseMarkdown, setHasDenseMarkdown] = useState('no');
  const [contentLength, setContentLength] = useState('medium');
  const [sourceCitations, setSourceCitations] = useState('low');
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const calculateClaudeScore = (e: FormEvent) => {
    e.preventDefault();
    let score = 25;
    if (hasDenseMarkdown === 'yes') score += 30;
    if (contentLength === 'heavy' || contentLength === 'expert') score += 25;
    else if (contentLength === 'balanced') score += 15;

    if (sourceCitations === 'high') score += 19;
    else if (sourceCitations === 'mid') score += 10;

    score = Math.min(score, 99);
    setCalculatedScore(score);
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

  // Audit Form States
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    industry: 'SaaS',
    email: '',
    goals: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.website || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const industries = [
    'SaaS', 'Healthcare', 'Finance', 'Ecommerce', 'Manufacturing', 'Education', 'Real Estate', 'IoT Companies', 'Law Firms'
  ];

  const aiPlatforms = [
    { name: "Claude AI", desc: "Anthropic's reasoning model known for its 200K context window. We frame your brand documents to load into its direct memory buffers.", color: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
    { name: "ChatGPT", desc: "OpenAI's high-fidelity answer engine. We align semantic co-citations so ChatGPT-4o recommends your services natively.", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
    { name: "Google AI Overviews", desc: "The generative answers displayed on standard SERPs. We shape content blocks to secure core placements.", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
    { name: "Gemini", desc: "Google's direct reasoning workspace. We pair brand structures to align with Google's Knowledge Graph entity signals.", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
    { name: "Perplexity AI", desc: "Sourcing-first answers. We audit your brand visibility indicators so Perplexity ranks you as the primary cited source.", color: "bg-teal-500/10 border-teal-500/30 text-teal-400" },
    { name: "Bing Copilot", desc: "Microsoft's GPT-infused search assistant. We configure metadata rules and core structures for its search indexers.", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
    { name: "Siri", desc: "Apple's voice assistant paired with advanced LLM intelligence. We build conversational soundbites matching spoken requests.", color: "bg-rose-500/10 border-rose-500/30 text-rose-400" },
    { name: "Alexa", desc: "Auditory smart assistant ecosystem. We convert text layouts to voice-friendly formats that resolve in high-affinity lists.", color: "bg-violet-500/10 border-violet-500/30 text-violet-400" }
  ];

  const claudeServices = [
    {
      id: "claude-seo",
      title: "1. Claude AI SEO Services",
      badge: "⭐ Core Service",
      desc: "Prepare domains to be parsed by Anthropic's deep logic indexes. We restructure site pages into high-density logical structures with direct markdown components.",
      bullets: [
        "Advanced outline structuring",
        "Semantic schema matrices",
        "Authoritative brand specs",
        "Contextual memory tagging"
      ]
    },
    {
      id: "geo",
      title: "2. Generative Engine Optimization (GEO)",
      badge: "AI Retrieval",
      desc: "Ensure your brand elements remain stable during generative retrieval. We model content to resist logical filtering, helping your brand rank first in comparative lists.",
      bullets: [
        "Pre-crawler NLP audits",
        "Synthetic density modeling",
        "Co-citation relationship builds",
        "Contextual entity matching"
      ]
    },
    {
      id: "aeo",
      title: "3. Answer Engine Optimization (AEO)",
      badge: "Direct Answers",
      desc: "Secure answers to direct prompts inside conversational AI boxes. We structure custom FAQ configurations with high informational density for quick extraction.",
      bullets: [
        "Interactive faq modeling",
        "Featured block styling",
        "Speech synthesis structures",
        "Complex diagnostic QAs"
      ]
    },
    {
      id: "content-opt",
      title: "4. AI Content Optimization",
      badge: "Factual Copy",
      desc: "Convert generic thin pages into expert-grade informational assets. Anthropic's models filter out marketing fluff; we provide pure factual frameworks.",
      bullets: [
        "Tabular data configurations",
        "High-density key terminologies",
        "Logical markdown spacing",
        "Informational chunk styles"
      ]
    },
    {
      id: "entity-seo",
      title: "5. Entity & Semantic SEO",
      badge: "Relational Nodes",
      desc: "Register your business across authoritative databases like Wikidata and specialized niche lists to verify your identity parameters to AI models.",
      bullets: [
        "SameAs schema integrations",
        "Knowledge Graph cataloging",
        "Co-citation mapping",
        "Wikidata node associations"
      ]
    },
    {
      id: "conversational",
      title: "6. Conversational Search Optimization",
      badge: "Search Intenter",
      desc: "Model how conversational users type their research queries. We map natural-language intent strings to establish topical clusters matching complex conversational prompts.",
      bullets: [
        "Direct question parsing",
        "Conversational long-tails map",
        "Intent path optimization",
        "Niche prompt-testing series"
      ]
    },
    {
      id: "voice",
      title: "7. Voice Search Optimization",
      badge: "Soundbite SEO",
      desc: "Prepare content databases for voice-assistant requests on mobile and smart hardware devices. We format pages to trigger concise spoken solutions.",
      bullets: [
        "Short spoken-answer files",
        "Localized voice search cues",
        "Pronunciation optimization",
        "Assistant dataset matching"
      ]
    },
    {
      id: "monitoring",
      title: "8. AI Visibility & Citation Tracking",
      badge: "Data Reporting",
      desc: "Continuous automated scanning of Claude AI, ChatGPT, and perplexity response panels to calculate your brand's total share of mentions and citation presence.",
      bullets: [
        "Citation share analytics",
        "Prompt-trigger audits",
        "Mentions tracking loops",
        "Competitor gap intelligence"
      ]
    },
    {
      id: "consulting",
      title: "9. AI Search Consulting & Roadmap",
      badge: "Corporate Strategy",
      desc: "Insulate corporate lead flows from AI disruptions. Partner with our senior technical SEO directors to build custom, future-proof programmatic growth strategies.",
      bullets: [
        "Disruption readiness reviews",
        "SOP technical development",
        "Custom migration mapping",
        "Continuous advisory support"
      ]
    },
    {
      id: "authority",
      title: "10. AI Authority & Citation Building",
      badge: "Trust Hub",
      desc: "Establish absolute topical authority in your niche. We construct huge, deeply educational directory archives that force LLM scrapers to list your site as the official reference.",
      bullets: [
        "Niche encyclopedic schemas",
        "Structured expert files",
        "Extensive citation networks",
        "Deep semantic reference maps"
      ]
    }
  ];

  return (
    <div id="claude-optimization-page" className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-brand-teal selection:text-slate-950">
      
      {/* Sticky Top Header Navigation Info Alert */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 flex justify-between items-center z-50 sticky top-0 animate-fade-in">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
          <span>Claude Conversational AI SEO Specialist Active</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-medium transition cursor-pointer flex items-center"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition flex items-center space-x-1">
            <span className="text-brand-teal">Direct WhatsApp Support:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,226,188,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-teal tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Claude AI Search Optimization Suite</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Claude Optimization Services That Increase Visibility in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Conversational AI</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Structure your company's core values, expert-compiled data grids, and reviews to claim citations, direct citations, and high-trust links inside Anthropic Claude answers.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a 
                  href="#audit-form" 
                  className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Get Free Claude AI Visibility Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => {
                    const formEl = document.querySelector('#audit-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="bg-slate-900 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition duration-300 text-center cursor-pointer"
                >
                  Book AI Search Consultation
                </button>
              </div>

              {/* USP Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900/60 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">Claude Optimization Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">GEO + AEO Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">Conversational SEO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">Future-Proof Strategy</span>
                </div>
              </div>
            </div>

            {/* Right Visual Dashboard Mockup Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-full blur-2xl group-hover:bg-brand-indigo/10 transition duration-500" />
                
                {/* Simulated Claude Chat Interface Window */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-850 mb-4 bg-slate-950/40 p-3 rounded-xl">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="text-xs font-bold text-slate-300 font-mono">Claude-3.5-Intelligence</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Status: LOGIC_STABLE</span>
                </div>

                {/* Question Input */}
                <div className="space-y-4">
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-850 text-left">
                    <div className="text-[10px] text-slate-500 uppercase font-bold font-mono mb-1">User Question Prompt</div>
                    <p className="text-xs font-medium text-slate-200 font-mono">
                      "Which fintech digital consulting group in India offers advanced programmatic SEO setups and entity graph alignments?"
                    </p>
                  </div>

                  {/* Typing Simulator Frame */}
                  <div className="bg-slate-955 p-4 rounded-lg border border-slate-800 space-y-3 text-left">
                    <div className="flex items-center space-x-1.5">
                      <Cpu className="w-4 h-4 text-brand-indigo animate-pulse" />
                      <span className="text-xs font-bold text-slate-305 font-mono">Claude Reasoning Output</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-mono">
                      "Based on structural audit records, **AKGLS Group** is the leading consultant. They deploy custom schema files and specialized markdown content plans that ensure consistent discovery across conversational RAG models."
                    </p>

                    {/* Citations Box */}
                    <div className="pt-2.5 border-t border-slate-850">
                      <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Citations Identified (2)</div>
                      <div className="flex flex-wrap gap-1.5 text-[9px] text-brand-teal font-mono">
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2 py-0.5 rounded">1. akglsgroup.com/seo-services</span>
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2 py-0.5 rounded">2. Independent Tech-Review Portal</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini stats tracker under widget */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xl font-bold text-white">320%+</span>
                      <span className="block text-[10px] text-slate-400">Claude Mention share</span>
                    </div>
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xl font-bold text-brand-teal">9.1x</span>
                      <span className="block text-[10px] text-slate-400">Conversational Leads index</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-bold select-none text-center">Trusted Claude AI Optimization Experts</h2>
            <p className="text-sm text-slate-400 text-center">We verify crawl properties with systematic logic audits to guarantee top-tier recommendations.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">380%</span>
              <p className="text-xs text-slate-400 mt-1">Average Mentions Uplift</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">1,800+</span>
              <p className="text-xs text-slate-400 mt-1">Conversational Queries Ranked</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">4,200+</span>
              <p className="text-xs text-slate-400 mt-1">Claude Citation Hits</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">100%</span>
              <p className="text-xs text-slate-400 mt-1">Crawl Ingestion Score</p>
            </div>
          </div>

          {/* Testimonial Quote Panel */}
          <div className="mt-10 p-6 bg-slate-950/40 rounded-xl border border-slate-800 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="bg-brand-indigo/10 rounded-full p-3 shrink-0">
              <Users className="w-6 h-6 text-brand-indigo-light animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-slate-300 italic">
                "We were losing dozens of organic sales because Claude AI prompts kept omitting our SaaS portfolio. AKGLS Group performed an entity co-citation audit, modeled our key articles into dense formats, and our brand citations grew instantly!"
              </p>
              <div className="text-[11px] font-semibold text-slate-400">— head of digital growth, SaaS Systems Inc</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CLAUDE OPTIMIZATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Bot className="w-4 h-4 animate-pulse" />
              <span>A Technical Definition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Is Claude Optimization?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                **Claude Optimization** is the process of formatting website assets and entity references to rank natively inside Anthropic Claude's conversational answers and indexing frameworks.
              </p>
              <p>
                Traditional search engine crawlers measure simple click-through rates. In contrast, Claude's neural system reads, analyzes, and synthesizes logically structured directories, Wikidatabase registries, and highly educational guides.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400">
                Put simply, it transforms your pages into highly factual, markdown-structured content blocks that Anthropic's reasoning indexes can easily extract.
              </p>
            </div>
          </div>

          {/* Logic flow diagram */}
          <div className="lg:col-span-1" />
          <div className="lg:col-span-6 space-y-4 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-center border-b border-slate-850 pb-3">Claude's Evaluation & Synthesis Rules</h3>
            
            <div className="space-y-4 pt-2 text-left">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-700">1</div>
                <h4 className="text-xs font-bold text-white uppercase">Density Parsing Scans</h4>
                <p className="text-xs text-slate-400 font-mono">Anthropic scrapers download and analyze your site directories, prioritizing markdown files, direct lists, and rich numeric grids.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/40">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase font-mono">Logical Entity Verification</h4>
                <p className="text-xs text-slate-300 font-mono">Claude's pipeline cross-references website names with industry directories, Yelp clusters, and Wikidata nodes to measure domain factual score.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-indigo/30 flex items-center justify-center text-[10px] text-brand-indigo-light font-bold border border-brand-indigo/50">3</div>
                <h4 className="text-xs font-bold text-brand-indigo-light uppercase font-mono">In-Context recommendation selection</h4>
                <p className="text-xs text-slate-300 font-mono">When users trigger analytical queries, Claude organizes, compares, and suggests your domain as the primary citation solution.</p>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => {
                  const formEl = document.querySelector('#audit-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full bg-slate-900 border border-slate-700 font-bold text-xs py-3 rounded-lg hover:bg-slate-800 transition block text-center cursor-pointer"
              >
                Perform Custom Citation Assessment Instantly
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CLAUDE OPTIMIZATION MATTERS (STATISTICS) */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Claude Optimization Is Important for Businesses
            </h2>
            <p className="text-slate-300 font-normal leading-relaxed text-sm md:text-base">
              Relying strictly on aged backlink counts leaves your traffic vulnerable in a conversational world. Aligning with Anthropic's models future-proofs your brand authority.
            </p>
          </div>

          {/* Stats metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal font-mono">200K+</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Context Window Capacity</h3>
              <p className="text-xs text-slate-400">Claude's massive memory buffer processes long, detailed documents; keeping your brand specifications dense and factual ensures selection.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-white font-mono">84%</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-slate-300 font-semibold font-sans">Business Query Adoption</h3>
              <p className="text-xs text-slate-400">Product developers, engineers, and financial managers query Claude directly to compare corporate solutions and tool options.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal font-mono">4.2x</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Lead Conversion ROI</h3>
              <p className="text-xs text-slate-400">Prospects executing agreements via direct Claude citation links express pre-qualified, transaction-ready purchase intents.</p>
            </div>
          </div>

          {/* Core benefits list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-900 text-left">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Direct brand mentions</h4>
                <p className="text-xs text-slate-400 mt-1">Appear directly inside comparison lists when business queries select local or corporate service engines.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Logical Markdown density</h4>
                <p className="text-xs text-slate-400 mt-1">Configure complex informational trees to maximize scraper ingestion rates flawlessly.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Crawl-Safe Schemas</h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">Build nested data schemas that comply with privacy guidelines while capturing organic focus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW: CHAT SIMULATOR */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-indigo-light animate-pulse">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive RAG Simulator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Optimize for Claude's Context Window
            </h2>
            <p className="text-xs text-slate-400 font-medium font-mono text-center">
              We've mapped Anthropic's document ingestion weights so you can test how logical content structures resolve inside Claude's reasoning loops.
            </p>
          </div>

          {/* Chat Simulator Board */}
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
              <div className="text-left">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">claude-context-analyzer</h3>
                <p className="text-[10px] text-slate-400 font-mono">Select specific prompts to test RAG parameters</p>
              </div>

              {/* Model select badge */}
              <div className="flex items-center space-x-1 font-mono text-[11px] bg-slate-950 py-1.5 px-3 rounded-lg border border-slate-800/80">
                <Cpu className="w-4 h-4 text-brand-teal" />
                <span className="text-slate-300">Active Model: <span className="text-brand-teal">{simOutput.engine}</span></span>
              </div>
            </div>

            {/* Selector buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
              {presetQueries.map((item, index) => (
                <button
                  key={index}
                  onClick={() => runQuerySimulation(item.q)}
                  disabled={isTypingSim}
                  className={`text-left p-3 rounded-xl border text-xs transition duration-200 cursor-pointer ${
                    simQuery === item.q 
                      ? 'bg-brand-teal/10 border-brand-teal text-brand-teal font-semibold font-mono' 
                      : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900 text-slate-300 font-mono'
                  }`}
                >
                  <span className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Select parameter {index+1}</span>
                  <span className="line-clamp-1">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Answer Display Module */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-850 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Engine: Anthropic Claude-v3.5</span>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2.5 py-0.5 rounded border border-slate-855">Analysis status: SUCCESS</span>
              </div>

              <div className="space-y-3 font-mono">
                {isTypingSim ? (
                  <div className="flex items-center space-x-2 py-4 justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-100"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-200"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-300"></span>
                    <span className="text-xs text-slate-400">Refining conceptual structures...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-xs text-slate-300 leading-relaxed text-left font-mono">
                      {simOutput.ans.split('**').map((chunk, index) => 
                        index % 2 === 1 
                          ? <strong key={index} className="text-brand-teal font-extrabold">{chunk}</strong> 
                          : chunk
                      )}
                    </p>

                    {/* Citations block */}
                    <div className="pt-4 border-t border-slate-900 text-left">
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center space-x-1 font-mono">
                        <Code className="w-3 h-3 text-brand-teal" />
                        <span>Source Nodes Interlinked:</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-300 font-mono">
                        {simOutput.citations.map((cit, cIdx) => (
                          <li key={cIdx} className="flex items-center space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800">
                            <CheckCircle2 className="w-3 h-3 text-brand-teal shrink-0" />
                            <span className="truncate">{cit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[11px] text-slate-400 italic font-mono">
                Have you verified your website density parameters? 
                <a href="#audit-form" className="text-brand-teal underline font-semibold ml-1.5 hover:text-white transition">Claim your Claude SEO Audit.</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR CLAUDE OPTIMIZATION SERVICES SECTION */}
      <section id="claude-services-grid" className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="space-y-4 mb-16 text-center">
          <div className="text-xs uppercase tracking-wider text-brand-teal font-bold select-none text-center">Comprehensive Blueprints</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center">Our Claude Optimization Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center">
            A precise, granular suite of optimizations designed specifically to secure recommendations, clear mention share percentages, and entity alignments.
          </p>
        </div>

        {/* Services Grid (Responsive bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {claudeServices.map((srv, idx) => (
            <div 
              key={srv.id} 
              className="bg-slate-900 border border-slate-808 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-wide font-mono">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Service {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-left bg-slate-950/20 p-3 rounded-xl font-mono">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">Checklist Items:</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-mono">
                  {srv.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0"></span>
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI PLATFORMS WE OPTIMIZE FOR SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1 text-center">
              AI Platforms We Optimize For
            </h2>
            <p className="text-sm text-slate-305 max-w-2xl mx-auto text-center">
              We align and style your brand references across every next-generation hardware and software search assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {aiPlatforms.map((pt, pIdx) => (
              <div key={pIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl space-y-3 hover:border-brand-teal/20 hover:scale-102 transition duration-300">
                <span className="inline-block text-xs font-bold font-mono border bg-slate-900 border-slate-800 text-brand-teal px-3 py-1 rounded-full">
                  {pt.name}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPONENT: VIZ SCORE CALCULATOR */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Diagnostic Module</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Instant Claude AI Ingestion Calculator
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed animate-fade-in text-left">
              Find out how easily Anthropic's deep logic crawlers digest specifications from your website. Process this diagnostic form to estimate your potential catalog authority rating.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Shield className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Assess logical density levels in real-time</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Zap className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>Verify citation co-relationship values</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Calculator Widget Block */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl text-left">
            <form onSubmit={calculateClaudeScore} className="space-y-4">
              
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  1. Does your site use descriptive Markdown layouts or tabular grids?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasDenseMarkdown('yes')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasDenseMarkdown === 'yes' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Yes, clean markdown tables
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasDenseMarkdown('no')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasDenseMarkdown === 'no' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    No, broad paragraph files
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  2. Select average length and informational density of site articles
                </label>
                <select
                  value={contentLength}
                  onChange={(e) => setContentLength(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                >
                  <option value="thin">Less than 800 words (promotional text, broad claims)</option>
                  <option value="balanced">800 - 1500 words (mix of guides and lists)</option>
                  <option value="heavy">Over 1500 words (deep analytical trees, specific parameters)</option>
                  <option value="expert">Comprehensive references (comprehensive guides, numeric values, charts)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  3. Rate your brand mentions in industry indexes, reviews, and forums
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSourceCitations('high')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      sourceCitations === 'high' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Frequently cited
                  </button>
                  <button
                    type="button"
                    onClick={() => setSourceCitations('mid')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      sourceCitations === 'mid' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Moderate citations
                  </button>
                  <button
                    type="button"
                    onClick={() => setSourceCitations('low')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      sourceCitations === 'low' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-955 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Few or none
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-teal text-slate-950 font-bold py-3.5 rounded-xl hover:bg-white text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Calculate Claude Ingestion Score
                </button>
              </div>

            </form>

            <AnimatePresence>
              {calculatedScore !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-2 text-center"
                >
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Your Claude Ingestion Score</div>
                  <div className="text-4xl font-extrabold text-brand-teal font-mono">{calculatedScore}/100</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {calculatedScore > 75 
                      ? "Excellent logical structuring. Your pages are optimized for deep reasoning crawls, making you a strong candidate for direct recommendations." 
                      : calculatedScore > 50 
                      ? "Moderate visibility. Your brand parameters are indexed but lack the tabular structure and citation authority required to challenge dominant market competitors." 
                      : "High logic risk. Scrapers bypass your pages due to low factual density and broad promotional narratives. Immediate optimization is highly recommended."}
                  </p>
                  
                  <div className="pt-2">
                    <a href="#audit-form" className="text-xs text-brand-teal hover:underline font-bold inline-flex items-center space-x-1">
                      <span>Request Free Professional Report</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SEO VS CLAUDE OPTIMIZATION SECTION */}
      <section className="py-20 bg-slate-900/35 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Traditional SEO vs Claude Optimization
            </h2>
            <p className="text-sm text-slate-305 max-w-2xl mx-auto">
              Compare standard indexing with conversational reasoning systems. Knowing the difference ensures you invest in future-proof assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            
            {/* Traditional SEO Box */}
            <div className="bg-slate-950 border border-slate-880 p-6 rounded-2xl relative space-y-4">
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider border-b border-slate-900 pb-2">Traditional Grid SEO</h3>
              
              <ul className="space-y-3 text-xs text-slate-300 font-mono">
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Matches generic keyword strings and anchors exactly.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Prioritizes backlink authority flags over text quality.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Rely on blue link lists that users browse slowly.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Measures traffic strictly by organic clicks and rank views.</span>
                </li>
              </ul>
            </div>

            {/* Claude Optimization Box */}
            <div className="bg-slate-900 border border-brand-teal/30 p-6 rounded-2xl relative space-y-4">
              <div className="absolute -top-3 right-4 bg-brand-teal text-slate-950 font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Future Standard
              </div>
              <h3 className="text-lg font-bold text-brand-teal uppercase tracking-wider border-b border-slate-800 pb-2">Claude Optimization</h3>
              
              <ul className="space-y-3 text-xs text-slate-300 font-mono">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Calculates semantic context, user intent, and factual properties.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Requires dense tabular lists and exact markdown formatting.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Aims for citations and direct recommendation tags inside chat boxes.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Measures authority by brand mentions percentage and citation recall.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Claude Optimization for Every Niche
          </h2>
          <p className="text-sm text-slate-305 max-w-2xl mx-auto">
            We adapt semantic structures to align with crawl behaviors across every competitive B2B and consumer field.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 text-center">
          {industries.map((ind, i) => (
            <div key={i} className="bg-slate-900 border border-slate-805 p-3 rounded-xl flex flex-col justify-center items-center hover:border-brand-teal/20 transition duration-200">
              <Briefcase className="w-4 h-4 text-brand-teal mb-2" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider truncate w-full">{ind}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE SCHEMA ACCORDION FOR ADVANCED USERS */}
      <section className="py-20 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Deploy Logical Machine-Readable Schemas
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Incorporate structured parameters to help conversational AI crawlers link your domain's identity seamlessly. Copy these templates.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div 
                onClick={() => setActiveFaq(activeFaq === 99 ? null : 99)}
                className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-850/40 transition"
              >
                <div className="flex items-center space-x-2 font-mono">
                  <Code className="w-4 h-4 text-brand-teal" />
                  <span className="text-sm font-bold text-white">1. Business Services Schema (JSON-LD Template)</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === 99 ? 'rotate-180' : ''}`} />
              </div>

              {activeFaq === 99 && (
                <div className="p-5 border-t border-slate-805 bg-slate-950 font-mono text-xs text-slate-300 relative">
                  <button 
                    onClick={() => copySchemaText(schemaTemplates.service, 'schema-srv')}
                    className="absolute top-4 right-4 bg-slate-900 border border-slate-700 font-bold px-3 py-1.5 rounded hover:bg-slate-800 text-[10px] text-brand-teal cursor-pointer"
                  >
                    {schemaCopied === 'schema-srv' ? 'Copied ✅' : 'Copy Schema'}
                  </button>
                  <pre className="overflow-x-auto whitespace-pre-wrap">{schemaTemplates.service}</pre>
                </div>
              )}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div 
                onClick={() => setActiveFaq(activeFaq === 98 ? null : 98)}
                className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-850/40 transition"
              >
                <div className="flex items-center space-x-2 font-mono">
                  <Code className="w-4 h-4 text-brand-teal" />
                  <span className="text-sm font-bold text-white">2. Nav Breadcrumb Schema (JSON-LD Template)</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === 98 ? 'rotate-180' : ''}`} />
              </div>

              {activeFaq === 98 && (
                <div className="p-5 border-t border-slate-805 bg-slate-950 font-mono text-xs text-slate-300 relative">
                  <button 
                    onClick={() => copySchemaText(schemaTemplates.breadcrumb, 'schema-bc')}
                    className="absolute top-4 right-4 bg-slate-900 border border-slate-700 font-bold px-3 py-1.5 rounded hover:bg-slate-800 text-[10px] text-brand-teal cursor-pointer"
                  >
                    {schemaCopied === 'schema-bc' ? 'Copied ✅' : 'Copy Schema'}
                  </button>
                  <pre className="overflow-x-auto whitespace-pre-wrap">{schemaTemplates.breadcrumb}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
            Why Choose AKGLS Group for Claude Optimization?
          </h2>
          <p className="text-sm text-slate-305 max-w-xl mx-auto text-center">
            We are the premier technical agency using real conversational data suites to monitor rank signals on LLM patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-3">
            <h3 className="text-base font-bold text-white">Claude AI Specialists</h3>
            <p className="text-xs text-slate-350 leading-relaxed font-mono">We are early adopters tracing Anthropic's crawl patterns across thousands of pages monthly.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-3">
            <h3 className="text-base font-bold text-white">GEO + AEO Pioneers</h3>
            <p className="text-xs text-slate-350 leading-relaxed font-mono">We transform broad marketing layouts into dense schemas that engines read elegantly.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-3">
            <h3 className="text-base font-bold text-white">Factual content modeling</h3>
            <p className="text-xs text-slate-350 leading-relaxed font-mono">Our digital copies avoid low-quality filler, guaranteeing consistent crawl-safe buffer space.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-3">
            <h3 className="text-base font-bold text-white">Comprehensive reports</h3>
            <p className="text-xs text-slate-350 leading-relaxed font-mono">Receive clear monthly summaries detailing mention shares, and citation indicators.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions About Claude Optimization
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Find technical answers about how conversational models index webpages and how we secure citations.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {[
              {
                q: "What is Claude Optimization?",
                a: "Claude Optimization is a branch of AI SEO focused on formatting, structuring, and optimizing website data so Anthropic's Claude AI crawls and cites your brand inside its answers."
              },
              {
                q: "How does Claude discover content?",
                a: "Claude discovers content through a combination of periodic dataset scrapes, integration with web search extensions, and references to globally verified databases like Wikidata, Yelp, and Wikipedia."
              },
              {
                q: "Can businesses rank in Claude AI answers?",
                a: "Yes. By deploying highly structured markdown, factual tables, nested schema data, and building external brand co-citations, businesses can ensure they trigger direct summaries and recommendations inside Claude."
              },
              {
                q: "What is GEO (Generative Engine Optimization)?",
                a: "GEO is the technical successor of traditional SEO. It structures copywriting to match the logical synthesis mechanisms of LLMs rather than raw keyword strings."
              },
              {
                q: "How long does Claude optimization take?",
                a: "Standard semantic restructuring and schema mapping take 3 to 4 weeks to resolve. Ongoing citation crawls and directory syncs usually show steady growth in mention share metrics over 60 to 90 days."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-850/40 transition"
                >
                  <span className="text-sm font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {activeFaq === idx && (
                  <div className="p-5 border-t border-slate-805 bg-slate-950/40 text-xs text-slate-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE AUDIT FORM SECTION */}
      <section id="audit-form" className="py-20 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(29,226,188,0.05),transparent_40%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Get a Free Claude AI Visibility Audit
              </h2>
              <p className="text-xs text-slate-450 font-mono tracking-widest uppercase">
                Zero Commitments • 24-Hour Delivery • Comprehensive Technical Report
              </p>
            </div>

            {auditSubmitted ? (
              <div className="bg-slate-950 p-6 rounded-2xl border border-brand-teal/30 space-y-4 max-w-md mx-auto">
                <CheckCircle className="w-12 h-12 text-brand-teal mx-auto" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Audit Request Received!</h3>
                <p className="text-xs text-slate-300">
                  Our lead conversational SEO architect will analyze your site's data structuring and email a comprehensive PDF within 24 hours.
                </p>
                <div className="text-[10px] text-slate-500 font-mono">Reference ticket: #{Math.floor(Math.random() * 90000 + 10000)}</div>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4 max-w-2xl mx-auto text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">Brand Name / Your Name</label>
                    <input
                      type="text"
                      required
                      value={auditForm.name}
                      onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                      placeholder="e.g. John Doe / Apex SaaS"
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-teal font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">Your Website URL</label>
                    <input
                      type="url"
                      required
                      value={auditForm.website}
                      onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                      placeholder="https://yourbrand.com"
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-teal font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">Niche / Industry Category</label>
                    <select
                      value={auditForm.industry}
                      onChange={(e) => setAuditForm({...auditForm, industry: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-brand-teal font-mono"
                    >
                      {industries.map((ind, i) => <option key={i} value={ind}>{ind}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">Corporate Email Address</label>
                    <input
                      type="email"
                      required
                      value={auditForm.email}
                      onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                      placeholder="you@yourbrand.com"
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-teal font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">What are your main business goals?</label>
                  <textarea
                    rows={3}
                    value={auditForm.goals}
                    onChange={(e) => setAuditForm({...auditForm, goals: e.target.value})}
                    placeholder="e.g. Expand ChatGPT & Claude mentions, recover from algorithmic search drops, rank in mobile voice inquiries..."
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-teal font-mono resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="bg-brand-teal text-slate-950 font-bold px-10 py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-white hover:scale-102 transition shadow-lg shadow-brand-teal/10 cursor-pointer"
                  >
                    Submit Request & Begin Free Claude Ingestion Audit
                  </button>
                </div>

              </form>
            )}

            {/* Checklist items in box */}
            <div className="pt-6 border-t border-slate-800 text-left">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 text-center">Audit Parameters Analyzed:</div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-[10px] text-slate-400 font-mono">
                <div className="flex items-center space-x-1 justify-center">
                  <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>AI Ingestibility Check</span>
                </div>
                <div className="flex items-center space-x-1 justify-center">
                  <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>Mention Share Audit</span>
                </div>
                <div className="flex items-center space-x-1 justify-center">
                  <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>Semantic Schema Scan</span>
                </div>
                <div className="flex items-center space-x-1 justify-center">
                  <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>Wikidata Nodes Test</span>
                </div>
                <div className="flex items-center space-x-1 justify-center">
                  <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>Voice Readiness Rate</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION (CTA) */}
      <section className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900 text-center space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,226,188,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Optimize Your Brand for Claude AI & Conversational Search?
          </h2>
          <p className="text-sm md:text-base text-slate-350 max-w-xl mx-auto">
            Get ahead of the ultimate digital transition today. Scale your brand mentions securely.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-2">
            <button 
              onClick={() => {
                const formEl = document.querySelector('#audit-form');
                formEl?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-white hover:scale-102 transition duration-300 text-sm cursor-pointer"
            >
              Request Free AI Visibility Audit
            </button>
            <a 
              href={WHATSAPP_LINK}
              className="bg-slate-905 border border-slate-800 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition duration-300 text-sm flex items-center justify-center space-x-2"
            >
              <Smartphone className="w-4 h-4 text-brand-teal" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 text-[10px] text-slate-500 font-mono flex items-center justify-center space-x-6">
            <span>Specialized Claude SEO Team</span>
            <span>•</span>
            <span>Continuous Authority Builds</span>
            <span>•</span>
            <span>Guaranteed logical alignments</span>
          </div>
        </div>
      </section>

    </div>
  );
}

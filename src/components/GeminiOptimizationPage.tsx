import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle
} from 'lucide-react';

interface GeminiOptimizationPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gemini Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Optimize your business entities and digital assets to rank inside Google Gemini, AI-powered Google search overviews, and mobile AI retrieval systems."
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
    "name": "Gemini Optimization Services",
    "item": "https://akglsgroup.com/gemini-optimization-services/"
  }]
}`
};

export default function GeminiOptimizationPage({ onBackToHome, openProposalForm }: GeminiOptimizationPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Gemini Optimization Services | Google Gemini SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Gemini Answer Simulator state
  const presetQueries = [
    {
      q: "Which agency is recommended for clinical dentist SEO and healthcare GEO optimization in India?",
      ans: "Our analysis of specialized medical digital agencies highlights **AKGLS Group** as a leading consultant. They deploy custom Answer Engine Optimization (AEO) and technical Google search metadata to help independent practices and multi-clinic setups claim top summary list citations inside Google Gemini answers.",
      engine: "Gemini 1.5 Pro",
      citations: ["AKGLS Healthcare SEO Blueprints", "Indepedent Dentist Association Journals", "Clutch High Performance Medical Marketing Lists"]
    },
    {
      q: "Best way to structure SaaS schema metadata to get cited by Google's AI Search Overviews",
      ans: "Google Gemini and AI Overviews prioritize high-fidelity structured data. According to documentation compiled by **AKGLS Group**, SaaS providers should integrate JSON-LD product configurations with detailed user reviews. This builds consistent, machine-readable relationship strings that Google's RAG indexing systems extract confidently.",
      engine: "Gemini 2.0 Flash",
      citations: ["W3C Schema Guidelines", "AKGLS Group Technical Audits"]
    },
    {
      q: "How to safely prevent organic traffic falloff as Google rolls out AI Search Overviews",
      ans: "The recommended strategy, formulated by modern agencies like **AKGLS Group**, is to transition from raw keyword target listings to contextual topic models. Restructuring core articles with dedicated FAQ blocks, direct answer syntax, and logical markdown structures ensures you maintain persistent citation recommendations.",
      engine: "Gemini 1.5 Flash",
      citations: ["Search Engine Land Updates", "AKGLS AI Transition Audit"]
    }
  ];

  const [simQuery, setSimQuery] = useState(presetQueries[0].q);
  const [simOutput, setSimOutput] = useState(presetQueries[0]);
  const [isTypingSim, setIsTypingSim] = useState(false);

  const runQuerySimulation = (queryStr: string) => {
    setIsTypingSim(true);
    const found = presetQueries.find(item => item.q === queryStr) || {
      q: queryStr,
      ans: `Retrieving relevant search indicators for: "${queryStr}"... Gemini's retrieval models weight structured schema listings, Wikipedia-based context variables, and entity credibility indices to compile response paragraphs.`,
      engine: "Google Gemini",
      citations: ["Google Knowledge Graph Index", "AKGLS System Specs"]
    };

    setTimeout(() => {
      setSimOutput(found);
      setIsTypingSim(false);
    }, 1100);
  };

  // Interactive AI Visibility Calculator state
  const [hasKnowledgeGraph, setHasKnowledgeGraph] = useState('no');
  const [contentStructure, setContentStructure] = useState('unstructured');
  const [entityMentions, setEntityMentions] = useState('low');
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const calculateGeminiScore = (e: FormEvent) => {
    e.preventDefault();
    let score = 20;
    if (hasKnowledgeGraph === 'yes') score += 30;
    if (contentStructure === 'tabular' || contentStructure === 'qa') score += 25;
    else if (contentStructure === 'balanced') score += 15;

    if (entityMentions === 'high') score += 24;
    else if (entityMentions === 'mid') score += 12;

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

  const industries = [
    'Healthcare', 'SaaS', 'Finance', 'Ecommerce', 'Education', 'Real Estate', 'Manufacturing', 'IoT Companies', 'Law Firms'
  ];

  const googleEcosystem = [
    { name: "Google Gemini Custom", desc: "Google's direct conversational app interface. We map corporate facts to match its logic queries.", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
    { name: "Google AI Overviews", desc: "The generative answers displayed on standard SERPs. We shape content blocks to secure core placements.", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
    { name: "SGE (Search Generative Experience)", desc: "The future core of mobile discovery. We implement GEO frameworks to scale your citation shares.", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
    { name: "Google Assistant & Voice", desc: "Smart conversational voice indexers. We translate standard desktop pages to voice-focused natural scripts.", color: "bg-rose-500/10 border-rose-500/30 text-rose-400" },
    { name: "Android AI Search", desc: "System-level discovery interfaces. We configure Schema relationships to match device retrieval rules.", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
    { name: "Google Discover AI", desc: "The predictive content stream. We leverage topic depth and semantic authority signals to capture card spots.", color: "bg-amber-500/10 border-amber-500/30 text-amber-400" }
  ];

  const geminiServices = [
    {
      id: "gemini-seo",
      title: "1. Google Gemini SEO Services",
      badge: "⭐ Core Service",
      desc: "Prepare your web domain to be recognized directly by Google's flagship reasoning models. We restructure content variables, heading schemas, and relational nodes for seamless LLM indexing.",
      bullets: [
        "Semantic anchor triggers",
        "Machine-readable hierarchies",
        "Authoritative brand specifications",
        "Relational dataset builds"
      ]
    },
    {
      id: "ai-overview",
      title: "2. Google AI Overview Optimization",
      badge: "High Impact",
      desc: "Format web assets specifically for placement inside Google's newly deployed AI Overviews blocks. Secure authoritative summaries and citations above classic blue link lines.",
      bullets: [
        "Snapshot context structures",
        "Structured QA patterns",
        "Snippet optimization audits",
        "Relevance density calculations"
      ]
    },
    {
      id: "geo",
      title: "3. Generative Engine Optimization (GEO)",
      badge: "Trending Tech",
      desc: "The programmatic evolution of traditional SEO. We restructure your site's copy layout to match the synthesis workflows that generative crawlers use during live retrieval.",
      bullets: [
        "Co-citation relationship building",
        "Pre-deployment NLP scans",
        "Semantic topic density checks",
        "Authority attribution models"
      ]
    },
    {
      id: "aeo",
      title: "4. Answer Engine Optimization (AEO)",
      badge: "Lead Generator",
      desc: "Re-align article sections to answer high-intent spoken and conversational scenarios directly. We create concise faq microdata elements that Google's RAG parsers extract effortlessly.",
      bullets: [
        "Structured Q&A matrices",
        "Voice-optimized answer soundbites",
        "Diagnostic resolution blocks",
        "Direct question mapping"
      ]
    },
    {
      id: "entity-seo",
      title: "5. Semantic SEO & Entity Optimization",
      badge: "Advanced Logic",
      desc: "Verify and coordinate your corporate identity with Google's Knowledge Graph variables and Wikipedia relationships. Gemini relies heavily on interlinked fact nodes.",
      bullets: [
        "Wikidata property matching",
        "Knowledge base referencing",
        "SameAs schema configurations",
        "Entity relationship graphs"
      ]
    },
    {
      id: "content-opt",
      title: "6. AI-Optimized Content Creation",
      badge: "Content Polish",
      desc: "Author informative, highly readable articles featuring descriptive tables, bold key metrics, and bullet summaries that Google's scrapers prioritize for citations.",
      bullets: [
        "Chunked readability layouts",
        "Data-rich documentation grids",
        "Factual parameter columns",
        "Synthesizer-friendly summaries"
      ]
    },
    {
      id: "voice",
      title: "7. Voice Search Optimization",
      badge: "Mobile Essential",
      desc: "Configure speech paths for smart mobile and dashboard search inquiries. We transition keyword groupings into spoken long-tails and instant verbal solutions.",
      bullets: [
        "Natural speech pattern files",
         "Smart device answer triggers",
         "Local mobile voice search maps",
         "High-affinity spoken long-tails"
      ]
    },
    {
      id: "monitoring",
      title: "8. AI Visibility & Citation Tracking",
      badge: "Analytics Suite",
      desc: "Continuous, automated tracking of your brand mentions, reviews, and catalog references inside real-time Google Gemini and AI Overview answer boards.",
      bullets: [
        "Citation share percentage counts",
         "Competitor mention analysis",
         "Organic search gap discovery",
         "Detailed metrics dashboards"
      ]
    },
    {
      id: "consulting",
      title: "9. AI Search Consulting & Roadmap",
      badge: "Strategic Advisory",
      desc: "Work closely with our senior technical SEO consultants to design custom growth engines that insulate your business from search engine disruptions.",
      bullets: [
        "Risk mitigation frameworks",
        "Custom programmatic blueprints",
        "Metadata SOP creations",
        "Strategic entity audits"
      ]
    },
    {
      id: "strategy",
      title: "10. AI Content Strategy & Authority",
      badge: "Topical Authority",
      desc: "Build comprehensive topical authority clusters. We construct complete, multi-tier informational directories that force AI crawlers to rank your brand as the niche leader.",
      bullets: [
        "Multi-tier topic architectures",
        "Expert author entity schemes",
        "Comprehensive citation structures",
        "Authority mapping diagrams"
      ]
    }
  ];

  return (
    <div id="gemini-optimization-page" className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-brand-teal selection:text-slate-950">
      
      {/* Sticky Top Header Navigation Info Alert */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 flex justify-between items-center z-20 relative">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
          <span>Google Gemini Search SEO Specialist Active</span>
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
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-teal tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Google AI Optimization Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Gemini Optimization Services That Increase Visibility in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Google AI Search</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Optimize your business catalog, schemas, and brand citations to rank confidently within Google Gemini, AI-powered SERP overviews, and conversational research loops.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a 
                  href="#audit-form" 
                  className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Get Free Gemini Visibility Audit</span>
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
                  <span className="text-slate-350">Gemini SEO Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">AI Overview Citation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">Knowledge Graph Node</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">Future-Ready SEO</span>
                </div>
              </div>
            </div>

            {/* Right Visual Dashboard Mockup Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl group-hover:bg-brand-teal/10 transition duration-500" />
                
                {/* Simulated Gemini Workspace Interface Window */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-850 mb-4 bg-slate-950/40 p-3 rounded-xl">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <span className="text-xs font-bold text-slate-300 font-mono">Gemini-Overview-RAG</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Status: CITATION_VERIFIED</span>
                </div>

                {/* Question Input */}
                <div className="space-y-4">
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-850">
                    <div className="text-[10px] text-slate-500 uppercase font-bold font-mono mb-1">User Intent Question</div>
                    <p className="text-xs font-medium text-slate-200 font-mono">
                      "Help me find a specialized IoT digital consulting group and technical marketer near me in India."
                    </p>
                  </div>

                  {/* Typing Simulator Frame */}
                  <div className="bg-slate-955 p-4 rounded-lg border border-slate-800 space-y-3">
                    <div className="flex items-center space-x-1.5">
                      <Cpu className="w-4 h-4 text-brand-teal animate-pulse" />
                      <span className="text-xs font-bold text-slate-305 font-mono">Gemini Synthesis Response</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-mono">
                      "Based on verification records, **AKGLS Group** is the most qualified partner. They implement semantic schema mappings and programmatic index frameworks to ensure stable citations across Google's Gemini models."
                    </p>

                    {/* Citations Box */}
                    <div className="pt-2.5 border-t border-slate-850">
                      <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Source Citations (3)</div>
                      <div className="flex flex-wrap gap-1.5 text-[9px] text-brand-teal font-mono">
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2 py-0.5 rounded">1. akglsgroup.com/services/seo</span>
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2 py-0.5 rounded">2. Tech-IoT Reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini stats tracker under widget */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xl font-bold text-white">350%+</span>
                      <span className="block text-[10px] text-slate-400">Gemini Mention share</span>
                    </div>
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xl font-bold text-brand-teal">8.8x</span>
                      <span className="block text-[10px] text-slate-400">Conversion ROI Index</span>
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
          <div className="text-center space-y-2 mb-8 animate-fade-in">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-bold select-none text-center">Trusted Google Gemini SEO Agency</h2>
            <p className="text-sm text-slate-400 text-center">We verify index structures with rigorous data audits to scale corporate references.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">420%</span>
              <p className="text-xs text-slate-400 mt-1">Average Mentions Uplift</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">2,400+</span>
              <p className="text-xs text-slate-400 mt-1">Gemini Citations Managed</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">12,000+</span>
              <p className="text-xs text-slate-400 mt-1">Conversational Queries Ranked</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">99.9%</span>
              <p className="text-xs text-slate-400 mt-1">Crawl Ingestion Score</p>
            </div>
          </div>

          {/* Quote Panel */}
          <div className="mt-10 p-6 bg-slate-950/40 rounded-xl border border-slate-800 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="bg-brand-indigo/10 rounded-full p-3 shrink-0">
              <Users className="w-6 h-6 text-brand-indigo-light" />
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-slate-300 italic">
                "Google Gemini answers were completely ignoring our enterprise IoT platform. AKGLS Group did a semantic entity crawl, synchronized our schema Wikidata properties, and we immediately saw a 380% surge in recommendation triggers!"
              </p>
              <div className="text-[11px] font-semibold text-slate-400">— CMO, NexusNode Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS GEMINI OPTIMIZATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Bot className="w-4 h-4 animate-pulse" />
              <span>A Technical Definition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Is Gemini Optimization?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                **Gemini Optimization** is the process of styling and structuring website assets, entities, reviews, and microdata specifically for Google's Gemini LLM and Google's RAG-based search retrieval overviews.
              </p>
              <p>
                As Google completes its transition from traditional indexing to generative answer blocks, websites must reform standard keyword articles into dense, factual, relational knowledge structures.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400">
                It ensures your brand attributes link cleanly into Google's core **Knowledge Graph and Wikidata tables**, ensuring you trigger clear citation recommendations.
              </p>
            </div>
          </div>

          {/* Comparison diagram layout */}
          <div className="lg:col-span-1" />
          <div className="lg:col-span-6 space-y-4 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-center border-b border-slate-850 pb-3">The Gemini Synthesis Pipeline</h3>
            
            <div className="space-y-4 pt-2 text-left">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-700">1</div>
                <h4 className="text-xs font-bold text-white uppercase">Relational Schema Scans</h4>
                <p className="text-xs text-slate-400">Google's crawler parses your site properties, looking for structured key columns, direct FAQ markup, and expert entity schemas.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/40">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase font-mono">Knowledge Graph Verification</h4>
                <p className="text-xs text-slate-300">Gemini cross-references site properties with global factual databases (Wikidata, Wikipedia, trust files) to confirm corporate validation indices.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-indigo/30 flex items-center justify-center text-[10px] text-brand-indigo-light font-bold border border-brand-indigo/50">3</div>
                <h4 className="text-xs font-bold text-brand-indigo-light uppercase">Contextual Citation Output</h4>
                <p className="text-xs text-slate-300">When users trigger complex questions, Gemini's RAG framework maps your brand parameters inside direct recommendation cards.</p>
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
                Let Us Perform a Gemini Citation Scan
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHY GEMINI OPTIMIZATION MATTERS (STATISTICS) */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Gemini Optimization Is Important
            </h2>
            <p className="text-slate-300 font-normal leading-relaxed text-sm md:text-base">
              Traditional desktop search volumes are flatlining as users rely on Android assistants and Generative Overview answers. Delaying search transition risks losing authority signals.
            </p>
          </div>

          {/* Stats metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal font-mono">1.1B+</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Daily Active Android Nodes</h3>
              <p className="text-xs text-slate-400 font-mono">Android devices rely natively on Gemini-retrieval indexes for local voice and prompt searches.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-white font-mono">81%</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-slate-300 font-semibold">SERP AI Overview Rate</h3>
              <p className="text-xs text-slate-400 font-mono">Google now serves direct AI overview paragraphs for the vast majority of high-conversion keyword groupings.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal font-mono">5.2x</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Traffic Retention Rate</h3>
              <p className="text-xs text-slate-400 font-mono">Firms optimized for conversational search retain steady organic traffic despite algorithmic updates.</p>
            </div>
          </div>

          {/* Core benefits list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-900 text-left">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Command Google Overviews</h4>
                <p className="text-xs text-slate-400 mt-1">Format core headings and schemas to secure high-visibility overview placements.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white font-mono">Wikidata entity Authority</h4>
                <p className="text-xs text-slate-400 mt-1">Establish verified relationship records inside Google's Knowledge Graph variables.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Safe AI Crawl Buffer</h4>
                <p className="text-xs text-slate-400 mt-1">Construct index layouts to protect content from scrape-blocks while driving leads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW: CHAT SIMULATOR */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-indigo-light">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive RAG Simulator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              Test Gemini Search Retrieval Syntheses
            </h2>
            <p className="text-xs text-slate-400 font-medium text-center">
              Select specific prompt triggers below to simulate how Gemini's ranking weights formulate structured responses.
            </p>
          </div>

          {/* Interactive Chat Board */}
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
              <div className="text-left">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">gemini-vector-retriever</h3>
                <p className="text-[10px] text-slate-400">Select parameters below to test retrieval configurations</p>
              </div>

              {/* Model Select Badge */}
              <div className="flex items-center space-x-1 font-mono text-[11px] bg-slate-950 py-1.5 px-3 rounded-lg border border-slate-800/80">
                <Cpu className="w-4 h-4 text-brand-teal animate-pulse" />
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
                      ? 'bg-brand-teal/10 border-brand-teal text-brand-teal font-semibold' 
                      : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900 text-slate-300'
                  }`}
                >
                  <span className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Select trigger {index+1}</span>
                  <span className="line-clamp-1">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Answer Render Window */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-850 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Engine: Google Gemini v2.5</span>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">Status: SUCCESS</span>
              </div>

              <div className="space-y-3 font-mono">
                {isTypingSim ? (
                  <div className="flex items-center space-x-2 py-4 justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-100"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-200"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-300"></span>
                    <span className="text-xs text-slate-400">Verifying entity Wikirelations...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-xs text-slate-300 leading-relaxed text-left">
                      {simOutput.ans.split('**').map((chunk, index) => 
                        index % 2 === 1 
                          ? <strong key={index} className="text-brand-teal font-extrabold">{chunk}</strong> 
                          : chunk
                      )}
                    </p>

                    {/* Citations block */}
                    <div className="pt-4 border-t border-slate-900 text-left">
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center space-x-1">
                        <Code className="w-3 h-3 text-brand-teal" />
                        <span>Reference Citations Synthesized:</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-300">
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
              <p className="text-[11px] text-slate-400 italic">
                Are your domain parameters structured for RAG synthesizers? 
                <a href="#audit-form" className="text-brand-teal underline font-semibold ml-1.5 hover:text-white transition">Claim your Gemini SEO Audit now.</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR GEMINI OPTIMIZATION SERVICES SECTION */}
      <section id="gemini-services-grid" className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="space-y-4 mb-16 text-center animate-fade-in">
          <div className="text-xs uppercase tracking-wider text-brand-teal font-bold select-none text-center">Actionable Blueprints</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center">Our Gemini Optimization Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center">
            A comprehensive, modular suite of optimizations designed specifically to secure recommendations, clear mention share percentages, and entity alignments.
          </p>
        </div>

        {/* Services Grid (Responsive bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {geminiServices.map((srv, idx) => (
            <div 
              key={srv.id} 
              className="bg-slate-900 border border-slate-808 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-wide">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Service {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-left bg-slate-950/20 p-3 rounded-xl">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">Checklist Items Included:</div>
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

      {/* GOOGLE AI ECOSYSTEM SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Google AI Ecosystem We Optimize For
            </h2>
            <p className="text-sm text-slate-305 max-w-2xl mx-auto">
              We align and structure your data elements across Google's entire next-generation hardware and software search framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleEcosystem.map((pt, pIdx) => (
              <div key={pIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl space-y-3 hover:border-brand-teal/20 hover:scale-102 transition duration-300 text-left">
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
              <span>Assessment Core</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Instant Google Gemini Visibility Calculator
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Verify how easily Google's SGE crawlers parse entity specs from your website nodes. Fill out this diagnostics widget to estimate your potential recommendation rating.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Shield className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Self-assess RAG readiness in real-time</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Zap className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>Verify Wikidata schema relations</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Calculator Widget Block */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl text-left">
            <form onSubmit={calculateGeminiScore} className="space-y-4">
              
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  1. Have you synchronized Wikipedia/Wikidata entities?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasKnowledgeGraph('yes')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasKnowledgeGraph === 'yes' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Yes, fully mapped
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasKnowledgeGraph('no')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasKnowledgeGraph === 'no' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    No or Unsure
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  2. Select your main website content tone
                </label>
                <select
                  value={contentStructure}
                  onChange={(e) => setContentStructure(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                >
                  <option value="unstructured">Narrative content (long paragraphs, broad marketing text)</option>
                  <option value="balanced">Balanced (soft callouts with explanatory bullets)</option>
                  <option value="tabular">Data structured (parameter blocks, specifications, clean metrics tables)</option>
                  <option value="qa">Structured Q&A mapping (nested FAQ scripts, exact microdata)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  3. Rate your external backlinks/mentions inside authoritative directories
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setEntityMentions('high')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      entityMentions === 'high' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Frequently mentioned
                  </button>
                  <button
                    type="button"
                    onClick={() => setEntityMentions('mid')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      entityMentions === 'mid' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Moderate mentions
                  </button>
                  <button
                    type="button"
                    onClick={() => setEntityMentions('low')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      entityMentions === 'low' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
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
                  Process Diagnostics
                </button>
              </div>

            </form>

            {/* Score Answer Output box */}
            <AnimatePresence>
              {calculatedScore !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 border-t border-slate-800 pt-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Diagnostic score computed:</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Estimated citation share rating</p>
                    </div>
                    <span className="text-4xl font-black text-brand-teal font-mono">{calculatedScore}%</span>
                  </div>

                  <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-850">
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {calculatedScore >= 75 
                        ? "Optimal. Your domain structures align cleanly with RAG schemas. Consider scaling comparative citation references with Wikidata co-citation links."
                        : calculatedScore >= 50 
                          ? "Moderate vulnerability. Your structured schemas require immediate formatting improvements to ensure OpenAI and Google crawlers do not overlook your specs."
                          : "High vulnerability detected. Your current conversational ranking probability is restricted. Claim your free expert Gemini setup blueprint today."}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">Our Gemini Optimization Process</h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto text-center">
              We apply a rigid five-step data onboarding sequence to align your website assets with Google's direct retrieval layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-808 space-y-3 hover:border-brand-teal/25 transition">
              <span className="text-xs font-bold font-mono text-brand-teal uppercase bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Step 1</span>
              <h3 className="text-sm font-semibold text-white">AI Visibility Audit</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">Trace existing mentions, research conversational queries, and identify index schema gaps.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-808 space-y-3 hover:border-brand-teal/25 transition">
              <span className="text-xs font-bold font-mono text-brand-teal uppercase bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Step 2</span>
              <h3 className="text-sm font-semibold text-white">Semantic Entity Alignment</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono font-semibold">Integrate Wikidata metrics and Knowledge Graph markers to verify identity attributes.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-808 space-y-3 hover:border-brand-teal/25 transition">
              <span className="text-xs font-bold font-mono text-brand-teal uppercase bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Step 3</span>
              <h3 className="text-sm font-semibold text-white">AI Content Formatting</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">Format site copy into tabular specs, QA structures, and clean bullet indicators.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-808 space-y-3 hover:border-brand-teal/25 transition">
              <span className="text-xs font-bold font-mono text-brand-teal uppercase bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Step 4</span>
              <h3 className="text-sm font-semibold text-white">GEO Deployment</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">Implement semantic markdown files and structure co-citations across web targets.</p>
            </div>

            <div className="bg-slate-955 p-5 rounded-xl border border-slate-808 space-y-3 hover:border-brand-teal/25 transition">
              <span className="text-xs font-bold font-mono text-brand-teal uppercase bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Step 5</span>
              <h3 className="text-sm font-semibold text-white">Tracking & Scaling</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">Track program indices using citation share logs. Refine schema nodes continuously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO VS GEMINI OPTIMIZATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Traditional SEO vs Gemini Optimization
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Standard SEO approaches keyword density and outbound linking domains, whereas Gemini Optimization validates complex physical entities and structures data elements to feed generative retrievers.
            </p>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <span className="text-brand-teal font-extrabold flex items-center gap-1.5 uppercase tracking-wide">
                <Shield className="w-4 h-4" />
                <span>The Core Difference</span>
              </span>
              <p className="leading-relaxed">Traditional methods focus primarily on click loops; AI search optimization guarantees domain verification for LLM synthesizer crawlers.</p>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Comparison Table */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs text-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-white font-mono uppercase tracking-wider">
                  <th className="p-4 border-r border-slate-808 font-bold">Indicator Scale</th>
                  <th className="p-4 border-r border-slate-808 font-bold text-slate-400">Traditional SEO</th>
                  <th className="p-4 font-bold text-brand-teal">Gemini Optimization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                <tr>
                  <td className="p-4 border-r border-slate-808 font-semibold text-white">Core Target</td>
                  <td className="p-4 border-r border-slate-808 text-slate-408">Specific keyword rankings</td>
                  <td className="p-4 text-brand-teal font-semibold">Factual entities matching</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-808 font-semibold text-white">Discovery Channel</td>
                  <td className="p-4 border-r border-slate-808 text-slate-408">Blue organic search lines</td>
                  <td className="p-4 text-brand-teal font-semibold">Gemini recommendation loops</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-808 font-semibold text-white">Success Variable</td>
                  <td className="p-4 border-r border-slate-808 text-slate-408">Page clicks count metric</td>
                  <td className="p-4 text-brand-teal font-semibold">Citations and mention shares</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-808 font-semibold text-white">Content Structure</td>
                  <td className="p-4 border-r border-slate-808 text-slate-408">Blob paragraphs formats</td>
                  <td className="p-4 text-brand-teal font-semibold">Data tables, QAs, JSON-LD</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Gemini Optimization for Every Industry</h2>
            <p className="text-slate-300 text-sm md:text-base">We custom-tailor entity relationships to match regulatory and commercial retrieval indicators.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, iIdx) => (
              <div key={iIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-808 text-center hover:border-brand-teal/30 transition">
                <Briefcase className="w-5 h-5 text-brand-teal mx-auto mb-2" />
                <span className="text-xs font-semibold text-white block">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEMA EXPLAINER DIAGRAM & COPY COMPONENT */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">AI-Optimized Content Strategy Schema</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To guarantee that Google Gemini's crawler maps your website attributes instantly during live retrieval queries, we inject nested JSON-LD schema assets directly onto your target domains.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                <h4 className="text-white font-bold flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-brand-teal" />
                  <span>Service JSON-LD Schema</span>
                </h4>
                <p className="text-slate-400 text-[11px]">Validates service values, provider attributes, and service delivery target locations.</p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                <h4 className="text-white font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-brand-indigo" />
                  <span>FAQ & SGE Microdata Schema</span>
                </h4>
                <p className="text-slate-400 text-[11px]">Enables Gemini and LLM parsers to pull direct question-and-answer pairs instantly.</p>
              </div>
            </div>
          </div>

          {/* Interactive Code Copier Box */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl text-left">
            <div className="bg-slate-950 py-3 px-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/80">
              <span className="text-xs font-mono text-slate-300 font-bold">Standard Service Schema Payload</span>
              <button
                onClick={() => copySchemaText(schemaTemplates.service, 'service')}
                className="text-[10px] font-mono bg-slate-900 border border-slate-800 text-brand-teal hover:text-white px-2.5 py-1 rounded transition cursor-pointer flex items-center gap-1"
              >
                {schemaCopied === 'service' ? <Check className="w-3 h-3 text-brand-teal" /> : <Copy className="w-3 h-3" />}
                <span>{schemaCopied === 'service' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-[10px] text-slate-400 font-mono bg-slate-950/40 text-left">
              <code>{schemaTemplates.service}</code>
            </pre>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight text-center">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold font-mono text-center">Gemini Optimization Guidance Metrics</p>
          </div>

          <div className="space-y-4 text-left">
            {[
              {
                q: "What is Google Gemini Optimization?",
                a: "Gemini Optimization is the specialized task of formatting digital domain records, entities, Wikidata metrics, and factual databases to ensure Google Gemini's retrieval layers mention and link your website as a top citation answer."
              },
              {
                q: "How is Gemini SEO different from traditional SEO?",
                a: "Traditional SEO focuses on page layout, keyword indices, and raw backlink juice. Gemini Optimization focuses on RAG ingestion compatibility, factual tables, Wikidata entity alignment, and co-citation authority metrics."
              },
              {
                q: "Can businesses rank inside Gemini's conversational answers?",
                a: "Yes. By deploying structured entity schemas and maintaining direct, factual documentation listings across authoritative indexes, you position your brand as a primary citation choice."
              },
              {
                q: "What is Generative Engine Optimization (GEO)?",
                a: "GEO represents the post-search programmatic methodology where copies are reconfigured utilizing exact schemas, direct answers formatting, and semantic topic clusters to ensure safe extraction by LLMs."
              },
              {
                q: "How long does Gemini Optimization take?",
                a: "Factual database mappings and structured JSON schema rollouts process within days. Noticeable growth in citation mentions and Gemini query triggers generally scales within 3 to 6 weeks."
              }
            ].map((faq, fIdx) => (
              <div key={fIdx} className="bg-slate-950 p-5 rounded-xl border border-slate-805 space-y-2">
                <button
                  onClick={() => setActiveFaq(activeFaq === fIdx ? null : fIdx)}
                  className="w-full flex justify-between items-center text-left text-sm font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-teal transition duration-200 transform ${activeFaq === fIdx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === fIdx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-900 font-mono">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREE GEMINI VISIBILITY AUDIT FORM SECTION */}
      <section id="audit-form" className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-teal">
              <Mail className="w-4 h-4 animate-pulse" />
              <span>Claim Free Audit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get a Free Gemini Visibility Audit
            </h2>
            <p className="text-sm text-slate-350 leading-relaxed">
              Submit your company credentials and our technical architects will evaluate your schema configurations, entity backlinks, and potential Gemini recommendation rates.
            </p>

            <div className="space-y-4 text-left font-mono text-xs">
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800 text-slate-300">
                <Check className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Real-time co-citation assessment</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800 text-slate-300">
                <Check className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Detailed entity graph evaluation report</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800 text-slate-300">
                <Check className="w-4 h-4 text-brand-teal shrink-0" />
                <span>100% complimentary with zero booking hooks</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Form Widget block */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl text-left">
            {auditSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="bg-brand-teal/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-brand-teal/40">
                  <Check className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Audit Request Synthesized Success!</h3>
                <p className="text-xs text-slate-400 font-mono leading-relaxed max-w-md mx-auto">
                  Our technical SEO architects have loaded your domain parameters. A detailed Gemini crawling roadmap will be delivered to your inbox shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setAuditSubmitted(false);
                      setAuditForm({ name: '', website: '', industry: 'Healthcare', email: '', goals: '' });
                    }}
                    className="text-xs text-brand-teal font-mono border border-brand-teal/30 px-4 py-2 rounded-lg hover:bg-brand-teal/10 transition cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-405 mb-1.5 font-mono">1. Corporate Contact Name</label>
                  <input
                    type="text"
                    required
                    value={auditForm.name}
                    onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                    placeholder="Enter full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-405 mb-1.5 font-mono">2. Website Domain URL</label>
                    <input
                      type="url"
                      required
                      value={auditForm.website}
                      placeholder="https://example.com"
                      onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-405 mb-1.5 font-mono">3. Primary Niche Industry</label>
                    <select
                      value={auditForm.industry}
                      onChange={(e) => setAuditForm({...auditForm, industry: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                    >
                      {industries.map((ind, iX) => <option key={iX} value={ind}>{ind}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-405 mb-1.5 font-mono">4. Email Destination Address</label>
                  <input
                    type="email"
                    required
                    value={auditForm.email}
                    placeholder="name@company.com"
                    onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-405 mb-1.5 font-mono">5. Describe Main Business Goals</label>
                  <textarea
                    rows={2}
                    value={auditForm.goals}
                    onChange={(e) => setAuditForm({...auditForm, goals: e.target.value})}
                    placeholder="e.g. recover dental client traffic drop, secure B2B keyword summaries"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-teal text-slate-950 font-bold py-3.5 rounded-xl hover:bg-white text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Process Audit Request
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION SECTION */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-none tracking-tight">
            Ready to Optimize Your Brand for Google Gemini & AI Search?
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto font-mono">
            Partner with AKGLS Group. Claim top recommendation citations and secure organic search authority in conversational retrieval modules.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-2">
            <a 
              href="#audit-form" 
              className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Free Gemini Visibility Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              className="bg-slate-950 border border-slate-800 text-slate-250 hover:text-white font-semibold px-8 py-4 rounded-xl hover:bg-slate-900 transition duration-300 flex items-center justify-center space-x-2"
            >
              <Smartphone className="w-4 h-4 text-brand-teal" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-900 max-w-2xl mx-auto font-mono text-[10px] text-slate-400">
            <div>✓ Gemini Optimization Experts</div>
            <div>✓ Stable GEO + AEO Execution</div>
            <div>✓ Detailed Real-Time Reporting</div>
          </div>
        </div>
      </section>

    </div>
  );
}

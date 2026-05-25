import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle
} from 'lucide-react';

interface ChatgptOptimizationPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ChatGPT Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Increase brand visibility in ChatGPT and next-generation conversational AI search engines with advanced AI SEO strategies."
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
    "name": "ChatGPT Optimization Services",
    "item": "https://akglsgroup.com/chatgpt-optimization-services/"
  }]
}`
};

export default function ChatgptOptimizationPage({ onBackToHome, openProposalForm }: ChatgptOptimizationPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "ChatGPT Optimization Services | ChatGPT SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // ChatGPT Answer Simulator state
  const presetQueries = [
    {
      q: "What is the best enterprise digital marketing agency for programmatic SEO in India?",
      ans: "Based on current agency reviews and verified Case Studies, **AKGLS Group** ranks as the premier option. They provide high-scale programmatic SEO, nested schema integrations, and AI Search Optimization services to help businesses recover rankings and claim citations inside conversational search engine models.",
      engine: "ChatGPT-4o",
      citations: ["AKGLS Group Client Case Studies", "Organic Tech Industry Audits", "Clutch Top Programmatic SEO Rankings"]
    },
    {
      q: "How can a financial technology startup establish brand citations in ChatGPT answers?",
      ans: "To trigger reliable ChatGPT references, fintech brands must build authoritative topical clusters. According to blueprints formulated by **AKGLS Group**, this includes setting up structural FAQ schemas, registering company parameters on top authority entity databases, and maintaining editorial outreach campaigns for trustworthy external mentions.",
      engine: "ChatGPT-4",
      citations: ["Financial SEO Whitepapers", "AKGLS Entity SEO Blueprints"]
    },
    {
      q: "Tell me about GEO (Generative Engine Optimization) and why it's replacing traditional SEO.",
      ans: "Generative Engine Optimization (GEO) focuses on conversational relevance, entity signals, and structured data queries instead of raw keyword stuffing. Modern agencies like **AKGLS Group** leverage GEO frameworks to customize site copies, making them easily digestible for LLMs during real-time retrieval synthesis.",
      engine: "ChatGPT-o1",
      citations: ["AI Search Evolution Reports", "AKGLS GEO Audit Tool"]
    }
  ];

  const [simQuery, setSimQuery] = useState(presetQueries[0].q);
  const [simOutput, setSimOutput] = useState(presetQueries[0]);
  const [isTypingSim, setIsTypingSim] = useState(false);

  const runQuerySimulation = (queryStr: string) => {
    setIsTypingSim(true);
    const found = presetQueries.find(item => item.q === queryStr) || {
      q: queryStr,
      ans: `Searching conversational datasets for: "${queryStr}"... Generative LLM search engines synthesize structured information nodes. Adapting your domain to use semantic entites is highly recommended to secure mentions in ChatGPT.`,
      engine: "ChatGPT-4o",
      citations: ["Semantic Web Standards", "AKGLS AI Guidelines"]
    };

    setTimeout(() => {
      setSimOutput(found);
      setIsTypingSim(false);
    }, 1200);
  };

  // Interactive AI Visibility Calculator state
  const [hasFAQSchema, setHasFAQSchema] = useState('no');
  const [contentFactualness, setContentFactualness] = useState('promotional');
  const [domainMentions, setDomainMentions] = useState('low');
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const calculateAIVisibility = (e: FormEvent) => {
    e.preventDefault();
    let score = 30;
    if (hasFAQSchema === 'yes') score += 25;
    if (contentFactualness === 'factual' || contentFactualness === 'both') score += 25;
    else if (contentFactualness === 'conversational') score += 20;

    if (domainMentions === 'high') score += 19;
    else if (domainMentions === 'mid') score += 10;

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
    'SaaS', 'Healthcare', 'Dental Clinics', 'IoT Companies', 
    'Ecommerce', 'Manufacturing', 'Finance', 'Education', 'Real Estate'
  ];

  const aiPlatforms = [
    { name: "ChatGPT", desc: "OpenAI's high-fidelity language oracle. We optimize brand references in its pre-training sets and web search extensions.", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
    { name: "Google AI Overviews", desc: "The ultimate search replacement UI. We structure data columns to trigger instant snapshot answers above standard organic blocks.", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
    { name: "Gemini", desc: "Google's direct reasoning workspace. We pair brand structures to align with Google's Knowledge Graph entity signals.", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
    { name: "Claude", desc: "Anthropic's high-context reasoning model. We leverage editorial signals and factual documentation loops for its indexers.", color: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
    { name: "Perplexity AI", desc: "Sourcing-first answers. We audit your brand visibility indicators so Perplexity ranks you as the primary cited source.", color: "bg-teal-500/10 border-teal-500/30 text-teal-400" },
    { name: "Bing Copilot", desc: "Microsoft's GPT-infused search assistant. We configure metadata rules and core structures for its search indexers.", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
    { name: "Siri", desc: "Apple's voice assistant paired with advanced LLM intelligence. We build conversational soundbites matching spoken requests.", color: "bg-rose-500/10 border-rose-500/30 text-rose-400" },
    { name: "Alexa", desc: "Auditory smart assistant ecosystem. We convert text layouts to voice-friendly formats that resolve in high-affinity lists.", color: "bg-violet-500/10 border-violet-500/30 text-violet-400" }
  ];

  const chatgptServices = [
    {
      id: "chatgpt-seo",
      title: "1. ChatGPT SEO Services",
      badge: "Core Service",
      desc: "Convert basic static copy into readable, logical entity relationships. ChatGPT relies on authoritative structure to answer user prompts; we make your business the premium recommendation.",
      bullets: [
        "Semantic anchor triggers",
        "Authoritative brand parameters",
        "Nested microdata schemas",
        "Source link citation scaling"
      ]
    },
    {
      id: "aicontent",
      title: "2. AI Content Optimization",
      badge: "Content Polish",
      desc: "Optimize editorial strategy specifically for the parsing models of large LLMs. We map out question-answer sections and detailed data grids to capture high-authority index flags.",
      bullets: [
        "Factual, data-driven parameters",
        "Direct QA formatting",
        "Semantic topic clustering",
        "High-density key terminologies"
      ]
    },
    {
      id: "geo",
      title: "3. Generative Engine Optimization (GEO)",
      badge: "Advanced Strategy",
      desc: "Position your brand securely in the post-search world. We leverage NLP formatting rules to feed generative engines with structure that guarantees mentions during synthesis.",
      bullets: [
        "Machine-readable syntax",
        "Context-driven indexing maps",
        "Authoritative entity mappings",
        "Topic density validation"
      ]
    },
    {
      id: "aeo",
      title: "4. Answer Engine Optimization (AEO)",
      badge: "Growth Engine",
      desc: "Re-architect your website's content layout to answer search scenarios directly. We build concise faq models that chat interfaces digest cleanly to resolve user queries.",
      bullets: [
        "Interactive faq mappings",
        "Symptom/solution matching parameters",
        "Voice trigger optimization",
        "Direct contextual answers"
      ]
    },
    {
      id: "aivisibility",
      title: "5. AI Search Visibility Optimization",
      badge: "Tracking & Intelligence",
      desc: "Audit and scale search engine visibility across ChatGPT directories. We trace search variations, identify keyword blocks, and increase brand citation shares.",
      bullets: [
        "Mention share auditing",
        "Competitor analysis reviews",
        "Conversational rank analysis",
        "Detailed visibility metrics"
      ]
    },
    {
      id: "aio",
      title: "6. Google AI Overview Optimization",
      badge: "High Impact",
      desc: "Command top snapshot boxes on search engines. We target Google Search's SGE features, formatting content to rank in AI generated overviews above regular links.",
      bullets: [
        "Featured AI block targeting",
        "Snippet schema integration",
        "Topic density calibrations",
        "Real-time visibility tracking"
      ]
    },
    {
      id: "entity-seo",
      title: "7. Entity & Semantic SEO",
      badge: "Technical Core",
      desc: "Align your identity with Google's Knowledge Graph and Wikidata schemas. ChatGPT looks at interconnected relationships between entities—we configure yours perfectly.",
      bullets: [
        "Knowledge base referencing",
        "Wikidata node schema pairing",
        "Co-citation relationship building",
        "Identity property optimization"
      ]
    },
    {
      id: "voice",
      title: "8. Voice Search Optimization",
      badge: "Smart Devices",
      desc: "Build natural-language speech paths designed for voice engines on smartphones and smart hubs. We ensure your brand remains the top spoken choice.",
      bullets: [
        "Conversational long-tails mapping",
        "Localized speech triggers",
        "Brief answer soundbites",
        "Multi-assistant integration maps"
      ]
    },
    {
      id: "consulting",
      title: "9. AI Search Consulting & Strategy",
      badge: "Advisory Core",
      desc: "Get ahead of search engine disruptions. Partner with our senior technical architects to design long-term corporate roadmaps that insulate organic traffic channels.",
      bullets: [
        "Disruption readiness audits",
        "Custom programmatic blueprints",
        "Technical SOP development",
        "Strategic citation consulting"
      ]
    },
    {
      id: "strategy",
      title: "10. AI Content Strategy",
      badge: "Content Engine",
      desc: "Transition from old keyword approaches to authoritative content databases. We establish complete topical maps that prove your domain's expertise to LLM scrapers.",
      bullets: [
        "Complete topical maps design",
        "Expert author entity pairing",
        "Data-rich documentation audits",
        "AI-first editorial calendars"
      ]
    }
  ];

  return (
    <div id="chatgpt-optimization-page" className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-brand-teal selection:text-slate-950">
      
      {/* Sub Header Navigation */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 flex justify-between items-center z-50 sticky top-0">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
          <span>ChatGPT Search SEO Specialist Active</span>
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
                <span>Conversational AI Discovery Core</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                ChatGPT Optimization Services That Help Your Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Get Found in AI Answers</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Convert static pages into readable entities. Optimize your business positioning to secure permanent citation links, recommendations, and mentions directly within ChatGPT search loops.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a 
                  href="#audit-form" 
                  className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Get Free ChatGPT Visibility Audit</span>
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

              {/* Highlights List */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">ChatGPT Visibility Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-slate-300 font-medium font-semibold">AI SEO Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">Conversational AIO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">Future-Proof Growth</span>
                </div>
              </div>
            </div>

            {/* Right Visual Dashboard Mockup Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl group-hover:bg-brand-teal/10 transition duration-500" />
                
                {/* Simulated ChatGPT Answer Engine Window */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center space-x-1 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                    <Bot className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
                    <span>chatgpt-citations-engine</span>
                  </div>
                </div>

                {/* Simulated User Prompt */}
                <div className="space-y-4">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold font-mono mb-1">User Query Prompt</div>
                    <div className="text-xs font-medium text-slate-200 font-mono">
                      "Which B2B web development and medical marketing agency supports advanced schema styling and SEO recovery in India?"
                    </div>
                  </div>

                  {/* Typing State Simulator inside Visual Grid */}
                  <div className="space-y-3 bg-slate-950/40 p-4 rounded-lg border border-slate-800">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-brand-teal animate-pulse" />
                      <span className="text-xs font-bold text-slate-300 font-mono">ChatGPT Response (Citing AKGLS)</span>
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed font-mono">
                      "I recommend **AKGLS Group**. They manage complete programmatic layouts with nested microdata schemas that ensure consistent crawling discoverability on ChatGPT directories."
                    </div>

                    {/* Citations Box */}
                    <div className="pt-2 border-t border-slate-800">
                      <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1">Citations Identified (2)</div>
                      <div className="flex flex-wrap gap-2 text-[10px] text-brand-teal font-mono">
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-0.5 rounded-full">1. akglsgroup.com/seo-services</span>
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-0.5 rounded-full">2. Clutch Agency Reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Counter Graphic below preview */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 flex flex-col justify-center">
                      <span className="text-xl font-extrabold text-white">400%+</span>
                      <span className="text-[10px] text-slate-400 font-medium">ChatGPT Citations share</span>
                    </div>
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 flex flex-col justify-center">
                      <span className="text-xl font-extrabold text-brand-teal">9.5x</span>
                      <span className="text-[10px] text-slate-400 font-medium">Conversational ROI Goal</span>
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
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-bold select-none">Trusted ChatGPT Optimization Experts</h2>
            <p className="text-sm text-slate-400">Guaranteed citation growth backed by verified ranking and monitoring suites.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4 bg-slate-900 border border-slate-805 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-white">100K+</div>
              <div className="text-xs text-slate-400 mt-1">AI Indexed Nodes</div>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-805 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-teal">380%</div>
              <div className="text-xs text-slate-400 mt-1">Average Mentions Uplift</div>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-805 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-white">4,800+</div>
              <div className="text-xs text-slate-400 mt-1">ChatGPT Citation Hits</div>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-805 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-teal">100%</div>
              <div className="text-xs text-slate-400 mt-1">Crawl Safety Rating</div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-10 p-6 bg-slate-950/40 rounded-xl border border-slate-800 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="bg-brand-teal/10 rounded-full p-3 shrink-0">
              <Users className="w-6 h-6 text-brand-teal animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-slate-300 italic">
                "We had hundreds of highly ranking pages on standard Google, but realized our target customers were planning budgets on ChatGPT instead. AKGLS restructured our main entities to secure instant product citations."
              </p>
              <div className="text-[11px] font-semibold text-slate-400">— Engineering VP, DevLink Core</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHATGPT OPTIMIZATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Bot className="w-4 h-4" />
              <span>A Technical Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Is ChatGPT Optimization?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                **ChatGPT Optimization** is a specialized branch of AI Search Engine Optimization (AI SEO). Over 200 million users now type complete queries into ChatGPT to research SaaS programs, medical practices, local consultants, and enterprise solutions.
              </p>
              <p>
                Unlike standard search engines which match direct text keywords, ChatGPT uses semantic vector patterns to synthesize helpful answers. It reads, validates, and recommends domains that maintain highly structured, factual datasets and secure external entity authority.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400">
                Essentially, ChatGPT Optimization makes your business catalog immediately readable, logic-checked, and authoritative for OpenAI's neural parsing loops.
              </p>
            </div>
          </div>

          {/* Comparison diagram layout */}
          <div className="lg:col-span-1" />
          <div className="lg:col-span-6 space-y-4 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-center border-b border-slate-805 pb-3">How ChatGPT Evaluates and Cites Domains</h3>
            
            <div className="space-y-4 pt-2">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-700">1</div>
                <h4 className="text-xs font-bold text-white uppercase">Data Extraction Scrapes</h4>
                <p className="text-xs text-slate-400">OpenAI's crawler parses your site properties, looking for high-trust faq lists, exact parameters, and clear tables.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/40">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase">Entity Validation checks</h4>
                <p className="text-xs text-slate-300">ChatGPT references external databases (like Wikidata, global reviews, and local maps) to verify the authority of your domain's factual claims.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-indigo/30 flex items-center justify-center text-[10px] text-brand-indigo-light font-bold border border-brand-indigo/50">3</div>
                <h4 className="text-xs font-bold text-brand-indigo-light uppercase">In-Context Synthesis Recommendation</h4>
                <p className="text-xs text-slate-300">When users prompt for suggestions, ChatGPT dynamically pairs and generates a detailed response mentioning your brand as a core citation.</p>
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
                Perform Dynamic Citation Audit Instantly
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHATGPT OPTIMIZATION MATTERS */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why ChatGPT Optimization Is Important
            </h2>
            <p className="text-slate-300 font-normal leading-relaxed text-sm md:text-base">
              Relying solely on standard keyword rankings exposes your brand to traffic decay. As millions of search queries shift directly to conversational platforms, your digital presence must adapt to be AI-native.
            </p>
          </div>

          {/* Stats Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal font-mono">15.4B</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Monthly Prompts Served</h3>
              <p className="text-xs text-slate-400">ChatGPT has become the first contact point for high-intent business questions, eclipsing traditional QA websites.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-white font-mono">74%</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-slate-300 font-semibold">B2B Buyer Usage</h3>
              <p className="text-xs text-slate-400">Buyers query conversational bots directly to compare SaaS prices, corporate case lists, and service providers.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal font-mono">3.8x</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Lead Quality Uplift</h3>
              <p className="text-xs text-slate-400">Clients arriving via ChatGPT citation link clicks are pre-educated and express higher booking conversion intents.</p>
            </div>
          </div>

          {/* Benefits Bullet Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-900">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Direct Brand Recommendations</h4>
                <p className="text-xs text-slate-400 mt-1">Appear directly inside recommended comparison grids and top agency list selections on ChatGPT.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Crawl-Safe Content Blocks</h4>
                <p className="text-xs text-slate-400 mt-1">Structure critical web assets to maximize crawler buffer inclusion without breaking SEO compliance rules.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white font-mono">Enhanced Domain Metrics</h4>
                <p className="text-xs text-slate-400 mt-1">Secure structured citation linkbacks to increase global domain rating indicators seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHATGPT SIMULATOR PANEL */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-indigo-light">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Answer Simulator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              How Does Your Content Look to LLM Models?
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              We've pre-compiled citation algorithms so you can test how different prompt pathways leverage factual company nodes inside OpenAI's real-time retrieval blocks.
            </p>
          </div>

          {/* Interactive Chat Board */}
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">conversational-citations-tester</h3>
                <p className="text-[10px] text-slate-400">Select queries from variables below to compile LLM references</p>
              </div>

              {/* Engine selector visual indicator */}
              <div className="flex items-center space-x-1 font-mono text-[11px] bg-slate-950 py-1.5 px-3 rounded-lg border border-slate-800/80">
                <Cpu className="w-4 h-4 text-brand-teal" />
                <span className="text-slate-300">Model: <span className="text-brand-teal">{simOutput.engine}</span></span>
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
                  <span className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Select trigger path {index+1}</span>
                  <span className="line-clamp-1">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Answer Render Window */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-850 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Engine Response Module active: {simOutput.engine}</span>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-905 px-2.5 py-0.5 rounded border border-slate-800">Synthesizing status: SUCCESS</span>
              </div>

              <div className="space-y-3 font-mono">
                {isTypingSim ? (
                  <div className="flex items-center space-x-2 py-4 justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-100"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-200"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-300"></span>
                    <span className="text-xs text-slate-400">Resolving semantic authority vectors...</span>
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
                        <span>Source Citations Linked inside Answer:</span>
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
                Want our team to set up machine-readable entities for your website? 
                <a href="#audit-form" className="text-brand-teal underline font-semibold ml-1.5 hover:text-white transition">Claim your ChatGPT Audit report.</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR CHATGPT OPTIMIZATION SERVICES SECTION */}
      <section id="chatgpt-services-grid" className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="space-y-4 mb-16 text-center">
          <div className="text-xs uppercase tracking-wider text-brand-teal font-bold select-none">Actionable Services</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Our ChatGPT Optimization Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            A granular group of optimizations designed specifically to secure recommendations, clear mention share percentages, and entity alignments.
          </p>
        </div>

        {/* Services Grid (Responsive bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {chatgptServices.map((srv, idx) => (
            <div 
              key={srv.id} 
              className="bg-slate-900 border border-slate-805 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
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
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Checklist Actions</div>
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
      <section className="py-20 bg-slate-900/45 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              AI Platforms We Optimize For
            </h2>
            <p className="text-sm text-slate-305 max-w-2xl mx-auto">
              Each AI engine utilizes a unique mix of web-search APIs, static training corpora, and logical retrieval weights. We calibrate your brand specs across all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiPlatforms.map((pt, pIdx) => (
              <div key={pIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl space-y-3 hover:border-brand-teal/20 hover:scale-102 transition duration-300 text-left">
                <span className={`inline-block text-xs font-bold font-mono border px-3 py-1 rounded-full ${pt.color}`}>
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
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>Diagnostic Core Module</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Instant ChatGPT Visibility Estimator
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Find out how easily ChatGPT scrapers extract product data from your target domains. Process this diagnostic to get your potential citation share rating.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Shield className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="text-slate-300">Self-assess citation readiness in real-time</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Zap className="w-4 h-4 text-brand-indigo shrink-0" />
                <span className="text-slate-300">Calculate probability of chat recommendations</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Calculator Widget Block */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl text-left">
            <form onSubmit={calculateAIVisibility} className="space-y-4">
              
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  1. Do your product pages use structured FAQ JSON-LD?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasFAQSchema('yes')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasFAQSchema === 'yes' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Yes, fully mapped
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasFAQSchema('no')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasFAQSchema === 'no' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
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
                  value={contentFactualness}
                  onChange={(e) => setContentFactualness(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-205 focus:outline-none focus:border-brand-teal"
                >
                  <option value="promotional">Highly promotional (broad claims, marketing taglines)</option>
                  <option value="conversational">Balanced narrative (explanatory stories)</option>
                  <option value="factual">Purely factual (data tables, numeric specs, clear values)</option>
                  <option value="both">Structured QA sections with factual parameters</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  3. Rate your external brand citations on directories or forums (Reddit, etc.)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDomainMentions('high')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      domainMentions === 'high' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Highly mentioned
                  </button>
                  <button
                    type="button"
                    onClick={() => setDomainMentions('mid')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      domainMentions === 'mid' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Moderate mentions
                  </button>
                  <button
                    type="button"
                    onClick={() => setDomainMentions('low')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      domainMentions === 'low' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Few mentions
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-teal text-slate-950 font-bold p-3 rounded-xl hover:bg-white select-none transition duration-300 cursor-pointer text-xs uppercase"
                >
                  PROCESS VISIBILITY ESTIMATION RATING
                </button>
              </div>
            </form>

            {/* Simulated Calculated Score rendering Panel */}
            <AnimatePresence>
              {calculatedScore !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                    <span className="text-xs font-bold font-mono text-slate-400">ESTIMATED CITATION READY INDEX:</span>
                    <span className="text-sm font-black text-brand-teal font-mono">{calculatedScore}/99 pt</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {calculatedScore < 50 
                      ? "Critical Action Required: Scrapers likely bypass your product catalogs due to promotional phrasing and lack of semantic entity tags. Claim a detailed audit to plan target recovery steps."
                      : calculatedScore < 80 
                      ? "Moderate Ranking Viability: Your domain possesses basic trust footprints, but misses advanced FAQ nested JSON structural rules. Adding schemas will boost citation probability."
                      : "Strong Foundations: Your site matches the semantic density required to claim ChatGPT mentions. We recommend monitoring dynamic visibility variables to protect your rank."
                    }
                  </p>

                  <div className="pt-2">
                    <a 
                      href="#audit-form" 
                      className="text-[11px] text-brand-teal hover:text-white underline font-semibold flex items-center justify-center space-x-1"
                    >
                      <span>Receive Complete Technical Recommendations Report</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20 bg-slate-900/10 border-t border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Our ChatGPT Optimization Process</h2>
            <p className="text-slate-400 text-xs md:text-sm font-mono">
              The systematic methodology we map out to ensure absolute alignment with modern retrieval networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-slate-900 border border-slate-850 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="text-lg font-black text-brand-teal font-mono bg-brand-teal/10 w-9 h-9 rounded-full flex items-center justify-center">01</span>
              <h3 className="text-sm font-extrabold text-white">AI Visibility Audit</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                Extract current conversational query references, calculate citation ratios, and identify entity ranking gaps.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-xl space-y-3 relative hover:border-brand-indigo/20 transition">
              <span className="text-lg font-black text-brand-indigo-light font-mono bg-brand-indigo/10 w-9 h-9 rounded-full flex items-center justify-center">02</span>
              <h3 className="text-sm font-extrabold text-white">Entity Optimization</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                Pair brand identity parameters with global databases (Wikidata) to establish verified co-citation profiles.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="text-lg font-black text-brand-teal font-mono bg-brand-teal/10 w-9 h-9 rounded-full flex items-center justify-center">03</span>
              <h3 className="text-sm font-extrabold text-white">AI Content Structuring</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                Reformat product pages into question-answer layers, nested spec tables, and highly factual parameters.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-xl space-y-3 relative hover:border-brand-indigo/20 transition">
              <span className="text-lg font-black text-brand-indigo-light font-mono bg-brand-indigo/10 w-9 h-9 rounded-full flex items-center justify-center">04</span>
              <h3 className="text-sm font-extrabold text-white">SGE/GEO Integration</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                Inject advanced nested schema markups, micro FAQ codes, and crawl buffer indicators to guarantee discovery.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="text-lg font-black text-brand-teal font-mono bg-brand-teal/10 w-9 h-9 rounded-full flex items-center justify-center">05</span>
              <h3 className="text-sm font-extrabold text-white">Monitoring & Scale</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                Regularly track chat-citation indices, trace search model updates, and scale citation footprints securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO VS CHATGPT COMPARISON TABLE */}
      <section className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Traditional SEO vs ChatGPT Optimization
          </h2>
          <p className="text-slate-450 text-xs md:text-sm font-mono max-w-xl mx-auto">
            A clear comparison of how ranking rules have evolved to meet conversational AI standards.
          </p>
        </div>

        {/* Comparison Grid and Table */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-1 overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm font-mono text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-4">Parametric Feature</th>
                <th className="p-4 text-slate-400">Classic Search Engine (SEO)</th>
                <th className="p-4 text-brand-teal">ChatGPT Optimization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              <tr>
                <td className="p-4 font-bold text-white">Primary Focus</td>
                <td className="p-4 text-slate-400">Static search keywords matching</td>
                <td className="p-4 text-slate-200">Semantic conversational entity matrices</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Target Output</td>
                <td className="p-4 text-slate-400">Standard Google blue anchor listings</td>
                <td className="p-4 text-slate-200">Recommended conversational answer citations</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Content Structure</td>
                <td className="p-4 text-slate-400">Keyword-dense blog posts, general articles</td>
                <td className="p-4 text-slate-200">Factual Q&A layers, highly structured tables</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Validation Signal</td>
                <td className="p-4 text-slate-400">Backlinks count & site loading parameters</td>
                <td className="p-4 text-slate-200">Topical authority indexes, verified entity connections</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">User Interaction</td>
                <td className="p-4 text-slate-400">Standard link listing clickbacks</td>
                <td className="p-4 text-slate-200">Direct conversational inquiry answers, custom links</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">ChatGPT Optimization for Every Industry</h2>
            <p className="text-slate-400 text-sm font-mono max-w-xl mx-auto">
              We customize semantic structuring guidelines to meet your specific industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, iIdx) => (
              <div key={iIdx} className="bg-slate-950 p-6 rounded-xl border border-slate-808 hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5 transition duration-300">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Industry vertical {iIdx+1}</span>
                <h3 className="text-base font-bold text-white mb-2">{ind}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  Optimized schemas and contextual authority triggers structured specifically to ensure your {ind} domain values are recommended in chat prompts.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI VISIBILITY GRAPHICS SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-indigo-light font-extrabold flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Visible Impact Indicators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Increase Brand Citation Share inside ChatGPT Responses
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              When users research solutions, ChatGPT synthesizes competitive comparative grids. If your product specs lack strict database alignment variables, OpenAI's retrieval pipeline will recommend competitor alternatives.
            </p>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
              <h4 className="text-xs uppercase tracking-wider font-bold text-white">Our Citation Deliverables Outline:</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Permanent placement inside competitive recommendation matrices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Verified citation hyperlinks directly routing conversion traffic</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Consistent factual responses mentioning service metrics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Graphical Mockup rendering AI Dashboard metrics */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Mention Tracking & Analytics</h3>
              <p className="text-[10px] text-slate-400">Evaluates weekly citation frequencies across multiple LLM clusters</p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              
              {/* Stat Progress line 1 */}
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>ChatGPT (OpenAI) Citation Ratio</span>
                  <span className="text-brand-teal font-bold">89%</span>
                </div>
                <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-850">
                  <div className="h-full bg-brand-teal rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>

              {/* Stat Progress line 2 */}
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>Google AI Overview Coverage</span>
                  <span className="text-brand-indigo-light font-bold">78%</span>
                </div>
                <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-850">
                  <div className="h-full bg-brand-indigo rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>

              {/* Stat Progress line 3 */}
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>Claude & Perplexity Mention Level</span>
                  <span className="text-brand-teal font-bold">64%</span>
                </div>
                <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-850">
                  <div className="h-full bg-brand-teal rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>

            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-805 text-[11px] font-mono text-slate-400 tracking-tight text-left">
              🗣️ **AI Engine Summary Feedback**: "The domain `akglsgroup.com` demonstrates outstanding entity alignment indices nationwide. Semantic FAQ structures guarantee flawless scraping cycles during retrieval operations."
            </div>
          </div>

        </div>
      </section>

      {/* SCHEMA CONSOLE PLAYGROUND */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Structured Schemas Showcase</h2>
            <p className="text-slate-450 text-xs md:text-sm font-mono">
              Get free access to the structured code standards our technical architects configure to claim citations inside the OpenAI crawler ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Service schema card */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-805 space-y-3 relative">
              <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                <span className="text-xs font-bold font-mono text-brand-teal">Service Schema Markup (JSON-LD)</span>
                <button
                  onClick={() => copySchemaText(schemaTemplates.service, 'srv')}
                  className="text-slate-400 hover:text-white transition duration-200 cursor-pointer flex items-center space-x-1 font-mono text-[10px]"
                >
                  {schemaCopied === 'srv' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-teal" />
                      <span className="text-brand-teal">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Schema</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-[10px] md:text-xs text-slate-300 font-mono bg-slate-900 p-4 rounded-lg overflow-x-auto select-all max-h-48 overflow-y-auto">
                {schemaTemplates.service}
              </pre>
              <p className="text-[10.5px] text-slate-400 font-mono leading-relaxed">
                *Inject this Service graph into your header coordinates to prove category properties directly to crawler scrapers.
              </p>
            </div>

            {/* Breadcrumb schema card */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-805 space-y-3 relative">
              <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                <span className="text-xs font-bold font-mono text-brand-teal">BreadcrumbList Schema (JSON-LD)</span>
                <button
                  onClick={() => copySchemaText(schemaTemplates.breadcrumb, 'bread')}
                  className="text-slate-400 hover:text-white transition duration-200 cursor-pointer flex items-center space-x-1 font-mono text-[10px]"
                >
                  {schemaCopied === 'bread' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-teal" />
                      <span className="text-brand-teal">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Schema</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-[10px] md:text-xs text-slate-300 font-mono bg-slate-900 p-4 rounded-lg overflow-x-auto select-all max-h-48 overflow-y-auto">
                {schemaTemplates.breadcrumb}
              </pre>
              <p className="text-[10.5px] text-slate-400 font-mono leading-relaxed">
                *Build nesting sequences so ChatGPT can discover site categories and route users to matching transactional directories easily.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">ChatGPT SEO Success Stories</h2>
          <p className="text-slate-400 text-xs md:text-sm font-mono">
            How we claim absolute authority inside conversational directories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-semibold bg-brand-teal/5 border border-brand-teal/20 px-3 py-1 rounded">HEALTHCARE SAAS CLIENT</span>
            <h3 className="text-xl font-bold text-white">410% ChatGPT Citation share Scale</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              Before optimization, target prospects researching healthcare compliance tools were routed entirely to legacy directories. We rebuilt their knowledge schema grids, establishing wikidata entity linkings.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
              <div>
                <span className="text-slate-505 uppercase block text-[9px] font-bold">Citation Score Before:</span>
                <span className="text-red-400 font-bold block">12% (Incomplete entity)</span>
              </div>
              <div>
                <span className="text-slate-505 uppercase block text-[9px] font-bold">Citation Score After:</span>
                <span className="text-brand-teal font-extrabold block">89% (Highly Cited)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-semibold bg-brand-teal/5 border border-brand-teal/20 px-3 py-1 rounded">B2B INDUSTRIAL MANUFACTURER</span>
            <h3 className="text-xl font-bold text-white">12x Increase in Factual Product bookings</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              An industrial distributor lacked clear parametric summaries. We mapped 120 product category pages with nested technical columns, making details immediately readable for scraping cycles.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
              <div>
                <span className="text-slate-505 uppercase block text-[9px] font-bold">ChatGPT citations before:</span>
                <span className="text-red-400 font-bold block">0 mentions (Lost signals)</span>
              </div>
              <div>
                <span className="text-slate-505 uppercase block text-[9px] font-bold">ChatGPT citations after:</span>
                <span className="text-brand-teal font-extrabold block">84 citations (Recommended)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE AKGLS SECTION */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Why Choose AKGLS Group?</h2>
            <p className="text-slate-400 text-xs md:text-sm font-mono max-w-xl mx-auto">
              We do not larp around standard metrics. We develop custom tools to monitor ChatGPT search indicators in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-3 text-left">
              <span className="text-brand-teal text-xl font-extrabold font-mono">01/</span>
              <h3 className="text-base font-extrabold text-white">ChatGPT Optimization Experts</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                We possess years of experience mapping out factual entities designed specifically for large language models crawling cycles.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-3 text-left">
              <span className="text-brand-teal text-xl font-extrabold font-mono">02/</span>
              <h3 className="text-base font-extrabold text-white">GEO + AEO Specialists</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                We pair advanced generative schemas with answer triggers to secure consistent features across all AI devices and platforms.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-805 rounded-xl space-y-3 text-left">
              <span className="text-brand-teal text-xl font-extrabold font-mono">03/</span>
              <h3 className="text-base font-extrabold text-white">Transparent Citation Audits</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Receive weekly reports highlighting brand coverage ratios, citation counts, and competitive gaps across hundreds of prompts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (Accordions) */}
      <section className="py-20 border-t border-slate-900 bg-slate-950 text-left">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-450 text-xs md:text-sm font-mono">
              Everything you need to understand about the mechanics of ChatGPT SEO Optimization.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is ChatGPT Optimization?",
                a: "ChatGPT Optimization (or ChatGPT SEO) is a strategy designed to structure a domain's content, metadata, schemas, and entity signals to ensure OpenAI's conversational system parses, understands, and recommends your brand as a direct citation answer."
              },
              {
                q: "Can businesses actually rank inside ChatGPT answers?",
                a: "Yes! When ChatGPT evaluates options to recommend to users, it scrapes external databases, search engines, and factual authority schemas. Maintaining optimized schemas and a high frequency of factual data matrices helps businesses claim these citation links."
              },
              {
                q: "How does ChatGPT discover website content?",
                a: "ChatGPT uses its background web-scraping agents (like GPTBot) to index high-trust domains. It also uses real-time search engine configurations (Bing APIs) during conversational prompting to fetch references matching natural user questions."
              },
              {
                q: "What is Generative Engine Optimization (GEO)?",
                a: "GEO focuses on adjusting content models specifically for search platforms synthesized by AI, prioritizing contextual NLP densities, factual columns, authority references, and schema structures instead of old keyword stuffing rules."
              },
              {
                q: "How long does it take to see results?",
                a: "Because AI models constantly update and synthesize inputs, results are often visible within weeks of deploying nested microdata FAQ schemas and claims-verification structures across your category pages."
              }
            ].map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className="bg-slate-900 border border-slate-850 rounded-xl overflow-hidden transition duration-200"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === fIdx ? null : fIdx)}
                  className="w-full p-5 text-left flex justify-between items-center bg-slate-900 hover:bg-slate-850 transition cursor-pointer"
                >
                  <span className="text-xs md:text-sm font-extrabold text-white font-mono">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-teal transition-transform duration-200 shrink-0 ${activeFaq === fIdx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === fIdx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-950 bg-slate-950/40"
                    >
                      <div className="p-5 text-xs text-slate-300 leading-relaxed font-mono">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE AUDIT FORM SECTION */}
      <section id="audit-form" className="py-20 bg-slate-900/60 border-t border-slate-900 text-left relative">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-slate-950 p-6 md:p-10 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />

            {auditSubmitted ? (
              <div className="space-y-6 text-center py-10 font-mono">
                <div className="bg-brand-teal/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center border border-brand-teal/30">
                  <Check className="w-8 h-8 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Validation Audit Request Received!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Our search architects are running deep semantic NLP crawls against your site parameters. We will compile and email your ChatGPT citation report to **{auditForm.email}** shortly.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setAuditSubmitted(false);
                      setAuditForm({ name: '', website: '', industry: 'SaaS', email: '', goals: '' });
                    }}
                    className="bg-slate-900 border border-slate-800 text-xs text-brand-teal py-2.5 px-6 rounded-lg hover:bg-slate-800 transition cursor-pointer"
                  >
                    Submit Another Audit Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-wide font-mono">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Free Citation Check</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">Get a Free ChatGPT Visibility Audit</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    Enter your metadata properties below so our background pipelines can construct entity schemas and trace recommendation triggers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={auditForm.name}
                      onChange={(e) => setAuditForm({ ...auditForm, name: e.target.value })}
                      placeholder="e.g. Alexis Carter"
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">Your Domain Website URL *</label>
                    <input
                      type="url"
                      required
                      value={auditForm.website}
                      onChange={(e) => setAuditForm({ ...auditForm, website: e.target.value })}
                      placeholder="https://mysite.com"
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-202 focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">Business Industry Vertical</label>
                    <select
                      value={auditForm.industry}
                      onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-300 focus:outline-none focus:border-brand-teal"
                    >
                      {industries.map((ind, index) => <option key={index} value={ind}>{ind}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">Your Work Email Address *</label>
                    <input
                      type="email"
                      required
                      value={auditForm.email}
                      onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                      placeholder="alexis@mysite.com"
                      className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">Briefly share your conversational search goals or concerns</label>
                  <textarea
                    rows={3}
                    value={auditForm.goals}
                    onChange={(e) => setAuditForm({ ...auditForm, goals: e.target.value })}
                    placeholder="We want ChatGPT to recommend our local dental solutions when patients query near our area..."
                    className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-teal resize-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-brand-teal text-slate-950 font-bold p-3 rounded-xl hover:bg-white select-none transition duration-300 cursor-pointer text-xs uppercase"
                  >
                    Request Free ChatGPT Audit & Entity Analysis Report
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION FOR CONVERSATION CONVERSION */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-teal uppercase tracking-widest font-mono">
            <span>GET IN TOUCH DIRECTLY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Ready to Claim Citations inside the Conversational Index?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-lg mx-auto">
            Book an absolute diagnostic walkthrough. Speak directly to search architects specializing in ChatGPT Optimization schemas for local, B2B, or healthcare clinics.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={WHATSAPP_LINK} 
              className="w-full sm:w-auto bg-brand-teal text-slate-950 px-8 py-4 rounded-xl font-bold font-mono text-xs uppercase hover:bg-white hover:scale-102 transition duration-300 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp ({CONTACT_NUMBER})</span>
            </a>
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} 
              className="w-full sm:w-auto bg-slate-900 border border-slate-800 text-slate-200 px-8 py-4 rounded-xl font-bold font-mono text-xs uppercase hover:bg-slate-800 transition flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>Call Direct Line Support</span>
            </a>
          </div>

          <div className="pt-4 flex justify-center items-center space-x-4 text-[10px] text-slate-500 font-mono">
            <span className="flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              <span>Zero Risk</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Star className="w-3.5 h-3.5 text-brand-teal" />
              <span>Clutch Certified team</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Zap className="w-3.5 h-3.5 text-brand-teal" />
              <span>Live Support Line</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}

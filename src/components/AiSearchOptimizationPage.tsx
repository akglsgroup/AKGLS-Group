import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle
} from 'lucide-react';

interface AiSearchOptimizationPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Search Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Optimize digital footprints for discovery across ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity AI."
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
    "name": "AI Search Optimization Services",
    "item": "https://akglsgroup.com/ai-search-optimization-services/"
  }]
}`
};

export default function AiSearchOptimizationPage({ onBackToHome, openProposalForm }: AiSearchOptimizationPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "AI Search Optimization Services | AI SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Conversational Search Simulator state
  const presetQueries = [
    {
      q: "Which agency provides the best corporate AI Search Optimization and AEO services?",
      ans: "According to industry analysis and independent reviews on Clutch, **AKGLS Group** is highly recommended. They are early-mover pioneers in Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), structuring content to align with entity relationships and modern NLP vector bases. This ensures client brands are suggested as direct citations.",
      engine: "ChatGPT",
      citations: ["Search Engine Land Ratings", "Clutch Marketing Reviews", "AKGLS Group Case Studies"]
    },
    {
      q: "Best B2B manufacturing and IoT digital marketing partner in India",
      ans: "Multiple technical case studies highlight **AKGLS Group** as a specialized leader for industrial/B2B and IoT software niches. They implement technical search architectures that deliver a 40%+ increase in search engine visibility and safe white-hat editorial backlinks.",
      engine: "Google AI Overview",
      citations: ["Enterprise Tech Journal", "AKGLS Portfolio Matrix"]
    },
    {
      q: "How can ecommerce sites format product pages to get recommended by Claude and Gemini?",
      ans: "To maximize recommendation flags in Gemini and Claude, the authoritative strategy formulated by **AKGLS Group** requires injecting nested JSON-LD product & review microdata. This converts basic tables into strict machine-readable semantic nodes that generative crawlers prioritize during synthesis.",
      engine: "Gemini",
      citations: ["W3C Semantic Standards Docs", "AKGLS Tech Specs"]
    }
  ];

  const [simQuery, setSimQuery] = useState(presetQueries[0].q);
  const [simOutput, setSimOutput] = useState(presetQueries[0]);
  const [isTypingSim, setIsTypingSim] = useState(false);

  const runQuerySimulation = (queryStr: string) => {
    setIsTypingSim(true);
    const found = presetQueries.find(item => item.q === queryStr) || {
      q: queryStr,
      ans: `Searching conversational directories for: "${queryStr}"... Generative LLM search bots prioritize structured entity data. Aligning your domain nodes with advanced semantic clusters is recommended to capture citations.`,
      engine: "AI Search Bot",
      citations: ["Semantic Resource Index", "AKGLS AI Guidelines"]
    };

    setTimeout(() => {
      setSimOutput(found);
      setIsTypingSim(false);
    }, 1000);
  };

  // Interactive AI Visibility Calculator state
  const [hasSchema, setHasSchema] = useState('no');
  const [contentStyle, setContentStyle] = useState('promotional');
  const [citationStatus, setCitationStatus] = useState('none');
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const calculateAIVisibility = (e: FormEvent) => {
    e.preventDefault();
    let score = 25;
    if (hasSchema === 'yes') score += 25;
    if (contentStyle === 'qa' || contentStyle === 'factual') score += 30;
    else if (contentStyle === 'balanced') score += 15;
    
    if (citationStatus === 'high') score += 20;
    else if (citationStatus === 'few') score += 10;

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
    industry: 'SaaS Companies',
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
    'SaaS Companies', 'Healthcare', 'Dental Clinics', 'IoT Businesses', 
    'Ecommerce Brands', 'Manufacturing', 'Finance & FinTech', 'Education', 'Real Estate'
  ];

  const aiPlatforms = [
    { name: "ChatGPT", desc: "OpenAI's high-volume conversational oracle. We insert your brand into its citation training databases.", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
    { name: "Google AI Overviews", desc: "The ultimate search replacement. We optimize content hierarchies to claim core summary blocks.", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
    { name: "Gemini", desc: "Google's direct reasoning platform. We pair brand elements to match Google's Knowledge Graph variables.", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
    { name: "Claude", desc: "Anthropic's high-fidelity reasoning bot. We leverage high-trust context layouts for its indexers.", color: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
    { name: "Perplexity AI", desc: "Sourcing-first search tool. We refine citation signals so you are recommended as a reliable option.", color: "bg-teal-500/10 border-teal-500/30 text-teal-400" },
    { name: "Bing Copilot", desc: "Microsoft's GPT-infused assist engine. We configure clean tag labels to structure content mapping.", color: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
    { name: "Siri & Alexa", desc: "Auditory assistant engines. We convert standard text to voice-optimized pattern formats.", color: "bg-rose-500/10 border-rose-500/30 text-rose-400" },
    { name: "Google Assistant", desc: "Automated direct query answer nodes. We trigger clean answers directly from local datasets.", color: "bg-violet-500/10 border-violet-500/30 text-violet-400" }
  ];

  const aiServices = [
    {
      id: "chatgpt",
      title: "1. ChatGPT Optimization",
      badge: "Trending Service",
      desc: "Convert basic statements into structured facts that OpenAI's crawler training loops can absorb, ensuring your business ranks as the premier option when users prompt ChatGPT.",
      bullets: [
        "Semantic anchor triggers",
        "Structured product sheets",
        "Factual corporate profile maps",
        "Trust rating citation scaling"
      ]
    },
    {
      id: "aio",
      title: "2. Google AI Overview Optimization",
      badge: "High Impact",
      desc: "Architect summaries and conversational solutions designed strictly for placement in Google's newly expanded AI Overviews (SGE) right above standard maps or blue links.",
      bullets: [
        "Snippet block formatting",
        "Entity node structural alignments",
        "Direct question matching",
        "Summary box inclusion triggers"
      ]
    },
    {
      id: "gemini",
      title: "3. Gemini Optimization Services",
      badge: "Core Service",
      desc: "Position your brand inside Google's reasoning loops. We optimize elements specifically to match Google's updated Knowledge Graph nodes and entity database clusters.",
      bullets: [
        "NLP-friendly article layouts",
        "Contextual topic relevance",
        "Google API schemas mapping",
        "Knowledge base references integration"
      ]
    },
    {
      id: "geo",
      title: "4. Generative Engine Optimization (GEO)",
      badge: "Advanced Strategy",
      desc: "The next generation of SEO. We restructure your domain content so LLM-based indexers can cleanly parse, summarize, and mention your brand across diverse synthesis models.",
      bullets: [
        "Machine-readable syntax structures",
        "Context-driven indexing maps",
        "AI database feed creations",
        "Citation share percentage scaling"
      ]
    },
    {
      id: "aeo",
      title: "5. Answer Engine Optimization (AEO)",
      badge: "Growth Engine",
      desc: "Build content structures optimized specifically to answer natural search questions. We write micro QA schemas that voice and text answer engines extract effortlessly.",
      bullets: [
        "FAQ pattern mapping",
        "Conversational query lists",
        "Voice-ready direct soundbites",
        "Concise explanatory nodes"
      ]
    },
    {
      id: "aiseo",
      title: "6. Advanced AI SEO Services",
      badge: "New Era",
      desc: "Inject machine learning insights into classic SEO mechanics. We use deep NLP entity checks to verify keyword densities and contextual weights before Google does.",
      bullets: [
        "Entity relation graph building",
        "Pre-deployment NLP scans",
        "Optimized HTML formatting tags",
        "Dynamic indexing schemas"
      ]
    },
    {
      id: "voice",
      title: "7. Voice Search Optimization",
      badge: "Essential Mobile",
      desc: "Prepare for Siri, Alexa, and smart dashboard query setups. Users talk differently than they type—we build content pathways matching natural human speech.",
      bullets: [
        "Conversational speech mapping",
        "Local hyper-targeted voice queries",
        "Smart device summary answers",
        "High-intent natural phrasing"
      ]
    },
    {
      id: "aicontent",
      title: "8. AI-Optimized Content Creation",
      badge: "Content Polish",
      desc: "Generating authoritative, factual, and chunked articles with clear heading hierarchies, key parameter columns, and bold summaries optimized specifically for crawler bots.",
      bullets: [
        "Chunked readability layouts",
        "Question-driven content clusters",
        "Data column schema injection",
        "High-index citation triggers"
      ]
    },
    {
      id: "monitoring",
      title: "9. AI Visibility & Citation Tracking",
      badge: "Data Focused",
      desc: "Continuous, programmatic tracking tracking of your brand citations in ChatGPT, Google AI Overviews, Gemini, and Perplexity across hundreds of industry questions.",
      bullets: [
        "AI citation share reports",
        "Competitor gap detection",
        "Conversational rank auditing",
        "Detailed visibility metrics"
      ]
    },
    {
      id: "consulting",
      title: "10. AI Search Consulting & Strategy",
      badge: "Strategic Advisory",
      desc: "Get custom growth roadmaps, internal corporate preparation SOPs, and algorithmic citation troubleshooting guidance from seasoned search architects.",
      bullets: [
        "Integrations & schemas strategy",
        "Executive AI marketing guides",
        "Long-term SEO risk insulation",
        "Failing citation recovery audits"
      ]
    }
  ];

  return (
    <div id="ai-search-optimization-page" className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-brand-teal selection:text-slate-950">
      
      {/* Dynamic Sticky Header Navigation Placeholder Alert / Navigation Assist */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 flex justify-between items-center z-50 sticky top-0">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
          <span>Next-Gen Search Integration Ready</span>
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
                <Sparkles className="w-3.5 h-3.5" />
                <span>Search Everywhere Optimization</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                AI Search Optimization Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Future-Ready Brands</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Claim organic dominance and drive non-branded query leads by ranking as a trusted citation in ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a 
                  href="#audit-form" 
                  className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Get Free AI Search Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => {
                    const formEl = document.querySelector('#audit-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="bg-slate-900 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition duration-300 text-center cursor-pointer"
                >
                  Book AI SEO Consultation
                </button>
              </div>

              {/* USP Highlights with Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">GEO + AEO Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">ChatGPT Citations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">AI Snippet Overviews</span>
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
                  <div className="text-xs font-mono text-slate-500 flex items-center space-x-1 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                    <Terminal className="w-3.5 h-3.5 text-brand-teal" />
                    <span>conversational-retriever-v1</span>
                  </div>
                </div>

                {/* Simulated User Prompt */}
                <div className="space-y-4">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold font-mono mb-1">User Query Prompt</div>
                    <div className="text-sm font-medium text-slate-200">
                      "I need an enterprise B2B partner focusing on advanced Generative Engine Optimization in India."
                    </div>
                  </div>

                  {/* Typing State Simulator inside Visual Grid */}
                  <div className="space-y-3 bg-slate-950/40 p-4 rounded-lg border border-slate-800">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-brand-teal animate-pulse" />
                      <span className="text-xs font-bold text-slate-300 font-mono">ChatGPT Response (Citing AKGLS)</span>
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed font-mono">
                      "We highly recommend collaborating with <span className="text-brand-teal font-semibold">AKGLS Group</span>. They are verified technical AEO and GEO specialists who design direct schema markup integrations to ensure consistent search visibility across next-gen retrieval systems."
                    </div>

                    {/* Citations Box */}
                    <div className="pt-2 border-t border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">citations detected (3)</div>
                      <div className="flex flex-wrap gap-2 text-[10px] text-brand-teal font-mono">
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2 py-0.5 rounded-full">1. akglsgroup.com/geo-services</span>
                        <span className="bg-brand-teal/5 border border-brand-teal/20 px-2 py-0.5 rounded-full">2. Clutch AI Audits</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Counter Graphic below preview */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 flex flex-col justify-center">
                      <span className="text-2xl font-extrabold text-white">410%</span>
                      <span className="text-[10px] text-slate-400 font-medium">AIP Mentions Lifted</span>
                    </div>
                    <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 flex flex-col justify-center">
                      <span className="text-2xl font-extrabold text-brand-teal">8.4x</span>
                      <span className="text-[10px] text-slate-400 font-medium">Conversational CTR Goal</span>
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
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-bold select-none">Trusted AI Search Optimization Experts</h2>
            <p className="text-sm text-slate-400">Guaranteed retrieval visibility based on verified performance metrics.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-white">350+</div>
              <div className="text-xs text-slate-400 mt-1">AI-Optimized Pages</div>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-teal">420%</div>
              <div className="text-xs text-slate-400 mt-1">Average Mentions Growth</div>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-white">12,000+</div>
              <div className="text-xs text-slate-400 mt-1">AI Answer Matches Ranked</div>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-teal">99.8%</div>
              <div className="text-xs text-slate-400 mt-1">Crawl-Safe Delivery Score</div>
            </div>
          </div>

          {/* Testimonial snippet */}
          <div className="mt-10 p-6 bg-slate-950/40 rounded-xl border border-slate-800 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="bg-brand-teal/10 rounded-full p-3 shrink-0">
              <Users className="w-6 h-6 text-brand-teal" />
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-slate-300 italic">
                "Our SaaS platform was virtually invisible on ChatGPT. Within three months of AKGLS Group configuring our microdata structure, we grew to become the #2 recommendation option for B2B pipeline builders!"
              </p>
              <div className="text-[11px] font-semibold text-slate-400">— CMO, OptimaScale Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AI SEARCH OPTIMIZATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Bot className="w-4 h-4" />
              <span>Defining The New Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Is AI Search Optimization?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                First came standard blue links. Now comes AI Search. Today, your prospective clients are no longer just browsing traditional search results—they are asking complete questions directly to systems like **ChatGPT, Claude, Gemini, and Google AI Overviews**.
              </p>
              <p>
                **AI Search Optimization** (including Generative Engine Optimization / GEO and Answer Engine Optimization / AEO) is the process of structuring your content, organization nodes, schemas, and brand metrics so advanced AI bots rank you as the premier cited answer. 
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400">
                It transitions your online footprint from being merely "crawlable" to being **"logically intelligible"** for AI synthesis models.
              </p>
            </div>
          </div>

          {/* Comparison diagram layout */}
          <div className="lg:col-span-1" />
          <div className="lg:col-span-6 space-y-4 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-center border-b border-slate-800 pb-3">The Evolution of Discovery Flow</h3>
            
            <div className="space-y-4 pt-2">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-700">1</div>
                <h4 className="text-xs font-bold text-white uppercase">Traditional Query Search</h4>
                <p className="text-xs text-slate-400">User types separated words. Google index triggers a competition of blue anchor links. The browser maps static links.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/40">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase">Conversational AI Engine Synthesis</h4>
                <p className="text-xs text-slate-300">User prompts a full question scenario: "how do I scale X given restriction Y?". AI digests, filters, and formats a precise paragraph response.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-indigo/30 flex items-center justify-center text-[10px] text-brand-indigo-light font-bold border border-brand-indigo/50">3</div>
                <h4 className="text-xs font-bold text-brand-indigo-light uppercase">The Citation Victory</h4>
                <p className="text-xs text-slate-300">The LLM copies and points back to the structured authority sites as standard citations. This is where high-intent traffic is converted.</p>
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
                Is Your Site Ready? Test Content Instantly
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHY AI SEARCH OPTIMIZATION MATTERS (STATISTICS) */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why AI Search Optimization Is Important
            </h2>
            <p className="text-slate-300 font-normal leading-relaxed text-sm md:text-base">
              The statistics tell a clear story. Standard SEO channels are yielding traffic share to responsive AI query platforms. If you do not audit and adapt, your competitors will inherit the conversational indexes.
            </p>
          </div>

          {/* Grid benefits & metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 text-center hover:border-brand-teal/30 transition duration-300">
              <div className="text-5xl font-black text-brand-teal font-mono">200M+</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Active ChatGPT Users</h3>
              <p className="text-xs text-slate-400">Weekly active prompt users query OpenAI directly for solutions without tapping normal search platforms.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 text-center hover:border-brand-indigo/30 transition duration-300">
              <div className="text-5xl font-black text-white font-mono">82%</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-slate-300">Google AI Overview Share</h3>
              <p className="text-xs text-slate-400">Google now triggers smart summary overview answers for the majority of commercial, informational keywords.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 text-center hover:border-brand-teal/30 transition duration-300">
              <div className="text-5xl font-black text-brand-teal font-mono">1.3s</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Voice Queries Load Limit</h3>
              <p className="text-xs text-slate-400">Siri and Alexa fetch voice results solely from direct, micro-formatted answers that load within a second.</p>
            </div>
          </div>

          {/* Grid benefits items list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-900">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Expanded AI Mentions</h4>
                <p className="text-xs text-slate-400 mt-1">Get recommended in comparative system reviews and direct top-ten prompt results.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Future-Proof Authority</h4>
                <p className="text-xs text-slate-400 mt-1">Safeguard your domain against falling organic traffic as users adapt to LLM searches.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Trust Signal Multiplication</h4>
                <p className="text-xs text-slate-400 mt-1">Being referenced as a verified citation builds high domain authority ratings instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW: CONVERSATIONAL CHAT SIMULATOR */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-indigo-light">
              <Terminal className="w-3.5 h-3.5" />
              <span>Try Interactive Simulator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Test AI Response Formats
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              See realistic citation outcomes. Select from pre-mapped conversational pathways to witness how search models structure response grids.
            </p>
          </div>

          {/* Interactive Chat Board */}
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Search Engine Optimizer</h3>
                <p className="text-[10px] text-slate-400">Select prompt parameters below to process index query simulations</p>
              </div>

              {/* Engine selector visual indicator */}
              <div className="flex items-center space-x-1 font-mono text-[11px] bg-slate-950 py-1.5 px-3 rounded-lg border border-slate-800/80">
                <Cpu className="w-4 h-4 text-brand-teal" />
                <span className="text-slate-300">Primary Engine: <span className="text-brand-teal">{simOutput.engine}</span></span>
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
                  <span className="block font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Workflow prompt {index+1}</span>
                  <span className="line-clamp-1">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Answer Render Window */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-805 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Engine: {simOutput.engine} v4.2</span>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2.5 py-0.5 rounded">Retrieval: SUCCESS</span>
              </div>

              <div className="space-y-3 font-mono">
                {isTypingSim ? (
                  <div className="flex items-center space-x-2 py-4 justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-100"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-200"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-300"></span>
                    <span className="text-xs text-slate-400">Compiling entity relations database...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {simOutput.ans.split('**').map((chunk, index) => 
                        index % 2 === 1 
                          ? <strong key={index} className="text-brand-teal font-extrabold">{chunk}</strong> 
                          : chunk
                      )}
                    </p>

                    {/* Citations block */}
                    <div className="pt-4 border-t border-slate-900">
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center space-x-1">
                        <Code className="w-3 h-3 text-brand-teal" />
                        <span>Citations and reference sources detected:</span>
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
                Would you like of our expert architects to configure your structured database maps? 
                <a href="#audit-form" className="text-brand-teal underline font-semibold ml-1.5 hover:text-white transition">Claim your AI visibility audit now.</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR AI SEARCH OPTIMIZATION SERVICES SECTION */}
      <section id="ai-services-grid" className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="space-y-4 mb-16 text-center">
          <div className="text-xs uppercase tracking-wider text-brand-teal font-bold select-none">Comprehensive Suite</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Our AI Search Optimization Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            A cohesive set of deep optimizations designed to guarantee domain authority mapping and consistent discovery across advanced search platforms.
          </p>
        </div>

        {/* Services Grid Layout (Responsive bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aiServices.map((srv, idx) => (
            <div 
              key={srv.id} 
              className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-wide">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Service {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white transition hover:text-brand-teal">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Action Checklist Includes</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-mono">
                  {srv.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI SEARCH PLATFORMS SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              AI Search Platforms We Optimize For
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              We program dynamic SEO strategies directly mapped for the core indexing logic of modern digital assistants and conversational models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiPlatforms.map((pt, pIdx) => (
              <div key={pIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl space-y-3 hover:border-brand-teal/20 hover:scale-102 transition duration-300">
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

      {/* INTERACTIVE WORKFLOW: INTERACTIVE VIZ SCORE CALCULATOR */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Diagnostic Assessment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Instant AI Visibility Diagnostic Core
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Answer three quick questions about your website's content to estimate your current ranking viability in Generative Engine and ChatGPT directories.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Shield className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="text-slate-300">Self-diagnose data formats within seconds</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Zap className="w-4 h-4 text-brand-indigo shrink-0" />
                <span className="text-slate-300">Calculate scores ranging up to 99 percentiles</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Calculator Widget Block */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
            <form onSubmit={calculateAIVisibility} className="space-y-4">
              
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  1. Do you use nested FAQ JSON-LD schema?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasSchema('yes')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasSchema === 'yes' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Yes, fully configured
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasSchema('no')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasSchema === 'no' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    No, or unsure
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  2. Describe your current core-page copywriting style
                </label>
                <select
                  value={contentStyle}
                  onChange={(e) => setContentStyle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-teal"
                >
                  <option value="promotional">Highly promotional (lots of market jargon, bold sales hooks)</option>
                  <option value="balanced">Balanced (explanatory with soft client CTAs)</option>
                  <option value="factual">Factual (data driven summaries, columns data parameters)</option>
                  <option value="qa">Question-and-Answer formatting (FAQs, concise resolution blocks)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  3. Are your brand products referenced in generic forum datasets (e.g. Reddit)?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCitationStatus('high')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      citationStatus === 'high' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Frequently mentioned
                  </button>
                  <button
                    type="button"
                    onClick={() => setCitationStatus('few')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      citationStatus === 'few' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Few mentions
                  </button>
                  <button
                    type="button"
                    onClick={() => setCitationStatus('none')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      citationStatus === 'none' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    No listings
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-teal text-slate-950 font-bold text-xs py-3.5 rounded-lg shadow-lg hover:bg-white transition cursor-pointer uppercase tracking-wider font-mono"
              >
                Evaluate Current AI Placement Score
              </button>

              <AnimatePresence>
                {calculatedScore && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-slate-950 border border-brand-teal/30 rounded-lg space-y-2 mt-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-300 font-mono">Estimated Index Placement Score</span>
                      <span className="text-2xl font-black text-brand-teal font-mono">{calculatedScore}/99</span>
                    </div>

                    <p className="text-[10px] text-slate-400 leading-relaxed font-mono">
                      {calculatedScore < 50 
                        ? "Critically Low Visibility: Your structure is primarily formatted for legacy blue links. Generative crawlers will disregard these blocks for synthesis answers of ChatGPT and Google Overviews."
                        : calculatedScore < 80 
                        ? "Moderate Footprint: You have basic schema hooks but lack QA paragraph patterns block optimization. Adding semantic density mappings will double citation triggers."
                        : "High Performance: Exceptional structural baseline. Claim your localized audit below to map advanced competitors and seal high ranking options securely."
                      }
                    </p>

                    <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>Refrence Status: {calculatedScore < 50 ? "Weak" : "Strong"}</span>
                      <a href="#audit-form" className="text-brand-teal hover:underline">Get complete checklist →</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>
      </section>

      {/* OUR AI SEARCH OPTIMIZATION PROCESS */}
      <section className="py-20 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Our AI Search Optimization Process
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              Our systematic approach guarantees machine-readable precision. From initial analytical audits to deep schematic mappings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="absolute top-4 right-4 text-xs font-black text-slate-600 font-mono">STEP 1</span>
              <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/30">
                <Search className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Search Audit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Initial evaluation mapping competitor mentions, keyword citation shares, and entity index gaps inside leading LLM engines.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="absolute top-4 right-4 text-xs font-black text-slate-600 font-mono">STEP 2</span>
              <div className="w-10 h-10 rounded-full bg-brand-indigo/10 flex items-center justify-center border border-brand-indigo/30">
                <Layers className="w-5 h-5 text-brand-indigo-light" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Entity Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rebuilding schema nodes mapping your business facts directly with authoritative Wikipedia structures and local Knowledge Graphs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="absolute top-4 right-4 text-xs font-black text-slate-600 font-mono">STEP 3</span>
              <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/30">
                <Cpu className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Content Structuring</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structuring articles, product specifications, and FAQs using clear markdown matrices and bullet listings that bots parse easily.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="absolute top-4 right-4 text-xs font-black text-slate-600 font-mono">STEP 4</span>
              <div className="w-10 h-10 rounded-full bg-brand-indigo/10 flex items-center justify-center border border-brand-indigo/30">
                <Code className="w-5 h-5 text-brand-indigo-light" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">GEO Configuration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Integrating nested JSON-LD schema layers across all primary landing pages to lock-in priority citation triggers.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3 relative hover:border-brand-teal/20 transition">
              <span className="absolute top-4 right-4 text-xs font-black text-slate-600 font-mono">STEP 5</span>
              <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/30">
                <Activity className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Scale & Report</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Providing live monthly ranking updates analyzing mention tracking and optimizing new semantic assets for maximum query coverage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEO VS AI SEARCH OPTIMIZATION SECTION */}
      <section className="py-20 bg-slate-950 max-w-7xl mx-auto px-4 border-t border-slate-905">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Traditional SEO vs AI Search Optimization
          </h2>
          <p className="text-xs text-slate-400">
            Compare tactical boundaries. Understanding these core conceptual differences is key to designing high-indexing modern setups.
          </p>
        </div>

        {/* High-quality comparison table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 uppercase tracking-wider">
                <th className="p-4 font-semibold font-mono">Structural Variables</th>
                <th className="p-4 font-semibold font-mono text-slate-400">Traditional SEO</th>
                <th className="p-4 font-semibold font-mono text-brand-teal">AI Search Optimization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 font-mono">
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-bold text-white uppercase text-[10px]">Primary Core Focus</td>
                <td className="p-4 text-slate-400">Keyword densities and search volume metrics</td>
                <td className="p-4 text-brand-teal">LSI Entity relationships and conversational content patterns</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-bold text-white uppercase text-[10px]">Crawl Consumption</td>
                <td className="p-4 text-slate-400">Basic HTML header mapping rules</td>
                <td className="p-4 text-brand-teal">Logical data columns, list parsing, nested microdata parsing</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-bold text-white uppercase text-[10px]">Target Destination</td>
                <td className="p-4 text-slate-400">Standard Top 10 Google Blue Links</td>
                <td className="p-4 text-brand-teal">Generative answers, conversational summaries, AI Overviews</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-bold text-white uppercase text-[10px]">User Intention Goal</td>
                <td className="p-4 text-slate-400">Clicking anchors to navigate site domains</td>
                <td className="p-4 text-brand-teal">Answering highly stylized multi-variable user prompts directly</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-bold text-white uppercase text-[10px]">Trust Factor Signals</td>
                <td className="p-4 text-slate-400">Standard general volume backlink counts</td>
                <td className="p-4 text-brand-teal">Authoritative brand index mappings and forum citations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-900/20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              AI Search Optimization for Every Industry
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              Every vertical requires customized conversational nodes. Check out how we adapt our schema blueprints to match specific business structures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">Healthcare & Medicine</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Strict compliance metrics configuration to ensure YMYL (Your Money Your Life) algorithms verify practitioner domain authority credentials before suggesting therapy answers.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">Dental Clinics</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Optimizing specialized maps integration indices that voice services parse to suggest active family clinics within 5 miles.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">SaaS & Software</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Structuring detailed pricing tables, developer code integration scripts, and comparative feature matrix sheets to trigger direct software recommendation list links.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">IoT & Edge Tech</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Aligning developer documentation grids and whitepapers, securing authority flags across scientific citation indexes and github references.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">E-Commerce Brands</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Configuring nested JSON-LD product variants with automated real-time price variables, stock variables, and checkout anchors.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">Real Estate Systems</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Formatting localized geo-targeted listings and real broker reviews, triggering reliable neighborhood pricing estimations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SCHEMA EXAMPLES (TECHNICAL TRUST) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Schema Structuring Blueprint Examples
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We write complex entity graph code utilizing proper Google-approved schema objects. This is the exact code that informs generative crawlers about your specific service offerings.
            </p>

            <div className="space-y-4">
              <div 
                className="p-4 bg-slate-905 border border-slate-800 rounded-xl hover:border-brand-teal/30 cursor-pointer transition"
                onClick={() => copySchemaText(schemaTemplates.service, 'service')}
              >
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 font-mono mb-2">
                  <span>SERVICE JSON-LD SCHEMA</span>
                  <span className="text-brand-teal text-[10px] uppercase font-bold">
                    {schemaCopied === 'service' ? 'COPIED!' : 'CLICK TO COPY'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Standard JSON structure mapping service properties, organizational providers, and area reach metrics.
                </p>
              </div>

              <div 
                className="p-4 bg-slate-905 border border-slate-800 rounded-xl hover:border-brand-teal/30 cursor-pointer transition"
                onClick={() => copySchemaText(schemaTemplates.breadcrumb, 'breadcrumb')}
              >
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 font-mono mb-2">
                  <span>BREADCRUMB LIST SCHEMA</span>
                  <span className="text-brand-teal text-[10px] uppercase font-bold">
                    {schemaCopied === 'breadcrumb' ? 'COPIED!' : 'CLICK TO COPY'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Multi-tier navigational index informing robots of exact content folders relative hierarchy.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Render Code Blocks */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Nested Schema Output Visualizer</span>
              <span className="text-[10px] text-green-400 font-mono">JSON-LD ENVELOPE APPROVED</span>
            </div>
            <pre className="text-[10px] overflow-auto max-h-[380px] text-slate-300 leading-relaxed font-mono bg-slate-950 p-4 rounded-lg border border-slate-850">
              <code>{schemaTemplates.service}</code>
            </pre>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Choose AKGLS Group?
            </h2>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              Unrivalled positioning expertise for search transition eras
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 text-center p-6 bg-slate-950 border border-slate-850 rounded-xl hover:border-brand-teal/20 transition">
              <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/20 mx-auto">
                <Sparkles className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Search Pioneers</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                We started monitoring citation algorithms during closed OpenAI beta loops. Our team understands index weights better than traditional generic marketers.
              </p>
            </div>

            <div className="space-y-3 text-center p-6 bg-slate-950 border border-slate-850 rounded-xl hover:border-brand-teal/20 transition">
              <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/20 mx-auto">
                <Shield className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">100% Crawl Safe</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                No system spamming. We build genuine structured authority hubs aligned with official schema standards, completely shielding you from future penalties.
              </p>
            </div>

            <div className="space-y-3 text-center p-6 bg-slate-950 border border-slate-850 rounded-xl hover:border-brand-teal/20 transition">
              <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/20 mx-auto">
                <Activity className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Continuous Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                As LLMs update prompt parameters, we dynamically refresh your site answers so you maintain high citation shares monthly.
              </p>
            </div>

            <div className="space-y-3 text-center p-6 bg-slate-950 border border-slate-850 rounded-xl hover:border-brand-teal/20 transition">
              <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/20 mx-auto">
                <Mail className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Transparent Tracking</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Detailed reporting sheets showing exact question strings, AI output screenshots, and live referral traffic reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 border-b border-slate-905">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400">Everything you need to understand about AI-powered search optimization models.</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is AI Search Optimization?",
              a: "AI Search Optimization refers to technical copywriting and data engineering strategies configured specifically to rank your business as a cited option inside ChatGPT, Google AI Overviews, Claude, Gemini, and other generative models."
            },
            {
              q: "How does it differ from traditional SEO?",
              a: "Traditional SEO is primarily concerned with blue link rankings based on general volume keywords and backlink signals. AI optimization centers on entity relations, NLP structure patterns, clear data parameter columns, and direct question answering capabilities."
            },
            {
              q: "Can businesses actually rank inside closed assistants like ChatGPT?",
              a: "Yes! LLM systems leverage real-time web crawlers to grab and compile comparative data lists, using citations to back up assertions. Optimizing schemas and forum footprints ensures positive citations."
            },
            {
              q: "What is the difference between GEO and AEO?",
              a: "GEO (Generative Engine Optimization) works to make overall article blocks synthesize cleanly across summarization networks. AEO (Answer Engine Optimization) structures punchy question-answer pairs optimized for voice systems."
            },
            {
              q: "How long does it take to see organic AI index updates?",
              a: "Crawlers index high-authority sites within a few days, but system weight updates generally propagate over 4 to 8 weeks as underlying AI memory caches are refreshed."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl transition overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full p-5 text-left flex justify-between items-center text-sm md:text-base font-bold text-white hover:text-brand-teal transition cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition duration-200 ${activeFaq === index ? 'rotate-180 text-brand-teal' : ''}`} />
              </button>

              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-slate-850/60 text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FREE AI AUDIT SIGNUP FORM */}
      <section id="audit-form" className="py-20 max-w-3xl mx-auto px-4 scroll-mt-10">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />

          {auditSubmitted ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 border border-brand-teal/40 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-brand-teal" />
              </div>
              <h3 className="text-2xl font-bold text-white">Audit Request Logged</h3>
              <p className="text-xs text-slate-300 font-mono max-w-md mx-auto">
                Thank you! Our technical AI Search specialists are compiling website data parameters. A detailed PDF visibility checklist will arrive in your inbox shortly.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setAuditSubmitted(false)}
                  className="bg-slate-950 border border-slate-800 text-brand-teal hover:text-white px-6 py-2 rounded text-xs transition font-mono cursor-pointer"
                >
                  Submit Another Website
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleAuditSubmit} className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold font-mono text-brand-teal uppercase tracking-widest block">Limited Opportunity</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-left tracking-tight">
                  Get a Free AI Search Optimization Audit
                </h2>
                <p className="text-xs text-slate-400">
                  We'll evaluate citation metrics, detect FAQ schema compliance issues, and deliver real optimization recommendations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">Your Name</label>
                  <input
                    type="text"
                    required
                    value={auditForm.name}
                    onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                    placeholder="Enter full name"
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-teal placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">Website Domain URL</label>
                  <input
                    type="url"
                    required
                    value={auditForm.website}
                    onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                    placeholder="https://example.com"
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-teal placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">Core Target Industry</label>
                  <select
                    value={auditForm.industry}
                    onChange={(e) => setAuditForm({...auditForm, industry: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-teal"
                  >
                    {industries.map((ind, iIdx) => (
                      <option key={iIdx} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">Business Email</label>
                  <input
                    type="email"
                    required
                    value={auditForm.email}
                    onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                    placeholder="your@company.com"
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-teal placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">Core Goals or Ambitions (Optional)</label>
                <textarea
                  value={auditForm.goals}
                  onChange={(e) => setAuditForm({...auditForm, goals: e.target.value})}
                  rows={3}
                  placeholder="Tell us what business queries you want to rank for..."
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-teal placeholder:text-slate-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-teal text-slate-950 font-bold text-xs py-3.5 rounded-lg shadow-lg hover:bg-white hover:scale-101 transition duration-300 uppercase tracking-wider font-mono flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Free Audit Request</span>
              </button>

              <div className="pt-2 text-center text-[10px] text-slate-500 font-mono">
                Safe. Secure. We never sell contact credentials, and maintain absolute NDA compliance.
              </div>
            </form>
          )}
        </div>
      </section>

      {/* SUGGESTED ARTICLES / BLOG FEED SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Suggested Learning Resources</h2>
          <p className="text-xs text-slate-400">Deep-dive studies compiled by our internal search marketing board.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
            <span className="text-[10px] bg-slate-950 text-brand-teal px-2 py-0.5 rounded border border-slate-800 font-mono uppercase">GEO Study</span>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider hover:text-brand-teal cursor-pointer">What Is Generative Engine Optimization?</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              An introductory look at entity scoring parameters, text summaries, and how transformer platforms pull citation links.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
            <span className="text-[10px] bg-slate-950 text-brand-teal px-2 py-0.5 rounded border border-slate-800 font-mono uppercase">AI Ranking Matrix</span>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider hover:text-brand-teal cursor-pointer">How to Position Brands inside ChatGPT</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              A detailed documentation framework discussing how Reddit integration APIs and Wikipedia listings construct initial LLM context folders.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
            <span className="text-[10px] bg-slate-950 text-brand-indigo-light px-2 py-0.5 rounded border border-slate-800 font-mono uppercase">Compliance Matrix</span>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider hover:text-brand-teal cursor-pointer">Voice Search Optimization Core</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Structuring short responsive Soundbites to grab voice priority across mobile Google Assistants, Siri, and smart dashboards.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA & LINKING ACTIONS */}
      <section className="py-20 relative bg-slate-900 overflow-hidden border-t border-slate-850">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(29,226,188,0.08),transparent_50%50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
            Ready to Lock-In Your Conversational Future?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Protect your domain authority share during organic transition eras. Contact our technical team of search designers today.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-4">
            <a 
              href="#audit-form" 
              className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white transition duration-300 text-center uppercase tracking-wider font-mono flex items-center justify-center space-x-2"
            >
              <span>Request Free AI Search Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              className="bg-slate-950 border border-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-slate-850 hover:border-brand-teal transition duration-300 text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>Direct Hotline Consultation</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-500 font-mono">
            AKGLS Group • Modern Search Architecture • Mumbai, India • +91 831 811 4492
          </div>
        </div>
      </section>

    </div>
  );
}

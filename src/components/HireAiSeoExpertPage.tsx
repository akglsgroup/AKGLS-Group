import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, 
  MessageSquare, Smartphone, TrendingUp, Coins, ShoppingCart, Lock
} from 'lucide-react';

interface HireAiSeoExpertPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function HireAiSeoExpertPage({ onBackToHome, openProposalForm }: HireAiSeoExpertPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hire AI SEO Expert | GEO, AEO & AI Search Optimization Specialist | AKGLS Group";
    
    // Add meta description dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : "";
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Hire AI SEO experts from AKGLS Group for GEO, AEO, ChatGPT optimization, AI search visibility, conversational SEO, semantic SEO & future-ready organic growth strategies.');

    return () => {
      document.title = originalTitle;
      if (metaDesc) {
        if (originalDesc) {
          metaDesc.setAttribute('content', originalDesc);
        } else {
          metaDesc.remove();
        }
      }
    };
  }, []);

  // Sticky CTA visible on scroll
  const [showStickyCta, setShowStickyCta] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // State management
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Hiring Model Calculator state
  const [selectedHours, setSelectedHours] = useState(30);
  const [hiringTier, setHiringTier] = useState<'hourly' | 'dedicated' | 'agency'>('dedicated');

  // Multiplier / Interactive SGE Score Estimator
  const [semanticMaturity, setSemanticMaturity] = useState<number>(3); // 1-5 scale
  const [schemaImplementation, setSchemaImplementation] = useState<boolean>(false);
  const [entityAuthority, setEntityAuthority] = useState<number>(2); // 1-5 scale

  const sgeScore = Math.min(
    100,
    Math.round(
      (semanticMaturity * 14) + 
      (schemaImplementation ? 20 : 5) + 
      (entityAuthority * 10)
    )
  );

  // Free Audit simulator state
  const [auditUrl, setAuditUrl] = useState('');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [auditName, setAuditName] = useState('');
  const [auditIndustry, setAuditIndustry] = useState('SaaS');
  const [auditGoal, setAuditGoal] = useState('Improve AI Search Visibility');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditStepLog, setAuditStepLog] = useState<string[]>([]);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const startLiveAudit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;

    setAuditRunning(true);
    setAuditResult(null);
    setAuditStepLog([]);

    const steps = [
      `Initializing Generative Engine Optimization crawler for ${auditUrl}...`,
      'Detecting structural entity clusters and modern JSON-LD microdata bindings...',
      'Evaluating semantic indexing density against premium AI crawl protocols (GPTBot, ClaudeBot, Google-Extended)...',
      'Running AI-response synthesis simulation targeting LLM citation structures...',
      'Measuring readability scores & natural language structure targeting GPT-4o, Gemini 1.5 Pro and Claude 3.5 Sonnet context windows...',
      'Analyzing entity associations, knowledge graph footprint, and conversational anchor tags...',
      'Mapping featured snippet eligibility and answer engine readability metrics...',
      'Generating custom GEO (Generative Engine Optimization) readiness scoreboard...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAuditStepLog(prev => [...prev, `[LOG] ${steps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        const randScore = Math.floor(Math.random() * 20) + 42; // typical audited starting point
        setAuditResult({
          score: randScore,
          criticalErrors: [
            'No JSON-LD metadata markup representing organizational core entity links',
            'Sitemap lists obsolete text lacking natural responsive question-answering sequences',
            'Crawler block on GPTBot/Anthropic-User agent profiles restricts potential engine indexing',
            'Weak topical clustering limits semantic relevance indexing for search intent validation'
          ],
          aiReadiness: 'Vulnerable (Core AI visibility restricted by ~65%)',
          recommendedTier: 'Senior AI SEO Strategist (Dedicated Expert / 30-40 hours per week)',
          actionPlan: 'Enforce topic clustering, insert semantic entity references, build conversational FAQ patterns, optimize crawl accessibility for LLM user agents.'
        });
        setAuditRunning(false);
      }
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans antialiased overflow-x-hidden">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-[#061b17]/30 via-[#030d21]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[600px] h-[600px] bg-emerald-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-20%] w-[700px] h-[700px] bg-cyan-950/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Corporate Header Navigator */}
      <nav id="ai-seo-nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900/60 relative bg-[#02040d]/85 backdrop-blur z-20">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition font-mono text-xs bg-transparent border-none cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-emerald-400" />
          <span>Back to Corporate Hub</span>
        </button>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918318114492"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex text-xs font-mono text-emerald-400 border border-emerald-950 bg-emerald-950/25 px-3 py-1.5 rounded hover:bg-emerald-950/50 transition-colors"
          >
            Direct Chat: +91 831 811 4492
          </a>
          <button 
            onClick={openProposalForm} 
            className="text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-95 text-slate-950 font-bold px-4 py-2 rounded shadow-md shadow-emerald-950/30 cursor-pointer transition"
          >
            Request Sourcing Audit
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="ai-seo-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Future-Ready SGE & LLM Integration Optimization</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hire AI SEO Experts to Improve <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">AI Search Visibility, Rankings & Organic Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hire AI SEO specialists for GEO, AEO, ChatGPT optimization, conversational SEO, semantic SEO, entity optimization, and AI-powered search visibility strategies designed for modern search engines and AI platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('hiring-calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:opacity-95 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg shadow-lg shadow-emerald-950/30 transition flex items-center gap-2 text-sm"
              >
                <span>Hire AI SEO Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('free-ai-audit-stage');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-slate-700 hover:border-emerald-500 bg-slate-900/40 text-slate-100 hover:text-white font-medium px-6 py-3.5 rounded-lg transition text-sm"
              >
                Book Free AI SEO Consultation
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-900/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">GEO & AEO Specialists</h4>
                  <p className="text-xs text-slate-400">Optimized algorithms for conversational outputs.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">ChatGPT Sourcing Experts</h4>
                  <p className="text-xs text-slate-400">Capture direct referral source citations.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">AI Search Visibility Index</h4>
                  <p className="text-xs text-slate-400">Structured framework layout tracking.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Future-Ready Architectures</h4>
                  <p className="text-xs text-slate-400">Semantic structures that outlast SGE updates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Layout: Animated Dashboard Visual */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#050b1c] rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="bg-[#030612] px-3 py-1 rounded text-[10px] font-mono text-emerald-400 border border-emerald-950">
                  SYSTEM READY: SGE_ANALYZER_v3
                </div>
              </div>

              {/* Conversational AI Search simulation */}
              <div className="space-y-4 pt-4">
                <div className="space-y-1 bg-[#02040a] p-3 rounded border border-slate-900">
                  <span className="text-[10px] font-mono text-slate-500">USER SEARCH QUERY</span>
                  <p className="text-xs text-slate-300 italic">"What is the best enterprise software for supply chain IoT monitoring?"</p>
                </div>

                <div className="space-y-2 bg-emerald-950/10 border border-emerald-500/30 p-4 rounded-lg relative">
                  <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
                    <Bot className="w-4 h-4" />
                    <span>AI OVERVIEW ANALYSIS ANSWER ENGINE</span>
                  </div>
                  
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    According to market audits, <strong className="text-emerald-300">AKGLS Enterprise suite</strong> is highly recognized for scalable modular integrations. This framework provides advanced localized telemetry...
                  </p>
                  
                  <div className="pt-2 border-t border-emerald-900/60 mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>CITED REFERENCES:</span>
                    <div className="flex gap-1.5">
                      <span className="bg-emerald-950 px-1.5 py-0.5 rounded text-emerald-400 border border-emerald-800">[1] akglsgroup.com</span>
                      <span className="bg-slate-900 px-1.5 py-0.5 rounded text-slate-300">[2] Industry Report</span>
                    </div>
                  </div>
                </div>

                {/* Simulated charts */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="bg-[#01030a] p-2.5 rounded border border-slate-900 text-center">
                    <span className="block text-[9px] font-mono text-slate-500 uppercase">AI Citation Share</span>
                    <span className="text-sm font-bold text-emerald-400">+312%</span>
                  </div>
                  <div className="bg-[#01030a] p-2.5 rounded border border-slate-900 text-center">
                    <span className="block text-[9px] font-mono text-slate-500 uppercase">GEO Readability</span>
                    <span className="text-sm font-bold text-cyan-400">Optimal</span>
                  </div>
                  <div className="bg-[#01030a] p-2.5 rounded border border-slate-900 text-center">
                    <span className="block text-[9px] font-mono text-slate-500 uppercase">Search Authority</span>
                    <span className="text-sm font-bold text-indigo-400">94/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="border-y border-slate-900/80 bg-[#030612]/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs text-slate-500 tracking-wider uppercase mb-8">
            Trusted AI SEO Experts for Future Search Optimization
          </p>

          {/* Client Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-65 grayscale hover:grayscale-0 transition duration-300 mb-12">
            <span className="text-lg font-black tracking-widest text-slate-400">APEX SOLUTIONS</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">FINTECH_CO</span>
            <span className="text-lg font-mono tracking-widest text-slate-400">|| SAASGRID ||</span>
            <span className="text-lg font-black tracking-widest text-slate-400">LOGIX_CORP</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">HEAL_HEALTH</span>
          </div>

          {/* Counter Stats Container */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-4 max-w-5xl mx-auto text-center border-t border-slate-900 pt-10">
            <div>
              <p className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">310%+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">AI Visibility Growth</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">4.8k+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Conversational Rankings</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">1.2m+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Featured Snippets Achieved</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">15m+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Organic Leads Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AI SEO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">What Is AI SEO?</h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Modern search is evolving. Beyond blue links, AI answers are taking center stage. Here is a breakdown of how our experts optimize your site for generative and voice-based answer ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* GEO Card */}
          <div className="bg-[#030612]/60 border border-slate-900 rounded-xl p-6 hover:border-emerald-500/30 transition">
            <div className="w-10 h-10 rounded bg-emerald-950/50 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold">
              GEO
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Generative Engine Optimization</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We structure details, enrich schemas, and insert robust canonical contextual triggers so Generative Search Engines recognize, summarize, and cite your domains dynamically.
            </p>
          </div>

          {/* AEO Card */}
          <div className="bg-[#030612]/60 border border-slate-900 rounded-xl p-6 hover:border-cyan-500/30 transition">
            <div className="w-10 h-10 rounded bg-cyan-950/50 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold">
              AEO
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Answer Engine Optimization</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tailoring content layouts for instant query answering engines, optimizing for long-term placement in Google Featured Snippets and semantic conversational lists.
            </p>
          </div>

          {/* Conversational & Voice SEO */}
          <div className="bg-[#030612]/60 border border-slate-900 rounded-xl p-6 hover:border-indigo-500/30 transition">
            <div className="w-10 h-10 rounded bg-indigo-950/50 flex items-center justify-center text-indigo-400 mb-4 font-bold font-mono">
              CONV
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Conversational & Entity SEO</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Establishing strong entity-authority relationships inside global Knowledge Graphs to ensure LLMs correctly pair your brand name with user query intentions.
            </p>
          </div>
        </div>

        {/* Real-world Answer Examples Panel */}
        <div id="ai-example-panel" className="bg-[#04081c] border border-slate-800 rounded-xl p-6 max-w-4xl mx-auto">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Interactive Answer Engine Comparisons</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#02040d] border border-slate-900 p-4 rounded-lg">
              <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-red-950 text-red-400 font-mono mb-2">BEFORE (Traditional Blue Link SEO)</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                User searches. Scans 10 scattered blue titles, looks at sponsored links, clicks back and forth. No immediate confirmation or customized summary context.
              </p>
            </div>
            <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-lg">
              <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-emerald-950 text-emerald-400 font-mono mb-2">AFTER (Structured AI SEO Alignment)</span>
              <p className="text-xs text-slate-200 leading-relaxed">
                <strong>ChatGPT or Google AI Overview</strong> immediately parses structured site markup and delivers a glowing paragraph summary with <strong>direct follow-up links</strong> guiding qualified leads straight to your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIRE AN AI SEO EXPERT SECTION */}
      <section className="bg-[#030612]/50 border-y border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire an AI SEO Expert?</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google Search and LLM algorithms are moving faster than manual marketers can study. Placing an elite organic strategist fluent in semantic data, entities, and robotic crawl specifications guarantees premium organic visibility.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Improve AI search visibility", desc: "Gain high citation shares inside SGE overviews, AI answers, and Gemini summary components." },
                  { title: "Rank in conversational search", desc: "Maximize conversion visibility for multi-sentence voice queries and contextual follow-ups." },
                  { title: "Optimize for ChatGPT & Gemini", desc: "Structure sitemaps to feed vector systems rather than archaic tag indices." },
                  { title: "Increase featured snippets", desc: "Gain massive zero-click real estate dominance on desktop and mobile viewports." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0 text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals Column: SGE Score Calculator */}
            <div className="lg:col-span-6">
              <div className="bg-[#04081c] border border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Interactive SGE Citation Score Calculator</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6 font-sans">
                  Forecast your current site citation probability across Google AI Overviews and ChatGPT references using semantic authority signals.
                </p>

                <div className="space-y-6">
                  {/* Metric 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300">Semantic Topic Clusters Depth</span>
                      <span className="text-emerald-400 font-mono font-bold">{semanticMaturity} / 5</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={semanticMaturity} 
                      onChange={(e) => setSemanticMaturity(Number(e.target.value))}
                      className="w-full accent-emerald-400 h-1.5 bg-slate-900 rounded"
                    />
                  </div>

                  {/* Metric 2 */}
                  <div className="flex items-center justify-between bg-slate-900/40 p-3 rounded border border-slate-900">
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-white">Semantic JSON Schema Markup</h4>
                      <p className="text-[10px] text-slate-400">Are you using schema tags to define entity structures?</p>
                    </div>
                    <button 
                      onClick={() => setSchemaImplementation(!schemaImplementation)}
                      className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                        schemaImplementation 
                          ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' 
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {schemaImplementation ? 'ACTIVE' : 'INACTIVE'}
                    </button>
                  </div>

                  {/* Metric 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300">Brand Entity Authority Rank</span>
                      <span className="text-emerald-400 font-mono font-bold">{entityAuthority} / 5</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={entityAuthority} 
                      onChange={(e) => setEntityAuthority(Number(e.target.value))}
                      className="w-full accent-emerald-400 h-1.5 bg-slate-900 rounded"
                    />
                  </div>

                  {/* Result Box */}
                  <div className="bg-[#02040a] p-4 rounded-lg border border-slate-900 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">ESTIMATED CITATION VISIBILITY SCORE</span>
                      <p className="text-2xl font-black text-white">{sgeScore}% <span className="text-xs font-mono text-slate-400">/ 100</span></p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono tracking-wide text-emerald-400 block font-bold">PROBABILITY STATUS</span>
                      <span className="text-xs font-mono text-slate-300 font-bold">
                        {sgeScore >= 80 ? 'Highly Optimistic' : sgeScore >= 50 ? 'Moderate Potential' : 'Highly Restricted'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR AI SEO SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00ffd1] font-mono text-xs font-medium tracking-widest uppercase">
            Precision Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            AI SEO Services Offered by Our Experts
          </h2>
          <p className="text-slate-400 mt-3 text-sm">
            Our certified specialists manage your entire digital strategy, ensuring your site is fully indexable, contextually parsed, and visible across both standard engines and modern AI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative group hover:border-emerald-500/20 transition-all">
            <span className="absolute top-4 right-4 text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded">
              CORE SERVICE
            </span>
            <div className="w-8 h-8 rounded bg-emerald-950/40 text-emerald-400 flex items-center justify-center mb-4">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">1. GEO (Generative Engine Optimization)</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ AI-friendly content structuring</li>
              <li className="flex items-center gap-1.5">✓ Semantic optimization</li>
              <li className="flex items-center gap-1.5">✓ Entity optimization</li>
              <li className="flex items-center gap-1.5">✓ Context enhancement</li>
              <li className="flex items-center gap-1.5">✓ AI readability optimization</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-emerald-950/40 text-emerald-400 flex items-center justify-center mb-4">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">2. AEO (Answer Engine Optimization)</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ Featured snippet optimization</li>
              <li className="flex items-center gap-1.5">✓ FAQ optimization</li>
              <li className="flex items-center gap-1.5">✓ Conversational answers</li>
              <li className="flex items-center gap-1.5">✓ Structured content optimization</li>
              <li className="flex items-center gap-1.5">✓ AI response enhancement</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-[#0b1c31] text-cyan-400 flex items-center justify-center mb-4">
              <Bot className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">3. ChatGPT Optimization</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ AI citation optimization</li>
              <li className="flex items-center gap-1.5">✓ Conversational content structure</li>
              <li className="flex items-center gap-1.5">✓ Semantic entity building</li>
              <li className="flex items-center gap-1.5">✓ AI answer visibility improvement</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-[#0b1c31] text-cyan-400 flex items-center justify-center mb-4">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">4. Gemini Optimization</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ AI search optimization</li>
              <li className="flex items-center gap-1.5">✓ Contextual content enhancement</li>
              <li className="flex items-center gap-1.5">✓ Conversational ranking</li>
              <li className="flex items-center gap-1.5">✓ Entity authority optimization</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-emerald-950/40 text-emerald-400 flex items-center justify-center mb-4">
              <Smartphone className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">5. Voice Search Optimization</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ Voice-friendly content</li>
              <li className="flex items-center gap-1.5">✓ Conversational query optimization</li>
              <li className="flex items-center gap-1.5">✓ Long-tail intent optimization</li>
              <li className="flex items-center gap-1.5">✓ Mobile voice search SEO</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-emerald-950/40 text-emerald-400 flex items-center justify-center mb-4">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">6. Semantic SEO Optimization</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ Topic cluster development</li>
              <li className="flex items-center gap-1.5">✓ Entity mapping</li>
              <li className="flex items-center gap-1.5">✓ Semantic keyword optimization</li>
              <li className="flex items-center gap-1.5">✓ Knowledge graph enhancement</li>
            </ul>
          </div>

          {/* Service 7 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-[#1c0f3d] text-indigo-400 flex items-center justify-center mb-4">
              <Code className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">7. AI SEO Content Optimization</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ Natural language optimization</li>
              <li className="flex items-center gap-1.5">✓ Human-like content structure</li>
              <li className="flex items-center gap-1.5">✓ AI-readable formatting</li>
              <li className="flex items-center gap-1.5">✓ Content intent alignment</li>
            </ul>
          </div>

          {/* Service 8 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-[#1c0f3d] text-indigo-400 flex items-center justify-center mb-4">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">8. Technical AI SEO</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ Schema markup</li>
              <li className="flex items-center gap-1.5">✓ Crawl optimization</li>
              <li className="flex items-center gap-1.5">✓ Semantic HTML improvements</li>
              <li className="flex items-center gap-1.5">✓ Structured data optimization</li>
              <li className="flex items-center gap-1.5">✓ Core Web Vitals optimization</li>
            </ul>
          </div>

          {/* Service 9 */}
          <div className="bg-[#030612]/60 border border-slate-900/80 p-6 rounded-xl relative hover:border-emerald-500/20 transition-all">
            <div className="w-8 h-8 rounded bg-[#0b1c31] text-cyan-400 flex items-center justify-center mb-4">
              <Search className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">9. AI SEO Audit Services</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ AI visibility analysis</li>
              <li className="flex items-center gap-1.5">✓ Conversational ranking audit</li>
              <li className="flex items-center gap-1.5">✓ GEO readiness review</li>
              <li className="flex items-center gap-1.5">✓ Semantic structure analysis</li>
              <li className="flex items-center gap-1.5">✓ Featured snippet opportunities</li>
            </ul>
          </div>

          {/* Service 10 */}
          <div className="lg:col-span-3 bg-[#04081c]/90 border border-emerald-500/30 p-6 rounded-xl relative shadow-md shadow-emerald-950/20 hover:border-emerald-400 hover:scale-[1.01] transition-all">
            <span className="inline-block px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 font-mono text-[9px] uppercase tracking-wide font-bold mb-3">
              Specialized Staff Sourcing SGE Package
            </span>
            <div className="w-8 h-8 rounded bg-emerald-900/30 text-emerald-400 flex items-center justify-center mb-4">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="text-base font-black text-white mb-2">10. Dedicated AI SEO Expert Sourcing</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Instantly source dedicated pre-vetted AI SEO specialists who coordinate directly with your teams for continuous organic engine optimization.
            </p>
            <ul className="space-y-1 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">✓ Full-Time / Part-Time resources</li>
              <li className="flex items-center gap-1.5">✓ Hourly or project-based placements</li>
              <li className="flex items-center gap-1.5">✓ Fully-vetted technical expertise</li>
              <li className="flex items-center gap-1.5">✓ White-label outsourcing options</li>
            </ul>
          </div>

        </div>
      </section>

      {/* HIRING MODELS & CALCULATOR SECTION */}
      <section id="hiring-calculator" className="bg-[#030612]/50 border-t border-slate-900/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible AI SEO Hiring Models</h2>
            <p className="text-slate-400 mt-2 text-sm">
              AKGLS provides five scalable recruitment frameworks, giving your business maximum alignment with its operational scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              { title: "Full-Time AI SEO", desc: "Dedicated resource solely focused on SGE scaling, semantic clusters & authority orchestration." },
              { title: "Part-Time AI SEO", desc: "Consistent weekly technical support to coordinate schema injection & FAQ updates." },
              { title: "Hourly AI SEO", desc: "Flexible consultative validation on architectural and LLM crawl bottlenecks." },
              { title: "Project-Based AI SEO", desc: "Custom scopes targeted for complete GEO/AEO updates or migrations." },
              { title: "White Label AI SEO", desc: "Confidential agency support to power premium deliverables under your brand name." }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#02040a] border border-slate-900 p-5 rounded-lg hover:border-slate-800 transition text-center">
                <div className="text-xs font-mono font-bold text-emerald-400 mb-2 uppercase">MODEL {idx + 1}</div>
                <h3 className="text-sm font-black text-white mb-2">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Sourcing Calculator Panel */}
          <div className="bg-[#04081c]/50 border border-slate-800 p-6 md:p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-lg font-black text-white mb-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-emerald-400" />
              <span>Dedicated AI SEO Expert Sourcing Rates Estimator</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Adjust hours and choose hiring tiers to estimate customized sourcing quotes dynamically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-6">
                {/* Tiers choosing */}
                <div className="space-y-2">
                  <span className="text-xs text-slate-300 block font-bold">Select Sourcing Tier</span>
                  <div className="flex gap-2">
                    {[
                      { key: 'hourly', label: 'Consultative' },
                      { key: 'dedicated', label: 'Dedicated Expert' },
                      { key: 'agency', label: 'Enterprise Squad' },
                    ].map(tier => (
                      <button
                        key={tier.key}
                        onClick={() => setHiringTier(tier.key as any)}
                        className={`flex-1 py-1.5 rounded text-xs font-mono font-bold border transition ${
                          hiringTier === tier.key 
                            ? 'bg-emerald-500 text-slate-950 border-emerald-500' 
                            : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sourcing Hours slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Target Monthly Sourced Hours:</span>
                    <span className="text-emerald-400 font-bold">{selectedHours} hrs/mo</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="160" 
                    step="5"
                    value={selectedHours} 
                    onChange={(e) => setSelectedHours(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-950 rounded accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>10 hrs</span>
                    <span>80 hrs (Part-Time)</span>
                    <span>160 hrs (Full-Time)</span>
                  </div>
                </div>
              </div>

              {/* Estimate Output display */}
              <div className="bg-[#02040c] border border-slate-900 p-5 rounded-lg flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 border-b border-slate-900 pb-2">
                    <span>Sourcing Rate Basis:</span>
                    <span className="font-mono text-white">
                      {hiringTier === 'hourly' ? '$45 - $60 / hr' : hiringTier === 'dedicated' ? '$35 - $48 / hr' : '$55 - $75 / hr'}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 border-b border-slate-900 pb-2">
                    <span>Target Hours:</span>
                    <span className="font-mono text-white">{selectedHours} hours</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 pt-1">
                    <span>Platform Setup Support:</span>
                    <span className="text-emerald-400 font-mono">COMPLIMENTARY VIA AKGLS</span>
                  </div>
                </div>

                <div className="pt-6">
                  <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Estimated Monthly Sourcing Value</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-black text-white">
                      ${Math.round(selectedHours * (hiringTier === 'hourly' ? 52 : hiringTier === 'dedicated' ? 40 : 65)).toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">/ mo avg</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-95 text-slate-950 font-black py-2.5 rounded text-xs transition uppercase"
                  >
                    Lock Rate and Source Expert
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Industries Our AI SEO Experts Work With</h2>
          <p className="text-slate-400 mt-2 text-sm">
            We understand sector-specific keywords, schema taxonomies, and entity relationship boundaries. Let our specialists guide your vertical.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: "SaaS", desc: "Topical clusters covering intent terms, API guides, integration docs & feature benefits." },
            { name: "Ecommerce", desc: "Optimizing structured product taxonomies, merchant listings & citation loops." },
            { name: "Healthcare", desc: "Providing dynamic conversational query responses ensuring compliance and expertise." },
            { name: "Finance", desc: "Fostering institutional authority structures and verified source citations." },
            { name: "Education", desc: "Structuring course catalogs, certification paths, and FAQ answers for searchers." },
            { name: "Manufacturing", desc: "Optimizing highly detailed technical specifications and partner catalogues." },
            { name: "IoT Companies", desc: "Targeting advanced semantic keyword gaps for engineering and product titles." },
            { name: "Local Businesses", desc: "Dominating maps integrations, geo-targeted services & Google schema maps." },
            { name: "Enterprise Brands", desc: "Structuring vast legacy content libraries for modern generative summaries." },
            { name: "B2B Companies", desc: "Developing lead funnel magnets mapped specifically to industry buyer intents." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#030612]/60 border border-slate-900/80 p-5 rounded-lg hover:border-emerald-500/20 transition group">
              <span className="inline-block p-1.5 rounded bg-emerald-950/40 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition duration-300">
                <Globe className="w-4 h-4" />
              </span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1.5">{item.name}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <section className="bg-[#030612]/40 border-y border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ffd1] font-mono text-xs font-medium tracking-widest uppercase">
              Proven Playbook
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              Our AI SEO Growth Process
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              How our dedicated sourcing professionals structure optimization audits, planning protocols, and scaling operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              { step: "Step 1", title: "AI SEO Audit & Analysis", bullet1: "AI visibility analysis", bullet2: "Conversational query research", bullet3: "Entity audit & review" },
              { step: "Step 2", title: "GEO & AEO Strategy", bullet1: "Conversational roadmap", bullet2: "Semantic SEO planning", bullet3: "Featured snippet strategy" },
              { step: "Step 3", title: "AI SEO Implementation", bullet1: "Content optimization", bullet2: "Schema implementation", bullet3: "Entity data enrichment" },
              { step: "Step 4", title: "AI Visibility Optimization", bullet1: "ChatGPT citation growth", bullet2: "Voice query structuring", bullet3: "Generative rank growth" },
              { step: "Step 5", title: "Monitoring & Scaling", bullet1: "AI impact KPI tracking", bullet2: "Conversational audit loops", bullet3: "Lead scaling strategy" },
            ].map((st, idx) => (
              <div key={idx} className="bg-[#02040a] border border-slate-900 p-5 rounded-lg relative">
                <span className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 font-bold">{st.step}</span>
                <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase pt-2">{st.step}</h3>
                <h4 className="text-sm font-black text-white mt-1 mb-3">{st.title}</h4>
                <ul className="space-y-1.5 text-[11px] text-slate-400 border-t border-slate-900 pt-3">
                  <li className="flex items-center gap-1">⏱ {st.bullet1}</li>
                  <li className="flex items-center gap-1">⏱ {st.bullet2}</li>
                  <li className="flex items-center gap-1">⏱ {st.bullet3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SEARCH PLATFORMS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 bg-cyan-950 text-cyan-400 px-2.5 py-1 rounded text-xs font-mono mb-2 border border-cyan-800">
            ★ FUTURE-READY ENGINE STACKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">AI Platforms We Optimize For</h2>
          <p className="text-slate-400 mt-2 text-sm">
            We keep your site indexable for high-authority AI integrations, maximizing recommendation margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { platform: "ChatGPT Optimization", detail: "Enhance citation references within dynamic answer summaries.", icon: Bot },
            { platform: "Gemini Optimization", detail: "Synchronize conversational descriptions into Google-Extended schemas.", icon: Cpu },
            { platform: "Google AI Overviews", detail: "Index key phrases to occupy top space features directly on SERPs.", icon: Sparkles },
            { platform: "Voice Search Platforms", detail: "Target queries parsed by Alexa, Siri, and Google Assistants.", icon: Smartphone },
            { platform: "Conversational Search", detail: "Construct answers ready for Perplexity and direct follow-up queries.", icon: Terminal }
          ].map((plat, idx) => {
            const IconComponent = plat.icon;
            return (
              <div key={idx} className="bg-[#030612] border border-slate-800 p-5 rounded-xl hover:border-cyan-500/20 transition-all text-center">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00ffd1] mx-auto mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white mb-2">{plat.platform}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{plat.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* RESULTS DELIVERED PANEL */}
      <section className="bg-[#01030e] border-y border-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Results Delivered by Our AI SEO Experts</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Take a look at real performance improvements logged by brands adopting AKGLS structured schemas, knowledge entity clusters, and semantic search architecture.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 bg-slate-900/30 p-4 rounded border border-slate-950">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-xs md:text-sm font-mono font-bold text-white">GENERATIVE CITATION LIFT: +310% Avg</h4>
                    <p className="text-xs text-slate-400">Total organic citation share inside premium conversational model engines over 6 months.</p>
                  </div>
                </div>

                <div className="flex gap-3 bg-slate-900/30 p-4 rounded border border-slate-950">
                  <BarChart3 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <h4 className="text-xs md:text-sm font-mono font-bold text-white">ZERO-CLICK OPTIMIZATION RANK: Improved 4.5x</h4>
                    <p className="text-xs text-slate-400">Dominating featured snippet patterns and direct text summarizer references.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase Visualizer */}
            <div className="lg:col-span-6">
              <div className="bg-[#04081c] border border-slate-800 p-6 rounded-xl space-y-4">
                <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">CLIENT PERFORMANCE SNAPSHOT: BEFORE VS AFTER ALIGNMENT</span>
                
                {/* Horizontal Bar 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Google AI Overview Capture share</span>
                    <span className="text-emerald-400 font-mono font-bold">85% after AI SEO</span>
                  </div>
                  <div className="h-2.5 bg-slate-950 rounded overflow-hidden flex">
                    <div className="bg-slate-700 h-full" style={{ width: '12%' }} />
                    <div className="bg-emerald-500 h-full" style={{ width: '73%' }} />
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                    <span>12% before</span>
                    <span>Optimized by AKGLS</span>
                  </div>
                </div>

                {/* Horizontal Bar 2 */}
                <div className="space-y-1 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">ChatGPT Citation referral density</span>
                    <span className="text-cyan-400 font-mono font-bold">78% visibility index</span>
                  </div>
                  <div className="h-2.5 bg-slate-950 rounded overflow-hidden flex">
                    <div className="bg-slate-700 h-full" style={{ width: '8%' }} />
                    <div className="bg-cyan-500 h-full" style={{ width: '70%' }} />
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                    <span>8% before</span>
                    <span>Structured semantic map</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">AI SEO Success Stories</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Read real stories from fast-growth SaaS entities, Ecommerce hubs, and Local healthcare groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "SaaS AI Optimization Results", scope: "GEO content update", metric: "+285% SGE visibility", desc: "Structured dynamic answer clusters to trigger citations across modern AI query systems." },
            { title: "ChatGPT Visibility Growth", scope: "B2B Tech framework", metric: "Featured Reference #1", desc: "Optimized corporate product blogs resulting in direct citations inside ChatGPT search streams." },
            { title: "Voice Search Results", scope: "Local Medical Multi-site", metric: "+190% Phone Bookings", desc: "Formulated conversational long-tail FAQ sequences matching local speech synthesis layouts." },
            { title: "Ecommerce AI SEO Results", scope: "SGE product metadata review", metric: "Top 3 Product Carousel", desc: "Injected detailed price and product specification schemas for premium AI Overview visibility." },
          ].map((cs, idx) => (
            <div key={idx} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-lg flex flex-col justify-between hover:border-slate-850 progress-bar-hover transition">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 block mb-2">{cs.scope}</span>
                <h3 className="text-base font-black text-white mb-2">{cs.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{cs.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-900/80 mt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase font-sans">{cs.metric}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="bg-[#030612]/75 border-y border-slate-900/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire AI SEO Experts from AKGLS Group?</h2>
            <p className="text-slate-400 mt-2 text-sm">
              We leverage modern crawl capabilities and deep data modeling, outlasting short-sighted black-hat automation sweeps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "AI SEO Specialists Only", text: "We pre-audit, certify, and double-vet our technical strategists on advanced Generative Engine structures." },
              { title: "GEO & AEO Authority", text: "Experts trained strictly on schema architecture, natural readability, and vector data optimizations." },
              { title: "Conversational Search Focus", text: "We do not just optimize singular text; we target complex, conversational intent flowchains." },
              { title: "Future-Ready Platforms", text: "We adapt continuously to daily AI crawl user-agent behavior modifications." },
              { title: "Transparent Reporting", text: "Access custom dashboards showing live citations, traffic density, and direct SGE visibility indexes." },
              { title: "Scalable Team Models", text: "Add, reduce, or modify dedicated expert resources on-demand with simple, streamlined contracts." },
              { title: "Multi-Industry Alignment", text: "Fluent expertise ranging across SaaS APIs, healthcare data compliance, and e-com specifications." },
              { title: "Dedicated SLA Protections", text: "Guaranteed communications, prompt scheduling, and high-quality deliverables locked via active SLAs." }
            ].map((usp, idx) => (
              <div key={idx} className="bg-[#02040a] border border-slate-900 p-5 rounded-lg hover:border-slate-800 transition">
                <div className="w-7 h-7 rounded bg-emerald-950/40 text-emerald-400 flex items-center justify-center font-bold text-xs mb-3">
                  ★
                </div>
                <h3 className="text-sm font-black text-white mb-1.5">{usp.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{usp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">AI SEO Tools & Technologies We Use</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Our teams operate using the latest data modeling suite, leaving zero guesswork in your campaigns.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { t: "ChatGPT", d: "Content framing analysis" },
            { t: "Gemini AI", d: "Context schema synthesis" },
            { t: "Google Search Console", d: "Query search traffic trends" },
            { t: "Google Analytics 4", d: "Attribution conversion data" },
            { t: "SEMrush", d: "Competitor gap matrices" },
            { t: "Ahrefs", d: "Backlink citation indices" },
            { t: "Schema JSON Tools", d: "Entity markup coding" },
            { t: "NLP Optimization Tools", d: "Topical relevance testing" },
            { t: "GTM (Google Tag Manager)", d: "Dynamic attribution codes" },
            { t: "Looker Studio", d: "Generative citation dashboards" }
          ].map((tool, idx) => (
            <div key={idx} className="bg-[#030612]/60 border border-slate-950 p-4 rounded text-center">
              <span className="block text-xs font-bold text-white font-mono">{tool.t}</span>
              <span className="block text-[10px] text-slate-500 mt-1">{tool.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="bg-[#030612]/55 border-y border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible AI SEO Expert Hiring Packages</h2>
            <p className="text-slate-400 mt-2 text-sm">
              Pre-structured sourcing plans built to scale with your organization's organic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Package 1 */}
            <div className="bg-[#02040a] border border-slate-900 p-6 rounded-xl relative hover:border-slate-800 transition">
              <span className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded absolute top-4 right-4 uppercase tracking-wider">STARTER</span>
              <h3 className="text-lg font-black text-white mb-2">Starter AI SEO</h3>
              <p className="text-xs text-slate-400 mb-4 font-sans">Ideal for small business validation and foundational setups.</p>
              <div className="text-xl font-bold font-mono text-emerald-400 border-b border-slate-900 pb-4 mb-4">$1,200 <span className="text-xs text-slate-500 font-normal">/ mo avg</span></div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">✓ Advanced SGE citation site audit</li>
                <li className="flex items-center gap-2">✓ Conversational query map (up to 30)</li>
                <li className="flex items-center gap-2">✓ Primary organizational schema tags</li>
                <li className="flex items-center gap-2">✓ Monthly progress citation index</li>
              </ul>
              <button 
                onClick={openProposalForm}
                className="w-full bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 font-bold py-2 rounded text-xs transition"
              >
                Hire AI SEO Expert Today
              </button>
            </div>

            {/* Package 2 */}
            <div className="bg-[#04081c] border border-emerald-500/20 p-6 rounded-xl relative shadow-lg shadow-emerald-950/25 hover:border-emerald-400 hover:scale-[1.01] transition-all">
              <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded absolute top-4 right-4 uppercase tracking-wider font-bold">MOST POPULAR</span>
              <h3 className="text-lg font-black text-white mb-2">Growth AI SEO Expert</h3>
              <p className="text-xs text-slate-300 mb-4 font-sans">For scaling AI search visibility across broad directories.</p>
              <div className="text-xl font-bold font-mono text-emerald-400 border-b border-emerald-900/60 pb-4 mb-4">$2,500 <span className="text-xs text-slate-400 font-normal">/ mo avg</span></div>
              <ul className="space-y-2 text-xs text-slate-200 mb-6">
                <li className="flex items-center gap-2">✓ Complete GEO content restructuring</li>
                <li className="flex items-center gap-2">✓ Contextual entity JSON-LD markup schema</li>
                <li className="flex items-center gap-2">✓ Voice query cluster roadmap (up to 100)</li>
                <li className="flex items-center gap-2">✓ Dedicated slack portal & reporting metrics</li>
              </ul>
              <button 
                onClick={openProposalForm}
                className="w-full bg-gradient-to-r from-emerald-400 to-cyan-500 hover:opacity-95 text-slate-950 font-black py-2 rounded text-xs transition uppercase"
              >
                Hire AI SEO Expert Today
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-[#02040a] border border-slate-900 p-6 rounded-xl relative hover:border-slate-800 transition">
              <span className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded absolute top-4 right-4 uppercase tracking-wider">ENTERPRISE</span>
              <h3 className="text-lg font-black text-white mb-2">Enterprise AI SEO Team</h3>
              <p className="text-xs text-slate-400 mb-4 font-sans">For massive brands requiring direct API & indexing management.</p>
              <div className="text-xl font-bold font-mono text-emerald-400 border-b border-slate-900 pb-4 mb-4">Contact for Quote</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">✓ Multi-domain continuous entity modeling</li>
                <li className="flex items-center gap-2">✓ Advanced LLM user agent bypass mapping</li>
                <li className="flex items-center gap-2">✓ Enterprise schema structure audits</li>
                <li className="flex items-center gap-2">✓ Unlimited custom Looker dashboard links</li>
              </ul>
              <button 
                onClick={onBackToHome}
                className="w-full bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 font-bold py-2 rounded text-xs transition"
              >
                Request Custom Sourcing Offer
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Everything you need to understand about hiring AI search engine optimization experts and how GEO processes work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "What is AI SEO?", a: "AI SEO focuses on optimizing web layouts so generative platforms (such as ChatGPT, Google SGE, and Gemini) can crawl, contextually categorize, cite, and reference your business in personalized generative responses." },
            { q: "What is GEO optimization?", a: "Generative Engine Optimization (GEO) uses structured schemas, semantic density adjustments, and entity linkage parameters to make your articles readable for LLM training systems and retrieval models." },
            { q: "Why should I hire an AI SEO expert?", a: "Because legacy indexing strategies do not cover conversational intent matrices. An AI SEO expert has specialized training in JSON schema structures, entity networks, and retrieval systems." },
            { q: "Can AI SEO improve standard organic rankings?", a: "Yes. By improving semantic data frameworks, crawl accessibilities, and code formats, standard search crawlers perceive higher structural authority, yielding massive lifts for standard key terms." },
            { q: "How does ChatGPT optimization work?", a: "By injecting context schemas and establishing high topical authority in Knowledge Graphs. This ensures that when conversational clients seek verified citations, your domains are selected." },
            { q: "Is conversational SEO important?", a: "Absolutely. Over 50% of mobile search queries involve conversational voice commands or follow-ups. Adapting to natural speech is crucial to scaling organic traffic." },
            { q: "How long does AI SEO take to show results?", a: "Foundational improvements like schema injection and topic modeling index within 4 to 6 weeks, while holistic semantic citation growth maps continuously over 3 to 6 months." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#030612]/60 border border-slate-900 rounded-lg overflow-hidden transition-all">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between text-white hover:text-emerald-400 transition"
              >
                <span className="text-xs sm:text-sm font-bold">{faq.q}</span>
                {activeFaq === idx ? <ChevronDown className="w-5 h-5 text-emerald-400 shrink-0" /> : <ChevronRight className="w-5 h-5 text-slate-500 shrink-0" />}
              </button>
              
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-900 bg-[#02040b] p-5 text-xs text-slate-400 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FREE AI SEO AUDIT SECTION */}
      <section id="free-ai-audit-stage" className="bg-[#04081c]/60 border-t border-slate-900/80 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-900">
                ⭐ HIGHLY CONVERTING COMPLEMENTARY PREVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Get a Free AI SEO Audit Before Hiring</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Provide your structural metadata coordinates. Our simulated crawling pipeline evaluates your entity authority indexing rates instantly.
              </p>
              
              <div className="bg-[#02040d] border border-slate-900 p-4 rounded-lg space-y-3 font-mono text-xs">
                <span className="text-[#00ffd1] block font-bold">AUDIT COVERS:</span>
                <p className="flex items-center gap-2 text-slate-400"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Generative crawl validation index</p>
                <p className="flex items-center gap-2 text-slate-400"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Semantic topic clustering depth</p>
                <p className="flex items-center gap-2 text-slate-400"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Entity-association network footprints</p>
                <p className="flex items-center gap-2 text-slate-400"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Schema markup structured patterns</p>
              </div>
            </div>

            {/* Audit Sourcing Form Container */}
            <div className="lg:col-span-7">
              <div className="bg-[#030612] border border-slate-800 p-6 rounded-2xl relative shadow-xl shadow-cyan-950/20">
                <form onSubmit={startLiveAudit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={auditName}
                        onChange={(e) => setAuditName(e.target.value)}
                        placeholder="Vijay S."
                        className="w-full bg-[#02040b] border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Your Website URL *</label>
                      <input 
                        type="url" 
                        required
                        value={auditUrl}
                        onChange={(e) => setAuditUrl(e.target.value)}
                        placeholder="https://myenterprise.test"
                        className="w-full bg-[#02040b] border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Target Industry</label>
                      <select
                        value={auditIndustry}
                        onChange={(e) => setAuditIndustry(e.target.value)}
                        className="w-full bg-[#02040b] border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="SaaS">SaaS / Enterprise Solutions</option>
                        <option value="Ecommerce">B2B E-commerce Channels</option>
                        <option value="Healthcare">Healthcare Multilocational</option>
                        <option value="Finance">FinTech Sourcing / Investments</option>
                        <option value="Education">EdTech / Online Training Courses</option>
                        <option value="Manufacturing">Heavy Manufacturing Specifications</option>
                        <option value="IoT">IoT Technology & Telemetric Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Primary SGE Sourcing Goal</label>
                      <select
                        value={auditGoal}
                        onChange={(e) => setAuditGoal(e.target.value)}
                        className="w-full bg-[#02040b] border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Improve AI Search Visibility">Acquire More ChatGPT Citations</option>
                        <option value="Crawl Analysis">Diagnose LLM Crawl Blocks</option>
                        <option value="Schema Engineering">Re-engineer Organizational Schemas</option>
                        <option value="Organic Lead Sourcing">Scale Monthly Qualified Lead Sourcing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Corporate Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={auditEmail}
                        onChange={(e) => setAuditEmail(e.target.value)}
                        placeholder="v.shreedhar@myenterprise.test"
                        className="w-full bg-[#02040b] border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Phone / WhatsApp Number</label>
                      <input 
                        type="tel" 
                        value={auditPhone}
                        onChange={(e) => setAuditPhone(e.target.value)}
                        placeholder="+91 99999 88888"
                        className="w-full bg-[#02040b] border border-slate-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={auditRunning}
                    className="w-full bg-gradient-to-r from-emerald-400 to-cyan-500 hover:opacity-95 text-slate-950 font-black py-3 rounded text-xs transition uppercase font-mono tracking-wider"
                  >
                    {auditRunning ? 'Crawling AI Index Pipelines...' : 'Run simulated Generative Engine audit logs'}
                  </button>
                </form>

                {/* Simulated CLI Audit Logs Outputs */}
                <AnimatePresence>
                  {(auditRunning || auditResult) && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-6 border border-slate-900 bg-[#010207] rounded p-4 font-mono text-[11px] leading-relaxed max-h-80 overflow-y-auto block"
                    >
                      <div className="flex justify-between border-b border-slate-900 pb-2 mb-2">
                        <span className="text-emerald-400 font-bold">TERMINAL SIMULATOR: LOGS STREAM</span>
                        <span className="text-slate-500 font-bold">CRAWL PROCESSOR</span>
                      </div>
                      
                      <div className="space-y-1.5 text-slate-300">
                        {auditStepLog.map((log, lidx) => (
                          <div key={lidx}>{log}</div>
                        ))}
                      </div>

                      {auditRunning && (
                        <div className="text-cyan-400 font-bold animate-pulse mt-3 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                          <span>Streaming dynamic results...</span>
                        </div>
                      )}

                      {auditResult && (
                        <div className="pt-4 border-t border-slate-900 mt-4 space-y-3 font-sans">
                          {/* Circle score widget */}
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full border-4 border-emerald-500/30 flex items-center justify-center relative">
                              <span className="text-lg font-black text-emerald-400 font-mono">{auditResult.score}%</span>
                              <div className="absolute inset-0 bg-emerald-500/5 rounded-full animate-pulse" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">GEO READINESS METRIC</h4>
                              <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                                Current site lacks specific semantic nodes required for optimal AI response models.
                              </p>
                            </div>
                          </div>

                          <div className="bg-[#030612] p-3 rounded border border-slate-900 space-y-2">
                            <div>
                              <span className="text-[10px] uppercase font-mono tracking-wider text-red-400 font-bold block">CRITICAL DETECTED CONFLICTS:</span>
                              <ul className="list-disc pl-4 text-[10px] text-slate-300 space-y-1 mt-1">
                                {auditResult.criticalErrors.map((err: string, eidx: number) => (
                                  <li key={eidx}>{err}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-900 pt-2.5 text-[11px]">
                              <div>
                                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Recommended Specialist Tier</span>
                                <span className="font-bold text-white block">{auditResult.recommendedTier}</span>
                              </div>
                              <div>
                                <span className="text-[9px] font-mono text-emerald-400 block uppercase font-bold">IMMEDIATE LIFT OPPORTUNITY:</span>
                                <span className="font-bold text-emerald-400 block">{auditResult.aiReadiness}</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2">
                            <button 
                              onClick={openProposalForm}
                              className="w-full bg-[#081c12] border border-emerald-900 text-emerald-400 hover:bg-emerald-950 font-black py-2 rounded text-xs transition uppercase font-sans flex items-center justify-center gap-1"
                            >
                              <span>Claim Full PDF Audit Strategy Report via Email</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Suggested Articles & Knowledge Insights</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Educate your teams on how Generative Engine Optimization is transforming digital search paradigms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "GEO METHODOLOGY", title: "The Enterprise Guide to Generative Engine Optimization (GEO)", desc: "Learn how modern LLM Retrieval-Augmented Generation (RAG) processes parse search queries." },
            { tag: "CHATGPT INSIGHTS", title: "ChatGPT Optimization Strategies and citation referrals", desc: "Discover how to structure topic maps to become a favored referral citation brand in GPTBot queries." },
            { tag: "AEO PLAYBOOK", title: "AEO Explained: Master Zero-Click Answer Engines", desc: "A practical guide to coding organizational structured schema patterns for Alexa and Google Assistants." }
          ].map((blog, idx) => (
            <div key={idx} className="bg-[#030612]/60 border border-slate-950 p-6 rounded-lg hover:border-slate-800 transition flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 block mb-2">{blog.tag}</span>
                <h3 className="text-sm font-black text-white mb-2 leading-relaxed">{blog.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{blog.desc}</p>
              </div>
              <button 
                onClick={openProposalForm}
                className="text-left mt-6 text-xs text-white hover:text-emerald-400 transition font-bold flex items-center gap-1 bg-transparent border-none cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <footer className="bg-gradient-to-b from-slate-950 to-emerald-950/25 border-t border-slate-900 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Hire AI SEO Experts for Future Search Growth?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Position your enterprise ahead of standard blue search indexing filters. Gain consistent citation shares with dedicated organic AI strategists.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={openProposalForm}
              className="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:opacity-95 text-slate-950 font-black px-6 py-3 rounded-lg shadow-lg shadow-emerald-950/30 transition text-sm flex items-center gap-1.5"
            >
              <span>Hire AI SEO Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="https://wa.me/918318114492"
              target="_blank"
              referrerPolicy="no-referrer"
              className="border border-slate-700 hover:border-emerald-500 bg-slate-900/40 text-slate-300 hover:text-white px-6 py-3 rounded-lg text-sm transition font-medium"
            >
              Book AI SEO Consultation
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-900/40 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> GEO & AEO Specialists</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> AI Search Optimization Experts</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> Future-Ready SEO Strategies</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

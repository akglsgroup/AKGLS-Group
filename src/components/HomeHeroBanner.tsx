import React from 'react';
import { 
  ArrowRight, Bot, Sparkles, Terminal, Activity, ShieldCheck, 
  Cpu, Database, Network, ChevronRight, Zap, CheckCircle2, Globe
} from 'lucide-react';
import GenerativeEngineEvaluator from './GenerativeEngineEvaluator';

interface HomeHeroBannerProps {
  onOpenAuditForm?: () => void;
  onExploreServices?: () => void;
}

export const HomeHeroBanner: React.FC<HomeHeroBannerProps> = ({
  onOpenAuditForm,
  onExploreServices
}) => {
  const scrollToAudit = () => {
    if (onOpenAuditForm) {
      onOpenAuditForm();
    } else {
      const formEl = document.querySelector('#audit-form');
      formEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRemediationPrefill = (data: { domain: string; score: number; note: string }) => {
    const formEl = document.querySelector('#audit-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
      const websiteInput = formEl.querySelector('input[name="websiteUrl"], input[placeholder*="domain"], input[type="url"]') as HTMLInputElement;
      if (websiteInput) {
        websiteInput.value = `https://${data.domain}`;
      }
      const notesInput = formEl.querySelector('textarea[name="notes"], textarea[placeholder*="goals"]') as HTMLTextAreaElement;
      if (notesInput) {
        notesInput.value = `GEO Evaluator Diagnostic: Domain ${data.domain} scored ${data.score}/100. Requesting full technical RAG knowledge graph remediation plan.`;
      }
    }
  };

  return (
    <header className="relative pt-6 pb-16 sm:pt-8 md:pt-10 md:pb-20 lg:pt-12 bg-[#040609] text-white overflow-hidden text-left" id="hero-banner-section">
      {/* Top ambient highlight bridge connecting directly from header */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-brand-indigo/15 via-brand-teal/8 to-transparent pointer-events-none" />
      
      {/* High-tech matrix background grid & subtle telemetry radial blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/6 w-[480px] h-[480px] bg-brand-indigo/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/8 w-[420px] h-[420px] bg-brand-teal/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        
        {/* Left Info Column (7 Cols on desktop) */}
        <div className="lg:col-span-7 space-y-6 pt-2">
          
          {/* Cybernetic Technical Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-gradient-to-r from-slate-900/90 to-slate-900/60 border border-teal-500/30 text-teal-300 rounded-full py-1.5 px-4 font-mono font-bold text-[10.5px] uppercase tracking-wider backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span className="text-white font-extrabold">Autonomous AI Search & GEO Infrastructure</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-400 font-normal hidden sm:inline">RAG Vector Grounding v4.2</span>
          </div>

          {/* Core Master Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.12] sm:leading-[1.08] tracking-tight">
            Traditional Search is Evolving. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-indigo-300 to-purple-400">
              We Engineer Generative Engine Optimization (GEO) & AI Citations.
            </span>
          </h1>

          {/* Technical Paragraph Explaining the Modern AI Reality */}
          <p className="text-slate-300/90 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            Over <strong className="text-white font-semibold">54% of enterprise search journeys</strong> now bypass legacy 10-blue-link SERPs to prompt conversational AI. AKGLS Group engineers programmatic JSON-LD knowledge graphs, multi-modal entity disambiguation, and neural vector embeddings so your brand is directly recommended, cited, and referenced across <strong className="text-brand-teal font-medium">ChatGPT Search</strong>, <strong className="text-indigo-300 font-medium">Perplexity Pro</strong>, <strong className="text-purple-300 font-medium">Google Gemini</strong>, and <strong className="text-amber-300 font-medium">Claude 3.7</strong>.
          </p>

          {/* Live Engine Target Nodes Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-1 text-[11px] font-mono select-none">
            <span className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Targeted Engines:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ChatGPT Search
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Perplexity Sonar
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Gemini 2.0
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Claude 3.7
              </span>
            </div>
          </div>

          {/* Strategic CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a 
              href="#audit-form"
              onClick={(e) => {
                e.preventDefault();
                scrollToAudit();
              }}
              className="bg-brand-orange hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow-xl shadow-orange-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-request-audit-btn"
            >
              Request Strategy Audit <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#capabilities-explorer"
              onClick={(e) => {
                if (onExploreServices) {
                  e.preventDefault();
                  onExploreServices();
                }
              }}
              className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-explore-services-btn"
            >
              <Bot className="w-4 h-4 text-brand-teal animate-pulse" /> 
              Explore 140+ Services
            </a>
          </div>

          {/* Core Credentials & Performance Telemetry Strip */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl text-left">
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-white font-display flex items-baseline gap-0.5">
                380%<span className="text-brand-teal text-base sm:text-lg">+</span>
              </div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                LLM Citation Velocity
              </div>
              <div className="text-[9px] text-slate-500 font-mono hidden sm:block">Perplexity & SearchGPT</div>
            </div>

            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-white font-display flex items-baseline gap-0.5">
                48%<span className="text-emerald-400 text-base sm:text-lg">↓</span>
              </div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                Lower Acquisition Cost
              </div>
              <div className="text-[9px] text-slate-500 font-mono hidden sm:block">Compared to legacy PPC</div>
            </div>

            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-white font-display flex items-baseline gap-0.5">
                99.2%<span className="text-indigo-400 text-base sm:text-lg">✓</span>
              </div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                Vector Grounding Accuracy
              </div>
              <div className="text-[9px] text-slate-500 font-mono hidden sm:block">Zero entity hallucination</div>
            </div>
          </div>
        </div>

        {/* Right Column: Advanced Generative Engine Evaluator Console */}
        <div className="lg:col-span-5 relative w-full">
          <GenerativeEngineEvaluator onSelectRemediation={handleRemediationPrefill} />
        </div>

      </div>
    </header>
  );
};

export default HomeHeroBanner;

import React from 'react';
import { 
  ArrowRight, Bot, Sparkles, Activity, ShieldCheck, 
  Cpu, Database, Network, ChevronRight, Zap, CheckCircle2, Globe
} from 'lucide-react';
import DynamicHeroMediaShowcase from './DynamicHeroMediaShowcase';

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

  return (
    <header className="relative pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 bg-[#040609] text-white overflow-hidden text-left" id="hero-banner-section">
      {/* Top ambient highlight bridge connecting directly from header */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-brand-indigo/15 via-brand-teal/8 to-transparent pointer-events-none" />
      
      {/* High-tech matrix background grid & subtle telemetry radial blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/6 w-[480px] h-[480px] bg-brand-indigo/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/8 w-[420px] h-[420px] bg-brand-teal/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Column: Clear, High-Impact Value Proposition */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-teal-500/30 text-teal-300 rounded-full py-1.5 px-3.5 font-mono font-bold text-[11px] uppercase tracking-wider backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span className="text-white font-extrabold">AI SEO & Generative Engine Optimization (GEO)</span>
          </div>

          {/* Master Headline: Clear, Punchy, No Awkward Breaks */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-extrabold font-display leading-[1.14] tracking-tight">
            Rank on Google.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-indigo-300 to-purple-400">
              Get Cited by ChatGPT & Perplexity.
            </span>
          </h1>

          {/* Clear, Executive-Level Description */}
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
            Over 50% of buyer searches now happen inside AI assistants. We build structured knowledge graphs, entity disambiguation, and RAG retrieval architecture so your brand is directly recommended and cited by ChatGPT, Perplexity, Gemini, and Google.
          </p>

          {/* Targeted Engines Trust Strip */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
            <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider font-bold">
              Optimized For:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ChatGPT Search
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Perplexity Pro
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                Google Gemini
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Claude 3.7
              </span>
            </div>
          </div>

          {/* Strategic CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a 
              href="#audit-form"
              onClick={(e) => {
                e.preventDefault();
                scrollToAudit();
              }}
              className="bg-brand-orange hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl text-center shadow-lg shadow-orange-950/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-request-audit-btn"
            >
              Request Free AI Audit <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#capabilities-explorer"
              onClick={(e) => {
                if (onExploreServices) {
                  e.preventDefault();
                  onExploreServices();
                }
              }}
              className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-explore-services-btn"
            >
              <Bot className="w-4 h-4 text-brand-teal" /> 
              Explore 140+ Services
            </a>
          </div>

          {/* Performance Telemetry Strip */}
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-slate-800/80 max-w-lg text-left">
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-white font-display flex items-baseline gap-0.5">
                380%<span className="text-brand-teal text-base sm:text-lg">+</span>
              </div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                AI Citation Lift
              </div>
              <div className="text-[9px] text-slate-500 font-mono hidden sm:block">Perplexity & ChatGPT</div>
            </div>

            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-white font-display flex items-baseline gap-0.5">
                48%<span className="text-emerald-400 text-base sm:text-lg">↓</span>
              </div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                Lower Cost Per Lead
              </div>
              <div className="text-[9px] text-slate-500 font-mono hidden sm:block">Vs. traditional PPC</div>
            </div>

            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-white font-display flex items-baseline gap-0.5">
                99.2%<span className="text-indigo-400 text-base sm:text-lg">✓</span>
              </div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                Entity Accuracy
              </div>
              <div className="text-[9px] text-slate-500 font-mono hidden sm:block">Zero hallucination risk</div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Visual Media Showcase */}
        <div className="lg:col-span-5 relative w-full">
          <DynamicHeroMediaShowcase />
        </div>

      </div>
    </header>
  );
};

export default HomeHeroBanner;

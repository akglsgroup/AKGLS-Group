import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';
import CleanAdvancedHeroVisual from './CleanAdvancedHeroVisual';

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
    <header 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#040609] text-white overflow-hidden py-12 lg:py-0" 
      id="hero-banner-section"
    >
      {/* Top ambient highlight bridge connecting from navigation bar */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-brand-indigo/20 via-brand-teal/10 to-transparent pointer-events-none" />
      
      {/* High-tech matrix background grid & soft atmospheric glow blooms */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/10 w-[500px] h-[500px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] bg-brand-teal/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Focused, Perfectly Balanced Core Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 lg:space-y-7">
            
            {/* Master Headline: Commanding, Clean, High-Contrast Display Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black font-display leading-[1.12] tracking-tight text-white">
              Rank on Google.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-indigo-300 to-purple-300">
                Get Cited by ChatGPT & Perplexity.
              </span>
            </h1>

            {/* Subheadline: Clear, Executive Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
              Over 50% of buyer searches now happen inside conversational AI. We build structured knowledge graphs and entity citation architecture so your brand is directly recommended by ChatGPT, Perplexity, Gemini, and Google.
            </p>

            {/* Primary Strategic CTA Buttons: Perfectly Balanced & Uncluttered */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAudit();
                }}
                className="bg-brand-orange hover:bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow-lg shadow-orange-950/40 hover:shadow-orange-900/60 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
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
                className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-extrabold text-sm uppercase tracking-wider py-4 px-7 rounded-xl text-center transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-explore-services-btn"
              >
                <Bot className="w-4 h-4 text-brand-teal" /> 
                Explore 140+ Services
              </a>
            </div>

          </div>

          {/* Right Column: Simple, Clean, Advanced Visual */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <CleanAdvancedHeroVisual />
          </div>

        </div>
      </div>
    </header>
  );
};

export default HomeHeroBanner;

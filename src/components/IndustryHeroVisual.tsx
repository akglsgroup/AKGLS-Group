import React, { useState } from 'react';
import { Sparkles, CheckCircle, Eye, RefreshCw, Layers } from 'lucide-react';
import { INDUSTRY_HERO_ASSETS, IndustryHeroConfig } from '../data/industryHeroAssets';

interface IndustryHeroVisualProps {
  configKey: string;
  className?: string;
  customOverlayContent?: React.ReactNode;
}

export const IndustryHeroVisual: React.FC<IndustryHeroVisualProps> = ({
  configKey,
  className = '',
  customOverlayContent
}) => {
  const config: IndustryHeroConfig = INDUSTRY_HERO_ASSETS[configKey] || INDUSTRY_HERO_ASSETS.dental;
  const [currentImg, setCurrentImg] = useState<string>(config.primaryImage);
  const [imgError, setImgError] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // High quality curated unsplash photography fallback seeds
  const fallbackUrl = `https://picsum.photos/seed/${config.id}-hero/1200/675`;

  const toggleImage = () => {
    if (config.secondaryImage) {
      setCurrentImg((prev) => (prev === config.primaryImage ? config.secondaryImage! : config.primaryImage));
    }
  };

  return (
    <div 
      className={`relative group rounded-3xl overflow-hidden border ${config.accentBorder} bg-[#0b101d] shadow-2xl transition-all duration-500 hover:shadow-cyan-950/20 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={`hero-visual-${config.id}`}
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[100px] pointer-events-none bg-gradient-to-br ${config.accentGradient}`} 
      />

      {/* Main Targeted Hero Image */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <img
          src={imgError ? fallbackUrl : currentImg}
          alt={config.altText}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
          id={`hero-img-${config.id}`}
        />

        {/* Sophisticated Dark Gradient Vignette for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-[#0b101d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b101d]/80 via-transparent to-[#0b101d]/30" />

        {/* Top Badges & Controls Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider backdrop-blur-md ${config.accentBadgeBg} ${config.accentBadgeText} border ${config.accentBorder} flex items-center gap-1.5`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {config.badge}
            </span>
          </div>

          {config.secondaryImage && (
            <button
              onClick={toggleImage}
              className="p-1.5 rounded-lg bg-black/50 hover:bg-black/80 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md text-[10px] font-mono flex items-center gap-1 transition-all cursor-pointer"
              title="Toggle alternative perspective view"
            >
              <RefreshCw className="w-3 h-3 animate-spin-slow" />
              <span className="hidden sm:inline">Alternate View</span>
            </button>
          )}
        </div>

        {/* Floating Verified Industry Focus Tag */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-white font-bold text-sm tracking-tight drop-shadow-sm flex items-center gap-1.5">
              <Sparkles className={`w-3.5 h-3.5 ${config.accentBadgeText}`} />
              {config.industry}
            </span>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 backdrop-blur-sm">
              Targeted Case Study Asset
            </span>
          </div>

          {/* Quick Real-Time Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-slate-800/80 text-left">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[9px] font-mono uppercase text-slate-400 block truncate">{stat.label}</span>
                <span className={`text-xs sm:text-sm font-black font-display text-white block ${idx === 0 ? config.accentBadgeText : ''}`}>
                  {stat.value}
                </span>
                <span className="text-[8px] text-slate-400 font-mono block truncate hidden sm:block">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Content Overlay or Interactive Extension */}
      {customOverlayContent ? (
        <div className="p-4 border-t border-slate-900 bg-[#090d17]">
          {customOverlayContent}
        </div>
      ) : (
        <div className="p-3.5 bg-[#080c16] border-t border-slate-900/90 text-left">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1.5">
            <Layers className="w-3 h-3 text-slate-400" />
            <span className="uppercase font-bold tracking-wider">Targeted Acquisition Vectors:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {config.visualHighlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                <CheckCircle className={`w-3 h-3 flex-shrink-0 ${config.accentBadgeText}`} />
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustryHeroVisual;

import React, { useState } from 'react';
import { 
  Building2, Users, Radar, Sparkles, CheckCircle2, 
  MapPin, Clock, ArrowRight, ShieldCheck, PhoneCall 
} from 'lucide-react';
import CleanAdvancedHeroVisual from './CleanAdvancedHeroVisual';
import LazyImage from './LazyImage';

interface RealisticHeroAgencyVisualProps {
  onOpenAudit?: () => void;
}

export const RealisticHeroAgencyVisual: React.FC<RealisticHeroAgencyVisualProps> = ({
  onOpenAudit
}) => {
  const [activeTab, setActiveTab] = useState<'reception' | 'team' | 'radar'>('reception');

  // Curated, ultra-realistic corporate photography
  const visualTabs = {
    reception: {
      id: 'reception',
      label: 'Corporate HQ Reception',
      icon: Building2,
      tag: 'WELCOME & CLIENT CONCIERGE',
      title: 'AKGLS Global HQ • Executive Welcome Desk',
      description: 'Friendly client services staff warmly welcoming enterprise partners at our modern corporate center.',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
      secondaryImageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      alt: 'Modern corporate reception with friendly professional staff at AKGLS headquarters',
      badge: '● Live Reception Desk Open',
      stats: [
        { label: 'Client Satisfaction', value: '99.4%' },
        { label: 'Avg Check-in Time', value: '< 2 min' },
        { label: 'Global Locations', value: '4 Hubs' }
      ]
    },
    team: {
      id: 'team',
      label: 'AI & Search Strategy Lab',
      icon: Users,
      tag: 'COLLABORATIVE ARCHITECTS',
      title: 'Senior Growth & AI Strategists at Work',
      description: 'Real engineers and technical SEO directors collaborating on enterprise search and AI citation campaigns.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
      secondaryImageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
      alt: 'Collaborative digital marketing and AI search engineering team in conference room',
      badge: '● 42 Senior Strategists Active',
      stats: [
        { label: 'Avg Team Experience', value: '9.2 Yrs' },
        { label: 'Active Projects', value: '180+' },
        { label: 'Patent-Pending Schemas', value: '14' }
      ]
    },
    radar: {
      id: 'radar',
      label: 'Live AI Citation Radar',
      icon: Radar,
      tag: 'ALGORITHMIC TELEMETRY',
      title: 'Multi-Model Search & LLM Grounding',
      description: 'Real-time telemetry showing live citation density across ChatGPT, Perplexity, Gemini, and Claude.',
      imageUrl: '',
      alt: 'Real-time neural citation telemetry radar',
      badge: '● Real-Time Radar Active',
      stats: [
        { label: 'Citation Rate', value: '94.8%' },
        { label: 'Query Latency', value: '120ms' },
        { label: 'Disambiguation', value: '100%' }
      ]
    }
  };

  const current = visualTabs[activeTab];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl overflow-hidden bg-[#0c121e] border border-slate-800 shadow-2xl shadow-indigo-950/20 group">
      {/* Top Tab Bar: Easily toggle between Corporate Realism and AI Telemetry */}
      <div className="bg-[#080d17] border-b border-slate-800/80 px-3 py-2.5 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            HQ OPERATIONS
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {(['reception', 'team', 'radar'] as const).map((tabKey) => {
            const tab = visualTabs[tabKey];
            const IconComponent = tab.icon;
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold font-display transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative min-h-[380px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden bg-slate-950">
        {activeTab === 'radar' ? (
          <div className="w-full h-full min-h-[400px] flex items-center justify-center p-2">
            <CleanAdvancedHeroVisual />
          </div>
        ) : (
          <div className="relative w-full h-[380px] sm:h-[420px] overflow-hidden">
            {/* Real Corporate HQ / Reception Photograph */}
            <LazyImage
              src={current.imageUrl}
              alt={current.alt}
              priority={true}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Vignette gradients for text readability and cinematic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-[#080d17]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d17]/70 via-transparent to-[#080d17]/30" />

            {/* Floating Top Badge: Live Concierge Status */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono font-bold text-emerald-400 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {current.badge}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-950/80 backdrop-blur-md border border-indigo-700/40 text-[9.5px] font-mono font-semibold text-indigo-300">
                <ShieldCheck className="w-3 h-3 text-indigo-400" /> Verified Facility
              </span>
            </div>

            {/* Location Pill */}
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono font-medium text-slate-300">
                <MapPin className="w-3 h-3 text-brand-teal" /> Global HQ
              </span>
            </div>

            {/* Bottom Glassmorphic Overlay Card */}
            <div className="absolute bottom-3 inset-x-3 z-10 bg-[#080d17]/85 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 space-y-3 shadow-2xl">
              <div>
                <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-brand-teal block">
                  {current.tag}
                </span>
                <h4 className="text-sm sm:text-base font-extrabold font-display text-white leading-tight">
                  {current.title}
                </h4>
                <p className="text-slate-300 text-xs font-light leading-relaxed mt-1 line-clamp-2">
                  {current.description}
                </p>
              </div>

              {/* Quick Key Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
                {current.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-slate-900/70 rounded-xl px-2.5 py-1.5 text-center border border-slate-800/60">
                    <span className="text-xs sm:text-sm font-extrabold font-mono text-white block">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-400 block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive Action Hook */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-slate-400">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>Visiting hours: 09:00 - 19:00 EST</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-teal hover:text-teal-300 font-display transition-colors cursor-pointer"
                >
                  <span>Book HQ Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Assurance Strip */}
      <div className="bg-[#060a12] border-t border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[10.5px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
          <span>Real physical offices in New York, London, Singapore & Bengaluru</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-300 font-medium">
          <PhoneCall className="w-3 h-3 text-brand-indigo" />
          <span>Concierge Desk: +91 83181 14492</span>
        </div>
      </div>
    </div>
  );
};

export default RealisticHeroAgencyVisual;

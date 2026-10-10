import React from 'react';
import { 
  Building2, Users, ShieldCheck, MapPin, 
  Coffee, Laptop, Lock, ArrowRight, CheckCircle2, 
  Calendar, Phone 
} from 'lucide-react';
import LazyImage from './LazyImage';

interface CorporateHeadquartersSectionProps {
  onScheduleVisit?: () => void;
}

export const CorporateHeadquartersSection: React.FC<CorporateHeadquartersSectionProps> = ({
  onScheduleVisit
}) => {
  const facilities = [
    {
      id: 'reception',
      badge: 'CLIENT HOSPITALITY',
      badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
      title: 'Modern Corporate Reception & Welcome Desk',
      subtitle: 'Warm, friendly greeting staff & private executive lounge',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
      alt: 'Modern corporate reception with friendly greeting staff at AKGLS Global headquarters',
      description: 'Where enterprise relationships begin. Our dedicated client concierges and front-desk specialists warmly welcome Fortune 500 executives, marketing directors, and business owners for scheduled growth audits.',
      features: [
        'Private check-in with dedicated executive concierge',
        'Confidential NDA consultation rooms & barista lounge',
        'Direct fiber-optic demo pods for real-time site audits'
      ]
    },
    {
      id: 'operations',
      badge: 'ENGINEERING LAB',
      badgeColor: 'text-teal-400 bg-teal-950/40 border-teal-500/30',
      title: 'AI & Algorithmic Search Command Center',
      subtitle: 'Senior growth engineers & data architects collaborating',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
      alt: 'Senior SEO and AI growth engineers collaborating in modern agency workspace',
      description: 'Our in-house technical teams work side-by-side to reverse-engineer search algorithms, track LLM citation shifts across ChatGPT and Perplexity, and deploy structured schemas.',
      features: [
        'Live multi-screen algorithmic tracking wall',
        'Real-time vector and entity knowledge graph testing',
        'Direct collaboration between data scientists and SEO directors'
      ]
    },
    {
      id: 'war-room',
      badge: 'STRATEGY BOARDROOM',
      badgeColor: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30',
      title: 'Executive Client War Room & Boardroom Suite',
      subtitle: 'Where multi-million dollar organic roadmaps are forged',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
      alt: 'Executive boardroom presentation and client strategy review at modern corporate headquarters',
      description: 'Designed for deep-dive quarterly business reviews (QBRs), competitive teardowns, and high-stakes SEO roadmaps with your C-suite and in-house marketing leads.',
      features: [
        'Encrypted presentation displays and high-security data links',
        'Bespoke 12-month organic revenue model walkthroughs',
        'Direct, unfiltered access to principal technical architects'
      ]
    }
  ];

  const globalHubs = [
    { city: 'New York City', role: 'North America Headquarters', address: '430 Park Avenue, 14th Floor, New York, NY 10022', phone: '+1 (212) 555-0198' },
    { city: 'London', role: 'EMEA Corporate Hub', address: '25 Bank Street, Canary Wharf, London E14 5JP', phone: '+44 20 7946 0912' },
    { city: 'Singapore', role: 'APAC Regional Center', address: 'Marina Bay Financial Centre, Tower 2, Singapore 018983', phone: '+65 6789 0123' },
    { city: 'Bengaluru', role: 'Global Tech & Engineering Campus', address: 'Embassy TechVillage, Outer Ring Road, Bengaluru 560103', phone: '+91 83181 14492' }
  ];

  return (
    <section id="corporate-hq-section" className="py-20 md:py-28 bg-[#04070e] text-left relative overflow-hidden border-t border-slate-900/60 scroll-mt-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-indigo/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/20 rounded-full py-1.5 px-4 font-display inline-block">
            AUTHENTIC AGENCY OPERATIONS & PHYSICAL HUBS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
            Step Inside AKGLS Global: Modern Headquarters & Client Experience Center
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            We are not a faceless offshore freelancer network. AKGLS operates world-class physical corporate centers with friendly client concierges, dedicated war rooms, and certified on-site enterprise architects.
          </p>
        </div>

        {/* 3 Large Photo Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((f) => (
            <div 
              key={f.id}
              className="bg-[#0a0f1d] border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-950/20 transition-all flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <LazyImage
                  src={f.image}
                  alt={f.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider py-1 px-2.5 rounded-full border backdrop-blur-md ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold font-display text-white group-hover:text-brand-teal transition-colors leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {f.description}
                  </p>
                </div>

                {/* Features checklist */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {f.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Physical Hubs Banner */}
        <div className="bg-[#0c121e] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-indigo block">
                GLOBAL FOOTPRINT & RECEPTION DESKS
              </span>
              <h3 className="text-xl font-extrabold font-display text-white mt-1">
                4 Dedicated Corporate Facilities Worldwide
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-slate-300">
                All Concierge Desks Open for Bookings
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalHubs.map((hub, idx) => (
              <div 
                key={idx}
                className="bg-[#070b14] border border-slate-850 p-4 rounded-2xl space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-brand-teal font-extrabold text-sm font-display">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{hub.city}</span>
                </div>
                <div className="text-[10.5px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  {hub.role}
                </div>
                <div className="text-xs text-slate-300 font-light leading-relaxed">
                  {hub.address}
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800/60 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-slate-500" />
                  <span>{hub.phone}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>In-person client meetings require 24h advance reservation for security check-in.</span>
            </div>
            
            <button
              type="button"
              onClick={() => {
                if (onScheduleVisit) {
                  onScheduleVisit();
                } else {
                  const formEl = document.querySelector('#audit-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-indigo hover:bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-950/40 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule In-Person HQ Consultation</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorporateHeadquartersSection;

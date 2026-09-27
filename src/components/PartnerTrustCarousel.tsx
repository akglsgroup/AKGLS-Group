import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Award, ExternalLink, Sparkles, Server, Zap } from 'lucide-react';

export interface PartnerBadge {
  id: string;
  name: string;
  category: 'search-ads' | 'crm-growth' | 'ecommerce' | 'hosting-cloud';
  tierBadge: string;
  tierBadgeColor: string;
  tagline: string;
  capabilities: string[];
  brandColor: string;
  logo: React.ReactNode;
}

export const PARTNER_BADGES: PartnerBadge[] = [
  {
    id: 'google-partner',
    name: 'Google',
    category: 'search-ads',
    tierBadge: 'Premier Partner',
    tierBadgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    tagline: 'Google Ads, Search & AI Overviews',
    capabilities: ['Search & Performance Max', 'Google AI Overviews Seeding', 'Merchant Center & Shopping'],
    brandColor: '#4285F4',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    )
  },
  {
    id: 'hubspot-partner',
    name: 'HubSpot',
    category: 'crm-growth',
    tierBadge: 'Diamond Partner',
    tierBadgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    tagline: 'Inbound CRM & Automation',
    capabilities: ['Enterprise CRM Migration', 'Marketing Hub Pipelines', 'Automated Lead Scoring'],
    brandColor: '#FF7A59',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#FF7A59" fillOpacity="0.15" stroke="#FF7A59" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3.2" fill="#FF7A59"/>
        <circle cx="12" cy="4.8" r="1.8" fill="#FF7A59"/>
        <circle cx="18.2" cy="12" r="1.8" fill="#FF7A59"/>
        <path d="M12 6.6V8.8M15.2 12H16.4" stroke="#FF7A59" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 15.2V19.2M9.5 9.5L6.5 6.5" stroke="#FF7A59" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'shopify-partner',
    name: 'Shopify Plus',
    category: 'ecommerce',
    tierBadge: 'Plus Partner',
    tierBadgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    tagline: 'Headless & Custom Commerce',
    capabilities: ['Shopify Plus Store Architecture', 'Custom Liquid & Hydrogen Dev', 'High-Speed Checkout Optimization'],
    brandColor: '#95BF47',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 4.6l-1.9-.6c-.2-.1-.4 0-.5.2l-1 2.2-2.5.7c-.5.1-.8.6-.8 1.1l.6 11.2c0 .6.4 1 1 1h8c.6 0 1-.4 1-1l.7-12.8c0-.6-.4-1.1-1-1.1l-3.6-.9z" fill="#95BF47"/>
        <path d="M15.4 6.4l-2.5.7c-.5.1-.8.6-.8 1.1l.6 11.2c0 .6.4 1 1 1h2.2l-.5-14z" fill="#5E8E3E"/>
        <path d="M13.2 4.2c-.3 0-.6.1-.8.4-.7 1-1.1 2.3-1.3 3.6l2.9-.8c0-.9.2-1.8.6-2.5.2-.4 0-.7-.4-.7h-1z" fill="#95BF47"/>
        <path d="M14.8 11.2c0-.1 0-.2-.1-.2-.2-.1-.5 0-.8.1-.5.3-.9.7-1.3 1.2-.5.7-.9 1.5-1.2 2.4-.2.6-.3 1.2-.3 1.8 0 .4.2.7.5.7.1 0 .2 0 .3-.1.4-.2.8-.6 1.1-1.1.4-.6.8-1.4 1.1-2.2.4-.9.6-1.8.7-2.6z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 'hostinger-partner',
    name: 'Hostinger',
    category: 'hosting-cloud',
    tierBadge: 'Certified Partner',
    tierBadgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    tagline: 'High-Performance Cloud Infrastructure',
    capabilities: ['Cloud VPS & NVMe Clusters', 'LiteSpeed Cache Acceleration', 'Sub-200ms TTFB Server Stacks'],
    brandColor: '#673DE6',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3.5 6.9V17.1L12 22L20.5 17.1V6.9L12 2Z" fill="#673DE6" fillOpacity="0.18" stroke="#673DE6" strokeWidth="1.5"/>
        <path d="M7.8 7.5V16.5M16.2 7.5V16.5M7.8 12H16.2" stroke="#673DE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="1.5" fill="#8C65FF"/>
      </svg>
    )
  },
  {
    id: 'meta-partner',
    name: 'Meta',
    category: 'search-ads',
    tierBadge: 'Business Partner',
    tierBadgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    tagline: 'Paid Social & Advantage+ Engine',
    capabilities: ['Conversions API (CAPI) Integration', 'Advantage+ Shopping Campaigns', 'High-ROAS Meta Ads Funnels'],
    brandColor: '#0081FB',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7 4C14.7 4 13.1 5.3 12 6.8 10.9 5.3 9.3 4 7.3 4 4.3 4 2 6.5 2 9.7c0 3.7 3.3 7 7.9 10 1.2.8 2.9.8 4.2 0 4.6-3 7.9-6.3 7.9-10C22 6.5 19.7 4 16.7 4zm-9.4 9.8c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1c1.5 0 2.9.8 3.6 2.1-1.3 1.8-2.6 4.3-3.6 6.1zm9.4 0c-1-1.8-2.3-4.3-3.6-6.1.7-1.3 2.1-2.1 3.6-2.1 2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1z" fill="#0081FB"/>
      </svg>
    )
  },
  {
    id: 'wordpress-partner',
    name: 'WordPress VIP',
    category: 'hosting-cloud',
    tierBadge: 'Agency Contributor',
    tierBadgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    tagline: 'Enterprise CMS & Custom Blocks',
    capabilities: ['Headless WordPress Architecture', 'Core Web Vitals Optimization', 'Enterprise Security Hardening'],
    brandColor: '#21759B',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#21759B" strokeWidth="1.5" fill="#21759B" fillOpacity="0.15"/>
        <path d="M3.2 12c0 3.6 2.2 6.7 5.3 8l-4.1-11.2c-.8 1-.1.2-1.2 3.2zm13.1-6.7c.6 0 1.2.1 1.2.1-.5.7-1 1.7-1 2.6 0 1.4.9 2.5 1.5 3.8.7 1.4 1 3 .3 5.1l-3-8.8c.6-.4 1-.8 1-2.8zm-5.6 15c.4.1.8.2 1.3.2.7 0 1.4-.1 2.1-.4l-2.6-7.8-2.4 7.2c.5.5 1 .7 1.6.8zm-6.6-6.4l3.5-10.1c-.8.1-1.6.1-2.4.2l3.4 9.9h-4.5z" fill="#3858E9"/>
      </svg>
    )
  },
  {
    id: 'aws-partner',
    name: 'AWS Partner',
    category: 'hosting-cloud',
    tierBadge: 'Partner Network',
    tierBadgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    tagline: 'Amazon Web Services Cloud',
    capabilities: ['AWS Lambda Serverless APIs', 'CloudFront Global CDN', 'RDS & DynamoDB Architecture'],
    brandColor: '#FF9900',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.2 8.5h2.2v4.8c0 .7.3 1.1.9 1.1.6 0 1-.4 1-1.1V8.5h2.2v4.8c0 1.9-1.2 2.8-2.9 2.8s-2.9-.9-2.9-2.8V8.5z" fill="#FF9900"/>
        <path d="M14.6 8.5h2.3l1.8 5 1.8-5h2.3l-2.9 7.4h-2.4l-2.9-7.4z" fill="#FFFFFF"/>
        <path d="M4 18.5c4.8 2.6 11.2 2.6 16 0-.3-.3-.8-.7-1.3-.9-4.2 2-9.6 1.9-13.8 0-.3.3-.6.6-.9.9z" fill="#FF9900"/>
      </svg>
    )
  },
  {
    id: 'cloudflare-partner',
    name: 'Cloudflare',
    category: 'hosting-cloud',
    tierBadge: 'Certified Partner',
    tierBadgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    tagline: 'DDoS Defense & Edge Routing',
    capabilities: ['Edge Worker Microservices', 'Enterprise WAF & Bot Defense', 'DNS Anycast Acceleration'],
    brandColor: '#F38020',
    logo: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 12.2c-.3-.8-.8-1.5-1.5-2-.3-.2-.6-.4-1-.5.2-.6.2-1.3.1-2-.3-1.6-1.5-2.8-3.1-3.2-1.8-.4-3.5.4-4.4 1.9-.6-.2-1.3-.1-1.9.2-.8.4-1.4 1.1-1.6 2-.9.2-1.7.8-2.2 1.6-.7 1.1-.8 2.5-.2 3.6.4.7 1 1.2 1.7 1.5.3.1.6.2.9.2h12.5c.9 0 1.7-.4 2.3-1 .6-.6 1-1.5 1-2.4 0-.8-.3-1.5-.7-1.9h-.1v-.2z" fill="#F38020"/>
        <path d="M17.8 17.5h-13c-.6 0-1.1-.3-1.4-.7-.4-.5-.5-1.1-.4-1.7.2-.6.7-1.1 1.3-1.3h.5l.2-.5c.3-.8.9-1.4 1.7-1.7.5-.2 1-.2 1.6 0l.5.2.3-.5c.6-1.1 1.8-1.8 3.1-1.8.3 0 .7.1 1 .2l.6.2.3-.5c.4-.7 1.2-1.2 2-1.2 1.1 0 2 .7 2.3 1.7l.2.6.6.1c.9.2 1.6.8 1.9 1.6.3.8.2 1.7-.3 2.4l-.4.5.6.1c.7.2 1.2.8 1.2 1.5 0 .8-.5 1.5-1.3 1.6-.2.1-.4.1-.6.1z" fill="#FAAE40"/>
      </svg>
    )
  }
];

export const PartnerTrustCarousel: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<PartnerBadge | null>(null);

  // Repeat array twice to create seamless infinite CSS marquee
  const marqueeBadges = [...PARTNER_BADGES, ...PARTNER_BADGES];

  return (
    <section 
      aria-label="Official Partner Certifications & Trust Badges" 
      className="bg-[#060913] border-y border-slate-800/80 py-8 relative overflow-hidden select-none"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-brand-indigo/10 blur-[90px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-32 bg-brand-teal/10 blur-[90px] rounded-full" />
      </div>

      {/* Header Label Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-800/50">
          
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-bold">
              Verified Enterprise Partner Ecosystem
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
              Direct Tier-1 Platform Accreditations
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> 100% Certified Architects
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> Direct API Escalation
            </span>
          </div>

        </div>
      </div>

      {/* Infinite Carousel Viewport with Fade Gradients on edges */}
      <div className="relative w-full overflow-hidden py-1">
        
        {/* Left & Right Edge Vignette Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#060913] via-[#060913]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#060913] via-[#060913]/80 to-transparent z-20 pointer-events-none" />

        {/* CSS Marquee Track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {marqueeBadges.map((badge, idx) => (
            <div 
              key={`${badge.id}-${idx}`}
              className="mx-2 sm:mx-3 cursor-pointer group"
              onClick={() => setSelectedPartner(badge)}
              title={`Click to view ${badge.name} certification details`}
            >
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-slate-700 group-hover:bg-slate-850 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 min-w-[240px] sm:min-w-[270px]">
                
                {/* Brand Logo Icon */}
                <div className="p-1 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-center shrink-0">
                  {badge.logo}
                </div>

                {/* Name & Tier Info */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-white tracking-tight truncate font-display">
                      {badge.name}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border ${badge.tierBadgeColor}`}>
                      {badge.tierBadge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {badge.tagline}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Subtext info line */}
      <div className="max-w-7xl mx-auto px-4 mt-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
        <p>
          Hover over any partner badge to pause ticker • Click for integration scope
        </p>
        <p className="hidden md:block">
          Official partnerships guarantee zero-delay technical escalation & verified compliance
        </p>
      </div>

      {/* Partner Details Modal */}
      {selectedPartner && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 text-left"
          onClick={() => setSelectedPartner(null)}
        >
          <div 
            className="bg-[#0b101d] border border-slate-700/80 rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors text-xs font-mono"
            >
              ✕ CLOSE
            </button>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                {selectedPartner.logo}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold text-white font-display">
                    {selectedPartner.name}
                  </h3>
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${selectedPartner.tierBadgeColor}`}>
                    {selectedPartner.tierBadge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {selectedPartner.tagline}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                Certified Enterprise Capabilities:
              </div>
              <ul className="space-y-1.5">
                {selectedPartner.capabilities.map((cap, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
              <span className="text-slate-400 font-mono text-[11px]">
                Status: <strong className="text-emerald-400 font-bold">Active & Verified</strong>
              </span>
              <a
                href="#audit-form"
                onClick={() => setSelectedPartner(null)}
                className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Inquire With Partner Stack
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default PartnerTrustCarousel;

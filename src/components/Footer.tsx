import { useState, FormEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, ArrowUp, Award, 
  Sparkles, ChevronDown, Check, CheckCircle, Linkedin, Instagram, 
  Facebook, Twitter, Youtube, Globe, RefreshCw 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { PWAInstallButton } from './PWAInstallButton';
import { 
  FOOTER_FLOATING_CTA, 
  FOOTER_COMPANY_INFO, 
  FOOTER_COLUMNS, 
  FOOTER_CONTACT, 
  FOOTER_NEWSLETTER, 
  FOOTER_LOCAL_SEO, 
  FOOTER_AI_CITATIONS, 
  FOOTER_CERTIFICATIONS, 
  FOOTER_LEGAL_LINKS 
} from '../data/footerData';

interface FooterProps {
  onBackToHome?: () => void;
  openProposal?: () => void;
  openDownloadModal?: () => void;
}

export default function Footer({ onBackToHome, openProposal, openDownloadModal }: FooterProps) {
  const [mobileActiveTab, setMobileActiveTab] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string, e: MouseEvent) => {
    if (href === '#audit-form' && openProposal) {
      e.preventDefault();
      openProposal();
      return;
    }

    if (href === '#' || href === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else {
        window.history.pushState(null, '', '/' + href);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      }
    } else if (href.startsWith('/')) {
      if (href.includes('#')) {
        e.preventDefault();
        const [path, hash] = href.split('#');
        const targetHash = `#${hash}`;
        if (window.location.pathname === path || (path === '/' && window.location.pathname === '')) {
          const el = document.querySelector(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', href);
            return;
          }
        }
        window.history.pushState(null, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 120);
      } else {
        e.preventDefault();
        window.history.pushState(null, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterLoading(true);
    setTimeout(() => {
      setNewsletterSuccess(true);
      setNewsletterLoading(false);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }, 1000);
  };

  const toggleAccordion = (tabId: string) => {
    setMobileActiveTab(prev => prev === tabId ? null : tabId);
  };

  return (
    <div className="w-full relative z-30" id="common-global-footer">
      
      {/* FLOATING CTA STRIP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 mb-[-50px] relative z-40">
        <div className="bg-gradient-to-r from-brand-indigo via-indigo-950 to-brand-purple rounded-3xl p-8 md:p-12 border border-brand-border/60 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/10 px-2.5 py-1 rounded-full border border-brand-teal/20">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                {FOOTER_FLOATING_CTA.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-white tracking-tight leading-tight">
                {FOOTER_FLOATING_CTA.title}
              </h3>
              <p className="text-indigo-200 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
                {FOOTER_FLOATING_CTA.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto shrink-0">
              <a 
                href={FOOTER_FLOATING_CTA.primaryButton.href}
                onClick={(e) => handleLinkClick(FOOTER_FLOATING_CTA.primaryButton.href, e)}
                aria-label={FOOTER_FLOATING_CTA.primaryButton.text}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-xl hover:shadow-brand-orange/25 w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
                id="footer-strip-cta-audit"
              >
                {FOOTER_FLOATING_CTA.primaryButton.text}
              </a>
              <a 
                href={FOOTER_FLOATING_CTA.secondaryButton.href}
                aria-label={FOOTER_FLOATING_CTA.secondaryButton.text}
                className="bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
                id="footer-strip-cta-consult"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>{FOOTER_FLOATING_CTA.secondaryButton.text}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CONTAINER BACKGROUND - DARK NAVY */}
      <footer className="bg-[#081120] text-slate-350 pt-24 md:pt-28 pb-32 lg:pb-12 border-t border-slate-900/60 font-sans text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TOP PROFILE & CREDENTIALS ROW */}
          <div className="pb-12 border-b border-indigo-950/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <a 
                href="/" 
                onClick={(e) => handleLinkClick('/', e)} 
                aria-label="AKGLS Group homepage"
                className="flex items-center gap-3 select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo rounded-xl p-1 -m-1"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-purple flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                  <span className="text-white font-black text-xl font-display">AK</span>
                </div>
                <div>
                  <span className="font-extrabold tracking-wider text-white text-base font-display uppercase block leading-none">
                    AKGLS <span className="text-brand-teal">GROUP</span>
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-brand-teal uppercase font-bold block mt-1">
                    {FOOTER_COMPANY_INFO.tagline}
                  </span>
                </div>
              </a>

              <p className="text-xs leading-relaxed text-slate-400 font-light pr-4 max-w-lg">
                {FOOTER_COMPANY_INFO.description}
              </p>
            </div>

            {/* Trust Badges 4-Block Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2.5 bg-[#050b15]/60 p-3.5 rounded-2xl border border-indigo-950/30">
              {FOOTER_COMPANY_INFO.trustBadges.map((badge, bIdx) => (
                <div key={bIdx} className="text-left font-display">
                  <span className="text-[11px] font-black text-white block truncate leading-tight">{badge.title}</span>
                  <span className="text-[9px] text-slate-500 block truncate leading-tight font-sans mt-0.5">{badge.desc}</span>
                </div>
              ))}
            </div>

            {/* Social Media Circular Hover Icons */}
            <div className="lg:col-span-3 space-y-2 lg:text-right">
              <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest block font-bold">VERIFIED CHANNELS</span>
              <div className="flex gap-2 lg:justify-end">
                {[
                  { icon: Linkedin, url: "https://linkedin.com/company/akglsgroup", label: "LinkedIn" },
                  { icon: Twitter, url: "https://twitter.com/akglsgroup", label: "Twitter / X" },
                  { icon: Facebook, url: "https://facebook.com/akglsgroup", label: "Facebook" },
                  { icon: Instagram, url: "https://instagram.com/akglsgroup", label: "Instagram" },
                  { icon: Youtube, url: "https://youtube.com/akglsgroup", label: "YouTube" }
                ].map((soc, sIndex) => (
                  <a 
                    key={sIndex}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit AKGLS Group on ${soc.label}`}
                    className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900"
                    title={soc.label}
                  >
                    <soc.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP 6-COLUMN MEGA DIRECTORY */}
          <div className="hidden lg:grid grid-cols-12 gap-8 py-14 border-b border-indigo-950/40">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.id} className="col-span-6 sm:col-span-4 lg:col-span-2 space-y-3.5">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5 border-b border-indigo-950/40 pb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${col.bulletClass}`} />
                  <span>{col.title}</span>
                </h4>
                <ul className="space-y-2 text-xs font-medium">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleLinkClick(link.href, e)}
                        aria-label={link.name}
                        className="text-slate-400 hover:text-brand-teal transition-colors tracking-wide flex items-center justify-between group py-0.5 rounded px-1 -mx-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                      >
                        <span className="group-hover:translate-x-1 transition-transform inline-block">{link.name}</span>
                        {link.badge && (
                          <span className={`px-1.5 py-0.2 text-[9px] rounded font-mono font-bold ${link.isNew ? 'bg-brand-teal/20 text-brand-teal border border-brand-teal/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}`}>
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MOBILE ACCORDION SECTIONS */}
          <div className="lg:hidden py-8 border-b border-indigo-950/40 space-y-3">
            {FOOTER_COLUMNS.map((col) => {
              const isExpanded = mobileActiveTab === col.id;
              return (
                <div key={col.id} className="bg-slate-950/60 border border-indigo-950/30 rounded-2xl overflow-hidden">
                  <button 
                    type="button"
                    onClick={() => toggleAccordion(col.id)}
                    aria-expanded={isExpanded}
                    aria-label={`Toggle ${col.title} section`}
                    className="w-full py-4 px-5 flex justify-between items-center text-xs font-extrabold text-white font-display focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${col.bulletClass}`} />
                      <span>{col.title}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-brand-teal' : ''}`} />
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-indigo-950/20 grid grid-cols-2 gap-2 text-left">
                      {col.links.map((link, lIdx) => (
                        <a 
                          key={lIdx}
                          href={link.href}
                          onClick={(e) => handleLinkClick(link.href, e)}
                          aria-label={link.name}
                          className="text-slate-400 hover:text-brand-teal text-xs py-1.5 block truncate rounded px-1 -mx-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CONTACT DETAILS, NEWSLETTER & GEO AUTHORIZATION TAGS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-indigo-950/40">
            
            {/* CONTACT INFORMATION */}
            <div className="lg:col-span-4 space-y-3.5">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-teal" />
                <span>Contact Information</span>
              </h5>
              <div className="space-y-2.5 text-xs text-slate-400 font-light leading-relaxed">
                <p className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>
                    Direct Inquiries:{" "}
                    <a href={`mailto:${FOOTER_CONTACT.email}`} aria-label={`Email AKGLS Group at ${FOOTER_CONTACT.email}`} className="text-white hover:underline font-bold rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">{FOOTER_CONTACT.email}</a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>
                    Direct Calling:{" "}
                    <a href={`tel:${FOOTER_CONTACT.phoneClean}`} aria-label={`Call AKGLS Group at ${FOOTER_CONTACT.phone}`} className="text-white hover:underline font-bold font-mono rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">{FOOTER_CONTACT.phone}</a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>{FOOTER_CONTACT.offices}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>{FOOTER_CONTACT.workingHours}</span>
                </p>
              </div>

              {/* Instant Action CTA buttons */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a 
                  href={FOOTER_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with AKGLS Group on WhatsApp"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 px-3.5 rounded-lg transition-all flex items-center gap-1.5 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  WhatsApp Chat
                </a>
                <a 
                  href={FOOTER_CONTACT.consultationHref}
                  onClick={(e) => handleLinkClick(FOOTER_CONTACT.consultationHref, e)}
                  aria-label="Book Free Consultation with AKGLS Group"
                  className="bg-brand-indigo hover:bg-brand-indigo/90 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 px-3.5 rounded-lg transition-all flex items-center gap-1.5 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                  Book Consultation
                </a>
              </div>
            </div>

            {/* NEWSLETTER SUBSCRIPTION */}
            <div className="lg:col-span-4 space-y-3.5">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>{FOOTER_NEWSLETTER.title}</span>
              </h5>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                {FOOTER_NEWSLETTER.description}
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2 relative">
                <div className="relative flex items-center">
                  <input 
                    type="email" 
                    required
                    placeholder={FOOTER_NEWSLETTER.placeholder}
                    aria-label="Email address for newsletter"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#050b15] border border-slate-800 focus:border-brand-teal rounded-xl py-3 pl-4 pr-12 text-xs text-white placeholder-slate-500 focus:outline-none font-medium focus-visible:ring-2 focus-visible:ring-brand-teal"
                  />
                  <button 
                    type="submit"
                    disabled={newsletterLoading}
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bg-brand-indigo hover:bg-brand-indigo/80 disabled:opacity-60 text-white p-2 rounded-lg text-xs transition-colors shrink-0 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    title="Subscribe"
                  >
                    {newsletterLoading ? (
                      <RefreshCw className="w-4 h-4 animate-spin text-brand-teal" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {newsletterSuccess && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[10px] text-brand-teal font-extrabold flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{FOOTER_NEWSLETTER.successMessage}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* LOCAL SEO & AI CITATION TARGETS */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div>
                <h6 className="text-[10px] font-extrabold uppercase tracking-widest text-white font-mono flex items-center gap-1.5 mb-2">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Local SEO Authority</span>
                </h6>
                <div className="flex flex-wrap gap-1.5">
                  {FOOTER_LOCAL_SEO.map((loc, idx) => (
                    <a 
                      key={idx}
                      href={loc.href}
                      onClick={(e) => handleLinkClick(loc.href, e)}
                      aria-label={`Local SEO in ${loc.name}`}
                      className="text-[9.5px] font-bold font-mono text-slate-400 hover:text-brand-teal bg-[#050b15] border border-indigo-950/40 py-1 px-2 rounded-md hover:border-brand-teal/30 transition-all block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    >
                      {loc.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h6 className="text-[10px] font-extrabold uppercase tracking-widest text-white font-mono flex items-center gap-1.5 mb-2">
                  <Award className="w-3.5 h-3.5 text-brand-orange" />
                  <span>AI Search Citation Targets</span>
                </h6>
                <div className="flex flex-wrap gap-1.5">
                  {FOOTER_AI_CITATIONS.map((tag, idx) => (
                    <a 
                      key={idx}
                      href={tag.href}
                      onClick={(e) => handleLinkClick(tag.href, e)}
                      aria-label={`AI Citation topic: ${tag.name}`}
                      className="text-[9.5px] font-black font-mono text-slate-400 hover:text-cyan-300 bg-[#050b15] border border-indigo-950/40 py-1 px-2 rounded-md hover:border-cyan-400/30 transition-all block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      {tag.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ACCREDITED TRUST & PARTNER CERTIFICATIONS */}
          <div className="py-7 border-b border-indigo-950/40 flex flex-wrap justify-center md:justify-between items-center gap-4">
            <span className="text-[9.5px] font-mono text-slate-400 uppercase font-black tracking-widest text-center md:text-left">
              SECURED & LICENSED ENTERPRISE CREDENTIALS:
            </span>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {FOOTER_CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-indigo-950/40 px-3 py-1.5 rounded-xl flex items-center gap-2 text-left select-none">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                  <div>
                    <span className="text-[10px] font-black text-white block leading-none font-display">{cert.label}</span>
                    <span className="text-[8.5px] text-slate-400 block leading-none mt-0.5 font-mono">{cert.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEGAL LINKS & COPYRIGHT BAR */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 gap-4 text-center select-none">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
              <span>© {currentYear} AKGLS Group. All Rights Reserved.</span>
              <span className="text-indigo-950/60 hidden sm:inline">|</span>
              {FOOTER_LEGAL_LINKS.map((leg, lIdx) => (
                <a 
                  key={lIdx} 
                  href={leg.href} 
                  onClick={(e) => handleLinkClick(leg.href, e)}
                  aria-label={leg.name}
                  className="hover:text-slate-300 transition-colors rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  {leg.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 font-display text-slate-400 text-xs font-semibold">
              <PWAInstallButton 
                variant="footer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brand-teal transition-colors rounded px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal cursor-pointer"
              />
              <span className="text-indigo-950/60 hidden sm:inline">•</span>
              <span>Designed with ❤️ for AI-Driven Growth</span>
              <span className="text-indigo-950/60 hidden sm:inline">•</span>
              <button 
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brand-teal transition-colors rounded px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal cursor-pointer"
                aria-label="Scroll smoothly back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

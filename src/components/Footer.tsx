import { useState, FormEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, Shield, Award, 
  Sparkles, ChevronDown, Check, CheckCircle, Linkedin, Instagram, 
  Facebook, Twitter, Youtube, Globe, AlertCircle, RefreshCw 
} from 'lucide-react';

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

  // Address: San Francisco Office: 201 Mission St • NYC Office: 1540 Broadway
  const WHATSAPP_LINK = "https://wa.me/918318114492";
  const CONTACT_NUMBER = "+91 831 811 4492";

  const handleLinkClick = (href: string, e: MouseEvent) => {
    // Standard routing dispatcher using pushState and popstate
    if (href.startsWith('#')) {
      e.preventDefault();
      window.location.hash = href;
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: If elements not present (we are on a subpage), force route state
        window.history.pushState(null, '', '/');
        window.location.hash = href;
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } else if (href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'instant' });
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
    }, 1200);
  };

  const toggleAccordion = (tabId: string) => {
    if (mobileActiveTab === tabId) {
      setMobileActiveTab(null);
    } else {
      setMobileActiveTab(tabId);
    }
  };

  // Section 2: SEO Services Info
  const seoServicesLinks = [
    { name: "SEO Services", href: "/seo-services" },
    { name: "Technical SEO", href: "/technical-seo" },
    { name: "Local SEO", href: "/local-seo-services" },
    { name: "Ecommerce SEO", href: "/ecommerce-seo-services" },
    { name: "Enterprise SEO", href: "/enterprise-seo-services" },
    { name: "AI SEO Services", href: "/ai-seo-services" },
    { name: "AI Search Optimization", href: "/ai-search-optimization-services" },
    { name: "ChatGPT Optimization", href: "/chatgpt-optimization-services" },
    { name: "Gemini Optimization", href: "/gemini-optimization-services" },
    { name: "Claude Optimization", href: "/claude-optimization-services" },
    { name: "GEO Services", href: "/geo-services" },
    { name: "AEO Services", href: "/aeo-services" },
    { name: "Link Building", href: "/link-building-services" },
    { name: "SEO Audit Services", href: "/seo-audit-services" },
  ];

  // Section 3: Digital Marketing Info
  const marketingServicesLinks = [
    { name: "Enterprise Marketing Solutions", href: "/enterprise-marketing-solutions" },
    { name: "Ecommerce Growth Solutions", href: "/ecommerce-growth-solutions" },
    { name: "Local Business Growth Services", href: "/local-business-growth-services" },
    { name: "Google Ads Services", href: "/google-ads-services" },
    { name: "Meta Ads Services", href: "/meta-ads-services" },
    { name: "LinkedIn Ads Services", href: "/linkedin-ads-services" },
    { name: "Social Media Marketing", href: "#capabilities-explorer" },
    { name: "Content Marketing", href: "#capabilities-explorer" },
    { name: "ORM Services", href: "#capabilities-explorer" },
    { name: "B2B Lead Generation Services", href: "/b2b-lead-generation-services" },
    { name: "SaaS Marketing Solutions", href: "/saas-marketing-solutions" },
    { name: "Email Marketing", href: "#capabilities-explorer" },
    { name: "Conversion Optimization", href: "#audit-form" },
    { name: "Analytics Services", href: "#capabilities-explorer" },
  ];

  // Section 4: Web & Development Info
  const devServicesLinks = [
    { name: "Web Design Services", href: "#web-design-services" },
    { name: "WordPress Development", href: "#wordpress-development-services" },
    { name: "WooCommerce Development", href: "#web-design-services" },
    { name: "Shopify Development", href: "/shopify-development-services" },
    { name: "Startup Growth Solutions", href: "/startup-growth-solutions" },
    { name: "Landing Page Design", href: "#web-design-services" },
    { name: "Website Maintenance", href: "#web-design-services" },
    { name: "UI/UX Design", href: "#web-design-services" },
    { name: "Website Speed Optimization", href: "#technical-seo" },
  ];

  // Section 5: Industry Solutions
  const industryLinks = [
    { name: "Dental Clinic Marketing", href: "/dental-clinic-marketing" },
    { name: "Healthcare Marketing", href: "/healthcare-marketing-services" },
    { name: "IoT Marketing", href: "/iot-company-marketing-services" },
    { name: "Law Firm Marketing", href: "/law-firm-marketing-services" },
    { name: "Manufacturing Marketing", href: "/manufacturing-marketing-services" },
    { name: "Real Estate Marketing", href: "/real-estate-marketing-services" },
    { name: "Education Marketing", href: "/education-marketing-services" },
    { name: "Restaurant Marketing", href: "/restaurant-marketing-services" },
    { name: "Finance Marketing", href: "/finance-marketing-services" },
  ];

  // Section 6: Resources & Tools Info
  const resourcesLinks = [
    { name: "Blog & Insights", href: "#capabilities-explorer" },
    { name: "Case Studies", href: "#portfolio-gallery" },
    { name: "Free SEO Tools", href: "#capabilities-explorer" },
    { name: "Free Performance Audit", href: "#audit-form" },
    { name: "SEO Setup Checklist", href: "#capabilities-explorer" },
    { name: "AI SEO Guide (2026)", href: "#capabilities-explorer" },
    { name: "Expert Webinars", href: "#capabilities-explorer" },
    { name: "Frequently FAQs", href: "#faq" },
  ];

  // Geo links for Local Authority
  const locationLinks = [
    { name: "SEO Company in Delhi", href: "#seo-services" },
    { name: "SEO Company in Noida", href: "#seo-services" },
    { name: "SEO Company in Gurgaon", href: "#seo-services" },
    { name: "Digital Marketing Agency India", href: "#seo-services" },
  ];

  // AI-Optimized topical tags
  const aiSearchTags = [
    { name: "AI SEO Services", href: "/ai-seo-services" },
    { name: "AI Search Optimization", href: "/ai-search-optimization-services" },
    { name: "GEO Services", href: "/geo-services" },
    { name: "AEO Services", href: "/aeo-services" },
    { name: "ChatGPT Optimization", href: "/chatgpt-optimization-services" },
    { name: "Gemini Optimization", href: "/gemini-optimization-services" },
    { name: "Claude Optimization", href: "/claude-optimization-services" },
    { name: "Voice Search SEO", href: "/ai-search-optimization-services" },
  ];

  // Trust elements and Badges
  const trustBadges = [
    { title: "10+ Years Experience", desc: "Proven track record" },
    { title: "AI SEO Experts", desc: "First-mover advantage" },
    { title: "100+ Projects", desc: "Completed with excellence" },
    { title: "ROI-Focused Agency", desc: "Metrics-driven results" }
  ];

  return (
    <div className="w-full relative z-30" id="common-global-footer">
      
      {/* SECTION 10: GRADIENT BLUE/PURPLE FLOATING CTA STRIP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 mb-[-60px] relative z-40">
        <div className="bg-gradient-to-r from-brand-indigo via-indigo-950 to-brand-purple rounded-3xl p-8 md:p-12 border border-indigo-505/30 shadow-2xl relative overflow-hidden text-left">
          {/* Subtle background nodes for decorative feel */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-15">
            <div className="space-y-3.5 max-w-2xl">
              <span className="flex items-center gap-1.5 text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded bg-brand-teal" />
                ACQUISITION EXPANSION Active
              </span>
              <h3 className="text-2.5xl sm:text-3.5xl md:text-4xl font-black font-display text-white tracking-tight leading-tight">
                Ready to Grow Your Business Online?
              </h3>
              <p className="text-indigo-200 text-xs sm:text-sm font-light max-w-xl">
                Deploy customized structural optimizations, capture localized map citation networks, and secure recommendations inside generative AI indices. Get started today.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto shrink-0">
              <a 
                href="#audit-form"
                onClick={(e) => handleLinkClick('#audit-form', e)}
                className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-xl transition-all shadow-xl hover:shadow-brand-orange/25 w-full sm:w-auto text-center"
                id="footer-strip-cta-audit"
              >
                Get Free SEO Audit
              </a>
              <a 
                href="#audit-form"
                onClick={(e) => handleLinkClick('#audit-form', e)}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-700 text-slate-200 font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-xl transition-all w-full sm:w-auto text-center"
                id="footer-strip-cta-consult"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CONTAINER BACKGROUND - DARK NAVY (#081120) */}
      <footer className="bg-[#081120] text-slate-350 pt-28 pb-32 lg:pb-12 border-t border-slate-900/60 font-sans text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* DESKTOP 6-COLUMN MEGA FOOTER & COMPANY CRADLE BLOCK */}
          <div className="hidden lg:grid grid-cols-12 gap-8 pb-16 border-b border-indigo-950/40">
            
            {/* SECTION 1: COLUMN 1 & COMPANY OVERVIEW */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              <a 
                href="#" 
                onClick={(e) => handleLinkClick('#', e)} 
                className="flex items-center gap-3 select-none group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-purple flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-xl font-display">AK</span>
                </div>
                <span className="font-extrabold tracking-wider text-white text-base font-display uppercase">
                  AKGLS <span className="text-brand-teal">GROUP</span>
                </span>
              </a>

              <p className="text-[11.5px] leading-relaxed text-slate-400 font-light pr-2">
                AI-powered digital marketing agency helping businesses grow through SEO, GEO, AEO, AI SEO, Google Ads, Web Design, and lead generation solutions.
              </p>

              {/* Company Trust Badges Mini Grid */}
              <div className="grid grid-cols-2 gap-2 bg-[#050b15]/60 p-3 rounded-2xl border border-indigo-950/30">
                {trustBadges.map((badge, bIdx) => (
                  <div key={bIdx} className="text-left font-display">
                    <span className="text-[10px] sm:text-[10.5px] font-black text-white block truncate leading-tight">{badge.title}</span>
                    <span className="text-[8px] text-slate-500 block truncate leading-tight">{badge.desc}</span>
                  </div>
                ))}
              </div>

              {/* Social Media Circular Hover Icons */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">CONNECT VERIFIED CHANNELS</span>
                <div className="flex gap-2">
                  {[
                    { icon: Linkedin, url: "https://linkedin.com/company/akglsgroup", label: "LinkedIn" },
                    { icon: Instagram, url: "https://instagram.com/akglsgroup", label: "Instagram" },
                    { icon: Facebook, url: "https://facebook.com/akglsgroup", label: "Facebook" },
                    { icon: Twitter, url: "https://twitter.com/akglsgroup", label: "Twitter/X" },
                    { icon: Youtube, url: "https://youtube.com/akglsgroup", label: "YouTube" }
                  ].map((soc, sIndex) => (
                    <a 
                      key={sIndex}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300"
                      title={soc.label}
                    >
                      <soc.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION 2: COLUMN 2 - SEO SERVICES (MEGA CATEGORY) */}
            <div className="col-span-6 lg:col-span-2 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5 border-b border-indigo-950/25 pb-2">
                <span className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                SEO Services
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                {seoServicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="text-slate-400 hover:text-brand-teal transition-colors tracking-wide block hover:translate-x-1 duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 3: COLUMN 3 - DIGITAL MARKETING SERVICES */}
            <div className="col-span-6 lg:col-span-2 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5 border-b border-indigo-950/25 pb-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Marketing Services
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                {marketingServicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="text-slate-400 hover:text-brand-teal transition-colors tracking-wide block hover:translate-x-1 duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 4: COLUMN 4 - WEB & DEVELOPMENT */}
            <div className="col-span-6 lg:col-span-2 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5 border-b border-indigo-950/25 pb-2">
                <span className="w-1.5 h-1.5 bg-brand-purple rounded-full" />
                Web & Tech
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                {devServicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="text-slate-400 hover:text-brand-teal transition-colors tracking-wide block hover:translate-x-1 duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 5: COLUMN 5 - INDUSTRY SOLUTIONS */}
            <div className="col-span-6 lg:col-span-1.5 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5 border-b border-indigo-950/25 pb-2">
                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                Industries
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                {industryLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className={`text-slate-400 hover:text-brand-teal transition-colors tracking-wide block hover:translate-x-1 duration-200 ${link.name.includes("Dental") ? "text-brand-teal font-extrabold" : ""}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 6: COLUMN 6 - RESOURCES & SYSTEM CONTACT */}
            <div className="col-span-6 lg:col-span-1.5 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5 border-b border-indigo-950/25 pb-2">
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                {resourcesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="text-slate-400 hover:text-brand-teal transition-colors tracking-wide block hover:translate-x-1 duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* MOBILE ACCORDION FOOTER SECTIONS */}
          <div className="lg:hidden pb-10 border-b border-indigo-950/30">
            {/* Minimal Mobile Company Pitch */}
            <div className="space-y-4 mb-8">
              <a 
                href="#" 
                onClick={(e) => handleLinkClick('#', e)} 
                className="flex items-center gap-3 select-none"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-purple flex items-center justify-center">
                  <span className="text-white font-black text-lg font-display">AK</span>
                </div>
                <span className="font-extrabold text-white text-sm font-display uppercase tracking-widest">
                  AKGLS GROUP
                </span>
              </a>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                AI-powered digital marketing agency helping businesses grow through SEO, GEO, AEO, AI SEO, Google Ads, Web Design, and lead generation solutions.
              </p>
            </div>

            {/* ACCORDION TRIGGER MODULES */}
            <div className="space-y-3">
              {[
                { id: "seo", title: "SEO Services", links: seoServicesLinks, color: "bg-brand-teal" },
                { id: "marketing", title: "Marketing Services", links: marketingServicesLinks, color: "bg-indigo-505" },
                { id: "dev", title: "Web & Development", links: devServicesLinks, color: "bg-brand-purple" },
                { id: "industries", title: "Industry Solutions", links: industryLinks, color: "bg-brand-orange" },
                { id: "resources", title: "Resources & Tools", links: resourcesLinks, color: "bg-rose-500" }
              ].map((acc, index) => {
                const isExpanded = mobileActiveTab === acc.id;
                return (
                  <div key={index} className="bg-slate-950/50 border border-indigo-950/20 rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => toggleAccordion(acc.id)}
                      className="w-full py-4.5 px-5 flex justify-between items-center text-xs font-extrabold text-white font-display focus:outline-none"
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${acc.color}`} />
                        {acc.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-305 ${isExpanded ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1.5 border-t border-indigo-950/10 grid grid-cols-2 gap-2 text-left">
                        {acc.links.map((link, lIdx) => (
                          <a 
                            key={lIdx}
                            href={link.href}
                            onClick={(e) => handleLinkClick(link.href, e)}
                            className="text-slate-400 hover:text-brand-teal text-xs py-1.5 block truncate"
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
          </div>

          {/* ADVANCED SECTION 7 & 8: CONTACT DETAILS, NEWSLETTER & GEO AUTHORIZATION TAGS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-indigo-950/40">
            
            {/* SECTION 7: CONTACT INFORMATION */}
            <div className="lg:col-span-4 space-y-4">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                Contact Information
              </h5>
              <div className="space-y-3 text-xs text-slate-400 font-light leading-relaxed">
                <p className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>
                    Business Support:{" "}
                    <a href="mailto:info@akglsgroup.com" className="text-white hover:underline font-extrabold">info@akglsgroup.com</a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>
                    Call Council Support:{" "}
                    <a href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`} className="text-white hover:underline font-extrabold">{CONTACT_NUMBER}</a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>San Francisco Office: 201 Mission St • NYC Office: 1540 Broadway</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Working Hours: Mon - Fri: 9:00 AM - 6:00 PM EST</span>
                </p>
              </div>

              {/* Instant Call CTA buttons */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 px-4 rounded-lg transition-all flex items-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Chat
                </a>
                <a 
                  href="#audit-form"
                  onClick={(e) => handleLinkClick('#audit-form', e)}
                  className="bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 px-4 rounded-lg transition-all flex items-center gap-1.5 shadow"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                  Book Consultation
                </a>
              </div>
            </div>

            {/* SECTION 8: NEWSLETTER SUBSCRIPTION FOR GEOGRAPHY CRADLE */}
            <div className="lg:col-span-4 space-y-4">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-white font-display flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                Stay Updated with AI SEO Trends
              </h5>
              <p className="text-[11.5px] font-light text-slate-400 leading-relaxed">
                Get the latest SEO, GEO, AI Search & Google indexing update insights. Directly from our technical core laboratory.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2 relative">
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your business email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#050b15]/90 border border-slate-800 focus:border-brand-indigo rounded-xl py-3 pl-4 pr-12 text-xs text-white placeholder-slate-500 focus:outline-none font-medium"
                  />
                  <button 
                    type="submit"
                    disabled={newsletterLoading}
                    className="absolute right-1.5 top-1.5 bg-brand-indigo hover:bg-opacity-90 disabled:opacity-60 text-white p-1.5 rounded-lg text-xs transition-colors shrink-0 flex items-center justify-center cursor-pointer"
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
                      <Check className="w-3.5 h-3.5" /> Signed up safely. Welcome to AKGLS Core newsletter!
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* ADVANCED STRATEGY: LOCAL SEO & GEO RETRIEVAL POINTERS */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div className="space-y-4">
                <div>
                  <h6 className="text-[10.5px] font-extrabold uppercase tracking-widest text-white font-mono flex items-center gap-1.5 mb-2.5">
                    <Globe className="w-3.5 h-3.5 text-indigo-300" />
                    Local SEO Authority
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {locationLinks.map((loc, idx) => (
                      <a 
                        key={idx}
                        href={loc.href}
                        onClick={(e) => handleLinkClick(loc.href, e)}
                        className="text-[10px] font-bold font-mono text-slate-400 hover:text-brand-teal bg-[#050b15] border border-indigo-950/40 py-1 px-2 rounded-md hover:border-brand-teal/20 transition-all block"
                      >
                        {loc.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h6 className="text-[10.5px] font-extrabold uppercase tracking-widest text-white font-mono flex items-center gap-1.5 mb-2.5">
                    <Award className="w-3.5 h-3.5 text-brand-orange" />
                    AI Search Citation Targets
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {aiSearchTags.map((tag, idx) => (
                      <a 
                        key={idx}
                        href={tag.href}
                        onClick={(e) => handleLinkClick(tag.href, e)}
                        className="text-[10px] font-black font-mono text-slate-400 hover:text-indigo-300 bg-[#050b15] border border-indigo-950/40 py-1 px-2.5 rounded-md hover:border-indigo-400/20 transition-all block"
                      >
                        {tag.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 9: ACCREDITED TRUST & PARTNER CERTIFICATIONS */}
          <div className="py-8 border-b border-indigo-950/40 flex flex-wrap justify-center md:justify-between items-center gap-6">
            <span className="text-[10px] font-mono text-slate-500 uppercase font-black tracking-widest text-center md:text-left">
              Secured & Licensed Enterprise credentials:
            </span>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {[
                { label: "Google Partner", value: "Verified Premier" },
                { label: "Meta Business", value: "Strategic Agency" },
                { label: "SSL Secured", value: "AES-256 Auth" },
                { label: "HubSpot", value: "Diamond Partner" },
                { label: "TrustScore 4.9", value: "Elite Client Reviews" }
              ].map((cert, idx) => (
                <div key={idx} className="bg-slate-950/75 border border-indigo-955/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-left select-none">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <div>
                    <span className="text-[9.5px] font-black text-white block leading-none">{cert.label}</span>
                    <span className="text-[8px] text-slate-500 block leading-none mt-0.5">{cert.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 11 & 12: LEGAL LINKS & COPYRIGHT BAR */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 gap-4 text-center select-none">
            {/* Legal compliance block */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span>© 226-2026 AKGLS Group. All Rights Reserved.</span>
              <div className="h-4 w-px bg-indigo-950/40 hidden sm:block" />
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Disclaimer Policy", href: "#" },
                { name: "Refund Policy", href: "#" },
                { name: "Cookie Directives", href: "#" },
                { name: "GDPR Compliance", href: "#" }
              ].map((leg, lIdx) => (
                <a 
                  key={lIdx} 
                  href={leg.href} 
                  onClick={(e) => handleLinkClick(leg.href, e)}
                  className="hover:text-slate-300 transition-colors"
                >
                  {leg.name}
                </a>
              ))}
            </div>

            {/* Designed with Love */}
            <div className="flex items-center gap-1.5 font-display text-slate-400 text-xs font-semibold">
              <span>Designed with ❤️ for AI-Driven Growth</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, HelpCircle, ArrowRight, CheckCircle2, 
  Award, CheckCircle, Database, LineChart, ShieldCheck, 
  ChevronRight, Users, Sparkles, Languages, Settings, MapPin
} from 'lucide-react';

interface InternationalSeoPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function InternationalSeoPage({ onBackToHome, openProposalForm }: InternationalSeoPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "International SEO Services | Global SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [langCode, setLangCode] = useState('es');
  const [countryCode, setCountryCode] = useState('es');
  const [targetUrl, setTargetUrl] = useState('https://akglsgroup.com');
  const [hreflangTag, setHreflangTag] = useState('');
  const [tagGenerated, setTagGenerated] = useState(false);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    targetRegions: 'Europe',
    siteUrl: ''
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'hreflang' | 'multilingual' | 'ccTLD' | 'global'>('hreflang');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const handleGenerateHreflang = (e: FormEvent) => {
    e.preventDefault();
    const cleanUrl = targetUrl.replace(/\/$/, "");
    const tag = `<link rel="alternate" hreflang="${langCode}-${countryCode.toLowerCase()}" href="${cleanUrl}/${langCode}/" />`;
    setHreflangTag(tag);
    setTagGenerated(true);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Global Multi-Country Digital Properties",
  "url": "https://akglsgroup.com",
  "inLanguage": ["en", "es", "fr", "de"]
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    hreflang: {
      title: "Hreflang Optimization & Canonical Silos",
      icon: <Languages className="w-5 h-5 text-brand-indigo" />,
      desc: "Implement absolute signals telling search engines exactly which regional variant matching language parameters to deliver to local users. We clear conflicting indexes.",
      bullets: [
        "Audit contradictory self-referencing hreflang tag declarations",
        "Implement x-default fallback redirects parameter settings",
        "Prevent regional duplicate crawl flags from affecting domain trust",
        "Map global URLs smoothly against localized alternate indexes"
      ]
    },
    multilingual: {
      title: "Local Natural Language Translation & SEO",
      icon: <Globe className="w-5 h-5 text-brand-purple" />,
      desc: "Raw machine translations fail keyword localization. We work with content experts who adapt semantic concepts to local vernacular search arrays.",
      bullets: [
        "Perform region-specific organic keyword research matching distinct terms",
        "Incorporate localized measurement tags, currencies, and telephone standards",
        "Adapt heading taxonomy structures matching local search intents",
        "Ensure full legal and commercial tag compliance across jurisdictions"
      ]
    },
    ccTLD: {
      title: "Global Domain Routing & Server Networks",
      icon: <Settings className="w-5 h-5 text-brand-teal" />,
      desc: "Decide between subfolders, subdomains, or country-code top-level domains (ccTLDs). We configure CDN networks to deliver high-speed spatial responses.",
      bullets: [
        "Audit latency values across regional edge cloud servers",
        "Map multi-region domain structures securely inside Search Consoles",
        "Implement IP-based geographical discovery redirection pathways",
        "Ensure search crawlers index local language folders smoothly"
      ]
    },
    global: {
      title: "Multi-Region authority & Link Acquisition",
      icon: <Users className="w-5 h-5 text-brand-orange" />,
      desc: "Search engines analyze local contextual reference backlinks to determine region-specific search relevance. We secure local country-domain backlinks.",
      bullets: [
        "Secure high-value references from local TLDs (.es, .de, .fr, .co.uk)",
        "Build directory confidence across geographic maps nodes",
        "Coordinate digital PR distributions across regional journals",
        "Ensure search algorithms align local citations dynamically"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What is an hreflang attribute?",
      a: "Hreflang is a search engine crawling tag used to specify the language and geographical location targeting of a specific webpage, ensuring search algorithms display the correct page variant to regional readers."
    },
    {
      q: "Should our international expansion use subdirectories or ccTLDs?",
      a: "Subdirectories (like /es/) are generally easier to maintain and share central domain authority, whereas ccTLDs (like .es) provide maximum local relevance but require separate backlink strategies."
    },
    {
      q: "Does Google translate machine languages to rank them?",
      a: "No! Google requires indexable, high-quality rendered translation HTML, structured taxonomy headers, and authentic regional keyword optimization to index localized pages."
    }
  ];

  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal uppercase tracking-widest hover:text-white transition-colors"
        >
          &larr; Back to Corporate Home
        </button>
      </div>

      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-850">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-indigo/10 text-brand-indigo rounded-full text-xs font-extrabold uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5" /> Multi-lingual Global Authority
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                International SEO Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Global Range SEO</span>
              </h1>
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl">
                Expand across international borders, manage complex multi-lingual domain parameters, optimize Hreflang index guidelines, and drive organic traffic scaling globally.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">40+ Regions</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Global Target Markets</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">Hreflang</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Deep Compliance Auditing</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">CDN Optimized</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Global Load Speeds</p>
                </div>
              </div>
            </div>

            {/* Right Compiler Tool */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-indigo/10 text-brand-indigo text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-indigo/20">
                    Hreflang XML Compiler
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Languages className="w-5 h-5 text-brand-teal" /> Build Your Hreflang Tag
                </h3>
                <p className="text-xs text-slate-403 mb-4 text-left">
                  Configure custom index alternate headers to prevent international organic search duplications.
                </p>

                <form onSubmit={handleGenerateHreflang} className="space-y-4 text-left">
                  <div className="space-y-1">
                    <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">Target Page URL</label>
                    <input 
                      type="url" 
                      required
                      value={targetUrl}
                      onChange={(e) => setTargetUrl(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white outline-none font-mono animate-fade-in"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Target Language</label>
                      <select
                        value={langCode}
                        onChange={(e) => setLangCode(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-semibold outline-none"
                      >
                        <option value="es">Spanish (es)</option>
                        <option value="fr">French (fr)</option>
                        <option value="de">German (de)</option>
                        <option value="hi">Hindi (hi)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Target Country Code</label>
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-semibold outline-none"
                      >
                        <option value="ES">Spain (ES)</option>
                        <option value="FR">France (FR)</option>
                        <option value="DE">Germany (DE)</option>
                        <option value="IN">India (IN)</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3.5 rounded-xl transition-all"
                  >
                    Compile Localization Tag
                  </button>
                </form>

                <AnimatePresence mode="wait font-mono">
                  {tagGenerated && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-850 text-left font-mono space-y-3"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-slate-850">
                        <span className="text-[10px] text-slate-400 font-bold">COMPILED XML LINK ELEMENT:</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(hreflangTag);
                            alert("Copied custom compiled tag!");
                          }}
                          className="text-[9px] text-brand-teal font-extrabold uppercase hover:underline"
                        >
                          Copy Tag
                        </button>
                      </div>
                      <code className="text-brand-purple select-all block text-[11px] leading-relaxed break-all">
                        {hreflangTag}
                      </code>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 border-b border-slate-850 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
              Four Core Streams of International Reach
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {Object.keys(tabsContent).map((key) => {
              const tab = tabsContent[key as keyof typeof tabsContent];
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isSelected 
                      ? 'bg-brand-indigo text-white shadow-md' 
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 sm:p-10 text-left max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8 space-y-5">
                  <h3 className="text-xl font-black text-white font-display">
                    {tabsContent[activeTab].title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {tabsContent[activeTab].desc}
                  </p>
                  <div className="space-y-2.5 pt-2">
                    {tabsContent[activeTab].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 bg-slate-950 p-6 rounded-xl border border-slate-850 text-center space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">REGIONAL RELEVANCE LIFT</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">+112%</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Audit Hreflang Tree
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Schema Block */}
      <section className="py-20 border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-5">
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">WEBSITE COMPLIANCE SCHEMA</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Coordinate Multi-Language Directories
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                By publishing explicit list indexes matching all targeted country zones inside standard organizational schemas, you secure faster index parsing rates across distinct localized search results nodes.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Global Schema Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">global-website-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Multi-Region Enterprise",
  "url": "https://global-domain.com",
  "language": {
    "@type": "Language",
    "name": "Spanish",
    "alternateName": "es"
  }
}`}
                </pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 border-b border-slate-850 bg-slate-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-[#0c1221] border border-slate-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left py-4 px-6 flex items-center justify-between font-bold text-white text-[13px] sm:text-sm"
                  >
                    <span>{item.q}</span>
                    <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-90 text-brand-indigo' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-850 px-6 py-4 text-xs sm:text-sm text-slate-355 leading-relaxed text-left"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section id="international-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4 animate-pulse">
              Request Your International Assessment
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-sans">
              Connect with our global growth directors. We will analyze your Hreflang tree parameters, run localized keyword tests, and map targets.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto font-sans">
                <p className="text-sm font-black uppercase">International Scoping Registered</p>
                <p className="text-xs text-slate-404 mt-1">Our global technical lead will share a Hreflang diagnostic evaluation in 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Global Director Name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-505 outline-none animate-fade-in"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Corporate Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-505 outline-none animate-fade-in"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  <input 
                    type="url" 
                    required
                    placeholder="Domain URL"
                    value={leadForm.siteUrl}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, siteUrl: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-505 outline-none"
                  />
                  <select
                    value={leadForm.targetRegions}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, targetRegions: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white outline-none font-semibold"
                  >
                    <option value="Americas">Americas (US, MX, BR)</option>
                    <option value="Europe">Europe (UK, DE, FR, ES)</option>
                    <option value="Asia">Asia & India (IN, SG, ID)</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow shadow-brand-indigo/15"
                >
                  Generate Free International Audit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

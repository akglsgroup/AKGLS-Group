import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Award, CheckCircle, Database, LineChart, 
  ChevronRight, Star, Users, ExternalLink, Link2, ShieldAlert,
  ShieldCheck, Share2, Globe, HeartHandshake, Eye
} from 'lucide-react';

interface OffPageSeoPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function OffPageSeoPage({ onBackToHome, openProposalForm }: OffPageSeoPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Off-Page SEO Services Company | Link Building Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [simLinks, setSimLinks] = useState('5');
  const [currentDA, setCurrentDA] = useState('25');
  const [targetCategory, setTargetCategory] = useState('technology');
  const [calculatorStatus, setCalculatorStatus] = useState<'idle' | 'calculating' | 'done'>('idle');
  const [estimatedDaGain, setEstimatedDaGain] = useState(0);
  const [projectedValue, setProjectedValue] = useState(0);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    website: '',
    competitor: ''
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'outreach' | 'pr' | 'mentions' | 'cleanup'>('outreach');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    setCalculatorStatus('calculating');
    setTimeout(() => {
      const quantity = parseInt(simLinks) || 0;
      const da = parseInt(currentDA) || 0;
      let multiplier = 1.2;
      if (targetCategory === 'enterprise') multiplier = 1.8;
      if (targetCategory === 'finance') multiplier = 1.5;

      const gain = Math.min(Math.floor(quantity * multiplier * 1.5), 90 - da);
      setEstimatedDaGain(gain);
      setProjectedValue(quantity * 450);
      setCalculatorStatus('done');
    }, 1200);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Off-Page SEO & Domain Authority Link Strategy",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "serviceType": "Off-Page Optimization"
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    outreach: {
      title: "Blogger Outreach & Strategic Placements",
      icon: <Globe className="w-5 h-5 text-brand-indigo" />,
      desc: "We run fully manual outreach campaigns targeting authoritative editorial blogs. We pitch rich assets and guides that natural hub content curators are eager to link back to.",
      bullets: [
        "100% manually researched partner target lists",
        "Rigorous verification of traffic flow metric filters",
        "Zero automated template delivery sequences",
        "Highly contextual anchor placements matching post intent"
      ]
    },
    pr: {
      title: "Digital PR & Brand Exposure Platforms",
      icon: <Share2 className="w-5 h-5 text-brand-purple" />,
      desc: "Earn features in international industry media outlets. We draft and push content resources that journalists reference, translating to super-high authority links.",
      bullets: [
        "Pitch directly to relevant trade publications and journals",
        "Formulate research, data, and statistic-driven visual media stories",
        "Create reference pages that earn natural reference backlinks on autopilots",
        "Increase brand mention volumes and indexing signals"
      ]
    },
    mentions: {
      title: "Co-occurrence & Brand Signals Mapping",
      icon: <Award className="w-5 h-5 text-brand-teal" />,
      desc: "Search crawlers build relational relevance charts between your entity and topical headers. We create natural co-occurrences of your brand alongside primary term matrices.",
      bullets: [
        "Index unlinked mentions map and claim brand anchor links",
        "Deploy optimized citations in high-authority directory lists",
        "Leverage community networking reference structures",
        "Increase authority and search engine contextual confidence"
      ]
    },
    cleanup: {
      title: "Toxic Link Audit & Cleansing Procedures",
      icon: <ShieldAlert className="w-5 h-5 text-brand-orange" />,
      desc: "Prevent algorithm penalties triggered by historical negative SEO or spam bots. We conduct thorough disavow audits and file clean mapping commands with search engines.",
      bullets: [
        "Scan deep incoming link databases for spam scores",
        "Review anchor text ratios for unnatural footprint anomalies",
        "Register proper disavow lists targeting Google Search Console",
        "Protect and restore organic rank positions"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What defines an authoritative backlinks portfolio?",
      a: "An authoritative backlink comes from an active website that has real organic traffic, contextual topical relevance to your business, and a strong editorial process. Pure metrics (like domain rating) can be manipulated; we look at actual organic rankings first."
    },
    {
      q: "Do you use automated link building tools?",
      a: "No! We maintain a strict focus on 100% white-hat, manual editorial outreach. Automated links trigger severe search engine spam penalties and degrade brand rep."
    },
    {
      q: "How soon do backlink placements impact my rankings?",
      a: "Links typically register in search consoles and tracking platforms inside 2 to 6 weeks. The organic authority improvements accumulate gradually over subsequent product crawls."
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

      {/* Hero Header Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-850">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-indigo/10 text-brand-indigo rounded-full text-xs font-extrabold uppercase tracking-widest">
                <Link2 className="w-3.5 h-3.5" /> High-Authority Digital Footprint
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Off-Page SEO Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Authority Strategy</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Elevate your search authority footprint with manual white-hat link building, strategic blogger outreach, and digital PR. Build natural link anchors that secure rank cushions and traffic spikes.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={openProposalForm}
                  className="bg-gradient-to-r from-brand-indigo to-brand-purple hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg shadow-brand-indigo/20 flex items-center gap-2"
                >
                  Request Off-Page Audit <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">100%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Manual Outreach</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">+150%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Typical DA Lift</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">DR 40-80</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Average Target sites</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-teal/10 text-brand-teal text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-teal/20">
                    Authority Lift Calculator
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <HeartHandshake className="w-5 h-5 text-brand-indigo" /> Estimate Domain Authority Gain
                </h3>
                <p className="text-xs text-slate-404 mb-6 text-left">
                   See how adding custom authority placements affects your site authority parameters.
                </p>

                <form onSubmit={handleCalculate} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Current DA / DR</label>
                      <input 
                        type="number" 
                        required
                        min="1" max="95"
                        value={currentDA}
                        onChange={(e) => setCurrentDA(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-mono outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Monthly Link Placements</label>
                      <input 
                        type="number" 
                        required
                        min="1" max="50"
                        value={simLinks}
                        onChange={(e) => setSimLinks(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-mono outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Industry Verticals Category</label>
                    <select
                      value={targetCategory}
                      onChange={(e) => setTargetCategory(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-semibold outline-none"
                    >
                      <option value="technology">Technology & SaaS (DR 50+ partners)</option>
                      <option value="finance">Finance & Investment (DR 60+ partners)</option>
                      <option value="enterprise">Corporate & High Authority Enterprise (DR 70+ partners)</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3.5 rounded-xl transition-all block text-center"
                  >
                    {calculatorStatus === 'calculating' ? 'Processing Authority Map...' : 'Calculate Authority Uplift'}
                  </button>
                </form>

                <AnimatePresence mode="wait">
                  {calculatorStatus === 'done' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-850 text-left font-mono space-y-3"
                    >
                      <div className="flex justify-between border-b border-slate-850 pb-2.5">
                        <span className="text-xs text-slate-400">PROJECTED DOMAIN AUTHORITY:</span>
                        <span className="text-brand-teal font-bold">{parseInt(currentDA) + estimatedDaGain} / 100</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-850 pb-2.5">
                        <span className="text-xs text-slate-400">ESTIMATED GAIN:</span>
                        <span className="text-emerald-400 font-bold">+{estimatedDaGain} Points</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400">MONTHLY MEDIA VALUE:</span>
                        <span className="text-brand-purple font-bold">${projectedValue} USD</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tabs list */}
      <section className="py-20 border-b border-slate-850 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
              Four Pillars of Off-Page Strategy
            </h2>
            <p className="text-slate-400 text-sm">
              We focus on premium contextuality and natural index linkages. Our approach delivers reliable metrics growth.
            </p>
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
                      ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/15' 
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">TYPICAL VELOCITY</span>
                    <span className="text-2xl font-black text-brand-teal font-mono">15 to 35 / Mo</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Build Campaigns Now
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Structured Schema */}
      <section className="py-20 border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left space-y-5">
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">STRUCTURED DATA ENGINE</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Verify Authority Entity Maps
              </h2>
              <p className="text-slate-305 text-xs sm:text-sm leading-relaxed">
                Applying schema tags validates organizational relationships cleanly. Let crawler indexers catalog physical references matching your exact backlink payload anchors.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white shadow shadow-brand-purple/20'
                }`}
              >
                {schemaCopied ? 'Schema Code Copied!' : 'Copy Code Snippet Template'}
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-403 font-mono">link-schema-org.json</span>
                </div>
                <pre className="p-5 text-left text-[11px] text-brand-teal/90 font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Off-Page Reference Placements Strategy",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "serviceType": "Authority SEO"
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
                        className="border-t border-slate-850 px-6 py-4 text-xs sm:text-sm text-slate-350 leading-relaxed text-left"
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
      <section id="offpage-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4">
              Launch Manual Outreach Today
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Connect with our Off-Page team. We will analyze your competitors' backlink footprint, perform toxic link audits, and assemble an outreach campaign plan.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto">
                <p className="text-sm font-black uppercase">Outreach Strategy Request Registered</p>
                <p className="text-xs text-slate-400 mt-1">Our strategist will catalog anchor suggestions and share findings inside 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none"
                  />
                </div>
                <input 
                  type="url" 
                  required
                  placeholder="Website URL"
                  value={leadForm.website}
                  onChange={(e) => setLeadForm(prev => ({ ...prev, website: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow"
                >
                  Generate Free Backlink Audit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

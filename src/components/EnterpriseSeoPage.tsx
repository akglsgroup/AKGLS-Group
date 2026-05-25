import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, HelpCircle, ArrowRight, CheckCircle2, 
  Award, CheckCircle, Database, LineChart, ShieldCheck, 
  ChevronRight, Users, Sparkles, AlertTriangle, Layers, Cpu
} from 'lucide-react';

interface EnterpriseSeoPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function EnterpriseSeoPage({ onBackToHome, openProposalForm }: EnterpriseSeoPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Enterprise SEO Services Company | Enterprise SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [totalUrls, setTotalUrls] = useState('100000');
  const [crawlErrors, setCrawlErrors] = useState('15');
  const [calcStatus, setCalcStatus] = useState<'idle' | 'calculating' | 'done'>('idle');
  
  const [leakageValue, setLeakageValue] = useState(0);
  const [unindexedUrls, setUnindexedUrls] = useState(0);
  const [reclaimedCrawlRate, setReclaimedCrawlRate] = useState(0);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    corporateDomain: '',
    department: 'Digital Marketing'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'scale' | 'crawl' | 'reporting' | 'governance'>('scale');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const handleEnterpriseSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCalcStatus('calculating');
    
    setTimeout(() => {
      const urls = parseFloat(totalUrls) || 0;
      const errorRate = parseFloat(crawlErrors) / 100 || 0;

      const unindexed = Math.floor(urls * errorRate * 0.7);
      setUnindexedUrls(unindexed);
      setLeakageValue(unindexed * 8.5); // value estimate per page loss
      setReclaimedCrawlRate(Math.floor(urls * 0.95));
      setCalcStatus('done');
    }, 1100);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Enterprise Search Governance Strategy",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  }
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    scale: {
      title: "Crawl Optimization & Scaling Frameworks",
      icon: <Layers className="w-5 h-5 text-brand-indigo" />,
      desc: "For sites with over 50,000 pages, standard crawl budget limitations constrain raw indexation. We build clean path guidelines, sanitize dirty links lists, and implement strict server-side rules.",
      bullets: [
        "Audit server payload speeds using automated crawler bots simulations",
        "Streamline URL configurations to prevent link loops",
        "Utilize dynamic sitemapping frameworks categorized by page margins",
        "Reclaim orphaned directories and secure full crawl exposure"
      ]
    },
    crawl: {
      title: "Scalable Content Modeling & Taxonomy",
      icon: <Database className="w-5 h-5 text-brand-purple" />,
      desc: "Coordinate massive corporate knowledge bases. We establish logical categorization models, eliminate index overlap errors, and write strict authority rules across all global web properties.",
      bullets: [
        "Architect clean, parent-child site directories scaling infinite rows",
        "Eradicate duplicate keyword cannibalization signals via canonical mapping",
        "Structure template layout segments with modular contextual widgets",
        "Create high-value hub entities mapping industry topics"
      ]
    },
    reporting: {
      title: "Real-Time Integration & Data Dashboards",
      icon: <LineChart className="w-5 h-5 text-brand-teal" />,
      desc: "Enterprise departments demand data consistency. We build real-time monitoring tools directly integrating GSC, GA4, Log Files, and keyword lists to track global organic developments.",
      bullets: [
        "Connect corporate databases via secure API gateways",
        "Monitor server-side log requests to catch bot request timeouts instantly",
        "Configure automated alarms tracking critical indexing index dropouts",
        "Present high-level data summaries optimized for stakeholders"
      ]
    },
    governance: {
      title: "SEO Governance & Inter-departmental SLAs",
      icon: <Users className="w-5 h-5 text-brand-orange" />,
      desc: "SEO success at corporate scale requires absolute alignment. We provide training, formulate publishing rules, and build guidelines so updates do not break rank structures.",
      bullets: [
        "Deliver hands-on training to engineering and product teams",
        "Create QA guidelines for CMS publishers to prevent broken tags",
        "Analyze code commits to ensure template updates align with schema needs",
        "Minimize internal friction by defining clear ownership matrices"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What defines Enterprise-level SEO?",
      a: "Enterprise SEO handles sites containing tens of thousands or millions of pages. It centers around complex crawl budget issues, template taxonomy anomalies, inter-departmental governance, and the recovery of crawl leakage values."
    },
    {
      q: "How do you coordinate with our internal development squads?",
      a: "We act as technical co-pilots, translating core search engine requirements into clear JIRA tickets, pull requests, and verified system guidelines. We do not disrupt active development sprints."
    },
    {
      q: "Do you offer custom SLA agreements and local reporting dashboards?",
      a: "Yes! High-volume clients receive custom SLAs, dedicated slack channels, custom BI dashboards, and weekly technical briefings."
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
                <Building2 className="w-3.5 h-3.5" /> High-Volume Enterprise SEO
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Enterprise SEO Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Search Performance Governance</span>
              </h1>
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl">
                Unbolt absolute indexing capacity across large scale websites. Deploy robust taxonomy controls, protect organic rank cushions, and integrate reporting standards.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">1M+ Pages</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Crawl Scale Capacity</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">95%+</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Zero Error Index Goal</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">API Sync</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">GSC & GA4 Sync</p>
                </div>
              </div>
            </div>

            {/* Right Diagnostic Calculator */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-indigo/10 text-brand-indigo text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-indigo/20">
                    Crawl Leakage Estimator
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Cpu className="w-5 h-5 text-brand-teal" /> Model Crawl Leakage
                </h3>
                <p className="text-xs text-slate-403 mb-4 text-left">
                  Track how small crawl error rates leak massive indexation parameters across millions of lines of directory code.
                </p>

                <form onSubmit={handleEnterpriseSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Estimated Total Live URLs</label>
                      <input 
                        type="number" 
                        required
                        value={totalUrls}
                        onChange={(e) => setTotalUrls(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-mono outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Crawl Error Rate (%)</label>
                      <input 
                        type="number" 
                        required
                        min="1" max="50"
                        value={crawlErrors}
                        onChange={(e) => setCrawlErrors(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-mono outline-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3.5 rounded-xl transition-all"
                  >
                    {calcStatus === 'calculating' ? 'Processing Enterprise Map...' : 'Calculate Crawl Leakage'}
                  </button>
                </form>

                <AnimatePresence mode="wait">
                  {calcStatus === 'done' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-850 text-left font-mono space-y-3 text-xs"
                    >
                      <div className="flex justify-between border-b border-slate-850 pb-2.5">
                        <span className="text-slate-400">UNINDEXED SATELLITE PAGES:</span>
                        <span className="text-rose-450 font-bold">{unindexedUrls.toLocaleString()} pages</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-850 pb-2.5">
                        <span className="text-slate-400 font-bold uppercase">ESTIMATED VALUABLE TRAFFIC LEAK:</span>
                        <span className="text-brand-orange font-black">${leakageValue.toLocaleString()} USD / yr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">OPTIMIZED CRAWL RECOVERY:</span>
                        <span className="text-brand-teal font-bold">{reclaimedCrawlRate.toLocaleString()} URLs / mo</span>
                      </div>
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
              Four Critical Streams of Scalable SEO
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
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">TYPICAL SAVINGS</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">1.2M+ Bot limits</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Audit Crawling Loop
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
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">ORGANIZATION SCHEMA</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Publish Authoritative Enterprise Schemas
              </h2>
              <p className="text-slate-305 text-xs sm:text-sm leading-relaxed">
                Coordinate corporate subsidiaries, language targets, local sites, and contact nodes in a comprehensive schema system database format to establish organizational clarity.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Enterprise Schema Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">enterprise-org-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Global Enterprise Entity",
  "url": "https://enterprise-brand.com",
  "sameAs": [
    "https://wikidata.org/wiki/Q...",
    "https://wikipedia.org/wiki/..."
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-1212",
    "contactType": "customer service"
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
      <section id="enterprise-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4">
              Secure Your Scaled Analysis Planning
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Initiate contact with our principal enterprise consultants. We will assemble custom crawl simulations, outline template overlaps, and schedule technical briefings.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto">
                <p className="text-sm font-black uppercase">Technical Request Registered</p>
                <p className="text-xs text-slate-400 mt-1">Our technical account lead will establish contact within 12 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Corporate Contact Name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Work Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none"
                  />
                </div>
                <input 
                  type="url" 
                  required
                  placeholder="Primary Enterprise Domain URL"
                  value={leadForm.corporateDomain}
                  onChange={(e) => setLeadForm(prev => ({ ...prev, corporateDomain: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow"
                >
                  Initiate Technical Scoping
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

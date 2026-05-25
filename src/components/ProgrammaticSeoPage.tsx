import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, HelpCircle, ArrowRight, CheckCircle2, 
  Award, CheckCircle, Database, LineChart, ShieldCheck, 
  ChevronRight, Users, Sparkles, Cpu, Layers, Workflow
} from 'lucide-react';

interface ProgrammaticSeoPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function ProgrammaticSeoPage({ onBackToHome, openProposalForm }: ProgrammaticSeoPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Programmatic SEO Services | Scalable SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [verticalCount, setVerticalCount] = useState('15');
  const [geoCount, setGeoCount] = useState('120');
  const [calcStatus, setCalcStatus] = useState<'idle' | 'calculating' | 'done'>('idle');

  const [totalPages, setTotalPages] = useState(0);
  const [totalKeywords, setTotalKeywords] = useState(0);
  const [projectedTraffic, setProjectedTraffic] = useState(0);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    dataAssetsAvailable: 'yes',
    targetCrawlVol: '1000'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'database' | 'ai' | 'taxonomy' | 'internal'>('database');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const handleRunScalingCalculator = (e: FormEvent) => {
    e.preventDefault();
    setCalcStatus('calculating');

    setTimeout(() => {
      const verts = parseInt(verticalCount) || 0;
      const geos = parseInt(geoCount) || 0;

      const scalePages = verts * geos;
      // assuming an average of 4 primary keywords target combinations per page
      const keywordsObj = scalePages * 4;
      // conservative assumption of 8 organic click sessions per scalable page per month
      const trafficEstimate = scalePages * 8.5;

      setTotalPages(scalePages);
      setTotalKeywords(keywordsObj);
      setProjectedTraffic(Math.floor(trafficEstimate));
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
  "@type": "SoftwareApplication",
  "name": "Dynamic Programmatic SEO Data Compiler",
  "applicationCategory": "BusinessApplication"
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    database: {
      title: "Database-Driven Page Generation",
      icon: <Database className="w-5 h-5 text-brand-indigo" />,
      desc: "Assemble thousands of highly optimized landing pages from robust relational datasets. We turn raw facts, coordinates, pricing elements, or inventory values into content grids.",
      bullets: [
        "Incorporate highly specific locational target terms dynamically inside code headers",
        "Configure proper canonical tag chains to prevent duplicate index flags",
        "Normalize datasets to prevent raw rendering bugs or thin text layouts",
        "Reclaim massive long-tail keyword spaces on autofilters"
      ]
    },
    ai: {
      title: "AI-Powered Text Customization & Silos",
      icon: <Sparkles className="w-5 h-5 text-brand-purple" />,
      desc: "Prevent layout redundancy. We develop advanced algorithmic semantic schemas that customize paragraphs, intro briefs, list descriptions, and FAQ snippets at scale.",
      bullets: [
        "Train fine-tuned language algorithms matching deep organizational tone constraints",
        "Synthesize highly localized headers, references, and regional examples",
        "Audit template files to ensure maximum semantic variance benchmarks",
        "Incorporate dynamic structured tables describing physical parameters easily"
      ]
    },
    taxonomy: {
      title: "Massive technical crawl planning",
      icon: <Layers className="w-5 h-5 text-brand-teal" />,
      desc: "Forcing search engine crawlers to parse 20,000 new landing pages requires absolute technical precision. We configure smart sitemapping rules and optimize load timings.",
      bullets: [
        "Implement exact incremental sitemaps categorized by key index pillars",
        "Verify absolute server payload responses to manage heavy bot request queues",
        "Eradicate orphaned pages using logical parents hierarchy rules",
        "Speed up initial indexing phases using programmatic API pings"
      ]
    },
    internal: {
      title: "Automated internal linkage algorithms",
      icon: <Workflow className="w-5 h-5 text-brand-orange" />,
      desc: "Distribute domain link authority uniformly. We engineer automated inter-linking components that cross-connect related pages base matching exact topic arrays.",
      bullets: [
        "Deploy modular link breadcrumbs tracking spatial coordinate columns",
        "Incorporate semantic contextual recommendations boxes in footer segments",
        "Audit anchor text densities to optimize crawler authority flows",
        "Sustain rank longevity by linking related high-margin columns"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What defines Programmatic SEO?",
      a: "Programmatic SEO is the practice of dynamically generating thousands of high-quality landing pages at scale from structured datasets to capture long-tail search traffic."
    },
    {
      q: "Does Google penalize programmatically generated websites?",
      a: "No! Google explicitly penalizes low-quality, scraped, or thin redundant content. As long as your dynamic directories provide real semantic utility, structured data, fast speed, and unique information, they rank exceptionally well."
    },
    {
      q: "Do we need our own database to get started?",
      a: "We can compile, clean, and enrich datasets from scratch, or connect directly to your existing CRM, inventory logs, or geographic catalogues via API integrations."
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
                <Cpu className="w-3.5 h-3.5" /> High-Scale Automation
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Programmatic SEO Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Automated Organic Scale</span>
              </h1>
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl">
                 Dominate long-tail search lists. Build dynamic database-driven templates, program high-volume localized keyword maps, and capture organic markets easily.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">Infinite</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Scale Capacity</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">XML Feed</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Sitemap Management</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">Dynamic</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Internal Interlinkage</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Scale Calculator */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-[#1e154a] text-brand-purple text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-purple/20">
                    Volume scale Calculator
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Terminal className="w-5 h-5 text-brand-teal" /> Model Your Launch Scale
                </h3>
                <p className="text-xs text-slate-403 mb-4 text-left">
                  Model page counts based on targeted industry categories crossed against targeted regional vectors.
                </p>

                <form onSubmit={handleRunScalingCalculator} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Vertical Categories</label>
                      <input 
                        type="number" 
                        required
                        value={verticalCount}
                        onChange={(e) => setVerticalCount(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-mono outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Target Locations</label>
                      <input 
                        type="number" 
                        required
                        value={geoCount}
                        onChange={(e) => setGeoCount(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-mono outline-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3.5 rounded-xl transition-all"
                  >
                    Compile Dynamic Map Volumes
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
                        <span className="text-slate-400">DYNAMIC PAGES COMPILED:</span>
                        <span className="text-white font-bold">{totalPages.toLocaleString()} pages</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-850 pb-2.5">
                        <span className="text-slate-400 font-bold uppercase">LONG-TAIL KEYWORD MATRIX:</span>
                        <span className="text-brand-teal font-black">+{totalKeywords.toLocaleString()} targeted targets</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">EST. ORGANIC SESSION LEVEL:</span>
                        <span className="text-brand-purple font-bold">+{projectedTraffic.toLocaleString()} sessions / mo</span>
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
              Four Core Streams of Automated Scale
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">TYPICAL INGEST TIME</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">&lt; 14 Days</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Build Scaling Sitemaps
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
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">APP MARKUP SCHEMA</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Coordinate Large Scale Sitemappings
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By publishing explicit software attributes targeting massive page directories inside search indexes, you coordinate crawler workloads smoothly without overstressing origin servers.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Schema App Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">dynamic-scaling-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sitemap Directory Compiler",
  "operatingSystem": "All Platform Verticals",
  "applicationCategory": "DatabaseAutomation"
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
      <section id="programmatic-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4">
              Scale Your Target Keyword Footprint
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-sans">
              Connect with our automation engineers. We will inspect your data assets, design high-authority page templates, and draft a 10,000 keyword scalability matrix.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto">
                <p className="text-sm font-black uppercase font-mono">Scaling Assessment Registered</p>
                <p className="text-xs text-slate-400 mt-1">Our technical lead will deliver a custom dynamic taxonomies mapping report within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Technical Lead Name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-505 outline-none animate-fade-in"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Work Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-550 outline-none animate-fade-in"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  <select
                    value={leadForm.dataAssetsAvailable}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, dataAssetsAvailable: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white outline-none font-semibold"
                  >
                    <option value="yes">Structured Data Assets Available (CSV/API)</option>
                    <option value="no">Need help compiling datasets</option>
                  </select>
                  <select
                    value={leadForm.targetCrawlVol}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, targetCrawlVol: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white outline-none font-semibold"
                  >
                    <option value="1000">Scale Target: 1,000+ Pages</option>
                    <option value="10000">Scale Target: 10,000+ Pages</option>
                    <option value="100000">Scale Target: 100,000+ Pages</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow shadow-brand-indigo/15"
                >
                  Generate Free Programmatic Blueprint
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, HelpCircle, ArrowRight, CheckCircle2, 
  Award, CheckCircle, Database, LineChart, ShieldCheck, 
  ChevronRight, Users, Sparkles, Zap, SmartphoneNfc, Wifi
} from 'lucide-react';

interface MobileSeoPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function MobileSeoPage({ onBackToHome, openProposalForm }: MobileSeoPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Mobile SEO Services | Mobile Optimization Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [hasCdn, setHasCdn] = useState('no');
  const [imgOptimized, setImgOptimized] = useState('no');
  const [scriptBundled, setScriptBundled] = useState('no');
  const [simStatus, setSimStatus] = useState<'idle' | 'testing' | 'done'>('idle');

  const [lcp, setLcp] = useState(4.2);
  const [cls, setCls] = useState(0.28);
  const [fid, setFid] = useState(180);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    siteUrl: ''
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'indexing' | 'vitals' | 'ux' | 'amp'>('indexing');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const handleRunVitalsTest = (e: FormEvent) => {
    e.preventDefault();
    setSimStatus('testing');

    setTimeout(() => {
      let lcpVal = 4.5;
      let clsVal = 0.32;
      let fidVal = 210;

      if (hasCdn === 'yes') {
        lcpVal -= 1.5;
        fidVal -= 50;
      }
      if (imgOptimized === 'yes') {
        lcpVal -= 1.2;
        clsVal -= 0.12;
      }
      if (scriptBundled === 'yes') {
        lcpVal -= 0.6;
        fidVal -= 90;
        clsVal -= 0.10;
      }

      setLcp(Math.max(parseFloat(lcpVal.toFixed(1)), 0.8));
      setCls(Math.max(parseFloat(clsVal.toFixed(2)), 0.01));
      setFid(Math.max(fidVal, 15));
      setSimStatus('done');
    }, 1100);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mobile Responsive Performance Layout",
  "hasPart": {
    "@type": "WebPageElement",
    "name": "Mobile Navigation Rail"
  }
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    indexing: {
      title: "Mobile-First Crawl & Index Optimizations",
      icon: <SmartphoneNfc className="w-5 h-5 text-brand-indigo" />,
      desc: "Google crawled sites using custom Smartphone bot simulators by default. We check resources matching mobile viewports to prevent rendering index cuts.",
      bullets: [
        "Audit robots.txt rules blocking key CSS or script layouts from bot eyes",
        "Verify absolute match parity across desktop and mobile header trees",
        "Ensure search crawlers access dynamic lazy-loaded tags easily",
        "Eradicate overlapping content segments that hinder mobile indexation"
      ]
    },
    vitals: {
      title: "Core Web Vitals Thresholds alignment",
      icon: <Zap className="w-5 h-5 text-brand-purple" />,
      desc: "Optimize high-value user performance parameters: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
      bullets: [
        "Implement exact size dimension layouts targeting multi-device images",
        "Preload key critical font files to bypass system blockades",
        "Clean unused framework scripts and optimize CSS delivery channels",
        "Boost organic ranking authority by crossing green vitals margins"
      ]
    },
    ux: {
      title: "Responsive Interface UX auditing",
      icon: <Users className="w-5 h-5 text-brand-teal" />,
      desc: "Users immediately bounce from poorly formatted structures. We optimize interactive element spacing, touch target dimensions, font scaling ratios, and readable lines.",
      bullets: [
        "Reformat small clickable elements to exceed 48px size margins",
        "Synthesize readable line limits avoiding horizontal scrolls completely",
        "Streamline heavy header components to prevent mobile screen clutter",
        "Implement seamless thumb-friendly controls on checkout rails"
      ]
    },
    amp: {
      title: "App Syncing & Schema mapping",
      icon: <Database className="w-5 h-5 text-brand-orange" />,
      desc: "Connect mobile search lists directly to your native applications. We coordinate JSON-LD schema layouts targeting internal device system hooks.",
      bullets: [
        "Configure deep-link mapping parameters inside index schemas",
        "Audit responsive image payloads scaling below 10kb values",
        "Implement high-performance static cache layers on device grids",
        "Secure priority mobile listing blocks across local query structures"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What is mobile-first indexing?",
      a: "Mobile-first indexing means Google primarily uses the mobile version of a website's content, crawled with a smartphone user-agent, for indexing, ranking, and rendering, even for desktop search results."
    },
    {
      q: "How does screen loading speed affect mobile ranking?",
      a: "Speed is an explicit algorithmic rank signal. Faster websites lower friction parameters, raising both Google's organic preference score and final user checkouts."
    },
    {
      q: "Are Core Web Vitals measured using lab data or real user actions?",
      a: "Google uses the Chrome User Experience Report (CrUX), which aggregates actual real-world field telemetry from readers accessing your site over Chrome."
    }
  ];

  return (
    <div className="pt-8 font-sans">
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
                <Smartphone className="w-3.5 h-3.5" /> Mobile Optimization
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Mobile SEO Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Core Web Vitals Speed</span>
              </h1>
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl">
                 Secure ultra-fast loading speed thresholds, satisfy smartphone index bot standards, optimize viewport responsiveness, and scale mobile organic results.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">&lt; 2.5s</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">LCP Target Speed</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">Smartphone</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">First Crawl Priority</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">100%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Responsive Score</p>
                </div>
              </div>
            </div>

            {/* Right Speed Load Simulator */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-indigo/15 text-brand-indigo text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-indigo/20">
                    Mobile Speed lab
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Wifi className="w-5 h-5 text-brand-teal animate-pulse" /> Core Web Vitals Lab
                </h3>
                <p className="text-xs text-slate-403 mb-4 text-left">
                  Configure server parameters and run a virtual mobile bot speed check to test loading latency.
                </p>

                <form onSubmit={handleRunVitalsTest} className="space-y-4 text-left">
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="space-y-1">
                      <label className="text-[8px] text-slate-400 font-bold uppercase">Cloud CDN?</label>
                      <select 
                        value={hasCdn} 
                        onChange={(e) => setHasCdn(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2 px-2 text-xs text-white outline-none"
                      >
                        <option value="no">Off</option>
                        <option value="yes">Active</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[8px] text-slate-400 font-bold uppercase">WebP Images?</label>
                      <select 
                        value={imgOptimized} 
                        onChange={(e) => setImgOptimized(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2 px-2 text-xs text-white outline-none"
                      >
                        <option value="no">Raw JPEG</option>
                        <option value="yes">Optimized</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[8px] text-slate-400 font-bold uppercase">Code Bundling?</label>
                      <select 
                        value={scriptBundled} 
                        onChange={(e) => setScriptBundled(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2 px-2 text-xs text-white outline-none"
                      >
                        <option value="no">No</option>
                        <option value="yes">Bundled</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all"
                  >
                    {simStatus === 'testing' ? 'Querying Mobile Viewports...' : 'Run Mobile Speed Check'}
                  </button>
                </form>

                <AnimatePresence mode="wait">
                  {simStatus === 'done' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-850 text-left font-mono space-y-3 text-xs"
                    >
                      <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                        <span className="text-slate-400">LARGEST CONTENTFUL PAINT (LCP):</span>
                        <span className={`font-bold ${lcp <= 2.5 ? 'text-emerald-400' : 'text-amber-400'}`}>{lcp}s</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                        <span className="text-slate-400 font-bold uppercase">CUMULATIVE LAYOUT SHIFT (CLS):</span>
                        <span className={`font-bold ${cls <= 0.1 ? 'text-emerald-400' : 'text-amber-450'}`}>{cls}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">FIRST INPUT DELAY (FID):</span>
                        <span className={`font-bold ${fid <= 100 ? 'text-emerald-400' : 'text-rose-400'}`}>{fid}ms</span>
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
              Four Core Streams of Mobile Authority
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">AVERAGE INP DECAY</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">-72ms</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Optimize Mobile Frame
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
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">WEBPAGE STRUCTURING SCHEMA</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Configure In-App Deep Link structures
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Applying explicit webpage elements structures to target alternate screens ensures smartphone bots index device-optimal viewports without crawl index splits.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Webpage Schema Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-405">mobile-web-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mobile Device Landing Screen",
  "potentialAction": {
    "@type": "ViewAction",
    "target": "android-app://com.brand.app/https/domain.com/"
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
      <section id="mobile-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4">
              Ignite Mobile Loading Speeds
            </h3>
            <p className="text-slate-330 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Connect with our performance engineering crew. We will execute dynamic Mobile Speed profiling, check indexing constraints, and design custom optimization code blocks.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto">
                <p className="text-sm font-black uppercase font-mono">Performance Auditing Registered</p>
                <p className="text-xs text-slate-400 mt-1">Our technical lead will compile Core Web Vitals traces within 12 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Engineering Lead Name"
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
                  placeholder="Website URL to Test"
                  value={leadForm.siteUrl}
                  onChange={(e) => setLeadForm(prev => ({ ...prev, siteUrl: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 outline-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow"
                >
                  Request Core Web Vitals Scrutiny
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

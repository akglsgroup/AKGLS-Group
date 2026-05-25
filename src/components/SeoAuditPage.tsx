import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, HelpCircle, ArrowRight, CheckCircle2, 
  Award, CheckCircle, Database, LineChart, ShieldCheck, 
  ChevronRight, Users, Sparkles, AlertTriangle, Play, RefreshCw, BarChart
} from 'lucide-react';

interface SeoAuditPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function SeoAuditPage({ onBackToHome, openProposalForm }: SeoAuditPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "SEO Audit Services | Technical SEO Audit Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [checklist, setChecklist] = useState([
    { id: 'robots', text: 'Robots.txt & Sitemap configuration setup check', checked: false, weight: 15 },
    { id: 'schema', text: 'Dynamic Schema (JSON-LD) Entity markups check', checked: false, weight: 15 },
    { id: 'canonical', text: 'Canonical paths & Duplicate keyword links check', checked: false, weight: 20 },
    { id: 'vitals', text: 'Mobile speed (LCP, FID) performance test', checked: false, weight: 25 },
    { id: 'href', text: 'Hreflang language alternates alignment mapping', checked: false, weight: 10 },
    { id: 'secure', text: 'HTTPS Secure SSL certification parameters check', checked: false, weight: 15 }
  ]);

  const [score, setScore] = useState(0);

  const toggleCheck = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  useEffect(() => {
    const total = checklist.reduce((acc, curr) => curr.checked ? acc + curr.weight : acc, 0);
    setScore(total);
  }, [checklist]);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    siteUrl: '',
    auditType: 'Full Technical Audit'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'technical' | 'content' | 'competitor' | 'reporting'>('technical');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "Action",
  "name": "Complete Digital SEO Audit Action Code",
  "target": "https://akglsgroup.com/seo-audit-services"
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    technical: {
      title: "Extensive Technical & Crawling Scrutiny",
      icon: <Database className="w-5 h-5 text-brand-indigo" />,
      desc: "Deconstruct your site codes framework. We trace indexing blockades, analyze redirects loop lists, inspect rendering anomalies, and verify secure site certificate configurations.",
      bullets: [
        "Audit server header requests (status 200, 301, 404, 503)",
        "Inspect XML sitemap files freshness and robots instruction tags",
        "Diagnose layout code redundancies and streamline database queries",
        "Eradicate internal infinite links loop traps"
      ]
    },
    content: {
      title: "Semantic Content Optimization & Gaps",
      icon: <Sparkles className="w-5 h-5 text-brand-purple" />,
      desc: "Compare your word assets against top organic query clusters. We map thin text files, check duplicate titles, flag keyword density drops, and identify organic targets.",
      bullets: [
        "Sift through pages to track redundant heading tags setups",
        "Identify content categories demonstrating low organic relevance metrics",
        "Configure logical internal cross-linkage anchor guidelines",
        "Supply optimized semantic variations aligning to high intent queries"
      ]
    },
    competitor: {
      title: "Market Competitor SEO Audit & Gaps",
      icon: <BarChart className="w-5 h-5 text-brand-teal" />,
      desc: "Deconstruct other domain profiles inside your commercial vertical. We discover the top keywords driving their organic checkouts, and details their link acquisitions.",
      bullets: [
        "Map competitors indexing densities across identical organic channels",
        "Locate missing high-level keyword clusters (content gap logs)",
        "Audit rival backlink profiles to replicate authority anchors",
        "Formulate growth roadmaps securing immediate target opportunities"
      ]
    },
    reporting: {
      title: "Actionable Reporting & JIRA Task boards",
      icon: <LineChart className="w-5 h-5 text-brand-orange" />,
      desc: "Raw audits without execution guidelines are useless. We supply prioritizations, estimate implementation timelines, and write direct coding directions.",
      bullets: [
        "Summarize audits into high impact, medium impact, and low impact segments",
        "Configure direct developer task copies (or JIRA import templates)",
        "Create custom stakeholder review graphs demonstrating baseline gains",
        "Verify fixes through automated regression crawls sequences"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What does an AKGLS Group Technical SEO Audit cover?",
      a: "Our audits cover over 150+ technical checkpoints, including server log activities, Core Web Vitals, dynamic JSON-LD schema entity structures, indexation rules, semantic content gaps, and competitor backlink analysis."
    },
    {
      q: "How which tools do you use to test our domain?",
      a: "We run industry-leading diagnostic platforms like Screaming Frog, Ahrefs, SEMrush, Google Search Console API datasets, and custom internal crawler scripts."
    },
    {
      q: "How soon do we receive the audit reporting logs?",
      a: "Standard technical audit files and implementation checklists are ready inside 5 to 7 business days."
    }
  ];

  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 font-sans">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal uppercase tracking-widest hover:text-white transition-colors"
        >
          &larr; Back to Corporate Home
        </button>
      </div>

      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-850">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-indigo/10 text-brand-indigo rounded-full text-xs font-extrabold uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5 animate-pulse" /> Precision Auditing
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Technical SEO Audit & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Sitemap Compliance</span>
              </h1>
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
                 Secure bulletproof crawler accessibility, inspect coding dependencies, map out semantic content gaps, and outline prioritized implementation tasks.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">150+</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Audit Checkpoints Checked</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">XML & API</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">GSC Diagnostics Link</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">JIRA Done</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Direct Developer Copy</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Checklist Checklist */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-[#153a4a] text-brand-teal text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-teal/20 font-sans">
                    Readiness Scorecard
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Play className="w-4 h-4 text-brand-teal" /> Self-Audit Scorecard
                </h3>
                <p className="text-xs text-slate-403 mb-4 text-left">
                  Toggle critical checkpoints below to verify standard crawl-readiness parameters scores.
                </p>

                <div className="space-y-3 text-left">
                  <div className="relative h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-900 mb-4">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal"
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs font-mono pb-2 border-b border-slate-850">
                    <span className="text-slate-400">ESTIMATED COMPLIANCE:</span>
                    <span className="text-brand-teal font-bold">{score}% / 100%</span>
                  </div>

                  <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                    {checklist.map((item) => (
                      <label 
                        key={item.id}
                        className="flex items-start gap-2.5 p-2 bg-slate-950 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors select-none cursor-pointer"
                      >
                        <input 
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggleCheck(item.id)}
                          className="mt-0.5 rounded border-slate-800 text-brand-indigo focus:ring-brand-indigo bg-slate-950"
                        />
                        <span className="text-[11px] text-slate-350">{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 border-b border-slate-850 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
              Four Core Streams of Technical Auditing
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-bold">AVG ISSUES DETECTED</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">42 Critical</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Request Diagnostic Audit
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Schema Block */}
      <section className="py-20 border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-5">
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">ACTION REVIEWS SCHEMA</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Coordinate Automated Crawler Audits
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                 Integrating standard actions components directly inside search crawling schemas allows bot log checkers to evaluate the structure validity of dynamic landing files smoothly.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Action Schema Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono text-left">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">crawling-action-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Action",
  "name": "Corporate SEO technical audits execution",
  "agent": {
    "@type": "Organization",
    "name": "AKGLS Group"
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 font-sans">
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
      <section id="seo-audit-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4 animate-pulse">
              Request a Comprehensive Technical Audit
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Submit your domain credentials below. We will run competitor sitemap audits, evaluate loading vitals, and share task cards within 48 business hours.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto font-mono">
                <p className="text-sm font-black uppercase">Technical Request Registered</p>
                <p className="text-xs text-slate-404 mt-1">Our Senior Diagnostics Lead will prepare deep code scanning reports soon.</p>
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
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none animate-fade-in"
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
                  <input 
                    type="url" 
                    required
                    placeholder="Your Domain URL"
                    value={leadForm.siteUrl}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, siteUrl: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-505 outline-none"
                  />
                  <select
                    value={leadForm.auditType}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, auditType: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white outline-none font-semibold"
                  >
                    <option value="Full Technical Audit">Full Technical Audit (150+ Checks)</option>
                    <option value="SEO Code & Schema Check">SEO Code & Schema Audit Only</option>
                    <option value="Competitor Content Audit">Competitor Content Gap Audit</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow shadow-brand-indigo/15"
                >
                  Generate Strategic Audit Proposal
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

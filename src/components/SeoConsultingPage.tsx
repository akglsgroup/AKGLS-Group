import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, HelpCircle, ArrowRight, CheckCircle2, 
  CheckCircle, Database, LineChart, ShieldCheck, 
  ChevronRight, Users, Sparkles, BookOpen, Clock, Presentation
} from 'lucide-react';

interface SeoConsultingPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function SeoConsultingPage({ onBackToHome, openProposalForm }: SeoConsultingPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "SEO Consulting Services | SEO Consultant Company | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [hoursPerMonth, setHoursPerMonth] = useState('20');
  const [complexity, setComplexity] = useState('mid-market');
  const [calcStatus, setCalcStatus] = useState<'idle' | 'calculating' | 'done'>('idle');

  const [estimatedBudget, setEstimatedBudget] = useState(0);
  const [dedicatedConsultant, setDedicatedConsultant] = useState('');
  const [weeklyBriefs, setWeeklyBriefs] = useState('1');

  const handleRunRetainerCalculator = (e: FormEvent) => {
    e.preventDefault();
    setCalcStatus('calculating');

    setTimeout(() => {
      const hrs = parseInt(hoursPerMonth) || 0;
      let hourlyRate = 150;

      if (complexity === 'startup') {
        hourlyRate = 125;
        setDedicatedConsultant('Senior Growth SEO Consultant');
        setWeeklyBriefs('Bi-weekly Trace sync');
      } else if (complexity === 'mid-market') {
        hourlyRate = 175;
        setDedicatedConsultant('Director of Search Engineering');
        setWeeklyBriefs('Weekly standard sync');
      } else {
        hourlyRate = 250;
        setDedicatedConsultant('Principal Technical Strategist + VP of Search');
        setWeeklyBriefs('Twice weekly stakeholders sync');
      }

      setEstimatedBudget(hrs * hourlyRate);
      setCalcStatus('done');
    }, 1000);
  };

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    consultingGoals: 'Organic Growth Roadmap',
    currentTeamSize: '1-5 editors'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'roadmap' | 'training' | 'fractional' | 'recovery'>('roadmap');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "ConsultingService",
  "name": "Fractional & Private SEO Consulting Strategy",
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
    roadmap: {
      title: "Strategic SEO Growth Roadmaps",
      icon: <BookOpen className="w-5 h-5 text-brand-indigo" />,
      desc: "Receive comprehensive structural optimization timelines outlining 3-month parameters, 6-month expansions, and 12-month metrics milestones. We model keyword hierarchies precisely.",
      bullets: [
        "Incorporate highly descriptive term taxonomy frameworks",
        "Design content calendars targeting high-affinity buying queues",
        "Formulate precise canonical routing guides to defend page authority",
        "Track indexing fluctuations using custom dashboard benchmarks"
      ]
    },
    training: {
      title: "Corporate Team Training & SOP Workshops",
      icon: <Presentation className="w-5 h-5 text-brand-purple" />,
      desc: "Turn your in-house developers, authors, and UI/UX designers into high-performing search assets. We host custom, hands-on masterclasses and build step-by-step SOP manuals.",
      bullets: [
        "Audit previous writer mistakes degrading crawler optimization rules",
        "Deliver clear checklists instructing proper sitemapping procedures",
        "Train engineering teams to execute schemas smoothly",
        "Boost organic ranking authority through unified corporate workflows"
      ]
    },
    fractional: {
      title: "Fractional and Principal search leadership",
      icon: <Users className="w-5 h-5 text-brand-teal" />,
      desc: "Gain director-level technical guidance to steer your board briefings, evaluate vendor pitches, and coordinate engineering departments without full-time executive payroll costs.",
      bullets: [
        "Deliver precise data models calculating ROI across various search verticals",
        "Help interview and organize dedicated search team expansions",
        "Audit outgoing vendor work logs to ensure maximum campaign safeties",
        "Deploy high level solutions solving complex platform migrations"
      ]
    },
    recovery: {
      title: "Algorithm penalty recoveries & audits",
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
      desc: "Solve sudden crawl drops, ranking drops, indexing cuts, or manual core spam actions triggered by historical database overlaps.",
      bullets: [
        "Inspect algorithmic footprint penalties across all global page columns",
        "Format precise disavow lists targeting Google Search Console parameters",
        "Restructure thin taxonomy hierarchies to claw back search ratings",
        "Claim permanent organic rank cushions and traffic recovery vectors"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What does an SEO Consultant do?",
      a: "An SEO consultant provides expert analysis, custom organic growth roadmaps, technical oversight, team workshops, algorithmic recovery plans, and fractional leadership to help clients scale organic revenue safely."
    },
    {
      q: "How does consulting differ from full-service SEO agency packages?",
      a: "Full-service packages handle content drafting, outreach, and development execution, whereas Consulting is strategic, advisory, and educational, ensuring your internal crew learns to run optimization processes."
    },
    {
      q: "Which sizing complexity tier fits our brand?",
      a: "Startups are best for local or seed-level SaaS companies. Mid-Market fits regional service firms or established ecommerce platforms. Corporate is tailored for high-volume enterprise domains."
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
            
            <div className="lg:col-span-12 xl:col-span-12 space-y-6 text-left xl:pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-indigo/10 text-brand-indigo rounded-full text-xs font-extrabold uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" /> High-Level SEO Strategy
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                SEO Consulting Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Fractional Search Leadership</span>
              </h1>
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-3xl">
                Partner with seasoned platform architects. Receive customized growth mapping, establish professional team training guidelines, and resolve algorithmic drop-offs.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">100%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Custom Strategy Roadmap</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">VP Level</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Direct Advisor Access</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">SOPs</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Full Developer Manuals</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">Weekly</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Sync Briefing Traces</p>
                </div>
              </div>
            </div>

            {/* Middle Retainer Budget Tool */}
            <div className="lg:col-span-12 xl:col-span-12 mt-8">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-w-3xl mx-auto">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-indigo/15 text-brand-indigo text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-indigo/20">
                    Sourcing Retainer Calculator
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Clock className="w-5 h-5 text-brand-teal" /> Fractional Resource Sizing Tool
                </h3>
                <p className="text-xs text-slate-403 mb-6 text-left">
                  Configure target advisor hours and team complexity models to review typical fractional retainers.
                </p>

                <form onSubmit={handleRunRetainerCalculator} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4 space-y-1 text-left">
                    <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Target Hours Per Month</label>
                    <input 
                      type="number" 
                      required
                      min="5" max="100"
                      value={hoursPerMonth}
                      onChange={(e) => setHoursPerMonth(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-mono outline-none"
                    />
                  </div>

                  <div className="md:col-span-4 space-y-1 text-left">
                    <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Complexity / Team Size Tier</label>
                    <select
                      value={complexity}
                      onChange={(e) => setComplexity(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-semibold outline-none"
                    >
                      <option value="startup">Startup advisory (DR &lt; 35, local)</option>
                      <option value="mid-market">Mid-Market platform (SaaS, eCommerce)</option>
                      <option value="enterprise">Corporate conglomerate (Massive scale APIs)</option>
                    </select>
                  </div>

                  <div className="md:col-span-4 pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3.5 rounded-xl transition-all"
                    >
                      {calcStatus === 'calculating' ? 'Processing retainer parameters...' : 'Calculate fractional retainer'}
                    </button>
                  </div>
                </form>

                <AnimatePresence mode="wait">
                  {calcStatus === 'done' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-850 text-left font-mono space-y-3 text-xs"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="pb-2 md:pb-0 md:border-r border-slate-850">
                          <span className="text-slate-500 block uppercase text-[10px]">DEDICATED ADVISOR TYPE:</span>
                          <span className="text-white font-black text-[11px] block mt-1">{dedicatedConsultant}</span>
                        </div>
                        <div className="pb-2 md:pb-0 md:border-r border-slate-850 md:pl-4">
                          <span className="text-slate-500 block uppercase text-[10px]">SYNC FREQUENCY:</span>
                          <span className="text-brand-purple font-black text-[11px] block mt-1">{weeklyBriefs}</span>
                        </div>
                        <div className="md:pl-4">
                          <span className="text-slate-500 block uppercase text-[10px]">ESTIMATED MONTHLY BUDGET:</span>
                          <span className="text-brand-teal font-black text-sm block mt-0.5">${estimatedBudget.toLocaleString()} USD / mo</span>
                        </div>
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
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display font-sans">
              Four Dimensions of Strategic SEO Advisory
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-sans">
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-bold">STARTUP ONBOARD TIMINGS</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">&lt; 7 Days</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Brief Consulting Leads
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Schema Block */}
      <section className="py-20 border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-5">
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">CONSULT SERVICE SCHEMA</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Coordinate Fractional Sourcing Schemes
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By publishing explicit consulting attributes inside search indexing schemas, you secure faster indexation of private corporate advisory platforms.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Consulting Schema Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono text-left">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">seo-consulting-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "ConsultingService",
  "name": "Corporate SEO advisory and fractional VP strategy",
  "provider": {
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
      <section id="seo-consulting-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4 animate-pulse">
              Book a Strategy Consulting Call
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Submit your corporate advisory requirements. We will organize specialized growth charts, define key performance indicators, and host immediate strategy discovery syncs.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto font-mono">
                <p className="text-sm font-black uppercase">Consulation Inquiry Registered</p>
                <p className="text-xs text-slate-404 mt-1">Our executive strategist will establish initial contact inside 12 business hours.</p>
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
                    placeholder="Corporate Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-505 outline-none animate-fade-in"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  <select
                    value={leadForm.consultingGoals}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, consultingGoals: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white outline-none font-semibold"
                  >
                    <option value="Organic Growth Roadmap">Create Organic Growth Roadmap</option>
                    <option value="Team SOPs Workshop">Conduct Corporate Workshops / SOPs</option>
                    <option value="Executive Sourcing Sync">Book Retained / Fractional VP Sourcing Call</option>
                  </select>
                  <select
                    value={leadForm.currentTeamSize}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, currentTeamSize: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white outline-none font-semibold"
                  >
                    <option value="1-5 editors">Internal Team: 1 - 5 editors</option>
                    <option value="5-20 editors">Internal Team: 5 - 20 editors</option>
                    <option value="No internal squad">No internal editors (Full Outsource Need)</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow shadow-brand-indigo/15"
                >
                  Generate Private Strategic Scoping Call Slot
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

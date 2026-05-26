import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Link2, HelpCircle, ArrowRight, CheckCircle2, 
  Award, CheckCircle, Database, LineChart, ShieldCheck, 
  ChevronRight, Users, Sparkles, Send, Mail, Copy, RefreshCw
} from 'lucide-react';

interface LinkBuildingPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function LinkBuildingPage({ onBackToHome, openProposalForm }: LinkBuildingPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Link Building Services Company | White Hat Backlink Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [niche, setNiche] = useState('saas');
  const [pitchCopied, setPitchCopied] = useState(false);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    siteUrl: '',
    targetDr: 'dr50'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'guest' | 'haro' | 'blogger' | 'competitor'>('guest');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const pitches = {
    saas: {
      subject: "Inquiry: Collaboration on [Topic] - Editorial Resource Mapping",
      body: "Hi [Name],\n\nI was reviewing your comprehensive guide on [Topic] and noticed a logical bridge where your readers might enjoy learning more about scale efficiency parameter settings. We published a deep interactive trace detailing this.\n\nWould you be open to an editorial link insert? I would be happy to share your recent post across our company newsletter of 15,000 corporate subscribers in exchange.\n\nBest,\n[Your Name]"
    },
    local: {
      subject: "Localized Reference Contribution for [Sub-category] - Sultanpur",
      body: "Hi [Name],\n\nI run AKGLS Group's regional link office. Since we coordinate proximity guidelines for dental directories across Sultanpur, I designed an absolute spatial coordinate map listing top clinics.\n\nWould you mind adding our reference widget to your neighborhood resource section? It maps coordinates perfectly for local commuters.\n\nBest,\n[Your Name]"
    },
    finance: {
      subject: "Data Contribution: Stat study on [Market Metric]",
      body: "Hi [Name],\n\nI am compiling research on financial parameter leakages across enterprise entities. We performed a statistical test over 1,200 firms confirming a 15% revenue drag.\n\nSince your columns offer deep regulatory compliance advice, I thought this statistic resource would make a spectacular reference for your next journal update.\n\nBest,\n[Your Name]"
    }
  };

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(pitches[niche as keyof typeof pitches].subject + "\n\n" + pitches[niche as keyof typeof pitches].body);
    setPitchCopied(true);
    setTimeout(() => setPitchCopied(false), 2000);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White Hat Link Building Outreach Catalog",
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
    guest: {
      title: "Premium Blogger Outreach & Guest Posts",
      icon: <Mail className="w-5 h-5 text-brand-indigo" />,
      desc: "Secure natural editorial link assets embedded inside highly contextual paragraphs. We write fully unique guest publications detailing topic expertise to claim pristine link juice.",
      bullets: [
        "100% human outreach targeting contextually relevant active blogs",
        "Zero footprint placement chains or PBN clusters used",
        "Verify partner domains for active organic keyword rankings",
        "Anchor links placed permanently inside core index layers"
      ]
    },
    haro: {
      title: "HARO (Connectively) & Digital PR Outreach",
      icon: <Send className="w-5 h-5 text-brand-purple" />,
      desc: "Earn features across international business outlets like Forbes, Bloomberg, TechCrunch, or fast company networks by responding directly to active reporter pitches.",
      bullets: [
        "Monitor active journalist queries targeting corporate subjects",
        "Formulate data-driven executive quotes to secure high pick rates",
        "Earn super-high authoritative DR 75+ referential anchor signals",
        "Boost organic trust and baseline search crawlers indexing authority"
      ]
    },
    blogger: {
      title: "Broken link insertions & Niche edits",
      icon: <Link2 className="w-5 h-5 text-brand-teal" />,
      desc: "Identify outdated content assets or dead links in active columns, then pitch our fresh and authoritative reference layouts as immediate structural updates.",
      bullets: [
        "Audit authoritative partner web files for broken outgoing links",
        "Supply optimized matching contextual replacement text snippets",
        "Claim fast ranking value transfers via established aged indexing layers",
        "Eradicate general user friction points across target networks"
      ]
    },
    competitor: {
      title: "Competitor Backlink Analysis & Replications",
      icon: <Users className="w-5 h-5 text-brand-orange" />,
      desc: "Extract backlink databases of top ranking competitor pages. We target, message, and replicate the high-value link clusters driving their rankings.",
      bullets: [
        "Map exact competitor link profiles using premier back-index platforms",
        "Extract unlinked brand mention lists inside localized search catalogs",
        "Deconstruct anchor density metrics to prevent system over-optimization",
        "Divert organic value indicators directly back to your high-margin pages"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "Are guest posting and manual outreach safe from Google penalties?",
      a: "Yes! High-quality, manual editorial outreach that focuses on supplying value, statistics, and unique insights to real active websites provides completely natural, white-hat links that Google values highly."
    },
    {
      q: "What domain metrics do you filters for?",
      a: "We ignore spammy inflated metrics. We evaluate domain organic monthly traffic (at least 2,000+ real sessions), proper indexing status, topical context, and link outbound ratios."
    },
    {
      q: "How many backlink placements do you deliver per month?",
      a: "Campaigns scale safely between 5 to 50 premium manual link placements per month, matching your target keyword densities."
    }
  ];

  return (
    <div className="pt-8">
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-850">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-indigo/10 text-brand-indigo rounded-full text-xs font-extrabold uppercase tracking-widest">
                <Link2 className="w-3.5 h-3.5" /> High-Authority Linking
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Link Building Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">White-Hat Backlink Agency</span>
              </h1>
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
                 Secure permanent link assets, boost domain authority baseline statistics, audit toxic historical backlink profiles, and claim top ranking organic results.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">DR 50-80</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Average Target sites</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">100%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Editorial Outreach</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">Manual</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Pitch Copy Writing</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Pitch selector */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-indigo/10 text-brand-indigo text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-indigo/20">
                    Outreach pitch Generator
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Mail className="w-5 h-5 text-brand-teal" /> Preview Outreach Emails
                </h3>
                <p className="text-xs text-slate-403 mb-4 text-left">
                  Toggle target niche categories to review real automated manual outreach pitch layouts we deploy.
                </p>

                <div className="space-y-4 text-left font-sans">
                  <div className="space-y-1">
                    <label className="text-[9px] text-slate-404 font-bold uppercase tracking-wider">Select Outreach Niche</label>
                    <select
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-semibold outline-none"
                    >
                      <option value="saas">SaaS & technology (DR 50+)</option>
                      <option value="local">Local Directory directories (DR 40+)</option>
                      <option value="finance">Finance stat Pitching (DR 65+)</option>
                    </select>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 text-[11px] font-mono text-slate-300 space-y-2 max-h-[160px] overflow-y-auto">
                    <p className="text-brand-purple"><strong className="text-slate-500">SUBJECT:</strong> {pitches[niche as keyof typeof pitches].subject}</p>
                    <p className="whitespace-pre-line leading-relaxed">{pitches[niche as keyof typeof pitches].body}</p>
                  </div>

                  <button 
                    onClick={handleCopyPitch}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3 rounded-lg transition-all"
                  >
                    {pitchCopied ? 'Pitch Copy Copied!' : 'Copy Pitch Template Code'}
                  </button>
                </div>
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
              Four Core Streams of High-Value Linkage
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">TYPICAL INGEST VELOCITY</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">10 to 45 Placements</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Start Pitch Campaigns
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
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">LINK SERVICE MARKUP</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Coordinate White Hat Citation Auditing
              </h2>
              <p className="text-slate-205 text-xs sm:text-sm leading-relaxed">
                By publishing explicit service attributes targeting high value manual outreach frameworks inside search database layers, organization entities confirm high organic standard alignments.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Link Schema Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">white-hat-link-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Manual Editorial Guest Link placements",
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
      <section id="link-building-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4 animate-pulse">
              Request Your Custom Backlink Audit
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-sans">
              Submit your domain information below. We will compile competency reviews, catalog current anchor text allocations, and present manual pitch proposals.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto font-sans">
                <p className="text-sm font-black uppercase">Outreach Audit Registered</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Our blogger outreach team will share analysis traces within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left font-sans">
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
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none animate-fade-in"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  <input 
                    type="url" 
                    required
                    placeholder="Your Website URL"
                    value={leadForm.siteUrl}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, siteUrl: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-505 outline-none"
                  />
                  <select
                    value={leadForm.targetDr}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, targetDr: e.target.value }))}
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white outline-none font-semibold"
                  >
                    <option value="dr50">DR 50+ Placements (Low-Mid Competition)</option>
                    <option value="dr60">DR 60+ Placements (Mid-High Competition)</option>
                    <option value="dr70">DR 75+ Placements (Enterprise Dominance)</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow shadow-brand-indigo/15"
                >
                  Request Backlink Audit Placement
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

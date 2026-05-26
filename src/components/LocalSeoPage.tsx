import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Award, CheckCircle, Navigation, Search, 
  Map, Star, ChevronRight, Users, Bell, Globe, Compass, RefreshCw
} from 'lucide-react';

interface LocalSeoPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function LocalSeoPage({ onBackToHome, openProposalForm }: LocalSeoPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Local SEO Services Company | Google Maps SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [bizName, setBizName] = useState('');
  const [bizCity, setBizCity] = useState('New York');
  const [bizCategory, setBizCategory] = useState('Dental Clinic');
  const [simStatus, setSimStatus] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [rankingGrid, setRankingGrid] = useState<number[]>([]);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'gbp' | 'citation' | 'proximity' | 'reviews'>('gbp');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const runMapSimulator = (e: FormEvent) => {
    e.preventDefault();
    if (!bizName) return;
    setSimStatus('scanning');
    
    setTimeout(() => {
      // Simulate 3x3 local search grid rank positions (1-20 average ranks)
      const grid = Array.from({ length: 9 }, () => Math.floor(Math.random() * 8) + 1);
      // Ensure visual variance but centers are usually slightly worse in mock
      grid[4] = Math.floor(Math.random() * 12) + 6; 
      setRankingGrid(grid);
      setSimStatus('done');
    }, 1200);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AKGLS Group Local Partner Office",
  "image": "https://akglsgroup.com/logo.png",
  "telephone": "+91 831 811 4492",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sultanpur Lane",
    "addressLocality": "Lucknow",
    "addressRegion": "UP",
    "postalCode": "226001",
    "addressCountry": "IN"
  }
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    gbp: {
      title: "Google Business Profile Optimization",
      icon: <Navigation className="w-5 h-5 text-brand-indigo" />,
      desc: "Complete, algorithmic-compliant optimization of your Google Business Profile (formerly GMB). We clean business listings, refine geolocation metadata, and structure attributes to capture high proximity scores.",
      bullets: [
        "Audit exact Name, Address, and Phone (NAP) parity parameters",
        "Select maximum capacity secondary search categories structures",
        "Optimize services descriptions using geographical query term strings",
        "Configure automated updates mapping localized terms"
      ]
    },
    citation: {
      title: "Local Citations & Directory Synchronization",
      icon: <Compass className="w-5 h-5 text-brand-purple" />,
      desc: "Deploy authoritative directory listings matching Yelp, Apple Maps, YellowPages, Bing Places, and localized directories. Our synchronization builds domain confidence.",
      bullets: [
        "Clean dirty database citations, duplicates, or stale address elements",
        "Deploy in regional high-authority directories",
        "Embed dynamic latitude and longitude metadata codes in back-indices",
        "Ensure search crawlers align brand address paths with NAP schemas"
      ]
    },
    proximity: {
      title: "Hyperlocal SEO & Geographical Silos",
      icon: <MapPin className="w-5 h-5 text-brand-teal" />,
      desc: "Gain visibility across neighboring suburbs and satellite locations. We establish geotargeted local landing directories that drive organic search queries easily.",
      bullets: [
        "Create dedicated local landing pages with localized heading schemes",
        "Integrate static Google Maps widgets inside content hierarchies",
        "Synthesize spatial location entities within layout paragraphs",
        "Optimize schemas targeting voice and conversational maps assistants"
      ]
    },
    reviews: {
      title: "Review Acquisition & Reputation Workflows",
      icon: <Star className="w-5 h-5 text-brand-orange" />,
      desc: "Customer reviews drive map grid positions. We deploy automated SMS/email acquisition tools that collect review tokens and structure feedback channels.",
      bullets: [
        "Implement review-generation widgets across client databases",
        "Draft keyword-rich compliance responses inside Google console",
        "Prevent rating decay using active feedback filtration loops",
        "Boost organic ranking authority through premium consumer ratings"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What is Google Business Profile proximity ranking?",
      a: "Proximity ranking refers to how close a user search is to your physical coordinates. Since you can't control the user's location, we optimize secondary categories and local signals so Google ranks you across wider search radiuses."
    },
    {
      q: "How long does local schema implementation take to update?",
      a: "Google and Bing typically process updated local business schemas and NAP listings in 3 to 10 business days."
    },
    {
      q: "Do I need physical offices in every neighborhood to rank there?",
      a: "No! True structural local SEO maps localized content silos, citations, and service areas, giving you high ranking authority in nearby areas without multiple office rents."
    }
  ];

  return (
    <div className="pt-8">
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-850">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-indigo/10 text-brand-indigo rounded-full text-xs font-extrabold uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5" /> High-Density Geotargeting
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Local SEO Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Google Maps SEO</span>
              </h1>
              <p className="text-slate-305 text-base sm:text-lg leading-relaxed max-w-2xl">
                Dominate localized searches, command immediate Google Maps grid positioning, and drive organic phone calls and directions navigation. Scale your brand across physical locations.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6 font-mono">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">#1-3</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Maps Pack Objective</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal">+88%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Directions Growth</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple">Real-Time</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Citation Sync</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Maps Grid Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-indigo/10 text-brand-indigo text-[9px] font-black uppercase tracking-widest px-20 py-1 rounded-full border border-brand-indigo/20">
                    Proximity Geo-Grid Simulator
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Map className="w-5 h-5 text-brand-teal" /> Proximity Rank Position Grid
                </h3>
                <p className="text-xs text-slate-403 mb-4 text-left">
                  Model your rank positions. A lower index (green 1-3) means you own the Google Local Pack.
                </p>

                <form onSubmit={runMapSimulator} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sultanpur Dentistry"
                      value={bizName}
                      onChange={(e) => setBizName(e.target.value)}
                      className="bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-slate-600 outline-none font-mono"
                    />
                    <select
                      value={bizCity}
                      onChange={(e) => setBizCity(e.target.value)}
                      className="bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-2.5 px-3.5 text-xs text-white font-semibold outline-none"
                    >
                      <option value="Lucknow">Lucknow</option>
                      <option value="Delhi">Delhi</option>
                      <option value="London">London</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider py-3.5 rounded-xl transition-all"
                  >
                    {simStatus === 'scanning' ? 'Pinging Spatial Indices...' : 'Test Geolocation Grid'}
                  </button>
                </form>

                <AnimatePresence mode="wait">
                  {simStatus === 'done' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 space-y-4 text-left"
                    >
                      <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">3x3 LOCAL PROXIMITY GRID MAP</p>
                      <div className="grid grid-cols-3 gap-2.5 max-w-[280px] mx-auto font-mono">
                        {rankingGrid.map((pos, idx) => {
                          const isGreen = pos <= 3;
                          const isYellow = pos > 3 && pos <= 5;
                          return (
                            <div 
                              key={idx}
                              className={`aspect-square rounded-lg flex flex-col items-center justify-center border text-xs font-black relative overflow-hidden ${
                                isGreen 
                                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                                  : isYellow 
                                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                              }`}
                            >
                              <span className="text-xs">#{pos}</span>
                              <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Rank</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 text-xs text-slate-300 space-y-1 font-mono">
                        <p className="text-[10px] text-slate-400 font-bold uppercase">DIAGNOSTIC INSIGHTS:</p>
                        <p className="text-slate-350 select-none text-[11px] leading-relaxed">
                          - Strong proximity at center nodes. Suburb coordinate drop-offs found due to inconsistent citings data. Correct with structured Geotargeted Silos.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tabs segment */}
      <section className="py-20 border-b border-slate-850 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
              Four Pillars of Geographical Authority
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
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">AVERAGE CALL LIFT</span>
                    <span className="text-3xl font-black text-brand-teal font-mono">+64%</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg shadow"
                  >
                    Lock Local Radius
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
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest font-mono">LOCAL BUSINESS SCHEMA</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                Coordinate Synchronization Markup
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Embedding precise geographical coordinate tags directly into the header ensures Google reviews physical business details consistently, boosting regional search parameters.
              </p>
              <button 
                onClick={copySchemaMarkup}
                className={`px-5 py-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                  schemaCopied ? 'bg-brand-emerald text-white' : 'bg-brand-purple hover:bg-opacity-95 text-white'
                }`}
              >
                {schemaCopied ? 'Local Schema Copied!' : 'Copy Schema Code Template'}
              </button>
            </div>

            <div className="lg:col-span-7 font-mono">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">local-business-schema.json</span>
                </div>
                <pre className="p-4 text-left text-[11px] text-brand-teal/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Target Physical Store Location",
  "telephone": "+91 831 811 4492",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Office Street Address",
    "addressLocality": "Target City",
    "postalCode": "ZipCode"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
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

      {/* Conversion Banner */}
      <section id="local-cta" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-4 animate-pulse">
              Request Your Maps Assessment
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Submit your business credentials below. We will execute an exhaustive Proximity Geo-Grid analysis and map exact ranking targets for your local market radius.
            </p>

            {leadSubmitted ? (
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl max-w-lg mx-auto">
                <p className="text-sm font-black uppercase">Local Evaluation Registered</p>
                <p className="text-xs text-slate-400 mt-1">Our regional lead will compile proximity reports within 12 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  <input 
                    type="text" 
                    required
                    placeholder="Business Name"
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
                    className="bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 outline-none"
                  />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="Business Location Street & City"
                  value={leadForm.website}
                  onChange={(e) => setLeadForm(prev => ({ ...prev, website: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 outline-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow shadow-brand-indigo/10"
                >
                  Generate Free Maps Audit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

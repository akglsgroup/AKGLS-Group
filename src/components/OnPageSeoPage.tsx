import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Award, CheckCircle, Database, LineChart, 
  ChevronRight, Star, Users, FileCheck, Layers, BookOpen, Text, Image as ImageIcon, Link as LinkIcon, AlertCircle, Copy, Send
} from 'lucide-react';

interface OnPageSeoPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function OnPageSeoPage({ onBackToHome, openProposalForm }: OnPageSeoPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title & Meta simulation
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "On-Page SEO Services | Semantic Content Optimization | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Form and interactive tool states
  const [analyzerUrl, setAnalyzerUrl] = useState('');
  const [analyzingStatus, setAnalyzingStatus] = useState<'idle' | 'analyzing' | 'complete'>('idle');
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  const [analysisResults, setAnalysisResults] = useState({
    onPageScore: 0,
    wordCount: 0,
    headingStructure: 'Pass',
    imageAltCount: '4/12 missing',
    readabilityGrade: '8th Grade',
    errors: [] as string[],
    recommendations: [] as string[]
  });

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    website: '',
    industry: 'Technology'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'semantic' | 'headings' | 'images' | 'linking'>('semantic');
  const [schemaCopied, setSchemaCopied] = useState(false);

  const runOnPageSimulator = (e: FormEvent) => {
    e.preventDefault();
    if (!analyzerUrl) return;

    setAnalyzingStatus('analyzing');
    setAnalyzeProgress(15);

    const steps = [
      { progress: 35, label: "Parsing HTML heading taxonomy (H1-H4 trees)..." },
      { progress: 60, label: "Scanning entity density & semantic LSI keyphrases..." },
      { progress: 85, label: "Inspecting image alt properties and modern AVIF payloads..." },
      { progress: 100, label: "Calculating natural language processing readability grade..." }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setAnalyzeProgress(step.progress);
        if (step.progress === 100) {
          setAnalyzingStatus('complete');
          setAnalysisResults({
            onPageScore: Math.floor(Math.random() * 20) + 65, // 65-85
            wordCount: Math.floor(Math.random() * 1200) + 800,
            headingStructure: Math.random() > 0.4 ? 'Warn: Multiple H1 Tags Found' : 'Pass',
            imageAltCount: `${Math.floor(Math.random() * 6) + 2} missing alt description tokens`,
            readabilityGrade: 'College Level (Needs simplification for general indexing)',
            errors: [
              "H1-H3 sequence skips headers hierarchy (skip from H2 directly to nested span)",
              "Low TF-IDF contextual density for primary keyphrase vectors",
              "Render-blocking inline media assets without layout dimensions",
              "Missing canonical mapping tag leading to potential domain duplication rules"
            ],
            recommendations: [
              "Regroup headings tree into a single authoritative H1 with sequential H2/H3 headers",
              "Inject semantic keyword entities (LSI phrases) inside first 100 words",
              "Compress large public assets and attach custom declarative 'alt' structures",
              "Configure absolute canonical tags matching standard URL layouts"
            ]
          });
        }
      }, (index + 1) * 700);
    });
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email || !leadForm.website) return;
    setLeadSubmitted(true);
  };

  const copySchemaMarkup = () => {
    const code = `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "On-Page SEO & Semantic Relevance Optimization",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "serviceType": "On-Page Search Optimization"
}`;
    navigator.clipboard.writeText(code);
    setSchemaCopied(true);
    setTimeout(() => setSchemaCopied(false), 2000);
  };

  const tabsContent = {
    semantic: {
      title: "Linguistic Entity & Semantic Mapping",
      icon: <Layers className="w-5 h-5 text-brand-indigo" />,
      desc: "Modern AI search engines and crawler bots scan content using entity relationships and TF-IDF vectors instead of raw, exact keyword matches. We map your site’s lexical content directly to authoritative contextual frameworks.",
      bullets: [
        "Incorporate highly relevant LSI terminology naturally within text volumes",
        "Maintain optimal search term density strictly without keyword stuffing issues",
        "Align semantic paragraphs to search intent schemas and context pools",
        "Perform deep competitor content relevance benchmarking audits"
      ]
    },
    headings: {
      title: "Taxonomy & Header Hierarchy",
      icon: <Text className="w-5 h-5 text-brand-purple" />,
      desc: "Clean code structure represents structural discipline. We restructure headers logically (from a single authoritative H1 down through organized H2s, H3s, and H4s) ensuring indexers interpret structural relevancy accurately.",
      bullets: [
        "Audit existing heading skipping, missing, or multiple H1 anomalies",
        "Format headers with direct, search-focused queries and secondary entities",
        "Create logical content tables matching targeted visual layouts",
        "Verify nested paragraphs focus exclusively on heading scope"
      ]
    },
    images: {
      title: "Image Alt & Core Media Assets SEO",
      icon: <ImageIcon className="w-5 h-5 text-brand-teal" />,
      desc: "Search crawlers do not see raw visual pixels; they read context tokens. We make sure all layout assets deliver explicit descriptive text while maintaining lightweight, responsive formats.",
      bullets: [
        "Identify and patch empty, missing, or auto-generated image alt tags",
        "Optimize file-naming structures using literal keyword tokens",
        "Modernize assets to fast Next-Gen AVIF formats",
        "Configure dimensions to prevent shifting elements layout shifts"
      ]
    },
    linking: {
      title: "Internal Parsing & Custom Linking Structures",
      icon: <LinkIcon className="w-5 h-5 text-brand-orange" />,
      desc: "Distribute your domain's authoritative ranking weight contextually across all target columns. We build semantic connections using relevant anchor texts, reducing bounce parameters.",
      bullets: [
        "Synthesize logical silos structure maps linking supporting articles",
        "Verify all anchors deliver clear descriptive relevance cues",
        "Identify and fix broken redirect links routing payloads",
        "Maintain optimal ratio between internal structures and outbound pathways"
      ]
    }
  };

  const FAQ_DATA = [
    {
      q: "What is On-Page SEO optimization?",
      a: "On-Page SEO is the practice of optimizing individual web page elements—such as content copy, heading structures, image alt text, internal links, title tags, and meta descriptions—to rank higher and earn more relevant traffic in search engines."
    },
    {
      q: "Why is semantic SEO more important than raw keyword stuffing?",
      a: "Search engines like Google use advanced natural language algorithms (like BERT and MUM) to evaluate contextual relevance. Raw keyword stuffing causes penalization and feels artificial to humans. Semantic SEO focuses on covering a topic comprehensively using entity terms and context maps."
    },
    {
      q: "Does On-Page SEO affect indexing in Gemini and ChatGPT?",
      a: "Absolutely! Large Language Models and AI search systems scan websites to summarize citations. Using clear headings taxonomy, structured text formats, and descriptive semantic phrasing makes your page substantially easier for AI scraping models to retrieve and cite."
    },
    {
      q: "How long does it take to see organic visibility improvements?",
      a: "Unlike technical server changes which can register almost instantly, on-page content updates usually take 2 to 4 weeks to re-crawl. After indexing, clients typically see immediate jumps in organic impressions and rank positions."
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-850">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-indigo/10 text-brand-indigo rounded-full text-xs font-extrabold uppercase tracking-widest">
                <FileCheck className="w-3.5 h-3.5" /> High-Intent Context Optimization
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
                On-Page SEO Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Semantic Strategy</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                We write and structure your content assets so search engine crawlers and AI answer engines recognize absolute topical authority. Align headings, semantic schema models, and lexical entities in a cohesive layout.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={openProposalForm}
                  className="bg-gradient-to-r from-brand-indigo to-brand-purple hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg shadow-brand-indigo/20 flex items-center gap-2"
                >
                  Request On-Page Audit <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
                  className="bg-slate-900 border border-slate-800 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-xl hover:bg-slate-850 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-teal" /> Dial {CONTACT_NUMBER}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-8 mt-6">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white font-mono">100%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">SEO Compliant Content</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-teal font-mono">+42%</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Linguistic Relevancy Rank</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-brand-purple font-mono">2-4 Wks</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Average Crawl Update</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Tool Column */}
            <div className="lg:col-span-5">
              <div className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute top-0 right-4 -translate-y-1/2">
                  <span className="bg-brand-teal/10 text-brand-teal text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-teal/20">
                    Live Analyzer Simulator
                  </span>
                </div>
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2 text-left">
                  <Award className="w-5 h-5 text-brand-indigo" /> Scan On-Page Relevance Elements
                </h3>
                <p className="text-xs text-slate-400 mb-6 text-left">
                  Enter your URL below to trace heading skippings, ALT descriptive omissions, and density maps.
                </p>

                <form onSubmit={runOnPageSimulator} className="space-y-4">
                  <div className="flex gap-2">
                    <input 
                      type="url" 
                      required
                      placeholder="e.g. https://yoursite.com/blog-post"
                      value={analyzerUrl}
                      onChange={(e) => setAnalyzerUrl(e.target.value)}
                      className="bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 outline-none flex-1 font-mono"
                    />
                    <button 
                      type="submit"
                      disabled={analyzingStatus === 'analyzing'}
                      className="bg-brand-indigo hover:bg-opacity-95 text-white text-xs font-black uppercase tracking-wider px-4 rounded-xl transition-all"
                    >
                      {analyzingStatus === 'analyzing' ? 'Testing...' : 'Scan Now'}
                    </button>
                  </div>
                </form>

                <AnimatePresence mode="wait">
                  {analyzingStatus === 'idle' && (
                    <div className="py-12 flex flex-col items-center justify-center text-slate-500 border border-dashed border-slate-800 rounded-xl mt-4">
                      <FileCheck className="w-10 h-10 mb-2 opacity-40 text-slate-400" />
                      <p className="text-[11px] font-bold uppercase tracking-wider font-mono">No active report generated</p>
                    </div>
                  )}

                  {analyzingStatus === 'analyzing' && (
                    <div className="py-12 space-y-4 mt-4 text-left">
                      <div className="flex justify-between text-xs font-mono font-bold text-slate-300">
                        <span>Analyzing layout structures...</span>
                        <span>{analyzeProgress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-brand-indigo to-brand-teal"
                          animate={{ width: `${analyzeProgress}%` }}
                          transition={{ ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  )}

                  {analyzingStatus === 'complete' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 space-y-4 text-left font-mono"
                    >
                      <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-850 text-xs">
                        <div>
                          <p className="text-[10px] text-slate-400 font-extrabold uppercase mb-0.5">ON-PAGE SCORE</p>
                          <span className={`${analysisResults.onPageScore > 75 ? 'text-emerald-400' : 'text-amber-400'} font-bold`}>
                            {analysisResults.onPageScore}/100
                          </span>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-extrabold uppercase mb-0.5">WORD COUNT</p>
                          <span className="text-white font-bold">{analysisResults.wordCount} words</span>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-extrabold uppercase mb-0.5">HEADING STRUC.</p>
                          <span className="text-amber-400 font-bold">{analysisResults.headingStructure}</span>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-extrabold uppercase mb-0.5">READABILITY</p>
                          <span className="text-white font-bold text-[11px]">{analysisResults.readabilityGrade}</span>
                        </div>
                      </div>

                      <div className="space-y-2 bg-slate-950/50 p-4 rounded-xl border border-slate-850">
                        <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-brand-orange" /> Structural anomalies found ({analysisResults.errors.length})
                        </p>
                        <div className="space-y-1.5 text-[11px] text-slate-350">
                          {analysisResults.errors.map((err, idx) => (
                            <div key={idx} className="flex gap-2">
                              <span className="text-brand-orange select-none">&#8226;</span>
                              <span>{err}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 bg-slate-950/50 p-4 rounded-xl border border-slate-850">
                        <p className="text-[10px] text-brand-teal font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-teal" /> Immediate SEO Fixes
                        </p>
                        <div className="space-y-1.5 text-[11px] text-slate-305">
                          {analysisResults.recommendations.map((rec, idx) => (
                            <div key={idx} className="flex gap-2">
                              <span className="text-brand-teal select-none">&#9656;</span>
                              <span>{rec}</span>
                            </div>
                          ))}
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

      {/* Structured Category Tabs Section */}
      <section className="py-20 border-b border-slate-850 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-none font-display">
              Four Pillars of On-Page Relevance
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We update and reformat every element on your webpage to ensure semantic compliance with indexing entities and query intent.
            </p>
          </div>

          {/* Tab buttons switcher */}
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

          {/* Active Tab rendering */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c1221] border border-slate-800 rounded-2xl p-6 sm:p-10 text-left max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <span className="text-brand-teal text-[10px] font-mono font-bold uppercase tracking-widest block">CORE COMPONENT</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                      {tabsContent[activeTab].title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {tabsContent[activeTab].desc}
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    {tabsContent[activeTab].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 bg-slate-950 p-5 rounded-xl border border-slate-850 space-y-4">
                  <div className="text-center py-2">
                    <span className="text-[11px] font-mono text-slate-500 block uppercase tracking-wider">AVERAGE LIFT</span>
                    <span className="text-3xl font-black text-brand-teal font-mono tracking-tight">+42%</span>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mt-1">in keyword impressions</span>
                  </div>
                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-lg text-center shadow"
                  >
                    Apply Structure Now
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Advanced XML & JSON-LD On Page Schema Markup copy section */}
      <section className="py-20 border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-5">
              <span className="text-[11px] text-brand-purple font-black uppercase tracking-widest">STRUCTURED DATA ENGINE</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
                JSON-LD On-Page Schema Deployment
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By nesting custom Local Business, Product, and Article schemas inside the page headers, we convey direct contextual entity profiles that scraper engines use to construct rich snippet search grids.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Generate rich stars rating snippets inside search lists</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Verify organizational relationship parameters cleanly</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={copySchemaMarkup}
                  className={`px-5 py-3.5 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all flex items-center gap-2 ${
                    schemaCopied 
                      ? 'bg-brand-emerald text-white' 
                      : 'bg-brand-purple hover:bg-opacity-95 text-white shadow-lg shadow-brand-purple/20'
                  }`}
                >
                  {schemaCopied ? 'Schema Code Copied!' : 'Copy Code Snippet Template'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0b101b] py-2.5 px-4 border-b border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">on-page-schema-template.json</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  </div>
                </div>
                <pre className="p-4 sm:p-6 text-left overflow-x-auto text-[11px] text-brand-teal/90 font-mono leading-relaxed bg-slate-950/70 scrollbar-none max-h-[300px]">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "On-Page SEO & Relevance Optimization",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com",
    "sameAs": [
      "https://twitter.com/akglsgroup",
      "https://linkedin.com/company/akglsgroup"
    ]
  },
  "serviceType": "Semantic Search Optimization",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "eligibleRegion": "Global"
  }
}`}
                </pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Grid Section */}
      <section className="py-20 border-b border-slate-850 bg-slate-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Understand howsemantic structuring upgrades organic relevancy, crawler indexing cycles, and search traffic limits.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#0c1221] border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
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

      {/* Dedicated Conversion Box Section */}
      <section id="onpage-audit-section" className="py-20 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-tr from-[#090b14] via-[#0e162d] to-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal" />
            
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight">
                Benchmark Your Relevance Profile
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with our context optimization specialists today. We will execute an exhaustive semantic crawl across your core directories, trace content gaps, and build a precise H1-H4 taxonomy and LSI entity map.
              </p>

              {leadSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-brand-emerald/10 border border-brand-emerald/20 text-emerald-300 py-6 px-4 rounded-2xl space-y-2"
                >
                  <Award className="w-10 h-10 text-brand-emerald mx-auto mb-1" />
                  <p className="text-base font-black uppercase tracking-wider">Audit Request Registered</p>
                  <p className="text-xs text-slate-405 leading-relaxed">
                    Our lead analyst will review your domain's taxonomy payload profile. Expect a modular structural PDF delivery inside 12-24 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-lg mx-auto text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. John Doe"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 outline-none font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. john@yourcompany.com"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Website URL (To Audit)</label>
                    <input 
                      type="url" 
                      required
                      placeholder="e.g. https://yourcompany.com"
                      value={leadForm.website}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-white placeholder-slate-650 outline-none font-mono"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-indigo to-brand-purple hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-brand-indigo/20 text-center block mt-2"
                  >
                    Submit Request for Proposal
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-500 font-medium">
                No subscription mandates. Secure client directory protection guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

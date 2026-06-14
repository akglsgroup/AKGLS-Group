import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, CheckCircle2, AlertCircle, FileText, Download, 
  HelpCircle, ChevronDown, Check, Star, Mail, Phone, 
  ArrowRight, ShieldCheck, HeartPulse, Laptop, Globe, Cpu,
  Database, ListTodo, Send, Share2
} from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/918318114492';
const CONTACT_NUMBER = '+91 83181 14492';

interface AiSeoChecklistsPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function AiSeoChecklistsPage({ onBackToHome, openProposalForm }: AiSeoChecklistsPageProps) {
  // Page title sync
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Free AI SEO, GEO & AEO Checklists (2026 Edition) | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Lead capture form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    email: '',
    phone: '',
    budget: '$1,000 - $3,000 /mo',
    primaryGoal: 'AI SEO Optimization'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccessType, setDownloadSuccessType] = useState<string | null>(null);

  // Ready Score State
  const [readinessAnswers, setReadinessAnswers] = useState<Record<string, boolean>>({
    faqPages: false,
    structuredData: false,
    fastWebsite: false,
    expertContent: false,
    caseStudies: false,
    servicePages: false,
    friendlyFormatting: false,
    brandMentions: false,
    industryCitations: false,
    knowledgeGraph: false
  });

  const readinessFactors = [
    { key: "faqPages", label: "FAQ Pages (Are questions structured clearly with answers?)" },
    { key: "structuredData", label: "Structured Data (Schema markups like Organization, LocalBusiness, FAQ)" },
    { key: "fastWebsite", label: "Fast Website (Average page loading time below 3.0 seconds)" },
    { key: "expertContent", label: "Expert Content (Regularly published high-quality or thought-leaderships)" },
    { key: "caseStudies", label: "Case Studies (Documented customer outcomes and data validation blocks)" },
    { key: "servicePages", label: "Service Pages (Highly detailed layouts matching individual capabilities)" },
    { key: "friendlyFormatting", label: "AI-Friendly Formatting (Using bullets, tables, clear subheaders)" },
    { key: "brandMentions", label: "Brand Mentions (Existing citations in trade news or directories)" },
    { key: "industryCitations", label: "Industry Citations (Authoritative backlinks on highly-related blogs)" },
    { key: "knowledgeGraph", label: "Knowledge Graph Signals (Wikidata, GBP, matched SameAs records)" }
  ];

  const handleCheckboxChange = (key: string) => {
    setReadinessAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const scoreCount = Object.values(readinessAnswers).filter(Boolean).length;
  let readinessLabel = "Needs Improvement";
  let readinessColor = "text-rose-450 border-rose-500/20 bg-rose-950/20 text-rose-400";
  if (scoreCount >= 4 && scoreCount <= 6) {
    readinessLabel = "Moderate Readiness";
    readinessColor = "text-amber-450 border-amber-500/20 bg-amber-950/20 text-amber-400";
  } else if (scoreCount >= 7 && scoreCount <= 9) {
    readinessLabel = "Good Readiness";
    readinessColor = "text-teal-450 border-teal-500/20 bg-teal-950/20 text-teal-400";
  } else if (scoreCount >= 10) {
    readinessLabel = "AI Search Ready";
    readinessColor = "text-emerald-400 border-emerald-500/30 bg-emerald-950/30";
  }

  // Interactive Checklist states (allows user to play with and cross parameters live!)
  const [seoTechnicalChecked, setSeoTechnicalChecked] = useState<Record<number, boolean>>({});
  const [seoContentChecked, setSeoContentChecked] = useState<Record<number, boolean>>({});
  const [seoVisibilityChecked, setSeoVisibilityChecked] = useState<Record<number, boolean>>({});
  const [geoCitationChecked, setGeoCitationChecked] = useState<Record<number, boolean>>({});
  const [geoLlmChecked, setGeoLlmChecked] = useState<Record<number, boolean>>({});
  const [geoStrategyChecked, setGeoStrategyChecked] = useState<Record<number, boolean>>({});
  const [aeoAnswersChecked, setAeoAnswersChecked] = useState<Record<number, boolean>>({});

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setDownloadSuccessType("All-in-One AI Search Checklist Suite (PDF)");
    }, 1500);
  };

  const downloadDirectMock = (title: string) => {
    // Scroll directly to the download lead form if not submitted
    if (!formSubmitted) {
      const el = document.getElementById('checklist-lead-capture');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setDownloadSuccessType(title);
      // Simulate file download by creating alert
      const element = document.createElement("a");
      const file = new Blob([`AKGLS Group Premium Guide: ${title}\nOptimized for 2026. This PDF contains full frameworks and deployment scripts for GEO, AEO, and AI SEO schemas. Thank you for choosing AKGLS Group!`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_2026.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div id="ai-checklists-container" className="min-h-screen bg-[#03060c] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-teal-500/20 selection:text-teal-200 py-1">
      
      {/* Visual background decorations */}
      <div className="absolute top-0 left-0 w-full h-[700px] bg-gradient-to-b from-teal-950/10 via-indigo-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-[400px] right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[1200px] left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[155px] pointer-events-none" />

      {/* Main navigation placeholder with Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 py-4">
        <button 
          id="back-to-home-btn"
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-705 transition-all text-xs font-mono text-slate-400 hover:text-white"
        >
          <span>← Back to Primary Interface</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/50 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERT DOWNLOADS • 2026 DIGITAL EDITION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Free AI SEO, GEO & AEO <br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">Checklists (2026 Edition)</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            Download our free AI SEO, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) checklists used by marketers, SEO professionals, startups, SaaS companies, and enterprises to improve visibility across search engines and AI-powered platforms.
          </p>

          {/* Inline Badge Stream */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/70 rounded-md border border-slate-850"><Check className="w-3.5 h-3.5 text-teal-400" /> Google Search</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/70 rounded-md border border-slate-850"><Check className="w-3.5 h-3.5 text-teal-400" /> ChatGPT</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/70 rounded-md border border-slate-850"><Check className="w-3.5 h-3.5 text-teal-400" /> Gemini</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/70 rounded-md border border-slate-850"><Check className="w-3.5 h-3.5 text-teal-400" /> Claude</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/70 rounded-md border border-slate-850"><Check className="w-3.5 h-3.5 text-teal-400" /> Perplexity</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/70 rounded-md border border-slate-850"><Check className="w-3.5 h-3.5 text-teal-400" /> Copilot</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#checklist-lead-capture" 
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/10 hover:shadow-teal-400/20 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Free Checklist PDF</span>
            </a>
            <a 
              href="#readiness-calculator" 
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Calculate Readiness Score</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Feature Split Cards: What You'll Learn */}
      <section className="py-12 border-t border-slate-900/60 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Practical Guides Overview</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">What You'll Learn in This Suite</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-950/50 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">1. AI SEO Checklist</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Learn how to optimize your website structure, core schema variables, and content components for high priority indexation across Google and AI platform scrapers.
              </p>
              <button 
                onClick={() => downloadDirectMock("AI SEO Checklist Suite")}
                className="text-xs text-teal-400 hover:underline flex items-center gap-1 font-mono hover:text-teal-300"
              >
                <span>Preview Document →</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">2. GEO Checklist</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Discover the exact steps to build organic brand mentions, semantic dependencies, and entity relationship schemas inside ChatGPT Search, Claude, and Perplexity RAG models.
              </p>
              <button 
                onClick={() => downloadDirectMock("GEO Citation Checklist")}
                className="text-xs text-teal-400 hover:underline flex items-center gap-1 font-mono hover:text-teal-300"
              >
                <span>Preview Document →</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/50 border border-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">3. AEO Checklist</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Structure your content explicitly to capture conversational query boxes, voice commands assistant sweeps, and featured snippets. Became the chosen reference source.
              </p>
              <button 
                onClick={() => downloadDirectMock("AEO Conversational Checklist")}
                className="text-xs text-teal-400 hover:underline flex items-center gap-1 font-mono hover:text-teal-300"
              >
                <span>Preview Document →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Score Tool - AI Answer Readiness Score */}
      <section id="readiness-calculator" className="py-16 border-t border-slate-900 bg-[#060c14]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Live Interactive Matrix</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">AI Answer Readiness Score</h2>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Are you prepared for the generative AI search paradigm? Run an instant test by checking off your implemented features to evaluate your performance weight.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-850 shadow-xl space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {readinessFactors.map((factor, idx) => (
                <div 
                  key={factor.key}
                  onClick={() => handleCheckboxChange(factor.key)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3 ${
                    readinessAnswers[factor.key] 
                      ? 'bg-teal-950/30 border-teal-500/40 text-white shadow-md shadow-teal-550/5' 
                      : 'bg-slate-900/40 border-slate-850 text-slate-350 hover:bg-slate-900/80'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                    readinessAnswers[factor.key] 
                      ? 'bg-teal-500 border-teal-400 text-slate-950' 
                      : 'border-slate-700 bg-slate-950'
                  }`}>
                    {readinessAnswers[factor.key] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-xs leading-relaxed font-medium">{factor.label}</span>
                </div>
              ))}
            </div>

            {/* Score Output Panel */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Computed Readiness Index</span>
                <p className="text-sm font-semibold text-white">
                  Score: <span className="text-teal-400 font-mono font-black text-lg">{scoreCount}</span> / 10
                </p>
              </div>

              {/* Readiness indicator Badge */}
              <div className="flex items-center gap-3">
                <div className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono font-black uppercase ${readinessColor}`}>
                  {readinessLabel}
                </div>
                
                <a 
                  href="#checklist-lead-capture" 
                  className="px-4.5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>Fix My Score</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-900">
              <span>0-3: Needs work • 4-6: Moderate • 7-9: Good • 10+: AI Search Ready</span>
              <span>Weights updated for Q2 2026</span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Checklists Sections Container */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          
          {/* CHECKLIST 1: FREE AI SEO CHECKLIST */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-950/50 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-mono font-bold">01</div>
              <h2 className="text-xl sm:text-2xl font-black text-white">Free AI SEO Checklist (2026)</h2>
            </div>
            
            {/* Subsection 1a: Technical Foundation */}
            <div className="p-6 rounded-2xl bg-[#060c14]/50 border border-slate-900 space-y-4">
              <h3 className="text-sm font-black text-teal-400 font-mono uppercase tracking-wider">I. Technical Foundation</h3>
              
              <div className="space-y-4">
                <div className="pb-2 border-b border-slate-900/60">
                  <span className="text-xs font-bold text-slate-300 block mb-2">Website Health Metrics</span>
                  {[
                    "Website loads in under 3 seconds",
                    "Mobile-friendly design and optimized viewports",
                    "HTTPS protection enabled globally",
                    "XML sitemap submitted and declared in robots file",
                    "Robots.txt correctly configured for crawler access",
                    "No broken links or unmanaged 404 response codes",
                    "Canonical tags correctly implemented for similar variations",
                    "Core Web Vitals passing (LCP, FID and CLS limits)"
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSeoTechnicalChecked(prev => ({ ...prev, [idx]: !prev[idx] }))}
                      className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        seoTechnicalChecked[idx] ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                      }`}>
                        {seoTechnicalChecked[idx] && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`${seoTechnicalChecked[idx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-300 block mb-2">Structured Data Schemas & Crawlability</span>
                  {[
                    "Organization Schema deployed with complete brand entities",
                    "Local Business Schema mapped (NAP consistency)",
                    "FAQ Schema nested inside primary key guides",
                    "Article and BlogPosting Schemas configured with active author nodes",
                    "Product Schemas configured with review ratings limits",
                    "Breadcrumb Schema structured on nested product trees",
                    "Crawlability check: No accidental index blockades (noindex tags)",
                    "Internal link architecture cleanly optimized without redirection loops"
                  ].map((item, idx) => {
                    const mappedIdx = idx + 10;
                    return (
                      <div 
                        key={mappedIdx}
                        onClick={() => setSeoTechnicalChecked(prev => ({ ...prev, [mappedIdx]: !prev[mappedIdx] }))}
                        className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          seoTechnicalChecked[mappedIdx] ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {seoTechnicalChecked[mappedIdx] && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`${seoTechnicalChecked[mappedIdx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Subsection 1b: Content Optimization */}
            <div className="p-6 rounded-2xl bg-[#060c14]/50 border border-slate-900 space-y-4">
              <h3 className="text-sm font-black text-emerald-400 font-mono uppercase tracking-wider">II. Content Optimization</h3>
              
              <div className="space-y-4">
                <div className="pb-2 border-b border-slate-900/60">
                  <span className="text-xs font-bold text-slate-300 block mb-2">AI-Friendly Content Structure & Semantics</span>
                  {[
                    "Clear H1, H2, H1 hierarchy with logical nesting properties",
                    "Short paragraphs (under 3 sentences) for seamless parsing",
                    "Consistent use of bullet lists and structured table blocks",
                    "Key industry definitions highlighted clearly near head paragraphs",
                    "Detailed FAQs with direct, conversational answers added",
                    "Concise summary sections included at the close of pages",
                    "Valid tables, statistics, and verifiable original data included",
                    "Entity-based semantic keywords covered completely in copy"
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSeoContentChecked(prev => ({ ...prev, [idx]: !prev[idx] }))}
                      className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        seoContentChecked[idx] ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                      }`}>
                        {seoContentChecked[idx] && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`${seoContentChecked[idx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-300 block mb-2">E-E-A-T and Topic Integrity</span>
                  {[
                    "Detailed author biography profiles with verified links",
                    "Robust team page indicating professional qualifications",
                    "Clear physical contact parameters listed on site header",
                    "Authentic client testimonials displaying real photos/profiles",
                    "Case studies demonstrating verified customer statistics",
                    "Official business credentials and certifications featured",
                    "Thematic topic clusters mapping out supporting guides",
                    "Highly structured context-relevant internal links deployed"
                  ].map((item, idx) => {
                    const mappedIdx = idx + 10;
                    return (
                      <div 
                        key={mappedIdx}
                        onClick={() => setSeoContentChecked(prev => ({ ...prev, [mappedIdx]: !prev[mappedIdx] }))}
                        className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          seoContentChecked[mappedIdx] ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {seoContentChecked[mappedIdx] && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`${seoContentChecked[mappedIdx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Subsection 1c: AI Visibility */}
            <div className="p-6 rounded-2xl bg-[#060c14]/50 border border-slate-900 space-y-4">
              <h3 className="text-sm font-black text-indigo-400 font-mono uppercase tracking-wider">III. AI Visibility & Brand Footprint</h3>
              
              <div className="space-y-4">
                {[
                  "Consistent brand name usage across external channels",
                  "Consistent NAP (Name, Address, Phone) citation formatting",
                  "Social and local business directory profiles sync updated",
                  "Brand mentions deployed in independent high-authority publications",
                  "Expert level content assets released weekly on domain",
                  "Comprehensive ultimate guides published for major product lines",
                  "Topical authority clusters locked in via related posts"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSeoVisibilityChecked(prev => ({ ...prev, [idx]: !prev[idx] }))}
                    className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                      seoVisibilityChecked[idx] ? 'bg-indigo-505 bg-indigo-500 border-indigo-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                    }`}>
                      {seoVisibilityChecked[idx] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className={`${seoVisibilityChecked[idx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button 
                onClick={() => downloadDirectMock("2026 AI SEO Checklist Guide")}
                className="px-4.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-805 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-teal-405" />
                <span>Download PDF Checklist 01</span>
              </button>
            </div>

          </div>

          {/* CHECKLIST 2: GEO CHECKLIST (GENERATIVE ENGINE OPTIMIZATION) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-emerald-450 text-xs font-mono font-bold">02</div>
              <h2 className="text-xl sm:text-2xl font-black text-white">GEO Checklist (Generative Engine Optimization)</h2>
            </div>

            {/* Subsection 2a: AI Citation Readiness */}
            <div className="p-6 rounded-2xl bg-[#060c14]/50 border border-slate-900 space-y-4">
              <h3 className="text-sm font-black text-teal-450 text-teal-400 font-mono uppercase tracking-wider">I. AI Citation Readiness & Graph Signals</h3>
              
              <div className="space-y-4">
                <div className="pb-2 border-b border-slate-900/60">
                  <span className="text-xs font-bold text-slate-300 block mb-2">Entity Mentions & Discoverability</span>
                  {[
                    "Organic brand mentions on authoritative corporate domains achieved",
                    "Featured quotes in industry trade news publications",
                    "Consistent profiles across major user review platforms",
                    "Included in high-ranking third-party buyer roundups and listicles",
                    "Clear company description declaring operational parameters",
                    "Highly defined about pages linking founders key profile nodes",
                    "Detailed specific landing structures for all service categories"
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setGeoCitationChecked(prev => ({ ...prev, [idx]: !prev[idx] }))}
                      className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        geoCitationChecked[idx] ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                      }`}>
                        {geoCitationChecked[idx] && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`${geoCitationChecked[idx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-300 block mb-2">Knowledge Graph Connections</span>
                  {[
                    "Organization schema deployed listing official sameAs coordinates",
                    "Active Wikidata profiles created and validated",
                    "DBpedia and alternative structured open databases referenced",
                    "All social coordinates synchronized and verified",
                    "Founder digital credentials cross-linked in schema models",
                    "Authoritative directories citations registered on trusted hubs"
                  ].map((item, idx) => {
                    const mappedIdx = idx + 10;
                    return (
                      <div 
                        key={mappedIdx}
                        onClick={() => setGeoCitationChecked(prev => ({ ...prev, [mappedIdx]: !prev[mappedIdx] }))}
                        className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          geoCitationChecked[mappedIdx] ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {geoCitationChecked[mappedIdx] && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`${geoCitationChecked[mappedIdx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Subsection 2b: LLM Specific Optimization */}
            <div className="p-6 rounded-2xl bg-[#060c14]/50 border border-slate-900 space-y-4">
              <h3 className="text-sm font-black text-emerald-450 text-emerald-400 font-mono uppercase tracking-wider">II. LLM Specific Alignments</h3>
              
              <div className="space-y-4">
                {[
                  "ChatGPT: Highly formatted service directories pages published",
                  "ChatGPT: Schema structures referencing trusted third-party directory listings",
                  "Gemini: Optimized, active and fully resolved Google Business Profiles",
                  "Gemini: Strict sitemaps index configuration synced in GSC Console",
                  "Claude: Long-form highly detailed educational blueprints published",
                  "Claude: Original whitepaper assets containing deep industry data tables",
                  "Perplexity: Real-time active citations cataloged in directories and press channels"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setGeoLlmChecked(prev => ({ ...prev, [idx]: !prev[idx] }))}
                    className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                      geoLlmChecked[idx] ? 'bg-emerald-505 bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                    }`}>
                      {geoLlmChecked[idx] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className={`${geoLlmChecked[idx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 2c: GEO Content Strategy */}
            <div className="p-6 rounded-2xl bg-[#060c14]/50 border border-slate-900 space-y-4">
              <h3 className="text-sm font-black text-indigo-405 text-indigo-400 font-mono uppercase tracking-wider">III. GEO Content Strategy</h3>
              
              <div className="space-y-4">
                {[
                  "Create ultimate guides comprehensively covering single subjects",
                  "Publish original surveys, statistics charts and reports monthly",
                  "Draft direct competitor comparison models indicating feature weights",
                  "Publish consistent weekly technical blog posts detailing solutions",
                  "Coordinate digital PR articles mapping backlink entity cues",
                  "Secure active features on podcasts and expert roundup posts",
                  "Establish LinkedIn executive authority pipelines regularly"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setGeoStrategyChecked(prev => ({ ...prev, [idx]: !prev[idx] }))}
                    className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                      geoStrategyChecked[idx] ? 'bg-indigo-500 border-indigo-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                    }`}>
                      {geoStrategyChecked[idx] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className={`${geoStrategyChecked[idx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button 
                onClick={() => downloadDirectMock("2026 GEO Citation Checklist Guide")}
                className="px-4.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-805 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-teal-405" />
                <span>Download PDF Checklist 02</span>
              </button>
            </div>

          </div>

          {/* CHECKLIST 3: AEO CHECKLIST (ANSWER ENGINE OPTIMIZATION) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/50 border border-indigo-505 flex items-center justify-center text-indigo-400 text-xs font-mono font-bold">03</div>
              <h2 className="text-xl sm:text-2xl font-black text-white">AEO Checklist (Answer Engine Optimization)</h2>
            </div>

            {/* Subsection 3a: Answer Ready Content */}
            <div className="p-6 rounded-2xl bg-[#060c14]/50 border border-slate-900 space-y-4">
              <h3 className="text-sm font-black text-teal-400 font-mono uppercase tracking-wider">I. Answer-Ready Content Formulas</h3>
              
              <div className="space-y-4">
                <div className="pb-2 border-b border-slate-900/60">
                  <span className="text-xs font-bold text-slate-300 block mb-2">Question-Based Content Structures</span>
                  {[
                    "What is...? (Clear definition targeting featured snippets)",
                    "How does...? (Process guidelines or workflows checklists)",
                    "Why is...? (Logical explanations with direct causal listings)",
                    "When should...? (Conditional triggers and timing schedules)",
                    "Best practices for... (Structured numbered layout suggestions)",
                    "Step-by-step guides formatted using semantic HTML subheaders"
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setAeoAnswersChecked(prev => ({ ...prev, [idx]: !prev[idx] }))}
                      className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        aeoAnswersChecked[idx] ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                      }`}>
                        {aeoAnswersChecked[idx] && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`${aeoAnswersChecked[idx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-b border-slate-900/60">
                  <span className="text-xs font-bold text-slate-300 block mb-2">Featured Snippet Optimization</span>
                  {[
                    "Definition blocks keeping paragraph length strictly between 40-60 words",
                    "Numbered lists outlining chronological solutions steps",
                    "Active tables displaying structured data sets comparisons",
                    "FAQ sections addressing standard industry doubts directly",
                    "Voice Search: Conversational, friendly tone matching long-tail intent",
                    "Voice Search: Simple vocabulary targeting readable grades ranges"
                  ].map((item, idx) => {
                    const mappedIdx = idx + 10;
                    return (
                      <div 
                        key={mappedIdx}
                        onClick={() => setAeoAnswersChecked(prev => ({ ...prev, [mappedIdx]: !prev[mappedIdx] }))}
                        className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          aeoAnswersChecked[mappedIdx] ? 'bg-teal-500 border-teal-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {aeoAnswersChecked[mappedIdx] && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`${aeoAnswersChecked[mappedIdx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-350 block mb-2.5 text-indigo-400">FAQ Optimization & Schemas Deployment</span>
                  <p className="text-xs text-slate-400 font-light mb-3 leading-relaxed">
                    Ensure each high-importance directory page contains FAQs targeting questions like: "What is AI SEO?", "What is GEO?", "What is AEO?", "How does AI SEO work?", and "What are the benefits of GEO?"
                  </p>
                  
                  {[
                    "FAQ Schema (JSON-LD validation checks green)",
                    "HowTo Schema structured with active sequential image steps",
                    "Organization & LocalBusiness schemas declared simultaneously",
                    "Validated Review and Article markup models embedded"
                  ].map((item, idx) => {
                    const mappedIdx = idx + 20;
                    return (
                      <div 
                        key={mappedIdx}
                        onClick={() => setAeoAnswersChecked(prev => ({ ...prev, [mappedIdx]: !prev[mappedIdx] }))}
                        className="flex items-start gap-2.5 py-1.5 cursor-pointer text-xs"
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          aeoAnswersChecked[mappedIdx] ? 'bg-indigo-500 border-indigo-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {aeoAnswersChecked[mappedIdx] && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`${aeoAnswersChecked[mappedIdx] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button 
                onClick={() => downloadDirectMock("2026 AEO Answer Readiness Checklist")}
                className="px-4.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-805 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-teal-405" />
                <span>Download PDF Checklist 03</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Why Download these checklists? Accent Box */}
      <section className="py-12 bg-[#070e1a]/80 border-t border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white">Why Download These Checklists?</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Developed by the senior core systems analytics division at AKGLS Group, these files provide step-by-step instructions, JSON code templates, and sitemaps structures to citation-proof your business in 2026.
              </p>
              <div className="space-y-2 pt-1 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-450 shrink-0" />
                  <span>Improve Google organic rankings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-450 shrink-0" />
                  <span>Increase ChatGPT, Claude visibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-450 shrink-0" />
                  <span>Build durable knowledge graph authority</span>
                </div>
              </div>
            </div>

            {/* Visual Download Counter Mock */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 text-center space-y-3">
              <div className="text-3xl font-extrabold text-white font-mono">14,284+</div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Downloads Globally</p>
              <div className="flex justify-center -space-x-1 overflow-hidden py-1">
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-teal-550 border border-slate-800 text-[10px] font-bold text-slate-950 flex items-center justify-center font-mono">MD</div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-emerald-550 border border-slate-800 text-[10px] font-bold text-slate-950 flex items-center justify-center font-mono">JS</div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-[#0c1624] border border-slate-800 text-[10px] font-bold text-slate-350 flex items-center justify-center font-mono">+81</div>
              </div>
              <p className="text-[10.5px] text-teal-400 leading-relaxed font-light">
                Secure your authority references checklist. Download and protect your brand citations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation & Consultation request block */}
      <section id="checklist-lead-capture" className="py-20 bg-gradient-to-b from-[#03060c] to-[#040914] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Row */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Future-Proof Your Growth</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Ready to Improve Your AI Search Visibility?</h2>
              
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-light">
                Get a free AI SEO, GEO, and AEO audit from AKGLS Group and discover how your website performs across Google, ChatGPT, Gemini, Claude, and other AI search platforms.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850 space-y-3 text-xs leading-relaxed">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">100% Secure & HIPAA Compliant</span>
                </div>
                <p className="text-[11px] text-slate-500 font-light">
                  We value your information assets. No spam. Instant setup guidelines and diagnostic checklist maps delivered safely.
                </p>
              </div>

              {/* Direct Support coordinates */}
              <div className="pt-2 space-y-2 font-mono text-xs text-slate-450 border-t border-slate-950">
                <p>Support Hotline: {CONTACT_NUMBER}</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                  Quick Telegram / WhatsApp Consultation →
                </a>
              </div>
            </div>

            {/* Right Form column */}
            <div id="audit-form" className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-teal-500/10 shadow-2xl space-y-5">
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-base">Request Free AI Citation Checklist Bundle</h3>
                  <p className="text-[11px] text-slate-500">Provide domain criteria to unlock full PDF files instantly.</p>
                </div>

                <AnimatePresence>
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 rounded-xl bg-teal-950/20 border border-teal-500/20 text-center space-y-4"
                    >
                      <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-white">Access Approved Successfully</h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          Your PDF bundle payload is compiling. Click below to download your checklist or check your inbox coordinates shortly.
                        </p>
                      </div>

                      <div className="pt-2 space-y-2">
                        {[
                          "All-in-One AI Search Checklist Suite (PDF)",
                          "GEO Citation Schema Templates (JSON-LD)",
                          "Featured Snippets FAQ Blueprint"
                        ].map((doc, dIdx) => (
                          <button 
                            key={dIdx}
                            onClick={() => downloadDirectMock(doc)}
                            className="w-full text-left p-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-805 text-xs text-emerald-450 flex items-center justify-between font-mono hover:text-emerald-300 transition-all"
                          >
                            <span className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-emerald-500" />
                              <span className="text-slate-320">{doc}</span>
                            </span>
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        ))}
                      </div>

                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="text-[10.5px] font-mono text-slate-400 hover:underline hover:text-teal-400 block pt-1 mx-auto"
                      >
                        Reset Form Criteria
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase">Name</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your full name" 
                          className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none placeholder:text-slate-600 transition-all"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase">Company Name</label>
                          <input 
                            type="text" 
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            placeholder="e.g. Acme SaaS" 
                            className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none placeholder:text-slate-600 transition-all"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase">Website URL</label>
                          <input 
                            type="url" 
                            value={formData.website}
                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                            placeholder="e.g. https://acmesite.com" 
                            className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none placeholder:text-slate-600 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase">Email Address</label>
                          <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="e.g. you@company.com" 
                            className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none placeholder:text-slate-600 transition-all"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase">Phone Number</label>
                          <input 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="e.g. +1 555-019-204" 
                            className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none placeholder:text-slate-600 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase">Monthly budget</label>
                          <select 
                            value={formData.budget}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none transition-all"
                          >
                            <option value="$1,000 - $3,000 /mo">$1,000 - $3,000 /mo</option>
                            <option value="$3,000 - $5,000 /mo">$3,000 - $5,000 /mo</option>
                            <option value="$5,000 - $10,000 /mo">$5,000 - $10,000 /mo</option>
                            <option value="$10,000+ /mo">$10,000+ /mo</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase">Primary Goal</label>
                          <select 
                            value={formData.primaryGoal}
                            onChange={(e) => setFormData({...formData, primaryGoal: e.target.value})}
                            className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none transition-all"
                          >
                            <option value="AI SEO Optimization">AI SEO Optimization</option>
                            <option value="Generative Engine (GEO)">Generative Engine (GEO)</option>
                            <option value="Answer Engine (AEO)">Answer Engine (AEO)</option>
                            <option value="Traditional SEO & Link Building">Traditional SEO & Links</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-3">
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-555 bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <span>Requesting Access Auth...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-slate-950 fill-slate-950" />
                              <span>Get My Free AI Visibility Audit & PDFs</span>
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

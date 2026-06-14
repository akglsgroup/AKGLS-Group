import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Link2, Search, Code, CheckCircle2, Shield, 
  MessageSquare, Terminal, ChevronDown, Check, Compass, 
  Award, Globe, ArrowRight, Activity, Copy, Cpu, BookOpen,
  FileText, Star, Briefcase, Zap, HelpCircle
} from 'lucide-react';

interface AiCitationBuildingPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Citation Building Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Increase the likelihood that AI search engines and Large Language Models (LLMs) reference your brand, website, content, products, or expertise within generated responses."
}`,
  breadcrumb: `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://akglsgroup.com/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Services",
    "item": "https://akglsgroup.com/seo-services"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "AI Citation Building Services",
    "item": "https://akglsgroup.com/ai-citation-building-services/"
  }]
}`
};

export default function AiCitationBuildingPage({ onBackToHome, openProposalForm }: AiCitationBuildingPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "AI Citation Building Services | Get Cited By ChatGPT & Gemini | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Interactive Calculator State
  const [brandName, setBrandName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [wikidataStatus, setWikidataStatus] = useState('none');
  const [pressCoverage, setPressCoverage] = useState('low');
  const [hasSchema, setHasSchema] = useState('no');
  const [originalResearch, setOriginalResearch] = useState('none');
  const [score, setScore] = useState<number | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationFeedback, setEvaluationFeedback] = useState<string>('');

  const calculateCitationStrength = (e: FormEvent) => {
    e.preventDefault();
    if (!brandName.trim()) return;

    setIsEvaluating(true);
    setTimeout(() => {
      let baseScore = 20;

      //wikidata weights
      if (wikidataStatus === 'linked') baseScore += 25;
      else if (wikidataStatus === 'unlinked') baseScore += 10;

      //press weights
      if (pressCoverage === 'high') baseScore += 25;
      else if (pressCoverage === 'medium') baseScore += 15;

      //schema weights
      if (hasSchema === 'yes') baseScore += 15;

      //research weights
      if (originalResearch === 'frequent') baseScore += 15;
      else if (originalResearch === 'occasional') baseScore += 8;

      baseScore = Math.min(baseScore, 98);
      setScore(baseScore);

      if (baseScore < 45) {
        setEvaluationFeedback("Critical citation gap identified. Your brand has a weak entity footprint, indicating high probability of being completely omitted inside ChatGPT and Perplexity citation summaries. Immediate structural markup and digital PR alignment are recommended.");
      } else if (baseScore < 75) {
        setEvaluationFeedback("Moderate citation coverage. Your brand is occasionally referenced for brand-specific searches but fails to surface on category searches like 'best service providers'. Injecting Knowledge Graph mapping will significantly scale results.");
      } else {
        setEvaluationFeedback("Excellent conversational footprint. Your entity schema and high-authority digital PR references place your brand in the top tier of referenceable nodes. Focused topical cluster scaling will lock in your competitive edge.");
      }

      setIsEvaluating(false);
    }, 1200);
  };

  // FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Schema copy indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const copySchemaText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 2000);
  };

  const faqs = [
    {
      q: "What is an AI Citation?",
      a: "An AI citation occurs when a conversational AI engine (like ChatGPT, Gemini, or Perplexity) generates a highly factual answer and embeds clickable footnotes or active hyperlinked citations referencing your company name, product info, or expert research articles."
    },
    {
      q: "How is AI Citation Building different from traditional Link Building?",
      a: "Traditional link building concentrates mostly on domain authority scores and keyword anchors to satisfy the PageRank algorithm. AI Citation Building focuses on establishing entity-level authority, brand relationships, semantic co-occurrences in trusted media, structured schema maps, and data feeds optimized for real-time model extraction modules."
    },
    {
      q: "Can ChatGPT cite my website directly?",
      a: "Yes. Using real-time web querying tools, ChatGPT extracts data from highly indexed, well-formatted, and trusted sources. By deploying our entity layouts and building citations across specific platforms that feed the LLM's retrieval window, your website is cited as a dynamic source."
    },
    {
      q: "How long does it take to see improvements in AI citations?",
      a: "Most campaigns start outputting measurable citations and references within 3 to 6 months, as search engine LLMs crawl trusted directories, semantic nodes, press networks, and update their localized reference weights."
    },
    {
      q: "Do AI citations improve traditional organic Google SEO?",
      a: "Absolutely. The precise entity structure, authoritative mentions in news platforms, original statistics publications, and validated schema markup required for AI also strongly improve traditional Google trust metrics, driving higher domain rankings across normal search pages."
    }
  ];

  return (
    <div id="ai-citation-services-container" className="min-h-screen bg-[#05080f] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Absolute Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-emerald-950/10 via-teal-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-[600px] left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[1600px] right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Header Block */}
      <header id="citation-hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Back button link */}
          <button 
            id="citation-back-btn"
            onClick={onBackToHome}
            className="group mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/60 transition-all text-xs font-mono text-slate-400 hover:text-white"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-45 transition-transform" />
            <span>← Back to Primary Menu</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div id="citation-badge" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>AI Authority & Citation Services</span>
              </div>

              <h1 id="citation-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                AI Citation <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">Building Services</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
                As AI-powered search engines become the primary source of information for millions of users, being visible in traditional search results is no longer enough. Today, businesses need to be cited, referenced, and recommended by AI systems such as ChatGPT, Gemini, Claude, Perplexity, Copilot, and Google AI Overviews.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                AKGLS Group provides specialized AI Citation Building Services designed to increase your brand's authority, trust, and visibility across AI-powered search ecosystems. Our strategies help establish your website as a credible source that AI models are more likely to reference when generating answers.
              </p>

              {/* Action Rows */}
              <div id="citation-cta-row" className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => {
                    const el = document.getElementById('citation-estimator-terminal');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-400/20 flex items-center gap-2"
                >
                  <span>Evaluate Your AI Citation Score</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    if (openProposalForm) {
                      openProposalForm();
                    } else {
                      const el = document.getElementById('consultation-anchor-link');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-705 text-white font-medium text-sm transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Request Citation Audit</span>
                </button>
              </div>

              {/* Quick Highline Statistics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900 max-w-lg">
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white">4.8x</p>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">More Citations</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-emerald-400">100%</p>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Context Compliant</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-teal-400">GEO</p>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Strategic Fit</p>
                </div>
              </div>

            </div>

            {/* Right Column Layout: Animated RAG retrieval visualizer */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-850 shadow-2xl relative">
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CITATION SEARCH TRACER</span>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <span className="text-[11px] font-mono text-slate-450">Active Engine: Perplexity API</span>
                    <span className="text-[10px] text-emerald-500 font-mono bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/10">Connected</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-slate-300">
                    <div className="p-3 bg-slate-900 rounded-lg">
                      <span className="text-[9px] text-slate-500 block">PROMPT SENT</span>
                      <p className="text-indigo-200 mt-1">"List the top firms with certified expertise in deploying B2B software architectures and tech integrations."</p>
                    </div>

                    <div className="p-3 bg-emerald-950/10 border border-emerald-500/10 rounded-lg space-y-2">
                      <span className="text-[9px] text-emerald-400 block font-bold">SYNTHESIZED AI RESPONSE</span>
                      <p className="font-sans text-xs sm:text-[12.5px] leading-relaxed text-slate-350">
                        Based on industry publications and database records, companies like <strong className="text-white font-medium">AKGLS Group [1]</strong> and allied partners are cited as top-tier architects for scalable software. They are frequently highlighted for original research studies [2] in IoT markets...
                      </p>
                      
                      <div className="border-t border-slate-900 pt-2 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[9px] text-slate-500">Citations:</span>
                        <span className="text-[9px] bg-slate-900 px-1.5 py-0.5 rounded text-emerald-400 hover:underline cursor-pointer font-sans">[1] akglsgroup.com/services</span>
                        <span className="text-[9px] bg-slate-900 px-1.5 py-0.5 rounded text-emerald-400 hover:underline cursor-pointer font-sans">[2] IoT Case Study</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-950/20 border border-indigo-500/10 rounded-lg flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                    <p className="text-[10.5px] text-indigo-250 leading-relaxed font-light">
                      LLMs retrieve dynamic assets across structured search crawlers. Getting your brand recognized in this window drives high-intent client traffic.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Section: What is AI Citation Building */}
      <section id="what-is-citation" className="py-20 border-t border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">// Strategic Analysis</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">What is AI Citation Building?</h2>
              
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                AI Citation Building is the strategic process of enhancing the likelihood of your brand, content, product catalog, or executive leadership being cited and hyperlinked inside generative search engines (LLMs).
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                While yesterday's backlink building chased general third-party rankings, AI Citation Building targets high-confidence semantic entities, knowledge graphs, natural NLP answers, and authoritative publications utilized during standard model inference runs.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Fostering recognizable Brand Entities inside internet archives",
                  "Establishing contextual schema mapping across structured files",
                  "Building authoritative digital PR placements on trusted domains",
                  "Optimizing original reference statistics for high RAG recall weights"
                ].map((pt, pIdx) => (
                  <div key={pIdx} className="flex gap-2 items-start text-xs text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-xl border border-slate-900 bg-slate-950/40 space-y-3 hover:border-slate-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Entity Recognition</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Aligning critical organization, founder, and location identifiers as machine-readable keys so search models map credentials confidently without ambiguity.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-900 bg-slate-950/40 space-y-3 hover:border-slate-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-teal-950/40 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Knowledge Graphs</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Injecting your business as a validated authority connection on prominent structured platforms that supply fundamental knowledge maps to major LLMs.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-900 bg-slate-950/40 space-y-3 hover:border-slate-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Authority Mentions</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Acquiring citations in high-authority tech reports, trade directories, and industry guides that AI web-search layers crawl when retrieving solutions.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-900 bg-slate-950/40 space-y-3 hover:border-slate-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Semantic Rich Data</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Structuring original figures, guides, FAQs, and Q&A documents explicitly prepared to satisfy the real-time context windows of conversational engines.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why AI Citations Matter */}
      <section id="why-citations-matter" className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">// Search Evolution</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Why AI Citations Matter</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              User search paradigms are actively shifting. Instead of clicking lists of basic links, prospects trust comprehensive answers curated directly from conversational agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e19] space-y-4">
              <div className="text-2xl font-black text-emerald-400 font-mono">01</div>
              <h3 className="text-sm font-bold text-white">AI Search Displacement</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                More than 40% of search intents are transitioning away from blue-link pages into conversational chat modules. If your brand is not recognized as a source, you miss prospective clients completely.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e19] space-y-4">
              <div className="text-2xl font-black text-teal-400 font-mono">02</div>
              <h3 className="text-sm font-bold text-white">Direct Dynamic Footnotes</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Platforms like Perplexity and ChatGPT Search display direct citation badges. When the user reviews recommended services, clickable references are generated from authoritative index pages.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#070e19] space-y-4">
              <div className="text-2xl font-black text-indigo-400 font-mono">03</div>
              <h3 className="text-sm font-bold text-white">Consolidated Credibility</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                To satisfy Google's E-E-A-T and LLM trust filters, a brand needs validated co-occurrences of name, founders, and services in industry articles. This establishes defensible market positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section: AI Citation Calculator */}
      <section id="citation-estimator-terminal" className="py-20 bg-[#08111d] border-t border-b border-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Interactive Audit Application</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">AI Citation Probability Calculator</h2>
            <p className="text-xs text-slate-400 font-light">
              Submit your domain credentials to compute your predicted reference viability score inside major LLM search crawlers.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/60 border border-slate-850 shadow-2xl">
            <form onSubmit={calculateCitationStrength} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Brand Name</label>
                  <input 
                    type="text" 
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Acme Tech Solutions" 
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-slate-600"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Website URL</label>
                  <input 
                    type="url" 
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="e.g. https://example.com" 
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-slate-600"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Wikidata / DbPedia Entity Presence</label>
                  <select 
                    value={wikidataStatus}
                    onChange={(e) => setWikidataStatus(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option value="none">None (No existing Wikidata, Wikipedia or DBpedia profiles)</option>
                    <option value="unlinked">Unlinked Profile (Wikidata profile exists, but not referenced by schemas)</option>
                    <option value="linked">Linked Profile ( Wikidata page exists, properly linked in SameAs data)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">High Authority Press Mentions</label>
                  <select 
                    value={pressCoverage}
                    onChange={(e) => setPressCoverage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option value="low">Low (Fewer than 5 mentions inside niche directories/blogs)</option>
                    <option value="medium">Medium (Steady coverage in mid-tier trade news / releases)</option>
                    <option value="high">High (Featured on Forbes, TechCrunch, Yahoo, or major industry hubs)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Advanced Service & Organization Schema</label>
                  <select 
                    value={hasSchema}
                    onChange={(e) => setHasSchema(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option value="no">No (Standard Meta keywords or legacy JSON schema only)</option>
                    <option value="yes">Yes (Fully parsed JSON-LD with entities, authors, and relations)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Original Research & Statistics Publications</label>
                  <select 
                    value={originalResearch}
                    onChange={(e) => setOriginalResearch(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  >
                    <option value="none">Never (We publish default marketing offerings only)</option>
                    <option value="occasional">Occasional (We issue 1-2 proprietary case studies/whitepapers a year)</option>
                    <option value="frequent">Frequent (We regularly launch original data indexes, charts, surveys)</option>
                  </select>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-900 flex justify-end">
                <button 
                  type="submit"
                  disabled={isEvaluating}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-550 to-teal-550 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {isEvaluating ? (
                    <>
                      <Activity className="w-3.5 h-3.5 animate-spin" />
                      <span>Analyzing Semantics...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
                      <span>Estimate Citation Score</span>
                    </>
                  )}
                </button>
              </div>

            </form>

            <AnimatePresence>
              {score !== null && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="mt-8 p-5 sm:p-6 rounded-xl bg-[#091626] border border-emerald-500/10 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Predicted Citation Strength Index</h4>
                      <p className="text-sm font-semibold text-white mt-1">For <span className="text-emerald-450">{brandName}</span></p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text font-mono inline-block">
                        {score}%
                      </span>
                    </div>
                  </div>

                  {/* Score Bar Gauge */}
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${score}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light p-3 bg-slate-950/40 rounded-lg border border-slate-900">
                    <strong className="text-emerald-450 block font-bold mb-1 font-mono uppercase text-[10px]">ANALYSIS FEEDBACK</strong>
                    {evaluationFeedback}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs text-slate-450 font-mono">
                    <span>Evaluated Engine Weights: 7 target indices parsed</span>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('consultation-anchor-link');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>Request Detailed Manual Audit</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* Structured Services breakdown */}
      <section id="citation-services-offered" className="py-20 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">// Comprehensive Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Our AI Citation Building Services</h2>
            <p className="text-xs sm:text-sm text-slate-440 font-light leading-relaxed">
              We leverage advanced technical workflows and authoritative semantic networks to establish clear entity references for conversational AI algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-xl border border-slate-900 bg-[#060c14] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">AI Visibility Audit</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                We crawl ChatGPT, Perplexity, Claude, and Gemini with specialized prompts. We analyze where your brand has missing citation nodes and establish a rapid optimization roadmap.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#060c14] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-950/40 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Entity Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Creating precise schema relations. We map organization attributes, founders, and services to clarify semantic dependencies so AI systems read your structure instantly.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#060c14] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Link2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Digital PR & Authority</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                We generate organic brand mentions and quotes in major publications and high-traffic directories that feed the real-time retrieval indexing sweeps of big language models.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#060c14] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Knowledge Graph Linkage</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Consolidating brand entity profiles on Wikidata, official databases, and registry indices, providing external proof files that validate company credentials.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#060c14] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-950/40 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">AI-Friendly Content</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Drafting rich research data pages, tables, FAQs, statistics clusters, and expert reviews structured precisely for RAG models to select and append as citations.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-900 bg-[#060c14] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-950/40 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Topical Authority Building</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Structuring deep pillar pages and related content clusters so your domain represents an unquestionable knowledge cluster for high-intent industry topics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Platforms Matrix Grid */}
      <section id="citation-platforms" className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">// Engine Optimizations</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">AI Platforms We Optimize For</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              We focus on matching the unique retrieval, crawling, and grounding architectures of leading conversational tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-xl border border-slate-900 bg-slate-950/80 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                <span>OPENAI SYSTEM</span>
                <span>ChatGPT</span>
              </div>
              <h3 className="font-bold text-white text-base">ChatGPT Citations</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Structuring clean RDF databases and organization linkages to increase references within ChatGPT Search interface dialog cards.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-900 bg-slate-950/80 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-teal-405 text-teal-400">
                <span>GOOGLE AI SYSTEM</span>
                <span>Gemini</span>
              </div>
              <h3 className="font-bold text-white text-base">Gemini Citations</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Broadening E-E-A-T signals, knowledge profiles, and local entity structures to dominate recommendation boxes in AI Overviews.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-900 bg-slate-950/80 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-indigo-400">
                <span>ANTHROPIC SYSTEM</span>
                <span>Claude</span>
              </div>
              <h3 className="font-bold text-white text-base">Claude Citations</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Developing comprehensive content blueprints, industry whitepapers, and guides that address Claude's premium data-gathering.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-900 bg-slate-950/80 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
                <span>CONVERSATIONAL INDEX</span>
                <span>Perplexity</span>
              </div>
              <h3 className="font-bold text-white text-base">Perplexity Citations</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Establishing topical authority indexes and real-time directory presence to claim active hyperlinked citations inside search reports.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-900 bg-slate-950/80 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                <span>MICROSOFT COSYSTEM</span>
                <span>Copilot</span>
              </div>
              <h3 className="font-bold text-white text-base">Copilot Citations</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Formatting LinkedIn profiles, structured company data, and Bing Search mappings to achieve top recommendations in Copilot tasks.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-900 bg-slate-950/80 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-purple-400">
                <span>REAL-TIME X INDEX</span>
                <span>Grok</span>
              </div>
              <h3 className="font-bold text-white text-base">Grok Citations</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Structuring active news highlights, structured social posts, and live releases that feed into Grok's real-time algorithm sweep.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries Matrix */}
      <section id="citation-industries" className="py-20 bg-slate-950/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">// Vertical Adaptation</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Industries We Serve</h2>
              <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-light">
                AI search behavior impacts decision-making. We construct tailored authority models across various sectors seeking high-value visibility.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "SaaS & Tech Companies", "Software Builders", "IoT Innovators", 
                  "Technology Startups", "Healthcare Providers", "Legal Practices", 
                  "E-commerce Brands", "Consulting Agencies"
                ].map((ind, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-900/60 border border-slate-800 text-slate-300 rounded text-xs">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation Lifecycle Flow */}
            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-850 space-y-6">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider block">// Campaign Milestones</span>
                <h3 className="text-base font-bold text-white">Our AI Citation Building Process</h3>

                <div className="space-y-4">
                  {[
                    { phase: "Phase 1: AI Citation Audit", desc: "Identifying existing crawl indexes, assessing current brand mention weights, mapping entity connections, and locating critical citation gaps." },
                    { phase: "Phase 2: Strategy Drafting", desc: "Engineering custom roadmaps outlining authority placements, structural schema additions, and target publications." },
                    { phase: "Phase 3: Deep Execution", desc: "Integrating JSON-LD, optimizing founder/company entities on Wikidata, and creating search-friendly datasets." },
                    { phase: "Phase 4: Authority Outreach", desc: "Securing authoritative features, digital PR articles, guest reviews, and trusted resource backlinks." },
                    { phase: "Phase 5: Real-time Analysis", desc: "Tracking conversational response updates, estimating citation probability shifts, and optimizing semantic inputs." }
                  ].map((p, pIdx) => (
                    <div key={pIdx} className="flex gap-4 items-start pb-4 border-b border-slate-900 last:border-0 last:pb-0">
                      <div className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-450 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {pIdx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{p.phase}</h4>
                        <p className="text-[11.5px] text-slate-400 mt-0.5 leading-relaxed font-light">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advanced Schema Markup Developer Sandbox */}
      <section id="citation-schema-developer" className="py-20 border-t border-slate-900 bg-[#06101c]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">// Schema Playground</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Entity JSON-LD Blueprints</h2>
            <p className="text-xs text-slate-400 font-light">
              Copy and deploy specialized data markup to feed search crawlers with precise semantic knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service Schema Sandbox */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-850 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-emerald-400 font-bold">1. Service Schema Markup</span>
                <button 
                  onClick={() => copySchemaText(schemaTemplates.service, 'service')}
                  className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-850 hover:bg-slate-800 text-[10px] font-mono text-slate-320 flex items-center gap-1.5 transition-all"
                >
                  {schemaCopied === 'service' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy JSON-LD</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Applies correct machine-readable indexing parameters representing customized citation operations. Add this to your header.
              </p>
              <div className="p-3 rounded bg-slate-900 border border-slate-850/80 max-h-[180px] overflow-y-auto">
                <pre className="text-[10px] font-mono text-indigo-200 leading-snug whitespace-pre-wrap shrink-0">
                  {schemaTemplates.service}
                </pre>
              </div>
            </div>

            {/* Breadcrumb Schema Sandbox */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-850 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-emerald-400 font-bold">2. BreadcrumbList Markup</span>
                <button 
                  onClick={() => copySchemaText(schemaTemplates.breadcrumb, 'breadcrumb')}
                  className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-850 hover:bg-slate-800 text-[10px] font-mono text-slate-320 flex items-center gap-1.5 transition-all"
                >
                  {schemaCopied === 'breadcrumb' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy JSON-LD</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Instructs LLM extraction crawlers on site navigation architecture. Strengthens category relations.
              </p>
              <div className="p-3 rounded bg-slate-900 border border-slate-850/80 max-h-[180px] overflow-y-auto">
                <pre className="text-[10px] font-mono text-indigo-200 leading-snug whitespace-pre-wrap shrink-0 font-sans">
                  {schemaTemplates.breadcrumb}
                </pre>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="citation-faq" className="py-20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-16">
            <HelpCircle className="w-8 h-8 text-emerald-400 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Understand the core mechanics powering AI citation strategies.
            </p>
          </div>

          <div id="faq-interactive-list" className="space-y-4">
            {faqs.map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-900 bg-[#06101c]/20 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 text-white hover:text-emerald-400 transition-colors"
                  >
                    <span className="text-xs sm:text-[13px] font-bold">{f.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pt-1 text-xs text-slate-400 leading-relaxed font-light border-t border-slate-900 bg-slate-950/40">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Ready to Increase Your AI Search Visibility / Consultation & Form */}
      <section id="consultation-anchor-link" className="py-20 border-t border-slate-900 bg-gradient-to-t from-emerald-950/10 via-slate-950/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-mono text-emerald-405 text-emerald-400 uppercase tracking-widest font-bold">// Strategic Leap</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-snug">
            Ready to Get Cited by ChatGPT, Gemini, Claude & Perplexity?
          </h2>
          <p className="text-sm text-slate-350 max-w-2xl mx-auto font-light leading-relaxed">
            Establishing defensible AI references today grants a massive organic advantage as search behaviour transitions. Apply now for a complimentary visibility assessment with our specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              onClick={() => {
                if (openProposalForm) {
                  openProposalForm();
                } else {
                  const el = document.getElementById('audit-form') || document.querySelector('form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all"
            >
              Book Your Free AI Citation Audit
            </button>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-850 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Speak with an AI Expert</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 font-semibold" />
            </a>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-900 text-[11px] font-mono text-slate-500">
            <span>✓ Free AI Visibility Audit</span>
            <span>✓ Custom AI Citation Roadmap</span>
            <span>✓ Entity Knowledge Graphing Included</span>
          </div>

        </div>
      </section>

    </div>
  );
}

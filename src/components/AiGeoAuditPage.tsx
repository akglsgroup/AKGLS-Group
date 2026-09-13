import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, Sparkles, Bot, ArrowLeft, ArrowRight, CheckCircle2, 
  AlertTriangle, HelpCircle, ChevronRight, ShieldCheck, Database, 
  Cpu, FileCode, BookOpen, Layers, BarChart3, MessageSquare, 
  ExternalLink, Download, Send, Check
} from 'lucide-react';
import GeoAuditScanner from './GeoAuditScanner';

interface AiGeoAuditPageProps {
  onBackToTools: () => void;
  onNavigateToTool: (toolId: string) => void;
  onOpenProposal?: (prefill?: any) => void;
}

export default function AiGeoAuditPage({ onBackToTools, onNavigateToTool, onOpenProposal }: AiGeoAuditPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Free AI & GEO Audit Scanner | Generative Engine Optimization Scorecard | AKGLS Group";
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Generative Engine Optimization (GEO) and why is it replacing traditional SEO?",
      a: "Generative Engine Optimization (GEO) is the discipline of optimizing digital content and entity architecture so that AI search engines—including ChatGPT Search, Perplexity AI, Google Gemini, and Claude—cite and recommend your brand in conversational answers. Traditional SEO targeted keyword positions in a 10-blue-link SERP; GEO targets LLM vector embedding similarity, factual entity verification in Wikidata, and citation inclusion in generated synthetic responses."
    },
    {
      q: "How do LLMs like ChatGPT Search and Perplexity decide which brands to cite?",
      a: "Generative search engines utilize Retrieval-Augmented Generation (RAG). When a user submits a prompt, the engine scrapes search indexes, extracts relevant text chunks, and verifies the entity's factual credibility using Schema.org graphs (like Organization and sameAs triples). Websites that feature structured Q&A headers, concise 40-word definitions, clear author credentials, and unblocked crawler access (GPTBot, PerplexityBot) are exponentially more likely to be cited as primary sources."
    },
    {
      q: "What are the most common reasons a website receives a low GEO Readiness Score?",
      a: "The four most frequent culprits are: (1) Missing or incomplete Schema.org/Organization and FAQPage JSON-LD markups, (2) Lack of authoritative 'sameAs' entity links to Wikidata or Wikipedia, (3) Disallowing AI web crawlers (GPTBot, PerplexityBot) inside robots.txt, and (4) Vague, jargon-heavy marketing copy that fails to directly answer user intent within the first 40 words of a section."
    },
    {
      q: "How long does it take to see improvements in AI citations after fixing GEO gaps?",
      a: "Unlike traditional search rankings which can take 3 to 6 months to adjust, AI search engines frequently refresh their retrieval indices within days to weeks. By injecting clean JSON-LD entity graphs, updating robots.txt rules, and reframing core headers into conversational questions, brands often observe citation appearances in Perplexity and ChatGPT Search in as little as 14 to 30 days."
    },
    {
      q: "Can AKGLS Group implement these GEO fixes for our company?",
      a: "Yes. AKGLS Group specializes in full-funnel Generative Engine Optimization. We engineer custom schema graphs, optimize Knowledge Graph salience, restructure content for RAG retrieval, and seed authoritative brand mentions across citation hubs to secure dominant AI search visibility."
    }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 font-sans min-h-screen relative overflow-x-hidden selection:bg-brand-teal selection:text-brand-dark pb-24">
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-teal/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-96 right-0 w-80 h-80 bg-brand-indigo/5 blur-[100px] pointer-events-none rounded-full" />

      {/* SUB-HEADER BREADCRUMB & BACK ACTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-850 pb-4">
          <button
            onClick={onBackToTools}
            className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-brand-teal transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL MARKETING TOOLS</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <a href="/" className="hover:text-slate-300">Home</a>
            <span>/</span>
            <a href="/tools" onClick={(e) => { e.preventDefault(); onBackToTools(); }} className="hover:text-slate-300">Free Tools</a>
            <span>/</span>
            <span className="text-brand-teal font-bold">AI & GEO Audit Scanner</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FLAGSHIP 2026 AI SEARCH OPTIMIZER</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Interactive AI & GEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-cyan to-indigo-400">Readiness Scanner</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
          Evaluate your website’s entity salience, structured JSON-LD schemas, LLM readability, and brand citation probability across ChatGPT Search, Perplexity AI, Google Gemini, and Claude.
        </p>
      </section>

      {/* CORE INTERACTIVE AUDIT SCANNER COMPONENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GeoAuditScanner onOpenProposal={onOpenProposal} />
      </section>

      {/* TECHNICAL COMPARISON: TRADITIONAL SEO VS. GEO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase font-black tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full">
            SEARCH PARADIGM SHIFT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
            Traditional Search Engine Crawlers vs. Generative Engine Optimization (GEO)
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Search is no longer about winning 10 blue links. It’s about becoming the verified ground-truth citation in synthetic conversational answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional SEO Box */}
          <div className="bg-[#0c121e] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-slate-850 pb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-slate-400" />
                <h3 className="text-lg font-bold font-display text-white">Traditional SEO (2010–2024)</h3>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold">
                Legacy Paradigm
              </span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span><strong>Target:</strong> Ranking for exact match keywords in SERP lists.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span><strong>Indexing:</strong> Crawls raw HTML text and backlink Anchor text counts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span><strong>CTR Paradigm:</strong> Relies on users clicking blue links to visit pages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span><strong>Entity Recognition:</strong> Surface-level keyword density and meta description tags.</span>
              </li>
            </ul>
          </div>

          {/* Next-Gen GEO Box */}
          <div className="bg-gradient-to-b from-[#0e172a] to-[#091122] border border-brand-teal/40 rounded-3xl p-6 sm:p-8 space-y-5 text-left relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-brand-teal" />
                <h3 className="text-lg font-bold font-display text-white">Generative Engine Optimization (GEO 2026+)</h3>
              </div>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-brand-teal/20 text-brand-teal font-black border border-brand-teal/30">
                Current Frontier
              </span>
            </div>

            <ul className="space-y-3 text-xs text-slate-200 relative z-10">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Target:</strong> Securing source footnote citations [1] in ChatGPT, Perplexity & Gemini.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Indexing:</strong> RAG vector chunking, semantic cosine similarity, and structured JSON-LD graphs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>CTR Paradigm:</strong> Zero-click syntheses cite authoritative sources, driving high-intent conversions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Entity Recognition:</strong> Wikidata SPARQL knowledge triples, schema.org sameAs links, and verified authorship.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE 4 PILLARS OF GEO ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase font-black tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            AUDIT METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
            The 4 Pillars Audited by Our Scanner
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Every score generated by our engine is grounded in empirical retrieval mechanics utilized by major foundation models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Pillar 1 */}
          <div className="p-6 bg-[#0c121e] border border-slate-850 rounded-2xl space-y-3 hover:border-brand-teal/40 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">1. Entity Salience & Knowledge Graph</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                LLMs build entity graphs. If your brand lacks a clear schema.org/Organization node with sameAs links to Wikidata, Wikipedia, and LinkedIn, AI models treat your brand as an unverified entity.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-mono text-brand-teal font-bold">
              Weight: 25% of Score
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-[#0c121e] border border-slate-850 rounded-2xl space-y-3 hover:border-brand-teal/40 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                <FileCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">2. Schema Markup for RAG Ingestion</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Structured data is the native lingua franca of AI retrieval. FAQPage, TechArticle, Product, and HowTo JSON-LD markups allow conversational models to parse answers without hallucination.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-mono text-brand-cyan font-bold">
              Weight: 25% of Score
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-[#0c121e] border border-slate-850 rounded-2xl space-y-3 hover:border-brand-teal/40 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">3. Conversational Content Chunking</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                AI search parses web pages into 500-token semantic chunks. Headings structured as direct questions (H2/H3) paired with concise 40-word summaries maximize retrieval cosine similarity.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-mono text-purple-400 font-bold">
              Weight: 25% of Score
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 bg-[#0c121e] border border-slate-850 rounded-2xl space-y-3 hover:border-brand-teal/40 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">4. AI Crawlers & Web Citations</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Verifies that your server robots.txt explicitly allows GPTBot, PerplexityBot, and Google-Extended, and audits brand mention clusters across Reddit, G2, and industry publications.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-mono text-emerald-400 font-bold">
              Weight: 25% of Score
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase font-black tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Generative Engine Optimization (GEO) Explained
          </h2>
        </div>

        <div className="space-y-3 text-left">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0c121e] border border-slate-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-brand-teal transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronRight className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-90 text-brand-teal' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-400 leading-relaxed font-light border-t border-slate-850">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLEMENTARY MARKETING TOOLS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-850 pb-4">
          <div>
            <h3 className="text-lg font-bold font-display text-white">
              Explore More Free Marketing & SEO Tools
            </h3>
            <p className="text-xs text-slate-400">
              Complement your GEO audit with our full suite of technical crawlers and generators.
            </p>
          </div>
          <button
            onClick={onBackToTools}
            className="text-xs font-mono font-bold text-brand-teal hover:underline flex items-center gap-1"
          >
            <span>View all 12 tools</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div 
            onClick={() => onNavigateToTool('seo-audit-tool')}
            className="p-5 bg-[#0c121e] border border-slate-800 hover:border-brand-teal/50 rounded-2xl space-y-2 cursor-pointer transition-all group"
          >
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">Free Tool</span>
            <h4 className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors">
              Technical SEO Audit Tool →
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Simulate Googlebot crawls, inspect canonical tags, and audit HTTP header performance.
            </p>
          </div>

          <div 
            onClick={() => onNavigateToTool('ai-content-analyzer')}
            className="p-5 bg-[#0c121e] border border-slate-800 hover:border-brand-teal/50 rounded-2xl space-y-2 cursor-pointer transition-all group"
          >
            <span className="text-[10px] font-mono text-purple-400 font-bold uppercase block">Free Optimizer</span>
            <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
              AI Copywriting & Density Analyzer →
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Paste sales copy or blog drafts to score factual chunk density and keyword depth.
            </p>
          </div>

          <div 
            onClick={() => onNavigateToTool('schema-generator')}
            className="p-5 bg-[#0c121e] border border-slate-800 hover:border-brand-teal/50 rounded-2xl space-y-2 cursor-pointer transition-all group"
          >
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">Schema Generator</span>
            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              JSON-LD Schema Generator →
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Generate Organization, LocalBusiness, FAQPage, and Article microdata script tags.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL HIGH-VALUE CALL TO ACTION BOX */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-tr from-[#080d1a] via-[#0e172a] to-[#090d19] border border-brand-teal/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-teal via-brand-cyan to-indigo-500" />
          
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-teal font-black bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20 inline-block mb-3">
            ENTERPRISE AI SEARCH CONSULTING
          </span>

          <h3 className="text-2xl md:text-4xl font-black text-white font-display tracking-tight mb-3">
            Want AKGLS Group to Citation-Proof Your Brand?
          </h3>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            Book a 20-minute strategy briefing with our senior AI SEO and GEO engineers. We will analyze your Knowledge Graph presence and deliver a bespoke roadmap to dominate generative search.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => {
                if (onOpenProposal) {
                  onOpenProposal();
                } else {
                  window.location.href = "mailto:info@akglsgroup.com?subject=GEO Strategy Consultation Request";
                }
              }}
              className="bg-brand-teal hover:bg-white text-brand-dark font-display font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-lg shadow-brand-teal/20 cursor-pointer"
            >
              Request Custom Strategy Proposal
            </button>
            <button
              onClick={onBackToTools}
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition cursor-pointer"
            >
              Explore Other Free Tools
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

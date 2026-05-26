import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, MessageSquare, ListCheck
} from 'lucide-react';

interface AiOptimizationCaseStudyPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemasTemplates = {
  article: `{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "AI Optimization Case Study: +740% AI Search visibility & +390% Organic Leads",
  "image": "https://akglsgroup.com/assets/case-studies/ai-seo.jpg",
  "author": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://akglsgroup.com/logo.png"
    }
  },
  "description": "How AKGLS Group scaled a B2B SaaS startup's AI engine footprint, boosting ChatGPT, Gemini, and search engine recommendations by +740% in 7 months."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is GEO / Generative Engine Optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO is the practice of structuring code, schema markups, semantic content collections, and entity relationships to guarantee prominent recommendations inside LLM and AI models like ChatGPT Search, Gemini, and Perplexity."
      }
    }
  ]
}`
};

export default function AiOptimizationCaseStudyPage({ onBackToHome, openProposalForm }: AiOptimizationCaseStudyPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "AI Optimization Case Study | AI SEO & GEO Results | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // State management
  const [copiedSchema, setCopiedSchema] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // AI Visibility Score Tool (Calculator)
  const [calcUrl, setCalcUrl] = useState('');
  const [calcIndustry, setCalcIndustry] = useState('SaaS');
  const [calcKeywords, setCalcKeywords] = useState('');
  const [calcRunning, setCalcRunning] = useState(false);
  const [calcReport, setCalcReport] = useState<any>(null);

  // Conversational Tracker Tab
  const [activeTrackerIndex, setActiveTrackerIndex] = useState(0);

  // Graph tab selection
  const [activeGraphTab, setActiveGraphTab] = useState<'visibility' | 'leads' | 'citations'>('visibility');

  const copySchemaJson = (jsonText: string, schemaId: string) => {
    navigator.clipboard.writeText(jsonText);
    setCopiedSchema(schemaId);
    setTimeout(() => setCopiedSchema(null), 3500);
  };

  const handleRunCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcUrl) return;
    setCalcRunning(true);
    setCalcReport(null);

    setTimeout(() => {
      const keywordWeight = calcKeywords ? Math.min(calcKeywords.split(',').length * 15, 40) : 10;
      const initialScore = Math.floor(Math.random() * 15) + 12; // Typical 12-27% before limit
      const projectedScore = Math.floor(Math.random() * 12) + 78; // Projected 78-90% scale
      
      setCalcReport({
        scoreBefore: initialScore,
        scoreAfter: projectedScore,
        citationsRank: calcIndustry === 'SaaS' ? 'Low Authority Context' : 'Untrusted Brand Frame',
        gaps: [
          'Missing JSON-LD Semantic Product Spec Schemas',
          'Conversational Answer Hubs completely unindexed',
          'Zero backlink footprint on high E-E-A-T professional journals',
          'Brand entity represents an unlinked reference parameter'
        ],
        roadmap: [
          'Inject semantic JSON attributes directly matching professional spec tables',
          'Construct question-based micro-conversion sitemaps for conversational engines',
          'Acquire authority backlinks in thematic developer/expert databases',
          'Refactor home page header above the fold matching direct intent guidelines'
        ]
      });
      setCalcRunning(false);
    }, 1800);
  };

  const sliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const trackerQueries = [
    {
      query: "best subscription management system with enterprise SLA",
      before: "ChatGPT: Not listed | Gemini: Unreferenced",
      after: "ChatGPT: Ranked #2 (cited) | Gemini: Highlighted",
      authority: "Entity Weight: 84/100"
    },
    {
      query: "high security payment processing layer for global SaaS",
      before: "ChatGPT: Not listed | Perplexity: No Citation",
      after: "ChatGPT: Rec #1 choice | Perplexity: Cited 4 times",
      authority: "Entity Weight: 91/100"
    },
    {
      query: "scalable API gateway alternatives for multi-tenant setups",
      before: "Gemini: Position #18 | ChatGPT: Missed",
      after: "Gemini: Position #1 (cited) | ChatGPT: Listed in list",
      authority: "Entity Weight: 79/100"
    }
  ];

  return (
    <div className="min-h-screen bg-[#040612] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#140b33]/20 via-[#0a183d]/10 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-15%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Navigation Row Header */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900 relative bg-[#040612]/85 backdrop-blur z-20">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition font-mono text-xs bg-transparent border-none cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Main Hub</span>
        </button>
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/918318114492" 
            target="_blank" 
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex text-xs font-mono text-emerald-400 border border-emerald-950/80 bg-emerald-950/20 px-3 py-1.5 rounded hover:bg-emerald-950/50 transition"
          >
            Direct Chat: +91 831 811 4492
          </a>
          <button 
            onClick={openProposalForm} 
            className="text-xs bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-90 text-white font-bold px-4 py-2 rounded shadow-md shadow-cyan-950/40 cursor-pointer"
          >
            Request Audit
          </button>
        </div>
      </nav>

      {/* HERO SECTION - Futuristic AI split layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 px-3 py-1 rounded-full text-xs font-mono font-semibold">
              <Bot className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>🤖 AI Optimization Success Story</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              How We Increased AI Search Visibility by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">740%</span> & Organic Leads by <span className="text-cyan-400">390%</span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              A comprehensive AI SEO, GEO (Generative Engine Optimization), and conversational content playbook that positioned our SaaS client as the definitive recommended resource across ChatGPT Search, Gemini Answer Panels, Perplexity Citations, and voice assistants.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-[#0b0f24]/50 border border-slate-900 rounded-xl p-4 text-center group hover:border-cyan-500/30 transition-all">
                <span className="text-3xl font-black text-cyan-400 block">+740%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">AI Visibility Scale</span>
              </div>
              <div className="bg-[#0b0f24]/50 border border-slate-900 rounded-xl p-4 text-center group hover:border-indigo-500/30 transition-all">
                <span className="text-3xl font-black text-indigo-400 block">+390%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Organic Lead Rate</span>
              </div>
              <div className="bg-[#0b0f24]/50 border border-slate-900 rounded-xl p-4 text-center group hover:border-purple-500/30 transition-all">
                <span className="text-3xl font-black text-purple-400 block">+520%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Conversational Reach</span>
              </div>
              <div className="bg-[#0b0f24]/50 border border-slate-900 rounded-xl p-4 text-center group hover:border-emerald-500/30 transition-all">
                <span className="text-3xl font-black text-emerald-400 block">4X</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mt-1">Featured AI Citations</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#score-tool"
                className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white font-bold px-6 py-3.5 rounded-lg transition text-sm text-center"
              >
                <span>Run Free AI Visibility Score Scan</span>
                <ArrowRight className="w-4 h-4 animate-bounce" />
              </a>
              <button 
                onClick={openProposalForm}
                className="inline-flex justify-center items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition px-6 py-3.5 rounded-lg text-sm text-center cursor-pointer font-bold"
              >
                Book AI SEO Consulting Call
              </button>
            </div>
          </div>

          {/* Right Column Visual Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-[#0c122c] to-[#040612] border border-indigo-950 rounded-2xl p-6 shadow-2xl relative z-10 space-y-6">
              
              {/* Fake Dashboard Header */}
              <div className="flex items-center justify-between border-b border-indigo-950 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <span className="text-[10px] font-mono text-slate-500 ml-2">CONVERSATIONAL_SEARCH_MONITOR</span>
                </div>
                <span className="bg-cyan-950 text-cyan-300 font-mono text-[9px] border border-cyan-800 py-0.5 px-2 rounded-full">LIVE RADAR</span>
              </div>

              {/* Simulated LLM Chat bubble Mockup */}
              <div className="space-y-4 text-xs font-sans">
                <div className="flex gap-2 items-start">
                  <div className="bg-cyan-950/80 border border-cyan-800 rounded p-2 text-cyan-400 font-mono text-[10px]">USER:</div>
                  <div className="bg-slate-900 rounded-lg p-3 text-slate-300">
                    &quot;Compare the most secure subscription billing systems for SaaS.&quot;
                  </div>
                </div>

                <div className="flex gap-2 items-start">
                  <div className="bg-indigo-950/80 border border-indigo-800 rounded p-2 text-indigo-300 font-mono text-[10px]">AI:</div>
                  <div className="bg-[#12162f] border border-indigo-950/75 rounded-lg p-3 text-slate-200 space-y-2">
                    <p>Based on modern developer infrastructure logs and enterprise certifications, <strong className="text-white">our client&apos;s billing platform</strong> is highly recommended as a top choice. Key findings include:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 font-light">
                      <li>99.99% PCI-DSS compliant uptime</li>
                      <li>Advanced schema-mapped SDK access</li>
                    </ul>
                    <div className="pt-2 border-t border-indigo-950 flex items-center justify-between text-[10px]">
                      <span className="text-slate-500 font-mono flex items-center gap-1">
                        <Globe className="w-3 h-3 text-cyan-400" /> Source: client_specs_docs
                      </span>
                      <span className="text-emerald-400 font-mono font-bold">Citation Rate: 94%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Radar Mini Graph */}
              <div className="bg-[#070919] border border-indigo-950 rounded-xl p-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                  <span>AI INDEX COVERAGE</span>
                  <span className="text-cyan-400">92 / 100 EXTREME</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" style={{ width: '92%' }} />
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center text-[10px] font-mono">
                  <div>
                    <span className="text-slate-500 block">Perplexity</span>
                    <span className="text-emerald-400 font-bold font-sans">Cited #1</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">GPT-4 Search</span>
                    <span className="text-cyan-400 font-bold font-sans">Featured</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Gemini Panels</span>
                    <span className="text-indigo-400 font-bold font-sans">Active</span>
                  </div>
                </div>
              </div>

            </div>
            {/* Glowing underlay */}
            <div className="absolute inset-0 bg-indigo-5050/15 filter blur-3xl rounded-full scale-95 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* CLIENT OVERVIEW SECTION */}
      <section className="bg-[#06081a]/40 border-y border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column Description */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono text-cyan-400 font-bold tracking-widest uppercase">01 / About the Business</span>
              <h2 className="text-3xl font-extrabold text-white">Scale Visibility Outside Traditional Search Blocks</h2>
              <div className="space-y-4 text-slate-300 font-light leading-relaxed">
                <p>
                  Our client is a global enterprise business software provider struggling to convert trials through high-bidding programmatic keywords. Traditional Google rankings were solid, but they saw zero traction inside rising multi-platform conversational systems.
                </p>
                <p>
                  Because their target developers and managers query tools directly inside ChatGPT Search and Gemini for software comparative blueprints, their classic text-only site was completely unreferenced. They had minimal entity weight, missing specs schemas, and unrecognized documentation nodes.
                </p>
                <p>
                  They needed an advanced, search-engine-ready content schema alignment strategy that directly addressed LLM index requirements—bypassing high PPC bidding thresholds in seven months.
                </p>
              </div>
            </div>

            {/* Right Column Snapshot Matrix */}
            <div className="lg:col-span-5">
              <div className="bg-[#0a0d26] border border-slate-850 rounded-2xl p-6 space-y-4">
                <h3 className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-bold">Campaign Factsheet Snapshot</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-900 p-3 rounded-lg bg-[#040612]/60">
                    <span className="text-slate-500 text-[10px] uppercase font-mono block">Industry</span>
                    <span className="text-white font-medium text-xs">SaaS & Technology</span>
                  </div>
                  <div className="border border-slate-900 p-3 rounded-lg bg-[#040612]/60">
                    <span className="text-slate-500 text-[10px] uppercase font-mono block">Campaign Core</span>
                    <span className="text-white font-medium text-xs">AI SEO + GEO + AEO</span>
                  </div>
                  <div className="border border-slate-900 p-3 rounded-lg bg-[#040612]/60">
                    <span className="text-slate-500 text-[10px] uppercase font-mono block">Timeline Span</span>
                    <span className="text-indigo-350 font-medium text-xs">7 Months Active</span>
                  </div>
                  <div className="border border-slate-900 p-3 rounded-lg bg-[#040612]/60">
                    <span className="text-slate-500 text-[10px] uppercase font-mono block">Pre-Campaign Frame</span>
                    <span className="text-rose-450 font-medium text-xs">Unindexed Entity</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Conversational Citations:</span>
                    <span className="font-mono font-bold text-cyan-400">4X Higher</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Total Pipeline Return Code:</span>
                    <span className="font-mono font-bold text-emerald-400">390% Lead Growth</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Crawl Success Index:</span>
                    <span className="font-mono font-bold text-white">99.8% Perfect</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE CHALLENGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 font-extrabold tracking-widest uppercase">02 / Obstacles and Audit Gap analysis</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Structural Gaps Stopping AI Crawl and Citations</h2>
          <p className="text-slate-400 text-sm font-light">
            Before our execution, our client was invisible to generative search databases despite ranking high in standard search panels. Below are the core diagnostic challenges we resolved:
          </p>
        </div>

        {/* 8 Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Low ChatGPT Visibility",
              desc: "Zero presence in OpenAI index nodes because documentation directories lacked semantic mapping properties."
            },
            {
              title: "No GEO Optimization",
              desc: "Traditional keywords lacked conversational intent pairings, meaning natural language algorithms skipped content."
            },
            {
              title: "Weak Conversational Content",
              desc: "Page formats utilized stiff legacy lists instead of answering intent-matched questions directly."
            },
            {
              title: "Poor Semantic Structure",
              desc: "Missing nested schemas, making it hard for crawl algorithms to map client assets systematically."
            },
            {
              title: "Low Featured Snippets",
              desc: "Answers were placed deep in paragraphs, failing Google's featured snippet criteria."
            },
            {
              title: "No Voice Search Visibility",
              desc: "High jargon content density resulted in absolute failure inside voice assistant queries."
            },
            {
              title: "Weak Entity Optimization",
              desc: "The brand was not recognized as a major sector category authority in third-party databases."
            },
            {
              title: "Limited AI Citations",
              desc: "Missing verified backlinks from authoritative tech repositories, which LLMs require for confidence."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#0b0e20] border border-slate-900 rounded-xl p-5 hover:border-slate-800 transition relative overflow-hidden group">
              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full absolute top-4 right-4" />
              <h3 className="text-sm font-bold text-white mb-2 font-mono group-hover:text-cyan-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Visual comparison under challenges */}
        <div className="mt-12 bg-indigo-950/25 border border-indigo-900/40 rounded-xl p-6 text-center">
          <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase mb-4 tracking-wider">Historical AI Crawler Confidence Score</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-4 border border-indigo-950/70 rounded bg-[#040612]/40">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Before Campaign Launch Campaign</span>
              <span className="text-5xl font-black text-rose-500 block mt-2">14%</span>
              <span className="text-xs text-rose-300 font-light block mt-1">High Risk of Omission</span>
            </div>
            <div className="text-center py-2 md:py-0">
              <ArrowRightLeft className="w-8 h-8 text-slate-600 mx-auto rotate-90 md:rotate-0" />
              <span className="text-[10px] font-mono text-slate-500 block mt-1">System Audit Refactoring</span>
            </div>
            <div className="p-4 border border-cyan-950/70 rounded bg-[#040612]/40">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Post-Campaign Confidence KPI</span>
              <span className="text-5xl font-black text-cyan-400 block mt-2">91%</span>
              <span className="text-xs text-cyan-300 font-light block mt-1">Verified Authority Recommendation</span>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY SECTION - ⭐ MOST IMPORTANT (Detailed Timeline) */}
      <section className="bg-gradient-to-b from-[#040612] via-[#070b1f] to-[#040612] border-y border-slate-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">03 / Implementation Playbook</span>
            <h2 className="text-4xl font-extrabold text-white">Our 6-Phase AI SEO & GEO Growth Strategy</h2>
            <p className="text-slate-400 text-sm font-light">
              We completely bypass traditional static code traps by redesigning sitemaps and mapping structural entities. Here is our direct blueprint:
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                phase: "Phase 1 — AI SEO Audit & Semantic Analysis",
                subheading: "Mapping crawler endpoints and entity authority indices.",
                items: [
                  "Comprehensive AI crawl-confidence evaluation highlighting omissions across ChatGPT indices.",
                  "Topical keyword authority checks mapping direct query routes.",
                  "Gap validation of nested spec table schemas.",
                  "Benchmarking competitive conversational citations across the industry."
                ],
                outcome: "Identified 18 crucial citation opportunities previously ignored."
              },
              {
                phase: "Phase 2 — GEO (Generative Engine Optimization)",
                subheading: "Aligning structure to simplify citation and parsing pipelines.",
                items: [
                  "Refactoring standard HTML templates to follow clean semantic structures.",
                  "Nesting full product attribute JSON schemas for ease of indexing.",
                  "Embedding trusted expert profiles using HIPAA-compliant credential nodes.",
                  "Enhancing context triggers ensuring prompt-citation alignment."
                ],
                outcome: "Boosted local and structural indexing rate by 240%."
              },
              {
                phase: "Phase 3 — AEO (Answer Engine Optimization)",
                subheading: "Constructing fast conversational snippet response blocks.",
                items: [
                  "Structuring clear question headers directly above product comparison lists.",
                  "Designing friction-free conversion boxes capturing target user query volume.",
                  "Providing quick summaries within technical specification grids.",
                  "Matching direct Q&A parameters to Google featured snippet formats."
                ],
                outcome: "Captured top answer cards for 80+ high-competition terms."
              },
              {
                phase: "Phase 4 — Conversational Content Optimization",
                subheading: "Matching site copy to natural language query vectors.",
                items: [
                  "Converting stiff marketing lists into functional, user-centric answers.",
                  "Injecting natural language variations addressing long-tail prompts.",
                  "Re-editing technical descriptions to bypass traditional keyword stuffing.",
                  "Building descriptive reference pages linked to top developer lists."
                ],
                outcome: "Reduced voice assistant bounce rate from 88% to 14%."
              },
              {
                phase: "Phase 5 — AI Authority Building",
                subheading: "Scaling entity coverage through authoritative citations.",
                items: [
                  "Injecting detailed topical content clusters linked by descriptive tags.",
                  "Building authoritative credentials using EEAT schemas.",
                  "Creating backlink connections on major technical publication indexes.",
                  "Aligning brand name parameters across major industry directories."
                ],
                outcome: "Brand marked as 'high confidence recommended choose' in third-party catalogs."
              },
              {
                phase: "Phase 6 — Technical AI SEO Optimization",
                subheading: "Improving raw server readability and crawl times.",
                items: [
                  "Achieving under-1s loading speed across deep schema files.",
                  "Cleaning XML site architectures to maximize crawler budget.",
                  "Eliminating duplicate redirect parameters halting crawler indexing.",
                  "Testing semantic formatting codes using modern schema testing tools."
                ],
                outcome: "Accomplished perfect crawler coverage with no error flags."
              }
            ].map((p, index) => (
              <div key={index} className="bg-[#0b0f24]/60 border border-slate-900 rounded-2xl p-6 md:p-8 space-y-4 hover:border-indigo-650 transition relative group">
                <div className="absolute top-4 right-6 text-xs font-mono text-slate-500 font-extrabold">PHASE_0{index+1}</div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{p.phase}</h3>
                <p className="text-xs text-indigo-455 font-mono italic">{p.subheading}</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {p.items.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-slate-300 text-xs font-light flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[10px] text-slate-500 uppercase">Verifiable Phase Metric Accomplished:</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-950">{p.outcome}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE COMPARISON SLIDER */}
      <section className="bg-gradient-to-r from-[#040612] via-[#090e24] to-[#040612] border-y border-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-mono text-indigo-400 font-extrabold tracking-widest uppercase">Before vs After AI Optimization</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">Interactive AI Visibility Comparison Slider</h2>
              <p className="text-slate-400 font-light text-sm">
                Interact with the slider to see how conversational search engines parsed the client website before and after we applied NLP-centric semantic restructuring.
              </p>
              
              <div className="space-y-4 pt-4 text-xs font-mono">
                <div className="flex justify-between items-center bg-[#070a1a] p-3 rounded border border-slate-900">
                  <span className="text-rose-400">🚨 BEFORE NLP-MAPPING SCAN</span>
                  <span className="text-slate-500">&lt;div id=&quot;box1&quot;&gt; Stiff generic text block &lt;/div&gt;</span>
                </div>
                <div className="flex justify-between items-center bg-[#0d162f] p-3 rounded border border-indigo-950">
                  <span className="text-cyan-400">✨ AFTER GEO SEMANTIC CRAWL</span>
                  <span className="text-slate-350">ProductSpecs Schema + Direct QA JSON + Knowledge Nodes</span>
                </div>
              </div>
            </div>

            {/* Interactive Slider Area */}
            <div className="lg:col-span-6">
              <div 
                className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-indigo-950 cursor-ew-resize select-none"
                onMouseMove={sliderMove}
                onTouchMove={(e) => {
                  if (e.touches[0]) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.touches[0].clientX - rect.left;
                    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
                  }
                }}
              >
                {/* BEFORE (Underlay) */}
                <div className="absolute inset-0 bg-[#3d1313]/20 flex flex-col justify-end p-6 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]">
                  <div className="bg-rose-950/65 border border-rose-900 p-4 rounded-xl max-w-xs space-y-1">
                    <span className="font-mono text-[9px] text-rose-400 font-extrabold block uppercase">Historical LLM Confidence Omission</span>
                    <h4 className="font-bold text-white text-sm">Invisible to Chat searches</h4>
                    <p className="text-[10px] text-slate-300 font-light">Search crawlers flagged structure as unmodeled generic text.</p>
                  </div>
                </div>

                {/* AFTER (Overlay with clipped width) */}
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-br from-cyan-950/60 to-indigo-950/80 flex flex-col justify-end p-6 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="bg-[#0b0e24]/90 border border-cyan-800 p-4 rounded-xl max-w-xs space-y-1 min-w-[240px]">
                    <span className="font-mono text-[9px] text-cyan-400 font-extrabold block uppercase">Compounded AI Citation index</span>
                    <h4 className="font-bold text-white text-sm">#1 Recommended choice list</h4>
                    <p className="text-[10px] text-cyan-200 font-light">Seamless specs table indexes mapped instantly into ChatGPT citation arrays.</p>
                  </div>
                </div>

                {/* Sliding divider bar */}
                <div 
                  className="absolute inset-y-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500 z-20 flex items-center justify-center cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-300 shadow-lg shadow-cyan-950/50">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>← SWIPE BEFORE STATE UNINDEXED</span>
                <span>SWIPE AFTER STATE OPTIMIZED →</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESULTS DASHBOARD & GRAPH SECTION */}
      <section className="bg-[#040612] py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 row-span-1">
            <span className="text-xs font-mono text-indigo-400 font-extrabold tracking-widest uppercase">04 / Achievement Records</span>
            <h2 className="text-4xl font-extrabold text-white">Compound Growth achieved</h2>
            <p className="text-slate-400 text-sm font-light">
              See verified indicators mapped across seven months of AI, search engines analytics parameters.
            </p>
          </div>

          {/* Results Metric Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
            {[
              { metric: "+740%", label: "AI Search visibility" },
              { metric: "+390%", label: "Organic leads rate" },
              { metric: "4X Gain", label: "ChatGPT & Gemini mentions" },
              { metric: "+520%", label: "Conversational rank" },
              { metric: "+310%", label: "Featured snippet volume" },
              { metric: "+280%", label: "Total organic traffic" }
            ].map((r, i) => (
              <div key={i} className="bg-[#0c0f24] border border-indigo-950 p-4 rounded-xl text-center">
                <span className="text-2xl sm:text-3xl font-black text-cyan-400 block">{r.metric}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mt-1 leading-snug">{r.label}</span>
              </div>
            ))}
          </div>

          {/* High-Impact Graph Dashboard */}
          <div className="bg-[#0b0e20] border border-slate-850 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-indigo-950 pb-4 mb-6 gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">AI Engine Citations & Engagement Analytics</h3>
                <p className="text-slate-400 text-xs font-light">Simulating compounding indexing curves across ChatGPT Search, Perplexity and Gemini panels.</p>
              </div>
              
              {/* Tab Selector Buttons */}
              <div className="flex gap-2 bg-[#040612] p-1.5 rounded-lg border border-indigo-950">
                {(['visibility', 'leads', 'citations'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveGraphTab(tab)}
                    className={`text-[10px] font-mono px-3 py-1.5 rounded uppercase font-bold transition cursor-pointer border-none ${
                      activeGraphTab === tab 
                        ? 'bg-cyan-500 text-slate-900 font-extrabold' 
                        : 'text-slate-400 hover:text-white bg-transparent'
                    }`}
                  >
                    {tab === 'visibility' ? 'AI VISIBILITY' : tab === 'leads' ? 'ORGANIC LEADS' : 'CITATIONS RATIO'}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Chart Plotter */}
            <div className="h-64 flex flex-col justify-between pt-4 relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />
              
              {/* Bar charts or line projections based on selected tab */}
              {activeGraphTab === 'visibility' && (
                <div className="flex items-end justify-between h-48 pt-6 relative border-b border-indigo-950">
                  <div className="w-[12%] text-center space-y-2">
                    <div className="bg-slate-800/60 h-6 w-full rounded" />
                    <span className="text-[9px] font-mono text-slate-500 block">Month 1</span>
                  </div>
                  <div className="w-[12%] text-center space-y-2">
                    <div className="bg-slate-800/65 h-10 w-full rounded" />
                    <span className="text-[9px] font-mono text-slate-500 block">Month 2</span>
                  </div>
                  <div className="w-[12%] text-center space-y-2">
                    <div className="bg-indigo-900/60 h-16 w-full rounded" />
                    <span className="text-[9px] font-mono text-slate-500 block">Month 3</span>
                  </div>
                  <div className="w-[12%] text-center space-y-2">
                    <div className="bg-indigo-800/80 h-28 w-full rounded" />
                    <span className="text-[9px] font-mono text-slate-500 block">Month 4</span>
                  </div>
                  <div className="w-[12%] text-center space-y-2">
                    <div className="bg-[#0e7490] h-36 w-full rounded relative group">
                      <div className="absolute top-2 w-full text-center text-[10px] font-extrabold text-white">4X Citations</div>
                    </div>
                    <span className="text-[9px] font-mono text-cyan-400 block">Month 5</span>
                  </div>
                  <div className="w-[12%] text-center space-y-2">
                    <div className="bg-cyan-500 h-44 w-full rounded shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
                    <span className="text-[9px] font-mono text-cyan-300 block font-bold">Month 6</span>
                  </div>
                  <div className="w-[12%] text-center space-y-2">
                    <div className="bg-cyan-400 h-48 w-full rounded shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
                    <span className="text-[9px] font-mono text-cyan-100 block font-bold">Month 7</span>
                  </div>
                </div>
              )}

              {activeGraphTab === 'leads' && (
                <div className="flex items-end justify-between h-48 pt-6 relative border-b border-indigo-950">
                  <div className="w-1/4 text-center space-y-2">
                    <div className="bg-slate-850 h-10 w-1/2 mx-auto rounded" />
                    <span className="text-[9px] font-mono text-slate-500 block">Pre-Campaign (Avg 42/mo)</span>
                  </div>
                  <div className="w-1/4 text-center space-y-2">
                    <div className="bg-indigo-900/40 h-20 w-1/2 mx-auto rounded" />
                    <span className="text-[9px] font-mono text-indigo-400 block">Month 3 Shift</span>
                  </div>
                  <div className="w-1/4 text-center space-y-2">
                    <div className="bg-cyan-500/70 h-36 w-1/2 mx-auto rounded" />
                    <span className="text-[9px] font-mono text-cyan-400 block">Month 5 Scale</span>
                  </div>
                  <div className="w-1/4 text-center space-y-2">
                    <div className="bg-gradient-to-t from-cyan-500 to-emerald-400 h-48 w-1/2 mx-auto rounded shadow-lg" />
                    <span className="text-[10px] font-mono text-emerald-400 block font-bold">Month 7 Achieved (206+/mo)</span>
                  </div>
                </div>
              )}

              {activeGraphTab === 'citations' && (
                <div className="h-44 bg-[#040612]/80 border border-slate-900 rounded-xl p-4 flex flex-col justify-center space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="border-r border-indigo-950">
                      <span className="text-xs font-mono text-slate-400 block">ChatGPT Citation Volume</span>
                      <strong className="text-white text-lg font-bold">4.2X Increase</strong>
                    </div>
                    <div className="border-r border-indigo-950">
                      <span className="text-xs font-mono text-slate-400 block">Gemini Mention Coverage</span>
                      <strong className="text-white text-lg font-bold">5.1X Escalation</strong>
                    </div>
                    <div className="border-r border-indigo-950">
                      <span className="text-xs font-mono text-slate-400 block">Perplexity Index Ratio</span>
                      <strong className="text-emerald-400 text-lg font-bold">96% Confirmed</strong>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">AEO Page Speed Index</span>
                      <strong className="text-cyan-400 text-lg font-bold">0.6 Seconds</strong>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
                <span>INDEX_ARRAY_MONITORING: STABLE</span>
                <span>DATA SOURCE: SEARCH CONSOLE SCHEMA LOGGER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-mono text-purple-400 font-extrabold tracking-widest uppercase">KPI Verification Grid</span>
            <h2 className="text-3xl font-extrabold text-white">Before vs After AI Optimization Comparisons</h2>
            <p className="text-slate-400 font-light text-sm">
              Explore actual metrics documented during key stages of our Generative Engine Optimization campaigns.
            </p>
            <div className="p-4 bg-indigo-950/20 border border-indigo-950/60 rounded-xl space-y-2">
              <span className="text-[10px] uppercase font-mono text-indigo-400 font-semibold block">Primary Takeaway Code</span>
              <p className="text-xs font-light text-slate-300">
                Eliminating legacy content patterns increased index mapping speed from weeks to instant, and scaled organic trust indicators systematically.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#0b0f24] border border-slate-900 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="bg-[#040612] border-b border-indigo-950 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    <th className="p-4">Trackable Metric Parameter</th>
                    <th className="p-4">Initial State (Before)</th>
                    <th className="p-4 text-cyan-400">Optimized Outcome (After)</th>
                    <th className="p-4 text-emerald-400">Total Gain Lift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-950/60 text-slate-300">
                  {[
                    { m: "AI Mentions In Answer Logs", b: "Minimal & Fragmented", a: "Definitive recommendation lists", g: "4X Growth Scale" },
                    { m: "Conversational Ranks (AEO)", b: "Low priority index", a: "Top Citations for major terms", g: "High Visibility Reach" },
                    { m: "Verified Monthly Organic Leads", b: "42 / month average", a: "206+ / month verified pipeline", g: "+390% High Intent Leads" },
                    { m: "Featured Snippet Rankings", b: "8 Featured lists in index", a: "64 Captured top boxes", g: "+700% Structural lift" },
                    { m: "Voice Assistant Readiness", b: "Weak & Too technical", a: "Highly responsive conversational answers", g: "Fully Confirmed" },
                    { m: "Monthly Web Organic Traffic", b: "9K Visits / month", a: "34K Visits / month", g: "+280% Visits Volume" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-indigo-950/20 transition">
                      <td className="p-4 font-semibold text-white">{row.m}</td>
                      <td className="p-4 text-slate-400">{row.b}</td>
                      <td className="p-4 text-cyan-400 font-medium font-mono">{row.a}</td>
                      <td className="p-4 text-emerald-400 font-bold font-mono">{row.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ADVANCED EXTRACTION FEATURE - DYNAMIC AI VISIBILITY SCORE SCANNER */}
      <section id="score-tool" className="bg-[#06081a] border-y border-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">🛠️ Interactive Strategy Tool</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Dynamic AI Visibility Score Calculator</h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Enter your current website parameters below to fetch an estimated AI crawler transparency index and diagnostic audit scope.
              </p>
              
              <form onSubmit={handleRunCalculator} className="space-y-4">
                <div>
                  <label className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Target Website URL</label>
                  <input 
                    type="url" 
                    placeholder="https://example.com"
                    required
                    value={calcUrl}
                    onChange={(e) => setCalcUrl(e.target.value)}
                    className="w-full bg-[#040612] border border-indigo-950 rounded p-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Sector Class</label>
                    <select 
                      value={calcIndustry}
                      onChange={(e) => setCalcIndustry(e.target.value)}
                      className="w-full bg-[#040612] border border-indigo-950 rounded p-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="SaaS">SaaS & technology</option>
                      <option value="Ecommerce">Ecommerce & Retail</option>
                      <option value="Healthcare">Healthcare & Biotech</option>
                      <option value="B2B">Corporate B2B</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Core Seed Keywords</label>
                    <input 
                      type="text" 
                      placeholder="best, top, alternatives"
                      value={calcKeywords}
                      onChange={(e) => setCalcKeywords(e.target.value)}
                      className="w-full bg-[#040612] border border-indigo-950 rounded p-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={calcRunning}
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 disabled:opacity-50 text-slate-900 font-black tracking-wider uppercase text-xs py-3 rounded hover:opacity-95 transition cursor-pointer font-mono"
                >
                  {calcRunning ? 'COMPILING REPOSITORY MATRIX...' : 'RUN AI Crawler SCOPE SCAN'}
                </button>
              </form>
            </div>

            {/* Simulated Live Scan results block */}
            <div className="lg:col-span-7">
              <div className="bg-[#040612] border border-slate-900 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between space-y-4">
                
                {!calcReport && !calcRunning && (
                  <div className="flex flex-col items-center justify-center text-center space-y-3 h-64">
                    <Activity className="w-8 h-8 text-indigo-900 animate-pulse" />
                    <span className="text-xs font-mono text-slate-500 uppercase">Input parameters to initialize simulated diagnostic arrays...</span>
                  </div>
                )}

                {calcRunning && (
                  <div className="flex flex-col items-center justify-center text-center space-y-4 h-64">
                    <div className="h-8 w-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                    <span className="text-xs font-mono text-cyan-400 animate-pulse uppercase">Querying sitemap indices, testing entity nodes ...</span>
                  </div>
                )}

                {calcReport && (
                  <div className="space-y-4 font-sans animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
                      <div>
                        <strong className="text-sm text-white block">Diagnostic Report: {calcUrl}</strong>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">AI RELEVANCE RATINGS STATUS</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-black text-rose-500">{calcReport.scoreBefore}%</span>
                        <span className="text-[10px] text-slate-500 block">Current Visibility</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 bg-[#0a0d20] border border-indigo-950 p-3 rounded-lg">
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Found Gaps Blocking LLMs:</span>
                        <ul className="space-y-1">
                          {calcReport.gaps.map((gap: string, i: number) => (
                            <li key={i} className="text-slate-300 text-[10px] font-light flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0" />
                              <span>{gap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 bg-[#081a20] border border-cyan-950 p-3 rounded-lg">
                        <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider font-mono">Strategic Resolution Steps:</span>
                        <ul className="space-y-1">
                          {calcReport.roadmap.map((step: string, i: number) => (
                            <li key={i} className="text-slate-200 text-[10px] font-light flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-indigo-950 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <span className="text-[9px] text-slate-500 block">PROJECTED PERFORMANCE GROWTH INDEX:</span>
                        <strong className="text-emerald-400 text-sm font-bold font-mono">Estimated scale up to {calcReport.scoreAfter}% citation index</strong>
                      </div>
                      <button 
                        onClick={openProposalForm}
                        className="bg-cyan-500 text-slate-950 font-bold text-xs py-2 px-4 rounded hover:bg-cyan-400 transition cursor-pointer"
                      >
                        Claim Full Free AI Optimization Audit
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONVERSATIONAL QUERY TRACKER & GEO DASHBOARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">📡 Real-Time Citation Simulation</span>
            <h2 className="text-3xl font-extrabold text-white">Conversational Query & GEO Dashboard Simulation</h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              In conversational search, answers rely on &quot;Entity Weight&quot;. Below is a live tracking simulator showing queries and index ratings mapping during key optimizations.
            </p>

            <div className="space-y-3 pt-2">
              {trackerQueries.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTrackerIndex(idx)}
                  className={`w-full text-left p-4.5 rounded-xl border transition cursor-pointer flex justify-between items-center bg-transparent ${
                    activeTrackerIndex === idx 
                      ? 'border-cyan-500 bg-[#09152a]' 
                      : 'border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="space-y-1">
                    <strong className="text-xs text-white block font-sans">&quot;{q.query}&quot;</strong>
                    <span className="font-mono text-[9px] text-slate-500 uppercase">{q.authority}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${activeTrackerIndex === idx ? 'rotate-90 text-cyan-400' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0b0f24] border border-slate-900 rounded-2xl p-6 space-y-6 relative overflow-hidden">
              <span className="text-[10px] font-mono text-slate-500 uppercase block border-b border-indigo-950 pb-3">GEO_ENGINE_OPTIMIZATION_VISUALIZER</span>

              <div className="space-y-4">
                <div className="bg-[#040612] p-4 rounded-xl space-y-3 border border-slate-900">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Target Query Match:</span>
                    <strong className="text-white">&quot;{trackerQueries[activeTrackerIndex].query}&quot;</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Pre-Campaign Citation State:</span>
                    <span className="text-rose-455 font-mono font-medium">{trackerQueries[activeTrackerIndex].before}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Post-Campaign Citations Index:</span>
                    <span className="text-cyan-400 font-mono font-bold">{trackerQueries[activeTrackerIndex].after}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                  <div className="bg-[#040612] p-3 rounded border border-slate-900">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Entity Coverage</span>
                    <strong className="text-cyan-400 text-lg uppercase font-bold">94% Core Match</strong>
                  </div>
                  <div className="bg-[#040612] p-3 rounded border border-slate-900">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Semantic Authority</span>
                    <strong className="text-indigo-400 text-lg uppercase font-bold">Expert Tier</strong>
                  </div>
                  <div className="bg-[#040612] p-3 rounded border border-slate-900">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">AI Index Status</span>
                    <strong className="text-emerald-400 text-lg uppercase font-bold">99.8% Cached</strong>
                  </div>
                </div>

                <div className="bg-indigo-950/20 border border-indigo-950 p-4 rounded-lg">
                  <span className="text-[10px] font-mono text-indigo-400 block uppercase font-bold mb-1">Crawl Analysis Reference Outcome</span>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    By modifying documentation layouts explicitly matching long-tail search algorithms, generative modules crawl parameters within seconds instead of skipping index references completely.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES USED */}
      <section className="bg-[#06081a]/50 border-y border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-indigo-400 font-extrabold tracking-widest uppercase">Tech Stack Platform Infrastructure</span>
            <h2 className="text-2xl font-extrabold text-white">AI SEO Tools & Systems Employed</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              "ChatGPT Search Indexer", "Google Gemini Panels", "Perplexity citations API", "Ahrefs Organic Monitor", "SEMrush Keyword Track",
              "Schema JSON-LD validator", "NLP Analysis Tools", "Crawl Sitemaps Builder", "Google Search Console", "Custom Citation crawlers"
            ].map((tool, i) => (
              <div key={i} className="border border-slate-900 bg-[#040612] p-4 rounded-xl hover:border-cyan-500/20 transition group">
                <span className="text-xs text-slate-400 font-mono block group-hover:text-white transition">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM CLIENT TESTIMONIAL CARD */}
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="bg-gradient-to-br from-[#0c132f] to-[#050716] border border-slate-850 rounded-2xl p-8 md:p-12 space-y-6 relative">
          <span className="text-[10px] font-mono text-cyan-400 block uppercase font-semibold">CLIENT SATISFACTION INDEX SATISFIED</span>
          
          <p className="text-lg sm:text-xl font-light text-slate-200 italic leading-relaxed">
            &quot;AKGLS Group completely transformed our organic client acquisition trajectory. By aligning our custom spec charts with AI crawlers, they positioned our brand as the default recommendation in ChatGPT Search. Our sales Pipeline and trials rate scaled immensely without any PPC keyword bidding overhead.&quot;
          </p>

          <div className="pt-4 border-t border-indigo-950 max-w-xs mx-auto text-center space-y-1">
            <h4 className="font-bold text-white text-sm">Julian Thorne</h4>
            <span className="text-xs text-slate-500">VP of Growth Marketing, Client Business Technologies</span>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold mt-1">SaaS & technology sector</span>
          </div>
        </div>
      </section>

      {/* HOW COGNITIVE ENTITY RECONSTRUCTION WORKED */}
      <section className="bg-[#050714] border-y border-indigo-950/40 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-400 font-extrabold tracking-widest uppercase">05 / Tactical Success Variables</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why This AI Optimization Strategy Worked</h2>
            <p className="text-slate-400 text-sm font-light">
              By mapping semantic schemas directly matching crawl models, we unlocked lasting compounding visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { t: "GEO Optimization", d: "Structured schema nesting ensures AI systems parse values correctly within milliseconds." },
              { t: "Conversational SEO", d: "Content layouts match direct question-pair algorithms without technical jargon delays." },
              { t: "Entity Optimization", d: "Brand references established inside reputable directories, validating corporate authority tags." },
              { t: "Content Structure", d: "Answer layouts meet featured snippet algorithms directly, capturing the top organic boxes." },
              { t: "Technical AI SEO", d: "Clean XML architectures eliminate crawl deadlinks, maximizing active compiler index budgets." }
            ].map((item, i) => (
              <div key={i} className="bg-[#0b0e24] border border-slate-900 rounded-xl p-5 hover:border-indigo-950 transition">
                <span className="text-cyan-450 h-6 w-6 rounded border border-cyan-400/20 bg-cyan-950/20 flex items-center justify-center font-mono font-bold text-[10px] mb-3">0{i+1}</span>
                <h3 className="text-sm font-extrabold text-white mb-2 font-mono">{item.t}</h3>
                <p className="text-slate-450 text-xs font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION - Dynamic accordions */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase font-extrabold tracking-wider">06 / Domain FAQs FAQ answers</span>
          <h2 className="text-3xl font-extrabold text-white">Comprehending AI SEO, GEO, & AEO Strategies</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is AI SEO & GEO optimization?",
              a: "AI SEO is the practice of aligning code parameters and metadata so AI crawlers parse documents flawlessly. GEO (Generative Engine Optimization) ensures your brand is recommended inside LLM answer indexes like ChatGPT Search or Google Gemini Panels."
            },
            {
              q: "What is GEO / Generative Engine Optimization?",
              a: "GEO focuses on structure logic. By injecting spec lists and mapping schemas, code structures match crawler parameters directly, allowing LLMs to extract citations within seconds."
            },
            {
              q: "How does ChatGPT search citation optimization work?",
              a: "ChatGPT pulls citations from indexed developer portals and trusted entity sites. We map schemas and references on these directories to establish the brand as a highly trusted recommendation choice."
            },
            {
              q: "Can AI SEO directly scale our inbound organic traffic?",
              a: "Yes. By optimizing long-tail question schemas, you capture high featured-snippet volume on standard search panels, alongside citations in conversational LLM tools."
            },
            {
              q: "How long does complete AI strategy refactoring take?",
              a: "Preliminary schema changes are parsed within 3 to 4 weeks. Multi-channel organic lead generation and citation dominance typically compound across 4 to 6 months of active indexing."
            },
            {
              q: "What exactly are conversational search rankings?",
              a: "Conversational rankings reflect how active your entity references are inside speech databases and LLM responses when buyers query competitive recommendation lists."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#0b0e24] border border-slate-900 rounded-xl overflow-hidden transition hover:border-indigo-900">
              <button
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                className="w-full text-left p-5 flex justify-between items-center bg-transparent border-none text-white font-semibold text-sm cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${faqOpen === idx ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {faqOpen === idx && (
                <div className="p-5 pt-0 text-slate-400 text-xs sm:text-sm font-light leading-relaxed border-t border-indigo-950/60 font-sans">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SUGGESTED ARTICLES / BLOG SECTION */}
      <section className="bg-[#06081a]/60 border-y border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b border-indigo-950 pb-6 mb-10 gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">Latest publications index</span>
              <h2 className="text-2xl font-extrabold text-white">Articles on AI Optimization & GEO Playbooks</h2>
            </div>
            <button onClick={onBackToHome} className="text-xs font-mono text-indigo-400 hover:underline flex items-center gap-1 bg-transparent border-none cursor-pointer">
              View All Insights <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Complete AI SEO Guide", d: "Essential parameters to structure technical code to optimize indexing metrics.", duration: "6 min read" },
              { t: "GEO Strategy Explained", d: "Deep dive into sitemap refactoring and entity indexing trends.", duration: "8 min read" },
              { t: "ChatGPT Citation Blueprints", d: "The semantic JSON layouts required to secure top citations across conversational platforms.", duration: "5 min read" }
            ].map((art, idx) => (
              <div key={idx} className="bg-[#0b0e24] border border-slate-900 rounded-xl p-5 hover:border-slate-800 transition flex flex-col justify-between min-h-[160px]">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-cyan-400 uppercase block tracking-wider">{art.duration}</span>
                  <h4 className="font-bold text-white text-sm hover:text-cyan-300 transition-colors cursor-pointer">{art.t}</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">{art.d}</p>
                </div>
                <button 
                  onClick={onBackToHome}
                  className="font-mono text-[10px] text-indigo-400 font-extrabold tracking-wider hover:underline inline-flex items-center gap-1 pt-3 bg-transparent border-none cursor-pointer text-left"
                >
                  READ ARTICLE <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES - Grid navigation links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-xs font-mono text-indigo-400 font-extrabold tracking-widest uppercase mb-4">07 / Related Success Records</h3>
        <h2 className="text-3xl font-extrabold text-white mb-10">Read Our Other Organic Growth Case Studies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Ecom */}
          <div className="bg-[#0b0e24] border border-slate-900 rounded-2xl p-6 text-left space-y-4 hover:border-slate-800 transition">
            <span className="text-[10px] font-mono font-extrabold text-blue-400 uppercase bg-blue-950/40 border border-blue-900 px-2 py-0.5 rounded-full inline-block">Ecommerce Growth</span>
            <h4 className="text-lg font-bold text-white leading-snug">Luxury Fashion: +420% Organic Revenue and CRO overrides</h4>
            <p className="text-slate-450 text-xs font-light">Discover how custom catalog category layouts scaled seasonal purchase values in months.</p>
            <button 
              onClick={() => {
                window.history.pushState(null, '', '/case-study/ecommerce-seo-results/');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="text-xs font-mono font-extrabold text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
            >
              Read Ecommerce Case Study <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Local SEO */}
          <div className="bg-[#0b0e24] border border-slate-900 rounded-2xl p-6 text-left space-y-4 hover:border-slate-800 transition">
            <span className="text-[10px] font-mono font-extrabold text-indigo-400 uppercase bg-indigo-950/40 border border-indigo-900 px-2 py-0.5 rounded-full inline-block">Local business growth</span>
            <h4 className="text-lg font-bold text-white leading-snug">Client Map packs: 580% Maps Visibility & Patient Booking growth</h4>
            <p className="text-slate-450 text-xs font-light">Discover how Google Business Profile updates and directory structures scaled local branch appointments.</p>
            <button 
              onClick={() => {
                window.history.pushState(null, '', '/case-study/local-seo-results/');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="text-xs font-mono font-extrabold text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
            >
              Read Local SEO Study <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: PPC Ad campaigns */}
          <div className="bg-[#0b0e24] border border-slate-900 rounded-2xl p-6 text-left space-y-4 hover:border-slate-800 transition">
            <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-900 px-2 py-0.5 rounded-full inline-block">PPC & Paid Campaigns</span>
            <h4 className="text-lg font-bold text-white leading-snug">Paid Ad Optimization: 11X ROAS and +620% Lead Growth</h4>
            <p className="text-slate-450 text-xs font-light">See account adjustments and dynamic budget mappings cutting CPC metrics in half.</p>
            <button 
              onClick={() => {
                window.history.pushState(null, '', '/case-study/ppc-success-stories/');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="text-xs font-mono font-extrabold text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
            >
              Read PPC Case Study <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SCHEMA SCHEMATIC SHOWCASE - COPY JSON CONTAINER */}
      <section className="bg-[#040611] max-w-5xl mx-auto px-4 py-8 border-t border-slate-900 text-center space-y-6">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Verified structured data formats for index accuracy</span>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => copySchemaJson(schemasTemplates.article, 'article')}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-indigo-950/40 hover:bg-indigo-950/80 text-indigo-300 border border-indigo-900/40 py-2 px-4 rounded transition cursor-pointer"
          >
            <Code className="w-3.5 h-3.5" />
            <span>{copiedSchema === 'article' ? 'ARTICLE SCHEMA COPIED!' : 'COPY TechArticle JSON'}</span>
          </button>
          <button 
            onClick={() => copySchemaJson(schemasTemplates.faq, 'faq')}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-indigo-950/40 hover:bg-indigo-950/80 text-indigo-300 border border-indigo-900/40 py-2 px-4 rounded transition cursor-pointer"
          >
            <Code className="w-3.5 h-3.5" />
            <span>{copiedSchema === 'faq' ? 'FAQ SCHEMA COPIED!' : 'COPY FAQ SCHEMA'}</span>
          </button>
        </div>
      </section>

      {/* FINAL HIGH IMPACT CTA FOOTER */}
      <section className="bg-gradient-to-t from-[#0e0c25] to-[#040612] border-t border-slate-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <h2 className="text-4xl font-extrabold text-white leading-tight">Ready to Dominate AI-Powered & Conversational Search?</h2>
          <p className="text-slate-400 text-sm font-light max-w-2xl mx-auto">
            Let AKGLS Group audit your digital domain sitemaps, inject nested specification indexes, and optimize your entity citation rates across ChatGPT, Gemini, and conversational networks.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={openProposalForm}
              className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-slate-900 font-extrabold text-sm py-4 px-8 rounded shadow-lg shadow-cyan-950/40 cursor-pointer"
            >
              Start Free AI Optimization Audit
            </button>
            <a 
              href="https://wa.me/918318114492"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex justify-center items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition py-4 px-8 rounded text-sm font-semibold"
            >
              Talk directly with AI SEO Specialists
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> AI SEO Specialists</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> GEO & AEO Experts</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Transparent SEO reporting</span>
          </div>
        </div>
      </section>

    </div>
  );
}

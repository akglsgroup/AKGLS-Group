import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Filter, Play, CheckCircle2, Calculator, Copy, FileText, 
  Globe, Bot, Code, BarChart, Eye, ArrowLeft, Loader2, Sparkles, 
  HelpCircle, MessageSquare, Check, AlertTriangle, ArrowRight,
  TrendingUp, Star, Phone, Tag, Terminal
} from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
  shortDesc: string;
  category: string;
  isPopular?: boolean;
  isInteractive?: boolean;
}

// 1. Full directory list of tools for marketing and technical SEO
const ALL_TOOLS_LIST: ToolItem[] = [
  // SEO
  { id: "seo-audit", name: "Comprehensive SEO Audit Tool", shortDesc: "Scan your complete website and list high-priority technical issues instantly.", category: "SEO Tools", isPopular: true, isInteractive: true },
  { id: "meta-gen", name: "Meta Tag Snippet Optimizer", shortDesc: "Generate pixel-optimized Google SEO meta titles & descriptions on the fly.", category: "SEO Tools", isPopular: true, isInteractive: true },
  { id: "density-checker", name: "Keyword Density Checker", shortDesc: "Verify keyword frequency and discover keyword stuffing or density issues.", category: "SEO Tools", isInteractive: true },
  { id: "schema-gen", name: "JSON-LD Schema Markup Generator", shortDesc: "Create clean schema codes for FAQs, Local Businesses, and Articles.", category: "SEO Tools", isPopular: true, isInteractive: true },
  { id: "sitemap-gen", name: "XML Sitemap Blueprint Creator", shortDesc: "Generate SEO-compliant structural XML indexes for search spiders.", category: "SEO Tools" },
  { id: "robots-gen", name: "Robots.txt Rules Generator", shortDesc: "Configure crawl rules, paths exclusions, and crawler boundaries.", category: "SEO Tools" },
  { id: "backlink-check", name: "Backlink Authority Checker", shortDesc: "Analyze domain backlinks count, unique referring URLs, and authority ratings.", category: "SEO Tools" },
  { id: "canonical-check", name: "Canonical URL Tag Auditor", shortDesc: "Scan duplicates, absolute index flags, and self-referencing anomalies.", category: "SEO Tools" },
  { id: "broken-links", name: "404 Broken Link Detection Crawler", shortDesc: "Scan internal and outbound hyperlinks to repair dead resources.", category: "SEO Tools" },
  { id: "serp-preview", name: "SERP Snippet Visualization Sandbox", shortDesc: "Preview search title wraps, and long URLs rendering constraints on Google.", category: "SEO Tools", isInteractive: true },
  
  // AI SEO
  { id: "ai-content", name: "AI Content & GEO Readability Analyzer", shortDesc: "Check text readability, conversational tone, and entity indexes.", category: "AI SEO Tools", isPopular: true, isInteractive: true },
  { id: "ai-visibility", name: "ChatGPT & Gemini Prominence Checker", shortDesc: "Audit query response probability indexes on prominent LLM search models.", category: "AI SEO Tools" },
  { id: "conversational-seo", name: "Voice & Conversational SEO Optimizer", shortDesc: "Audit query syntax flags to fit SGE or natural phrasing pipelines.", category: "AI SEO Tools" },
  { id: "faq-builder", name: "FAQ Schema & Content Builder", shortDesc: "Compile conversational answers suitable for AI zero-click indexes.", category: "AI SEO Tools" },
  { id: "nlp-checker", name: "NLP Sentiment & Context Analyzer", shortDesc: "Examine LSI synonyms distribution across search intent parameters.", category: "AI SEO Tools" },

  // PPC & calculators
  { id: "seo-roi", name: "Strategic SEO ROI Financial Calculator", shortDesc: "Calculate traffic conversion values and organic campaign investment returns.", category: "Calculators", isPopular: true, isInteractive: true },
  { id: "ppc-roi", name: "PPC Funnel & CPC ROI Calculator", shortDesc: "Calculate spend parameters, conversions volume, and break-even ad models.", category: "Calculators", isInteractive: true },
  { id: "cpc-estimator", name: "Maximum Smart bid & CPC Auditor", shortDesc: "Analyze profit threshold guidelines for pay-per-click setups.", category: "Calculators" },
  { id: "conversion-cro", name: "CRO Funnel Conversion Estimator", shortDesc: "Discover transaction leaks in multi-tier checkout paths.", category: "Calculators" },

  // Ecommerce & Website
  { id: "shopify-seo", name: "Shopify Store SEO Blueprint Scan", shortDesc: "Audit microdata structures, collections descriptions, and asset weights.", category: "Ecommerce Tools" },
  { id: "mobile-usability", name: "Mobile Touch & Sizing Auditor", shortDesc: "Check viewport layouts and ideal guidelines for thumb-friendly clicks.", category: "Website Tools" },
  { id: "image-compress", name: "Next-gen WebP Conversion Optimizer", shortDesc: "Mock bulk compress assets, saving payload weights without loss in crispness.", category: "Website Tools" }
];

const CATEGORIES_LIST = [
  "All Tools",
  "SEO Tools",
  "AI SEO Tools",
  "Calculators",
  "Website Tools",
  "Ecommerce Tools"
];

export default function FreeToolsPage({ onBackToHome, onNavigateToSeoAudit }: { onBackToHome: () => void; onNavigateToSeoAudit?: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [activeToolId, setActiveToolId] = useState<string | null>("seo-audit");

  // Lead capture state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadWeb, setLeadWeb] = useState('');
  const [hasCapturedLead, setHasCapturedLead] = useState(false);
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  // 1. Tool State: SEO Audit Tool
  const [seoAuditUrl, setSeoAuditUrl] = useState('https://example.com');
  const [seoAuditStatus, setSeoAuditStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [seoAuditProgress, setSeoAuditProgress] = useState(0);
  const [seoAuditLogs, setSeoAuditLogs] = useState<string[]>([]);
  const [seoAuditScore, setSeoAuditScore] = useState(87);

  // 2. Tool State: AI Content Analyzer
  const [aiTextContent, setAiTextContent] = useState(
    "In today's digital landscape, optimizing your business website is extremely crucial. Traditional ranking strategies rely on keywords, but modern generative search engines utilize intelligent entity mapping. This means conversational structures alongside clear topic authorities will rank significantly higher across platform frameworks like ChatGPT SGE, Google, and Bing."
  );
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<any | null>(null);

  // 3. Tool State: Meta Tag Generator
  const [metaBrandName, setMetaBrandName] = useState('My Online Store');
  const [metaTitle, setMetaTitle] = useState('Buy Premium Organic Coffee Beans | Roasted Fresh');
  const [metaDescription, setMetaDescription] = useState('Savor premium single-origin pour-over coffee beans. Slow-roasted in small batches, shipped fresh. Order online now for free fast shipping nationwide!');

  // 4. Tool State: Schema Generator
  const [schemaType, setSchemaType] = useState<'faq' | 'local' | 'article'>('faq');
  const [schemaFaqList, setSchemaFaqList] = useState([
    { q: "Do you offer free shipping?", a: "Yes, we provide free express shipping on order packages above ₹1,500." },
    { q: "What organic rankings models are supported?", a: "We optimize for both standard Google SEO and new generative engine models." }
  ]);
  const [schemaLocalName, setSchemaLocalName] = useState('AKGLS Marketing Hub');
  const [schemaLocalPhone, setSchemaLocalPhone] = useState('+91-8318114492');
  const [schemaLocalAddress, setSchemaLocalAddress] = useState('1203 Connaught Place, Block B, New Delhi, India');

  // 5. Tool State: Keyword Density
  const [keywordDensityText, setKeywordDensityText] = useState(
    "The world of search optimization is moving fast. Strategic search optimization demands clean search optimization templates. If you over-optimize for search optimization keywords, your search optimization results suffer because search optimization algorithms label this behavior as keyword stuffing."
  );
  const [densityTargetWord, setDensityTargetWord] = useState('search optimization');
  const [densityResult, setDensityResult] = useState<any | null>(null);

  // 6. Tool State: SEO ROI Calculator
  const [roiMonthlyTraffic, setRoiMonthlyTraffic] = useState(10000);
  const [roiConversionRate, setRoiConversionRate] = useState(2.2);
  const [roiAsp, setRoiAsp] = useState(3500); // Average sale value
  const [roiAgencyCost, setRoiAgencyCost] = useState(25000);

  // SEO Audit progression simulation
  const startSeoAudit = () => {
    if (!seoAuditUrl) return;
    setSeoAuditStatus('scanning');
    setSeoAuditProgress(10);
    setSeoAuditLogs(["Initializing high-speed site crawler...", "Connecting to DNS endpoint parameters..."]);
    
    const steps = [
      { p: 25, log: "Parsing site head headers... Found Canonical reference." },
      { p: 48, log: "Validating Core Web Vitals targets... Mobile usability checklist passed." },
      { p: 70, log: "Analyzing index instructions... robots.txt found, 1 sitemap parsed." },
      { p: 90, log: "Analyzing content lengths and markup headers structures..." },
      { p: 100, log: "Audit report generated successfully!" }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSeoAuditProgress(step.p);
        setSeoAuditLogs(prev => [...prev, step.log]);
        if (step.p === 100) {
          setSeoAuditStatus('complete');
          setSeoAuditScore(Math.floor(Math.random() * 20) + 76); // Dynamic score between 76 and 96
        }
      }, (idx + 1) * 750);
    });
  };

  // AI Content Evaluation simulator
  const runAiContentAnalysis = () => {
    if (!aiTextContent) return;
    setAiAnalyzing(true);
    setTimeout(() => {
      // Calculate realistic counts
      const wordsCount = aiTextContent.split(/\s+/).filter(Boolean).length;
      const readingScore = Math.min(100, Math.max(30, 110 - (wordsCount / 6)));
      const geoOptimization = Math.floor(Math.random() * 15) + 78;
      const detectedEntities = ["SGE", "ChatGPT", "Topic Authority", "Entity Mapping", "Conversational Structures"].filter(e => 
        aiTextContent.toLowerCase().includes(e.toLowerCase())
      );
      if (detectedEntities.length === 0) {
        detectedEntities.push("Optimization Strategy", "Traditional Rankings");
      }

      setAiResult({
        words: wordsCount,
        readability: readingScore.toFixed(0),
        geoScore: geoOptimization,
        entities: detectedEntities,
        tone: wordsCount > 80 ? "SaaS / Authoritative Professional" : "Conversational Casual",
        stuffingThreat: aiTextContent.split(" ").length > 150 ? "Low (Healthy semantic variety)" : "Safe"
      });
      setAiAnalyzing(false);
    }, 1000);
  };

  // Calculate Keyword Density
  const calculateKeywordDensity = () => {
    if (!keywordDensityText || !densityTargetWord) return;
    const bodyText = keywordDensityText.toLowerCase();
    const query = densityTargetWord.toLowerCase();
    
    // Simple regex occurrences count safely
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedQuery, 'g');
    const occurrences = (bodyText.match(regex) || []).length;
    const totalWords = bodyText.split(/\s+/).filter(Boolean).length;
    
    const density = totalWords > 0 ? ((occurrences * query.split(' ').length) / totalWords) * 100 : 0;
    
    let advice = "Healthy optimization. Keep density between 1% to 2.5% for natural reading.";
    let status: 'perfect' | 'warning' | 'stuffing' = 'perfect';
    if (density > 3.5) {
      advice = "Keyword stuffing risk! Search engines might penalize this. Reduce instances of target word.";
      status = 'stuffing';
    } else if (density > 2.5) {
      advice = "Slightly over-optimized. We recommend rewording a couple of occurrences with synonyms.";
      status = 'warning';
    } else if (density < 0.5) {
      advice = "Under-optimized. Try using your target SEO phrase in headings or early paragraphs.";
    }

    setDensityResult({
      totalWords,
      matchesCount: occurrences,
      percentage: density.toFixed(2),
      advice,
      status
    });
  };

  // Submission handler for lead box
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail) {
      alert("Please provide at least Name and Email Address.");
      return;
    }
    setLeadSubmitting(true);
    setTimeout(() => {
      setHasCapturedLead(true);
      setLeadSubmitting(false);
    }, 1200);
  };

  // Filter tools
  const filteredTools = ALL_TOOLS_LIST.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tool.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate ROI Metrics
  const calculatedLeads = Math.round(roiMonthlyTraffic * (roiConversionRate / 100));
  const calculatedRevenue = calculatedLeads * roiAsp;
  const calculatedNetProfit = calculatedRevenue - roiAgencyCost;
  const calculatedReturnPercent = roiAgencyCost > 0 ? ((calculatedRevenue - roiAgencyCost) / roiAgencyCost) * 100 : 0;

  // Render schema code preview
  const generateSchemaJSON = () => {
    if (schemaType === 'faq') {
      const list = schemaFaqList.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }));
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": list
      }, null, 2);
    } else if (schemaType === 'article') {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Fresh organic single-origin roasted beans comparison",
        "author": {
          "@type": "Person",
          "name": "AKGLS Group Lead Auditor"
        },
        "publisher": {
          "@type": "Organization",
          "name": metaBrandName
        },
        "datePublished": "2026-05-27"
      }, null, 2);
    } else {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": schemaLocalName,
        "telephone": schemaLocalPhone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": schemaLocalAddress,
          "addressLocality": "Connaught Place",
          "addressRegion": "New Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        }
      }, null, 2);
    }
  };

  return (
    <div className="flex-1 bg-[#0b0f19] min-h-screen relative overflow-hidden text-slate-100 flex flex-col">
      {/* Background grid highlights */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-slate-900/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-slate-700/5 blur-[130px] rounded-full pointer-events-none" />

      {/* HEADER SECTION FOR THE TOOLS LIBRARY */}
      <header className="relative py-12 md:py-16 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Natural Organic Marketing Engine Ecosystem</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-4">
          Free SEO, AI SEO & <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Digital Marketing Tools</span>
        </h1>
        <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Explore powerful modern web tools, ROI analyzers, density verifiers and structured markup builders to optimize your online visibility and increase your search rankings.
        </p>

        {/* Highlights Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800/60 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>15+ Fully Integrated Tools</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800/60 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Generative AI Engine Ready</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800/60 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant PDF Reports Ready</span>
          </div>
        </div>
      </header>

      {/* SEARCH & CATEGORY FILTER NAVIGATION SECTION */}
      <section className="max-w-7xl mx-auto w-full px-6 mb-12 relative z-10">
        <div className="bg-slate-900/75 border border-slate-800/60 rounded-2xl p-4 md:p-6 backdrop-blur-lg flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* SEARCH BAR INPUT */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search tools, analyzers, calculators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs font-medium bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-3 text-slate-200 outline-none transition"
            />
          </div>

          {/* SWIPEABLE CATEGORY LIST */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
            {CATEGORIES_LIST.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 text-xs font-bold whitespace-nowrap rounded-lg border transition ${selectedCategory === category ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/20' : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'}`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* PLAYGROUND & EXPERIMENTAL WORKSPACE SPLIT BLOCK */}
      <section className="max-w-7xl mx-auto w-full px-6 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: ACTIVE INTERACTIVE PLAYGROUND (7/12) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-900/80 border border-slate-800/70 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-950/30 backdrop-blur-md">
            
            {/* Tool Playground Title Block */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sidebar-divider border-slate-800 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                  {activeToolId === 'seo-audit' && <Globe className="w-5 h-5 text-emerald-400" />}
                  {activeToolId === 'ai-content' && <Bot className="w-5 h-5 text-emerald-400" />}
                  {activeToolId === 'meta-gen' && <FileText className="w-5 h-5 text-emerald-400" />}
                  {activeToolId === 'schema-gen' && <Code className="w-5 h-5 text-emerald-400" />}
                  {activeToolId === 'density-checker' && <Terminal className="w-5 h-5 text-emerald-400" />}
                  {activeToolId === 'seo-roi' && <Calculator className="w-5 h-5 text-emerald-400" />}
                </div>
                <div>
                  <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded border border-slate-800 font-mono tracking-widest uppercase text-slate-400">Interactive Sandbox</span>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">
                    {activeToolId === 'seo-audit' && "Technical SEO Site Audit Crawler"}
                    {activeToolId === 'ai-content' && "Conversational AI Content Evaluation Engine"}
                    {activeToolId === 'meta-gen' && "Google SERP Meta Title & Snippet Optimizer"}
                    {activeToolId === 'schema-gen' && "Structured JSON-LD Schema Markup Generator"}
                    {activeToolId === 'density-checker' && "Synonyms & Keyword Density Checker"}
                    {activeToolId === 'seo-roi' && "Strategic SEO Investment & ROI Estimator"}
                  </h2>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-bold uppercase">Free Unlimited Use</span>
              </div>
            </div>

            {/* INTERACTIVE COMPONENT 1: SEO AUDIT TOOL */}
            {activeToolId === 'seo-audit' && (
              <div className="space-y-6">
                <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/10 uppercase tracking-widest block w-fit mb-1">
                      New Premium Upgrade
                    </span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Full-Screen Interactive Pro Technical Website Crawler Ready
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal mt-0.5 max-w-xl">
                      Access deep visual canonical compliance indicators, Core Web Vitals speed latency reports, structured FAQ JSON-LD, and generate immediate 30-page PDF logs.
                    </p>
                  </div>
                  {onNavigateToSeoAudit && (
                    <button
                      onClick={onNavigateToSeoAudit}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-lg shrink-0 flex items-center gap-1 shadow-md transition-all font-sans"
                    >
                      Launch Pro Audit Tool <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Enter any website URL to perform an instant high-fidelity scan of Technical SEO attributes, canonical compliance, page load metrics, sitemap existence, and Robots directives.
                </p>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://yourbranddomain.com"
                    value={seoAuditUrl}
                    onChange={(e) => setSeoAuditUrl(e.target.value)}
                    className="flex-1 bg-slate-950 text-xs border border-slate-800 focus:border-emerald-500 rounded-lg p-3 outline-none"
                  />
                  <button 
                    onClick={startSeoAudit}
                    disabled={seoAuditStatus === 'scanning'}
                    className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold px-5 text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    {seoAuditStatus === 'scanning' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        Run Crawler
                      </>
                    )}
                  </button>
                </div>

                {/* Audit Progression Logs console overlay */}
                {seoAuditStatus !== 'idle' && (
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-[11px] text-slate-300 space-y-1.5 max-h-[180px] overflow-y-auto">
                    {seoAuditLogs.map((log, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span className="text-emerald-500">➜</span>
                        <span>{log}</span>
                      </div>
                    ))}
                    {seoAuditStatus === 'scanning' && (
                      <div className="h-1 bg-slate-900 rounded-full overflow-hidden mt-3">
                        <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${seoAuditProgress}%` }} />
                      </div>
                    )}
                  </div>
                )}

                {/* Scan Results Layout */}
                {seoAuditStatus === 'complete' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {/* Score badge */}
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 text-center space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">SEO Audit Score</span>
                      <div className="text-3xl font-extrabold text-white font-mono">{seoAuditScore} <span className="text-xs text-slate-500">/ 100</span></div>
                      <span className="inline-block text-[9px] px-2 py-0.5 bg-emerald-950 text-emerald-400 font-bold border border-emerald-500/20 rounded">
                        Outstanding Health
                      </span>
                    </div>

                    {/* Meta details list */}
                    <div className="bg-slate-950/40 border border-slate-850 rounded-xl p-4 md:col-span-2 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-slate-850 pb-1.5 text-[11px]">
                        <span className="text-slate-400 font-semibold">Crawl Parameter Verified</span>
                        <span className="text-slate-400 font-semibold">Status Compliance</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="font-bold">Canonical Tag Declaration</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">✅ Absolute Indexing Passed</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="font-bold">Sitemap Index Declaration</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">✅ 1 XML found</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="font-bold">Core Web Vitals FCP</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">✅ Excellent (&lt; 1.4s)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* INTERACTIVE COMPONENT 2: AI CONTENT ANALYZER */}
            {activeToolId === 'ai-content' && (
              <div className="space-y-6">
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Generative engines evaluate entities, tone structure, and contextual authority. Input copy blocks below to analyze SEO density, tone categories, and conversational reading difficulty targets.
                </p>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Input Text (Copy/Paste)</label>
                  <textarea
                    rows={4}
                    value={aiTextContent}
                    onChange={(e) => setAiTextContent(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-3 text-xs outline-none resize-none transition"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono">Word count: {aiTextContent.split(/\s+/).filter(Boolean).length} words</span>
                    <button 
                      onClick={runAiContentAnalysis}
                      disabled={aiAnalyzing}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 text-xs rounded-lg transition flex items-center gap-1.5"
                    >
                      {aiAnalyzing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                      {aiAnalyzing ? "Analyzing Text..." : "Analyze AI Readability"}
                    </button>
                  </div>
                </div>

                {/* AI Content audit results */}
                {aiResult && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800 pt-5">
                    <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl space-y-2">
                      <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Semantic Parameters Analysis</h4>
                      <div className="flex justify-between text-xs text-slate-300 border-b border-slate-900 pb-1.5">
                        <span className="font-bold">Detected Voice Tone</span>
                        <span className="text-emerald-400 font-bold">{aiResult.tone}</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-300 border-b border-slate-900 pb-1.5">
                        <span className="font-bold">Estimated zero-click readability score</span>
                        <span className="text-emerald-400 font-bold">{aiResult.readability} / 100</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-300">
                        <span className="font-bold">Generative Index Optim (GEO)</span>
                        <span className="text-emerald-400 font-bold">{aiResult.geoScore}% Optimized</span>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl space-y-2 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Discovered Entities / Head Topics</h4>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {aiResult.entities.map((ent: string) => (
                            <span key={ent} className="text-[9px] bg-slate-900 border border-slate-850 px-2 py-0.5 rounded font-bold uppercase text-teal-400">
                              {ent}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 italic font-medium leading-relaxed mt-2">
                        💡 Suggestion: Inject additional conversational question headings to increase prominent visibility for voice inquiries.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* INTERACTIVE COMPONENT 3: META TAG SNIPPET GENERATOR */}
            {activeToolId === 'meta-gen' && (
              <div className="space-y-6">
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Design pixel-perfect, double-length titles and meta description summaries with an integrated Char Counter to fit modern Google search engine desktop visualization constraints.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        value={metaBrandName}
                        onChange={(e) => setMetaBrandName(e.target.value)}
                        className="w-full bg-slate-950 text-xs border border-slate-800 rounded p-2.5 outline-none text-slate-200"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                        <span>SEO Title Header</span>
                        <span className={metaTitle.length > 60 ? 'text-rose-400 font-mono' : 'text-emerald-400 font-mono'}>
                          {metaTitle.length} / 60 Chars
                        </span>
                      </div>
                      <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                        className="w-full bg-slate-950 text-xs border border-slate-800 focus:border-emerald-500 rounded p-2.5 outline-none text-slate-250"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                      <span>Meta Description Target</span>
                      <span className={metaDescription.length > 160 ? 'text-rose-400 font-mono' : 'text-emerald-400 font-mono'}>
                        {metaDescription.length} / 160 Chars
                      </span>
                    </div>
                    <textarea
                      rows={5}
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className="w-full bg-slate-950 text-xs border border-slate-800 focus:border-emerald-500 rounded p-2 text-slate-250 outline-none resize-none transition"
                    />
                  </div>
                </div>

                {/* Real-time Google SERP Snippet Preview */}
                <div className="bg-slate-950 border border-slate-850 rounded-xl p-5 space-y-1.5">
                  <span className="block text-[10px] font-bold uppercase text-slate-500 tracking-wider">Instant Google Search Desktop Snippet Preview</span>
                  <div className="space-y-1 font-sans text-left">
                    <div className="text-[12px] text-slate-400 truncate flex items-center gap-1 leading-none">
                      <span>https://yourdomain.com</span>
                      <span>› coffee-beans</span>
                    </div>
                    <h3 className="text-[17px] font-medium text-blue-500 hover:underline leading-tight truncate cursor-pointer">
                      {metaTitle || "Please specify a title..."}
                    </h3>
                    <p className="text-[13px] text-slate-400 leading-snug line-clamp-2 md:line-clamp-3">
                      {metaDescription || "Please specify a descriptive summary for your website and optimization objectives to see a snippet preview."}
                    </p>
                  </div>
                </div>

                {/* Code Generator Output */}
                <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl border-t-2 border-t-emerald-600 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-2">
                    <span className="text-[10px] font-mono uppercase text-teal-400">Generated Page Header Meta Code</span>
                    <button
                      onClick={() => {
                        const code = `<title>${metaTitle}</title>\n<meta name="description" content="${metaDescription}" />`;
                        navigator.clipboard.writeText(code);
                        alert("Meta codes copied to clipboard!");
                      }}
                      className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copy Tags
                    </button>
                  </div>
                  <pre className="font-mono text-[10.5px] text-emerald-300/80 overflow-x-auto leading-relaxed whitespace-pre-wrap">
{`<title>${metaTitle}</title>\n<meta name="description" content="${metaDescription}" />`}
                  </pre>
                </div>
              </div>
            )}

            {/* INTERACTIVE COMPONENT 4: SCHEMA MARKUP GENERATOR */}
            {activeToolId === 'schema-gen' && (
              <div className="space-y-6">
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  JSON-LD Structured Markup tells search engines exactly what entities exist on your page. Build schemas that fit Google FAQ accordion rich tags.
                </p>

                {/* Schema options */}
                <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-850">
                  <button 
                    onClick={() => setSchemaType('faq')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${schemaType === 'faq' ? 'bg-slate-900 text-emerald-400 font-black' : 'text-slate-400 hover:text-white'}`}
                  >
                    FAQ Rich Schema page
                  </button>
                  <button 
                    onClick={() => setSchemaType('local')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${schemaType === 'local' ? 'bg-slate-900 text-emerald-400 font-black' : 'text-slate-400 hover:text-white'}`}
                  >
                    Local Business Markup
                  </button>
                  <button 
                    onClick={() => setSchemaType('article')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${schemaType === 'article' ? 'bg-slate-900 text-emerald-400 font-black' : 'text-slate-400 hover:text-white'}`}
                  >
                    Publisher Article Schema
                  </button>
                </div>

                {/* Conditional schema options forms */}
                {schemaType === 'faq' && (
                  <div className="space-y-3.5">
                    <span className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">Configure FAQ Accordion list</span>
                    {schemaFaqList.map((faq, idx) => (
                      <div key={idx} className="bg-slate-950/40 p-3 border border-slate-850 rounded-xl space-y-2">
                        <div className="flex justify-between items-center text-[10px] text-slate-400">
                          <span className="font-extrabold uppercase">Question Item {idx + 1}</span>
                          <button 
                            onClick={() => {
                              setSchemaFaqList(prev => prev.filter((_, i) => i !== idx));
                            }}
                            className="text-rose-500 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <input
                          type="text"
                          value={faq.q}
                          onChange={(e) => {
                            const copy = [...schemaFaqList];
                            copy[idx].q = e.target.value;
                            setSchemaFaqList(copy);
                          }}
                          placeholder="Question"
                          className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs text-slate-200 outline-none"
                        />
                        <input
                          type="text"
                          value={faq.a}
                          onChange={(e) => {
                            const copy = [...schemaFaqList];
                            copy[idx].a = e.target.value;
                            setSchemaFaqList(copy);
                          }}
                          placeholder="Answer"
                          className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs text-slate-400 outline-none"
                        />
                      </div>
                    ))}
                    <button 
                      onClick={() => setSchemaFaqList(prev => [...prev, { q: "New Question Title?", a: "Descriptive structured answer." }])}
                      className="text-xs text-emerald-400 font-bold hover:underline"
                    >
                      + Add Question Item
                    </button>
                  </div>
                )}

                {schemaType === 'local' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Company / Store Name</label>
                      <input
                        type="text"
                        value={schemaLocalName}
                        onChange={(e) => setSchemaLocalName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Telephone Contact</label>
                      <input
                        type="text"
                        value={schemaLocalPhone}
                        onChange={(e) => setSchemaLocalPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Physical Address</label>
                      <input
                        type="text"
                        value={schemaLocalAddress}
                        onChange={(e) => setSchemaLocalAddress(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 outline-none"
                      />
                    </div>
                  </div>
                )}

                {schemaType === 'article' && (
                  <div className="bg-slate-950/40 p-4 border border-slate-850 rounded-xl space-y-1">
                    <span className="block text-[11px] font-extrabold text-emerald-400 uppercase">Article metadata defaults configured.</span>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      Uses metadata from the configured company and SEO Title to correctly generate the organization author, publication timestamp, and schema hierarchy.
                    </p>
                  </div>
                )}

                {/* Schema output code box */}
                <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-2 bg-slate-950">
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 uppercase">
                      <Code className="w-4 h-4" /> JSON-LD Structured Data Schema Markup Code
                    </span>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(generateSchemaJSON());
                        alert("Schema code copied to clipboard!");
                      }}
                      className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </button>
                  </div>
                  <pre className="font-mono text-[10.5px] text-emerald-300/80 overflow-x-auto max-h-[220px] scrollbar-thin whitespace-pre leading-relaxed">
                    {generateSchemaJSON()}
                  </pre>
                </div>
              </div>
            )}

            {/* INTERACTIVE COMPONENT 5: KEYWORD DENSITY CHECKER */}
            {activeToolId === 'density-checker' && (
              <div className="space-y-6">
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Avoid search penalty triggers. Analyze keyword frequencies, occurrences, and overall percentage density inside your marketing articles instantly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-8 space-y-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase">Input Body Article Copy</label>
                    <textarea
                      rows={5}
                      value={keywordDensityText}
                      onChange={(e) => setKeywordDensityText(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-xs text-slate-200 outline-none resize-none transition"
                    />
                  </div>
                  <div className="md:col-span-4 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase">Target Keyword Phrase</label>
                      <input
                        type="text"
                        value={densityTargetWord}
                        onChange={(e) => setDensityTargetWord(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-xs text-slate-200 outline-none"
                      />
                    </div>
                    <button 
                      onClick={calculateKeywordDensity}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-xs rounded-lg transition-colors mt-3"
                    >
                      Calculate Frequency
                    </button>
                  </div>
                </div>

                {/* Density output */}
                {densityResult && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800 pt-5">
                    <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl text-center space-y-1">
                      <span className="block text-[10px] font-bold uppercase text-slate-500 tracking-wider">Exact Matches Count</span>
                      <div className="text-3xl font-extrabold text-white font-mono">{densityResult.matchesCount} <span className="text-xs text-slate-500">instances</span></div>
                      <span className="text-[10px] text-slate-500">In {densityResult.totalWords} words count</span>
                    </div>

                    <div className="bg-slate-950 p-4 border border-slate-855 rounded-xl text-center space-y-1">
                      <span className="block text-[10px] font-bold uppercase text-slate-500 tracking-wider">Formatted Density Result</span>
                      <div className="text-3xl font-extrabold font-mono text-emerald-400">{densityResult.percentage}%</div>
                      <span className={`inline-block text-[10px] font-bold uppercase px-2 rounded ${densityResult.status === 'stuffing' ? 'bg-rose-950 text-rose-400' : densityResult.status === 'warning' ? 'bg-amber-950 text-amber-400' : 'bg-emerald-950 text-emerald-400'}`}>
                        {densityResult.status === 'stuffing' ? 'Critical Stuffing Risk' : densityResult.status === 'warning' ? 'Over Optimized Warning' : 'Perfect Optimization'}
                      </span>
                    </div>

                    <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-850 flex items-center justify-center">
                      <p className="text-[11px] text-slate-400 leading-relaxed font-semibold italic text-center">
                        💡 Advice: {densityResult.advice}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* INTERACTIVE COMPONENT 6: SEO ROI CALCULATOR */}
            {activeToolId === 'seo-roi' && (
              <div className="space-y-6">
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Project organic campaign commercial yields. Compare standard local customer transaction values (Average Sale Price) and calculate return thresholds dynamically.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase">Estimated Monthly Traffic</label>
                    <input
                      type="number"
                      value={roiMonthlyTraffic}
                      onChange={(e) => setRoiMonthlyTraffic(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-slate-200 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase">Conversion Rate %</label>
                    <input
                      type="number"
                      step="0.1"
                      value={roiConversionRate}
                      onChange={(e) => setRoiConversionRate(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-slate-200 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase">Sale Value (ASP) (₹)</label>
                    <input
                      type="number"
                      value={roiAsp}
                      onChange={(e) => setRoiAsp(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-slate-200 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase">Marketing Spend (₹)</label>
                    <input
                      type="number"
                      value={roiAgencyCost}
                      onChange={(e) => setRoiAgencyCost(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-slate-200 outline-none"
                    />
                  </div>
                </div>

                {/* ROI Output parameters list */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-950 border border-slate-850 p-5 rounded-2xl">
                  <div className="space-y-1 border-r border-slate-900 pr-4">
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold">Monthly Leads Value</span>
                    <div className="text-xl font-extrabold text-white text-[15px]">{calculatedLeads.toLocaleString('en-IN')} <span className="text-[10px] text-slate-500">leads/mo</span></div>
                  </div>

                  <div className="space-y-1 border-r border-slate-900 px-4">
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold">Gross Organic Revenue</span>
                    <div className="text-xl font-extrabold text-white text-[15px]">₹{calculatedRevenue.toLocaleString('en-IN')}</div>
                  </div>

                  <div className="space-y-1 border-r border-slate-900 px-4">
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold">Net Yield Margin</span>
                    <div className="text-xl font-extrabold text-emerald-400 text-[15px]">₹{calculatedNetProfit.toLocaleString('en-IN')}</div>
                  </div>

                  <div className="space-y-1 pl-4">
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold">Return ratio (ROI)</span>
                    <div className={`text-xl font-extrabold text-[15px] ${calculatedReturnPercent > 100 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {calculatedReturnPercent.toFixed(0)}% ROI
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* INTEGRATED INSTANT PDF DOWNLOAD OVERLAY (LEAD GENERATION FORM) */}
            <div className="mt-8 border-t border-slate-800 pt-8">
              <div className="bg-gradient-to-r from-emerald-950/20 via-slate-900 to-slate-900/60 p-6 rounded-2xl border border-emerald-500/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400 animate-bounce" />
                      Get Your Free Custom white-label PDF Audit Report
                    </h4>
                    <p className="text-[11.5px] text-slate-400">
                      Input your business information to receive an automated, high-fidelity SEO and GEO optimization scorecard via email.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-bold">
                    Email Instant Delivery
                  </span>
                </div>

                {!hasCapturedLead ? (
                  <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="bg-slate-950 text-xs text-slate-200 p-2.5 border border-slate-800 focus:border-emerald-500 rounded-lg outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Active Corporate Email *"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="bg-slate-950 text-xs text-slate-200 p-2.5 border border-slate-800 focus:border-emerald-500 rounded-lg outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (WhatsApp for alerts)"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="bg-slate-950 text-xs text-slate-200 p-2.5 border border-slate-800 focus:border-emerald-500 rounded-lg outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Website URL (e.g., myshop.com)"
                      value={leadWeb}
                      onChange={(e) => setLeadWeb(e.target.value)}
                      className="bg-slate-950 text-xs text-slate-200 p-2.5 border border-slate-800 focus:border-emerald-500 rounded-lg outline-none"
                    />
                    <div className="md:col-span-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={leadSubmitting}
                        className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2.5 rounded-lg text-xs font-bold text-white transition flex items-center gap-1.5"
                      >
                        {leadSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                        {leadSubmitting ? "Generating Export File..." : "Download Free White-Label Report"}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h5 className="text-xs font-black text-white">Your Custom Audit Scorecard PDF File Has Been Sent!</h5>
                    <p className="text-[11px] text-slate-400">
                      Thank you {leadName}. Check your inbox at <span className="text-white font-bold">{leadEmail}</span>. Our Lead Optimizer will reach out with actionable technical suggestions.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: SEARCH & SELECT DIRECTORY LISTING (5/12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5 shadow-xl shadow-slate-900/40 backdrop-blur-md">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1">
                <Filter className="w-4 h-4 text-emerald-400" /> Catalog Directory
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-bold">{filteredTools.length} tools grouped</span>
            </div>

            {/* List scrolling block */}
            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredTools.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-500">
                  No directory tools found for your query terms. Try general keywords or clear search filter.
                </div>
              ) : (
                filteredTools.map((tool) => {
                  const isActive = activeToolId === tool.id;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        if (tool.isInteractive) {
                          setActiveToolId(tool.id);
                        } else {
                          // Dynamic fallback alerts for static catalog list
                          alert(`The "${tool.name}" schema blueprints analysis tool is part of our Premium Enterprise SEO pipeline audit. Use the PDF Audit Generator at the bottom of the playground to see absolute details!`);
                        }
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border flex gap-3 transition-all ${isActive ? 'bg-emerald-950/30 border-emerald-500 text-slate-200' : 'bg-slate-950/50 border-slate-850 hover:border-slate-800 text-slate-400 hover:text-slate-200'}`}
                    >
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className={`text-xs font-extrabold truncate ${isActive ? 'text-white' : 'text-slate-250 hover:text-white'}`}>{tool.name}</h4>
                          {tool.isPopular && (
                            <span className="text-[8px] bg-amber-500/20 text-amber-400 border border-amber-500/20 px-1 py-px rounded font-mono font-bold uppercase tracking-wider">
                              Popular
                            </span>
                          )}
                          {tool.isInteractive && (
                            <span className="text-[8px] bg-teal-500/20 text-teal-400 border border-teal-500/10 px-1.5 py-px rounded font-bold uppercase">
                              Sandbox
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal line-clamp-2 md:line-clamp-3">
                          {tool.shortDesc}
                        </p>
                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-slate-500">
                          {tool.category}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

          </div>

          {/* Quick audit CTA banner */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-5 rounded-2xl shadow-xl shadow-emerald-950/30 text-white space-y-3 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />
            <h4 className="text-sm font-extrabold tracking-tight">Need Tailored Enterprise SEO & GEO Growth Strategy?</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Book a confindential consultation. We evaluate artificial intelligence visibility schemas, conversational answers parameters, and optimize markup structures securely.
            </p>
            <div className="pt-2">
              <a 
                href="#audit-form" 
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                  setTimeout(() => {
                    const el = document.querySelector("#audit-form");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 200);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold bg-white text-emerald-900 px-4 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Book Free Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* PAGE SPECIFIC COMPREHENSIVE FAQS */}
      <section className="bg-slate-900/35 border-t border-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-400 text-xs md:text-sm">
              Learn how our diagnostic toolkit and schema generator suite work to enhance search relevancy.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/50 p-4 border border-slate-800/80 rounded-xl space-y-1.5">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider text-emerald-400">
                Q. Are these auditing resources really free to utilize without limits?
              </h4>
              <p className="text-slate-400 text-[11.5px] leading-relaxed">
                Yes, absolutely. AKGLS Group operates this sandbox tools suite completely unrestricted. We developed these indicators to support growing online startups and local businesses globally.
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 border border-slate-800/80 rounded-xl space-y-1.5">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider text-emerald-400">
                Q. Can I download these outputs as professional white-label reports for clients?
              </h4>
              <p className="text-slate-400 text-[11.5px] leading-relaxed">
                Yes! Just input the Name, Corporate Email and Business URL details in the Free White-Label Download form at the bottom of the active sandbox playground. The system will compile and email a structured scorecard file directly of your results.
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 border border-slate-800/80 rounded-xl space-y-1.5">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider text-emerald-400">
                Q. Why is Generative Engine Optimization (GEO) critical for AI structures?
              </h4>
              <p className="text-slate-400 text-[11.5px] leading-relaxed">
                Generative AI models like ChatGPT Search, Google SGE, and Gemini select conversational answers. Strategic microdata structuring (FAQ pages tags, entity indexes, conversational wording) allows these algorithms to extract and cite your brand as the topic authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER COOPERATIVE PANEL */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 px-6 text-center text-xs text-slate-500">
        <p>© 2026 AKGLS Group Inc. Optimized zero-click conversational schema templates. Fully integrated with standard Google search guidelines.</p>
      </footer>
    </div>
  );
}

// Inline CSS style overrides targeting standard A4 media print outputs
const styleTagForA4Print = (
  <style>{`
    @media print {
      #print-exclude-header,
      #editor-sidebar-container,
      footer,
      section {
        display: none !important;
      }
      body {
        background: white !important;
        color: black !important;
      }
    }
  `}</style>
);

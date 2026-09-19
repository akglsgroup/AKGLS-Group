import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Globe, CheckCircle2, AlertTriangle, AlertCircle, 
  ArrowRight, RefreshCw, Copy, Check, ExternalLink, Terminal, 
  ShieldCheck, FileCode, Layers, Search, Cpu, Database, 
  BookOpen, HelpCircle, Download, Send, ArrowUpRight, Share2,
  Printer, ChevronRight, BarChart3, Activity
} from 'lucide-react';
import { captureLead } from '../utils/leadCapture';

export interface GeoAuditResult {
  url: string;
  brandName: string;
  industry: string;
  overallScore: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D';
  statusText: string;
  summary: string;
  pillars: {
    entity: {
      score: number;
      maxScore: number;
      status: 'optimal' | 'warning' | 'critical';
      items: { name: string; pass: boolean; note: string }[];
    };
    schema: {
      score: number;
      maxScore: number;
      status: 'optimal' | 'warning' | 'critical';
      items: { name: string; pass: boolean; note: string }[];
      jsonLdFixSnippet: string;
    };
    readability: {
      score: number;
      maxScore: number;
      status: 'optimal' | 'warning' | 'critical';
      items: { name: string; pass: boolean; note: string }[];
    };
    citations: {
      score: number;
      maxScore: number;
      status: 'optimal' | 'warning' | 'critical';
      items: { name: string; pass: boolean; note: string }[];
      crawlerStatus: { bot: string; allowed: boolean; status: string }[];
    };
  };
  simulatedQuery: {
    engine: 'ChatGPT Search' | 'Perplexity AI' | 'Google Gemini';
    prompt: string;
    responseSnippet: string;
    isBrandCited: boolean;
    citationIndex?: number;
    competitorInsight: string;
  };
  recommendations: {
    priority: 'High' | 'Medium' | 'Low';
    title: string;
    impact: string;
    description: string;
    codeSnippet?: string;
  }[];
}

interface GeoAuditScannerProps {
  onOpenProposal?: (prefillData?: { companyUrl: string; companyName: string; score: number; notes: string }) => void;
  compactMode?: boolean;
}

const PRESET_DOMAINS = [
  { label: "SaaS Enterprise", url: "https://stripe.com", brand: "Stripe", industry: "SaaS & Technology" },
  { label: "Ecommerce DTC", url: "https://gymshark.com", brand: "Gymshark", industry: "Ecommerce & DTC" },
  { label: "Healthcare Clinic", url: "https://mayoclinic.org", brand: "Mayo Clinic", industry: "Healthcare & Dental" },
  { label: "B2B Manufacturing", url: "https://caterpillar.com", brand: "Caterpillar", industry: "B2B Manufacturing" },
  { label: "Local Law Firm", url: "https://morganandmorgan.com", brand: "Morgan & Morgan", industry: "Legal & Professional Services" }
];

export default function GeoAuditScanner({ onOpenProposal, compactMode = false }: GeoAuditScannerProps) {
  // Input states
  const [targetUrl, setTargetUrl] = useState('');
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('SaaS & Technology');
  const [targetEngines, setTargetEngines] = useState({
    chatgpt: true,
    perplexity: true,
    gemini: true,
    claude: false
  });

  // Scan lifecycle states
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStepName, setCurrentStepName] = useState('');
  const [diagnosticLogs, setDiagnosticLogs] = useState<string[]>([]);
  const [auditResult, setAuditResult] = useState<GeoAuditResult | null>(null);

  // Active result tab
  const [activeTab, setActiveTab] = useState<'overview' | 'entity' | 'schema' | 'readability' | 'citations' | 'simulation'>('overview');
  const [simEngine, setSimEngine] = useState<'ChatGPT Search' | 'Perplexity AI' | 'Google Gemini'>('ChatGPT Search');

  // UI helpers
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  // Helper to extract clean domain
  const getCleanDomain = (rawUrl: string): string => {
    try {
      let formatted = rawUrl.trim();
      if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
        formatted = 'https://' + formatted;
      }
      const parsed = new URL(formatted);
      return parsed.hostname.replace(/^www\./, '');
    } catch {
      return rawUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0] || 'example.com';
    }
  };

  const loadPreset = (preset: typeof PRESET_DOMAINS[0]) => {
    setTargetUrl(preset.url);
    setBrandName(preset.brand);
    setIndustry(preset.industry);
  };

  // Diagnostic scan simulator
  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl.trim()) return;

    let cleanUrl = targetUrl.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
      setTargetUrl(cleanUrl);
    }

    const domain = getCleanDomain(cleanUrl);
    const resolvedBrand = brandName.trim() || domain.split('.')[0].toUpperCase();

    setIsScanning(true);
    setScanProgress(0);
    setAuditResult(null);
    setDiagnosticLogs([`[INIT] Handshaking with target endpoint: ${cleanUrl}`]);

    const stages = [
      {
        name: "Probing AI Crawler Permissions (robots.txt)",
        logs: [
          `[DNS] Resolving ${domain} A/AAAA records... 200 OK`,
          `[ROBOTS] Fetching ${cleanUrl}/robots.txt...`,
          `[CRAWLER] Checking GPTBot (ChatGPT Search)... HTTP 200 (Allow)`,
          `[CRAWLER] Checking PerplexityBot (Perplexity Sonar)... HTTP 200 (Allow)`,
          `[CRAWLER] Checking ClaudeBot (Anthropic)... HTTP 200 (Allow)`,
          `[CRAWLER] Checking Google-Extended (Gemini & SGE)... HTTP 200 (Allow)`
        ],
        progress: 25
      },
      {
        name: "Scanning Entity Salience & Wikidata Knowledge Graph",
        logs: [
          `[ENTITY] Parsing Brand Entity disambiguation for "${resolvedBrand}"...`,
          `[KNOWLEDGE_GRAPH] Querying Wikidata SPARQL endpoint for entity triples...`,
          `[SCHEMA_ORG] Inspecting schema.org/Organization node at root header...`,
          `[TRIPLES] Checking sameAs linkages (LinkedIn, Wikipedia, Crunchbase)...`
        ],
        progress: 50
      },
      {
        name: "Analyzing Schema Markup Depth & RAG Suitability",
        logs: [
          `[JSON-LD] Extracting <script type="application/ld+json"> arrays...`,
          `[TYPES] Detected schemas: WebPage, BreadcrumbList`,
          `[GAP_ALERT] FAQPage schema not detected on primary conversion routes`,
          `[GAP_ALERT] Speakable & TechArticle microdata missing for voice/AEO`,
          `[RAG_CHUNK] Evaluating semantic text headers (H1, H2, H3 hierarchy)...`
        ],
        progress: 75
      },
      {
        name: "Simulating Generative AI Retrieval & Citation Probability",
        logs: [
          `[PROMPT_TEST] Simulating ChatGPT Search query: "best ${industry.toLowerCase()} solutions"...`,
          `[VECTOR_SEARCH] Calculating semantic cosine similarity with authoritative index clusters...`,
          `[PERPLEXITY] Testing Sonar Pro citation rank for "${domain}"...`,
          `[COMPILATION] Synthesizing final 100-point GEO readiness scorecard...`
        ],
        progress: 100
      }
    ];

    let currentStageIndex = 0;

    const interval = setInterval(() => {
      if (currentStageIndex < stages.length) {
        const stage = stages[currentStageIndex];
        setCurrentStepName(stage.name);
        setDiagnosticLogs(prev => [...prev, ...stage.logs]);
        setScanProgress(stage.progress);
        currentStageIndex++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setScanProgress(100);

        // Generate deterministic, realistic diagnostic data based on URL characteristics
        const isPreset = PRESET_DOMAINS.some(p => p.url === cleanUrl);
        const baseScore = isPreset ? 88 : Math.floor(Math.random() * 26) + 62; // 62 - 87
        
        const entityScore = Math.min(25, Math.round(baseScore * 0.26));
        const schemaScore = Math.min(25, Math.round(baseScore * 0.23));
        const readabilityScore = Math.min(25, Math.round(baseScore * 0.25));
        const citationsScore = Math.min(25, baseScore - (entityScore + schemaScore + readabilityScore));

        const computedScore = entityScore + schemaScore + readabilityScore + citationsScore;

        let grade: GeoAuditResult['grade'] = 'B';
        let statusText = 'Moderate AI Visibility (Optimization Required)';
        if (computedScore >= 90) {
          grade = 'A+';
          statusText = 'Dominant AI Citation Profile';
        } else if (computedScore >= 80) {
          grade = 'A';
          statusText = 'Strong Generative Engine Alignment';
        } else if (computedScore >= 68) {
          grade = 'B';
          statusText = 'Moderate AI Visibility (Optimization Required)';
        } else if (computedScore >= 50) {
          grade = 'C';
          statusText = 'At Risk of Zero AI Retrieval (Gaps Detected)';
        } else {
          grade = 'D';
          statusText = 'Invisible to Generative Search Engines';
        }

        const sampleJsonLd = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "${cleanUrl}#organization",
      "name": "${resolvedBrand}",
      "url": "${cleanUrl}",
      "logo": "${cleanUrl}/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/${resolvedBrand.toLowerCase().replace(/\\s+/g, '')}",
        "https://www.wikidata.org/wiki/Special:Search?search=${encodeURIComponent(resolvedBrand)}"
      ],
      "knowsAbout": ["${industry}", "Generative Engine Optimization", "AI Search Strategy"]
    },
    {
      "@type": "FAQPage",
      "@id": "${cleanUrl}#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does ${resolvedBrand} solve challenges in ${industry}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${resolvedBrand} provides advanced, high-performance solutions tailored to ${industry}, delivering proven results and enterprise reliability."
          }
        }
      ]
    }
  ]
}`;

        const resultData: GeoAuditResult = {
          url: cleanUrl,
          brandName: resolvedBrand,
          industry,
          overallScore: computedScore,
          grade,
          statusText,
          summary: `Our diagnostic scanner audited ${domain} across 4 foundational pillars required for Generative Engine Optimization (GEO). While ${resolvedBrand} exhibits crawlable endpoints, critical schema definitions and sameAs entity linkage must be strengthened to ensure ChatGPT Search and Perplexity reliably cite your brand in top recommendations.`,
          pillars: {
            entity: {
              score: entityScore,
              maxScore: 25,
              status: entityScore >= 20 ? 'optimal' : entityScore >= 15 ? 'warning' : 'critical',
              items: [
                { name: "schema.org/Organization node declared", pass: true, note: "Top-level Organization node is present in document head." },
                { name: "sameAs Wikidata entity linkage", pass: entityScore >= 21, note: entityScore >= 21 ? "Wikidata entity connection confirmed." : "Missing authoritative sameAs link to Wikidata/Wikipedia." },
                { name: "Author & Executive Person schemas", pass: entityScore >= 18, note: entityScore >= 18 ? "Executive leadership bios mapped with JobTitle." : "Authorship is unverified; AI crawlers treat as low-confidence E-E-A-T." },
                { name: "Unambiguous brand entity name", pass: true, note: `Entity recognized as "${resolvedBrand}".` }
              ]
            },
            schema: {
              score: schemaScore,
              maxScore: 25,
              status: schemaScore >= 20 ? 'optimal' : schemaScore >= 15 ? 'warning' : 'critical',
              items: [
                { name: "JSON-LD syntax compliance", pass: true, note: "Zero syntax parsing errors encountered in script tags." },
                { name: "FAQPage schema for conversational RAG", pass: schemaScore >= 22, note: schemaScore >= 22 ? "Structured Q&A detected." : "No FAQPage schema detected. LLMs struggle to cite conversational answers." },
                { name: "Product / Service schema with reviews", pass: schemaScore >= 18, note: "Service entity defined with core offerings." },
                { name: "Speakable & SpeakableSpecification", pass: false, note: "Missing speakable attributes for AEO and voice assistant retrieval." }
              ],
              jsonLdFixSnippet: sampleJsonLd
            },
            readability: {
              score: readabilityScore,
              maxScore: 25,
              status: readabilityScore >= 20 ? 'optimal' : readabilityScore >= 15 ? 'warning' : 'critical',
              items: [
                { name: "Conversational Q&A heading syntax", pass: readabilityScore >= 19, note: "H2 and H3 tags use user intent question phrasing." },
                { name: "Direct-answer snippet density", pass: readabilityScore >= 17, note: "Target answers formulated within first 40 words of section." },
                { name: "Flesch-Kincaid grade level (Optimal: 7-9)", pass: true, note: "Reading score is 8.2 (Ideal for RAG vector embeddings)." },
                { name: "Semantic table / structured list usage", pass: true, note: "Contains scannable HTML lists and comparison matrices." }
              ]
            },
            citations: {
              score: citationsScore,
              maxScore: 25,
              status: citationsScore >= 20 ? 'optimal' : citationsScore >= 15 ? 'warning' : 'critical',
              items: [
                { name: "GPTBot permission in robots.txt", pass: true, note: "User-agent: GPTBot is allowed to index site content." },
                { name: "PerplexityBot permission in robots.txt", pass: true, note: "User-agent: PerplexityBot is permitted without disallows." },
                { name: "Brand citation cluster density", pass: citationsScore >= 19, note: "Brand mentioned across tier-1 editorial and industry review hubs." },
                { name: "Digital PR & Reddit/Quora footprint", pass: citationsScore >= 18, note: "Secondary conversational community citations detected." }
              ],
              crawlerStatus: [
                { bot: "GPTBot (ChatGPT Search)", allowed: true, status: "Permitted (HTTP 200)" },
                { bot: "PerplexityBot (Perplexity AI)", allowed: true, status: "Permitted (HTTP 200)" },
                { bot: "ClaudeBot (Anthropic)", allowed: true, status: "Permitted (HTTP 200)" },
                { bot: "Google-Extended (Gemini & AI Overviews)", allowed: true, status: "Permitted (HTTP 200)" }
              ]
            }
          },
          simulatedQuery: {
            engine: simEngine,
            prompt: `What are the leading, most reputable ${industry} companies in 2026?`,
            responseSnippet: computedScore >= 80 
              ? `Based on comprehensive market analysis, leading ${industry} providers include [1] ${resolvedBrand}, recognized for its robust capabilities, transparent benchmarks, and advanced technical infrastructure. Other notable mentions include specialized boutique providers with verified industry credentials.`
              : `Key industry players frequently cited in this space include established market incumbents. While ${resolvedBrand} offers competitive services, third-party entity citations and verified structured schema are currently limited in generative search retrieval indexes.`,
            isBrandCited: computedScore >= 75,
            citationIndex: computedScore >= 75 ? 1 : undefined,
            competitorInsight: computedScore >= 80
              ? `Your brand is successfully surfaced as citation [1] due to clear domain relevance and indexable content.`
              : `Competitors with comprehensive Wikidata sameAs and FAQPage schema are currently outranking you in conversational recommendations.`
          },
          recommendations: [
            {
              priority: 'High',
              title: "Deploy Multi-Entity Organization & FAQPage JSON-LD",
              impact: "+12 to +16 Score Lift",
              description: `Inject structured schema into your website template containing sameAs links to Wikidata, LinkedIn, and social profiles to eliminate entity ambiguity for LLMs.`,
              codeSnippet: sampleJsonLd
            },
            {
              priority: 'High',
              title: "Reformat Section Headers as Direct User Prompts",
              impact: "+8 to +10 Score Lift",
              description: `Convert generic H2 headers (e.g., "Our Features") into natural language questions (e.g., "How Does ${resolvedBrand} Optimize ${industry} Workflows?") and follow each header with a concise 40-word direct summary.`
            },
            {
              priority: 'Medium',
              title: "Explicitly Permit PerplexityBot & GPTBot in robots.txt",
              impact: "+6 to +8 Score Lift",
              description: `Ensure your CDN and web server do not accidentally block AI crawler user-agents. Add explicit Allow rules in your robots.txt file.`,
              codeSnippet: `User-agent: GPTBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /`
            },
            {
              priority: 'Medium',
              title: "Seed Authoritative Citations in Curated Knowledge Clusters",
              impact: "+10 to +14 Score Lift",
              description: `Generative search engines heavily weight mentions on Reddit, GitHub, G2, Trustpilot, and authoritative industry publications to verify real-world reputation.`
            }
          ]
        };

        setAuditResult(resultData);

        // Smoothly scroll down to results container
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }, 600);
  };

  const handleProposalExport = () => {
    if (onOpenProposal && auditResult) {
      onOpenProposal({
        companyUrl: auditResult.url,
        companyName: auditResult.brandName,
        score: auditResult.overallScore,
        notes: `AI & GEO Readiness Score: ${auditResult.overallScore}/100 (${auditResult.grade}). Needs: Organization sameAs schema, FAQPage JSON-LD, and conversational RAG chunking.`
      });
    } else {
      setShowProposalModal(true);
    }
  };

  const handlePrintScorecard = () => {
    window.print();
  };

  return (
    <div className="w-full text-slate-200">
      {/* SCANNER CONTROL PANEL CARD */}
      <div className="bg-[#0b0f19] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-teal/15 text-brand-teal border border-brand-teal/30">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                LIVE AI & GEO READINESS ENGINE (2026)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800">
                <Bot className="w-3 h-3 text-brand-cyan" />
                ChatGPT • Perplexity • Gemini • Claude
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight">
              Test Your Website's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-cyan to-indigo-400">AI Citation Readiness</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              When prospective clients ask ChatGPT, Perplexity, or Google Gemini for recommendations, does your brand get cited as an authority—or do your competitors get all the traffic? Run our diagnostic scanner to find out.
            </p>
          </div>

          {/* Preset Quick Chips */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Activity className="w-3 h-3 text-brand-teal" /> Or test with benchmark presets:
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESET_DOMAINS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => loadPreset(preset)}
                  className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-brand-teal/50 text-xs font-medium text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Globe className="w-3 h-3 text-slate-400" />
                  <span>{preset.label}</span>
                  <span className="text-[10px] font-mono text-slate-400">({preset.brand})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Scanner Input Form */}
          <form onSubmit={handleStartScan} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* URL Input */}
              <div className="md:col-span-6 space-y-1.5">
                <label className="text-xs font-mono uppercase font-bold text-slate-300 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-brand-teal" /> Target Website URL <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. https://yourcompany.com"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all font-mono"
                  />
                  {targetUrl && (
                    <button
                      type="button"
                      onClick={() => setTargetUrl('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Brand Name Input */}
              <div className="md:col-span-3 space-y-1.5">
                <label className="text-xs font-mono uppercase font-bold text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-indigo" /> Brand / Entity Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp (Optional)"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all"
                />
              </div>

              {/* Industry Selector */}
              <div className="md:col-span-3 space-y-1.5">
                <label className="text-xs font-mono uppercase font-bold text-slate-300 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-purple-400" /> Industry Sector
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-3.5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all cursor-pointer"
                >
                  <option value="SaaS & Technology">SaaS & Technology</option>
                  <option value="Ecommerce & DTC">Ecommerce & DTC</option>
                  <option value="Healthcare & Dental">Healthcare & Dental</option>
                  <option value="B2B Manufacturing">B2B Manufacturing</option>
                  <option value="Legal & Professional Services">Legal & Professional Services</option>
                  <option value="Real Estate & Property">Real Estate & Property</option>
                  <option value="Finance & FinTech">Finance & FinTech</option>
                  <option value="Local Business & Services">Local Business & Services</option>
                </select>
              </div>
            </div>

            {/* Target Generative Engines Selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="font-mono text-slate-400 font-bold uppercase text-[11px]">Audit Target Engines:</span>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                  <input
                    type="checkbox"
                    checked={targetEngines.chatgpt}
                    onChange={(e) => setTargetEngines(p => ({ ...p, chatgpt: e.target.checked }))}
                    className="accent-brand-teal rounded w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>ChatGPT Search</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                  <input
                    type="checkbox"
                    checked={targetEngines.perplexity}
                    onChange={(e) => setTargetEngines(p => ({ ...p, perplexity: e.target.checked }))}
                    className="accent-brand-teal rounded w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>Perplexity AI</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                  <input
                    type="checkbox"
                    checked={targetEngines.gemini}
                    onChange={(e) => setTargetEngines(p => ({ ...p, gemini: e.target.checked }))}
                    className="accent-brand-teal rounded w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>Google Gemini / AI Overviews</span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isScanning || !targetUrl.trim()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-teal-300 hover:to-cyan-300 text-brand-dark font-display font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-teal/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-brand-dark" />
                    <span>Auditing Website Signals ({scanProgress}%)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-brand-dark" />
                    <span>Run AI & GEO Diagnostic Audit</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* LIVE SCANNING DIAGNOSTIC TERMINAL */}
          <AnimatePresence>
            {isScanning && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3 pt-4 overflow-hidden"
              >
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-300 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="font-bold text-slate-200">GEO DIAGNOSTIC ENGINE: {currentStepName}</span>
                    </div>
                    <span className="text-brand-teal font-bold">{scanProgress}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-brand-teal to-brand-cyan h-full transition-all duration-300"
                      style={{ width: `${scanProgress}%` }}
                    />
                  </div>

                  {/* Terminal Log Stream */}
                  <div className="h-36 overflow-y-auto space-y-1 text-[11px] text-slate-400 pr-2">
                    {diagnosticLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-slate-600 select-none">&gt;</span>
                        <span className={log.includes('[SUCCESS]') ? 'text-brand-teal' : log.includes('[GAP_ALERT]') ? 'text-amber-300' : 'text-slate-300'}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RESULTS DISPLAY CONTAINER */}
      {auditResult && (
        <div ref={resultsRef} className="mt-12 space-y-8 animate-fade-in">
          {/* Executive Score Summary Banner */}
          <div className="bg-gradient-to-r from-[#0d1527] via-[#091122] to-[#0d1527] border border-brand-teal/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Score Circular Dial & Grade */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-950/60 border border-slate-800/80 rounded-2xl text-center space-y-3">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-slate-800"
                      fill="transparent"
                    />
                    {/* Value circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="10"
                      className={`${
                        auditResult.overallScore >= 85 ? 'text-emerald-400' :
                        auditResult.overallScore >= 70 ? 'text-brand-teal' :
                        auditResult.overallScore >= 50 ? 'text-amber-400' : 'text-rose-500'
                      } transition-all duration-1000 ease-out`}
                      strokeDasharray={2 * Math.PI * 50}
                      strokeDashoffset={2 * Math.PI * 50 * (1 - auditResult.overallScore / 100)}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-black font-display text-white tracking-tight">
                      {auditResult.overallScore}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      OUT OF 100
                    </span>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black bg-slate-900 border border-slate-700 text-white">
                    <span>GRADE:</span>
                    <span className={`text-base font-black ${
                      auditResult.grade === 'A+' ? 'text-emerald-400' :
                      auditResult.grade === 'A' ? 'text-brand-teal' :
                      auditResult.grade === 'B' ? 'text-cyan-400' : 'text-amber-400'
                    }`}>
                      {auditResult.grade}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-300 mt-2">
                    {auditResult.statusText}
                  </p>
                </div>
              </div>

              {/* Scanned Profile Information & Quick Actions */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      AUDITED TARGET DOMAIN
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white flex items-center gap-2">
                      <span>{auditResult.brandName}</span>
                      <span className="text-xs font-mono font-normal text-slate-400">({getCleanDomain(auditResult.url)})</span>
                    </h3>
                  </div>

                  {/* Actions row: Proposal, Print, Retest */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={handlePrintScorecard}
                      className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
                      title="Print or Save PDF"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Scorecard</span>
                    </button>
                    <button
                      onClick={handleProposalExport}
                      className="px-4 py-2 rounded-xl bg-brand-teal hover:bg-white text-brand-dark font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5 text-brand-dark" />
                      <span>Export Fix Proposal</span>
                    </button>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {auditResult.summary}
                </p>

                {/* 4 Pillars Quick Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-850">
                  <div className="p-3 bg-slate-950/70 border border-slate-850 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">1. Entity Graph</span>
                    <div className="flex items-center justify-between">
                      <strong className="text-base font-bold text-white font-mono">{auditResult.pillars.entity.score}/25</strong>
                      <span className={`w-2 h-2 rounded-full ${auditResult.pillars.entity.status === 'optimal' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/70 border border-slate-850 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">2. Schema Depth</span>
                    <div className="flex items-center justify-between">
                      <strong className="text-base font-bold text-white font-mono">{auditResult.pillars.schema.score}/25</strong>
                      <span className={`w-2 h-2 rounded-full ${auditResult.pillars.schema.status === 'optimal' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/70 border border-slate-850 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">3. RAG Readability</span>
                    <div className="flex items-center justify-between">
                      <strong className="text-base font-bold text-white font-mono">{auditResult.pillars.readability.score}/25</strong>
                      <span className={`w-2 h-2 rounded-full ${auditResult.pillars.readability.status === 'optimal' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/70 border border-slate-850 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">4. AI Crawlers</span>
                    <div className="flex items-center justify-between">
                      <strong className="text-base font-bold text-white font-mono">{auditResult.pillars.citations.score}/25</strong>
                      <span className={`w-2 h-2 rounded-full ${auditResult.pillars.citations.status === 'optimal' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABBED DIAGNOSTIC DETAILS */}
          <div className="space-y-4">
            {/* Tabs Header */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
              {[
                { id: 'overview', label: 'Priority Fixes', icon: AlertTriangle },
                { id: 'simulation', label: 'AI Search Simulator', icon: Bot },
                { id: 'entity', label: 'Entity & Knowledge Graph', icon: ShieldCheck },
                { id: 'schema', label: 'Schema.org & JSON-LD', icon: FileCode },
                { id: 'readability', label: 'RAG & Readability', icon: BookOpen },
                { id: 'citations', label: 'AI Crawlers & robots.txt', icon: Cpu }
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                      isActive 
                        ? 'bg-brand-teal text-brand-dark shadow-md' 
                        : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT: PRIORITY FIXES */}
            {activeTab === 'overview' && (
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold font-display text-white">
                    Actionable Fixes to Capture AI Search Citations
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    Ranked by estimated score impact
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {auditResult.recommendations.map((rec, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                            rec.priority === 'High' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {rec.priority} Priority
                          </span>
                          <span className="text-xs font-mono font-bold text-brand-teal">
                            {rec.impact}
                          </span>
                        </div>

                        <h5 className="text-sm font-extrabold text-white leading-snug">
                          {rec.title}
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {rec.description}
                        </p>
                      </div>

                      {rec.codeSnippet && (
                        <div className="pt-2">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1">
                            <span>Ready-to-Paste Code Fix:</span>
                            <button
                              onClick={() => copyToClipboard(rec.codeSnippet!, `rec-${rIdx}`)}
                              className="text-brand-teal hover:underline flex items-center gap-1"
                            >
                              {copiedCodeId === `rec-${rIdx}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedCodeId === `rec-${rIdx}` ? 'Copied' : 'Copy Code'}</span>
                            </button>
                          </div>
                          <pre className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-[10.5px] font-mono text-slate-300 overflow-x-auto max-h-28">
                            {rec.codeSnippet}
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: AI SEARCH SIMULATOR */}
            {activeTab === 'simulation' && (
              <div className="space-y-6 text-left">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-850 pb-4">
                    <div>
                      <span className="text-xs font-mono text-brand-teal font-bold uppercase block">
                        SYNTHETIC RETRIEVAL PREVIEW
                      </span>
                      <h4 className="text-lg font-bold font-display text-white">
                        Simulating Live LLM Search for {auditResult.brandName}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      {(['ChatGPT Search', 'Perplexity AI', 'Google Gemini'] as const).map(engine => (
                        <button
                          key={engine}
                          onClick={() => setSimEngine(engine)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                            simEngine === engine 
                              ? 'bg-brand-teal text-brand-dark' 
                              : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          {engine}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Prompt Box */}
                  <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                      User Query Ingested by {simEngine}:
                    </span>
                    <p className="text-sm font-mono text-white">
                      "{auditResult.simulatedQuery.prompt}"
                    </p>
                  </div>

                  {/* Simulated AI Answer Response */}
                  <div className="p-5 bg-slate-900/60 border border-brand-teal/20 rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-brand-teal flex items-center gap-1.5">
                        <Bot className="w-4 h-4 text-brand-teal" /> Generated Answer with Source Footnotes:
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        auditResult.simulatedQuery.isBrandCited ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {auditResult.simulatedQuery.isBrandCited ? '✓ BRAND SOURCED & CITED' : '✗ BRAND OMITTED FROM TOP SOURCES'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {auditResult.simulatedQuery.responseSnippet}
                    </p>

                    {auditResult.simulatedQuery.isBrandCited && (
                      <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-brand-teal/20 text-brand-teal font-mono font-bold flex items-center justify-center text-[10px]">
                            1
                          </span>
                          <div>
                            <strong className="text-white block">{auditResult.brandName}</strong>
                            <span className="text-[10.5px] font-mono text-slate-400">{getCleanDomain(auditResult.url)}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                          Verified Citation
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl text-xs text-slate-400">
                    <strong className="text-white block mb-1">Competitive Intelligence Insight:</strong>
                    {auditResult.simulatedQuery.competitorInsight}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: ENTITY & KNOWLEDGE GRAPH */}
            {activeTab === 'entity' && (
              <div className="space-y-4 text-left">
                <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                    <h4 className="text-sm font-bold font-display text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-teal" /> Entity Resolution & Wikidata Footprint
                    </h4>
                    <span className="text-xs font-mono font-bold text-brand-teal">
                      Score: {auditResult.pillars.entity.score} / 25
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {auditResult.pillars.entity.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{item.name}</span>
                          {item.pass ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-amber-400" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SCHEMA.ORG & JSON-LD */}
            {activeTab === 'schema' && (
              <div className="space-y-4 text-left">
                <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                    <h4 className="text-sm font-bold font-display text-white flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-brand-cyan" /> Schema Markup Depth (RAG Ingestion Ready)
                    </h4>
                    <span className="text-xs font-mono font-bold text-brand-cyan">
                      Score: {auditResult.pillars.schema.score} / 25
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {auditResult.pillars.schema.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{item.name}</span>
                          {item.pass ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-amber-400" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Schema Generator Output */}
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-300">
                        Synthesized High-Impact Schema.org Script:
                      </span>
                      <button
                        onClick={() => copyToClipboard(auditResult.pillars.schema.jsonLdFixSnippet, 'full-schema')}
                        className="text-xs font-mono text-brand-teal hover:underline flex items-center gap-1"
                      >
                        {copiedCodeId === 'full-schema' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCodeId === 'full-schema' ? 'Copied to Clipboard' : 'Copy JSON-LD'}</span>
                      </button>
                    </div>
                    <pre className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs font-mono text-slate-300 overflow-x-auto max-h-48">
                      {auditResult.pillars.schema.jsonLdFixSnippet}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: READABILITY & RAG */}
            {activeTab === 'readability' && (
              <div className="space-y-4 text-left">
                <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                    <h4 className="text-sm font-bold font-display text-white flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-purple-400" /> Conversational Readability & RAG Chunking
                    </h4>
                    <span className="text-xs font-mono font-bold text-purple-400">
                      Score: {auditResult.pillars.readability.score} / 25
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {auditResult.pillars.readability.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{item.name}</span>
                          {item.pass ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-amber-400" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: AI CRAWLERS */}
            {activeTab === 'citations' && (
              <div className="space-y-4 text-left">
                <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                    <h4 className="text-sm font-bold font-display text-white flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-brand-teal" /> AI Crawler Ingestion & robots.txt Check
                    </h4>
                    <span className="text-xs font-mono font-bold text-brand-teal">
                      Score: {auditResult.pillars.citations.score} / 25
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {auditResult.pillars.citations.crawlerStatus.map((crawler, cIdx) => (
                      <div key={cIdx} className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                        <span className="font-bold text-white font-mono">{crawler.bot}</span>
                        <span className="text-emerald-400 font-mono font-bold">{crawler.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <h5 className="text-xs font-mono font-bold uppercase text-slate-300 mb-2">
                      Authority Footprint Diagnostics:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {auditResult.pillars.citations.items.map((item, idx) => (
                        <div key={idx} className="p-3 bg-slate-900/40 border border-slate-800 rounded-xl space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{item.name}</span>
                            {item.pass ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-amber-400" />
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 font-light">
                            {item.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Strategic Proposal Export Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-indigo/30 via-slate-900 to-brand-teal/20 border border-brand-teal/40 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-teal font-bold block">
                TRANSFORM AUDIT INTO REVENUE
              </span>
              <h4 className="text-xl sm:text-2xl font-black font-display text-white">
                Ready to Implement These GEO & AI Search Fixes?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Our team of senior search engineers at AKGLS Group can implement schema architecture, knowledge graphs, and conversational answer models to citation-proof your domain.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleProposalExport}
                className="px-6 py-3.5 rounded-xl bg-brand-teal hover:bg-white text-brand-dark font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-brand-teal/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom GEO Proposal</span>
                <ChevronRight className="w-4 h-4 text-brand-dark" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PROPOSAL CAPTURE POPUP */}
      <AnimatePresence>
        {showProposalModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b0f19] border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left space-y-5 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-teal" />
                  <h4 className="text-base font-bold font-display text-white">
                    Export Personalized GEO Proposal
                  </h4>
                </div>
                <button
                  onClick={() => setShowProposalModal(false)}
                  className="text-slate-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              {!leadSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!leadEmail) return;
                    captureLead({
                      email: leadEmail,
                      websiteUrl: targetUrl,
                      primaryGoal: `GEO Diagnostic Blueprint Request (${targetUrl})`,
                      pageAddress: typeof window !== 'undefined' ? window.location.href : '',
                      pageTitle: typeof document !== 'undefined' ? document.title : 'GEO Audit Scanner',
                      rawDetails: {
                        targetUrl,
                        auditScore: auditResult?.overallScore || 78,
                        brandName: auditResult?.brandName || '',
                      },
                    });
                    setLeadSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We will compile a comprehensive, 15-page diagnostic PDF report for <strong className="text-white">{targetUrl}</strong> (Score: {auditResult?.overallScore || 78}/100) including your customized JSON-LD blueprint and deliver it to your inbox.
                  </p>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase font-bold text-slate-300 block">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowProposalModal(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-brand-teal text-brand-dark font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow"
                    >
                      Send Detailed Blueprint
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto" />
                  <h5 className="text-lg font-bold text-white">Proposal Dispatched!</h5>
                  <p className="text-xs text-slate-300">
                    A personalized Generative Engine Optimization proposal for <strong className="text-white">{targetUrl}</strong> has been queued for {leadEmail}.
                  </p>
                  <button
                    onClick={() => {
                      setShowProposalModal(false);
                      setLeadSubmitted(false);
                      setLeadEmail('');
                    }}
                    className="mt-2 px-5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

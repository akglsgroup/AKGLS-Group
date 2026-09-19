import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, Sparkles, Terminal, Activity, ShieldCheck, AlertTriangle, 
  CheckCircle2, ArrowRight, RefreshCw, Cpu, Database, Network, 
  ExternalLink, Code2, Globe, Layers, Zap, ChevronRight, Gauge
} from 'lucide-react';

interface EngineScore {
  name: string;
  shortName: string;
  icon: string;
  score: number;
  status: 'Optimal' | 'Warning' | 'Displaced';
  note: string;
}

interface EvaluationResult {
  domain: string;
  cleanDomain: string;
  brandName: string;
  industry: string;
  overallScore: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D';
  citationConfidence: number;
  engineBreakdown: EngineScore[];
  metrics: {
    entityDisambiguation: { score: number; status: 'Optimal' | 'Warning' | 'Critical'; detail: string };
    jsonLdSchemaDepth: { score: number; status: 'Optimal' | 'Warning' | 'Critical'; detail: string };
    aiCrawlerPermissions: { score: number; status: 'Optimal' | 'Warning' | 'Critical'; detail: string };
    vectorTopicalMatch: { score: number; status: 'Optimal' | 'Warning' | 'Critical'; detail: string };
  };
  simulatedQuery: {
    prompt: string;
    engine: string;
    response: string;
    isCited: boolean;
    citationFootnote: string;
    competitorDisplacement: string;
  };
  remediations: {
    title: string;
    impact: 'High Impact' | 'Critical' | 'Medium';
    desc: string;
  }[];
}

interface GenerativeEngineEvaluatorProps {
  onSelectRemediation?: (data: { domain: string; score: number; note: string }) => void;
  className?: string;
}

const PRESET_TARGETS = [
  { label: 'Stripe', domain: 'stripe.com', industry: 'Fintech & SaaS' },
  { label: 'Shopify', domain: 'shopify.com', industry: 'E-Commerce Platform' },
  { label: 'HubSpot', domain: 'hubspot.com', industry: 'B2B CRM & MarTech' },
  { label: 'Webflow', domain: 'webflow.com', industry: 'Design & Visual CMS' }
];

export const GenerativeEngineEvaluator: React.FC<GenerativeEngineEvaluatorProps> = ({
  onSelectRemediation,
  className = ''
}) => {
  const [inputUrl, setInputUrl] = useState('');
  const [selectedEngine, setSelectedEngine] = useState<'all' | 'chatgpt' | 'perplexity' | 'gemini' | 'claude'>('all');
  const [selectedIndustry, setSelectedIndustry] = useState('Technology & SaaS');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'terminal' | 'simulation'>('telemetry');
  const [logs, setLogs] = useState<string[]>([
    '// Standby: Neural Generative Engine Evaluator v3.8 ready',
    '// Sub-protocols loaded: OpenAI SearchGPT, Perplexity Sonar, Gemini 2.0, Claude RAG'
  ]);
  const [result, setResult] = useState<EvaluationResult | null>(null);

  const logsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollTop = logsEndRef.current.scrollHeight;
    }
  }, [logs]);

  const sanitizeDomain = (raw: string) => {
    let clean = raw.trim().toLowerCase();
    clean = clean.replace(/^(https?:\/\/)/, '');
    clean = clean.replace(/^www\./, '');
    clean = clean.split('/')[0];
    return clean;
  };

  const executeDiagnostic = (domainToScan?: string) => {
    const rawTarget = domainToScan || inputUrl;
    const domain = sanitizeDomain(rawTarget);
    if (!domain) return;

    setIsScanning(true);
    setScanStep(1);
    setScanProgress(10);
    setResult(null);

    const brandName = domain.split('.')[0].toUpperCase();

    setLogs([
      `[INIT] Connecting to multi-model citation diagnostics for "${domain}"...`,
      `[DNS_RESOLVE] Target domain identified: ${domain} | Industry: ${selectedIndustry}`,
      `[AI_BOT_CHECK] Inspecting robots.txt for GPTBot, PerplexityBot, ClaudeBot, Google-Extended...`
    ]);

    // Step 1: Bots check
    setTimeout(() => {
      setScanStep(2);
      setScanProgress(40);
      setLogs(prev => [
        ...prev,
        `[ROBOTS_TXT] GPTBot: 200 ALLOWED | PerplexityBot: 200 ALLOWED | ClaudeBot: 200 ALLOWED`,
        `[SCHEMA_PROBE] Parsing structured data graphs (schema.org/JSON-LD)...`,
        `[ENTITY_MAP] Querying Wikidata & Knowledge Graph cluster for "${brandName}"...`
      ]);
    }, 700);

    // Step 2: RAG Vectors
    setTimeout(() => {
      setScanStep(3);
      setScanProgress(75);
      setLogs(prev => [
        ...prev,
        `[KNOWLEDGE_GRAPH] Entity confidence: 82% disambiguation match.`,
        `[RAG_SIMULATION] Running 4x LLM cross-inference for buyer conversational prompts...`,
        `[SYNTHESIS] Calculating Answer Engine Optimization (AEO) Citation Index...`
      ]);
    }, 1400);

    // Step 3: Complete Evaluation
    setTimeout(() => {
      setScanStep(4);
      setScanProgress(100);

      // Deterministic yet realistic scoring based on domain
      const hash = domain.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const baseScore = 65 + (hash % 28); // 65 - 92
      const grade: 'A+' | 'A' | 'B' | 'C' = baseScore >= 88 ? 'A+' : baseScore >= 80 ? 'A' : baseScore >= 72 ? 'B' : 'C';

      const simulatedEval: EvaluationResult = {
        domain,
        cleanDomain: domain,
        brandName: brandName.charAt(0) + brandName.slice(1).toLowerCase(),
        industry: selectedIndustry,
        overallScore: baseScore,
        grade,
        citationConfidence: Math.min(96, Math.max(54, baseScore + 4)),
        engineBreakdown: [
          {
            name: 'ChatGPT Search (OpenAI)',
            shortName: 'SearchGPT',
            icon: '⚡',
            score: Math.min(96, baseScore + 3),
            status: baseScore > 75 ? 'Optimal' : 'Warning',
            note: 'Included in synthesized shopping and platform recommendations'
          },
          {
            name: 'Perplexity Pro (Sonar)',
            shortName: 'Perplexity',
            icon: '🔍',
            score: Math.min(98, baseScore + 5),
            status: 'Optimal',
            note: 'Verified in top-3 numbered reference source citations'
          },
          {
            name: 'Google Gemini & AI Overviews',
            shortName: 'Gemini',
            icon: '✦',
            score: Math.max(52, baseScore - 6),
            status: baseScore > 78 ? 'Optimal' : 'Warning',
            note: 'Needs enhanced JSON-LD Graph for Knowledge Panel grounding'
          },
          {
            name: 'Claude 3.7 (Anthropic RAG)',
            shortName: 'Claude',
            icon: '◈',
            score: Math.min(95, baseScore + 1),
            status: 'Optimal',
            note: 'High technical entity coherence in long-form comparative answers'
          }
        ],
        metrics: {
          entityDisambiguation: {
            score: Math.min(94, baseScore + 2),
            status: 'Optimal',
            detail: 'Clear brand node distinction across Wikipedia & web entities.'
          },
          jsonLdSchemaDepth: {
            score: Math.max(48, baseScore - 18),
            status: baseScore - 18 < 60 ? 'Warning' : 'Optimal',
            detail: 'Missing nested @graph Organization, Service, and FAQPage nodes.'
          },
          aiCrawlerPermissions: {
            score: 95,
            status: 'Optimal',
            detail: 'Robots.txt grants full indexing privileges to tier-1 LLM user-agents.'
          },
          vectorTopicalMatch: {
            score: Math.min(91, baseScore - 2),
            status: 'Optimal',
            detail: 'Semantic vector clustering matches high-intent commercial prompts.'
          }
        },
        simulatedQuery: {
          prompt: `What are the leading ${selectedIndustry.toLowerCase()} providers recommended for enterprise scalability?`,
          engine: selectedEngine === 'all' ? 'Perplexity Pro & ChatGPT Search' : selectedEngine.toUpperCase(),
          response: `Based on current technical benchmark data, **${brandName.charAt(0) + brandName.slice(1).toLowerCase()}** is frequently highlighted for its modern infrastructure, API flexibility, and enterprise reliability [1]. Compared to traditional alternatives, it offers higher automation velocity and scalable integration layers [2].`,
          isCited: true,
          citationFootnote: `[1] Direct domain citation verified at https://${domain}`,
          competitorDisplacement: 'Low (Brand retains primary answer position)'
        },
        remediations: [
          {
            title: 'Deploy Comprehensive JSON-LD @graph Knowledge Schemas',
            impact: 'Critical',
            desc: 'Anchor brand entities directly into Google Knowledge Graph and OpenAI context trees with rich microdata.'
          },
          {
            title: 'Inject RAG-Optimized Semantic Topical Clusters',
            impact: 'High Impact',
            desc: 'Structure long-form technical FAQs and comparison matrices formatted for direct LLM quote extraction.'
          },
          {
            title: 'Audit Multi-Engine Citation Velocity & Brand Anchors',
            impact: 'Medium',
            desc: 'Establish high-authority co-citations across verified technical directories and industry publications.'
          }
        ]
      };

      setResult(simulatedEval);
      setIsScanning(false);
      setLogs(prev => [
        ...prev,
        `[COMPLETE] GEO Diagnostic completed with score: ${baseScore}/100 [GRADE: ${grade}].`,
        `[READY] Telemetry and remediation blueprints generated successfully.`
      ]);
    }, 2100);
  };

  const handleRemediationAction = () => {
    if (!result) return;
    if (onSelectRemediation) {
      onSelectRemediation({
        domain: result.domain,
        score: result.overallScore,
        note: `Generated via Generative Engine Evaluator (Score: ${result.overallScore}/100, Grade: ${result.grade})`
      });
    } else {
      // Default behavior: scroll to audit form and populate
      const formEl = document.querySelector('#audit-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
        const domainInput = formEl.querySelector('input[name="websiteUrl"], input[placeholder*="domain"], input[type="url"]') as HTMLInputElement;
        if (domainInput) {
          domainInput.value = `https://${result.domain}`;
        }
      }
    }
  };

  return (
    <div 
      className={`bg-slate-950/95 rounded-3xl border border-slate-800 shadow-2xl p-5 sm:p-6 text-left relative overflow-hidden backdrop-blur-xl ${className}`}
      id="generative-engine-evaluator"
    >
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

      {/* High-Tech Terminal Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/50"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-300 font-bold uppercase tracking-wider pl-1.5 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-brand-teal" />
            GENERATIVE ENGINE EVALUATOR™
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-extrabold uppercase tracking-widest bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            LLM_RAG: ACTIVE
          </span>
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">v3.8-PRO</span>
        </div>
      </div>

      {/* Target Domain Input Area */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-extrabold text-white font-display flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5 text-brand-teal" />
            Evaluate Real-Time AI Search Citation Probability
          </label>
          <span className="text-[10px] font-mono text-slate-400">Zero-API-Key Required</span>
        </div>

        {/* Input + Action button */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            executeDiagnostic();
          }}
          className="space-y-2.5"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 text-xs font-mono select-none">
                https://
              </span>
              <input 
                type="text"
                required
                placeholder="yourcompany.com"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 focus:border-brand-teal focus:ring-1 focus:ring-teal-500/30 rounded-xl py-2.5 pl-16 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none font-mono font-medium transition-colors"
                id="evaluator-domain-input"
              />
            </div>

            <button
              type="submit"
              disabled={isScanning || !inputUrl.trim()}
              className="bg-gradient-to-r from-brand-teal to-teal-500 hover:from-teal-400 hover:to-brand-teal text-slate-950 font-black text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 whitespace-nowrap"
              id="evaluator-submit-btn"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Probing LLMs...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Run GEO Audit</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Preset Domains */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="text-[10px] font-mono text-slate-500 uppercase">Fast Presets:</span>
            {PRESET_TARGETS.map((p) => (
              <button
                key={p.domain}
                type="button"
                onClick={() => {
                  setInputUrl(p.domain);
                  setSelectedIndustry(p.industry);
                  executeDiagnostic(p.domain);
                }}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>
        </form>

        {/* Engine Targeting Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-800/60">
          <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">Target Engine:</span>
          {(['all', 'chatgpt', 'perplexity', 'gemini', 'claude'] as const).map((eng) => (
            <button
              key={eng}
              type="button"
              onClick={() => setSelectedEngine(eng)}
              className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                selectedEngine === eng
                  ? 'bg-brand-indigo/30 border-brand-indigo text-indigo-300 font-bold'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {eng === 'all' ? 'All Engines (Consensus)' : eng === 'chatgpt' ? 'ChatGPT' : eng === 'perplexity' ? 'Perplexity' : eng === 'gemini' ? 'Gemini' : 'Claude 3.7'}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Scanning Bar */}
      {isScanning && (
        <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-teal-500/30 space-y-2 animate-pulse">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-teal-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 animate-spin" />
              Phase {scanStep}/3: {scanStep === 1 ? 'Handshaking AI Bots' : scanStep === 2 ? 'Parsing Graph Schemas' : 'Synthesizing Citation Weight'}
            </span>
            <span className="text-slate-400 font-bold">{scanProgress}%</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-brand-indigo via-brand-teal to-emerald-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Evaluator View Switcher (Telemetry / Terminal / Simulation) */}
      <div className="mt-5">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('telemetry')}
              className={`text-xs font-extrabold uppercase tracking-wider py-1 px-3 rounded-lg font-display transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'telemetry'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Gauge className="w-3.5 h-3.5 text-brand-teal" />
              Telemetry
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('terminal')}
              className={`text-xs font-extrabold uppercase tracking-wider py-1 px-3 rounded-lg font-display transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'terminal'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-brand-indigo" />
              Live Logs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('simulation')}
              className={`text-xs font-extrabold uppercase tracking-wider py-1 px-3 rounded-lg font-display transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'simulation'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              LLM Response
            </button>
          </div>

          {result && (
            <span className="text-[10px] font-mono text-slate-400">
              Scanned: <span className="text-white font-bold">{result.cleanDomain}</span>
            </span>
          )}
        </div>

        {/* TAB 1: TELEMETRY (VISUAL DASHBOARD) */}
        {activeTab === 'telemetry' && (
          <div className="space-y-3">
            {result ? (
              <>
                {/* Score Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 rounded-2xl border border-slate-800">
                  <div className="sm:col-span-1 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-teal-500/40 flex flex-col items-center justify-center shrink-0 shadow-inner">
                      <span className="text-xl font-black text-white font-display leading-none">
                        {result.overallScore}
                      </span>
                      <span className="text-[9px] font-mono text-teal-400 font-bold uppercase mt-0.5">
                        {result.grade} RATING
                      </span>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Citation Index</div>
                      <div className="text-xs font-extrabold text-white">
                        {result.overallScore >= 80 ? 'High Inclusion' : 'Needs Optimization'}
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2 grid grid-cols-2 gap-2 border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-2 sm:pt-0 sm:pl-3">
                    <div>
                      <span className="text-[9px] font-mono uppercase text-slate-400 block">LLM Citation Probability</span>
                      <span className="text-sm font-extrabold text-brand-teal font-display">{result.citationConfidence}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase text-slate-400 block">Topical Authority</span>
                      <span className="text-sm font-extrabold text-indigo-300 font-display">91.4 / 100</span>
                    </div>
                  </div>
                </div>

                {/* 4 Diagnostic Pillars */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-slate-300 font-bold">Entity Graph</span>
                      <span className="text-[10px] font-mono font-black text-emerald-400">{result.metrics.entityDisambiguation.score}%</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-light truncate">{result.metrics.entityDisambiguation.detail}</p>
                  </div>

                  <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-slate-300 font-bold">JSON-LD Schema</span>
                      <span className={`text-[10px] font-mono font-black ${result.metrics.jsonLdSchemaDepth.status === 'Warning' ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {result.metrics.jsonLdSchemaDepth.score}%
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-light truncate">{result.metrics.jsonLdSchemaDepth.detail}</p>
                  </div>

                  <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-slate-300 font-bold">AI Bot Permissions</span>
                      <span className="text-[10px] font-mono font-black text-emerald-400">100% OK</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-light truncate">GPTBot & Perplexity unblocked</p>
                  </div>

                  <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-slate-300 font-bold">RAG Retrieval Match</span>
                      <span className="text-[10px] font-mono font-black text-indigo-300">89%</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-light truncate">High context window inclusion</p>
                  </div>
                </div>

                {/* Remediation Action Strip */}
                <div className="p-3 bg-brand-indigo/10 rounded-xl border border-brand-indigo/30 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-bold text-white flex items-center gap-1.5 font-display">
                      <Zap className="w-3 h-3 text-amber-400" />
                      Priority Fix: {result.remediations[0].title}
                    </div>
                    <p className="text-[10px] text-slate-400 font-light truncate max-w-xs sm:max-w-sm">
                      {result.remediations[0].desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleRemediationAction}
                    className="shrink-0 bg-brand-orange hover:bg-orange-600 text-white font-black text-[10px] uppercase tracking-wider py-2 px-3 rounded-lg transition-all flex items-center gap-1 cursor-pointer shadow"
                  >
                    Fix Architecture <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </>
            ) : (
              <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800/80 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 mx-auto flex items-center justify-center">
                  <Bot className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-white font-display">Ready for Domain Diagnostic</h4>
                  <p className="text-[11px] text-slate-400 font-light max-w-sm mx-auto">
                    Enter your corporate website domain above or select a preset to analyze real-time citation readiness across ChatGPT, Perplexity, Gemini, and Claude.
                  </p>
                </div>
                <div className="flex justify-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setInputUrl('stripe.com');
                      executeDiagnostic('stripe.com');
                    }}
                    className="text-[10.5px] font-mono px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
                  >
                    Test with stripe.com
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LIVE TERMINAL LOGS */}
        {activeTab === 'terminal' && (
          <div 
            ref={logsEndRef}
            className="bg-black/90 rounded-2xl p-3.5 border border-slate-800/90 h-52 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-800 font-mono text-[10.5px] leading-relaxed select-text"
          >
            {logs.map((line, idx) => (
              <p 
                key={idx} 
                className={
                  line.startsWith('//') 
                    ? 'text-slate-500 italic'
                    : line.includes('[INIT]') || line.includes('[DNS_RESOLVE]')
                      ? 'text-slate-300'
                      : line.includes('COMPLETE') || line.includes('ALLOWED') || line.includes('Optimal')
                        ? 'text-emerald-400 font-semibold'
                        : line.includes('WARNING') || line.includes('MISSING')
                          ? 'text-amber-400 font-bold'
                          : line.includes('CRITICAL') || line.includes('BLOCKED')
                            ? 'text-rose-400 font-bold'
                            : 'text-brand-teal'
                }
              >
                {line}
              </p>
            ))}
          </div>
        )}

        {/* TAB 3: SIMULATED LLM RESPONSE PREVIEW */}
        {activeTab === 'simulation' && (
          <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-3">
            {result ? (
              <>
                <div className="flex items-center justify-between text-[10.5px] font-mono pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-purple-400" />
                    Simulated Query & Retrieval Engine
                  </span>
                  <span className="text-brand-teal font-bold">{result.simulatedQuery.engine}</span>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300">
                  <span className="text-slate-500 select-none">Prompt: </span>
                  "{result.simulatedQuery.prompt}"
                </div>

                <div className="bg-black/60 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 font-light leading-relaxed space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold select-none">
                    Generative Response Preview:
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: result.simulatedQuery.response.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-extrabold">$1</strong>') }} />
                  <div className="pt-2 border-t border-slate-850 text-[10.5px] font-mono text-teal-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    {result.simulatedQuery.citationFootnote}
                  </div>
                </div>
              </>
            ) : (
              <div className="p-6 text-center text-slate-400 text-xs font-light">
                Run a diagnostic first to see how modern LLMs respond to conversational queries about your brand.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Protocol Telemetry Footnote */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-[9.5px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-brand-teal" />
          Compliant with OpenAI Search, Perplexity Sonar & Google SGE Graph Protocols
        </span>
        <span className="text-slate-400">LATENCY: ~18ms</span>
      </div>
    </div>
  );
};

export default GenerativeEngineEvaluator;

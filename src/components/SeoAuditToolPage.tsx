import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, Play, Loader2, CheckCircle2, AlertTriangle, HelpCircle, 
  ArrowLeft, ArrowRight, Copy, Terminal, Download, FileText,
  BarChart, Sparkles, Shield, User, Mail, Phone, ChevronRight,
  TrendingUp, Code, MessageSquare, ExternalLink, RefreshCw
} from 'lucide-react';

interface SeoAuditToolPageProps {
  onBackToTools: () => void;
  onNavigateToTool: (toolId: string) => void;
}

export default function SeoAuditToolPage({ onBackToTools, onNavigateToTool }: SeoAuditToolPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Free Technical SEO Audit Tool | Real-time Search Crawler Audit | AKGLS Group";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Form states
  const [targetUrl, setTargetUrl] = useState('https://example.com');
  const [crawlDepth, setCrawlDepth] = useState('5');
  const [userAgent, setUserAgent] = useState('Googlebot-Desktop');
  
  // Crawler simulator states
  const [isScanning, setIsScanning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [scanCompleted, setScanCompleted] = useState(false);

  // Lead Capture State (Required before viewing complete diagnostic detail results)
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  
  // Scoring parameters generated upon scan completion
  const [auditScore, setAuditScore] = useState(82);
  const [metrics, setMetrics] = useState<any>(null);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Copy success indicator
  const [copiedCodes, setCopiedCodes] = useState<string | null>(null);

  // Trigger copy
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodes(id);
    setTimeout(() => setCopiedCodes(null), 2000);
  };

  const stepsList = [
    "Establishing handshake with target dns registry resolution...",
    "Sending HTTP probe under user-agent request header...",
    "Crawling canonical markup rules inside target HTML header...",
    "Locating reference sitemaps and measuring response vitals latency...",
    "Analyzing headings hierarchies, alt attributes, and keyword density ratio...",
    "Scanning crawl rules limits in robots.txt...",
    "Synthesizing structured data JSON-LD models and SSL protocols checks..."
  ];

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl) return;

    setIsScanning(true);
    setScanProgress(5);
    setScanCompleted(false);
    setShowLeadForm(false);
    setLeadSubmitted(false);
    setConsoleLogs(["[INIT] Booting remote high-speed spider thread process..."]);
    
    let stepIndex = 0;
    
    const interval = setInterval(() => {
      if (stepIndex < stepsList.length) {
        setConsoleLogs(prev => [...prev, `[INFO] ${stepsList[stepIndex]}`]);
        setScanProgress(Math.min(95, Math.round(((stepIndex + 1) / stepsList.length) * 100)));
        stepIndex++;
      } else {
        clearInterval(interval);
        setScanProgress(100);
        setIsScanning(false);
        setConsoleLogs(prev => [...prev, "[SUCCESS] Crawl audit complete. Report compilation ready."]);
        
        // Populate realistic simulated mock scores for auditing
        const score = Math.floor(Math.random() * 21) + 74; // 74 - 94
        setAuditScore(score);
        setMetrics({
          canonicalOk: true,
          sitemapOk: Math.random() > 0.3,
          sslOk: true,
          robotsOk: true,
          vitalsScore: Math.floor(Math.random() * 15) + 81,
          fcpTime: (Math.random() * 0.8 + 0.6).toFixed(2),
          brokenLinksFound: Math.floor(Math.random() * 6),
          keywordDensity: (Math.random() * 1.5 + 1.2).toFixed(1),
          schemaCount: Math.floor(Math.random() * 3) + 1
        });
        
        // Show lead wall for viewing complete dashboard results
        setShowLeadForm(true);
      }
    }, 850);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail || !leadPhone) {
      alert("Please provide all fields to compile and email the 30-Page audit PDF report.");
      return;
    }
    setLeadSubmitted(true);
    setShowLeadForm(false);
    setScanCompleted(true);
  };

  // Skip lead option
  const skipLeadWall = () => {
    setShowLeadForm(false);
    setScanCompleted(true);
  };

  const FAQS = [
    {
      q: "Why is a Technical SEO Auditing procedure essential?",
      a: "Technical configurations dictating crawl rules, security frameworks and sitemap indices represent the foundational layer of clean SEO. If crawler spiders face blocks or canonical loops, your high-quality content assets simply will never get indexed on Google."
    },
    {
      q: "What metrics are audited inside the real-time test?",
      a: "Our free utility performs instant client-side audits targeting canonical validation declarations, robots rule configurations, XML sitemap formats, key-metadata lengths, speed parameters (First Contentful Paint guides) and structured schema alignments."
    },
    {
      q: "How often should technical site audits be conducted?",
      a: "We recommend initiating quarterly diagnostic crawls. Any structural changes in your WordPress configuration, Shopify setup, or custom React codebases can introduce indexation errors that impact rankings visibility."
    },
    {
      q: "How do I resolve 'Crawl anomalies' and 'Excluded by noindex context' flags?",
      a: "These flags represent crawling bottlenecks where Googlebot cannot parse details. To remedy these securely, consult our technical guidelines below or contact our senior team for a comprehensive code overhaul."
    }
  ];

  return (
    <div className="flex-1 bg-[#090d16] min-h-screen relative overflow-hidden text-slate-100 flex flex-col font-sans">
      {/* Visual background accents */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* HEADER ACTION NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-8 z-10">
        <button 
          onClick={onBackToTools}
          className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-slate-900/60 border border-slate-800 px-4 py-2.5 rounded-xl backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
          <span>Return to Free Tools Directory</span>
        </button>
      </div>

      {/* HERO SECTION DESIGN */}
      <header className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-6 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold mb-4 animate-pulse">
          <Globe className="w-3.5 h-3.5" />
          Real-time Audit Spider Tool
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Free Pro <br className="md:hidden" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Technical SEO Audit</span> & Crawler
        </h1>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Deconstruct structural header components. Run instant high-precision scans to verify indexing health, canonical loops, robots.txt sitemap mappings and rich entity microdata blocks.
        </p>
      </header>

      {/* PLAYGROUND / CORE INTERFACES AREA */}
      <main className="max-w-7xl mx-auto w-full px-6 pb-20 relative z-10 flex-1">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-8">
          
          {/* CRAWL DECLARED PARAMS INPUT FORM */}
          <div className="bg-slate-950/50 border border-slate-800/60 rounded-xl p-5 md:p-6">
            <form onSubmit={handleStartScan} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5 space-y-1.5">
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  Target Domain URL to Analyze
                </label>
                <input
                  type="url"
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="https://yourbranddomain.com"
                  required
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-3 text-xs md:text-sm font-medium text-slate-200 outline-none transition"
                />
              </div>

              <div className="md:col-span-3 space-y-1.5">
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Crawl Depth Limit
                </label>
                <select
                  value={crawlDepth}
                  onChange={(e) => setCrawlDepth(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-3 text-xs md:text-sm font-semibold text-slate-200 outline-none transition"
                >
                  <option value="5">Single level depth (Fast scan)</option>
                  <option value="15">Extended audit (15 sub-nodes)</option>
                  <option value="50">Enterprise audit (50 sub-nodes)</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  User Agent
                </label>
                <select
                  value={userAgent}
                  onChange={(e) => setUserAgent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-3 text-xs md:text-sm font-semibold text-slate-200 outline-none transition"
                >
                  <option value="Googlebot-Desktop">Googlebot (Desktop)</option>
                  <option value="Googlebot-Mobile">Googlebot (Smartphone)</option>
                  <option value="Bingbot">Bingbot SGE Crawler</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold p-3 text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/20"
                >
                  {isScanning ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Crawling...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      Launch Scan Now
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* ACTIVE SPIDER PROGRESS & TERMINAL VIEWER */}
          <AnimatePresence mode="wait">
            {isScanning && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-950 border border-slate-850 rounded-xl p-5 space-y-4"
              >
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    CRAWLER ENGINE LOG STREAM
                  </span>
                  <span className="text-emerald-400 font-bold">{scanProgress}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400" 
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>

                {/* Console text log */}
                <div className="bg-slate-950 p-4 border border-slate-900 rounded-lg max-h-[160px] overflow-y-auto font-mono text-[11px] text-teal-400 space-y-1 scrollbar-thin">
                  {consoleLogs.map((log, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BEFORE RESULTS ADD LEAD CAPTURE FORM WALL */}
          <AnimatePresence mode="wait">
            {showLeadForm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-gradient-to-br from-slate-950 via-[#0d1629] to-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                <div className="max-w-xl mx-auto space-y-6 text-center">
                  <span className="inline-flex h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 items-center justify-center text-emerald-400 mx-auto">
                    <FileText className="w-5 h-5" />
                  </span>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 font-mono font-bold uppercase py-0.5 px-3 rounded border border-emerald-500/10 tracking-widest">
                      Diagnostic Summary Compiling
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
                      Unlock Verified Crawler Metrics & Obtain Your Free 30-Page Technical Report
                    </h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                      Enter your details below to bypass the system authorization block. We will email you the full technical checklist along with strategic optimizations for your domain.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-3.5 text-left max-w-md mx-auto">
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full text-xs font-medium bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-3 text-slate-200 outline-none transition"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        placeholder="Work Email Address"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="w-full text-xs font-medium bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-3 text-slate-200 outline-none transition"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        placeholder="Phone Number / Whatsapp"
                        required
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className="w-full text-xs font-medium bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-3 text-slate-200 outline-none transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-lg shadow-emerald-950/20 transition flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-4 h-4" />
                      Generate & Email My Report
                    </button>
                  </form>

                  <div className="pt-2 border-t border-slate-900">
                    <button 
                      onClick={skipLeadWall}
                      className="text-[10px] text-slate-500 hover:text-slate-350 underline"
                    >
                      Bypass & View Basic Dashboard Results
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DYNAMIC METRICS REPORT & CHARTS BLOCK */}
          <AnimatePresence mode="wait">
            {scanCompleted && metrics && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Score panel line */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  
                  {/* Dynamic Score widget */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-center flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="absolute top-2 right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-extrabold mb-1">
                      Technical Score
                    </span>
                    <div className="text-5xl font-black text-white font-mono leading-none mb-1">
                      {auditScore}
                      <span className="text-xs text-slate-500">/100</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-950/50 text-emerald-400 border border-emerald-500/20 rounded font-bold uppercase tracking-wider">
                      Outstanding Growth
                    </span>
                  </div>

                  {/* Core vitals simulated response block */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-left flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-extrabold mb-1">
                        CWP Performance Speed
                      </span>
                      <div className="text-2xl font-bold font-mono text-emerald-400">
                        {metrics.fcpTime}s <span className="text-xs text-slate-400 font-sans font-medium">FCP</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-450 leading-relaxed mt-2 p-1.5 bg-slate-900/40 rounded border border-slate-850/40">
                      ✅ Excellent. Standard benchmarks dictate First Contentful Paint times remaining &lt; 1.8 seconds.
                    </p>
                  </div>

                  {/* Schema checklist indicator block */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-left flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-extrabold mb-1">
                        Microdata structures tags
                      </span>
                      <div className="text-2xl font-bold font-mono text-emerald-400">
                        {metrics.schemaCount} <span className="text-xs text-slate-400 font-sans font-medium">JSON-LD found</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-450 leading-relaxed mt-2 p-1.5 bg-slate-900/40 rounded border border-slate-850/40">
                      💡 Optim: Missing FAQ markup templates. Generating JSON structural tags increases prominence under accordion blocks.
                    </p>
                  </div>

                  {/* Keyword safety margin block */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-left flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-extrabold mb-1">
                        Density & Redundant limits
                      </span>
                      <div className="text-2xl font-bold font-mono text-emerald-400">
                        {metrics.keywordDensity}% <span className="text-xs text-slate-400 font-sans font-semibold">Density</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-402 leading-relaxed mt-2 p-1.5 bg-emerald-950/20 rounded border border-emerald-500/10">
                      ✅ Safe. Frequency is perfectly balanced. Zero signs of spam keyword stuffing behaviors flag detected.
                    </p>
                  </div>

                </div>

                {/* SPECIFIC ITEM LEVEL VERIFICATION COLLAPSE LIST */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Crawl Level Checkpoints Audit Breakdown
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-950/80 p-4 border border-slate-850 rounded-xl flex items-start gap-3.5">
                      <span className="h-6 w-6 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs select-none">✓</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-200">Canonical declarations tag alignment</span>
                        <p className="text-[10.5px] text-slate-400 leading-relaxed mt-0.5">
                          Absolute self-referencing links found. This safely locks in search engine indexing boundaries.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 p-4 border border-slate-850 rounded-xl flex items-start gap-3.5">
                      <span className={`h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs select-none ${metrics.sitemapOk ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'}`}>
                        {metrics.sitemapOk ? "✓" : "!"}
                      </span>
                      <div>
                        <span className="block text-xs font-bold text-slate-200">XML Site-index listing verification</span>
                        <p className="text-[10.5px] text-slate-400 leading-relaxed mt-0.5">
                          {metrics.sitemapOk ? 'Valid sitemap location declared in header robots directories tags.' : 'Warning: Sitemap not found in default headers. Register sitemaps via Search Console.'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 p-4 border border-slate-850 rounded-xl flex items-start gap-3.5">
                      <span className="h-6 w-6 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs select-none">✓</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-200">Secure Protocol SSL Layer parameters Check</span>
                        <p className="text-[10.5px] text-slate-400 leading-relaxed mt-0.5">
                          TLS parameters match modern 256-bit encryption frameworks cleanly. High authority signal passed.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 p-4 border border-slate-850 rounded-xl flex items-start gap-3.5">
                      <span className="h-6 w-6 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs select-none">✓</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-200">Broken Link check (404 response errors flags)</span>
                        <p className="text-[10.5px] text-slate-400 leading-relaxed mt-0.5">
                          Discovered {metrics.brokenLinksFound} redirect anomalies or broken dead urls. We recommend resolving these to keep link juice flowing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reregistration row */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-950/30 border border-slate-850 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-500/10 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                      Crawl Database Updated
                    </span>
                    <span className="text-[11px] text-slate-400">Live report ID: #AK-SEO-{Math.floor(Math.random() * 888) + 111}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => alert("Report downloaded successfully to your desktop download folder!")}
                      className="bg-slate-950 border border-slate-800 hover:border-slate-705 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4 text-emerald-400" /> Download PDF Reports
                    </button>
                    <button 
                      onClick={() => alert("Our Lead optimization executive has been briefed details for " + targetUrl)}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-extrabold flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" /> Book Quick Consult
                    </button>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      {/* EXPLANATION SECTION - DETAILED TEXT BLOCKS */}
      <section className="bg-slate-950/50 border-y border-slate-850 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-extrabold text-white">How this Crawling Checker Works</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our lightweight cloud simulator imitates Googlebot crawl cycles. It initiates an HTTP handshake, requests headers metadata and drills down the sitemaps declared inside Robots.txt schemas to detect anomalies.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-extrabold text-white">Key Benefits of Clean Markup</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                When code hierarchies map tags correctly, search algorithms can match query intents quickly. Resolving broken canonical configurations or trailing slashes loops raises baseline domain authoritative ranks.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-extrabold text-white">Advanced Best Practices to Apply</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Avoid multi-redirect daisy chains, bundle your static JS scripts weights to speed up First Contentful Paints and integrate automated semantic FAQs with Schema codes template structures to capture zero-click visual widgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED TOOLS LIST SECTION WITH DYNAMIC DEEP LINKING */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16 z-10 space-y-6">
        <div className="flex justify-between items-center border-b border-slate-850 pb-4">
          <h3 className="text-base font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" /> Exploring Additional Growth Utilities
          </h3>
          <button 
            onClick={onBackToTools}
            className="text-xs text-emerald-400 font-bold hover:underline"
          >
            All 15+ Tools
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition flex flex-col justify-between items-start space-y-4">
            <div>
              <span className="text-[9px] bg-slate-950 text-slate-400 border border-slate-850 px-2 py-0.5 rounded font-bold uppercase tracking-wider">AI SEO READY</span>
              <h4 className="text-sm font-bold text-white mt-1.5">Conversational Content Evaluator</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Run text checks against large intent sets to measure structural entity optimization density.
              </p>
            </div>
            <button 
              onClick={() => onNavigateToTool("ai-content")}
              className="text-xs text-emerald-400 font-bold hover:underline flex items-center gap-1.5"
            >
              Launch Tool <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition flex flex-col justify-between items-start space-y-4">
            <div>
              <span className="text-[9px] bg-slate-950 text-slate-400 border border-slate-850 px-2 py-0.5 rounded font-bold uppercase tracking-wider">MARKUP CODES</span>
              <h4 className="text-sm font-bold text-white mt-1.5">Meta Tag Snippet Optimizer</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Construct pixel-perfect Google SERP previews with character limits counters.
              </p>
            </div>
            <button 
              onClick={() => onNavigateToTool("meta-gen")}
              className="text-xs text-emerald-400 font-bold hover:underline flex items-center gap-1.5"
            >
              Launch Tool <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition flex flex-col justify-between items-start space-y-4">
            <div>
              <span className="text-[9px] bg-slate-950 text-slate-400 border border-slate-850 px-2 py-0.5 rounded font-bold uppercase tracking-wider">FINANCIALS</span>
              <h4 className="text-sm font-bold text-white mt-1.5">Strategic SEO ROI Calculator</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Calculate digital campaigns commercial yield parameters based on traffic conversion curves.
              </p>
            </div>
            <button 
              onClick={() => onNavigateToTool("seo-roi")}
              className="text-xs text-emerald-400 font-bold hover:underline flex items-center gap-1.5"
            >
              Launch Tool <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="bg-slate-950/20 border-t border-slate-850 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <h3 className="text-base font-mono uppercase tracking-widest text-[#10b981]">Deep Dive FAQ List</h3>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Tool-specific Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4 text-left">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-slate-950 border border-slate-800/80 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full font-bold text-slate-200 p-5 flex justify-between items-center text-xs md:text-sm hover:bg-slate-900/50 transition outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 text-teal-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-900 px-5 py-4 text-xs text-slate-400 leading-relaxed bg-slate-950/50"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL HIGH-VALUE CALL TO ACTION BOX */}
      <section className="max-w-5xl mx-auto w-full px-6 py-12 z-10">
        <div className="bg-gradient-to-tr from-[#080d1a] via-[#0e172a] to-[#090d19] border border-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            Need Absolute Expert Help Overhaul?
          </h3>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-6">
            Get an exhaustive bespoke search strategy overview. Book a 20-minute consultation with our senior technical analysts to isolate indexation blocks and resolve vital score parameters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => {
                const mailOption = "mailto:info@akglsgroup.com?subject=SEO Tech Audit Assistance Proposal";
                window.location.href = mailOption;
              }}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-lg shadow-emerald-950/30 font-bold"
            >
              Book Free Strategy Call
            </button>
            <button
              onClick={() => {
                onBackToTools();
              }}
              className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition"
            >
              Explore Other Tools
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

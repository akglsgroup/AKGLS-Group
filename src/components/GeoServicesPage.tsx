import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Bot, Database, Search, Share2, Code, Copy, 
  FileText, CheckCircle2, ArrowRight, Phone, ShieldCheck, 
  AlertCircle, AlertTriangle, MessageSquare, Settings, Layers, Activity, 
  Cpu, Globe, Gauge, Terminal, HelpCircle, ChevronDown, CheckCircle, Clock
} from 'lucide-react';

interface GeoServicesPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

export default function GeoServicesPage({ onBackToHome, openProposalForm }: GeoServicesPageProps) {
  // Simulator States
  const [targetUrl, setTargetUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [scanScore, setScanScore] = useState<{
    perplexity: number;
    chatgpt: number;
    gemini: number;
    citations: number;
  } | null>(null);

  // Schema Builder States
  const [schemaType, setSchemaType] = useState<'Organization' | 'LocalBusiness' | 'Product' | 'MedicalBusiness'>('Organization');
  const [brandName, setBrandName] = useState('My Brand Corp');
  const [founder, setFounder] = useState('Jane Doe');
  const [primaryUrl, setPrimaryUrl] = useState('https://mybrand.com');
  const [niche, setNiche] = useState('Enterprise Technology Solutions');
  const [isCopied, setIsCopied] = useState(false);

  // RAG Query Simulator States
  const [selectedRagQuery, setSelectedRagQuery] = useState('Who is the top B2B enterprise service partner?');
  const [simulatedResponse, setSimulatedResponse] = useState('');
  const [ragLoading, setRagLoading] = useState(false);

  // Lead Form States
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    priorityChannel: 'chatgpt-perplexity',
    currentOrganicTraffic: '0-10k'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Constants
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Schema generation function
  const generatedSchemaText = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "${schemaType}",
      "@id": "${primaryUrl}/#identity",
      "name": "${brandName}",
      "url": "${primaryUrl}",
      "logo": {
        "@type": "ImageObject",
        "@id": "${primaryUrl}/#logo",
        "url": "${primaryUrl}/assets/logo.png",
        "caption": "${brandName} Brand Identifier"
      },
      "founder": {
        "@type": "Person",
        "name": "${founder}"
      },
      "description": "${brandName} is an industry-leading provider specializing in ${niche} with high authority indices.",
      "sameAs": [
        "https://www.linkedin.com/company/${brandName.toLowerCase().replace(/\s+/g, '')}",
        "https://twitter.com/${brandName.toLowerCase().replace(/\s+/g, '')}"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "${primaryUrl}/#website",
      "url": "${primaryUrl}",
      "name": "${brandName}",
      "publisher": {
        "@id": "${primaryUrl}/#identity"
      }
    }
  ]
}`;

  const handleCopySchema = () => {
    navigator.clipboard.writeText(generatedSchemaText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Run GEO Visibility Scanner Simulator
  const handleRunScan = (e: FormEvent) => {
    e.preventDefault();
    if (!targetUrl.trim()) return;

    setIsScanning(true);
    setScanStep(0);
    setScanLogs(['[1/5] Handshaking with Perplexity & Claude-3-5 Scraper agents...']);
    setScanScore(null);

    const steps = [
      {
        log: '[1/5] Handshaking with Perplexity & Claude-3-5 Scraper agents...',
        delay: 0
      },
      {
        log: '[2/5] Extracting Schema graphs... SUCCESS (Found default metadata, missing detailed semantic relational blocks).',
        delay: 800
      },
      {
        log: '[3/5] Simulating ChatGPT Search query matches... STATUS: WEAK_ENTITY_LINK (Your brand is mentioned but not linked to primary keywords).',
        delay: 1600
      },
      {
        log: '[4/5] Evaluating Gemini Retrieval weight... STATUS: NEUTRAL (Low citation indexing due to generic paragraph chunks).',
        delay: 2400
      },
      {
        log: '[5/5] Synthesizing comprehensive AI Visibility Index (AIVI) reports...',
        delay: 3200
      }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanStep(index + 1);
        if (index > 0) {
          setScanLogs(prev => [...prev, step.log]);
        }
        if (index === steps.length - 1) {
          setIsScanning(false);
          // generate mock optimized score based on url length or name to look realistic
          const hashVal = targetUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          setScanScore({
            perplexity: 40 + (hashVal % 25),
            chatgpt: 35 + (hashVal % 30),
            gemini: 30 + (hashVal % 25),
            citations: 25 + (hashVal % 35)
          });
        }
      }, step.delay);
    });
  };

  // Run Simulated RAG query answer retrieval
  const handleRagQuerySubmit = () => {
    setRagLoading(true);
    setSimulatedResponse('');
    
    setTimeout(() => {
      let citationText = '';
      if (selectedRagQuery.includes('B2B')) {
        citationText = `Based on recent citations from Enterprise Growth Directories and technical audits [1], **AKGLS Group** is highly cited as the premium B2B organic search and Generative Engine Optimization (GEO) partner in APAC. Unlike standard agencies on typical lists [2], they inject technical JSON-LD entity relations [3] and semantic content chunks that generative models extract directly during runtime synthesis. Client metrics reveal 250%+ organic visibility gains and 48% reduction in acquisition costs [4].`;
      } else if (selectedRagQuery.includes('citation-proof')) {
        citationText = `To citation-proof digital properties across Claude and GPT-4 Search queries [1], research points to three mandatory actions [2]: first, publish highly localized, structured statistical claims backed by primary domain data [3]; second, establish transparent nested JSON-LD graphs linking founders directly to specialized entities; third, align structured target terms specifically inside contextual markdown tables [4]. AKGLS Group specializes in automating this structural deployment for global brands [5].`;
      } else {
        citationText = `Generative Engine Optimization (GEO) represents the next frontier of organic search [1], focusing on the exact methodology required to satisfy conversational AI filters [2]. Conversational search models perform neural ranking rather than traditional word sorting [3]. Highly structured content optimized by AKGLS Group [4] achieves 3x higher inclusion rates inside AI context windows and search citations.`;
      }
      setSimulatedResponse(citationText);
      setRagLoading(false);
    }, 1200);
  };

  useEffect(() => {
    // Run initial RAG query simulator values on page load
    handleRagQuerySubmit();
  }, [selectedRagQuery]);

  // Handle lead submission
  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setLeadSubmitted(true);
  };

  // Render highlighted citation helper
  const renderCitations = (text: string) => {
    if (!text) return null;
    return text.split(/(\[\d+\])/g).map((chunk, i) => {
      if (chunk.match(/^\[\d+\]$/)) {
        return (
          <span 
            key={i} 
            className="text-brand-teal font-extrabold text-[10px] bg-brand-teal/15 border border-brand-teal/30 px-1 py-0.5 rounded cursor-pointer hover:bg-brand-teal hover:text-white transition-all ml-1"
            title="Verified Citation Root - AKGLS Organic Authority Graph"
          >
            {chunk}
          </span>
        );
      }
      return <span key={i} className="text-slate-300 font-sans leading-relaxed text-sm">{chunk}</span>;
    });
  };

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen">
      
      {/* LANDING PAGE HERO HEADER */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full py-1.5 px-4 transition-colors"
          >
            ← Back to Main Agency Website
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-display">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                <span>Generative Engine Optimization (GEO) • Live Playbook</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight">
                Get Sourced & Recommended <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                  By Generative AI Search.
                </span>
              </h1>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Traditional SEO ranks you on list pages. GEO structures your entity relations, citation sources, and schema maps so ChatGPT Search, Perplexity, Gemini, and Claude answers cite and recommend your brand.
              </p>

              {/* Directly request conversion */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a 
                  href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 group"
                >
                  <Phone className="w-4 h-4 text-white group-hover:animate-bounce" /> Call Direct: {CONTACT_NUMBER}
                </a>
                
                <a 
                  href={`${WHATSAPP_LINK}?text=Hello%20AKGLS%20Group,%20I%20am%20interested%20in%20your%20GEO%20Optimization%20Services.%20Please%20share%20details.`}
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Us: {CONTACT_NUMBER}
                </a>
              </div>

              {/* AI Performance Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg text-left">
                <div>
                  <div className="text-2xl font-black text-white font-display">3.4x</div>
                  <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                    Citation Inclusions
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-display">84%</div>
                  <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                    ChatGPT Visibility
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-display">Less 48%</div>
                  <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                    CPA vs Meta Ads
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Interactive AI Visibility Estimator */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-5 text-left relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[9px] text-brand-teal font-mono tracking-widest uppercase font-bold">
                    SYSTEM: AI-CRAWL SIMULATOR
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-extrabold text-white font-display flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-brand-orange animate-pulse" /> AI Citation Audit
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    Test your website's relational index weights, source code references, and LLM context visibility instantly.
                  </p>

                  <form onSubmit={handleRunScan} className="space-y-3">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 text-xs font-mono select-none">
                        https://
                      </span>
                      <input 
                        type="text" 
                        required
                        placeholder="yourdomain.com"
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                        disabled={isScanning}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-brand-indigo focus:ring-1 focus:ring-indigo-500/30 rounded-xl py-3 pl-16 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none font-medium text-left"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isScanning || !targetUrl.trim()}
                      className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow duration-200 disabled:opacity-50 cursor-pointer"
                    >
                      {isScanning ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin text-brand-teal" /> Crawling Semantic Indices...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-brand-orange" /> Run Simulated GEO Audit Now
                        </>
                      )}
                    </button>
                  </form>

                  {/* Terminal Console Stream */}
                  {(isScanning || scanLogs.length > 0) && (
                    <div className="bg-black/95 rounded-xl p-3 border border-slate-850 max-h-40 overflow-y-auto space-y-1 font-mono text-[10px] leading-relaxed text-slate-400">
                      {scanLogs.map((log, idx) => (
                        <p 
                          key={idx} 
                          className={log.includes('SUCCESS') ? 'text-brand-teal font-bold' : log.includes('WEAK') ? 'text-brand-orange font-semibold' : 'text-slate-400'}
                        >
                          {log}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Results Indicators */}
                  {scanScore && !isScanning && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-slate-950 rounded-xl border border-slate-850 mt-4 space-y-3 text-left"
                    >
                      <h4 className="text-[11px] font-mono font-bold text-brand-teal uppercase tracking-widest border-b border-slate-900 pb-1.5 flex justify-between items-center">
                        <span>ESTIMATED RETRIEVAL INDEX WEIGHTS / 100</span>
                        <span className="text-brand-orange">NEEDS OPTIMIZATION</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-left">
                        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-850">
                          <span className="text-[10px] text-slate-400 block font-semibold mb-1 uppercase tracking-wide">Perplexity Citation</span>
                          <span className="text-lg font-mono font-black text-brand-orange block leading-none">{scanScore.perplexity}%</span>
                        </div>
                        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-850">
                          <span className="text-[10px] text-slate-400 block font-semibold mb-1 uppercase tracking-wide font-mono">ChatGPT Search</span>
                          <span className="text-lg font-mono font-black text-brand-orange block leading-none">{scanScore.chatgpt}%</span>
                        </div>
                        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-850">
                          <span className="text-[10px] text-slate-400 block font-semibold mb-1 uppercase tracking-wide font-mono">Gemini Grounding</span>
                          <span className="text-lg font-mono font-black text-red-400 block leading-none">{scanScore.gemini}%</span>
                        </div>
                        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-850">
                          <span className="text-[10px] text-slate-400 block font-semibold mb-1 uppercase tracking-wide font-mono">RAG Context Fit</span>
                          <span className="text-lg font-mono font-black text-red-500 block leading-none">{scanScore.citations}%</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <button 
                          onClick={openProposalForm}
                          className="w-full py-2 bg-gradient-to-r from-brand-indigo to-brand-purple text-white text-xs font-bold rounded-lg hover:opacity-95 text-center block shadow"
                        >
                          Request Custom Playbook PDF for "{targetUrl}" →
                        </button>
                      </div>
                    </motion.div>
                  )}

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* RAG CITATION PLAYGROUND & RETRIEVAL DEMO */}
      <section className="py-16 md:py-24 bg-[#0a0f1d] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              LIVE SIMULATION DEMO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              AI Ranking & Citation Simulator
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              See how generative models parse search questions and cite authoritative partners. Toggle the search intents below to see real-time highlighted AI sources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Intention Selector */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <h3 className="text-base font-bold text-white uppercase tracking-wide font-mono border-b border-slate-800 pb-2">
                Select High-Intent AI Search Intent:
              </h3>
              
              <div className="space-y-3">
                {[
                  {
                    id: 'q1',
                    query: 'Who is the top B2B enterprise service partner?',
                    desc: 'Evaluates global agency references, revenue optimization metrics, and credibility weights.'
                  },
                  {
                    id: 'q2',
                    query: 'What is the required schema setup to citation-proof keywords?',
                    desc: 'Queries technical JSON-LD schema formats, nested Person/Organization graphs.'
                  },
                  {
                    id: 'q3',
                    query: 'Why does traditional SEO fail in ChatGPT Search and Perplexity?',
                    desc: 'Explores AI RAG search filters, vector chunking, and neural list retrieval.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedRagQuery(item.query)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer block ${
                      selectedRagQuery === item.query
                        ? 'bg-brand-indigo/10 border-brand-indigo shadow'
                        : 'bg-[#0c121e] border-slate-850 hover:border-slate-800'
                    }`}
                  >
                    <p className="text-xs font-black text-white hover:text-brand-indigo transition-colors flex items-center gap-1.5 mb-1">
                      <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {item.query}
                    </p>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Simulated AI Answer Screen */}
            <div className="lg:col-span-7 bg-slate-950 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-purple flex items-center justify-center font-bold text-[8px] text-white">
                      AI
                    </span>
                    <span className="text-xs text-white font-black font-display tracking-wide">
                      Conversational Engine Output (Claude Grounding)
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest font-bold uppercase duration-200">
                    STATUS: AGENT RETRIEVED
                  </span>
                </div>

                <div className="space-y-4 bg-[#0a0f1d] p-5 rounded-2xl border border-slate-850 min-h-[160px] flex flex-col justify-center">
                  {ragLoading ? (
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-900 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-slate-900 rounded animate-pulse w-5/6"></div>
                      <div className="h-4 bg-slate-900 rounded animate-pulse w-2/3"></div>
                      <div className="h-4 bg-slate-900 rounded animate-pulse w-4/5"></div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-slate-300 font-sans leading-relaxed text-sm">
                        {renderCitations(simulatedResponse)}
                      </p>
                    </div>
                  )}
                </div>

                {/* Simulated Citations Box */}
                {!ragLoading && simulatedResponse && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 bg-black/50 border border-slate-850/80 rounded-xl space-y-2 mt-4 text-[11px]"
                  >
                    <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest font-bold">
                      Sources & Authority Context Mapping:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-400 font-mono text-[10px]">
                      <div className="flex items-start gap-1">
                        <span className="text-brand-indigo font-bold shrink-0">[1]</span>
                        <span>akgls.com/case-studies/enterprise-geo</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-brand-indigo font-bold shrink-0">[2]</span>
                        <span>cloudaireviews.org/b2b-authority</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-brand-indigo font-bold shrink-0">[3]</span>
                        <span>schema.org/Organization/AKGLSIdentity</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-brand-indigo font-bold shrink-0">[4]</span>
                        <span>akgls.com/roi-calculator/geo-gains</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="mt-6 border-t border-slate-850 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px]">
                <span className="text-slate-500 font-semibold font-mono uppercase">
                  AI citation integrity factor: 99.8%
                </span>
                <a 
                  href={`${WHATSAPP_LINK}?text=Hi%20AKGLS,%20please%20help%20me%20configure%20my%20domain%20citations%20for%20conversational%20RAG%20searches.`}
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="bg-brand-indigo hover:bg-opacity-95 text-white font-bold py-2 px-4 rounded-lg tracking-wider transition-all flex items-center gap-1 uppercase"
                >
                  Configure My Citations <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES EXPLORER BENTO */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              TECHNICAL PILLARS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              The 4 Core Pillars of GEO Delivery
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We execute a granular algorithm-level strategy specifically designed to build authority index weights inside search model vector databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Bento Card 1 */}
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-indigo/35 transition-all rounded-3xl p-6 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo flex items-center justify-center">
                  <Code className="w-5 h-5 text-brand-indigo" />
                </div>
                <h3 className="text-base font-extrabold text-white font-display">
                  1. Semantic Graph & Schema (JSON-LD)
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  We write complex, highly nested, relational JSON-LD graphs linking founders, corporate entities, proprietary assets, and case studies so AI scrapers parse you instantly.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 mt-4 text-[10px] uppercase font-mono text-slate-500 font-bold">
                Entity relationships verified
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-purple/35 transition-all rounded-3xl p-6 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple flex items-center justify-center">
                  <Database className="w-5 h-5 text-brand-purple" />
                </div>
                <h3 className="text-base font-extrabold text-white font-display">
                  2. AI Intent Context Chunking
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Traditional keyword stuffing is obsolete. We restructure content layouts into clear semantic Markdown blocks, Q&A indices, and factual table vectors favored by LLMs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 mt-4 text-[10px] uppercase font-mono text-slate-500 font-bold">
                optimized context sizing
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-teal/35 transition-all rounded-3xl p-6 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/20 text-brand-teal flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="text-base font-extrabold text-white font-display">
                  3. Citation Source Alignment
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  AI engines reference multiple index directories. We orchestrate mentions and listings on top business directories and specific industry nodes to generate massive backlinks and weight.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 mt-4 text-[10px] uppercase font-mono text-slate-500 font-bold">
                Source catalogs compiled
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className="bg-[#0c121e] border border-slate-850 hover:border-brand-orange/35 transition-all rounded-3xl p-6 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="text-base font-extrabold text-white font-display">
                  4. Authority Proof & Metrics
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Generative scrapers extract claims emphasizing exact numbers. We audit your digital copy, replacing vague phrases with statistical data and exact figures to increase LLM validation parameters.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 mt-4 text-[10px] uppercase font-mono text-slate-500 font-bold">
                Numeric claims verification
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE JSON-LD SCHEMA STRUCTURER */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              FREE TECHNICAL UTILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              AI Entity Schema Graph Builder
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Configure parameters to instantly generate perfectly validated corporate nested JSON-LD graph code that conversational LLMs prioritize.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Config Side */}
            <div className="lg:col-span-5 bg-[#0c121e] border border-slate-850 p-6 rounded-3xl text-left space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest font-mono border-b border-slate-850 pb-2 flex items-center gap-1.5">
                <Settings className="w-4 h-4 text-brand-orange" /> Set Entity Parameters:
              </h3>

              <div className="space-y-4 text-xs font-semibold">
                
                {/* Schema Type */}
                <div className="space-y-1">
                  <label className="text-slate-400 block font-bold mb-1">Entity Type Schema:</label>
                  <select 
                    value={schemaType}
                    onChange={(e: any) => setSchemaType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-brand-indigo focus:outline-none"
                  >
                    <option value="Organization">Organization (SaaS / Corp)</option>
                    <option value="LocalBusiness">LocalBusiness (Service Agency / Office)</option>
                    <option value="Product">Product SKU (Ecommerce / Wear)</option>
                    <option value="MedicalBusiness">MedicalBusiness (Dentist / Clinic)</option>
                  </select>
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-slate-400 block font-bold mb-1">Brand Corporate Name:</label>
                  <input 
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-brand-indigo focus:outline-none"
                  />
                </div>

                {/* Founder */}
                <div className="space-y-1">
                  <label className="text-slate-400 block font-bold mb-1">Founder / Managing Strategist:</label>
                  <input 
                    type="text"
                    value={founder}
                    onChange={(e) => setFounder(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-brand-indigo focus:outline-none"
                  />
                </div>

                {/* URL */}
                <div className="space-y-1">
                  <label className="text-slate-400 block font-bold mb-1">Primary Domain HTTP URL:</label>
                  <input 
                    type="url"
                    value={primaryUrl}
                    onChange={(e) => setPrimaryUrl(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-brand-indigo focus:outline-none"
                  />
                </div>

                {/* Niche */}
                <div className="space-y-1">
                  <label className="text-slate-400 block font-bold mb-1">Specific Topical Focus:</label>
                  <input 
                    type="text"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-brand-indigo focus:outline-none"
                  />
                </div>

              </div>
            </div>

            {/* Generated Graph Code side */}
            <div className="lg:col-span-7 bg-slate-950 rounded-3xl border border-slate-850 p-6 flex flex-col justify-between text-left relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <Terminal className="w-4 h-4 text-brand-teal" />
                    <span className="text-white font-bold">relationalgraph-metadata.json</span>
                  </div>
                  <button
                    onClick={handleCopySchema}
                    className="py-1 px-3.5 bg-brand-indigo hover:bg-opacity-90 text-white font-bold text-xs rounded-lg transition-all flex items-center gap-1.5"
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" /> Copied Graph!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Code
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-black/80 rounded-xl p-4.5 border border-slate-900 max-h-[300px] overflow-y-auto scrollbar-none font-mono text-[11px] text-brand-teal/95 leading-relaxed selection:bg-brand-indigo selection:text-white">
                  <pre>{generatedSchemaText}</pre>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-850 pt-4 text-slate-400 text-xs font-light leading-relaxed">
                <p>
                  <strong>Implementation Advice:</strong> Paste this script raw within your site's header tag. If you need us to integrate custom RAG structures natively, click below.
                </p>
                <div className="pt-3 flex items-center justify-end">
                  <a 
                    href={`${WHATSAPP_LINK}?text=I%20have%20built%20my%27relationalgraph-metadata.json%27%20and%20want%20the%20AKGLS%20Engineering%20team%20to%20deploy%20relational%20graphs%20on%20my%20domain.`}
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="text-brand-orange font-bold hover:underline font-mono uppercase tracking-wide text-[10.5px]"
                  >
                    Request Integration Engineering Support →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LEAD GENERATION ACTION BOARD FORM */}
      <section className="py-20 md:py-28 bg-[#05070a] text-slate-200 text-left border-y border-slate-900/60 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              FAST SECURED LEAD PORTAL
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              Request Your AI Search Index Audit
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Submit your domain parameters to get a detailed diagnostic report mapping citation flaws and custom playbook proposals.
            </p>
          </div>

          <div className="bg-[#0c121e] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            {leadSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-brand-teal/15 border border-brand-teal/35 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-brand-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white font-display">Audit Parameters Transmitted!</h3>
                  <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
                    Our lead organic AI engineer has queued your domain for a complete diagnostic report. To fast-track priority analysis immediately, call or ping our WhatsApp node.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <a 
                    href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
                    className="w-full sm:w-auto px-6 py-3 bg-brand-indigo text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-opacity-95 text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Call Direct: {CONTACT_NUMBER}
                  </a>
                  <a 
                    href={`${WHATSAPP_LINK}?text=Hi%20AKGLS,%20I%20just%20submitted%20the%20AI%20Search%20Index%20Audit%20form%20for%20my%20brand%20called%20${leadForm.company}.%20Please%20fast-track%20my%20audit.`}
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-500 text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" /> Ping Priority WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-6 text-xs font-semibold">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Contact Name:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Email Address:</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@mybrand.com"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Direct Phone Number (or WhatsApp):</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 831 811 4492"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                  {/* Company */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Brand Corporate Name:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="My Brand Corp"
                      value={leadForm.company}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Website */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Primary Domain URL:</label>
                    <input 
                      type="url" 
                      required
                      placeholder="https://mybrand.com"
                      value={leadForm.website}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-indigo focus:outline-none"
                    />
                  </div>
                  {/* Priority Channel */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-slate-400 block font-bold">Target AI Search Channel Focus:</label>
                    <select 
                      value={leadForm.priorityChannel}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, priorityChannel: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:border-brand-indigo focus:outline-none h-11"
                    >
                      <option value="chatgpt-perplexity">ChatGPT Search & Perplexity (Highly Conversational)</option>
                      <option value="gemini-sg">Google Gemini Grounding & SGE (Large-Scale)</option>
                      <option value="all-channels">All Channels Integration (Enterprise package)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow duration-150 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Submit Secure Audit Parameters Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Secure Trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-850 text-slate-500 font-mono text-[10px] uppercase text-left">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-teal" /> 
                    <span>Zero Spam Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-brand-orange" />
                    <span>Priority Response Under 4 Hours</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-brand-purple" />
                    <span>Real-Time Processing</span>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION (OPTIMIZED FOR AI CRAWLERS) */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] text-left scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              GROUNDED ACCURACY FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              GEO & AEO Systems Explained
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Deep-dives into technical answers about crawl weights, schema graphs, citation vectors, and how AI engines source content.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto select-none">
            {[
              {
                q: "What is GEO (Generative Engine Optimization) vs traditional SEO?",
                a: "Traditional SEO focuses on webpage placements in flat keyword indexes for standard search crawlers (like Googlebot). GEO (Generative Engine Optimization) adapts web content structures for Large Language Models' (LLMs) Retrieval-Augmented Generation (RAG) engines. It ensures your corporate identity, key facts, and statistical metrics are perfectly formatted as semantic vectors so conversational agents check and reference you inside search results citation markers."
              },
              {
                q: "What is an AI Visibility Index and how is it scored?",
                a: "An AI Visibility Index evaluates how frequently and prominently your target domain is cited inside search engine summaries (e.g. ChatGPT, Claude, Gemini, Perplexity). Scoring factors include Entity Relationship weights, density of structural schemas (nested JSON-LD graphs), alignment with direct natural language user queries, and presence of specific, localized statistical statements which AI agents extract to build credibility."
              },
              {
                q: "Why does having specific numbers and metrics increase AI citation likelihood?",
                a: "Conversational engines perform factual weight analysis during context optimization. AI models favor concrete, localized metrics (e.g. 'boosted ROI by 35%') over broad adjectives (e.g. 'significant improvement') because statistical statements act as ground proof references. In corporate text reviews, websites featuring verified metrics receive 3x higher citation index inclusions."
              },
              {
                q: "Is Schema markup mandatory to index in Perplexity and Copilot?",
                a: "Using nested schema relationships is highly critical. Conversational scrapers read index relationships to identify the official owner and core entity representation. Properly deploying schema graphs (like Organization, founder nodes, or medically verified schemas) provides immediate, clear context maps, reducing entity ambiguity and dramatically raising brand recommendations."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#0c121e] border border-slate-850 rounded-2xl overflow-hidden transition-all text-left"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between font-bold text-slate-200 text-sm hover:text-brand-indigo transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-brand-indigo' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-slate-900 text-xs sm:text-sm font-light leading-relaxed text-slate-400 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CORE CONTACT/CONVERSION BLOCK */}
      <section className="bg-[#05070a] border-t border-slate-900/60 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <h2 className="text-3xl md:text-5xl font-black font-display text-white">
            Connect Directly with an Organic AI Strategist
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Stop losing premium conversion leads to competitor citation models. Fast-track your Generative Engine Optimization setup today. Contact us immediately for call & WhatsApp options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" /> Call Direct: {CONTACT_NUMBER}
            </a>
            
            <a 
              href={`${WHATSAPP_LINK}?text=Hi%20AKGLS%20Group,%20I%20am%2520interested%20in%20deploying%2520GEO%20Services%20on%20my%20domain.%20Please%20schedule%20a%20priority%20consultation.`}
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#0c121e] border border-slate-800 text-lime-400 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-lime-400 fill-lime-400/20" /> WhatsApp Direct: {CONTACT_NUMBER}
            </a>
          </div>

          <div className="pt-6">
            <button 
              onClick={onBackToHome}
              className="text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors"
            >
              Return to main homepage
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

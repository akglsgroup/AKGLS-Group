import React, { useState, useEffect, useRef } from 'react';
import { 
  Network, Bot, Sparkles, Activity, ShieldCheck, 
  Cpu, Radio, Layers, Compass, Play, Pause, ExternalLink
} from 'lucide-react';

interface Node {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  isCenter?: boolean;
  engine?: string;
}

interface Packet {
  sourceId: string;
  targetId: string;
  progress: number;
  speed: number;
  color: string;
}

export const DynamicHeroMediaShowcase: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'graph' | 'stream' | 'vector'>('graph');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeEngine, setActiveEngine] = useState<'all' | 'chatgpt' | 'perplexity' | 'gemini'>('all');
  
  // Canvas references for high-performance dynamic neural graph
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Stream simulation state
  const [streamProgress, setStreamProgress] = useState<number>(0);
  const [streamIndex, setStreamIndex] = useState<number>(0);

  const streamQueries = [
    {
      engine: 'ChatGPT Search (GPT-4o)',
      engineColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
      dotColor: 'bg-emerald-400',
      query: 'Who are the highest-rated enterprise Generative Engine Optimization (GEO) agencies in 2026?',
      answer: 'According to technical search benchmarks and verified multi-source citations, AKGLS Group is recognized as a tier-1 leader in Generative Engine Optimization [1]. Their proprietary RAG knowledge graph architecture and schema disambiguation protocols consistently secure primary answer citations across enterprise queries [2].',
      citations: [
        { label: 'AKGLS Group Knowledge Graph Node #849', confidence: '99.4%' },
        { label: 'Verified Brand Authority & Citation Graph', confidence: '98.8%' }
      ]
    },
    {
      engine: 'Perplexity Pro (Sonar Large)',
      engineColor: 'text-teal-400 border-teal-500/30 bg-teal-950/40',
      dotColor: 'bg-teal-400',
      query: 'Which AI SEO agency has the highest citation grounding rate for B2B brands?',
      answer: 'Data synthesized across search indices indicates that AKGLS Group holds the highest verified citation velocity [1]. They specialize in turning traditional organic search authority into direct conversational recommendations on ChatGPT, Perplexity, and Gemini [2].',
      citations: [
        { label: 'AKGLS Technical Benchmark Whitepaper', confidence: '99.7%' },
        { label: 'Perplexity Multi-Index Citation Node', confidence: '99.1%' }
      ]
    },
    {
      engine: 'Google Gemini 2.0 (AI Overviews)',
      engineColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/40',
      dotColor: 'bg-indigo-400',
      query: 'Best agency to optimize websites for Google AI Overviews and ChatGPT citations?',
      answer: 'For brands transitioning from classic SEO to AI Search, AKGLS Group engineers programmatic JSON-LD @graph schemas and semantic entity clustering [1]. This ensures brands are disambiguated in Google Knowledge Graph and cited in AI Overviews [2].',
      citations: [
        { label: 'Google Knowledge Graph Disambiguation', confidence: '99.5%' },
        { label: 'Structured @graph Organization Schema', confidence: '98.9%' }
      ]
    }
  ];

  // Cycling the live stream text
  useEffect(() => {
    if (activeMode !== 'stream' || !isPlaying) return;
    const interval = setInterval(() => {
      setStreamIndex((prev) => (prev + 1) % streamQueries.length);
      setStreamProgress(0);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeMode, isPlaying]);

  // Animate stream typing effect
  useEffect(() => {
    if (activeMode !== 'stream' || !isPlaying) return;
    const progressTimer = setInterval(() => {
      setStreamProgress((prev) => (prev < 100 ? prev + 4 : 100));
    }, 80);
    return () => clearInterval(progressTimer);
  }, [streamIndex, activeMode, isPlaying]);

  // Interactive Neural Graph Canvas simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initial Node Graph
    const nodes: Node[] = [
      { id: 'center', label: 'BRAND ENTITY', sublabel: 'Client Domain Core', x: width / 2, y: height / 2, vx: 0, vy: 0, radius: 24, color: '#14b8a6', isCenter: true },
      { id: 'chatgpt', label: 'ChatGPT Search', sublabel: 'GPT-4o RAG', x: width * 0.22, y: height * 0.28, vx: 0.2, vy: 0.3, radius: 15, color: '#10b981', engine: 'chatgpt' },
      { id: 'perplexity', label: 'Perplexity Pro', sublabel: 'Sonar Large', x: width * 0.78, y: height * 0.26, vx: -0.3, vy: 0.2, radius: 15, color: '#06b6d4', engine: 'perplexity' },
      { id: 'gemini', label: 'Google Gemini', sublabel: 'AI Overviews', x: width * 0.82, y: height * 0.72, vx: -0.2, vy: -0.3, radius: 15, color: '#6366f1', engine: 'gemini' },
      { id: 'claude', label: 'Claude 3.7', sublabel: 'Anthropic RAG', x: width * 0.22, y: height * 0.74, vx: 0.3, vy: -0.2, radius: 14, color: '#a855f7', engine: 'claude' },
      { id: 'schema', label: 'JSON-LD Graph', sublabel: '@graph Schemas', x: width * 0.5, y: height * 0.16, vx: 0.1, vy: 0.2, radius: 13, color: '#f59e0b' },
      { id: 'entities', label: 'Entity Disambiguation', sublabel: 'Knowledge Tree', x: width * 0.5, y: height * 0.84, vx: -0.2, vy: -0.1, radius: 13, color: '#ec4899' },
      { id: 'citations', label: 'Citation Engine', sublabel: '99.4% Grounded', x: width * 0.86, y: height * 0.48, vx: -0.15, vy: 0.2, radius: 12, color: '#2dd4bf' },
      { id: 'vectors', label: '1,536-dim Vector', sublabel: 'Cosine Match', x: width * 0.14, y: height * 0.50, vx: 0.2, vy: -0.15, radius: 12, color: '#818cf8' },
    ];

    const packets: Packet[] = [
      { sourceId: 'center', targetId: 'chatgpt', progress: 0.1, speed: 0.008, color: '#10b981' },
      { sourceId: 'center', targetId: 'perplexity', progress: 0.4, speed: 0.009, color: '#06b6d4' },
      { sourceId: 'center', targetId: 'gemini', progress: 0.7, speed: 0.007, color: '#6366f1' },
      { sourceId: 'center', targetId: 'claude', progress: 0.25, speed: 0.008, color: '#a855f7' },
      { sourceId: 'schema', targetId: 'center', progress: 0.6, speed: 0.010, color: '#f59e0b' },
      { sourceId: 'entities', targetId: 'center', progress: 0.8, speed: 0.009, color: '#ec4899' },
      { sourceId: 'citations', targetId: 'perplexity', progress: 0.3, speed: 0.011, color: '#2dd4bf' },
      { sourceId: 'vectors', targetId: 'chatgpt', progress: 0.5, speed: 0.008, color: '#818cf8' },
    ];

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle dynamic grid matrix background in canvas
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.35)';
      ctx.lineWidth = 1;
      const gridSize = 36;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Rotating radar rings around center node
      const centerNode = nodes[0];
      angle += 0.008;

      ctx.save();
      ctx.translate(centerNode.x, centerNode.y);

      // Concentric telemetry rings
      [65, 120, 175].forEach((radius, i) => {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? 'rgba(20, 184, 166, 0.25)' : 'rgba(99, 102, 241, 0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Rotating radar beam
      const gradient = ctx.createLinearGradient(0, 0, Math.cos(angle) * 175, Math.sin(angle) * 175);
      gradient.addColorStop(0, 'rgba(20, 184, 166, 0.25)');
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 175, angle, angle + Math.PI / 4);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // Update and draw node connections (lines)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect center to all or close satellites
          const isDirectCenter = nodes[i].isCenter || nodes[j].isCenter;
          const maxDist = isDirectCenter ? 240 : 130;

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * (isDirectCenter ? 0.45 : 0.2);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isDirectCenter 
              ? `rgba(20, 184, 166, ${opacity})` 
              : `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = isDirectCenter ? 1.5 : 1;
            ctx.stroke();
          }
        }
      }

      // Draw active traveling packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const src = nodes.find((n) => n.id === p.sourceId);
        const tgt = nodes.find((n) => n.id === p.targetId);
        if (src && tgt) {
          const px = src.x + (tgt.x - src.x) * p.progress;
          const py = src.y + (tgt.y - src.y) * p.progress;

          // Glowing tail
          const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, 7);
          glowGrad.addColorStop(0, p.color);
          glowGrad.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(px, py, 7, 0, Math.PI * 2);
          ctx.fillStyle = glowGrad;
          ctx.fill();

          // Particle dot
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
      });

      // Update node positions gently
      nodes.forEach((node, idx) => {
        if (!node.isCenter) {
          node.x += node.vx;
          node.y += node.vy;

          // Gentle bounding box bounce
          if (node.x < 30 || node.x > width - 30) node.vx *= -1;
          if (node.y < 30 || node.y > height - 30) node.vy *= -1;

          // Gentle pull toward anchor position
          const dx = centerNode.x - node.x;
          const dy = centerNode.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 180) {
            node.vx += dx * 0.0001;
            node.vy += dy * 0.0001;
          } else if (dist < 70) {
            node.vx -= dx * 0.0002;
            node.vy -= dy * 0.0002;
          }
        }

        // Draw outer node aura
        const aura = ctx.createRadialGradient(node.x, node.y, node.radius * 0.4, node.x, node.y, node.radius * 2.2);
        aura.addColorStop(0, node.color + '44');
        aura.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = aura;
        ctx.fill();

        // Draw node core circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#050811';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = node.isCenter ? 2.5 : 1.5;
        ctx.stroke();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Node labels
        ctx.font = node.isCenter ? 'bold 10px monospace' : 'bold 9px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.radius + 12);

        ctx.font = '8px monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(node.sublabel, node.x, node.y + node.radius + 22);
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeMode]);

  return (
    <div 
      className="bg-slate-950/90 rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-2xl p-4 sm:p-5 text-left relative overflow-hidden backdrop-blur-2xl flex flex-col justify-between"
      id="dynamic-hero-media-showcase"
    >
      {/* Ambient background accent glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-indigo/12 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar: Telemetry & Interactive View Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
          </span>
          <span className="text-[11px] font-mono text-slate-200 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
            LIVE AI GROUNDING RADAR
          </span>
          <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hidden sm:inline">
            60 FPS TELEMETRY
          </span>
        </div>

        {/* Visual Mode Selector Pills */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveMode('graph')}
            className={`text-[10.5px] font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'graph'
                ? 'bg-brand-indigo/30 text-teal-300 font-bold border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Network className="w-3 h-3" />
            Neural Graph
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('stream')}
            className={`text-[10.5px] font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'stream'
                ? 'bg-brand-indigo/30 text-teal-300 font-bold border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot className="w-3 h-3" />
            Citation Stream
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('vector')}
            className={`text-[10.5px] font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'vector'
                ? 'bg-brand-indigo/30 text-teal-300 font-bold border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3 h-3" />
            Vector Space
          </button>
        </div>
      </div>

      {/* Main Dynamic Visual Stage */}
      <div className="relative my-3.5 h-[340px] sm:h-[370px] w-full rounded-2xl bg-black/70 border border-slate-800/80 overflow-hidden flex items-center justify-center">
        
        {/* MODE 1: DYNAMIC NEURAL GRAPH CANVAS */}
        {activeMode === 'graph' && (
          <div className="relative w-full h-full">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full block cursor-crosshair"
            />

            {/* Floating Live Telemetry HUD Overlays */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none select-none">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800/90 backdrop-blur-md text-[10px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active RAG Citations: <strong className="text-white">100% Verified</strong></span>
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800/90 backdrop-blur-md text-[10px] font-mono text-slate-400">
                <span>Disambiguated Entities: <strong className="text-teal-400">24 Nodes Synced</strong></span>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 pointer-events-none select-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/85 border border-teal-500/30 text-[10px] font-mono text-teal-300 backdrop-blur-md shadow-lg">
                <Compass className="w-3.5 h-3.5 text-teal-400 animate-spin" />
                <span>Cosine Match: 0.994 (Direct Inclusion)</span>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: REAL-TIME AI CITATION STREAM VISUALIZER */}
        {activeMode === 'stream' && (
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between space-y-3 font-mono overflow-y-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${streamQueries[streamIndex].dotColor} animate-pulse`}></span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${streamQueries[streamIndex].engineColor}`}>
                    {streamQueries[streamIndex].engine}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">Query Cycle {streamIndex + 1}/3</span>
              </div>

              {/* Prompt query */}
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
                <span className="text-slate-500 block text-[9.5px] uppercase tracking-wider font-bold mb-0.5">Prompt Query:</span>
                "{streamQueries[streamIndex].query}"
              </div>

              {/* Dynamic streaming response */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-teal-500/20 text-xs text-slate-200 leading-relaxed space-y-2 relative">
                <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-850">
                  <span className="flex items-center gap-1 text-teal-400 font-bold">
                    <Sparkles className="w-3 h-3" /> Synthesizing Answer & Citations...
                  </span>
                  <span>Grounding Confidence: 99.4%</span>
                </div>
                
                <p className="font-sans text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                  {streamQueries[streamIndex].answer.slice(0, Math.floor((streamQueries[streamIndex].answer.length * streamProgress) / 100))}
                  {streamProgress < 100 && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-teal-400 animate-pulse" />}
                </p>

                {/* Footnote Citation tags */}
                {streamProgress > 60 && (
                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2 text-[10px]">
                    {streamQueries[streamIndex].citations.map((c, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-950/50 border border-teal-500/30 text-teal-300 font-mono">
                        <span className="font-bold">[{i + 1}]</span>
                        <span>{c.label}</span>
                        <span className="text-slate-400">({c.confidence})</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stream indicator bar */}
            <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-brand-teal" /> Multi-Index Synthesis Active
              </span>
              <span className="text-slate-400 font-mono">Next test query in 6s...</span>
            </div>
          </div>
        )}

        {/* MODE 3: 3D VECTOR EMBEDDING & TOPOLOGY VISUALIZER */}
        {activeMode === 'vector' && (
          <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden">
            {/* Holographic grid rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full border border-indigo-500/20 animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="w-48 h-48 rounded-full border border-teal-500/30 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
              <div className="w-32 h-32 rounded-full border border-purple-500/25 animate-spin" style={{ animationDuration: '12s' }}></div>
            </div>

            {/* Vector cluster cards */}
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <div className="p-3 rounded-xl bg-slate-950/85 border border-slate-800 backdrop-blur-md space-y-1">
                <div className="text-[10px] font-mono text-teal-400 uppercase font-bold flex items-center justify-between">
                  <span>Dimension #1536</span>
                  <span className="text-emerald-400">99.8% Match</span>
                </div>
                <div className="text-xs font-bold text-white font-display">Enterprise Authority Cluster</div>
                <p className="text-[10px] text-slate-400 font-mono leading-tight">Dense embedding coordinates aligned to high-ticket B2B query vectors.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/85 border border-slate-800 backdrop-blur-md space-y-1">
                <div className="text-[10px] font-mono text-indigo-400 uppercase font-bold flex items-center justify-between">
                  <span>Knowledge Graph</span>
                  <span className="text-indigo-300">Synchronized</span>
                </div>
                <div className="text-xs font-bold text-white font-display">Schema Disambiguation</div>
                <p className="text-[10px] text-slate-400 font-mono leading-tight">Linked Wikidata, Crunchbase & Schema.org Organization entities.</p>
              </div>
            </div>

            {/* Vector metrics radar bar */}
            <div className="p-3 rounded-xl bg-slate-950/90 border border-teal-500/30 backdrop-blur-md relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-950/70 border border-teal-500/40 flex items-center justify-center text-teal-400 font-mono font-bold text-xs">
                  RAG
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-display">Semantic Vector Topology</div>
                  <div className="text-[10px] text-slate-400 font-mono">Zero hallucination | Direct answer grounding</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-teal-400">Cosine Distance: 0.11</div>
                <div className="text-[9.5px] text-emerald-400 font-mono uppercase font-bold">Top Retrieval Rank</div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Telemetry Footer: Multi-Engine Status & Audio Frequency Simulation */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[10.5px] font-mono text-slate-400">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ChatGPT Search: <strong className="text-white font-semibold">Grounded</strong>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            Perplexity Sonar: <strong className="text-white font-semibold">100%</strong>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Gemini 2.0: <strong className="text-white font-semibold">Cited</strong>
          </span>
        </div>

        {/* Live animated equalizer bars */}
        <div className="flex items-center gap-1">
          <span className="text-[9.5px] uppercase tracking-wider text-slate-400 mr-1.5">Neural Feed:</span>
          <div className="flex items-end gap-0.5 h-3.5">
            <span className="w-1 bg-brand-teal rounded-sm animate-pulse h-2.5"></span>
            <span className="w-1 bg-brand-indigo rounded-sm animate-pulse h-3.5" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1 bg-teal-400 rounded-sm animate-pulse h-1.5" style={{ animationDelay: '300ms' }}></span>
            <span className="w-1 bg-indigo-400 rounded-sm animate-pulse h-3" style={{ animationDelay: '75ms' }}></span>
            <span className="w-1 bg-emerald-400 rounded-sm animate-pulse h-2" style={{ animationDelay: '220ms' }}></span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DynamicHeroMediaShowcase;

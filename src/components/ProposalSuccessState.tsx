import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Check, CheckCircle2, Copy, Sparkles, ShieldCheck, 
  ExternalLink, Clock, FileText, ArrowRight, RotateCcw,
  Zap, Award, MessageCircle
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface ProposalSuccessStateProps {
  contactName: string;
  companyName: string;
  companyUrl: string;
  budget?: string;
  channels?: string[];
  notes?: string;
  onReset: () => void;
  variant?: 'light' | 'dark';
}

export default function ProposalSuccessState({
  contactName,
  companyName,
  companyUrl,
  budget,
  channels = [],
  onReset,
  variant = 'light'
}: ProposalSuccessStateProps) {
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusStep, setStatusStep] = useState(0);

  // Generate a consistent pseudo-random reference code
  const [refCode] = useState(() => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    return `AKG-PROP-${randomDigits}`;
  });

  // Simulated live diagnostic ingestion micro-interaction
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(35);
      setStatusStep(1);
    }, 400);

    const timer2 = setTimeout(() => {
      setProgress(75);
      setStatusStep(2);
    }, 1100);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusStep(3);
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(refCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const statusMessages = [
    "Ingesting Domain Parameters & Sitemaps...",
    "Scanning 30-Keyword Topical Gaps & Entity Schemas...",
    "Assigning Senior Growth Architect & Data Room...",
    "Strategic Proposal Queued in Priority Alpha Queue"
  ];

  // Pre-calculated confetti particles for the celebratory explosion
  const confettiParticles = Array.from({ length: 30 }).map((_, i) => {
    const angle = (i / 30) * 360;
    const distance = 90 + (i % 5) * 35;
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * distance;
    const y = Math.sin(rad) * distance;
    const colors = ['#10b981', '#6366f1', '#14b8a6', '#f59e0b', '#38bdf8', '#a855f7', '#ec4899'];
    const color = colors[i % colors.length];
    const size = 6 + (i % 4) * 2;
    const delay = (i % 6) * 0.04;
    return { id: i, x, y, color, size, delay, isStar: i % 3 === 0 };
  });

  const isDark = variant === 'dark';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 text-center transition-all ${
        isDark 
          ? 'bg-[#090e1f] border border-emerald-500/40 shadow-2xl shadow-emerald-500/10 text-white' 
          : 'bg-white border border-emerald-200/90 shadow-2xl shadow-emerald-500/10 text-slate-800'
      }`}
    >
      {/* CELEBRATORY CONFETTI EXPLOSION PARTICLES */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {confettiParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
            animate={{ 
              x: p.x, 
              y: p.y, 
              scale: [0, 1.2, 0.9, 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, 180 + p.id * 30]
            }}
            transition={{ 
              duration: 1.4, 
              delay: p.delay,
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              backgroundColor: p.isStar ? 'transparent' : p.color,
              borderRadius: p.isStar ? '0%' : '50%',
              boxShadow: `0 0 8px ${p.color}`
            }}
          >
            {p.isStar && (
              <Sparkles 
                style={{ color: p.color, width: p.size + 4, height: p.size + 4 }} 
                className="animate-spin"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* AMBIENT RADIAL GLOW */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl -z-10 ${
        isDark ? 'bg-emerald-500/15' : 'bg-emerald-400/20'
      }`} />

      {/* REWARD BADGE KICKER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide mb-5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-500 animate-pulse" />
        <span>PROPOSAL SECURED // PRIORITY DISPATCH</span>
      </motion.div>

      {/* EXPANDING CHECKMARK HERO ICON WITH DUAL SHOCKWAVE PULSE */}
      <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        {/* Shockwave ring 1 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: [1, 1.8, 2.2], opacity: [0.8, 0.3, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-emerald-500/30"
        />
        {/* Shockwave ring 2 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: [1, 1.5, 1.9], opacity: [0.8, 0.4, 0] }}
          transition={{ duration: 1.6, delay: 0.3, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-teal-400/25"
        />

        {/* Central spring badge */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 15,
            delay: 0.1 
          }}
          className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 ring-4 ring-emerald-500/20"
        >
          {/* Animated SVG drawing checkmark */}
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              d="M20 6L9 17L4 12"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
      </div>

      {/* CELEBRATORY HEADLINE & PERSONALIZED COPY */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="space-y-2 max-w-xl mx-auto"
      >
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-display text-slate-900 dark:text-white">
          Strategic Proposal Roadmap Secured!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Thank you, <strong className="text-slate-900 dark:text-white font-bold">{contactName}</strong>. Our senior organic search and generative engine architects have queued the diagnostic profile for <strong className="text-brand-indigo font-bold">{companyUrl || companyName}</strong>.
        </p>
      </motion.div>

      {/* LIVE INGESTION PROGRESS TICKER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className={`mt-6 p-4 rounded-2xl border text-left max-w-xl mx-auto ${
          isDark 
            ? 'bg-slate-950/70 border-slate-800' 
            : 'bg-slate-50 border-slate-200/90'
        }`}
      >
        <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-2">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>ANALYSIS PIPELINE INITIALIZATION</span>
          </div>
          <span className="text-slate-500 font-mono">{progress}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Dynamic status ticker */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 truncate">
            {progress === 100 ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping shrink-0" />
            )}
            <span className="truncate">{statusMessages[statusStep]}</span>
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold shrink-0 ml-2">
            Turnaround: &lt;24h
          </span>
        </div>
      </motion.div>

      {/* REFERENCE CODE CHIP WITH 1-CLICK COPY MICRO-INTERACTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-3"
      >
        <div className={`px-4 py-2 rounded-xl border flex items-center gap-2.5 text-xs font-mono font-bold shadow-sm ${
          isDark 
            ? 'bg-slate-900 border-slate-700/80 text-slate-200' 
            : 'bg-white border-slate-200 text-slate-700'
        }`}>
          <span className="text-slate-400 text-[10px] uppercase tracking-wider">Proposal Tracking Ref:</span>
          <span className="text-brand-indigo font-mono font-black text-sm">{refCode}</span>
          <button
            onClick={handleCopyCode}
            type="button"
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-brand-indigo transition-colors cursor-pointer relative"
            title="Copy Reference ID"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[9px] font-mono shadow-lg whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
        </div>

        {budget && (
          <div className={`px-3 py-2 rounded-xl border text-xs font-mono ${
            isDark ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}>
            Budget Bracket: <span className="font-bold text-emerald-600 dark:text-emerald-400">{budget}</span>
          </div>
        )}
      </motion.div>

      {/* CHANNELS VERIFIED PILLS */}
      {channels.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-1.5"
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mr-1">Queued Modules:</span>
          {channels.map((chan, idx) => (
            <span 
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-indigo-600 dark:text-indigo-400 font-semibold"
            >
              {chan}
            </span>
          ))}
        </motion.div>
      )}

      {/* ACTION CTAS: EXPEDITE VIA WHATSAPP & RESET BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-3.5"
      >
        <a
          href={`https://wa.me/918318114492?text=${encodeURIComponent(
            `Hi AKGLS Group, I just submitted proposal request ${refCode} for ${companyName || 'our brand'} (${companyUrl || ''}). Can we fast-track the 30-keyword diagnostics?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all cursor-pointer"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>Fast-Track On WhatsApp</span>
        </a>

        <button 
          onClick={onReset}
          type="button"
          className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all flex items-center gap-2 cursor-pointer ${
            isDark 
              ? 'bg-slate-900 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white' 
              : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Submit Another Strategic Audit</span>
        </button>
      </motion.div>

      {/* FOOTER GUARANTEE NOTE */}
      <div className="mt-4 text-[10px] text-slate-400 dark:text-slate-500 font-mono">
        All client parameters protected under strict enterprise NDA · Zero vendor spam
      </div>
    </motion.div>
  );
}

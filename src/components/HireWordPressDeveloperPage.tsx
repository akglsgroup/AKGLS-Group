import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, ArrowRight, CheckCircle2, 
  Users, Briefcase, Search, Code, Layers, Activity, Cpu, 
  Globe, Terminal, ChevronDown, ChevronRight, Check, 
  Zap, ShieldCheck, BarChart3, ArrowUpRight, HelpCircle, 
  Target, Info, ArrowRightLeft, Database, Award, 
  MessageSquare, Smartphone, TrendingUp, Coins, Copy, CheckSquare,
  Network, Link2, Landmark, Share2, Mail, CheckCircle, Flame, LineChart, Play, AwardIcon,
  Laptop, ShoppingCart, Gauge, RefreshCw, Key, ShieldAlert
} from 'lucide-react';

interface HireWordPressDeveloperPageProps {
  onBackToHome: () => void;
  openProposalForm: () => void;
}

const tools = [
  { name: "WordPress Core", role: "Custom Gutenberg blocks, sitemap structures & multisite architectures" },
  { name: "WooCommerce", role: "High-performance cart systems, personalized pricing rules & secure gateways" },
  { name: "Elementor Pro", role: "Aesthetic, conversion-focused visual layout modules & pixel-perfect designs" },
  { name: "WP Rocket / LSCache", role: "Caching engine, script deferred loading & core performance optimization" },
  { name: "Rank Math / Yoast", role: "Advanced structural schema markup, automated sitemaps & keyword tracking" },
  { name: "Cloudflare CDN", role: "Global DNS distribution, edge security rules & static asset caching" },
  { name: "GitHub / WP-CLI", role: "Version control, automated script deployments & terminal command operations" },
  { name: "ChatGPT & Gemini API", role: "AI chatbot widgets, auto-generated meta tagging & semantic categorization" }
];

const packages = [
  {
    name: "Starter WordPress Support",
    desc: "Perfect for local business sites, simple landing pages, or theme styling adjustments.",
    price: "$1,450",
    period: "month",
    isPopular: false,
    features: [
      "Dedicated part-time developer allocation",
      "Elementor & default block customizations",
      "Basic WP Rocket performance setup",
      "Automated weekly database cloud backups",
      "Crucial security plugins & firewall tracking",
      "Monthly activity & maintenance log reviews"
    ]
  },
  {
    name: "Growth WordPress Developer",
    desc: "Designed for scaling businesses, interactive WooCommerce stores, or custom template projects.",
    price: "$2,950",
    period: "month",
    isPopular: true,
    features: [
      "Dedicated senior WordPress & WooCommerce engineer",
      "Custom theme/child-theme & block development",
      "Core Web Vitals acceleration (Target 90%+ Mobile)",
      "Smart API, CRM & marketing automation hubs",
      "Deep SEO schema & keyword alignment checks",
      "Real-time malware scanning & uptime monitors",
      "Weekly progress updates & sandbox reviews"
    ]
  },
  {
    name: "Enterprise WordPress Team",
    desc: "A powerful full-stack team for high-traffic sites, custom Plugins, and robust portals.",
    price: "$5,800",
    period: "month",
    isPopular: false,
    features: [
      "Full-Time Lead Engineer + Dedicated UI Designer",
      "Bespoke plugin development & third-party APIs",
      "WordPress Multisite & Headless architecture",
      "Advanced WooCommerce checkout micro-optimizations",
      "Continuous Core Web Vitals maintenance & CDN logic",
      "Guaranteed premium support SLAs (Instant alerts)",
      "Daily staging environment updates"
    ]
  }
];

const faqs = [
  {
    q: "Why should I hire a dedicated WordPress developer?",
    a: "While default page builders provide template flexibility, securing high speed, semantic SEO structural code, zero database bloat, and tailored custom plugins requires an expert. A dedicated developer keeps your sitemaps secure, loads assets conditionally, and ensures your conversion layouts look perfect across every screen size."
  },
  {
    q: "Can you build WooCommerce websites?",
    a: "Yes. Our developers are highly trained WooCommerce specialists who build scalable, fast ecommerce shops. We optimize checkouts, build bulk discount hooks, integrate complex shipping APIs, align safe payment bridges, and customize product templates to scale direct revenue."
  },
  {
    q: "Do you optimize WordPress websites for SEO?",
    a: "Absolutely. We align technical SEO principles with every single build. This includes configuring proper heading tag hierarchy, setting clean JSON-LD local or custom schemas, cleaning database queries, eliminating duplicate metadata lines, and using Rank Math / Yoast configurations correctly."
  },
  {
    q: "Can you improve website speed and Core Web Vitals?",
    a: "Yes, this is one of our primary core strengths. We diagnose slow loading points, compress static image files to modern web formats, clean CSS/JS rendering blocks, implement advanced caching rules, clean database revisions, and configure global CDNs to push PageSpeed indicators above 90+."
  },
  {
    q: "Do you offer Elementor development?",
    a: "Yes, we specialize in high-impact Elementor Pro development. We build custom Elementor widgets, maintain crisp absolute layout standards, keep elements light to avoid builder bloat, and ensure total responsiveness across mobile, tablet, and ultra-wide settings."
  },
  {
    q: "Can you integrate AI tools in WordPress?",
    a: "Yes. We can integrate advanced AI interfaces into your sitemap. This includes embedding smart customer support chatbots driven by ChatGPT or Gemini, setting up automated copywriting prompts, and deploying predictive smart recommendation engines directly into WooCommerce pages."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, all of our packages include active monthly support, plugin safety checks, backup audits, rapid theme tweaks, malware reviews, and immediate assistance for critical bugs."
  }
];

const industries = [
  { name: "Ecommerce & Retail", focus: "WooCommerce checkout optimization, synchronized product catalogs, and cart retrieval hooks." },
  { name: "SaaS & Tech Companies", focus: "Lightweight feature grids, interactive trial signups, and scalable knowledge bases." },
  { name: "Healthcare & Clinics", focus: "Safe intake booking systems, client-privacy disclosures, and local clinical citation architectures." },
  { name: "Finance & Wealth", focus: "Encryption security, quick mortgage/calculator forms, and high-trust landing interfaces." },
  { name: "Education & Academies", focus: "Custom membership portals, educational paths (LMS), and direct subscription grids." },
  { name: "Real Estate Brokers", focus: "Dynamic active listing catalogs, geographical search tools, and agent connection cards." },
  { name: "B2B Manufacturing", focus: "Direct quote requests (RFQ) setups, detailed PDF specifications indices, and custom product catalogs." },
  { name: "IoT & Telecom", focus: "Explaining difficult applications, rich illustration grids, and technical documentation portals." },
  { name: "Local Businesses", focus: "Dynamic local landing pages, customized maps integrations, and high-traction booking triggers." },
  { name: "Startups & Disruptors", focus: "Pixel-perfect visual pitch sitemaps, agile layout changes, and modern conversion designs." }
];

export default function HireWordPressDeveloperPage({ onBackToHome, openProposalForm }: HireWordPressDeveloperPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hire WordPress Developer | Dedicated WordPress Development Services | AKGLS Group";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : "";
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Hire expert WordPress developers from AKGLS Group for custom WordPress development, WooCommerce, Elementor, speed optimization, SEO-friendly websites & AI-ready WordPress solutions.');

    return () => {
      document.title = originalTitle;
      if (metaDesc) {
        if (originalDesc) {
          metaDesc.setAttribute('content', originalDesc);
        } else {
          metaDesc.remove();
        }
      }
    };
  }, []);

  // Sticky CTA visible on scroll
  const [showStickyCta, setShowStickyCta] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive Tools state
  const [calcPages, setCalcPages] = useState<number>(5);
  const [calcEcommerce, setCalcEcommerce] = useState<boolean>(false);
  const [calcSpeedOpt, setCalcSpeedOpt] = useState<boolean>(true);
  const [calcAiChat, setCalcAiChat] = useState<boolean>(false);

  // Interactive Speed Test simulator State
  const [speedUrl, setSpeedUrl] = useState('');
  const [speedRunning, setSpeedRunning] = useState(false);
  const [speedProgress, setSpeedProgress] = useState(0);
  const [speedResult, setSpeedResult] = useState<any | null>(null);

  // Live Audit Form state
  const [auditName, setAuditName] = useState('');
  const [auditUrl, setAuditUrl] = useState('');
  const [auditBusiness, setAuditBusiness] = useState('Ecommerce');
  const [auditGoal, setAuditGoal] = useState('Boost Conversions & Lead Rate');
  const [auditEmail, setAuditEmail] = useState('');
  const [auditPhone, setAuditPhone] = useState('');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);
  const [auditStepLog, setAuditStepLog] = useState<string[]>([]);

  // Calculations for Website Cost Calculator
  const baseCost = 600;
  const pricePerPage = 120;
  const pagesCost = calcPages * pricePerPage;
  const ecommerceAddon = calcEcommerce ? 1200 : 0;
  const speedAddon = calcSpeedOpt ? 450 : 0;
  const aiAddon = calcAiChat ? 650 : 0;
  
  const estimatedMinCost = baseCost + pagesCost + ecommerceAddon + speedAddon + aiAddon;
  const estimatedMaxCost = Math.round(estimatedMinCost * 1.35);
  const estimatedTimelineDays = Math.max(7, Math.round((calcPages * 1.5) + (calcEcommerce ? 10 : 0) + (calcAiChat ? 4 : 2)));

  // Speed Test Simulator Runner
  const runSpeedDiagnostic = (e: FormEvent) => {
    e.preventDefault();
    if (!speedUrl) return;

    setSpeedRunning(true);
    setSpeedProgress(10);
    setSpeedResult(null);

    const intv = setInterval(() => {
      setSpeedProgress(prev => {
        if (prev >= 100) {
          clearInterval(intv);
          setSpeedRunning(false);
          const originalScore = Math.floor(Math.random() * 20) + 42; // Slow: 42 to 62
          const targetOptScore = Math.floor(Math.random() * 8) + 92; // Optimized: 92 to 99
          setSpeedResult({
            scoreBefore: originalScore,
            scoreAfter: targetOptScore,
            totalBlockingTime: '1,450ms',
            blockingOptimized: '120ms',
            unusedCssCount: '480KB identified in heavy WP theme patterns',
            imageOptimizedSavings: 'Savings from next-gen WebP formatting: ~1.2MB'
          });
          return 100;
        }
        return prev + 15;
      });
    }, 250);
  };

  // Live Audit Form submit handler
  const handleLiveAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;

    setAuditRunning(true);
    setAuditResult(null);
    setAuditStepLog([]);

    const steps = [
      `Querying target DNS sitemap configurations for ${auditUrl}...`,
      'Analyzing CSS render pathing & theme bloat anomalies...',
      'Mapping database index load values & WooCommerce caching queries...',
      'Scanning meta tags and technical RankMath structures for compliance...',
      'Evaluating mobile responsive breakpoint assets and image viewport sizes...',
      'Assessing conversational AI readiness factors & automated pipeline integrations...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAuditStepLog(prev => [...prev, `[WP-DIAGNOSTIC] ${steps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        const randomPerformScore = Math.floor(Math.random() * 25) + 40; // 40-65 index score
        setAuditResult({
          score: randomPerformScore,
          criticalBottlenecks: '3 major leaks (uncompressed layout images, redundant active third-party plugins, and static forms without automated validation checks).',
          seoGap: 'Missing schema mappings on main pages; no structured internal link clustering setup.',
          aiOpportunity: 'Highly compatible for direct ChatGPT-driven booking bots and dynamic local sitemaps.',
          hiringRecommendation: 'Growth WordPress Developer (Dedicated Monthly Support model, focusing on theme cleaning, custom schemas and responsive PageSpeed acceleration).'
        });
        setAuditRunning(false);
      }
    }, 850);
  };

  const copySchemaMarkup = (schemaType: string) => {
    const rawCode = schemaType === 'service' ? `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dedicated WordPress Developer Placement",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Worldwide",
  "description": "Hire expert WordPress developers from AKGLS Group for custom WordPress development, WooCommerce, Elementor, speed optimization, and AI-ready sitemaps.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "WordPress Developer Hiring Tiers",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Senior WordPress Developer" } }
    ]
  }
}` : `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should I hire a dedicated WordPress developer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An experienced developer ensures lightning speed, clean database queries, airtight web security, high-fidelity SEO structure, and custom visual responsiveness that builders alone cannot provide."
      }
    }
  ]
}`;
    navigator.clipboard.writeText(rawCode);
    alert(`${schemaType.toUpperCase()} Schema copied to clipboard successfully!`);
  };

  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden">
      
      {/* Visual Ambience Blocks */}
      <div className="absolute top-0 left-0 right-0 h-[850px] bg-gradient-to-b from-[#0f1c2b]/35 via-[#02040d]/10 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[55%] left-[-8%] w-[550px] h-[550px] bg-cyan-950/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <nav id="wordpress-nov-nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900/60 relative bg-[#02040d]/90 backdrop-blur z-20">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition font-mono text-xs bg-transparent border-none cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-cyan-400" />
          <span>Return to Corporate Platform</span>
        </button>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918318114492"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex text-xs font-mono text-cyan-440 border border-cyan-950 bg-cyan-950/25 px-3 py-1.5 rounded hover:bg-cyan-950/45 transition-colors text-cyan-400"
          >
            WhatsApp Support: +91 831 811 4492
          </a>
          <button 
            onClick={openProposalForm} 
            className="text-xs bg-gradient-to-r from-cyan-400 to-indigo-550 text-slate-950 font-bold px-4 py-2 rounded shadow-md cursor-pointer hover:scale-[1.01] transition-transform"
          >
            Hire Developer
          </button>
        </div>
      </nav>

      {/* Sticky CTA strip */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-[#04081c]/95 border-t border-cyan-500/30 backdrop-blur pb-4 pt-3.5 z-50 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300">
                  Ready to optimize Web Vitals? Work with top <strong className="text-cyan-400 font-bold">dedicated WordPress experts</strong>.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/918318114492"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-cyan-950/20 text-cyan-400 border border-cyan-900 px-4 py-2 rounded-lg text-xs font-mono hover:bg-cyan-950/50 transition"
                >
                  Direct Chat
                </a>
                <button 
                  onClick={() => {
                    const el = document.getElementById('free-wp-audit-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-cyan-400 to-indigo-100 text-slate-950 font-bold px-5 py-2 rounded-lg text-xs hover:opacity-95 transition"
                >
                  Request Technical Audit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header id="wordpress-developer-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>SEO Friendly & Optimized Builders</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hire WordPress Developers to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Fast, SEO-Friendly & Conversion-Focused</span> Websites
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hire experienced WordPress developers for custom WordPress websites, WooCommerce stores, Elementor development, theme customization, speed optimization, AI-ready websites, and scalable business solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('wp-hiring-packages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg shadow-lg shadow-cyan-950/20 transition flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Hire WordPress Developer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('free-wp-audit-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-slate-700 hover:border-cyan-500 bg-slate-900/45 text-slate-100 hover:text-white font-medium px-6 py-3.5 rounded-lg transition text-sm cursor-pointer"
              >
                Book Free Website Consultation
              </button>
            </div>

            {/* highlights list */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-900">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Custom WordPress Experts</h4>
                  <p className="text-xs text-slate-400">Custom dynamic templates & blocks without redundant bloat.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">WooCommerce Specialists</h4>
                  <p className="text-xs text-slate-400">Fast responsive shopping networks, dynamic checkout APIs.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">SEO-Friendly Development</h4>
                  <p className="text-xs text-slate-400">Structured JSON-LD, validated layout heading configurations.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Airtight & Ultra Fast</h4>
                  <p className="text-xs text-slate-400">PageSpeed optimization targeting 90%+ Google Lighthouse marks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Dashboard Display */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#050b1c] rounded-2xl border border-slate-805/80 p-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-450 animate-pulse bg-emerald-400" />
                  <span className="text-xs text-white font-mono font-bold">Technical Site Performance metrics</span>
                </div>
                <span className="text-[9px] bg-[#02040b] border border-cyan-950 text-cyan-300 font-mono px-2 py-0.5 rounded uppercase">
                  LIGHTHOUSE PROFILE
                </span>
              </div>

              {/* Graphic stats metrics */}
              <div className="space-y-4 pt-4">
                
                <div className="bg-[#02040a] p-4 rounded border border-slate-900/80">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Core Web Vitals Metric</span>
                    <span className="text-xs text-emerald-400 font-mono font-bold">PASSING TARGETS</span>
                  </div>
                  
                  {/* Circular Speed dials representation */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="bg-[#04081c] p-2 rounded border border-slate-900">
                      <span className="text-[9px] text-slate-500 block uppercase font-mono">Mobile Speed</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">98/100</span>
                    </div>
                    <div className="bg-[#04081c] p-2 rounded border border-slate-900">
                      <span className="text-[9px] text-slate-500 block uppercase font-mono">Core SEO score</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">100/100</span>
                    </div>
                    <div className="bg-[#04081c] p-2 rounded border border-slate-900">
                      <span className="text-[9px] text-slate-500 block uppercase font-mono">Security Index</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">A+ Valid</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-900 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Largest Contentful Paint (LCP)</span>
                    <span className="text-emerald-400 font-bold">1.2s</span>
                  </div>
                  <div className="w-full h-1 bg-slate-950 rounded">
                    <div className="h-1 bg-emerald-400 rounded" style={{ width: '92%' }} />
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Cumulative Layout Shift (CLS)</span>
                    <span className="text-emerald-400 font-bold">0.02</span>
                  </div>
                  <div className="w-full h-1 bg-slate-950 rounded">
                    <div className="h-1 bg-emerald-400 rounded" style={{ width: '98%' }} />
                  </div>
                </div>

                <div className="bg-[#091530] border border-cyan-500/20 p-3 rounded text-[10px] text-slate-300 flex items-start gap-2 leading-relaxed">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Our custom theme frameworks bypass dynamic page-builder rendering chains, providing <strong className="text-white">instant server side layout paints</strong> on scale.
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </header>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="border-y border-slate-900/80 bg-[#030612]/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs text-slate-500 tracking-wider uppercase mb-8">
            Trusted WordPress Development Experts for Businesses Worldwide
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-55 grayscale hover:grayscale-0 transition duration-300 mb-12">
            <span className="text-lg font-black tracking-widest text-slate-400">WP_AUTHORITY</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">WOO_STORE_PRO</span>
            <span className="text-lg font-mono tracking-widest text-slate-400">|| ELEMENTOR_PLUS ||</span>
            <span className="text-lg font-black tracking-widest text-slate-400">SPEED_SCALE</span>
            <span className="text-lg font-bold tracking-widest text-slate-400">WEB_SECURITY</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center max-w-5xl mx-auto pt-10 border-t border-slate-900">
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">420+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">WordPress Sites Sourced</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">180+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">WooCommerce Shops Built</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">96.4%</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Avg PageSpeed Score achieved</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-cyan-400 font-mono">25+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">Custom Plugins Crafted</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DOES A WORDPRESS DEVELOPER DO SECTION */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">What Does a Professional WordPress Developer Handle?</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A skilled developer doesn't simply install themes and pre-made plugins. They optimize database query times, clean up CSS/JS render-blocking layers, structure custom blocks for secure content creation, and integrate scalable APIs to connect with external CRMs.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: "Custom Website Development", desc: "Build clean layouts, custom post types, Gutenberg dynamic block definitions and fully customized setups." },
                  { title: "WooCommerce & Ecommerce Stores", desc: "Formulate checkout structures, set cart caching logic, and connect safe payment gateway scripts." },
                  { title: "Core Web Vitals & Speed Optimization", desc: "Address layout shifts (CLS), scale Largest Contentful Paints (LCP), and clear unused styling lines." },
                  { title: "API Integrations & Custom Plugins", desc: "Deploy lightweight plugins that bridge third-party databases, CRMs, or automations flawlessly." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-950 text-cyan-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#030612]/95 border border-slate-800 p-6 rounded-xl space-y-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">Comprehensive Project Scope Targets</span>
                
                <div className="space-y-3">
                  {[
                    { type: "Business Portals", goal: "Light, rapid, dynamic lead collection grids and structured schema integrations." },
                    { type: "WooCommerce Architectures", goal: "High speed checkout paths, optimized static page assets, and dynamic secure rules." },
                    { type: "Elementor Redesigns", goal: "Pixel-perfect visual translations, mobile optimizations, and conditional resource loading." },
                    { type: "Speed Optimization Sprints", goal: "Clean layout-shifting blocks, scale LCP indicators, compress images, config Cloudflare CDN." },
                    { type: "AI Integration Customizations", goal: "API hooks bridging conversational Gemini/ChatGPT bots directly into sitemaps." }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#02040b] p-3 rounded border border-slate-900">
                      <span className="text-[10px] text-cyan-400 font-mono font-bold block">{item.type}</span>
                      <p className="text-xs text-slate-200 mt-0.5">{item.goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY HIRE A WORDPRESS DEVELOPER SECTION */}
      <section className="bg-slate-950/20 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire a Professional WordPress Developer?</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Relying on generic pre-made templates can bloat your database, slow down load times, and impact search engine rankings. We build clean, high-performance websites optimized for search engine crawlers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Build SEO-Friendly Sites", desc: "Engineered from the ground up to rank. Valid structures, clean heading tags, and micro-schema injection." },
              { title: "Optimize Page Load Speed", desc: "Bypass typical builder execution bloat. Achieve rapid loading times, low cumulative layout shifting, and high ranking margins." },
              { title: "Highly Scalable Business Frameworks", desc: "Clean database schemas structured to handle traffic spikes, multiple user registrations, and product catalogs." },
              { title: "Airtight Code & Core Security", desc: "Configure secure firewall protocols, customize directory protections, and clean toxic file dependencies." },
              { title: "Elevate UX & Lead Conversions", desc: "Create smooth transitions, engaging calls-to-action, simple forms, and beautiful, responsive user flows." },
              { title: "Bespoke Custom Functionality", desc: "Implement custom post types (CPTs), advanced custom fields (ACFs), and dynamic hooks tailored for your industry." }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#030612]/60 border border-slate-900 p-6 rounded-xl hover:border-cyan-500/20 transition">
                <CheckCircle className="w-5.5 h-5.5 text-cyan-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE PAGE SPEED TEST SIMULATOR */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Compare Website Performance: Staging speed Diagnostic Tool</h2>
              <p className="text-sm text-slate-350 leading-relaxed">
                Slow theme rendering chains can impact conversions. Test a hypothetical diagnostics check on your layout structures below. Our calculator simulates the loading speed and resource optimization gains our dedicated WordPress developers typically deliver.
              </p>

              <div className="bg-[#030612]/90 border border-slate-900 p-4 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                  <Gauge className="w-4 h-4" />
                  <span>PERFORMANCE OPTIMIZATION FORMULA</span>
                </div>
                <p className="text-xs text-slate-400">
                  By deferring unnecessary scripts, compressing asset payloads, and cleaning out old database records, our experts routinely lower Largest Contentful Paints (LCP) to under 1.5 seconds.
                </p>
              </div>
            </div>

            {/* Right Interactive Speed Simulator Widget */}
            <div className="lg:col-span-6">
              <div className="bg-[#04081c] border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span>WP PageSpeed Optimization Simulator</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Enter your current domain path to simulate structural improvements.
                </p>

                <form onSubmit={runSpeedDiagnostic} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Target Website URL:</label>
                    <div className="flex gap-2">
                      <input 
                        type="url" 
                        required 
                        placeholder="https://yourwebsite.com" 
                        value={speedUrl}
                        onChange={(e) => setSpeedUrl(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                      />
                      <button 
                        type="submit" 
                        disabled={speedRunning}
                        className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 px-4 py-2 rounded text-xs font-bold font-mono hover:opacity-95 transition-all disabled:opacity-50 shrink-0"
                      >
                        {speedRunning ? 'Analyzing...' : 'Run Diagnostics'}
                      </button>
                    </div>
                  </div>

                  {speedRunning && (
                    <div className="space-y-2">
                      <div className="h-1 w-full bg-slate-950 rounded overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300" style={{ width: `${speedProgress}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-400 font-mono text-center">Parsing stylesheets and evaluating database response times ({speedProgress}%)...</p>
                    </div>
                  )}

                  {speedResult && (
                    <div className="bg-[#02040a] border border-slate-900 rounded-xl p-4 space-y-3 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-[#0a0f26] p-3 rounded border border-slate-900">
                          <span className="text-[10px] text-slate-500 font-mono block uppercase">Original Speed Index</span>
                          <span className="text-2xl font-black text-rose-400 font-mono">{speedResult.scoreBefore}/100</span>
                          <span className="text-[9px] text-rose-300 block mt-1 font-mono">SLOW / HIGH FRICTION</span>
                        </div>
                        <div className="bg-[#0a0f26] p-3 rounded border border-slate-900">
                          <span className="text-[10px] text-slate-500 font-mono block uppercase">AKGLS Optimized Score</span>
                          <span className="text-2xl font-black text-emerald-400 font-mono">{speedResult.scoreAfter}/100</span>
                          <span className="text-[9px] text-emerald-300 block mt-1 font-mono">PASSING CORE CRITERIA</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-mono border-t border-slate-900 pt-3 text-slate-400">
                        <div>
                          <span className="text-slate-500">Total Blocking Time (TBT):</span>
                          <p className="text-rose-400 font-bold">{speedResult.totalBlockingTime} &rarr; <span className="text-emerald-400">{speedResult.blockingOptimized}</span></p>
                        </div>
                        <div>
                          <span className="text-slate-500">Unused Stylesheets Cleared:</span>
                          <p className="text-slate-200">{speedResult.unusedCssCount}</p>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-slate-500">Next-Gen Media Enhancements:</span>
                          <p className="text-slate-200">{speedResult.imageOptimizedSavings}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WORDPRESS DEVELOPMENT SERVICES OFFERS */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">WordPress Development Services Offered by Our Experts</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Explore dynamic design operations customized around SEO parameters, WooCommerce setups, secure layouts, and interactive conversion mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "1. Custom WordPress Development", badge: "⭐ Core Service", desc: "Build dynamic custom dynamic sitemaps, Gutenberg blocks, child frames, and secure architectures without unnecessary design templates.", features: ["Gutenberg custom block patterns", "Complex custom post styles (CPTs)", "Performance-validated base themes", "Responsive viewport frameworks"] },
              { title: "2. WooCommerce Development", badge: "Ecommerce Sourcing", desc: "Formulate checkout pipelines, connect advanced billing methods, set bulk discount structures, and manage inventory layers safely.", features: ["Bulk pricing & discount mechanics", "Safe global payment hooks", "Cart retention automation triggers", "Fast retail catalog queries"] },
              { title: "3. Elementor Design Services", badge: "Visual Builders", desc: "Design and customize stunning, lightweight site structures that load rapidly, utilizing Elementor Pro elements effectively.", features: ["Bespoke layout widget integrations", "Crisp spacing configuration", "Mobile-first template alignments", "Conversion-oriented layout models"] },
              { title: "4. AI-Ready WordPress Integrations", badge: "⭐ Trending Service", desc: "Embed conversational AI help agents directly within sitemaps, automate customer ticket flows, and customize recommendation engines.", features: ["Bespoke chatbot APIs", "Smarter automated copywriting hooks", "Interactive user behavior paths", "Automated pipeline logic"] },
              { title: "5. WordPress Speed Acceleration", badge: "Core Web Vitals", desc: "Eliminate page bottlenecks, defer unused script codes, resize static assets, clean database index lines, and configure global CDNs.", features: ["Resolve cumulative layout shifts", "Image compression to WebP", "Deferred JavaScript assets", "Clean cached databases"] },
              { title: "6. SEO Optimization Audits", badge: "Technical SEO", desc: "Set up validation rules, connect proper metadata structures, map local schemas, and utilize SEO plugins appropriately.", features: ["JSON-LD local schema maps", "Semantic header adjustments", "Clean site indexes", "Optimal Yoast / RankMath setups"] },
              { title: "7. Theme Customization Services", badge: "Design Updates", desc: "Incorporate styling updates, customized design variations, responsive menu setups, and polished structural headers.", features: ["Aesthetic design touch-ups", "Airtight child themes setup", "Fluid mobile navigation bars", "High contrast color choices"] },
              { title: "8. Custom Plugins & Core APIs", badge: "Back-End Sprints", desc: "Develop secure custom scripts, map third-party API webhooks, coordinate CRM syncs, and create custom dashboards.", features: ["Third-party tool system syncs", "Airtight background processes", "Data input collection rules", "Lightweight code dependencies"] },
              { title: "9. WordPress Maintenance Retainers", badge: "Airtight Performance", desc: "Continuous plugin updates, secure malware scans, weekly automated offsite backups, performance diagnostics, and debugging support.", features: ["Malware removal scanning", "Plugin version reconciliation", "Offsite cloud database copies", "24/7 uptime monitoring support"] },
              { title: "10. Dedicated Sourcing Models", badge: "Flexible Sourcing", desc: "Succeed under fractional or full-time strategic sourcing options completely tailored around your scale targets and pipeline speeds.", features: ["Direct Slack channel alignments", "Full project management", "Agile sprint task cards", "Experienced lead engineers Sourced"] }
            ].map((service, index) => (
              <div key={index} className="bg-[#030612]/75 border border-slate-900/90 rounded-2xl p-6 hover:border-cyan-500/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="text-[10px] bg-indigo-950 text-cyan-300 px-3 py-1 rounded font-mono uppercase tracking-wider font-bold">
                      {service.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-600 uppercase">Service {index + 1}</span>
                  </div>
                  
                  <h3 className="text-lg font-black text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
                </div>

                <div className="border-t border-slate-900 pt-4 mt-auto">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block mb-2">Scope Highlights:</span>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-300">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING MODELS SECTION */}
      <section className="bg-slate-950/20 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible WordPress Developer Hiring Models</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Choose the perfect engagement model to match your business size, development timeline, and budget constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { model: "Full-Time WordPress Developer", desc: "A dedicated development resource embedded in your workspace. Ideal for ongoing custom builds, theme redesigns, ecommerce sites, and continuous feature updates.", badge: "Dedicated Daily Progress Logs" },
              { model: "Part-Time WordPress Developer", desc: "Perfect for businesses requiring regular web improvements, custom plugin configurations, sitemap syncs, or weekly maintenance checkpoints.", badge: "Flexible Resource Planning" },
              { model: "Hourly WordPress Expert", desc: "Secure rapid, on-demand support for styling issues, database cleanups, custom block setups, or plugin conflict investigations.", badge: "Pay-As-You-Go Security Sprints" },
              { model: "Project-Based Website Squad", desc: "A milestone-driven engagement targeting key launches, WooCommerce shop upgrades, or total website migrations.", badge: "Milestone-Driven Delivery Strategy" },
              { model: "White-Label Agency Extensions", desc: "Inject skilled developers directly into your agency workflow under your corporate label, managing your clients' sites seamlessly.", badge: "Partner Agency Solutions" }
            ].map((card, index) => (
              <div key={index} className="bg-[#030612]/80 border border-slate-900 p-6 rounded-xl hover:border-cyan-500/20 transition flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block uppercase tracking-wider mb-2">{card.badge}</span>
                  <h3 className="text-base font-bold text-white mb-3">{card.model}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
                <div className="border-t border-slate-900 pt-4 mt-6">
                  <span className="text-[10px] font-mono text-slate-500">ENGAGEMENT MODEL CERTIFICATE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Industries Our WordPress Developers Work With</h2>
            <p className="text-slate-450 mt-2 text-sm sm:text-base">
              We specialize in custom web architectures tailored for high conversion ratios across diverse industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind, index) => (
              <div key={index} className="bg-[#030612]/60 border border-slate-900 p-5 rounded-lg hover:border-cyan-500/10 transition-all">
                <span className="text-[10px] text-cyan-400 font-mono font-bold uppercase tracking-wider block mb-2">{ind.name}</span>
                <p className="text-[11px] text-slate-400 leading-relaxed">{ind.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORDPRESS DEVELOPMENT PROCESS */}
      <section className="bg-[#030612]/40 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Our WordPress Development Process</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Every site is built with a structured, step-by-step methodology to ensure fast pages, validated layouts, and modern security profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", name: "Requirement Analysis", detail: "Assess sitemap sizes, client requirements, third-party API configurations, and existing performance bottlenecks." },
              { step: "02", name: "UI/UX Planning", detail: "Formulate crisp site plans, establish mobile responsiveness constraints, and plan conversion paths." },
              { step: "03", name: "Airtight Development", detail: "Build lightweight custom child-themes, configure metadata tags, and develop WooCommerce frameworks." },
              { step: "04", name: "Core Web Vitals Testing", detail: "Evaluate page loading times, compress media files, optimize caching scripts, and test layout responsiveness." },
              { step: "05", name: "Staging Launch", detail: "Deploy live, integrate secure caching profiles, monitor error logs, and configure global CDN routing." }
            ].map((node, i) => (
              <div key={i} className="bg-[#02040b] border border-slate-900 p-5 rounded-lg text-center space-y-3 relative">
                <span className="text-2xl font-black font-mono text-cyan-400 bg-cyan-950/20 px-3 py-1 rounded inline-block">{node.step}</span>
                <h3 className="text-xs font-bold text-white uppercase">{node.name}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{node.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE WEBSITE COST CALCULATOR */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Estimate Your Custom WordPress Project Budget</h2>
              <p className="text-sm text-slate-350 leading-relaxed">
                Tired of vague quotes? Use our interactive website budget calculator to estimate the pricing tier and timeline for your layout requirements. We believe in 100% pricing transparency.
              </p>

              <div className="space-y-3 bg-[#030612]/90 border border-slate-900 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                  <CheckSquare className="w-4 h-4" />
                  <span>TRANSPARENT VALUE GUARANTEE</span>
                </div>
                <p className="text-xs text-slate-400">
                  Every project estimated via this calculator includes complete mobile optimization, Yoast/RankMath basic setups, cloud backups, malware scanners, and 14 days of direct developer support post-launch.
                </p>
              </div>
            </div>

            {/* Right Interactive Cost Widget */}
            <div className="lg:col-span-7">
              <div className="bg-[#04081c] border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-cyan-400" />
                  <span>Instant Project Budget Estimator</span>
                </h3>

                <div className="space-y-6">
                  
                  {/* Scope Slides */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Total Sitemap Pages:</span>
                      <span className="text-cyan-400 font-bold">{calcPages} Pages</span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="45" 
                      step="1"
                      value={calcPages} 
                      onChange={(e) => setCalcPages(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded accent-cyan-400"
                    />
                  </div>

                  {/* Addons Checklist grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    
                    <label className="bg-[#02040a] p-3 rounded border border-slate-900 flex items-center gap-2.5 cursor-pointer hover:border-cyan-500/20 transition">
                      <input 
                        type="checkbox" 
                        checked={calcEcommerce}
                        onChange={(e) => setCalcEcommerce(e.target.checked)}
                        className="rounded bg-slate-950 border-slate-850 accent-cyan-400 w-4 h-4"
                      />
                      <div>
                        <span className="text-[11px] font-bold text-slate-200 block">WooCommerce Shop</span>
                        <span className="text-[9px] text-slate-500 block">Cart, product grids</span>
                      </div>
                    </label>

                    <label className="bg-[#02040a] p-3 rounded border border-slate-900 flex items-center gap-2.5 cursor-pointer hover:border-cyan-500/20 transition">
                      <input 
                        type="checkbox" 
                        checked={calcSpeedOpt}
                        onChange={(e) => setCalcSpeedOpt(e.target.checked)}
                        className="rounded bg-slate-950 border-slate-850 accent-cyan-400 w-4 h-4"
                      />
                      <div>
                        <span className="text-[11px] font-bold text-slate-200 block">PageSpeed Blast</span>
                        <span className="text-[9px] text-slate-500 block">Core Web Vitals Pass</span>
                      </div>
                    </label>

                    <label className="bg-[#02040a] p-3 rounded border border-slate-900 flex items-center gap-2.5 cursor-pointer hover:border-cyan-500/20 transition">
                      <input 
                        type="checkbox" 
                        checked={calcAiChat}
                        onChange={(e) => setCalcAiChat(e.target.checked)}
                        className="rounded bg-slate-950 border-slate-850 accent-cyan-400 w-4 h-4"
                      />
                      <div>
                        <span className="text-[11px] font-bold text-slate-200 block">AI Chatbot Integrations</span>
                        <span className="text-[9px] text-slate-500 block">ChatGPT/Gemini setup</span>
                      </div>
                    </label>

                  </div>

                  {/* Output budget estimations info */}
                  <div className="bg-[#02040a] border border-slate-900 rounded-xl p-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Estimated Budget Min:</span>
                      <span className="text-xl font-bold text-emerald-400 font-mono">${estimatedMinCost.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Estimated Budget Max:</span>
                      <span className="text-xl font-bold text-slate-300 font-mono">${estimatedMaxCost.toLocaleString()}</span>
                    </div>
                    <div className="col-span-2 border-t border-slate-950 pt-3 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Expected Project Delivery Timeline:</span>
                      <span className="text-cyan-400 font-bold font-mono">~{estimatedTimelineDays} Business Days</span>
                    </div>
                  </div>

                  <button 
                    onClick={openProposalForm}
                    className="w-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 text-xs font-black py-3.5 rounded-lg hover:opacity-95 transition-all text-center"
                  >
                    Submit Scope to Sourcing Team for Free Proposal
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FUTURE READY AI WORDPRESS SECTION */}
      <section className="bg-slate-950/20 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-cyan-950/45 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-mono">
                <Bot className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Next-Gen Conversational Frameworks</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white">Hire AI-Ready WordPress Developers for Smarter Websites</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A static website is no longer enough to win organic client attention. We integrate conversational AI models that qualify leads, answer customer questions, schedule meetings, and personalize landing page layouts dynamically.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#030612]/80 border border-slate-905 p-4 rounded-xl space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Dynamic ChatGPT Support</span>
                  </h4>
                  <p className="text-[11px] text-slate-400">Automate customer support ticket captures and answer sitemaps queries in real time.</p>
                </div>
                <div className="bg-[#030612]/80 border border-slate-905 p-4 rounded-xl space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Custom Schema Workflows</span>
                  </h4>
                  <p className="text-[11px] text-slate-400">Maintain validation-ready structured search JSONs so LLMs catalog your services correctly.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#050b1c] rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <span className="text-[10px] text-cyan-400 font-mono uppercase font-bold flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Custom API Schema Parser</span>
                  </span>
                  <span className="bg-[#02040b] text-[9px] text-slate-500 font-mono px-2 py-0.5 rounded border border-slate-950">
                    LIVE PREVIEW
                  </span>
                </div>

                <div className="bg-[#02040a] p-3 rounded font-mono text-[10px] text-slate-300 space-y-1.5 overflow-hidden border border-slate-900">
                  <span className="text-slate-500">// AI Routing Pipeline Custom block definitions</span>
                  <p className="text-cyan-400">{"{"}</p>
                  <p className="indent-4"><span className="text-indigo-300">"agent_model"</span>: <span className="text-emerald-400">"gemini-2.5-pro"</span>,</p>
                  <p className="indent-4"><span className="text-indigo-300">"routing_target"</span>: <span className="text-emerald-400">"/api/v1/qualified-lead"</span>,</p>
                  <p className="indent-4"><span className="text-indigo-300">"dynamic_cta"</span>: <span className="text-cyan-300">true</span>,</p>
                  <p className="indent-4"><span className="text-indigo-300">"optimized_schema"</span>: <span className="text-emerald-400">"JSON-LD LocalBusiness"</span></p>
                  <p className="text-cyan-400">{"}"}</p>
                </div>

                <div className="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded text-[11px] text-cyan-300 font-medium">
                  Our integrations connect with Hubspot, Salesforce, and custom endpoints, scaling lead velocity by up to 45%.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WORDPRESS RESULTS SECTION */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Results Delivered by Our WordPress Developers</h2>
            <p className="text-slate-450 mt-2 text-sm sm:text-base">
              Explore how eliminating redundant plugins and optimizing layouts consistently drives conversions and lowers acquisition costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Core Web Vitals Pass Rate", value: "98/100 Mobile", detail: "Avg mobile performance indicator across recent client updates." },
              { label: "Inbound Conversion Increase", value: "+42% Lead Velocity", detail: "Average growth in registration submissions achieved via responsive layouts." },
              { label: "Acquisition Cost Impact", value: "-28% CPA Savings", detail: "PPC ad spends yield higher returns when pointing to fast, responsive landing pages." },
              { label: "Dynamic Store Sales Sourced", value: "2.4x Revenue Lift", detail: "Retail sales volume expansion after WooCommerce database micro-tuning." }
            ].map((node, index) => (
              <div key={index} className="bg-[#030612]/75 border border-slate-900 p-6 rounded-xl text-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono block mb-2">{node.label}</span>
                <p className="text-2xl font-black text-cyan-401 text-cyan-400 font-mono mb-1">{node.value}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{node.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="bg-slate-950/20 py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">WordPress Development Success Stories</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              See how our professional WordPress developers optimize speed, clean up sitemaps, and design WooCommerce checkouts to scale organic and paid traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: "WooCommerce Growth Case Study", metric: "+185% Cart Progress", desc: "Redesigned checkout layouts, automated dynamic cart retrieval widgets, and optimized overall page loading speeds.", tags: ["WooCommerce", "Cart Optimization"] },
              { title: "Local Business Website Redesign", metric: "99/100 Desktop PageSpeed", desc: "Cleaned a bloated Elementor architecture, configured RankMath schemas, and mapped regional target pages to scale local conversions.", tags: ["Elementor Pro", "Core Web Vitals"] },
              { title: "Enterprise SaaS Website Sourcing", metric: "3.2x Lead Registrations", desc: "Integrated custom HubSpot webhooks, set up validation schemas, and automated landing page layout configurations.", tags: ["API Integrations", "Custom CPTs"] }
            ].map((caseCard, index) => (
              <div key={index} className="bg-[#030612]/80 border border-slate-900/95 rounded-xl p-6 hover:border-cyan-500/20 transition flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseCard.tags.map((tg, iIdx) => (
                      <span key={iIdx} className="text-[9px] font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-950 py-0.5 px-2 rounded">
                        {tg}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{caseCard.title}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{caseCard.desc}</p>
                </div>
                <div className="border-t border-slate-900 pt-4 mt-auto">
                  <span className="text-lg font-mono font-black text-emerald-400 block">{caseCard.metric}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-mono block mt-0.5">VERIFIED INBOUND GAIN</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Why Hire WordPress Developers from AKGLS Group?</h2>
            <p className="text-slate-450 mt-2 text-sm sm:text-base">
              AKGLS Group is a premium development and digital marketing agency. We ensure every line of code we write is optimized for SEO performance and higher conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Theme Specialists", desc: "Highly optimized files, lightweight CSS frameworks, child structures, and fast dynamic layout configurations." },
              { title: "WooCommerce Experts Sourced", desc: "Formulate cart recoveries, set up dynamic integrations, adjust payment paths, and monitor checkouts." },
              { title: "Technical SEO Priority", desc: "Integrated schema layouts, validated sitemaps, semantic header structures, and internal linking setups." },
              { title: "Airtight Code Security", desc: "Malware defenses, continuous backup schedules, regular framework reviews, and custom firewall configurations." }
            ].map((usp, index) => (
              <div key={index} className="bg-[#030612]/75 border border-slate-905 p-6 rounded-xl hover:border-cyan-500/10 transition">
                <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-xs font-bold text-white uppercase block mb-1.5">{usp.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SECTION */}
      <section className="bg-slate-950/20 py-16 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">WordPress Tools & Technologies We Use</h2>
            <p className="text-xs text-slate-500 mt-2">
              We leverage modern caching layers, reliable security suites, responsive layouts, and analytical tracking suites to maximize performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {tools.map((tl, index) => (
              <div key={index} className="bg-[#030612]/90 border border-slate-900 rounded-lg p-4 text-center">
                <span className="text-xs font-bold text-white block mb-1 font-mono">{tl.name}</span>
                <span className="text-[10px] text-slate-500 leading-normal block">{tl.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="wp-hiring-packages" className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Flexible WordPress Developer Hiring Packages Tiers</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Work with dedicated, pre-vetted specialists under transparent monthly retainers. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-[#030612]/90 rounded-2xl border p-6 md:p-8 flex flex-col justify-between relative ${
                  pkg.isPopular ? 'border-cyan-500/50 shadow-xl shadow-cyan-950/10' : 'border-slate-900'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold px-3 py-1 rounded text-[10px] uppercase tracking-widest">
                    Highly Recommended Sourcing Tier
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{pkg.desc}</p>
                  
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-3xl font-black font-mono text-white">{pkg.price}</span>
                    <span className="text-xs text-slate-500">/ {pkg.period}</span>
                  </div>

                  <div className="border-t border-slate-900 pt-6 space-y-3.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider font-bold">Scope Items Sourced:</span>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-900 pt-6 mt-8">
                  <button 
                    onClick={openProposalForm}
                    className={`w-full py-3 rounded-lg text-xs font-black transition-all ${
                      pkg.isPopular 
                        ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950' 
                        : 'border border-slate-700 text-slate-100 hover:border-cyan-500'
                    }`}
                  >
                    Hire WordPress Developer Today
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">Frequently Answered Specifications</span>
              <h2 className="text-3xl font-black text-white">Frequently Asked Questions About Hiring WordPress Developers</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Explore answers to common questions about our dedicated hiring models, custom development pipelines, WooCommerce optimization, and web security.
              </p>

              {/* Copy Schema controls */}
              <div className="bg-[#02040b] p-4 rounded-xl border border-slate-900 space-y-2">
                <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">Copy technical validated schema:</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button 
                    onClick={() => copySchemaMarkup('service')}
                    className="bg-[#0a142c] border border-cyan-950 text-cyan-400 hover:bg-cyan-950/20 hover:border-cyan-600/40 text-[10px] font-mono py-1 px-3 rounded px-2"
                  >
                    Service Schema JSON-LD
                  </button>
                  <button 
                    onClick={() => copySchemaMarkup('faq')}
                    className="bg-[#0a142c] border border-cyan-950 text-cyan-400 hover:bg-cyan-950/20 hover:border-cyan-600/40 text-[10px] font-mono py-1 px-3 rounded px-2"
                  >
                    FAQ Schema JSON-LD
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div 
                      key={index}
                      className="bg-[#030612]/90 border border-slate-900/80 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button 
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between text-left p-5 text-slate-100 hover:text-white transition bg-transparent border-none cursor-pointer"
                      >
                        <h4 className="text-sm font-bold pr-4">{faq.q}</h4>
                        <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-slate-400 p-5 pt-0 border-t border-slate-950 leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREE WORDPRESS WEBSITE AUDIT SECTION */}
      <section id="free-wp-audit-form" className="py-20 border-b border-slate-900/60 bg-[#030612]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-mono font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Obligations Performance evaluation</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white">Get a Free WordPress Website Audit Before Hiring</h2>
              <p className="text-slate-350 text-sm max-w-xl leading-relaxed">
                Submit your domain particulars below. We analyze loading bottlenecks, layout shifting indexes, Yoast or RankMath integrations, secure firewalls, database queries, and custom layouts to deliver a complete performance dashboard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-900/80 pt-6">
                <div className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-100">Speed Optimization Suggestions</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">Analyze Largest Contentful Paint (LCP) and unused files.</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-100">Core Technical Review</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">Review schema compliance and sitemap structure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div id="free-wp-audit-stage" className="bg-[#050b1c] border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-xs text-cyan-400 font-mono font-bold uppercase tracking-widest mb-2 block">Crawl Site Metrics Instantly</h3>
                <h4 className="text-lg font-black text-white mb-6">Request Dynamic Technical Website Audit</h4>

                <form onSubmit={handleLiveAuditSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Name:</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Sarah Jennings" 
                        value={auditName}
                        onChange={(e) => setAuditName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Website URL:</label>
                      <input 
                        type="url" 
                        required 
                        placeholder="e.g. https://yourbrand.com" 
                        value={auditUrl}
                        onChange={(e) => setAuditUrl(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Business Type:</label>
                      <select 
                        value={auditBusiness}
                        onChange={(e) => setAuditBusiness(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-500 font-mono"
                      >
                        <option value="SaaS">SaaS & Software</option>
                        <option value="Ecommerce">Ecommerce Solutions</option>
                        <option value="Healthcare">Healthcare & Wellness</option>
                        <option value="Finance">Finance & Fintech</option>
                        <option value="Education">Education Systems</option>
                        <option value="Industrial">Industrial Manufacturing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Primary Website Goals:</label>
                      <select 
                        value={auditGoal}
                        onChange={(e) => setAuditGoal(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-500 font-mono"
                      >
                        <option value="Boost Conversions & Lead Rate">Boost Conversions & Lead Rate</option>
                        <option value="Core Web Vitals Pass / Speed Play">Core Web Vitals Pass / Speed Play</option>
                        <option value="Complete Redesign / Custom theme Sprints">Complete Redesign / Custom theme Sprints</option>
                        <option value="AI workflows & Auto chatbots integrations">AI workflows & Auto chatbots integrations</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Business Email:</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. sarah@yourbrand.com" 
                        value={auditEmail}
                        onChange={(e) => setAuditEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Phone Number (Include Country Code):</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. +1 (555) 019-2834" 
                        value={auditPhone}
                        onChange={(e) => setAuditPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={auditRunning}
                    className="w-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 text-xs font-black py-4 rounded-lg hover:opacity-95 transition-all disabled:opacity-55 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {auditRunning ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Running Technical Site Diagnostics...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-slate-950" />
                        <span>Launch Instant Website Performance Crawl</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Audit step logs output */}
                {auditStepLog.length > 0 && (
                  <div className="mt-5 p-3.5 bg-slate-950/90 border border-slate-900 rounded-lg max-h-36 overflow-y-auto font-mono text-[9px] text-[#4af626] space-y-1">
                    {auditStepLog.map((lg, idx) => (
                      <p key={idx} className="block">{lg}</p>
                    ))}
                  </div>
                )}

                {/* Audit results output */}
                {auditResult && (
                  <div className="mt-5 p-5 bg-[#02040a] border border-cyan-500/20 rounded-xl space-y-3 animate-fadeIn">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-950">
                      <span className="text-xs font-bold text-slate-100 flex items-center gap-1">
                        <LineChart className="w-4 h-4 text-emerald-400" />
                        <span>STAGING RECONCILIATION SUMMARY</span>
                      </span>
                      <span className="text-[10px] bg-amber-950/30 text-amber-400 px-2 py-0.5 rounded font-mono border border-amber-950/50">
                        AUDIT COMPLETED
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">Average Performance Health Score:</span>
                        <span className="text-rose-400 font-bold">{auditResult.score}/100</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded overflow-hidden">
                        <div className="h-full bg-rose-450 bg-rose-450 bg-rose-400 rounded" style={{ width: `${auditResult.score}%` }} />
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-normal"><strong className="text-white">Critical Bottlenecks:</strong> {auditResult.criticalBottlenecks}</p>
                    <p className="text-[11px] text-slate-300 leading-normal"><strong className="text-white">SEO Compliance Gaps:</strong> {auditResult.seoGap}</p>
                    <p className="text-[11px] text-slate-300 leading-normal"><strong className="text-white">AI Automation Readiness:</strong> {auditResult.aiOpportunity}</p>
                    
                    <div className="bg-[#0b1b36] border border-cyan-500/20 p-2.5 rounded text-[11px] text-cyan-300 font-semibold leading-normal">
                      🏆 Recommended Engagement: {auditResult.hiringRecommendation}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RECENT INSIGHTS / BLOG SECTION */}
      <section className="py-20 border-b border-slate-900/60 bg-[#02040a]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Suggested Technical Case Studies & Guides</h2>
            <p className="text-xs text-slate-500 mt-2">
              Explore dynamic resources and guidelines produced by our sitemap planners and core technical optimization teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "How to Settle Sourcing Tiers for Custom WordPress", read: "8 min read", desc: "A practical guide outlining how to build comprehensive feature matrices before hiring lead engineers." },
              { title: "The Complete WooCommerce PageSpeed Optimization Playbook", read: "12 min read", desc: "Detailed walk-throughs on eliminating layout shifts (CLS), deferring scripts, and optimizing cached assets." },
              { title: "AI integrations & Schema optimizations guidelines", read: "10 min read", desc: "How custom Gutenberg structures make local sitemaps completely discoverable to next-generation LLM web-crawlers." }
            ].map((blog, idx) => (
              <div key={idx} className="bg-[#030612]/90 border border-slate-900 rounded-xl p-5 hover:border-cyan-500/10 transition">
                <div className="flex justify-between text-[10px] font-mono text-cyan-400 mb-3">
                  <span>TECHNICAL RESOURCE</span>
                  <span>{blog.read}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">{blog.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{blog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING STRATEGY & FOOTER */}
      <footer id="wp-developer-final-cta" className="bg-[#030612]/98 border-t border-slate-900/80 p-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Ready to Hire WordPress Developers for Business Growth?
            </h2>
            <p className="text-slate-350 text-sm max-w-xl mx-auto leading-relaxed">
              Formulate elegant, prompt-delivery campaign paths with expert developers who prioritize actual search engine crawlability and superior conversion design.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 mb-12">
              <button 
                onClick={openProposalForm}
                className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:opacity-95 transition-all text-sm cursor-pointer"
              >
                Hire WordPress Developer
              </button>
              <button 
                onClick={() => {
                  const formEl = document.getElementById('free-wp-audit-form');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-slate-700 bg-slate-950/50 text-slate-100 hover:text-white px-6 py-3 rounded-lg hover:border-cyan-500 transition-all text-sm cursor-pointer"
              >
                Book Website Consultation
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-[11px] text-slate-500 border-t border-slate-900 pt-8 font-mono">
              <span>✓ Custom WooCommerce Specialists Sourced</span>
              <span>✓ SEO Friendly Dynamic Gutenberg themes</span>
              <span>✓ Compliant JSON-LD Schema structures validated</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

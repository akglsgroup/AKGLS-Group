import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  Laptop, Tablet, Palette, RefreshCw, LayoutGrid, CheckSquare, Eye, Play, Award, HelpCircle as HelpIcon
} from 'lucide-react';

interface WebDesignServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const designSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Web Design & UI/UX Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akgls.com"
  },
  "areaServed": "Global",
  "description": "High-performance, SEO-friendly, mobile-first, and conversion-optimized custom business website designs."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How long does a professional web design project take?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A custom business website generally takes 3 to 6 weeks from initial design prototyping to final launching."
    }
  }]
}`
};

export default function WebDesignServicesPage({ onBackToHome, openProposalForm }: WebDesignServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title & Meta Simulation
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Web Design Services Company | Professional Website Design Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Before vs After Slider Toggle State
  const [beforeAfterSplit, setBeforeAfterSplit] = useState(50); // percentage slider
  const [isRedesigned, setIsRedesigned] = useState(true); // Toggle fallback for simple mobile click

  // Responsive UI Preview Switcher State
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Interactive Live Design Theme Customizer Presets
  const [designPreset, setDesignPreset] = useState<'saas' | 'editorial' | 'neobrutalist' | 'cyber'>('saas');

  const designPresetStyles = {
    saas: {
      bg: "bg-[#0c121e]",
      border: "border-slate-800",
      accent: "text-brand-orange bg-[rgba(235,94,40,0.1)] border-brand-orange/30",
      pill: "bg-brand-orange",
      title: "Inter Sans-Serif Layout",
      font: "font-sans",
      tagline: "Ultra-clean software widgets featuring spacious, lightweight micro-dividers.",
      cardRadius: "rounded-2xl"
    },
    editorial: {
      bg: "bg-[#16120e]",
      border: "border-amber-900/40",
      accent: "text-amber-400 bg-amber-950/20 border-amber-800/40",
      pill: "bg-amber-550",
      title: "Playfair Serif Display",
      font: "font-serif",
      tagline: "Elegant, high-contrast, text-centered layout ideal for premium consulting portfolios.",
      cardRadius: "rounded-sm"
    },
    neobrutalist: {
      bg: "bg-[#181a1b]",
      border: "border-purple-500",
      accent: "text-purple-400 bg-purple-950/25 border-purple-500/40",
      pill: "bg-purple-600",
      title: "Bold Brutalist Blocks",
      font: "font-mono",
      tagline: "Chunky high-saturation borders, solid cards shadow depth, and stark monospaced accents.",
      cardRadius: "rounded-none"
    },
    cyber: {
      bg: "bg-[#040810]",
      border: "border-brand-teal/40",
      accent: "text-brand-teal bg-brand-teal/10 border-brand-teal/30",
      pill: "bg-brand-teal",
      title: "Neon Cyberpunk Frame",
      font: "font-mono",
      tagline: "Deep sci-fi blues, glowing green grids, scanline mock indicators, and diagnostic telemetry tags.",
      cardRadius: "rounded-[30px]"
    }
  };

  const activeTheme = designPresetStyles[designPreset];

  // Schema copying state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // FAQ interactive state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Lead capture audit form submit
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    bizType: 'Corporate / SME',
    email: '',
    goals: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const webDesignServices = [
    {
      title: "Business Website Design",
      desc: "Architecting sleek, fast-loading, structured websites for startups, SMEs, and corporate enterprises. Includes interactive service matrices, lead captures, and optimized navigational layouts.",
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      tagline: "Perfect for establishing immediate trust and capturing corporate opportunities."
    },
    {
      title: "Custom Brand Prototyping",
      desc: "Tailoring every element specifically to represent your visual heritage. Zero template footprints. Beautiful vector styles, premium tracking ratios, and customizable component designs.",
      icon: <Palette className="w-5 h-5 text-brand-teal" />,
      tagline: "Ideal for high-growth brands seeking a highly unique web presence."
    },
    {
      title: "Advanced UI/UX Services",
      desc: "Wireframing client environments based on deep user behavioral mapping. We build visual user flows, custom micro-navigation pathways, heat-tested action matrices, and complete design modules.",
      icon: <Shuffle className="w-5 h-5 text-indigo-400" />,
      tagline: "Maximizes readability, visitor dwell metrics, and intuitive accessibility."
    },
    {
      title: "High-Converting Ecommerce Stores",
      desc: "Modernizing ecommerce storefronts across Shopify, WooCommerce, and Magento platforms. Sleek shopping cart menus, streamlined billing panels, and lightning-fast search listings.",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      tagline: "Optimized specifically to eliminate cart abandonments and maximize transaction margins."
    },
    {
      title: "WordPress Web Design",
      desc: "Bespoke corporate setups built with ultra-optimized Gutenberg and Elementor structures. Our designs have clean, structured hierarchies without slow bloat codes.",
      icon: <Terminal className="w-5 h-5 text-amber-500" />,
      isTrending: true,
      tagline: "Offers robust content management layouts that retain high organic speed loads."
    },
    {
      title: "Landing Page Architecture",
      desc: "Engaging PPC-focused single layouts built specifically to compliment Google Ads and social funnels. Single-motion scroll routes, distraction-free grids, and crisp forms.",
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      tagline: "Engineered strictly to capture direct leads and maximize ad spends."
    },
    {
      title: "Website Redesign Packages",
      desc: "Shedding legacy layout weights for elegant web containers. We salvage critical crawl metadata while rebuilding modern interfaces that double current user conversions.",
      icon: <RefreshCw className="w-5 h-5 text-rose-450" />,
      tagline: "Breathes fresh speed, custom visual energy, and core vitals ratings with ease."
    },
    {
      title: "Mobile Responsive Adaptations",
      desc: "Engineering adaptive mobile structures utilizing fluid layout logic. Tested on over 25 individual simulator frames to guarantee touch index access levels.",
      icon: <Laptop className="w-5 h-5 text-sky-450" />,
      tagline: "Ensures seamless browsing regardless of user screen limits."
    },
    {
      title: "Conversion Optimization Design",
      desc: "Targeting friction areas directly using structural adjustments. Multi-step form designs, interactive pricing calculators, micro-feedbacks, and localized elements.",
      icon: <Activity className="w-5 h-5 text-blue-450" />,
      tagline: "Increases lead ratios across organic user pathways."
    },
    {
      title: "SEO-Friendly Structuring",
      desc: "Ensuring site crawls read semantic elements properly from launch. Hierarchical headline configurations, nested JSON-LD modules, and fast web assets.",
      icon: <Shield className="w-5 h-5 text-green-450" />,
      tagline: "Maintains optimal visibility parameters across search indexing sweeps."
    }
  ];

  const websiteTypes = [
    { type: "Corporate Websites", desc: "Showcases capabilities and drives secure commercial inquiries." },
    { type: "Ecommerce Portals", desc: "Fluid checkout pipelines and product pages designed to convert browsers." },
    { type: "SaaS & Product Hubs", desc: "High-impact dark canvas pages focused on product features and demo calls." },
    { type: "Creative Portfolios", desc: "Visually striking galleries featuring grid layouts and smooth sliders." },
    { type: "Startup Platforms", desc: "Clean typography and interactive components designed to introduce new ideas." },
    { type: "Educational Directories", desc: "Structured directories and resource libraries designed for smooth navigation." },
    { type: "Healthcare Interfaces", desc: "Fast appointments systems and helpful maps guiding regional patients." },
    { type: "Real Estate Portals", desc: "Modern catalog layouts and filter maps designed to process home inquiries." }
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Competitive Audit", detail: "Scrutinizing user demographic goals, competitor structures, asset requirements, and core brand messages." },
    { step: "02", title: "UX Wireframing & Journey Mapping", detail: "Structuring layout block definitions and user flows before code generation to verify seamless access paths." },
    { step: "03", title: "Visual UI Mockup Prototyping", detail: "Drafting rich pixel prototypes inside Figma platforms matching exact color standards and custom assets." },
    { step: "04", title: "CMS Development & Engineering", detail: "Writing clean, modular codes (React, Next.js, or Gutenberg) styled natively was Tailwind to maximize page speed." },
    { step: "05", title: "Multi-Frame Behavioral Testing", detail: "Vetting device layouts, testing mobile forms, measuring Core Web Vitals, and validating metadata indexes." },
    { step: "06", title: "Launch & Performance Tuning", detail: "Initiating live deployment, mapping analytic pixels, and running support audits during incoming crowds." }
  ];

  const maintenanceDeliverables = [
    "Weekly secure offline database updates",
    "Continuous real-time Core Web Vitals speed tuning",
    "Automated malware scanning and script repairs",
    "On-demand layout modifications and design tuneups",
    "Dynamic API and payment gateway connection checks"
  ];

  const designFaqs = [
    { q: "How much does a professional web design project cost?", a: "Custom professional web design projects at AKGLS Group match your direct functional needs. Starter custom assets begin at $1,200, whereas bespoke corporate hubs or interactive ecommerce systems are scoped securely during consultation." },
    { q: "How long does the web design process typically take?", a: "A custom standard corporate portfolio website takes 3 to 5 weeks. Complex, high-function platforms or extensive ecommerce redesigns take between 6 to 8 weeks including heavy QA testing." },
    { q: "Will my website be mobile-friendly and responsive?", a: "Absolutely. Every block is coded with a mobile-first philosophy using fluid Tailwind CSS modules, ensuring beautiful layouts on mobile, tablet, and desktop screens." },
    { q: "Is basic SEO included in your web design services?", a: "Yes, we integrate technical SEO directly into our design architecture. This includes logical heading structures, clean meta structures, schema markups, alt tags, and optimized asset delivery for speed." },
    { q: "Do you redesign existing websites that have outdated structures?", a: "Yes, web redesign is a core specialty. We preserve your existing organic search rankings using URL-redirect mapping while completely overhauling the user interface to drive higher conversions." },
    { q: "Which CMS platform is best for my brand?", a: "This depends on your business. WordPress is excellent for flexible content-rich business sites; Shopify is our recommendation for modern, high-volume retail, and React/Next.js is preferred for high-speed SaaS setups." },
    { q: "Do you provide technical maintenance after the launch?", a: "Yes, we offer monthly maintenance plans covering core updates, file backups, security tuning, and minor design adjustments." }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen relative font-sans leading-relaxed">
      
      {/* 📞 FLOATING ACTION ASSISTANCE BAR */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="web-whatsapp-sticky"
        >
          <MessageSquare className="w-4 h-4 text-white" fill="white" /> WhatsApp Design Expert: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-orange-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-orange-500/20 transition-all font-mono"
          id="web-phone-sticky"
        >
          <Phone className="w-4 h-4 text-white animate-pulse" /> Call Design Studio: {CONTACT_NUMBER}
        </a>
      </div>

      {/* 🌌 HERO SECTION WITH DYNAMIC BEFORE-AFTER SPLIT & REFRESH DEMO */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-brand-orange/5 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-1/5 right-1/4 w-[550px] h-[550px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full py-2 px-5 transition-colors"
            id="back-from-web-services"
          >
            ← Back to Home
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/35 text-brand-orange rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-mono">
                <Palette className="w-3.5 h-3.5 text-brand-orange" />
                <span>high-conversion digital agency studio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6.5xl font-black font-display leading-[1.08] tracking-tight">
                Professional Web Design <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-400">
                  That Drive Engagement <br />& Conversions
                </span>
              </h1>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                We design lightning-fast, highly responsive, and conversion-focused websites custom tailored to represent your corporate identity and turn visitors into recurring buyers.
              </p>

              {/* USP Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 text-xs font-bold text-slate-350 font-mono">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Modern UI/UX Designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Mobile-First Formats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>SEO-Friendly Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>95+ Page Speed Optimization</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a 
                  href="#free-website-audit-form"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                  id="hero-web-audit-launch-btn"
                >
                  Get Free Website Consultation <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#design-customizer"
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                  id="hero-web-customizer-anchor"
                >
                  <Sparkles className="w-4 h-4 text-brand-teal" /> Try Design Customizer
                </a>
              </div>

            </div>

            {/* Right: INTERACTIVE BEFORE vs. AFTER REDESIGN SLIDER MOCKUP */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                  <div className="flex items-center gap-1.5 font-mono text-[9px]">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    <span className="text-slate-400 font-extrabold uppercase">INTERACTIVE COMPARISON ENGINE</span>
                  </div>
                  <button 
                    onClick={() => setIsRedesigned(!isRedesigned)} 
                    className="text-[9px] bg-slate-900 border border-slate-800 text-brand-orange py-1 px-3 rounded-full font-mono font-bold hover:bg-slate-850 cursor-pointer"
                  >
                    ⚡ Toggle Frame View
                  </button>
                </div>

                {/* Symmetrical Container showing Before / After based on state */}
                <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-center items-center">
                  
                  {isRedesigned ? (
                    /* AFTER REDESIGN: Clean, modern, glowing dark cards with high spacing */
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-left transition-all duration-300 bg-gradient-to-b from-[#0e1626] to-[#05070a]">
                      <div className="space-y-2">
                        <span className="text-[8px] font-mono text-brand-teal tracking-widest bg-brand-teal/10 border border-brand-teal/20 px-2.5 py-1 rounded">
                          ★ CORE SPEED SCORE: 99/100
                        </span>
                        <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                          Voxel Systems Redesigned
                        </h3>
                        <p className="text-slate-400 text-[11px] font-light max-w-sm">
                          Highly responsive, micro-divided layouts built with zero layout shifts to increase lead conversion rates by 84%.
                        </p>
                      </div>

                      {/* Interactive mock user dashboard inside */}
                      <div className="grid grid-cols-3 gap-3 font-mono text-[9px] mt-2">
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                          <span className="text-slate-500 block">BOUNCE RATE</span>
                          <span className="text-brand-teal font-black block text-sm">-38% Drop</span>
                        </div>
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                          <span className="text-slate-500 block">CONVERSION</span>
                          <span className="text-brand-orange font-black block text-sm">+84% Lift</span>
                        </div>
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                          <span className="text-slate-500 block">MOBILE SCORE</span>
                          <span className="text-emerald-400 font-black block text-sm">Perfect</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-slate-500 pt-3 border-t border-slate-900 font-mono">
                        <span>🚀 Clean SVG Assets Deployed</span>
                        <span className="text-brand-teal font-extrabold uppercase">AKGLS Crafted</span>
                      </div>
                    </div>
                  ) : (
                    /* BEFORE REDESIGN: Cluttered, boring standard design on white/grey with bad typography */
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-left bg-slate-900 text-slate-400 font-sans transition-all duration-300">
                      <div className="space-y-2 opacity-60">
                        <span className="text-[8.5px] font-mono text-red-400 tracking-wider bg-red-950/20 border border-red-900/40 px-2.5 py-0.5 rounded">
                          ☒ SPEED SCORE: 34/100 (VERY SLOW)
                        </span>
                        <h3 className="text-lg font-bold text-slate-300 mt-1 font-serif">
                          Voxel Systems (Old Landing Template)
                        </h3>
                        <p className="text-[10.5px] leading-tight">
                          Paragraph template that has slow loading media files, bad system margins, and non-converting standard layout flow.
                        </p>
                      </div>

                      <div className="border border-red-905/30 bg-red-950/10 p-2.5 rounded text-[8.5px] text-center font-mono text-red-400">
                        ⚠️ WARNING: Large JS bundle sizes detected. Missing Schema tags. 4.8s Mobile Delay.
                      </div>

                      <div className="flex justify-between items-center text-[9px] opacity-40 pt-2 border-t border-slate-800">
                        <span>☒ Default Template (Unresponsive)</span>
                        <span>Poor Layout</span>
                      </div>
                    </div>
                  )}

                  {/* Absolute Badge showing current mode overlay */}
                  <div className="absolute bottom-4 left-4 bg-slate-950/90 text-white border border-slate-850 py-1.5 px-3 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider">
                    {isRedesigned ? "✨ AKGLS After Redesign" : "⚠️ Cluttered Legacy Before"}
                  </div>

                </div>

                <div className="text-center">
                  <p className="text-[10px] text-slate-500 font-mono tracking-wide uppercase">
                    ◄ Slide frame toggle above to see structural interface evolution ►
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤝 TRUSTED PARTNER METRIC TILES */}
      <section className="py-12 bg-[#0a0f1d] border-b border-slate-900 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-[9.5px] text-slate-500 font-black uppercase tracking-widest block">AKGLS STUDIO RATINGS RECEIVED</span>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-80 pt-2 text-slate-405 font-extrabold text-xs">
              <span className="border border-brand-orange/40 text-brand-orange py-1 px-3.5 rounded-full bg-brand-orange/5">★ 120+ CUSTOM WEBSITES BUILT</span>
              <span className="border border-slate-850 py-1 px-3.5 rounded-full">★ PERFECT CORE WEB VITALS (CYBER-SPEED)</span>
              <span className="border border-slate-850 py-1 px-3.5 rounded-full">★ MULTI-DEVICE RESPONSIVELY ACCREDITED</span>
              <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 rounded-full bg-brand-teal/5">★ AWARD-RATED UI/UX DESIGNERS</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-850 text-left text-xs">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">120+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">PREMIUM SITES COMPLETED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-orange font-display block">18+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">INDUSTRIES SERVED SECURELY</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">+84%</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">AVERAGE CONVERSION RATE BOONS</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-teal font-display block">98%</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">MOBILE OPTIMIZATION SCORE GAINED</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🧭 WHAT INCLUDES IN WEB DESIGN MANAGEMENT */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explainer Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                AESTHETICS + CONVERSIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                What Are Professional Web Design Services?
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                A high-converting professional web design is far more than standard template decorations. It is an intentional, interactive brand portal shaped entirely by clean layouts, robust visual hierarchies, fast load coordinates, and responsive touch access thresholds.
                <br /><br />
                At AKGLS Group, we design beautiful web layouts where brand message meets seamless UX architecture. Every custom component is configured with speed-friendly components to ensure flawless performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-slate-950 border border-slate-855 rounded-xl space-y-1">
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider font-extrabold block">STANDARD PRESETS</span>
                  <p className="text-slate-400 leading-snug">Uses slow, bloated visual structures that delay layout loading speeds for incoming browser sweeps.</p>
                </div>
                <div className="p-4 bg-brand-orange/5 border border-brand-orange/25 rounded-xl space-y-1">
                  <span className="text-brand-orange text-[9px] uppercase tracking-wider font-extrabold block">AKGLS HYPER-UX DESIGN</span>
                  <p className="text-slate-350 leading-snug">Clean fluid grids, beautiful lightweight SVGs, custom typography assets, and structured micro-spacing models.</p>
                </div>
              </div>

            </div>

            {/* Graphic Right wireframe mockup design */}
            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-4">
                <h3 className="text-white font-extrabold font-mono text-[10.5px] uppercase tracking-wider flex items-center gap-2 pb-2.5 border-b border-slate-905">
                  <Laptop className="w-4 h-4 text-brand-orange animate-pulse" /> Unified UI/UX Component Framework
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-[9.5px] shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-bold">Fluid Layout Grid Integration</h4>
                      <p className="text-slate-500 text-[10.5px]">Placing dynamic alignment models that look gorgeous on ultrawide monitors and phones alike.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-teal text-slate-950 flex items-center justify-center font-bold text-[9.5px] shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-bold">Spacious Core Negative Micro Spacings</h4>
                      <p className="text-slate-500 text-[10.5px]">Balancing beautiful, readable margins to isolate product copy cards and increase CTAs engagement.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-[9.5px] shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-bold">SEO semantic structural headings</h4>
                      <p className="text-slate-500 text-[10.5px]">Structuring header weights (H1, H2, H3) precisely to match incoming search criteria easily.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ ENHANCED WEB DESIGN SERVICE GRID */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              SERVICES SCOPE
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Our Web Design Services
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We deploy clean responsive interfaces and fast-loading web blocks configured natively past search indexing benchmarks.
            </p>
          </div>

          {/* Grid Layout of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {webDesignServices.map((srv, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-3xl p-6 hover:border-slate-800 transition-all flex flex-col justify-between" id={`web-service-card-${idx}`}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#0c121e] border border-slate-800 flex items-center justify-center">
                      {srv.icon}
                    </div>
                    {srv.isTrending && (
                      <span className="text-[8px] font-mono text-brand-orange bg-[rgba(235,94,40,0.15)] border border-brand-orange/40 font-bold tracking-widest py-0.5 px-2.5 rounded">
                        ★ STAR SERVICE
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg text-white font-black font-display">{srv.title}</h3>
                    <p className="text-slate-405 font-light text-xs leading-relaxed">{srv.desc}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900">
                  <span className="text-[8.5px] uppercase font-mono font-black text-slate-500 block mb-1">PROVEN ACCORDING TO BRAND GOALS:</span>
                  <p className="text-brand-teal font-mono text-[10.5px] font-bold">{srv.tagline}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔮 INTERACTIVE DESIGN SYSTEM PLAYGROUND PRESENTS */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left" id="design-customizer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative with presets buttons */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-indigo-400 font-mono text-[9px] font-black uppercase tracking-widest bg-brand-indigo/15 px-3.5 py-1.5 rounded-full border border-brand-indigo/25">
                STYLE SWITCHER
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black font-display text-white leading-tight">
                Branding & Aesthetics Sandbox
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm">
                A design system is the genetic blueprint of secure brand continuity. Select an aesthetic theme below to watch how our component interfaces adapt styles dynamically based on target audiences.
              </p>

              <div className="flex flex-col gap-2.5 font-mono text-xs">
                {Object.keys(designPresetStyles).map((pKey) => {
                  const item = designPresetStyles[pKey as keyof typeof designPresetStyles];
                  return (
                    <button
                      key={pKey}
                      onClick={() => setDesignPreset(pKey as any)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${
                        designPreset === pKey
                          ? 'bg-brand-orange/15 border-brand-orange text-white'
                          : 'bg-[#0d121f] border-slate-850 text-slate-350 hover:bg-[#121c2e]'
                      }`}
                      id={`style-preset-btn-${pKey}`}
                    >
                      <span>🎨 {item.title}</span>
                      <span className="text-[9px] text-slate-500 font-mono">{pKey.toUpperCase()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Interactive Mockup showing preset adjustments */}
            <div className="lg:col-span-7">
              <div className={`p-8 border shadow-3xl space-y-6 relative transition-all duration-300 ${activeTheme.bg} ${activeTheme.border} ${activeTheme.cardRadius}`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-indigo/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex justify-between items-center pb-4 border-b border-slate-900">
                  <div className="space-y-1">
                    <span className={`text-[9px] font-mono py-1 px-3.5 rounded-full inline-block uppercase font-bold text-xs ${activeTheme.accent}`}>
                      Active Style: {designPreset.toUpperCase()}
                    </span>
                    <h3 className={`text-2xl text-white font-black leading-tight mt-1.5 ${activeTheme.font}`}>
                      Responsive Digital Showcase
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    {activeTheme.tagline} We balance letter trackings, contrast weight coordinates, and clean padding spaces to suit your exact branding.
                  </p>

                  <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl space-y-3 font-mono text-xs text-slate-400">
                    <div className="flex justify-between items-center">
                      <span>Typography Framework:</span>
                      <span className="text-white font-bold">{activeTheme.font === 'font-sans' ? 'Inter Sans (Modern SaaS)' : activeTheme.font === 'font-serif' ? 'Playfair Serif (Editorial)' : 'JetBrains Mono (System/Tech)'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Container Board Corner Radius:</span>
                      <span className="text-white font-bold">{activeTheme.cardRadius}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>► LIGHTWEIGHT DIVIDERS</span>
                  <span className="text-brand-orange font-bold uppercase">AKGLS Studio</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DYNAMIC VIEWPORT RESPONSIVENESS DEMO CHANGER */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/15 px-4.5 py-1 rounded-full border border-brand-teal/25">
              RESPONSIBILITY AUDITED
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white leading-tight">
              Interactive Viewport Simulator
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We compile code that shifts seamlessly based on user device metrics. Click below to scale the design container preview immediately files.
            </p>

            <div className="flex justify-center gap-3 pt-4">
              <button 
                onClick={() => setPreviewDevice('desktop')}
                className={`py-2 px-5 rounded-full border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${previewDevice === 'desktop' ? 'bg-brand-orange border-brand-orange text-white' : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-white'}`}
              >
                <Laptop className="w-4 h-4" /> Desktop (1440px)
              </button>
              <button 
                onClick={() => setPreviewDevice('tablet')}
                className={`py-2 px-5 rounded-full border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${previewDevice === 'tablet' ? 'bg-brand-orange border-brand-orange text-white' : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-white'}`}
              >
                <Tablet className="w-4 h-4" /> Tablet (768px)
              </button>
              <button 
                onClick={() => setPreviewDevice('mobile')}
                className={`py-2 px-5 rounded-full border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${previewDevice === 'mobile' ? 'bg-brand-orange border-brand-orange text-white' : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-white'}`}
              >
                <Smartphone className="w-4 h-4" /> Mobile (375px)
              </button>
            </div>
          </div>

          {/* SIMULATED DEVICE FRAME CONTAINER WRAPPER */}
          <div className="flex justify-center">
            <div 
              className={`bg-[#05070a] border border-slate-850 p-4 rounded-3xl transition-all duration-300 overflow-hidden shadow-2xl relative ${
                previewDevice === 'desktop' ? 'w-full max-w-4xl' : previewDevice === 'tablet' ? 'w-full max-w-xl' : 'w-full max-w-xs'
              }`}
            >
              <div className="bg-slate-900 py-1.5 px-3 rounded-xl mb-4 text-[9px] text-slate-400 text-left border border-slate-850 flex justify-between items-center">
                <span>🌐 HTTP://AKGLS-DESIGN-STUDIO.COM/LIVE-MOCK</span>
                <span>Aspect: {previewDevice.toUpperCase()}</span>
              </div>

              {/* Dynamic preview content scaling */}
              <div className="bg-slate-950 p-6 rounded-2xl text-left border border-slate-900 space-y-4">
                <div className="space-y-1">
                  <span className="text-[8px] bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-2 py-0.5 rounded">
                    ★ MOBILE-FIRST LAYOUT
                  </span>
                  <h4 className="text-white font-bold text-sm md:text-base mt-2">
                    Professional, High-Speed Portfolio Frame
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-slate-400">
                  <p>
                    Fluid container grids expand seamlessly on wider workstation monitors yet auto-silo to single alignments on mobile devices easily.
                  </p>
                  <p className="hidden md:block">
                    Touch index actions are padded past 44px boundaries to ensure flawless finger actions.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 flex justify-between items-center">
                  <span className="text-[9px] text-brand-teal font-extrabold uppercase">► 98% SEO Friendly Layout</span>
                  <span className="text-xs font-black text-white">$1,200 Starting Plan</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 🔮 WEBSITE TYPES WE DESIGN */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              WEBSITE DIRECTORIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Website Types We Design
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We design specialized responsive models matching individual operational sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteTypes.map((t, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-5 hover:border-slate-800 transition-all flex flex-col justify-between" id={`web-type-card-${idx}`}>
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0c121e] border border-slate-800 flex items-center justify-center font-bold font-mono text-xs text-brand-orange">
                    {idx + 1}
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase font-mono">{t.type}</h3>
                  <p className="text-slate-500 font-light text-xs leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STEP-BY-STEP OPERATIONAL DESIGN PROCESS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-orange font-extrabold uppercase bg-brand-orange/15 px-4.5 py-1 rounded-full border border-brand-orange/25">
              CREATIVE BLUEPRINT
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white leading-tight">
              Our Website Design Process
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              From creative Figma prototypes to live search-friendly deployment, our process ensures visual and speed success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((ph, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between h-56 hover:border-slate-800 transition-all" id={`web-process-card-${idx}`}>
                <span className="text-4xl font-black text-slate-800/40 block leading-none">{ph.step}</span>
                <div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wide mb-1 pb-1 border-b border-slate-900">{ph.title}</h3>
                  <p className="text-slate-500 font-light text-[10.5px] leading-relaxed">{ph.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 AI-READY & FUTURE-PROOF WEBSITE DESIGN TRENDING FEATURE */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/30">
                ⭐ AI-READY FUTURES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
                Future-Proof & AI-Optimized Layouts
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                As AI platforms like ChatGPT and Google Gemini transform digital search, traditional layout priorities have evolved. We design websites configured with AI crawl pathways, conversational text layouts, schema metadata tags, and chatbot integrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-350">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  <span>GEO/AEO optimized schemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  <span>Conversational FAQ indexing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  <span>Interactive fast responsive blocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  <span>Chatbot container capabilities</span>
                </div>
              </div>
            </div>

            {/* Right Graphics Mockup showing code/schemas */}
            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-3">
                <h4 className="text-white font-bold text-[10.5px] uppercase tracking-wider pb-2 border-b border-slate-900">
                  ⚡ AI Schema Optimization Panel
                </h4>
                
                <p className="text-slate-400 text-xs font-light">
                  We embed rich JSON-LD data modules to ensure your corporate web structures validate perfectly during Google searches.
                </p>

                <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl space-y-2 text-[10.5px] font-mono text-slate-500 text-left">
                  <span>► JSON-LD Structure checks: OK</span>
                  <span>► Mobile layout validation: OK</span>
                  <span>► GEO crawl indicators: Embedded</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ TECHNOLOGY GRID OR PLATFORMS PARTNER */}
      <section className="py-16 bg-[#0a0f1d] border-b border-slate-900 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] text-slate-550 font-bold uppercase tracking-widest block mb-8">DEVELOPMENT TECHNOLOGIES WE SPECIALIZE IN</span>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="bg-slate-950 border border-slate-850 text-white font-bold py-2.5 px-5 rounded-xl">WordPress</span>
            <span className="bg-slate-950 border border-slate-850 text-white font-bold py-2.5 px-5 rounded-xl">Shopify</span>
            <span className="bg-slate-950 border border-slate-850 text-white font-bold py-2.5 px-5 rounded-xl">WooCommerce</span>
            <span className="bg-slate-950 border border-slate-850 text-white font-bold py-2.5 px-5 rounded-xl">React / Next.js</span>
            <span className="bg-slate-950 border border-slate-850 text-white font-bold py-2.5 px-5 rounded-xl">Tailwind CSS</span>
            <span className="bg-slate-950 border border-slate-850 text-white font-bold py-2.5 px-5 rounded-xl">Figma Design</span>
          </div>
        </div>
      </section>

      {/* 🎁 FEATURES INCLUDED IN EVERY DESIGN UNIT */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest bg-brand-orange/15 px-4 py-1.5 rounded-full border border-brand-orange/25">
              INCLUDED STANDARD
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Features Included in Every Website
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
            <div className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-2">
              <h3 className="text-white font-bold">Fast Speed Optimized</h3>
              <p className="font-light">Compression of images, minification of styles, and explicit container sizes to avoid delays.</p>
            </div>
            <div className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-2">
              <h3 className="text-white font-bold">Comprehensive Security SSL</h3>
              <p className="font-light">Applying secure server variables, spam protective firewalls, and encrypted socket tags natively.</p>
            </div>
            <div className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-2">
              <h3 className="text-white font-bold">Crawl Ready SEO Setup</h3>
              <p className="font-light">Integrating nested semantic labels, schema structures, XML sitemaps, and verified meta parameters.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 📦 WEBSITES MAINTENANCE & SUPPORT PLAN AREAS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10.5px] bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-full py-1.5 px-4 font-bold font-mono uppercase tracking-wider inline-block">
                ★ LIVE MONITORED SECURES
              </span>
              <h2 className="text-3xl md:text-4.5xl font-black font-display text-white tracking-tight">
                Website Maintenance & Support Services
              </h2>
              <p className="text-slate-405 font-light text-xs sm:text-sm">
                A digital presence demands continuously vetted security credentials, layout tuning, and script revisions. Our maintenance engineers monitor your servers to guarantee zero downtime.
              </p>

              <div className="space-y-2.5 font-mono text-xs text-slate-350">
                {maintenanceDeliverables.map((item, id) => (
                  <div key={id} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box packages */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 border border-slate-850 rounded-3xl p-6 space-y-6">
                <span className="text-[9px] text-slate-500 font-extrabold font-mono block uppercase">AKGLS STUDIO TACTICAL PLANS</span>
                
                <div className="space-y-4">
                  <div className="p-4 bg-[#0d121f] border border-slate-800 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="text-white font-bold font-mono text-sm">Starter Custom Plan</h4>
                      <p className="text-slate-500 font-mono text-[10px]">Standard corporate portals</p>
                    </div>
                    <span className="text-brand-orange font-mono font-black">$1,200</span>
                  </div>

                  <div className="p-4 bg-brand-orange/5 border border-brand-orange/30 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="text-white font-bold font-mono text-sm">Business Scale Plan</h4>
                      <p className="text-slate-500 font-mono text-[10px]">High dynamic SaaS & Retail setups</p>
                    </div>
                    <span className="text-brand-orange font-mono font-black">$2,400</span>
                  </div>
                </div>

                <a 
                  href="#free-website-audit-form"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-5 rounded-xl block text-center transition-all font-mono"
                >
                  Request Custom Website Quote
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🧭 TECHNICAL SERVICE SCHEMA CORNERS */}
      <section className="py-16 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-6 bg-[#0c121e] border border-slate-850 rounded-2xl space-y-4">
            <h4 className="text-white font-bold text-xs uppercase font-mono tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4 text-brand-orange" /> Technical Web Design Strategy Schema Elements
            </h4>
            
            <p className="text-xs text-slate-500 font-sans">
              To guarantee seamless visibility crawl targets on launch, we deploy deep standard meta scripts natively into every client package.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10.5px] font-mono">
                  <span className="text-slate-400 font-bold">1. Corporate Service Schema</span>
                  <button 
                    onClick={() => performSchemaCopy(designSchemaTemplates.service, 'service')}
                    className="text-brand-orange hover:text-orange-400 font-semibold cursor-pointer"
                  >
                    {copiedKey === 'service' ? '✓ Copied!' : 'Copy Script'}
                  </button>
                </div>
                <pre className="bg-slate-950 p-3.5 rounded-lg border border-slate-850 font-mono text-[10px] text-zinc-455 overflow-x-auto select-all max-h-36">
                  {designSchemaTemplates.service}
                </pre>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10.5px] font-mono">
                  <span className="text-slate-400 font-bold">2. Diagnostic FAQ Schema</span>
                  <button 
                    onClick={() => performSchemaCopy(designSchemaTemplates.faq, 'faq')}
                    className="text-brand-orange hover:text-orange-400 font-semibold cursor-pointer"
                  >
                    {copiedKey === 'faq' ? '✓ Copied!' : 'Copy Script'}
                  </button>
                </div>
                <pre className="bg-slate-950 p-3.5 rounded-lg border border-slate-850 font-mono text-[10px] text-zinc-455 overflow-x-auto select-all max-h-36">
                  {designSchemaTemplates.faq}
                </pre>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🧾 FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest">COMMON CONCERNS UNLOCKED</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Web Design FAQ
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 font-sans">
            {designFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 focus:outline-none flex justify-between items-center text-white font-bold text-xs md:text-sm cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-slate-400 font-light text-xs border-t border-slate-900 leading-relaxed bg-[#05070a]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 📥 FREE WEBSITE AUDIT LEAD CAPTURE FORM */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left" id="free-website-audit-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/25">
                FREE DIAGNOSTICS SESSIONS
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-black font-display text-white tracking-tight">
                Request a Free Web Design Audit
              </h2>
              <p className="text-slate-405 font-light text-xs sm:text-sm leading-relaxed">
                Send your current corporate site URL or describe your functional goals. Our certified UI/UX architects will compile a visual improvement checklist for your team within 12-24 hours.
              </p>

              <div className="space-y-4 font-mono text-[10px] text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Comprehensive page load speed diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Crawl readability index checks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span>Actionable visual hierarchy guidelines</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
                
                {auditSubmitted ? (
                  <div className="text-center py-10 space-y-4 font-mono">
                    <div className="w-12 h-12 bg-brand-teal/10 border border-brand-teal/40 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-brand-teal" />
                    </div>
                    <h3 className="text-white font-extrabold text-sm uppercase">Audit Request Received!</h3>
                    <p className="text-slate-500 text-xs">Our master layout designers will construct your audit within 12 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleAuditSubmit} className="space-y-4 text-xs font-mono text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-extrabold uppercase">your name *</label>
                        <input 
                          type="text" 
                          required
                          value={auditForm.name}
                          onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                          placeholder="Elizabeth Bennett" 
                          className="w-full bg-[#05070a] border border-slate-800 focus:border-brand-orange rounded-xl p-3.5 text-white outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-extrabold uppercase">website url / goals *</label>
                        <input 
                          type="text" 
                          required
                          value={auditForm.website}
                          onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                          placeholder="https://voxelsystems.com" 
                          className="w-full bg-[#05070a] border border-slate-800 focus:border-brand-orange rounded-xl p-3.5 text-white outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-extrabold uppercase">business sector *</label>
                        <select 
                          value={auditForm.bizType}
                          onChange={(e) => setAuditForm({...auditForm, bizType: e.target.value})}
                          className="w-full bg-[#05070a] border border-slate-800 focus:border-brand-orange rounded-xl p-3.5 text-white outline-none cursor-pointer"
                        >
                          <option>Corporate / SME</option>
                          <option>B2B SaaS platform</option>
                          <option>Ecommerce brand</option>
                          <option>Localized medical portal</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-extrabold uppercase">contact email *</label>
                        <input 
                          type="email" 
                          required
                          value={auditForm.email}
                          onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                          placeholder="elizabeth@voxelsystems.com" 
                          className="w-full bg-[#05070a] border border-slate-800 focus:border-brand-orange rounded-xl p-3.5 text-white outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-extrabold uppercase">brief descriptions of redesign needs</label>
                      <textarea 
                        rows={3}
                        value={auditForm.goals}
                        onChange={(e) => setAuditForm({...auditForm, goals: e.target.value})}
                        placeholder="Describe key friction areas, preferred pages parameters, or style guidelines..." 
                        className="w-full bg-[#05070a] border border-slate-800 focus:border-brand-orange rounded-xl p-3.5 text-white outline-none resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand-orange hover:bg-opacity-95 text-white py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" /> Compile Free UI/UX Audit Proposal
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📚 RELATED DIGITAL ARTICLES SECTIONS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 animate-once">
            <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              KNOWLEDGE DIRECTORIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Symmetrical Design Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden group hover:border-slate-805 transition-all">
              <div className="p-6 space-y-3">
                <span className="text-[9px] text-brand-orange font-mono font-extrabold uppercase">CORE LAYOUT THEORY</span>
                <h4 className="text-white font-bold leading-snug text-sm">Responsive Mobile-First grids: Essential container metrics for peak viewport scaling</h4>
                <p className="text-slate-500 text-[11px] font-light">How we optimize layouts response metrics using pure CSS elements to decrease initial load thresholds.</p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden group hover:border-slate-805 transition-all">
              <div className="p-6 space-y-3">
                <span className="text-[9px] text-brand-teal font-mono font-extrabold uppercase">SEO COGNIZANCES</span>
                <h4 className="text-white font-bold leading-snug text-sm">Perfecting heading weight silos to secure native search crawl rankings easily</h4>
                <p className="text-slate-500 text-[11px] font-light">Mapping structural headers (H1 through H4) accurately with keyword relevance to boost rankings securely.</p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden group hover:border-slate-805 transition-all">
              <div className="p-6 space-y-3">
                <span className="text-[9px] text-indigo-400 font-mono font-extrabold uppercase">CMS ARCHITECTURES</span>
                <h4 className="text-white font-bold leading-snug text-sm">WordPress block layout structures: Overcoming legacy database template bloat</h4>
                <p className="text-slate-500 text-[11px] font-light">Methods to design custom WordPress portfolio setups holding 95+ desktop and mobile speed ratings.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🌌 FINAL PERSUASIVE HERO SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#05070a] to-[#0c121e] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
            Ready to Build a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-400">
              High-Converting Website?
            </span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm font-light max-w-xl mx-auto">
            Partner with dedicated UI/UX designers to secure high conversions, perfect Core Web Vitals speed scores, and fluid responsive styling presets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#free-website-audit-form"
              className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shrink-0 cursor-pointer"
            >
              Book Website Consultation
            </a>
            
            <a 
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
              className="bg-slate-950 border border-slate-850 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl hover:border-slate-800 transition-all cursor-pointer"
            >
              Request Custom Website Quote
            </a>
          </div>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-[10.5px] font-mono text-slate-500">
            <span>✓ MODERN DESIGN EXPERTS</span>
            <span>✓ SECURED TRANSPARENT PRICING</span>
            <span>✓ MOBILE-FIRST PHILOSOPHY</span>
          </div>

        </div>
      </section>

    </div>
  );
}

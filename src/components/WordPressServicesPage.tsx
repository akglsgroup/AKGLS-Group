import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  Laptop, Tablet, Palette, RefreshCw, LayoutGrid, CheckSquare, Eye, Play, Award, HelpCircle as HelpIcon, Flame
} from 'lucide-react';

interface WordPressServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const wordpressSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional WordPress Development Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akgls.com"
  },
  "areaServed": "Global",
  "description": "High-speed, SEO-centric, secure custom WordPress theme development, Elementor layouts, and WooCommerce store implementations.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "1500",
    "highPrice": "12000"
  }
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose WordPress for an enterprise business site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WordPress powers over 43% of all web systems. It delivers an excellent balance of scalability, flexible REST APIs, user-friendly CMS management, and unparalleled ecosystem tools."
      }
    }
  ]
}`
};

export default function WordPressServicesPage({ onBackToHome, openProposalForm }: WordPressServicesPageProps) {
  const CONTACT_NUMBER = '+1 (315) 902-1234'; // matching branding
  const WHATSAPP_LINK = 'https://wa.me/13159021234';

  // Dynamic Page Title & Meta Simulation
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "WordPress Development Services Company | WordPress Website Experts | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Performance Speed State Slider (Simulating Gutenberg Speed performance vs Old Elementor bloated sites)
  const [speedState, setSpeedState] = useState<'optimized' | 'unoptimized'>('optimized');

  // Interactive UI Showcase preset themes (Dynamic UI block on the page)
  const [gutenbergTheme, setGutenbergTheme] = useState<'minimal' | 'ecom' | 'portfolio'>('minimal');

  const gutenbergPresetMockups = {
    minimal: {
      title: "Vesper SaaS Hub",
      bgClass: "from-[#080d19] to-[#0d162c]",
      description: "A fast, content-driven custom WordPress container utilizing zero heavy plugins. Styled with Tailwind and designed for conversion audits.",
      speed: "100/100 Mobile Score",
      features: ["Custom Gutenberg Blocks", "SEO Schema Integrated", "98kb Total Page Weight"]
    },
    ecom: {
      title: "Aura Retail WooCommerce",
      bgClass: "from-[#140f09] to-[#241a0e]",
      description: "Fully styled WooCommerce store setup with interactive fast shopping baskets, clean micro-interactions, and secure payment integrations.",
      speed: "97/100 Core Web Vitals",
      features: ["AJAX Cart Slider", "Dynamic tax calculations", "Cloudflare Supercharged CDNed"]
    },
    portfolio: {
      title: "Pixel-Perfect Display",
      bgClass: "from-[#0a1414] to-[#04080a]",
      description: "Ultra-premium layout tailored for global photographers and high-end digital consulting firms seeking smooth entrance transition effects.",
      speed: "99/100 Desktop Rating",
      features: ["GSAP layout triggers", "Advanced custom fields integrations", "Fluid mobile adaptation grid"]
    }
  };

  const currentTheme = gutenbergPresetMockups[gutenbergTheme];

  // Pricing Switcher Package
  const [selectedLicenseYearly, setSelectedLicenseYearly] = useState(false);

  // FAQ Interactive Index state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying indicators
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Consultation state handler
  const [consultForm, setConsultForm] = useState({
    name: '',
    website: '',
    bizType: 'SaaS / Tech',
    features: '',
    email: '',
    agreed: true
  });
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const maintenanceDeliverables = [
    "Weekly secure plugins & core codebase checks",
    "Real-time malware scanning & login defense",
    "Hourly remote backup scripts and storage setups",
    "Continual SQL memory optimizations",
    "Rapid troubleshooting support line access"
  ];

  const handleConsultSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consultForm.name || !consultForm.email) return;
    setConsultSubmitted(true);
  };

  const webServicesList = [
    {
      title: "Bespoke Custom WordPress Development",
      desc: "Full stack, specialized theme and component development matching client designs exactly. Zero heavy standard templates—built logic-first with swift, lightweight custom-authored functions.",
      icon: <Code className="w-5 h-5 text-brand-orange" />,
      bullets: ["No template bloat", "Bespoke user control systems", "ACF Pro dynamic databases setup"]
    },
    {
      title: "WordPress Business Website Solutions",
      desc: "High-trust corporate portals optimized for lead capture and authority positioning. Tailor-made for startups, financial agencies, real estate, and enterprise teams.",
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
      bullets: ["Seamless contact funnel", "Integrates HubSpot or Salesforce API", "Enterprise cloud configuration"]
    },
    {
      title: "Strategic WooCommerce Development",
      desc: "Architecting responsive shopping stores that load instantly. Seamless grid checkouts, secure tax calculators, integrated logistics modules, and localized banking systems.",
      icon: <Globe className="w-5 h-5 text-brand-teal" />,
      isTrending: true,
      bullets: ["High transactional security", "One-click express buying layouts", "Multi-currency scaling systems"]
    },
    {
      title: "Pro Elementor & Page Builder Setup",
      desc: "Deploying highly customizable layouts built with Elementor Pro. Easy to manage, editable, and optimized with lightweight custom stylesheet classes.",
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      bullets: ["Visual editor training guides", "Custom-coded widgets module", "Structured layout system backups"]
    },
    {
      title: "Custom Theme Engineering",
      desc: "Writing pristine, semantic WordPress layouts from scratch. Perfect block layouts optimized past the latest WordPress Core and block standards.",
      icon: <Palette className="w-5 h-5 text-emerald-400" />,
      bullets: ["W3C validated clean templates", "Mobile-prioritized styling", "Lightweight Gutenberg widgets"]
    },
    {
      title: "Custom Plugins & API Connections",
      desc: "Developing private plugins to deliver specific corporate mechanics. Connect WordPress secure frameworks to third-party databases, CRMs, or external service pipelines.",
      icon: <Terminal className="w-5 h-5 text-sky-400" />,
      bullets: ["Secure code audits", "Optimized REST API structures", "Modular lightweight builds"]
    },
    {
      title: "WordPress Core Speed Maximizer",
      desc: "Replacing slow database rows, compressing legacy assets, implementing advanced Cloudflare caching systems, and optimizing Core Web Vitals to grade A scores.",
      icon: <Gauge className="w-5 h-5 text-rose-450" />,
      bullets: ["GTmetrix under 1s load parameters", "SQL cleanups & object caching", "Critical CSS delivery pipelines"]
    },
    {
      title: "WordPress SEO Hardening Services",
      desc: "Mapping custom schema templates, breadcrumb metadata pathways, logical header hierarchies, and site-wide tag automation to guarantee crawls translate cleanly.",
      icon: <Search className="w-5 h-5 text-purple-400" />,
      bullets: ["Automated dynamic schema", "Optimized sitemaps routing", "SEO-proof redesign setups"]
    },
    {
      title: "Secure Redesign & Legacy Migrations",
      desc: "Migrating standard legacy frameworks to lightweight, modern WordPress layouts without suffering visual downtime or dropping search rank credits.",
      icon: <RefreshCw className="w-5 h-5 text-amber-600" />,
      bullets: ["URL redirect mappings setup", "Database salvage processes", "Modern UX improvements"]
    },
    {
      title: "Proactive Security & Maintenance Plans",
      desc: "Continuous automated monitoring to maintain site security integrity. Automated malware scanners, weekly custom package updates, and quick live restore setups.",
      icon: <Shield className="w-5 h-5 text-green-450" />,
      bullets: ["Malware removal processes", "Bi-weekly plugin configurations", "Immediate tech support live line"]
    }
  ];

  const websiteCategories = [
    { name: "Business Portals", benefit: "Establish immediate enterprise credibility and automate qualified inbound inquiries." },
    { name: "WooCommerce Stores", benefit: "Build super-fast shopping pipelines that increase checkouts and transaction volumes." },
    { name: "B2B SaaS Hubs", benefit: "Tailor dark modern containers to secure interactive demo requests with ease." },
    { name: "Interactive Blogs", benefit: "Structured layouts styled with elegant read flows designed for viral audiences." },
    { name: "Sleek Portfolios", benefit: "Showcase client cases in clean, pixel-perfect minimal CSS showcase sliders." },
    { name: "Educational Services", benefit: "Deliver robust learning material databases and registration panels." },
    { name: "Healthcare Hubs", benefit: "Secure patient booking portals configured natively with regional SEO hooks." },
    { name: "Real Estate Agents", benefit: "Present beautiful property maps and custom search filters with interactive tags." },
    { name: "Startup Landing Pages", benefit: "Capture early-stage customer signups with lightweight high-converting form slots." },
    { name: "News & Media Portals", benefit: "Deliver lightning-fast news sweeps styled for deep scroll retention and ad placements." }
  ];

  const developmentSteps = [
    { number: "01", header: "Discovery & Strategic Planning", text: "Analyzing competitor code structures, audience indexing metrics, and mapping essential user path layouts." },
    { number: "02", header: "UI/UX Wireframing & Design", text: "Drafting layouts with generous negative breathing space and responsive elements before coding begins." },
    { number: "03", header: "Modern Code & Theme Setup", text: "Developing custom Gutenberg/Elementor blocks with clean classes, ensuring minimal standard theme bloat." },
    { number: "04", header: "Speed & Technical SEO Audit", text: "Configuring robust caching frameworks, object CDN links, and validating meta code structures to pass PageSpeed checks." },
    { number: "05", header: "Multi-device QA Testing", text: "Auditing forms layout and touch capabilities on over 25 hardware simulator sizes to secure perfect responsiveness." },
    { number: "06", header: "Live Launch & Continuous Support", text: "Migrating code files safely with zero server downtime, while mapping analytical pixel triggers." }
  ];

  const benefitsColumn = [
    { title: "Friendly Content Management", text: "Empower your corporate marketing department to rewrite, publish, and structure service pages without developer dependencies." },
    { title: "SEO-Centric CMS Architecture", text: "WordPress features robust native crawl formatting, easily readable URL slugs, and schema tags integrations out of the box." },
    { title: "Unparalleled Scalability", text: "Scale safely from a simple starter promotional page to a heavy marketplace with multiple vendors without database crashes." },
    { title: "Fluid Responsive Ratios", text: "Coded naturally on liquid grid scales so your site matches widescreen monitors and mobile devices seamlessly." },
    { title: "Vast Ecosystem Integrations", text: "Easily synchronize active billing portals, automated lead trackers, email marketing lists, and CRM systems with active hooks." },
    { title: "WooCommerce Custom Ready", text: "Power customizable online catalogs, secure localized payments, custom shipping configurations, and dynamic checkouts." }
  ];

  const chooseAKGLSReasons = [
    { title: "Deep Technical WordPress Craft", desc: "No slow generic template packages. We author lightweight, super-clean, high-speed custom code for elite business websites." },
    { title: "SEO + Page Speed Prioritization", desc: "We optimize server parameters, compress files, and write lightweight CSS to pass premium Core Web Vitals targets." },
    { title: "Mobile-First Accessibility Focus", desc: "Every component is styled responsive past standard touch thresholds (44px target sizes) to eliminate visitor friction." },
    { title: "Enterprise-Level Security Standards", desc: "We lock down security pathways, deploy custom firewalls, disable entry vulnerability points, and establish secure backups." },
    { title: "AI-Ready Layout Architectures", desc: "Prepare your site's structure for modern search engine crawls, digital assistants, and chatbot modules smoothly." },
    { title: "True Support Engineers Available", desc: "Access transparent tech professionals directly when you need to configure systems instead of generic ticketing support queues." }
  ];

  const standardWPFeaturesIncluded = [
    { title: "Modern Mobile Layouts", desc: "Adaptive CSS setups ensuring perfect rendering across all devices." },
    { title: "Premium SEO Hardening", desc: "Semantic code header indices, nested schema formats, and fast XML sitemaps." },
    { title: "Advanced Speed Caching", desc: "Configured caching policies and files optimization using premium modern plugins." },
    { title: "SSL & Security Armor", desc: "Firewall setup, custom admin access URLs, and secure brute-force blockers." },
    { title: "Dynamic Lead Forms", desc: "Lightweight contact templates featuring automated bot defense mechanisms." },
    { title: "Google Analytics & Pixel Tracking", desc: "Real-time user engagement monitoring and visitor goal tracking setup." },
    { title: "Daily Scheduled Backups", desc: "Secure offsite cloud backup scripts protecting files consistently." },
    { title: "Social Integrations", desc: "Elegant social sharing buttons and responsive profile icons." },
    { title: "User Instruction Training Guides", desc: "Easy to digest visual guides empowering your team to manage content effortlessly." }
  ];

  const packagesPricing = [
    {
      level: "Starter Launch",
      price: selectedLicenseYearly ? 1490 : 1690,
      badge: "Perfect for SMEs",
      description: "Quick business presence layout designed specifically for establishing direct visual credibility.",
      specs: [
        "Up to 5 custom-designed template pages",
        "Fully responsive on mobile, tablet & desktop",
        "Custom Gutenberg visual layout editor",
        "Elementary local SEO tags setup",
        "Core Web Vitals scores guaranteed 90+",
        "Secure launch checklist completed"
      ],
      cta: "Activate Starter Plan"
    },
    {
      level: "Premium Growth",
      price: selectedLicenseYearly ? 2990 : 3490,
      badge: "⭐ MOST DEMANDED",
      isPremium: true,
      description: "Comprehensive corporate or service setup built directly to convert PPC, Google Ads, and organic SEO traffic.",
      specs: [
        "Up to 12 bespoke customized pages",
        "Full WooCommerce integration (up to 50 items)",
        "Premium speed optimizing caching modules",
        "Custom Advanced fields dynamic content",
        "Automated structured service schema tags",
        "1 month elite developer launch support"
      ],
      cta: "Activate Growth Package"
    },
    {
      level: "Enterprise Scale",
      price: selectedLicenseYearly ? 5990 : 6990,
      badge: "Bespoke Powerhouse",
      description: "Custom-configured solution for heavy marketplaces, scalable SaaS setups, or multi-location brands.",
      specs: [
        "Unlimited visual custom-coded page templates",
        "Bespoke private security & plugin design",
        "CRM integration & payment processor setup",
        "Advanced CDN routing & cloud optimization",
        "3 months technical support retainer",
        "Dedicated senior development coordinator"
      ],
      cta: "Request Enterprise Scoping"
    }
  ];

  const faqsItems = [
    {
      q: "Why choose WordPress for our business instead of other website platforms?",
      a: "WordPress powers over 43% of the world's websites. It balances unparalleled global developer support, thousands of API integration paths, robust built-in SEO capabilities, and a user-friendly CMS that prevents you from being locked into an agency's proprietary software."
    },
    {
      q: "How much does professional WordPress development services cost at AKGLS Group?",
      a: "Our professional services scale to fit your goals. Our custom visual starter packages begin around $1,490, while comprehensive customized WooCommerce layouts or custom enterprise platforms are scoped directly based on functional criteria during consultation."
    },
    {
      q: "Will my custom WordPress website be fast enough to meet Core Web Vitals criteria?",
      a: "Absolutely. We reject generic, bulky pre-made templates that drag down loading times with unneeded code. We assemble layouts using clean code, native Tailwind structures, lightweight Gutenberg setups, and advanced backend optimization engines to achieve A-grades on performance tests."
    },
    {
      q: "Are we going to be able to edit page contents easily ourselves after launching?",
      a: "Yes. That is our absolute standard. We configure websites with the intuitive WordPress block editor or Elementor Pro, structuring clean templates where text, images, and portfolios can be updated in just a few clicks without relying on developer code edits."
    },
    {
      q: "Do you integrate custom secure online shopping baskets like WooCommerce?",
      a: "Yes, we are WooCommerce development experts. We design secure checkout systems, fluid AJAX shopping sliders, quick search filters, advanced pricing matrices, and configure payment options like Stripe or PayPal seamlessly."
    },
    {
      q: "Can you redesign our existing outdated website without losing our organic search rankings?",
      a: "We specialize in secure website redesigns. We perform comprehensive SEO audits before changing any code, map existing URLs with precise 301 redirects, maintain critical keyword hierarchies, and deliver polished designs that enhance both user conversions and search rankings."
    },
    {
      q: "What does your monthly WordPress maintenance and support plan cover?",
      a: "Our monthly proactive maintenance services ensure continuous system safety. Plans include daily database archiving, secure weekly security updates for core systems and plugins, performance audits, cloud backup management, malware checks, and live developer support."
    }
  ];

  return (
    <div className="bg-[#05070a] text-slate-300 min-h-screen relative font-sans leading-relaxed">
      
      {/* 📞 FLOATING CONTACT BAR */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="wp-whatsapp-sticky"
        >
          <MessageSquare className="w-4 h-4 text-white" fill="white" /> WP Tech Consulting: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-orange hover:bg-orange-500 text-white p-3.5 rounded-2xl shadow-xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-orange-500/20 transition-all font-mono"
          id="wp-phone-sticky"
        >
          <Phone className="w-4 h-4 text-white animate-pulse" /> Call WP Expert: {CONTACT_NUMBER}
        </a>
      </div>

      {/* 🌌 HERO SECTION WITH DYNAMIC WP PREVIEW INTERACTIVE PLATFORM */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-[#05070a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute top-10 left-10 w-[700px] h-[700px] bg-brand-orange/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full py-2 px-5 transition-colors cursor-pointer"
            id="back-from-wp-services"
          >
            ← Back to Home
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Info */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full py-1.5 px-4 font-bold text-[10px] uppercase tracking-wider font-mono">
                <Flame className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span>Elite Custom WordPress Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-black font-display leading-[1.08] tracking-tight">
                Professional WordPress <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-400">
                  Development Services <br />for Modern Brands
                </span>
              </h1>

              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                We craft beautiful, secure, SEO-hardened, and high-performance WordPress websites. Coded with lightning speed and custom visual layouts to turn clicks into conversions.
              </p>

              {/* Core Hero Badges list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 text-xs font-bold text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Bespoke Theme Architectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Lightweight Page Builders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>SEO Ready Google Crawling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Secured Cloudflare Integrations</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a 
                  href="#free-wordpress-consultation-form"
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  id="hero-wp-consult-btn-anchor"
                >
                  Get Free WordPress Consultation <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#wp-speed-benchmark"
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                  id="hero-wp-metrics-anchor"
                >
                  <Gauge className="w-4 h-4 text-brand-teal" /> View Performance Metrics
                </a>
              </div>

            </div>

            {/* Hero Right: INTERACTIVE WORDPRESS ECOSYSTEM & LAYOUT VIEWER */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                  <div className="flex items-center gap-1.5 font-mono text-[9px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse"></span>
                    <span className="text-slate-400 font-extrabold uppercase">INTERACTIVE GUTENBERG BLOCK PREVIEWER</span>
                  </div>
                  
                  <div className="flex gap-1.5 font-mono text-[9px]">
                    {Object.keys(gutenbergPresetMockups).map((k) => (
                      <button
                        key={k}
                        onClick={() => setGutenbergTheme(k as any)}
                        className={`py-1 px-2.5 rounded-full border cursor-pointer font-bold ${gutenbergTheme === k ? 'bg-brand-orange border-brand-orange text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                      >
                        {k.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Symmetrical screen preview displaying changes depending on user selection */}
                <div className={`relative h-72 md:h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-b ${currentTheme.bgClass} p-6 flex flex-col justify-between text-left transition-all duration-300 border border-slate-800`}>
                  
                  <div className="space-y-2">
                    <span className="text-[8.5px] font-mono text-brand-teal tracking-widest bg-brand-teal/15 border border-brand-teal/20 px-2.5 py-1 rounded inline-block font-bold">
                      {currentTheme.speed}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1.5">
                      {currentTheme.title}
                    </h3>
                    <p className="text-slate-305 text-xs font-light max-w-sm">
                      {currentTheme.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] text-slate-500 font-mono tracking-wider font-extrabold uppercase">DEVELOPER MODULES GATED:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentTheme.features.map((feat, i) => (
                        <span key={i} className="text-[9px] font-mono bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-lg text-slate-300">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[9.5px] text-slate-500 pt-3 border-t border-slate-900 font-mono">
                    <span>⚡ Light WordPress Asset Built</span>
                    <span className="text-brand-orange font-bold uppercase">AKGLS Group Craft</span>
                  </div>

                </div>

                <div className="text-center">
                  <p className="text-[10px] text-slate-500 font-mono tracking-wide uppercase">
                    ◄ Toggle preset buttons above to evaluate live speed structures ►
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🤝 TRUSTED BADGES & METRIC TILES */}
      <section className="py-12 bg-[#0a0f1d] border-b border-slate-900 text-center font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-1">
            <span className="text-[9.5px] text-slate-500 font-black uppercase tracking-widest block">WORDPRESS TECHNICAL ACCREDITATIONS</span>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-80 pt-2 text-slate-400 font-extrabold text-xs">
              <span className="border border-brand-orange/40 text-brand-orange py-1 px-3.5 rounded-full bg-brand-orange/5">★ 240+ WORDPRESS SITES COMPLETED</span>
              <span className="border border-slate-850 py-1 px-3.5 rounded-full">★ ECOSYSTEM SECURITY REINFORCED</span>
              <span className="border border-slate-850 py-1 px-3.5 rounded-full">★ ULTRA-LIGHT WEIGHT PAGES (SPEED GRADE A)</span>
              <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 rounded-full bg-brand-teal/5">★ ELEMENTOR PRO & GUTENBERG CERTIFIED</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-850 text-left text-xs">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">240+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">WORDPRESS HIGH-CONVERTING SITES</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-orange font-display block">85+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">WOOCOMMERCE SHOPS DEPLOYED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-display block">24+</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">GLOBAL SECTORS PROGRAMMED</span>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-brand-teal font-display block">98%</span>
              <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">AVERAGE SPEED LOAD BOOST GAINED</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🧭 WHAT IS WORDPRESS DEVELOPMENT CMS OVERVIEW */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explainer Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                SCALABILITY BRIEF
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight">
                What Are Professional WordPress Development Services?
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                WordPress is the absolute dominant engine of the modern web, powering over 43% of all global systems. True professional WordPress development goes far deeper than simply slapping a visual template onto a server. 
                <br /><br />
                It means engineering custom code structures, styling optimized Gutenberg block elements, keeping database queries lightweight, and building secure WooCommerce frameworks that drive transaction margins, with high speeds and seamless mobile touch adaptability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider font-extrabold block">LEGACY BLOATED SITES</span>
                  <p className="text-[#a0aab8] leading-snug">Rely on excessive heavy pre-made themes, outdated plugins, and messy page builders that trigger severe system speed lag.</p>
                </div>
                <div className="p-4 bg-brand-orange/5 border border-brand-orange/25 rounded-xl space-y-1">
                  <span className="text-brand-orange text-[9px] uppercase tracking-wider font-extrabold block">AKGLS EXPERT WP CRAFT</span>
                  <p className="text-slate-350 leading-snug">Lightweight custom semantic coding, optimized caching configurations, structured schema tags, and high responsive layout limits.</p>
                </div>
              </div>

            </div>

            {/* Visual Right graphic ecosystem */}
            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 space-y-4">
                <h3 className="text-white font-extrabold font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 pb-2.5 border-b border-slate-850">
                  <Terminal className="w-4 h-4 text-brand-orange" /> Symmetrical WordPress Ecosystem
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-[9.5px] shrink-0">1</span>
                    <div>
                      <h4 className="text-white font-bold">Custom Database Optimization</h4>
                      <p className="text-slate-500 text-[10.5px]">Restructuring redundant visual queries to enable database rows to process instantly.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-teal text-slate-950 flex items-center justify-center font-bold text-[9.5px] shrink-0">2</span>
                    <div>
                      <h4 className="text-white font-bold">Secure API & Hook Configurations</h4>
                      <p className="text-slate-500 text-[10.5px]">Direct connections to business CRMs, marketing platforms, and third-party accounting modules.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-[9.5px] shrink-0">3</span>
                    <div>
                      <h4 className="text-white font-bold">Responsive Custom Block Prototyping</h4>
                      <p className="text-slate-500 text-[10.5px]">Engineering lightweight visual layouts that your marketing department can edit on-demand.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🛠️ ENHANCED WORDPRESS SERVICE GRID */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              DEVELOPMENT SCOPE
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Professional WordPress Development
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We program lightweight backends and responsive frontends that maintain elite page speeds while making search index indexing easy.
            </p>
          </div>

          {/* Grid Layout of services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {webServicesList.map((srv, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-3xl p-6 hover:border-slate-800 transition-all flex flex-col justify-between" id={`wp-service-grid-card-${idx}`}>
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
                  <div className="space-y-1.5">
                    <h3 className="text-lg text-white font-black font-display">{srv.title}</h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">{srv.desc}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900">
                  <span className="text-[8.5px] uppercase font-mono font-black text-slate-500 block mb-1.5">Elite Standards Included:</span>
                  <div className="flex flex-wrap gap-2">
                    {srv.bullets.map((b, bIdx) => (
                      <span key={bIdx} className="text-brand-teal font-mono text-[9px] font-bold">✓ {b}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔮 WORDPRESS TYPES WE DEVELOP SITE CARDS */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              WEBSITE ARCHITECTURES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              WordPress Website Types We Develop
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We design and construct custom responsive models specialized for target industries and growth strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {websiteCategories.map((t, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-855 rounded-2xl p-5 hover:border-slate-800 transition-all flex flex-col justify-between" id={`wp-type-card-${idx}`}>
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0c121e] border border-slate-800 flex items-center justify-center font-bold font-mono text-xs text-brand-orange">
                    {idx + 1}
                  </div>
                  <h3 className="text-white font-bold text-xs uppercase font-mono">{t.name}</h3>
                  <p className="text-slate-500 font-light text-[10.5px] leading-relaxed">{t.benefit}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STEP OPERATIONAL MIGRATION & DEV BLUEPRINT */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-orange font-extrabold uppercase bg-brand-orange/15 px-4.5 py-1 rounded-full border border-brand-orange/25">
              DEV FLOW PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white leading-tight">
              Our WordPress Development Process
            </h2>
            <p className="text-slate-420 font-light text-xs sm:text-sm">
              An assembly pipeline structured precisely to deliver stunning user interfaces that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentSteps.map((ph, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-56 hover:border-slate-800 transition-all" id={`wp-process-card-${idx}`}>
                <span className="text-4xl font-black text-slate-800/40 block leading-none">{ph.number}</span>
                <div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wide mb-1.5 pb-1 border-b border-slate-900">{ph.header}</h3>
                  <p className="text-slate-500 font-light text-[11px] leading-relaxed">{ph.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 WORDPRESS SPEED BENCHMARK INTERACTIVE SIMULATOR */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left" id="wp-speed-benchmark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explainer Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                CORE WEB VITALS PERFORMANCE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black font-display text-white leading-tight">
                Fast & High-Performance WordPress Websites
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm">
                Google organic algorithms and PPC structures rank instantly loading sites higher in incoming lists. We bypass outdated heavy themes, compress visuals, integrate high caching headers, and strip redundant assets.
              </p>

              <div className="flex gap-3 font-mono text-xs pt-2">
                <button
                  onClick={() => setSpeedState('optimized')}
                  className={`py-2.5 px-5 rounded-full border font-bold transition-all cursor-pointer ${
                    speedState === 'optimized'
                      ? 'bg-brand-orange border-brand-orange text-white'
                      : 'bg-[#0d121f] border-slate-800 text-slate-400'
                  }`}
                  id="wp-speed-opt-btn"
                >
                  ⚡ Optimized AKGLS Code
                </button>
                <button
                  onClick={() => setSpeedState('unoptimized')}
                  className={`py-2.5 px-5 rounded-full border font-bold transition-all cursor-pointer ${
                    speedState === 'unoptimized'
                      ? 'bg-red-950/20 border-red-500/40 text-red-400 font-black'
                      : 'bg-[#0d121f] border-slate-800 text-slate-400'
                  }`}
                  id="wp-speed-unopt-btn"
                >
                  ☒ Bulky Pre-made Theme
                </button>
              </div>
            </div>

            {/* Performance Graphic Right */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b1323] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                
                <div className="flex justify-between items-center pb-3 border-b border-slate-850">
                  <span className="text-[9.5px] font-mono text-slate-400 tracking-wider">MOCK SPEED SCORE SIMULATOR</span>
                  <span className="text-xs font-mono text-[#4b586d]">GTmetrix Benchmark</span>
                </div>

                {speedState === 'optimized' ? (
                  <div className="space-y-4 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-mono text-xs font-bold uppercase">PAGE SPEED INDEX:</span>
                      <span className="text-4xl font-black font-mono text-brand-teal">99% (Grade A)</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between font-mono text-[10px] text-slate-400">
                        <span>First Contentful Paint (FCP)</span>
                        <span className="text-brand-teal font-black">0.4s</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-teal w-[99%]" />
                      </div>
                    </div>

                    <div className="p-4 bg-brand-teal/5 border border-brand-teal/20 rounded-xl font-mono text-[11px] text-brand-teal">
                      ✓ Passes all core vitals with optimized CSS delivery pipelines and advanced cache setups.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-mono text-xs font-bold uppercase">PAGE SPEED INDEX:</span>
                      <span className="text-4xl font-black font-mono text-red-500">38% (Grade F)</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between font-mono text-[10px] text-slate-400 animate-pulse">
                        <span>First Contentful Paint (FCP)</span>
                        <span className="text-red-400 font-black">4.2s (Severe Delay)</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[38%]" />
                      </div>
                    </div>

                    <div className="p-4 bg-red-950/15 border border-red-900/40 rounded-xl font-mono text-[11px] text-red-400">
                      ⚠️ 18 unused visual plugin scripts, non-optimized media uploads, and server database delay detected.
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits grid details why choose WordPress */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              CMS ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Why Choose WordPress for Your Site?
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We leverage built-in framework systems to deliver flexible websites designed to achieve business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsColumn.map((b, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-6 hover:border-slate-800 transition-all space-y-3" id={`wp-benefit-${idx}`}>
                <div className="w-8 h-8 rounded-lg bg-[#0c121e] border border-slate-800 flex items-center justify-center font-bold font-mono text-xs text-brand-teal">
                  ✓
                </div>
                <h3 className="text-white font-bold text-sm uppercase font-mono">{b.title}</h3>
                <p className="text-slate-400 font-light text-xs leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🚀 TRENDING: AI-READY WORDPRESS DEVELOPMENT INTEGRATIONS */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Left Graph */}
            <div className="lg:col-span-6 relative">
              <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
              <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 space-y-5">
                <span className="text-[8.5px] font-mono text-brand-orange border border-brand-orange/20 px-2.5 py-1 rounded inline-block">
                  ★ GEO + AEO ACTIVE COMPLIANCE
                </span>
                <h3 className="text-xl md:text-2xl font-black font-display text-white mt-1">
                  AI-Ready WordPress Schema
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  We program semantic JSON-LD structures to format site data, making it readily searchable and indexable by modern digital engines and chatbot engines.
                </p>

                {/* Simulated schema module code display */}
                <div className="bg-slate-950 rounded-xl p-4 border border-slate-900 relative">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-900 mb-2 font-mono text-[9.5px]">
                    <span className="text-brand-orange font-bold font-mono">GEO_SEO_SCHEMA_TAGS.json</span>
                    <button 
                      onClick={() => performSchemaCopy(wordpressSchemaTemplates.service, 'service-schema')}
                      className="text-[9.5px] text-[#42b78a] hover:underline cursor-pointer flex items-center gap-1 font-mono"
                    >
                      {copiedKey === 'service-schema' ? '✓ Copied!' : 'Copy Schema'}
                    </button>
                  </div>
                  <pre className="text-[9px] text-[#22c55e] font-mono leading-tight overflow-x-auto max-h-36">
                    {`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WordPress Engineering",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group"
  },
  "areaServed": "Global"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Explanation Right */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20 animate-pulse">
                FUTURE-PROOF COMPLIABLE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black font-display text-white leading-tight">
                AI-Ready WordPress Website Development
              </h2>
              <p className="text-[#96a5b8] font-light text-xs sm:text-sm">
                The indexing landscape is shifting rapidly. Websites must present factual data structures formatted cleanly to feed modern query models, chatbots, and AI search crawlers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                  <h4 className="text-white font-bold text-xs uppercase">Conversational Chatbots</h4>
                  <p className="text-slate-500 text-[10.5px]">Integrating advanced custom chat models directly into layouts with localized styling features.</p>
                </div>
                <div className="p-4 bg-slate-900/40 border border-[#1e2e4e]/50 rounded-xl space-y-1">
                  <h4 className="text-white font-bold text-xs uppercase">AEO Readiness Markup</h4>
                  <p className="text-slate-500 text-[10.5px]">Structuring layout content tags perfectly to format correctly on conversational voice systems.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* INDUSTRIES SECTOR LIST */}
      <section className="py-20 bg-[#0a0f1d] border-b border-slate-900 text-left font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-850 pb-8 mb-10 gap-4">
            <div>
              <span className="text-brand-orange uppercase text-[9.5px] font-black tracking-widest block">INDUSTRIES SERVED GENTLY</span>
              <h2 className="text-2xl md:text-3.5xl font-black font-display text-white mt-1">WordPress Development for Every Industry</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-9 gap-4 text-center font-bold text-slate-400">
            <span className="p-3 bg-slate-950 border border-slate-850 rounded-xl">Healthcare</span>
            <span className="p-3 bg-slate-950 border border-slate-850 rounded-xl">Ecommerce</span>
            <span className="p-3 bg-slate-950 border border-slate-850 rounded-xl text-brand-orange">Education</span>
            <span className="p-3 bg-slate-950 border border-slate-850 rounded-xl">Real Estate</span>
            <span className="p-3 bg-[#0d121f] border border-brand-orange/30 text-white rounded-xl">Manufacturing</span>
            <span className="p-3 bg-slate-950 border border-slate-850 rounded-xl">SaaS</span>
            <span className="p-3 bg-slate-950 border border-slate-850 rounded-xl">IoT Teams</span>
            <span className="p-3 bg-slate-950 border border-slate-850 rounded-xl">Legal Firms</span>
            <span className="p-3 bg-[#0a151b] border border-brand-teal/20 text-brand-teal rounded-xl">Restaurants</span>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES WE USE GRID COORDS */}
      <section className="py-12 bg-[#05070a] border-b border-slate-900 text-left font-mono text-[10.5px] text-slate-500 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[9.5px] text-slate-500 font-extrabold uppercase tracking-widest block text-center">CORE TECHNOLOGIES & TOOLS WE USE DAILY</span>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3 text-center text-slate-350 font-bold">
            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl">WordPress Core</div>
            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl">WooCommerce</div>
            <div className="p-3.5 bg-[#001c2c] border border-sky-600/20 text-sky-400 rounded-xl">Elementor Pro</div>
            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl">Gutenberg</div>
            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl">ACF Pro</div>
            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl">WP Rocket</div>
            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl">Cloudflare CDN</div>
            <div className="p-3.5 bg-[#1a0e1b] border border-purple-500/20 text-purple-400 rounded-xl">Figma UI</div>
            <div className="p-3.5 bg-[#051c14] border border-emerald-500/20 text-emerald-400 rounded-xl">Tailwind CSS</div>
            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl">React / JS</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP FOR WORDPRESS */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              AKGLS USP ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Why Choose AKGLS Group for WordPress?
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We reject bloated templates and write high-speed, secure, custom-authored systems designed for elite business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chooseAKGLSReasons.map((us, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-6 hover:border-slate-800 transition-all space-y-2" id={`wp-usp-card-${idx}`}>
                <h3 className="text-white font-black font-display text-base">{us.title}</h3>
                <p className="text-slate-400 font-light text-xs leading-relaxed">{us.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STANDARD CARRIED CODES FEATURES FOR EACH WEBSITE */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-teal font-mono font-black uppercase tracking-widest bg-brand-teal/15 px-4.5 py-1.5 rounded-full border border-brand-teal/20 animate-pulse">
              QUALITATIVE STANDARDS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Features Included in Every Website
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              We deploy absolute core features across our WordPress systems to guarantee system integrity from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardWPFeaturesIncluded.map((f, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 p-5 rounded-xl space-y-1.5" id={`wp-included-feat-${idx}`}>
                <h4 className="text-white font-mono text-xs uppercase font-extrabold tracking-wide flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" /> {f.title}
                </h4>
                <p className="text-slate-500 font-light text-xs leading-relaxed pl-6">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MOCK PORTFOLIO / CASE SHOWCASER SLIDER */}
      <section className="py-20 bg-[#0a0f1d] border-b border-slate-900 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-brand-orange text-[9.5px] font-mono font-black uppercase tracking-widest block">CREATIVE DESIGN PROTOTYPING</span>
              <h2 className="text-3xl md:text-4.5xl font-black font-display text-white mt-1">Our WordPress Development Portfolio</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-850 rounded-3xl p-6 space-y-4">
              <div className="h-48 w-full bg-[#1a0f0d] rounded-2xl flex items-center justify-center border border-slate-900 font-mono text-xs relative overflow-hidden">
                <span className="text-[9px] font-mono text-brand-teal border border-brand-teal/30 bg-brand-teal/10 px-2.5 py-1 rounded absolute top-3 left-3">✓ SPEED LOADED: 99</span>
                <span className="text-slate-400 font-bold uppercase block text-center">Apex Luxury Furniture Store <br /><span className="text-[10px] text-slate-500 font-mono font-light mt-1 block">WooCommerce Platform</span></span>
              </div>
              <h3 className="text-white font-black text-lg">Apex Luxury Global Storefront</h3>
              <p className="text-slate-400 text-xs font-light">Complete transactional UI catalog setup processing over 50,000 monthly transactions easily with zero latency limits.</p>
            </div>

            <div className="bg-slate-950 border border-slate-850 rounded-3xl p-6 space-y-4">
              <div className="h-48 w-full bg-[#1a2b2b]/30 rounded-2xl flex items-center justify-center border border-slate-900 font-mono text-xs relative overflow-hidden">
                <span className="text-[9px] font-mono text-brand-teal border border-brand-teal/30 bg-brand-teal/10 px-2.5 py-1 rounded absolute top-3 left-3">✓ SPEED LOADED: 100</span>
                <span className="text-slate-400 font-bold uppercase block text-center">Sundance Energy SA <br /><span className="text-[10px] text-slate-500 font-mono font-light mt-1 block">Enterprise Corporate Portal</span></span>
              </div>
              <h3 className="text-white font-black text-lg">Sundance Global Corporate Hub</h3>
              <p className="text-slate-455 text-xs font-light">Polished custom block designs showcasing real-time asset data, and capturing corporate lead listings securely.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECURITY & PROACTIVE MAINTENANCE SYSTEMS */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-orange font-mono text-[9px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                CONTINUOUS WEBSITE SAFETY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black font-display text-white leading-tight">
                WordPress Security & Maintenance Services
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Keeping a digital website healthy requires persistent visual checks. Outdated systems, plugins, and PHP parameters trigger severe server indexing speeds and open vulnerability corridors. We prevent crashes.
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                {maintenanceDeliverables.map((del, iId) => (
                  <div key={iId} className="flex items-center gap-2 text-slate-350">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 md:p-8 text-left font-mono text-xs">
                <span className="text-[8.5px] uppercase text-brand-teal font-extrabold tracking-widest block mb-1">SYSTEM MAINTENANCE RETAINER</span>
                <h4 className="text-white text-sm font-bold pb-2 border-b border-slate-900 mb-4">Elite Support Retainers</h4>
                <p className="text-slate-500 text-[10.5px] mb-4">
                  AKGLS offers comprehensive monthly maintenance plans to protect your database assets, update CMS core scripts safely, and perform layout modifications.
                </p>
                <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-500 block">SUPPORT PLAN STARTS:</span>
                    <span className="text-white font-extrabold text-sm">$120 / Month</span>
                  </div>
                  <a href="#free-wordpress-consultation-form" className="bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider py-2 px-4 rounded-lg">Configure Retainer</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 💳 FLEXIBLE PACKAGES SECTION */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              TRANSPARENT PRICING PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              Flexible WordPress Packages
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              Select an adjustable WordPress pricing plan tailored to meet your direct conversion limits.
            </p>

            {/* License Switcher button */}
            <div className="flex justify-center items-center gap-3 pt-4">
              <span className={`text-xs font-mono font-bold ${!selectedLicenseYearly ? 'text-white' : 'text-slate-500'}`}>Standard Monthly</span>
              <button 
                onClick={() => setSelectedLicenseYearly(!selectedLicenseYearly)}
                className="w-12 h-6 bg-[#0c121f] rounded-full border border-slate-800 relative cursor-pointer flex items-center p-0.5 transition-all"
              >
                <div className={`w-4.5 h-4.5 bg-brand-orange rounded-full transition-transform ${selectedLicenseYearly ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span className={`text-xs font-mono font-bold ${selectedLicenseYearly ? 'text-brand-teal' : 'text-slate-500'}`}>Yearly Retained (Save 20%)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
            {packagesPricing.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col justify-between rounded-3xl p-6 md:p-8 transition-all hover:border-slate-800 ${
                  pkg.isPremium 
                    ? 'bg-[#0c121e] border border-brand-orange/40 shadow-xl' 
                    : 'bg-slate-950 border border-slate-850'
                }`}
                id={`wp-pricing-card-${idx}`}
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-black text-slate-500 uppercase tracking-widest block">{pkg.level}</span>
                    <span className="text-[9px] font-mono font-black text-brand-orange uppercase tracking-wider bg-brand-orange/5 border border-brand-orange/30 py-0.5 px-3 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-4xl font-extrabold font-mono text-white">${pkg.price}</span>
                    <span className="text-xs text-slate-500 font-mono block">One-time installation fee</span>
                  </div>

                  <p className="text-slate-455 text-xs font-light leading-relaxed">{pkg.description}</p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-900">
                    <span className="text-[8.5px] uppercase text-slate-500 font-mono font-black block">SYSTEM SPECS DELIVERED:</span>
                    {pkg.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-350">
                        <Check className="w-4 h-4 text-brand-teal shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="#free-wordpress-consultation-form" 
                    className={`w-full text-center py-3.5 px-4 rounded-xl text-xs font-mono font-black uppercase tracking-wider block transition-all ${
                      pkg.isPremium 
                        ? 'bg-brand-orange text-white hover:bg-opacity-95' 
                        : 'bg-[#0c121e] border border-slate-800 text-white hover:border-slate-700'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION ACCORDION */}
      <section className="py-20 md:py-28 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-brand-orange font-mono font-black uppercase tracking-widest bg-brand-orange/15 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
              LEARNING RESOURCE
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white">
              WordPress FAQs
            </h2>
            <p className="text-slate-455 font-light text-xs sm:text-sm">
              Clear, objective technical answers detailing how custom WordPress layouts scale business outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {faqsItems.map((fq, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-855 rounded-2xl overflow-hidden" id={`wp-faq-${idx}`}>
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center text-white cursor-pointer hover:bg-[#0c121e] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-black font-mono uppercase tracking-wide pr-4">{fq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-300 shrink-0 ${openFaqIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaqIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-slate-900 font-light text-slate-400 text-xs leading-relaxed">
                        {fq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📧 FREE WEBSITE TECHNICAL CONSULTATION AUDIT FORM */}
      <section className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-900 text-left" id="free-wordpress-consultation-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-orange font-mono text-[9px] font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
                ACTIVE STRATEGY DEBRiEF
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-black font-display text-white leading-tight">
                Get a Free WordPress Consultation
              </h2>
              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                Connect directly with our senior development architects to review layout structures, address current technical bottlenecks, map Core Web Vitals targets, and receive custom plugin recommendations.
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold">1:1 Website Strategy Blueprint</h4>
                    <p className="text-slate-500 text-[10.5px]">Detailed outline mapped exactly to support your brand conversion goals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold">Comprehensive Core Web Vitals audit</h4>
                    <p className="text-slate-500 text-[10.5px]">Friction point analysis reviewing asset configurations and code structures.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form panel Column */}
            <div className="lg:col-span-7">
              <div className="bg-[#05070a] rounded-3xl p-6 md:p-8 border border-slate-850 shadow-3xl relative">
                
                <h3 className="text-white font-black font-display text-lg pb-3 border-b border-slate-900 mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-brand-orange" /> Schedule Professional Scoping Session
                </h3>

                {consultSubmitted ? (
                  <div className="p-8 bg-brand-teal/5 border border-brand-teal/20 rounded-2xl text-center space-y-4 font-mono">
                    <span className="unicode text-5xl text-brand-teal block">✓</span>
                    <h4 className="text-white font-bold text-base">Strategy Request Submitted!</h4>
                    <p className="text-slate-400 text-xs max-w-sm mx-auto">
                      Thank you for submitting your WordPress specs. A senior AKGLS layout architect will contact you via email inside the next 12 operational hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="space-y-4 text-xs font-mono">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-slate-500 font-bold uppercase tracking-wider">YOUR FULL NAME:</label>
                        <input 
                          type="text" 
                          required
                          value={consultForm.name} 
                          onChange={(e) => setConsultForm({...consultForm, name: e.target.value})}
                          placeholder="Shashi Prabha Singh"
                          className="w-full bg-[#0d121f] border border-slate-850 rounded-xl p-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-orange text-xs"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-500 font-bold uppercase tracking-wider">CURRENT WEBSITE URL (OPTIONAL):</label>
                        <input 
                          type="url" 
                          value={consultForm.website} 
                          onChange={(e) => setConsultForm({...consultForm, website: e.target.value})}
                          placeholder="https://mycorp.com"
                          className="w-full bg-[#0d121f] border border-slate-850 rounded-xl p-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-orange text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-slate-500 font-bold uppercase tracking-wider">YOUR BUSINESS SECTOR:</label>
                        <select
                          value={consultForm.bizType} 
                          onChange={(e) => setConsultForm({...consultForm, bizType: e.target.value})}
                          className="w-full bg-[#0d121f] border border-slate-850 rounded-xl p-3.5 text-white focus:outline-none focus:border-brand-orange text-xs"
                        >
                          <option>SaaS / Tech</option>
                          <option>Ecommerce / Online Shop</option>
                          <option>Corporate Enterprise</option>
                          <option>Real Estate & Listings</option>
                          <option>Educational Services</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-500 font-bold uppercase tracking-wider">SECURE BUSINESS EMAIL:</label>
                        <input 
                          type="email" 
                          required
                          value={consultForm.email} 
                          onChange={(e) => setConsultForm({...consultForm, email: e.target.value})}
                          placeholder="shashisingh447@gmail.com"
                          className="w-full bg-[#0d121f] border border-slate-850 rounded-xl p-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-orange text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-500 font-bold uppercase tracking-wider">REQUIRED WORDPRESS SYSTEM FEATURES:</label>
                      <textarea 
                        rows={3}
                        value={consultForm.features} 
                        onChange={(e) => setConsultForm({...consultForm, features: e.target.value})}
                        placeholder="e.g. Bespoke portfolio layout, AJAX WooCommerce checkout, HubSpot hooks..."
                        className="w-full bg-[#0d121f] border border-slate-850 rounded-xl p-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-orange text-xs"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-[#4b586d]">
                      <input 
                        type="checkbox" 
                        id="form-agreed" 
                        checked={consultForm.agreed} 
                        onChange={(e) => setConsultForm({...consultForm, agreed: e.target.checked})}
                        className="rounded border-slate-800 text-brand-orange focus:ring-0" 
                      />
                      <label htmlFor="form-agreed" className="text-[10px]">I agree to receive tactical WordPress optimization suggestions via secure mail.</label>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                      id="wp-consult-submit-btn"
                    >
                      Retrieve Free Design Proposal <Send className="w-4 h-4 text-white" />
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 📝 SUGGESTED HELPFUL BLOG ARTICLES ELEMENT */}
      <section className="py-20 bg-[#05070a] border-b border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-brand-orange text-[9.5px] font-mono font-black uppercase tracking-widest block">LEARNING MATERIAL</span>
              <h2 className="text-2xl md:text-3.5xl font-black font-display text-white mt-1">Suggested Resources</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 border border-slate-855 rounded-2xl p-5 space-y-3">
              <span className="text-[9.5px] text-brand-orange font-bold">1 // COMPARATIVE MANUAL</span>
              <h3 className="text-white font-bold uppercase">WordPress vs Shopify</h3>
              <p className="text-slate-500 font-light leading-relaxed">Evaluating backend structural differences, payment integration costs, and database scaling limits for online merchants.</p>
            </div>
            <div className="bg-slate-950 border border-slate-855 rounded-2xl p-5 space-y-3">
              <span className="text-[9.5px] text-brand-orange font-bold">2 // SPEED HARNESSING</span>
              <h3 className="text-white font-bold uppercase">WordPress speed optimization</h3>
              <p className="text-slate-500 font-light leading-relaxed">Core visual steps to configure Cloudflare caching pathways and eliminate redundant theme layouts to pass Google limits.</p>
            </div>
            <div className="bg-slate-950 border border-slate-855 rounded-2xl p-5 space-y-3">
              <span className="text-[9.5px] text-brand-orange font-bold">3 // DESIGN SYSTEMS</span>
              <h3 className="text-white font-bold uppercase">SEO-friendly WordPress setup</h3>
              <p className="text-slate-500 font-light leading-relaxed">Guiding layout developers to map schema elements and nested headings to achieve secure rankings inside automated crawls.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 FINAL CTA COMPONENT */}
      <section className="py-24 bg-[#0a0f1d] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <span className="text-brand-orange font-mono text-[9.5px] font-black uppercase tracking-widest bg-brand-orange/10 px-4.5 py-1.5 rounded-full border border-brand-orange/20">
            SECURE LIVE DECREE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-display text-white leading-tight">
            Ready to Build a Powerful <br />WordPress Website?
          </h2>

          <p className="text-slate-400 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Our expert senior WordPress technical coordinators are ready to translate your custom brand targets into an elite, responsive speed layout.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a 
              href="#free-wordpress-consultation-form" 
              className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl block transition-all shadow-xl"
            >
              Book WordPress Consultation
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl block transition-all"
            >
              WhatsApp Support Thread
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-[10px] text-slate-500 font-mono">
            <span>✓ SEO & UX Focused</span>
            <span>✓ Transparent Pricing Schemes</span>
            <span>✓ Dedicated Development Crew</span>
          </div>

        </div>
      </section>

    </div>
  );
}

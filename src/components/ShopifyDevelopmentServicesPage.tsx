import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Film, Heart, Share2,
  Building2, Landmark, GraduationCap, Truck, Stethoscope, Factory, ShoppingCart, 
  Laptop, Layout, Paintbrush, ArrowUpRight, HelpCircle as HelpIcon, Layers3
} from 'lucide-react';

interface ShopifyDevelopmentServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const shopifySchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Shopify Development & E-commerce Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "High-speed custom Shopify & Shopify Plus theme design, WooCommerce migration, custom app integration, and AI-driven checkout conversion optimization."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why should I choose Shopify for my B2B or D2C brand?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shopify is the most scalable, secure, and user-friendly platform, powering over 2 million stores globally. It handles high-traffic surges beautifully, provides built-in PCI compliance, and supports unlimited custom merchant integrations easily."
    }
  }]
}`
};

export default function ShopifyDevelopmentServicesPage({ onBackToHome, openProposalForm }: ShopifyDevelopmentServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Shopify Development Services | Shopify Store Development Company | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // E-commerce ROI Calculator States
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(30000);
  const [conversionRate, setConversionRate] = useState<number>(1.5);
  const [averageOrderValue, setAverageOrderValue] = useState<number>(75);
  
  const [roiOutputs, setRoiOutputs] = useState({
    monthlySales: 450,
    monthlyRevenue: 33750,
    optimizedSales: 900,
    optimizedRevenue: 67500,
    revenueGrowth: 33750
  });

  // Calculate stats on parameter change
  useEffect(() => {
    const monthlySales = Math.round(monthlyTraffic * (conversionRate / 100));
    const monthlyRevenue = Math.round(monthlySales * averageOrderValue);

    // Optimized scenario (usually doubles conversion rate or improves by 1.5% abs minimum via AKGLS development)
    const optimizedConvRate = conversionRate * 2 > 5.0 ? 5.0 : parseFloat((conversionRate * 2).toFixed(1));
    const optimizedSales = Math.round(monthlyTraffic * (optimizedConvRate / 100));
    const optimizedRevenue = Math.round(optimizedSales * averageOrderValue);
    const revenueGrowth = optimizedRevenue - monthlyRevenue;

    setRoiOutputs({
      monthlySales,
      monthlyRevenue,
      optimizedSales,
      optimizedRevenue,
      revenueGrowth
    });
  }, [monthlyTraffic, conversionRate, averageOrderValue]);

  // Performance Gauge Switcher
  const [speedOptimizationApplied, setSpeedOptimizationApplied] = useState<boolean>(true);

  // FAQ collapse state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 1800);
  };

  // Consultation Form state
  const [consultForm, setConsultForm] = useState({
    name: '',
    businessName: '',
    website: '',
    requirements: 'Custom Shopify Store Setup',
    email: '',
    phone: '',
  });
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handleConsultSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consultForm.name || !consultForm.email || !consultForm.businessName) return;
    setConsultSubmitted(true);
  };

  const industriesWeServe = [
    { label: "Fashion & Apparel", text: "Stunning product catalogs, interactive size charts, instant cart drawer modules, and frictionless clothing variations styling." },
    { label: "Beauty & Cosmetics", text: "Engaging subscription options, shoppable ingredient grids, user-review carousels, and high-conversion skincare routines checkers." },
    { label: "Electronics & Tech", text: "Comprehensive spec comparison sheets, product variation filters, dynamic warranties addons, and advanced custom meta fields." },
    { label: "Food & Beverage", text: "Subscription shipping schedules, delivery location checkers, automated perishable tax modules, and dynamic multi-pack builders." },
    { label: "Healthcare & Supplements", text: "Interactive trust indicators, compliance seals integration, dynamic ingredient disclosure lists, and automated monthly subscription plans." },
    { label: "Furniture & Home Decor", text: "Immersive image galleries, custom shipping weight rules, heavy freight integration hooks, and localized 3D model support layers." },
    { label: "Jewelry & Luxury Goods", text: "Ultra-clean high-contrast interfaces, secure authentication indicators, precise ring size grids, and tailored premium courier shipping API hooks." },
    { label: "Fitness & Wellness Brands", text: "Pre-integrated checkout bundle discounts, multi-tiered digital class subscriptions, weight-selection matrix, and clean ambassador codes tracking." },
    { label: "Premium Pet Products", text: "Pet-centric personalized subscription boxes, auto-reorder intervals setup, custom pet bio forms, and bulk wholesale discount tier configurations." }
  ];

  const shopifyServicesList = [
    {
      title: "1. Custom Shopify Store Development",
      badge: "⭐ Core Service",
      desc: "Get an custom-tailored Shopify or Shopify Plus architecture setup entirely from blueprint models. Fully customized navigation, structured collections, and conversion-optimized customer layout.",
      benefit: "Delivers an individual, scalable brand presence with zero cookie-cutter boilerplate files, increasing buyer trust limits."
    },
    {
      title: "2. Shopify Theme Development & Customization",
      badge: "Performance First",
      desc: "Responsive Theme design utilizing clean Liquid architecture, ensuring page weights remain minimal and speeds are lightning-fast. Highly optimized for mobile shopping screens.",
      benefit: "Bypasses pre-purchased bloated themes to supply clean code with direct and rapid loading scores across all hardware models."
    },
    {
      title: "3. Shopify Plus Enterprise Solutions",
      badge: "Enterprise Tech",
      desc: "For high-volume merchants, we scale checkout routines via Shopify checkout extensibility, write custom Shopify Functions, and setup advanced flow automations.",
      benefit: "Reduces operational overhead and ensures your store handles massive multi-million user sales events flawlessly."
    },
    {
      title: "4. Risk-Free Shopify Migration Services",
      badge: "Data Integrity",
      desc: "Migrate safely from WooCommerce, Magento, BigCommerce, or Custom PHP systems. We orchestrate clean SEO map routing, customers data sync, and image preservation.",
      benefit: "Zero down-time transition with complete SEO preservation, safeguarding organic visibility during migration."
    },
    {
      title: "5. Custom Shopify App Development",
      badge: "API Integrations",
      desc: "When default apps slow down your store or fall short of complex requirements, we write custom React/Node.js apps natively hosted with Shopify API pipelines.",
      benefit: "Provides unique merchant tools, complex bulk pricing matrices, or delivery calculation features without heavy third-party app delays."
    },
    {
      title: "6. Technical Shopify SEO Optimization",
      badge: "Organic Search",
      desc: "Structured schema setups, semantic page templates, dynamic sitemap control, crawl budget optimization, and meticulous tag structure audits.",
      benefit: "Pushes your product lists straight to Google Merchant Center and secures organic rich-snippet exposure."
    },
    {
      title: "7. Conversion Rate Optimization (CRO)",
      badge: "Profit Multiplier",
      desc: "Interactive cart drawers, optimized micro-copy, sticky CTA nodes, clear trust indicators, checkout audit diagnostics, and automated order value boosters.",
      benefit: "Unlocks maximum revenue out of your existing advertising traffic, lowering your standard organic CPA benchmarks."
    },
    {
      title: "8. AI-Powered Shopify Experiences",
      badge: "⭐ Trending Service",
      desc: "Implement AI product recommendation widgets, smart conceptual search bars, AI-powered product description translation, and responsive help desk models.",
      benefit: "Delivers personalized, human-feeling shopping experiences that boost average basket values automatically."
    },
    {
      title: "9. 24/7 Store Support & Maintenance",
      badge: "SLA Guaranteed",
      desc: "Continuous secure backups, real-time pixel monitoring, rapid app conflict resolution, speed sweeps, and catalog update workflows.",
      benefit: "Keeps your transactional nodes running flawlessly around the clock, protecting your store from revenue leakage."
    },
    {
      title: "10. Strategic E-commerce Consulting",
      badge: "Growth Roadmaps",
      desc: "In-depth competitor store audits, conversion leakage identification, tech-stack optimization blueprints, and detailed scaling advisory sessions.",
      benefit: "A clear financial plan to eliminate expensive software bloat and invest ad budgets with perfect commercial confidence."
    }
  ];

  const builtSolutions = [
    { type: "D2C Scaling Stores", desc: "Designed for rapid growth, multi-channel marketing campaigns, and sleek customer brand journeys." },
    { type: "B2B Wholesale Hubs", desc: "Configure secure wholesale access, custom bulk tier lists, quick group order forms, and tax identification routing." },
    { type: "Subscription Stores", desc: "Leverage native Shopify Subscription APIs to build repeatable monthly boxes or custom recurring plans." },
    { type: "International Retailers", desc: "Implement multi-currency checkout, dynamic geolocated redirects, and automated tax collections systems." }
  ];

  const toolsAndTechs = [
    { name: "Shopify / Shopify Plus", cat: "Core E-commerce Engine" },
    { name: "Liquid & Theme Kit", cat: "Custom Templating Language" },
    { name: "Shopify Headless (Hydrogen)", cat: "Ultra-Fast Decoupled Storefronts" },
    { name: "Klaviyo CRM", cat: "E-commerce Email & SMS Automation" },
    { name: "Google Analytics 4 / GTM", cat: "Advanced E-commerce Event Attribution" },
    { name: "Shopify Functions API", cat: "Custom Native Cart & Checkout Logic" },
    { name: "Looker Studio Boards", cat: "Consolidated Store Revenue Dashboards" },
    { name: "AI semantic recommendation", cat: "Dynamic Product Suggestion Nodes" }
  ];

  const shopifyFaqs = [
    { q: "Why choose Shopify over WordPress/WooCommerce or Magento?", a: "Shopify is a fully managed, hosted ecommerce SaaS. This means Shopify handles server maintenance, global CDN distribution, hosting security, and PCI compliance off the shelf. WooCommerce often becomes slow with modular apps and magento requires custom server management. Shopify delivers maximum uptime with minimum technical overhead." },
    { q: "How long does a custom Shopify store development project take?", a: "A tailored Shopify store build typically takes between 4 to 8 weeks depending on catalog size, custom integrations, or migration details. Standard setups can launch in as fast as 3 weeks under our rapid development programs." },
    { q: "Can you safely migrate my customer data and SEO scores from WooCommerce?", a: "Yes, absolutely! We configure exact 1-to-1 matching URL paths or secure 301 redirects to ensure your organic Google indexing stays unchanged. We compile all customer historic details and transaction records, importing them securely using robust database mapping APIs." },
    { q: "Do you build custom Shopify private apps?", a: "Yes. When standard Shopify App Store listings do not solve your corporate operations workflow, we design and host private React-based apps utilizing Shopify GraphQL APIs to fulfill custom logical steps instantly." },
    { q: "Is Shopify SEO friendly out-of-the-box?", a: "Shopify provides a strong baseline structure, but custom schema code, optimized page speed patterns, correct sitemap configuration, and dynamic semantic markup must be custom-developed to trigger Google Merchant Rich-Snippets and outrank competitors." }
  ];

  const packagesList = [
    { name: "Starter Brand Shopify Store", desc: "Perfect for emerging D2C startups, standalone product launches, and regional boutiques seeking high-converting custom templates.", setup: "Custom 1-Theme Solution", support: "30-Day Post Launch SLA" },
    { name: "Growth E-commerce Store", desc: "Our most popular corporate package. Outfitted with complete GA4 e-commerce events tracking, Klaviyo integration, and automated conversion optimization features.", setup: "Tailored Liquid Architecture", support: "90-Day Priority Support" },
    { name: "Enterprise Shopify Plus Ecosystem", desc: "For global brands requiring custom headless setups (Hydrogen), advanced B2B customer lists, custom Shopify Functions, and multi-country tax modules.", setup: "Shopify Plus Checkouts & Apps", support: "24/7 Dedicated SLA System" }
  ];

  return (
    <div id="shopify-development-services-page" className="bg-[#03060a] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Floating Action Bars */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="shopify-whatsapp-floating-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp E-com Help: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-teal hover:bg-white text-slate-950 p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-brand-teal/20 transition-all font-mono"
          id="shopify-phone-floating-bar"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" /> Call Shopify Expert: {CONTACT_NUMBER}
        </a>
      </div>

      {/* TOP NAVIGATION HEADER BAR */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 flex justify-between items-center z-50 sticky top-0">
        <div className="flex items-center space-x-2 text-slate-400 font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping"></span>
          <span>Certified Shopify E-commerce Architects Online</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center"
            id="back-shopify-nav"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition flex items-center space-x-1 font-mono">
            <span className="text-brand-teal">WhatsApp Link:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION WITH DYNAMIC E-COMMERCE CONVERSION SIMULATOR */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#03060a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/5 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/5 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content Block */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <ShoppingCart className="w-4 h-4 text-brand-teal" />
                <span>Certified Shopify Development Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Shopify Development Services That Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">High-Converting</span> E-commerce Stores
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Launch, scale, and optimize your e-commerce operations with custom Shopify development, Shopify Plus enterprise architectures, clean custom themes, and conversion-focused customer journeys.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#shopify-consultation-form" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-shopify-consult-btn"
                >
                  <span>Get Free Shopify Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#shopify-roi-calculator" 
                  className="bg-[#0c121e] border border-slate-850 hover:border-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <BarChart3 className="w-4 h-4 text-brand-teal" />
                  <span>Interactive CRO Calculator</span>
                </a>
              </div>

              {/* USP Highlights Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-900/65 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Certified Shopify Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Conversion-First Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Mobile-First Liquid Layout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>AI-Powered Integrations</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Shopify Revenue CRO Simulator Dashboard */}
            <div className="lg:col-span-12 xl:col-span-5 relative" id="shopify-roi-calculator">
              <div className="bg-[#0b1019] rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-5 font-mono">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-extrabold uppercase font-mono">Store Conversion Simulator</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-slate-800 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    CONVERSION POWERED
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Monthly Traffic */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Monthly Store Visitors:</span>
                      <span className="text-brand-teal font-black">{monthlyTraffic.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="150000" 
                      step="5000"
                      value={monthlyTraffic}
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Current CR */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Current Conversion Rate:</span>
                      <span className="text-blue-400 font-black">{conversionRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="4.0" 
                      step="0.1"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-blue-450"
                    />
                  </div>

                  {/* Average Order Value (AOV) */}
                  <div className="space-y-1.5 font-mono">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Average Order Value (AOV):</span>
                      <span className="text-brand-teal font-black">${averageOrderValue} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="250" 
                      step="5"
                      value={averageOrderValue}
                      onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Estimated Dashboard Outputs */}
                  <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 grid grid-cols-2 gap-4 text-left font-mono">
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Current Sales / Mo</span>
                      <span className="text-base font-black text-rose-450 block text-rose-400">{roiOutputs.monthlySales} orders</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Current Est. Revenue</span>
                      <span className="text-base font-black text-slate-305 block">${roiOutputs.monthlyRevenue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5 border-t border-slate-900 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black">AKGLS Developed Sales</span>
                      <span className="text-base font-black text-brand-teal block">{roiOutputs.optimizedSales} orders</span>
                    </div>

                    <div className="space-y-0.5 border-t border-slate-900 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black">AKGLS Developed Revenue</span>
                      <span className="text-base font-black text-brand-teal block">${roiOutputs.optimizedRevenue.toLocaleString()}</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-slate-900 flex justify-between items-center">
                      <span className="text-[10px] text-slate-400 uppercase font-black">Monthly Revenue Growth</span>
                      <span className="text-xl font-black text-emerald-400">+${roiOutputs.revenueGrowth.toLocaleString()} / mo</span>
                    </div>
                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide font-mono">
                    *Meticulous UI/UX layouts, checkout extensibility, and page speed improvements yield up to 2x conversion growth.
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-900 select-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8 animate-pulse font-mono">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold text-center">Global E-commerce Performance Markers</h2>
            <p className="text-xs text-slate-500 text-center">Engineered with Google Lighthouse Core Web Vitals standards.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">250+</span>
              <p className="text-xs text-slate-400 mt-1">Shopify Stores Built</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">$55M+</span>
              <p className="text-xs text-slate-400 mt-1">Client Revenue Driven</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">3.4%</span>
              <p className="text-xs text-slate-400 mt-1">Avg Conversion Rate</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">85%</span>
              <p className="text-xs text-slate-400 mt-1">More Organic Page Speed</p>
            </div>
          </div>

          {/* Shopify expert badges and alignments */}
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-85 pt-8 text-slate-400 font-extrabold text-xs font-mono">
            <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 bg-brand-teal/5 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" /> OFFICIAL SHOPIFY EXPERT ALIGNED
            </span>
            <span className="border border-slate-800 py-1 px-3.5 rounded-full">SHOPIFY CHECKOUT PARTNERS</span>
            <span className="border border-slate-800 py-1 px-3.5 rounded-full text-blue-400">LIQUID THEME ACCREDITED</span>
          </div>
        </div>
      </section>

      {/* WHAT IS SHOPIFY DEVELOPMENT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
              <Laptop className="w-4 h-4 text-brand-teal" />
              <span>THE E-COMMERCE CONVERSION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              What Is Shopify Development?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-mono">
              <p>
                **Shopify Development** involves building, migrating, and optimizing electronic transactional nodes utilizing the robust Shopify SaaS framework.
              </p>
              <p>
                A high-converting store is far more than just importing standard product listings. It requires responsive, ultra-clean code structures, streamlined mobile-optimized checkout funnels, fast lazy-loading assets, and rich relational schema metadata.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs">
                AKGLS Group elevates stores beyond basic default setups. We orchestrate lightning-fast, custom Liquid layouts, build secure API hooks to external legacy CRMs, and integrate AI recommendation engines natively.
              </p>
            </div>
          </div>

          {/* Social Lead Flow layout */}
          <div className="lg:col-span-5 space-y-4 bg-slate-905 bg-slate-900 border border-slate-800 p-6 rounded-2xl relative">
            <div className="absolute top-2 right-2 flex items-center gap-1 text-[8.5px] text-brand-teal font-mono uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              <Zap className="w-2.5 h-2.5" /> High Speed
            </div>
            
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-slate-850 pb-3 font-mono">Shopify Core Ecosystem Map</h3>
            
            <div className="space-y-4 pt-2 text-left font-mono text-xs text-slate-300">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-950 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-850">1</div>
                <h4 className="text-xs font-bold text-white uppercase">Tailored Custom Theme (SEO & Speed)</h4>
                <p className="text-[11.5px] text-slate-400 leading-normal">Liquid architecture built entirely without heavy third-party plugins, maintaining 90+ Lighthouse speed score.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/30">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase">App API & Flow Automation</h4>
                <p className="text-[11.5px] text-slate-400 leading-normal">Connect ERP systems, warehouse fulfillment pipelines, taxation models, and custom bundle scripts cleanly.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-[10px] text-blue-400 font-bold border border-blue-500/20">3</div>
                <h4 className="text-xs font-bold text-blue-400 uppercase">Interactive Checkout Experience</h4>
                <p className="text-[11.5px] text-slate-400 leading-normal">Deploy custom shopping carts, upsell nodes, dynamic shipping rules, and accelerated payment integrations.</p>
              </div>
            </div>

            <div className="pt-2 font-mono">
              <a 
                href="#shopify-consultation-form" 
                className="w-full bg-[#03060a] hover:bg-slate-950 border border-slate-800 text-slate-300 font-bold text-xs py-3 rounded-lg transition block text-center cursor-pointer"
              >
                Request Consultation on Custom Stores
              </a>
            </div>
          </div>
          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY SHOPIFY MATTERS FOR ECOMMERCE */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center font-mono">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">WHY MERCHANTS DEMAND SHOPIFY</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Businesses Choose Shopify for E-commerce
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Say goodbye to expensive server down-times, database security hacks, and complex checkout conflicts. Shopify delivers enterprise-grade stability with infinite scalability.
            </p>
          </div>

          {/* Benefits Grid of Why Shopify */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-xs">
            <div className="p-6 bg-[#090e18] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fast & Secure Off-The-Shelf</h3>
              <p className="text-slate-400 leading-relaxed">Built-in PCI compliance, secure SSL protocols, and dynamic auto-scaling servers engineered to easily capture million-visitor sales spikes.</p>
            </div>

            <div className="p-6 bg-[#090e18] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Flawless Mobile Experience</h3>
              <p className="text-slate-400 leading-relaxed">Over 70% of e-commerce sales land on mobile devices. Shopify architecture provides frictionless shopping setups, dynamic cart states, and native checkouts.</p>
            </div>

            <div className="p-6 bg-[#090e18] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">High Indexing SEO Structure</h3>
              <p className="text-slate-400 leading-relaxed">Generates semantic URL directories, automated dynamic redirects, robot controls, and structural schema indices designed for organic indexing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC SPEED OPTIMIZATION GAUGE & ACCELERATOR */}
      <section className="py-20 bg-slate-950 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-3.5 py-1 text-rose-450 rounded-full font-bold uppercase text-[10.5px]">
                <Gauge className="w-4 h-4 text-rose-400" />
                <span>Page Speed Conflict Diagnostic</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                Is Bloated Software Sapping Your Store Sales?
              </h2>

              <p className="text-[13.5px] text-slate-400 font-normal leading-relaxed">
                Every 100ms lag in mobile transaction processing results in a **7% conversion rate drop**. Default pre-packaged templates are bloated with unoptimized scripts and unnecessary tracking apps.
              </p>

              <p className="text-slate-400 leading-relaxed">
                Toggle the switch below to visualize the performance differences between bloated theme apps vs. custom-engineered Liquid development by AKGLS developers:
              </p>

              {/* Selector Button */}
              <div className="flex items-center space-x-4 pt-2 select-none">
                <span className="text-slate-400 font-bold uppercase text-[10.5px]">Optimized Build State:</span>
                <button
                  type="button"
                  onClick={() => setSpeedOptimizationApplied(!speedOptimizationApplied)}
                  className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                    speedOptimizationApplied ? 'bg-brand-teal' : 'bg-rose-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-slate-950 transition-transform ${
                      speedOptimizationApplied ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`font-black uppercase text-[11px] ${
                  speedOptimizationApplied ? 'text-brand-teal' : 'text-rose-500'
                }`}>
                  {speedOptimizationApplied ? 'AKGLS OPTIMIZED Liquid (98 Score)' : 'Standard Bloated Pre-Made Theme (32 Score)'}
                </span>
              </div>

              <div className="border-l-2 border-brand-teal pl-4 p-2 bg-slate-900/40 rounded-r-xl">
                <div className="font-bold text-white uppercase text-[10.5px] mb-1">THE AKGLS DELIVERABLE:</div>
                <p className="text-slate-405 leading-relaxed text-[11px]">
                  Standard stores have heavy external dependency trees. We scrub and rewrite scripts to keep code execution linear, deliver custom CSS bundles, and optimize images to reach flawless Google Core Web Vitals targets.
                </p>
              </div>

            </div>

            {/* Performance metrics showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-left">
                
                <h3 className="font-bold text-white uppercase border-b border-indigo-950/40 pb-2 text-[11px]">Vitals Dashboard Panel</h3>

                {/* Score Circle Display */}
                <div className="flex items-center justify-around py-4">
                  
                  <div className="text-center space-y-1">
                    <div className="relative w-28 h-28 rounded-full flex items-center justify-center border-4 border-slate-800">
                      <div className={`absolute inset-1 rounded-full border-4 border-transparent border-t-brand-teal flex items-center justify-center transition-all ${
                        speedOptimizationApplied ? 'scale-100 rotate-180 border-brand-teal' : 'scale-90 rotate-0 border-rose-500'
                      }`} />
                      <span className={`text-4xl font-extrabold transition-colors duration-300 ${
                        speedOptimizationApplied ? 'text-brand-teal' : 'text-rose-500'
                      }`}>
                        {speedOptimizationApplied ? '98' : '32'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Mobile Performance Score</span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px] text-slate-350">
                    <div className="flex justify-between w-48 border-b border-slate-850 pb-1">
                      <span>Server Response TIme (TTFB)</span>
                      <span className={`font-bold ${speedOptimizationApplied ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {speedOptimizationApplied ? '0.08s' : '1.45s'}
                      </span>
                    </div>
                    <div className="flex justify-between w-48 border-b border-slate-850 pb-1">
                      <span>Interactive Time (TTI)</span>
                      <span className={`font-bold ${speedOptimizationApplied ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {speedOptimizationApplied ? '1.12s' : '4.65s'}
                      </span>
                    </div>
                    <div className="flex justify-between w-48 border-b border-slate-850 pb-1">
                      <span>Cumulative Layout Shift (CLS)</span>
                      <span className={`font-bold ${speedOptimizationApplied ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {speedOptimizationApplied ? '0.01' : '0.34'}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Simulated Customer Experience Flow */}
                <div className="bg-slate-950 p-4 rounded-xl space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Simulated Customer Experience Feedback:</span>
                  <p className="text-slate-300 italic">
                    {speedOptimizationApplied 
                      ? "“The storefront loads instantly on mobile 5G. Adding product variants has zero lag. Checkout was seamless and fast!”" 
                      : "“The buy button frozen for seconds. Kept loading unoptimized layout items. I left the cart without checking out.”"
                    }
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED SERVICES BENTO GRID LAYOUT */}
      <section id="shopify-services-grid" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">MERCHANT CAPABILITY MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our Shopify Development Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            A comprehensive, modular engineering layout designed to handle custom themes, high-volume checkouts, risk-free migrations, and technical SEO schema indices.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {shopifyServicesList.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                    {srv.badge}
                  </span>
                  <span className="text-xs text-slate-500">Suite {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition font-sans">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left font-normal">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-1.5 text-left bg-slate-950/40 p-3 rounded-xl">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">PROVEN MERCHANT OUTCOME:</div>
                <div className="flex items-center space-x-1.5 text-[11px] text-brand-teal font-extrabold font-mono text-left">
                  <Check className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{srv.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOPIFY SOLUTIONS PRODUCTS WE BUILD */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center font-sans">
              Shopify Solutions We Build
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-normal">
              Whether you sell single-item physical items, run custom complex subscription lines, or trade internationally, we build the perfect storefront solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {builtSolutions.map((cf, cIdx) => (
              <div key={cIdx} className="bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-2.5 hover:border-brand-teal/25 hover:scale-102 transition duration-300 text-left">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>
                <h3 className="text-xs md:text-sm font-bold text-white uppercase">{cf.type}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {cf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">TARGET HORIZONTALS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Shopify Development for Every Industry</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Different niches require unique structural schemas. We formulate layout hierarchies customized to convert your specific user types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industriesWeServe.map((ind, iIdx) => (
            <div key={iIdx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2.5 text-left">
              <h3 className="text-xs md:text-sm font-bold text-white uppercase border-b border-indigo-950/40 pb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                {ind.label}
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                {ind.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR DEVELOPMENT PROCESS SECTION */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">OUR MILESTONE SYSTEM</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
              Our Shopify Development Process
            </h2>
            <p className="text-slate-405 leading-relaxed text-sm md:text-base font-normal">
              How we take your online store from discovery workshops to lightning-fast, secure checkouts safely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-left">
            
            <div className="bg-[#0b1019] border border-slate-805 p-6 rounded-xl space-y-3 relative overflow-hidden transition hover:border-brand-teal/20">
              <span className="text-4xl font-black text-brand-teal/20 absolute -top-1 -right-1 block font-mono">01</span>
              <h3 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-2">Discovery & Plan</h3>
              <p className="text-[11px] text-slate-405 leading-relaxed font-sans">Analyze catalogs, competitive layouts, custom third-party ERP integration requisites, and SEO schema maps.</p>
            </div>

            <div className="bg-[#0b1019] border border-slate-805 p-6 rounded-xl space-y-3 relative overflow-hidden transition hover:border-brand-teal/20">
              <span className="text-4xl font-black text-brand-teal/20 absolute -top-1 -right-1 block font-mono">02</span>
              <h3 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-2">UI/UX Layout</h3>
              <p className="text-[11px] text-slate-405 leading-relaxed font-sans">Design high-converting mobile layout charts, interactive cart workflows, and rapid checkout models.</p>
            </div>

            <div className="bg-[#0b1019] border border-slate-805 p-6 rounded-xl space-y-3 relative overflow-hidden transition hover:border-brand-teal/20">
              <span className="text-4xl font-black text-brand-teal/20 absolute -top-1 -right-1 block font-mono">03</span>
              <h3 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-2">Custom Build</h3>
              <p className="text-[11px] text-slate-405 leading-relaxed font-sans">Develop clean, ultra-speedy Liquid markup code entirely free from heavy performance-depressing page-builder apps.</p>
            </div>

            <div className="bg-[#0b1019] border border-slate-805 p-6 rounded-xl space-y-3 relative overflow-hidden transition hover:border-brand-teal/20">
              <span className="text-4xl font-black text-brand-teal/20 absolute -top-1 -right-1 block font-mono">04</span>
              <h3 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-2">Audit & Optimize</h3>
              <p className="text-[11px] text-slate-405 leading-relaxed font-sans">Run meticulous Mobile Speed ratings sweeps, test payment gateways, and coordinate redirects routing.</p>
            </div>

            <div className="bg-[#0b1019] border border-slate-805 p-6 rounded-xl space-y-3 relative overflow-hidden transition hover:border-brand-teal/20">
              <span className="text-4xl font-black text-brand-teal/20 absolute -top-1 -right-1 block font-mono">05</span>
              <h3 className="text-xs font-bold text-[#00f2fe] uppercase border-b border-slate-800 pb-2">Secure Launch</h3>
              <p className="text-[11px] text-slate-405 leading-relaxed font-sans">Safely point merchant DNS roots, synchronize index logs with search consoles, and start tracking e-commerce metrics.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SHOPIFY SEO SECTION & DYNAMIC Rich-Snippet Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono text-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Search className="w-4 h-4 text-brand-teal" />
              <span>Organic rich snippet indicators</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Shopify SEO & Rich-Snippet Optimization
            </h2>

            <p className="text-[13px] text-slate-350 leading-relaxed font-sans">
              E-commerce SEO is more competitive than ever. Standard online stores simply lose organic exposure due to duplicate description index tags, slow lazyloading layout configurations, and absent structured product schema codes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-left">
                <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                <p className="text-slate-400 font-sans">**Product Schema Indexes**: We bundle JSON-LD structures automatically, signaling product name, exact pricing variations, secure ratings, and supply statuses directly to search index systems.</p>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                <p className="text-slate-400 font-sans">**Custom Collection Sitemaps**: Keep site structures perfectly readable to Web crawling bots, ensuring correct canonical tags avoid indexing penalties.</p>
              </div>
            </div>

            {/* Simulated Rich Snippet Visualizer */}
            <div className="bg-slate-900 border border-slate-805 p-4 rounded-xl space-y-2">
              <span className="text-[9.5px] text-slate-450 uppercase font-bold block mb-1">Simulated Google Mobile Searched Output:</span>
              <div className="bg-slate-950 p-3 rounded border border-slate-900 text-slate-300 font-sans">
                <div className="text-xs text-blue-450 text-[#00f2fe]">https://yourbrandstore.com › products › travel-duffel</div>
                <h3 className="text-base text-blue-400 hover:underline cursor-pointer font-bold font-sans">Premium Waterproof Canvas Travel Duffel Bag | Brand</h3>
                <p className="text-xs text-slate-400">Shop our custom hand-crafted canvas travel duffel bag. Fits domestic flight carry-on rules perfectly. Quick-snap lock straps, heavy zinc alloy zippers.</p>
                <div className="flex flex-wrap text-emerald-400 font-mono text-[10.5px] mt-1 gap-4 font-bold">
                  <span>Rating: ★★★★★ 4.9 (185 Customer Reviews)</span>
                  <span>Price: $125.00 USD</span>
                  <span>Status: In Stock</span>
                </div>
              </div>
            </div>

          </div>

          {/* AI-powered shopping integrations highlight */}
          <div className="lg:col-span-4 bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-4 text-left font-mono">
            
            <div className="inline-flex items-center space-x-1 border border-brand-teal/20 bg-brand-teal/5 py-0.5 px-2 rounded-full text-[9px] text-brand-teal font-extrabold uppercase">
              <Cpu className="w-3.5 h-3.5" /> AI Engine
            </div>

            <h3 className="text-sm font-black text-white uppercase tracking-wider">AI-Powered Shopping Experiences</h3>

            <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans">
              Modern buyers expect ultra-personalized shopping setups. We integrate neural search capabilities that optimize product views dynamically based on previous search nodes.
            </p>

            <ul className="space-y-2.5 text-[11px] text-slate-300">
              <li className="flex items-center space-x-2 font-mono">
                <Bot className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Conceptual AI Chat Assistant</span>
              </li>
              <li className="flex items-center space-x-2 font-mono">
                <Sparkles className="w-4 h-4 text-brand-teal shrink-0" />
                <span>AI Product bundling recommendation</span>
              </li>
              <li className="flex items-center space-x-2 font-mono">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Smart dynamic price optimization</span>
              </li>
            </ul>

            <div className="h-0.5 bg-slate-850" />

            <div className="text-[10px] text-slate-400 font-black uppercase">THE AI MERCHANT ADVANTAGE:</div>
            <p className="text-[10.5px] text-slate-400 font-sans leading-normal">
              Increase Average Checkout Value (AOV) by up to 22% and lower cart abandonment rates silently without aggressive popup scripts.
            </p>
          </div>
          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY CHOOSE AKGLS GROUP FOR SHOPIFY */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 text-left font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none font-mono">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">AKGLS E-COMMERCE ACCREDITATIONS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
              Why Choose AKGLS Group for Shopify Development?
            </h2>
            <p className="text-sm text-slate-400 font-normal">
              We focus purely on absolute transaction volumes, page speeds, and clean, modular liquid components. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#090e18] border border-slate-805 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Certified Liquid Experts</h3>
              <p className="text-slate-400 leading-relaxed font-sans">We write clean Shopify native liquid markup code entirely from scratch. No bloated page builders or slow visual templates matching generic themes.</p>
            </div>

            <div className="p-6 bg-[#090e18] border border-slate-805 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Layers3 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Complete Ecosystem Automations</h3>
              <p className="text-slate-400 leading-relaxed font-sans">Synchronize catalog changes natively to major ad channels, link CRM datasets, and run automated transactional sequences safely.</p>
            </div>

            <div className="p-6 bg-[#090e18] border border-slate-805 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Conversion Analytics Configured</h3>
              <p className="text-slate-400 leading-relaxed font-sans">Every single button event, checkout stage abandonment indicator, and transaction detail is hooked cleanly into GA4 and Looker panels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES USING GRAPH */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">MERCHANT INTEGRATIONS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Tools & Technologies We Use</h2>
          <p className="text-slate-400 text-sm md:text-base font-normal">
            We integrate preeminent backend automation, email, analytics, and CRM architectures to align operations smoothly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {toolsAndTechs.map((cf, cIdx) => (
            <div key={cIdx} className="bg-slate-900 border border-slate-805 p-6 rounded-xl space-y-1.5 hover:border-brand-teal/20 hover:scale-102 transition duration-300 text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal block mb-1"></span>
              <h3 className="text-xs md:text-sm font-black text-white uppercase">{cf.name}</h3>
              <p className="text-[10.5px] text-slate-405 font-sans uppercase">
                {cf.cat}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FLEXIBLE SHOPIFY PACKAGES */}
      <section className="py-20 bg-slate-950 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 select-none">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">COMMERCIAL TERMS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center font-sans">
              Flexible Shopify Development Packages
            </h2>
            <p className="text-sm text-slate-450 font-normal">
              Whether you need to launch a new product catalog or scale to multi-million global volumes, we have curated configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagesList.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-[#0b1019] border rounded-2xl p-6 relative flex flex-col justify-between ${
                  idx === 1 ? 'border-brand-teal shadow-xl shadow-brand-teal/5 scale-102' : 'border-slate-805'
                }`}
              >
                {idx === 1 && (
                  <span className="absolute -top-3.5 right-6 bg-brand-teal text-slate-950 text-[9px] font-black px-3 py-1 rounded-full uppercase">
                    MOST SUCCESSFUL PACK
                  </span>
                )}
                
                <div className="space-y-4 text-left">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{pkg.name}</h3>
                  <p className="text-slate-400 font-sans leading-relaxed text-[11px]">{pkg.desc}</p>
                  
                  <div className="h-0.5 bg-slate-850" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-indigo-950/40 pb-1">
                      <span className="text-slate-500 font-bold uppercase">Setup Tier:</span>
                      <span className="text-white font-extrabold uppercase text-[11px]">{pkg.setup}</span>
                    </div>
                    <div className="flex justify-between border-b border-indigo-950/40 pb-1">
                      <span className="text-slate-500 font-bold uppercase">Support SLA:</span>
                      <span className="text-white font-extrabold uppercase text-[11px]">{pkg.support}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 text-left">
                  <a 
                    href="#shopify-consultation-form" 
                    className={`w-full text-center py-3 rounded-xl font-bold transition block cursor-pointer select-none ${
                      idx === 1 
                        ? 'bg-brand-teal text-slate-950 shadow hover:bg-white' 
                        : 'bg-slate-900 text-slate-300 border border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    Request Custom Shopify Development Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE FAQ SECTION WITH STATE */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono text-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-brand-teal animate-pulse" />
              <span>Merchant help desk alignment</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
              Frequently Asked Questions About Shopify
            </h2>

            <p className="text-[13px] text-slate-400 font-normal leading-relaxed font-sans">
              Are you still evaluating platforms or planning a complete database transition schema? We map clear, honest expectations for merchants.
            </p>

            <div className="border-l-2 border-brand-teal pl-4 p-2 bg-slate-900/40 rounded-r-xl">
              <h3 className="font-bold text-white uppercase text-[10.5px] mb-1">HAVE TRANSITIONAL MERCHANT SCHEMAS?</h3>
              <p className="text-slate-400 font-sans leading-normal">
                Our support desk executes safe migrations daily, maintaining user credentials, sales records, and organic page index targets seamlessly.
              </p>
            </div>
          </div>

          {/* Interactive FAQs Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {shopifyFaqs.map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className="bg-[#0b1019] border border-slate-805 rounded-xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(openFaqIdx === fIdx ? null : fIdx)}
                  className="w-full text-left p-5 flex justify-between items-center text-slate-200 hover:text-white cursor-pointer select-none"
                >
                  <span className="font-bold text-xs uppercase tracking-wider text-left">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-teal transition-transform shrink-0 ${
                    openFaqIdx === fIdx ? 'rotate-180' : 'rotate-0'
                  }`} />
                </button>

                <AnimatePresence>
                  {openFaqIdx === fIdx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-850 bg-slate-950/40"
                    >
                      <p className="p-5 text-[11px] md:text-sm text-slate-400 font-sans leading-relaxed text-left">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SCHEMA INJECTION TAB PANELS (FOR EXTEMPORARY TECHNICAL SEO AUDITS) */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 text-left font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-1" />
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-full text-brand-teal font-extrabold tracking-wide uppercase">
                <Terminal className="w-4 h-4 text-brand-teal" />
                <span>Search Engine Structured Indexes</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-none font-sans">
                Technical Merchant Schema Templates
              </h2>
              <p className="text-[13px] text-slate-350 leading-relaxed font-sans">
                Structured data schemas are absolutely necessary to secure rich visual exposure elements on Google organic listings. Copy the compiled structural templates below to inject inside your Shopify theme settings:
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => performSchemaCopy(shopifySchemaTemplates.service, 'service')}
                  className="w-full bg-[#0b1019] hover:bg-slate-900 p-4 rounded-xl border border-indigo-950/40 flex items-center justify-between text-slate-300 font-bold uppercase text-[10.5px] cursor-pointer"
                >
                  <span className="flex items-center gap-1.5"><Code className="w-4 h-4 text-brand-teal" /> 1. Merchant Service Schema Template</span>
                  <span className="text-brand-teal font-extrabold">
                    {schemaCopied === 'service' ? '✓ COPIED!' : 'COPY SCHEMA'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => performSchemaCopy(shopifySchemaTemplates.faq, 'faq')}
                  className="w-full bg-[#0b1019] hover:bg-slate-900 p-4 rounded-xl border border-indigo-950/40 flex items-center justify-between text-slate-300 font-bold uppercase text-[10.5px] cursor-pointer"
                >
                  <span className="flex items-center gap-1.5"><Code className="w-4 h-4 text-brand-teal" /> 2. FAQ Rich Snippet Schema Template</span>
                  <span className="text-brand-teal font-extrabold">
                    {schemaCopied === 'faq' ? '✓ COPIED!' : 'COPY SCHEMA'}
                  </span>
                </button>
              </div>
            </div>

            {/* Visual template preview representation */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono space-y-4">
              <div className="flex justify-between items-center text-[10px] text-slate-450 border-b border-indigo-950/45 pb-2">
                <span className="text-indigo-400 font-bold uppercase">compiled_schema_preview.json</span>
                <span>UTF-8 ENCODED</span>
              </div>
              <pre className="text-[10px] text-brand-teal overflow-x-auto select-all max-h-56 p-2 bg-[#03060a] rounded border border-slate-900">
                {schemaCopied === 'faq' ? shopifySchemaTemplates.faq : shopifySchemaTemplates.service}
              </pre>
              <div className="text-[9.5px] text-slate-500 uppercase leading-relaxed text-center font-sans">
                *Inject inside Liquid theme config headers or GTM tags blocks to trigger automatic organic snippet indices.
              </div>
            </div>
            <div className="lg:col-span-1" />

          </div>
        </div>
      </section>

      {/* FREE CONSULTATION FORM SECTION */}
      <section id="shopify-consultation-form" className="py-20 bg-slate-950 font-mono text-xs">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0b1019] border border-slate-805 p-8 rounded-3xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">RISK-FREE DEMO SURVEY</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">
                Get a Free Shopify Development Consultation
              </h2>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Receive an comprehensive audit layout containing custom themes optimization roadmap, page speeds analysis, and checkout CRO pointers.
              </p>
            </div>

            {consultSubmitted ? (
              <div className="p-8 bg-slate-950 border border-slate-850 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-brand-teal mx-auto" />
                <h3 className="text-xl font-bold text-white uppercase font-sans">E-Commerce Registration Logged!</h3>
                <p className="text-xs text-slate-400 font-sans max-w-md mx-auto">
                  Our certified Shopify architects have received your operational parameters. We will review your catalog profile and reach out via email within 4-12 hours cleanly.
                </p>
                <div className="pt-2">
                  <button 
                    type="button"
                    onClick={() => setConsultSubmitted(false)}
                    className="bg-brand-teal text-slate-950 font-extrabold px-6 py-2.5 rounded hover:bg-white transition uppercase font-sans text-xs cursor-pointer"
                  >
                    Resubmit Parameters
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-4 text-left max-w-xl mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold uppercase text-[10px]">Your Name:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alexander Mercer"
                      value={consultForm.name}
                      onChange={(e) => setConsultForm({...consultForm, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white transition focus:border-brand-teal focus:outline-none"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold uppercase text-[10px]">Business Name:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Aura Lifestyle Ltd."
                      value={consultForm.businessName}
                      onChange={(e) => setConsultForm({...consultForm, businessName: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white transition focus:border-brand-teal focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold uppercase text-[10px]">Existing Website (Optional):</label>
                    <input 
                      type="text" 
                      placeholder="e.g. https://yourbrand.com"
                      value={consultForm.website}
                      onChange={(e) => setConsultForm({...consultForm, website: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white transition focus:border-brand-teal focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold uppercase text-[10px]">Primary Requirement:</label>
                    <select
                      value={consultForm.requirements}
                      onChange={(e) => setConsultForm({...consultForm, requirements: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white transition focus:border-brand-teal focus:outline-none cursor-pointer"
                    >
                      <option value="Custom Shopify Store Setup">Custom Shopify Store Setup</option>
                      <option value="Advanced Custom Theme (Liquid)">Advanced Custom Theme (Liquid)</option>
                      <option value="Migrate from WooCommerce/Magento">Migrate from WooCommerce/Magento</option>
                      <option value="Shopify Plus Scaling & Enterprise">Shopify Plus Scaling & Enterprise</option>
                      <option value="Conversion CRO Audit & Optimize">Conversion CRO Audit & Optimize</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold uppercase text-[10px]">Corporate Email:</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. alex@yourbrand.com"
                      value={consultForm.email}
                      onChange={(e) => setConsultForm({...consultForm, email: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white transition focus:border-brand-teal focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 font-bold uppercase text-[10px]">Phone Number:</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +91 99999 99999"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({...consultForm, phone: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white transition focus:border-brand-teal focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-brand-teal hover:bg-white text-slate-950 font-extrabold py-4 px-6 rounded-xl hover:scale-102 transition duration-300 uppercase tracking-widest text-xs cursor-pointer select-none"
                    id="submit-shopify-consult"
                  >
                    Submit Store Parameters
                  </button>
                </div>

                <div className="flex justify-between items-center text-[9.5px] text-slate-500 pt-2 font-mono uppercase">
                  <span>🔒 PCI Compliant Server Sync</span>
                  <span>✓ Response SLA: Under 12 Hours</span>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* BLOG SECTION HIGHLIGHTS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono text-xs">
        <div className="space-y-4 mb-16 text-center select-none">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">MERCHANT EDUCATION RESOURCE</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">E-commerce Knowledge Bases</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Read our published strategy columns on how to scale transactional nodes easily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-805 rounded-xl p-6 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-brand-teal/5 text-brand-teal text-[9px] px-2 py-0.5 rounded border border-brand-teal/20 font-bold">MERCHANT PLANNING</span>
              <h3 className="text-sm font-bold text-white uppercase">The Complete 2026 Shopify Custom Development Roadmap</h3>
              <p className="text-slate-405 font-sans leading-normal">What is the optimal tech-stack structure? A deep dive analyzing headless React codebases, standard custom Liquid assemblies, and database syncing parameters.</p>
            </div>
            <a href="#shopify-consultation-form" className="text-brand-teal hover:underline font-bold text-[11px] block pt-2">READ CORE ARTICLE →</a>
          </div>

          <div className="bg-slate-900 border border-slate-805 rounded-xl p-6 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-brand-teal/5 text-brand-teal text-[9px] px-2 py-0.5 rounded border border-brand-teal/20 font-bold">CRO DESIGN</span>
              <h3 className="text-sm font-bold text-white uppercase">Eliminating App Bloat to Double Store Checkout Conversion</h3>
              <p className="text-slate-405 font-sans leading-normal">Learn why mounting 15+ interactive app blocks slows down storefront architectures, and how to rewrite custom CSS drawer cards inside pure custom code bases cleanly.</p>
            </div>
            <a href="#shopify-consultation-form" className="text-brand-teal hover:underline font-bold text-[11px] block pt-2">READ CORE ARTICLE →</a>
          </div>

          <div className="bg-slate-900 border border-slate-805 rounded-xl p-6 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-brand-teal/5 text-brand-teal text-[9px] px-2 py-0.5 rounded border border-brand-teal/20 font-bold">SEO SCHEMA v2</span>
              <h3 className="text-sm font-bold text-white uppercase">How E-commerce Structured Schema Blocks Outrank Competitor Lists</h3>
              <p className="text-slate-405 font-sans leading-normal">How Google crawler engines interpret dynamic collection maps, and how custom metadata integration boosts impressions automatically.</p>
            </div>
            <a href="#shopify-consultation-form" className="text-brand-teal hover:underline font-bold text-[11px] block pt-2">READ CORE ARTICLE →</a>
          </div>
        </div>
      </section>

      {/* FINAL TERMINAL CTA */}
      <section className="py-24 bg-[#03060a] relative overflow-hidden border-t border-slate-900 font-mono text-xs text-left">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-4 py-1.5 rounded-full text-brand-teal font-extrabold uppercase text-[10.5px]">
            <Zap className="w-4 h-4 text-brand-teal animate-bounce" />
            <span>Scale E-Commerce Operations Instantly</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight font-sans text-center">
            Ready to Build & Scale Your Shopify Store?
          </h2>

          <p className="text-slate-400 font-normal leading-relaxed max-w-xl mx-auto font-sans text-center">
            Deploy an custom-engineered storefront built entirely on lightning-fast, secure Liquid code, pre-configured metrics tracking, and organic rich sitemap blocks.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 justify-center select-none">
            <a 
              href="#shopify-consultation-form" 
              className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow hover:bg-white transition flex items-center justify-center space-x-2"
              id="final-shopify-audit-btn"
            >
              <span>Book Shopify Consultation</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-[#0c121e] border border-slate-805 text-slate-200 px-8 py-4 rounded-xl hover:border-slate-705 transition flex items-center justify-center space-x-2"
            >
              <MessageSquare fill="white" className="w-4 h-4 text-white" />
              <span>Discuss Requirements via WhatsApp</span>
            </a>
          </div>

          {/* Secure elements indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10.5px] uppercase text-slate-400 font-bold pt-4">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-brand-teal" /> 100% Certified E-commerce Team</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-teal" /> Lightning-fast Liquid Markups</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-teal" /> Growth Analytics Structured</span>
          </div>

        </div>
      </section>

    </div>
  );
}

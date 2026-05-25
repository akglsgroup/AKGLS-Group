import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Film, Heart, Share2,
  Building2, Landmark, GraduationCap, Truck, Stethoscope, Factory, ShoppingCart, 
  Laptop, Layout, Paintbrush, ArrowUpRight, HelpCircle as HelpIcon, Layers3, Rocket,
  Lightbulb, ChevronRight, Play, LineChart, ZapOff, Minimize2, CheckSquare, BarChart4
} from 'lucide-react';

interface EnterpriseMarketingSolutionsPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const enterpriseSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-Powered Enterprise Marketing & Digital Transformation Solutions",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Multi-location Enterprise SEO, global programmatic paid media management, high-volume B2B lead generation, and conversational search LLM visibility engines."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does enterprise marketing scale across multiple regional divisions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By deploying unified corporate messaging frameworks coupled with isolated localized search target lists and automated multi-tenant lead routing parameters."
      }
    }
  ]
}`
};

export default function EnterpriseMarketingSolutionsPage({ onBackToHome, openProposalForm }: EnterpriseMarketingSolutionsPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Enterprise Marketing Solutions | Enterprise Digital Marketing Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Enterprise ROI & Funnel scale states
  const [parentMarketingBudget, setParentMarketingBudget] = useState<number>(300000); // 300k budget
  const [leadConversionRate, setLeadConversionRate] = useState<number>(1.1); // 1.1% conversion to sales
  const [enterpriseContractValue, setEnterpriseContractValue] = useState<number>(75000); // 75k ACV
  const [estimatedCostPerLead, setEstimatedCostPerLead] = useState<number>(150); // $150 CPL
  
  const [roiOutputs, setRoiOutputs] = useState({
    generatedLeads: 2000,
    estimatedNewContracts: 22,
    totalPipelineValue: 1650000,
    optimizedNewContracts: 44,
    optimizedPipelineValue: 3300000,
    pipelineLiftValue: 1650000,
    projectedRoiMultiplier: 5.5
  });

  // Calculate parameters on change
  useEffect(() => {
    const generatedLeads = Math.round(parentMarketingBudget / estimatedCostPerLead);
    const estimatedNewContracts = Math.round(generatedLeads * (leadConversionRate / 100));
    const totalPipelineValue = estimatedNewContracts * enterpriseContractValue;

    // Optimized scenario (AKGLS usually doubles funnel performance via structural search & CRM integrations)
    const optimizedConvRate = Math.min(6.0, parseFloat((leadConversionRate * 2.2).toFixed(2)));
    const optimizedNewContracts = Math.round(generatedLeads * (optimizedConvRate / 100));
    const optimizedPipelineValue = optimizedNewContracts * enterpriseContractValue;
    const pipelineLiftValue = optimizedPipelineValue - totalPipelineValue;
    const projectedRoiMultiplier = parseFloat((optimizedPipelineValue / parentMarketingBudget).toFixed(1));

    setRoiOutputs({
      generatedLeads,
      estimatedNewContracts,
      totalPipelineValue,
      optimizedNewContracts,
      optimizedPipelineValue,
      pipelineLiftValue,
      projectedRoiMultiplier
    });
  }, [parentMarketingBudget, leadConversionRate, enterpriseContractValue, estimatedCostPerLead]);

  // Ecosystem Tab state
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<'seo' | 'media' | 'analytics'>('seo');

  // FAQ collapse state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying state
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => {
      setSchemaCopied(null);
    }, 1800);
  };

  // Consultation state
  const [auditForm, setAuditForm] = useState({
    companyName: '',
    websiteUrl: '',
    industry: 'SaaS & Technology',
    challenges: '',
    email: '',
    phone: '',
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.companyName || !auditForm.email || !auditForm.websiteUrl) return;
    setAuditSubmitted(true);
  };

  const industriesWeServe = [
    { label: "SaaS & Technology", icon: Laptop, text: "Product-led SEO directories, developer platform search layout, high-value enterprise sales inquiries routing, and pricing calculators." },
    { label: "Manufacturing", icon: Factory, text: "B2B parts sourcing search indexes, international distributor logistics routing templates, catalog indexation, and contract forms." },
    { label: "Healthcare Systems", icon: Stethoscope, text: "HIPAA-compliant patient portals, hospital locator maps optimization, physician credibility schema pages, and intake pages." },
    { label: "Finance & Banking", icon: Landmark, text: "High-security regulatory disclosure blocks, secure customer loan estimate calculators, and optimized corporate banking lead pipelines." },
    { label: "Education & Universities", icon: GraduationCap, text: "Multi-department database indices, student enrollment funnel tracking, dynamic campus maps markers, and registrar event logs." },
    { label: "Real Estate & Development", icon: Building2, text: "High-contrast dynamic property sliders, local geographic maps coverage, portfolio visual showcases, and investor inquiries forms." },
    { label: "IoT Enterprises", icon: Cpu, text: "Custom developer documentation layout templates, device specs comparison grids, hardware-support routing systems, and corporate api guides." },
    { label: "E-commerce Enterprises", icon: ShoppingCart, text: "Global multi-currency Liquid settings, automated enterprise catalog sync layers, predictive search features, and checkouts audits." },
    { label: "Logistics & Supply Chain", icon: Truck, text: "Heavy freight shipping estimate calculators, nationwide supply-demand regional mapping, and corporate procurement inquiries." }
  ];

  const enterpriseServices = [
    {
      title: "1. Enterprise Technical SEO at Scale",
      badge: "⭐ Core Service",
      desc: "Robust organic optimization designed for site indices scaling past 50,000 pages. We configure semantic markup tags, resolve crawl indexation delays, structure multi-lingual routes, and clean sitemaps.",
      outcome: "Secures permanent, high-volume organic leads across multiple product lines, outranking generic search listings."
    },
    {
      title: "2. Programmatic Paid Media & PPC",
      badge: "Global Execution",
      desc: "High-turnover Google search networks, hyper-focused LinkedIn ABM (Account Based Marketing) campaigns, and Meta advertising. Leverages programmatic attribution modeling.",
      outcome: "Optimizes target customer acquisition costs under strict global brand guidelines to eliminate capital wastage."
    },
    {
      title: "3. AI Search Optimization & GEO",
      badge: "Trending Service",
      desc: "Format your whitepapers, corporate APIs, and product listings so they rank flawlessly in LLM generators like ChatGPT, Gemini, Claude, and Perplexity engines.",
      outcome: "Positions your enterprise as the authoritative solution in automated AI-generated search landscapes."
    },
    {
      title: "4. Corporate Branding & Positioning",
      badge: "Thought Leadership",
      desc: "Bespoke high-contrast colors specifications, editorial typography choice rules, and highly curated positioning stories tailored to corporate stakeholders.",
      outcome: "Lifts corporate validation indexes and builds massive market-facing trust for large transactions."
    },
    {
      title: "5. B2B Enterprise Lead Generation",
      badge: "Account-Based Growth",
      desc: "Deploy account-based campaigns, configure HubSpot database integrations, install secure behavioral webhooks, and automate personalized corporate outreach.",
      outcome: "Feeds target pipelines with highly intentful corporate decision-maker connections continuously."
    },
    {
      title: "6. Enterprise Web Systems Development",
      badge: "Corporate Portals",
      desc: "Architect lightweight React / NextJS corporate portals and landing frames with 100% responsive fluid grids, mobile layout adaptations, and fast speeds.",
      outcome: "Provides frictionless customer spaces that load instantly while maintaining maximum defense parameters."
    },
    {
      title: "7. Thought-Leadership Content Marketing",
      badge: "Authority Curation",
      desc: "Generate premium corporate whitepapers, custom research dossiers, optimized industry insights, and founder thought-leadership content series.",
      outcome: "Secures high-quality, continuous media citations and backlink authority from major industrial resources."
    },
    {
      title: "8. Enterprise Marketing Automation",
      badge: "Decision Intelligence",
      desc: "Implement predictive analytics dashboard, CRM database lead classification algorithms, multi-step customer onboarding loops, and automated support hooks.",
      outcome: "Replaces slow manual tracking steps with flawless, programmatic data routing systems."
    },
    {
      title: "9. Executive Visibility & Social Growth",
      badge: "Corporate Branding",
      desc: "Highly structured corporate executive visibility on LinkedIn, Twitter, and major industrial forums. Combines content, layout, and PR coordination.",
      outcome: "Projects robust brand authority directly from your lead engineering and director circles."
    },
    {
      title: "10. Strategic Digital Advisory & Consulting",
      badge: "Digital Transformation",
      desc: "Custom competitor capability audits, international scale-up roadmaps, localized market entry strategy sessions, and corporate technology reviews.",
      outcome: "Formulates mathematically clear plans that save millions in redundant software and misspent media buffers."
    }
  ];

  const coreTools = [
    { name: "Google Analytics 4 & Tag Manager", cat: "Attribution & User Flow Analysis" },
    { name: "HubSpot Enterprise / Salesforce", cat: "B2B CRM & Marketing Automation" },
    { name: "SEMrush Enterprise & Ahrefs Pro", cat: "Competitor Intelligence & Crawl Budgets" },
    { name: "Google Ads & DoubleClick (DV360)", cat: "Programmatic Search & Display Network" },
    { name: "LinkedIn Ads & ABM Frameworks", cat: "Targeted Decision-Maker Acquisitions" },
    { name: "Marketo & Oracle Eloqua integrations", cat: "Enterprise Marketing Automation" },
    { name: "ChatGPT & Gemini Developer APIs", cat: "Generative AI Semantic Engine" },
    { name: "Looker Studio & Tableau Dashboard", cat: "Consolidated Marketing Attributions" }
  ];

  const corporateProcess = [
    { phase: "Phase 1: Deep Corporate Audit", desc: "Detailed analysis of site crawl budgets, current attribution models, stakeholder interviews, and competitor benchmark directories." },
    { phase: "Phase 2: Operational Roadmap", desc: "Formulate custom programmatic search plans, structure Multi-Location templates, configure CRM endpoints, and align PPC scopes." },
    { phase: "Phase 3: Secure Execution", desc: "Deploy React-based frontend layouts, register corporate schema tags, execute organic indexing sprints, and monitor attribution feeds." },
    { phase: "Phase 4: Optimization & Database Audits", desc: "Scrub slow page elements, review lead qualifications logs, adapt layouts based on mobile telemetry, and improve budgets." },
    { phase: "Phase 5: Digital Transformation", desc: "Expand to international indexes, implement automated AI marketing loops, and lock in compounding corporate pipeline values." }
  ];

  const pricingModels = [
    {
      level: "Enterprise Launch Project",
      desc: "Ideal for enterprise-level product launches, regional expansion entries, or single-segment digital updates seeking rapid validation.",
      features: ["Custom Landing Frameworks", "Fundamental Technical Audit", "Strategic ABM Setup Guide", "attributions Tracking setup", "Tactical Execution Advisory (30 days)"],
      action: "Request Project Audit Layout"
    },
    {
      level: "Enterprise Growth Suite",
      desc: "Our most popular corporate suite. Integrates comprehensive corporate SEO, systematic AI ranking protocols, and managed paid network budgets.",
      features: ["Enterprise SEO (Up to 50k Pages)", "AI Search & GEO Optimization", "Managed Google & LinkedIn Campaigns", "Secure CRM Database Sync Webhooks", "Dedicated KPI Reporting Dashboards"],
      action: "Claim Corporate Growth Audit"
    },
    {
      level: "Global Corporate Scale",
      desc: "The pinnacle of managed digital scale. Outfitted with bespoke international routing setups, dedicated consultants, and programmatic software integrations.",
      features: ["Multi-Tenant National Website setups", "Full Headless Tech Optimization", "Complete AI Chatbot & Onboarding tools", "Advanced Global Media Attributions Plan", "24/7 Priority Emergency Support SLA"],
      action: "Book Executive Advisory meeting"
    }
  ];

  const enterpriseFaqs = [
    { q: "What defines an 'Enterprise' marketing solution vs average marketing services?", a: "Enterprise solutions are engineered to handle massive data, multiple divisions, and strict security guidelines. This includes optimizing pages index structures scaling past 50,000 links, connecting legacy databases securely through custom APIs, and mapping data-leak free lead tracking loops." },
    { q: "How long until we can attribute tangible pipeline growth to Enterprise SEO?", a: "While paid campaign channels generate immediate corporate leads (within 7 to 10 days), comprehensive technical indexing models start delivering massive high-authority organic search rankings within 60 to 90 days." },
    { q: "Why must large corporations prepare for AI Search Engine Optimization (GEO)?", a: "Corporate clients utilize AI tools like ChatGPT, Claude, and Perplexity to analyze enterprise vendors. If your corporate specs, pricing terms, and compliance badges aren't structured semantically in the dataset crawl trees, these LLM generators will bypass your business during vendor evaluations." },
    { q: "Do you sign secure Non-Disclosure Agreements (NDAs) before auditing databases?", a: "Yes, absolutely. We prioritize complete corporate defense. All competitive data analysis, lead capture log records, and website structures are kept inside highly secured internal workspaces." }
  ];

  return (
    <div id="enterprise-marketing-solutions-page" className="bg-[#02050f] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Floating Call & Help Bars */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-550/30 transition-all font-mono"
          id="enterprise-whatsapp-floating-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> Enterprise WhatsApp Desk: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-teal hover:bg-white text-slate-950 p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-brand-teal/20 transition-all font-mono"
          id="enterprise-phone-floating-bar"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" /> Call Enterprise Lead: {CONTACT_NUMBER}
        </a>
      </div>

      {/* TOP HEADER NAVIGATION BAR */}
      <div className="bg-slate-950 border-b border-indigo-950 text-xs py-2.5 px-4 flex justify-between items-center z-50 sticky top-0 font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping"></span>
          <span>Enterprise Solutions Division Active</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center"
            id="back-enterprise-nav"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-350 hover:text-white transition flex items-center space-x-1 font-mono">
            <span className="text-brand-teal font-extrabold">Hot Desk:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION WITH ENTERPRISE CONVERSION PIPELINE CALCULATOR */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#040716] text-white overflow-hidden text-left border-b border-indigo-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hand Headline Content Block */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <Landmark className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>Enterprise Growth & Digital Transformation Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Enterprise Marketing Solutions That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-indigo-400">Scale & Transformation</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-mono text-left">
                Accelerate enterprise growth with AI-powered marketing pipelines, multi-segment Enterprise SEO, predictable programmatic paid advertising, and automated buyer onboarding models.
              </p>

              {/* Action Trigger Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono select-none">
                <a 
                  href="#enterprise-growth-audit" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-enterprise-consult-btn"
                >
                  <span>Get Free Enterprise Marketing Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#enterprise-funnel-sim" 
                  onClick={() => {
                    const el = document.getElementById('enterprise-funnel-sim');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-950 border border-indigo-950 hover:border-indigo-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-350 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BarChart4 className="w-4 h-4 text-brand-teal" />
                  <span>Launch Pipeline Projection Model</span>
                </a>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-indigo-950/40 font-mono text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>50k+ Pages Indexing Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Predictive ROI Budgets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Secure CRM Integrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>HIPAA & GDPR Aligned Workflows</span>
                </div>
              </div>

            </div>

            {/* Right Hand Interactive Pipeline Value Simulator */}
            <div className="lg:col-span-12 xl:col-span-5 relative" id="enterprise-funnel-sim">
              <div className="bg-[#0b0e20] rounded-3xl p-6 border border-indigo-950 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40 mb-5 font-mono">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-300 font-bold uppercase font-mono">Enterprise Funnel Projection</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-indigo-905 border-indigo-900 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    DATABASE COMPLIANT
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Marketing Budget slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Parent Marketing Budget:</span>
                      <span className="text-brand-teal font-black">${parentMarketingBudget.toLocaleString()} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="50000" 
                      max="1000000" 
                      step="50000"
                      value={parentMarketingBudget}
                      onChange={(e) => setParentMarketingBudget(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Avg Cost Per Lead */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Average Cost Per Lead (CPL):</span>
                      <span className="text-blue-400 font-black">${estimatedCostPerLead} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="400" 
                      step="10"
                      value={estimatedCostPerLead}
                      onChange={(e) => setEstimatedCostPerLead(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-blue-400"
                    />
                  </div>

                  {/* Conversion to Contract rate */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Lead-to-Contract Rate (Sales CR):</span>
                      <span className="text-indigo-400 font-black">{leadConversionRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.2" 
                      max="4.0" 
                      step="0.1"
                      value={leadConversionRate}
                      onChange={(e) => setLeadConversionRate(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-indigo-555 accent-indigo-550"
                    />
                  </div>

                  {/* Enterprise Contract Value ACV */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black font-mono">Average Contract Value (ACV):</span>
                      <span className="text-brand-teal font-black">${enterpriseContractValue.toLocaleString()} USD</span>
                    </div>
                    <input 
                      type="range" 
                      min="10000" 
                      max="250000" 
                      step="10000"
                      value={enterpriseContractValue}
                      onChange={(e) => setEnterpriseContractValue(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Projections Matrix Outputs */}
                  <div className="bg-slate-950 border border-indigo-950 rounded-xl p-4 grid grid-cols-2 gap-4 text-left font-mono">
                    
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Est. Leads Generated</span>
                      <span className="text-base font-black text-rose-400 block">{roiOutputs.generatedLeads} cases</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-black">Current Proj Value</span>
                      <span className="text-base font-black text-slate-400 block">${roiOutputs.totalPipelineValue.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black font-mono">AKGLS Est. Contracts</span>
                      <span className="text-base font-black text-brand-teal block">{roiOutputs.optimizedNewContracts} contracts</span>
                    </div>

                    <div className="space-y-0.5 border-t border-indigo-900 pt-3">
                      <span className="text-[9px] text-brand-teal uppercase font-black font-mono">AKGLS Proj Pipeline Value</span>
                      <span className="text-base font-black text-brand-teal block">${roiOutputs.optimizedPipelineValue.toLocaleString()}</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-indigo-900 flex justify-between items-center bg-indigo-950/25 px-2.5 py-1.5 rounded-lg border border-indigo-900/50 mt-1">
                      <span className="text-[10px] text-slate-350 uppercase font-black font-mono">Est Pipeline Growth Lift</span>
                      <span className="text-lg font-black text-emerald-400 font-mono">+${roiOutputs.pipelineLiftValue.toLocaleString()} ({roiOutputs.projectedRoiMultiplier}x ROI)</span>
                    </div>

                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide font-mono">
                    *Compounded ROI estimates are calculated using multi-channel SEO indexing improvements and structured LinkedIn lead acquisition templates.
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY HIGHLIGHTS */}
      <section className="py-12 bg-[#080d1e]/45 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto px-4 select-none">
          <div className="text-center space-y-1 mb-8 font-mono">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold text-center">CORPORATE CAMPAIGNS & TRUST INDEXES</h2>
            <p className="text-[10px] text-slate-500 text-center">Verified indexing performance metrics across global industries.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">120+</span>
              <p className="text-xs text-slate-400 mt-1">Enterprise Brands Scaled</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">24M+</span>
              <p className="text-xs text-slate-400 mt-1">Enterprise Leads Captured</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">410%</span>
              <p className="text-xs text-slate-400 mt-1 font-mono">Average Revenue Growth %</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-indigo-950 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">15,000+</span>
              <p className="text-xs text-slate-400 mt-1">Enterprise Keywords Ranked</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 opacity-85 pt-8 text-slate-400 font-extrabold text-[10px] font-mono">
            <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 bg-brand-teal/5 rounded-full">
              ★ ENTERPRISE MARKETING STANDARDS COMMISSIONED
            </span>
            <span className="border border-indigo-955/30 border-indigo-950 py-1 px-3.5 rounded-full">AI-DRIVEN DIGITAL TRANSFORMATION</span>
            <span className="border border-indigo-955/30 border-indigo-950 py-1 px-3.5 rounded-full text-blue-400">ABM DIRECT DECISION MAKER ENGAGEMENTS</span>
          </div>
        </div>
      </section>

      {/* WHAT ARE ENTERPRISE MARKETING SOLUTIONS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
              <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />
              <span>THE STRUCTURAL ATTRIBUTION MODEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              What Are Enterprise Marketing Solutions?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-mono">
              <p>
                **Enterprise Marketing Solutions** is an integrated, secure, and data-focused framework designed to scale digital customer acquisitions and brand authority across multiple regions and product divisions.
              </p>
              <p>
                Unlike basic marketing programs which fail past 10,000 pages or choke on legacy data architectures, enterprise frameworks combine robust speed tuning, structural crawl optimizations, targeted LinkedIn ABM, and automated lead routing logic.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs">
                AKGLS Group bridges the complex gap between technological agility and corporate expansion constraints. We execute lightweight frontend components, register structured schema tags, structure multi-division routing parameters, and prepare corporate data for conversational AI searches.
              </p>
            </div>
          </div>

          {/* Social Lead Flow dynamic ecosystem dashboard simulator */}
          <div className="lg:col-span-5 bg-[#0b0f20] border border-indigo-950 p-6 rounded-2xl relative font-mono text-xs">
            
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center border-b border-indigo-900 pb-3 mb-4 font-mono">
              Dynamic Ecosystem Simulator
            </h3>

            {/* Selector tabs */}
            <div className="grid grid-cols-3 gap-2 mb-6 select-none font-mono">
              {(['seo', 'media', 'analytics'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveEcosystemTab(tab)}
                  className={`py-1.5 px-1 text-[9.5px] font-bold rounded uppercase tracking-wider text-center border cursor-pointer ${
                    activeEcosystemTab === tab 
                      ? 'bg-brand-teal text-slate-950 border-brand-teal' 
                      : 'bg-slate-950 text-slate-400 border-indigo-950 hover:text-white'
                  }`}
                >
                  {tab === 'seo' ? '1. Scale SEO' : tab === 'media' ? '2. Paid Media' : '3. Analytics'}
                </button>
              ))}
            </div>

            <div className="space-y-4 text-left min-h-[170px]">
              {activeEcosystemTab === 'seo' && (
                <div className="space-y-3">
                  <span className="text-brand-teal uppercase font-black tracking-widest text-[9.5px] block font-mono">MULTI-LOCATION ENTERPRISE SEO INDEXES</span>
                  <p className="text-slate-300">We optimize crawl budget matrices, establish semantic collections directories, clean URL redirect patterns, and inject structured organization maps.</p>
                  <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[11px] font-mono">
                    <li>Dynamic XML crawl structures</li>
                    <li>SLA-protected core web vitals speed</li>
                    <li>Multi-lingual tag indexation mapping</li>
                  </ul>
                </div>
              )}

              {activeEcosystemTab === 'media' && (
                <div className="space-y-3">
                  <span className="text-sky-400 uppercase font-black tracking-widest text-[9.5px] block font-mono">PROGRAMMATIC PPC MANAGEMENT</span>
                  <p className="text-slate-300">Run predictable customer lead gen paths across high-intent Google search directories, retarget with precise Meta groups, and leverage LinkedIn ABM lists.</p>
                  <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[11px] font-mono">
                    <li>Programmatic bid limit models</li>
                    <li>Hyper-targeted buyer audience cohorts</li>
                    <li>attributions reporting logs</li>
                  </ul>
                </div>
              )}

              {activeEcosystemTab === 'analytics' && (
                <div className="space-y-3">
                  <span className="text-indigo-400 uppercase font-black tracking-widest text-[9.5px] block font-mono">INTELLIGENT CRM DATA ROUTING</span>
                  <p className="text-slate-300 font-mono">Connect corporate leads straight to SalesForce or HubSpot databases instantly. Implements automated scoring rules and notifications.</p>
                  <ul className="space-y-1 text-slate-400 list-disc pl-4 text-[11px] font-mono">
                    <li>Data leak audit protocols</li>
                    <li>Automated behavioral onboarding triggers</li>
                    <li>Consolidated executive board analytics</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-indigo-950 mt-4 text-center font-mono">
              <a 
                href="#enterprise-growth-audit" 
                className="text-[10.5px] text-brand-teal hover:underline font-extrabold flex items-center justify-center gap-1.5"
              >
                <span>Request Custom Corporate Digital Transformation Review</span>
                <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
              </a>
            </div>

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY ENTERPRISES NEED MODERN MARKETING SOLUTIONS */}
      <section className="py-20 bg-[#061022]/30 border-y border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4 text-center font-mono">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">ELIMINATE MARKETING WASTE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
              Why Corporate Marketing Strategies Matter
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Massive departments can suffer from localized media silos and misaligned search metrics. Programmatic enterprise solutions establish centralized tracking, multiply leads volumes, and lower media costs.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-xs font-mono">
            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Predictable Corporate Scaling</h3>
              <p className="text-slate-400 leading-relaxed">Establish reliable target metrics across multiple product lines to expand your operations into fresh international directories without down-time logs.</p>
            </div>

            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <Target className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Flawless Lead Acquisitions</h3>
              <p className="text-slate-400 leading-relaxed">Systematically capture high-intent inquiries from major corporate stakeholders, converting random site visits into predictable sales opportunities.</p>
            </div>

            <div className="p-6 bg-[#090e1d] border border-indigo-950 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider font-mono">Complete Database Defense</h3>
              <p className="text-slate-400 leading-relaxed">Designed matching strict compliance markers (HIPAA/GDPR), ensuring customer transaction histories and leads records remain perfectly secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ENTERPRISE MARKETING SERVICES BENTO GRID */}
      <section id="enterprise-services-grid" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">ENTERPRISE CORE CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our Enterprise Marketing Solutions</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            A highly optimized, modular structural blueprint engineered to manage large catalogs, secure ABM targets, and optimize long-term digital growth metrics.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {enterpriseServices.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-[#0b0e20] border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start font-mono">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                    {srv.badge}
                  </span>
                  <span className="text-xs text-slate-505 text-slate-550 mr-1">System Suite {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition font-sans">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left font-normal">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-indigo-955/20 border-indigo-950 space-y-1 text-left bg-slate-950/45 p-3 rounded-xl font-mono">
                <span className="text-[9.5px] font-bold text-slate-400 block tracking-widest mb-1 font-mono">KPI TARGET:</span>
                <div className="flex items-center space-x-1.5 text-[11px] text-brand-teal font-extrabold text-left font-mono">
                  <Check className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{srv.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENTERPRISE INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#090e1d]/45 border-y border-indigo-950 text-left font-mono">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center font-sans">
              Enterprise Industries We Work With
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-normal">
              Complex verticals request specific structural schemas and localized target parameters. We construct custom templates according to industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industriesWeServe.map((ind, iIdx) => {
              const IconComp = ind.icon;
              return (
                <div key={iIdx} className="bg-slate-900/50 border border-indigo-950 p-6 rounded-xl space-y-2.5 hover:border-brand-teal/25 hover:scale-102 transition duration-300 text-left">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950 flex items-center justify-center text-brand-teal">
                    <IconComp className="w-5 h-5 text-brand-teal animate-pulse" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-white uppercase font-mono">{ind.label}</h3>
                  <p className="text-[11px] text-slate-405 text-slate-400 leading-relaxed font-sans font-normal text-left">
                    {ind.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SYSTEMATIC PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">OPERATIONAL WORKFLOW PROTOCOLS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our Enterprise Marketing Process</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            A meticulous corporate execution schedule engineered to ensure data parameters sync beautifully with your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {corporateProcess.map((spr, pIdx) => (
            <div key={pIdx} className="bg-[#0b0f20] border border-indigo-950 p-6 rounded-xl space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-3xl font-black text-brand-teal block">Phase {pIdx+1}</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">{spr.phase}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans font-normal text-left">{spr.desc}</p>
              </div>
              <span className="text-[9px] text-slate-600 block pt-3 border-t border-indigo-950 font-mono">SLA LEVEL CHECKPOINT</span>
            </div>
          ))}
        </div>
      </section>

      {/* DYNAMIC PIPELINE VALUE WORKSPACE */}
      <section className="py-20 bg-slate-950 text-left font-mono text-xs border-y border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-indigo-50/10 border border-indigo-555/40 border-indigo-500/20 px-3.5 py-1 text-blue-400 rounded-full font-bold uppercase text-[9.5px]">
                <Activity className="w-4 h-4 text-blue-400" />
                <span>Marketing Automation Engine Monitor</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                Scale Your Revenue Channels Predictably
              </h2>

              <p className="text-[13.5px] text-slate-305 text-slate-300 font-normal leading-relaxed text-left">
                Ensure multi-channel organic search structures and active paid PPC budgets collaborate beautifully to secure high-value transactions.
              </p>

              <div className="space-y-3 text-slate-400 text-left">
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Interactive Pipeline Attribution Maps</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>GDPR-Compliant Lead Capture Endpoints</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[11px]">
                  <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Programmatic High-Value Target Lists Integration</span>
                </div>
              </div>
            </div>

            {/* Simulated analytics panel */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b0f20] border border-indigo-950 p-6 rounded-2xl space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-indigo-900 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                    <span className="text-[10px] font-bold text-white uppercase font-mono">attributions Monitoring dashboard</span>
                  </div>
                  <span className="text-[9px] text-brand-teal font-extrabold font-mono">EXEC FLOW WORKING</span>
                </div>

                <div className="space-y-4 font-mono">
                  
                  {/* Traffic parameters */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-450 text-slate-400 uppercase">organic Search lead attribution rate:</span>
                      <span className="text-emerald-400 font-bold">5.8% (Benchmark: 2.1%)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[88%] animate-pulse"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-450 text-slate-400 uppercase">ABM LinkedIn Campaign CPA optimization:</span>
                      <span className="text-brand-teal font-bold">$85 / lead (Benchmark: $190)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-teal h-full w-[94%]"></div>
                    </div>
                  </div>

                  {/* Simulated telemetry audit lines */}
                  <div className="bg-slate-950 border border-indigo-900/40 rounded-xl p-3 space-y-1 text-[9.5px]">
                    <div className="text-indigo-400 font-extrabold uppercase">Telemetry log checks:</div>
                    <div className="text-slate-400 block truncate">✓ All localized multi-location directories maps loaded.</div>
                    <div className="text-slate-400 block truncate">✓ Secure webhooks database entries synced to HubSpot endpoints.</div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLEXIBLE ENTERPRISE MARKETING SUITES */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">PREDICTABLE INVESTMENT PLANS</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Flexible Enterprise Packages</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            中央 Centralized, structured alignment plans custom designed to support large corporate milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingModels.map((prc, idx) => (
            <div key={idx} className="bg-[#0b0f20] border border-indigo-950 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl transition duration-300 flex flex-col justify-between">
              
              <div className="space-y-5">
                <div className="flex justify-between items-start font-mono">
                  <span className="text-xs uppercase tracking-widest text-brand-teal font-black">{prc.level}</span>
                  <span className="text-[10px] text-slate-500">Tier {idx+1} of 3</span>
                </div>
                
                <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans font-normal text-left">{prc.desc}</p>
                
                <ul className="space-y-2.5 pt-4 border-t border-indigo-955/20 border-indigo-950 text-left">
                  {prc.features.map((ft, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-indigo-950 mt-6">
                <a 
                  href="#enterprise-growth-audit" 
                  className="w-full block bg-slate-950 hover:bg-brand-teal hover:text-slate-950 text-slate-300 font-extrabold text-xs text-center py-3.5 rounded-xl transition border border-indigo-900 hover:border-brand-teal cursor-pointer uppercase tracking-wider"
                >
                  {prc.action}
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#060a18]/45 border-y border-indigo-950/60 font-mono text-xs">
        <div className="max-w-4xl mx-auto px-4 text-left">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none animate-pulse">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full border border-brand-teal/30">FAQ DIRECTORY</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center font-sans">
              Frequently Asked Questions About Enterprise Marketing Solutions
            </h2>
          </div>

          <div className="space-y-4">
            {enterpriseFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-905 bg-slate-900 border border-indigo-950 rounded-xl overflow-hidden transition">
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-white uppercase text-[11px] tracking-wider hover:bg-slate-950/40 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-teal transition-transform ${openFaqIdx === idx ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 pt-0 text-slate-300 leading-relaxed border-t border-indigo-950/30 text-[11.5px] font-normal leading-relaxed font-sans bg-[#030713]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Interactive schema generation preview */}
          <div className="mt-12 bg-slate-950 border border-indigo-900 rounded-2xl p-6 space-y-4 text-left font-mono">
            <div className="flex justify-between items-center border-b border-indigo-900 pb-3">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-brand-teal" />
                <span className="text-[10px] font-bold text-white uppercase">Corporate metadata Schema tags (FAQ & Service)</span>
              </div>
              <span className="text-[9px] text-slate-500 uppercase">Interactive Schema Board</span>
            </div>

            <p className="text-slate-400 text-[11px] font-sans font-normal leading-relaxed">
              We compile precise structural schema codes and output them block-by-block straight to search indexing bots:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="space-y-2 bg-[#030610] p-4 rounded-xl relative border border-indigo-950">
                <span className="text-[9px] text-slate-500 uppercase font-black">1. Service Schema Markups</span>
                <pre className="text-[9.5px] text-slate-400 overflow-x-auto truncate">
                  {enterpriseSchemaTemplates.service}
                </pre>
                <button
                  onClick={() => performSchemaCopy(enterpriseSchemaTemplates.service, 'service')}
                  className="absolute bottom-2 right-2 bg-indigo-950/60 border border-indigo-900 text-brand-teal py-0.5 px-2 rounded hover:bg-brand-teal hover:text-slate-950 text-[10px] transition font-bold"
                >
                  {schemaCopied === 'service' ? 'Copied Tag!' : 'Copy Schema tag'}
                </button>
              </div>

              <div className="space-y-2 bg-[#030610] p-4 rounded-xl relative border border-indigo-950">
                <span className="text-[9px] text-slate-500 uppercase font-black">2. FAQ Schema Markups</span>
                <pre className="text-[9.5px] text-slate-400 overflow-x-auto truncate">
                  {enterpriseSchemaTemplates.faq}
                </pre>
                <button
                  onClick={() => performSchemaCopy(enterpriseSchemaTemplates.faq, 'faq')}
                  className="absolute bottom-2 right-2 bg-indigo-950/60 border border-indigo-900 text-brand-teal py-0.5 px-2 rounded hover:bg-brand-teal hover:text-slate-950 text-[10px] transition font-bold"
                >
                  {schemaCopied === 'faq' ? 'Copied Tag!' : 'Copy Schema tag'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FREE ENTERPRISE MARKETING AUDIT FORM SECTION */}
      <section id="enterprise-growth-audit" className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20"> central validation center</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
              Get Your Free Enterprise Marketing Audit
            </h2>
            <p className="text-slate-350 text-[13px] text-slate-400 leading-relaxed font-sans font-normal text-left">
              Our audit is custom designed to diagnose localized crawl budget issues, verify conversion leakage logs, review CRM routing configurations, and audit brand SEO alignments.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-xs leading-relaxed text-left text-slate-300">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase text-[11px]">1. Crawl Budget Diagnostic checks</h4>
                  <p className="text-slate-400 text-[11px] font-sans font-normal">Check up indexed links scaling past 50k to ensure zero rendering loops remain.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs leading-relaxed text-left text-slate-300">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase text-[11px]">2. Generative Search (GEO) Visibility index</h4>
                  <p className="text-slate-400 text-[11px] font-sans font-normal">Verify if search LLMs (ChatGPT/Claude/Gemini) recommend your enterprise specs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs leading-relaxed text-left text-slate-300">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase text-[11px]">3. Custom CRM Data-leak Checks</h4>
                  <p className="text-slate-400 text-[11px] font-sans font-normal text-left">Audit form tracking endpoints to ensure user entries route securely without loss.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Marketing audit form layout */}
          <div className="lg:col-span-5 bg-[#0b0f20] p-6 rounded-2xl border border-indigo-950 relative">
            <div className="absolute top-2 right-2 bg-slate-950 border border-indigo-900 border-indigo-900/40 px-2 py-0.5 rounded text-[8.5px] text-brand-teal uppercase font-mono">
              ★ Audit desk
            </div>

            <h3 className="text-center font-bold text-white uppercase tracking-wider border-b border-indigo-900/40 pb-3 mb-5 text-sm font-mono">
              Enterprise Evaluation Intake Form
            </h3>

            {auditSubmitted ? (
              <div className="bg-slate-950/80 border border-brand-teal/30 p-8 rounded-xl text-center space-y-4 font-mono">
                <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto animate-bounce" />
                <h4 className="text-lg font-black text-white uppercase">Evaluation Request Received</h4>
                <p className="text-[11px] text-slate-400 leading-normal font-sans font-normal text-center">
                  Our Corporate Digital Transformation Team is spinning up index diagnostics and CRM endpoint assessments for **{auditForm.companyName}**. We will connect via **{auditForm.email}** inside 4 business hours.
                </p>
                <div className="p-3 bg-brand-teal/5 rounded-lg border border-brand-teal/20 tracking-wider uppercase text-[10px] text-brand-teal font-extrabold text-center">
                  Secure Intake Verified
                </div>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="space-y-1 text-left">
                  <label className="text-[9.5px] text-slate-400 uppercase font-bold block">Corporate Company Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corporation"
                    value={auditForm.companyName}
                    onChange={(e) => setAuditForm({ ...auditForm, companyName: e.target.value })}
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-white focus:outline-none focus:border-brand-teal transition"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[9.5px] text-slate-400 uppercase font-bold block font-mono">Website landing URL:</label>
                  <input
                    type="url"
                    required
                    placeholder="https://acme.com"
                    value={auditForm.websiteUrl}
                    onChange={(e) => setAuditForm({ ...auditForm, websiteUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-white focus:outline-none focus:border-brand-teal transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-[9.5px] text-slate-400 uppercase font-bold block">Contact Email:</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. director@acme.com"
                      value={auditForm.email}
                      onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-white focus:outline-none focus:border-brand-teal transition"
                    />
                  </div>

                  <div className="space-y-1 text-left font-mono">
                    <label className="text-[9.5px] text-slate-400 uppercase font-bold block">Direct phone number:</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-white focus:outline-none focus:border-brand-teal transition"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[9.5px] text-slate-400 uppercase font-bold block">Primary Industrial Sector:</label>
                  <select
                    value={auditForm.industry}
                    onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-brand-teal transition cursor-pointer"
                  >
                    <option value="SaaS & Technology">SaaS & Technology</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Healthcare Systems">Healthcare Systems</option>
                    <option value="Finance & Banking">Finance & Banking</option>
                    <option value="Education">Education</option>
                    <option value="IoT Enterprises">IoT Enterprises</option>
                    <option value="Ecommerce Enterprises">Ecommerce Enterprises</option>
                  </select>
                </div>

                <div className="space-y-1 text-left font-mono">
                  <label className="text-[9.5px] text-slate-400 uppercase font-bold block">Current Operational Challenges:</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Multi-location organic index failure, slow crawl budgets, lead attributing leaks..."
                    value={auditForm.challenges}
                    onChange={(e) => setAuditForm({ ...auditForm, challenges: e.target.value })}
                    className="w-full bg-slate-950 border border-indigo-950 rounded-lg p-3 text-white focus:outline-none focus:border-brand-teal transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-teal hover:bg-white text-slate-950 font-black py-3.5 rounded-xl transition duration-300 cursor-pointer uppercase tracking-wider text-center flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Transmit Evaluation Specifications</span>
                </button>

              </form>
            )}

          </div>

          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* FINAL CALL SECTION */}
      <section className="py-24 bg-[#030612] text-center border-t border-indigo-950 relative overflow-hidden font-mono">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 space-y-8 relative z-10 select-none animate-pulse">
          <span className="text-xs font-black text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-4 py-1.5 rounded-full border border-brand-teal/30">
            SECURE ENTERPRISE RETRIBUTION
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none font-sans">
            Ready to Scale Your Enterprise Growth?
          </h2>

          <p className="text-slate-350 text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Eliminate misaligned tracking and capture highly profitable buyer intent across organic search engines, AI search networks, and programmatic media funnels with guaranteed SLA.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#enterprise-growth-audit" 
              className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:scale-102 transition duration-300 cursor-pointer uppercase tracking-wider text-xs"
            >
              Consult Enterprise Audit Solutions
            </a>
            <a
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
              className="bg-slate-950 hover:bg-slate-900 border border-indigo-900 text-slate-300 font-extrabold px-8 py-4 rounded-xl transition cursor-pointer uppercase tracking-wider text-xs"
            >
              Direct Executive hot line
            </a>
          </div>

          {/* SLA alignments */}
          <div className="flex justify-center items-center gap-4 text-slate-500 text-[10.5px]">
            <span>✓ Complete Corporate NDA Guaranteed</span>
            <span>•</span>
            <span>✓ CentralizedAttributions Attribution Analytics</span>
            <span>•</span>
            <span>✓ SLA Guaranteed response lines</span>
          </div>

        </div>
      </section>

    </div>
  );
}

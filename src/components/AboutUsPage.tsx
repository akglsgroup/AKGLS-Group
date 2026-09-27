import React, { useState } from 'react';
import { 
  Cpu, Layers, Bot, Sparkles, Globe, Database, Search, BarChart3, 
  Workflow, ShieldCheck, CheckCircle2, ArrowRight, ChevronRight, 
  Code2, Terminal, Network, Compass, Microscope, Rocket, Target, 
  LineChart, Building2, Server, BrainCircuit, Scale, Check,
  Zap, ArrowUpRight, Award, Clock, Users2, Landmark, Stethoscope, 
  Factory, Briefcase, Home, ShoppingCart, GraduationCap, ChevronDown
} from 'lucide-react';
import AkglsLogo from './AkglsLogo';

interface AboutUsPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

export default function AboutUsPage({ onBackToHome, openProposalForm }: AboutUsPageProps) {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeEngine, setActiveEngine] = useState<'labs' | 'solutions'>('labs');
  const [activeStage, setActiveStage] = useState<number>(0);

  const transformationPillars = [
    {
      id: "01",
      name: "Intelligent Technology",
      tagline: "Build the digital foundation.",
      summary: "We engineer resilient, high-throughput technology systems that enable organizations to operate more efficiently and scale with confidence.",
      icon: Cpu,
      color: "from-blue-500 to-indigo-600",
      accent: "text-blue-400 border-blue-500/20 bg-blue-500/10",
      capabilities: [
        "Custom Software Development",
        "Enterprise Web & Cloud Applications",
        "Cross-Platform Mobile Applications",
        "Enterprise API & Microservices Development",
        "Legacy Architecture Modernization",
        "Multi-Cloud & Hybrid Infrastructure",
        "SaaS Platforms & Multi-Tenant Systems",
        "E-Commerce Solutions & Portals",
        "CRM & ERP Systems Integration",
        "Distributed Database Architecture",
        "CI/CD, DevOps & Cloud Deployment",
        "High-Availability Infrastructure & Security"
      ],
      philosophy: "We focus on building systems that are scalable, maintainable, secure, and rigorously business-oriented—engineered to eliminate technical debt before it begins."
    },
    {
      id: "02",
      name: "Artificial Intelligence & Automation",
      tagline: "Turn technology into intelligence.",
      summary: "AI is reshaping how modern businesses create, operate, market, and serve customers. We help organizations identify where AI generates genuine operational leverage.",
      icon: BrainCircuit,
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      capabilities: [
        "Generative AI & Multi-Modal Foundation Systems",
        "Custom LLM Integration & Fine-Tuning",
        "Autonomous AI Agents & Task Orchestration",
        "Enterprise RAG (Retrieval-Augmented Generation)",
        "AI-Powered Enterprise Knowledge Systems",
        "AI Content Intelligence & Semantics",
        "End-to-End Workflow Automation",
        "Intelligent Document Processing (IDP)",
        "AI Customer Support & Dynamic Routing",
        "Predictive Analytics & Forecasting Models",
        "Recommendation Engines & Personalization",
        "Conversational Internal Data Interfaces"
      ],
      philosophy: "Rather than treating AI as an isolated cosmetic gimmick or third-party toy, we look at how synthetic intelligence becomes part of the enterprise day-to-day operating system."
    },
    {
      id: "03",
      name: "Digital Growth & Discovery",
      tagline: "Make businesses discoverable in the new search ecosystem.",
      summary: "Digital discovery is evolving rapidly. Traditional search engines are now joined by AI assistants, generative search engines, and multi-surface answer networks.",
      icon: Search,
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
      capabilities: [
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "AI SEO & Entity Knowledge Graph Engineering",
        "Enterprise Technical SEO & Web Vitals",
        "Comprehensive Site Audits & Crawl Budgeting",
        "Hyper-Local SEO & Map Pack Domination",
        "High-Authority Digital PR & Citation Seeding",
        "Programmatic Content Strategy & Siloing",
        "Paid Acquisition (Google Ads, Performance Max)",
        "Social Ad Acceleration (Meta & LinkedIn Ads)",
        "Conversion Rate Optimization (CRO)",
        "Multi-Surface Visual, Voice & Video Discovery"
      ],
      philosophy: "Our objective is not simply to generate ephemeral vanity traffic. We engineer authoritative discoverability that directly drives qualified commercial pipeline and durable revenue."
    },
    {
      id: "04",
      name: "Data, Automation & Business Intelligence",
      tagline: "Convert business data into operational intelligence.",
      summary: "Organizations generate vast volumes of raw data daily. The existential challenge is translating data into decisive, automated business execution.",
      icon: BarChart3,
      color: "from-purple-500 to-pink-600",
      accent: "text-purple-400 border-purple-500/20 bg-purple-500/10",
      capabilities: [
        "Unified Business Intelligence (BI) Architecture",
        "Marketing Attribution & Cross-Channel Analytics",
        "Customer Lifetime Value (LTV) & Churn Analysis",
        "Real-Time Executive Performance Dashboards",
        "Enterprise Data Pipeline & ETL Integrations",
        "Automated Multi-Source Financial Reporting",
        "Conversion Tracking & Event Infrastructure",
        "Multi-Touch Customer Journey Mapping",
        "Business Process Automation (BPA)",
        "Automated Lead Scoring & CRM Enrichment",
        "Cross-System Workflow Orchestration",
        "Custom Automated Regulatory Reporting"
      ],
      philosophy: "We eliminate disconnected data silos, replace manual spreadsheet toil, and construct a single, inviolable source of operational truth."
    }
  ];

  const transformationStages = [
    {
      step: "01",
      title: "Discover",
      subtitle: "Understand the Foundation",
      desc: "Deep-dive inquiry into the enterprise: strategic objectives, ideal customer profiles, existing tech stacks, process bottlenecks, data flows, and market opportunities.",
      deliverables: ["Stakeholder discovery workshops", "Tech stack ecosystem audit", "Current-state workflow topology"]
    },
    {
      step: "02",
      title: "Diagnose",
      subtitle: "Pinpoint Inefficiencies",
      desc: "Expose critical architecture gaps, operational redundancies, data fragmentation, search invisibility, and technical friction throttling business scale.",
      deliverables: ["Technical debt & gap report", "Data friction analysis", "Growth constraint blueprint"]
    },
    {
      step: "03",
      title: "Design",
      subtitle: "Architect the Target State",
      desc: "Formulate the comprehensive target architecture, integration blueprint, AI implementation roadmap, customer journey, and measurable transformation milestone schedule.",
      deliverables: ["Target system architecture", "Engineering sprint roadmap", "Security & governance specs"]
    },
    {
      step: "04",
      title: "Engineer",
      subtitle: "Build & Integrate",
      desc: "Our cross-functional teams write production-grade code, configure resilient cloud infrastructure, deploy neural models, integrate APIs, and engineer discovery networks.",
      deliverables: ["Custom software & API codebases", "Trained AI models & vector pipelines", "Automated CI/CD infrastructure"]
    },
    {
      step: "05",
      title: "Activate",
      subtitle: "Deploy to Real Operations",
      desc: "Seamless production rollout integrated directly into daily employee routines, existing ERP/CRM databases, customer touchpoints, and analytics telemetry.",
      deliverables: ["Zero-downtime deployment", "Staff training & documentation", "Live operational telemetry"]
    },
    {
      step: "06",
      title: "Optimize",
      subtitle: "Iterate & Accelerate",
      desc: "Digital transformation is an ongoing competitive moat. We monitor live telemetry, capture performance metrics, optimize algorithmic models, and roll out new capabilities.",
      deliverables: ["Algorithmic fine-tuning", "Continuous performance reports", "Iterative capability releases"]
    }
  ];

  const industries = [
    { name: "Technology & SaaS", desc: "Product-led growth, scalable cloud backends, developer documentation indexing, and LLM search citations.", icon: Terminal, href: "/saas-marketing-solutions" },
    { name: "Healthcare & Life Sciences", desc: "HIPAA-conscious workflows, clinical patient acquisition, localized medical authority, and verified entity graphs.", icon: Stethoscope, href: "/healthcare-marketing-services" },
    { name: "Financial Services & Fintech", desc: "Rigorous compliance architectures, institutional wealth funnels, secure client portals, and algorithmic market authority.", icon: Landmark, href: "/finance-marketing-services" },
    { name: "Manufacturing & Industrial", desc: "B2B catalog indexing, legacy ERP integrations, distributor portal engineering, and global export lead pipelines.", icon: Factory, href: "/manufacturing-marketing-services" },
    { name: "Legal & Professional Services", desc: "High-intent client intake automation, practice area authority, jurisdictional geo-fencing, and partner profile graphs.", icon: Scale, href: "/law-firm-marketing-services" },
    { name: "Real Estate & PropTech", desc: "Hyper-local MLS integrations, architectural 3D showcases, investor lead generation, and dynamic market map packs.", icon: Home, href: "/real-estate-marketing-services" },
    { name: "Retail & Global E-Commerce", desc: "Headless commerce architectures, automated product feed syndication, visual AI search, and cart checkout velocity.", icon: ShoppingCart, href: "/ecommerce-growth-solutions" },
    { name: "Education & EdTech", desc: "Student enrollment funnels, interactive LMS platform engineering, institutional authority, and degree search visibility.", icon: GraduationCap, href: "/education-marketing-services" }
  ];

  const labsExplorations = [
    { title: "Artificial Intelligence", desc: "Core algorithms and neural network orchestration." },
    { title: "Generative AI Systems", desc: "Multi-modal model adaptation and prompt engineering." },
    { title: "Enterprise LLM Systems", desc: "Private model hosting, quantization, and evaluation." },
    { title: "Advanced RAG Architectures", desc: "Vector indexing, hybrid dense/sparse retrieval." },
    { title: "Autonomous AI Agents", desc: "Multi-agent collaboration and goal-seeking workflows." },
    { title: "Workflow Automation", desc: "Event-driven microservices and state machines." },
    { title: "API Integrations & Mesh", desc: "Unified enterprise connectivity and webhook pipelines." },
    { title: "Real-Time Data Pipelines", desc: "Streaming telemetry, ETL transformations, and lakehouses." },
    { title: "Next-Gen Search Engines", desc: "Vector search, neural rerankers, and latent semantics." },
    { title: "Generative Engine Optimization", desc: "Entity graph seeding for ChatGPT, Perplexity, Claude." },
    { title: "Answer Engine Optimization", desc: "Fact-based snippet synthesis and direct citation maps." },
    { title: "Visual & Multi-Modal Search", desc: "Computer vision product recognition and visual indexation." },
    { title: "Voice & Conversational Search", desc: "Natural language acoustic parsing and smart speaker prompts." },
    { title: "Predictive Analytics Models", desc: "Time-series forecasting, churn scoring, and revenue models." },
    { title: "Intelligent Business Workflows", desc: "Human-in-the-loop validation and automated synthesis." }
  ];

  const solutionsCapabilities = [
    { title: "Enterprise Software Engineering", desc: "Custom web applications, core ERPs, and distributed cloud microservices." },
    { title: "Modern Web Platform Engineering", desc: "High-concurrency React/Next.js/Node architectures with sub-second paint times." },
    { title: "Native & Cross-Platform Mobile Apps", desc: "Seamless iOS and Android applications with offline-first local synchronization." },
    { title: "Cloud Architecture & Modernization", desc: "AWS, GCP, and Azure serverless pipelines engineered for 99.99% availability." },
    { title: "CRM & ERP Deep System Integrations", desc: "Salesforce, HubSpot, SAP, NetSuite, and custom Postgres/GraphQL interfaces." },
    { title: "Modern E-Commerce Storefronts", desc: "Headless Shopify Plus, custom checkout logic, and high-velocity catalog engines." },
    { title: "Marketing Technology Stacks", desc: "Customer data platforms (CDP), server-side tagging, and attribution pipelines." },
    { title: "Business Process Automation", desc: "Eliminating thousands of manual labor hours through automated orchestrators." },
    { title: "Enterprise Analytics Systems", desc: "Turnkey PowerBI, Looker, and custom dashboard suites connected to raw warehouse data." },
    { title: "Digital Experience Platforms (DXP)", desc: "Omnichannel customer portals, personalized content feeds, and secure logins." },
    { title: "Search & Growth Systems", desc: "Comprehensive Technical SEO, programmatic content engines, and paid funnel systems." },
    { title: "AI-Enabled Business Applications", desc: "Deployable internal copilots, ticket routing bots, and semantic document parsers." }
  ];

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen selection:bg-brand-indigo selection:text-white">
      
      {/* TOP HEADER BREADCRUMB STRIP */}
      <div className="border-b border-slate-800/80 bg-[#070b16]/70 backdrop-blur-md sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button 
              onClick={onBackToHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-brand-teal font-semibold">About AKGLS Group</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GLOBAL LABS & SOLUTIONS ECOSYSTEM</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION — ENTERPRISE TECH IDENTITY */}
      <header className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-800/70">
        {/* Background ambient mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-teal-500/10 to-blue-600/15 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                AK Global Labs & Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
              Engineering Digital Transformation.{' '}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Building Intelligent Businesses.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
              <strong className="text-white font-semibold">AK Global Labs & Solutions (AKGLS Group)</strong> is a digital transformation and technology solutions company focused on helping businesses build, modernize, automate, and scale their digital operations.
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              We bring together <strong>technology, artificial intelligence, software engineering, data, digital growth, automation, and strategic consulting</strong> under one unified, integrated ecosystem.
            </p>

            {/* Core Objective Callout */}
            <div className="pt-4">
              <div className="bg-gradient-to-r from-slate-900/90 via-[#0d1628] to-slate-900/90 border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left max-w-3xl mx-auto">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-teal-400 to-indigo-500" />
                <p className="text-xs uppercase font-mono tracking-widest text-teal-400 font-bold mb-2">Our Core Mission</p>
                <blockquote className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed italic">
                  “Help organizations move from fragmented digital tools and processes to connected, intelligent, scalable business systems.”
                </blockquote>
                <p className="text-xs sm:text-sm text-slate-400 mt-3">
                  From laying the initial digital foundation for an emerging business to re-architecting complex enterprise operations, AKGLS Group combines rigorous strategic thinking with hands-on technology execution.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  if (openProposalForm) {
                    openProposalForm();
                  } else {
                    const el = document.querySelector('#audit-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Schedule Architecture Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#four-pillars"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all flex items-center gap-2"
              >
                <span>Explore 4 Pillars</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>
        </div>

        {/* Global Key Metrics Ribbon */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-center p-3 border-r border-slate-800/60 last:border-none">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">10+ Years</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Systems Engineering</div>
            </div>
            <div className="text-center p-3 border-r border-slate-800/60 last:border-none">
              <div className="text-2xl sm:text-3xl font-black text-teal-400 font-mono">2 Engines</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">AK Labs & AK Solutions</div>
            </div>
            <div className="text-center p-3 border-r border-slate-800/60 last:border-none">
              <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">4 Pillars</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Transformation Stack</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">100+ Systems</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Scaled Globally</div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1: WHO WE ARE (THE DUAL STRUCTURE) */}
      <section id="who-we-are" className="py-20 border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4" />
              <span>Section 01 // Organizational Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Who We Are: The Dual-Engine Structure
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              AKGLS Group operates under the banner of <strong>AK Global Labs & Solutions</strong>, purposefully structured around two complementary capabilities that turn breakthrough experimentation into enterprise reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* AK LABS CARD */}
            <div className="bg-gradient-to-br from-[#0c1424] to-[#070c18] border border-teal-500/30 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between group hover:border-teal-500/50 transition-all shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase">
                    <Microscope className="w-3.5 h-3.5" />
                    <span>Research & Applied Intelligence</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">ENGINE_01</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  AK Labs
                </h3>

                <p className="text-teal-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Research • Innovation • Intelligence • Experimentation
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  AK Labs explores emerging technologies, reverse-engineers modern search and retrieval algorithms, constructs AI prototypes, tests multi-agent workflows, and proves algorithmic hypotheses before they impact client infrastructure.
                </p>

                <div className="pt-2 border-t border-slate-800/80">
                  <p className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">Core Focus Areas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Generative AI", "LLM Systems", "RAG Architecture", "AI Agents", "GEO & AEO Algorithms", "Vector Search", "Automated Pipelines"].map((item, i) => (
                      <span key={i} className="text-[11px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Operating Philosophy:</span>
                <span className="font-mono text-teal-400 font-semibold">Experiment → Validate → Systemize</span>
              </div>
            </div>

            {/* AK SOLUTIONS CARD */}
            <div className="bg-gradient-to-br from-[#111328] to-[#070a16] border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/50 transition-all shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold uppercase">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>Engineering & Execution</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">ENGINE_02</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  AK Solutions
                </h3>

                <p className="text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Engineering • Implementation • Transformation • Growth
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  AK Solutions takes validated breakthroughs and strategy from AK Labs and transforms them into hardened, battle-tested software, scalable cloud architecture, deep enterprise integrations, and high-velocity digital growth engines.
                </p>

                <div className="pt-2 border-t border-slate-800/80">
                  <p className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">Core Delivery Areas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Enterprise Web & Mobile", "Cloud Infrastructure", "CRM & ERP Integration", "Business Automation", "Technical SEO Systems", "Data Dashboards", "E-Commerce Engines"].map((item, i) => (
                      <span key={i} className="text-[11px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Operating Philosophy:</span>
                <span className="font-mono text-indigo-400 font-semibold">Scale → Secure → Compound ROI</span>
              </div>
            </div>

          </div>

          {/* Technology Value Principle */}
          <div className="mt-8 bg-slate-950 border border-slate-800 rounded-xl p-5 text-center max-w-4xl mx-auto">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">Our Founding Thesis:</span> We believe technology should not exist simply because it is new. It must exist because it <strong className="text-teal-400">solves a concrete business problem</strong>, creates measurable enterprise value, radically improves operational efficiency, or unlocks defensible commercial opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHAT WE DO (THE SYSTEMS-LEVEL APPROACH) */}
      <section className="py-20 border-b border-slate-800/80 bg-[#02050c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Network className="w-4 h-4" />
              <span>Section 02 // Problem Solving Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              What We Do: The Systems-Level Approach
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              Modern enterprises rarely suffer from a single isolated technology deficiency. They suffer from interconnected systemic friction.
            </p>
          </div>

          {/* The Fragmentation Problem vs Systems Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900/80 border border-rose-500/20 rounded-xl p-6">
                <p className="text-xs font-mono text-rose-400 uppercase font-bold tracking-wider mb-3">
                  The Friction of Disconnected Point Solutions:
                </p>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  A typical enterprise suffers from multiple overlapping bottlenecks simultaneously:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Outdated web frontends
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Disconnected cloud apps
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Inefficient manual workflows
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Fragmented customer data
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Poor search visibility
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Costly manual operations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Disjointed marketing tools
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Unmaintainable legacy code
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Inconsistent analytics
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400">×</span> Inability to adopt AI
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  Hiring five separate point vendors creates five new silos and compounds technical debt.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#0a1324] to-slate-950 border border-teal-500/30 rounded-2xl p-6 sm:p-8">
                <div className="inline-block px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 text-xs font-mono font-bold uppercase mb-3">
                  The AKGLS Systems Advantage
                </div>
                <h3 className="text-2xl font-bold text-white font-display mb-3">
                  We Analyze the Whole Living Business Architecture
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  AKGLS takes an integrated, architectural systems approach. We analyze how your underlying technology, human talent, data pipelines, customer interactions, operational workflows, and strategic commercial targets intersect—and engineer a cohesive digital foundation.
                </p>

                {/* Ecosystem Pipeline flow */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono uppercase text-slate-400 font-bold">Integrated Execution Vector:</p>
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex flex-wrap items-center gap-2 leading-loose">
                    <span className="text-teal-400 font-bold">Digital Transformation</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-cyan-400 font-bold">Software Engineering</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-indigo-400 font-bold">AI & Automation</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-purple-400 font-bold">Cloud & Infrastructure</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-blue-400 font-bold">Data & Analytics</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-emerald-400 font-bold">Digital Growth</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-orange-400 font-bold">Search & Discovery</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-teal-300 font-bold">Enterprise Scaled Systems</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: THE DUAL-ENGINE MODEL DEEP-DIVE */}
      <section className="py-20 border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Workflow className="w-4 h-4" />
                <span>Section 03 // Operating Engines</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                The AKGLS Dual-Engine Model in Depth
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
                Explore how AK Labs and AK Solutions operate synchronously to invent and harden enterprise capabilities.
              </p>
            </div>

            {/* Engine Toggle Buttons */}
            <div className="flex items-center bg-slate-900 border border-slate-800 p-1.5 rounded-xl">
              <button
                onClick={() => setActiveEngine('labs')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeEngine === 'labs' 
                    ? 'bg-teal-500 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AK Labs (15 Areas)
              </button>
              <button
                onClick={() => setActiveEngine('solutions')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeEngine === 'solutions' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AK Solutions (12 Domains)
              </button>
            </div>
          </div>

          {/* Engine Content */}
          {activeEngine === 'labs' ? (
            <div className="space-y-6">
              <div className="bg-[#0b1322] border border-teal-500/30 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-teal-400 font-bold uppercase">AK Labs Engine</span>
                    <h3 className="text-2xl font-bold text-white font-display">Applied Innovation & Emerging Technologies</h3>
                  </div>
                  <div className="text-xs font-mono bg-teal-500/10 border border-teal-500/30 text-teal-300 px-3 py-1.5 rounded-lg">
                    Formula: Experiment → Validate → Systemize → Deploy
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {labsExplorations.map((item, idx) => (
                    <div key={idx} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 hover:border-teal-500/40 transition-all">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono text-teal-400 bg-teal-950/50 px-1.5 py-0.5 rounded border border-teal-900/50">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-[#0f1126] border border-indigo-500/30 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 font-bold uppercase">AK Solutions Engine</span>
                    <h3 className="text-2xl font-bold text-white font-display">Enterprise Execution & Commercial Transformation</h3>
                  </div>
                  <div className="text-xs font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded-lg">
                    Mandate: Hardened Architecture Designed for Operational Reality
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {solutionsCapabilities.map((item, idx) => (
                    <div key={idx} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 hover:border-indigo-500/40 transition-all">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/50 px-1.5 py-0.5 rounded border border-indigo-900/50">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 4: THE FOUR TRANSFORMATION PILLARS */}
      <section id="four-pillars" className="py-20 border-b border-slate-800/80 bg-[#02050c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Section 04 // Core Capability Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Our Four Transformation Pillars
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              AKGLS Group organizes its end-to-end engineering, advisory, and execution capabilities around four interdependent pillars.
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {transformationPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isSelected = activePillar === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected 
                      ? 'bg-slate-900 border-teal-400/60 shadow-xl shadow-teal-500/10' 
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-500 font-bold">{pillar.id}</span>
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-teal-400' : 'text-slate-400'}`} />
                  </div>
                  <h3 className={`text-base font-bold font-display ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {pillar.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">{pillar.tagline}</p>
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-indigo-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Pillar Showcase */}
          {(() => {
            const pillar = transformationPillars[activePillar];
            const Icon = pillar.icon;
            return (
              <div className="bg-gradient-to-br from-slate-900 via-[#0a1222] to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-teal-500/15 border border-teal-500/30 text-teal-300">
                        PILLAR {pillar.id}
                      </span>
                      <span className="text-sm font-mono text-slate-400">{pillar.tagline}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
                      {pillar.name}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-24 h-24 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                    <Icon className="w-12 h-12 text-teal-400" />
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">
                    Pillar Capabilities & Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {pillar.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/70 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
                    <span className="font-mono text-teal-400 font-bold shrink-0">PHILOSOPHY:</span>
                    <span>{pillar.philosophy}</span>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* SECTION 5: OUR 6-STAGE TRANSFORMATION APPROACH */}
      <section className="py-20 border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>Section 05 // Delivery Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Our 6-Stage Transformation Framework
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              We believe successful digital transformation does not begin with tools or vendor hype. It begins with rigorous understanding of the <strong>business</strong>.
            </p>
          </div>

          {/* 6-Stage Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformationStages.map((stage, idx) => (
              <div 
                key={idx}
                className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 hover:border-indigo-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-teal-400 group-hover:text-teal-300 transition-colors">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 uppercase">
                      Stage {stage.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-1">{stage.title}</h3>
                  <p className="text-xs font-mono text-indigo-400 mb-3 font-semibold">{stage.subtitle}</p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{stage.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <p className="text-[11px] font-mono uppercase text-slate-500 font-bold mb-2">Key Milestones:</p>
                  <ul className="space-y-1">
                    {stage.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs sm:text-sm text-slate-400 font-mono">
            Transformation is not a one-time project. It is a continuous, compounding evolution.
          </div>

        </div>
      </section>

      {/* SECTION 6: TECHNOLOGY MEETS BUSINESS STRATEGY */}
      <section className="py-20 border-b border-slate-800/80 bg-[#02050c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Section 06 // Executive Alignment</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Where Technology Meets Business Strategy
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                One of the greatest points of failure across enterprise digital initiatives is the chasm between <strong>Business Strategy</strong> and <strong>Technology Execution</strong>.
              </p>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-amber-400 font-mono font-bold">THE GAP:</span>
                  <span>Executive leadership understands market targets, margins, and expansion priorities, while developers focus strictly on ticket backlogs and code delivery.</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-teal-400 font-mono font-bold">OUR BRIDGE:</span>
                  <span>AKGLS operates fluently across both layers. We translate executive goals directly into system architecture, tech stacks, and quantifiable business outcomes.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-teal-500/20 text-xs font-mono text-teal-300">
                Business Objectives → Technology Strategy → System Architecture → Production Implementation → Measurable Commercial Outcomes
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">Executive Decision Matrix:</div>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-xs font-bold text-white mb-1">Cost vs. Defensibility</div>
                    <div className="text-xs text-slate-400">Selecting technology for durable enterprise sovereignty rather than recurring subscription bloat.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-xs font-bold text-white mb-1">Speed to Market vs. Technical Debt</div>
                    <div className="text-xs text-slate-400">Balancing rapid deployment agility with robust, modular code that does not require total rewrites in two years.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-xs font-bold text-white mb-1">Human Augmentation vs. Full Automation</div>
                    <div className="text-xs text-slate-400">Deploying AI to empower knowledge workers, eliminate manual toil, and elevate strategic decision quality.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: OUR AI-FIRST PERSPECTIVE */}
      <section className="py-20 border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Bot className="w-4 h-4" />
              <span>Section 07 // Artificial Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Our AI-First Perspective
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              Artificial intelligence is becoming the foundational infrastructure layer of modern commerce. We see AI not merely as a chatbot, but as an <strong>omnipresent intelligence layer across the entire business</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Intelligent Query Routing", desc: "Customer tickets and sales leads instantly classified and routed with full semantic context." },
              { title: "Conversational Enterprise Knowledge", desc: "All company SOPs, contracts, and codebase documentation searchable via natural language RAG." },
              { title: "Autonomous Workflow Orchestration", desc: "Multi-step operational workflows executing automatically across CRM, ERP, and communication tools." },
              { title: "Continuous Data-Driven Decisions", desc: "Marketing spend, pricing elasticity, and inventory decisions triggered by real-time predictive models." },
              { title: "Intelligent Sales Copilots", desc: "Real-time client intelligence, automated proposal generation, and competitive talking points." },
              { title: "Automated Document Processing", desc: "Instant extraction, validation, and schema insertion of invoices, receipts, and legal drafts." },
              { title: "Conversational Business Intelligence", desc: "Executives querying company databases with natural language to generate instant visual charts." },
              { title: "Dedicated Employee Digital Assistants", desc: "Customized copilots trained on individual department data to multiply daily worker throughput." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/40 transition-all">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mb-3" />
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-950/40 via-slate-950 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-emerald-200 font-medium">
              “AI should augment people, automate repetitive toil, and drastically elevate the precision of enterprise decision-making.”
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 8: THE NEW ERA OF SEARCH (GEO & AEO POSITIONING) */}
      <section className="py-20 border-b border-slate-800/80 bg-[#02050c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Globe className="w-4 h-4" />
              <span>Section 08 // Search & Discovery Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              The New Era of Multi-Surface Search
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              The historic definition of "search" has shattered. Businesses can no longer rely solely on 10 blue links on traditional search engine results pages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Today, brand discovery and customer procurement decisions are distributed across a decentralized ecosystem of generative AI models, answer engines, and vertical search platforms:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {[
                  "Google Search & Maps",
                  "Google AI Overviews",
                  "Perplexity AI Citations",
                  "OpenAI ChatGPT Search",
                  "Anthropic Claude",
                  "Apple Intelligence",
                  "Meta AI Search",
                  "TikTok & YouTube Video",
                  "Vertical Directories"
                ].map((channel, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{channel}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-5 mt-4">
                <h3 className="text-sm font-bold text-white mb-2">
                  Pioneering Generative Engine Optimization (GEO) & AEO
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  AKGLS Group is an industry pioneer in multi-surface discovery. Through rigorous Entity Knowledge Graph Engineering, semantic schema architectures, and authoritative citation networks, we ensure your organization is accurately indexed, cited, and recommended as the undisputed ground-truth authority by both human searchers and neural LLM crawlers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#071322] to-slate-950 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="text-xs font-mono uppercase text-cyan-400 font-bold">The Ground-Truth Standard</div>
                <div className="text-2xl font-bold text-white font-display">
                  From Page Rank to Neural Verification
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Traditional SEO focused on manipulating keyword density. Modern generative search relies on semantic entity triplets (Subject → Predicate → Object), authoritative citation corroboration, and brand consensus across verified knowledge databases.
                </p>
                <div className="pt-2">
                  <a
                    href="/geo-services"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span>Read Deep-Dive on GEO Services</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: INDUSTRIES WE TRANSFORM */}
      <section className="py-20 border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4" />
              <span>Section 09 // Domain Specialization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Industries We Transform
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              We apply our four transformation pillars and dual-engine architecture across specialized enterprise verticals requiring deep domain and compliance expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <a
                  key={idx}
                  href={ind.href}
                  className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        <IndIcon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-200 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 10: LEADERSHIP PHILOSOPHY & LONG-TERM VISION */}
      <section className="py-20 border-b border-slate-800/80 bg-[#02050c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Section 10 // Principles & Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Leadership Philosophy & Long-Term Vision
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              The fundamental principles guiding every architectural decision, line of code, and executive engagement at AKGLS Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase font-bold">
                <Check className="w-4 h-4" />
                <span>Principle 01: Systems Over Silos</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">Point Solutions Compound Debt; Unified Systems Compound Leverage</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We never address a symptom in isolation. An underperforming marketing funnel is frequently caused by brittle API latency, messy product data, or disconnected CRM attribution. We engineer integrated solutions where improvements in one layer automatically multiply returns across all others.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase font-bold">
                <Check className="w-4 h-4" />
                <span>Principle 02: Software Engineering Rigor</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">Precision Architecture, Testable Metrics, Clean Codebases</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether deploying technical SEO schema or custom enterprise ERP pipelines, we approach every task with rigorous software engineering discipline: modular component trees, automated linting, schema validation, and transparent telemetry.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold">
                <Check className="w-4 h-4" />
                <span>Principle 03: Pragmatic Innovation</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">Adopting Technologies for Commercial Alpha, Never for Novelty</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We reject technology adoption for vanity. Our AK Labs unit subjects emerging AI tools, LLM frameworks, and platforms to rigorous stress tests to ensure they provide measurable margin improvement, speed velocity, or search visibility before deploying to enterprise clients.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase font-bold">
                <Check className="w-4 h-4" />
                <span>Principle 04: Long-Term Partnership</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">Embedded Transformation Partners to Category Leaders</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We operate as extended technology and transformation co-pilots alongside founders, Chief Technology Officers, and Chief Marketing Officers. Our success is measured by the durable category dominance and enterprise value of our clients.
              </p>
            </div>

          </div>

          {/* Long-term vision statement */}
          <div className="mt-12 bg-gradient-to-r from-indigo-950/60 via-slate-950 to-teal-950/60 border border-indigo-500/30 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">The Long-Term Vision</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-2 max-w-2xl mx-auto">
              Building the Enduring Global Technology Operating System
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed">
              Our vision is to become the premier global digital transformation and applied intelligence ecosystem—the partner enterprises trust to turn volatile technological disruption into sustained competitive advantage, intelligent operations, and market leadership.
            </p>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> San Francisco</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> New York City</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> New Delhi</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Global Remote Engineering Hubs</span>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-teal-400 text-xs font-mono uppercase tracking-wider font-semibold">
            Ready to Transform Your Digital Operations?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            Schedule an Architectural Discovery Consultation
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior systems engineers and digital transformation architects to diagnose your operational bottlenecks and design your target state.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (openProposalForm) {
                  openProposalForm();
                } else {
                  const el = document.querySelector('#audit-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Request Strategic Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+918318114492"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all flex items-center gap-2"
            >
              <span>Direct Hotline: +91 831 811 4492</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 font-mono pt-4">
            Non-disclosure agreements executed upon request. Direct access to principal architects.
          </p>
        </div>
      </section>

    </div>
  );
}

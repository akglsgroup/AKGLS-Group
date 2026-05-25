import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle,
  TrendingUp, Percent, DollarSign, Award, Target, Eye, Film, Heart, Share2,
  Building2, Landmark, GraduationCap, Truck, Stethoscope, Factory
} from 'lucide-react';

interface LinkedInAdsServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const linkedinAdsSchemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LinkedIn Ads & B2B Paid Advertising Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Enterprise-grade LinkedIn advertising management, ABM account targeting, dynamic Lead Gen forms, Sponsored InMail sequences, and CRM pipeline synchronization."
}`,
  faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why are LinkedIn ad costs higher than other platforms, and are they worth it?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "While CPC and CPM metrics are usually higher on LinkedIn, the audience targeting precision is incomparable for B2B. You target actual decision-makers by company, Seniority, and specific division. Zero ad spend is wasted on non-buying audiences, leading to unmatched pipeline value."
    }
  }]
}`
};

export default function LinkedInAdsServicesPage({ onBackToHome, openProposalForm }: LinkedInAdsServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // State to simulate dynamic Page Titles
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "LinkedIn Ads Services | B2B LinkedIn Advertising Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // ROI Forecast state variables
  const [b2bSpend, setB2bSpend] = useState<number>(8000);
  const [adObjective, setAdObjective] = useState<'conversions' | 'abm' | 'sponsored'>('conversions');
  const [industryName, setIndustryName] = useState<'saas' | 'manufacturing' | 'consulting' | 'healthcare' | 'finance'>('saas');
  
  const [calculatedOutputs, setCalculatedOutputs] = useState({
    impressions: 160000,
    clicks: 1280,
    leads: 45,
    costPerAcquisition: 177.8,
    roas: 2.5,
    revenue: 20250
  });

  // Calculate stats on parameter change using benchmark tables
  useEffect(() => {
    // B2B Benchmark values: { CPM, CTR%, ConvRate%, LeadValue }
    const industryBench = {
      saas: { cpm: 45, ctr: 0.8, cr: 3.5, value: 450 },
      manufacturing: { cpm: 35, ctr: 0.9, cr: 4.2, value: 650 },
      consulting: { cpm: 48, ctr: 1.1, cr: 5.0, value: 500 },
      healthcare: { cpm: 40, ctr: 0.85, cr: 3.8, value: 550 },
      finance: { cpm: 50, ctr: 0.75, cr: 3.2, value: 800 }
    };

    const bench = industryBench[industryName];
    
    // Objective multipliers
    let scaleCtr = 1.0;
    let scaleConv = 1.0;
    if (adObjective === 'conversions') {
      scaleCtr = 1.25; 
      scaleConv = 1.3;
    } else if (adObjective === 'abm') {
      scaleCtr = 0.95;
      scaleConv = 1.85; // High absolute conversion quality, focused targets
    } else { // sponsored feed content
      scaleCtr = 1.15;
      scaleConv = 0.85;
    }

    const impressions = Math.round((b2bSpend / bench.cpm) * 1000);
    const clicks = Math.round(impressions * ((bench.ctr * scaleCtr) / 100));
    const leads = Math.round(clicks * ((bench.cr * scaleConv) / 100));
    const revenue = Math.round(leads * bench.value);
    const roas = b2bSpend > 0 ? parseFloat((revenue / b2bSpend).toFixed(2)) : 0;
    const costPerAcquisition = leads > 0 ? parseFloat((b2bSpend / leads).toFixed(1)) : 0;

    setCalculatedOutputs({
      impressions,
      clicks,
      leads,
      costPerAcquisition,
      roas,
      revenue
    });
  }, [b2bSpend, adObjective, industryName]);

  // Interactive B2B Campaign Quality Score tool
  const [b2bHasLeadForm, setB2bHasLeadForm] = useState(false);
  const [b2bHasAbmMatched, setB2bHasAbmMatched] = useState(false);
  const [b2bShortFields, setB2bShortFields] = useState(false);
  const [b2bAuthorityAsset, setB2bAuthorityAsset] = useState(false);
  const [b2bQualityScore, setB2bQualityScore] = useState<number>(20);

  useEffect(() => {
    let score = 20;
    if (b2bHasLeadForm) score += 20;
    if (b2bHasAbmMatched) score += 20;
    if (b2bShortFields) score += 20;
    if (b2bAuthorityAsset) score += 20;
    setB2bQualityScore(score);
  }, [b2bHasLeadForm, b2bHasAbmMatched, b2bShortFields, b2bAuthorityAsset]);

  // FAQ collapse state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Schema copying indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const performSchemaCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 1800);
  };

  // Lead Capture Audit Form state
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    budget: '$3,000 - $5,000',
    industry: 'SaaS & Technology',
    email: '',
    phone: '',
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.email || !auditForm.website) return;
    setAuditSubmitted(true);
  };

  const industriesWeServe = [
    { label: "SaaS & Technology", text: "Target CTOs, VPs of Product, and IT Directors using personalized Lead Form campaigns to drive platform software trials, demo sign-ups, and user trials." },
    { label: "Manufacturing & Heavy Engineering", text: "Reach Supply Chain Managers, Procurement Executives, and Logistics Directors. Facilitate high-trust B2B request for proposals (RFPs)." },
    { label: "Corporate Finance Advisory", text: "Target CFOs, Finance Directors, and Investors with premium thought leadership and market-ready downloadable resources." },
    { label: "Consulting & Professional Services", text: "Find founders and enterprise executives needing strategic software advisory, compliance consulting, or corporate recruitment services." },
    { label: "Healthcare & MedTech Systems", text: "Reach clinical directors, hospital administrators, and diagnostic leaders searching for equipment, EHR software, or clinical staffing." },
    { label: "High-value Commercial Real Estate", text: "Identify prospective property investors and retail developers seeking major site relocations or multi-million square feet developments." },
    { label: "Industrial IoT & Automation", text: "Engage engineering managers and systems integration leaders with interactive white papers and case studies on factory upgrades." },
    { label: "Education & Corporate Academies", text: "Target Chief Learning Officers (CLOs) and HR Directors for scalable employee training systems, executive MBAs, or certificate programs." },
    { label: "Enterprise Professional Services", text: "Map decision-makers in targeted company tiers to land key long-term accounts, legal partners, and system integrations." }
  ];

  const linkedinServicesGrid = [
    {
      title: "1. LinkedIn Lead Generation Ads",
      badge: "⭐ Core Service",
      desc: "Deploy native, interactive B2B Lead Gen Form overlays. Leads submit corporate emails, phone credentials, and job roles in 2-taps instantly without loading external sites.",
      benefits: "Yields verified professional contact data that routes straight into Salesforce, HubSpot, or any chosen corporate CRM."
    },
    {
      title: "2. Sponsored Content Campaigns",
      badge: "Thought Leadership",
      desc: "Inject eye-catching Single Image, Carousel, or Video Ads directly into professional feeds. Perfect for promoting B2B checklists, SaaS benchmarks, or founder columns.",
      benefits: "Positions your enterprise as the absolute industry standard while driving highly warm, targeted visitors to your site."
    },
    {
      title: "3. Account-Based Marketing (ABM)",
      badge: "Enterprise ABM",
      desc: "Nurture precise high-value account accounts. We run campaigns targeting selected lists of companies, isolating key buying committee roles strictly.",
      benefits: "Equips B2B sales development reps with warm buying warmth across selected accounts, bypassing typical gatekeepers."
    },
    {
      title: "4. Message Ads & Conversational InMail",
      badge: "Direct Messaging",
      desc: "Deliver personalized outreach directly inside targeted professional inboxes. We design multi-tier branch decision trees offering direct call books or eBook lookups.",
      benefits: "Unlocks high-authority interaction rates, driving direct demo and audit registrations."
    },
    {
      title: "5. LinkedIn Document Ads",
      badge: "Asset Optimization",
      desc: "Allow professionals to read B2B checklists, whitepapers, or enterprise guides right in the feed, unlocking the PDF completely upon submitting lead details.",
      benefits: "Drastically lowers target Cost Per Lead (CPL) benchmarks and establishes immediate peer authority."
    },
    {
      title: "6. LinkedIn Video Ads",
      badge: "B2B Storytelling",
      desc: "Deploy highly polished corporate explainers, client success testimonials, or interactive SaaS dashboard demos. Configured with native professional overlays.",
      benefits: "Increases average time-on-brand and builds critical baseline trust with conservative enterprise buyers."
    },
    {
      title: "7. SaaS B2B Acquisition Engine",
      badge: "SaaS Scale",
      desc: "Generate demo registrations and free trials. We target technical decision-makers and system administrators by specific software usage, tech stacks, or corporate groups.",
      benefits: "Builds a highly predictable pipeline of software trials and consistent recurring revenue markers (ARR/MRR)."
    },
    {
      title: "8. Recruitment & Talent Acquisition System",
      badge: "Employer Branding",
      desc: "Attract elite specialists, executive leaders, and specialized engineering profiles. Highlight your corporate environment and streamline high-tier applications.",
      benefits: "Bypasses pricey third-party placement recruiters and maps directly to tier-1 talent blocks."
    },
    {
      title: "9. Highly Structured Retargeting",
      badge: "Funnel Recovery",
      desc: "Map the exact professional stage of prospective buyers. We run target sequences for previous website visitors, lead form dropouts, or video viewers.",
      benefits: "Recovers leaky conversions, keeping your solution high of mind through multi-month enterprise sales cycles."
    },
    {
      title: "10. Strategic Advisory & Consulting",
      badge: "Growth Blueprints",
      desc: "Partner with certified B2B market analysts. Get comprehensive competitor intelligence reports, bid strategies, and tracking audits.",
      benefits: "Pre-empts ad spend pitfalls, shielding budgets through meticulous planning and transparent reporting."
    }
  ];

  const campaignFormats = [
    { type: "Sponsored Content Ads", desc: "Inject native visual assets, thought-leadership blocks, and high-CTR articles directly into user feeds." },
    { type: "Lead Generation Forms", desc: "Pre-filled fields capturing job titles, corporate phones, and company sizes cleanly inside the interface." },
    { type: "Sponsored Messaging / InMail", desc: "Reach executive targets directly inside Inboxes with conversational, custom-crafted outreach drafts." },
    { type: "Dynamic Spotlights", desc: "Deliver individual ads utilizing the targets profile photo alongside your corporate logo dynamically." },
    { type: "Video & Explainer Ads", desc: "Promote engaging B2B video case studies, software product loops, or boardroom presentation cuts." },
    { type: "Document Download Ads", desc: "Offer easy, immediate access to strategic PDF case reports or industry benchmark checklists directly." },
    { type: "Website Conversions", desc: "Bring verified high-value professionals directly into your specialized, conversion-designed landing templates." },
    { type: "Thought Leadership Boosts", desc: "Promote native posts from your executive founders or key specialists to build authentic industry trust." }
  ];

  const linkedinTools = [
    { name: "LinkedIn Campaign Manager", cat: "Central B2B Campaign Hub" },
    { name: "LinkedIn Insight Tag v2", cat: "Audience Demographics & Conversions Tracker" },
    { name: "Matched Audiences (ABM)", cat: "Custom Tier-Account List Upload Hub" },
    { name: "Lead Gen Form Webhooks", cat: "Direct Integration to Salesforce & HubSpot" },
    { name: "Google Analytics 4 / GA4", cat: "Attribution and Scroll-Depth Diagnostics" },
    { name: "Google Tag Manager", cat: "Server-Side Script Tracking Control" },
    { name: "Looker Studio Custom Boards", cat: "B2B Sales Pipeline Analytics Panels" },
    { name: "AI B2B Message Generator", cat: "Optimizing Direct outreach copy drafts" }
  ];

  const linkedinFaqs = [
    { q: "Why are LinkedIn ad costs higher than other social media platforms?", a: "While typical CPC and CPM metrics are higher than Facebook or Instagram, LinkedIn's audience targeting for B2B is unmatched. You target users by exact job role, actual company name, industry vertical, and seniority level. Almost none of your ad budget is wasted on irrelevant audiences, yielding much higher lead-to-opportunity close rates." },
    { q: "What budget do you recommend for starting a B2B LinkedIn Campaign?", a: "We strongly advise starting with at least $3,000 to $5,000 monthly. This ensures your campaign gets sufficient daily bids to participate in B2B auction cycles, collects target optimization event signals, and generates a meaningful stream of enterprise leads." },
    { q: "What is Account-Based Marketing (ABM) on LinkedIn?", a: "ABM allows us to cross-reference your direct sales team's target lists with LinkedIn's data nodes. We upload parent company lists, then configure matching ads targeting key buying committee roles (such as procurement, technical managers, or C-level officers) inside those specific companies." },
    { q: "Do native Lead Gen Forms perform better than sending users to our website?", a: "Typically, yes to absolute lead volume! LinkedIn's native forms auto-populate with the professional's profile data, removing form-filling friction. Typical native lead form campaigns experience a 2x to 3x increase in conversion rate over external landing pages. However, we balance both options to maximize overall lead quality." },
    { q: "How do you verify B2B lead quality and avoid personal spam details?", a: "We actively block typical personal services (e.g. Gmail, Yahoo) from submitting through custom field validations, mandate business phone criteria, and deploy predictive automated lead scoring filters. This filters out invalid personal inquiries, ensuring your sales staff focuses strictly on qualified accounts." }
  ];

  const packagesList = [
    { name: "Startup B2B Paid Social", desc: "Ideal for growing software platforms, consulting practices, and regional recruitment outfits searching for decision-maker inquiries.", budget: "Up to $4,000/mo spend", term: "3-Month Minimum" },
    { name: "Enterprise B2B Growth", desc: "Our most chosen setup. Tailored for scalable SaaS trials, manufacturing companies, and national professional services seeking rapid pipeline expansion.", budget: "$4,000 to $15,000/mo spend", term: "Dynamic Rolling Month" },
    { name: "Corporate ABM & Systems", desc: "Engineered for elite corporate groups seeking complete CRM integrations, hyper-precise high-value account mapping, and daily copywriting tests.", budget: "$15,000+ monthly ad spend", term: "SLA Custom Support" }
  ];

  return (
    <div id="linkedin-ads-services-page" className="bg-[#03060a] text-slate-300 min-h-screen relative font-sans leading-relaxed selection:bg-brand-teal selection:text-slate-950">
      
      {/* Floating Action Bars */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-emerald-500/30 transition-all font-mono"
          id="linkedin-whatsapp-floating-bar"
        >
          <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp B2B Help: {CONTACT_NUMBER}
        </a>
        <a 
          href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
          className="bg-brand-teal hover:bg-white text-slate-950 p-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-brand-teal/20 transition-all font-mono"
          id="linkedin-phone-floating-bar"
        >
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" /> Call B2B Advisor: {CONTACT_NUMBER}
        </a>
      </div>

      {/* TOP NAVIGATION HEADER BAR */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 flex justify-between items-center z-50 sticky top-0">
        <div className="flex items-center space-x-2 text-slate-400 font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping"></span>
          <span>B2B Pipeline Audits Ready for Decision Makers</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-bold transition cursor-pointer flex items-center"
            id="back-linkedin-nav"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition flex items-center space-x-1 font-mono">
            <span className="text-brand-teal">B2B WhatsApp Support:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION WITH INTERACTIVE B2B ROI FORECAST SIMULATOR */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#03060a] text-white overflow-hidden text-left border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/5 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/5 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content Block */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-teal tracking-wide uppercase font-mono">
                <Briefcase className="w-4 h-4 text-brand-teal" />
                <span>Enterprise B2B Lead Acquisition Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                LinkedIn Ads That Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">High-Quality B2B Leads</span> & Enterprise Growth
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Scale your executive outreach, secure key institutional clients, and accelerate enterprise pipelines. We configure pixel nodes, coordinate professional target ABM campaigns, and maximize conversion quality.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 font-mono">
                <a 
                  href="#linkedin-audit-form" 
                  className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                  id="hero-linkedin-audit-btn"
                >
                  <span>Get Free LinkedIn Ads Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#linkedin-roi-simulator" 
                  className="bg-[#0c121e] border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <TrendingUp className="w-4 h-4 text-brand-teal" />
                  <span>Interactive Pipeline Simulator</span>
                </a>
              </div>

              {/* USP Highlights Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-900/65 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">B2B Lead Gen Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">Precision Job targeting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">ABM Target Matching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">ROI-Focused Sprints</span>
                </div>
              </div>

            </div>

            {/* Right Interactive LinkedIn ROI Sandbox Calculator */}
            <div className="lg:col-span-5 relative" id="linkedin-roi-simulator">
              <div className="bg-[#0b1019] rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-5 font-mono">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-slate-300 font-extrabold uppercase">LinkedIn B2B Forecast Engine v4</span>
                  </div>
                  <span className="text-[9px] bg-slate-950 border border-slate-800 text-brand-teal py-0.5 px-2 rounded-full font-bold">
                    DECISION MAKER ALIGNMENT
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Spend Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-slate-400 uppercase font-black">Monthly B2B Ad Budget:</span>
                      <span className="text-brand-teal font-black">${b2bSpend.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="40000" 
                      step="1000"
                      value={b2bSpend}
                      onChange={(e) => setB2bSpend(Number(e.target.value))}
                      className="w-full h-1.5 rounded bg-slate-950 cursor-pointer accent-brand-teal"
                    />
                  </div>

                  {/* Industry Select */}
                  <div className="space-y-1">
                    <span className="text-[10.5px] text-slate-400 uppercase font-black block">Industry Target Area:</span>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {([
                        { key: 'saas', name: 'Software / SaaS' },
                        { key: 'manufacturing', name: 'Manufacturing' },
                        { key: 'consulting', name: 'Consulting Firm' },
                        { key: 'finance', name: 'FinTech / Finance' }
                      ] as const).map((ind) => (
                        <button
                          key={ind.key}
                          type="button"
                          onClick={() => setIndustryName(ind.key)}
                          className={`p-2 rounded text-[10px] text-center border font-bold uppercase cursor-pointer transition ${
                            industryName === ind.key 
                              ? 'bg-brand-teal/15 border-brand-teal text-brand-teal' 
                              : 'bg-slate-950 border-slate-850 text-slate-400'
                          }`}
                        >
                          {ind.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ad Format Select */}
                  <div className="space-y-1">
                    <span className="text-[10.5px] text-slate-400 uppercase font-black block">Action Format Objective:</span>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      {([
                        { key: 'conversions', name: 'Lead Forms' },
                        { key: 'abm', name: 'Matched ABM' },
                        { key: 'sponsored', name: 'Sponsored Feed' }
                      ] as const).map((fmt) => (
                        <button
                          key={fmt.key}
                          type="button"
                          onClick={() => setAdObjective(fmt.key)}
                          className={`p-1.5 rounded text-[9.5px] text-center border font-bold uppercase cursor-pointer transition ${
                            adObjective === fmt.key 
                              ? 'bg-blue-500/15 border-brand-teal text-brand-teal' 
                              : 'bg-slate-950 border-slate-855 text-slate-405'
                          }`}
                        >
                          {fmt.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Dashboard Outputs */}
                  <div className="bg-slate-950 border border-slate-855 rounded-xl p-4 grid grid-cols-2 gap-4 text-left font-mono">
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Professional Impressions</span>
                      <span className="text-base font-black text-white block">{calculatedOutputs.impressions.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Decision Maker Clicks</span>
                      <span className="text-base font-black text-white block">{calculatedOutputs.clicks.toLocaleString()}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Sales Leads / Pipeline Opportunities</span>
                      <span className="text-base font-black text-brand-teal block">{calculatedOutputs.leads}</span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-slate-555 uppercase font-black">Average B2B CPL</span>
                      <span className="text-base font-black text-white block">${calculatedOutputs.costPerAcquisition}/lead</span>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-slate-900 grid grid-cols-2">
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-555 uppercase font-black">Est. Pipeline Value</span>
                        <span className="text-lg font-black text-white block">${calculatedOutputs.revenue.toLocaleString()}</span>
                      </div>
                      <div className="space-y-0.5 text-right">
                        <span className="text-[9px] text-slate-555 uppercase font-black">B2B ROAS Estimate</span>
                        <span className="text-lg font-black text-brand-teal block">{calculatedOutputs.roas}x ROAS</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wide">
                    *Estimates modeled on LinkedIn Professional benchmarks. B2B value increases via targeted account matching criteria.
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
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold text-center">B2B Executive Authority Indicators</h2>
            <p className="text-xs text-slate-450 text-center">We bypass standard gatekeeper filters to directly target purchasing directors.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">14.8k+</span>
              <p className="text-xs text-slate-405 mt-1">High-Intent B2B Leads</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">850+</span>
              <p className="text-xs text-slate-405 mt-1">Decision-Makers Engaged</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">45%</span>
              <p className="text-xs text-slate-405 mt-1">SaaS Demos Booked Rate</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">320+</span>
              <p className="text-xs text-slate-405 mt-1">Enterprise Clients Managed</p>
            </div>
          </div>

          {/* Badge Indicators for Professional Authenticity */}
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-85 pt-8 text-slate-400 font-extrabold text-xs font-mono">
            <span className="border border-brand-teal/40 text-brand-teal py-1 px-3.5 rounded-full bg-brand-teal/5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" /> LINKEDIN CAMPAIGN REGISTERED EXPERT
            </span>
            <span className="border border-slate-808 py-1 px-3.5 rounded-full">CRM INTERLOCK AUTOMATED</span>
            <span className="border border-slate-808 py-1 px-3.5 rounded-full text-blue-400 font-bold">ABM LIST EXCLUSIVES</span>
          </div>
        </div>
      </section>

      {/* WHAT ARE LINKEDIN ADS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
              <Building2 className="w-4 h-4 text-brand-teal" />
              <span>B2B PURCHASE JOURNEY INTERLOCK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              What Are LinkedIn Ads Services?
            </h2>
            <div className="space-y-4 text-slate-350 text-sm md:text-base leading-relaxed">
              <p>
                **LinkedIn Ads** are the primary execution vehicle for modern B2B pipeline growth, allowing direct communication with over 900 million professionals, executives, and business decision-makers.
              </p>
              <p>
                Unlike generic social channels where consumers look up lifestyle or entertainment content, LinkedIn users browse with a professional development, partnership-oriented, and corporate problem-solving mindset. 
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 text-xs md:text-sm">
                AKGLS Group customizes LinkedIn ad setups by connecting directly with buying committees, utilizing company firmographics, loading CRM customer records, and designing document leads download models.
              </p>
            </div>
          </div>

          {/* Social Lead Flow layout */}
          <div className="lg:col-span-5 space-y-4 bg-slate-900/40 border border-slate-80a p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-center border-b border-slate-850 pb-3 font-mono">The B2B Decision-Maker Funnel</h3>
            
            <div className="space-y-4 pt-2 text-left font-mono text-xs text-slate-205">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-700">1</div>
                <h4 className="text-xs font-bold text-white uppercase">C-Suite Target Hook (0-5 Seconds)</h4>
                <p className="text-slate-405 leading-normal">Thought leadership content briefs and PDF white papers align directly with corporate pain points in the feed.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/40">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase">Native 2-Tap Lead Capture</h4>
                <p className="text-slate-405 leading-normal">LinkedIn pre-fills their office credentials (e.g., job title, company size, verified corporate email) seamlessly inside the app UI.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-[10px] text-blue-400 font-bold border border-blue-500/20">3</div>
                <h4 className="text-xs font-bold text-blue-400 uppercase">Insight Tag Pipeline sync</h4>
                <p className="text-slate-405 leading-normal">Synchronize contact profiles straight to Salesforce or HubSpot queues, triggering instant automated sales follow-ups.</p>
              </div>
            </div>

            <div className="pt-2 font-mono">
              <a 
                href="#linkedin-audit-form" 
                className="w-full bg-slate-900 border border-slate-705 font-bold text-xs py-3 rounded-lg hover:bg-slate-800 transition block text-center cursor-pointer"
              >
                Request Custom B2B Marketing Audit
              </a>
            </div>
          </div>
          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY LINKEDIN ADS MATTER SECTION */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 select-none font-mono">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Your B2B Enterprise Needs LinkedIn Ads
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Relying on outdated outbound cold calling is failing. LinkedIn Ads target active decision-makers with corporate purchasing weight, optimizing sales development velocities.
            </p>
          </div>

          {/* Benefits Grid of Why LinkedIn Ads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-mono">
            <div className="p-6 bg-[#090e18] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Flawless Direct targeting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Target prospective partners exactly by job roles (founder, VP, director), seniorities, company names, industry verticals, and skill fields.</p>
            </div>

            <div className="p-6 bg-[#090e18] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Unmatched Intent Thresholds</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Engage users when they look up industry updates, software partners, and corporate standards — translating to much warmer buying intent.</p>
            </div>

            <div className="p-6 bg-[#090e18] border border-slate-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Accelerated Pipeline Velocity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Bypass cold outreach queues using verified Lead Forms, putting high-value download content directly in front of procurement teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES BENTO GRID LAYOUT */}
      <section id="linkedin-services-grid" className="py-20 max-w-7xl mx-auto px-4 text-left">
        <div className="space-y-4 mb-16 text-center">
          <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold text-center font-mono">Precision B2B Target Matrix</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Our LinkedIn Ads Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-mono">
            A comprehensive suite of paid marketing campaigns built specifically to capture decision-maker interest, dynamic ABM loops, and CRM trial records.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {linkedinServicesGrid.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-slate-905 bg-slate-900 border border-slate-808 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-widest font-mono">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Suite {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition font-sans">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left font-mono">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-left bg-slate-950/40 p-3 rounded-xl font-mono">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">PROVEN B2B PIPELINE DELIVERABLE:</div>
                <div className="flex items-center space-x-1.5 text-[11px] text-brand-teal font-extrabold font-mono">
                  <Check className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{srv.benefits}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LINKEDIN CAMPAIGN TYPES SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none font-mono">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              Campaign Formats We Manage
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto text-center font-normal">
              From sponsored article updates to customized conversational messaging vectors, we configure formats matching your exact sales goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignFormats.map((cf, cIdx) => (
              <div key={cIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl space-y-2.5 hover:border-brand-teal/20 hover:scale-102 transition duration-300 text-left font-mono">
                <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                <h3 className="text-xs md:text-sm font-bold text-white uppercase">{cf.type}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
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
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">B2B SECTOR MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">LinkedIn Ads for Every B2B Industry</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Every business sector demands a custom narrative angle. We formulate target parameters customized for each horizontal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industriesWeServe.map((ind, iIdx) => (
            <div key={iIdx} className="bg-slate-900 border border-slate-805 p-6 rounded-xl space-y-2.5 text-left">
              <h3 className="text-xs md:text-sm font-bold text-white uppercase border-b border-slate-850 pb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                {ind.label}
              </h3>
              <p className="text-[11px] text-slate-405 leading-relaxed">
                {ind.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE B2B CAMPAIGN QUALITY SCORE SCREENER */}
      <section className="py-20 bg-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-1" />
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
                <Percent className="w-4 h-4 text-brand-teal animate-pulse" />
                <span>B2B Funnel Diagnostic Console</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                LinkedIn Campaign Quality Score Simulator
              </h2>
              <p className="text-sm text-slate-400 font-mono leading-relaxed">
                Is your proposed B2B funnel configured to yield high-intent bookings, or will you collect cheap personal spam contacts? Turn on parameters below to calculate your quality health:
              </p>

              {/* Quality variables */}
              <div className="space-y-3 font-mono text-xs">
                
                <button
                  type="button"
                  onClick={() => setB2bHasLeadForm(!b2bHasLeadForm)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>1. Utilizing Native Lead Gen Forms (Low friction)</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    b2bHasLeadForm ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {b2bHasLeadForm && '✓'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setB2bHasAbmMatched(!b2bHasAbmMatched)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>2. Matched Company Profile Lists / Salesforce Hooked</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    b2bHasAbmMatched ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {b2bHasAbmMatched && '✓'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setB2bShortFields(!b2bShortFields)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>3. Under 4 Form Input Fields Requested</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    b2bShortFields ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {b2bShortFields && '✓'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setB2bAuthorityAsset(!b2bAuthorityAsset)}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 cursor-pointer"
                >
                  <span>4. High-Authority Custom Benchmark/Report Offer</span>
                  <span className={`w-5 h-5 rounded border flex items-center justify-center font-bold ${
                    b2bAuthorityAsset ? 'bg-brand-teal text-slate-950 border-brand-teal' : 'border-slate-700'
                  }`}>
                    {b2bAuthorityAsset && '✓'}
                  </span>
                </button>

              </div>
            </div>

            {/* Quality Score Feedback Card */}
            <div className="lg:col-span-5 bg-[#0b1019] rounded-2xl border border-slate-808 p-8 shadow-xl text-center font-mono flex flex-col justify-between h-[340px]">
              <div>
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mb-4">FUNNEL HEALTH COEFFICIENT</span>
                
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-28 h-28 rounded-full border-4 border-slate-900 flex items-center justify-center">
                    <span className="text-3xl font-black text-white">{b2bQualityScore}%</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white uppercase">
                    {b2bQualityScore < 50 ? '⚠️ High CPC / Low conversion Trap' : b2bQualityScore < 80 ? '🔒 Moderate Pipeline Stability' : '🔥 ENTERPRISE DEAL ACCELERATOR'}
                  </h3>
                  <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                    {b2bQualityScore < 50 
                      ? 'Failing to leverage native layouts spikes customer exit events drastically. Lead volume remains static.' 
                      : b2bQualityScore < 80 
                      ? 'Secure, but lacks matching high-authority assets to bypass the typical B2B decision-maker skepticism.' 
                      : 'Perfect alignment! Clean API integrations paired with target ABM campaigns secure direct pipeline growth.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900">
                <a 
                  href="#linkedin-audit-form"
                  className="bg-brand-teal text-slate-950 font-black text-xs py-2.5 px-6 rounded-lg block hover:bg-white hover:scale-102 transition duration-300 uppercase tracking-widest"
                >
                  Configure My Funnel Structure
                </a>
              </div>
            </div>
            <div className="lg:col-span-1" />

          </div>
        </div>
      </section>

      {/* OUR LINKEDIN ADS PROCESS SECTION - PROGRESSIVE ACQUISITION MATRIX */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Our LinkedIn Advertising Process
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-mono">
              Aligning meticulous market research, professional copy scripts, and dynamic bid optimizers logically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 font-mono text-xs">
            
            <div className="relative p-6 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
              <span className="text-3xl font-black text-brand-teal/30 block">STEP 1</span>
              <h3 className="text-sm font-bold text-white uppercase leading-tight">Audience & Competitor Research</h3>
              <p className="text-slate-405 leading-relaxed">We extract industry competitor ad setups, map precise parent company directories, and segment key buyer personas.</p>
            </div>

            <div className="relative p-6 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
              <span className="text-3xl font-black text-brand-teal/30 block">STEP 2</span>
              <h3 className="text-sm font-bold text-white uppercase leading-tight">Campaign Strategy Planning</h3>
              <p className="text-slate-405 leading-relaxed">Formulate multi-stage funnel frameworks, design budget caps, and determine high-authority checklist formats.</p>
            </div>

            <div className="relative p-6 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
              <span className="text-3xl font-black text-brand-teal/30 block">STEP 3</span>
              <h3 className="text-sm font-bold text-white uppercase leading-tight">Campaign Setup & Launch</h3>
              <p className="text-slate-405 leading-relaxed">Compile LinkedIn Insight Tag scripts, launch native dynamic checklists, and coordinate matching Lead Gen forms.</p>
            </div>

            <div className="relative p-6 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
              <span className="text-3xl font-black text-brand-teal/30 block">STEP 4</span>
              <h3 className="text-sm font-bold text-white uppercase leading-tight">Lead Nurturing & Scale</h3>
              <p className="text-slate-405 leading-relaxed">Nurture pipeline dropouts through retargeting matrices, weed out spam domains, and scale daily budgets logically.</p>
            </div>

            <div className="relative p-6 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
              <span className="text-3xl font-black text-brand-teal/30 block">STEP 5</span>
              <h3 className="text-sm font-bold text-white uppercase leading-tight">Reporting & Pipeline Calibration</h3>
              <p className="text-slate-405 leading-relaxed">We provide custom Looker Studio dashboards tracking target cost per pipeline lead, conversion stats, and ROI.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SCHEMA BLUEPRINT DEVELOPER WORKSPACE */}
      <section className="py-20 bg-slate-950 text-left relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2 font-mono">
                <Terminal className="w-4 h-4 text-brand-teal" />
                <span>B2B Developer Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Enterprise Schema Recommendations
              </h2>
              <p className="text-sm text-slate-450 leading-relaxed font-mono">
                We embed standardized structured data models within client codebases. Developers can copy pre-filled structures below.
              </p>

              {/* Technical indicators */}
              <div className="p-4 bg-slate-900 border border-slate-850 rounded-xl space-y-2.5 font-mono text-xs">
                <div className="flex justify-between items-center text-[10.5px] border-b border-slate-850 pb-2">
                  <span className="text-slate-400 font-bold uppercase">Schema Deployment Status:</span>
                  <span className="text-emerald-450 text-emerald-400 font-black">● STANDARDIZED READY</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-405 leading-relaxed text-[11px]">
                  <Check className="text-brand-teal w-4 h-4 hover:scale-110 transition" />
                  <span>Configured with custom Service Entity parameters</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-405 leading-relaxed text-[11px]">
                  <Check className="text-brand-teal w-4 h-4 hover:scale-110 transition" />
                  <span>Validates clearly inside standard Search Console matrices</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 font-mono">
              
              {/* Service Schema Card */}
              <div className="bg-[#090e18] rounded-xl border border-slate-805 p-5 relative">
                <div className="flex justify-between items-center mb-2.5 border-b border-slate-850 pb-2 bg-slate-950/20">
                  <span className="text-[10px] text-brand-teal font-extrabold tracking-widest uppercase">Service Schema (JSON-LD)</span>
                  <button 
                    onClick={() => performSchemaCopy(linkedinAdsSchemaTemplates.service, 'service')}
                    className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {schemaCopied === 'service' ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 uppercase font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY RAW BLUEPRINT</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-[9.5px] text-slate-300 overflow-x-auto bg-slate-950 p-3 rounded-lg leading-normal uppercase-disabled max-h-40">
                  <code>{linkedinAdsSchemaTemplates.service}</code>
                </pre>
              </div>

              {/* FAQ Schema Card */}
              <div className="bg-[#090e18] rounded-xl border border-slate-805 p-5 relative">
                <div className="flex justify-between items-center mb-2.5 border-b border-slate-850 pb-2 bg-slate-950/20">
                  <span className="text-[10px] text-brand-teal font-extrabold tracking-widest uppercase">FAQ Schema (JSON-LD)</span>
                  <button 
                    onClick={() => performSchemaCopy(linkedinAdsSchemaTemplates.faq, 'faq')}
                    className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {schemaCopied === 'faq' ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 uppercase font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY RAW BLUEPRINT</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-[9.5px] text-slate-300 overflow-x-auto bg-slate-950 p-3 rounded-lg leading-normal max-h-40">
                  <code>{linkedinAdsSchemaTemplates.faq}</code>
                </pre>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES WE INTEGRATE */}
      <section className="py-20 bg-slate-900/10 border-t border-slate-900 font-mono text-left select-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              CRM & Ad Tech Integrations
            </h2>
            <p className="text-sm text-slate-400">
              We sync campaign pipelines with modern web APIs, advertising consoles, and core B2B CRM tools natively.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {linkedinTools.map((tool, tIdx) => (
              <div key={tIdx} className="p-4 bg-[#0a0f18] border border-slate-808 rounded-xl hover:border-brand-teal/20 transition">
                <span className="block text-xs font-bold text-white uppercase">{tool.name}</span>
                <span className="block text-[10px] text-slate-500 uppercase mt-1">{tool.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXIBLE LINKEDIN ADS PACKAGES */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-20 text-center select-none">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">B2B INVESTMENT MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans animate-pulse">Flexible LinkedIn Ads Packages</h2>
          <p className="text-slate-405 text-sm md:text-base max-w-2xl mx-auto text-center font-normal">
            Configured with modular campaign setups, copy audits, retargeting matrices, and Looker Studio live panels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesList.map((pkg, pIdx) => (
            <div key={pIdx} className="bg-slate-900 border border-slate-808 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">AKGLS B2b Option {pIdx+1}</span>
                  <span className="text-[10px] text-slate-505 bg-slate-950 py-0.5 px-2 rounded-full border border-slate-805">TERM: {pkg.term}</span>
                </div>
                <h3 className="text-2xl font-black text-white font-sans">{pkg.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed min-h-12">{pkg.desc}</p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-855 text-center">
                  <span className="text-[10px] text-slate-550 block uppercase font-bold tracking-wider">MAPPED AD SPEND MATRIX: {pIdx===2 ? 'Scalable Target Account Caps' : 'Enterprise Standard Floor'}</span>
                  <span className="text-xl font-extrabold text-white mt-1 block">{pkg.budget}</span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <ul className="space-y-2 text-[11px] text-slate-300">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Dynamic Custom target frameworks setting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Continuous professional copywriting testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>CRM pipelines API integrations sync</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Custom Looker Studio report metrics</span>
                  </li>
                </ul>

                <a 
                  href="#linkedin-audit-form"
                  className="w-full bg-slate-950 hover:bg-white hover:text-slate-950 border border-slate-805 text-slate-200 text-xs font-extrabold text-center py-3.5 rounded-xl block transition font-bold tracking-wider"
                >
                  REQUEST CUSTOM PLAN
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-left">
        <div className="space-y-4 mb-16 text-center select-none font-mono">
          <span className="text-[10px] text-brand-teal font-extrabold uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full border border-brand-teal/20">RESOLVING INQUIRIES</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center font-sans">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-xs md:text-sm text-center">
            Standard insights covering enterprise B2B lead pipelines, operational budgets, and target return matrices.
          </p>
        </div>

        <div className="space-y-4 font-mono text-sm max-w-4xl">
          {linkedinFaqs.map((faq, fIdx) => (
            <div key={fIdx} className="bg-slate-900 border border-slate-80a rounded-xl overflow-hidden transition">
              <button
                type="button"
                className="w-full text-left p-5 flex justify-between items-center text-white hover:text-brand-teal hover:bg-slate-850/25 transition font-bold select-none cursor-pointer"
                onClick={() => setOpenFaqIdx(openFaqIdx === fIdx ? null : fIdx)}
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaqIdx === fIdx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openFaqIdx === fIdx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="p-5 pt-0 text-slate-350 border-t border-slate-850/80 leading-relaxed text-xs md:text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG SUGGESTIONS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-left font-mono">
        <div className="space-y-4 mb-16 text-center select-none">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">B2B Sales Insights & Strategic Guides</h2>
          <p className="text-slate-405 text-sm max-w-xl mx-auto text-center font-normal">
            Maximize your operational acumen with expert marketing columns written by our analytical staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "LinkedIn Ads Beginners Blueprint for 2026", desc: "Unlock key steps to configure Campaign Console parameters and launch target B2B checks smoothly." },
            { title: "The Account-Based Marketing (ABM) Playbook", desc: "How to segment corporate targets by exact company names and seniorities to bypass standard gatekeepers." },
            { title: "LinkedIn Ads vs Google Search: Core Differences", desc: "Analyzing conversion quality metrics, average CPC caps, and pipeline conversions timelines objectively." }
          ].map((blog, bIdx) => (
            <div key={bIdx} className="bg-slate-900 border border-slate-805 rounded-xl p-5 hover:border-brand-teal/20 transition flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-[9px] text-brand-teal font-extrabold uppercase bg-brand-teal/5 border border-brand-teal/20 py-0.5 px-2 rounded">B2B ADVERTISING GUIDE</span>
                <h3 className="text-sm font-bold text-white uppercase leading-snug">{blog.title}</h3>
                <p className="text-[11px] text-slate-405 leading-relaxed">{blog.desc}</p>
              </div>
              <div className="pt-4 text-right">
                <a href="#linkedin-audit-form" className="text-[10px] text-brand-teal hover:underline font-bold uppercase tracking-widest">Read Article →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREE AUDIT LEAD CAPTURE SECTION */}
      <section id="linkedin-audit-form" className="py-20 bg-slate-950 text-left relative scroll-mt-20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 bg-slate-900 border border-slate-805 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-mono">
            
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-1 border border-brand-teal/30 bg-brand-teal/5 text-brand-teal text-[10px] font-bold py-1 px-3.5 rounded-full uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5" /> <span>SECURE FORM</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight font-sans">Get a Free LinkedIn Ads Audit</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive an engineering analysis of your current B2B campaigns from our Meta & LinkedIn specialists, pinpointing cost reductions and direct scale opportunities.
              </p>

              <div className="space-y-2.5 text-[11px] text-slate-350">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Interactive Campaign structural audit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Precision Job Seniority audience match</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Insight Tag script validation checks</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              {auditSubmitted ? (
                <div className="bg-slate-950 border border-brand-teal/30 rounded-2xl p-8 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-brand-teal/10 text-brand-teal">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-black text-white">B2B Audit Requested Successfully</h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                    Thank you, {auditForm.name}. Our enterprise analysts are inspecting {auditForm.website} against B2B LinkedIn Campaign schemas. We will respond within 24 business hours at {auditForm.email}.
                  </p>
                  <div className="pt-2">
                    <a 
                      href={WHATSAPP_LINK} 
                      target="_blank" 
                      referrerPolicy="no-referrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl transition inline-flex items-center gap-2 px-6 shadow-md"
                    >
                      <MessageSquare fill="white" className="w-4 h-4 text-white" /> SPEED UP: START INSTANT WHATSAPP CHAT
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAuditSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="audit-name" className="text-[10px] text-slate-405 font-bold uppercase block">Corporate Name *</label>
                      <input 
                        id="audit-name"
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        value={auditForm.name}
                        onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-805 rounded-xl px-3.5 py-3 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-teal transition"
                      />
                    </div>

                    <div className="space-y-1.5 text-left font-mono">
                      <label htmlFor="audit-website" className="text-[10px] text-slate-405 font-bold uppercase block">Corporate Website *</label>
                      <input 
                        id="audit-website" 
                        type="url" 
                        required 
                        placeholder="https://mycorp.com" 
                        value={auditForm.website}
                        onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-805 rounded-xl px-3.5 py-3 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-teal transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="audit-budget" className="text-[10px] text-slate-405 font-bold uppercase block">Target Ad Spend</label>
                      <select 
                        id="audit-budget"
                        value={auditForm.budget}
                        onChange={(e) => setAuditForm({...auditForm, budget: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-805 rounded-xl px-3.5 py-3 text-white text-xs focus:outline-none focus:border-brand-teal cursor-pointer transition"
                      >
                        <option value="$1,000 - $3,000">$1,000 - $3,000/mo</option>
                        <option value="$3,000 - $5,000" selected>$3,000 - $5,000/mo</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000/mo</option>
                        <option value="$10,000+">$10,000+/mo</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="audit-industry" className="text-[10px] text-slate-405 font-bold uppercase block">Primary B2B Vertical</label>
                      <select 
                        id="audit-industry"
                        value={auditForm.industry}
                        onChange={(e) => setAuditForm({...auditForm, industry: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-805 rounded-xl px-3.5 py-3 text-white text-xs focus:outline-none focus:border-brand-teal cursor-pointer transition"
                      >
                        <option value="SaaS & Technology" selected>SaaS & Technology</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Corporate Finance">Corporate Finance</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Healthcare Systems">Healthcare Systems</option>
                        <option value="Other">Other Vertical</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="audit-email" className="text-[10px] text-slate-405 font-bold uppercase block">Corporate Email *</label>
                      <input 
                        id="audit-email"
                        type="email" 
                        required 
                        placeholder="john@mycorp.com" 
                        value={auditForm.email}
                        onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-805 rounded-xl px-3.5 py-3 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-teal transition"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="audit-phone" className="text-[10px] text-slate-405 font-bold uppercase block">Business Phone Number</label>
                      <input 
                        id="audit-phone"
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        value={auditForm.phone}
                        onChange={(e) => setAuditForm({...auditForm, phone: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-805 rounded-xl px-3.5 py-3 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-teal transition"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-teal hover:bg-white text-slate-950 font-black text-xs py-4 rounded-xl shadow-lg transition duration-300 uppercase tracking-widest cursor-pointer"
                    id="submit-linkedin-audit"
                  >
                    DEPLOY AUDIT ENGINE
                  </button>

                  <span className="text-[8.5px] text-slate-500 block text-center uppercase tracking-wider">
                    *Your strategic data parameter remains strictly confidential and shielded. Zero personal email matching spam lists.
                  </span>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FINAL TARGET CALL-TO-ACTION SECTION */}
      <section className="py-24 bg-[#05080c] text-center relative border-t border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-1 border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest font-mono">
            <span>READY TO ACCELERATE YOUR B2B SALES PIPELINE CONTRACTS?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-sans">
            Ready to Generate More High-Value B2B Leads through LinkedIn Ads?
          </h2>

          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Stop losing premium opportunities to active competitors. Partner with AKGLS Group's certified marketing specialists to lock down decision-maker interest.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-6 font-mono">
            <a 
              href="#linkedin-audit-form"
              className="bg-brand-teal text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-brand-teal/20 transition hover:bg-white hover:scale-102 uppercase text-xs tracking-wider"
              id="final-linkedin-cta-audit"
            >
              Get Free LinkedIn Audit
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-8 py-4 rounded-xl border border-slate-800 transition uppercase text-xs tracking-wider flex items-center justify-center gap-2"
              id="final-linkedin-cta-whatsapp"
            >
              <MessageSquare fill="white" className="w-4 h-4 text-white" /> WhatsApp direct chat
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 font-extrabold text-[10px] uppercase font-mono pt-8">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-brand-teal" /> Verified B2B Framework</span>
            <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-brand-teal" /> Looker Live Panels</span>
            <span className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5 text-brand-teal" /> Accurate Leads targeting</span>
          </div>
        </div>
      </section>

    </div>
  );
}

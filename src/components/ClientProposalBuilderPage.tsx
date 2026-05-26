import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  Download, 
  Plus, 
  Trash2, 
  Sparkles, 
  Calculator, 
  Check, 
  ArrowLeft, 
  Settings, 
  Briefcase, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  RefreshCw, 
  PenTool, 
  Printer, 
  Layers, 
  Eye, 
  Bot, 
  Target,
  FileSpreadsheet,
  Globe,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProposalLineItem {
  id: string;
  name: string;
  description: string;
  category: 'seo' | 'ai-seo' | 'ppc' | 'smo' | 'development' | 'custom';
  billingType: 'Monthly Retainer' | 'One-Time Rate' | 'Hourly Fee';
  price: number;
  quantity: number;
}

interface Milestone {
  id: string;
  title: string;
  percentage: number;
  description: string;
}

export default function ClientProposalBuilderPage({ onBackToHome }: { onBackToHome: () => void }) {
  // Styles/Themes Core Configurations
  const themes = [
    { id: 'slate', name: 'Tech Slate Corporate', text: 'text-indigo-400', accent: 'bg-indigo-600', border: 'border-indigo-500/35', darkTheme: false },
    { id: 'indigo', name: 'Cosmic Royal Navy', text: 'text-violet-400', accent: 'bg-violet-600', border: 'border-violet-500/35', darkTheme: false },
    { id: 'emerald', name: 'Emerald High-Growth', text: 'text-emerald-400', accent: 'bg-emerald-500', border: 'border-emerald-500/35', darkTheme: false },
    { id: 'classic', name: 'Classic Charcoal Noir', text: 'text-slate-300', accent: 'bg-slate-700', border: 'border-slate-600/35', darkTheme: false }
  ];

  const presets = [
    {
      id: 'ai-seo-basic',
      name: 'Starter AI-SEO & AEO Pack',
      clientName: 'Sufiyan AI Labs',
      companyName: 'GenNext Solutions',
      items: [
        { id: '1', name: 'Starter AI-SEO & AEO Plan', description: 'Google SGE indexing readiness audit, chatbot citation mappings, Semantic JSON-LD schema structures.', category: 'ai-seo', billingType: 'Monthly Retainer', price: 28000, quantity: 3 },
        { id: '2', name: 'Basic Tech SEO Diagnostics', description: 'Speed tuning optimization report, robots, sitemaps setup, and semantic site architecture mapping.', category: 'seo', billingType: 'One-Time Rate', price: 12000, quantity: 1 }
      ] as ProposalLineItem[],
      milestones: [
        { id: 'm1', title: 'Onboarding & Technical Audit', percentage: 30, description: 'Technical setup of crawls + conversational benchmark reports.' },
        { id: 'm2', title: 'Semantic Schema Delivery', percentage: 40, description: 'Deploying structured JSON-LD data to site markup.' },
        { id: 'm3', title: 'Monthly AI Citation Sign-off', percentage: 30, description: 'Submission of Google Overview and Perplexity placement metrics.' }
      ]
    },
    {
      id: 'omni-growth',
      name: 'Omnichannel SMM & Google Ads',
      clientName: 'Rahul Mehra',
      companyName: 'Mehra FinTech India',
      items: [
        { id: '1', name: 'Active Viral SMO & SMM Reels', description: '20 custom creative graphics and 8 highly polished Reels/Video formats designed + SEO keyword tagging.', category: 'smo', billingType: 'Monthly Retainer', price: 32000, quantity: 6 },
        { id: '2', name: 'Standard CPC Ads Optimizer', description: 'Comprehensive Google Search campaign structure, custom bid adjustment algorithms, positive ad copy rules.', category: 'ppc', billingType: 'Monthly Retainer', price: 35000, quantity: 6 },
        { id: '3', name: 'Conversion CRO Tuning Addon', description: 'Optimizing high-traffic landing pages with responsive callout forms to support organic incoming pipelines.', category: 'development', billingType: 'One-Time Rate', price: 18000, quantity: 1 }
      ] as ProposalLineItem[],
      milestones: [
        { id: 'm1', title: 'Campaign Setup & Launch Prep', percentage: 40, description: 'Keyword database search, Reels dynamic storyboard creation.' },
        { id: 'm2', title: 'Mid-Retainer Scaling Target', percentage: 30, description: 'First 3 months of campaign maintenance and budget scale review.' },
        { id: 'm3', title: 'Final Handover Documentation', percentage: 30, description: 'Comprehensive delivery of active ad accounts and creative libraries.' }
      ]
    },
    {
      id: 'enterprise-cognitive',
      name: 'Enterprise Cognitive Dominance Suite',
      clientName: 'Director of Marketing',
      companyName: 'Tata Retail Ventures',
      items: [
        { id: '1', name: 'Enterprise Cognitive Dominance', description: 'Bot compliance configuration (Apple, OpenAI, Anthropic), automated AIO tracker maps, customized brand narrative seeding.', category: 'ai-seo', billingType: 'Monthly Retainer', price: 110000, quantity: 12 },
        { id: '2', name: 'Advanced Enterprise SEO Strategy', description: 'Comprehensive link velocity engineering, competitive search grid mapping, and weekly Account Architect syncs.', category: 'seo', billingType: 'Monthly Retainer', price: 75000, quantity: 12 },
        { id: '3', name: 'Custom Speed & Speed Blocks', description: 'Hardcoded structural optimizations in NextJS / React codebases for perfect Core Web Vitals rankings.', category: 'development', billingType: 'One-Time Rate', price: 50000, quantity: 1 }
      ] as ProposalLineItem[],
      milestones: [
        { id: 'm1', title: 'Phase I: Cognitive Scoping & Authority Audit', percentage: 20, description: 'Bot crawling compliance tests and semantic entity overlap maps.' },
        { id: 'm2', title: 'Phase II: Core Architecture Upgrades', percentage: 40, description: 'Theme optimization overrides, high-authority backlink seeding campaigns.' },
        { id: 'm3', title: 'Phase III: AI Share of Voice Reporting', percentage: 40, description: 'Deployment of custom auto-tracking dashboards for conversational queries.' }
      ]
    }
  ];

  // Proposal State Variables
  const [selectedTheme, setSelectedTheme] = useState('slate');
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR'>('INR');
  const [proposalNo, setProposalNo] = useState(() => `AKG-${Math.floor(100000 + Math.random() * 900000)}`);
  const [agencyName, setAgencyName] = useState('AKGLS GROUP SEO CONSULTANTS');
  const [agencyAddress, setAgencyAddress] = useState('DLF CyberCity, Phase III, Sector 24, Gurugram, HR - 122002');
  const [agencyEmail, setAgencyEmail] = useState('contracts@akgls-group.com');
  
  const [clientName, setClientName] = useState('Amrish Singh');
  const [companyName, setCompanyName] = useState('Tata Technologies Ltd.');
  const [clientAddress, setClientAddress] = useState('R&D Headquarters, Pune, Maharashtra - 411018');
  const [clientEmail, setClientEmail] = useState('client-relations@tata-tech.in');
  
  const [proposalDate, setProposalDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [validUntil, setValidUntil] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });
  
  const [discountType, setDiscountType] = useState<'percentage' | 'flat'>('percentage');
  const [discountVal, setDiscountVal] = useState(10); // Default 10%
  const [taxRate, setTaxRate] = useState(18); // Default 18% GST
  
  const [lineItems, setLineItems] = useState<ProposalLineItem[]>([
    { id: '1', name: 'Growth GEO & AIO Pipeline Plan', description: 'Entity Clustering & JSON-LD injected, Perplexity link insertions, SGE Overviews prompt triggers analysis, bi-weekly Share-of-Voice dashboard metrics.', category: 'ai-seo', billingType: 'Monthly Retainer', price: 45000, quantity: 6 },
    { id: '2', name: 'Organic SEO Optimization Plan', description: 'Advanced search intent target maps, complete on-page metadata optimization, high authority link acquisitions.', category: 'seo', billingType: 'Monthly Retainer', price: 30000, quantity: 6 },
    { id: '3', name: 'Technical Audit & Core Diagnostics', description: 'Complete search robot crawling compliance maps, core sitemaps configurations, and structural redirect checks.', category: 'seo', billingType: 'One-Time Rate', price: 15000, quantity: 1 }
  ]);

  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: 'm1', title: 'Phase I: Technical Onboarding & Semantic Gap Audit', percentage: 30, description: 'Initial site crawl diagnostics, keyword intent mapping, competitor backlink profiling.' },
    { id: 'm2', title: 'Phase II: Schema Deployment & Live Ad Onboarding', percentage: 40, description: 'Inbound rich JSON-LD data payload, ad account target optimization launch, content matrices.' },
    { id: 'm3', title: 'Phase III: Monthly Performance & AI Citations Reporting', percentage: 30, description: 'Monthly deliverables review, search ranking tables updates, direct conversational citations check.' }
  ]);

  const [terms, setTerms] = useState(
    "1. Payments are due within 15 days of receiving our official GST invoice.\n" +
    "2. Monthly retainers are billed at the beginning of each billing cycle.\n" +
    "3. Ad spends are handled directly by the client on selected platforms.\n" +
    "4. Deliverables mapping or technical delays caused by client assets trigger timeline extensions."
  );

  const [contractSignatureName, setContractSignatureName] = useState('Anuj Sharma');
  const [contractSignatureRole, setContractSignatureRole] = useState('Managing Partner, AKGLS Group');

  const [notification, setNotification] = useState<string | null>(null);

  // Computed Values
  const getCurrencySymbol = () => {
    if (currency === 'INR') return '₹';
    if (currency === 'EUR') return '€';
    return '$';
  };

  const getSubtotal = () => {
    return lineItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const getDiscountAmount = () => {
    const subtotal = getSubtotal();
    if (discountType === 'percentage') {
      return (subtotal * discountVal) / 100;
    }
    return discountVal;
  };

  const getTaxAmount = () => {
    const taxableAmount = getSubtotal() - getDiscountAmount();
    return (taxableAmount * taxRate) / 100;
  };

  const getTotalAmount = () => {
    return (getSubtotal() - getDiscountAmount()) + getTaxAmount();
  };

  // Preset Load Helper
  const loadPreset = (presetId: string) => {
    const preset = presets.find(p => p.id === presetId);
    if (preset) {
      setClientName(preset.clientName);
      setCompanyName(preset.companyName);
      setLineItems(preset.items.map(item => ({ ...item, id: `${Date.now()}-${item.id}` })));
      setMilestones(preset.milestones.map(m => ({ ...m, id: `${Date.now()}-${m.id}` })));
      showToastNotification(`Loaded preset template: ${preset.name}`);
    }
  };

  // Line Items Operations
  const handleAddLineItem = () => {
    const newItem: ProposalLineItem = {
      id: Date.now().toString(),
      name: 'Custom Marketing Service',
      description: 'Add a professional description detailing search keywords, deliverables or assets to be delivered regularly.',
      category: 'custom',
      billingType: 'Monthly Retainer',
      price: 25000,
      quantity: 3
    };
    setLineItems([...lineItems, newItem]);
    showToastNotification('Created new dynamic line item.');
  };

  const handleUpdateLineItem = (id: string, updates: Partial<ProposalLineItem>) => {
    setLineItems(lineItems.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const handleRemoveLineItem = (id: string) => {
    if (lineItems.length <= 1) {
      showToastNotification('Your proposal must contain at least one line item.', true);
      return;
    }
    setLineItems(lineItems.filter(item => item.id !== id));
    showToastNotification('Removed item from proposal table.');
  };

  // Milestones Operations
  const handleAddMilestone = () => {
    const remPercentage = 100 - milestones.reduce((sum, m) => sum + m.percentage, 0);
    const newMilestone: Milestone = {
      id: Date.now().toString(),
      title: 'New Project Phase',
      percentage: Math.max(0, remPercentage),
      description: 'Specify action items, expected deliverables, and timeline milestones.'
    };
    setMilestones([...milestones, newMilestone]);
  };

  const handleUpdateMilestone = (id: string, updates: Partial<Milestone>) => {
    setMilestones(milestones.map(m => m.id === id ? { ...m, ...updates } : m));
  };

  const handleRemoveMilestone = (id: string) => {
    setMilestones(milestones.filter(m => m.id !== id));
  };

  const getTotalMilestonePercentage = () => {
    return milestones.reduce((sum, m) => sum + m.percentage, 0);
  };

  // Toast Helper
  const showToastNotification = (msg: string, isError = false) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Print Window Helper with standard Media Styles
  const handlePrintProposal = () => {
    window.print();
  };

  // Pre-load parameters if needed
  useEffect(() => {
    // Scroll block
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 font-sans pb-24 relative overflow-x-hidden pt-12">
      
      {/* Toast System Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-800 text-indigo-300 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Printer Styles Setup */}
      <style>{`
        @media print {
          /* Hide normal web navigation and sidebars */
          body {
            background-color: white !important;
            color: black !important;
            font-size: 11pt !important;
          }
          #print-exclude-header,
          #editor-sidebar-container,
          #bottom-action-bar-fixed,
          .exclude-from-print {
            display: none !important;
          }
          #printable-proposal-receipt {
            display: block !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            margin: 0 !important;
            padding: 24px !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            background-color: white !important;
            color: #0c0f1d !important;
          }
          .printable-card-shadow {
            border: 1px solid #e2e8f0 !important;
            box-shadow: none !important;
          }
          .text-slate-400 {
            color: #64748b !important;
          }
          .text-white {
            color: #0f172a !important;
          }
          .bg-slate-950, .bg-slate-900\/40, .bg-slate-900 {
            background-color: #fafafa !important;
            border-color: #e2e8f0 !important;
          }
          .border-slate-800, .border-slate-900 {
            border-color: #e2e8f0 !important;
          }
        }
      `}</style>

      {/* Header Container */}
      <nav id="print-exclude-header" className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBackToHome}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-850 text-slate-300 transition"
              title="Return to Home"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#567fff] font-bold">AKGLS Smart Suite</span>
              <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" /> Executive Client Proposal Builder
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintProposal}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-xs text-white transition flex items-center gap-2 shadow-lg shadow-indigo-950"
            >
              <Download className="w-3.5 h-3.5" /> Exports / PDF / Save
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Intro Block: Preset template options */}
        <div className="bg-slate-950/40 rounded-2xl border border-slate-900 p-5 mb-8 exclude-from-print flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-md font-bold text-white flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> Start from AI & SEO Preset Blueprints
            </h2>
            <p className="text-slate-400 text-xs">
              Load structured line-items calibrated with standard Indian market pricing values. Modify them at will.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center">
            {presets.map(p => (
              <button
                key={p.id}
                onClick={() => loadPreset(p.id)}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 hover:border-slate-700 rounded-lg text-[11px] font-bold border border-slate-800 text-slate-300 transition-all flex items-center gap-1.5"
              >
                <Layers className="w-3 h-3 text-emerald-400" /> {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Split Layout: Form Left, Beautiful Printable Design Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Editor Panel */}
          <div id="editor-sidebar-container" className="lg:col-span-5 space-y-8 exclude-from-print">
            
            {/* Box 1: Core Identifiers */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-5 space-y-4">
              <h3 className="text-xs font-black text-white uppercase tracking-wider border-b border-slate-900 pb-2 flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5 text-indigo-400" /> 1. Configuration & Details
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Proposal Reference #</label>
                  <input
                    type="text"
                    value={proposalNo}
                    onChange={(e) => setProposalNo(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded-xl text-xs text-white uppercase font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Target Currency</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as any)}
                    className="w-full mt-1.5 px-3 py-2 bg-slate-900 border border-[#141b2a] focus:border-indigo-500 rounded-xl text-xs text-white outline-none"
                  >
                    <option value="INR">INR (₹ Rupees)</option>
                    <option value="USD">USD ($ Dollars)</option>
                    <option value="EUR">EUR (€ Euros)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Proposal Issues Date</label>
                  <input
                    type="date"
                    value={proposalDate}
                    onChange={(e) => setProposalDate(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Proposal Expiry Date</label>
                  <input
                    type="date"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Select Design Accent Palette</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {themes.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTheme(t.id)}
                      className={`px-3 py-2 rounded-xl text-[10px] font-bold border transition duration-250 flex items-center justify-between ${selectedTheme === t.id ? 'bg-indigo-950/20 border-indigo-500 text-indigo-200' : 'bg-slate-900 border-slate-850 hover:bg-slate-850 text-slate-440'}`}
                    >
                      <span>{t.name}</span>
                      <span className={`w-2.5 h-2.5 rounded-full ${t.accent}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 2: Contractor (Agency) Information */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-5 space-y-4">
              <h3 className="text-xs font-black text-white uppercase tracking-wider border-b border-slate-900 pb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-teal-400" /> 2. Agency Header Information
              </h3>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Agency Brand Name</label>
                <input
                  type="text"
                  value={agencyName}
                  onChange={(e) => setAgencyName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Agency Office Address</label>
                <input
                  type="text"
                  value={agencyAddress}
                  onChange={(e) => setAgencyAddress(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Official Contract Email</label>
                <input
                  type="email"
                  value={agencyEmail}
                  onChange={(e) => setAgencyEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>
            </div>

            {/* Box 3: Client Information */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-5 space-y-4">
              <h3 className="text-xs font-black text-white uppercase tracking-wider border-b border-slate-900 pb-2 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-pink-400" /> 3. Target Client Information
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Client Lead Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Client Company Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white font-bold text-amber-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Company Physical Address</label>
                <textarea
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  rows={2}
                  className="w-full mt-1 p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Client Contact Email</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>
            </div>

            {/* Box 4: Proposal Line Items Editor */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-emerald-400" /> 4. Pricing & Deliverables Items
                </h3>
                <button
                  onClick={handleAddLineItem}
                  className="px-2 py-1 bg-emerald-950 text-emerald-400 hover:bg-emerald-900 text-[10px] font-black uppercase rounded flex items-center gap-1 transition"
                >
                  <Plus className="w-3 h-3" /> Add Service
                </button>
              </div>

              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">
                {lineItems.map((item, idx) => (
                  <div key={item.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 space-y-2 relative">
                    <button
                      onClick={() => handleRemoveLineItem(item.id)}
                      className="absolute top-3 right-3 text-rose-500 hover:text-rose-400 transition"
                      title="Delete Item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="w-[85%]">
                      <span className="text-[9px] font-bold uppercase py-0.5 px-2 bg-slate-950 text-indigo-400 rounded-full font-mono">Item #{idx + 1}</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleUpdateLineItem(item.id, { name: e.target.value })}
                        placeholder="Service Name (e.g. Advanced AI-SEO & AEO Plan)"
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-white outline-none"
                      />
                    </div>

                    <div>
                      <textarea
                        value={item.description}
                        onChange={(e) => handleUpdateLineItem(item.id, { description: e.target.value })}
                        placeholder="Enter direct deliverables list or service tasks."
                        rows={2}
                        className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-[11px] text-slate-300 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[9px] text-slate-500 font-bold uppercase font-mono">Billing Mode</label>
                        <select
                          value={item.billingType}
                          onChange={(e) => handleUpdateLineItem(item.id, { billingType: e.target.value as any })}
                          className="w-full mt-1 p-1 bg-slate-950 border border-slate-800 rounded text-[10px] text-white"
                        >
                          <option value="Monthly Retainer">Monthly</option>
                          <option value="One-Time Rate">One-Time</option>
                          <option value="Hourly Fee">Hourly</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[9px] text-slate-500 font-bold uppercase font-mono">Rate ({getCurrencySymbol()})</label>
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) => handleUpdateLineItem(item.id, { price: parseFloat(e.target.value) || 0 })}
                          className="w-full mt-1 p-1 bg-slate-950 border border-slate-800 rounded text-[10px] text-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] text-slate-500 font-bold uppercase font-mono">Quantity / Mos</label>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleUpdateLineItem(item.id, { quantity: parseInt(e.target.value) || 1 })}
                          className="w-full mt-1 p-1 bg-slate-950 border border-slate-800 rounded text-[10px] text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 5: Milestones, Discounts & Tax */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-5 space-y-4">
              <h3 className="text-xs font-black text-white uppercase tracking-wider border-b border-slate-900 pb-2 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-400" /> 5. Taxations & Terms Settings
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">GST / Tax Rate %</label>
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                    className="w-full mt-1.5 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Discount Value</label>
                  <div className="flex gap-1.5 mt-1.5">
                    <input
                      type="number"
                      value={discountVal}
                      onChange={(e) => setDiscountVal(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                    />
                    <select
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value as any)}
                      className="p-1 bg-slate-950 border border-slate-800 rounded text-[10px] text-white"
                    >
                      <option value="percentage">%</option>
                      <option value="flat">Value</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Milestone Payments Breakdown</label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono">Status: Allocation Sum ({getTotalMilestonePercentage()}%)</span>
                    <button
                      onClick={handleAddMilestone}
                      className="text-[10px] text-indigo-400 hover:underline"
                    >
                      + Add Phase
                    </button>
                  </div>

                  <div className="space-y-2 max-h-[220px] overflow-y-auto">
                    {milestones.map((m, idx) => (
                      <div key={m.id} className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl space-y-1 relative">
                        <button
                          onClick={() => handleRemoveMilestone(m.id)}
                          className="absolute right-2 top-2 text-rose-500"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                        <div className="grid grid-cols-5 gap-2">
                          <input
                            type="text"
                            value={m.title}
                            placeholder="Phase Title"
                            onChange={(e) => handleUpdateMilestone(m.id, { title: e.target.value })}
                            className="bg-slate-950 border border-slate-800 text-[10px] p-1 rounded font-bold col-span-3 text-white"
                          />
                          <input
                            type="number"
                            value={m.percentage}
                            placeholder="%"
                            onChange={(e) => handleUpdateMilestone(m.id, { percentage: parseInt(e.target.value) || 0 })}
                            className="bg-slate-950 border border-slate-800 text-[10px] p-1 rounded font-bold col-span-2 text-white font-mono"
                          />
                        </div>
                        <input
                          type="text"
                          value={m.description}
                          placeholder="Action details"
                          onChange={(e) => handleUpdateMilestone(m.id, { description: e.target.value })}
                          className="bg-slate-950 border border-slate-800 text-[10px] p-1 rounded w-full text-slate-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Standard Legal/Contract Clauses</label>
                <textarea
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                  rows={4}
                  className="w-full mt-1.5 p-3 bg-slate-900 border border-slate-800 rounded-xl text-[11px] text-slate-300 outline-none font-mono leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Signatory Representative</label>
                  <input
                    type="text"
                    value={contractSignatureName}
                    onChange={(e) => setContractSignatureName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Signatory Designation</label>
                  <input
                    type="text"
                    value={contractSignatureRole}
                    onChange={(e) => setContractSignatureRole(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Printable Design Sheet Preview (The live A4 Letterhead page format) */}
          <div className="col-span-1 lg:col-span-7 space-y-4">
            
            <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800/80 flex items-center justify-between exclude-from-print">
              <span className="text-[10px] text-slate-400 font-mono font-bold flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-indigo-400 animate-pulse" /> Live Dynamic Letterhead Layout Preview (A4 Scale)
              </span>
              <button
                onClick={handlePrintProposal}
                className="px-2.5 py-1 bg-slate-950 font-bold text-[10px] text-slate-300 rounded border border-slate-800 hover:border-slate-700 flex items-center gap-1 transition"
              >
                <Printer className="w-3 h-3" /> Quick Test System Print
              </button>
            </div>

            {/* Complete Pixel-Polished Client Letterhead Document */}
            <div 
              id="printable-proposal-receipt"
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-slate-900 shadow-2xl space-y-8 select-text printable-card-shadow relative overflow-hidden"
              style={{ minHeight: '297mm', width: '100%', boxSizing: 'border-box' }}
            >
              {/* Distinctive Header Element accent based on Selected Theme */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
                selectedTheme === 'indigo' ? 'from-indigo-600 via-purple-500 to-pink-500' :
                selectedTheme === 'emerald' ? 'from-emerald-500 to-teal-400' :
                selectedTheme === 'classic' ? 'from-slate-700 to-slate-900' :
                'from-indigo-600 to-cyan-500' // Default / Slate
              }`} />

              {/* Agency Header Metas (Letterhead style) */}
              <div className="flex flex-col sm:flex-row justify-between gap-6 border-b border-slate-200 pb-8 mt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`p-2 rounded-xl bg-slate-950 text-white ${
                      selectedTheme === 'indigo' ? 'bg-violet-950 text-white' :
                      selectedTheme === 'emerald' ? 'bg-emerald-950 text-white' :
                      'bg-slate-950'
                    }`}>
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <span className="font-display font-black text-lg tracking-tight uppercase text-slate-900">
                      {agencyName.split(' ')[0]} <span className="font-normal text-slate-500">{agencyName.split(' ').slice(1).join(' ')}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed max-w-sm">
                    {agencyAddress}
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {agencyEmail}
                  </p>
                </div>

                <div className="text-left sm:text-right space-y-1">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 font-bold font-mono text-[9px] uppercase tracking-widest rounded-full leading-tight">
                    ESTIMATE / DETAILED SCOPE OF WORK
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2">AKGLS / #{proposalNo}</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Issue Date: <span className="text-slate-800 font-bold">{proposalDate}</span></p>
                  <p className="text-[11px] text-slate-500 font-medium">Valid Strategy Offer Until: <span className="text-slate-800 font-bold">{validUntil}</span></p>
                </div>
              </div>

              {/* Client Info Grid Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <div className="space-y-1.5">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider font-mono">PROPOSAL FORMULATED FOR:</p>
                  <h4 className="text-sm font-black text-slate-900 uppercase font-display">{clientName}</h4>
                  <p className="text-[11px] text-slate-500 font-black tracking-tight">{companyName}</p>
                  <p className="text-[11px] text-slate-500 leading-normal max-w-xs">{clientAddress}</p>
                </div>

                <div className="space-y-1.5 sm:text-right flex flex-col sm:items-end justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider font-mono animate-pulse">ESTIMATE SUMMARY:</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">
                      {getCurrencySymbol()}{getTotalAmount().toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-[9px] text-slate-500 font-medium font-mono uppercase tracking-widest leading-none mt-1">
                      ({taxRate}% tax & {discountVal}{discountType === 'percentage' ? '%' : ''} discount integrated)
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono mt-2 sm:mt-0">{clientEmail}</p>
                </div>
              </div>

              {/* Strategy Memo Brief Box */}
              <div className="space-y-2">
                <h5 className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-mono">I. SCOPE OF SERVICES METRIC</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-serif">
                  Dear {clientName || 'Client Team'}, We are delighted to outline this highly optimized and customized search dominance roadmap. Based on your digital footprint, the tactical stack described below highlights standard and generative search engine visibility goals mapping high structural impact for <span className="font-bold text-slate-900">{companyName}</span> expansion.
                </p>
              </div>

              {/* Services Table */}
              <div className="space-y-3 pt-2">
                <h5 className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-mono">II. ESTIMATED ITEMIZATION SCHEDULE</h5>
                
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                        <th className="p-4 w-[40%]">Growth Module / Deliverables Plan</th>
                        <th className="p-4 text-center">Billing Terms</th>
                        <th className="p-4 text-center">Qty / Mos</th>
                        <th className="p-4 text-right">Rate ({currency})</th>
                        <th className="p-4 text-right">Total ({currency})</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {lineItems.map((item, idx) => (
                        <tr key={item.id} className="hover:bg-slate-50">
                          <td className="p-4">
                            <p className="font-bold text-slate-900 leading-normal">{item.name}</p>
                            <p className="text-[11px] text-slate-500 mt-1 font-normal leading-relaxed max-w-sm">{item.description}</p>
                          </td>
                          <td className="p-4 text-center text-slate-600 text-[11px]">{item.billingType}</td>
                          <td className="p-4 text-center font-mono">{item.quantity}</td>
                          <td className="p-4 text-right font-mono">{getCurrencySymbol()}{item.price.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                          <td className="p-4 text-right font-mono font-bold text-slate-900">
                            {getCurrencySymbol()}{(item.price * item.quantity).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                          </td>
                        </tr>
                      ))}
                      {lineItems.length === 0 && (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-rose-500 font-bold">No active packages loaded in estimate grid. Please add services or click preset above.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Calculations Block */}
              <div className="flex justify-end pt-2">
                <div className="w-full sm:w-[50%] space-y-2 border-t border-slate-100 pt-4 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Deliverable Subtotal:</span>
                    <span className="font-bold font-mono">{getCurrencySymbol()}{getSubtotal().toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Discount Model Applied ({discountVal}{discountType === 'percentage' ? '%' : ' flat'}):</span>
                    <span className="font-bold font-mono text-emerald-600">-{getCurrencySymbol()}{getDiscountAmount().toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>GST / Corporate Tax ({taxRate}%):</span>
                    <span className="font-bold font-mono text-slate-700">+{getCurrencySymbol()}{getTaxAmount().toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between text-md font-black text-slate-900 border-t border-slate-200 pt-2 text-sm">
                    <span className="uppercase">Grand Total Net Retainer:</span>
                    <span className="font-bold font-mono text-lg">{getCurrencySymbol()}{getTotalAmount().toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              {/* Payment Clauses & Milestones Double Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 pb-4">
                
                {/* Left col: Terms of Business */}
                <div className="space-y-3">
                  <h5 className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-mono">III. STANDARD SERVICE TERMS</h5>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <ul className="space-y-2 text-[11px] text-slate-500 leading-relaxed list-none">
                      {terms.split('\n').map((termLine, idx) => (
                        <li key={idx} className="flex gap-1.5 font-medium">
                          <span className="text-slate-400 select-none font-bold shrink-0">•</span>
                          <span>{termLine}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right col: Timeline Milestones */}
                <div className="space-y-3">
                  <h5 className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-mono">IV. TIMELINE & STAGE PAYMENTS</h5>
                  <div className="space-y-2">
                    {milestones.map((m, idx) => (
                      <div key={m.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                        <div className={`p-1.5 rounded-lg bg-slate-900 text-white font-mono text-[10px] font-bold mt-0.5 shrink-0`}>
                          {m.percentage}%
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[11px] font-bold text-slate-900 leading-tight">{m.title}</p>
                          <p className="text-[10px] text-slate-500 leading-normal">{m.description}</p>
                        </div>
                      </div>
                    ))}
                    {milestones.length === 0 && (
                      <p className="text-xs text-slate-400">Standard project milestone stages do not apply.</p>
                    )}
                  </div>
                </div>

              </div>

              {/* Signature Blocks */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-12 text-xs">
                <div className="space-y-4">
                  <p className="text-slate-400 uppercase tracking-wider font-mono text-[9px] font-bold">PREPARED BY REPRESENTATIVE OBO AKGLS</p>
                  <div className="h-10 flex items-end border-b border-slate-200 font-serif italic text-slate-700 text-sm select-none pl-1">
                    {contractSignatureName}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase tracking-tight">{contractSignatureName}</p>
                    <p className="text-slate-500 text-[11px]">{contractSignatureRole}</p>
                  </div>
                </div>

                <div className="space-y-4 text-right flex flex-col items-end">
                  <p className="text-slate-400 uppercase tracking-wider font-mono text-[9px] font-bold">AGREED AND ACCEPTED OBO CLIENT</p>
                  <div className="h-10 w-48 border-b border-slate-200 flex items-end justify-end italic text-slate-300 text-xs text-center pb-1 font-mono">
                    Authorized Signatory Line
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900 uppercase tracking-tight">{clientName || 'Name'}</p>
                    <p className="text-slate-500 text-[11px]">{companyName || 'Corporate Representative'}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating print help badge at the bottom page */}
      <div className="fixed bottom-0 left-0 right-0 py-3 bg-[#0d1527] border-t border-slate-900 z-30 exclude-from-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            💡 **Client PDF Guideline:** Click <span className="text-indigo-400 font-bold hover:underline" onClick={handlePrintProposal}>"Exports / PDF / Save"</span>, then choose <span className="font-bold text-slate-300">"Save to PDF"</span> or <span className="font-bold text-slate-300">"Print"</span> in the browser print manager overlay to instantly export this clean clean vector corporate layout.
          </p>
          <div className="flex gap-2">
            <button
              onClick={onBackToHome}
              className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg font-semibold hover:bg-slate-850"
            >
              Exit Builder
            </button>
            <button 
              onClick={handlePrintProposal}
              className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-bold flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" /> PDF Print
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

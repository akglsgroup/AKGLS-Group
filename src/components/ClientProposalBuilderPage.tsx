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
  PenTool, 
  Printer, 
  Layers, 
  Eye, 
  Globe, 
  Users, 
  PlusCircle, 
  RotateCcw,
  PlusSquare,
  HelpCircle
} from 'lucide-react';

interface DeliverableItem {
  name: string;
  value: string;
}

interface StrategicPhase {
  phase: string;
  timeline: string;
  items: DeliverableItem[];
}

interface DeliverableSummary {
  label: string;
  count: string;
}

interface AddonService {
  service: string;
  price: string;
}

// Initial state matching the specifications
const defaultProposalState = {
  agencyName: "AKGLS Group",
  agencyAbout: "AKGLS Group is a digital marketing and AI optimization agency focused on helping businesses improve their online visibility, lead generation, search engine rankings, and social media presence.",
  agencySpecialties: [
    "SEO Services", "AI SEO & GEO Optimization", "Social Media Marketing",
    "Google Ads & PPC", "Website Development", "Ecommerce Marketing",
    "Content Marketing", "Lead Generation Solutions"
  ],
  agencyEmail: "info@akglsgroup.com",
  agencyPhone: "+91-9999999999",
  agencyWeb: "www.akglsgroup.com",
  agencyLogoBase64: "", 

  clientCompany: "Target Growth Enterprise",
  clientName: "Executive Partner Team",
  clientEmail: "growth@clientdomain.com",
  clientPhone: "+1 (555) 304-9912",
  clientAddress: "Corporate Office, Business District Plaza",

  propTitle: "SEO & Social Media Management Proposal",
  propSubtitle: "Prepared for Business Growth & Online Brand Visibility",
  propDate: "2026-05-27",
  propValidity: "15 Days from Proposal Date",
  propCurrency: "₹",
  propTheme: "emerald",

  platforms: ["Facebook", "Instagram", "LinkedIn", "X (Twitter)", "YouTube"],
  recommendedFor: ["Startups", "Local Businesses", "Ecommerce", "SMEs & Enterprises"],

  planRate: 25000,
  planDuration: "6 Months",
  planDurationNote: "SEO and social media growth require continuous optimization and consistency. Significant improvements in rankings, traffic, and engagement generally become visible within 3–6 months.",

  seoCategories: [
    {
      phase: "A. WEBSITE SEO AUDIT & RESEARCH",
      timeline: "Month 1",
      items: [
        { name: "Complete Website SEO Audit", value: "Full Technical Review" },
        { name: "Competitor Analysis", value: "3–5 Competitors" },
        { name: "Keyword Research", value: "50–100 Keywords" },
        { name: "SEO Strategy Planning", value: "SEO Roadmap" },
        { name: "Technical SEO Review", value: "Complete Website Check" },
        { name: "Current Performance Analysis", value: "Traffic & Ranking Review" }
      ]
    },
    {
      phase: "B. ON-PAGE SEO OPTIMIZATION",
      timeline: "Ongoing Monthly",
      items: [
        { name: "Meta Title Optimization", value: "20–30 Pages" },
        { name: "Meta Description Optimization", value: "20–30 Pages" },
        { name: "Heading Tag Optimization", value: "Important Pages" },
        { name: "Image ALT Tag Optimization", value: "20–50 Images" },
        { name: "URL Structure Optimization", value: "As Required" },
        { name: "Internal Linking Optimization", value: "30–50 Links" },
        { name: "Content SEO Optimization", value: "10–20 Pages" },
        { name: "Schema Markup Setup", value: "Basic Implementation" }
      ]
    },
    {
      phase: "C. TECHNICAL SEO OPTIMIZATION",
      timeline: "Month 1–2 + Ongoing",
      items: [
        { name: "XML Sitemap Optimization", value: "Initial Setup" },
        { name: "Robots.txt Optimization", value: "Initial Setup" },
        { name: "Broken Link Monitoring", value: "Monthly" },
        { name: "Core Web Vitals Review", value: "Monthly" },
        { name: "Mobile Optimization Review", value: "Monthly" },
        { name: "Crawl Error Monitoring", value: "Weekly" },
        { name: "Canonical Issue Monitoring", value: "Monthly" },
        { name: "Basic Speed Optimization Suggestions", value: "Monthly" }
      ]
    },
    {
      phase: "D. KEYWORD RANKING OPTIMIZATION",
      timeline: "Ongoing",
      items: [
        { name: "Target Keyword Tracking", value: "50–100 Keywords" },
        { name: "Long-Tail Keyword Optimization", value: "Included" },
        { name: "Local Keyword Optimization", value: "Included" },
        { name: "Competitor Keyword Monitoring", value: "Included" },
        { name: "Search Intent Optimization", value: "Included" }
      ]
    },
    {
      phase: "E. SEO CONTENT MARKETING",
      timeline: "Monthly",
      items: [
        { name: "SEO Blogs", value: "4 Blogs" },
        { name: "Blog Word Count", value: "800–1200 Words" },
        { name: "Keyword-Optimized Content", value: "Included" },
        { name: "AI SEO Content Structuring", value: "Included" },
        { name: "Featured Snippet Optimization", value: "Included" },
        { name: "Content Formatting & Optimization", value: "Included" }
      ]
    },
    {
      phase: "F. OFF-PAGE SEO & LINK BUILDING",
      timeline: "Ongoing Monthly",
      items: [
        { name: "Business Listings", value: "10–20" },
        { name: "Profile Creation", value: "15–20" },
        { name: "Social Bookmarking", value: "20–30" },
        { name: "Article Submission", value: "4–6" },
        { name: "Guest Posting", value: "1–2" },
        { name: "High Quality Backlinks", value: "20–40" },
        { name: "Directory Submission", value: "Included" },
        { name: "Local Citation Building", value: "Included" }
      ]
    },
    {
      phase: "G. LOCAL SEO OPTIMIZATION",
      timeline: "Ongoing",
      items: [
        { name: "Google Business Profile Optimization", value: "Included" },
        { name: "Google Maps Optimization", value: "Included" },
        { name: "Review Strategy Guidance", value: "Included" },
        { name: "Local Keyword Optimization", value: "Included" },
        { name: "Local Citation Management", value: "Included" }
      ]
    },
    {
      phase: "H. AI SEO / GEO / AEO OPTIMIZATION",
      timeline: "Ongoing",
      items: [
        { name: "Conversational SEO Optimization", value: "Included" },
        { name: "FAQ Optimization", value: "Included" },
        { name: "Semantic SEO Optimization", value: "Included" },
        { name: "AI Search Readiness", value: "Included" },
        { name: "GEO Optimization", value: "Included" },
        { name: "Featured Snippet Optimization", value: "Included" }
      ]
    },
    {
      phase: "I. SEO REPORTING & ANALYTICS",
      timeline: "Monthly",
      items: [
        { name: "Keyword Ranking Report", value: "Monthly" },
        { name: "Traffic Performance Report", value: "Monthly" },
        { name: "Backlink Report", value: "Monthly" },
        { name: "SEO Activity Report", value: "Monthly" },
        { name: "Performance Insights", value: "Monthly" }
      ]
    }
  ] as StrategicPhase[],

  smoCategories: [
    {
      phase: "A. SOCIAL MEDIA CONTENT MANAGEMENT",
      timeline: "Monthly",
      items: [
        { name: "Social Media Posts", value: "20–25 Posts" },
        { name: "Platforms Managed", value: "Up to 5 Platforms" },
        { name: "Custom Graphics", value: "Included" },
        { name: "Promotional Posts", value: "Included" },
        { name: "Informative Posts", value: "Included" },
        { name: "Brand Awareness Posts", value: "Included" },
        { name: "Caption Writing", value: "Included" },
        { name: "Hashtag Research", value: "Included" }
      ]
    },
    {
      phase: "C. SOCIAL PROFILE OPTIMIZATION",
      timeline: "Month 1 + Ongoing",
      items: [
        { name: "Profile Optimization", value: "All Platforms" },
        { name: "Bio Optimization", value: "Included" },
        { name: "CTA Optimization", value: "Included" },
        { name: "Banner Suggestions", value: "Included" },
        { name: "Branding Alignment", value: "Included" }
      ]
    },
    {
      phase: "D. BASIC ENGAGEMENT MANAGEMENT",
      timeline: "Ongoing",
      items: [
        { name: "Basic Comment Monitoring", value: "Weekly" },
        { name: "Basic Message Guidance", value: "Weekly" },
        { name: "Engagement Suggestions", value: "Monthly" }
      ]
    },
    {
      phase: "E. YOUTUBE OPTIMIZATION (BASIC)",
      timeline: "Monthly",
      items: [
        { name: "YouTube SEO Optimization", value: "Included" },
        { name: "Video Title Optimization", value: "Included" },
        { name: "Description Optimization", value: "Included" },
        { name: "Thumbnail Suggestions", value: "Included" },
        { name: "Hashtag Optimization", value: "Included" }
      ]
    }
  ] as StrategicPhase[],

  contentTypes: ["Promotional Creatives", "Informative Graphics", "Festival Posts", "Industry Updates", "Brand Awareness Posts", "Engagement Posts", "Reels Suggestions", "Trending Topic Content", "AI Core Content"],

  deliverablesSummary: [
    { label: "SEO Blogs", count: "4" },
    { label: "Social Media Posts", count: "20–25" },
    { label: "Backlinks", count: "20–40" },
    { label: "Target Keywords", count: "50–100" },
    { label: "Platforms Managed", count: "Up to 5" },
    { label: "Monthly Reports", count: "1 Detailed Report" }
  ] as DeliverableSummary[],

  growthTimeline: [
    "Month 1: Audit, Setup & Optimization",
    "Month 2–3: Ranking & Engagement Improvements",
    "Month 3–6: Traffic & Lead Growth",
    "6+ Months: Strong Brand & SEO Growth"
  ],

  supportChecklist: [
    "✅ WhatsApp Group Support",
    "✅ Monthly Consultation Strategy Call",
    "✅ Strategic Content Iterations",
    "✅ Standard Weekly Deliverables Dashboard",
    "✅ Technical Performance Execution Status"
  ],

  addons: [
    { service: "Google Ads Management", price: "₹8,000/month" },
    { service: "Meta Ads Management", price: "₹8,000/month" },
    { service: "Reels / Video Editing", price: "₹1,200/video" },
    { service: "Website Development", price: "Separate Quotation" },
    { service: "Ecommerce Marketing Integration", price: "Separate" }
  ] as AddonService[],

  paymentStructure: "Option 1: 50% Advance & 50% Mid-Month Retainer Payments\n\nOption 2: 100% Adv. Payment with 5% Total Cash Discount applied",
  termsConditions: [
    "SEO is a long-term organic strategy. Significant improvements usually become visible in 3-6 months.",
    "Paid advertising advertising budgets are billed separately directly to the respective platform.",
    "Deliverables depend heavily on prompt resource feedback and review approvals.",
    "Any supplementary development work beyond original scope will transition to separate quotes."
  ],

  sigStyle: "draw", // "draw" | "text"
  agencySignName: "AKGLS Authorized Signatory",
  clientSignName: "Authorized Partner Representative",
  agencySigBase64: "",
  clientSigBase64: ""
};

const PRESET_PLATFORMS = [
  "Facebook", "Instagram", "LinkedIn", "X (Twitter)", "YouTube", "Pinterest", "TikTok", "Google Business Profile"
];

const THEME_ACCENTS: { [key: string]: { border: string; bg: string; text: string; bgLight: string; badge: string; printText: string } } = {
  emerald: {
    border: 'border-emerald-600',
    bg: 'bg-emerald-600',
    text: 'text-emerald-600',
    bgLight: 'bg-emerald-50',
    badge: 'bg-emerald-50 text-emerald-800',
    printText: 'text-emerald-700'
  },
  blue: {
    border: 'border-blue-700',
    bg: 'bg-blue-700',
    text: 'text-blue-700',
    bgLight: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-900',
    printText: 'text-blue-800'
  },
  charcoal: {
    border: 'border-slate-800',
    bg: 'bg-slate-850',
    text: 'text-slate-800',
    bgLight: 'bg-slate-100',
    badge: 'bg-slate-200 text-slate-800',
    printText: 'text-slate-900'
  },
  purple: {
    border: 'border-purple-600',
    bg: 'bg-purple-600',
    text: 'text-purple-600',
    bgLight: 'bg-purple-50',
    badge: 'bg-purple-100 text-purple-900',
    printText: 'text-purple-700'
  }
};

export default function ClientProposalBuilderPage({ onBackToHome }: { onBackToHome: () => void }) {
  const [state, setState] = useState(() => {
    const cached = localStorage.getItem('akgls_proposal_v3_state');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (err) {
        return defaultProposalState;
      }
    }
    return defaultProposalState;
  });

  const [activeTab, setActiveTab] = useState<'parties' | 'meta' | 'seo' | 'smo' | 'deliverables'>('parties');
  const [scale, setScale] = useState(1);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // References for drawpads
  const agencyCanvasRef = useRef<HTMLCanvasElement>(null);
  const clientCanvasRef = useRef<HTMLCanvasElement>(null);

  const agencyDrawingRef = useRef(false);
  const clientDrawingRef = useRef(false);

  // Auto-save local storage
  useEffect(() => {
    localStorage.setItem('akgls_proposal_v3_state', JSON.stringify(state));
  }, [state]);

  // Scaling logic to make preview look clean on different browser viewports
  const handleScaleFit = () => {
    if (!previewContainerRef.current) return;
    const containerWidth = previewContainerRef.current.clientWidth - 32;
    const targetWidth = 840; // width of A4 in pixels roughly
    if (containerWidth < targetWidth) {
      setScale(containerWidth / targetWidth);
    } else {
      setScale(1);
    }
  };

  useEffect(() => {
    handleScaleFit();
    window.addEventListener('resize', handleScaleFit);
    return () => window.removeEventListener('resize', handleScaleFit);
  }, []);

  // Set up canvases drawing triggers
  const initCanvas = (canvas: HTMLCanvasElement | null, savedData: string) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    
    // Clear canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (savedData) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
      img.src = savedData;
    }
  };

  useEffect(() => {
    if (state.sigStyle === 'draw') {
      setTimeout(() => {
        initCanvas(agencyCanvasRef.current, state.agencySigBase64);
        initCanvas(clientCanvasRef.current, state.clientSigBase64);
      }, 150);
    }
  }, [state.sigStyle, state.agencySigBase64, state.clientSigBase64, activeTab]);

  const updateField = (key: string, value: any) => {
    setState((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateField('agencyLogoBase64', event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // SEO phase updates
  const updateSeoPhase = (index: number, field: keyof StrategicPhase, value: any) => {
    setState((prev: any) => {
      const copy = [...prev.seoCategories];
      copy[index] = { ...copy[index], [field]: value };
      return { ...prev, seoCategories: copy };
    });
  };

  const updateSeoDeliverable = (catIdx: number, itemIdx: number, field: keyof DeliverableItem, value: string) => {
    setState((prev: any) => {
      const copy = [...prev.seoCategories];
      const itemsCopy = [...copy[catIdx].items];
      itemsCopy[itemIdx] = { ...itemsCopy[itemIdx], [field]: value };
      copy[catIdx] = { ...copy[catIdx], items: itemsCopy };
      return { ...prev, seoCategories: copy };
    });
  };

  const addSeoDeliverableRow = (catIdx: number) => {
    setState((prev: any) => {
      const copy = [...prev.seoCategories];
      copy[catIdx] = {
        ...copy[catIdx],
        items: [...copy[catIdx].items, { name: "New Deliverable Item", value: "Included" }]
      };
      return { ...prev, seoCategories: copy };
    });
  };

  const deleteSeoDeliverableRow = (catIdx: number, itemIdx: number) => {
    setState((prev: any) => {
      const copy = [...prev.seoCategories];
      const itemsCopy = copy[catIdx].items.filter((_: any, i: number) => i !== itemIdx);
      copy[catIdx] = { ...copy[catIdx], items: itemsCopy };
      return { ...prev, seoCategories: copy };
    });
  };

  const addSeoCategoryBlock = () => {
    setState((prev: any) => ({
      ...prev,
      seoCategories: [
        ...prev.seoCategories,
        { phase: "CUSTOM STRATEGIC SEO PHASE", timeline: "Ongoing", items: [{ name: "Target Action Item", value: "Standard Frequency" }] }
      ]
    }));
  };

  const deleteSeoCategoryBlock = (index: number) => {
    setState((prev: any) => ({
      ...prev,
      seoCategories: prev.seoCategories.filter((_: any, i: number) => i !== index)
    }));
  };

  // SMO phase updates
  const updateSmoPhase = (index: number, field: keyof StrategicPhase, value: any) => {
    setState((prev: any) => {
      const copy = [...prev.smoCategories];
      copy[index] = { ...copy[index], [field]: value };
      return { ...prev, smoCategories: copy };
    });
  };

  const updateSmoDeliverable = (catIdx: number, itemIdx: number, field: keyof DeliverableItem, value: string) => {
    setState((prev: any) => {
      const copy = [...prev.smoCategories];
      const itemsCopy = [...copy[catIdx].items];
      itemsCopy[itemIdx] = { ...itemsCopy[itemIdx], [field]: value };
      copy[catIdx] = { ...copy[catIdx], items: itemsCopy };
      return { ...prev, smoCategories: copy };
    });
  };

  const addSmoDeliverableRow = (catIdx: number) => {
    setState((prev: any) => {
      const copy = [...prev.smoCategories];
      copy[catIdx] = {
        ...copy[catIdx],
        items: [...copy[catIdx].items, { name: "Social Post Category", value: "Monthly Included" }]
      };
      return { ...prev, smoCategories: copy };
    });
  };

  const deleteSmoDeliverableRow = (catIdx: number, itemIdx: number) => {
    setState((prev: any) => {
      const copy = [...prev.smoCategories];
      const itemsCopy = copy[catIdx].items.filter((_: any, i: number) => i !== itemIdx);
      copy[catIdx] = { ...copy[catIdx], items: itemsCopy };
      return { ...prev, smoCategories: copy };
    });
  };

  const addSmoCategoryBlock = () => {
    setState((prev: any) => ({
      ...prev,
      smoCategories: [
        ...prev.smoCategories,
        { phase: "NEW SMO PROGRAM PHASE", timeline: "Monthly", items: [{ name: "Media Asset Design", value: "Weekly Schedule" }] }
      ]
    }));
  };

  const deleteSmoCategoryBlock = (index: number) => {
    setState((prev: any) => ({
      ...prev,
      smoCategories: prev.smoCategories.filter((_: any, i: number) => i !== index)
    }));
  };

  // Platforms Selection
  const togglePlatform = (plat: string) => {
    setState((prev: any) => {
      const exists = prev.platforms.includes(plat);
      let nextPlats = [...prev.platforms];
      if (exists) {
        nextPlats = nextPlats.filter(p => p !== plat);
      } else {
        nextPlats.push(plat);
      }
      return { ...prev, platforms: nextPlats };
    });
  };

  // Deliverables Summary Updates
  const updateDeliverableSummary = (idx: number, field: keyof DeliverableSummary, value: string) => {
    setState((prev: any) => {
      const copy = [...prev.deliverablesSummary];
      copy[idx] = { ...copy[idx], [field]: value };
      return { ...prev, deliverablesSummary: copy };
    });
  };

  const addDeliverableSummaryRow = () => {
    setState((prev: any) => ({
      ...prev,
      deliverablesSummary: [...prev.deliverablesSummary, { label: "Custom Scope Tasks", count: "As Agreed" }]
    }));
  };

  const removeDeliverableSummaryRow = (idx: number) => {
    setState((prev: any) => ({
      ...prev,
      deliverablesSummary: prev.deliverablesSummary.filter((_: any, i: number) => i !== idx)
    }));
  };

  // Addons Updates
  const updateAddonItem = (idx: number, field: keyof AddonService, value: string) => {
    setState((prev: any) => {
      const copy = [...prev.addons];
      copy[idx] = { ...copy[idx], [field]: value };
      return { ...prev, addons: copy };
    });
  };

  const addAddonRow = () => {
    setState((prev: any) => ({
      ...prev,
      addons: [...prev.addons, { service: "Add-on Support Block", price: "Separate Retainer" }]
    }));
  };

  const removeAddonRow = (idx: number) => {
    setState((prev: any) => ({
      ...prev,
      addons: prev.addons.filter((_: any, i: number) => i !== idx)
    }));
  };

  // Draw signature pad coords
  const getCoordinates = (canvas: HTMLCanvasElement, e: React.MouseEvent | React.TouchEvent): { x: number, y: number } => {
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const startDrawing = (type: 'agency' | 'client', e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    if (type === 'agency') agencyDrawingRef.current = true;
    else clientDrawingRef.current = true;

    const coords = getCoordinates(canvas, e);
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
  };

  const drawHand = (type: 'agency' | 'client', e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement | null) => {
    const active = type === 'agency' ? agencyDrawingRef.current : clientDrawingRef.current;
    if (!active || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Prevent scrolling or zooming on touches
    if (e.cancelable) e.preventDefault();

    const coords = getCoordinates(canvas, e);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = (type: 'agency' | 'client', canvas: HTMLCanvasElement | null) => {
    if (type === 'agency') {
      if (!agencyDrawingRef.current) return;
      agencyDrawingRef.current = false;
    } else {
      if (!clientDrawingRef.current) return;
      clientDrawingRef.current = false;
    }
    if (canvas) {
      updateField(`${type}SigBase64`, canvas.toDataURL());
    }
  };

  const clearCanvasPad = (type: 'agency' | 'client') => {
    const canvas = type === 'agency' ? agencyCanvasRef.current : clientCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateField(`${type}SigBase64`, "");
    }
  };

  const resetToDefault = () => {
    if (window.confirm("Restore default professional proposal content? All un-saved custom texts will be reset.")) {
      setState(defaultProposalState);
      localStorage.removeItem('akgls_proposal_v3_state');
    }
  };

  const clearAllFields = () => {
    if (window.confirm("Wipe all contents to start with an entirely blank proposal template?")) {
      setState({
        agencyName: "",
        agencyAbout: "",
        agencySpecialties: [],
        agencyEmail: "",
        agencyPhone: "",
        agencyWeb: "",
        agencyLogoBase64: "",
        clientCompany: "",
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        clientAddress: "",
        propTitle: "",
        propSubtitle: "",
        propDate: new Date().toISOString().substring(0, 10),
        propValidity: "",
        propCurrency: "₹",
        propTheme: "emerald",
        platforms: [],
        recommendedFor: [],
        planRate: 0,
        planDuration: "",
        planDurationNote: "",
        seoCategories: [],
        smoCategories: [],
        contentTypes: [],
        deliverablesSummary: [],
        growthTimeline: [],
        supportChecklist: [],
        addons: [],
        paymentStructure: "",
        termsConditions: [],
        sigStyle: "text",
        agencySignName: "",
        clientSignName: "",
        agencySigBase64: "",
        clientSigBase64: ""
      });
    }
  };

  const printDocument = () => {
    window.print();
  };

  const themeColObj = THEME_ACCENTS[state.propTheme] || THEME_ACCENTS.emerald;

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 antialiased flex flex-col">
      {styleTagForA4Print}

      {/* TOP COMPACT NAV BAR */}
      <nav id="print-exclude-header" className="bg-slate-900/90 sticky top-0 z-40 border-b border-slate-800 px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBackToHome}
            className="p-2 sm:p-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 transition"
            title="Return to Home Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-2 tracking-tight">
              AKGLS Studio Suite
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-mono">PROPOSAL CREATOR v3.0</span>
            </h1>
            <p className="text-[11px] text-slate-400">Live Customization & Full 6-Page Printable Vector Document Studio</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={resetToDefault} 
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition"
          >
            <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
            Reset Layout
          </button>
          <button 
            onClick={clearAllFields} 
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-400 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/30 rounded-lg transition"
          >
            Clear Draft
          </button>
          <div className="h-6 w-px bg-slate-800 mx-1"></div>
          <button 
            onClick={printDocument} 
            className="flex items-center gap-2 px-5 py-2 text-xs font-black text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-950/40 rounded-lg transition"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF (A4)
          </button>
        </div>
      </nav>

      {/* Main Grid split screen */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
        
        {/* SIDEBAR TABS & FORM FIELDS (5/12) */}
        <section id="editor-sidebar-container" className="lg:col-span-5 bg-slate-950 border-r border-slate-850 flex flex-col h-[calc(100vh-73px)] overflow-hidden">
          
          {/* Tab buttons header */}
          <div className="flex border-b border-slate-850 bg-slate-900 overflow-x-auto text-[11px] font-bold text-slate-400 shrink-0">
            <button 
              onClick={() => setActiveTab('parties')} 
              className={`px-3.5 py-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 lg:flex-1 justify-center transition-all ${activeTab === 'parties' ? 'border-emerald-500 text-white bg-slate-950/15' : 'border-transparent hover:text-white'}`}
            >
              <Users className="w-3.5 h-3.5" /> Parties Info
            </button>
            <button 
              onClick={() => setActiveTab('meta')} 
              className={`px-3.5 py-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 lg:flex-1 justify-center transition-all ${activeTab === 'meta' ? 'border-emerald-500 text-white bg-slate-950/15' : 'border-transparent hover:text-white'}`}
            >
              <Settings className="w-3.5 h-3.5" /> Meta Details
            </button>
            <button 
              onClick={() => setActiveTab('seo')} 
              className={`px-3.5 py-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 lg:flex-1 justify-center transition-all ${activeTab === 'seo' ? 'border-emerald-500 text-white bg-slate-950/15' : 'border-transparent hover:text-white'}`}
            >
              SEO (Phases A-I)
            </button>
            <button 
              onClick={() => setActiveTab('smo')} 
              className={`px-3.5 py-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 lg:flex-1 justify-center transition-all ${activeTab === 'smo' ? 'border-emerald-500 text-white bg-slate-950/15' : 'border-transparent hover:text-white'}`}
            >
              SMO (Phases A-E)
            </button>
            <button 
              onClick={() => setActiveTab('deliverables')} 
              className={`px-3.5 py-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 lg:flex-1 justify-center transition-all ${activeTab === 'deliverables' ? 'border-emerald-500 text-white bg-slate-950/15' : 'border-transparent hover:text-white'}`}
            >
              Rates & Sign-off
            </button>
          </div>

          {/* Tab Content scroll workspace */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">

            {/* TAB PARTIES */}
            {activeTab === 'parties' && (
              <div className="space-y-5">
                {/* Agency Details */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5 text-emerald-400">
                    <Briefcase className="w-4 h-4" /> Core Company (Agency) Identity
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Agency Brand Name</label>
                    <input 
                      type="text" 
                      value={state.agencyName}
                      onChange={(e) => updateField('agencyName', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-2.5 text-slate-200 outline-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Brand Logo Image Upload</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleLogoUpload}
                        className="hidden" 
                        id="agency-logo-file-input"
                      />
                      <button 
                        onClick={() => document.getElementById('agency-logo-file-input')?.click()}
                        className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded border border-slate-700"
                      >
                        Choose Corporate Image...
                      </button>
                      {state.agencyLogoBase64 && (
                        <button 
                          onClick={() => updateField('agencyLogoBase64', '')}
                          className="text-xs text-rose-400 hover:underline"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Mission About Paragraph</label>
                    <textarea 
                      value={state.agencyAbout}
                      onChange={(e) => updateField('agencyAbout', e.target.value)}
                      rows={3}
                      className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-2.5 text-slate-200 outline-none resize-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Service Specialities (Comma Separated)</label>
                    <textarea 
                      value={state.agencySpecialties.join(', ')}
                      onChange={(e) => updateField('agencySpecialties', e.target.value.split(',').map(s=>s.trim()).filter(Boolean))}
                      rows={2}
                      className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-2.5 text-slate-200 outline-none resize-none transition" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Official Email</label>
                      <input 
                        type="email" 
                        value={state.agencyEmail}
                        onChange={(e) => updateField('agencyEmail', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Direct Phone</label>
                      <input 
                        type="text" 
                        value={state.agencyPhone}
                        onChange={(e) => updateField('agencyPhone', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Website Domain</label>
                    <input 
                      type="text" 
                      value={state.agencyWeb}
                      onChange={(e) => updateField('agencyWeb', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                    />
                  </div>
                </div>

                {/* Client Details */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5 text-emerald-400">
                    <Users className="w-4 h-4" /> Client Venture Parameters
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Client Company Brand</label>
                    <input 
                      type="text" 
                      value={state.clientCompany}
                      onChange={(e) => updateField('clientCompany', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-2.5 text-slate-200 outline-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Client Primary Executive</label>
                    <input 
                      type="text" 
                      value={state.clientName}
                      onChange={(e) => updateField('clientName', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg p-2.5 text-slate-200 outline-none transition" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Client Email</label>
                      <input 
                        type="email" 
                        value={state.clientEmail}
                        onChange={(e) => updateField('clientEmail', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Client Phone</label>
                      <input 
                        type="text" 
                        value={state.clientPhone}
                        onChange={(e) => updateField('clientPhone', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Venture Corporate Address</label>
                    <input 
                      type="text" 
                      value={state.clientAddress}
                      onChange={(e) => updateField('clientAddress', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB META */}
            {activeTab === 'meta' && (
              <div className="space-y-5">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5 text-emerald-400 font-mono">
                    <FileText className="w-4 h-4" /> Layout Configuration Settings
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Proposal Headline Title</label>
                    <input 
                      type="text" 
                      value={state.propTitle}
                      onChange={(e) => updateField('propTitle', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 outline-none focus:border-emerald-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Proposal Subtitle Line</label>
                    <input 
                      type="text" 
                      value={state.propSubtitle}
                      onChange={(e) => updateField('propSubtitle', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 outline-none focus:border-emerald-500" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Document Date</label>
                      <input 
                        type="date" 
                        value={state.propDate}
                        onChange={(e) => updateField('propDate', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Expiries Validity Frame</label>
                      <input 
                        type="text" 
                        value={state.propValidity}
                        onChange={(e) => updateField('propValidity', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Currency Symbol</label>
                      <select 
                        value={state.propCurrency}
                        onChange={(e) => updateField('propCurrency', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none"
                      >
                        <option value="₹">Indian Rupee (₹)</option>
                        <option value="$">US Dollar ($)</option>
                        <option value="€">Euro (€)</option>
                        <option value="£">Pound (£)</option>
                        <option value="S$">Singapore Dollar (S$)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Interactive Theme Palette</label>
                      <select 
                        value={state.propTheme}
                        onChange={(e) => updateField('propTheme', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-teal-300 outline-none font-bold"
                      >
                        <option value="emerald">Creative Emerald Green (AKGLS default)</option>
                        <option value="blue">Corporate Cobalt Blue</option>
                        <option value="charcoal">Charcoal Minimal Noir</option>
                        <option value="purple">Royal Amethyst Purple</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5 text-emerald-400">
                    <Globe className="w-4 h-4" /> Platforms & Recommended Target
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Social Channels Active</label>
                    <div className="grid grid-cols-2 gap-2">
                      {PRESET_PLATFORMS.map(p => {
                        const active = state.platforms.includes(p);
                        return (
                          <button 
                            key={p}
                            onClick={() => togglePlatform(p)}
                            className={`px-3 py-1.5 text-xs text-left rounded-lg border font-semibold flex items-center justify-between transition-all ${active ? 'border-emerald-600 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-400'}`}
                          >
                            <span>{p}</span>
                            {active && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Target Audiences / Perfect For (Comma separated)</label>
                    <textarea 
                      value={state.recommendedFor.join(', ')}
                      onChange={(e) => updateField('recommendedFor', e.target.value.split(',').map(s=>s.trim()).filter(Boolean))}
                      rows={2}
                      className="w-full text-xs bg-slate-950 border border-slate-800 focus:border-red-500 rounded-lg p-2 text-slate-200 outline-none resize-none" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB SEO (A-I) */}
            {activeTab === 'seo' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">
                    SEO Pipeline Phases Settings (Phases A – I)
                  </h3>
                  <button 
                    onClick={addSeoCategoryBlock}
                    className="px-2 py-1 bg-emerald-950 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase rounded flex items-center gap-1 hover:bg-emerald-900 transition"
                  >
                    <PlusCircle className="w-3 h-3" /> Add Phase Block
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Customize organic Search optimization phases. Drag parameters, rewrite deliverables lists, or manage timeline intervals directly.
                </p>

                {state.seoCategories.map((cat: StrategicPhase, catIdx: number) => (
                  <div key={catIdx} className="bg-slate-900/40 p-4 border border-slate-800 rounded-xl space-y-3 relative">
                    <button 
                      onClick={() => deleteSeoCategoryBlock(catIdx)}
                      className="absolute top-4 right-4 text-rose-500 hover:text-rose-400 text-xs font-bold"
                    >
                      Delete Phase
                    </button>
                    <div>
                      <label className="block text-[8px] font-bold text-slate-500 uppercase font-mono">Phase Category Head line</label>
                      <input 
                        type="text" 
                        value={cat.phase}
                        onChange={(e) => updateSeoPhase(catIdx, 'phase', e.target.value)}
                        className="w-[78%] text-xs bg-slate-950 border border-slate-800 rounded p-1.5 text-emerald-400 font-bold" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[8px] font-bold text-slate-500 uppercase font-mono">Execution Timeline</label>
                        <input 
                          type="text" 
                          value={cat.timeline}
                          onChange={(e) => updateSeoPhase(catIdx, 'timeline', e.target.value)}
                          className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-1 text-slate-300 font-bold" 
                        />
                      </div>
                      <div className="flex items-end justify-end">
                        <button 
                          onClick={() => addSeoDeliverableRow(catIdx)}
                          className="text-[10px] bg-slate-800 hover:bg-slate-705 text-slate-300 font-bold px-2.5 py-1.5 border border-slate-700 rounded-md"
                        >
                          + Add Row Task
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-850">
                      {cat.items.map((row, rowIdx) => (
                        <div key={rowIdx} className="flex items-center gap-1.5">
                          <input 
                            type="text" 
                            value={row.name}
                            onChange={(e) => updateSeoDeliverable(catIdx, rowIdx, 'name', e.target.value)}
                            placeholder="Operational Strategy"
                            className="flex-1 text-[11px] bg-slate-950 border border-slate-850 rounded p-1 text-slate-200"
                          />
                          <input 
                            type="text" 
                            value={row.value}
                            onChange={(e) => updateSeoDeliverable(catIdx, rowIdx, 'value', e.target.value)}
                            placeholder="Delivered Deliverables"
                            className="w-[28%] text-[11px] bg-slate-950 border border-slate-850 rounded p-1 text-slate-400 text-right"
                          />
                          <button 
                            onClick={() => deleteSeoDeliverableRow(catIdx, rowIdx)}
                            className="text-slate-500 hover:text-rose-400 font-bold px-1"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB SMO (A-E) */}
            {activeTab === 'smo' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">
                    Social Media Pipeline Phases (Phases A – E)
                  </h3>
                  <button 
                    onClick={addSmoCategoryBlock}
                    className="px-2 py-1 bg-emerald-950 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase rounded flex items-center gap-1 hover:bg-emerald-900 transition"
                  >
                    <PlusSquare className="w-3" /> Add Phase Block
                  </button>
                </div>

                {state.smoCategories.map((cat: StrategicPhase, catIdx: number) => (
                  <div key={catIdx} className="bg-slate-900/40 p-4 border border-slate-800 rounded-xl space-y-3 relative">
                    <button 
                      onClick={() => deleteSmoCategoryBlock(catIdx)}
                      className="absolute top-4 right-4 text-rose-500 hover:text-rose-400 text-xs font-bold"
                    >
                      Delete Phase
                    </button>
                    <div>
                      <label className="block text-[8px] font-bold text-slate-500 uppercase font-mono">Phase Title</label>
                      <input 
                        type="text" 
                        value={cat.phase}
                        onChange={(e) => updateSmoPhase(catIdx, 'phase', e.target.value)}
                        className="w-[78%] text-xs bg-slate-950 border border-slate-800 rounded p-1.5 text-emerald-400 font-bold" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[8px] font-bold text-slate-500 uppercase font-mono">Execution Timeline</label>
                        <input 
                          type="text" 
                          value={cat.timeline}
                          onChange={(e) => updateSmoPhase(catIdx, 'timeline', e.target.value)}
                          className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-1 text-indigo-300 font-bold" 
                        />
                      </div>
                      <div className="flex items-end justify-end">
                        <button 
                          onClick={() => addSmoDeliverableRow(catIdx)}
                          className="text-[10px] bg-slate-800 hover:bg-slate-705 text-slate-300 font-bold px-2.5 py-1.5 border border-slate-700 rounded-md"
                        >
                          + Add Row Task
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-850">
                      {cat.items.map((row, rowIdx) => (
                        <div key={rowIdx} className="flex items-center gap-1.5">
                          <input 
                            type="text" 
                            value={row.name}
                            onChange={(e) => updateSmoDeliverable(catIdx, rowIdx, 'name', e.target.value)}
                            className="flex-1 text-[11px] bg-slate-950 border border-slate-850 rounded p-1 text-slate-200"
                          />
                          <input 
                            type="text" 
                            value={row.value}
                            onChange={(e) => updateSmoDeliverable(catIdx, rowIdx, 'value', e.target.value)}
                            className="w-[28%] text-[11px] bg-slate-950 border border-slate-850 rounded p-1 text-slate-400 text-right"
                          />
                          <button 
                            onClick={() => deleteSmoDeliverableRow(catIdx, rowIdx)}
                            className="text-slate-500 hover:text-rose-400 font-bold px-1"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Content Categories check covered in SMO Phase B */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5 text-indigo-400">
                    Content Categories (SMM Plan Covered Category B)
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Items list (Comma values list)</label>
                    <textarea 
                      value={state.contentTypes.join(', ')}
                      onChange={(e) => updateField('contentTypes', e.target.value.split(',').map(s=>s.trim()).filter(Boolean))}
                      rows={3}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 resize-none outline-none focus:border-indigo-500" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB DELIVERABLES (Rates, Addons, T&C, signatures) */}
            {activeTab === 'deliverables' && (
              <div className="space-y-5">
                {/* Financial retainers */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5 text-emerald-400">
                    Project Cost Structure
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Monthly Plan Rate (Number)</label>
                      <input 
                        type="number" 
                        value={state.planRate}
                        onChange={(e) => updateField('planRate', parseFloat(e.target.value) || 0)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-2 text-slate-200" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Contract Frame Duration</label>
                      <input 
                        type="text" 
                        value={state.planDuration}
                        onChange={(e) => updateField('planDuration', e.target.value)}
                        className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-2 text-slate-200" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Project Duration Advice note</label>
                    <textarea 
                      value={state.planDurationNote}
                      onChange={(e) => updateField('planDurationNote', e.target.value)}
                      rows={2}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-300 resize-none" 
                    />
                  </div>
                </div>

                {/* Summary deliverables list */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">
                      Deliverables Summary Checklist Table
                    </h3>
                    <button 
                      onClick={addDeliverableSummaryRow}
                      className="text-[9px] bg-slate-850 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded"
                    >
                      + Add Row
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {state.deliverablesSummary.map((item: DeliverableSummary, idx: number) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <input 
                          type="text" 
                          value={item.label}
                          onChange={(e) => updateDeliverableSummary(idx, 'label', e.target.value)}
                          className="flex-1 text-xs bg-slate-950 border border-slate-850 rounded p-1 text-slate-300"
                          placeholder="e.g. Backlinks"
                        />
                        <input 
                          type="text" 
                          value={item.count}
                          onChange={(e) => updateDeliverableSummary(idx, 'count', e.target.value)}
                          className="w-[30%] text-xs bg-slate-950 border border-slate-855 rounded p-1 text-slate-300 text-right"
                          placeholder="25 posts"
                        />
                        <button 
                          onClick={() => removeDeliverableSummaryRow(idx)}
                          className="text-slate-500 hover:text-rose-400 font-bold px-1"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add-ons List */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">
                      Optional Add-On Retainers
                    </h3>
                    <button 
                      onClick={addAddonRow}
                      className="text-[9px] bg-slate-850 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded"
                    >
                      + Add Addon Row
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {state.addons.map((addon: AddonService, idx: number) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <input 
                          type="text" 
                          value={addon.service}
                          onChange={(e) => updateAddonItem(idx, 'service', e.target.value)}
                          className="flex-1 text-xs bg-slate-950 border border-slate-850 rounded p-1 text-slate-300"
                        />
                        <input 
                          type="text" 
                          value={addon.price}
                          onChange={(e) => updateAddonItem(idx, 'price', e.target.value)}
                          className="w-[35%] text-xs bg-slate-950 border border-slate-855 rounded p-1 text-slate-300 text-right font-bold"
                        />
                        <button 
                          onClick={() => removeAddonRow(idx)}
                          className="text-slate-500 hover:text-rose-400 font-bold px-1"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support and timeline checklist */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">
                    Timelines & Support Targets
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Growth Milestones Schedule (Lines separated)</label>
                    <textarea 
                      value={state.growthTimeline.join('\n')}
                      onChange={(e) => updateField('growthTimeline', e.target.value.split('\n').map(s=>s.trim()).filter(Boolean))}
                      rows={3}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-2 text-slate-300 resize-none outline-none font-mono" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Support Features (Lines separated)</label>
                    <textarea 
                      value={state.supportChecklist.join('\n')}
                      onChange={(e) => updateField('supportChecklist', e.target.value.split('\n').map(s=>s.trim()).filter(Boolean))}
                      rows={3}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-2 text-slate-300 resize-none outline-none font-mono" 
                    />
                  </div>
                </div>

                {/* Terms and Payment clause parameters */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">
                    Billing Terms & Conditions Structure
                  </h3>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Retainer Billing Milestones / Payments Instructions</label>
                    <textarea 
                      value={state.paymentStructure}
                      onChange={(e) => updateField('paymentStructure', e.target.value)}
                      rows={3}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-2 text-slate-300 resize-none font-medium" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Standard Legal Contractual Clauses (Separate Lines)</label>
                    <textarea 
                      value={state.termsConditions.join('\n')}
                      onChange={(e) => updateField('termsConditions', e.target.value.split('\n').map(s=>s.trim()).filter(Boolean))}
                      rows={3}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded p-2 text-slate-300 resize-none font-mono text-[10px]" 
                    />
                  </div>
                </div>

                {/* Interactive signatures configuration */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">
                    Agreement Execution Signatures
                  </h3>
                  <div className="flex bg-slate-950 p-1.5 rounded-lg border border-slate-850 gap-1 select-none">
                    <button 
                      onClick={() => updateField('sigStyle', 'draw')}
                      className={`flex-1 text-[10px] font-bold py-1.5 rounded transition ${state.sigStyle === 'draw' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Draw Signatures
                    </button>
                    <button 
                      onClick={() => updateField('sigStyle', 'text')}
                      className={`flex-1 text-[10px] font-bold py-1.5 rounded transition ${state.sigStyle === 'text' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Type Names Text
                    </button>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase">Prepared Representative Officer Name</label>
                    <input 
                      type="text" 
                      value={state.agencySignName}
                      onChange={(e) => updateField('agencySignName', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 mt-1" 
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase">Client Representative Acceptance Name</label>
                    <input 
                      type="text" 
                      value={state.clientSignName}
                      onChange={(e) => updateField('clientSignName', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 mt-1" 
                    />
                  </div>

                  {state.sigStyle === 'draw' && (
                    <div className="space-y-4 pt-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400">
                          <span>Agency Direct Execution Drawpad</span>
                          <button onClick={() => clearCanvasPad('agency')} className="text-rose-400 hover:underline">Clear Canvas</button>
                        </div>
                        <div className="border border-slate-700 rounded bg-white overflow-hidden">
                          <canvas 
                            ref={agencyCanvasRef}
                            width={320}
                            height={80}
                            className="w-full h-20 cursor-crosshair touch-none"
                            onMouseDown={(e) => startDrawing('agency', e, agencyCanvasRef.current)}
                            onMouseMove={(e) => drawHand('agency', e, agencyCanvasRef.current)}
                            onMouseUp={() => stopDrawing('agency', agencyCanvasRef.current)}
                            onMouseLeave={() => stopDrawing('agency', agencyCanvasRef.current)}
                            onTouchStart={(e) => startDrawing('agency', e, agencyCanvasRef.current)}
                            onTouchMove={(e) => drawHand('agency', e, agencyCanvasRef.current)}
                            onTouchEnd={() => stopDrawing('agency', agencyCanvasRef.current)}
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400">
                          <span>Client Representative Drawpad</span>
                          <button onClick={() => clearCanvasPad('client')} className="text-rose-400 hover:underline">Clear Canvas</button>
                        </div>
                        <div className="border border-slate-700 rounded bg-white overflow-hidden">
                          <canvas 
                            ref={clientCanvasRef}
                            width={320}
                            height={80}
                            className="w-full h-20 cursor-crosshair touch-none"
                            onMouseDown={(e) => startDrawing('client', e, clientCanvasRef.current)}
                            onMouseMove={(e) => drawHand('client', e, clientCanvasRef.current)}
                            onMouseUp={() => stopDrawing('client', clientCanvasRef.current)}
                            onMouseLeave={() => stopDrawing('client', clientCanvasRef.current)}
                            onTouchStart={(e) => startDrawing('client', e, clientCanvasRef.current)}
                            onTouchMove={(e) => drawHand('client', e, clientCanvasRef.current)}
                            onTouchEnd={() => stopDrawing('client', clientCanvasRef.current)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Footer save info container */}
          <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-850 text-[10px] text-slate-400 flex items-center justify-between shrink-0 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Sandbox Cache Synced
            </span>
            <span>A4 Print Scale Ready</span>
          </div>

        </section>

        {/* RIGHT PREVIEW PORT: PROFESSIONAL MULTI-PAGE PRINT STUDIO (7/12) */}
        <section id="preview-port" className="lg:col-span-7 bg-slate-850 p-6 flex flex-col items-center justify-start overflow-y-auto h-[calc(100vh-73px)] relative preview-container" ref={previewContainerRef}>
          <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }} className="transition-all duration-300">
            
            {/* WRAPPED PRINTABLE DOCUMENT SEQUENCE */}
            <div id="proposalPrintableDocument" className="space-y-8 print:space-y-0 text-slate-800">
              
              {/* ============================================= */}
              {/* PAGE 1: PROFESSIONAL HIGH-END BRAND COVER PAGE */}
              {/* ============================================= */}
              <div className="preview-a4 shadow-2xl relative">
                <div className={`absolute top-0 left-0 right-0 h-4 ${themeColObj.bg}`}></div>
                
                {/* Cover Top Header */}
                <div className="flex justify-between items-center pt-8">
                  <div className="flex items-center gap-3">
                    {state.agencyLogoBase64 ? (
                      <img src={state.agencyLogoBase64} className="h-9 max-w-[140px] object-contain rounded" alt="Corporate" />
                    ) : (
                      state.agencyName && (
                        <div className={`h-9 px-3 rounded-lg text-white font-black text-xs tracking-wider uppercase flex items-center justify-center ${themeColObj.bg}`}>
                          {state.agencyName.substring(0,3).toUpperCase()}
                        </div>
                      )
                    )}
                    <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
                      {state.agencyName}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
                    {state.propDate && new Date(state.propDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()}
                  </span>
                </div>

                {/* Bold Minimal Display Typography Section */}
                <div className="my-auto max-w-[560px] space-y-6">
                  <span className={`inline-block text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded ${themeColObj.badge}`}>
                    Search Dominance Strategy Matrix
                  </span>
                  <div className="space-y-3">
                    <h1 className="text-3xl font-extrabold text-slate-900 leading-snug tracking-tight font-display">
                      {state.propTitle || "SEO & Social Media Management Proposal"}
                    </h1>
                    <p className="text-slate-500 font-medium text-xs leading-relaxed max-w-lg">
                      {state.propSubtitle || "A high-fidelity pipeline blueprint prepared for brand visibility and search dominance."}
                    </p>
                  </div>
                  <div className={`h-1 w-20 rounded-full ${themeColObj.bg}`}></div>
                </div>

                {/* Metadata details block */}
                <div className="grid grid-cols-2 gap-6 pt-10 border-t border-slate-100">
                  <div className="space-y-1">
                    <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">PREPARED BY PARTNER:</span>
                    <h3 className="font-extrabold text-slate-800 text-xs">{state.agencyName}</h3>
                    <p className="text-[10px] text-slate-500">{state.agencyEmail}</p>
                    <p className={`text-[10px] font-bold ${themeColObj.printText}`}>{state.agencyWeb}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">PREPARED EXCLUSIVELY FOR:</span>
                    <h3 className="font-extrabold text-slate-800 text-xs">{state.clientCompany || "Target Growth Enterprise"}</h3>
                    <p className="text-[10px] text-slate-500">Attr: {state.clientName}</p>
                    <p className="text-[10px] font-bold text-rose-600">Validity: {state.propValidity || "30 Days Offer"}</p>
                  </div>
                </div>
              </div>


              {/* ============================================= */}
              {/* PAGE 2: PROFILE & CONTEXT OVERVIEW */}
              {/* ============================================= */}
              <div className="preview-a4 pdf-page-break shadow-2xl relative">
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${themeColObj.bg}`}></div>

                <div className="space-y-6">
                  {/* Page mini header */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      {state.agencyName} — STRATEGY MATRICES
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 font-mono">Page 2 of 6</span>
                  </div>

                  {/* Company credentials paragraph */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-extrabold text-slate-900 uppercase flex items-center gap-1.5 leading-none">
                      <span className={`w-2 h-2 rounded-full ${themeColObj.bg}`}></span>
                      Corporate Profile & Capabilities
                    </h2>
                    <div className="bg-slate-50 p-4 border border-slate-100 rounded-xl space-y-3">
                      <h3 className={`text-[10px] font-extrabold uppercase tracking-wider ${themeColObj.printText}`}>About Our Agency</h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-serif whitespace-pre-line">
                        {state.agencyAbout || "A growth marketing agency focused on optimization solutions."}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1">
                      <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">CORE SOLUTION SPECIALITIES:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {state.agencySpecialties.map((spec: string, i: number) => (
                          <span key={i} className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded border border-slate-200">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Summary scope inclusion card */}
                  <div className="space-y-3 pt-2">
                    <h2 className="text-sm font-extrabold text-slate-900 uppercase flex items-center gap-1.5 leading-none">
                      <span className={`w-2 h-2 rounded-full ${themeColObj.bg}`}></span>
                      Enterprise Growth Roadmap Summary
                    </h2>
                    <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 border border-slate-100 rounded-xl">
                      <div className="space-y-2">
                        <span className="block text-[9px] font-bold text-slate-400 uppercase">Core Services Bundled</span>
                        <ul className="text-[10px] text-slate-600 font-bold space-y-1.5 pl-1">
                          <li className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Search Engine SEO Optimization</li>
                          <li className="flex items-center gap-1.5"><span class="text-emerald-500">✓</span> Cognitive Generative AI Mappings</li>
                          <li className="flex items-center gap-1.5"><span class="text-emerald-500">✓</span> Branded SMO Creative Posts</li>
                          <li className="flex items-center gap-1.5"><span class="text-emerald-500">✓</span> Performance Conversories CRO</li>
                          <li className="flex items-center gap-1.5"><span class="text-emerald-500">✓</span> Full Backlink Velocity Building</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <span className="block text-[9px] font-bold text-slate-400 uppercase">Interactive Target Investment</span>
                        <div className={`${themeColObj.bgLight} p-3 rounded-lg border border-slate-200`}>
                          <span className={`block text-[8px] font-extrabold uppercase ${themeColObj.printText}`}>Total Plan Retainer</span>
                          <span className="text-sm font-black text-slate-900">
                            {state.propCurrency} {Number(state.planRate).toLocaleString('en-US', { minimumFractionDigits:0 })} /- Monthly
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="block text-[8px] font-bold text-slate-400 uppercase">Recommended Audiences:</span>
                          <div className="flex flex-wrap gap-1">
                            {state.recommendedFor.map((rec: string, i: number) => (
                              <span key={i} className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${themeColObj.badge}`}>
                                {rec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Platforms list badge block */}
                  <div className={`${themeColObj.bgLight} p-4 rounded-xl border border-slate-150 space-y-2`}>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-700 flex items-center gap-1.5 leading-none">
                      <Globe className="w-3.5 h-3.5 text-slate-400" />
                      Social Media Channels Configured In Standard Engagement Scope
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {state.platforms.length === 0 ? (
                        <span className="text-[10px] text-slate-400 italic">No platforms configured</span>
                      ) : (
                        state.platforms.map((plat: string, i: number) => (
                          <span key={i} className="text-[9px] font-extrabold uppercase tracking-wider bg-white border border-slate-200 px-3 py-1 text-slate-800 rounded shadow-sm">
                            {plat}
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Program duration caution */}
                  <div className={`p-4 border-l-4 ${themeColObj.border} bg-slate-50 rounded-r-lg`}>
                    <h5 className="text-[11px] font-extrabold text-slate-900">
                      Standard Commitment Duration: <span className={`${themeColObj.printText}`}>{state.planDuration || "6 Months"} Retainer</span>
                    </h5>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5 font-medium">
                      {state.planDurationNote || "SEO and social outcomes require consistent execution. Measurable visibility generally materializes within 3–6 months."}
                    </p>
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-slate-100 text-[8px] text-slate-400">
                  Shared confidentially with <span className="font-extrabold text-slate-700">{state.clientCompany}</span> for strategy evaluation purposes.
                </div>
              </div>


              {/* ============================================= */}
              {/* PAGE 3: SEO BLUEPRINT - PART 1 */}
              {/* ============================================= */}
              <div className="preview-a4 pdf-page-break shadow-2xl relative">
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${themeColObj.bg}`}></div>

                <div className="space-y-4">
                  {/* Page header */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      1. ORGANIC SEO STRATEGIC SCHEDULING (PHASES A – E)
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 font-mono">Page 3 of 6</span>
                  </div>

                  <div className="space-y-0.5">
                    <h2 className="text-sm font-extrabold text-slate-900 uppercase">Search Engine Optimization Specifications</h2>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wider font-mono">COMPREHENSIVE TECHNICAL, SEMANTIC, AND AUDIT STRUCTURES</p>
                  </div>

                  {/* Render SEO categories 0 to 4 in Page 3 */}
                  <div className="space-y-4">
                    {state.seoCategories.slice(0, 5).map((phase: StrategicPhase, idx: number) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center bg-slate-50 p-1 rounded border-b border-slate-200">
                          <span className={`text-[10px] font-black uppercase ${themeColObj.printText}`}>{phase.phase}</span>
                          <span className="text-[8px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded tracking-wide uppercase font-mono">{phase.timeline}</span>
                        </div>
                        <table className="w-full text-left text-[9px] text-slate-600">
                          <thead>
                            <tr className="border-b border-slate-100 font-bold text-slate-450 uppercase text-[8px]">
                              <th className="py-1 px-1">Specific Task Operations / Actions</th>
                              <th className="py-1 px-1 text-right">Target Metrics Frequency</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium">
                            {phase.items.map((item, iIdx) => (
                              <tr key={iIdx}>
                                <td className="py-1 text-slate-800 font-bold">{item.name}</td>
                                <td className="py-1 text-right text-slate-500 font-bold">{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                    {state.seoCategories.length === 0 && <p className="text-xs text-rose-500 italic font-bold text-center">No SEO phase categories configured.</p>}
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-slate-100 text-[8px] text-slate-400">
                  Shared confidentially with <span className="font-extrabold text-slate-700">{state.clientCompany}</span> for strategy evaluation purposes.
                </div>
              </div>


              {/* ============================================= */}
              {/* PAGE 4: SEO BLUEPRINT - PART 2 */}
              {/* ============================================= */}
              <div className="preview-a4 pdf-page-break shadow-2xl relative">
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${themeColObj.bg}`}></div>

                <div className="space-y-4">
                  {/* Page header */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      1. ORGANIC SEO STRATEGIC SCHEDULING (PHASES F – I CONTINUED)
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 font-mono">Page 4 of 6</span>
                  </div>

                  <div className="space-y-0.5">
                    <h2 className="text-sm font-extrabold text-slate-900 uppercase">Search Engine Optimization Specifications</h2>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wider font-mono font-mono">LINK ENGINEERING, BRAND COGNITION, AND PERFORMANCE METRIC AUDITING</p>
                  </div>

                  {/* Render SEO categories 5 to remaining in Page 4 */}
                  <div className="space-y-4">
                    {state.seoCategories.slice(5).map((phase: StrategicPhase, idx: number) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center bg-slate-50 p-1 rounded border-b border-slate-200">
                          <span className={`text-[10px] font-black uppercase ${themeColObj.printText}`}>{phase.phase}</span>
                          <span className="text-[8px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded tracking-wide uppercase font-mono">{phase.timeline}</span>
                        </div>
                        <table className="w-full text-left text-[9px] text-slate-600">
                          <thead>
                            <tr className="border-b border-slate-100 font-bold text-slate-450 uppercase text-[8px]">
                              <th className="py-1 px-1">Specific Task Operations / Actions</th>
                              <th className="py-1 px-1 text-right">Target Metrics Frequency</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium">
                            {phase.items.map((item, iIdx) => (
                              <tr key={iIdx}>
                                <td className="py-1 text-slate-800 font-bold">{item.name}</td>
                                <td className="py-1 text-right text-slate-500 font-bold">{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                    {state.seoCategories.length <= 5 && (
                      <div className="p-8 border border-dashed border-slate-200 rounded-xl bg-slate-50/50 text-center text-slate-400 text-xs">
                        No additional SEO phase categories to print on Page 4. Use "Add Phase Block" to distribute deliverables nicely!
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-slate-100 text-[8px] text-slate-400">
                  Shared confidentially with <span className="font-extrabold text-slate-700">{state.clientCompany}</span> for strategy evaluation purposes.
                </div>
              </div>


              {/* ============================================= */}
              {/* PAGE 5: SOCIAL MEDIA MARKETING (SMO) MODEL */}
              {/* ============================================= */}
              <div className="preview-a4 pdf-page-break shadow-2xl relative">
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${themeColObj.bg}`}></div>

                <div className="space-y-5">
                  {/* Page header */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      2. SOCIAL MEDIA & BRAND INBOUND ACQUISITIONS (SMO)
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 font-mono">Page 5 of 6</span>
                  </div>

                  <div className="space-y-0.5">
                    <h2 className="text-sm font-extrabold text-slate-900 uppercase">Social Media Marketing Specifications</h2>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wider font-mono font-mono">CUSTOM PLATFORM OPTIMIZATIONS, STORYBOARD PLANS, AND ACTIVE COMMNITY ENGAGEMENT</p>
                  </div>

                  {/* Render SMO Category phases */}
                  <div className="space-y-4">
                    {state.smoCategories.map((phase: StrategicPhase, idx: number) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center bg-slate-50 p-1 rounded border-b border-slate-200">
                          <span className={`text-[10px] font-black uppercase ${themeColObj.printText}`}>{phase.phase}</span>
                          <span className="text-[8px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded tracking-wide uppercase font-mono">{phase.timeline}</span>
                        </div>
                        <table className="w-full text-left text-[9px] text-slate-600">
                          <thead>
                            <tr className="border-b border-slate-100 font-bold text-slate-405 uppercase text-[8px]">
                              <th className="py-1 px-1">Specific SMO Deliverables / Content Schedule</th>
                              <th className="py-1 px-1 text-right">Target Frequency Bounds</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium">
                            {phase.items.map((item, iIdx) => (
                              <tr key={iIdx}>
                                <td className="py-1 text-slate-800 font-bold">{item.name}</td>
                                <td className="py-1 text-right text-slate-500 font-bold">{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>

                  {/* Platform Content Type Grid Section */}
                  <div className="space-y-2 pt-2">
                    <span className={`block text-[10px] font-black uppercase tracking-wider ${themeColObj.printText}`}>
                      B. CONTENT TYPES COVERED UNDER BRAND REPUTATION SCOPE:
                    </span>
                    <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {state.contentTypes.map((type: string, i: number) => (
                        <div key={i} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700">
                          <span className={`${themeColObj.text} text-[12px]`}>◈</span>
                          <span>{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-slate-100 text-[8px] text-slate-400">
                  Shared confidentially with <span className="font-extrabold text-slate-700">{state.clientCompany}</span> for strategy evaluation purposes.
                </div>
              </div>


              {/* ============================================= */}
              {/* PAGE 6: FINANCIAL PLAN & SIGN-OFF CONTRACT */}
              {/* ============================================= */}
              <div className="preview-a4 pdf-page-break shadow-2xl relative">
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${themeColObj.bg}`}></div>

                <div className="space-y-4">
                  {/* Page header */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      FINANCIAL ESTIMATE CONTRACT & EXECUTION AGREEMENT
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 font-mono">Page 6 of 6</span>
                  </div>

                  <div className="space-y-0.5">
                    <h2 className="text-sm font-extrabold text-slate-900 uppercase">Financial Scope & Term Agreements</h2>
                    <p className="text-[9px] text-slate-400 font-bold tracking-wider font-mono">COMMERCIAL RETENTION ESTIMATES, OPTIONAL SUPPORTS, AND BILLING INSTRUCTIONS</p>
                  </div>

                  {/* Calculation and Quantities summaries block */}
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                      <div>
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Plan Classification</span>
                        <h4 className="text-xs font-extrabold text-slate-800 uppercase mt-0.5">SEO & SMO Bundle Pack</h4>
                        <p className="text-[9px] text-slate-500 leading-relaxed mt-1 font-medium">Bundled organic indexing growth and full visual social media assets pipeline maintenance.</p>
                      </div>
                      <div className="border-t border-slate-200 pt-3 mt-3">
                        <span className="text-[8px] font-bold text-slate-400 uppercase font-mono">Plan Retainer</span>
                        <h2 className={`text-base font-black ${themeColObj.printText}`}>
                          {state.propCurrency} {Number(state.planRate).toLocaleString('en-US', { minimumFractionDigits: 0 })} /- Monthly
                        </h2>
                      </div>
                    </div>

                    <div className="col-span-7 bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Plan Deliverables Summary</span>
                      <table className="w-full text-left text-[9px] text-slate-700">
                        <thead>
                          <tr className="border-b border-slate-200 font-bold text-slate-400 text-[8px] uppercase">
                            <th className="pb-1">Scope Element</th>
                            <th className="pb-1 text-right">Target Volume</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-bold">
                          {state.deliverablesSummary.map((item: DeliverableSummary, i: number) => (
                            <tr key={i}>
                              <td className="py-0.5 text-slate-800">{item.label}</td>
                              <td className="py-0.5 text-right text-slate-600">{item.count}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Add-on retainer list */}
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Optional Add-On Marketing Solutions (Configurable as additional scopes)</span>
                    <table className="w-full text-left text-[9px] text-slate-600">
                      <thead>
                        <tr className="bg-slate-50 text-slate-700 font-bold">
                          <th className="p-1 px-2 border-b border-slate-100">Optional Segment</th>
                          <th className="p-1 px-2 text-right border-b border-slate-100">Supplementary Retainer Pricing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-bold">
                        {state.addons.map((add: AddonService, i: number) => (
                          <tr key={i}>
                            <td className="p-1 px-2 text-slate-800">{add.service}</td>
                            <td className={`p-1 px-2 text-right ${themeColObj.printText}`}>{add.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Timelines and support items info */}
                  <div className="grid grid-cols-2 gap-4 text-[9px]">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                      <span className={`block font-black uppercase tracking-wider text-[8px] ${themeColObj.printText}`}>PROJECTED GROWTH MILESTONES:</span>
                      <div className="space-y-1 text-slate-600 font-bold font-serif leading-relaxed">
                        {state.growthTimeline.map((line: string, i: number) => (
                          <div key={i} className="flex gap-1">
                            <span className="text-emerald-500 font-extrabold">➔</span>
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                      <span className={`block font-black uppercase tracking-wider text-[8px] ${themeColObj.printText}`}>CLIENT SERVICES INCLUDE:</span>
                      <div className="space-y-1 text-slate-600 font-bold leading-normal">
                        {state.supportChecklist.map((line: string, i: number) => (
                          <div key={i} className="flex gap-1">
                            <span>{line.startsWith('✅') ? '' : '✅'}</span>
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Payment instructions clauses */}
                  <div className="grid grid-cols-2 gap-4 text-[9px] leading-relaxed">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                      <span className={`block font-black uppercase tracking-wider text-[8px] ${themeColObj.printText}`}>RETAINER BILLING CLAUSES:</span>
                      <p className="text-slate-500 font-bold font-serif whitespace-pre-line leading-normal">
                        {state.paymentStructure}
                      </p>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                      <span className={`block font-black uppercase tracking-wider text-[8px] ${themeColObj.printText}`}>AGREED TERMS & CONDITIONS:</span>
                      <ul className="text-slate-500 font-bold text-[8px] list-disc pl-3.5 space-y-0.5 leading-snug">
                        {state.termsConditions.map((clause: string, i: number) => (
                          <li key={i}>{clause}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Signatures execution blocks */}
                  <div className="pt-4 border-t border-slate-150">
                    <div className="grid grid-cols-2 gap-8 text-xs">
                      <div>
                        <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">PREPARED BY PARTNER OBO ENTRUSTOR AGENCY:</span>
                        <div className="h-12 border-b border-slate-200 flex items-center justify-center relative">
                          {state.sigStyle === 'text' ? (
                            <span className="font-serif italic text-slate-800 text-sm font-bold tracking-wide">{state.agencySignName}</span>
                          ) : (
                            state.agencySigBase64 && <img src={state.agencySigBase64} className="max-h-10 max-w-[160px] object-contain" alt="Signature" />
                          )}
                        </div>
                        <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider text-center mt-1 font-mono">
                          {state.agencySignName || "Authorized Partner Team"}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">CLIENT REPRESENTATIVE ACCEPTANCE HANDSIGN:</span>
                        <div className="h-12 border-b border-slate-200 flex items-center justify-center relative">
                          {state.sigStyle === 'text' ? (
                            <span className="font-serif italic text-slate-800 text-sm font-bold tracking-wide">{state.clientSignName}</span>
                          ) : (
                            state.clientSigBase64 && <img src={state.clientSigBase64} className="max-h-10 max-w-[160px] object-contain" alt="Signature" />
                          )}
                        </div>
                        <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider text-center mt-1 font-mono">
                          {state.clientSignName || "Authorized Corporate Stakeholder"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expiration disclaimer page footer */}
                <div className="text-center pt-2 text-[8px] text-slate-400">
                  Proposal validation timeframe is 15 Days from date specification issue. Thank you.
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* COMPACT HELP BANNER FOOTER */}
      <footer id="print-exclude-header" className="py-3 bg-slate-950 border-t border-slate-900 z-30 text-xs px-6 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
        <p className="text-slate-400 flex items-center gap-1.5 justify-center sm:justify-start">
          <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Need customized formats? Make any adjustments inside sidebar panels and click <strong>"Print / Save PDF"</strong> inside standard browser print settings dialog.</span>
        </p>
        <button 
          onClick={onBackToHome}
          className="text-xs bg-slate-900 border border-slate-800 hover:bg-slate-850 px-4 py-1 rounded font-bold text-slate-300"
        >
          Exit Studio
        </button>
      </footer>
    </div>
  );
}

// Optimized standard stylesheet variables targeting browser-native perfect A4 dimensions
const styleTagForA4Print = (
  <style>{`
    /* Premium style variables */
    .preview-a4 {
      width: 210mm;
      height: 296.2mm; /* Safely within 297mm bounds to avoid creating phantom trailing elements */
      padding: 16mm 14mm;
      margin: 0 auto 24px auto;
      background: #ffffff;
      box-shadow: 0 10px 25px -4px rgba(0, 0, 0, 0.4);
      position: relative;
      box-sizing: border-box;
      color: #1e293b;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .pdf-page-break {
      page-break-before: always;
      margin-top: 0;
    }

    @media print {
      body {
        background: white !important;
        color: #1e293b !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      #print-exclude-header,
      #editor-sidebar-container,
      .exclude-from-print {
        display: none !important;
      }
      main {
        display: block !important;
        height: auto !important;
        overflow: visible !important;
      }
      .preview-container {
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        overflow: visible !important;
        display: block !important;
      }
      #preview-port {
        padding: 0 !important;
        margin: 0 !important;
        overflow: visible !important;
        max-height: none !important;
        background: transparent !important;
      }
      /* scale reset */
      #preview-port > div {
        transform: none !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
      }
      #proposalPrintableDocument {
        width: 210mm !important;
        margin: 0 auto !important;
        padding: 0 !important;
        display: block !important;
        background: white !important;
        box-shadow: none !important;
      }
      .preview-a4 {
        width: 210mm !important;
        height: 296.5mm !important;
        margin: 0 !important;
        padding: 16mm 14mm !important;
        box-shadow: none !important;
        page-break-after: always !important;
        page-break-inside: avoid !important;
        box-sizing: border-box !important;
        position: relative !important;
        background: white !important;
        overflow: hidden !important;
      }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
  `}</style>
);

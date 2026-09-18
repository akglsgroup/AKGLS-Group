export interface IndustryHeroConfig {
  id: string;
  industry: string;
  badge: string;
  title: string;
  subtitle: string;
  stats: { label: string; value: string; sub: string }[];
  visualHighlights: string[];
  imagePromptFallback: string;
  accentGradient: string;
  accentBorder: string;
  accentBadgeBg: string;
  accentBadgeText: string;
  primaryImage: string;
  secondaryImage?: string;
  altText: string;
}

export const INDUSTRY_HERO_ASSETS: Record<string, IndustryHeroConfig> = {
  dental: {
    id: "dental",
    industry: "Dental Practice & Clinical Care",
    badge: "HEALTHCARE PERFORMANCE AGENCY",
    title: "Dental Clinic Marketing & Patient Acquisition",
    subtitle: "High-yield patient pipelines, 3D surgical scan showcases, and hyper-local Google Maps dominance.",
    stats: [
      { label: "Patient Booking Velocity", value: "+192%", sub: "Monthly appointment requests" },
      { label: "Google Map Pack", value: "#1 Rank", sub: "For local implant & emergency queries" },
      { label: "Average Patient LTV", value: "$4,800", sub: "Cosmetic & aligner retention" }
    ],
    visualHighlights: [
      "Modern Dental Operatory with 3D Tomography Displays",
      "Digital Patient Triage & Real-Time Online Booking Flow",
      "HIPAA-Compliant Review Harvesting Architecture"
    ],
    imagePromptFallback: "A state-of-the-art dental clinical operatory with digital surgical screen, ergonomic dental chair, sterile ambient lighting, and modern minimalist architecture.",
    accentGradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    accentBorder: "border-teal-500/30",
    accentBadgeBg: "bg-teal-500/15",
    accentBadgeText: "text-teal-400",
    primaryImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
    altText: "Modern high-tech dental surgery room with advanced diagnostic display and dental chair"
  },
  healthcare: {
    id: "healthcare",
    industry: "Healthcare & Medical Centers",
    badge: "PATIENT ACQUISITION ACCELERATOR",
    title: "Healthcare Marketing & Physician Visibility",
    subtitle: "Ethical medical lead funnels, hospital department indexing, and verified doctor schema integrations.",
    stats: [
      { label: "Consultation Form Volume", value: "+280%", sub: "Across cardiology & dermatology" },
      { label: "CPA Reduction", value: "-64%", sub: "Surgical Google Search Ads" },
      { label: "Verified E-E-A-T Score", value: "98/100", sub: "Medical schema compliance" }
    ],
    visualHighlights: [
      "Multi-Specialty Hospital Diagnostic Telemetry Hub",
      "Interactive Doctor Schedule & Specialist Locator",
      "Emergency Call-Only Geotargeted Search Funnel"
    ],
    imagePromptFallback: "Modern hospital diagnostic consultation suite with physicians reviewing digital health records on luminous monitors in a high-tech architectural clinic.",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentBorder: "border-emerald-500/30",
    accentBadgeBg: "bg-emerald-500/15",
    accentBadgeText: "text-emerald-400",
    primaryImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
    altText: "Contemporary medical center lobby and clinical diagnostics team with digital tablet reviews"
  },
  legal: {
    id: "legal",
    industry: "Law Firms & Attorneys",
    badge: "COMPLIANT LAWYER GROWTH PROGRAM",
    title: "Law Firm Marketing & High-Value Case Intake",
    subtitle: "Surgical retainer acquisition, Local Service Ads (LSA) setup, and practice area citation authority.",
    stats: [
      { label: "High-Stake Case Inquiries", value: "+215%", sub: "Qualified litigation intake" },
      { label: "Case Retainer Margin", value: "8.4x", sub: "Targeted PPC consult return" },
      { label: "LSA Top Spot Share", value: "94.2%", sub: "Geotargeted practice radius" }
    ],
    visualHighlights: [
      "Executive Legal Conference Boardroom with Skyline View",
      "24/7 Client Intake Qualification Chat Protocol",
      "Bar-Compliant Attorney Bio & Verdicts Portfolio"
    ],
    imagePromptFallback: "Prestigious law firm partner conference boardroom with polished mahogany table, legal brief folios, and panoramic metropolitan skyline view at dusk.",
    accentGradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accentBorder: "border-amber-500/30",
    accentBadgeBg: "bg-amber-500/15",
    accentBadgeText: "text-amber-400",
    primaryImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
    altText: "Prestigious law firm glass skyscraper conference room and legal scales emblem"
  },
  realestate: {
    id: "realestate",
    industry: "Real Estate & Luxury Properties",
    badge: "HIGH-CONVERSION PROPERTY FUNNELS",
    title: "Real Estate Marketing & Property Sales",
    subtitle: "High-intent buyer & seller discovery, virtual walkthrough immersion, and luxury neighborhood indexing.",
    stats: [
      { label: "Verified Buyer Leads", value: "+320%", sub: "High-net-worth property inquiries" },
      { label: "Tour Booking Rate", value: "4.8%", sub: "From targeted Meta & Google Ads" },
      { label: "Average Property Price", value: "$650K+", sub: "Suburban & metropolitan portfolios" }
    ],
    visualHighlights: [
      "Architectural Luxury Residential Villa at Twilight",
      "Interactive 3D Virtual Tour & Floorplan Navigator",
      "Automated WhatsApp & CRM Viewing Scheduler"
    ],
    imagePromptFallback: "Contemporary architectural luxury villa with glass facade, infinity pool, warm ambient twilight lighting, and lush landscaping.",
    accentGradient: "from-teal-500/20 via-indigo-500/10 to-transparent",
    accentBorder: "border-teal-500/30",
    accentBadgeBg: "bg-teal-500/15",
    accentBadgeText: "text-teal-400",
    primaryImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    altText: "Luxury modern residential villa with ambient lighting, swimming pool and glass architectural design"
  },
  education: {
    id: "education",
    industry: "Schools, Colleges & EdTech",
    badge: "ENROLLMENT ACCELERATOR PROGRAM",
    title: "Education Marketing & Student Admissions",
    subtitle: "Multi-channel enrollment funnels, campus open-day scheduling, and verified academic search authority.",
    stats: [
      { label: "Application Inquiries", value: "+240%", sub: "Direct prospective student leads" },
      { label: "Campus Tour Bookings", value: "+175%", sub: "Automated parent onboarding" },
      { label: "Cost Per Prospectus", value: "-45%", sub: "High-intent course search terms" }
    ],
    visualHighlights: [
      "State-of-the-Art University Library & Collaborative Tech Hall",
      "Interactive Degree Navigator & Scholarship Calculator",
      "Alumni Verification Schema & Parent Review Hub"
    ],
    imagePromptFallback: "High-tech university campus research library and collaborative student learning commons with expansive glass windows and digital study stations.",
    accentGradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentBorder: "border-orange-500/30",
    accentBadgeBg: "bg-orange-500/15",
    accentBadgeText: "text-orange-400",
    primaryImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    altText: "Prestigious university campus building with modern architectural lecture facilities"
  },
  finance: {
    id: "finance",
    industry: "FinTech, Wealth & Insurance",
    badge: "COMPLIANT FINANCIAL AUTHORITY",
    title: "Finance Marketing & Capital Lead Generation",
    subtitle: "High-net-worth investor acquisition, financial E-E-A-T schemas, and SEC/FINRA compliant conversion funnels.",
    stats: [
      { label: "Accredited Investor Leads", value: "+185%", sub: "Wealth management pipelines" },
      { label: "App User Onboarding", value: "3.8x", sub: "FinTech account funded rate" },
      { label: "CPA Efficiency Lift", value: "52%", sub: "Targeted LinkedIn B2B Ad spend" }
    ],
    visualHighlights: [
      "Modern Global Financial Analytics Trading Floor",
      "Interactive Wealth Preservation & Retirement Estimator",
      "Enterprise Banking Trust & Security Verification Badges"
    ],
    imagePromptFallback: "A sleek modern financial trading floor and analytics terminal room with luminous market charts, glass partition panels, and high-frequency data displays.",
    accentGradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    accentBorder: "border-emerald-500/30",
    accentBadgeBg: "bg-emerald-500/15",
    accentBadgeText: "text-emerald-400",
    primaryImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
    altText: "Modern financial district trading screen and digital currency analytics dashboard"
  },
  restaurant: {
    id: "restaurant",
    industry: "Restaurants, Cafes & Cloud Kitchens",
    badge: "LOCAL HOSPITALITY SCALE PROGRAM",
    title: "Restaurant Marketing & Online Direct Orders",
    subtitle: "Local Map 3-Pack table reservations, commission-free online ordering, and viral foodie social media hooks.",
    stats: [
      { label: "Table Reservation Surge", value: "+210%", sub: "Weekend bookings packed" },
      { label: "Direct Delivery Orders", value: "+165%", sub: "Bypassing 30% third-party aggregator fees" },
      { label: "Google Map Views", value: "48K/mo", sub: "For 'best dinner near me'" }
    ],
    visualHighlights: [
      "Fine Dining Culinary Kitchen with Chef Plating Gourmet Dish",
      "Instant Direct Online Ordering & Table Booking Widget",
      "5-Star Food Critic & Local Map Pack Showcase"
    ],
    imagePromptFallback: "Vibrant upscale restaurant dining room with warm romantic lighting, artisan cocktails on marble bar, and chef plating culinary delicacies in open kitchen.",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentBorder: "border-amber-500/30",
    accentBadgeBg: "bg-amber-500/15",
    accentBadgeText: "text-amber-400",
    primaryImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
    altText: "Atmospheric contemporary restaurant interior with tables set for evening service"
  },
  manufacturing: {
    id: "manufacturing",
    industry: "Industrial Manufacturing & Supply Chain",
    badge: "HIGH-TICKET B2B RFQ ACQUISITION",
    title: "Industrial & Manufacturing Lead Generation",
    subtitle: "CAD specification indexing, global procurement discovery, and ISO-9001 certified buyer conversion portals.",
    stats: [
      { label: "Qualified RFQs Handled", value: "+182%", sub: "High-value aerospace & parts orders" },
      { label: "CAD Catalog Downloads", value: "42.5%", sub: "Engineer spec sheet conversions" },
      { label: "Contract Sourcing Value", value: "$2.4M+", sub: "Average pipeline closed per quarter" }
    ],
    visualHighlights: [
      "Advanced Robotic CNC Automated Manufacturing Floor",
      "Instant Technical Blueprint & RFQ Sourcing Portal",
      "ISO & Aerospace Quality Compliance Credentials"
    ],
    imagePromptFallback: "High-tech clean industrial automation manufacturing plant with robotic arms, laser fabrication, and engineers inspecting precision mechanical components.",
    accentGradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accentBorder: "border-indigo-500/30",
    accentBadgeBg: "bg-indigo-500/15",
    accentBadgeText: "text-indigo-400",
    primaryImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=600",
    altText: "Precision robotic industrial factory manufacturing floor with automated components"
  },
  iot: {
    id: "iot",
    industry: "IoT Platforms & Embedded Hardware",
    badge: "B2B TECH MARKETING SPECIALISTS",
    title: "IoT Company Marketing & Connected Solutions",
    subtitle: "Enterprise account-based targeting, sensor telemetry showcases, and smart city procurement pipelines.",
    stats: [
      { label: "Enterprise Pilot Inquiries", value: "+195%", sub: "Smart infrastructure decision-makers" },
      { label: "Developer Sandbox Signups", value: "+310%", sub: "SDK & API integration uptake" },
      { label: "Pipeline Deal Size", value: "$450K", sub: "Annual contract value (ACV)" }
    ],
    visualHighlights: [
      "Connected IoT Sensor Telemetry & Cloud Operations Center",
      "Interactive Edge Gateway & Protocol Diagnostics Board",
      "Developer Hub Documentation & Sandbox Quickstart"
    ],
    imagePromptFallback: "Futuristic network operations center with glowing IoT sensor topology maps, edge hardware prototypes, and digital cloud dashboards.",
    accentGradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    accentBorder: "border-cyan-500/30",
    accentBadgeBg: "bg-cyan-500/15",
    accentBadgeText: "text-cyan-400",
    primaryImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600",
    altText: "High-tech circuit board and internet of things connected microcontrollers"
  },
  saas: {
    id: "saas",
    industry: "B2B SaaS & AI Software Platforms",
    badge: "AI-POWERED SAAS GROWTH ENGINE",
    title: "SaaS Marketing & Recurring Revenue Growth",
    subtitle: "Product-led user onboarding, high-intent demo landing pages, and churn reduction retention sequences.",
    stats: [
      { label: "Trial-to-Paid Velocity", value: "+340%", sub: "Interactive onboarding workflow" },
      { label: "MRR Growth Inside 120d", value: "+$45K", sub: "Product-led growth framework" },
      { label: "Blended CAC Reduction", value: "-38%", sub: "Intent-targeted B2B search terms" }
    ],
    visualHighlights: [
      "Next-Gen SaaS Analytics Control Room with MRR Metrics",
      "Interactive Product Demo Walkthrough Simulator",
      "Enterprise SOC-2 Security & Integrations Ecosystem"
    ],
    imagePromptFallback: "Minimalist software engineering team collaborating in sleek modern open-plan tech office with monitors showing real-time SaaS cloud analytics.",
    accentGradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    accentBorder: "border-sky-500/30",
    accentBadgeBg: "bg-sky-500/15",
    accentBadgeText: "text-sky-400",
    primaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    altText: "Digital technology workspace with analytics graph dashboard on laptop screen"
  }
};

import { MegaColumn, CaseStudy, SearchResult } from './types';

export const servicesMenu: MegaColumn[] = [
  {
    title: "SEO Services",
    items: [
      { name: "SEO Services", href: "/seo-services" },
      { name: "Technical SEO", href: "/technical-seo" },
      { name: "On-Page SEO", href: "/on-page-seo" },
      { name: "Off-Page SEO", href: "/off-page-seo-services" },
      { name: "Local SEO", href: "/local-seo-services" },
      { name: "Ecommerce SEO", href: "/ecommerce-seo-services" },
      { name: "Enterprise SEO", href: "/enterprise-seo-services" },
      { name: "International SEO", href: "/international-seo-services" },
      { name: "Mobile SEO", href: "/mobile-seo-services" },
      { name: "Programmatic SEO", href: "/programmatic-seo-services" },
      { name: "Link Building", href: "/link-building-services" },
      { name: "SEO Audit Services", href: "/seo-audit-services" },
      { name: "SEO Consulting", href: "/seo-consulting-services" }
    ],
    featuredCta: {
      text: "Get Free SEO Audit",
      href: "#audit-form",
      badge: "Free Tool"
    }
  },
  {
    title: "AI Optimization Services",
    items: [
      { name: "GEO Services", href: "/geo-services", isTrending: true },
      { name: "AEO Services", href: "/aeo-services", isTrending: true },
      { name: "AI SEO Services", href: "/ai-seo-services" },
      { name: "AI Search Optimization", href: "/ai-search-optimization-services", isTrending: true },
      { name: "ChatGPT Optimization", href: "/chatgpt-optimization-services", isTrending: true },
      { name: "Gemini Optimization", href: "/gemini-optimization-services", isTrending: true },
      { name: "Claude Optimization", href: "/claude-optimization-services", isTrending: true },
      { name: "AI Visibility Optimization", href: "/ai-search-optimization-services" },
      { name: "AI Content Optimization", href: "/ai-search-optimization-services" },
      { name: "Voice Search Optimization", href: "/voice-search-optimization-services", isTrending: true },
      { name: "SGE Optimization", href: "/ai-search-optimization-services" }
    ],
    featuredCta: {
      text: "Rank in AI Search",
      href: "#audit-form",
      badge: "Trending"
    }
  },
  {
    title: "Paid Marketing",
    items: [
      { name: "Google Ads", href: "/google-ads-services" },
      { name: "Meta Ads", href: "/meta-ads-services" },
      { name: "YouTube Ads", href: "/google-ads-services" },
      { name: "LinkedIn Ads", href: "/linkedin-ads-services" },
      { name: "Shopping Ads", href: "/google-ads-services" },
      { name: "Performance Max Campaigns", href: "/google-ads-services" },
      { name: "Retargeting Ads", href: "/google-ads-services" },
      { name: "App Promotion Ads", href: "/google-ads-services" },
      { name: "Lead Generation Campaigns", href: "/google-ads-services" },
      { name: "Conversion Optimization", href: "/google-ads-services" }
    ],
    featuredCta: {
      text: "Get Free Ads Audit",
      href: "/google-ads-services",
      badge: "High ROAS"
    }
  },
  {
    title: "Creative & Development",
    items: [
      { name: "Web Design", href: "#web-design-services" },
      { name: "WordPress Development", href: "#wordpress-development-services" },
      { name: "Shopify Development", href: "/shopify-development-services" },
      { name: "Startup Growth Solutions", href: "/startup-growth-solutions" },
      { name: "Enterprise Marketing Solutions", href: "/enterprise-marketing-solutions" },
      { name: "Landing Page Design", href: "#web-design-services" },
      { name: "UI/UX Design", href: "#web-design-services" },
      { name: "CRO Services", href: "#web-design-services" },
      { name: "Branding Services", href: "#capabilities-explorer" },
      { name: "ORM Services", href: "#capabilities-explorer" },
      { name: "Video Marketing", href: "#capabilities-explorer" },
      { name: "Content Writing", href: "#capabilities-explorer" }
    ]
  }
];

export const solutionsMenu: MegaColumn[] = [
  {
    title: "Business Growth Solutions",
    items: [
      { name: "Startup Growth Solution", href: "/startup-growth-solutions" },
      { name: "Enterprise Marketing Solutions", href: "/enterprise-marketing-solutions" },
      { name: "Local Business Growth Services", href: "/local-business-growth-services" },
      { name: "Ecommerce Growth Solution", href: "/ecommerce-growth-solutions" },
      { name: "B2B Lead Generation Services", href: "/b2b-lead-generation-services" },
      { name: "SaaS Marketing Solutions", href: "/saas-marketing-solutions" },
      { name: "Revenue Growth Strategy", href: "#capabilities-explorer" }
    ]
  },
  {
    title: "Industry Solutions",
    items: [
      { name: "Healthcare Marketing", href: "/healthcare-marketing-services" },
      { name: "Dental Clinic Marketing", href: "/dental-clinic-marketing" },
      { name: "Manufacturing Marketing", href: "/manufacturing-marketing-services" },
      { name: "IoT Company Marketing", href: "/iot-company-marketing-services" },
      { name: "Real Estate Marketing", href: "/real-estate-marketing-services" },
      { name: "Education Marketing", href: "/education-marketing-services" },
      { name: "Law Firm Marketing", href: "/law-firm-marketing-services" },
      { name: "Restaurant Marketing", href: "/restaurant-marketing-services" },
      { name: "Finance Marketing", href: "/finance-marketing-services" }
    ]
  },
  {
    title: "AI Solutions",
    items: [
      { name: "AI Marketing Automation", href: "#ai-deepdive", isTrending: true },
      { name: "AI Lead Generation", href: "#ai-deepdive", isTrending: true },
      { name: "AI Chatbot Integration", href: "#ai-deepdive" },
      { name: "AI SEO Automation", href: "#ai-deepdive" },
      { name: "AI Analytics Dashboard", href: "#ai-deepdive" },
      { name: "AI Content Workflow", href: "#ai-deepdive" },
      { name: "AI Consultation Services", href: "#ai-deepdive" }
    ]
  }
];

export const caseStudiesMenu = {
  leftItems: [
    { name: "SEO Case Studies", href: "/seo-case-studies" },
    { name: "Ecommerce SEO Results", href: "/case-study/ecommerce-seo-results" },
    { name: "Local SEO Results", href: "/case-study/local-seo-results" },
    { name: "Lead Generation Results", href: "/seo-case-studies" },
    { name: "PPC Success Stories", href: "/case-study/ppc-success-stories" },
    { name: "AI Optimization Results", href: "/case-study/ai-optimization-results" }
  ]
};

export const resourcesMenu: MegaColumn[] = [
  {
    title: "Blog Categories",
    items: [
      { name: "SEO Blogs", href: "#capabilities-explorer" },
      { name: "AI SEO Blogs", href: "#ai-deepdive" },
      { name: "GEO Blogs", href: "#ai-deepdive" },
      { name: "AEO Blogs", href: "#ai-deepdive" },
      { name: "Google Updates", href: "#capabilities-explorer" },
      { name: "PPC Blogs", href: "#capabilities-explorer" },
      { name: "Social Media Blogs", href: "#capabilities-explorer" },
      { name: "Ecommerce Blogs", href: "#capabilities-explorer" }
    ]
  },
  {
    title: "Free Tools",
    items: [
      { name: "SEO Audit Tool", href: "#roi-calculator" },
      { name: "AI Content Analyzer", href: "#content-analyzer" },
      { name: "Meta Tag Generator", href: "#capabilities-explorer" },
      { name: "Schema Generator", href: "#capabilities-explorer" },
      { name: "Sitemap Generator", href: "#capabilities-explorer" },
      { name: "Keyword Density Checker", href: "#capabilities-explorer" },
      { name: "SEO ROI Calculator", href: "#roi-calculator" }
    ]
  },
  {
    title: "Learning Hub",
    items: [
      { name: "SEO Course", href: "#capabilities-explorer" },
      { name: "GEO Course", href: "#ai-deepdive" },
      { name: "AEO Course", href: "#ai-deepdive" },
      { name: "AI Marketing Course", href: "#ai-deepdive" },
      { name: "Digital Marketing Tutorials", href: "#capabilities-explorer" },
      { name: "Webinars", href: "#capabilities-explorer" },
      { name: "Templates", href: "#capabilities-explorer" },
      { name: "Checklists", href: "#capabilities-explorer" }
    ]
  },
  {
    title: "Downloads",
    items: [
      { name: "SEO Checklist PDF", href: "#audit-form" },
      { name: "Website Audit Template", href: "#audit-form" },
      { name: "AI SEO Guide", href: "#audit-form" },
      { name: "Keyword Research Template", href: "#audit-form" },
      { name: "Content Calendar Template", href: "#audit-form" }
    ]
  }
];

export const companyMenu = [
  { name: "About Us", href: "#team-leadership" },
  { name: "Meet Our Team", href: "#team-leadership" },
  { name: "Careers", href: "#careers-gateway" },
  { name: "Internship Program", href: "#careers-gateway" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Awards & Recognition", href: "#testimonials" },
  { name: "Media & Press", href: "#testimonials" },
  { name: "Contact Us", href: "#audit-form" }
];

export const hireExpertsMenu = [
  { name: "Hire SEO Expert", href: "#audit-form" },
  { name: "Hire PPC Expert", href: "#audit-form" },
  { name: "Hire AI SEO Expert", href: "#audit-form" },
  { name: "Hire Content Writer", href: "#audit-form" },
  { name: "Hire WordPress Developer", href: "#audit-form" },
  { name: "Hire Link Building Expert", href: "#audit-form" },
  { name: "Hire Marketing Manager", href: "#audit-form" }
];

export const defaultCaseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "310% Keyword Index Increase for B2B Enterprise",
    category: "seo",
    categoryLabel: "Organic SEO",
    metrics: { label: "Organic Traffic Increase", value: "+140,000/mo" },
    beforeAfter: { before: "45,000 users", after: "185,000 users" },
    clientLogo: "Acme Corp",
    description: "We restructured site directories, eliminated non-converting index elements, and generated deep programmatic pillar page sheets targeting high-intent commercial terms.",
    date: "Q1 2026",
    graphData: [
      { name: "Month 1", traffic: 45000 },
      { name: "Month 2", traffic: 60000 },
      { name: "Month 3", traffic: 85000 },
      { name: "Month 4", traffic: 110000 },
      { name: "Month 5", traffic: 150000 },
      { name: "Month 6", traffic: 185000 }
    ]
  },
  {
    id: "case-2",
    title: "55% Cost Per Lead Slash on Google Ads Set",
    category: "ppc",
    categoryLabel: "Paid PPC Ads",
    metrics: { label: "Ad Capital Reclaimed", value: "$22,000/mo" },
    beforeAfter: { before: "$85.00 CPL", after: "$38.25 CPL" },
    clientLogo: "SaaSify Inc",
    description: "By introducing high-intent negative keyword sets, configuring custom ad copies, and split-testing conversion tracking properties, we stabilized campaign lead volumes.",
    date: "Feb 2026",
    graphData: [
      { name: "Month 1", traffic: 85 },
      { name: "Month 2", traffic: 72 },
      { name: "Month 3", traffic: 61 },
      { name: "Month 4", traffic: 54 },
      { name: "Month 5", traffic: 45 },
      { name: "Month 6", traffic: 38 }
    ]
  },
  {
    id: "case-3",
    title: "Shopify Plus Store Optimization for Apex Brands",
    category: "webdev",
    categoryLabel: "Custom WebDev",
    metrics: { label: "Checkout Conversion Lift", value: "+42.5%" },
    beforeAfter: { before: "1.8% Conversion", after: "2.56% Conversion" },
    clientLogo: "Apex Wear",
    description: "We rebuilt product templates to load under 0.8 seconds, streamlined checkout forms, and designed responsive mobile interfaces that keep buyers engaged.",
    date: "Q1 2026",
    graphData: [
      { name: "Month 1", traffic: 180 },
      { name: "Month 2", traffic: 195 },
      { name: "Month 3", traffic: 210 },
      { name: "Month 4", traffic: 232 },
      { name: "Month 5", traffic: 248 },
      { name: "Month 6", traffic: 256 }
    ]
  },
  {
    id: "case-4",
    title: "LLM Citation Score Optimization for Fintech Client",
    category: "aiseo",
    categoryLabel: "AI SEO / GEO",
    metrics: { label: "ChatGPT & Pro Mentions", value: "Rank #1 Option" },
    beforeAfter: { before: "0 Citations", after: "42 Citations" },
    clientLogo: "Apex Pay",
    description: "Implementing semantic metadata graphs, we aligned technical code to help AI systems identify pricing structures, boosting organic citation share query-by-query.",
    date: "Q1 2026",
    graphData: [
      { name: "Month 1", traffic: 0 },
      { name: "Month 2", traffic: 4 },
      { name: "Month 3", traffic: 12 },
      { name: "Month 4", traffic: 22 },
      { name: "Month 5", traffic: 31 },
      { name: "Month 6", traffic: 42 }
    ]
  }
];

export const searchDatabase: SearchResult[] = [
  // Services
  { title: "Technical SEO", category: "Services", href: "#technical-seo-services", description: "Audit crawl depth, sitemaps, indexing structures, and core web vitals." },
  { title: "GEO Services (Generative Engine Optimization)", category: "AI SEO", href: "#geo-services", description: "Optimize for search engines relying on generative LLM synthesis." },
  { title: "AI Search Optimization Services", category: "AI SEO", href: "/ai-search-optimization-services", description: "Optimize digital properties for high footprint discovery on ChatGPT, Claude, Gemini, and Google AI Overviews." },
  { title: "Gemini Optimization Services", category: "AI SEO", href: "/gemini-optimization-services", description: "Increase visibility in Google Gemini conversations and search layouts through specialized schemas." },
  { title: "Claude Optimization Services", category: "AI SEO", href: "/claude-optimization-services", description: "Optimize digital properties for high footprint discovery on Anthropic Claude models and comparative prompts." },
  { title: "Voice Search Optimization Services", category: "AI SEO", href: "/voice-search-optimization-services", description: "Optimize digital properties for high footprint discovery on Siri, Alexa, Google Assistant, and conversational voice queries." },
  { title: "AEO Services (Answer Engine Optimization)", category: "AI SEO", href: "#aeo-services", description: "Rank in response systems answering prompts directly." },
  { title: "AI SEO Services (All-Platforms Optimization)", category: "AI SEO", href: "#ai-seo-services", description: "Format business specs for ChatGPT, Gemini, Perplexity guides." },
  { title: "Google Ads & PPC Campaigns Agency", category: "PPC", href: "/google-ads-services", description: "Expert Google Ads management, Search, Display, Shopping, and Performance Max bidding." },
  { title: "PPC Management Services", category: "PPC", href: "/google-ads-services", description: "Custom PPC management, bid optimization, CRO landing page design, and negative keyword audits." },
  { title: "Shopify Development", category: "Creative & Development", href: "/shopify-development-services", description: "High-speed theme layout development, cart CRO integrations." },
  { title: "Startup Growth Solutions", category: "Creative & Development", href: "/startup-growth-solutions", description: "Scale your startup faster with growth marketing, technical AI SEO, and predictable customer lead acquisitions." },
  { title: "Local Business Growth Services", category: "Services", href: "/local-business-growth-services", description: "Hyperlocal SEO, Google Business Profile maps ranking, regional citation sync, local lead generation, and walk-in sales funnels." },
  { title: "WordPress Development", category: "Creative & Development", href: "#web-design-services", description: "Bespoke corporate setups, gutenvine blocks, enterprise architecture." },
  { title: "Local Maps Optimization & Google Ads", category: "Services", href: "/google-ads-services", description: "Dominate Google Pack geographical listings, local service ads, and regional maps." },
  // Tools
  { title: "SEO ROI Calculator", category: "Free Tools", href: "#roi-calculator", description: "Simulate organic growth conversion value lift instantly." },
  { title: "AI Content Analyzer", category: "Free Tools", href: "#content-analyzer", description: "Predict search rank index weights for semantic text queries." },
  // Info
  { title: "Meet Our Team", category: "Company", href: "#team-leadership", description: "Strategists, engineers, and digital marketing leaders at AKGLS." },
  { title: "Careers Gateway", category: "Company", href: "#careers-gateway", description: "We are expanding! Apply as a remote AI schema architect or strategist." }
];

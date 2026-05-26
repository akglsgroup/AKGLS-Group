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
      { name: "SEO Consulting", href: "/seo-consulting-services" },
      { name: "Hire SEO Expert", href: "/hire-seo-expert" }
    ],
    featuredCta: {
      text: "Get Free SEO Audit",
      href: "/seo-audit-services",
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
  { name: "Hire SEO Expert", href: "/hire-seo-expert" },
  { name: "Hire PPC Expert", href: "/hire-ppc-expert" },
  { name: "Hire AI SEO Expert", href: "/hire-ai-seo-expert" },
  { name: "Hire Content Writer", href: "/hire-content-writer" },
  { name: "Hire WordPress Developer", href: "/hire-wordpress-developer" },
  { name: "Hire Link Building Expert", href: "/hire-link-building-expert" },
  { name: "Hire Marketing Manager", href: "/hire-marketing-manager" }
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
  // Core SEO Services
  { title: "SEO Services", category: "SEO Services", href: "/seo-services", description: "Comprehensive search engine optimization services to scale rankings and premium traffic." },
  { title: "Technical SEO Services", category: "SEO Services", href: "/technical-seo", description: "Deep server logs analysis, XML sitemaps, semantic crawl path audits, and Core Web Vitals lift." },
  { title: "On-Page SEO Services", category: "SEO Services", href: "/on-page-seo", description: "Optimize metadata headers, structural markup tags, content schemas, and click-through rates." },
  { title: "Off-Page SEO Services & Outreach", category: "SEO Services", href: "/off-page-seo-services", description: "Build high domain authority backlink profile footprint through clean digital PR outreach." },
  { title: "Local SEO Services", category: "SEO Services", href: "/local-seo-services", description: "Dominate Google Local Map packs, optimize Google Business Profile, and secure local citation catalogs." },
  { title: "Ecommerce SEO Services", category: "SEO Services", href: "/ecommerce-seo-services", description: "Scale product and category page rankings for Shopify, WooCommerce, or Magento stores." },
  { title: "Enterprise SEO Services", category: "SEO Services", href: "/enterprise-seo-services", description: "Scale search footprints for high-node scale sites with robust corporate architecture." },
  { title: "International SEO Services", category: "SEO Services", href: "/international-seo-services", description: "Deploy hreflang configurations and geo-routing directories for global scaling." },
  { title: "Mobile SEO Services", category: "SEO Services", href: "/mobile-seo-services", description: "Optimize responsivness and speed parameters for mobile rank index priority." },
  { title: "Programmatic SEO Services", category: "SEO Services", href: "/programmatic-seo-services", description: "Mass scale high-traffic keywords with database-driven landing pages templates." },
  { title: "Link Building Outreach", category: "SEO Services", href: "/link-building-services", description: "Secure premium white-hat backlinks and high authority editorial placements." },
  { title: "SEO Audit Services", category: "SEO Services", href: "/seo-audit-services", description: "Get a comprehensive technical and strategic index diagnostic health check." },
  { title: "SEO Consulting & Roadmaps", category: "SEO Services", href: "/seo-consulting-services", description: "Strategic partner blueprints, penalty troubleshooting, and architectural search audits." },

  // AI Optimization (GEO / AEO) Services
  { title: "GEO (Generative Engine Optimization)", category: "AI SEO", href: "/geo-services", description: "Deploy technical markup graphs and index nodes for ChatGPT Search, Gemini, and Claude." },
  { title: "AEO (Answer Engine Optimization)", category: "AI SEO", href: "/aeo-services", description: "Assert brand dominance in modern platforms answering user prompts directly." },
  { title: "AI Search Optimization", category: "AI SEO", href: "/ai-search-optimization-services", description: "Prepare your brand's digital footprints for LLM recommendations and citations." },
  { title: "ChatGPT Optimization", category: "AI SEO", href: "/chatgpt-optimization-services", description: "Structure schemas to expand brand visibility in OpenAI ChatGPT Search queries." },
  { title: "Gemini Optimization", category: "AI SEO", href: "/gemini-optimization-services", description: "Optimize semantic networks for Google Gemini integration and citations." },
  { title: "Claude Optimization", category: "AI SEO", href: "/claude-optimization-services", description: "Structure clean documentation resources easily parsed by Anthropic Claude engines." },
  { title: "Voice Search Optimization", category: "AI SEO", href: "/voice-search-optimization-services", description: "Rank in conversational queries from Google Assistant, Apple Siri, and Amazon Alexa." },
  { title: "AI SEO Services (All-Platforms)", category: "AI SEO", href: "/ai-seo-services", description: "Complete package SEO modernized with direct machine learning indexing structures." },

  // Paid Marketing
  { title: "Google Ads Campaigns (PPC)", category: "Paid Ads", href: "/google-ads-services", description: "Expert campaign management, Search, Display, Shopping, and high-ROI Performance Max sets." },
  { title: "Meta Ads (Facebook & Instagram)", category: "Paid Ads", href: "/meta-ads-services", description: "Generate sales and lead pipelines through precise audience social ads demographics." },
  { title: "LinkedIn Ads (B2B Marketing)", category: "Paid Ads", href: "/linkedin-ads-services", description: "Target key commercial decision makers, corporate niches, and industry segments." },

  // Business Growth Solutions
  { title: "Startup Growth Solutions", category: "Solutions", href: "/startup-growth-solutions", description: "Iterate rapid digital scaling paths with clean growth audits and customer acquisitions." },
  { title: "Enterprise Marketing Solutions", category: "Solutions", href: "/enterprise-marketing-solutions", description: "Full scale operations, omni-channel campaigns integration, and customized data reports." },
  { title: "Local Business Growth Services", category: "Solutions", href: "/local-business-growth-services", description: "Accelerate regional sales, local walk-in footfalls, and phone call queries." },
  { title: "Ecommerce Growth Solutions", category: "Solutions", href: "/ecommerce-growth-solutions", description: "Optimize digital shopping stores for predictable scaling and conversion margin lift." },
  { title: "B2B Lead Generation", category: "Solutions", href: "/b2b-lead-generation-services", description: "Establish scalable lead pipelines, CRM integrations, and predictable sales meetings." },
  { title: "SaaS Marketing Growth", category: "Solutions", href: "/saas-marketing-solutions", description: "Drive CAC optimization, platform trial signups, and predictable ARR expansion." },

  // Industry Verticals
  { title: "Healthcare Digital Marketing", category: "Industries", href: "/healthcare-marketing-services", description: "HIPAA-compliant patient booking pipelines and local medical search trust signals." },
  { title: "Dental Clinic Marketing", category: "Industries", href: "/dental-clinic-marketing", description: "Secure predictable local patient appointments and clinic search maps optimization." },
  { title: "Manufacturing Marketing Solutions", category: "Industries", href: "/manufacturing-marketing-services", description: "B2B industrial marketing, distributor pipelines, and structural trade authority links." },
  { title: "IoT Company Marketing", category: "Industries", href: "/iot-company-marketing-services", description: "Scale technical technology buyers through programmatic content and specialized tech SEO." },
  { title: "Real Estate Digital Marketing", category: "Industries", href: "/real-estate-marketing-services", description: "Optimize broker maps, property listings schemas, and localized ads leads." },
  { title: "Education Marketing Services", category: "Industries", href: "/education-marketing-services", description: "Drive enrollments for schools, colleges, and interactive EdTech web startups." },
  { title: "Law firm Digital Marketing", category: "Industries", href: "/law-firm-marketing-services", description: "Establish high value legal cases and localized attorney ranking presence." },
  { title: "Restaurant Marketing Solutions", category: "Industries", href: "/restaurant-marketing-services", description: "Drive table reservations, group bookings, and regional culinary search dominance." },
  { title: "Finance & Fintech Marketing", category: "Industries", href: "/finance-marketing-services", description: "Secure high net worth investors and compliance-vetted lead pipelines." },

  // Case Studies
  { title: "All SEO Case Studies Portfolio", category: "Case Studies", href: "/seo-case-studies", description: "Real historic client results demonstrating organic search scaling." },
  { title: "Ecommerce SEO Case Study", category: "Case Studies", href: "/case-study/ecommerce-seo-results", description: "How we generated 310% traffic growth for an active Shopify clothing brand." },
  { title: "Local SEO Case Study", category: "Case Studies", href: "/case-study/local-seo-results", description: "Google Map packs optimization yielding 45% lift in phone enquiries." },
  { title: "PPC Success Case Study", category: "Case Studies", href: "/case-study/ppc-success-stories", description: "Cutting spend waste while boosting conversion ROI across Google Search & PMax." },
  { title: "AI SEO Case Study (GEO Results)", category: "Case Studies", href: "/case-study/ai-optimization-results", description: "Expanding brand mentions across ChatGPT search rankings with structured RAG graphs." },

  // Dedicated Experts for Hire
  { title: "Hire SEO Expert", category: "Hire Experts", href: "/hire-seo-expert", description: "Hire highly vetting dedicated organic SEO specialists for your team." },
  { title: "Hire PPC Advertising Expert", category: "Hire Experts", href: "/hire-ppc-expert", description: "Work with certified Google Ads PPC optimization specialists." },
  { title: "Hire AI SEO Specialist (GEO Expert)", category: "Hire Experts", href: "/hire-ai-seo-expert", description: "Partner with an expert focused on generative engine search optimization." },
  { title: "Hire Content Writer", category: "Hire Experts", href: "/hire-content-writer", description: "Secure experienced copywriters and semantic content planners." },
  { title: "Hire Link Building Specialist", category: "Hire Experts", href: "/hire-link-building-expert", description: "Hire outreach managers specialized in high DA link acquisitions." },
  { title: "Hire Growth Marketing Manager", category: "Hire Experts", href: "/hire-marketing-manager", description: "Partner with senior growth consultants to scale omni-channel campaigns." },
  { title: "Hire WordPress Developer", category: "Hire Experts", href: "/hire-wordpress-developer", description: "Hire dedicated specialists for fast theme builds and Core Web Vitals optimization." },

  // Dev & Tools
  { title: "Shopify Store Development", category: "Development", href: "/shopify-development-services", description: "High-spec custom web development for Shopify storefronts." },
  { title: "SEO ROI Calculator Tool", category: "Free Tools", href: "#roi-calculator", description: "Interact with our organic growth multiplier model to simulate dollar values." },
  { title: "AI Content Analyzer System", category: "Free Tools", href: "#content-analyzer", description: "Leverage basic semantic scoring algorithms to evaluate keyword densities." },
  { title: "Meet Our Team & Leadership", category: "Company", href: "#team-leadership", description: "Learn about the technical founders and consultants leading AKGLS Group." },
  { title: "Careers Gateway & Remote Jobs", category: "Company", href: "#careers-gateway", description: "We are expanding! Apply as a remote AI schema engineer or SEO strategist." }
];

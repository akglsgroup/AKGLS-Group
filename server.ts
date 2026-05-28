import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Complete Server-Side Meta Records for crawlers (Google, Bing, Yahoo!, ChatGPT, Perplexity, Claude, etc.)
const PAGE_METADATA: Record<string, { title: string; description: string; canonical: string }> = {
  "/": {
    title: "AKGLS Group | AI SEO, GEO & Performance Marketing Agency",
    description: "Deploy SEO-friendly structure markups with real-time Generative Engine Optimization (GEO) to citation-proof your business across ChatGPT, Perplexity, Gemini, and Google Search.",
    canonical: "https://akglsgroup.com/"
  },
  "/geo-services": {
    title: "GEO (Generative Engine Optimization) Services | AKGLS Group",
    description: "Optimize your brand for Next-Gen LLM retrieval, conversational AI filters, Perplexity Citations, and ChatGPT Search results with our proven expertise.",
    canonical: "https://akglsgroup.com/geo-services/"
  },
  "/seo-services": {
    title: "Organic Search Optimization & SEO Services | AKGLS Group",
    description: "Drive massive organic keyword visibility and high-intent customer traffic with premium full-funnel, semantic content structures and modern search practices.",
    canonical: "https://akglsgroup.com/seo-services/"
  },
  "/technical-seo-services": {
    title: "Technical SEO Optimization, Schema & Infrastructure | AKGLS Group",
    description: "Maximize crawl budget, speed, structural JSON-LD schemas, and indexing hierarchies so both human users and AI web crawlers browse flawlessly.",
    canonical: "https://akglsgroup.com/technical-seo-services/"
  },
  "/on-page-seo-services": {
    title: "On-Page SEO & Content Semantic Optimization | AKGLS Group",
    description: "Align your headings structure, alt entities, and LSI keyword relevancy to make pages immediately understandable to crawl bots and AI search engine agents.",
    canonical: "https://akglsgroup.com/on-page-seo-services/"
  },
  "/off-page-seo-services": {
    title: "Off-Page SEO Services Company | Link Building Agency | AKGLS Group",
    description: "Secure high-authority backlinks, boost domain authority rating indicators, and expand search coverage with safe, white-hat editorial outreach campaigns.",
    canonical: "https://akglsgroup.com/off-page-seo-services/"
  },
  "/local-seo-services": {
    title: "Local SEO Services Company | Google Map pack Optimization | AKGLS Group",
    description: "Dominate neighborhood searches and claim top-of-page ranks inside Google Map packs with optimized GBP profiles and hyper-local citation structures.",
    canonical: "https://akglsgroup.com/local-seo-services/"
  },
  "/ecommerce-seo-services": {
    title: "Ecommerce SEO Services Company | Core Category Authority | AKGLS Group",
    description: "Drive non-branded traffic and direct product checkouts with platform-specific technical blueprints, category optimization schemes, and rich schemas.",
    canonical: "https://akglsgroup.com/ecommerce-seo-services/"
  },
  "/enterprise-seo-services": {
    title: "Enterprise SEO Services Company | Corporate Search scale | AKGLS Group",
    description: "Scale organic revenues securely across millions of pages. We design structural sitemaps, optimize technical crawling, and resolve index blockades.",
    canonical: "https://akglsgroup.com/enterprise-seo-services/"
  },
  "/international-seo-services": {
    title: "International SEO Services Company | Global Hreflang setup | AKGLS Group",
    description: "Expand your organic footprint across multilingual territories. Configure precise Hreflang code rules and regional content structures.",
    canonical: "https://akglsgroup.com/international-seo-services/"
  },
  "/mobile-seo-services": {
    title: "Mobile SEO Services & Core Web Vitals Speed | AKGLS Group",
    description: "Ensure lightning fast loading speeds, optimize responsiveness viewports, and secure smartphone crawlers priority indexing guidelines of Google.",
    canonical: "https://akglsgroup.com/mobile-seo-services/"
  },
  "/programmatic-seo-services": {
    title: "Programmatic SEO Services & Automated Organic Scale | AKGLS Group",
    description: "Build dynamic database-driven templates, program high-volume localized keyword maps, and capture organic markets easily.",
    canonical: "https://akglsgroup.com/programmatic-seo-services/"
  },
  "/link-building-services": {
    title: "Link Building Services Company | White Hat Backlink Agency | AKGLS Group",
    description: "Secure permanent link assets, boost domain authority baseline statistics, audit toxic backlink profiles, and claim top ranking organic results.",
    canonical: "https://akglsgroup.com/link-building-services/"
  },
  "/seo-audit-services": {
    title: "Technical SEO Audit & Sitemap Compliance | AKGLS Group",
    description: "Diagnose crawl budget issues, verify HTTPS certificates configurations, map out content gaps, and prioritize developer execution models.",
    canonical: "https://akglsgroup.com/seo-audit-services/"
  },
  "/seo-consulting-services": {
    title: "SEO Consulting Services & Fractional Search Leadership | AKGLS Group",
    description: "Consult with seasoned search architects. Get custom growth roadmap timelines, build internal SOP manuals, and troubleshoot penalties.",
    canonical: "https://akglsgroup.com/seo-consulting-services/"
  },
  "/aeo-services": {
    title: "AEO (Answer Engine Optimization) & RAG Systems | AKGLS Group",
    description: "Align entity properties and structure conversational answers to trigger direct summary panel responses inside Google's AI Overviews and top retrievers.",
    canonical: "https://akglsgroup.com/aeo-services/"
  },
  "/chatgpt-optimization-services": {
    title: "ChatGPT Optimization Services | ChatGPT SEO Agency | AKGLS Group",
    description: "Increase your brand visibility in ChatGPT and AI-generated answers with advanced ChatGPT Optimization services from AKGLS Group. Future-ready AI search strategies.",
    canonical: "https://akglsgroup.com/chatgpt-optimization-services/"
  },
  "/gemini-optimization-services": {
    title: "Gemini Optimization Services | Google Gemini SEO Agency | AKGLS Group",
    description: "Optimize your business for Google Gemini and AI-powered search experiences with advanced Gemini Optimization services from AKGLS Group.",
    canonical: "https://akglsgroup.com/gemini-optimization-services/"
  },
  "/claude-optimization-services": {
    title: "Claude Optimization Services | Claude AI SEO Agency | AKGLS Group",
    description: "Optimize your business for Claude AI and conversational AI discovery with advanced Claude Optimization services from AKGLS Group. Improve AI visibility and future-ready search presence.",
    canonical: "https://akglsgroup.com/claude-optimization-services/"
  },
  "/voice-search-optimization-services": {
    title: "Voice Search Optimization Services | Voice SEO Agency | AKGLS Group",
    description: "Optimize your business for voice assistants, conversational search, and AI-powered voice queries with advanced Voice Search Optimization services from AKGLS Group.",
    canonical: "https://akglsgroup.com/voice-search-optimization-services/"
  },
  "/ai-search-optimization-services": {
    title: "AI Search Optimization Services | AI SEO Agency | AKGLS Group",
    description: "Optimize your business for ChatGPT, Google AI Overviews, Gemini & AI-powered search engines with advanced AI Search Optimization services from AKGLS Group.",
    canonical: "https://akglsgroup.com/ai-search-optimization-services/"
  },
  "/ai-seo-services": {
    title: "AI-Powered SEO & LLM Context Optimization | AKGLS Group",
    description: "Modernize your visibility pipelines with natural language semantic processing, dynamic entity graphs, and indexing nodes optimized for Claude, Gemini, and GPT-4.",
    canonical: "https://akglsgroup.com/ai-seo-services/"
  },
  "/google-ads-services": {
    title: "Google Ads Services | PPC Management Agency | AKGLS Group",
    description: "Generate high-quality leads and maximize ROI with expert Google Ads services from AKGLS Group. Search Ads, Display Ads, Shopping Ads, YouTube Ads & PPC management solutions.",
    canonical: "https://akglsgroup.com/google-ads-services/"
  },
  "/meta-ads-services": {
    title: "Meta Ads Services | Facebook & Instagram Ads Agency | AKGLS Group",
    description: "Generate high-quality leads, sales, and brand awareness with expert Meta Ads services from AKGLS Group. Facebook Ads, Instagram Ads, remarketing & AI-powered social advertising solutions.",
    canonical: "https://akglsgroup.com/meta-ads-services/"
  },
  "/linkedin-ads-services": {
    title: "LinkedIn Ads Services | B2B LinkedIn Advertising Agency | AKGLS Group",
    description: "Generate high-quality B2B leads with expert LinkedIn Ads services from AKGLS Group. LinkedIn lead generation, sponsored ads, ABM campaigns & AI-powered B2B advertising solutions.",
    canonical: "https://akglsgroup.com/linkedin-ads-services/"
  },
  "/web-design-services": {
    title: "Professional Web Web Design & High-Converting UX/UI | AKGLS Group",
    description: "Build gorgeous, loading-fast custom websites crafted with optimal UX/UI standards. We supply clear structural nodes to search indexers and convert visitors.",
    canonical: "https://akglsgroup.com/web-design-services/"
  },
  "/wordpress-development-services": {
    title: "WordPress Development Services & Custom Engineering | AKGLS Group",
    description: "Maximize WordPress speed, security, and schema scalability. We craft lightweight, database optimized, responsive architectures for modern search optimization.",
    canonical: "https://akglsgroup.com/wordpress-development-services/"
  },
  "/shopify-development-services": {
    title: "Shopify Development Services | Shopify Store Development Company | AKGLS Group",
    description: "Build high-converting Shopify stores with expert Shopify development services from AKGLS Group. Custom Shopify design, theme development, Shopify SEO & ecommerce growth solutions.",
    canonical: "https://akglsgroup.com/shopify-development-services/"
  },
  "/startup-growth-solutions": {
    title: "Startup Growth Solutions | Startup Marketing & Scaling Agency | AKGLS Group",
    description: "Scale your startup faster with startup growth solutions from AKGLS Group. Growth marketing, AI SEO, lead generation, product growth, branding & startup scaling strategies.",
    canonical: "https://akglsgroup.com/startup-growth-solutions/"
  },
  "/enterprise-marketing-solutions": {
    title: "Enterprise Marketing Solutions | Enterprise Digital Marketing Agency | AKGLS Group",
    description: "Scale enterprise growth with AI-powered enterprise marketing solutions from AKGLS Group. Enterprise SEO, PPC, AI marketing, lead generation & digital transformation strategies.",
    canonical: "https://akglsgroup.com/enterprise-marketing-solutions/"
  },
  "/ecommerce-growth-solutions": {
    title: "Ecommerce Growth Solutions | Ecommerce Marketing Agency | AKGLS Group",
    description: "Scale your ecommerce business with AI-powered ecommerce growth solutions from AKGLS Group. Ecommerce SEO, Google Ads, Shopify growth, CRO & performance marketing services.",
    canonical: "https://akglsgroup.com/ecommerce-growth-solutions/"
  },
  "/b2b-lead-generation-services": {
    title: "B2B Lead Generation Services | B2B Lead Generation Agency | AKGLS Group",
    description: "Generate high-quality B2B leads with AI-powered lead generation services from AKGLS Group. LinkedIn outreach, SEO, PPC, ABM & sales funnel optimization solutions.",
    canonical: "https://akglsgroup.com/b2b-lead-generation-services/"
  },
  "/saas-marketing-solutions": {
    title: "SaaS Marketing Solutions | SaaS Growth Marketing Agency | AKGLS Group",
    description: "Scale your SaaS business with AI-powered SaaS marketing solutions from AKGLS Group. SaaS SEO, PPC, product-led growth, lead generation & customer acquisition strategies.",
    canonical: "https://akglsgroup.com/saas-marketing-solutions/"
  },
  "/seo-case-studies": {
    title: "SEO Case Studies | Real traffic and keywords ranking growth metrics | AKGLS Group",
    description: "Verified SEO Case Studies and results achieved by AKGLS Group. Explore compounding traffic growth, enterprise lead generation, SaaS free trial lifts, and map pack takeovers.",
    canonical: "https://akglsgroup.com/seo-case-studies/"
  },
  "/case-study/ecommerce-seo-results": {
    title: "Ecommerce SEO Case Study | 450% Organic Traffic Growth | AKGLS Group",
    description: "Discover how AKGLS Group increased ecommerce organic traffic, keyword rankings, and revenue using technical SEO, AI SEO, CRO, and content optimization strategies.",
    canonical: "https://akglsgroup.com/case-study/ecommerce-seo-results/"
  },
  "/case-study/local-seo-results": {
    title: "Local SEO Case Study | Google Maps Rankings & Lead Growth | AKGLS Group",
    description: "Discover how AKGLS Group increased Google Maps visibility, local business rankings, phone calls, and leads using Local SEO and Google Business Profile optimization strategies.",
    canonical: "https://akglsgroup.com/case-study/local-seo-results/"
  },
  "/case-study/ppc-success-stories": {
    title: "PPC Case Study | Google Ads & Paid Marketing Results | AKGLS Group",
    description: "Explore how AKGLS Group generated high-quality leads, improved ROAS, and scaled revenue using Google Ads, Meta Ads, LinkedIn Ads, AI-powered PPC, and conversion optimization strategies.",
    canonical: "https://akglsgroup.com/case-study/ppc-success-stories/"
  },
  "/case-study/ai-optimization-results": {
    title: "AI Optimization Case Study | AI SEO & GEO Results | AKGLS Group",
    description: "Discover how AKGLS Group improved AI search visibility, ChatGPT mentions, GEO rankings, organic traffic, and lead generation using AI SEO, AEO, and conversational optimization strategies.",
    canonical: "https://akglsgroup.com/case-study/ai-optimization-results/"
  },
  "/dental-clinic-marketing": {
    title: "Dental Clinic Marketing & Local Patient Acquisition Services | AKGLS Group",
    description: "Dominate dental local map packs, generate high-value implants and cosmetic patient appointments, and optimize local directories structures with HIPAA-aligned dental funnels.",
    canonical: "https://akgls.group/dental-clinic-marketing"
  },
  "/manufacturing-marketing-services": {
    title: "Manufacturing Marketing Services | Industrial Digital Marketing Agency | AKGLS Group",
    description: "Grow your manufacturing business with industrial digital marketing services from AKGLS Group. SEO, lead generation, B2B marketing, Google Ads, AI SEO & website solutions for manufacturers.",
    canonical: "https://akglsgroup.com/manufacturing-marketing-services"
  },
  "/iot-company-marketing-services": {
    title: "IoT Company Marketing Services | IoT SEO Agency | AKGLS Group",
    description: "Grow your IoT business with expert IoT marketing services from AKGLS Group. IoT SEO, B2B lead generation, Google Ads, AI SEO & digital marketing solutions for IoT companies.",
    canonical: "https://akglsgroup.com/iot-company-marketing-services/"
  },
  "/real-estate-marketing-services": {
    title: "Real Estate Marketing Services | Real Estate SEO Agency | AKGLS Group",
    description: "Generate property leads and grow your real estate business with expert real estate marketing services from AKGLS Group. SEO, Google Ads, social media & AI-powered property marketing solutions.",
    canonical: "https://akglsgroup.com/real-estate-marketing-services/"
  },
  "/healthcare-marketing-services": {
    title: "Healthcare Marketing Services | Medical SEO Agency | AKGLS Group",
    description: "Grow your healthcare business with expert healthcare marketing services from AKGLS Group. Medical SEO, Google Ads, local SEO, AI SEO & patient lead generation solutions.",
    canonical: "https://akglsgroup.com/healthcare-marketing-services/"
  },
  "/education-marketing-services": {
    title: "Education Marketing Services | School & College Marketing Agency | AKGLS Group",
    description: "Grow admissions and student inquiries with expert education marketing services from AKGLS Group. SEO, Google Ads, social media & AI-powered marketing for schools, colleges & edtech companies.",
    canonical: "https://akglsgroup.com/education-marketing-services/"
  },
  "/law-firm-marketing-services": {
    title: "Law Firm Marketing Services | Lawyer SEO Agency | AKGLS Group",
    description: "Grow your law firm with expert legal marketing services from AKGLS Group. Lawyer SEO, Google Ads, local SEO, AI SEO & lead generation solutions for attorneys and law firms.",
    canonical: "https://akglsgroup.com/law-firm-marketing-services/"
  },
  "/restaurant-marketing-services": {
    title: "Restaurant Marketing Services | Restaurant SEO Agency | AKGLS Group",
    description: "Grow your restaurant with expert restaurant marketing services from AKGLS Group. Restaurant SEO, Google Ads, social media, local SEO & AI-powered food business marketing solutions.",
    canonical: "https://akglsgroup.com/restaurant-marketing-services/"
  },
  "/finance-marketing-services": {
    title: "Finance Marketing Services | Financial SEO Agency | AKGLS Group",
    description: "Grow your financial business with expert finance marketing services from AKGLS Group. SEO, Google Ads, fintech marketing, AI SEO & lead generation solutions for finance companies.",
    canonical: "https://akglsgroup.com/finance-marketing-services/"
  },
  "/hire-marketing-manager": {
    title: "Hire Marketing Manager | Dedicated Digital Marketing Manager | AKGLS Group",
    description: "Hire experienced marketing managers from AKGLS Group for SEO, PPC, social media, AI marketing, lead generation, branding & complete digital growth management services.",
    canonical: "https://akglsgroup.com/hire-marketing-manager/"
  },
  "/hire-wordpress-developer": {
    title: "Hire WordPress Developer | Dedicated WordPress Development Services | AKGLS Group",
    description: "Hire expert WordPress developers from AKGLS Group for custom WordPress development, WooCommerce, Elementor, speed optimization, SEO-friendly websites & AI-ready WordPress solutions.",
    canonical: "https://akglsgroup.com/hire-wordpress-developer/"
  },
  "/hire-seo-expert": {
    title: "Hire SEO Expert | Dedicated Search Engine Optimization Experts | AKGLS Group",
    description: "Hire vetted dedicated SEO experts and search engineers from AKGLS Group. Scale your organic traffic, improve rankings, and drive organic revenue.",
    canonical: "https://akglsgroup.com/hire-seo-expert/"
  },
  "/hire-ppc-expert": {
    title: "Hire PPC Expert | Google Ads Specialist for Hire | AKGLS Group",
    description: "Hire expert PPC specialists and Google Ads consultants from AKGLS Group. Optimize your campaign structures, improve ROAS, and stop ad budget waste.",
    canonical: "https://akglsgroup.com/hire-ppc-expert/"
  },
  "/hire-ai-seo-expert": {
    title: "Hire AI SEO Expert | Generative Engine Optimization Analysts | AKGLS Group",
    description: "Hire dedicated AI SEO and GEO experts from AKGLS Group. Optimize your website structure and schemas to rank in Perplexity, ChatGPT Search, and Gemini.",
    canonical: "https://akglsgroup.com/hire-ai-seo-expert/"
  },
  "/hire-content-writer": {
    title: "Hire SEO Content Copywriter | Dedicated Blog & Copywriting Experts | AKGLS Group",
    description: "Hire experienced copywriters and SEO semantic content planners from AKGLS Group to craft landing pages, detailed blogs, and user guides.",
    canonical: "https://akglsgroup.com/hire-content-writer/"
  },
  "/hire-link-building-expert": {
    title: "Hire Link Building Specialist | Dedicated Outreach Specialists | AKGLS Group",
    description: "Hire expert link builders and outreach strategists from AKGLS Group to secure highly authoritative white-hat backlinks and boost domain ratings.",
    canonical: "https://akglsgroup.com/hire-link-building-expert/"
  },
  "/tools": {
    title: "Free SEO, AI SEO & Digital Marketing Tools for Growth | AKGLS Group",
    description: "Explore 15+ free marketing tools, audit crawlers, and financial simulators. Optimize local metadata tags, schema structures, keyword stuffing risk levels, and calculate growth potentials instantly.",
    canonical: "https://akglsgroup.com/tools/"
  },
  "/tools/seo-audit-tool": {
    title: "Free Technical SEO Audit & Website Crawler Tool | AKGLS Group",
    description: "Deconstruct your website header structures. Check canonical declarations, site-index maps, SSL compliance levels, and generate premium PDF logs.",
    canonical: "https://akglsgroup.com/tools/seo-audit-tool/"
  },
  "/blog": {
    title: "Latest SEO, GEO, AEO & AI Search Engine Trends Blog | AKGLS Group",
    description: "Read advanced SEO blueprints, Generative Engine Optimization guides, Core Web Vitals overhauls, and white-hat outreach strategies from AKGLS Group.",
    canonical: "https://akglsgroup.com/blog/"
  },
  "/learning-hub": {
    title: "Algorithmic Growth Academy & Learning Hub | AKGLS Group",
    description: "Accelerate your systems alignment. Learn SEO, GEO, AEO, and AI marketing courses, access custom blueprints, interactive Excel templates and checklist tools built directly by engineers.",
    canonical: "https://akglsgroup.com/learning-hub/"
  },
  "/internship-program": {
    title: "Internship Program | Digital Marketing, SEO & AI SEO Internship | AKGLS Group",
    description: "Join AKGLS Group Internship Program for hands-on training in SEO, AI SEO, social media marketing, Google Ads, WordPress, content writing & digital marketing with real projects and certification.",
    canonical: "https://akglsgroup.com/internship-program/"
  }
};

// Routing Aliases / Fallbacks to achieve total alignment
const PATH_ALIASES: Record<string, string> = {
  // Alias mapping to normalize inputs
  "/geo-services/": "/geo-services",
  "/seo-services/": "/seo-services",
  "/technical-seo-services/": "/technical-seo-services",
  "/on-page-seo-services/": "/on-page-seo-services",
  "/off-page-seo-services/": "/off-page-seo-services",
  "/local-seo-services/": "/local-seo-services",
  "/ecommerce-seo-services/": "/ecommerce-seo-services",
  "/enterprise-seo-services/": "/enterprise-seo-services",
  "/international-seo-services/": "/international-seo-services",
  "/mobile-seo-services/": "/mobile-seo-services",
  "/programmatic-seo-services/": "/programmatic-seo-services",
  "/link-building-services/": "/link-building-services",
  "/seo-audit-services/": "/seo-audit-services",
  "/seo-consulting-services/": "/seo-consulting-services",
  "/aeo-services/": "/aeo-services",
  "/chatgpt-optimization-services/": "/chatgpt-optimization-services",
  "/gemini-optimization-services/": "/gemini-optimization-services",
  "/claude-optimization-services/": "/claude-optimization-services",
  "/voice-search-optimization-services/": "/voice-search-optimization-services",
  "/ai-search-optimization-services/": "/ai-search-optimization-services",
  "/ai-seo-services/": "/ai-seo-services",
  "/google-ads-services/": "/google-ads-services",
  "/meta-ads-services/": "/meta-ads-services",
  "/linkedin-ads-services/": "/linkedin-ads-services",
  "/web-design-services/": "/web-design-services",
  "/wordpress-development-services/": "/wordpress-development-services",
  "/shopify-development-services/": "/shopify-development-services",
  "/startup-growth-solutions/": "/startup-growth-solutions",
  "/enterprise-marketing-solutions/": "/enterprise-marketing-solutions",
  "/ecommerce-growth-solutions/": "/ecommerce-growth-solutions",
  "/b2b-lead-generation-services/": "/b2b-lead-generation-services",
  "/saas-marketing-solutions/": "/saas-marketing-solutions",
  "/seo-case-studies/": "/seo-case-studies",
  "/case-study/ecommerce-seo-results/": "/case-study/ecommerce-seo-results",
  "/case-study/local-seo-results/": "/case-study/local-seo-results",
  "/case-study/ppc-success-stories/": "/case-study/ppc-success-stories",
  "/case-study/ai-optimization-results/": "/case-study/ai-optimization-results",
  "/dental-clinic-marketing/": "/dental-clinic-marketing",
  "/manufacturing-marketing-services/": "/manufacturing-marketing-services",
  "/iot-company-marketing-services/": "/iot-company-marketing-services",
  "/real-estate-marketing-services/": "/real-estate-marketing-services",
  "/healthcare-marketing-services/": "/healthcare-marketing-services",
  "/education-marketing-services/": "/education-marketing-services",
  "/law-firm-marketing-services/": "/law-firm-marketing-services",
  "/restaurant-marketing-services/": "/restaurant-marketing-services",
  "/finance-marketing-services/": "/finance-marketing-services",
  "/hire-marketing-manager/": "/hire-marketing-manager",
  "/hire-wordpress-developer/": "/hire-wordpress-developer",
  "/hire-seo-expert/": "/hire-seo-expert",
  "/hire-ppc-expert/": "/hire-ppc-expert",
  "/hire-ai-seo-expert/": "/hire-ai-seo-expert",
  "/hire-content-writer/": "/hire-content-writer",
  "/hire-link-building-expert/": "/hire-link-building-expert",
  "/tools/": "/tools",
  "/tools/seo-audit-tool/": "/tools/seo-audit-tool",
  "/blog/": "/blog",
  "/learning-hub/": "/learning-hub",
  "/internship-program/": "/internship-program",
  
  // Custom alias mappings for client flexibility
  "/digital-marketing-internship": "/internship-program",
  "/digital-marketing-internship/": "/internship-program",
  "/seo-internship-program": "/internship-program",
  "/seo-internship-program/": "/internship-program",
  "/career-internship-program": "/internship-program",
  "/career-internship-program/": "/internship-program",
  "/ai-seo-internship": "/internship-program",
  "/ai-seo-internship/": "/internship-program",
};

// Generates dynamic SEO header tag blocks including titles, descriptions, canonicals, og elements, and JSON-LD dynamic schema mappings!
function getInjectedHtml(originalHtml: string, rawPath: string): string {
  let cleanPath = rawPath.trim();
  
  // Strip any query strings or hash elements typical on redirects
  const qIdx = cleanPath.indexOf("?");
  if (qIdx !== -1) cleanPath = cleanPath.substring(0, qIdx);
  const hIdx = cleanPath.indexOf("#");
  if (hIdx !== -1) cleanPath = cleanPath.substring(0, hIdx);

  // Map to core standard normalized key
  const mappedPath = PATH_ALIASES[cleanPath] || cleanPath;
  
  // Strip trailing slashes safely to normalize key lookup
  const searchKey = mappedPath.endsWith("/") && mappedPath.length > 1 ? mappedPath.slice(0, -1) : mappedPath;
  
  const meta = PAGE_METADATA[searchKey] || PAGE_METADATA["/"];

  // Create real-time dynamic breadcrumbs or structured JSON-LD schemas
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AKGLS Group",
    "url": meta.canonical,
    "logo": "https://akglsgroup.com/logo.png",
    "description": meta.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/akgls-group"
    ]
  };

  const seoTags = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <script type="application/ld+json">
      ${JSON.stringify(schemaJson, null, 2)}
    </script>
  `;

  let result = originalHtml;
  
  // Overwrite default title block with comprehensive metadata + structural markup tags
  if (result.includes("<title>")) {
    result = result.replace(/<title>.*?<\/title>/, seoTags);
  } else {
    result = result.replace("</head>", `${seoTags}\n</head>`);
  }
  
  return result;
}

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  // Health check API point
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for local development
  if (process.env.NODE_ENV === "development") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static items normally but bypass serving root index.html natively so we catch it dynamically below
    app.use(express.static(distPath, { index: false }));
    
    // Fallback handler - catches and resolves any routing endpoint dynamically with injected SEO Tags
    app.get("*", (req, res) => {
      // Direct asset requests bypass rendering (safety fallback)
      if (req.path.includes(".") && !req.path.endsWith(".html")) {
        return res.sendFile(path.join(distPath, req.path), (err) => {
          if (err) res.status(404).send("Not Found");
        });
      }

      const htmlPath = path.join(distPath, "index.html");
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, "utf-8");
        const injectedHtml = getInjectedHtml(html, req.path);
        res.setHeader("Content-Type", "text/html");
        res.send(injectedHtml);
      } else {
        res.status(404).send("Not Found");
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

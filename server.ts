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

// Beautifully maps each major category to a rich, semantic HTML structure so crawlers can easily parse headings, content, lists, and FAQs without JS.
function getSemanticBody(searchKey: string, meta: { title: string; description: string }): string {
  let bodyContent = `
    <header style="padding: 20px; border-bottom: 1px solid #eaeaea; font-family: sans-serif;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
        <span style="font-size: 24px; font-weight: bold; color: #1e293b;">AKGLS Group</span>
        <nav style="display: flex; gap: 15px; flex-wrap: wrap;">
          <a href="/" style="text-decoration: none; color: #475569; font-weight: 500;">Home</a>
          <a href="/seo-services" style="text-decoration: none; color: #475569; font-weight: 500;">SEO Services</a>
          <a href="/geo-services" style="text-decoration: none; color: #475569; font-weight: 500;">GEO Services</a>
          <a href="/tools" style="text-decoration: none; color: #475569; font-weight: 500;">Free Tools</a>
          <a href="/blog" style="text-decoration: none; color: #475569; font-weight: 500;">Blog</a>
          <a href="/learning-hub" style="text-decoration: none; color: #475569; font-weight: 500;">Learning Hub</a>
          <a href="/internship-program" style="text-decoration: none; color: #475569; font-weight: 500;">Internship</a>
        </nav>
      </div>
    </header>
    <main style="max-width: 800px; margin: 40px auto; padding: 0 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #334155;">
      <article>
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 10px; line-height: 1.2;">${meta.title}</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 35px; font-weight: 400;">${meta.description}</p>
  `;

  if (searchKey === "/" || searchKey === "") {
    bodyContent += `
      <h2>Generative Engine Optimization (GEO) & Next-Gen Organic Search Visibility</h2>
      <p>AKGLS Group is a premier, full-suite Search Engine Optimization (SEO) and Generative Engine Optimization (GEO) agency. We specialize in configuring modern corporate and startup digital properties so they rank dominantly on traditional search engines (Google, Microsoft Bing) and AI search engines (ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews).</p>
      
      <h2>Core Specialized Performance Solutions</h2>
      <ul>
        <li><strong>Generative Engine Optimization (GEO & AEO):</strong> Structuring semantic context schemas, alt tags alignments, and entities citation networks to prompt direct attribution inside Perplexity answers and ChatGPT search queries.</li>
        <li><strong>Technical SEO Infrastructure Optimization:</strong> Scaling sitemaps compliance, repairing indexing anomalies, and managing mobile viewport speeds.</li>
        <li><strong>Enterprise Organic Scaling:</strong> Architecting custom programmatic SEO setups to index millions of high-converting transaction target routes safely.</li>
        <li><strong>Paid PPC Execution:</strong> Engineering high-ROI Google Ads, LinkedIn sponsored campaigns, and Facebook/Instagram remarket loops.</li>
      </ul>

      <h2>Conversational AI Search & GEO FAQ</h2>
      <h3>What is Generative Engine Optimization (GEO)?</h3>
      <p>Generative Engine Optimization (GEO) is the technical science of structuring and optimizing website raw content, headings, JSON-LD schemas, and mentions across high-quality networks so AI search assistants (like ChatGPT, Gemini, and Perplexity) can crawl, authorize, extract, and reference your business as the definitive source.</p>
      
      <h3>Why are my pages not indexing on Google?</h3>
      <p>Google indexing failures typically trace back to technical barriers. These include robots.txt blockades, noindex tags in response headers, JavaScript rendering budget depletion (where Googlebot suspends rendering heavy React elements), severe sitemap errors, duplicate canonical declarations, low density thin content, or server response loops (soft 404s/500 errors). Diagnosing these step-by-step with raw HTML fallbacks is critical.</p>

      <h3>How does AKGLS Group citation-proof brands across ChatGPT and Perplexity?</h3>
      <p>We deploy high-density schema structures, clear bullet lists of entity properties, self-referential canonical linkages, and white-hat outreach to authoritative resource centers. This feeds conversational engines the semantic facts they require to compile citation cards.</p>
    `;
  } else if (searchKey.includes("geo") || searchKey.includes("aeo") || searchKey.includes("chatgpt") || searchKey.includes("gemini") || searchKey.includes("claude") || searchKey.includes("ai-search")) {
    bodyContent += `
      <h2>The Shift From Ten Blue Links to AI Search Synthesis</h2>
      <p>Modern consumers no longer only search through links; they request answers directly from conversational LLMs. If your business is not cited in ChatGPT Search, Gemini, Perplexity, and Google's AI Overviews (AIO), you are missing out on next-generation referral pipelines.</p>
      
      <h2>Proven Optimization Methodologies</h2>
      <ul>
        <li><strong>Fact Density Maximization:</strong> Presenting numerical evidence, expert peer citations, and clean factual statements inside readable bullet points.</li>
        <li><strong>JSON-LD Entity Graphs:</strong> Building robust Schema graphs specifying exact organizational parents, service regions, and verified sameAs social channels.</li>
        <li><strong>Conversational Intent Mapping:</strong> Aligning headings of content grids to match conversational triggers used by humans.</li>
        <li><strong>Server-Side Semantic Fallbacks:</strong> Delivering fully rendered static snippets to AI indexing bots to secure high-speed crawl budget inclusions.</li>
      </ul>

      <h2>AI Search SEO (GEO) FAQ</h2>
      <h3>How do Perplexity and ChatGPT index website content?</h3>
      <p>AI search bots like GPTBot and PerplexityBot utilize custom crawlers that scan raw HTML headers and structural elements of public pages. Rather than executing heavy client-side Javascript loops which are highly CPU-restricted, they prefer analyzing pre-rendered semantic blocks, lists, schemas, and headings in milliseconds.</p>
      
      <h3>How can I optimize my website for Google AI Overviews (AIO)?</h3>
      <p>To rank in Google AI Overviews, you must focus on semantic clarity: clear header matching, bullet lists detailing specific steps, schema-supported tables, and high-quality FAQ blocks that answer conversational queries directly and objectively.</p>

      <h3>Does classic SEO play a role in GEO rankings?</h3>
      <p>Yes. LLM search agents crawl websites that already have established digital authority. Clean canonical alignments, mobile lightning speed, security certificates, and external trusted mentions remain critical signals of authority.</p>
    `;
  } else if (searchKey.includes("technical-seo") || searchKey.includes("seo-audit") || searchKey.includes("on-page") || searchKey.includes("off-page") || searchKey.includes("local-seo") || searchKey.includes("link-building") || searchKey === "/seo-services") {
    bodyContent += `
      <h2>Technical Search Engine Optimization & Crawability Infrastructure</h2>
      <p>A website that cannot be crawled will never rank. Technical SEO forms the crawlable blueprint of your digital marketing program. We optimize everything from robots.txt, dynamic XML sitemaps, JSON-LD configurations to Core Web Vitals performance parameters to secure Googlebot's priority indexing.</p>
      
      <h2>Technical Optimization Deliverables</h2>
      <ul>
        <li><strong>Comprehensive Indexing Auditing:</strong> Isolating soft-404 redirects, indexing exclusions, meta noindex flags, and canonical duplication issues.</li>
        <li><strong>Semantic Markup Architectures:</strong> Structuring perfect H1-H6 headers, image nested alt descriptors, and contextual LSI text tags.</li>
        <li><strong>Authority Outreach Campaigns:</strong> Executing high-quality, white-hat editorial link earning loops to elevate your baseline trust scores.</li>
        <li><strong>Core Web Vitals Optimization:</strong> Speeding up interaction timings and eliminating layout shifting behaviors.</li>
      </ul>

      <h2>Technical Optimization and Indexing FAQ</h2>
      <h3>Why are my React client-side pages struggling to rank?</h3>
      <p>Client-side rendered (CSR) React websites deliver almost empty HTML structures (&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;) to crawlers. While Googlebot eventually executes Javascript to read content, it splits this into a double-wave indexing process. This leads to massive crawl budget wastes, delayed indexing by days or weeks, and complete index failures on raw AI bots that don't execute JS.</p>
      
      <h3>How does server-side metadata and HTML caching fix indexation delays?</h3>
      <p>Providing custom headers, dynamic meta tags, sitemap alignment, and semantic HTML body fallbacks guarantees that immediate raw HTTP fetches return complete, readable documents. Crawl bots index these in real-time instantly without passing through JS-rendering queues.</p>

      <h3>How often should sitemaps be optimized?</h3>
      <p>Sitemaps should dynamically compile in real-time. Whenever new service, blog, or program pages are added to your directory, the XML sitemap must reflect them instantly and be submitted to Google Search Console to prompt immediate crawling.</p>
    `;
  } else if (searchKey.includes("internship-program")) {
    bodyContent += `
      <h2>The AKGLS Group Digital Marketing & SEO Remote Internship Program</h2>
      <p>Are you looking to kickstart your professional career? AKGLS Group offers an intensive remote internship program designed to train the next wave of SEO Strategists, AI SEO Engineers, Content Copywriters, and digital marketers with real, hands-on enterprise projects.</p>
      
      <h2>Core Training Streams and Modules</h2>
      <ul>
        <li><strong>AI SEO & Generative Engine Optimization (GEO):</strong> Learn how to structure next-gen schema graphs and write factual entity profiles optimized for ChatGPT, Perplexity, and Claude indexing agents.</li>
        <li><strong>Traditional Technical SEO & Crawling:</strong> Master robots.txt definitions, redirect loops remediation, and sitemap auditing.</li>
        <li><strong>WordPress and Custom Development:</strong> Code lightning-fast responsive themes and optimized sitemaps pipelines.</li>
        <li><strong>High-Performance Paid Ads:</strong> Set up conversions loops and budget allocations across Google Ads and Meta platforms.</li>
      </ul>

      <h2>Internship Program FAQ</h2>
      <h3>Is the AKGLS Group internship remote?</h3>
      <p>Yes. The program is 100% remote. Interns from all regional zones coordinate inside our active remote workspace hubs under direct senior mentoring.</p>
      
      <h3>Will I receive hands-on training on AI SEO and GEO methodologies?</h3>
      <p>Absolutely. You will learn the exact programmatic content strategies, JSON-LD entity structures, and server-side fallback pre-rendering methodologies that power this very applet.</p>

      <h3>Are performance certifications provided?</h3>
      <p>Yes. Upon successful completion of all training projects, you are awarded an official Professional Internship Certification from AKGLS Group detailing your core competencies.</p>
    `;
  } else if (searchKey.includes("learning-hub") || searchKey.includes("tools") || searchKey.includes("blog")) {
    bodyContent += `
      <h2>Free Marketing Tools, Dynamic Calculators & Growth Learning Academy</h2>
      <p>Discover our extensive collection of free technical marketing calculators, local metadata structure checking systems, visual organic sitemap generators, and premium SEO checklists designed directly by our engineering squads.</p>
      
      <h2>Interactive Learning Guides and Downloads Available</h2>
      <ul>
        <li><strong>Google Search Indexation Diagnostic Checklist:</strong> A definitive 25-point developer audit troubleshooting system to debug indexing dropouts and rendering bottlenecks on Googlebot.</li>
        <li><strong>AI SEO & GEO Optimization Handbook:</strong> A deep operational blueprint to claim organic citation badges on LLM search results page engines.</li>
        <li><strong>Interactive ROI Simulators:</strong> Live tools to model expected client earnings, PPC acquisitions costs, and organic compounding indices.</li>
      </ul>

      <h2>Tools and Resources FAQ</h2>
      <h3>How can I use your free SEO Audit Crawler tool?</h3>
      <p>Simply navigate to our /tools/seo-audit-tool page, enter your business homepage URL, and our system will run live audits parsing your structural schema tags, canonical declarations, and SSL certificate compliance scores.</p>
      
      <h3>Where can I download the Google Indexation Troubleshooting Checklist?</h3>
      <p>The checklist is accessible inside our /learning-hub directory as a premium 6-page developer checklist covering robots.txt testers, JavaScript rendering budgets, and trailing slashes consistency logs.</p>
    `;
  } else {
    bodyContent += `
      <h2>Strategic Growth Marketing & Custom Engineering Solutions</h2>
      <p>We combine advanced technical SEO, AI-powered Generative Engine Optimization (GEO), and digital PPC execution strategies. This drives massive customer lead generation and ensures your properties rank seamlessly on Google Search as well as AI retrieval assistants.</p>

      <h2>Key Outcomes of Our Services</h2>
      <ul>
        <li><strong>Proven Conversion Focus:</strong> Every traffic wave we direct is aligned with high-revenue buyer intent paths.</li>
        <li><strong>Modern Schema Layouts:</strong> Comprehensive, error-free JSON-LD mapping that clearly articulates sameAs, parent categories, and target coordinates.</li>
        <li><strong>Compounding Results:</strong> Unlike ads which stop when investment halts, organic alignment compounds month-over-month.</li>
      </ul>

      <h2>Solutions and Marketing Strategy FAQ</h2>
      <h3>How long does it take for new SEO and GEO optimizations to show results?</h3>
      <p>While traditional SEO indexing might take several weeks for classic search engines, our server-side progressive hydration fallbacks feed LLM search bots instantly. Real-time indexations and AI citations can often trigger within 24 to 72 hours.</p>

      <h3>Can AKGLS Group help audit my existing content for AI search compatibility?</h3>
      <p>Absolutely. We run detailed entity extraction audits to find gaps in your headings, and align keywords with standard chat prompts to secure citation visibility.</p>
    `;
  }

  bodyContent += `
      </article>
    </main>
    <footer style="padding: 40px 20px; background-color: #0f172a; color: #94a3b8; text-align: center; font-size: 14px; margin-top: 80px; font-family: sans-serif;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <p>&copy; 2026 AKGLS Group. All rights reserved.</p>
        <p>Premium SEO, GEO & Performance Growth Solutions.</p>
      </div>
    </footer>
  `;

  // Remove duplicate multi-spacing and feed a clean static payload
  return bodyContent.replace(/\s+/g, ' ').trim();
}

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

  // Inject semantic progressive-hydration content inside the root mounting container
  const semanticBody = getSemanticBody(searchKey, meta);
  if (result.includes('<div id="root"></div>')) {
    result = result.replace('<div id="root"></div>', `<div id="root">${semanticBody}</div>`);
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

  // Dynamic robots.txt that directs standard and modern AI scrapers/agents optimized for GEO/AEO/AIO
  app.get("/robots.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    const robotsText = `User-agent: *
Allow: /
Disallow: /api/

# Enable crawling for leading Generative Search Agents and AI Bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Omgili
Allow: /

Sitemap: https://akglsgroup.com/sitemap.xml
`;
    res.send(robotsText);
  });

  // Dynamic XML Sitemap listing all target indexable landing pages
  app.get("/sitemap.xml", (req, res) => {
    res.setHeader("Content-Type", "application/xml");
    
    const urlElements = Object.keys(PAGE_METADATA).map((urlPath) => {
      const pageMeta = PAGE_METADATA[urlPath];
      const priority = urlPath === "/" ? "1.0" : "0.8";
      return `  <url>
    <loc>${pageMeta.canonical}</loc>
    <lastmod>2026-05-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements.join("\n")}
</urlset>`;
    
    res.send(sitemapXml);
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

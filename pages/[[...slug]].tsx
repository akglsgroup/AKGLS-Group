import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import App from "../src/App";
import JsonLd from "../src/components/JsonLd";

interface PageProps {
  initialPage: string;
  initialCategory: string | null;
}

const METADATA_MAP: Record<string, { title: string; description: string; canonical: string }> = {
  home: {
    title: "AKGLS Group | AI Digital Marketing Agency & Tech SEO",
    description: "Partner with AKGLS Group, a leading AI digital marketing agency offering offshore digital marketing and expert SEO services India to scale search revenue.",
    canonical: "https://akglsgroup.com/"
  },
  services: {
    title: "Offshore Digital Marketing & SEO Services India | AKGLS",
    description: "Get high-performance offshore digital marketing and premium SEO services India from AKGLS Group. Scale organic rankings and digital media traffic today.",
    canonical: "https://akglsgroup.com/services/"
  },
  about: {
    title: "About AKGLS Group | Certified AI Digital Marketing Agency",
    description: "Learn how AKGLS Group grew into a trusted AI digital marketing agency. Our global experts supply top-tier offshore digital marketing and web solutions.",
    canonical: "https://akglsgroup.com/about/"
  },
  contact: {
    title: "Contact AKGLS | Top Offshore Digital Marketing Agency",
    description: "Contact AKGLS Group, your ROI-focused AI digital marketing agency. Enquire about our premier offshore digital marketing models and SEO services India.",
    canonical: "https://akglsgroup.com/contact/"
  },
  geo: {
    title: "GEO (Generative Engine Optimization) Services | AKGLS Group",
    description: "Optimize your brand for Next-Gen LLM retrieval, conversational AI filters, Perplexity Citations, and ChatGPT Search results with our proven expertise.",
    canonical: "https://akglsgroup.com/geo-services/"
  },
  seo: {
    title: "SEO Services India | Offshore Digital Marketing Agency",
    description: "AKGLS Group delivers elite SEO services India and offshore digital marketing solutions. Drive targeted organic traffic and increase high-intent leads.",
    canonical: "https://akglsgroup.com/seo-services/"
  },
  'technical-seo': {
    title: "Technical SEO Optimization, Schema & Infrastructure | AKGLS Group",
    description: "Maximize crawl budget, speed, structural JSON-LD schemas, and indexing hierarchies so both human users and AI web crawlers browse flawlessly.",
    canonical: "https://akglsgroup.com/technical-seo-services/"
  },
  'on-page-seo': {
    title: "On-Page SEO & Content Semantic Optimization | AKGLS Group",
    description: "Align your headings structure, alt entities, and LSI keyword relevancy to make pages immediately understandable to crawl bots and AI search engine agents.",
    canonical: "https://akglsgroup.com/on-page-seo-services/"
  },
  'off-page-seo': {
    title: "Off-Page SEO Services Company | Link Building Agency | AKGLS Group",
    description: "Secure high-authority backlinks, boost domain authority rating indicators, and expand search coverage with safe, white-hat editorial outreach campaigns.",
    canonical: "https://akglsgroup.com/off-page-seo-services/"
  },
  'local-seo': {
    title: "Local SEO Services Company | Google Map pack Optimization | AKGLS Group",
    description: "Dominate neighborhood searches and claim top-of-page ranks inside Google Map packs with optimized GBP profiles and hyper-local citation structures.",
    canonical: "https://akglsgroup.com/local-seo-services/"
  },
  'ecommerce-seo': {
    title: "Ecommerce SEO Services Company | Core Category Authority | AKGLS Group",
    description: "Drive non-branded traffic and direct product checkouts with platform-specific technical blueprints, category optimization schemes, and rich schemas.",
    canonical: "https://akglsgroup.com/ecommerce-seo-services/"
  },
  'enterprise-seo': {
    title: "Enterprise SEO Services Company | Corporate Search scale | AKGLS Group",
    description: "Scale organic revenues securely across millions of pages. We design structural sitemaps, optimize technical crawling, and resolve index blockades.",
    canonical: "https://akglsgroup.com/enterprise-seo-services/"
  },
  'international-seo': {
    title: "International SEO Services Company | Global Hreflang setup | AKGLS Group",
    description: "Expand your organic footprint across multilingual territories. Configure precise Hreflang code rules and regional content structures.",
    canonical: "https://akglsgroup.com/international-seo-services/"
  },
  'mobile-seo': {
    title: "Mobile SEO Services & Core Web Vitals Speed | AKGLS Group",
    description: "Ensure lightning fast loading speeds, optimize responsiveness viewports, and secure smartphone crawlers priority indexing guidelines of Google.",
    canonical: "https://akglsgroup.com/mobile-seo-services/"
  },
  'programmatic-seo': {
    title: "Programmatic SEO Services & Automated Organic Scale | AKGLS Group",
    description: "Build dynamic database-driven templates, program high-volume localized keyword maps, and capture organic markets easily.",
    canonical: "https://akglsgroup.com/programmatic-seo-services/"
  },
  'link-building': {
    title: "Link Building Services Company | White Hat Backlink Agency | AKGLS Group",
    description: "Secure permanent link assets, boost domain authority baseline statistics, audit toxic backlink profiles, and claim top ranking organic results.",
    canonical: "https://akglsgroup.com/link-building-services/"
  },
  'seo-audit-services': {
    title: "Technical SEO Audit & Sitemap Compliance | AKGLS Group",
    description: "Diagnose crawl budget issues, verify HTTPS certificates configurations, map out content gaps, and prioritize developer execution models.",
    canonical: "https://akglsgroup.com/seo-audit-services/"
  },
  'seo-consulting-services': {
    title: "SEO Consulting Services & Fractional Search Leadership | AKGLS Group",
    description: "Consult with seasoned search architects. Get custom growth roadmap timelines, build internal SOP manuals, and troubleshoot penalties.",
    canonical: "https://akglsgroup.com/seo-consulting-services/"
  },
  aeo: {
    title: "AEO (Answer Engine Optimization) & RAG Systems | AKGLS Group",
    description: "Align entity properties and structure conversational answers to trigger direct summary panel responses inside Google's AI Overviews and top retrievers.",
    canonical: "https://akglsgroup.com/aeo-services/"
  },
  'chatgpt-optimization': {
    title: "ChatGPT Optimization Services | ChatGPT SEO Agency | AKGLS Group",
    description: "Increase your brand visibility in ChatGPT and AI-generated answers with advanced ChatGPT Optimization services from AKGLS Group. Future-ready AI search strategies.",
    canonical: "https://akglsgroup.com/chatgpt-optimization-services/"
  },
  'gemini-optimization': {
    title: "Gemini Optimization Services | Google Gemini SEO Agency | AKGLS Group",
    description: "Optimize your business for Google Gemini and AI-powered search experiences with advanced Gemini Optimization services from AKGLS Group.",
    canonical: "https://akglsgroup.com/gemini-optimization-services/"
  },
  'claude-optimization': {
    title: "Claude Optimization Services | Claude AI SEO Agency | AKGLS Group",
    description: "Optimize your business for Claude AI and conversational AI discovery with advanced Claude Optimization services from AKGLS Group. Improve AI visibility and future-ready search presence.",
    canonical: "https://akglsgroup.com/claude-optimization-services/"
  },
  'voice-search-optimization': {
    title: "Voice Search Optimization Services | Voice SEO Agency | AKGLS Group",
    description: "Optimize your business for voice assistants, conversational search, and AI-powered voice queries with advanced Voice Search Optimization services from AKGLS Group.",
    canonical: "https://akglsgroup.com/voice-search-optimization-services/"
  },
  'ai-search-optimization': {
    title: "AI Search Optimization Services | AI SEO Agency | AKGLS Group",
    description: "Optimize your business for ChatGPT, Google AI Overviews, Gemini & AI-powered search engines with advanced AI Search Optimization services from AKGLS Group.",
    canonical: "https://akglsgroup.com/ai-search-optimization-services/"
  },
  'ai-seo': {
    title: "AI-Powered SEO & LLM Context Optimization | AKGLS Group",
    description: "Modernize your visibility pipelines with natural language semantic processing, dynamic entity graphs, and indexing nodes optimized for Claude, Gemini, and GPT-4.",
    canonical: "https://akglsgroup.com/ai-seo-services/"
  },
  'google-ads': {
    title: "Google Ads Services | PPC Management Agency | AKGLS Group",
    description: "Generate high-quality leads and maximize ROI with expert Google Ads services from AKGLS Group. Search Ads, Display Ads, Shopping Ads, YouTube Ads & PPC management solutions.",
    canonical: "https://akglsgroup.com/google-ads-services/"
  },
  'meta-ads': {
    title: "Meta Ads Services | Facebook & Instagram Ads Agency | AKGLS Group",
    description: "Generate high-quality leads, sales, and brand awareness with expert Meta Ads services from AKGLS Group. Facebook Ads, Instagram Ads, remarketing & AI-powered social advertising solutions.",
    canonical: "https://akglsgroup.com/meta-ads-services/"
  },
  'linkedin-ads': {
    title: "LinkedIn Ads Services | B2B LinkedIn Advertising Agency | AKGLS Group",
    description: "Generate high-quality B2B leads with expert LinkedIn Ads services from AKGLS Group. LinkedIn lead generation, sponsored ads, ABM campaigns & AI-powered B2B advertising solutions.",
    canonical: "https://akglsgroup.com/linkedin-ads-services/"
  },
  'web-design': {
    title: "Professional Web Web Design & High-Converting UX/UI | AKGLS Group",
    description: "Build gorgeous, loading-fast custom websites crafted with optimal UX/UI standards. We supply clear structural nodes to search indexers and convert visitors.",
    canonical: "https://akglsgroup.com/web-design-services/"
  },
  wordpress: {
    title: "WordPress Development Services & Custom Engineering | AKGLS Group",
    description: "Maximize WordPress speed, security, and schema scalability. We craft lightweight, database optimized, responsive architectures for modern search optimization.",
    canonical: "https://akglsgroup.com/wordpress-development-services/"
  },
  'shopify-development': {
    title: "Shopify Development Services | Shopify Store Development Company | AKGLS Group",
    description: "Build high-converting Shopify stores with expert Shopify development services from AKGLS Group. Custom Shopify design, theme development, Shopify SEO & ecommerce growth solutions.",
    canonical: "https://akglsgroup.com/shopify-development-services/"
  },
  'startup-growth': {
    title: "Startup Growth Solutions | Startup Marketing & Scaling Agency | AKGLS Group",
    description: "Scale your startup faster with startup growth solutions from AKGLS Group. Growth marketing, AI SEO, lead generation, product growth, branding & startup scaling strategies.",
    canonical: "https://akglsgroup.com/startup-growth-solutions/"
  },
  'enterprise-marketing': {
    title: "Enterprise Marketing Solutions | Enterprise Digital Marketing Agency | AKGLS Group",
    description: "Scale enterprise growth with AI-powered enterprise marketing solutions from AKGLS Group. Enterprise SEO, PPC, AI marketing, lead generation & digital transformation strategies.",
    canonical: "https://akglsgroup.com/enterprise-marketing-solutions/"
  },
  'ecommerce-growth': {
    title: "Ecommerce Growth Solutions | Ecommerce Marketing Agency | AKGLS Group",
    description: "Scale your ecommerce business with AI-powered ecommerce growth solutions from AKGLS Group. Ecommerce SEO, Google Ads, Shopify growth, CRO & performance marketing services.",
    canonical: "https://akglsgroup.com/ecommerce-growth-solutions/"
  },
  'b2b-lead-gen': {
    title: "B2B Lead Generation Services | B2B Lead Generation Agency | AKGLS Group",
    description: "Generate high-quality B2B leads with AI-powered lead generation services from AKGLS Group. LinkedIn outreach, SEO, PPC, ABM & sales funnel optimization solutions.",
    canonical: "https://akglsgroup.com/b2b-lead-generation-services/"
  },
  'saas-marketing': {
    title: "SaaS Marketing Solutions | SaaS Growth Marketing Agency | AKGLS Group",
    description: "Scale your SaaS business with AI-powered SaaS marketing solutions from AKGLS Group. SaaS SEO, PPC, product-led growth, lead generation & customer acquisition strategies.",
    canonical: "https://akglsgroup.com/saas-marketing-solutions/"
  },
  'seo-case-studies': {
    title: "SEO Case Studies | Real traffic and keywords ranking growth metrics | AKGLS Group",
    description: "Verified SEO Case Studies and results achieved by AKGLS Group. Explore compounding traffic growth, enterprise lead generation, SaaS free trial lifts, and map pack takeovers.",
    canonical: "https://akglsgroup.com/seo-case-studies/"
  },
  'ecommerce-seo-case-study': {
    title: "Ecommerce SEO Case Study | Shopify & Organic Growth | AKGLS Group",
    description: "See how we scaled an enterprise Shopify store by +240% organic monthly search sessions using semantic category trees and schema structured indexing nodes.",
    canonical: "https://akglsgroup.com/ecommerce-seo-case-study/"
  },
  'ppc-case-study': {
    title: "PPC Success Stories & Paid Ads Case Study | AKGLS Group",
    description: "Discover verified performance metrics, Meta ads scale architectures, and Google Ads PPC audit models yielding 4.2x ROAS increases across tech brands.",
    canonical: "https://akglsgroup.com/ppc-case-studies/"
  },
  'ai-optimization-case-study': {
    title: "Generative Engine Optimization (GEO) Case Study | AKGLS Group",
    description: "Explore empirical proof of +180% visibility improvements inside Perplexity citations, ChatGPT Search references, and Google AI Overviews structures.",
    canonical: "https://akglsgroup.com/ai-seo-case-study/"
  },
  'hire-seo-expert': {
    title: "Hire Dedicated SEO Expert & Consultant | AKGLS Group",
    description: "Hire certified, full-time search optimization professionals to execute on programmatic roadmaps, clean crawler backlogs, and drive compounding metrics.",
    canonical: "https://akglsgroup.com/hire-seo-expert/"
  },
  'hire-ai-seo-expert': {
    title: "Hire Dedicated AI SEO Experts & LLM Specialists | AKGLS Group",
    description: "Acquire specialized engineers fluent in vector RAG integration, semantic indexing buffers, and synthetic search visibility across modern foundational models.",
    canonical: "https://akglsgroup.com/hire-ai-seo-expert/"
  },
  'hire-content-writer': {
    title: "Hire Professional SEO Content Writers & Copywriters | AKGLS Group",
    description: "Onboard native, niche-fluent technical copywriters specializing in E-E-A-T workflows, entity density rules, and highly engaging conversion copies.",
    canonical: "https://akglsgroup.com/hire-content-writer/"
  },
  'hire-ppc-expert': {
    title: "Hire Dedicated PPC Google & Meta Ads Experts | AKGLS Group",
    description: "Onboard certified search ads consultants, custom shopping feed programmers, and performance campaign managers to secure lower cost-per-lead structures.",
    canonical: "https://akglsgroup.com/hire-ppc-expert/"
  },
  'hire-link-building-expert': {
    title: "Hire White-Hat Link Building Specialists | AKGLS Group",
    description: "Engage dedicated out-reach and blogger connection staff focused exclusively on gaining persistent, niche-targeted high authority backlink assets.",
    canonical: "https://akglsgroup.com/hire-link-building-expert/"
  },
  'hire-marketing-manager': {
    title: "Hire Dedicated Digital Marketing Managers | AKGLS Group",
    description: "Deploy highly qualified campaign managers fluent in web development, programmatic SEO, paid social media channels, and analytics reporting suites.",
    canonical: "https://akglsgroup.com/hire-marketing-manager/"
  },
  'hire-wordpress-developer': {
    title: "Hire Dedicated WordPress & WooCommerce Developers | AKGLS Group",
    description: "Onboard senior PHP engineers specialized in headless REST APIs, extreme Speed optimizations, and schema compliance standards inside WordPress.",
    canonical: "https://akglsgroup.com/hire-wordpress-developer/"
  },
  'local-seo-case-study': {
    title: "Local Business Maps SEO Case Study | AKGLS Group",
    description: "See how we achieved a 3x increase in phone calls, driving hyperlocalized regional traffic using Google Business Profile optimizations and map packs campaigns.",
    canonical: "https://akglsgroup.com/local-seo-case-study/"
  },
  'india-pricing': {
    title: "Flexible Digital Marketing Packages & Indian SEO Pricing | AKGLS Group",
    description: "Access structured, fully auditable performance marketing pricing, professional retainer slots, and outcome-tied revenue share models perfectly tailored to your budget.",
    canonical: "https://akglsgroup.com/india-pricing/"
  },
  'proposal-generator': {
    title: "Interactive Client Proposal Builder & Campaign Scope Generator | AKGLS Group",
    description: "Build an immediate, professional digital marketing proposal containing transparent metrics targets, channels budget allocations, and timelines estimations on the fly.",
    canonical: "https://akglsgroup.com/proposal-generator/"
  },
  'local-business-growth': {
    title: "Local Regional Business Growth Marketing Solutions | AKGLS Group",
    description: "Scale local operations using targeted local citations maps optimizations, hyperlocalized schema injection, and custom neighborhood ads campaigns.",
    canonical: "https://akglsgroup.com/local-business-growth-services/"
  },
  'seo-audit-tool': {
    title: "Free Real-time AI SEO Auditor & Website Crawl Scanner | AKGLS Group",
    description: "Inspect on-page schemas, SSL handshakes, and indexing variables immediately. Acquire diagnostic reports containing optimization advices instantly.",
    canonical: "https://akglsgroup.com/tools/seo-audit-tool/"
  },
  tools: {
    title: "Developer Free SEO Marketing Tools Suite | AKGLS Group",
    description: "Explore free diagnostic kits, ROI simulation trackers, word counter systems, and interactive content analysis machines optimized for webmasters.",
    canonical: "https://akglsgroup.com/tools/"
  },
  blog: {
    title: "AI Digital Marketing Blog & SEO Services India | AKGLS",
    description: "Read organic search strategies from our expert AI digital marketing agency. Access premium insights on offshore digital marketing and SEO services India.",
    canonical: "https://akglsgroup.com/blog/"
  },
  'learning-hub': {
    title: "Generative Search & GEO Knowledge Learning Hub | AKGLS Group",
    description: "Access blueprints, video courses on Answer Engine Optimization (AEO), schema patterns, and synthetic citations models designed for marketing executives.",
    canonical: "https://akglsgroup.com/learning-hub/"
  },
  'internship-program': {
    title: "Advanced Career Fast-Track Digital Marketing Internship | AKGLS Group",
    description: "Gain experiential learning working on actual enterprise client SEO, programmatic websites, LLM citations mapping, and paid performance Ads setups.",
    canonical: "https://akglsgroup.com/internship-program/"
  }
};

export default function DynamicallyRoutedPage({ initialPage, initialCategory }: PageProps) {
  const meta = METADATA_MAP[initialPage] || METADATA_MAP.home;

  React.useEffect(() => {
    if (initialPage === 'about') {
      const element = document.querySelector('#team-leadership');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      }
    } else if (initialPage === 'contact') {
      const element = document.querySelector('#audit-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      }
    }
  }, [initialPage]);

  // Map semantic router page states to their corresponding App page handler components
  const appInitialPage = initialPage === 'services' ? 'seo' : initialPage;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="AI digital marketing agency, offshore digital marketing, SEO services India, Generative Engine Optimization, GEO, technical SEO, performance marketing" />
        <link rel="canonical" href={meta.canonical} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:site_name" content="AKGLS Group" />
        <meta property="og:image" content="https://akglsgroup.com/images/og-main.jpg" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:url" content={meta.canonical} />
        <meta name="twitter:image" content="https://akglsgroup.com/images/og-main.jpg" />

        {/* Dynamic Schema.org JSON-LD structured injections */}
        <JsonLd 
          initialPage={initialPage}
          title={meta.title}
          description={meta.description}
          url={meta.canonical}
        />
      </Head>
      <App initialPage={appInitialPage} initialCategory={initialCategory} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const resolvedUrl = context.resolvedUrl || "/";
  
  // Parse path from the resolvedUrl (strip query parameters)
  const pathname = resolvedUrl.split("?")[0];
  
  const query = context.query || {};
  const initialCategory = query.category ? String(query.category) : null;

  let initialPage = "home";

  if (pathname === '/dental-clinic-marketing' || pathname === '/services/dental-clinic-marketing') {
    initialPage = 'dental-clinic-marketing';
  } else if (pathname === '/manufacturing-marketing-services' || pathname === '/industrial-marketing-agency' || pathname === '/b2b-manufacturing-marketing') {
    initialPage = 'manufacturing';
  } else if (pathname === '/iot-company-marketing-services' || pathname === '/iot-company-marketing-services/' || pathname === '/iot-marketing-agency' || pathname === '/iot-digital-marketing-services' || pathname === '/iot-seo-services' || pathname === '/technology-company-marketing') {
    initialPage = 'iot';
  } else if (pathname === '/real-estate-marketing-services' || pathname === '/real-estate-marketing-services/' || pathname === '/real-estate-digital-marketing' || pathname === '/real-estate-digital-marketing/' || pathname === '/real-estate-seo-services' || pathname === '/real-estate-seo-services/' || pathname === '/property-marketing-agency' || pathname === '/property-marketing-agency/') {
    initialPage = 'real-estate';
  } else if (pathname === '/healthcare-marketing-services' || pathname === '/healthcare-marketing-services/' || pathname === '/healthcare-digital-marketing' || pathname === '/healthcare-digital-marketing/' || pathname === '/medical-marketing-agency' || pathname === '/medical-marketing-agency/' || pathname === '/hospital-marketing-services' || pathname === '/hospital-marketing-services/') {
    initialPage = 'healthcare';
  } else if (pathname === '/education-marketing-services' || pathname === '/education-marketing-services/' || pathname === '/education-digital-marketing' || pathname === '/education-digital-marketing/' || pathname === '/school-marketing-agency' || pathname === '/school-marketing-agency/' || pathname === '/college-marketing-services' || pathname === '/college-marketing-services/' || pathname === '/edtech-marketing-agency' || pathname === '/edtech-marketing-agency/') {
    initialPage = 'education';
  } else if (pathname === '/law-firm-marketing-services' || pathname === '/law-firm-marketing-services/' || pathname === '/legal-marketing-agency' || pathname === '/legal-marketing-agency/' || pathname === '/lawyer-digital-marketing' || pathname === '/lawyer-digital-marketing/' || pathname === '/attorney-seo-services' || pathname === '/attorney-seo-services/') {
    initialPage = 'law-firm';
  } else if (pathname === '/restaurant-marketing-services' || pathname === '/restaurant-marketing-services/' || pathname === '/restaurant-digital-marketing' || pathname === '/restaurant-digital-marketing/' || pathname === '/restaurant-seo-services' || pathname === '/restaurant-seo-services/' || pathname === '/food-business-marketing-agency' || pathname === '/food-business-marketing-agency/') {
    initialPage = 'restaurant';
  } else if (pathname === '/finance-marketing-services' || pathname === '/finance-marketing-services/' || pathname === '/financial-services-marketing' || pathname === '/financial-services-marketing/' || pathname === '/finance-digital-marketing' || pathname === '/finance-digital-marketing/' || pathname === '/fintech-marketing-agency' || pathname === '/fintech-marketing-agency/') {
    initialPage = 'finance';
  } else if (pathname === '/geo-services' || pathname === '/geo-services/') {
    initialPage = 'geo';
  } else if (pathname === '/seo-services' || pathname === '/seo-services/') {
    initialPage = 'seo';
  } else if (pathname === '/technical-seo' || pathname === '/technical-seo/' || pathname === '/technical-seo-services' || pathname === '/technical-seo-services/') {
    initialPage = 'technical-seo';
  } else if (pathname === '/on-page-seo' || pathname === '/on-page-seo/' || pathname === '/on-page-seo-services' || pathname === '/on-page-seo-services/') {
    initialPage = 'on-page-seo';
  } else if (pathname === '/off-page-seo-services' || pathname === '/off-page-seo-services/') {
    initialPage = 'off-page-seo';
  } else if (pathname === '/local-seo-services' || pathname === '/local-seo-services/') {
    initialPage = 'local-seo';
  } else if (pathname === '/ecommerce-seo-services' || pathname === '/ecommerce-seo-services/') {
    initialPage = 'ecommerce-seo';
  } else if (pathname === '/enterprise-seo-services' || pathname === '/enterprise-seo-services/') {
    initialPage = 'enterprise-seo';
  } else if (pathname === '/international-seo-services' || pathname === '/international-seo-services/') {
    initialPage = 'international-seo';
  } else if (pathname === '/mobile-seo-services' || pathname === '/mobile-seo-services/') {
    initialPage = 'mobile-seo';
  } else if (pathname === '/programmatic-seo-services' || pathname === '/programmatic-seo-services/') {
    initialPage = 'programmatic-seo';
  } else if (pathname === '/link-building-services' || pathname === '/link-building-services/') {
    initialPage = 'link-building';
  } else if (pathname === '/seo-audit-services' || pathname === '/seo-audit-services/') {
    initialPage = 'seo-audit-services';
  } else if (pathname === '/seo-consulting-services' || pathname === '/seo-consulting-services/') {
    initialPage = 'seo-consulting-services';
  } else if (pathname === '/aeo-services' || pathname === '/aeo-services/') {
    initialPage = 'aeo';
  } else if (pathname === '/chatgpt-optimization-services' || pathname === '/chatgpt-optimization-services/') {
    initialPage = 'chatgpt-optimization';
  } else if (pathname === '/gemini-optimization-services' || pathname === '/gemini-optimization-services/') {
    initialPage = 'gemini-optimization';
  } else if (pathname === '/claude-optimization-services' || pathname === '/claude-optimization-services/') {
    initialPage = 'claude-optimization';
  } else if (pathname === '/voice-search-optimization-services' || pathname === '/voice-search-optimization-services/') {
    initialPage = 'voice-search-optimization';
  } else if (pathname === '/ai-search-optimization-services' || pathname === '/ai-search-optimization-services/') {
    initialPage = 'ai-search-optimization';
  } else if (pathname === '/ai-seo-services' || pathname === '/ai-seo-services/') {
    initialPage = 'ai-seo';
  } else if (pathname === '/google-ads-services' || pathname === '/google-ads-services/' || pathname === '/ppc-services' || pathname === '/ppc-services/' || pathname === '/google-ppc-agency' || pathname === '/google-ppc-agency/' || pathname === '/paid-search-marketing' || pathname === '/paid-search-marketing/') {
    initialPage = 'google-ads';
  } else if (pathname === '/meta-ads-services' || pathname === '/meta-ads-services/' || pathname === '/facebook-instagram-ads-services' || pathname === '/facebook-instagram-ads-services/' || pathname === '/facebook-ads-agency' || pathname === '/facebook-ads-agency/' || pathname === '/instagram-ads-management' || pathname === '/instagram-ads-management/') {
    initialPage = 'meta-ads';
  } else if (pathname === '/linkedin-ads-services' || pathname === '/linkedin-ads-services/' || pathname === '/linkedin-advertising-services' || pathname === '/linkedin-advertising-services/' || pathname === '/b2b-linkedin-marketing' || pathname === '/b2b-linkedin-marketing/' || pathname === '/linkedin-lead-generation-services' || pathname === '/linkedin-lead-generation-services/') {
    initialPage = 'linkedin-ads';
  } else if (pathname === '/shopify-development-services' || pathname === '/shopify-development-services/' || pathname === '/shopify-store-development' || pathname === '/shopify-store-development/' || pathname === '/shopify-web-development' || pathname === '/shopify-web-development/' || pathname === '/shopify-ecommerce-development' || pathname === '/shopify-ecommerce-development/') {
    initialPage = 'shopify-development';
  } else if (pathname === '/startup-growth-solutions' || pathname === '/startup-growth-solutions/' || pathname === '/startup-marketing-services' || pathname === '/startup-marketing-services/' || pathname === '/startup-growth-agency' || pathname === '/startup-growth-agency/' || pathname === '/startup-growth-consulting' || pathname === '/startup-growth-consulting/') {
    initialPage = 'startup-growth';
  } else if (pathname === '/enterprise-marketing-solutions' || pathname === '/enterprise-marketing-solutions/' || pathname === '/enterprise-digital-marketing-services' || pathname === '/enterprise-digital-marketing-services/' || pathname === '/enterprise-growth-marketing' || pathname === '/enterprise-growth-marketing/' || pathname === '/corporate-marketing-solutions' || pathname === '/corporate-marketing-solutions/') {
    initialPage = 'enterprise-marketing';
  } else if (pathname === '/ecommerce-growth-solutions' || pathname === '/ecommerce-growth-solutions/' || pathname === '/ecommerce-marketing-services' || pathname === '/ecommerce-marketing-services/' || pathname === '/ecommerce-growth-agency' || pathname === '/ecommerce-growth-agency/' || pathname === '/ecommerce-scaling-services' || pathname === '/ecommerce-scaling-services/') {
    initialPage = 'ecommerce-growth';
  } else if (pathname === '/b2b-lead-generation-services' || pathname === '/b2b-lead-generation-services/' || pathname === '/b2b-lead-generation-agency' || pathname === '/b2b-lead-generation-agency/' || pathname === '/business-lead-generation-services' || pathname === '/business-lead-generation-services/' || pathname === '/b2b-sales-lead-generation' || pathname === '/b2b-sales-lead-generation/') {
    initialPage = 'b2b-lead-gen';
  } else if (pathname === '/saas-marketing-solutions' || pathname === '/saas-marketing-solutions/' || pathname === '/saas-marketing-agency' || pathname === '/saas-marketing-agency/' || pathname === '/saas-growth-marketing' || pathname === '/saas-growth-marketing/' || pathname === '/software-marketing-services' || pathname === '/software-marketing-services/') {
    initialPage = 'saas-marketing';
  } else if (pathname === '/seo-case-studies' || pathname === '/seo-case-studies/' || pathname === '/results' || pathname === '/results/' || pathname === '/seo-success-stories' || pathname === '/seo-success-stories/' || pathname === '/digital-marketing-case-studies' || pathname === '/digital-marketing-case-studies/') {
    initialPage = 'seo-case-studies';
  } else if (pathname === '/case-study/ecommerce-seo-results' || pathname === '/case-study/ecommerce-seo-results/' || pathname === '/ecommerce-seo-case-study' || pathname === '/ecommerce-seo-case-study/' || pathname === '/seo-success-story-ecommerce' || pathname === '/seo-success-story-ecommerce/' || pathname === '/ecommerce-organic-growth-case-study' || pathname === '/ecommerce-organic-growth-case-study/') {
    initialPage = 'ecommerce-seo-case-study';
  } else if (pathname === '/case-study/ppc-success-stories' || pathname === '/case-study/ppc-success-stories/' || pathname === '/google-ads-case-study' || pathname === '/google-ads-case-study/' || pathname === '/ppc-case-studies' || pathname === '/ppc-case-studies/' || pathname === '/paid-marketing-success-stories' || pathname === '/paid-marketing-success-stories/') {
    initialPage = 'ppc-case-study';
  } else if (pathname === '/case-study/ai-optimization-results' || pathname === '/case-study/ai-optimization-results/' || pathname === '/ai-seo-case-study' || pathname === '/ai-seo-case-study/' || pathname === '/geo-optimization-success-story' || pathname === '/geo-optimization-success-story/' || pathname === '/chatgpt-optimization-results' || pathname === '/chatgpt-optimization-results/') {
    initialPage = 'ai-optimization-case-study';
  } else if (pathname === '/hire-seo-expert' || pathname === '/hire-seo-expert/' || pathname === '/hire-seo-specialist' || pathname === '/hire-seo-specialist/' || pathname === '/dedicated-seo-expert' || pathname === '/dedicated-seo-expert/' || pathname === '/seo-consultant-for-hire' || pathname === '/seo-consultant-for-hire/') {
    initialPage = 'hire-seo-expert';
  } else if (pathname === '/hire-ai-seo-expert' || pathname === '/hire-ai-seo-expert/' || pathname === '/hire-ai-seo-specialist' || pathname === '/hire-ai-seo-specialist/' || pathname === '/dedicated-ai-seo-consultant' || pathname === '/dedicated-ai-seo-consultant/' || pathname === '/ai-seo-expert-for-hire' || pathname === '/ai-seo-expert-for-hire/') {
    initialPage = 'hire-ai-seo-expert';
  } else if (pathname === '/hire-content-writer' || pathname === '/hire-content-writer/' || pathname === '/hire-seo-content-writer' || pathname === '/hire-seo-content-writer/' || pathname === '/dedicated-content-writer' || pathname === '/dedicated-content-writer/' || pathname === '/content-writing-services' || pathname === '/content-writing-services/') {
    initialPage = 'hire-content-writer';
  } else if (pathname === '/hire-ppc-expert' || pathname === '/hire-ppc-expert/' || pathname === '/hire-google-ads-expert' || pathname === '/hire-google-ads-expert/' || pathname === '/dedicated-ppc-specialist' || pathname === '/dedicated-ppc-specialist/' || pathname === '/ppc-consultant-for-hire' || pathname === '/ppc-consultant-for-hire/') {
    initialPage = 'hire-ppc-expert';
  } else if (pathname === '/hire-link-building-expert' || pathname === '/hire-link-building-expert/' || pathname === '/hire-link-building-specialist' || pathname === '/hire-link-building-specialist/' || pathname === '/dedicated-link-building-services' || pathname === '/dedicated-link-building-services/' || pathname === '/seo-link-building-expert' || pathname === '/seo-link-building-expert/') {
    initialPage = 'hire-link-building-expert';
  } else if (pathname === '/hire-marketing-manager' || pathname === '/hire-marketing-manager/' || pathname === '/dedicated-marketing-manager' || pathname === '/dedicated-marketing-manager/' || pathname === '/marketing-manager-for-hire' || pathname === '/marketing-manager-for-hire/' || pathname === '/hire-digital-marketing-manager' || pathname === '/hire-digital-marketing-manager/') {
    initialPage = 'hire-marketing-manager';
  } else if (pathname === '/hire-wordpress-developer' || pathname === '/hire-wordpress-developer/' || pathname === '/wordpress-developer-for-hire' || pathname === '/wordpress-developer-for-hire/' || pathname === '/dedicated-wordpress-developer' || pathname === '/dedicated-wordpress-developer/' || pathname === '/hire-woocommerce-developer' || pathname === '/hire-woocommerce-developer/') {
    initialPage = 'hire-wordpress-developer';
  } else if (pathname === '/case-study/local-seo-results' || pathname === '/case-study/local-seo-results/' || pathname === '/local-seo-case-study' || pathname === '/local-seo-case-study/' || pathname === '/google-maps-seo-success-story' || pathname === '/google-maps-seo-success-story/' || pathname === '/local-business-growth-case-study' || pathname === '/local-business-growth-case-study/') {
    initialPage = 'local-seo-case-study';
  } else if (pathname === '/india-pricing' || pathname === '/india-pricing/') {
    initialPage = 'india-pricing';
  } else if (pathname === '/proposal-generator' || pathname === '/proposal-generator/' || pathname === '/proposal-builder' || pathname === '/proposal-builder/') {
    initialPage = 'proposal-generator';
  } else if (pathname === '/local-business-growth-services' || pathname === '/local-business-growth-services/' || pathname === '/local-business-marketing' || pathname === '/local-business-marketing/' || pathname === '/local-growth-marketing-services' || pathname === '/local-growth-marketing-services/' || pathname === '/small-business-growth-solutions' || pathname === '/small-business-growth-solutions/' || pathname === '/local-business-marketing-services' || pathname === '/local-business-marketing-services/' || pathname === '/small-business-growth-agency' || pathname === '/small-business-growth-agency/' || pathname === '/local-business-digital-marketing' || pathname === '/local-business-digital-marketing/') {
    initialPage = 'local-business-growth';
  } else if (pathname === '/tools/seo-audit-tool' || pathname === '/tools/seo-audit-tool/') {
    initialPage = 'seo-audit-tool';
  } else if (pathname === '/tools' || pathname === '/tools/' || pathname === '/free-tools' || pathname === '/free-tools/' || pathname === '/marketing-tools' || pathname === '/marketing-tools/' || pathname === '/seo-tools' || pathname === '/seo-tools/' || pathname === '/ai-seo-tools' || pathname === '/ai-seo-tools/') {
    initialPage = 'tools';
  } else if (pathname === '/blog' || pathname === '/blog/' || pathname.startsWith('/blog/')) {
    initialPage = 'blog';
  } else if (pathname === '/learning-hub' || pathname === '/learning-hub/' || pathname.startsWith('/learning-hub/')) {
    initialPage = 'learning-hub';
  } else if (pathname === '/internship-program' || pathname === '/internship-program/' || pathname === '/digital-marketing-internship' || pathname === '/digital-marketing-internship/' || pathname === '/seo-internship-program' || pathname === '/seo-internship-program/' || pathname === '/career-internship-program' || pathname === '/career-internship-program/' || pathname === '/ai-seo-internship' || pathname === '/ai-seo-internship/') {
    initialPage = 'internship-program';
  } else if (pathname === '/about' || pathname === '/about/' || pathname === '/about-us' || pathname === '/about-us/') {
    initialPage = 'about';
  } else if (pathname === '/contact' || pathname === '/contact/' || pathname === '/contact-us' || pathname === '/contact-us/') {
    initialPage = 'contact';
  } else if (pathname === '/services' || pathname === '/services/') {
    initialPage = 'services';
  }

  return {
    props: {
      initialPage,
      initialCategory,
    },
  };
};

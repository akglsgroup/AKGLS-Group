/**
 * WhatsApp Integration Utilities for AKGLS Group
 * Provides official phone number configuration, pre-filled messages, and URL generators.
 */

export const WHATSAPP_PHONE = '918318114492';
export const WHATSAPP_DISPLAY_PHONE = '+91 831 811 4492';

export const WHATSAPP_MESSAGES = {
  default: "Hello AKGLS Group, I would like to inquire about your SEO and digital marketing services.",
  home: "Hello AKGLS Group, I'm visiting your website and would like to discuss optimizing our digital marketing and growth channels.",
  seo: "Hello AKGLS Group, I would like to inquire about your Organic SEO services to scale our Google search rankings.",
  technicalSeo: "Hello AKGLS Group, I am interested in a Technical SEO audit to resolve indexing, crawling, and Core Web Vitals bottlenecks on our website.",
  onPageSeo: "Hello AKGLS Group, I want to discuss On-Page SEO optimization, keyword mapping, search intent, and conversion improvements.",
  offPageSeo: "Hello AKGLS Group, I would like to explore your Off-Page Backlink strategy and authoritative digital PR campaigns.",
  localSeo: "Hello AKGLS Group, I need to boost our local Google Maps visibility, organic citations, and neighborhood traffic capture.",
  ecommerceSeo: "Hello AKGLS Group, I need specialized E-Commerce SEO strategies to scale our online store rankings and organic revenue.",
  enterpriseSeo: "Hello AKGLS Group, I'm interested in Enterprise SEO solutions for high-performance scale, first-party data, and index management.",
  internationalSeo: "Hello AKGLS Group, I want to scale our brand internationally with Hreflang and global multi-region search optimization.",
  mobileSeo: "Hello AKGLS Group, I need optimization services to ensure our mobile-first index score and Core Web Vitals are exceptional.",
  programmaticSeo: "Hello AKGLS Group, I'm interested in Programmatic SEO to deploy scalable, high-ranking programmatic landing pages safely.",
  linkBuilding: "Hello AKGLS Group, I would like to discuss high-quality backlink building and earned white-hat digital PR integrations.",
  seoAudit: "Hello AKGLS Group, I would like to book a comprehensive manual and algorithmic SEO audit of our website.",
  seoConsulting: "Hello AKGLS Group, I need an experienced SEO consultant or advisory partner to roadmap our web strategy.",
  geo: "Hello AKGLS Group, I am interested in GEO (Generative Engine Optimization) to optimize our brand for ChatGPT, Gemini, Perplexity, and Claude.",
  aeo: "Hello AKGLS Group, I'm interested in Answer Engine Optimization (AEO) to improve mentions of our products across generative AI tools.",
  aiSeo: "Hello AKGLS Group, I want to explore your AI-Powered SEO services to automate scalable topic creation and organic indexing.",
  chatgptOptimization: "Hello AKGLS Group, I'm looking to optimize our website content so ChatGPT Search and SearchGPT cite our brand as a primary source.",
  geminiOptimization: "Hello AKGLS Group, I'm interested in optimization strategies specifically for Google Gemini AI Overviews and generative answers.",
  claudeOptimization: "Hello AKGLS Group, I want to adapt our search index variables to be highly visible to Claude conversational agents.",
  aiSearch: "Hello AKGLS Group, I would like to optimize our brand for AI search engines like Perplexity, Gemini, and ChatGPT Search.",
  voiceSearch: "Hello AKGLS Group, we need to structure our conversational data schema to dominate voice query responses on Siri, Alexa, and Google Assistant.",
  googleAds: "Hello AKGLS Group, I want to optimize our Google Ads PPC, Performance Max, and Shopping campaigns to increase ROAS and reduce ad waste.",
  metaAds: "Hello AKGLS Group, I want to scale high-converting Facebook and Instagram Reels ad sets with Advantage+ tracking.",
  linkedinAds: "Hello AKGLS Group, I'm looking for specialized B2B LinkedIn Lead Generation and custom Account-Based Marketing campaigns.",
  webDesign: "Hello AKGLS Group, I'm looking for a premium, custom, high-converting corporate website or product landing page design.",
  wordpress: "Hello AKGLS Group, we need specialized WordPress engineering, custom theme development, and speed optimization.",
  shopify: "Hello AKGLS Group, we are seeking Shopify specialists to design, develop, and scale our e-commerce storefront.",
  startup: "Hello AKGLS Group, we are an early-stage startup looking to scale our digital customer acquisition and marketing pipeline.",
  enterpriseMarketing: "Hello AKGLS Group, I'm interested in your Enterprise Marketing engine, custom pipeline automation, and multi-channel strategies.",
  localBusiness: "Hello AKGLS Group, I need to boost local leads and customer pipeline velocity for my local business.",
  ecommerceGrowth: "Hello AKGLS Group, I want to scale our e-commerce DTC brand revenue with integrated SEO, Google Shopping, and Meta Ads.",
  b2bLeadGen: "Hello AKGLS Group, we need high-quality B2B lead generation, target demographic outreach, and sales pipeline development.",
  saasMarketing: "Hello AKGLS Group, I want to increase our SaaS demos, trial signups, and subscription MRR with targeted search and paid media systems.",
  healthcare: "Hello AKGLS Group, I would like to discuss specialized healthcare and medical clinic digital marketing and patient acquisition.",
  dental: "Hello AKGLS Group, I would like to discuss dental clinic marketing, local patient acquisition, and Google Maps ranking.",
  realEstate: "Hello AKGLS Group, I would like to discuss real estate marketing, buyer lead acquisition, and property campaign strategies.",
  lawFirm: "Hello AKGLS Group, I would like to discuss law firm marketing, legal SEO, and client lead generation.",
  manufacturing: "Hello AKGLS Group, I would like to discuss industrial and manufacturing B2B marketing and OEM contract lead generation.",
  iot: "Hello AKGLS Group, I would like to discuss IoT company marketing, hardware/software positioning, and tech buyer acquisition.",
  restaurant: "Hello AKGLS Group, I would like to discuss restaurant marketing, local customer acquisition, and dining foot traffic growth.",
  finance: "Hello AKGLS Group, I would like to discuss fintech and financial services marketing, compliance-ready content, and lead generation.",
  indiaPricing: "Hello AKGLS Group, I am interested in your Indian market digital marketing pricing plans and custom packages.",
  caseStudies: "Hello AKGLS Group, I reviewed your client case studies and would like to discuss achieving similar growth for my business.",
  freeAudit: "Hello AKGLS Group, I would like to request a complimentary SEO audit for my website.",
  hireExpert: (role?: string) => `Hello AKGLS Group, I am interested in hiring a dedicated ${role || 'digital marketing'} expert for our team.`
};

/**
 * Builds a direct WhatsApp chat URL with a URL-encoded pre-filled message.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = (message && message.trim()) ? message.trim() : WHATSAPP_MESSAGES.default;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

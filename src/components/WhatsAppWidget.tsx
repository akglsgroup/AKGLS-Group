import { motion } from 'motion/react';

interface WhatsAppWidgetProps {
  currentPage: string;
}

export function getWhatsAppMessage(currentPage: string): string {
  const base = "Hi AKGLS Group! ";
  switch (currentPage) {
    case 'home':
      return base + "I'm on your homepage and would like to discuss optimizing our digital marketing & inorganic channels.";
    case 'geo':
      return base + "I need assistance optimizing our website content for ChatGPT, Claude, and Gemini Search engines.";
    case 'seo':
      return base + "I'm looking for professional organic SEO services to scale our rankings on Google.";
    case 'technical-seo':
      return base + "I'm interested in a Technical SEO Audit of our website to resolve indexing and crawling bottlenecks.";
    case 'on-page-seo':
      return base + "I want to refine our On-Page SEO, keyword mappings, search intent, and conversion metrics.";
    case 'off-page-seo':
      return base + "I would like to explore your Off-Page Backlink strategy and authoritative digital PR campaigns.";
    case 'local-seo':
      return base + "I need to boost our local Google Maps visibility, organic citations, and neighboring traffic capture.";
    case 'ecommerce-seo':
      return base + "I need specialized SEO strategies to scale our Shopify/e-commerce store rankings and organic revenue.";
    case 'enterprise-seo':
      return base + "I'm interested in Enterprise SEO solutions for high-performance scale, first-party data, and index management.";
    case 'international-seo':
      return base + "I'm looking to scale our brand internationally, implementing Hreflang and global search parameters.";
    case 'mobile-seo':
      return base + "I need optimization services to ensure our mobile-first index score and layout speeds are exceptional.";
    case 'programmatic-seo':
      return base + "I'm intrigued by your Programmatic SEO setup to deploy thousand-page directories safely using data engines.";
    case 'link-building':
      return base + "I would like to discuss high-quality backlink building and earned white-hat digital PR integrations.";
    case 'seo-audit-services':
      return base + "I would like to book a comprehensive manual and algorithmic SEO Audit of my domain assets.";
    case 'seo-consulting-services':
      return base + "I need to hire a high-level SEO consultant or advisory partner to roadmap our web strategy.";
    case 'aeo':
      return base + "I'm interested in Answer Engine Optimization (AEO) to improve mentions of our products across generative tools.";
    case 'ai-seo':
      return base + "I want to explore your AI-Powered SEO Services to automate scalable topic creation and organic indexes.";
    case 'chatgpt-optimization':
      return base + "I'm looking to optimize our website answers so ChatGPT Search picks up our brand as a primary citation.";
    case 'gemini-optimization':
      return base + "I'm interested in optimization strategies specifically for Google's Gemini generative answers.";
    case 'claude-optimization':
      return base + "I want to adapt our search index variables to be highly visible to Claude conversational agents.";
    case 'voice-search-optimization':
      return base + "We need to structure our conversational data schema to dominate voice query responses on Siri/Alexa/Google.";
    case 'ai-search-optimization':
      return base + "I'd like to integrate AI-focused crawl signals to rank in Perplexity, Gemini, and next-gen engines.";
    case 'google-ads':
      return base + "I want to optimize our Google PPC Search, Performance Max, and Shopping ad campaigns to reduce budget waste.";
    case 'meta-ads':
      return base + "I want to scale high-converting Facebook and Instagram Reels ad sets with Advantage+ tracking.";
    case 'linkedin-ads':
      return base + "I'm looking for specialized B2B LinkedIn Lead Generation and custom Account-Based Marketing support.";
    case 'web-design':
      return base + "I'm looking for a premium, hand-crafted, high-converting product landing page or custom corporate website design.";
    case 'wordpress':
      return base + "We need specialized WordPress engineering, custom theme integration, or page speed speedup.";
    case 'shopify-development':
      return base + "We are seeking Shopify storefront specialists to design, code, and optimize our next-gen e-commerce platform.";
    case 'startup-growth':
      return base + "We are an early-stage startup looking to scale our digital customer acquiring channels with growth advisory.";
    case 'enterprise-marketing':
      return base + "I'm interested in your Enterprise Growth engine, custom lead pipeline automation, and multi-channel marketing.";
    case 'local-business-growth':
      return base + "I need to boost local leads and sales pipeline velocity for my localized multi-location brand.";
    case 'ecommerce-growth':
      return base + "I want to scale our e-commerce DTC brand margins under systematic Google Shopping and Meta Ad integrations.";
    case 'b2b-lead-gen':
      return base + "We need high-quality outbound lead gen, target demographic targeting, and pipeline development.";
    case 'saas-marketing':
      return base + "I want to increase our SaaS demos, free trial setups, and subscription MRR volume with search systems.";
    case 'hire-seo-expert':
    case 'hire-ppc-expert':
    case 'hire-ai-seo-expert':
    case 'hire-content-writer':
    case 'hire-link-building-expert':
    case 'hire-marketing-manager':
    case 'hire-wordpress-developer':
      return base + `I'm interested in hiring a dedicated ${currentPage.split('-').slice(1).join(' ')} to join our pipeline team.`;
    default:
      return base + "I've been browsing your capabilities and would like a complimentary digital growth consultation chat.";
  }
}

export default function WhatsAppWidget({ currentPage }: WhatsAppWidgetProps) {
  return null;
}

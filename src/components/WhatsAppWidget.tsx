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
  const message = getWhatsAppMessage(currentPage);
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/918318114492?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-6 z-50 font-sans pointer-events-auto">
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-full md:rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.35)] cursor-pointer border border-[#1ebd53] relative group/wa"
        id="global-whatsapp-float-widget"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute -inset-1 rounded-full md:rounded-2xl border-2 border-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

        {/* Brand green WhatsApp SVG Icon */}
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#12913e]/10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0"
            className="w-7 h-7 text-[#25D366]"
          >
            <path 
              fill="#25D366" 
              d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.764.457 3.49 1.33 5.01L2 22l5.09-1.312a9.927 9.927 0 004.91 1.316c5.524 0 10.004-4.48 10.004-10.004c0-5.524-4.48-10.004-10.004-10.004z"
            />
            <path 
              fill="#FFF" 
              d="M17.16 14.336c-.284-.143-1.684-.83-1.947-.927-.263-.09-.453-.142-.642.143-.19.284-.734.925-.9 1.114-.165.188-.332.213-.616.07a7.785 7.785 0 01-2.285-1.41c-.88-.785-1.474-1.753-1.647-2.037-.17-.284-.018-.437.123-.578.128-.127.284-.332.427-.497.143-.166.19-.284.284-.474.095-.19.047-.355-.024-.497-.07-.142-.642-1.545-.88-2.112-.23-.556-.466-.48-.642-.488h-.548c-.19 0-.497.07-.757.355-.262.284-1 .978-1 2.385s1.023 2.766 1.166 2.956c.143.19 2.015 3.076 4.88 4.316.682.295 1.215.47 1.63.601.685.218 1.309.187 1.803.113.55-.082 1.683-.687 1.92-1.35.237-.662.237-1.23.165-1.35-.07-.12-.26-.19-.544-.332z"
            />
          </svg>
        </div>

        {/* Text and status info - hidden on mobile, beautiful display on desktop */}
        <div className="pr-4 hidden md:block text-left text-white max-w-[170px]">
          <p className="text-[11.5px] font-black leading-tight drop-shadow-sm">Growth Desk Live</p>
          <p className="text-[9.5px] text-emerald-100 font-medium leading-tight mt-0.5 whitespace-nowrap truncate">Get instant tailored strategy</p>
        </div>
      </motion.a>
    </div>
  );
}

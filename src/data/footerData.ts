export interface FooterLink {
  name: string;
  href: string;
  badge?: string;
  isNew?: boolean;
  isHot?: boolean;
}

export interface FooterColumn {
  id: string;
  title: string;
  color: string;
  bulletClass: string;
  links: FooterLink[];
}

export interface TrustBadge {
  title: string;
  desc: string;
}

export interface PartnerCertification {
  label: string;
  value: string;
  badge?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const FOOTER_FLOATING_CTA = {
  badge: "ACQUISITION EXPANSION ACTIVE",
  title: "Ready to Grow Your Business Online?",
  description: "Deploy customized structural optimizations, capture localized map citation networks, and secure recommendations inside generative AI indices. Get started today.",
  primaryButton: {
    text: "Get Free SEO Audit",
    href: "#audit-form"
  },
  secondaryButton: {
    text: "Schedule Consultation",
    href: "tel:+918318114492"
  }
};

export const FOOTER_COMPANY_INFO = {
  name: "AKGLS GROUP",
  tagline: "AI SEO & PERFORMANCE",
  description: "AI-powered digital marketing agency helping businesses grow through SEO, GEO, AEO, AI SEO, Google Ads, Web Design, and lead generation solutions.",
  trustBadges: [
    { title: "10+ Years Experience", desc: "Proven track record" },
    { title: "AI SEO Experts", desc: "First-mover advantage" },
    { title: "100+ Projects", desc: "Delivered with excellence" },
    { title: "ROI-Focused Agency", desc: "Metrics-driven results" }
  ] as TrustBadge[],
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/company/akglsgroup", icon: "Linkedin" },
    { name: "Instagram", url: "https://instagram.com/akglsgroup", icon: "Instagram" },
    { name: "Facebook", url: "https://facebook.com/akglsgroup", icon: "Facebook" },
    { name: "Twitter/X", url: "https://twitter.com/akglsgroup", icon: "Twitter" },
    { name: "YouTube", url: "https://youtube.com/akglsgroup", icon: "Youtube" }
  ] as SocialLink[]
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "seo",
    title: "SEO Services",
    color: "text-brand-teal",
    bulletClass: "bg-brand-teal",
    links: [
      { name: "SEO Services", href: "/seo-services" },
      { name: "Technical SEO", href: "/technical-seo-services" },
      { name: "On-Page SEO", href: "/on-page-seo-services" },
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
    ]
  },
  {
    id: "ai-search",
    title: "AI & Search Intelligence",
    color: "text-cyan-400",
    bulletClass: "bg-cyan-400",
    links: [
      { name: "GEO Services", href: "/geo-services", badge: "NEW", isNew: true },
      { name: "LLM Optimization Services", href: "/llm-optimization-services", badge: "HOT", isHot: true },
      { name: "AI Citation Building", href: "/ai-citation-building-services", isHot: true },
      { name: "AEO Services", href: "/aeo-services" },
      { name: "AI SEO Services", href: "/ai-seo-services" },
      { name: "AI Search Optimization", href: "/ai-search-optimization-services" },
      { name: "ChatGPT Optimization", href: "/chatgpt-optimization-services" },
      { name: "Gemini Optimization", href: "/gemini-optimization-services" },
      { name: "Claude Optimization", href: "/claude-optimization-services" },
      { name: "Voice Search SEO", href: "/voice-search-optimization-services" }
    ]
  },
  {
    id: "marketing",
    title: "Growth & Paid Ads",
    color: "text-brand-orange",
    bulletClass: "bg-brand-orange",
    links: [
      { name: "Google Ads Services", href: "/google-ads-services" },
      { name: "Meta Ads Services", href: "/meta-ads-services" },
      { name: "LinkedIn Ads Services", href: "/linkedin-ads-services" },
      { name: "B2B Lead Generation", href: "/b2b-lead-generation-services" },
      { name: "Enterprise Marketing", href: "/enterprise-marketing-solutions" },
      { name: "Ecommerce Growth", href: "/ecommerce-growth-solutions" },
      { name: "Local Business Growth", href: "/local-business-growth-services" },
      { name: "SaaS Marketing Solutions", href: "/saas-marketing-solutions" },
      { name: "Startup Growth Solutions", href: "/startup-growth-solutions" },
      { name: "Conversion Rate CRO", href: "#audit-form" }
    ]
  },
  {
    id: "dev",
    title: "Web & Development",
    color: "text-brand-purple",
    bulletClass: "bg-brand-purple",
    links: [
      { name: "Web Design Services", href: "#web-design-services" },
      { name: "WordPress Development", href: "#wordpress-development-services" },
      { name: "Shopify Development", href: "/shopify-development-services" },
      { name: "Landing Page Design", href: "#web-design-services" },
      { name: "Website Maintenance", href: "#web-design-services" },
      { name: "UI/UX Design", href: "#web-design-services" },
      { name: "Speed Optimization", href: "/technical-seo-services" },
      { name: "Indian Client Pricing", href: "/india-pricing" },
      { name: "Proposal PDF Builder", href: "/proposal-builder" }
    ]
  },
  {
    id: "industries",
    title: "Industry Verticals",
    color: "text-emerald-400",
    bulletClass: "bg-emerald-400",
    links: [
      { name: "Dental Clinic Marketing", href: "/dental-clinic-marketing" },
      { name: "Healthcare Marketing", href: "/healthcare-marketing-services" },
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
    id: "staffing-resources",
    title: "Staffing & Resources",
    color: "text-rose-400",
    bulletClass: "bg-rose-400",
    links: [
      { name: "Hire AI SEO Expert", href: "/hire-ai-seo-expert" },
      { name: "Hire SEO Expert", href: "/hire-seo-expert" },
      { name: "Hire PPC Expert", href: "/hire-ppc-expert" },
      { name: "Hire Content Writer", href: "/hire-content-writer" },
      { name: "Hire WordPress Developer", href: "/hire-wordpress-developer" },
      { name: "Hire Link Builder", href: "/hire-link-building-expert" },
      { name: "Hire Marketing Manager", href: "/hire-marketing-manager" },
      { name: "Free Marketing Tools", href: "/tools" },
      { name: "AI SEO Checklists", href: "/free-checklists/" },
      { name: "Engineering Blog", href: "/blog" },
      { name: "Learning Hub", href: "/learning-hub" },
      { name: "Internship Program", href: "/internship-program" }
    ]
  }
];

export const FOOTER_CONTACT = {
  email: "info@akglsgroup.com",
  phone: "+91 831 811 4492",
  phoneClean: "+918318114492",
  offices: "San Francisco Office: 201 Mission St • NYC Office: 1540 Broadway • New Delhi: Cyber City",
  workingHours: "Mon - Fri: 9:00 AM - 6:00 PM EST (24/7 Global Client Support)",
  whatsappUrl: "https://wa.me/918318114492?text=Hello%20AKGLS%20Group%2C%20I%20would%20like%20to%20inquire%20about%20your%20SEO%20and%20digital%20marketing%20services.",
  consultationHref: "#audit-form"
};

export const FOOTER_NEWSLETTER = {
  title: "Stay Updated with AI SEO Trends",
  description: "Get the latest SEO, GEO, AI Search & Google indexing update insights. Directly from our technical core laboratory.",
  placeholder: "Enter your business email...",
  buttonText: "Subscribe",
  successMessage: "✓ Signed up safely. Welcome to AKGLS Core newsletter!"
};

export const FOOTER_LOCAL_SEO = [
  { name: "SEO Company in Delhi", href: "/seo-services" },
  { name: "SEO Company in Noida", href: "/seo-services" },
  { name: "SEO Company in Gurgaon", href: "/seo-services" },
  { name: "Digital Marketing Agency India", href: "/seo-services" },
  { name: "SEO Agency New York", href: "/seo-services" },
  { name: "SEO Agency San Francisco", href: "/seo-services" }
];

export const FOOTER_AI_CITATIONS = [
  { name: "AI SEO Services", href: "/ai-seo-services" },
  { name: "GEO Services", href: "/geo-services" },
  { name: "LLM Optimization Services", href: "/llm-optimization-services" },
  { name: "AI Citation Building", href: "/ai-citation-building-services" },
  { name: "AEO Services", href: "/aeo-services" },
  { name: "ChatGPT Optimization", href: "/chatgpt-optimization-services" },
  { name: "Gemini Optimization", href: "/gemini-optimization-services" },
  { name: "Claude Optimization", href: "/claude-optimization-services" },
  { name: "Voice Search SEO", href: "/voice-search-optimization-services" }
];

export const FOOTER_CERTIFICATIONS: PartnerCertification[] = [
  { label: "Google Partner", value: "Verified Premier" },
  { label: "Meta Business", value: "Strategic Agency" },
  { label: "SSL Secured", value: "AES-256 Auth" },
  { label: "HubSpot", value: "Diamond Partner" },
  { label: "TrustScore 4.9", value: "Elite Client Reviews" }
];

export const FOOTER_LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-of-service" },
  { name: "Disclaimer Policy", href: "#disclaimer" },
  { name: "Refund Policy", href: "#refund" },
  { name: "Cookie Directives", href: "#cookies" },
  { name: "GDPR Compliance", href: "#gdpr" },
  { name: "XML Sitemap", href: "/sitemap.xml" }
];

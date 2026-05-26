import { useState, useEffect, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  MapPin, Phone, Mail, Award, CheckCircle, Database, LineChart, 
  ShieldCheck, AlertTriangle, ChevronRight, GraduationCap, 
  FileCheck, Star, Users, Briefcase
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import SmartSearch from './components/SmartSearch';
import ServiceQuiz from './components/ServiceQuiz';
import RoiCalculator from './components/RoiCalculator';
import ContentAnalyzer from './components/ContentAnalyzer';
import Chatbox from './components/Chatbox';
import WhatsAppWidget from './components/WhatsAppWidget';
import GeoServicesPage from './components/GeoServicesPage';
import SeoServicesPage from './components/SeoServicesPage';
import TechnicalSeoPage from './components/TechnicalSeoPage';
import OnPageSeoPage from './components/OnPageSeoPage';
import AeoServicesPage from './components/AeoServicesPage';
import AiSeoServicesPage from './components/AiSeoServicesPage';
import GoogleAdsServicesPage from './components/GoogleAdsServicesPage';
import MetaAdsServicesPage from './components/MetaAdsServicesPage';
import LinkedInAdsServicesPage from './components/LinkedInAdsServicesPage';
import WebDesignServicesPage from './components/WebDesignServicesPage';
import WordPressServicesPage from './components/WordPressServicesPage';
import ShopifyDevelopmentServicesPage from './components/ShopifyDevelopmentServicesPage';
import StartupGrowthSolutionsPage from './components/StartupGrowthSolutionsPage';
import EnterpriseMarketingSolutionsPage from './components/EnterpriseMarketingSolutionsPage';
import LocalBusinessGrowthServicesPage from './components/LocalBusinessGrowthServicesPage';
import EcommerceGrowthSolutionsPage from './components/EcommerceGrowthSolutionsPage';
import B2BLeadGenerationServicesPage from './components/B2BLeadGenerationServicesPage';
import SaaSMarketingSolutionsPage from './components/SaaSMarketingSolutionsPage';
import SeoCaseStudiesPage from './components/SeoCaseStudiesPage';
import EcommerceSeoCaseStudyPage from './components/EcommerceSeoCaseStudyPage';
import LocalSeoCaseStudyPage from './components/LocalSeoCaseStudyPage';
import PpcSuccessStoriesPage from './components/PpcSuccessStoriesPage';
import AiOptimizationCaseStudyPage from './components/AiOptimizationCaseStudyPage';
import HireSeoExpertPage from './components/HireSeoExpertPage';
import HirePpcExpertPage from './components/HirePpcExpertPage';
import HireAiSeoExpertPage from './components/HireAiSeoExpertPage';
import HireContentWriterPage from './components/HireContentWriterPage';
import HireLinkBuildingExpertPage from './components/HireLinkBuildingExpertPage';
import HireMarketingManagerPage from './components/HireMarketingManagerPage';
import HireWordPressDeveloperPage from './components/HireWordPressDeveloperPage';
import DentalClinicMarketingPage from './components/DentalClinicMarketingPage';
import ManufacturingMarketingPage from './components/ManufacturingMarketingPage';
import IotCompanyMarketingPage from './components/IotCompanyMarketingPage';
import RealEstateMarketingPage from './components/RealEstateMarketingPage';
import HealthcareMarketingPage from './components/HealthcareMarketingPage';
import EducationMarketingPage from './components/EducationMarketingPage';
import LawFirmMarketingPage from './components/LawFirmMarketingPage';
import RestaurantMarketingPage from './components/RestaurantMarketingPage';
import FinanceMarketingPage from './components/FinanceMarketingPage';
import OffPageSeoPage from './components/OffPageSeoPage';
import LocalSeoPage from './components/LocalSeoPage';
import EcommerceSeoPage from './components/EcommerceSeoPage';
import EnterpriseSeoPage from './components/EnterpriseSeoPage';
import InternationalSeoPage from './components/InternationalSeoPage';
import MobileSeoPage from './components/MobileSeoPage';
import ProgrammaticSeoPage from './components/ProgrammaticSeoPage';
import LinkBuildingPage from './components/LinkBuildingPage';
import SeoAuditPage from './components/SeoAuditPage';
import SeoConsultingPage from './components/SeoConsultingPage';
import AiSearchOptimizationPage from './components/AiSearchOptimizationPage';
import ChatgptOptimizationPage from './components/ChatgptOptimizationPage';
import GeminiOptimizationPage from './components/GeminiOptimizationPage';
import ClaudeOptimizationPage from './components/ClaudeOptimizationPage';
import VoiceSearchOptimizationPage from './components/VoiceSearchOptimizationPage';
import { defaultCaseStudies } from './data';
import { CaseStudy } from './types';

interface Capability {
  id: string;
  tag: string;
  title: string;
  description: string;
  subservices: string[];
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  borderHoverClass: string;
  badge?: string;
}

const ALL_CAPABILITIES: Capability[] = [
  {
    id: "seo",
    tag: "25 SERVICES",
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website rankings, organic traffic, and online visibility through strategic SEO solutions.",
    subservices: [
      "Technical SEO",
      "On-Page & Off-Page SEO",
      "Local & Maps SEO",
      "Enterprise & Ecommerce SEO",
      "Voice Search & Mobile SEO",
      "International & Programmatic SEO",
      "YouTube, Image & Video SEO",
      "Keywords & Competitor Analytics",
      "Link Building & Core Web Vitals"
    ],
    icon: "Award",
    iconBgClass: "bg-brand-orange/15",
    iconTextClass: "text-brand-orange",
    borderHoverClass: "hover:border-brand-orange/35"
  },
  {
    id: "ai",
    tag: "13 SERVICES",
    title: "AI & Next-Gen Optimization Services",
    description: "Optimize your brand for AI-powered search engines and conversational platforms.",
    subservices: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "AI Search Optimization (ChatGPT, Gemini)",
      "AI Content Strategy & Visibility Audits",
      "AI Citation & Knowledge Base Optimizations",
      "AI Content Automation & Chatbot Dev",
      "AI Lead Gen Systems & Marketing Consulting"
    ],
    icon: "Bot",
    iconBgClass: "bg-brand-purple/15",
    iconTextClass: "text-brand-purple",
    borderHoverClass: "hover:border-brand-purple/35",
    badge: "Trending"
  },
  {
    id: "ppc",
    tag: "16 PLATFORMS & CAMPAIGNS",
    title: "Paid Advertising Services (PPC)",
    description: "Drive instant leads and conversions with highly targeted paid campaigns across premium channels.",
    subservices: [
      "Google & Meta Ads",
      "LinkedIn, YouTube & Instagram Ads",
      "Twitter/X, Pinterest & Amazon Ads",
      "Search, Display & Shopping Ads",
      "Video & App Promotion Ads",
      "Remarketing & Performance Max"
    ],
    icon: "LineChart",
    iconBgClass: "bg-brand-teal/15",
    iconTextClass: "text-brand-teal",
    borderHoverClass: "hover:border-brand-teal/35"
  },
  {
    id: "smm",
    tag: "15 SERVICES",
    title: "Social Media Marketing (SMM)",
    description: "Grow your audience, engagement, and brand authority across social platforms.",
    subservices: [
      "Social Media Strategy & Management",
      "Content Creation (Reels & Shorts)",
      "Influencer Marketing & Community Management",
      "Paid Social Advertising & Social Branding",
      "Viral Campaigns & LinkedIn Personal Branding",
      "Instagram, Facebook, Reddit & Twitter Growth"
    ],
    icon: "Users",
    iconBgClass: "bg-indigo-500/15",
    iconTextClass: "text-indigo-400",
    borderHoverClass: "hover:border-indigo-500/35"
  },
  {
    id: "content",
    tag: "16 CONTENT TYPES",
    title: "Content Marketing Services",
    description: "Create high-quality, engaging, and SEO-optimized content for all platforms.",
    subservices: [
      "Blog Writing & Website Content",
      "SEO Content Writing (AI-Optimized)",
      "Landing Page & Ad Copywriting",
      "PR, Guest Posting & Technical Writing",
      "Whitepapers, eBooks, Newsletters & Case Studies"
    ],
    icon: "FileCheck",
    iconBgClass: "bg-fuchsia-500/15",
    iconTextClass: "text-fuchsia-400",
    borderHoverClass: "hover:border-fuchsia-500/35"
  },
  {
    id: "dev",
    tag: "12 SERVICES",
    title: "Website Design & Development",
    description: "Build fast, responsive, and conversion-focused websites with advanced custom frameworks.",
    subservices: [
      "WordPress, Shopify & WooCommerce Development",
      "Ecommerce & Custom Web Applications",
      "Landing Page Design & UI/UX Design",
      "Speed Optimizations & Responsive Mobile Designs",
      "Website Redesigns, Maintenance & CRO"
    ],
    icon: "Database",
    iconBgClass: "bg-violet-500/15",
    iconTextClass: "text-violet-400",
    borderHoverClass: "hover:border-violet-500/35"
  },
  {
    id: "ecom",
    tag: "11 SERVICES",
    title: "Ecommerce Marketing Services",
    description: "Scale online stores with data-driven ecommerce marketing strategies.",
    subservices: [
      "Ecommerce SEO (Shopify & WooCommerce)",
      "Shopping Ads & Product Feed Optimizations",
      "Amazon & Flipkart Marketplaces SEO",
      "Cart Abandonment & Checkout Funnel CRO",
      "Product Page Conversions & Brand Positioning"
    ],
    icon: "Briefcase",
    iconBgClass: "bg-rose-500/15",
    iconTextClass: "text-rose-400",
    borderHoverClass: "hover:border-rose-500/35"
  },
  {
    id: "brand",
    tag: "9 SERVICES",
    title: "Branding & Creative Services",
    description: "Create a strong and memorable digital brand identity.",
    subservices: [
      "Brand Strategy & logo Design",
      "Graphic Design & Corporate Branding",
      "Packaging, Creative Ads & Motion Graphics",
      "Video Editing & Brand Reputation Management"
    ],
    icon: "Star",
    iconBgClass: "bg-amber-500/15",
    iconTextClass: "text-amber-400",
    borderHoverClass: "hover:border-amber-500/35"
  },
  {
    id: "leadgen",
    tag: "12 SERVICES",
    title: "Lead Generation & Performance Marketing",
    description: "Generate qualified leads and improve conversion rates across B2B & B2C funnels.",
    subservices: [
      "B2B & B2C Lead Generation Campaigns",
      "Sales Funnel & Marketing Automation",
      "CRM Integrations (HubSpot, Salesforce)",
      "WhatsApp, Email & SMS Marketing Sequences",
      "Webinar, Affiliate Marketing & Tracking Setups"
    ],
    icon: "Users",
    iconBgClass: "bg-emerald-500/15",
    iconTextClass: "text-emerald-400",
    borderHoverClass: "hover:border-emerald-500/35"
  },
  {
    id: "analytics",
    tag: "9 SERVICES",
    title: "Analytics & Data Intelligence",
    description: "Track, analyze, and optimize your marketing performance with clean dashboard reports.",
    subservices: [
      "GA4, Google Tag Manager & Looker Studio Setup",
      "Heatmaps, Behavior & Goal Tracking",
      "Conversion Analytics & Automated ROI Reporting",
      "Specialized Marketing Data Audits"
    ],
    icon: "Database",
    iconBgClass: "bg-cyan-500/15",
    iconTextClass: "text-cyan-400",
    borderHoverClass: "hover:border-cyan-500/35"
  },
  {
    id: "local",
    tag: "7 SERVICES",
    title: "Local Business Marketing",
    description: "Help regional enterprises dominate their geographical market listings.",
    subservices: [
      "Google Business Profile Setup & Optimization",
      "Local SEO & Regional Maps Ranking",
      "Review, citation & Hyperlocal Ad Management",
      "Multi-Location Enterprise Local Search SEO"
    ],
    icon: "MapPin",
    iconBgClass: "bg-rose-500/15",
    iconTextClass: "text-rose-400",
    borderHoverClass: "hover:border-rose-500/35"
  },
  {
    id: "industry",
    tag: "11 NICHES DEPLOYED",
    title: "Specialized Industry Services",
    description: "Bespoke digital campaigns optimized for technical and corporate industry sectors.",
    subservices: [
      "Healthcare, Dental Clinic & Real Estate Marketing",
      "Legal Firm, Education & Restaurant Marketing",
      "Manufacturing, IoT, SaaS & Startup Solutions",
      "Ecommerce Brand Growth & Scale Strategies"
    ],
    icon: "Briefcase",
    iconBgClass: "bg-orange-500/15",
    iconTextClass: "text-orange-400",
    borderHoverClass: "hover:border-orange-500/35"
  },
  {
    id: "growth",
    tag: "11 TACTICS",
    title: "Advanced Growth Solutions",
    description: "High-performance strategies built to scale commercial metrics at pace.",
    subservices: [
      "Growth Hacking & Omnichannel Marketing",
      "Funnel Optimization & Account-Based Marketing (ABM)",
      "Predictive Analytics & Data-Driven Retargeting",
      "Customer Retention, CRO & AI Campaigns"
    ],
    icon: "Sparkles",
    iconBgClass: "bg-teal-500/15",
    iconTextClass: "text-teal-400",
    borderHoverClass: "hover:border-teal-500/35"
  },
  {
    id: "support",
    tag: "9 OPTIONS",
    title: "Support & Consulting",
    description: "Professional consulting and agency team training for long-term compounding growth.",
    subservices: [
      "Digital Marketing, SEO & AI Consulting",
      "Corporate Workshops & Team Trainings",
      "Freelancer Guidance & Strategic Planning",
      "Comprehensive Operational Audits"
    ],
    icon: "HelpCircle",
    iconBgClass: "bg-indigo-500/15",
    iconTextClass: "text-indigo-400",
    borderHoverClass: "hover:border-indigo-500/35"
  }
];

const getIconComponent = (icon: string) => {
  switch (icon) {
    case 'Award': return <Award className="w-5 h-5" />;
    case 'Bot': return <Bot className="w-5 h-5" />;
    case 'LineChart': return <LineChart className="w-5 h-5" />;
    case 'Users': return <Users className="w-5 h-5" />;
    case 'FileCheck': return <FileCheck className="w-5 h-5" />;
    case 'Database': return <Database className="w-5 h-5" />;
    case 'Briefcase': return <Briefcase className="w-5 h-5" />;
    case 'Star': return <Star className="w-5 h-5" />;
    case 'MapPin': return <MapPin className="w-5 h-5" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5" />;
    case 'HelpCircle': return <HelpCircle className="w-5 h-5" />;
    default: return <Award className="w-5 h-5" />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'geo' | 'seo' | 'technical-seo' | 'on-page-seo' | 'aeo' | 'ai-seo' | 'google-ads' | 'meta-ads' | 'linkedin-ads' | 'web-design' | 'wordpress' | 'dental-clinic-marketing' | 'manufacturing' | 'iot' | 'real-estate' | 'healthcare' | 'education' | 'law-firm' | 'restaurant' | 'finance' | 'off-page-seo' | 'local-seo' | 'ecommerce-seo' | 'enterprise-seo' | 'international-seo' | 'mobile-seo' | 'programmatic-seo' | 'link-building' | 'seo-audit-services' | 'seo-consulting-services' | 'shopify-development' | 'startup-growth' | 'enterprise-marketing' | 'local-business-growth' | 'ecommerce-growth' | 'b2b-lead-gen' | 'saas-marketing' | 'seo-case-studies' | 'ecommerce-seo-case-study' | 'local-seo-case-study' | 'ppc-case-study' | 'ai-optimization-case-study' | 'hire-seo-expert' | 'hire-ppc-expert' | 'hire-ai-seo-expert' | 'hire-content-writer' | 'hire-link-building-expert' | 'hire-marketing-manager' | 'hire-wordpress-developer'>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  // Home states
  const [simulationUrl, setSimulationUrl] = useState('');
  const [simLogs, setSimLogs] = useState<string[]>(['// Console standing by. Submit domain parameters to scan...']);
  const [isSimulating, setIsSimulating] = useState(false);

  // Tab filters for Portfolio Grid
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'seo' | 'ppc' | 'webdev' | 'aiseo'>('all');

  // Interactive Pricing retaner vs revenue share toggle
  const [pricingMode, setPricingMode] = useState<'retainer' | 'revenue'>('retainer');

  // Proposal lead form states
  const [proposalStep, setProposalStep] = useState(1);
  const [proposalForm, setProposalForm] = useState({
    companyName: '',
    companyUrl: '',
    budget: '',
    contactName: '',
    contactEmail: '',
    notes: '',
    interestedChannels: {
      seo: false,
      aiseo: false,
      ppc: false
    }
  });
  const [proposalSubmitting, setProposalSubmitting] = useState(false);
  const [proposalSuccess, setProposalSuccess] = useState(false);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Capabilities exploration live filter keywords
  const [servicesSearchQuery, setServicesSearchQuery] = useState('');

  // Keyboard listener for command search modal
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  // Hash and Path route router trigger for dedicated subpages
  useEffect(() => {
    const handleHashRouter = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;

      if (pathname === '/dental-clinic-marketing' || pathname === '/services/dental-clinic-marketing' || hash === '#dental-clinic-marketing' || hash === '#dental-marketing' || hash === '#dental-services' || hash === '#dental-clinic-marketing-services') {
        setCurrentPage('dental-clinic-marketing');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/manufacturing-marketing-services' || pathname === '/industrial-marketing-agency' || pathname === '/b2b-manufacturing-marketing' || hash === '#manufacturing-marketing-services' || hash === '#industrial-marketing' || hash === '#manufacturing-marketing') {
        setCurrentPage('manufacturing');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/iot-company-marketing-services' || pathname === '/iot-company-marketing-services/' || pathname === '/iot-marketing-agency' || pathname === '/iot-digital-marketing-services' || pathname === '/iot-seo-services' || pathname === '/technology-company-marketing' || hash === '#iot-company-marketing-services' || hash === '#iot-marketing-agency' || hash === '#iot-marketing' || hash === '#iot-services') {
        setCurrentPage('iot');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/real-estate-marketing-services' || pathname === '/real-estate-marketing-services/' || pathname === '/real-estate-digital-marketing' || pathname === '/real-estate-digital-marketing/' || pathname === '/real-estate-seo-services' || pathname === '/real-estate-seo-services/' || pathname === '/property-marketing-agency' || pathname === '/property-marketing-agency/' || hash === '#real-estate-marketing-services' || hash === '#real-estate-seo' || hash === '#real-estate-marketing') {
        setCurrentPage('real-estate');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/healthcare-marketing-services' || pathname === '/healthcare-marketing-services/' || pathname === '/healthcare-digital-marketing' || pathname === '/healthcare-digital-marketing/' || pathname === '/medical-marketing-agency' || pathname === '/medical-marketing-agency/' || pathname === '/hospital-marketing-services' || pathname === '/hospital-marketing-services/' || hash === '#healthcare-marketing-services' || hash === '#healthcare-seo' || hash === '#healthcare-marketing') {
        setCurrentPage('healthcare');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/education-marketing-services' || pathname === '/education-marketing-services/' || pathname === '/education-digital-marketing' || pathname === '/education-digital-marketing/' || pathname === '/school-marketing-agency' || pathname === '/school-marketing-agency/' || pathname === '/college-marketing-services' || pathname === '/college-marketing-services/' || pathname === '/edtech-marketing-agency' || pathname === '/edtech-marketing-agency/' || hash === '#education-marketing-services' || hash === '#education-seo' || hash === '#education-marketing') {
        setCurrentPage('education');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/law-firm-marketing-services' || pathname === '/law-firm-marketing-services/' || pathname === '/legal-marketing-agency' || pathname === '/legal-marketing-agency/' || pathname === '/lawyer-digital-marketing' || pathname === '/lawyer-digital-marketing/' || pathname === '/attorney-seo-services' || pathname === '/attorney-seo-services/' || hash === '#law-firm-marketing-services' || hash === '#legal-seo' || hash === '#lawyer-marketing') {
        setCurrentPage('law-firm');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/restaurant-marketing-services' || pathname === '/restaurant-marketing-services/' || pathname === '/restaurant-digital-marketing' || pathname === '/restaurant-digital-marketing/' || pathname === '/restaurant-seo-services' || pathname === '/restaurant-seo-services/' || pathname === '/food-business-marketing-agency' || pathname === '/food-business-marketing-agency/' || hash === '#restaurant-marketing-services' || hash === '#restaurant-seo' || hash === '#restaurant-marketing') {
        setCurrentPage('restaurant');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/finance-marketing-services' || pathname === '/finance-marketing-services/' || pathname === '/financial-services-marketing' || pathname === '/financial-services-marketing/' || pathname === '/finance-digital-marketing' || pathname === '/finance-digital-marketing/' || pathname === '/fintech-marketing-agency' || pathname === '/fintech-marketing-agency/' || hash === '#finance-marketing-services' || hash === '#financial-seo' || hash === '#finance-marketing') {
        setCurrentPage('finance');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/geo-services' || pathname === '/geo-services/' || hash === '#geo-services') {
        setCurrentPage('geo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/seo-services' || pathname === '/seo-services/' || hash === '#seo-services') {
        setCurrentPage('seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/technical-seo' || pathname === '/technical-seo/' || pathname === '/technical-seo-services' || pathname === '/technical-seo-services/' || hash === '#technical-seo' || hash === '#technical-seo-services') {
        setCurrentPage('technical-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/on-page-seo' || pathname === '/on-page-seo/' || pathname === '/on-page-seo-services' || pathname === '/on-page-seo-services/' || hash === '#on-page-seo' || hash === '#on-page-seo-services') {
        setCurrentPage('on-page-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/off-page-seo-services' || pathname === '/off-page-seo-services/' || hash === '#off-page-seo' || hash === '#off-page-seo-services') {
        setCurrentPage('off-page-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/local-seo-services' || pathname === '/local-seo-services/' || hash === '#local-seo' || hash === '#local-seo-services') {
        setCurrentPage('local-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/ecommerce-seo-services' || pathname === '/ecommerce-seo-services/' || hash === '#ecommerce-seo' || hash === '#ecommerce-seo-services') {
        setCurrentPage('ecommerce-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/enterprise-seo-services' || pathname === '/enterprise-seo-services/' || hash === '#enterprise-seo' || hash === '#enterprise-seo-services') {
        setCurrentPage('enterprise-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/international-seo-services' || pathname === '/international-seo-services/' || hash === '#international-seo' || hash === '#international-seo-services') {
        setCurrentPage('international-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/mobile-seo-services' || pathname === '/mobile-seo-services/' || hash === '#mobile-seo' || hash === '#mobile-seo-services') {
        setCurrentPage('mobile-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/programmatic-seo-services' || pathname === '/programmatic-seo-services/' || hash === '#programmatic-seo' || hash === '#programmatic-seo-services') {
        setCurrentPage('programmatic-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/link-building-services' || pathname === '/link-building-services/' || hash === '#link-building' || hash === '#link-building-services') {
        setCurrentPage('link-building');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/seo-audit-services' || pathname === '/seo-audit-services/' || hash === '#seo-audit' || hash === '#seo-audit-services') {
        setCurrentPage('seo-audit-services');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/seo-consulting-services' || pathname === '/seo-consulting-services/' || hash === '#seo-consulting' || hash === '#seo-consulting-services') {
        setCurrentPage('seo-consulting-services');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/aeo-services' || pathname === '/aeo-services/' || hash === '#aeo-services' || hash === '#aeo' || hash === '#ai-answer-optimization') {
        setCurrentPage('aeo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/chatgpt-optimization-services' || pathname === '/chatgpt-optimization-services/' || hash === '#chatgpt-optimization' || hash === '#chatgpt-seo') {
        setCurrentPage('chatgpt-optimization');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/gemini-optimization-services' || pathname === '/gemini-optimization-services/' || hash === '#gemini-optimization' || hash === '#gemini-seo') {
        setCurrentPage('gemini-optimization');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/claude-optimization-services' || pathname === '/claude-optimization-services/' || hash === '#claude-optimization' || hash === '#claude-seo') {
        setCurrentPage('claude-optimization');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/voice-search-optimization-services' || pathname === '/voice-search-optimization-services/' || hash === '#voice-search-optimization' || hash === '#voice-seo') {
        setCurrentPage('voice-search-optimization');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/ai-search-optimization-services' || pathname === '/ai-search-optimization-services/' || hash === '#ai-search-optimization-services' || hash === '#ai-search-optimization') {
        setCurrentPage('ai-search-optimization');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/ai-seo-services' || pathname === '/ai-seo-services/' || hash === '#ai-seo-services' || hash === '#ai-seo' || hash === '#ai-powered-seo-services') {
        setCurrentPage('ai-seo');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/google-ads-services' || pathname === '/google-ads-services/' || pathname === '/ppc-services' || pathname === '/ppc-services/' || pathname === '/google-ppc-agency' || pathname === '/google-ppc-agency/' || pathname === '/paid-search-marketing' || pathname === '/paid-search-marketing/' || hash === '#google-ads-services' || hash === '#google-ads' || hash === '#google-ads-agency' || hash === '#ppc-management-services' || hash === '#google-ads-management-company') {
        setCurrentPage('google-ads');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/meta-ads-services' || pathname === '/meta-ads-services/' || pathname === '/facebook-instagram-ads-services' || pathname === '/facebook-instagram-ads-services/' || pathname === '/facebook-ads-agency' || pathname === '/facebook-ads-agency/' || pathname === '/instagram-ads-management' || pathname === '/instagram-ads-management/' || hash === '#meta-ads-services' || hash === '#meta-ads' || hash === '#facebook-instagram-ads-services') {
        setCurrentPage('meta-ads');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/linkedin-ads-services' || pathname === '/linkedin-ads-services/' || pathname === '/linkedin-advertising-services' || pathname === '/linkedin-advertising-services/' || pathname === '/b2b-linkedin-marketing' || pathname === '/b2b-linkedin-marketing/' || pathname === '/linkedin-lead-generation-services' || pathname === '/linkedin-lead-generation-services/' || hash === '#linkedin-ads-services' || hash === '#linkedin-ads' || hash === '#b2b-linkedin-marketing' || hash === '#linkedin-lead-generation-services' || hash === '#linkedin-advertising-services') {
        setCurrentPage('linkedin-ads');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#web-design-services' || hash === '#web-design' || hash === '#website-design-company' || hash === '#professional-web-design-services' || hash === '#ui-ux-web-design-agency') {
        setCurrentPage('web-design');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#wordpress-development-services' || hash === '#wordpress-development-company' || hash === '#wordpress-website-development' || hash === '#wordpress-agency' || hash === '#wordpress' || hash === '#wordpress-development') {
        setCurrentPage('wordpress');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/shopify-development-services' || pathname === '/shopify-development-services/' || pathname === '/shopify-store-development' || pathname === '/shopify-store-development/' || pathname === '/shopify-web-development' || pathname === '/shopify-web-development/' || pathname === '/shopify-ecommerce-development' || pathname === '/shopify-ecommerce-development/' || hash === '#shopify-development-services' || hash === '#shopify-development' || hash === '#shopify-ecommerce-development' || hash === '#shopify-store-development') {
        setCurrentPage('shopify-development');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/startup-growth-solutions' || pathname === '/startup-growth-solutions/' || pathname === '/startup-marketing-services' || pathname === '/startup-marketing-services/' || pathname === '/startup-growth-agency' || pathname === '/startup-growth-agency/' || pathname === '/startup-growth-consulting' || pathname === '/startup-growth-consulting/' || hash === '#startup-growth-solutions' || hash === '#startup-growth' || hash === '#startup-marketing' || hash === '#startup-consulting') {
        setCurrentPage('startup-growth');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/enterprise-marketing-solutions' || pathname === '/enterprise-marketing-solutions/' || pathname === '/enterprise-digital-marketing-services' || pathname === '/enterprise-digital-marketing-services/' || pathname === '/enterprise-growth-marketing' || pathname === '/enterprise-growth-marketing/' || pathname === '/corporate-marketing-solutions' || pathname === '/corporate-marketing-solutions/' || hash === '#enterprise-marketing-solutions' || hash === '#enterprise-marketing' || hash === '#enterprise-growth' || hash === '#corporate-marketing') {
        setCurrentPage('enterprise-marketing');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/ecommerce-growth-solutions' || pathname === '/ecommerce-growth-solutions/' || pathname === '/ecommerce-marketing-services' || pathname === '/ecommerce-marketing-services/' || pathname === '/ecommerce-growth-agency' || pathname === '/ecommerce-growth-agency/' || pathname === '/ecommerce-scaling-services' || pathname === '/ecommerce-scaling-services/' || hash === '#ecommerce-growth-solutions' || hash === '#ecommerce-growth' || hash === '#ecommerce-marketing') {
        setCurrentPage('ecommerce-growth');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/b2b-lead-generation-services' || pathname === '/b2b-lead-generation-services/' || pathname === '/b2b-lead-generation-agency' || pathname === '/b2b-lead-generation-agency/' || pathname === '/business-lead-generation-services' || pathname === '/business-lead-generation-services/' || pathname === '/b2b-sales-lead-generation' || pathname === '/b2b-sales-lead-generation/' || hash === '#b2b-lead-generation-services' || hash === '#b2b-lead-generation' || hash === '#b2b-leads') {
        setCurrentPage('b2b-lead-gen');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/saas-marketing-solutions' || pathname === '/saas-marketing-solutions/' || pathname === '/saas-marketing-agency' || pathname === '/saas-marketing-agency/' || pathname === '/saas-growth-marketing' || pathname === '/saas-growth-marketing/' || pathname === '/software-marketing-services' || pathname === '/software-marketing-services/' || hash === '#saas-marketing-solutions' || hash === '#saas-marketing' || hash === '#saas-growth') {
        setCurrentPage('saas-marketing');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/seo-case-studies' || pathname === '/seo-case-studies/' || pathname === '/results' || pathname === '/results/' || pathname === '/seo-success-stories' || pathname === '/seo-success-stories/' || pathname === '/digital-marketing-case-studies' || pathname === '/digital-marketing-case-studies/' || hash === '#seo-case-studies' || hash === '#seo-results' || hash === '#seo-portfolio') {
        setCurrentPage('seo-case-studies');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/case-study/ecommerce-seo-results' || pathname === '/case-study/ecommerce-seo-results/' ||
        pathname === '/ecommerce-seo-case-study' || pathname === '/ecommerce-seo-case-study/' ||
        pathname === '/seo-success-story-ecommerce' || pathname === '/seo-success-story-ecommerce/' ||
        pathname === '/ecommerce-organic-growth-case-study' || pathname === '/ecommerce-organic-growth-case-study/' ||
        hash === '#ecommerce-seo-case-study' || hash === '#shopify-seo-case-study'
      ) {
        setCurrentPage('ecommerce-seo-case-study');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/case-study/ppc-success-stories' || pathname === '/case-study/ppc-success-stories/' ||
        pathname === '/google-ads-case-study' || pathname === '/google-ads-case-study/' ||
        pathname === '/ppc-case-studies' || pathname === '/ppc-case-studies/' ||
        pathname === '/paid-marketing-success-stories' || pathname === '/paid-marketing-success-stories/' ||
        hash === '#ppc-success-stories' || hash === '#ppc-case-study'
      ) {
        setCurrentPage('ppc-case-study');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/case-study/ai-optimization-results' || pathname === '/case-study/ai-optimization-results/' ||
        pathname === '/ai-seo-case-study' || pathname === '/ai-seo-case-study/' ||
        pathname === '/geo-optimization-success-story' || pathname === '/geo-optimization-success-story/' ||
        pathname === '/chatgpt-optimization-results' || pathname === '/chatgpt-optimization-results/' ||
        hash === '#ai-optimization-case-study' || hash === '#ai-seo-case-study' || hash === '#geo-optimization-results'
      ) {
        setCurrentPage('ai-optimization-case-study');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/hire-seo-expert' || pathname === '/hire-seo-expert/' ||
        pathname === '/hire-seo-specialist' || pathname === '/hire-seo-specialist/' ||
        pathname === '/dedicated-seo-expert' || pathname === '/dedicated-seo-expert/' ||
        pathname === '/seo-consultant-for-hire' || pathname === '/seo-consultant-for-hire/' ||
        hash === '#hire-seo-expert' || hash === '#hire-seo-specialist' || hash === '#dedicated-seo-expert'
      ) {
        setCurrentPage('hire-seo-expert');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/hire-ai-seo-expert' || pathname === '/hire-ai-seo-expert/' ||
        pathname === '/hire-ai-seo-specialist' || pathname === '/hire-ai-seo-specialist/' ||
        pathname === '/dedicated-ai-seo-consultant' || pathname === '/dedicated-ai-seo-consultant/' ||
        pathname === '/ai-seo-expert-for-hire' || pathname === '/ai-seo-expert-for-hire/' ||
        hash === '#hire-ai-seo-expert' || hash === '#hire-ai-seo-specialist' || hash === '#dedicated-ai-seo-consultant'
      ) {
        setCurrentPage('hire-ai-seo-expert');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/hire-content-writer' || pathname === '/hire-content-writer/' ||
        pathname === '/hire-seo-content-writer' || pathname === '/hire-seo-content-writer/' ||
        pathname === '/dedicated-content-writer' || pathname === '/dedicated-content-writer/' ||
        pathname === '/content-writing-services' || pathname === '/content-writing-services/' ||
        hash === '#hire-content-writer' || hash === '#hire-seo-content-writer' || hash === '#dedicated-content-writer' || hash === '#content-writing-services'
      ) {
        setCurrentPage('hire-content-writer');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/hire-ppc-expert' || pathname === '/hire-ppc-expert/' ||
        pathname === '/hire-google-ads-expert' || pathname === '/hire-google-ads-expert/' ||
        pathname === '/dedicated-ppc-specialist' || pathname === '/dedicated-ppc-specialist/' ||
        pathname === '/ppc-consultant-for-hire' || pathname === '/ppc-consultant-for-hire/' ||
        hash === '#hire-ppc-expert' || hash === '#hire-google-ads-expert' || hash === '#dedicated-ppc-specialist'
      ) {
        setCurrentPage('hire-ppc-expert');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/hire-link-building-expert' || pathname === '/hire-link-building-expert/' ||
        pathname === '/hire-link-building-specialist' || pathname === '/hire-link-building-specialist/' ||
        pathname === '/dedicated-link-building-services' || pathname === '/dedicated-link-building-services/' ||
        pathname === '/seo-link-building-expert' || pathname === '/seo-link-building-expert/' ||
        hash === '#hire-link-building-expert' || hash === '#hire-link-building-specialist' || hash === '#dedicated-link-building-services'
      ) {
        setCurrentPage('hire-link-building-expert');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/hire-marketing-manager' || pathname === '/hire-marketing-manager/' ||
        pathname === '/dedicated-marketing-manager' || pathname === '/dedicated-marketing-manager/' ||
        pathname === '/marketing-manager-for-hire' || pathname === '/marketing-manager-for-hire/' ||
        pathname === '/hire-digital-marketing-manager' || pathname === '/hire-digital-marketing-manager/' ||
        hash === '#hire-marketing-manager' || hash === '#dedicated-marketing-manager' || hash === '#marketing-manager-for-hire'
      ) {
        setCurrentPage('hire-marketing-manager');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/hire-wordpress-developer' || pathname === '/hire-wordpress-developer/' ||
        pathname === '/wordpress-developer-for-hire' || pathname === '/wordpress-developer-for-hire/' ||
        pathname === '/dedicated-wordpress-developer' || pathname === '/dedicated-wordpress-developer/' ||
        pathname === '/hire-woocommerce-developer' || pathname === '/hire-woocommerce-developer/' ||
        hash === '#hire-wordpress-developer' || hash === '#dedicated-wordpress-developer' || hash === '#wordpress-developer-for-hire'
      ) {
        setCurrentPage('hire-wordpress-developer');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        pathname === '/case-study/local-seo-results' || pathname === '/case-study/local-seo-results/' ||
        pathname === '/local-seo-case-study' || pathname === '/local-seo-case-study/' ||
        pathname === '/google-maps-seo-success-story' || pathname === '/google-maps-seo-success-story/' ||
        pathname === '/local-business-growth-case-study' || pathname === '/local-business-growth-case-study/' ||
        hash === '#local-seo-case-study' || hash === '#google-maps-seo-case-study'
      ) {
        setCurrentPage('local-seo-case-study');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (pathname === '/local-business-growth-services' || pathname === '/local-business-growth-services/' || pathname === '/local-business-marketing' || pathname === '/local-business-marketing/' || pathname === '/local-growth-marketing-services' || pathname === '/local-growth-marketing-services/' || pathname === '/small-business-growth-solutions' || pathname === '/small-business-growth-solutions/' || pathname === '/local-business-marketing-services' || pathname === '/local-business-marketing-services/' || pathname === '/small-business-growth-agency' || pathname === '/small-business-growth-agency/' || pathname === '/local-business-digital-marketing' || pathname === '/local-business-digital-marketing/' || hash === '#local-business-growth-services' || hash === '#local-business-growth' || hash === '#local-marketing' || hash === '#local-business-marketing') {
        setCurrentPage('local-business-growth');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
      }
    };
    handleHashRouter();
    window.addEventListener('hashchange', handleHashRouter);
    window.addEventListener('popstate', handleHashRouter);
    return () => {
      window.removeEventListener('hashchange', handleHashRouter);
      window.removeEventListener('popstate', handleHashRouter);
    };
  }, []);

  // Generative Engine mock scanner log runner
  const runSimulator = (e: FormEvent) => {
    e.preventDefault();
    if (!simulationUrl.trim()) return;

    setIsSimulating(true);
    setSimLogs([`Initializing connection to Perplexity Citations API...`]);

    const logs = [
      `Attempting handshake with ChatGPT Search context indexing arrays...`,
      `Scanning Google Gemini entity references for "${simulationUrl}"...`,
      `Checking Schema markups: STATUS_MISSING [JSON-LD Graphs not found]`,
      `Checking local backlink catalog relevance: STATUS_NEUTRAL_WEIGHT`,
      `Scanning context window parameters: NO MATCHING TOPICAL CHUNK`,
      `Analyzing entity references: BRAND CITATION RATIO IS NEUTRAL`,
      `Suggested Actions: Inject RAG relationship databases via AKGLS Pro SEO.`
    ];

    let count = 0;
    const interval = setInterval(() => {
      if (count < logs.length) {
        setSimLogs(prev => [...prev, logs[count]]);
        count++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 900);
  };

  // Proposal wizard handlers
  const handleProposalNext = () => {
    if (proposalStep === 1) {
      if (!proposalForm.companyName || !proposalForm.companyUrl || !proposalForm.budget) {
        alert("Please specify Company, URL, and Budget brackets first.");
        return;
      }
      setProposalStep(2);
    } else if (proposalStep === 2) {
      const selected = Object.values(proposalForm.interestedChannels).some(Boolean);
      if (!selected) {
        alert("Please pick at least one digital marketing channel to analyze.");
        return;
      }
      setProposalStep(3);
    }
  };

  const submitProposal = (e: FormEvent) => {
    e.preventDefault();
    if (!proposalForm.contactName || !proposalForm.contactEmail) return;

    setProposalSubmitting(true);
    setTimeout(() => {
      setProposalSuccess(true);
      setProposalSubmitting(false);
    }, 1500);
  };

  const resetProposalForm = () => {
    setProposalForm({
      companyName: '',
      companyUrl: '',
      budget: '',
      contactName: '',
      contactEmail: '',
      notes: '',
      interestedChannels: {
        seo: false,
        aiseo: false,
        ppc: false
      }
    });
    setProposalStep(1);
    setProposalSuccess(false);
  };

  const handleDownloadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (modalEmail) {
      setModalSuccess(true);
      setTimeout(() => {
        setDownloadModalOpen(false);
        setModalSuccess(false);
        setModalEmail('');
      }, 2500);
    }
  };

  // Filter case studies lists
  const filteredCases = portfolioFilter === 'all' 
    ? defaultCaseStudies 
    : defaultCaseStudies.filter(c => c.category === portfolioFilter);

  const PAGE_METADATA = {
    home: {
      title: "AKGLS Group | AI SEO, GEO & Performance Marketing Agency",
      description: "Deploy SEO-friendly structure markups with real-time Generative Engine Optimization (GEO) to citation-proof your business across ChatGPT, Perplexity, Gemini, and Google Search.",
      canonical: "https://akglsgroup.com/"
    },
    geo: {
      title: "GEO (Generative Engine Optimization) Services | AKGLS Group",
      description: "Optimize your brand for Next-Gen LLM retrieval, conversational AI filters, Perplexity Citations, and ChatGPT Search results with our proven expertise.",
      canonical: "https://akglsgroup.com/geo-services/"
    },
    seo: {
      title: "Organic Search Optimization & SEO Services | AKGLS Group",
      description: "Drive massive organic keyword visibility and high-intent customer traffic with premium full-funnel, semantic content structures and modern search practices.",
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
      title: "Ecommerce SEO Case Study | 450% Organic Traffic Growth | AKGLS Group",
      description: "Discover how AKGLS Group increased ecommerce organic traffic, keyword rankings, and revenue using technical SEO, AI SEO, CRO, and content optimization strategies.",
      canonical: "https://akglsgroup.com/case-study/ecommerce-seo-results/"
    },
    'local-seo-case-study': {
      title: "Local SEO Case Study | Google Maps Rankings & Lead Growth | AKGLS Group",
      description: "Discover how AKGLS Group increased Google Maps visibility, local business rankings, phone calls, and leads using Local SEO and Google Business Profile optimization strategies.",
      canonical: "https://akglsgroup.com/case-study/local-seo-results/"
    },
    'ppc-case-study': {
      title: "PPC Case Study | Google Ads & Paid Marketing Results | AKGLS Group",
      description: "Explore how AKGLS Group generated high-quality leads, improved ROAS, and scaled revenue using Google Ads, Meta Ads, LinkedIn Ads, AI-powered PPC, and conversion optimization strategies.",
      canonical: "https://akglsgroup.com/case-study/ppc-success-stories/"
    },
    'ai-optimization-case-study': {
      title: "AI Optimization Case Study | AI SEO & GEO Results | AKGLS Group",
      description: "Discover how AKGLS Group improved AI search visibility, ChatGPT mentions, GEO rankings, organic traffic, and lead generation using AI SEO, AEO, and conversational optimization strategies.",
      canonical: "https://akglsgroup.com/case-study/ai-optimization-results/"
    },
    'dental-clinic-marketing': {
      title: "Dental Clinic Marketing & Local Patient Acquisition Services | AKGLS Group",
      description: "Dominate dental local map packs, generate high-value implants and cosmetic patient appointments, and optimize local directories structures with HIPAA-aligned dental funnels.",
      canonical: "https://akgls.group/dental-clinic-marketing"
    },
    'manufacturing': {
      title: "Manufacturing Marketing Services | Industrial Digital Marketing Agency | AKGLS Group",
      description: "Grow your manufacturing business with industrial digital marketing services from AKGLS Group. SEO, lead generation, B2B marketing, Google Ads, AI SEO & website solutions for manufacturers.",
      canonical: "https://akglsgroup.com/manufacturing-marketing-services"
    },
    'iot': {
      title: "IoT Company Marketing Services | IoT SEO Agency | AKGLS Group",
      description: "Grow your IoT business with expert IoT marketing services from AKGLS Group. IoT SEO, B2B lead generation, Google Ads, AI SEO & digital marketing solutions for IoT companies.",
      canonical: "https://akglsgroup.com/iot-company-marketing-services/"
    },
    'real-estate': {
      title: "Real Estate Marketing Services | Real Estate SEO Agency | AKGLS Group",
      description: "Generate property leads and grow your real estate business with expert real estate marketing services from AKGLS Group. SEO, Google Ads, social media & AI-powered property marketing solutions.",
      canonical: "https://akglsgroup.com/real-estate-marketing-services/"
    },
    'healthcare': {
      title: "Healthcare Marketing Services | Medical SEO Agency | AKGLS Group",
      description: "Grow your healthcare business with expert healthcare marketing services from AKGLS Group. Medical SEO, Google Ads, local SEO, AI SEO & patient lead generation solutions.",
      canonical: "https://akglsgroup.com/healthcare-marketing-services/"
    },
    'education': {
      title: "Education Marketing Services | School & College Marketing Agency | AKGLS Group",
      description: "Grow admissions and student inquiries with expert education marketing services from AKGLS Group. SEO, Google Ads, social media & AI-powered marketing for schools, colleges & edtech companies.",
      canonical: "https://akglsgroup.com/education-marketing-services/"
    },
    'law-firm': {
      title: "Law Firm Marketing Services | Lawyer SEO Agency | AKGLS Group",
      description: "Grow your law firm with expert legal marketing services from AKGLS Group. Lawyer SEO, Google Ads, local SEO, AI SEO & lead generation solutions for attorneys and law firms.",
      canonical: "https://akglsgroup.com/law-firm-marketing-services/"
    },
    'restaurant': {
      title: "Restaurant Marketing Services | Restaurant SEO Agency | AKGLS Group",
      description: "Grow your restaurant with expert restaurant marketing services from AKGLS Group. Restaurant SEO, Google Ads, social media, local SEO & AI-powered food business marketing solutions.",
      canonical: "https://akglsgroup.com/restaurant-marketing-services/"
    },
    'finance': {
      title: "Finance Marketing Services | Financial SEO Agency | AKGLS Group",
      description: "Grow your financial business with expert finance marketing services from AKGLS Group. SEO, Google Ads, fintech marketing, AI SEO & lead generation solutions for finance companies.",
      canonical: "https://akglsgroup.com/finance-marketing-services/"
    },
    'hire-marketing-manager': {
      title: "Hire Marketing Manager | Dedicated Digital Marketing Manager | AKGLS Group",
      description: "Hire experienced marketing managers from AKGLS Group for SEO, PPC, social media, AI marketing, lead generation, branding & complete digital growth management services.",
      canonical: "https://akglsgroup.com/hire-marketing-manager/"
    },
    'hire-wordpress-developer': {
      title: "Hire WordPress Developer | Dedicated WordPress Development Services | AKGLS Group",
      description: "Hire expert WordPress developers from AKGLS Group for custom WordPress development, WooCommerce, Elementor, speed optimization, SEO-friendly websites & AI-ready WordPress solutions.",
      canonical: "https://akglsgroup.com/hire-wordpress-developer/"
    }
  };

  const currentMeta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;

  const filteredCapabilities = ALL_CAPABILITIES.filter(cap => {
    const query = servicesSearchQuery.toLowerCase().trim();
    if (!query) return true;
    if (cap.title.toLowerCase().includes(query)) return true;
    if (cap.description.toLowerCase().includes(query)) return true;
    return cap.subservices.some(sub => sub.toLowerCase().includes(query));
  });

  return (
    <div className="bg-[#05070a] text-slate-300 font-sans selection:bg-brand-indigo selection:text-white min-h-screen flex flex-col justify-between overflow-x-hidden leading-relaxed pb-16 lg:pb-0">
      
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <link rel="canonical" href={currentMeta.canonical} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
      </Helmet>
      {/* GLOBAL SERVICES HEADER COMPONENTS */}
      <Header 
        onSearchOpen={() => setIsSearchOpen(true)}
        openQuiz={() => {
          const quizEl = document.querySelector('#audit-quiz');
          quizEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        openProposal={() => {
          const formEl = document.querySelector('#audit-form');
          formEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        openDownloadModal={() => setDownloadModalOpen(true)}
        currentPage={currentPage}
      />

      {currentPage === 'geo' ? (
        <GeoServicesPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#geo-lead-portal') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'seo' ? (
        <SeoServicesPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
        />
      ) : currentPage === 'technical-seo' ? (
        <TechnicalSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-technical-audit-portal') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'on-page-seo' ? (
        <OnPageSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#onpage-audit-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'off-page-seo' ? (
        <OffPageSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#off-page-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'local-seo' ? (
        <LocalSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#local-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'ecommerce-seo' ? (
        <EcommerceSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#ecommerce-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'enterprise-seo' ? (
        <EnterpriseSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#enterprise-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'international-seo' ? (
        <InternationalSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#international-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'mobile-seo' ? (
        <MobileSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#mobile-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'programmatic-seo' ? (
        <ProgrammaticSeoPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#programmatic-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'link-building' ? (
        <LinkBuildingPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#link-building-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'seo-audit-services' ? (
        <SeoAuditPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#seo-audit-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'seo-consulting-services' ? (
        <SeoConsultingPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#seo-consulting-cta') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'aeo' ? (
        <AeoServicesPage 
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-aeo-audit-portal') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'chatgpt-optimization' ? (
        <ChatgptOptimizationPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'gemini-optimization' ? (
        <GeminiOptimizationPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'claude-optimization' ? (
        <ClaudeOptimizationPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'voice-search-optimization' ? (
        <VoiceSearchOptimizationPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'ai-search-optimization' ? (
        <AiSearchOptimizationPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'ai-seo' ? (
        <AiSeoServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-ai-seo-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'google-ads' ? (
        <GoogleAdsServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-ads-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'meta-ads' ? (
        <MetaAdsServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#meta-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'linkedin-ads' ? (
        <LinkedInAdsServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#linkedin-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'web-design' ? (
        <WebDesignServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-website-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'wordpress' ? (
        <WordPressServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-wordpress-consultation-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'shopify-development' ? (
        <ShopifyDevelopmentServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#shopify-consultation-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'startup-growth' ? (
        <StartupGrowthSolutionsPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#startup-growth-audit') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'enterprise-marketing' ? (
        <EnterpriseMarketingSolutionsPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#enterprise-growth-audit') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'ecommerce-growth' ? (
        <EcommerceGrowthSolutionsPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-ecommerce-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'b2b-lead-gen' ? (
        <B2BLeadGenerationServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-b2b-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'saas-marketing' ? (
        <SaaSMarketingSolutionsPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-saas-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'seo-case-studies' ? (
        <SeoCaseStudiesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#case-audit-form') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'ecommerce-seo-case-study' ? (
        <EcommerceSeoCaseStudyPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              // Scroll to some other location if not available on the single screen
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'local-seo-case-study' ? (
        <LocalSeoCaseStudyPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'ppc-case-study' ? (
        <PpcSuccessStoriesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'ai-optimization-case-study' ? (
        <AiOptimizationCaseStudyPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'hire-seo-expert' ? (
        <HireSeoExpertPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'hire-ppc-expert' ? (
        <HirePpcExpertPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'hire-ai-seo-expert' ? (
        <HireAiSeoExpertPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'hire-content-writer' ? (
        <HireContentWriterPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'hire-link-building-expert' ? (
        <HireLinkBuildingExpertPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.getElementById('free-backlink-audit-stage');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'hire-marketing-manager' ? (
        <HireMarketingManagerPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.getElementById('free-marketing-audit-stage');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'hire-wordpress-developer' ? (
        <HireWordPressDeveloperPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.getElementById('free-wp-audit-form');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
          }}
        />
      ) : currentPage === 'local-business-growth' ? (
        <LocalBusinessGrowthServicesPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-local-audit') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'dental-clinic-marketing' ? (
        <DentalClinicMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#free-dental-audit-portal') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'manufacturing' ? (
        <ManufacturingMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#manufacturing-audit-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'iot' ? (
        <IotCompanyMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#iot-audit-form-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'real-estate' ? (
        <RealEstateMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#re-audit-form-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'healthcare' ? (
        <HealthcareMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#healthcare-audit-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'education' ? (
        <EducationMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#education-audit-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'law-firm' ? (
        <LawFirmMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#legal-audit-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'restaurant' ? (
        <RestaurantMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#restaurant-audit-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'finance' ? (
        <FinanceMarketingPage
          onBackToHome={() => {
            window.history.pushState(null, '', '/');
            window.location.hash = '';
            setCurrentPage('home');
          }}
          openProposalForm={() => {
            const formEl = document.querySelector('#finance-audit-section') || document.querySelector('#audit-form');
            formEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ) : (
        <>
          {/* CORE HERO SECTION + LIVE SIMULATOR MONITOR BOARD */}
          <header className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#05070a] text-white overflow-hidden text-left">
        {/* Decorative ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-indigo/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info segment */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 rounded-full py-1.5 px-4 font-bold text-[10.5px] uppercase tracking-wider font-display">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              <span>Enterprise organic ranking & geo systems</span>
            </div>

            <h1 className="text-4.5xl sm:text-5xl md:text-5.5xl lg:text-6xl font-extrabold font-display leading-[1.08] tracking-tight">
              Traditional Search is Evolving. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                We Engineer AI SEO & Performance Marketing.
              </span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Over 50% of high-intent search user journeys now bypass basic ranking lists to converse with generative AI tools. AKGLS Group deploys technical organic schema markup structures with real-time **Generative Engine Optimization (GEO)** to citation-proof your business across Perplexity, ChatGPT Search, Gemini, and Google.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a 
                href="#audit-form"
                className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Request Strategy Audit <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#capabilities-explorer"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4 text-brand-teal animate-pulse" /> Explore 140+ Services
              </a>
            </div>

            {/* Core credentials ticker */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg text-left">
              <div>
                <div className="text-2xl font-black text-white font-display">250%+</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                  Avg Organic Lift
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-display">48%</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                  Lower cost per acquisition
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-display">98.2%</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                  Client retention rate
                </div>
              </div>
            </div>
          </div>

          {/* Right interactive Evaluator console card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-950/95 rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-5 text-left relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  generative engine evaluator
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-extrabold text-white font-display">
                    Analyze Your Brand Recommendation Weight
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                    Test your website's indexing relevance across modern conversational AI LLM retrieval layers.
                  </p>
                </div>

                <form onSubmit={runSimulator} className="space-y-2">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 text-xs font-mono select-none">
                      https://
                    </span>
                    <input 
                      type="text" 
                      required
                      placeholder="yourcompany.com"
                      value={simulationUrl}
                      onChange={(e) => setSimulationUrl(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-brand-indigo focus:ring-1 focus:ring-indigo-500/30 rounded-xl py-3 pl-16 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none font-medium"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSimulating}
                    className="w-full bg-brand-indigo hover:bg-opacity-95 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow DISABLED:opacity-60 cursor-pointer"
                  >
                    {isSimulating ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin text-brand-teal" /> Connecting AI Indices...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-brand-teal" /> Run Simulated Citation Check
                      </>
                    )}
                  </button>
                </form>

                {/* Simulated outputs window */}
                <div className="bg-black/90 rounded-xl p-3 border border-slate-850 h-36 overflow-y-auto space-y-1.5 scrollbar-none font-mono text-[10.5px] leading-normal select-none">
                  {simLogs.map((log, idx) => (
                    <p 
                       key={idx} 
                      className={
                        log.startsWith('//') 
                          ? 'text-slate-500' 
                          : log.includes('MISSING') 
                            ? 'text-rose-400 font-bold' 
                            : log.includes('Actions') 
                              ? 'text-brand-teal font-extrabold' 
                              : 'text-slate-300'
                      }
                    >
                      {log}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* CREDENTIALS / PARTNER TICKER */}
      <section className="bg-[#0c121e]/40 border-y border-slate-800/60 py-6 select-none relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-2.5 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-display">
            integrating natively with leading digital growth channels & technical standard directories:
          </p>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap text-slate-500 hover:text-slate-400 font-display font-semibold text-xs tracking-wider uppercase">
            <span className="flex items-center gap-1.5">★ Google Premier Partner</span>
            <span className="flex items-center gap-1.5">★ Meta Business Partner</span>
            <span className="flex items-center gap-1.5">★ Shopify Plus Expert</span>
            <span className="flex items-center gap-1.5">★ Forbes Agency Council</span>
            <span className="flex items-center gap-1.5">★ HubSpot Diamond Agency</span>
            <span className="flex items-center gap-1.5">★ TechCrunch Featured</span>
            
            {/* Repeat loop */}
            <span className="flex items-center gap-1.5">★ Google Premier Partner</span>
            <span className="flex items-center gap-1.5">★ Meta Business Partner</span>
            <span className="flex items-center gap-1.5">★ Shopify Plus Expert</span>
            <span className="flex items-center gap-1.5">★ Forbes Agency Council</span>
            <span className="flex items-center gap-1.5">★ HubSpot Diamond Agency</span>
            <span className="flex items-center gap-1.5">★ TechCrunch Featured</span>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES EXPLORER SECTION */}
      <section id="capabilities-explorer" className="py-16 md:py-24 bg-[#05070a] scroll-mt-20 border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              CAPABILITIES DIRECTORY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white animate-fade-in">
              Explore Our Full Core Capabilities Map
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We provide an unprecedented level of execution across 14 master disciplines. Use the interactive finder below to search all sub-services instantly.
            </p>

            {/* Keyword finder filter */}
            <div className="max-w-xl mx-auto pt-3 relative">
              <input 
                type="text" 
                placeholder="Search from 140+ services (e.g. AEO, Shopify, Local maps, B2B lead generation)..."
                value={servicesSearchQuery}
                onChange={(e) => setServicesSearchQuery(e.target.value)}
                className="w-full bg-[#0c121e] border border-slate-800 rounded-2xl py-4.5 pl-5 pr-12 text-xs text-slate-200 shadow-inner focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 placeholder-slate-500 font-medium"
              />
              <span className="absolute right-4 inset-y-0 flex items-center text-xs text-slate-500 font-bold">
                {servicesSearchQuery ? "Active" : `${ALL_CAPABILITIES.length} disciplines`}
              </span>
            </div>
          </div>

          {/* Capabilities grid blocks layout */}
          {filteredCapabilities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCapabilities.map((cap) => (
                <div 
                  key={cap.id} 
                  className={`bg-[#0c121e] border border-slate-850 hover:border-brand-indigo/35 transition-all rounded-3xl p-6 text-left hover:shadow-2xl hover:shadow-brand-indigo/5 flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${cap.iconBgClass} ${cap.iconTextClass}`}>
                        {getIconComponent(cap.icon)}
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                        {cap.tag}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-extrabold text-white font-display flex items-center gap-1.5">
                      {cap.title}
                      {cap.badge && (
                        <span className="bg-brand-purple/10 text-brand-purple text-[8.5px] uppercase py-0.5 px-2 rounded font-mono font-bold shrink-0">
                          {cap.badge}
                        </span>
                      )}
                    </h3>
                    
                    <p className="text-slate-400 text-xs font-light leading-relaxed">
                      {cap.description}
                    </p>
                    
                    <div className="border-t border-slate-800/85 pt-3 space-y-1.5 max-h-40 overflow-y-auto pr-1">
                      {cap.subservices.map((sub, sIdx) => {
                        const isMatch = servicesSearchQuery && sub.toLowerCase().includes(servicesSearchQuery.toLowerCase());
                        return (
                          <div 
                            key={sIdx} 
                            className={`flex items-start gap-1.5 text-xs font-bold leading-tight ${isMatch ? 'text-brand-teal' : 'text-slate-350'}`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="pt-5 border-t border-slate-800/80 mt-5 flex justify-between items-center text-[10px] font-mono uppercase font-bold text-slate-500">
                    <span>AKGLS PROTOCOL</span>
                    <a 
                      href="#audit-form" 
                      className="text-brand-indigo hover:text-indigo-300 text-xs flex items-center font-bold font-display uppercase tracking-wider transition-colors"
                    >
                      Request Audit Setup →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 p-8 bg-[#0c121e] border border-slate-850 rounded-3xl max-w-lg mx-auto space-y-3">
              <p className="text-slate-400 text-sm font-light">
                No matching service categories found for "<span className="text-brand-indigo font-bold">{servicesSearchQuery}</span>".
              </p>
              <button 
                onClick={() => setServicesSearchQuery('')}
                className="text-brand-teal hover:text-teal-300 text-xs font-bold font-display uppercase tracking-wider"
              >
                Clear query & view all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE DIAGNOSTIC ACCORDION / STRATEGY MATRIX */}
      <section id="audit-quiz" className="py-16 md:py-24 bg-[#0a0f1d] border-y border-slate-850/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              STRATEGY MATRIX
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-white">
              What is Your Primary Growth Bottleneck?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Take 30 seconds to answer our interactive diagnostic quiz below to pinpoint crawler or conversion bottlenecks and calculate tailored playbook solutions.
            </p>
          </div>

          <ServiceQuiz />

        </div>
      </section>

      {/* CORE SOLUTIONS SECTION / AI ADVANCED MASTERY */}
      <section id="ai-deepdive" className="py-20 md:py-28 bg-brand-navy text-white text-left relative overflow-hidden scroll-mt-20">
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info columns */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-teal bg-teal-950/40 border border-teal-850 rounded-full py-1.5 px-4 font-display inline-block">
              GENERATIVE SEARCH ENGINE MASTERY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight">
              Mastering AI Recommendation Algorithms Before Your Rivals Do
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              As classic indexes decline, conversational assistants synthesize and formulate recommended options based on highly dense sitemap assets. Our structured **Generative Engine Optimization (GEO)** mapping is built specifically to address entity relationships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold font-display text-brand-teal flex items-center gap-1.5">
                  <Database className="w-4 h-4" /> Relational metadata structures
                </h4>
                <p className="text-slate-400 text-xs font-light leading-normal">
                  Inject explicit JSON mappings detailing precise service attributes, parent entities, and geographic references.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold font-display text-brand-teal flex items-center gap-1.5">
                  <Bot className="w-4 h-4" /> Context window optimizations
                </h4>
                <p className="text-slate-400 text-xs font-light leading-normal">
                  Format textual copywriting so crawling crawlers extract comparison summaries clearly matching high intent prompts.
                </p>
              </div>
            </div>
          </div>

          {/* Right scores graphics visualization model */}
          <div className="lg:col-span-5 bg-white/5 border border-white/5 p-6 rounded-3xl backdrop-blur-md space-y-6">
            <h3 className="text-base font-extrabold font-display">
              LLM Context Index Readiness Rating
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>Entity Citation density</span>
                  <span className="text-brand-teal font-mono">92% (High)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-teal h-full w-[92%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>JSON-LD Relations index</span>
                  <span className="text-brand-purple font-mono">88% (Optimized)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-purple h-full w-[88%]" />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black/40 p-4 rounded-xl border border-white/5 text-[10.5px] font-mono text-slate-300">
                <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
                <span>SYSTEM NOTIFICATION: Relational properties active. Website validated as authority entity.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE PORTFOLIO & CASE STUDIES */}
      <section id="portfolio-gallery" className="py-20 md:py-28 bg-[#05070a] text-left scroll-mt-20 border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              AGENCY WORK & PROOFS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white animate-fade-in">
              Our Strategic Case Studies
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We focus on absolute ROI transparency. Filter below to explore how we've engineered traffic growth across technical sectors.
            </p>

            {/* Filter tags row */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-4">
              {[
                { filter: 'all', label: 'All Cases' },
                { filter: 'seo', label: 'Organic SEO' },
                { filter: 'ppc', label: 'Paid PPC Ads' },
                { filter: 'webdev', label: 'Web Development' },
                { filter: 'aiseo', label: 'AI SEO Solutions' }
              ].map((tab) => (
                <button 
                  key={tab.filter}
                  onClick={() => setPortfolioFilter(tab.filter as any)}
                  className={`px-4 py-2 rounded-lg text-[10.5px] font-black uppercase tracking-wider transition-all select-none cursor-pointer ${
                    portfolioFilter === tab.filter 
                      ? 'bg-brand-indigo text-white shadow-lg' 
                      : 'bg-[#0c121e] text-slate-400 hover:bg-slate-900 border border-slate-800/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid render portfolios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredCases.map((cs) => (
              <div 
                key={cs.id}
                className="bg-[#0c121e] border border-slate-850 rounded-3xl p-6 hover:border-brand-indigo/40 hover:shadow-2xl hover:shadow-brand-indigo/5 transition-all flex flex-col justify-between text-slate-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black text-brand-indigo uppercase tracking-wider bg-brand-indigo/15 border border-brand-indigo/20 py-0.5 px-2 rounded">
                      {cs.categoryLabel}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono font-extrabold uppercase">
                      Revenue impact
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold font-display text-white leading-snug animate-fade-in">
                    {cs.title}
                  </h3>

                  <div className="p-4 bg-[#05070a] border border-slate-800 rounded-2xl flex items-center justify-between text-left">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">
                        {cs.metrics.label}:
                      </span>
                      <strong className="text-base font-mono font-extrabold text-brand-emerald">
                        {cs.metrics.value}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-500 uppercase font-bold block">
                        Comparison:
                      </span>
                      <span className="text-xs font-mono text-slate-300 font-bold">
                        {cs.beforeAfter.before} → {cs.beforeAfter.after}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {cs.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>Secured: {cs.date}</span>
                  <a href="#audit-form" className="text-brand-teal font-extrabold hover:underline">
                    Download Strategy PDF →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LEADERSHIP PROFILE BOARD & CORE VALUES */}
      <section id="team-leadership" className="py-16 md:py-24 bg-[#0a0f1d] border-y border-slate-850/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              AGENCY LEADERSHIP & TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              Board & Core Strategists
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We consolidate experienced organic architects, developer engineers, and conversion copywriters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Amit K.", role: "Chief Growth Strategist & Founder", initial: "AK", desc: "Focuses on technical sitemaps, semantic indexing arrays, and enterprise project strategies." },
              { name: "Siddharth G.", role: "Head of Paid advertising", initial: "SG", desc: "Manages bid properties, coordinates display ads, and removes PPC budget waste." },
              { name: "Ria Malhotra", role: "UI/UX & custom Web Dev Lead", initial: "RM", desc: "Rebuilds checkout checkout templates to scale speeds and optimize conversions." },
              { name: "Aravind N.", role: "Senior Schema prompt engineer", initial: "AN", desc: "Coordinates dynamic schemas and evaluates prompt visibility ratios in generative networks." }
            ].map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#0c121e] rounded-3xl p-6 border border-slate-850 text-left hover:border-brand-indigo/40 hover:shadow-2xl hover:shadow-brand-indigo/5 transition-all flex flex-col justify-between text-slate-200"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-indigo/15 border border-brand-indigo/30 flex items-center justify-center font-bold text-lg text-brand-indigo font-display">
                    {member.initial}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-white font-display leading-none animate-fade-in">
                      {member.name}
                    </h4>
                    <span className="text-[9.5px] font-black uppercase text-brand-purple tracking-widest block font-mono">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE INVESTMENTS / FLEXIBLE PERFORMANCE STRUCTURES */}
      <section id="pricing-matrix" className="py-20 md:py-28 bg-[#05070a] scroll-mt-20 border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 animate-fade-in text-left">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 rounded-full py-1.5 px-4 font-display">
              AGENCY PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              Flexible Performance Options
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Choose the operational scope that aligns with your scale targets. No hidden retainers.
            </p>

            {/* Performance Pricing Toggle Option */}
            <div className="inline-flex items-center gap-2 p-1.5 bg-[#0c121e] rounded-xl border border-slate-800 shadow mt-4 font-semibold select-none">
              <button 
                onClick={() => setPricingMode('retainer')}
                className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  pricingMode === 'retainer' ? 'bg-brand-indigo text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Standard Retainer
              </button>
              <button 
                onClick={() => setPricingMode('revenue')}
                className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  pricingMode === 'revenue' ? 'bg-brand-indigo text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Performance Revenue Share
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Plan 1 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 sm:p-8 border border-slate-850 flex flex-col justify-between text-slate-200">
              <div className="space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-[8.5px] bg-[#0a0f1d] border border-slate-800 text-indigo-400 font-mono font-bold uppercase py-0.5 px-2 rounded">
                    MID-STAGE GROWTH
                  </span>
                  <h4 className="text-lg font-black text-white font-display">
                    Scale Accelerator Plan
                  </h4>
                  <p className="text-slate-400 text-xs font-light max-w-xs leading-relaxed">
                    Improve keywords indexing range and manage targeted search ad structures.
                  </p>
                </div>

                <div className="border-y border-slate-800 py-3.5 text-left">
                  <div className="text-3.5xl font-mono font-black text-white animate-fade-in">
                    {pricingMode === 'retainer' ? '$3,500' : '2%' }
                    <span className="text-xs text-slate-500 font-medium">
                      {pricingMode === 'retainer' ? '/mo' : ' Rev Share' }
                    </span>
                  </div>
                  <span className="text-[9.5px] text-slate-500 font-bold block pt-1 font-mono uppercase">
                    {pricingMode === 'retainer' ? 'Requires 3 months initial checkpoint' : 'Subject to traffic verification' }
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-bold">
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Up to 50 targeted words tracked</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Technical speed diagnostics</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Looker visual dashboard reporting</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#audit-form"
                  className="w-full py-3 bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-xs text-center rounded-xl block shadow"
                >
                  Request Discovery Proposal
                </a>
              </div>
            </div>

            {/* Plan 2: FEATURED */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border-2 border-brand-indigo flex flex-col justify-between relative shadow-xl shadow-brand-indigo/5">
              <div className="absolute -top-3.5 left-1/2 -translate-x-[50%] bg-brand-indigo text-white text-[9px] tracking-widest font-black uppercase py-1 px-4 rounded-full shadow">
                MOST REQUESTED SLOT
              </div>

              <div className="space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-[8.5px] bg-[#0c121e] border border-slate-800 text-indigo-300 font-mono font-bold uppercase py-0.5 px-2 rounded">
                    ENTERPRISE SCALE
                  </span>
                  <h4 className="text-lg font-black text-white font-display">
                    Authority & AI SEO Suite
                  </h4>
                  <p className="text-slate-400 text-xs font-light max-w-xs leading-relaxed">
                    Complete keyword dominance matched to contextual AI search and schema mappings.
                  </p>
                </div>

                <div className="border-y border-white/5 py-3.5 text-left">
                  <div className="text-3.5xl font-mono font-black text-white animate-fade-in">
                    {pricingMode === 'retainer' ? '$6,500' : '4%' }
                    <span className="text-xs text-slate-500 font-medium">
                      {pricingMode === 'retainer' ? '/mo' : ' Rev Share' }
                    </span>
                  </div>
                  <span className="text-[9.5px] text-slate-500 font-bold block pt-1 font-mono uppercase">
                    {pricingMode === 'retainer' ? 'Includes tech overhaul checks' : 'Includes custom GEO schema audits' }
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-bold">
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> AI recommendation citation prompts</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Dedicated JSON relations deployment</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Speed template rebuilts under 1.0s</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#audit-form"
                  className="w-full py-3.5 bg-brand-orange hover:bg-opacity-95 text-white font-extrabold text-xs text-center rounded-xl block shadow-lg shadow-brand-orange/15"
                >
                  Inquire Plan Allocation Slot
                </a>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="bg-[#0c121e] rounded-3xl p-6 sm:p-8 border border-slate-850 flex flex-col justify-between text-slate-200">
              <div className="space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-[8.5px] bg-[#0a0f1d] border border-slate-800 text-slate-400 font-mono font-bold uppercase py-0.5 px-2 rounded">
                    CUSTOM SCOPE
                  </span>
                  <h4 className="text-lg font-black text-white font-display">
                    Elite Custom Solutions
                  </h4>
                  <p className="text-slate-400 text-xs font-light max-w-xs leading-relaxed">
                    Custom operational pipeline built specifically for multi-location corporate structures.
                  </p>
                </div>

                <div className="border-y border-slate-800 py-3.5 text-left">
                  <div className="text-3.5xl font-mono font-black text-white">
                    Custom Quote
                  </div>
                  <span className="text-[9.5px] text-slate-500 font-bold block pt-1 font-mono uppercase">
                    Includes full team dedicated assets
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-bold">
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Private team Slack communication channels</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Full CRM database sync sets</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" /> Programmatic landing pages setup</li>
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="#audit-form"
                  className="w-full py-3 bg-slate-900 border border-slate-850 text-white font-extrabold text-xs text-center rounded-xl block hover:bg-slate-800 shadow"
                >
                  Request Executive Council
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* OPERATIONS SECURITY CHECK & MONITOR STATUS */}
      <section id="ops-status" className="py-16 bg-slate-900 border-t border-slate-800 text-white text-left scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-teal uppercase font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" /> operations active
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-snug">
                Transparent SLA Support Queue & Pipeline Monitor
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm">
                We maintain active performance dashboards for our clients. Below is the operational support queue diagnostic standing:
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider block">Server Uptime:</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-base font-mono font-bold text-white">99.99%</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider block">API check status:</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-base font-mono font-bold text-white">HEALTHY</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider block">avg support queue:</span>
                <div className="flex items-center gap-0.5 mt-1">
                  <span className="text-base font-mono font-bold text-white">12m</span>
                  <span className="text-[10px] text-slate-400 font-bold font-mono">avg</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ADDITIONAL SEGMENTS: ROI CALCULATOR AND AI OPTIMIZER CARD */}
      <section className="py-20 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <RoiCalculator />
          <ContentAnalyzer />
        </div>
      </section>

      {/* OPEN ROLES REMOTELY - THE TALENT ACQUISITION CAREER GATEWAY */}
      <section id="careers-gateway" className="py-20 bg-white text-left scroll-mt-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display inline-block">
                WE ARE EXPANDING
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-brand-navy">
                Build the Future of Enterprise Search Optimization
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                AKGLS Group is always seeking seasoned remote content strategists, schema architects, and ad experts who prioritize clean data and verifiable campaign yield outputs.
              </p>
              
              <div className="pt-2">
                <a 
                  href="#audit-form"
                  className="text-xs font-bold font-display text-brand-indigo hover:underline flex items-center gap-1.5"
                >
                  Explore remote internship channels <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Careers card */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-brand-indigo/40 transition-all select-none">
                <div className="space-y-1.5">
                  <span className="text-[8.5px] bg-emerald-50 text-brand-emerald font-bold border border-emerald-150 py-0.5 px-2 rounded font-mono uppercase tracking-wide">
                    Full-Time (Remote)
                  </span>
                  <h4 className="text-sm font-extrabold text-brand-navy font-display">
                    Senior Enterprise SEO Consultant
                  </h4>
                  <p className="text-xs text-slate-500 font-light font-sans max-w-md leading-relaxed">
                    Requires 5+ years managing programmatic mapping layouts, site crawling hierarchies, and complex redirect migrations.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-brand-indigo/40 transition-all select-none">
                <div className="space-y-1.5">
                  <span className="text-[8.5px] bg-purple-50 text-brand-purple font-bold border border-purple-150 py-0.5 px-2 rounded font-mono uppercase tracking-wide">
                    Full-Time (Remote)
                  </span>
                  <h4 className="text-sm font-extrabold text-brand-navy font-display">
                    AI SEO Prompt & Schema Architect
                  </h4>
                  <p className="text-xs text-slate-500 font-light font-sans max-w-md leading-relaxed">
                    Focus on constructing relational knowledge databases and evaluating query citation density ratios.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECURE STRATEGY PROPOSAL MULTI-STEP LEAD FORM */}
      <section id="audit-form" className="py-20 md:py-24 bg-slate-50 relative scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-xl space-y-8">
            
            <div className="space-y-4 text-center">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display">
                performance slots open
              </span>
              <h3 className="text-3xl font-extrabold font-display leading-tight text-brand-navy">
                Claim Your Custom Strategy Proposal
              </h3>
              <p className="text-slate-500 text-xs font-light max-w-xl mx-auto leading-relaxed">
                Submit website parameters below. Our analysts will conduct draft checks detailing crawler sitemaps and indexing gaps within 24 business hours.
              </p>

              {/* Steps Progress Checklist Indicator */}
              {!proposalSuccess && (
                <div className="pt-4 text-left">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold uppercase mb-1.5">
                    <span>Diagnostic Engine:</span>
                    <span className="text-indigo-600 font-extrabold">
                      {proposalStep === 1 && "STEP 1 of 3 (Company Profiles)"}
                      {proposalStep === 2 && "STEP 2 of 3 (Goal Configurations)"}
                      {proposalStep === 3 && "STEP 3 of 3 (Contact Verification)"}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 border border-slate-200/80 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-indigo h-full transition-all duration-300"
                      style={{ width: `${(proposalStep / 3) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Audit proposal submission wizard */}
            {!proposalSuccess ? (
              <form onSubmit={submitProposal} className="space-y-6 text-left">
                
                {/* Step 1: Baseline parameters info */}
                {proposalStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Company name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Zenith Brands LLC"
                          value={proposalForm.companyName}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, companyName: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Website URL *</label>
                        <input 
                          type="url" 
                          required
                          placeholder="e.g. https://yourcompany.com"
                          value={proposalForm.companyUrl}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, companyUrl: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Estimated Monthly Advertising Spend Bracket *</label>
                      <select 
                        required
                        value={proposalForm.budget}
                        onChange={(e) => setProposalForm(prev => ({ ...prev, budget: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-600 focus:outline-none focus:border-brand-indigo font-semibold cursor-pointer"
                      >
                        <option value="" disabled>Select estimated budget bracket...</option>
                        <option value="low_scale">$2,000 - $5,000 / mo</option>
                        <option value="mid_scale">$5,000 - $15,000 / mo</option>
                        <option value="high_enterprise">$15,000 - $50,050 / mo</option>
                        <option value="top_tier">$50,000+ / mo</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button 
                        type="button" 
                        onClick={handleProposalNext}
                        className="bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        Next: Select Goals <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Goal selection */}
                {proposalStep === 2 && (
                  <div className="space-y-5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Pick optimization channels to evaluate (select all matching):</label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input 
                          type="checkbox" 
                          checked={proposalForm.interestedChannels.seo}
                          onChange={(e) => setProposalForm(prev => ({ 
                            ...prev, 
                            interestedChannels: { ...prev.interestedChannels, seo: e.target.checked }
                          }))}
                          className="mt-1 accent-brand-indigo rounded w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-bold text-brand-navy block">Organic Search (SEO)</span>
                          <span className="text-[10px] text-slate-500 font-light">Evaluate crawler maps and structural topical depth.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input 
                          type="checkbox" 
                          checked={proposalForm.interestedChannels.aiseo}
                          onChange={(e) => setProposalForm(prev => ({ 
                            ...prev, 
                            interestedChannels: { ...prev.interestedChannels, aiseo: e.target.checked }
                          }))}
                          className="mt-1 accent-brand-indigo rounded w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-bold text-brand-navy block">AI Recommendation (GEO/AEO)</span>
                          <span className="text-[10px] text-slate-500 font-light">Evaluate conversational prompt retrieval citations.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input 
                          type="checkbox" 
                          checked={proposalForm.interestedChannels.ppc}
                          onChange={(e) => setProposalForm(prev => ({ 
                            ...prev, 
                            interestedChannels: { ...prev.interestedChannels, ppc: e.target.checked }
                          }))}
                          className="mt-1 accent-brand-indigo rounded w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-bold text-brand-navy block">Paid PPC Conversion Optimization</span>
                          <span className="text-[10px] text-slate-500 font-light">Evaluate search waste structures and negative list depth.</span>
                        </div>
                      </label>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button 
                        type="button" 
                        onClick={() => setProposalStep(1)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-bold font-mono"
                      >
                        ← Back Section
                      </button>
                      <button 
                        type="button" 
                        onClick={handleProposalNext}
                        className="bg-brand-indigo hover:bg-opacity-95 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        Next: Verified Name <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact verification */}
                {proposalStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Your full name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. John Doe"
                          value={proposalForm.contactName}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, contactName: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Business email address *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="e.g. name@company.com"
                          value={proposalForm.contactEmail}
                          onChange={(e) => setProposalForm(prev => ({ ...prev, contactEmail: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-brand-indigo font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Brief operational checklist / targets (optional)</label>
                      <textarea 
                        rows={3}
                        placeholder="List specific keywords, technical goals, or current agency friction details..."
                        value={proposalForm.notes}
                        onChange={(e) => setProposalForm(prev => ({ ...prev, notes: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button 
                        type="button" 
                        onClick={() => setProposalStep(2)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-bold font-mono"
                      >
                        ← Back Section
                      </button>
                      <button 
                        type="submit" 
                        disabled={proposalSubmitting}
                        className="bg-brand-orange hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {proposalSubmitting ? "Generating Proposal Queue..." : "Secure Campaign Proposal"}
                      </button>
                    </div>
                  </div>
                )}

              </form>
            ) : (
              /* Success results state */
              <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-brand-emerald mx-auto animate-bounce" />
                <h4 className="text-xl font-extrabold font-display text-brand-navy">
                  Strategic Proposal Secured!
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto">
                  Thank you, <strong className="text-slate-900 font-bold">{proposalForm.contactName}</strong>. Our organic SEO analysts have queued the audit profile for <strong className="text-brand-indigo font-bold">{proposalForm.companyUrl}</strong>. A strategists will submit complete diagnostics containing 30 keyword options to your email queue within 24 business hours.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={resetProposalForm}
                    className="bg-brand-navy hover:bg-brand-slate text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Request Another Strategic Audit
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="faq" className="py-20 md:py-24 bg-white border-t border-slate-200 scroll-mt-20 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-4 font-display">
              COMMON QUESTIONS
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-brand-navy">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does AI SEO / GEO differ from traditional organic search rankings?",
                a: "Classic SEO positions sitemap keywords and backlinks to secure rank placements inside standard listings. AI SEO & Generative Engine Optimization (GEO) restructures database entity relationship schemas as JSON-LD blocks so LLMs like ChatGPT and Gemini citation-proof and summarize your brand as leading options."
              },
              {
                q: "What is included in the free custom website performance audit?",
                a: "Our free customized strategic review charts target keyword ranges, maps sitemap crawling redirects, identifies page load bottlenecks below 1.0s, and prepares a concrete diagnostic checklist for your developer team."
              },
              {
                q: "Do you offer tailored performance price models?",
                a: "Yes! For e-commerce stores and technical technical brands with verifyable CRM attribution capabilities, we offer tailored revenue-share options to minimize upfront retainers."
              }
            ].map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 font-extrabold font-display text-sm sm:text-base text-brand-navy flex justify-between items-center focus:outline-none cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className="text-brand-indigo font-bold">{isOpen ? "✕" : "＋"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs text-slate-500 leading-relaxed font-light border-t border-slate-200/50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
        </>
      )}

      {/* COMMON FOOTER FOR WHOLE WEBSITE */}
      <Footer 
        openProposal={() => {
          const formEl = document.querySelector('#audit-form');
          formEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        openDownloadModal={() => setDownloadModalOpen(true)}
      />



      {/* PDF STRATEGY GUIDE DOWNLOAD MODAL */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl text-left space-y-6 relative">
            <button 
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 text-base font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center text-brand-indigo text-xl mx-auto">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-extrabold font-display text-brand-navy">
                Download Strategy Report Card
              </h4>
              <p className="text-xs text-slate-500 font-light max-w-xs mx-auto leading-relaxed">
                Provide your work email below to download your comprehensive case strategy guide (PDF).
              </p>
            </div>

            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Work email address</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. founder@company.com"
                  value={modalEmail}
                  onChange={(e) => setModalEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-orange hover:bg-opacity-95 text-white font-extrabold py-3 rounded-xl text-xs transition-style shadow"
              >
                Request secure strategy copy
              </button>
            </form>

            {modalSuccess && (
              <div className="text-center text-xs font-bold text-brand-emerald bg-emerald-50 border border-emerald-150 py-3 rounded-xl">
                 ✓ Strategy copy transmitted to your email queue!
              </div>
            )}
          </div>
        </div>
      )}

      {/* CORE INTEGRATION SMART SEARCH DIALOG */}
      <SmartSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* CORE INTEGRATION CHAT HELPER CHATBOX */}
      <Chatbox />

      {/* GLOBAL DYNAMIC PRE-FILLED WHATSAPP FLOATING BUTTON */}
      <WhatsAppWidget currentPage={currentPage} />

    </div>
  );
}

import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as ReactHelmetAsync from 'react-helmet-async';
const Helmet: any = (ReactHelmetAsync as any).Helmet || (ReactHelmetAsync as any).default?.Helmet || ReactHelmetAsync;
import { 
  Share2, Users, CheckCircle2, ArrowRight, Phone, Mail, 
  BarChart3, Sparkles, Target, Layers, Compass, 
  ChevronDown, Send, ShieldCheck, TrendingUp, Award,
  Check, ArrowUpRight, MessageSquare, Video, Globe,
  HelpCircle, Eye, RefreshCw, FileText, Zap, Star
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { captureLead } from '../utils/leadCapture';

interface SocialMediaOptimizationServicesPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
  onNavigate?: (href: string) => void;
}

interface ServiceModule {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  platformBadge?: string;
}

export default function SocialMediaOptimizationServicesPage({ 
  onBackToHome, 
  openProposalForm, 
  onNavigate 
}: SocialMediaOptimizationServicesPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492?text=Hello%20AKGLS%20Group%2C%20I%20am%20interested%20in%20your%20Social%20Media%20Optimization%20(SMO)%20Services.%20Please%20share%20details.';

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    platforms: {
      linkedin: true,
      instagram: true,
      facebook: false,
      youtube: false,
      x: false
    },
    goal: 'Brand Visibility & Authority',
    profileUrls: '',
    notes: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Industry Tab state
  const [activeIndustry, setActiveIndustry] = useState<'b2b' | 'realestate' | 'healthcare' | 'education' | 'ecommerce'>('b2b');

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmitAuditForm = async (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    const selectedPlatforms = Object.entries(formData.platforms)
      .filter(([_, checked]) => checked)
      .map(([name]) => name.toUpperCase())
      .join(', ');

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      companyName: formData.company || 'Not provided',
      serviceRequested: 'Social Media Optimization Services',
      notes: `Goal: ${formData.goal} | Platforms: ${selectedPlatforms || 'None selected'} | Profiles: ${formData.profileUrls || 'N/A'} | Notes: ${formData.notes || 'None'}`
    };

    try {
      captureLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.company,
        websiteUrl: formData.profileUrls,
        primaryGoal: formData.goal,
        pageTitle: 'Social Media Optimization Services',
        notes: payload.notes
      });

      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => null);

      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  // 9 Core SMO Services
  const coreServices: ServiceModule[] = [
    {
      id: 'profile-optimization',
      number: '01',
      title: 'Social Media Profile Optimization',
      description: 'Your profiles create the initial impression of your brand. We audit and calibrate bio descriptions, visual branding, links, and keyword discovery across every channel.',
      bullets: [
        'Profile and company page structural audits',
        'Bio, value proposition, and business description enhancement',
        'Profile avatar, cover image, and visual asset recommendations',
        'Relevant industry keyword and primary category mapping',
        'Website tracking links, action buttons, and contact verification',
        'Cross-platform brand consistency and visual cohesion'
      ],
      icon: 'Target',
      platformBadge: 'All Platforms'
    },
    {
      id: 'content-strategy',
      number: '02',
      title: 'Social Media Content Strategy',
      description: 'A compounding social presence begins with a disciplined content roadmap. We identify audience interests, core pillars, and high-retention formats for consistent publishing.',
      bullets: [
        'Audience intent research and competitor content gap analysis',
        'Strategic content pillars and monthly topic matrices',
        'Structured 30-day publishing schedules and editorial calendars',
        'Harmonized blend of educational, authority, and promotional posts',
        'Smart content repurposing frameworks for cross-network efficiency',
        'High-converting calls to action mapped directly to business pipelines'
      ],
      icon: 'Compass',
      platformBadge: 'Content Engine'
    },
    {
      id: 'linkedin-optimization',
      number: '03',
      title: 'LinkedIn Optimization & B2B Organic Growth',
      description: 'For B2B companies, SaaS founders, and corporate leaders, LinkedIn is the primary engine for executive authority, commercial trust, and enterprise pipeline generation.',
      bullets: [
        'Company page positioning, banner messaging, and SEO keyword alignment',
        'Executive personal branding and thought leadership frameworks',
        'Educational carousel designs and deep-dive industry analyses',
        'Employee advocacy playbooks and team distribution workflows',
        'B2B relationship nurturing and inbound partnership positioning',
        'Monthly connection growth, engagement benchmarks, and profile metrics'
      ],
      icon: 'Share2',
      platformBadge: 'B2B & SaaS'
    },
    {
      id: 'instagram-optimization',
      number: '04',
      title: 'Instagram Optimization & Visual Authority',
      description: 'Turn your Instagram profile into a cohesive digital storefront that attracts relevant followers, boosts search discoverability, and fosters authentic audience relationships.',
      bullets: [
        'Bio optimization with search-indexed keywords and link-in-bio hubs',
        'Strategic Story Highlights organization with custom branded covers',
        'High-retention Reels hook strategies and educational video scripts',
        'Aesthetic grid structure and typography guideline alignment',
        'Hashtag architecture and Instagram Search SEO keyword indexing',
        'Proactive community engagement strategies with complementary brands'
      ],
      icon: 'Sparkles',
      platformBadge: 'Visual & D2C'
    },
    {
      id: 'facebook-optimization',
      number: '05',
      title: 'Facebook Business Page Optimization',
      description: 'Strengthen your local presence, service visibility, and customer communication through a fully optimized Meta business footprint.',
      bullets: [
        'Complete Meta Business Suite setup and verification guidance',
        'Action-oriented primary call-to-action button configuration',
        'Services menu, product catalog, and about-section modernization',
        'Community group engagement workflows and brand moderation',
        'Customer review generation systems and social proof highlights',
        'Organic post scheduling optimized for algorithmic feed distribution'
      ],
      icon: 'Layers',
      platformBadge: 'Local & Community'
    },
    {
      id: 'youtube-optimization',
      number: '06',
      title: 'YouTube Channel Optimization & Video SEO',
      description: 'As the world second-largest search engine, YouTube demands deep keyword integration, high-click thumbnails, and structured playlists that keep viewers engaged.',
      bullets: [
        'Channel art, trailer, and about-section keyword architecture',
        'Search-optimized video titles, detailed descriptions, and chapter timestamps',
        'High-contrast thumbnail design concepts engineered for peak CTR',
        'Thematic playlist structuring for prolonged channel watch time',
        'End-screen, cards, and community tab engagement workflows',
        'Video SEO integration targeting Google Universal Video search carousels'
      ],
      icon: 'Video',
      platformBadge: 'Video Search'
    },
    {
      id: 'audit-competitor',
      number: '07',
      title: 'Social Media Audit & Competitor Analysis',
      description: 'Get total clarity on where your brand currently stands and uncover unexploited content gaps your direct competitors are overlooking.',
      bullets: [
        'Comprehensive health check of all active and inactive social profiles',
        'Direct competitor positioning, engagement rates, and format analysis',
        'Audience demographic verification and active engagement window audit',
        'Brand sentiment evaluation and inbound customer inquiry review',
        'Actionable SWOT matrix highlighting immediate low-hanging growth wins',
        'Clear strategic roadmap detailing quick fixes vs long-term milestones'
      ],
      icon: 'BarChart3',
      platformBadge: 'Intelligence'
    },
    {
      id: 'community-management',
      number: '08',
      title: 'Community Management & Engagement Workflows',
      description: 'Social algorithms reward brands that converse, not just broadcast. We build structured workflows to interact with your audience and foster real brand advocacy.',
      bullets: [
        'Structured comment moderation protocols and brand voice guidelines',
        'Inbound direct message response playbooks for rapid lead qualification',
        'Proactive engagement with industry leaders, clients, and partners',
        'Brand reputation monitoring and early crisis response procedures',
        'User-generated content (UGC) sourcing and reposting frameworks',
        'Community feedback aggregation delivered directly to your product team'
      ],
      icon: 'Users',
      platformBadge: 'Engagement'
    },
    {
      id: 'analytics-reporting',
      number: '09',
      title: 'Social Media Analytics & Performance Reporting',
      description: 'Cut through vanity metrics. We provide clear, monthly executive reports linking social activity directly to brand reach, engagement, and website conversions.',
      bullets: [
        'Monthly KPI dashboards tracking net reach, impressions, and follower quality',
        'Platform-by-platform engagement rate benchmarking against industry averages',
        'Top-performing content post-mortems to double down on winning formats',
        'Social referral traffic tracking and conversion attribution in Google Analytics',
        'Audience growth trajectory and demographic interest evolution',
        'Continuous strategy recommendations for the upcoming 30-day cycle'
      ],
      icon: 'TrendingUp',
      platformBadge: 'Attribution'
    }
  ];

  // 6-Step Process
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Social Audit',
      desc: 'We analyze your current social media profiles, audience demographics, brand consistency, and historical performance to benchmark baseline metrics.'
    },
    {
      step: '02',
      title: 'Audience & Competitor Intelligence',
      desc: 'We evaluate your top competitors, identify what content resonates in your industry, and map the exact search queries and topics your prospective buyers engage with.'
    },
    {
      step: '03',
      title: 'Strategy & Pillar Architecture',
      desc: 'We establish 4 to 6 strategic content pillars, define platform-specific roles, and build a monthly editorial calendar aligned with your revenue goals.'
    },
    {
      step: '04',
      title: 'Profile & Visual Asset Optimization',
      desc: 'We overhaul bios, categories, header banners, links, and profile photos to ensure every channel projects supreme credibility from the first second.'
    },
    {
      step: '05',
      title: 'Content Execution & Engagement',
      desc: 'We publish search-optimized posts, engage with active industry conversations, moderate comments, and cultivate meaningful relationships.'
    },
    {
      step: '06',
      title: 'Performance Review & Refinement',
      desc: 'We measure reach, engagement rates, referral traffic, and brand mentions to continuously fine-tune messaging, timing, and creative hooks.'
    }
  ];

  // 10 Strategic FAQs
  const faqs = [
    {
      q: 'What is the difference between Social Media Optimization (SMO) and Social Media Marketing (SMM)?',
      a: 'Social Media Optimization (SMO) focuses on improving the quality, discoverability, and organic presentation of your profiles and content without relying on paid advertising budgets. Social Media Marketing (SMM), in traditional terminology, often refers to paid advertising campaigns (sponsored ads, boosted posts, PPC) where you pay per click or impression. SMO establishes the essential brand authority and trust that makes all other marketing—including paid ads—significantly more effective.'
    },
    {
      q: 'How long does it take to see organic results from Social Media Optimization?',
      a: 'Initial improvements in brand presentation, profile clarity, and search discoverability happen immediately within the first 14 to 30 days as profiles are audited and revamped. Meaningful compounding improvements in organic reach, follower quality, and audience engagement typically mature over 60 to 90 days of consistent, high-value publishing.'
    },
    {
      q: 'Which social media platforms should my business focus on?',
      a: 'The right platforms depend entirely on your target audience, business model, and resources. B2B and SaaS companies usually achieve the highest ROI from LinkedIn and YouTube. Visual and lifestyle brands, direct-to-consumer businesses, and local practices thrive on Instagram and Facebook. We conduct a thorough audience analysis during our audit to recommend the 2 to 4 platforms with the highest conversion potential.'
    },
    {
      q: 'Does social media optimization help our website SEO rankings?',
      a: 'Yes, both directly and indirectly. Active, optimized social profiles frequently rank on Page 1 of Google for branded search queries, providing positive brand SERP real estate. Furthermore, high-quality social content drives referral traffic, increases dwell time, earns editorial backlinks from content creators, and reinforces entity signals across search and generative AI answer engines.'
    },
    {
      q: 'Can AKGLS Group produce both visual graphics and copywriting for our social media?',
      a: 'Yes. Our complete SMO service packages include end-to-end creative support: strategic copy briefs, compelling captions, educational carousel designs, Reel hook scripts, custom infographics, and branded template systems designed to maintain strict visual consistency.'
    },
    {
      q: 'Do you manage paid social media ad campaigns as well?',
      a: 'Yes. While this pillar page focuses on organic Social Media Optimization (SMO), AKGLS Group also operates dedicated Paid Advertising teams specializing in Meta Ads (Facebook & Instagram Ads), LinkedIn Ads, and YouTube Ads. We frequently integrate organic SMO with paid retargeting to maximize customer lifetime value.'
    },
    {
      q: 'What metrics do you track to measure SMO success?',
      a: 'We avoid vanity metrics and focus on indicators that reflect genuine business impact: profile visits, search impressions, organic reach, engagement rates (saves, shares, thoughtful comments), follower growth quality, social referral traffic in Google Analytics, and inbound direct message inquiries.'
    },
    {
      q: 'How does Social Media Optimization support Generative Engine Optimization (GEO) and AI search engines?',
      a: 'Conversational AI models like ChatGPT Search, Perplexity, Claude, and Google AI Overviews crawl social media channels, LinkedIn company pages, YouTube transcripts, and authoritative brand profiles to determine brand legitimacy and consensus. An active, well-optimized social ecosystem feeds consistent entity data directly to these LLMs.'
    },
    {
      q: 'Do you offer customized SMO packages for startups and growing businesses?',
      a: 'Yes. We customize our scope based on your current growth phase, team bandwidth, and strategic objectives. Whether you need an initial foundational profile audit with brand guidelines, executive thought leadership on LinkedIn, or an ongoing multi-platform monthly optimization retainer, we structure a plan that fits.'
    },
    {
      q: 'How do we get started with AKGLS Group for social media optimization?',
      a: 'Getting started is straightforward. Request a Free Social Media Audit using the form on this page or message our team directly via WhatsApp or telephone (+91 831 811 4492). We will review your existing profiles, run a competitive gap check, and schedule a 30-minute discovery session to walk through actionable growth opportunities.'
    }
  ];

  // Schema Markup
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.akglsgroup.com/social-media-optimization-services/#service",
        "name": "Social Media Optimization Services",
        "serviceType": "Social Media Optimization (SMO)",
        "description": "Strengthen your social media presence with strategic profile optimization, audience-focused content, platform-specific discoverability, and performance-driven engagement.",
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://www.akglsgroup.com",
          "telephone": "+918318114492",
          "email": "info@akglsgroup.com",
          "sameAs": [
            "https://www.linkedin.com/company/akglsgroup",
            "https://www.instagram.com/akglsgroup/",
            "https://x.com/akglsgroup"
          ]
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Social Media Optimization Capabilities",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Profile Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Content Strategy" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn B2B Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instagram Brand Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "YouTube Channel Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Community Management Workflows" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.akglsgroup.com/social-media-optimization-services/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.akglsgroup.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.akglsgroup.com/#capabilities-explorer"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Social Media Optimization Services",
            "item": "https://www.akglsgroup.com/social-media-optimization-services"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.akglsgroup.com/social-media-optimization-services/#faq",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-200 font-sans selection:bg-brand-indigo selection:text-white">
      {/* Helmet Meta Tags */}
      <Helmet>
        <title>Social Media Optimization Services | AKGLS Group</title>
        <meta 
          name="description" 
          content="Improve brand visibility and engagement with AKGLS Group's social media optimization services. Request a social media audit today." 
        />
        <link rel="canonical" href="https://www.akglsgroup.com/social-media-optimization-services" />
        <meta property="og:title" content="Social Media Optimization Services | AKGLS Group" />
        <meta property="og:description" content="Improve brand visibility and engagement with AKGLS Group's social media optimization services. Request a social media audit today." />
        <meta property="og:url" content="https://www.akglsgroup.com/social-media-optimization-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.akglsgroup.com/assets/aistudio/Modern_corporate_reception_with_friendly_staff_17977f83.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Optimization Services | AKGLS Group" />
        <meta name="twitter:description" content="Improve brand visibility and engagement with AKGLS Group's social media optimization services. Request a social media audit today." />
        <meta name="twitter:image" content="https://www.akglsgroup.com/assets/aistudio/Modern_corporate_reception_with_friendly_staff_17977f83.png" />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      {/* TOP NAVIGATION / BREADCRUMB STRIP */}
      <div className="border-b border-slate-850/80 bg-[#080d19]/80 backdrop-blur-md sticky top-[61px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button 
              type="button"
              onClick={onBackToHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold focus-visible:outline-none focus-visible:text-brand-indigo"
            >
              Home
            </button>
            <span className="text-slate-600">/</span>
            <a 
              href="#capabilities-explorer" 
              onClick={(e) => handleLinkClick(e, '#capabilities-explorer')}
              className="hover:text-white transition-colors font-semibold"
            >
              Services
            </a>
            <span className="text-slate-600">/</span>
            <span className="text-indigo-300 font-bold">Social Media Optimization</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp consultation with AKGLS social strategist"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Direct WhatsApp</span>
            </a>
            <a
              href="#audit-form"
              onClick={(e) => handleLinkClick(e, '#audit-form')}
              className="text-xs font-bold bg-brand-indigo/20 hover:bg-brand-indigo/30 text-indigo-300 border border-brand-indigo/40 px-3 py-1.5 rounded-lg transition-colors"
            >
              Request Free Audit
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient atmospheric gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-24 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            
            {/* Zero-Pill Monospace Eyebrow with Dot Separator */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>ORGANIC SOCIAL MEDIA OPTIMIZATION (SMO) SERVICES</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">BRAND DISCOVERABILITY & TRUST</span>
            </div>

            {/* H1 Primary Header */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.12] text-white tracking-tight">
              Social Media Optimization Services That Build Brand Visibility and Business Growth
            </h1>

            {/* Subtitle / Lead Paragraphs */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Strengthen your social media presence with strategic profile optimization, audience-focused content, platform-specific discoverability, and performance-driven engagement.
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
              AKGLS Group helps businesses build a consistent, credible, and discoverable social media presence across relevant platforms. Our social media optimization (SMO) services focus on improving brand presentation, connecting with the right audience, encouraging meaningful interactions, and turning social media activity into measurable business opportunities.
            </p>

            {/* Target verticals highlight */}
            <div className="pt-2 text-xs text-slate-400 border-t border-slate-850/80 max-w-2xl mx-auto">
              <span className="text-slate-300 font-semibold">Specialized playbooks for:</span> B2B companies · SaaS brands · Real estate developers · Healthcare clinics · Educational institutions · Direct-to-consumer ecommerce.
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#audit-form"
                onClick={(e) => handleLinkClick(e, '#audit-form')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-indigo via-indigo-600 to-brand-purple hover:opacity-95 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
              >
                <span>Request a Free Social Media Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-[#0c121e] hover:bg-slate-850 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-brand-indigo" />
                <span>Talk to Our Social Media Experts</span>
              </a>
            </div>

            {/* FEATURED BANNER SECTION: CORPORATE STRATEGY HEADQUARTERS & SPECIALIST TEAM */}
            <div className="pt-6 sm:pt-8 text-left">
              <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-indigo-500/20 via-slate-800/40 to-slate-900/80 border border-slate-750/80 shadow-2xl shadow-indigo-950/60 backdrop-blur-sm">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] max-h-[540px] bg-slate-900 group">
                  <img 
                    src="/assets/aistudio/Modern_corporate_reception_with_friendly_staff_17977f83.png"
                    alt="AKGLS Group corporate headquarters and social media optimization team"
                    className="w-full h-full object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="eager"
                  />
                  
                  {/* Subtle dark gradient overlay for text readability & enterprise polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/95 via-black/20 to-black/30 pointer-events-none" />
                  
                  {/* Floating Top-Left Badge: HQ & Live Desk */}
                  <div className="absolute top-3 sm:top-5 left-3 sm:left-5 flex items-center gap-2 bg-[#0c121e]/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 shadow-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-bold">AKGLS Global HQ</span>
                    <span className="text-slate-600 hidden sm:inline">|</span>
                    <span className="text-slate-300 hidden sm:inline">Dedicated Social Media Strategy Desk</span>
                  </div>

                  {/* Floating Top-Right Badge: In-House Strategists */}
                  <div className="hidden md:flex absolute top-5 right-5 items-center gap-2 bg-[#0c121e]/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 shadow-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Human-Led Strategy · Zero AI Slop</span>
                  </div>

                  {/* Floating Bottom Card: Value Proposition & Mission Banner */}
                  <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0a0f1d]/90 backdrop-blur-md border border-slate-750/90 p-3 sm:p-4 rounded-xl shadow-2xl text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center shrink-0 text-white font-black text-sm shadow-md shadow-indigo-600/30">
                        A
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 flex-wrap">
                          <span>AKGLS Social Media Operations Center</span>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-brand-indigo/30 text-indigo-300 border border-brand-indigo/40 font-semibold">
                            Ctrl+Alt+Del for Brand Invisibility
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1">
                          Strategic organic positioning across LinkedIn, Instagram, YouTube, X & Meta with zero vanity metrics.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <a
                        href="#audit-form"
                        onClick={(e) => handleLinkClick(e, '#audit-form')}
                        className="text-xs font-bold text-white bg-brand-indigo hover:bg-brand-indigo/90 px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <span>Meet Our Strategists</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="bg-[#0c121e]/80 border border-slate-850 rounded-xl p-4">
                <div className="text-2xl font-black text-white font-display">100%</div>
                <div className="text-xs text-slate-400 mt-1">Cross-Platform Consistency</div>
              </div>
              <div className="bg-[#0c121e]/80 border border-slate-850 rounded-xl p-4">
                <div className="text-2xl font-black text-indigo-400 font-display">9+</div>
                <div className="text-xs text-slate-400 mt-1">Core SMO Disciplines</div>
              </div>
              <div className="bg-[#0c121e]/80 border border-slate-850 rounded-xl p-4">
                <div className="text-2xl font-black text-teal-400 font-display">Zero</div>
                <div className="text-xs text-slate-400 mt-1">Empty Vanity Metrics</div>
              </div>
              <div className="bg-[#0c121e]/80 border border-slate-850 rounded-xl p-4">
                <div className="text-2xl font-black text-purple-400 font-display">Full Funnel</div>
                <div className="text-xs text-slate-400 mt-1">Integrated with SEO & CRO</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: WHAT IS SOCIAL MEDIA OPTIMIZATION (SMO)? */}
      <section className="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              FOUNDATIONAL DEFINITION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              What Is Social Media Optimization (SMO)?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Social Media Optimization (SMO) is the structured process of improving a brand&apos;s social media profiles, content, publishing strategy, and audience engagement to strengthen its online presence and help people discover and interact with the business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed bg-[#0c121e] border border-slate-800 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                The Core Mechanics of Effective SMO
              </h3>
              <p>
                Effective SMO combines strategic profile optimization, relevant content creation, platform-specific best practices, community engagement, and performance analysis. It helps businesses present a consistent brand identity and create useful experiences for their target audience across social platforms.
              </p>
              <p>
                Unlike paid social media advertising, which uses advertising budgets to distribute campaigns, organic SMO focuses on improving the quality, discoverability, and effectiveness of a brand&apos;s unpaid social media presence. Both approaches can complement each other within a broader digital marketing strategy.
              </p>
              <p className="text-slate-400 text-xs pt-2 border-t border-slate-800">
                At AKGLS Group, we approach SMO as an integrated part of digital growth, connecting social media activity with your website, content marketing, SEO, and lead-generation objectives.
              </p>
            </div>

            {/* SMO vs SMM Comparison Card */}
            <div className="bg-[#0c121e] border border-indigo-500/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-brand-indigo" />
                Why Organic SMO Precedes Paid Advertising
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                When prospects click on a paid ad, over 65% will click through to your brand profile before visiting your website. If your profile is dormant, inconsistent, or lacks social proof, your paid ad spend is instantly wasted.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Compounding Digital Assets</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Optimized posts and profiles remain permanently discoverable and searchable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                  <div className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Zero Recurring Media Spend</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Organic reach and audience referrals compound without paying per click or impression.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                  <div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Cross-Channel Entity Proof</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">AI engines (ChatGPT, Perplexity) and Google verify brand credibility via social activity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: 9 CORE SOCIAL MEDIA OPTIMIZATION SERVICES */}
      <section id="services-grid" className="py-16 md:py-24 bg-[#05070a] border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              SERVICE DIRECTORY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              Our Social Media Optimization Services
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Nine end-to-end disciplines covering strategic profile configuration, multi-platform publishing calendars, executive personal branding, and high-fidelity video SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                className="bg-[#0c121e] border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      SERVICE {service.number}
                    </span>
                    {service.platformBadge && (
                      <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                        {service.platformBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-display group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-850 pt-4 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-1.5">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-400 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850">
                  <a
                    href="#audit-form"
                    onClick={(e) => handleLinkClick(e, '#audit-form')}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center justify-between group/link"
                  >
                    <span>Audit this channel for your brand</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: COMPARISON TABLE (SMO vs PAID SOCIAL SMM) */}
      <section className="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              STRATEGIC COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
              Social Media Optimization (SMO) vs. Paid Social Advertising (SMM)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Understand the core operational and commercial differences between organic profile optimization and paid social ad distribution to allocate your digital marketing budget intelligently.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-[#0c121e]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-[#080d19]">
                  <th className="py-4 px-4 sm:px-6 font-extrabold text-slate-300 uppercase tracking-wider text-xs font-mono w-1/4">
                    Dimension
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-extrabold text-indigo-300 uppercase tracking-wider text-xs font-mono w-[38%] border-l border-slate-800 bg-indigo-950/20">
                    Social Media Optimization (SMO)
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-extrabold text-slate-400 uppercase tracking-wider text-xs font-mono w-[37%] border-l border-slate-800">
                    Paid Social Advertising (SMM)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white bg-slate-900/40">
                    Primary Focus
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 bg-indigo-950/10 text-slate-200">
                    Organic profile authority, content quality, search discoverability, and audience relationship building.
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 text-slate-400">
                    Immediate audience targeting, sponsored impressions, direct-response ad creative, and paid clicks.
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white bg-slate-900/40">
                    Cost Model
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 bg-indigo-950/10 text-slate-200">
                    Fixed monthly strategy and execution investment; zero recurring cost per click or per thousand impressions.
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 text-slate-400">
                    Continuous media ad spend (CPM/CPC) required; incoming traffic halts the moment budget is exhausted.
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white bg-slate-900/40">
                    Speed of Impact
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 bg-indigo-950/10 text-slate-200">
                    Immediate profile revamp in 14–30 days; compounding organic authority and inbound reach over 60–90 days.
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 text-slate-400">
                    Near-immediate visibility within 24 to 48 hours of ad campaign approval and budget launch.
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white bg-slate-900/40">
                    Asset Longevity
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 bg-indigo-950/10 text-slate-200">
                    Permanent digital equity: posts, YouTube videos, LinkedIn carousels, and bios remain indexed indefinitely.
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 text-slate-400">
                    Ephemeral: ad creatives vanish from user feeds the instant ad campaigns are paused.
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white bg-slate-900/40">
                    Buyer Perception
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 bg-indigo-950/10 text-slate-200">
                    Perceived as credible, authoritative thought leadership and authentic community presence.
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 text-slate-400">
                    Recognized as sponsored promotional material; users frequently scroll past without engagement.
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white bg-slate-900/40">
                    Best Strategic Role
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 bg-indigo-950/10 text-slate-200 font-semibold text-emerald-400">
                    Foundational brand credibility, organic pipeline, SEO reinforcement, and high-trust B2B positioning.
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 border-l border-slate-850 text-slate-400">
                    Rapid product launches, seasonal flash promotions, retargeting website visitors, and immediate lead volume.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center text-xs text-slate-400">
            <span className="font-semibold text-slate-300">AKGLS Recommendation:</span> Pair foundational SMO with targeted PPC to lower customer acquisition costs and increase overall funnel conversion.
          </div>

        </div>
      </section>

      {/* SECTION: 6-STEP PROVEN SMO PROCESS */}
      <section className="py-16 md:py-24 bg-[#05070a] border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              METHODICAL ROADMAP
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              Our 6-Step Social Media Optimization Process
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              A disciplined, repeatable methodology that turns dormant social accounts into structured engines of organic discovery and commercial pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-[#0c121e] border border-slate-850 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="text-3xl font-black font-display text-indigo-400/40 mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: INDUSTRY-SPECIFIC SOLUTIONS (INTERACTIVE TABS) */}
      <section className="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              SECTOR ADAPTATION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              Industry-Specific Social Media Optimization
            </h2>
            <p className="text-slate-400 text-sm">
              We tailor content pillars, tone of voice, visual formats, and platform selection to the unique compliance and buyer dynamics of your industry.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: 'b2b', label: 'B2B & SaaS' },
              { id: 'realestate', label: 'Real Estate & Property' },
              { id: 'healthcare', label: 'Healthcare & Medical' },
              { id: 'education', label: 'Education & EdTech' },
              { id: 'ecommerce', label: 'Ecommerce & D2C' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveIndustry(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeIndustry === tab.id
                    ? 'bg-brand-indigo text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-[#0c121e] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content cards */}
          <div className="max-w-4xl mx-auto bg-[#0c121e] border border-slate-800 rounded-2xl p-6 sm:p-8">
            {activeIndustry === 'b2b' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-white font-display">
                    B2B, Enterprise Technology & SaaS Brands
                  </h3>
                  <span className="text-xs font-mono font-bold text-indigo-400">Primary: LinkedIn & YouTube</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  B2B decision-makers evaluate software and consulting providers on LinkedIn before booking a demo. We engineer executive thought leadership, case study breakdowns, product roadmap highlights, and carousel carousels that establish category authority.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Founder & C-Suite personal branding</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Whitepaper & gated resource promotion</span>
                  </div>
                </div>
              </div>
            )}

            {activeIndustry === 'realestate' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-white font-display">
                    Real Estate Developers, Agents & Architecture
                  </h3>
                  <span className="text-xs font-mono font-bold text-indigo-400">Primary: Instagram, YouTube & Facebook</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Real estate buyers crave visual transparency and neighborhood context. We optimize video walkthroughs, project construction milestones, drone reels, and customer testimonials to drive qualified property inquiries.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>High-retention architectural walkthrough Reels</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Localized geotagging & neighborhood spotlights</span>
                  </div>
                </div>
              </div>
            )}

            {activeIndustry === 'healthcare' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-white font-display">
                    Healthcare Clinics, Medical Practices & Wellness
                  </h3>
                  <span className="text-xs font-mono font-bold text-indigo-400">Primary: Instagram, YouTube & LinkedIn</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Healthcare marketing requires profound empathy and strict compliance with medical advertising standards. We craft patient education snippets, doctor credential spotlights, clinic tour highlights, and preventive care guidance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Patient education & FAQ video snippets</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Specialist credentialing & verified reviews</span>
                  </div>
                </div>
              </div>
            )}

            {activeIndustry === 'education' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-white font-display">
                    Educational Institutions, Universities & EdTech
                  </h3>
                  <span className="text-xs font-mono font-bold text-indigo-400">Primary: YouTube, Instagram & LinkedIn</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Prospective students and their parents research academic programs and campus life heavily on social media. We highlight alumni placement stories, faculty research breakthroughs, admission deadlines, and interactive webinar highlights.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Alumni career outcome spotlights</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Admission countdowns & virtual campus tours</span>
                  </div>
                </div>
              </div>
            )}

            {activeIndustry === 'ecommerce' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                  <h3 className="text-lg font-bold text-white font-display">
                    Ecommerce Brands & Direct-to-Consumer (D2C)
                  </h3>
                  <span className="text-xs font-mono font-bold text-indigo-400">Primary: Instagram, TikTok & YouTube</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Modern ecommerce brands require consistent social proof, styling advice, unboxing reels, and user-generated content curation that drives spontaneous checkouts and builds community loyalty.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>UGC curation & aesthetic customer unboxings</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Instagram Shop link & seasonal gift guides</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION: DELIVERABLES CHECKLIST ("WHAT IS INCLUDED") */}
      <section className="py-16 md:py-24 bg-[#05070a] border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              TRANSPARENT DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
              What Is Included in Our Social Media Optimization Packages
            </h2>
            <p className="text-slate-400 text-sm">
              Every partnership includes concrete, measurable assets produced and managed by our in-house strategists, designers, and copywriters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Profile Architecture Overhaul",
                desc: "Bio re-engineering, keyword integration, unified handles, link-in-bio hub setup, category calibration, and action CTA button configuration."
              },
              {
                title: "Monthly Content Publishing Calendar",
                desc: "15 to 30 custom post concepts, educational carousels, Reel scripts, and infographic briefs scheduled with optimal time slot modeling."
              },
              {
                title: "Custom Branded Graphic Templates",
                desc: "Editable Figma or Canva asset guidelines, typography rules, brand color palettes, and Story Highlight icon packages."
              },
              {
                title: "Platform-Specific Keyword & Tag Matrix",
                desc: "Proprietary hashtag architectures and native search keyword lists mapped specifically to your industry niche and buyer intent."
              },
              {
                title: "Inbound Community Response Playbook",
                desc: "Pre-approved response trees for customer comments, common FAQs, and high-priority lead qualification workflows in direct messages."
              },
              {
                title: "Executive Monthly Analytics & Review Call",
                desc: "Comprehensive Looker Studio or PDF report detailing net reach, audience quality, top posts, referral traffic, and strategic adjustments."
              }
            ].map((del, dIdx) => (
              <div 
                key={dIdx}
                className="bg-[#0c121e] border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <h3 className="text-sm font-bold text-white font-display">
                      {del.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-7">
                    {del.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: INTERACTIVE SOCIAL MEDIA AUDIT FORM */}
      <section id="audit-form" className="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-850 relative scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              FREE COMPLIMENTARY EVALUATION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              Request Your Free Social Media Audit
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Submit your profiles below. Our senior social strategist will review your brand consistency, competitor gaps, and profile SEO, returning an actionable evaluation within 24 hours.
            </p>
          </div>

          <div className="bg-[#0c121e] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Audit Request Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our senior social strategists are evaluating your brand presence and will email your custom audit report within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 underline"
                  >
                    Submit another domain or inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitAuditForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#05070a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Work Email <span className="text-indigo-400">*</span>
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#05070a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Company / Website URL
                    </label>
                    <input 
                      type="text"
                      placeholder="https://company.com"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#05070a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Phone or WhatsApp Number
                    </label>
                    <input 
                      type="tel"
                      placeholder="+1 (555) 012-3456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#05070a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Platform checkboxes */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Primary Channels You Want Optimized:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {[
                      { key: 'linkedin', label: 'LinkedIn' },
                      { key: 'instagram', label: 'Instagram' },
                      { key: 'facebook', label: 'Facebook' },
                      { key: 'youtube', label: 'YouTube' },
                      { key: 'x', label: 'X / Twitter' }
                    ].map((item) => (
                      <label 
                        key={item.key}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer select-none transition-colors ${
                          formData.platforms[item.key as keyof typeof formData.platforms]
                            ? 'bg-indigo-950/40 border-indigo-500/50 text-white font-bold'
                            : 'bg-[#05070a] border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <input 
                          type="checkbox"
                          checked={formData.platforms[item.key as keyof typeof formData.platforms]}
                          onChange={(e) => setFormData({
                            ...formData,
                            platforms: {
                              ...formData.platforms,
                              [item.key]: e.target.checked
                            }
                          })}
                          className="rounded border-slate-700 text-indigo-600 focus:ring-0"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Primary Growth Goal */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Primary Social Growth Objective
                  </label>
                  <select 
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-[#05070a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option>Brand Visibility & Authority</option>
                    <option>B2B Inbound Lead Generation</option>
                    <option>Follower & Community Growth</option>
                    <option>Executive Personal Branding (Founder/CEO)</option>
                    <option>Website Referral Traffic & SEO Support</option>
                  </select>
                </div>

                {/* Profile Links & Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Social Profile URLs or Handles
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g. linkedin.com/company/brand, @brand_instagram"
                    value={formData.profileUrls}
                    onChange={(e) => setFormData({ ...formData, profileUrls: e.target.value })}
                    className="w-full bg-[#05070a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Current Challenges or Specific Goals (Optional)
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your target audience, current bottlenecks, or upcoming product launches..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#05070a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-indigo via-indigo-600 to-brand-purple hover:opacity-95 shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Submitting Audit Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Free Audit Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2.5">
                    100% Confidential. No credit card required. Includes competitor gap review.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* SECTION: 10 STRATEGIC FAQS */}
      <section className="py-16 md:py-24 bg-[#05070a] border-t border-slate-850">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              Social Media Optimization FAQs
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Clear, verified answers regarding timelines, deliverables, platform selection, and the synergy between SMO, SEO, and paid advertising.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="bg-[#0c121e] border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(fIdx)}
                  aria-expanded={openFaqIndex === fIdx}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span className="text-sm font-bold text-white font-display">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaqIndex === fIdx ? 'rotate-180 text-indigo-400' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {openFaqIndex === fIdx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-850/80">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: INTERNAL LINKING & INTEGRATED GROWTH HUB */}
      <section className="py-16 md:py-20 bg-[#0a0f1d] border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              CROSS-DISCIPLINE SYNERGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Connect Social Media With Full-Funnel Growth
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Social Media Optimization functions best when combined with technical search visibility, conversational AI optimization, and paid acquisition. Explore our complementary services:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { title: "SEO Services", path: "/seo-services" },
              { title: "GEO Services", path: "/geo-services" },
              { title: "AEO Services", path: "/aeo-services" },
              { title: "Meta Ads (PPC)", path: "/meta-ads-services" },
              { title: "LinkedIn Ads", path: "/linkedin-ads-services" },
              { title: "Case Studies", path: "/seo-case-studies" }
            ].map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className="p-3.5 bg-[#0c121e] border border-slate-800 hover:border-indigo-500/50 rounded-xl text-center group transition-colors"
              >
                <div className="text-xs font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                  {link.title}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 flex items-center justify-center gap-1 group-hover:text-slate-400">
                  <span>Explore</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL BOTTOM CALL TO ACTION BANNER */}
      <section className="py-12 bg-gradient-to-r from-brand-indigo/15 via-[#0c121e] to-brand-purple/15 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Ready to Build a Discoverable, High-Converting Social Presence?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a confidential 30-minute consultation with AKGLS Group&apos;s social media architects today.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#audit-form"
              onClick={(e) => handleLinkClick(e, '#audit-form')}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-indigo hover:bg-indigo-500 transition-colors shadow-lg"
            >
              Get Free Social Media Audit
            </a>
            <a
              href={`tel:${CONTACT_NUMBER.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-300 bg-slate-900 border border-slate-700 hover:text-white transition-colors"
            >
              Call Us: {CONTACT_NUMBER}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

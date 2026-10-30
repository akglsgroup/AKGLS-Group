import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderSharedHeaderHtml, renderHeaderScript } from '../src/utils/headerTemplate';
import { renderSharedFooterHtml, renderFooterScript } from '../src/utils/footerTemplate';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

const serviceModules = [
  {
    number: "01",
    title: "Social Media Profile Optimization",
    badge: "Cross-Platform Foundation",
    description: "Your social media profiles often create the first impression of your business. We optimize profile information, descriptions, visual identity, contact details, website links, and relevant keywords to help users understand your brand and find the information they need.",
    bullets: [
      "Comprehensive profile and company page audits",
      "Bio, description, and business information revamps",
      "Profile photo, cover banner, and branding design specifications",
      "Strategic keyword and industry category tagging",
      "Website links, UTM tracking, and contact details verification",
      "Visual and messaging consistency across all active platforms"
    ]
  },
  {
    number: "02",
    title: "Social Media Content Strategy",
    badge: "Audience & Cadence Engine",
    description: "A consistent social media presence starts with a clear content strategy. We identify relevant topics, audience interests, brand messaging, and content formats to create a structured publishing plan aligned with your business objectives.",
    bullets: [
      "Audience persona and competitive content gap research",
      "Strategic content pillars and topical authority planning",
      "Monthly social media publishing calendars with clear approval workflows",
      "Balanced mix of educational, promotional, and brand-building content",
      "Cross-platform content repurposing blueprints",
      "High-intent calls to action designed for organic inquiry generation"
    ]
  },
  {
    number: "03",
    title: "LinkedIn Optimization & Organic B2B Growth",
    badge: "B2B & Professional Services",
    description: "For B2B businesses, technology companies, consultants, and professional service providers, LinkedIn is the premier channel to support thought leadership, relationship building, and organic discovery.",
    bullets: [
      "Company page architecture, showcase pages, and CTA button configuration",
      "Executive profile and founder thought leadership optimization",
      "B2B organic post formatting (documents, carousels, text frameworks, polls)",
      "Employee advocacy workflows and team distribution guidelines",
      "Industry hashtag mapping and algorithmic reach optimization",
      "Direct conversion paths to website case studies and whitepapers"
    ]
  },
  {
    number: "04",
    title: "Instagram Brand & Visual Strategy",
    badge: "Visual Discovery & D2C",
    description: "Instagram serves as a powerful discovery and trust-building platform for lifestyle brands, real estate developers, healthcare clinics, and creative agencies. We elevate your aesthetic and discoverability.",
    bullets: [
      "High-converting bio, category tag, and Linktree/direct URL architecture",
      "Branded Story Highlight cover designs and customer journey categorization",
      "Educational carousel design direction and save-worthy infographic concepts",
      "Reel hook structures, caption copy briefs, and trending audio strategies",
      "Location tags, collaborative tags, and discoverability enhancements",
      "Grid aesthetic and cohesive brand palette standardization"
    ]
  },
  {
    number: "05",
    title: "YouTube Channel & Video Optimization",
    badge: "Video Search Engine & GEO",
    description: "As the world's second-largest search engine, YouTube provides enduring evergreen discoverability. We optimize your channel and video assets to win both YouTube search and Google AI Overviews.",
    bullets: [
      "Channel banner, icon, trailer, and 'About' metadata optimization",
      "High-CTR thumbnail design guidelines and title copywriting frameworks",
      "Keyword-targeted video descriptions with timestamped chapter markers",
      "Playlist taxonomy and topical series structuring for maximum session duration",
      "End screen and info card configuration driving channel subscriptions and leads",
      "Closed caption (SRT) and transcript optimization for AI answer engine indexing"
    ]
  },
  {
    number: "06",
    title: "Community Engagement & Social Care",
    badge: "Reputation & Relationship Building",
    description: "Social media is an interactive two-way channel. Meaningful community management builds trust, strengthens brand sentiment, and turns casual followers into loyal brand advocates.",
    bullets: [
      "SOPs for comment responses, DM qualification, and FAQs",
      "Proactive engagement on industry leaders' and prospects' posts",
      "Social care escalation playbooks for customer service inquiries",
      "Brand sentiment monitoring and rapid reputation protection",
      "User-generated content (UGC) sourcing and community spotlighting",
      "Live Q&A session planning and interactive story poll management"
    ]
  },
  {
    number: "07",
    title: "Social Listening & Trend Monitoring",
    badge: "Market Intelligence",
    description: "Stay ahead of industry shifts, competitor moves, and emerging conversational topics. We monitor brand mentions, category discussions, and customer sentiment across social channels.",
    bullets: [
      "Brand name, competitor, and executive mention tracking",
      "Industry trend detection and real-time newsjacking opportunities",
      "Audience sentiment analysis and perception tracking over time",
      "Competitive content performance benchmarking and format breakdowns",
      "Identification of frequently asked customer questions for content planning",
      "Early detection of PR risks or negative sentiment spikes"
    ]
  },
  {
    number: "08",
    title: "Influencer & Collaborative Outreach",
    badge: "Partnership Amplification",
    description: "Amplify your organic reach and credibility through strategic partnerships with respected voices, niche creators, and complementary industry brands.",
    bullets: [
      "Identification of vetted, brand-aligned micro and macro creators",
      "Audience authenticity and engagement rate verification (zero fake followers)",
      "Collaborative content co-creation briefs (podcast swaps, live webinars, guest posts)",
      "Outreach templates, compensation negotiation, and agreement frameworks",
      "Campaign tracking, unique attribution links, and deliverables management",
      "Long-term ambassador relationship building for sustainable brand advocacy"
    ]
  },
  {
    number: "09",
    title: "Analytics, Social Performance & Insights",
    badge: "Data-Driven ROI",
    description: "We deliver transparent monthly reporting that connects social activity to real business value, examining engagement quality, referral traffic, and brand discoverability.",
    bullets: [
      "Custom monthly performance dashboards with scannable executive summaries",
      "Analysis of top-performing content formats, topics, and publishing times",
      "Audience demographic shifts, follower quality, and geographic distribution",
      "Google Analytics 4 social referral traffic and assisted conversion tracking",
      "Actionable strategic recommendations for upcoming monthly sprints",
      "Quarterly strategy reviews to align SMO with company business milestones"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Comprehensive Audit",
    desc: "We analyze your existing social profiles, visual assets, historical post metrics, competitor positioning, and brand guidelines to establish a clear performance baseline."
  },
  {
    step: "02",
    title: "Audience & Competitive Gap Mapping",
    desc: "We identify your target buyer personas, their active platforms, conversational themes, and uncover content gaps that competitors are overlooking."
  },
  {
    step: "03",
    title: "Content Strategy & Pillar Architecture",
    desc: "We build your core topical pillars, define specific post formats (carousels, videos, text insights), and create a monthly publishing calendar."
  },
  {
    step: "04",
    title: "Channel & Asset Optimization",
    desc: "We rewrite bios, redesign banners, update contact links, configure CTA buttons, and implement strategic keyword tagging across all brand profiles."
  },
  {
    step: "05",
    title: "Publishing & Community Management",
    desc: "We execute scheduled publishing, manage community interactions, respond to direct inquiries, and proactively engage in relevant industry discussions."
  },
  {
    step: "06",
    title: "Performance Tracking & Sprints",
    desc: "We analyze engagement rates, reach trends, referral traffic, and conversion data in monthly reviews to continuously refine content topics and formats."
  }
];

const faqs = [
  {
    q: "What is the difference between Social Media Optimization (SMO) and Social Media Marketing (SMM)?",
    a: "Social Media Optimization (SMO) focuses on improving the quality, discoverability, and organic presentation of your profiles and content without relying on paid advertising budgets. Social Media Marketing (SMM) often refers to paid advertising campaigns (sponsored ads, boosted posts, PPC) where you pay per click or impression. SMO establishes the essential brand authority and trust that makes all other marketing—including paid ads—significantly more effective."
  },
  {
    q: "How long does it take to see organic results from Social Media Optimization?",
    a: "Initial improvements in brand presentation, profile clarity, and search discoverability happen immediately within the first 14 to 30 days as profiles are audited and revamped. Compounding improvements in organic reach, follower quality, and audience engagement typically mature over 60 to 90 days of consistent publishing."
  },
  {
    q: "Which social media platforms should my business focus on?",
    a: "The right platforms depend entirely on your target audience, business model, and resources. B2B and SaaS companies usually achieve the highest ROI from LinkedIn and YouTube. Visual and lifestyle brands, direct-to-consumer businesses, and local practices thrive on Instagram and Facebook."
  },
  {
    q: "Does social media optimization help our website SEO rankings?",
    a: "Yes, both directly and indirectly. Active, optimized social profiles frequently rank on Page 1 of Google for branded search queries, providing positive brand SERP real estate. Furthermore, high-quality social content drives referral traffic, increases dwell time, earns editorial backlinks from content creators, and reinforces entity signals across search and generative AI answer engines."
  },
  {
    q: "Can AKGLS Group produce both visual graphics and copywriting for our social media?",
    a: "Yes. Our complete SMO service packages include end-to-end creative support: strategic copy briefs, compelling captions, educational carousel designs, Reel hook scripts, custom infographics, and branded template systems designed to maintain strict visual consistency."
  },
  {
    q: "Do you manage paid social media ad campaigns as well?",
    a: "Yes. While organic Social Media Optimization (SMO) builds long-term equity, AKGLS Group also operates dedicated Paid Advertising teams specializing in Meta Ads (Facebook & Instagram Ads), LinkedIn Ads, and YouTube Ads."
  },
  {
    q: "What metrics do you track to measure SMO success?",
    a: "We avoid vanity metrics and focus on indicators that reflect genuine business impact: profile visits, search impressions, organic reach, engagement rates (saves, shares, thoughtful comments), follower growth quality, social referral traffic in Google Analytics, and inbound direct message inquiries."
  },
  {
    q: "How does Social Media Optimization support Generative Engine Optimization (GEO) and AI search engines?",
    a: "Conversational AI models like ChatGPT Search, Perplexity, Claude, and Google AI Overviews crawl social media channels, LinkedIn company pages, YouTube transcripts, and authoritative brand profiles to determine brand legitimacy and consensus. An active, well-optimized social ecosystem feeds consistent entity data directly to these LLMs."
  },
  {
    q: "Do you offer customized SMO packages for startups and growing businesses?",
    a: "Yes. We customize our scope based on your current growth phase, team bandwidth, and strategic objectives. Whether you need an initial foundational profile audit with brand guidelines, executive thought leadership on LinkedIn, or an ongoing multi-platform monthly optimization retainer, we structure a plan that fits."
  },
  {
    q: "How do we get started with AKGLS Group for social media optimization?",
    a: "Getting started is straightforward. Request a Free Social Media Audit using the form on this page or message our team directly via WhatsApp or telephone (+91 831 811 4492). We will review your existing profiles, run a competitive gap check, and schedule a 30-minute discovery session to walk through actionable growth opportunities."
  }
];

export function generateSmoHtml(): string {
  const fullUrl = "https://www.akglsgroup.com/social-media-optimization-services/";
  const title = "Social Media Optimization Services | AKGLS Group";
  const description = "Improve brand visibility and engagement with AKGLS Group's social media optimization services. Request a social media audit today.";
  const bannerImage = "https://www.akglsgroup.com/assets/aistudio/Modern_corporate_reception_with_friendly_staff_17977f83.png";

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        "url": fullUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.akglsgroup.com/#website",
          "name": "AKGLS Group",
          "url": "https://www.akglsgroup.com"
        }
      },
      {
        "@type": "Service",
        "@id": `${fullUrl}#service`,
        "name": "Social Media Optimization Services",
        "serviceType": "Social Media Optimization (SMO)",
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "AKGLS Group",
          "url": "https://www.akglsgroup.com",
          "telephone": "+918318114492",
          "email": "info@akglsgroup.com",
          "sameAs": [
            "https://www.linkedin.com/company/akglsgroup",
            "https://x.com/akglsgroup",
            "https://www.instagram.com/akglsgroup/",
            "https://www.facebook.com/akglsgroup/"
          ]
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Social Media Optimization Capabilities",
          "itemListElement": serviceModules.map((m) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": m.title,
              "description": m.description
            }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${fullUrl}#faq`,
        "mainEntity": faqs.map((item) => ({
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

  return `<!doctype html>
<html lang="en">
  <head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MRPCQQN');</script>
    <!-- End Google Tag Manager -->

    <!-- Google tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FPG5D0GNNF"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FPG5D0GNNF');
    </script>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="qfDMo5MD2Sq1sBny_nq0o1lhXs-G0zDZS20K8MUM70w" />
    <script>
      (function() {
        if (typeof window !== 'undefined' && window.location) {
          var host = (window.location.hostname || '').toLowerCase();
          var proto = window.location.protocol;
          if (host === 'akglsgroup.com' || host === 'akgls.com' || host === 'www.akgls.com') {
            window.location.replace('https://www.akglsgroup.com' + window.location.pathname + window.location.search + window.location.hash);
          } else if (host === 'www.akglsgroup.com' && proto === 'http:') {
            window.location.replace('https://www.akglsgroup.com' + window.location.pathname + window.location.search + window.location.hash);
          }
        }
      })();
    </script>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Highly Optimized SEO Meta Tags -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${fullUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- Open Graph (OG) Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${bannerImage}" />
    <meta property="og:site_name" content="AKGLS Group" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${fullUrl}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${bannerImage}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
              display: ['Space Grotesk', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
              brand: {
                dark: '#050b15',
                navy: '#0c121e',
                slate: '#05070a',
                indigo: '#3b82f6',
                purple: '#8b5cf6',
                teal: '#06b6d4',
                emerald: '#10b981',
                orange: '#f97316',
                card: '#0f1c35',
                border: '#1e2e4a',
                cyan: '#00d0ff',
                pink: '#ec4899',
              }
            }
          }
        }
      }
    </script>
    <style>
      body {
        background-color: #05070a;
        color: #e2e8f0;
        font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
      }
      .font-sans {
        font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif !important;
      }
    </style>

    <script type="application/ld+json">
      ${JSON.stringify(pageSchema, null, 2)}
    </script>
  </head>
  <body class="min-h-screen bg-[#05070a] text-slate-200 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRPCQQN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    ${renderSharedHeaderHtml()}

    <!-- TOP NAVIGATION / BREADCRUMB STRIP -->
    <div class="border-b border-slate-800 bg-[#080d19]/80 backdrop-blur-md sticky top-[61px] z-30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2 text-xs text-slate-400">
          <a href="/" class="hover:text-white transition-colors flex items-center gap-1 font-semibold">Home</a>
          <span class="text-slate-600">/</span>
          <a href="/#capabilities-explorer" class="hover:text-white transition-colors font-semibold">Services</a>
          <span class="text-slate-600">/</span>
          <span class="text-indigo-300 font-bold">Social Media Optimization</span>
        </div>

        <div class="flex items-center gap-3">
          <a 
            href="https://wa.me/918318114492?text=Hello%20AKGLS%20Group%2C%20I%20am%20interested%20in%20your%20Social%20Media%20Optimization%20(SMO)%20Services.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            <span>Direct WhatsApp</span>
          </a>
          <a
            href="#audit-form"
            class="text-xs font-bold bg-blue-600/20 hover:bg-blue-600/30 text-indigo-300 border border-blue-500/40 px-3 py-1.5 rounded-lg transition-colors"
          >
            Request Free Audit
          </a>
        </div>
      </div>
    </div>

    <!-- MAIN BODY -->
    <main class="flex-grow">
      
      <!-- HERO SECTION -->
      <section class="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none"></div>
        <div class="absolute top-24 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-5xl mx-auto text-center space-y-6">
            
            <div class="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-indigo-400">
              <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <span>ORGANIC SOCIAL MEDIA OPTIMIZATION (SMO) SERVICES</span>
              <span class="text-slate-600">·</span>
              <span class="text-slate-400">BRAND DISCOVERABILITY &amp; TRUST</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.12] text-white tracking-tight">
              Social Media Optimization Services That Build Brand Visibility and Business Growth
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Strengthen your social media presence with strategic profile optimization, audience-focused content, platform-specific discoverability, and performance-driven engagement.
            </p>

            <p class="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
              AKGLS Group helps businesses build a consistent, credible, and discoverable social media presence across relevant platforms. Our social media optimization (SMO) services focus on improving brand presentation, connecting with the right audience, encouraging meaningful interactions, and turning social media activity into measurable business opportunities.
            </p>

            <div class="pt-2 text-xs text-slate-400 border-t border-slate-800 max-w-2xl mx-auto">
              <span class="text-slate-300 font-semibold">Specialized playbooks for:</span> B2B companies · SaaS brands · Real estate developers · Healthcare clinics · Educational institutions · Direct-to-consumer ecommerce.
            </div>

            <!-- Dual CTAs -->
            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#audit-form"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
              >
                <span>Request a Free Social Media Audit</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>

              <a
                href="tel:+918318114492"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-[#0c121e] hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
              >
                <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>Talk to Our Social Media Experts</span>
              </a>
            </div>

            <!-- FEATURED BANNER SECTION: CORPORATE STRATEGY HEADQUARTERS & SPECIALIST TEAM -->
            <div class="pt-6 sm:pt-8 text-left">
              <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-indigo-500/20 via-slate-800/40 to-slate-900/80 border border-slate-700/80 shadow-2xl shadow-indigo-950/60 backdrop-blur-sm">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] max-h-[540px] bg-slate-900 group">
                  <img 
                    src="/assets/aistudio/Modern_corporate_reception_with_friendly_staff_17977f83.png"
                    alt="AKGLS Group corporate headquarters and social media optimization team"
                    class="w-full h-full object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="eager"
                  />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-[#05070a]/95 via-black/20 to-black/30 pointer-events-none"></div>
                  
                  <!-- Floating Top-Left Badge -->
                  <div class="absolute top-3 sm:top-5 left-3 sm:left-5 flex items-center gap-2 bg-[#0c121e]/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 shadow-xl">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span class="text-emerald-400 font-bold">AKGLS Global HQ</span>
                    <span class="text-slate-600 hidden sm:inline">|</span>
                    <span class="text-slate-300 hidden sm:inline">Dedicated Social Media Strategy Desk</span>
                  </div>

                  <!-- Floating Top-Right Badge -->
                  <div class="hidden md:flex absolute top-5 right-5 items-center gap-2 bg-[#0c121e]/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 shadow-xl">
                    <svg class="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Human-Led Strategy · Zero AI Slop</span>
                  </div>

                  <!-- Floating Bottom Card -->
                  <div class="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0a0f1d]/90 backdrop-blur-md border border-slate-700/90 p-3 sm:p-4 rounded-xl shadow-2xl text-left">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 text-white font-black text-sm shadow-md shadow-indigo-600/30">
                        A
                      </div>
                      <div>
                        <div class="text-xs sm:text-sm font-bold text-white flex items-center gap-2 flex-wrap">
                          <span>AKGLS Social Media Operations Center</span>
                          <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-600/30 text-indigo-300 border border-blue-500/40 font-semibold">
                            Ctrl+Alt+Del for Brand Invisibility
                          </span>
                        </div>
                        <p class="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1">
                          Strategic organic positioning across LinkedIn, Instagram, YouTube, X &amp; Meta with zero vanity metrics.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <a
                        href="#audit-form"
                        class="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <span>Meet Our Strategists</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Trust Metrics Bar -->
            <div class="pt-6 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div class="bg-[#0c121e]/80 border border-slate-800 rounded-xl p-4">
                <div class="text-2xl font-black text-white font-display">100%</div>
                <div class="text-xs text-slate-400 mt-1">Cross-Platform Consistency</div>
              </div>
              <div class="bg-[#0c121e]/80 border border-slate-800 rounded-xl p-4">
                <div class="text-2xl font-black text-indigo-400 font-display">9+</div>
                <div class="text-xs text-slate-400 mt-1">Core SMO Disciplines</div>
              </div>
              <div class="bg-[#0c121e]/80 border border-slate-800 rounded-xl p-4">
                <div class="text-2xl font-black text-teal-400 font-display">Zero</div>
                <div class="text-xs text-slate-400 mt-1">Empty Vanity Metrics</div>
              </div>
              <div class="bg-[#0c121e]/80 border border-slate-800 rounded-xl p-4">
                <div class="text-2xl font-black text-purple-400 font-display">Full Funnel</div>
                <div class="text-xs text-slate-400 mt-1">Integrated with SEO &amp; CRO</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SECTION: WHAT IS SOCIAL MEDIA OPTIMIZATION (SMO)? -->
      <section class="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-800 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl space-y-4 mb-12">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              FOUNDATIONAL DEFINITION
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              What Is Social Media Optimization (SMO)?
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Social Media Optimization (SMO) is the structured process of improving a brand's social media profiles, content, publishing strategy, and audience engagement to strengthen its online presence and help people discover and interact with the business.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div class="space-y-4 text-sm text-slate-300 leading-relaxed bg-[#0c121e] border border-slate-800 p-6 sm:p-8 rounded-2xl">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                <span>Organic Social Media Optimization (SMO)</span>
              </h3>
              <p>
                Effective SMO combines complete profile optimization, relevant content creation, platform-specific best practices, community engagement, and performance analysis. It helps businesses present a consistent brand identity and create useful experiences for their target audience across social platforms.
              </p>
              <ul class="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-400 font-bold">✓</span>
                  <span><strong>Zero Media Spend Dependency:</strong> Builds sustainable organic authority without ongoing ad clicks cost.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-400 font-bold">✓</span>
                  <span><strong>Long-Term Entity Authority:</strong> Trains search engines and AI models (Perplexity, ChatGPT) to recognize your brand.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-400 font-bold">✓</span>
                  <span><strong>High-Trust Social Proof:</strong> Organic peer discussions, thoughtful comments, and executive authority.</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4 text-sm text-slate-300 leading-relaxed bg-[#0c121e] border border-slate-800 p-6 sm:p-8 rounded-2xl">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                <span>SMO vs Paid Social Media Advertising (SMM)</span>
              </h3>
              <p>
                Unlike paid social media advertising, which uses advertising budgets to distribute campaigns, organic SMO focuses on improving the quality, discoverability, and effectiveness of a brand's unpaid social media presence. Both approaches complement each other within a broader digital marketing strategy.
              </p>
              <p class="text-xs text-slate-400">
                At AKGLS Group, we approach SMO as an integrated part of digital growth, connecting social media activity with your website, content marketing, SEO, and lead-generation objectives.
              </p>
              <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span class="text-slate-400">Need paid campaign management too?</span>
                <a href="/google-ads-services" class="text-indigo-400 hover:text-indigo-300 font-bold">Explore Paid Ads &rarr;</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: OUR SOCIAL MEDIA OPTIMIZATION SERVICES (9 MODULES) -->
      <section id="services-grid" class="py-16 md:py-24 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl space-y-4 mb-14 text-left">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              CORE CAPABILITIES
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              Our Social Media Optimization Services
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide end-to-end organic social optimization spanning profile configuration, editorial planning, community nurturing, and cross-channel attribution.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            ${serviceModules.map((service) => `
              <div class="bg-[#0c121e] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/30 group">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-indigo-400 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                      MODULE ${service.number}
                    </span>
                    <span class="text-[11px] font-mono font-medium text-slate-400">
                      ${service.badge}
                    </span>
                  </div>

                  <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    ${service.title}
                  </h3>

                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    ${service.description}
                  </p>

                  <div class="pt-3 border-t border-slate-800/80">
                    <div class="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider mb-2.5">
                      Included Workflows:
                    </div>
                    <ul class="space-y-2 text-xs text-slate-300">
                      ${service.bullets.map((b) => `
                        <li class="flex items-start gap-2">
                          <span class="text-indigo-400 shrink-0 font-bold">›</span>
                          <span class="leading-snug">${b}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <div class="pt-6 mt-6 border-t border-slate-850 flex items-center justify-between text-xs">
                  <a 
                    href="#audit-form"
                    class="text-indigo-400 hover:text-indigo-300 font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Request Audit</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- SECTION: 6-STEP PROCESS -->
      <section class="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-800 relative text-left">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl space-y-4 mb-14">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              METHODOLOGY &amp; ROADMAP
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              Our 6-Step Social Media Optimization Process
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              We follow a structured framework to establish clarity, improve discoverability, and turn social media engagement into qualified commercial opportunities.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${processSteps.map((step) => `
              <div class="bg-[#0c121e] border border-slate-800 rounded-2xl p-6 space-y-3 relative overflow-hidden">
                <div class="text-3xl font-black font-display text-slate-700">
                  ${step.step}
                </div>
                <h3 class="text-base sm:text-lg font-bold text-white">
                  ${step.title}
                </h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ${step.desc}
                </p>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- SECTION: WHY INVEST IN ORGANIC SMO -->
      <section class="py-16 md:py-24 border-t border-slate-800 relative text-left">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl space-y-4 mb-14">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              BUSINESS VALUE &amp; ROI
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              Why Invest in Organic Social Media Optimization?
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Social media is not just a broadcasting channel; it is your business's live reputation and interactive discovery gateway.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 class="text-base font-bold text-white">1. Brand Credibility and Trust</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prospects check your social profiles before signing deals or booking services. Active, well-optimized profiles create immediate authority and trust.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 class="text-base font-bold text-white">2. Search &amp; AI Discoverability</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google frequently displays social media profiles, YouTube videos, and LinkedIn articles in search results and AI Overviews, expanding your digital footprint.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 class="text-base font-bold text-white">3. High-Intent Referral Traffic</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Optimized profiles direct engaged users straight to high-converting case studies, landing pages, and lead forms on your website.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 class="text-base font-bold text-white">4. Long-Term Community Equity</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Unlike ads that stop delivering the second budgets run dry, an organic follower base continues to consume, share, and support your content.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 class="text-base font-bold text-white">5. Improved Paid Ad Performance</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ad prospects regularly click on the sponsor's profile before purchasing. An active, vibrant profile significantly boosts paid ad conversion rates.
              </p>
            </div>

            <div class="bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-indigo-700/50 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 class="text-base font-bold text-white">Ready to elevate your social channels?</h3>
                <p class="text-xs text-indigo-200 mt-2">
                  Get a personalized, comprehensive gap audit of your current profiles with actionable recommendations.
                </p>
              </div>
              <a href="#audit-form" class="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-white">
                <span>Start Your Audit</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: TAILORED STRATEGIES BY INDUSTRY -->
      <section class="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-800 relative text-left">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl space-y-4 mb-14">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              INDUSTRY-SPECIFIC PLAYBOOKS
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              Tailored SMO Strategies by Industry
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every vertical requires a distinct channel mix, tone of voice, and conversion pathway. We customize our approach to your buyers.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-2.5">
              <span class="text-xs font-mono font-bold text-indigo-400">B2B &amp; TECHNOLOGY / SAAS</span>
              <h3 class="text-base font-bold text-white">Thought Leadership &amp; Pipeline</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                LinkedIn and YouTube optimization, founder personal branding, product update breakdowns, and case study carousels designed to reach enterprise decision-makers.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-2.5">
              <span class="text-xs font-mono font-bold text-teal-400">REAL ESTATE &amp; PROPERTY</span>
              <h3 class="text-base font-bold text-white">Visual Tours &amp; Trust Building</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Instagram and YouTube video walk-throughs, neighborhood highlight reels, developer milestone updates, and localized community engagement.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-2.5">
              <span class="text-xs font-mono font-bold text-emerald-400">HEALTHCARE &amp; CLINICS</span>
              <h3 class="text-base font-bold text-white">Patient Education &amp; Reputation</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Doctor credentials, patient recovery stories, preventive health tips, and verified clinic business information that respects medical privacy.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-2.5">
              <span class="text-xs font-mono font-bold text-purple-400">EDUCATION &amp; EDTECH</span>
              <h3 class="text-base font-bold text-white">Student Enrollment &amp; Alumni Pride</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Campus life stories, student achievements, career outcome metrics, and faculty spotlight videos that drive application interest.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-2.5">
              <span class="text-xs font-mono font-bold text-orange-400">D2C &amp; ECOMMERCE</span>
              <h3 class="text-base font-bold text-white">Product Discovery &amp; UGC</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Instagram shopping tags, unboxing reels, customer testimonials, seasonal promotions, and micro-influencer collaboration frameworks.
              </p>
            </div>

            <div class="bg-[#0c121e] border border-slate-800 p-6 rounded-2xl space-y-2.5">
              <span class="text-xs font-mono font-bold text-pink-400">HOSPITALITY &amp; LIFESTYLE</span>
              <h3 class="text-base font-bold text-white">Experiential Content &amp; Bookings</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Atmospheric video reels, guest reviews, behind-the-scenes culinary features, and interactive story polls that drive direct booking inquiries.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: MONTHLY MANAGEMENT DELIVERABLES CHECKLIST -->
      <section class="py-16 md:py-24 border-t border-slate-800 relative text-left">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl space-y-4 mb-14">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              SERVICE SCOPE
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              What's Included in Our Monthly Social Media Management?
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our monthly retainer covers end-to-end strategic planning, asset creation, publishing governance, community interaction, and attribution reporting.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">1. Monthly editorial calendar with copy briefs, hashtags &amp; CTAs</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">2. Branded graphic design (carousels, infographics, story slides)</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">3. Short-form video hook scripts and Reel/Short captioning briefs</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">4. Scheduled publishing at algorithmically optimal engagement windows</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">5. Continuous bio, link, and channel banner refreshes for promotions</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">6. Daily comment monitoring, spam filtration &amp; rapid inquiry routing</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">7. Proactive outbound engagement with complementary industry accounts</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">8. Trend and competitor performance tracking sprint reviews</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">9. Google Analytics 4 social referral traffic and goal conversion tracking</span>
            </div>
            <div class="bg-[#0c121e] border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <span class="text-emerald-400 font-black">✓</span>
              <span class="text-sm text-slate-200">10. Monthly strategy review meeting with your dedicated social architect</span>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: INTERACTIVE AUDIT FORM -->
      <section id="audit-form" class="py-16 md:py-24 bg-[#0a0f1d] border-t border-slate-800 relative text-left">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="bg-[#0c121e] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div class="space-y-4 mb-8 text-center max-w-2xl mx-auto">
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
                COMPLIMENTARY CONSULTATION
              </span>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
                Request a Free Social Media Audit
              </h2>
              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Share your website and existing social profiles. Our senior social strategists will analyze your presentation, content cadence, and competitive gaps—delivering a clear action plan within 24 hours.
              </p>
            </div>

            <form id="smoAuditForm" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    class="w-full bg-[#080d19] border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                    Business Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="s.jenkins@company.com"
                    class="w-full bg-[#080d19] border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Apex Technologies"
                    class="w-full bg-[#080d19] border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 831 811 4492"
                    class="w-full bg-[#080d19] border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  Website URL *
                </label>
                <input
                  type="url"
                  name="website"
                  required
                  placeholder="https://example.com"
                  class="w-full bg-[#080d19] border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  Social Channels to Audit / Focus On:
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                  <label class="flex items-center gap-2 p-2.5 rounded-lg bg-[#080d19] border border-slate-800 cursor-pointer">
                    <input type="checkbox" name="platform_linkedin" checked class="rounded border-slate-700 text-blue-600 focus:ring-0" />
                    <span>LinkedIn</span>
                  </label>
                  <label class="flex items-center gap-2 p-2.5 rounded-lg bg-[#080d19] border border-slate-800 cursor-pointer">
                    <input type="checkbox" name="platform_instagram" checked class="rounded border-slate-700 text-blue-600 focus:ring-0" />
                    <span>Instagram</span>
                  </label>
                  <label class="flex items-center gap-2 p-2.5 rounded-lg bg-[#080d19] border border-slate-800 cursor-pointer">
                    <input type="checkbox" name="platform_youtube" class="rounded border-slate-700 text-blue-600 focus:ring-0" />
                    <span>YouTube</span>
                  </label>
                  <label class="flex items-center gap-2 p-2.5 rounded-lg bg-[#080d19] border border-slate-800 cursor-pointer">
                    <input type="checkbox" name="platform_x" class="rounded border-slate-700 text-blue-600 focus:ring-0" />
                    <span>X (Twitter)</span>
                  </label>
                  <label class="flex items-center gap-2 p-2.5 rounded-lg bg-[#080d19] border border-slate-800 cursor-pointer">
                    <input type="checkbox" name="platform_facebook" class="rounded border-slate-700 text-blue-600 focus:ring-0" />
                    <span>Facebook</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  Existing Social Media Profile URLs / Handles
                </label>
                <input
                  type="text"
                  name="profiles"
                  placeholder="e.g. linkedin.com/company/apex, @apex_tech on IG"
                  class="w-full bg-[#080d19] border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  Current Challenges or Key Goals
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Tell us what you want to achieve: higher engagement, executive thought leadership, customer acquisition, or brand redesign..."
                  class="w-full bg-[#080d19] border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                id="smoSubmitBtn"
                class="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Free Social Media Audit</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>

              <div id="smoSuccessMessage" class="hidden text-center py-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                <div class="text-emerald-400 font-bold text-base mb-1">Audit Request Submitted!</div>
                <p class="text-xs text-slate-300">
                  Thank you. Our social media optimization team will analyze your profiles and respond within 24 hours.
                </p>
              </div>

              <p class="text-[11px] text-center text-slate-400">
                🔒 We respect your privacy. No spam. You will be connected directly with an AKGLS senior social media strategist.
              </p>
            </form>
          </div>

        </div>
      </section>

      <!-- SECTION: FAQS -->
      <section class="py-16 md:py-24 border-t border-slate-800 relative text-left">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="space-y-4 mb-14 text-center">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
              Frequently Asked Questions About SMO
            </h2>
            <p class="text-slate-300 text-xs sm:text-sm">
              Clear answers to the most common questions about our social media optimization and channel management services.
            </p>
          </div>

          <div class="space-y-3">
            ${faqs.map((faq, i) => `
              <div class="faq-item bg-[#0c121e] border border-slate-800 rounded-xl overflow-hidden">
                <button
                  type="button"
                  class="faq-toggle w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-indigo-300 transition-colors cursor-pointer"
                  data-index="${i}"
                >
                  <span>${faq.q}</span>
                  <svg class="faq-arrow w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div class="faq-answer hidden px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  ${faq.a}
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

    </main>

    ${renderSharedFooterHtml()}

    ${renderHeaderScript()}
    ${renderFooterScript()}

    <script>
      // FAQ Accordion functionality
      document.querySelectorAll('.faq-toggle').forEach(button => {
        button.addEventListener('click', () => {
          const item = button.closest('.faq-item');
          const answer = item.querySelector('.faq-answer');
          const arrow = button.querySelector('.faq-arrow');
          const isHidden = answer.classList.contains('hidden');

          document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
          document.querySelectorAll('.faq-arrow').forEach(arr => arr.classList.remove('rotate-180'));

          if (isHidden) {
            answer.classList.remove('hidden');
            arrow.classList.add('rotate-180');
          }
        });
      });

      // SMO Audit Form Submission
      const smoForm = document.getElementById('smoAuditForm');
      if (smoForm) {
        smoForm.addEventListener('submit', async function(e) {
          e.preventDefault();
          const btn = document.getElementById('smoSubmitBtn');
          const originalText = btn.innerHTML;
          btn.innerHTML = '<span>Submitting...</span>';
          btn.disabled = true;

          const formData = new FormData(smoForm);
          const platforms = [];
          if (formData.get('platform_linkedin')) platforms.push('LinkedIn');
          if (formData.get('platform_instagram')) platforms.push('Instagram');
          if (formData.get('platform_youtube')) platforms.push('YouTube');
          if (formData.get('platform_x')) platforms.push('X');
          if (formData.get('platform_facebook')) platforms.push('Facebook');

          const leadId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
          const payload = {
            id: leadId,
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone') || '',
            companyName: formData.get('company') || '',
            websiteUrl: formData.get('website') || '',
            primaryGoal: 'Social Media Optimization Services',
            notes: (formData.get('notes') || '') + ' | Target Platforms: ' + platforms.join(', ') + ' | Handles: ' + (formData.get('profiles') || ''),
            pageAddress: window.location.href,
            pageTitle: document.title,
            time: new Date().toISOString(),
            status: 'New',
            assignedTo: 'Unassigned'
          };

          // 1. Direct Cloud Firestore write
          const firestoreFields = {
            fields: {
              id: { stringValue: payload.id },
              name: { stringValue: String(payload.name) },
              email: { stringValue: String(payload.email) },
              phone: { stringValue: String(payload.phone) },
              websiteUrl: { stringValue: String(payload.websiteUrl) },
              companyName: { stringValue: String(payload.companyName) },
              primaryGoal: { stringValue: String(payload.primaryGoal) },
              notes: { stringValue: String(payload.notes) },
              pageAddress: { stringValue: String(payload.pageAddress) },
              pageTitle: { stringValue: String(payload.pageTitle) },
              time: { stringValue: payload.time },
              status: { stringValue: 'New' },
              assignedTo: { stringValue: 'Unassigned' }
            }
          };

          const firestorePromise = fetch('https://firestore.googleapis.com/v1/projects/ask-amrish/databases/(default)/documents/leads?documentId=' + encodeURIComponent(leadId) + '&key=AIzaSyAK7JkxcKSJdMeQhlj-qXE1Va4Y25jcjPw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(firestoreFields)
          }).catch(err => console.warn('[Firestore Notice]', err));

          // 2. Express Backend API call
          const apiPromise = fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }).catch(() => null);

          // 3. Save to local storage backup
          try {
            const localStr = localStorage.getItem('akgls_system_leads') || '[]';
            let localLeads = JSON.parse(localStr);
            if (!Array.isArray(localLeads)) localLeads = [];
            localLeads.unshift(payload);
            localStorage.setItem('akgls_system_leads', JSON.stringify(localLeads.slice(0, 150)));
          } catch (_) {}

          await Promise.allSettled([firestorePromise, apiPromise]);

          smoForm.reset();
          btn.classList.add('hidden');
          const success = document.getElementById('smoSuccessMessage');
          if (success) success.classList.remove('hidden');
        });
      }
    </script>
  </body>
</html>`;
}

// Generate files
const html = generateSmoHtml();
fs.writeFileSync(path.join(publicDir, 'social-media-optimization-services.html'), html, 'utf-8');
console.log('✓ Successfully wrote public/social-media-optimization-services.html');

if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'social-media-optimization-services.html'), html, 'utf-8');
  console.log('✓ Successfully wrote dist/social-media-optimization-services.html');
}

/**
 * Additional service pages rendered by the static template (src/utils/pageTemplate.ts).
 * Content is in the crawlable HTML with Service, FAQPage and BreadcrumbList schema.
 * Keep claims factual: no invented statistics, client names or reviews.
 */
import type { AppRoute } from '../routesData';

const CONTACT = { name: 'Contact AKGLS Group', href: '/contact/' };
const PRICING = { name: 'Pricing & Plans', href: '/pricing/' };

export const SERVICE_ROUTES: AppRoute[] = [
  // ------------------------------------------------------------ EMAIL MARKETING
  {
    id: 'email-marketing-services',
    path: '/email-marketing-services/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'Email Marketing & Automation Services | AKGLS Group',
    description: 'Email marketing services: automated flows, newsletters, segmentation and deliverability on Klaviyo, HubSpot, Mailchimp and Brevo. Grow repeat revenue.',
    category: 'Growth & Paid Ads',
    h1: 'Email Marketing & Automation Services',
    highlight: 'Revenue From the Audience You Already Own',
    serviceType: 'Email Marketing',
    leadParagraph: 'We plan, build and manage email and marketing automation programmes that turn subscribers into customers and customers into repeat buyers: automated flows, campaigns, segmentation and deliverability, on the platform you already use or one we set up for you.',
    features: [
      { title: 'Automated Flows', desc: 'Welcome, abandoned cart, browse abandonment, post-purchase, win-back and lead nurture sequences that work 24/7.' },
      { title: 'Campaigns & Newsletters', desc: 'A content calendar, copy, design and A/B tested subject lines for promotional and editorial emails.' },
      { title: 'Deliverability & Compliance', desc: 'SPF, DKIM and DMARC setup, list hygiene, one-click unsubscribe and consent practices that keep you in the inbox and within the law.' },
    ],
    sections: [
      {
        heading: 'Why email still drives the best return',
        paragraphs: [
          'Email is the one marketing channel you own. There is no algorithm deciding who sees your message and no cost per click. For ecommerce brands it drives repeat purchases; for B2B and service businesses it nurtures leads until they are ready to buy.',
          'Most businesses under-use it: a single welcome email, irregular newsletters and no segmentation. A structured programme of automated flows and targeted campaigns typically becomes one of the highest-return channels in the marketing mix.',
        ],
      },
      {
        heading: 'Our email marketing services',
        bullets: [
          'Email strategy, audit and roadmap',
          'Klaviyo, HubSpot, Mailchimp, Brevo and ActiveCampaign setup and migration',
          'Automated lifecycle flows for ecommerce and lead generation',
          'Segmentation by behaviour, purchase history and lead stage',
          'Email copywriting and responsive template design',
          'A/B testing of subject lines, content, offers and send times',
          'List growth: pop-ups, lead magnets and sign-up forms',
          'Deliverability monitoring and domain authentication',
          'WhatsApp and SMS automation alongside email where it fits',
        ],
      },
      {
        heading: 'Built to inbox, built to comply',
        paragraphs: [
          'Gmail and Yahoo now require bulk senders to authenticate their domains, offer one-click unsubscribe and keep spam complaint rates low. We set up authentication and list practices that meet these requirements, and follow consent rules under the GDPR, CAN-SPAM and India’s DPDP Act.',
        ],
      },
    ],
    deliverables: [
      'Email programme audit and deliverability check',
      'Core automated flows built and launched',
      'Monthly campaign calendar, copy and design',
      'Segmentation and list growth setup',
      'Monthly report on revenue, leads, opens, clicks and list health',
    ],
    faqs: [
      { q: 'Which email platforms do you work with?', a: 'We work with Klaviyo, HubSpot, Mailchimp, Brevo, ActiveCampaign and most major platforms. We can also help you choose and migrate to a new one.' },
      { q: 'Which automated emails should every business have?', a: 'At minimum a welcome series and a lead nurture or abandoned cart flow. Ecommerce brands also benefit from browse abandonment, post-purchase and win-back flows.' },
      { q: 'Why are my emails going to spam?', a: 'Common causes are missing SPF, DKIM or DMARC records, sending to old or purchased lists, and high complaint rates. Our audit checks each of these and fixes them.' },
      { q: 'Can you write and design the emails?', a: 'Yes. We handle strategy, copywriting, design, build and testing, or support your in-house team with any part of it.' },
      { q: 'How much do email marketing services cost?', a: 'It depends on the number of flows and campaigns per month. See our pricing pages or request a free audit for a fixed quote.' },
    ],
    related: [
      { name: 'Ecommerce Growth Solutions', href: '/ecommerce-growth-solutions/' },
      { name: 'B2B Lead Generation', href: '/b2b-lead-generation-services/' },
      { name: 'Conversion Rate Optimization', href: '/conversion-rate-optimization-services/' },
      { name: 'Shopify Development', href: '/shopify-development-services/' },
      { name: 'Meta Ads Services', href: '/meta-ads-services/' },
      { name: 'SaaS Marketing Solutions', href: '/saas-marketing-solutions/' },
      PRICING,
      CONTACT,
    ],
  },

  // ---------------------------------------------------------------- YOUTUBE SEO
  {
    id: 'youtube-seo-services',
    path: '/youtube-seo-services/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'YouTube SEO & Video Marketing Services | AKGLS Group',
    description: 'YouTube SEO and video marketing services: keyword research, titles, thumbnails, channel optimization, video schema and YouTube Ads to grow views and leads.',
    category: 'Search & SEO',
    h1: 'YouTube SEO & Video Marketing Services',
    highlight: 'Get Found on YouTube, Google & AI Search',
    serviceType: 'Video Search Optimization',
    leadParagraph: 'We help brands grow on YouTube, the world’s second-largest search engine, and get their videos into Google search results and AI answers. Video keyword research, optimisation, channel strategy and YouTube Ads, focused on views that turn into customers.',
    features: [
      { title: 'Video Keyword Research', desc: 'Find the questions your customers search on YouTube and Google, and plan videos that answer them.' },
      { title: 'Video & Channel Optimization', desc: 'Titles, descriptions, chapters, tags, thumbnails, playlists and channel structure built for search and click-through.' },
      { title: 'Video in Google & AI Search', desc: 'Video schema, transcripts and website embedding so your videos appear in Google’s video results, AI Overviews and assistant answers.' },
    ],
    sections: [
      {
        heading: 'Why video search matters',
        paragraphs: [
          'People search YouTube for tutorials, reviews, comparisons and how-tos, often right before they buy. Google also shows videos for many of these searches, and AI assistants increasingly cite YouTube content in their answers.',
          'A well-optimised video can bring in viewers for years. Most brand channels miss that because videos are uploaded without keyword research, searchable titles or a plan for what to publish next.',
        ],
      },
      {
        heading: 'Our YouTube SEO services',
        bullets: [
          'YouTube channel audit and competitor analysis',
          'Video topic and keyword research',
          'Search-focused titles, descriptions, chapters and tags',
          'Thumbnail concepts and click-through rate testing',
          'Playlist and channel architecture',
          'Accurate captions and transcripts',
          'VideoObject schema and video sitemaps for your website',
          'YouTube Shorts strategy',
          'YouTube Ads (in-stream, in-feed and Shorts) via Google Ads',
          'Analytics: watch time, retention, subscribers and conversions',
        ],
      },
      {
        heading: 'From views to leads and sales',
        paragraphs: [
          'We link videos to your website, landing pages and offers, and track the traffic and conversions they drive in GA4, so YouTube is measured as a growth channel rather than a vanity metric.',
        ],
      },
    ],
    deliverables: [
      'Channel and video audit with a prioritised fix list',
      'Keyword-led video content plan',
      'Optimised metadata for new and existing videos',
      'Video schema and sitemap on your website',
      'Monthly YouTube and conversion report',
    ],
    faqs: [
      { q: 'What is YouTube SEO?', a: 'YouTube SEO is optimising your videos and channel so they rank in YouTube search, appear in suggested videos and show up in Google results. It covers keywords, titles, descriptions, thumbnails, captions, engagement and channel structure.' },
      { q: 'Can you optimise videos we have already published?', a: 'Yes. Updating titles, descriptions, thumbnails, chapters and captions on existing videos is often the fastest way to grow views.' },
      { q: 'Do you produce videos?', a: 'Our focus is strategy, optimisation and promotion. We provide scripts, outlines and briefs, and can work with your videographer or in-house team.' },
      { q: 'How do videos appear in Google and AI answers?', a: 'Videos embedded on relevant website pages with VideoObject schema, clear transcripts and descriptive metadata are more likely to appear in Google video results and be cited by AI assistants.' },
      { q: 'Do you run YouTube Ads?', a: 'Yes. We manage YouTube Ads through Google Ads alongside organic growth, targeting by keyword, audience and remarketing.' },
    ],
    related: [
      { name: 'Google Ads Services', href: '/google-ads-services/' },
      { name: 'Social Media Optimization', href: '/social-media-optimization-services/' },
      { name: 'AI Search Optimization', href: '/ai-search-optimization-services/' },
      { name: 'Voice Search Optimization', href: '/voice-search-optimization-services/' },
      { name: 'SEO Services', href: '/seo-services/' },
      { name: 'Hire a Content Writer', href: '/hire-content-writer/' },
      PRICING,
      CONTACT,
    ],
  },

  // ----------------------------------------------------------- AMAZON MARKETING
  {
    id: 'amazon-marketing-services',
    path: '/amazon-marketing-services/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'Amazon Marketing & Amazon SEO Services | AKGLS Group',
    description: 'Amazon marketing services for sellers and brands: Amazon SEO, listing optimization, A+ Content, Sponsored Products and Brands ads on Amazon.com and Amazon.in.',
    category: 'Growth & Paid Ads',
    h1: 'Amazon Marketing & Amazon SEO Services',
    highlight: 'Rank Higher and Sell More on Amazon',
    serviceType: 'Amazon Marketplace Marketing',
    areaServed: [
      { type: 'Country', name: 'United States' },
      { type: 'Country', name: 'India' },
      { type: 'Country', name: 'United Kingdom' },
      { type: 'Country', name: 'United Arab Emirates' },
    ],
    leadParagraph: 'We help sellers and brands grow on Amazon.com, Amazon.in and other Amazon marketplaces with listing optimisation, Amazon SEO, A+ Content and profitable Amazon Ads, measured on sales and advertising cost of sale (ACoS).',
    features: [
      { title: 'Amazon SEO & Listings', desc: 'Keyword research, titles, bullet points, descriptions, backend search terms and images optimised for Amazon search and conversion.' },
      { title: 'Amazon Ads (PPC)', desc: 'Sponsored Products, Sponsored Brands and Sponsored Display campaigns structured and optimised for ACoS and total sales.' },
      { title: 'Brand Store & A+ Content', desc: 'A+ Content, Brand Store design and brand protection for sellers enrolled in Amazon Brand Registry.' },
    ],
    sections: [
      {
        heading: 'Amazon is a search engine for buyers',
        paragraphs: [
          'Many shoppers start their product search on Amazon instead of Google. Your rank depends on relevance (keywords in your listing) and performance (sales velocity, conversion rate, reviews and stock), so listing quality and advertising work together.',
          'We optimise both: listings that rank and convert, and ad campaigns that drive sales velocity profitably, which in turn improves organic ranking.',
        ],
      },
      {
        heading: 'Our Amazon marketing services',
        bullets: [
          'Account and listing audit',
          'Amazon keyword research and competitor analysis',
          'Listing copy: titles, bullets, descriptions and backend keywords',
          'Image and infographic briefs for main and secondary images',
          'A+ Content and Premium A+ Content',
          'Amazon Brand Store design',
          'Sponsored Products, Sponsored Brands and Sponsored Display campaigns',
          'Bid, budget and negative keyword management',
          'Review and ratings strategy within Amazon’s policies',
          'Reporting on sales, ACoS, TACoS and organic rank',
        ],
      },
      {
        heading: 'Policy-safe growth',
        paragraphs: [
          'We only use methods Amazon allows. We never buy reviews, use incentivised reviews or manipulate rankings, because these put your account at risk. Growth comes from better listings, smarter advertising and products customers want.',
        ],
      },
    ],
    deliverables: [
      'Amazon account and listing audit',
      'Keyword-optimised listings for priority products',
      'A+ Content and Brand Store plan',
      'Amazon Ads campaign structure and ongoing management',
      'Monthly sales, ACoS and ranking report',
    ],
    faqs: [
      { q: 'Which Amazon marketplaces do you work on?', a: 'We work on Amazon.com (US), Amazon.in (India), Amazon.co.uk, Amazon.ae and other marketplaces available through Seller Central and Vendor Central.' },
      { q: 'What is ACoS?', a: 'ACoS (advertising cost of sale) is your Amazon ad spend divided by the sales those ads generate. TACoS compares ad spend to your total sales, including organic, and shows whether ads are building overall growth.' },
      { q: 'Do I need Amazon Brand Registry?', a: 'Brand Registry is needed for A+ Content, Sponsored Brands, Brand Stores and stronger brand protection. We can guide you through enrolment if you have a registered trademark.' },
      { q: 'Can you help us get more reviews?', a: 'Yes, within Amazon’s rules: improving product and packaging, using Amazon’s Request a Review feature and programmes such as Amazon Vine where eligible. We never buy or incentivise reviews.' },
      { q: 'Is Amazon ad spend included in your fee?', a: 'No. Ad spend is paid directly to Amazon and is separate from our management fee.' },
    ],
    related: [
      { name: 'Ecommerce SEO Services', href: '/ecommerce-seo-services/' },
      { name: 'Ecommerce Growth Solutions', href: '/ecommerce-growth-solutions/' },
      { name: 'Shopify Development', href: '/shopify-development-services/' },
      { name: 'Email Marketing', href: '/email-marketing-services/' },
      { name: 'Google Ads Services', href: '/google-ads-services/' },
      { name: 'Meta Ads Services', href: '/meta-ads-services/' },
      PRICING,
      CONTACT,
    ],
  },

  // ------------------------------------------------------ PERPLEXITY OPTIMIZATION
  {
    id: 'perplexity-optimization-services',
    path: '/perplexity-optimization-services/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'Perplexity SEO & Optimization Services | AKGLS Group',
    description: 'Get your brand cited in Perplexity AI answers. Perplexity SEO services: citation-ready content, source authority, technical access and visibility tracking.',
    category: 'AI Optimization',
    h1: 'Perplexity Optimization Services',
    highlight: 'Become a Source Perplexity Cites',
    serviceType: 'Generative Engine Optimization',
    leadParagraph: 'Perplexity answers questions by searching the web in real time and citing its sources next to every answer. We optimise your website and wider online presence so Perplexity finds, trusts and cites your brand when buyers ask about your category.',
    features: [
      { title: 'Citation-Ready Content', desc: 'Clear, well-structured pages that directly answer the questions your buyers ask, with facts, figures and definitions that are easy to quote.' },
      { title: 'Source Authority', desc: 'Mentions and links from the publications, directories, review sites and communities Perplexity draws on for your topics.' },
      { title: 'Technical Access & Tracking', desc: 'Crawler access, fast and clean HTML, structured data, and monitoring of how often Perplexity cites you versus competitors.' },
    ],
    sections: [
      {
        heading: 'How Perplexity chooses its sources',
        paragraphs: [
          'Unlike assistants that answer mainly from training data, Perplexity runs a live web search for most questions, reads the top results and cites them. That makes it closer to search engine optimization than other AI platforms: if your pages are relevant, accessible, current and trusted, they can be cited.',
          'Because every citation is a clickable link, Perplexity visibility also sends referral traffic from highly engaged, research-stage buyers.',
        ],
      },
      {
        heading: 'Our Perplexity optimization services',
        bullets: [
          'Perplexity visibility audit across your priority questions',
          'Competitor citation analysis: who gets cited and why',
          'Crawler access review (robots.txt, PerplexityBot, rendering)',
          'Answer-first content: FAQs, comparisons, guides and definitions',
          'Content freshness: dates, updates and current statistics',
          'Structured data (Organization, Product, FAQ, Article)',
          'Digital PR and source authority building',
          'Ongoing citation and referral traffic tracking',
        ],
      },
      {
        heading: 'Part of a complete AI search strategy',
        paragraphs: [
          'Perplexity optimization works alongside our ChatGPT, Gemini and Claude optimization and Google AI Overviews work. The same foundations (authority, clear answers and technical access) improve visibility across every AI assistant.',
        ],
      },
    ],
    deliverables: [
      'Perplexity citation benchmark for your key questions and competitors',
      'Technical access and structured data fixes',
      'Answer-first content plan and page updates',
      'Source authority and digital PR plan',
      'Monthly AI citation and referral traffic report',
    ],
    faqs: [
      { q: 'What is Perplexity optimization?', a: 'Perplexity optimization is improving your content, authority and technical setup so Perplexity AI finds and cites your website in its answers. It is a form of Generative Engine Optimization (GEO).' },
      { q: 'How is Perplexity different from ChatGPT for visibility?', a: 'Perplexity searches the web live for most questions and always cites its sources, so search-style signals such as relevance, freshness and authority matter a lot. ChatGPT also uses web search for many questions but relies more on its training data.' },
      { q: 'Do I need to allow PerplexityBot in robots.txt?', a: 'If you want to be cited, Perplexity’s crawler needs access to your pages. We review your robots.txt and firewall rules to make sure your important pages are reachable.' },
      { q: 'How do you measure Perplexity visibility?', a: 'We track a set of priority questions over time, recording whether your brand is mentioned or cited, its position and the competing sources, plus referral traffic from Perplexity in GA4.' },
      { q: 'How long does it take to get cited?', a: 'Pages Perplexity can already access may start being cited within weeks of being improved. Building broader authority across sources takes longer, usually several months.' },
    ],
    related: [
      { name: 'ChatGPT Optimization', href: '/chatgpt-optimization-services/' },
      { name: 'Gemini Optimization', href: '/gemini-optimization-services/' },
      { name: 'Claude Optimization', href: '/claude-optimization-services/' },
      { name: 'GEO Services', href: '/geo-services/' },
      { name: 'AI Citation Building', href: '/ai-citation-building-services/' },
      { name: 'LLM Optimization', href: '/llm-optimization-services/' },
      { name: 'AEO Services', href: '/aeo-services/' },
      CONTACT,
    ],
  },

  // ----------------------------------------------- ONLINE REPUTATION MANAGEMENT
  {
    id: 'online-reputation-management-services',
    path: '/online-reputation-management-services/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'Online Reputation Management (ORM) Services | AKGLS Group',
    description: 'Online reputation management services: review generation, review responses, Google Business Profile, brand monitoring and AI search reputation. Ethical ORM.',
    category: 'Search & SEO',
    h1: 'Online Reputation Management Services',
    highlight: 'Shape What Customers and AI See About You',
    serviceType: 'Online Reputation Management',
    leadParagraph: 'Your reviews, search results and what AI assistants say about you decide whether customers trust you. Our online reputation management (ORM) services help you earn more genuine reviews, respond well, strengthen positive search results and monitor your brand, using only ethical, policy-compliant methods.',
    features: [
      { title: 'Review Generation & Response', desc: 'Systems that ask happy customers for reviews at the right moment, plus professional responses to every review, positive or negative.' },
      { title: 'Search Results Management', desc: 'Strengthen your own website, profiles and positive coverage so the first page of your brand search reflects who you are today.' },
      { title: 'Brand & AI Monitoring', desc: 'Alerts for new reviews and mentions, plus tracking of how ChatGPT, Gemini and Perplexity describe your business.' },
    ],
    sections: [
      {
        heading: 'Why reputation drives revenue',
        paragraphs: [
          'Customers check your Google rating, read recent reviews and search your brand name before they call or buy. AI assistants now summarise that same information when someone asks whether your business is any good.',
          'A low rating, unanswered complaints or outdated search results can quietly cost you leads every day. Reputation management makes sure the information people find is current, accurate and representative.',
        ],
      },
      {
        heading: 'Our ORM services',
        bullets: [
          'Reputation audit across Google, review sites, social media and AI assistants',
          'Review request systems via email, SMS, WhatsApp and QR codes',
          'Review response writing and escalation guidelines',
          'Google Business Profile optimisation and monitoring',
          'Industry review platforms (e.g. Trustpilot, Practo, Justdial, Yelp, G2)',
          'Branded search result strategy: website pages, profiles and PR',
          'Flagging reviews that break platform policies through official channels',
          'Crisis response planning',
          'Monthly reputation and sentiment report',
        ],
      },
      {
        heading: 'Ethical reputation management only',
        paragraphs: [
          'We never write fake reviews, buy reviews, post as customers or hide genuine feedback. These practices break platform rules and consumer protection laws, and they backfire. We help you earn real reviews, respond professionally, fix the issues behind complaints and report content that genuinely breaks platform policies.',
        ],
      },
    ],
    deliverables: [
      'Reputation audit and benchmark against competitors',
      'Review request system set up and running',
      'Review response playbook and ongoing responses',
      'Branded search and AI answer improvement plan',
      'Monthly rating, review volume and sentiment report',
    ],
    faqs: [
      { q: 'Can you remove negative reviews?', a: 'We cannot remove genuine reviews, and nobody should promise that. We can report reviews that break a platform’s policies (such as spam, fake or offensive content) through the official process, and help you respond and earn new positive reviews.' },
      { q: 'How do you get more reviews?', a: 'We set up simple, timely review requests to real customers by email, SMS, WhatsApp or QR code, in line with each platform’s rules. We do not offer incentives in exchange for reviews.' },
      { q: 'What does AI have to do with reputation?', a: 'People now ask ChatGPT, Gemini and Perplexity about businesses. These assistants summarise reviews and articles they find online, so improving your reviews and search results also improves what AI says about you.' },
      { q: 'How quickly can my rating improve?', a: 'With a steady flow of new genuine reviews, many businesses see their average rating and review volume improve within two to three months.' },
      { q: 'Do you handle reputation crises?', a: 'Yes. We help you plan and publish a response, monitor coverage and mentions, and strengthen accurate information in search results over time.' },
    ],
    related: [
      { name: 'Local SEO Services', href: '/local-seo-services/' },
      { name: 'Local Business Growth', href: '/local-business-growth-services/' },
      { name: 'Healthcare Marketing', href: '/healthcare-marketing-services/' },
      { name: 'Restaurant Marketing', href: '/restaurant-marketing-services/' },
      { name: 'AI Search Optimization', href: '/ai-search-optimization-services/' },
      { name: 'Social Media Optimization', href: '/social-media-optimization-services/' },
      PRICING,
      CONTACT,
    ],
  },

  // -------------------------------------------------------- LANDING PAGE DESIGN
  {
    id: 'landing-page-design-services',
    path: '/landing-page-design-services/',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'High-Converting Landing Page Design | AKGLS Group',
    description: 'Landing page design services for Google Ads, Meta Ads and product launches. Conversion-focused copy, fast mobile pages, A/B testing and CRM integration.',
    category: 'Web & Development',
    h1: 'Landing Page Design Services',
    highlight: 'Pages Built to Convert Your Ad Traffic',
    serviceType: 'Landing Page Design',
    leadParagraph: 'We design and build landing pages that turn paid and campaign traffic into leads and sales: one clear offer, persuasive copy, fast mobile load times, and forms connected to your CRM, with A/B testing to keep improving results.',
    features: [
      { title: 'Conversion-Focused Design', desc: 'One goal per page, a clear value proposition, trust signals and a call to action visitors cannot miss.' },
      { title: 'Fast & Mobile-First', desc: 'Lightweight pages that load quickly on mobile networks, improving conversions and Google Ads Quality Score.' },
      { title: 'Tracking & Testing', desc: 'GA4 and ad platform conversion tracking, CRM integration and A/B tests on headlines, offers and layouts.' },
    ],
    sections: [
      {
        heading: 'Why ads need dedicated landing pages',
        paragraphs: [
          'Sending ad clicks to your homepage wastes budget. Visitors arrive with a specific intent, and a page that matches that intent with one focused message converts far better and improves your Google Ads Quality Score, lowering cost per click.',
        ],
      },
      {
        heading: 'Our landing page services',
        bullets: [
          'Landing pages for Google Ads, Meta Ads, LinkedIn Ads and email campaigns',
          'Lead generation, booking, webinar and product launch pages',
          'Conversion copywriting and offer strategy',
          'Custom design, or builds in WordPress, Shopify, Webflow, Unbounce or HubSpot',
          'Form, WhatsApp and click-to-call lead capture',
          'CRM integration (HubSpot, Zoho, Salesforce and others)',
          'Conversion tracking in GA4, Google Ads and Meta',
          'A/B testing and ongoing optimisation',
        ],
      },
    ],
    deliverables: [
      'Landing page strategy and wireframe',
      'Conversion copy and custom design',
      'Mobile-first build on your preferred platform',
      'Tracking, CRM and form integration',
      'A/B test plan and post-launch performance review',
    ],
    faqs: [
      { q: 'How long does it take to build a landing page?', a: 'A typical campaign landing page takes one to two weeks from brief to launch, depending on content and approvals.' },
      { q: 'Which platforms do you build on?', a: 'WordPress, Shopify, Webflow, HubSpot and Unbounce, or custom-coded pages. We can match your existing website.' },
      { q: 'Do landing pages affect Google Ads costs?', a: 'Yes. Landing page experience is part of Google Ads Quality Score, which influences your cost per click and ad position.' },
      { q: 'Can you write the copy?', a: 'Yes. Conversion copywriting is included, based on your offer, audience and ad keywords.' },
    ],
    related: [
      { name: 'Conversion Rate Optimization', href: '/conversion-rate-optimization-services/' },
      { name: 'Web Design Services', href: '/web-design-services/' },
      { name: 'Google Ads Services', href: '/google-ads-services/' },
      { name: 'Meta Ads Services', href: '/meta-ads-services/' },
      { name: 'LinkedIn Ads Services', href: '/linkedin-ads-services/' },
      { name: 'UI/UX Design', href: '/ui-ux-design-services/' },
      PRICING,
      CONTACT,
    ],
  },

  // ------------------------------------------------------- WEBSITE MAINTENANCE
  {
    id: 'website-maintenance-services',
    path: '/website-maintenance-services/',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Website Maintenance Services & Plans | AKGLS Group',
    description: 'Website maintenance plans: updates, backups, security monitoring, uptime, speed optimization and content changes for WordPress, Shopify and custom sites.',
    category: 'Web & Development',
    h1: 'Website Maintenance Services',
    highlight: 'Secure, Fast and Always Up to Date',
    serviceType: 'Website Maintenance',
    leadParagraph: 'Our website maintenance plans keep your WordPress, Shopify or custom website secure, fast and working, with regular updates, backups, security and uptime monitoring, performance tuning and a team on hand for content changes and fixes.',
    features: [
      { title: 'Updates & Backups', desc: 'Core, theme and plugin updates tested before release, with automated off-site backups and quick restores.' },
      { title: 'Security & Uptime', desc: 'Malware scanning, firewall rules, SSL monitoring and uptime alerts, with fast response if something goes wrong.' },
      { title: 'Speed & SEO Health', desc: 'Ongoing Core Web Vitals checks, image and caching optimisation, broken link fixes and technical SEO monitoring.' },
    ],
    sections: [
      {
        heading: 'Why ongoing maintenance matters',
        paragraphs: [
          'Out-of-date plugins and themes are one of the most common ways websites get hacked, and a slow or broken site loses visitors and rankings. Regular maintenance prevents most problems and fixes the rest before customers notice.',
        ],
      },
      {
        heading: 'What our maintenance plans include',
        bullets: [
          'WordPress core, theme and plugin updates (tested on staging where needed)',
          'Shopify app and theme maintenance',
          'Daily or weekly off-site backups',
          'Malware scanning, firewall and login protection',
          'Uptime monitoring with alerts',
          'SSL certificate and domain renewal monitoring',
          'Speed and Core Web Vitals optimisation',
          'Broken link, form and checkout testing',
          'Content updates and small design changes each month',
          'Monthly maintenance report',
        ],
      },
    ],
    deliverables: [
      'Website health and security audit at onboarding',
      'Scheduled updates and backups',
      'Security and uptime monitoring',
      'Monthly hours for content and design changes',
      'Monthly maintenance and performance report',
    ],
    faqs: [
      { q: 'Which websites do you maintain?', a: 'WordPress, WooCommerce, Shopify and custom-built websites, including sites we did not build.' },
      { q: 'What happens if my site gets hacked?', a: 'We restore from a clean backup, remove malware, close the vulnerability and harden security to prevent it happening again.' },
      { q: 'Are content changes included?', a: 'Yes. Each plan includes monthly time for updates such as new pages, text and image changes and small layout tweaks.' },
      { q: 'Do I have to sign a long contract?', a: 'Maintenance plans are monthly. See our Terms of Service for notice periods.' },
    ],
    related: [
      { name: 'WordPress Development', href: '/wordpress-development-services/' },
      { name: 'Shopify Development', href: '/shopify-development-services/' },
      { name: 'Technical SEO', href: '/technical-seo-services/' },
      { name: 'Web Design Services', href: '/web-design-services/' },
      { name: 'Hire a WordPress Developer', href: '/hire-wordpress-developer/' },
      { name: 'Mobile SEO', href: '/mobile-seo-services/' },
      PRICING,
      CONTACT,
    ],
  },

  // ------------------------------------------------------------------- UI / UX
  {
    id: 'ui-ux-design-services',
    path: '/ui-ux-design-services/',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'UI/UX Design Services | Website & App Design | AKGLS Group',
    description: 'UI/UX design services for websites, SaaS and apps: user research, wireframes, Figma prototypes, design systems and accessible, conversion-focused UI.',
    category: 'Web & Development',
    h1: 'UI/UX Design Services',
    highlight: 'Interfaces People Understand and Enjoy Using',
    serviceType: 'User Experience Design',
    leadParagraph: 'We design websites, SaaS products and mobile apps around how your users think and behave: research, information architecture, wireframes, interactive prototypes and polished, accessible interfaces delivered as developer-ready design systems.',
    features: [
      { title: 'UX Research & Strategy', desc: 'User interviews, analytics and heatmap review, competitor analysis and journey mapping to find what users need and where they struggle.' },
      { title: 'Wireframes & Prototypes', desc: 'Information architecture, user flows and clickable Figma prototypes tested with real users before development.' },
      { title: 'UI Design & Design Systems', desc: 'Visual design, component libraries and documented design systems that keep your product consistent as it grows.' },
    ],
    sections: [
      {
        heading: 'Good UX is good business',
        paragraphs: [
          'Confusing navigation, unclear forms and slow, cluttered pages cost you sign-ups, sales and support time. Investing in UX before development is also far cheaper than fixing a poor experience after launch.',
        ],
      },
      {
        heading: 'Our UI/UX design services',
        bullets: [
          'UX audits of existing websites and products',
          'User research, personas and journey maps',
          'Information architecture and navigation design',
          'Wireframes and interactive prototypes in Figma',
          'Usability testing',
          'Website, SaaS dashboard and mobile app UI design',
          'Design systems and component libraries',
          'Accessibility to WCAG 2.2 AA guidelines',
          'Developer handoff and design QA',
        ],
      },
      {
        heading: 'Design that also works for search',
        paragraphs: [
          'Because we are also an SEO agency, our designs plan for headings, content structure, page speed and internal linking from the start, so a redesign improves rankings instead of putting them at risk.',
        ],
      },
    ],
    deliverables: [
      'UX audit or research findings',
      'Sitemap, user flows and wireframes',
      'Interactive Figma prototype',
      'High-fidelity UI designs for desktop and mobile',
      'Design system and developer handoff files',
    ],
    faqs: [
      { q: 'What is the difference between UI and UX design?', a: 'UX (user experience) design is about how a product works: structure, flows and ease of use. UI (user interface) design is how it looks: layout, typography, colour and components. We do both.' },
      { q: 'Which tools do you use?', a: 'We design and prototype in Figma, and can work with your existing design files and component libraries.' },
      { q: 'Can you also build the design?', a: 'Yes. Our development team builds on WordPress, Shopify and modern frameworks, or we hand off to your developers with full specifications.' },
      { q: 'Do you design for accessibility?', a: 'Yes. We follow WCAG 2.2 AA guidelines for colour contrast, keyboard navigation, focus states, text alternatives and readable typography.' },
    ],
    related: [
      { name: 'Web Design Services', href: '/web-design-services/' },
      { name: 'Landing Page Design', href: '/landing-page-design-services/' },
      { name: 'Conversion Rate Optimization', href: '/conversion-rate-optimization-services/' },
      { name: 'SaaS Marketing Solutions', href: '/saas-marketing-solutions/' },
      { name: 'Shopify Development', href: '/shopify-development-services/' },
      { name: 'WordPress Development', href: '/wordpress-development-services/' },
      PRICING,
      CONTACT,
    ],
  },
];

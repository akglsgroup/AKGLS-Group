/**
 * City / country landing pages and the CRO service page.
 *
 * These render through the static template (src/utils/pageTemplate.ts), so the
 * full content, FAQPage, Service, BreadcrumbList and (where we have a real
 * office) ProfessionalService schema are in the HTML that crawlers receive.
 *
 * Each city page has its own market context, services emphasis, FAQs and links
 * so the pages are genuinely different (thin near-duplicate city pages are
 * treated as doorway pages by Google). Only list an `office` where AKGLS Group
 * actually has one (see FOOTER_CONTACT.offices in src/data/footerData.ts).
 */
import type { AppRoute } from '../routesData';

const CONTACT_LINE = 'Call or WhatsApp +91 831 811 4492, email info@akglsgroup.com, or request a free audit below.';

const CORE_RELATED = [
  { name: 'Local SEO Services', href: '/local-seo-services/' },
  { name: 'AI SEO Services', href: '/ai-seo-services/' },
  { name: 'GEO (Generative Engine Optimization)', href: '/geo-services/' },
  { name: 'Technical SEO', href: '/technical-seo-services/' },
  { name: 'Google Ads Management', href: '/google-ads-services/' },
  { name: 'SEO Case Studies', href: '/case-study/' },
  { name: 'Pricing & Plans', href: '/pricing/' },
  { name: 'Contact AKGLS Group', href: '/contact/' },
];

export const LOCAL_SEO_ROUTES: AppRoute[] = [
  // ------------------------------------------------------------------ DELHI
  {
    id: 'seo-company-delhi',
    path: '/seo-company-delhi/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'SEO Company in Delhi | Local & AI SEO Experts | AKGLS Group',
    description: 'AKGLS Group is an SEO company in Delhi NCR offering local SEO, Google Business Profile, technical SEO and AI search (GEO) services. Get a free SEO audit.',
    category: 'Locations',
    h1: 'SEO Company in Delhi',
    highlight: 'Rank on Google Maps, Search & AI Answers',
    serviceType: 'Search Engine Optimization',
    areaServed: [
      { type: 'City', name: 'New Delhi' },
      { type: 'City', name: 'Delhi' },
      { type: 'State', name: 'National Capital Region' },
    ],
    office: { name: 'AKGLS Group New Delhi', locality: 'New Delhi', region: 'Delhi', country: 'IN' },
    leadParagraph: `AKGLS Group is a Delhi NCR SEO company that helps local businesses, brands and B2B firms win more customers from Google Search, Google Maps and AI assistants such as ChatGPT and Gemini. ${CONTACT_LINE}`,
    features: [
      { title: 'Local SEO & Google Maps', desc: 'Google Business Profile optimisation, locality landing pages and consistent NAP citations so you appear in the Map Pack for searches across Delhi, from Connaught Place to Dwarka.' },
      { title: 'Technical & On-Page SEO', desc: 'Site speed, mobile usability, crawlability, schema markup and on-page fixes that let Google understand and rank your pages.' },
      { title: 'AI Search Visibility (GEO)', desc: 'Entity, schema and content work that makes your business a source AI assistants cite when Delhi customers ask for recommendations.' },
    ],
    sections: [
      {
        heading: 'Why Delhi businesses need a specialist SEO partner',
        paragraphs: [
          'Delhi is one of the most competitive search markets in India. A search like "dentist near me" or "CA firm in South Delhi" returns dozens of businesses competing for three Map Pack spots, and customers search in English, Hindi and Hinglish on mobile.',
          'Winning here takes more than keywords. Your Google Business Profile, reviews, locality pages, site speed and structured data all have to work together, and they need to be built for how AI assistants now answer local questions too.',
        ],
      },
      {
        heading: 'Our SEO services in Delhi',
        bullets: [
          'Google Business Profile setup, optimisation and review strategy',
          'Locality and service-area pages for neighbourhoods across Delhi',
          'Keyword research in English, Hindi and Hinglish',
          'Technical SEO audits, Core Web Vitals and mobile speed fixes',
          'Content and on-page optimisation for service and product pages',
          'White-hat link building and local citations from Indian directories and publications',
          'Generative Engine Optimization (GEO) for ChatGPT, Gemini and Google AI Overviews',
          'Monthly reporting on rankings, calls, direction requests and leads',
        ],
      },
      {
        heading: 'Industries we work with in Delhi',
        paragraphs: [
          'We work with clinics and hospitals, law firms, educational institutes and coaching centres, real estate developers, restaurants, retailers, D2C brands and professional services firms. Each industry has different search intent, and we plan keywords, pages and Google Business Profile categories around how your customers actually search.',
        ],
      },
      {
        heading: 'How we work',
        bullets: [
          'Free audit: we review your website, Google Business Profile and competitors.',
          'Strategy: a prioritised plan with target keywords, pages and quick wins.',
          'Execution: technical fixes, content, local signals and links, every month.',
          'Reporting: clear monthly reports tied to calls, enquiries and revenue.',
        ],
      },
    ],
    deliverables: [
      'Full technical SEO and Google Business Profile audit',
      'Competitor and keyword gap analysis for your Delhi service area',
      'Optimised service and locality landing pages',
      'LocalBusiness and FAQ schema markup',
      'Monthly ranking, traffic and lead report',
    ],
    faqs: [
      { q: 'How much does SEO cost in Delhi?', a: 'It depends on your competition and goals. See our India pricing page for INR packages for startups and SMEs, or our pricing page for larger retainers. We share a fixed quote after a free audit.' },
      { q: 'How long does SEO take to show results in Delhi?', a: 'Technical and Google Business Profile fixes usually show an effect within 2 to 4 weeks. Meaningful ranking and lead growth in competitive Delhi categories typically builds over 3 to 6 months.' },
      { q: 'Do you offer local SEO for multiple locations in Delhi NCR?', a: 'Yes. We manage multi-location businesses with a separate Google Business Profile and landing page for each branch across Delhi, Noida and Gurgaon.' },
      { q: 'Can you meet us in person?', a: 'Yes. Our New Delhi NCR team can meet you, and we also work with clients over video calls and WhatsApp.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No reputable SEO company can guarantee rankings, because Google controls its algorithm. We commit to a clear plan, transparent reporting and white-hat methods that build lasting results.' },
    ],
    related: [
      { name: 'SEO Company in Noida', href: '/seo-company-noida/' },
      { name: 'SEO Company in Gurgaon', href: '/seo-company-gurgaon/' },
      { name: 'India Pricing Packages', href: '/india-pricing/' },
      ...CORE_RELATED,
    ],
  },

  // ------------------------------------------------------------------ NOIDA
  {
    id: 'seo-company-noida',
    path: '/seo-company-noida/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'SEO Company in Noida | SEO & GEO Services | AKGLS Group',
    description: 'SEO company in Noida for IT, SaaS, edtech, real estate and local businesses. Technical SEO, B2B lead generation, local SEO and AI search optimization.',
    category: 'Locations',
    h1: 'SEO Company in Noida',
    highlight: 'SEO for IT, SaaS, Edtech & Local Brands',
    serviceType: 'Search Engine Optimization',
    areaServed: [
      { type: 'City', name: 'Noida' },
      { type: 'City', name: 'Greater Noida' },
      { type: 'State', name: 'Uttar Pradesh' },
    ],
    leadParagraph: `AKGLS Group provides SEO services to Noida and Greater Noida businesses from our Delhi NCR team, from IT and SaaS companies in the Sector 62 and Sector 63 corridors to edtech platforms, real estate developers and local service businesses. ${CONTACT_LINE}`,
    features: [
      { title: 'B2B & SaaS SEO', desc: 'Keyword strategy, solution pages and content that bring decision-makers from India, the US and Europe to Noida-based IT and software companies.' },
      { title: 'Local SEO for Noida Sectors', desc: 'Google Business Profile and sector-level landing pages so clinics, schools, showrooms and services rank for searches in their part of Noida.' },
      { title: 'Technical SEO at Scale', desc: 'Audits and fixes for large sites, edtech course catalogues and property listing portals: crawl budget, indexation, speed and schema.' },
    ],
    sections: [
      {
        heading: 'SEO built for Noida’s business mix',
        paragraphs: [
          'Noida combines a large IT and ITES sector, fast-growing edtech and SaaS companies, major real estate projects along the Noida Expressway, and thousands of local businesses across its sectors. These need very different SEO strategies.',
          'A software company in Sector 62 needs to reach international buyers with B2B content and technical authority. A clinic in Sector 18 needs to win "near me" searches on Google Maps. We build the right plan for each.',
        ],
      },
      {
        heading: 'Our SEO services in Noida',
        bullets: [
          'B2B SEO and content for IT services, SaaS and software product companies',
          'Edtech SEO: course pages, programmatic landing pages and structured data',
          'Real estate SEO for project pages, locality guides and property listings',
          'Local SEO and Google Business Profile for sector-based businesses',
          'Technical SEO audits for large and JavaScript-heavy websites',
          'Link building and digital PR',
          'AI search optimization so ChatGPT, Gemini and Perplexity recommend your brand',
        ],
      },
      {
        heading: 'Pair SEO with lead generation',
        paragraphs: [
          'Many Noida B2B companies combine SEO with LinkedIn Ads and Google Ads to fill the sales pipeline while organic rankings grow. We can run both, and report on leads from every channel in one dashboard.',
        ],
      },
    ],
    deliverables: [
      'Technical SEO audit and prioritised fix list',
      'Keyword and competitor research for your market (local, national or international)',
      'Content plan for service, solution and blog pages',
      'Schema markup and Google Business Profile optimisation',
      'Monthly SEO and lead report',
    ],
    faqs: [
      { q: 'Do you have an office in Noida?', a: 'Our Delhi NCR team serves Noida and Greater Noida clients, and can meet in person by appointment. Most day-to-day work happens over video calls and WhatsApp.' },
      { q: 'Can you do SEO for an IT company targeting US and UK clients?', a: 'Yes. For Indian IT and SaaS companies targeting international buyers, we combine international SEO, B2B content and AI search optimization for those markets.' },
      { q: 'How much does SEO cost in Noida?', a: 'Packages for local businesses start lower than B2B and international campaigns. See our India pricing page for INR packages, or request a free audit for a fixed quote.' },
      { q: 'Do you work with edtech companies?', a: 'Yes. We help edtech platforms with course page SEO, programmatic landing pages, structured data and content that ranks for exam and course searches.' },
    ],
    related: [
      { name: 'SEO Company in Delhi', href: '/seo-company-delhi/' },
      { name: 'SEO Company in Gurgaon', href: '/seo-company-gurgaon/' },
      { name: 'B2B Lead Generation', href: '/b2b-lead-generation-services/' },
      { name: 'SaaS Marketing Solutions', href: '/saas-marketing-solutions/' },
      { name: 'Education Marketing', href: '/education-marketing-services/' },
      { name: 'India Pricing Packages', href: '/india-pricing/' },
      ...CORE_RELATED,
    ],
  },

  // ---------------------------------------------------------------- GURGAON
  {
    id: 'seo-company-gurgaon',
    path: '/seo-company-gurgaon/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'SEO Company in Gurgaon (Gurugram) | AKGLS Group',
    description: 'SEO company in Gurgaon for startups, D2C brands, fintech, real estate and corporates. Technical SEO, ecommerce SEO, local SEO and AI search optimization.',
    category: 'Locations',
    h1: 'SEO Company in Gurgaon',
    highlight: 'Growth SEO for Gurugram Startups & Brands',
    serviceType: 'Search Engine Optimization',
    areaServed: [
      { type: 'City', name: 'Gurgaon' },
      { type: 'City', name: 'Gurugram' },
      { type: 'State', name: 'Haryana' },
    ],
    leadParagraph: `AKGLS Group helps Gurgaon (Gurugram) startups, D2C brands, fintech companies, real estate developers and corporate teams grow organic traffic and leads from Google and AI search, with a Delhi NCR team that can meet you in person. ${CONTACT_LINE}`,
    features: [
      { title: 'Ecommerce & D2C SEO', desc: 'Category, product and collection page SEO, Shopify and WooCommerce technical fixes, and product schema that bring buyers without rising ad costs.' },
      { title: 'Startup & Fintech SEO', desc: 'Content and authority building for regulated, trust-sensitive categories, built to support fundraising and growth targets.' },
      { title: 'Enterprise & Multi-Location SEO', desc: 'SEO governance for large sites and corporate teams, with multi-location Google Business Profile management across NCR.' },
    ],
    sections: [
      {
        heading: 'SEO for Gurugram’s fast-moving companies',
        paragraphs: [
          'Gurugram is home to many of India’s best-funded startups, D2C brands and corporate headquarters, and to premium real estate along Golf Course Road and the Dwarka Expressway. Competition for search visibility is intense and paid acquisition costs keep rising.',
          'We help Gurgaon teams build organic search into a dependable growth channel: technical foundations, content that ranks, authority that compounds, and reporting their leadership can act on.',
        ],
      },
      {
        heading: 'Our SEO services in Gurgaon',
        bullets: [
          'Ecommerce and D2C SEO for Shopify, WooCommerce and custom stores',
          'SEO for fintech, SaaS and B2B companies',
          'Real estate SEO for projects, localities and developer brands',
          'Enterprise technical SEO, migrations and site architecture',
          'Local SEO for restaurants, clinics, gyms and retail in Gurugram sectors',
          'Content strategy and white-hat link building',
          'GEO and AEO so AI assistants and Google AI Overviews cite your brand',
        ],
      },
      {
        heading: 'Reporting your leadership team can use',
        paragraphs: [
          'Every engagement includes a live dashboard and monthly review tying rankings and traffic to sign-ups, leads and revenue, so organic search can be planned alongside your paid channels.',
        ],
      },
    ],
    deliverables: [
      'Technical SEO and site architecture audit',
      'Keyword, competitor and content gap analysis',
      'Category, product or service page optimisation',
      'Schema markup (Product, Organization, FAQ, LocalBusiness)',
      'Monthly performance dashboard and review call',
    ],
    faqs: [
      { q: 'Do you work with D2C and ecommerce brands in Gurgaon?', a: 'Yes. Ecommerce SEO is one of our core services, covering Shopify, WooCommerce and custom platforms. See our ecommerce SEO page and case study for details.' },
      { q: 'Can you handle an SEO website migration?', a: 'Yes. We plan redirects, preserve rankings and monitor indexation before, during and after replatforming or redesigns.' },
      { q: 'How is AKGLS different from other Gurgaon SEO agencies?', a: 'Alongside traditional SEO we optimise for AI search, so your brand is recommended in ChatGPT, Gemini and Google AI Overviews, not just ranked in blue links.' },
      { q: 'How much does SEO cost in Gurgaon?', a: 'It depends on site size and competition. See our pricing and India pricing pages, or request a free audit for a fixed quote.' },
    ],
    related: [
      { name: 'SEO Company in Delhi', href: '/seo-company-delhi/' },
      { name: 'SEO Company in Noida', href: '/seo-company-noida/' },
      { name: 'Ecommerce SEO Services', href: '/ecommerce-seo-services/' },
      { name: 'Startup Growth Solutions', href: '/startup-growth-solutions/' },
      { name: 'Finance Marketing', href: '/finance-marketing-services/' },
      { name: 'Real Estate Marketing', href: '/real-estate-marketing-services/' },
      ...CORE_RELATED,
    ],
  },

  // ------------------------------------------------------------------ INDIA
  {
    id: 'digital-marketing-agency-india',
    path: '/digital-marketing-agency-india/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'Digital Marketing Agency India | SEO & PPC | AKGLS Group',
    description: 'AKGLS Group is a digital marketing agency in India offering SEO, AI SEO, Google Ads, Meta Ads, social media, web development and lead generation.',
    category: 'Locations',
    h1: 'Digital Marketing Agency in India',
    highlight: 'SEO, Ads & AI Search Under One Roof',
    serviceType: 'Digital Marketing',
    areaServed: [{ type: 'Country', name: 'India' }],
    office: { name: 'AKGLS Group India', locality: 'New Delhi', region: 'Delhi', country: 'IN' },
    leadParagraph: `AKGLS Group is a full-service digital marketing agency in India. From our Delhi NCR base we help startups, SMEs and enterprises across India grow with SEO, AI search optimization, Google and Meta Ads, social media, websites and lead generation. ${CONTACT_LINE}`,
    features: [
      { title: 'Search: SEO, Local SEO & GEO', desc: 'Rank on Google and get recommended by AI assistants, in English and Indian languages, nationally or city by city.' },
      { title: 'Performance Ads', desc: 'Google Ads, Meta (Facebook & Instagram) Ads and LinkedIn Ads managed for cost per lead and ROAS, not vanity metrics.' },
      { title: 'Websites & Conversion', desc: 'Fast WordPress and Shopify websites and landing pages designed to turn visits into enquiries and sales.' },
    ],
    sections: [
      {
        heading: 'Digital marketing for how India buys online',
        paragraphs: [
          'Indian customers are mobile-first, switch between English and regional languages, and increasingly come from Tier-2 and Tier-3 cities. They compare on Google, discover on Instagram and YouTube, and expect to reach you on WhatsApp.',
          'We plan campaigns around that reality: mobile-fast pages, vernacular keywords where they matter, WhatsApp-first lead capture, and budgets in INR that a growing business can scale.',
        ],
      },
      {
        heading: 'Services we offer across India',
        bullets: [
          'SEO, local SEO and ecommerce SEO',
          'AI SEO, GEO and AEO for ChatGPT, Gemini and Google AI Overviews',
          'Google Ads, Meta Ads and LinkedIn Ads management',
          'Social media optimization and content',
          'Website design, WordPress and Shopify development',
          'B2B lead generation and CRM integration',
          'Dedicated SEO experts, PPC specialists and content writers on monthly retainers',
        ],
      },
      {
        heading: 'Industries we serve',
        paragraphs: [
          'Healthcare and dental clinics, education and edtech, real estate, law firms, finance and fintech, restaurants, manufacturing, IoT and technology companies, SaaS and ecommerce brands. Each has a dedicated playbook on our site.',
        ],
      },
      {
        heading: 'Transparent INR pricing',
        paragraphs: [
          'Our India pricing page lists packages in rupees for startups and SMEs, and we offer custom retainers for larger brands. There are no hidden fees, and ad spend is always paid directly to the platforms.',
        ],
      },
    ],
    deliverables: [
      'Digital marketing audit across search, ads, social and website',
      'Channel plan and monthly budget recommendation in INR',
      'Campaign setup, conversion tracking and CRM integration',
      'Monthly creative, content and optimisation',
      'Unified monthly report on leads, sales and cost per acquisition',
    ],
    faqs: [
      { q: 'Which cities in India do you serve?', a: 'We work with businesses across India, from metros like Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune and Chennai to Tier-2 and Tier-3 cities. Most work is remote, with in-person meetings available in Delhi NCR.' },
      { q: 'How much does digital marketing cost in India?', a: 'See our India pricing page for INR packages. Costs depend on the channels you need and your ad budget, which is paid separately to Google, Meta or LinkedIn.' },
      { q: 'Do you offer SEO in Hindi and regional languages?', a: 'Yes. We research and optimise for Hindi and Hinglish keywords, and can plan multilingual content for regional markets.' },
      { q: 'Can you work with international clients too?', a: 'Yes. Alongside India, we serve clients in the United States, United Kingdom, UAE and other markets, with teams in New Delhi, New York and San Francisco.' },
      { q: 'Do I need a long-term contract?', a: 'Most retainers run month to month after an initial period agreed in your proposal. See our Terms of Service for cancellation details.' },
    ],
    related: [
      { name: 'India Pricing Packages', href: '/india-pricing/' },
      { name: 'SEO Company in Delhi', href: '/seo-company-delhi/' },
      { name: 'SEO Company in Noida', href: '/seo-company-noida/' },
      { name: 'SEO Company in Gurgaon', href: '/seo-company-gurgaon/' },
      { name: 'Meta Ads Services', href: '/meta-ads-services/' },
      { name: 'Social Media Optimization', href: '/social-media-optimization-services/' },
      { name: 'Web Design Services', href: '/web-design-services/' },
      ...CORE_RELATED,
    ],
  },

  // --------------------------------------------------------------- NEW YORK
  {
    id: 'seo-agency-new-york',
    path: '/seo-agency-new-york/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'SEO Agency in New York (NYC) | Local & AI SEO | AKGLS Group',
    description: 'New York SEO agency for law firms, healthcare, finance, real estate and local businesses. Local SEO across NYC boroughs, technical SEO and AI search.',
    category: 'Locations',
    h1: 'SEO Agency in New York',
    highlight: 'Win NYC Searches, Maps & AI Answers',
    serviceType: 'Search Engine Optimization',
    areaServed: [
      { type: 'City', name: 'New York' },
      { type: 'State', name: 'New York' },
    ],
    office: { name: 'AKGLS Group New York', streetAddress: '1540 Broadway', locality: 'New York', region: 'NY', country: 'US' },
    leadParagraph: `AKGLS Group is a New York SEO agency with an office at 1540 Broadway. We help NYC law firms, medical practices, financial firms, real estate brokers, restaurants and B2B companies grow leads from Google Search, Google Maps and AI assistants. Call +91 831 811 4492, email info@akglsgroup.com, or request a free audit below.`,
    features: [
      { title: 'Local SEO Across the Five Boroughs', desc: 'Google Business Profile optimisation, neighbourhood landing pages and review strategy to compete in dense Map Packs from Manhattan to Brooklyn and Queens.' },
      { title: 'SEO for Professional Services', desc: 'Compliant, authority-building SEO for law firms, healthcare practices and financial advisors in high-cost, high-competition NYC categories.' },
      { title: 'AI Search & Answer Engines', desc: 'GEO and AEO so ChatGPT, Perplexity, Gemini and Google AI Overviews name your firm when New Yorkers ask for a recommendation.' },
    ],
    sections: [
      {
        heading: 'Why SEO in New York is different',
        paragraphs: [
          'New York has some of the most expensive cost-per-click keywords in the US, especially for legal, medical and financial services. Strong organic and Map Pack rankings cut your dependence on paid search and bring a steadier flow of enquiries.',
          'Local results in NYC are hyper-local: a search in Midtown shows different businesses than the same search in Williamsburg. We structure your Google Business Profile, location pages and local signals for the neighbourhoods you actually serve.',
        ],
      },
      {
        heading: 'Our New York SEO services',
        bullets: [
          'Local SEO and Google Business Profile management for single and multi-location businesses',
          'Neighbourhood and borough landing pages',
          'SEO for law firms, healthcare practices, financial services and real estate',
          'Technical SEO, Core Web Vitals and accessibility-aware site improvements',
          'Content strategy and digital PR for authority links',
          'Generative Engine Optimization and AI Overview visibility',
          'Conversion rate optimization for landing pages and intake forms',
        ],
      },
      {
        heading: 'A global team with New York presence',
        paragraphs: [
          'Our New York office works alongside our San Francisco and New Delhi teams, giving you senior strategy in your time zone and execution capacity across time zones, so work keeps moving overnight.',
        ],
      },
    ],
    deliverables: [
      'Local SEO and technical audit with competitor benchmarks',
      'Google Business Profile optimisation and review plan',
      'Location and service page build-out',
      'LocalBusiness, Attorney, MedicalBusiness or FAQ schema as relevant',
      'Monthly rankings, calls and lead report',
    ],
    faqs: [
      { q: 'Do you have an office in New York?', a: 'Yes. AKGLS Group has a New York office at 1540 Broadway, alongside offices in San Francisco and New Delhi.' },
      { q: 'How much does SEO cost in New York?', a: 'Our retainers start at $3,500 per month for the Scale Accelerator Plan, with larger and custom plans available. See our pricing page for details.' },
      { q: 'Do you do SEO for law firms in NYC?', a: 'Yes. We provide SEO for personal injury, immigration, family and business law firms, following attorney advertising rules on content and reviews. See our law firm marketing page.' },
      { q: 'How long until we see results in a competitive NYC market?', a: 'Technical and Google Business Profile improvements often show within weeks. In competitive NYC categories, significant ranking and lead growth usually takes 4 to 9 months.' },
      { q: 'Can you manage SEO for several locations in New York?', a: 'Yes. We manage multi-location Google Business Profiles and location pages for practices, restaurants and retail brands across the boroughs and the wider metro area.' },
    ],
    related: [
      { name: 'SEO Agency in San Francisco', href: '/seo-agency-san-francisco/' },
      { name: 'Law Firm Marketing', href: '/law-firm-marketing-services/' },
      { name: 'Healthcare Marketing', href: '/healthcare-marketing-services/' },
      { name: 'Finance Marketing', href: '/finance-marketing-services/' },
      { name: 'Real Estate Marketing', href: '/real-estate-marketing-services/' },
      { name: 'Conversion Rate Optimization', href: '/conversion-rate-optimization-services/' },
      ...CORE_RELATED,
    ],
  },

  // ---------------------------------------------------------- SAN FRANCISCO
  {
    id: 'seo-agency-san-francisco',
    path: '/seo-agency-san-francisco/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'SEO Agency in San Francisco | SaaS & AI SEO | AKGLS Group',
    description: 'San Francisco SEO agency for SaaS, AI and B2B tech companies. Technical SEO, product-led content, programmatic SEO and AI search (GEO) visibility.',
    category: 'Locations',
    h1: 'SEO Agency in San Francisco',
    highlight: 'SEO & AI Search for Bay Area Tech',
    serviceType: 'Search Engine Optimization',
    areaServed: [
      { type: 'City', name: 'San Francisco' },
      { type: 'State', name: 'California' },
    ],
    office: { name: 'AKGLS Group San Francisco', streetAddress: '201 Mission St', locality: 'San Francisco', region: 'CA', country: 'US' },
    leadParagraph: `AKGLS Group is a San Francisco SEO agency at 201 Mission St. We help SaaS, AI and B2B technology companies across the Bay Area turn organic search and AI assistants into a pipeline channel, from seed stage to enterprise. Call +91 831 811 4492, email info@akglsgroup.com, or request a free audit below.`,
    features: [
      { title: 'SaaS & B2B Tech SEO', desc: 'Product, use-case, integration and comparison pages that rank for high-intent searches and convert to trials and demos.' },
      { title: 'Programmatic & Technical SEO', desc: 'Templates and data-driven pages at scale on modern stacks (Next.js, React, headless CMS) without indexation or rendering problems.' },
      { title: 'AI Search Visibility (GEO/AEO)', desc: 'Get cited when buyers ask ChatGPT, Claude, Perplexity or Gemini for the best tool in your category: entity work, structured data and citation building.' },
    ],
    sections: [
      {
        heading: 'Built for how tech buyers research',
        paragraphs: [
          'Bay Area buyers and the developers and operators who influence them now research software by asking AI assistants as much as by searching Google. If your product is not in those answers, you are not on the shortlist.',
          'We combine classic SaaS SEO, product-led content, comparison and alternative pages, and documentation SEO with Generative Engine Optimization, so you rank in Google and get recommended by AI.',
        ],
      },
      {
        heading: 'Our San Francisco SEO services',
        bullets: [
          'SaaS SEO strategy aligned to product-led and sales-led funnels',
          'Use-case, integration, comparison and alternatives page programmes',
          'Programmatic SEO on Next.js, React and headless CMS stacks',
          'JavaScript SEO, rendering, Core Web Vitals and site migrations',
          'Developer documentation and help-center SEO',
          'GEO, AEO and AI citation building for ChatGPT, Claude, Perplexity and Gemini',
          'Pipeline reporting connected to your CRM (HubSpot, Salesforce)',
        ],
      },
      {
        heading: 'Startup-friendly engagement',
        paragraphs: [
          'We work with seed to growth-stage startups as well as established companies. Plans scale from a focused retainer to a dedicated team, and revenue-share options are available for qualifying businesses.',
        ],
      },
    ],
    deliverables: [
      'Technical and JavaScript SEO audit',
      'Keyword and topic map by funnel stage and persona',
      'Content and page programme (use-case, comparison, integration)',
      'AI search visibility benchmark across major assistants',
      'Monthly pipeline-attributed SEO report',
    ],
    faqs: [
      { q: 'Do you have an office in San Francisco?', a: 'Yes. AKGLS Group has a San Francisco office at 201 Mission St, alongside offices in New York and New Delhi.' },
      { q: 'Do you work with early-stage startups?', a: 'Yes. We work with seed and Series A startups through to enterprise software companies, with plans that scale as you grow. See our startup growth and SaaS marketing pages.' },
      { q: 'What is GEO and why does it matter for SaaS?', a: 'Generative Engine Optimization (GEO) improves how often AI assistants such as ChatGPT, Claude and Perplexity mention and cite your product. For SaaS, these answers increasingly decide which tools buyers shortlist.' },
      { q: 'Can you do SEO on a Next.js or React site?', a: 'Yes. We audit and fix rendering, routing, metadata and indexation issues on Next.js, React and headless CMS sites.' },
      { q: 'How much does SEO cost in San Francisco?', a: 'Plans start at $3,500 per month, with an Authority & AI SEO Suite at $6,500 per month and custom plans. Revenue-share options are available. See our pricing page.' },
    ],
    related: [
      { name: 'SEO Agency in New York', href: '/seo-agency-new-york/' },
      { name: 'SaaS Marketing Solutions', href: '/saas-marketing-solutions/' },
      { name: 'Startup Growth Solutions', href: '/startup-growth-solutions/' },
      { name: 'Programmatic SEO', href: '/programmatic-seo-services/' },
      { name: 'LLM Optimization', href: '/llm-optimization-services/' },
      { name: 'Claude Optimization', href: '/claude-optimization-services/' },
      ...CORE_RELATED,
    ],
  },

  // -------------------------------------------------------------------- CRO
  {
    id: 'conversion-rate-optimization-services',
    path: '/conversion-rate-optimization-services/',
    priority: 0.85,
    changefreq: 'monthly',
    title: 'Conversion Rate Optimization (CRO) Services | AKGLS Group',
    description: 'CRO services that turn more visitors into leads and sales: funnel analytics, heatmaps, A/B testing, landing page and checkout optimization. Free CRO audit.',
    category: 'Web & Conversion',
    h1: 'Conversion Rate Optimization Services',
    highlight: 'More Leads & Sales From the Traffic You Have',
    serviceType: 'Conversion Rate Optimization',
    leadParagraph: 'Our conversion rate optimization (CRO) services find where visitors drop off and fix it with research-backed changes and controlled A/B tests. You get more enquiries, sign-ups and sales from your existing SEO and ad traffic, without raising your budget.',
    features: [
      { title: 'Conversion Research', desc: 'GA4 funnel analysis, heatmaps, session recordings, form analytics and user surveys to find exactly where and why visitors leave.' },
      { title: 'A/B & Multivariate Testing', desc: 'Prioritised test roadmap, test design, development and statistically sound analysis, so every change is proven before it ships.' },
      { title: 'Landing Page & Checkout Optimization', desc: 'Faster, clearer pages, stronger offers, simpler forms and fewer checkout steps for lead generation and ecommerce sites.' },
    ],
    sections: [
      {
        heading: 'Why CRO is the fastest way to grow revenue',
        paragraphs: [
          'Doubling traffic is slow and expensive. Improving the share of visitors who convert multiplies the return on every rupee and dollar you already spend on SEO and ads. A higher conversion rate also lowers your cost per lead, which lets you bid more competitively on paid channels.',
        ],
      },
      {
        heading: 'Our CRO process',
        bullets: [
          'Audit: tracking check, analytics and funnel review, heuristic UX review and page speed.',
          'Research: heatmaps and recordings (e.g. Microsoft Clarity or Hotjar), surveys and form analytics.',
          'Hypotheses: a prioritised backlog scored by impact, confidence and effort.',
          'Testing: A/B tests built and run with tools such as VWO, Optimizely or Convert, until results are statistically reliable.',
          'Rollout: winning variations shipped to your site, with learnings applied across other pages.',
          'Reporting: monthly results in conversions, revenue and cost per acquisition.',
        ],
      },
      {
        heading: 'What we optimise',
        bullets: [
          'Landing pages for Google Ads, Meta Ads and LinkedIn campaigns',
          'Lead forms, quote requests, booking and WhatsApp click-to-chat flows',
          'Ecommerce product pages, cart and checkout (Shopify, WooCommerce, custom)',
          'SaaS sign-up, onboarding and pricing pages',
          'Mobile experience and page speed (Core Web Vitals)',
          'Trust signals, offers, copy and calls to action',
        ],
      },
      {
        heading: 'CRO works best with SEO and paid ads',
        paragraphs: [
          'We run CRO alongside our SEO, Google Ads and Meta Ads services, so the pages that receive your traffic are always improving. If you only need CRO, we work with your existing agency or in-house team.',
        ],
      },
    ],
    deliverables: [
      'CRO audit with conversion tracking check and prioritised fixes',
      'Heatmap, recording and funnel analysis report',
      'A/B test roadmap and monthly tests',
      'Landing page and form redesigns',
      'Monthly conversion and revenue impact report',
    ],
    faqs: [
      { q: 'What is conversion rate optimization?', a: 'Conversion rate optimization (CRO) is the process of increasing the percentage of website visitors who take a desired action, such as filling in a form, booking a call or buying, by researching user behaviour and testing improvements.' },
      { q: 'How much traffic do I need for A/B testing?', a: 'Reliable A/B tests generally need at least a few hundred conversions per variation over the test period. With lower traffic we focus on research-led fixes, usability improvements and testing bigger changes.' },
      { q: 'How long does a CRO test take?', a: 'Most tests run for 2 to 6 weeks, covering at least two full business cycles, until results are statistically significant.' },
      { q: 'Will CRO affect my SEO?', a: 'Done correctly, no. We run tests with SEO-safe methods (canonical tags, temporary redirects where needed, no cloaking), and faster, clearer pages often help rankings.' },
      { q: 'Which tools do you use?', a: 'Typically GA4, Google Tag Manager, Microsoft Clarity or Hotjar for research, and VWO, Optimizely or Convert for testing. We can also work with tools you already have.' },
    ],
    related: [
      { name: 'Web Design Services', href: '/web-design-services/' },
      { name: 'Ecommerce Growth Solutions', href: '/ecommerce-growth-solutions/' },
      { name: 'Shopify Development', href: '/shopify-development-services/' },
      { name: 'Google Ads Services', href: '/google-ads-services/' },
      { name: 'Meta Ads Services', href: '/meta-ads-services/' },
      { name: 'SaaS Marketing Solutions', href: '/saas-marketing-solutions/' },
      { name: 'Pricing & Plans', href: '/pricing/' },
      { name: 'Contact AKGLS Group', href: '/contact/' },
    ],
  },
];

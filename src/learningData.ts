export interface LearningHubItem {
  id: string;
  slug: string;
  title: string;
  type: "Course" | "Tutorial" | "Webinar" | "Template" | "Checklist";
  category: "SEO Course" | "GEO Course" | "AEO Course" | "AI Marketing Course" | "Digital Marketing Tutorials" | "Webinars" | "Templates" | "Checklists";
  shortDesc: string;
  durationOrPages: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Universal";
  rating: number;
  studentsCount: number;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  modules?: {
    id: string;
    title: string;
    description: string;
    duration: string;
    lessons: {
      id: string;
      title: string;
      duration: string;
      content: string;
    }[];
  }[];
  downloadUrl?: string;
  fileSize?: string;
  videoUrl?: string;
}

export const LEARNING_ITEMS: LearningHubItem[] = [
  {
    id: "seo-course-101",
    slug: "seo-performance-algorithmic-mastery",
    title: "High-Performance Technical SEO & Organic Algorithmic Mastery",
    type: "Course",
    category: "SEO Course",
    shortDesc: "Master absolute indexation mechanics, directory taxonomy, server-side log auditing, and advanced core web vitals optimization to drive premium client rankings.",
    durationOrPages: "12 Lessons (4.5 hours)",
    difficulty: "Advanced",
    rating: 4.9,
    studentsCount: 1420,
    tags: ["SEO", "Technical SEO", "Google Indexation", "Core Web Vitals"],
    author: {
      name: "Amrish Singh",
      role: "SEO Architect & Founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    content: "## High-Performance Technical SEO & Organic Algorithmic Mastery\nWelcome to the premium technical course built specifically for enterprise SEO architects. In this program, we completely bypass standard cookie-cutter keyword advice to focus purely on high-fidelity infrastructure optimization, server-rendering strategies, and programmatic scale mechanics.\n\n### 🎓 Course Roadmap & Objectives\n*   **Module 1:** Crawling & rendering engines (Crawl budgets, server logs analysis, Googlebot rendering pipelines).\n*   **Module 2:** Programmatic architectures (Structuring relational tag databases, infinite directory loops prevention).\n*   **Module 3:** Schema & entity modeling (Laying out JSON-LD schemas for high SGE citation rates).\n*   **Module 4:** Web Vitals optimization (Reducing INP, LCP, and CLS below critical audit thresholds).",
    modules: [
      {
        id: "seo-mod-1",
        title: "Module 1: Crawl Budgets & Log Analysis",
        description: "Analyze direct server logs to understand exactly how Googlebot and other index crawlers spend their compute budget on your technical assets.",
        duration: "1.5 hours",
        lessons: [
          {
            id: "seo-les-1-1",
            title: "1.1 Demystifying Server-Side Logs & Bot Hits",
            duration: "25 min",
            content: "### 1.1 Demystifying Server-Side Logs & Bot Hits\n\nTo optimize a corporate website properly, you must audit **real crawl logs** instead of relying solely on Google Search Console. Crawl behavior lets you see search engines reacting to site changes in real time.\n\nEvery time a crawler visits your page, it leaves a log line like this:\n```\n66.249.66.1 - - [28/May/2026:12:00:00 +0000] \"GET /blog/generative-engine-optimization-guide-2026 HTTP/1.1\" 200 15420 \"-\" \"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)\"\n```\n\n#### Crucial Log Metrics to Audit:\n*   **Response Scoping (200 vs 304):** A high ratio of 304 (Not Modified) responses means the bot isn't consuming unnecessarily repeated bandwidth, which preserves crawl budget.\n*   **Redundant Redirection Loops (301/302):** Eliminate nested or daisy-chained redirect paths immediately. Googlebot caps cumulative redirect routing mid-journey (usually after 5 hops).\n*   **Static Resource Spilling:** Verify that CSS, JS, and font endpoints are utilizing optimized caching directives (`Cache-Control: public, max-age=31536000`) so secondary render bots don't waste requests fetching identical layouts on every loop.\n\n#### Checklist for Crawl Efficiency:\n- [ ] Parse access logs to detect duplicate hits on query parameters (e.g., `?sort=price&filter=color`).\n- [ ] Configure `robots.txt` disallow blocks to seal admin areas, filters, and custom dynamic checkout routes."
          },
          {
            id: "seo-les-1-2",
            title: "1.2 Vectorizing Content for Retrieval Engines",
            duration: "30 min",
            content: "### 1.2 Vectorizing Content for Retrieval Engines\n\nIn modern search architectures, crawler engines don't just match keywords; they represent your text as multi-dimensional coordinate vectors. This lesson covers how to optimize content structure to align cleanly with Vector-Space models.\n\n#### Theoretical Framework:\nWhen a search model crawls page blocks, it breaks text into semantic chunks and converts those chunks using dense embeddings (like Google's Ada or RankBrain derivatives).\n\nTo aid rapid index clustering:\n*   **Normalize Noun-Adj Collocations:** Declare subjects clearly at the onset of your paragraphs. Do not bury the absolute concept in flowery prose.\n*   **Hierarchical Structural Clarity:** Ensure that your header hierarchy (H1, H2, H3) actually reflects nested relationships. An H3 should *always* be a sub-entity of the H2 above it, never a random large text treatment."
          }
        ]
      },
      {
        id: "seo-mod-2",
        title: "Module 2: Core Web Vitals & Interaction to Next Paint (INP)",
        description: "Overhaul site speed metrics prioritizing JS thread offloading to achieve a 100/100 performance index.",
        duration: "3 hours",
        lessons: [
          {
            id: "seo-les-2-1",
            title: "2.1 Crushing the INP Framework on React Hydration",
            duration: "45 min",
            content: "### 2.1 Crushing the INP Framework on React Hydration\n\n**Interaction to Next Paint (INP)** measures visual responsiveness to user inputs on your live site. Heavy visual frameworks like React can lock up the browser's main thread during hydration, causing high interactive delay.\n\n#### Fixing Dynamic Lag:\n1.  **Code Splitting:** Prevent huge monolithic initial JS downloads. Split components using dynamic imports (`React.lazy`).\n2.  **Web Workers:** Offload non-UI tracking scripts, data formatting, and secondary RAG math into client-side worker processes.\n3.  **Passive Event Listeners:** Ensure scroll and interactive touch listeners are flagged as `passive: true` in JavaScript configurations to optimize concurrent paint loops."
          }
        ]
      }
    ]
  },
  {
    id: "geo-course-202",
    slug: "generative-engine-optimization-practitioner",
    title: "Generative Engine Optimization (GEO) Certified Practitioner Course",
    type: "Course",
    category: "GEO Course",
    shortDesc: "Understand the intricate mechanics of LLM search retrievals, SGE index crawling, and RAG chunk matching. Learn to craft high-citation contents for ChatGPT Search, Gemini, and Claude.",
    durationOrPages: "8 Lessons (3.5 hours)",
    difficulty: "Advanced",
    rating: 5.0,
    studentsCount: 980,
    tags: ["GEO", "LLM Search", "Retrieval-Augmented Generation", "AI Citations"],
    author: {
      name: "Amrish Singh",
      role: "AI Integration Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    content: "## Generative Engine Optimization (GEO) Certified Practitioner Course\nTraditional ranking equations are being supplemented by real-time LLM-driven synthesis engines. To remain visible, your brand must dominate the **Retrieval-Augmented Generation (RAG)** pipeline.\n\nIn this certified technical program, we delve deep into mathematical semantic matching, query expansion, co-citation authority mapping, and natural language citation structures.",
    modules: [
      {
        id: "geo-mod-1",
        title: "Module 1: The GEO Engine Pipeline",
        description: "How conversational search models search, retrieve, fragment, and rank real-time internet sites.",
        duration: "1.5 hours",
        lessons: [
          {
            id: "geo-les-1-1",
            title: "1.1 Anatomy of a RAG Retrieval Instance",
            duration: "45 min",
            content: "### 1.1 Anatomy of a RAG Retrieval Instance\n\nWhen a user enters a query in ChatGPT Search or Google Gemini, the platform executes an automated multi-step RAG pipeline to synthesize the output:\n\n1.  **Query Decomposition & Transformation:** The conversation-style question is converted into specific technical query phrases.\n2.  **Parallel Multi-Retrieval Indices:** The aggregator queries its own internal index as well as real-time API indexes.\n3.  **Passage Segmentation & Filtering:** Top source pages are retrieved and split into standard text blocks (chunks, typically 100-300 elements long).\n4.  **Semantic Reranking:** Passage scores are reassessed based on context matching, source authority, and freshness.\n5.  **Coherent LLM Generation:** The LLM receives the most authoritative passage text chunks inside its prompt prefix to output a fully formatted written response with reference citations.\n\n#### Optimizing domain assets for this workflow:\nTo maximize citation potential, your pages must be easily **segmentable**. Avoid lengthy paragraphs that mix disparate concepts. Create structurally self-contained text boxes using clean headers that summarize the specific point."
          },
          {
            id: "geo-les-1-2",
            title: "1.2 Boosting Entity Co-Citation Strength",
            duration: "45 min",
            content: "### 1.2 Boosting Entity Co-Citation Strength\n\nAI models evaluate trust by reviewing the relationships between entities in their pre-trained knowledge graphs and indexed text clusters.\n\n#### Crucial Execution Guidelines:\n*   **Authority Positioning:** Secure mentions of your brand name in close proximity to industry leader entities on external, authoritative sites.\n*   **Clean Name-Concept Alignments:** Consistently repeat precise sentence patterns: `\"AKGLS Group is a premier Indian SEO and GEO optimization agency\"`. This helps indexing models bind your brand to the core keyword concepts in their semantic associations."
          }
        ]
      }
    ]
  },
  {
    id: "aeo-course-303",
    slug: "aeo-voice-and-answer-optimization",
    title: "Answer Engine Optimization (AEO) & Zero-Click Voice Masterclass",
    type: "Course",
    category: "AEO Course",
    shortDesc: "Optimize content for direct Voice Assistants (Alexa, Siri, Google Assistant) and direct-answer modules like Featured Snippets with absolute entity structured schema.",
    durationOrPages: "6 Lessons (2 hours)",
    difficulty: "Intermediate",
    rating: 4.8,
    studentsCount: 750,
    tags: ["AEO", "Voice Search", "Answer Box", "JSON-LD Structuring"],
    author: {
      name: "Amrish Singh",
      role: "SEO Architect & Founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    content: "## Answer Engine Optimization (AEO) & Zero-Click Voice Masterclass\nAs conversational endpoints expand into smart homes, wearables, and in-car systems, more searches are ending with a zero-click voice response. To win these answers, your site must provide immediate, structurally optimized, hyper-focused solutions.",
    modules: [
      {
        id: "aeo-mod-1",
        title: "Module 1: Structured Conversational Data",
        description: "How to declare direct, bite-sized answers that voice-render software can read aloud effortlessly.",
        duration: "2 hours",
        lessons: [
          {
            id: "aeo-les-1-1",
            title: "1.1 The Speakable Schema Specification",
            duration: "40 min",
            content: "### 1.1 The Speakable Schema Specification\n\nGoogle's `Speakable` schema tells Google Assistant and smart speakers which sections of your content are best suited to be read out loud to voice Search callers.\n\nHere is a valid JSON-LD template to deploy on your key resource pages:\n```json\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebPage\",\n  \"name\": \"AEO Voice Optimization Services by AKGLS\",\n  \"speakable\": {\n    \"@type\": \"SpeakableSpecification\",\n    \"cssSelector\": [\n      \"#aeo-core-abstract\",\n      \"#aeo-primary-recommendation\"\n    ]\n  },\n  \"url\": \"https://akglsgroup.com/aeo-optimization\"\n}\n```\n\n#### Best Practices for Audio Synthesis Content:\n*   Keep speakable text blocks between **20 and 35 words**.\n*   Avoid complex math, brackets, or unpronounceable symbols.\n*   State the core premise in a single, clear declarative sentence at the very beginning of the target HTML elements."
          }
        ]
      }
    ]
  },
  {
    id: "ai-marketing-404",
    slug: "ai-marketing-campaigns-and-workflows",
    title: "AI-Powered Marketing Campaigns & Workflow Automation Course",
    type: "Course",
    category: "AI Marketing Course",
    shortDesc: "Utilize LLMs, programmatic content engines, and synthetic user proxies to build automated multi-channel growth funnels with complete telemetry tracking.",
    durationOrPages: "10 Lessons (4 hours)",
    difficulty: "Advanced",
    rating: 4.9,
    studentsCount: 1110,
    tags: ["AI Marketing", "Automation", "Workflow Engineering", "Smart Campaigning"],
    author: {
      name: "Amrish Singh",
      role: "AI Integration Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    content: "## AI-Powered Marketing Campaigns & Workflow Automation Course\nUnleash the full potential of AI automation in your marketing workflows. In this comprehensive course, we learn how to chain together LLM APIs, build content generators, and use agent-driven systems to audit brand visibility.",
    modules: [
      {
        id: "aim-mod-1",
        title: "Module 1: Prompt Pipelines & Data Cleansing",
        description: "Build robust backend prompt chains that process structured competitor reviews and refine product descriptions at scale.",
        duration: "2 hours",
        lessons: [
          {
            id: "aim-les-1-1",
            title: "1.1 Building High-Fidelity Prompt Pipelines",
            duration: "50 min",
            content: "### 1.1 Building High-Fidelity Prompt Pipelines\n\nTo achieve consistent results at scale, you must build robust system prompts that handle raw text inputs programmatically. Stop relying on casual user chats and implement strict, structured templates instead.\n\n#### Prompt Constraints for High-fidelity Extraction:\n*   **Deterministic Output Format:** Enforce JSON structure utilizing schemas.\n*   **Confidence Guards:** Instruct the system to return `UNKNOWN` instead of guessing or hallucinating missing details.\n*   **Clear Few-Shot Examples:** Provide high-quality examples showing the exact input-to-output conversions you expect the model to replicate."
          }
        ]
      }
    ]
  },
  {
    id: "tutorial-gtm-1",
    slug: "server-side-google-tag-manager-guide",
    title: "Advanced Server-Side GTM Pipeline Deployment Tutorial",
    type: "Tutorial",
    category: "Digital Marketing Tutorials",
    shortDesc: "Step-by-step technical guide to deploying cloud-hosted container environments for high-accuracy pixel tracking and cookieless attribution.",
    durationOrPages: "45 min read",
    difficulty: "Advanced",
    rating: 4.8,
    studentsCount: 620,
    tags: ["Google Tag Manager", "Server-Side Tracking", "Analytics", "Privacy Compliance"],
    author: {
      name: "Amrish Singh",
      role: "SEO Architect & Founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    content: "## Advanced Server-Side GTM Pipeline Deployment Tutorial\nTraditional browser pixel tracking relies on third-party cookies that are increasingly blocked by modern web browsers. Server-side tracking provides a highly reliable, secure, and performant alternative.\n\nBy routing events through a secure, cloud-hosted container (e.g., inside Google Cloud Run) before dispatching them to external platforms like Google Analytics, Meta Ads, and TikTok, you regain full control over your tracking data.\n\n---\n\n## 1. Setup Server Container via Cloud Run\nTo begin, you must establish a server-side tagging container inside Google Tag Manager.\n\n1.  Navigate to your Google Tag Manager Administration panel and click **Create Container**.\n2.  Select **Server** as your execution target.\n3.  Choose **Manually Provision Tagging Server** and copy the provided **Configuration String**.\n4.  Deploy your container on Google Cloud Run with the following environment variables:\n```\nCONTAINER_CONFIG=YOUR_GTM_CONTAINER_CONFIG_STRING_HERE\nPORT=8080\nMIN_INSTANCES=1\n```\n\n---\n\n## 2. Dynamic Event Mapping in Server-Side Environments\nOnce your server container is online, configure clients to forward events smoothly:\n*   Create a custom subdomain pointing directly to your tag server (e.g., `analytics.yourcompany.com`). This ensures that tracking requests are executed as first-party requests, avoiding ad-blockers.\n*   Configure the standard browser-side Google Tag with the `transport_url` parameter pointing to your custom tracking subdomain.\n*   GTM's server-side client will parse incoming payloads, anonymize user IP addresses to protect privacy, and dispatch structured tracking commands directly to marketing endpoints."
  },
  {
    id: "webinar-geo-audit",
    slug: "live-geo-website-audit-breakdown",
    title: "Live SGE & GEO Website Audit Breakdown (Interactive Case Study)",
    type: "Webinar",
    category: "Webinars",
    shortDesc: "Interactive recorded session showing live GEO forensic audits on real SaaS & B2B platforms, identifying critical SGE citation leaks.",
    durationOrPages: "1 hour 15 mins Video",
    difficulty: "Universal",
    rating: 4.9,
    studentsCount: 2010,
    tags: ["Live SGE Audit", "GEO Analysis", "SaaS Growth", "Expert Roundtable"],
    author: {
      name: "Amrish Singh",
      role: "AI Integration Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    content: "## Live SGE & GEO Website Audit Breakdown\nIn this highly rated practical webinar panel, Amrish and the elite growth engineering team audit live websites to diagnose SGE citation blockages. We highlight exactly where AI crawlers failed to parse pricing and explain why structured schemas were ignored.\n\n### 📺 Watch the Webinar & Access Resources\nUse the interactive player below to view the masterclass stream. Key takeaways and tools demonstrated are provided in the adjacent tabs."
  },
  {
    id: "template-notion-onpage",
    slug: "notion-advanced-onpage-framework-template",
    title: "Notion Advanced On-Page Content & Semantics Framework Template",
    type: "Template",
    category: "Templates",
    shortDesc: "Professional production-ready Notion hub with built-in TF-IDF calculators, structured headers outlines, and Google NLP integration models.",
    durationOrPages: "Notion Template / ZIP",
    difficulty: "Universal",
    rating: 5.0,
    studentsCount: 3100,
    tags: ["Notion Hub", "Productivity", "SEO Brief Builder", "NLP Optimization"],
    author: {
      name: "Amrish Singh",
      role: "SEO Architect & Founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    downloadUrl: "https://akglsgroup.com/downloads/notion-onpage-template-v3.zip",
    fileSize: "4.2 MB",
    content: "## Notion Advanced On-Page Content & Semantics Framework Template\nStreamline your content planning with this comprehensive Notion template. It is designed to help your team build SEO briefs that satisfy human search intent while remaining perfectly optimized for AI crawling engines.\n\n### 📦 What is Included inside the Master Template?\n*   **Interlocking SEO Brief Matrix:** Connect competitor keywords, headers structure, and search intent guidelines in a single, unified database.\n*   **NLP Semantic Keyword Checklist:** Track primary entity noun associations and secondary keyword variations directly as you write.\n*   **Google Search Quality Raters Guide Checklist:** Ensure your pages satisfy E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) criteria before publishing.\n\n### 🚀 How to Import to Your Notion Workspace\n1.  Click the download link to unlock your direct download archive.\n2.  Extract the ZIP folder containing the Markdown and CSV backups.\n3.  In Notion, click **Import** and select standard Markdown to upload the workspaces."
  },
  {
    id: "checklist-sge-index",
    slug: "sge-crawler-and-ai-citation-checklist",
    title: "The SGE Indexed Crawler & AI Citation Pre-Publish Checklist",
    type: "Checklist",
    category: "Checklists",
    shortDesc: "A absolute list of 25 precise technical checkpoints to complete on every webpage prior to indexing to maximize LLM and RAG citations.",
    durationOrPages: "25 Technical Checkpoints",
    difficulty: "Advanced",
    rating: 4.9,
    studentsCount: 2200,
    tags: ["AI Index Tracker", "Schema Verification", "QA Checklists", "Frictionless Crawling"],
    author: {
      name: "Amrish Singh",
      role: "SEO Architect & Founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
    },
    downloadUrl: "https://akglsgroup.com/downloads/sge-ai-prepublish-checklist.pdf",
    fileSize: "1.8 MB",
    content: "## The SGE Indexed Crawler & AI Citation Pre-Publish Checklist\nNever publish a page hoping for AI citations without running a formal technical check. This checklist ensures your pages are perfectly optimized for both traditional search robots and LLM-driven generative crawlers.\n\n---\n\n## 📋 The 25-Point Algorithmic Checklist\n\n### Phase 1: Semantic Parsability\n- [ ] **Direct Answer Modules:** Ensure the page contains a direct, bolded response of 20-30 words near the top of the body copy to simplify RAG chunking.\n- [ ] **Structural Headers (H2/H3):** Map headings strictly to nested logical parameters to help conversational engines quickly determine topic relevance.\n- [ ] **Entity Term Co-Occurrences:** Verify that your content includes relevant secondary entities and industry nouns associated with your primary subject.\n\n### Phase 2: Schema & Metadata Security\n- [ ] **Clean JSON-LD Schema:** Embed precise markup defining the Organization, Product, FAQ, or Topic of the page.\n- [ ] **Canonical URL Congruence:** Ensure canonical tags point precisely to the correct HTTPS URL to prevent indexing fragmentation.\n- [ ] **Indexation Flags Verification:** Confirm your robot tags are configured as `index, follow` and that the page is accessible to LLM crawler agents defined in your `robots.txt` file."
  }
];

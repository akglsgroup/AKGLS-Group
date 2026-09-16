import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Clock, Calendar, Search, 
  Send, Share2, Check, FileText, ChevronRight, 
  HelpCircle, Sparkles, TrendingUp, Compass, MessageSquare,
  Award, BookOpenCheck, Layout, Flame,
  ShieldCheck, SlidersHorizontal, ArrowUpDown, X, Layers,
  Copy, ExternalLink, Quote, MessageCircle, Type
} from 'lucide-react';
import { BLOG_POSTS, BlogPost, BlogTopicCategory, calculateReadingTime } from '../blogData';

interface SeoBlogListPageProps {
  initialCategory?: string | null;
  onBackToHome: () => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToTool: (toolId: string) => void;
}

export type TopicFilter = 'All' | 'AI SEO' | 'Growth Marketing' | 'Technical Audits';

export type SortMode = 
  | 'topic'        // Groups / orders by topic: AI SEO -> Growth Marketing -> Technical Audits
  | 'date-desc'    // Latest first (default)
  | 'date-asc'     // Oldest first
  | 'read-asc'     // Quick reads first
  | 'read-desc'    // Deep dives first
  | 'title-asc';   // Alphabetical (A to Z)

interface TopicConfig {
  id: TopicFilter;
  label: string;
  shortLabel: string;
  tagline: string;
  description: string;
  badgeClass: string;
  iconBg: string;
  activeBorder: string;
  accentText: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const TOPIC_CONFIGS: Record<TopicFilter, TopicConfig> = {
  'All': {
    id: 'All',
    label: 'All Topics',
    shortLabel: 'All',
    tagline: 'Comprehensive Research & Playbook Archive',
    description: 'Explore the full spectrum of Generative Engine Optimization, B2B SaaS demand engines, and forensic enterprise technical audits.',
    badgeClass: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    activeBorder: 'border-emerald-500 bg-emerald-950/80 text-white shadow-lg shadow-emerald-950/40',
    accentText: 'text-emerald-400',
    icon: Layers,
    highlights: ['AI Search Algorithms', 'B2B Growth Playbooks', 'Crawl Budget Audits']
  },
  'AI SEO': {
    id: 'AI SEO',
    label: 'AI SEO',
    shortLabel: 'AI SEO',
    tagline: 'SGE, RAG & LLM Citations',
    description: 'Deconstruct how ChatGPT Search, Perplexity, Gemini, and Claude retrieve, evaluate, and cite authoritative sources.',
    badgeClass: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30 hover:border-emerald-400',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    activeBorder: 'border-emerald-500 bg-emerald-950/80 text-emerald-300 shadow-lg shadow-emerald-950/40',
    accentText: 'text-emerald-400',
    icon: Sparkles,
    highlights: ['Generative Engine Optimization (GEO)', 'Answer Engine Optimization (AEO)', 'LLM Embedding Retrieval', 'Zero-Click Voice Search']
  },
  'Growth Marketing': {
    id: 'Growth Marketing',
    label: 'Growth Marketing',
    shortLabel: 'Growth',
    tagline: 'B2B SaaS, Link Infrastructure & CRO',
    description: 'Actionable strategies for organic acquisition flywheels, white-hat editorial co-citations, and B2B conversion rate optimization.',
    badgeClass: 'bg-sky-950/70 text-sky-300 border-sky-500/30 hover:border-sky-400',
    iconBg: 'bg-sky-500/15 text-sky-400',
    activeBorder: 'border-sky-500 bg-sky-950/80 text-sky-300 shadow-lg shadow-sky-950/40',
    accentText: 'text-sky-400',
    icon: TrendingUp,
    highlights: ['Bottom-of-Funnel SaaS Demand', 'High-Impact Editorial Link Building', 'Organic Conversion Rate Optimization', 'CAC Reduction Loops']
  },
  'Technical Audits': {
    id: 'Technical Audits',
    label: 'Technical Audits',
    shortLabel: 'Technical',
    tagline: 'Core Web Vitals, Crawl Budget & Schemas',
    description: 'Forensic audits of server access logs, JavaScript hydration overhead, multi-entity JSON-LD graphs, and Core Web Vitals (INP/LCP/CLS).',
    badgeClass: 'bg-indigo-950/70 text-indigo-300 border-indigo-500/30 hover:border-indigo-400',
    iconBg: 'bg-indigo-500/15 text-indigo-400',
    activeBorder: 'border-indigo-500 bg-indigo-950/80 text-indigo-300 shadow-lg shadow-indigo-950/40',
    accentText: 'text-indigo-400',
    icon: ShieldCheck,
    highlights: ['Core Web Vitals & INP Mastery', 'Server Log File Forensics', 'Faceted Navigation Hygiene', 'Multi-Entity JSON-LD Schema']
  }
};

const SORT_OPTIONS: { id: SortMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'topic', label: 'Sort by Topic (AI SEO • Growth • Technical)', icon: Layout },
  { id: 'date-desc', label: 'Latest Insights (Newest First)', icon: Calendar },
  { id: 'date-asc', label: 'Archive Order (Oldest First)', icon: Calendar },
  { id: 'read-asc', label: 'Quick Reads (< 8 min)', icon: Clock },
  { id: 'read-desc', label: 'Deep Dives (> 8 min)', icon: Clock },
  { id: 'title-asc', label: 'Title Alphabetical (A to Z)', icon: ArrowUpDown }
];

export default function SeoBlogListPage({ 
  initialCategory, 
  onBackToHome, 
  onNavigateToTool
}: SeoBlogListPageProps) {
  
  // Normalize string category to TopicFilter
  const normalizeCategory = (cat: string | null | undefined): TopicFilter => {
    if (!cat) return 'All';
    const clean = cat.trim().toLowerCase();
    if (clean.includes('ai') || clean.includes('geo') || clean.includes('aeo')) return 'AI SEO';
    if (clean.includes('growth') || clean.includes('saas') || clean.includes('marketing')) return 'Growth Marketing';
    if (clean.includes('tech') || clean.includes('audit') || clean.includes('seo blog') || clean.includes('vital') || clean.includes('google')) return 'Technical Audits';
    if (clean.includes('all')) return 'All';
    if (cat === 'AI SEO' || cat === 'Growth Marketing' || cat === 'Technical Audits') return cat;
    return 'All';
  };

  const [selectedCategory, setSelectedCategory] = useState<TopicFilter>(() => normalizeCategory(initialCategory));
  const [sortBy, setSortBy] = useState<SortMode>('date-desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Read progress tracker
  const [readProgress, setReadProgress] = useState(0);

  // Subscription Newsletter state
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  // Share link copy success state
  const [isCopied, setIsCopied] = useState(false);

  // Reader typography preference: 'sm' | 'md' | 'lg'
  const [readerFontSize, setReaderFontSize] = useState<'sm' | 'md' | 'lg'>('md');

  // Category counts
  const getPostCount = (cat: TopicFilter) => {
    if (cat === 'All') return BLOG_POSTS.length;
    return BLOG_POSTS.filter(post => post.category === cat).length;
  };

  // Switch category and sync URL
  const handleCategoryChange = (cat: TopicFilter) => {
    setSelectedCategory(cat);
    const url = new URL(window.location.href);
    if (cat === 'All') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', cat);
    }
    window.history.pushState({}, '', url.toString());
  };

  // Sync initial category from props and listen to back/forward navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;
      
      let foundPost: BlogPost | null = null;
      
      // Parse pathname for /blog/slug pattern
      if (pathname.startsWith('/blog/')) {
        const slug = pathname.replace('/blog/', '').replace(/\/$/, '');
        if (slug) {
          foundPost = BLOG_POSTS.find(p => p.slug === slug) || null;
        }
      }
      
      // Fallback to hashtag for user flexibility
      if (!foundPost && hash && (hash.startsWith('#blog/') || hash.startsWith('#/blog/'))) {
        const slug = hash.replace(/^#\/?blog\//, '');
        if (slug) {
          foundPost = BLOG_POSTS.find(p => p.slug === slug) || null;
        }
      }

      // Check query param for category
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam) {
        setSelectedCategory(normalizeCategory(catParam));
      }

      setSelectedPost(foundPost);
    };

    if (initialCategory) {
      setSelectedCategory(normalizeCategory(initialCategory));
    }

    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [initialCategory]);

  // Track window scroll for progress indicator
  useEffect(() => {
    if (!selectedPost) {
      setReadProgress(0);
      return;
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPost]);

  // Sync tab titles dynamic updates
  useEffect(() => {
    const originalTitle = document.title;
    if (selectedPost) {
      document.title = `${selectedPost.title} | AKGLS Group Insights`;
    } else if (selectedCategory !== 'All') {
      document.title = `${selectedCategory} Articles & Playbooks | AKGLS Group Blog`;
    } else {
      document.title = "High-Speed SEO, GEO & AI Search Marketing Insights | AKGLS Group";
    }
    return () => {
      document.title = originalTitle;
    };
  }, [selectedPost, selectedCategory]);

  // Filter posts based on category and search query
  const filteredPosts = BLOG_POSTS.filter(post => {
    const categoryMatches = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatches = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatches && searchMatches;
  });

  // Sort filtered posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'topic') {
      const topicRank: Record<string, number> = {
        'AI SEO': 1,
        'Growth Marketing': 2,
        'Technical Audits': 3
      };
      const rankA = topicRank[a.category] ?? 99;
      const rankB = topicRank[b.category] ?? 99;
      if (rankA !== rankB) return rankA - rankB;
      // Secondary sort: newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === 'date-desc') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === 'date-asc') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sortBy === 'read-asc') {
      const statsA = calculateReadingTime(a.content);
      const statsB = calculateReadingTime(b.content);
      if (statsA.minutes !== statsB.minutes) {
        return statsA.minutes - statsB.minutes;
      }
      return statsA.wordCount - statsB.wordCount;
    }
    if (sortBy === 'read-desc') {
      const statsA = calculateReadingTime(a.content);
      const statsB = calculateReadingTime(b.content);
      if (statsA.minutes !== statsB.minutes) {
        return statsB.minutes - statsA.minutes;
      }
      return statsB.wordCount - statsA.wordCount;
    }
    if (sortBy === 'title-asc') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Spotlight logic: In 'All Topics' with newest sort and no search, showcase first item prominently
  const isDefaultFeed = selectedCategory === 'All' && searchQuery === '' && sortBy === 'date-desc';
  const spotlightPost = isDefaultFeed ? sortedPosts[0] : null;
  const gridPosts = isDefaultFeed ? sortedPosts.slice(1) : sortedPosts;

  // Dynamic compiler of Table of Contents
  const tocChapters = selectedPost ? selectedPost.content
    .split('\n')
    .filter(line => line.startsWith('## ') || line.startsWith('### '))
    .map((line, idx) => {
      const depth = line.startsWith('## ') ? 2 : 3;
      const titleText = line.replace(/^##+\s+/, '').trim();
      const elementId = `chapter-ref-${idx}`;
      return { id: elementId, text: titleText, isSub: depth === 3 };
    }) : [];

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.history.pushState(null, '', `/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePost = () => {
    setSelectedPost(null);
    const url = selectedCategory !== 'All' 
      ? `/blog?category=${encodeURIComponent(selectedCategory)}` 
      : '/blog';
    window.history.pushState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCopyLink = () => {
    if (!selectedPost) return;
    const url = `https://www.akglsgroup.com/blog/${selectedPost.slug}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  const handleShareWhatsApp = (post: BlogPost) => {
    const url = `https://www.akglsgroup.com/blog/${post.slug}`;
    const text = `*${post.title}*\n\n${post.shortDesc}\n\nRead the full breakdown on AKGLS Group:\n${url}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShareTwitter = (post: BlogPost) => {
    const url = `https://www.akglsgroup.com/blog/${post.slug}`;
    const text = `${post.title} | High-Speed SEO & AI Search Insight via @AKGLSGroup`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = (post: BlogPost) => {
    const url = `https://www.akglsgroup.com/blog/${post.slug}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setSubscribedSuccess(true);
    setSubscriberEmail('');
    setTimeout(() => setSubscribedSuccess(false), 6000);
  };

  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Helper for rendering topic badges on cards
  const renderTopicBadge = (category: string, clickable = true) => {
    const topicKey = normalizeCategory(category);
    const config = TOPIC_CONFIGS[topicKey] || TOPIC_CONFIGS['All'];
    const Icon = config.icon;

    if (!clickable) {
      return (
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${config.badgeClass}`}>
          <Icon className="w-3 h-3" />
          <span>{category}</span>
        </span>
      );
    }

    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleCategoryChange(topicKey);
        }}
        className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border transition-all ${config.badgeClass}`}
        title={`Filter articles by topic: ${category}`}
      >
        <Icon className="w-3 h-3" />
        <span>{category}</span>
      </button>
    );
  };

  // Inline formatting parser supporting bold, italic, inline code, and hyperlinks
  const parseInlineFormatting = (text: string): React.ReactNode => {
    const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      if (!part) return null;
      if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          const linkText = match[1];
          const linkUrl = match[2];
          const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('//');
          return (
            <a
              key={idx}
              href={linkUrl}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-400 transition-colors font-medium inline-flex items-center gap-0.5"
            >
              <span>{linkText}</span>
              {isExternal && <ExternalLink className="w-2.5 h-2.5 inline shrink-0 opacity-75 ml-0.5" />}
            </a>
          );
        }
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="text-white font-bold tracking-tight">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
        return (
          <em key={idx} className="text-slate-200 italic font-serif">
            {part.slice(1, -1)}
          </em>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={idx}
            className="bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[11px] px-1.5 py-0.5 rounded shadow-inner"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  // Polished Code Snippet component with Copy button & macOS window chrome
  const CodeSnippet: React.FC<{ language: string; code: string }> = ({ language, code }) => {
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-[#070b14] shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 items-center mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-[10.5px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
              {language || 'code'}
            </span>
          </div>
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-2.5 py-1 rounded-md transition"
            title="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy code</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-xs font-mono text-emerald-300/95 overflow-x-auto leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    );
  };

  // Markdown Table component with responsive horizontal scroll
  const MarkdownTable: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
    <div className="my-7 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl">
      <table className="w-full text-left text-xs border-collapse">
        <thead>
          <tr className="bg-slate-900/95 border-b border-slate-800 text-slate-200 font-mono text-[11px] uppercase tracking-wider">
            {headers.map((h, i) => (
              <th key={i} className="py-3.5 px-4 font-bold text-slate-200 border-r border-slate-800/60 last:border-r-0">
                {parseInlineFormatting(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-900/80">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors odd:bg-slate-950/40 even:bg-slate-900/20">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="py-3.5 px-4 text-slate-300 leading-relaxed border-r border-slate-900/60 last:border-r-0">
                  {parseInlineFormatting(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // BlockQuote component with quote icon and accent border
  const BlockQuote: React.FC<{ text: string }> = ({ text }) => (
    <blockquote className="my-6 border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-950/30 via-slate-950/50 to-transparent p-4 sm:p-5 rounded-r-2xl text-slate-200 text-xs sm:text-sm leading-relaxed italic relative">
      <div className="flex gap-3 items-start">
        <Quote className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-90" />
        <div className="flex-1 not-italic">
          {parseInlineFormatting(text)}
        </div>
      </div>
    </blockquote>
  );

  // Markdown renderer for deep read mode with full structural support
  const renderFormattedMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;
    let chapterCounter = 0;

    const bodyTextSizeClass = 
      readerFontSize === 'sm' ? 'text-xs leading-relaxed mb-4' :
      readerFontSize === 'lg' ? 'text-base sm:text-lg leading-relaxed md:leading-8 mb-5' :
      'text-xs sm:text-sm md:text-[15px] leading-relaxed md:leading-7 mb-4.5';

    while (i < lines.length) {
      const line = lines[i];

      // 1. Code fence check
      if (line.startsWith('```')) {
        const language = line.replace('```', '').trim() || 'code';
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing fence
        elements.push(
          <CodeSnippet key={`code-${i}`} language={language} code={codeLines.join('\n')} />
        );
        continue;
      }

      // 2. Table (| Col 1 | Col 2 |)
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }
        if (tableLines.length >= 2) {
          const splitRow = (r: string) => r.slice(1, -1).split('|').map(c => c.trim());
          const headers = splitRow(tableLines[0]);
          const rows = tableLines.slice(2).map(splitRow);
          elements.push(
            <MarkdownTable key={`table-${i}`} headers={headers} rows={rows} />
          );
          continue;
        }
      }

      // 3. Blockquote (> Quote text)
      if (line.trim().startsWith('>')) {
        const quoteLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('>')) {
          quoteLines.push(lines[i].replace(/^>\s?/, '').trim());
          i++;
        }
        elements.push(
          <BlockQuote key={`quote-${i}`} text={quoteLines.join(' ')} />
        );
        continue;
      }

      // 4. Horizontal Rule
      if (line.trim() === '---') {
        elements.push(
          <hr key={`hr-${i}`} className="my-8 border-slate-900/90" />
        );
        i++;
        continue;
      }

      // 5. Skip H1 (handled by header)
      if (line.startsWith('# ')) {
        i++;
        continue;
      }

      // 6. H2 Heading
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim();
        const id = `chapter-ref-${chapterCounter++}`;
        elements.push(
          <h2 
            id={id} 
            key={`h2-${i}`} 
            className="text-xl sm:text-2xl font-black text-white tracking-tight mt-10 mb-4 pt-5 border-t border-slate-900 flex items-center gap-3 font-display"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0 ring-4 ring-emerald-500/20" />
            <span>{text}</span>
          </h2>
        );
        i++;
        continue;
      }

      // 7. H3 Heading
      if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim();
        const id = `chapter-ref-${chapterCounter++}`;
        elements.push(
          <h3 
            id={id} 
            key={`h3-${i}`} 
            className="text-base sm:text-lg font-bold text-teal-300 tracking-tight mt-6 mb-3 flex items-center gap-2 font-display"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
            <span>{text}</span>
          </h3>
        );
        i++;
        continue;
      }

      // 8. Ordered List (1. Step)
      const orderedMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (orderedMatch) {
        const num = orderedMatch[1];
        const listText = orderedMatch[2];
        elements.push(
          <div key={`ol-${i}`} className="flex gap-3 items-start my-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed pl-1">
            <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
              {num}
            </span>
            <div className="flex-1">
              {parseInlineFormatting(listText)}
            </div>
          </div>
        );
        i++;
        continue;
      }

      // 9. Unordered List (* Item or - Item)
      if (line.match(/^(\*|-)\s+/)) {
        const listText = line.replace(/^(\*|-)\s+/, '');
        elements.push(
          <div key={`ul-${i}`} className="flex gap-2.5 items-start my-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed pl-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mt-2 shrink-0 ring-2 ring-teal-400/20" />
            <div className="flex-1">
              {parseInlineFormatting(listText)}
            </div>
          </div>
        );
        i++;
        continue;
      }

      // 10. Empty line
      if (line.trim() === '') {
        i++;
        continue;
      }

      // 11. Standard paragraph
      elements.push(
        <p key={`p-${i}`} className={`text-slate-300 font-light ${bodyTextSizeClass}`}>
          {parseInlineFormatting(line)}
        </p>
      );
      i++;
    }

    return elements;
  };

  const activeTopicConfig = TOPIC_CONFIGS[selectedCategory];
  const ActiveTopicIcon = activeTopicConfig.icon;

  return (
    <div className="flex-1 bg-[#090d16] min-h-screen relative overflow-hidden text-slate-100 flex flex-col font-sans">
      
      {/* Scroll indicator for reading mode */}
      {selectedPost && (
        <div className="fixed top-0 inset-x-0 h-1 bg-slate-950 z-50">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-75 relative" 
            style={{ width: `${readProgress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-md shadow-white/80 animate-ping" />
          </div>
        </div>
      )}

      {/* Radiant spotlights backgrounds */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-950/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Subpage Header layout container */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-8 pb-3 z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {selectedPost ? (
          <button 
            onClick={handleClosePost}
            className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-slate-900/80 border border-slate-800/80 px-4 py-2.5 rounded-xl backdrop-blur-md hover:border-slate-705 shadow-lg shadow-black/20"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition duration-200" />
            <span className="font-bold">Return to {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory}`}</span>
          </button>
        ) : (
          <button 
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-slate-900/80 border border-slate-800/80 px-4 py-2.5 rounded-xl backdrop-blur-md hover:border-slate-705 shadow-lg shadow-black/20"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition duration-200" />
            <span className="font-bold">Back to AKGLS Home</span>
          </button>
        )}

        {/* Dynamic breadcrumbs */}
        <div className="text-[11px] text-slate-500 font-semibold tracking-wide flex items-center gap-1.5 bg-slate-950/50 px-3.5 py-1.5 rounded-lg border border-slate-900/85 flex-wrap">
          <span className="hover:text-slate-300 transition cursor-pointer" onClick={onBackToHome}>Home</span>
          <span className="text-slate-700">/</span>
          <span 
            className="hover:text-slate-300 transition cursor-pointer" 
            onClick={() => { handleCategoryChange('All'); handleClosePost(); }}
          >
            Blog
          </span>
          {selectedCategory !== 'All' && !selectedPost && (
            <>
              <span className="text-slate-700">/</span>
              <span className="text-emerald-400 font-bold">{selectedCategory}</span>
            </>
          )}
          {selectedPost && (
            <>
              <span className="text-slate-700">/</span>
              <span 
                className="hover:text-emerald-400 transition cursor-pointer font-medium"
                onClick={() => { handleCategoryChange(normalizeCategory(selectedPost.category)); handleClosePost(); }}
              >
                {selectedPost.category}
              </span>
              <span className="text-slate-700">/</span>
              <span className="text-slate-350 cursor-default truncate max-w-[140px] sm:max-w-[200px] font-bold">{selectedPost.title}</span>
            </>
          )}
        </div>
      </div>

      {/* CORE DISPLAY ROUTE ENGINE */}
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          
          /* 1. COMPREHENSIVE DIRECTORY FEED VIEW */
          <motion.div
            key="listing"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-7xl mx-auto w-full px-6 py-6 space-y-8 z-10 relative flex-1"
          >
            {/* Header copy */}
            <header className="max-w-3xl space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-full text-[10.5px] font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                AKGLS Group Technical Research & Insights
              </span>
              <h1 className="text-3.5xl sm:text-5xl font-black text-white tracking-tight leading-none">
                Organic Visibility & <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Algorithm Engineering</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Authoritative playbooks on Generative Engine Optimization (GEO), enterprise crawl budgets, white-hat link acquisition, and high-ticket B2B pipeline conversion.
              </p>
            </header>

            {/* CATEGORY FILTER SYSTEM & CONTROLS TOOLBAR */}
            <div className="space-y-4">
              
              {/* Category Pills Bar */}
              <div className="bg-slate-900/40 p-4 border border-slate-850/80 rounded-2xl backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" /> Filter by Topic:
                  </span>
                  {selectedCategory !== 'All' && (
                    <button
                      onClick={() => handleCategoryChange('All')}
                      className="text-[11px] text-slate-400 hover:text-emerald-400 font-medium inline-flex items-center gap-1 transition"
                    >
                      <X className="w-3 h-3" /> Clear Topic Filter
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {(['All', 'AI SEO', 'Growth Marketing', 'Technical Audits'] as TopicFilter[]).map((cat) => {
                    const isActive = selectedCategory === cat;
                    const config = TOPIC_CONFIGS[cat];
                    const Icon = config.icon;
                    const count = getPostCount(cat);

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleCategoryChange(cat)}
                        className={`text-xs px-4 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2.5 border ${
                          isActive 
                            ? config.activeBorder
                            : 'bg-slate-950/70 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-white'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                        <span>{config.label}</span>
                        <span className={`text-[10px] font-mono rounded px-1.5 py-0.5 select-none font-bold ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-slate-900 text-slate-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECONDARY CONTROLS BAR: SEARCH + SORTING */}
              <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center bg-slate-950/50 p-3.5 border border-slate-900 rounded-2xl">
                
                {/* Search query box */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search articles by title, entity, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500 rounded-xl pl-10 pr-9 py-2 text-xs font-medium text-slate-200 outline-none transition placeholder:text-slate-600"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-0.5"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sort Controls */}
                <div className="flex items-center gap-2 flex-wrap">
                  
                  {/* Quick "Sort by Topic" button */}
                  <button
                    onClick={() => setSortBy('topic')}
                    className={`text-xs px-3 py-2 rounded-xl font-bold transition flex items-center gap-1.5 border ${
                      sortBy === 'topic'
                        ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                    title="Sort and group articles by Topic category"
                  >
                    <Layout className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sort by Topic</span>
                  </button>

                  {/* Dropdown sort selector */}
                  <div className="relative flex items-center">
                    <SlidersHorizontal className="absolute left-3 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortMode)}
                      className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold rounded-xl pl-8 pr-8 py-2 outline-none cursor-pointer appearance-none transition focus:border-emerald-500"
                    >
                      {SORT_OPTIONS.map(opt => (
                        <option key={opt.id} value={opt.id} className="bg-slate-950 text-slate-200">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-3 w-3.5 h-3.5 text-slate-500 rotate-90 pointer-events-none" />
                  </div>

                </div>

              </div>

              {/* Status and Active Filter Strip */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                <div>
                  <span>Showing </span>
                  <span className="text-white font-bold">{sortedPosts.length}</span>
                  <span> of {BLOG_POSTS.length} articles</span>
                  {selectedCategory !== 'All' && (
                    <span> in <strong className="text-emerald-400">{selectedCategory}</strong></span>
                  )}
                  {searchQuery && (
                    <span> matching &quot;<strong className="text-slate-300">{searchQuery}</strong>&quot;</span>
                  )}
                  {sortBy === 'topic' && (
                    <span className="ml-2 text-slate-400 font-mono text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Ordered by Topic
                    </span>
                  )}
                </div>

                {(selectedCategory !== 'All' || searchQuery !== '' || sortBy !== 'date-desc') && (
                  <button
                    onClick={() => {
                      handleCategoryChange('All');
                      setSearchQuery('');
                      setSortBy('date-desc');
                    }}
                    className="text-slate-400 hover:text-emerald-400 transition font-medium"
                  >
                    Reset all filters
                  </button>
                )}
              </div>

            </div>

            {/* ACTIVE TOPIC CONTEXT BANNER (When a specific category is selected) */}
            {selectedCategory !== 'All' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-slate-900/80 via-slate-950 to-slate-900/60 border border-slate-800/80 rounded-2xl p-5 md:p-6 space-y-3 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border border-slate-800 ${activeTopicConfig.iconBg}`}>
                      <ActiveTopicIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-black text-white">{activeTopicConfig.label}</h2>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-bold">
                          {sortedPosts.length} Guides
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light mt-0.5">
                        {activeTopicConfig.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCategoryChange('All')}
                    className="shrink-0 text-xs px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 font-bold border border-slate-800 transition"
                  >
                    View All Topics
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900/80">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">Focus areas:</span>
                  {activeTopicConfig.highlights.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-950/80 text-slate-400 border border-slate-850 px-2 py-0.5 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SHOWCASE HIGHEST FEATURED POST IF ACTIVE ON DEFAULT ALL-BLOGS FEED */}
            {spotlightPost && (
              <div className="bg-gradient-to-br from-slate-900/60 via-slate-950/40 to-[#0c1424]/50 border border-slate-800 rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-700/80 transition duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-44 w-44 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />
                
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1 text-[9.5px] bg-emerald-950 border border-emerald-500/25 text-emerald-400 rounded-md py-1 px-3 font-black uppercase tracking-widest">
                      <Flame className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      FEATURED INSIGHT
                    </span>
                    {renderTopicBadge(spotlightPost.category)}
                    {(() => {
                      const stats = calculateReadingTime(spotlightPost.content);
                      return (
                        <span 
                          className="text-[10px] bg-slate-950/80 border border-slate-900 text-slate-300 rounded py-1 px-2.5 font-mono font-bold flex items-center gap-1.5"
                          title={`${stats.wordCount.toLocaleString()} words (estimated at 200 words/min)`}
                        >
                          <Clock className="w-3 h-3 text-emerald-400" />
                          <span>{stats.text}</span>
                          <span className="text-[9px] text-slate-500 font-normal">({stats.wordCount.toLocaleString()} words)</span>
                        </span>
                      );
                    })()}
                  </div>

                  <h3 
                    onClick={() => handleSelectPost(spotlightPost)}
                    className="text-xl md:text-3xl font-black text-white hover:text-emerald-400 transition cursor-pointer leading-tight tracking-tight font-display"
                  >
                    {spotlightPost.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                    {spotlightPost.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {spotlightPost.tags.map(tag => (
                      <span key={tag} className="text-[9.5px] font-mono border border-slate-900 bg-slate-950/60 text-slate-400 py-0.5 px-2.5 rounded-md font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-900/70 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-3">
                      <img src={spotlightPost.author.avatar} alt="Author avatar" className="h-9 w-9 rounded-full border border-slate-800 object-cover" />
                      <div>
                        <span className="block text-xs font-bold text-white leading-none">{spotlightPost.author.name}</span>
                        <span className="block text-[10px] text-slate-500 mt-1 font-semibold">{spotlightPost.author.role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShareWhatsApp(spotlightPost);
                        }}
                        className="bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-[#25D366]/40 text-slate-300 hover:text-[#25D366] text-xs font-bold px-3 py-2.5 rounded-xl transition inline-flex items-center gap-1.5 active:scale-95"
                        title="Share via WhatsApp"
                        aria-label="Share via WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="hidden sm:inline text-[11px]">WhatsApp</span>
                      </button>

                      <button 
                        onClick={() => handleSelectPost(spotlightPost)}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition inline-flex items-center gap-1.5 shadow-md shadow-emerald-950/30 active:scale-95"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive visual schematic */}
                <div className="lg:col-span-5 bg-slate-950/90 border border-slate-850/80 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-56 group-hover:border-slate-700 transition duration-300">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      <BookOpenCheck className="w-4 h-4" />
                    </span>
                    <span className="text-[9px] text-teal-400 font-mono tracking-widest uppercase bg-teal-950/40 px-2 py-0.5 rounded border border-teal-900/30 font-bold">ALGORITHM MATRIX</span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">EMBEDDED RAG LOGIC GRAPHS</span>
                    <p className="text-[10px] font-mono text-teal-300 bg-slate-900/40 p-3.5 rounded-lg border border-slate-900 leading-relaxed font-semibold whitespace-pre">
                      {"{"} <br />
                      &nbsp;&nbsp;&quot;@context&quot;: &quot;schema.org/GEO&quot;,<br />
                      &nbsp;&nbsp;&quot;citationScore&quot;: &quot;98.4% [CRITICAL]&quot;,<br />
                      &nbsp;&nbsp;&quot;entityTrustRank&quot;: &quot;HIGH_ESTABLISHED&quot;<br />
                      {"}"}
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* TILED BLOGS GRID VIEW */}
            {gridPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {gridPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-slate-900/30 border border-slate-850/80 rounded-2xl p-6 hover:border-slate-700 transition duration-300 flex flex-col justify-between space-y-5 group h-full hover:shadow-xl hover:shadow-black/20 relative"
                  >
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center gap-2">
                        {renderTopicBadge(post.category)}
                        <span className="text-[9.5px] text-slate-500 font-mono font-medium">{post.date}</span>
                      </div>

                      <h3 
                        onClick={() => handleSelectPost(post)}
                        className="text-base font-black text-slate-100 group-hover:text-emerald-400 transition cursor-pointer leading-snug font-display"
                      >
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-light">
                        {post.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[8px] font-mono border border-slate-900 bg-slate-950/70 text-slate-500 py-0.5 px-2 rounded-md font-bold">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-900 flex justify-between items-center mt-auto">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt="Author Avatar" className="h-6 w-6 rounded-full border border-slate-800 object-cover" />
                        <span className="text-[10.5px] text-slate-400 font-bold">{post.author.name}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {(() => {
                          const stats = calculateReadingTime(post.content);
                          return (
                            <span 
                              className="text-[9.5px] text-slate-400 font-mono flex items-center gap-1.5 bg-slate-950/70 border border-slate-900 px-2 py-0.5 rounded"
                              title={`${stats.wordCount.toLocaleString()} words • estimated at 200 wpm`}
                            >
                              <Clock className="w-3 h-3 text-emerald-400/80" />
                              <span>{stats.text}</span>
                            </span>
                          );
                        })()}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShareWhatsApp(post);
                          }}
                          className="text-slate-500 hover:text-[#25D366] hover:bg-slate-900 p-1.5 rounded-lg transition"
                          title="Share via WhatsApp"
                          aria-label="Share via WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </button>

                        <button 
                          onClick={() => handleSelectPost(post)}
                          className="text-xs text-emerald-400 font-bold hover:text-emerald-300 transition inline-flex items-center gap-0.5"
                        >
                          <span>Read</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* No matching result state */
              <div className="bg-slate-950 border border-slate-900 rounded-3xl p-14 text-center max-w-md mx-auto space-y-4">
                <HelpCircle className="w-10 h-10 text-slate-700 mx-auto" />
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">No Articles Matched</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  No published insights matched &quot;{searchQuery}&quot; in {selectedCategory === 'All' ? 'all topics' : selectedCategory}.
                </p>
                <button 
                  onClick={() => { 
                    setSelectedCategory('All'); 
                    setSearchQuery(''); 
                    setSortBy('date-desc');
                  }}
                  className="bg-slate-900 border border-slate-800 hover:bg-slate-850/80 text-xs text-slate-300 font-bold px-4 py-2.5 rounded-xl transition inline-flex items-center gap-2"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}

            {/* DIRECT NEWSLETTER BOX */}
            <div className="bg-gradient-to-br from-[#070b13] via-[#0b1220] to-[#070c13] border border-slate-800/80 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl text-center md:text-left">
              <div className="absolute top-0 right-10 h-32 w-32 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-950 border border-teal-500/25 text-teal-400 rounded-md text-[10px] font-black tracking-wide uppercase">
                    <Award className="w-3.5 h-3.5" />
                    Trusted Technical Circular
                  </span>
                  <h3 className="text-xl md:text-2.5xl font-black text-white tracking-tight leading-tight">
                    Join SEO Insiders Executive Circle
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-light">
                    Zero spam. Get direct code blueprints, structural algorithm diagnostics, and SGE citation maps written directly by our founding consultants.
                  </p>
                </div>

                <div className="md:col-span-5 w-full">
                  <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                    <input
                      type="email"
                      required
                      placeholder="corporate@yourcompany.com"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                    />
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl transition inline-flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Subscribe
                    </button>
                  </form>
                  {subscribedSuccess && (
                    <span className="block text-[11px] text-emerald-400 mt-2.5 font-bold animate-pulse text-left">
                      ✓ Authorization complete. SGE briefs queued to launch.
                    </span>
                  )}
                </div>

              </div>
            </div>

          </motion.div>
        ) : (
          
          /* 2. MAJESTIC READER INTERFACE WITH FLOATING INTERACTIVE TABLE OF CONTENTS */
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-7xl mx-auto w-full px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 relative"
          >
            
            {/* LEFT MAIN DEEP-READ BLOG POST */}
            <main className="lg:col-span-8 bg-slate-900/20 border border-slate-800/80 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl relative select-text">
              <div className="absolute top-0 right-0 h-40 w-45 bg-indigo-500/5 blur-[90px] rounded-full pointer-events-none" />
              
              <div className="space-y-5 text-left">
                {/* Reading Toolbar & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/80">
                  <div className="flex flex-wrap items-center gap-2">
                    {renderTopicBadge(selectedPost.category, false)}
                    <span className="text-[10.5px] text-slate-500 font-mono font-semibold flex items-center gap-1.5 pl-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-600" />
                      {selectedPost.date}
                    </span>
                    {(() => {
                      const stats = calculateReadingTime(selectedPost.content);
                      return (
                        <span 
                          className="text-[10.5px] text-slate-400 font-mono font-semibold flex items-center gap-1.5 pl-1"
                          title={`${stats.wordCount.toLocaleString()} total words calculated at 200 wpm`}
                        >
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{stats.text}</span>
                          <span className="text-[9.5px] text-slate-400 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded font-mono font-medium">
                            {stats.wordCount.toLocaleString()} words
                          </span>
                        </span>
                      );
                    })()}
                  </div>

                  {/* Reading mode toolbar: Font size & Quick WhatsApp */}
                  <div className="flex items-center gap-2 select-none">
                    <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-lg p-0.5" title="Adjust text size">
                      <Type className="w-3 h-3 text-slate-500 ml-1.5 mr-1" />
                      <button
                        onClick={() => setReaderFontSize('sm')}
                        className={`px-2 py-0.5 text-[10px] font-mono rounded ${readerFontSize === 'sm' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:text-white'}`}
                      >
                        A-
                      </button>
                      <button
                        onClick={() => setReaderFontSize('md')}
                        className={`px-2 py-0.5 text-[10px] font-mono rounded ${readerFontSize === 'md' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:text-white'}`}
                      >
                        A
                      </button>
                      <button
                        onClick={() => setReaderFontSize('lg')}
                        className={`px-2 py-0.5 text-[10px] font-mono rounded ${readerFontSize === 'lg' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:text-white'}`}
                      >
                        A+
                      </button>
                    </div>

                    <button
                      onClick={() => handleShareWhatsApp(selectedPost)}
                      className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1.5"
                      title="Share to WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </button>
                  </div>
                </div>

                <h1 className="text-2.5xl sm:text-4xl md:text-4.5xl font-black text-white tracking-tight leading-tight font-display">
                  {selectedPost.title}
                </h1>

                {/* Author profile */}
                <div className="flex items-center gap-4 py-3.5 border-y border-slate-900 bg-slate-950/30 px-5 rounded-2xl border border-slate-900/60 my-4">
                  <img src={selectedPost.author.avatar} alt="Author avatar" className="h-11 w-11 rounded-full border border-slate-800 object-cover" />
                  <div className="flex-1">
                    <span className="block text-xs font-black text-white leading-none">{selectedPost.author.name}</span>
                    <span className="block text-[10px] text-slate-500 mt-1.5 font-bold uppercase tracking-wider">{selectedPost.author.role}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md hidden sm:inline-block font-semibold">
                    Technical Analyst Verified
                  </span>
                </div>

                {/* EXECUTIVE BRIEFING HIGHLIGHT CARD */}
                <div className="my-5 bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-900/50 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 space-y-2 relative overflow-hidden shadow-lg">
                  <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-widest text-emerald-400 font-black">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Executive Summary</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {selectedPost.shortDesc}
                  </p>
                </div>
              </div>

              {/* TABLE OF CONTENTS (MOBILE ONLY) */}
              {tocChapters.length > 0 && (
                <div className="lg:hidden my-6 bg-slate-950/70 p-5 rounded-2xl border border-slate-900 space-y-3.5 text-left">
                  <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 font-black">
                    <FileText className="w-4 h-4 text-teal-400" /> Chapter QuickLinks
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {tocChapters.map((chap, cIdx) => (
                      <li key={chap.id}>
                        <button 
                          onClick={() => scrollToChapter(chap.id)}
                          className={`text-[12px] text-left hover:text-teal-400 transition ${chap.isSub ? 'pl-4 text-slate-500' : 'text-slate-300 font-bold'}`}
                        >
                          {chap.isSub ? '•' : `${cIdx + 1}.`} {chap.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* RENDER EMBEDDED PARSED MARKDOWN */}
              <article className="max-w-none text-left pt-4 space-y-6">
                {renderFormattedMarkdown(selectedPost.content)}
              </article>

              {/* COMPREHENSIVE ARTICLE SOCIAL SHARE & ENGAGEMENT PANEL */}
              <div className="mt-12 pt-8 border-t border-slate-900 space-y-6">
                <div className="bg-gradient-to-br from-slate-950 via-[#0a1220] to-slate-950 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#25D366]/5 blur-[80px] pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-[#25D366] font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Share2 className="w-3.5 h-3.5 text-[#25D366]" /> Share Knowledge
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                        Found this technical briefing valuable?
                      </h3>
                      <p className="text-xs text-slate-400 font-light mt-0.5">
                        Broadcast to your team, colleagues, or engineering group directly on WhatsApp.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {selectedPost.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9.5px] font-mono border border-slate-850 bg-slate-900/80 text-slate-400 py-0.5 px-2 rounded font-semibold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share action buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
                    {/* Primary WhatsApp Share Button */}
                    <button
                      onClick={() => handleShareWhatsApp(selectedPost)}
                      className="sm:col-span-2 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-slate-950 font-black text-xs py-3 px-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 font-sans tracking-tight"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950/20 text-slate-950" />
                      <span>Share on WhatsApp</span>
                    </button>

                    {/* LinkedIn Share Button */}
                    <button
                      onClick={() => handleShareLinkedIn(selectedPost)}
                      className="bg-slate-900 hover:bg-slate-850 hover:border-slate-700 border border-slate-800 text-slate-200 text-xs font-bold py-3 px-3 rounded-xl transition flex items-center justify-center gap-1.5"
                      title="Share to LinkedIn"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </button>

                    {/* Twitter / X Share Button */}
                    <button
                      onClick={() => handleShareTwitter(selectedPost)}
                      className="bg-slate-900 hover:bg-slate-850 hover:border-slate-700 border border-slate-800 text-slate-200 text-xs font-bold py-3 px-3 rounded-xl transition flex items-center justify-center gap-1.5"
                      title="Share to X (Twitter)"
                    >
                      <span>X / Twitter</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </button>
                  </div>

                  {/* Copy Link Strip */}
                  <div className="flex items-center justify-between bg-slate-900/70 border border-slate-800/80 rounded-xl px-3.5 py-2.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-400 truncate pr-2 font-mono text-[11px]">
                      <span className="text-slate-600 select-none">URL:</span>
                      <span className="truncate text-slate-300">https://www.akglsgroup.com/blog/{selectedPost.slug}</span>
                    </div>
                    <button
                      onClick={handleCopyLink}
                      className="shrink-0 bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* All Article Tags list */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-[10px] text-slate-600 font-mono mr-1">Indexed tags:</span>
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="text-[9.5px] font-mono border border-slate-900 bg-slate-950/60 text-slate-400 py-0.5 px-2.5 rounded-md font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6 text-left">
              
              {/* DESKTOP SOCIAL SHARE QUICK BAR */}
              <div className="hidden lg:block bg-slate-950/80 border border-slate-850 p-5 rounded-2xl space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2.5">
                  <h4 className="text-[10.5px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2 font-black">
                    <Share2 className="w-3.5 h-3.5 text-emerald-400" /> Share Insight
                  </h4>
                  <span className="text-[9px] text-[#25D366] font-mono font-bold bg-[#25D366]/10 px-2 py-0.5 rounded border border-[#25D366]/20">
                    WhatsApp Ready
                  </span>
                </div>

                <button 
                  onClick={() => handleShareWhatsApp(selectedPost)}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 group active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950/20 text-slate-950 group-hover:scale-110 transition-transform" />
                  <span>Share on WhatsApp</span>
                </button>

                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => handleShareLinkedIn(selectedPost)}
                    className="bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-[10.5px] font-bold py-2 rounded-lg transition text-center"
                    title="Share on LinkedIn"
                  >
                    LinkedIn
                  </button>
                  <button 
                    onClick={() => handleShareTwitter(selectedPost)}
                    className="bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-[10.5px] font-bold py-2 rounded-lg transition text-center"
                    title="Share on X (Twitter)"
                  >
                    X
                  </button>
                  <button 
                    onClick={handleCopyLink}
                    className="bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-[10.5px] font-bold py-2 rounded-lg transition flex items-center justify-center gap-1"
                    title="Copy Article URL"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* DESKTOP STICKY TABLE OF CONTENTS */}
              {tocChapters.length > 0 && (
                <div className="hidden lg:block bg-slate-950/80 border border-slate-850 p-6 rounded-2xl space-y-4 sticky top-24 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <h4 className="text-[10.5px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2 font-black">
                      <Layout className="w-4 h-4 text-teal-400" /> Table of Contents
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {tocChapters.length} sections
                    </span>
                  </div>
                  
                  <nav className="space-y-2.5 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                    {tocChapters.map((chap, cIdx) => (
                      <button 
                        key={chap.id}
                        onClick={() => scrollToChapter(chap.id)}
                        className={`w-full text-left transition group/toc text-xs flex gap-2.5 items-start ${
                          chap.isSub 
                          ? 'pl-5 text-slate-500 hover:text-teal-400' 
                          : 'text-slate-300 hover:text-emerald-400 font-bold'
                        }`}
                      >
                        <span className="text-[11px] font-mono text-slate-600 group-hover/toc:text-teal-500 font-bold mt-0.5 select-none">
                          {chap.isSub ? '↳' : `${cIdx + 1}.`}
                        </span>
                        <span className="leading-relaxed">{chap.text}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* BOOK AN ADVISORY BRIEFING */}
              <div className="bg-gradient-to-br from-slate-950 via-[#0d162a]/95 to-slate-950 border border-slate-800 rounded-3xl p-6 text-center space-y-5 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  Need Help Implementing These Upgrades?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Contact Shashi Prabha Singh and our senior technical analysts to execute professional metadata schemas, Core Web Vitals speed overhauls, or AI search indexing.
                </p>

                <div className="space-y-2 text-left bg-slate-900/60 p-4 border border-slate-900 rounded-xl text-[11px] text-slate-400 font-semibold">
                  <div className="flex justify-between items-center">
                    <span>Topic category:</span>
                    <span className="font-bold text-emerald-400 font-mono">{selectedPost.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Article length:</span>
                    <span className="font-bold text-slate-300 font-mono">
                      {calculateReadingTime(selectedPost.content).wordCount.toLocaleString()} words ({calculateReadingTime(selectedPost.content).text})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Diagnostic audit:</span>
                    <span className="font-bold text-emerald-400 font-mono">100% Free Consultation</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => {
                      window.location.href = "mailto:info@akglsgroup.com?subject=SEO Optimization assistance request";
                    }}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-emerald-950/20 transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" /> Book Quick Briefing
                  </button>

                  <button 
                    onClick={() => onNavigateToTool("seo-audit-tool")}
                    className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs py-3.5 rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <span>Run Site Diagnostic</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* RECOMMENDED INSIGHTS FROM SAME / RELATED TOPICS */}
              <div className="bg-slate-950/50 border border-slate-850/80 rounded-2xl p-6 space-y-4 shadow-xl">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <TrendingUp className="w-4 h-4 text-emerald-400" /> More in {selectedPost.category}
                </h4>
                
                <div className="space-y-2.5 divide-y divide-slate-900">
                  {BLOG_POSTS
                    .filter(post => post.id !== selectedPost.id)
                    .sort((a, b) => (a.category === selectedPost.category ? -1 : 1))
                    .slice(0, 3)
                    .map(post => (
                      <div 
                        key={post.id} 
                        onClick={() => handleSelectPost(post)}
                        className="group cursor-pointer pt-2.5 hover:p-2.5 rounded-lg hover:bg-slate-900/40 transition-all border border-transparent hover:border-slate-850"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono font-bold tracking-widest">
                            {post.category}
                          </span>
                          <span 
                            className="text-[9px] text-slate-500 font-mono flex items-center gap-1"
                            title={`${calculateReadingTime(post.content).wordCount.toLocaleString()} words`}
                          >
                            <Clock className="w-2.5 h-2.5 text-slate-600" />
                            <span>{calculateReadingTime(post.content).text}</span>
                          </span>
                        </div>
                        <h5 className="text-[12px] font-bold text-slate-200 group-hover:text-emerald-400 transition leading-snug mt-1.5">
                          {post.title}
                        </h5>
                      </div>
                    ))}
                </div>
              </div>

            </aside>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

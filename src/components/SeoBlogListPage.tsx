import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Clock, User, Calendar, Tag, Search, 
  Send, BookOpen, Share2, Check, Bookmark, FileText, ChevronRight, 
  HelpCircle, Sparkles, TrendingUp, Compass, MessageSquare, Briefcase,
  Copy, CheckSquare, Award, BookOpenCheck, Layout, ExternalLink, Flame
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../blogData';

interface SeoBlogListPageProps {
  initialCategory?: string | null;
  onBackToHome: () => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToTool: (toolId: string) => void;
}

export default function SeoBlogListPage({ 
  initialCategory, 
  onBackToHome, 
  onNavigateToService,
  onNavigateToTool
}: SeoBlogListPageProps) {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('All Blogs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Read progress tracker
  const [readProgress, setReadProgress] = useState(0);

  // Subscription Newsletter state
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  // Share link copy success states
  const [isCopied, setIsCopied] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Categories with count helpers
  const categories = [
    'All Blogs',
    'SEO Blogs',
    'AI SEO Blogs',
    'GEO Blogs',
    'AEO Blogs',
    'SaaS Marketing'
  ];

  const getPostCount = (category: string) => {
    if (category === 'All Blogs') return BLOG_POSTS.length;
    return BLOG_POSTS.filter(post => post.category === category).length;
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

      setSelectedPost(foundPost);
    };

    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }

    // Call first-time router
    handleUrlChange();

    // Register active listeners for navigation history changes
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
      document.title = `${selectedPost.title} | SEO Insights Blog | AKGLS Group`;
    } else {
      document.title = "High-Speed SEO, GEO & AI Search Marketing Insights | AKGLS Group";
    }
    return () => {
      document.title = originalTitle;
    };
  }, [selectedPost]);

  // Filters blogs base
  const filteredPosts = BLOG_POSTS.filter(post => {
    const categoryMatches = selectedCategory === 'All Blogs' || post.category === selectedCategory;
    const searchMatches = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatches && searchMatches;
  });

  // Extract featured post
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = filteredPosts.filter(p => !selectedPost && (selectedCategory !== 'All Blogs' || p.id !== featuredPost.id));

  // Dynamic compiler of compilation chapters (Table of Contents)
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
    // Standard high-fidelity SEO routing: change pathname to /blog/slug without appending hashtags!
    window.history.pushState(null, '', `/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePost = () => {
    setSelectedPost(null);
    window.history.pushState(null, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCopyLink = () => {
    if (!selectedPost) return;
    const url = `https://akglsgroup.com/blog/${selectedPost.slug}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  const handleCopyCodeSnippet = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
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
      const offset = 90; // account for floating navigations
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

  // Upgraded Markdown Parser for premium visual output
  const renderFormattedMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    let inCode = false;
    let codeBlock: string[] = [];
    let headingIdx = 0;

    return lines.map((line, idx) => {
      // Check for code blocks
      if (line.trim().startsWith('```')) {
        if (inCode) {
          inCode = false;
          const codeText = codeBlock.join('\n');
          codeBlock = [];
          const snippetId = `snippet-${idx}`;
          const isSnippetCopied = copiedCodeId === snippetId;
          
          return (
            <div key={`code-${idx}`} className="my-6 bg-slate-950/90 border border-slate-900 rounded-xl relative overflow-hidden group/code font-mono text-xs text-teal-300">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-b border-slate-950 text-[10px] text-slate-500 font-mono font-medium tracking-wide">
                <span>STRUCTURED METADATA SCHEMATIC</span>
                <button 
                  onClick={() => handleCopyCodeSnippet(codeText, snippetId)}
                  className="flex items-center gap-1 hover:text-white transition py-1 px-2 rounded bg-slate-950 border border-slate-800"
                >
                  {isSnippetCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[10px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-5 overflow-x-auto select-all leading-relaxed whitespace-pre-wrap">{codeText}</pre>
            </div>
          );
        } else {
          inCode = true;
          return null;
        }
      }

      if (inCode) {
        codeBlock.push(line);
        return null;
      }

      // Format Headings with mapped anchor IDs for Table of Contents compatibility
      if (line.startsWith('# ')) {
        return (
          <h1 key={idx} className="text-3xl md:text-4.5xl font-black text-white tracking-tight mt-10 mb-6 font-display leading-tight">
            {line.replace('# ', '')}
          </h1>
        );
      }
      
      if (line.startsWith('## ')) {
        const titleVal = line.replace('## ', '');
        const currentRef = `chapter-ref-${headingIdx++}`;
        return (
          <h2 id={currentRef} key={idx} className="scroll-mt-24 text-xl md:text-2xl font-black text-white tracking-tight mt-12 mb-5 border-b border-slate-900 pb-3 font-display flex items-center gap-3">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 text-xs border border-teal-500/15">
              §
            </span>
            <span>{titleVal}</span>
          </h2>
        );
      }

      if (line.startsWith('### ')) {
        const titleVal = line.replace('### ', '');
        const currentRef = `chapter-ref-${headingIdx++}`;
        return (
          <h3 id={currentRef} key={idx} className="scroll-mt-24 text-base md:text-lg font-bold text-teal-400 tracking-tight mt-8 mb-4 font-display flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>{titleVal}</span>
          </h3>
        );
      }

      // Check for horizontal dividers
      if (line.trim() === '---') {
        return <hr key={idx} className="my-8 border-slate-900" />;
      }

      // Bullet lists
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const cleanItem = line.trim().replace(/^[\*\-]\s+/, '');
        
        // Inline code parsing e.g. `Speakable`
        const codeParsedItem = cleanItem.split('`').map((chunk, cIdx) => {
          if (cIdx % 2 === 1) {
            return <code key={cIdx} className="bg-slate-950 text-emerald-400 font-mono text-xs px-1.5 py-0.5 rounded border border-slate-900">{chunk}</code>;
          }
          return chunk;
        });

        // Translate ** words ** to strong tags helper
        let finalElements: React.ReactNode[] = [];
        codeParsedItem.forEach((part, index) => {
          if (typeof part === 'string') {
            const parts = part.split('**');
            parts.forEach((subPart, pIdx) => {
              if (pIdx % 2 === 1) {
                finalElements.push(<strong key={`${index}-${pIdx}`} className="font-extrabold text-white">{subPart}</strong>);
              } else {
                finalElements.push(subPart);
              }
            });
          } else {
            finalElements.push(part);
          }
        });

        return (
          <div key={idx} className="flex gap-2.5 items-start my-2.5 pl-2 text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mt-2 shrink-0 animate-pulse" />
            <p className="text-slate-300 text-xs md:text-[13.5px] leading-relaxed font-light">{finalElements}</p>
          </div>
        );
      }

      // Step numbered formats
      if (/^\d+\.\s+/.test(line.trim())) {
        const cleanNumItem = line.trim().replace(/^\d+\.\s+/, '');
        const numVal = line.trim().match(/^\d+/)?.[0] || '1';

        const codeParsedLine = cleanNumItem.split('`').map((chunk, cIdx) => {
          if (cIdx % 2 === 1) {
            return <code key={cIdx} className="bg-slate-950 text-emerald-400 font-mono text-xs px-1.5 py-0.5 rounded border border-slate-900">{chunk}</code>;
          }
          return chunk;
        });

        let finalElements: React.ReactNode[] = [];
        codeParsedLine.forEach((part, index) => {
          if (typeof part === 'string') {
            const parts = part.split('**');
            parts.forEach((subPart, pIdx) => {
              if (pIdx % 2 === 1) {
                finalElements.push(<strong key={`${index}-${pIdx}`} className="font-bold text-white">{subPart}</strong>);
              } else {
                finalElements.push(subPart);
              }
            });
          } else {
            finalElements.push(part);
          }
        });

        return (
          <div key={idx} className="my-4 bg-slate-950/40 p-4 border border-slate-900 rounded-xl flex items-start gap-3.5">
            <span className="h-6 w-6 rounded-full bg-slate-900 border border-slate-800 text-teal-400 font-mono text-[11px] flex items-center justify-center font-bold shrink-0">
              {numVal}
            </span>
            <p className="text-slate-350 text-xs md:text-[13.5px] leading-relaxed font-light mt-0.5">{finalElements}</p>
          </div>
        );
      }

      // Spacer
      if (line.trim() === '') return <div key={idx} className="h-4" />;

      // Paragraph formatting (bold tags + code tags check)
      const codeSplits = line.split('`').map((chunk, cIdx) => {
        if (cIdx % 2 === 1) {
          return <code key={cIdx} className="bg-slate-950 text-emerald-400 font-mono text-xs px-1.5 py-0.5 rounded border border-slate-900 font-medium">{chunk}</code>;
        }
        return chunk;
      });

      let parsedLineElements: React.ReactNode[] = [];
      codeSplits.forEach((part, index) => {
        if (typeof part === 'string') {
          const parts = part.split('**');
          parts.forEach((subPart, pIdx) => {
            if (pIdx % 2 === 1) {
              parsedLineElements.push(<strong key={`${index}-${pIdx}`} className="font-extrabold text-white">{subPart}</strong>);
            } else {
              parsedLineElements.push(subPart);
            }
          });
        } else {
          parsedLineElements.push(part);
        }
      });

      return (
        <p key={idx} className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4.5 font-light">
          {parsedLineElements}
        </p>
      );
    });
  };

  return (
    <div className="flex-1 bg-[#090d16] min-h-screen relative overflow-hidden text-slate-100 flex flex-col font-sans select-none">
      
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
      <div className="max-w-7xl mx-auto w-full px-6 pt-10 pb-4 z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {selectedPost ? (
          <button 
            onClick={handleClosePost}
            className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-slate-900/80 border border-slate-800/80 px-4 py-2.5 rounded-xl backdrop-blur-md hover:border-slate-705 shadow-lg shadow-black/20"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition duration-200" />
            <span className="font-bold">Close Reader / Return to Blog</span>
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
        <div className="text-[11px] text-slate-500 font-semibold tracking-wide flex items-center gap-1.5 bg-slate-950/40 px-3.5 py-1.5 rounded-lg border border-slate-900/85">
          <span className="hover:text-slate-300 transition cursor-pointer" onClick={onBackToHome}>Home</span>
          <span className="text-slate-700">/</span>
          <span className="hover:text-slate-300 transition cursor-pointer" onClick={handleClosePost}>SEO Insights Blog</span>
          {selectedPost && (
            <>
              <span className="text-slate-700">/</span>
              <span className="text-slate-350 cursor-default truncate max-w-[120px] sm:max-w-[180px] font-bold">{selectedPost.title}</span>
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
            className="max-w-7xl mx-auto w-full px-6 py-10 space-y-12 z-10 relative flex-1"
          >
            {/* Header copy */}
            <header className="max-w-3xl space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-full text-[10.5px] font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 animate-spin-slow text-emerald-400" />
                AKGLS Organic Resources & Case-file Data
              </span>
              <h1 className="text-3.5xl sm:text-5xl font-black text-white tracking-tight leading-none">
                Organic Search & <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">AI Visibility Chronicles</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                High-speed briefing series examining Generative Engine Optimization (GEO), index retrieval checklists, zero-click Voice-Assistant rankings, and extreme performance benchmarks compiled by AKGLS analysts.
              </p>
            </header>

            {/* UPGRADED CATEGORIES CAPSULES ROW + LIVE SEARCH FILTER */}
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-stretch lg:items-center bg-slate-900/30 p-5 border border-slate-800/80 rounded-2xl backdrop-blur-md">
              
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const count = getPostCount(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        window.scrollTo({ top: 280, behavior: 'smooth' });
                      }}
                      className={`text-xs px-4 py-2.5 border rounded-xl font-bold transition-all flex items-center gap-2 ${
                        isActive 
                        ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/40 scale-[1.02]' 
                        : 'bg-slate-950/70 border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] font-mono rounded px-1.5 py-0.2 select-none ${isActive ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-slate-500 font-bold'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Real-time search query box */}
              <div className="relative min-w-[240px] shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Scan titles & entities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850/80 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-slate-200 outline-none transition placeholder:text-slate-650"
                />
              </div>

            </div>

            {/* SHOWCASE HIGHEST FEATURED POST IF ACTIVE SUMMARY FEED */}
            {selectedCategory === 'All Blogs' && searchQuery === '' && (
              <div className="bg-gradient-to-br from-slate-900/60 via-slate-950/40 to-[#0c1424]/50 border border-slate-800 rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-700/80 transition duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-44 w-44 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />
                
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[9.5px] bg-emerald-950 border border-emerald-500/25 text-emerald-400 rounded-md py-1 px-3 font-black uppercase tracking-widest">
                      <Flame className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      MASTERPIECE ANALYSIS
                    </span>
                    <span className="text-[10px] bg-slate-950/80 border border-slate-900 text-slate-400 rounded py-1 px-2.5 font-mono font-bold">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 
                    onClick={() => handleSelectPost(featuredPost)}
                    className="text-xl md:text-3.5xl font-black text-white hover:text-emerald-400 transition cursor-pointer leading-tight tracking-tight font-display"
                  >
                    {featuredPost.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                    {featuredPost.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="text-[9.5px] font-mono border border-slate-900 bg-slate-950/60 text-slate-400 py-0.5 px-2.5 rounded-md font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-900/70 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={featuredPost.author.avatar} alt="Author avatar" className="h-9 w-9 rounded-full border border-slate-800 object-cover" />
                      <div>
                        <span className="block text-xs font-bold text-white leading-none">{featuredPost.author.name}</span>
                        <span className="block text-[10px] text-slate-500 mt-1 font-semibold">{featuredPost.author.role}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleSelectPost(featuredPost)}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition inline-flex items-center gap-1.5 shadow-md shadow-emerald-950/30 active:scale-95"
                    >
                      <span>Launch Core Briefing</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Aesthetic interactive schematic */}
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
            {otherPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {otherPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-slate-900/30 border border-slate-850/80 rounded-2xl p-6 hover:border-slate-750 transition duration-300 flex flex-col justify-between space-y-5 group h-full hover:shadow-xl hover:shadow-black/10"
                  >
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-950/40 border border-emerald-500/15 py-1 px-2.5 rounded-lg">
                          {post.category}
                        </span>
                        <span className="text-[9.5px] text-slate-500 font-mono font-medium">{post.date}</span>
                      </div>

                      <h4 
                        onClick={() => handleSelectPost(post)}
                        className="text-base font-black text-slate-100 group-hover:text-emerald-400 transition cursor-pointer leading-snug font-display font-black"
                      >
                        {post.title}
                      </h4>

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

                      <button 
                        onClick={() => handleSelectPost(post)}
                        className="text-xs text-emerald-400 font-black hover:text-emerald-300 transition inline-flex items-center gap-1"
                      >
                        <span>Open Post</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* No outcome result state */
              <div className="bg-slate-950 border border-slate-900 rounded-3xl p-16 text-center max-w-md mx-auto space-y-4">
                <HelpCircle className="w-10 h-10 text-slate-700 mx-auto" />
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">Zero Analytics Matched</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  No published insights matched your selected filter. Clear searches to reload core indices.
                </p>
                <button 
                  onClick={() => { setSelectedCategory('All Blogs'); setSearchQuery(''); }}
                  className="bg-slate-900 border border-slate-800 hover:bg-slate-850/80 text-xs text-slate-300 font-bold px-4 py-2.5 rounded-xl transition"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* THE AKGLS EXCLUSIVE DAILY DIRECT NEWSLETTER BOX */}
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
                    Zero keyword junk. Get direct code blueprints, structural algorithm diagnostics, and SGE citation maps written directly by our founding consultants.
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
            className="max-w-7xl mx-auto w-full px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 relative"
          >
            
            {/* LEFT MAIN DEEP-READ BLOG POST WITH SUPERB READ DETAILS */}
            <main className="lg:col-span-8 bg-slate-900/20 border border-slate-800/80 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl relative">
              <div className="absolute top-0 right-0 h-40 w-45 bg-indigo-500/5 blur-[90px] rounded-full pointer-events-none" />
              
              <div className="space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 py-1 px-3 rounded-md font-mono font-black uppercase tracking-widest">
                    {selectedPost.category}
                  </span>
                  <span className="text-[10.5px] text-slate-500 font-mono font-semibold flex items-center gap-1.5 pl-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    {selectedPost.date}
                  </span>
                  <span className="text-[10.5px] text-slate-500 font-mono font-semibold flex items-center gap-1.5 pl-2">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    {selectedPost.readTime}
                  </span>
                </div>

                <h1 className="text-2.5xl sm:text-4xl md:text-4.5xl font-black text-white tracking-tight leading-tight font-display">
                  {selectedPost.title}
                </h1>

                {/* Highly structured author information profile */}
                <div className="flex items-center gap-4 py-5 border-y border-slate-900 bg-slate-950/30 px-5 rounded-2xl border border-slate-900/60 my-6">
                  <img src={selectedPost.author.avatar} alt="Author face outline" className="h-11 w-11 rounded-full border border-slate-800 object-cover" />
                  <div>
                    <span className="block text-xs font-black text-white leading-none">{selectedPost.author.name}</span>
                    <span className="block text-[10px] text-slate-500 mt-1.5 font-bold uppercase tracking-wider">{selectedPost.author.role}</span>
                  </div>
                </div>
              </div>

              {/* HIGH READABILITY TABLE OF CONTENTS (MOBILE INDEX ONLY COLLAPSED IN LHS MAIN) */}
              {tocChapters.length > 0 && (
                <div className="lg:hidden my-6 bg-slate-950/70 p-5 rounded-2xl border border-slate-900 space-y-3.5 text-left">
                  <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 font-black">
                    <FileText className="w-4 h-4 text-teal-400" /> Quick Chapter QuickLinks
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {tocChapters.map((chap, cIdx) => (
                      <li key={chap.id}>
                        <button 
                          onClick={() => scrollToChapter(chap.id)}
                          className={`text-[12px] text-left hover:text-teal-450 transition ${chap.isSub ? 'pl-4 text-slate-500' : 'text-slate-350 font-bold'}`}
                        >
                          {chap.isSub ? '•' : `${cIdx + 1}.`} {chap.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* RENDER EMBEDDED PARSED HIGH-CONTRAST DATA BLOCKS */}
              <article className="max-w-none text-left pt-4 space-y-6">
                {renderFormattedMarkdown(selectedPost.content)}
              </article>

              {/* FOOTER METADATA AND ACCELERATED CONTROLS */}
              <div className="py-8 border-t border-slate-900 flex justify-between items-center flex-wrap gap-4 mt-12 bg-slate-950/20 px-4 rounded-xl">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-slate-900 bg-slate-950/80 text-slate-400 py-1 px-3 rounded-lg font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={handleCopyLink}
                    className="bg-slate-950/80 border border-slate-800 hover:border-teal-500/40 p-3 rounded-xl text-xs font-black text-slate-400 hover:text-white transition flex items-center gap-2 shadow-md shadow-black/40"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
                        <span className="text-emerald-400">Share Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 text-teal-400" />
                        <span>Share Briefing</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </main>

            {/* RIGHT SIDEBAR ACTIONS + DESKTOP TABLE OF CONTENTS */}
            <aside className="lg:col-span-4 space-y-6 text-left">
              
              {/* DESKTOP EXCLUSIVE HIGHLY POLISHED STICKY TABLE OF CONTENTS GRAPH PANEL */}
              {tocChapters.length > 0 && (
                <div className="hidden lg:block bg-slate-950/80 border border-slate-850 p-6 rounded-2xl space-y-4 sticky top-24 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <h4 className="text-[10.5px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2 font-black">
                      <Layout className="w-4 h-4 text-teal-400" /> Table of Contents
                    </h4>
                    <span className="text-[10px] font-mono text-slate-650 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-850">
                      Chapter list
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
                          : 'text-slate-350 hover:text-emerald-400 font-bold'
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

              {/* BOOK A BUSINESS BRIEFING ADVISORY BLOCK */}
              <div className="bg-gradient-to-br from-slate-950 via-[#0d162a]/95 to-slate-950 border border-slate-800 rounded-3xl p-6 text-center space-y-5 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-teal-500/5 blur-[50px] rounded-full pointer-events-none" />
                
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  Need Help Implementing These Upgrades?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Contact Shashi Prabha and our senior full-stack technology analysts to execute professional metadata schemas, Core Web Vitals speed overhauls, or client-side indexing.
                </p>

                <div className="space-y-2 text-left bg-slate-900/60 p-4 border border-slate-900 rounded-xl text-[11px] text-slate-400 font-semibold">
                  <div className="flex justify-between items-center">
                    <span>Performance index:</span>
                    <span className="font-bold text-emerald-400 font-mono">+41% Organic Lift</span>
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
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-emerald-950/20 hover:shadow-emerald-950/45 hover:-translate-y-0.5 active:translate-y-0 transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" /> Book Quick Briefing
                  </button>

                  <button 
                    onClick={() => onNavigateToTool("seo-audit-tool")}
                    className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-705 text-slate-300 font-bold text-xs py-3.5 rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <span>Compute Site Score</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* OTHER MATCHED HIGH-VALUE INSIGHT TITLES */}
              <div className="bg-slate-950/50 border border-slate-850/80 rounded-2xl p-6 space-y-4 shadow-xl">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <TrendingUp className="w-4 h-4 text-emerald-400" /> Recommended Insights
                </h4>
                
                <div className="space-y-2.5 divide-y divide-slate-905">
                  {BLOG_POSTS.filter(post => post.id !== selectedPost.id).slice(0, 3).map(post => (
                    <div 
                      key={post.id} 
                      onClick={() => handleSelectPost(post)}
                      className="group cursor-pointer pt-2.5 hover:p-2.5 rounded-lg hover:bg-slate-900/40 transition-all border border-transparent hover:border-slate-850"
                    >
                      <span className="text-[8px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono font-bold tracking-widest">
                        {post.category}
                      </span>
                      <h5 className="text-[12px] font-black text-slate-200 group-hover:text-emerald-405 transition leading-snug mt-1.5">
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

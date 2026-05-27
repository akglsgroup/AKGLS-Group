import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Clock, User, Calendar, Tag, Search, 
  Send, BookOpen, Share2, Check, Bookmark, FileText, ChevronRight, 
  HelpCircle, Sparkles, TrendingUp, Compass, MessageSquare, Briefcase
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

  // Link copy success state
  const [isCopied, setIsCopied] = useState(false);

  // Sync initial category from props
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    } else {
      setSelectedCategory('All Blogs');
    }
    // Deep links handling via slug in hash
    const hash = window.location.hash;
    if (hash && hash.startsWith('#blog/')) {
      const slug = hash.replace('#blog/', '');
      const found = BLOG_POSTS.find(p => p.slug === slug);
      if (found) {
        setSelectedPost(found);
      }
    } else {
      setSelectedPost(null);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [initialCategory]);

  // Track window scroll for progress bar
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

  // Set meta titles dynamically
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

  const categories = [
    'All Blogs',
    'SEO Blogs',
    'AI SEO Blogs',
    'GEO Blogs',
    'AEO Blogs',
    'SaaS Marketing',
    'Google Updates'
  ];

  // Filters blogs based on selectedCategory and searchQuery
  const filteredPosts = BLOG_POSTS.filter(post => {
    const categoryMatches = selectedCategory === 'All Blogs' || post.category === selectedCategory;
    const searchMatches = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatches && searchMatches;
  });

  // Extract featured post (the first blog post)
  const featuredPost = BLOG_POSTS[0];
  // Other standard posts
  const otherPosts = filteredPosts.filter(p => !selectedPost && (selectedCategory !== 'All Blogs' || p.id !== featuredPost.id));

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.history.pushState(null, '', `/blog/${post.slug}`);
    window.location.hash = `blog/${post.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePost = () => {
    setSelectedPost(null);
    window.history.pushState(null, '', '/blog');
    window.location.hash = 'blog';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCopyLink = () => {
    if (!selectedPost) return;
    const url = `https://akglsgroup.com/blog/${selectedPost.slug}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setSubscribedSuccess(true);
    setSubscriberEmail('');
    setTimeout(() => setSubscribedSuccess(false), 5000);
  };

  // Modern Markdown elements representation parser for highly styled layout
  const renderFormattedMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    let inList = false;
    let listItems: string[] = [];
    let inCode = false;
    let codeBlock: string[] = [];

    return lines.map((line, idx) => {
      // Check for code blocks
      if (line.trim().startsWith('```')) {
        if (inCode) {
          inCode = false;
          const codeText = codeBlock.join('\n');
          codeBlock = [];
          return (
            <div key={`code-${idx}`} className="my-6 bg-slate-950 border border-slate-900 rounded-xl p-5 overflow-x-auto font-mono text-xs text-emerald-400 select-all leading-relaxed">
              <pre>{codeText}</pre>
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

      // Check for Headings
      if (line.startsWith('# ')) {
        return (
          <h1 key={idx} className="text-3xl md:text-4xl font-black text-white tracking-tight mt-8 mb-4">
            {line.replace('# ', '')}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-xl md:text-2.5xl font-extrabold text-white tracking-tight mt-8 mb-4 border-b border-slate-900 pb-2">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-lg font-bold text-teal-400 tracking-tight mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      }

      // Check for horizontal dividers
      if (line.trim() === '---') {
        return <hr key={idx} className="my-8 border-slate-900" />;
      }

      // Bullets parser
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const cleanItem = line.trim().replace(/^[\*\-]\s+/, '');
        // Super simple bold text formatting inside bullet elements
        const parts = cleanItem.split('**');
        const formattedElement = parts.map((part, pIdx) => {
          if (pIdx % 2 === 1) {
            return <strong key={pIdx} className="font-extrabold text-white">{part}</strong>;
          }
          return part;
        });

        return (
          <ul key={idx} className="list-disc pl-6 my-2 text-slate-350 text-xs md:text-sm leading-relaxed">
            <li>{formattedElement}</li>
          </ul>
        );
      }

      // Standard paragraphs
      if (line.trim() === '') return <div key={idx} className="h-4" />;

      // Super simple bold parsing for regular texts
      const parts = line.split('**');
      const formattedLine = parts.map((part, pIdx) => {
        if (pIdx % 2 === 1) {
          return <strong key={pIdx} className="font-extrabold text-white">{part}</strong>;
        }
        return part;
      });

      return (
        <p key={idx} className="text-slate-350 text-xs md:text-sm leading-relaxed mb-4">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <div className="flex-1 bg-[#090d16] min-h-screen relative overflow-hidden text-slate-100 flex flex-col font-sans">
      
      {/* Scroll indicator for reading mode */}
      {selectedPost && (
        <div className="fixed top-0 inset-x-0 h-1 bg-slate-900 z-50">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-75" 
            style={{ width: `${readProgress}%` }}
          />
        </div>
      )}

      {/* Ambient backgrounds */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Header bar and navigation */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-8 z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {selectedPost ? (
          <button 
            onClick={handleClosePost}
            className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-slate-900/60 border border-slate-800 px-4 py-2.5 rounded-xl backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
            <span>Return to Blogs Directories</span>
          </button>
        ) : (
          <button 
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-slate-900/60 border border-slate-800 px-4 py-2.5 rounded-xl backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
            <span>Return to AKGLS Homepage</span>
          </button>
        )}

        {/* Dynamic breadcrumbs */}
        <div className="text-xs text-slate-500 font-medium">
          <span className="hover:text-slate-350 cursor-pointer" onClick={onBackToHome}>Home</span>
          <span className="mx-2 text-slate-700">/</span>
          <span className="hover:text-slate-350 cursor-pointer" onClick={handleClosePost}>Blog Directory</span>
          {selectedPost && (
            <>
              <span className="mx-2 text-slate-700">/</span>
              <span className="text-slate-300 font-semibold truncate max-w-[150px] inline-block align-bottom">{selectedPost.title}</span>
            </>
          )}
        </div>
      </div>

      {/* CORE CONTENT BLOCK SWITCH */}
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div
            key="listing-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-7xl mx-auto w-full px-6 py-12 space-y-12 shrink-0 z-10 relative"
          >
            
            {/* HERO BANNER FOR BLOG LIST */}
            <header className="max-w-3xl mx-left space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/45 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">
                <Compass className="w-3.5 h-3.5 animate-pulse" />
                AKGLS Group Insiders Resources
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Organic Search & <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">AI Visibility Chronicles</span>
              </h1>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-2xl">
                Expert-written briefs tackling Generative Engine Optimization (GEO), Core Web Vitals speed latency diagnostics, white-label technical architecture checklists, and organic growth simulations.
              </p>
            </header>

            {/* QUICK CATEGORY ROW + SEARCH DECORATOR */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900/40 p-4 border border-slate-800 rounded-2xl backdrop-blur-md">
              
              {/* Categories capsules */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        window.scrollTo({ top: 320, behavior: 'smooth' });
                      }}
                      className={`text-xs px-4 py-2 border rounded-xl font-bold transition-all ${
                        isActive 
                        ? 'bg-emerald-600 border-emerald-500 text-white' 
                        : 'bg-slate-950/60 border-slate-850 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Input check */}
              <div className="relative w-full md:w-64 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Query titles, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl pl-9 pr-4 py-2 text-xs font-semibold text-slate-200 outline-none transition"
                />
              </div>

            </div>

            {/* FEATURED BLOG POST AT ROOT FOR HIGH VISUAL HIERARCHY */}
            {selectedCategory === 'All Blogs' && searchQuery === '' && (
              <div className="bg-gradient-to-br from-slate-900/60 via-slate-950/40 to-slate-900/50 border border-slate-800/80 rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-700 transition duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-40 w-40 bg-indigo-500/5 blur-[80px] rounded-full" />
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-indigo-950 border border-indigo-500/20 text-indigo-400 rounded py-0.5 px-2.5 font-bold uppercase tracking-widest">
                      FEATURED ARTICLE
                    </span>
                    <span className="text-[10px] bg-slate-950 border border-slate-850 text-slate-400 rounded py-0.5 px-2 font-mono font-medium">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-3.5xl font-black text-white hover:text-emerald-400 transition cursor-pointer leading-tight tracking-tight" onClick={() => handleSelectPost(featuredPost)}>
                    {featuredPost.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl">
                    {featuredPost.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featuredPost.tags.map(t => (
                      <span key={t} className="text-[9px] font-mono border border-slate-850 bg-slate-950 text-slate-400 py-0.5 px-2 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-900 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={featuredPost.author.avatar} alt="Author" className="h-9 w-9 rounded-full border border-slate-800 object-cover" />
                      <div>
                        <span className="block text-xs font-bold text-white leading-none">{featuredPost.author.name}</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">{featuredPost.author.role}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleSelectPost(featuredPost)}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wider px-5 py-2.5 rounded-xl transition inline-flex items-center gap-1.5 shadow-md shadow-emerald-950/20"
                    >
                      Read Briefing <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Decorative mock element */}
                <div className="lg:col-span-5 bg-slate-950 border border-slate-850 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-56 group-hover:border-slate-700 transition">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">EMBEDDED METADATA MODEL</span>
                    <p className="text-[11px] font-mono text-teal-300 leading-relaxed bg-slate-950/80 p-3 rounded-lg border border-slate-900 font-medium">
                      {"{"} <br />
                      &nbsp;&nbsp;&quot;@context&quot;: &quot;schema.org&quot;,<br />
                      &nbsp;&nbsp;&quot;@type&quot;: &quot;GenerativeOptimizeRule&quot;,<br />
                      &nbsp;&nbsp;&quot;visibilityIndex&quot;: &quot;98.2%&quot;<br />
                      {"}"}
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* MAIN BLOGS GRID FEED */}
            {otherPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-slate-900/40 border border-slate-850 rounded-2xl p-6 hover:border-slate-700 transition flex flex-col justify-between space-y-5 group h-full"
                  >
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-950/40 border border-emerald-500/15 py-0.5 px-2 rounded-md">
                          {post.category}
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono">{post.date}</span>
                      </div>

                      <h4 className="text-base font-black text-slate-100 group-hover:text-emerald-400 transition leading-snug cursor-pointer" onClick={() => handleSelectPost(post)}>
                        {post.title}
                      </h4>

                      <p className="text-xs text-slate-400 leading-normal line-clamp-3">
                        {post.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map(t => (
                          <span key={t} className="text-[8px] font-mono border border-slate-850/60 bg-slate-950/80 text-slate-450 py-0.5 px-1.5 rounded-md">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-slate-900/60 flex justify-between items-center mt-auto">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt="Author" className="h-6 w-6 rounded-full border border-slate-800 object-cover" />
                        <span className="text-[10px] text-slate-400 font-semibold">{post.author.name}</span>
                      </div>

                      <button 
                        onClick={() => handleSelectPost(post)}
                        className="text-xs text-emerald-400 font-black hover:text-emerald-300 transition inline-flex items-center gap-1"
                      >
                        Read Post <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              // Empty search
              <div className="bg-slate-950 border border-slate-850 rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
                <HelpCircle className="w-10 h-10 text-slate-600 mx-auto" />
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">No Matching Articles Located</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Try adjusting categories, clearing query fields, or scanning for semantic keywords.
                </p>
                <button 
                  onClick={() => { setSelectedCategory('All Blogs'); setSearchQuery(''); }}
                  className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 font-bold px-4 py-2 rounded-xl transition"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* VALUE BANNER - NEWSLETTER BRIEF SIGNUP */}
            <div className="bg-gradient-to-tr from-[#080d19] via-[#0d1629] to-[#080c18] border border-slate-800/80 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl text-center md:text-left">
              <div className="absolute top-0 right-10 h-32 w-32 bg-emerald-500/5 blur-[80px] rounded-full" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-7 space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    Get SEO Insiders Daily briefing
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                    No spam. Just highly tactical technical adjustments, algorithm updates, and SGE citation methods compiled directly by our founding analysts.
                  </p>
                </div>

                <div className="md:col-span-5 w-full">
                  <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                    <input
                      type="email"
                      required
                      placeholder="corporate@yourbrand.com"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-slate-200 outline-none transition"
                    />
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl transition inline-flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Subscribe
                    </button>
                  </form>
                  {subscribedSuccess && (
                    <span className="block text-[10.5px] text-emerald-400 mt-2 font-semibold">
                      ✓ Authorization queued. Welcome to the search elite circle!
                    </span>
                  )}
                </div>

              </div>
            </div>

          </motion.div>
        ) : (
          
          /* DETAILED SINGLE BLOG POST READER VIEW */
          <motion.div
            key="reader-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 relative"
          >
            
            {/* LEFT MAIN ARTICLE COLUMN */}
            <main className="lg:col-span-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-2xl space-y-6">
              
              {/* Header meta card */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-500/10 py-1 px-2.5 rounded font-mono font-bold uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedPost.date}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedPost.readTime}
                  </span>
                </div>

                <h1 className="text-2xl md:text-4.5xl font-black text-white tracking-tight leading-tight">
                  {selectedPost.title}
                </h1>

                {/* Author bios row */}
                <div className="flex items-center gap-3.5 py-4 border-y border-slate-900">
                  <img src={selectedPost.author.avatar} alt="Author" className="h-10 w-10 rounded-full border border-slate-800 object-cover" />
                  <div>
                    <span className="block text-xs font-bold text-white leading-none">{selectedPost.author.name}</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">{selectedPost.author.role}</span>
                  </div>
                </div>
              </div>

              {/* DYNAMIC RENDER FORMATTED TEXTS */}
              <article className="prose prose-invert max-w-none text-left pt-2">
                {renderFormattedMarkdown(selectedPost.content)}
              </article>

              {/* RETAINER ACTIONS: COPY LINK & BOOKMARK */}
              <div className="py-6 border-t border-slate-900 flex justify-between items-center flex-wrap gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono border border-slate-850 bg-slate-950 text-slate-400 py-1 px-2.5 rounded-lg">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={handleCopyLink}
                    className="bg-slate-950 border border-slate-800 hover:border-slate-700 p-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span>Share Article</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </main>

            {/* RIGHT SIDEBAR ACTIONS & DIRECT CTA */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* TABLE OF CONTENTS CARD */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-4">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-400" /> Key Takeaway Checkpoints
                </h4>
                <div className="space-y-2.5 text-xs text-slate-400">
                  <div className="flex gap-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>Always configure nested organizational JSON-LD for rich entities mappings.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>Optimize for SGE RAG vectors using deep entity dense concepts.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>Keep Core Web Vitals (FCP, Interaction to Next Paint) under boundaries limits.</span>
                  </div>
                </div>
              </div>

              {/* BOOK A CALL CONSULTATION CTA */}
              <div className="bg-gradient-to-br from-slate-950 via-[#0d162a] to-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-5 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                
                <h3 className="text-lg font-black text-white tracking-tight">
                  Need Help Implementing These Optimizations?
                </h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Contact Amrish and our senior technical SEO consultants to execute high-impact schema structures, Core Web Vitals speed overhauls, or GEO integrations.
                </p>

                <div className="space-y-2 text-left bg-slate-900/40 p-3 rounded-xl border border-slate-850 text-[11px] text-slate-450">
                  <div className="flex justify-between">
                    <span>Average ranking lift:</span>
                    <span className="font-bold text-emerald-400">+41% GCV</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audit analysis:</span>
                    <span className="font-bold text-emerald-400">Free download</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => {
                      window.location.href = "mailto:amrish.singh01@gmail.com?subject=SEO Optimization assistance request";
                    }}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg shadow-emerald-950/20 transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" /> Book Quick Briefing
                  </button>

                  <button 
                    onClick={() => onNavigateToTool("seo-audit-tool")}
                    className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-705 text-slate-300 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <span>Try Core Crawler Tool</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* SUGGESTED OTHER POSTS ROW */}
              <div className="bg-slate-950/50 border border-slate-850 rounded-2xl p-5 md:p-6 space-y-4">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" /> Recommended Contexts
                </h4>
                
                <div className="space-y-3 split-divider">
                  {BLOG_POSTS.filter(post => post.id !== selectedPost.id).slice(0, 3).map(post => (
                    <div 
                      key={post.id} 
                      onClick={() => handleSelectPost(post)}
                      className="group cursor-pointer p-2.5 rounded-xl hover:bg-slate-900/50 transition border border-transparent hover:border-slate-850 text-left"
                    >
                      <span className="text-[8px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                        {post.category}
                      </span>
                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition leading-tight mt-1">
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

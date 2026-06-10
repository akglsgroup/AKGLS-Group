import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, BookOpen, Clock, User, Calendar, Tag, Search, 
  Send, Check, Bookmark, FileText, ChevronRight, HelpCircle, Sparkles, 
  TrendingUp, Award, BookOpenCheck, Download, Play, Trophy, CheckSquare, 
  Layers, Lock, AlertCircle, FileSpreadsheet, ListTodo, GraduationCap, 
  Video, Eye, Volume2, Maximize2, Pause
} from 'lucide-react';
import { LEARNING_ITEMS, LearningHubItem } from '../learningData';

interface LearningHubPageProps {
  initialCategory?: string | null;
  onBackToHome: () => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToTool: (toolId: string) => void;
}

export default function LearningHubPage({ 
  initialCategory, 
  onBackToHome, 
  onNavigateToService,
  onNavigateToTool
}: LearningHubPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Resources');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<LearningHubItem | null>(null);

  // Course Reading States
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [readProgress, setReadProgress] = useState(0);

  // Webinar Video States
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35); // simulated progress \%
  const [isMuted, setIsMuted] = useState(false);

  // Mini quiz state for courseengagement
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Newsletter Subscriber States
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  // Download Trigger Modals
  const [showDownloadBarrier, setShowDownloadBarrier] = useState(false);
  const [barrierEmail, setBarrierEmail] = useState('');
  const [downloadProcessing, setDownloadProcessing] = useState(false);
  const [downloadCompleted, setDownloadCompleted] = useState(false);

  const categories = [
    'All Resources',
    'SEO Course',
    'GEO Course',
    'AEO Course',
    'AI Marketing Course',
    'Digital Marketing Tutorials',
    'Webinars',
    'Templates',
    'Checklists'
  ];

  const getCategoryCount = (cat: string) => {
    if (cat === 'All Resources') return LEARNING_ITEMS.length;
    return LEARNING_ITEMS.filter(item => item.category === cat).length;
  };

  // Synchronize initial category and routing history
  useEffect(() => {
    const handleUrlChange = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;
      
      let foundItem: LearningHubItem | null = null;
      
      if (pathname.startsWith('/learning-hub/')) {
        const slug = pathname.replace('/learning-hub/', '').replace(/\/$/, '');
        if (slug) {
          foundItem = LEARNING_ITEMS.find(i => i.slug === slug) || null;
        }
      }
      
      // Hash fallbacks
      if (!foundItem && hash && (hash.startsWith('#learning/') || hash.startsWith('#/learning/'))) {
        const slug = hash.replace(/^#\/?learning\//, '');
        if (slug) {
          foundItem = LEARNING_ITEMS.find(i => i.slug === slug) || null;
        }
      }

      setSelectedItem(foundItem);
      if (foundItem) {
        // Preset course modules
        setActiveModuleIdx(0);
        setActiveLessonIdx(0);
        setQuizSubmitted(false);
        setSelectedAnswers({});
      }
    };

    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }

    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [initialCategory]);

  // Track window scroll for reading bar
  useEffect(() => {
    if (!selectedItem) {
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
  }, [selectedItem]);

  // Sync tab titles for SEO
  useEffect(() => {
    const originalTitle = document.title;
    if (selectedItem) {
      document.title = `${selectedItem.title} | Learning Hub | AKGLS Group`;
    } else {
      document.title = "Algorithmic Learning Hub - Interactive Courses & Blueprints | AKGLS Group";
    }
    return () => {
      document.title = originalTitle;
    };
  }, [selectedItem]);

  // Filter logic
  const filteredItems = LEARNING_ITEMS.filter(item => {
    const categoryMatches = selectedCategory === 'All Resources' || item.category === selectedCategory;
    const searchMatches = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatches && searchMatches;
  });

  const handleSelectItem = (item: LearningHubItem) => {
    setSelectedItem(item);
    window.history.pushState(null, '', `/learning-hub/${item.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseItem = () => {
    setSelectedItem(null);
    window.history.pushState(null, '', '/learning-hub');
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsPlaying(false);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setSubscribedSuccess(true);
    setSubscriberEmail('');
    setTimeout(() => setSubscribedSuccess(false), 6000);
  };

  // Course Actions
  const handleToggleLessonComplete = (lessonId: string) => {
    if (completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds(completedLessonIds.filter(id => id !== lessonId));
    } else {
      setCompletedLessonIds([...completedLessonIds, lessonId]);
    }
  };

  const activeLessonContent = selectedItem?.modules?.[activeModuleIdx]?.lessons?.[activeLessonIdx];

  // Helper to parse inline markdown styles cleanly
  const parseInlineElements = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let currentWord = "";
    let i = 0;
    
    while (i < text.length) {
      if (text.startsWith('**', i)) {
        if (currentWord) {
          parts.push(currentWord);
          currentWord = "";
        }
        i += 2;
        const endIdx = text.indexOf('**', i);
        if (endIdx !== -1) {
          const boldText = text.substring(i, endIdx);
          parts.push(<strong key={`bold-${i}`} className="font-extrabold text-white">{boldText}</strong>);
          i = endIdx + 2;
        } else {
          currentWord += '**';
        }
      } else if (text.startsWith('`', i)) {
        if (currentWord) {
          parts.push(currentWord);
          currentWord = "";
        }
        i += 1;
        const endIdx = text.indexOf('`', i);
        if (endIdx !== -1) {
          const codeText = text.substring(i, endIdx);
          parts.push(<code key={`code-${i}`} className="font-mono text-xs text-emerald-450 bg-slate-950/90 border border-slate-900 px-1.5 py-0.5 rounded-md mx-0.5">{codeText}</code>);
          i = endIdx + 1;
        } else {
          currentWord += '`';
        }
      } else if (text.startsWith('*', i) && text[i+1] !== ' ' && text[i+1] !== '*') {
        if (currentWord) {
          parts.push(currentWord);
          currentWord = "";
        }
        i += 1;
        const endIdx = text.indexOf('*', i);
        if (endIdx !== -1) {
          const italicText = text.substring(i, endIdx);
          parts.push(<em key={`italic-${i}`} className="italic text-slate-200">{italicText}</em>);
          i = endIdx + 1;
        } else {
          currentWord += '*';
        }
      } else {
        currentWord += text[i];
        i += 1;
      }
    }
    
    if (currentWord) {
      parts.push(currentWord);
    }
    
    return parts;
  };

  // Simulated content markdown parser
  const renderItemMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: React.ReactNode[] = [];
    
    let inCodeBlock = false;
    let codeLanguage = '';
    let codeBlockLines: string[] = [];
    
    let inTable = false;
    let tableRows: string[][] = [];
    
    let headingIdx = 1;
    
    const renderBufferedTable = (indexKey: number) => {
      if (tableRows.length > 0) {
        const rows = [...tableRows];
        tableRows = [];
        inTable = false;
        
        const headers = rows[0];
        const dataRows = rows.slice(1);
        
        elements.push(
          <div key={`table-block-${indexKey}`} className="my-6 overflow-x-auto border border-slate-900 rounded-xl shadow-lg bg-slate-950/40">
            <table className="min-w-full divide-y divide-slate-900 text-left">
              <thead className="bg-[#0b1220] font-mono text-[11px] font-bold tracking-wider text-emerald-400">
                <tr>
                  {headers.map((cell, cIdx) => (
                    <th key={cIdx} className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 border-r border-slate-900 last:border-r-0">
                      {parseInlineElements(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60 text-slate-350">
                {dataRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-900/20 transition-colors odd:bg-slate-950/20">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-xs sm:text-[13px] font-medium font-sans border-r border-slate-900/40 last:border-r-0">
                        {parseInlineElements(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    };
    
    for (let idx = 0; idx < lines.length; idx++) {
      const line = lines[idx];
      const trimmed = line.trim();
      
      // 1. Handle Code Blocks
      if (trimmed.startsWith('```')) {
        if (inTable) {
          renderBufferedTable(idx);
        }
        
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = trimmed.replace('```', '').trim() || 'text';
          codeBlockLines = [];
        } else {
          inCodeBlock = false;
          const codeContent = codeBlockLines.join('\n');
          const currentLang = codeLanguage;
          elements.push(
            <div key={`code-block-${idx}`} className="my-5 bg-[#030712] border border-slate-900 rounded-2xl overflow-hidden font-mono text-xs shadow-xl">
              <div className="bg-slate-950 px-4 py-2 flex justify-between items-center border-b border-slate-900 text-slate-400 text-[10px] font-sans font-bold">
                <span className="uppercase tracking-wider text-emerald-400 font-mono">{currentLang}</span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(codeContent);
                  }}
                  className="hover:text-emerald-400 transition-colors bg-slate-900 px-2.5 py-1 rounded border border-slate-850 hover:border-slate-800 text-[9px] font-bold"
                >
                  Copy Code
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed text-emerald-100/90 whitespace-pre">
                <code>{codeContent}</code>
              </pre>
            </div>
          );
        }
        continue;
      }
      
      if (inCodeBlock) {
        codeBlockLines.push(line);
        continue;
      }
      
      // 1.5 Handle Tables (lines starting and ending/containing pipes)
      if (trimmed.startsWith('|')) {
        inTable = true;
        const cells = line.split('|').map(c => c.trim()).slice(1, -1);
        const isSeparator = cells.every(c => /^:?-+:?$/.test(c));
        if (!isSeparator && cells.length > 0) {
          tableRows.push(cells);
        }
        continue;
      } else if (inTable) {
        renderBufferedTable(idx);
      }
      
      // 2. Headings
      if (trimmed.startsWith('# ')) {
        const text = trimmed.substring(2).trim();
        elements.push(
          <h1 id={`hub-header-main-${idx}`} key={idx} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-12 mb-6 pb-3 border-b border-slate-850 flex items-center gap-3 font-display">
            <span>{parseInlineElements(text)}</span>
          </h1>
        );
        continue;
      }
      
      if (trimmed.startsWith('## ')) {
        const text = trimmed.substring(3).trim();
        elements.push(
          <h2 id={`hub-header-${idx}`} key={idx} className="text-lg sm:text-xl md:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-900/50 flex items-center gap-3 font-display">
            <span className="text-emerald-400 font-mono text-sm font-bold">[0{headingIdx++}]</span>
            <span>{parseInlineElements(text)}</span>
          </h2>
        );
        continue;
      }
      
      if (trimmed.startsWith('### ')) {
        const text = trimmed.substring(4).trim();
        elements.push(
          <h3 id={`hub-header-sub-${idx}`} key={idx} className="text-base sm:text-lg font-bold text-teal-400 mt-8 mb-3 font-display">
            {parseInlineElements(text)}
          </h3>
        );
        continue;
      }
      
      if (trimmed.startsWith('#### ')) {
        const text = trimmed.substring(5).trim();
        const cleanText = text.replace(/\*\*$/, '').replace(/^\*\*/, '');
        elements.push(
          <h4 key={idx} className="text-xs sm:text-sm font-black text-emerald-400 mt-6 mb-2 font-mono uppercase tracking-wider">
            {parseInlineElements(cleanText)}
          </h4>
        );
        continue;
      }

      if (trimmed.startsWith('##### ')) {
        const text = trimmed.substring(6).trim();
        elements.push(
          <h5 key={idx} className="text-xs sm:text-sm font-bold text-[#818cf8] mt-4 mb-2 font-display">
            {parseInlineElements(text)}
          </h5>
        );
        continue;
      }

      // 3. Task Checklist / Todo items: e.g. `- [ ] ` or `- [x] `
      if (trimmed.startsWith('- [ ] ') || trimmed.startsWith('- [x] ') || trimmed.startsWith('* [ ] ') || trimmed.startsWith('* [x] ')) {
        const isChecked = trimmed.includes('[x]');
        const text = trimmed.substring(6).trim();
        elements.push(
          <div key={idx} className="flex gap-3 items-center my-2 pl-2 text-slate-350">
            <input 
              type="checkbox" 
              checked={isChecked} 
              readOnly 
              className="accent-emerald-500 rounded border-slate-800 bg-slate-950 focus:ring-0 w-3.5 h-3.5 pointer-events-none" 
            />
            <span className={`text-xs sm:text-[13px] font-medium leading-normal ${isChecked ? 'line-through text-slate-500' : 'text-slate-350'}`}>
              {parseInlineElements(text)}
            </span>
          </div>
        );
        continue;
      }

      // 4. Bullet lists: e.g. `* ` or `- ` (using raw matches to support leading spacing)
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const text = trimmed.substring(2).trim();
        const indentCount = line.length - line.trimStart().length;
        const isNested = indentCount >= 2;
        
        elements.push(
          <div key={idx} className={`flex gap-2.5 items-start ${isNested ? 'pl-8 text-slate-400' : 'pl-4 text-slate-300'} my-1.5`}>
            {isNested ? (
              <span className="h-1.5 w-1.5 rounded-full border border-emerald-450 bg-transparent mt-1.5 shrink-0" />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-450 mt-1.5 shrink-0" />
            )}
            <p className="text-xs sm:text-[13px] leading-relaxed font-light mt-0">{parseInlineElements(text)}</p>
          </div>
        );
        continue;
      }

      // 5. Numbered lists: e.g. `1. `, `1.  `
      if (/^\d+\.\s+/.test(trimmed)) {
        const match = trimmed.match(/^(\d+)\.\s+/);
        const num = match ? match[1] : '1';
        const text = trimmed.replace(/^\d+\.\s+/, '').trim();
        elements.push(
          <div key={idx} className="bg-slate-950/20 p-3.5 border border-slate-900/40 rounded-xl flex items-start gap-4 my-3">
            <span className="h-5 w-5 rounded bg-slate-900 border border-slate-850 text-teal-400 font-mono text-[10px] flex items-center justify-center font-bold shrink-0">
              {num}
            </span>
            <p className="text-slate-300 text-xs sm:text-[12.5px] leading-relaxed font-light mt-0.5">{parseInlineElements(text)}</p>
          </div>
        );
        continue;
      }

      // 6. Horizontal Ruler / line breaks
      if (trimmed === '---') {
        elements.push(<hr key={idx} className="my-8 border-slate-900/80" />);
        continue;
      }

      // 7. Empty lines
      if (trimmed === '') {
        elements.push(<div key={idx} className="h-2" />);
        continue;
      }

      // 8. Render standard paragraph
      elements.push(
        <p key={idx} className="text-slate-300 text-xs sm:text-[13.5px] leading-relaxed font-light mb-3">
          {parseInlineElements(trimmed)}
        </p>
      );
    }
    
    if (inTable) {
      renderBufferedTable(lines.length);
    }
    
    return elements;
  };

  // Dynamic quiz questions sourced from the active module or falling back to default assessments
  const currentQuizQuestions = selectedItem?.modules?.[activeModuleIdx]?.quiz || [
    {
      q: "Which JSON-LD schema is recommended for smart Voice Assistant speaker identification under AEO mandates?",
      options: ["WebSite Schema", "Speakable Schema", "Action Schema", "SearchAction Schema"],
      answerIdx: 1
    },
    {
      q: "What dictates a generative AI search citation ranking during advanced RAG processing?",
      options: [
        "Backlink quantity only",
        "Exact semantic entity alignment & co-citation trust matrix",
        "Meta keywords frequency",
        "Absolute domain name length"
      ],
      answerIdx: 1
    }
  ];

  const handleAnswerChange = (qIdx: number, oIdx: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [qIdx]: oIdx
    });
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    currentQuizQuestions.forEach((q, qIdx) => {
      if (selectedAnswers[qIdx] === q.answerIdx) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  // Download Action Barrier
  const handleDownloadRequest = () => {
    setBarrierEmail('');
    setDownloadCompleted(false);
    setShowDownloadBarrier(true);
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barrierEmail) return;
    setDownloadProcessing(true);
    
    setTimeout(() => {
      setDownloadProcessing(false);
      setDownloadCompleted(true);
      // Simulate direct link trigger safely
      if (selectedItem?.downloadUrl) {
        window.open(selectedItem.downloadUrl, '_blank');
      }
    }, 1800);
  };

  return (
    <div className="flex-1 bg-[#090d16] min-h-screen relative overflow-hidden text-slate-100 flex flex-col font-sans select-none">
      
      {/* Top Floating Reading Progress */}
      {selectedItem && (
        <div className="fixed top-0 inset-x-0 h-1 bg-slate-950 z-50">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-75 relative" 
            style={{ width: `${selectedItem.type === 'Course' ? (completedLessonIds.length / (selectedItem.modules?.reduce((acc, m) => acc + m.lessons.length, 0) || 1)) * 100 : readProgress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-md shadow-white/80 animate-ping" />
          </div>
        </div>
      )}

      {/* Decorative spotlights */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-emerald-950/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-[350px] h-[350px] bg-[#6366f1]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Breadcrumb Navigation Header */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-10 pb-4 z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {selectedItem ? (
          <button 
            onClick={handleCloseItem}
            className="inline-flex items-center gap-2 group text-xs text-slate-400 hover:text-white transition bg-slate-900/80 border border-slate-800/80 px-4 py-2.5 rounded-xl backdrop-blur-md hover:border-slate-705 shadow-lg shadow-black/20"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition duration-200" />
            <span className="font-bold">Exit & Back to Learning Hub Directory</span>
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

        <div className="text-[11px] text-slate-500 font-semibold tracking-wide flex items-center gap-1.5 bg-slate-950/40 px-3.5 py-1.5 rounded-lg border border-slate-900/85">
          <span className="hover:text-slate-300 transition cursor-pointer" onClick={onBackToHome}>Home</span>
          <span className="text-slate-700">/</span>
          <span className="hover:text-slate-300 transition cursor-pointer" onClick={handleCloseItem}>Algorithmic Learning Hub</span>
          {selectedItem && (
            <>
              <span className="text-slate-700">/</span>
              <span className="text-slate-350 cursor-default truncate max-w-[150px] font-bold">{selectedItem.title}</span>
            </>
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedItem ? (
          
          /* 1. COMPREHENSIVE HUB DIRECTORY VIEW */
          <motion.div
            key="hub-directory"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-7xl mx-auto w-full px-6 py-10 space-y-12 z-10 relative flex-1"
          >
            <header className="max-w-3xl space-y-3.5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-full text-[10.5px] font-black uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                AKGLS Growth Academy & Implementation Blueprints
              </span>
              <h1 className="text-3.5xl sm:text-5xl font-black text-white tracking-tight leading-none">
                Organic Engineering <br />
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-[#818cf8] bg-clip-text text-transparent">Learning & Code Hub</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Direct clinical masterclasses, downloadable micro-schemas, checklist scripts, and advanced SEO/GEO courses. Designed strictly for software teams and executive marketers.
              </p>
            </header>

            {/* CATEGORIES SELECTION DRAWER */}
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-stretch lg:items-center bg-slate-900/30 p-5 border border-slate-800/80 rounded-2xl backdrop-blur-md">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const count = getCategoryCount(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                      }}
                      className={`text-xs px-3.5 py-2.5 border rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                        isActive 
                        ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/40' 
                        : 'bg-slate-950/70 border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] font-mono rounded px-1.5 py-0.2 font-bold ${isActive ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-slate-500'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Action search */}
              <div className="relative min-w-[240px] shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Filter curriculum, templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-slate-200 outline-none transition placeholder:text-slate-650"
                />
              </div>
            </div>

            {/* HIGH-IMPACT MAIN SHOWCASE ACADEMY GRID */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {filteredItems.map((item) => {
                  const isCourse = item.type === "Course";
                  const isWebinar = item.type === "Webinar";
                  const isDownloadable = item.type === "Template" || item.type === "Checklist";
                  
                  return (
                    <article 
                      key={item.id}
                      className="bg-slate-900/40 border border-slate-850 rounded-2xl p-6 hover:border-slate-750 transition duration-300 flex flex-col justify-between group relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className={`text-[9px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded border ${
                            isCourse 
                            ? "bg-indigo-950/50 text-indigo-300 border-indigo-500/20" 
                            : isWebinar 
                            ? "bg-red-950/50 text-red-300 border-red-500/20"
                            : "bg-teal-950/50 text-teal-300 border-teal-500/20"
                          }`}>
                            {item.type}
                          </span>
                          
                          <span className="text-[10px] text-slate-500 font-mono font-bold">
                            {item.durationOrPages}
                          </span>
                        </div>

                        <h3 
                          onClick={() => handleSelectItem(item)}
                          className="text-base sm:text-lg font-black text-white hover:text-emerald-400 cursor-pointer transition leading-snug font-display font-black"
                        >
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                          {item.shortDesc}
                        </p>

                        <div className="flex items-center gap-3 bg-slate-950/50 p-2.5 rounded-lg border border-slate-900">
                          <img src={item.author.avatar} alt="Author" className="h-6 w-6 rounded-full border border-slate-800 object-cover" />
                          <div className="text-[10px] leading-tight">
                            <span className="block font-bold text-white leading-none">{item.author.name}</span>
                            <span className="block text-slate-500 mt-0.5">{item.author.role}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[8.5px] font-mono bg-slate-950 text-slate-500 border border-slate-900 py-0.5 px-2 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-900 mt-6 flex justify-between items-center">
                        <span className="text-[10.5px] text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-500/10 px-2 py-0.5 rounded">
                          ★ {item.rating.toFixed(1)} Rating
                        </span>
                        
                        <button 
                          onClick={() => handleSelectItem(item)}
                          className="bg-slate-950 border border-slate-800 hover:border-slate-705 group-hover:bg-emerald-600 group-hover:border-emerald-500 text-slate-300 group-hover:text-white font-black text-[10.5px] uppercase tracking-wider px-4 py-2 rounded-xl transition duration-300 inline-flex items-center gap-1.5"
                        >
                          <span>{isCourse ? "Start Course" : isWebinar ? "Watch Stream" : "Access Resource"}</span>
                          <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="bg-slate-950 border border-slate-900 rounded-3xl p-16 text-center max-w-md mx-auto space-y-4">
                <HelpCircle className="w-10 h-10 text-slate-700 mx-auto" />
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">No Resources Found</h3>
                <p className="text-xs text-slate-500">
                  Try adjusting filters or terms to search the general core catalog.
                </p>
                <button 
                  onClick={() => { setSelectedCategory('All Resources'); setSearchQuery(''); }}
                  className="bg-slate-905 border border-slate-800 text-xs text-slate-300 font-bold px-4 py-2 rounded-xl"
                >
                  Clear Fields
                </button>
              </div>
            )}

            {/* NEWSLETTER ENTRANCE BOX */}
            <div className="bg-gradient-to-br from-[#060b13] via-[#0c1424] to-[#060b13] border border-slate-850 rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all text-center md:text-left">
              <div className="absolute top-0 right-10 h-32 w-32 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/85 border border-emerald-500/20 text-emerald-450 rounded text-[9.5px] font-black tracking-wide uppercase">
                    <Trophy className="w-3.5 h-3.5" /> Direct Industry Briefings
                  </span>
                  <h3 className="text-xl md:text-2.5xl font-black text-white tracking-tight">
                    Receive Next-Gen Blueprint Drops
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Direct access to experimental JSON-LD templates, new course releases, SEO code snippets, and live webinar roundtables sent to your technical engineering lead weekly.
                  </p>
                </div>

                <div className="md:col-span-5 w-full">
                  <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                    <input
                      type="email"
                      required
                      placeholder="developer@yourcompany.com"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-850 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                    />
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl transition inline-flex items-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Join
                    </button>
                  </form>
                  {subscribedSuccess && (
                    <span className="block text-[11px] text-emerald-400 mt-2.5 font-bold animate-pulse text-left">
                      ✓ Subscribed! Keep an eye on your development updates folder.
                    </span>
                  )}
                </div>
              </div>
            </div>

          </motion.div>
        ) : (
          
          /* 2. ELEVATED DETAIL READER FOR DIFFERENT RESOURCE TYPES */
          <motion.div
            key="hub-reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-7xl mx-auto w-full px-6 py-10 z-10 relative flex-1"
          >
            
            {/* COURSE READER WITH INTERACTIVE SIDEBAR & INTEGRATED QUIZZES */}
            {selectedItem.type === "Course" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* 2A. LEFT SIDEBAR OUTLINE DRAWER (3 Cols) */}
                <aside className="lg:col-span-4 bg-slate-950/90 border border-slate-850 p-6 rounded-2xl space-y-4 text-left">
                  <div className="border-b border-slate-900 pb-3">
                    <span className="text-[10px] text-emerald-400 font-mono font-bold block mb-1">
                      CURRICULUM MODULES
                    </span>
                    <h3 className="text-sm font-black text-white font-display">
                      Course Navigation Index
                    </h3>
                  </div>

                  <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 scrollbar-thin">
                    {selectedItem.modules?.map((mod, mIdx) => (
                      <div key={mod.id} className="space-y-1.5">
                        <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider block">
                          {mod.title}
                        </span>
                        
                        <div className="space-y-1 pl-1">
                          {mod.lessons.map((les, lIdx) => {
                            const isSelected = activeModuleIdx === mIdx && activeLessonIdx === lIdx;
                            const isCompleted = completedLessonIds.includes(les.id);
                            
                            return (
                              <button
                                key={les.id}
                                onClick={() => {
                                  setActiveModuleIdx(mIdx);
                                  setActiveLessonIdx(lIdx);
                                  setQuizSubmitted(false);
                                  setSelectedAnswers({});
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`w-full text-left p-2.5 rounded-xl border text-xs flex justify-between items-center transition ${
                                  isSelected 
                                  ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-300" 
                                  : "bg-slate-900/10 border-transparent text-slate-400 hover:bg-slate-900/50 hover:text-white"
                                }`}
                              >
                                <span className="truncate pr-2 font-bold">{les.title}</span>
                                <span className="shrink-0 flex items-center gap-1 text-[9px] font-mono font-semibold">
                                  {isCompleted ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <span>{les.duration}</span>
                                  )}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Syllabus Stats Box */}
                  <div className="pt-4 border-t border-slate-900 space-y-3">
                    <div className="flex justify-between items-center text-[10.5px] text-slate-400 font-bold">
                      <span>Total Lessons Completed:</span>
                      <span className="font-mono text-emerald-400">
                        {completedLessonIds.length} / {selectedItem.modules?.reduce((acc, m) => acc + m.lessons.length, 0)}
                      </span>
                    </div>

                    <button 
                      onClick={() => handleCloseItem()}
                      className="w-full bg-slate-900 border border-slate-800 hover:border-slate-705 text-slate-300 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1"
                    >
                      Exit Course Home
                    </button>
                  </div>
                </aside>

                {/* 2B. MIDDLE ACTIVE CONTENT BOX (8 Cols) */}
                <main className="lg:col-span-8 space-y-8 text-left bg-slate-900/20 border border-slate-800/80 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl relative">
                  
                  {activeLessonContent ? (
                    <article className="space-y-6">
                      <div className="flex justify-between items-center flex-wrap gap-2 pb-4 border-b border-slate-900">
                        <div className="flex items-center gap-2 text-[10.5px] text-slate-500 font-mono font-bold">
                          <span>Active Lesson:</span>
                          <span className="text-emerald-400 font-semibold">{activeLessonContent.title}</span>
                        </div>

                        <button 
                          onClick={() => handleToggleLessonComplete(activeLessonContent.id)}
                          className={`text-xs px-3.5 py-1.5 rounded-lg border font-bold transition flex items-center gap-1 ${
                            completedLessonIds.includes(activeLessonContent.id)
                            ? "bg-emerald-950/80 border-emerald-500/25 text-emerald-450"
                            : "bg-slate-950 hover:bg-slate-900 border-slate-850 hover:border-slate-750 text-slate-350"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{completedLessonIds.includes(activeLessonContent.id) ? "Marked as Solved!" : "Solve Lesson"}</span>
                        </button>
                      </div>

                      <div className="prose prose-invert max-w-none">
                        {renderItemMarkdown(activeLessonContent.content)}
                      </div>

                      {/* QUICK COMPREHENSION VERIFICATION - DYNAMIC QUIZ */}
                      <div className="my-8 bg-slate-950 border border-slate-900 p-6 rounded-2xl space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
                          <Trophy className="w-4 h-4 text-emerald-450" />
                          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black">
                            Lesson Verification Quiz
                          </h4>
                        </div>

                        {!quizSubmitted ? (
                          <div className="space-y-5">
                            {currentQuizQuestions.map((q, qIdx) => (
                              <div key={qIdx} className="space-y-2">
                                <p className="text-xs text-slate-300 font-bold">
                                  Q{qIdx + 1}: {q.q}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {q.options.map((option, oIdx) => {
                                    const isSelected = selectedAnswers[qIdx] === oIdx;
                                    return (
                                      <button
                                        key={oIdx}
                                        type="button"
                                        onClick={() => handleAnswerChange(qIdx, oIdx)}
                                        className={`p-3 text-left text-xs rounded-xl border transition ${
                                          isSelected 
                                          ? "bg-emerald-950/30 border-emerald-500/50 text-emerald-400 font-bold" 
                                          : "bg-slate-900/40 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-white"
                                        }`}
                                      >
                                        {option}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                            
                            <button
                              type="button"
                              onClick={handleSubmitQuiz}
                              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition"
                            >
                              Submit Verification Answers
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-4 text-center py-4">
                            <span className="inline-flex items-center justify-center p-3 bg-emerald-950 text-emerald-400 border border-emerald-500/20 rounded-full">
                              <BookOpenCheck className="w-8 h-8" />
                            </span>
                            <div className="space-y-1">
                              <h5 className="text-sm font-black text-white font-display">
                                Diagnostic Compilation Process Complete!
                              </h5>
                              <p className="text-xs text-slate-400">
                                You scored <strong>{quizScore} out of {currentQuizQuestions.length}</strong> correct.
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setQuizSubmitted(false);
                                setSelectedAnswers({});
                              }}
                              className="text-xs text-emerald-400 font-bold hover:text-emerald-350 transition underline"
                            >
                              Retry Diagnostic
                            </button>
                          </div>
                        )}
                      </div>

                    </article>
                  ) : (
                    <div className="text-center py-12 space-y-3">
                      <AlertCircle className="w-10 h-10 text-slate-700 mx-auto" />
                      <p className="text-xs text-slate-400">No active lessons loaded. Select a chapter from the modules navigation.</p>
                    </div>
                  )}

                </main>

              </div>
            ) : selectedItem.type === "Webinar" ? (
              
              /* WEBINAR RECORDING INTERACTIVE PLAYER (Single Grid col) */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                
                {/* Visual Video Stream Player */}
                <main className="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-3xl p-4 sm:p-6 space-y-6 shadow-2xl relative">
                  
                  {/* Virtualized CSS simulated custom HTML5 video display container */}
                  <div className="w-full aspect-video bg-black/95 rounded-2xl relative overflow-hidden group/video flex items-center justify-center border border-slate-900">
                    {/* Simulated playing content frame visual decoration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
                    
                    {/* Animated visual telemetry lines on sound/image frame */}
                    {isPlaying && (
                      <div className="absolute inset-x-4 top-4 z-20 flex justify-between text-[8px] font-mono text-emerald-400">
                        <span>LIVE STREAM CAPTURE ENGINE</span>
                        <span className="animate-pulse">● PLAYING [DECODER: ACCELERATED]</span>
                      </div>
                    )}

                    {!isPlaying ? (
                      <div className="z-20 text-center space-y-4">
                        <button 
                          onClick={() => setIsPlaying(true)}
                          className="h-16 w-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/50 scale-100 hover:scale-110 active:scale-95 transition"
                        >
                          <Play className="w-7 h-7 fill-white translate-x-0.5" />
                        </button>
                        <div>
                          <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest font-black">SGE DIAGNOSTIC BRIEF</span>
                          <span className="block text-sm font-bold text-white mt-1">Play Webinar Stream ({selectedItem.durationOrPages})</span>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center z-20 bg-emerald-400/5 select-none">
                        {/* Custom video mockup graphic */}
                        <div className="text-center space-y-3 pointer-events-none">
                          <Eye className="w-12 h-12 text-emerald-400/35 mx-auto animate-pulse" />
                          <p className="text-[10px] font-mono text-emerald-400/60 tracking-wider">
                            SIMULATED WEBINAR BUFFERING AT H-4K CHANNELS
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Integrated controls drawer HUD inside video aspect container */}
                    <div className="absolute bottom-4 inset-x-4 z-20 bg-slate-950/80 backdrop-blur border border-slate-850 rounded-xl px-4 py-3 flex items-center justify-between gap-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:text-emerald-400 transition"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                      </button>

                      {/* Timeline */}
                      <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                        <div className="h-full bg-emerald-500 transition-all" style={{ width: `${isPlaying ? videoProgress : 0}%` }} />
                      </div>

                      <div className="flex items-center gap-3">
                        <button onClick={() => setIsMuted(!isMuted)} className="text-slate-400 hover:text-white transition">
                          <Volume2 className={`w-4 h-4 ${isMuted ? 'text-red-500' : 'text-slate-400'}`} />
                        </button>
                        <span className="text-[9px] font-mono text-slate-500 font-bold whitespace-nowrap">
                          {isPlaying ? "11:24" : "00:00"} / 75:00
                        </span>
                        <Maximize2 className="w-4 h-4 text-slate-500 hover:text-white transition cursor-pointer" />
                      </div>
                    </div>

                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2.5xl font-black text-white leading-tight font-display">
                      {selectedItem.title}
                    </h2>

                    <div className="flex items-center gap-3 py-4 border-y border-slate-900 bg-slate-950/50 p-4 border border-slate-900 rounded-xl">
                      <img src={selectedItem.author.avatar} alt="Author" className="h-8 w-8 rounded-full border border-slate-800 object-cover" />
                      <div>
                        <span className="block text-xs font-black text-white">{selectedItem.author.name}</span>
                        <span className="block text-[10px] text-slate-500 tracking-wider mt-0.5 font-bold uppercase">{selectedItem.author.role}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      We highlight how real-time semantic entities bind inside actual user-prompt queries. Follow along with structural schema blueprints that solve duplicate-directory crawling errors instantly.
                    </p>
                  </div>

                </main>

                <aside className="lg:col-span-4 space-y-6">
                  {/* Executive Advisory Box */}
                  <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
                      Consultant Roundtable Assets
                    </h4>
                    
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Shashi Prabha and the high-speed technology group host direct implementation webinars every Thursday. Receive real code files, indexing scripts, and diagnostic scores.
                    </p>

                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex justify-between font-semibold">
                        <span>Average SGE Lift Score:</span>
                        <span className="text-emerald-450 font-mono">+38.5%</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Participants Limit:</span>
                        <span className="text-slate-350">150 Executives</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        window.location.href = "mailto:info@akglsgroup.com?subject=SGE GEO webinar query";
                      }}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-950/30"
                    >
                      Inquire on Upcoming Stream
                    </button>
                  </div>
                </aside>

              </div>
            ) : (
              
              /* 3. DOWNLOADABLE TEMPLATE OR PRE-PUBLISH CHECKLIST READ MODE */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                
                <main className="lg:col-span-8 bg-slate-900/20 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6 shadow-2xl">
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[10px] bg-teal-950/50 text-teal-300 border border-teal-500/15 p-1 px-3 rounded-md w-fit font-mono font-black uppercase tracking-wider">
                      {selectedItem.type} DOCUMENT ARCHIVE
                    </div>

                    <h2 className="text-xl sm:text-3.5xl font-black text-white leading-tight font-display">
                      {selectedItem.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 font-mono font-semibold pt-1">
                      <span className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-900 rounded px-2.5">
                        <FileText className="w-3.5 h-3.5 text-teal-400" /> FILE SIZE: {selectedItem.fileSize || "4.2 MB"}
                      </span>
                      
                      <span className="p-1 bg-slate-950 border border-slate-900 rounded px-2.5">
                        DOWNLOAD LIMITS: NONE (FREE ACCREDITATION)
                      </span>
                    </div>

                    <div className="border-t border-slate-900 pt-6">
                      {renderItemMarkdown(selectedItem.content)}
                    </div>
                  </div>

                </main>

                <aside className="lg:col-span-4 space-y-6">
                  
                  {/* ACQUISITION ACTION CARD FOR ARCHIVE TRANSCRIPTS */}
                  <div className="bg-slate-950 border border-slate-850 p-6 rounded-2xl text-center space-y-4.5 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-400 to-indigo-500" />
                    
                    <div className="h-12 w-12 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/15 flex items-center justify-center mx-auto">
                      <Download className="w-5 h-5 text-teal-450 animate-bounce" />
                    </div>

                    <div>
                      <h4 className="text-base font-black text-white font-display">Get Direct Resource ZIP</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light mt-1">
                        Unlock standard schemas, Excel estimators, checklists, and vector diagrams with zero keyword inflation.
                      </p>
                    </div>

                    <button 
                      onClick={handleDownloadRequest}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-950/40"
                    >
                      Authenticate & Download Archive ({selectedItem.fileSize || "4.2 MB"})
                    </button>

                    <p className="text-[10px] text-slate-650 font-mono font-semibold">
                      SHA256 CHECKSUM GUARANTEED SAFE SCAN
                    </p>
                  </div>

                </aside>

              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

      {/* DOWNLOAD GATEWAY NEWSLETTER GATE MODAL */}
      <AnimatePresence>
        {showDownloadBarrier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-950 border border-slate-850 rounded-2xl max-w-md w-full p-6 space-y-5 text-left shadow-2xl relative"
            >
              <div className="h-10 w-10 bg-teal-500/10 border border-teal-400/20 rounded-lg flex items-center justify-center text-teal-400">
                <Lock className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-base font-black text-white font-display">
                  Corporate Verification Required
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                  Enter your email to immediately generate a temporary download token to receive your technical material {selectedItem && `"${selectedItem.title}"`}.
                </p>
              </div>

              {!downloadCompleted ? (
                <form onSubmit={handleDownloadSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10.5px] text-slate-500 font-mono font-bold uppercase block">CORPORATE WORK EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="marketing@yourcompany.com"
                      value={barrierEmail}
                      onChange={(e) => setBarrierEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition font-bold"
                    />
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowDownloadBarrier(false)}
                      className="flex-1 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 font-bold text-xs py-3 rounded-xl transition"
                    >
                      Cancel
                    </button>
                    
                    <button
                      type="submit"
                      disabled={downloadProcessing}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl transition disabled:opacity-50"
                    >
                      {downloadProcessing ? "Compiling token..." : "Generate ZIP Link"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4 space-y-3">
                  <Check className="w-10 h-10 text-emerald-400 bg-emerald-950/70 border border-emerald-500/25 p-2 rounded-full mx-auto" />
                  <p className="text-xs text-slate-300 font-bold">Your Direct Download Token Generated!</p>
                  <p className="text-[11px] text-slate-500">The browser should begin transferring {selectedItem?.fileSize || "the file"} immediately. If nothing happens, refresh filters.</p>
                  <button
                    onClick={() => setShowDownloadBarrier(false)}
                    className="bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 px-6 py-2 rounded-xl mt-2 transition"
                  >
                    Done
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

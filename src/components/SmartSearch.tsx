import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, CornerDownLeft, Sparkles, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { searchDatabase } from '../data';
import { SearchResult } from '../types';

interface SmartSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SmartSearch({ isOpen, onClose }: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle global key listeners for shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowDown' && results.length > 0) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      }
      if (e.key === 'ArrowUp' && results.length > 0) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      }
      if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        handleResultClick(results[selectedIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [results, selectedIndex]);

  // Local matching engine
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const cleanQuery = query.toLowerCase();
    const filtered = searchDatabase.filter(
      (item) =>
        item.title.toLowerCase().includes(cleanQuery) ||
        item.description.toLowerCase().includes(cleanQuery) ||
        item.category.toLowerCase().includes(cleanQuery)
    );
    setResults(filtered.slice(0, 5));
    setSelectedIndex(0);
  }, [query]);

  const handleResultClick = (item: any) => {
    onClose();
    if (item.href && item.href.startsWith('#')) {
      window.location.hash = item.href;
    }
    try {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (e) {
      // Ignored for non-selector hash routes
    }
  };

  const trendingSearches = [
    { title: "AI SEO Services Dashboard", href: "#ai-seo-services" },
    { title: "SEO ROI Calculator", href: "#roi-calculator" },
    { title: "Google Performance Max Ads Guide", href: "/google-ads-services" },
    { title: "AI Content Analyzer Free Tools", href: "#content-analyzer" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-start justify-center pt-20 px-4 text-left"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.96, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -10, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="bg-white rounded-3xl w-full max-w-2xl border border-slate-200/80 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Input box */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-indigo-500" />
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="Query services, free tools, learning classes or case study names..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none py-1.5 font-medium"
                />
              </div>
              <button 
                onClick={onClose}
                className="p-1 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors text-xs font-bold"
              >
                ESC
              </button>
            </div>

            {/* Results or Trending suggestions list */}
            <div className="p-5 max-h-[380px] overflow-y-auto space-y-4">
              {results.length > 0 ? (
                <div className="space-y-1.5">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black font-display px-2">
                    Search Results ({results.length})
                  </p>
                  
                  {results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleResultClick(item)}
                        className={`w-full text-left p-3.5 rounded-2xl flex items-start justify-between transition-all border ${
                          isSelected 
                            ? 'bg-brand-indigo/5 border-brand-indigo shadow-md' 
                            : 'bg-slate-50 hover:bg-slate-100 border-transparent'
                        }`}
                      >
                        <div className="space-y-1 pr-6">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] bg-brand-indigo/10 text-brand-indigo font-bold px-2 py-0.5 rounded uppercase">
                              {item.category}
                            </span>
                            <span className="text-xs font-bold text-brand-navy">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-light truncate max-w-md">
                            {item.description}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="flex items-center gap-1 text-[10px] text-brand-indigo font-semibold font-mono animate-pulse shrink-0">
                            <span>Go</span>
                            <CornerDownLeft className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : query.trim() ? (
                <div className="py-8 text-center text-slate-400 space-y-2">
                  <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs font-bold">No exact matches found for "{query}"</p>
                  <p className="text-[11px] text-slate-500 max-w-sm mx-auto font-light leading-relaxed">
                    Try searching wider terms like "SEO", "Ads", "Shopify", or visit our interactive capabilities directory block.
                  </p>
                </div>
              ) : (
                /* Static Suggestion cards */
                <div className="space-y-4 text-left">
                  <div className="space-y-2">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black font-display flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-orange" /> Recommended Searches
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {trendingSearches.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setQuery(item.title);
                            setTimeout(() => {
                              const el = document.querySelector(item.href);
                              if (el) {
                                onClose();
                                el.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 100);
                          }}
                          className="flex items-center justify-between text-left p-3 rounded-xl bg-slate-50 hover:bg-brand-indigo/5 border border-slate-100 hover:border-brand-indigo/30 transition-all font-semibold text-slate-700 text-xs"
                        >
                          <span className="truncate">{item.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Hint / controls footer */}
            <div className="bg-slate-50 border-t border-slate-100 p-3.5 px-5 flex items-center justify-between text-[10px] text-slate-400 font-mono font-bold tracking-wide">
              <span>Use ↑ ↓ keys to navigate, Enter to submit</span>
              <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-brand-indigo" /> AKGLS indexing engine 2.0</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, X, Send, Sparkles, Globe, Search, RefreshCw, 
  Trash2, ExternalLink, ShieldCheck, Zap, Cpu, Check, 
  ChevronRight, CornerDownLeft, AlertCircle, User, LogIn
} from 'lucide-react';
import { ChatMessageRecord, GroundingMetadata } from '../types';
import { 
  auth, 
  signInWithGoogle, 
  saveChatMessageToFirestore, 
  subscribeToChatHistory, 
  clearChatHistoryFromFirestore 
} from '../firebase';

interface GeminiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

type ModelVariant = 'gemini-3.5-flash' | 'gemini-3.1-pro-preview' | 'gemini-3.1-flash-lite';
type ConsultantRole = 'seo_architect' | 'content_strategist' | 'lead_consultant' | 'general';

const ROLE_PRESETS: { id: ConsultantRole; label: string; description: string; icon: string }[] = [
  {
    id: 'seo_architect',
    label: 'SEO & GEO Architect',
    description: 'Technical SEO, AI Overviews citations, Perplexity indexation & schema graphs',
    icon: '🌐'
  },
  {
    id: 'content_strategist',
    label: 'Content & Copywriter',
    description: 'High-converting copy, meta descriptions, and search-optimized articles',
    icon: '✍️'
  },
  {
    id: 'lead_consultant',
    label: 'Enterprise Growth Consultant',
    description: 'B2B acquisition funnels, CAC optimization, and enterprise digital strategy',
    icon: '📈'
  },
  {
    id: 'general',
    label: 'AI Growth Strategist',
    description: 'Holistic digital advisory across digital channels and performance',
    icon: '⚡'
  }
];

const PROMPT_SUGGESTIONS = [
  "How can our domain rank in Google AI Overviews & Perplexity?",
  "Generate Schema.org Organization and Service JSON-LD code",
  "Audit our lead funnel conversion rate and suggest improvements",
  "What are the latest 2026 Google Search algorithmic updates?"
];

export default function GeminiChatModal({ isOpen, onClose, initialPrompt }: GeminiChatModalProps) {
  const [messages, setMessages] = useState<ChatMessageRecord[]>([]);
  const [input, setInput] = useState(initialPrompt || '');
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState<ModelVariant>('gemini-3.5-flash');
  const [searchGrounding, setSearchGrounding] = useState<boolean>(true);
  const [role, setRole] = useState<ConsultantRole>('seo_architect');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(auth.currentUser);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Monitor auth status
  useEffect(() => {
    const unsub = auth.onAuthStateChanged?.((user: any) => {
      setCurrentUser(user);
    });
    return () => unsub?.();
  }, []);

  // Sync conversation history from Firestore if logged in, or localStorage as fallback
  useEffect(() => {
    if (!isOpen) return;

    if (currentUser?.uid) {
      const unsub = subscribeToChatHistory(currentUser.uid, (firestoreMsgs) => {
        if (firestoreMsgs && firestoreMsgs.length > 0) {
          setMessages(firestoreMsgs);
        } else {
          // Provide welcome message if brand new
          initializeDefaultGreeting();
        }
      });
      return () => unsub();
    } else {
      // Offline / guest localStorage fallback
      try {
        const saved = localStorage.getItem('akgls_gemini_chat_history');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setMessages(parsed);
            return;
          }
        }
      } catch (_) {}
      initializeDefaultGreeting();
    }
  }, [isOpen, currentUser?.uid]);

  const initializeDefaultGreeting = () => {
    const welcomeMsg: ChatMessageRecord = {
      id: 'msg_welcome',
      userId: currentUser?.uid || 'guest',
      role: 'model',
      content: `Hello! I am your **AKGLS Group Senior AI Consultant**.\n\nI specialize in **Generative Engine Optimization (GEO)**, Google Search algorithms, AI Overviews citation engineering, technical architectures, and high-ROI client acquisition.\n\nHow can I empower your growth strategy today?`,
      timestamp: new Date().toISOString(),
      modelUsed: 'gemini-3.5-flash',
      searchGrounded: false
    };
    setMessages([welcomeMsg]);
  };

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Handle Send
  const handleSend = async (customText?: string) => {
    const textToSend = (customText !== undefined ? customText : input).trim();
    if (!textToSend || isLoading) return;

    setErrorMsg(null);
    setInput('');

    const userMessage: ChatMessageRecord = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      userId: currentUser?.uid || 'guest',
      role: 'user',
      content: textToSend,
      timestamp: new Date().toISOString()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    // Save user message to Firestore if authenticated
    if (currentUser?.uid) {
      saveChatMessageToFirestore(currentUser.uid, userMessage);
    } else {
      try {
        localStorage.setItem('akgls_gemini_chat_history', JSON.stringify(newMessages));
      } catch (_) {}
    }

    setIsLoading(true);

    try {
      // Determine model based on guidelines:
      // searchGrounding requires 'gemini-3.5-flash'
      const chosenModel = searchGrounding ? 'gemini-3.5-flash' : model;

      // Prepare conversation history payload
      const chatPayload = newMessages
        .filter(m => m.role === 'user' || m.role === 'model')
        .map(m => ({
          role: m.role === 'model' ? 'model' : 'user',
          content: m.content
        }));

      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: chatPayload,
          model: chosenModel,
          searchGrounding: Boolean(searchGrounding),
          role
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();

      const aiMessage: ChatMessageRecord = {
        id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        userId: currentUser?.uid || 'guest',
        role: 'model',
        content: data.content || "I apologize, but I could not generate a response. Please try again.",
        timestamp: new Date().toISOString(),
        modelUsed: data.modelUsed || chosenModel,
        searchGrounded: data.searchGrounded,
        groundingMetadata: data.groundingMetadata
      };

      const updatedHistory = [...newMessages, aiMessage];
      setMessages(updatedHistory);

      // Save AI message to Firestore if authenticated
      if (currentUser?.uid) {
        saveChatMessageToFirestore(currentUser.uid, aiMessage);
      } else {
        try {
          localStorage.setItem('akgls_gemini_chat_history', JSON.stringify(updatedHistory));
        } catch (_) {}
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMsg(err.message || 'Failed to communicate with Gemini API. Check network or API credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearHistory = async () => {
    if (!window.confirm('Clear all conversation history?')) return;
    if (currentUser?.uid) {
      await clearChatHistoryFromFirestore(currentUser.uid);
    } else {
      localStorage.removeItem('akgls_gemini_chat_history');
    }
    initializeDefaultGreeting();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="gemini-chat-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gemini-chat-title"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative flex flex-col w-full max-w-4xl h-[92vh] max-h-[850px] bg-[#0c121e] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-800 bg-[#0e1526]/90">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-indigo to-brand-purple shadow-lg shadow-brand-indigo/20 text-white">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-brand-emerald rounded-full border-2 border-[#0c121e]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 id="gemini-chat-title" className="text-base font-bold text-white font-display">
                    AKGLS AI Growth Advisor
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/30">
                    Gemini 3 Powered
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Real-time SEO, Generative Engine Optimization & Enterprise Strategy
                </p>
              </div>
            </div>

            {/* Header Controls: Search Grounding Toggle, Clear History, Close */}
            <div className="flex items-center gap-2">
              {/* Google Search Grounding Toggle Button */}
              <button
                type="button"
                id="search-grounding-toggle"
                onClick={() => setSearchGrounding(!searchGrounding)}
                title={searchGrounding ? "Google Search Grounding active (gemini-3.5-flash)" : "Click to enable live Google Search Grounding"}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  searchGrounding 
                    ? 'bg-brand-emerald/15 text-brand-emerald border-brand-emerald/40 shadow-sm shadow-brand-emerald/10' 
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <Globe className={`w-3.5 h-3.5 ${searchGrounding ? 'animate-pulse text-brand-emerald' : ''}`} />
                <span className="hidden sm:inline">Google Search Grounding</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40">
                  {searchGrounding ? 'ON' : 'OFF'}
                </span>
              </button>

              {/* Clear History Button */}
              <button
                type="button"
                onClick={handleClearHistory}
                title="Clear conversation history"
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-900 rounded-xl transition-colors"
                aria-label="Clear chat history"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                title="Close AI Assistant"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Model and Role Control Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-2.5 bg-[#0a0e19] border-b border-slate-850 text-xs">
            {/* Model Selector Selector Chips */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium mr-1">Engine:</span>
              <button
                type="button"
                onClick={() => { setModel('gemini-3.5-flash'); }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-xs flex items-center gap-1 ${
                  (model === 'gemini-3.5-flash' || searchGrounding)
                    ? 'bg-brand-indigo text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
                title="Gemini 3.5 Flash: Recommended for general tasks & Search Grounding"
              >
                <Sparkles className="w-3 h-3" />
                <span>3.5 Flash</span>
                <span className="text-[9px] opacity-80">(General)</span>
              </button>

              <button
                type="button"
                disabled={searchGrounding}
                onClick={() => setModel('gemini-3.1-pro-preview')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-xs flex items-center gap-1 ${
                  model === 'gemini-3.1-pro-preview' && !searchGrounding
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                } ${searchGrounding ? 'opacity-50 cursor-not-allowed' : ''}`}
                title={searchGrounding ? "Turn off Search Grounding to switch to Pro" : "Gemini 3.1 Pro Preview: Deep Technical & Architectural Audits"}
              >
                <Cpu className="w-3 h-3" />
                <span>3.1 Pro</span>
                <span className="text-[9px] opacity-80">(Complex)</span>
              </button>

              <button
                type="button"
                disabled={searchGrounding}
                onClick={() => setModel('gemini-3.1-flash-lite')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-xs flex items-center gap-1 ${
                  model === 'gemini-3.1-flash-lite' && !searchGrounding
                    ? 'bg-brand-teal text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                } ${searchGrounding ? 'opacity-50 cursor-not-allowed' : ''}`}
                title={searchGrounding ? "Turn off Search Grounding to switch to Flash Lite" : "Gemini 3.1 Flash Lite: Instant Speed & Copywriting"}
              >
                <Zap className="w-3 h-3" />
                <span>3.1 Lite</span>
                <span className="text-[9px] opacity-80">(Fast)</span>
              </button>
            </div>

            {/* Role / Persona Selector */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-medium">Role:</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as ConsultantRole)}
                className="bg-slate-900 border border-slate-750 text-slate-200 rounded-lg px-2.5 py-1 font-semibold text-xs focus:outline-none focus:border-brand-indigo"
              >
                {ROLE_PRESETS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.icon} {r.label}
                  </option>
                ))}
              </select>

              {/* User Account / Firestore Cloud Status */}
              {currentUser ? (
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-brand-emerald font-semibold ml-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[120px]">{currentUser.displayName || currentUser.email}</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => signInWithGoogle()}
                  className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-brand-indigo ml-2 transition-colors"
                  title="Sign in with Google to persist chat history in Firestore"
                >
                  <LogIn className="w-3 h-3" />
                  <span>Sync to Cloud</span>
                </button>
              )}
            </div>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="flex items-center justify-between gap-2 px-5 py-2.5 bg-rose-500/10 border-b border-rose-500/30 text-rose-300 text-xs font-medium">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
              <button 
                type="button"
                onClick={() => setErrorMsg(null)}
                className="text-rose-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Conversation Thread */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-slate-200">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[88%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  {/* Avatar Icon */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                    isUser 
                      ? 'bg-slate-800 text-slate-200 border border-slate-700' 
                      : 'bg-gradient-to-br from-brand-indigo to-brand-purple text-white shadow-md'
                  }`}>
                    {isUser ? (
                      currentUser?.photoURL ? (
                        <img 
                          src={currentUser.photoURL} 
                          alt="User" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <User className="w-4 h-4" />
                      )
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`flex flex-col space-y-1.5 ${isUser ? 'items-end' : 'items-start'}`}>
                    <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isUser
                        ? 'bg-brand-indigo text-white rounded-tr-none shadow-md shadow-brand-indigo/10'
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none shadow-sm'
                    }`}>
                      {/* Message Content formatted with line breaks & basic markdown styling */}
                      <div className="whitespace-pre-wrap font-normal selection:bg-brand-indigo/30">
                        {msg.content}
                      </div>

                      {/* Google Search Grounding Metadata & Sources */}
                      {!isUser && msg.groundingMetadata && (
                        <div className="mt-3 pt-3 border-t border-slate-800 text-xs">
                          {/* Search Queries Used */}
                          {msg.groundingMetadata.webSearchQueries && msg.groundingMetadata.webSearchQueries.length > 0 && (
                            <div className="mb-2">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                                Grounded Search Queries:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {msg.groundingMetadata.webSearchQueries.map((query, qIdx) => (
                                  <span 
                                    key={qIdx}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/80 text-brand-teal text-[11px] font-medium"
                                  >
                                    <Search className="w-2.5 h-2.5" />
                                    {query}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Source Citations */}
                          {msg.groundingMetadata.groundingChunks && msg.groundingMetadata.groundingChunks.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                                Web Sources & Citations:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {msg.groundingMetadata.groundingChunks
                                  .filter(chunk => chunk.web?.uri)
                                  .map((chunk, cIdx) => (
                                    <a
                                      key={cIdx}
                                      href={chunk.web?.uri}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-brand-teal/50 hover:bg-slate-900 transition-all text-[11px] text-slate-300 hover:text-brand-teal"
                                    >
                                      <span className="truncate font-medium">{chunk.web?.title || chunk.web?.uri}</span>
                                      <ExternalLink className="w-3 h-3 shrink-0 text-slate-500" />
                                    </a>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Metadata Sub-line */}
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 px-1">
                      <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      {!isUser && msg.modelUsed && (
                        <>
                          <span>•</span>
                          <span className="font-semibold text-slate-300">{msg.modelUsed}</span>
                        </>
                      )}
                      {!isUser && msg.searchGrounded && (
                        <>
                          <span>•</span>
                          <span className="text-brand-emerald flex items-center gap-0.5">
                            <Globe className="w-2.5 h-2.5" /> Google Search
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-purple text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-bounce" />
                </div>
                <div className="rounded-2xl rounded-tl-none px-4 py-3 bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-brand-indigo" />
                  <span>
                    {searchGrounding ? "Searching Google & analyzing citations..." : "Synthesizing strategy..."}
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          {messages.length <= 2 && (
            <div className="px-5 py-2 bg-[#090d18] border-t border-slate-850">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                Suggested Growth Inquiries:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PROMPT_SUGGESTIONS.map((promptText, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => handleSend(promptText)}
                    className="text-left text-xs bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-brand-indigo/50 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <span>{promptText}</span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Chat Input Bar */}
          <div className="p-4 bg-[#0a0e19] border-t border-slate-800">
            <div className="relative flex items-end gap-2 bg-slate-900/90 border border-slate-750 focus-within:border-brand-indigo rounded-2xl p-2 transition-all">
              <textarea
                ref={textareaRef}
                id="gemini-chat-input"
                rows={2}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about SEO rankings, AI Overviews, technical audits, or growth marketing..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 resize-none focus:outline-none px-2 py-1"
              />

              <button
                type="button"
                id="gemini-send-button"
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className={`p-3 rounded-xl transition-all flex items-center justify-center shrink-0 ${
                  input.trim() && !isLoading
                    ? 'bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-md shadow-brand-indigo/30 hover:opacity-95 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
              <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">Enter</kbd> to send, <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">Shift+Enter</kbd> for newline</span>
              <span className="flex items-center gap-1">
                Powered by Google Gemini &amp; AKGLS Consulting
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

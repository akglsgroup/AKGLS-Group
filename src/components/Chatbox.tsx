import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, MessageSquare, X, Send, Sparkles, Globe, Search, 
  ExternalLink, Maximize2, Minimize2, Trash2, Cpu, Zap, 
  ShieldCheck, LogIn, User, RefreshCw, AlertCircle
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { ChatMessageRecord, GroundingMetadata } from '../types';
import { 
  auth, 
  signInWithGoogle, 
  saveChatMessageToFirestore, 
  subscribeToChatHistory, 
  clearChatHistoryFromFirestore 
} from '../firebase';

type ModelVariant = 'gemini-3.5-flash' | 'gemini-3.1-pro-preview' | 'gemini-3.1-flash-lite';
type ConsultantRole = 'seo_architect' | 'content_strategist' | 'lead_consultant' | 'general';

const ROLE_OPTIONS = [
  { id: 'seo_architect' as ConsultantRole, label: 'SEO & GEO Architect' },
  { id: 'content_strategist' as ConsultantRole, label: 'Content Strategist' },
  { id: 'lead_consultant' as ConsultantRole, label: 'Enterprise Growth' },
];

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessageRecord[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchGrounding, setSearchGrounding] = useState<boolean>(true);
  const [model, setModel] = useState<ModelVariant>('gemini-3.5-flash');
  const [role, setRole] = useState<ConsultantRole>('seo_architect');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(auth.currentUser);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Monitor auth state changes
  useEffect(() => {
    const unsub = auth.onAuthStateChanged?.((user: any) => {
      setCurrentUser(user);
    });
    return () => unsub?.();
  }, []);

  // Subscribe to Firestore chat history when user is logged in, or load from localStorage
  useEffect(() => {
    if (currentUser?.uid) {
      const unsub = subscribeToChatHistory(currentUser.uid, (firestoreMsgs) => {
        if (firestoreMsgs && firestoreMsgs.length > 0) {
          setMessages(firestoreMsgs);
        } else {
          initWelcomeMessage();
        }
      });
      return () => unsub();
    } else {
      try {
        const saved = localStorage.getItem('akgls_gemini_chatbox_history');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setMessages(parsed);
            return;
          }
        }
      } catch (_) {}
      initWelcomeMessage();
    }
  }, [currentUser?.uid]);

  const initWelcomeMessage = () => {
    const welcome: ChatMessageRecord = {
      id: 'welcome_' + Date.now(),
      userId: currentUser?.uid || 'guest',
      role: 'model',
      content: `Hello! I am the **AKGLS Group AI Growth Advisor** powered by Google Gemini.\n\nI can analyze **SEO algorithms**, review **AI Overviews citations**, plan **Core Web Vitals architectures**, and verify live web data via **Google Search Grounding**.\n\nHow can I help scale your operations today?`,
      timestamp: new Date().toISOString(),
      modelUsed: 'gemini-3.5-flash',
      searchGrounded: false
    };
    setMessages([welcome]);
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const promptToSend = (customPrompt !== undefined ? customPrompt : userInput).trim();
    if (!promptToSend || isLoading) return;

    setErrorMsg(null);
    setUserInput('');

    const userMsg: ChatMessageRecord = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      userId: currentUser?.uid || 'guest',
      role: 'user',
      content: promptToSend,
      timestamp: new Date().toISOString()
    };

    const updatedList = [...messages, userMsg];
    setMessages(updatedList);

    // Save to Firestore if authenticated
    if (currentUser?.uid) {
      saveChatMessageToFirestore(currentUser.uid, userMsg);
    } else {
      try {
        localStorage.setItem('akgls_gemini_chatbox_history', JSON.stringify(updatedList));
      } catch (_) {}
    }

    setIsLoading(true);

    try {
      // searchGrounding requires 'gemini-3.5-flash'
      const chosenModel = searchGrounding ? 'gemini-3.5-flash' : model;

      const chatPayload = updatedList
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
        throw new Error(errorData.error || `Server returned error status ${res.status}`);
      }

      const data = await res.json();

      const aiMsg: ChatMessageRecord = {
        id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        userId: currentUser?.uid || 'guest',
        role: 'model',
        content: data.content || "I apologize, but I could not synthesize a reply. Please retry.",
        timestamp: new Date().toISOString(),
        modelUsed: data.modelUsed || chosenModel,
        searchGrounded: Boolean(data.searchGrounded),
        groundingMetadata: data.groundingMetadata
      };

      const finalMessages = [...updatedList, aiMsg];
      setMessages(finalMessages);

      if (currentUser?.uid) {
        saveChatMessageToFirestore(currentUser.uid, aiMsg);
      } else {
        try {
          localStorage.setItem('akgls_gemini_chatbox_history', JSON.stringify(finalMessages));
        } catch (_) {}
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMsg(err.message || "Failed to reach AI service.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = async () => {
    if (!window.confirm("Clear conversation history?")) return;
    if (currentUser?.uid) {
      await clearChatHistoryFromFirestore(currentUser.uid);
    } else {
      localStorage.removeItem('akgls_gemini_chatbox_history');
    }
    initWelcomeMessage();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating launcher trigger */}
      {!isOpen && (
        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open AI Growth Chatbot"
          className="relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal text-white rounded-2xl shadow-xl shadow-brand-indigo/30 hover:shadow-2xl transition-all cursor-pointer font-bold text-xs group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-emerald rounded-full border-2 border-[#0a0f1d] animate-pulse" />
          </div>
          <span className="font-display tracking-wide">AI Growth Advisor</span>
          <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[9px] uppercase font-black">
            Gemini
          </span>
        </motion.button>
      )}

      {/* Floating Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.2 }}
            className={`flex flex-col bg-[#0c121e] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-all ${
              isExpanded 
                ? 'w-[94vw] sm:w-[780px] h-[86vh] max-h-[800px]' 
                : 'w-[92vw] sm:w-[420px] h-[580px]'
            }`}
          >
            {/* Header */}
            <div className="px-4 py-3 bg-[#0e1628] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-indigo/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-white font-display">
                      AKGLS AI Advisor
                    </h4>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-brand-indigo/20 text-brand-indigo font-bold border border-brand-indigo/40">
                      Gemini 3
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                    <span>Live Multi-turn &amp; Search</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1">
                {/* Search Grounding toggle */}
                <button
                  type="button"
                  onClick={() => setSearchGrounding(!searchGrounding)}
                  title={searchGrounding ? "Google Search Grounding active" : "Enable Search Grounding"}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${
                    searchGrounding 
                      ? 'bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30' 
                      : 'text-slate-400 hover:text-white bg-slate-900'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                </button>

                {/* Expand / Minimize */}
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? "Collapse" : "Expand size"}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>

                {/* Clear */}
                <button
                  type="button"
                  onClick={handleClear}
                  title="Clear history"
                  className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-header strip: Model & Role selector */}
            <div className="px-3 py-1.5 bg-[#090d18] border-b border-slate-850 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1">
                <span className="text-slate-500 font-medium">Model:</span>
                <button
                  type="button"
                  onClick={() => setModel('gemini-3.5-flash')}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    (model === 'gemini-3.5-flash' || searchGrounding)
                      ? 'bg-brand-indigo text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Gemini 3.5 Flash: General tasks & Search Grounding"
                >
                  Flash
                </button>
                <button
                  type="button"
                  disabled={searchGrounding}
                  onClick={() => setModel('gemini-3.1-pro-preview')}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    model === 'gemini-3.1-pro-preview' && !searchGrounding
                      ? 'bg-brand-purple text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  } ${searchGrounding ? 'opacity-40 cursor-not-allowed' : ''}`}
                  title={searchGrounding ? "Turn off Search Grounding to switch to Pro" : "Gemini 3.1 Pro Preview: Complex Tasks"}
                >
                  Pro
                </button>
                <button
                  type="button"
                  disabled={searchGrounding}
                  onClick={() => setModel('gemini-3.1-flash-lite')}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    model === 'gemini-3.1-flash-lite' && !searchGrounding
                      ? 'bg-brand-teal text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  } ${searchGrounding ? 'opacity-40 cursor-not-allowed' : ''}`}
                  title={searchGrounding ? "Turn off Search Grounding to switch to Lite" : "Gemini 3.1 Flash Lite: Fast tasks"}
                >
                  Lite
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as ConsultantRole)}
                  className="bg-slate-900 border border-slate-750 text-slate-300 text-[10px] font-semibold rounded px-1.5 py-0.5 focus:outline-none"
                >
                  {ROLE_OPTIONS.map((r) => (
                    <option key={r.id} value={r.id}>{r.label}</option>
                  ))}
                </select>

                {currentUser ? (
                  <span className="text-[10px] text-brand-emerald font-bold flex items-center gap-0.5" title="Synced to Firestore">
                    <ShieldCheck className="w-3 h-3" />
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => signInWithGoogle()}
                    className="text-[10px] font-bold text-slate-400 hover:text-brand-indigo"
                    title="Sign in with Google to persist chat in Firestore"
                  >
                    Sync
                  </button>
                )}
              </div>
            </div>

            {/* Error Banner */}
            {errorMsg && (
              <div className="px-3 py-1.5 bg-rose-500/10 border-b border-rose-500/30 text-rose-300 text-[11px] flex items-center justify-between">
                <span className="truncate">{errorMsg}</span>
                <button onClick={() => setErrorMsg(null)} className="text-rose-400 hover:text-white">✕</button>
              </div>
            )}

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-slate-200">
              {messages.map((m) => {
                const isUser = m.role === 'user';
                return (
                  <div key={m.id} className={`flex gap-2.5 max-w-[90%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-bold ${
                      isUser ? 'bg-slate-800 text-slate-300' : 'bg-gradient-to-br from-brand-indigo to-brand-purple text-white shadow'
                    }`}>
                      {isUser ? (
                        currentUser?.photoURL ? (
                          <img src={currentUser.photoURL} alt="User" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-lg" />
                        ) : <User className="w-3.5 h-3.5" />
                      ) : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div className={`flex flex-col space-y-1 ${isUser ? 'items-end' : 'items-start'}`}>
                      <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        isUser 
                          ? 'bg-brand-indigo text-white rounded-tr-none' 
                          : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow-sm'
                      }`}>
                        <div className="whitespace-pre-wrap font-normal">
                          {m.content}
                        </div>

                        {/* Citations / Grounding sources */}
                        {!isUser && m.groundingMetadata?.groundingChunks && m.groundingMetadata.groundingChunks.length > 0 && (
                          <div className="mt-2.5 pt-2 border-t border-slate-800 text-[11px]">
                            <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">
                              Sources &amp; Citations:
                            </span>
                            <div className="flex flex-col gap-1">
                              {m.groundingMetadata.groundingChunks
                                .filter(c => c.web?.uri)
                                .slice(0, 3)
                                .map((chunk, cIdx) => (
                                  <a 
                                    key={cIdx}
                                    href={chunk.web?.uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between gap-1.5 p-1 rounded bg-slate-950/70 hover:bg-slate-800 text-[10px] text-brand-teal truncate"
                                  >
                                    <span className="truncate">{chunk.web?.title || chunk.web?.uri}</span>
                                    <ExternalLink className="w-2.5 h-2.5 shrink-0 text-slate-500" />
                                  </a>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-[9px] text-slate-500 px-1">
                        <span>{new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        {!isUser && m.modelUsed && <span>• {m.modelUsed}</span>}
                        {!isUser && m.searchGrounded && (
                          <span className="text-brand-emerald flex items-center gap-0.5">
                            • <Globe className="w-2.5 h-2.5" /> Grounded
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-2 max-w-[85%] mr-auto">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-purple text-white flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                  <div className="p-2.5 rounded-2xl rounded-tl-none bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                    <RefreshCw className="w-3 h-3 animate-spin text-brand-indigo" />
                    <span>{searchGrounding ? "Querying Google Search..." : "Analyzing with Gemini..."}</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            {messages.length <= 2 && (
              <div className="px-3 py-2 bg-[#090d18] border-t border-slate-850 flex flex-wrap gap-1">
                {[
                  "Rank in AI Overviews & Perplexity?",
                  "Generate Schema Organization JSON-LD",
                  "Audit my site Core Web Vitals"
                ].map((txt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(txt)}
                    className="text-[10px] font-medium bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white px-2 py-1 rounded-lg transition-colors text-left"
                  >
                    {txt}
                  </button>
                ))}
              </div>
            )}

            {/* Direct Connect Options (WhatsApp & Phone) */}
            <div className="px-3 py-1.5 bg-[#0a0e19] border-t border-slate-850 flex items-center justify-between text-[10px] text-slate-400">
              <span>Direct Strategic Hotline:</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://wa.me/918318114492?text=Hello%20AKGLS%20Group%20Consultant%2C%20I%20have%20an%20SEO%20growth%20query..."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
                >
                  <WhatsAppIcon className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
                <span>•</span>
                <a href="tel:+918318114492" className="hover:text-white font-bold">
                  ☎ +91 831 811 4492
                </a>
              </div>
            </div>

            {/* Input Bar */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="p-3 bg-[#0a0e19] border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about SEO, GEO citations, schema..."
                className="flex-1 bg-slate-900 border border-slate-750 focus:border-brand-indigo rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!userInput.trim() || isLoading}
                className={`p-2.5 rounded-xl transition-all ${
                  userInput.trim() && !isLoading
                    ? 'bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-md'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

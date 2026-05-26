import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

interface ChatMessage {
  text: string;
  sender: 'user' | 'agent';
  whatsappCta?: boolean;
}

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! We are the AKGLS Group certified digital master strategists. We specialize in driving organic SEO scales and high-conversion paid advertising channels. How can we help you scale your operations today?",
      sender: 'agent'
    }
  ]);
  const [userInput, setUserInput] = useState('');

  const optionReplies: Record<string, ChatMessage> = {
    "How do I boost search traffic?": {
      text: "To boost organic keywords and traffic, we conduct thorough technical audits, remove redirect & rendering index blockers, align structured metadata, and secure high DA earned editorial backlinks. For a bespoke report and pricing for your domain, let's talk directly via WhatsApp or phone call!",
      sender: 'agent',
      whatsappCta: true
    },
    "Can you lower my Google Ads waste?": {
      text: "Absolutely! We eliminate high-spend non-converting search terms, construct comprehensive negative keyword sets, segment ad variations, and configure Meta & Google Conversion APIs to lower customer acquisition margins by 25-45%. Let's review your exact ad setups on WhatsApp or phone immediately!",
      sender: 'agent',
      whatsappCta: true
    },
    "Tell me about AI SEO.": {
      text: "AI SEO and GEO (Generative Engine Optimization) involves formatting structured database schemas, JSON-LD graphs, and semantic citations so search engines like ChatGPT Search, Google Gemini, Anthropic Claude, and Perplexity recommend your brand options. Chat with us on WhatsApp or call to align your AI-search ready roadmap!",
      sender: 'agent',
      whatsappCta: true
    }
  };

  const handleOptionClick = (text: string) => {
    // Append user message
    setMessages(prev => [...prev, { text, sender: 'user' }]);

    // Append custom response
    setTimeout(() => {
      const reply = optionReplies[text] || {
        text: "Thank you for reaching out! A senior client growth advisor is ready to evaluate your site parameters. Ring us directly or connect on WhatsApp for an instant custom roadmap!",
        sender: 'agent',
        whatsappCta: true
      };
      setMessages(prev => [...prev, reply]);
    }, 600);
  };

  const getBotResponse = (query: string): ChatMessage => {
    const q = query.toLowerCase();

    // 1. WhatsApp / Contact / Call requests
    if (
      q.includes('whatsapp') || q.includes('contact') || q.includes('phone') || 
      q.includes('call') || q.includes('number') || q.includes('speak') || 
      q.includes('person') || q.includes('human') || q.includes('talk') ||
      q.includes('address') || q.includes('chat') || q.includes('expert')
    ) {
      return {
        text: "You can connect directly with our certified master strategists. Ring us immediately or message us on WhatsApp at +91 831 811 4492 for a free campaign audit or consultation!",
        sender: 'agent',
        whatsappCta: true
      };
    }

    // 2. SEO / keywords / traffic queries
    if (q.includes('seo') || q.includes('traffic') || q.includes('rank') || q.includes('organic') || q.includes('audit')) {
      return {
        text: "We conduct deep Technical and On-Page audits, clean crawler indexing friction, configure schema graphs, and coordinate white-hat editorial outreach backlinks to scale your traffic. Connect with our SEO consultants directly on WhatsApp to learn more and request a diagnostic report!",
        sender: 'agent',
        whatsappCta: true
      };
    }

    // 3. Paid Ads / PPC / budgets queries
    if (q.includes('ads') || q.includes('ppc') || q.includes('google ads') || q.includes('facebook') || q.includes('meta') || q.includes('budget') || q.includes('spend')) {
      return {
        text: "We manage Google Ads (Search, Display, Performance Max, local listing campaigns) and Facebook/Instagram social ads. We cut acquisition waste by 25-45% using high-intent positive/negative segments and Conversion API tracking. Message us on WhatsApp to discuss your ad parameters!",
        sender: 'agent',
        whatsappCta: true
      };
    }

    // 4. Web design / development / Shopify / WordPress
    if (q.includes('web') || q.includes('design') || q.includes('wordpress') || q.includes('shopify') || q.includes('developer') || q.includes('speed')) {
      return {
        text: "Our experts design loading-fast custom WordPress corporate setups, robust Shopify theme templates, and CRO landers aligned perfectly with Google's Core Web Vitals to convert traffic into buyers. Talk to a developer on WhatsApp or place a direct call to outline your layouts and get bespoke quotes!",
        sender: 'agent',
        whatsappCta: true
      };
    }

    // 5. Price / Pricing / Cost / Hire queries
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('fee') || q.includes('hire') || q.includes('salary') || q.includes('packages')) {
      return {
        text: "AKGLS Group provides highly tailored corporate pricing packages and onboarding. You can hire dedicated organic SEO experts, certified PPC analysts, copywriters, or developers on flat monthly models starting immediately. Connect via WhatsApp or call to review rates!",
        sender: 'agent',
        whatsappCta: true
      };
    }

    // 6. Generic queries - persuade to WhatsApp/phone
    return {
      text: "That is an excellent digital growth target! While our automated helper covers general frameworks, a senior client strategist needs to manually inspect your site parameters to provide the most accurate roadmap. We can draft this for you instantly over WhatsApp (+91 831 811 4492) or Call. Connect with us on WhatsApp below for a priority consultation!",
      sender: 'agent',
      whatsappCta: true
    };
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const query = userInput;
    setMessages(prev => [...prev, { text: query, sender: 'user' }]);
    setUserInput('');

    setTimeout(() => {
      const botResponse = getBotResponse(query);
      setMessages(prev => [...prev, botResponse]);
    }, 700);
  };

  return (
    <div id="floating-chat-bubble" className="fixed bottom-20 md:bottom-6 right-6 z-50 font-sans text-left">
      <AnimatePresence>
        {!isOpen ? (
          /* Collapsed circular bubble */
          <motion.button
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="bg-brand-navy rounded-full shadow-2xl p-3 flex items-center gap-3 border border-slate-800/85 hover:shadow-indigo-500/10 cursor-pointer transform hover:scale-105 transition-all text-white relative group"
          >
            <div className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white text-xl shadow-inner relative z-10">
              <MessageSquare className="w-5 h-5 text-brand-teal" />
            </div>
            
            <div className="pr-4 hidden sm:block text-left text-white">
              <p className="text-[11.5px] font-black">We're Online!</p>
              <p className="text-[9.5px] text-slate-400 font-medium">Talk to an AI Strategist</p>
            </div>
            
            <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-brand-orange border-2 border-brand-navy animate-pulse" />
          </motion.button>
        ) : (
          /* Expanded Chat Box dialog */
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            className="bg-white w-80 sm:w-96 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col justify-between"
          >
            {/* Header section with active stats */}
            <div className="bg-brand-navy p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-black text-xs text-brand-teal">
                  AK
                </div>
                <div className="text-left">
                  <h5 className="text-[12px] font-black tracking-wide font-display">AKGLS Growth Assistant</h5>
                  <p className="text-[9px] text-brand-teal font-extrabold flex items-center gap-1 mt-0.5 font-mono uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse inline-block" /> live support open
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 px-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main messages scrolling logs */}
            <div className="h-72 p-4 overflow-y-auto space-y-4 bg-slate-50/50 scrollbar-none flex flex-col">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col space-y-1.5 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`p-3 rounded-2xl max-w-[85%] text-[11.5px] leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-brand-indigo text-white rounded-tr-none text-left shadow-md' 
                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 text-left'
                    }`}
                  >
                    {msg.text}

                    {msg.sender === 'agent' && msg.whatsappCta && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-col gap-2">
                        <a 
                          href="https://wa.me/918318114492?text=Hi%20AKGLS%20Group%2C%20I%20have%20some%20queries%20about%20your%20digital%20marketing%20services..."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-[10px] font-bold rounded-lg shadow transition-all cursor-pointer text-center"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.453L0 24zm6.59-4.846c1.6.95 3.1 1.455 4.8 1.456 5.485 0 9.946-4.464 9.95-9.953.002-2.656-.103-5.15-2.92-6.97-1.866-1.868-4.347-2.897-6.98-2.898-5.494 0-9.957 4.463-9.962 10.15-.001 1.93.502 3.8 1.46 5.5l-.22.8-1.52 5.56 5.71-1.49-.69-.4zm10.1-5.698c-.278-.139-1.643-.812-1.897-.905-.254-.093-.44-.139-.626.139-.186.279-.722.905-.884 1.09-.163.186-.326.21-.604.07-.279-.14-1.176-.434-2.24-1.385-.828-.739-1.387-1.652-1.55-1.93-.163-.28-.017-.43.122-.569.125-.125.279-.325.418-.487.14-.163.186-.279.279-.465.093-.186.046-.35-.023-.488-.07-.139-.626-1.508-.857-2.066-.225-.54-.452-.466-.62-.474-.16-.007-.343-.008-.528-.008-.186 0-.488.07-.743.349-.256.279-.976.953-.976 2.324s1.001 2.695 1.14 2.881c.14.186 1.968 3.005 4.767 4.21.666.286 1.187.457 1.593.585.67.213 1.28.183 1.764.11.54-.082 1.643-.672 1.874-1.32.23-.65.23-1.206.162-1.32-.07-.11-.255-.18-.53-.32z" />
                          </svg>
                          <span>Chat on WhatsApp</span>
                        </a>
                        <a 
                          href="tel:+918318114492"
                          className="inline-flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold py-1.5 rounded-lg text-center transition-all cursor-pointer"
                        >
                          ☎ Call +91 831 811 4492
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pre-programmed Quick Click Choice suggestions */}
            <div className="p-2 border-t border-slate-100 flex flex-wrap gap-1 bg-white">
              <button 
                onClick={() => handleOptionClick("How do I boost search traffic?")}
                className="bg-slate-100 hover:bg-brand-indigo hover:text-white text-[10px] font-bold text-slate-600 py-1.5 px-2.5 rounded-full transition-all cursor-pointer"
              >
                Boost Search Traffic?
              </button>
              <button 
                onClick={() => handleOptionClick("Can you lower my Google Ads waste?")}
                className="bg-slate-100 hover:bg-brand-indigo hover:text-white text-[10px] font-bold text-slate-600 py-1.5 px-2.5 rounded-full transition-all cursor-pointer"
              >
                Lower PPC Costs?
              </button>
              <button 
                onClick={() => handleOptionClick("Tell me about AI SEO.")}
                className="bg-slate-100 hover:bg-brand-indigo hover:text-white text-[10px] font-bold text-slate-600 py-1.5 px-2.5 rounded-full transition-all cursor-pointer"
              >
                AI SEO & GEO Info?
              </button>
            </div>

            {/* TextInput form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex items-center gap-2 bg-white">
              <input 
                type="text" 
                placeholder="Type your strategic digital query..." 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full text-xs py-2.5 px-4 bg-slate-50 border border-slate-200 focus:border-brand-indigo rounded-xl focus:outline-none placeholder-slate-400 font-medium text-slate-800"
              />
              <button 
                type="submit" 
                className="bg-brand-indigo hover:bg-opacity-95 text-white py-2 px-3 rounded-xl text-xs flex items-center justify-center shrink-0 cursor-pointer"
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

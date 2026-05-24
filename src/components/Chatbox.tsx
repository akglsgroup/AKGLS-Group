import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Bot, Clock } from 'lucide-react';

interface ChatMessage {
  text: string;
  sender: 'user' | 'agent';
}

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! We specialize in driving organic search results and optimizing high-conversion paid campaign slots. How can our agency help your business scale today?",
      sender: 'agent'
    }
  ]);
  const [userInput, setUserInput] = useState('');

  const optionReplies: Record<string, string> = {
    "How do I boost search traffic?": "To boost organic search traffic, our team conducts a thorough technical audit to remove indexing friction, constructs semantic keyword clusters, and maps a strategic earned backlink path.",
    "Can you lower my Google Ads waste?": "Absolutely! We eliminate high-spend non-converting terms, construct negative keyword blacklists, segment ad variants, and set up Meta & Google Conversion APIs to lower acquisition costs by 25-45%.",
    "Tell me about AI SEO.": "AI SEO involves structuring your website's database schemas and relational data graphs so active bots like ChatGPT, Gemini, and Perplexity can easily discover, index, and recommend your brand."
  };

  const handleOptionClick = (text: string) => {
    // Append user message
    setMessages(prev => [...prev, { text, sender: 'user' }]);

    // Append custom response
    setTimeout(() => {
      const reply = optionReplies[text] || "Thank you for reaching out! A senior client growth partner has been notified to reply directly to you.";
      setMessages(prev => [...prev, { text: reply, sender: 'agent' }]);
    }, 600);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const query = userInput;
    setMessages(prev => [...prev, { text: query, sender: 'user' }]);
    setUserInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "That is an excellent point. Our optimization engines are structured exactly to address this. Please submit your parameters via our homepage diagnostic form so we can draft a customized organic strategy report for your brand.",
        sender: 'agent'
      }]);
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
            <div className="h-64 p-4 overflow-y-auto space-y-3 bg-slate-50/50 scrollbar-none flex flex-col">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-2xl max-w-[80%] text-[11.5px] leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-brand-indigo text-white rounded-tr-none ml-auto text-left shadow' 
                      : 'bg-white text-slate-700 rounded-tl-none mr-auto shadow-sm border border-slate-100 text-left'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Pre-programmed Quick Click Choice suggestions */}
            <div className="p-2 border-t border-slate-100 flex flex-wrap gap-1 bg-white">
              <button 
                onClick={() => handleOptionClick("How do I boost search traffic?")}
                className="bg-slate-100 hover:bg-brand-indigo hover:text-white text-[10px] font-bold text-slate-600 py-1.5 px-2.5 rounded-full transition-all"
              >
                Boost Search Trafic?
              </button>
              <button 
                onClick={() => handleOptionClick("Can you lower my Google Ads waste?")}
                className="bg-slate-100 hover:bg-brand-indigo hover:text-white text-[10px] font-bold text-slate-600 py-1.5 px-2.5 rounded-full transition-all"
              >
                Lower PPC Costs?
              </button>
              <button 
                onClick={() => handleOptionClick("Tell me about AI SEO.")}
                className="bg-slate-100 hover:bg-brand-indigo hover:text-white text-[10px] font-bold text-slate-600 py-1.5 px-2.5 rounded-full transition-all"
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
                className="w-full text-xs py-2.5 px-4 bg-slate-50 border border-slate-200 focus:border-brand-indigo rounded-xl focus:outline-none placeholder-slate-400 font-medium"
              />
              <button 
                type="submit" 
                className="bg-brand-indigo hover:bg-opacity-95 text-white py-2 px-3 rounded-xl text-xs flex items-center justify-center shrink-0"
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

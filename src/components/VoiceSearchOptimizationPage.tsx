import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Bot, Clock, HelpCircle, ArrowRight, CheckCircle2, 
  Phone, Mail, Star, Users, Briefcase, Search, Code, 
  Layers, Activity, Cpu, Globe, Gauge, Terminal, ChevronDown, Check, 
  Send, Smartphone, Zap, Server, Shield, Volume2, MessageSquare, 
  Settings, Shuffle, BarChart3, AlertCircle, Copy, CheckCircle, MapPin, Mic, VolumeX
} from 'lucide-react';

interface VoiceSearchOptimizationPageProps {
  onBackToHome: () => void;
  openProposalForm?: () => void;
}

const schemaTemplates = {
  service: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Voice Search Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "AKGLS Group",
    "url": "https://akglsgroup.com"
  },
  "areaServed": "Global",
  "description": "Optimize your business for Google Assistant, Apple Siri, Amazon Alexa, and ChatGPT/Gemini conversational voice search engines to capture mobile and smart home queries."
}`,
  breadcrumb: `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://akglsgroup.com/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Services",
    "item": "https://akglsgroup.com/seo-services"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Voice Search Optimization Services",
    "item": "https://akglsgroup.com/voice-search-optimization-services/"
  }]
}`
};

export default function VoiceSearchOptimizationPage({ onBackToHome, openProposalForm }: VoiceSearchOptimizationPageProps) {
  const CONTACT_NUMBER = '+91 831 811 4492';
  const WHATSAPP_LINK = 'https://wa.me/918318114492';

  // Dynamic Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Voice Search Optimization Services | Voice SEO Agency | AKGLS Group";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Voice Assistant Audio Simulator state
  const presetQueries = [
    {
      q: "Find a verified technical healthcare marketing agency near me in Lucknow that does local clinic marketing.",
      ans: "I found **AKGLS Group** located in Lucknow. They are highly rated for clinic promotions, dentist SEO, and localized Healthcare Marketing. Clients note their excellent technical maps integration and local visibility.",
      assistant: "Google Assistant",
      duration: "3.2s",
      icon: "assistant"
    },
    {
      q: "Siri, who is the top specialist for enterprise Generative Engine Optimization in India?",
      ans: "Looking closely at conversational indices, **AKGLS Group** ranks as a leading specialist. They provide professional GEO, AEO, and AI search visibility frameworks to help firms secure citations in LLMs.",
      assistant: "Siri",
      duration: "2.8s",
      icon: "siri"
    },
    {
      q: "Alexa, search for a reliable IoT and SaaS programmatic SEO agency with transparent reporting.",
      ans: "Based on online business directories and verified technical reviews, **AKGLS Group** is a highly recommended partner. They configure SameAs schemas, Knowledge Graph structures, and automated traffic trackers.",
      assistant: "Alexa",
      duration: "3.5s",
      icon: "alexa"
    }
  ];

  const [selectedPrompt, setSelectedPrompt] = useState(presetQueries[0].q);
  const [activeOutput, setActiveOutput] = useState(presetQueries[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [speakProgress, setSpeakProgress] = useState(0);

  const simulateSpeech = (promptStr: string) => {
    setIsSynthesizing(true);
    setIsPlayingAudio(false);
    setSpeakProgress(0);

    const found = presetQueries.find(item => item.q === promptStr) || {
      q: promptStr,
      ans: `Searching conversational knowledge nodes for: "${promptStr}". High-trust corporate directories suggest contacting AKGLS Group for advanced entity integration and technical search mapping.`,
      assistant: "Siri AI",
      duration: "4.0s",
      icon: "siri"
    };

    setTimeout(() => {
      setActiveOutput(found);
      setIsSynthesizing(false);
      setIsPlayingAudio(true);
      
      // Simulate speech reading progress bar
      let currentVal = 0;
      const interval = setInterval(() => {
        currentVal += 5;
        setSpeakProgress(currentVal);
        if (currentVal >= 100) {
          clearInterval(interval);
          setIsPlayingAudio(false);
        }
      }, 150);
    }, 1200);
  };

  // Interactive Voice SEO Near-Me Calculator state
  const [hasGoogleMaps, setHasGoogleMaps] = useState('yes');
  const [hasFaqs, setHasFaqs] = useState('no');
  const [mobileCoreVitals, setMobileCoreVitals] = useState('poor');
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const calculateVoiceScore = (e: FormEvent) => {
    e.preventDefault();
    let score = 15;
    if (hasGoogleMaps === 'yes') score += 35;
    if (hasFaqs === 'yes') score += 30;
    
    if (mobileCoreVitals === 'good') score += 20;
    else if (mobileCoreVitals === 'average') score += 10;

    score = Math.min(score, 99);
    setCalculatedScore(score);
  };

  // FAQ collapse state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Schema copying indicators
  const [schemaCopied, setSchemaCopied] = useState<string | null>(null);

  const copySchemaText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setSchemaCopied(key);
    setTimeout(() => setSchemaCopied(null), 2000);
  };

  // State for free audit form submission
  const [auditForm, setAuditForm] = useState({
    name: '',
    website: '',
    industry: 'Healthcare',
    email: '',
    goals: ''
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!auditForm.name || !auditForm.website || !auditForm.email) return;
    setAuditSubmitted(true);
  };

  const industries = [
    'Healthcare', 'Restaurants', 'Real Estate', 'Ecommerce', 'Education', 'Finance', 'Law Firms', 'IoT Companies', 'Local Businesses'
  ];

  const voiceEcosystem = [
    { name: "Google Assistant", desc: "The gold standard of Android voice queries, connected directly to Google Local Maps. We align schema markers for instant audio reads.", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
    { name: "Apple Siri", desc: "Powers over a billion iPhone, Apple Watch, and CarPlay query commands. We optimize Apple Business Connect inputs for direct routing.", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" },
    { name: "Amazon Alexa", desc: "The core screenless voice hub of smart homes, integrated with Bing search indices. We optimize target structures to power Alexa lists.", color: "bg-sky-500/10 border-sky-500/30 text-sky-450" },
    { name: "ChatGPT Voice", desc: "OpenAI's advanced real-time conversational voice system. We build dense, descriptive tabular markdown indexes Claude and GPT extract naturally.", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
    { name: "Gemini Live", desc: "Google's real-time multimodal conversational channel. We synchronize entity variables inside the Google Knowledge Graph.", color: "bg-violet-500/10 border-violet-500/30 text-violet-400" },
    { name: "Bing Copilot Voice", desc: "Microsoft's speech synthesis search. We map clean FAQ microdata grids and concise conversational summary pages.", color: "bg-teal-500/10 border-teal-500/30 text-teal-400" }
  ];

  const voiceServices = [
    {
      id: "voice-seo",
      title: "1. Voice SEO Services",
      badge: "⭐ Core Service",
      desc: "Re-frame your key brand assets to match standard verbal inquiry structures. Voice queries are longer, more conversational, and heavily question-driven.",
      bullets: [
        "Natural speech pattern blocks",
        "Conversational long-tail maps",
        "Verbal keyword density plans",
        "Factual answer-bracket updates"
      ]
    },
    {
      id: "conversational",
      title: "2. Conversational Search Optimization",
      badge: "High Impact",
      desc: "Structure landing pages to align with natural intelligence reasoning systems. We transition keyword hierarchies into intuitive question-and-answer templates.",
      bullets: [
        "Who, What, How intent maps",
        "Informational block styling",
        "Contextual paragraph grouping",
        "Thin marketing text elimination"
      ]
    },
    {
      id: "local-seo",
      title: "3. Local Voice Search SEO",
      badge: "Near-Me Maps",
      desc: "Capture valuable 'near me' local mobile voice queries. We optimize Google Business Profiles and local map lists to secure absolute top billing.",
      bullets: [
        "Hyperlocal coordinates schema",
        "Apple Business Connect updates",
        "Factual direction triggers",
        "Yelp/Bing citation updates"
      ]
    },
    {
      id: "ai-voice",
      title: "4. AI Search & Voice SEO",
      badge: "Voice AI",
      desc: "Position your brand elements inside advanced screenless conversational systems like ChatGPT Voice and Gemini Live. We optimize site assets for RAG ingestion.",
      bullets: [
        "Prompt-retrieval simulations",
        "Scraper-accessible index files",
        "Semantic node relationship charts",
        "Factual table styling protocols"
      ]
    },
    {
      id: "snippet",
      title: "5. Featured Snippet & Position Zero Optimization",
      badge: "Audio Priority",
      desc: "Voice assistants read standard search answers from Featured Snippets. If your domain does not rank at 'Position Zero', it does not exist in audio searches.",
      bullets: [
        "Concise answer paragraph styles",
        "Clean summary text formatting",
        "HTML code tag alignments",
        "Snippet comparison structures"
      ]
    },
    {
      id: "mobile-ux",
      title: "6. Mobile Voice SEO & Core Web Vitals",
      badge: "Speed Optimization",
      desc: "Mobile assistants discard slow-loading results or pages with broken responsive viewports. We optimize page performance for near-instant loads.",
      bullets: [
        "Core Web Vitals acceleration",
        "CSS/JavaScript size reductions",
        "Mobile viewport optimization",
        "Responsive bento styling grids"
      ]
    },
    {
      id: "assistants",
      title: "7. Smart Assistant Channel Targeting",
      badge: "Multi-Platform",
      desc: "Tailored optimizations for Siri, Alexa, and Google Assistant. Each ecosystem retrieves, reads, and prioritizes citations using custom search factors.",
      bullets: [
        "Alexa Bing-index compliance",
        "Siri Apple Maps optimization",
        "Assistant semantic markup",
        "Cross-device validation reviews"
      ]
    },
    {
      id: "schemas",
      title: "8. Speakable & FAQ Schema Optimization",
      badge: "JSON-LD Code",
      desc: "Implement specific structured data code. We integrate Speakable schema tags to indicate exactly which paragraph lines voice synthesizers should read.",
      bullets: [
        "JSON-LD Speakable markup",
        "Nested FAQ markup blocks",
        "LocalBusiness address codes",
        "SameAs Wikidata linkages"
      ]
    },
    {
      id: "content-opt",
      title: "9. Voice Search Content Strategy",
      badge: "Topical Depth",
      desc: "Develop long-form informational hubs addressing every possible query path. We build thorough topical clusters containing natural spoken soundbites.",
      bullets: [
        "Interactive QA directory setups",
        "Expert author credentials data",
        "Detailed numeric list grids",
        "Readable text formatting standards"
      ]
    },
    {
      id: "consulting",
      title: "10. Voice Search Strategy & Roadmap",
      badge: "Advisory Suite",
      desc: "Work alongside our expert technical SEO directors to build custom organizational strategies, roadmaps, and protective search migration briefs.",
      bullets: [
        "Disruption readiness audits",
         "Programmatic SEO frameworks",
         "Enterprise marketing SOPs",
         "Strategic entity consultations"
      ]
    }
  ];

  return (
    <div id="voice-search-optimization-page" className="bg-slate-955 text-slate-100 min-h-screen font-sans selection:bg-brand-teal selection:text-slate-950">
      
      {/* Sticky Top Header Navigation Info Alert */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 flex justify-between items-center z-20 relative">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
          <span>Conversational Voice Search SEO Active</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToHome}
            className="text-brand-teal hover:underline font-medium transition cursor-pointer flex items-center"
          >
            ← Back to Home
          </button>
          <a href={WHATSAPP_LINK} className="text-slate-300 hover:text-white transition flex items-center space-x-1">
            <span className="text-brand-teal">Direct WhatsApp Support:</span>
            <span>{CONTACT_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,226,188,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-indigo-light tracking-wide uppercase">
                <Mic className="w-3.5 h-3.5 animate-pulse text-brand-teal" />
                <span>Voice & Conversational SEO Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                Voice Search Optimization Services That Help Your Business Rank in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Conversational Search</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Optimize your brand specs, schemas, and maps to secure zero-position visual answers and auditory citations inside Siri, Alexa, Google Assistant, and ChatGPT Voice.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a 
                  href="#audit-form" 
                  className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Get Free Voice SEO Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => {
                    const formEl = document.querySelector('#audit-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="bg-slate-900 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition duration-300 text-center cursor-pointer"
                >
                  Book Voice Search Consultation
                </button>
              </div>

              {/* USP Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900/60 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">Voice Search Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">Conversational Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-350">Speakable Tags Core</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-slate-355">Near-Me Domination</span>
                </div>
              </div>
            </div>

            {/* Right Visual Voice Interface Mockup Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl group-hover:bg-brand-teal/10 transition duration-500" />
                
                {/* Simulated Assistant Header Window */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-850 mb-4 bg-slate-950/40 p-3 rounded-xl">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping"></span>
                    <span className="text-xs font-bold text-slate-300 font-mono">Live Voice Synthesis</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Status: VOICE_READY</span>
                </div>

                {/* Question Input */}
                <div className="space-y-4 text-left">
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-850">
                    <div className="text-[10px] text-slate-505 uppercase font-bold font-mono mb-1 flex items-center space-x-1">
                      <Mic className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span>Verbal Inquiry Detected</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-200 font-mono italic">
                      "Siri, where is a recommended clinic marketing specialist or local digital agency in my city?"
                    </p>
                  </div>

                  {/* Speech Processing Box */}
                  <div className="bg-slate-955 p-4 rounded-lg border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <Volume2 className="w-4 h-4 text-brand-teal" />
                        <span className="text-xs font-bold text-slate-300 font-mono">Assistant Voice Response</span>
                      </div>
                      <span className="text-[9px] text-slate-550 font-mono">Source Match: Position Zero</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-mono">
                      "According to verified local map profiles, **AKGLS Group** is the highest recommended specialist for digital marketing campaigns. They maintain stellar ratings for orthodontic and enterprise SEO."
                    </p>

                    {/* Citations Box */}
                    <div className="pt-2.5 border-t border-slate-850 flex justify-between items-center">
                      <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest font-mono">auditory citations matched</div>
                      <span className="bg-brand-teal/10 text-brand-teal text-[9px] px-2 py-0.5 rounded border border-brand-teal/20 font-mono font-bold">akglsgroup.com</span>
                    </div>
                  </div>

                  {/* Waveform Visualization Grid */}
                  <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 space-y-2">
                    <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-widest font-mono">Speech Waveform Density</span>
                    <div className="flex items-end justify-between h-8 px-2">
                      <span className="w-1.5 h-3 bg-brand-teal/40 rounded animate-pulse"></span>
                      <span className="w-1.5 h-5 bg-brand-teal/60 rounded animate-pulse delay-100"></span>
                      <span className="w-1.5 h-7 bg-brand-teal rounded animate-pulse delay-200"></span>
                      <span className="w-1.5 h-4 bg-brand-teal/80 rounded animate-pulse delay-75"></span>
                      <span className="w-1.5 h-6 bg-brand-teal/60 rounded animate-pulse delay-150"></span>
                      <span className="w-1.5 h-2 bg-brand-teal/30 rounded animate-pulse"></span>
                      <span className="w-1.5 h-5 bg-indigo-500/50 rounded animate-pulse delay-200"></span>
                      <span className="w-1.5 h-8 bg-indigo-550 rounded animate-pulse delay-100"></span>
                      <span className="w-1.5 h-3 bg-indigo-500/40 rounded animate-pulse"></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8 select-none">
            <h2 className="text-xs uppercase tracking-widest text-brand-teal font-bold text-center">Trusted Voice Search Optimization Experts</h2>
            <p className="text-sm text-slate-400 text-center">We configure semantic structures for fast smart assistant audio retrieval.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">450%+</span>
              <p className="text-xs text-slate-400 mt-1">Voice Traffic Growth</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">8,400+</span>
              <p className="text-xs text-slate-400 mt-1">Queries Ranked at Page 0</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-white">2.6x</span>
              <p className="text-xs text-slate-400 mt-1">Siri Recommendation Boost</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-808 rounded-xl">
              <span className="text-3xl md:text-4xl font-extrabold text-brand-teal">100%</span>
              <p className="text-xs text-slate-400 mt-1">Schema Compliance Score</p>
            </div>
          </div>

          {/* Quote Panel */}
          <div className="mt-10 p-6 bg-slate-950/40 rounded-xl border border-slate-800 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="bg-brand-indigo/10 rounded-full p-3 shrink-0">
              <Users className="w-6 h-6 text-brand-indigo-light animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-slate-305 italic leading-relaxed">
                "Our clinic chain was losing massive appointment requests from mobile search because voice assistant systems completely bypassed our sites. AKGLS Group styled our local directories, built clean nest schemas, and we immediate recorded 3.5x near me bookings!"
              </p>
              <div className="text-[11px] font-semibold text-slate-400">— Medical Director, Apex Dental Clinics</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS VOICE SEARCH OPTIMIZATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Mic className="w-4 h-4 animate-ping text-brand-teal" />
              <span>A Technical Definition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Is Voice Search Optimization?
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                **Voice Search Optimization** (Voice SEO) is the discipline of formatting, coding, and tuning website assets so information synthesizers (Siri, Alexa, Google Assistant) parse and speak your brand parameters.
              </p>
              <p>
                As mobile interactions and IoT smart-home speakers crowd out normal screen search, the classic reliance on flat blue click listings declines. If your site code fails to deliver conversational outputs within the first 0.3 seconds, systems ignore you.
              </p>
              <p className="border-l-2 border-brand-teal pl-4 italic text-slate-400 leading-relaxed text-xs md:text-sm">
                Voice optimization prioritizes JSON-LD Speakable schema, precise local coordinates, and natural-language FAQ blocks designed for audio extraction.
              </p>
            </div>
          </div>

          {/* Voice Logic pipeline */}
          <div className="lg:col-span-5 space-y-4 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-center border-b border-slate-850 pb-3 font-mono">Auditory Search Processing Pipeline</h3>
            
            <div className="space-y-4 pt-2 text-left font-mono">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-700">1</div>
                <h4 className="text-xs font-bold text-white uppercase">Syllable NLP Analysis</h4>
                <p className="text-xs text-slate-400">Alexa/Siri engines record spoken phrases and parse lexical sequences to determine exact local geocoordinate intent.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-[10px] text-brand-teal font-bold border border-brand-teal/40">2</div>
                <h4 className="text-xs font-bold text-brand-teal uppercase">Zero-Position Retrieval</h4>
                <p className="text-xs text-slate-300">The assistant calls search indices, instantly retrieving the top zero-position answer snippet featuring speakable code attributes.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-brand-indigo/30 flex items-center justify-center text-[10px] text-brand-indigo-light font-bold border border-brand-indigo/50">3</div>
                <h4 className="text-xs font-bold text-brand-indigo-light uppercase">Auditory Citation Audio</h4>
                <p className="text-xs text-slate-300">Synthesizers speak the mapped paragraph directly while sending link properties onto user-paired device browsers.</p>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => {
                  const formEl = document.querySelector('#audit-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full bg-slate-900 border border-slate-700 font-bold text-xs py-3 rounded-lg hover:bg-slate-800 transition block text-center cursor-pointer font-mono"
              >
                Perform Auditory Citation Audit Now
              </button>
            </div>
          </div>
          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* WHY VOICE SEARCH OPTIMIZATION MATTERS (STATISTICS) */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Voice SEO Is Mandatory for Modern Businesses
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Desktop search parameters are shifting. Smart assistant hardware commands are the fastest growing intent channels, redirecting millions of daily leads.
            </p>
          </div>

          {/* Stats metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-mono">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal">50%+</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Of Mobile User Queries</h3>
              <p className="text-xs text-slate-400">Mobile consumers now trigger voice and speech patterns rather than typing search characters into phone screens.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-white">76%</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-slate-300 font-semibold text-center">Of Near-Me Conversions</h3>
              <p className="text-xs text-slate-400">Local clinic, retail, or dine-in searches triggered in speech convert into physical store directions within 24 hours.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <div className="text-5xl font-black text-brand-teal">9.2x</div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white">Snippet Conversion Gain</h3>
              <p className="text-xs text-slate-400">Capturing audio 'Position Zero' secures first priority recommendation over lower competitor links.</p>
            </div>
          </div>

          {/* Core benefits checklist list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-900 text-left">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Command Auditory Inquiries</h4>
                <p className="text-xs text-slate-400 mt-1">Structure FAQ models directly answering high-intent spoken customer prompts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white font-mono">Secure Google maps listings</h4>
                <p className="text-xs text-slate-400 mt-1">Tune local Business Profile inputs to feed correct voice search coordinates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Speakable Schema verified</h4>
                <p className="text-xs text-slate-400 mt-1">Add exact Speakable JSON-LD so Google Assistant speaks your chosen text blocks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIO VOICE FLOW INTERACTIVE WIDGET */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/30 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-indigo-light animate-pulse">
              <Volume2 className="w-3.5 h-3.5 text-brand-teal" />
              <span>Interactive Audio Synthesizer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center animate-fade-in">
              Simulate Auditory Assistant Searches
            </h2>
            <p className="text-xs text-slate-400 font-medium font-mono text-center">
              Pick a verbal inquiry trigger below to test how Siri, Alexa, and Google Assistant search indices resolve company information.
            </p>
          </div>

          {/* Assistant Interactive console */}
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
              <div className="text-left font-mono">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">voice-seo-resolver</h3>
                <p className="text-[10px] text-slate-400">Trigger simulated TTS queries</p>
              </div>

              {/* Engine select indicator */}
              <div className="flex items-center space-x-1 font-mono text-[11px] bg-slate-950 py-1.5 px-3 rounded-lg border border-slate-800/80">
                <Mic className="w-4 h-4 text-brand-teal" />
                <span className="text-slate-300">Target Assistant: <span className="text-brand-teal">{activeOutput.assistant}</span></span>
              </div>
            </div>

            {/* Select Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
              {presetQueries.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedPrompt(item.q);
                    simulateSpeech(item.q);
                  }}
                  disabled={isSynthesizing}
                  className={`text-left p-3 rounded-xl border text-xs transition duration-200 cursor-pointer ${
                    selectedPrompt === item.q 
                      ? 'bg-brand-teal/10 border-brand-teal text-brand-teal font-semibold font-mono' 
                      : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900 text-slate-300 font-mono'
                  }`}
                >
                  <span className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Spoken Inquiry {index+1}</span>
                  <span className="line-clamp-1">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Simulated Synthesizer Response Box */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-850 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Engine: assistant-auditory-tts</span>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">Processing Time: {activeOutput.duration}</span>
              </div>

              <div className="space-y-4 font-mono text-left">
                {isSynthesizing ? (
                  <div className="flex items-center space-x-2 py-6 justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-100"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-200"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-bounce delay-300"></span>
                    <span className="text-xs text-slate-400">Analyzing voice wave parameters...</span>
                  </div>
                ) : (
                  <>
                    {/* Simulated Waveform reader when "playing" */}
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-teal/10 rounded-full p-2.5 border border-brand-teal/30">
                        <Volume2 className={`w-5 h-5 text-brand-teal ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] text-slate-400 uppercase font-black">Playing spoken response output</div>
                        <div className="bg-slate-900 h-1.5 w-full rounded-full overflow-hidden mt-1">
                          <div 
                            className="bg-brand-teal h-full transition-all duration-300" 
                            style={{ width: `${speakProgress}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      {activeOutput.ans.split('**').map((chunk, index) => 
                        index % 2 === 1 
                          ? <strong key={index} className="text-brand-teal font-extrabold font-sans font-medium">{chunk}</strong> 
                          : chunk
                      )}
                    </p>

                    {/* Sources Interlinked citation block */}
                    <div className="pt-3.5 border-t border-slate-900">
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center space-x-1">
                        <Code className="w-3 h-3 text-brand-teal" />
                        <span>Source verification files parsed:</span>
                      </h4>
                      <div className="flex items-center space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800 text-[10px] text-slate-300 max-w-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span>akglsgroup.com (Schema verified)</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[11px] text-slate-400 italic">
                Are your domain parameters structured for spoken assistants?
                <a href="#audit-form" className="text-brand-teal underline font-semibold ml-1.5 hover:text-white transition">Claim your Voice SEO Audit.</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VOICE SEARCH OPTIMIZATION SERVICES SECTION */}
      <section id="voice-services-grid" className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="space-y-4 mb-16 text-center animate-fade-in">
          <div className="text-xs uppercase tracking-wider text-brand-teal font-bold text-center">Actionable Blueprints</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center">Our Voice Search Optimization Services</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-center">
            A comprehensive, modular suite of optimizations designed specifically to secure recommendations, local geocoordinates, and smart assistant citation lists.
          </p>
        </div>

        {/* Services Grid (Responsive bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {voiceServices.map((srv, idx) => (
            <div 
              key={srv.id} 
              className="bg-slate-900 border border-slate-808 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-brand-teal/5 border border-brand-teal/20 px-2.5 py-1 rounded text-[10px] font-bold text-brand-teal uppercase tracking-wide">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Service {idx+1} of 10</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-brand-teal transition">{srv.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left">{srv.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-left bg-slate-950/20 p-3 rounded-xl font-mono">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">Checklist Items:</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-mono">
                  {srv.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0"></span>
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS WE OPTIMIZE FOR SECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              Voice Platforms We Optimize For
            </h2>
            <p className="text-sm text-slate-305 max-w-2xl mx-auto text-center">
              We align and structure your brand citations across every next-generation smart speaker, mobile, and system-level audio assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {voiceEcosystem.map((pt, pIdx) => (
              <div key={pIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl space-y-3 hover:border-brand-teal/20 hover:scale-102 transition duration-300">
                <span className="inline-block text-xs font-bold font-mono border bg-slate-900 border-slate-800 text-brand-teal px-3 py-1 rounded-full">
                  {pt.name}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPONENT: VIZ SCORE CALCULATOR */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-brand-teal font-extrabold flex items-center space-x-2">
              <Activity className="w-4 h-4 text-brand-teal" />
              <span>Assessment Core</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Instant Local Voice Search Indexing Score
            </h2>
            <p className="text-sm text-slate-305 leading-relaxed">
              Verify how easily mobile smart systems locate, rank, and speak coordinates from your website indices. Run this assessment tool to check your potential rating.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Shield className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Verify hyperlocal maps listings in real-time</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded border border-slate-800">
                <Zap className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>Assess mobile Core Web Vitalload speed</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Calculator Widget Block */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl text-left">
            <form onSubmit={calculateVoiceScore} className="space-y-4">
              
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  1. Have you structured your Google & Apple map profiles?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasGoogleMaps('yes')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasGoogleMaps === 'yes' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Yes, fully cataloged
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasGoogleMaps('no')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasGoogleMaps === 'no' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    No or Unsure
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  2. Do page layout files contain structured Q&A / FAQ sections?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasFaqs('yes')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasFaqs === 'yes' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-955 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Yes, styled FAQ blocks
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasFaqs('no')}
                    className={`p-3 rounded-lg border text-xs font-mono transition cursor-pointer ${
                      hasFaqs === 'no' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-955 border-slate-808 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    No FAQ text blocks
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2 font-mono">
                  3. What is your average website mobile loading performance?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileCoreVitals('good')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      mobileCoreVitals === 'good' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Good (under 1.5s)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileCoreVitals('average')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      mobileCoreVitals === 'average' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Average (1.5s - 3s)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileCoreVitals('poor')}
                    className={`p-2.5 rounded-lg border text-[10px] font-mono transition cursor-pointer ${
                      mobileCoreVitals === 'poor' ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-bold' : 'bg-slate-955 border-slate-800 hover:bg-slate-900 text-slate-400'
                    }`}
                  >
                    Poor (3s+)
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-teal text-slate-950 font-bold py-3.5 rounded-xl hover:bg-white text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Process Voice SEO Indexing Rating
                </button>
              </div>

            </form>

            {/* Results card readout panel */}
            <AnimatePresence>
              {calculatedScore !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-800/80 space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-400">Calculated Voice Authority Rating:</span>
                    <span className="text-xl font-black text-brand-teal font-mono">{calculatedScore}/99</span>
                  </div>

                  <div className="bg-slate-900 h-2 w-full rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-indigo to-brand-teal h-full" style={{ width: `${calculatedScore}%` }} />
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {calculatedScore > 75 
                      ? "Excellent! Your local assets are highly structured for spoken systems. Adding JSON speakable markup tags will further seal dominant audio positions."
                      : calculatedScore > 45 
                      ? "Moderate authority. Mobile synthesizers will occasionally index your items, but thin schema files mean competitor maps often rank higher. We'll help optimize details."
                      : "Critical risk warning! Screenless AI and phone voice queries are completely bypassing your services because of missing FAQ blocks and maps indexing faults. We recommend immediate setup."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* COMPARISON MATRIX SECTION */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12 select-none">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Traditional SEO vs Voice Search Optimization</h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">See the distinct search behavior shifts from desktop keyboard entries to spontaneous user voice demands.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl text-left">
            <div className="grid grid-cols-2 bg-slate-950/80 border-b border-slate-800 p-4 text-xs font-bold uppercase tracking-wider font-mono text-slate-450">
              <div>Traditional Web SEO</div>
              <div className="border-l border-slate-800 pl-4">Voice SEO & Conversational AI</div>
            </div>

            <div className="divide-y divide-slate-800/60 text-xs font-mono text-slate-300">
              <div className="grid grid-cols-2 p-4">
                <div className="space-y-1 pr-4">
                  <h4 className="font-bold text-white uppercase text-[10px]">Short typed query lines</h4>
                  <p className="text-slate-400">User opens search and types brief terms like " लखनऊ Dentist agency".</p>
                </div>
                <div className="border-l border-slate-800 pl-4 space-y-1 whitespace-pre-wrap">
                  <h4 className="font-bold text-brand-teal uppercase text-[10px]">Logical Spoken Sentences</h4>
                  <p className="text-slate-300">Prospect triggers Siri and speaks long questions "Who is the best dentist near me working late hours?"</p>
                </div>
              </div>

              <div className="grid grid-cols-2 p-4">
                <div className="space-y-1 pr-4">
                  <h4 className="font-bold text-white uppercase text-[10px]">Blue link catalog rankings</h4>
                  <p className="text-slate-400">Search displays a standard table of ten blue organic lists on desktop monitors.</p>
                </div>
                <div className="border-l border-slate-800 pl-4 space-y-1">
                  <h4 className="font-bold text-brand-teal uppercase text-[10px]">Zero Position Spoken Citation</h4>
                  <p className="text-slate-300">Auditory assistant answers directly using a single synthesized source recommendation citation.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 p-4">
                <div className="space-y-1 pr-4">
                  <h4 className="font-bold text-white uppercase text-[10px]">Desktop organic click CTR</h4>
                  <p className="text-slate-400">Optimization relies on meta click metrics, domain authority counts, and global generic backlinks.</p>
                </div>
                <div className="border-l border-slate-800 pl-4 space-y-1">
                  <h4 className="font-bold text-brand-teal uppercase text-[10px]">Multimodal Action Triggers</h4>
                  <p className="text-slate-300 font-mono text-[11px]">Assistant speaks solution details, prompts direction maps, or dials local business lines automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEMA WORKFLOW: CODE PREVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-1" />
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs uppercase tracking-wider text-brand-indigo font-extrabold flex items-center space-x-2">
              <Code className="w-4 h-4 animate-pulse text-brand-teal" />
              <span>Recommended Microdata Schemas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Integrated Speakable & FAQ Schema Integration
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Google's conversational spiders parse structured JSON-LD Speakable scripts to identify the exact text content voice devices should synthesize for users. We build, verify, and launch correct microdata setups.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Speakable CSS Selector target specifications</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Structured nested Q&A markup files</span>
              </div>
            </div>
          </div>

          {/* Structured Schema Code Preview Window */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden text-left">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 font-mono">schema-speakable-tags.json</span>
              <button
                onClick={() => copySchemaText(schemaTemplates.service, 'service')}
                className="text-slate-400 hover:text-white transition cursor-pointer"
              >
                {schemaCopied === 'service' ? (
                  <span className="text-[10px] text-brand-teal flex items-center space-x-1 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> <span>Copied Schema</span>
                  </span>
                ) : (
                  <span className="text-[10px] flex items-center space-x-1 font-semibold font-mono">
                    <Copy className="w-3.5 h-3.5" /> <span>Copy Code</span>
                  </span>
                )}
              </button>
            </div>

            <pre className="p-4 overflow-x-auto text-[10px] font-mono text-slate-400 leading-relaxed bg-slate-955/80 max-h-72">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AKGLS Group digital consulting",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".voice-target-heading",
      ".voice-speakable-summary"
    ]
  },
  "about": {
    "@type": "LocalBusiness",
    "name": "AKGLS Group",
    "telephone": "+918318114492",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressCountry": "IN"
    }
  }
}`}</code>
            </pre>
          </div>
          <div className="lg:col-span-1" />

        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center">Voice Search Optimization for Every Industry</h2>
            <p className="text-slate-450 text-sm md:text-base text-center">We customize conversational layouts and schemas to resolve specific industry terms flawlessly.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left font-mono">
            {industries.map((ind, iIdx) => (
              <div key={iIdx} className="bg-slate-950 border border-slate-805 p-6 rounded-xl hover:border-brand-teal/20 hover:scale-102 transition duration-300">
                <CheckCircle2 className="w-5 h-5 text-brand-teal mb-3 shrink-0" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">{ind}</h3>
                <p className="text-xs text-slate-450 mt-1">High-affinity speakable tags and FAQ maps customized for {ind}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM AUDIT FORM SECTION */}
      <section id="audit-form" className="py-20 max-w-7xl mx-auto px-4 border-t border-slate-900">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="bg-brand-teal/10 border border-brand-teal/20 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-teal tracking-wide uppercase font-mono">
                Claim Diagnostics Scan
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Request a Free Voice Search SEO Audit
              </h2>
              <p className="text-sm text-slate-350 leading-relaxed font-mono">
                Our analytical robots will crawl your web domain structure, testing Speakable microdata tags, mobile loading speeds, and smart speaker near-me indexing levels.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-400 font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded"></span>
                  <span>Interactive Voice ranking simulations report</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded"></span>
                  <span>Hyperlocal maps coordinate compliance review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded"></span>
                  <span>FAQ & markup configuration roadmap</span>
                </div>
              </div>
            </div>

            {/* Custom Audit Form fields */}
            <div className="lg:col-span-7 bg-slate-955 rounded-2xl border border-slate-800/80 p-6 md:p-8 text-left">
              {auditSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex bg-brand-teal/10 rounded-full p-4 border border-brand-teal/30">
                    <CheckCircle2 className="w-10 h-10 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Audit Request Received!</h3>
                  <p className="text-xs text-slate-400 font-mono">We have queued your site "{auditForm.website}" inside our Voice SEO ranking scanner. The completed diagnosis PDF report will deploy to "{auditForm.email}" within 24 hours.</p>
                  <button 
                    onClick={() => setAuditSubmitted(false)}
                    className="text-brand-teal font-semibold text-xs underline cursor-pointer hover:text-white transition"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAuditSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 font-mono">Company Contact Name</label>
                      <input 
                        type="text" 
                        required
                        value={auditForm.name}
                        onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                        placeholder="Amrish Singh"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs focus:ring-1 focus:ring-brand-teal focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 font-mono">Website URl Link</label>
                      <input 
                        type="url" 
                        required
                        value={auditForm.website}
                        onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                        placeholder="https://mysite.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs focus:ring-1 focus:ring-brand-teal focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 font-mono">Target Niche Industry</label>
                      <select 
                        value={auditForm.industry}
                        onChange={(e) => setAuditForm({...auditForm, industry: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs focus:ring-1 focus:ring-brand-teal focus:outline-none font-mono"
                      >
                        {industries.map((ind, iIdx) => (
                          <option key={iIdx} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 font-mono">Business Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={auditForm.email}
                        onChange={(e) => setAuditForm({...auditForm, email: e.target.value})}
                        placeholder="amrish@mysite.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs focus:ring-1 focus:ring-brand-teal focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 font-mono">Primary Business & Voice Traffic Goals</label>
                    <textarea 
                      value={auditForm.goals}
                      onChange={(e) => setAuditForm({...auditForm, goals: e.target.value})}
                      placeholder="e.g. increase mobile appointment bookings through siri / google maps optimization blocks near me"
                      rows={3}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs focus:ring-1 focus:ring-brand-teal focus:outline-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-teal text-slate-950 font-bold py-3.5 rounded-xl hover:bg-white text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Process Free Diagnosis Audit Report
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CORE SYSTEM FAQ COLLAPSE BLOCK */}
      <section className="py-20 max-w-4xl mx-auto px-4 border-t border-slate-900">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4 text-left">
          {[
            {
              q: "What is Voice Search Optimization (Voice SEO)?",
              a: "Voice SEO is the technical optimization process of structuring web directories, maps coordinates, and markup elements so voice-activated synthesizers (Google Assistant, Siri, Alexa) seamlessly retrieve and speak your page descriptions."
            },
            {
              q: "Why is voice-activated SEO important for local brick-and-mortar storefronts?",
              a: "Over 75% of mobile speech prompts containing 'near me' or directional intent resolve immediately into walk-in transactions. If your local business lacks styled map profiles and coordinate schemas, spoken assistants will bypass you."
            },
            {
              q: "Can businesses rank inside ChatGPT Voice or Gemini Live?",
              a: "Yes! By formatting long-form informational hubs with detailed markdown data structures and structured relational schemas (JSON sameAs tags linking Wikidata entities), advanced LLM synthesis frameworks recognize and suggest your brand as the expert citation source."
            },
            {
              q: "What are Speakable schema tags?",
              a: "Speakable is a specific JSON-LD structured data configuration that indicators to Google's crawlers exactly which text paragraphs contain high informational density ideal for smart-speaker text-to-speech audio outputs."
            },
            {
              q: "How long does a typical Voice SEO integration program take?",
              a: "Initial crawl compliance updates and map integrations resolve within 14 to 30 days. As search systems execute deep crawler passes, automated citations and auditory zero-position results scale steadily over succeeding weeks."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-slate-808 rounded-xl p-5 hover:border-brand-teal/20 transition cursor-pointer"
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-white">{item.q}</h3>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '12px' }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-xs text-slate-350 leading-relaxed overflow-hidden border-t border-slate-800 pt-3"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION BOX */}
      <section className="py-24 bg-gradient-to-t from-slate-900 to-slate-955 border-t border-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight antialiased">
            Ready to Optimize Your Brand for Voice Search & Conversational AI?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Partner with the leading AI and conversational SEO digital consulting firm in Lucknow. Secure zero-position citations and scale auditory bookings securely.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href="#audit-form" 
              className="bg-brand-teal text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-teal/20 hover:bg-white hover:scale-102 transition duration-300 flex items-center justify-center space-x-2 text-sm"
            >
              <span>Request Free Voice Search Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={WHATSAPP_LINK}
              className="bg-slate-900 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 hover:scale-102 transition duration-300 flex items-center justify-center space-x-2 text-sm"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>Contact Live Consultant</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-10 text-slate-400 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>Siri & Alexa Audited</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>Programmatic Maps Sync</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>Transparent SLA Reporting</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

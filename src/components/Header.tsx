import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, X, Menu, Phone, Mail, MapPin, 
  TrendingUp, Bot, Sparkles, Code, FileText, CheckCircle2, 
  Calculator, Download, Award, Info, Users, Briefcase, 
  Layers, MessageSquare, Send, ArrowRight, Star, Zap, PhoneCall
} from 'lucide-react';
import { servicesMenu, solutionsMenu, caseStudiesMenu, resourcesMenu, companyMenu, hireExpertsMenu } from '../data';

interface HeaderProps {
  onSearchOpen: () => void;
  openQuiz: () => void;
  openProposal: () => void;
  openDownloadModal: () => void;
}

export default function Header({ onSearchOpen, openQuiz, openProposal, openDownloadModal }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCaseTab, setSelectedCaseTab] = useState(0);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Featured Case Studies content
  const featuredCases = [
    {
      client: "Fintech Leader Inc.",
      growth: "+310% traffic",
      metrics: "Before: 4.5K/mo → After: 18.5K/mo",
      points: [4.5, 6.0, 8.5, 11.0, 15.0, 18.5],
      badge: "Organic SEO",
      cta: "Duplicate This Strategy"
    },
    {
      client: "Apex Shopify Wear",
      growth: "42.5% Conversion",
      metrics: "Before: 1.8% → After: 2.56%",
      points: [1.8, 1.9, 2.1, 2.3, 2.4, 2.56],
      badge: "Shopify Dev & CRO",
      cta: "Analyze My Store Performance"
    }
  ];

  const handleMobileAccordionClick = (menu: string) => {
    if (activeMobileAccordion === menu) {
      setActiveMobileAccordion(null);
    } else {
      setActiveMobileAccordion(menu);
    }
  };

  const handleMobileNavClick = (anchor: string) => {
    setIsMobileMenuOpen(false);
    const isSubPage = window.location.pathname !== '/';
    if (isSubPage) {
      window.history.pushState(null, '', `/${anchor}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isSubPage = window.location.pathname !== '/';
    
    if (href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      setActiveMenu(null);
      setIsMobileMenuOpen(false);
    } else if (href.startsWith('#')) {
      if (isSubPage) {
        e.preventDefault();
        window.history.pushState(null, '', `/${href}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      } else {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          window.location.hash = href;
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href === '/') {
      if (isSubPage) {
        e.preventDefault();
        window.history.pushState(null, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* ENTERPRISE NOTICE TICKER / TOP BAR */}
      <div id="top-bar" className="bg-brand-navy border-b border-slate-800 text-slate-300 py-2.5 px-4 text-xs font-medium z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left section contacts */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs">
            <a href="mailto:info@akglsgroup.com" className="flex items-center gap-1.5 hover:text-brand-indigo transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-teal" />
              <span>info@akglsgroup.com</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="tel:+918318114492" className="flex items-center gap-1.5 hover:text-brand-indigo transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-indigo" />
              <span>+91 831 811 4492</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>San Francisco • New York • Remote Office</span>
            </span>
          </div>

          {/* Right section social & mini action buttons */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold">
            <a 
              href="https://wa.me/918318114492" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="flex items-center gap-1 px-2.5 py-1 bg-emerald-600/35 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-md transition-all text-[11px]"
            >
              <MessageSquare className="w-3 h-3" /> WhatsApp Chat
            </a>
            <a href="#audit-quiz" onClick={openQuiz} className="text-brand-orange hover:underline flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Free Action Guide
            </a>
            <a href="#audit-form" onClick={openProposal} className="hover:text-white text-indigo-300 transition-colors">
              Client Portal
            </a>
          </div>
        </div>
      </div>

      {/* CORE STICKY CORPORATE NAVBAR */}
      <nav id="header-nav" className={`sticky top-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#0a0f1d]/95 backdrop-blur-md shadow-xl py-3 border-slate-800' 
          : 'bg-[#0a0f1d]/90 backdrop-blur-md py-5 border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Mark */}
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-3 select-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-purple flex items-center justify-center shadow-lg shadow-brand-indigo/35 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-xl font-display">AK</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black tracking-tight text-xl font-display leading-none transition-colors text-white">
                  AKGLS <span className="text-brand-indigo">GROUP</span>
                </span>
                <span className="text-[9px] text-brand-teal tracking-widest font-extrabold uppercase mt-1 leading-none">
                  Digital & AI Enterprise
                </span>
              </div>
            </a>

            {/* Desktop Central Navigation with full Hover Dropdowns */}
            <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-4">
              
              {/* Menu 1: Services (4 Columns dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('services')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeMenu === 'services' 
                      ? 'bg-brand-indigo/10 text-brand-indigo' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === 'services' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-[15%] top-full mt-2 w-[850px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-6 z-50 text-left grid grid-cols-4 gap-6 text-slate-200"
                    >
                      {servicesMenu.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-4">
                          <h4 className="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-850 pb-2">
                            {col.title}
                          </h4>
                          <div className="space-y-1.5">
                            {col.items.map((item, iIdx) => (
                              <a 
                                key={iIdx} 
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="group/item flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-slate-900/60 transition-colors"
                              >
                                <span className="text-[13px] font-semibold text-slate-300 group-hover/item:text-brand-indigo transition-colors flex items-center gap-1">
                                  {col.title.includes('AI') && <Bot className="w-3 h-3 text-brand-purple/70" />}
                                  {item.isTrending && <Sparkles className="w-3.5 h-3.5 text-brand-orange" />}
                                  {item.name}
                                </span>
                                {item.isTrending && (
                                  <span className="text-[9px] bg-brand-orange/10 hover:bg-brand-orange text-brand-orange font-bold uppercase py-0.5 px-1.5 rounded tracking-wide font-mono scale-90">
                                    Trending
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                          {col.featuredCta && (
                            <div className="pt-2">
                              <a 
                                href={col.featuredCta.href}
                                className="flex items-center justify-between text-xs font-bold text-white bg-gradient-to-r from-brand-indigo to-brand-purple py-2 px-3 rounded-lg shadow hover:opacity-95 transition-opacity"
                              >
                                <span>{col.featuredCta.text}</span>
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Menu 2: Solutions (3 Columns dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('solutions')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeMenu === 'solutions' 
                      ? 'bg-brand-indigo/10 text-brand-indigo' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === 'solutions' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-[25%] top-full mt-2 w-[750px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-6 z-50 text-left grid grid-cols-3 gap-6 text-slate-200"
                    >
                      {solutionsMenu.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-4">
                          <h4 className="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-850 pb-2 flex items-center justify-between">
                            <span>{col.title}</span>
                            {col.title.includes('AI') && (
                              <span className="flex items-center gap-0.5 text-[9px] bg-brand-purple/10 text-brand-purple rounded-full px-2 py-0.5 font-bold tracking-normal normal-case">
                                <Star className="w-2.5 h-2.5 fill-brand-purple" /> AI Powered
                              </span>
                            )}
                          </h4>
                          <div className="space-y-1.5">
                            {col.items.map((item, iIdx) => (
                              <a 
                                key={iIdx} 
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="group/item flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-slate-900/60 transition-colors text-[13px] font-semibold text-slate-300 group-hover/item:text-brand-indigo"
                              >
                                <span className="flex items-center gap-1">
                                  {col.title.includes('Industry') && <Layers className="w-3 h-3 text-slate-400" />}
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Menu 3: Case Studies (2 Columns - items + Featured Case Study Card with interactive metric & graph) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('cases')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeMenu === 'cases' 
                      ? 'bg-brand-indigo/10 text-brand-indigo' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Case Studies
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'cases' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === 'cases' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-[30%] top-full mt-2 w-[650px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-5 z-50 text-left grid grid-cols-12 gap-5 text-slate-200"
                    >
                      {/* Left list column */}
                      <div className="col-span-5 space-y-4">
                        <h4 className="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-850 pb-2">
                          Performance Cases
                        </h4>
                        <div className="space-y-1">
                          {caseStudiesMenu.leftItems.map((item, idx) => (
                            <a 
                              key={idx} 
                              href={item.href}
                              onClick={(e) => handleLinkClick(e, item.href)}
                              className="block py-2 px-3 rounded-lg hover:bg-slate-900/60 text-[13px] font-bold text-slate-300 hover:text-brand-indigo transition-all text-left"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="pt-2">
                          <button 
                            onClick={openDownloadModal}
                            className="w-full bg-[#0a0f1d] hover:bg-slate-900 border border-slate-800 text-[11px] font-bold py-2.5 px-3 rounded-lg text-slate-300 transition-colors flex items-center justify-center gap-2"
                          >
                            <Download className="w-3.5 h-3.5" /> Download Report Card
                          </button>
                        </div>
                      </div>

                      {/* Right side Featured Card showing exact screenshot layout with graphs */}
                      <div className="col-span-7 bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-indigo px-2.5 py-0.5 rounded-full">
                              {featuredCases[selectedCaseTab].badge}
                            </span>
                            <span className="text-[9px] text-slate-400 font-mono">FEATURED RESULT</span>
                          </div>
                          
                          <h4 className="text-sm font-extrabold text-white font-display mb-1.5 leading-snug">
                            {featuredCases[selectedCaseTab].client}
                          </h4>
                          
                          {/* Traffic Growth Graph SVG */}
                          <div className="h-20 w-full bg-slate-950/60 rounded-lg p-2 border border-slate-800/80 relative overflow-hidden flex flex-col justify-end">
                            <div className="absolute inset-x-0 bottom-2 px-4 flex justify-between text-[8.5px] text-slate-500 font-mono">
                              <span>Month 1</span>
                              <span>Month 6</span>
                            </div>
                            <svg className="w-full h-12" viewBox="0 0 100 50" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {/* Filled path under line */}
                              <path 
                                d={`M 5,45 Q 23,38 41,30 T 77,15 L 95,8 L 95,45 Z`} 
                                fill="url(#chartGrad)" 
                              />
                              {/* Line path */}
                              <path 
                                d={`M 5,45 Q 23,38 41,30 T 77,15 L 95,8`} 
                                fill="none" 
                                stroke="#4F46E5" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                              />
                              {/* Pulse circle on latest point */}
                              <circle cx="95" cy="8" r="3" fill="#0D9488" className="animate-ping" style={{ transformOrigin: '95px 8px' }} />
                              <circle cx="95" cy="8" r="2" fill="#0D9488" />
                            </svg>
                          </div>

                          {/* Before/After stats banner */}
                          <div className="mt-3 grid grid-cols-2 gap-2 bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                            <div>
                              <div className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Metrics</div>
                              <div className="text-xs font-black text-brand-emerald font-mono">{featuredCases[selectedCaseTab].growth}</div>
                            </div>
                            <div>
                              <div className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Comparison</div>
                              <div className="text-[10px] font-semibold text-slate-300 truncate font-mono">{featuredCases[selectedCaseTab].metrics}</div>
                            </div>
                          </div>
                        </div>

                        {/* CTA / Quick Swapping options below */}
                        <div className="mt-3.5 flex items-center justify-between gap-2">
                          <div className="flex gap-1">
                            <button 
                              onClick={() => setSelectedCaseTab(0)}
                              className={`w-2 h-2 rounded-full transition-all ${selectedCaseTab === 0 ? 'bg-brand-indigo w-4' : 'bg-slate-600'}`}
                            ></button>
                            <button 
                              onClick={() => setSelectedCaseTab(1)}
                              className={`w-2 h-2 rounded-full transition-all ${selectedCaseTab === 1 ? 'bg-brand-indigo w-4' : 'bg-slate-600'}`}
                            ></button>
                          </div>
                          
                          <a 
                            href="#portfolio-gallery" 
                            className="bg-brand-orange hover:bg-opacity-95 text-[10px] font-black uppercase text-white py-2 px-3 rounded-lg transition-all"
                          >
                            <span>{featuredCases[selectedCaseTab].cta}</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Menu 4: Resources (4 Columns dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('resources')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeMenu === 'resources' 
                      ? 'bg-brand-indigo/10 text-brand-indigo' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === 'resources' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-[40%] top-full mt-2 w-[800px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl p-6 z-50 text-left grid grid-cols-4 gap-6 text-slate-200"
                    >
                      {resourcesMenu.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-4">
                          <h4 className="text-xs font-extrabold tracking-widest text-slate-400 uppercase font-display border-b border-slate-850 pb-2 flex items-center gap-1.5">
                            {col.title.includes('Tools') && <Calculator className="w-3.5 h-3.5 text-brand-indigo" />}
                            {col.title.includes('Learning') && <Zap className="w-3.5 h-3.5 text-brand-purple" />}
                            <span>{col.title}</span>
                          </h4>
                          <div className="space-y-1.5">
                            {col.items.map((item, iIdx) => (
                              <a 
                                key={iIdx} 
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="group/item flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-slate-900/60 transition-colors text-[13px] font-semibold text-slate-300 group-hover/item:text-brand-indigo"
                              >
                                <span className="truncate">{item.name}</span>
                                {col.title.includes('Downloads') && <Download className="w-3 h-3 text-slate-400 group-hover/item:text-brand-indigo" />}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Menu 5: Company (Standard Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('company')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeMenu === 'company' 
                      ? 'bg-brand-indigo/10 text-brand-indigo' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Company
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === 'company' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 w-48 bg-[#0c121e] border border-slate-800 rounded-xl shadow-xl p-3 z-50 text-left space-y-1 text-slate-200"
                    >
                      {companyMenu.map((item, idx) => (
                        <a 
                          key={idx} 
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-900/60 text-[13px] font-semibold text-slate-300 hover:text-brand-indigo transition-all"
                        >
                          {item.name.includes('Team') && <Users className="w-3.5 h-3.5 text-slate-400" />}
                          {item.name.includes('Careers') && <Briefcase className="w-3.5 h-3.5 text-slate-400" />}
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Menu 6: Hire Experts (High Intent Core Dropdown Menu) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('hire')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeMenu === 'hire' 
                      ? 'bg-brand-indigo/10 text-brand-indigo' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Hire
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'hire' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === 'hire' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-[#0c121e] border border-slate-800 rounded-xl shadow-xl p-3.5 z-50 text-left space-y-1.5 text-slate-200"
                    >
                      <div className="px-2 pb-1.5 border-b border-slate-850 mb-1">
                        <span className="text-[10px] text-brand-orange font-black uppercase tracking-wider block">
                          Instant Placement
                        </span>
                      </div>
                      {hireExpertsMenu.map((item, idx) => (
                        <a 
                          key={idx} 
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-slate-900/60 text-[13px] font-bold text-slate-300 hover:text-brand-indigo transition-all"
                        >
                          <span>{item.name}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Right Side Header Action Anchors */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Keyboard friendly search trigger */}
              <button 
                onClick={onSearchOpen} 
                className="p-2.5 rounded-xl transition-all text-slate-300 hover:text-white hover:bg-white/10"
                title="Search capabilities... (/)"
              >
                <Search className="w-5 h-5" />
              </button>

              <a 
                href="tel:+918318114492" 
                className="bg-gradient-to-r from-brand-indigo to-brand-purple hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-wide py-3.5 px-6 rounded-xl transition-all shadow-md shadow-brand-indigo/20 flex items-center gap-1.5"
              >
                Call Now <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Navigation Toggles */}
            <div className="flex lg:hidden items-center space-x-3">
              <button 
                onClick={onSearchOpen}
                className="p-2 text-slate-500 hover:text-brand-indigo"
              >
                <Search className="w-5 h-5 pointer-events-none" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-500 hover:text-brand-indigo"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* FULL SCREEN SLIDE INDUSTRIAL MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm lg:hidden text-left"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[340px] bg-[#0c121e] border-l border-slate-800 flex flex-col justify-between shadow-2xl overflow-y-auto text-slate-200"
            >
              {/* Header inside drawer */}
              <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-indigo flex items-center justify-center font-bold text-white text-sm font-display">AK</div>
                  <span className="font-extrabold text-white text-base font-display">AKGLS MENU</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Dynamic Auto-suggest Search Box inside menu */}
              <div className="px-5 py-3 border-b border-slate-800/80 bg-[#0a0f1d]/40">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search 140+ capabilities..." 
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    className="w-full bg-[#05070a] border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-indigo"
                  />
                  {mobileSearchQuery && (
                    <button 
                      onClick={() => setMobileSearchQuery('')}
                      className="absolute right-3 top-3 text-[10px] font-bold text-slate-400"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {mobileSearchQuery && (
                  <div className="bg-[#05070a] border border-slate-800 rounded-xl mt-1.5 p-2 shadow max-h-36 overflow-y-auto space-y-1 scrollbar-none">
                    <p className="text-[10.5px] text-slate-400 font-bold px-1 uppercase tracking-wider">Matches:</p>
                    <a 
                      href="#capabilities-explorer" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-[11px] font-bold text-slate-300 hover:text-white py-1 px-1 rounded hover:bg-slate-900"
                    >
                      Technical search filters active
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion Based Nav Middle Section */}
              <div className="flex-1 px-5 py-4 space-y-1 text-slate-300 overflow-y-auto scrollbar-none">
                
                {/* Services Accordion */}
                <div className="border-b border-slate-800 pb-1.5">
                  <button 
                    onClick={() => handleMobileAccordionClick('services')}
                    className="w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
                  >
                    <span className="flex items-center gap-2"><Layers className="w-4 h-4 text-brand-indigo" /> Services</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeMobileAccordion === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMobileAccordion === 'services' && (
                    <div className="pl-4 py-1.5 space-y-1.5 border-l border-slate-850 text-[13px]">
                      {servicesMenu.map((col, idx) => (
                        <div key={idx} className="space-y-1 pt-1">
                          <p className="text-[10px] uppercase font-black text-slate-400">{col.title}</p>
                          {col.items.slice(0, 4).map((sub, sIdx) => (
                            <a 
                              key={sIdx} 
                              href={sub.href} 
                              onClick={(e) => handleLinkClick(e, sub.href)}
                              className="block py-1 text-slate-300 hover:text-brand-indigo"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solutions Accordion */}
                <div className="border-b border-slate-800 pb-1.5">
                  <button 
                    onClick={() => handleMobileAccordionClick('solutions')}
                    className="w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
                  >
                    <span className="flex items-center gap-2"><Bot className="w-4 h-4 text-brand-purple" /> Solutions</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeMobileAccordion === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMobileAccordion === 'solutions' && (
                    <div className="pl-4 py-1.5 space-y-1.5 border-l border-slate-850 text-[13px]">
                      {solutionsMenu.map((col, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="text-[10.5px] uppercase font-semibold text-slate-400">{col.title}</p>
                          {col.items.slice(0, 3).map((sub, sIdx) => (
                            <a 
                              key={sIdx} 
                              href={sub.href} 
                              onClick={(e) => handleLinkClick(e, sub.href)}
                              className="block py-1 text-slate-300 hover:text-brand-indigo"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Case Studies Accordion */}
                <div className="border-b border-slate-800 pb-1.5">
                  <button 
                    onClick={() => handleMobileAccordionClick('cases')}
                    className="w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
                  >
                    <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-brand-teal" /> Case Studies</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeMobileAccordion === 'cases' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMobileAccordion === 'cases' && (
                    <div className="pl-4 py-1.5 space-y-1 border-l border-slate-850 text-[13px]">
                      {caseStudiesMenu.leftItems.map((item, idx) => (
                        <a 
                          key={idx} 
                          href={item.href} 
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="block py-1.5 text-slate-300 hover:text-brand-indigo"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources Accordion */}
                <div className="border-b border-slate-800 pb-1.5">
                  <button 
                    onClick={() => handleMobileAccordionClick('resources')}
                    className="w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
                  >
                    <span className="flex items-center gap-2"><Calculator className="w-4 h-4 text-brand-orange" /> Resources</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeMobileAccordion === 'resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMobileAccordion === 'resources' && (
                    <div className="pl-4 py-1.5 space-y-2 border-l border-slate-850 text-[13px]">
                      {resourcesMenu.map((col, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="text-[10px] uppercase font-bold text-slate-400">{col.title}</p>
                          {col.items.slice(0, 3).map((sub, sIdx) => (
                            <a 
                              key={sIdx} 
                              href={sub.href} 
                              onClick={(e) => handleLinkClick(e, sub.href)}
                              className="block py-0.5 text-slate-300 hover:text-brand-indigo"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Company Accordion */}
                <div className="border-b border-slate-800 pb-1.5">
                  <button 
                    onClick={() => handleMobileAccordionClick('company')}
                    className="w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
                  >
                    <span className="flex items-center gap-2"><Info className="w-4 h-4 text-slate-500" /> Company</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeMobileAccordion === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMobileAccordion === 'company' && (
                    <div className="pl-4 py-1.5 space-y-1.5 border-l border-slate-850 text-[13px]">
                      {companyMenu.map((item, idx) => (
                        <a 
                          key={idx} 
                          href={item.href} 
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="block py-1 text-slate-300 hover:text-brand-indigo"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hire Experts Accordion */}
                <div className="border-b border-slate-800">
                  <button 
                    onClick={() => handleMobileAccordionClick('hire')}
                    className="w-full py-2.5 flex items-center justify-between font-bold text-slate-200 text-[14px]"
                  >
                    <span className="flex items-center gap-2"><Star className="w-4 h-4 text-brand-orange" /> Hire</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeMobileAccordion === 'hire' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMobileAccordion === 'hire' && (
                    <div className="pl-4 py-1.5 space-y-1.5 border-l border-slate-850 text-[13px]">
                      {hireExpertsMenu.map((item, idx) => (
                        <a 
                          key={idx} 
                          href={item.href} 
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="block py-1 text-slate-300 hover:text-brand-indigo"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Botton CTA triggers inside Drawer */}
              <div className="p-5 border-t border-slate-800 bg-[#0a0f1d] space-y-3">
                <a 
                  href="#audit-quiz" 
                  onClick={() => { setIsMobileMenuOpen(false); openQuiz(); }} 
                  className="w-full py-2.5 bg-brand-orange/10 text-brand-orange font-bold rounded-xl text-center block text-xs hover:bg-brand-orange hover:text-white transition-colors"
                >
                  Get Free SEO Audit
                </a>
                
                <a 
                  href="#audit-form" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 bg-brand-indigo hover:bg-opacity-95 text-white font-black text-center rounded-xl block text-xs shadow"
                >
                  Book Free Consultation
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE STICKY BOTTOM CORE HIGH-CONVERSION CTA NAVIGATION BAR */}
      <div className="fixed bottom-0 inset-x-0 bg-[#0a0f1d]/95 border-t border-slate-800 z-40 lg:hidden py-2 px-4 shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-4 gap-2 text-center max-w-md mx-auto">
          {/* Item 1: WhatsApp */}
          <a 
            href="https://wa.me/918318114492" 
            target="_blank" 
            referrerPolicy="no-referrer"
            className="flex flex-col items-center justify-center text-slate-400 hover:text-brand-emerald"
          >
            <MessageSquare className="w-5 h-5 text-emerald-500" />
            <span className="text-[10px] font-bold mt-1">WhatsApp</span>
          </a>

          {/* Item 2: Call now */}
          <a 
            href="tel:+918318114492" 
            className="flex flex-col items-center justify-center text-slate-400 hover:text-brand-indigo"
          >
            <PhoneCall className="w-5 h-5 text-brand-indigo" />
            <span className="text-[10px] font-bold mt-1">Call Now</span>
          </a>

          {/* Item 3: Free Audit */}
          <button 
            onClick={() => {
              const element = document.querySelector('#audit-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center justify-center text-slate-400 hover:text-brand-orange"
          >
            <FileText className="w-5 h-5 text-brand-orange" />
            <span className="text-[10px] font-bold mt-1">Free Audit</span>
          </button>

          {/* Item 4: Book Consultation */}
          <button 
            onClick={openQuiz}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-brand-indigo to-brand-purple text-white rounded-xl py-1 px-2 shadow-md hover:opacity-95"
          >
            <Zap className="w-4 h-4 text-white" />
            <span className="text-[9px] font-black uppercase mt-0.5 tracking-tight">Book Free</span>
          </button>
        </div>
      </div>
    </>
  );
}

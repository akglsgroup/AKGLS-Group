import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, ArrowRight, ArrowLeft, Bot, Database, Zap, FileText, CheckCircle2,
  TrendingUp, Target, Briefcase, ShoppingBag, Building2, Stethoscope, 
  Coins, Rocket, GraduationCap, BarChart3, Search, Code2, PhoneCall, 
  MessageSquare, Calendar, ShieldCheck, RefreshCw, ChevronRight, Award,
  Clock, Check, Globe, HelpCircle, Layers, ArrowUpRight
} from 'lucide-react';
import { QuizState } from '../types';
import { captureLead } from '../utils/leadCapture';

interface ServiceQuizProps {
  onNavigateToService?: (servicePageId: string) => void;
  onBookConsultation?: (prefillData?: any) => void;
}

interface QuestionOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge?: string;
}

// 1. Industry Options
const INDUSTRY_OPTIONS: QuestionOption[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce & D2C Brands',
    subtitle: 'Shopify, WooCommerce, Amazon, or direct-to-consumer retail brands',
    icon: ShoppingBag,
    badge: 'Popular'
  },
  {
    id: 'b2b_saas',
    title: 'B2B Tech, SaaS & Cloud',
    subtitle: 'Software platforms, enterprise IT, cyber, and B2B professional tools',
    icon: Building2,
    badge: 'High Growth'
  },
  {
    id: 'local_healthcare',
    title: 'Healthcare & Local Services',
    subtitle: 'Clinics, dental practices, law firms, real estate, and regional services',
    icon: Stethoscope,
  },
  {
    id: 'finance_pro',
    title: 'Finance & Professional Advisory',
    subtitle: 'FinTech, wealth advisory, accounting, corporate law, and consulting',
    icon: Coins,
  },
  {
    id: 'startups',
    title: 'Funded Startups & Scale-Ups',
    subtitle: 'Pre-Seed to Series B ventures building aggressive market momentum',
    icon: Rocket,
    badge: 'Fast Track'
  },
  {
    id: 'education',
    title: 'Education, EdTech & Academies',
    subtitle: 'Online learning platforms, universities, training institutes, and coaching',
    icon: GraduationCap,
  }
];

// 2. Primary Goals
const GOAL_OPTIONS: QuestionOption[] = [
  {
    id: 'scale_revenue',
    title: 'Scale Revenue & Sales Volume',
    subtitle: 'Accelerate online transactions, average order value, and bottom-line revenue',
    icon: TrendingUp,
    badge: 'Top Priority'
  },
  {
    id: 'dominate_ai',
    title: 'Dominate AI Search & Citations',
    subtitle: 'Be cited as the #1 recommended solution across ChatGPT, Perplexity & Gemini',
    icon: Bot,
    badge: '2026 Trend'
  },
  {
    id: 'rank_google',
    title: 'Rank #1 on Google Organic Search',
    subtitle: 'Capture high-intent commercial keywords and outrank competitors on Google',
    icon: Search,
  },
  {
    id: 'maximize_roas',
    title: 'Maximize Ad ROAS & Cut Wasted Spend',
    subtitle: 'Scale profitable Google, Meta, and LinkedIn campaigns while lowering CAC',
    icon: BarChart3,
  },
  {
    id: 'modernize_web',
    title: 'Upgrade Web Architecture & Speed',
    subtitle: 'Build a lightning-fast, high-converting custom Shopify or React web experience',
    icon: Code2,
  },
  {
    id: 'b2b_pipeline',
    title: 'Predictable B2B Sales Pipeline',
    subtitle: 'Consistently book qualified demo and discovery calls with executive decision-makers',
    icon: Target,
  }
];

// 3. Core Challenges / Bottlenecks
const CHALLENGE_OPTIONS: QuestionOption[] = [
  {
    id: 'traffic_flat',
    title: 'Stagnant or Declining Organic Traffic',
    subtitle: 'Despite publishing articles, organic visits and keyword rankings are flat or dropping',
    icon: Search,
  },
  {
    id: 'high_cac',
    title: 'Rising Ad Costs & Low Return on Spend',
    subtitle: 'Paid ad costs on Meta or Google are spiraling with diminishing conversion returns',
    icon: BarChart3,
  },
  {
    id: 'low_conversion',
    title: 'High Bounce Rate / Low Conversion Rate',
    subtitle: 'Website attracts visitors, but very few submit inquiries or complete checkouts',
    icon: Zap,
  },
  {
    id: 'ai_invisible',
    title: 'Invisible to AI Search Engines',
    subtitle: 'When prospective buyers ask ChatGPT or Perplexity for solutions, competitors appear instead',
    icon: Bot,
    badge: 'Urgent'
  },
  {
    id: 'slow_outdated_site',
    title: 'Sluggish Website / Outdated Tech Stack',
    subtitle: 'Mobile load times exceed 3+ seconds with poor user experience and technical debt',
    icon: Code2,
  },
  {
    id: 'unpredictable_leads',
    title: 'Unqualified or Inconsistent Inbound Leads',
    subtitle: 'Sales pipeline is unpredictable, manual outreach is tiring, and lead quality is weak',
    icon: Target,
  }
];

// 4. Monthly Growth Investment Bracket
const SPEND_OPTIONS = [
  {
    id: 'starter',
    label: 'Under $1,500 / ₹1,00,000 / mo',
    desc: 'Foundational sprint or high-impact diagnostic cleanup'
  },
  {
    id: 'core',
    label: '$1,500 - $4,000 / ₹1,00,000 - ₹3,00,000 / mo',
    desc: 'Accelerated core growth and active multi-channel campaigns'
  },
  {
    id: 'growth',
    label: '$4,000 - $10,000 / ₹3,00,000 - ₹8,00,000 / mo',
    desc: 'Aggressive scaling, dedicated squad, and omni-channel dominance'
  },
  {
    id: 'enterprise',
    label: '$10,000+ / ₹8,00,000+ / mo',
    desc: 'Full-stack enterprise retainer with custom engineering'
  }
];

export interface RecommendationResult {
  matchScore: number;
  primaryService: {
    id: string;
    title: string;
    tagline: string;
    badge: string;
    targetServicePage: string;
    deliverables: string[];
    accentColor: string;
  };
  secondaryService: {
    title: string;
    description: string;
    targetServicePage: string;
  };
  rationale: string;
  roadmapPhases: {
    phase: string;
    timeframe: string;
    focus: string;
  }[];
}

export default function ServiceQuiz({ onNavigateToService, onBookConsultation }: ServiceQuizProps) {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  const [form, setForm] = useState<QuizState>({
    industry: 'ecommerce',
    goal: 'scale_revenue',
    challenge: 'traffic_flat',
    spend: 'core',
    name: '',
    email: '',
    phone: '',
    website: '',
    companyName: ''
  });

  // Calculate dynamic tailored recommendation based on user answers
  const calculateRecommendation = (): RecommendationResult => {
    const { industry, goal, challenge } = form;

    // AI Dominance or AI Invisible challenge
    if (goal === 'dominate_ai' || challenge === 'ai_invisible') {
      return {
        matchScore: 98,
        primaryService: {
          id: 'geo',
          title: 'Generative Engine Optimization (GEO) & AI Search Citation',
          tagline: 'Secure authoritative entity citations across ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
          badge: 'Next-Gen AI Dominance',
          targetServicePage: 'geo',
          accentColor: 'indigo',
          deliverables: [
            'Knowledge Graph Schema 14.0 & Entity Relationship Injection',
            'High-Density Informational Corpus Engineering for AI LLMs',
            'Direct Citation & Brand Association in Perplexity & ChatGPT',
            'Entity Disambiguation to Displace Competitor AI Mentions'
          ]
        },
        secondaryService: {
          title: 'Technical Enterprise SEO & Core Web Vitals',
          description: 'Ensure traditional search engines feed clean, crawlable markdown data to AI scrapers.',
          targetServicePage: 'seo-services'
        },
        rationale: `As an organization in the ${getIndustryLabel(industry)} sector targeting ${getGoalLabel(goal)}, having zero or low presence in generative answer engines is leaking high-intent buyers directly to competitors. Our proprietary GEO playbook optimizes your semantic entity graph so AI models recommend your business first.`,
        roadmapPhases: [
          { phase: 'Phase 1', timeframe: 'Days 1–30', focus: 'Entity extraction, brand knowledge graph audit & schema infrastructure' },
          { phase: 'Phase 2', timeframe: 'Days 31–60', focus: 'High-density information hub publication & AI bot access optimization' },
          { phase: 'Phase 3', timeframe: 'Days 61–90', focus: 'Perplexity & ChatGPT citation monitoring, refinement & competitor conquesting' }
        ]
      };
    }

    // E-commerce or Web Architecture
    if (goal === 'modernize_web' || challenge === 'slow_outdated_site' || (industry === 'ecommerce' && challenge === 'low_conversion')) {
      const isShopify = industry === 'ecommerce';
      return {
        matchScore: 96,
        primaryService: {
          id: isShopify ? 'shopify' : 'web_design',
          title: isShopify ? 'Shopify Plus Custom Architecture & CRO Funnel' : 'Modern High-Converting Web Engineering & Speed',
          tagline: isShopify ? 'Scale e-commerce sales with sub-second liquid architecture and frictionless checkout UX.' : 'Transform your website into a lightning-fast, high-converting customer acquisition engine.',
          badge: 'E-Commerce & High Speed',
          targetServicePage: isShopify ? 'shopify-development' : 'web-design',
          accentColor: 'emerald',
          deliverables: [
            'Sub-second Mobile Speed & Core Web Vitals (90+ PageSpeed score)',
            'Frictionless Checkout UX & Conversion Rate Optimization (CRO)',
            'Custom theme development with zero app bloat and clean liquid/React code',
            'Automated conversion tracking, pixel validation & heatmapped analytics'
          ]
        },
        secondaryService: {
          title: 'Performance Max & Meta Ads Scaling',
          description: 'Funnel high-intent shopping traffic directly into your high-converting storefront.',
          targetServicePage: 'google-ads'
        },
        rationale: `For ${getIndustryLabel(industry)}, your traffic is being wasted if your site speed is sluggish or the checkout flow contains friction. Upgrading your web infrastructure immediately lifts average order value (AOV) and conversion rate without having to spend more on ads.`,
        roadmapPhases: [
          { phase: 'Phase 1', timeframe: 'Days 1–30', focus: 'Core speed bottlenecks removal, responsive UX wireframing & CRO audit' },
          { phase: 'Phase 2', timeframe: 'Days 31–60', focus: 'Theme implementation, speed testing, and checkout optimization' },
          { phase: 'Phase 3', timeframe: 'Days 61–90', focus: 'A/B conversion split-testing, retention flows & search visibility scale' }
        ]
      };
    }

    // Paid Ads ROAS / High CAC
    if (goal === 'maximize_roas' || challenge === 'high_cac') {
      return {
        matchScore: 95,
        primaryService: {
          id: 'ppc',
          title: 'Full-Funnel Google & Meta Ads High-ROAS Scaling',
          tagline: 'Stop budget waste with intent-segmented campaign structures, high-converting creatives, and smart bidding.',
          badge: 'Immediate ROI / High ROAS',
          targetServicePage: 'google-ads',
          accentColor: 'amber',
          deliverables: [
            'Negative Keyword & Search Query Forensic Audit to eliminate wasted spend',
            'Full Server-Side Conversion API (CAPI) & first-party tracking setup',
            'High-converting ad creative copy, reels/video hooks, and landing page pairs',
            'Smart bidding algorithm calibration targeting high-margin buyers'
          ]
        },
        secondaryService: {
          title: 'Landing Page Conversion Rate Optimization (CRO)',
          description: 'Double your ROAS by ensuring ad clicks land on high-converting dedicated pages.',
          targetServicePage: 'web-design'
        },
        rationale: `Rising ad costs are an industry-wide pain point, but high CAC is usually caused by targeting broad keywords and driving traffic to generic pages. Our data-driven PPC restructuring cuts wasted spend by 30-50% while unlocking scalable ROAS.`,
        roadmapPhases: [
          { phase: 'Phase 1', timeframe: 'Days 1–15', focus: 'Ad account forensics, negative keyword scrubs & server-side tracking repair' },
          { phase: 'Phase 2', timeframe: 'Days 16–45', focus: 'Intent campaign restructuring, new high-converting ad hooks & landing pages' },
          { phase: 'Phase 3', timeframe: 'Days 46–90', focus: 'Aggressive budget scaling on winning ad sets & cross-channel retargeting' }
        ]
      };
    }

    // B2B Pipeline / Unpredictable leads
    if (goal === 'b2b_pipeline' || challenge === 'unpredictable_leads' || industry === 'b2b_saas') {
      return {
        matchScore: 97,
        primaryService: {
          id: 'b2b',
          title: 'B2B Predictable Inbound & Outbound Pipeline Engine',
          tagline: 'Fill your sales calendar with qualified enterprise decision-makers through targeted demand generation.',
          badge: 'High-Ticket B2B Growth',
          targetServicePage: 'b2b-lead-generation',
          accentColor: 'blue',
          deliverables: [
            'Hyper-Targeted Decision-Maker ICP Mapping & Verified Contact Lists',
            'High-Converting LinkedIn Ads & Founder Thought Leadership Content',
            'Multi-Channel Inbound Content Funnels (Case studies, Whitepapers, Tools)',
            'CRM Automation & Sales Calendar Booking Integration'
          ]
        },
        secondaryService: {
          title: 'Generative Search & B2B Organic SEO',
          description: 'Capture high-ticket enterprise buyers when they research software alternatives.',
          targetServicePage: 'geo'
        },
        rationale: `For B2B software and service companies, generic marketing rarely converts. You need an orchestrated system combining LinkedIn demand generation with high-intent organic capture to consistently engage C-suite and VP buyers.`,
        roadmapPhases: [
          { phase: 'Phase 1', timeframe: 'Days 1–30', focus: 'ICP definition, value proposition sharpening & sales collateral setup' },
          { phase: 'Phase 2', timeframe: 'Days 31–60', focus: 'LinkedIn campaign launch, lead magnet distribution & outbound sequences' },
          { phase: 'Phase 3', timeframe: 'Days 61–90', focus: 'Pipeline velocity acceleration, sales demo optimization & scale' }
        ]
      };
    }

    // Local / Healthcare
    if (industry === 'local_healthcare') {
      return {
        matchScore: 96,
        primaryService: {
          id: 'local',
          title: 'Local Business Hyper-Growth & Google Maps 3-Pack Dominance',
          tagline: 'Dominate local search, capture high-value patients or clients, and build an unassailable regional reputation.',
          badge: 'Local Area Domination',
          targetServicePage: 'local-business-growth',
          accentColor: 'teal',
          deliverables: [
            'Google Business Profile (GBP) Optimization & Proximity Signal Injection',
            'Local Schema, Multi-Location Pages & Hyper-Local Citation Building',
            'Automated 5-Star Review Generation System to build local trust',
            'High-Intent Local Service Ads (LSA) & Google Call Campaigns'
          ]
        },
        secondaryService: {
          title: 'Fast Mobile Landing Pages with Click-to-Call',
          description: 'Ensure local searchers can immediately book appointments or call in 1 click.',
          targetServicePage: 'web-design'
        },
        rationale: `Local and healthcare customers choose businesses that rank in the Google Maps 3-Pack with stellar reviews. Our local hyper-growth framework ensures your business appears prominently whenever someone searches for your services nearby.`,
        roadmapPhases: [
          { phase: 'Phase 1', timeframe: 'Days 1–30', focus: 'GBP audit, citation cleanup & local schema deployment' },
          { phase: 'Phase 2', timeframe: 'Days 31–60', focus: 'Proximity signal building, automated review push & local ads launch' },
          { phase: 'Phase 3', timeframe: 'Days 61–90', focus: 'Regional radius expansion, top-ranking maps defense & inbound lead surge' }
        ]
      };
    }

    // Default: Technical Enterprise SEO
    return {
      matchScore: 96,
      primaryService: {
        id: 'seo',
        title: 'Technical Enterprise SEO & Topic Authority Architecture',
        tagline: 'Compound organic search traffic with deep crawl optimization, semantic clusters, and high-authority links.',
        badge: 'Long-Term Organic Authority',
        targetServicePage: 'seo-services',
        accentColor: 'indigo',
        deliverables: [
          'Comprehensive Deep Technical Crawl, Core Web Vitals & Index Cleanup',
          'Semantic Keyword Clustering targeting high-intent commercial buyers',
          'High-Authority White-Hat Digital PR & Editorial Backlink Acquisition',
          'Rich Snippets, Featured Answers & Video/Article Schema Optimization'
        ]
      },
      secondaryService: {
        title: 'Generative Engine Optimization (GEO)',
        description: 'Future-proof your organic search rankings as search engines transition to AI answers.',
        targetServicePage: 'geo'
      },
      rationale: `To overcome stagnant traffic and achieve compounding growth in your space, you need more than basic blog posts. Our Technical SEO framework resolves deep site architecture bottlenecks and establishes topical authority so Google rewards your domain with top rankings.`,
      roadmapPhases: [
        { phase: 'Phase 1', timeframe: 'Days 1–30', focus: 'Technical crawl audit, indexing fixes & Core Web Vitals speed repair' },
        { phase: 'Phase 2', timeframe: 'Days 31–60', focus: 'Topical authority hub launch, semantic on-page upgrades & internal linking' },
        { phase: 'Phase 3', timeframe: 'Days 61–90', focus: 'High-DR backlink acquisition, featured snippet capture & traffic compounding' }
      ]
    };
  };

  const getIndustryLabel = (id: string) => {
    return INDUSTRY_OPTIONS.find(o => o.id === id)?.title || 'Growing Business';
  };

  const getGoalLabel = (id: string) => {
    return GOAL_OPTIONS.find(o => o.id === id)?.title || 'Accelerate Business Growth';
  };

  const getChallengeLabel = (id: string) => {
    return CHALLENGE_OPTIONS.find(o => o.id === id)?.title || 'Marketing Bottlenecks';
  };

  const handleSelectOption = (field: keyof QuizState, value: string, nextStep: number) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setStep(nextStep);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.website) return;

    setIsSubmitting(true);
    const recommendation = calculateRecommendation();

    try {
      // Capture lead directly to Firestore CRM + Express backend
      await captureLead({
        name: form.name || 'Quiz Prospect',
        email: form.email,
        phone: form.phone || '',
        companyName: form.companyName || form.website,
        websiteUrl: form.website,
        primaryGoal: getGoalLabel(form.goal),
        budget: form.spend,
        notes: `[Interactive Quiz Completed]\nIndustry: ${getIndustryLabel(form.industry)}\nPrimary Goal: ${getGoalLabel(form.goal)}\nKey Challenge: ${getChallengeLabel(form.challenge)}\nRecommended Solution: ${recommendation.primaryService.title}\nSecondary: ${recommendation.secondaryService.title}`,
        pageAddress: typeof window !== 'undefined' ? window.location.href : 'https://www.akglsgroup.com/#audit-quiz',
        pageTitle: 'AKGLS Interactive Growth Diagnostic Quiz',
        status: 'New',
        rawDetails: {
          industry: form.industry,
          goal: form.goal,
          challenge: form.challenge,
          spend: form.spend,
          recommendation: recommendation.primaryService.title,
          matchScore: recommendation.matchScore
        }
      });
      setSubmissionSuccess(true);
    } catch (err) {
      console.warn('Lead capture processed with local fallback:', err);
    } finally {
      setIsSubmitting(false);
      setIsDone(true);
    }
  };

  const resetQuiz = () => {
    setForm({
      industry: 'ecommerce',
      goal: 'scale_revenue',
      challenge: 'traffic_flat',
      spend: 'core',
      name: '',
      email: '',
      phone: '',
      website: '',
      companyName: ''
    });
    setStep(1);
    setIsDone(false);
    setSubmissionSuccess(false);
  };

  const progressPercent = () => {
    if (isDone) return 100;
    return (step / 5) * 100;
  };

  const recommendation = calculateRecommendation();

  // Pre-formatted WhatsApp link
  const whatsAppMessage = encodeURIComponent(
    `Hi AKGLS Group! I just completed your Interactive Growth Quiz.\n\n` +
    `🏢 Business: ${form.companyName || form.website || 'Our Business'}\n` +
    `🎯 Goal: ${getGoalLabel(form.goal)}\n` +
    `⚠️ Challenge: ${getChallengeLabel(form.challenge)}\n` +
    `💡 Recommended Solution: ${recommendation.primaryService.title}\n\n` +
    `I would like to discuss our tailored strategy and book a free consultation!`
  );

  return (
    <div id="service-quiz" className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-left max-w-4xl mx-auto">
      {/* Decorative gradient glowing orbs */}
      <div className="absolute -right-20 -top-20 w-56 h-56 bg-brand-indigo/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-56 h-56 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex justify-between items-center border-b border-slate-800/80 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-black text-slate-400 font-mono uppercase tracking-widest flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-brand-teal" /> AI Growth & Solution Diagnostic
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal">
            {isDone ? 'DIAGNOSIS READY' : `STEP ${step} OF 5`}
          </span>
        </div>
      </div>

      {/* Progress track bar */}
      <div className="w-full bg-slate-800/80 h-2 rounded-full mb-8 overflow-hidden">
        <motion.div 
          initial={{ width: '20%' }}
          animate={{ width: `${progressPercent()}%` }}
          transition={{ duration: 0.3 }}
          className="h-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-teal"
        />
      </div>

      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* STEP 1: INDUSTRY */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider font-mono">
                    Step 1 of 5 • Industry Classification
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display leading-tight mt-1">
                    What industry best describes your business?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-2">
                    Select your vertical so our algorithm can apply benchmarks from 150+ successful client campaigns.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {INDUSTRY_OPTIONS.map((opt) => {
                    const IconComp = opt.icon;
                    const isSelected = form.industry === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption('industry', opt.id, 2)}
                        className={`group p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-start gap-4 relative overflow-hidden ${
                          isSelected 
                            ? 'bg-brand-indigo/20 border-brand-indigo ring-1 ring-brand-indigo' 
                            : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800'
                        }`}
                      >
                        <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                          isSelected ? 'bg-brand-indigo text-white' : 'bg-slate-700/50 text-slate-300 group-hover:text-white group-hover:bg-slate-700'
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-brand-teal transition-colors">
                              {opt.title}
                            </h4>
                            {opt.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-indigo/30 text-indigo-300 border border-brand-indigo/40">
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                            {opt.subtitle}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-1 transition-all shrink-0 self-center" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: PRIMARY GOAL */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider font-mono">
                    Step 2 of 5 • Core Growth Objective
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display leading-tight mt-1">
                    What is your #1 business goal for the next 6 to 12 months?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-2">
                    Pinpointing your core metric ensures we recommend solutions that directly impact your bottom line.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {GOAL_OPTIONS.map((opt) => {
                    const IconComp = opt.icon;
                    const isSelected = form.goal === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption('goal', opt.id, 3)}
                        className={`group p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-start gap-4 relative overflow-hidden ${
                          isSelected 
                            ? 'bg-brand-indigo/20 border-brand-indigo ring-1 ring-brand-indigo' 
                            : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800'
                        }`}
                      >
                        <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                          isSelected ? 'bg-brand-indigo text-white' : 'bg-slate-700/50 text-slate-300 group-hover:text-white group-hover:bg-slate-700'
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-brand-teal transition-colors">
                              {opt.title}
                            </h4>
                            {opt.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                            {opt.subtitle}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-1 transition-all shrink-0 self-center" />
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-start pt-2">
                  <button 
                    type="button"
                    onClick={handleBack} 
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 py-2 px-4 bg-slate-800 rounded-xl border border-slate-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous Step
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CHALLENGES & BOTTLENECKS */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider font-mono">
                    Step 3 of 5 • Growth Bottleneck Analysis
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display leading-tight mt-1">
                    What is the biggest operational hurdle holding you back?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-2">
                    Identifying the root obstruction lets us match the exact engineering and marketing playbook required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {CHALLENGE_OPTIONS.map((opt) => {
                    const IconComp = opt.icon;
                    const isSelected = form.challenge === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption('challenge', opt.id, 4)}
                        className={`group p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-start gap-4 relative overflow-hidden ${
                          isSelected 
                            ? 'bg-brand-indigo/20 border-brand-indigo ring-1 ring-brand-indigo' 
                            : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800'
                        }`}
                      >
                        <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                          isSelected ? 'bg-brand-indigo text-white' : 'bg-slate-700/50 text-slate-300 group-hover:text-white group-hover:bg-slate-700'
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-brand-teal transition-colors">
                              {opt.title}
                            </h4>
                            {opt.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                            {opt.subtitle}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-1 transition-all shrink-0 self-center" />
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-start pt-2">
                  <button 
                    type="button"
                    onClick={handleBack} 
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 py-2 px-4 bg-slate-800 rounded-xl border border-slate-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous Step
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: BUDGET / SCALE */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider font-mono">
                    Step 4 of 5 • Engagement Scale & Investment
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display leading-tight mt-1">
                    What is your approximate monthly growth or marketing investment?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-2">
                    This allows us to tailor realistic 90-day milestone projections and squad allocation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {SPEND_OPTIONS.map((opt) => {
                    const isSelected = form.spend === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption('spend', opt.id, 5)}
                        className={`group p-5 rounded-2xl border transition-all text-left ${
                          isSelected 
                            ? 'bg-brand-indigo/20 border-brand-indigo ring-1 ring-brand-indigo' 
                            : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-extrabold text-white text-base group-hover:text-brand-teal transition-colors">
                            {opt.label}
                          </h4>
                          <span className="w-6 h-6 rounded-full bg-slate-700/60 border border-slate-600 flex items-center justify-center text-xs text-slate-300 group-hover:bg-brand-teal group-hover:text-slate-950 transition-colors">
                            →
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                          {opt.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-start pt-2">
                  <button 
                    type="button"
                    onClick={handleBack} 
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 py-2 px-4 bg-slate-800 rounded-xl border border-slate-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous Step
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: CONTACT & REVEAL STRATEGY */}
            {step === 5 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider font-mono">
                    Final Step • Customized Growth Blueprint
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display leading-tight mt-1">
                    Where should we deliver your tailored diagnostic & strategy?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-2">
                    We will instantly analyze your domain, generate a personalized solution recommendation, and unlock a 90-day growth roadmap.
                  </p>
                </div>

                <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Selected Parameters:</span>
                      <strong className="text-white font-semibold">
                        {getIndustryLabel(form.industry)} • {getGoalLabel(form.goal)}
                      </strong>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full">
                    98% Engine Fit
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alex Rivera"
                      value={form.name}
                      onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-brand-teal rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      Business Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-brand-teal rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      Website URL or Domain *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. https://mybrand.com"
                      value={form.website}
                      onChange={(e) => setForm(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-brand-teal rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +1 555-0199 or +91 8318114492"
                      value={form.phone}
                      onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-brand-teal rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                  <button 
                    type="button"
                    onClick={handleBack} 
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 py-2.5 px-4 bg-slate-800 rounded-xl border border-slate-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous Step
                  </button>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange hover:to-amber-400 text-white font-bold py-3.5 px-7 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> Calculating Strategy...
                      </>
                    ) : (
                      <>
                        Generate Tailored Growth Plan <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        ) : (
          /* =========================================================================
             RESULTS & RECOMMENDATIONS DASHBOARD
             ========================================================================= */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 py-2"
          >
            {/* Top diagnostic header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DIAGNOSTIC COMPLETE • {recommendation.matchScore}% STRATEGIC MATCH</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                Your Tailored AKGLS Growth Blueprint
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
                Prepared specifically for <strong className="text-white font-semibold">{form.website}</strong> in the <strong className="text-brand-teal font-semibold">{getIndustryLabel(form.industry)}</strong> space aiming to <strong className="text-white font-semibold">{getGoalLabel(form.goal).toLowerCase()}</strong>.
              </p>
            </div>

            {/* Primary Recommended Service Card */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900 border-2 border-brand-indigo/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-brand-indigo/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/60 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800/80 px-2.5 py-0.5 rounded-full font-mono">
                      #1 RECOMMENDED CORE SOLUTION
                    </span>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-0.5 rounded-full">
                      {recommendation.primaryService.badge}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    {recommendation.primaryService.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    {recommendation.primaryService.tagline}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-3xl font-black text-brand-teal font-display">
                    {recommendation.matchScore}%
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                    Algorithmic Fit
                  </div>
                </div>
              </div>

              {/* Rationale description */}
              <div className="py-5 border-b border-slate-700/60 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                <strong className="text-brand-teal font-semibold block mb-1">
                  Why this solution fits your bottleneck:
                </strong>
                {recommendation.rationale}
              </div>

              {/* Key Deliverables */}
              <div className="pt-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-indigo" /> Included Immediate Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {recommendation.primaryService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Service & 90-Day Roadmap Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Secondary Service */}
              <div className="lg:col-span-5 bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Complementary Multiplier
                  </span>
                </div>
                <h5 className="font-bold text-white text-base font-display">
                  {recommendation.secondaryService.title}
                </h5>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {recommendation.secondaryService.description}
                </p>
                {onNavigateToService && (
                  <button
                    onClick={() => onNavigateToService(recommendation.secondaryService.targetServicePage)}
                    className="text-xs font-bold text-brand-teal hover:text-teal-300 flex items-center gap-1 pt-1"
                  >
                    View details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* 90-Day Roadmap Preview */}
              <div className="lg:col-span-7 bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-indigo" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Projected 90-Day Execution Timeline
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {recommendation.roadmapPhases.map((phase, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-left space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-brand-indigo font-bold font-mono">
                        <span>{phase.phase}</span>
                        <span className="text-slate-500 font-normal">{phase.timeframe}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight">
                        {phase.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTION CALLOUTS (CTAs) */}
            <div className="bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-5 text-center">
              <div className="space-y-1 max-w-xl mx-auto">
                <h4 className="text-lg sm:text-xl font-extrabold text-white font-display">
                  Ready to Implement Your Custom Growth Blueprint?
                </h4>
                <p className="text-slate-400 text-xs font-light">
                  Speak directly with an AKGLS growth director to review your crawl architecture, confirm scope, and initiate campaign onboarding.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {/* 1. Book Free Strategy Consultation */}
                <button
                  type="button"
                  onClick={() => {
                    if (onBookConsultation) {
                      onBookConsultation({
                        name: form.name,
                        email: form.email,
                        website: form.website,
                        companyName: form.companyName || form.website,
                        phone: form.phone,
                        goal: getGoalLabel(form.goal),
                        spend: form.spend,
                        recommendedService: recommendation.primaryService.title,
                        notes: `Industry: ${getIndustryLabel(form.industry)} | Challenge: ${getChallengeLabel(form.challenge)}`
                      });
                    } else {
                      const formEl = document.querySelector('#audit-form');
                      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold py-3 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20"
                >
                  <Calendar className="w-4 h-4" /> Book Strategy Consultation
                </button>

                {/* 2. Direct WhatsApp Discussion */}
                <a
                  href={`https://wa.me/918318114492?text=${whatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </a>

                {/* 3. Explore Dedicated Service Page */}
                {onNavigateToService && (
                  <button
                    type="button"
                    onClick={() => onNavigateToService(recommendation.primaryService.targetServicePage)}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold py-3 px-5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore {recommendation.primaryService.title.split('&')[0]}</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-teal" />
                  </button>
                )}

                {/* 4. Retake Quiz */}
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="text-slate-400 hover:text-white text-xs font-semibold py-3 px-4 flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Retake Quiz
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-light flex items-center justify-center gap-4 flex-wrap">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Non-Disclosure Protected
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-teal" /> Direct: +91 831 811 4492
                </span>
                <span>•</span>
                <span>No obligation • 100% Free Strategy Session</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

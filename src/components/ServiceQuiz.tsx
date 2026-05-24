import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, Bot, Database, Zap, FileText, CheckCircle2 } from 'lucide-react';
import { QuizState } from '../types';

export default function ServiceQuiz() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QuizState>({
    friction: '',
    spend: '',
    tech: '',
    email: '',
    website: ''
  });
  const [isDone, setIsDone] = useState(false);

  const saveAnswer = (field: keyof QuizState, value: string, nextStep: number) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setStep(nextStep);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.email && form.website) {
      setIsDone(true);
    }
  };

  const resetQuiz = () => {
    setForm({
      friction: '',
      spend: '',
      tech: '',
      email: '',
      website: ''
    });
    setStep(1);
    setIsDone(false);
  };

  const progressPercent = () => {
    if (isDone) return 100;
    return (step / 4) * 100;
  };

  return (
    <div id="service-quiz" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl relative overflow-hidden text-left max-w-4xl mx-auto">
      <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-indigo/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Progress top indicator panel */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
        <span className="text-[10px] sm:text-xs font-black text-slate-400 font-mono uppercase tracking-widest flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-indigo-500" /> diagnostic flow
        </span>
        <span className="text-xs font-bold text-brand-indigo font-mono">
          {isDone ? 'COMPLETE' : `QUESTION ${step}/4`}
        </span>
      </div>

      {/* Ticker bar line */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full mb-6 overflow-hidden">
        <motion.div 
          initial={{ width: '25%' }}
          animate={{ width: `${progressPercent()}%` }}
          className="h-full bg-gradient-to-r from-brand-indigo to-brand-purple"
        />
      </div>

      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Step 1: Channel pain point */}
            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-lg sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
                  Which acquisition channel represents the highest operational friction for your team?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <button 
                    onClick={() => saveAnswer('friction', 'organic_seo', 2)}
                    className="group flex items-start gap-4 p-5 border border-slate-200 hover:border-brand-indigo hover:bg-slate-50/50 rounded-2xl transition-all text-left"
                  >
                    <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold text-xs flex items-center justify-center shrink-0">A</span>
                    <div>
                      <h4 className="font-bold text-brand-navy text-[14px]">Organic Search engine traffic</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal font-light">We lack visibility on key high-intent phrases and have low organic reach.</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => saveAnswer('friction', 'paid_ppc', 2)}
                    className="group flex items-start gap-4 p-5 border border-slate-200 hover:border-brand-indigo hover:bg-slate-50/50 rounded-2xl transition-all text-left"
                  >
                    <span className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 font-extrabold text-xs flex items-center justify-center shrink-0">B</span>
                    <div>
                      <h4 className="font-bold text-brand-navy text-[14px]">Paid PPC / search spending</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal font-light">We are wasting ad budget on poor keywords and low bid structures.</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => saveAnswer('friction', 'conversion_rate', 2)}
                    className="group flex items-start gap-4 p-5 border border-slate-200 hover:border-brand-indigo hover:bg-slate-50/50 rounded-2xl transition-all text-left"
                  >
                    <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 font-extrabold text-xs flex items-center justify-center shrink-0">C</span>
                    <div>
                      <h4 className="font-bold text-brand-navy text-[14px]">Website conversion rate (CRO)</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal font-light">We receive decent visits but suffer low conversion to checkout actions.</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => saveAnswer('friction', 'ai_geo', 2)}
                    className="group flex items-start gap-4 p-5 border border-slate-200 hover:border-brand-indigo hover:bg-slate-50/50 rounded-2xl transition-all text-left"
                  >
                    <span className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 font-extrabold text-xs flex items-center justify-center shrink-0">D</span>
                    <div>
                      <h4 className="font-bold text-brand-navy text-[14px]">AI Search citation & recommendations</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal font-light">Bots do not suggest our product when queried about leading options.</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Budget */}
            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-lg sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
                  What is your average monthly advertising or search marketing investment?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <button 
                    onClick={() => saveAnswer('spend', 'budget_low', 3)}
                    className="p-6 border border-slate-200 hover:border-brand-indigo hover:bg-slate-50 rounded-2xl text-center transition-all"
                  >
                    <h4 className="font-extrabold text-brand-navy text-base font-display">Under $5k / mo</h4>
                    <p className="text-xs text-slate-500 mt-1.5 font-light leading-relaxed">Local city targeting with manual local business map reviews.</p>
                  </button>

                  <button 
                    onClick={() => saveAnswer('spend', 'budget_mid', 3)}
                    className="p-6 border border-slate-200 hover:border-brand-indigo hover:bg-indigo-50/10 rounded-2xl text-center transition-all"
                  >
                    <h4 className="font-extrabold text-brand-navy text-base font-display">$5k - $25k / mo</h4>
                    <p className="text-xs text-slate-500 mt-1.5 font-light leading-relaxed">Requires multi-keyword dynamic optimization sets & copywriting.</p>
                  </button>

                  <button 
                    onClick={() => saveAnswer('spend', 'budget_high', 3)}
                    className="p-6 border border-slate-200 hover:border-brand-indigo hover:bg-slate-50 rounded-2xl text-center transition-all"
                  >
                    <h4 className="font-extrabold text-brand-navy text-base font-display">$25k+ / mo</h4>
                    <p className="text-xs text-slate-500 mt-1.5 font-light leading-relaxed">Enterprise scopes with custom schema MARKUP sets & API attributes.</p>
                  </button>
                </div>
                <div className="flex justify-start">
                  <button 
                    onClick={handleBack} 
                    className="text-xs font-bold text-slate-400 hover:text-slate-700 flex items-center gap-1 py-1 px-3 bg-slate-100 rounded-lg"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Technology Infrastructure CMS */}
            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-lg sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
                  What core technology platform is your website built on?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <button 
                    onClick={() => saveAnswer('tech', 'wordpress', 4)}
                    className="p-5 border border-slate-200 hover:border-indigo-500 rounded-2xl text-center transition-all space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-500 font-bold text-sm mx-auto flex items-center justify-center">WP</div>
                    <span className="block text-xs font-bold text-slate-700">WordPress</span>
                  </button>

                  <button 
                    onClick={() => saveAnswer('tech', 'shopify', 4)}
                    className="p-5 border border-slate-200 hover:border-indigo-500 rounded-2xl text-center transition-all space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-500 font-bold text-sm mx-auto flex items-center justify-center">SF</div>
                    <span className="block text-xs font-bold text-slate-700">Shopify Plus</span>
                  </button>

                  <button 
                    onClick={() => saveAnswer('tech', 'custom_js', 4)}
                    className="p-5 border border-slate-200 hover:border-indigo-500 rounded-2xl text-center transition-all space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-brand-purple font-bold text-sm mx-auto flex items-center justify-center">JS</div>
                    <span className="block text-xs font-bold text-slate-700">Custom React</span>
                  </button>

                  <button 
                    onClick={() => saveAnswer('tech', 'webflow_other', 4)}
                    className="p-5 border border-slate-200 hover:border-indigo-500 rounded-2xl text-center transition-all space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-50 text-brand-orange font-bold text-sm mx-auto flex items-center justify-center">CMS</div>
                    <span className="block text-xs font-bold text-slate-700">Other / SaaS</span>
                  </button>
                </div>
                <div className="flex justify-start">
                  <button 
                    onClick={handleBack} 
                    className="text-xs font-bold text-slate-400 hover:text-slate-700 flex items-center gap-1 py-1 px-3 bg-slate-100 rounded-lg"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Contact details to unlock strategy */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
                    Where should we transmit your customized strategic audit playbook?
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal font-light">
                    Our digital scoring engine combines your diagnostic answers to map target traffic curves and identify structural schema bottlenecks.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Work email address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. founder@company.com"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Website URL</label>
                    <input 
                      type="url" 
                      required
                      placeholder="e.g. hpps://mycompany.com"
                      value={form.website}
                      onChange={(e) => setForm(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-brand-indigo rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button 
                    type="button"
                    onClick={handleBack} 
                    className="text-xs font-bold text-slate-400 hover:text-slate-700 flex items-center gap-1 py-1 px-3 bg-slate-100 rounded-lg"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  
                  <button 
                    type="submit" 
                    className="bg-brand-orange hover:bg-opacity-95 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/15"
                  >
                    Unlock Strategic Diagnostic <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        ) : (
          /* Results calculated successfully */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-brand-emerald flex items-center justify-center text-3xl mx-auto border border-brand-emerald/20 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-brand-navy">
                Playbook Customization Completed!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                We have processed your bottlenecks for the tech stack <strong className="font-bold text-brand-indigo uppercase">{form.tech}</strong>. Our campaign managers have initiated a schema structural review for <strong className="text-slate-900 font-bold">{form.website}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-slate-500 max-w-lg mx-auto text-left text-xs space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-brand-navy">
                <Bot className="w-4 h-4 text-purple-600" /> Projected Recommendations:
              </div>
              <ul className="space-y-2 font-semibold">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> Address structured relationship schema mappings immediately.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> Introduce local maps JSON properties to secure hyper-regional lists.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> Optimize for LLM Retrieval (RAG systems) context windows.</li>
              </ul>
              <p className="text-[10px] text-slate-400 font-light pt-2 leading-relaxed border-t border-slate-100">
                A secure downloadable link containing complete technical audits has been generated. Check your email inbox in 8-10 minutes.
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button 
                onClick={resetQuiz}
                className="text-xs bg-slate-900 hover:bg-slate-950 text-white font-bold py-2.5 px-6 rounded-xl transition-all"
              >
                Reset Diagnostic Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bot, AlertTriangle, CheckCircle, HelpCircle, FileText } from 'lucide-react';

export default function ContentAnalyzer() {
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<{
    score: number;
    wordCount: number;
    keywordDensity: string;
    geoCitations: number;
    tips: string[];
  } | null>(null);

  const handleAnalyze = (e: FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsAnalyzing(true);
    setAnalysis(null);

    setTimeout(() => {
      // Basic client-side mock linguistics calculations
      const words = content.trim().split(/\s+/).filter(Boolean);
      const wordCount = words.length;

      // Check keywords like seo, ai, dev, marketing, local
      const mentions = content.match(/(seo|ai|artificial intelligence|marketing|campaign|development|shopify|wordpress|local|google|chats)/gi);
      const mentionCount = mentions ? mentions.length : 0;
      const density = wordCount > 0 ? ((mentionCount / wordCount) * 100).toFixed(1) + "%" : "0%";

      // Compute custom parameters
      let computedScore = Math.min(Math.round(40 + (wordCount / 10) + (mentionCount * 4)), 97);
      if (wordCount < 100) computedScore = Math.max(computedScore - 25, 20);

      const geoCitations = Math.round(computedScore * 0.9);

      const tips: string[] = [];
      if (wordCount < 250) {
        tips.push("Critical Length: Articles below 350 words rarely secure high organic rankings. Expand by adding industry case points.");
      }
      if (mentionCount < 4) {
        tips.push("Low Topical Focus: Synthesize semantic search phrases like 'technical sitemaps' or 'AEO generative queries' into headings.");
      }
      if (!content.toLowerCase().includes("json-ld") && !content.toLowerCase().includes("schema")) {
        tips.push("Zero Schema Mentions: Embed structured JSON-LD script properties within product templates to help LLM retrievals.");
      }
      if (tips.length === 0) {
        tips.push("Topical Focus is Good! Establish explicit links back to leading authority databases to verify factual entities.");
      }

      setAnalysis({
        score: computedScore,
        wordCount,
        keywordDensity: density,
        geoCitations,
        tips
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div id="content-analyzer" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl text-left max-w-5xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Input Text Form */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-xs text-brand-purple font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-purple" /> Free Agency Optimizer
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
              AI Copywriting & GEO Analyzer
            </h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Paste your marketing sales copy, campaign blogs, or product pages below to examine their citation readiness across conversational search models.
            </p>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <textarea 
              rows={7}
              placeholder="Paste article drafts, landing page headlines, or newsletter blocks here (minimum 15 words)..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 focus:border-brand-indigo rounded-2xl p-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            
            <button 
              type="submit"
              disabled={isAnalyzing || !content.trim()}
              className="w-full bg-brand-navy hover:bg-brand-slate text-white font-extrabold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow DISABLED:opacity-50 cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <Bot className="w-4 h-4 animate-spin text-brand-teal" /> Analyzing Semantic Weights...
                </>
              ) : (
                <>
                  <Bot className="w-4 h-4 text-brand-teal" /> Evaluate AI Search Citations Rank
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Analysis Panel */}
        <div className="lg:col-span-6 h-full min-h-[300px]">
          <AnimatePresence mode="wait">
            {analysis ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 h-full flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Analysis Complete</span>
                    <span className="text-[10px] bg-brand-orange/10 text-brand-orange font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                      GEO Evaluator 1.0
                    </span>
                  </div>

                  {/* Circular & comparative scores row */}
                  <div className="grid grid-cols-3 gap-3 text-center items-center">
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">SEO Score</span>
                      <div className="text-2xl font-black font-display text-brand-indigo mt-1">
                        {analysis.score}<span className="text-xs font-medium text-slate-400">/100</span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">Keywords density</span>
                      <div className="text-base font-black font-mono text-brand-purple mt-2">
                        {analysis.keywordDensity}
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">GEO Citation %</span>
                      <div className="text-2xl font-black font-display text-brand-teal mt-1">
                        {analysis.geoCitations}%
                      </div>
                    </div>
                  </div>

                  {/* Recommendations list */}
                  <div className="mt-4 space-y-2 text-xs">
                    <p className="font-bold text-slate-700 flex items-center gap-1.5 pt-1">
                      <AlertTriangle className="w-4 h-4 text-brand-orange shrink-0" /> Focus Recommendations:
                    </p>
                    <div className="space-y-1.5 pl-0.5">
                      {analysis.tips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11.5px] text-slate-600 leading-normal font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 font-mono text-[9px] text-slate-400 flex justify-between items-center">
                  <span>Draft Length: {analysis.wordCount} words</span>
                  <a href="#audit-form" className="text-brand-indigo font-bold hover:underline">Get Pro Schema Review →</a>
                </div>
              </motion.div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <HelpCircle className="w-12 h-12 text-slate-300" />
                <h4 className="font-bold text-brand-navy hover:text-indigo-600 font-display transition-colors">Results Diagnostics Console</h4>
                <p className="text-xs text-slate-500 font-light max-w-sm leading-relaxed">
                  Submit company blog entries, sales emails, or marketing headers. The LLM console will evaluate target weights immediately.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

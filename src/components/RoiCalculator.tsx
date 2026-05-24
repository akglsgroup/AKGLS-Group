import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Zap, LineChart, FileText, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [traffic, setTraffic] = useState(50000);
  const [conversion, setConversion] = useState(1.5);
  const [orderValue, setOrderValue] = useState(150);

  const [currentRevenue, setCurrentRevenue] = useState(11250);
  const [projectedRevenue, setProjectedRevenue] = useState(33750);
  const [monthlyLift, setMonthlyLift] = useState(22500);

  useEffect(() => {
    // Current Monthly revenue estimation
    const currentRev = Math.round(traffic * (conversion / 100) * orderValue);
    setCurrentRevenue(currentRev);

    // Projected calculations based on AKGLS performance:
    // - 1.5x traffic scaling boost
    // - 2x conversion rate optimisation efficiency limit (capped at max 10.0%)
    const projTraffic = traffic * 1.5;
    const projConv = Math.min(conversion * 2.0, 10.0);
    const projRev = Math.round(projTraffic * (projConv / 100) * orderValue);
    setProjectedRevenue(projRev);

    // Monthly lift
    setMonthlyLift(projRev - currentRev);
  }, [traffic, conversion, orderValue]);

  return (
    <div id="roi-calculator" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl overflow-hidden text-left max-w-5xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Input Segment */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-xs text-brand-indigo font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-brand-indigo" /> AKGLS Business Engine
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
              Estimate Your Website Growth ROI
            </h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Adjust the parameter sliders to display current baseline acquisitions and project campaign growth trajectories.
            </p>
          </div>

          <div className="pt-2 space-y-6">
            {/* Slider 1: Traffic */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Current Monthly Website Traffic</span>
                <span className="text-brand-orange text-sm font-mono font-bold bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                  {traffic.toLocaleString()} visits
                </span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full accent-brand-orange bg-slate-100 rounded-lg h-2 cursor-pointer focus:outline-none"
              />
            </div>

            {/* Slider 2: Conversion Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Average Website Conversion Rate (%)</span>
                <span className="text-brand-indigo text-sm font-mono font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                  {conversion.toFixed(1)}%
                </span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="10.0" 
                step="0.1"
                value={conversion} 
                onChange={(e) => setConversion(Number(e.target.value))}
                className="w-full accent-brand-indigo bg-slate-100 rounded-lg h-2 cursor-pointer focus:outline-none"
              />
            </div>

            {/* Slider 3: Contract/Lead Value */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Average Value Per Contract / Lead / Sale ($)</span>
                <span className="text-brand-teal text-sm font-mono font-bold bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                  ${orderValue.toLocaleString()}
                </span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="5000" 
                step="10"
                value={orderValue} 
                onChange={(e) => setOrderValue(Number(e.target.value))}
                className="w-full accent-brand-teal bg-slate-100 rounded-lg h-2 cursor-pointer focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Outputs visual representation panel */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between relative">
          <div className="absolute right-4 top-4 opacity-5 pointer-events-none">
            <LineChart className="w-24 h-24 stroke-white" />
          </div>

          <div className="space-y-1">
            <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black block">
              Estimated Current Monthly Acquisitions:
            </span>
            <div className="text-2xl font-mono font-extrabold text-slate-300">
              ${currentRevenue.toLocaleString()}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-850 space-y-2.5">
            <span className="text-[10px] text-brand-teal uppercase tracking-widest font-black flex items-center gap-1">
              <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" /> Projected Compound Performance
            </span>
            
            <div className="text-4xl font-mono font-black text-white leading-none">
              ${projectedRevenue.toLocaleString()}
            </div>

            <p className="text-[10.5px] text-slate-400 font-light leading-relaxed">
              Calculations assume a conservative <strong className="text-brand-teal">1.5X traffic boost</strong> matched to a <strong className="text-brand-indigo">2.0X conversion rate lift</strong> across 6 months of campaign management.
            </p>
          </div>

          <div className="p-3 bg-gradient-to-r from-brand-indigo/20 to-brand-purple/20 border border-brand-indigo/30 rounded-xl flex items-center justify-between gap-3">
            <div>
              <span className="text-[9px] text-slate-300 uppercase font-bold tracking-wider">Estimated Monthly Lift Value</span>
              <div className="text-lg font-mono font-black text-brand-teal shrink-0">
                +${monthlyLift.toLocaleString()}
              </div>
            </div>

            <a 
              href="#audit-form" 
              className="bg-brand-orange hover:bg-opacity-95 text-white font-extrabold uppercase py-2 px-3 rounded-lg text-[10px] transition-all tracking-wider shadow"
            >
              Claim Strategy Slot <ArrowRight className="w-3 h-3 inline ml-1" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

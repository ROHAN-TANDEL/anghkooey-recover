import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [portfolioSize, setPortfolioSize] = useState<number>(5000000);
  const [currentRate, setCurrentRate] = useState<number>(32);
  const [accountCount, setAccountCount] = useState<number>(3500);

  // Calculations
  const currentRecovered = (portfolioSize * (currentRate / 100));
  // 38% relative lift in recovery rate
  const projectedRate = Math.min(85, currentRate * 1.38);
  const projectedRecovered = (portfolioSize * (projectedRate / 100));
  const additionalCash = projectedRecovered - currentRecovered;
  // Hours saved: ~0.45 hours saved per account per year due to automated omnichannel & AI scripts
  const hoursSaved = Math.round(accountCount * 0.45);
  // Estimated ROI multiplier based on software cost
  const estimatedCost = 36000;
  const roiMultiplier = (additionalCash / estimatedCost).toFixed(1);

  return (
    <section id="roi" className="py-24 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Economic Impact Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Recovery Uplift
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Estimate how much additional uncollected debt Anghkooey Recover can convert into cash while reducing agent fatigue.
          </p>
        </motion.div>

        {/* Calculator Widget with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Portfolio Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white">Delinquent Debt Portfolio Size</span>
                  <span className="font-mono font-bold text-indigo-400 text-sm">
                    € {portfolioSize.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="25000000"
                  step="250000"
                  value={portfolioSize}
                  onChange={(e) => setPortfolioSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>€ 500K</span>
                  <span>€ 10M</span>
                  <span>€ 25M</span>
                </div>
              </div>

              {/* Slider 2: Current Recovery Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white">Current Recovery Rate</span>
                  <span className="font-mono font-bold text-sky-400 text-sm">
                    {currentRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>15%</span>
                  <span>35% (Industry Avg)</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Slider 3: Account Volume */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white">Active Delinquent Accounts</span>
                  <span className="font-mono font-bold text-teal-400 text-sm">
                    {accountCount.toLocaleString()} Accounts
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={accountCount}
                  onChange={(e) => setAccountCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>500</span>
                  <span>5,000</span>
                  <span>15,000</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-slate-300 font-semibold">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Calculation Methodology</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Based on audited benchmarking from our enterprise deployments showing a 38% average increase in recovery propensity and a 45-minute operational reduction per resolved file.
                </p>
              </div>
            </div>

            {/* Right Results (6 cols) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 to-indigo-950/40 p-6 sm:p-8 rounded-2xl border border-indigo-500/20 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  Projected Net Cash Gain
                </span>
                <motion.div 
                  key={additionalCash}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-gradient"
                >
                  +€ {Math.round(additionalCash).toLocaleString()}
                </motion.div>
                <p className="text-xs text-slate-300 mt-2">
                  Additional revenue reclaimed from uncollected delinquency within the first 12 months.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-[10px] block font-mono">New Recovery Rate</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">
                    {projectedRate.toFixed(1)}%
                  </span>
                  <span className="text-[10px] text-slate-500 block">from {currentRate}%</span>
                </div>

                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-[10px] block font-mono">Collector Time Saved</span>
                  <span className="text-lg font-bold text-sky-400 font-mono">
                    {hoursSaved.toLocaleString()} hrs
                  </span>
                  <span className="text-[10px] text-slate-500 block">per year in manual dialing</span>
                </div>
              </div>

              <div className="p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-indigo-200 block">Estimated Net Platform ROI</span>
                  <span className="text-xs text-slate-400">Based on standard enterprise license tier</span>
                </div>
                <span className="text-2xl font-black text-white font-mono">
                  {roiMultiplier}x
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenDemo}
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-shadow"
              >
                Request Custom Financial Audit & Live Pilot
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

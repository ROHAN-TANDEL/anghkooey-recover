import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Brain, Send, Headphones, ShieldCheck, 
  ArrowRight, CheckCircle2, ChevronRight, Eye, Sparkles, Layers, FileSpreadsheet
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../../data/showcaseData';
import { WorkflowStep } from '../../types';

interface HowItWorksFlowProps {
  onOpenScreenshot: (imageSrc: string, title: string) => void;
}

export const HowItWorksFlow: React.FC<HowItWorksFlowProps> = ({ onOpenScreenshot }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Mechanics & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Anghkooey Recover Operates
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            From raw delinquency ingestion to closed payment plans: experience the 5-stage automated resolution loop designed for maximum recovery and zero compliance risk.
          </p>
        </motion.div>

        {/* Step Navigation Pill Carousel with Animated Active Marker */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <motion.button
                key={step.step}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-gradient-to-b from-indigo-900/60 to-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    STEP 0{step.step}
                  </span>
                  <div className={isActive ? 'text-indigo-400' : 'text-slate-500'}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>
                <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}>
                  {step.title}
                </h4>
                {isActive && (
                  <motion.div 
                    layoutId="stepArrow"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500 rotate-45"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown with AnimatePresence */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStepIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Stage Explanation & Specs */}
              <div className="lg:col-span-6 p-6 sm:p-10 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-800">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 mb-2">
                    <span>STAGE {activeStep.step} OF 5</span>
                    <span>•</span>
                    <span>{activeStep.subtitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeStep.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {activeStep.description}
                  </p>
                </div>

                {/* Technical Mechanics Spec Box */}
                <div className="space-y-3.5 bg-slate-950/70 p-5 rounded-xl border border-slate-800 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-sky-400 tracking-wider block mb-1">
                      System Input
                    </span>
                    <p className="text-slate-300 font-mono">{activeStep.inputData}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-mono font-bold text-indigo-400 tracking-wider block mb-1">
                      AI Autonomous Behavior
                    </span>
                    <p className="text-slate-300 leading-relaxed">{activeStep.aiBehavior}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider block mb-1">
                      Human-in-the-Loop Safeguard
                    </span>
                    <p className="text-slate-300">{activeStep.humanRole}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 tracking-wider block mb-1">
                      Definitive Outcome
                    </span>
                    <p className="text-emerald-300 font-semibold">{activeStep.outcome}</p>
                  </div>
                </div>

                {/* Feature Highlights Pills */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    Key Capabilities in This Phase:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeStep.featuresHighlight.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Navigation Controls */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                    className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous Step
                  </button>

                  <span className="text-xs font-mono text-slate-500">
                    Step {activeStepIndex + 1} / {WORKFLOW_STEPS.length}
                  </span>

                  <button
                    disabled={activeStepIndex === WORKFLOW_STEPS.length - 1}
                    onClick={() => setActiveStepIndex(Math.min(WORKFLOW_STEPS.length - 1, activeStepIndex + 1))}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center space-x-1"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Actual App Screen Visual */}
              <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-10 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Production Screenshot</span>
                    </div>
                    <button
                      onClick={() => onOpenScreenshot(activeStep.screenshot, activeStep.title)}
                      className="inline-flex items-center space-x-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Expand High-Res</span>
                    </button>
                  </div>

                  {/* Screenshot Frame with Zoom Hover */}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    onClick={() => onOpenScreenshot(activeStep.screenshot, activeStep.title)}
                    className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer shadow-xl transition-all duration-300 hover:border-indigo-500/60"
                  >
                    <img
                      src={activeStep.screenshot}
                      alt={activeStep.title}
                      className="w-full h-auto object-cover max-h-[380px] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-medium backdrop-blur-sm border border-white/20">
                        Click to View Full Screen
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Informative Callout */}
                <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-start space-x-3">
                  <Sparkles className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white font-medium">Integrated Engine:</strong> This screen interacts dynamically with the backend API, syncing data across PostgreSQL ledgers and Twilio/ElevenLabs webhooks in real-time.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

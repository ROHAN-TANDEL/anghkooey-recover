import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Play, Shield, CheckCircle, TrendingUp, 
  Users, CreditCard, MessageSquare, PhoneCall, Bot, Layers, ArrowUpRight
} from 'lucide-react';
import { PRODUCT_INFO } from '../../data/showcaseData';

interface HeroSectionProps {
  onScrollTo: (sectionId: string) => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo, onOpenDemo }) => {
  const [activePreviewTab, setActivePreviewTab] = useState<'ai' | 'cockpit' | 'payment' | 'customers'>('ai');

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient glowing orbs with subtle floating animations */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 20, 0],
          y: [0, -25, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/30 via-sky-500/20 to-teal-400/15 blur-[130px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 right-10 w-80 h-80 bg-violet-600/20 blur-[110px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
          y: [0, 30, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/15 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 shadow-lg shadow-indigo-500/10 text-xs text-indigo-300 backdrop-blur-md hover:border-indigo-500/50 transition-colors cursor-pointer group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="font-semibold tracking-wide uppercase text-[11px]">Anghkooey Recover v2.4</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 group-hover:text-white transition-colors">Autonomous Debt Resolution Engine</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Hero Headline & Subtitle with Staggered Entrance */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] sm:leading-[1.1]"
          >
            Empathetic, Autonomous & Compliant{' '}
            <span className="text-gradient">Debt Recovery Intelligence</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto"
          >
            Transform overdue accounts into mutually agreed repayment plans. Anghkooey Recover pairs <span className="text-white font-medium">Predictive Propensity-to-Pay AI</span> with <span className="text-white font-medium">ElevenLabs Voice</span>, <span className="text-white font-medium">Twilio Omnichannel</span>, and a structured <span className="text-white font-medium">4-step Collector Cockpit</span>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onScrollTo('simulator')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-600 hover:from-indigo-600 hover:to-sky-700 text-white shadow-xl shadow-indigo-500/30 transition-shadow duration-200"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Live Interactive Simulator</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, borderColor: '#64748b' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onScrollTo('how-it-works')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-all duration-200"
            >
              <span>Explore How It Works</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onScrollTo('screenshots')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-400 hover:text-white transition-colors"
            >
              <span>View Screenshots</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Live Interactive Product Cockpit Preview with Animated Border & Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto relative"
        >
          {/* Floating Telemetry Pill Left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -left-12 top-20 z-20 items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 shadow-2xl backdrop-blur-md text-xs font-mono"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <span className="text-[10px] text-slate-400 block">AI Confidence</span>
              <span className="text-white font-bold">72% Propensity Score</span>
            </div>
          </motion.div>

          {/* Floating Telemetry Pill Right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute -right-12 bottom-20 z-20 items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-sky-500/40 shadow-2xl backdrop-blur-md text-xs font-mono"
          >
            <Shield className="w-4 h-4 text-sky-400" />
            <div>
              <span className="text-[10px] text-slate-400 block">Compliance Guard</span>
              <span className="text-white font-bold">FDCPA & TCPA Safe</span>
            </div>
          </motion.div>

          <div className="rounded-2xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-700/20 to-slate-800/40 shadow-2xl shadow-indigo-950/60 glow-indigo">
            <div className="bg-[#0f172a] rounded-[15px] border border-slate-800 overflow-hidden">
              {/* Window Titlebar */}
              <div className="bg-[#0b1120] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    anghkooey_recover :: agent-console :: customer/CUST-8821
                  </span>
                </div>

                {/* Tab Switchers with Animated Highlight */}
                <div className="flex items-center space-x-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs">
                  {(['ai', 'cockpit', 'payment', 'customers'] as const).map((tab) => {
                    const label = tab === 'ai' ? 'AI Recommendation (72%)' : tab === 'cockpit' ? '4-Step Cockpit' : tab === 'payment' ? 'Payment Plan' : 'Registry View';
                    return (
                      <button
                        key={tab}
                        onClick={() => setActivePreviewTab(tab)}
                        className={`relative px-3 py-1 rounded-md font-medium transition-all ${
                          activePreviewTab === tab 
                            ? 'text-white' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {activePreviewTab === tab && (
                          <motion.div
                            layoutId="heroTabHighlight"
                            className="absolute inset-0 bg-indigo-600 rounded-md shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                          />
                        )}
                        <span className="relative z-10">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Viewport Display with AnimatePresence */}
              <div className="p-6 bg-[#090d16]">
                <AnimatePresence mode="wait">
                  {activePreviewTab === 'ai' && (
                    <motion.div 
                      key="ai"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                    >
                      {/* Left: Customer Info */}
                      <div className="lg:col-span-4 bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-bold text-base">John Doe</h3>
                            <p className="text-xs text-slate-400 font-mono">ID: CUST-8821 • Freelance Designer</p>
                          </div>
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Medium Risk
                          </span>
                        </div>

                        <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-slate-400 block">Current Balance</span>
                            <span className="text-white font-bold text-sm">€ 3,450.00</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Overdue Age</span>
                            <span className="text-rose-400 font-bold text-sm">62 Days</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Original Loan</span>
                            <span className="text-slate-300 font-semibold">€ 4,000.00</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Already Paid</span>
                            <span className="text-emerald-400 font-semibold">€ 550.00</span>
                          </div>
                        </div>

                        <div className="p-3 bg-indigo-950/40 rounded-lg border border-indigo-800/40 text-xs">
                          <span className="text-indigo-300 font-medium block mb-1">Recommended Plan</span>
                          <p className="text-slate-300">4 Monthly Installments of <strong className="text-white">€862.50</strong></p>
                        </div>
                      </div>

                      {/* Right: AI Recovery Bar & Strategy */}
                      <div className="lg:col-span-8 bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4">
                        {/* 72% Probability Gauge with Animated Bar */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 to-indigo-950/60 border border-indigo-500/20">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                              <span className="text-xs font-bold text-white uppercase tracking-wider">AI Recovery Probability</span>
                            </div>
                            <span className="text-base font-black text-emerald-400 font-mono">72% Likelihood</span>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden p-0.5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '72%' }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                              className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 h-full rounded-full"
                            />
                          </div>
                          <p className="text-[11px] text-slate-400 mt-2">
                            High likelihood of recovery when approached with cash-flow empathy and a 4-month payment plan.
                          </p>
                        </div>

                        {/* AI Generated Message */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400 font-semibold uppercase tracking-wider">AI Suggested Empathy Message</span>
                            <span className="text-xs text-indigo-400 font-mono">1-Click Copied</span>
                          </div>
                          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed">
                            "Hi John, we understand freelancing can bring cash-flow delays. To help you clear your balance without strain, we can split your €3,450 debt into 4 manageable monthly installments of €862.50. Tap here to lock in: https://angh.ly/pay-3450"
                          </div>
                        </div>

                        {/* Checklist */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[11px]">
                          <div className="flex items-center space-x-1.5 text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>Income verified</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>FDCPA safe hours</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>Twilio SMS queued</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activePreviewTab === 'cockpit' && (
                    <motion.div 
                      key="cockpit"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                          ✓ Step 1: Call (Connected)
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/30">
                          ▶ Step 2: Discuss (Active)
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400">
                          Step 3: Agree Plan
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400">
                          Step 4: Close
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">Live Call Script Guidance</span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            "Hello John, thank you for taking the time to speak today. I can see you have been a valued customer. We want to work together on a manageable installment plan."
                          </p>
                        </div>
                        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wide">Objection Handling Cue</span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            If debtor cites delayed client invoices: <em className="text-slate-200">"We can schedule your first payment for 18 Nov after your client payment cycle."</em>
                          </p>
                        </div>
                        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Instant Plan Trigger</span>
                          <p className="text-xs text-slate-300">
                            Pre-configured: 4 installments @ €862.50.
                          </p>
                          <button 
                            onClick={() => setActivePreviewTab('payment')}
                            className="w-full py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                          >
                            Lock in Payment Terms →
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activePreviewTab === 'payment' && (
                    <motion.div 
                      key="payment"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800 gap-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold text-white">Active Plan: PLAN-001</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              Active
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">Created by Agent (Rohan) • Monthly Frequency</p>
                        </div>
                        <div className="flex items-center space-x-4 text-xs font-mono">
                          <div>
                            <span className="text-slate-400 block">Total Plan</span>
                            <span className="text-white font-bold">€ 3,450.00</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Monthly Due</span>
                            <span className="text-indigo-400 font-bold">€ 862.50</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Installments</span>
                            <span className="text-white font-bold">4 Months</span>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[10px]">
                            <tr>
                              <th className="px-4 py-2.5">#</th>
                              <th className="px-4 py-2.5">Due Date</th>
                              <th className="px-4 py-2.5">Amount</th>
                              <th className="px-4 py-2.5">Status</th>
                              <th className="px-4 py-2.5">Paid Date</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                            <tr>
                              <td className="px-4 py-2">1</td>
                              <td className="px-4 py-2 text-white">18 Nov 2026</td>
                              <td className="px-4 py-2">€ 862.50</td>
                              <td className="px-4 py-2"><span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px]">Pending</span></td>
                              <td className="px-4 py-2 text-slate-500">-</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">2</td>
                              <td className="px-4 py-2 text-white">18 Dec 2026</td>
                              <td className="px-4 py-2">€ 862.50</td>
                              <td className="px-4 py-2"><span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Scheduled</span></td>
                              <td className="px-4 py-2 text-slate-500">-</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">3</td>
                              <td className="px-4 py-2 text-white">18 Jan 2027</td>
                              <td className="px-4 py-2">€ 862.50</td>
                              <td className="px-4 py-2"><span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Scheduled</span></td>
                              <td className="px-4 py-2 text-slate-500">-</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">4</td>
                              <td className="px-4 py-2 text-white">18 Feb 2027</td>
                              <td className="px-4 py-2">€ 862.50</td>
                              <td className="px-4 py-2"><span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Scheduled</span></td>
                              <td className="px-4 py-2 text-slate-500">-</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {activePreviewTab === 'customers' && (
                    <motion.div 
                      key="customers"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block text-[10px]">Total Accounts</span>
                          <span className="text-white font-bold text-sm">12,540</span>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block text-[10px]">Total Outstanding</span>
                          <span className="text-indigo-400 font-bold text-sm">€ 3,450,230</span>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block text-[10px]">Overdue (66%)</span>
                          <span className="text-rose-400 font-bold text-sm">8,320</span>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block text-[10px]">Promise to Pay (10%)</span>
                          <span className="text-emerald-400 font-bold text-sm">1,240</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 italic text-center">
                        Interactive real-time filtering by Risk Segment, Status, Product, and Aging Days.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise KPI Bar with Staggered Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {PRODUCT_INFO.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4, borderColor: '#4f46e5' }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-gradient">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

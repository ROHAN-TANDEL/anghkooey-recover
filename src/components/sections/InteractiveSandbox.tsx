import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Play, Sparkles, Smartphone, Mail, PhoneCall, Copy, Check, 
  RotateCcw, Sliders, CheckCircle, AlertTriangle, Shield, CheckCircle2, ChevronRight
} from 'lucide-react';
import { SIMULATION_PERSONAS } from '../../data/showcaseData';
import { PersonaSimulation } from '../../types';

export const InteractiveSandbox: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<PersonaSimulation>(SIMULATION_PERSONAS[0]);
  const [months, setMonths] = useState<number>(selectedPersona.suggestedPlanMonths);
  const [tone, setTone] = useState<'empathetic' | 'professional' | 'urgent'>('empathetic');
  const [activeChannel, setActiveChannel] = useState<'sms' | 'email' | 'voice'>('sms');
  const [copied, setCopied] = useState<boolean>(false);
  const [isResolved, setIsResolved] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Dynamic calculated installment based on months
  const installmentAmount = (selectedPersona.debtAmount / months).toFixed(2);

  const handleSelectPersona = (p: PersonaSimulation) => {
    setSelectedPersona(p);
    setMonths(p.suggestedPlanMonths);
    setIsResolved(false);
  };

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateResolution = () => {
    setIsResolved(true);
    // Double confetti burst for celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);
  };

  // Tone adjusted message
  const getAdjustedMessage = () => {
    if (tone === 'empathetic') {
      return selectedPersona.sampleMessage[activeChannel === 'sms' ? 'sms' : activeChannel === 'email' ? 'emailBody' : 'voiceScript'];
    } else if (tone === 'professional') {
      if (activeChannel === 'sms') {
        return `Notice regarding Account #${selectedPersona.product.split(' ')[0]}: Balance €${selectedPersona.debtAmount} is past due. Structured plan of ${months} installments of €${installmentAmount} available: https://angh.ly/pay-now`;
      } else if (activeChannel === 'email') {
        return `Dear ${selectedPersona.name},\n\nPlease be advised that account balance of €${selectedPersona.debtAmount} remains unresolved. We have structured an installment agreement of ${months} payments of €${installmentAmount} per month. Please confirm compliance.`;
      } else {
        return `Good day ${selectedPersona.name}, calling on behalf of the recovery desk regarding your €${selectedPersona.debtAmount} outstanding balance. An approved schedule of €${installmentAmount} over ${months} months is ready for confirmation.`;
      }
    } else {
      if (activeChannel === 'sms') {
        return `URGENT: Final pre-escalation notice for ${selectedPersona.name}. Settle €${selectedPersona.debtAmount} or lock in €${installmentAmount}/mo before legal transfer today: https://angh.ly/urgent-settle`;
      } else if (activeChannel === 'email') {
        return `URGENT NOTICE OF DEFAULT - Account #${selectedPersona.product}\n\nDear ${selectedPersona.name},\n\nYour account has reached ${selectedPersona.overdueDays} days past due. Immediate remediation is mandatory. We have established a final amortized schedule of €${installmentAmount}/month for ${months} months. Failure to execute will trigger standard legal forwarding.`;
      } else {
        return `Important notification for ${selectedPersona.name}. This account is scheduled for legal escalation unless an immediate resolution of €${installmentAmount} monthly is locked in today.`;
      }
    }
  };

  return (
    <section id="simulator" className="py-24 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Product Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Test the Resolution Engine in Real-Time
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Select a delinquent debtor persona, adjust repayment terms, and watch how Anghkooey Recover computes propensity scoring and generates multi-channel outreach.
          </p>
        </motion.div>

        {/* Persona Selectors with Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {SIMULATION_PERSONAS.map((persona) => {
            const isSelected = selectedPersona.id === persona.id;
            return (
              <motion.div
                key={persona.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleSelectPersona(persona)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/15 ring-1 ring-indigo-500/50'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white text-xs">
                      {persona.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{persona.name}</h4>
                      <p className="text-[11px] text-slate-400">{persona.role}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                    persona.riskSegment === 'High' 
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      : persona.riskSegment === 'Medium'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {persona.riskSegment} Risk
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-800/80 font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Overdue Balance</span>
                    <span className="text-white font-bold">€ {persona.debtAmount.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Delinquency Age</span>
                    <span className="text-rose-400 font-bold">{persona.overdueDays} Days</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">AI Recovery Gauge:</span>
                  <span className="font-bold text-emerald-400 font-mono">{persona.propensityScore}% Likelihood</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Interactive Simulator Workspace */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Controls & AI Calculation Engine (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span>Target Account:</span>
                    <span className="text-indigo-400 font-mono">{selectedPersona.name}</span>
                  </h3>
                  <p className="text-xs text-slate-400">{selectedPersona.product}</p>
                </div>

                <button
                  onClick={() => setIsResolved(false)}
                  className="inline-flex items-center space-x-1 text-xs text-slate-400 hover:text-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset State</span>
                </button>
              </div>

              {/* Dynamic AI Propensity Bar with Framer Spring */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Real-Time Propensity-to-Pay Calculation</span>
                  </span>
                  <motion.span 
                    key={selectedPersona.propensityScore}
                    initial={{ scale: 1.2, color: '#38bdf8' }}
                    animate={{ scale: 1, color: '#34d399' }}
                    className="font-mono font-bold text-emerald-400 text-sm"
                  >
                    {selectedPersona.propensityScore}% Score
                  </motion.span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    key={selectedPersona.propensityScore}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedPersona.propensityScore}%` }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 h-full rounded-full"
                  />
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  <strong className="text-slate-300">Strategy:</strong> {selectedPersona.suggestedStrategy}
                </p>
              </div>

              {/* Repayment Plan Terms Adjuster */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-white">
                    <Sliders className="w-4 h-4 text-sky-400" />
                    <span>Simulate Payment Plan Duration</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    {months} Months
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="12"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Total Balance</span>
                    <span className="text-white font-bold">€ {selectedPersona.debtAmount.toLocaleString()}</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Monthly Installment</span>
                    <span className="text-emerald-400 font-bold">€ {installmentAmount}</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Installments</span>
                    <span className="text-sky-400 font-bold">{months} Payments</span>
                  </div>
                </div>
              </div>

              {/* Tone Modulator */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Select AI Generation Tone:
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    onClick={() => setTone('empathetic')}
                    className={`py-2 px-3 rounded-lg font-medium transition-colors border ${
                      tone === 'empathetic'
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Empathetic (Recommended)
                  </button>
                  <button
                    onClick={() => setTone('professional')}
                    className={`py-2 px-3 rounded-lg font-medium transition-colors border ${
                      tone === 'professional'
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Structured / Neutral
                  </button>
                  <button
                    onClick={() => setTone('urgent')}
                    className={`py-2 px-3 rounded-lg font-medium transition-colors border ${
                      tone === 'urgent'
                        ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Pre-Escalation Urgent
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSimulateResolution}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/20 transition-shadow"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Execute Simulated Resolution & Lock PTP</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopyMessage(getAdjustedMessage())}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 py-3 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Message'}</span>
                </motion.button>
              </div>

              <AnimatePresence>
                {isResolved && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200 flex items-start space-x-3 shadow-lg shadow-emerald-950/40"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 animate-bounce" />
                    <div>
                      <strong className="block text-white font-bold text-sm">Promise to Pay (PTP) Successfully Locked!</strong>
                      <p className="mt-1 text-emerald-300">
                        Debtor accepted {months} installments of €{installmentAmount}/mo. Scheduled automated reminders sent to Twilio SMS and legal installment agreement generated in Document Vault.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Multi-Channel Live Mockup Simulator (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Channel Switcher */}
                <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 mb-6">
                  {(['sms', 'email', 'voice'] as const).map((ch) => {
                    const icon = ch === 'sms' ? <Smartphone className="w-3.5 h-3.5" /> : ch === 'email' ? <Mail className="w-3.5 h-3.5" /> : <PhoneCall className="w-3.5 h-3.5" />;
                    const label = ch === 'sms' ? 'Twilio SMS' : ch === 'email' ? 'Email Studio' : 'ElevenLabs Voice';
                    const isActive = activeChannel === ch;
                    return (
                      <button
                        key={ch}
                        onClick={() => setActiveChannel(ch)}
                        className={`relative flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="channelTab"
                            className="absolute inset-0 bg-indigo-600 rounded-lg shadow"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center space-x-1.5">
                          {icon}
                          <span>{label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Channel 1: Twilio SMS Smartphone Mockup */}
                <AnimatePresence mode="wait">
                  {activeChannel === 'sms' && (
                    <motion.div 
                      key="sms"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="max-w-xs mx-auto bg-slate-900 rounded-[32px] p-3.5 border-4 border-slate-800 shadow-2xl"
                    >
                      <div className="bg-slate-950 rounded-[24px] p-3 border border-slate-800 min-h-[380px] flex flex-col justify-between">
                        {/* Phone Top Bar */}
                        <div>
                          <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-2 border-b border-slate-800/80">
                            <span>9:41 AM</span>
                            <span className="font-semibold text-white">Anghkooey Recovery</span>
                            <span>100%</span>
                          </div>

                          {/* Message Bubbles */}
                          <div className="mt-4 space-y-3">
                            <div className="text-[10px] text-center text-slate-500 font-mono">
                              Today • Secured SMS via Twilio
                            </div>

                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-indigo-600 text-white p-3.5 rounded-2xl rounded-tr-none text-xs leading-relaxed shadow-md"
                            >
                              {getAdjustedMessage()}
                            </motion.div>

                            <div className="text-[10px] text-right text-slate-500 font-mono">
                              Delivered • Read
                            </div>
                          </div>
                        </div>

                        {/* Phone Bottom Link Pill */}
                        <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                          <span className="truncate font-mono text-indigo-400">angh.ly/pay-confirm</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Channel 2: Rich Email Mockup */}
                  {activeChannel === 'email' && (
                    <motion.div 
                      key="email"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="bg-slate-900 rounded-xl p-4 border border-slate-800 space-y-3 min-h-[380px] flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="text-xs pb-2 border-b border-slate-800">
                          <span className="text-slate-500">To: </span>
                          <span className="text-white font-mono">{selectedPersona.name.toLowerCase().replace(' ', '.')}@email.com</span>
                        </div>
                        <div className="text-xs pb-2 border-b border-slate-800">
                          <span className="text-slate-500">Subject: </span>
                          <span className="text-slate-200 font-semibold">{selectedPersona.sampleMessage.emailSubject}</span>
                        </div>

                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                          {getAdjustedMessage()}
                        </div>
                      </div>

                      <div className="p-2 bg-slate-950 rounded border border-slate-800 text-[11px] text-slate-400 flex items-center space-x-2">
                        <span className="font-semibold text-indigo-400">PDF:</span>
                        <span>payment_schedule_terms.pdf (142 KB)</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Channel 3: ElevenLabs Voice AI Mockup with Animated Waveforms */}
                  {activeChannel === 'voice' && (
                    <motion.div 
                      key="voice"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-4 min-h-[380px] flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 font-mono">Agent: ElevenLabs Voice Neural Model</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold">
                            Active Telephony
                          </span>
                        </div>

                        {/* Animated Audio Waveform Mockup */}
                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center space-x-1.5 h-20">
                          {[35, 75, 95, 30, 60, 100, 45, 80, 65, 90, 35, 70, 85, 50, 95].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={isPlayingAudio ? {
                                height: [`${Math.max(20, Math.round(h * 0.4))}%`, `${h}%`, `${Math.max(15, Math.round(h * 0.2))}%`]
                              } : {
                                height: `${h}%`
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: isPlayingAudio ? Infinity : 0,
                                repeatType: "reverse",
                                delay: i * 0.05,
                                ease: "easeInOut"
                              }}
                              className="w-1 bg-gradient-to-t from-indigo-500 to-sky-400 rounded-full"
                            />
                          ))}
                        </div>

                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed">
                          <span className="text-indigo-400 block mb-1">Synthesized Script:</span>
                          "{getAdjustedMessage()}"
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className={`w-full py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-colors ${
                          isPlayingAudio 
                            ? 'bg-rose-600 hover:bg-rose-500 text-white' 
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{isPlayingAudio ? 'Stop Voice Stream' : 'Simulate Voice Synthesis'}</span>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
                API Protocol: Twilio Webhook & ElevenLabs Neural Engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

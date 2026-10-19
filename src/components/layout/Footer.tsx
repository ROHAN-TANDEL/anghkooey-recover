import React from 'react';
import { Shield, Sparkles, CheckCircle2, Lock, FileCode, ExternalLink, Globe, Cpu } from 'lucide-react';
import { PRODUCT_INFO } from '../../data/showcaseData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070d] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust & Compliance Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800/60">
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
            <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">FDCPA & TCPA</h4>
              <p className="text-[11px] text-slate-400">Strict Call-Hour & Consent Rules</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
            <Lock className="w-6 h-6 text-sky-400 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">GDPR & Privacy</h4>
              <p className="text-[11px] text-slate-400">Article 22 Human Oversight</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
            <CheckCircle2 className="w-6 h-6 text-indigo-400 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">SOC2 Type II</h4>
              <p className="text-[11px] text-slate-400">Enterprise Certified Architecture</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
            <Cpu className="w-6 h-6 text-teal-400 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">AI Observability</h4>
              <p className="text-[11px] text-slate-400">100% Auditable LLM Logs</p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white tracking-wider font-mono">
                ANGHKOOEY RECOVER
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              The next-generation autonomous AI recovery platform built for banks, fintech lenders, and debt collection teams seeking respectful, compliant, and high-conversion resolution workflows.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-500 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational • v2.4.0 Engine</span>
            </div>
          </div>

          {/* Col 2: Core Platform */}
          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Platform</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-slate-200 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-slate-200 transition-colors">Customer 360</a></li>
              <li><a href="#features" className="hover:text-slate-200 transition-colors">AI Propensity Engine</a></li>
              <li><a href="#features" className="hover:text-slate-200 transition-colors">Agent Workspace</a></li>
              <li><a href="#features" className="hover:text-slate-200 transition-colors">Payment Plan Engine</a></li>
              <li><a href="#features" className="hover:text-slate-200 transition-colors">Data Pipeline ETL</a></li>
            </ul>
          </div>

          {/* Col 3: Integrations */}
          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Integrations</h5>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-300">Twilio Programmable SMS</span></li>
              <li><span className="text-slate-300">ElevenLabs Voice AI</span></li>
              <li><span className="text-slate-300">PostgreSQL Financial Ledger</span></li>
              <li><span className="text-slate-300">MongoDB Telemetry Hub</span></li>
              <li><span className="text-slate-300">CSV & Core Banking Ingestion</span></li>
            </ul>
          </div>

          {/* Col 4: Resources & Compliance */}
          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Governance</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#roi" className="hover:text-slate-200 transition-colors">ROI Calculator</a></li>
              <li><a href="#architecture" className="hover:text-slate-200 transition-colors">Security Architecture</a></li>
              <li><a href="#faq" className="hover:text-slate-200 transition-colors">Regulatory FAQ</a></li>
              <li><span className="text-slate-400">SOC2 Type II Audit</span></li>
              <li><span className="text-slate-400">FDCPA Safe Harbor Protocols</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Anghkooey Recover (anghkooey_recover). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0 font-medium">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-slate-400 cursor-pointer">Contact Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

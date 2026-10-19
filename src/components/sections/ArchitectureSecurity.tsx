import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Shield, Cpu, Database, Lock, CheckCircle2, 
  Layers, Code2, Terminal, ArrowRight, Sparkles 
} from 'lucide-react';
import { ARCHITECTURE_LAYERS } from '../../data/showcaseData';

export const ArchitectureSecurity: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>Enterprise Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Security, Scale & Compliance
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Anghkooey Recover bridges high-velocity AI models with bank-grade financial ledgers and rigorous regulatory compliance frameworks.
          </p>
        </motion.div>

        {/* 4-Layer Architecture Stack with Staggered Entrance */}
        <div className="space-y-4 max-w-5xl mx-auto mb-16">
          {ARCHITECTURE_LAYERS.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ x: 4, borderColor: '#4f46e5' }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 transition-colors shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Tier 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {layer.component}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {layer.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {layer.technologies.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-72 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 text-xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider block mb-1 flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Compliance Guarantee</span>
                  </span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {layer.complianceNote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Safeguards Matrix */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 rounded-2xl border border-indigo-500/20 p-8 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-1">
                Zero Legal Liability Architecture
              </span>
              <h3 className="text-2xl font-bold text-white">
                Regulatory Standards Baked Into Every API Call
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Audit-Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2">
              <h4 className="font-bold text-white text-sm">FDCPA & TCPA Safeguards</h4>
              <p className="text-slate-400 leading-relaxed">
                Automated enforcement of statutory contact hours (8:00 AM – 9:00 PM debtor local time). Built-in "Cease & Desist" toggles immediately freeze all omnichannel touchpoints.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white text-sm">GDPR Article 22 Compliance</h4>
              <p className="text-slate-400 leading-relaxed">
                No debtor account is escalated or penalized solely through automated profiling. Every high-stakes resolution proposal is reviewed and validated by human collectors.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white text-sm">Cryptographic Audit Logs</h4>
              <p className="text-slate-400 leading-relaxed">
                Every SMS, email dispatch, phone interaction recording, and payment schedule edit is recorded in an immutable ledger with ISO timestamps and agent attribution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

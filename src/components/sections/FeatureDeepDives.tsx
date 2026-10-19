import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Sparkles, Headphones, MessageSquare, CreditCard, 
  FileText, CheckCircle2, ArrowRight, Eye, ShieldCheck, Zap
} from 'lucide-react';
import { PRODUCT_FEATURES } from '../../data/showcaseData';
import { ProductFeature } from '../../types';

interface FeatureDeepDivesProps {
  onOpenScreenshot: (imageSrc: string, title: string) => void;
}

export const FeatureDeepDives: React.FC<FeatureDeepDivesProps> = ({ onOpenScreenshot }) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(PRODUCT_FEATURES[0].id);
  const selectedFeature = PRODUCT_FEATURES.find(f => f.id === selectedFeatureId) || PRODUCT_FEATURES[0];

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-[#070b14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Complete Architecture Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            6 Specialized Enterprise Engines
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Every module in Anghkooey Recover is custom-engineered to streamline collector productivity, protect compliance, and maximize debt recovery velocity.
          </p>
        </motion.div>

        {/* Feature Grid Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PRODUCT_FEATURES.map((feature) => {
            const isSelected = feature.id === selectedFeatureId;
            return (
              <motion.button
                key={feature.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFeatureId(feature.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between min-h-[110px] relative ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-900/60 to-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {getFeatureIcon(feature.iconName)}
                </div>
                <div>
                  <h4 className={`text-xs font-bold leading-tight mt-2 ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {feature.title.split('&')[0].trim()}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                    {feature.badge}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Feature Deep Dive Card with AnimatePresence */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedFeature.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Content (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {selectedFeature.badge}
                    </span>
                    <div className="flex space-x-1">
                      {selectedFeature.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedFeature.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {selectedFeature.fullDesc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2">
                  {selectedFeature.bullets.map((b, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Metric stats */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                  {selectedFeature.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[11px] block">{m.label}</span>
                      <span className="text-xl font-bold text-white font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Screenshot (6 cols) */}
              <div className="lg:col-span-6">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  onClick={() => onOpenScreenshot(selectedFeature.screenshot, selectedFeature.title)}
                  className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer shadow-xl hover:border-indigo-500/50 transition-all duration-300"
                >
                  <img
                    src={selectedFeature.screenshot}
                    alt={selectedFeature.title}
                    className="w-full h-auto object-cover max-h-[440px] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-indigo-600/90 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>View High-Res Screen</span>
                    </div>
                  </div>
                </motion.div>
                <p className="text-center text-xs text-slate-500 mt-2 font-mono">
                  Click image to inspect high-resolution production interface
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

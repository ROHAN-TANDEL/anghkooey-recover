import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Filter, Sparkles, CheckCircle2, ZoomIn } from 'lucide-react';
import { GALLERY_SCREENSHOTS } from '../../data/showcaseData';
import { ScreenshotItem } from '../../types';

interface ScreenshotsGalleryProps {
  onOpenScreenshot: (imageSrc: string, title: string) => void;
}

export const ScreenshotsGallery: React.FC<ScreenshotsGalleryProps> = ({ onOpenScreenshot }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Customer 360',
    'Agent Workspace',
    'AI Intelligence',
    'Omnichannel',
    'Payment Engine',
    'Data Pipeline'
  ];

  const filteredScreenshots = selectedCategory === 'All'
    ? GALLERY_SCREENSHOTS
    : GALLERY_SCREENSHOTS.filter(s => s.category === selectedCategory);

  return (
    <section id="screenshots" className="py-24 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Actual Product Interface</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production UI Screenshot Gallery
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Inspect the real, production-ready interfaces designed for modern debt recovery operations and customer resolution management.
          </p>
        </motion.div>

        {/* Category Filter Pills with Animated Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected ? 'text-white' : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="galleryCategoryPill"
                    className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Screenshot Cards Grid with Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredScreenshots.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                whileHover={{ y: -6 }}
                onClick={() => onOpenScreenshot(item.image, item.title)}
                className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden cursor-pointer hover:border-indigo-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with zoom trigger */}
                  <div className="relative overflow-hidden bg-slate-950 aspect-[16/10] border-b border-slate-800/80">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3.5 py-1.5 rounded-lg bg-indigo-600/90 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-lg backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4" />
                        <span>Click to Enlarge</span>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Description & Details */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Highlight Badges */}
                <div className="px-5 pb-5 pt-1 border-t border-slate-800/50">
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                    {item.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center space-x-1 truncate">
                        <CheckCircle2 className="w-3 h-3 text-teal-400 flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

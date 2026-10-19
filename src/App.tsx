import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { HowItWorksFlow } from './components/sections/HowItWorksFlow';
import { InteractiveSandbox } from './components/sections/InteractiveSandbox';
import { FeatureDeepDives } from './components/sections/FeatureDeepDives';
import { ScreenshotsGallery } from './components/sections/ScreenshotsGallery';
import { ArchitectureSecurity } from './components/sections/ArchitectureSecurity';
import { RoiCalculator } from './components/sections/RoiCalculator';
import { FaqSection } from './components/sections/FaqSection';
import { DemoModal } from './components/modals/DemoModal';
import { ScreenshotLightboxModal } from './components/modals/ScreenshotLightboxModal';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
  });

  const handleOpenScreenshot = (imageSrc: string, title: string) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        onOpenDemo={() => setDemoModalOpen(true)}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Live Mockup Dashboard */}
        <HeroSection
          onScrollTo={handleScrollTo}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 2. 5-Stage "How It Works" Flow */}
        <HowItWorksFlow
          onOpenScreenshot={handleOpenScreenshot}
        />

        {/* 3. Live Interactive Debt Resolution Sandbox */}
        <InteractiveSandbox />

        {/* 4. 6 Core Enterprise Engines Deep Dive */}
        <FeatureDeepDives
          onOpenScreenshot={handleOpenScreenshot}
        />

        {/* 5. Production Screenshots Gallery & Lightbox */}
        <ScreenshotsGallery
          onOpenScreenshot={handleOpenScreenshot}
        />

        {/* 6. Enterprise Architecture & Regulatory Compliance Stack */}
        <ArchitectureSecurity />

        {/* 7. Interactive Financial ROI & Uplift Calculator */}
        <RoiCalculator
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. High-Conversion Pre-Footer Call to Action */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#070b14] to-[#0b101e] border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Steps for Creditors & Collection Teams</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Upgrade Delinquent Debt into Resolved Repayment?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join leading enterprise lenders, banks, and recovery teams using Anghkooey Recover to achieve a 38% recovery uplift with automated empathy and 100% compliance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-600 hover:from-indigo-600 hover:to-sky-700 text-white shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Schedule Executive Demo & Technical Audit
              </button>

              <button
                onClick={() => handleScrollTo('simulator')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                Test Simulator Again
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Core System Disruption</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>14-Day Pilot Deployment</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SOC2 & GDPR Compliant</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <ScreenshotLightboxModal
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        onClose={handleCloseLightbox}
      />
    </div>
  );
};

export default App;

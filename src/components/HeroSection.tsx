import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';
import { Language } from '../types';

interface HeroSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onOpenWhatsApp, darkMode, language }) => {
  const handleScrollDown = () => {
    const target = document.getElementById('layanan');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
      <HeroBackground />
      <HeroContent onOpenWhatsApp={onOpenWhatsApp} language={language} />

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down to explore"
          className="flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-all group cursor-pointer"
        >
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-['Space_Grotesk'] opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <div className="w-5 h-9 sm:w-6 sm:h-10 rounded-full border-2 border-white/50 group-hover:border-white flex justify-center pt-2 transition-colors shadow-sm bg-white/10 backdrop-blur-xs">
            <div className="w-1.5 h-2.5 bg-[#d4ff00] rounded-full animate-bounce shadow-[0_0_8px_#d4ff00]" />
          </div>
        </button>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

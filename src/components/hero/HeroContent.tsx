import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { t } from '../../data/translations';
import { Language } from '../../types';

interface HeroContentProps {
  onOpenWhatsApp: (note?: string) => void;
  language: Language;
}

export const HeroContent: React.FC<HeroContentProps> = React.memo(({ onOpenWhatsApp, language }) => {
  const tr = t[language].hero;
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = useMemo(() => [...tr.words] as string[], [tr.words]);
  const rafRef = useRef<number>(0);
  const coordsRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateParallax = () => {
      if (parallaxRef.current) {
        const px = coordsRef.current.x * 20;
        const py = coordsRef.current.y * 20;
        parallaxRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      }
      rafRef.current = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.current = {
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateParallax);
      }
    };

    // Device orientation parallax untuk mobile
    const handleOrientation = (e: DeviceOrientationEvent) => {
      coordsRef.current = {
        x: ((e.gamma ?? 0) / 45) * 0.5,
        y: ((e.beta ?? 0) / 90) * 0.5,
      };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateParallax);
      }
    };

    const isMobile = 'ontouchstart' in window;
    if (isMobile && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    } else {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
  }, []);

  // Ganti kata setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const handleWhatsAppClick = () => {
    onOpenWhatsApp('Halo bren digital, saya ingin konsultasi mengenai sistem digital untuk bisnis saya.');
  };

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div
        ref={parallaxRef}
        className="flex flex-col items-center will-change-transform w-full max-w-5xl pointer-events-auto"
      >
        {/* Main Heading */}
        <div className="text-center mb-5 sm:mb-6">
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-1 sm:mb-2 text-white tracking-tight drop-shadow-sm">
            <span>{tr.heading1}</span>
          </h1>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight drop-shadow-sm text-white">
            <span 
              className="text-[#d4ff00] inline-block font-black"
              key={currentWordIndex} 
              style={{ 
                animation: 'wordFade 2s ease-in-out',
                textShadow: '0 0 35px rgba(212, 255, 0, 0.45)'
              }}
            >
              {words[currentWordIndex]}
            </span>
            <span> {tr.heading2}</span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-center text-white/90 font-['Space_Grotesk'] text-xs sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mb-7 sm:mb-9 px-2 leading-relaxed">
          {tr.sub}
        </p>

        {/* CTA Buttons - Matching screenshot lime + dark text concept */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-[#d4ff00] hover:bg-[#bfe600] text-[#0d0d0d] font-extrabold font-['Space_Grotesk'] text-sm sm:text-base px-8 py-4 sm:px-9 sm:py-4.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-3.5 group cursor-pointer"
          >
            <span>{tr.cta}</span>
            <span className="w-7 h-7 rounded-full bg-[#0d0d0d] text-[#d4ff00] flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0 shadow-sm">
              <ArrowRight size={15} />
            </span>
          </button>
          <span className="text-white/85 font-medium text-xs sm:text-base">
            {tr.ctaSecondary}
          </span>
        </div>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

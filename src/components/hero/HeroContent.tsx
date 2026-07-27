import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle, ArrowDown } from 'lucide-react';
import { ParallaxHeading } from './ParallaxHeading';
import { CTAButton } from './CTAButton';

interface HeroContentProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenWhatsApp, darkMode }) => {
  const { scrollY } = useScroll();
  
  // Fade and scale content on scroll
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const contentY = useTransform(scrollY, [0, 300], [0, -50]);

  const handleCTAClick = () => {
    onOpenWhatsApp('Halo bayu digital, saya ingin konsultasi mengenai sistem digital untuk bisnis saya.');
  };

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('layanan');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center"
      style={{ 
        opacity: contentOpacity,
        scale: contentScale,
        y: contentY
      }}
    >
      {/* Subtitle Badge */}
      <motion.div 
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wider font-['Geist'] mb-8 shadow-lg uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse"></span>
        Software House & Konsultan Digital
      </motion.div>

      {/* Main Parallax Heading */}
      <ParallaxHeading darkMode={darkMode} />

      {/* Subheading */}
      <motion.p 
        className="font-['Manrope'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Kami membantu bisnis dan institusi berkembang melalui solusi digital modern, tanpa ribet.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <CTAButton 
          onClick={handleCTAClick}
          text="Konsultasi Sekarang"
        />

        <button
          onClick={handleScrollToServices}
          className="text-white hover:text-[#d4ff00] font-medium text-sm sm:text-base underline underline-offset-4 flex items-center gap-1.5 transition-all duration-300 drop-shadow-md py-2 hover:scale-105"
        >
          <span>Lihat Layanan Kami</span>
        </button>
      </motion.div>

      {/* Key Points Banner */}
      <motion.div 
        className="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90 text-xs sm:text-sm font-medium font-['Geist'] max-w-3xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 hover:text-[#d4ff00] transition-colors">
          <CheckCircle size={18} className="text-[#d4ff00] flex-shrink-0" />
          <span>Tanpa Biaya Tersembunyi</span>
        </div>
        <div className="flex items-center justify-center gap-2 hover:text-[#d4ff00] transition-colors">
          <CheckCircle size={18} className="text-[#d4ff00] flex-shrink-0" />
          <span>Pendampingan Sampai Launch</span>
        </div>
        <div className="flex items-center justify-center gap-2 hover:text-[#d4ff00] transition-colors">
          <CheckCircle size={18} className="text-[#d4ff00] flex-shrink-0" />
          <span>Garansi Bug Free</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToServices}
        className="mt-12 text-white/70 hover:text-white transition-colors flex flex-col items-center text-xs gap-2 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <span className="font-['Geist'] tracking-wider uppercase text-xs group-hover:text-[#d4ff00] transition-colors">Scroll</span>
        <ArrowDown size={20} className="group-hover:text-[#d4ff00] transition-colors" />
      </motion.button>
    </motion.div>
  );
};

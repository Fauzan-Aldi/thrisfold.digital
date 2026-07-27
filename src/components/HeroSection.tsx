import React, { useState, useEffect } from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Scroll-based transforms for entire section
  const sectionOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse movement tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity: sectionOpacity }}
    >
      {/* Background with Parallax & Clouds */}
      <HeroBackground mousePosition={mousePosition} />

      {/* Hero Content */}
      <HeroContent onOpenWhatsApp={onOpenWhatsApp} darkMode={darkMode} />
    </motion.section>
  );
};

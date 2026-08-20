import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';
import { Language } from '../types';

interface HeroSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, darkMode, language }) => {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
      <HeroBackground mousePosition={{ x: 0, y: 0 }} />
      <HeroContent onOpenWhatsApp={onOpenWhatsApp} language={language} />
    </section>
  );
};

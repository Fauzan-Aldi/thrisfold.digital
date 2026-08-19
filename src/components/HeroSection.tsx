import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';

interface HeroSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, darkMode }) => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100vh',
      }}
    >
      {/* Background Image */}
      <HeroBackground mousePosition={{ x: 0, y: 0 }} />

      {/* Hero Content */}
      <HeroContent onOpenWhatsApp={onOpenWhatsApp} />
    </section>
  );
};

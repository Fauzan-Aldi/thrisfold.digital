import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroNavbar } from './hero/HeroNavbar';
import { HeroContent } from './hero/HeroContent';

interface HeroSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, darkMode }) => {
  const [localDarkMode, setLocalDarkMode] = React.useState(darkMode);

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        paddingBottom: '56.25%', // 16:9 aspect ratio
        minHeight: '100vh'
      }}
    >
      {/* Background Image */}
      <HeroBackground mousePosition={{ x: 0, y: 0 }} />
      
      {/* Navbar with real text */}
      <HeroNavbar darkMode={localDarkMode} setDarkMode={setLocalDarkMode} />
      
      {/* Hero Content with real text */}
      <HeroContent onOpenWhatsApp={onOpenWhatsApp} />
    </section>
  );
};

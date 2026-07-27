import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeroNavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const HeroNavbar: React.FC<HeroNavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ID' | 'EN'>('ID');

  const handleNavClick = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-30 px-8 py-8 lg:px-16 lg:py-10">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Space_Grotesk'] tracking-tight">
              <span className="text-black">trifolds</span>
              <span className="text-[#d4ff00]">.digital</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-16">
            <button
              onClick={() => handleNavClick('layanan')}
              className="text-black hover:text-[#d4ff00] font-semibold text-base lg:text-lg transition-colors duration-300"
            >
              Layanan
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              className="text-black hover:text-[#d4ff00] font-semibold text-base lg:text-lg transition-colors duration-300"
            >
              Portfolio
            </button>
            <div className="w-px h-8 bg-black/30 mx-4"></div>
            <button
              onClick={() => setLanguage(language === 'ID' ? 'EN' : 'ID')}
              className="text-black hover:text-[#d4ff00] font-semibold text-base lg:text-lg transition-colors duration-300 whitespace-nowrap"
            >
              {language} / {language === 'ID' ? 'EN' : 'ID'}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-black hover:text-[#d4ff00] transition-colors duration-300 p-2 ml-2"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg rounded-b-2xl mt-4 mx-6 p-8">
            <div className="flex flex-col gap-6">
              <button
                onClick={() => handleNavClick('layanan')}
                className="text-black hover:text-[#d4ff00] font-semibold text-xl py-2 text-left transition-colors duration-300"
              >
                Layanan
              </button>
              <button
                onClick={() => handleNavClick('portfolio')}
                className="text-black hover:text-[#d4ff00] font-semibold text-xl py-2 text-left transition-colors duration-300"
              >
                Portfolio
              </button>
              <div className="flex items-center gap-6 pt-4 border-t border-black/10">
                <button
                  onClick={() => setLanguage(language === 'ID' ? 'EN' : 'ID')}
                  className="text-black hover:text-[#d4ff00] font-semibold text-lg transition-colors duration-300"
                >
                  {language} / {language === 'ID' ? 'EN' : 'ID'}
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-black hover:text-[#d4ff00] p-2 transition-colors duration-300"
                >
                  {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

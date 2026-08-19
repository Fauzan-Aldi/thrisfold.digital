import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenWhatsApp: (defaultNote?: string) => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
  onOpenWhatsApp,
  onOpenEstimator
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        scrolled
          ? 'bg-[#f4f5df]/90 backdrop-blur-xl shadow-sm py-3 border-b border-[#c5c9ac]/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="flex items-center">
          <span className={`text-2xl font-black font-['Hanken_Grotesk'] tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-[#0d0d0d]' : 'text-white'
          }`}>
            karsa<span className="text-[#0EA5E9]">.digital</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-['Geist'] text-sm font-semibold">
          <a
            href="#layanan"
            onClick={(e) => handleSmoothScroll(e, 'layanan')}
            className={`relative transition-colors duration-300 group ${
              scrolled ? 'text-[#0d0d0d] hover:text-[#0EA5E9]' : 'text-white hover:text-[#0EA5E9]'
            }`}
          >
            Layanan
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, 'portfolio')}
            className={`relative transition-colors duration-300 group ${
              scrolled ? 'text-[#0d0d0d] hover:text-[#0EA5E9]' : 'text-white hover:text-[#0EA5E9]'
            }`}
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full rounded-full" />
          </a>

          {/* Separator */}
          <span className={`w-px h-5 ${scrolled ? 'bg-[#c5c9ac]' : 'bg-white/40'}`} />

          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
            className={`transition-colors duration-300 font-semibold ${
              scrolled ? 'text-[#0d0d0d] hover:text-[#0EA5E9]' : 'text-white hover:text-[#0EA5E9]'
            }`}
          >
            {language === 'id' ? 'ID / EN' : 'EN / ID'}
          </button>


        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-[#0d0d0d] hover:bg-[#e8e9d8]' : 'text-white hover:bg-white/10'
          }`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t px-6 py-6 ${
          scrolled
            ? 'bg-[#f4f5df] border-[#c5c9ac]/40'
            : 'bg-[#1a1d10]/95 backdrop-blur-2xl border-white/10'
        }`}>
          <div className={`flex flex-col gap-4 font-semibold text-base ${
            scrolled ? 'text-[#0d0d0d]' : 'text-white'
          }`}>
            {[
              { label: 'Layanan', id: 'layanan' },
              { label: 'Portfolio', id: 'portfolio' },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className="py-2 hover:text-[#0EA5E9] transition-colors"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="py-2 text-left hover:text-[#0EA5E9] transition-colors"
            >
              {language === 'id' ? 'ID / EN' : 'EN / ID'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

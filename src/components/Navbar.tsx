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
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="flex items-center group">
          <span className="text-2xl font-black font-['Hanken_Grotesk'] tracking-tight text-white">
            bayu<span className="text-[#d4ff00]">.digital</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10 font-['Geist'] text-sm font-semibold">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="relative text-white transition-all duration-300 hover:text-[#d4ff00] group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4ff00] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#layanan"
            onClick={(e) => handleSmoothScroll(e, 'layanan')}
            className="relative text-white transition-all duration-300 hover:text-[#d4ff00] group"
          >
            Layanan
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4ff00] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, 'portfolio')}
            className="relative text-white transition-all duration-300 hover:text-[#d4ff00] group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4ff00] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#cara-kerja"
            onClick={(e) => handleSmoothScroll(e, 'cara-kerja')}
            className="relative text-white transition-all duration-300 hover:text-[#d4ff00] group"
          >
            Tentang
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4ff00] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#harga"
            onClick={(e) => handleSmoothScroll(e, 'harga')}
            className="relative text-white transition-all duration-300 hover:text-[#d4ff00] group"
          >
            Kontak
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4ff00] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1d10]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6">
          <div className="flex flex-col gap-4 font-semibold text-base text-white">
            <a
              href="#home"
              onClick={(e) => { handleSmoothScroll(e, 'home'); }}
              className="py-2 hover:text-[#d4ff00] transition-colors"
            >
              Home
            </a>
            <a
              href="#layanan"
              onClick={(e) => { handleSmoothScroll(e, 'layanan'); }}
              className="py-2 hover:text-[#d4ff00] transition-colors"
            >
              Layanan
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { handleSmoothScroll(e, 'portfolio'); }}
              className="py-2 hover:text-[#d4ff00] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#cara-kerja"
              onClick={(e) => { handleSmoothScroll(e, 'cara-kerja'); }}
              className="py-2 hover:text-[#d4ff00] transition-colors"
            >
              Tentang
            </a>
            <a
              href="#harga"
              onClick={(e) => { handleSmoothScroll(e, 'harga'); }}
              className="py-2 hover:text-[#d4ff00] transition-colors"
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

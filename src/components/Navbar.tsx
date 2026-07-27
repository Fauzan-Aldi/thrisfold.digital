import React, { useState, useEffect } from 'react';
import { MessageSquare, Sun, Moon, Menu, X } from 'lucide-react';
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
          ? 'bg-[#1a1d10]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#d4ff00] flex items-center justify-center font-bold text-[#171e00] text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
            b
          </div>
          <span className="text-xl sm:text-2xl font-black font-['Hanken_Grotesk'] tracking-tight text-white">
            bayu<span className="text-[#d4ff00]">.digital</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-['Geist'] text-sm tracking-wide font-semibold">
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

        {/* Action Controls & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-all duration-300 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Button */}
          <button
            onClick={() => onOpenWhatsApp()}
            className="bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] font-bold font-['Manrope'] text-sm px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#d4ff00]/50"
          >
            <MessageSquare size={16} className="fill-[#171e00]" />
            <span>Konsultasi</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-6 py-6 space-y-4 bg-[#1a1d10]/95 backdrop-blur-2xl border-white/10 text-white`}>
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-[#d4ff00] uppercase tracking-wider">
              Navigation Menu
            </span>
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#2f3223] text-white"
            >
              Bahasa: {language.toUpperCase()}
            </button>
          </div>
          <div className="flex flex-col gap-3 font-semibold text-base">
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

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWhatsApp();
            }}
            className="w-full mt-4 bg-[#d4ff00] text-[#171e00] font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-[#caf300] transition-all"
          >
            <MessageSquare size={18} />
            <span>Konsultasi via WhatsApp</span>
          </button>
        </div>
      )}
    </header>
  );
};

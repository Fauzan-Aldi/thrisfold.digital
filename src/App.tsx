import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessAndWorksSection } from './components/ProcessAndWorksSection';
import { PricingSection } from './components/PricingSection';
import { FooterSection } from './components/FooterSection';
import { PortfolioModal } from './components/PortfolioModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { Language, PortfolioProject } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState<boolean>(false);
  const [whatsAppNote, setWhatsAppNote] = useState<string>('');

  // Synchronize dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenWhatsApp = useCallback((note?: string) => {
    const msg = note || 'Halo bren digital, saya ingin konsultasi mengenai sistem digital untuk bisnis saya.';
    const phone = '6285363407399';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }, []);

  const handleOpenEstimator = useCallback(() => {
    const pricingEl = document.getElementById('harga');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectProject = useCallback((project: PortfolioProject) => {
    setSelectedProject(project);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleCloseWhatsApp = useCallback(() => {
    setIsWhatsAppOpen(false);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-['Manrope'] ${
      darkMode ? 'bg-[#1a1d10] text-[#f9fbe5]' : 'bg-[#f9fbe5] text-[#1a1d10]'
    }`}>
      {/* Global sticky Navbar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* Main Single Column Scrollable Content */}
      <main id="home">
        {/* Top Hero Section - Full Image */}
        <HeroSection
          onOpenWhatsApp={handleOpenWhatsApp}
          darkMode={darkMode}
          language={language}
        />

        {/* Middle Section 1: Services & Capabilities */}
        <ServicesSection
          darkMode={darkMode}
          onOpenWhatsApp={handleOpenWhatsApp}
          language={language}
        />

        {/* Middle Section 2: 5 Steps & Portfolio Works */}
        <ProcessAndWorksSection
          darkMode={darkMode}
          onSelectProject={handleSelectProject}
          onOpenWhatsApp={handleOpenWhatsApp}
          language={language}
        />

        {/* Pricing & Cost Estimator */}
        <PricingSection
          darkMode={darkMode}
          onOpenWhatsApp={handleOpenWhatsApp}
          language={language}
        />
      </main>

      {/* Footer & Pre-Footer CTA */}
      <FooterSection
        onOpenWhatsApp={handleOpenWhatsApp}
        darkMode={darkMode}
        language={language}
      />

      {/* Modals & Drawers */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={handleCloseProject}
          onOpenWhatsApp={handleOpenWhatsApp}
          darkMode={darkMode}
        />
      )}

      {isWhatsAppOpen && (
        <WhatsAppModal
          isOpen={isWhatsAppOpen}
          onClose={handleCloseWhatsApp}
          defaultNote={whatsAppNote}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
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

  const handleOpenWhatsApp = (note?: string) => {
    if (note) setWhatsAppNote(note);
    else setWhatsAppNote('Halo bayu digital, saya berminat konsultasi mengenai sistem digital untuk bisnis saya.');
    setIsWhatsAppOpen(true);
  };

  const handleOpenEstimator = () => {
    const pricingEl = document.getElementById('harga');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-['Manrope'] ${
      darkMode ? 'bg-[#1a1d10] text-[#f9fbe5]' : 'bg-[#f9fbe5] text-[#1a1d10]'
    }`}>
      {/* Header Navigation */}
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
        {/* Top Hero Section */}
        <HeroSection
          onOpenWhatsApp={handleOpenWhatsApp}
          darkMode={darkMode}
        />

        {/* Middle Section 1: Services & Capabilities */}
        <ServicesSection
          darkMode={darkMode}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Middle Section 2: 5 Steps & Portfolio Works */}
        <ProcessAndWorksSection
          darkMode={darkMode}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Pricing & Cost Estimator */}
        <PricingSection
          darkMode={darkMode}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Footer & Pre-Footer CTA */}
      <FooterSection
        onOpenWhatsApp={handleOpenWhatsApp}
        darkMode={darkMode}
      />

      {/* Modals & Drawers */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenWhatsApp={handleOpenWhatsApp}
        darkMode={darkMode}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        defaultNote={whatsAppNote}
        darkMode={darkMode}
      />
    </div>
  );
}

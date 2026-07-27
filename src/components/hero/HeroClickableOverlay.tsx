import React from 'react';

interface HeroClickableOverlayProps {
  onOpenWhatsApp: (note?: string) => void;
}

export const HeroClickableOverlay: React.FC<HeroClickableOverlayProps> = ({ onOpenWhatsApp }) => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLayananClick = () => {
    const target = document.getElementById('layanan');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioClick = () => {
    const target = document.getElementById('portfolio');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLanguageClick = () => {
    // Toggle language functionality
    console.log('Language toggle clicked');
  };

  const handleWhatsAppClick = () => {
    onOpenWhatsApp('Halo bays digital, saya ingin konsultasi mengenai sistem digital untuk bisnis saya.');
  };

  const handleNgobrolClick = () => {
    const target = document.getElementById('layanan');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Logo - Top Left */}
      <button
        onClick={handleLogoClick}
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          top: '3%',
          left: '5%',
          width: '12%',
          height: '8%'
        }}
        aria-label="bays.digital logo"
      />

      {/* Layanan - Top Right */}
      <button
        onClick={handleLayananClick}
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          top: '3%',
          left: '68%',
          width: '8%',
          height: '8%'
        }}
        aria-label="Layanan"
      />

      {/* Portfolio - Top Right */}
      <button
        onClick={handlePortfolioClick}
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          top: '3%',
          left: '78%',
          width: '8%',
          height: '8%'
        }}
        aria-label="Portfolio"
      />

      {/* Language Switcher ID/EN - Top Right */}
      <button
        onClick={handleLanguageClick}
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          top: '3%',
          left: '88%',
          width: '6%',
          height: '8%'
        }}
        aria-label="Language switcher"
      />

      {/* Theme Toggle - Top Right Corner */}
      <button
        onClick={() => console.log('Theme toggle')}
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          top: '3%',
          left: '94%',
          width: '3%',
          height: '8%'
        }}
        aria-label="Theme toggle"
      />

      {/* Main Heading "Konsultan Digital. bisnis kamu." - Center */}
      <div
        className="absolute pointer-events-auto cursor-default"
        style={{
          top: '25%',
          left: '20%',
          width: '60%',
          height: '20%'
        }}
      />

      {/* Subheading text - Center */}
      <div
        className="absolute pointer-events-auto cursor-default"
        style={{
          top: '48%',
          left: '28%',
          width: '44%',
          height: '8%'
        }}
      />

      {/* WhatsApp Button - Yellow Button */}
      <button
        onClick={handleWhatsAppClick}
        className="absolute pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
        style={{
          top: '62%',
          left: '36%',
          width: '18%',
          height: '6%'
        }}
        aria-label="Konsultasi via WhatsApp"
      />

      {/* Ngobrol aja dulu link */}
      <button
        onClick={handleNgobrolClick}
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          top: '62%',
          left: '56%',
          width: '18%',
          height: '6%'
        }}
        aria-label="Ngobrol aja dulu"
      />
    </div>
  );
};

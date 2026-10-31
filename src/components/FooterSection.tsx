import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { t } from '../data/translations';
import { Language } from '../types';
import { ScrollReveal } from './common/ScrollReveal';
import { NeuralNetworkBg } from './common/NeuralNetworkBg';

interface FooterSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
  language: Language;
}

export const FooterSection: React.FC<FooterSectionProps> = React.memo(({ onOpenWhatsApp, darkMode, language }) => {
  const tr = t[language].footer;
  const [activeLegalModal, setActiveLegalModal] = useState<'terms' | 'privacy' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: 'radial-gradient(120% 90% at 50% 10%, #2243a4 0%, #1d388f 45%, #152968 100%)',
      }}
    >
      {/* Ambient soft glow highlights */}
      <div 
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(29, 56, 143, 0) 70%)',
        }}
      />

      {/* Neural Network Pattern */}
      <NeuralNetworkBg />

      {/* PRE-FOOTER CTA */}
      <section className="relative z-10 py-16 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <ScrollReveal direction="up" duration={800} className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FACC15] text-[#0d0d0d] text-xs font-bold uppercase tracking-widest font-['Geist'] shadow-xs">
            {tr.cta_badge}
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            {tr.cta_heading}
          </h2>
          <p className="font-['Manrope'] text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            {tr.cta_sub}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsApp('Halo bren digital, yuk ngobrol dulu mengenai peluang sistem untuk bisnis saya.')}
              className="w-full sm:w-auto bg-[#FACC15] hover:bg-[#EAB308] text-[#0d0d0d] font-bold font-['Manrope'] text-sm sm:text-base px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl cursor-pointer"
            >
              <MessageSquare size={18} />
              <span>{tr.cta_btn}</span>
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* FOOTER BAR */}
      <footer className="relative z-10 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <img src="/logo-white.png" alt="bren.digital logo" className="w-5 h-5 object-contain" />
            <span className="font-['Hanken_Grotesk'] text-sm font-black tracking-tight text-white">
              bren<span className="text-[#FACC15]">.digital</span>
            </span>
          </div>
          <p className="text-sm font-semibold text-white/75 font-['Geist']">{tr.copyright}</p>
          <div className="flex items-center gap-8 text-xs font-semibold font-['Geist'] text-white/70">
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-[#FACC15] transition-colors cursor-pointer">{tr.terms}</button>
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-[#FACC15] transition-colors cursor-pointer">{tr.privacy}</button>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#10204d] text-white rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold mb-4 text-white">
              {activeLegalModal === 'terms' ? tr.terms : tr.privacy}
            </h3>
            <div className="text-xs sm:text-sm text-white/80 space-y-3 max-h-[60vh] overflow-y-auto leading-relaxed pr-2">
              {activeLegalModal === 'terms' ? (
                <>
                  <p>1. <strong>Pengembangan Software:</strong> Seluruh pengerjaan aplikasi dan sistem dilakukan berdasarkan spesifikasi tertulis yang disepakati bersama.</p>
                  <p>2. <strong>Garansi & Bug Fix:</strong> Kami memberikan jaminan perbaikan bug gratis selama 30 hari hingga 3 bulan pasca-peluncuran sesuai paket yang dipilih.</p>
                  <p>3. <strong>Hak Cipta Kode:</strong> Klien memegang hak guna penuh atas sistem yang telah diselesaikan dan dilunasi.</p>
                </>
              ) : (
                <>
                  <p>1. <strong>Kerahasiaan Data:</strong> Seluruh informasi bisnis dan data operasional Anda dijamin kerahasiaannya dan tidak dipublikasikan ke pihak ketiga.</p>
                  <p>2. <strong>Keamanan Sistem:</strong> Kami menerapkan standar enkripsi SSL/HTTPS serta arsitektur server yang aman.</p>
                </>
              )}
            </div>
            <button
              onClick={() => setActiveLegalModal(null)}
              className="mt-6 w-full bg-[#FACC15] hover:bg-[#EAB308] text-[#0d0d0d] font-bold py-3 rounded-full text-sm transition-colors cursor-pointer"
            >
              Mengerti & Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

FooterSection.displayName = 'FooterSection';

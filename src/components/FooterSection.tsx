import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { t } from '../data/translations';
import { Language } from '../types';

interface FooterSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
  language: Language;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenWhatsApp, darkMode, language }) => {
  const tr = t[language].footer;
  const [activeLegalModal, setActiveLegalModal] = useState<'terms' | 'privacy' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* PRE-FOOTER CTA */}
      <section className="py-14 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#c5c9ac]/40 bg-[#f9fbe5]">
        <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0EA5E9] text-[#0d0d0d] text-xs font-bold uppercase tracking-widest font-['Geist']">
            {tr.cta_badge}
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0d0d0d]">
            {tr.cta_heading}
          </h2>
          <p className="font-['Manrope'] text-sm sm:text-lg text-[#333333] max-w-2xl mx-auto font-medium leading-relaxed">
            {tr.cta_sub}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsApp('Halo karsa digital, yuk ngobrol dulu mengenai peluang sistem untuk bisnis saya.')}
              className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] text-[#0d0d0d] font-bold font-['Manrope'] text-sm sm:text-base px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl"
            >
              <MessageSquare size={18} />
              <span>{tr.cta_btn}</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="bg-[#f9fbe5] text-[#0d0d0d] py-8 px-4 sm:px-6 lg:px-8 border-t border-[#c5c9ac]/40" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-[#0d0d0d] font-['Geist']">{tr.copyright}</p>
          <div className="flex items-center gap-8 text-xs font-semibold font-['Geist'] text-[#0d0d0d]">
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-[#0EA5E9] transition-colors">{tr.terms}</button>
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-[#0EA5E9] transition-colors">{tr.privacy}</button>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#1a1d10] text-[#f9fbe5] rounded-3xl border border-[#444932] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#2f3223] text-white"
            >
              ✕
            </button>
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold mb-4">
              {activeLegalModal === 'terms' ? tr.terms : tr.privacy}
            </h3>
            <div className="text-xs sm:text-sm text-[#e2e4cf] space-y-3 max-h-[60vh] overflow-y-auto leading-relaxed pr-2">
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
              className="mt-6 w-full bg-[#0EA5E9] text-[#0d0d0d] font-bold py-3 rounded-full text-sm"
            >
              Mengerti & Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

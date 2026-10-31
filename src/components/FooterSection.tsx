import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { t } from '../data/translations';
import { Language } from '../types';
import { ScrollReveal } from './common/ScrollReveal';

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

      {/* Topographic Contour Wave Lines (Vector matching reference) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1024 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Sweeping concentric curved arcs matching reference */}
        <path
          d="M 120 -40 C 150 110, 290 220, 520 310 C 730 390, 910 430, 1080 450"
          stroke="rgba(255, 255, 255, 0.16)"
          strokeWidth="1.2"
        />
        <path
          d="M 330 -40 C 360 100, 480 200, 680 280 C 860 350, 990 380, 1080 395"
          stroke="rgba(147, 197, 253, 0.22)"
          strokeWidth="1.3"
        />
        <path
          d="M 540 -40 C 570 80, 670 170, 830 235 C 960 290, 1040 315, 1080 325"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />
        <path
          d="M 740 -40 C 770 60, 850 130, 970 180 C 1030 205, 1060 215, 1080 220"
          stroke="rgba(147, 197, 253, 0.20)"
          strokeWidth="1.2"
        />

        {/* Counter-arcs around top-left */}
        <path
          d="M -40 160 C 80 175, 220 150, 320 90 C 390 45, 430 -10, 450 -40"
          stroke="rgba(255, 255, 255, 0.14)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 280 C 90 290, 230 260, 330 190 C 410 130, 450 60, 470 -40"
          stroke="rgba(147, 197, 253, 0.18)"
          strokeWidth="1.2"
        />

        {/* Horizontal undulating topographic contour lines */}
        <path
          d="M -40 60 C 220 78, 480 48, 720 68 C 880 82, 1000 62, 1080 65"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.1"
        />
        <path
          d="M -40 120 C 180 138, 460 98, 730 132 C 890 148, 1010 118, 1080 122"
          stroke="rgba(147, 197, 253, 0.16)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 180 C 170 196, 440 158, 700 188 C 860 204, 1000 172, 1080 176"
          stroke="rgba(255, 255, 255, 0.14)"
          strokeWidth="1.1"
        />
        <path
          d="M -40 240 C 210 256, 470 218, 730 242 C 880 258, 1010 228, 1080 232"
          stroke="rgba(147, 197, 253, 0.18)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 300 C 170 318, 450 278, 720 308 C 880 324, 1000 294, 1080 298"
          stroke="rgba(255, 255, 255, 0.13)"
          strokeWidth="1.1"
        />
        <path
          d="M -40 360 C 210 376, 490 338, 750 368 C 900 384, 1010 354, 1080 358"
          stroke="rgba(147, 197, 253, 0.17)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 420 C 190 436, 470 398, 730 428 C 890 444, 1000 414, 1080 418"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.1"
        />
      </svg>

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

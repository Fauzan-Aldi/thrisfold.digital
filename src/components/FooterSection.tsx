import React, { useState } from 'react';
import { MessageSquare, ArrowUp, Instagram, Linkedin, Github } from 'lucide-react';

interface FooterSectionProps {
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenWhatsApp, darkMode }) => {
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
            Ayo Mulai Transformasi
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0d0d0d]">
            Yuk, Ngobrol Dulu.
          </h2>
          <p className="font-['Manrope'] text-sm sm:text-lg text-[#333333] max-w-2xl mx-auto font-medium leading-relaxed">
            Tidak ada komitmen. Tidak ada tekanan. Ceritakan bisnis kamu — sisanya biar kami yang pikirkan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsApp('Halo karsa digital, yuk ngobrol dulu mengenai peluang sistem untuk bisnis saya.')}
              className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] text-[#0d0d0d] font-bold font-['Manrope'] text-sm sm:text-base px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl"
            >
              <MessageSquare size={18} />
              <span>Chat Kami di WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="bg-[#1a1d10] text-[#f9fbe5] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#444932]">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a href="#" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#0EA5E9] flex items-center justify-center font-bold text-[#0d0d0d] text-xs">k</div>
              <span className="text-xl font-black font-['Hanken_Grotesk'] tracking-tight text-white">
                karsa<span className="text-[#0EA5E9]">.digital</span>
              </span>
            </a>
            <p className="text-xs text-[#c5c9ac] font-['Geist'] text-center md:text-left">
              © 2025 karsa.digital — Konsultan Digital & Software House.
            </p>
          </div>

          {/* Legal + Scroll Top */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold font-['Geist'] text-[#c5c9ac]">
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-[#0EA5E9] transition-colors">
              Syarat & Ketentuan
            </button>
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-[#0EA5E9] transition-colors">
              Kebijakan Privasi
            </button>
            <button onClick={scrollToTop} className="p-2 rounded-full bg-[#2f3223] text-[#0EA5E9] hover:bg-[#0284C7] transition-colors" title="Kembali ke atas">
              <ArrowUp size={16} />
            </button>
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
              {activeLegalModal === 'terms' ? 'Syarat & Ketentuan Layanan' : 'Kebijakan Privasi'}
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

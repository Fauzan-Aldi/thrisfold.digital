import React, { useState } from 'react';
import { MessageSquare, ArrowUp, ShieldCheck, FileText, Globe, Instagram, Linkedin, Github } from 'lucide-react';

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
      {/* PRE-FOOTER CTA SECTION */}
      <section className={`py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#1a1d10] border-[#444932]' : 'bg-[#f9fbe5] border-[#c5c9ac]/40'
      }`}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4ff00] text-[#171e00] text-xs font-bold uppercase tracking-widest font-['Geist'] shadow-xs">
            Ayo Mulai Transformasi
          </span>

          <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-black tracking-tight text-[#1a1d10] dark:text-[#f9fbe5]">
            Yuk, Ngobrol Dulu.
          </h2>

          <p className="font-['Manrope'] text-base sm:text-xl text-[#444932] dark:text-[#e2e4cf] max-w-2xl mx-auto font-medium leading-relaxed">
            Untuk memulai, jelaskan kebutuhan bisnis Anda, dan tim kami akan segera menghubungi. Tidak ada komitmen. Tidak ada tekanan. Ceritakan bisnis kamu - sisanya biar kami yang pikirkan.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsApp('Halo bayu digital, yuk ngobrol dulu mengenai peluang sistem untuk bisnis saya.')}
              className="bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] font-bold font-['Manrope'] text-base px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl animate-glow"
            >
              <MessageSquare size={20} className="fill-[#171e00]" />
              <span>Chat Kami di WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="bg-[#1a1d10] text-[#f9fbe5] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#444932]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#d4ff00] flex items-center justify-center font-bold text-[#171e00] text-xs">
                b
              </div>
              <span className="text-2xl font-black font-['Hanken_Grotesk'] tracking-tight text-white">
                bayu<span className="text-[#d4ff00]">.digital</span>
              </span>
            </a>
            <p className="text-xs text-[#c5c9ac] font-['Geist']">
              © 2024 bayu.digital — Konsultan Digital & Software House.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#2f3223] text-[#c5c9ac] hover:text-[#d4ff00] flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#2f3223] text-[#c5c9ac] hover:text-[#d4ff00] flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#2f3223] text-[#c5c9ac] hover:text-[#d4ff00] flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Legal Links & Scroll Top */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold font-['Geist'] text-[#c5c9ac]">
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-[#d4ff00] transition-colors"
            >
              Syarat & Ketentuan
            </button>
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-[#d4ff00] transition-colors"
            >
              Kebijakan Privasi
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#2f3223] text-[#d4ff00] hover:bg-[#3e4c00] transition-colors"
              title="Kembali ke atas"
            >
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
                  <p>1. <strong>Kerahasiaan Data:</strong> Seluruh informasi bisnis, data tamu hotel, dan transaksi operasional Anda dijamin kerahasiaannya dan tidak dipublikasikan ke pihak ketiga.</p>
                  <p>2. <strong>Keamanan Sistem:</strong> Kami menerapkan standar enkripsi SSL/HTTPS serta arsitektur server yang aman.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setActiveLegalModal(null)}
              className="mt-6 w-full bg-[#d4ff00] text-[#171e00] font-bold py-3 rounded-full text-sm"
            >
              Mengerti & Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

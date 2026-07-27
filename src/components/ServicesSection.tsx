import React, { useState } from 'react';
import { MOCKUP_IMAGE_URL } from '../data/landingData';
import { Calendar, Layers, Sparkles, Building2, Smartphone, Check, ArrowRight, ShieldCheck, PieChart } from 'lucide-react';

interface ServicesSectionProps {
  darkMode: boolean;
  onOpenWhatsApp: (note?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode, onOpenWhatsApp }) => {
  const [activeTab, setActiveTab] = useState<'hotel' | 'erp' | 'ai' | 'brochure'>('hotel');

  return (
    <section id="layanan" className={`py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-[#1a1d10] text-[#f9fbe5]' : 'bg-[#f4f5df] text-[#1a1d10]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#536600]/10 dark:bg-[#d4ff00]/10 text-[#536600] dark:text-[#d4ff00] text-xs font-bold uppercase tracking-widest font-['Geist']">
              LAYANAN & CAPABILITIES
            </div>

            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Semua yang Bisnis Kamu Butuhin.
            </h2>

            <p className="font-['Manrope'] text-base sm:text-lg leading-relaxed text-[#444932] dark:text-[#e2e4cf] font-medium">
              Sistem mandiri yang membantu bisnis Anda dalam pemesanan, ketersediaan, promo, dan laporan keuangan.
            </p>

            <p className="font-['Manrope'] text-sm sm:text-base leading-relaxed text-[#444932]/80 dark:text-[#e2e4cf]/80">
              Mulai dari website company profile, sistem operasi ERP, hingga otomatisasi AI. Kami siap buatkan.
            </p>

            {/* Capability Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className={`p-3.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-[#2f3223] border-[#444932]' : 'bg-white border-[#c5c9ac]/50'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <Building2 size={18} className="text-[#536600] dark:text-[#d4ff00]" />
                  <span>Direct Hotel Booking</span>
                </div>
                <p className="text-xs text-[#444932] dark:text-[#c5c9ac]">
                  Cek ketersediaan kamar, invoice WA & bebas komisi 0%.
                </p>
              </div>

              <div className={`p-3.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-[#2f3223] border-[#444932]' : 'bg-white border-[#c5c9ac]/50'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <PieChart size={18} className="text-[#536600] dark:text-[#d4ff00]" />
                  <span>ERP & Operasional</span>
                </div>
                <p className="text-xs text-[#444932] dark:text-[#c5c9ac]">
                  Pencatatan kasir, stok inventoris, Laba/Rugi otomatis.
                </p>
              </div>

              <div className={`p-3.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-[#2f3223] border-[#444932]' : 'bg-white border-[#c5c9ac]/50'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <Sparkles size={18} className="text-[#536600] dark:text-[#d4ff00]" />
                  <span>AI Product Studio</span>
                </div>
                <p className="text-xs text-[#444932] dark:text-[#c5c9ac]">
                  Generasi background foto produk siap e-commerce.
                </p>
              </div>

              <div className={`p-3.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-[#2f3223] border-[#444932]' : 'bg-white border-[#c5c9ac]/50'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  <Smartphone size={18} className="text-[#536600] dark:text-[#d4ff00]" />
                  <span>Web App & PWA</span>
                </div>
                <p className="text-xs text-[#444932] dark:text-[#c5c9ac]">
                  Bisa dibuka di smartphone tanpa perlu install Playstore.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenWhatsApp('Halo bayu digital, saya tertarik membuat sistem untuk bisnis saya.')}
                className="bg-[#536600] hover:bg-[#3e4c00] text-white font-bold text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
              >
                <span>Konsultasi Solusi Gratis</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Interactive Device Mockup Grid */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Interactive Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#eef0da] dark:bg-[#2f3223] border border-[#c5c9ac]/40">
              <button
                onClick={() => setActiveTab('hotel')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'hotel'
                    ? 'bg-[#d4ff00] text-[#171e00] shadow-sm scale-102'
                    : 'text-[#444932] dark:text-[#e2e4cf] hover:text-[#1a1d10]'
                }`}
              >
                <Building2 size={14} />
                <span>Hotel System</span>
              </button>

              <button
                onClick={() => setActiveTab('erp')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'erp'
                    ? 'bg-[#d4ff00] text-[#171e00] shadow-sm scale-102'
                    : 'text-[#444932] dark:text-[#e2e4cf] hover:text-[#1a1d10]'
                }`}
              >
                <PieChart size={14} />
                <span>ERP & Financial</span>
              </button>

              <button
                onClick={() => setActiveTab('ai')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'ai'
                    ? 'bg-[#d4ff00] text-[#171e00] shadow-sm scale-102'
                    : 'text-[#444932] dark:text-[#e2e4cf] hover:text-[#1a1d10]'
                }`}
              >
                <Sparkles size={14} />
                <span>AI Photo Studio</span>
              </button>

              <button
                onClick={() => setActiveTab('brochure')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'brochure'
                    ? 'bg-[#d4ff00] text-[#171e00] shadow-sm scale-102'
                    : 'text-[#444932] dark:text-[#e2e4cf] hover:text-[#1a1d10]'
                }`}
              >
                <Smartphone size={14} />
                <span>Brosur Online</span>
              </button>
            </div>

            {/* Device Mockup Frame Container */}
            <div className={`relative p-6 sm:p-8 rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 ${
              darkMode ? 'bg-[#2f3223] border-[#444932]' : 'bg-white border-[#c5c9ac]/40'
            }`}>
              
              {/* Main Mockup Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c5c9ac]/30 bg-[#f9fbe5] dark:bg-[#1a1d10]">
                <img
                  src={MOCKUP_IMAGE_URL}
                  alt="Asymmetrical grid of modern digital UI device mockups showing calendar, photos, and lists"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Dynamic Floating Live Preview UI Overlay based on activeTab */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-[#1a1d10]/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#536600] dark:text-[#d4ff00]">
                      {activeTab === 'hotel' && 'Direct Hotel Booking Live Engine'}
                      {activeTab === 'erp' && 'Real-time ERP Financial Dashboard'}
                      {activeTab === 'ai' && 'AI Product Photography Studio'}
                      {activeTab === 'brochure' && 'Brosur Online & WhatsApp Order System'}
                    </span>
                    <h3 className="text-sm font-bold text-[#1a1d10] dark:text-white">
                      {activeTab === 'hotel' && 'Kamar Deluxe Ocean View — Rp 850.000 / malam'}
                      {activeTab === 'erp' && 'Laporan Penjualan Bulan Ini — Rp 48.250.000'}
                      {activeTab === 'ai' && 'Generated Studio Lighting (99.4% Realistic)'}
                      {activeTab === 'brochure' && 'Katalog Menu Interaktif + Direct WA Checkout'}
                    </h3>
                  </div>

                  <button
                    onClick={() => onOpenWhatsApp(`Saya mau konsultasi khusus untuk modul: ${activeTab.toUpperCase()}`)}
                    className="bg-[#d4ff00] text-[#171e00] hover:bg-[#caf300] font-bold text-xs px-3.5 py-2 rounded-xl shrink-0 transition-transform hover:scale-105"
                  >
                    Tanya Fitur Ini →
                  </button>
                </div>
              </div>

              {/* Sub-Feature Badges Row */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-semibold font-['Geist'] text-[#444932] dark:text-[#e2e4cf]">
                <div className="p-2.5 rounded-xl bg-[#eef0da] dark:bg-[#1a1d10]/60 flex items-center justify-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#536600] dark:text-[#d4ff00]" />
                  <span>Keamanan SSL</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#eef0da] dark:bg-[#1a1d10]/60 flex items-center justify-center gap-1.5">
                  <Calendar size={14} className="text-[#536600] dark:text-[#d4ff00]" />
                  <span>Kalender Sync</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#eef0da] dark:bg-[#1a1d10]/60 flex items-center justify-center gap-1.5">
                  <Check size={14} className="text-[#536600] dark:text-[#d4ff00]" />
                  <span>Mobile First</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

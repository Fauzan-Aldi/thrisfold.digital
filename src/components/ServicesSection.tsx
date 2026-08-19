import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, PieChart, Sparkles, Building2, Smartphone, Calendar, Check } from 'lucide-react';

interface ServicesSectionProps {
  darkMode: boolean;
  onOpenWhatsApp: (note?: string) => void;
}

const services = [
  {
    id: 'website',
    label: 'Website',
    color: '#0EA5E9',
    textColor: '#0d0d0d',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJKztO8E-FugmQbxuRkD78d7nzY1lL0Q2vPGrHdzRhDyjxojFNq5awtnQ2zkOFkoPBy_e11o9EP7B5E6syhK-ALdE5TpnO_zsv20Ct42qCdJU4od7EeEnR2cwQcYRea4f0lVEdp1d4pdAE6ZTE9LHfNtiaSbBwcPXyr_LLpWE2g_JUmmPgOvHB7dknDwpM2nzHUG1IAm0RinyKSdJf4o8viLrckjmt0D3s0gsxjzFIfxNK1ubasaEWPdiafHhi4mHoUiK2EeAi8',
    icon: <Smartphone size={22} />,
    tagline: 'Company Profile & Landing Page',
    desc: 'Website modern, cepat, dan mobile-friendly untuk bisnis kamu tampil profesional.',
    cta: 'website',
  },
  {
    id: 'erp',
    label: 'ERP Custom',
    color: '#0EA5E9',
    textColor: '#f9fbe5',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    icon: <PieChart size={22} />,
    tagline: 'Sistem Operasional & Keuangan',
    desc: 'Pencatatan kasir, stok inventoris, laporan laba/rugi otomatis untuk bisnis mandiri.',
    cta: 'ERP Custom',
  },
  {
    id: 'ai',
    label: 'AI Automation',
    color: '#1a1d10',
    textColor: '#0EA5E9',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    icon: <Sparkles size={22} />,
    tagline: 'AI Generative & Otomatisasi',
    desc: 'Foto produk AI, chatbot customer service, dan otomatisasi alur kerja bisnis.',
    cta: 'AI Automation',
  },
  {
    id: 'ecommerce',
    label: 'Ecommerce',
    color: '#2f3223',
    textColor: '#f9fbe5',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    icon: <Building2 size={22} />,
    tagline: 'Toko Online & Booking System',
    desc: 'Platform jual-beli dan sistem reservasi langsung tanpa komisi pihak ketiga.',
    cta: 'Ecommerce',
  },
  {
    id: 'training',
    label: 'Training',
    color: '#444932',
    textColor: '#f9fbe5',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    icon: <Calendar size={22} />,
    tagline: 'Pelatihan & Pendampingan Tim',
    desc: 'Kami latih tim kamu agar bisa operasikan sistem secara mandiri dan percaya diri.',
    cta: 'Training',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode, onOpenWhatsApp }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="layanan"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f4f5df] text-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 2-column layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-widest font-['Geist']">
              LAYANAN
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0d0d0d]">
              Semua yang Bisnis Kamu Butuhin.
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-base leading-relaxed text-[#333333] font-medium">
              Mulai dari website company profile, sistem operasi ERP, hingga otomatisasi AI. Kami siap buatkan.
            </p>
            <p className="font-['Manrope'] text-xs text-[#666666] italic">
              Arahkan kursor ke layanan untuk melihat preview →
            </p>
          </div>

          {/* Right Accordion Cards */}
          <div className="lg:col-span-8">
            <div className="flex gap-3 h-[420px] sm:h-[500px]">
              {services.map((svc) => {
                const isOpen = hoveredId === svc.id;
                return (
                  <div
                    key={svc.id}
                    onMouseEnter={() => setHoveredId(svc.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      flex: isOpen ? '5 1 0%' : '1 1 0%',
                      backgroundColor: svc.color,
                      transition: 'flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    className="relative rounded-3xl overflow-hidden cursor-pointer select-none"
                  >
                    {/* Background image — visible on hover */}
                    <div
                      style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.4s ease' }}
                      className="absolute inset-0"
                    >
                      <img src={svc.image} alt={svc.label} className="w-full h-full object-cover" />
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to top, ${svc.color}ee 0%, ${svc.color}99 40%, transparent 100%)` }}
                      />
                    </div>

                    {/* Collapsed label */}
                    <div
                      style={{ opacity: isOpen ? 0 : 1, transition: 'opacity 0.3s ease', pointerEvents: isOpen ? 'none' : 'auto' }}
                      className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-3"
                    >
                      <div style={{ color: svc.textColor }} className="flex flex-col items-center gap-3">
                        <div className="opacity-80">{svc.icon}</div>
                        <span
                          className="text-xs font-black uppercase tracking-widest font-['Geist'] whitespace-nowrap"
                          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                        >
                          {svc.label}
                        </span>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
                        transition: 'opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s',
                        pointerEvents: isOpen ? 'auto' : 'none',
                      }}
                      className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
                    >
                      <div style={{ color: svc.textColor }} className="space-y-2">
                        <div className="flex items-center gap-2 opacity-80 mb-3">
                          {svc.icon}
                          <span className="text-xs font-bold uppercase tracking-widest font-['Geist']">{svc.label}</span>
                        </div>
                        <h3 className="font-['Hanken_Grotesk'] text-lg sm:text-xl font-extrabold leading-tight">{svc.tagline}</h3>
                        <p className="font-['Manrope'] text-xs sm:text-sm leading-relaxed opacity-80">{svc.desc}</p>
                        <button
                          onClick={() => onOpenWhatsApp(`Halo karsa digital, saya tertarik dengan layanan ${svc.cta}.`)}
                          className="mt-4 inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full transition-transform hover:scale-105"
                          style={{ backgroundColor: svc.textColor, color: svc.color }}
                        >
                          <span>Tanya Sekarang</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface PricingSectionProps {
  darkMode: boolean;
  onOpenWhatsApp: (note?: string) => void;
}

const PACKAGES = [
  {
    id: 'website-umkm',
    name: 'Paket Website UMKM',
    price: 'Mulai dari Rp 750.000',
    period: '/ tahun',
    wa: 'Halo karsa digital, saya berminat dengan Paket Website UMKM mulai dari Rp 750.000.',
  },
  {
    id: 'sistem-erp',
    name: 'Paket Sistem & ERP',
    price: 'Mulai dari Rp 7.000.000',
    period: '',
    wa: 'Halo karsa digital, saya berminat dengan Paket Sistem & ERP mulai dari Rp 7.000.000.',
  },
  {
    id: 'go-digital',
    name: 'Go-Digital Starter',
    price: 'Mulai dari Rp 2.500.000',
    period: '',
    wa: 'Halo karsa digital, saya berminat dengan paket Go-Digital Starter.',
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    price: 'Mulai dari Rp 3.500.000',
    period: '',
    wa: 'Halo karsa digital, saya berminat dengan layanan AI Automation.',
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ darkMode, onOpenWhatsApp }) => {
  return (
    <section id="harga" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f9fbe5] text-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0d0d0d]">
            Harga yang Tidak Bikin Kaget
          </h2>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#555] leading-relaxed">
            Kami percaya transparansi harga adalah bentuk menghormati waktu kamu.
          </p>
        </div>

        {/* Package rows */}
        <div className="space-y-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="flex items-center justify-between gap-4 px-6 py-5 rounded-2xl border border-[#0d0d0d] cursor-default"
            >
              <span className="font-['Hanken_Grotesk'] text-base sm:text-lg font-bold text-[#0d0d0d]">
                {pkg.name}
              </span>
              <span className="font-['Geist'] text-sm sm:text-base font-semibold text-[#0d0d0d] whitespace-nowrap">
                {pkg.price}{pkg.period && <span className="text-[#0d0d0d] font-normal"> {pkg.period}</span>}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center font-['Manrope'] text-xs sm:text-sm text-[#0EA5E9] mt-8">
          *Harga dapat berbeda sesuai kebutuhan. Konsultasi gratis sebelum komitmen apapun.
        </p>



      </div>
    </section>
  );
};

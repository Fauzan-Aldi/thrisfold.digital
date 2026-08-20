import React from 'react';
import { t } from '../data/translations';
import { Language } from '../types';

interface PricingSectionProps {
  darkMode: boolean;
  onOpenWhatsApp: (note?: string) => void;
  language: Language;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ darkMode, onOpenWhatsApp, language }) => {
  const tr = t[language].pricing;
  const PACKAGES = tr.packages.map((pkg, i) => ({
    id: ['website-umkm','sistem-erp','go-digital','ai-automation'][i],
    name: pkg.name,
    price: pkg.price,
    period: pkg.period,
    wa: `Halo karsa digital, saya berminat dengan ${pkg.name}.`,
  }));

  return (
    <section id="harga" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f9fbe5] text-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="font-['Hanken_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0d0d0d]">
            {tr.heading}
          </h2>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#555] leading-relaxed">
            {tr.sub}
          </p>
        </div>
        <div className="space-y-4">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="rounded-2xl border border-[#0d0d0d] overflow-hidden cursor-default">
              {/* Desktop: satu baris */}
              <div className="hidden sm:flex items-center justify-between gap-4 px-5 py-4">
                <span className="font-['Hanken_Grotesk'] text-base font-bold text-[#0d0d0d]">{pkg.name}</span>
                <span className="font-['Geist'] text-sm font-semibold text-[#0d0d0d]">
                  {pkg.price}{pkg.period && <span className="font-normal"> {pkg.period}</span>}
                </span>
              </div>

              {/* Mobile: nama di atas, garis, harga di bawah */}
              <div className="sm:hidden px-6 pt-6 pb-6 space-y-4">
                <span className="font-['Hanken_Grotesk'] text-lg font-bold text-[#0d0d0d] block">{pkg.name}</span>
                <hr className="border-[#0d0d0d]/20" />
                <span className="font-['Geist'] text-base font-semibold text-[#0d0d0d] block">
                  {pkg.price}{pkg.period && <span className="font-normal"> {pkg.period}</span>}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-['Manrope'] text-xs sm:text-sm text-[#0EA5E9] mt-8">
          {tr.note}
        </p>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PRICING_PACKAGES, ESTIMATOR_FEATURES } from '../data/landingData';
import { PricingPackage, EstimatorFeature } from '../types';
import { Check, MessageSquare, Calculator, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  darkMode: boolean;
  onOpenWhatsApp: (note?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ darkMode, onOpenWhatsApp }) => {
  const [showEstimator, setShowEstimator] = useState<boolean>(false);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([
    'landing-page',
    'wa-bot'
  ]);

  const toggleFeature = (id: string) => {
    if (selectedFeatureIds.includes(id)) {
      setSelectedFeatureIds(selectedFeatureIds.filter((item) => item !== id));
    } else {
      setSelectedFeatureIds([...selectedFeatureIds, id]);
    }
  };

  const calculatedTotal = selectedFeatureIds.reduce((sum, id) => {
    const feat = ESTIMATOR_FEATURES.find((f) => f.id === id);
    return sum + (feat ? feat.price : 0);
  }, 0);

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <section id="harga" className={`py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-[#2f3223] text-[#f9fbe5]' : 'bg-[#eef0da] text-[#1a1d10]'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#536600]/10 dark:bg-[#d4ff00]/10 text-[#536600] dark:text-[#d4ff00] text-xs font-bold uppercase tracking-widest font-['Geist']">
            TRANSPARANSI HARGA
          </div>

          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold tracking-tight">
            Harga yang Tidak Bikin Kaget
          </h2>

          <p className="font-['Manrope'] text-base sm:text-lg text-[#444932] dark:text-[#e2e4cf] font-medium leading-relaxed">
            Kami percaya transparansi harga adalah bentuk menghormati waktu kamu.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setShowEstimator(!showEstimator)}
              className="bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-sm transition-transform hover:scale-105"
            >
              <Calculator size={16} />
              <span>{showEstimator ? 'Tutup Kalkulator Estimasi' : 'Simulasi Estimator Biaya Custom'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Estimator Tool Drawer / Block */}
        {showEstimator && (
          <div className={`mb-16 p-6 sm:p-8 rounded-3xl border shadow-xl transition-all animate-fadeIn ${
            darkMode ? 'bg-[#1a1d10] border-[#444932]' : 'bg-white border-[#c5c9ac]'
          }`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-[#c5c9ac]/30">
              <div>
                <span className="text-xs font-bold uppercase text-[#536600] dark:text-[#d4ff00] font-['Geist']">
                  Interactive Cost Estimator
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold">Pilih Fitur yang Kamu Butuhkan</h3>
              </div>

              <div className="p-4 rounded-2xl bg-[#d4ff00] text-[#171e00] text-right">
                <span className="text-xs font-bold block uppercase tracking-wider font-['Geist']">Estimasi Total Investment</span>
                <span className="text-2xl sm:text-3xl font-extrabold font-['Hanken_Grotesk']">{formatRupiah(calculatedTotal)}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {ESTIMATOR_FEATURES.map((feat: EstimatorFeature) => {
                const isSelected = selectedFeatureIds.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? darkMode
                          ? 'bg-[#2f3223] border-[#d4ff00] shadow-md'
                          : 'bg-[#f9fbe5] border-[#536600] shadow-sm'
                        : darkMode
                        ? 'bg-[#1a1d10] border-[#444932]/60 hover:border-[#c5c9ac]'
                        : 'bg-white border-[#c5c9ac]/40 hover:border-[#536600]'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className="font-bold text-sm leading-tight text-[#1a1d10] dark:text-[#f9fbe5]">
                          {feat.name}
                        </span>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                          isSelected ? 'bg-[#d4ff00] border-[#d4ff00] text-[#171e00]' : 'border-[#c5c9ac]'
                        }`}>
                          {isSelected && <Check size={14} />}
                        </div>
                      </div>
                      <p className="text-xs text-[#444932] dark:text-[#c5c9ac] leading-normal mb-3">
                        {feat.description}
                      </p>
                    </div>

                    <div className="text-xs font-extrabold text-[#536600] dark:text-[#d4ff00] font-['Geist']">
                      +{formatRupiah(feat.price)}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#c5c9ac]/30">
              <span className="text-xs text-[#757a60] dark:text-[#c5c9ac] font-['Geist']">
                *Estimasi ini bersifat fleksibel dan dapat disesuaikan dengan scope pengerjaan riil.
              </span>

              <button
                onClick={() => {
                  const names = selectedFeatureIds.map((id) => ESTIMATOR_FEATURES.find((f) => f.id === id)?.name).join(', ');
                  onOpenWhatsApp(`Halo bayu digital, saya membuat estimasi di website sebesar ${formatRupiah(calculatedTotal)} dengan fitur: ${names}`);
                }}
                className="w-full sm:w-auto bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] font-bold text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
              >
                <MessageSquare size={16} />
                <span>Kirim Estimasi ke WhatsApp →</span>
              </button>
            </div>
          </div>
        )}

        {/* Pricing Cards Table */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg: PricingPackage) => (
            <div
              key={pkg.id}
              className={`relative p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? darkMode
                    ? 'bg-[#1a1d10] border-[#d4ff00] shadow-2xl scale-102'
                    : 'bg-white border-[#536600] shadow-2xl scale-102 ring-2 ring-[#d4ff00]'
                  : darkMode
                  ? 'bg-[#1a1d10]/60 border-[#444932]'
                  : 'bg-[#f9fbe5] border-[#c5c9ac]/60'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d4ff00] text-[#171e00] font-bold font-['Geist'] text-xs px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}

              <div>
                {!pkg.popular && pkg.badge && (
                  <span className="inline-block text-xs font-bold text-[#536600] dark:text-[#d4ff00] mb-2 font-['Geist']">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold mb-2 text-[#1a1d10] dark:text-[#f9fbe5]">
                  {pkg.name}
                </h3>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] text-[#1a1d10] dark:text-white">
                    {pkg.price}
                  </span>
                  {pkg.period && (
                    <span className="text-xs text-[#757a60] dark:text-[#c5c9ac] font-medium font-['Geist']">
                      {pkg.period}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#444932] dark:text-[#e2e4cf] mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#c5c9ac]/30 mb-8">
                  {pkg.features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1a1d10] dark:text-[#f9fbe5]">
                      <div className="w-4 h-4 rounded-full bg-[#d4ff00] text-[#171e00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenWhatsApp(`Halo bayu digital, saya berminat dengan ${pkg.name} (${pkg.price}).`)}
                className={`w-full font-bold font-['Manrope'] text-sm py-3.5 rounded-full flex items-center justify-center gap-2 transition-all ${
                  pkg.popular
                    ? 'bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] shadow-md hover:scale-105'
                    : 'bg-[#536600] hover:bg-[#3e4c00] text-white'
                }`}
              >
                <MessageSquare size={16} />
                <span>Pilih Paket Ini</span>
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee Banner Text */}
        <p className="text-center font-['Geist'] text-xs sm:text-sm text-[#757a60] dark:text-[#c5c9ac] mt-12">
          *Harga dapat berbeda sesuai kebutuhan khusus. Konsultasi gratis sebelum komitmen apapun.
        </p>

      </div>
    </section>
  );
};

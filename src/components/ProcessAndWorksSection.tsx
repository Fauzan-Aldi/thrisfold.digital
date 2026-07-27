import React, { useState } from 'react';
import { PROCESS_STEPS, PORTFOLIO_PROJECTS } from '../data/landingData';
import { PortfolioProject, ProcessStep } from '../types';
import { Plus, Minus, ArrowUpRight, Sparkles, Clock, CheckCircle2, Layers } from 'lucide-react';

interface ProcessAndWorksSectionProps {
  darkMode: boolean;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenWhatsApp: (note?: string) => void;
}

export const ProcessAndWorksSection: React.FC<ProcessAndWorksSectionProps> = ({
  darkMode,
  onSelectProject,
  onOpenWhatsApp,
}) => {
  const [expandedStep, setExpandedStep] = useState<string>('01');

  const toggleStep = (num: string) => {
    setExpandedStep(expandedStep === num ? '' : num);
  };

  return (
    <section id="cara-kerja" className={`py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-[#1a1d10] text-[#f9fbe5]' : 'bg-[#f9fbe5] text-[#1a1d10]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left Column: 5 Langkah Kerja Dengan Bayu */}
          <div>
            <span className="font-['Geist'] text-xs font-bold text-[#536600] dark:text-[#d4ff00] uppercase tracking-widest mb-3 block">
              CARA KERJA
            </span>
            
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8">
              5 Langkah<br />
              <span className="text-[#536600] dark:text-[#d4ff00]">Dengan Bayu</span>
            </h2>

            {/* Accordion Steps List */}
            <div className="space-y-4">
              {PROCESS_STEPS.map((step: ProcessStep) => {
                const isOpen = expandedStep === step.number;
                return (
                  <div
                    key={step.number}
                    className={`border-b transition-all rounded-2xl overflow-hidden ${
                      isOpen
                        ? darkMode
                          ? 'bg-[#2f3223] border-[#444932] p-5 shadow-lg'
                          : 'bg-[#eef0da] border-[#c5c9ac] p-5 shadow-sm'
                        : darkMode
                        ? 'border-[#444932]/60 hover:bg-[#2f3223]/50 py-4 px-2'
                        : 'border-[#c5c9ac]/60 hover:bg-[#eef0da]/50 py-4 px-2'
                    }`}
                  >
                    <button
                      onClick={() => toggleStep(step.number)}
                      className="w-full text-left flex justify-between items-center gap-4 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-['Geist'] text-sm sm:text-base font-bold text-[#757a60] dark:text-[#c5c9ac]">
                          {step.number}
                        </span>
                        <h3 className="font-['Manrope'] text-lg sm:text-xl font-bold group-hover:text-[#536600] dark:group-hover:text-[#d4ff00] transition-colors">
                          {step.title}
                        </h3>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen
                          ? 'bg-[#d4ff00] text-[#171e00] rotate-180'
                          : darkMode
                          ? 'bg-[#2f3223] text-[#c5c9ac]'
                          : 'bg-[#eef0da] text-[#536600]'
                      }`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {/* Accordion Details Content */}
                    {isOpen && (
                      <div className="mt-4 pt-3 border-t border-[#c5c9ac]/30 space-y-4 animate-fadeIn">
                        <p className="text-sm sm:text-base text-[#444932] dark:text-[#e2e4cf] leading-relaxed font-medium">
                          {step.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {step.deliverables.map((item, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/70 dark:bg-[#1a1d10]/70 text-[#1a1d10] dark:text-[#f9fbe5] border border-[#c5c9ac]/40"
                            >
                              <CheckCircle2 size={12} className="text-[#536600] dark:text-[#d4ff00]" />
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-[#757a60] dark:text-[#c5c9ac] font-['Geist'] pt-2">
                          <span className="flex items-center gap-1 font-semibold">
                            <Clock size={14} />
                            Estimasi waktu: {step.estimatedDays}
                          </span>
                          <button
                            onClick={() => onOpenWhatsApp(`Saya mau tanya detail langkah ${step.number}: ${step.title}`)}
                            className="text-[#536600] dark:text-[#d4ff00] font-bold hover:underline"
                          >
                            Tanyakan Langkah Ini →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Karya Kami / Portofolio Showcase */}
          <div id="portfolio">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="font-['Geist'] text-xs font-bold text-[#536600] dark:text-[#d4ff00] uppercase tracking-widest mb-3 block">
                  KARYA KAMI
                </span>
                <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Produk & Software Pilihan
                </h2>
              </div>
              <span className="hidden sm:block text-xs font-semibold text-[#757a60] dark:text-[#c5c9ac] font-['Geist']">
                Klik untuk detail & demo
              </span>
            </div>

            {/* Works List Grid */}
            <div className="space-y-4">
              {PORTFOLIO_PROJECTS.map((project: PortfolioProject) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    darkMode
                      ? 'bg-[#2f3223] border-[#444932] hover:border-[#d4ff00] hover:bg-[#3e4c00]/30'
                      : 'bg-[#f4f5df] border-[#c5c9ac]/60 hover:border-[#536600] hover:bg-[#eef0da]'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#d4ff00] text-[#171e00] font-['Geist']">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-[#1a1d10] flex items-center justify-center text-[#1a1d10] dark:text-white group-hover:bg-[#d4ff00] group-hover:text-[#171e00] transition-colors shadow-xs">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-extrabold mb-2 text-[#1a1d10] dark:text-[#f9fbe5] group-hover:text-[#536600] dark:group-hover:text-[#d4ff00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-['Manrope'] text-sm sm:text-base text-[#444932] dark:text-[#e2e4cf] leading-relaxed font-medium mb-4">
                    {project.subtitle}
                  </p>

                  <div className="flex items-center justify-between text-xs font-semibold text-[#757a60] dark:text-[#c5c9ac] pt-2 border-t border-[#c5c9ac]/30">
                    <span className="font-['Geist'] text-[#536600] dark:text-[#d4ff00] font-bold">
                      {project.badgeText}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                      Lihat Demo System →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Project Banner Callout */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#536600] to-[#3e4c00] text-white flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xl">
              <div>
                <h4 className="font-['Hanken_Grotesk'] text-xl font-bold">Punya Ide Sistem Sendiri?</h4>
                <p className="text-xs sm:text-sm text-white/90">Kami siap merancang software custom khusus alur bisnis kamu.</p>
              </div>
              <button
                onClick={() => onOpenWhatsApp('Saya mau request custom software khusus untuk bisnis saya.')}
                className="bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] font-bold text-xs px-5 py-3 rounded-full shrink-0 transition-transform hover:scale-105"
              >
                Diskusi Custom Idea →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

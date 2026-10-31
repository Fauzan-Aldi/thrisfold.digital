import React, { useState } from 'react';
import { PROCESS_STEPS, PORTFOLIO_PROJECTS } from '../data/landingData';
import { PortfolioProject, ProcessStep, Language } from '../types';
import { Plus, X } from 'lucide-react';
import { t } from '../data/translations';
import { ScrollReveal } from './common/ScrollReveal';

const PortfolioList: React.FC = () => {
  return (
    <div className="divide-y divide-[#c5c9ac]/50">
      {PORTFOLIO_PROJECTS.map((project) => (
        <div
          key={project.id}
          className="py-6 sm:py-8 flex flex-col gap-2 cursor-default select-none"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d0d0d] leading-tight">
              {project.title}
            </h3>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#0EA5E9]/15 text-[#0EA5E9] font-['Geist'] uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#444] leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

interface ProcessAndWorksSectionProps {
  darkMode: boolean;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenWhatsApp: (note?: string) => void;
  language: Language;
}

export const ProcessAndWorksSection: React.FC<ProcessAndWorksSectionProps> = React.memo(({
  darkMode, onSelectProject, onOpenWhatsApp, language,
}) => {
  const tr = t[language].process;
  const [expandedStep, setExpandedStep] = useState<string>('');
  const toggleStep = (num: string) => {
    setExpandedStep(expandedStep === num ? '' : num);
  };

  return (
    <section id="cara-kerja" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f9fbe5] text-[#0d0d0d] overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* Left: Label + Heading  sticky hanya di desktop */}
          <ScrollReveal direction="right" duration={750} className="lg:sticky lg:top-24 self-start">
            <span className="font-['Geist'] text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-4 block">
              {tr.badge}
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#0d0d0d]">
              {tr.heading1}<br />
              <span className="text-[#0EA5E9]">{tr.heading2}</span>
            </h2>
            <p className="mt-4 font-['Manrope'] text-sm sm:text-base text-[#444] leading-relaxed max-w-sm">
              {tr.sub}
            </p>
          </ScrollReveal>

          {/* Right: Accordion Steps */}
          <ScrollReveal direction="left" delay={120} duration={800} className="divide-y divide-[#c5c9ac]/50">
            {PROCESS_STEPS.map((step: ProcessStep) => {
              const isOpen = expandedStep === step.number;
              return (
                <div key={step.number} className="py-5">
                  <button
                    onClick={() => toggleStep(step.number)}
                    className="w-full flex items-center gap-4 group text-left"
                  >
                    {/* Number badge */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-['Geist'] text-xs font-bold transition-colors ${
                      isOpen ? 'bg-[#0d0d0d] text-white' : 'bg-[#e8e9d8] text-[#555]'
                    }`}>
                      {step.number}
                    </div>

                    {/* Title */}
                    <span className={`flex-1 font-['Hanken_Grotesk'] text-lg sm:text-xl font-bold transition-colors ${
                      isOpen ? 'text-[#0d0d0d]' : 'text-[#333] group-hover:text-[#0d0d0d]'
                    }`}>
                      {step.title}
                    </span>

                    {/* Toggle icon */}
                    <div className="shrink-0 text-[#777] group-hover:text-[#0d0d0d] transition-colors">
                      {isOpen ? <X size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="mt-4 ml-[52px] animate-fadeIn">
                      <p className="font-['Manrope'] text-sm sm:text-base text-[#444] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </ScrollReveal>

        </div>

        {/* Portfolio section */}
        <ScrollReveal direction="up" delay={80} duration={800} className="mt-16 lg:mt-32">
          <div id="portfolio">
            <span className="font-['Geist'] text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-6 block">
              {tr.portfolioBadge}
            </span>

            <PortfolioList />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
});

ProcessAndWorksSection.displayName = 'ProcessAndWorksSection';

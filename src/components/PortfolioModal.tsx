import React from 'react';
import { PortfolioProject } from '../types';
import { X, Check, MessageSquare, ExternalLink, ShieldCheck, Sparkles, Code2, BarChart2 } from 'lucide-react';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenWhatsApp: (note?: string) => void;
  darkMode: boolean;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  onClose,
  onOpenWhatsApp,
  darkMode,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
          darkMode ? 'bg-[#1a1d10] text-[#f9fbe5] border-[#444932]' : 'bg-[#f9fbe5] text-[#1a1d10] border-[#c5c9ac]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#eef0da] dark:bg-[#2f3223] text-[#1a1d10] dark:text-white hover:opacity-80 transition-opacity"
        >
          <X size={20} />
        </button>

        {/* Header Category & Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#d4ff00] text-[#171e00] font-['Geist']">
            {project.category}
          </span>
          <span className="text-xs font-medium text-[#757a60] dark:text-[#c5c9ac]">
            {project.badgeText}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold mb-2">
          {project.title}
        </h2>

        <p className="font-['Manrope'] text-base sm:text-lg text-[#444932] dark:text-[#e2e4cf] font-medium mb-6">
          {project.subtitle}
        </p>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#eef0da] dark:bg-[#2f3223] mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <span className="text-xs text-[#757a60] dark:text-[#c5c9ac] font-['Geist'] block uppercase tracking-wider">
                {m.label}
              </span>
              <span className="text-xl sm:text-2xl font-black font-['Hanken_Grotesk'] text-[#536600] dark:text-[#d4ff00]">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#536600] dark:text-[#d4ff00] font-['Geist']">
            Gambaran Fitur & Solusi
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#444932] dark:text-[#e2e4cf]">
            {project.description}
          </p>

          <div className="space-y-2 pt-2">
            {project.fullDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-[#1a1d10] dark:text-[#f9fbe5]">
                <div className="w-4 h-4 rounded-full bg-[#d4ff00] text-[#171e00] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#757a60] dark:text-[#c5c9ac] font-['Geist'] mb-2 block">
            Teknologi yang Digunakan
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-[#2f3223] border border-[#c5c9ac]/40 text-[#1a1d10] dark:text-[#f9fbe5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#c5c9ac]/30">
          <button
            onClick={() => {
              onClose();
              onOpenWhatsApp(`Halo bayu digital, saya ingin konsultasi pembuatan sistem serupa ${project.title}.`);
            }}
            className="flex-1 bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
          >
            <MessageSquare size={18} />
            <span>Buatkan Sistem Seperti Ini</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3.5 rounded-full border border-[#c5c9ac] font-bold text-sm text-[#444932] dark:text-[#e2e4cf] hover:bg-[#eef0da] dark:hover:bg-[#2f3223]"
          >
            Tutup Preview
          </button>
        </div>

      </div>
    </div>
  );
};

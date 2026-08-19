import React, { useState, useRef, useEffect } from 'react';
import { PROCESS_STEPS, PORTFOLIO_PROJECTS } from '../data/landingData';
import { PortfolioProject, ProcessStep } from '../types';
import { Plus, X, ArrowUpRight } from 'lucide-react';

// Mockup images per project
const PROJECT_IMAGES: Record<string, string> = {
  'brosur-online': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJKztO8E-FugmQbxuRkD78d7nzY1lL0Q2vPGrHdzRhDyjxojFNq5awtnQ2zkOFkoPBy_e11o9EP7B5E6syhK-ALdE5TpnO_zsv20Ct42qCdJU4od7EeEnR2cwQcYRea4f0lVEdp1d4pdAE6ZTE9LHfNtiaSbBwcPXyr_LLpWE2g_JUmmPgOvHB7dknDwpM2nzHUG1IAm0RinyKSdJf4o8viLrckjmt0D3s0gsxjzFIfxNK1ubasaEWPdiafHhi4mHoUiK2EeAi8',
  'vaneshub': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  'foto-produk-ai': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  'hotel-booking-system': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
};

interface PortfolioListProps {
  // no props needed
}

const PortfolioList: React.FC<PortfolioListProps> = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth lerp loop for floating image
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      setSmoothPos(prev => ({
        x: lerp(prev.x, targetRef.current.x, 0.12),
        y: lerp(prev.y, targetRef.current.y, 0.12),
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseEnter = (id: string) => {
    // Cancel any pending leave timer so switching items is instant
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setHoveredId(id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
    leaveTimerRef.current = setTimeout(() => {
      setHoveredId(null);
      leaveTimerRef.current = null;
    }, 250);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-visible"
      onMouseMove={handleMouseMove}
    >
      {/* Floating image — follows cursor with smooth lerp */}
      <div
        className="pointer-events-none absolute z-30"
        style={{
          left: smoothPos.x + 32,
          top: smoothPos.y - 130,
          opacity: visible && hoveredId ? 1 : 0,
          transform: `scale(${visible && hoveredId ? 1 : 0.88}) rotate(${visible ? '-2deg' : '0deg'})`,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {hoveredId && PROJECT_IMAGES[hoveredId] && (
          <div className="w-60 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <img
              src={PROJECT_IMAGES[hoveredId]}
              alt="preview"
              className="w-full h-40 object-cover"
            />
          </div>
        )}
      </div>

      {/* List rows */}
      <div className="divide-y divide-[#c5c9ac]/50">
        {PORTFOLIO_PROJECTS.map((project) => {
          const isHovered = hoveredId === project.id;
          const isOther = !!hoveredId && !isHovered;
          return (
            <div
              key={project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              className="group py-7 flex items-center justify-between gap-6 cursor-default"
              style={{ transition: 'opacity 0.2s ease' }}
            >
              <div
                className="flex-1 min-w-0"
                style={{
                  transform: isHovered ? 'translateX(8px)' : 'translateX(0px)',
                  transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {/* Title with animated underline */}
                <div className="relative inline-block">
                  <h3
                    className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
                    style={{
                      color: isOther ? '#aaa' : '#0d0d0d',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {project.title}
                  </h3>
                  {/* Underline bar */}
                  <span
                    className="block h-[3px] rounded-full bg-[#0EA5E9] mt-1"
                    style={{
                      width: isHovered ? '100%' : '0%',
                      transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  />
                </div>
                <p
                  className="mt-1 font-['Manrope'] text-sm"
                  style={{
                    color: isOther ? '#aaa' : '#555',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Arrow button */}
              <div
                className="shrink-0 w-9 h-9 rounded-full border flex items-center justify-center"
                style={{
                  backgroundColor: isHovered ? '#0EA5E9' : 'transparent',
                  borderColor: isHovered ? '#0EA5E9' : '#c5c9ac',
                  color: isHovered ? '#0d0d0d' : '#888',
                  transform: isHovered ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <ArrowUpRight size={16} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
    <section id="cara-kerja" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f9fbe5] text-[#0d0d0d] overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Label + Heading — sticky */}
          <div className="lg:sticky lg:top-24 self-start">
            <span className="font-['Geist'] text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-4 block">
              CARA KERJA
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#0d0d0d]">
              5 Langkah<br />
              <span className="text-[#0EA5E9]">Dengan Karsa</span>
            </h2>
            <p className="mt-5 font-['Manrope'] text-sm sm:text-base text-[#444] leading-relaxed max-w-sm">
              Dari obrolan pertama sampai sistem live — prosesnya transparan, terstruktur, dan tanpa kejutan.
            </p>
          </div>

          {/* Right: Accordion Steps */}
          <div className="divide-y divide-[#c5c9ac]/50">
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
          </div>

        </div>

        {/* Portfolio section */}
        <div id="portfolio" className="mt-24 lg:mt-32">
          <span className="font-['Geist'] text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-8 block">
            KARYA KAMI
          </span>

          <PortfolioList />


        </div>

      </div>
    </section>
  );
};

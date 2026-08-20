import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, PieChart, Sparkles, Building2, Smartphone, Calendar } from 'lucide-react';
import { t } from '../data/translations';
import { Language } from '../types';

interface ServicesSectionProps {
  darkMode: boolean;
  onOpenWhatsApp: (note?: string) => void;
  language: Language;
}


export const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode, onOpenWhatsApp, language }) => {
  const tr = t[language].services;
  const serviceIcons = [<Smartphone size={22} />, <PieChart size={22} />, <Sparkles size={22} />, <Building2 size={22} />, <Calendar size={22} />];
  const serviceColors = [
    { color: '#0EA5E9', textColor: '#0d0d0d', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJKztO8E-FugmQbxuRkD78d7nzY1lL0Q2vPGrHdzRhDyjxojFNq5awtnQ2zkOFkoPBy_e11o9EP7B5E6syhK-ALdE5TpnO_zsv20Ct42qCdJU4od7EeEnR2cwQcYRea4f0lVEdp1d4pdAE6ZTE9LHfNtiaSbBwcPXyr_LLpWE2g_JUmmPgOvHB7dknDwpM2nzHUG1IAm0RinyKSdJf4o8viLrckjmt0D3s0gsxjzFIfxNK1ubasaEWPdiafHhi4mHoUiK2EeAi8' },
    { color: '#0EA5E9', textColor: '#f9fbe5', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
    { color: '#1a1d10', textColor: '#0EA5E9', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80' },
    { color: '#2f3223', textColor: '#f9fbe5', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
    { color: '#444932', textColor: '#f9fbe5', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80' },
  ];
  const services = tr.items.map((item, i) => ({
    id: ['website','erp','ai','ecommerce','training'][i],
    label: item.label,
    tagline: item.tagline,
    desc: item.desc,
    cta: item.label,
    icon: serviceIcons[i],
    ...serviceColors[i],
  }));
  const [activeId, setActiveId] = useState<string>('website');
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth lerp loop — sama seperti Karya Kami
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
    if (!accordionRef.current) return;
    const rect = accordionRef.current.getBoundingClientRect();
    targetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!accordionRef.current) return;
    const touch = e.touches[0];
    const rect = accordionRef.current.getBoundingClientRect();
    targetRef.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
    // Cari card mana yang sedang disentuh
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const card = el?.closest('[data-service-id]');
    if (card) {
      const id = card.getAttribute('data-service-id');
      if (id) handleMouseEnter(id);
    }
  };

  const handleMouseEnter = (id: string) => {
    if (leaveTimerRef.current) { clearTimeout(leaveTimerRef.current); leaveTimerRef.current = null; }
    setActiveId(id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
    leaveTimerRef.current = setTimeout(() => {
      setActiveId('website');
      setVisible(false);
      leaveTimerRef.current = null;
    }, 250);
  };

  const handleInteract = (id: string) => setActiveId(id);

  return (
    <section
      id="layanan"
      className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f4f5df] text-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-4 space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-widest font-['Geist']">
              {tr.badge}
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0d0d0d]">
              {tr.heading}
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-base leading-relaxed text-[#333333] font-medium">
              {tr.sub}
            </p>
            <p className="hidden lg:block font-['Manrope'] text-xs text-[#666666] italic">
              {tr.hint}
            </p>
          </div>

          {/* Right: Desktop = horizontal accordion, Mobile = vertical stack */}
          <div className="lg:col-span-8">

            {/* ── DESKTOP: horizontal accordion ── */}
            <div
              ref={accordionRef}
              className="hidden lg:flex gap-3 h-[420px] relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseLeave}
            >
              {/* Preload semua gambar */}
              <div className="hidden">
                {services.map(svc => <img key={svc.id} src={svc.image} alt="" />)}
              </div>
              {services.map((svc) => {
                const isOpen = activeId === svc.id;
                return (
                  <div
                    key={svc.id}
                    data-service-id={svc.id}
                    onMouseEnter={() => handleMouseEnter(svc.id)}
                    onTouchStart={() => handleMouseEnter(svc.id)}
                    style={{
                      flex: isOpen ? '7 1 0%' : '1 1 0%',
                      backgroundColor: svc.color,
                      transition: 'flex 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                    className="relative rounded-3xl overflow-hidden cursor-pointer select-none"
                  >
                    {/* Background image — selalu di-render, opacity toggle */}
                    <div
                      style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.2s ease' }}
                      className="absolute inset-0"
                    >
                      <img
                        src={svc.image}
                        alt={svc.label}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to top, ${svc.color}ee 0%, ${svc.color}88 40%, transparent 100%)` }}
                      />
                    </div>

                    {/* Collapsed label */}
                    <div
                      style={{ opacity: isOpen ? 0 : 1, transition: 'opacity 0.3s ease', pointerEvents: isOpen ? 'none' : 'auto' }}
                      className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-3"
                    >
                      <div style={{ color: svc.textColor }} className="flex flex-col items-center gap-3">
                        <div className="opacity-80">{svc.icon}</div>
                        <span className="text-xs font-black uppercase tracking-widest font-['Geist'] whitespace-nowrap"
                          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
                          {svc.label}
                        </span>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                        transition: 'opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s',
                        pointerEvents: isOpen ? 'auto' : 'none',
                      }}
                      className="absolute bottom-0 left-0 right-0 p-6"
                    >
                      <div style={{ color: svc.textColor }} className="space-y-2">
                        <div className="flex items-center gap-2 opacity-80 mb-2">
                          {svc.icon}
                          <span className="text-xs font-bold uppercase tracking-widest font-['Geist']">{svc.label}</span>
                        </div>
                        <h3 className="font-['Hanken_Grotesk'] text-lg font-extrabold leading-tight">{svc.tagline}</h3>
                        <p className="font-['Manrope'] text-xs leading-relaxed opacity-80">{svc.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── MOBILE: vertical tap-to-open cards ── */}
            <div className="flex flex-col gap-3 lg:hidden">
              {services.map((svc) => {
                const isOpen = activeId === svc.id;
                return (
                  <div
                    key={svc.id}
                    onClick={() => handleInteract(svc.id)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer select-none"
                    style={{ backgroundColor: svc.color }}
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0"
                      style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.4s ease' }}
                    >
                      <img src={svc.image} alt={svc.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${svc.color}f0 0%, ${svc.color}66 60%, transparent 100%)` }} />
                    </div>

                    {/* Collapsed row */}
                    <div className="relative flex items-center justify-between px-5 py-5">
                      <div style={{ color: svc.textColor }} className="flex items-center gap-3">
                        {svc.icon}
                        <span className="font-['Geist'] text-sm font-black uppercase tracking-widest">{svc.label}</span>
                      </div>
                      <div
                        style={{ color: svc.textColor, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                      >
                        <ArrowRight size={18} />
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      style={{
                        maxHeight: isOpen ? '420px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        transition: 'max-height 0.4s ease, opacity 0.3s ease',
                        overflow: 'hidden',
                      }}
                    >
                      <div className="relative px-5 pb-6 space-y-2" style={{ paddingTop: '180px' }}>
                        <h3 className="font-['Hanken_Grotesk'] text-base font-extrabold leading-tight" style={{ color: svc.textColor }}>
                          {svc.tagline}
                        </h3>
                        <p className="font-['Manrope'] text-xs leading-relaxed" style={{ color: svc.textColor, opacity: 0.85 }}>
                          {svc.desc}
                        </p>
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

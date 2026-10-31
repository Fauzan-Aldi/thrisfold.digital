import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, PieChart, Sparkles, Building2, Smartphone, Calendar } from 'lucide-react';
import { t } from '../data/translations';
import { Language } from '../types';
import { ScrollReveal } from './common/ScrollReveal';

interface ServicesSectionProps {
  darkMode: boolean;
  onOpenWhatsApp: (note?: string) => void;
  language: Language;
}


export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ darkMode, onOpenWhatsApp, language }) => {
  const tr = t[language].services;
  const serviceIcons = [<Smartphone size={22} />, <PieChart size={22} />, <Sparkles size={22} />, <Building2 size={22} />, <Calendar size={22} />];
  const serviceColors = [
    { color: '#0EA5E9', textColor: '#ffffff', image: '/website-showcase-new.jpg' },
    { color: '#1b388e', textColor: '#ffffff', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
    { color: '#0d1527', textColor: '#FACC15', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80' },
    { color: '#172554', textColor: '#ffffff', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80' },
    { color: '#1e293b', textColor: '#ffffff', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80' },
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
  const accordionRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!accordionRef.current) return;
    const touch = e.touches[0];
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
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setActiveId('website');
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
          <ScrollReveal direction="right" duration={750} className="lg:col-span-4 space-y-4 lg:space-y-6">
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
          </ScrollReveal>

          {/* Right: Desktop = horizontal accordion, Mobile = vertical stack */}
          <ScrollReveal direction="left" delay={150} duration={800} className="lg:col-span-8">

            {/* ── DESKTOP: horizontal accordion ── */}
            <div
              ref={accordionRef}
              className="hidden lg:flex gap-3 h-[420px] relative"
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
                    {/* Background image - selalu nampak (sekilas saat collapsed seperti referensi) */}
                    <div className="absolute inset-0">
                      <img
                        src={svc.image}
                        alt={svc.label}
                        className="w-full h-full object-cover transition-transform duration-500"
                        loading="eager"
                      />
                      <div
                        className="absolute inset-0 transition-all duration-300"
                        style={{
                          background: isOpen
                            ? `linear-gradient(to top, ${svc.color}f2 0%, ${svc.color}88 40%, transparent 100%)`
                            : 'linear-gradient(to top, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.3) 45%, rgba(13,13,13,0.5) 100%)',
                        }}
                      />
                    </div>

                    {/* Collapsed label */}
                    <div
                      style={{ opacity: isOpen ? 0 : 1, transition: 'opacity 0.25s ease', pointerEvents: isOpen ? 'none' : 'auto' }}
                      className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-3 z-10"
                    >
                      <div className="flex flex-col items-center gap-3 text-white">
                        <div className="opacity-90 drop-shadow-sm">{svc.icon}</div>
                        <span className="text-xs font-black uppercase tracking-widest font-['Geist'] whitespace-nowrap drop-shadow-md"
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
                    <div className="absolute inset-0">
                      <img src={svc.image} alt={svc.label} className="w-full h-full object-cover" />
                      <div
                        className="absolute inset-0 transition-all duration-300"
                        style={{
                          background: isOpen
                            ? `linear-gradient(to top, ${svc.color}f0 0%, ${svc.color}66 60%, transparent 100%)`
                            : 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.4) 60%, rgba(13,13,13,0.6) 100%)',
                        }}
                      />
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

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

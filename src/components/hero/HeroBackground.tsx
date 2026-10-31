import React from 'react';

interface HeroBackgroundProps {
  mousePosition?: { x: number; y: number };
}

export const HeroBackground: React.FC<HeroBackgroundProps> = React.memo(() => {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        background: 'radial-gradient(130% 110% at 50% 15%, #244cb5 0%, #1b388e 45%, #122869 100%)',
      }}
    >
      {/* Ambient soft glow highlights */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(27, 56, 142, 0) 70%)',
        }}
      />

      {/* Simple, minimal contour lines framing top and bottom - no lines crossing the text */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1024 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 50%, transparent 20%, black 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 50%, transparent 20%, black 75%)',
        }}
      >
        {/* Subtle Top Accent Arcs (framing the upper zone above text) */}
        <path
          d="M -50 80 C 220 50, 480 110, 780 70 C 920 50, 1020 80, 1080 75"
          stroke="rgba(255, 255, 255, 0.14)"
          strokeWidth="1.2"
        />
        <path
          d="M 180 -40 C 240 60, 380 120, 560 130 C 740 140, 920 90, 1080 80"
          stroke="rgba(147, 197, 253, 0.18)"
          strokeWidth="1.2"
        />

        {/* Subtle Bottom Accent Waves (framing the bottom zone below buttons) */}
        <path
          d="M -50 410 C 200 425, 460 395, 720 415 C 880 430, 1000 410, 1080 415"
          stroke="rgba(147, 197, 253, 0.16)"
          strokeWidth="1.2"
        />
        <path
          d="M -50 455 C 240 445, 520 470, 780 450 C 920 440, 1020 460, 1080 455"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.1"
        />
      </svg>

      {/* Subtle bottom vignette to blend smoothly into the next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(18, 40, 105, 0.6) 0%, transparent 100%)',
        }}
      />
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';

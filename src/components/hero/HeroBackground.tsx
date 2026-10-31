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

      {/* Topographic Contour Wave Lines (Vector concept from reference) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-100 180 C 350 90, 820 260, 1300 170 C 1600 110, 1880 150, 2050 190"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1.5"
        />
        <path
          d="M-100 290 C 380 200, 860 380, 1360 270 C 1660 200, 1920 260, 2080 300"
          stroke="rgba(147, 197, 253, 0.12)"
          strokeWidth="1.2"
        />
        <path
          d="M-100 430 C 320 340, 800 520, 1320 390 C 1620 310, 1900 370, 2060 420"
          stroke="rgba(255, 255, 255, 0.09)"
          strokeWidth="1.2"
        />
        <path
          d="M-100 570 C 420 480, 920 660, 1420 530 C 1700 450, 1950 510, 2100 560"
          stroke="rgba(147, 197, 253, 0.13)"
          strokeWidth="1.4"
        />
        <path
          d="M-100 710 C 360 620, 880 810, 1380 680 C 1680 600, 1930 670, 2090 710"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1.2"
        />
        <path
          d="M-100 860 C 440 760, 960 960, 1460 820 C 1740 740, 1980 800, 2120 850"
          stroke="rgba(147, 197, 253, 0.11)"
          strokeWidth="1.2"
        />
        <path
          d="M-100 990 C 480 890, 1000 1080, 1500 950 C 1780 870, 2010 930, 2150 980"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="1.2"
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

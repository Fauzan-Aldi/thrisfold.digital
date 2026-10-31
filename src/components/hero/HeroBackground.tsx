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

      {/* Topographic Contour Wave Lines (Vector concept matching reference exactly) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
        viewBox="0 0 1024 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Sweeping concentric curved arcs matching reference */}
        <path
          d="M 120 -40 C 150 110, 290 220, 520 310 C 730 390, 910 430, 1080 450"
          stroke="rgba(255, 255, 255, 0.16)"
          strokeWidth="1.2"
        />
        <path
          d="M 330 -40 C 360 100, 480 200, 680 280 C 860 350, 990 380, 1080 395"
          stroke="rgba(147, 197, 253, 0.22)"
          strokeWidth="1.3"
        />
        <path
          d="M 540 -40 C 570 80, 670 170, 830 235 C 960 290, 1040 315, 1080 325"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />
        <path
          d="M 740 -40 C 770 60, 850 130, 970 180 C 1030 205, 1060 215, 1080 220"
          stroke="rgba(147, 197, 253, 0.20)"
          strokeWidth="1.2"
        />

        {/* Counter-arcs around top-left */}
        <path
          d="M -40 160 C 80 175, 220 150, 320 90 C 390 45, 430 -10, 450 -40"
          stroke="rgba(255, 255, 255, 0.14)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 280 C 90 290, 230 260, 330 190 C 410 130, 450 60, 470 -40"
          stroke="rgba(147, 197, 253, 0.18)"
          strokeWidth="1.2"
        />

        {/* Horizontal undulating topographic contour lines */}
        <path
          d="M -40 60 C 220 78, 480 48, 720 68 C 880 82, 1000 62, 1080 65"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.1"
        />
        <path
          d="M -40 120 C 180 138, 460 98, 730 132 C 890 148, 1010 118, 1080 122"
          stroke="rgba(147, 197, 253, 0.16)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 180 C 170 196, 440 158, 700 188 C 860 204, 1000 172, 1080 176"
          stroke="rgba(255, 255, 255, 0.14)"
          strokeWidth="1.1"
        />
        <path
          d="M -40 240 C 210 256, 470 218, 730 242 C 880 258, 1010 228, 1080 232"
          stroke="rgba(147, 197, 253, 0.18)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 300 C 170 318, 450 278, 720 308 C 880 324, 1000 294, 1080 298"
          stroke="rgba(255, 255, 255, 0.13)"
          strokeWidth="1.1"
        />
        <path
          d="M -40 360 C 210 376, 490 338, 750 368 C 900 384, 1010 354, 1080 358"
          stroke="rgba(147, 197, 253, 0.17)"
          strokeWidth="1.2"
        />
        <path
          d="M -40 420 C 190 436, 470 398, 730 428 C 890 444, 1000 414, 1080 418"
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

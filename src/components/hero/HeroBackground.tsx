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

      {/* Sweeping arc lines matching Trifolds reference exactly */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Long sweeping arc from top-left curving down to bottom-right */}
        <path
          d="M -100 50 C 200 80, 600 200, 900 450 C 1100 620, 1400 850, 1950 950"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
          fill="none"
        />
        {/* Arc from top-center curving to right edge */}
        <path
          d="M 400 -50 C 600 50, 900 250, 1150 500 C 1350 700, 1600 900, 1980 1000"
          stroke="rgba(255, 255, 255, 0.10)"
          strokeWidth="1"
          fill="none"
        />
        {/* Arc from mid-top sweeping to far right */}
        <path
          d="M 700 -80 C 850 30, 1050 200, 1250 420 C 1400 580, 1650 800, 2000 920"
          stroke="rgba(255, 255, 255, 0.11)"
          strokeWidth="1"
          fill="none"
        />
        {/* Tight arc from right-top curving down */}
        <path
          d="M 1100 -60 C 1200 60, 1350 250, 1500 480 C 1600 630, 1750 820, 1980 920"
          stroke="rgba(255, 255, 255, 0.10)"
          strokeWidth="1"
          fill="none"
        />
        {/* Wide horizontal sweep across bottom third */}
        <path
          d="M -100 700 C 300 680, 700 750, 1100 700 C 1400 660, 1700 720, 2000 690"
          stroke="rgba(255, 255, 255, 0.09)"
          strokeWidth="1"
          fill="none"
        />
        {/* Gentle arc from left edge mid-height sweeping right and down */}
        <path
          d="M -80 350 C 200 370, 500 450, 800 600 C 1050 720, 1400 860, 1950 980"
          stroke="rgba(255, 255, 255, 0.10)"
          strokeWidth="1"
          fill="none"
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

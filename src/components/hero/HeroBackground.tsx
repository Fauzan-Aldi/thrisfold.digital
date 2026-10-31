import React from 'react';

interface HeroBackgroundProps {
  mousePosition?: { x: number; y: number };
}

export const HeroBackground: React.FC<HeroBackgroundProps> = React.memo(() => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full"
      style={{
        backgroundImage: "image-set(url('/image.webp') type('image/webp'), url('/image.png') type('image/png'))",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
});

HeroBackground.displayName = 'HeroBackground';

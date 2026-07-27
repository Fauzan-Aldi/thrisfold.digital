import React from 'react';

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ mousePosition }) => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full"
      style={{
        backgroundImage: 'url(/image.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'high-quality'
      }}
    />
  );
};

import React, { useEffect, useState } from 'react';
import { Cloud } from './Cloud';

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ mousePosition }) => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle parallax effect based on mouse position
    const offsetX = (mousePosition.x - window.innerWidth / 2) / 50;
    const offsetY = (mousePosition.y - window.innerHeight / 2) / 50;
    setParallaxOffset({ x: offsetX, y: offsetY });
  }, [mousePosition]);

  return (
    <>
      {/* Main Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden will-change-transform transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) scale(1.05)`
        }}
      >
        <img
          src="/Hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Animated Clouds */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {/* Left to Right Clouds */}
        <Cloud position="top" direction="right" speed={60} delay={0} size="large" />
        <Cloud position="middle" direction="right" speed={80} delay={10} size="medium" />
        <Cloud position="bottom" direction="right" speed={70} delay={20} size="small" />
        
        {/* Right to Left Clouds */}
        <Cloud position="top" direction="left" speed={65} delay={5} size="medium" />
        <Cloud position="middle" direction="left" speed={75} delay={15} size="large" />
        <Cloud position="bottom" direction="left" speed={85} delay={25} size="small" />
      </div>
    </>
  );
};

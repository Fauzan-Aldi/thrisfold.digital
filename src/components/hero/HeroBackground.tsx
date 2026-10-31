import React from 'react';
import { NeuralNetworkBg } from '../common/NeuralNetworkBg';

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

      {/* Neural Network Pattern */}
      <NeuralNetworkBg />

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

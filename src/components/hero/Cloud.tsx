import React from 'react';

interface CloudProps {
  position: 'top' | 'middle' | 'bottom';
  direction: 'left' | 'right';
  speed: number;
  delay?: number;
  size?: 'small' | 'medium' | 'large';
}

export const Cloud: React.FC<CloudProps> = ({ 
  position, 
  direction, 
  speed, 
  delay = 0,
  size = 'medium' 
}) => {
  const positionClasses = {
    top: 'top-[15%]',
    middle: 'top-[45%]',
    bottom: 'top-[75%]'
  };

  const sizeClasses = {
    small: 'w-20 h-14 sm:w-28 sm:h-18',
    medium: 'w-28 h-18 sm:w-40 sm:h-24',
    large: 'w-36 h-22 sm:w-52 sm:h-30'
  };

  const animationClass = direction === 'left' 
    ? 'animate-cloud-left' 
    : 'animate-cloud-right';

  return (
    <div 
      className={`absolute ${positionClasses[position]} ${animationClass} pointer-events-none will-change-transform`}
      style={{ 
        animationDuration: `${speed}s`,
        animationDelay: `${delay}s`
      }}
    >
      <svg
        className={`${sizeClasses[size]} opacity-60 drop-shadow-xl`}
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M150 60C150 46.7 139.3 36 126 36C125.3 36 124.6 36 123.9 36.1C119.8 24.6 108.5 16 95 16C77.3 16 63 30.3 63 48C63 48.7 63 49.3 63.1 50C51.8 50.3 43 59.3 43 70C43 80.9 52.1 90 63 90H150C160.9 90 170 80.9 170 70C170 59.1 160.9 50 150 50C150 53.3 150 56.7 150 60Z"
          fill="white"
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
};

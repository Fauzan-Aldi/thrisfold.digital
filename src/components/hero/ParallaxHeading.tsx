import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxHeadingProps {
  darkMode: boolean;
}

export const ParallaxHeading: React.FC<ParallaxHeadingProps> = ({ darkMode }) => {
  const { scrollY } = useScroll();
  
  // Parallax transforms for heading parts
  const heading1X = useTransform(scrollY, [0, 300], [0, -30]);
  const heading2X = useTransform(scrollY, [0, 300], [0, 30]);
  
  return (
    <div className="relative overflow-hidden">
      <h1 className="font-['Hanken_Grotesk'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
        {/* First Line - Moves Left on Scroll */}
        <motion.div
          style={{ x: heading1X }}
          className="will-change-transform"
        >
          Konsultan Digital<span className="text-[#0EA5E9]">.</span>
        </motion.div>
        
        {/* Second Line - Moves Right on Scroll */}
        <motion.div
          style={{ x: heading2X }}
          className="will-change-transform mt-2"
        >
          <span className="relative inline-block">
            <span className="bg-[#0EA5E9] text-[#0d0d0d] px-4 py-2 rounded-2xl inline-block">
              Bisnis
            </span>
          </span>{' '}
          <span className="text-white">Kamu</span><span className="text-[#0EA5E9]">.</span>
        </motion.div>
      </h1>
    </div>
  );
};

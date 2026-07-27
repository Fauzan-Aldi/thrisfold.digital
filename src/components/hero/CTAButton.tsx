import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface CTAButtonProps {
  onClick: () => void;
  text: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ onClick, text }) => {
  return (
    <motion.button
      onClick={onClick}
      className="group relative w-full sm:w-auto bg-[#d4ff00] hover:bg-[#caf300] text-[#171e00] font-bold font-['Manrope'] text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl overflow-hidden will-change-transform"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 40px rgba(212, 255, 0, 0.6)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {/* Glow effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#d4ff00] via-[#e8ff66] to-[#d4ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
      <MessageSquare size={22} className="fill-[#171e00] relative z-10" />
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

import React from 'react';

/**
 * Neural Network background SVG pattern.
 * Renders connected nodes with lines, spread across the full viewport.
 * Purely decorative, pointer-events disabled.
 */
export const NeuralNetworkBg: React.FC = React.memo(() => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* ── Connection Lines ── */}
    {/* Cluster left */}
    <line x1="80" y1="120" x2="280" y2="300" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
    <line x1="280" y1="300" x2="520" y2="220" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <line x1="280" y1="300" x2="400" y2="520" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
    <line x1="80" y1="120" x2="250" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <line x1="280" y1="300" x2="150" y2="480" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

    {/* Cluster center-left */}
    <line x1="520" y1="220" x2="750" y2="380" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
    <line x1="400" y1="520" x2="650" y2="620" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <line x1="400" y1="520" x2="750" y2="380" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
    <line x1="520" y1="220" x2="680" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

    {/* Cluster center */}
    <line x1="750" y1="380" x2="1000" y2="300" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
    <line x1="750" y1="380" x2="950" y2="550" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <line x1="650" y1="620" x2="950" y2="550" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <line x1="650" y1="620" x2="800" y2="800" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <line x1="1000" y1="300" x2="1050" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

    {/* Cluster center-right */}
    <line x1="1000" y1="300" x2="1280" y2="420" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
    <line x1="950" y1="550" x2="1200" y2="680" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <line x1="950" y1="550" x2="1280" y2="420" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
    <line x1="1000" y1="300" x2="1250" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

    {/* Cluster right */}
    <line x1="1280" y1="420" x2="1520" y2="320" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <line x1="1280" y1="420" x2="1480" y2="600" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <line x1="1200" y1="680" x2="1480" y2="600" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
    <line x1="1200" y1="680" x2="1350" y2="850" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <line x1="1520" y1="320" x2="1700" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />

    {/* Cluster far-right */}
    <line x1="1520" y1="320" x2="1750" y2="450" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
    <line x1="1480" y1="600" x2="1750" y2="450" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <line x1="1480" y1="600" x2="1700" y2="780" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <line x1="1750" y1="450" x2="1880" y2="350" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
    <line x1="1750" y1="450" x2="1900" y2="550" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />

    {/* Extra long-range connections for depth */}
    <line x1="280" y1="300" x2="750" y2="380" stroke="rgba(147,197,253,0.05)" strokeWidth="0.6" />
    <line x1="520" y1="220" x2="1000" y2="300" stroke="rgba(147,197,253,0.04)" strokeWidth="0.6" />
    <line x1="750" y1="380" x2="1280" y2="420" stroke="rgba(147,197,253,0.04)" strokeWidth="0.6" />
    <line x1="400" y1="520" x2="950" y2="550" stroke="rgba(147,197,253,0.04)" strokeWidth="0.6" />
    <line x1="650" y1="620" x2="1200" y2="680" stroke="rgba(147,197,253,0.04)" strokeWidth="0.6" />

    {/* Bottom scattered connections */}
    <line x1="150" y1="480" x2="400" y2="520" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <line x1="800" y1="800" x2="1050" y2="900" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
    <line x1="1350" y1="850" x2="1550" y2="950" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
    <line x1="1700" y1="780" x2="1870" y2="900" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />

    {/* Top scattered connections */}
    <line x1="250" y1="60" x2="480" y2="30" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
    <line x1="680" y1="100" x2="880" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
    <line x1="1050" y1="130" x2="1250" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
    <line x1="1250" y1="180" x2="1520" y2="320" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />

    {/* ── Nodes (dots) ── */}
    {/* Primary nodes (larger, brighter) */}
    <circle cx="280" cy="300" r="3.5" fill="rgba(255,255,255,0.18)" />
    <circle cx="520" cy="220" r="3" fill="rgba(255,255,255,0.16)" />
    <circle cx="750" cy="380" r="4" fill="rgba(255,255,255,0.18)" />
    <circle cx="1000" cy="300" r="3.5" fill="rgba(255,255,255,0.17)" />
    <circle cx="950" cy="550" r="3.5" fill="rgba(255,255,255,0.16)" />
    <circle cx="1280" cy="420" r="4" fill="rgba(255,255,255,0.17)" />
    <circle cx="1520" cy="320" r="3" fill="rgba(255,255,255,0.14)" />
    <circle cx="1480" cy="600" r="3.5" fill="rgba(255,255,255,0.15)" />

    {/* Secondary nodes */}
    <circle cx="80" cy="120" r="2.5" fill="rgba(255,255,255,0.12)" />
    <circle cx="400" cy="520" r="3" fill="rgba(255,255,255,0.14)" />
    <circle cx="650" cy="620" r="3" fill="rgba(255,255,255,0.13)" />
    <circle cx="1200" cy="680" r="3" fill="rgba(255,255,255,0.13)" />
    <circle cx="1750" cy="450" r="3" fill="rgba(255,255,255,0.12)" />

    {/* Tertiary nodes (smaller, dimmer - edges/corners) */}
    <circle cx="250" cy="60" r="2" fill="rgba(255,255,255,0.10)" />
    <circle cx="150" cy="480" r="2" fill="rgba(255,255,255,0.09)" />
    <circle cx="680" cy="100" r="2" fill="rgba(255,255,255,0.10)" />
    <circle cx="1050" cy="130" r="2.5" fill="rgba(255,255,255,0.10)" />
    <circle cx="1250" cy="180" r="2" fill="rgba(255,255,255,0.10)" />
    <circle cx="1700" cy="200" r="2" fill="rgba(255,255,255,0.08)" />
    <circle cx="800" cy="800" r="2" fill="rgba(255,255,255,0.08)" />
    <circle cx="1350" cy="850" r="2" fill="rgba(255,255,255,0.08)" />
    <circle cx="1700" cy="780" r="2" fill="rgba(255,255,255,0.08)" />
    <circle cx="1880" cy="350" r="2" fill="rgba(255,255,255,0.07)" />
    <circle cx="1900" cy="550" r="2" fill="rgba(255,255,255,0.07)" />
    <circle cx="480" cy="30" r="1.5" fill="rgba(255,255,255,0.07)" />
    <circle cx="880" cy="50" r="1.5" fill="rgba(255,255,255,0.07)" />
    <circle cx="1050" cy="900" r="1.5" fill="rgba(255,255,255,0.06)" />
    <circle cx="1550" cy="950" r="1.5" fill="rgba(255,255,255,0.06)" />
    <circle cx="1870" cy="900" r="1.5" fill="rgba(255,255,255,0.06)" />

    {/* Accent glow nodes (yellow tint - key intersection points) */}
    <circle cx="750" cy="380" r="6" fill="rgba(250,204,21,0.04)" />
    <circle cx="1280" cy="420" r="6" fill="rgba(250,204,21,0.04)" />
    <circle cx="950" cy="550" r="5" fill="rgba(250,204,21,0.03)" />
  </svg>
));

NeuralNetworkBg.displayName = 'NeuralNetworkBg';


import React, { useState, useEffect } from 'react';

interface HeroContentProps {
  onOpenWhatsApp: (note?: string) => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenWhatsApp }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Daftar kata yang akan berganti
  const words = [
    'bisnis',
    'UMKM',
    'Startup',
    'Perusahaan',
    'Klinik',
    'Rumah Sakit',
    'Sekolah',
    'Universitas',
    'Yayasan',
    'Pesantren',
    'Koperasi',
    'Cafe',
    'Restoran',
    'Hotel',
    'Travel',
    'Kontraktor',
    'Properti',
    'Notaris',
    'Law Firm',
    'Laundry',
    'Salon',
    'Barbershop',
    'Gym',
    'Bengkel',
    'Dealer',
    'Logistik',
    'Distributor',
    'Pabrik',
    'Pet Shop',
    'Apotek',
    'BUMDes',
    'Instansi',
    'Organisasi',
    'Komunitas'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to window center
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ganti kata setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // 2000ms = 2 detik

    return () => clearInterval(interval);
  }, [words.length]);

  const handleWhatsAppClick = () => {
    onOpenWhatsApp('Halo karsa digital, saya ingin konsultasi mengenai sistem digital untuk bisnis saya.');
  };

  const handleLayananClick = () => {
    const target = document.getElementById('layanan');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate parallax offset (small movement)
  const parallaxX = mousePosition.x * 20; // Max 20px movement
  const parallaxY = mousePosition.y * 20; // Max 20px movement

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="flex flex-col items-center transition-transform duration-200 ease-out w-full max-w-5xl"
        style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
      >
        {/* Main Heading */}
        <div className="text-center mb-5 sm:mb-6">
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-1 sm:mb-2">
            <span className="text-black">Konsultan Digital.</span>
          </h1>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
            <span
              className="text-[#0EA5E9] inline-block"
              key={currentWordIndex}
              style={{ animation: 'wordFade 2s ease-in-out' }}
            >
              {words[currentWordIndex]}
            </span>
            <span className="text-black"> kamu.</span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-center text-black font-['Space_Grotesk'] text-xs sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mb-6 sm:mb-8 px-2">
          Kami bantu bisnis dan institusi kamu masuk ke go digital, tanpa ribet.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] text-black font-bold font-['Space_Grotesk'] text-sm sm:text-lg px-7 py-3.5 sm:px-10 sm:py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            Konsultasi via WhatsApp
          </button>

          <button
            onClick={handleLayananClick}
            className="text-black hover:text-gray-700 font-medium text-sm sm:text-lg transition-colors underline underline-offset-4"
          >
            Ngobrol aja dulu, siapa tahu cocok.
          </button>
        </div>
      </div>
    </div>
  );
};

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
      {/* Wrapper untuk semua konten yang ikut gerak */}
      <div 
        className="flex flex-col items-center transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px)`
        }}
      >
        {/* Main Heading with Mouse Parallax */}
        <div className="text-center mb-6">
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-2">
            <span className="text-black">Konsultan Digital.</span>
          </h1>
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
            <span 
              className="text-[#0EA5E9] inline-block animate-word-fade"
              key={currentWordIndex}
              style={{
                animation: 'wordFade 2s ease-in-out'
              }}
            >
              {words[currentWordIndex]}
            </span>
            <span className="text-black"> kamu.</span>
          </h1>
        </div>

        {/* Subheading - ikut gerak */}
        <p className="text-center text-black font-['Space_Grotesk'] text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-4xl mb-8">
          Kami bantu bisnis dan institusi kamu masuk ke go digital, tanpa ribet.
        </p>

        {/* CTA Buttons - ikut gerak */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* WhatsApp Button - Tanpa Icon */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#0EA5E9] hover:bg-[#c9f000] text-black font-bold font-['Space_Grotesk'] text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            <span>Konsultasi via WhatsApp</span>
          </button>

          {/* Secondary Link - Lebih Besar */}
          <button
            onClick={handleLayananClick}
            className="text-black hover:text-gray-700 font-medium text-base sm:text-lg transition-colors underline underline-offset-4"
          >
            Ngobrol aja dulu, siapa tahu cocok.
          </button>
        </div>
      </div>
    </div>
  );
};

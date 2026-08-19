import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, CheckCircle, Smartphone, Clock, Sparkles } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNote?: string;
  darkMode: boolean;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  defaultNote = '',
  darkMode
}) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('Hotel & Resort');
  const [needs, setNeeds] = useState(defaultNote || 'Konsultasi Pembuatan System Digital');
  const [budget, setBudget] = useState('Di bawah Rp 5 Juta');
  const [isSentSimulation, setIsSentSimulation] = useState(false);

  useEffect(() => {
    if (defaultNote) {
      setNeeds(defaultNote);
    }
  }, [defaultNote]);

  if (!isOpen) return null;

  const targetPhoneNumber = '6281234567890'; // bayu digital official consultation number

  const buildMessage = () => {
    return `Halo Tim bayu digital 👋%0A%0ASaya ingin konsultasi pembuatan sistem digital:%0A• *Nama*: ${name || '-'}` +
      `%0A• *Nama Bisnis*: ${businessName || '-'}` +
      `%0A• *Kategori*: ${businessType}` +
      `%0A• *Budget*: ${budget}` +
      `%0A• *Kebutuhan*: ${needs}` +
      `%0A%0AMohon info ketersediaan jadwal diskusi. Terima kasih!`;
  };

  const handleOpenWA = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage();
    const url = `https://wa.me/${targetPhoneNumber}?text=${message}`;
    
    // Simulate interactive feedback
    setIsSentSimulation(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setIsSentSimulation(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
          darkMode ? 'bg-[#1a1d10] text-[#f9fbe5] border-[#444932]' : 'bg-[#f9fbe5] text-[#1a1d10] border-[#c5c9ac]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#eef0da] dark:bg-[#2f3223] text-[#1a1d10] dark:text-white hover:opacity-80 transition-opacity"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#0EA5E9] text-[#0d0d0d] flex items-center justify-center font-bold">
            <MessageSquare size={20} className="fill-[#0d0d0d]" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0EA5E9] dark:text-[#0EA5E9] font-['Geist']">
              Direct WhatsApp Support
            </span>
            <h3 className="font-['Hanken_Grotesk'] text-xl font-bold">Konsultasi Bisnis Fast Response</h3>
          </div>
        </div>

        <p className="text-xs text-[#444932] dark:text-[#e2e4cf] mb-6 font-medium">
          Isi form singkat ini untuk menghasilkan pesan WhatsApp terformat otomatis langsung ke konsultan kami.
        </p>

        {isSentSimulation ? (
          <div className="py-12 text-center space-y-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-[#0EA5E9] text-[#0d0d0d] flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <CheckCircle size={36} />
            </div>
            <h4 className="font-['Hanken_Grotesk'] text-2xl font-bold">Membuka WhatsApp...</h4>
            <p className="text-xs text-[#757a60] dark:text-[#c5c9ac]">
              Kamu sedang dialihkan ke WhatsApp bayu digital. Tim kami akan segera merespons!
            </p>
          </div>
        ) : (
          <form onSubmit={handleOpenWA} className="space-y-4">
            <div>
              <label className="block text-xs font-bold font-['Geist'] text-[#444932] dark:text-[#e2e4cf] mb-1">
                Nama Anda
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] ${
                  darkMode
                    ? 'bg-[#2f3223] border-[#444932] text-white placeholder-[#757a60]'
                    : 'bg-white border-[#c5c9ac] text-[#1a1d10] placeholder-[#757a60]'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-['Geist'] text-[#444932] dark:text-[#e2e4cf] mb-1">
                Nama Bisnis / Hotel / Institusi
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Hotel Grand Sunset / Kos Vanesa"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] ${
                  darkMode
                    ? 'bg-[#2f3223] border-[#444932] text-white placeholder-[#757a60]'
                    : 'bg-white border-[#c5c9ac] text-[#1a1d10] placeholder-[#757a60]'
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold font-['Geist'] text-[#444932] dark:text-[#e2e4cf] mb-1">
                  Kategori
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] ${
                    darkMode ? 'bg-[#2f3223] border-[#444932] text-white' : 'bg-white border-[#c5c9ac] text-[#1a1d10]'
                  }`}
                >
                  <option value="Hotel & Villa">Hotel & Villa</option>
                  <option value="Properti Kos">Properti Kos</option>
                  <option value="Restoran & F&B">Restoran & F&B</option>
                  <option value="UMKM / Online Shop">UMKM / Online Shop</option>
                  <option value="Sekolah / Edutech">Sekolah / Edutech</option>
                  <option value="Enterprise / Lainnya">Enterprise / Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold font-['Geist'] text-[#444932] dark:text-[#e2e4cf] mb-1">
                  Estimasi Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] ${
                    darkMode ? 'bg-[#2f3223] border-[#444932] text-white' : 'bg-white border-[#c5c9ac] text-[#1a1d10]'
                  }`}
                >
                  <option value="Rp 750rb - Rp 2 Juta">Rp 750rb - Rp 2 Juta</option>
                  <option value="Rp 3 Juta - Rp 7 Juta">Rp 3 Juta - Rp 7 Juta</option>
                  <option value="Rp 7 Juta - Rp 15 Juta">Rp 7 Juta - Rp 15 Juta</option>
                  <option value="> Rp 15 Juta Custom">&gt; Rp 15 Juta Custom</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold font-['Geist'] text-[#444932] dark:text-[#e2e4cf] mb-1">
                Jelaskan Singkat Kebutuhan Anda
              </label>
              <textarea
                rows={3}
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
                placeholder="Misal: Ingin membuat sistem booking hotel bebas komisi OTA dengan pembayaran QRIS..."
                className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] ${
                  darkMode
                    ? 'bg-[#2f3223] border-[#444932] text-white placeholder-[#757a60]'
                    : 'bg-white border-[#c5c9ac] text-[#1a1d10] placeholder-[#757a60]'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#0EA5E9] hover:bg-[#0EA5E9] text-[#0d0d0d] font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <Send size={18} />
              <span>Kirim via WhatsApp Sekarang</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

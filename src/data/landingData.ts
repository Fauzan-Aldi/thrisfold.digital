import { PortfolioProject, ProcessStep, PricingPackage, EstimatorFeature } from '../types';

export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDWEqZ_nPdZ9Z8KfXH9iBt92g8AQNhGvPpYg8qPA5PKh4Sq5KckvFlTG2EBhstv7Jatlcorhspcd-VhDxR6eeiJgeqegg_KRU1rAMFB1eoKmhvkzF0APvu_l8BbllIYysebAuW0AA4RfwLSLpADWRXlD5UNr_HOpEEN1oAM2aGHsmEO0Q1yiu-3egaJMDCxuykMwHr7SgthZTJfc9AriHgbb839nsWXMg1n-Tw4lueKSzXrGdHZrJJgERpuFU-VZkpLMtA-xbNTRf8";

export const MOCKUP_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJKztO8E-FugmQbxuRkD78d7nzY1lL0Q2vPGrHdzRhDyjxojFNq5awtnQ2zkOFkoPBy_e11o9EP7B5E6syhK-ALdE5TpnO_zsv20Ct42qCdJU4od7EeEnR2cwQcYRea4f0lVEdp1d4pdAE6ZTE9LHfNtiaSbBwcPXyr_LLpWE2g_JUmmPgOvHB7dknDwpM2nzHUG1IAm0RinyKSdJf4o8viLrckjmt0D3s0gsxjzFIfxNK1ubasaEWPdiafHhi4mHoUiK2EeAi8";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'brosur-online',
    title: 'Brosur Online',
    category: 'Sistem Pemesanan & Izin',
    subtitle: 'Aplikasi pemesanan menu cerdik & pengawas izin murid boarding school.',
    description: 'Sistem digitalisasi catalog interaktif dengan modul pemesanan langsung via WhatsApp, manajemen inventoris produk, dan tracker izin keluar murid sekolah berasrama.',
    fullDetails: [
      'Katalog produk interaktif & cepat dibuka tanpa install aplikasi',
      'Integrasi direct WhatsApp order dengan ringkasan invoice otomatis',
      'Sistem perizinan keluar murid boarding school berbasis QR Code & SMS/WA notification',
      'Dashboard laporan penjualan & statistik pemesanan harian'
    ],
    techStack: ['React', 'Node.js', 'WhatsApp Business API', 'Tailwind CSS', 'PWA'],
    metrics: [
      { label: 'Efisiensi Izin', value: '+85%' },
      { label: 'Konversi Pesanan', value: '3.4x' },
      { label: 'Uptime', value: '99.9%' }
    ],
    badgeText: 'Populer di Edutech & F&B',
    mockupType: 'brochure',
    accentColor: '#d4ff00'
  },
  {
    id: 'vaneshub',
    title: 'Vaneshub',
    category: 'Manajemen Kos & Panahan',
    subtitle: 'Aplikasi manajemen properti kos & scoring panahan otomatis.',
    description: 'Platform manajemen ganda yang menyajikan dashboard pemantauan sewa kos-kosan (tagihan air/listrik/sewa) serta modul scoring turnamen olahraga panahan real-time.',
    fullDetails: [
      'Sistem otomatis penagihan sewa bulanan kos via WhatsApp bot',
      'Pencatatan pembayaran, sisa kamar, dan laporan keungan pemilik kos',
      'Modul Digital Target Scoring untuk turnamen panahan nasional',
      'Leaderboard real-time dengan grafik akurasi bidikan'
    ],
    techStack: ['TypeScript', 'Express', 'SQLite/Postgres', 'WebSockets', 'Recharts'],
    metrics: [
      { label: 'Otomatisasi Tagihan', value: '100%' },
      { label: 'Akurasi Scoring', value: '99.99%' },
      { label: 'Penghematan Waktu', value: '15 Jam/mgg' }
    ],
    badgeText: 'Solusi Properti & Olahraga',
    mockupType: 'vaneshub',
    accentColor: '#536600'
  },
  {
    id: 'foto-produk-ai',
    title: 'Foto Produk AI',
    category: 'AI Generative Tool',
    subtitle: 'Aplikasi foto produk berbasis AI generated image otomatis.',
    description: 'Studio foto virtual cerdas yang mengubah foto mentah produk UMKM menjadi materi promosi profesional berkelas studio studio photography dalam hitungan detik.',
    fullDetails: [
      'Ganti background foto produk dengan AI studio lighting secara instan',
      'Pilihan tema visual: Minimalist, Nature, Luxury, Coffee Shop, Modern Studio',
      'Ekspor HD siap pakai untuk e-commerce (Tokopedia, Shopee, Instagram)',
      'Penghematan biaya fotografi hingga 90% bagi pemilik usaha'
    ],
    techStack: ['Gemini Image AI', 'React', 'Canvas API', 'Node.js Engine', 'Tailwind'],
    metrics: [
      { label: 'Waktu Generate', value: '< 5 Detik' },
      { label: 'Penghematan Biaya', value: '90%' },
      { label: 'Variasi Background', value: '500+' }
    ],
    badgeText: 'Inovasi AI Terdepan',
    mockupType: 'ai-photo',
    accentColor: '#caf300'
  },
  {
    id: 'hotel-booking-system',
    title: 'Direct Hotel Booking System',
    category: 'Hospitality Solution',
    subtitle: 'Sistem reservasi kamar hotel mandiri bebas komisi OTA.',
    description: 'Engine pemesanan kamar hotel langsung yang terhubung dengan kalender ketersediaan, payment gateway lokal, WhatsApp invoice, dan laporan okupansi bulanan.',
    fullDetails: [
      'Form reservasi instan bebas komisi 15-20% OTA pihak ketiga',
      'Integrasi Payment Gateway (QRIS, VA Bank, Credit Card)',
      'Kalender ketersediaan real-time & manajemen tipe kamar/suasana',
      'Notifikasi konfirmasi check-in & E-voucher otomatis ke tamu via WhatsApp'
    ],
    techStack: ['React', 'Express API', 'Midtrans/Xendit', 'Tailwind', 'PWA'],
    metrics: [
      { label: 'Margin Profit Hotel', value: '+18%' },
      { label: 'Kecepatan Booking', value: '45 Detik' },
      { label: 'Komisi Pihak Ke-3', value: '0%' }
    ],
    badgeText: 'Khusus Sektor Perhotelan',
    mockupType: 'hotel',
    accentColor: '#d4ff00'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Obrolin dulu kebutuhan kamu',
    description: 'Cukup cerita singkat soal bisnis kamu via WhatsApp — kami yang ajukan pertanyaan yang tepat. Tidak perlu dokumen teknis, tidak perlu bisa IT. Santai dulu.',
    deliverables: ['Sesi Tanya Jawab via WA', 'Pemetaan Masalah Bisnis', 'Nol Komitmen di Tahap Ini'],
    estimatedDays: '1 Hari'
  },
  {
    number: '02',
    title: 'Kami rangkum dan sarankan solusi',
    description: 'Dalam 1–2 hari kami kirim ringkasan: masalah yang kami tangkap, solusi yang kami sarankan, dan alasannya. Spesifik untuk bisnis kamu, bukan template umum.',
    deliverables: ['Ringkasan Kebutuhan Sistem', 'Rekomendasi Solusi Spesifik', 'Estimasi Awal Waktu & Biaya'],
    estimatedDays: '1-2 Hari'
  },
  {
    number: '03',
    title: 'Proposal bersih, harga jelas',
    description: 'Kami kirim proposal dengan scope yang tertulis jelas, harga tanpa biaya tersembunyi, dan timeline realistis. Kamu tahu persis apa yang dibayar dan apa yang didapat.',
    deliverables: ['Dokumen Scope & Fitur', 'Fixed Price Quote', 'Timeline Pengerjaan'],
    estimatedDays: '2-3 Hari'
  },
  {
    number: '04',
    title: 'Kami bangun, kamu tetap tahu',
    description: 'Project berjalan tanpa kamu harus online terus. Kami beri update berkala dan hanya tanya kalau memang butuh keputusan dari kamu. Ada link staging buat pantau langsung.',
    deliverables: ['Live Staging URL', 'Laporan Progress Mingguan', 'Channel Feedback Langsung'],
    estimatedDays: '1-3 Minggu'
  },
  {
    number: '05',
    title: 'Rilis dan kami tetap ada',
    description: 'Sistem live bukan berarti kami pergi. Kami tetap bisa dihubungi untuk pertanyaan, penyesuaian kecil, atau langkah berikutnya. Relasi jangka panjang, bukan proyek sekali jalan.',
    deliverables: ['Deployment ke Domain Utama', 'Panduan & Video Tutorial Admin', 'Garansi Bug-Free 30 Hari'],
    estimatedDays: 'Kontinu'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'website-umkm',
    name: 'Paket Website UMKM',
    price: 'Rp 750.000',
    period: '/ tahun',
    badge: 'Paling Hemat',
    description: 'Cocok untuk usaha kecil, katalog online, landing page promosi, dan company profile resmi.',
    features: [
      'Website Landing Page Responsive & Super Cepat',
      'Gratis Domain (.com / .id) & Hosting 1 Tahun',
      'Integrasi Tombol WhatsApp Direct Order',
      'Optimasasi SEO Dasar Google Search',
      'Desain Modern & Mobile-Friendly',
      'SSL Certificate Keamanan HTTPS'
    ],
    popular: false
  },
  {
    id: 'sistem-erp',
    name: 'Paket Sistem & ERP',
    price: 'Rp 7.000.000',
    period: 'sekali bayar',
    badge: 'Rekomendasi Utama',
    description: 'Solusi lengkap untuk hotel, kos-kosan, klinik, sekolah, dan operasional bisnis mandiri.',
    features: [
      'Custom ERP / Booking Engine Spesifik Bisnis Kamu',
      'Dashboard Laporan Keuangan & Stok Real-Time',
      'WhatsApp Auto-Notifier (Invoice & Pengingat)',
      'Multi-User Rights (Kasir, Admin, Owner)',
      'Pelatihan Penggunaan & Server Setup',
      'Garansi Pemeliharaan 3 Bulan'
    ],
    popular: true
  },
  {
    id: 'custom-enterprise',
    name: 'Paket Custom Enterprise',
    price: 'Sesuai Scope',
    period: 'fleksibel',
    badge: 'Skala Besar',
    description: 'Solusi software custom kompleks dengan arsitektur mikro, AI integration, dan integrasi API khusus.',
    features: [
      'Pengembangan Full-Custom dari Nol',
      'Integrasi AI (Gemini / Generative AI)',
      'Payment Gateway Local & International',
      'SLA Uptime Support 24/7',
      'Dedikasi Developer & Project Manager',
      'Source Code Ownership Transfer'
    ],
    popular: false
  }
];

export const ESTIMATOR_FEATURES: EstimatorFeature[] = [
  {
    id: 'landing-page',
    name: 'Landing Page & Company Profile Modern',
    category: 'core',
    price: 750000,
    description: 'Tampilan bersih, cepat, responsive untuk memamerkan produk/layanan kamu.'
  },
  {
    id: 'hotel-booking',
    name: 'Sistem Pemesanan Hotel / Kos Mandiri',
    category: 'core',
    price: 3500000,
    description: 'Kalender ketersediaan kamar, tipe kamar, pemesanan langsung tanpa komisi OTA.'
  },
  {
    id: 'erp-finance',
    name: 'Modul ERP Keuangan & Stok Inventoris',
    category: 'core',
    price: 4000000,
    description: 'Laporan laba rugi, stok barang otomatis, dan neraca transaksi harian.'
  },
  {
    id: 'wa-bot',
    name: 'WhatsApp Automated Order & Notifier',
    category: 'addons',
    price: 1200000,
    description: 'Kirim invoice, pengingat bayar, dan konfirmasi via WhatsApp otomatis.'
  },
  {
    id: 'ai-feature',
    name: 'Integrasi AI (Foto Produk / Chatbot AI)',
    category: 'addons',
    price: 2500000,
    description: 'Generatif foto produk atau asisten AI customer service 24 jam.'
  },
  {
    id: 'payment-gateway',
    name: 'Integrasi Payment Gateway (QRIS / VA)',
    category: 'addons',
    price: 1500000,
    description: 'Pembayaran otomatis via QRIS, Transfer Bank BCA/Mandiri, atau E-Wallet.'
  },
  {
    id: 'priority-support',
    name: 'Garansi Extended Support 6 Bulan',
    category: 'support',
    price: 1000000,
    description: 'Pendampingan harian, garansi bug, dan backup database bulanan.'
  }
];

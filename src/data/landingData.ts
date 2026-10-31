import { PortfolioProject, ProcessStep, PricingPackage, EstimatorFeature } from '../types';

export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDWEqZ_nPdZ9Z8KfXH9iBt92g8AQNhGvPpYg8qPA5PKh4Sq5KckvFlTG2EBhstv7Jatlcorhspcd-VhDxR6eeiJgeqegg_KRU1rAMFB1eoKmhvkzF0APvu_l8BbllIYysebAuW0AA4RfwLSLpADWRXlD5UNr_HOpEEN1oAM2aGHsmEO0Q1yiu-3egaJMDCxuykMwHr7SgthZTJfc9AriHgbb839nsWXMg1n-Tw4lueKSzXrGdHZrJJgERpuFU-VZkpLMtA-xbNTRf8";

export const MOCKUP_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJKztO8E-FugmQbxuRkD78d7nzY1lL0Q2vPGrHdzRhDyjxojFNq5awtnQ2zkOFkoPBy_e11o9EP7B5E6syhK-ALdE5TpnO_zsv20Ct42qCdJU4od7EeEnR2cwQcYRea4f0lVEdp1d4pdAE6ZTE9LHfNtiaSbBwcPXyr_LLpWE2g_JUmmPgOvHB7dknDwpM2nzHUG1IAm0RinyKSdJf4o8viLrckjmt0D3s0gsxjzFIfxNK1ubasaEWPdiafHhi4mHoUiK2EeAi8";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'tulis-duit',
    title: 'Tulis Duit',
    category: 'Fintech & WhatsApp Bot',
    subtitle: 'Aplikasi pencatatan keuangan praktis berbasis WhatsApp tanpa pencatatan manual.',
    description: 'Aplikasi pencatatan keuangan berbasis WhatsApp yang membantu pengguna mengelola pemasukan, pengeluaran, dan laporan keuangan secara praktis tanpa pencatatan manual.',
    fullDetails: [
      'Pencatatan mutasi pengeluaran & pemasukan harian otomatis via pesan WhatsApp',
      'Kategorisasi transaksi pintar berbasis pengenalan teks otomatis',
      'Ekspor laporan keuangan berkala (harian, mingguan, bulanan) dalam format PDF & Excel',
      'Dashboard grafik arus kas dan analisis budget hemat tanpa perlu instal aplikasi tambahan'
    ],
    techStack: ['WhatsApp Business API', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Kecepatan Catat', value: '< 5 Detik' },
      { label: 'Akurasi Kategori', value: '98.5%' },
      { label: 'Efisiensi Waktu', value: '80%' }
    ],
    badgeText: 'Solusi Fintech UMKM & Personal',
    mockupType: 'erp',
    accentColor: '#0EA5E9'
  },
  {
    id: 'laundry-app',
    title: 'Laundry App',
    category: 'Sistem Manajemen Operasional',
    subtitle: 'Sistem manajemen laundry terpadu untuk pesanan, status cucian, dan laporan bisnis.',
    description: 'Sistem manajemen laundry untuk mengelola pesanan, status cucian, transaksi, pelanggan, dan laporan operasional dalam satu platform terintegrasi.',
    fullDetails: [
      'Pelacakan status cucian real-time (Diterima, Dicuci, Disetrika, Siap Diambil)',
      'Notifikasi otomatis terkirim langsung ke WhatsApp pelanggan saat cucian rampung',
      'Modul kasir POS terintegrasi, cetak nota digital, dan dukungan pembayaran QRIS',
      'Laporan omset harian/bulanan serta analitik performa kerja karyawan laundry'
    ],
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'WhatsApp Gateway', 'PostgreSQL'],
    metrics: [
      { label: 'Waktu Input Order', value: '1 Menit' },
      { label: 'Notifikasi Otomatis', value: '100%' },
      { label: 'Peningkatan Omset', value: '+35%' }
    ],
    badgeText: 'Operasional Laundry Modern',
    mockupType: 'erp',
    accentColor: '#0EA5E9'
  },
  {
    id: 'santriq',
    title: 'SantriQ',
    category: 'Platform Manajemen Pesantren',
    subtitle: 'Platform manajemen pesantren untuk data santri, pembayaran, dan perizinan.',
    description: 'Platform manajemen pesantren untuk memudahkan pengelolaan data santri, pembayaran, perizinan, absensi, dan aktivitas administrasi dalam satu sistem digital.',
    fullDetails: [
      'Database terpusat biodata santri, riwayat hafalan Al-Qur\'an, dan rekam medis',
      'Sistem pembayaran SPP / syahriah online dengan invoice otomatis ke wali santri',
      'E-Perizinan pulang/keluar pondok tervalidasi dengan QR Code & notifikasi orang tua',
      'Pencatatan absensi harian kegiatan pondok dan rekap kehadiran real-time'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Tertib Pembayaran', value: '+92%' },
      { label: 'Digitalisasi Izin', value: '100%' },
      { label: 'Waktu Rekap Data', value: '10x Lebih Cepat' }
    ],
    badgeText: 'Digitalisasi Lembaga Pesantren',
    mockupType: 'brochure',
    accentColor: '#0EA5E9'
  },
  {
    id: 'rental-management',
    title: 'Rental Management',
    category: 'Sistem Manajemen Rental & Armada',
    subtitle: 'Integrasi operasional armada kendaraan, reservasi, jadwal servis, dan laporan.',
    description: 'Sistem manajemen rental untuk mengintegrasikan operasional kendaraan, pemesanan, transaksi, inventaris, perawatan, dan laporan bisnis secara real-time.',
    fullDetails: [
      'Kalender ketersediaan armada kendaraan real-time untuk mencegah double booking',
      'Sistem reservasi online mandiri dengan verifikasi berkas identitas penyewa',
      'Pengingat otomatis jadwal perawatan berkala, servis rutin, dan pajak armada',
      'Laporan arus kas, laba rugi per armada, dan utilisasi kendaraan secara akurat'
    ],
    techStack: ['React', 'Express API', 'PostgreSQL', 'Tailwind CSS', 'PWA'],
    metrics: [
      { label: 'Cegah Double Book', value: '100%' },
      { label: 'Utilisasi Armada', value: '+40%' },
      { label: 'Kecepatan Reservasi', value: '< 2 Menit' }
    ],
    badgeText: 'Solusi Rental & Transportasi',
    mockupType: 'erp',
    accentColor: '#0EA5E9'
  },
  {
    id: 'internal-system',
    title: 'Internal System',
    category: 'Sistem Informasi Perusahaan',
    subtitle: 'Digitalisasi administrasi dokumen, approval form, dan pemantauan aktivitas tim.',
    description: 'Sistem informasi internal perusahaan untuk mendigitalisasi proses administrasi, pengelolaan dokumen, formulir operasional, dan monitoring aktivitas kerja.',
    fullDetails: [
      'Workflow persetujuan (approval) berjenjang paperless dengan tanda tangan digital',
      'Repositori dokumen perusahaan terenkripsi dengan pembagian hak akses bertingkat',
      'Monitoring penugasan kerja harian, presensi online, dan catatan progres divisi',
      'Dashboard analitik produktivitas dan KPI operasional terpusat'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    metrics: [
      { label: 'Efisiensi Administrasi', value: '+75%' },
      { label: 'Sistem Paperless', value: '95%' },
      { label: 'Kecepatan Approval', value: '4x Lebih Cepat' }
    ],
    badgeText: 'Enterprise Digital System',
    mockupType: 'erp',
    accentColor: '#0EA5E9'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Obrolin dulu kebutuhan kamu',
    description: 'Cukup cerita singkat soal bisnis kamu via WhatsApp  kami yang ajukan pertanyaan yang tepat. Tidak perlu dokumen teknis, tidak perlu bisa IT. Santai dulu.',
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
    price: 'Rp 850.000',
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
    price: 'Rp 8.000.000',
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
    price: 850000,
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

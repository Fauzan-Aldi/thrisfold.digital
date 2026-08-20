export const t = {
  id: {
    // Navbar
    nav: {
      layanan: 'Layanan',
      portfolio: 'Portfolio',
    },
    // Hero
    hero: {
      words: ['Bisnis', 'Hotel', 'Klinik', 'Sekolah', 'UMKM', 'Startup'],
      heading1: 'Konsultan Digital.',
      heading2: 'kamu.',
      sub: 'Kami bantu bisnis dan institusi kamu masuk ke go digital, tanpa ribet.',
      cta: 'Konsultasi via WhatsApp',
      ctaSecondary: 'Ngobrol aja dulu, siapa tahu cocok.',
    },
    // Services
    services: {
      badge: 'LAYANAN',
      heading: 'Semua yang Bisnis Kamu Butuhin.',
      sub: 'Mulai dari website company profile, sistem operasi ERP, hingga otomatisasi AI. Kami siap buatkan.',
      hint: 'Arahkan kursor ke layanan untuk melihat preview →',
      items: [
        { label: 'Website', tagline: 'Company Profile & Landing Page', desc: 'Website modern, cepat, dan mobile-friendly untuk bisnis kamu tampil profesional.' },
        { label: 'ERP Custom', tagline: 'Sistem Operasional & Keuangan', desc: 'Pencatatan kasir, stok inventoris, laporan laba/rugi otomatis untuk bisnis mandiri.' },
        { label: 'AI Automation', tagline: 'AI Generative & Otomatisasi', desc: 'Foto produk AI, chatbot customer service, dan otomatisasi alur kerja bisnis.' },
        { label: 'Ecommerce', tagline: 'Toko Online & Booking System', desc: 'Platform jual-beli dan sistem reservasi langsung tanpa komisi pihak ketiga.' },
        { label: 'Training', tagline: 'Pelatihan & Pendampingan Tim', desc: 'Kami latih tim kamu agar bisa operasikan sistem secara mandiri dan percaya diri.' },
      ],
    },
    // Process
    process: {
      badge: 'CARA KERJA',
      heading1: '5 Langkah',
      heading2: 'Dengan Karsa',
      sub: 'Dari obrolan pertama sampai sistem live prosesnya transparan, terstruktur, dan tanpa kejutan.',
      portfolioBadge: 'KARYA KAMI',
    },
    // Pricing
    pricing: {
      badge: 'TRANSPARANSI HARGA',
      heading: 'Harga yang Tidak Bikin Kaget',
      sub: 'Kami percaya transparansi harga adalah bentuk menghormati waktu kamu.',
      note: '*Harga dapat berbeda sesuai kebutuhan. Konsultasi gratis sebelum komitmen apapun.',
      packages: [
        { name: 'Paket Website UMKM', price: 'Mulai dari Rp 750.000', period: '/ tahun' },
        { name: 'Paket Sistem & ERP', price: 'Mulai dari Rp 7.000.000', period: '' },
        { name: 'Go-Digital Starter', price: 'Mulai dari Rp 2.500.000', period: '' },
        { name: 'AI Automation', price: 'Mulai dari Rp 3.500.000', period: '' },
      ],
    },
    // Footer
    footer: {
      cta_badge: 'Ayo Mulai Transformasi',
      cta_heading: 'Yuk, Ngobrol Dulu.',
      cta_sub: 'Tidak ada komitmen. Tidak ada tekanan. Ceritakan bisnis kamu  sisanya biar kami yang pikirkan.',
      cta_btn: 'Chat Kami di WhatsApp',
      copyright: '© 2025 karsa.digital',
      terms: 'Syarat & Ketentuan',
      privacy: 'Kebijakan Privasi',
    },
  },

  en: {
    // Navbar
    nav: {
      layanan: 'Services',
      portfolio: 'Portfolio',
    },
    // Hero
    hero: {
      words: ['Business', 'Hotel', 'Clinic', 'School', 'SME', 'Startup'],
      heading1: 'Digital Consultant.',
      heading2: 'yours.',
      sub: 'We help your business and institution go digital  simply and efficiently.',
      cta: 'Consult via WhatsApp',
      ctaSecondary: "Let's chat first, see if we're a fit.",
    },
    // Services
    services: {
      badge: 'SERVICES',
      heading: 'Everything Your Business Needs.',
      sub: 'From company profile websites and ERP systems to AI automation  we build it all.',
      hint: 'Hover over a service to preview →',
      items: [
        { label: 'Website', tagline: 'Company Profile & Landing Page', desc: 'Modern, fast, and mobile-friendly websites to make your business look professional.' },
        { label: 'ERP Custom', tagline: 'Operations & Financial System', desc: 'POS, inventory tracking, and automated profit/loss reports for independent businesses.' },
        { label: 'AI Automation', tagline: 'AI Generative & Automation', desc: 'AI product photos, customer service chatbots, and business workflow automation.' },
        { label: 'Ecommerce', tagline: 'Online Store & Booking System', desc: 'Buy-sell platform and direct reservation system with zero third-party commissions.' },
        { label: 'Training', tagline: 'Team Training & Mentoring', desc: 'We train your team to operate the system independently and confidently.' },
      ],
    },
    // Process
    process: {
      badge: 'HOW IT WORKS',
      heading1: '5 Steps',
      heading2: 'With Karsa',
      sub: 'From the first chat to going live  the process is transparent, structured, and surprise-free.',
      portfolioBadge: 'OUR WORK',
    },
    // Pricing
    pricing: {
      badge: 'TRANSPARENT PRICING',
      heading: 'Pricing That Won\'t Shock You',
      sub: 'We believe transparent pricing is a form of respecting your time.',
      note: '*Prices may vary based on specific needs. Free consultation before any commitment.',
      packages: [
        { name: 'SME Website Package', price: 'Starting from Rp 750,000', period: '/ year' },
        { name: 'System & ERP Package', price: 'Starting from Rp 7,000,000', period: '' },
        { name: 'Go-Digital Starter', price: 'Starting from Rp 2,500,000', period: '' },
        { name: 'AI Automation', price: 'Starting from Rp 3,500,000', period: '' },
      ],
    },
    // Footer
    footer: {
      cta_badge: "Let's Start the Transformation",
      cta_heading: "Let's Talk First.",
      cta_sub: "No commitment. No pressure. Tell us about your business  we'll handle the rest.",
      cta_btn: 'Chat Us on WhatsApp',
      copyright: '© 2025 karsa.digital',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
    },
  },
} as const;

export type Lang = keyof typeof t;

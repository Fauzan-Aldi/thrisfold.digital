# Hero Section Components

Komponen-komponen modern untuk Hero Section dengan animasi smooth dan interaktif.

## 📁 Struktur Komponen

```
hero/
├── Cloud.tsx              # Komponen awan animasi
├── HeroBackground.tsx     # Background dengan parallax effect
├── ParallaxHeading.tsx    # Heading dengan parallax scroll
├── CTAButton.tsx          # CTA button dengan hover effect
├── HeroContent.tsx        # Konten utama hero
└── index.ts               # Export barrel
```

## 🎨 Fitur

### 1. **HeroSection** (Parent Component)
- ✅ Fullscreen Hero (100vh)
- ✅ Mouse movement parallax
- ✅ Scroll-based fade out animation
- ✅ Floating decorative badges

### 2. **HeroBackground**
- ✅ Hero.png sebagai background
- ✅ Responsive object-cover
- ✅ Gradient overlay untuk readability
- ✅ Mouse parallax effect (subtle)
- ✅ Animated clouds overlay

### 3. **Cloud**
- ✅ SVG cloud shapes
- ✅ Infinite smooth animation
- ✅ Dua arah: kiri→kanan & kanan→kiri
- ✅ Berbagai ukuran (small, medium, large)
- ✅ Kecepatan berbeda untuk setiap cloud
- ✅ Opacity fade in/out

### 4. **ParallaxHeading**
- ✅ Heading split menjadi 2 baris
- ✅ Baris 1 bergerak ke kiri saat scroll
- ✅ Baris 2 bergerak ke kanan saat scroll
- ✅ Smooth transform dengan Framer Motion
- ✅ Responsive typography

### 5. **CTAButton**
- ✅ Scale on hover
- ✅ Glow effect
- ✅ Shadow animation
- ✅ Smooth transitions
- ✅ Click handler untuk WhatsApp

### 6. **HeroContent**
- ✅ Fade & scale pada scroll
- ✅ Staggered animations
- ✅ Key points banner
- ✅ Scroll indicator animasi
- ✅ Smooth scroll ke sections

## 🎭 Animations

### CSS Animations (index.css)
```css
@keyframes cloudLeft    # Awan bergerak kiri→kanan
@keyframes cloudRight   # Awan bergerak kanan→kiri
@keyframes float        # Floating badges
@keyframes pulseGlow    # Button glow effect
```

### Framer Motion Animations
- **Scroll Transform**: Parallax heading, content fade
- **Mouse Movement**: Background & cloud parallax
- **Hover States**: Scale, glow, shadow
- **Initial → Animate**: Staggered content reveal

## 🎯 Performance

- ✅ `will-change-transform` untuk animasi smooth
- ✅ Transform-based animations (60 FPS)
- ✅ Lazy loading tidak diperlukan (Hero visible immediately)
- ✅ Optimized re-renders dengan React.memo (jika diperlukan)
- ✅ Hardware-accelerated CSS

## 📱 Responsive

- **Desktop**: Penuh semua fitur + parallax
- **Tablet**: Parallax dipertahankan, font size adjusted
- **Mobile**: Hamburger menu, simplified animations

## 🔧 Tech Stack

- React + TypeScript
- Framer Motion (motion/react)
- Tailwind CSS
- Lucide Icons

## 🚀 Usage

```tsx
import { HeroSection } from './components/HeroSection';

<HeroSection 
  onOpenWhatsApp={(note) => console.log(note)}
  darkMode={false}
/>
```

## ⚙️ Kustomisasi

### Mengubah Warna
Edit di `tailwind.config` atau inline:
- Primary: `#d4ff00`
- Background overlay: `black/50`

### Mengubah Kecepatan Cloud
Edit di `Cloud.tsx`:
```tsx
<Cloud speed={60} delay={0} />  // speed dalam detik
```

### Mengubah Parallax Distance
Edit di `ParallaxHeading.tsx`:
```tsx
const heading1X = useTransform(scrollY, [0, 300], [0, -30]);  // -30px
const heading2X = useTransform(scrollY, [0, 300], [0, 30]);   // +30px
```

## 📝 Notes

- Hero.png harus ada di `/public/Hero.png`
- Semua animasi menggunakan `transform` untuk performa
- Navbar transparan ketika di Hero, blur ketika scroll
- Smooth scrolling dengan `behavior: 'smooth'`

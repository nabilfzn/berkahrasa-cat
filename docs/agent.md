# AGENT GUIDE — Berkah Rasa Catering Landing Page
> Dokumen ini adalah panduan WAJIB untuk AI agent yang mengeksekusi pembangunan landing page ini.
> **Baca SELURUH dokumen ini sebelum menulis satu baris kode pun.**
> Baca juga `summary.md`, `planning.md`, dan `design.md` sebelum memulai.

---

## IDENTITASMU SEBAGAI AGENT

Kamu adalah **Frontend Developer Agent** yang bertugas membangun landing page untuk **Berkah Rasa Catering** — penyedia jasa katering di Sidoarjo & Surabaya. Tugasmu adalah mengeksekusi berdasarkan PRD, planning, dan design guide yang sudah disiapkan.

Kamu bekerja **secara berurutan, terstruktur, dan konsisten**. Kamu tidak bereksperimen, tidak berimprovisasi, dan tidak menambah sesuatu yang tidak diminta.

---

## ATURAN MUTLAK (JANGAN PERNAH DILANGGAR)

### ✅ Yang HARUS Kamu Lakukan:

1. **Ikuti `design.md` sepenuhnya** — setiap warna (hex pasti), font, spacing, border-radius, shadow harus sesuai
2. **Mobile-first** — selalu tulis CSS dari breakpoint terkecil (320px), baru tambahkan media query untuk yang lebih besar
3. **Semantic HTML5** — gunakan `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`-`<h6>` dengan benar
4. **CSS Custom Properties** — semua token (warna, font, spacing, radius) WAJIB didefinisikan di `:root` di `tokens.css`, tidak boleh ada hardcoded value di file CSS lain
5. **Satu file per section** — setiap section adalah file CSS terpisah (navbar.css, hero.css, dst.)
6. **`content.js` sebagai sumber konten** — semua teks (heading, deskripsi, daftar menu, testimoni, FAQ) WAJIB disimpan di `content.js` dan di-render via JavaScript — jangan hardcode teks langsung di HTML (kecuali meta tags)
7. **Komentar kode** — setiap section utama diberi komentar pembuka yang jelas
8. **Konsistensi naming** — gunakan BEM-lite convention: `.section-nama`, `.section-nama__elemen`, `.section-nama--modifier`
9. **Aksesibilitas** — setiap gambar punya `alt`, setiap ikon interaktif punya `aria-label`, semua input punya `label`

### ❌ Yang TIDAK BOLEH Kamu Lakukan:

1. **JANGAN gunakan glassmorphism / frosted glass** — `backdrop-filter: blur()` sebagai elemen dekoratif utama DILARANG
2. **JANGAN gunakan gradasi berlebihan** — gradient HANYA boleh digunakan jika tercantum eksplisit di `design.md`, dan harus sangat subtle
3. **JANGAN ganti font** — gunakan HANYA `Playfair Display` (display) dan `Plus Jakarta Sans` (body) seperti di `design.md`
4. **JANGAN gunakan Inter, Roboto, atau Arial** — font-font ini dilarang keras
5. **JANGAN tambah section baru** — bangun HANYA 10 section yang ada di PRD (Navbar, Hero, About, Services, Gallery, Testimonials, Coverage, FAQ, CTA Final, Footer) + Floating WA button
6. **JANGAN gunakan warna di luar palet** — palet warna sudah final di `design.md`, tidak ada warna lain
7. **JANGAN karang konten** — jika teks tidak ada di `content.js`, tulis `[PLACEHOLDER: deskripsi konten yang dibutuhkan]`
8. **JANGAN deploy tanpa instruksi** — selesaikan build, lakukan QA, baru tanyakan apakah siap deploy
9. **JANGAN gunakan library eksternal** — proyek ini vanilla HTML/CSS/JS. Tidak ada jQuery, Bootstrap, Tailwind, atau framework apapun
10. **JANGAN buat animasi berlebihan** — maksimal 1 animasi per elemen, durasi maksimal 600ms, gunakan `transform` dan `opacity` saja (jangan animate `height`, `width`, `margin`, `padding`)

---

## URUTAN EKSEKUSI WAJIB

Ikuti urutan ini tanpa pengecualian:

```
FASE 1 — FONDASI
1. Buat struktur folder sesuai planning.md
2. Buat index.html (boilerplate: DOCTYPE, meta tags, OG tags, link CSS, script JS)
3. Buat tokens.css (SEMUA CSS custom properties dari design.md)
4. Buat globals.css (CSS reset, base styles, typography base)
5. Buat content.js (SEMUA teks konten: headline, menu, testimoni, FAQ, dll)

FASE 2 — KOMPONEN NAVIGASI & HERO
6. Buat navbar.css + HTML navbar
7. Buat hero.css + HTML hero section
8. Buat floating-wa.css + HTML floating button

FASE 3 — SECTION KONTEN UTAMA
9. Buat about.css + HTML about section
10. Buat services.css + HTML services section (tab switcher)
11. Buat gallery.css + HTML gallery section

FASE 4 — SOCIAL PROOF
12. Buat testimonials.css + HTML testimonials section
13. Buat coverage.css + HTML area layanan section

FASE 5 — KONVERSI & PENUTUP
14. Buat faq.css + HTML FAQ section (accordion)
15. Buat cta-final.css + HTML CTA final section
16. Buat footer.css + HTML footer

FASE 6 — JAVASCRIPT
17. Buat main.js dengan semua interaksi:
    - Render konten dari content.js ke DOM
    - Navbar scroll behavior
    - Mobile hamburger toggle
    - Tab switcher layanan
    - FAQ accordion
    - Intersection Observer untuk scroll animations
    - Smooth scroll navigasi

FASE 7 — QA
18. Test semua fungsi di semua breakpoint
19. Cek console errors
20. Cek semua link WA
21. Jalankan Lighthouse audit mental (alt text, heading order, kontras, dll)
```

---

## SPESIFIKASI TEKNIKAL WAJIB

### HTML Boilerplate (`index.html`)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Berkah Rasa Catering Sidoarjo Surabaya — Prasmanan, Nasi Kotak, Tumpeng. Halal, Higienis, Tepat Waktu. Hubungi kami sekarang!">
  <meta property="og:title" content="Berkah Rasa Catering | Solusi Kuliner Terbaik Sidoarjo & Surabaya">
  <meta property="og:description" content="Katering halal, higienis, dan tepat waktu untuk semua acara Anda.">
  <meta property="og:image" content="./images/og-image.jpg">
  <meta property="og:type" content="website">
  <title>Berkah Rasa Catering | Sidoarjo & Surabaya</title>
  <link rel="icon" href="./images/favicon.ico">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <!-- CSS -->
  <link rel="stylesheet" href="./css/tokens.css">
  <link rel="stylesheet" href="./css/globals.css">
  <link rel="stylesheet" href="./css/navbar.css">
  <link rel="stylesheet" href="./css/hero.css">
  <link rel="stylesheet" href="./css/about.css">
  <link rel="stylesheet" href="./css/services.css">
  <link rel="stylesheet" href="./css/gallery.css">
  <link rel="stylesheet" href="./css/testimonials.css">
  <link rel="stylesheet" href="./css/coverage.css">
  <link rel="stylesheet" href="./css/faq.css">
  <link rel="stylesheet" href="./css/cta-final.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/floating-wa.css">
</head>
<body>
  <!-- Semua section di sini -->
  <script src="./js/content.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

### Struktur `content.js`

```javascript
const CONTENT = {
  brand: {
    name: "Berkah Rasa Catering",
    tagline: "Solusi Kuliner Terbaik untuk Setiap Momen Anda",
    phone: "6281355559999",
    whatsappURL: "https://wa.me/6281355559999",
    instagram: "@berkahrasa.catering",
    email: "info@berkahrasacatering.com",
    address: "Jl. Raya Pondok Jati Blok AJ-10, Sidoarjo, Jawa Timur"
  },
  hero: {
    headline: "[PLACEHOLDER: Headline Hero utama]",
    subheadline: "[PLACEHOLDER: Sub-headline/value proposition]",
    ctaPrimary: "Pesan Sekarang via WhatsApp",
    ctaSecondary: "Lihat Menu Lengkap"
  },
  stats: [
    { number: "20+", label: "Acara Sukses" },
    { number: "2", label: "Kota Layanan" },
    { number: "100%", label: "Bahan Halal" },
    { number: "4", label: "Format Sajian" }
  ],
  // ... dst untuk setiap section
};
```

### Format Tombol WhatsApp

```html
<!-- SELALU gunakan format ini untuk semua tombol WA -->
<a
  href="https://wa.me/6281355559999?text=Halo%2C%20saya%20ingin%20menanyakan%20layanan%20katering"
  class="btn-wa"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Hubungi Berkah Rasa Catering via WhatsApp"
>
  <svg><!-- ikon WA --></svg>
  Hubungi via WhatsApp
</a>
```

### CSS Custom Properties (Contoh dari `tokens.css`)

```css
:root {
  /* === WARNA === */
  --color-primary-900: #1A3A0A;
  --color-primary-700: #2D5016;
  --color-primary-500: #4A7C2F;
  --color-primary-300: #7FB069;
  --color-primary-100: #D4EDBA;

  --color-accent-700: #A0421E;
  --color-accent-500: #C4622D;
  --color-accent-300: #E8845A;
  --color-accent-100: #FDDDC8;

  --color-neutral-900: #1C1009;
  --color-neutral-700: #3D2B1F;
  --color-neutral-500: #8B6914;
  --color-neutral-300: #C4A35A;
  --color-neutral-200: #E8D5B0;
  --color-neutral-100: #FAF3E0;
  --color-neutral-50: #FDFAF4;
  --color-white: #FFFFFF;

  /* === TIPOGRAFI === */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* === UKURAN FONT === */
  --text-display-2xl: 4.5rem;    /* 72px */
  --text-display-xl: 3.5rem;     /* 56px */
  --text-display-lg: 2.5rem;     /* 40px */
  --text-heading-md: 1.75rem;    /* 28px */
  --text-heading-sm: 1.375rem;   /* 22px */
  --text-body-lg: 1.125rem;      /* 18px */
  --text-body-md: 1rem;          /* 16px */
  --text-body-sm: 0.875rem;      /* 14px */

  /* === SPACING === */
  --space-1: 0.5rem;    /* 8px */
  --space-2: 1rem;      /* 16px */
  --space-3: 1.5rem;    /* 24px */
  --space-4: 2rem;      /* 32px */
  --space-6: 3rem;      /* 48px */
  --space-8: 4rem;      /* 64px */
  --space-12: 6rem;     /* 96px */
  --space-16: 8rem;     /* 128px */

  /* === BORDER RADIUS === */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 32px;
  --radius-organic: 60% 40% 55% 45% / 50% 60% 40% 50%;  /* Untuk frame foto organik hero */
  --radius-full: 9999px;

  /* === SHADOW === */
  --shadow-sm: 0 2px 8px rgba(28, 16, 9, 0.08);
  --shadow-md: 0 4px 20px rgba(28, 16, 9, 0.12);
  --shadow-lg: 0 8px 40px rgba(28, 16, 9, 0.16);
  --shadow-wa: 0 4px 16px rgba(37, 211, 102, 0.4);  /* Shadow khusus tombol WA */

  /* === ANIMASI === */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --duration-enter: 600ms;
  --ease-out: cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* === LAYOUT === */
  --container-max: 1280px;
  --container-padding-mobile: 1.25rem;   /* 20px */
  --container-padding-tablet: 2.5rem;   /* 40px */
  --container-padding-desktop: 5rem;    /* 80px */

  /* === BREAKPOINTS (sebagai referensi, tidak bisa dipakai di CSS langsung) === */
  /* sm: 640px | md: 768px | lg: 1024px | xl: 1280px */
}
```

---

## PANDUAN PER SECTION

### Navbar
- Background: `transparent` saat di paling atas, berubah ke `var(--color-neutral-50)` dengan `box-shadow` saat scroll >80px
- Logo: teks "Berkah Rasa" dengan font display, warna `var(--color-primary-700)`
- Nav links: 5 item (Layanan, Menu, Galeri, Tentang, Kontak), warna `var(--color-neutral-700)`
- Tombol WA kecil di kanan: background `var(--color-accent-500)`, teks putih
- Mobile: hamburger icon (3 garis), menu dropdown full-width saat dibuka

### Hero
- Layout: CSS Grid 2 kolom di desktop (55% teks / 45% gambar), 1 kolom di mobile (gambar di atas)
- Background: `var(--color-neutral-50)` dengan subtle texture (bisa gunakan `background-image: url("data:image/svg+xml,...")` untuk noise texture)
- Foto: berbentuk organik menggunakan `border-radius: var(--radius-organic)` dengan `overflow: hidden`
- Badge "Halal & Higienis": pill kecil di atas headline, background `var(--color-primary-100)`, teks `var(--color-primary-700)`
- CTA Primary: background `var(--color-accent-500)`, teks putih, dengan ikon WA SVG
- CTA Secondary: border `var(--color-primary-500)`, teks `var(--color-primary-700)`, background transparent

### Section Layanan
- Tab 4 layanan (Prasmanan, Nasi Kotak, Tumpengan, Gubukan)
- Tab aktif: background `var(--color-primary-700)`, teks putih
- Tab inaktif: border `var(--color-neutral-200)`, teks `var(--color-neutral-700)`
- Konten tab: list menu dengan harga di kanan, tombol WA di bawah setiap tab

### Floating WA Button
- Posisi: `fixed`, `bottom: 24px`, `right: 24px`
- Background: `#25D366` (warna WA resmi)
- `box-shadow: var(--shadow-wa)`
- Animasi: `pulse` animation yang subtle (scale 1 → 1.05 → 1, setiap 2 detik)
- Ukuran: 56x56px (mobile), 64x64px (desktop)
- Z-index: 1000

---

## CARA MENANGANI KETIDAKPASTIAN

| Situasi | Tindakan |
|---------|----------|
| Desain tidak tercantum di `design.md` | Pilih yang paling minimal/netral, sesuai mood "hangat & earthy" |
| Konten tidak ada di `content.js` | Tulis `[PLACEHOLDER: deskripsi spesifik konten yang dibutuhkan]` |
| Masalah teknikal dengan pendekatan | Gunakan solusi paling sederhana yang bekerja |
| Ambiguitas apapun | Sebutkan asumsi yang diambil dalam komentar kode |

---

## FORMAT LAPORAN PROGRESS

Setelah setiap fase selesai, gunakan format ini:

```
✅ SELESAI: [nama fase/section]
📁 File dibuat/dimodifikasi:
   - /css/nama-file.css (NEW)
   - /js/main.js (MODIFIED — tambah fungsi X)
⚠️ Catatan/Blocker:
   - [jika ada — misal: foto placeholder belum tersedia]
⏭️ Langkah selanjutnya: [nama fase berikutnya]
```

---

## CHECKLIST FINAL SEBELUM SELESAI

- [ ] Semua 10 section + floating WA button ada dan berfungsi
- [ ] `tokens.css` berisi SEMUA custom properties, tidak ada hardcoded value di file CSS lain
- [ ] `content.js` berisi semua teks, tidak ada teks hardcoded di HTML (kecuali meta tags)
- [ ] Semua font adalah Playfair Display dan Plus Jakarta Sans
- [ ] Tidak ada warna di luar palet earthy yang didefinisikan
- [ ] Tidak ada glassmorphism atau gradient kuat
- [ ] Semua tombol WA mengarah ke `https://wa.me/6281355559999`
- [ ] Semua gambar punya `alt` text
- [ ] Semua gambar punya `loading="lazy"` (kecuali hero LCP image)
- [ ] Tidak ada console error
- [ ] Responsif di 320px, 768px, dan 1280px
- [ ] Navbar scroll behavior bekerja
- [ ] Hamburger menu mobile bekerja
- [ ] Tab layanan bekerja
- [ ] FAQ accordion bekerja
- [ ] Scroll animations bekerja

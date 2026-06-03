# Planning Detail — Berkah Rasa Catering Landing Page
> Dokumen ini mencakup seluruh alur pengerjaan dari nol hingga launch.
> Setiap fase harus diselesaikan secara berurutan sebelum lanjut ke fase berikutnya.

---

## FASE 0 — Pre-Production (Hari 1–2)

### 0.1 Kickoff & Alignment
- [ ] Finalisasi brief klien (PRD sudah tersedia di `summary.md`)
- [ ] Konfirmasi nomor WA yang akan dipakai untuk tombol CTA: `0813-5555-9999`
- [ ] Konfirmasi range harga per layanan untuk ditampilkan di halaman
- [ ] Konfirmasi apakah ada logo yang bisa dipakai, atau pakai wordmark teks
- [ ] Konfirmasi Google Analytics ID (jika sudah punya)
- [ ] Konfirmasi domain yang akan digunakan

### 0.2 Riset & Referensi
- [ ] Analisis kompetitor lokal (min. 3 catering Surabaya/Sidoarjo yang punya website)
- [ ] Kumpulkan referensi visual "Dapur Hangat" — earthy, warm, trusted local brand
- [ ] Download 12–15 foto dummy dari Unsplash/Pexels (kategori: catering, food, Indonesian food, event)
  - Keywords untuk search: "Indonesian catering food", "prasmanan Indonesia", "nasi tumpeng", "nasi kotak", "catering event Indonesia", "food photography warm tones"
- [ ] Finalisasi sitemap halaman (sudah tercantum di PRD)

### 0.3 Persiapan Konten
- [ ] Tulis semua copy landing page di `content.js` sebelum mulai koding
- [ ] Buat 5–6 dummy testimoni (nama + kota + jenis acara + bintang 5)
- [ ] Tulis 6 FAQ yang paling sering ditanya calon pelanggan katering
- [ ] Tulis range harga estimasi per layanan (Prasmanan, Nasi Kotak, Tumpengan, Gubukan)

---

## FASE 1 — Design System (Hari 3–4)

### 1.1 Token Desain (Buat di `tokens.css`)
- [ ] Definisi palet warna lengkap (lihat `design.md` untuk nilai hex)
  - Primary: Forest Green (#2D5016, #4A7C2F, #7FB069)
  - Accent: Terracotta/Oranye (#C4622D, #E8845A, #F4A261)
  - Neutral: Krem & Coklat (#FAF3E0, #E8D5B0, #8B6914, #3D2B1F)
  - Text: Near-black coklat gelap (#1C1009)
- [ ] Tipografi scale lengkap (display, heading, body, caption)
- [ ] Spacing system berbasis 8px
- [ ] Border-radius tokens
- [ ] Shadow tokens
- [ ] Animation/transition tokens

### 1.2 Komponen Dasar (Lo-fi mental mapping)
- [ ] Pemetaan komponen: Button (Primary WA, Secondary, Ghost)
- [ ] Card komponen: Service Card, Testimoni Card, Menu Item
- [ ] Badge komponen: Halal badge, Harga badge
- [ ] Ikon set: pilih dari Phosphor Icons atau buat SVG inline
- [ ] Navbar: desktop (full) vs mobile (hamburger)

### 1.3 Wireframe (Deskriptif per Section)
- [ ] Hero: Asimetris kiri-teks / kanan-foto organik frame
- [ ] Tentang Kami: Teks singkat + 4 kolom keunggulan (ikon + teks)
- [ ] Layanan: Tab atau accordion per kategori layanan + daftar menu
- [ ] Galeri: Grid masonry atau grid 3 kolom
- [ ] Testimoni: Card carousel atau grid 2-3 kolom
- [ ] Area Layanan: Teks + ilustrasi/ikon peta sederhana
- [ ] FAQ: Accordion expand/collapse
- [ ] CTA Final: Full-width section dengan headline + tombol WA besar
- [ ] Footer: 3 kolom (info bisnis, navigasi, kontak)

---

## FASE 2 — Development (Hari 5–9)

### 2.1 Setup Proyek
- [ ] Buat struktur folder proyek sesuai diagram di bawah
- [ ] Buat file `index.html` dengan boilerplate lengkap (meta tags, OG tags, favicon, GA snippet)
- [ ] Buat `tokens.css` — semua CSS custom properties
- [ ] Buat `globals.css` — reset, base typography, layout utilities
- [ ] Buat `content.js` — semua teks konten (mudah diganti tanpa edit HTML)
- [ ] Import Google Fonts di `<head>` dengan `font-display: swap`
- [ ] Siapkan folder `/images` dengan foto-foto placeholder

### 2.2 Implementasi per Section (Urutan Wajib)

**Tahap A — Fondasi:**
- [ ] `navbar.css` + Navbar HTML: Logo/wordmark, navigasi desktop, hamburger mobile, tombol WA kecil
- [ ] `hero.css` + Hero HTML: Layout asimetris, headline, sub-headline, 2 CTA button, foto organik frame
- [ ] `floating-wa.css` + Floating WA button: Fixed position, animasi pulse, tooltip

**Tahap B — Konten Utama:**
- [ ] `about.css` + Section Tentang Kami: Story paragraf + 4 kartu keunggulan (Halal, Tepat Waktu, Higienis, Harga)
- [ ] `services.css` + Section Layanan & Menu: Tab switcher 4 layanan, daftar menu detail, harga, tombol WA per layanan
- [ ] `gallery.css` + Section Galeri: Grid foto dummy (8 foto), efek hover overlay

**Tahap C — Social Proof:**
- [ ] `testimonials.css` + Section Testimoni: 6 card testimoni dummy dengan nama, acara, bintang
- [ ] `stats.css` + Stats bar (bisa bagian dari About): 20+ Acara · 2 Kota · 100% Halal · Tepat Waktu
- [ ] `coverage.css` + Section Area Layanan: Sidoarjo & Surabaya dengan penjelasan singkat

**Tahap D — Konversi & Penutup:**
- [ ] `faq.css` + Section FAQ: 6 pertanyaan accordion
- [ ] `cta-final.css` + Section CTA Final: Full-width earthy background, headline, deskripsi singkat, tombol WA besar
- [ ] `footer.css` + Footer: Logo, deskripsi, navigasi, kontak (WA, IG, email, alamat), copyright

**Tahap E — JavaScript:**
- [ ] `main.js`: Navbar scroll behavior (background muncul setelah scroll 80px)
- [ ] `main.js`: Mobile hamburger menu toggle
- [ ] `main.js`: Tab switcher section Layanan
- [ ] `main.js`: FAQ accordion toggle
- [ ] `main.js`: Scroll-triggered animations (Intersection Observer)
- [ ] `main.js`: Smooth scroll untuk link navigasi

### 2.3 Responsivitas (Mobile-First)
- [ ] Mobile (320px – 767px): Single column, font lebih kecil, CTA full-width, hamburger nav
- [ ] Tablet (768px – 1023px): 2 kolom untuk cards, navigasi hybrid
- [ ] Desktop (1024px+): Layout penuh, asimetris hero, 3-4 kolom grid

---

## FASE 3 — QA & Optimasi (Hari 10–11)

### 3.1 Quality Assurance
- [ ] Cross-browser test: Chrome, Firefox, Safari (macOS/iOS), Edge
- [ ] Test di device mobile nyata atau emulator: iPhone SE (375px), Pixel 5 (393px), Samsung Galaxy (360px)
- [ ] Validasi semua tombol WA — pastikan link format benar: `https://wa.me/6281355559999`
- [ ] Cek semua link navigasi smooth-scroll ke section yang benar
- [ ] Cek accordion FAQ bekerja di mobile
- [ ] Cek tab switcher layanan bekerja di semua device
- [ ] Pastikan tidak ada console error di semua browser
- [ ] Cek floating WA button tidak menutupi konten penting di mobile

### 3.2 Lighthouse & Performance
- [ ] Jalankan Lighthouse audit (target semua score >85)
  - Performance: >85
  - Accessibility: >90
  - Best Practices: >90
  - SEO: >90
- [ ] Kompres semua gambar ke WebP (gunakan Squoosh atau tools online)
- [ ] Pastikan semua gambar punya `alt` text yang deskriptif
- [ ] Pastikan semua gambar punya `loading="lazy"` (kecuali hero)
- [ ] Cek ukuran font minimum 14px di mobile
- [ ] Cek semua touch target minimal 44x44px

### 3.3 Aksesibilitas
- [ ] Kontras warna teks vs background memenuhi WCAG AA (rasio min. 4.5:1)
- [ ] Semua ikon punya `aria-label` atau teks pendamping
- [ ] Urutan heading logis: H1 → H2 → H3
- [ ] Form/button punya `focus` state yang terlihat jelas
- [ ] Hamburger menu accessible via keyboard

### 3.4 SEO Dasar
- [ ] Meta title: "Berkah Rasa Catering Sidoarjo Surabaya | Prasmanan, Nasi Kotak, Tumpeng"
- [ ] Meta description: maks 155 karakter, mengandung keyword utama
- [ ] OG Image: 1200x630px dengan branding Berkah Rasa
- [ ] Canonical URL
- [ ] Structured data JSON-LD: LocalBusiness schema

---

## FASE 4 — Delivery (Hari 12)

- [ ] Final review lengkap (buka dari device berbeda)
- [ ] Ganti semua `[PLACEHOLDER]` dengan konten final yang dikonfirmasi klien
- [ ] Pastikan harga sudah dikonfirmasi klien sebelum naik
- [ ] Upload ke hosting klien
- [ ] Test live URL di mobile dan desktop
- [ ] Pasang Google Analytics 4 (jika ID sudah tersedia)
- [ ] Submit URL ke Google Search Console
- [ ] Handover: kirim seluruh file source code + dokumentasi ke klien
- [ ] Monitoring 48 jam pertama: cek uptime, cek ada error tidak

---

## Struktur Folder Proyek

```
berkah-rasa-catering/
├── index.html
├── /css/
│   ├── tokens.css          ← CSS custom properties (warna, font, spacing)
│   ├── globals.css         ← Reset, base styles, typography
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── services.css
│   ├── gallery.css
│   ├── testimonials.css
│   ├── coverage.css
│   ├── faq.css
│   ├── cta-final.css
│   ├── footer.css
│   └── floating-wa.css
├── /js/
│   ├── content.js          ← Semua teks konten (mudah diedit tanpa buka HTML)
│   └── main.js             ← Semua interaksi & animasi
├── /images/
│   ├── /hero/
│   ├── /services/
│   ├── /gallery/
│   ├── logo.svg (atau logo.png)
│   ├── og-image.jpg
│   └── favicon.ico
├── summary.md
├── planning.md
├── agent.md
├── design.md
└── README.md
```

---

## Checklist Akhir Sebelum Launch

### Fungsi & Teknikal
- [ ] Semua tombol WA terhubung ke nomor yang benar
- [ ] Floating WA button muncul dan berfungsi
- [ ] Navigasi smooth-scroll bekerja
- [ ] Hamburger menu mobile berfungsi
- [ ] Tab layanan bisa di-switch
- [ ] FAQ accordion expand/collapse
- [ ] Tidak ada broken image
- [ ] Tidak ada console error

### Visual & Konten
- [ ] Semua placeholder foto sudah diganti (atau diberi label jelas)
- [ ] Harga sudah dikonfirmasi klien
- [ ] Tidak ada typo di semua teks
- [ ] Logo/wordmark terpasang benar
- [ ] Favicon muncul di browser tab

### SEO & Analytics
- [ ] Meta title & description terpasang
- [ ] OG image terpasang dan ukuran benar
- [ ] Google Analytics terpasang (jika ID tersedia)
- [ ] Structured data JSON-LD terpasang
- [ ] SSL aktif (HTTPS)

### Performance
- [ ] Lighthouse Performance >85
- [ ] Lighthouse Accessibility >90
- [ ] Semua gambar terkompresi & lazy loaded
- [ ] Tidak ada render-blocking resource kritis

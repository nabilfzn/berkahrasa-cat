# EXECUTION PROMPT — Berkah Rasa Catering Landing Page
> **Gunakan prompt ini untuk memberikan instruksi kepada AI code executor atau developer untuk membangun landing page.**

---

## 🎯 TUGAS UTAMA

Bangun landing page **Berkah Rasa Catering** yang sepenuhnya fungsional, siap launch, dan sesuai dengan spesifikasi 4 dokumen di bawah ini. Landing page HARUS berupa **HTML/CSS/JavaScript statis vanilla** (tanpa framework).

**Target completion:** Semua file source code siap, tidak ada error, lulus QA Lighthouse >85, dan siap di-deploy ke hosting.

---

## 📚 DOKUMEN REFERENSI (WAJIB DIBACA SEBELUM MULAI)

Sebelum menulis satu baris kode, **BACA SELURUH dokumen ini secara berurutan:**

1. **`summary.md`** — Product Requirement Document (PRD)
   - Baca untuk memahami: tujuan bisnis, target audiens, scope pekerjaan, struktur halaman
   - Perhatian khusus: 10 section yang harus dibangun + Floating WA button

2. **`planning.md`** — Planning Detail & Checklist Proyek
   - Baca untuk memahami: urutan eksekusi (Fase 0–4), struktur folder, checklist QA
   - Perhatian khusus: FASE 2 mencakup urutan eksekusi per section — WAJIB diikuti

3. **`agent.md`** — Panduan Teknikal Eksekusi (PALING PENTING)
   - Baca untuk memahami: 10 aturan WAJIB + 10 larangan mutlak, urutan coding, spesifikasi teknikal
   - Perhatian khusus: Jangan pernah lakukan sesuatu yang tercantum di "JANGAN"

4. **`design.md`** — Design Guide Lengkap (REFERENSI VISUAL)
   - Baca untuk memahami: filosofi "Dapur Hangat", palet warna hex, tipografi, spacing, animasi
   - Perhatian khusus: Semua warna, font, shadow, border-radius HARUS mengikuti guide ini

---

## ✅ YANG PERLU DIHASILKAN (OUTPUT)

Setelah selesai, hasilkan struktur folder ini di `/outputs/` atau direktori yang ditunjuk:

```
berkah-rasa-catering/
├── index.html
├── /css/
│   ├── tokens.css
│   ├── globals.css
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
│   ├── content.js
│   └── main.js
├── /images/
│   ├── /hero/
│   ├── /services/
│   ├── /gallery/
│   ├── logo.svg
│   ├── og-image.jpg
│   └── favicon.ico
├── summary.md
├── planning.md
├── agent.md
├── design.md
└── README.md
```

**Output yang akan di-deliver:**
- ✅ File HTML + CSS + JS lengkap, testing-ready
- ✅ Semua 10 section + Navbar + Footer + Floating WA button
- ✅ Semua konten dalam `content.js` (mudah diupdate tanpa edit HTML)
- ✅ Responsif mobile-first (320px, 768px, 1280px)
- ✅ Semua animasi scroll-triggered dengan Intersection Observer
- ✅ Zero console error
- ✅ Lighthouse performance >85
- ✅ File ini yang sudah ada (`summary.md`, `planning.md`, `agent.md`, `design.md`)

---

## 🚀 URUTAN EKSEKUSI YANG WAJIB DIIKUTI

**JANGAN LOMPAT LANGKAH.** Ikuti urutan ini secara ketat:

### FASE 1 — FONDASI (Hari 1–2)
```
[ ] 1. Baca semua 4 dokumen (summary, planning, agent, design)
[ ] 2. Buat index.html dengan boilerplate lengkap (meta tags, OG, font import)
[ ] 3. Buat tokens.css — SEMUA CSS custom properties dari design.md
[ ] 4. Buat globals.css — reset, base typography, utilities
[ ] 5. Buat content.js — struktur CONTENT object dengan semua teks
[ ] 6. Download 8–15 foto dummy dari Unsplash/Pexels (earthy tone)
```

### FASE 2 — KOMPONEN NAVIGASI & HERO (Hari 3–4)
```
[ ] 7. Buat navbar.css + navbar HTML (logo, nav links, hamburger, WA button)
[ ] 8. Buat hero.css + hero HTML (asimetris layout, foto organik frame, CTA)
[ ] 9. Buat floating-wa.css + floating WA button HTML
```

### FASE 3 — SECTION KONTEN UTAMA (Hari 5–6)
```
[ ] 10. Buat about.css + about HTML (story + 4 keunggulan cards)
[ ] 11. Buat services.css + services HTML (tab switcher, menu, harga)
[ ] 12. Buat gallery.css + gallery HTML (masonry/grid foto 8 item)
```

### FASE 4 — SOCIAL PROOF (Hari 6–7)
```
[ ] 13. Buat testimonials.css + testimoni HTML (6 card dengan bintang)
[ ] 14. Buat coverage.css + coverage HTML (area layanan Sidoarjo-Surabaya)
```

### FASE 5 — KONVERSI & FOOTER (Hari 7–8)
```
[ ] 15. Buat faq.css + FAQ HTML (accordion 6 pertanyaan)
[ ] 16. Buat cta-final.css + CTA final HTML (full-width section)
[ ] 17. Buat footer.css + footer HTML (3 kolom dengan kontak)
```

### FASE 6 — JAVASCRIPT & INTERAKSI (Hari 8–9)
```
[ ] 18. Buat main.js:
        - Render content.js ke DOM
        - Navbar scroll behavior (background appear >80px)
        - Mobile hamburger menu toggle
        - Tab switcher layanan
        - FAQ accordion expand/collapse
        - Intersection Observer untuk scroll animations
        - Smooth scroll untuk link navigasi
```

### FASE 7 — QA & OPTIMASI (Hari 10–11)
```
[ ] 19. Test semua fungsi di breakpoint 320px, 768px, 1280px
[ ] 20. Verifikasi semua tombol WA terhubung ke: https://wa.me/6281355559999
[ ] 21. Cek no console error, broken links, gambar loading
[ ] 22. Jalankan Lighthouse audit (target: Performance >85, Accessibility >90)
[ ] 23. Ganti semua placeholder dengan konten final
```

### FASE 8 — DELIVERY (Hari 12)
```
[ ] 24. Final visual review
[ ] 25. Pastikan hosting sudah siap (domain, SSL, etc)
[ ] 26. Package semua file source code
```

---

## 📋 CHECKLIST ATURAN YANG HARUS DIPATUHI

### ✅ HARUS DILAKUKAN:
- [ ] Semua token (warna, font, spacing, radius) di `tokens.css` sebagai CSS custom properties
- [ ] Mobile-first: tulis CSS dari 320px, baru `@media (min-width: 768px)` dst
- [ ] Semantic HTML5: `<nav>`, `<main>`, `<section>`, `<footer>`, heading hierarchy benar
- [ ] Font HANYA Playfair Display (display) + Plus Jakarta Sans (body) — TIDAK ADA LAIN
- [ ] Warna HANYA dari palet earthy di `design.md` — TIDAK ADA WARNA LAIN
- [ ] Animasi: gunakan `transform` dan `opacity` SAJA — JANGAN animate `height`, `width`, `margin`, `padding`
- [ ] Konten di `content.js` — jangan hardcode teks di HTML (kecuali meta tags)
- [ ] Setiap `<img>` punya `alt` text + `loading="lazy"` (kecuali hero LCP image)
- [ ] Tombol WA: gunakan format `https://wa.me/6281355559999?text=[encoded message]`
- [ ] Intersection Observer untuk scroll animations
- [ ] Accessibility: kontras teks ≥4.5:1, touch target ≥44x44px, ARIA labels

### ❌ JANGAN DILAKUKAN:
- [ ] JANGAN glassmorphism / `backdrop-filter: blur()`
- [ ] JANGAN gradient kuat atau multiple-color gradients
- [ ] JANGAN font Inter, Roboto, Arial, system-ui
- [ ] JANGAN warna di luar palet
- [ ] JANGAN section baru yang tidak di PRD
- [ ] JANGAN hardcoded hex color di CSS (gunakan CSS variables)
- [ ] JANGAN animasi berlebihan (>600ms, >1 per elemen)
- [ ] JANGAN library eksternal (jQuery, Bootstrap, Tailwind, dll)
- [ ] JANGAN deploy tanpa QA final
- [ ] JANGAN copyrighted content atau foto dengan watermark

---

## 🎨 POIN-POIN KRITIS DARI DESIGN GUIDE

**Warna Utama yang HARUS dipakai:**
```css
--color-primary-900: #1A3A0A;     /* Hijau gelap */
--color-primary-700: #2D5016;     /* Hijau forest — brand color */
--color-primary-500: #4A7C2F;     /* Hijau medium */
--color-accent-500: #C4622D;      /* Oranye terracotta — CTA utama */
--color-neutral-100: #FAF3E0;     /* Krem — background utama */
--color-neutral-900: #1C1009;     /* Coklat gelap — teks utama */
--color-wa-green: #25D366;        /* Hijau WA — floating button SAJA */
```

**Font yang HARUS dipakai:**
```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
```

**Layout Hero (Desktop):**
- Grid 2 kolom: 55% teks (kiri) / 45% foto organik (kanan)
- Foto dengan `border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;` (organik shape)
- Background: `var(--color-neutral-100)` + subtle noise texture
- Layout Mobile: 1 kolom, foto di bawah teks

**Animasi:**
- Hero title: fade-up 600ms saat page load
- Cards: fade-up stagger 400ms saat scroll into view (Intersection Observer)
- Navbar background: transition 250ms saat scroll >80px
- Floating WA: pulse animation infinite (2s cycle)

---

## 💬 KONTEN YANG SUDAH TERSEDIA

**Dari brief klien (di summary.md):**
- Brand: "Berkah Rasa Catering" — "Solusi Kuliner Terbaik untuk Setiap Momen Anda"
- Kontak WA: `0813-5555-9999`
- 4 Layanan: Prasmanan, Nasi Kotak, Tumpengan, Gubukan
- Menu detail lengkap (sudah di summary.md)
- 4 Keunggulan: Fleksibel, Halal & Higienis, Tepat Waktu, Harga Kompetitif
- Wilayah: Sidoarjo & Surabaya
- Portofolio: 20+ acara sukses

**Konten yang HARUS dibuat (dummy untuk awal):**
- Headline hero (2 baris, menarik perhatian)
- Sub-headline hero (value proposition singkat)
- Deskripsi "Tentang Kami" (2–3 paragraf)
- Deskripsi per layanan (1–2 kalimat per layanan)
- 6 FAQ dengan jawaban
- 6 dummy testimoni (nama + acara + kota + bintang 5)
- Copy footer dengan deskripsi singkat

**Foto dummy yang diperlukan:**
- Hero: 1 foto prasmanan/tumpeng (1200x800px recommended)
- Layanan: 4 foto (1 per kategori)
- Galeri: 8 foto (berbagai makanan, acara, suasana)
- Total: 13 foto dummy dari Unsplash/Pexels

---

## 📊 SPESIFIKASI TEKNIKAL

### File Size & Performance
- Target Lighthouse: Performance >85, Accessibility >90, Best Practices >90, SEO >90
- Total file size (CSS + JS): <100KB gzipped
- Critical rendering path: optimized (defer non-critical JS, async external scripts)

### Browser Compatibility
- Chrome/Edge: latest + 2 versions sebelumnya
- Firefox: latest + 2 versions sebelumnya
- Safari: latest + 1 version sebelumnya
- Mobile browsers: Android Chrome, iOS Safari terbaru

### Meta Tags (harus ada di `<head>`)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[deskripsi <155 char dengan keyword]">
<meta property="og:title" content="[title]">
<meta property="og:description" content="[description]">
<meta property="og:image" content="./images/og-image.jpg">
<meta property="og:type" content="website">
<meta name="theme-color" content="#2D5016">
<link rel="icon" href="./images/favicon.ico">
```

---

## 📞 KONTAK & INFO BISNIS (Copy ke content.js)

```javascript
const BRAND_INFO = {
  name: "Berkah Rasa Catering",
  tagline: "Solusi Kuliner Terbaik untuk Setiap Momen Anda",
  phone: "0813-5555-9999",
  whatsappURL: "https://wa.me/6281355559999",
  instagram: "@berkahrasa.catering",
  email: "info@berkahrasacatering.com",
  address: "Jl. Raya Pondok Jati Blok AJ-10, Sidoarjo, Jawa Timur",
  serviceAreas: ["Sidoarjo", "Surabaya"],
  portfolio: "20+ Acara Sukses"
};
```

---

## 📝 FORMAT LAPORAN PROGRESS

Setelah setiap fase selesai, laporkan dengan format ini:

```
✅ SELESAI: [Nama Fase — misal "FASE 2 — Navbar & Hero"]

📁 File yang dibuat/dimodifikasi:
   - /css/navbar.css (NEW)
   - /css/hero.css (NEW)
   - index.html (MODIFIED — tambah navbar & hero section)

🔍 Detail:
   - Navbar responsive dengan hamburger mobile
   - Hero asimetris 2 kolom desktop, 1 kolom mobile
   - Foto dengan border-radius organik dan shadow
   - Animasi fade-up loading
   - Tombol WA CTA utama

⚠️ Catatan/Blocker:
   - [jika ada issue — misal: foto placeholder belum download]

⏭️ Langkah selanjutnya: FASE 3 — Section Konten Utama (About, Services, Gallery)
```

---

## 🎬 MULAI SEKARANG

**Instruksi eksekusi:**

1. **Baca dokumen** (5–10 menit):
   - Baca `summary.md` (PRD)
   - Baca `agent.md` (aturan wajib & larangan)
   - Baca `design.md` (spesifikasi visual)

2. **Setup awal** (15 menit):
   - Buat folder struktur di atas
   - Buat `index.html` boilerplate
   - Buat `tokens.css` dengan semua custom properties

3. **Mulai Fase 1 — Fondasi**:
   - Ikuti urutan di "URUTAN EKSEKUSI YANG WAJIB DIIKUTI"
   - Selesaikan satu fase sebelum lanjut fase berikutnya
   - Laporkan progress setelah setiap fase

4. **QA Final** sebelum delivery:
   - Test responsive 320px/768px/1280px
   - Jalankan Lighthouse audit
   - Cek zero console error
   - Verifikasi semua link

---

## ❓ JIKA TIDAK YAKIN

| Situasi | Tindakan |
|---------|----------|
| Desain tidak ada di design.md | Pilih yang paling minimal sesuai mood "Dapur Hangat" |
| Konten tidak ada di content.js | Tulis placeholder: `[PLACEHOLDER: deskripsi konten]` |
| Warna/font tidak ada di guide | Jangan gunakan — tanyakan lebih dahulu |
| Animasi yang tepat untuk elemen X | Lihat tabel di design.md section 10 |
| Ukuran elemen yang benar | Lihat palet warna, spacing, border-radius di tokens & design guide |

---

## 🎉 SELESAI!

Setelah semua fase selesai dan lulus QA:

✅ Semua file siap di-export  
✅ Source code clean dan well-commented  
✅ Zero error, Lighthouse >85 semua metric  
✅ Responsif dan aksesibel  
✅ Siap di-deploy ke hosting klien  

**Good luck! Jika ada pertanyaan, referensi ke dokumen relevan dan cek ulang checklist di atas.** 🚀

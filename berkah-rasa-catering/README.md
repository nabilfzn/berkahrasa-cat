# Berkah Rasa Catering Landing Page

Landing page statis vanilla HTML, CSS, dan JavaScript untuk Berkah Rasa Catering.

## Struktur

- `index.html` berisi semantic section shells.
- `css/` berisi token desain, global style, dan style per section.
- `js/content.js` adalah sumber utama semua copy, menu, testimoni, FAQ, dan data kontak.
- `js/main.js` merender konten dan mengatur interaksi.
- `images/` berisi logo, favicon, OG image, hero, layanan, dan galeri. JPEG dipakai sebagai render utama agar placeholder tetap sesuai konteks makanan Indonesia.

## Cara Buka

Buka `index.html` langsung di browser. Tidak ada build step atau dependency framework.

## QA Singkat

- Semua CTA WhatsApp menggunakan `https://wa.me/6281355559999`.
- Hero image tidak memakai lazy loading.
- Gambar section lain memakai `loading="lazy"`.
- Interaksi: navbar scroll, hamburger menu, tab layanan, FAQ accordion, smooth scroll, dan Intersection Observer.

## Catatan Konten

Foto saat ini adalah placeholder bebas royalti dan bisa diganti dengan dokumentasi asli klien. Range harga perlu dikonfirmasi sebelum launch final.

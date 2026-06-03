# DESIGN GUIDE — Berkah Rasa Catering
> Dokumen ini adalah referensi desain yang **FINAL dan MENGIKAT**.
> Setiap keputusan visual HARUS merujuk ke dokumen ini.
> Jika sesuatu tidak tercantum di sini, pilih yang paling minimal dan konsisten dengan mood keseluruhan.

---

## 1. FILOSOFI DESAIN

**Konsep Utama: DAPUR HANGAT**
Desain yang memancarkan kehangatan rumah, kepercayaan lokal, dan kebersihan yang terjaga. Seperti masuk ke dapur yang harum, rapi, dan dikelola dengan cinta — bukan corporate dingin, bukan pula warung pinggir jalan. Ini adalah brand katering yang *terpercaya karena teruji*, bukan karena klaim kosong.

**Satu Kalimat Positioning Visual:**
*"Seperti masak sendiri, tapi tanpa repot — hangat, halal, dan selalu tepat waktu."*

### Prinsip Desain Proyek Ini:

1. **Earthy Before Trendy** — Setiap keputusan warna, tekstur, dan komposisi harus terasa membumi. Hindari warna neon, efek futuristik, atau estetika yang terlalu "digital". Ini adalah bisnis makanan yang nyata, bukan startup teknologi.

2. **Kepercayaan Lewat Kejujuran** — Tampilkan informasi (harga, menu, area layanan) secara transparan dan mudah dibaca. Tidak ada yang disembunyikan. Desain yang jujur membangun kepercayaan lebih cepat dari desain yang "cantik tapi bingung".

3. **Mobile-First, Selalu** — Mayoritas pengunjung adalah ibu atau pengguna berusia 28–35 yang membuka dari smartphone sambil merencanakan acara. Setiap elemen dirancang untuk nyaman di layar 375px terlebih dahulu.

4. **Konversi Tanpa Memaksa** — Tombol WhatsApp harus selalu terlihat tapi tidak agresif. CTA yang efektif adalah yang terasa natural, bukan yang berteriak.

5. **Foto sebagai Bintang Utama** — Foto makanan adalah aset terpenting. Desain berfungsi sebagai *frame* yang membuat makanan terlihat lebih menggugah selera, bukan bersaing dengan konten visual.

---

## 2. PALET WARNA

### Primary — Forest Green (Kepercayaan, Alam, Halal)
| Nama Token | Hex | RGB | Penggunaan |
|------------|-----|-----|------------|
| `--color-primary-900` | `#1A3A0A` | rgb(26,58,10) | Teks headline gelap, elemen paling dominan |
| `--color-primary-700` | `#2D5016` | rgb(45,80,22) | Warna utama brand, navbar logo, CTA secondary |
| `--color-primary-500` | `#4A7C2F` | rgb(74,124,47) | Aksen, border aktif, ikon |
| `--color-primary-300` | `#7FB069` | rgb(127,176,105) | Elemen dekoratif, highlight ringan |
| `--color-primary-100` | `#D4EDBA` | rgb(212,237,186) | Background badge Halal, area highlight subtle |

### Accent — Terracotta & Oranye (Kehangatan, Aksi, Selera)
| Nama Token | Hex | RGB | Penggunaan |
|------------|-----|-----|------------|
| `--color-accent-700` | `#A0421E` | rgb(160,66,30) | Hover state tombol CTA |
| `--color-accent-500` | `#C4622D` | rgb(196,98,45) | **CTA utama (tombol WA)**, highlight harga, elemen aktif |
| `--color-accent-300` | `#E8845A` | rgb(232,132,90) | Aksen dekoratif, gradasi subtle |
| `--color-accent-100` | `#FDDDC8` | rgb(253,221,200) | Background section CTA final, badge harga |

### Neutral — Krem & Coklat Bumi (Fondasi, Teks, Background)
| Nama Token | Hex | RGB | Penggunaan |
|------------|-----|-----|------------|
| `--color-neutral-900` | `#1C1009` | rgb(28,16,9) | Teks utama (heading, body) |
| `--color-neutral-700` | `#3D2B1F` | rgb(61,43,31) | Teks paragraf, nav link |
| `--color-neutral-500` | `#8B6914` | rgb(139,105,20) | Teks caption, label, subtitle |
| `--color-neutral-300` | `#C4A35A` | rgb(196,163,90) | Border dekoratif, divider |
| `--color-neutral-200` | `#E8D5B0` | rgb(232,213,176) | Border card, divider section |
| `--color-neutral-100` | `#FAF3E0` | rgb(250,243,224) | **Background utama halaman** |
| `--color-neutral-50` | `#FDFAF4` | rgb(253,250,244) | Background section alternatif (lebih putih) |
| `--color-white` | `#FFFFFF` | rgb(255,255,255) | Teks di atas background gelap, card putih |

### Warna Khusus Fungsi
| Nama Token | Hex | Penggunaan |
|------------|-----|------------|
| `--color-wa-green` | `#25D366` | KHUSUS untuk floating WA button & ikon WA resmi |
| `--color-wa-green-dark` | `#128C7E` | Hover state floating WA button |

### ⚠️ Larangan Warna (MUTLAK):
- **JANGAN** gunakan warna di luar tabel di atas — termasuk variasi opacity yang tidak terdaftar
- **JANGAN** buat gradasi linear dari dua warna yang berbeda kecuali yang tercantum eksplisit di bawah
- **JANGAN** gunakan warna biru, ungu, merah terang, atau warna dingin apapun
- **JANGAN** gunakan `rgba()` dengan opacity di bawah 0.5 untuk elemen teks
- **Gradient yang DIIZINKAN (satu-satunya):**
  - Subtle overlay pada hero: `linear-gradient(180deg, transparent 60%, rgba(28,16,9,0.3) 100%)` — hanya untuk foto, bukan background section
  - Stats bar background: `linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-900) 100%)` — sangat subtle

---

## 3. TIPOGRAFI

### Font Family
| Peran | Font Name | Weights | Source | Alasan Pemilihan |
|-------|-----------|---------|--------|-----------------|
| **Display / Hero** | Playfair Display | 600, 700, 800 | Google Fonts | Serif elegan dengan karakter kuat — memancarkan tradisi, kualitas, dan kepercayaan. Kontras sempurna dengan body sans-serif |
| **Body / UI** | Plus Jakarta Sans | 400, 500, 600 | Google Fonts | Modern, bersih, terbaca sangat baik di ukuran kecil di mobile. Punya kepribadian tapi tidak generic seperti Inter |

**Google Fonts Import URL:**
```
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap
```

### Type Scale
| Token CSS | Size | Line Height | Weight | Font | Penggunaan |
|-----------|------|------------|--------|------|------------|
| `--text-display-2xl` | 72px / 4.5rem | 1.05 | 800 | Playfair Display | Hero headline desktop |
| `--text-display-xl` | 56px / 3.5rem | 1.1 | 700 | Playfair Display | Hero headline tablet, section headline desktop |
| `--text-display-lg` | 40px / 2.5rem | 1.15 | 700 | Playfair Display | Section headline mobile, sub-section headline |
| `--text-heading-md` | 28px / 1.75rem | 1.25 | 600 | Playfair Display | Card title, tab heading |
| `--text-heading-sm` | 22px / 1.375rem | 1.3 | 600 | Plus Jakarta Sans | Sub-heading, label section |
| `--text-body-lg` | 18px / 1.125rem | 1.65 | 400 | Plus Jakarta Sans | Lead paragraph, deskripsi hero |
| `--text-body-md` | 16px / 1rem | 1.65 | 400 | Plus Jakarta Sans | Body text utama, daftar menu |
| `--text-body-sm` | 14px / 0.875rem | 1.5 | 400 | Plus Jakarta Sans | Caption, label badge, footnote |
| `--text-label` | 12px / 0.75rem | 1.4 | 500 | Plus Jakarta Sans | Label uppercase (HANYA untuk badge kecil) |

### Aturan Penggunaan Tipografi
- **Headline utama (H1):** Selalu Playfair Display, weight 700–800
- **Sub-headline dan section title (H2):** Playfair Display, weight 700
- **H3 dan seterusnya:** Bisa Plus Jakarta Sans weight 600 atau Playfair Display weight 600
- **Body text, deskripsi, list:** Plus Jakarta Sans weight 400
- **Tombol dan label UI:** Plus Jakarta Sans weight 500–600
- **Harga:** Plus Jakarta Sans weight 600, warna `--color-accent-500`

### ⚠️ Larangan Tipografi (MUTLAK):
- **JANGAN** gunakan Inter, Roboto, Arial, Helvetica, atau system-ui sebagai font utama
- **JANGAN** gunakan font-size di bawah 12px di semua breakpoint
- **JANGAN** gunakan line-height di bawah 1.4 untuk teks paragraf
- **JANGAN** gunakan `letter-spacing` yang lebih dari `0.05em` untuk body text
- **JANGAN** set teks dalam huruf kapital semua kecuali untuk label badge kecil (`text-transform: uppercase` hanya untuk `--text-label`)
- **JANGAN** gunakan warna teks selain yang ada di palet neutral untuk body text

---

## 4. SPACING & LAYOUT

### Base Grid: 8px
| Token CSS | Value | Penggunaan Umum |
|-----------|-------|-----------------|
| `--space-1` | 8px | Jarak micro: antara ikon dan label, antara badge |
| `--space-2` | 16px | Padding internal komponen kecil, gap item list |
| `--space-3` | 24px | Padding card, gap antar komponen |
| `--space-4` | 32px | Gap antar elemen dalam section |
| `--space-6` | 48px | Section padding vertical (mobile) |
| `--space-8` | 64px | Section padding vertical (tablet) |
| `--space-12` | 96px | Section padding vertical (desktop) |
| `--space-16` | 128px | Gap antar section besar |

### Container Layout
```css
.container {
  width: 100%;
  max-width: var(--container-max); /* 1280px */
  margin: 0 auto;
  padding: 0 var(--container-padding-mobile); /* 20px default */
}

@media (min-width: 768px) {
  .container { padding: 0 var(--container-padding-tablet); } /* 40px */
}

@media (min-width: 1024px) {
  .container { padding: 0 var(--container-padding-desktop); } /* 80px */
}
```

### Breakpoints
```css
/* Mobile first — tulis base styles untuk mobile, lalu override ke atas */
/* sm  */ @media (min-width: 640px)  { ... }
/* md  */ @media (min-width: 768px)  { ... }
/* lg  */ @media (min-width: 1024px) { ... }
/* xl  */ @media (min-width: 1280px) { ... }
```

---

## 5. HERO SECTION — SPESIFIKASI DETAIL

### Konsep Hero: "Sepiring Kenangan"
Seperti foto keluarga yang diambil saat momen bahagia — hangat, autentik, dan personal. Bukan iklan katering korporat.

### Layout Desktop (≥1024px)
```
+------------------------------------------------------------------+
| NAVBAR — transparent → solid saat scroll                        |
+------------------------------------------------------------------+
|                                                                  |
|  [Badge: ✓ Halal & Higienis • Sidoarjo & Surabaya]             |
|                                                                  |
|  Headline besar 2 baris          [  FOTO PRASMANAN /        ]   |
|  (Playfair Display 800)          [  TUMPENG dalam frame     ]   |
|                                  [  organik — border-radius  ]   |
|  Sub-headline / value prop       [  asimetris, overflow:     ]   |
|  (Plus Jakarta Sans, body-lg)    [  hidden, slight shadow    ]   |
|                                  [                           ]   |
|  [🟠 Pesan via WhatsApp]  [Lihat Menu]                         |
|                                                                  |
|  ── 20+ Acara · 2 Kota · 100% Halal ──                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Grid:** `display: grid; grid-template-columns: 55fr 45fr; gap: var(--space-8); align-items: center;`

### Layout Mobile (<768px)
```
+----------------------------------+
| NAVBAR — hamburger               |
+----------------------------------+
|                                  |
|  [Badge Halal & Higienis]        |
|                                  |
|  Headline Besar                  |
|  (Playfair Display, display-lg)  |
|                                  |
|  Sub-headline                    |
|                                  |
|  [ Foto Organik — full width ]   |
|  [ border-radius organik     ]   |
|                                  |
|  [🟠 Pesan via WhatsApp]        |
|  Full width button               |
|                                  |
|  [Lihat Menu Lengkap]            |
|  Full width, secondary style     |
|                                  |
|  20+ Acara · 2 Kota · 100% Halal|
+----------------------------------+
```

### Spesifikasi Elemen Hero

**Background Section:**
- Warna: `var(--color-neutral-100)` (#FAF3E0)
- Tekstur subtle: noise SVG pattern dengan opacity 0.03 (tidak boleh terlihat nyata, hanya menambah kedalaman)
- TIDAK ADA background image, gradient kuat, atau video

**Foto Frame Organik:**
```css
.hero__image-frame {
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  /* Ukuran: 480x520px desktop, full-width mobile */
}
```
- Foto: prasmanan atau tumpeng yang menggugah selera (dummy bebas royalti)
- Tidak boleh menggunakan foto dengan latar blurred/bokeh berlebihan
- Tidak boleh menggunakan foto dengan watermark

**Badge "Halal & Higienis":**
```css
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 6px 16px;
  background: var(--color-primary-100);
  color: var(--color-primary-700);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: 500;
  border: 1px solid var(--color-primary-300);
  margin-bottom: var(--space-3);
}
```

**Headline Hero:**
- Font: `var(--font-display)`, weight 800
- Warna: `var(--color-neutral-900)`
- Desktop: `var(--text-display-2xl)` (72px)
- Tablet: `var(--text-display-xl)` (56px)
- Mobile: `var(--text-display-lg)` (40px)
- Contoh copy: *"Setiap Momen Spesial, Layak Dapat Sajian Terbaik"*

**Sub-headline:**
- Font: `var(--font-body)`, weight 400
- Warna: `var(--color-neutral-700)`
- Size: `var(--text-body-lg)` (18px)
- Max-width: 480px

**Tombol CTA Primary (WhatsApp):**
```css
.btn-primary-wa {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 16px 32px;
  background: var(--color-accent-500);
  color: var(--color-white);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background var(--duration-base) var(--ease-out),
              transform var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
  box-shadow: 0 4px 16px rgba(196, 98, 45, 0.35);
  text-decoration: none;
}
.btn-primary-wa:hover {
  background: var(--color-accent-700);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(196, 98, 45, 0.45);
}
.btn-primary-wa:active {
  transform: translateY(0);
}
```

**Tombol CTA Secondary (Lihat Menu):**
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 15px 32px;
  background: transparent;
  color: var(--color-primary-700);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  font-weight: 600;
  border: 2px solid var(--color-primary-500);
  cursor: pointer;
  transition: background var(--duration-base) var(--ease-out),
              color var(--duration-base) var(--ease-out);
  text-decoration: none;
}
.btn-secondary:hover {
  background: var(--color-primary-700);
  color: var(--color-white);
  border-color: var(--color-primary-700);
}
```

**Stats Bar (bawah hero):**
- 3–4 angka kecil: `20+ Acara · 2 Kota · 100% Halal · 4 Format`
- Font: body weight 500, warna neutral-500
- Separator: karakter `·` atau garis tipis
- Tidak perlu card atau box — cukup teks inline dengan separator

### Animasi Hero (Scroll & Load):
- Headline: `fadeInUp` — masuk dari 30px bawah, opacity 0→1, durasi 600ms, delay 0ms
- Sub-headline: `fadeInUp` — durasi 600ms, delay 150ms
- Tombol: `fadeInUp` — durasi 500ms, delay 300ms
- Foto: `fadeIn` + `scaleIn` (scale 0.95→1) — durasi 700ms, delay 200ms
- Stats bar: `fadeIn` — durasi 400ms, delay 500ms

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

---

## 6. SPESIFIKASI SECTION LAINNYA

### Section Tentang Kami
- Background: `var(--color-neutral-50)` (sedikit lebih putih dari hero)
- Padding: `var(--space-12)` desktop, `var(--space-8)` tablet, `var(--space-6)` mobile
- Layout: Teks singkat + 4 kolom keunggulan
- 4 keunggulan: Fleksibel, Halal & Higienis, Tepat Waktu, Harga Kompetitif
- Setiap kartu keunggulan:
  - Ikon SVG 40px, warna `var(--color-primary-500)`
  - Judul: heading-sm, Playfair Display
  - Deskripsi: body-sm, Plus Jakarta Sans
  - Background card: `var(--color-white)`, border `var(--color-neutral-200)`, shadow-sm
  - Border-radius: `var(--radius-lg)`

### Section Layanan & Menu
- Background: `var(--color-neutral-100)`
- Tab navigation: 4 tab (Prasmanan, Nasi Kotak, Tumpengan, Gubukan)
- Tab aktif: background `var(--color-primary-700)`, teks putih, border-radius full
- Konten tab:
  - Kiri: deskripsi layanan + foto
  - Kanan: daftar menu dengan harga di kanan (Flexbox space-between)
  - Bawah: tombol WA per layanan
- Harga: warna `var(--color-accent-500)`, font weight 600
- Separator antar menu item: border-bottom `1px solid var(--color-neutral-200)`

### Section Galeri
- Background: `var(--color-neutral-50)`
- Grid: 3 kolom desktop, 2 kolom tablet, 1 kolom mobile
- Gap: `var(--space-3)`
- Setiap foto:
  - Aspect ratio: 4/3
  - Border-radius: `var(--radius-md)`
  - Hover: overlay `rgba(45,80,22,0.4)` dengan teks label (misal: "Prasmanan Syukuran")
  - Transition: overlay opacity 0→1, durasi `var(--duration-slow)`
- Total foto: 8 (dummy placeholder)

### Section Testimoni
- Background: `var(--color-neutral-100)` dengan accent strip hijau gelap di tepi atas (4px solid `var(--color-primary-700)`)
- Layout: Grid 3 kolom desktop, 2 kolom tablet, 1 kolom mobile
- Setiap card testimoni:
  - Background: `var(--color-white)`
  - Border: `1px solid var(--color-neutral-200)`
  - Border-radius: `var(--radius-lg)`
  - Padding: `var(--space-4)`
  - Shadow: `var(--shadow-sm)`
  - Elemen: bintang 5 (⭐ warna amber `#F59E0B`), teks testimoni, nama + jenis acara + kota
  - Tanda kutip dekoratif: karakter `"` besar, warna `var(--color-primary-100)`, font-size 80px, posisi absolute

### Section Area Layanan
- Background: `var(--color-primary-900)` (hijau sangat gelap)
- Teks: putih
- Layout: teks kiri, visual kanan (bisa peta sederhana SVG atau ilustrasi ikon kota)
- Sebutkan: Sidoarjo (kota utama/pusat dapur) + Surabaya (area layanan)
- Sub-teks: jangkauan kecamatan atau keterangan umum

### Section FAQ
- Background: `var(--color-neutral-50)`
- 6 pertanyaan accordion
- Border setiap item: `1px solid var(--color-neutral-200)`
- Border-radius: `var(--radius-md)`
- Header accordion (pertanyaan): Plus Jakarta Sans weight 600, warna neutral-900
- Ikon: chevron yang rotate 180° saat terbuka
- Konten (jawaban): Plus Jakarta Sans weight 400, warna neutral-700
- Animasi buka/tutup: `max-height` transition, durasi `var(--duration-slow)`, ease-in-out

### Section CTA Final
- Background: `var(--color-accent-100)` (#FDDDC8) — oranye sangat muda, hangat
- Border-top: `4px solid var(--color-accent-500)`
- Teks: centered, headline Playfair Display, deskripsi Plus Jakarta Sans
- Tombol: ukuran lebih besar dari tombol hero (padding 20px 48px)
- Elemen dekoratif: daun atau motif sederhana SVG di sudut, warna `var(--color-accent-300)` dengan opacity 0.3

### Footer
- Background: `var(--color-neutral-900)` (#1C1009)
- Teks: `var(--color-neutral-200)` untuk body, `var(--color-white)` untuk heading
- Layout: 3 kolom desktop (brand + navigasi + kontak), 1 kolom mobile
- Kolom 1 — Brand: wordmark, tagline, deskripsi singkat
- Kolom 2 — Navigasi: link ke semua section
- Kolom 3 — Kontak: WA, Instagram, Email, Alamat (dengan ikon)
- Divider: `1px solid rgba(255,255,255,0.1)`
- Copyright bar: bawah divider, teks kecil, warna neutral-500

---

## 7. KOMPONEN UI — SPESIFIKASI LENGKAP

### Button System

**Primary WA Button** — lihat spesifikasi detail di Section 5 (Hero)

**Secondary Button** — lihat spesifikasi detail di Section 5 (Hero)

**Ghost Button (untuk navigasi footer, dll):**
```css
.btn-ghost {
  padding: 10px 24px;
  background: transparent;
  color: var(--color-neutral-200);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: 500;
  cursor: pointer;
  transition: border-color var(--duration-base), color var(--duration-base);
  text-decoration: none;
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.5);
  color: var(--color-white);
}
```

### Card System

**Service Card (kartu keunggulan):**
```css
.card-feature {
  background: var(--color-white);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);      /* 20px */
  padding: var(--space-4);              /* 32px */
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
}
.card-feature:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

**Testimoni Card:**
```css
.card-testimoni {
  background: var(--color-white);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}
/* Tanda kutip dekoratif */
.card-testimoni::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 16px;
  font-family: var(--font-display);
  font-size: 80px;
  color: var(--color-primary-100);
  line-height: 1;
  z-index: 0;
  pointer-events: none;
}
```

### Floating WhatsApp Button
```css
.floating-wa {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: var(--color-wa-green);    /* #25D366 */
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-wa);
  z-index: 1000;
  text-decoration: none;
  animation: wa-pulse 2s ease-in-out infinite;
  transition: background var(--duration-base), transform var(--duration-fast);
}
.floating-wa:hover {
  background: var(--color-wa-green-dark);
  animation: none;
  transform: scale(1.1);
}
@keyframes wa-pulse {
  0%, 100% { box-shadow: 0 4px 16px rgba(37,211,102,0.4); }
  50%       { box-shadow: 0 4px 28px rgba(37,211,102,0.65); }
}

@media (min-width: 1024px) {
  .floating-wa {
    width: 64px;
    height: 64px;
  }
}
```

### Navbar
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 16px 0;
  background: transparent;
  transition: background var(--duration-slow), box-shadow var(--duration-slow);
}
.navbar.scrolled {
  background: var(--color-neutral-50);
  box-shadow: 0 2px 20px rgba(28,16,9,0.08);
}
```

---

## 8. IKONOGRAFI

- **Library:** Phosphor Icons (via CDN atau SVG inline) — style: **Regular** (outline)
  - CDN: `https://unpkg.com/phosphor-icons@1.4.2/src/css/icons.css` (atau gunakan SVG inline untuk performa lebih baik)
- **Alternatif jika Phosphor tidak tersedia:** Buat SVG inline sederhana (tidak boleh gunakan emoji sebagai pengganti ikon UI)

**Ukuran Standar:**
| Konteks | Ukuran |
|---------|--------|
| Inline dalam teks/label | 16px |
| Tombol CTA | 20px |
| Standalone (card feature) | 40px |
| Floating WA button | 28px |

**Warna Ikon:**
- Ikon dalam card fitur: `var(--color-primary-500)`
- Ikon di tombol: inherit dari teks tombol (putih atau primary)
- Ikon di footer: `var(--color-neutral-300)`
- Ikon WA: putih (#FFFFFF) di atas background hijau WA

**Style:** Selalu outline/regular — JANGAN gunakan filled/solid kecuali untuk ikon bintang testimoni

---

## 9. IMAGERY & FOTO

### Panduan Foto Dummy (Dari Unsplash/Pexels)

**Keywords pencarian yang direkomendasikan:**
- Hero: `"prasmanan wedding Java"`, `"nasi tumpeng Indonesia"`, `"Indonesian catering buffet warm"`
- Layanan: `"nasi kotak Indonesia"`, `"catering food box"`, `"Indonesian food photography"`
- Galeri: `"catering event Indonesia"`, `"syukuran food"`, `"buffet food warm tones"`

**Kriteria foto yang boleh dipakai:**
- ✅ Tone warna hangat (oranye, kuning, coklat, hijau alami)
- ✅ Foto makanan dengan pencahayaan natural atau warm tungsten
- ✅ Foto suasana acara (orang makan, prasmanan setup)
- ✅ Resolusi minimal 1200px di sisi terpendek
- ✅ Bebas royalti (Unsplash license atau Pexels license)

**Foto yang DILARANG:**
- ❌ Foto dengan watermark apapun
- ❌ Foto dengan latar belakang putih steril (terkesan produk e-commerce)
- ❌ Foto makanan Barat/Eropa yang tidak relevan
- ❌ Foto dengan filter Instagram berlebihan (oversaturated, terlalu gelap)
- ❌ Foto resolusi rendah (<800px)

### Format & Optimasi
- Format final: **WebP** (gunakan Squoosh untuk konversi)
- Fallback: JPEG untuk browser yang tidak support WebP
- Kompresi: kualitas 80–85 untuk foto, 90 untuk foto hero
- Hero image: **tidak lazy load** (LCP) — sisanya wajib `loading="lazy"`
- Semua `<img>` wajib punya atribut `alt` yang deskriptif dalam Bahasa Indonesia

---

## 10. MOTION & ANIMASI

### Prinsip Animasi
- **Purposeful** — setiap animasi ada tujuan: menarik perhatian, menunjukkan hierarki, atau memperhalus transisi
- **Performant** — HANYA gunakan `transform` dan `opacity`. JANGAN animate `height`, `width`, `margin`, `padding`, `top`, `left` (kecuali accordion dengan `max-height`)
- **Tidak mengganggu** — pengguna yang sedang membaca tidak boleh terganggu animasi

### Scroll-Triggered Animation (Intersection Observer)

**Kelas animasi yang perlu dibuat:**
```css
/* Elemen default sebelum terlihat */
.anim-fadeup {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-enter) var(--ease-out),
              transform var(--duration-enter) var(--ease-out);
}
/* Tambahkan kelas ini via JS saat element masuk viewport */
.anim-fadeup.is-visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger untuk grid/list */
.anim-fadeup:nth-child(2) { transition-delay: 100ms; }
.anim-fadeup:nth-child(3) { transition-delay: 200ms; }
.anim-fadeup:nth-child(4) { transition-delay: 300ms; }
```

**JavaScript Intersection Observer:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Animasi hanya sekali
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.anim-fadeup').forEach(el => observer.observe(el));
```

### Tabel Animasi per Komponen
| Komponen | Trigger | Animasi | Durasi | Delay |
|----------|---------|---------|--------|-------|
| Hero headline | Page load | fadeInUp | 600ms | 0ms |
| Hero sub-headline | Page load | fadeInUp | 600ms | 150ms |
| Hero CTA buttons | Page load | fadeInUp | 500ms | 300ms |
| Hero foto | Page load | fadeIn + scale(0.95→1) | 700ms | 200ms |
| Feature cards | Scroll into view | fadeInUp stagger | 400ms | 0/100/200/300ms |
| Testimoni cards | Scroll into view | fadeInUp stagger | 400ms | 0/100/200ms |
| Section headlines | Scroll into view | fadeInUp | 500ms | 0ms |
| Gallery items | Scroll into view | fadeIn stagger | 350ms | 0/50/100ms... |
| Navbar background | Scroll >80px | transition background | 250ms | — |
| Floating WA | Always | pulse (infinite) | 2s | — |
| Button hover | Hover | translateY(-2px) + shadow | 150ms | — |
| Card hover | Hover | translateY(-4px) + shadow | 250ms | — |
| Tab switch | Click | fade content | 200ms | — |
| FAQ accordion | Click | max-height 0→auto | 400ms | — |

---

## 11. RESPONSIVITAS — DETAIL LENGKAP

### Penyesuaian Per Breakpoint

| Elemen | Mobile (<768px) | Tablet (768–1023px) | Desktop (≥1024px) |
|--------|-----------------|---------------------|-------------------|
| Hero layout | 1 kolom, foto di bawah teks | 1 kolom, foto lebih besar | 2 kolom asimetris 55/45 |
| Hero headline | display-lg (40px) | display-xl (56px) | display-2xl (72px) |
| Section padding | space-6 (48px) atas-bawah | space-8 (64px) | space-12 (96px) |
| Feature cards grid | 1 kolom | 2 kolom | 4 kolom |
| Galeri grid | 1 kolom | 2 kolom | 3 kolom |
| Testimoni grid | 1 kolom | 2 kolom | 3 kolom |
| Footer layout | 1 kolom stacked | 2 kolom | 3 kolom |
| Navbar | Hamburger icon | Hamburger atau hybrid | Full navigation |
| Floating WA | 56x56px, bottom:16px right:16px | 56x56px | 64x64px |
| Tab layanan | Scroll horizontal (overflow-x: auto) | 2x2 grid atau scroll | 4 tab sejajar |
| Tombol CTA | Full width (width: 100%) | Auto width | Auto width |
| Container padding | 20px | 40px | 80px |

### Mobile-Specific Rules
- Minimum font size: 14px (body-sm), tidak ada yang lebih kecil
- Minimum touch target: 44x44px untuk semua elemen interaktif
- Hamburger menu: area tap minimal 44x44px
- Tab layanan: scroll horizontal dengan `scroll-snap-type: x mandatory`
- Tidak ada elemen yang overflow horizontal
- Floating WA tidak boleh menutupi konten CTA utama di bawah halaman

---

## 12. CHECKLIST DESAIN SEBELUM HANDOFF

### Warna & Visual
- [ ] Semua warna menggunakan CSS custom properties dari `tokens.css`
- [ ] Tidak ada hardcoded hex color di file CSS manapun
- [ ] Tidak ada warna di luar palet yang didefinisikan
- [ ] Tidak ada glassmorphism / backdrop-filter decorative
- [ ] Tidak ada gradient kuat (kecuali yang diizinkan di atas)
- [ ] Kontras teks vs background ≥ 4.5:1 (WCAG AA)

### Tipografi
- [ ] Semua font adalah Playfair Display atau Plus Jakarta Sans
- [ ] Tidak ada Inter, Roboto, Arial, atau system-ui
- [ ] Semua ukuran font mengikuti type scale yang didefinisikan
- [ ] Tidak ada font-size di bawah 12px
- [ ] Line-height body text ≥ 1.6

### Layout & Spacing
- [ ] Semua spacing menggunakan CSS custom properties
- [ ] Mobile layout tidak ada overflow horizontal
- [ ] Container max-width terpasang benar
- [ ] Semua section punya padding atas-bawah yang konsisten

### Komponen & Interaksi
- [ ] Semua state interaktif terdefinisi: hover, active, focus, disabled
- [ ] Focus state terlihat jelas (tidak hilang) — penting untuk aksesibilitas
- [ ] Animasi menggunakan `transform` dan `opacity` saja
- [ ] Durasi animasi tidak melebihi 600ms
- [ ] Floating WA button berfungsi dan tidak overlap elemen penting

### Mobile
- [ ] Semua touch target minimal 44x44px
- [ ] Font terbaca di layar 375px
- [ ] Hamburger menu berfungsi
- [ ] Tab layanan bisa di-scroll horizontal di mobile
- [ ] Semua CTA button full-width di mobile

### Aksesibilitas
- [ ] Semua `<img>` punya `alt` yang deskriptif
- [ ] Heading hierarchy benar: H1 → H2 → H3
- [ ] Semua elemen interaktif accessible via keyboard
- [ ] Warna tidak menjadi satu-satunya cara menyampaikan informasi
- [ ] ARIA labels pada ikon-ikon tanpa teks

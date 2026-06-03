# Product Requirement Document (PRD)
## Berkah Rasa Catering — Landing Page

---

### 1. Overview Proyek
- **Nama Klien:** Berkah Rasa Catering
- **Industri:** Food & Beverage — Jasa Katering
- **Produk/Layanan Utama:** Katering umum (Prasmanan, Nasi Kotak, Tumpengan, Gubukan) untuk wilayah Sidoarjo & Surabaya
- **Tujuan Landing Page:** Mengonversi pengunjung menjadi calon pelanggan yang langsung menghubungi via WhatsApp
- **Target Selesai:** 12 hari kerja dari kickoff
- **Bahasa:** Indonesia

---

### 2. Tujuan Bisnis

- **Primary Goal:** Meningkatkan volume inquiry/pemesanan melalui klik tombol WhatsApp
- **Secondary Goals:**
  - Membangun kredibilitas dan kepercayaan sebagai katering lokal yang higienis & halal
  - Memperkenalkan seluruh pilihan layanan (4 format sajian) kepada audiens baru
  - Menampilkan portofolio & keunggulan untuk mengurangi keraguan calon pelanggan

- **KPI Sukses:**
  - CTR tombol WhatsApp: >8% dari total pengunjung
  - Bounce rate: <60%
  - Waktu rata-rata di halaman: >1 menit 30 detik
  - Setidaknya 5 inquiry baru per minggu dari landing page

---

### 3. Target Audiens

- **Demografis:**
  - Usia: 28–35 tahun
  - Jenis Kelamin: Dominan perempuan (ibu rumah tangga, istri yang merencanakan acara)
  - Lokasi: Sidoarjo & Surabaya
  - Perangkat: Mayoritas mobile (smartphone Android)

- **Psikografis:**
  - Merencanakan acara keluarga (syukuran, khitanan, ulang tahun, peresmian)
  - Menghargai kepraktisan — tidak ingin repot masak sendiri
  - Cukup selektif soal higienitas dan kehalalan makanan
  - Sensitif terhadap harga, tapi mau bayar lebih untuk kualitas yang terbukti
  - Pengambil keputusan berdasarkan rekomendasi dan kepercayaan

- **Pain Points:**
  - Khawatir katering tidak tepat waktu di hari acara
  - Ragu soal kehigienisan dapur dan kehalalan bahan
  - Bingung memilih format sajian yang sesuai budget dan skala acara
  - Tidak tahu harus pesan berapa porsi untuk jumlah tamu tertentu

- **Trigger Keputusan:**
  - Melihat tampilan makanan yang menggugah selera
  - Harga transparan yang masuk akal
  - Ada pilihan menu yang beragam
  - Mudah menghubungi via WhatsApp (tidak perlu isi form panjang)

---

### 4. Scope Pekerjaan

#### Dalam Scope:
- [x] Desain & development landing page satu halaman (single page)
- [x] Semua section sesuai struktur halaman di bawah
- [x] Responsif: Mobile, Tablet, Desktop
- [x] Tombol CTA WhatsApp (floating + per-section)
- [x] Tampilan menu dengan harga (per kategori layanan)
- [x] Dummy foto sebagai placeholder (dari sumber bebas royalti)
- [x] Animasi scroll-triggered yang subtle
- [x] SEO dasar (meta title, meta description, OG image)
- [x] HTML/CSS/JS vanilla (statis, tanpa framework)

#### Di Luar Scope:
- [ ] Backend / sistem pemesanan online
- [ ] Multi-bahasa (hanya Bahasa Indonesia)
- [ ] Integrasi payment gateway
- [ ] Blog atau halaman tambahan
- [ ] Admin panel / CMS
- [ ] Versi Progressive Web App (PWA)

---

### 5. Struktur Halaman

| No | Section             | Tujuan                                                         | Prioritas |
|----|---------------------|----------------------------------------------------------------|-----------|
| 1  | Navbar              | Navigasi halaman + tombol WA sticky                           | High      |
| 2  | Hero                | First impression kuat, CTA utama klik WA                      | High      |
| 3  | Tentang Kami        | Bangun kepercayaan: story singkat + 4 keunggulan utama        | High      |
| 4  | Layanan & Menu      | Tampilkan 4 format layanan + detail menu + harga              | High      |
| 5  | Galeri / Portofolio | Bukti visual kualitas sajian dan dokumentasi acara            | Medium    |
| 6  | Testimoni           | Social proof dari pelanggan (dummy untuk awal)                | Medium    |
| 7  | Area Layanan        | Informasi cakupan wilayah Sidoarjo & Surabaya                 | Medium    |
| 8  | FAQ                 | Jawab kekhawatiran umum sebelum pesan                         | Low       |
| 9  | CTA Final           | Dorong konversi terakhir sebelum footer                       | High      |
| 10 | Footer              | Kontak lengkap, alamat, social media, copyright               | Medium    |
| +  | Floating WA Button  | Tombol WA yang selalu terlihat di semua posisi scroll         | High      |

---

### 6. Konten yang Dibutuhkan

**Copywriting:**
- Headline Hero + Subheadline
- Tagline brand & deskripsi singkat "Tentang Kami"
- Deskripsi per layanan (Prasmanan, Nasi Kotak, Tumpengan, Gubukan)
- List menu lengkap per kategori (sudah tersedia dari brief)
- Informasi harga per layanan (placeholder range harga, konfirmasi ke klien)
- 4–6 dummy testimoni pelanggan
- Teks FAQ (5–7 pertanyaan umum)
- Copy CTA: tombol WA, CTA section, footer

**Aset Visual:**
- Foto hero: prasmanan/tumpeng yang menggugah selera (dummy dari Unsplash/Pexels)
- Foto per layanan: 1 gambar representatif per format (4 total)
- Foto galeri: 6–8 foto dummy (makanan & suasana acara)
- Logo Berkah Rasa (jika ada — jika tidak, gunakan teks styled)
- Ikon SVG: Halal, Tepat Waktu, Harga Transparan, Higienis
- Favicon

**Data/Statistik untuk Social Proof:**
- 20+ Acara Sukses
- Melayani Sidoarjo & Surabaya
- 100% Bahan Halal Bersertifikat
- (tambahkan angka lain jika klien konfirmasi)

---

### 7. Integrasi & Teknikal

- **Framework:** HTML5 / CSS3 / Vanilla JavaScript
- **Build Tool:** Tidak diperlukan (statis)
- **Form/CTA terhubung ke:** WhatsApp API (`https://wa.me/6281355559999`)
- **Analytics:** Google Analytics 4 (pasang GA4 tracking code — konfirmasi ID dengan klien)
- **Hosting:** Sudah disiapkan klien (tanyakan provider untuk konfigurasi deployment)
- **Font Loading:** Google Fonts dengan `font-display: swap`
- **Image Format:** WebP dengan fallback JPG/PNG
- **Tidak diperlukan:** Database, server-side scripting, CMS

---

### 8. Constraint & Catatan Khusus

- Belum ada foto dokumentasi asli — semua visual menggunakan placeholder bebas royalti (Unsplash/Pexels) dengan label `[PLACEHOLDER]` untuk nanti diganti klien
- Harga bersifat estimasi range — klien perlu konfirmasi sebelum launch
- Logo belum ada — gunakan wordmark teks bergaya sebagai fallback
- 20 acara sukses adalah angka portofolio yang harus ditampilkan prominently sebagai social proof utama
- Tidak boleh ada elemen glassmorphism atau gradasi berlebihan
- Semua sentuhan visual harus konsisten dengan palet earthy (hijau tua, terracotta/oranye, krem)
- Prioritas mobile-first — mayoritas pengunjung akan akses lewat smartphone
- Tombol WhatsApp harus terlihat jelas di semua breakpoint tanpa mengganggu UX

const CONTENT = {
  brand: {
    name: "Berkah Rasa Catering",
    shortName: "Berkah Rasa",
    tagline: "Solusi Kuliner Terbaik untuk Setiap Momen Anda",
    phoneDisplay: "0813-5555-9999",
    phone: "6281355559999",
    whatsappURL: "https://wa.me/6281355559999",
    instagram: "@berkahrasa.catering",
    email: "info@berkahrasacatering.com",
    address: "Jl. Raya Pondok Jati Blok AJ-10, Sidoarjo, Jawa Timur",
    serviceAreas: ["Sidoarjo", "Surabaya"],
    portfolio: "20+ Acara Sukses"
  },
  nav: [
    { label: "Layanan", href: "#layanan" },
    { label: "Menu", href: "#layanan" },
    { label: "Galeri", href: "#galeri" },
    { label: "Tentang", href: "#tentang" },
    { label: "Kontak", href: "#kontak" }
  ],
  hero: {
    badge: "Halal & Higienis - Sidoarjo & Surabaya",
    headline: "Setiap Momen Spesial, Layak Dapat Sajian Terbaik",
    subheadline: "Berkah Rasa Catering membantu Anda menyiapkan prasmanan, nasi kotak, tumpeng, dan gubukan yang hangat, rapi, halal, dan tepat waktu.",
    ctaPrimary: "Pesan via WhatsApp",
    ctaSecondary: "Lihat Menu",
    image: "./images/hero/hero-catering.jpg",
    imageAlt: "Sajian prasmanan hangat untuk acara keluarga"
  },
  stats: [
    { number: "20+", label: "Acara Sukses" },
    { number: "2", label: "Kota Layanan" },
    { number: "100%", label: "Halal" },
    { number: "4", label: "Format Sajian" }
  ],
  about: {
    kicker: "Tentang Kami",
    title: "Dapur hangat untuk acara yang ingin dikenang baik.",
    paragraphs: [
      "Berkah Rasa Catering lahir dari kebutuhan keluarga dan panitia acara yang ingin sajian enak tanpa repot mengurus dapur, belanja, dan distribusi makanan di hari penting.",
      "Kami melayani acara keluarga, syukuran, kantor, pengajian, dan perayaan kecil hingga menengah di Sidoarjo dan Surabaya dengan pendekatan yang rapi, komunikatif, dan mudah disesuaikan.",
      "Setiap pesanan disiapkan dengan bahan halal, proses higienis, serta jadwal pengantaran yang direncanakan agar tuan rumah bisa fokus menyambut tamu."
    ],
    features: [
      { title: "Fleksibel", text: "Pilihan porsi, menu, dan format sajian bisa disesuaikan dengan acara serta anggaran.", icon: "leaf" },
      { title: "Halal & Higienis", text: "Bahan dipilih dengan cermat dan proses dapur dijaga bersih dari persiapan sampai pengiriman.", icon: "shield" },
      { title: "Tepat Waktu", text: "Jadwal masak dan antar dibuat jelas supaya makanan tiba saat acara siap dimulai.", icon: "clock" },
      { title: "Harga Kompetitif", text: "Range harga transparan, mudah dibandingkan, dan tetap menjaga kualitas rasa.", icon: "tag" }
    ]
  },
  services: {
    kicker: "Layanan & Menu",
    title: "Pilih format sajian yang paling pas untuk acara Anda.",
    lead: "Dari acara keluarga sederhana sampai jamuan kantor, semua menu bisa dibicarakan langsung via WhatsApp.",
    items: [
      {
        id: "prasmanan",
        name: "Prasmanan",
        description: "Paket buffet lengkap untuk tamu yang datang bertahap, cocok untuk syukuran, pernikahan rumahan, dan acara kantor.",
        image: "./images/services/prasmanan.jpg",
        imageAlt: "Meja prasmanan dengan lauk dan nasi hangat",
        waText: "Halo, saya ingin menanyakan paket Prasmanan Berkah Rasa Catering.",
        menu: [
          { name: "Nasi putih, ayam bumbu rujak, capcay, sambal, kerupuk", price: "Mulai 35rb/porsi" },
          { name: "Nasi putih, daging teriyaki, sop, perkedel, sambal", price: "Mulai 45rb/porsi" },
          { name: "Paket lengkap dengan buah dan air mineral", price: "Mulai 55rb/porsi" }
        ]
      },
      {
        id: "nasi-kotak",
        name: "Nasi Kotak",
        description: "Solusi praktis untuk rapat, pengajian, ulang tahun, dan acara dengan distribusi makanan cepat.",
        image: "./images/services/nasi-kotak.jpg",
        imageAlt: "Paket nasi kotak siap kirim untuk acara",
        waText: "Halo, saya ingin menanyakan paket Nasi Kotak Berkah Rasa Catering.",
        menu: [
          { name: "Nasi, ayam goreng, mie, sayur, sambal", price: "Mulai 25rb/kotak" },
          { name: "Nasi, ayam bakar, urap, telur, kerupuk", price: "Mulai 30rb/kotak" },
          { name: "Nasi, daging, capcay, buah, air mineral", price: "Mulai 40rb/kotak" }
        ]
      },
      {
        id: "tumpengan",
        name: "Tumpengan",
        description: "Sajian simbolis untuk syukuran, ulang tahun, peresmian, dan momen keluarga yang hangat.",
        image: "./images/services/tumpengan.jpg",
        imageAlt: "Nasi tumpeng dengan lauk lengkap",
        waText: "Halo, saya ingin menanyakan paket Tumpengan Berkah Rasa Catering.",
        menu: [
          { name: "Tumpeng mini 10-15 porsi dengan lauk standar", price: "Mulai 350rb" },
          { name: "Tumpeng sedang 20-30 porsi dengan ayam dan urap", price: "Mulai 650rb" },
          { name: "Tumpeng besar 40-50 porsi dengan lauk premium", price: "Mulai 1,1jt" }
        ]
      },
      {
        id: "gubukan",
        name: "Gubukan",
        description: "Pilihan stall makanan untuk menambah variasi acara, dari bakso sampai jajanan tradisional.",
        image: "./images/services/gubukan.jpg",
        imageAlt: "Gubukan makanan untuk acara keluarga",
        waText: "Halo, saya ingin menanyakan paket Gubukan Berkah Rasa Catering.",
        menu: [
          { name: "Bakso, soto, atau rawon mini", price: "Mulai 18rb/porsi" },
          { name: "Siomay, batagor, atau jajanan pasar", price: "Mulai 15rb/porsi" },
          { name: "Minuman hangat atau es tradisional", price: "Mulai 10rb/porsi" }
        ]
      }
    ]
  },
  gallery: {
    kicker: "Galeri",
    title: "Beberapa suasana sajian yang bisa jadi inspirasi acara.",
    lead: "Foto dummy bebas royalti untuk tahap awal, siap diganti dengan dokumentasi asli klien.",
    items: [
      { label: "Prasmanan Syukuran", image: "./images/gallery/gallery-01.jpg", alt: "Prasmanan untuk acara syukuran" },
      { label: "Tumpeng Keluarga", image: "./images/gallery/gallery-02.jpg", alt: "Tumpeng untuk acara keluarga" },
      { label: "Nasi Kotak Rapat", image: "./images/gallery/gallery-03.jpg", alt: "Nasi kotak untuk rapat kantor" },
      { label: "Gubukan Acara", image: "./images/gallery/gallery-04.jpg", alt: "Gubukan makanan acara" },
      { label: "Lauk Tradisional", image: "./images/gallery/gallery-05.jpg", alt: "Lauk tradisional Indonesia" },
      { label: "Meja Sajian", image: "./images/gallery/gallery-06.jpg", alt: "Meja sajian katering" },
      { label: "Paket Keluarga", image: "./images/gallery/gallery-07.jpg", alt: "Paket makanan keluarga" },
      { label: "Hidangan Hangat", image: "./images/gallery/gallery-08.jpg", alt: "Hidangan hangat siap santap" }
    ]
  },
  testimonials: {
    kicker: "Testimoni",
    title: "Dipercaya untuk momen keluarga dan acara lokal.",
    lead: "Testimoni dummy untuk kebutuhan presentasi awal landing page.",
    items: [
      { name: "Ibu Rina", event: "Syukuran rumah", city: "Sidoarjo", quote: "Makanannya datang tepat waktu, lauk masih hangat, dan tamu banyak yang tanya pesan di mana." },
      { name: "Dewi Anggraini", event: "Ulang tahun anak", city: "Surabaya", quote: "Nasi kotaknya rapi dan porsinya pas. Komunikasi sebelum acara juga enak sekali." },
      { name: "Pak Haris", event: "Rapat kantor", city: "Sidoarjo", quote: "Menu prasmanan lengkap, timnya sigap, dan area sajian setelah acara tetap bersih." },
      { name: "Mbak Laila", event: "Pengajian keluarga", city: "Surabaya", quote: "Tumpengnya cantik, rasanya cocok untuk orang tua dan anak-anak." },
      { name: "Ibu Nanik", event: "Khitanan", city: "Sidoarjo", quote: "Harga jelas dari awal, jadi kami bisa menyesuaikan paket tanpa bingung." },
      { name: "Andi Pratama", event: "Peresmian toko", city: "Surabaya", quote: "Gubukannya jadi favorit tamu. Pesanan tambahan juga dibantu dengan cepat." }
    ]
  },
  coverage: {
    kicker: "Area Layanan",
    title: "Melayani Sidoarjo dan Surabaya dari dapur yang dekat.",
    lead: "Kami mengatur jadwal produksi dan pengiriman agar sajian tiba dalam kondisi rapi, hangat, dan siap disajikan.",
    areas: [
      { city: "Sidoarjo", text: "Area utama layanan, termasuk pusat kota, Buduran, Candi, Gedangan, Waru, Taman, dan sekitarnya." },
      { city: "Surabaya", text: "Melayani Surabaya Selatan, Timur, Barat, Pusat, dan area lain sesuai jadwal serta jumlah pesanan." }
    ]
  },
  faq: {
    kicker: "FAQ",
    title: "Pertanyaan yang sering ditanyakan sebelum pesan.",
    lead: "Jawaban singkat untuk membantu Anda memperkirakan kebutuhan acara.",
    items: [
      { question: "Minimal pesan berapa porsi?", answer: "Untuk nasi kotak mulai dari 20 kotak. Prasmanan, tumpeng, dan gubukan menyesuaikan jenis menu serta lokasi acara." },
      { question: "Apakah menu bisa disesuaikan?", answer: "Bisa. Anda dapat menyesuaikan lauk, level harga, dan format sajian sesuai jumlah tamu serta kebutuhan acara." },
      { question: "Apakah sudah termasuk pengantaran?", answer: "Pengantaran tersedia untuk Sidoarjo dan Surabaya. Biaya pengantaran mengikuti jarak, waktu acara, dan volume pesanan." },
      { question: "Kapan sebaiknya melakukan pemesanan?", answer: "Idealnya 3-7 hari sebelum acara. Untuk acara besar, lebih nyaman jika dikonfirmasi lebih awal." },
      { question: "Apakah tersedia tester makanan?", answer: "Tester dapat dibicarakan untuk pesanan tertentu, terutama paket prasmanan atau acara dengan jumlah tamu besar." },
      { question: "Bagaimana cara pembayaran?", answer: "Pembayaran dilakukan dengan DP untuk mengunci jadwal, lalu pelunasan mengikuti kesepakatan sebelum atau pada hari acara." }
    ]
  },
  cta: {
    title: "Sudah punya tanggal acara?",
    text: "Ceritakan jumlah tamu, lokasi, dan format sajian yang Anda inginkan. Kami bantu arahkan pilihan menu yang paling masuk akal.",
    button: "Konsultasi via WhatsApp"
  },
  footer: {
    description: "Berkah Rasa Catering melayani prasmanan, nasi kotak, tumpeng, dan gubukan untuk acara keluarga serta kantor di Sidoarjo dan Surabaya.",
    copyright: "2026 Berkah Rasa Catering. Semua hak dilindungi."
  }
};

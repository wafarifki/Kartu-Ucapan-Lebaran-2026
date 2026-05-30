# Kartu Ucapan Lebaran 2026

Kartu ucapan digital **Hari Raya Idul Fitri 1447 H / 2026** yang interaktif dengan desain _asymmetrical glassmorphism_, efek 3D gyroscope, animasi partikel, dan fitur personalisasi nama dinamis melalui URL.

> تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ

## Fitur

- **Glassmorphism Design** — Desain kartu kaca modern dengan efek blur, gradient, dan border halus.
- **Animasi Partikel** — Latar belakang dipenuhi partikel bintang emas yang bergerak secara dinamis menggunakan Canvas API.
- **3D Gyroscope / Mouse Tracking** — Kartu merespons gerakan mouse (desktop) dan sensor gyroscope (mobile) untuk efek 3D yang imersif.
- **Animasi Ketupat** — Tombol buka berbentuk ketupat SVG dengan animasi eksplosi saat diklik.
- **Flash Transition** — Efek transisi flash putih yang dramatis saat membuka kartu.
- **Personalisasi via URL** — Nama pengirim dan penerima dapat dikustomisasi melalui URL parameter.
- **Generate & Copy Link** — Fitur bawaan untuk membuat link personal dan langsung menyalinnya ke clipboard.
- **Responsive Design** — Tampilan optimal di semua ukuran layar (mobile, tablet, desktop).
- **Font Kustom** — Menggunakan Google Fonts: _Poppins_ untuk teks umum dan _Amiri_ untuk teks Arab.

## Demo

**Live Preview:** [https://wafarifki.github.io/Kartu-Ucapan-Lebaran-2026/](https://wafarifki.github.io/Kartu-Ucapan-Lebaran-2026/)

### Contoh URL dengan Personalisasi

```
https://wafarifki.github.io/Kartu-Ucapan-Lebaran-2026/?dari=Wafa&kepada=Keluarga%20Bekasi
```

### Parameter URL yang Tersedia

| Parameter | Alias          | Keterangan          |
| --------- | -------------- | ------------------- |
| `dari`    | `nama`, `from` | Nama pengirim kartu |
| `kepada`  | `to`           | Nama penerima kartu |

## Struktur Folder

```
Kartu-Ucapan-Lebaran-2026/
├── index.html                  # Halaman utama
├── README.md                   # Dokumentasi
└── resources/
    ├── css/
    │   └── style.css           # Stylesheet utama (animasi, glassmorphism, dll)
    ├── js/
    │   └── main.js             # Logika utama (partikel, 3D effect, URL parser, modal)
    ├── image/
    │   └── og-image.png        # Open Graph image untuk preview di sosial media
    └── favicon/
        ├── manifest.json       # Web App Manifest
        ├── favicon.ico         # Favicon
        └── ...                 # Icon berbagai ukuran (Android, Apple, MS)
```

## Teknologi

| Teknologi           | Kegunaan                                    |
| ------------------- | ------------------------------------------- |
| **HTML5**           | Struktur halaman & SEO meta tags            |
| **CSS3**            | Animasi, glassmorphism, gradient, keyframes |
| **JavaScript**      | Logika interaksi, Canvas API, gyroscope     |
| **Tailwind CSS v4** | Utility-first styling (via CDN)             |
| **jQuery 3.7.1**    | Manipulasi DOM & event handling             |
| **Google Fonts**    | Font Poppins & Amiri                        |
| **Canvas API**      | Animasi partikel latar belakang             |

## Tata Cara Instalasi Sendiri

### 1. Clone Repository

```bash
git clone https://github.com/wafarifki/Kartu-Ucapan-Lebaran-2026.git
```

### 2. Buka di Browser

Cukup buka file `index.html` langsung di browser, atau gunakan Live Server di VS Code.

### 3. Kustomisasi Nama

Buat kartu personal dengan menambahkan parameter di URL:

```
index.html?dari=NamaMu&kepada=NamaTeman
```

### 4. Bagikan

Klik tombol **"Buat Versi Kamu"** di pojok kanan bawah, masukkan nama pengirim & penerima, lalu klik **"Buat & Salin Link"** untuk menyalin link yang sudah dipersonalisasi.

## Kustomisasi

Untuk mengubah konten atau tampilan kartu, edit file berikut:

- **Teks ucapan** → `index.html` (bagian `#glass-card`)
- **Warna & animasi** → `resources/css/style.css`
- **Logika & interaksi** → `resources/js/main.js`

## Author

**Wafa Rifqi Anafin**

- Website: [wafarifki.com](https://wafarifki.com)
- GitHub: [wafarifki](https://github.com/wafarifki)

## Lisensi

Proyek ini dirilis di bawah lisensi MIT. Anda bebas menggunakan dan memodifikasinya.

---

<p align="center">
  <i>Selamat Hari Raya Idul Fitri 1447 H 🌙</i><br>
  <i>Taqabbalallahu Minna Wa Minkum — Mohon Maaf Lahir dan Batin</i>
</p>

# Let's connect with me!
<p>
    <a href="https://wafarifki.github.io" target="_blank"><img src="https://img.shields.io/badge/Website-https://wafarifki.github.io-blue?" /></a>
    <a href="https://wafarifki.com" target="_blank"><img src="https://img.shields.io/badge/Website-https://wafarifki.com-blue?" /></a>
    <a href="https://www.linkedin.com/in/wafarifqi" target="_blank"><img src="https://img.shields.io/badge/Linkedin-WafaRifkiAnafin_-blue" /></a>
    <a href="https://facebook.com/wafarifkianafin" target="_blank"><img src="https://img.shields.io/badge/Facebook-wafarifkianafin-blue" /></a>
    <a href="https://instagram.com/wafarifki_" target="_blank"><img src="https://img.shields.io/badge/Instagram-@wafarifki_-blue" /></a>
    <a href="https://github.com/wafarifki/wafarifki/raw/main/CV_WafaRifqiAnafin.pdf" target="_blank"><img src="https://img.shields.io/badge/Download-CV_-blue" /></a>
    <a href="https://github.com/sponsors/wafarifki/card" target="_blank"><img src="https://img.shields.io/badge/Give_Me_Your_-Sponsor_To_This_Repository-pink" /></a>
</p>

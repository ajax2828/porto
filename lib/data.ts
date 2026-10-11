// Semua konten portofolio ada di sini. Ganti isinya dengan data kamu sendiri.

export const profile = {
  name: "Muhammad Ihsanzaki",
  role: "IT Specialist & Software Engineer",
  location: "Tangerang, Indonesia",
  status: "sedang terbuka untuk kolaborasi",
  tagline: "Saya merapikan sistem, infrastruktur jaringan, dan layanan IT menjadi sesuatu yang bisa diandalkan.",
  bio: "Berpengalaman dalam mengelola infrastruktur IT rumah sakit, perancangan topologi jaringan, konfigurasi server, hingga pengembangan aplikasi database dan dukungan operasional. Memiliki kombinasi keahlian teknis jaringan, backend, serta pengalaman teknis dalam pelayanan dan pemasaran digital.",
  email: "syntac98@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://twitter.com/" },
  ],
};

export const stats = [
  { value: "3+", label: "tahun pengalaman" },
  { value: "10+", label: "proyek & sistem ditangani" },
  { value: "3", label: "industri pernah dibantu" },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  summary: string;
  role: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: "simrs-core",
    index: "01",
    title: "SIMRS Core — Sistem Informasi Manajemen Rumah Sakit",
    year: "2025",
    summary:
      "Arsitektur backend dan infrastruktur terintegrasi untuk pendaftaran pasien, rekam medis elektronik (EMR), dan modul farmasi yang menangani ribuan antrean harian tanpa downtime.",
    role: "Lead Backend Engineer & Infrastructure Architect",
    stack: ["Go", "PostgreSQL", "Docker", "Redis", "HL7/FHIR"],
    href: "#",
  },
  {
    id: "gi-database",
    index: "02",
    title: "Sistem Manajemen Anggota & Kegiatan Galeri Investasi",
    year: "2024",
    summary:
      "Aplikasi database terpusat untuk mencatat, mengelola, dan memantau seluruh data anggota serta rekam kegiatan organisasi Galeri Investasi secara terstruktur.",
    role: "Database & Backend Developer",
    stack: ["MySQL", "PHP", "Laravel", "Bootstrap"],
    href: "#",
  },
  {
    id: "seminar-system",
    index: "03",
    title: "Sistem Pendaftaran & E-Sertifikat Seminar Open Account",
    year: "2024",
    summary:
      "Layanan pendaftaran peserta massal dan pencetakan e-sertifikat otomatis untuk seminar investasi skala besar dan pembukaan akun investor.",
    role: "IT Event Operations & Web Developer",
    stack: ["PHP", "MySQL", "TCPDF", "Google Sheets API"],
    href: "#",
  },
];

export const skillGroups = [
  {
    category: "Jaringan & Infrastruktur",
    items: ["Topologi Jaringan", "MikroTik / Cisco", "Server Administration", "Linux/Windows Server"],
  },
  {
    category: "Pengembangan & Database",
    items: ["MySQL", "PostgreSQL", "PHP", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Digital & Operasional",
    items: ["SEO & Marketing Analytics", "Technical Customer Support", "Troubleshooting & Maintenance"],
  },
];

export const experience = [
  {
    period: "2025 — sekarang",
    company: "Rumah Sakit Melati",
    role: "IT Staff",
    detail: "Bertanggung jawab atas operasional dan infrastruktur IT rumah sakit, meliputi perancangan ulang topologi jaringan, konfigurasi dan pemeliharaan server, pengelolaan berbagai proyek sistem informasi, serta optimasi SEO untuk tim marketing.",
  },
  {
    period: "2023 — 2024",
    company: "Mandiri Toner",
    role: "Technical & Store Staff",
    detail: "Mengelola operasional teknis toko printer di Bandung selama 1 tahun 2 bulan, menangani pemeliharaan perangkat, inventarisasi, dan dukungan teknis untuk pelanggan.",
  },
  {
    period: "2022 — 2023",
    company: "Onix Gaming (Cengkareng, Jakarta)",
    role: "Customer Service Representative",
    detail: "Melayani dan menyelesaikan kendala transaksi pengguna platform top-up game selama 6 bulan, memastikan kepuasan pelanggan dan efisiensi penanganan tiket kendala.",
  },
];
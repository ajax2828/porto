// Semua konten portofolio ada di sini. Ganti isinya dengan data kamu sendiri.

export const profile = {
  name: "Muhammad Ihsanzaki",
  role: "Software Engineer",
  location: "Jakarta, Indonesia",
  status: "sedang terbuka untuk kolaborasi",
  tagline: "Saya merapikan sistem yang berantakan menjadi sesuatu yang bisa diandalkan.",
  bio: "Lima tahun terakhir saya menghabiskan waktu di persimpangan backend dan infrastruktur — membangun API yang tahan beban, memperbaiki pipeline data yang rewel, dan sesekali turun ke frontend saat produk membutuhkannya. Saya paling senang saat mengubah sistem yang rapuh menjadi sesuatu yang bisa dipercaya orang lain.",
  email: "halo@ajawx.xyz",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://twitter.com/" },
  ],
};

export const stats = [
  { value: "5+", label: "tahun pengalaman" },
  { value: "27", label: "proyek diluncurkan" },
  { value: "4", label: "tim yang pernah dibantu" },
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
    id: "ledger",
    index: "01",
    title: "Ledger — mesin rekonsiliasi transaksi",
    year: "2025",
    summary:
      "Sistem rekonsiliasi yang memproses jutaan transaksi harian antar tiga penyedia pembayaran, menekan selisih manual dari 6 jam menjadi di bawah 4 menit.",
    role: "Lead backend engineer",
    stack: ["Go", "PostgreSQL", "Kafka", "Redis"],
    href: "#",
  },
  {
    id: "signal",
    index: "02",
    title: "Signal — dashboard observability tim kecil",
    year: "2024",
    summary:
      "Alat monitoring ringan untuk tim yang belum butuh Datadog: metrik, log, dan alert dalam satu tampilan, deploy dalam satu perintah.",
    role: "Full-stack, solo project",
    stack: ["Next.js", "TypeScript", "ClickHouse"],
    href: "#",
  },
  {
    id: "routewise",
    index: "03",
    title: "Routewise — optimasi rute pengiriman",
    year: "2023",
    summary:
      "Layanan optimasi rute untuk armada pengiriman skala menengah, mengurangi total jarak tempuh harian sekitar 18% melalui algoritma routing kustom.",
    role: "Backend engineer",
    stack: ["Python", "OR-Tools", "PostGIS"],
    href: "#",
  },
  {
    id: "atlas",
    index: "04",
    title: "Atlas — migrasi arsitektur monolith ke services",
    year: "2022",
    summary:
      "Memecah monolith lima tahun menjadi delapan service tanpa downtime yang terasa oleh pengguna, dikerjakan bertahap selama sembilan bulan.",
    role: "Backend engineer",
    stack: ["Ruby", "Go", "gRPC", "Docker"],
    href: "#",
  },
];

export const skillGroups = [
  {
    category: "Bahasa & runtime",
    items: ["TypeScript", "Go", "Python", "Ruby", "Node.js"],
  },
  {
    category: "Data & infrastruktur",
    items: ["PostgreSQL", "Redis", "Kafka", "Docker", "AWS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
];

export const experience = [
  {
    period: "2023 — sekarang",
    company: "Nexora Financial",
    role: "Senior Software Engineer",
    detail: "Memimpin tim backend pembayaran, bertanggung jawab atas uptime dan skalabilitas sistem rekonsiliasi.",
  },
  {
    period: "2021 — 2023",
    company: "Studio Delapan",
    role: "Software Engineer",
    detail: "Membangun produk logistik dari nol bersama tim tiga orang, dari prototipe sampai skala nasional.",
  },
  {
    period: "2019 — 2021",
    company: "Bitwork Labs",
    role: "Backend Engineer",
    detail: "Mengerjakan migrasi arsitektur dan pipeline data untuk klien enterprise di sektor ritel.",
  },
];

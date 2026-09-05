# Portofolio — Next.js

Portofolio developer dengan konsep "circuit board / terminal": chassis hitam, biru sebagai warna sinyal utama, merah sebagai aksen alert yang dipakai sangat hemat. Dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Menjalankan di komputer kamu

```bash
npm install
npm run dev
```

Buka http://localhost:3000

Untuk build production:

```bash
npm run build
npm run start
```

## Struktur penting

- `lib/data.ts` — **satu-satunya file yang perlu kamu edit untuk mengganti isi**: nama, role, bio, daftar proyek, skill, pengalaman kerja, email, dan link sosial media.
- `components/` — semua komponen UI (Hero, ProjectList, About, SkillGrid, ContactPanel, dll).
- `tailwind.config.ts` — token warna, font, dan radius. Ganti warna di sini kalau mau menyesuaikan palet.
- `app/globals.css` — gaya global (grid PCB di background, scrollbar, selection color).

## Palet warna

| Token | Hex | Pemakaian |
|---|---|---|
| `chassis` | `#08090C` | Background dasar |
| `chassis.panel` | `#10131A` | Panel terminal, kartu skill |
| `signal` | `#3373F2` | Aksen biru utama (link, tombol, hover) |
| `signal.bright` | `#6BA1FF` | Highlight/glow biru |
| `alert` | `#E23744` | Aksen merah — dipakai sangat terbatas (LED indikator hover) |
| `ink` | `#E9EBEF` | Teks utama |
| `ink.muted` / `ink.dim` | `#9198A6` / `#565D6B` | Teks sekunder/tersier |

## Detail interaktif

- **Boot sequence** di hero: efek mengetik ala terminal, berjalan satu kali saat halaman dimuat.
- **Scroll trace**: garis vertikal di tepi kiri layar (desktop) yang terisi gradasi biru→merah mengikuti progres scroll.
- **Project list**: hover pada tiap proyek menyalakan border biru dan LED merah kecil, bukan efek shadow kartu generik.
- Semua animasi menghormati `prefers-reduced-motion`.

## Mengganti konten

Buka `lib/data.ts` dan ubah:
- `profile` — nama, role, lokasi, tagline, bio, email, sosial media
- `stats` — angka ringkasan di hero
- `projects` — daftar proyek (judul, tahun, ringkasan, stack)
- `skillGroups` — kategori dan daftar tools
- `experience` — riwayat kerja

Tidak perlu menyentuh file komponen untuk mengganti isi teks.

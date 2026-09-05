import type { Metadata } from "next";

// Font di-self-host lewat @fontsource (bundel lokal via npm), jadi tidak
// bergantung pada koneksi ke Google Fonts saat build maupun runtime.
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ihsanzaki — Software Engineer",
  description:
    "Portofolio Muhammad Ihsanzaki, software engineer yang membangun sistem backend dan produk web yang cepat serta reliable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-ink-dim sm:flex-row">
        <span>
          {profile.name} — dibangun dengan Next.js
        </span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Dashboard" },
  { href: "/exercises", label: "Exercise Library" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/quiz", label: "Self-Quiz" },
  { href: "/notes", label: "Placement Notes" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="font-semibold">PhysioPal</div>
        <div className="flex gap-2">
          {tabs.map((t) => {
            const active = pathname === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  active ? "bg-sky-500 text-white border-sky-500" : "hover:bg-gray-100"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}



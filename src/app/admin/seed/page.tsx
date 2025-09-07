"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { useMemo } from "react";
import dynamicImport from "next/dynamic";

const hasConvexUrl = !!process.env.NEXT_PUBLIC_CONVEX_URL;

const SeedClient = dynamicImport(() => import("./seedClient"), { ssr: false });

export default function AdminSeedPage() {
  const showSeed = useMemo(() => hasConvexUrl, []);
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Admin: Seed Content</h1>
      {showSeed ? (
        <SeedClient />
      ) : (
        <div className="text-sm text-zinc-600">
          Convex URL is not configured. Set NEXT_PUBLIC_CONVEX_URL to enable seeding.
        </div>
      )}
      <p className="text-sm text-zinc-600">Populates exercises and flashcards if empty.</p>
    </main>
  );
}



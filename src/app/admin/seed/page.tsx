export const dynamic = "force-dynamic";
export const revalidate = 0;

import SeedClient from "./seedClient";

const hasConvexUrl = !!process.env.NEXT_PUBLIC_CONVEX_URL;

export default function AdminSeedPage() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Admin: Seed Content</h1>
      {hasConvexUrl ? (
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



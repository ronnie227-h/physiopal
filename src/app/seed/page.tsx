"use client";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";

export default function SeedPage() {
  const run = useMutation(api.seed.run);
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Seed Content</h1>
      <button className="px-3 py-2 rounded border hover:bg-zinc-50" onClick={() => run({}).then(() => alert("Seeded"))}>Seed sample data</button>
      <p className="text-sm text-zinc-600">Adds a couple of exercises and flashcards if none exist.</p>
    </main>
  );
}



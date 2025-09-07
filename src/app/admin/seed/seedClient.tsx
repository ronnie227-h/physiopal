"use client";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";

export default function SeedClient() {
  const run = useMutation(api.seed.run);
  return (
    <button
      className="px-3 py-2 rounded border hover:bg-zinc-50"
      onClick={() => run({}).then(() => alert("Seeded"))}
    >
      Seed sample data
    </button>
  );
}



"use client";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { useState } from "react";

export default function NotesPage() {
  const create = useMutation(api.notes.create);
  const [form, setForm] = useState({ date: new Date().toISOString().slice(0, 10), exerciseId: "", sets: "", reps: "", load: "", notes: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await create({
      date: form.date,
      exerciseId: form.exerciseId,
      sets: form.sets ? Number(form.sets) : undefined,
      reps: form.reps ? Number(form.reps) : undefined,
      load: form.load || undefined,
      notes: form.notes || undefined,
    });
    alert("Saved");
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Placement Notes</h1>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm text-zinc-600">Date</span>
          <input className="rounded border p-2" type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-zinc-600">Exercise ID</span>
          <input className="rounded border p-2" value={form.exerciseId} onChange={e => setForm({ ...form, exerciseId: e.target.value })} placeholder="e.g., from /exercises" />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span className="text-sm text-zinc-600">Sets</span>
            <input className="rounded border p-2" inputMode="numeric" value={form.sets} onChange={e => setForm({ ...form, sets: e.target.value })} />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-zinc-600">Reps</span>
            <input className="rounded border p-2" inputMode="numeric" value={form.reps} onChange={e => setForm({ ...form, reps: e.target.value })} />
          </label>
        </div>
        <label className="grid gap-1">
          <span className="text-sm text-zinc-600">Load</span>
          <input className="rounded border p-2" value={form.load} onChange={e => setForm({ ...form, load: e.target.value })} placeholder="2kg / blue band" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-zinc-600">Notes</span>
          <textarea className="rounded border p-2" rows={4} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
        </label>
        <button className="px-3 py-2 rounded border hover:bg-zinc-50" type="submit">Save</button>
      </form>
    </main>
  );
}



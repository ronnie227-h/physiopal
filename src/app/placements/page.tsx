"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Note = {
  id: string;
  date: string; // YYYY-MM-DD
  patient: string;
  exerciseId?: string;
  sets?: number;
  reps?: number;
  notes: string;
};

const STORAGE_KEY = "physiopal-placements";

function startOfWeek(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDay(); // 0=Sun
  const diff = (day === 0 ? -6 : 1) - day; // make Monday start
  const monday = new Date(d);
  monday.setDate(d.getDate() + diff);
  return monday.toISOString().slice(0, 10);
}

function downloadCSV(filename: string, rows: string[][]) {
  const csv = rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function PlacementsPage() {
  const [items, setItems] = useState<Note[]>([]);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Note>({
    id: crypto.randomUUID(),
    date: new Date().toISOString().slice(0, 10),
    patient: "",
    exerciseId: "",
    sets: undefined,
    reps: undefined,
    notes: "",
  });

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setItems(JSON.parse(raw));
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const grouped = useMemo(() => {
    const map = new Map<string, Note[]>();
    for (const n of items) {
      const key = startOfWeek(n.date);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(n);
    }
    // sort descending by week
    return Array.from(map.entries())
      .sort((a, b) => (a[0] < b[0] ? 1 : -1))
      .map(([week, notes]) => ({ week, notes: notes.sort((a, b) => (a.date < b.date ? 1 : -1)) }));
  }, [items]);

  function addNote() {
    if (!draft.patient || !draft.notes) return;
    setItems([{ ...draft }, ...items]);
    setDraft({ id: crypto.randomUUID(), date: new Date().toISOString().slice(0, 10), patient: "", exerciseId: "", sets: undefined, reps: undefined, notes: "" });
    setOpen(false);
  }

  function removeNote(id: string) {
    setItems(items.filter((n) => n.id !== id));
  }

  function exportThisWeek() {
    const today = new Date().toISOString().slice(0, 10);
    const week = startOfWeek(today);
    const rows: string[][] = [["Date", "Patient", "Exercise", "Sets", "Reps", "Notes"]];
    for (const n of items.filter((i) => startOfWeek(i.date) === week)) {
      rows.push([n.date, n.patient, n.exerciseId ?? "", String(n.sets ?? ""), String(n.reps ?? ""), n.notes]);
    }
    downloadCSV(`placements-${week}.csv`, rows);
  }

  return (
    <div className="-mx-4 px-4 py-6 md:py-10 bg-gradient-to-b from-emerald-50 to-white min-h-[calc(100vh-120px)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Placement Notes</h1>
            <p className="text-gray-600">Log sessions and export weekly summaries</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={exportThisWeek}>Export Weekly Report</Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>Add Note</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Note</DialogTitle>
                </DialogHeader>
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-1">
                      <label className="text-sm text-gray-600">Date</label>
                      <Input type="date" value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} />
                    </div>
                    <div className="grid gap-1">
                      <label className="text-sm text-gray-600">Patient Initials</label>
                      <Input value={draft.patient} onChange={(e) => setDraft({ ...draft, patient: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="grid gap-1">
                      <label className="text-sm text-gray-600">Exercise ID</label>
                      <Input value={draft.exerciseId} onChange={(e) => setDraft({ ...draft, exerciseId: e.target.value })} />
                    </div>
                    <div className="grid gap-1">
                      <label className="text-sm text-gray-600">Sets</label>
                      <Input
                        inputMode="numeric"
                        value={draft.sets ?? ""}
                        onChange={(e) => {
                          const v = e.target.value;
                          const n = Number(v);
                          setDraft({ ...draft, sets: v === "" || Number.isNaN(n) ? undefined : n });
                        }}
                      />
                    </div>
                    <div className="grid gap-1">
                      <label className="text-sm text-gray-600">Reps</label>
                      <Input
                        inputMode="numeric"
                        value={draft.reps ?? ""}
                        onChange={(e) => {
                          const v = e.target.value;
                          const n = Number(v);
                          setDraft({ ...draft, reps: v === "" || Number.isNaN(n) ? undefined : n });
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm text-gray-600">Notes</label>
                    <Textarea rows={4} value={draft.notes} onChange={(e) => setDraft({ ...draft, notes: e.target.value })} />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={addNote} disabled={!draft.patient || !draft.notes}>Save</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-6 grid gap-6">
          {grouped.map(({ week, notes }) => (
            <section key={week} className="grid gap-3">
              <h2 className="text-lg font-semibold">Week of {week}</h2>
              {notes.map((n) => (
                <article key={n.id} className="rounded-xl border p-4 bg-white shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-gray-500">{n.date}</div>
                      <div className="font-semibold">{n.patient}</div>
                      {n.exerciseId && <div className="text-xs text-gray-500">Exercise: {n.exerciseId}</div>}
                    </div>
                    <div className="flex items-center gap-2">
                      {(n.sets != null || n.reps != null) && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs">
                          {n.sets != null ? `${n.sets} sets` : ""}{n.sets != null && n.reps != null ? " · " : ""}{n.reps != null ? `${n.reps} reps` : ""}
                        </span>
                      )}
                      <Button variant="outline" onClick={() => removeNote(n.id)}>Delete</Button>
                    </div>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap">{n.notes}</p>
                </article>
              ))}
            </section>
          ))}

          {grouped.length === 0 && (
            <div className="text-gray-500">No notes yet. Click Add Note to create your first entry.</div>
          )}
        </div>
      </div>
    </div>
  );
}


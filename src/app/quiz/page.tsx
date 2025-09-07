"use client";
import { useEffect, useMemo, useState } from "react";
import { QUIZ, type BodyRegion } from "@/data/exercises";

const REGIONS: BodyRegion[] = ["Shoulder", "Knee", "Spine", "Hip", "Ankle", "Elbow", "Wrist"];

export default function QuizPage() {
  const [region, setRegion] = useState<BodyRegion | "">("");
  const pool = useMemo(() => (region ? QUIZ.filter((q) => q.region === region) : QUIZ), [region]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const q = pool[current];

  const total = pool.length || 1;
  const progressPct = ((current + 1) / total) * 100;

  useEffect(() => {
    setCurrent(0);
    setSelected(null);
    setSubmitted(false);
  }, [region]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Enter") submit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, selected, submitted, pool]);

  const prev = () => {
    setSubmitted(false);
    setSelected(null);
    setCurrent((p) => (p - 1 + total) % total);
  };
  const next = () => {
    setSubmitted(false);
    setSelected(null);
    setCurrent((p) => (p + 1) % total);
  };
  const submit = () => {
    if (!selected) return;
    setSubmitted(true);
  };

  return (
    <div className="-mx-4 px-4 py-6 md:py-10 bg-gradient-to-b from-violet-50 to-white min-h-[calc(100vh-120px)]">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight">Self-Quiz</h1>
        <p className="text-gray-500 mt-1">Select a body region and test your knowledge</p>

        <div className="mt-6 rounded-2xl border bg-white p-4 md:p-6 shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="font-medium">Select Body Region</div>
            <select
              className="border rounded-lg px-3 py-2 w-full md:w-auto"
              value={region}
              onChange={(e) => setRegion((e.target.value as BodyRegion) || "")}
            >
              <option value="">All Regions</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {q && (
          <div className="mt-6 rounded-3xl border bg-white shadow-lg p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-2">Question {current + 1} of {total}</div>
            <p className="text-xl md:text-2xl font-medium mb-4">{q.prompt}</p>
            <div className="grid gap-3">
              {q.options.map((o) => {
                const active = selected === o.id;
                const correct = submitted && o.isCorrect;
                const wrong = submitted && active && !o.isCorrect;
                return (
                  <label
                    key={o.id}
                    className={`flex items-center gap-2 border rounded-xl p-3 cursor-pointer transition ${
                      active ? "border-sky-500 bg-sky-50" : "hover:bg-gray-50"
                    } ${correct ? "border-green-500 bg-green-50" : ""} ${wrong ? "border-red-500 bg-red-50" : ""}`}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      checked={selected === o.id}
                      onChange={() => setSelected(o.id)}
                    />
                    <span>{o.text}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button onClick={prev} className="px-4 py-2 rounded-full border bg-white hover:bg-gray-50 shadow-sm">‹ Previous</button>
              <button
                onClick={submit}
                disabled={!selected}
                className="px-5 py-2.5 rounded-full bg-violet-600 text-white disabled:opacity-50 shadow"
              >
                {submitted ? "Show Explanation" : "Submit"}
              </button>
              <button onClick={next} className="px-4 py-2 rounded-full border bg-white hover:bg-gray-50 shadow-sm">Next ›</button>
            </div>

            {submitted && (
              <div className="mt-4 rounded-lg border p-3 bg-gray-50">
                <div className="font-medium mb-1">Explanation</div>
                <p className="text-gray-700">{q.explanation}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-5 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full bg-violet-500 transition-[width] duration-300" style={{ width: `${progressPct}%` }} />
        </div>
      </div>
    </div>
  );
}



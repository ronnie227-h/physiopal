"use client";
import { useEffect, useMemo, useState } from "react";
import { FLASHCARDS } from "@/data/exercises";
import type { Flashcard } from "@/types/flashcards";

export default function FlashcardsPage() {
  const [idx, setIdx] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const [shuffled, setShuffled] = useState<Flashcard[]>([]);
  useEffect(() => {
    const arr: Flashcard[] = [...FLASHCARDS];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffled(arr);
  }, []);

  const total = (shuffled.length || FLASHCARDS.length) as number;
  const card: Flashcard | undefined = useMemo(
    () => (shuffled.length ? shuffled[idx] : FLASHCARDS[idx]),
    [idx, shuffled]
  );

  const prev = () => {
    setShowAnswer(false);
    setIdx((p) => (p - 1 + total) % total);
  };
  const next = () => {
    setShowAnswer(false);
    setIdx((p) => (p + 1) % total);
  };
  const reset = () => {
    setShowAnswer(false);
    setIdx(0);
    const arr: Flashcard[] = [...FLASHCARDS];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffled(arr);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === " ") {
        e.preventDefault();
        setShowAnswer((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, total]);

  const progressPct = total > 0 ? ((idx + 1) / total) * 100 : 0;

  if (!card) {
    return (
      <div className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-indigo-50 to-white -mx-4 px-4 py-6 md:py-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight">Anatomy Flashcards</h1>
          <p className="text-gray-500 mt-1">No flashcards available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-indigo-50 to-white -mx-4 px-4 py-6 md:py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight">Anatomy Flashcards</h1>
        <p className="text-gray-500 mt-1">Study anatomy with interactive flashcards</p>

        <div className="mt-6 inline-flex items-center rounded-xl border px-3 py-1.5 text-sm text-gray-700 bg-white shadow-sm">
          Card <span className="mx-1 font-semibold">{idx + 1}</span> of {total}
        </div>

        <div className="relative mt-4 md:mt-6">
          <button
            aria-label="Reset deck"
            onClick={reset}
            className="absolute right-2 top-2 md:right-4 md:top-4 rounded-full border bg-white p-2 hover:bg-gray-50 shadow-sm"
            title="Reset & Shuffle (↻)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70">
              <path
                d="M4 4v6h6M20 20v-6h-6M20 8a8 8 0 0 0-13.657-5.657L4 4m0 16a8 8 0 0 0 13.657 5.657L20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            role="button"
            aria-label="flashcard"
            tabIndex={0}
            onClick={() => setShowAnswer((s) => !s)}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === " ") setShowAnswer((s) => !s);
            }}
            className="cursor-pointer select-none rounded-3xl border bg-white shadow-lg hover:shadow-xl transition p-4 md:p-8"
          >
            {card.topic ? (
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-sm">
                  {card.topic}
                </span>
              </div>
            ) : null}

            <div className="min-h-[140px] md:min-h-[160px] flex items-center justify-center text-center">
              {!showAnswer ? (
                <p className="text-xl md:text-2xl font-medium text-gray-900">{card.front}</p>
              ) : (
                <p className="text-lg md:text-xl text-gray-800">{card.back}</p>
              )}
            </div>

            <div className="text-xs text-gray-400 mt-2">
              {!showAnswer ? "Click card to flip" : "Click to hide answer"}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="inline-flex items-center gap-1 rounded-full border bg-white px-4 py-2 text-sm hover:bg-gray-50 shadow-sm"
          >
            ‹ Previous
          </button>

          <button
            type="button"
            onClick={() => setShowAnswer((s) => !s)}
            className="inline-flex items-center gap-1 rounded-full bg-sky-600 text-white px-5 py-2.5 text-sm hover:bg-sky-700 shadow"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>

          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-1 rounded-full border bg-white px-4 py-2 text-sm hover:bg-gray-50 shadow-sm"
          >
            Next ›
          </button>
        </div>

        <div className="mt-5 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-sky-500 transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

 
"use client";
import { useMemo, useState } from "react";
import { EXERCISES, type BodyRegion } from "@/data/exercises";
import VideoPlayer from "@/components/VideoPlayer";

type RegionOrAll = "All" | BodyRegion;
const REGIONS: RegionOrAll[] = [
  "All",
  "Shoulder",
  "Knee",
  "Spine",
  "Hip",
  "Ankle",
  "Elbow",
  "Wrist",
];

export default function ExerciseLibraryPage() {
  const [region, setRegion] = useState<RegionOrAll>("All");
  const list = useMemo(() => {
    return region === "All" ? EXERCISES : EXERCISES.filter((e) => e.region === region);
  }, [region]);

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 rounded-xl shadow-sm mb-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center md:text-left md:ml-6">\
          Exercise Library
        </h1>
        <p className="text-gray-600 text-center md:text-left md:ml-6">\
          Browse rehabilitation exercises by body region
        </p>
      </div>
      <div className="flex gap-3 flex-wrap mb-8">
        {REGIONS.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`px-4 py-2 rounded-full border transition ${
              r === region ? "bg-black text-white border-black" : "bg-white hover:bg-gray-100"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="text-gray-500">No exercises for this region (yet).</p>
      ) : (
        <div className="grid gap-8">
          {list.map((ex) => (
            <article key={ex.id} className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex flex-col gap-4">
                <VideoPlayer url={ex.videoUrl} title={ex.name} className="w-full h-64 rounded-xl object-cover" />
                {/* <img src={ex.imageUrl} alt={ex.name} className="rounded-xl w-full object-cover" /> */}
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{ex.name}</h2>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm mb-4">
                  {ex.region} · {ex.difficulty}
                </span>

                <p className="text-gray-700 mb-4">{ex.description}</p>

                <h3 className="text-green-700 font-semibold">Target Muscles</h3>
                <p className="mb-3">{ex.targetMuscles.join(', ')}</p>

                <h3 className="text-blue-700 font-semibold">Key Coaching Notes</h3>
                <p className="mb-3">{ex.coachingNotes}</p>

                <h3 className="text-red-700 font-semibold">⚠ Common Mistakes</h3>
                <p>{ex.commonMistakes}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}



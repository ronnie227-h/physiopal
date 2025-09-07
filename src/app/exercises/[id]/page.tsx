import Link from "next/link";
import { notFound } from "next/navigation";
import { EXERCISES } from "@/data/exercises";
export default async function ExerciseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exercise = EXERCISES.find((e) => e.id === id);
  if (!exercise) return notFound();

  return (
    <div className="mx-auto max-w-4xl py-8 space-y-4">
      <Link href="/exercises" className="text-sm text-sky-600 hover:underline">← Back to Exercise Library</Link>
      <h1 className="text-2xl font-semibold">{exercise.name}</h1>
      <div className="text-sm text-gray-600">{exercise.region} · {exercise.difficulty}</div>
      <p className="text-gray-800">{exercise.description}</p>
    </div>
  );
}



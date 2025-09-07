export const dynamic = "force-static";
import Navbar from "@/components/Navbar";
import FeatureGrid from "@/components/FeatureGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <section className="max-w-4xl mx-auto p-8 space-y-4">
        <h1 className="text-4xl font-bold text-center">PhysioPal</h1>
        <p className="text-center text-slate-600">Rehab exercise & anatomy learning assistant.</p>
      </section>
      <section className="p-6">
        <FeatureGrid />
      </section>
    </main>
  );
}

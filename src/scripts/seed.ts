import { ConvexHttpClient } from "convex/browser";

async function main() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
  const client = new ConvexHttpClient(url);

  // Seed exercises
  const items = [
    {
      title: "Straight Leg Raise",
      bodyRegion: "Knee",
      targets: ["Quadriceps"],
      cues: ["Keep knee straight", "Lift slowly"],
      commonMistakes: ["Bending knee", "Lifting too fast"],
      tags: ["strengthen"],
    },
    {
      title: "Shoulder ER (Band)",
      bodyRegion: "Shoulder",
      targets: ["Infraspinatus", "Teres minor"],
      cues: ["Elbow at side", "Rotate forearm outward"],
      commonMistakes: ["Elbow drifting", "Shrugging"],
      tags: ["rotator cuff"],
    },
  ];

  /** @ts-expect-error Convex codegen types are not available in this Node script; call by name */
  await client.mutation("exercises:seed", { items });
  console.log("Seeded", items.length, "exercises");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});



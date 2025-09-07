import { mutation } from "./_generated/server";

export const run = mutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    // Avoid duplicating seed data
    const anyExercise = await ctx.db.query("exercises").first();
    if (!anyExercise) {
      // Knee
      await ctx.db.insert("exercises", {
        title: "Quadriceps Set",
        region: "knee",
        muscles: ["Quadriceps femoris"],
        mediaUrl: "/",
        mediaType: "gif",
        cues: ["Tighten the front of the thigh", "Press the knee into the bed", "Hold 5 seconds"],
        commonMistakes: ["Holding breath", "Hip hiking"],
        difficulty: "easy",
        tags: ["activation"],
        createdAt: now,
      });
      await ctx.db.insert("exercises", {
        title: "Straight Leg Raise",
        region: "knee",
        muscles: ["Quadriceps femoris", "Iliopsoas"],
        mediaUrl: "/",
        mediaType: "gif",
        cues: ["Brace quads first", "Lift heel 12–18 inches", "Keep knee locked"],
        commonMistakes: ["Knee bending", "Pelvic rotation"],
        difficulty: "moderate",
        tags: ["strengthen"],
        createdAt: now,
      });
      await ctx.db.insert("exercises", {
        title: "Hamstring Bridge",
        region: "knee",
        muscles: ["Hamstrings", "Gluteus maximus"],
        mediaUrl: "/",
        mediaType: "gif",
        cues: ["Feet hip-width", "Squeeze glutes", "Lift pelvis as a unit"],
        commonMistakes: ["Overarching low back"],
        difficulty: "moderate",
        tags: ["strengthen"],
        createdAt: now,
      });

      // Shoulder
      await ctx.db.insert("exercises", {
        title: "Shoulder External Rotation (Band)",
        region: "shoulder",
        muscles: ["Infraspinatus", "Teres minor"],
        mediaUrl: "/",
        mediaType: "gif",
        cues: ["Elbow at side, 90°", "Rotate forearm outward", "Keep scapula down/back"],
        commonMistakes: ["Upper trap shrugging", "Elbow drifting"],
        difficulty: "moderate",
        tags: ["strengthen", "rotator cuff"],
        createdAt: now,
      });
      await ctx.db.insert("exercises", {
        title: "Scapular Retraction",
        region: "shoulder",
        muscles: ["Rhomboids", "Middle trapezius"],
        mediaUrl: "/",
        mediaType: "gif",
        cues: ["Pinch shoulder blades gently", "Avoid lumbar extension"],
        commonMistakes: ["Over-squeezing", "Neck tension"],
        difficulty: "easy",
        tags: ["motor control"],
        createdAt: now,
      });

      // Spine
      await ctx.db.insert("exercises", {
        title: "Cat-Camel",
        region: "spine",
        muscles: ["Spinal extensors", "Abdominals"],
        mediaUrl: "/",
        mediaType: "gif",
        cues: ["Segmental movement", "Breathe with motion", "Stay pain-free"],
        commonMistakes: ["Forcing end range"],
        difficulty: "easy",
        tags: ["mobility"],
        createdAt: now,
      });
      await ctx.db.insert("exercises", {
        title: "Bird Dog",
        region: "spine",
        muscles: ["Erector spinae", "Gluteus maximus", "Deltoids"],
        mediaUrl: "/",
        mediaType: "gif",
        cues: ["Neutral spine", "Reach long through heel and hand", "No trunk rotation"],
        commonMistakes: ["Arching back", "Rushing"],
        difficulty: "moderate",
        tags: ["stability"],
        createdAt: now,
      });
    }

    const anyCard = await ctx.db.query("flashcards").first();
    if (!anyCard) {
      // Knee anatomy
      await ctx.db.insert("flashcards", {
        prompt: "Innervation of quadriceps femoris?",
        answer: "Femoral nerve",
        region: "knee",
        topic: "innervation",
        tags: ["anatomy"],
        createdAt: now,
      });
      await ctx.db.insert("flashcards", {
        prompt: "Primary action of hamstrings at the knee?",
        answer: "Knee flexion",
        region: "knee",
        topic: "action",
        tags: ["anatomy"],
        createdAt: now,
      });

      // Shoulder anatomy
      await ctx.db.insert("flashcards", {
        prompt: "Muscles of the rotator cuff?",
        answer: "Supraspinatus, Infraspinatus, Teres minor, Subscapularis",
        region: "shoulder",
        topic: "misc",
        tags: ["anatomy"],
        createdAt: now,
      });
      await ctx.db.insert("flashcards", {
        prompt: "Action of supraspinatus?",
        answer: "Initiates shoulder abduction",
        region: "shoulder",
        topic: "action",
        tags: ["anatomy"],
        createdAt: now,
      });

      // Spine anatomy
      await ctx.db.insert("flashcards", {
        prompt: "Dermatome for great toe extension (L5) testing muscle?",
        answer: "Extensor hallucis longus",
        region: "spine",
        topic: "misc",
        tags: ["neuro"],
        createdAt: now,
      });
      await ctx.db.insert("flashcards", {
        prompt: "Motion primarily limited by posterior longitudinal ligament?",
        answer: "Spinal flexion",
        region: "spine",
        topic: "misc",
        tags: ["anatomy"],
        createdAt: now,
      });
    }

    return { ok: true };
  },
});



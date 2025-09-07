import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  exercises: defineTable({
    title: v.string(),
    region: v.union(
      v.literal("shoulder"),
      v.literal("knee"),
      v.literal("spine"),
      v.literal("hip"),
      v.literal("ankle"),
      v.literal("elbow"),
      v.literal("wrist")
    ),
    muscles: v.array(v.string()),
    mediaUrl: v.string(),
    mediaType: v.union(v.literal("gif"), v.literal("video")),
    cues: v.array(v.string()),
    commonMistakes: v.array(v.string()),
    difficulty: v.union(
      v.literal("easy"),
      v.literal("moderate"),
      v.literal("hard")
    ),
    tags: v.array(v.string()),
    createdAt: v.number(),
  })
    .index("by_region", ["region"]) 
    .index("by_title", ["title"]),

  flashcards: defineTable({
    prompt: v.string(),
    answer: v.string(),
    region: v.union(
      v.literal("shoulder"),
      v.literal("knee"),
      v.literal("spine"),
      v.literal("hip"),
      v.literal("ankle"),
      v.literal("elbow"),
      v.literal("wrist")
    ),
    topic: v.union(
      v.literal("innervation"),
      v.literal("origin"),
      v.literal("insertion"),
      v.literal("action"),
      v.literal("misc")
    ),
    tags: v.array(v.string()),
    createdAt: v.number(),
  }).index("by_region_topic", ["region", "topic"]),

  quizSessions: defineTable({
    userId: v.optional(v.string()),
    region: v.union(
      v.literal("shoulder"),
      v.literal("knee"),
      v.literal("spine"),
      v.literal("hip"),
      v.literal("ankle"),
      v.literal("elbow"),
      v.literal("wrist")
    ),
    questionIds: v.array(v.string()),
    answers: v.array(
      v.object({
        questionId: v.string(),
        selected: v.string(),
        correct: v.boolean(),
      })
    ),
    score: v.number(),
    startedAt: v.number(),
    completedAt: v.optional(v.number()),
  }).index("by_user", ["userId"]),

  placementNotes: defineTable({
    userId: v.optional(v.string()),
    date: v.string(),
    patientCode: v.optional(v.string()),
    exerciseId: v.string(),
    sets: v.optional(v.number()),
    reps: v.optional(v.number()),
    load: v.optional(v.string()),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_date", ["date"]).index("by_user_date", ["userId", "date"]),
});



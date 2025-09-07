import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

const region = v.union(
  v.literal("shoulder"),
  v.literal("knee"),
  v.literal("spine"),
  v.literal("hip"),
  v.literal("ankle"),
  v.literal("elbow"),
  v.literal("wrist")
);

const topic = v.union(
  v.literal("innervation"),
  v.literal("origin"),
  v.literal("insertion"),
  v.literal("action"),
  v.literal("misc")
);

// Removed old listByRegion signature using strict region type to avoid redeclare & type mismatch

export const create = mutation({
  args: {
    prompt: v.string(),
    answer: v.string(),
    region,
    topic,
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const createdAt = Date.now();
    return await ctx.db.insert("flashcards", { ...args, createdAt });
  },
});

export const draw = query({
  args: { bodyRegion: v.optional(v.string()), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    if (!args.bodyRegion) {
      const all = await ctx.db.query("flashcards").collect();
      return [...all].sort(() => Math.random() - 0.5).slice(0, args.limit ?? 10);
    }
    const regionLower = args.bodyRegion.toLowerCase();
    const cards = await ctx.db
      .query("flashcards")
      .withIndex("by_region_topic", q => q.eq("region", regionLower as any))
      .collect();
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, args.limit ?? 10);
  },
});

export const listByRegion = query({
  args: { bodyRegion: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (!args.bodyRegion) return await ctx.db.query("flashcards").collect();
    const regionLower = args.bodyRegion.toLowerCase();
    return await ctx.db
      .query("flashcards")
      .withIndex("by_region_topic", q => q.eq("region", regionLower as any))
      .collect();
  },
});



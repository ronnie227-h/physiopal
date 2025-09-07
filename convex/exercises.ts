import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listByRegion = query({
  args: { bodyRegion: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (!args.bodyRegion) return await ctx.db.query("exercises").collect();
    const regionLower = args.bodyRegion.toLowerCase();
    return ctx.db
      .query("exercises")
      .withIndex("by_region", q => q.eq("region", regionLower as any))
      .collect();
  }
});

export const getById = query({
  args: { id: v.id("exercises") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  }
});

export const create = mutation({
  args: {
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
    difficulty: v.union(v.literal("easy"), v.literal("moderate"), v.literal("hard")),
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("exercises", { ...args, createdAt: now });
  }
});

export const seed = mutation({
  args: {
    items: v.array(
      v.object({
        title: v.string(),
        bodyRegion: v.optional(v.string()),
        region: v.optional(
          v.union(
            v.literal("shoulder"),
            v.literal("knee"),
            v.literal("spine"),
            v.literal("hip"),
            v.literal("ankle"),
            v.literal("elbow"),
            v.literal("wrist")
          )
        ),
        targets: v.optional(v.array(v.string())),
        muscles: v.optional(v.array(v.string())),
        mediaUrl: v.optional(v.string()),
        mediaType: v.optional(v.union(v.literal("gif"), v.literal("video"))),
        cues: v.optional(v.array(v.string())),
        commonMistakes: v.optional(v.array(v.string())),
        difficulty: v.optional(v.union(v.literal("easy"), v.literal("moderate"), v.literal("hard"))),
        tags: v.optional(v.array(v.string())),
      })
    ),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    let count = 0;
    for (const it of args.items) {
      const region = (it.region ?? it.bodyRegion?.toLowerCase()) as any;
      const muscles = it.muscles ?? it.targets ?? [];
      await ctx.db.insert("exercises", {
        title: it.title,
        region,
        muscles,
        mediaUrl: it.mediaUrl ?? "/",
        mediaType: it.mediaType ?? "gif",
        cues: it.cues ?? [],
        commonMistakes: it.commonMistakes ?? [],
        difficulty: it.difficulty ?? "easy",
        tags: it.tags ?? [],
        createdAt: now,
      });
      count += 1;
    }
    return count;
  },
});



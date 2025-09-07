import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    userId: v.optional(v.string()),
    date: v.string(),
    patientCode: v.optional(v.string()),
    exerciseId: v.string(),
    sets: v.optional(v.number()),
    reps: v.optional(v.number()),
    load: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("placementNotes", { ...args, createdAt: Date.now() });
  },
});

export const listByWeek = query({
  args: { userId: v.optional(v.string()), weekStart: v.string(), weekEnd: v.string() },
  handler: async (ctx, args) => {
    const all = await ctx.db
      .query("placementNotes")
      .withIndex("by_date", q => q.gte("date", args.weekStart))
      .collect();
    return all.filter(n => n.date <= args.weekEnd && (!args.userId || n.userId === args.userId));
  },
});



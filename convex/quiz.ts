import { mutation, query } from "./_generated/server";
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

export const start = mutation({
  args: { region },
  handler: async (ctx, args) => {
    const cards = await ctx.db
      .query("flashcards")
      .withIndex("by_region_topic", q => q.eq("region", args.region))
      .collect();

    const sample = cards.sort(() => Math.random() - 0.5).slice(0, 10);
    const questionIds = sample.map(c => c._id!.toString());
    const startedAt = Date.now();
    const sessionId = await ctx.db.insert("quizSessions", {
      region: args.region,
      userId: undefined,
      questionIds,
      answers: [],
      score: 0,
      startedAt,
    });
    const questions = sample.map(c => ({
      _id: c._id!.toString(),
      prompt: c.prompt,
      answer: c.answer,
      options: generateOptions(c.answer, cards.map(x => x.answer)),
    }));
    return { sessionId, questions };
  },
});

export const submit = mutation({
  args: {
    sessionId: v.id("quizSessions"),
    answers: v.array(v.object({ questionId: v.string(), selected: v.string() })),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) throw new Error("Session not found");
    const questions = await ctx.db
      .query("flashcards")
      .collect();
    const answerMap = new Map(questions.map(q => [q._id!.toString(), q.answer]));
    const graded = args.answers.map(a => ({ ...a, correct: a.selected === answerMap.get(a.questionId) }));
    const score = Math.round((graded.filter(g => g.correct).length / graded.length) * 100);
    await ctx.db.patch(args.sessionId, { answers: graded, score, completedAt: Date.now() });
    return { score };
  },
});

function generateOptions(correct: string, pool: string[]): string[] {
  const distractors = Array.from(new Set(pool.filter(a => a !== correct)));
  const choices = [correct, ...shuffle(distractors).slice(0, 3)];
  return shuffle(choices);
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}



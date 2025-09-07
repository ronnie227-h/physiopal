export type BodyRegion =
  | "shoulder"
  | "knee"
  | "spine"
  | "hip"
  | "ankle"
  | "elbow"
  | "wrist";

export interface Exercise {
  _id?: string;
  title: string;
  region: BodyRegion;
  muscles: string[];
  mediaUrl: string;
  mediaType: "gif" | "video";
  cues: string[];
  commonMistakes: string[];
  difficulty: "easy" | "moderate" | "hard";
  tags: string[];
  createdAt?: number;
}

export interface Flashcard {
  _id?: string;
  prompt: string;
  answer: string;
  region: BodyRegion;
  topic: "innervation" | "origin" | "insertion" | "action" | "misc";
  tags: string[];
  createdAt?: number;
}

export interface QuizQuestion {
  _id?: string;
  sourceType: "flashcard" | "exercise";
  prompt: string;
  region: BodyRegion;
  options?: string[];
  answer: string;
  explanation?: string;
}

export interface QuizSessionAnswer {
  questionId: string;
  selected: string;
  correct: boolean;
}

export interface QuizSession {
  _id?: string;
  userId?: string;
  region: BodyRegion;
  questionIds: string[];
  answers: QuizSessionAnswer[];
  score: number;
  startedAt: number;
  completedAt?: number;
}

export interface PlacementNote {
  _id?: string;
  userId?: string;
  date: string; // YYYY-MM-DD
  patientCode?: string;
  exerciseId: string;
  sets?: number;
  reps?: number;
  load?: string; // e.g., '2kg' or 'blue band'
  notes?: string;
  createdAt?: number;
}



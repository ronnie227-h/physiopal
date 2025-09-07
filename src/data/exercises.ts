export type BodyRegion = "Shoulder" | "Knee" | "Spine" | "Hip" | "Ankle" | "Elbow" | "Wrist";

export type Exercise = {
  id: string;
  name: string;
  region: BodyRegion;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  imageUrl: string;
  videoUrl: string;
  reps?: string;
  precautions?: string;
  // Enhanced fields for richer UI
  targetMuscles: string[];
  coachingNotes: string;
  commonMistakes: string;
};

export const EXERCISES: Exercise[] = [
  {
    id: "shoulder-er",
    name: "Shoulder External Rotation",
    region: "Shoulder",
    difficulty: "Medium",
    description: "TheraBand external rotation with elbow at 90°.",
    imageUrl: "https://picsum.photos/seed/shoulder-er/1000/700",
    videoUrl: "https://www.youtube.com/watch?v=7wrPdEALihg",
    reps: "3 × 12",
    targetMuscles: ["Infraspinatus", "Teres Minor"],
    coachingNotes: "Keep elbow tucked, neutral spine.",
    commonMistakes: "Elbow drifting away; trunk rotation.",
  },
  {
    id: "knee-sq",
    name: "Knee Strengthening Routine",
    region: "Knee",
    difficulty: "Easy",
    description: "5 exercises to strengthen the knees safely.",
    imageUrl: "https://picsum.photos/seed/knee/1000/700",
    videoUrl: "https://www.youtube.com/watch?v=ikt6NME0k9E",
    reps: "3 × 10",
    targetMuscles: ["Quadriceps", "Hamstrings"],
    coachingNotes: "Maintain alignment, avoid excessive knee valgus.",
    commonMistakes: "Rushing through reps, poor posture.",
  },
  {
    id: "spine-core",
    name: "Spine Strengthening",
    region: "Spine",
    difficulty: "Medium",
    description: "Four minute spine and core strengthening routine.",
    imageUrl: "https://picsum.photos/seed/spine/1000/700",
    videoUrl: "https://www.youtube.com/watch?v=gXm-7lU9aCs",
    targetMuscles: ["Erector Spinae", "Abdominals"],
    coachingNotes: "Engage core, keep neutral spine.",
    commonMistakes: "Overarching lower back.",
  },
  {
    id: "hip-bridge",
    name: "Hip Strength Builder",
    region: "Hip",
    difficulty: "Medium",
    description: "Four simple hip strength exercises.",
    imageUrl: "https://picsum.photos/seed/hip/1000/700",
    videoUrl: "https://www.youtube.com/watch?v=B4LZwjXdLkM",
    reps: "3 × 15",
    targetMuscles: ["Gluteus Maximus", "Hamstrings"],
    coachingNotes: "Squeeze glutes at top, avoid lumbar extension.",
    commonMistakes: "Arching lower back, poor control.",
  },
  {
    id: "ankle-rehab",
    name: "Ankle Rehab",
    region: "Ankle",
    difficulty: "Easy",
    description: "Quick & effective ankle rehab routine.",
    imageUrl: "https://picsum.photos/seed/ankle/1000/700",
    videoUrl: "https://www.youtube.com/watch?v=FvqsZokQIJ0",
    targetMuscles: ["Calf muscles", "Peroneals"],
    coachingNotes: "Controlled movements, focus on balance.",
    commonMistakes: "Going too fast, losing stability.",
  },
  {
    id: "elbow-pain",
    name: "Elbow Pain Relief",
    region: "Elbow",
    difficulty: "Easy",
    description: "Short elbow pain relief and strengthening exercises.",
    imageUrl: "https://picsum.photos/seed/elbow/1000/700",
    videoUrl: "https://www.youtube.com/watch?v=AqmRblKV_DE",
    targetMuscles: ["Forearm flexors", "Forearm extensors"],
    coachingNotes: "Use light resistance, focus on range of motion.",
    commonMistakes: "Overloading, jerky movements.",
  },
  {
    id: "wrist-ecentric-ext",
    name: "Wrist Strength Workout",
    region: "Wrist",
    difficulty: "Easy",
    description: "Bodyweight routine to bulletproof your wrists in 4 minutes.",
    imageUrl: "https://picsum.photos/seed/wrist/1000/700",
    videoUrl: "https://www.youtube.com/watch?v=1kyD46nrRw8",
    reps: "4 min continuous",
    targetMuscles: ["Wrist flexors", "Wrist extensors", "Forearm stabilizers"],
    coachingNotes: "Perform controlled, slow movements; keep wrists neutral.",
    commonMistakes: "Using too much speed; letting wrists collapse.",
  },
];

import type { Flashcard } from "@/types/flashcards";

export const FLASHCARDS: Flashcard[] = [
  {
    id: "anat-rotator-cuff",
    front: "Name the 4 muscles of the rotator cuff.",
    back: "Supraspinatus, Infraspinatus, Teres Minor, Subscapularis.",
    topic: "Shoulder",
  },
  {
    id: "knee-ligaments",
    front: "Primary ligaments stabilizing the knee?",
    back: "ACL, PCL, MCL, LCL.",
    topic: "Ligaments",
  },
  {
    id: "ankle-bones",
    front: "Two main bones forming the ankle mortise?",
    back: "Tibia and Fibula (with the Talus).",
    topic: "Anatomy",
  },
];

export type QuizOption = { id: string; text: string; isCorrect: boolean };
export type QuizQuestion = { id: string; region: BodyRegion; prompt: string; options: QuizOption[]; explanation: string };

export const QUIZ: QuizQuestion[] = [
  // Shoulder (5)
  {
    id: "shoulder-q1",
    region: "Shoulder",
    prompt: "Which muscle primarily initiates shoulder abduction from 0–15°?",
    options: [
      { id: "a", text: "Deltoid (middle fibers)", isCorrect: false },
      { id: "b", text: "Supraspinatus", isCorrect: true },
      { id: "c", text: "Subscapularis", isCorrect: false },
      { id: "d", text: "Teres major", isCorrect: false },
    ],
    explanation: "Supraspinatus initiates abduction; deltoid contributes after ~15°.",
  },
  {
    id: "shoulder-q2",
    region: "Shoulder",
    prompt: "The rotator cuff’s primary role during elevation is to…",
    options: [
      { id: "a", text: "Produce powerful internal rotation", isCorrect: false },
      { id: "b", text: "Centrate the humeral head in the glenoid", isCorrect: true },
      { id: "c", text: "Protract the scapula", isCorrect: false },
      { id: "d", text: "Elevate the clavicle", isCorrect: false },
    ],
    explanation: "Cuff muscles compress and stabilize the humeral head within the glenoid.",
  },
  {
    id: "shoulder-q3",
    region: "Shoulder",
    prompt: "Scapular upward rotation is primarily performed by which combination?",
    options: [
      { id: "a", text: "Rhomboids + Levator scapulae", isCorrect: false },
      { id: "b", text: "Upper/lower trapezius + Serratus anterior", isCorrect: true },
      { id: "c", text: "Pectoralis minor + Latissimus dorsi", isCorrect: false },
      { id: "d", text: "Middle trapezius + Teres major", isCorrect: false },
    ],
    explanation: "Force couple of upper/lower trap with serratus anterior drives upward rotation.",
  },
  {
    id: "shoulder-q4",
    region: "Shoulder",
    prompt: "A positive Hawkins–Kennedy test most suggests…",
    options: [
      { id: "a", text: "SLAP lesion", isCorrect: false },
      { id: "b", text: "Subacromial impingement", isCorrect: true },
      { id: "c", text: "AC joint sprain", isCorrect: false },
      { id: "d", text: "Biceps tendon rupture", isCorrect: false },
    ],
    explanation: "Hawkins–Kennedy provokes subacromial structures via forced IR in flexion.",
  },
  {
    id: "shoulder-q5",
    region: "Shoulder",
    prompt: "Which nerve innervates the deltoid?",
    options: [
      { id: "a", text: "Axillary nerve", isCorrect: true },
      { id: "b", text: "Musculocutaneous nerve", isCorrect: false },
      { id: "c", text: "Radial nerve", isCorrect: false },
      { id: "d", text: "Spinal accessory nerve", isCorrect: false },
    ],
    explanation: "The axillary nerve (C5–C6) innervates the deltoid and teres minor.",
  },

  // Knee (5)
  {
    id: "knee-q1",
    region: "Knee",
    prompt: "Which structure primarily resists anterior tibial translation?",
    options: [
      { id: "a", text: "PCL", isCorrect: false },
      { id: "b", text: "ACL", isCorrect: true },
      { id: "c", text: "MCL", isCorrect: false },
      { id: "d", text: "LCL", isCorrect: false },
    ],
    explanation: "The ACL resists anterior tibial translation relative to the femur.",
  },
  {
    id: "knee-q2",
    region: "Knee",
    prompt: "Which exercise emphasizes quadriceps activation with minimal patellofemoral stress early on?",
    options: [
      { id: "a", text: "Deep squat", isCorrect: false },
      { id: "b", text: "Straight leg raise", isCorrect: true },
      { id: "c", text: "Jump squats", isCorrect: false },
      { id: "d", text: "Walking lunges", isCorrect: false },
    ],
    explanation: "SLR allows quad engagement without large knee flexion angles early rehab.",
  },
  {
    id: "knee-q3",
    region: "Knee",
    prompt: "Valgus collapse during squatting is MOST associated with…",
    options: [
      { id: "a", text: "Overactive gluteus medius", isCorrect: false },
      { id: "b", text: "Underactive hip abductors/external rotators", isCorrect: true },
      { id: "c", text: "Tight hamstrings", isCorrect: false },
      { id: "d", text: "Overactive tibialis posterior", isCorrect: false },
    ],
    explanation: "Hip abductor/ER weakness commonly contributes to valgus knee position.",
  },
  {
    id: "knee-q4",
    region: "Knee",
    prompt: "Menisci primarily function to…",
    options: [
      { id: "a", text: "Produce synovial fluid", isCorrect: false },
      { id: "b", text: "Increase joint congruency and distribute load", isCorrect: true },
      { id: "c", text: "Prevent varus stress", isCorrect: false },
      { id: "d", text: "Limit extension", isCorrect: false },
    ],
    explanation: "Menisci deepen the tibial plateau and aid load distribution and stability.",
  },
  {
    id: "knee-q5",
    region: "Knee",
    prompt: "Which test best assesses ACL integrity?",
    options: [
      { id: "a", text: "McMurray test", isCorrect: false },
      { id: "b", text: "Lachman test", isCorrect: true },
      { id: "c", text: "Apley compression", isCorrect: false },
      { id: "d", text: "Noble compression", isCorrect: false },
    ],
    explanation: "Lachman is sensitive for ACL tears at ~20–30° knee flexion.",
  },

  // Spine (5)
  {
    id: "spine-q1",
    region: "Spine",
    prompt: "Which cue best promotes a neutral lumbar spine during lifting?",
    options: [
      { id: "a", text: "Excessive posterior pelvic tilt", isCorrect: false },
      { id: "b", text: "Brace the core and maintain natural lordosis", isCorrect: true },
      { id: "c", text: "Hyperextend the lumbar spine", isCorrect: false },
      { id: "d", text: "Hold your breath throughout", isCorrect: false },
    ],
    explanation: "Neutral with bracing optimizes force transfer and reduces strain.",
  },
  {
    id: "spine-q2",
    region: "Spine",
    prompt: "McKenzie extension principles are MOST appropriate when…",
    options: [
      { id: "a", text: "Repeated flexion centralizes symptoms", isCorrect: false },
      { id: "b", text: "Repeated extension centralizes symptoms", isCorrect: true },
      { id: "c", text: "All movements peripheralize symptoms", isCorrect: false },
      { id: "d", text: "Only traction helps", isCorrect: false },
    ],
    explanation: "Direction of preference is guided by symptom centralization.",
  },
  {
    id: "spine-q3",
    region: "Spine",
    prompt: "Which nerve root is commonly tested with great toe extension strength?",
    options: [
      { id: "a", text: "L4", isCorrect: false },
      { id: "b", text: "L5", isCorrect: true },
      { id: "c", text: "S1", isCorrect: false },
      { id: "d", text: "S2", isCorrect: false },
    ],
    explanation: "EHL strength reflects L5 function.",
  },
  {
    id: "spine-q4",
    region: "Spine",
    prompt: "Bird-dog primarily targets which capacity?",
    options: [
      { id: "a", text: "Lumbar flexion ROM", isCorrect: false },
      { id: "b", text: "Spinal stability and anti-rotation", isCorrect: true },
      { id: "c", text: "Hip adductor strength", isCorrect: false },
      { id: "d", text: "Thoracic rotation ROM", isCorrect: false },
    ],
    explanation: "Bird-dog challenges trunk stability while resisting rotation.",
  },
  {
    id: "spine-q5",
    region: "Spine",
    prompt: "Which red flag warrants medical referral in low back pain?",
    options: [
      { id: "a", text: "Pain after activity", isCorrect: false },
      { id: "b", text: "Night pain with unexplained weight loss", isCorrect: true },
      { id: "c", text: "Mild morning stiffness", isCorrect: false },
      { id: "d", text: "Soreness after new exercise", isCorrect: false },
    ],
    explanation: "Systemic signs with night pain may indicate serious pathology.",
  },

  // Hip (5)
  {
    id: "hip-q1",
    region: "Hip",
    prompt: "A positive Trendelenburg sign indicates weakness of…",
    options: [
      { id: "a", text: "Gluteus maximus", isCorrect: false },
      { id: "b", text: "Gluteus medius/minimus", isCorrect: true },
      { id: "c", text: "Hip adductors", isCorrect: false },
      { id: "d", text: "Piriformis", isCorrect: false },
    ],
    explanation: "Glute med/min stabilize the pelvis during single-leg stance.",
  },
  {
    id: "hip-q2",
    region: "Hip",
    prompt: "Which motion primarily stresses the anterior hip capsule?",
    options: [
      { id: "a", text: "Extension + external rotation", isCorrect: true },
      { id: "b", text: "Flexion + adduction", isCorrect: false },
      { id: "c", text: "Abduction only", isCorrect: false },
      { id: "d", text: "Internal rotation only", isCorrect: false },
    ],
    explanation: "Combined hip extension/ER tensions the anterior capsule.",
  },
  {
    id: "hip-q3",
    region: "Hip",
    prompt: "Which muscle is a primary hip external rotator in neutral?",
    options: [
      { id: "a", text: "Gluteus minimus (anterior fibers)", isCorrect: false },
      { id: "b", text: "Piriformis", isCorrect: true },
      { id: "c", text: "Tensor fasciae latae", isCorrect: false },
      { id: "d", text: "Pectineus", isCorrect: false },
    ],
    explanation: "Piriformis contributes notably to ER in neutral hip position.",
  },
  {
    id: "hip-q4",
    region: "Hip",
    prompt: "Thomas test primarily assesses…",
    options: [
      { id: "a", text: "Hamstring length", isCorrect: false },
      { id: "b", text: "Hip flexor length", isCorrect: true },
      { id: "c", text: "IT band tightness", isCorrect: false },
      { id: "d", text: "Hip ER strength", isCorrect: false },
    ],
    explanation: "Thomas test screens iliopsoas/rectus femoris tightness.",
  },
  {
    id: "hip-q5",
    region: "Hip",
    prompt: "Best cue to avoid lumbar compensation during glute bridge?",
    options: [
      { id: "a", text: "Lift as high as possible", isCorrect: false },
      { id: "b", text: "Posterior pelvic tilt then squeeze glutes", isCorrect: true },
      { id: "c", text: "Point knees inward", isCorrect: false },
      { id: "d", text: "Hold breath to brace", isCorrect: false },
    ],
    explanation: "Posterior tilt limits lumbar extension and biases hip extension.",
  },

  // Ankle (5)
  {
    id: "ankle-q1",
    region: "Ankle",
    prompt: "Most commonly injured ligament in inversion ankle sprain is…",
    options: [
      { id: "a", text: "Deltoid ligament", isCorrect: false },
      { id: "b", text: "Anterior talofibular ligament (ATFL)", isCorrect: true },
      { id: "c", text: "Calcaneofibular ligament only", isCorrect: false },
      { id: "d", text: "Posterior talofibular ligament", isCorrect: false },
    ],
    explanation: "ATFL is most frequently sprained with plantarflexion/inversion.",
  },
  {
    id: "ankle-q2",
    region: "Ankle",
    prompt: "Which muscle group primarily everts the foot and supports the lateral ankle?",
    options: [
      { id: "a", text: "Tibialis posterior", isCorrect: false },
      { id: "b", text: "Peroneals (fibularis longus/brevis)", isCorrect: true },
      { id: "c", text: "Gastrocnemius", isCorrect: false },
      { id: "d", text: "Extensor hallucis longus", isCorrect: false },
    ],
    explanation: "Peroneals evert and dynamically stabilize the lateral ankle.",
  },
  {
    id: "ankle-q3",
    region: "Ankle",
    prompt: "Eccentric heel drops are MOST indicated for…",
    options: [
      { id: "a", text: "Acute Achilles rupture", isCorrect: false },
      { id: "b", text: "Mid-portion Achilles tendinopathy", isCorrect: true },
      { id: "c", text: "Tibialis anterior strain", isCorrect: false },
      { id: "d", text: "Plantar fascia tear", isCorrect: false },
    ],
    explanation: "Eccentric loading protocols benefit chronic mid-portion tendinopathy.",
  },
  {
    id: "ankle-q4",
    region: "Ankle",
    prompt: "Limited dorsiflexion in knee-extended position suggests tightness of…",
    options: [
      { id: "a", text: "Soleus", isCorrect: false },
      { id: "b", text: "Gastrocnemius", isCorrect: true },
      { id: "c", text: "Peroneus longus", isCorrect: false },
      { id: "d", text: "Flexor hallucis longus", isCorrect: false },
    ],
    explanation: "With knee extended, gastrocnemius tightness limits dorsiflexion.",
  },
  {
    id: "ankle-q5",
    region: "Ankle",
    prompt: "Which balance progression is most appropriate early after ankle sprain (pain permitting)?",
    options: [
      { id: "a", text: "Single-leg stance on foam with head turns", isCorrect: false },
      { id: "b", text: "Single-leg stance on firm surface", isCorrect: true },
      { id: "c", text: "Bounding and cutting drills", isCorrect: false },
      { id: "d", text: "Single-leg hops", isCorrect: false },
    ],
    explanation: "Begin with stable SLS before adding perturbations or plyometrics.",
  },

  // Elbow (5)
  {
    id: "elbow-q1",
    region: "Elbow",
    prompt: "Lateral epicondylalgia most commonly involves which tendon?",
    options: [
      { id: "a", text: "Flexor carpi radialis", isCorrect: false },
      { id: "b", text: "Extensor carpi radialis brevis", isCorrect: true },
      { id: "c", text: "Brachialis", isCorrect: false },
      { id: "d", text: "Pronator teres", isCorrect: false },
    ],
    explanation: "ECRB tendinopathy is typical in tennis elbow.",
  },
  {
    id: "elbow-q2",
    region: "Elbow",
    prompt: "Valgus stress at the elbow primarily stresses the…",
    options: [
      { id: "a", text: "Lateral collateral ligament complex", isCorrect: false },
      { id: "b", text: "Ulnar (medial) collateral ligament", isCorrect: true },
      { id: "c", text: "Annular ligament", isCorrect: false },
      { id: "d", text: "Interosseous membrane", isCorrect: false },
    ],
    explanation: "The MCL (UCL) resists valgus forces at the elbow.",
  },
  {
    id: "elbow-q3",
    region: "Elbow",
    prompt: "Supination strength bias is greatest with which primary mover?",
    options: [
      { id: "a", text: "Biceps brachii", isCorrect: true },
      { id: "b", text: "Brachioradialis", isCorrect: false },
      { id: "c", text: "Triceps brachii", isCorrect: false },
      { id: "d", text: "Pronator quadratus", isCorrect: false },
    ],
    explanation: "Biceps is a powerful supinator, especially with elbow flexed.",
  },
  {
    id: "elbow-q4",
    region: "Elbow",
    prompt: "Which finding suggests possible ulnar neuropathy?",
    options: [
      { id: "a", text: "Thenar eminence atrophy", isCorrect: false },
      { id: "b", text: "Hypothenar weakness and 4th/5th digit numbness", isCorrect: true },
      { id: "c", text: "Wrist drop", isCorrect: false },
      { id: "d", text: "Radial tunnel tenderness", isCorrect: false },
    ],
    explanation: "Ulnar nerve affects intrinsic hand muscles and ulnar digits sensation.",
  },
  {
    id: "elbow-q5",
    region: "Elbow",
    prompt: "Best early management principle for lateral epicondylalgia?",
    options: [
      { id: "a", text: "High-velocity manipulation only", isCorrect: false },
      { id: "b", text: "Relative rest + graded loading (e.g., eccentric)", isCorrect: true },
      { id: "c", text: "Complete immobilization for 6 weeks", isCorrect: false },
      { id: "d", text: "Only passive modalities", isCorrect: false },
    ],
    explanation: "Progressive loading with symptom management outperforms rest alone.",
  },

  // Wrist (5)
  {
    id: "wrist-q1",
    region: "Wrist",
    prompt: "Positive Finkelstein’s test indicates involvement of…",
    options: [
      { id: "a", text: "De Quervain’s tenosynovitis (APL/EPB)", isCorrect: true },
      { id: "b", text: "Carpal tunnel syndrome", isCorrect: false },
      { id: "c", text: "TFCC tear", isCorrect: false },
      { id: "d", text: "Scapholunate dissociation", isCorrect: false },
    ],
    explanation: "Finkelstein stresses the first dorsal compartment tendons.",
  },
  {
    id: "wrist-q2",
    region: "Wrist",
    prompt: "Which nerve is compressed in carpal tunnel syndrome?",
    options: [
      { id: "a", text: "Ulnar nerve", isCorrect: false },
      { id: "b", text: "Median nerve", isCorrect: true },
      { id: "c", text: "Radial nerve", isCorrect: false },
      { id: "d", text: "Posterior interosseous nerve", isCorrect: false },
    ],
    explanation: "Median nerve passes beneath the transverse carpal ligament.",
  },
  {
    id: "wrist-q3",
    region: "Wrist",
    prompt: "Snuffbox tenderness after a fall on outstretched hand suggests…",
    options: [
      { id: "a", text: "Hook of hamate fracture", isCorrect: false },
      { id: "b", text: "Scaphoid fracture", isCorrect: true },
      { id: "c", text: "Lunate dislocation only", isCorrect: false },
      { id: "d", text: "Pisiform contusion", isCorrect: false },
    ],
    explanation: "The scaphoid lies within the anatomic snuffbox and is vulnerable in FOOSH.",
  },
  {
    id: "wrist-q4",
    region: "Wrist",
    prompt: "Eccentric wrist extension is MOST useful for…",
    options: [
      { id: "a", text: "Acute TFCC tear", isCorrect: false },
      { id: "b", text: "Lateral epicondylalgia strengthening", isCorrect: true },
      { id: "c", text: "Carpal instability", isCorrect: false },
      { id: "d", text: "Acute scapholunate sprain", isCorrect: false },
    ],
    explanation: "Eccentric loading of wrist extensors benefits tendinopathy.",
  },
  {
    id: "wrist-q5",
    region: "Wrist",
    prompt: "Which muscle primarily flexes the wrist with radial deviation?",
    options: [
      { id: "a", text: "Flexor carpi ulnaris", isCorrect: false },
      { id: "b", text: "Flexor carpi radialis", isCorrect: true },
      { id: "c", text: "Extensor carpi radialis longus", isCorrect: false },
      { id: "d", text: "Extensor carpi ulnaris", isCorrect: false },
    ],
    explanation: "FCR contributes to wrist flexion and radial deviation.",
  },
];



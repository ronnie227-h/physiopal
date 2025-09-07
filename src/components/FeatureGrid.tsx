import FeatureCard from "@/components/FeatureCard";

export default function FeatureGrid() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <FeatureCard
        iconSrc="https://c.animaapp.com/mf93974kiUNEIv/assets/icon-4.svg"
        title="Exercise Library"
        description="Browse rehabilitation exercises by body region"
        href="/exercises"
        iconContainerVariant="bg-[oklch(0.97_0.014_254.604)]"
        iconVariant="text-[oklch(0.546_0.245_262.881)]"
      />
      <FeatureCard
        iconSrc="https://c.animaapp.com/mf93974kiUNEIv/assets/icon-5.svg"
        title="Anatomy Flashcards"
        description="Study anatomy with interactive flashcards"
        href="/flashcards"
        iconContainerVariant="bg-[oklch(0.982_0.018_155.826)]"
        iconVariant="text-[oklch(0.627_0.194_149.214)]"
      />
      <FeatureCard
        iconSrc="https://c.animaapp.com/mf93974kiUNEIv/assets/icon-6.svg"
        title="Self-Quiz"
        description="Test your knowledge with practice quizzes"
        href="/quiz"
        iconContainerVariant="bg-[oklch(0.977_0.014_308.299)]"
        iconVariant="text-[oklch(0.558_0.288_302.321)]"
      />
      <FeatureCard
        iconSrc="https://c.animaapp.com/mf93974kiUNEIv/assets/icon-7.svg"
        title="Placement Notes"
        description="Track exercises and patient progress"
        href="/placements"
        iconContainerVariant="bg-[oklch(0.98_0.016_73.684)]"
        iconVariant="text-[oklch(0.646_0.222_41.116)]"
      />
    </div>
  );
}



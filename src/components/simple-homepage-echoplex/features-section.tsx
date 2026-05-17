import clsx from "clsx";

const features = [
  {
    emoji: "👾",
    title1: "Immersive Digital",
    title2: "Art Experience",
    bgEmojiColor: "bg-[#C9D2FA]",
    title1Color: "text-[#4138C2]",
  },
  {
    emoji: "⚙️",
    title1: "Customizable",
    title2: "Flooring",
    bgEmojiColor: "bg-[#E2FBE8]",
    title1Color: "text-[#5EC269]",
  },
  {
    emoji: "🎭",
    title1: "State-of-the-Art",
    title2: "Displays",
    bgEmojiColor: "bg-[#FBE5E6]",
    title1Color: "text-[#E14F62]",
  },
  {
    emoji: "🎓",
    title1: "Expertly Designed",
    title2: "Lighting and Sound",
    bgEmojiColor: "bg-[#FDF9C9]",
    title1Color: "text-[#E2B53E]",
  },
  {
    emoji: "👨🏻‍💻",
    title1: "Community",
    title2: "Engagement",
    bgEmojiColor: "bg-[#FCEED8]",
    title1Color: "text-[#E87B35]",
  },
  {
    emoji: "👩‍🎨",
    title1: "Artist",
    title2: "Collaborations",
    bgEmojiColor: "bg-[#DEE9FC]",
    title1Color: "text-[#4E80EE]",
  },
  {
    emoji: "📚",
    title1: "Educational",
    title2: "Programs",
    bgEmojiColor: "bg-[#F1E8FD]",
    title1Color: "text-[#9D59EF]",
  },
  {
    emoji: "🤖",
    title1: "Technology",
    title2: "Integration",
    bgEmojiColor: "bg-[#D5FAF1]",
    title1Color: "text-[#52B3D0]",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="mx-auto max-w-7xl space-y-16 p-18">
      <h1 className="mx-auto w-full text-balance max-w-md text-center text-[32px] leading-[140%] font-bold tracking-[-1%] text-[#121826]">
        Join 30,000+ creators and collections
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-16 xl:gap-16">
        {features.map((feature) => (
          <FeatureCard
            key={feature.emoji}
            emoji={feature.emoji}
            title1={feature.title1}
            title2={feature.title2}
            bgEmojiColor={feature.bgEmojiColor}
            title1Color={feature.title1Color}
          />
        ))}
      </div>
    </section>
  );
};

interface FeatureCardProps {
  emoji: string;
  title1: string;
  title2: string;
  bgEmojiColor: string;
  title1Color: string;
}

const FeatureCard = ({
  emoji,
  title1,
  title2,
  bgEmojiColor,
  title1Color,
}: FeatureCardProps) => {
  return (
    <div className="space-y-6">
      <div
        className={clsx(
          "mx-auto flex size-18 items-center justify-center rounded-2xl text-[32px]",
          bgEmojiColor,
        )}
      >
        {emoji}
      </div>
      <div>
        <h4 className={clsx("text-center text-xl font-bold", title1Color)}>
          {title1}
        </h4>
        <h4 className="text-center text-xl font-bold text-[#121826]">
          {title2}
        </h4>
      </div>
    </div>
  );
};

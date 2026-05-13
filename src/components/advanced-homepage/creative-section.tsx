import clsx from "clsx";
import Image from "next/image";

const cards = [
  {
    emoji: "🎨",
    bgImageColor: "bg-[#6281F7]",
    title: "200+ cloneable components",
    description:
      "Suspendisse id tortor venenatis, blandit lacus ut, efficitur diam. Proin vulputate nisl vel sem consequat euismod.",
  },
  {
    emoji: "🎯",
    bgImageColor: "bg-[#F5C044]",
    title: "Complete style guild for projects",
    description:
      "Suspendisse id tortor venenatis, blandit lacus ut, efficitur diam. Proin vulputate nisl vel sem consequat euismod.",
  },
  {
    emoji: "🌸",
    bgImageColor: "bg-[#5DB082]",
    title: "Modern & beautiful landing page",
    description:
      "Suspendisse id tortor venenatis, blandit lacus ut, efficitur diam. Proin vulputate nisl vel sem consequat euismod.",
  },
  {
    emoji: "⚙️",
    bgImageColor: "bg-[#6D4AE5]",
    title: "Built in multiple ways",
    description:
      "Suspendisse id tortor venenatis, blandit lacus ut, efficitur diam. Proin vulputate nisl vel sem consequat euismod.",
  },
];

export const CreativeSection = () => {
  return (
    <div className="relative px-6 py-10 leading-[normal] sm:px-18 sm:py-24">
      <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[#161739]"></div>
      <Image
        src="/advanced-homepage/section_bg_1.png"
        alt="creative_img_background"
        width={1280}
        height={740}
        loading="eager"
        className="absolute top-0 left-0 -z-10 hidden h-full w-full object-cover lg:block"
      />

      <Image
        src="/advanced-homepage/section_bg_2.png"
        alt="creative_img_background"
        width={1280}
        height={1174}
        loading="eager"
        className="absolute top-0 left-0 -z-10 block h-full w-full object-cover lg:hidden"
      />

      <div className="space-y-18">
        <div className="mx-auto w-full max-w-127.5 space-y-4">
          <h2 className="mx-auto w-full max-w-123.75 text-center text-[32px] leading-[normal] font-semibold tracking-[-1%] text-[#F6F7FB] sm:text-4xl">
            This is new creative process
          </h2>

          <p className="text-center text-xl leading-[normal] tracking-[-1%] text-[#C9D0DA]">
            Quisque eleifend velit vel erat fringilla interdum
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-284 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Card key={card.emoji} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  emoji: string;
  bgImageColor: string;
  title: string;
  description: string;
}

const Card = ({ emoji, bgImageColor, title, description }: CardProps) => {
  return (
    <div className="space-y-8 tracking-[-1%]">
      <div
        className={clsx(
          "mx-auto flex h-30 w-30 items-center justify-center rounded-xl text-5xl",
          bgImageColor,
        )}
      >
        {emoji}
      </div>
      <h4 className="text-center text-xl leading-[normal] font-semibold text-[#F6F7FB]">
        {title}
      </h4>
      <p className="text-center leading-[175%] text-pretty text-[#C9D0DA]">
        {description}
      </p>
    </div>
  );
};

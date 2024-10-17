'use-client';

import { MdxImage as Image } from "./mdx-image";
import StarGold from "@/assets/images/Star_fill.svg";
import StarGray from "@/assets/images/Star_fill_gray.svg";


interface Props {
  rating: 1 | 2 | 3 | 4 | 5;
  testimonialIcon: JSX.Element;
  testimonialName: string;
  testimonialComment: string;
  className?: string;
}

export const Card = ({ rating, testimonialIcon, testimonialName, testimonialComment, className }: Props) => {
  const generateStars = (rating: 1 | 2 | 3 | 4 | 5) => {
    const goldStars = Array.from({ length: rating }).map((v, i) => i);
    const grayStars = Array.from({ length: 5 - rating }).map((v, i) => i);

    return { goldStars, grayStars };
  };

  return (
    <div className={`w-[350px] px-9 py-7 rounded-lg bg-white shadow-2xl shadow-[#D4D4D8] space-y-3 ${className}`}>
      <div className="flex items-center gap-4">
        {testimonialIcon}
        <div className="flex gap-1">
          {generateStars(rating).goldStars.map((v) => <Image key={v} src={StarGold} alt="star-gold" />)}
          {generateStars(rating).grayStars.map((v) => <Image key={v} src={StarGray} alt="star-gray" />)}
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">{testimonialName}</h1>
        <p className="leading-relaxed">{testimonialComment}</p>
      </div>
    </div>
  );
};
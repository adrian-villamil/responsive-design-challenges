import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SectionList } from "@/components/simple-feature-section/section-list";

export const metadata: Metadata = {
  title: 'Simple Feature Section',
  description: 'Simple Feature Section Challenge from devchallenges.io',
};

const outfitFont = Outfit({
  subsets: ['latin'],
});

export default function SimpleFeatureSection() {
  return (
    <main className={`h-full lg:h-screen bg-[url('/simple-feature-section/Background_image.svg')] bg-no-repeat bg-cover bg-center bg-[#121826] ${outfitFont.className}`}>
      <h1 className="max-w-[400px] mx-auto mt-12 text-center text-[40px] font-semibold text-[#E5E7EB] leading-[50.2px] -tracking-[0.29px]">Quality feedbacks for your SaaS products</h1>
      <p className="mt-[14px] text-center -tracking-[0.15px] text-[#9DA3AE]">The blocks & components you need</p>
      <SectionList />
    </main>
  );
}
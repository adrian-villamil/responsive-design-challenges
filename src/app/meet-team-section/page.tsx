import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GridList } from "@/components/meet-team-section/grid-list";

export const metadata: Metadata = {
  title: 'Meet the Team Section',
  description: 'Responsive Web Design Challenge from devchallenges.io',
};

const outfitFont = Outfit({
  subsets: ['latin'],
});

export default function MeetTeamSectionPage() {
  return (
    <main className={`min-h-screen py-[74px] ${outfitFont.className} bg-white`}>
      <GridList />
    </main>
  );
}
import { ChallengesList } from "@/components/home-page/challenges-list";
import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ['latin'],
});

export default function HomePage() {
  return (
    <main className={`h-screen ${montserratFont.className}`}>
      <h1 className="max-w-[500px] mx-auto mt-16 text-5xl text-center font-semibold leading-tight">Responsive Web Design Challenges</h1>
      <ChallengesList />
    </main>
  );
}

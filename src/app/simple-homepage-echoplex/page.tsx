import { FeaturesSection } from "@/components/simple-homepage-echoplex/features-section";
import { Footer } from "@/components/simple-homepage-echoplex/footer";
import { GetStartedSection } from "@/components/simple-homepage-echoplex/get-started-section";
import { HeroSection } from "@/components/simple-homepage-echoplex/hero-section";
import { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Simple Homepage - Echoplex",
  description: "Simple Homepage - Echoplex Challenge from devchallenges.io",
};

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HomePageEchoplex() {
  return (
    <main className={`min-h-screen ${beVietnamPro.className} pt-6`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-18">
        <Image
          src="/simple-homepage-echoplex/logo.svg"
          alt="Logo"
          width={32}
          height={32}
        />

        <button className="cursor-pointer rounded-4xl border-2 border-[#E5E7EB] px-9 py-3 leading-[normal] font-bold text-[#4138C2] transition-colors hover:border-[#C9D2FA] hover:bg-[#C9D2FA]">
          Connect
        </button>
      </div>

      <HeroSection />
      <FeaturesSection />
      <GetStartedSection />
      <Footer />
      
    </main>
  );
}

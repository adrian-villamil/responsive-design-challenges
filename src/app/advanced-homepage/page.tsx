import { ComponentsSection } from "@/components/advanced-homepage/components-section";
import { CreativeSection } from "@/components/advanced-homepage/creative-section";
import { FooterSection } from "@/components/advanced-homepage/footer-section";
import { HeroSection } from "@/components/advanced-homepage/hero-section";
import { Metadata } from "next";
import { Sora } from "next/font/google";

export const metadata: Metadata = {
  title: "Advanced Homepage",
  description: "Advanced Homepage Challenge from devchallenges.io",
};

const sora = Sora({
  subsets: ["latin"],
});

export default function AdvancedHomepage() {
  return (
    <main className={`min-h-screen ${sora.className}`}>
      <HeroSection />
      <CreativeSection />
      <ComponentsSection />
      <FooterSection />
    </main>
  );
}

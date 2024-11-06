import { Metadata } from "next";
import { Lato } from "next/font/google";
import { Card } from "@/components/business-blog-card/card";

export const metadata: Metadata = {
  title: 'Business Blog Card',
  description: 'Business Blog Card Challenge from devchallenges.io',
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function BusinessBlogPage() {
  return (
    <main className={`h-screen bg-[#F2F5F9] ${lato.className}`}>
      <Card />
    </main>
  );
}
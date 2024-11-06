import { Metadata } from "next";
import {Sora} from "next/font/google";
import { Card } from "@/components/minimal-blog-card/card";

export const metadata: Metadata = {
  title: 'Minimal Blog Card',
  description: 'Minimal Blog Card Challenge from devchallenges.io',
};

const sora = Sora({
  subsets: ['latin']
});

export default function MinimalBlogPage() {
  return (
    <main className={`h-screen bg-stone-50 ${sora.className}`}>
      <Card />
    </main>
  );
}
import {Sora} from "next/font/google";
import { Card } from "@/challenges/minimal-blog-card/components/card";


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
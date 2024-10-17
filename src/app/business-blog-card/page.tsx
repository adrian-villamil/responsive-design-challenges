import { Lato } from "next/font/google";
import { Card } from "@/challenges/business-blog-card/components/card";

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
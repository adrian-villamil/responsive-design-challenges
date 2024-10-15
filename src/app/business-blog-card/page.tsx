import { Card } from "@/components/business-blog-card/card";
import { Lato } from "next/font/google";

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
import { Table } from "@/components/pricing-table/table";
import { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

export const metadata: Metadata = {
  title: 'Pricing Table',
  description: 'Pricing Table Challenge from devchallenges.io',
};

const beVietnamProFont = Be_Vietnam_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function PricingTablePage() {
  return (
    <main className={`min-h-screen ${beVietnamProFont.className} bg-white`}>
      <div className="h-[197px] pt-[49px] bg-[url('/pricing-table/sand-background-image@2x.png')] bg-[length:1280px_196px] bg-center border-b bg-[#F8FAFC] space-y-2">
        <h1 className="text-center text-[32px] font-bold text-[#121826] tracking-[-0.01em]">Pricing & Plans</h1>
        <p className="max-w-[440px] mx-auto text-center text-[#4D5562] leading-5 tracking-[-0.01em]">
          Discover the plan that unlocks the transformative power of digital art and join our vibrant community today.
        </p>
      </div>
      <Table />
    </main>
  );
}
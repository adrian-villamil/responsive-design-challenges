import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MobileNavbar } from "@/components/simple-homepage/mobile-navbar";
import { Navbar } from "@/components/simple-homepage/navbar";

const poppinsFont = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function SimpleHomePage() {
  return (
    <main className={`min-h-screen bg-[#F2F9FE] dark:bg-[#111729] ${poppinsFont.className} relative`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-16">
        <Navbar />
        <div className="flex flex-col-reverse xl:flex-row items-center gap-y-24 xl:gap-y-0 mt-16 mb-28 xl:mb-0 px-0 lg:px-20 xl:px-0">
          <div className="flex-1 px-10 lg:px-0">
            <h2 className="text-sm text-[#223344] dark:text-white font-semibold">😎 SIMPLE WAY TO COMMUNICATE</h2>
            <h1 className="text-6xl text-[#223344] dark:text-white font-bold leading-normal text-balance lg:text-pretty xl:text-balance mt-3 mb-8">Actions for Accessibility in Design</h1>
            <p className="text-lg text-[#223344]/70 dark:text-[#F2F9FE]/40 font-medium mb-6 max-w-[500px]">The fastest way to build and deploy websites with resusable components.</p>
            <div className="space-x-8 my-10">
              <button className="px-8 py-3 rounded-xl text-white font-medium bg-[#2A4DD0]">GET STARTED</button>
              <Link href={'#'} className="text-[#2A4DD0] font-semibold underline underline-offset-2 decoration-2">Get live demo</Link>
            </div>
            <div className="flex gap-x-5">
              <div className="flex items-center gap-x-2">
                <Image src={'/simple-homepage/Done_ring_round_fill.svg'} alt="done-ring" width={24} height={24} />
                <p className="text-sm font-medium text-[#223344]/70 dark:text-[#F2F9FE]/40">No credit card required</p>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src={'/simple-homepage/Done_ring_round_fill.svg'} alt="done-ring" width={24} height={24} />
                <p className="text-sm font-medium text-[#223344]/70 dark:text-[#F2F9FE]/40">No software to install</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={'/simple-homepage/hero-image-simple-homepage.png'}
              alt="hero-image"
              width={576}
              height={520.766}
            />
          </div>
        </div>
      </div>
      <MobileNavbar />
    </main>
  );
}
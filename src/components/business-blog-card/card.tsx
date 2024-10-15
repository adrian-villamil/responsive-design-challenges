import Image from "next/image";
import HeroImage from "@/assets/images/hero-image-business-card.png";
import WhiteOverlay from "@/assets/images/white-overlay.svg";
import AvatarImage from "@/assets/images/avatar-image-business-card.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const Card = () => {
  return (
    <div className="w-[420px] rounded-xl overflow-hidden relative top-28 left-1/2 -translate-x-1/2 bg-white divide-y divide-[#F2F5F9]">
      <div>
        <div className="relative">
          <Image
            src={HeroImage}
            alt="hero-image"
          />
          <Image
            src={WhiteOverlay}
            alt="white-overlay"
            className="absolute -bottom-[1px] w-full"
          />
        </div>
        <div className="px-8 pb-6 space-y-4">
          <h1 className={`text-2xl font-semibold leading-relaxed tracking-tighter text-[#111729] ${poppins.className}`}>Perfect solution for small business</h1>
          <p className="text-[#677489]">Small businesses need to generate leads to grow. You can use tools like Ringy.</p>
        </div>
      </div>
      <div className="px-8 py-6 flex items-center gap-x-4">
        <div className="w-9 rounded-full overflow-hidden outline outline-offset-1 outline-3 outline-[#F2F5F9]">
          <Image
            src={AvatarImage}
            alt="avatar-image"
          />
        </div>
        <div>
          <h3 className="font-bold text-[#111729]">Amy Burgess</h3>
          <p className="font-medium text-xs text-[#677489]">Custom Manager, Solution Oy</p>
        </div>
      </div>
    </div>
  );
};
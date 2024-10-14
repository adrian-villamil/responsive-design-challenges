import Image from "next/image";
import CactusImage from '@/assets/images/cactus_img.jpg';

export const Card = () => {
  return (
    <div className="w-[368px] rounded-xl flex flex-col divide-y bg-white shadow-2xl relative top-[164px] left-1/2 -translate-x-1/2">
      <div className="flex flex-col gap-y-4 p-4 pb-5">
        <Image
          src={CactusImage}
          alt="cactus-image"
          width={336}
          height={152}
          priority
          className="rounded-xl"
        />
        <div className="h-fit">
          <span className="px-4 py-1 rounded-xl text-[10px] font-bold text-[#883AE1] bg-[#E6D6FC]">Design</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Embracing Minimalism</h1>
          <p className="text-sm mt-1 text-balance text-[#6C727F] font-light">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        </div>
      </div>
      <div className="px-4 py-4">
        <span className="text-xs text-[#6C727F]">Annie Spratt</span>
      </div>
    </div>
  );
};
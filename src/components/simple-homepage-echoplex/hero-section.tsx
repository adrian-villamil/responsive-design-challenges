import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="mx-auto mt-14 mb-17 flex max-w-7xl flex-col-reverse items-center gap-x-14 gap-y-12 px-8 md:flex-row md:px-18">
      <div className="space-y-8">
        <h1 className="text-4xl leading-[150%] font-bold tracking-[-1%] text-[#121826]">
          <span className="text-[#4138C2]">EchoPlex</span> is the first
          community-owned digital art gallery.
        </h1>

        <p className="tracking-[-1%] text-[#121826]">
          Empowering Artists and Connecting Communities Through Digital Art
        </p>

        <div className="flex items-center gap-3">
          <button className="cursor-pointer rounded-4xl border-[#4138C2] bg-[#4138C2] px-9 py-3 leading-[normal] font-bold tracking-[-1%] text-white transition-colors hover:bg-[#3a31a8]">
            Create
          </button>

          <button className="cursor-pointer rounded-4xl border-2 border-[#E5E7EB] px-9 py-3 leading-[normal] font-bold tracking-[-1%] text-[#4138C2] transition-colors hover:bg-[#f3f4f6]">
            Explore
          </button>
        </div>
      </div>

      <div className="w-full lg:max-w-137.5">
        <Image
          src="/simple-homepage-echoplex/hero_image.png"
          alt="Hero Image"
          width={550}
          height={620}
          loading="eager"
          className="hidden lg:block w-full"
        />
        
        <Image
          src="/simple-homepage-echoplex/hero_image@2x.png"
          alt="Hero Image"
          width={1100}
          height={1239}
          loading="eager"
          className="block lg:hidden w-full"
        />
      </div>
    </div>
  );
};

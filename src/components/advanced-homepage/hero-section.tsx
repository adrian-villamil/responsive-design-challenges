import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative mx-auto w-full max-w-337.5 space-y-10 sm:space-y-24 overflow-hidden px-6 pt-6 pb-20 leading-[normal] sm:px-18 sm:pb-31">
      <div className="absolute top-17 right-0 -z-10 h-196.75 w-122.5 bg-none bg-cover bg-center bg-no-repeat sm:bg-[url('/advanced-homepage/hero-image.png')] lg:h-263.25 lg:w-164" />

      <div className="flex items-center justify-between">
        <Image
          src="/advanced-homepage/logo.svg"
          alt="logo"
          width={42}
          height={42}
          loading="eager"
        />
        <div className="flex items-center gap-x-6.75">
          <span className="leading-[normal] font-semibold text-[#737F8B] sm:text-[#364153]">
            Log In
          </span>
          <button className="rounded-[37px] bg-[#295E48] px-6 py-3 leading-[normal] font-semibold text-[#F6F7FB]">
            Sign Up
          </button>
        </div>
      </div>

      <div className="w-full space-y-10 sm:space-y-20.5 sm:max-w-115.5 lg:max-w-138">
        <div className="space-y-8">
          <div className="flex w-fit items-center gap-5 overflow-hidden rounded-[36px] bg-[#DEE9FC] p-1 pr-5">
            <Image
              src="/advanced-homepage/version-icon.svg"
              alt="version_icon"
              width={32}
              height={32}
              loading="eager"
            />
            <span className="text-xs font-semibold tracking-[-1%] text-[#263FA9]">
              version 4.0.1
            </span>
          </div>

          <h1 className="text-[40px] font-semibold leading-[normal] tracking-[-1%] text-[#333333] sm:text-[#364153] sm:text-[64px]">
            Where data and creativity come together.
          </h1>

          <p className="text-xl leading-[normal] tracking-[-1%] text-[#737F8B] sm:text-[#364153]">
            The fastest way to build and deploy websites with resusable
            components.
          </p>
        </div>

        <div className="flex w-fit items-center gap-9">
          <button className="rounded-[39px] bg-[#295E48] px-9 py-4 leading-[normal] font-semibold text-[#F6F7FB]">
            GET STARTED
          </button>
          <span className="leading-[normal] font-semibold tracking-[-1%] text-[#737F8B] sm:text-[#364153]">
            VIEW DEMO
          </span>
        </div>
      </div>
    </div>
  );
};

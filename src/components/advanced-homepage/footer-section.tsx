import Image from "next/image";

export const FooterSection = () => {
  return (
    <div className="bg-[#161739]">
      <div className="mx-auto w-full max-w-337.5 space-y-9 px-6 py-10 sm:px-18 sm:py-24">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h4 className="text-4xl leading-[normal] font-semibold tracking-[-1%] text-[#F6F7FB]">
              Always with the legendary customer{" "}
              <span className="text-[#5DB082]">experience.</span>
            </h4>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-10 md:flex-row md:gap-30">
              <div className="flex flex-col gap-6">
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Overview
                </span>
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Glossary
                </span>
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  FAQ
                </span>
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Style Guide
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Colours
                </span>
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Typography
                </span>
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Shadow
                </span>
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Avatar
                </span>
                <span className="text-[18px] leading-[100%] text-[#F6F7FB]">
                  Buttons
                </span>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/advanced-homepage/full-logo.svg"
          alt="Full Logo"
          width={120}
          height={36}
          loading="lazy"
        />
      </div>
    </div>
  );
};

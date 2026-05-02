import { ProcessList } from "@/components/process-page/process-list";
import { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Process Page",
  description: "Process Page Challenge from devchallenges.io",
};

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
});

export default function ProcessPage() {
  return (
    <main className={`min-h-screen ${redHatDisplay.className} relative`}>
      <div className="absolute top-0 left-0 w-full h-20 sm:h-[191px] bg-[url('/process-page/background-small.png')] sm:bg-[url('/process-page/background-png.png')] bg-no-repeat bg-center bg-cover"></div>
      <div className="max-w-7xl mx-auto pt-3 pl-5 sm:pl-[75px] lg:px-[75px]">
        <div className="mt-[69px] sm:mt-[189px] mb-10 sm:mb-20 pl-5 space-y-5 sm:space-y-5">
          <h4 className="text-2xl font-extrabold tracking-wider text-[#6B59D0]">
            Our Process
          </h4>
          <h6 className="max-w-md sm:max-w-screen-sm text-3xl sm:text-5xl leading-[1.400] sm:leading-[1.320] font-extrabold tracking-tighter sm:tracking-[-3px] text-[#374151]">
            Easy And Perfect Solution For Your Business App
          </h6>
        </div>
        <ProcessList />
      </div>
    </main>
  );
}

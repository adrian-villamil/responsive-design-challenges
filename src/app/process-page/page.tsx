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
      <div className="absolute top-0 left-0 h-20 w-full bg-[url('/process-page/background-small.png')] bg-cover bg-center bg-no-repeat sm:h-47.75 sm:bg-[url('/process-page/background-png.png')]"></div>
      <div className="mx-auto max-w-7xl pt-3 pl-5 sm:pl-18.75 lg:px-18.75">
        <div className="mt-17.25 mb-10 space-y-5 pl-5 sm:mt-47.25 sm:mb-20 sm:space-y-5">
          <h4 className="text-2xl font-extrabold tracking-wider text-[#6B59D0]">
            Our Process
          </h4>
          <h6 className="max-w-md text-3xl leading-[1.400] font-extrabold tracking-tighter text-[#374151] sm:max-w-(--breakpoint-sm) sm:text-5xl sm:leading-[1.320] sm:tracking-[-3px]">
            Easy And Perfect Solution For Your Business App
          </h6>
        </div>
        <ProcessList />
      </div>
    </main>
  );
}

import { Inter } from "next/font/google";
import Link from "next/link";

const interFont = Inter({
  subsets: ['latin']
});

export default function SimpleFaqPage() {
  return (
    <main className={`${interFont.className}`}>
      <div className="pt-[75px] pb-[70px] space-y-[15px]">
        <h1 className="text-4xl font-bold text-center tracking-[-0.5px]">Frequently Asked Questions</h1>
        <p className="text-center font-medium tracking-[-0.2px]">Browse through the most frequently asked questions</p>
      </div>
      <div className="py-[71px] bg-[#F8FAFC]">
        <div className="w-full xl:max-w-screen-xl mx-auto px-5 lg:px-48 xl:px-80 divide-y divide-[#D2D5DA]">
          <section className="pb-[37px]">
            <h1 className="text-2xl font-bold tracking-[-0.35px] mb-[27px]">How can I track my order?</h1>
            <p className="font-medium tracking-[-0.25px] mb-[26px]">You can track your order using the following steps:</p>
            <div className="ml-1 mb-[25px] font-medium space-y-2">
              <div className="flex gap-[5px]">
                <span>1.</span>
                <p className="tracking-[-0.3px]">Go to the Order <Link href={'#'} className="text-[#4E80EE] font-normal">Tracking page</Link>.</p>
              </div>
              <div className="flex gap-[5px]">
                <span>2.</span>
                <p className="tracking-[-0.3px]">Enter your order number and email address.</p>
              </div>
              <div className="flex gap-[5px]">
                <span>3.</span>
                <p className="tracking-[-0.3px]">Click on the Track Order button to view the current status of your shipment.</p>
              </div>
            </div>
            <p className="font-medium tracking-[-0.26px]">If you encounter any issues, please visit our <Link href={'#'} className="text-[#4E80EE] font-normal">Help Center</Link>.</p>
          </section>
          <section className="pt-[39px]">
            <h1 className="text-2xl font-bold tracking-[-0.35px] mb-[27px]">What is your return policy?</h1>
            <p className="font-medium tracking-[-0.25px] mb-[23px]">We offer a 30-day return policy on most items. Here are some key points:</p>
            <div className="ml-2 mb-5 font-medium space-y-[1px]">
              <div className="flex gap-[7.5px]">
                <span className="leading-loose tracking-[-0.3px]">•</span>
                <p className="tracking-[-0.3px] leading-loose"><span className="font-bold">Items must be in original condition:</span> Unworn, unused, and unwashed.</p>
              </div>
              <div className="flex gap-[7.5px]">
                <span className="leading-loose tracking-[-0.3px]">•</span>
                <p className="tracking-[-0.3px] leading-loose"><span className="font-bold">Include original packaging and tags:</span> All items should be returned with their original packaging and tags.</p>
              </div>
              <div className="flex gap-[7.5px]">
                <span className="leading-loose tracking-[-0.3px]">•</span>
                <p className="tracking-[-0.3px] leading-loose"><span className="font-bold">Proof of purchase:</span> A receipt or proof of purchase is required.</p>
              </div>
            </div>
            <p className="font-medium tracking-[-0.26px]">For more detailed information, read our full <Link href={'#'} className="text-[#4E80EE] font-normal">Return Policy</Link>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Simple Product Page",
  description: "Simple Product Page Challenge from devchallenges.io",
};

const outfit = Outfit({ subsets: ["latin"], preload: false });

export default function SimpleProductPage() {
  return (
    <main
      className={`mx-auto min-h-screen w-full max-w-7xl p-4.5 md:p-9 ${outfit.className}`}
    >
      <div className="flex flex-col items-start gap-x-13 gap-y-7 md:flex-row">
        <div className="w-full flex-1 md:max-w-118">
          <Image
            src="/simple-product-page/shoe_image@2x.jpg"
            alt="Shoe Image"
            width={472}
            height={646}
            loading="eager"
            className="hidden rounded-sm md:block"
          />

          <Image
            src="/simple-product-page/shoe_image@3x.jpg"
            alt="Shoe Image"
            width={708}
            height={969}
            loading="eager"
            className="block md:hidden"
          />
        </div>

        <div className="flex-1">
          <div className="space-y-6 md:space-y-10">
            <p className="text-sm leading-[normal] tracking-[-1%] text-[#394150]">
              <span className="font-medium text-black">Home</span>
              {" - "}
              <span className="font-medium text-black">Products</span>
              {" - "}
              <span>Sneakers</span>
            </p>

            <div className="space-y-6">
              <h1 className="w-full text-[32px] leading-[normal] font-semibold tracking-[-1%] md:max-w-sm">
                Nike Air Zoom Pegasus 38 for Running Men
              </h1>
              <p className="tracking-[-1%]">
                The Nike Air Zoom Pegasus 38 is a high-performance running shoe
                designed for speed and agility. With its lightweight and
                responsive midsole, this shoe provides a smooth ride and
                excellent cushioning. The Pegasus 38 features a full-length Zoom
                Air unit for added bounce and a more natural stride. The upper
                is made of a breathable mesh material with a supportive Flyknit
                construction for a snug and comfortable fit.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold tracking-[-1%]">
                Hightlights:
              </h4>

              <ul className="space-y-2 pl-2">
                <li className="relative pl-4 tracking-[-1%] before:absolute before:top-0 before:left-0 before:content-['•']">
                  Lightweight and Responsive Midsole.
                </li>
                <li className="relative pl-4 tracking-[-1%] before:absolute before:top-0 before:left-0 before:content-['•']">
                  Full-Length Zoom Air Unit.
                </li>
                <li className="relative pl-4 tracking-[-1%] before:absolute before:top-0 before:left-0 before:content-['•']">
                  Breathable Mesh Uppe.
                </li>
              </ul>
            </div>

            <div className="flex w-full items-center rounded-lg bg-[#F3F4F6] px-6 py-3 md:max-w-98">
              <div className="grid w-full max-w-58.5 grid-cols-2 gap-1.5 md:max-w-none">
                <span className="text-sm font-light text-[#394150]">COLOR</span>
                <span className="text-sm font-light text-[#394150]">SIZE</span>
                <span className="font-semibold">Black</span>
                <span className="font-semibold">42</span>
              </div>

              <span className="font-semibold md:text-[32px]">$59.00</span>
            </div>

            <div className="flex items-center gap-5">
              <button className="w-full cursor-pointer rounded-sm border border-[#652CD1] bg-[#652CD1] px-8 py-2 text-white transition-all hover:bg-[#5a24b0] md:w-fit">
                Add to cart
              </button>

              <button className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-[#D2D5DA] px-8 py-2 font-semibold transition-all hover:bg-[#F3F4F6] md:w-fit">
                <Image
                  src="/simple-product-page/heart.svg"
                  alt="Heart Icon"
                  width={20}
                  height={20}
                  loading="eager"
                  className="size-5"
                />
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

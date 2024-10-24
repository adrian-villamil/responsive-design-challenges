import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinFont = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function JoinOurNewsletterPage() {
  return (
    <main className={`h-screen flex flex-col items-center px-2 ${poppinFont.className} bg-[#F9FAFB]`}>
      <Image
        src={'/join-our-newsletter/logo-newsletter.svg'}
        alt="logo"
        width={52}
        height={52}
        priority
        className="mt-20"
      />
      <h1 className="text-5xl font-semibold mt-7 mb-6">Join our newsletter</h1>
      <p className="max-w-[700px] text-xl text-center text-[#6C727F] leading-[1.9rem]">Keep up with our latest collections, exclusive deals, and special offers!</p>
      <p className="max-w-[700px] text-xl text-center text-[#6C727F] leading-[1.9rem]">We introduce a new collection every week, so stay tuned to snag the hottest items just for you.</p>
      <form className="w-[560px] flex flex-col bg-white mt-14 p-6 rounded-2xl shadow-lg space-y-6">
        <input
          type="email"
          name="my-email"
          id="my-email"
          placeholder="Enter your email address"
          className="p-4 border rounded-xl text-center placeholder:tracking-tight placeholder:font-medium placeholder:text-[#6C727F] bg-[#F9FAFB]"
        />
        <button className="p-4 rounded-xl tracking-tight text-white font-medium bg-[#3662E3]">Subscribe now</button>
        <p className="text-sm text-center text-[#6C727F]">Your email is 100% confidential and won’t send you any spam.</p>
      </form>
    </main>
  );
}
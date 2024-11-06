import Image from "next/image";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ArticleList } from "@/components/simple-article-listing/article-list";

export const metadata: Metadata = {
  title: 'Simple Article Listing',
  description: 'Simple Article Listing Challenge from devchallenges.io',
};

const poppinFont = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function SimpleArticleListingPage() {
  return (
    <main className={`h-screen px-8 ${poppinFont.className} bg-[#F8FAFC]`}>
      <section className="max-w-[736px] mx-auto">
        <h1 className="w-[600px] mx-auto mt-11 text-4xl text-center font-semibold leading-normal -tracking-[0.35px]">We release interesting articles about technology</h1>
        <Image
          src={'/simple-article-listing/Seperator.svg'}
          alt="seperator"
          width={180}
          height={16}
          priority
          className="mt-[41px] mx-auto mb-[42px]"
        />
        <ArticleList />
      </section>
    </main>
  );
}
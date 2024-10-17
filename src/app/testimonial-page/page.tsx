import { Sora } from "next/font/google";
import { Card } from "@/challenges/testimonial-page/components/card";
import { MdxImage as Image } from "@/challenges/testimonial-page/components/mdx-image";
import { CheckList, CheckListItem } from "@/challenges/testimonial-page/components/check-list";
import GoogleIcon from "@/challenges/testimonial-page/assets/google-testimonial.png";
import MetaIcon from "@/challenges/testimonial-page/assets/meta-testimonial.png";

const sora = Sora({
  subsets: ['latin'],
});

export default function TestimonialPage() {
  return (
    <main className={`h-screen bg-[#FAFAF9] ${sora.className}`}>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-16 pt-24 md:pt-36 pb-16 md:pb-0 flex flex-col md:flex-row gap-y-16 md:gap-x-6">
        <div className="space-y-8 flex-1">
          <div className="">
            <div className="w-11 h-11 rounded-full flex justify-center items-center bg-[#F5C044]">⭐️</div>
            <h1 className="mt-5 mb-4 font-bold text-4xl">Reviewers</h1>
            <p className="text-xl text-[#52525A] leading-relaxed">Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.</p>
          </div>
          <CheckList>
            <CheckListItem text="Checklist to Review an Academic Paper" />
            <CheckListItem text="Peer Review Checklist" />
            <CheckListItem text="Checklist for Editors, Reviewers, and Authors of SPIE Journals" />
          </CheckList>
        </div>
        <div className="flex-1 space-y-9">
          <Card
            rating={4}
            testimonialIcon={
              <Image
                src={GoogleIcon}
                alt="google-icon"
                className="w-[90px]"
                priority
              />
            }
            testimonialName="Samantha Lee"
            testimonialComment="The checklist ensures that the review process is thorough"
            className="float-right"
          />
          <Card
            rating={5}
            testimonialIcon={
              <Image
                src={MetaIcon}
                alt="meta-icon"
                className="w-20"
                priority
              />
            }
            testimonialName="Rachel Patel"
            testimonialComment="I highly recommend the Writecream Business Description"
            className="float-left"
          />
        </div>
      </div>
    </main>
  );
}
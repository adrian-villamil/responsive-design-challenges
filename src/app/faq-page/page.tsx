import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@/components/faq-page/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/faq-page/tabs";
import { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

export const metadata: Metadata = {
  title: "FAQ Page",
  description: "FAQ Page Challenge from devchallenges.io",
};

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FaqPage() {
  const getAccordionLabel = (label: React.ReactNode) => (
    <p className="text-xl font-medium">{label}</p>
  );

  const getAccordionBody = (body: React.ReactNode) => (
    <p className="tracking-[-0.020em] text-balance text-[#CDD5E0]">{body}</p>
  );

  return (
    <main
      className={`min-h-screen ${beVietnamPro.className} bg-[#12111F] text-[#F2F5F9]`}
    >
      <div className="mt-1.25 flex h-60 items-center justify-center bg-[url('/faq-page/faq-title-bg@2x.png')] bg-auto bg-center bg-no-repeat sm:h-74 sm:bg-[url('/faq-page/faq-title-bg.svg')]">
        <h1 className="w-full text-center text-4xl leading-14 font-bold tracking-[-0.010em] text-[#97A3B6] sm:max-w-107.5 sm:text-5xl sm:leading-18">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="mt-5 flex flex-col items-center gap-y-2.25">
        <h4 className="w-9/10 text-center text-xl font-medium tracking-[-0.003em] sm:w-full">
          Products, Website or Brand Design, we’ve got you covered!
        </h4>
        <p className="w-9/10 text-center tracking-[-0.0094em] text-[#97A3B6] sm:w-full">
          Give us your questions, and we can help you achieve our goals
          together!
        </p>
      </div>

      <Tabs defaultValue="overview" className="mt-10">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="design-system">Design System</TabsTrigger>
          <TabsTrigger value="brand-design">Brand Design</TabsTrigger>
          <TabsTrigger value="develop-website">Develop Website</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-5">
            <Accordion>
              <AccordionSummary>
                {getAccordionLabel(<>How does it work?</>)}
              </AccordionSummary>

              <AccordionDetails>
                {getAccordionBody(
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae reiciendis laborum ad non impedit incidunt? Qui
                    officia, error reiciendis aspernatur, deserunt tempore odit
                    voluptates quo libero temporibus hic doloribus debitis?
                  </>,
                )}
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                {getAccordionLabel(<>Which platform do you support?</>)}
              </AccordionSummary>

              <AccordionDetails>
                {getAccordionBody(
                  <>
                    In a situational interview, the interviewer may ask how you
                    overcame a difficult situation and what you learned from it.
                    You can use your response to demonstrate your flexibility
                    and share an example of how you transformed a negative
                    experience into a positive outcome{" "}
                  </>,
                )}
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                {getAccordionLabel(<>How do I invite my teammates?</>)}
              </AccordionSummary>

              <AccordionDetails>
                {getAccordionBody(
                  <>
                    Collect the contact information of your teammates, including
                    their email addresses or usernames on the platform you will
                    use.
                  </>,
                )}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                {getAccordionLabel(<>Do you have annual plan?</>)}
              </AccordionSummary>

              <AccordionDetails>
                {getAccordionBody(
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, nobis minus temporibus est esse delectus et
                    voluptatibus ex illo ea iste earum voluptas architecto cum
                    similique illum nemo, distinctio hic!
                  </>,
                )}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                {getAccordionLabel(<>How to create new workspace</>)}
              </AccordionSummary>

              <AccordionDetails>
                {getAccordionBody(
                  <>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis inventore praesentium doloribus, tempora sequi
                    distinctio autem totam alias illum cum cupiditate numquam
                    explicabo culpa a aspernatur eligendi quae omnis odio.
                  </>,
                )}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                {getAccordionLabel(<>How do I set roles & permissions?</>)}
              </AccordionSummary>

              <AccordionDetails>
                {getAccordionBody(
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde aliquid sapiente illo, reprehenderit neque ex facere
                    dolorem! Distinctio nam voluptatem nihil architecto, commodi
                    ducimus rerum saepe quos, maxime excepturi assumenda.
                  </>,
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="design-system">
          <Accordion defaultExpanded>
            <AccordionSummary>
              {getAccordionLabel(<>Design System Content</>)}
            </AccordionSummary>

            <AccordionDetails>
              {getAccordionBody(
                <>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis blanditiis quibusdam quas aliquid voluptatum culpa
                  deserunt beatae sit velit, officia ullam obcaecati at omnis
                  vel, asperiores, minima quia. Officiis, maiores.
                </>,
              )}
            </AccordionDetails>
          </Accordion>
        </TabsContent>

        <TabsContent value="brand-design">
          <Accordion defaultExpanded>
            <AccordionSummary>
              {getAccordionLabel(<>Brand Design Content</>)}
            </AccordionSummary>

            <AccordionDetails>
              {getAccordionBody(
                <>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, reiciendis obcaecati iste ullam saepe omnis delectus
                  vel quisquam soluta id iusto a. Inventore qui tempore quo
                  iusto cupiditate a? Iusto.
                </>,
              )}
            </AccordionDetails>
          </Accordion>
        </TabsContent>

        <TabsContent value="develop-website">
          <Accordion>
            <AccordionSummary>
              {getAccordionLabel(<>Develop Website Content</>)}
            </AccordionSummary>

            <AccordionDetails>
              {getAccordionBody(
                <>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis vero non doloremque perferendis itaque sunt
                  dignissimos alias similique incidunt nulla fugiat quidem nemo
                  tempore iste, temporibus dolore unde provident doloribus?
                </>,
              )}
            </AccordionDetails>
          </Accordion>
        </TabsContent>
      </Tabs>
    </main>
  );
}

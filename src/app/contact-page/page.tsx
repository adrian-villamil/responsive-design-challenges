import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
import { Form } from "@/components/contact-page/form";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function ContactPage() {
  return (
    <main className={`relative ${beVietnamPro.className} bg-[url('/contact-page/bg-image.svg')] bg-no-repeat bg-center bg-fixed bg-cover pb-20 lg:pb-24 px-[22px] lg:px-8`}>
      <h1 className="text-5xl xl:text-[64px] text-center text-white font-bold leading-tight xl:leading-tight max-w-xl mx-auto mt-24">Interested in our business pricing?</h1>
      <p className="text-xl xl:text-[32px] text-center text-white leading-normal max-w-md xl:max-w-2xl mx-auto mt-4">
        {`Fill out the form to view details and we’ll contact you as soon as possible.`}
      </p>
      <Image
        src={'/contact-page/contact-form-icon.svg'}
        alt="contact-icon"
        width={99}
        height={30}
        className="absolute top-5 lg:left-[30px] xl:left-16"
        priority
      />
      <Form />
    </main>
  );
}
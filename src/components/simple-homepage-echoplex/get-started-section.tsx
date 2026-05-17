export const GetStartedSection = () => {
  return (
    <section className="mt-18 flex h-135 w-full flex-col items-center justify-center gap-6 bg-[url('/simple-homepage-echoplex/footer_background_image.png')] bg-cover bg-center bg-no-repeat">
      <h2 className="mx-auto max-w-sm text-center text-[32px] font-bold text-white">
        Begin your digital art journey with EchoPlex
      </h2>
      <button className="cursor-pointer rounded-4xl border-[#4138C2] bg-[#4138C2] px-9 py-3 leading-[normal] font-bold tracking-[-1%] text-white transition-colors hover:bg-[#3a31a8]">
        Create
      </button>
    </section>
  );
};

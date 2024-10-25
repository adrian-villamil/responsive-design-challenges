import Image from "next/image";

interface Props {
  avatarContent: string;
  avatarColor: string
  title: string;
  description: string;
  image: string;
}

export const SectionListCard = ({ avatarContent, avatarColor, title, description, image }: Props) => {
  return (
    <div className="w-[315px] p-6 rounded-2xl bg-[#212936] hover:shadow-md hover:shadow-[#9DA3AE] transition-all">
      <span
        style={{ backgroundColor: avatarColor }}
        className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-xl hover:animate-spin"
      >
        {avatarContent}
      </span>
      <h1 className="mt-4 mb-3 text-xl text-[#E5E7EB]">{title}</h1>
      <p className="mb-4 text-[#9DA3AE]">{description}</p>
      <Image
        src={image}
        alt="section-image"
        width={267}
        height={193}
        className="rounded-xl"
      />
    </div>
  );
};
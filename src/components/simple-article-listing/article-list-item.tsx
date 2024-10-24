import Image from "next/image";

interface Props {
  title: string;
  publishedAt: string;
  image: string;
}

export const ArticleListItem = ({ title, publishedAt, image }: Props) => {
  return (
    <div className="flex items-center gap-x-[60px]">
      <Image
        src={image}
        alt="article-image"
        width={160}
        height={160}
        priority
        className="rounded-xl hover:scale-105 transition-all"
      />
      <article className="space-y-4">
        <h1 className="text-xl font-bold leading-[1.9rem] -tracking-[0.3px]">{title}</h1>
        <p className="text-sm font-medium text-[#6C727F] -tracking-[0.15px]">{publishedAt}</p>
      </article>
    </div>
  );
};
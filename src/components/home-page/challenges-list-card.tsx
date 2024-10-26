import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  pathname: string;
  challengeUrl: string;
}

export const ChallengesListCard = ({ image, title, pathname, challengeUrl }: Props) => {
  return (
    <div className="w-96 flex flex-col border rounded-xl overflow-hidden shadow-lg divide-y bg-white">
      <Image
        src={image}
        alt={title}
        width={1280}
        height={945}
        className="w-full"
      />
      <div className="flex-1 flex flex-col justify-between p-6 space-y-4">
        <h1 className="text-base font-semibold">{title}</h1>
        <div className="flex gap-6">
          <Link
            href={pathname}
            className="flex-1 flex justify-center items-center gap-4 px-4 py-2 rounded-lg border text-sm hover:bg-neutral-100 transition-colors"
          >
            <Image
              src={'/challenges/eye.svg'}
              alt="eye-icon"
              width={20}
              height={20}
            />
            View
          </Link>
          <Link
            href={challengeUrl}
            target="_blank"
            className="flex-1 flex justify-center items-center gap-4 px-4 py-2 rounded-lg text-sm text-white bg-black/85 hover:bg-black/75 transition-colors"
          >
            <Image
              src={'/challenges/external-link.svg'}
              alt="external-link-icon"
              width={20}
              height={20}
            />
            Practice
          </Link>
        </div>
      </div>
    </div>
  );
};
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  pathname: string;
  challengeUrl: string;
}

export const ChallengesListCard = ({
  image,
  title,
  pathname,
  challengeUrl,
}: Props) => {
  return (
    <div className="flex w-96 flex-col divide-y overflow-hidden rounded-xl border bg-white shadow-lg">
      <Image
        src={image}
        alt={title}
        width={1280}
        height={945}
        loading="eager"
        className="w-full"
      />
      <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
        <h1 className="text-base font-semibold">{title}</h1>
        <div className="flex gap-6">
          <Link
            href={pathname}
            className="flex flex-1 items-center justify-center gap-4 rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-neutral-100"
          >
            <Image
              src={"/challenges/eye.svg"}
              alt="eye-icon"
              width={20}
              height={20}
              loading="eager"
            />
            View
          </Link>
          <Link
            href={challengeUrl}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-4 rounded-lg bg-black/85 px-4 py-2 text-sm text-white transition-colors hover:bg-black/75"
          >
            <Image
              src={"/challenges/external-link.svg"}
              alt="external-link-icon"
              width={20}
              height={20}
              loading="eager"
            />
            Practice
          </Link>
        </div>
      </div>
    </div>
  );
};

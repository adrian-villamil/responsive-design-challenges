import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { OpenMenuButton } from "./open-menu-button";

const anchors = [
  { label: 'About us' },
  { label: 'Product' },
  { label: 'Resource' },
  { label: 'Contact' },
];

export const Navbar = () => {
  return (
    <div className="relative h-20 flex items-center justify-between">
      <Image
        src={'/simple-homepage/alarado-icon-homepage.svg'}
        alt="alarado-icon-homepage"
        width={141}
        height={24}
        priority
        className="block dark:hidden"
      />
      <Image
        src={'/simple-homepage/alarado-icon-homepage-dark.svg'}
        alt="alarado-icon-homepage"
        width={141}
        height={24}
        priority
        className="hidden dark:block"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-10 hidden lg:block">
        {anchors.map((anchor) => (
          <Link
            key={anchor.label}
            href={'#'}
            className="text-sm font-semibold text-[#223344]/70 dark:text-[#F2F9FE]/40 first:text-[#223344] dark:first:text-white"
          >
            {anchor.label}
          </Link>
        ))}
      </div>
      <div className="hidden lg:inline-block">
        <ThemeToggle />
      </div>
      <OpenMenuButton />
    </div>
  );
};
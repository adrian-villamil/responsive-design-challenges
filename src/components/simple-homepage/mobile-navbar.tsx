'use client';

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CloseMenuButton } from "./close-menu-button";
import clsx from "clsx";
import { useUIStore } from "@/store/simple-homepage/ui-store";

const anchors = [
  { label: 'About us' },
  { label: 'Product' },
  { label: 'Resource' },
  { label: 'Contact' },
];

export const MobileNavbar = () => {
  const isMobileMenuOpen = useUIStore(state => state.isMobileMenuOpen);
  const closeMobileMenu = useUIStore(state => state.closeMobileMenu);

  return (
    <div>
      {isMobileMenuOpen && <div className="fixed top-0 left-0 w-screen h-screen" onClick={closeMobileMenu}></div>}
      <div className={clsx(
        "fixed top-0 right-0 w-[410px] h-screen bg-white dark:bg-[#909193] transition-all",
        {
          'translate-x-full': !isMobileMenuOpen
        }
      )}>
        <div className="after:clear-both after:table pt-4 pr-4">
          <CloseMenuButton />
        </div>
        <div className="flex flex-col gap-y-14 mt-10 mb-11">
          {anchors.map((anchor) => (
            <Link
              key={anchor.label}
              href={'#'}
              className="text-5xl text-center font-semibold text-[#223344]/70 dark:text-[#F2F9FE]/40 first:text-[#223344] dark:first:text-white"
            >
              {anchor.label}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
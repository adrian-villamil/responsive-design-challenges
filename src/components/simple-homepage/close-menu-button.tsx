'use client';

import { useUIStore } from "@/store/simple-homepage/ui-store";

export const CloseMenuButton = () => {
  const closeMenu = useUIStore(state => state.closeMobileMenu);
  
  return (
    <button className="float-right px-2 py-4" onClick={closeMenu}>
      <div className="w-5.5 h-0.75 rounded-sm bg-[#223344] dark:bg-[#909193] translate-y-[1.5px] rotate-45"></div>
      <div className="w-5.5 h-0.75 rounded-sm bg-[#223344] dark:bg-[#909193] translate-y-[-1.5px] -rotate-45"></div>
    </button>
  );
};
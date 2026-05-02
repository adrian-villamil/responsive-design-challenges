'use client';

import { useUIStore } from "@/store/simple-homepage/ui-store";

export const OpenMenuButton = () => {
  const openMenu = useUIStore(state => state.openMobileMenu);
  
  return (
    <button className="space-y-1 lg:hidden" onClick={openMenu}>
      <div className="w-5.5 h-0.75 rounded-sm bg-[#223344] dark:bg-[#909193]"></div>
      <div className="w-5.5 h-0.75 rounded-sm bg-[#223344] dark:bg-[#909193]"></div>
      <div className="w-5.5 h-0.75 rounded-sm bg-[#223344] dark:bg-[#909193]"></div>
    </button>
  );
};
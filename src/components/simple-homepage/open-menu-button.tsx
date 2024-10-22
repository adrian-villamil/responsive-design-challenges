'use client';

import { useUIStore } from "@/store/simple-homepage/ui-store";

export const OpenMenuButton = () => {
  const openMenu = useUIStore(state => state.openMobileMenu);
  
  return (
    <button className="space-y-1 lg:hidden" onClick={openMenu}>
      <div className="w-[22px] h-[3px] rounded bg-[#223344] dark:bg-[#F2F9FE]/40"></div>
      <div className="w-[22px] h-[3px] rounded bg-[#223344] dark:bg-[#F2F9FE]/40"></div>
      <div className="w-[22px] h-[3px] rounded bg-[#223344] dark:bg-[#F2F9FE]/40"></div>
    </button>
  );
};
'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTheme(checked ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <label
      className="relative inline-block w-12 h-6"
    >
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0 peer"
        checked={resolvedTheme === 'dark' ? true : false}
        onChange={handleChange}
      />
      <span
        className={`
          absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-3xl bg-[#223344] transition-all
          before:absolute before:w-5 before:h-5 before:right-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-all
          peer-checked:before:bg-white peer-checked:before:-translate-x-6
        `}
      ></span>
      <span className="w-5 h-5 cursor-pointer absolute top-[2px] right-[2px] rounded-full bg-[url('/simple-homepage/Sun_fill.svg')] peer-checked:bg-[url('/simple-homepage/Sun_fill_light.svg')] bg-center bg-[length:18px_18px] transition-all"></span>
      <span className="w-5 h-5 cursor-pointer absolute top-[2px] left-[2px] rounded-full bg-[url('/simple-homepage/Moon_fill_light.svg')] peer-checked:bg-[url('/simple-homepage/Moon_fill.svg')] bg-center bg-[length:18px_18px] transition-all"></span>
    </label>
  );
};
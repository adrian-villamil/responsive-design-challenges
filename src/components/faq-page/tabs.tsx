"use client";

import { createContext, useContext, useState } from "react";
import clsx from "clsx";

interface TabsContextType {
  activeValue: string | null;
  setActiveValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs>");
  }

  return context;
};

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

export const Tabs = ({ defaultValue, className, children }: TabsProps) => {
  const [activeValue, setActiveValue] = useState(defaultValue);

  return (
    <div className={className}>
      <TabsContext.Provider value={{ activeValue, setActiveValue }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList = ({ children }: TabsListProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const { activeValue, setActiveValue } = useTabsContext();

  const isActive = value === activeValue;

  return (
    <button
      className={clsx(
        "cursor-pointer rounded-3xl px-5 py-2 text-sm leading-normal",
        isActive &&
          "relative overflow-hidden bg-[#2A2936] before:absolute before:-bottom-0.75 before:left-1/2 before:block before:-translate-1/2 before:border-x-[4em] before:border-y-2 before:border-transparent before:border-b-[#F2F5F9]",
      )}
      onClick={() => setActiveValue(value)}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const TabsContent = ({ value, children }: TabsContentProps) => {
  const { activeValue } = useTabsContext();

  const isActive = value === activeValue;

  if (!isActive) return null;

  return (
    <div className="mx-auto mt-20 w-full max-w-207.5 px-2.5">{children}</div>
  );
};

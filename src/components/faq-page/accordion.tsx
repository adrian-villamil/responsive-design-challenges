"use client";

import clsx from "clsx";
import { createContext, useContext, useState } from "react";
import { ExpandDownIcon } from "./expand-down-icon";

interface AccordionContextType {
  expanded: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion components must be inside <Accordion>");
  }

  return context;
};

interface AccordionProps {
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const Accordion = ({
  defaultExpanded = false,
  children,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleAccordionClick = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div
      className={clsx(
        "cursor-pointer space-y-2 overflow-hidden rounded-3xl px-8 py-2 transition-all",
        expanded && "bg-[#2A2936] py-7",
      )}
      onClick={handleAccordionClick}
    >
      <AccordionContext.Provider value={{ expanded }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

interface AccordionSummaryProps {
  children: React.ReactNode;
}

export const AccordionSummary = ({ children }: AccordionSummaryProps) => {
  const { expanded } = useAccordionContext();

  return (
    <div className="flex items-center justify-between">
      {children}
      <ExpandDownIcon
        className={clsx(
          "h-6 w-6 transition-all",
          expanded && "-rotate-180 text-[#97A3B6]",
        )}
      />
    </div>
  );
};

interface AccordionDetailsProps {
  children: React.ReactNode;
}

export const AccordionDetails = ({ children }: AccordionDetailsProps) => {
  const { expanded } = useAccordionContext();

  return (
    <div
      className={clsx(
        "h-0 overflow-hidden transition-all",
        expanded && "h-fit",
      )}
    >
      {children}
    </div>
  );
};

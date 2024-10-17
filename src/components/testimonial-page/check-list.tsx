import Image from "next/image";
import CheckListIcon from "@/assets/images/Done_ring_round_fill.svg";

interface CheckListItemProps {
  text: string;
}

export const CheckListItem = ({ text }: CheckListItemProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src={CheckListIcon}
        alt="check-list-icon"
      />
      <p className="text-sm text-[#52525A]">{text}</p>
    </div>
  );
};

interface CheckListProps {
  children: React.ReactNode;
}

export const CheckList = ({ children }: CheckListProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {children}
    </div>
  );
};
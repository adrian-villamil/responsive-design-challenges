import Image from "next/image";

interface CheckListItemProps {
  text: string;
}

export const CheckListItem = ({ text }: CheckListItemProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src={'/testimonial-page/Done_ring_round_fill.svg'}
        alt="check-list-icon"
        width={24}
        height={24}
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
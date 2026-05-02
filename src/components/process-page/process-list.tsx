import Image from "next/image";

const processList = [
  {
    title: "47+ Components",
    description: (
      <>
        Save time and build products with{" "}
        <span className="font-semibold text-[#6B59D0]">
          well-organized and customizable
        </span>{" "}
        desktop components for Figma.
      </>
    ),
    iconUrl: "/process-page/process-icon-1.svg",
  },
  {
    title: "Documentation",
    description: (
      <>
        Developer handoff made easy. Component and style guide documentation for
        your team in{" "}
        <span className="font-semibold text-[#6B59D0]">one place</span>.
      </>
    ),
    iconUrl: "/process-page/process-icon-2.svg",
  },
  {
    title: "Design faster",
    description: (
      <>
        Stop wasting time on creating everything from scratch for{" "}
        <span className="font-semibold text-[#6B59D0]">every new project</span>{" "}
        you start.
      </>
    ),
    iconUrl: "/process-page/process-icon-3.svg",
  },
  {
    title: "Customize",
    description: (
      <>
        Easily apply your branding by changing font, color and{" "}
        <span className="font-semibold text-[#6B59D0]">
          component properties
        </span>
        .
      </>
    ),
    iconUrl: "/process-page/process-icon-4.svg",
  },
];

export const ProcessList = () => {
  return (
    <div className="pl-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7 sm:gap-y-6">
      {processList.map((item) => (
        <ProcessListItem key={item.title} {...item} />
      ))}
    </div>
  );
};

interface ProcessListItemProps {
  title: string;
  description: React.ReactNode;
  iconUrl: string;
}

const ProcessListItem = ({
  title,
  description,
  iconUrl,
}: ProcessListItemProps) => {
  return (
    <div className="group flex flex-col gap-y-8 before:absolute before:top-0 before:-z-10 before:h-full before:-translate-x-5 before:border-l-2 before:border-dashed">
      <div className="flex align-middle">
        <Image src={iconUrl} alt="process_icon" width={52} height={52} />
      </div>
      <div className="space-y-5">
        <h6 className="text-lg text-[#374151] font-extrabold tracking-wider leading-6 relative before:absolute before:top-0 before:-left-5 before:h-full before:border-l-2 before:border-l-[#6B59D0]">
          {title}
        </h6>
        <p className="md:w-[238px] md:group-first:w-full lg:group-first:w-[238px] text-lg tracking-wider text-[#6B7280]">
          {description}
        </p>
      </div>
    </div>
  );
};

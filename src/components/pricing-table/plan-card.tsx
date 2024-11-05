import clsx from "clsx";

interface Props {
  name: string;
  price: string;
  billingCycle: string;
  websiteNumber: string;
  serverStorage: string;
  database: string;
  unmeteredBandwidth: string;
  ssdDisk: string;
  vcpusFontworld: string;
  worldpressInstall: string;
  serverSpeed: string;
}

export const PlanCard = ({
  name,
  price,
  billingCycle,
  websiteNumber,
  serverStorage,
  database,
  unmeteredBandwidth,
  ssdDisk,
  vcpusFontworld,
  worldpressInstall,
  serverSpeed
}: Props) => {
  const isFree = name === 'Free';
  const isTeam = name === 'Team';
  const isPopular = name === 'Popular';

  return (
    <div className={clsx(
      "w-[220px] flex flex-col rounded-2xl overflow-hidden",
      isFree && 'hidden xl:block',
      isTeam && 'hidden lg:block',
      isPopular && 'bg-[#121826] order-last lg:order-none',
    )}>
      <div className="h-[210px] pt-6">
        <p className={clsx(
          "w-fit px-3 rounded-xl mx-auto text-[#3662E3] font-semibold",
          isPopular && 'text-white bg-[#3662E3]'
        )}>{name}</p>
        <h1 className={clsx(
          "mt-[5px] mb-1 text-center text-[64px] font-semibold leading-snug",
          isPopular && 'text-[#F8FAFC]',
        )}>{price}</h1>
        <p className={clsx(
          "text-[#4D5562] text-center leading-none",
          isPopular && 'text-[#E5E7EB]',
        )}>{billingCycle}</p>
      </div>
      <FeatureValue isPopular={isPopular} value={websiteNumber} />
      <FeatureValue isPopular={isPopular} value={serverStorage} />
      <FeatureValue isPopular={isPopular} value={database} />
      <FeatureValue isPopular={isPopular} value={unmeteredBandwidth} />
      <FeatureValue isPopular={isPopular} value={ssdDisk} />
      <FeatureValue isPopular={isPopular} value={vcpusFontworld} />
      <FeatureValue isPopular={isPopular} value={worldpressInstall} />
      <FeatureValue isPopular={isPopular} value={serverSpeed} />
      <div className={clsx(
        'h-[72px] flex justify-center items-center',
        isPopular && 'bg-[#E9A23B]',
      )}>
        <button className={clsx(
          'pr-5 font-semibold text-[#3662E3] [word-spacing:_0.2em] bg-[url("/pricing-table/down-arrow-1.svg")] bg-[106%] bg-no-repeat',
          isPopular && 'text-white bg-[url("/pricing-table/down-arrow.svg")]',
        )}>Get Started</button>
      </div>
    </div>
  );
};

interface FeatureValueProps {
  isPopular: boolean;
  value: string;
}

const FeatureValue = ({ isPopular, value }: FeatureValueProps) => {
  const isChecked = value === 'check';

  return (
    <div className={clsx(
      "border-b",
      isPopular && 'border-[#4D5562]/10 text-[#E5E7EB]',
    )}>
      <p className={clsx(
        "flex justify-center items-center h-[51px] bg-no-repeat bg-center",
        isChecked && "bg-[url('/pricing-table/check-1.svg')]",
        isChecked && isPopular && "bg-[url('/pricing-table/check.svg')]",
      )}>
        {!isChecked && value}
      </p>
    </div>
  );
};
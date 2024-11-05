import { PlanCard } from "./plan-card";

const plans = [
  {
    name: 'Free',
    price: '$0',
    billingCycle: 'Per month',
    websiteNumber: '01',
    serverStorage: '100 GB',
    database: '-',
    unmeteredBandwidth: '-',
    ssdDisk: '-',
    vcpusFontworld: '-',
    worldpressInstall: '-',
    serverSpeed: '-',
  },
  {
    name: 'Team',
    price: '$59',
    billingCycle: 'Per month',
    websiteNumber: '10',
    serverStorage: '500 GB',
    database: '15',
    unmeteredBandwidth: 'check',
    ssdDisk: '-',
    vcpusFontworld: '-',
    worldpressInstall: '-',
    serverSpeed: '-',
  },
  {
    name: 'Popular',
    price: '$99',
    billingCycle: 'Per month',
    websiteNumber: '50',
    serverStorage: '1 TB',
    database: 'Unlimited',
    unmeteredBandwidth: 'check',
    ssdDisk: 'check',
    vcpusFontworld: 'check',
    worldpressInstall: 'check',
    serverSpeed: 'check',
  },
  {
    name: 'Enterprise',
    price: '$299',
    billingCycle: 'Per month',
    websiteNumber: 'Unlimited',
    serverStorage: 'Unlimited',
    database: 'Unlimited',
    unmeteredBandwidth: 'check',
    ssdDisk: 'check',
    vcpusFontworld: 'check',
    worldpressInstall: 'check',
    serverSpeed: 'check',
  },
];

export const Table = () => {
  return (
    <div className="w-fit mx-auto mt-[60px] mb-[77px] flex">
      <div className="w-[235px] pt-[210px] [&_div:first-child]:rounded-tl-xl [&_div:last-child]:rounded-bl-xl">
        <Feature name="Website number" />
        <Feature name="Server storage" />
        <Feature name="Database" />
        <Feature name="Unmetered Bandwidth" />
        <Feature name="SSD Disk" />
        <Feature name="VCPUS Fontworld" />
        <Feature name="Worldpress install" />
        <Feature name="Server speed" />
      </div>
      {plans.map((plan) => (
        <PlanCard key={plan.name} {...plan} />
      ))}
    </div>
  );
};

interface FeatureProps {
  name: string;
}

const Feature = ({ name }: FeatureProps) => {
  return (
    <div className="border-b overflow-hidden">
      <p className="w-[215px] pl-3 flex justify-start items-center h-[51px] font-semibold bg-[#F8FAFC]">{name}</p>
    </div>
  );
};
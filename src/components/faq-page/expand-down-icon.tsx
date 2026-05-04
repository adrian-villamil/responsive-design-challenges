type IconProps = React.SVGProps<SVGSVGElement>;

export const ExpandDownIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 9L12 15L6 9" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
};

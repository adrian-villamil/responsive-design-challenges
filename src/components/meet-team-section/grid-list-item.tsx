interface Props {
  name: string;
  role: string;
  image: string;
  bgColor: string;
}

export const GridListItem = ({ name, role, image, bgColor }: Props) => {
  return (
    <div
      style={{
        '--bg-color': bgColor,
        '--image-url': `url('/meet-team-section/Gradient.svg'), url("${image}")`
      } as React.CSSProperties}
      className="relative bg-[image:var(--image-url)] bg-[length:100%] bg-[position:bottom,_center] bg-no-repeat hover:bg-[image:var(--image-url)] hover:bg-[length:100%,_110%] bg-[color:var(--bg-color)] transition-all"
    >
      <div className="absolute left-0 bottom-0 z-10 w-full pl-6 pb-4">
        <h1 className="text-xl font-medium text-white">{name}</h1>
        <p className="font-extralight tracking-[-0.03em] text-white">{role}</p>
      </div>
    </div>
  );
};
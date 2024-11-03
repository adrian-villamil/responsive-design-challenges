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
        '--image-url': `url("${image}")`
      } as React.CSSProperties}
      className={
        `relative bg-[image:var(--image-url)] bg-[length:100%] hover:bg-[image:var(--image-url)] hover:bg-[length:110%] bg-center bg-no-repeat bg-[color:var(--bg-color)]
        shadow-[inset_0_-120px_120px_-120px,_inset_0_-90px_90px_-90px,_inset_0_-60px_60px_-60px,_inset_0_-30px_30px_-30px,_inset_0_-10px_10px_-10px,_inset_0_-2px_2px_-2px] 
        before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:from-30% before:to-white/15 transition-all`
      }
    >
      <div className="absolute left-0 bottom-0 z-10 w-full pl-6 pb-4">
        <h1 className="text-xl font-medium text-white">{name}</h1>
        <p className="font-extralight tracking-[-0.03em] text-white">{role}</p>
      </div>
    </div>
  );
};
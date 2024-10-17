import Image, { ImageProps } from "next/image";

export const MdxImage = (props: ImageProps) => {
  return <Image {...props} alt={props.alt} />;
};
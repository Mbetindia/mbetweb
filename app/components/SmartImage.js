import Image from "next/image";

export default function SmartImage({
  src,
  alt = "image",
  width = 200,
  height = 200,
  style = {},
  ...props
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ objectFit: "cover", ...style }}
      {...props}
    />
  );
}

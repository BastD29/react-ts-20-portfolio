import React, { FC } from "react";

// interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

type ImageProps = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

const Image: FC<ImageProps> = ({ src, alt, width, height }) => {
  const styles: React.CSSProperties = {
    width: width,
    height: height,
  };

  return <img src={src} alt={alt} style={styles} />;
};

export { Image };

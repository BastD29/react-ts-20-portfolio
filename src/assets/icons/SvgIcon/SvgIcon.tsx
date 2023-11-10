import React from "react";

interface SvgIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  color1?: string;
  color2?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  width,
  height,
  className,
  color1,
  color2,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 124 124"
    className={className}
  >
    <rect width="124" height="124" rx="24" fill={color1} />
    <path
      d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z"
      fill={color2}
    />
  </svg>
);

export { SvgIcon };

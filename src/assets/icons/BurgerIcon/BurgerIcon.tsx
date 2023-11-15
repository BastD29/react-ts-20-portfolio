import { FC } from "react";
import { CustomSvgProps } from "../../../models/svg";

const BurgerIcon: FC<CustomSvgProps> = ({ color, height, width }) => (
  <svg fill={color} viewBox="0 0 24 24" width={width} height={height}>
    <path
      stroke={color}
      d="M20.989 11.997H3M20.989 18H3M21 6H3"
      fill={color}
    ></path>
  </svg>
);

export { BurgerIcon };

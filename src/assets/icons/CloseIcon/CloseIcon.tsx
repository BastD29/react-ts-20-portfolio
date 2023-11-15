import { FC } from "react";
import { CustomSvgProps } from "../../../models/svg";

const CloseIcon: FC<CustomSvgProps> = ({ color, height, width }) => (
  <svg fill={color} viewBox="0 0 24 24" width={width} height={height}>
    <path stroke={color} d="M6 18 18 6M6 6l12 12" fill={color}></path>
  </svg>
);

export { CloseIcon };

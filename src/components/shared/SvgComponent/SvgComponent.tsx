import React from "react";

// Define the props for the SvgComponent
interface SvgComponentProps {
  svg: React.ReactNode; // Accept any valid React node
  size?: number;
  className?: string;
}

// The SvgComponent that takes any SVG as a child
const SvgComponent: React.FC<SvgComponentProps> = ({
  svg,
  size = 40,
  className,
}) => {
  return (
    <div
      style={{ width: size, height: size }} // Apply the size to the container
      className={className} // Apply custom styles if any
    >
      {svg}
    </div>
  );
};

export default SvgComponent;

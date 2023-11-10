import React, { FC } from "react";
import { CustomSvgProps } from "../../../models/svg";

const LogoBlack: FC<CustomSvgProps> = ({
  // const LogoBlack: FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  color,
  height,
  onClick,
  style,
  width,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      //   fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color, ...style }}
      onClick={onClick}
    >
      <g
        transform="translate(0.000000,102.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M579 972 c-238 -120 -436 -300 -520 -475 -13 -26 -29 -47 -36 -47
-36 0 14 -90 96 -171 108 -107 265 -188 474 -244 147 -40 149 -38 69 54 -121
141 -176 281 -174 451 1 151 51 283 156 410 72 86 67 88 -65 22z m-280 -387
c-38 -78 -39 -80 -71 -76 -18 1 -37 6 -42 9 -5 3 26 38 70 78 43 40 80 72 81
71 1 -1 -16 -38 -38 -82z"
        />
        <path d="M742 883 l3 -48 45 0 45 0 3 48 3 47 -51 0 -51 0 3 -47z" />
        <path
          d="M987 904 c-4 -4 -7 -25 -7 -46 l0 -38 46 0 45 0 -3 43 c-3 40 -4 42
-38 45 -20 2 -39 0 -43 -4z"
        />
        <path
          d="M1192 828 c3 -30 6 -33 38 -33 32 0 35 2 35 30 0 28 -3 30 -38 33
-38 3 -38 3 -35 -30z"
        />
        <path
          d="M1387 814 c-4 -4 -7 -18 -7 -31 0 -18 5 -23 26 -23 22 0 25 4 22 27
-3 27 -26 41 -41 27z"
        />
        <path
          d="M667 774 c-4 -4 -7 -32 -7 -61 l0 -54 58 3 57 3 0 55 0 55 -50 3
c-28 2 -54 0 -58 -4z"
        />
        <path
          d="M917 763 c-4 -3 -7 -28 -7 -55 l0 -49 53 3 52 3 3 38 c2 21 -2 45 -9
53 -12 14 -80 20 -92 7z"
        />
        <path
          d="M1147 743 c-4 -3 -7 -24 -7 -45 l0 -39 43 3 c38 3 42 6 45 31 2 16
-2 35 -9 43 -12 14 -60 19 -72 7z"
        />
        <path
          d="M1747 729 c-49 -25 -127 -101 -127 -123 0 -37 155 -154 176 -133 4 3
-10 36 -30 72 l-36 66 20 29 c27 38 52 98 42 103 -4 3 -24 -4 -45 -14z"
        />
        <path
          d="M1340 690 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
        />
        <path
          d="M1500 685 c0 -23 4 -26 28 -23 19 2 27 9 27 23 0 14 -8 21 -27 23
-24 3 -28 0 -28 -23z"
        />
        <path
          d="M622 598 c-7 -7 -12 -41 -12 -80 0 -54 3 -70 16 -75 9 -3 27 -31 41
-61 32 -72 102 -181 153 -236 44 -48 117 -102 126 -93 3 3 -10 27 -29 54 -88
123 -137 269 -137 409 0 65 -3 83 -16 88 -28 11 -130 6 -142 -6z"
        />
        <path
          d="M877 603 c-13 -13 -8 -142 6 -150 7 -4 30 -42 51 -82 48 -96 95 -160
159 -216 57 -49 91 -62 63 -23 -85 120 -136 260 -136 376 0 47 -5 83 -12 90
-13 13 -120 17 -131 5z"
        />
        <path
          d="M1112 598 c-17 -17 -15 -105 2 -115 8 -4 30 -39 50 -77 20 -38 52
-88 71 -112 37 -44 93 -90 101 -82 2 3 -12 32 -31 64 -47 77 -75 171 -75 248
0 35 -5 67 -12 74 -7 7 -30 12 -53 12 -23 0 -46 -5 -53 -12z"
        />
        <path
          d="M1317 603 c-11 -10 -8 -81 3 -88 5 -3 23 -32 40 -64 30 -57 104 -140
115 -129 3 2 -9 33 -27 67 -24 47 -33 79 -36 129 -2 37 -9 73 -14 80 -11 13
-70 17 -81 5z"
        />
        <path
          d="M1497 604 c-21 -21 19 -107 73 -159 33 -31 39 -28 15 9 -9 13 -22 52
-29 87 -10 50 -17 65 -32 67 -11 2 -23 0 -27 -4z"
        />
      </g>
    </svg>
  );
};

export { LogoBlack };
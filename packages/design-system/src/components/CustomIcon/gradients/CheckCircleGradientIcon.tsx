import type { CustomIconProps } from "../CustomIcon";
import { CustomIcon } from "../CustomIcon";

export const CheckCircleGradientIcon = ({ ...props }: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <g clipPath="url(#clip0_2067_237)">
        <path
          d="M5 7.99998L7 9.99998L11 5.99998M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8 14.6666C4.3181 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.3181 1.33331 8 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
          stroke="url(#paint0_linear_2067_237)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_2067_237"
          x1="8"
          x2="8"
          y1="1.33331"
          y2="14.6666"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.6" />
        </linearGradient>
        <clipPath id="clip0_2067_237">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </CustomIcon>
  );
};
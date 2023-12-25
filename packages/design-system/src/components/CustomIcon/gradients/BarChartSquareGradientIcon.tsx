import type { CustomIconProps } from "../CustomIcon";
import { CustomIcon } from "../CustomIcon";

export const BarChartSquareGradientIcon = ({ ...props }: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        d="M5.33333 8.66667V11.3333M10.6667 7.33333V11.3333M8 4.66667V11.3333M5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14Z"
        stroke="url(#paint0_linear_1677_1683)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1677_1683"
          x1="8"
          x2="8"
          y1="2"
          y2="14"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </CustomIcon>
  );
};

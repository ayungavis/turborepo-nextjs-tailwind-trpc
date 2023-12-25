import type { CustomIconProps } from "../CustomIcon";
import { CustomIcon } from "../CustomIcon";

export const TrustWalletIcon = ({ ...props }: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      {...props}
    >
      <path
        d="M5.71094 9.67346L24.4318 3.60645V45.6064C11.0596 40.0059 5.71094 29.2727 5.71094 23.207V9.67346Z"
        fill="#0500FF"
      />
      <path
        d="M43.1539 9.67346L24.4331 3.60645V45.6064C37.8053 40.0059 43.1539 29.2727 43.1539 23.207V9.67346Z"
        fill="url(#paint0_linear_1019_6926)"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1019_6926"
          x1="38.1811"
          x2="24.1152"
          y1="0.66533"
          y2="45.0564"
        >
          <stop offset="0.02" stopColor="#0000FF" />
          <stop offset="0.08" stopColor="#0094FF" />
          <stop offset="0.16" stopColor="#48FF91" />
          <stop offset="0.42" stopColor="#0094FF" />
          <stop offset="0.68" stopColor="#0038FF" />
          <stop offset="0.9" stopColor="#0500FF" />
        </linearGradient>
      </defs>
    </CustomIcon>
  );
};

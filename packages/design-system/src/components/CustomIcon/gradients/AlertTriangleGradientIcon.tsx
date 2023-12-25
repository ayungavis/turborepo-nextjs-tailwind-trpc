import type { CustomIconProps } from "../CustomIcon";
import { CustomIcon } from "../CustomIcon";

export const AlertTriangleGradientIcon = ({ ...props }: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        d="M7.99984 5.99997V8.66664M7.99984 11.3333H8.00651M7.07672 2.59445L1.59346 12.0655C1.28932 12.5909 1.13726 12.8535 1.15973 13.0691C1.17933 13.2571 1.27785 13.428 1.43075 13.5392C1.60606 13.6666 1.90957 13.6666 2.51658 13.6666H13.4831C14.0901 13.6666 14.3936 13.6666 14.5689 13.5392C14.7218 13.428 14.8203 13.2571 14.8399 13.0691C14.8624 12.8535 14.7104 12.5909 14.4062 12.0655L8.92296 2.59445C8.61991 2.07101 8.46839 1.80929 8.27071 1.72139C8.09827 1.64471 7.90141 1.64471 7.72897 1.72139C7.53129 1.80929 7.37976 2.07101 7.07672 2.59445Z"
        stroke="url(#paint0_linear_2067_269)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_2067_269"
          x1="7.99984"
          x2="7.99984"
          y1="1.66388"
          y2="13.6666"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </CustomIcon>
  );
};

import type { CustomIconProps } from "~/components/CustomIcon";
import { CustomIcon } from "~/components/CustomIcon";

export interface HighlightShadowProps extends CustomIconProps {
  fillOpacity?: number | string;
}

export const HighlightShadow = ({
  fillOpacity = "0.35",
  ...props
}: HighlightShadowProps) => {
  return (
    <CustomIcon
      fill="none"
      height="35"
      viewBox="0 0 36 35"
      width="36"
      {...props}
    >
      <g filter="url(#filter0_f_2067_184)">
        <ellipse
          cx="17.8576"
          cy="30.7143"
          fill="url(#paint0_linear_2067_184)"
          fillOpacity={fillOpacity}
          rx="42.8571"
          ry="19.7143"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="60"
          id="filter0_f_2067_184"
          width="106.286"
          x="-35.2853"
          y="0.714286"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_2067_184"
            stdDeviation="5.14286"
          />
        </filter>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_2067_184"
          x1="17.8576"
          x2="17.8576"
          y1="11"
          y2="30.7143"
        >
          <stop stopColor="#3F8CFF" />
          <stop offset="1" stopColor="#5ECFFF" />
        </linearGradient>
      </defs>
    </CustomIcon>
  );
};

import { useMemo } from "react";

import type { CustomIconProps } from "./CustomIcon";
import { CustomIcon } from "./CustomIcon";

interface LogoProps extends CustomIconProps {
  hideText?: boolean;
  hideLogo?: boolean;
}

export const Logo = ({
  hideText = false,
  hideLogo = false,
  ...props
}: LogoProps) => {
  const width = useMemo(() => {
    if (hideLogo) return 52;
    if (hideText) return 24;
    return 81;
  }, [hideLogo, hideText]);

  return (
    <CustomIcon
      fill="none"
      height="20"
      viewBox={`0 0 ${width} 20`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {!hideLogo && (
        <>
          <path
            d="M0.255336 4.88755C3.15482 4.92706 5.37018 7.02388 5.3603 10.1802C5.35042 13.3662 3.12518 15.4235 0.225699 15.4482L0.21582 19.0713C5.27386 19.054 8.43019 15.6556 8.44501 10.1876C8.46229 4.7196 5.32572 1.30642 0.267685 1.26196L0.257806 4.88508L0.255336 4.88755Z"
            fill="#018697"
          />
          <mask
            height="19"
            id="mask0_2074_386"
            maskUnits="userSpaceOnUse"
            width="9"
            x="0"
            y="1"
          >
            <path
              d="M0.255336 4.88755C3.15482 4.92706 5.37018 7.02388 5.3603 10.1802C5.35042 13.3662 3.12518 15.4235 0.225699 15.4482L0.21582 19.0713C5.27386 19.054 8.43019 15.6556 8.44501 10.1876C8.46229 4.7196 5.32572 1.30642 0.267685 1.26196L0.257806 4.88508L0.255336 4.88755Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2074_386)">
            <path
              d="M8.45752 1.19487L0.0705566 1.26367L0.217172 19.1366L8.60414 19.0678L8.45752 1.19487Z"
              fill="#018697"
            />
          </g>
          <path
            d="M15.7109 10.1039C15.6961 15.5719 18.8327 18.9851 23.8907 19.0271L23.9006 15.404C21.0011 15.3644 18.7858 13.2676 18.7956 10.1113C18.8055 6.92532 21.0308 4.86803 23.9302 4.84333L23.9401 1.22021C18.8821 1.23997 15.7257 4.63587 15.7109 10.1039Z"
            fill="#018697"
          />
          <mask
            height="19"
            id="mask1_2074_386"
            maskUnits="userSpaceOnUse"
            width="9"
            x="15"
            y="1"
          >
            <path
              d="M15.7109 10.1041C15.6961 15.5721 18.8327 18.9853 23.8907 19.0273L23.9006 15.4042C21.0011 15.3647 18.7858 13.2679 18.7956 10.1115C18.8055 6.92557 21.0308 4.86827 23.9302 4.84357L23.9401 1.22046C18.8821 1.24022 15.7257 4.63611 15.7109 10.1041Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_2074_386)">
            <path
              d="M23.9369 1.15215L15.5499 1.22095L15.6965 19.0939L24.0835 19.0251L23.9369 1.15215Z"
              fill="#018697"
            />
          </g>
          <path
            d="M13.7153 0.588706L10.4059 0.594482L10.4387 19.4114L13.7482 19.4057L13.7153 0.588706Z"
            fill="#018697"
          />
          <mask
            height="20"
            id="mask2_2074_386"
            maskUnits="userSpaceOnUse"
            width="4"
            x="10"
            y="0"
          >
            <path
              d="M13.7156 0.588706L10.4061 0.594482L10.439 19.4114L13.7484 19.4057L13.7156 0.588706Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2_2074_386)">
            <path
              d="M13.7497 0.561645L10.2527 0.590332L10.4073 19.4388L13.9043 19.4101L13.7497 0.561645Z"
              fill="#018697"
            />
          </g>
        </>
      )}
      {!hideText && !hideLogo && (
        <path
          d="M35.8446 17.757C34.5308 17.757 33.417 17.5357 32.5031 17.093C31.5891 16.6361 30.8109 16.0506 30.1683 15.3366L32.3103 13.1731C33.3242 14.3155 34.5737 14.8867 36.0588 14.8867C36.8585 14.8867 37.4511 14.7225 37.8367 14.3941C38.2222 14.0656 38.415 13.6301 38.415 13.0875C38.415 12.6733 38.3008 12.3306 38.0723 12.0593C37.8438 11.7737 37.3797 11.5809 36.68 11.4809L35.202 11.2882C33.6169 11.0882 32.4531 10.6099 31.7105 9.85302C30.9822 9.09617 30.6181 8.08943 30.6181 6.83278C30.6181 6.16162 30.7466 5.54757 31.0037 4.99065C31.2607 4.43373 31.6248 3.95534 32.0961 3.5555C32.5816 3.15566 33.1671 2.84864 33.8525 2.63444C34.5523 2.40595 35.3448 2.29171 36.2302 2.29171C37.3583 2.29171 38.3508 2.47021 39.2076 2.82722C40.0644 3.18422 40.7998 3.70544 41.4138 4.39089L39.2504 6.57574C38.8934 6.16162 38.4579 5.82603 37.9438 5.56899C37.444 5.29767 36.8085 5.16201 36.0374 5.16201C35.3091 5.16201 34.7665 5.29053 34.4095 5.54757C34.0525 5.80461 33.874 6.16162 33.874 6.61858C33.874 7.13266 34.0096 7.50394 34.2809 7.73242C34.5665 7.96091 35.0235 8.12513 35.6518 8.22509L37.1298 8.46071C38.6721 8.70347 39.8145 9.18185 40.557 9.89586C41.2996 10.5956 41.6709 11.5952 41.6709 12.8947C41.6709 13.6087 41.5424 14.2656 41.2853 14.8653C41.0283 15.4651 40.6499 15.9792 40.15 16.4076C39.6645 16.836 39.0576 17.1716 38.3293 17.4143C37.6011 17.6428 36.7728 17.757 35.8446 17.757ZM52.36 11.3738H46.6623V17.5H43.4064V2.54876H46.6623V8.50355H52.36V2.54876H55.6159V17.5H52.36V11.3738ZM61.0273 2.54876V11.7166C61.0273 12.7733 61.2344 13.5658 61.6485 14.0942C62.0626 14.6083 62.7552 14.8653 63.7262 14.8653C64.6973 14.8653 65.3899 14.6083 65.804 14.0942C66.2181 13.5658 66.4252 12.7733 66.4252 11.7166V2.54876H69.5954V11.3738C69.5954 12.4734 69.4883 13.4302 69.2741 14.2441C69.0741 15.0438 68.7385 15.7078 68.2673 16.2362C67.7961 16.7503 67.1892 17.1359 66.4466 17.3929C65.704 17.6357 64.7972 17.757 63.7262 17.757C62.6552 17.757 61.7484 17.6357 61.0059 17.3929C60.2633 17.1359 59.6564 16.7503 59.1852 16.2362C58.7139 15.7078 58.3712 15.0438 58.157 14.2441C57.9571 13.4302 57.8571 12.4734 57.8571 11.3738V2.54876H61.0273ZM71.2733 17.5V14.9082H73.2011V5.14059H71.2733V2.54876H78.3848V5.14059H76.457V14.9082H78.3848V17.5H71.2733Z"
          fill="#242428"
        />
      )}
      {hideLogo && (
        <path
          d="M6.4903 17.1672C5.17653 17.1672 4.06268 16.9459 3.14876 16.5032C2.23483 16.0462 1.45657 15.4607 0.813965 14.7467L2.95598 12.5833C3.96986 13.7257 5.21937 14.2969 6.7045 14.2969C7.50418 14.2969 8.09681 14.1327 8.48237 13.8042C8.86793 13.4758 9.06071 13.0403 9.06071 12.4976C9.06071 12.0835 8.94647 11.7408 8.71799 11.4694C8.48951 11.1838 8.02541 10.9911 7.32568 10.8911L5.84769 10.6983C4.2626 10.4984 3.09878 10.02 2.35621 9.26317C1.62793 8.50633 1.26379 7.49958 1.26379 6.24294C1.26379 5.57177 1.39231 4.95773 1.64935 4.4008C1.90639 3.84388 2.27053 3.3655 2.74178 2.96566C3.2273 2.56582 3.81278 2.25879 4.49823 2.04459C5.19795 1.81611 5.99049 1.70187 6.87586 1.70187C8.00399 1.70187 8.99645 1.88037 9.85326 2.23737C10.7101 2.59438 11.4455 3.1156 12.0595 3.80104L9.8961 5.98589C9.53909 5.57177 9.10355 5.23619 8.58947 4.97915C8.08967 4.70783 7.4542 4.57217 6.68308 4.57217C5.95479 4.57217 5.41215 4.70069 5.05515 4.95773C4.69815 5.21477 4.51965 5.57177 4.51965 6.02873C4.51965 6.54282 4.65531 6.9141 4.92663 7.14258C5.21223 7.37106 5.66919 7.53528 6.29752 7.63524L7.7755 7.87087C9.31775 8.11363 10.4602 8.59201 11.2027 9.30601C11.9453 10.0057 12.3166 11.0053 12.3166 12.3048C12.3166 13.0188 12.188 13.6757 11.931 14.2755C11.674 14.8752 11.2955 15.3893 10.7957 15.8177C10.3102 16.2461 9.70332 16.5817 8.97503 16.8245C8.24675 17.053 7.4185 17.1672 6.4903 17.1672ZM23.0057 10.784H17.308V16.9102H14.0521V1.95891H17.308V7.91371H23.0057V1.95891H26.2616V16.9102H23.0057V10.784ZM31.673 1.95891V11.1267C31.673 12.1834 31.8801 12.976 32.2942 13.5044C32.7083 14.0184 33.4009 14.2755 34.3719 14.2755C35.343 14.2755 36.0356 14.0184 36.4497 13.5044C36.8638 12.976 37.0709 12.1834 37.0709 11.1267V1.95891H40.241V10.784C40.241 11.8836 40.1339 12.8403 39.9197 13.6543C39.7198 14.454 39.3842 15.118 38.913 15.6464C38.4418 16.1605 37.8348 16.546 37.0923 16.8031C36.3497 17.0458 35.4429 17.1672 34.3719 17.1672C33.3009 17.1672 32.3941 17.0458 31.6516 16.8031C30.909 16.546 30.3021 16.1605 29.8309 15.6464C29.3596 15.118 29.0169 14.454 28.8027 13.6543C28.6028 12.8403 28.5028 11.8836 28.5028 10.784V1.95891H31.673ZM41.919 16.9102V14.3183H43.8468V4.55075H41.919V1.95891H49.0305V4.55075H47.1027V14.3183H49.0305V16.9102H41.919Z"
          fill="#242428"
        />
      )}
    </CustomIcon>
  );
};
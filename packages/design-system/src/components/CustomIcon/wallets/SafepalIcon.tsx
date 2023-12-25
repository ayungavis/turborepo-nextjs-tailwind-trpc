import type { CustomIconProps } from "../CustomIcon";
import { CustomIcon } from "../CustomIcon";

export const SafepalIcon = ({ ...props }: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      {...props}
    >
      <rect fill="#4A21EF" height="48" rx="24" width="48" />
      <g clipPath="url(#clip0_1019_6888)">
        <path
          d="M22.1999 9.39136C21.3106 9.39136 20.4579 9.74461 19.8291 10.3734L9.95225 20.2504C9.57815 20.6245 9.39111 21.1148 9.39111 21.6052C9.39112 22.0954 9.57817 22.5858 9.95226 22.9599L16.4249 29.4325V17.9736C16.4249 17.1185 17.1127 16.4252 17.9678 16.4252C21.5807 16.4252 30.3749 16.4252 31.5745 16.4252L38.6082 9.39146L22.1999 9.39136Z"
          fill="white"
        />
        <path
          d="M16.4253 31.5749H30.0266C30.8817 31.5749 31.575 30.8816 31.575 30.0264V18.5675L38.0476 25.0402C38.4216 25.4143 38.6087 25.9046 38.6087 26.3949C38.6087 26.8853 38.4216 27.3755 38.0476 27.7497L28.1707 37.6267C27.5419 38.2554 26.6892 38.6087 25.7999 38.6087L9.3916 38.6086L16.4253 31.5749Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1019_6888">
          <rect
            fill="white"
            height="29.2174"
            transform="translate(9.39111 9.39136)"
            width="29.2174"
          />
        </clipPath>
      </defs>
    </CustomIcon>
  );
};

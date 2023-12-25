import type { CustomIconProps } from ".";
import { CustomIcon } from ".";

export type ProfileImageProps = CustomIconProps;

export const ProfileImage = ({ ...props }: ProfileImageProps) => {
  return (
    <CustomIcon
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      {...props}
    >
      <rect fill="#017E90" height="40" rx="10" width="40" />
      <path
        d="M8.03998 14.8281C10.9732 14.8681 13.2143 16.9893 13.2043 20.1823C13.1943 23.4053 10.9432 25.4865 8.00999 25.5115L8 29.1767C13.1168 29.1592 16.3098 25.7213 16.3248 20.1898C16.3423 14.6582 13.1693 11.2054 8.05247 11.1604L8.04247 14.8256L8.03998 14.8281Z"
        fill="white"
      />
      <mask
        height="19"
        id="mask0_2240_46486"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
        width="9"
        x="8"
        y="11"
      >
        <path
          d="M8.03998 14.8281C10.9732 14.8681 13.2143 16.9893 13.2043 20.1823C13.1943 23.4053 10.9432 25.4865 8.00999 25.5115L8 29.1767C13.1168 29.1592 16.3098 25.7213 16.3248 20.1898C16.3423 14.6582 13.1693 11.2054 8.05247 11.1604L8.04247 14.8256L8.03998 14.8281Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2240_46486)">
        <path
          d="M16.3375 11.0928L7.85303 11.1624L8.00135 29.243L16.4858 29.1734L16.3375 11.0928Z"
          fill="white"
        />
      </g>
      <path
        d="M23.6751 20.1048C23.6601 25.6364 26.8331 29.0892 31.95 29.1317L31.9599 25.4665C29.0268 25.4265 26.7857 23.3053 26.7957 20.1123C26.8057 16.8893 29.0568 14.8081 31.9899 14.7831L31.9999 11.1179C26.8831 11.1379 23.6901 14.5733 23.6751 20.1048Z"
        fill="white"
      />
      <mask
        height="19"
        id="mask1_2240_46486"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
        width="9"
        x="23"
        y="11"
      >
        <path
          d="M23.6751 20.1048C23.6601 25.6364 26.8331 29.0892 31.95 29.1317L31.9599 25.4665C29.0268 25.4265 26.7857 23.3053 26.7957 20.1123C26.8057 16.8893 29.0568 14.8081 31.9899 14.7831L31.9999 11.1179C26.8831 11.1379 23.6901 14.5733 23.6751 20.1048Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_2240_46486)">
        <path
          d="M31.9969 11.0495L23.5125 11.1191L23.6608 29.1998L32.1452 29.1302L31.9969 11.0495Z"
          fill="white"
        />
      </g>
      <path
        d="M21.6565 10.4793L18.3086 10.4851L18.3418 29.5207L21.6897 29.5149L21.6565 10.4793Z"
        fill="white"
      />
      <mask
        height="20"
        id="mask2_2240_46486"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
        width="4"
        x="18"
        y="10"
      >
        <path
          d="M21.6565 10.4793L18.3086 10.4851L18.3418 29.5207L21.6897 29.5149L21.6565 10.4793Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2_2240_46486)">
        <path
          d="M21.691 10.4517L18.1533 10.4807L18.3097 29.5482L21.8474 29.5192L21.691 10.4517Z"
          fill="white"
        />
      </g>
    </CustomIcon>
  );
};

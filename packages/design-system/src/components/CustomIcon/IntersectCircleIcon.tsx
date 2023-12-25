import type { CustomIconProps } from ".";
import { CustomIcon } from ".";

export type IntersectCircleProps = CustomIconProps;

export const IntersectCircleIcon = ({ ...props }: IntersectCircleProps) => {
  return (
    <CustomIcon
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M9 3C5.68629 3 3 5.68629 3 9C3 11.6151 4.67298 13.8394 7.00705 14.6611C7.17996 10.5124 10.5124 7.17996 14.6611 7.00705C13.8394 4.67298 11.6151 3 9 3ZM16.7973 7.2027C15.9817 3.64986 12.8003 1 9 1C4.58172 1 1 4.58172 1 9C1 12.8003 3.64986 15.9817 7.2027 16.7973C8.0183 20.3501 11.1997 23 15 23C19.4183 23 23 19.4183 23 15C23 11.1997 20.3501 8.0183 16.7973 7.2027ZM9 15C9 11.6863 11.6863 9 15 9C15 12.3137 12.3137 15 9 15ZM9.33893 16.993C13.4876 16.82 16.82 13.4876 16.9929 9.33892C19.327 10.1606 21 12.3849 21 15C21 18.3137 18.3137 21 15 21C12.3849 21 10.1606 19.327 9.33893 16.993Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </CustomIcon>
  );
};

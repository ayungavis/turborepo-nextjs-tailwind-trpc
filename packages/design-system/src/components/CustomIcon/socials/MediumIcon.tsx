import { CustomIcon } from "../CustomIcon";
import type { CustomIconProps } from "../CustomIcon";

export const MediumIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        d="M24 11.8276C24 15.0069 23.4671 17.5858 22.8096 17.5858C22.1522 17.5858 21.6196 15.0076 21.6196 11.8276C21.6196 8.64758 22.1524 6.06934 22.8096 6.06934C23.4669 6.06934 24 8.64735 24 11.8276Z"
        fill="currentColor"
      />
      <path
        d="M20.9628 11.8277C20.9628 15.377 19.4476 18.2554 17.5784 18.2554C15.7092 18.2554 14.194 15.377 14.194 11.8277C14.194 8.27834 15.709 5.3999 17.5782 5.3999C19.4473 5.3999 20.9626 8.27742 20.9626 11.8277"
        fill="currentColor"
      />
      <path
        d="M13.5374 11.8277C13.5374 15.5984 10.5069 18.6552 6.76884 18.6552C3.03073 18.6552 0 15.5977 0 11.8277C0 8.05767 3.0305 5 6.76884 5C10.5072 5 13.5374 8.05698 13.5374 11.8277Z"
        fill="currentColor"
      />
    </CustomIcon>
  );
};

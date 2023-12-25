import type { CustomIconProps } from ".";
import { CustomIcon } from ".";

export type ArrowLeftIconProps = CustomIconProps;

export const ArrowLeftIcon = ({ ...props }: ArrowLeftIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      {...props}
    >
      <path
        d="M15.8334 10H4.16669M4.16669 10L10 15.8333M4.16669 10L10 4.16667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </CustomIcon>
  );
};

import { CustomIcon } from "./CustomIcon";
import type { CustomIconProps } from "./CustomIcon";

/**
 * A custom Menu icon component.
 * @param {CustomIconProps} props - The props for the Menu icon component.
 * @returns The Menu icon component.
 */
export const MenuIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        d="M2 8H14M2 4H14M2 12H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
    </CustomIcon>
  );
};

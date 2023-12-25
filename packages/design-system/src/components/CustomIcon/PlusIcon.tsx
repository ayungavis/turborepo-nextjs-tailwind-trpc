import { CustomIcon } from ".";
import type { CustomIconProps } from ".";

/**
 * A custom Plus icon component.
 * @param {CustomIconProps} props - The props for the Plus icon component.
 * @returns The Plus icon component.
 */
export const PlusIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        d="M12.5 5.18262V19.1826M5.5 12.1826H19.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </CustomIcon>
  );
};

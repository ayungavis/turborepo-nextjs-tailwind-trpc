import { CustomIcon } from ".";
import type { CustomIconProps } from ".";

/**
 * A custom Minus icon component.
 * @param {CustomIconProps} props - The props for the Minus icon component.
 * @returns The Minus icon component.
 */
export const MinusIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        d="M5.5 12.1826H19.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </CustomIcon>
  );
};

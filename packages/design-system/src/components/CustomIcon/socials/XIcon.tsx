import { CustomIcon } from "../CustomIcon";
import type { CustomIconProps } from "../CustomIcon";

/**
 * A custom X icon component.
 * @param {CustomIconProps} props - The props for the X icon component.
 * @returns The X icon component.
 */
export const XIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        d="M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z"
        fill="currentColor"
      />
    </CustomIcon>
  );
};

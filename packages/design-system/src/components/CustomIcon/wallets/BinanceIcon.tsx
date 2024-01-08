import { CustomIcon } from "../CustomIcon";
import type { CustomIconProps } from "../CustomIcon";

export const BinanceIcon = ({ ...props }: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      {...props}
    >
      <path
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill="black"
      />
      <path
        d="M18.265 14.2012L15.0063 12.3072L23.8702 7.125L32.7602 12.3072L29.5014 14.2012L23.8702 10.9393L18.265 14.2012ZM35.0805 17.463V21.2774L38.3392 19.3834V15.5691L35.0805 13.6488L31.8216 15.5428L35.0805 17.463ZM20.6114 15.5691L23.8702 17.463L27.129 15.5691L23.8702 13.6488L20.6114 15.5691ZM32.7602 18.8309L29.5014 16.9369L23.8702 20.1989L18.265 16.9369L15.0063 18.8309V22.6452L20.6114 25.9071V32.4309L23.8702 34.3248L27.129 32.4309V25.9071L32.7602 22.6452V18.8309ZM35.0805 30.5369L29.4754 33.7988V37.6133L38.3655 32.4309V22.0929L35.0805 24.0131V30.5369ZM29.4754 31.0893L32.7341 29.1953V25.3547L29.4754 27.2487V31.0893ZM20.6114 35.1667V38.9809L23.8702 40.875L27.129 38.9809V35.1667L23.8702 37.0606L20.6114 35.1667ZM9.375 19.3834L12.6338 21.2774V17.463L15.8927 15.5691L12.6599 13.6488L9.40106 15.5428V19.3834H9.375ZM12.6599 24.0131L9.40106 22.1191V32.4572L18.2911 37.6395V33.8251L12.6599 30.5369V24.0131ZM18.265 27.2751L15.0063 25.3811V29.1953L18.265 31.0893V27.2751Z"
        fill="#F1BA0D"
      />
    </CustomIcon>
  );
};
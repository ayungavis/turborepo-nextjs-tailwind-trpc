type Placement = "start" | "middle" | "end";

export interface TruncateAddressOptions {
  placement?: Placement;
  startLength?: number;
  endLength?: number;
}

export const truncateAddress = (
  address: string,
  options: TruncateAddressOptions = {},
): string => {
  const { placement = "middle", startLength = 4, endLength = 4 } = options;

  if (!address) return "";
  const maxLength = startLength + endLength;
  if (address.length > maxLength) {
    switch (placement) {
      case "start":
        return "..." + address.slice(-maxLength);
      case "middle":
        return (
          address.slice(0, startLength) + "..." + address.slice(-endLength)
        );
      case "end":
      default:
        return address.slice(0, maxLength) + "...";
    }
  }

  return address;
};

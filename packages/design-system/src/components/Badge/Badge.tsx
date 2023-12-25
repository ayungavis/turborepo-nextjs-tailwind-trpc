import type { ComponentPropsWithoutRef } from "react";

import type { BadgeTheme } from "./Badge.theme";
import { badgeTheme } from "./Badge.theme";

/**
 * Badge component that displays a small piece of information or status.
 */
export interface BadgeProps
  extends ComponentPropsWithoutRef<"div">,
    BadgeTheme {}

/**
 * Renders a Badge component.
 * @param className - Additional CSS class name(s) for the component.
 * @param children - The content to be displayed inside the badge.
 * @param variant - The visual style variant of the badge.
 * @param size - The size of the badge.
 * @param props - Additional props to be spread to the underlying div element.
 * @returns The rendered Badge component.
 */
export const Badge = ({
  className,
  children,
  variant,
  size,
  ...props
}: BadgeProps) => {
  const { wrapper, overlay } = badgeTheme({ variant, size });

  return (
    <div {...props} className={wrapper({ className })}>
      {/* The overlay background for some variants */}
      <div className={overlay({ variant })} />
      <span className="relative z-20">{children}</span>
    </div>
  );
};

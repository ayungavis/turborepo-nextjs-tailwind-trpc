import { useCallback } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cloneIcon } from "@shui/utils";

import {
  AlertCircleGradientIcon,
  AlertCircleIcon,
  AlertTriangleGradientIcon,
  AlertTriangleIcon,
  BarChartSquareGradientIcon,
  BarChartSquareIcon,
  CheckCircleGradientIcon,
  CheckCircleIcon,
} from "../CustomIcon";
import type { HighlightIconTheme } from "./HighlightIcon.theme";
import { highlightIconTheme } from "./HighlightIcon.theme";
import { HighlightShadow } from "./HighlightShadow";

export interface HighlightIconProps
  extends ComponentPropsWithoutRef<"div">,
    HighlightIconTheme {
  borderProps?: ComponentPropsWithoutRef<"div">;
  customIcon?: ReactNode;
}

const HighlightIcon = ({
  className,
  borderProps,
  variant,
  size,
  brand,
  customIcon,
  ...props
}: HighlightIconProps) => {
  const { border, root, icon } = highlightIconTheme({ variant, size, brand });

  const renderIcon = useCallback(() => {
    if (customIcon) return customIcon;

    switch (variant) {
      case "primary":
      case "neutral":
        return brand ? <BarChartSquareGradientIcon /> : <BarChartSquareIcon />;
      case "success":
        return brand ? <CheckCircleGradientIcon /> : <CheckCircleIcon />;
      case "alert":
        return brand ? <AlertCircleGradientIcon /> : <AlertCircleIcon />;
      case "warning":
        return brand ? <AlertTriangleGradientIcon /> : <AlertTriangleIcon />;
    }
  }, [variant, brand, customIcon])();

  return (
    <div
      {...borderProps}
      className={border({ className: borderProps?.className })}
    >
      {brand && (
        <HighlightShadow
          className="fill-[linear-gradient(180deg, rgba(63, 140, 255, 0.35) 0%, rgba(154, 94, 255, 0.35) 5.99%)] absolute -bottom-0.5 blur-sm"
          fillOpacity="0.1"
        />
      )}
      <div {...props} className={root({ className })}>
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          cloneIcon(renderIcon, { className: icon() })
        }
      </div>
    </div>
  );
};

HighlightIcon.displayName = "HighlightIcon";

export { HighlightIcon };

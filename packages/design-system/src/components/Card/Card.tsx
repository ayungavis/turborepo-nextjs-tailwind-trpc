import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@shui/utils";

import type { CardTheme } from "./Card.theme";
import { cardTheme } from "./Card.theme";

export type CardProps = ComponentPropsWithoutRef<"div"> &
  CardTheme & {
    squareProps?: ComponentPropsWithoutRef<"div">;
    innerCardProps?: ComponentPropsWithoutRef<"div">;
    hideSquares?: boolean;
  };

export const Card = ({
  className,
  children,
  variant,
  hoverEffects,
  squareProps,
  innerCardProps,
  hideSquares,
  ...props
}: CardProps) => {
  const { base, square, innerCard } = cardTheme({ variant, hoverEffects });
  return (
    <div className={base({ className })} {...props}>
      {/* Require inner card container for double border effect */}
      {/* Ring will follow roundedness, and we need outer border to have rounded-none */}
      <div
        {...innerCardProps}
        className={innerCard({ className: innerCardProps?.className })}
      >
        {/* Corner squares */}
        {!hideSquares && (
          <>
            <div
              {...squareProps}
              className={square({
                className: cn(
                  "left-0 top-0 border-b border-r",
                  squareProps?.className,
                ),
              })}
            />
            <div
              {...squareProps}
              className={square({
                className: cn(
                  "right-0 top-0 border-b border-l",
                  squareProps?.className,
                ),
              })}
            />
            <div
              {...squareProps}
              className={square({
                className: cn(
                  "bottom-0 left-0 border-r border-t",
                  squareProps?.className,
                ),
              })}
            />
            <div
              {...squareProps}
              className={square({
                className: cn(
                  "bottom-0 right-0 border-l border-t",
                  squareProps?.className,
                ),
              })}
            />
          </>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

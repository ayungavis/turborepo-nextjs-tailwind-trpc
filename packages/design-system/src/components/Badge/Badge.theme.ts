import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const badgeTheme = tv({
  slots: {
    wrapper: [
      "flex",
      "items-center",
      "justify-center",
      "rounded-full",
      "gap-1",
      "relative",
      "z-0",
    ],
    overlay: [
      "w-full",
      "h-full",
      "absolute",
      "top-0",
      "left-0",
      "rounded-full",
      "z-10",
    ],
  },
  variants: {
    variant: {
      neutral: {
        wrapper: [
          "bg-components-badges-neutral-background",
          "text-components-badges-neutral-foreound",
        ],
      },
      green: {
        wrapper: [
          "bg-components-badges-green-background",
          "text-components-badges-green-foreground",
        ],
        overlay: ["bg-badge-overlay/50"],
      },
      yellow: {
        wrapper: [
          "bg-components-badges-yellow-background",
          "text-components-badges-yellow-foreound",
        ],
        overlay: ["bg-badge-overlay/50"],
      },
      red: {
        wrapper: [
          "bg-components-badges-red-background",
          "text-components-badges-red-foreound",
        ],
        overlay: ["bg-badge-overlay/50"],
      },
      primary: {
        wrapper: [
          "bg-components-badges-primary-background",
          "text-components-badges-primary-foreound",
        ],
        overlay: ["bg-badge-overlay/25"],
      },
    },
    size: {
      sm: { wrapper: ["py-0.5", "px-2", "text-2xs"] },
      md: { wrapper: ["py-0.5", "px-2", "text-xs"] },
      lg: { wrapper: ["py-1", "px-3", "text-sm"] },
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "md",
  },
});

export type BadgeTheme = VariantProps<typeof badgeTheme>;

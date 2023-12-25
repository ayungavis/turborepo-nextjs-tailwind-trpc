import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

/**
 * Defines the theme for a Card component.
 */
export const cardTheme = tv({
  base: ["group", "relative", "border", "border-primary-300", "min-h-[64px]"],
  slots: {
    square: [
      "border-primary-300",
      "absolute",
      "h-3",
      "w-3",
      "transition-colors",
    ],
    innerCard: [
      "flex",
      "flex-col",
      "items-center",
      "bg-neutral-white",
      "border",
      "border-primary-300",
      "h-full",
      "w-full",
      "rounded-sm",
      "transition-colors",
    ],
  },
  variants: {
    variant: {
      "border-single": {
        base: ["border-none"],
        square: [],
        innerCard: [],
      },
      "border-double": {
        base: ["p-2"],
        square: [],
        innerCard: ["relative", "rounded-sm"], // Square boxes to align to this inner card
      },
      "border-double-hover": {
        base: ["p-2", "border-opacity-0", "hover:border-opacity-100"],
        innerCard: ["relative", "rounded-sm"], // Square boxes to align to this inner card
      },
    },
    hoverEffects: {
      true: {
        innerCard: ["group-hover:border-primary-700"],
        square: ["group-hover:border-primary-700"],
      },
    },
  },
  defaultVariants: {
    variant: "border-single",
    hoverEffects: false,
  },
});

/**
 * Represents the type of a button theme, which is derived from the `cardTheme` variant props.
 */
export type CardTheme = VariantProps<typeof cardTheme>;

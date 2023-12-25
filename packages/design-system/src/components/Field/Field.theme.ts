import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const fieldTheme = tv({
  base: ["space-y-3"],
  slots: {
    label: ["text-text-subheading", "block"],
    labelContainer: ["flex", "justify-between", "gap-3", "items-start"],
    message: [
      "flex",
      "items-center",
      "gap-2",
      "text-text-subheading",
      "data-[error]:text-red-error-700",
    ],
  },
  variants: {
    size: {
      md: {
        base: ["space-y-3"],
        label: ["text-base"],
        labelContainer: ["px-3"],
        message: ["text-base", "px-3"],
      },
      sm: {
        base: ["space-y-2"],
        labelContainer: ["px-2"],
        label: ["text-sm"],
        message: ["text-sm", "px-2"],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type FieldVariants = VariantProps<typeof fieldTheme>;

import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const headingTheme = tv({
  base: ["font-sans", "font-medium"],
});

export type HeadingVariants = VariantProps<typeof headingTheme>;

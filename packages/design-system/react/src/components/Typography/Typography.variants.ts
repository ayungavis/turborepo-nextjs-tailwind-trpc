import { tv, type VariantProps } from "tailwind-variants";

export const typographyVariants = tv({
  base: ["font-sans not-italic font-normal text-gray-900"],
  variants: {
    size: {
      "display-2xl": ["text-7xl"],
      "display-xl": ["text-6xl"],
      "display-lg": ["text-5xl"],
      "display-md": ["text-4xl"],
      "display-sm": ["text-3xl"],
      "display-xs": ["text-2xl"],
      "text-xl": ["text-xl"],
      "text-lg": ["text-lg"],
      "text-md": ["text-base"],
      "text-sm": ["text-sm"],
      "text-xs": ["text-xs"],
    },
  },
  defaultVariants: {
    size: "text-md",
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;

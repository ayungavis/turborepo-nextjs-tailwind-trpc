import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "",
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

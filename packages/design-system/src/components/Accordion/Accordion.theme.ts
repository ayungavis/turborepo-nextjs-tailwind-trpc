import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const accordionTheme = tv({
  slots: {
    root: ["w-full flex flex-col gap-4"],
    header: ["w-full"],
    trigger: [
      "cursor-default flex items-center justify-between gap-4 sm:gap-5 w-full text-primary-800",
    ],
    chevron: [],
    content: [
      "px-6 pb-6 sm:px-8 sm:pb-8 text-base text-primary-800",
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
    ],
  },
});

export type AccordionVariants = VariantProps<typeof accordionTheme>;

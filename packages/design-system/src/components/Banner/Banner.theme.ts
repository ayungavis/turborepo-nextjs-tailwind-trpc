import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const bannerTheme = tv({
  slots: {
    root: ["flex", "items-center", "border"],
    content: ["flex", "flex-col", "flex-1"],
    title: ["font-medium"],
    description: ["text-base"],
    icon: [],
  },
  variants: {
    variant: {
      info: {
        root: ["border-primary-300", "bg-primary-200", "text-primary-700"],
      },
      neutral: {
        root: [
          "border-borders-borders",
          "bg-surfaces-and-elevation-elevation-1",
        ],
        title: ["text-text-heading"],
        description: ["text-text-paragraph"],
      },
      alert: {
        root: [
          "border-red-error-200",
          "bg-red-error-100",
          "text-red-error-700",
        ],
      },
      warning: {
        root: [
          "border-yellow-warning-300",
          "bg-yellow-warning-200",
          "text-yellow-warning-900",
        ],
      },
    },
    size: {
      lg: {
        root: ["gap-4", "sm:p-8", "rounded-xl", "p-6"],
        title: ["text-xl"],
        icon: ["w-8", "h-8"],
        content: ["gap-2"],
      },
      md: {
        root: ["sm:py-4", "sm:px-5", "gap-4", "rounded-lg", "py-3", "px-4"],
        title: ["text-xl"],
        icon: ["w-5", "h-5"],
        content: ["gap-1"],
      },
      sm: {
        root: ["pl-3", "pr-2", "py-2", "gap-2", "rounded-lg"],
        title: ["text-sm", "font-normal"],
        icon: ["w-4", "h-4"],
      },
    },
  },
  defaultVariants: {
    variant: "info",
    size: "md",
  },
});

export type BannerTheme = VariantProps<typeof bannerTheme>;

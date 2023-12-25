import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const highlightIconTheme = tv({
  slots: {
    border: ["flex", "items-center", "justify-center", "relative"],
    root: ["flex", "items-center", "justify-center"],
    icon: [],
  },
  variants: {
    variant: {
      primary: {
        border: ["bg-components-icons-highlight-icons-pink-background"],
        root: [
          "text-components-icons-highlight-icons-pink-foreground",
          "bg-components-icons-highlight-icons-pink-background",
        ],
      },
      neutral: {
        border: ["bg-components-icons-highlight-icons-grey-background"],
        root: [
          "bg-components-icons-highlight-icons-grey-background",
          "text-components-icons-highlight-icons-grey-foreground",
        ],
      },
      success: {
        border: ["bg-components-icons-highlight-icons-green-background"],
        root: [
          "bg-components-icons-highlight-icons-green-background",
          "text-components-icons-highlight-icons-green-foreground",
        ],
      },
      alert: {
        border: ["bg-components-icons-highlight-icons-red-background"],
        root: [
          "bg-components-icons-highlight-icons-red-background",
          "text-components-icons-highlight-icons-red-foreground",
        ],
      },
      warning: {
        border: ["bg-components-icons-highlight-icons-yellow-background"],
        root: [
          "bg-components-icons-highlight-icons-yellow-background",
          "text-components-icons-highlight-icons-yellow-foreground",
        ],
      },
    },
    size: {
      sm: {
        border: ["w-7", "h-7", "rounded-md"],
        root: ["w-6", "h-6", "rounded"],
        icon: ["w-4", "h-4"],
      },
      md: {
        border: ["w-9.5", "h-9.5", "rounded-lg"],
        root: ["w-8", "h-8", "rounded-md"],
        icon: ["w-5", "h-5"],
      },
      lg: {
        border: ["w-10.5", "h-10.5", "rounded-lg"],
        root: ["w-9", "h-9", "rounded-md"],
        icon: ["w-6", "h-6"],
      },
    },
    brand: {
      true: {
        border: ["bg-transparent"],
      },
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      brand: true,
      class: { root: ["shadow-highlight-icon", "bg-primary-600"] },
    },
    {
      variant: "neutral",
      brand: true,
      class: { root: ["shadow-highlight-icon", "bg-neutral-600"] },
    },
    {
      variant: "success",
      brand: true,
      class: { root: ["shadow-highlight-icon", "bg-green-success-700"] },
    },
    {
      variant: "alert",
      brand: true,
      class: { root: ["shadow-highlight-icon", "bg-red-error-500"] },
    },
    {
      variant: "warning",
      brand: true,
      class: { root: ["shadow-highlight-icon", "bg-yellow-warning-700"] },
    },
    {
      size: "sm",
      brand: true,
      class: { icon: ["w-3", "h-3"] },
    },
    {
      size: "md",
      brand: true,
      class: { icon: ["w-4", "h-4"] },
    },
    {
      size: "lg",
      brand: true,
      class: { icon: ["w-4", "h-4"] },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type HighlightIconTheme = VariantProps<typeof highlightIconTheme>;

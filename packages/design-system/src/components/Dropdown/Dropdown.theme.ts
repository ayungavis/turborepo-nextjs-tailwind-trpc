import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export type DropdownTheme = VariantProps<typeof dropdownTheme>;

export const dropdownTheme = tv({
  slots: {
    trigger: ["flex-1", "text-left", "w-full"],
    triggerContent: ["flex-1"],
    content: [
      "p-2",
      "z-dropdown-menu",
      "bg-white",
      "rounded-lg",
      "shadow-dropdown",
      "will-change-[opacity,transform]",
      "min-w-[280px]",
      "max-h-[216px]",
      "overflow-auto",
      "thin-scrollbar",
      "custom-scrollbar",
      "data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade",
    ],
    item: [
      "rounded-md",
      "text-text-paragraph",
      "py-2.5",
      "px-3",
      "transition-all",
      "duration-75",
      "flex",
      "outline-none",
      "relative",
      "select-none",
      "items-center",
      "gap-2",
      "hover:bg-surfaces-and-elevation-elevation-1",
      "hover:text-text-heading",
    ],
    icon: [
      "group-hover:text-text-heading",
      "text-text-paragraph",
      "group-disabled:text-text-disabled",
    ],
  },
  variants: {
    variant: {
      default: {
        trigger: [
          "!bg-components-input-fields-background",
          "border",
          "border-components-input-fields-border",
          "rounded-lg",
        ],
      },
      ghost: {
        trigger: [
          "text-components-buttons-text-only-background",
          "border",
          "border-transparent",
          "bg-transparent",
          "hover:text-components-buttons-text-only-foreground-hover",
          "hover:bg-components-buttons-text-only-background-hover",
          "focus-visible:text-components-buttons-text-only-foreground-focus",
          "focus-visible:bg-components-buttons-text-only-background-focus",
          "disabled:text-components-buttons-tertiary-disabled",
          "disabled:bg-transparent",
        ],
      },
    },
    disabled: {
      true: {
        trigger: [
          "bg-components-buttons-tertiary-disabled",
          "text-text-disabled",
          "cursor-not-allowed",
          "hover:bg-components-buttons-tertiary-disabled",
          "hover:text-text-disabled",
        ],
        icon: ["text-text-disabled", "cursor-not-allowed"],
      },
    },
  },
  defaultVariants: {
    variant: "ghost",
  },
});

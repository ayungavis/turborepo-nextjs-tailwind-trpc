import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const paginationTheme = tv({
  slots: {
    wrapper: ["flex", "items-center", "gap-2"],
    item: [
      "w-8",
      "h-8",
      "flex",
      "items-center",
      "justify-center",
      "rounded",
      "text-text-paragraph",
      // Hover
      "hover:bg-components-pagination-foreground-hover",
      "hover:bg-components-pagination-background-hover",
      // Focus
      "focus-visible:bg-components-pagination-foreground-hover",
      "focus-visible:bg-components-pagination-background-hover",
      "focus-visible:ring-2",
      "focus-visible:ring-offset-2",
      "focus-visible:ring-components-focus-ring-focus-ring",
      "focus-visible:outline-none",
      // Active
      "data-[active]:bg-components-pagination-background",
      "data-[active]:text-components-pagination-foreground",
    ],
    arrow: ["text-primary-500"],
  },
});

export type PaginationTheme = VariantProps<typeof paginationTheme>;

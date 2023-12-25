import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const tableTheme = tv({
  slots: {
    wrapper: ["bg-white", "py-2", "px-1", "overflow-x-auto", "relative"],
    table: ["min-w-full"],
    tableHead: [
      "sticky",
      "-top-2",
      "bg-white",
      "z-20",
      "md:static",
      "border-b",
      "border-borders-dividers",
    ],
    tableHeadRow: ["border-b", "border-borders-dividers"],
    tableHeadCell: [
      "p-5",
      "h-[60px]",
      "text-left",
      "align-middle",
      "whitespace-nowrap",
      "text-text-heading",
      "text-sm",
      "font-medium",
      "bg-white",
      "border-b",
      "border-borders-dividers",
    ],
    tableRow: ["even:bg-surfaces-and-elevation-elevation-1", "odd:bg-white"],
    tableCell: [
      "p-5",
      "h-[60px]",
      "text-left",
      "align-middle",
      "min-w-[80px]",
      "bg-inherit",
    ],
  },
});

export type TableTheme = VariantProps<typeof tableTheme>;

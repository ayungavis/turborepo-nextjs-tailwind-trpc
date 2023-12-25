import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export type ToastAlertVariants = VariantProps<typeof toastAlertTheme>;

export const toastAlertTheme = tv({
  slots: {
    wrapper: [
      "toast-root", // For animations
      "rounded-xl",
      "border",
      "shadow-toast",
      "w-full sm:max-w-[400px]",
      "p-4",
      "flex",
      "gap-4",
      "mt-3",
    ],
    title: ["font-medium"],
    description: ["text-sm"],
    icon: [],
  },
  variants: {
    variant: {
      primary: {
        wrapper: ["border-primary-500", "bg-primary-100", "text-primary-800"],
        title: ["text-primary-800"],
        description: ["text-primary-600"],
      },
      neutral: {
        wrapper: ["border-neutral-500", "bg-neutral-100", "text-text-heading"],
        title: ["text-text-heading"],
        description: ["text-text-paragraph"],
      },
      success: {
        wrapper: [
          "border-green-success-500",
          "bg-green-success-100",
          "text-green-success-800",
        ],
        title: ["text-green-success-800"],
        description: ["text-green-success-800"],
      },
      alert: {
        wrapper: [
          "border-red-error-500",
          "bg-red-error-100",
          "text-red-error-700",
        ],
        title: ["text-red-error-700"],
        description: ["text-red-error-700"],
      },
      warning: {
        wrapper: [
          "border-yellow-warning-500",
          "bg-yellow-warning-100",
          "text-yellow-warning-900",
        ],
        title: ["text-yellow-warning-900"],
        description: ["text-yellow-warning-900"],
      },
    },
    centerContents: {
      true: {
        wrapper: ["items-center"],
      },
    },
  },
});

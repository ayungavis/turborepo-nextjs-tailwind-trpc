import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Returns a merged class name string by merging and processing multiple class names and Tailwind CSS styles.
 *
 * @param {...string[]} args - One or more class names and/or Tailwind CSS styles to be merged.
 * @returns {string} - The merged class name string.
 */
export function cn(...args: ClassValue[]): string {
  return twMerge(clsx(args));
}

import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

import { hexToRGB } from "./hexToRGB";

type FlattenedObject = Record<string, string>;

/**
 * Flattens a nested object and returns a new object with flattened keys.
 *
 * @param {Record<string, unknown>} obj - The object to flatten.
 * @param {string} [parentKey=''] - The prefix to use for the flattened keys.
 * @param {string} [separator='-'] - The separator to use between flattened key segments.
 * @param {(hex: string) => string} [convertHexToRgb] - Optional function to convert hex colors to RGB format.
 * @returns {Record<string, string>} The flattened object.
 */
export const flattenObject = (
  obj: RecursiveKeyValuePair<string, string>,
  { parentKey = "", separator = "-", convertHexToRgb = true },
): Record<string, string> => {
  return Object.keys(obj).reduce((acc, key) => {
    const fullKey = parentKey ? `${parentKey}${separator}${key}` : key;
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      const flattened = flattenObject(value, { parentKey: fullKey, separator });
      Object.keys(flattened).forEach((subKey) => {
        const color = convertHexToRgb
          ? // @ts-expect-error - We know this is a string
            hexToRGB(flattened[subKey])
          : flattened[subKey];
        // @ts-expect-error - We know this is a string
        acc[subKey] = subKey.endsWith("-DEFAULT") ? color : flattened[subKey];
      });
    } else {
      const color = convertHexToRgb ? hexToRGB(value!) : value;
      acc[fullKey] = color!;
    }

    return acc;
  }, {} as FlattenedObject);
};

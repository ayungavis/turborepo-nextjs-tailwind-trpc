import { TinyColor } from "@ctrl/tinycolor";

/**
 * Converts color input into `r g b` format using tinycolor lib
 * @param {ColorInput} value - The color input e.g #000
 * @returns {string} String in format `${r} ${g} ${b}`
 */

export const hexToRGB = (value: string): string => {
  // check if the color is valid
  const isValid = new TinyColor(value).isValid;
  if (isValid) {
    // get the rgb values of the color
    const { r, g, b } = new TinyColor(value).toRgb();
    // return the rgb values in a string
    return `${r} ${g} ${b}`;
  }
  // if not a valid color, return the value
  return value;
};

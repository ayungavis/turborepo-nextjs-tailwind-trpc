import type { Config } from "tailwindcss";

import { generateThemeTailwindConfig } from "../functions/generateThemeTailwindConfig";
import { themeToCssVariables } from "../functions/themeToCssVariables";
import { APP_THEMES } from "./appTheme";

/**
 * Editable Tailwind config for theme
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Raw Tailwind theme object
 */
export const lightThemeConfig = (_twConfig: unknown = undefined) => {
  return {
    colors: {
      core: {
        "50": "#f9fafa",
        "100": "#f3f5f6",
        "150": "#eef0f1",
        "200": "#e3e7e8",
        "300": "#cfd5d8",
        "400": "#9ea5a8",
        "500": "#899195",
        "600": "#4e5457",
        "700": "#3c4244",
        "800": "#242829",
        "900": "#171b1c",
      },
    },
  };
};

/**
 * Converts tailwind config object to flattened CSS variables
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Returns flat CSS variables object derived from theme config
 */
export const lightCssVariables = (twConfig: Config["theme"]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore – argument didn't match
  themeToCssVariables(lightThemeConfig(twConfig));

/**
 * Nest tailwind config with theme as parent key
 * @returns - Tailwind theme's object { colors: { badmanners: { color1: '#000' }}}
 */
export const lightTailwindConfig = generateThemeTailwindConfig(
  APP_THEMES.light,
  {
    colors: {
      ...lightThemeConfig().colors,
      // Add non-standard colors here
      // yellow: '#FFFF77',
    },
  },
);

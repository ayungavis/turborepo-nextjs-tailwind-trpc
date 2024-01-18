import type { Config } from "tailwindcss";

import { generateThemeTailwindConfig } from "../functions/generateThemeTailwindConfig";
import { themeToCssVariables } from "../functions/themeToCssVariables";
import { APP_THEMES } from "./appTheme";

/**
 * Editable Tailwind config for theme
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Raw Tailwind theme object
 */
export const darkThemeConfig = (_twConfig: unknown = undefined) => {
  return {
    colors: {
      core: {
        "50": "#161d20",
        "100": "#242b2e",
        "150": "#2d3539",
        "200": "#4d575b",
        "300": "#636c70",
        "400": "#778287",
        "500": "#8d979a",
        "600": "#a7aaab",
        "700": "#bdbfc0",
        "800": "#d3d5d5",
        "900": "#eff0f0",
      },
    },
  };
};

/**
 * Converts tailwind config object to flattened CSS variables
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Returns flat CSS variables object derived from theme config
 */
export const darkCssVariables = (twConfig: Config["theme"]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore – argument didn't match
  themeToCssVariables(darkThemeConfig(twConfig));

/**
 * Nest tailwind config with theme as parent key
 * @returns - Tailwind theme's object { colors: { badmanners: { color1: '#000' }}}
 */
export const darkTailwindConfig = generateThemeTailwindConfig(APP_THEMES.dark, {
  colors: {
    ...darkThemeConfig().colors,
    // Add non-standard colors here
    // yellow: '#FFFF77',
  },
});

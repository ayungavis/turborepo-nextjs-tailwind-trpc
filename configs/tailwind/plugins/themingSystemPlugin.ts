import deepmerge from "deepmerge";
import plugin from "tailwindcss/plugin";

import { appTheme } from "../themes/appTheme";
import { darkCssVariables, darkTailwindConfig } from "../themes/darkTheme";
import { lightCssVariables, lightTailwindConfig } from "../themes/lightTheme";

export const themingSystemPlugin = plugin(
  // Note: somehow unable to use { theme } and pass it into our functions
  // so we're using config instead
  function ({ addBase, config }) {
    const theme = config().theme;
    addBase({
      // Create CSS variable overrides based on theme class
      '.light, [data-theme="light"]': lightCssVariables(theme),
      '.dark, [data-theme="dark"]': darkCssVariables(theme),
    });
  },
  {
    theme: {
      extend: {
        // Create tailwind config based on themes
        ...deepmerge.all([appTheme, lightTailwindConfig, darkTailwindConfig]),
      },
    },
  },
);

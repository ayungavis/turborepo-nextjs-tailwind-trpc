import type { Config } from "tailwindcss";

import { objToCssVariables } from "./objToCssVariables";

/**
 *
 * @param config - Tailwind config format e.g. { colors: {...}, borderRadius: {...} }
 * @returns - { --app-color1: 255 255 255, --app-sm: 0.5rem }
 */
export const themeToCssVariables = (config: Config) => {
  return Object.keys(config).reduce((acc, key) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const value = config[key];
    if (key === "colors") {
      acc = {
        ...acc,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        ...objToCssVariables(value, {
          prefix: "app",
        }),
      };
    } else {
      acc = {
        ...acc,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        ...objToCssVariables(value, {
          prefix: "app",
          convertHexToRgb: false,
        }),
      };
    }
    return acc;
  }, {});
};

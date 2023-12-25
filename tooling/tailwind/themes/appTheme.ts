import rgb from "../functions/rgb";

export const APP_THEMES = {
  dark: "dark",
  light: "light",
};

export type AppTheme = keyof typeof APP_THEMES;

export const appTheme = {
  colors: {
    app: {
      core: {
        "50": rgb(`--app-core-50`),
        "100": rgb(`--app-core-100`),
        "150": rgb(`--app-core-150`),
        "200": rgb(`--app-core-200`),
        "300": rgb(`--app-core-300`),
        "400": rgb(`--app-core-400`),
        "500": rgb(`--app-core-500`),
        "600": rgb(`--app-core-600`),
        "700": rgb(`--app-core-700`),
        "800": rgb(`--app-core-800`),
        "900": rgb(`--app-core-900`),
      },
    },
  },
};

import type {
  Config,
  KeyValuePair,
  RecursiveKeyValuePair,
  ResolvableTo,
} from "tailwindcss/types/config";

interface WhitelabelTwThemeConfig {
  colors: RecursiveKeyValuePair<string, string>;
  backgroundImage?: KeyValuePair<string, string>;
  borderRadius?: KeyValuePair<string, string>;
  boxShadow?: KeyValuePair<string, string>;
}

/**
 * Generate theme config with colors nested under theme name
 * @param {keyof typeof AppTheme} themeName - AppTheme name
 * @param {object} param1 - Add { colors } that is similar to tailwind theme colors
 * @returns - Nested theme e.g. { colors: { [themeName]: param1.colors }}
 */
export const generateThemeTailwindConfig = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore – AppTheme only refers to a type, but is being used as a value here.
  themeName: keyof typeof AppTheme,
  { colors }: WhitelabelTwThemeConfig,
) => {
  return {
    colors: {
      [themeName]: colors,
    } as ResolvableTo<RecursiveKeyValuePair<string, string>>,

    // Don't need other properties for tailwind config e.g. having creator's shadow class exposed
    // We can just use the whitelabel class or default tailwind classes for that
    // backgroundImage: {
    //   [themeName]: backgroundImage,
    // } as ResolvableTo<KeyValuePair<string, string>>,
    // borderRadius: {
    //   [themeName]: borderRadius,
    // } as ResolvableTo<KeyValuePair<string, string>>,
    // boxShadow: {
    //   [themeName]: boxShadow,
    // } as ResolvableTo<KeyValuePair<string, string>>,
  } satisfies Config["theme"];
};

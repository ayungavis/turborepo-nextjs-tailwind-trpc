import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

import { flattenObject } from "./flattenObject";

interface ObjToCssVariablesConfig {
  prefix?: string;
  convertHexToRgb?: boolean;
}

/**
 *
 * @param obj - Nested object e.g. { colors: { text: { em-high: '' }}}
 * @param param1 - Config to add prefix at the start e.g. `--${prefix}-${objKeys}`
 * Add convertHexToRgb to convert HEX value into { r g b } or disable this
 * @returns - { '--{prefix}-key':  255 255 255, '...': #000 }
 */
export const objToCssVariables = (
  obj: RecursiveKeyValuePair<string, string>,
  { prefix = undefined, convertHexToRgb = true }: ObjToCssVariablesConfig,
) => {
  const colors = flattenObject(obj, { convertHexToRgb });
  return Object.keys(colors).reduce((acc, key) => {
    const _prefix = prefix ? "--" + prefix + "-" : "--";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore – Element implicitly has an type because expression of type can't be used to index type {}.
    acc[`${_prefix}${key}`] = colors[key];
    return acc;
  }, {});
};

/**
 * Simply wraps CSS variable string input to tailwind format for alpha support
 * @param {string} cssVariable - CSS variable e.g. `--color-key`
 * @returns {string} - `rgb(var(${cssVariable}) / <alpha-value>)`
 */
const rgb = (cssVariable: string): string =>
  `rgb(var(${cssVariable}) / <alpha-value>)`;

export default rgb;

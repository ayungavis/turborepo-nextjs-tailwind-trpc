/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.tsx"],
  // @ts-ignore
  presets: [require("@myapp/tailwind-config")],
};

module.exports = config;

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // @ts-ignore
  presets: [require("@myapp/tailwind-config")],
};

module.exports = config;

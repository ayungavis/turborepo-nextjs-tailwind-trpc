/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["@myapp/eslint-config"], // uses the config in `packages/config/eslint`
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./apps/*/tsconfig.json",
      "./packages/*/tsconfig.json",
      "./packages/**/*/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["apps/app"],
    },
  },
};

module.exports = config;

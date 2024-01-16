/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  env: {
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { project: true },
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  rules: {
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "@typescript-eslint/ban-ts-comment": "error",
    "no-console": "warn",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    "**/.eslintrc.cjs",
    ".next",
    "dist",
    "pnpm-lock.yaml",
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;

import { defineConfig } from "tsup";
import type { Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/components/**/index.{ts,tsx}", "src/styles.css"],
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  sourcemap: true,
  ...options,
}));

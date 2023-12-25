import { withTV } from "tailwind-variants/dist/transformer.js";
import type { Config } from "tailwindcss";

import baseConfig from "@shui/tailwind-config";

export default withTV({
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  presets: [baseConfig],
} satisfies Config);

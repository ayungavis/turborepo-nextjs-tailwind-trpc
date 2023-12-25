import type { Config } from "tailwindcss";

import { themingSystemPlugin } from "./plugins/themingSystemPlugin";

export default {
  content: [""],
  theme: {
    extend: {
      zIndex: {
        header: "10",
        modal: "50",
        "dropdown-menu": "51",
        tooltip: "52",
        toast: "53",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "16px" }],
        xs: ["0.75rem", { lineHeight: "16px" }],
        sm: ["0.875rem", { lineHeight: "20px" }],
        base: ["1rem", { lineHeight: "20px" }],
        lg: ["1.125rem", { lineHeight: "28px" }],
        xl: ["1.25rem", { lineHeight: "28px" }],
        "2xl": ["1.5rem", { lineHeight: "32px" }],
      },
      spacing: {
        9.5: "2.375rem", // 38px
        10.5: "2.625rem", // 42px
      },
      boxShadow: {
        "highlight-icon": "0px 8.571px 19.714px 0px rgba(115, 200, 248, 0.24)",
        toast:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        dropdown:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
      },
      blur: {
        "highlight-icon": "5.142857074737549px",
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDown: "slideDown 50ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 50ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {
        background: "#F8FAFC",
        badge: {
          overlay: "#292929",
        },
        blue: {
          100: "rgb(230, 230, 254)",
          1000: "rgb(0, 0, 49)",
          200: "rgb(204, 204, 253)",
          300: "rgb(153, 153, 251)",
          400: "rgb(102, 102, 249)",
          500: "rgb(51, 51, 247)",
          600: "rgb(0, 0, 245)",
          700: "rgb(0, 0, 196)",
          800: "rgb(0, 0, 147)",
          900: "rgb(0, 0, 98)",
        },
        cyan: {
          100: "rgb(242, 255, 255)",
          1000: "rgb(24, 50, 50)",
          200: "rgb(228, 254, 254)",
          300: "rgb(202, 253, 254)",
          400: "rgb(175, 253, 253)",
          500: "rgb(149, 252, 253)",
          600: "rgb(122, 251, 252)",
          700: "rgb(98, 201, 202)",
          800: "rgb(73, 151, 151)",
          900: "rgb(49, 100, 101)",
        },
        "green-success": {
          100: "rgb(234, 250, 240)",
          1000: "rgb(8, 42, 22)",
          200: "rgb(212, 246, 226)",
          300: "rgb(170, 237, 196)",
          400: "rgb(127, 227, 167)",
          500: "rgb(85, 218, 137)",
          600: "rgb(42, 209, 108)",
          700: "rgb(34, 167, 86)",
          800: "rgb(25, 125, 65)",
          900: "rgb(17, 84, 43)",
        },
        neutral: {
          100: "rgb(241, 241, 242)",
          1000: "rgb(27, 27, 30)",
          200: "rgb(227, 227, 228)",
          300: "rgb(190, 190, 193)",
          400: "rgb(148, 148, 153)",
          50: "rgb(247, 247, 248)",
          500: "rgb(112, 111, 118)",
          600: "rgb(76, 75, 84)",
          700: "rgb(61, 60, 67)",
          800: "rgb(46, 45, 51)",
          900: "rgb(36, 36, 40)",
          black: "rgb(0, 0, 0)",
          white: "rgb(255, 255, 255)",
        },
        primary: {
          100: "rgb(235, 245, 246)",
          1000: "rgb(0, 45, 52)",
          200: "rgb(215, 235, 238)",
          300: "rgb(163, 208, 215)",
          400: "rgb(104, 178, 189)",
          500: "rgb(52, 152, 166)",
          600: "rgb(1, 126, 144)",
          700: "rgb(1, 101, 115)",
          800: "rgb(1, 76, 87)",
          900: "rgb(0, 60, 69)",
        },
        "red-error": {
          100: "rgb(254, 232, 230)",
          1000: "rgb(49, 6, 0)",
          200: "rgb(253, 210, 204)",
          300: "rgb(251, 164, 153)",
          400: "rgb(249, 119, 102)",
          500: "rgb(247, 73, 51)",
          600: "rgb(245, 28, 0)",
          700: "rgb(196, 22, 0)",
          800: "rgb(147, 17, 0)",
          900: "rgb(98, 11, 0)",
        },
        secondary: {
          100: "rgb(239, 253, 248)",
          1000: "rgb(17, 81, 61)",
          200: "rgb(223, 250, 242)",
          300: "rgb(180, 244, 224)",
          400: "rgb(132, 237, 204)",
          500: "rgb(89, 231, 186)",
          600: "rgb(48, 225, 169)",
          700: "rgb(38, 180, 135)",
          800: "rgb(29, 136, 102)",
          900: "rgb(23, 108, 81)",
        },
        "yellow-warning": {
          100: "rgb(254, 252, 230)",
          1000: "rgb(49, 45, 0)",
          200: "rgb(253, 249, 204)",
          300: "rgb(251, 242, 153)",
          400: "rgb(249, 236, 102)",
          500: "rgb(247, 229, 51)",
          600: "rgb(245, 223, 0)",
          700: "rgb(196, 178, 0)",
          800: "rgb(147, 134, 0)",
          900: "rgb(98, 89, 0)",
        },
        grey: {
          800: "#070E12",
        },
        borders: {
          borders: "var(--neutral-300, rgb(190, 190, 193))",
          dividers: "var(--neutral-200, rgb(227, 227, 228))",
        },
        "components-badges": {
          "blue-background": "var(--blue-600, rgb(0, 0, 245))",
          "blue-foreound": "var(--blue-100, rgb(230, 230, 254))",
          "green-background": "var(--green-success-600, rgb(42, 209, 108))",
          "green-foreground": "var(--green-success-100, rgb(234, 250, 240))",
          "neutral-background": "var(--neutral-800, rgb(46, 45, 51))",
          "neutral-foreound": "var(--neutral-200, rgb(227, 227, 228))",
          "primary-background": "var(--primary-700, rgb(1, 101, 115))",
          "primary-foreound": "var(--primary-100, rgb(235, 245, 246))",
          "red-background": "var(--red-error-600, rgb(245, 28, 0))",
          "red-foreound": "var(--red-error-100, rgb(254, 232, 230))",
          "yellow-background": "var(--yellow-warning-600, rgb(245, 223, 0))",
          "yellow-foreound": "var(--yellow-warning-100, rgb(254, 252, 230))",
        },
        "components-button-icon": {
          "alert-background": "var(--red-error-800, rgb(147, 17, 0))",
          "alert-background-disabled": "var(--neutral-300, rgb(190, 190, 193))",
          "alert-background-focus": "var(--red-error-700, rgb(196, 22, 0))",
          "alert-background-hover": "var(--red-error-700, rgb(196, 22, 0))",
          "alert-foreground": "var(--red-error-200, rgb(253, 210, 204))",
          "alert-foreground-disabled": "var(--neutral-500, rgb(112, 111, 118))",
          "alert-foreground-focus": "var(--red-error-100, rgb(254, 232, 230))",
          "alert-foreground-hover": "var(--red-error-100, rgb(254, 232, 230))",
          "low-emphasis-background": "var(--neutral-600, rgb(76, 75, 84))",
          "low-emphasis-background-disabled":
            "var(--neutral-300, rgb(190, 190, 193))",
          "low-emphasis-background-focus":
            "var(--neutral-700, rgb(61, 60, 67))",
          "low-emphasis-background-hover":
            "var(--neutral-700, rgb(61, 60, 67))",
          "low-emphasis-foreground": "var(--neutral-50, rgb(247, 247, 248))",
          "low-emphasis-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "low-emphasis-foreground-focus":
            "var(--neutral-50, rgb(247, 247, 248))",
          "low-emphasis-foreground-hover":
            "var(--neutral-50, rgb(247, 247, 248))",
          "low-emphasis-outlined-background-focus":
            "var(--neutral-200, rgb(227, 227, 228))",
          "low-emphasis-outlined-background-hover":
            "var(--neutral-200, rgb(227, 227, 228))",
          "low-emphasis-outlined-foreground":
            "var(--neutral-900, rgb(36, 36, 40))",
          "low-emphasis-outlined-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "low-emphasis-outlined-foreground-focus":
            "var(--neutral-900, rgb(36, 36, 40))",
          "low-emphasis-outlined-foreground-hover":
            "var(--neutral-900, rgb(36, 36, 40))",
          "low-emphasis-outlined-stroke":
            "var(--neutral-500, rgb(112, 111, 118))",
          "low-emphasis-outlined-stroke-disabled":
            "var(--neutral-300, rgb(190, 190, 193))",
          "primary-background": "var(--primary-600, rgb(1, 126, 144))",
          "primary-background-disabled":
            "var(--neutral-300, rgb(190, 190, 193))",
          "primary-background-focus": "var(--primary-700, rgb(1, 101, 115))",
          "primary-background-hover": "var(--primary-700, rgb(1, 101, 115))",
          "primary-foreground": "var(--primary-100, rgb(235, 245, 246))",
          "primary-foreground-focus": "var(--primary-100, rgb(235, 245, 246))",
          "primary-foreground-hover": "var(--primary-100, rgb(235, 245, 246))",
          "primary-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "secondary-background": "var(--primary-200, rgb(215, 235, 238))",
          "secondary-background-disabled":
            "var(--neutral-300, rgb(190, 190, 193))",
          "secondary-background-focus":
            "var(--primary-300, rgb(163, 208, 215))",
          "secondary-background-hover":
            "var(--primary-300, rgb(163, 208, 215))",
          "secondary-foreground": "var(--primary-1000, rgb(0, 45, 52))",
          "secondary-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "secondary-foreground-focus": "var(--primary-1000, rgb(0, 45, 52))",
          "secondary-foreground-hover": "var(--primary-1000, rgb(0, 45, 52))",
          "tertiary-background": "var(--primary-600, rgb(1, 126, 144))",
          "tertiary-disabled": "var(--neutral-300, rgb(190, 190, 193))",
          "tertiary-focus": "var(--primary-700, rgb(1, 101, 115))",
          "tertiary-hover": "var(--primary-700, rgb(1, 101, 115))",
          "text-only-background-focus":
            "var(--primary-200, rgb(215, 235, 238))",
          "text-only-background-hover":
            "var(--primary-100, rgb(235, 245, 246))",
          "text-only-disabled-foreground":
            "var(--neutral-300, rgb(190, 190, 193))",
          "text-only-foreground": "var(--primary-700, rgb(1, 101, 115))",
          "text-only-foreground-focus": "var(--primary-700, rgb(1, 101, 115))",
          "text-only-foreground-hover": "var(--primary-800, rgb(1, 76, 87))",
        },
        "components-buttons": {
          "alert-background": "var(--red-error-700, rgb(196, 22, 0))",
          "alert-background-disabled": "var(--neutral-300, rgb(190, 190, 193))",
          "alert-background-focus": "var(--red-error-800, rgb(147, 17, 0))",
          "alert-background-hover": "var(--red-error-800, rgb(147, 17, 0))",
          "alert-foreground": "var(--red-error-100, rgb(254, 232, 230))",
          "alert-foreground-disabled": "var(--neutral-500, rgb(112, 111, 118))",
          "alert-foreground-focus": "var(--red-error-100, rgb(254, 232, 230))",
          "alert-foreground-hover": "var(--red-error-100, rgb(254, 232, 230))",
          "low-emphasis-background": "var(--neutral-600, rgb(76, 75, 84))",
          "low-emphasis-background-disabled":
            "var(--neutral-300, rgb(190, 190, 193))",
          "low-emphasis-background-focus":
            "var(--neutral-700, rgb(61, 60, 67))",
          "low-emphasis-background-hover":
            "var(--neutral-700, rgb(61, 60, 67))",
          "low-emphasis-foreground": "var(--neutral-50, rgb(247, 247, 248))",
          "low-emphasis-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "low-emphasis-foreground-focus":
            "var(--neutral-50, rgb(247, 247, 248))",
          "low-emphasis-foreground-hover":
            "var(--neutral-50, rgb(247, 247, 248))",
          "low-emphasis-outlined-background-focus":
            "var(--neutral-300, rgb(190, 190, 193))",
          "low-emphasis-outlined-background-hover":
            "var(--neutral-200, rgb(227, 227, 228))",
          "low-emphasis-outlined-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "low-emphasis-outlined-foreground":
            "var(--neutral-900, rgb(36, 36, 40))",
          "low-emphasis-outlined-foreground-focus":
            "var(--neutral-900, rgb(36, 36, 40))",
          "low-emphasis-outlined-foreground-hover":
            "var(--neutral-900, rgb(36, 36, 40))",
          "low-emphasis-outlined-stroke":
            "var(--neutral-500, rgb(112, 111, 118))",
          "primary-background": "var(--primary-1000, rgb(0, 45, 52))",
          "primary-background-disabled":
            "var(--neutral-300, rgb(190, 190, 193))",
          "primary-background-focus": "var(--primary-900, rgb(0, 60, 69))",
          "primary-background-hover": "var(--primary-900, rgb(0, 60, 69))",
          "primary-foreground": "var(--primary-100, rgb(235, 245, 246))",
          "primary-foreground-focus": "var(--primary-100, rgb(235, 245, 246))",
          "primary-foreground-hover": "var(--primary-100, rgb(235, 245, 246))",
          "primary-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "secondary-background": "var(--primary-100, rgb(235, 245, 246))",
          "secondary-background-disabled":
            "var(--neutral-300, rgb(190, 190, 193))",
          "secondary-background-focus":
            "var(--primary-200, rgb(215, 235, 238))",
          "secondary-background-hover":
            "var(--primary-200, rgb(215, 235, 238))",
          "secondary-foreground": "var(--primary-700, rgb(1, 101, 115))",
          "secondary-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "secondary-foreground-focus": "var(--primary-700, rgb(1, 101, 115))",
          "secondary-foreground-hover": "var(--primary-700, rgb(1, 101, 115))",
          "tertiary-background": "var(--primary-600, rgb(1, 126, 144))",
          "tertiary-disabled": "var(--neutral-300, rgb(190, 190, 193))",
          "tertiary-focus": "var(--primary-700, rgb(1, 101, 115))",
          "tertiary-hover": "var(--primary-700, rgb(1, 101, 115))",
          "text-only-background": "var(--primary-700, rgb(1, 101, 115))",
          "text-only-background-focus":
            "var(--primary-100, rgb(235, 245, 246))",
          "text-only-background-hover":
            "var(--primary-100, rgb(235, 245, 246))",
          "text-only-disabled": "var(--neutral-300, rgb(190, 190, 193))",
          "text-only-foreground-focus": "var(--primary-800, rgb(1, 76, 87))",
          "text-only-foreground-hover": "var(--primary-800, rgb(1, 76, 87))",
        },
        "components-checkboxes-&-radios-checked": {
          background: "var(--primary-600, rgb(1, 126, 144))",
          "background-disabled": "var(--neutral-800, rgb(46, 45, 51))",
          "background-focus": "var(--primary-700, rgb(1, 101, 115))",
          "background-hover": "var(--primary-700, rgb(1, 101, 115))",
          foreground: "var(--neutral-white, rgb(255, 255, 255))",
          "foreground-disabled": "var(--neutral-600, rgb(76, 75, 84))",
          "foreground-focus": "var(--neutral-white, rgb(255, 255, 255))",
          "foreground-hover": "var(--neutral-white, rgb(255, 255, 255))",
        },
        "components-checkboxes-&-radios-unchecked": {
          "background-disabled": "var(--neutral-800, rgb(46, 45, 51))",
          stroke: "var(--neutral-300, rgb(190, 190, 193))",
          "stroke-disabled": "var(--neutral-600, rgb(76, 75, 84))",
          "stroke-focus": "var(--neutral-400, rgb(148, 148, 153))",
          "stroke-hover": "var(--neutral-400, rgb(148, 148, 153))",
        },
        "components-focus-ring-focus-ring":
          "var(--blue-400, rgb(102, 102, 249))",
        "components-icons": {
          "grey-icon": "var(--neutral-400, rgb(148, 148, 153))",
          "highlight-icons-green-background":
            "var(--green-success-200, rgb(212, 246, 226))",
          "highlight-icons-green-foreground":
            "var(--green-success-800, rgb(25, 125, 65))",
          "highlight-icons-grey-background":
            "var(--neutral-600, rgb(76, 75, 84))",
          "highlight-icons-grey-foreground":
            "var(--neutral-300, rgb(190, 190, 193))",
          "highlight-icons-pink-background":
            "var(--primary-200, rgb(215, 235, 238))",
          "highlight-icons-pink-foreground":
            "var(--primary-800, rgb(1, 76, 87))",
          "highlight-icons-red-background":
            "var(--red-error-200, rgb(253, 210, 204))",
          "highlight-icons-red-foreground":
            "var(--red-error-800, rgb(147, 17, 0))",
          "highlight-icons-yellow-background":
            "var(--yellow-warning-200, rgb(253, 249, 204))",
          "highlight-icons-yellow-foreground":
            "var(--yellow-warning-800, rgb(147, 134, 0))",
        },
        "components-input-fields": {
          background: "var(--neutral-50, rgb(247, 247, 248))",
          border: "var(--neutral-200, rgb(227, 227, 228))",
          "border-active-typing": "var(--neutral-400, rgb(148, 148, 153))",
          "border-hover": "var(--neutral-400, rgb(148, 148, 153))",
          "foreground-disabled": "var(--neutral-300, rgb(190, 190, 193))",
        },
        "components-pagination": {
          background: "#EBF5F6",
          "background-hover": "#D7EBEE",
          foreground: "#014C57",
          "foreground-hover": "#014C57",
        },
        "components-segmented-control": {
          border: "var(--neutral-700, rgb(61, 60, 67))",
          "current-background": "var(--neutral-400, rgb(148, 148, 153))",
          "current-background-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "current-background-focus": "var(--neutral-400, rgb(148, 148, 153))",
          "current-background-hover": "var(--neutral-500, rgb(112, 111, 118))",
          "current-boreground-hover": "var(--neutral-900, rgb(36, 36, 40))",
          "current-foreground": "var(--neutral-900, rgb(36, 36, 40))",
          "current-foreground-disabled": "var(--neutral-600, rgb(76, 75, 84))",
          "current-foreground-focus": "var(--neutral-900, rgb(36, 36, 40))",
          "inactive-background-hover": "var(--neutral-500, rgb(112, 111, 118))",
          "inactive-foreground": "var(--neutral-700, rgb(61, 60, 67))",
          "inactive-foreground-disabled":
            "var(--neutral-500, rgb(112, 111, 118))",
          "inactive-foreground-hover": "var(--neutral-900, rgb(36, 36, 40))",
        },
        "components-selection-control": {
          background: "var(--neutral-400, rgb(148, 148, 153))",
          "background-disabled": "var(--neutral-800, rgb(46, 45, 51))",
          "background-focus": "var(--neutral-300, rgb(190, 190, 193))",
          "background-hover": "var(--neutral-300, rgb(190, 190, 193))",
          "current-foreground": "var(--neutral-900, rgb(36, 36, 40))",
          foreground: "var(--neutral-700, rgb(61, 60, 67))",
          "foreground-disabled": "var(--neutral-600, rgb(76, 75, 84))",
          "foreground-focus": "var(--neutral-900, rgb(36, 36, 40))",
          "foreground-hover": "var(--neutral-900, rgb(36, 36, 40))",
        },
        "components-tabs": {
          background: "var(--neutral-100, rgb(241, 241, 242))",
          "background-disabled": "var(--neutral-50, rgb(247, 247, 248))",
          "background-focus": "var(--neutral-100, rgb(241, 241, 242))",
          "background-hover": "var(--neutral-200, rgb(227, 227, 228))",
          foreground: "var(--neutral-900, rgb(36, 36, 40))",
          "foreground-disabled": "var(--neutral-500, rgb(112, 111, 118))",
          "foreground-focus": "var(--neutral-900, rgb(36, 36, 40))",
          "foreground-hover": "var(--neutral-900, rgb(36, 36, 40))",
        },
        "components-toasts": {
          background: "var(--neutral-300, rgb(190, 190, 193))",
          border: "var(--neutral-600, rgb(76, 75, 84))",
        },
        "components-toggles-pressed-toggle": {
          background: "var(--primary-600, rgb(1, 126, 144))",
          "background-focus": "var(--primary-700, rgb(1, 101, 115))",
          "background-hover": "var(--primary-700, rgb(1, 101, 115))",
          foreground: "var(--primary-200, rgb(215, 235, 238))",
          "foreground-focus": "var(--primary-300, rgb(163, 208, 215))",
          "foreground-hover": "var(--primary-300, rgb(163, 208, 215))",
        },
        "components-toggles-toggle": {
          background: "var(--neutral-700, rgb(61, 60, 67))",
          "background-disabled": "var(--neutral-800, rgb(46, 45, 51))",
          "background-focus": "var(--neutral-600, rgb(76, 75, 84))",
          "background-hover": "var(--neutral-600, rgb(76, 75, 84))",
          foreground: "var(--neutral-500, rgb(112, 111, 118))",
          "foreground-disabled": "var(--neutral-600, rgb(76, 75, 84))",
          "foreground-focus": "var(--neutral-400, rgb(148, 148, 153))",
          "foreground-hover": "var(--neutral-400, rgb(148, 148, 153))",
        },
        "components-token-badge": {
          "neutral-background": "var(--neutral-800, rgb(46, 45, 51))",
          "neutral-background-hover": "var(--neutral-700, rgb(61, 60, 67))",
          "neutral-foreground-hover": "var(--neutral-200, rgb(227, 227, 228))",
          "neutral-foreound": "var(--neutral-200, rgb(227, 227, 228))",
          "primary-background": "var(--primary-700, rgb(1, 101, 115))",
          "primary-background-hover": "var(--primary-700, rgb(1, 101, 115))",
          "primary-foreground-hover": "var(--primary-200, rgb(215, 235, 238))",
          "primary-foreound": "var(--primary-100, rgb(235, 245, 246))",
        },
        "components-tooltips-tooltip": {
          background: "var(--neutral-white, rgb(255, 255, 255))",
          stroke: "var(--neutral-200, rgb(227, 227, 228))",
        },
        "surfaces-and-elevation-elevation": {
          "1": "#F7F7F8",
          "2": "#F1F1F2",
          "3": "#E3E3E4",
        },
        text: {
          disabled: "var(--neutral-300, rgb(190, 190, 193))",
          heading: "var(--neutral-900, rgb(36, 36, 40))",
          paragraph: "var(--neutral-700, rgb(61, 60, 67))",
          placeholder: "var(--neutral-400, rgb(148, 148, 153))",
          subheading: "var(--neutral-600, rgb(76, 75, 84))",
        },
      },
    },
  },
  plugins: [themingSystemPlugin],
} satisfies Config;

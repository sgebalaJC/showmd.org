import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          50: "#f7f6f2",
          100: "#eeece3",
          200: "#d8d4c3",
          300: "#b3ad97",
          400: "#7f7862",
          500: "#56513f",
          600: "#3e3a2c",
          700: "#2a2720",
          800: "#1c1a15",
          900: "#100f0c",
          950: "#070605",
        },
        gold: {
          50: "#fbf5e7",
          100: "#f5e6b8",
          200: "#ecd082",
          300: "#e0b84c",
          400: "#d4a54c",
          500: "#c6902d",
          600: "#a77621",
          700: "#835d1c",
          800: "#5d421a",
          900: "#3b2a13",
        },
        cream: {
          50: "#fdfcf7",
          100: "#faf7ec",
          200: "#f2ecd7",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28,26,21,.06), 0 8px 24px rgba(28,26,21,.08)",
        elevated:
          "0 2px 4px rgba(28,26,21,.06), 0 16px 40px rgba(28,26,21,.12)",
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;

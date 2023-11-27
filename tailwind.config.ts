import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-var)", "system-ui", "sans-serif"],
      },
      colors: {
        // https://www.tints.dev/blue/33C924
        horizon: {
          50: "color(display-p3 0.898 0.941 1 / <alpha-value>)",
          100: "color(display-p3 0.8 0.882 1 / <alpha-value>)",
          200: "color(display-p3 0.6 0.765 1 / <alpha-value>)",
          300: "color(display-p3 0.4 0.651 1 / <alpha-value>)",
          400: "color(display-p3 0.2 0.533 1 / <alpha-value>)",
          500: "color(display-p3 0 0.416 1 / <alpha-value>)",
          600: "color(display-p3 0 0.333 0.8 / <alpha-value>)",
          700: "color(display-p3 0 0.251 0.6 / <alpha-value>)",
          800: "color(display-p3 0 0.165 0.4 / <alpha-value>)",
          900: "color(display-p3 0 0.082 0.2 / <alpha-value>)",
          950: "color(display-p3 0 0.043 0.098 / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

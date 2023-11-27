import type { Config } from "tailwindcss";
import harmonyPalette from "@evilmartians/harmony/tailwind";

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
    },
    colors: harmonyPalette,
  },
  plugins: [],
};
export default config;

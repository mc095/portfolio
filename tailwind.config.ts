import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        primary: "#FFFFFF", // White text
        accent: "#60A5FA", // Blue for links/hover
        muted: "#D1D5DB", // Gray for subtext
      },
    },
  },
  plugins: [],
};

export default config;
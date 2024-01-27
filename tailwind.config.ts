import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#a900aa",
        secondaryColor: "#c85de8",
      },
      fontFamily: {
        primary: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sprint: {
          navy: "#1E2E5E",
          blue: "#415FAD",
          red: "#D5414D",
          light: "#F9F9F9",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #1E2E5E, #415FAD)",
      },
      boxShadow: {
        "sprint-xl": "0 10px 25px -5px rgba(65,95,173,0.3)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["'PT Serif'", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

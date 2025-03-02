import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepblack: "#141414", // Deep black
        black: "#1A1A1A", // Dark gray
        yellow: "#FFD11A",
        lightgrey: "#666666",
        white: "#FFFFFF",
        grey60: "#98989A",
      },
      screens: {
        "max-500": { max: "500px" },
        "max-400" : { max: "400px" }
      }
    },
  },
  plugins: [],
} satisfies Config;

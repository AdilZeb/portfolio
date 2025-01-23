import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6A0DAD",
        deepBlue: "#002366",
        crimson: "#990000",
        gold: "#FFD700",
        ivory: "#FFFFF0",
        charcoal: "#333333",
        silver: "#C0C0C0",
      },
    },
  },
  plugins: [],
} satisfies Config;

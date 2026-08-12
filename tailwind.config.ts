import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f6f6f6",
          100: "#ebeaea",
          200: "#e0dede",
          300: "#d2d2d2",
          400: "#ababab",
          500: "#747474",
          600: "#515151",
          700: "#414141",
          800: "#333333",
          900: "#282a2b",
          950: "#1d1d1d",
        },
        primary: {
          50: "#fff8f1",
          100: "#ffeddc",
          200: "#fbd4ad",
          300: "#f5b272",
          400: "#ee8d3c",
          500: "#e57a25",
          600: "#d56f1d",
          700: "#b95514",
          800: "#f28321",
          900: "#e57a25",
          950: "#363839",
        },
        accent: {
          50: "#fff8f1",
          100: "#ffeddc",
          200: "#fbd4ad",
          300: "#f28321",
          400: "#e57a25",
          500: "#e57a25",
          600: "#d88f22",
          700: "#d56f1d",
          800: "#9a4312",
          900: "#7b3410",
        },
        ink: "#333333",
        canvas: "#ffffff",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(54, 56, 57, 0.24)",
        card: "0 12px 36px -18px rgba(54, 56, 57, 0.2)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
        "fade-up": "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in": "fade-in 900ms ease-out",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.08)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

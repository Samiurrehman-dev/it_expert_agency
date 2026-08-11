import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef5ff",
          100: "#d9e9ff",
          200: "#bbd8ff",
          300: "#8fc0ff",
          400: "#5b9bff",
          500: "#3574fc",
          600: "#1f55ef",
          700: "#1742d2",
          800: "#1838aa",
          900: "#0B3D91",
          950: "#071f4d",
        },
        accent: {
          50: "#ecfdfb",
          100: "#cffaf5",
          200: "#a4f4ec",
          300: "#68e9df",
          400: "#2fd6cb",
          500: "#14bdb4",
          600: "#0d9993",
          700: "#0f7976",
          800: "#11615f",
          900: "#124f4e",
        },
        ink: "#0B1930",
        canvas: "#F7F9FC",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(11, 61, 145, 0.22)",
        card: "0 12px 36px -18px rgba(11, 25, 48, 0.18)",
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

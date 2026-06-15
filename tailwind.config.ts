import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#fdf8f0",
          100: "#f5ebe0",
          200: "#e6d5c3",
          300: "#d4b896",
          400: "#c19a6b",
          500: "#a67c52",
          600: "#8b6340",
          700: "#6f4e34",
          800: "#4a3423",
          900: "#2c1f15",
          950: "#0d0b09",
        },
        accent: {
          DEFAULT: "#d4a853",
          light: "#e8c674",
          dark: "#b08a3a",
          muted: "rgba(212, 168, 83, 0.15)",
        },
        surface: {
          DEFAULT: "#141210",
          elevated: "#1c1917",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 8px rgba(212, 168, 83, 0.15)",
          },
          "50%": {
            textShadow:
              "0 0 16px rgba(212, 168, 83, 0.15), 0 0 32px rgba(212, 168, 83, 0.06)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.7s ease-out forwards",
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
        slideInRight: "slideInRight 0.7s ease-out forwards",
        glow: "glow 3s ease-in-out infinite",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};

export default config;

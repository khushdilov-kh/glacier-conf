import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#102D36",
          800: "#173B46",
          700: "#365963",
          600: "#58717A",
          500: "#71858B"
        },
        sand: {
          50: "#F7FAF9",
          100: "#EEF4F3",
          200: "#DCE8E7",
          300: "#C8D8D6",
          400: "#8DA7AA",
          500: "#5F777E"
        },
        accent: {
          300: "#80C1C8",
          500: "#0D7180",
          600: "#095D69"
        },
        gold: {
          300: "#E7C76E",
          400: "#DDB54B",
          500: "#C89A2E"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 32px rgba(6, 43, 58, 0.07)",
        lift: "0 22px 54px rgba(6, 43, 58, 0.12)"
      },
      backgroundImage: {
        "hero-soft":
          "radial-gradient(1200px 600px at 15% -10%, rgba(18, 78, 102, 0.18), transparent 60%), radial-gradient(900px 500px at 85% 0%, rgba(33, 42, 49, 0.22), transparent 55%)",
        "grid-fine":
          "linear-gradient(to right, rgba(33, 42, 49, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(33, 42, 49, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;

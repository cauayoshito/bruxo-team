import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        surface: "#111113",
        primary: "#E11D2E",
        text: "#FFFFFF",
        muted: "#A1A1AA",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;

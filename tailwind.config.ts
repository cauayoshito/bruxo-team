// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // tokens de UI (ESCURO com contraste alto)
        background: "#0A0A0B",     // fundo principal
        surface: "#111215",        // cards / seções
        card: "#15171B",
        border: "#23262B",
        muted: "#9CA3AF",
        brand: {
          red: "#E5242A",          // acento
          redHover: "#C71F24"
        }
      },
      boxShadow: {
        subtle: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 6px 24px rgba(0,0,0,0.4)"
      }
    },
  },
  plugins: [],
};
export default config;

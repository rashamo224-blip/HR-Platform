import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1E3C",
          slate: "#1D2C45",
          cloud: "#F4F6F8"
        }
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        card: "0 4px 20px rgba(11, 30, 60, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#050508",
          surface: "#0b0b10",
          card: "#12121a",
        },
        electric: {
          DEFAULT: "#3b82f6",
          glow: "#60a5fa",
          deep: "#1d4ed8",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
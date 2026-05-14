import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        accent: "hsl(var(--accent))",
        electric: "#8b5cf6",
        signal: "#14f195",
        warning: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(139, 92, 246, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;

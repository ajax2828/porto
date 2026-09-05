import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chassis: {
          DEFAULT: "#08090C", // base background — slightly blue-warm near-black
          panel: "#10131A",   // raised panel surface
          raised: "#151922",  // hover/raised panel surface
          line: "#1E232D",    // hairline borders on dark panels
        },
        ink: {
          DEFAULT: "#E9EBEF", // primary text
          muted: "#9198A6",   // secondary text
          dim: "#565D6B",     // tertiary / disabled text
        },
        signal: {
          DEFAULT: "#3373F2", // primary blue accent
          bright: "#6BA1FF",  // hover / glow state
          dim: "#152640",     // subtle tinted backgrounds
          line: "#1F3A66",    // borders using blue
        },
        alert: {
          DEFAULT: "#E23744", // red accent — used sparingly
          bright: "#FF6470",
          dim: "#2E1216",
          line: "#4A1B21",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2rem, 3.6vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        chip: "3px",
        pad: "6px",
      },
      backgroundImage: {
        "trace-gradient": "linear-gradient(90deg, #3373F2 0%, #6BA1FF 45%, #E23744 100%)",
        "grid-fade": "radial-gradient(circle at 50% 0%, rgba(51,115,242,0.10), transparent 60%)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseline: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;

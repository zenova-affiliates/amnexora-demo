import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#101828", // Midnight Navy
          hover: "#1D2939",
          muted: "#344054",
          light: "#F0F2F5",
        },
        accent: {
          DEFAULT: "#14B8A6", // Electric Teal
          hover: "#0D9488",
          dark: "#0F766E",
          light: "#CCFBF1",
          soft: "#F0FDFA",
        },
        surface: {
          white: "#FFFFFF",
          slate: "#F8FAFC",
          card: "#FFFFFF",
          subtle: "#F1F5F9",
        },
        content: {
          primary: "#111827",
          secondary: "#4B5563",
          muted: "#667085",
          subtle: "#9CA3AF",
        },
        border: {
          light: "#E5E7EB",
          subtle: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 2px 10px -2px rgba(16, 24, 40, 0.05), 0 4px 16px -2px rgba(16, 24, 40, 0.05)',
        'premium': '0 10px 30px -4px rgba(16, 24, 40, 0.08), 0 4px 12px -2px rgba(16, 24, 40, 0.04)',
        'hover': '0 20px 40px -6px rgba(16, 24, 40, 0.12), 0 8px 16px -4px rgba(16, 24, 40, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;

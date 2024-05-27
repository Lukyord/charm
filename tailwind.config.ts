import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Charm Primary Colors
        "c-primary": "#BFBFBF",
        "c-secondary": "#7F7F7F",
        "c-tertiary": "#404040",

        // Charm Supporting Colors
        "c-blue": "#307DC0",
        "c-light-blue": "#629FD6",
        "c-yellow": "#E88F41",
        "c-orange": "#E86A3B",
        "c-red": "#D6493C",

        // Shadcn Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "neue-hass-grotesk-light": ["var(--font-neue-hass-grotesk-light)"],
        "neue-hass-grotesk-roman": ["var(--font-neue-hass-grotesk-roman)"],
        "neue-hass-grotesk-medium": ["var(--font-neue-hass-grotesk-medium)"],
        futura: ["var(--font-futura)"],
      },
      boxShadow: {
        standard: "4px 4px 6px 0px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        h0: ["600px", { lineHeight: "normal", letterSpacing: "-0.96px" }],
        h1: ["144px", { lineHeight: "normal", letterSpacing: "0" }],
        h2: ["72px", { lineHeight: "normal", letterSpacing: "0" }],
        h3: ["36px", { lineHeight: "normal", letterSpacing: "0" }],
        paragraph: ["20px", { lineHeight: "normal", letterSpacing: "0.48px" }],
        subtitle: ["16px", { lineHeight: "normal", letterSpacing: "0.64px" }],
      },
      transitionTimingFunction: {
        "in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

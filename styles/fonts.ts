import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const neueHassGroteskLight = localFont({
  src: "../public/fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayLight.ttf",
  display: "swap",
  variable: "--font-neue-hass-grotesk-light",
  weight: "300",
  fallback: ["serif"],
});
const neueHassGroteskRoman = localFont({
  src: "../public/fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayRoman.ttf",
  display: "swap",
  variable: "--font-neue-hass-grotesk-roman",
  weight: "400",
  fallback: ["serif"],
});
const neueHassGroteskMedium = localFont({
  src: "../public/fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplayMedium.ttf",
  display: "swap",
  variable: "--font-neue-hass-grotesk-medium",
  weight: "700",
  fallback: ["serif"],
});
const futura = localFont({
  src: "../public/fonts/Futura/Futura Medium.otf",
  display: "swap",
  variable: "--font-futura",
  weight: "400",
  fallback: ["serif"],
});

export {
  inter,
  neueHassGroteskLight,
  neueHassGroteskRoman,
  neueHassGroteskMedium,
  futura,
};

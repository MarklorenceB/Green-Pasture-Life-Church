// tailwind.config.js
// NOTE: Tailwind v4 loads tokens from the `@theme` block in src/index.css
// (that is the source of truth). This file mirrors them for editor parity
// and documents the "Quiet Pasture" palette.
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#fbfaf4", // warm morning-light paper
        pasture: "#1e4d2b", // deep pasture green (primary)
        meadow: "#6aa84f", // living mid-green
        moss: "#0f2e1a", // darkest green
        wheat: "#c8a24b", // harvest-gold accent
        mist: "#e7efe1", // pale green section bg
        ink: "#1a2419", // green-tinted near-black text
        stone: "#5b6b58", // muted secondary text
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Figtree", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

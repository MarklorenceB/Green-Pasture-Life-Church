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
        "pasture-700": "#173e22",
        "meadow-300": "#9cc47e",
        "wheat-300": "#e0c581",
        "wheat-700": "#80631e",
        pasture: "#1e4d2b", // deep pasture green (primary)
        meadow: "#6aa84f", // living mid-green
        moss: "#0f2e1a", // darkest green
        wheat: "#c8a24b", // harvest-gold accent
        mist: "#e7efe1", // pale green section bg
        ink: "#1a2419", // green-tinted near-black text
        stone: "#5b6b58", // muted secondary text
      },
      fontSize: {
        display: "clamp(3.5rem, 8.4vw, 7.5rem)",
        title: "clamp(3rem, 7.2vw, 6.5rem)",
        heading: "clamp(2.25rem, 5vw, 4.5rem)",
        subheading: "clamp(1.625rem, 2.5vw, 2.25rem)",
        body: "clamp(1.0625rem, 1.25vw, 1.125rem)",
      },
      spacing: {
        section: "clamp(4.5rem, 10vw, 9rem)",
        "section-sm": "clamp(3rem, 6vw, 5rem)",
        gutter: "clamp(1.25rem, 4.4vw, 4rem)",
      },
      borderRadius: {
        panel: "clamp(1.25rem, 2.2vw, 2rem)",
        arch: "48% 48% 1.25rem 1.25rem / 30% 30% 1.25rem 1.25rem",
      },
      fontFamily: {
        display: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

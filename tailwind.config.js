// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Updated colors based on your logo:
        primary: "#1A531A", // A deep, rich forest green from the logo
        secondary: "#6AA84F", // A brighter, more vibrant green/lime from the logo (leaf/text)
        accent: "#f3f4f6", // Keeping a light gray for backgrounds/borders
        // You might want a slightly darker green for hover states or specific elements
        darkGreen: "#004700", // An even darker green for text or hover backgrounds
        lightGreen: "#9CC47E", // A softer green
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

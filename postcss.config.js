// postcss.config.js

export default {
  plugins: {
    // 1. Explicitly use the PostCSS package for Tailwind
    "@tailwindcss/postcss": {},

    // 2. Ensure Autoprefixer is still included
    autoprefixer: {},
  },
};

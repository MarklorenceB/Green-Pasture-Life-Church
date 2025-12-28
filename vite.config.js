// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"; // Crucial for React projects

export default defineConfig({
  // The tailwindcss plugin must be included here
  plugins: [react(), tailwindcss()],
});

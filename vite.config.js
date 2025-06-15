import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Matches your GitHub Pages path: https://sakshi123kakde.github.io/Portfolio/
});

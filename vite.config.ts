import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sass from "sass-embedded";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/styles/shared.scss" as *;
        `,
      },
    },
  },
});

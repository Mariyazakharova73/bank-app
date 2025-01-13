import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
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

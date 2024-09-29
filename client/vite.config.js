import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      swiper: "swiper/swiper-bundle.min.css",
    },
  },
  server: {
    proxy: {
      // Proxy API requests to the backend
      "/contact": {
        target:
          "https://portfolio-backend-nrjfounia-omkar-raykars-projects.vercel.app", // Your backend URL
        changeOrigin: true,
      },
    },
  },
});

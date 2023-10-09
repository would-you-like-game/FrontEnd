import { resolve } from 'path';
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(__dirname, "/src/components/"),
    },
  },

  plugins: [react(), tsconfigPaths()],
});
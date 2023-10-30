import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: {
      '@aips': resolve(__dirname, '/src/aips/'),
      '@common': resolve(__dirname, '/src/common/'),
      '@hooks': resolve(__dirname, '/src/hooks/'),
      '@pages': resolve(__dirname, '/src/pages/'),
      '@recoil': resolve(__dirname, '/src/recoil/'),
      '@shared': resolve(__dirname, '/src/shared/'),
      '@styles': resolve(__dirname, '/src/styles/'),
      '@type': resolve(__dirname, '/src/type/'),
      '@util': resolve(__dirname, '/src/util/'),
    },
  },

  plugins: [react(), tsconfigPaths()],
});

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'src', 'pages', 'popup', 'index.html'),
      },
      output: {
        entryFileNames: 'src/pages/[name]/index.js',
        chunkFileNames: 'assets/js/[name].js',
      },
    },
  },
});

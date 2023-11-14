import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [svelte(), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'src', 'views', 'popup', 'index.html'),
      },
      output: {
        entryFileNames: 'src/views/[name]/index.js',
        chunkFileNames: 'assets/js/[name].js',
      },
    },
  },
});

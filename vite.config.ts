import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@root': path.resolve(__dirname),
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@utils': path.resolve(__dirname, 'src', 'utils')
    }
  },
  plugins: [svelte()],
  server: {
    port: 3000
  }
});

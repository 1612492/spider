import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from 'sveltekit-adapter-chrome-extension';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: undefined,
      precompress: false,
      manifest: 'manifest.json'
    }),
    appDir: 'app'
  }
};

export default config;

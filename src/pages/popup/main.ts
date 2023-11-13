import '@/global.css';
import { watcher } from '@/utils/hmr/client';
import App from './App.svelte';

watcher('pages/popup');

const app = new App({
  target: document.getElementById('app'),
});

export default app;

import './style.css';
import { createRoot } from 'react-dom/client';
import { watcher } from '@/utils/hmr/client';
import App from './app';

watcher('pages/popup');

createRoot(document.querySelector('#app')).render(<App />);

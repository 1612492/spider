import './style.css';
import { createRoot } from 'react-dom/client';

import App from './app';
import { addHMR } from '../../utils/hmr';

addHMR('pages/popup');

createRoot(document.querySelector('#app')).render(<App />);

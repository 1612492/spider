import './index.css';
import { createRoot } from 'react-dom/client';

const Popup = () => {
  return (
    <div className="absolute inset-0 bg-black p-4 text-center">
      <header className="text-white">
        <p>
          Edit <code>src/pages/popup/popup.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-700"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

createRoot(document.querySelector('#popup')).render(<Popup />);

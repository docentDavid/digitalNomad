import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('No #root element found');

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Register service worker in production only
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .catch((err) => {
        console.warn('Service worker registration failed:', err);
      });
  });
}

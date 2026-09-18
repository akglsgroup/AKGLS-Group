import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

// Register Service Worker for offline static caching & speed improvements
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('PWA: New static assets available. Updating cache...');
    updateSW(true);
  },
  onOfflineReady() {
    console.log('PWA: Static content precached for offline access.');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);


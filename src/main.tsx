import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@css/index.css';
import '@css/components/Star.css';
import '@css/components/Stars.css';
import '@css/components/MovieCard.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

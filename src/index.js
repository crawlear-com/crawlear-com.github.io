import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import initPwa from './pwa/initPwa';
import i18n from './resources/language/i18n';
import ErrorBoundary from './components/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ErrorBoundary>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
initPwa();

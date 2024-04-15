import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import initPwa from './pwa/initPwa';
import i18n from './resources/language/i18n';
import { hydrateRoot } from 'react-dom/client';

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <BrowserRouter><App tab="home" /></BrowserRouter>)
} else {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);  
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
initPwa();

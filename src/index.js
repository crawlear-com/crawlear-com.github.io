import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import initPwa from './pwa/initPwa';
import i18n from './resources/language/i18n';
import { hydrateRoot, createRoot } from 'react-dom/client';

const appElement = <BrowserRouter>
                      <App />
                   </BrowserRouter>

const container = document.getElementById('root')
const hasChildNodes = container?.hasChildNodes() ?? false

hasChildNodes
  ? hydrateRoot(container, appElement)
  : createRoot(container).render(appElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
initPwa();

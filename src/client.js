import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import registerServiceWorker from "./registerServiceWorker";

/* eslint-disable */
// eslint-disable-line no-undef
const globalState = ___STATE___;
const globalAllState = ___allData___;
const visited = ___VISITED___;
/* eslint-enable */

hydrate(
  <BrowserRouter>
    <App appData={globalState} allData={globalAllState} visited={visited}/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
if (module.hot) {
  module.hot.accept();
}
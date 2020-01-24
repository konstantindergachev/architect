import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './js/App';
import AppContextProvider from './js/context/AppContext';
import './main.scss';

const app = (
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>
);
ReactDOM.render(app, document.getElementById('root'));

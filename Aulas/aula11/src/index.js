import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './templates/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home tem-uma-prop-aqui='O valor dela' numberToIncrement={2} />
  </React.StrictMode>
);
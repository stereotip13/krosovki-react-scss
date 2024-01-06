import React from 'react';
import ReactDOM from 'react-dom/client';
import 'macro-css'; //подключаем самописную фиговину для написания стилей внутри js
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

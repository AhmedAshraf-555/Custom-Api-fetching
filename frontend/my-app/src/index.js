import React from 'react';
import ReactDOM from 'react-dom/client';
import ApiFetch from './custom fetching/app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < ApiFetch />
  </React.StrictMode>
);

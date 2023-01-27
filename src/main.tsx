import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../public/styles/index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
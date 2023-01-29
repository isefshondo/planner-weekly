import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../public/index.css'
import { AppProvider } from './context/ApplicationContext';

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
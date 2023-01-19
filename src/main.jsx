import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

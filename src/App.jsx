import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App

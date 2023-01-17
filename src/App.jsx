import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App

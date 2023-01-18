import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './context/AuthContext'

function App() {
  const authCtx = React.useContext(AuthContext)
  return (
    <React.Fragment>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route element={<RegisterPage />} />
        <Route path="*" element={
          <ProtectedRoute isLoggedIn={authCtx.isLoggedIn}>
            <DashboardPage />
          </ProtectedRoute>
        } />
      </Routes>
    </React.Fragment>
  )
}

export default App
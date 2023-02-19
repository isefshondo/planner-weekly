import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/ApplicationContext";
import { ApplicationContext } from "./interfaces/general-interfaces";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./pages/routes/ProtectedRoute";

const App: React.FC = () => {
  const appCtx = React.useContext<ApplicationContext>(AppContext);
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route
        path="*"
        element={
          <ProtectedRoute isLoggedIn={appCtx.isLoggedIn}>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
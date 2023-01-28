import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="login" />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" />
    </Routes>
  );
};

export default App;
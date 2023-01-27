import React from "react";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="login" />
      <Route path="register" />
      <Route path="*" />
    </Routes>
  );
};

export default App;
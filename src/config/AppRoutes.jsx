import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import App from "../views/App";

// FUNCTIONS
import enableElementsOutline from "../helpers/globalConfig";

const AppRoutes = () => {
  // HANDLE FUNCTIONS
  useEffect(() => {
    enableElementsOutline(false);
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default AppRoutes;

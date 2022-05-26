import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Auth, Dashboard } from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";

import { useStateContext } from "./context/ContextProvider";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

const App = () => {
  const { currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <AuthProvider>
        <Routes>
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

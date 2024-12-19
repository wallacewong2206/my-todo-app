import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TodoPage from "./pages/TodoPage";
import DevModeFitnessPage from "./pages/DevModeFitnessPage";
import DevMode from "./pages/DevMode";
import FitnessMode from "./pages/FitnessMode";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

function AppContent() {
  const { darkMode } = useTheme();
  return (
    <div className={`min-vh-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <TodoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/choose-mode"
            element={
              <ProtectedRoute>
                <DevModeFitnessPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/devmode"
            element={
              <ProtectedRoute>
                <DevMode />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fitnessmode"
            element={
              <ProtectedRoute>
                <FitnessMode />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

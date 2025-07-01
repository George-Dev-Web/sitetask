// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthPage from "./pages/AuthPage"; // 👈 Combined login/register page
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import TasksPage from "./pages/TasksPage";

import AppLayout from "./components/ui/AppLayout";
import ProtectedRoute from "./components/ui/ProtectedRoute";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Auth Page - handles both login and register */}
        <Route
          path="/auth"
          element={token ? <Navigate to="/dashboard" /> : <AuthPage />}
        />

        {/* Protected Routes with Layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="tasks" element={<TasksPage />} />
        </Route>

        {/* Fallback route */}
        <Route
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/auth"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

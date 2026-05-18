import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import ThemeProvider from "./context/ThemeContext";

import App from "./App";

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ManageProjects from "./pages/ManageProjects";
import ManageSkills from "./pages/ManageSkills";
import Messages from "./pages/Messages";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomCursor from "./components/CustomCursor";
import ManageResume from "./pages/ManageResume.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manageprojects"
            element={
              <ProtectedRoute>
                <ManageProjects />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manageskills"
            element={
              <ProtectedRoute>
                <ManageSkills />
              </ProtectedRoute>
            }
          />

          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />

            <Route
                path="/resume"
                element={<ManageResume />}
            />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

import React from 'react'
import { AuthProvider } from './context/AuthContext'
// 1. FIXED: Imported BrowserRouter instead of the low-level Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/Protected_Route'
import Dashboard from './pages/Dashboard'
import { ServicesProvider } from './context/Services'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ServicesProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        </ServicesProvider>
      </Router>
    </AuthProvider>
  )
}

export default App

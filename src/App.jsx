// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import EmailOtpPage from "./pages/EmailOtpPage";
import RegistrationTypePage from "./pages/RegistrationTypePage";
import BuyerDetails from "./pages/BuyerDetails";
import SellerDetails from "./pages/SellerDetails";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected user routes */}
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/verify-email-otp" element={<ProtectedRoute><EmailOtpPage /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/registration-type" element={<ProtectedRoute><RegistrationTypePage /></ProtectedRoute>} />
          <Route path="/buyer" element={<ProtectedRoute><BuyerDetails /></ProtectedRoute>} />
          <Route path="/seller" element={<ProtectedRoute><SellerDetails /></ProtectedRoute>} />

          {/* Admin */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

import { Navigate } from "react-router-dom";

const ADMIN_SESSION_KEY = "fwc_admin_auth";

export default function AdminRoute({ children }) {
  const isAdmin = localStorage.getItem(ADMIN_SESSION_KEY) === "true";
  return isAdmin ? children : <Navigate to="/admin-login" replace />;
}


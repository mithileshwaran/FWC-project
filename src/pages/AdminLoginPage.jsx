import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Card, Alert } from "../components/UI";

const ADMIN_ID = "admin";
const ADMIN_PASSWORD = "1345678aA@";
const ADMIN_SESSION_KEY = "fwc_admin_auth";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (adminId.trim() === ADMIN_ID && password === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_SESSION_KEY, "true");
      navigate("/admin", { replace: true });
      return;
    }

    setError("Invalid admin ID or password.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(145deg,#020617_20%,#0f172a_100%)]" />
      </div>

      <div className="relative w-full max-w-md">
        <Card>
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-2xl font-black text-white">Admin Login</h1>
            {error && <Alert type="error">{error}</Alert>}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <Input
                label="Admin ID"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="Enter admin ID"
                required
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}


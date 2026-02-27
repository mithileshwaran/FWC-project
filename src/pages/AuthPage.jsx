import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { Input, Button, Card, Alert } from "../components/UI";

export default function AuthPage() {
  const { signup, signin, sendResetEmail, verifyResetCode, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState(location.state?.mode === "signup" ? "signup" : "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [forgotStep, setForgotStep] = useState("email");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(location.state?.success || "");
  const [error, setError] = useState("");

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setSuccess("");
    setError("");
    if (nextMode !== "forgot") {
      setForgotStep("email");
      setResetCode("");
      setNewPassword("");
    }
  };

  const extractResetCode = (value) => {
    const raw = value.trim();
    if (!raw) return "";
    try {
      if (raw.startsWith("http")) {
        const url = new URL(raw);
        return url.searchParams.get("oobCode") || "";
      }
    } catch {
      return raw;
    }
    return raw;
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await signin(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || !phone) {
      setError("Email, password, and mobile number are required.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await signup(email, password);
      sessionStorage.setItem("signup_phone", phone);
      navigate("/profile", { state: { phone } });
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  const handleSendReset = async () => {
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      setError("Enter your email address first.");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await sendResetEmail(normalizedEmail);
      setSuccess("Reset email sent. Check Inbox/Spam and paste the code or link below.");
      setForgotStep("verify");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const code = extractResetCode(resetCode);
    if (!code || !newPassword) {
      setError("Enter OTP/reset code and new password.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await verifyResetCode(code);
      await resetPassword(code, newPassword);
      setSuccess("Password updated successfully. Please sign in.");
      setForgotStep("email");
      setResetCode("");
      setNewPassword("");
      setPassword("");
      setMode("signin");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(145deg,#020617_20%,#0f172a_100%)]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400 rounded-2xl mb-4 shadow-xl">
            <span className="text-2xl font-black text-slate-900">TN</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            TN Land Registry
          </h1>
          <p className="text-slate-300 mt-1 font-medium">
            Tamil Nadu Property Registration Portal
          </p>
        </div>

        <Card>
          <div className="p-8">
            {error && <Alert type="error">{error}</Alert>}
            {success && <Alert type="success">{success}</Alert>}

            {mode === "signin" && (
              <form onSubmit={handleSignin} className="flex flex-col gap-4 mt-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button type="submit" loading={loading} className="mt-2 w-full">
                  Sign In
                </Button>
                <button
                  type="button"
                  className="text-sm text-cyan-300 underline"
                  onClick={() => switchMode("forgot")}
                >
                  Forgot password?
                </button>
                <p className="text-center text-sm text-slate-400">
                  New user?{" "}
                  <button
                    type="button"
                    className="font-semibold text-cyan-300 underline"
                    onClick={() => switchMode("signup")}
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            )}

            {mode === "signup" && (
              <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Input
                  label="Mobile Number"
                  type="tel"
                  placeholder="9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Button type="submit" loading={loading} className="w-full">
                  Create Account
                </Button>
                <button
                  type="button"
                  className="text-sm text-cyan-300 underline"
                  onClick={() => switchMode("forgot")}
                >
                  Forgot password?
                </button>
                <p className="text-center text-sm text-slate-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="font-semibold text-cyan-300 underline"
                    onClick={() => switchMode("signin")}
                  >
                    Sign In
                  </button>
                </p>
              </form>
            )}

            {mode === "forgot" && (
              <form onSubmit={handleResetPassword} className="flex flex-col gap-4 mt-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                {forgotStep === "email" && (
                  <Button type="button" loading={loading} onClick={handleSendReset} className="w-full">
                    Send OTP
                  </Button>
                )}

                {forgotStep === "verify" && (
                  <>
                    <Input
                      label="OTP / Reset Code"
                      type="text"
                      placeholder="Paste reset code or full link from mail"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                      required
                    />
                    <Input
                      label="New Password"
                      type="password"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <Button type="submit" loading={loading} className="w-full">
                      Verify OTP and Update Password
                    </Button>
                    <Button type="button" variant="secondary" onClick={handleSendReset} loading={loading} className="w-full">
                      Resend OTP
                    </Button>
                  </>
                )}

                <p className="text-center text-sm text-slate-400">
                  Remembered password?{" "}
                  <button
                    type="button"
                    className="font-semibold text-cyan-300 underline"
                    onClick={() => switchMode("signin")}
                  >
                    Back to Sign In
                  </button>
                </p>
              </form>
            )}
          </div>
        </Card>

        <p className="text-center text-slate-400 text-xs mt-6">
          Secured by Firebase Authentication
        </p>
      </div>
    </div>
  );
}

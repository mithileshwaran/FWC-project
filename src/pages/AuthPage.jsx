import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { Input, Button, Card, Alert } from "../components/UI";

export default function AuthPage() {
  const { signup, signin } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setError("");
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
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
      setError("Email, password, and phone number are required.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await signup(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-stone-200 opacity-60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 rounded-2xl mb-4 shadow-xl">
            <span className="text-2xl font-black text-amber-200">TN</span>
          </div>
          <h1
            className="text-3xl font-black text-stone-900 tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            TN Land Registry
          </h1>
          <p className="text-stone-500 mt-1 font-medium">
            Tamil Nadu Property Registration Portal
          </p>
        </div>

        <Card>
          <div className="p-8">
            {error && <Alert type="error">{error}</Alert>}

            {mode === "signin" ? (
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
                <p className="text-center text-sm text-stone-500">
                  New user?{" "}
                  <button
                    type="button"
                    className="font-semibold text-stone-900 underline"
                    onClick={() => switchMode("signup")}
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            ) : (
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

                <p className="text-center text-sm text-stone-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="font-semibold text-stone-900 underline"
                    onClick={() => switchMode("signin")}
                  >
                    Sign In
                  </button>
                </p>
              </form>
            )}
          </div>
        </Card>

        <p className="text-center text-stone-400 text-xs mt-6">
          Secured by Firebase Authentication
        </p>
      </div>
    </div>
  );
}

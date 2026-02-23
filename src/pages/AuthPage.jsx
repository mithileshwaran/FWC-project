// pages/AuthPage.jsx
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { confirmationResult as cr } from "firebase/auth";
import { useAuth } from "../hooks/useAuth.jsx";
import { Input, Button, Card, Alert } from "../components/UI";

export default function AuthPage() {
  const { signup, signin, setupRecaptcha, sendOTP } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin"); // signin | signup | phone
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmResult, setConfirmResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const recaptchaRef = useRef(null);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "signup") {
        await signup(email, password);
        navigate("/profile");
      } else {
        await signin(email, password);
        navigate("/home");
      }
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async () => {
    setError("");
    setLoading(true);
    try {
      const verifier = setupRecaptcha("recaptcha-container");
      const result = await sendOTP(phone, verifier);
      setConfirmResult(result);
      setOtpSent(true);
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setError("");
    setLoading(true);
    try {
      await confirmResult.confirm(otp);
      navigate("/profile");
    } catch (err) {
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-stone-200 opacity-60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 rounded-2xl mb-4 shadow-xl">
            <span className="text-2xl">🏛️</span>
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
          {/* Tab selector */}
          <div className="flex border-b border-stone-100">
            {["signin", "signup", "phone"].map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setError(""); }}
                className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-all
                  ${mode === m
                    ? "text-stone-900 border-b-2 border-stone-900"
                    : "text-stone-400 hover:text-stone-600"
                  }`}
              >
                {m === "signin" ? "Sign In" : m === "signup" ? "Sign Up" : "📱 OTP"}
              </button>
            ))}
          </div>

          <div className="p-8">
            {error && <Alert type="error">{error}</Alert>}

            {/* Email/Password forms */}
            {(mode === "signin" || mode === "signup") && (
              <form onSubmit={handleEmailAuth} className="flex flex-col gap-4 mt-4">
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
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button type="submit" loading={loading} className="mt-2 w-full">
                  {mode === "signin" ? "Sign In →" : "Create Account →"}
                </Button>
              </form>
            )}

            {/* Phone OTP */}
            {mode === "phone" && (
              <div className="flex flex-col gap-4 mt-4">
                {!otpSent ? (
                  <>
                    <Input
                      label="Mobile Number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div id="recaptcha-container" />
                    <Button loading={loading} onClick={handleSendOTP} className="w-full">
                      Send OTP →
                    </Button>
                  </>
                ) : (
                  <>
                    <Alert type="info">OTP sent to {phone}</Alert>
                    <Input
                      label="Enter OTP"
                      type="text"
                      placeholder="6-digit code"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <Button loading={loading} onClick={handleVerifyOTP} className="w-full">
                      Verify & Sign In →
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </Card>

        <p className="text-center text-stone-400 text-xs mt-6">
          Secured by Firebase Authentication · TN Govt. Portal
        </p>
      </div>
    </div>
  );
}

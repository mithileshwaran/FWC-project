import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { Button, Card, Input, Alert } from "../components/UI";

const PROCESS_STEPS = [
  {
    title: "Create Account",
    desc: "Register with email and basic profile details.",
  },
  {
    title: "Choose Type",
    desc: "Select buyer or seller registration path.",
  },
  {
    title: "Upload Documents",
    desc: "Submit ID, address, and property proof.",
  },
  {
    title: "Verification",
    desc: "Records are validated and status is updated.",
  },
];

export default function HomePage() {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-100 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-200/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-200/50 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 pt-8 pb-16">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-200 font-black flex items-center justify-center">
              TN
            </div>
            <div>
              <h1 className="text-xl font-black text-stone-900" style={{ fontFamily: "Georgia, serif" }}>
                TN Land Registry
              </h1>
              <p className="text-xs text-stone-500">Digital Property Registration Portal</p>
            </div>
          </div>
          <Link to="/auth" className="text-sm font-semibold text-stone-700 underline">
            Full Auth Page
          </Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 items-start">
          <section className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Secure Online Land Registration for Tamil Nadu
            </h2>
            <p className="mt-4 text-stone-600 max-w-2xl">
              Complete buyer or seller registration with guided steps, document upload, and verification tracking.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROCESS_STEPS.map((step, idx) => (
                <Card key={step.title} className="p-5 border-l-4 border-amber-500">
                  <p className="text-xs tracking-widest text-stone-500 font-bold">STEP {idx + 1}</p>
                  <h3 className="mt-1 font-black text-stone-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{step.desc}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Button onClick={() => navigate("/auth")} className="px-8">
                Start Registration
              </Button>
              <Button variant="secondary" onClick={() => navigate("/dashboard")} className="px-8">
                View Dashboard
              </Button>
            </div>
          </section>

          <aside className="lg:sticky lg:top-8">
            <Card className="shadow-2xl">
              <div className="p-6">
                <h3 className="text-xl font-black text-stone-900">Quick Login</h3>
                <p className="text-sm text-stone-500 mt-1">Sign in from here directly.</p>
                {error && <Alert type="error">{error}</Alert>}
                <form onSubmit={handleLogin} className="mt-4 flex flex-col gap-4">
                  <Input
                    label="Email"
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
                  <Button type="submit" loading={loading} className="w-full">
                    Login
                  </Button>
                  <Link to="/auth" className="text-sm text-stone-700 underline text-center">
                    Sign up / Forgot password
                  </Link>
                </form>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

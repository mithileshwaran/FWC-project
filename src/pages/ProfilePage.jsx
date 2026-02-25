import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { saveProfile } from "../utils/firestore";
import { Input, Button, Card, Alert } from "../components/UI";

export default function ProfilePage() {
  const { user, sendEmailOtp, logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: user?.email || "",
    mobile: "",
    dob: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSave = async () => {
    setError("");
    if (!user?.uid) {
      setError("Session expired. Please sign in again.");
      return;
    }
    if (!form.name || !form.email || !form.mobile || !form.dob || !form.address) {
      setError("Please fill all fields.");
      return;
    }
    if (form.mobile.replace(/\D/g, "").length < 10) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      const withTimeout = (promise, ms, message) =>
        Promise.race([
          promise,
          new Promise((_, reject) => setTimeout(() => reject(new Error(message)), ms)),
        ]);

      await withTimeout(
        saveProfile(user.uid, { ...form, uid: user.uid }),
        20000,
        "Saving profile timed out. Please retry."
      );

      let otpInfo = "Verification email sent.";
      try {
        await withTimeout(sendEmailOtp(), 20000, "OTP sending timed out.");
      } catch {
        otpInfo = "Profile saved. OTP send failed now; you can resend after login.";
      }

      setSuccess(`Account created successfully. ${otpInfo}`);
      await logout();
      navigate("/auth", {
        replace: true,
        state: { success: `Account created successfully. ${otpInfo}` },
      });
    } catch (err) {
      const msg = (err?.message || "").toLowerCase();
      if (msg.includes("permission")) {
        setError("Permission denied. Firestore rules must allow write for the logged-in user.");
      } else if (msg.includes("network") || msg.includes("offline") || msg.includes("unavailable")) {
        setError("Network issue while saving profile. Check internet and retry.");
      } else {
        setError(err?.message || "Failed to save profile.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(145deg,#020617_20%,#0f172a_100%)]" />
      </div>

      <div className="relative w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mt-2">
            Create Your Profile
          </h1>
          <p className="text-slate-300 mt-1">Complete details and continue to email OTP verification</p>
        </div>

        <Card>
          <div className="p-8">
            <div className="flex flex-col gap-4">
              {error && <Alert type="error">{error}</Alert>}
              {success && <Alert type="success">{success}</Alert>}
              <Input label="Full Name" placeholder="Arjun Subramaniam" value={form.name} onChange={set("name")} />
              <Input label="Email Address" type="email" placeholder="arjun@example.com" value={form.email} onChange={set("email")} />
              <Input label="Mobile Number" type="tel" placeholder="9876543210" value={form.mobile} onChange={set("mobile")} />
              <Input label="Date of Birth" type="date" value={form.dob} onChange={set("dob")} />
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Address</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:outline-none focus:border-cyan-400 transition-all text-slate-100 font-medium resize-none"
                  rows={3}
                  placeholder="No. 12, Anna Nagar, Chennai - 600040"
                  value={form.address}
                  onChange={set("address")}
                />
              </div>
              <Button loading={loading} onClick={handleSave} className="w-full mt-2">
                Save Profile and Send OTP
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

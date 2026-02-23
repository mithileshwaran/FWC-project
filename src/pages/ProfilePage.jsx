// pages/ProfilePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { saveProfile } from "../utils/firestore";
import { Input, Button, Card, Alert } from "../components/UI";

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: user?.email || "",
    mobile: user?.phoneNumber || "",
    dob: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const saveWithTimeout = (promise, ms = 15000) =>
    Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout. Check internet and try again.")), ms)
      ),
    ]);

  const handleSave = async () => {
    setError("");
    setSaved(false);
    if (!user?.uid) {
      setError("Session expired. Please sign in again.");
      return;
    }
    if (!form.name || !form.email || !form.mobile || !form.dob || !form.address) {
      setError("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      await saveWithTimeout(saveProfile(user.uid, { ...form, uid: user.uid }));
      setSaved(true);
    } catch (err) {
      const msg = err?.message || "";
      if (msg.includes("permission")) {
        setError("Permission denied. Check Firestore rules for signed-in users.");
      } else if (msg.includes("network") || msg.includes("timeout")) {
        setError("Network issue. Please check internet and try again.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <span className="text-4xl">👤</span>
          <h1 className="text-2xl font-black text-stone-900 mt-2" style={{ fontFamily: "Georgia, serif" }}>
            Create Your Profile
          </h1>
          <p className="text-stone-500 mt-1">Let's get to know you before we begin</p>
        </div>

        <Card>
          <div className="p-8">
            {!saved ? (
              <div className="flex flex-col gap-4">
                {error && <Alert type="error">{error}</Alert>}
                <Input label="Full Name" placeholder="Arjun Subramaniam" value={form.name} onChange={set("name")} />
                <Input label="Email Address" type="email" placeholder="arjun@example.com" value={form.email} onChange={set("email")} />
                <Input label="Mobile Number" type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={set("mobile")} />
                <Input label="Date of Birth" type="date" value={form.dob} onChange={set("dob")} />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Address</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 bg-white focus:outline-none focus:border-amber-500 transition-all text-stone-800 font-medium resize-none"
                    rows={3}
                    placeholder="No. 12, Anna Nagar, Chennai - 600040"
                    value={form.address}
                    onChange={set("address")}
                  />
                </div>
                <Button loading={loading} onClick={handleSave} className="w-full mt-2">
                  Save Profile →
                </Button>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-xl font-black text-stone-900 mb-2">Profile Saved!</h2>
                <p className="text-stone-500 mb-6">You're ready to start your registration</p>
                <Button onClick={() => navigate("/registration-type")} className="w-full">
                  Start New Registration →
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

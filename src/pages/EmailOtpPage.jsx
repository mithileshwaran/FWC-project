import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { Input, Button, Card, Alert } from "../components/UI";

const RESEND_SECONDS = 60;

export default function EmailOtpPage() {
  const { user, sendEmailOtp, verifyEmailOtp } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  const canResend = useMemo(() => secondsLeft === 0, [secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0) return undefined;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const extractCode = (value) => {
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

  const handleVerify = async () => {
    const parsed = extractCode(code);
    if (!parsed) {
      setError("Enter OTP code/link from your email.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await verifyEmailOtp(parsed);
      setSuccess("Account verified successfully.");
      navigate("/registration-type");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;
    setError("");
    setSuccess("");
    setSending(true);
    try {
      await sendEmailOtp();
      setSuccess("OTP email sent again.");
      setSecondsLeft(RESEND_SECONDS);
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-2xl font-black text-stone-900" style={{ fontFamily: "Georgia, serif" }}>
              Enter Your OTP
            </h1>
            <p className="text-stone-600 text-sm">
              OTP sent to: <span className="font-semibold">{user?.email || "-"}</span>
            </p>
            {error && <Alert type="error">{error}</Alert>}
            {success && <Alert type="success">{success}</Alert>}
            <Input
              label="Email OTP Code or Link"
              type="text"
              placeholder="Paste OTP code or full email link"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button loading={loading} onClick={handleVerify} className="w-full">
              Verify OTP
            </Button>
            <Button
              variant="secondary"
              loading={sending}
              onClick={handleResend}
              disabled={!canResend || sending}
              className="w-full"
            >
              {canResend ? "Resend OTP" : `Resend OTP in ${secondsLeft}s`}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

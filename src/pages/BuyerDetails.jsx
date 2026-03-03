// pages/BuyerDetails.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { saveBuyer, updateVerificationStatus } from "../utils/firestore";
import { Input, Button, Card, StepIndicator, FileUpload, Alert } from "../components/UI";

const STEPS = ["Personal", "Property", "Documents"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,}$/;

export default function BuyerDetails() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const [personal, setPersonal] = useState({
    name: "", email: "", mobile: "", dob: "", address: "",
  });

  const [property, setProperty] = useState({
    surveyNumber: "", location: "", size: "",
  });

  const [docNames, setDocNames] = useState({
    idProof: "", addressProof: "", propertyDocs: "",
  });

  const setP = (k) => (e) => setPersonal((prev) => ({ ...prev, [k]: e.target.value }));
  const setProp = (k) => (e) => setProperty((prev) => ({ ...prev, [k]: e.target.value }));

  const handleDoc = (key) => (e) => {
    const file = e.target.files[0];
    if (file) setDocNames((d) => ({ ...d, [key]: file.name }));
  };

  const validateStep = () => {
    if (step === 0) {
      const name = personal.name.trim();
      const email = personal.email.trim();
      const mobile = personal.mobile.trim();
      const address = personal.address.trim();
      const dob = personal.dob;

      if (!name || !email || !mobile || !dob || !address)
        return "Please fill all personal details.";
      if (!NAME_REGEX.test(name)) {
        return "Enter a valid full name.";
      }
      if (!EMAIL_REGEX.test(email)) {
        return "Enter a valid email address.";
      }
      if (!MOBILE_REGEX.test(mobile)) {
        return "Enter a valid mobile number (10 digits or +91 format).";
      }

      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
      }
      if (Number.isNaN(birthDate.getTime()) || age < 18) {
        return "Buyer must be at least 18 years old.";
      }
    }
    if (step === 1) {
      if (!property.surveyNumber || !property.location || !property.size)
        return "Please fill all property details.";
    }
    return "";
  };

  const next = () => {
    const err = validateStep();
    if (err) { setError(err); return; }
    setError("");
    setStep((s) => s + 1);
  };

  const verifyWithTNREGINET = async (surveyNumber) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(surveyNumber.toUpperCase().startsWith("TN"));
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    if (!docNames.idProof || !docNames.addressProof || !docNames.propertyDocs) {
      setError("Please upload all required documents.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const uid = user.uid;

      // Save buyer data without file URLs (Storage not available on free plan)
      await saveBuyer(uid, {
        uid,
        ...personal,
        property,
        documents: {
          idProof: docNames.idProof,
          addressProof: docNames.addressProof,
          propertyDocs: docNames.propertyDocs,
        },
        status: "pending",
        verified: false,
      });

      // Verify with TNREGINET (simulated)
      setVerifying(true);
      const isVerified = await verifyWithTNREGINET(property.surveyNumber);
      await updateVerificationStatus("buyers", uid, isVerified);
      setVerificationResult(isVerified);
      setVerifying(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (verificationResult !== null) {
    return (
      <div className="relative min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(145deg,#020617_20%,#0f172a_100%)]" />
        <Card className="relative z-10 max-w-md w-full p-10 text-center">
          <div className="text-6xl mb-4">{verificationResult ? "🎉" : "⚠️"}</div>
          <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Georgia, serif" }}>
            {verificationResult ? "Document Verified!" : "Manual Review Required"}
          </h2>
          <p className="text-slate-300 mb-6">
            {verificationResult
              ? "Your land records have been cross-verified with TNREGINET. Registration is complete!"
              : "We couldn't auto-verify your documents. They've been flagged for manual review by the Registrar."}
          </p>
          <Button onClick={() => navigate("/dashboard")} className="w-full">
            Go to Dashboard →
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 py-10 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(145deg,#020617_20%,#0f172a_100%)]" />
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-3xl">🛒</span>
          <h1 className="text-2xl font-black text-white mt-2" style={{ fontFamily: "Georgia, serif" }}>
            Buyer Registration
          </h1>
        </div>

        <Card>
          <div className="p-8">
            <StepIndicator steps={STEPS} current={step} />
            {error && <Alert type="error">{error}</Alert>}

            {step === 0 && (
              <div className="flex flex-col gap-4">
                <Input label="Full Name" placeholder="Arjun Subramaniam" value={personal.name} onChange={setP("name")} />
                <Input label="Email" type="email" placeholder="arjun@example.com" value={personal.email} onChange={setP("email")} />
                <Input label="Mobile" type="tel" placeholder="+91 98765 43210" value={personal.mobile} onChange={setP("mobile")} />
                <Input label="Date of Birth" type="date" value={personal.dob} onChange={setP("dob")} />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Address</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:outline-none focus:border-cyan-400 transition-all text-slate-100 placeholder-slate-500 font-medium resize-none"
                    rows={3}
                    placeholder="No. 12, Anna Nagar, Chennai - 600040"
                    value={personal.address}
                    onChange={setP("address")}
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-4">
                <Alert type="info">
                  Survey numbers will be cross-verified with TNREGINET government records.
                </Alert>
                <Input label="Survey Number" placeholder="TN-CHN-2024-001" value={property.surveyNumber} onChange={setProp("surveyNumber")} />
                <Input label="Property Location" placeholder="Anna Nagar, Chennai" value={property.location} onChange={setProp("location")} />
                <Input label="Property Size (sq. ft)" type="number" placeholder="1200" value={property.size} onChange={setProp("size")} />
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <Alert type="warning">
                  Upload clear scanned copies. Supported formats: PDF, JPG, PNG (max 5MB each)
                </Alert>
                <FileUpload label="ID Proof (Aadhaar / PAN / Passport)" accept=".pdf,.jpg,.jpeg,.png" onChange={handleDoc("idProof")} fileName={docNames.idProof} />
                <FileUpload label="Address Proof" accept=".pdf,.jpg,.jpeg,.png" onChange={handleDoc("addressProof")} fileName={docNames.addressProof} />
                <FileUpload label="Property Documents" accept=".pdf,.jpg,.jpeg,.png" onChange={handleDoc("propertyDocs")} fileName={docNames.propertyDocs} />
              </div>
            )}

            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <Button variant="secondary" onClick={() => setStep((s) => s - 1)} className="flex-1">
                  ← Back
                </Button>
              )}
              {step < 2 ? (
                <Button onClick={next} className="flex-1">Next →</Button>
              ) : (
                <Button onClick={handleSubmit} loading={loading || verifying} className="flex-1">
                  {verifying ? "Verifying with TNREGINET…" : "Submit Registration →"}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// pages/BuyerDetails.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { saveBuyer, uploadFile, updateVerificationStatus } from "../utils/firestore";
import { Input, Button, Card, StepIndicator, FileUpload, Alert } from "../components/UI";

const STEPS = ["Personal", "Property", "Documents"];

export default function BuyerDetails() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  // Step 1
  const [personal, setPersonal] = useState({
    name: "", email: "", mobile: "", dob: "", address: "",
  });

  // Step 2
  const [property, setProperty] = useState({
    surveyNumber: "", location: "", size: "",
  });

  // Step 3
  const [docs, setDocs] = useState({
    idProof: null, addressProof: null, propertyDocs: null,
  });
  const [docNames, setDocNames] = useState({
    idProof: "", addressProof: "", propertyDocs: "",
  });

  const setP = (k) => (e) =>
    setPersonal((prev) => ({ ...prev, [k]: e.target.value }));
  const setProp = (k) => (e) =>
    setProperty((prev) => ({ ...prev, [k]: e.target.value }));

  const handleDoc = (key) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocs((d) => ({ ...d, [key]: file }));
      setDocNames((d) => ({ ...d, [key]: file.name }));
    }
  };

  const validateStep = () => {
    if (step === 0) {
      if (!personal.name || !personal.email || !personal.mobile || !personal.dob || !personal.address)
        return "Please fill all personal details.";
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

  // Simulate TNREGINET API check (replace with real API endpoint)
  const verifyWithTNREGINET = async (surveyNumber) => {
    // Simulated verification — replace with real TNREGINET API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mocked: survey numbers starting with "TN" are considered verified
        resolve(surveyNumber.toUpperCase().startsWith("TN"));
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    if (!user?.uid) {
      setError("Session expired. Please sign in again.");
      return;
    }
    if (!docs.idProof || !docs.addressProof || !docs.propertyDocs) {
      setError("Please upload all required documents.");
      return;
    }
    setError("");
    setSubmitMessage("Uploading documents...");
    setLoading(true);
    try {
      const uid = user.uid;
      const withTimeout = (promise, ms, msg) =>
        Promise.race([
          promise,
          new Promise((_, reject) => setTimeout(() => reject(new Error(msg)), ms)),
        ]);

      const idPath = `buyers/${uid}/id_proof_${Date.now()}_${docs.idProof.name}`;
      const addressPath = `buyers/${uid}/address_proof_${Date.now()}_${docs.addressProof.name}`;
      const propertyPath = `buyers/${uid}/property_docs_${Date.now()}_${docs.propertyDocs.name}`;

      // Upload files to Firebase Storage
      const [idUrl, addressUrl, propertyUrl] = await withTimeout(
        Promise.all([
          uploadFile(idPath, docs.idProof),
          uploadFile(addressPath, docs.addressProof),
          uploadFile(propertyPath, docs.propertyDocs),
        ]),
        60000,
        "Upload timeout after 60s. Please retry with smaller files or check network."
      );

      setSubmitMessage("Saving registration...");
      await saveBuyer(uid, {
        uid,
        ...personal,
        property,
        documents: { idUrl, addressUrl, propertyUrl },
        status: "pending",
        verified: false,
      });

      // Verify with TNREGINET
      setVerifying(true);
      setSubmitMessage("Verifying with TNREGINET...");
      const isVerified = await verifyWithTNREGINET(property.surveyNumber);
      await updateVerificationStatus("buyers", uid, isVerified);
      setVerificationResult(isVerified);
      setVerifying(false);
    } catch (err) {
      const msg = (err?.message || "").toLowerCase();
      if (msg.includes("permission")) {
        setError("Permission denied. Check Firebase Storage/Firestore rules for this user.");
      } else if (msg.includes("network") || msg.includes("timeout")) {
        setError(err.message || "Network timeout. Please retry.");
      } else {
        setError(err.message || "Registration failed. Please retry.");
      }
    } finally {
      setVerifying(false);
      setSubmitMessage("");
      setLoading(false);
    }
  };

  if (verificationResult !== null) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-10 text-center">
          <div className="text-6xl mb-4">{verificationResult ? "🎉" : "⚠️"}</div>
          <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Georgia, serif" }}>
            {verificationResult ? "Document Verified!" : "Manual Review Required"}
          </h2>
          <p className="text-slate-400 mb-6">
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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4">
      <div className="max-w-xl mx-auto">
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
            {submitMessage && <Alert type="info">{submitMessage}</Alert>}

            {/* Step 1: Personal */}
            {step === 0 && (
              <div className="flex flex-col gap-4">
                <Input label="Full Name" placeholder="Arjun Subramaniam" value={personal.name} onChange={setP("name")} />
                <Input label="Email" type="email" placeholder="arjun@example.com" value={personal.email} onChange={setP("email")} />
                <Input label="Mobile" type="tel" placeholder="+91 98765 43210" value={personal.mobile} onChange={setP("mobile")} />
                <Input label="Date of Birth" type="date" value={personal.dob} onChange={setP("dob")} />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Address</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-700 bg-slate-900 focus:outline-none focus:border-cyan-400 transition-all text-slate-100 font-medium resize-none"
                    rows={3}
                    placeholder="No. 12, Anna Nagar, Chennai - 600040"
                    value={personal.address}
                    onChange={setP("address")}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Property */}
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

            {/* Step 3: Documents */}
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

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <Button variant="secondary" onClick={() => setStep((s) => s - 1)} className="flex-1">
                  ← Back
                </Button>
              )}
              {step < 2 ? (
                <Button onClick={next} className="flex-1">
                  Next →
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  loading={loading || verifying}
                  className="flex-1"
                >
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


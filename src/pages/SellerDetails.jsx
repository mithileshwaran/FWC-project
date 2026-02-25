import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { saveSeller, uploadFile, updateVerificationStatus } from "../utils/firestore";
import { Input, Button, Card, StepIndicator, FileUpload, Alert } from "../components/UI";
import VideoConsent from "../components/VideoConsent";

const STEPS = ["Personal", "Property", "Documents", "Video Consent"];

export default function SellerDetails() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [videoComplete, setVideoComplete] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const [personal, setPersonal] = useState({ name: "", email: "", mobile: "", businessName: "", address: "" });
  const [property, setProperty] = useState({ surveyNumber: "", ownershipDocs: "" });
  const [docs, setDocs] = useState({ idProof: null, propertyDocs: null });
  const [docNames, setDocNames] = useState({ idProof: "", propertyDocs: "" });

  const setP = (k) => (e) => setPersonal((prev) => ({ ...prev, [k]: e.target.value }));
  const setProp = (k) => (e) => setProperty((prev) => ({ ...prev, [k]: e.target.value }));

  const withTimeout = (promise, ms, msg) =>
    Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error(msg)), ms))]);

  const handleDoc = (key) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocs((d) => ({ ...d, [key]: file }));
      setDocNames((d) => ({ ...d, [key]: file.name }));
    }
  };

  const validateStep = () => {
    if (step === 0 && (!personal.name || !personal.email || !personal.mobile || !personal.address)) return "Please fill all personal details.";
    if (step === 1 && (!property.surveyNumber || !property.ownershipDocs)) return "Please fill all property details.";
    if (step === 2 && (!docs.idProof || !docs.propertyDocs)) return "Please upload all required documents.";
    return "";
  };

  const next = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep((s) => s + 1);
  };

  const verifyWithTNREGINET = async (surveyNumber) =>
    new Promise((resolve) => setTimeout(() => resolve(surveyNumber.toUpperCase().startsWith("TN")), 1500));

  const handleSubmit = async () => {
    if (!user?.uid) {
      setError("Session expired. Please sign in again.");
      return;
    }
    if (!videoComplete || !videoData) {
      setError("Please complete video consent before final submission.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const uid = user.uid;
      setSubmitMessage("Uploading documents...");
      const stamp = Date.now();
      const [idUrl, propUrl] = await Promise.all([
          uploadFile(`sellers/${uid}/id_proof_${stamp}_${docs.idProof.name}`, docs.idProof),
          uploadFile(`sellers/${uid}/property_docs_${stamp}_${docs.propertyDocs.name}`, docs.propertyDocs),
        ]);

      setSubmitMessage("Saving registration...");
      await withTimeout(
        saveSeller(uid, {
          uid,
          ...personal,
          property,
          documents: { idUrl, propUrl },
          status: "submitted",
          verified: false,
          videoConsent: videoData,
          submittedAt: new Date().toISOString(),
        }),
        20000,
        "Saving timed out. Please retry."
      );

      setSubmitted(true);
      setSubmitMessage("Registration submitted successfully.");

      try {
        const isVerified = await withTimeout(verifyWithTNREGINET(property.surveyNumber), 8000, "Verify timeout");
        await withTimeout(updateVerificationStatus("sellers", uid, isVerified), 8000, "Status update timeout");
      } catch {
        // keep silent; submission already completed.
      }
    } catch (err) {
      const msg = (err?.message || "").toLowerCase();
      if (msg.includes("permission")) {
        setError("Permission denied. Check Firebase Storage/Firestore rules.");
      } else if (msg.includes("network") || msg.includes("timeout")) {
        setError(err.message || "Network issue. Please retry.");
      } else {
        setError(err.message || "Registration failed. Please retry.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVideoComplete = (data) => {
    setVideoData(data);
    setVideoComplete(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-10 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Registration Submitted</h2>
          <p className="text-slate-300 mb-6">Your seller registration and video consent are submitted for review.</p>
          <Button onClick={() => navigate("/dashboard")} className="w-full">Go to Dashboard</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-white mt-2">Seller Registration</h1>
        </div>

        <Card>
          <div className="p-8">
            <StepIndicator steps={STEPS} current={step} />
            {error && <Alert type="error">{error}</Alert>}
            {submitMessage && <Alert type="info">{submitMessage}</Alert>}

            {step === 0 && (
              <div className="flex flex-col gap-4">
                <Input label="Full Name" value={personal.name} onChange={setP("name")} />
                <Input label="Email" type="email" value={personal.email} onChange={setP("email")} />
                <Input label="Mobile" type="tel" value={personal.mobile} onChange={setP("mobile")} />
                <Input label="Business / Company Name (optional)" value={personal.businessName} onChange={setP("businessName")} />
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:outline-none focus:border-cyan-400 transition-all text-slate-100 font-medium resize-none"
                  rows={3}
                  placeholder="Address"
                  value={personal.address}
                  onChange={setP("address")}
                />
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-4">
                <Input label="Survey Number" value={property.surveyNumber} onChange={setProp("surveyNumber")} />
                <Input label="Land Ownership Document Number" value={property.ownershipDocs} onChange={setProp("ownershipDocs")} />
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <FileUpload label="ID Proof" accept=".pdf,.jpg,.png" onChange={handleDoc("idProof")} fileName={docNames.idProof} />
                <FileUpload label="Property Documents" accept=".pdf,.jpg,.png" onChange={handleDoc("propertyDocs")} fileName={docNames.propertyDocs} />
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-4">
                <Alert type="info">Record and submit video consent. After that, click final submit.</Alert>
                <VideoConsent onComplete={handleVideoComplete} />
                {videoComplete && (
                  <Button onClick={handleSubmit} loading={loading} className="w-full mt-2">Submit Registration</Button>
                )}
              </div>
            )}

            {step < 3 && (
              <div className="flex gap-3 mt-8">
                {step > 0 && <Button variant="secondary" onClick={() => setStep((s) => s - 1)} className="flex-1">Back</Button>}
                <Button onClick={next} className="flex-1">Next</Button>
              </div>
            )}

            {step === 3 && !videoComplete && (
              <Button variant="secondary" onClick={() => setStep(2)} className="w-full mt-6">Back</Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}


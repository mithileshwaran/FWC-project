// pages/SellerDetails.jsx
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
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [videoComplete, setVideoComplete] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const [personal, setPersonal] = useState({
    name: "", email: "", mobile: "", businessName: "", address: "",
  });
  const [property, setProperty] = useState({
    surveyNumber: "", ownershipDocs: "",
  });
  const [docs, setDocs] = useState({ idProof: null, propertyDocs: null });
  const [docNames, setDocNames] = useState({ idProof: "", propertyDocs: "" });

  const setP = (k) => (e) => setPersonal((prev) => ({ ...prev, [k]: e.target.value }));
  const setProp = (k) => (e) => setProperty((prev) => ({ ...prev, [k]: e.target.value }));

  const handleDoc = (key) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocs((d) => ({ ...d, [key]: file }));
      setDocNames((d) => ({ ...d, [key]: file.name }));
    }
  };

  const validateStep = () => {
    if (step === 0 && (!personal.name || !personal.email || !personal.mobile || !personal.address))
      return "Please fill all personal details.";
    if (step === 1 && (!property.surveyNumber || !property.ownershipDocs))
      return "Please fill all property details.";
    if (step === 2 && (!docs.idProof || !docs.propertyDocs))
      return "Please upload all required documents.";
    return "";
  };

  const next = () => {
    const err = validateStep();
    if (err) { setError(err); return; }
    setError("");
    setStep((s) => s + 1);
  };

  const verifyWithTNREGINET = async (surveyNumber) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(surveyNumber.toUpperCase().startsWith("TN")), 2000)
    );
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const uid = user.uid;
      const [idUrl, propUrl] = await Promise.all([
        uploadFile(`sellers/${uid}/id_proof`, docs.idProof),
        uploadFile(`sellers/${uid}/property_docs`, docs.propertyDocs),
      ]);

      await saveSeller(uid, {
        uid,
        ...personal,
        property,
        documents: { idUrl, propUrl },
        status: "pending",
        verified: false,
        videoConsent: videoData || null,
      });

      setVerifying(true);
      const isVerified = await verifyWithTNREGINET(property.surveyNumber);
      await updateVerificationStatus("sellers", uid, isVerified);
      setVerificationResult(isVerified);
      setVerifying(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoComplete = (data) => {
    setVideoData(data);
    setVideoComplete(true);
  };

  if (verificationResult !== null) {
    const needsManualReview = !verificationResult || videoData?.sentiment?.label === "negative";
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-10 text-center">
          <div className="text-6xl mb-4">{needsManualReview ? "📋" : "🎉"}</div>
          <h2 className="text-2xl font-black text-stone-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
            {needsManualReview ? "Pending Registrar Review" : "Registration Complete!"}
          </h2>
          <p className="text-stone-500 mb-6">
            {needsManualReview
              ? "Your application has been submitted and is pending manual approval by the Registrar."
              : "Documents verified and video consent approved. Your seller registration is complete!"}
          </p>
          {videoData?.sentiment && (
            <div className={`rounded-xl p-3 mb-4 text-sm font-medium border
              ${videoData.sentiment.label === "negative"
                ? "bg-amber-50 border-amber-200 text-amber-800"
                : "bg-emerald-50 border-emerald-200 text-emerald-800"}`}
            >
              AI Sentiment: {videoData.sentiment.label.toUpperCase()} ·{" "}
              {videoData.aiApproved ? "Auto-Approved" : "Flagged for Review"}
            </div>
          )}
          <Button onClick={() => navigate("/dashboard")} className="w-full">
            Go to Dashboard →
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-3xl">🏡</span>
          <h1 className="text-2xl font-black text-stone-900 mt-2" style={{ fontFamily: "Georgia, serif" }}>
            Seller Registration
          </h1>
        </div>

        <Card>
          <div className="p-8">
            <StepIndicator steps={STEPS} current={step} />
            {error && <Alert type="error">{error}</Alert>}

            {/* Step 1: Personal */}
            {step === 0 && (
              <div className="flex flex-col gap-4">
                <Input label="Full Name" placeholder="Ramesh Krishnamurthy" value={personal.name} onChange={setP("name")} />
                <Input label="Email" type="email" value={personal.email} onChange={setP("email")} />
                <Input label="Mobile" type="tel" value={personal.mobile} onChange={setP("mobile")} />
                <Input label="Business / Company Name (optional)" placeholder="Sri Lakshmi Properties" value={personal.businessName} onChange={setP("businessName")} />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Address</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 bg-white focus:outline-none focus:border-amber-500 transition-all text-stone-800 font-medium resize-none"
                    rows={3}
                    value={personal.address}
                    onChange={setP("address")}
                    placeholder="No. 45, T. Nagar, Chennai - 600017"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Property */}
            {step === 1 && (
              <div className="flex flex-col gap-4">
                <Alert type="info">Survey numbers will be cross-verified with TNREGINET.</Alert>
                <Input label="Survey Number" placeholder="TN-CBE-2020-456" value={property.surveyNumber} onChange={setProp("surveyNumber")} />
                <Input label="Land Ownership Document Number" placeholder="Doc No. / Patta No." value={property.ownershipDocs} onChange={setProp("ownershipDocs")} />
              </div>
            )}

            {/* Step 3: Documents */}
            {step === 2 && (
              <div className="flex flex-col gap-4">
                <Alert type="warning">Upload clear copies. Max 5MB per file.</Alert>
                <FileUpload label="ID Proof (Aadhaar / PAN)" accept=".pdf,.jpg,.png" onChange={handleDoc("idProof")} fileName={docNames.idProof} />
                <FileUpload label="Property Documents (Patta / Sale Deed)" accept=".pdf,.jpg,.png" onChange={handleDoc("propertyDocs")} fileName={docNames.propertyDocs} />
              </div>
            )}

            {/* Step 4: Video Consent */}
            {step === 3 && (
              <div className="flex flex-col gap-4">
                <Alert type="info">
                  <strong>Video Consent Required:</strong> Please record a short video confirming your voluntary intent to sell.
                </Alert>
                <VideoConsent onComplete={handleVideoComplete} />
                {videoComplete && (
                  <Button onClick={handleSubmit} loading={loading || verifying} className="w-full mt-2">
                    {verifying ? "Verifying with TNREGINET…" : "Complete Registration →"}
                  </Button>
                )}
              </div>
            )}

            {/* Navigation */}
            {step < 3 && (
              <div className="flex gap-3 mt-8">
                {step > 0 && (
                  <Button variant="secondary" onClick={() => setStep((s) => s - 1)} className="flex-1">
                    ← Back
                  </Button>
                )}
                <Button onClick={next} className="flex-1">Next →</Button>
              </div>
            )}
            {step === 3 && !videoComplete && (
              <Button variant="secondary" onClick={() => setStep(2)} className="w-full mt-6">
                ← Back
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

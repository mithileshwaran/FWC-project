// pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import { getBuyer, getSeller } from "../utils/firestore";
import { Button, Card } from "../components/UI";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [buyerData, setBuyerData] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    Promise.all([getBuyer(user.uid), getSeller(user.uid)]).then(([b, s]) => {
      setBuyerData(b);
      setSellerData(s);
      setLoading(false);
    });
  }, [user]);

  const StatusBadge = ({ status, verified }) => {
    if (verified && (status === "approved" || !status))
      return <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">✅ Verified & Registered</span>;
    if (status === "approved")
      return <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">✅ Approved</span>;
    if (status === "rejected")
      return <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">❌ Rejected</span>;
    return <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">⏳ Pending Review</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏛️</span>
          <div>
            <h1 className="font-black text-stone-900" style={{ fontFamily: "Georgia, serif" }}>
              TN Land Registry
            </h1>
            <p className="text-stone-400 text-xs">{user?.email || user?.phoneNumber}</p>
          </div>
        </div>
        <Button variant="secondary" onClick={logout} className="text-sm py-2">
          Sign Out
        </Button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-black text-stone-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
          Welcome back 👋
        </h2>
        <p className="text-stone-500 mb-8">Here's an overview of your registrations.</p>

        {loading ? (
          <div className="text-stone-400 text-center py-20">Loading your data…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Buyer card */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛒</span>
                  <h3 className="font-black text-stone-900">Buyer Registration</h3>
                </div>
                {buyerData && <StatusBadge status={buyerData.approvalStatus} verified={buyerData.verified} />}
              </div>
              {buyerData ? (
                <div className="text-sm text-stone-600 space-y-1">
                  <p><span className="font-semibold">Survey #:</span> {buyerData.property?.surveyNumber}</p>
                  <p><span className="font-semibold">Location:</span> {buyerData.property?.location}</p>
                  <p><span className="font-semibold">TNREGINET:</span> {buyerData.verified ? "✅ Verified" : "⏳ Pending"}</p>
                </div>
              ) : (
                <div className="text-stone-400 text-sm">
                  <p className="mb-4">No buyer registration yet.</p>
                  <Button onClick={() => navigate("/buyer")} className="w-full text-sm py-2">
                    Register as Buyer →
                  </Button>
                </div>
              )}
            </Card>

            {/* Seller card */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏡</span>
                  <h3 className="font-black text-stone-900">Seller Registration</h3>
                </div>
                {sellerData && <StatusBadge status={sellerData.approvalStatus} verified={sellerData.verified} />}
              </div>
              {sellerData ? (
                <div className="text-sm text-stone-600 space-y-1">
                  <p><span className="font-semibold">Survey #:</span> {sellerData.property?.surveyNumber}</p>
                  <p><span className="font-semibold">Video Consent:</span>{" "}
                    {sellerData.videoConsent ? (
                      <span className={sellerData.videoConsent.aiApproved ? "text-emerald-600" : "text-amber-600"}>
                        {sellerData.videoConsent.aiApproved ? "✅ AI Approved" : "⚠️ Manual Review"}
                      </span>
                    ) : "Not recorded"}
                  </p>
                  <p><span className="font-semibold">TNREGINET:</span> {sellerData.verified ? "✅ Verified" : "⏳ Pending"}</p>
                </div>
              ) : (
                <div className="text-stone-400 text-sm">
                  <p className="mb-4">No seller registration yet.</p>
                  <Button onClick={() => navigate("/seller")} className="w-full text-sm py-2">
                    Register as Seller →
                  </Button>
                </div>
              )}
            </Card>
          </div>
        )}

        <Button variant="amber" onClick={() => navigate("/registration-type")} className="w-full sm:w-auto">
          + Start New Registration
        </Button>
      </div>
    </div>
  );
}

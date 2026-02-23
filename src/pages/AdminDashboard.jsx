// pages/AdminDashboard.jsx
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { updateApprovalStatus } from "../utils/firestore";
import { useAuth } from "../hooks/useAuth.jsx";
import { Button, Card, Alert } from "../components/UI";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({});
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "sellers"));
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setSellers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (uid) => {
    setActionLoading((a) => ({ ...a, [uid]: "approve" }));
    await updateApprovalStatus(uid, "approved", user?.email || "admin");
    setSellers((prev) =>
      prev.map((s) => (s.id === uid ? { ...s, approvalStatus: "approved" } : s))
    );
    setActionLoading((a) => ({ ...a, [uid]: null }));
  };

  const handleReject = async (uid) => {
    setActionLoading((a) => ({ ...a, [uid]: "reject" }));
    await updateApprovalStatus(uid, "rejected", user?.email || "admin");
    setSellers((prev) =>
      prev.map((s) => (s.id === uid ? { ...s, approvalStatus: "rejected" } : s))
    );
    setActionLoading((a) => ({ ...a, [uid]: null }));
  };

  const filtered = sellers.filter((s) => {
    if (filter === "pending") return !s.approvalStatus || s.approvalStatus === "pending";
    if (filter === "flagged") return s.videoConsent?.sentiment?.label === "negative";
    if (filter === "approved") return s.approvalStatus === "approved";
    if (filter === "rejected") return s.approvalStatus === "rejected";
    return true;
  });

  const sentimentBadge = (label) => {
    const styles = {
      positive: "bg-emerald-100 text-emerald-700",
      neutral: "bg-blue-100 text-blue-700",
      negative: "bg-red-100 text-red-700",
    };
    return (
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${styles[label] || styles.neutral}`}>
        {(label || "unknown").toUpperCase()}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Header */}
      <header className="bg-stone-900 border-b border-stone-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏛️</span>
          <div>
            <h1 className="font-black text-lg" style={{ fontFamily: "Georgia, serif" }}>
              Registrar Admin Dashboard
            </h1>
            <p className="text-stone-400 text-xs">TN Land Registry · {user?.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchSellers}
            className="text-stone-400 hover:text-white text-sm font-medium transition-colors"
          >
            🔄 Refresh
          </button>
          <button
            onClick={logout}
            className="bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-xl text-sm font-bold transition-all"
          >
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Sellers", value: sellers.length, color: "text-white" },
            { label: "Pending Review", value: sellers.filter((s) => !s.approvalStatus || s.approvalStatus === "pending").length, color: "text-amber-400" },
            { label: "Flagged (AI)", value: sellers.filter((s) => s.videoConsent?.sentiment?.label === "negative").length, color: "text-red-400" },
            { label: "Approved", value: sellers.filter((s) => s.approvalStatus === "approved").length, color: "text-emerald-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-stone-900 rounded-2xl p-5 border border-stone-800">
              <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="text-stone-400 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["all", "pending", "flagged", "approved", "rejected"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all capitalize
                ${filter === f ? "bg-amber-500 text-white" : "bg-stone-800 text-stone-400 hover:text-white"}`}
            >
              {f === "flagged" ? "🚩 Flagged" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Seller list */}
        {loading ? (
          <div className="text-center py-20 text-stone-500">Loading registrations…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-500">No records found.</div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((seller) => {
              const consent = seller.videoConsent;
              const sentimentLabel = consent?.sentiment?.label || "neutral";
              const status = seller.approvalStatus || "pending";

              return (
                <div
                  key={seller.id}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-stone-700 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Seller info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-black text-white text-lg">{seller.name || "Unknown"}</h3>
                        {sentimentBadge(sentimentLabel)}
                        <span className={`text-xs font-bold px-2 py-1 rounded-full
                          ${status === "approved" ? "bg-emerald-900 text-emerald-400"
                            : status === "rejected" ? "bg-red-900 text-red-400"
                            : "bg-amber-900 text-amber-400"}`}>
                          {status.toUpperCase()}
                        </span>
                        {!consent?.isOwner && (
                          <span className="text-xs bg-purple-900 text-purple-400 px-2 py-1 rounded-full font-bold">
                            Rep: {consent?.relation || "unknown"}
                          </span>
                        )}
                      </div>
                      <p className="text-stone-400 text-sm">{seller.email} · {seller.mobile}</p>
                      <p className="text-stone-500 text-sm mt-1">
                        Survey: <span className="text-amber-400 font-mono">{seller.property?.surveyNumber}</span>
                        {seller.verified && <span className="ml-2 text-emerald-400">✓ TNREGINET Verified</span>}
                      </p>

                      {consent?.transcript && (
                        <div className="mt-3 bg-stone-800 rounded-xl p-3">
                          <p className="text-xs text-stone-500 uppercase font-bold tracking-wide mb-1">Video Transcript</p>
                          <p className="text-sm text-stone-300 italic">"{consent.transcript}"</p>
                        </div>
                      )}

                      {consent?.videoUrl && (
                        <a
                          href={consent.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-amber-400 hover:text-amber-300 text-sm font-medium"
                        >
                          🎥 View Consent Video →
                        </a>
                      )}

                      {sentimentLabel === "negative" && (
                        <div className="mt-3 bg-red-950 border border-red-900 rounded-xl p-3">
                          <p className="text-xs text-red-400 font-bold">
                            ⚠️ AI flagged negative sentiment — manual review required
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    {status === "pending" && (
                      <div className="flex gap-2 sm:flex-col">
                        <Button
                          variant="success"
                          onClick={() => handleApprove(seller.id)}
                          loading={actionLoading[seller.id] === "approve"}
                          className="text-sm px-5 py-2"
                        >
                          ✅ Approve
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleReject(seller.id)}
                          loading={actionLoading[seller.id] === "reject"}
                          className="text-sm px-5 py-2"
                        >
                          ❌ Reject
                        </Button>
                      </div>
                    )}
                    {status === "approved" && (
                      <span className="text-emerald-400 font-bold text-sm self-start">✅ Approved</span>
                    )}
                    {status === "rejected" && (
                      <span className="text-red-400 font-bold text-sm self-start">❌ Rejected</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

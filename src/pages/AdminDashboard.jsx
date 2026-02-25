import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { updateApprovalStatus } from "../utils/firestore";
import { Button } from "../components/UI";

export default function AdminDashboard() {
  const navigate = useNavigate();
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
    } finally {
      setLoading(false);
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("fwc_admin_auth");
    navigate("/admin-login", { replace: true });
  };

  const handleApprove = async (uid) => {
    setActionLoading((a) => ({ ...a, [uid]: "approve" }));
    await updateApprovalStatus(uid, "approved", "admin");
    setSellers((prev) => prev.map((s) => (s.id === uid ? { ...s, approvalStatus: "approved" } : s)));
    setActionLoading((a) => ({ ...a, [uid]: null }));
  };

  const handleReject = async (uid) => {
    setActionLoading((a) => ({ ...a, [uid]: "reject" }));
    await updateApprovalStatus(uid, "rejected", "admin");
    setSellers((prev) => prev.map((s) => (s.id === uid ? { ...s, approvalStatus: "rejected" } : s)));
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-black text-lg text-white">Registrar Admin Dashboard</h1>
          <p className="text-slate-400 text-xs">TN Land Registry - Admin Panel</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={fetchSellers} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
            Refresh
          </button>
          <button onClick={handleAdminLogout} className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl text-sm font-bold transition-all">
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Sellers", value: sellers.length, color: "text-white" },
            { label: "Pending Review", value: sellers.filter((s) => !s.approvalStatus || s.approvalStatus === "pending").length, color: "text-amber-400" },
            { label: "Flagged (AI)", value: sellers.filter((s) => s.videoConsent?.sentiment?.label === "negative").length, color: "text-red-400" },
            { label: "Approved", value: sellers.filter((s) => s.approvalStatus === "approved").length, color: "text-emerald-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
              <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {["all", "pending", "flagged", "approved", "rejected"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all capitalize ${
                filter === f ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-400">Loading registrations...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">No records found.</div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((seller) => {
              const consent = seller.videoConsent;
              const sentimentLabel = consent?.sentiment?.label || "neutral";
              const status = seller.approvalStatus || "pending";

              return (
                <div key={seller.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-black text-white text-lg">{seller.name || "Unknown"}</h3>
                        {sentimentBadge(sentimentLabel)}
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded-full ${
                            status === "approved"
                              ? "bg-emerald-900 text-emerald-400"
                              : status === "rejected"
                              ? "bg-red-900 text-red-400"
                              : "bg-amber-900 text-amber-400"
                          }`}
                        >
                          {status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{seller.email} | {seller.mobile}</p>
                      <p className="text-slate-400 text-sm mt-1">
                        Survey: <span className="text-cyan-300 font-mono">{seller.property?.surveyNumber}</span>
                      </p>
                      {consent?.videoUrl && (
                        <a
                          href={consent.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-cyan-300 hover:text-cyan-200 text-sm font-medium"
                        >
                          View Consent Video
                        </a>
                      )}
                    </div>

                    {status === "pending" && (
                      <div className="flex gap-2 sm:flex-col">
                        <Button
                          variant="success"
                          onClick={() => handleApprove(seller.id)}
                          loading={actionLoading[seller.id] === "approve"}
                          className="text-sm px-5 py-2"
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleReject(seller.id)}
                          loading={actionLoading[seller.id] === "reject"}
                          className="text-sm px-5 py-2"
                        >
                          Reject
                        </Button>
                      </div>
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

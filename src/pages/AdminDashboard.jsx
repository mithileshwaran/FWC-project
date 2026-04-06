import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { updateApprovalStatus, deleteRecord } from "../utils/firestore";
import { Button } from "../components/UI";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({});
  const [expandedBuyers, setExpandedBuyers] = useState({});
  const [expandedSellers, setExpandedSellers] = useState({});
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [buyerSnap, sellerSnap] = await Promise.all([
        getDocs(collection(db, "buyers")),
        getDocs(collection(db, "sellers")),
      ]);
      setBuyers(buyerSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setSellers(sellerSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
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

  const handleDeleteSeller = async (uid) => {
    const ok = window.confirm("Delete this seller record? This cannot be undone.");
    if (!ok) return;
    setActionLoading((a) => ({ ...a, [uid]: "delete" }));
    await deleteRecord("sellers", uid);
    setSellers((prev) => prev.filter((s) => s.id !== uid));
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

  const renderTable = (rows) => (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-xs border border-slate-800 rounded-xl overflow-hidden">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-slate-800">
              <td className="px-3 py-2 text-slate-400 font-semibold whitespace-nowrap w-36 bg-slate-900">
                {row.label}
              </td>
              <td className="px-3 py-2 text-slate-200">
                {row.value || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const buyerRows = (buyer) => ([
    { label: "Name", value: buyer.name },
    { label: "Email", value: buyer.email },
    { label: "Mobile", value: buyer.mobile },
    { label: "DOB", value: buyer.dob },
    { label: "Address", value: buyer.address },
    { label: "Survey No", value: buyer.property?.surveyNumber },
    { label: "Location", value: buyer.property?.location },
    { label: "Size (sq.ft)", value: buyer.property?.size },
    { label: "ID Proof", value: buyer.documents?.idProof },
    { label: "Address Proof", value: buyer.documents?.addressProof },
    { label: "Property Docs", value: buyer.documents?.propertyDocs },
    { label: "Status", value: buyer.status },
    { label: "Verified", value: buyer.verified ? "Yes" : "No" },
    { label: "Verified At", value: buyer.verifiedAt ? new Date(buyer.verifiedAt.seconds * 1000).toLocaleString() : "" },
    { label: "Updated At", value: buyer.updatedAt ? new Date(buyer.updatedAt.seconds * 1000).toLocaleString() : "" },
  ]);

  const sellerRows = (seller) => ([
    { label: "Name", value: seller.name },
    { label: "Email", value: seller.email },
    { label: "Mobile", value: seller.mobile },
    { label: "Business", value: seller.businessName },
    { label: "Address", value: seller.address },
    { label: "Survey No", value: seller.property?.surveyNumber },
    { label: "Ownership Doc", value: seller.property?.ownershipDocs },
    { label: "ID Proof", value: seller.documents?.idProof },
    { label: "Property Docs", value: seller.documents?.propertyDocs },
    { label: "Status", value: seller.approvalStatus || "pending" },
    { label: "Verified", value: seller.verified ? "Yes" : "No" },
    { label: "Video URL", value: seller.videoConsent?.videoUrl },
    { label: "AI Approved", value: seller.videoConsent?.aiApproved ? "Yes" : "No" },
    { label: "Sentiment", value: seller.videoConsent?.sentiment?.label },
    { label: "Relation", value: seller.videoConsent?.relation },
    { label: "Recorded At", value: seller.videoConsent?.recordedAt },
    { label: "Updated At", value: seller.updatedAt ? new Date(seller.updatedAt.seconds * 1000).toLocaleString() : "" },
  ]);

  const toggleBuyer = (id) => {
    setExpandedBuyers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSeller = (id) => {
    setExpandedSellers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-black text-lg text-white">Registrar Admin Dashboard</h1>
          <p className="text-slate-400 text-xs">TN Land Registry - Admin Panel</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={fetchAll} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
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
            { label: "Total Buyers", value: buyers.length, color: "text-white" },
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

        {loading ? (
          <div className="text-center py-20 text-slate-400">Loading registrations...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-black text-white">Buyers</h2>
                <span className="text-xs text-slate-400">{buyers.length} total</span>
              </div>
              {buyers.length === 0 ? (
                <div className="text-slate-400 text-sm">No buyer records yet.</div>
              ) : (
                <div className="flex flex-col gap-3">
                  {buyers.map((buyer) => (
                    <div key={buyer.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white">{buyer.name || "Unknown"}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          buyer.verified ? "bg-emerald-900 text-emerald-400" : "bg-amber-900 text-amber-400"
                        }`}>
                          {buyer.verified ? "VERIFIED" : "PENDING"}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">{buyer.email} | {buyer.mobile}</p>
                      <p className="text-slate-400 text-xs mt-1">
                        Survey: <span className="text-cyan-300 font-mono">{buyer.property?.surveyNumber || "-"}</span>
                      </p>
                      <button
                        onClick={() => toggleBuyer(buyer.id)}
                        className="mt-3 text-xs font-bold text-cyan-300 hover:text-cyan-200"
                      >
                        {expandedBuyers[buyer.id] ? "Hide Full Data" : "View Full Data"}
                      </button>
                      {expandedBuyers[buyer.id] && (
                        renderTable(buyerRows(buyer))
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-black text-white">Sellers</h2>
                <span className="text-xs text-slate-400">{sellers.length} total</span>
              </div>

              <div className="flex gap-2 mb-5 flex-wrap">
                {["all", "pending", "flagged", "approved", "rejected"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all capitalize ${
                      filter === f ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <div className="text-slate-400 text-sm">No seller records found.</div>
              ) : (
                <div className="flex flex-col gap-3">
                  {filtered.map((seller) => {
                    const consent = seller.videoConsent;
                    const sentimentLabel = consent?.sentiment?.label || "neutral";
                    const status = seller.approvalStatus || "pending";

                    return (
                      <div key={seller.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-white">{seller.name || "Unknown"}</h3>
                          {sentimentBadge(sentimentLabel)}
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-full ${
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
                        <p className="text-slate-400 text-xs mt-1">{seller.email} | {seller.mobile}</p>
                      <p className="text-slate-400 text-xs mt-1">
                        Survey: <span className="text-cyan-300 font-mono">{seller.property?.surveyNumber || "-"}</span>
                      </p>
                        <div className="mt-3 flex flex-col gap-2">
                          <button
                            onClick={() => toggleSeller(seller.id)}
                            className="text-xs font-bold text-cyan-300 hover:text-cyan-200 text-left"
                          >
                            {expandedSellers[seller.id] ? "Hide Full Data" : "View Full Data"}
                          </button>

                          {consent?.videoUrl ? (
                            <a
                              href={consent.videoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 text-xs font-medium"
                            >
                              View Consent Video
                            </a>
                          ) : (
                            <p className="text-slate-500 text-xs">No consent video uploaded.</p>
                          )}
                        </div>

                        {expandedSellers[seller.id] && (
                          renderTable(sellerRows(seller))
                        )}

                        {status === "pending" && (
                          <div className="flex gap-2 mt-3">
                            <Button
                              variant="success"
                              onClick={() => handleApprove(seller.id)}
                              loading={actionLoading[seller.id] === "approve"}
                              className="text-xs px-4 py-1.5"
                            >
                              Approve
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => handleReject(seller.id)}
                              loading={actionLoading[seller.id] === "reject"}
                              className="text-xs px-4 py-1.5"
                            >
                              Reject
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={() => handleDeleteSeller(seller.id)}
                              loading={actionLoading[seller.id] === "delete"}
                              className="text-xs px-4 py-1.5"
                            >
                              Delete
                            </Button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

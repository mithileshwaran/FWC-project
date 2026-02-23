// components/UI.jsx
import React from "react";

// ── Input ──────────────────────────────────────────────────────────────────
export const Input = ({ label, error, className = "", ...props }) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-sm font-semibold text-stone-700 tracking-wide uppercase text-xs">
        {label}
      </label>
    )}
    <input
      className={`w-full px-4 py-3 rounded-xl border-2 border-stone-200 bg-white
        focus:outline-none focus:border-amber-500 transition-all placeholder-stone-300
        text-stone-800 font-medium ${error ? "border-red-400" : ""} ${className}`}
      {...props}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);

// ── Button ─────────────────────────────────────────────────────────────────
export const Button = ({
  children,
  variant = "primary",
  className = "",
  loading = false,
  ...props
}) => {
  const base =
    "px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50";
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-700 active:scale-95",
    secondary:
      "bg-white text-stone-900 border-2 border-stone-200 hover:border-stone-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
    amber: "bg-amber-500 text-white hover:bg-amber-600",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </button>
  );
};

// ── Card ───────────────────────────────────────────────────────────────────
export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden ${className}`}
  >
    {children}
  </div>
);

// ── Progress Steps ─────────────────────────────────────────────────────────
export const StepIndicator = ({ steps, current }) => (
  <div className="flex items-center justify-center gap-0 mb-8">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
              ${
                i < current
                  ? "bg-emerald-500 text-white"
                  : i === current
                  ? "bg-stone-900 text-white ring-4 ring-stone-200"
                  : "bg-stone-100 text-stone-400"
              }`}
          >
            {i < current ? "✓" : i + 1}
          </div>
          <span
            className={`text-xs mt-1 font-semibold transition-all ${
              i === current ? "text-stone-900" : "text-stone-400"
            }`}
          >
            {step}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div
            className={`h-0.5 w-12 mb-4 transition-all duration-500 ${
              i < current ? "bg-emerald-400" : "bg-stone-200"
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

// ── File Upload ────────────────────────────────────────────────────────────
export const FileUpload = ({ label, accept, onChange, fileName }) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
        {label}
      </label>
    )}
    <label className="cursor-pointer group">
      <div
        className="border-2 border-dashed border-stone-200 rounded-xl p-4 text-center 
        group-hover:border-amber-400 transition-all bg-stone-50"
      >
        {fileName ? (
          <span className="text-sm text-emerald-600 font-semibold">✓ {fileName}</span>
        ) : (
          <span className="text-sm text-stone-400">
            📁 Click to upload <span className="text-amber-500 font-bold">file</span>
          </span>
        )}
      </div>
      <input type="file" accept={accept} onChange={onChange} className="hidden" />
    </label>
  </div>
);

// ── Alert ──────────────────────────────────────────────────────────────────
export const Alert = ({ type = "info", children }) => {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-emerald-50 border-emerald-200 text-emerald-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
  };
  return (
    <div className={`rounded-xl border px-4 py-3 text-sm font-medium ${styles[type]}`}>
      {children}
    </div>
  );
};

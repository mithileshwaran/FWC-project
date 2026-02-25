import React from "react";

export const Input = ({ label, error, className = "", ...props }) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-sm font-semibold text-slate-300 tracking-wide uppercase text-xs">
        {label}
      </label>
    )}
    <input
      className={`w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900
        focus:outline-none focus:border-cyan-400 transition-all placeholder-slate-500
        text-slate-100 font-medium ${error ? "border-red-400" : ""} ${className}`}
      {...props}
    />
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
);

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
    primary: "bg-cyan-400 text-slate-900 hover:bg-cyan-300 active:scale-95",
    secondary:
      "bg-slate-900 text-slate-100 border border-slate-700 hover:border-cyan-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
    amber: "bg-cyan-500 text-white hover:bg-cyan-600",
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

export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-slate-900/85 rounded-2xl shadow-xl border border-slate-800 overflow-hidden backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

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
                  ? "bg-cyan-400 text-slate-900 ring-4 ring-cyan-900/50"
                  : "bg-slate-800 text-slate-500"
              }`}
          >
            {i < current ? "Done" : i + 1}
          </div>
          <span
            className={`text-xs mt-1 font-semibold transition-all ${
              i === current ? "text-cyan-300" : "text-slate-400"
            }`}
          >
            {step}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div
            className={`h-0.5 w-12 mb-4 transition-all duration-500 ${
              i < current ? "bg-cyan-400" : "bg-slate-700"
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

export const FileUpload = ({ label, accept, onChange, fileName }) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
        {label}
      </label>
    )}
    <label className="cursor-pointer group">
      <div
        className="border-2 border-dashed border-slate-700 rounded-xl p-4 text-center
        group-hover:border-cyan-400 transition-all bg-slate-950"
      >
        {fileName ? (
          <span className="text-sm text-emerald-400 font-semibold">Uploaded: {fileName}</span>
        ) : (
          <span className="text-sm text-slate-400">
            Click to upload <span className="text-cyan-400 font-bold">file</span>
          </span>
        )}
      </div>
      <input type="file" accept={accept} onChange={onChange} className="hidden" />
    </label>
  </div>
);

export const Alert = ({ type = "info", children }) => {
  const styles = {
    info: "bg-cyan-950/60 border-cyan-800 text-cyan-200",
    success: "bg-emerald-950/60 border-emerald-800 text-emerald-200",
    error: "bg-red-950/60 border-red-800 text-red-200",
    warning: "bg-amber-950/60 border-amber-800 text-amber-200",
  };

  return (
    <div className={`rounded-xl border px-4 py-3 text-sm font-medium ${styles[type]}`}>
      {children}
    </div>
  );
};

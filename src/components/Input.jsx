import React from 'react';

const Input = ({ label, type = 'text', id, ...props }) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};

export default Input;

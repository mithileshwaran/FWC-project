import React from 'react';

const variantClasses = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  secondary:
    'bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-400',
  success:
    'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500'
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

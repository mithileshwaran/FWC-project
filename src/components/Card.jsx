import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-md shadow-slate-200/80 ring-1 ring-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow">
            <span className="text-sm font-semibold">FR</span>
          </div>
          <div className="text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Government Portal
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Faceless Registration System
            </p>
          </div>
        </button>

        <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/video-consent"
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`
            }
          >
            Records
          </NavLink>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm hover:bg-blue-100"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import VideoConsent from './pages/VideoConsent';
import Success from './pages/Success';

const PageWithNavbar = ({ children }) => (
  <div className="min-h-screen bg-slate-50">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {children}
    </main>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
            <Login />
          </div>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PageWithNavbar>
            <Dashboard />
          </PageWithNavbar>
        }
      />
      <Route
        path="/video-consent"
        element={
          <PageWithNavbar>
            <VideoConsent />
          </PageWithNavbar>
        }
      />
      <Route
        path="/success"
        element={
          <PageWithNavbar>
            <Success />
          </PageWithNavbar>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;

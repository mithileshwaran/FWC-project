import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Welcome back, Officer
        </h1>
        <p className="text-sm text-slate-600">
          Monitor registration activity and manage citizen consent records for
          the Faceless Registration System.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Pending Registrations
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">42</p>
          <p className="mt-1 text-xs text-slate-500">Awaiting officer action</p>
        </Card>

        <Card>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Completed Registrations
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">1,284</p>
          <p className="mt-1 text-xs text-slate-500">Verified and archived</p>
        </Card>

        <Card>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Consent Verification Alerts
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">7</p>
          <p className="mt-1 text-xs text-slate-500">
            Require additional review
          </p>
        </Card>
      </div>

      <Card className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Registration Actions
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Start a new faceless registration or review existing consent
            records.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="success">Start New Registration</Button>
          <Button>View Consent Records</Button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Success = () => {
  return (
    <div className="max-w-md">
      <Card className="text-center space-y-5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm">
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 12.5 11 15l5-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-slate-900">
            Consent Successfully Captured!
          </h1>
          <p className="text-sm text-slate-600">
            The citizen&apos;s video consent has been securely recorded and
            linked to the registration record.
          </p>
        </div>

        <Button className="w-full">Finish &amp; Submit</Button>
      </Card>
    </div>
  );
};

export default Success;

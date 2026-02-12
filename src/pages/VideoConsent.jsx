import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const VideoConsent = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Capture Video Consent
        </h1>
        <p className="text-sm text-slate-600">
          Please record a short video statement from the citizen confirming
          their consent for faceless property registration.
        </p>
      </div>

      <Card className="space-y-4">
        <div className="aspect-video w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-sm text-slate-400">
          Video Preview Placeholder
        </div>

        <div className="flex justify-center">
          <Button variant="danger" className="mt-2">
            Record Consent Video
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default VideoConsent;

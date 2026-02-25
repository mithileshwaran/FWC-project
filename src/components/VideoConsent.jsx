import { useEffect, useRef, useState } from "react";
import { Button, Alert } from "./UI";
import { useAuth } from "../hooks/useAuth.jsx";
import { uploadFile, saveVideoConsent } from "../utils/firestore";
import { analyzeSentiment } from "../utils/sentiment";

const CONSENT_SCRIPT =
  "I am [Your Name], the owner of survey number [Survey No.]. I am selling this property voluntarily.";

export default function VideoConsent({ onComplete }) {
  const { user } = useAuth();
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recognitionRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  const [phase, setPhase] = useState("ownership");
  const [isOwner, setIsOwner] = useState(null);
  const [relation, setRelation] = useState("");
  const [countdown, setCountdown] = useState(3);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [manualVideoFile, setManualVideoFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const isMediaRecorderSupported =
    typeof window !== "undefined" &&
    !!window.navigator?.mediaDevices?.getUserMedia &&
    typeof window.MediaRecorder !== "undefined";

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
      stopStream();
    };
  }, []);

  useEffect(() => {
    if (phase !== "countdown") return undefined;
    if (countdown === 0) {
      startRecording();
      return undefined;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  useEffect(() => {
    const showLiveFeed = phase === "countdown" || phase === "recording";
    if (!showLiveFeed || !videoRef.current || !streamRef.current) return;
    videoRef.current.srcObject = streamRef.current;
    videoRef.current.muted = true;
    videoRef.current.controls = false;
    videoRef.current.playsInline = true;
    videoRef.current.play().catch(() => {});
  }, [phase]);

  const startPreview = async () => {
    setError("");
    setCountdown(3);
    try {
      if (!isMediaRecorderSupported) {
        throw new Error("Live recording not supported on this browser. Upload a consent video file.");
      }
      stopStream();
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      } catch {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }
      streamRef.current = stream;
      setPhase("countdown");
    } catch (err) {
      setError(err?.message || "Camera permission denied.");
      setPhase("ownership");
      stopStream();
    }
  };

  const startRecording = () => {
    try {
      const stream = streamRef.current;
      if (!stream) {
        setError("Camera stream not available. Try again.");
        setPhase("ownership");
        return;
      }

      chunksRef.current = [];
      const formats = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"];
      const mimeType = formats.find((f) => MediaRecorder.isTypeSupported(f));
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        if (!chunksRef.current.length) {
          setError("Recording failed. Please re-record.");
          setPhase("ownership");
          stopStream();
          return;
        }
        const blob = new Blob(chunksRef.current, { type: mimeType || "video/webm" });
        setRecordedBlob(blob);
        const url = URL.createObjectURL(blob);
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = url;
          videoRef.current.muted = false;
          videoRef.current.controls = true;
        }
        stopStream();
        setPhase("preview");
      };

      mediaRecorderRef.current = recorder;
      recorder.start();

      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SR) {
        const rec = new SR();
        rec.lang = "en-IN";
        rec.continuous = true;
        rec.interimResults = false;
        rec.onresult = (e) => {
          const text = Array.from(e.results)
            .map((r) => r[0].transcript)
            .join(" ");
          setTranscript(text);
        };
        recognitionRef.current = rec;
        try {
          rec.start();
        } catch {
          // Do nothing
        }
      }

      setPhase("recording");
    } catch (err) {
      setError(err?.message || "Unable to start recording on this browser.");
      setPhase("ownership");
      stopStream();
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) recognitionRef.current.stop();
  };

  const handleSubmit = async () => {
    const consentBlob = recordedBlob || manualVideoFile;
    if (!consentBlob) {
      setError("Please record or upload a video first.");
      return;
    }
    if (!user?.uid) {
      setError("Session expired. Please sign in again.");
      return;
    }

    setError("");
    setUploading(true);
    setPhase("analyzing");
    try {
      const result = await analyzeSentiment(transcript || "I am selling this property voluntarily");
      setSentiment(result);

      const extension = manualVideoFile?.name?.split(".").pop() || "webm";
      const videoUrl = await uploadFile(`sellers/${user.uid}/consent_video.${extension}`, consentBlob);

      await saveVideoConsent(user.uid, {
        videoUrl,
        transcript,
        sentiment: result,
        aiApproved: result.label !== "negative",
        isOwner,
        relation: isOwner ? "self" : relation,
        recordedAt: new Date().toISOString(),
        reviewStatus: "under_review",
      });

      setPhase("done");
      if (onComplete) onComplete({ aiApproved: result.label !== "negative", sentiment: result, videoUrl });
    } catch (err) {
      setError(err?.message || "Video submission failed.");
      setPhase("preview");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {error && <Alert type="error">{error}</Alert>}

      {phase === "ownership" && (
        <div className="space-y-5">
          <Alert type="info">Please confirm relation and record consent video.</Alert>
          <p className="font-semibold text-slate-200">Is the person recording the video the land owner?</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsOwner(true)}
              className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${
                isOwner === true ? "border-cyan-400 bg-cyan-400 text-slate-900" : "border-slate-700 text-slate-300"
              }`}
            >
              Yes, owner
            </button>
            <button
              type="button"
              onClick={() => setIsOwner(false)}
              className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${
                isOwner === false ? "border-cyan-400 bg-cyan-400 text-slate-900" : "border-slate-700 text-slate-300"
              }`}
            >
              Representative
            </button>
          </div>

          {isOwner === false && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Relation to owner</label>
              <input
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                placeholder="Spouse / Son / Legal Representative"
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:outline-none focus:border-cyan-400"
              />
            </div>
          )}

          {isOwner !== null && (isOwner || relation) && (
            <>
              {isMediaRecorderSupported ? (
                <Button onClick={startPreview} className="w-full">
                  Start Video Recording
                </Button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Alert type="warning">Your browser does not support direct recording. Upload a consent video file.</Alert>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setManualVideoFile(e.target.files?.[0] || null)}
                    className="w-full text-sm text-slate-200"
                  />
                  {manualVideoFile && (
                    <Button onClick={handleSubmit} loading={uploading} className="w-full">
                      Upload and Submit Video
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {phase === "countdown" && (
        <div className="flex flex-col gap-4">
          <div className="relative">
            <video ref={videoRef} className="w-full rounded-xl border border-slate-700 bg-black" style={{ maxHeight: 320 }} />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
              <div className="text-7xl font-black text-white animate-pulse">{countdown}</div>
            </div>
          </div>
          <p className="text-slate-300 text-center font-medium">Recording starts now.</p>
        </div>
      )}

      {(phase === "recording" || phase === "preview") && (
        <div className="flex flex-col gap-4">
          {phase === "recording" && (
            <div className="flex items-center gap-2 justify-center">
              <span className="animate-pulse w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="text-sm font-bold text-red-400">RECORDING</span>
            </div>
          )}

          <video ref={videoRef} className="w-full rounded-xl border border-slate-700 bg-black" style={{ maxHeight: 320 }} />

          {phase === "recording" && (
            <div className="bg-amber-950/50 border border-amber-800 rounded-xl p-4">
              <p className="text-sm text-amber-200 font-medium mb-1">Consent Script</p>
              <p className="text-sm text-amber-100 italic">{CONSENT_SCRIPT}</p>
            </div>
          )}

          {phase === "recording" && (
            <Button variant="danger" onClick={stopRecording} className="w-full">
              Stop Recording
            </Button>
          )}

          {phase === "preview" && (
            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => {
                  setRecordedBlob(null);
                  setTranscript("");
                  setSentiment(null);
                  setCountdown(3);
                  setPhase("ownership");
                }}
                className="flex-1"
              >
                Re-record
              </Button>
              <Button onClick={handleSubmit} loading={uploading} className="flex-1">
                Submit Video
              </Button>
            </div>
          )}
        </div>
      )}

      {phase === "analyzing" && (
        <div className="text-center py-8">
          <p className="font-bold text-white">Analyzing with AI and uploading video...</p>
        </div>
      )}

      {phase === "done" && sentiment && (
        <div className="text-center space-y-3">
          <h3 className="text-xl font-black text-white">Your Video Is Under Review</h3>
          <p className="text-slate-300 text-sm">AI analysis completed. Admin verification is pending.</p>
          <p className="text-slate-400 text-sm">
            AI sentiment: <strong>{sentiment.label.toUpperCase()}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

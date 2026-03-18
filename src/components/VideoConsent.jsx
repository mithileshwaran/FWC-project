import { useEffect, useRef, useState } from "react";
import { Button, Alert } from "./UI";
import { useAuth } from "../hooks/useAuth.jsx";
import { saveVideoConsent } from "../utils/firestore";
import { analyzeSentiment } from "../utils/sentiment";

const CONSENT_SCRIPT =
  "I am [Your Name], the owner of survey number [Survey No.]. I am selling this property of my own free will and without any coercion. I confirm that all documents submitted are genuine.";

export default function VideoConsent({ onComplete }) {
  const { user } = useAuth();
  const videoRef = useRef(null);       // ONE video element for everything
  const mediaRecorderRef = useRef(null);
  const recognitionRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);

  const [phase, setPhase] = useState("ownership");
  const [isOwner, setIsOwner] = useState(null);
  const [relation, setRelation] = useState("");
  const [countdown, setCountdown] = useState(3);
  const [recordedUrl, setRecordedUrl] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // ── Countdown logic ──────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown === 0) { startRecording(); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, countdown]);

  // ── Attach live stream to video element whenever phase changes ────────
  useEffect(() => {
    if ((phase === "countdown" || phase === "recording") && streamRef.current) {
      const v = videoRef.current;
      if (v) {
        v.srcObject = streamRef.current;
        v.src = "";
        v.muted = true;
        v.controls = false;
        v.play().catch(() => {});
      }
    }
  }, [phase]);

  // ── Cleanup on unmount ────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    };
  }, [recordedUrl]);

  // ── Start camera ──────────────────────────────────────────────────────
const startPreview = async () => {
  setError("");
  setCountdown(3);
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: true, audio: true 
    });
    streamRef.current = stream;
    setPhase("countdown");
    // Small delay to let video element mount first
    setTimeout(() => {
      const v = videoRef.current;
      if (v) {
        v.srcObject = stream;
        v.muted = true;
        v.playsInline = true;
        v.play().catch(() => {});
      }
    }, 100);
  } catch {
    setError("Camera access denied. Please allow camera and microphone.");
  }
};

  // ── Start recording ───────────────────────────────────────────────────
  const startRecording = () => {
    const stream = streamRef.current;
    if (!stream) return;
    chunksRef.current = [];

    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")
      ? "video/webm;codecs=vp9,opus"
      : "video/webm";
    const recorder = new MediaRecorder(stream, { mimeType });

    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setRecordedUrl(url);
      stream.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      // Switch video element to playback
      const v = videoRef.current;
      if (v) {
        v.srcObject = null;
        v.src = url;
        v.muted = false;
        v.controls = true;
      }
      setPhase("preview");
    };

    mediaRecorderRef.current = recorder;
    recorder.start(100);

    // Speech recognition
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      const recognition = new SR();
      recognition.lang = "en-IN";
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.onresult = (e) => {
        const text = Array.from(e.results).map((r) => r[0].transcript).join(" ");
        setTranscript(text);
      };
      recognitionRef.current = recognition;
      try { recognition.start(); } catch {}
    }

    setPhase("recording");
    setTimeout(() => stopRecording(), 60000);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    recognitionRef.current?.stop();
  };

  // ── Submit & AI analyse ───────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!recordedUrl) { setError("Please record the video first."); return; }
    setUploading(true);
    setPhase("analyzing");
    try {
      const result = await analyzeSentiment(
        transcript || "I am selling this property by my own will"
      );
      setSentiment(result);
      const aiApproved = result.label !== "negative";
      await saveVideoConsent(user.uid, {
        videoUrl: "",
        transcript,
        sentiment: result,
        aiApproved,
        isOwner,
        relation: isOwner ? "self" : relation,
        recordedAt: new Date().toISOString(),
        manualReviewRequired: !aiApproved,
      });
      setPhase("done");
      if (onComplete) onComplete({ aiApproved, sentiment: result });
    } catch (err) {
      setError(err?.message || "Video submission failed.");
      setPhase("preview");
    } finally {
      setUploading(false);
    }
  };

  // ── RENDER ────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-6">
      {error && <Alert type="error">{error}</Alert>}

      {/* ── Ownership ── */}
      {phase === "ownership" && (
        <div className="space-y-5">
          <div className="rounded-xl border border-cyan-800 bg-cyan-950/60 px-4 py-3">
            <p className="text-sm font-semibold text-cyan-100">
              Before recording: Please confirm your relationship to the property.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3">
            <p className="text-base font-bold text-white">
              Is the person recording the video the land owner?
            </p>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setIsOwner(true)}
              className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${
                isOwner === true
                  ? "border-cyan-400 bg-cyan-400 text-slate-900"
                  : "border-slate-600 bg-slate-800 text-white hover:border-cyan-300"}`}>
              I am Owner
            </button>
            <button type="button" onClick={() => setIsOwner(false)}
              className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${
                isOwner === false
                  ? "border-cyan-400 bg-cyan-400 text-slate-900"
                  : "border-slate-600 bg-slate-800 text-white hover:border-cyan-300"}`}>
              Representative
            </button>
          </div>

          {isOwner === false && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                Representative name and relation
              </label>
              <input type="text" value={relation}
                onChange={(e) => setRelation(e.target.value)}
                placeholder="Example: Ramesh - Son"
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          )}

          {isOwner !== null && (isOwner || relation.trim()) && (
            <Button onClick={startPreview} className="w-full">
              Start Video Recording
            </Button>
          )}
        </div>
      )}

      {/* ── ONE video element — visible during countdown, recording, preview ── */}
      {(phase === "countdown" || phase === "recording" || phase === "preview") && (
        <div className="flex flex-col gap-4">

          {phase === "countdown" && (
            <div className="text-center">
              <div className="text-7xl font-black text-white animate-pulse">{countdown}</div>
              <p className="text-slate-300 mt-2 font-medium">
                Get ready, recording starts in {countdown}s
              </p>
            </div>
          )}

          {phase === "recording" && (
            <div className="flex items-center gap-2 justify-center">
              <span className="animate-pulse w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="text-sm font-bold text-red-400">RECORDING</span>
            </div>
          )}

          {/* THE ONE VIDEO ELEMENT */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted={phase !== "preview"}
            className="w-full rounded-xl border border-slate-700 bg-black"
            style={{ maxHeight: 300, transform: phase === "preview" ? "none" : "scaleX(-1)" }}
          />

          {phase === "recording" && (
            <>
              <div className="bg-amber-950/50 border border-amber-800 rounded-xl p-4">
                <p className="text-sm text-amber-200 font-medium mb-1">Read this aloud:</p>
                <p className="text-sm text-amber-100 italic">{CONSENT_SCRIPT}</p>
              </div>
              <Button variant="danger" onClick={stopRecording} className="w-full">
                Stop Recording
              </Button>
            </>
          )}

          {phase === "preview" && (
            <>
              <p className="text-sm font-semibold text-slate-300 text-center">
                Review your recording:
              </p>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={() => {
                  setRecordedUrl(null);
                  setCountdown(3);
                  setTranscript("");
                  setPhase("ownership");
                }} className="flex-1">
                  Re-record
                </Button>
                <Button onClick={handleSubmit} loading={uploading} className="flex-1">
                  Submit Video
                </Button>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Analyzing ── */}
      {phase === "analyzing" && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4 animate-spin inline-block">🔍</div>
          <p className="font-bold text-white">Analyzing consent video...</p>
          <p className="text-slate-300 text-sm mt-1">Running AI sentiment analysis</p>
        </div>
      )}

      {/* ── Done ── */}
      {phase === "done" && sentiment && (
        <div className="text-center space-y-3">
          <div className="text-5xl">
            {sentiment.label === "negative" ? "⚠️" : "✅"}
          </div>
          <h3 className="text-xl font-black text-white">
            {sentiment.label === "negative" ? "Flagged for Manual Review" : "Video Consent Accepted"}
          </h3>
          <p className="text-slate-300 text-sm">
            AI sentiment: <strong>{sentiment.label.toUpperCase()}</strong>
          </p>
          {sentiment.label === "negative" && (
            <Alert type="warning">
              Your video has been flagged for manual review by the Registrar.
            </Alert>
          )}
          {transcript && (
            <div className="text-left bg-slate-800 rounded-xl p-4 border border-slate-700">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">
                Transcript
              </p>
              <p className="text-sm text-slate-200 italic">"{transcript}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
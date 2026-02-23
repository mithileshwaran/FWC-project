// components/VideoConsent.jsx
import { useState, useRef, useEffect } from "react";
import { Button, Alert } from "./UI";
import { useAuth } from "../hooks/useAuth.jsx";
import { uploadFile, saveVideoConsent } from "../utils/firestore";
import { analyzeSentiment } from "../utils/sentiment";

const CONSENT_SCRIPT =
  "I am [Your Name], the owner of survey number [Survey No.]. I am selling this property of my own free will and without any coercion. I confirm that all documents submitted are genuine.";

export default function VideoConsent({ onComplete }) {
  const { user } = useAuth();
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const recognitionRef = useRef(null);

  const [phase, setPhase] = useState("ownership"); // ownership | countdown | recording | preview | analyzing | done
  const [isOwner, setIsOwner] = useState(null);
  const [relation, setRelation] = useState("");
  const [countdown, setCountdown] = useState(3);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // ── Countdown logic ──────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown === 0) {
      startRecording();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, countdown]);

  // ── Start camera preview ─────────────────────────────────────────────────
  const startPreview = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        videoRef.current.play();
      }
      setPhase("countdown");
    } catch {
      setError("Camera access denied. Please allow camera and microphone.");
    }
  };

  // ── Start recording ──────────────────────────────────────────────────────
  const startRecording = () => {
    const stream = videoRef.current?.srcObject;
    if (!stream) return;
    chunksRef.current = [];
    const mr = new MediaRecorder(stream, { mimeType: "video/webm;codecs=vp9,opus" });
    mr.ondataavailable = (e) => chunksRef.current.push(e.data);
    mr.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      setRecordedBlob(blob);
      const url = URL.createObjectURL(blob);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
        videoRef.current.src = url;
        videoRef.current.muted = false;
        videoRef.current.controls = true;
      }
      setPhase("preview");
    };
    mediaRecorderRef.current = mr;
    mr.start();

    // Speech recognition for transcript
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      const rec = new SR();
      rec.lang = "en-IN";
      rec.continuous = true;
      rec.interimResults = false;
      rec.onresult = (e) => {
        const text = Array.from(e.results).map((r) => r[0].transcript).join(" ");
        setTranscript(text);
      };
      recognitionRef.current = rec;
      rec.start();
    }

    setPhase("recording");
    // Auto-stop after 60 seconds
    setTimeout(() => stopRecording(), 60000);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    recognitionRef.current?.stop();
  };

  // ── Analyse & Upload ─────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setUploading(true);
    setPhase("analyzing");
    try {
      // Sentiment analysis on transcript
      const result = await analyzeSentiment(
        transcript || "I am selling this property by my own will"
      );
      setSentiment(result);

      // Upload video
      const videoUrl = await uploadFile(
        `sellers/${user.uid}/consent_video.webm`,
        recordedBlob
      );

      const aiApproved = result.label !== "negative";
      await saveVideoConsent(user.uid, {
        videoUrl,
        transcript,
        sentiment: result,
        aiApproved,
        isOwner,
        relation: isOwner ? "self" : relation,
        recordedAt: new Date().toISOString(),
        manualReviewRequired: !aiApproved,
      });

      setPhase("done");
      onComplete && onComplete({ aiApproved, sentiment: result });
    } catch (err) {
      setError(err.message);
      setPhase("preview");
    } finally {
      setUploading(false);
    }
  };

  // ── RENDER ───────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-6">
      {error && <Alert type="error">{error}</Alert>}

      {/* Phase: Ownership check */}
      {phase === "ownership" && (
        <div className="space-y-5">
          <Alert type="info">
            <strong>Before recording:</strong> Please confirm your relationship to the property.
          </Alert>
          <p className="font-semibold text-stone-800">
            Is the person recording the video the land owner?
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setIsOwner(true)}
              className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all
                ${isOwner === true ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-600 hover:border-stone-400"}`}
            >
              ✅ Yes, I'm the owner
            </button>
            <button
              onClick={() => setIsOwner(false)}
              className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all
                ${isOwner === false ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-600 hover:border-stone-400"}`}
            >
              👥 No, I'm a representative
            </button>
          </div>

          {isOwner === false && (
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
                Your Relation to the Land Owner
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "spouse",    emoji: "💑", label: "Spouse" },
                  { value: "son",       emoji: "👨‍👩‍👦", label: "Son / Daughter" },
                  { value: "parent",    emoji: "👴", label: "Parent" },
                  { value: "sibling",   emoji: "🤝", label: "Sibling" },
                  { value: "legal_rep", emoji: "⚖️", label: "Legal Rep / PoA" },
                  { value: "other",     emoji: "👤", label: "Other" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setRelation(opt.value)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all text-left
                      ${relation === opt.value
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-200 bg-white text-stone-600 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                  >
                    <span className="text-lg">{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isOwner !== null && (isOwner || relation) && (
            <Button onClick={startPreview} className="w-full">
              🎥 Start Video Recording →
            </Button>
          )}
        </div>
      )}

      {/* Phase: Countdown */}
      {phase === "countdown" && (
        <div className="text-center py-10">
          <div className="text-8xl font-black text-stone-900 animate-pulse">
            {countdown === 0 ? "🔴" : countdown}
          </div>
          <p className="text-stone-500 mt-4 font-medium">
            {countdown > 0 ? "Recording starts in…" : "Recording!"}
          </p>
        </div>
      )}

      {/* Camera/playback */}
      {(phase === "recording" || phase === "preview") && (
        <div className="flex flex-col gap-4">
          {phase === "recording" && (
            <div className="flex items-center gap-2 justify-center">
              <span className="animate-pulse w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="text-sm font-bold text-red-600">RECORDING</span>
            </div>
          )}
          <video
            ref={videoRef}
            className="w-full rounded-xl border-2 border-stone-200 bg-black"
            style={{ maxHeight: 280 }}
          />

          {phase === "recording" && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-stone-700 font-medium mb-1">📜 Consent Script:</p>
              <p className="text-sm text-stone-600 italic">{CONSENT_SCRIPT}</p>
            </div>
          )}

          {phase === "recording" && (
            <Button variant="danger" onClick={stopRecording} className="w-full">
              ⏹ Stop Recording
            </Button>
          )}

          {phase === "preview" && (
            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => {
                  setRecordedBlob(null);
                  setCountdown(3);
                  setPhase("ownership");
                }}
                className="flex-1"
              >
                🔄 Re-record
              </Button>
              <Button
                onClick={handleSubmit}
                loading={uploading}
                className="flex-1"
              >
                ✅ Submit Video →
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Phase: Analyzing */}
      {phase === "analyzing" && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4 animate-spin inline-block">🔍</div>
          <p className="font-bold text-stone-900">Analyzing consent video…</p>
          <p className="text-stone-500 text-sm mt-1">Running AI sentiment analysis</p>
        </div>
      )}

      {/* Phase: Done */}
      {phase === "done" && sentiment && (
        <div className="text-center space-y-3">
          <div className="text-5xl">
            {sentiment.label === "negative" ? "⚠️" : "✅"}
          </div>
          <h3 className="text-xl font-black text-stone-900">
            {sentiment.label === "negative"
              ? "Flagged for Manual Review"
              : "Video Consent Accepted"}
          </h3>
          <p className="text-stone-500 text-sm">
            AI sentiment detected:{" "}
            <strong
              className={
                sentiment.label === "positive"
                  ? "text-emerald-600"
                  : sentiment.label === "negative"
                  ? "text-red-600"
                  : "text-amber-600"
              }
            >
              {sentiment.label.toUpperCase()}
            </strong>
          </p>
          {sentiment.label === "negative" && (
            <Alert type="warning">
              Your video has been flagged for manual review by the Registrar due to detected sentiment. You will be notified once reviewed.
            </Alert>
          )}
          {transcript && (
            <div className="text-left bg-stone-50 rounded-xl p-4 border border-stone-200">
              <p className="text-xs text-stone-500 font-semibold uppercase tracking-wide mb-1">Transcript</p>
              <p className="text-sm text-stone-700 italic">"{transcript}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

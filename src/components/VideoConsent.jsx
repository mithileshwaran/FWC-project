// components/VideoConsent.jsx
import { useState, useRef, useEffect } from "react";
import { Button, Alert } from "./UI";
import { useAuth } from "../hooks/useAuth.jsx";
import { saveVideoConsent } from "../utils/firestore";
import { analyzeSentiment } from "../utils/sentiment";

const CONSENT_SCRIPT =
  "I am [Your Name], the owner of survey number [Survey No.]. I am selling this property of my own free will and without any coercion. I confirm that all documents submitted are genuine.";

export default function VideoConsent({ onComplete }) {
  const { user } = useAuth();
  const liveVideoRef = useRef(null);   // live camera preview
  const playbackRef = useRef(null);    // recorded video playback
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const recognitionRef = useRef(null);
  const streamRef = useRef(null);      // keep stream reference

  const [phase, setPhase] = useState("ownership");
  const [isOwner, setIsOwner] = useState(null);
  const [relation, setRelation] = useState("");
  const [countdown, setCountdown] = useState(3);
  const [recordedUrl, setRecordedUrl] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // ── Countdown ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown === 0) { startRecording(); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, countdown]);

  // ── Attach stream to live preview when phase changes ─────────────────────
  useEffect(() => {
    if ((phase === "countdown" || phase === "recording") && streamRef.current) {
      if (liveVideoRef.current) {
        liveVideoRef.current.srcObject = streamRef.current;
        liveVideoRef.current.play().catch(() => {});
      }
    }
  }, [phase]);

  // ── Start camera ─────────────────────────────────────────────────────────
  const startPreview = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (liveVideoRef.current) {
        liveVideoRef.current.srcObject = stream;
        liveVideoRef.current.play().catch(() => {});
      }
      setPhase("countdown");
    } catch {
      setError("Camera access denied. Please allow camera and microphone in browser settings.");
    }
  };

  // ── Start recording ──────────────────────────────────────────────────────
  const startRecording = () => {
    const stream = streamRef.current;
    if (!stream) return;

    chunksRef.current = [];
    let mimeType = "video/webm;codecs=vp9,opus";
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/webm";

    const mr = new MediaRecorder(stream, { mimeType });
    mr.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
    mr.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setRecordedUrl(url);
      // stop camera stream
      stream.getTracks().forEach((t) => t.stop());
      setPhase("preview");
    };

    mediaRecorderRef.current = mr;
    mr.start(100);
    setPhase("recording");

    // Speech recognition
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
      try { rec.start(); } catch {}
    }

    setTimeout(() => stopRecording(), 60000);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    recognitionRef.current?.stop();
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
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

      {/* ── Ownership ── */}
      {phase === "ownership" && (
        <div className="space-y-5">
          <Alert type="info">
            <strong>Before recording:</strong> Please confirm your relationship to the property.
          </Alert>
          <p className="font-semibold text-stone-800">Is the person recording the video the land owner?</p>
          <div className="flex gap-3">
            {[{ val: true, label: "✅ Yes, I'm the owner" }, { val: false, label: "👥 No, I'm a representative" }].map((o) => (
              <button key={String(o.val)} onClick={() => setIsOwner(o.val)}
                className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all
                  ${isOwner === o.val ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-600 hover:border-stone-400"}`}>
                {o.label}
              </button>
            ))}
          </div>

          {isOwner === false && (
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Your Relation to the Land Owner</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "spouse", emoji: "💑", label: "Spouse" },
                  { value: "son", emoji: "👨‍👩‍👦", label: "Son / Daughter" },
                  { value: "parent", emoji: "👴", label: "Parent" },
                  { value: "sibling", emoji: "🤝", label: "Sibling" },
                  { value: "legal_rep", emoji: "⚖️", label: "Legal Rep / PoA" },
                  { value: "other", emoji: "👤", label: "Other" },
                ].map((opt) => (
                  <button key={opt.value} type="button" onClick={() => setRelation(opt.value)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all text-left
                      ${relation === opt.value ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white text-stone-700 hover:border-amber-400 hover:bg-amber-50"}`}>
                    <span className="text-lg">{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isOwner !== null && (isOwner || relation) && (
            <Button onClick={startPreview} className="w-full">🎥 Start Video Recording →</Button>
          )}
        </div>
      )}

      {/* ── Countdown — live camera always visible ── */}
      {(phase === "countdown" || phase === "recording") && (
        <div className="flex flex-col gap-4">
          {/* LIVE CAMERA */}
          <video
            ref={liveVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full rounded-xl border-2 border-stone-300 bg-black"
            style={{ maxHeight: 300, transform: "scaleX(-1)" }}
          />

          {phase === "countdown" && (
            <div className="text-center">
              <div className="text-8xl font-black text-stone-900 animate-pulse">{countdown}</div>
              <p className="text-stone-500 mt-2 font-medium">Get ready… recording starts in {countdown}s</p>
            </div>
          )}

          {phase === "recording" && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <span className="animate-pulse w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="text-sm font-bold text-red-600">🔴 RECORDING</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-stone-700 font-medium mb-1">📜 Read this aloud:</p>
                <p className="text-sm text-stone-600 italic">{CONSENT_SCRIPT}</p>
              </div>
              <Button variant="danger" onClick={stopRecording} className="w-full">⏹ Stop Recording</Button>
            </>
          )}
        </div>
      )}

      {/* ── Preview — recorded video playback ── */}
      {phase === "preview" && (
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-stone-700 text-center">Review your recording:</p>
          <video
            ref={playbackRef}
            src={recordedUrl}
            controls
            className="w-full rounded-xl border-2 border-stone-200 bg-black"
            style={{ maxHeight: 300 }}
          />
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => { setRecordedUrl(null); setCountdown(3); setTranscript(""); setPhase("ownership"); }} className="flex-1">
              🔄 Re-record
            </Button>
            <Button onClick={handleSubmit} loading={uploading} className="flex-1">
              ✅ Submit Video →
            </Button>
          </div>
        </div>
      )}

      {/* ── Analyzing ── */}
      {phase === "analyzing" && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4 animate-spin inline-block">🔍</div>
          <p className="font-bold text-stone-900">Analyzing consent video…</p>
          <p className="text-stone-500 text-sm mt-1">Running AI sentiment analysis</p>
        </div>
      )}

      {/* ── Done ── */}
      {phase === "done" && sentiment && (
        <div className="text-center space-y-3">
          <div className="text-5xl">{sentiment.label === "negative" ? "⚠️" : "✅"}</div>
          <h3 className="text-xl font-black text-stone-900">
            {sentiment.label === "negative" ? "Flagged for Manual Review" : "Video Consent Accepted"}
          </h3>
          <p className="text-stone-500 text-sm">
            AI sentiment:{" "}
            <strong className={sentiment.label === "positive" ? "text-emerald-600" : sentiment.label === "negative" ? "text-red-600" : "text-amber-600"}>
              {sentiment.label.toUpperCase()}
            </strong>
          </p>
          {sentiment.label === "negative" && (
            <Alert type="warning">Your video has been flagged for manual review by the Registrar.</Alert>
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